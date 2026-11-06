// Supabase Edge Function: tạo phiên thanh toán Stripe Checkout cho gói Pro (khách quốc tế, trả bằng thẻ Visa/Mastercard).
// Số tiền do SERVER quyết định (cột plans.usd_cents), khách không sửa được. Gói được kích hoạt bởi hàm stripe-webhook.
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const ORIGIN = "https://studychinese.mely.io.vn";
const cors = {
  "Access-Control-Allow-Origin": ORIGIN,
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors, "content-type": "application/json" } });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return json({ error: "method" }, 405);

  const sk = Deno.env.get("STRIPE_SECRET_KEY");
  if (!sk) return json({ error: "stripe not configured" }, 503);

  const sb = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
  const token = (req.headers.get("authorization") ?? "").replace(/^Bearer\s+/i, "");
  const { data: u } = await sb.auth.getUser(token);
  if (!u?.user) return json({ error: "unauthorized" }, 401);

  const { plan } = await req.json().catch(() => ({ plan: "" }));
  const { data: p } = await sb.from("plans").select("id,name,usd_cents").eq("id", plan).maybeSingle();
  if (!p || !p.usd_cents) return json({ error: "invalid plan" }, 400);

  const form = new URLSearchParams({
    mode: "payment",
    success_url: `${ORIGIN}/?paid=1#goi`,
    cancel_url: `${ORIGIN}/#goi`,
    client_reference_id: u.user.id,
    customer_email: u.user.email ?? "",
    "line_items[0][quantity]": "1",
    "line_items[0][price_data][currency]": "usd",
    "line_items[0][price_data][unit_amount]": String(p.usd_cents),
    "line_items[0][price_data][product_data][name]": `Study Chinese — ${p.name}`,
    "metadata[user_id]": u.user.id,
    "metadata[plan]": p.id,
  });
  const r = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: { Authorization: `Bearer ${sk}`, "content-type": "application/x-www-form-urlencoded" },
    body: form,
  });
  const s = await r.json();
  if (!r.ok) return json({ error: s?.error?.message ?? "stripe error" }, 502);
  return json({ url: s.url });
});
