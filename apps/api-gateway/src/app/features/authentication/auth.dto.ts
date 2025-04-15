export class SignInDto {
  ip: string;
  user: {
    id: string;
    email: string;
    password: string;
  };
  userAgent: string;
}

export class SignUpDto {
  email: string;
  password: string;
  phoneNumber: string;
}

export class LogoutDto {
  ip: string;
  user: {
    email: string;
  };
  userAgent: string;
}
