import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../shared/base.entity';
import { IPoint } from '../point';

@Entity('point')
export class Point extends BaseEntity implements IPoint {
  @Column()
  name: string;
}
