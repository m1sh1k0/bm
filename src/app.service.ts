import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'autodeploy finaly works ! start postges instalation';
  }
}
