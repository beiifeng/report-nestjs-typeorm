import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Category, Post, User } from './entities';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env'],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          type: 'mysql',
          host: configService.get<string>('DB_HOST')!,
          port: Number.parseInt(configService.get<string>('DB_PORT')!, 10),
          username: configService.get<string>('DB_USERNAME')!,
          password: configService.get<string>('DB_PASSWORD')!,
          database: configService.get<string>('DB_DATABASE')!,
          synchronize: true,
          autoLoadEntities: true,
          logging: 'all',
          logger: 'advanced-console',
        };
      },
    }),
    TypeOrmModule.forFeature([Category, Post, User]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
