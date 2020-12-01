import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'autodeploy completed, start postgres instalation';
  }
}
