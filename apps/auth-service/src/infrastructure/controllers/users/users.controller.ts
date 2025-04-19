import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Prisma } from 'apps/auth-service/prisma/generated/prisma';
import { UsersUseCase } from 'apps/auth-service/src/app/use-cases/users/users.use-case';

@Controller()
export class UsersController {
  constructor(private readonly usersUseCase: UsersUseCase) {}

  @MessagePattern('users.update')
  async update(
    @Payload()
    payload: {
      authId: string;
      userUpdateDto: Prisma.UserUpdateInput;
    }
  ) {
    return await this.usersUseCase.updateUser(
      payload.authId,
      payload.userUpdateDto
    );
  }

  @MessagePattern('auth.users.update')
  async updateWithNewPattern(
    @Payload()
    payload: {
      authId: string;
      userUpdateDto: Prisma.UserUpdateInput;
    }
  ) {
    return await this.usersUseCase.updateUser(
      payload.authId,
      payload.userUpdateDto
    );
  }

  @MessagePattern('auth.users.delete')
  async delete(@Payload() payload: { userId: string }) {
    return await this.usersUseCase.deleteUser(payload.userId);
  }
}
