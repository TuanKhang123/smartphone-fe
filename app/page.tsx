import { ProductCard } from "@/components/shop/product-card";
import { Button } from "@/components/ui/button";
import { brands, categories, products } from "@/lib/mock-data";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section className="bg-slate-900 px-4 py-20 text-center text-white md:py-32">
      <h1 className="text-3xl font-bold md:text-5xl">
        Điện thoại chính hãng – Giá tốt nhất
      </h1>
      <p className="mt-4 text-slate-300">Tai nghe, sạc, phụ kiện đầy đủ</p>
      <div className="mt-6 flex justify-center gap-3">
        <Button size="lg">Mua ngay</Button>
        <Button size="lg" variant="outline" className="text-black">
          Liên hệ Zalo
        </Button>
      </div>
    </section>
  );
}

function CategoryGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-xl font-semibold">Danh mục sản phẩm</h2>
      <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/danh-muc/${cat.slug}`}
            className="rounded-lg border p-4 text-center hover:bg-slate-50"
          >
            {cat.name}
          </Link>
        ))}
      </div>
    </section>
  );
}

function FeaturedProducts() {
  const featured = products.filter((p) => p.isFeatured);
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-xl font-semibold">Sản phẩm nổi bật</h2>
      <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

function BrandStrip() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-xl font-semibold">Thương hiệu</h2>
      <div className="mt-4 flex gap-6 overflow-x-auto">
        {brands.map((brand) => (
          <Image
            unoptimized
            key={brand.id}
            src={brand.logo}
            alt={brand.name}
            width={120}
            height={60}
          />
        ))}
      </div>
    </section>
  );
}

function LatestProducts() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-xl font-semibold">Sản phẩm mới nhất</h2>
      <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

function SupportBanner() {
  const items = [
    "Giao hàng toàn quốc",
    "Hàng chính hãng 100%",
    "Hỗ trợ Zalo 8-22h",
  ];
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {items.map((text) => (
          <div
            key={text}
            className="rounded-lg border p-6 text-center font-medium"
          >
            {text}
          </div>
        ))}
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <FeaturedProducts />
      <BrandStrip />
      <LatestProducts />
      <SupportBanner />
    </>
  );
}

export default Home;
