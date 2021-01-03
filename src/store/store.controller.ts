import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { StoreService } from './store.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
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
@Controller('enterprise/point/store')
export class StoreController {
  constructor(private readonly StoreService: StoreService) {}

  @Post()
  create(@Body() createStoreDto: CreateStoreDto) {
    return this.StoreService.create(createStoreDto);
  }

  @Get()
  findAll() {
    return this.StoreService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.StoreService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateStoreDto: UpdateStoreDto) {
    return this.StoreService.update(+id, updateStoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.StoreService.remove(+id);
  }
}
