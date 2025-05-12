import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, Product } from 'apps/products-service/generated/prisma';

import { CategoryService } from 'apps/products-service/src/infrastructure/services/category/category.service';
import { ProductToCategoryService } from 'apps/products-service/src/infrastructure/services/product-to-category/product-to-category.service';
import { ProductService } from 'apps/products-service/src/infrastructure/services/products/products.service';
import slugify from 'slugify';
import { v4 as uuidv4 } from 'uuid';
import {
  IYandexStoreService,
  YANDEX_STORE_SERVICE,
} from '../../interfaces/yandex-store.interface';
import { ProductImageUseCase } from '../product-image/product-image.use-case';

@Injectable()
export class ProductsUseCase {
  constructor(
    private readonly productService: ProductService,
    private readonly categoryService: CategoryService,
    private readonly productToCategoryService: ProductToCategoryService,
    private readonly productImageUseCase: ProductImageUseCase,
    @Inject(YANDEX_STORE_SERVICE)
    private readonly yandexStoreService: IYandexStoreService
  ) {}

  async getProduct(slug: string) {
    return this.productService.getOne(slug);
  }

  async getProducts(
    where?: Prisma.ProductWhereInput,
    include?: Prisma.ProductInclude
  ) {
    this.yandexStoreService.test();
    return this.productService.getMany(where, include);
  }

  async createProduct(createProductDto: {
    product: Prisma.ProductCreateInput;
    categoriesIds: string[];
  }) {
    const { product, categoriesIds } = createProductDto;
    const slug = slugify(product.name, { lower: true });
    const uniqueSuffix = uuidv4().slice(0, 6);
    const slugWithSuffix = `${slug}-${uniqueSuffix}`;

    const dataToCreate: Prisma.ProductCreateInput = {
      ...product,
      slug: slugWithSuffix,
    };

    const createdProduct = await this.productService.create(dataToCreate);

    await this.createProductToCategory(createdProduct, categoriesIds);

    this.productImageUseCase.createProductImage({
      productSlug: createdProduct.slug,
      url: 'https://s.auto.drom.ru/i24220/c/photos/fullsize/toyota/avensis/toyota_avensis_809167.jpg',
    });

    return createdProduct;
  }

  async updateProduct(
    slug: string,
    dataToUpdate: {
      product: Prisma.ProductUpdateInput;
      categoriesIds: string[];
    }
  ) {
    const existsProduct = await this.productService.getOne(slug);

    if (!existsProduct) {
      throw new NotFoundException('Product not found');
    }

    const productCategories =
      await this.productToCategoryService.getProductCategories(slug);

    if (productCategories.length > dataToUpdate.categoriesIds.length) {
      const categoriesToDelete = productCategories.filter(
        (category) => !dataToUpdate.categoriesIds.includes(category.categoryId)
      );

      await this.productToCategoryService.delete(
        categoriesToDelete.map((item) => item.id)
      );
    }

    const updatedProduct = await this.productService.update(
      slug,
      dataToUpdate.product
    );

    await this.createProductToCategory(
      updatedProduct,
      dataToUpdate.categoriesIds
    );

    return updatedProduct;
  }

  async deleteProduct(slug: string) {
    const existsProduct = await this.productService.getOne(slug);

    if (!existsProduct) {
      throw new NotFoundException('Product not found');
    }

    const deletedProduct = await this.productService.delete(slug);

    return deletedProduct;
  }

  private async createProductToCategory(
    createdProduct: Product,
    categoriesIds: string[]
  ) {
    if (categoriesIds && categoriesIds.length) {
      const existsCategories = await this.categoryService.getMany({
        id: { in: categoriesIds },
      });

      if (existsCategories.length !== categoriesIds.length) {
        throw new NotFoundException('Some categories not found');
      }

      const productToCategory = existsCategories.map((category) => {
        const productToCategory: Prisma.ProductToCategoryCreateInput = {
          product: {
            connect: { slug: createdProduct.slug },
          },
          category: {
            connect: { id: category.id },
          },
        };

        return this.productToCategoryService.create(productToCategory);
      });

      await Promise.all(productToCategory);
    }
  }
}
