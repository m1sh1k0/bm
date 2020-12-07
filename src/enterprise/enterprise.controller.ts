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
@ApiTags('Enterprise')
@ApiBearerAuth()
@Controller('enterprise')
export class EnterpriseController {
  @Get('/:id')
  @ApiParam({ name: 'id', type: 'number' })
  view(@Param() id: string) {
    return id;
  }

  @Get()
  list() {
    return 'all enterprises';
  }
}
