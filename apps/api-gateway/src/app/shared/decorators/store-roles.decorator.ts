import { SetMetadata } from '@nestjs/common';
import { StoreRole } from '../../features/user-store/user-store.dto';

export const STORE_ROLES_KEY = 'store_roles';

export const StoreRoles = (...roles: StoreRole[]) =>
  SetMetadata(STORE_ROLES_KEY, roles);
