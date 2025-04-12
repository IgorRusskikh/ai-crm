import * as argon2 from 'argon2';

import { BadRequestException, Injectable } from '@nestjs/common';

import { JwtPayload } from 'apps/auth-service/src/app/interfaces/jwt-payload';
import { UnauthorizedException } from 'apps/auth-service/src/shared/exceptions';
import { UsersService } from '../users/users.service';
import { rateLimiter } from 'apps/auth-service/src/shared/common/rate-limiter';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUserByEmail(email: string) {
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
      return null;
    }

    return user;
  }

  async validateUserByEmailAndPassword(
    email: string,
    password: string
  ): Promise<Omit<JwtPayload, 'sub'>> {
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
      return null;
    }

    try {
      const isPasswordValid = await argon2.verify(user.password, password);

      if (!isPasswordValid) {
        throw new UnauthorizedException({
          message: 'Invalid password',
          reason: 'Invalid credentials',
          requestId: uuidv4(),
        });
      }

      const data: Omit<JwtPayload, 'sub'> = {
        id: user.id,
        email: user.email,
        phoneNumber: user.phoneNumber,
        role: user.UserRole.map((ur) => ur.role),
      };

      return data;
    } catch (error) {
      throw new UnauthorizedException({
        message: 'Invalid password',
        reason: 'Invalid credentials',
        requestId: uuidv4(),
      });
    }
  }

  async checkLoginRateLimit(email: string, ip: string) {
    const key = `login_fail:${email}:${ip}`;

    try {
      const loginRateLimiter = await rateLimiter.consume(key);
    } catch (error) {
      throw new BadRequestException({
        message: 'Too many login attempts',
        reason: 'Too many login attempts',
        requestId: uuidv4(),
      });
    }
  }

  async resetLoginRateLimit(email: string, ip: string) {
    const key = `login_fail:${email}:${ip}`;

    await rateLimiter.delete(key);
  }
}
