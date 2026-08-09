import { ProductCard } from "@/components/shop/product-card";
import { Checkbox } from "@/components/ui/checkbox";
import { brands, categories, products } from "@/lib/mock-data";

const FilterSidebar = () => {
  return (
    <div className="w-full shrink-0 space-y-6 md:w-64">
      <div>
        <p className="font-semibold">Danh mục</p>
        <div className="mt-2 space-y-2">
          {categories.map((cat) => (
            <div key={cat.id} className="flex items-center gap-2">
              <Checkbox id={`cat-${cat.id}`} />
              <label htmlFor={`cat-${cat.id}`}>{cat.name}</label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="font-semibold">Thương hiệu</p>
        <div className="mt-2 space-y-2">
          {brands.map((brand) => (
            <div key={brand.id} className="flex items-center gap-2">
              <Checkbox id={`brand-${brand.id}`} />
              <label htmlFor={`brand-${brand.id}`}>{brand.name}</label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="font-semibold">Trạng thái</p>
        <div className="mt-2 flex items-center gap-2">
          <Checkbox id="in-stock" />
          <label htmlFor="in-stock">Còn hàng</label>
        </div>
      </div>
    </div>
  );
};

const ProductListingPage = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <p className="text-sm text-slate-500">Trang chủ / Sản phẩm</p>
      <h1 className="mt-2 text-2xl font-bold">Tất cả sản phẩm</h1>

      <div className="mt-6 flex flex-col gap-8 md:flex-row">
        <FilterSidebar />

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-500">
              Hiển thị {products.length}/{products.length} sản phẩm
            </p>
            {/* TODO (Milestone 7): thay bằng <select> sort thật khi làm URL state */}
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListingPage;
