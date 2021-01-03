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
  async create(user: number, createEnterpriseDto: CreateEnterpriseDto) {
    const enterprise = new Enterprise();
    const data = { ...createEnterpriseDto, user };
    Object.assign(enterprise, data);

    return await this.enterpriseRepository.save(enterprise).catch(err => err);
  }

  async findAll(userId: number) {
    const [data, count] = await this.enterpriseRepository.findAndCount({
      relations: ['user'],
      where: { user: { id: userId } },
    });
    return { data, count };
  }

  async findOne(userId, id: number) {
    const enterprise = await this.enterpriseRepository.findOne(id, {
      relations: ['user'],
      where: { user: { id: userId } },
    });
    if (!enterprise) new EnterpriseExceptions.EnterpriseNotFound(id);
    return enterprise;
  }

  async update(userId, id: number, updateEnterpriseDto: UpdateEnterpriseDto) {
    const enterprise = await this.enterpriseRepository.findOne({
      where: { user: { id: userId } },
    });
    if (!enterprise) new EnterpriseExceptions.EnterpriseNotFound(id);
    Object.assign(enterprise, updateEnterpriseDto);
    return await this.enterpriseRepository.save(enterprise);
  }

  async remove(userId, id: number) {
    const enterprise = await this.enterpriseRepository.findOne(id, {
      relations: ['user'],
      where: {
        id,
        user: { id: userId },
      },
    });
    if (!enterprise) new EnterpriseExceptions.EnterpriseNotFound(id);
    await this.enterpriseRepository.delete(id);
    return { message: `Enterprise with ID ${id} deleted` };
  }
}
