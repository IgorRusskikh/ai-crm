import { AppModule } from './app/app.module';
import { Logger } from '@nestjs/common';
import MoleculerConfig from '../moleculer.config';
import { NestFactory } from '@nestjs/core';
import { ServiceBroker } from 'moleculer';

async function bootstrap() {
  const broker = new ServiceBroker(MoleculerConfig);
  await broker.start();

  const app = await NestFactory.create(AppModule);

  const globalPrefix = process.env.GLOBAL_PREFIX;
  const port = process.env.PORT || 4000;

  app.setGlobalPrefix(globalPrefix);
  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
