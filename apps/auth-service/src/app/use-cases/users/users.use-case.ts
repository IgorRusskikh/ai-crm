import { Injectable } from '@nestjs/common';
import { Prisma } from 'apps/auth-service/prisma/generated/prisma';
import { UsersService } from 'apps/auth-service/src/infrastructure/services/users/users.service';

@Injectable()
export class UsersUseCase {
  constructor(private readonly usersService: UsersService) {}

  async updateUser(authId: string, userUpdateDto: Prisma.UserUpdateInput) {
    const existsUser = await this.usersService.getOneById({
      id: authId,
    });

    if (!existsUser) {
      return {
        error: 'User not found',
        status: 404,
      };
    }

    const updatedUser = await this.usersService.update(authId, userUpdateDto);

    return updatedUser;
  }

  async deleteUser(userId: string) {
    console.log('userId', userId);

    const deletedUser = await this.usersService.delete(userId);

    if (!deletedUser) {
      return {
        error: 'User not found',
        status: 404,
      };
    }

    return deletedUser;
  }
}
