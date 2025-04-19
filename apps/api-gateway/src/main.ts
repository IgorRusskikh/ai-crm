import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { NestFactory, Reflector } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { JwtAuthGuard } from './app/shared/guards/jwt-auth.guard';
import { Logger } from '@nestjs/common';
import cookieParser from 'cookie-parser';

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
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.NATS,
    options: {
      servers: [process.env.USER_STORE_SERVICE_TRANSPORTER],
      queue: process.env.USER_STORE_SERVICE_NAMESPACE,
      name: process.env.USER_STORE_SERVICE_NODE_ID,
    },
  });
  const globalPrefix = process.env.GLOBAL_PREFIX;

  app.setGlobalPrefix(globalPrefix);

  app.use(cookieParser());

  const reflector = new Reflector();

  app.useGlobalGuards(new JwtAuthGuard(reflector));

  const port = process.env.PORT || 40001;
  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
