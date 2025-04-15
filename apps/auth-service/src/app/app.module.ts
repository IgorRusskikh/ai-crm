import { ConfigModule, ConfigService } from '@nestjs/config';

import { ControllersModule } from '../infrastructure/controllers/controllers.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    ControllersModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [ConfigService],
})
export class AppModule {}
