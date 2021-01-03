import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product-category.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}
  async create(dto: CreateProductDto) {
    return await this.productRepository.save(dto).catch(err => err);
  }

  async findAll() {
    const [data, count] = await this.productRepository.findAndCount({
      relations: ['parent', 'children', 'store'],
    });
    return { data, count };
  }

  findOne(id: number) {
    return `This action returns a #${id} productCategory`;
  }

  update(id: number, dto: UpdateProductDto) {
    return `This action updates a #${id} productCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} productCategory`;
  }
}
