import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('Main');

  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000, process.env.HOST ?? '127.0.0.1');

  logger.log(`>>> The application start at: ${await app.getUrl()} <<<`);
  logger.log(`>>> Elapsed time: ${performance.now()}ms <<<`);
}
bootstrap();
