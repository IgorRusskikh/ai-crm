import { Injectable } from '@nestjs/common';
import { Prisma } from 'apps/user-store-service/prisma/generated/prisma';
import { PrismaPersistence } from '../../persistence/prisma.persistence';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaPersistence) {}

  async getUserById<T extends Prisma.UserInclude>(
    id: string,
    include?: T
  ): Promise<Prisma.UserGetPayload<{ include: T }>> {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
      include,
    });
  }

  async getUserByPhoneNumber<T extends Prisma.UserInclude>(
    phoneNumber: string,
    include?: T
  ): Promise<Prisma.UserGetPayload<{ include: T }>> {
    return this.prisma.user.findUnique({
      where: {
        phoneNumber,
      },
      include,
    });
  }

  async createUser(user: Prisma.UserCreateInput) {
    return this.prisma.user.create({
      data: user,
    });
  }
}
