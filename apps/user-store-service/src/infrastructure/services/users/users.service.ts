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

  async getUserByAuthId(authId: string, include?: Prisma.UserInclude) {
    return this.prisma.user.findFirst({
      where: {
        authId,
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

  async updateUser(userId: string, user: Prisma.UserUpdateInput) {
    return this.prisma.user.update({
      where: {
        id: userId,
      },
      data: user,
    });
  }

  async deleteUser(id: string) {
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
