import { Body, Controller, Delete, Get, Patch, Req } from '@nestjs/common';
import { Request } from 'express';
import { UsersService } from './users.service';
import { UpdateUserDto } from './users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async profile(@Req() req: Request) {
    return req.user;
  }

  @Patch()
  async update(@Req() req: Request, @Body() updateUserDto: UpdateUserDto) {
    return await this.usersService.update(
      // @ts-expect-error: TODO: fix this
      req.user.id,
      // @ts-expect-error: TODO: fix this
      req.user.authId,
      updateUserDto
    );
  }

  @Delete()
  async delete(@Req() req: Request) {
    console.log('req.user', req.user);

    return this.usersService.delete(
      // @ts-expect-error: TODO: fix this
      req.user.id,
      // @ts-expect-error: TODO: fix this
      req.user.authId
    );
  }
}
