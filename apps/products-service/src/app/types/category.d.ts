export type Category = {
  id: string;
  externalId: string;
  name: string;
  marketplaceId: string;
  parentId?: string;
  level: number;
  childrens?: Category[];
};
