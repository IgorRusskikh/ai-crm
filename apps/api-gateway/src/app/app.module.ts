import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { FeaturesModule } from './features/controllers.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    FeaturesModule,
  ],
  controllers: [],
  providers: [ConfigService],
})
export class AppModule {}
