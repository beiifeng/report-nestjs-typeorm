import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('xz_category')
export class Category {
  @PrimaryColumn()
  declare id: string;

  @Column()
  declare name: string;

  @Column()
  declare description: string;
}
