import { JwtService, JwtSignOptions } from '@nestjs/jwt';

import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { JwtPayload } from 'apps/auth-service/src/app/interfaces/jwt-payload';
import { PrismaPersistence } from '../../persistence/prisma.persistence';

@Injectable()
export class TokensService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly prisma: PrismaPersistence
  ) {}

  async createOrUpdateRefreshToken(tokenDto: {
    userId: string;
    token: string;
    expiresAt: Date;
  }) {
    const { userId, ...rest } = tokenDto;

    return this.prisma.refreshToken.upsert({
      where: {
        token: rest.token,
      },
      update: {
        ...rest,
        user: {
          connect: {
            id: userId,
          },
        },
      },
      create: {
        ...rest,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }

  async deleteRefreshTokensByUserId(userId: string) {
    return this.prisma.refreshToken.deleteMany({
      where: {
        userId,
      },
    });
  }

  async deleteRefreshTokenByToken(token: string) {
    return this.prisma.refreshToken.delete({
      where: {
        token,
      },
    });
  }

  async signAccessToken(payload: Omit<JwtPayload, 'id'>) {
    return this.signJwt({
      payload,
      options: {
        expiresIn: this.configService.get('ACCESS_TOKEN_EXPIRATION_TIME'),
      },
    });
  }

  async signRefreshToken(payload: Omit<JwtPayload, 'id'>) {
    return this.signJwt({
      payload,
      options: {
        expiresIn: this.configService.get('REFRESH_TOKEN_EXPIRATION_TIME'),
      },
    });
  }

  async verifyAccessToken(token: string) {
    return this.jwtService.verify(token);
  }

  async verifyRefreshToken(token: string) {
    return this.jwtService.verify(token);
  }

  private async signJwt<T extends object | Buffer>({
    payload,
    options,
  }: {
    payload: T;
    options: JwtSignOptions;
  }) {
    return this.jwtService.sign(payload, options);
  }
}
