
/* ============ TRANG CHỦ (kiểu hihsk) ============ */
/* Nơi nhận email đăng ký — điền 1 trong 2:
   Formspree:   {url:"https://formspree.io/f/xxxxxx"}
   Google Form: {url:"https://docs.google.com/forms/d/e/<ID>/formResponse", field:"entry.123456"}  */
const SIGNUP={url:"https://formspree.io/f/mwllzyok",field:""};
async function signup(ev){
  ev.preventDefault();const f=ev.target,em=f.email.value.trim(),msg=f.querySelector(".su-msg"),btn=f.querySelector("button");
  if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)){msg.textContent="Email chưa đúng định dạng.";msg.style.color="var(--bad)";return}
  btn.disabled=true;msg.style.color="var(--mut)";msg.textContent="Đang gửi…";
  try{
    if(SIGNUP.url&&SIGNUP.field){const b=new URLSearchParams();b.set(SIGNUP.field,em);await fetch(SIGNUP.url,{method:"POST",mode:"no-cors",body:b})}
    else if(SIGNUP.url){const r=await fetch(SIGNUP.url,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({email:em})});if(!r.ok)throw 0}
    else{try{const a=JSON.parse(localStorage.getItem("signups")||"[]");a.push(em);localStorage.setItem("signups",JSON.stringify(a))}catch(e){}}
    track('signup');prog.email=em;save();f.innerHTML='<div class="su-ok">✅ Cảm ơn bạn! Mình sẽ gửi thông tin bài học mới qua email này.</div>';
  }catch(e){btn.disabled=false;msg.style.color="var(--bad)";msg.textContent="Gửi chưa được, bạn thử lại sau nhé."}
}
/* Thanh toán chuyển khoản VietQR — điền thông tin tài khoản nhận tiền:
   bank: mã ngân hàng theo vietqr.io (VCB, MB, TCB, ACB, BIDV, TPB, VPB, ICB...), acc: số tài khoản, name: tên chủ tài khoản */
const PAY={bank:"",acc:"",name:"",email:""};
const PLANS=[
  {id:"free",name:"Miễn phí",price:0,per:"",desc:"Học đầy đủ trên web, không cần đăng ký",perks:["Quyển 1–6: từ vựng, hội thoại, bài đọc","TOCFL A1–B2: 4.844 từ","Thẻ nhớ, trắc nghiệm, nghe đọc Meijia","Lưu tiến độ trên trình duyệt"]},
  {id:"m",name:"Premium tháng",price:99000,per:"/tháng",desc:"Dành cho người học đều mỗi ngày",perks:["Mọi thứ trong gói Miễn phí","Bộ thẻ Anki + PDF từ vựng từng quyển","Nhận bài mới sớm nhất","Giải đáp thắc mắc qua email"],hot:1},
  {id:"y",name:"Premium năm",price:790000,per:"/năm",desc:"Tiết kiệm ~34% so với trả theo tháng",perks:["Mọi thứ trong Premium tháng","Cập nhật trọn năm, không lo gia hạn","Ưu tiên yêu cầu bài/chủ đề mới"]},
];
const vnd=n=>n.toLocaleString("vi-VN")+"đ";
function buy(id){
  const pl=PLANS.find(x=>x.id===id);track('buy_click',{plan:id});
  const ok=PAY.bank&&PAY.acc,code="HTT "+Math.random().toString(36).slice(2,7).toUpperCase();
  const qr=ok?`https://img.vietqr.io/image/${PAY.bank}-${PAY.acc}-compact2.png?amount=${pl.price}&addInfo=${encodeURIComponent(code)}&accountName=${encodeURIComponent(PAY.name)}`:"";
  const d=document.createElement("div");d.className="modal";d.onclick=e=>{if(e.target===d)d.remove()};
  d.innerHTML=`<div class="mbox"><button class="ibtn mx" onclick="this.closest('.modal').remove()">✕</button>
  <h3>${pl.name} · ${vnd(pl.price)}${pl.per}</h3>
  ${ok?`<div class="qrw"><img src="${qr}" alt="Mã QR chuyển khoản" width="240"></div>
  <ul class="bank"><li>Ngân hàng: <b>${PAY.bank}</b></li><li>Số tài khoản: <b>${PAY.acc}</b></li><li>Chủ tài khoản: <b>${PAY.name}</b></li><li>Số tiền: <b>${vnd(pl.price)}</b></li><li>Nội dung: <b>${code}</b></li></ul>
  <p class="stat">Sau khi chuyển khoản, gửi email đã đăng ký kèm nội dung chuyển khoản <b>${code}</b> để được kích hoạt${PAY.email?` — gửi tới <b>${PAY.email}</b>`:""} (thường trong 24 giờ).</p>`
  :`<p>Cổng thanh toán đang được cập nhật. Bạn để lại email ở mục đăng ký bên dưới, mình sẽ liên hệ ngay khi mở bán.</p>`}
  </div>`;document.body.appendChild(d);
}
function goTo(b,t,m){if(t)tab=t;if(m)tfMode=m;track('home_go',{b,t:t||m||""});setBook(b)}
function homeCounts(){
  let words=VOCAB.length,lessons=LESSONS.length;
  Object.keys(BOOKS).forEach(n=>{lessons+=BOOKS[n].lessons.length});
  Object.values(BKW).forEach(a=>{if(a&&a.length)words+=a.length});
  return {words,lessons};
}
function homeView(){
  const m=$("main");m.className="home";
  const c=homeCounts(),fmt=n=>n.toLocaleString("vi-VN");
  const v=VOCAB[Math.floor(Math.random()*VOCAB.length)],t=TRANS.length?TRANS[Math.floor(Math.random()*TRANS.length)]:null;
  const known=Object.keys(prog.known).length,last=BOOK_IDS.includes(prog.last)?prog.last:"1";
  const lastName=last==="T"?"TOCFL":"Quyển "+last;
  const F=[
    ["📖","Giáo trình 當代中文 1–6","Học theo từng quyển, từng bài: từ vựng, hội thoại, bài đọc có phiên âm và dịch.",c.lessons+" bài","1"],
    ["🎯","Từ vựng TOCFL A1–B2","Band A + Band B theo cấp độ, có nghĩa Việt, từ loại và nghe đọc.",fmt(TF.length)+" từ","T"],
    ["🃏","Thẻ nhớ","Lật thẻ ghi nhớ từ vựng, đánh dấu từ đã thuộc để ôn lại từ còn yếu.","Mọi quyển","1","flash"],
    ["✍️","Trắc nghiệm & Bài tập","Chọn nghĩa, nghe chọn chữ, sắp xếp câu — có chấm điểm ngay.","Mọi quyển","1","quiz"],
    ["💬","Hội thoại & Bài đọc","Nghe từng câu, bật/tắt pinyin và bản dịch, nghe cả đoạn liền mạch.","Quyển 2–6","2",null,"dlg"],
    ["📐","Ngữ pháp","Công thức, giải thích và ví dụ có phiên âm cho 15 bài Quyển 1.","15 bài","1","grammar"],
    ["📚","Truyện ngắn","Đọc truyện phồn thể, chạm vào từ để xem pinyin và nghĩa.","Quyển 1","1","story"],
    ["🎙","Vấn đáp luyện nói","Trả lời bằng giọng nói, hệ thống chấm phát âm từng câu.","Quyển 1","1","qa"],
    ["🔤","Tập dịch","Dịch Việt → Trung, sắp xếp từ thành câu đúng.","Quyển 1","1","trans"],
  ];
  m.innerHTML=`
  <section class="hm-hero">
    <div>
      <span class="pill">✨ Tự học tiếng Trung phồn thể · 當代中文課程 &amp; TOCFL</span>
      <h1>Chinh phục<br><em>Tiếng Trung</em> dễ dàng</h1>
      <p class="lead">Học từ vựng, hội thoại, bài đọc và luyện nghe theo giáo trình 當代中文課程 Quyển 1–6 cùng bộ từ TOCFL — chữ phồn thể, có pinyin, nghĩa tiếng Việt và giọng đọc Đài Loan.</p>
      <div class="cta">
        <button class="btn-l p" onclick="setBook('${last}')">🚀 Tiếp tục học · ${lastName}</button>
        <button class="btn-l" onclick="document.getElementById('hm-feats').scrollIntoView({behavior:'smooth'})">📘 Khám phá mục học</button>
      </div>
    </div>
    <div class="hm-side">
      <div class="sample">
        <span class="tag">Từ vựng mẫu · Quyển 1 · Bài ${v[3]}</span>
        <div class="big-zh">${v[0]}</div>
        <div class="sp-py">${v[1]}</div>
        <div class="sp-vi">${v[2]}</div>
        ${t?`<div class="ex-box"><div class="zh">${t[1]}</div><small>${t[0]}</small></div>`:""}
        <div class="foot"><button class="b" onclick="speak('${v[0].replace(/'/g,"\\'")}',0,'m')">🔊 Nghe phát âm</button><button class="b" onclick="homeView()">🔄 Từ khác</button></div>
      </div>
      <div class="minis">
        <div class="mini"><h6>Chọn quyển · chạm để vào</h6><div class="lvs">${BOOK_IDS.map(n=>`<button onclick="setBook('${n}')">${n==="T"?"TOCFL":"Q"+n}</button>`).join("")}</div></div>
        <div class="mini"><h6>Tiến độ Quyển 1</h6><div class="bignum">${known}<small style="font:600 14px var(--ui);color:var(--mut)"> / ${VOCAB.length} từ</small></div><div class="bar"><i style="width:${known/VOCAB.length*100}%"></i></div></div>
      </div>
    </div>
  </section>
  <div class="sec-h" id="hm-feats"><span class="pill">Hệ sinh thái học tập</span><h2>Tất cả những gì bạn cần<br>để thành thạo tiếng Trung</h2><p>Các mục học được gom về một nơi — chọn mục bạn muốn và vào học ngay.</p></div>
  <div class="feats">${F.map(f=>`<button class="feat" onclick="goTo('${f[4]}',${f[5]?`'${f[5]}'`:"null"},${f[6]?`'${f[6]}'`:"null"})"><div class="ico">${f[0]}</div><h4>${f[1]}</h4><p>${f[2]}</p><span class="cnt">${f[3]}</span></button>`).join("")}</div>
  <div class="hstats">
    <div class="hstat"><b>6</b><span>Quyển giáo trình</span><small>當代中文課程</small></div>
    <div class="hstat"><b>${c.lessons}</b><span>Bài học</span><small>hội thoại &amp; bài đọc</small></div>
    <div class="hstat"><b>${fmt(c.words)}</b><span>Từ vựng giáo trình</span><small>kèm pinyin &amp; nghĩa</small></div>
    <div class="hstat"><b>${fmt(TF.length)}</b><span>Từ TOCFL</span><small>Band A + Band B</small></div>
  </div>
  <div class="sec-h" id="hm-plans"><span class="pill">Gói học</span><h2>Chọn gói phù hợp với bạn</h2><p>Học miễn phí không giới hạn; Premium dành cho ai muốn thêm tài liệu ôn tập và được hỗ trợ.</p></div>
  <div class="plans">${PLANS.map(p=>`<div class="plan${p.hot?" hot":""}">${p.hot?'<span class="hotb">Phổ biến</span>':""}<h4>${p.name}</h4><div class="pr">${p.price?vnd(p.price):"0đ"}<small>${p.per}</small></div><p class="stat">${p.desc}</p><ul>${p.perks.map(x=>`<li>${x}</li>`).join("")}</ul>${p.price?`<button class="btn-l p" onclick="buy('${p.id}')">Nâng cấp</button>`:`<button class="btn-l" onclick="setBook('${last}')">Học ngay</button>`}</div>`).join("")}</div>
  <section class="signup"><div><h3>📬 Nhận thông báo bài học mới</h3><p>Để lại email để nhận tin khi có thêm bài, từ vựng và tính năng mới. Không spam, hủy bất cứ lúc nào.</p></div>
    <form onsubmit="signup(event)"><div class="su-row"><input type="email" name="email" placeholder="email@cua-ban.com" autocomplete="email" required value="${prog.email||""}"><button class="btn-l p">Đăng ký</button></div><div class="su-msg"></div></form></section>
  <div class="cta-band"><span class="pill">Miễn phí · không cần đăng ký</span><h2>Sẵn sàng chinh phục tiếng Trung phồn thể?</h2><p>Tiến độ học được lưu ngay trên trình duyệt của bạn.</p>
    <div class="cta"><button class="btn-l p" onclick="setBook('1')">Bắt đầu Quyển 1</button><button class="btn-l" onclick="setBook('T')">Xem từ vựng TOCFL</button></div></div>`;
}

/* ============ CHÂN TRANG + CÁC TRANG THÔNG TIN ============ */
let page="guide",wipeArm=false;
function goPage(k){page=k;wipeArm=false;bk="P";track('page_view',{page:k});render();window.scrollTo({top:0})}
function goPlans(){setBook("H");setTimeout(()=>{const e=document.getElementById("hm-plans");if(e)e.scrollIntoView({behavior:"smooth"})},60)}
function wipeData(){if(!wipeArm){wipeArm=true;pageView();return}try{localStorage.removeItem("tocfl1");localStorage.removeItem("signups")}catch(e){}location.reload()}
async function sendFeedback(ev){
  ev.preventDefault();const f=ev.target,msg=f.querySelector(".su-msg"),btn=f.querySelector("button");
  btn.disabled=true;msg.style.color="var(--mut)";msg.textContent="Đang gửi…";
  try{if(!SIGNUP.url)throw 0;const r=await fetch(SIGNUP.url,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({type:f.kind.value,email:f.email.value,message:f.message.value,page:location.href})});if(!r.ok)throw 0;
    track('feedback');f.innerHTML='<div class="su-ok">✅ Đã nhận phản ánh của bạn. Cảm ơn bạn đã góp ý!</div>'}
  catch(e){btn.disabled=false;msg.style.color="var(--bad)";msg.textContent="Gửi chưa được, bạn thử lại sau nhé."}
}
const PAGES={
 guide:{t:"Cách học hiệu quả",ic:"🧭",h:`
  <p>Một lộ trình mỗi ngày khoảng 30–40 phút, làm theo thứ tự bên dưới sẽ giúp bạn nhớ từ lâu hơn là chỉ đọc lướt.</p>
  <ol class="steps">
   <li><b>Nghe và đọc từ mới (8 phút).</b> Vào một bài, mở tab <i>Từ vựng</i>, bấm 🔊 nghe từng từ rồi đọc theo ra tiếng. Chú ý thanh điệu trong pinyin: nghe đúng trước, nói đúng sau.</li>
   <li><b>Thẻ nhớ (8 phút).</b> Nhìn chữ Hán, tự nhớ pinyin và nghĩa rồi mới lật thẻ. Từ nào đã chắc thì đánh dấu <i>thuộc</i>, các từ còn lại sẽ được ôn nhiều hơn.</li>
   <li><b>Hội thoại / bài đọc (10 phút).</b> Nghe cả đoạn một lần với pinyin và bản dịch tắt, đoán nghĩa. Sau đó bật bản dịch để đối chiếu, rồi nghe lại từng câu và nhại giọng.</li>
   <li><b>Trắc nghiệm (6 phút).</b> Làm bài kiểm tra để biết từ nào còn quên. Sai ở đâu thì quay lại thẻ nhớ ở đó.</li>
   <li><b>Nói và dịch (8 phút, Quyển 1).</b> Dùng <i>Vấn đáp luyện nói</i> để trả lời thành tiếng và <i>Tập dịch</i> để ráp câu từ tiếng Việt sang tiếng Trung.</li>
  </ol>
  <h4>Mẹo nhỏ</h4>
  <ul><li>Ôn lại sau <b>1 ngày, 3 ngày, 7 ngày</b>: cùng một từ gặp nhiều lần ngắn sẽ nhớ lâu hơn một lần học dài.</li><li>Chạm vào một từ trong bài đọc để xem pinyin và nghĩa, đừng tra từng chữ.</li><li>Học chữ <b>phồn thể</b> theo từ chứ không theo từng nét: nhớ cả cụm như 臺灣、學校 sẽ dễ hơn.</li><li>Tiến độ được lưu trên trình duyệt này; dùng cùng một trình duyệt mỗi ngày để không mất dữ liệu.</li></ul>
  <h4>Nên bắt đầu từ đâu?</h4>
  <div class="two"><div class="mini"><b>Mới học</b><p class="stat">Bắt đầu với Quyển 1, học lần lượt từng bài.</p><button class="b p" onclick="setBook('1')">Vào Quyển 1</button></div><div class="mini"><b>Đã có nền tảng</b><p class="stat">Chọn quyển phù hợp hoặc ôn từ vựng TOCFL theo cấp độ.</p><button class="b" onclick="setBook('T')">Vào TOCFL</button></div></div>`},
 privacy:{t:"Chính sách bảo mật",ic:"🔒",h:`
  <p class="stat">Cập nhật lần cuối: 06/11/2026</p>
  <h4>Dữ liệu được lưu ở đâu?</h4><p>Tiến độ học (từ đã thuộc, điểm trắc nghiệm, quyển đang học, lựa chọn giao diện) được lưu <b>ngay trên trình duyệt của bạn</b> (localStorage). Chúng tôi không có tài khoản người dùng và không giữ bản sao các dữ liệu này.</p>
  <h4>Thông tin bạn chủ động gửi</h4><p>Khi bạn đăng ký nhận thông báo, gửi phản ánh hoặc liên hệ mua gói, địa chỉ email và nội dung bạn nhập được gửi qua dịch vụ biểu mẫu Formspree và chỉ dùng để liên lạc về việc học: thông báo bài mới, trả lời góp ý, kích hoạt gói. Chúng tôi không bán hay chia sẻ email của bạn cho bên thứ ba vì mục đích quảng cáo.</p>
  <h4>Thống kê truy cập</h4><p>Trang dùng Google Analytics 4 để biết các mục nào được xem nhiều (ví dụ quyển, tab, lượt bấm nút). Dữ liệu này ẩn danh, không gắn với tên hay email của bạn. Bạn có thể tắt bằng tiện ích chặn theo dõi của trình duyệt.</p>
  <h4>Giọng đọc và micro</h4><p>Âm thanh Meijia được thu sẵn và phát ngay từ trang. Mục <i>Vấn đáp luyện nói</i> dùng micro và nhận dạng giọng nói của trình duyệt sau khi bạn cho phép; âm thanh do trình duyệt xử lý, chúng tôi không ghi âm hay lưu trữ.</p>
  <h4>Xóa dữ liệu</h4><p>Bạn có thể xóa toàn bộ dữ liệu học trên thiết bị này tại trang <a href="#" onclick="goPage('data');return false">Xóa dữ liệu</a>. Để xóa email đã gửi cho chúng tôi, hãy <a href="#" onclick="goPage('contact');return false">liên hệ</a> kèm địa chỉ email đó.</p>`},
 terms:{t:"Điều khoản sử dụng",ic:"📄",h:`
  <p class="stat">Cập nhật lần cuối: 06/11/2026</p>
  <h4>Mục đích</h4><p>Trang này là công cụ tự học tiếng Trung phồn thể, tổng hợp từ vựng, hội thoại và bài đọc để người học luyện tập. Đây là trang học tập phi chính thức, <b>không liên kết</b> với nhà xuất bản của giáo trình 當代中文課程 hay đơn vị tổ chức kỳ thi TOCFL; tên giáo trình và kỳ thi thuộc về chủ sở hữu tương ứng.</p>
  <h4>Về nội dung</h4><p>Nội dung được soạn lại từ giáo trình, phần dịch tiếng Việt do chúng tôi tự biên dịch và có thể còn sai sót. Hãy đối chiếu với sách gốc khi cần độ chính xác cao. Nếu bạn thấy lỗi, vui lòng gửi phản ánh để chúng tôi sửa.</p>
  <h4>Quy tắc sử dụng</h4><ul><li>Dùng cho việc học cá nhân; không sao chép hàng loạt nội dung hay âm thanh để bán lại.</li><li>Không dùng công cụ tự động để làm quá tải trang.</li><li>Chúng tôi có thể thay đổi hoặc tạm dừng một phần trang mà không cần báo trước.</li></ul>
  <h4>Trách nhiệm</h4><p>Trang được cung cấp "như hiện có", không cam kết đạt điểm hay kết quả thi cụ thể.</p>`},
 payment:{t:"Gói học & thanh toán",ic:"💳",h:`
  <h4>Các gói</h4><ul><li><b>Miễn phí:</b> toàn bộ nội dung học trên web.</li><li><b>Premium tháng — 99.000đ:</b> tài liệu ôn tập kèm theo (thẻ Anki, PDF từ vựng), nhận bài mới sớm, giải đáp qua email.</li><li><b>Premium năm — 790.000đ:</b> như gói tháng, dùng trọn 12 tháng.</li></ul>
  <h4>Cách thanh toán</h4><ol class="steps"><li>Ở trang chủ, bấm <b>Nâng cấp</b> ở gói muốn mua.</li><li>Quét mã QR hoặc chuyển khoản theo thông tin hiển thị, giữ nguyên <b>nội dung chuyển khoản</b>.</li><li>Gửi email đã đăng ký kèm nội dung chuyển khoản qua <a href="#" onclick="goPage('contact');return false">mục liên hệ</a>.</li><li>Chúng tôi đối chiếu và gửi tài liệu/kích hoạt quyền lợi, thường trong vòng 24 giờ.</li></ol>
  <h4>Lưu ý</h4><p>Thanh toán bằng chuyển khoản ngân hàng. Chúng tôi không yêu cầu mật khẩu, mã OTP hay thông tin thẻ của bạn. <button class="b p" onclick="goPlans()">Xem bảng giá</button></p>`},
 refund:{t:"Hoàn tiền & hủy gói",ic:"↩️",h:`
  <h4>Hoàn tiền</h4><ul><li>Bạn có thể yêu cầu hoàn tiền trong <b>7 ngày</b> kể từ khi thanh toán nếu chưa nhận tài liệu hoặc quyền lợi không đúng mô tả.</li><li>Chuyển nhầm số tiền hoặc chuyển trùng sẽ được hoàn lại đầy đủ.</li><li>Đã nhận và tải tài liệu số thì không hoàn tiền, trừ khi tài liệu lỗi và chúng tôi không sửa được.</li></ul>
  <h4>Hủy gói</h4><p>Gói không tự gia hạn: hết hạn là kết thúc, không có khoản thu tự động nào. Bạn không cần làm gì để hủy.</p>
  <h4>Cách yêu cầu</h4><p>Gửi yêu cầu ở <a href="#" onclick="goPage('contact');return false">mục liên hệ</a> kèm email đã dùng và nội dung chuyển khoản. Chúng tôi phản hồi trong 1–3 ngày làm việc.</p>`},
 data:{t:"Xóa dữ liệu học",ic:"🗑️",h:`
  <p>Thao tác này xóa tiến độ, điểm số và lựa chọn đã lưu <b>trên trình duyệt này</b> (từ đã thuộc, quyển đang học, email đã nhập trong ô đăng ký). Việc này không thể hoàn tác.</p>
  <p><button class="b ${wipeArm?"bad":""}" onclick="wipeData()">${wipeArm?"⚠️ Bấm lần nữa để xác nhận xóa":"Xóa dữ liệu học trên thiết bị này"}</button></p>
  <p class="stat">Muốn xóa email đã gửi cho chúng tôi? Dùng <a href="#" onclick="goPage('contact');return false">mục liên hệ</a>.</p>`},
 contact:{t:"Liên hệ & phản ánh",ic:"✉️",h:`
  <p>Gặp lỗi nội dung, muốn đề xuất thêm bài, cần hỗ trợ gói học hay yêu cầu xóa email — hãy gửi cho chúng tôi, chúng tôi phản hồi qua email bạn để lại.</p>
  <form onsubmit="sendFeedback(event)" class="fb-form">
   <label>Bạn muốn gửi gì?<select name="kind"><option>Báo lỗi nội dung</option><option>Góp ý / đề xuất</option><option>Hỗ trợ gói Premium</option><option>Yêu cầu xóa email</option><option>Khác</option></select></label>
   <label>Email của bạn<input type="email" name="email" required placeholder="email@cua-ban.com"></label>
   <label>Nội dung<textarea name="message" rows="5" required placeholder="Ví dụ: Quyển 3, bài 5, câu 2 dịch chưa đúng…"></textarea></label>
   <button class="btn-l p">Gửi phản ánh</button><div class="su-msg"></div></form>`}
};
function pageView(){
  const m=$("main");m.className="home page";const P=PAGES[page]||PAGES.guide;
  const tabs=["guide","privacy","terms","payment","refund","data","contact"];
  m.innerHTML=`<div class="pg-head"><a href="#" onclick="setBook('H');return false">← Trang chủ</a><h1>${P.ic} ${P.t}</h1></div>
  <div class="pg-wrap"><aside class="pg-nav">${tabs.map(k=>`<button class="${k===page?"on":""}" onclick="goPage('${k}')">${PAGES[k].ic} ${PAGES[k].t}</button>`).join("")}</aside><article class="card pg-body">${P.h}</article></div>`;
}
function footerView(){
  const L=(f,t)=>`<li><a href="#" onclick="${f};return false">${t}</a></li>`;
  const ft=document.querySelector("footer");ft.className="sitefoot";
  ft.innerHTML=`<div class="sf-in"><div class="sf-grid">
   <div class="sf-brand"><a class="logo" href="#" onclick="setBook('H');return false"><span class="lg">學</span><span><b>Học Tiếng Trung</b></span></a>
    <p>Tự học tiếng Trung phồn thể theo giáo trình 當代中文課程 Quyển 1–6 và từ vựng TOCFL A1–B2, có pinyin, nghĩa tiếng Việt và giọng đọc Đài Loan.</p>
    <div class="sf-badges"><span>繁體字</span><span>Meijia zh-TW</span><span>Miễn phí</span></div></div>
   <div><h5>Lộ trình học</h5><ul>${L("setBook('1')","Giáo trình 當代中文 Quyển 1")}${L("setBook('2')","Quyển 2 – 6 (hội thoại, bài đọc)")}${L("setBook('T')","Từ vựng TOCFL A1–B2")}${L("goTo('2',null,'dlg')","Hội thoại & bài đọc")}${L("goPage('guide')","Cách học hiệu quả")}${L("goPlans()","Bảng giá gói Premium")}</ul></div>
   <div><h5>Công cụ</h5><ul>${L("goTo('1','flash')","Thẻ nhớ")}${L("goTo('1','quiz')","Trắc nghiệm & bài tập")}${L("goTo('1','qa')","Vấn đáp luyện nói")}${L("goTo('1','trans')","Tập dịch")}${L("goTo('1','grammar')","Ngữ pháp")}${L("goTo('1','story')","Truyện ngắn")}</ul></div>
   <div><h5>Chính sách</h5><ul>${L("goPage('privacy')","Chính sách bảo mật")}${L("goPage('terms')","Điều khoản sử dụng")}${L("goPage('payment')","Gói học & thanh toán")}${L("goPage('refund')","Hoàn tiền & hủy gói")}${L("goPage('data')","Xóa dữ liệu học")}</ul></div>
   <div><h5>Liên hệ</h5><ul>${L("goPage('contact')","✉️ Gửi phản ánh / góp ý")}${L("goPage('contact')","Báo lỗi nội dung bài học")}${L("goPage('contact')","Hỗ trợ gói Premium")}</ul><p class="sf-note">Phản hồi qua email trong 1–3 ngày làm việc.</p></div>
  </div>
  <div class="sf-bot"><span>© ${new Date().getFullYear()} Học Tiếng Trung · Trang học tập phi chính thức, không liên kết với nhà xuất bản giáo trình hay đơn vị tổ chức TOCFL.</span><span>加油！Mỗi ngày một chút 💪</span></div></div>`;
}
