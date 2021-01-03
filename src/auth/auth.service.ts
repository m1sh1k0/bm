import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { classToPlain } from 'class-transformer';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { User } from 'src/user/user.entity';
import { ApiConfigService } from 'src/shared/config.service';
import { AuthDto } from './auth.dto';
import { AuthExceptions } from './auth.exceptions';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly configService: ApiConfigService,
    private readonly jwtService: JwtService,
  ) {}

  public async register(authDto: AuthDto) {
    const isUserExists = await this.userRepository.findOne({
      email: authDto.email,
    });

    if (!!isUserExists) {
      throw new AuthExceptions.UserAlreadyExists();
    }

    authDto.password = await bcrypt.hash(
      authDto.password,
      this.configService.SALT_ROUNDS,
    );

    const user = await this.userRepository.save(authDto);
    const token = this.jwtService.sign(classToPlain(user));

    return {
      user,
      token,
    };
  }

  public async login(authDto: AuthDto) {
    const user = await this.userRepository.findOne(
      {
        email: authDto.email,
      },
      {
        select: ['password'],
      },
    );

    if (!user) {
      throw new AuthExceptions.InvalidCredentials();
    }

    const passwordMatch = await bcrypt.compare(authDto.password, user.password);

    if (!passwordMatch) {
      throw new AuthExceptions.InvalidCredentials();
    }

    const authUser = await this.userRepository.findOne({
      email: authDto.email,
    });

    const token = this.jwtService.sign(classToPlain(authUser));

    return {
      user: authUser,
      token,
    };
  }
}
