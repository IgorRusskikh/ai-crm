import { Injectable } from '@nestjs/common';
import { Prisma } from 'apps/user-store-service/prisma/generated/prisma';
import { StoresService } from 'apps/user-store-service/src/infrastructure/services/stores/stores.service';

@Injectable()
export class StoresUseCase {
  constructor(private readonly storesService: StoresService) {}

  async createStore(createStoreDto: Prisma.StoreCreateInput) {
    const store = await this.storesService.create(createStoreDto);

    return store;
  }

  async getStore(slug: string, include?: Prisma.StoreInclude) {
    const store = await this.storesService.getOneBySlug(slug, include);

    console.log('STORE INSTANCE OF ERROR', store instanceof Error);

    if (store instanceof Error) {
      return store;
    }

    return store;
  }

  async updateStore(slug: string, updateStoreDto: Prisma.StoreUpdateInput) {
    const store = await this.storesService.update(slug, updateStoreDto);

    if (store instanceof Error) {
      return store;
    }

    return store;
  }

  async deleteStore(slug: string) {
    const store = await this.storesService.delete(slug);

    return store;
  }
}
