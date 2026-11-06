-- Thêm giá USD (đơn vị cent) cho thanh toán Stripe. Chạy trong Supabase → SQL Editor.
alter table public.plans add column if not exists usd_cents integer;
update public.plans set usd_cents = 499  where id = 'm';   -- $4.99 / tháng
update public.plans set usd_cents = 3999 where id = 'y';   -- $39.99 / năm
