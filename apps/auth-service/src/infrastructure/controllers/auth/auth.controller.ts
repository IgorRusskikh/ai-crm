import {
  Body,
  Controller,
  Get,
  Ip,
  Post,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Prisma } from 'apps/auth-service/prisma/generated/prisma';
import { AuthUseCase } from 'apps/auth-service/src/app/use-cases/auth/auth.use-case';
import accessTokenCookie from 'apps/auth-service/src/shared/cookies/access-token.cookie';
import { Public } from 'apps/auth-service/src/shared/decorators/public.decorator';
import { LocalAuthGuard } from 'apps/auth-service/src/shared/guards/local-auth.guard';
import { Response } from 'express';
import { AuthService } from '../../services/auth/auth.service';
import { LoginHistoryService } from '../../services/login-history/login-history.service';

@Controller()
export class AuthController {
  constructor(
    private readonly authUseCase: AuthUseCase,
    private readonly authService: AuthService,
    private readonly loginHistoryService: LoginHistoryService
  ) {}

  @Post('signin')
  @UseGuards(LocalAuthGuard)
  @Public()
  async signin(
    @Request() req: Request & { user: { id: string; email: string } },
    @Res({ passthrough: true }) res: Response,
    @Ip() ip: string
  ) {
    await this.authService.checkLoginRateLimit(req.user.email, ip);

    const accessToken = await this.authUseCase.signIn(req.user);
    await this.loginHistoryService.createLoginHistory({
      user: {
        connect: {
          id: req.user.id,
        },
      },
      ipAddress: ip,
      userAgent: req.headers['user-agent'],
    });

    res.cookie('access_token', accessToken, accessTokenCookie);
  }

  @Post('signup')
  @Public()
  async signup(
    @Body() userCreateDto: Prisma.UserCreateInput,
    @Request() req: Request & { user: { id: string } },
    @Res({ passthrough: true }) res: Response,
    @Ip() ip: string
  ) {
    const { accessToken } = await this.authUseCase.signUp(userCreateDto);
    await this.loginHistoryService.createLoginHistory({
      user: {
        connect: {
          id: req.user.id,
        },
      },
      ipAddress: ip,
      userAgent: req.headers['user-agent'],
    });

    res.cookie('access_token', accessToken, accessTokenCookie);
  }

  @Get('logout')
  async logout(
    @Request() req: Request & { user: { email: string } },
    @Res({ passthrough: true }) res: Response
  ) {
    await this.authService.recallRefreshToken(req.user.email);

    res.clearCookie('access_token');
    res.clearCookie('refresh_token');

    return {
      message: 'Logout successful',
    };
  }
}
