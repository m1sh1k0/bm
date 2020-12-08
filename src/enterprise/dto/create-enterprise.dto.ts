import { IsString } from 'class-validator';
import {} from '@nestjs/swagger';

export class CreateEnterpriseDto {
  @IsString()
  name: string;
}
