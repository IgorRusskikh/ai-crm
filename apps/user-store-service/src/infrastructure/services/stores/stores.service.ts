import { Prisma, Store } from 'apps/user-store-service/prisma/generated/prisma';
import {
  StoreConflictError,
  StoreNotFoundError,
} from 'shared/src/lib/errors/store';

import { Error } from 'shared/src/lib/errors';
import { Injectable } from '@nestjs/common';
import { PrismaPersistence } from '../../persistence/prisma.persistence';
import { Services } from 'shared/src/lib/errors';
import slugify from 'slugify';
import { v4 as uuidv4 } from 'uuid';

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

  async getOneBySlug(
    slug: string,
    include?: Prisma.StoreInclude
  ): Promise<Store | null> {
    const store = await this.prisma.store.findUnique({
      where: {
        slug,
      },
      include,
    });

    if (!store) {
      return null;
    }

    return store;
  }

  async getAll() {
    return this.prisma.store.findMany();
  }

  async create(createStoreDto: Prisma.StoreCreateInput): Promise<Store | null> {
    const slug = slugify(createStoreDto.name, {
      lower: true,
      strict: true,
    });
    const uniqueSuffix = uuidv4().slice(0, 6);
    const slugWithSuffix = `${slug}-${uniqueSuffix}`;

    const existsStore = await this.getOneBySlug(slugWithSuffix);

    console.log('existsStore', existsStore);

    if (existsStore) {
      return null;
    }

    const dataToCreate = {
      ...createStoreDto,
      slug: slugWithSuffix,
    };

    return this.prisma.store.create({
      data: dataToCreate,
    });
  }

  async update(
    slug: string,
    updateStoreDto: Prisma.StoreUpdateInput
  ): Promise<Store | null> {
    const storeOrError = await this.ensureStoreExists(slug);

    if (storeOrError instanceof Error) {
      return null;
    }

    const store = storeOrError as Store;

    let newSlug;

    if (
      updateStoreDto.name !== store.name &&
      typeof updateStoreDto.name === 'string'
    ) {
      const slug = slugify(updateStoreDto.name, {
        lower: true,
        strict: true,
      });
      const uniqueSuffix = uuidv4().slice(0, 6);
      newSlug = `${slug}-${uniqueSuffix}`;
    }

    return this.prisma.store.update({
      where: {
        id: store.id,
      },
      data: {
        ...updateStoreDto,
        slug: newSlug,
      },
    });
  }

  async delete(slug: string): Promise<Store | null> {
    const storeOrError = await this.ensureStoreExists(slug);

    if (storeOrError instanceof Error) {
      return null;
    }

    const store = storeOrError as Store;

    return this.prisma.store.delete({
      where: {
        id: store.id,
      },
    });
  }

  private async ensureStoreExists(slug: string): Promise<Store | null> {
    const store = await this.getOneBySlug(slug);

    if (!store) {
      return null;
    }
    return store;
  }
}
