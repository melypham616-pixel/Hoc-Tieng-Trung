
/* ============ CHÉP CHÍNH TẢ · MẪU CÂU · LƯỢNG TỪ · TỪ VỰNG CHỦ ĐỀ · THỨ TỰ NÉT · ĐỀ THI THỬ ============ */
const jsq=s=>String(s).replace(/\\/g,"\\\\").replace(/'/g,"\\'");

/* ---- nguồn câu ---- */
let _SENTS=null;
function allSents(){
  if(_SENTS)return _SENTS;
  _SENTS=[];
  TRANS.forEach(t=>{if(t[1]&&t[1].length<=40){const Ls=LESSONS[+t[3]-1]||{};_SENTS.push({zh:t[1],py:t[2],vi:t[0],b:"1",n:+t[3],topic:"Quyển 1 · Bài "+t[3],lz:Ls.zh||"",lv:Ls.vi||""})}});
  Object.keys(BOOKS).forEach(b=>BOOKS[b].lessons.forEach(L=>{if(!L.d||!L.d.l)return;rows(L.d.l).forEach(r=>{const p=r.split("|");if(p.length>=3&&p[1].length>=3&&p[1].length<=40)_SENTS.push({zh:p[1],vi:p[2],b,n:L.n,topic:`Quyển ${b} · Bài ${L.n} · ${L.vi}`,lz:L.zh,lv:L.vi})})}));
  return _SENTS;
}
const sentOk=s=>lesFree(s.b,s.n);

/* ---- Dictation Arena: Chép chính tả + Shadowing ---- */
let dMode="dict",dFilter="all",dSel=null,dQ=[],dI=0,dRes=null,dStat={ok:0,n:0},dBest={};
const dKey=(m,b,n)=>m+b+":"+n;
function goShadow(){dMode="shad";dSel=null;goPage("dictation")}
function dLessons(){
  const M={};allSents().forEach(x=>{const k=x.b+":"+x.n;(M[k]=M[k]||{b:x.b,n:x.n,lz:x.lz,lv:x.lv,S:[]}).S.push(x)});
  return Object.values(M).filter(l=>l.S.length>=3).sort((a,b)=>a.b-b.b||a.n-b.n);
}
function dProg(l){const p=(prog.dict||{})[dKey(dMode,l.b,l.n)];return p||{d:0,o:0,t:l.S.length}}
function dOpen(b,n){
  if(!lesFree(b,+n)){showLock("lesson");return}
  const l=dLessons().find(x=>x.b===b&&x.n===+n);if(!l)return;
  dSel=l;dQ=sh(l.S).slice(0,15);dI=0;dRes=null;dStat={ok:0,n:0};dBest={};track('dict_open',{m:dMode,b,n});pageView();window.scrollTo({top:0});
}
function dSave(ok){
  prog.dict=prog.dict||{};const k=dKey(dMode,dSel.b,dSel.n),p=prog.dict[k]||{d:0,o:0,t:Math.min(15,dSel.S.length)};
  p.d=Math.min(p.t,p.d+1);if(ok)p.o++;prog.dict[k]=p;save();
}
function dictCheck(){
  const s=dQ[dI],v=($("#dans").value||"").trim();if(!v)return;
  const A=normZh(v),B=normZh(s.zh),d=diffHtml(A,B),ok=A===B;
  dStat.n++;if(ok)dStat.ok++;dRes={ok,d};logHist("d",ok);dSave(ok);track('dictation',{ok:ok?1:0});pageView();
}
function dictPlay(r){if(dQ[dI])speak(dQ[dI].zh,r||0)}
function dictNext(){stopRec();dI++;dRes=null;pageView();window.scrollTo({top:0})}
function shadowRec(){
  const s=dQ[dI];if(!s)return;
  recordTarget("sh",s.zh,{quiet:2200,idle:8000,max:20000},text=>{
    const r=compareRead(s.zh,text),pct=Math.round(r.score*100),box=$("#fb-sh");if(!box)return;
    const first=!(dBest[dI]!==undefined);if(first){dStat.n++;if(pct>=70)dStat.ok++;dSave(pct>=70);logHist("h",pct>=70)}
    dBest[dI]=Math.max(dBest[dI]||0,pct);track('shadowing',{score:pct});
    box.innerHTML=`<div class="rr ${pct>=70?"good":"low"}"><div><b>${pct}%</b> ${pct>=90?"🎉 Nhại rất giống!":pct>=70?"👍 Khá tốt, chú ý các từ đỏ.":"💪 Nghe lại rồi nhại chậm hơn nhé."}</div>${chipsHtml(r.marks)}${needHtml(r.marks)}<div class="stat">Máy nghe được: <span class="zh">${r.heard||"(không rõ)"}</span></div>${diffBlock(text,s.zh)}</div>`;
  });
}
function dictationView(){
  const L=dLessons();
  const modeTabs=`<div class="seg" style="max-width:420px"><button class="${dMode==="dict"?"on":""}" onclick="dMode='dict';dSel=null;pageView()">✍️ Chép chính tả</button><button class="${dMode==="shad"?"on":""}" onclick="dMode='shad';dSel=null;pageView()">🗣️ Shadowing</button></div>`;
  if(dSel){
    const s=dQ[dI],head=`<div class="row" style="margin-bottom:10px"><button class="b" onclick="stopRec();dSel=null;pageView()">← Danh sách bài</button><b>Quyển ${dSel.b} · Bài ${dSel.n} · <span class="zh">${dSel.lz}</span></b></div>`;
    if(dI>=dQ.length)return head+`<div class="card" style="text-align:center"><h3>🎉 Hoàn thành ${dQ.length} câu</h3><p>${dMode==="dict"?"Đúng hoàn toàn":"Nhại đạt từ 70%"}: <b>${dStat.ok}/${dStat.n}</b></p><div class="row" style="justify-content:center"><button class="b p" onclick="dOpen('${dSel.b}',${dSel.n})">Làm lại</button><button class="b" onclick="dSel=null;pageView()">Chọn bài khác</button></div></div>`;
    const prog_=`<div class="stat" style="margin:8px 0">Câu ${dI+1}/${dQ.length} · ${dMode==="dict"?"Đúng":"Đạt"} ${dStat.ok}/${dStat.n}</div><div class="bar" style="background:var(--line);margin-bottom:12px"><i style="width:${dI/dQ.length*100}%"></i></div>`;
    if(dMode==="shad")return head+prog_+`<div class="card"><p class="stat" style="margin-top:0">Shadowing: nghe một câu, rồi <b>nhại lại ngay</b> thật giống về nhịp và ngữ điệu. Bấm 🎤, đọc to, rồi bấm lần nữa (hoặc chờ vài giây) để chấm.</p>
     <div class="zh" style="font-size:28px;line-height:2.1;text-align:center" id="shtxt">${annotate(s.zh).html}</div><div class="vi" style="text-align:center">${esc(s.vi)}</div>
     <div class="row" style="justify-content:center;margin-top:12px;gap:10px"><button class="b p" onclick="speak('${jsq(s.zh)}')">🔊 Nghe</button><button class="b" onclick="speak('${jsq(s.zh)}',0.5)">🐢 Chậm</button><button class="b mic" id="mic-sh" onclick="shadowRec()">🎤 Nhại lại</button></div>
     <div id="fb-sh" style="margin-top:12px"></div><div class="row" style="justify-content:space-between;margin-top:12px"><label class="stat"><input type="checkbox" onchange="document.getElementById('shtxt').style.visibility=this.checked?'hidden':'visible'"> ẩn chữ (chỉ nghe)</label><button class="b p" onclick="dictNext()">Câu tiếp →</button></div></div>`;
    return head+prog_+`<div class="card"><div class="row" style="justify-content:center;gap:10px"><button class="b p" onclick="dictPlay()">🔊 Nghe</button><button class="b" onclick="dictPlay(0.5)">🐢 Chậm</button><button class="b" onclick="document.getElementById('dhint').hidden=!document.getElementById('dhint').hidden">💡 Gợi ý</button></div>
     <div id="dhint" hidden class="stat" style="text-align:center;margin-top:10px">${s.py?`<div class="py">${esc(s.py)}</div>`:""}${esc(s.vi)}</div>
     ${dRes?`<div class="fb ${dRes.ok?"ok":"bad"}" style="margin-top:14px">${dRes.ok?"✅ Chính xác!":"❌ Chưa đúng hoàn toàn."}<div class="zh" style="font-size:24px;margin-top:6px">Bạn gõ: ${dRes.d.a}</div><div class="zh" style="font-size:24px">Đáp án: ${dRes.d.b}</div><div class="vi" style="margin-top:6px">${esc(s.vi)}</div></div><div class="row" style="margin-top:12px"><button class="b" onclick="speak('${jsq(s.zh)}')">🔊 Nghe đáp án</button><button class="b p" onclick="dictNext()">Câu tiếp →</button></div>`
     :`<textarea id="dans" rows="2" placeholder="Gõ câu bạn nghe được bằng chữ Hán…" style="margin-top:14px" onkeydown="if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();dictCheck()}"></textarea><div class="row" style="margin-top:10px"><button class="b p" onclick="dictCheck()">Kiểm tra</button><button class="b" onclick="dictNext()">Bỏ qua</button></div>`}</div>`;
  }
  const shown=L.filter(l=>dFilter==="all"||l.b===dFilter),st=shown.map(l=>{const p=dProg(l);return p.d>=p.t&&p.d>0?2:p.d>0?1:0});
  const cnt=k=>st.filter(x=>x===k).length;
  return `<div class="dhero"><small>${dMode==="dict"?"LUYỆN NGHE VÀ GÕ CHÍNH TẢ":"LUYỆN NGHE VÀ NHẠI THEO"}</small><h2>Dictation Arena</h2><p>${dMode==="dict"?"Nghe câu bằng giọng Meijia rồi gõ lại chữ Hán — rèn phản xạ nghe, nhận mặt chữ phồn thể và pinyin.":"Shadowing: nghe rồi nhại lại ngay để luyện nhịp, ngữ điệu và thanh điệu; hệ thống chấm độ giống từng từ."}</p></div>
  ${modeTabs}
  <div class="chips" style="margin-top:14px">${["all","1","2","3","4","5","6"].map(b=>`<span class="chip ${dFilter===b?"on":""}" onclick="dFilter='${b}';pageView()">${b==="all"?"Tất cả":"Quyển "+b}</span>`).join("")}</div>
  <div class="scoregrid"><div class="sc"><b>${shown.length}</b>bài</div><div class="sc"><b>${cnt(2)}</b>đã làm</div><div class="sc"><b>${cnt(1)}</b>đang làm</div><div class="sc"><b>${cnt(0)}</b>chưa làm</div></div>
  <div class="dgrid">${shown.map((l,i)=>{const free=lesFree(l.b,l.n),p=dProg(l),state=st[i];return `<button class="dcard ${free?"":"lockd"}" onclick="dOpen('${l.b}',${l.n})"><div class="row" style="justify-content:space-between"><span class="pill">Quyển ${l.b} · Bài ${l.n}</span><span class="tg ${free?"fr":"vip"}">${free?"Miễn phí":"🔒 Pro"}</span></div><h4 class="zh">${l.lz}</h4><div class="vi">${esc(l.lv)}</div><div class="row" style="justify-content:space-between;margin-top:10px"><small class="stat">${Math.min(15,l.S.length)} câu</small><small class="${state===2?"okc":"stat"}">${state===2?"✓ Hoàn thành "+p.o+"/"+p.t:state===1?"Đang làm "+p.d+"/"+p.t:"Chưa làm"}</small></div></button>`}).join("")}</div>`;
}

/* ---- Mẫu câu giao tiếp ---- */
let sQ="",sLim=40,sTopic="all";
function sentRender(){
  const q=sQ.trim().toLowerCase(),sn=stripTone(q);
  let L=allSents().filter(s=>sentOk(s)&&(sTopic==="all"||s.b===sTopic)&&(!q||s.zh.includes(q)||s.vi.toLowerCase().includes(q)||(s.py&&stripTone(s.py).includes(sn))));
  const n=L.length;L=L.slice(0,sLim);
  $("#sout").innerHTML=`<div class="stat" style="margin:8px 0">${n} mẫu câu</div>`+L.map(s=>`<div class="vl"><button class="b spk" onclick="speak('${jsq(s.zh)}')">🔊</button><div><div class="zh" style="font-size:22px;line-height:2">${annotate(s.zh).html}</div><div class="vi">${esc(s.vi)}</div><small class="stat">${esc(s.topic)}</small></div></div>`).join("")+(n>sLim?`<p style="text-align:center"><button class="b" onclick="sLim+=40;sentRender()">Xem thêm</button></p>`:"");
}
function sentView(){
  setTimeout(sentRender,0);
  return `<p>Mẫu câu giao tiếp lấy từ hội thoại và bài tập của Quyển 1–6, xếp theo bài/chủ đề. Chạm vào từ để nghe, có pinyin ngay trên chữ.</p>
  <div class="row tf-bar"><input type="search" placeholder="Tìm: chữ Hán, pinyin hoặc tiếng Việt…" value="${esc(sQ)}" oninput="sQ=this.value;sLim=40;sentRender()"><select onchange="sTopic=this.value;sLim=40;sentRender()"><option value="all">Mọi quyển</option>${["1","2","3","4","5","6"].map(b=>`<option value="${b}" ${sTopic===b?"selected":""}>Quyển ${b}</option>`).join("")}</select></div><div id="sout"></div>`;
}

/* ---- Lượng từ ---- */
const MW_RAW=`Người & động vật
個|gè|lượng từ chung, dùng cho người và rất nhiều vật|一個人|yí ge rén|một người
位|wèi|người (lịch sự, kính trọng)|三位老師|sān wèi lǎoshī|ba thầy cô
名|míng|người theo nghề/vai trò|兩名學生|liǎng míng xuéshēng|hai học sinh
隻|zhī|động vật nhỏ, chim; một chiếc của cặp|一隻貓|yì zhī māo|một con mèo
條|tiáo|vật dài mềm: cá, đường, quần, sông|一條魚|yì tiáo yú|một con cá
頭|tóu|gia súc lớn: bò, heo, voi|兩頭牛|liǎng tóu niú|hai con bò
匹|pǐ|ngựa, cuộn vải|一匹馬|yì pǐ mǎ|một con ngựa
群|qún|đàn, nhóm người/vật|一群朋友|yì qún péngyǒu|một nhóm bạn
Đồ vật hằng ngày
本|běn|sách, vở, tạp chí|一本書|yì běn shū|một quyển sách
張|zhāng|vật có mặt phẳng: giấy, bàn, vé, giường|兩張票|liǎng zhāng piào|hai tấm vé
支|zhī|vật thon dài: bút, cây|一支筆|yì zhī bǐ|một cây bút
把|bǎ|vật có tay cầm: dao, ô, ghế|一把傘|yì bǎ sǎn|một cái ô
件|jiàn|quần áo (phần thân), sự việc, hành lý|一件衣服|yí jiàn yīfú|một cái áo
套|tào|bộ, tập hợp|一套房子|yí tào fángzi|một căn hộ
台|tái|máy móc: máy tính, ti vi, máy giặt|一台電腦|yì tái diànnǎo|một cái máy tính
輛|liàng|xe cộ|三輛車|sān liàng chē|ba chiếc xe
架|jià|máy bay, đàn piano|一架飛機|yí jià fēijī|một chiếc máy bay
間|jiān|phòng, căn|兩間房間|liǎng jiān fángjiān|hai căn phòng
棟|dòng|tòa nhà|一棟大樓|yí dòng dàlóu|một tòa nhà
扇|shàn|cửa, cửa sổ|一扇窗戶|yí shàn chuānghù|một ô cửa sổ
面|miàn|gương, cờ, vật phẳng|一面鏡子|yí miàn jìngzi|một tấm gương
顆|kē|vật tròn nhỏ: hạt, sao, răng, trái tim|一顆星星|yì kē xīngxing|một ngôi sao
塊|kuài|miếng, cục; đồng (tiền, nói)|一塊蛋糕|yí kuài dàngāo|một miếng bánh
片|piàn|lát mỏng, mảnh|一片葉子|yí piàn yèzi|một chiếc lá
根|gēn|vật dài nhỏ: que, sợi, cột|一根筷子|yì gēn kuàizi|một chiếc đũa
朵|duǒ|hoa, mây|一朵花|yì duǒ huā|một bông hoa
棵|kē|cây cối|一棵樹|yì kē shù|một cái cây
封|fēng|thư|一封信|yì fēng xìn|một lá thư
Ăn uống & đo lường
杯|bēi|ly, cốc|一杯咖啡|yì bēi kāfēi|một ly cà phê
瓶|píng|chai, lọ|兩瓶水|liǎng píng shuǐ|hai chai nước
碗|wǎn|bát|一碗麵|yì wǎn miàn|một tô mì
盤|pán|đĩa|一盤餃子|yì pán jiǎozi|một đĩa há cảo
盒|hé|hộp|一盒牛奶|yì hé niúnǎi|một hộp sữa
包|bāo|gói, túi|一包糖|yì bāo táng|một gói kẹo
份|fèn|phần (ăn), bản (báo, tài liệu)|一份早餐|yí fèn zǎocān|một phần ăn sáng
雙|shuāng|đôi (vật đi theo cặp): giày, đũa|一雙鞋|yì shuāng xié|một đôi giày
對|duì|cặp (người, vật tương xứng)|一對夫妻|yí duì fūqī|một cặp vợ chồng
副|fù|bộ đồ đi cặp: kính, găng tay|一副眼鏡|yí fù yǎnjìng|một chiếc kính
斤|jīn|cân (0,5 kg)|兩斤蘋果|liǎng jīn píngguǒ|hai cân táo
公斤|gōngjīn|ki-lô-gam|三公斤米|sān gōngjīn mǐ|ba ký gạo
Thời gian, tần suất & tiền
年|nián|năm|三年|sān nián|ba năm
天|tiān|ngày|五天|wǔ tiān|năm ngày
分鐘|fēnzhōng|phút|十分鐘|shí fēnzhōng|mười phút
小時|xiǎoshí|giờ (khoảng thời gian)|兩個小時|liǎng ge xiǎoshí|hai tiếng
次|cì|lần (số lần xảy ra)|去過兩次|qùguo liǎng cì|đã đi hai lần
趟|tàng|chuyến đi và về|去一趟臺北|qù yí tàng Táiběi|đi Đài Bắc một chuyến
遍|biàn|lượt (từ đầu đến cuối)|讀一遍|dú yí biàn|đọc một lượt
頓|dùn|bữa ăn, trận (mắng)|吃一頓飯|chī yí dùn fàn|ăn một bữa
場|chǎng|trận đấu, buổi biểu diễn, cơn mưa|一場電影|yì chǎng diànyǐng|một buổi chiếu phim
塊錢|kuài qián|đồng (tiền Đài Loan, nói)|五十塊|wǔshí kuài|năm mươi đồng
元|yuán|đồng (văn viết)|一百元|yìbǎi yuán|một trăm đồng
Khác
些|xiē|một vài, một ít|一些朋友|yìxiē péngyǒu|một vài người bạn
種|zhǒng|loại, thứ|兩種顏色|liǎng zhǒng yánsè|hai loại màu
家|jiā|cửa hàng, công ty, gia đình|一家餐廳|yì jiā cāntīng|một nhà hàng
所|suǒ|trường học, bệnh viện|一所學校|yì suǒ xuéxiào|một ngôi trường
座|zuò|vật lớn cố định: núi, cầu, tòa|一座山|yí zuò shān|một ngọn núi
部|bù|phim, máy, bộ truyện|一部電影|yí bù diànyǐng|một bộ phim
篇|piān|bài văn, bài viết|一篇文章|yì piān wénzhāng|một bài văn
首|shǒu|bài hát, bài thơ|一首歌|yì shǒu gē|một bài hát
句|jù|câu nói|一句話|yí jù huà|một câu nói
堂|táng|tiết học|兩堂課|liǎng táng kè|hai tiết học`;
const MW=[];(()=>{let g="";MW_RAW.split("\n").forEach(l=>{const p=l.split("|");if(p.length===1)g=l;else MW.push({g,h:p[0],p:p[1],m:p[2],ex:p[3],ep:p[4],ev:p[5]})})})();
let mwQ="";
function mwRender(){
  const q=mwQ.trim().toLowerCase(),sn=stripTone(q),L=MW.filter(x=>!q||x.h.includes(q)||x.m.toLowerCase().includes(q)||(sn&&stripTone(x.p).includes(sn))||x.ev.toLowerCase().includes(q));
  $("#mwout").innerHTML=[...new Set(L.map(x=>x.g))].map(g=>`<div class="lh">${g}</div><div class="mwgrid">${L.filter(x=>x.g===g).map(x=>`<div class="mw"><div class="row" style="justify-content:space-between"><span><b class="zh" style="font-size:30px">${x.h}</b> <span class="py">${x.p}</span></span><button class="b spk" onclick="speak('${jsq(x.ex)}')">🔊</button></div><div class="vi">${x.m}</div><div class="exb"><span class="zh">${x.ex}</span> <small class="py">${x.ep}</small><br><small class="vi">${x.ev}</small></div></div>`).join("")}</div>`).join("")||'<p class="stat">Không tìm thấy lượng từ phù hợp.</p>';
}
function measureView(){
  setTimeout(mwRender,0);
  return `<p>Lượng từ (量詞) đứng giữa số từ và danh từ: <b>số + lượng từ + danh từ</b>, ví dụ 三<b>本</b>書. Dưới đây là ${MW.length} lượng từ thông dụng, nhóm theo cách dùng; chạm 🔊 để nghe câu ví dụ.</p>
  <input type="search" placeholder="Tìm lượng từ: chữ, pinyin hoặc nghĩa…" oninput="mwQ=this.value;mwRender()"><div id="mwout"></div>`;
}

/* ---- Từ vựng theo chủ đề ---- */
const TOPICS=[["👨‍👩‍👧","Gia đình & con người","bố|mẹ|cha|ông|bà|anh|chị|em|con trai|con gái|vợ|chồng|gia đình|bạn bè|bạn|thầy|giáo viên|học sinh|người|trẻ em|em bé"],
 ["🍜","Ăn uống","ăn|uống|cơm|nước|trà|cà phê|sữa|bánh|thịt|cá|rau|trái cây|món|nhà hàng|đói|khát|bữa|mì|bát|đũa|đồ uống|nấu"],
 ["⏰","Thời gian & số đếm","giờ|phút|ngày|tháng|năm|tuần|sáng|trưa|tối|hôm|lúc|thời gian|mùa|buổi|số|trăm|nghìn|một|hai|ba"],
 ["🛍️","Mua sắm & tiền bạc","mua|bán|tiền|giá|đắt|rẻ|cửa hàng|siêu thị|đồng|trả|thanh toán|giảm giá|khuyến mãi|hóa đơn"],
 ["🚇","Giao thông & di chuyển","xe|tàu|máy bay|đường|ga|bến|sân bay|taxi|giao thông|lái|lạc|đèn giao thông|tàu điện|đi lại|chuyến"],
 ["🏫","Học tập & trường lớp","học|sách|bài|thi|lớp|chữ|ngôn ngữ|đọc|viết|trường|đại học|bài tập|giáo trình|từ vựng|tốt nghiệp"],
 ["💼","Công việc & kinh doanh","làm việc|công việc|công ty|lương|ông chủ|nhân viên|họp|nghề|kinh doanh|phỏng vấn|thị trường|doanh nghiệp|kinh tế"],
 ["🏥","Sức khỏe & cơ thể","bệnh|đau|thuốc|khỏe|mắt|tai|đầu|tay|chân|cơ thể|bác sĩ|ngủ|mệt|bệnh viện|cảm|sốt|béo|gầy"],
 ["🌦️","Thời tiết & thiên nhiên","mưa|nắng|gió|lạnh|nóng|núi|biển|hoa|cây|trời|thời tiết|tuyết|động vật|sông|môi trường|mát"],
 ["😊","Cảm xúc & tính cách","vui|buồn|giận|yêu|thích|ghét|lo|sợ|hạnh phúc|tốt bụng|thông minh|chăm chỉ|lười|tức giận|xấu hổ|ngạc nhiên|thất vọng"],
 ["🏠","Nhà cửa & đồ dùng","nhà|phòng|cửa|bàn|ghế|giường|bếp|tủ|đèn|quần áo|áo|quần|giày|đồ dùng|căn hộ"],
 ["📱","Công nghệ & truyền thông","điện thoại|máy tính|mạng|email|ứng dụng|video|tin tức|ti vi|truyền hình|internet|điện|phim|nhạc|ảnh"],
 ["🗺️","Địa điểm & du lịch","nước|thành phố|đài loan|công viên|thư viện|ngân hàng|bưu điện|du lịch|khách sạn|bảo tàng|phong cảnh|danh lam|bản đồ|phía"]];
let _TOP=null;
function topicIndex(){
  if(_TOP)return _TOP;
  const D=[];allDict();_ALLL.forEach(x=>D.push(x));
  _TOP=TOPICS.map(t=>{const re=new RegExp("(?<![\\p{L}])("+t[2]+")(?![\\p{L}])","iu");return D.filter(x=>re.test(x[2])&&x[0].length<=6)});
  return _TOP;
}
let tpI=-1,tpLim=60,tpQ="";
function topicRender(){
  const T=topicIndex(),q=tpQ.trim().toLowerCase();
  if(tpI<0){$("#tpout").innerHTML=`<div class="feats">${TOPICS.map((t,i)=>`<button class="feat" onclick="tpI=${i};tpLim=60;tpQ='';pageView()"><div class="ico">${t[0]}</div><h4>${t[1]}</h4><span class="cnt">${T[i].length} từ</span></button>`).join("")}</div>`;return}
  let L=T[tpI].filter(x=>!q||x[0].includes(q)||x[2].toLowerCase().includes(q)||stripTone(x[1]).includes(stripTone(q)||"~"));const n=L.length;L=L.slice(0,tpLim);
  $("#tpout").innerHTML=`<div class="stat" style="margin:8px 0">${n} từ</div>`+L.map(x=>`<div class="vl"><button class="b spk" onclick="speak('${jsq(x[0])}')">🔊</button><div><span class="zh tap" onclick="speak('${jsq(x[0])}')">${x[0]}</span> <span class="py">${x[1]}</span><div class="vi">${esc(x[2])}</div></div><span class="pos">${x[3]}</span></div>`).join("")+(n>tpLim?`<p style="text-align:center"><button class="b" onclick="tpLim+=60;topicRender()">Xem thêm</button></p>`:"");
}
function topicsView(){
  setTimeout(topicRender,0);
  return tpI<0?`<p>Gom từ vựng Quyển 1–6 và TOCFL theo chủ đề đời sống. Việc xếp chủ đề dựa trên nghĩa tiếng Việt nên một từ có thể xuất hiện ở nhiều chủ đề, và có thể sót một số từ.</p><div id="tpout"></div>`
   :`<div class="row" style="margin-bottom:12px"><button class="b" onclick="tpI=-1;pageView()">← Tất cả chủ đề</button><b style="font-size:19px">${TOPICS[tpI][0]} ${TOPICS[tpI][1]}</b></div><input type="search" placeholder="Tìm trong chủ đề…" value="${esc(tpQ)}" oninput="tpQ=this.value;tpLim=60;topicRender()"><div id="tpout"></div>`;
}

/* ---- Luyện thứ tự nét (Hanzi Writer) ---- */
let hzW=[],hzWord="你好",hzLoad=null;
function hzLib(){return hzLoad||(hzLoad=new Promise((ok,no)=>{if(window.HanziWriter)return ok();const s=document.createElement("script");s.src="https://cdn.jsdelivr.net/npm/hanzi-writer@3.5.0/dist/hanzi-writer.min.js";s.onload=ok;s.onerror=()=>{hzLoad=null;no()};document.head.appendChild(s)}))}
async function hzStart(){
  const box=$("#hzbox");if(!box)return;box.innerHTML="";hzW=[];
  try{await hzLib()}catch(e){box.innerHTML='<p class="stat">Không tải được thư viện nét chữ. Kiểm tra mạng rồi thử lại.</p>';return}
  [...hzWord].filter(isHan).slice(0,6).forEach(c=>{
    const d=document.createElement("div");d.className="hzc";box.appendChild(d);
    const w=HanziWriter.create(d,c,{width:150,height:150,padding:8,showOutline:!$("#hzout")||$("#hzout").checked,strokeAnimationSpeed:1.2,delayBetweenStrokes:150,strokeColor:getComputedStyle(document.body).color,radicalColor:"#4299e1",outlineColor:"#94a3b8",onLoadCharDataError:()=>{d.innerHTML=`<div class="stat" style="padding:50px 4px;text-align:center">Chưa có dữ liệu nét cho <b class="zh">${c}</b></div>`}});
    hzW.push(w);
  });
  hzAnim();
}
function hzAnim(){let p=Promise.resolve();hzW.forEach(w=>{p=p.then(()=>new Promise(r=>w.animateCharacter({onComplete:r})))})}
function hzQuiz(){hzW.forEach(w=>{try{w.quiz()}catch(e){}})}
function hzSet(w){hzWord=w;pageView();setTimeout(hzStart,50)}
function strokesView(){
  const base=["你好","謝謝","學","中文","臺灣","朋友","老師","再見","電腦","愛"];
  setTimeout(hzStart,50);
  return `<p>Xem thứ tự nét và tự viết lại từng chữ phồn thể bằng chuột hoặc ngón tay. Nhập một từ (tối đa 6 chữ) hoặc chọn từ gợi ý bên dưới.</p>
  <div class="row tf-bar"><input type="text" id="hzin" value="${esc(hzWord)}" maxlength="6" placeholder="Nhập chữ Hán…" onkeydown="if(event.key==='Enter')hzSet(this.value)"><button class="b p" onclick="hzSet($('#hzin').value)">Xem nét</button></div>
  <div class="chips">${base.map(w=>`<span class="chip ${w===hzWord?"on":""}" onclick="hzSet('${w}')">${w}</span>`).join("")}</div>
  <div class="card"><div id="hzbox" class="hzbox"></div><div class="row" style="justify-content:center;margin-top:12px"><button class="b p" onclick="hzAnim()">▶ Xem lại các nét</button><button class="b" onclick="hzQuiz()">✍️ Tự viết</button><label class="stat"><input type="checkbox" id="hzout" checked onchange="hzStart()"> hiện nét mờ</label></div></div>
  <p class="stat">Dữ liệu nét lấy từ thư viện mã nguồn mở Hanzi Writer; một số chữ phồn thể hiếm có thể chưa có dữ liệu.</p>`;
}

/* ---- Đề thi thử TOCFL ---- */
let exCfg={lv:"A1",n:20},ex=null,exTimer=0;
function exStart(){
  if(!isPro()&&!FREE.tfLv.includes(exCfg.lv)){showLock("lesson");return}
  const P=TF.filter(x=>x.l===exCfg.lv);if(P.length<20){toast("Cấp này chưa đủ từ để ra đề.");return}
  const Q=sh(P).slice(0,exCfg.n).map((x,i)=>{const w=[];while(w.length<3){const y=P[Math.random()*P.length|0];if(y.m!==x.m&&!w.some(z=>z.m===y.m))w.push(y)}const ty=["h2m","m2h","a2m"][i%3];return{x,ty,opts:sh([x,...w]),a:-1}});
  ex={Q,i:0,left:Math.round(exCfg.n*45),done:false,lv:exCfg.lv};
  clearInterval(exTimer);exTimer=setInterval(()=>{if(!ex||ex.done){clearInterval(exTimer);return}ex.left--;const e=$("#extime");if(e)e.textContent=exFmt(ex.left);if(ex.left<=0)exFinish()},1000);
  track('exam_start',{lv:exCfg.lv,n:exCfg.n});pageView();
}
const exFmt=s=>Math.floor(s/60)+":"+String(s%60).padStart(2,"0");
function exPick(i){ex.Q[ex.i].a=i;pageView()}
function exGo(d){ex.i=Math.max(0,Math.min(ex.Q.length-1,ex.i+d));pageView();const q=ex.Q[ex.i];if(q.ty==="a2m")speak(q.x.s)}
function exFinish(){
  if(!ex||ex.done)return;ex.done=true;clearInterval(exTimer);
  const ok=ex.Q.filter(q=>q.a>=0&&q.opts[q.a]===q.x).length;ex.ok=ok;ex.score=Math.round(ok/ex.Q.length*100);
  prog.exam=prog.exam||[];prog.exam.push({t:Date.now(),lv:ex.lv,s:ex.score,n:ex.Q.length});logHist("e",ex.score>=60);save();track('exam_finish',{lv:ex.lv,score:ex.score});pageView();
}
function examView(){
  if(!ex)return `<p>Làm bài trắc nghiệm bấm giờ từ vựng TOCFL, chấm điểm tự động và xem lại câu sai. Đề được ghép từ danh sách từ của trang (nhìn chữ chọn nghĩa, nghĩa chọn chữ, nghe chọn nghĩa); đây <b>không phải đề thi thật</b> của TOCFL.</p>
   <div class="card"><div class="row tf-bar"><select onchange="exCfg.lv=this.value;pageView()">${["A1","A2","B1","B2"].map(l=>`<option value="${l}" ${exCfg.lv===l?"selected":""}>Cấp ${l}${lockIc(isPro()||FREE.tfLv.includes(l))}</option>`).join("")}</select><select onchange="exCfg.n=+this.value;pageView()">${[20,40].map(n=>`<option value="${n}" ${exCfg.n===n?"selected":""}>${n} câu · ${Math.round(n*.75)} phút</option>`).join("")}</select></div><button class="btn-l p" onclick="exStart()">▶ Bắt đầu làm bài</button><p class="stat">Gói Free thi được cấp A1; gói Pro thi mọi cấp.</p></div>
   ${prog.exam&&prog.exam.length?`<h4>Kết quả gần đây</h4><ul class="hist">${prog.exam.slice(-5).reverse().map(r=>`<li><span>${new Date(r.t).toLocaleDateString("vi-VN")}</span> Cấp ${r.lv} · ${r.n} câu <b class="${r.s>=60?"okc":"badc"}">${r.s}/100</b></li>`).join("")}</ul>`:""}`;
  if(ex.done){
    const wrong=ex.Q.filter(q=>q.opts[q.a]!==q.x);
    return `<div class="card" style="text-align:center"><div class="stat">Cấp ${ex.lv} · ${ex.Q.length} câu</div><div class="bignum" style="font:800 56px var(--ui)">${ex.score}<small style="font-size:20px">/100</small></div><p>Đúng ${ex.ok}/${ex.Q.length} câu — ${ex.score>=80?"Rất tốt! 🎉":ex.score>=60?"Đạt, cố thêm chút nữa 💪":"Cần ôn lại các từ bên dưới 📚"}</p><button class="b p" onclick="ex=null;pageView()">Làm đề mới</button></div>
    ${wrong.length?`<h4>Câu sai / chưa làm (${wrong.length})</h4>${wrong.map(q=>`<div class="vl"><button class="b spk" onclick="speak('${jsq(q.x.s)}')">🔊</button><div><span class="zh">${q.x.h}</span> <span class="py">${q.x.p}</span><div class="vi">${esc(q.x.m)}</div></div></div>`).join("")}`:""}`;
  }
  const q=ex.Q[ex.i],x=q.x,head=q.ty==="h2m"?`<div class="zh" style="font-size:52px;text-align:center">${x.h}</div><div class="py" style="text-align:center">${x.p}</div>`:q.ty==="a2m"?`<div style="text-align:center"><button class="b p" onclick="speak('${jsq(x.s)}')">🔊 Nghe</button></div>`:`<div style="text-align:center;font-size:22px">${esc(x.m)}</div>`;
  return `<div class="row" style="justify-content:space-between;margin-bottom:10px"><span class="pill">Câu ${ex.i+1}/${ex.Q.length}</span><span class="pill">⏱ <span id="extime">${exFmt(ex.left)}</span></span></div>
  <div class="card">${head}<div style="margin-top:12px">${q.opts.map((o,i)=>`<button class="b opt ${q.a===i?"on":""}" style="${q.a===i?"border-color:var(--pri);background:var(--pri2)":""}" onclick="exPick(${i})">${q.ty==="m2h"?`<span class="zh" style="font-size:24px">${o.h}</span> <span class="py">${o.p}</span>`:esc(o.m)}</button>`).join("")}</div></div>
  <div class="row" style="justify-content:space-between"><button class="b" onclick="exGo(-1)" ${ex.i?"":"disabled"}>← Trước</button><span class="stat">Đã trả lời ${ex.Q.filter(z=>z.a>=0).length}/${ex.Q.length}</span>${ex.i<ex.Q.length-1?`<button class="b p" onclick="exGo(1)">Sau →</button>`:`<button class="b p" onclick="exFinish()">Nộp bài</button>`}</div>`;
}

Object.assign(TOOLS,{
  dictation:{t:"Chép chính tả & Shadowing",ic:"✍️",g:"tool",h:dictationView},
  sentences:{t:"Mẫu câu giao tiếp",ic:"💬",g:"tool",h:sentView},
  measure:{t:"Lượng từ",ic:"📏",g:"tool",h:measureView},
  topics:{t:"Từ vựng theo chủ đề",ic:"🗂️",g:"tool",h:topicsView},
  strokes:{t:"Luyện thứ tự nét",ic:"🖌️",g:"tool",h:strokesView},
  exam:{t:"Đề thi thử TOCFL",ic:"📝",g:"tool",h:examView},
});
