import { Prisma } from 'apps/auth-service/prisma/generated/prisma';

export class SignUpDto {
  ip: string;
  user: Prisma.UserCreateInput;
  userAgent: string;
}
