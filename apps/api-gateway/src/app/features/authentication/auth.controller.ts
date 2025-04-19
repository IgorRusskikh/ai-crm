import {
  Body,
  Controller,
  Inject,
  Ip,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Request, Response } from 'express';
import { Public } from '../../shared/decorators/public.decorator';
import { LocalAuthGuard } from '../../shared/guards/local-auth.guard';
import { SignUpDto } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  @UseGuards(LocalAuthGuard)
  @Public()
  async signin(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
    @Ip() ip: string
  ) {
    const signInDto = req.body as unknown as {
      email: string;
    };

    await this.authService.checkLoginRateLimit(signInDto.email, ip);

    if (req.user) {
      await this.authService.resetLoginRateLimit(signInDto.email, ip);
    }

    return this.authService.handleSignIn(
      req.user,
      ip,
      req.headers['user-agent'] || 'unknown',
      res
    );
  }

  @Post('signup')
  @Public()
  async signup(
    @Req() req: Request,
    @Ip() ip: string,
    @Body() signUpDto: SignUpDto
  ) {
    return this.authService.handleSignUp(
      signUpDto,
      ip,
      req.headers['user-agent'] || 'unknown'
    );
  }
}
