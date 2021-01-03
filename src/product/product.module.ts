import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { SharedModule } from 'src/shared/shared.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product-category.entity';

@Module({
  imports: [SharedModule, TypeOrmModule.forFeature([Product])],
  exports: [TypeOrmModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
