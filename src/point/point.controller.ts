import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UploadedFile,
  UseInterceptors,
  Response,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
  ApiTags,
  ApiConsumes,
} from '@nestjs/swagger';
import { PointService } from './point.service';
import { CreatePointDto } from './dto/create-point.dto';
import { UpdatePointDto } from './dto/update-point.dto';

@ApiTags('Enterprise/Point')
@ApiBearerAuth()
@Controller('enterprise/point')
export class PointController {
  constructor(private readonly pointService: PointService) {}

  @Post()
  create(@Body() createPointDto: CreatePointDto) {
    return this.pointService.create(createPointDto);
  }

  @Get()
  findAll() {
    return this.pointService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pointService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePointDto: UpdatePointDto) {
    return this.pointService.update(+id, updatePointDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pointService.remove(+id);
  }
}
