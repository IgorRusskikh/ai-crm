import {
  Services,
  UserConflictError,
  UserNotFoundError,
} from 'shared/src/lib/errors';

import { Injectable } from '@nestjs/common';
import { Prisma } from 'apps/user-store-service/prisma/generated/prisma';
import { UsersService } from 'apps/user-store-service/src/infrastructure/services/users/users.service';

@Injectable()
export class UsersUseCase {
  constructor(private readonly usersService: UsersService) {}

  async profile(authId: string) {
    try {
      const foundUser = await this.usersService.getUserByAuthId(authId);

      if (!foundUser) {
        return UserNotFoundError({
          service: Services.USER,
          message: 'User not found',
        });
      }

      return {
        id: foundUser.id,
        phoneNumber: foundUser.phoneNumber,
      };
    } catch (error) {
      console.log('error', error);
      return {
        error: error.message || 'Internal server error',
        status: error.status || 500,
      };
    }
  }

  async create(user: Prisma.UserCreateInput) {
    const existsUser = await this.usersService.getUserByAuthId(user.authId);

    if (existsUser) {
      return UserConflictError({
        service: Services.USER,
        message: `User with id ${user.authId} already exists`,
      });
    }

    const createdUser = await this.usersService.createUser(user);

    return createdUser;
  }

  async update(userId: string, userUpdateDto: Prisma.UserUpdateInput) {
    const existsUser = await this.usersService.getUserById(userId);

    if (!existsUser) {
      return UserNotFoundError({
        service: Services.USER,
        message: `User with id ${userId} not found`,
      });
    }

    const updatedUser = await this.usersService.updateUser(
      userId,
      userUpdateDto
    );

    return updatedUser;
  }

  async delete(userId: string) {
    const existsUser = await this.usersService.getUserById(userId);

    if (!existsUser) {
      return UserNotFoundError({
        service: Services.USER,
        message: `User with id ${userId} not found`,
      });
    }

    const deletedUser = await this.usersService.deleteUser(userId);

    console.log('deletedUser', deletedUser);

    return deletedUser;
  }
}
