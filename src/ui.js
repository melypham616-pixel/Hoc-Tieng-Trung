
/* ============ GIAO DIỆN SẢN PHẨM: ĐIỀU HƯỚNG · TRANG CHỦ · TỔNG QUAN · KHÓA HỌC · TỪ VỰNG · LUYỆN TẬP · HỒ SƠ ============ */
const NAV=[["dash","📊","Tổng quan"],["courses","📚","Khóa học"],["vocab","🔤","Từ vựng"],["practice","✍️","Luyện tập"],["tocfl","🎯","TOCFL"],["profile","👤","Hồ sơ"]];
const NAV_OF={dictation:"practice",exam:"practice",srs:"practice",strokes:"practice",radicals:"vocab",topics:"vocab",measure:"vocab",sentences:"vocab",lookup:"vocab",pinyin:"vocab",progress:"profile",path:"profile",docs:"profile"};
function navGo(k){homeIntro=false;if(k==="tocfl")setBook("T");else goPage(k)}
function navActive(){
  if(bk==="T")return "tocfl";if(BOOK_IDS.includes(bk))return "courses";
  if(bk==="P")return MAINP[page]?(page==="plans"?"":page):(NAV_OF[page]||"");return "";
}
function buildNav(){
  $("#bbar").innerHTML=NAV.map(([k,i,l])=>`<button class="nv" data-nav="${k}" aria-label="${l}"><span class="ic" aria-hidden="true">${i}</span><span>${l}</span></button>`).join("");
  $("#bbar").onclick=e=>{const b=e.target.closest(".nv");if(b)navGo(b.dataset.nav)};
  $("#bstrip").innerHTML=BOOK_IDS.filter(n=>n!=="T").map(n=>`<button class="lchip" data-b="${n}">Quyển ${n}</button>`).join("");
  $("#bstrip").onclick=e=>{const b=e.target.closest(".lchip");if(b)setBook(b.dataset.b)};
}
function uiSync(){
  const a=navActive();document.querySelectorAll("#bbar .nv").forEach(b=>{const on=b.dataset.nav===a;b.classList.toggle("on",on);if(on)b.setAttribute("aria-current","page");else b.removeAttribute("aria-current")});
  const isBook=BOOK_IDS.includes(bk)&&bk!=="T";$("#bstrip").style.display=isBook?"":"none";
  document.querySelectorAll("#bstrip .lchip").forEach(b=>b.classList.toggle("on",b.dataset.b===bk));
  lessonBar();
}

/* ---------- dữ liệu từ vựng dùng chung ---------- */
let _AW=null;
function allWords(){
  if(_AW)return _AW;_AW=[];
  VOCAB.forEach(v=>_AW.push({b:"1",h:v[0],p:v[1],m:v[2],l:"Bài "+v[3],n:+v[3],k:"1:"+v[0],s:v[0].replace(/[()（）]/g,"").split("/")[0].trim()}));
  Object.keys(BKW).forEach(b=>BKW[b].forEach(w=>_AW.push({b,h:w.h,p:w.p,m:w.m,l:w.l,n:+String(w.l).replace(/\D/g,""),k:w.k,s:w.s})));
  TF.forEach(w=>_AW.push({b:"T",h:w.h,p:w.p,m:w.m,l:w.l,n:0,k:"T:"+w.k,s:w.s,pos:w.pos,tk:w.k}));
  return _AW;
}
const wKey=w=>w.k;
function isKnown(w){return w.b==="1"?!!prog.known[w.h]:w.b==="T"?!!(prog.tk||{})[w.tk]:!!(prog.tk||{})[w.k]}
function setKnown(w,v){
  prog.tk=prog.tk||{};
  if(w.b==="1"){if(v)prog.known[w.h]=1;else delete prog.known[w.h]}
  else{const k=w.b==="T"?w.tk:w.k;if(v)prog.tk[k]=1;else delete prog.tk[k]}
  prog.hard=prog.hard||{};if(v)delete prog.hard[wKey(w)];else prog.hard[wKey(w)]=1;
  logHist("v",v);save();
}
const isBm=w=>!!(prog.bm||{})[wKey(w)];
function toggleBm(w){prog.bm=prog.bm||{};if(prog.bm[wKey(w)])delete prog.bm[wKey(w)];else prog.bm[wKey(w)]=1;save();toast(isBm(w)?"⭐ Đã lưu từ vào danh sách cần ôn":"Đã bỏ lưu từ")}
function bookStats(n){
  if(n==="T"){const t=TF.length,k=Object.keys(prog.tk||{}).filter(x=>!/^\d:/.test(x)).length;return{k,t}}
  const W=allWords().filter(w=>w.b===n);return{k:W.filter(isKnown).length,t:W.length}
}
function lessonsDone(){
  const out=[];
  LESSONS.forEach(L=>{const W=allWords().filter(w=>w.b==="1"&&w.n===L.n);if(W.length&&W.filter(isKnown).length/W.length>=.8)out.push({b:"1",n:L.n,zh:L.zh,vi:L.vi})});
  Object.keys(BOOKS).forEach(b=>BOOKS[b].lessons.forEach(L=>{const W=allWords().filter(w=>w.b===b&&w.n===L.n);if(W.length&&W.filter(isKnown).length/W.length>=.8)out.push({b,n:L.n,zh:L.zh,vi:L.vi})}));
  return out;
}
const dayNum=()=>Math.floor(Date.now()/864e5);
const todayCount=()=>(prog.hist||[]).filter(h=>dkey(h.t)===dkey(Date.now())).length;
const pctOf=(a,b)=>b?Math.round(a/b*100):0;
const pbar=p=>`<div class="pb" role="progressbar" aria-valuenow="${p}" aria-valuemin="0" aria-valuemax="100"><i style="width:${p}%"></i></div>`;
const empty=(ic,t,d,btn)=>`<div class="empty"><div class="ei">${ic}</div><b>${t}</b><p>${d}</p>${btn||""}</div>`;

/* ---------- thanh bài học (Chi tiết bài học) ---------- */
function lessonCtx(){
  if(bk==="1"){if(!/^(\d+)-\1$/.test(LESSON))return null;const n=+LESSON.split("-")[0],L=LESSONS[n-1];return L?{b:"1",n,zh:L.zh,vi:L.vi,max:LESSONS.length}:null}
  if(BOOKS[bk]&&/^Bài \d+$/.test(tfLv)){const n=+tfLv.slice(4),L=BOOKS[bk].lessons.find(x=>x.n===n);return L?{b:bk,n,zh:L.zh,vi:L.vi,max:BOOKS[bk].lessons.length}:null}
  return null;
}
function lessonGo(d){const c=lessonCtx();if(!c)return;const n=c.n+d;if(n<1||n>c.max)return;if(c.b==="1")setLesson(n+"-"+n);else{tfPickLv("Bài "+n)}window.scrollTo({top:0})}
function lessonBm(){const c=lessonCtx();if(!c)return;prog.lbm=prog.lbm||{};const k=c.b+":"+c.n;if(prog.lbm[k])delete prog.lbm[k];else prog.lbm[k]=1;save();toast(prog.lbm[k]?"⭐ Đã lưu bài học":"Đã bỏ lưu bài học")}
function lessonBar(){
  const el=$("#lessonx");if(!el)return;const c=BOOK_IDS.includes(bk)&&bk!=="T"?lessonCtx():null;document.body.classList.toggle("hasl",!!c);
  if(!c){el.innerHTML="";el.style.display="none";return}
  const W=allWords().filter(w=>w.b===c.b&&w.n===c.n),k=W.filter(isKnown).length,p=pctOf(k,W.length),bm=(prog.lbm||{})[c.b+":"+c.n];
  el.style.display="block";
  el.innerHTML=`<div class="lx-in"><div class="lx-t"><small>Quyển ${c.b} · Bài ${c.n}/${c.max}</small><h2 class="zh">${esc(c.zh)}</h2><div class="vi">${esc(c.vi)}</div></div>
   <div class="lx-p"><div class="row" style="justify-content:space-between"><small>Tiến độ bài học</small><small><b>${k}/${W.length}</b> từ đã thuộc</small></div>${pbar(p)}</div>
   <div class="lx-a"><button class="b" onclick="lessonGo(-1)" ${c.n<=1?"disabled":""} aria-label="Bài trước">← Bài trước</button><button class="b ${bm?"on":""}" onclick="lessonBm();lessonBar()" aria-pressed="${bm?"true":"false"}">${bm?"⭐ Đã lưu":"☆ Lưu bài"}</button><button class="b p" onclick="lessonGo(1)" ${c.n>=c.max?"disabled":""} aria-label="Bài sau">Bài sau →</button></div></div>`;
}

/* ---------- TRANG CHỦ ---------- */
function continueTarget(){
  const last=BOOK_IDS.includes(prog.last)?prog.last:"1";
  let label=last==="T"?"TOCFL "+tfLv:"Quyển "+last;
  if(last==="1"&&/^(\d+)-\1$/.test(LESSON))label+=" · Bài "+LESSON.split("-")[0];
  return{b:last,label,started:Object.keys(prog.known).length+Object.keys(prog.tk||{}).length+((prog.hist||[]).length)>0};
}
let homeIntro=false;
function homeView(){
  const m=$("main");m.className="home page main";
  if(!homeIntro&&continueTarget().started){m.innerHTML=dashView(true);return}
  if(!continueTarget().started)homeIntro=false;
  const W=allWords().filter(w=>w.b!=="T"),v=W[Math.floor(Math.random()*W.length)],c=continueTarget(),st=homeStats(),q1=bookStats("1");
  const sample=exFor(v);
  m.innerHTML=`
  <section class="hm-hero"><div>
    <span class="pill">Học tiếng Trung phồn thể cho người Việt</span>
    <h1>Học tiếng Trung phồn thể,<br><em>đều đặn mỗi ngày</em></h1>
    <p class="lead">Từ vựng, hội thoại, bài đọc và luyện nghe theo giáo trình 當代中文課程 Quyển 1–6 và TOCFL — có pinyin, giải thích tiếng Việt và giọng đọc Đài Loan.</p>
    <div class="cta"><button class="btn-l p" onclick="${c.started?`setBook('${c.b}')`:"setBook('1')"}">${c.started?"Tiếp tục · "+c.label:"Bắt đầu học"}</button><button class="btn-l" onclick="goPage('courses')">Xem khóa học</button></div>
    <ul class="ticks"><li>Chữ phồn thể &amp; zh-TW</li><li>Miễn phí học cơ bản</li><li>Tiến độ lưu trên thiết bị</li></ul>
  </div>
  <div class="sample"><span class="tag">Từ hôm nay · Quyển ${v.b} · ${v.l}</span><div class="big-zh">${v.h}</div><div class="sp-py">${v.p}</div><div class="sp-vi">${esc(v.m)}</div>
   ${sample?`<div class="ex-box"><div class="zh">${esc(sample.zh)}</div><small>${esc(sample.vi)}</small></div>`:""}
   <div class="foot"><button class="b" onclick="speak('${jsq(v.s)}')">🔊 Nghe phát âm</button><button class="b" onclick="homeView()">🔄 Từ khác</button></div></div></section>

  <div class="sec-h"><h2>Vì sao học ở đây?</h2></div>
  <div class="trio">
   <div class="vp"><div class="ico">🀄</div><h4>Chữ phồn thể, giọng Đài Loan</h4><p>Toàn bộ nội dung viết bằng chữ phồn thể, âm thanh thu sẵn bằng giọng Meijia (zh-TW).</p></div>
   <div class="vp"><div class="ico">🇻🇳</div><h4>Giải thích bằng tiếng Việt</h4><p>Mỗi từ, mỗi câu đều có pinyin và nghĩa tiếng Việt; có thể ẩn đi để tự kiểm tra.</p></div>
   <div class="vp"><div class="ico">📈</div><h4>Nhìn thấy tiến bộ của mình</h4><p>Từ đã thuộc, chuỗi ngày học và kết quả luyện tập được lưu ngay trên thiết bị của bạn.</p></div>
  </div>

  <div class="sec-h"><h2>Khóa học nổi bật</h2><p>Bắt đầu từ Quyển 1 nếu bạn mới học, hoặc chọn quyển phù hợp với trình độ.</p></div>
  <div class="feature-course"><div><span class="pill">Giáo trình chính</span><h3 class="zh">當代中文課程 · Quyển 1</h3><p>${LESSONS.length} bài nhập môn: chào hỏi, giới thiệu bản thân, gia đình, mua sắm, ăn uống và hỏi đường. Có từ vựng, ngữ pháp, hội thoại, truyện, vấn đáp và tập dịch.</p>
   <div class="row" style="justify-content:space-between"><small>${q1.k}/${q1.t} từ đã thuộc</small><small>${pctOf(q1.k,q1.t)}%</small></div>${pbar(pctOf(q1.k,q1.t))}
   <div class="cta" style="margin-top:14px"><button class="btn-l p" onclick="setBook('1')">${q1.k?"Tiếp tục học":"Bắt đầu Quyển 1"}</button><button class="btn-l" onclick="goPage('courses')">Tất cả khóa học</button></div></div></div>

  <div class="sec-h"><h2>Bạn muốn luyện gì hôm nay?</h2></div>
  <div class="cats">${[["🔤","Từ vựng","Học thẻ, đánh dấu từ khó, nghe phát âm","vocab"],["📐","Ngữ pháp","Công thức và ví dụ cho 15 bài Quyển 1","g:grammar"],["💬","Hội thoại & bài đọc","Nghe từng câu, bật/tắt pinyin và dịch","g:dlg"],["🎧","Luyện nghe","Chép chính tả và shadowing có chấm điểm","practice"],["🎯","TOCFL","Từ vựng A1–B2 và đề thi thử","tocfl"],["✍️","Bài tập","Trắc nghiệm, điền pinyin, sắp xếp câu","practice"]].map(x=>`<button class="cat" onclick="${x[3]==="g:grammar"?"goTo('1','grammar')":x[3]==="g:dlg"?"goTo('2',null,'dlg')":`navGo('${x[3]}')`}"><span class="ico">${x[0]}</span><b>${x[1]}</b><small>${x[2]}</small></button>`).join("")}</div>

  <div class="sec-h"><h2>Cách học</h2></div>
  <ol class="how"><li><b>Chọn bài</b><p>Vào Khóa học, chọn quyển và bài phù hợp trình độ của bạn.</p></li><li><b>Học và nghe</b><p>Xem từ vựng, nghe phát âm, đọc hội thoại; lưu lại những từ khó.</p></li><li><b>Luyện tập và ôn lại</b><p>Làm bài tập, xem lỗi sai và ôn lại các từ cần nhớ.</p></li></ol>

  <div class="sec-h"><h2>Nội dung nổi bật</h2></div>
  <div class="trio">${[["✍️","Chép chính tả","Nghe câu rồi gõ lại chữ Hán, chấm từng chữ.","dictation"],["🎬","Shadowing video","Xem video bản xứ và nhại theo từng câu.","video"],["📝","Đề thi thử TOCFL","Bài trắc nghiệm bấm giờ cấp A1–B2.","exam"]].map(x=>`<button class="vp link" onclick="${x[3]==="video"?"goVideo()":`goPage('${x[3]}')`}"><div class="ico">${x[0]}</div><h4>${x[1]}</h4><p>${x[2]}</p></button>`).join("")}</div>

  <div class="hstats"><div class="hstat"><b>${st.books}</b><span>Quyển giáo trình</span></div><div class="hstat"><b>${st.lessons}</b><span>Bài học</span></div><div class="hstat"><b>${st.words.toLocaleString("vi-VN")}</b><span>Từ vựng giáo trình</span></div><div class="hstat"><b>${TF.length.toLocaleString("vi-VN")}</b><span>Từ TOCFL</span></div></div>

  <section class="signup"><div><h3>Nhận thông báo bài học mới</h3><p>Để lại email để nhận tin khi có thêm bài và tính năng. Không spam, bạn có thể hủy bất cứ lúc nào.</p></div>
   <form onsubmit="signup(event)"><div class="su-row"><input type="email" name="email" placeholder="email@cua-ban.com" autocomplete="email" required aria-label="Email" value="${esc(prog.email||"")}"><button class="btn-l p">Đăng ký</button></div><div class="su-msg" role="status"></div></form></section>

  <div class="cta-band"><h2>Sẵn sàng bắt đầu?</h2><p>Mỗi ngày một chút, chữ phồn thể sẽ quen dần.</p><div class="cta"><button class="btn-l p" onclick="setBook('${c.started?c.b:"1"}')">${c.started?"Tiếp tục học":"Bắt đầu Quyển 1"}</button><button class="btn-l" onclick="goPage('courses')">Xem khóa học</button></div></div>`;
}
function homeStats(){let lessons=LESSONS.length,words=VOCAB.length;Object.keys(BOOKS).forEach(n=>{lessons+=BOOKS[n].lessons.length});Object.values(BKW).forEach(a=>{words+=a.length});return{books:6,lessons,words}}
function exFor(w){
  const c=(w.s||"").replace(/[()（）]/g,"");if(!c||c.length>6)return null;
  let best=null;for(const s of allSents()){if(s.zh.length<=22&&s.zh.includes(c)&&(!best||s.zh.length<best.zh.length))best=s}
  return best;
}

/* ---------- KHÓA HỌC ---------- */
const COURSE_LV={"1":"Sơ cấp","2":"Sơ cấp","3":"Trung cấp","4":"Trung cấp","5":"Trung – Cao cấp","6":"Cao cấp"};
function coursesView(){
  const c=continueTarget(),card=n=>{
    const T=n==="T",st=bookStats(n),p=pctOf(st.k,st.t),les=T?4:n==="1"?LESSONS.length:(BOOKS[n]?BOOKS[n].lessons.length:0),tot=T?4:n==="1"?LESSONS.length:(BOOK_TOTAL[n]||les);
    const titles=T?"Band A (A1–A2) và Band B (B1–B2)":(n==="1"?LESSONS:(BOOKS[n]?BOOKS[n].lessons:[])).slice(0,3).map(L=>L.vi).join(" · ");
    return `<article class="course"><div class="ch"><span class="pill">${T?"Từ vựng thi chứng chỉ":"Giáo trình"}</span><span class="lvl">${T?"A1 – B2":COURSE_LV[n]}</span></div>
     <h3 class="zh">${T?"TOCFL 詞彙":"當代中文課程 "+n}</h3><p class="vi">${esc(titles)}${!T&&les<tot?" …":""}</p>
     <div class="meta"><span>${T?"4 cấp độ":les+(tot>les?"/"+tot:"")+" bài"}</span><span>${st.t.toLocaleString("vi-VN")} từ</span></div>
     <div class="row" style="justify-content:space-between"><small>Hoàn thành</small><small><b>${st.k}</b>/${st.t} · ${p}%</small></div>${pbar(p)}
     <button class="btn-l ${st.k?"":"p"}" style="margin-top:14px;width:100%" onclick="setBook('${n}')">${st.k?"Tiếp tục":"Bắt đầu"}</button></article>`};
  return `<div class="pg-head" style="padding-top:8px"><h1>Khóa học</h1><p class="stat">Chọn một khóa học để bắt đầu hoặc tiếp tục. Mức độ là ước lượng theo nội dung từng quyển.</p></div>
  ${c.started?`<div class="resume"><div><small>Tiếp tục học</small><b>${c.label}</b></div><button class="btn-l p" onclick="setBook('${c.b}')">Tiếp tục →</button></div>`:""}
  <div class="courses">${["1","2","3","4","5","6","T"].map(card).join("")}</div>`;
}

/* ---------- TỪ VỰNG (học thẻ) ---------- */
let vS={src:"1",les:"all",flt:"all",i:0,hp:false,hv:false};
function vList(){
  let L=allWords().filter(w=>w.b===vS.src);
  if(vS.les!=="all")L=L.filter(w=>vS.src==="T"?w.l===vS.les:w.n===+vS.les);
  if(!isPro()&&vS.src!=="T"&&vS.src!=="1")L=L.filter(w=>w.n<=(FREE.lessons[vS.src]||0));
  if(!isPro()&&vS.src==="1")L=L.filter(w=>w.n<=FREE.lessons["1"]);
  if(!isPro()&&vS.src==="T")L=L.filter(w=>FREE.tfLv.includes(w.l));
  if(vS.flt==="new")L=L.filter(w=>!isKnown(w));else if(vS.flt==="bm")L=L.filter(isBm);else if(vS.flt==="hard")L=L.filter(w=>(prog.hard||{})[wKey(w)]);
  return L;
}
function vSet(k,v){vS[k]=v;if(k==="src")vS.les="all";if(k!=="i")vS.i=0;pageView()}
function vGo(d){const L=vList();vS.i=Math.max(0,Math.min(L.length-1,vS.i+d));pageView();const w=L[vS.i];if(w)speak(w.s)}
function vMark(v){const w=vList()[vS.i];if(!w)return;setKnown(w,v);toast(v?"✅ Đã thuộc":"Đã đánh dấu chưa thuộc — sẽ có trong danh sách cần ôn");if(vS.flt==="new"&&v){pageView();return}if(vS.i<vList().length-1)vS.i++;pageView()}
function vBm(){const w=vList()[vS.i];if(w){toggleBm(w);pageView()}}
function vocabLView(){
  const L=vList(),w=L[vS.i]||null;
  const lesOpts=vS.src==="T"?["A1","A2","B1","B2"].map(x=>[x,"Cấp "+x]):(vS.src==="1"?LESSONS:(BOOKS[vS.src]?BOOKS[vS.src].lessons:[])).map(l=>[String(l.n),"Bài "+l.n+" · "+l.vi]);
  const srcOpts=["1","2","3","4","5","6","T"].map(n=>`<option value="${n}" ${vS.src===n?"selected":""}>${n==="T"?"TOCFL":"Quyển "+n}</option>`).join("");
  const sel=`<div class="vsel"><label>Nguồn<select onchange="vSet('src',this.value)">${srcOpts}</select></label><label>Bài / cấp<select onchange="vSet('les',this.value)"><option value="all">Tất cả</option>${lesOpts.map(([k,l])=>`<option value="${k}" ${vS.les===k?"selected":""}>${esc(l)}</option>`).join("")}</select></label></div>
   <div class="chips" role="tablist">${[["all","Tất cả"],["new","Chưa thuộc"],["bm","⭐ Đã lưu"],["hard","Từ khó"]].map(([k,l])=>`<button class="chip ${vS.flt===k?"on":""}" onclick="vSet('flt','${k}')">${l}</button>`).join("")}</div>`;
  const tools=`<div class="sec-h" style="text-align:left;margin:28px 0 10px"><h2 style="font-size:20px">Công cụ từ vựng</h2></div><div class="chips">${[["radicals","🧩 214 bộ thủ"],["pinyin","🔤 Pinyin"],["measure","📏 Lượng từ"],["topics","🗂️ Theo chủ đề"],["sentences","💬 Mẫu câu"],["lookup","🔎 Tra từ"]].map(([k,l])=>`<button class="chip" onclick="goPage('${k}')">${l}</button>`).join("")}</div>`;
  const head=`<div class="pg-head" style="padding-top:8px"><h1>Từ vựng</h1></div>${sel}`;
  if(!w)return head+empty("🔍",vS.flt==="all"?"Chưa có từ nào ở đây":"Không có từ phù hợp",vS.flt==="bm"?"Bấm ☆ trên thẻ từ để lưu những từ cần ôn.":vS.flt==="hard"?"Những từ bạn đánh dấu “Chưa thuộc” sẽ xuất hiện ở đây.":"Thử đổi bài hoặc bộ lọc khác. Một số bài thuộc gói Pro.",`<button class="b" onclick="vSet('flt','all')">Xem tất cả từ</button>`)+tools;
  const ex=exFor(w),known=isKnown(w),bm=isBm(w);
  return head+`<div class="stat" style="margin:6px 0">Từ ${vS.i+1}/${L.length} · ${w.b==="T"?"TOCFL":"Quyển "+w.b} · ${w.l}</div>${pbar(Math.round((vS.i+1)/L.length*100))}
  <article class="vcardx"><div class="vtop"><span class="pill">${known?"✓ Đã thuộc":"Chưa thuộc"}</span><button class="ibtn" onclick="vBm()" aria-pressed="${bm}" aria-label="${bm?"Bỏ lưu":"Lưu từ"}">${bm?"⭐":"☆"}</button></div>
   <div class="vz zh">${w.h}</div>
   <div class="vp1 ${vS.hp?"hid":""}" onclick="vS.hp=false;pageView()">${vS.hp?"Chạm để hiện pinyin":w.p}</div>
   <div class="vm ${vS.hv?"hid":""}" onclick="vS.hv=false;pageView()">${vS.hv?"Chạm để hiện nghĩa":esc(w.m)}${w.pos&&!vS.hv?` <span class="pos">${w.pos}</span>`:""}</div>
   <div class="row" style="justify-content:center;gap:10px"><button class="b p" onclick="speak('${jsq(w.s)}')" aria-label="Nghe phát âm">🔊 Nghe</button><button class="b" onclick="speak('${jsq(w.s)}',0.5)">🐢 Chậm</button></div>
   ${ex?`<div class="exs"><small>Ví dụ</small><div class="zh" style="font-size:20px">${annotate(ex.zh).html}</div><div class="vi ${vS.hv?"hid":""}">${vS.hv?"…":esc(ex.vi)}</div><button class="b spk" onclick="speak('${jsq(ex.zh)}')" aria-label="Nghe câu ví dụ">🔊</button></div>`:`<div class="exs"><small>Chưa có câu ví dụ cho từ này.</small></div>`}
  </article>
  <div class="vact"><button class="b" onclick="vMark(false)">😕 Chưa thuộc</button><button class="b p" onclick="vMark(true)">✅ Đã thuộc</button></div>
  <div class="vnav"><button class="b" onclick="vGo(-1)" ${vS.i<=0?"disabled":""}>← Trước</button><div class="vtog"><label><input type="checkbox" ${vS.hp?"checked":""} onchange="vS.hp=this.checked;pageView()"> Ẩn pinyin</label><label><input type="checkbox" ${vS.hv?"checked":""} onchange="vS.hv=this.checked;pageView()"> Ẩn nghĩa</label></div><button class="b p" onclick="vGo(1)" ${vS.i>=L.length-1?"disabled":""}>Sau →</button></div>`+tools;
}

/* ---------- LUYỆN TẬP ---------- */
function practiceGo(k){
  if(k==="flash"){goTo("1","flash");return}
  if(k==="trans"){goTo("1","trans");return}
  if(k==="tocfl"){tfMode="quiz";setBook("T");return}
  tab="quiz";setBook("1");pickQ(k);
}
function practiceView(){
  const A=[["✅","Trắc nghiệm","Chọn nghĩa đúng cho chữ Hán","zh2vi"],["🎧","Nghe và chọn","Nghe âm thanh rồi chọn từ đúng","listen"],["⌨️","Điền pinyin","Gõ pinyin của từ (không cần dấu)","fill"],["🧩","Sắp xếp câu","Ghép các từ thành câu đúng","order"],["🔤","Dịch câu","Dịch Việt → Trung và tự chấm","trans"],["🃏","Thẻ nhớ","Lật thẻ, đánh dấu thuộc / chưa thuộc","flash"]];
  const B=[["🎯","Trắc nghiệm TOCFL","Từ vựng theo cấp A1–B2","tocfl"]];
  const hard=Object.keys(prog.hard||{}).length,due=isPro()?Object.values(prog.srs||{}).filter(s=>s.d<=Date.now()).length:0;
  return `<div class="pg-head" style="padding-top:8px"><h1>Luyện tập</h1><p class="stat">Mỗi câu trả lời đều có phản hồi ngay: đúng/sai, đáp án và gợi ý.</p></div>
  ${hard||due?`<div class="resume"><div><small>Gợi ý hôm nay</small><b>${due?`Ôn ${due} từ đến hạn (SRS)`:`Ôn ${hard} từ bạn đánh dấu chưa thuộc`}</b></div><button class="btn-l p" onclick="${due?"goPage('srs')":"goPage('profile')"}">Mở →</button></div>`:""}
  <div class="sec-h" style="text-align:left;margin:20px 0 10px"><h2 style="font-size:20px">Bài tập Quyển 1</h2></div>
  <div class="cats">${A.concat(B).map(x=>`<button class="cat" onclick="practiceGo('${x[3]}')"><span class="ico">${x[0]}</span><b>${x[1]}</b><small>${x[2]}</small></button>`).join("")}</div>
  <div class="sec-h" style="text-align:left;margin:28px 0 10px"><h2 style="font-size:20px">Luyện nghe và nói</h2></div>
  <div class="cats">${[["✍️","Chép chính tả","Nghe câu rồi gõ lại chữ Hán","goPage('dictation')"],["🗣️","Shadowing","Nghe và nhại theo, có chấm điểm","goShadow()"],["🎬","Shadowing video","Video bản xứ theo từng cấp","goVideo()"],["🎙","Vấn đáp","Trả lời bằng giọng nói (Quyển 1)","goTo('1','qa')"],["📝","Đề thi thử TOCFL","Bấm giờ, chấm điểm tự động","goPage('exam')"],["🔁","Ôn tập SRS","Nhắc từ theo lịch ngắt quãng","goPage('srs')"],["🖌️","Luyện thứ tự nét","Xem nét và tự viết chữ","goPage('strokes')"]].map(x=>`<button class="cat" onclick="${x[3]}"><span class="ico">${x[0]}</span><b>${x[1]}</b><small>${x[2]}</small></button>`).join("")}</div>`;
}

/* ---------- TỔNG QUAN ---------- */
function dailyWords(){
  const c=continueTarget(),pool=allWords().filter(w=>w.b===(c.b==="T"?"1":c.b)&&!isKnown(w)&&lesFree(w.b,w.n)),n=pool.length;
  if(!n)return[];const s=(dayNum()*7)%n;return [0,1,2,3,4].map(i=>pool[(s+i)%n]).filter((w,i,a)=>a.indexOf(w)===i);
}
const DOW=["T2","T3","T4","T5","T6","T7","CN"];
const histToday=ty=>(prog.hist||[]).filter(h=>dkey(h.t)===dkey(Date.now())&&ty.includes(h.y)).length;
function weekCells(){
  const now=new Date(),dow=(now.getDay()+6)%7,days=new Set((prog.hist||[]).map(h=>dkey(h.t)));
  return DOW.map((l,i)=>{const d=dkey(Date.now()+(i-dow)*864e5);return{l,on:days.has(d),today:i===dow,future:i>dow}});
}
function histRate(ty){const H=(prog.hist||[]).filter(h=>h.y===ty);return{n:H.length,ok:H.filter(h=>h.o).length}}
function dashView(intro){
  const h=new Date().getHours(),greet=h<11?"Chào buổi sáng":h<18?"Chào buổi chiều":"Chào buổi tối",name=prog.name?esc(prog.name):"bạn";
  const goal=prog.dgoal||10,today=todayCount(),gp=Math.min(100,pctOf(today,goal)),c=continueTarget(),sc=prog.score,acc=sc.total?pctOf(sc.right,sc.total):null;
  const lastB=c.b==="T"?"1":c.b,bs=bookStats(c.b),dw=dailyWords(),done=lessonsDone(),hardN=Object.keys(prog.hard||{}).length,newUser=!c.started;
  const wk=weekCells();
  const T=[["📖",`Học 5 từ mới`,histToday(["v"]),5,"8 phút",`vS.src='${lastB}';vS.les='all';vS.flt='new';vS.i=0;goPage('vocab')`],
    ...(hardN?[["🔁",`Ôn ${hardN} từ chưa thuộc`,0,0,"5 phút",`vS.src='${lastB}';vS.les='all';vS.flt='hard';vS.i=0;goPage('vocab')`]]:[]),
    ["✅",`Làm 10 câu trắc nghiệm`,histToday(["q"]),10,"6 phút",`goPage('practice')`],
    ["🎧",`Chép chính tả 5 câu`,histToday(["d"]),5,"6 phút",`dMode='dict';dSel=null;goPage('dictation')`]];
  const tasks=T.map(t=>{const fin=t[3]>0&&t[2]>=t[3];return `<button class="task ${fin?"fin":""}" onclick="${t[5]}"><span class="ti">${fin?"✓":t[0]}</span><span class="tx"><small>${t[3]?`${Math.min(t[2],t[3])}/${t[3]}`:"Gợi ý"}</small><b>${t[1]}</b></span><span class="tm">${fin?"Xong":t[4]}</span></button>`}).join("");
  const dr=histRate("d"),hr=histRate("h"),best=(prog.exam||[]).reduce((m,x)=>Math.max(m,x.s),-1);
  const skill=(ic,name,val,p)=>`<div class="sk"><div class="row" style="justify-content:space-between"><b>${ic} ${name}</b><small class="stat">${val}</small></div>${pbar(p)}</div>`;
  const skills=skill("🔤","Từ vựng",`${bs.k}/${bs.t}`,pctOf(bs.k,bs.t))+skill("✅","Trắc nghiệm",acc===null?"Chưa làm":acc+"%",acc||0)+skill("✍️","Chép chính tả",dr.n?`${dr.ok}/${dr.n} câu đúng`:"Chưa làm",dr.n?pctOf(dr.ok,dr.n):0)+skill("🗣️","Shadowing",hr.n?`${hr.ok}/${hr.n} câu đạt`:"Chưa làm",hr.n?pctOf(hr.ok,hr.n):0)+skill("📝","Thi thử TOCFL",best<0?"Chưa thi":best+"/100",Math.max(0,best));
  const started=["1","2","3","4","5","6","T"].map(n=>({n,s:bookStats(n)})).filter(x=>x.s.k>0);
  const rows=started.length?`<div class="tbl"><div class="th2"><span>Khóa học</span><span>Từ đã thuộc</span><span>Hoàn thành</span></div>${started.map(x=>{const p=pctOf(x.s.k,x.s.t);return `<button class="tr2" onclick="setBook('${x.n}')"><span class="zh">${x.n==="T"?"TOCFL 詞彙":"當代中文課程 "+x.n}</span><span>${x.s.k}/${x.s.t}</span><span class="bd ${p>=60?"hi":p>=20?"mid":"lo"}">${p}%</span></button>`}).join("")}</div>`:empty("📚","Chưa có khóa học nào đang học","Học vài từ trong một quyển để theo dõi tiến độ tại đây.",`<button class="b p" onclick="goPage('courses')">Xem khóa học</button>`);
  return `<div class="dh"><h1>${greet}, <b>${name}</b>!</h1>${intro?`<button class="b" onclick="homeIntro=true;homeView()">Xem giới thiệu</button>`:""}</div>
  <div class="dwrap"><div class="dmain">
   <section class="hero-card c-hero"><div><small>${newUser?"Bắt đầu":"Tiếp tục học"}</small><h2 class="zh">${newUser?"Quyển 1 · Bài 1":c.label}</h2><p>${newUser?"Chào hỏi và giới thiệu bản thân — bài đầu tiên của người mới.":`Đã thuộc ${bs.k}/${bs.t} từ trong khóa này.`}</p>${pbar(pctOf(bs.k,bs.t))}</div><button class="btn-l" onclick="setBook('${newUser?"1":c.b}')">${newUser?"Bắt đầu":"Tiếp tục"} →</button></section>
   <section class="card c-tasks"><div class="row" style="justify-content:space-between"><h3 style="margin:0">Việc hôm nay</h3><small class="stat">${today}/${goal} lượt</small></div><div class="tasks">${tasks}</div></section>
   <section class="card c-skills"><h3>Tiến độ theo kỹ năng</h3><div class="skills">${skills}</div></section>
   <section class="card c-courses"><h3>Khóa học đang học</h3>${rows}</section>
  </div><aside class="dside">
   <section class="card act2 c-act"><div class="row" style="justify-content:space-between"><h3 style="margin:0">Hoạt động</h3><select aria-label="Mục tiêu mỗi ngày" onchange="prog.dgoal=+this.value;save();pageView()">${[5,10,20,30].map(n=>`<option value="${n}" ${n===goal?"selected":""}>Mục tiêu ${n}</option>`).join("")}</select></div>
    <div class="streak"><b>${streakDays()}</b><span>ngày học liên tiếp</span></div>
    <div class="week">${wk.map(d=>`<span class="${d.on?"on":""} ${d.today?"td":""} ${d.future?"fu":""}">${d.on?"✓":d.l}</span>`).join("")}</div>
    <div style="margin-top:14px"><div class="row" style="justify-content:space-between"><small>Mục tiêu hôm nay</small><small><b>${Math.min(today,goal)}/${goal}</b></small></div>${pbar(gp)}</div><small class="stat">${today>=goal?"🎉 Bạn đã hoàn thành mục tiêu hôm nay!":"Mỗi câu hỏi, thẻ nhớ hay từ đánh dấu đều được tính."}</small></section>
   <section class="card c-words"><h3>Từ vựng hôm nay</h3>${dw.length?`<div class="dwl">${dw.map(w=>`<div class="vl"><button class="b spk" onclick="speak('${jsq(w.s)}')" aria-label="Nghe">🔊</button><div><span class="zh">${w.h}</span> <span class="py">${w.p}</span><div class="vi">${esc(w.m)}</div></div></div>`).join("")}</div>`:empty("📚","Chưa có từ để gợi ý","Bắt đầu một bài học để nhận gợi ý mỗi ngày.")}</section>
   <section class="card c-done"><h3>Bài hoàn thành</h3>${done.length?`<ul class="donel">${done.slice(0,5).map(l=>`<li><button onclick="${l.b==="1"?`setBook('1');setLesson('${l.n}-${l.n}')`:`setBook('${l.b}');tfPickLv('Bài ${l.n}')`}"><span>✅ Q${l.b} · Bài ${l.n}</span><span class="zh">${esc(l.zh)}</span></button></li>`).join("")}</ul>`:empty("🏁","Chưa có bài nào","Thuộc 80% từ vựng của một bài để tính hoàn thành.")}</section>
  </aside></div>`;
}

/* ---------- HỒ SƠ ---------- */
function reviewRemove(k){delete (prog.hard||{})[k];delete (prog.bm||{})[k];save();pageView()}
function profileView(){
  const sc=prog.score,acc=sc.total?pctOf(sc.right,sc.total):null,done=lessonsDone(),pro=premInfo();
  const rev=allWords().filter(w=>(prog.hard||{})[wKey(w)]||isBm(w)).slice(0,40);
  const last7=[...Array(7)].map((_,i)=>{const d=dkey(Date.now()-(6-i)*864e5),H=(prog.hist||[]).filter(h=>dkey(h.t)===d&&(h.y==="q"));return{d:d.slice(5),n:H.length,a:H.length?pctOf(H.filter(x=>x.o).length,H.length):null}});
  const bks=["1","2","3","4","5","6","T"].map(n=>{const s=bookStats(n);return `<div class="prow"><span>${n==="T"?"TOCFL":"Quyển "+n}</span>${pbar(pctOf(s.k,s.t))}<b>${s.k}/${s.t}</b></div>`}).join("");
  return `<div class="pg-head" style="padding-top:8px"><h1>Hồ sơ</h1><p class="stat">Dữ liệu học được lưu trên trình duyệt của thiết bị này. Chưa có đăng nhập tài khoản.</p></div>
  <section class="card"><div class="row" style="justify-content:space-between;gap:14px"><label style="flex:1;min-width:200px;font-weight:600;font-size:14px">Tên hiển thị<input type="text" value="${esc(prog.name||"")}" maxlength="24" placeholder="Bạn muốn được gọi là gì?" onchange="prog.name=this.value.trim();save();toast('Đã lưu tên')"></label><div><small class="stat">Gói hiện tại</small><div><span class="pill">${pro?(pro==="y"?"Pro năm":"Pro tháng"):"Free"}</span></div></div></div></section>
  <div class="scoregrid" style="margin:14px 0"><div class="sc"><b>${Object.keys(prog.known).length+Object.keys(prog.tk||{}).length}</b>từ đã thuộc</div><div class="sc"><b>${done.length}</b>bài hoàn thành</div><div class="sc"><b>${streakDays()}</b>ngày liên tiếp</div><div class="sc"><b>${acc===null?"–":acc+"%"}</b>${sc.total?`đúng (${sc.right}/${sc.total})`:"chưa làm bài"}</div></div>
  <section class="card"><b>Từ đã thuộc theo khóa học</b><div style="margin-top:8px">${bks}</div></section>
  <section class="card"><b>Kết quả trắc nghiệm 7 ngày</b>${last7.some(x=>x.n)?`<div class="chart" style="margin-top:10px">${last7.map(x=>`<div title="${x.d}: ${x.n} câu, ${x.a===null?"–":x.a+"%"}"><i style="height:${x.a===null?3:Math.max(3,x.a*.9)}px"></i><small>${x.d.slice(3)}</small></div>`).join("")}</div><small class="stat">Chiều cao cột = tỉ lệ đúng trong ngày.</small>`:empty("📊","Chưa có kết quả","Làm vài câu trắc nghiệm để xem biểu đồ tại đây.",`<button class="b p" onclick="goPage('practice')">Đến Luyện tập</button>`)}</section>
  <section class="card"><b>Bài đã hoàn thành (${done.length})</b>${done.length?`<div class="chips" style="margin-top:10px">${done.map(l=>`<span class="chip">Q${l.b} · Bài ${l.n}</span>`).join("")}</div>`:empty("🏁","Chưa có bài hoàn thành","Đánh dấu thuộc từ 80% từ vựng của một bài để tính hoàn thành.")}</section>
  <section class="card"><b>Từ cần ôn lại (${rev.length})</b>${rev.length?rev.map(w=>`<div class="vl"><button class="b spk" onclick="speak('${jsq(w.s)}')" aria-label="Nghe">🔊</button><div><span class="zh">${w.h}</span> <span class="py">${w.p}</span><div class="vi">${esc(w.m)}</div></div><button class="b" onclick="reviewRemove('${jsq(wKey(w))}')" aria-label="Bỏ khỏi danh sách">✕</button></div>`).join(""):empty("✨","Danh sách trống","Từ bạn đánh dấu “Chưa thuộc” hoặc lưu ⭐ sẽ xuất hiện ở đây.")}</section>
  <section class="card"><b>Công cụ học tập</b><div class="chips" style="margin-top:10px"><button class="chip" onclick="goPage('progress')">📈 Theo dõi chi tiết</button><button class="chip" onclick="goPage('path')">🗺️ Lộ trình</button><button class="chip" onclick="goPage('docs')">📚 Tài liệu</button>${FREE_MODE?"":`<button class="chip" onclick="goPage('plans')">Gói học</button>`}</div>
   <p style="margin-top:12px" class="stat">${signedIn()?`Đăng nhập bằng <b>${esc(SESS.user.email||"")}</b> · <a href="#" onclick="showAccount();return false">Tài khoản</a>`:(sbOn()?`<button class="b" onclick="showLogin()">Đăng nhập để đồng bộ gói Pro</button>`:"")}</p>
   <p class="stat" style="margin-top:12px"><a href="#" onclick="goPage('data');return false">Xóa dữ liệu học trên thiết bị này</a></p></section>`;
}

/* ---------- GÓI HỌC (trang riêng, ở chân trang) ---------- */
function plansView(){
  if(FREE_MODE)return `<div class="pg-head" style="padding-top:8px"><h1>Học miễn phí</h1></div>${empty("🎁","Mọi tính năng đang miễn phí","Bài học, thẻ nhớ, luyện tập, chép chính tả, shadowing, đề thi thử và các công cụ đều mở cho tất cả mọi người. Hiện chưa có gói trả phí nào.",`<button class="btn-l p" onclick="setBook('1')">Bắt đầu học</button>`)}`;
  return `<div class="pg-head" style="padding-top:8px"><h1>Gói học</h1><p class="stat">Học cơ bản luôn miễn phí. Gói Pro mở thêm bài học, luyện tập không giới hạn và công cụ theo dõi.</p></div>
  <div class="plans">${PLANS.map(p=>`<div class="plan${p.hot?" hot":""}">${p.hot?'<span class="hotb">Đề xuất</span>':""}<h4>${p.name}</h4><div class="pr">${p.price?vnd(p.price):"0đ"}<small>${p.per}</small></div>${p.price?`<div class="stat" style="margin-top:-2px">Quốc tế: <b>$${USD[p.id].toFixed(2)}</b>${p.per}</div>`:""}<p class="stat">${p.desc}</p><ul>${p.perks.map(x=>`<li>${x}</li>`).join("")}</ul>${p.price?`<button class="btn-l p" onclick="buy('${p.id}')">Nâng cấp</button>`:`<button class="btn-l" onclick="setBook('1')">Học ngay</button>`}</div>`).join("")}</div>
  <div class="cmp"><table><thead><tr><th>Tính năng</th><th>Free</th><th>Pro</th></tr></thead><tbody>
   ${[["Từ vựng, phát âm, bài học cơ bản","✓","✓"],["Số bài học","Một số bài","Toàn bộ"],["Thẻ nhớ","15 thẻ/ngày","Không giới hạn"],["Trắc nghiệm","15 câu/ngày, dạng cơ bản","Không giới hạn, mọi dạng"],["Ôn tập ngắt quãng (SRS)","—","✓"],["Theo dõi tiến độ chi tiết và lịch sử","—","✓"],["Đề thi thử TOCFL","Cấp A1","A1–B2"],["Tài liệu bổ sung, lộ trình theo mục tiêu","—","Pro năm"]].map(r=>`<tr><td>${r[0]}</td><td class="c">${r[1]}</td><td class="c pr">${r[2]}</td></tr>`).join("")}</tbody></table></div>
  ${isPro()?`<p class="act" style="padding:14px 18px">✅ Gói Pro đang hoạt động${SUB&&SUB.expires_at?" đến "+new Date(SUB.expires_at).toLocaleDateString("vi-VN"):""}.</p>`:(sbOn()&&!signedIn()?`<p class="stat">Đã mua? <a href="#" onclick="showLogin();return false">Đăng nhập</a> bằng email đã dùng khi mua.</p>`:"")}`;
}
const MAINP={dash:dashView,courses:coursesView,vocab:vocabLView,practice:practiceView,profile:profileView,plans:plansView};

/* liên kết sâu từ trang tĩnh/Google: /#quyen-3, /#tocfl, /#khoa-hoc ... */
function routeHash(){
  const h=(location.hash||"").replace(/^#\/?/,"").toLowerCase();if(!h)return;
  let m=h.match(/^quyen-([1-6])$/);
  if(m)return setBook(m[1]);
  if(h==="tocfl")return setBook("T");
  const P={"khoa-hoc":"courses","tong-quan":"dash","tu-vung":"vocab","luyen-tap":"practice","ho-so":"profile","goi":"plans","chinh-ta":"dictation","thi-thu":"exam"};
  if(P[h])goPage(P[h]);
}
addEventListener("hashchange",()=>routeHash());
