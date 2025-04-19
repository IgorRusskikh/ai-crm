import { RateLimiterRedis } from 'rate-limiter-flexible';
import { redisClient } from './redis';

export const rateLimiter = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: 'login_fail',
  points: Number(process.env.AUTH_RETRIES),
  duration: Number(process.env.AUTH_RETRY_DURATION),
  blockDuration: Number(process.env.AUTH_RETRY_DURATION),
});

export const csrfLimiter = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: 'csrf_fetch',
  points: Number(process.env.CSRF_RETRIES),
  duration: Number(process.env.CSRF_RETRY_DURATION),
  blockDuration: Number(process.env.CSRF_RETRY_DURATION),
});
