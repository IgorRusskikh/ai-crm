import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { lastValueFrom } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { UserStoreService } from 'apps/api-gateway/src/app/features/user-store/user-store.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject('AUTH_SERVICE') private readonly client: ClientProxy,
    @Inject('USER_STORE_SERVICE') private readonly userStoreClient: ClientProxy,
    private readonly userStoreService: UserStoreService
  ) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  async validate(...args: any[]): Promise<any> {
    const [email, password] = args;

    const user = await lastValueFrom(
      this.client.send('auth.validate-by-email-and-password', {
        email,
        password,
      })
    );

    if (!user) {
      throw new UnauthorizedException({
        message: 'Invalid credentials',
        reason: 'Invalid credentials',
        requestId: uuidv4(),
      });
    }

    if (!user.id) {
      console.log('Warning: User object does not contain id field');
    }

    const userData = await lastValueFrom(
      this.userStoreClient.send('users.profile', {
        authId: user.id,
      })
    );
    const userStoreData = await lastValueFrom(
      this.userStoreClient.send('user-store.get-user-store-roles', {
        userId: userData.id,
      })
    );

    console.log('userStoreData', userStoreData);

    const userStoreRoles = {};

    userStoreData.forEach((data) => {
      userStoreRoles[data.store] = [
        ...(userStoreRoles[data.store] || []),
        data.role,
      ];
    });

    const redisPromise = [];

    for (const store in userStoreRoles) {
      const storeRoles = userStoreRoles[store];

      redisPromise.push(
        this.userStoreService.setUserStoreAccess(userData.id, store, storeRoles)
      );
    }

    await Promise.all(redisPromise);

    return user;
  }
}
