import { PartialType } from '@nestjs/mapped-types';
import { CreateEnterpriseDto } from './create-enterprise.dto';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateEnterpriseDto extends PartialType(CreateEnterpriseDto) {
  @ApiProperty()
  @IsString()
  name?: string;

  @ApiProperty()
  @IsString()
  description?: string;

  @ApiProperty()
  @IsString()
  adress?: string;

  @ApiProperty()
  @IsString()
  image?: string;

  users?: [];
  stores?: [];
}
