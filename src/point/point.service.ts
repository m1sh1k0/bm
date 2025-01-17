import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePointDto } from './dto/create-point.dto';
import { UpdatePointDto } from './dto/update-point.dto';
import { Point } from './entities/point.entity';
import { LocationExceptions } from './point.exeptions';

@Injectable()
export class PointService {
  constructor(
    @InjectRepository(Point)
    private readonly pointRepository: Repository<Point>,
  ) {}
  async create(dto: CreatePointDto) {
    return await this.pointRepository.save(dto).catch(err => err);
  }

  async findAll() {
    return await this.pointRepository.findAndCount();
  }

  async findOne(id: number) {
    const point = await this.pointRepository.findOne(id);
    if (!point) new LocationExceptions.LocationNotFound(id);
    return point;
  }

  async update(id: number, updatePointDto: UpdatePointDto) {
    const point = await this.pointRepository.findOne(id);
    if (!point) new LocationExceptions.LocationNotFound(id);
    Object.assign(point, updatePointDto);
    return this.pointRepository.save(point);
  }

  async remove(id: number) {
    return `This action removes a #${id} point`;
  }
}
