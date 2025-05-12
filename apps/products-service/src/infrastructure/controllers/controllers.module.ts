import { BlurhashService } from '../services/blurhash/blurhash.service';
import { CategoriesController } from './categories/categories.controller';
import { CategoriesUseCase } from '../../app/use-case/categories/categories.use-case';
import { CategoryHierarchyService } from '../services/category-hierarchy/category-hierarchy.service';
import { CategoryService } from '../services/category/category.service';
import { Module } from '@nestjs/common';
import { PrismaPersistence } from '../persistence/prisma.persistence';
import { ProductImageService } from '../services/product-image/product-image.service';
import { ProductImageUseCase } from 'apps/products-service/src/app/use-case/product-image/product-image.use-case';
import { ProductService } from '../services/products/products.service';
import { ProductToCategoryService } from '../services/product-to-category/product-to-category.service';
import { ProductsController } from './products/products.controller';
import { ProductsUseCase } from 'apps/products-service/src/app/use-case/products/products.use-case';
import { YandexStoreModule } from '../modules/yandex-store/yandex-store.module';

@Module({
  imports: [YandexStoreModule],
  controllers: [CategoriesController, ProductsController],
  providers: [
    PrismaPersistence,
    CategoryService,
    CategoriesUseCase,
    CategoryHierarchyService,
    ProductService,
    ProductsUseCase,
    ProductToCategoryService,
    ProductImageService,
    ProductImageUseCase,
    BlurhashService,
  ],
})
export class ControllersModule {}
