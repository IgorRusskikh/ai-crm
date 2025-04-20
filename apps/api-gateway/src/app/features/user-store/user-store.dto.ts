export class AddUserToStoreDto {
  userId: string;
  storeId: string;
  roles: StoreRole[];
}

export enum StoreRole {
  OWNER = 'OWNER',
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
  VIEWER = 'VIEWER',
}
