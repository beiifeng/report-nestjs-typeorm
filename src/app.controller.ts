import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('entity-manager')
  async useEntityManager(): Promise<void> {
    await this.appService.useEntityManager();
  }

  @Get('repository')
  async useRepository(): Promise<void> {
    await this.appService.useRepository();
  }
}
