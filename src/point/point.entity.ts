import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import { BaseEntity } from 'src/shared/base.entity';

@Entity('point')
export class PointEntity extends BaseEntity {}
