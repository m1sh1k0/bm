import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../shared/base.entity';
import { IEnterprise } from './enterprise';

@Entity('enterprise')
export class Enterprise extends BaseEntity implements IEnterprise {
  @Column({ nullable: false })
  name: string;

  @Column()
  description: string;

  @Column()
  address: string;

  @Column()
  image: string;
}
