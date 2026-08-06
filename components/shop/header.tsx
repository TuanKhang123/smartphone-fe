"use client";

import Link from "next/link";
import { Search, Heart, ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 border-b bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold">
          SmartPhone Shop
        </Link>

        {/* TODO: nav desktop — bạn tự thêm 4 Link (Trang chủ, Sản phẩm, Thương hiệu, Liên hệ), 
            ẩn ở mobile bằng class "hidden md:flex" */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/">Trang chủ</Link>
          <Link href="/san-pham">Sản phẩm</Link>
          <Link href="/thuong-hieu">Thương hiệu</Link>
          <Link href="/lien-he">Liên hệ</Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Heart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="flex flex-col gap-1 border-t bg-white p-4 md:hidden">
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>
            Trang chủ
          </Link>
          <Link href="/san-pham" onClick={() => setMobileMenuOpen(false)}>
            Sản phẩm
          </Link>
          <Link href="/thuong-hieu" onClick={() => setMobileMenuOpen(false)}>
            Thương hiệu
          </Link>
          <Link href="/lien-he" onClick={() => setMobileMenuOpen(false)}>
            Liên hệ
          </Link>
        </nav>
      )}
    </header>
  );
}
