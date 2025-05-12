import { Express } from 'express';

export const YANDEX_STORE_SERVICE = 'YANDEX_STORE_SERVICE';

export interface IYandexStoreService {
  test(): Promise<void>;
  uploadFiles(files: Express.Multer.File[]): Promise<void>;
}
