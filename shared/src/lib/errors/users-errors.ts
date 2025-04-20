import { Error, ErrorType, UserErrorCode } from './error-codes';

export const UserNotFoundError = ({
  service,
  message,
}: Pick<Error, 'service' | 'message'>) => {
  console.log(
    `[!] ${service} - ${ErrorType.NOT_FOUND}: ${message || 'User not found'}`
  );

  return {
    service,
    type: ErrorType.NOT_FOUND,
    code: UserErrorCode.USER_NOT_FOUND,
    message: message || `User not found`,
  };
};

export const UserUnauthorizedError = ({
  service,
  message,
}: Pick<Error, 'service' | 'message'>) => {
  console.log(
    `[!] ${service} - ${ErrorType.UNAUTHORIZED}: ${
      message || 'User not authorized'
    }`
  );

  return {
    service,
    type: ErrorType.UNAUTHORIZED,
    code: UserErrorCode.USER_UNAUTHORIZED,
    message: message || `User not authorized`,
  };
};

export const UserConflictError = ({
  service,
  message,
}: Pick<Error, 'service' | 'message'>) => {
  console.log(
    `[!] ${service} - ${ErrorType.CONFLICT}: ${message || 'User conflict'}`
  );

  return {
    service,
    type: ErrorType.CONFLICT,
    code: UserErrorCode.USER_CONFLICT,
    message: message || `User conflict`,
  };
};
