export enum Marketplace {
  WILDBERRIES = 'WILDBERRIES',
  OZON = 'OZON',
  YANDEX = 'YANDEX',
}

export class CreateStoreDto {
  name: string;
  description: string;
  logoUrl: string;
}

export class UpdateStoreDto {
  name?: string;
  description?: string;
  logoUrl?: string;
}

export class CreateMarketplaceTokenDto {
  storeSlug: string;
  marketplace: Marketplace;
  token: string;
  sellerId: string;
}
