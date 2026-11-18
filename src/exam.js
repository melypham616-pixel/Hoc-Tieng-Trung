/* ============ THI THỬ & LUYỆN TẬP THEO CẤU TRÚC TOCFL ============
   Hai phần như bài thi TOCFL: Nghe hiểu (聽力) và Đọc hiểu (閱讀), toàn bộ trắc nghiệm 4 đáp án.
   - Thi thử: bấm giờ từng phần, không biết đáp án cho tới khi nộp, nghe tối đa 2 lần, có bảng câu hỏi + đánh dấu.
   - Luyện theo dạng: có phản hồi và giải thích ngay sau mỗi câu, nghe không giới hạn.
   Đề được ghép tự động từ giáo trình và từ vựng của trang, KHÔNG phải đề thật của TOCFL. */
const X={band:"A",size:"full",n:10,run:null,tm:0};
const X2B={
  A:{n:"Band A",sub:"Sơ cấp · A1–A2",lv:["A1","A2"],books:["1","2"]},
  B:{n:"Band B",sub:"Trung cấp · B1–B2",lv:["B1","B2"],books:["3","4","5","6"]}};
const X2T={
  L1:{s:"L",ic:"🎧",t:"Nghe câu → chọn nghĩa",d:"Nghe một câu rồi chọn nghĩa tiếng Việt đúng.",o:"vi"},
  L2:{s:"L",ic:"🗣️",t:"Nghe hỏi → chọn câu đáp",d:"Nghe một câu hỏi rồi chọn câu trả lời phù hợp.",o:"zh",only:"A"},
  L3:{s:"L",ic:"👂",t:"Nghe → chọn câu đã nghe",d:"Nghe một câu rồi chọn câu viết đúng.",o:"zh"},
  L4:{s:"L",ic:"🔤",t:"Nghe từ → chọn chữ",d:"Nghe một từ rồi chọn chữ Hán đúng.",o:"zh"},
  R1:{s:"R",ic:"✏️",t:"Điền từ vào chỗ trống",d:"Chọn từ thích hợp nhất điền vào câu.",o:"zh"},
  R2:{s:"R",ic:"📖",t:"Chọn nghĩa của từ",d:"Đọc một từ rồi chọn nghĩa đúng.",o:"vi"},
  R3:{s:"R",ic:"📄",t:"Đọc câu → chọn nghĩa",d:"Đọc câu tiếng Trung rồi chọn nghĩa đúng.",o:"vi"},
  R4:{s:"R",ic:"🧩",t:"Sắp xếp thành câu đúng",d:"Chọn cách sắp xếp các từ thành một câu đúng.",o:"zh",only:"A"}};
const X2SPEC={
  A:{L:[["L1",15],["L3",15],["L2",10],["L4",10]],R:[["R1",20],["R3",15],["R2",10],["R4",5]]},
  B:{L:[["L1",20],["L3",20],["L4",10]],R:[["R1",20],["R3",20],["R2",10]]}};
const X2SEC={L:{n:"Nghe hiểu",zh:"聽力",ic:"🎧"},R:{n:"Đọc hiểu",zh:"閱讀",ic:"📖"},P:{n:"Luyện tập",zh:"",ic:"✅"}};
const X2TIME={full:{L:40,R:50,n:50},short:{L:20,R:25,n:25}};   // phút / số câu mỗi phần (do trang đặt, mô phỏng)
const X2MAXPLAY=2;

/* ---------- tiện ích ---------- */
const exClean=h=>String(h).replace(/[()（）]/g,"").split("/")[0].trim();
const x2Han=s=>[...s].length>0&&[...s].every(isHan);
const x2G=p=>/^N/.test(p||"")?"N":/^V/.test(p||"")?"V":(p||"?");
const x2Plain=z=>z.replace(/[^一-鿿]/g,"");
const x2Share=(a,b)=>{const B=new Set(b);return [...new Set(a)].filter(c=>B.has(c)&&isHan(c)).length};
const x2Ok=b=>isPro()||(b==="A"?FREE.tfLv.includes("A1"):FREE.tfLv.includes("B1"));
function x2Alloc(spec,total){
  const sum=spec.reduce((a,x)=>a+x[1],0),raw=spec.map(x=>x[1]*total/sum),n=raw.map(Math.floor);
  let r=total-n.reduce((a,b)=>a+b,0);
  raw.map((v,i)=>[v-Math.floor(v),i]).sort((a,b)=>b[0]-a[0]).slice(0,r).forEach(x=>n[x[1]]++);
  return spec.map((x,i)=>[x[0],n[i]]);
}
function x2Ctx(band){
  const B=X2B[band],all=band==="A"?["A1","A2"]:["A1","A2","B1","B2"];
  const S=allSents().filter(s=>B.books.includes(s.b)&&s.vi&&!/[一-鿿]/.test(s.vi)&&s.zh.length>=4&&s.zh.length<=26&&sentOk(s));
  const W=TF.filter(x=>B.lv.includes(x.l)),WT=TF.filter(x=>all.includes(x.l)),map={};
  WT.forEach(w=>{const h=exClean(w.h);if(h&&!map[h])map[h]=w});
  return {band,S:sh(S),Sall:S,W:sh(W),Wall:W,map,QAl:sh(QA.filter(x=>x.a&&x.a.length<=20)),OR:sh(ORDER),used:new Set(),cl:new Map()};
}
function x2Take(ctx,arr,id,pred){
  for(let i=0;i<arr.length;i++){const x=arr[i],k=id(x);if(ctx.used.has(k))continue;if(pred&&!pred(x))continue;ctx.used.add(k);return x}
  return null;
}
function x2Pack(ty,extra,correct,wrongs,fmt){
  const seen=new Set([fmt(correct)]),W=[];
  for(const w of wrongs){const h=fmt(w);if(!seen.has(h)){seen.add(h);W.push(w);if(W.length===3)break}}
  if(W.length<3)return null;
  const list=sh([{c:1,h:fmt(correct)},...W.map(w=>({c:0,h:fmt(w)}))]);
  return Object.assign({ty,sec:X2T[ty].s,opts:list.map(o=>o.h),ans:list.findIndex(o=>o.c),sel:-1,plays:0,flag:false,audio:null,stem:""},extra);
}
const x2ExpS=s=>`<div class="zh x2-exz">${s.zh}</div>${s.py?`<div class="py">${esc(s.py)}</div>`:""}<div>${esc(s.vi)}</div>${s.topic?`<div class="stat">${esc(s.topic)}</div>`:""}`;
const x2ExpW=w=>`<div class="zh x2-exz">${exClean(w.h)}</div><div class="py">${esc(w.p)}</div><div>${esc(w.m)}</div>`;
function x2Near(ctx,s,f){
  const L=sh(ctx.Sall.filter(x=>x.zh!==s.zh&&x[f]!==s[f]&&x2Plain(x.zh)!==x2Plain(s.zh)));
  if(f==="vi")L.sort((a,b)=>Math.abs(a.vi.length-s.vi.length)-Math.abs(b.vi.length-s.vi.length));
  else L.sort((a,b)=>x2Share(b.zh,s.zh)-x2Share(a.zh,s.zh)||Math.abs(a.zh.length-s.zh.length)-Math.abs(b.zh.length-s.zh.length));
  return sh(L.slice(0,14));
}
function x2Seg(ctx,zh){   // tách từ theo từ điển (khớp dài nhất), chỉ lấy từ thuộc danh sách TOCFL của cấp
  const D=allDict(),out=[];let i=0;
  while(i<zh.length){
    if(!isHan(zh[i])){i++;continue}
    let k=0;for(let L=Math.min(6,zh.length-i);L>=1;L--){const w=zh.slice(i,i+L);if(x2Han(w)&&D[w]){k=L;break}}
    if(!k){i++;continue}
    const w=zh.slice(i,i+k);out.push(w);i+=k;
  }
  return out;
}
function x2Cloze(ctx,s){
  if(ctx.cl.has(s.zh))return ctx.cl.get(s.zh);
  let res=null;
  const T=x2Seg(ctx,s.zh);
  if(T.length>=3){
    const C=T.filter(t=>t.length>=2&&ctx.map[t]&&/^(N|V|Vs|Vst|VA|Vi|Vp|VS|Adv|M)$/.test(ctx.map[t].pos||"")&&s.zh.split(t).length===2);
    if(C.length){const t=C[Math.random()*C.length|0],i=s.zh.indexOf(t);res={t,w:ctx.map[t],pre:s.zh.slice(0,i),post:s.zh.slice(i+t.length)}}
  }
  ctx.cl.set(s.zh,res);return res;
}

/* ---------- các dạng câu hỏi ---------- */
const X2BLD={
  L1(ctx){const s=x2Take(ctx,ctx.S,x=>"s|"+x.zh);if(!s)return null;
    return x2Pack("L1",{audio:s.zh,exp:x2ExpS(s)},s,x2Near(ctx,s,"vi"),x=>esc(x.vi))},
  L2(ctx){const q=x2Take(ctx,ctx.QAl,x=>"qa|"+x.q);if(!q)return null;
    return x2Pack("L2",{audio:q.q,exp:`<div class="zh x2-exz">${q.q}</div><div class="py">${esc(q.qpy)}</div><div>${esc(q.qvi)}</div><div class="x2-sep"></div><div class="zh x2-exz">${q.a}</div><div class="py">${esc(q.apy)}</div><div>${esc(q.avi)}</div>`},q,sh(ctx.QAl.filter(x=>x.a!==q.a)),x=>x.a)},
  L3(ctx){const s=x2Take(ctx,ctx.S,x=>"s|"+x.zh);if(!s)return null;
    return x2Pack("L3",{audio:s.zh,exp:x2ExpS(s)},s,x2Near(ctx,s,"zh"),x=>x.zh)},
  L4(ctx){const w=x2Take(ctx,ctx.W,x=>"w|"+x.h,x=>x2Han(exClean(x.h)));if(!w)return null;
    const h=exClean(w.h),pw=stripTone(w.p);
    const wr=sh(ctx.Wall.filter(x=>{const y=exClean(x.h);return y!==h&&y.length===h.length&&x2Han(y)&&stripTone(x.p)!==pw}));
    wr.sort((a,b)=>(stripTone(b.p)[0]===pw[0])-(stripTone(a.p)[0]===pw[0]));
    return x2Pack("L4",{audio:w.s,exp:x2ExpW(w)},{h},sh(wr.slice(0,12)),x=>exClean(x.h))},
  R1(ctx){const s=x2Take(ctx,ctx.S,x=>"s|"+x.zh,x=>!!x2Cloze(ctx,x));if(!s)return null;
    const c=x2Cloze(ctx,s),g=x2G(c.w.pos);
    const wr=sh(ctx.Wall.filter(x=>{const y=exClean(x.h);return y.length===c.t.length&&x2Han(y)&&x2G(x.pos)!==g&&!s.zh.includes(y)}));
    return x2Pack("R1",{stem:`<div class="zh x2-big">${c.pre}<span class="x2-blank">＿＿＿</span>${c.post}</div>`,exp:`<div class="zh x2-exz">${c.pre}<mark>${c.t}</mark>${c.post}</div>${s.py?`<div class="py">${esc(s.py)}</div>`:""}<div>${esc(s.vi)}</div><div class="stat">${esc(c.t)} · ${esc(c.w.p)} · ${esc(c.w.m)}</div>`},{t:c.t},wr.slice(0,12),x=>x.t||exClean(x.h))},
  R2(ctx){const w=x2Take(ctx,ctx.W,x=>"w|"+x.h,x=>x2Han(exClean(x.h)));if(!w)return null;
    const wr=sh(ctx.Wall.filter(x=>x.m!==w.m&&x2G(x.pos)===x2G(w.pos)));
    return x2Pack("R2",{stem:`<div class="zh x2-big">${exClean(w.h)}</div>`,exp:x2ExpW(w)},w,wr.slice(0,20),x=>esc(x.m))},
  R3(ctx){const s=x2Take(ctx,ctx.S,x=>"s|"+x.zh);if(!s)return null;
    return x2Pack("R3",{stem:`<div class="zh x2-big">${s.zh}</div>`,exp:x2ExpS(s)},s,x2Near(ctx,s,"vi"),x=>esc(x.vi))},
  R4(ctx){const o=x2Take(ctx,ctx.OR,x=>"o|"+x[0],x=>x[1].length>=4&&x[1].length<=9);if(!o)return null;
    const tk=o[1],cor=tk.join(""),alts=new Set([cor]);let g=0;
    while(alts.size<4&&g++<80)alts.add(sh(tk).join(""));
    if(alts.size<4)return null;
    return x2Pack("R4",{stem:`<div class="x2-vi">${esc(o[0])}</div><div class="zh x2-big x2-tok">${sh(tk).map(t=>`<span>${t}</span>`).join("")}</div>`,exp:`<div class="zh x2-exz">${cor}</div><div>${esc(o[0])}</div>`},cor,[...alts].filter(x=>x!==cor),x=>x)}
};
function x2MakeSec(ctx,spec,total,mix){
  const sp=spec.filter(x=>X2T[x[0]]&&(!X2T[x[0]].only||X2T[x[0]].only===ctx.band));
  const out=[];
  x2Alloc(sp,total).forEach(([ty,n])=>{let k=0,g=0;while(k<n&&g++<n*8){const q=X2BLD[ty](ctx);if(q){out.push(q);k++}}});
  let g=0;while(out.length<total&&g++<total*6){const ty=sp[g%sp.length][0],q=X2BLD[ty](ctx);if(q)out.push(q)}   // bù phần thiếu
  return mix?sh(out):out;
}

/* ---------- bắt đầu / điều khiển ---------- */
function x2StartExam(){
  if(!x2Ok(X.band)){showLock("lesson");return}
  const T=X2TIME[X.size],ctx=x2Ctx(X.band),sp=X2SPEC[X.band];
  const L=x2MakeSec(ctx,sp.L,T.n),R=x2MakeSec(ctx,sp.R,T.n);
  if(L.length<10||R.length<10){toast("Chưa đủ dữ liệu để ra đề này.");return}
  X.run={mode:"exam",band:X.band,size:X.size,secs:[{k:"L",qs:L,limit:T.L*60,left:T.L*60},{k:"R",qs:R,limit:T.R*60,left:T.R*60}],si:0,qi:0,phase:"run",ask:false,quit:false,t0:Date.now()};
  track("exam2_start",{band:X.band,size:X.size});x2Tick();pageView();window.scrollTo({top:0});x2Auto();
}
function x2StartPractice(ty){
  if(!x2Ok(X.band)){showLock("lesson");return}
  const ctx=x2Ctx(X.band),sp=ty==="all"?[...X2SPEC[X.band].L,...X2SPEC[X.band].R].map(x=>[x[0],1]):[[ty,1]];
  const qs=x2MakeSec(ctx,sp,X.n,ty==="all");
  if(qs.length<3){toast("Chưa đủ dữ liệu để ra đề dạng này.");return}
  X.run={mode:"practice",band:X.band,ty,secs:[{k:"P",qs,limit:0,left:0}],si:0,qi:0,phase:"run",ask:false,quit:false,t0:Date.now()};
  track("exam2_practice",{band:X.band,ty});pageView();window.scrollTo({top:0});x2Auto();
}
function x2Tick(){
  clearInterval(X.tm);
  X.tm=setInterval(()=>{
    const r=X.run;if(!r||r.mode!=="exam"){clearInterval(X.tm);return}
    if(r.phase!=="run")return;
    const s=r.secs[r.si];s.left--;
    const e=document.getElementById("x2time");if(e){e.textContent=exFmt(Math.max(0,s.left));e.parentNode.classList.toggle("warn",s.left<=60)}
    if(s.left<=0)x2SubmitSec();
  },1000);
}
const x2Cur=()=>{const r=X.run,s=r.secs[r.si];return s.qs[r.qi]};
function x2Auto(){
  const r=X.run;if(!r||r.phase!=="run")return;const q=x2Cur();
  if(q.audio&&q.plays===0){q.plays=1;setTimeout(()=>speak(q.audio),80);x2PlayUi(q)}
}
function x2PlayUi(q){
  const b=document.getElementById("x2play");if(!b)return;
  const ex=X.run&&X.run.mode==="exam";
  b.textContent=q.plays===0?"🔊 Nghe":ex?`🔊 Nghe lại (còn ${Math.max(0,X2MAXPLAY-q.plays)})`:"🔊 Nghe lại";
}
function x2Play(slow){
  const r=X.run,q=x2Cur(),ex=r.mode==="exam";
  if(ex&&q.plays>=X2MAXPLAY){toast("Đã hết lượt nghe câu này");return}
  q.plays++;speak(q.audio,slow?0.7:0);x2PlayUi(q);
}
function x2Pick(i){
  const r=X.run,q=x2Cur();
  if(r.mode==="exam"){q.sel=q.sel===i?-1:i;pageView();return}
  if(q.sel>=0)return;
  q.sel=i;logHist("q",i===q.ans);track("exam2_answer",{ty:q.ty,ok:i===q.ans?1:0});pageView();
}
function x2Go(i){
  const r=X.run,s=r.secs[r.si];r.qi=Math.max(0,Math.min(s.qs.length-1,i));r.ask=false;pageView();window.scrollTo({top:0});x2Auto();
}
function x2Flag(){const q=x2Cur();q.flag=!q.flag;pageView()}
function x2Ask(v){X.run.ask=v;pageView()}
function x2Quit(v){X.run.quit=v;pageView()}
function x2Exit(){clearInterval(X.tm);X.run=null;pageView();window.scrollTo({top:0})}
function x2SubmitSec(){
  const r=X.run;if(!r||r.phase!=="run")return;
  r.ask=false;
  if(r.mode==="exam"&&r.si<r.secs.length-1){r.phase="gap";pageView();window.scrollTo({top:0});return}
  x2Finish();
}
function x2NextSec(){const r=X.run;r.si++;r.qi=0;r.phase="run";pageView();window.scrollTo({top:0});x2Auto()}
function x2Finish(){
  const r=X.run;clearInterval(X.tm);
  const sec={},ty={};let ok=0,n=0;
  r.secs.forEach(s=>{const o={ok:0,n:s.qs.length};s.qs.forEach(q=>{const g=q.sel===q.ans;if(g)o.ok++;(ty[q.ty]=ty[q.ty]||{ok:0,n:0}).n++;if(g)ty[q.ty].ok++});o.p=o.n?Math.round(o.ok/o.n*100):0;sec[s.k]=o;ok+=o.ok;n+=o.n});
  r.stats={ok,n,p:n?Math.round(ok/n*100):0,sec,ty,secs:Math.round((Date.now()-r.t0)/1000)};
  r.phase="result";
  if(r.mode==="exam"){prog.exam=prog.exam||[];prog.exam.push({t:Date.now(),mode:"exam",band:r.band,size:r.size,lv:r.band,s:r.stats.p,n,L:sec.L?sec.L.p:0,R:sec.R?sec.R.p:0});logHist("e",r.stats.p>=60);save()}
  track("exam2_finish",{mode:r.mode,band:r.band,score:r.stats.p});
  pageView();window.scrollTo({top:0});
}
function x2Retry(){
  const r=X.run,W=r.secs.flatMap(s=>s.qs).filter(q=>q.sel!==q.ans).map(q=>Object.assign({},q,{sel:-1,plays:0,flag:false}));
  if(!W.length)return;
  X.run={mode:"practice",band:r.band,ty:"retry",secs:[{k:"P",qs:sh(W),limit:0,left:0}],si:0,qi:0,phase:"run",ask:false,quit:false,t0:Date.now()};
  pageView();window.scrollTo({top:0});x2Auto();
}
function x2Weak(t){X.band=X.run.band;x2StartPractice(t)}

/* ---------- giao diện ---------- */
const x2Pill=(h,c)=>`<span class="x2-pill ${c||""}">${h}</span>`;
function x2Menu(){
  const T=X2TIME[X.size],B=X2B[X.band],types=Object.keys(X2T).filter(k=>!X2T[k].only||X2T[k].only===X.band);
  const hist=(prog.exam||[]).filter(h=>h.mode).slice(-6).reverse();
  return `<p class="x2-note">${CT("Cấu trúc mô phỏng bài thi <b>TOCFL</b>: phần <b>Nghe hiểu (聽力)</b> và phần <b>Đọc hiểu (閱讀)</b>, toàn bộ trắc nghiệm 4 đáp án. Đề được <b>ghép tự động</b> từ giáo trình và từ vựng của trang, <b>không phải đề thật</b>; số câu và thời gian là mức tham khảo theo mô tả phổ biến. Hãy xem thông tin chính thức tại","The structure imitates the <b>TOCFL</b>: <b>Listening (聽力)</b> and <b>Reading (閱讀)</b>, all 4-option multiple choice. Tests are <b>auto-generated</b> from this site's textbooks and vocabulary and are <b>not real exam papers</b>; question counts and times are approximate. See the official information at")} <a href="https://www.tocfl.edu.tw/" target="_blank" rel="noopener">tocfl.edu.tw</a>.</p>
  <div class="x2-seg" role="group" aria-label="Band">${["A","B"].map(b=>`<button type="button" class="${X.band===b?"on":""}" aria-pressed="${X.band===b}" onclick="X.band='${b}';pageView()">${X2B[b].n}<small>${X2B[b].sub}${lockIc(x2Ok(b))}</small></button>`).join("")}</div>
  <h3 class="x2-h">📝 ${CT("Thi thử","Mock exam")} · ${B.n}</h3>
  <div class="card x2-card">
   <div class="x2-sizes" role="group" aria-label="Độ dài đề">${["full","short"].map(z=>`<button type="button" class="${X.size===z?"on":""}" aria-pressed="${X.size===z}" onclick="X.size='${z}';pageView()"><b>${z==="full"?CT("Đề đầy đủ","Full test"):CT("Đề rút gọn","Short test")}</b><small>${X2TIME[z].n} + ${X2TIME[z].n} ${CT("câu","questions")}</small></button>`).join("")}</div>
   <ul class="x2-info"><li>🎧 <b>${CT("Nghe hiểu","Listening")}</b>: ${T.n} ${CT("câu","questions")} · ${T.L} ${CT("phút","min")} · ${CT("nghe tối đa 2 lần mỗi câu","each audio plays at most twice")}</li><li>📖 <b>${CT("Đọc hiểu","Reading")}</b>: ${T.n} ${CT("câu","questions")} · ${T.R} ${CT("phút","min")}</li><li>${CT("Chỉ biết đáp án sau khi nộp bài; có bảng câu hỏi và nút đánh dấu để xem lại.","You see the answers only after submitting; use the question grid and flags to review.")}</li></ul>
   <button class="btn-l p" type="button" onclick="x2StartExam()">${CT("Bắt đầu thi","Start the test")} →</button>
  </div>
  <h3 class="x2-h">✅ ${CT("Luyện theo dạng bài","Practice by question type")} · ${B.n}</h3>
  <p class="x2-note">${CT("Có phản hồi và giải thích ngay sau mỗi câu, nghe không giới hạn, không bấm giờ.","Instant feedback and explanations after each question, unlimited listening, no timer.")}</p>
  <div class="row tf-bar"><label class="stat">${CT("Số câu","Questions")}: <select onchange="X.n=+this.value">${[10,20,30].map(n=>`<option value="${n}" ${X.n===n?"selected":""}>${n}</option>`).join("")}</select></label></div>
  <div class="x2-types">${[["all","🎲",CT("Trộn tất cả các dạng","Mix of all types"),CT("Nghe + đọc xen kẽ","Listening and reading mixed")]].concat(types.map(k=>[k,X2T[k].ic,X2T[k].t,X2T[k].d])).map(x=>`<button type="button" class="x2-type" onclick="x2StartPractice('${x[0]}')"><span class="ico">${x[1]}</span><b>${x[2]}</b><small>${x[3]}</small>${x[0]!=="all"?`<em>${X2SEC[X2T[x[0]].s].n}</em>`:""}</button>`).join("")}</div>
  ${hist.length?`<h3 class="x2-h">🕑 ${CT("Kết quả gần đây","Recent results")}</h3><ul class="hist">${hist.map(r=>`<li><span>${new Date(r.t).toLocaleDateString("vi-VN")}</span> ${X2B[r.band]?X2B[r.band].n:""} · ${r.n} ${CT("câu","q")} · ${CT("Nghe","L")} ${r.L}% · ${CT("Đọc","R")} ${r.R}% <b class="${r.s>=60?"okc":"badc"}">${r.s}/100</b></li>`).join("")}</ul>`:""}`;
}
function x2Pal(r,s){
  return `<div class="x2-pal" role="group" aria-label="${CT("Bảng câu hỏi","Question grid")}">${s.qs.map((q,i)=>`<button type="button" class="${i===r.qi?"cur ":""}${q.sel>=0?"ans ":""}${q.flag?"flag":""}" aria-label="${CT("Câu","Question")} ${i+1}${q.sel>=0?" ✓":""}${q.flag?" 🚩":""}" onclick="x2Go(${i})">${i+1}</button>`).join("")}</div>
  <p class="stat" style="margin-top:6px"><span class="x2-key ans"></span> ${CT("đã trả lời","answered")} · <span class="x2-key flag"></span> ${CT("đã đánh dấu","flagged")}</p>`;
}
function x2Gap(){
  const r=X.run,nx=r.secs[r.si+1],T=X2SEC[nx.k];
  return `<div class="card" style="text-align:center"><div style="font-size:40px">✅</div><h3>${CT("Đã nộp phần","Submitted")} ${X2SEC[r.secs[r.si].k].n} (${X2SEC[r.secs[r.si].k].zh})</h3><p>${CT("Nghỉ một chút nếu cần. Phần tiếp theo","Take a short break if you like. Next section")}: <b>${T.ic} ${T.n} (${T.zh})</b> · ${nx.qs.length} ${CT("câu","questions")} · ${Math.round(nx.limit/60)} ${CT("phút","min")}. ${CT("Đồng hồ chỉ chạy khi bạn bắt đầu.","The clock starts when you press Start.")}</p><button class="btn-l p" type="button" onclick="x2NextSec()">${CT("Bắt đầu phần","Start")} ${T.n} →</button></div>`;
}
function x2Run(){
  const r=X.run;
  if(r.phase==="gap")return x2Gap();
  if(r.phase==="result")return x2Result();
  const s=r.secs[r.si],q=s.qs[r.qi],ex=r.mode==="exam",T=X2T[q.ty],S=X2SEC[s.k],shown=!ex&&q.sel>=0,last=r.qi===s.qs.length-1;
  const un=s.qs.filter(z=>z.sel<0).length;
  const top=`<div class="x2-top"><div class="x2-l">${x2Pill(`${S.ic} ${S.n}${S.zh?" "+S.zh:""}`)}${x2Pill(`${CT("Câu","Q")} ${r.qi+1}/${s.qs.length}`)}</div><div class="x2-r">${ex?`<span class="x2-pill x2-timer ${s.left<=60?"warn":""}">⏱ <span id="x2time">${exFmt(Math.max(0,s.left))}</span></span>`:""}<button class="b" type="button" onclick="x2Quit(true)">${CT("Thoát","Exit")}</button></div></div>`;
  const quit=r.quit?`<div class="x2-ban"><b>${CT("Thoát bài này?","Leave this test?")}</b> ${CT("Kết quả hiện tại sẽ không được lưu.","Your current progress will not be saved.")}<div class="row" style="gap:8px;margin-top:8px"><button class="b bad" type="button" onclick="x2Exit()">${CT("Thoát","Leave")}</button><button class="b" type="button" onclick="x2Quit(false)">${CT("Làm tiếp","Keep going")}</button></div></div>`:"";
  const ask=r.ask?`<div class="x2-ban"><b>${CT("Nộp phần","Submit section")} ${S.n}?</b> ${un?CT(`Còn <b>${un}</b> câu chưa trả lời.`,`<b>${un}</b> unanswered.`):CT("Bạn đã trả lời hết các câu.","All questions answered.")} ${CT("Sau khi nộp không thể quay lại phần này.","You cannot return to this section after submitting.")}<div class="row" style="gap:8px;margin-top:8px"><button class="b p" type="button" onclick="x2SubmitSec()">${CT("Nộp phần này","Submit")}</button><button class="b" type="button" onclick="x2Ask(false)">${CT("Xem lại","Review")}</button></div></div>`:"";
  const audio=q.audio?`<div class="x2-audio"><button class="b p" id="x2play" type="button" onclick="x2Play()">${q.plays===0?"🔊 "+CT("Nghe","Listen"):ex?`🔊 ${CT("Nghe lại","Replay")} (${CT("còn","left")} ${Math.max(0,X2MAXPLAY-q.plays)})`:"🔊 "+CT("Nghe lại","Replay")}</button>${ex?"":`<button class="b" type="button" onclick="x2Play(true)">🐢 ${CT("Nghe chậm","Slow")}</button>`}</div>`:"";
  const opts=q.opts.map((o,i)=>{
    const c=shown?(i===q.ans?"ok":i===q.sel?"bad":""):(q.sel===i?"on":"");
    return `<button type="button" class="x2-opt ${c}" role="radio" aria-checked="${q.sel===i}" ${shown?"disabled":""} onclick="x2Pick(${i})"><b>${"ABCD"[i]}</b><span class="${T.o==="zh"?"zh x2-oz":""}">${o}</span></button>`;
  }).join("");
  const fb=shown?`<div class="x2-fb ${q.sel===q.ans?"ok":"bad"}"><b>${q.sel===q.ans?"✅ "+CT("Chính xác!","Correct!"):"❌ "+CT("Chưa đúng. Đáp án đúng là","Not quite. The correct answer is")+" "+"ABCD"[q.ans]}</b><div class="x2-expl">${q.exp}</div>${q.audio?`<button class="b" type="button" onclick="speak('${chA(q.audio)}')">🔊 ${CT("Nghe lại","Replay")}</button>`:""}</div>`:"";
  const nav=ex
    ?`<div class="x2-nav"><button class="b" type="button" onclick="x2Go(${r.qi-1})" ${r.qi?"":"disabled"}>← ${CT("Trước","Prev")}</button><button class="b ${q.flag?"on":""}" type="button" aria-pressed="${q.flag}" onclick="x2Flag()">🚩 ${q.flag?CT("Bỏ đánh dấu","Unflag"):CT("Đánh dấu","Flag")}</button>${last?`<button class="b p" type="button" onclick="x2Ask(true)">${CT("Nộp phần này","Submit section")}</button>`:`<button class="b p" type="button" onclick="x2Go(${r.qi+1})">${CT("Sau","Next")} →</button>`}</div>`
    :`<div class="x2-nav"><span class="stat">${CT("Đã làm","Done")} ${s.qs.filter(z=>z.sel>=0).length}/${s.qs.length}</span>${last?`<button class="b p" type="button" onclick="x2SubmitSec()">${CT("Xem kết quả","See results")}</button>`:`<button class="b ${shown?"p":""}" type="button" onclick="x2Go(${r.qi+1})">${shown?CT("Câu tiếp","Next"):CT("Bỏ qua","Skip")} →</button>`}</div>`;
  return `${top}${quit}${ask}<div class="card x2-q"><div class="x2-ty">${T.ic} ${T.t}</div><div class="x2-d">${T.d}</div>${audio}${q.stem||""}<div class="x2-opts" role="radiogroup" aria-label="${CT("Đáp án","Answers")}">${opts}</div>${fb}</div>${nav}${ex?`<h4 class="x2-h">${CT("Bảng câu hỏi","Question grid")}</h4>${x2Pal(r,s)}`:""}`;
}
function x2Result(){
  const r=X.run,st=r.stats,ex=r.mode==="exam";
  const verdict=st.p>=80?CT("Rất tốt! 🎉","Excellent! 🎉"):st.p>=60?CT("Đạt, cố thêm chút nữa 💪","Pass, a little more effort 💪"):CT("Cần ôn thêm 📚","Needs more review 📚");
  const types=Object.keys(st.ty).map(k=>({k,...st.ty[k],p:Math.round(st.ty[k].ok/st.ty[k].n*100)})).sort((a,b)=>a.p-b.p);
  const weak=types.find(t=>t.p<100&&X2T[t.k]);
  const wrong=r.secs.flatMap(s=>s.qs.map((q,i)=>({q,i,s:s.k}))).filter(x=>x.q.sel!==x.q.ans);
  const bar=(l,p,t)=>`<div class="prow"><span>${l}</span><div class="bar"><i style="width:${p}%"></i></div><b>${t}</b></div>`;
  const m=Math.floor(st.secs/60);
  return `<div class="card" style="text-align:center"><div class="stat">${ex?`${X2B[r.band].n} · ${CT("Thi thử","Mock exam")}`:CT("Luyện tập","Practice")} · ${st.n} ${CT("câu","questions")} · ${m} ${CT("phút","min")}</div><div style="font:800 56px var(--ui)">${st.p}<small style="font-size:20px">/100</small></div><p>${CT("Đúng","Correct")} ${st.ok}/${st.n} — ${verdict}</p>
   <div class="row" style="justify-content:center;gap:8px;flex-wrap:wrap">${wrong.length?`<button class="btn-l p" type="button" onclick="x2Retry()">🔁 ${CT("Làm lại","Redo")} ${wrong.length} ${CT("câu sai","wrong")}</button>`:""}<button class="btn-l" type="button" onclick="x2Exit()">${CT("Về menu","Back to menu")}</button></div></div>
  ${ex?`<h4 class="x2-h">${CT("Điểm theo phần","By section")}</h4>${["L","R"].map(k=>bar(`${X2SEC[k].ic} ${X2SEC[k].n}`,st.sec[k].p,`${st.sec[k].ok}/${st.sec[k].n}`)).join("")}`:""}
  <h4 class="x2-h">${CT("Điểm theo dạng bài","By question type")}</h4>${types.map(t=>bar(`${X2T[t.k].ic} ${X2T[t.k].t}`,t.p,`${t.ok}/${t.n}`)).join("")}
  ${weak&&types.length>1?`<p class="x2-note">${CT("Dạng cần luyện thêm","Needs more practice")}: <b>${X2T[weak.k].t}</b> <button class="b" type="button" onclick="x2Weak('${weak.k}')">${CT("Luyện dạng này","Practice this")}</button></p>`:""}
  <p class="x2-note">${CT("Điểm này chỉ để bạn tự theo dõi, không quy đổi thành thang điểm hay cấp độ chính thức của TOCFL.","This score is only for your own tracking; it does not map to an official TOCFL score or level.")}</p>
  ${wrong.length?`<h4 class="x2-h">${CT("Câu sai / chưa làm","Wrong or unanswered")} (${wrong.length})</h4>${wrong.map(x=>{const q=x.q,T=X2T[q.ty];return `<div class="card x2-wr"><div class="stat">${X2SEC[x.s].n} · ${CT("câu","Q")} ${x.i+1} · ${T.t}</div>${q.stem||""}<div class="x2-mine">${q.sel>=0?`${CT("Bạn chọn","You chose")}: <span class="${T.o==="zh"?"zh":""}">${q.opts[q.sel]}</span>`:CT("Chưa trả lời","Not answered")}</div><div class="x2-good">${CT("Đáp án","Answer")}: <span class="${T.o==="zh"?"zh":""}">${q.opts[q.ans]}</span></div><div class="x2-expl">${q.exp}</div>${q.audio?`<button class="b" type="button" onclick="speak('${chA(q.audio)}')">🔊</button>`:""}</div>`}).join("")}`:`<p class="x2-note">🎉 ${CT("Bạn đúng toàn bộ!","Perfect score!")}</p>`}`;
}
function exam2View(){return X.run?x2Run():x2Menu()}
Object.assign(TOOLS.exam,{t:"Thi thử & luyện tập TOCFL",h:exam2View});

document.addEventListener("keydown",e=>{
  const r=X.run;if(!r||r.phase!=="run"||page!=="exam"||bk!=="P")return;
  if(e.target&&/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName))return;
  if(e.ctrlKey||e.metaKey||e.altKey)return;
  const k=e.key.toLowerCase(),q=x2Cur(),i="abcd".indexOf(k)>=0?"abcd".indexOf(k):"1234".indexOf(k);
  if(i>=0&&i<q.opts.length){e.preventDefault();x2Pick(i);return}
  if(r.mode==="exam"){if(e.key==="ArrowRight"){e.preventDefault();x2Go(r.qi+1)}else if(e.key==="ArrowLeft"){e.preventDefault();x2Go(r.qi-1)}else if(k==="f")x2Flag()}
});
