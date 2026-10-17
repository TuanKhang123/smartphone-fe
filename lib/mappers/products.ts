import { ApiProduct } from "@/lib/api-types";
import { Product } from "@/lib/types";

export function mapApiProductToProduct(apiProduct: ApiProduct): Product {
  const firstVariant = apiProduct.variants[0];

  return {
    id: apiProduct._id,
    name: apiProduct.name,
    slug: apiProduct.slug,
    thumbnailImage:
      apiProduct.thumbnailImage ?? "https://placehold.co/600x600?text=No+Image",
    brand: {
      id: apiProduct.brandId._id,
      name: apiProduct.brandId.name,
      slug: apiProduct.brandId.slug,
    },
    category: {
      id: apiProduct.categoryId._id,
      name: apiProduct.categoryId.name,
      slug: apiProduct.categoryId.slug,
    },
    price: firstVariant?.price ?? 0,
    originalPrice: firstVariant?.originalPrice,
    isFeatured: false,
    inStock: true,
    colors: [],
    storageOptions: [],
  };
}
