import { Error, ErrorType, StoreErrorCode } from './error-codes';

export const StoreNotFoundError = ({
  service,
  message,
}: Pick<Error, 'service' | 'message'>) => {
  console.log(
    `[!] ${service} - ${ErrorType.NOT_FOUND}: ${message || 'Store not found'}`
  );

  return {
    service,
    type: ErrorType.NOT_FOUND,
    code: StoreErrorCode.STORE_NOT_FOUND,
    message: message || `Store not found`,
  };
};

export const StoreConflictError = ({
  service,
  message,
}: Pick<Error, 'service' | 'message'>) => {
  console.log(
    `[!] ${service} - ${ErrorType.CONFLICT}: ${
      message || 'Store already exists'
    }`
  );

  return {
    service,
    type: ErrorType.CONFLICT,
    code: StoreErrorCode.STORE_ALREADY_EXISTS,
    message: message || `Store already exists`,
  };
};
