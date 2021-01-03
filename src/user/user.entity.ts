import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

import { BaseEntity } from 'src/shared/base.entity';
import { IUser } from './user';
import { Enterprise } from 'src/enterprise/entities/enterprise.entity';

@Entity('user')
export class User extends BaseEntity implements IUser {
  @Column({ unique: true })
  public email: string;

  @Column({ select: false })
  public password: string;

  @OneToMany(
    () => Enterprise,
    photo => photo.user,
  )
  enterprises: Enterprise[];
}
