import { HttpException, HttpStatus } from '@nestjs/common';

export interface BadRequestExceptionOptions {
  message?: string;
  errors?: Record<string, string[]>;
  code?: string;
  path?: string;
  requestId?: string;
  timestamp?: Date;
}

export class BadRequestException extends HttpException {
  constructor(options?: BadRequestExceptionOptions) {
    const message = options?.message || 'Bad Request';
    const details = {
      errors: options?.errors || {},
      code: options?.code || 'VALIDATION_ERROR',
      path: options?.path,
      requestId: options?.requestId,
      timestamp: options?.timestamp || new Date(),
    };

    super(
      {
        message,
        details,
      },
      HttpStatus.BAD_REQUEST
    );
  }
}
