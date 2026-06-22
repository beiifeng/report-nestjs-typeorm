import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('xx_user')
class a {
  @PrimaryGeneratedColumn()
  declare id: number;

  @Column()
  declare name: string;

  @Column()
  declare email: string;
}

export { a as User };
