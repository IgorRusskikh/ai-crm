import { Role } from 'apps/auth-service/prisma/generated/prisma';

interface JwtPayload {
  email: string;
  role: Role[];
  phoneNumber?: string;
  sub: string;
}
