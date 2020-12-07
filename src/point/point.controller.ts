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

@ApiTags('Point')
@ApiBearerAuth()
@Controller('point')
export class PointController {
  @Get()
  list() {
    return 'all points of enterprise';
  }
}
