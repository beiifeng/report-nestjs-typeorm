import { Controller, Get, Post as MPost } from '@nestjs/common';
import { AppService } from './app.service';
import { Post } from './entities';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @MPost('init')
  async init(): Promise<string> {
    return await this.appService.init();
  }

  @Get('entity-manager')
  async useEntityManager(): Promise<Post | null> {
    return await this.appService.useEntityManager();
  }

  @Get('repository')
  async useRepository(): Promise<Post | null> {
    return await this.appService.useRepository();
  }
}
