import { HttpException, HttpStatus } from '@nestjs/common';

export namespace LocationExceptions {
  export class LocationNotFound extends HttpException {
    constructor(id: number) {
      super(`Location with ID ${id} not found!`, HttpStatus.NOT_FOUND);
    }
  }
}
