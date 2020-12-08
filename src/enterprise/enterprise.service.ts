import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateEnterpriseDto } from './dto/create-enterprise.dto';
import { UpdateEnterpriseDto } from './dto/update-enterprise.dto';
import { Enterprise } from './entities/enterprise.entity';
import { EnterpriseExceptions } from './enterprise.exeptions';

@Injectable()
export class EnterpriseService {
  constructor(private readonly enterpriseRepository: Repository<Enterprise>) {}
  async create(createEnterpriseDto: CreateEnterpriseDto) {
    return await this.enterpriseRepository.save(createEnterpriseDto);
  }

  async findAll() {
    return await this.enterpriseRepository.findAndCount();
  }

  async findOne(id: number) {
    const enterprise = await this.enterpriseRepository.findOne(id);
    if (!enterprise) new EnterpriseExceptions.EnterpriseNotFound(id);
    return;
  }

  async update(id: number, updateEnterpriseDto: UpdateEnterpriseDto) {
    const enterprise = await this.enterpriseRepository.findOne(id);
    if (!enterprise) new EnterpriseExceptions.EnterpriseNotFound(id);
    return await this.enterpriseRepository.save(
      enterprise,
      updateEnterpriseDto,
    );
  }

  async remove(id: number) {
    return `This action removes a #${id} enterprise`;
  }
}
