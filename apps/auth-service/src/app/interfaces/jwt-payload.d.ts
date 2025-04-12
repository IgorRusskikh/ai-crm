import { Role } from 'apps/auth-service/prisma/generated/prisma';

interface JwtPayload {
  id: string;
  email: string;
  role: Role[];
  phoneNumber?: string;
  sub: string;
}
