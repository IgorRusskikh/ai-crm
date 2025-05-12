import { ControllersModule } from '../infrastructure/controllers/controllers.module';
import { Module } from '@nestjs/common';
import { YandexStoreModule } from '../infrastructure/modules/yandex-store/yandex-store.module';

@Module({
  imports: [ControllersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
