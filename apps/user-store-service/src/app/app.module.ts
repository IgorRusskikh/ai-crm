import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { PrismaPersistence } from '../infrastructure/persistence/prisma.persistence';
import { StoresController } from '../infrastructure/controllers/stores/stores.controller';
import { StoresService } from '../infrastructure/services/stores/stores.service';
import { StoresUseCase } from './use-cases/stores/stores.use-case';
import { UserStoreController } from '../infrastructure/controllers/user-store/user-store.controller';
import { UserStoreService } from '../infrastructure/services/user-store/user-store.service';
import { UserStoreUseCase } from './use-cases/user-store/user-store.use-case';
import { UsersController } from '../infrastructure/controllers/users/users.controller';
import { UsersService } from '../infrastructure/services/users/users.service';
import { UsersUseCase } from './use-cases/users/users.use-case';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [UsersController, StoresController, UserStoreController],
  providers: [
    PrismaPersistence,
    UsersService,
    UsersUseCase,
    StoresService,
    StoresUseCase,
    UserStoreService,
    UserStoreUseCase,
  ],
})
export class AppModule {}
