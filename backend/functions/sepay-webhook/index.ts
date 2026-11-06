// Supabase Edge Function: nhận webhook từ SePay khi có tiền vào tài khoản ngân hàng.
// Chỉ kích hoạt gói khi: (1) đúng API key, (2) là giao dịch tiền VÀO, (3) nội dung có mã đơn HTTxxxxxxxx,
// (4) đơn còn "pending", và (5) số tiền chuyển ĐÚNG BẰNG số tiền của đơn.
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json" } });

Deno.serve(async (req) => {
  if (req.method !== "POST") return json({ success: false, message: "method" }, 405);

  // 1) xác thực: SePay gửi header  Authorization: Apikey <khóa>
  const apiKey = Deno.env.get("SEPAY_API_KEY") ?? "";
  if (!apiKey || (req.headers.get("authorization") ?? "") !== `Apikey ${apiKey}`) {
    return json({ success: false, message: "unauthorized" }, 401);
  }

  const b = await req.json().catch(() => null);
  if (!b) return json({ success: false, message: "bad json" }, 400);

  // 2) chỉ xử lý tiền VÀO
  if (b.transferType !== "in") return json({ success: true, ignored: "not incoming" });

  const sb = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
  const txId = String(b.id ?? b.referenceCode ?? "");
  if (!txId) return json({ success: false, message: "no tx id" }, 400);

  // chống xử lý trùng: mỗi giao dịch chỉ được ghi một lần
  const ins = await sb.from("payments").insert({ tx_id: txId, raw: b });
  if (ins.error) {
    if (ins.error.code === "23505") return json({ success: true, duplicate: true });
    return json({ success: false, message: ins.error.message }, 500);
  }

  // 3) tìm mã đơn trong nội dung chuyển khoản (ngân hàng có thể bỏ khoảng trắng/ký tự lạ)
  const text = String(b.code ?? "") + " " + String(b.content ?? "") + " " + String(b.description ?? "");
  const norm = text.toUpperCase().replace(/[^A-Z0-9]/g, "");
  const m = norm.match(/HTT[0-9A-F]{8}/);
  if (!m) return json({ success: true, ignored: "no order code" });

  const { data: order } = await sb.from("orders").select("*").eq("code", m[0]).maybeSingle();
  if (!order) return json({ success: true, ignored: "unknown order" });
  if (order.status === "paid") return json({ success: true, duplicate: true });

  // 4) KHỚP ĐÚNG SỐ TIỀN
  const paid = Number(b.transferAmount);
  if (paid !== order.amount) {
    await sb.from("orders").update({
      status: "amount_mismatch", tx_id: txId,
      note: `Đã nhận ${paid}đ, cần đúng ${order.amount}đ — chưa kích hoạt`,
    }).eq("id", order.id);
    return json({ success: true, mismatch: true });
  }

  // 5) kích hoạt gói (cộng dồn nếu còn hạn)
  const { data: plan } = await sb.from("plans").select("months").eq("id", order.plan).single();
  const { data: cur } = await sb.from("subscriptions").select("expires_at").eq("user_id", order.user_id).maybeSingle();
  const start = cur && new Date(cur.expires_at) > new Date() ? new Date(cur.expires_at) : new Date();
  start.setMonth(start.getMonth() + (plan?.months ?? 1));

  await sb.from("subscriptions").upsert({
    user_id: order.user_id, plan: order.plan, expires_at: start.toISOString(), updated_at: new Date().toISOString(),
  });
  await sb.from("orders").update({ status: "paid", paid_at: new Date().toISOString(), tx_id: txId, note: null }).eq("id", order.id);

  return json({ success: true, activated: true });
});
