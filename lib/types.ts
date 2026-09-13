export type Category = {
  id: string;
  name: string;
  slug: string;
};

export type Brand = {
  id: string;
  name: string;
  slug: string;
  logo: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  thumbnailImage: string;
  brand: Pick<Brand, "id" | "name" | "slug">;
  category: Pick<Category, "id" | "name" | "slug">;
  price: number;
  originalPrice?: number;
  isFeatured: boolean;
  inStock: boolean;
  colors: string[];
  storageOptions: string[];
};
