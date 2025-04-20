import { StoreRole } from 'apps/user-store-service/prisma/generated/prisma';

export class CreateManyUserStoreDto {
  userId: string;
  storeId: string;
  roles: StoreRole[];
}

export class CreateUserStoreDto {
  userId: string;
  storeId: string;
  role: StoreRole;
}
