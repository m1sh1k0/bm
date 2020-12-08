import { PartialType } from '@nestjs/mapped-types';
import { CreatePointDto } from './create-point.dto';

export class UpdatePointDto extends PartialType(CreatePointDto) {
  name: string;
  address?: string;
  description?: string;
  type?: string;
}
