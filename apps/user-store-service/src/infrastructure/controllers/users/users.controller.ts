import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Prisma } from 'apps/user-store-service/prisma/generated/prisma';
import { UsersUseCase } from 'apps/user-store-service/src/app/use-cases/users/users.use-case';

@Controller()
export class UsersController {
  constructor(private readonly usersUseCase: UsersUseCase) {}

  @MessagePattern('users.profile')
  async profile(@Payload() payload: { authId: string }) {
    return this.usersUseCase.profile(payload.authId);
  }

  @MessagePattern('users.create')
  async create(@Payload() payload: Prisma.UserCreateInput) {
    return this.usersUseCase.create(payload);
  }

  @MessagePattern('users.update')
  async update(
    @Payload()
    payload: {
      userId: string;
      userUpdateDto: Prisma.UserUpdateInput;
    }
  ) {
    console.log('payload', payload);
    return this.usersUseCase.update(payload.userId, payload.userUpdateDto);
  }

  @MessagePattern('userstore.users.update')
  async updateWithNewPattern(
    @Payload()
    payload: {
      userId: string;
      userUpdateDto: Prisma.UserUpdateInput;
    }
  ) {
    console.log('userstore.users.update payload', payload);
    return this.usersUseCase.update(payload.userId, payload.userUpdateDto);
  }

  @MessagePattern('userstore.users.delete')
  async delete(@Payload() payload: { userId: string }) {
    return this.usersUseCase.delete(payload.userId);
  }
}
