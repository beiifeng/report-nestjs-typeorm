import { Injectable, Logger } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Post, User } from './entities';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  constructor(
    @InjectEntityManager() private readonly entityManager: EntityManager,
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) { }

  public async init(): Promise<string> {
    await this.entityManager.transaction(async (t) => {
      const user = t.create(User, {
        name: 'User example',
        email: 'user.example@example.com',
      });
      await t.createQueryBuilder().insert().into(User).values(user).execute();

      const post1 = t.create(Post, {
        title: 'Post example',
        content: 'Content of post example',
        author: user,
      });
      await t.createQueryBuilder().insert().into(Post).values(post1).execute();
    });

    return 'ok';
  }

  public async useEntityManager(): Promise<Post | null> {
    const repository = this.entityManager.getRepository(Post);
    const post = await repository.findOne({
      where: { id: 1 },
      relations: ['author'],
    });
    this.logger.debug(`>>> FindPost: ${JSON.stringify(post)}`);
    return post;
  }

  public async useRepository(): Promise<Post | null> {
    // `postRepository` was injected as `Repository<User>` because of `TypeOrmModule.forFeature([Post, User])`
    // so there will throw an error.
    const post = await this.postRepository.findOne({
      where: { id: 1 },
      relations: ['author'],
    });
    this.logger.debug(`>>> FindPost: ${JSON.stringify(post)}`);
    return post;
  }
}
