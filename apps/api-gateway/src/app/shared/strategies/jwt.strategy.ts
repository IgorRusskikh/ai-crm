import { ExtractJwt, Strategy } from 'passport-jwt';

import {
  BadRequestException,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientProxy } from '@nestjs/microservices';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { readFileSync } from 'fs';
import path from 'path';
import { lastValueFrom } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

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
            throw new BadRequestException({
              reason: 'No secure connection',
              requestId: uuidv4(),
            });
          }

          if (!request.cookies) {
            throw new UnauthorizedException({
              reason: 'No authentication token provided',
              requestId: uuidv4(),
            });
          }

          const data = Object.keys(request.cookies);

          if (!data) {
            throw new UnauthorizedException({
              reason: 'No authentication token provided',
              requestId: uuidv4(),
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

    console.log('user', user);

    if (!user) {
      throw new UnauthorizedException({
        reason: "User doesn't exists",
        requestId: uuidv4(),
      });
    }

    const userData = await lastValueFrom(
      this.userStoreClient.send('users.profile', {
        authId: user.id,
      })
    );

    console.log('userData', userData);

    if (userData && userData.error) {
      throw new UnauthorizedException({
        reason: userData.error,
        requestId: uuidv4(),
      });
    }

    const userRoles = user.systemRoles;

    const data = {
      ...userData,
      authId: user.id,
      email: user.email,
      roles: userRoles,
    };

    console.log('data', data);

    return data;
  }
}
