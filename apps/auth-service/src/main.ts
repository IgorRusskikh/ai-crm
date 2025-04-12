import { NestFactory, Reflector } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { JwtAuthGuard } from './shared/guards/jwt-auth.guard';
import { Logger } from '@nestjs/common';
import MoleculerConfig from '../moleculer.config';
import { ServiceBroker } from 'moleculer';
import cookieParser from 'cookie-parser';
import csurf from 'csurf';
import helmet from 'helmet';

async function bootstrap() {
  const broker = new ServiceBroker(MoleculerConfig);
  await broker.start();

  const app = await NestFactory.create(AppModule);

  app.use(helmet());
  app.use(cookieParser());
  app.use(
    csurf({
      cookie: {
        httpOnly: false,
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
      },
    })
  );

  const reflector = app.get(Reflector);

  app.useGlobalGuards(new JwtAuthGuard(reflector));

  const globalPrefix = process.env.GLOBAL_PREFIX;
  const port = process.env.PORT || 4000;

  app.setGlobalPrefix(globalPrefix);
  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
