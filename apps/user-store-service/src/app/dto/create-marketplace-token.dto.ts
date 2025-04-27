import { Marketplace } from 'apps/user-store-service/prisma/generated/prisma';

export class CreateMarketplaceTokenDto {
  storeSlug: string;
  marketplace: Marketplace;
  token: string;
  sellerId: string;
}
