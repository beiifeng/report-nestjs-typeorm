import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('xx_user')
export class User {
  @PrimaryColumn()
  declare id: string;

  @Column()
  declare name: string;

  @Column()
  declare email: string;
}
