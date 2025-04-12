import { Injectable, UnauthorizedException } from '@nestjs/common';

import { AuthService } from '../../infrastructure/services/auth/auth.service';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  async validate(...args: any[]): Promise<any> {
    const [email, password] = args;

    const user = await this.authService.validateUserByEmailAndPassword(
      email,
      password
    );

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
