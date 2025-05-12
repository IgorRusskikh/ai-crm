import { Category } from '../../../app/types/category';

export const mockCategories: Category[] = [
  {
    id: '1',
    externalId: 'ext-1',
    name: 'Электроника',
    marketplaceId: 'ozon-1',
    level: 1,
    childrens: [
      {
        id: '11',
        externalId: 'ext-11',
        name: 'Смартфоны',
        marketplaceId: 'ozon-1',
        parentId: '1',
        level: 2,
        childrens: [
          {
            id: '111',
            externalId: 'ext-111',
            name: 'Apple',
            marketplaceId: 'ozon-1',
            parentId: '11',
            level: 3,
          },
          {
            id: '112',
            externalId: 'ext-112',
            name: 'Samsung',
            marketplaceId: 'ozon-1',
            parentId: '11',
            level: 3,
          },
        ],
      },
      {
        id: '12',
        externalId: 'ext-12',
        name: 'Ноутбуки',
        marketplaceId: 'ozon-1',
        parentId: '1',
        level: 2,
      },
    ],
  },
  {
    id: '2',
    externalId: 'ext-2',
    name: 'Одежда и обувь',
    marketplaceId: 'wildberries-1',
    level: 1,
    childrens: [
      {
        id: '21',
        externalId: 'ext-21',
        name: 'Мужская одежда',
        marketplaceId: 'wildberries-1',
        parentId: '2',
        level: 2,
      },
      {
        id: '22',
        externalId: 'ext-22',
        name: 'Женская одежда',
        marketplaceId: 'wildberries-1',
        parentId: '2',
        level: 2,
        childrens: [
          {
            id: '221',
            externalId: 'ext-221',
            name: 'Платья',
            marketplaceId: 'wildberries-1',
            parentId: '22',
            level: 3,
          },
        ],
      },
    ],
  },
  {
    id: '3',
    externalId: 'ext-3',
    name: 'Дом и сад',
    marketplaceId: 'yandex-market-1',
    level: 1,
    childrens: [
      {
        id: '31',
        externalId: 'ext-31',
        name: 'Мебель',
        marketplaceId: 'yandex-market-1',
        parentId: '3',
        level: 2,
      },
      {
        id: '32',
        externalId: 'ext-32',
        name: 'Декор',
        marketplaceId: 'yandex-market-1',
        parentId: '3',
        level: 2,
      },
    ],
  },
];
