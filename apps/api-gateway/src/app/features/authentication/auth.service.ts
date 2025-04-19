import {
  BadRequestException,
  Inject,
  Injectable,
  Logger,
  UnauthorizedException,
  InternalServerErrorException,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { rateLimiter } from '../../shared/common/rate-limiter';
import { v4 as uuidv4 } from 'uuid';
import { lastValueFrom, firstValueFrom, catchError, timeout } from 'rxjs';
import { SignUpDto } from './auth.dto';
import { Response } from 'express';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    @Inject('AUTH_SERVICE') private readonly client: ClientProxy,
    @Inject('USER_STORE_SERVICE') private readonly userStoreClient: ClientProxy
  ) {
    this.client.connect();
    this.userStoreClient.connect();
  }

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

  async handleSignIn(user: any, ip: string, userAgent: string, res: Response) {
    try {
      const data = await lastValueFrom(
        this.client.send('auth.signin', {
          user,
          ip,
          userAgent,
        })
      );

      if (!data.accessToken || !data.cookieOptions) {
        throw new UnauthorizedException('Неверные учетные данные');
      }

      res.cookie('access_token', data.accessToken, data.cookieOptions);
      return data;
    } catch (error) {
      this.logger.error(`Ошибка при входе: ${error.message}`, error.stack);
      throw error;
    }
  }

  async handleSignUp(signUpDto: SignUpDto, ip: string, userAgent: string) {
    const userCreateDto = {
      user: {
        email: signUpDto.email,
        password: signUpDto.password,
        phoneNumber: signUpDto.phoneNumber,
      },
      ip: ip,
      userAgent: userAgent,
    };

    try {
      const response = await firstValueFrom(
        this.client.send('auth.signup', userCreateDto).pipe(
          timeout(15000),
          catchError((err) => {
            this.logger.error(
              `Ошибка при регистрации: ${err.message}`,
              err.stack
            );
            throw err;
          })
        )
      );

      const userStoreResponse = await lastValueFrom(
        this.userStoreClient.send('users.create', {
          authId: response.userId,
          phoneNumber: signUpDto.phoneNumber,
        })
      );

      return response;
    } catch (error) {
      this.logger.error(`Ошибка при регистрации: ${error.message}`);

      if (error.message === 'Timeout has occurred') {
        throw new InternalServerErrorException(
          'Превышено время ожидания ответа от сервиса аутентификации'
        );
      }

      throw new InternalServerErrorException(error.message);
    }
  }
}
