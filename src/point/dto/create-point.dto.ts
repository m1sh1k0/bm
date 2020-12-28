import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePointDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsString()
  type: string;
}
