-- Study Chinese — thanh toán tự động (Supabase / PostgreSQL)
-- Chạy toàn bộ file này trong Supabase → SQL Editor → New query → Run.

create table if not exists public.plans (
  id text primary key,            -- 'm' = Pro tháng, 'y' = Pro năm
  name text not null,
  amount integer not null,        -- số tiền (VND) phải chuyển ĐÚNG
  months integer not null
);
insert into public.plans (id, name, amount, months) values
  ('m', 'Pro tháng', 49000, 1),
  ('y', 'Pro năm', 399000, 12)
on conflict (id) do update set name = excluded.name, amount = excluded.amount, months = excluded.months;

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  plan text not null references public.plans(id),
  amount integer not null,
  code text not null unique,      -- nội dung chuyển khoản, ví dụ HTTA7K9Q2XM
  status text not null default 'pending',   -- pending | paid | amount_mismatch
  created_at timestamptz not null default now(),
  paid_at timestamptz,
  tx_id text,
  note text
);

create table if not exists public.subscriptions (
  user_id uuid primary key references auth.users(id) on delete cascade,
  plan text not null references public.plans(id),
  expires_at timestamptz not null,
  updated_at timestamptz not null default now()
);

-- giao dịch ngân hàng đã xử lý (chống xử lý trùng)
create table if not exists public.payments (
  tx_id text primary key,
  raw jsonb,
  created_at timestamptz not null default now()
);

alter table public.plans enable row level security;
alter table public.orders enable row level security;
alter table public.subscriptions enable row level security;
alter table public.payments enable row level security;

drop policy if exists "plans readable" on public.plans;
create policy "plans readable" on public.plans for select using (true);
drop policy if exists "own orders" on public.orders;
create policy "own orders" on public.orders for select using (auth.uid() = user_id);
drop policy if exists "own subscription" on public.subscriptions;
create policy "own subscription" on public.subscriptions for select using (auth.uid() = user_id);
-- payments: không có policy nào → chỉ service role (hàm webhook) đọc/ghi được.
-- orders/subscriptions: người dùng KHÔNG ghi trực tiếp được, chỉ qua hàm create_order bên dưới.

-- Tạo đơn hàng: số tiền do SERVER quyết định (lấy từ bảng plans), khách không sửa được.
create or replace function public.create_order(p_plan text)
returns table (order_id uuid, code text, amount integer, plan text, created_at timestamptz)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_uid uuid := auth.uid();
  v_amount integer;
  v_row public.orders;
begin
  if v_uid is null then raise exception 'not authenticated'; end if;
  select p.amount into v_amount from public.plans p where p.id = p_plan;
  if v_amount is null then raise exception 'invalid plan'; end if;

  -- dùng lại đơn đang chờ trong 24 giờ cho cùng gói
  select * into v_row from public.orders o
   where o.user_id = v_uid and o.plan = p_plan and o.status = 'pending'
     and o.created_at > now() - interval '24 hours'
   order by o.created_at desc limit 1;

  if not found then
    insert into public.orders (user_id, plan, amount, code)
    values (v_uid, p_plan, v_amount, 'HTT' || upper(substr(md5(random()::text || clock_timestamp()::text || v_uid::text), 1, 8)))
    returning * into v_row;
  end if;

  return query select v_row.id, v_row.code, v_row.amount, v_row.plan, v_row.created_at;
end;
$$;
revoke all on function public.create_order(text) from public;
grant execute on function public.create_order(text) to authenticated;

-- Quyền truy cập rõ ràng (cần khi tắt "Automatically expose new tables" lúc tạo project; bật cũng không sao)
grant usage on schema public to anon, authenticated;
grant select on public.plans to anon, authenticated;
grant select on public.orders to authenticated;
grant select on public.subscriptions to authenticated;
