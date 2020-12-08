import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateEnterpriseDto } from './dto/create-enterprise.dto';
import { UpdateEnterpriseDto } from './dto/update-enterprise.dto';
import { Enterprise } from './entities/enterprise.entity';
import { EnterpriseExceptions } from './enterprise.exeptions';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EnterpriseService {
  constructor(
    @InjectRepository(Enterprise)
    private readonly enterpriseRepository: Repository<Enterprise>,
  ) {}
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
    Object.assign(enterprise, updateEnterpriseDto);
    return await this.enterpriseRepository.save(enterprise);
  }

  async remove(id: number) {
    return `This action removes a #${id} enterprise`;
  }
}
