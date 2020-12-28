import { Point } from 'src/point/entities/point.entity';
import { User } from 'src/user/user.entity';
import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../../shared/base.entity';
import { IEnterprise } from './enterprise';

@Entity('enterprise')
export class Enterprise extends BaseEntity implements IEnterprise {
  @Column()
  public name!: string;

  @Column()
  public description: string;

  @Column()
  public address: string;

  @Column()
  public image: string;

  @ManyToOne(
    () => User,
    user => user.enterprises,
  )
  user: User;

  @OneToMany(
    () => Point,
    point => point.enterprise,
  )
  points: Point[];
}
