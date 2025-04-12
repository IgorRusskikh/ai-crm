import { ConfigModule, ConfigService } from '@nestjs/config';

import { APP_GUARD } from '@nestjs/core';
import { ControllersModule } from '../infrastructure/controllers/controllers.module';
import { JwtAuthGuard } from '../shared/guards/jwt-auth.guard';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    ControllersModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [
    ConfigService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
