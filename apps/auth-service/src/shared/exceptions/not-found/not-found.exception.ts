import { HttpException, HttpStatus } from '@nestjs/common';

export class NotFoundException extends HttpException {
  constructor(entity?: string) {
    super(
      `${entity ? entity + ' not found' : 'Not found'}`,
      HttpStatus.NOT_FOUND
    );
  }
}
