import { Error, ErrorType, MarketplaceTokenErrorCode } from './error-codes';

export const MarketplaceTokenNotFoundError = ({
  service,
  message,
}: Pick<Error, 'service' | 'message'>) => {
  console.log(
    `[!] ${service} - ${ErrorType.FORBIDDEN}: ${message || 'Forbidden'}`
  );

  return {
    service,
    type: ErrorType.NOT_FOUND,
    code: MarketplaceTokenErrorCode.MARKETPLACE_TOKEN_NOT_FOUND,
    message: message || `Marketplace token not found`,
  };
};

export const MarketplaceTokenAlreadyExistsError = ({
  service,
  message,
}: Pick<Error, 'service' | 'message'>) => {
  console.log(
    `[!] ${service} - ${ErrorType.CONFLICT}: ${
      message || 'Marketplace token already exists'
    }`
  );

  return {
    service,
    type: ErrorType.CONFLICT,
    code: MarketplaceTokenErrorCode.MARKETPLACE_TOKEN_ALREADY_EXISTS,
    message: message || `Marketplace token already exists`,
  };
};

export const MarketplaceTokenInvalidDataError = ({
  service,
  message,
}: Pick<Error, 'service' | 'message'>) => {
  console.log(
    `[!] ${service} - ${ErrorType.BAD_REQUEST}: ${message || 'Invalid data'}`
  );

  return {
    service,
    type: ErrorType.BAD_REQUEST,
    code: MarketplaceTokenErrorCode.MARKETPLACE_TOKEN_INVALID_DATA,
    message: message || `Marketplace token invalid data`,
  };
};
