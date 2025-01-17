import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ReqUser } from 'src/user/user.decorator';
import { AuthDto } from './auth.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt.guard';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'User register' })
  @Post('register')
  public register(@Body() authDto: AuthDto) {
    return this.authService.register(authDto);
  }

  @ApiOperation({ summary: 'User login' })
  @Post('login')
  public login(@Body() AuthDto: AuthDto) {
    return this.authService.login(AuthDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('user')
  public test(@ReqUser() user) {
    return user;
  }
}
