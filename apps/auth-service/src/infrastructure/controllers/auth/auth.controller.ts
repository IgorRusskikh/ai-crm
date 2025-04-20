import { Controller } from '@nestjs/common';
import { MessagePattern, Payload, RpcException } from '@nestjs/microservices';
import { LogoutDto } from 'apps/auth-service/src/app/dto/logout.dto';
import { SignInDto } from 'apps/auth-service/src/app/dto/signin-dto';
import { SignUpDto } from 'apps/auth-service/src/app/dto/signup-dto';
import { AuthUseCase } from 'apps/auth-service/src/app/use-cases/auth/auth.use-case';
import accessTokenCookie from 'apps/auth-service/src/shared/cookies/access-token.cookie';
import { AuthService } from '../../services/auth/auth.service';
import { LoginHistoryService } from '../../services/login-history/login-history.service';
import {
  Services,
  InternalServerError,
  UserNotFoundError,
} from 'shared/src/lib/errors';

@Controller()
export class AuthController {
  constructor(
    private readonly authUseCase: AuthUseCase,
    private readonly authService: AuthService,
    private readonly loginHistoryService: LoginHistoryService
  ) {}

  @MessagePattern('auth.signin')
  async signin(@Payload() signInDto: SignInDto) {
    try {
      const accessToken = await this.authUseCase.signIn(signInDto.user);
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
      console.error('Error in signin:', error);
      return InternalServerError({
        service: Services.AUTH,
        message: 'Error in signin',
      });
    }
  }

  @MessagePattern('auth.signup')
  async signup(@Payload() signUpDto: SignUpDto) {
    try {
      const { user, accessToken } = await this.authUseCase.signUp(
        signUpDto.user
      );

      await this.loginHistoryService.createLoginHistory({
        user: {
          connect: {
            id: user.id,
          },
        },
        ipAddress: signUpDto.ip,
        userAgent: signUpDto.userAgent,
      });

      return {
        userId: user.id,
        accessToken,
        cookieOptions: accessTokenCookie,
      };
    } catch (error) {
      return InternalServerError({
        service: Services.AUTH,
        message: 'Error in signup',
      });
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
      return InternalServerError({
        service: Services.AUTH,
        message: 'Error in logout',
      });
    }
  }

  @MessagePattern('auth.validate-by-email')
  async validateByEmail(@Payload() validateByEmailDto: { email: string }) {
    const user = await this.authService.validateUserByEmail(
      validateByEmailDto.email
    );

    if (!user) {
      return UserNotFoundError({
        service: Services.AUTH,
        message: 'User not found',
      });
    }

    if ('type' in user && 'code' in user) {
      return user;
    }

    const userWithRoles = user as {
      id: string;
      email: string;
      UserRole: { role: string }[];
    };

    const data = {
      id: userWithRoles.id,
      email: userWithRoles.email,
      systemRoles: userWithRoles.UserRole.map((role) => role.role),
    };

    return data;
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

      return user;
    } catch (error) {
      console.log(error);
      return InternalServerError({
        service: Services.AUTH,
        message: 'Error in validateByEmailAndPassword',
      });
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
      return InternalServerError({
        service: Services.AUTH,
        message: 'Error in recallRefreshToken',
      });
    }
  }
}
