import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('xy_post')
class a {
  @PrimaryGeneratedColumn()
  declare id: number;

  @Column()
  declare title: string;

  @Column()
  declare content: string;

  @ManyToOne(() => User)
  declare author: User;

}

export { a as Post };
