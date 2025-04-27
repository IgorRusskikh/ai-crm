import { CreateMarketplaceTokenDto } from '../../dto/create-marketplace-token.dto';
import { Injectable } from '@nestjs/common';
import { MarketplaceTokenService } from 'apps/user-store-service/src/infrastructure/services/marketplace-token/marketplace-token.service';

@Injectable()
export class MarketplaceTokenUseCase {
  constructor(
    private readonly marketplaceTokenService: MarketplaceTokenService
  ) {}

  async addMarketplaceToken(
    createMarketplaceTokenDto: CreateMarketplaceTokenDto
  ) {
    return await this.marketplaceTokenService.createToken(
      createMarketplaceTokenDto
    );
  }
}
