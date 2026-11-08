/* ============ TRỢ LÝ TRA CỨU (chatbot) ============
   Chạy ngay trên trang, dùng dữ liệu có sẵn của trang (từ vựng Quyển 1–6 + TOCFL, câu mẫu, ngữ pháp, 214 bộ thủ,
   lượng từ). Không gửi câu hỏi đi đâu cả, không cần máy chủ hay khóa API. */
const CT=(v,e)=>LANG==="en"?e:v;
const vnorm=s=>String(s).normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/đ/g,"d").toLowerCase();
const chA=s=>esc(jsq(s));                               // dùng trong onclick="f('…')"
const chSp=t=>`<button class="b spk cb-sp" type="button" aria-label="Nghe" onclick="speak('${chA(t)}')">🔊</button>`;
const chAskA=t=>`onclick="chatAsk('${chA(t)}')"`;
const CH={open:false,msgs:[],ce:0};

/* ---- chỉ mục từ (gộp trùng theo chữ+pinyin) ---- */
let _CHW=null;
function chWords(){
  if(_CHW)return _CHW;allDict();
  const M=new Map();
  _ALLL.forEach(x=>{const k=x[0]+"|"+x[1],e=M.get(k);
    if(e){if(!e.src.includes(x[3]))e.src.push(x[3]);return}
    M.set(k,{h:x[0],p:x[1],m:x[2],src:[x[3]],pn:stripTone(x[1]),mn:vnorm(x[2])});
  });
  return _CHW=[...M.values()];
}

/* ---- tìm từ bằng pinyin / tiếng Việt ---- */
function chFind(q){
  const qn=vnorm(q).replace(/[^a-z0-9 ]+/g," ").replace(/\s+/g," ").trim();
  if(qn.length<2)return {list:[],total:0};
  const qp=stripTone(q),qw=" "+qn+" ",ql=q.trim().toLowerCase(),acc=ql!==vnorm(q).trim();
  const R=[];
  chWords().forEach(w=>{
    let s=0;
    const toks=w.mn.split(/[,;\/()]/).map(x=>x.replace(/[^a-z0-9 ]+/g," ").replace(/\s+/g," ").trim()).filter(Boolean);
    if(toks.includes(qn))s=95;
    else if(qp&&w.pn===qp)s=90;
    else if(toks.some(t=>t.startsWith(qn+" ")||t.endsWith(" "+qn)))s=70;
    else if((" "+toks.join(" ")+" ").includes(qw))s=60;
    else if(qp.length>=3&&w.pn.startsWith(qp))s=35;
    else if(qn.length>=3&&w.mn.includes(qn))s=25;
    if(s&&acc&&!(w.m+" "+w.p).toLowerCase().includes(ql))s=Math.round(s*.4);   // gõ có dấu thì khớp đúng dấu xếp trước
    if(s)R.push({w,s});
  });
  R.sort((a,b)=>b.s-a.s||a.w.h.length-b.w.h.length);
  return {list:R.slice(0,8).map(x=>x.w),total:R.length};
}
const chWordRow=w=>`<div class="cw">${chSp(w.h.split("/")[0])}<div><span class="zh tap" ${chAskA(w.h)}>${w.h}</span> <span class="py">${w.p}</span><div class="vi">${w.m}</div></div><span class="pos">${w.src[0]}</span></div>`;

/* ---- câu mẫu ---- */
let _CHQ=null;
const chQA=()=>_CHQ||(_CHQ=QA.map(x=>({zh:x.q,py:x.qpy,vi:x.qvi,topic:"Hỏi đáp · Bài "+x.n})));
function chSents(test,n){
  const out=[];
  for(const s of [...allSents(),...chQA()]){if((!s.b||sentOk(s))&&test(s)){out.push(s);if(out.length>=n*4)break}}
  return out.sort((a,b)=>a.zh.length-b.zh.length).slice(0,n);
}
const chSentRow=s=>`<div class="ex"><div class="row"><span class="zh tap" onclick="speak('${chA(s.zh)}')">${s.zh}</span>${chSp(s.zh)}</div>${s.py?`<div class="py">${s.py}</div>`:""}<div class="vi">${s.vi}</div><div class="stat">${s.topic}</div></div>`;

/* ---- ngữ pháp ---- */
const chGramRow=g=>`<div class="cb-g"><b>${g.t}</b><div class="formula">${g.f}</div><div>${g.d}</div>${g.ex.slice(0,2).map(e=>`<div class="ex"><div class="row"><span class="zh tap" onclick="speak('${chA(e[0])}')">${e[0]}</span>${chSp(e[0])}</div><div class="py">${e[1]}</div><div class="vi">${e[2]}</div></div>`).join("")}<div class="stat">Quyển 1 · Bài ${g.l}</div></div>`;
function chGrammar(term,max){
  const t=term.trim();if(!t)return [];
  const tn=vnorm(t);
  return GRAMMAR.filter(g=>g.t.includes(t)||g.f.includes(t)||(tn.length>=3&&vnorm(g.t+" "+g.f+" "+g.d).includes(tn))).slice(0,max);
}

/* ---- bộ thủ / lượng từ ---- */
function chRads(term){
  const t=term.trim(),tn=vnorm(t),sn=stripTone(t);
  return RADS.filter(r=>r.h.includes(t)||(tn.length>=2&&(vnorm(r.hv)===tn||vnorm(r.m).includes(tn)))||(sn&&stripTone(r.p)===sn));
}
const chRadRow=r=>`<div class="cw">${chSp(r.c)}<div><span class="zh">${r.h}</span> <span class="py">${r.p}</span><div class="vi">${r.hv} · ${r.m} · ${r.n} nét</div></div><span class="pos">Bộ thủ</span></div>`;
function chMW(term){
  const t=term.trim(),tn=vnorm(t),sn=stripTone(t);
  return MW.filter(x=>x.h.includes(t)||(tn.length>=2&&(vnorm(x.m).includes(tn)||vnorm(x.ev).includes(tn)))||(sn.length>=2&&stripTone(x.p)===sn));
}
const chMWRow=x=>`<div class="cw">${chSp(x.ex)}<div><span class="zh">${x.h}</span> <span class="py">${x.p}</span><div class="vi">${x.m}</div><div class="zh" style="font-size:16px">${x.ex} <span class="py">${x.ep}</span> · ${x.ev}</div></div><span class="pos">${x.g}</span></div>`;

/* ---- điều hướng bằng lời ---- */
const CH_NAV=[
  [/bo thu|radical/,"radicals","214 bộ thủ"],[/pinyin|phat am/,"pinyin","Bảng pinyin"],[/tra tu|lookup/,"lookup","Tra từ & phân tích câu"],
  [/srs|ngat quang|on tap/,"srs","Ôn tập SRS"],[/tien do|progress/,"progress","Theo dõi tiến độ"],[/lo trinh/,"path","Lộ trình"],
  [/tai lieu|anki/,"docs","Tài liệu & Anki"],[/chinh ta|shadowing|dictation/,"dictation","Chép chính tả & Shadowing"],[/mau cau|ngan hang cau|sentence/,"sentences","Mẫu câu"],
  [/luong tu|measure/,"measure","Lượng từ"],[/chu de|topic/,"topics","Từ vựng theo chủ đề"],[/thu tu net|stroke|viet chu/,"strokes","Thứ tự nét"],
  [/thi thu|de thi|exam/,"exam","Đề thi thử TOCFL"],[/luyen tap|practice/,"practice","Luyện tập"],[/tu vung|vocab/,"vocab","Từ vựng"],
  [/khoa hoc|course|giao trinh/,"courses","Khóa học"],[/ho so|profile|cai dat/,"profile","Hồ sơ"],[/tong quan|dashboard/,"dash","Tổng quan"]];
function chGo(k){
  chatToggle(false);
  if(k==="tocfl"){setBook("T");return}
  if(k==="home"){setBook("H");return}
  goPage(k);
}
function chNavMatch(qn){const m=CH_NAV.find(x=>x[0].test(qn));return m?{k:m[1],t:m[2]}:null}
function chNavBtn(k,t){return `<button class="b p cb-go" type="button" onclick="chGo('${k}')">${CT("Mở","Open")}: ${t} →</button>`}

const CH_STOP=new Set("ngữ pháp ngu phap grammar cấu trúc cau truc cách dùng cach dung của về là gì la gi thế nào the nao cho chữ từ bộ thủ bo thu radical radicals lượng luong measure word words classifier classifiers có nghĩa ví dụ vi du câu mẫu cau mau example examples".split(" "));
const chTerm=q=>q.replace(/[?？!。.,]/g," ").split(/\s+/).filter(t=>t&&!CH_STOP.has(t.toLowerCase())).join(" ");

/* ---- trả lời ---- */
function chHelp(){
  return `<div>${CT("Mình tra cứu giúp bạn ngay trên trang này. Bạn có thể:","I can look things up for you right here. You can:")}</div>
  <ul class="cb-ul"><li>${CT("Gõ <b>chữ Hán</b> hoặc cả câu → pinyin, nghĩa, câu ví dụ","Type <b>Chinese characters</b> or a sentence → pinyin, meaning, examples")}</li>
  <li>${CT("Gõ <b>pinyin</b> hoặc <b>tiếng Việt</b> → tìm từ (vd: <i>xuexiao</i>, <i>trường học</i>)","Type <b>pinyin</b> or <b>Vietnamese</b> → find words (e.g. <i>xuexiao</i>, <i>trường học</i>)")}</li>
  <li>${CT("<b>ngữ pháp 比</b>, <b>bộ thủ 水</b>, <b>lượng từ sách</b>","<b>ngữ pháp 比</b>, <b>bộ thủ 水</b>, <b>lượng từ sách</b>")}</li>
  <li>${CT("<b>cách viết 學</b> → mở thứ tự nét; <b>ví dụ 喜歡</b> → câu mẫu","<b>cách viết 學</b> → stroke order; <b>ví dụ 喜歡</b> → example sentences")}</li>
  <li>${CT("<b>mở luyện tập</b>, <b>mở bảng pinyin</b>… → đi tới mục đó","<b>mở luyện tập</b>, <b>mở bảng pinyin</b>… → jump to a section")}</li></ul>`;
}
const CH_SUG=[["你好","你好"],["xin chào","xin chào"],["ngữ pháp 比","ngữ pháp 比"],["bộ thủ 水","bộ thủ 水"],["lượng từ sách","lượng từ sách"],["cách viết 學","cách viết 學"],["thanh điệu","thanh điệu"]];

function chHan(q){
  const D=allDict(),mt=q.match(/[一-鿿][\s\S]*[一-鿿]|[一-鿿]/);
  if(!mt)return "";
  const t=mt[0];let html="",gloss=[],seen=new Set(),i=0,miss=0;
  while(i<t.length){
    if(!isHan(t[i])){let j=i;while(j<t.length&&!isHan(t[j]))j++;html+=esc(t.slice(i,j));i=j;continue}
    let k=0;for(let L=Math.min(8,t.length-i);L>=1;L--){if(D[t.slice(i,i+L)]&&[...t.slice(i,i+L)].every(isHan)){k=L;break}}
    if(k){const w=t.slice(i,i+k),[py,vi]=D[w];html+=`<ruby class="tap" onclick="speak('${chA(w)}')">${w}<rt>${py}</rt></ruby>`;if(!seen.has(w)){seen.add(w);gloss.push([w,py,vi])}i+=k}
    else{html+=t[i];miss++;i++}
  }
  const han=[...t].filter(isHan),isWord=!!D[t]&&han.length===t.length;
  let out="";
  if(isWord){
    const all=chWords().filter(w=>w.h===t||w.h.split("/").includes(t));
    out+=`<div class="cb-big"><span class="zh">${t}</span> ${chSp(t)}</div>`;
    if(all.length)out+=all.slice(0,3).map(w=>`<div class="cb-m"><span class="py">${w.p}</span> — ${w.m}<div class="stat">${w.src.join(" · ")}</div></div>`).join("");
    else out+=`<div class="cb-m"><span class="py">${D[t][0]}</span> — ${D[t][1]}</div>`;
  }else{
    out+=`<div class="zh cb-ruby">${html}</div><div class="row" style="gap:8px;margin:6px 0">${chSp(t)}</div>`;
    if(gloss.length)out+=`<div class="cb-gl">${gloss.map(g=>`<div><span class="zh tap" ${chAskA(g[0])}>${g[0]}</span> <span class="py">${g[1]}</span> — ${g[2]}</div>`).join("")}</div>`;
    if(miss)out+=`<div class="stat">${CT(`Có ${miss} chữ chưa có trong từ điển của trang nên chưa hiện pinyin.`,`${miss} character(s) are not in this site's dictionary yet.`)}</div>`;
  }
  const btns=[];
  if(han.length&&han.length<=6)btns.push(`<button class="b cb-go" type="button" onclick="chStroke('${chA(han.join(""))}')">🖌 ${CT("Thứ tự nét","Stroke order")}</button>`);
  if(btns.length)out+=`<div class="row" style="gap:8px;margin-top:8px;flex-wrap:wrap">${btns.join("")}</div>`;
  if(han.length===1){const r=RADS.find(x=>x.c===han[0]);if(r)out+=`<div class="cb-sec">${CT("Đây cũng là một bộ thủ","This is also a radical")}</div>${chRadRow(r)}`}
  if(han.length<=4){
    const ex=chSents(s=>s.zh.includes(t)&&s.zh!==t,3);
    if(ex.length)out+=`<div class="cb-sec">${CT("Câu ví dụ","Examples")}</div>${ex.map(chSentRow).join("")}`;
    const rel=chWords().filter(w=>w.h!==t&&w.h.includes(t)).slice(0,6);
    if(rel.length)out+=`<div class="cb-sec">${CT("Từ có chứa","Words containing")} ${t}</div><div class="cb-chips">${rel.map(w=>`<button class="chip" type="button" ${chAskA(w.h)}>${w.h} <small>${w.m.split(/[,;]/)[0]}</small></button>`).join("")}</div>`;
    const gr=chGrammar(t,2);
    if(gr.length)out+=`<div class="cb-sec">${CT("Ngữ pháp liên quan","Related grammar")}</div>${gr.map(chGramRow).join("")}`;
  }
  return out;
}

function chReply(q0){
  const q=q0.trim(),qn=vnorm(q).replace(/\s+/g," ").trim(),hasHan=/[一-鿿]/.test(q);
  let m;

  // lời chào / cảm ơn / trợ giúp
  if(/^(hi|hello|hey|alo|chao|chao ban|xin chao ban)\b[!. ]*$/.test(qn))return CT("Chào bạn! 👋 Bạn muốn tra từ, câu hay ngữ pháp nào?","Hi! 👋 What would you like to look up?")+chHelp();
  if(/^(cam on|thanks|thank you)/.test(qn))return CT("Không có gì! Cần tra gì nữa cứ hỏi mình nhé 😊","You're welcome! Ask me anything else 😊");
  if(/^(help|giup|huong dan|tro giup|ban lam duoc gi|lam duoc gi|\?)$/.test(qn))return chHelp();

  // mở một mục
  if(m=qn.match(/^(mo|vao|di toi|di den|open|go to)\s+(.+)$/)){
    if(/tocfl/.test(m[2]))return CT("Mình mở mục TOCFL cho bạn:","Opening TOCFL for you:")+`<div class="row" style="margin-top:8px"><button class="b p cb-go" type="button" onclick="chGo('tocfl')">${CT("Mở","Open")}: TOCFL →</button></div>`;
    if(/trang chu|home/.test(m[2]))return `<div class="row"><button class="b p cb-go" type="button" onclick="chGo('home')">${CT("Mở","Open")}: ${CT("Trang chủ","Home")} →</button></div>`;
    const n=chNavMatch(m[2]);
    if(n)return CT("Được rồi, bấm để mở:","Sure, tap to open:")+`<div class="row" style="margin-top:8px">${chNavBtn(n.k,n.t)}</div>`;
  }

  // kiến thức nhanh
  if(/thanh dieu|dau thanh|声调|聲調|may thanh|tone/.test(qn)&&!hasHan)
    return `<div>${CT("Tiếng Trung phổ thông có <b>4 thanh + thanh nhẹ</b>:","Mandarin has <b>4 tones + a neutral tone</b>:")}</div><ul class="cb-ul"><li><b>mā</b> — ${CT("thanh 1: ngang, cao","tone 1: high, level")}</li><li><b>má</b> — ${CT("thanh 2: đi lên","tone 2: rising")}</li><li><b>mǎ</b> — ${CT("thanh 3: xuống rồi lên","tone 3: dip then rise")}</li><li><b>mà</b> — ${CT("thanh 4: đi xuống mạnh","tone 4: sharp fall")}</li></ul><div>${CT("Hai thanh 3 đi liền: chữ đầu đọc thành thanh 2 (你好 → ní hǎo).","Two tone-3 syllables in a row: the first becomes tone 2 (你好 → ní hǎo).")}</div><div class="row" style="margin-top:8px">${chNavBtn("pinyin",CT("Bảng pinyin","Pinyin chart"))}</div>`;
  if(/phon the|gian the|fan ti|traditional|simplified/.test(qn)&&!hasHan)
    return CT("Trang này dùng <b>chữ phồn thể (繁體字)</b>, chuẩn Đài Loan, theo giáo trình 當代中文課程 và danh sách TOCFL. Khi tra, bạn nên gõ chữ phồn thể.","This site uses <b>Traditional characters (繁體字)</b>, the Taiwan standard, following the 當代中文課程 textbooks and the TOCFL lists. Please type Traditional characters when searching.");
  if(/^(tocfl)( la gi)?\??$/.test(qn))
    return CT("<b>TOCFL</b> là kỳ thi năng lực Hoa ngữ của Đài Loan. Trang có từ vựng TOCFL A1–B2 và đề thi thử.","<b>TOCFL</b> is Taiwan's Chinese proficiency test. This site has TOCFL A1–B2 vocabulary and a mock exam.")+`<div class="row" style="margin-top:8px;gap:8px;flex-wrap:wrap"><button class="b p cb-go" type="button" onclick="chGo('tocfl')">TOCFL →</button>${chNavBtn("exam",CT("Đề thi thử","Mock exam"))}</div>`;

  // cách viết / thứ tự nét
  if(hasHan&&/(cach viet|viet chu|thu tu net|stroke|net chu|how to write)/.test(qn)){
    const w=[...q].filter(isHan).slice(0,6).join("");
    return CT(`Mình mở thứ tự nét của <b>${w}</b>:`,`Opening stroke order for <b>${w}</b>:`)+`<div class="row" style="margin-top:8px"><button class="b p cb-go" type="button" onclick="chStroke('${chA(w)}')">🖌 ${CT("Xem & tập viết","Watch & practice")} →</button></div>`;
  }

  // ví dụ / câu mẫu
  if(m=qn.match(/^(vi du|cau co|cau mau|example|examples)\b\s*(.*)$/)){
    const term=chTerm(q);
    if(!term)return CT("Gõ thêm từ cần xem ví dụ, vd: <i>ví dụ 喜歡</i> hoặc <i>ví dụ xin lỗi</i>.","Add a word, e.g. <i>ví dụ 喜歡</i> or <i>ví dụ xin lỗi</i>.");
    const tn=vnorm(term),L=/[一-鿿]/.test(term)?chSents(s=>s.zh.includes(term),5):chSents(s=>vnorm(s.vi).includes(tn),5);
    return L.length?`<div>${CT("Câu mẫu với","Sentences with")} <b>${esc(term)}</b>:</div>${L.map(chSentRow).join("")}`:CT(`Chưa có câu mẫu nào chứa “${esc(term)}”.`,`No sentence contains “${esc(term)}”.`);
  }

  // ngữ pháp
  if(/(ngu phap|grammar|cau truc|cach dung)/.test(qn)){
    const term=chTerm(q);
    if(!term)return CT("Bạn muốn xem ngữ pháp nào? Ví dụ: <i>ngữ pháp 比</i>, <i>ngữ pháp 了</i>, <i>cấu trúc so sánh</i>.","Which grammar point? E.g. <i>ngữ pháp 比</i>, <i>ngữ pháp 了</i>, <i>cấu trúc so sánh</i>.");
    const G=chGrammar(term,3);
    if(G.length)return G.map(chGramRow).join("")+`<div class="stat">${CT("Xem đầy đủ trong tab Ngữ pháp của từng bài.","See the full Grammar tab in each lesson.")}</div>`;
    const ex=/[\u4e00-\u9fff]/.test(term)?chSents(s=>s.zh.includes(term),4):[];
    return CT(`Phần ngữ pháp của trang (Quyển 1) chưa có mục về “${esc(term)}”.`,`The grammar notes (Book 1) have no entry for “${esc(term)}”.`)+(ex.length?` ${CT("Mình tìm được vài câu có dùng từ này:","Here are some sentences that use it:")}${ex.map(chSentRow).join("")}`:` ${CT("Thử từ khóa khác nhé.","Try another keyword.")}`);
  }

  // bộ thủ
  if(/(bo thu|radical)/.test(qn)){
    const term=chTerm(q);
    if(!term)return CT("Có 214 bộ thủ. Gõ ví dụ <i>bộ thủ 水</i>, <i>bộ thủ nước</i>, hoặc mở bảng đầy đủ:","There are 214 radicals. Try <i>bộ thủ 水</i> or <i>bộ thủ nước</i>, or open the full table:")+`<div class="row" style="margin-top:8px">${chNavBtn("radicals",CT("214 bộ thủ","214 radicals"))}</div>`;
    const R=chRads(term);
    return R.length?R.slice(0,8).map(chRadRow).join("")+(R.length>8?`<div class="stat">${CT(`Còn ${R.length-8} bộ nữa — `,`${R.length-8} more — `)}</div>`:"")+`<div class="row" style="margin-top:6px">${chNavBtn("radicals",CT("Xem bảng 214 bộ","Full table"))}</div>`:CT(`Không thấy bộ thủ nào khớp “${esc(term)}”.`,`No radical matches “${esc(term)}”.`);
  }

  // lượng từ
  if(/(luong tu|measure word|classifier)/.test(qn)){
    const term=chTerm(q);
    if(!term)return CT("Gõ ví dụ <i>lượng từ sách</i> hoặc <i>lượng từ 本</i>, hoặc mở bảng lượng từ:","Try <i>lượng từ sách</i> or <i>lượng từ 本</i>, or open the full list:")+`<div class="row" style="margin-top:8px">${chNavBtn("measure",CT("Lượng từ","Measure words"))}</div>`;
    const R=chMW(term);
    return R.length?R.slice(0,5).map(chMWRow).join("")+`<div class="row" style="margin-top:6px">${chNavBtn("measure",CT("Xem tất cả lượng từ","All measure words"))}</div>`:CT(`Chưa thấy lượng từ nào khớp “${esc(term)}”.`,`No measure word matches “${esc(term)}”.`);
  }

  // chữ Hán
  if(hasHan)return chHan(q);

  // pinyin / tiếng Việt
  const F=chFind(q);
  const sen=qn.length>=4?chSents(s=>vnorm(s.vi).includes(qn),3):[];
  const nav=chNavMatch(qn);
  let out="";
  if(F.list.length){
    out+=`<div>${CT("Kết quả cho","Results for")} <b>${esc(q)}</b>:</div>`+F.list.map(chWordRow).join("");
    if(F.total>F.list.length)out+=`<div class="stat">${CT(`Còn ${F.total-F.list.length} kết quả nữa — gõ cụ thể hơn để thu hẹp.`,`${F.total-F.list.length} more — be more specific to narrow down.`)}</div>`;
  }
  if(sen.length)out+=`<div class="cb-sec">${CT("Câu mẫu","Sample sentences")}</div>${sen.map(chSentRow).join("")}`;
  if(nav)out+=`<div class="row" style="margin-top:8px">${chNavBtn(nav.k,nav.t)}</div>`;
  if(out)return out;
  return CT(`Mình chưa tìm thấy “${esc(q)}”. Mình tra theo từ điển và câu mẫu của trang nên không dịch tự do được. Thử: gõ <b>chữ Hán</b>, gõ <b>pinyin không dấu</b> (vd <i>xuexiao</i>) hoặc một <b>từ tiếng Việt ngắn</b> (vd <i>trường học</i>).`,`I couldn't find “${esc(q)}”. I search this site's dictionary and sample sentences, so I can't translate freely. Try Chinese characters, toneless pinyin (e.g. <i>xuexiao</i>) or a short Vietnamese word.`)+`<div class="row" style="margin-top:8px">${chNavBtn("lookup",CT("Tra từ & phân tích câu","Word lookup"))}</div>`;
}

/* ---- giao diện ---- */
function chStroke(w){chatToggle(false);hzWord=String(w).replace(/[^一-鿿]/g,"").slice(0,6)||hzWord;goPage("strokes")}
function chRender(){
  const b=document.getElementById("chlog");if(!b)return;
  b.innerHTML=CH.msgs.map(m=>`<div class="cm ${m.r==="u"?"cu":"cbt"}">${m.h}</div>`).join("");
  const last=b.lastElementChild;
  if(last&&last.classList.contains("cbt")&&CH.msgs.length>1)b.scrollTop=Math.max(0,last.offsetTop-8);else b.scrollTop=b.scrollHeight;
}
function chPush(r,h){CH.msgs.push({r,h});if(CH.msgs.length>40)CH.msgs.shift();chRender()}
function chWelcome(){chPush("b",`<div>${CT("Chào bạn! Mình là trợ lý tra cứu của <b>Học Tiếng Trung</b> 👋","Hi! I'm the lookup assistant of <b>Study Chinese</b> 👋")}</div>`+chHelp())}
function chatSend(txt){
  const inp=document.getElementById("chin");
  if(txt===undefined&&Date.now()-CH.ce<80)return;       // Enter dùng để chốt bộ gõ (IME), không phải gửi
  const q=(txt===undefined?(inp?inp.value:""):txt).trim();
  if(!q)return;
  if(inp&&txt===undefined)inp.value="";
  if(!CH.msgs.length)chWelcome();
  chPush("u",esc(q));track("chat_q",{len:q.length});
  let h;try{h=chReply(q)}catch(e){h=CT("Có lỗi nhỏ khi tra cứu, bạn thử lại giúp mình nhé.","Something went wrong, please try again.")}
  chPush("b",h);
}
const chatAsk=q=>{chatSend(q);const i=document.getElementById("chin");if(i&&matchMedia("(hover:hover)").matches)i.focus()};
function chatClear(){CH.msgs=[];chWelcome()}
function chatToggle(f){
  const box=document.getElementById("chbox"),fab=document.getElementById("chfab");if(!box)return;
  CH.open=f===undefined?!CH.open:!!f;box.hidden=!CH.open;fab.setAttribute("aria-expanded",CH.open?"true":"false");fab.classList.toggle("on",CH.open);
  if(CH.open){if(!CH.msgs.length)chWelcome();else chRender();setTimeout(()=>{const i=document.getElementById("chin");if(i)i.focus()},60)}
}
function chatInit(){
  if(document.getElementById("chfab"))return;
  const w=document.createElement("div");w.id="chatroot";
  w.innerHTML=`<button id="chfab" class="chfab" type="button" aria-label="Trợ lý tra cứu" aria-expanded="false" aria-controls="chbox" onclick="chatToggle()"><span class="ci" aria-hidden="true">💬</span><span class="ct">Tra cứu</span></button>
  <section id="chbox" class="chbox" role="dialog" aria-label="Trợ lý tra cứu" hidden>
    <header class="chh"><div><b>Trợ lý tra cứu</b><small>Từ · câu · ngữ pháp · bộ thủ</small></div><div class="chx"><button class="ibtn" type="button" onclick="chatClear()" title="Xóa hội thoại" aria-label="Xóa hội thoại">↺</button><button class="ibtn" type="button" onclick="chatToggle(false)" title="Đóng" aria-label="Đóng">✕</button></div></header>
    <div id="chlog" class="chlog" role="log" aria-live="polite"></div>
    <div class="chsug">${CH_SUG.map(s=>`<button class="chip" type="button" onclick="chatSend('${chA(s[1])}')">${s[0]}</button>`).join("")}</div>
    <form class="chf" onsubmit="event.preventDefault();chatSend()"><input id="chin" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" enterkeyhint="send" placeholder="Gõ chữ Hán, pinyin hoặc tiếng Việt…" aria-label="Câu hỏi tra cứu" oncompositionend="CH.ce=Date.now()"><button class="b p" type="submit">Gửi</button></form>
  </section>`;
  document.body.appendChild(w);
  document.addEventListener("keydown",e=>{if(e.key==="Escape"&&CH.open)chatToggle(false)});
}
