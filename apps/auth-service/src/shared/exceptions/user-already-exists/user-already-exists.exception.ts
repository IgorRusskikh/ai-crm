import {
  BadRequestException,
  BadRequestExceptionOptions,
} from '../bad-request/bad-request.exception';

export class UserAlreadyExistsException extends BadRequestException {
  constructor(
    options?: Omit<BadRequestExceptionOptions, 'code' | 'message'>,
    email?: string,
    phoneNumber?: string
  ) {
    super({
      ...options,
      message: 'User already exists',
      code: 'USER_ALREADY_EXISTS',
      errors: {
        email: email ? ['User with this email already exists'] : undefined,
        phoneNumber: phoneNumber
          ? ['User with this phone number already exists']
          : undefined,
        ...options?.errors,
      },
    });
  }
}
