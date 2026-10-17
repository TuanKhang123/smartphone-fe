import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProductCard } from "./product-card";

const product = {
  id: "product-1",
  name: "iPhone 15",
  slug: "iphone-15",
  thumbnailImage: "https://placehold.co/600x600?text=iPhone+15",
  brand: {
    id: "brand-1",
    name: "Apple",
    slug: "apple",
  },
  category: {
    id: "category-1",
    name: "Điện thoại",
    slug: "dien-thoai",
  },
  price: 19990000,
  originalPrice: 21990000,
  isFeatured: true,
  inStock: true,
  colors: ["Black"],
  storageOptions: ["128GB"],
};

describe("ProductCard", () => {
  it("renders product name", () => {
    render(<ProductCard product={product} />);

    expect(screen.getByText("iPhone 15")).toBeInTheDocument();
  });

  it("shows out-of-stock state and disables add button", () => {
    const outOfStockProduct = {
      ...product,
      inStock: false,
    };

    render(<ProductCard product={outOfStockProduct} />);
    expect(screen.getByText("Hết hàng")).toBeInTheDocument();

    const addButton = screen.getByRole("button", {
      name: "Thêm vào giỏ",
    });

    expect(addButton).toBeDisabled();
  });

  it("shows in-stock state and enables add button", () => {
    render(<ProductCard product={product} />);
    expect(screen.getByText("Còn hàng")).toBeInTheDocument();

    const addButton = screen.getByRole("button", {
      name: "Thêm vào giỏ",
    });
    expect(addButton).toBeEnabled();
  });

  it("shows brand names", () => {
    render(<ProductCard product={product} />);
    expect(screen.getByText("Apple")).toBeInTheDocument();
  });

  it("shows formatted current price", () => {
    render(<ProductCard product={product} />);

    expect(screen.getByText("19.990.000 ₫")).toBeInTheDocument();
  });

  it("shows formatted original price", () => {
    render(<ProductCard product={product} />);
    expect(screen.getByText("21.990.000 ₫")).toBeInTheDocument();
  });

  // query by text
  it("doesn't render original price when it is missing", () => {
    const { originalPrice, ...productWithoutOriginalPrice } = product;

    render(<ProductCard product={productWithoutOriginalPrice} />);
    expect(screen.queryByText("21.990.000 ₫")).not.toBeInTheDocument();
  });

  it("links to the product detail page", () => {
    render(<ProductCard product={product} />);
    const productLinks = screen.getByRole("link", {
      name: "iPhone 15",
    });

    expect(productLinks).toHaveAttribute("href", "/san-pham/iphone-15");
  });
});
