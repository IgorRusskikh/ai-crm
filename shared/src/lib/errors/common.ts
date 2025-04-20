import { CommonErrorCode, Error, ErrorType } from './error-codes';

export const ForbiddenError = ({
  service,
  message,
}: Pick<Error, 'service' | 'message'>) => {
  console.log(
    `[!] ${service} - ${ErrorType.FORBIDDEN}: ${message || 'Forbidden'}`
  );

  return {
    service,
    type: ErrorType.FORBIDDEN,
    code: CommonErrorCode.FORBIDDEN,
    message: message || `Forbidden`,
  };
};

export const InternalServerError = ({
  service,
  message,
}: Pick<Error, 'service' | 'message'>) => {
  console.log(
    `[!] ${service} - ${ErrorType.INTERNAL}: ${
      message || 'Internal server error'
    }`
  );

  return {
    service,
    type: ErrorType.INTERNAL,
    code: CommonErrorCode.INTERNAL_SERVER_ERROR,
    message: message || `Internal server error`,
  };
};

export const BadRequestError = ({
  service,
  message,
}: Pick<Error, 'service' | 'message'>) => {
  console.log(
    `[!] ${service} - ${ErrorType.BAD_REQUEST}: ${message || 'Bad request'}`
  );

  return {
    service,
    type: ErrorType.BAD_REQUEST,
    code: CommonErrorCode.BAD_REQUEST,
    message: message || `Bad request`,
  };
};
