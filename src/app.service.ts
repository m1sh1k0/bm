import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'start postgres instalation bitch, autodeploy works fine !!!!!';
  }
}
