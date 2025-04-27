import { MarketplaceTokenController } from './marketplace-token/marketplace-token.controller';
import { MarketplaceTokenService } from '../services/marketplace-token/marketplace-token.service';
import { MarketplaceTokenUseCase } from '../../app/use-cases/marketplace-token/marketplace-token.use-case';
import { Module } from '@nestjs/common';
import { PrismaPersistence } from '../persistence/prisma.persistence';
import { StoresController } from './stores/stores.controller';
import { StoresService } from '../services/stores/stores.service';
import { StoresUseCase } from '../../app/use-cases/stores/stores.use-case';
import { UserStoreController } from './user-store/user-store.controller';
import { UserStoreService } from '../services/user-store/user-store.service';
import { UserStoreUseCase } from '../../app/use-cases/user-store/user-store.use-case';
import { UsersController } from './users/users.controller';
import { UsersService } from '../services/users/users.service';
import { UsersUseCase } from '../../app/use-cases/users/users.use-case';

@Module({
  imports: [],
  controllers: [
    UsersController,
    StoresController,
    UserStoreController,
    MarketplaceTokenController,
  ],
  providers: [
    PrismaPersistence,
    UsersService,
    UsersUseCase,
    StoresService,
    StoresUseCase,
    UserStoreService,
    UserStoreUseCase,
    MarketplaceTokenService,
    MarketplaceTokenUseCase,
  ],
})
export class ControllersModule {}
