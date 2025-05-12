import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCategoryDto } from 'apps/products-service/src/app/dto/create-category.dto';

import { CategoriesUseCase } from 'apps/products-service/src/app/use-case/categories/categories.use-case';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesUseCase: CategoriesUseCase) {}

  @Get()
  async getCategories() {
    return this.categoriesUseCase.getCategories();
  }

  @Get(':id')
  async getCategory(@Param('id') id: string) {
    return this.categoriesUseCase.getCategory(id);
  }

  @Post()
  async createCategory(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesUseCase.createCategory(createCategoryDto);
  }
}
