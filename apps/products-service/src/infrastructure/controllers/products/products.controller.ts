import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Prisma } from 'apps/products-service/generated/prisma';

import { ProductsUseCase } from 'apps/products-service/src/app/use-case/products/products.use-case';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsUseCase: ProductsUseCase) {}

  @Get()
  async getProducts() {
    return this.productsUseCase.getProducts();
  }

  @Get(':slug')
  async getProduct(@Param('slug') slug: string) {
    return this.productsUseCase.getProduct(slug);
  }

  @Post()
  async createProduct(
    @Body()
    dataToCreate: {
      product: Prisma.ProductCreateInput;
      categoriesIds: string[];
    }
  ) {
    return this.productsUseCase.createProduct(dataToCreate);
  }

  @Patch(':slug')
  async updateProduct(
    @Param('slug') slug: string,
    @Body()
    dataToUpdate: {
      product: Prisma.ProductUpdateInput;
      categoriesIds: string[];
    }
  ) {
    return this.productsUseCase.updateProduct(slug, dataToUpdate);
  }

  @Delete(':slug')
  async deleteProduct(@Param('slug') slug: string) {
    return this.productsUseCase.deleteProduct(slug);
  }
}
