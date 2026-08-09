import { Brand, Category, Product } from "./types";

export const categories: Category[] = [
  { id: "cat1", name: "Điện thoại", slug: "dien-thoai" },
  { id: "cat2", name: "Tai nghe", slug: "tai-nghe" },
  { id: "cat3", name: "Sạc & Cáp", slug: "sac-cap" },
  { id: "cat4", name: "Đồng hồ thông minh", slug: "dong-ho-thong-minh" },
];

export const brands: Brand[] = [
  {
    id: "brand1",
    name: "Apple",
    slug: "apple",
    logo: "https://placehold.co/120x60?text=Apple",
  },
  {
    id: "brand2",
    name: "Samsung",
    slug: "samsung",
    logo: "https://placehold.co/120x60?text=Samsung",
  },
  {
    id: "brand3",
    name: "Xiaomi",
    slug: "xiaomi",
    logo: "https://placehold.co/120x60?text=Xiaomi",
  },
];

export const products: Product[] = [
  {
    id: "p1",
    name: "iPhone 15 Pro Max",
    slug: "iphone-15-pro-max",
    thumbnailImage: "https://placehold.co/400x500?text=iPhone+15",
    brand: { id: "brand1", name: "Apple", slug: "apple" },
    category: { id: "cat1", name: "Điện thoại", slug: "dien-thoai" },
    price: 33990000,
    originalPrice: 36990000,
    isFeatured: true,
    inStock: true,
    colors: ["Đen", "Trắng", "Xanh"],
    storageOptions: ["128GB", "256GB", "512GB"],
  },
  {
    id: "p2",
    name: "Samsung Galaxy S24 Ultra",
    slug: "samsung-galaxy-s24-ultra",
    thumbnailImage: "https://placehold.co/400x500?text=S24+Ultra",
    brand: { id: "brand2", name: "Samsung", slug: "samsung" },
    category: { id: "cat1", name: "Điện thoại", slug: "dien-thoai" },
    price: 29990000,
    isFeatured: true,
    inStock: true,
    colors: ["Đen", "Bạc", "Xanh"],
    storageOptions: ["256GB", "512GB", "1TB"],
  },
  {
    id: "p3",
    name: "Xiaomi Redmi Note 13",
    slug: "xiaomi-redmi-note-13",
    thumbnailImage: "https://placehold.co/400x500?text=Redmi+Note+13",
    brand: { id: "brand3", name: "Xiaomi", slug: "xiaomi" },
    category: { id: "cat1", name: "Điện thoại", slug: "dien-thoai" },
    price: 5990000,
    isFeatured: false,
    inStock: true,
    colors: ["Đen", "Trắng", "Xanh"],
    storageOptions: ["64GB", "128GB", "256GB"],
  },
  {
    id: "p4",
    name: "AirPods Pro 2",
    slug: "airpods-pro-2",
    thumbnailImage: "https://placehold.co/400x500?text=AirPods+Pro",
    brand: { id: "brand1", name: "Apple", slug: "apple" },
    category: { id: "cat2", name: "Tai nghe", slug: "tai-nghe" },
    price: 5490000,
    isFeatured: true,
    inStock: false,
    colors: ["Trắng"],
    storageOptions: [],
  },
];
