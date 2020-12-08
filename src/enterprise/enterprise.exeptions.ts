import { HttpException, HttpStatus } from '@nestjs/common';

export namespace EnterpriseExceptions {
  export class EnterpriseNotFound extends HttpException {
    constructor(id: number) {
      super(`Enterprise with ID ${id} not found!`, HttpStatus.NOT_FOUND);
    }
  }
}
