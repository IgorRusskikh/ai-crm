import { Injectable } from '@nestjs/common';
import { Prisma } from 'apps/auth-service/prisma/generated/prisma';
import { PrismaPersistence } from '../../persistence/prisma.persistence';

@Injectable()
export class LoginHistoryService {
  constructor(private readonly prisma: PrismaPersistence) {}

  async createLoginHistory(
    createLoginHistoryDto: Prisma.LoginHistoryCreateInput
  ) {
    const newLogin = await this.prisma.loginHistory.create({
      data: createLoginHistoryDto,
    });

    return newLogin;
  }

  async getLoginHistory(userId: string) {
    const loginHistory = await this.prisma.loginHistory.findMany({
      where: {
        userId,
      },
    });

    return loginHistory;
  }

  async deleteLoginHistory(id: string) {
    return await this.prisma.loginHistory.delete({
      where: {
        id,
      },
    });
  }

  async clearLoginHistory(userId: string) {
    return await this.prisma.loginHistory.deleteMany({
      where: {
        userId,
      },
    });
  }
}
