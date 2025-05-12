import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateMarketplaceTokenDto } from 'apps/user-store-service/src/app/dto/create-marketplace-token.dto';
import { MarketplaceTokenUseCase } from 'apps/user-store-service/src/app/use-cases/marketplace-token/marketplace-token.use-case';

@Controller()
export class MarketplaceTokenController {
  constructor(
    private readonly marketplaceTokenUseCase: MarketplaceTokenUseCase
  ) {}

  @MessagePattern('user-store.marketplace-token.create')
  async createMarketplaceToken(
    @Payload() createMarketplaceTokenDto: CreateMarketplaceTokenDto
  ) {
    return await this.marketplaceTokenUseCase.addMarketplaceToken(
      createMarketplaceTokenDto
    );
  }
}
