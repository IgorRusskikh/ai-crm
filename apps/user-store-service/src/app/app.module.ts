import { ConfigModule } from '@nestjs/config';
import { ControllersModule } from '../infrastructure/controllers/controllers.module';
import { Module } from '@nestjs/common';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ControllersModule,
  ],
})
export class AppModule {}
