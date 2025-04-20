import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserUnauthorizedError } from 'shared/src/lib/errors/users-errors';
import { BadRequestError } from 'shared/src/lib/errors/common';

import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientProxy } from '@nestjs/microservices';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { readFileSync } from 'fs';
import path from 'path';
import { lastValueFrom } from 'rxjs';
import { Services } from 'shared/src/lib/errors/error-codes';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private readonly configService: ConfigService,
    @Inject('AUTH_SERVICE') private readonly authClient: ClientProxy,
    @Inject('USER_STORE_SERVICE') private readonly userStoreClient: ClientProxy
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          if (process.env.NODE_ENV === 'production' && !request.secure) {
            return BadRequestError({
              service: Services.AUTH,
              message: 'No secure connection',
            });
          }

          if (!request.cookies) {
            return UserUnauthorizedError({
              service: Services.AUTH,
              message: 'No authentication token provided',
            });
          }

          const data = Object.keys(request.cookies);

          if (!data) {
            return UserUnauthorizedError({
              service: Services.AUTH,
              message: 'No authentication token provided',
            });
          }

          return request.cookies['access_token'];
        },
      ]),
      ignoreExpiration: false,
      secretOrKey: readFileSync(
        path.join(
          process.cwd(),
          'apps/api-gateway/',
          configService.get('JWT_PUBLIC_KEY')
        )
      ),
    });
  }

  async validate(payload: any) {
    const user = await lastValueFrom(
      this.authClient.send('auth.validate-by-email', {
        email: payload.email,
      })
    );

    if (!user) {
      return UserUnauthorizedError({
        service: Services.AUTH,
        message: "User doesn't exists",
      });
    }

    const userData = await lastValueFrom(
      this.userStoreClient.send('users.profile', {
        authId: user.id,
      })
    );

    if (userData && userData.error) {
      return UserUnauthorizedError({
        service: Services.AUTH,
        message: userData.error,
      });
    }

    const userRoles = user.systemRoles;

    const data = {
      ...userData,
      authId: user.id,
      email: user.email,
      roles: userRoles,
    };

    return data;
  }
}
