import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { AppModule } from './app/app.module';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.NATS,
    options: {
      servers: [process.env.AUTH_SERVICE_TRANSPORTER],
      queue: process.env.AUTH_SERVICE_NAMESPACE,
      name: process.env.AUTH_SERVICE_NODE_ID,
    },
  });

  const globalPrefix = process.env.GLOBAL_PREFIX;

  app.setGlobalPrefix(globalPrefix);

  const port = process.env.PORT || 40001;
  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
