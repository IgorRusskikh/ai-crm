import { Controller } from '@nestjs/common';
import { MessagePattern, Payload, RpcException } from '@nestjs/microservices';
import { LogoutDto } from 'apps/auth-service/src/app/dto/logout.dto';
import { SignInDto } from 'apps/auth-service/src/app/dto/signin-dto';
import { SignUpDto } from 'apps/auth-service/src/app/dto/signup-dto';
import { AuthUseCase } from 'apps/auth-service/src/app/use-cases/auth/auth.use-case';
import accessTokenCookie from 'apps/auth-service/src/shared/cookies/access-token.cookie';
import { AuthService } from '../../services/auth/auth.service';
import { LoginHistoryService } from '../../services/login-history/login-history.service';

@Controller()
export class AuthController {
  constructor(
    private readonly authUseCase: AuthUseCase,
    private readonly authService: AuthService,
    private readonly loginHistoryService: LoginHistoryService
  ) {}

  @MessagePattern('auth.signin')
  async signin(@Payload() signInDto: SignInDto) {
    console.log(signInDto);

    try {
      const accessToken = await this.authUseCase.signIn(signInDto);
      await this.loginHistoryService.createLoginHistory({
        user: {
          connect: {
            id: signInDto.user.id,
          },
        },
        ipAddress: signInDto.ip,
        userAgent: signInDto.userAgent,
      });

      return {
        accessToken,
        cookieOptions: accessTokenCookie,
      };
    } catch (error) {
      throw new RpcException(error.message || 'Ошибка при входе в систему');
    }
  }

  @MessagePattern('auth.signup')
  async signup(@Payload() signUpDto: SignUpDto) {
    console.log(signUpDto);

    try {
      const { user, accessToken } = await this.authUseCase.signUp(
        signUpDto.user
      );

      console.log({ user });

      await this.loginHistoryService.createLoginHistory({
        user: {
          connect: {
            id: user.id,
          },
        },
        ipAddress: signUpDto.ip,
        userAgent: signUpDto.userAgent,
      });

      console.log({ accessToken, cookieOptions: accessTokenCookie });

      return {
        accessToken,
        cookieOptions: accessTokenCookie,
      };
    } catch (error) {
      throw new RpcException(error.message || 'Ошибка при регистрации');
    }
  }

  @MessagePattern('auth.logout')
  async logout(@Payload() logoutDto: LogoutDto) {
    try {
      await this.authService.recallRefreshToken(logoutDto.user.email);

      return {
        message: 'Logout successful',
      };
    } catch (error) {
      throw new RpcException(error.message || 'Ошибка при выходе');
    }
  }

  @MessagePattern('auth.validate-by-email-and-password')
  async validateByEmailAndPassword(
    @Payload()
    validateByEmailAndPasswordDto: {
      email: string;
      password: string;
    }
  ) {
    try {
      const user = await this.authService.validateUserByEmailAndPassword(
        validateByEmailAndPasswordDto.email,
        validateByEmailAndPasswordDto.password
      );

      console.log('user', user);

      return user;
    } catch (error) {
      console.log(error);
      throw new RpcException(error.message || 'Ошибка при валидации');
    }
  }

  @MessagePattern('auth.recall-refresh-tokens')
  async recallRefreshToken(
    @Payload() recallRefreshTokenDto: { email: string }
  ) {
    try {
      await this.authService.recallRefreshToken(recallRefreshTokenDto.email);

      return {
        message: 'Refresh tokens recalled successfully',
      };
    } catch (error) {
      throw new RpcException(error.message || 'Ошибка при вызове метода');
    }
  }
}
