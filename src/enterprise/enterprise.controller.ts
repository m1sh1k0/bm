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
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { EnterpriseService } from './enterprise.service';
import { CreateEnterpriseDto } from './dto/create-enterprise.dto';
import { UpdateEnterpriseDto } from './dto/update-enterprise.dto';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { ReqUser } from 'src/user/user.decorator';
import { User } from 'src/user/user.entity';

@ApiTags('Enterprise')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('enterprise')
export class EnterpriseController {
  constructor(private readonly enterpriseService: EnterpriseService) {}

  @Post()
  create(
    @Body() createEnterpriseDto: CreateEnterpriseDto,
    @ReqUser() user: User,
  ) {
    return this.enterpriseService.create(user.id, createEnterpriseDto);
  }

  @Get()
  findAll(@ReqUser() user) {
    return this.enterpriseService.findAll(user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @ReqUser() user: User) {
    return this.enterpriseService.findOne(user.id, +id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateEnterpriseDto: UpdateEnterpriseDto,
    @ReqUser() user: User,
  ) {
    return this.enterpriseService.update(user.id, +id, updateEnterpriseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @ReqUser() user: User) {
    return this.enterpriseService.remove(user.id, +id);
  }
}
