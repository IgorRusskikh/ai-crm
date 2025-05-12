import { Injectable } from '@nestjs/common';
import { Prisma } from 'apps/products-service/generated/prisma';
import { PrismaPersistence } from '../../persistence/prisma.persistence';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaPersistence) {}

  async getOne(slug: string, include?: Prisma.ProductInclude) {
    return this.prisma.product.findUnique({
      where: {
        slug,
      },
      include,
    });
  }

  async getMany(
    where?: Prisma.ProductWhereInput,
    include?: Prisma.ProductInclude
  ) {
    return this.prisma.product.findMany({
      where,
      include,
    });
  }

  async create(product: Prisma.ProductCreateInput) {
    return this.prisma.product.create({
      data: product,
    });
  }

  async update(slug: string, product: Prisma.ProductUpdateInput) {
    return this.prisma.product.update({
      where: {
        slug,
      },
      data: product,
    });
  }

  async delete(slug: string) {
    return this.prisma.product.delete({
      where: { slug },
    });
  }
}
