import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEnterpriseDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  description?: string;

  @ApiProperty()
  @IsString()
  address?: string;

  @ApiProperty()
  @IsString()
  image?: string;

  users?: [];
  stores?: [];
}
