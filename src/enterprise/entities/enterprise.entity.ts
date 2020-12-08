import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../shared/base.entity';
import { IEnterprise } from './enterprise';

@Entity('enterprise')
export class Enterprise extends BaseEntity implements IEnterprise {
  @Column({ nullable: false })
  public name!: string;

  @Column({ nullable: true })
  public description!: string;

  @Column({ nullable: true })
  public address!: string;

  @Column({ nullable: true })
  public image!: string;
}
