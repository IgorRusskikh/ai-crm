// import { ExtractJwt, Strategy } from 'passport-jwt';

// import { ConfigService } from '@nestjs/config';
// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
// import { PassportStrategy } from '@nestjs/passport';
// import { Request } from 'express';
// import path from 'path';
// import { readFileSync } from 'fs';
// import { v4 as uuidv4 } from 'uuid';

// @Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy) {
//   constructor(
//     private readonly configService: ConfigService,
//     private readonly authService: AuthService,
//     private readonly jwtService: JwtService,
//     @Inject('AUTH_SERVICE') private readonly client: ClientProxy
//   ) {
//     super({
//       jwtFromRequest: ExtractJwt.fromExtractors([
//         (request: Request) => {
//           const data = Object.keys(request.cookies);

//           if (!data) {
//             throw new UnauthorizedException({
//               reason: 'No authentication token provided',
//               requestId: uuidv4(),
//             });
//           }

//           return request.cookies['access_token'];
//         },
//       ]),
//       ignoreExpiration: false,
//       secretOrKey: readFileSync(
//         path.join(
//           process.cwd(),
//           'apps/auth-service/',
//           configService.get('JWT_PUBLIC_KEY')
//         )
//       ),
//     });
//   }

//   async validate(payload: any) {
//     const user = await this.authService.validateUserByEmail(payload.email);

//     if (!user) {
//       throw new UnauthorizedException({
//         reason: "User doesn't exists",
//         requestId: uuidv4(),
//       });
//     }

//     const userRoles = user.UserRole.map((role) => role.role);

//     const data = {
//       email: user.email,
//       roles: userRoles,
//     };

//     return data;
//   }
// }
