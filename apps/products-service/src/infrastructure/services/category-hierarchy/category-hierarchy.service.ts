import { Category, HierarchyPair } from 'apps/products-service/src/app/types';

import { Injectable } from '@nestjs/common';
import { PrismaPersistence } from '../../persistence/prisma.persistence';

@Injectable()
export class CategoryHierarchyService {
  constructor(private readonly prisma: PrismaPersistence) {}

  create(categories: HierarchyPair[]) {
    const createTx = this.prisma.$transaction(async (tx) => {
      const promises = categories.map((category) => {
        return tx.categoryHierarchy.upsert({
          where: {
            ancestorId_descendantId: {
              ancestorId: category.ancestorId,
              descendantId: category.descendantId,
            },
          },
          update: {
            depth: category.depth,
          },
          create: {
            ancestor: {
              connect: {
                id: category.ancestorId,
              },
            },
            descendant: {
              connect: {
                id: category.descendantId,
              },
            },
            depth: category.depth,
          },
        });
      });

      const created = await Promise.all(promises);

      return created;
    });

    return createTx;
  }

  createHierarchyPairs(categories: Category[]): HierarchyPair[] {
    const categoryMap = new Map<string, Category>();
    const result: HierarchyPair[] = [];
    const uniquePairs = new Set<string>();

    for (const category of categories) {
      categoryMap.set(category.id, category);
    }

    for (const category of categories) {
      let current = category;
      let depth = 0;

      while (current.parentId) {
        const parent = categoryMap.get(current.parentId);
        if (!parent) break;

        const pairKey = `${parent.id}-${category.id}`;
        if (!uniquePairs.has(pairKey)) {
          uniquePairs.add(pairKey);
          result.push({
            ancestorId: parent.id,
            descendantId: category.id,
            depth: ++depth,
          });
        } else {
          ++depth;
        }

        current = parent;
      }
    }

    return result;
  }
}
