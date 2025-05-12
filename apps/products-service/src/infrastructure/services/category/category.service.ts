import { Injectable, Logger } from '@nestjs/common';

import { Category } from 'apps/products-service/src/app/types';
import { CategoryHierarchyService } from '../category-hierarchy/category-hierarchy.service';
import { CreateCategoryDto } from 'apps/products-service/src/app/dto/create-category.dto';
import { Prisma } from 'apps/products-service/generated/prisma';
import { PrismaPersistence } from '../../persistence/prisma.persistence';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CategoryService {
  constructor(
    private readonly prisma: PrismaPersistence,
    private readonly hierarchyService: CategoryHierarchyService
  ) {}

  async getMany(where?: Prisma.CategoryWhereInput) {
    return this.prisma.category.findMany({
      where,
    });
  }

  async getOne(id: string) {
    return this.prisma.category.findUnique({
      where: { id },
    });
  }

  async getCategoriesByMarketplaceId(marketplaceId: string) {
    return this.prisma.category.findMany({
      where: {
        marketplaceId,
      },
    });
  }

  async createCategory(createCategoryDto: CreateCategoryDto) {
    try {
      const createTx = this.prisma.$transaction(async (tx) => {
        const { categories } = createCategoryDto;
        let createdCategories: Category[] = [];

        const categoriesByLevel: { id: string; category: Category }[][] = [];

        for (const category of categories) {
          const rootId = uuidv4();
          const { childrens, ...cleanRoot } = category;

          if (!categoriesByLevel[0]) categoriesByLevel[0] = [];
          categoriesByLevel[0].push({
            id: rootId,
            category: { ...cleanRoot, id: rootId },
          });

          if (childrens?.length) {
            this.collectCategoriesByLevel(
              childrens,
              rootId,
              1,
              categoriesByLevel
            );
          }
        }

        const chunkSize = 100;

        for (let level = 0; level < categoriesByLevel.length; level++) {
          const levelCategories = categoriesByLevel[level];
          const createPromises = levelCategories.map((item) => {
            return tx.category.upsert({
              where: {
                externalId_marketplaceId: {
                  externalId: item.category.externalId,
                  marketplaceId: item.category.marketplaceId,
                },
              },
              update: item.category,
              create: item.category,
            });
          });

          for (let i = 0; i < createPromises.length; i += chunkSize) {
            const chunk = createPromises.slice(i, i + chunkSize);
            const created = await Promise.all(chunk);
            createdCategories.push(...created);
          }
        }

        return createdCategories;
      });

      const createdCategories = await createTx;

      return createdCategories;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  private collectCategoriesByLevel(
    children: Category[],
    parentId: string,
    level: number,
    categoriesByLevel: { id: string; category: Category }[][]
  ): void {
    if (!categoriesByLevel[level]) categoriesByLevel[level] = [];

    for (const child of children) {
      const childId = uuidv4();
      const { childrens, ...cleanChild } = child;

      categoriesByLevel[level].push({
        id: childId,
        category: { ...cleanChild, id: childId, parentId },
      });

      if (childrens?.length) {
        this.collectCategoriesByLevel(
          childrens,
          childId,
          level + 1,
          categoriesByLevel
        );
      }
    }
  }
}
