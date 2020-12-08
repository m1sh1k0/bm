import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../shared/base.entity';
import { IEnterprise } from '../enterprise';

@Entity('enterprise')
export class Enterprise extends BaseEntity implements IEnterprise {
  @Column()
  name: string;
}
