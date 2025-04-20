import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
  Req,
  UseGuards,
} from '@nestjs/common';
import { StoresService } from './stores.service';
import { CreateStoreDto, UpdateStoreDto } from './stores.dto';
import { Request } from 'express';
import { StoreAccessGuard } from '../../shared/guards/store-access.guard';
import { StoreRoles } from '../../shared/decorators/store-roles.decorator';
import { StoreRole } from '../user-store/user-store.dto';

@UseGuards(StoreAccessGuard)
@Controller('stores')
export class StoresController {
  constructor(private readonly storesService: StoresService) {}

  @Post()
  async createStore(@Body() createStoreDto: CreateStoreDto) {
    return this.storesService.createStore(createStoreDto);
  }

  @Get(':slug')
  @StoreRoles(StoreRole.OWNER, StoreRole.ADMIN, StoreRole.MANAGER)
  async getStore(@Req() req: Request, @Param('slug') slug: string) {
    console.log('req.user ||| req.user', req.user);

    // @ts-expect-error: TODO: fix this
    return this.storesService.getStore(slug, req.user.id);
  }

  @Put(':slug')
  async updateStore(
    @Param('slug') slug: string,
    @Body() updateStoreDto: UpdateStoreDto
  ) {
    return this.storesService.updateStore(slug, updateStoreDto);
  }

  @Delete(':slug')
  async deleteStore(@Param('slug') slug: string) {
    return this.storesService.deleteStore(slug);
  }
}
