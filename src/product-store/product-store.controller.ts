import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductStoreService } from './product-store.service';
import { CreateProductStoreDto } from './dto/create-product-store.dto';
import { UpdateProductStoreDto } from './dto/update-product-store.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
  ApiTags,
  ApiConsumes,
} from '@nestjs/swagger';

@ApiTags('Store')
@ApiBearerAuth()
@Controller('enterpeise/point/store')
export class ProductStoreController {
  constructor(private readonly productStoreService: ProductStoreService) {}

  @Post()
  create(@Body() createProductStoreDto: CreateProductStoreDto) {
    return this.productStoreService.create(createProductStoreDto);
  }

  @Get()
  findAll() {
    return this.productStoreService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productStoreService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductStoreDto: UpdateProductStoreDto,
  ) {
    return this.productStoreService.update(+id, updateProductStoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productStoreService.remove(+id);
  }
}
