import { notFound } from "next/navigation";
import { products } from "@/lib/mock-data";
import Image from "next/image";
import { ProductInfo } from "@/components/shop/product-info";

const ProductDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <p className="text-sm text-slate-500">
        {`Trang chủ / ${product?.category.name} / ${product.name}`}
      </p>

      <div className="mt-4 grid gap-8 md:grid-cols-2">
        <div className="relative aspect-4/5">
          <Image
            alt={product.name}
            src={product.thumbnailImage}
            className="rounded-lg object-cover"
            unoptimized
            fill
          />
        </div>
        <ProductInfo product={product}></ProductInfo>
      </div>
    </div>
  );
};

export default ProductDetailPage;
