import { ConfigModule, ConfigService } from '@nestjs/config';

import { AuthController } from './auth/auth.controller';
import { AuthService } from '../services/auth/auth.service';
import { AuthUseCase } from '../../app/use-cases/auth/auth.use-case';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../../shared/strategies/jwt.strategy';
import { LocalStrategy } from './../../shared/strategies/local.strategy';
import { LoginHistoryService } from '../services/login-history/login-history.service';
import { Module } from '@nestjs/common';
import { PrismaPersistence } from '../persistence/prisma.persistence';
import { TokensService } from '../services/tokens/tokens.service';
import { UsersService } from '../services/users/users.service';
import path from 'path';
import { readFileSync } from 'fs';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const privateKey = readFileSync(
          path.join(
            process.cwd(),
            'apps/auth-service/',
            configService.get('JWT_PRIVATE_KEY')
          )
        );
        const publicKey = readFileSync(
          path.join(
            process.cwd(),
            'apps/auth-service/',
            configService.get('JWT_PUBLIC_KEY')
          )
        );

        console.log('privateKey', privateKey);

        return {
          privateKey,
          publicKey,
          signOptions: {
            expiresIn: configService.get('JWT_EXPIRATION_TIME'),
            algorithm: configService.get('JWT_ALGORITHM'),
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [
    PrismaPersistence,
    ConfigService,
    UsersService,
    AuthService,
    LocalStrategy,
    JwtStrategy,
    AuthUseCase,
    TokensService,
    LoginHistoryService,
  ],
})
export class ControllersModule {}
