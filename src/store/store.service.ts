import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { Store } from './entities/store.entity';

@Injectable()
export class StoreService {
  constructor(
    @InjectRepository(Store)
    private readonly storeRepository: Repository<Store>,
  ) {}

  async create(dto: CreateStoreDto) {
    return this.storeRepository.save(dto).catch(err => err);
  }

  async findAll() {
    const [data, count] = await this.storeRepository.findAndCount({
      relations: ['point'],
    });
    return { data, count };
  }

  async findOne(id: number) {
    return `This action returns a #${id} Store`;
  }

  async update(id: number, dto: UpdateStoreDto) {
    return `This action updates a #${id} Store`;
  }

  async remove(id: number) {
    return `This action removes a #${id} Store`;
  }
}
