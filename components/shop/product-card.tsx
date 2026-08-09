import { Heart } from "lucide-react";
import { Badge } from "../ui/badge";
import { Product } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border">
      <div className="relative aspect-4/5">
        <Badge className="absolute left-2 top-2 z-10">
          {product.brand.name}
        </Badge>
        <button className="absolute right-2 top-2 z-10 rounded-full bg-white p-1.5">
          <Heart className="h-4 w-4" />
        </button>
        <Image
          unoptimized
          src={product.thumbnailImage}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-3">
        <Link href={`/san-pham/${product.slug}`}>
          <p className="line-clamp-2 text-sm font-medium">{product.name}</p>
        </Link>
        <div className="mt-2 flex items-center gap-2">
          <span className="font-bold text-amber-600">
            {product.price.toLocaleString("vi-VN")} ₫
          </span>
          {product.originalPrice && (
            <span className="text-xs text-slate-400 line-through">
              {product.originalPrice.toLocaleString("vi-VN")} ₫
            </span>
          )}
        </div>
        <Badge
          variant={product.inStock ? "default" : "destructive"}
          className="mt-2"
        >
          {product.inStock ? "Còn hàng" : "Hết hàng"}
        </Badge>
        <Button className="mt-3 w-full" size="sm" disabled={!product.inStock}>
          Thêm vào giỏ
        </Button>
      </div>
    </div>
  );
};
