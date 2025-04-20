import { CreateUserStoreDto } from 'apps/user-store-service/src/app/dto/create-user-store.dto';
import { Injectable } from '@nestjs/common';
import { Prisma } from 'apps/user-store-service/prisma/generated/prisma';
import { PrismaPersistence } from '../../persistence/prisma.persistence';

@Injectable()
export class UserStoreService {
  constructor(private readonly prisma: PrismaPersistence) {}

  async getManyByUserId(userId: string) {
    const userStore = await this.prisma.userStore.findMany({
      where: {
        userId,
      },
      include: {
        store: {
          select: {
            slug: true,
          },
        },
      },
    });

    const formattedUserStore = userStore.map((userStore) => ({
      user: userStore.userId,
      store: userStore.store.slug,
      role: userStore.role,
    }));

    console.log('userStore', formattedUserStore);

    return formattedUserStore;
  }

  async getManyByStoreId(storeId: string) {
    return await this.prisma.userStore.findMany({
      where: {
        storeId,
      },
    });
  }

  async getManyByUserIdAndStoreId(userId: string, storeId: string) {
    return await this.prisma.userStore.findMany({
      where: {
        userId,
        storeId,
      },
    });
  }

  async create(createUserStoreDto: CreateUserStoreDto) {
    const userStore = await this.prisma.userStore.create({
      data: {
        user: {
          connect: {
            id: createUserStoreDto.userId,
          },
        },
        store: {
          connect: {
            id: createUserStoreDto.storeId,
          },
        },
        role: createUserStoreDto.role,
      },
    });

    return userStore;
  }

  async update(id: string, updateUserStoreDto: Prisma.UserStoreUpdateInput) {
    const userStore = await this.prisma.userStore.update({
      where: { id },
      data: updateUserStoreDto,
    });

    return userStore;
  }

  async delete(id: string) {
    const userStore = await this.prisma.userStore.delete({
      where: { id },
    });

    return userStore;
  }
}
