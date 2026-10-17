import { ZaloButton } from "@/components/shop/zalo-button";
import { Header } from "@/components/shop/header";
import "./globals.css";
import { Footer } from "@/components/shop/footer";
import { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "SmartPhone Shop",
  description: "Điện thoại & phụ kiện công nghệ chính hãng",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="min-h-full flex flex-col">
        <Providers>
          <Header></Header>
          {children}
          {/* <ZaloButton /> */}
          <Footer></Footer>
        </Providers>
      </body>
    </html>
  );
}
