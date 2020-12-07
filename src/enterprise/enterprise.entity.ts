import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import { BaseEntity } from 'src/shared/base.entity';

@Entity('enterprise')
export class EnterpriseEntity extends BaseEntity {}
