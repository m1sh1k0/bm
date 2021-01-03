import { BaseEntity } from 'src/shared/base.entity';
import { Store } from 'src/store/entities/store.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@Entity('product')
export class Product extends BaseEntity {
  @Column({ unique: true })
  name: string;

  @Column()
  description: string;

  @ManyToOne(
    () => Store,
    store => store.id,
  )
  store: number;

  @ManyToOne(
    () => Product,
    product => product.children,
  )
  parent: number | null;

  @OneToMany(
    () => Product,
    product => product.parent,
  )
  children: Product[];
}
