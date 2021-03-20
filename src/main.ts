import { NestFactory } from '@nestjs/core';
import { Logger } from "@nestjs/common";

import { AppModule } from './app.module';
import 'dotenv/config';

const port = process.env.PORT || 8080;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    methods: ['GET', 'POST', 'PUT'],
    origin: ['31.202.47.15:8081', '31.202.47.15:8080'],
  })
  await app.listen(port);
  Logger.log(`Server is running on http://localhost:${port}`, 'Bootstrap')
}
bootstrap();
