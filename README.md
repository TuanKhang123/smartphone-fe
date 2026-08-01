# SmartPhone Shop — Frontend

Storefront + admin panel cho website bán điện thoại & phụ kiện công nghệ (SmartPhone Shop). Gọi API từ backend ở [`smartphone-be`](../smartphone-be).

## Tech stack

- **Framework**: Next.js (App Router) + React 19 + TypeScript
- **Styling**: Tailwind CSS
- **Package manager**: npm

> Sẽ bổ sung dần: shadcn/ui (component), Axios (gọi API), TanStack Query (server state), Zustand (client state) — theo đúng roadmap học tập, không cài trước khi dùng tới.

## Yêu cầu môi trường

- Node.js 20+
- Backend `smartphone-be` đang chạy (mặc định `http://localhost:4000`) để có dữ liệu thật khi tới milestone nối API

## Cài đặt

```bash
npm install
```

## Chạy dự án

```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000).

## Scripts

| Lệnh | Mô tả |
| --- | --- |
| `npm run dev` | Chạy dev server |
| `npm run build` | Build production |
| `npm run start` | Chạy bản đã build |
| `npm run lint` | Kiểm tra lỗi ESLint |

## Cấu trúc thư mục

```
app/
└── ...            # route theo App Router (mỗi thư mục = 1 route)
```

Cấu trúc sẽ mở rộng dần: `components/`, `lib/` (api-client, store...) khi tới các milestone tương ứng.

## Trạng thái dự án

Frontend đang được xây dựng theo từng milestone, ưu tiên học sâu (React Query, JWT/Axios interceptor, Next.js rendering strategy...). Xem thiết kế UI/nghiệp vụ đầy đủ tại [`UI_GENERATION_PROMPT.md`](../../File/UI_GENERATION_PROMPT.md) và roadmap tổng thể tại [`PROJECT_ROADMAP.md`](../../File/PROJECT_ROADMAP.md).

Hiện tại mới có:
- [x] Scaffold Next.js (App Router, TypeScript, Tailwind)
- [ ] Layout chung (header, footer, nút Zalo) + UI khung sườn storefront (mock data)
- [ ] Nối API thật (Axios + React Query)
- [ ] Authentication (JWT, interceptor refresh token)
- [ ] Giỏ hàng, checkout, tài khoản
- [ ] Admin panel
