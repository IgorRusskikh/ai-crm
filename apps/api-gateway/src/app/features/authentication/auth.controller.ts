import {
  BadRequestException,
  Body,
  Controller,
  Inject,
  InternalServerErrorException,
  Ip,
  Logger,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Request } from 'express';
import { catchError, firstValueFrom, timeout } from 'rxjs';
import { LocalAuthGuard } from '../../shared/guards/local-auth.guard';
import { SignUpDto } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  constructor(
    private readonly authService: AuthService,
    @Inject('AUTH_SERVICE') private readonly client: ClientProxy
  ) {
    this.client.connect();
  }

  @Post('signin')
  @UseGuards(LocalAuthGuard)
  async signin(@Req() req: Request, @Ip() ip: string) {
    const signInDto = req.body as unknown as {
      email: string;
    };

    await this.authService.checkLoginRateLimit(signInDto.email, ip);

    if (req.user) {
      await this.authService.resetLoginRateLimit(signInDto.email, ip);
    }

    const user = req.user;

    return user;
  }

  @Post('signup')
  async signup(
    @Req() req: Request,
    @Ip() ip: string,
    @Body() signUpDto: SignUpDto
  ) {
    const userCreateDto = {
      user: {
        email: signUpDto.email,
        password: signUpDto.password,
        phoneNumber: signUpDto.phoneNumber,
      },
      ip: ip,
      userAgent: req.headers['user-agent'] || 'unknown',
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

      this.logger.log(`Получен ответ: ${JSON.stringify(response)}`);
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
