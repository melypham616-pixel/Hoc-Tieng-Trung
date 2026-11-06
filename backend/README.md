# Thanh toán tự động — hướng dẫn cài đặt

Luồng hoạt động:

1. Khách đăng nhập bằng email (link gửi qua email, không cần mật khẩu).
2. Khách bấm **Nâng cấp** → server tạo đơn với **số tiền do server quyết định** và một mã nội dung `HTTxxxxxxxx`.
3. Khách quét VietQR (đã có sẵn số tiền + nội dung) và chuyển khoản vào MB Bank.
4. **SePay** thấy tiền vào MB, gọi hàm `sepay-webhook`.
5. Hàm chỉ kích hoạt khi **đúng API key + đúng mã đơn + đúng số tiền**. Sai số tiền → đơn chuyển sang `amount_mismatch`, **không** kích hoạt (bạn xử lý tay).
6. Trang tự cập nhật, Pro mở ngay.

Bạn cần làm (mình không tạo tài khoản thay bạn được):

## 1. Tạo dự án Supabase (miễn phí)
- Vào https://supabase.com → New project (chọn vùng Singapore).
- Vào **Project Settings → API**, copy 2 giá trị: **Project URL** và khóa **anon public**.
  Gửi cho mình 2 giá trị này (khóa anon được phép công khai).
  **Tuyệt đối không gửi khóa `service_role`.**

## 2. Tạo bảng
- **SQL Editor → New query**, dán toàn bộ file `backend/schema.sql` → **Run**.
- Muốn đổi giá: sửa số trong dòng `insert into public.plans ...` rồi chạy lại.

## 3. Cho phép đăng nhập từ website
- **Authentication → URL Configuration**: Site URL = `https://studychinese.mely.io.vn`, thêm cùng địa chỉ đó vào Redirect URLs.
- Gói miễn phí của Supabase chỉ gửi rất ít email đăng nhập mỗi giờ. Khi có nhiều khách, vào **Authentication → SMTP Settings** gắn dịch vụ gửi mail (Resend, Brevo… đều có gói miễn phí).

## 4. Tạo hàm webhook
- **Edge Functions → Create a new function**, đặt tên đúng: `sepay-webhook`, dán nội dung `backend/functions/sepay-webhook/index.ts`, **Deploy**.
- Trong cài đặt của hàm, **tắt "Verify JWT"** (SePay không gửi JWT; bảo vệ bằng API key bên dưới).
- **Project Settings → Edge Functions → Secrets**: thêm `SEPAY_API_KEY` = một chuỗi dài ngẫu nhiên do bạn tự đặt (ví dụ 40 ký tự). Hai biến `SUPABASE_URL` và `SUPABASE_SERVICE_ROLE_KEY` Supabase tự cấp, không cần thêm.

## 5. Kết nối SePay
- Đăng ký https://my.sepay.vn, thêm tài khoản ngân hàng **MB Bank 6600110928008** (làm theo hướng dẫn trong SePay).
- **Tích hợp → Webhooks → Thêm**:
  - URL: `https://<project-ref>.supabase.co/functions/v1/sepay-webhook` (project-ref nằm trong Project URL).
  - Kiểu chứng thực: **API Key**, giá trị đúng bằng `SEPAY_API_KEY` ở bước 4.
  - Sự kiện: **Có tiền vào**, áp dụng cho tài khoản MB ở trên.
- Kiểm tra gói/phí của SePay trên trang của họ trước khi đăng ký.

## 6. Bật trên website
Gửi mình Project URL và khóa anon. Mình điền vào `SB` trong `src/auth.js` rồi đưa lên web.

## 7. Thử
Dùng một email của bạn, mua gói 49.000đ thật bằng app MB, chờ vài giây xem Pro tự mở. Nên thử thêm một lần chuyển **sai số tiền** để chắc chắn gói **không** mở.

## Xử lý tay
- Khách nước ngoài trả bằng PayPal/Visa: vào **Table Editor → subscriptions**, thêm dòng: `user_id` (lấy ở Authentication → Users), `plan` (`m` hoặc `y`), `expires_at`.
- Xem đơn lệch tiền: bảng `orders`, lọc `status = amount_mismatch`; cột `note` ghi số tiền nhận được.
- Xem mọi giao dịch SePay đã gửi: bảng `payments`.
