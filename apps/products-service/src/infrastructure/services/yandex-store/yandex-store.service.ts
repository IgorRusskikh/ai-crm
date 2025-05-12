import 'multer';

import {
  CreateBucketCommand,
  DeleteObjectCommand,
  HeadBucketCommand,
  PutObjectCommand,
  S3Client,
  S3ServiceException,
} from '@aws-sdk/client-s3';
import { Injectable, Logger, OnModuleInit } from '@nestjs/common';

import { ConfigService } from '@nestjs/config';
import { IYandexStoreService } from 'apps/products-service/src/app/interfaces/yandex-store.interface';

@Injectable()
export class YandexStoreService implements IYandexStoreService, OnModuleInit {
  private client: S3Client;
  private bucket: string;

  private readonly logger = new Logger(YandexStoreService.name);
  private isStorageAvailable = false;

  constructor(private readonly configService: ConfigService) {
    this.client = new S3Client({
      region: this.configService.get('YANDEX_STORAGE_REGION'),
      endpoint: this.configService.get('YANDEX_STORAGE_ENDPOINT'),
      credentials: {
        accessKeyId: this.configService.get('YANDEX_STORAGE_ACCESS_KEY_ID'),
        secretAccessKey: this.configService.get(
          'YANDEX_STORAGE_SECRET_ACCESS_KEY'
        ),
      },
      forcePathStyle: true,
    });
    this.bucket = this.configService.get('YANDEX_STORAGE_BUCKET_NAME');
  }

  async onModuleInit() {
    try {
      await this.ensureBucketExists();
    } catch (error) {
      this.logger.warn(
        `Хранилище недоступно: ${error.message}. Сервис продолжит работу без хранилища.`
      );
    }
  }

  async test() {
    this.checkStorageAvailability();

    try {
      const result = await this.client.send(
        new PutObjectCommand({
          Bucket: this.bucket,
          Key: 'bucket-text',
          Body: 'Hello bucket!',
        })
      );
      this.logger.log('Тестовый файл успешно загружен');
      console.log(result);
    } catch (error) {
      this.logger.error(`Ошибка при тестовой загрузке: ${error.message}`);
      throw error;
    }
  }

  getFilesLinks(fileKeys: string[]): string[] {
    if (!this.isStorageAvailable) {
      this.logger.warn(
        'Хранилище недоступно, получение ссылок на файлы невозможно'
      );
      return [];
    }

    const links = fileKeys.map(
      (key) => `https://storage.yandexcloud.net/${this.bucket}/${key}`
    );

    return links;
  }

  async uploadFiles(files: Express.Multer.File[]): Promise<void> {
    this.checkStorageAvailability();

    try {
      const uploadPromises = files.map((file) => {
        return this.client.send(
          new PutObjectCommand({
            Bucket: this.bucket,
            Key: file.originalname,
            Body: file.buffer,
          })
        );
      });

      await Promise.all(uploadPromises);
      this.logger.log(`Успешно загружено ${files.length} файлов`);
    } catch (error) {
      this.logger.error(`Ошибка при загрузке файлов: ${error.message}`);
      throw error;
    }
  }

  async deleteFiles(fileKeys: string[]): Promise<void> {
    this.checkStorageAvailability();

    const deletePromises = fileKeys.map((key) => {
      return this.client.send(
        new DeleteObjectCommand({
          Bucket: this.bucket,
          Key: key,
        })
      );
    });

    await Promise.all(deletePromises);
    this.logger.log(`Успешно удалено ${fileKeys.length} файлов`);
  }

  private async ensureBucketExists(): Promise<void> {
    try {
      await this.client.send(
        new HeadBucketCommand({
          Bucket: this.bucket,
        })
      );

      this.logger.log(`Бакет ${this.bucket} существует и доступен`);

      this.isStorageAvailable = true;
    } catch (error) {
      if (error.$metadata && error.$metadata.httpStatusCode === 403) {
        this.logger.warn(
          `Ошибка доступа к бакету (403 Forbidden). Проверьте права доступа и учетные данные.`
        );

        throw new Error(`Ошибка доступа к бакету: ${error.message}`);
      } else if (
        (error.$metadata && error.$metadata.httpStatusCode === 404) ||
        (error instanceof S3ServiceException && error.name === 'NotFound')
      ) {
        this.logger.log(
          `Бакет ${this.bucket} не существует, попытка создать...`
        );
        try {
          await this.client.send(
            new CreateBucketCommand({
              Bucket: this.bucket,
            })
          );

          this.logger.log(`Бакет ${this.bucket} успешно создан`);

          this.isStorageAvailable = true;
        } catch (createError) {
          this.logger.error(
            `Ошибка при создании бакета: ${createError.message}`
          );
          throw createError;
        }
      } else {
        this.logger.error(
          `Ошибка при проверке бакета: ${error.message}`,
          error.stack
        );
        throw error;
      }
    }
  }

  checkStorageAvailability(): Promise<void> {
    if (!this.isStorageAvailable) {
      this.logger.warn('Хранилище недоступно, удаление файлов невозможно');
      return;
    }
  }
}
