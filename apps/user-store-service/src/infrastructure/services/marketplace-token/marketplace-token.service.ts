import * as crypto from 'crypto';

import {
  MarketplaceTokenAlreadyExistsError,
  Services,
} from 'shared/src/lib/errors';

import { ConfigService } from '@nestjs/config';
import { CreateMarketplaceTokenDto } from 'apps/user-store-service/src/app/dto/create-marketplace-token.dto';
import { Injectable } from '@nestjs/common';
import { PrismaPersistence } from '../../persistence/prisma.persistence';
import { SafeBuffer } from 'apps/user-store-service/src/app/interfaces/safe-buffer.interface';

@Injectable()
export class MarketplaceTokenService {
  constructor(
    private readonly prisma: PrismaPersistence,
    private readonly configService: ConfigService
  ) {
    if (!this.configService.get<number>('IV_LENGTH')) {
      throw new Error('IV_LENGTH is not set');
    }
    if (!this.configService.get<string>('SECRET_KEY')) {
      throw new Error('SECRET_KEY is not set');
    }
    if (!this.configService.get<string>('ALGORITHM')) {
      throw new Error('ALGORITHM is not set');
    }
  }

  async createToken(createTokenDto: CreateMarketplaceTokenDto) {
    const existsToken = await this.prisma.marketplaceToken.findUnique({
      where: {
        storeSlug_marketplace: {
          storeSlug: createTokenDto.storeSlug,
          marketplace: createTokenDto.marketplace,
        },
      },
    });

    if (existsToken) {
      return MarketplaceTokenAlreadyExistsError({
        service: Services.STORE,
        message: 'Marketplace token already exists',
      });
    }

    const encryptedToken = this.encrypt(createTokenDto.token);
    const encryptedSellerId = this.encrypt(createTokenDto.sellerId);

    const marketplaceToken = await this.prisma.marketplaceToken.create({
      data: {
        storeSlug: createTokenDto.storeSlug,
        marketplace: createTokenDto.marketplace,
        encryptedToken: encryptedToken.encryptedToken,
        tokenIv: encryptedToken.iv,
        encryptedSellerId: encryptedSellerId.encryptedToken,
        sellerIdIv: encryptedSellerId.iv,
      },
    });

    console.log(marketplaceToken);

    return true;
  }

  private encrypt(data: string) {
    const ivLength = parseInt(this.configService.get<string>('IV_LENGTH'));
    const iv = crypto.randomBytes(ivLength);

    const keyHex = this.configService.get<string>('SECRET_KEY');
    if (!keyHex) {
      throw new Error('SECRET_KEY is not set');
    }
    const key = Buffer.from(keyHex, 'hex');

    const algorithm = this.configService.get<string>(
      'ALGORITHM'
    ) as crypto.CipherGCMTypes;

    const cipher = crypto.createCipheriv(
      algorithm,
      key as unknown as crypto.CipherKey,
      iv as unknown as Buffer & SafeBuffer
    );

    const update = cipher.update(data, 'utf8') as SafeBuffer;
    const final = cipher.final() as SafeBuffer;
    const encrypted = Buffer.concat([update, final]);

    const authTag = cipher.getAuthTag() as SafeBuffer;

    return {
      encryptedToken: Buffer.concat([
        encrypted as unknown as SafeBuffer,
        authTag,
      ]).toString('hex'),
      iv: iv.toString('hex'),
    };
  }

  protected decrypt(encryptedToken: string, iv: string) {
    const tokenBuffer = Buffer.from(encryptedToken, 'hex');
    const ivBuffer = Buffer.from(iv, 'hex');

    const encrypted = tokenBuffer.subarray(0, -16);
    const authTag = tokenBuffer.subarray(-16);

    const algorithm = this.configService.get<string>(
      'ALGORITHM'
    ) as crypto.CipherGCMTypes;
    const secretKeyHex = this.configService.get<string>('SECRET_KEY');

    if (!secretKeyHex) {
      throw new Error('SECRET_KEY is not set');
    }
    const key = Buffer.from(secretKeyHex, 'hex');

    const decipher = crypto.createDecipheriv(
      algorithm,
      key as crypto.CipherKey,
      ivBuffer as Buffer & SafeBuffer
    );
    decipher.setAuthTag(authTag as Buffer & SafeBuffer);

    const decrypted = Buffer.concat([
      decipher.update(encrypted as NodeJS.ArrayBufferView) as Uint8Array,
      decipher.final() as Uint8Array,
    ]);

    return decrypted.toString('utf8');
  }
}
