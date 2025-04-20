import { Controller, Post, Body } from '@nestjs/common';
import { UserStoreService } from './user-store.service';
import { AddUserToStoreDto } from './user-store.dto';

@Controller('user-store')
export class UserStoreController {
  constructor(private readonly userStoreService: UserStoreService) {}

  @Post()
  async addUserToStore(@Body() addUserToStoreDto: AddUserToStoreDto) {
    return this.userStoreService.addUserToStore(addUserToStoreDto);
  }
}
