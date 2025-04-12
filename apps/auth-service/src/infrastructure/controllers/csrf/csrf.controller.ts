import { Controller, Get, Ip, Req, Res } from '@nestjs/common';
import { Public } from 'apps/auth-service/src/shared/decorators/public.decorator';
import { Request, Response } from 'express';

@Controller('csrf')
export class CsrfController {
  @Get()
  @Public()
  createCsrfToken(@Req() req: Request, @Res() res: Response, @Ip() ip: string) {
    const token = req.csrfToken();
    res.json({ csrfToken: token });
  }
}
