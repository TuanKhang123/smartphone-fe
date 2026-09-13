import { MessageCircle } from "lucide-react";
import Link from "next/link";

export function ZaloButton() {
  return (
    <Link
      href="https://zalo.me/0901234567"
      target="_blank"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-blue-600 py-4 px-3 text-white"
    >
      <MessageCircle className="h-5 w-5"></MessageCircle>
      <span className="hidden sm:inline">Chat Zalo ngay</span>
    </Link>
  );
}
