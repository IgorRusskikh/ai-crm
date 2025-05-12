import { CategoryHierarchyService } from 'apps/products-service/src/infrastructure/services/category-hierarchy/category-hierarchy.service';
import { CategoryService } from 'apps/products-service/src/infrastructure/services/category/category.service';
import { CreateCategoryDto } from '../../dto/create-category.dto';
import { Injectable } from '@nestjs/common';
@Injectable()
export class CategoriesUseCase {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly hierarchyService: CategoryHierarchyService
  ) {}

  async getCategories() {
    return this.categoryService.getMany();
  }

  async getCategory(id: string) {
    return this.categoryService.getOne(id);
  }

  async createCategory(createCategoryDto: CreateCategoryDto) {
    const categories = await this.categoryService.createCategory(
      createCategoryDto
    );

    const hierarchyPairs =
      this.hierarchyService.createHierarchyPairs(categories);
    const hierarchy = await this.hierarchyService.create(hierarchyPairs);

    return [hierarchy, categories];
  }
}
