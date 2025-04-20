import * as argon2 from 'argon2';

import { BadRequestException, Injectable } from '@nestjs/common';
import {
  Error,
  Services,
  UserNotFoundError,
  UserUnauthorizedError,
} from 'shared/src/lib/errors';

import { JwtPayload } from 'apps/auth-service/src/app/interfaces/jwt-payload';
import { PrismaPersistence } from '../../persistence/prisma.persistence';
import { UnauthorizedException } from 'apps/auth-service/src/shared/exceptions';
import { User } from 'apps/auth-service/prisma/generated/prisma';
import { UsersService } from '../users/users.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly prisma: PrismaPersistence
  ) {}

  async validateUserByEmail(
    email: string
  ): Promise<(User & { UserRole: { role: string }[] }) | Error> {
    const user = await this.usersService.getOneByEmail({
      email,
      include: {
        UserRole: {
          select: {
            role: true,
          },
        },
      },
    });

    if (!user) {
      return UserNotFoundError({
        service: Services.AUTH,
        message: `User with email ${email} not found`,
      });
    }

    return user;
  }

  async validateUserByEmailAndPassword(
    email: string,
    password: string
  ): Promise<Omit<JwtPayload, 'sub'> | Error> {
    const user = await this.usersService.getOneByEmail({
      email,
      include: {
        UserRole: {
          select: {
            role: true,
          },
        },
      },
    });

    if (!user) {
      return UserNotFoundError({
        service: Services.AUTH,
        message: `User with email ${email} not found`,
      });
    }

    try {
      const isPasswordValid = await argon2.verify(user.password, password);

      if (!isPasswordValid) {
        return UserUnauthorizedError({
          service: Services.AUTH,
          message: 'Invalid password',
        });
      }

      const data: Omit<JwtPayload, 'sub'> = {
        id: user.id,
        email: user.email,
        phoneNumber: user.phoneNumber,
        role: user.UserRole.map((ur) => ur.role),
      };

      console.log('data', data);

      return data;
    } catch (error) {
      return UserUnauthorizedError({
        service: Services.AUTH,
        message: 'Invalid login credentials',
      });
    }
  }

  async recallRefreshToken(email: string) {
    const user = await this.usersService.getOneByEmail({
      email,
    });

    if (!user) {
      return UserNotFoundError({
        service: Services.AUTH,
        message: `User with email ${email} not found`,
      });
    }

    const recalledRefreshToken = await this.prisma.refreshToken.findMany({
      where: {
        user: {
          email: email,
        },
      },
    });

    if (recalledRefreshToken.length <= 0) {
      return recalledRefreshToken;
    }

    await this.prisma.refreshToken.deleteMany({
      where: {
        id: {
          in: recalledRefreshToken.map((rt) => rt.id),
        },
      },
    });

    return recalledRefreshToken;
  }
}
