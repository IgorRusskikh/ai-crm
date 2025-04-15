import { Injectable } from '@nestjs/common';
import { PrismaPersistence } from '../../persistence/prisma.persistence';
import { Role } from 'apps/auth-service/prisma/generated/prisma';

@Injectable()
export class UserRoleService {
  constructor(private readonly prisma: PrismaPersistence) {}

  async createUserRole(userId: string, role: Role) {
    return this.prisma.userRole.create({
      data: {
        role,
        user: { connect: { id: userId } },
      },
    });
  }
}
