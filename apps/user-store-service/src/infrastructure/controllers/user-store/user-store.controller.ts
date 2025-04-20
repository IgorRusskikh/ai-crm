import { Controller } from '@nestjs/common';
import { CreateManyUserStoreDto } from 'apps/user-store-service/src/app/dto/create-user-store.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserStoreUseCase } from 'apps/user-store-service/src/app/use-cases/user-store/user-store.use-case';

@Controller()
export class UserStoreController {
  constructor(private readonly userStoreUseCase: UserStoreUseCase) {}

  @MessagePattern('user-store.add-user-to-store')
  async addUserToStore(createUserStoreDto: CreateManyUserStoreDto) {
    console.log('createUserStoreDto', createUserStoreDto);

    return await this.userStoreUseCase.addUserToStore(createUserStoreDto);
  }

  @MessagePattern('user-store.get-user-store-roles')
  async getUserStoreRoles(@Payload() payload: { userId: string }) {
    console.log('payload', payload);

    return await this.userStoreUseCase.getUserStoreRoles(payload.userId);
  }
}
