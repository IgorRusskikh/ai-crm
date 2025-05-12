import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';

import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { STORE_ROLES_KEY } from '../decorators/store-roles.decorator';
import { StoreRole } from '../../features/user-store/user-store.dto';
import { UserStoreService } from '../../features/user-store/user-store.service';

@Injectable()
export class StoreAccessGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly userStoreService: UserStoreService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<StoreRole[]>(
      STORE_ROLES_KEY,
      [context.getHandler(), context.getClass()]
    );

    if (!requiredRoles || requiredRoles.length === 0) {
      return true;
    }

    const request = context.switchToHttp().getRequest<Request>();
    const user = request.user;
    const slug = request.params.slug;

    if (!(user as any).id || !slug) {
      throw new ForbiddenException('User or slug not found');
    }

    const userStoreRoles = await this.userStoreService.getUserStoreAccess(
      (user as any).id,
      slug
    );

    if (!userStoreRoles)
      throw new ForbiddenException('User does not have access to this store');

    const hasRole = userStoreRoles.some((role) => requiredRoles.includes(role));
    if (!hasRole) throw new ForbiddenException('Insufficient permissions');

    return true;
  }
}
