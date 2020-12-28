import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateEnterpriseDto } from './dto/create-enterprise.dto';
import { UpdateEnterpriseDto } from './dto/update-enterprise.dto';
import { Enterprise } from './entities/enterprise.entity';
import { EnterpriseExceptions } from './enterprise.exeptions';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';

@Injectable()
export class EnterpriseService {
  constructor(
    @InjectRepository(Enterprise)
    private readonly enterpriseRepository: Repository<Enterprise>,
  ) {}
  async create(createEnterpriseDto: CreateEnterpriseDto, user: User) {
    const enterprise = new Enterprise();
    const data = { ...createEnterpriseDto, user };
    Object.assign(enterprise, data);

    return await this.enterpriseRepository.save(enterprise);
  }

  async findAll() {
    return await this.enterpriseRepository.findAndCount({
      relations: ['user'],
    });
  }

  async findOne(id: number) {
    const enterprise = await this.enterpriseRepository.findOne(id, {
      relations: ['user'],
    });
    if (!enterprise) new EnterpriseExceptions.EnterpriseNotFound(id);
    return enterprise;
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
