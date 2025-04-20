import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Prisma } from 'apps/user-store-service/prisma/generated/prisma';
import { StoresUseCase } from 'apps/user-store-service/src/app/use-cases/stores/stores.use-case';

@Controller('stores')
export class StoresController {
  constructor(private readonly storesUseCase: StoresUseCase) {}

  @MessagePattern('userstore.stores.create')
  async create(@Payload() payload: { store: Prisma.StoreCreateInput }) {
    return this.storesUseCase.createStore(payload.store);
  }

  @MessagePattern('userstore.stores.get')
  async getStore(@Payload() payload: { slug: string; userId?: string }) {
    const store = await this.storesUseCase.getStore(payload.slug, {
      UserStore: payload.userId
        ? {
            where: {
              userId: payload.userId,
            },
          }
        : true,
    });

    console.log('STORE', store);

    return store;
  }

  @MessagePattern('userstore.stores.update')
  async updateStore(
    @Payload() payload: { slug: string; store: Prisma.StoreUpdateInput }
  ) {
    return this.storesUseCase.updateStore(payload.slug, payload.store);
  }

  @MessagePattern('userstore.stores.delete')
  async deleteStore(@Payload() payload: { slug: string }) {
    return this.storesUseCase.deleteStore(payload.slug);
  }
}
