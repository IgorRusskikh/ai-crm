import {
  Body,
  Controller,
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

@Controller()
export class AuthController {
  constructor(
    private readonly authUseCase: AuthUseCase,
    private readonly authService: AuthService
  ) {}

  @Post('signin')
  @UseGuards(LocalAuthGuard)
  @Public()
  async signin(
    @Request() req: Request & { user: { email: string } },
    @Res({ passthrough: true }) res: Response,
    @Ip() ip: string
  ) {
    await this.authService.checkLoginRateLimit(req.user.email, ip);
    console.log(req.user);

    const accessToken = await this.authUseCase.signIn(req.user);

    res.cookie('access_token', accessToken, accessTokenCookie);
  }

  @Post('signup')
  @Public()
  async signup(
    @Body() userCreateDto: Prisma.UserCreateInput,
    @Res({ passthrough: true }) res: Response
  ) {
    const { accessToken } = await this.authUseCase.signUp(userCreateDto);

    res.cookie('access_token', accessToken, accessTokenCookie);
  }
}
