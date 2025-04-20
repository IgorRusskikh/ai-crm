import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AddUserToStoreDto, StoreRole } from './user-store.dto';
import { lastValueFrom } from 'rxjs';
import { redisClient } from '../../shared/common/redis';

@Injectable()
export class UserStoreService {
  constructor(
    @Inject('USER_STORE_SERVICE') private readonly client: ClientProxy
  ) {}

  async addUserToStore(addUserToStoreDto: AddUserToStoreDto) {
    console.log('addUserToStoreDto', addUserToStoreDto);

    const newUserStore = await lastValueFrom(
      this.client.send('user-store.add-user-to-store', addUserToStoreDto)
    );

    return newUserStore;
  }

  private getRedisKey(userId: string, slug: string): string {
    return `user:${userId}:store:${slug}:roles`;
  }

  async setUserStoreAccess(userId: string, slug: string, roles: StoreRole[]) {
    const key = this.getRedisKey(userId, slug);

    if (!roles?.length) {
      await redisClient.del(key);
      return;
    }

    await redisClient.set(key, JSON.stringify(roles), 'EX', 60 * 60);
  }

  async getUserStoreAccess(
    userId: string,
    slug: string
  ): Promise<StoreRole[] | null> {
    const key = this.getRedisKey(userId, slug);

    const cached = await redisClient.get(key);
    try {
      return cached ? JSON.parse(cached) : null;
    } catch {
      return null;
    }
  }
}
