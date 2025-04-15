import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { rateLimiter } from '../../shared/common/rate-limiter';
import { v4 as uuidv4 } from 'uuid';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(@Inject('AUTH_SERVICE') private readonly client: ClientProxy) {}

  async checkLoginRateLimit(email: string, ip: string) {
    const key = `login_fail:${email}:${ip}`;

    try {
      const loginRateLimiter = await rateLimiter.consume(key);
    } catch (error) {
      await lastValueFrom(
        await this.client.emit('auth.recall-refresh-tokens', { email })
      );

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
