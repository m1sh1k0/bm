import { Enterprise } from 'src/enterprise/entities/enterprise.entity';
import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../shared/base.entity';
import { IPoint } from './point';

@Entity('point')
export class Point extends BaseEntity implements IPoint {
  @Column({ nullable: false })
  name: string;

  @Column()
  address: string;

  @Column()
  description: string;

  @Column()
  type: string;

  @ManyToOne(
    () => Enterprise,
    enterprise => enterprise.points,
  )
  enterprise: Enterprise;
}
