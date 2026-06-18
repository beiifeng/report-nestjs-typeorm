import { Injectable, Logger } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Category } from './entities';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  constructor(
    @InjectEntityManager() private readonly entityManager: EntityManager,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  public async useEntityManager(): Promise<void> {
    const repository = this.entityManager.getRepository(Category);
    const category = await repository.findOneBy({ id: '1' });
    this.logger.debug(`>>> Category: ${JSON.stringify(category)} <<<`);
  }

  public async useRepository(): Promise<void> {
    const category = await this.categoryRepository.findOneBy({ id: '1' });
    this.logger.debug(`>>> Category: ${JSON.stringify(category)} <<<`);
  }
}
