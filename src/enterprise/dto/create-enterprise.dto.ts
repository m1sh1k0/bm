import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEnterpriseDto {
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
