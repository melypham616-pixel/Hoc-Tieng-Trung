
/* ============ ĐĂNG NHẬP (Supabase) + THANH TOÁN TỰ ĐỘNG ============
   Điền SB.url và SB.key (khóa "anon public" của dự án Supabase — khóa này được phép công khai) để bật đăng nhập và thanh toán tự động.
   Để trống thì site chạy như cũ: không có đăng nhập, gói Pro chưa mở bán. */
const SB={url:"https://wncbgajsdavxyoprrusb.supabase.co",key:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InduY2JnYWpzZGF2eHlvcHJydXNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM5NDE2NTksImV4cCI6MjEwOTUxNzY1OX0.ppBr2LbcW1ykY3n_fg3-RNAjQZkJV06DKdesXCTWImU",google:false};   // khóa anon là khóa công khai theo thiết kế của Supabase; dữ liệu được bảo vệ bằng RLS
let sbc=null,SESS=null;
const sbOn=()=>!!(SB.url&&SB.key);
const signedIn=()=>!!SESS;
function loadScript(src){return new Promise((ok,no)=>{const s=document.createElement("script");s.src=src;s.onload=ok;s.onerror=no;document.head.appendChild(s)})}
async function sbInit(){
  uiAuth();if(!sbOn())return;
  try{
    await loadScript("https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.js");
    sbc=supabase.createClient(SB.url,SB.key,{auth:{persistSession:true,detectSessionInUrl:true,autoRefreshToken:true}});
    const {data}=await sbc.auth.getSession();SESS=data.session;
    sbc.auth.onAuthStateChange((ev,s)=>{const was=!!SESS;SESS=s;if(ev==="SIGNED_IN"&&!was||ev==="SIGNED_OUT")refreshSub(true)});
    await refreshSub(false);
  }catch(e){console.warn("Supabase không tải được",e)}
}
async function refreshSub(rerender){
  const before=isPro();SUB=null;
  if(SESS&&sbc){try{const {data}=await sbc.from("subscriptions").select("plan,expires_at").maybeSingle();SUB=data||null}catch(e){}}
  uiAuth();
  if(rerender||before!==isPro()){try{buildSelect();$("#les").value=LESSON;syncBar();render()}catch(e){}}
}
function uiAuth(){
  const pro=isPro(),on=sbOn(),inn=signedIn();
  const a=$("#hAct"),u=$("#hUp"),p=$("#hPro"),c=$("#hUser");
  if(a)a.hidden=!on||inn;if(u)u.hidden=pro;if(p)p.hidden=!pro;
  if(c){c.hidden=!inn;c.textContent=inn?(SESS.user.email||"?")[0].toUpperCase():"?"}
}
function modalBox(html){
  document.querySelectorAll(".modal").forEach(m=>m.remove());
  const d=document.createElement("div");d.className="modal";d.onclick=e=>{if(e.target===d)d.remove()};
  d.innerHTML=`<div class="mbox"><button class="ibtn mx" onclick="this.closest('.modal').remove()" aria-label="Đóng">✕</button>${html}</div>`;document.body.appendChild(d);return d;
}
function showLogin(note){
  if(!sbOn()){modalBox(`<h3>Đăng nhập</h3><p>Tính năng đăng nhập đang được cấu hình, sẽ có sớm.</p>`);return}
  const d=modalBox(`<h3>Đăng nhập</h3><p class="stat">${note||"Nhập email, chúng tôi gửi link đăng nhập. Không cần mật khẩu."}</p>
  <form id="lgf" class="fb-form"><label>Email<input type="email" name="email" required autocomplete="email" placeholder="email@cua-ban.com"></label><button class="btn-l p">Gửi link đăng nhập</button><div class="su-msg" role="status"></div></form>
  ${SB.google?`<p style="text-align:center;margin:12px 0 0"><button class="btn-l" id="lgg">Đăng nhập bằng Google</button></p>`:""}`);
  d.querySelector("#lgf").onsubmit=async e=>{
    e.preventDefault();const f=e.target,msg=f.querySelector(".su-msg"),em=f.email.value.trim();msg.style.color="var(--mut)";msg.textContent="Đang gửi…";
    const {error}=await sbc.auth.signInWithOtp({email:em,options:{emailRedirectTo:location.origin+location.pathname}});
    if(error){msg.style.color="var(--bad)";msg.textContent="Không gửi được link, bạn kiểm tra lại email nhé.";return}
    track('login_link');msg.style.color="var(--ok)";msg.textContent="✅ Đã gửi link vào email của bạn. Mở email và bấm vào link để đăng nhập.";
  };
  const g=d.querySelector("#lgg");if(g)g.onclick=()=>sbc.auth.signInWithOAuth({provider:"google",options:{redirectTo:location.origin+location.pathname}});
}
function showAccount(){
  if(!signedIn())return showLogin();
  const pl=premInfo(),exp=SUB&&SUB.expires_at?new Date(SUB.expires_at).toLocaleDateString("vi-VN"):"";
  const d=modalBox(`<h3>Tài khoản</h3><p><b>${esc(SESS.user.email||"")}</b></p>
   <p>Gói hiện tại: <span class="pill">${pl?(pl==="y"?"Pro năm":"Pro tháng"):"Free"}</span>${pl?` <small class="stat">đến ${exp}</small>`:""}</p>
   <div class="row" style="gap:10px"><button class="b" onclick="this.closest('.modal').remove();goPage('plans')">Gói học</button><button class="b" id="lgo">Đăng xuất</button></div>`);
  d.querySelector("#lgo").onclick=async()=>{await sbc.auth.signOut();d.remove();toast("Đã đăng xuất")};
}

/* ---------- Mua gói: tạo đơn trên server → hiện VietQR đúng số tiền → chờ hệ thống báo đã nhận ---------- */
let _poll=0;
async function buy(id){
  const pl=PLANS.find(x=>x.id===id);track('buy_click',{plan:id});
  if(!sbOn()){modalBox(`<h3>${pl.name} · ${vnd(pl.price)}${pl.per}</h3><p>Thanh toán tự động đang được cấu hình. Bạn để lại email ở mục đăng ký, chúng tôi sẽ báo khi mở bán.</p>`);return}
  if(!signedIn()){showLogin(`Đăng nhập để mua <b>${pl.name}</b>. Gói sẽ gắn với email này.`);return}
  const I=PAY.intl||{},intl=!!(I.card||I.paypal||I.stripe||I.wise),usd=USD[id];
  const intlHtml=intl?`<p>Pay in USD (<b>$${usd}</b>${pl.per==="/tháng"?"/month":"/year"}):</p><div class="paybtns">${I.card?`<a class="btn-l p" href="${I.card}" target="_blank" rel="noopener">💳 Visa / Mastercard</a>`:""}${I.paypal?`<a class="btn-l p" href="${I.paypal}" target="_blank" rel="noopener">PayPal</a>`:""}${I.stripe?`<a class="btn-l p" href="${I.stripe}" target="_blank" rel="noopener">Card (Stripe)</a>`:""}${I.wise?`<a class="btn-l" href="${I.wise}" target="_blank" rel="noopener">Wise</a>`:""}</div><p class="stat">After paying, email us the address you signed in with (${esc(SESS.user.email||"")}) and your receipt; we will activate your plan.</p>`
    :`<p>Card payments (Visa / Mastercard) are being set up. Tap below and we will email you a secure payment link for <b>$${usd}</b>${pl.per==="/tháng"?"/month":"/year"}; your plan is activated on <b>${esc(SESS.user.email||"")}</b> right after payment.</p><p><button class="btn-l p" id="reqIntl" style="width:100%">Request payment link</button></p><div class="su-msg" id="reqMsg" role="status"></div>`;
  const d=modalBox(`<h3>${pl.name} · ${vnd(pl.price)}${pl.per}</h3>
   <div class="seg" style="margin:10px 0"><button class="on" data-t="vn">🇻🇳 Việt Nam</button><button data-t="in">💳 Thẻ Visa & Quốc tế</button></div>
   <div class="ptab" data-p="vn"><p class="stat">Đang tạo đơn hàng…</p></div><div class="ptab" data-p="in" hidden>${intlHtml}</div>`);
  d.querySelector(".seg").onclick=e=>{const b=e.target.closest("button");if(!b)return;d.querySelectorAll(".seg button").forEach(x=>x.classList.toggle("on",x===b));d.querySelectorAll(".ptab").forEach(p=>p.hidden=p.dataset.p!==b.dataset.t)};
  const rq=d.querySelector("#reqIntl");
  if(rq)rq.onclick=async()=>{
    const msg=d.querySelector("#reqMsg");rq.disabled=true;msg.style.color="var(--mut)";msg.textContent="Sending…";
    try{
      if(!SIGNUP.url)throw 0;
      const r=await fetch(SIGNUP.url,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({type:"Yêu cầu thanh toán quốc tế",plan:pl.name+" ($"+usd+")",email:SESS.user.email,message:"Khách quốc tế muốn mua "+pl.name+". Gửi link thanh toán và mở gói cho email này (bảng subscriptions)."})});
      if(!r.ok)throw 0;track('intl_request',{plan:id});msg.style.color="var(--ok)";msg.textContent="✅ Request sent. We will email you a payment link shortly.";
    }catch(e){rq.disabled=false;msg.style.color="var(--bad)";msg.textContent="Could not send. Please try again later."}
  };
  const box=d.querySelector('[data-p="vn"]');
  const {data,error}=await sbc.rpc("create_order",{p_plan:id});
  const o=Array.isArray(data)?data[0]:data;
  if(error||!o){box.innerHTML=`<p style="color:var(--bad)">Không tạo được đơn hàng. Bạn thử lại sau nhé.</p>`;return}
  const qr=`https://img.vietqr.io/image/${PAY.bank}-${PAY.acc}-compact2.png?amount=${o.amount}&addInfo=${encodeURIComponent(o.code)}&accountName=${encodeURIComponent(PAY.name)}`;
  box.innerHTML=`<div class="qrw"><img src="${qr}" alt="Mã QR chuyển khoản VietQR" width="240"></div>
   <ul class="bank"><li>Ngân hàng: <b>${PAY.bankName||PAY.bank}</b></li><li>Số tài khoản: <b>${PAY.acc}</b></li><li>Chủ tài khoản: <b>${PAY.name}</b></li><li>Số tiền: <b>${vnd(o.amount)}</b> (chuyển đúng số tiền này)</li><li>Nội dung: <b>${o.code}</b> (giữ nguyên)</li></ul>
   <div class="payst" id="payst" role="status">⏳ Đang chờ thanh toán… Trang tự cập nhật ngay khi nhận được tiền.</div>
   <p class="stat">Gói chỉ được kích hoạt khi <b>đúng số tiền</b> và <b>đúng nội dung</b> chuyển khoản. Nếu chuyển sai, hãy liên hệ chúng tôi qua mục Liên hệ.</p>`;
  clearInterval(_poll);const t0=Date.now();
  _poll=setInterval(async()=>{
    if(!document.body.contains(d)||Date.now()-t0>30*60*1000){clearInterval(_poll);return}
    const {data:od}=await sbc.from("orders").select("status,note").eq("id",o.order_id).maybeSingle();
    const st=document.getElementById("payst");if(!od||!st)return;
    if(od.status==="paid"){clearInterval(_poll);st.className="payst ok";st.textContent="✅ Đã nhận thanh toán! Gói Pro đã được kích hoạt.";track('purchase',{plan:id});await refreshSub(true);setTimeout(()=>d.remove(),2500)}
    else if(od.status==="amount_mismatch"){clearInterval(_poll);st.className="payst bad";st.textContent="⚠️ Hệ thống nhận được số tiền không khớp với gói nên chưa kích hoạt. Vui lòng liên hệ chúng tôi để được hỗ trợ."}
  },4000);
}
