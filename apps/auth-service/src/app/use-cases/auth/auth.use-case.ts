import * as argon2 from 'argon2';

import {
  BadRequestException,
  UserAlreadyExistsException,
} from 'apps/auth-service/src/shared/exceptions';
import { Prisma, Role } from 'apps/auth-service/prisma/generated/prisma';

import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { TokensService } from 'apps/auth-service/src/infrastructure/services/tokens/tokens.service';
import { UserRoleService } from 'apps/auth-service/src/infrastructure/services/user-role/user-role.service';
import { UsersService } from 'apps/auth-service/src/infrastructure/services/users/users.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AuthUseCase {
  constructor(
    private readonly tokensService: TokensService,
    private readonly usersService: UsersService,
    private readonly configService: ConfigService,
    private readonly userRoleService: UserRoleService
  ) {}

  async signIn(user: any) {
    if (!user.email) {
      throw new BadRequestException({
        message: 'Invalid user object',
        code: 'INVALID_USER_OBJECT',
        requestId: uuidv4(),
        path: '/auth/signin',
      });
    }

    const role = user.role || user.UserRole?.map((ur) => ur.role) || [];

    const payload = {
      email: user.email,
      role,
      sub: user.id,
    };

    const accessToken = await this.tokensService.signAccessToken(payload);
    const refreshToken = await this.tokensService.signRefreshToken(payload);

    const newRefreshToken = await this.tokensService.createOrUpdateRefreshToken(
      {
        userId: user.id,
        token: refreshToken,
        expiresAt: new Date(
          Date.now() +
            Number(
              this.configService.get('REFRESH_TOKEN_EXPIRATION_TIME_FOR_DB')
            ) *
              1000
        ),
      }
    );

    if (!newRefreshToken) {
      throw new BadRequestException({
        message: 'Failed to create refresh token',
        code: 'REFRESH_TOKEN_CREATION_FAILED',
        requestId: uuidv4(),
        path: '/auth/signin',
      });
    }

    return accessToken;
  }

  async signUp(user: Prisma.UserCreateInput) {
    const existingUserByEmail = await this.usersService.getOneByEmail({
      email: user.email,
    });

    const existingUserByPhoneNumber =
      await this.usersService.getOneByPhoneNumber({
        phoneNumber: user.phoneNumber,
      });

    if (existingUserByEmail || existingUserByPhoneNumber) {
      throw new UserAlreadyExistsException(
        {
          requestId: uuidv4(),
          path: '/auth/signup',
        },
        existingUserByEmail?.email,
        existingUserByPhoneNumber?.phoneNumber
      );
    }

    try {
      const { password, ...rest } = user;

      const hashedPassword = await argon2.hash(password);
      const newUser = await this.usersService.create({
        ...rest,
        password: hashedPassword,
      });

      await this.userRoleService.createUserRole(newUser.id, Role.USER);

      if (!newUser) {
        throw new BadRequestException({
          message: 'Failed to create user',
          code: 'USER_CREATION_FAILED',
          requestId: uuidv4(),
          path: '/auth/signup',
        });
      }

      const refreshToken = await this.tokensService.signRefreshToken({
        email: newUser.email,
        sub: newUser.id,
        role: [Role.USER],
      });

      const accessToken = await this.tokensService.signAccessToken({
        email: newUser.email,
        sub: newUser.id,
        role: [Role.USER],
      });

      const newRefreshToken =
        await this.tokensService.createOrUpdateRefreshToken({
          userId: newUser.id,
          token: refreshToken,
          expiresAt: new Date(
            Date.now() +
              Number(
                this.configService.get('REFRESH_TOKEN_EXPIRATION_TIME_FOR_DB')
              ) *
                1000
          ),
        });

      if (!newRefreshToken) {
        throw new BadRequestException({
          message: 'Failed to create refresh token',
          code: 'REFRESH_TOKEN_CREATION_FAILED',
          requestId: uuidv4(),
          path: '/auth/signup',
        });
      }

      return {
        user: newUser,
        accessToken,
        refreshToken,
      };
    } catch (err) {
      console.log('err', err);

      throw new BadRequestException({
        message: 'Failed to create user',
        code: 'USER_CREATION_FAILED',
        requestId: uuidv4(),
        path: '/auth/signup',
      });
    }
  }

  async signOut(userId: string) {
    await this.tokensService.deleteRefreshTokensByUserId(userId);
  }
}
