import { HttpException, HttpStatus } from '@nestjs/common';

export interface UnauthorizedExceptionOptions {
  message?: string;
  reason?: string;
  requestId?: string;
  timestamp?: Date;
}

export class UnauthorizedException extends HttpException {
  constructor(options?: UnauthorizedExceptionOptions) {
    const message = options?.message || 'Unauthorized';
    const details = {
      reason: options?.reason || 'Authentication required',
      requestId: options?.requestId,
      timestamp: options?.timestamp || new Date(),
    };

    super(
      {
        message,
        details,
      },
      HttpStatus.UNAUTHORIZED
    );
  }
}
