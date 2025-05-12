import { ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { YANDEX_STORE_SERVICE } from './../../../app/interfaces/yandex-store.interface';
import { YandexStoreService } from '../../services/yandex-store/yandex-store.service';

@Module({
  imports: [],
  providers: [
    {
      provide: YANDEX_STORE_SERVICE,
      useClass: YandexStoreService,
    },
    ConfigService,
  ],
  exports: [YANDEX_STORE_SERVICE],
})
export class YandexStoreModule {}
