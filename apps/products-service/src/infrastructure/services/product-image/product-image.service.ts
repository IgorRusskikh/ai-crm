import { Injectable } from '@nestjs/common';
import { Prisma } from 'apps/products-service/generated/prisma';
import { PrismaPersistence } from '../../persistence/prisma.persistence';

@Injectable()
export class ProductImageService {
  constructor(private readonly prisma: PrismaPersistence) {}

  async findAll() {
    return this.prisma.productImage.findMany();
  }

  async findManyByProductSlug(productSlug: string) {
    return this.prisma.productImage.findFirst({
      where: {
        product: {
          slug: productSlug,
        },
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.productImage.findUnique({
      where: {
        id,
      },
    });
  }

  async create(createProductImageDto: Prisma.ProductImageCreateInput) {
    return this.prisma.productImage.create({
      data: createProductImageDto,
    });
  }

  async update(
    id: string,
    updateProductImageDto: Prisma.ProductImageUpdateInput
  ) {
    return this.prisma.productImage.update({
      where: {
        id,
      },
      data: updateProductImageDto,
    });
  }

  async delete(id: string) {
    return this.prisma.productImage.delete({
      where: {
        id,
      },
    });
  }
}
