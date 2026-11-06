// Supabase Edge Function: nhận webhook của Stripe và kích hoạt gói Pro.
// Chỉ kích hoạt khi: (1) chữ ký Stripe hợp lệ, (2) sự kiện checkout.session.completed đã trả tiền,
// (3) đúng loại tiền USD và ĐÚNG số tiền của gói (plans.usd_cents), (4) giao dịch chưa xử lý.
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json" } });
const enc = new TextEncoder();

async function hmacHex(key: string, msg: string) {
  const k = await crypto.subtle.importKey("raw", enc.encode(key), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", k, enc.encode(msg));
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, "0")).join("");
}
function safeEqual(a: string, b: string) {
  if (a.length !== b.length) return false;
  let r = 0;
  for (let i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return r === 0;
}

Deno.serve(async (req) => {
  if (req.method !== "POST") return json({ error: "method" }, 405);
  const secret = Deno.env.get("STRIPE_WEBHOOK_SECRET");
  if (!secret) return json({ error: "not configured" }, 503);

  const body = await req.text();
  const header = req.headers.get("stripe-signature") ?? "";
  let t = "";
  const v1: string[] = [];
  for (const part of header.split(",")) {
    const [k, v] = part.split("=");
    if (k === "t") t = v;
    if (k === "v1") v1.push(v);
  }
  if (!t || !v1.length) return json({ error: "bad signature header" }, 400);
  if (Math.abs(Date.now() / 1000 - Number(t)) > 300) return json({ error: "timestamp out of tolerance" }, 400);
  const expected = await hmacHex(secret, `${t}.${body}`);
  if (!v1.some((x) => safeEqual(x, expected))) return json({ error: "invalid signature" }, 400);

  const ev = JSON.parse(body);
  if (ev.type !== "checkout.session.completed") return json({ received: true, ignored: ev.type });
  const s = ev.data.object;
  if (s.payment_status !== "paid") return json({ received: true, ignored: "not paid" });

  const sb = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
  const ins = await sb.from("payments").insert({ tx_id: `stripe:${s.id}`, raw: s });
  if (ins.error) {
    if (ins.error.code === "23505") return json({ received: true, duplicate: true });
    return json({ error: ins.error.message }, 500);
  }

  const userId = s.metadata?.user_id ?? s.client_reference_id;
  const planId = s.metadata?.plan;
  const { data: plan } = await sb.from("plans").select("id,months,usd_cents").eq("id", planId).maybeSingle();
  if (!userId || !plan || !plan.usd_cents) return json({ received: true, ignored: "unknown user or plan" });

  // KHỚP ĐÚNG SỐ TIỀN và loại tiền
  if (s.currency !== "usd" || s.amount_total !== plan.usd_cents) {
    return json({ received: true, mismatch: true });
  }

  const { data: cur } = await sb.from("subscriptions").select("expires_at").eq("user_id", userId).maybeSingle();
  const start = cur && new Date(cur.expires_at) > new Date() ? new Date(cur.expires_at) : new Date();
  start.setMonth(start.getMonth() + plan.months);
  await sb.from("subscriptions").upsert({ user_id: userId, plan: plan.id, expires_at: start.toISOString(), updated_at: new Date().toISOString() });
  await sb.from("orders").insert({
    user_id: userId, plan: plan.id, amount: s.amount_total, code: `STR${String(s.id).slice(-9).toUpperCase()}`,
    status: "paid", paid_at: new Date().toISOString(), tx_id: `stripe:${s.id}`, note: "Stripe USD (cents)",
  });
  return json({ received: true, activated: true });
});
