import { Enterprise } from 'src/enterprise/entities/enterprise.entity';
import { Point } from 'src/point/entities/point.entity';
import { BaseEntity } from 'src/shared/base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class Store extends BaseEntity {
  @Column()
  name: string;

  @ManyToOne(
    () => Point,
    point => point.id,
  )
  @JoinColumn()
  point: number;
}
