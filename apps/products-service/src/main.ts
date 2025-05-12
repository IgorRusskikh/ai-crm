import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { AppModule } from './app/app.module';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  Logger.log(`SERVICE_TRANSPORTER: ${process.env.SERVICE_TRANSPORTER}`);
  Logger.log(`SERVICE_NAMESPACE: ${process.env.SERVICE_NAMESPACE}`);
  Logger.log(`SERVICE_NODE_ID: ${process.env.SERVICE_NODE_ID}`);

  try {
    const app = await NestFactory.create(AppModule);

    app.connectMicroservice<MicroserviceOptions>({
      transport: Transport.NATS,
      options: {
        servers: [process.env.SERVICE_TRANSPORTER || 'nats://localhost:4222'],
        queue: process.env.SERVICE_NAMESPACE || 'dev',
        name: process.env.SERVICE_NODE_ID || 'products-service',
        timeout: 30000,
        reconnect: true,
        maxReconnectAttempts: -1,
        reconnectTimeWait: 1000,
      },
    });

    Logger.log('Запускаем микросервис продуктов...');

    await app.startAllMicroservices();
    await app.listen(4005);

    Logger.log(
      `🚀 Сервис продуктов запущен [${process.env.SERVICE_NODE_ID}] в namespace: ${process.env.SERVICE_NAMESPACE}`
    );
  } catch (error) {
    Logger.error(`Ошибка запуска микросервиса: ${error.message}`, error.stack);
    process.exit(1);
  }
}

bootstrap();
