import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateMarketplaceTokenDto, CreateStoreDto } from './stores.dto';
import { lastValueFrom } from 'rxjs';
import { Services } from 'shared/src/lib/errors/error-codes';
import { MarketplaceTokenInvalidDataError } from 'shared/src/lib/errors/marketplace-token';

@Injectable()
export class StoresService {
  constructor(
    @Inject('USER_STORE_SERVICE') private readonly client: ClientProxy
  ) {}

  async createStore(createStoreDto: CreateStoreDto) {
    const store = await lastValueFrom(
      this.client.send('userstore.stores.create', {
        store: createStoreDto,
      })
    );

    console.log(store);

    return store;
  }

  async getStore(slug: string, userId?: string) {
    return lastValueFrom(
      this.client.send('userstore.stores.get', {
        slug,
        userId,
      })
    );
  }

  async updateStore(slug: string, updateStoreDto: any) {
    return lastValueFrom(
      this.client.send('userstore.stores.update', {
        slug,
        store: updateStoreDto,
      })
    );
  }

  async deleteStore(slug: string) {
    return lastValueFrom(
      this.client.send('userstore.stores.delete', {
        slug,
      })
    );
  }

  async addMarketplaceToken(
    createMarketplaceTokenDto: CreateMarketplaceTokenDto
  ) {
    if (
      !createMarketplaceTokenDto.storeSlug ||
      !createMarketplaceTokenDto.marketplace ||
      !createMarketplaceTokenDto.token ||
      !createMarketplaceTokenDto.sellerId
    ) {
      throw new BadRequestException(
        'Все поля (storeSlug, marketplace, token, sellerId  ) должны быть указаны'
      );
    }

    const dataToCreate = {
      storeSlug: createMarketplaceTokenDto.storeSlug,
      marketplace: createMarketplaceTokenDto.marketplace,
      token: createMarketplaceTokenDto.token,
      sellerId: createMarketplaceTokenDto.sellerId,
    };

    console.log('dataToCreate', dataToCreate);

    const token = await lastValueFrom(
      this.client.send(
        'user-store.marketplace-token.create',
        createMarketplaceTokenDto
      )
    );

    console.log('token', token);

    return token;
  }
}
