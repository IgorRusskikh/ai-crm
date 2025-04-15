import { ClientsModule, Transport } from '@nestjs/microservices';

import { AuthController } from './authentication/auth.controller';
import { AuthService } from './authentication/auth.service';
import { LocalAuthGuard } from '../shared/guards/local-auth.guard';
import { LocalStrategy } from '../shared/strategies/local.strategy';
import { Module } from '@nestjs/common';

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
    ]),
  ],
  controllers: [AuthController],
  providers: [LocalStrategy, LocalAuthGuard, AuthService],
})
export class FeaturesModule {}
