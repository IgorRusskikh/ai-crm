export class SignInDto {
  ip: string;
  user: {
    id: string;
    email: string;
    password: string;
  };
  userAgent: string;
}
