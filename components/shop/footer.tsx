import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="mt-auto border-t bg-slate-900 text-slate-200">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-10 md:grid-cols-4">
        <div>
          <p className="text-lg font-semibold text-white">SmartPhone Shop</p>
          <div className="mt-2 text-sm text-slate-400">
            Công nghệ chính hãng – Giá tốt mỗi ngày
          </div>
        </div>
        <div>
          <p className="font-semibold text-white">Sản phẩm</p>
          <ul className="mt-2 space-y-1 text-sm text-slate-400">
            <li>
              <Link href="/products">Tất cả sản phẩm</Link>
            </li>
            <li>
              <Link href="/brands">Thương hiệu</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white">Thông tin</p>
          <ul className="mt-2 space-y-1 text-sm text-slate-400">
            <li>
              <Link href="/lien-he">Liên hệ</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white">Liên hệ</p>
          <ul className="mt-2 space-y-1 text-sm text-slate-400">
            <li>0901 234 567</li>
            <li>admin@smartphoneshop.vn</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} SmartPhone Shop
      </div>
    </footer>
  );
};
