"use client";

import { Badge } from "@/components/ui/badge";
import { Product } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useState } from "react";

export function ProductInfo({ product }: { product: Product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]);
  const [selectedStorage, setSelectedStorage] = useState(
    product.storageOptions?.[0],
  );
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <Badge>{product.brand.name}</Badge>
      <h1 className="mt-2 text-2xl font-bold">{product.name}</h1>
      <p className="mt-1 text-sm text-slate-500">
        {product.inStock ? "● Còn hàng" : "● Hết hàng"}
      </p>

      <div className="mt-4 flex items-center gap-2">
        <span className="text-2xl font-bold text-amber-600">
          {product.price.toLocaleString("vi-VN")} ₫
        </span>
        {product.originalPrice && (
          <span className="text-slate-400 line-through">
            {product.originalPrice.toLocaleString("vi-VN")} ₫
          </span>
        )}
      </div>

      {product.colors && (
        <div className="mt-4">
          <p className="text-sm font-medium">Chọn màu:</p>
          <div className="mt-2 flex gap-2">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`rounded-md border px-3 py-1.5 text-sm ${
                  selectedColor === color ? "border-amber-600 bg-amber-50" : ""
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>
      )}

      {product.storageOptions && (
        <div className="mt-4">
          <p className="text-sm font-medium">Chọn bộ nhớ:</p>
          <div className="mt-2 flex gap-2">
            {product.storageOptions.map((storage) => (
              <button
                key={storage}
                onClick={() => setSelectedStorage(storage)}
                className={`rounded-md border px-3 py-1.5 text-sm ${
                  selectedStorage === storage
                    ? "border-amber-600 bg-amber-50"
                    : ""
                }`}
              >
                {storage}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="mt-4 flex items-center gap-3">
        <p className="text-sm font-medium">Số lượng:</p>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size={"icon"}
            onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
          >
            -
          </Button>
          <span>{quantity}</span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setQuantity((q) => q + 1)}
          >
            +
          </Button>
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <Button
          variant="outline"
          className="flex-1"
          disabled={!product.inStock}
        >
          Thêm vào giỏ hàng
        </Button>
        <Button className="flex-1" disabled={!product.inStock}>
          Mua ngay
        </Button>
      </div>

      <button className="mt-3 flex items-center gap-1 text-sm text-slate-500">
        <Heart className="h-4 w-4" /> Thêm vào yêu thích
      </button>
    </div>
  );
}
