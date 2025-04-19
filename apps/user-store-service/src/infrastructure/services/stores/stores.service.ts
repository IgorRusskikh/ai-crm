import { Prisma, Store } from 'apps/user-store-service/prisma/generated/prisma';

import { Injectable } from '@nestjs/common';
import { PrismaPersistence } from '../../persistence/prisma.persistence';

@Injectable()
export class StoresService {
  constructor(private readonly prisma: PrismaPersistence) {}

  async getOneById(id: string) {
    return this.prisma.store.findUnique({
      where: {
        id,
      },
    });
  }

  async getOneBySlug(slug: string): Promise<Store | any> {
    const store = await this.prisma.store.findUnique({
      where: {
        slug,
      },
    });

    if (!store) {
      return {
        type: 'error',
        message: 'Store not found',
      };
    }

    return store;
  }

  async getAll() {
    return this.prisma.store.findMany();
  }

  async create(createStoreDto: Prisma.StoreCreateInput): Promise<Store | any> {
    const existsStore = await this.getOneBySlug(createStoreDto.slug);

    if (existsStore) {
      return {
        type: 'error',
        message: 'Store already exists',
      };
    }
    return this.prisma.store.create({
      data: createStoreDto,
    });
  }

  async update(
    slug: string,
    updateStoreDto: Prisma.StoreUpdateInput
  ): Promise<Store | any> {
    const store = await this.ensureStoreExists(slug);

    return this.prisma.store.update({
      where: {
        id: store.id,
      },
      data: updateStoreDto,
    });
  }

  async delete(slug: string): Promise<Store | any> {
    const store = await this.ensureStoreExists(slug);

    return this.prisma.store.delete({
      where: {
        id: store.id,
      },
    });
  }

  private async ensureStoreExists(slug: string): Promise<Store | any> {
    const store = await this.getOneBySlug(slug);
    if (!store) {
      return {
        type: 'error',
        message: 'Store not found',
      };
    }
    return store;
  }
}
