export type ApiCategory = {
  _id: string;
  name: string;
  slug: string;
};

export type ApiBrand = {
  _id: string;
  name: string;
  slug: string;
};

export type ApiProductVariant = {
  _id: string;
  sku: string;
  price: number;
  originalPrice?: number;
  images: string[];
  attributes: {
    attributeId: string;
    value: string;
  }[];
};

export type ApiProduct = {
  _id: string;
  name: string;
  slug: string;
  thumbnailImage?: string;
  description?: string;
  categoryId: ApiCategory;
  brandId: ApiBrand;
  specs: {
    attributeId: string;
    value: string;
  }[];
  variants: ApiProductVariant[];
};
