import { Injectable } from '@nestjs/common';
import { Prisma } from 'apps/products-service/generated/prisma';
import { PrismaPersistence } from '../../persistence/prisma.persistence';

@Injectable()
export class ProductToCategoryService {
  constructor(private readonly prisma: PrismaPersistence) {}

  getOne(id: string) {
    return this.prisma.productToCategory.findUnique({
      where: {
        id,
      },
    });
  }

  getMany(
    where: Prisma.ProductToCategoryWhereInput,
    include?: Prisma.ProductToCategoryInclude
  ) {
    return this.prisma.productToCategory.findMany({
      where,
      include,
    });
  }

  async create(productToCategory: Prisma.ProductToCategoryCreateInput) {
    return this.prisma.productToCategory.upsert({
      where: {
        productId_categoryId: {
          productId: productToCategory.product.connect.slug,
          categoryId: productToCategory.category.connect.id,
        },
      },
      update: productToCategory,
      create: productToCategory,
    });
  }

  async update(
    id: string,
    productToCategory: Prisma.ProductToCategoryUpdateInput
  ) {
    return this.prisma.productToCategory.update({
      where: {
        id,
      },
      data: productToCategory,
    });
  }

  async delete(ids: string[]) {
    return this.prisma.productToCategory.deleteMany({
      where: { id: { in: ids } },
    });
  }

  async getProductCategories(productSlug: string) {
    return this.prisma.productToCategory.findMany({
      where: {
        product: {
          slug: productSlug,
        },
      },
    });
  }
}
