
/* ============ TRANG CHỦ (kiểu hihsk) ============ */
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
  <div class="cta-band"><span class="pill">Miễn phí · không cần đăng ký</span><h2>Sẵn sàng chinh phục tiếng Trung phồn thể?</h2><p>Tiến độ học được lưu ngay trên trình duyệt của bạn.</p>
    <div class="cta"><button class="btn-l p" onclick="setBook('1')">Bắt đầu Quyển 1</button><button class="btn-l" onclick="setBook('T')">Xem từ vựng TOCFL</button></div></div>`;
}
