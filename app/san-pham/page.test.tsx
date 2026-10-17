import { getProducts } from "@/lib/api/products";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ProductListingPage from "./page";

vi.mock("@/lib/api/products", () => ({
  getProducts: vi.fn(),
}));

const mockedGetProducts = vi.mocked(getProducts);

function renderPage() {
  const querytClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return render(
    <QueryClientProvider client={querytClient}>
      <ProductListingPage />
    </QueryClientProvider>,
  );
}

const apiProducts = [
  {
    _id: "product-1",
    name: "iPhone 15",
    slug: "iphone-15",
    thumbnailImage: "https://placehold.co/600x600?text=iPhone+15",
    categoryId: {
      _id: "category-1",
      name: "Điện thoại",
      slug: "dien-thoai",
    },
    brandId: {
      _id: "brand-1",
      name: "Apple",
      slug: "apple",
    },
    specs: [],
    variants: [
      {
        _id: "variant-1",
        sku: "IP15-128-BLK",
        price: 19990000,
        originalPrice: 21990000,
        images: [],
        attributes: [],
      },
    ],
  },
];

describe("ProductListPage", () => {
  it("shows loading state", () => {
    mockedGetProducts.mockReturnValue(new Promise(() => {}));
    renderPage();

    expect(screen.getByText("Đang tải sản phẩm...")).toBeInTheDocument();
  });

  it("shows error state when product request fails", async () => {
    mockedGetProducts.mockRejectedValue(new Error("Request failed"));
    renderPage();
    expect(
      await screen.findByText("Không thể tải sản phẩm. Vui lòng thử lại."),
    ).toBeInTheDocument();
  });

  it("show empty state when API returns no products", async () => {
    mockedGetProducts.mockResolvedValue([]);

    renderPage();
    expect(
      await screen.findByText("Chưa có sản phẩm nào."),
    ).toBeInTheDocument();
  });

  it("render UI products and correct count", async () => {
    mockedGetProducts.mockResolvedValue(apiProducts);
    renderPage();

    expect(await screen.findByText("iPhone 15")).toBeInTheDocument();
    expect(screen.getByText("Hiển thị 1/1 sản phẩm")).toBeInTheDocument();
  });
});
