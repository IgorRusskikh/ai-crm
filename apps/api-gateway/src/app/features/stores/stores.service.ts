import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateStoreDto } from './stores.dto';
import { lastValueFrom } from 'rxjs';

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
}
