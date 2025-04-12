import { RateLimiterRedis } from 'rate-limiter-flexible';
import Redis from 'ioredis';

const redisClient = new Redis({
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT),
  password: process.env.REDIS_PASSWORD,
  db: Number(process.env.REDIS_DB),
  enableOfflineQueue: false,
});

export const rateLimiter = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: 'login_fail',
  points: Number(process.env.AUTH_RETRIES),
  duration: Number(process.env.AUTH_RETRY_DURATION),
  blockDuration: Number(process.env.AUTH_RETRY_DURATION),
});
