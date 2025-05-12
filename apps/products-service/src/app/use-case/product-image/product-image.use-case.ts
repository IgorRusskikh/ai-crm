import { BlurhashService } from 'apps/products-service/src/infrastructure/services/blurhash/blurhash.service';
import { CreateProductImageDto } from 'apps/products-service/src/app/dto/create-product-image.dto';
import { Injectable } from '@nestjs/common';
import { Prisma } from 'apps/products-service/generated/prisma';
import { ProductImageService } from 'apps/products-service/src/infrastructure/services/product-image/product-image.service';

@Injectable()
export class ProductImageUseCase {
  constructor(
    private readonly productImageService: ProductImageService,
    private readonly blurhashService: BlurhashService
  ) {}

  async getProductImages(productSlug: string) {
    return this.productImageService.findManyByProductSlug(productSlug);
  }

  async getProductImage(id: string) {
    return this.productImageService.findOne(id);
  }

  async createProductImage(createProductImageDto: CreateProductImageDto) {
    const blurhash = await this.blurhashService.encodeFromUrl(
      'https://s.auto.drom.ru/i24220/c/photos/fullsize/toyota/avensis/toyota_avensis_809167.jpg'
    );

    const dataToCreate: Prisma.ProductImageCreateInput = {
      product: {
        connect: { slug: createProductImageDto.productSlug },
      },
      url: createProductImageDto.url,
      blurhash,
    };

    const createdProductImage = await this.productImageService.create(
      dataToCreate
    );

    return createdProductImage;
  }

  async updateProductImage(
    id: string,
    updateProductImageDto: Prisma.ProductImageUpdateInput
  ) {
    return this.productImageService.update(id, updateProductImageDto);
  }

  async deleteProductImage(id: string) {
    return this.productImageService.delete(id);
  }
}
