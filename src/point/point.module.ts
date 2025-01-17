import { Module } from '@nestjs/common';
import { PointService } from './point.service';
import { PointController } from './point.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Point } from './entities/point.entity';
import { BaseEntity } from 'src/shared/base.entity';

@Module({
  imports: [BaseEntity, TypeOrmModule.forFeature([Point])],
  controllers: [PointController],
  providers: [PointService],
  exports: [TypeOrmModule],
})
export class PointModule {}
