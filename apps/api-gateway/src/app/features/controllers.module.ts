import * as path from 'path';

import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AuthController } from './authentication/auth.controller';
import { AuthService } from './authentication/auth.service';
import { JwtAuthGuard } from '../shared/guards/jwt-auth.guard';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../shared/strategies/jwt.strategy';
import { LocalAuthGuard } from '../shared/guards/local-auth.guard';
import { LocalStrategy } from '../shared/strategies/local.strategy';
import { Module } from '@nestjs/common';
import { StoreAccessGuard } from '../shared/guards/store-access.guard';
import { StoresController } from './stores/stores.controller';
import { StoresService } from './stores/stores.service';
import { UserStoreController } from './user-store/user-store.controller';
import { UserStoreService } from './user-store/user-store.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { readFileSync } from 'fs';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH_SERVICE',
        transport: Transport.NATS,
        options: {
          servers: [
            process.env.AUTH_SERVICE_TRANSPORTER || 'nats://localhost:4222',
          ],
          queue: process.env.AUTH_SERVICE_NAMESPACE || 'dev',
        },
      },
      {
        name: 'USER_STORE_SERVICE',
        transport: Transport.NATS,
        options: {
          servers: [
            process.env.USER_STORE_SERVICE_TRANSPORTER ||
              'nats://localhost:4222',
          ],
          queue: process.env.USER_STORE_SERVICE_NAMESPACE || 'dev',
        },
      },
    ]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const publicKeyPath = configService.get('JWT_PUBLIC_KEY');

        try {
          const publicKey = readFileSync(
            path.join(process.cwd(), 'apps/api-gateway/', publicKeyPath)
          );

          return {
            publicKey,
            signOptions: {
              expiresIn: configService.get('JWT_EXPIRATION_TIME') || '1h',
              algorithm: configService.get('JWT_ALGORITHM') || 'RS256',
            },
            verifyOptions: {
              algorithms: [configService.get('JWT_ALGORITHM') || 'RS256'],
            },
          };
        } catch (error) {
          console.error('Error reading JWT public key:', error.message);
          throw new Error(`Failed to read JWT public key: ${error.message}`);
        }
      },
    }),
  ],
  controllers: [
    AuthController,
    UsersController,
    StoresController,
    UserStoreController,
  ],
  providers: [
    ConfigService,
    LocalStrategy,
    JwtStrategy,
    LocalAuthGuard,
    JwtAuthGuard,
    AuthService,
    UsersService,
    StoresService,
    UserStoreService,
    StoreAccessGuard,
  ],
})
export class FeaturesModule {}
