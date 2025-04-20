import {
  Prisma,
  StoreRole,
} from 'apps/user-store-service/prisma/generated/prisma';

import { CreateManyUserStoreDto } from 'apps/user-store-service/src/app/dto/create-user-store.dto';
import { Injectable } from '@nestjs/common';
import { UserStoreService } from 'apps/user-store-service/src/infrastructure/services/user-store/user-store.service';

@Injectable()
export class UserStoreUseCase {
  constructor(private readonly userStoreService: UserStoreService) {}

  async getUserStoreRoles(userId: string) {
    return await this.userStoreService.getManyByUserId(userId);
  }

  async addUserToStore(createUserStoreDto: CreateManyUserStoreDto) {
    const { roles, ...dataToCreate } = createUserStoreDto;

    const existsUserRoles =
      await this.userStoreService.getManyByUserIdAndStoreId(
        createUserStoreDto.userId,
        createUserStoreDto.storeId
      );

    const rolesToCreate = createUserStoreDto.roles.filter(
      (role) => !existsUserRoles.some((userRole) => userRole.role === role)
    );

    const recordsQty = rolesToCreate.map((role) => {
      console.log({ ...dataToCreate, role });

      return this.userStoreService.create({
        ...dataToCreate,
        role,
      });
    });

    const records = await Promise.all(recordsQty);

    console.log(records);

    return records;
  }

  async removeUserFromStore(id: string) {
    return await this.userStoreService.delete(id);
  }
}
