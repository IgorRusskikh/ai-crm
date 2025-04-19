import * as path from 'path';

import { ConfigModule, ConfigService } from '@nestjs/config';

import { AuthController } from './auth/auth.controller';
import { AuthService } from '../services/auth/auth.service';
import { AuthUseCase } from '../../app/use-cases/auth/auth.use-case';
import { JwtModule } from '@nestjs/jwt';
import { LoginHistoryService } from '../services/login-history/login-history.service';
import { Module } from '@nestjs/common';
import { PrismaPersistence } from '../persistence/prisma.persistence';
import { TokensService } from '../services/tokens/tokens.service';
import { UserRoleService } from '../services/user-role/user-role.service';
import { UsersController } from './users/users.controller';
import { UsersService } from '../services/users/users.service';
import { UsersUseCase } from '../../app/use-cases/users/users.use-case';
import { readFileSync } from 'fs';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const jwtPrivateKeyPath = configService.get<string>('JWT_PRIVATE_KEY');
        const jwtPublicKeyPath = configService.get<string>('JWT_PUBLIC_KEY');

        if (!jwtPrivateKeyPath || !jwtPublicKeyPath) {
          throw new Error('JWT key paths are not configured properly');
        }

        const privateKeyPath = jwtPrivateKeyPath.startsWith('/')
          ? jwtPrivateKeyPath.substring(1)
          : jwtPrivateKeyPath;

        const publicKeyPath = jwtPublicKeyPath.startsWith('/')
          ? jwtPublicKeyPath.substring(1)
          : jwtPublicKeyPath;

        try {
          const privateKey = readFileSync(
            path.join(process.cwd(), 'apps/auth-service/', privateKeyPath)
          );
          const publicKey = readFileSync(
            path.join(process.cwd(), 'apps/auth-service/', publicKeyPath)
          );

          return {
            privateKey,
            publicKey,
            signOptions: {
              expiresIn: configService.get('JWT_EXPIRATION_TIME'),
              algorithm: configService.get('JWT_ALGORITHM'),
            },
          };
        } catch (error) {
          console.error('Error reading JWT keys:', error.message);
          console.error(
            'Private key path:',
            path.join(process.cwd(), 'apps/auth-service/', privateKeyPath)
          );
          console.error(
            'Public key path:',
            path.join(process.cwd(), 'apps/auth-service/', publicKeyPath)
          );
          throw new Error(`Failed to read JWT keys: ${error.message}`);
        }
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController, UsersController],
  providers: [
    PrismaPersistence,
    ConfigService,
    UsersService,
    AuthService,
    AuthUseCase,
    TokensService,
    LoginHistoryService,
    UserRoleService,
    UsersService,
    UsersUseCase,
  ],
})
export class ControllersModule {}
