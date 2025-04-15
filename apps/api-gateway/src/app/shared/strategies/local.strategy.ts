import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { lastValueFrom } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(@Inject('AUTH_SERVICE') private readonly client: ClientProxy) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  async validate(...args: any[]): Promise<any> {
    const [email, password] = args;

    console.log(email, password);

    const user = await lastValueFrom(
      this.client.send('auth.validate-by-email-and-password', {
        email,
        password,
      })
    );

    console.log('user', user);

    if (!user) {
      throw new UnauthorizedException({
        message: 'Invalid credentials',
        reason: 'Invalid credentials',
        requestId: uuidv4(),
      });
    }

    return user;
  }
}
