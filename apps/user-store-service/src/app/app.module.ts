import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { PrismaPersistence } from '../infrastructure/persistence/prisma.persistence';
import { StoresService } from '../infrastructure/services/stores/stores.service';
import { StoresUseCase } from './use-cases/stores/stores.use-case';
import { UsersController } from '../infrastructure/controllers/users/users.controller';
import { UsersService } from '../infrastructure/services/users/users.service';
import { UsersUseCase } from './use-cases/users/users.use-case';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [UsersController],
  providers: [
    PrismaPersistence,
    UsersService,
    UsersUseCase,
    StoresService,
    StoresUseCase,
  ],
})
export class AppModule {}
