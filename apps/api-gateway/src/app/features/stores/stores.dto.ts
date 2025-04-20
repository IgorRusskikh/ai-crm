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
