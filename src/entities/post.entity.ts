import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('xy_post')
export class Post {
  @PrimaryColumn()
  declare id: string;

  @Column()
  declare title: string;

  @Column()
  declare content: string;

  @Column()
  declare author: string;

  @Column()
  declare category: string;
}
