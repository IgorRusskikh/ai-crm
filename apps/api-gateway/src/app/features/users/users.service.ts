import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { Services } from 'shared/src/lib/errors/error-codes';
import { UserNotFoundError } from 'shared/src/lib/errors/users-errors';
import { UpdateUserDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_STORE_SERVICE') private readonly userStoreClient: ClientProxy,
    @Inject('AUTH_SERVICE') private readonly authClient: ClientProxy
  ) {}

  async profile(user: any) {
    const userProfile = await lastValueFrom(
      this.userStoreClient.send('users.profile', { authId: user.id })
    );

    const combinedUserProfile = {
      ...userProfile,
      authId: user.id,
      email: user.email,
      systemRoles: user.systemRoles,
    };

    return combinedUserProfile;
  }

  async update(userId: string, authId: string, updateUserDto: UpdateUserDto) {
    const userServiceUpdateUserDto = {
      phoneNumber: updateUserDto.phoneNumber,
    };
    const authServiceUpdateUserDto = {
      email: updateUserDto.email,
      phoneNumber: updateUserDto.phoneNumber,
    };

    const [updatedUserUserService, updatedUserAuthService] = await Promise.all([
      lastValueFrom(
        this.userStoreClient.send('userstore.users.update', {
          userId: userId,
          userUpdateDto: userServiceUpdateUserDto,
        })
      ),
      lastValueFrom(
        this.authClient.send('auth.users.update', {
          authId: authId,
          userUpdateDto: authServiceUpdateUserDto,
        })
      ),
    ]);

    const combinedUpdatedUser = {
      ...updatedUserUserService,
      ...updatedUserAuthService,
    };

    return combinedUpdatedUser;
  }

  async delete(userId: string, authId: string) {
    const [deletedUserUserService, deletedUserAuthService] = await Promise.all([
      lastValueFrom(
        this.userStoreClient.send('userstore.users.delete', { userId: userId })
      ),
      lastValueFrom(
        this.authClient.send('auth.users.delete', { userId: authId })
      ),
    ]);

    if (!deletedUserUserService || !deletedUserAuthService) {
      return UserNotFoundError({
        service: Services.USER,
        message: 'User not found',
      });
    }

    console.log('deletedUserUserService', deletedUserUserService);
    console.log('deletedUserAuthService', deletedUserAuthService);

    return true;
  }
}
