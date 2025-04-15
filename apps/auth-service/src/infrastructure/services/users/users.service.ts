import { Prisma, User } from 'apps/auth-service/prisma/generated/prisma';

import { Injectable } from '@nestjs/common';
import { PrismaPersistence } from 'apps/auth-service/src/infrastructure/persistence/prisma.persistence';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaPersistence) {}

  async getOneById<T extends Prisma.UserInclude>({
    id,
    include,
  }: {
    id: string;
    include: T;
  }): Promise<Prisma.UserGetPayload<{ include: T }>> {
    return await this.prisma.user.findUnique({
      where: { id },
      include,
    });
  }

  async getOneByEmail<T extends Prisma.UserInclude>({
    email,
    include,
  }: {
    email: string;
    include?: T;
  }): Promise<Prisma.UserGetPayload<{ include: T }>> {
    return await this.prisma.user.findUnique({
      where: { email },
      include,
    });
  }

  async getOneByPhoneNumber<T extends Prisma.UserInclude>({
    phoneNumber,
    include,
  }: {
    phoneNumber: string;
    include?: T;
  }): Promise<Prisma.UserGetPayload<{ include: T }>> {
    return await this.prisma.user.findUnique({
      where: { phoneNumber },
      include,
    });
  }

  async getAll<T extends Prisma.UserInclude>({
    include,
  }: {
    include?: T;
  }): Promise<Prisma.UserGetPayload<{ include: T }>[]> {
    return await this.prisma.user.findMany({
      include,
    });
  }

  async create(user: Prisma.UserCreateInput): Promise<User> {
    console.log('user', user);
    return await this.prisma.user.create({
      data: user,
    });
  }
}
