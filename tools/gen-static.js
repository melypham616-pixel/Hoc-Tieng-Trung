#!/usr/bin/env node
/*
 Sinh các trang tĩnh để Google lập chỉ mục (SEO) + sitemap.xml + robots.txt từ dữ liệu của web.
 Ứng dụng chính (index.html) là một trang chạy bằng JavaScript nên chỉ có 1 địa chỉ; các trang này cho mỗi quyển/TOCFL một địa chỉ riêng,
 có tiêu đề, mô tả, dữ liệu có cấu trúc và danh sách bài/từ khóa thật, kèm nút vào học (liên kết sâu #quyen-N).

 Chạy:  node tools/gen-static.js      (build.py tự gọi sau khi ghép index.html)
*/
const fs=require("fs"),path=require("path"),vm=require("vm");
const root=path.join(__dirname,"..");
const SITE="https://studychinese.mely.io.vn";
const html=fs.readFileSync(path.join(root,"index.html"),"utf8");
const bp=fs.readFileSync(path.join(root,"build.py"),"utf8"),srcFiles=(bp.match(/for f in \[([^\]]*)\]/)[1].match(/"[^"]+"/g)||[]).map(s=>s.slice(1,-1));
const script=srcFiles.map(f=>fs.readFileSync(path.join(root,"src",f),"utf8")).join("");   // ghép lại từ src/ (không cắt từ index.html vì trong mã có chuỗi "<script>")
const proxy=()=>new Proxy(function(){},{get:(t,k)=>k==="style"?{}:k==="value"?"all":proxy(),set:()=>true,apply:()=>proxy()});
const ctx=vm.createContext({
  document:{querySelector:proxy,querySelectorAll:()=>[],createElement:proxy,addEventListener(){},body:proxy(),head:proxy(),documentElement:proxy()},
  window:{addEventListener(){}},localStorage:{getItem:()=>null,setItem(){}},location:{hash:"",origin:SITE,pathname:"/"},
  speechSynthesis:{getVoices:()=>[]},SpeechSynthesisUtterance:function(){},Audio:function(){},setTimeout:()=>0,clearTimeout(){},setInterval:()=>0,clearInterval(){},
  addEventListener(){},requestAnimationFrame:()=>0,MutationObserver:function(){this.observe=()=>{}},navigator:{language:"vi"},console
});
vm.runInContext(script+`
;globalThis.__D={LESSONS,BOOKS,BKW,VOCAB,TF,rows,esc};`,ctx);
const D=ctx.__D;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const today=new Date().toISOString().slice(0,10);

const BOOKINFO={
 "1":{lv:"Sơ cấp",d:"Chào hỏi, giới thiệu bản thân, gia đình, mua sắm, ăn uống, hỏi đường — nền tảng cho người mới học tiếng Trung phồn thể."},
 "2":{lv:"Sơ cấp",d:"Hỏi đường, thuê nhà, đi tàu, mua sắm và các tình huống sinh hoạt hằng ngày ở Đài Loan."},
 "3":{lv:"Trung cấp",d:"Chủ đề đời sống, công việc, văn hóa và nghe hiểu đoạn hội thoại dài hơn."},
 "4":{lv:"Trung cấp",d:"Bài đọc và hội thoại trung cấp: xã hội, du lịch, sức khỏe, công nghệ."},
 "5":{lv:"Trung – Cao cấp",d:"Bài đọc báo chí và nghị luận: kinh tế, giáo dục, môi trường."},
 "6":{lv:"Cao cấp",d:"Bài đọc nâng cao về xã hội, văn hóa và tư duy; mở rộng vốn từ học thuật."}
};
function lessonsOf(n){
  if(n==="1")return D.LESSONS.map(L=>({n:L.n,zh:L.zh,vi:L.vi,words:D.rows(L.v).map(r=>r.split("|"))}));
  const B=D.BOOKS[n];return B?B.lessons.map(L=>({n:L.n,zh:L.zh,vi:L.vi,words:D.rows(L.v).map(r=>r.split("|"))})):[];
}

const CSS=`:root{--bg:#FAFAF7;--card:#fff;--ink:#252A28;--mut:#737B77;--line:#E5E6DF;--pri:#2E8B70;--pri2:#E8F3EF}
@media(prefers-color-scheme:dark){:root{--bg:#141816;--card:#1C211F;--ink:#ECEFED;--mut:#9AA39F;--line:#2D3431;--pri:#4DB896;--pri2:#1C2E28}}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font:16px/1.65 Inter,system-ui,-apple-system,"Segoe UI",sans-serif}
a{color:var(--pri)}header,main,footer{max-width:960px;margin:auto;padding:0 16px}
header{display:flex;align-items:center;justify-content:space-between;gap:12px;padding-top:14px;padding-bottom:14px;border-bottom:1px solid var(--line);max-width:none}
header>div{max-width:928px;width:100%;margin:auto;display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}
.logo{font-weight:800;color:var(--pri);text-decoration:none;font-size:18px}nav a{margin-left:14px;color:var(--mut);text-decoration:none;font-weight:600;font-size:14px}
h1{font-size:clamp(26px,5vw,38px);line-height:1.2;letter-spacing:-.02em;margin:28px 0 8px}h2{margin:32px 0 10px;font-size:22px}.lead{color:var(--mut);max-width:720px}
.cta{display:inline-block;margin:16px 0;padding:13px 22px;border-radius:12px;background:var(--pri);color:#fff!important;font-weight:700;text-decoration:none}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:12px}.card{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:16px}
.zh{font-family:"Noto Sans TC","PingFang TC",sans-serif;font-weight:700}table{width:100%;border-collapse:collapse;background:var(--card);border:1px solid var(--line);border-radius:12px;overflow:hidden;font-size:15px}
td,th{padding:8px 10px;border-bottom:1px solid var(--line);text-align:left;vertical-align:top}th{color:var(--mut);font-size:13px}.py{color:var(--pri)}
details{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:10px 14px;margin:8px 0}summary{cursor:pointer;font-weight:700}
footer{padding:28px 16px 40px;color:var(--mut);font-size:14px;border-top:1px solid var(--line);margin-top:40px;max-width:960px}`;

function page({url,title,desc,h1,body,ld,crumbs}){
  const canon=SITE+url;
  const bc={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:crumbs.map((c,i)=>({"@type":"ListItem",position:i+1,name:c[0],item:SITE+c[1]}))};
  return `<!doctype html>
<html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${canon}">
<meta name="robots" content="index,follow,max-image-preview:large">
<meta property="og:type" content="website"><meta property="og:site_name" content="Study Chinese"><meta property="og:locale" content="vi_VN">
<meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:url" content="${canon}"><meta property="og:image" content="${SITE}/og-image.png">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(title)}"><meta name="twitter:description" content="${esc(desc)}"><meta name="twitter:image" content="${SITE}/og-image.png">
<meta name="theme-color" content="#2E8B70">
<link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="apple-touch-icon" href="/apple-touch-icon.png">
<script type="application/ld+json">${JSON.stringify(bc)}</script>
${ld?`<script type="application/ld+json">${JSON.stringify(ld)}</script>`:""}
<style>${CSS}</style></head><body>
<header><div><a class="logo" href="/">學 Học Tiếng Trung</a><nav><a href="/hoc/">Khóa học</a><a href="/hoc/quyen-1/">Quyển 1</a><a href="/hoc/tocfl/">TOCFL</a><a href="/#khoa-hoc">Vào học</a></nav></div></header>
<main><h1>${esc(h1)}</h1>${body}</main>
<footer>© ${new Date().getFullYear()} Study Chinese — Học tiếng Trung phồn thể cho người Việt. Trang học tập phi chính thức, không liên kết với nhà xuất bản giáo trình hay đơn vị tổ chức TOCFL. <a href="/">Về trang chủ</a></footer>
</body></html>`;
}
const write=(rel,content)=>{const f=path.join(root,rel);fs.mkdirSync(path.dirname(f),{recursive:true});fs.writeFileSync(f,content,"utf8")};
const urls=[{u:"/",p:"1.0",c:"weekly"}];

/* ---- trang từng quyển ---- */
const books=["1","2","3","4","5","6"];
books.forEach(n=>{
  const L=lessonsOf(n),info=BOOKINFO[n],words=L.reduce((a,l)=>a+l.words.length,0);
  const name=`當代中文課程 Quyển ${n}`;
  const lessons=L.map(l=>{
    const top=l.words.slice(0,8);
    return `<details${l.n===1?" open":""}><summary><span class="zh">${esc(l.zh)}</span> — ${esc(l.vi)} <small>(Bài ${l.n}, ${l.words.length} từ)</small></summary>
<table><tr><th>Hán tự</th><th>Pinyin</th><th>Nghĩa</th></tr>${top.map(w=>`<tr><td class="zh">${esc(w[0])}</td><td class="py">${esc(w[1]||"")}</td><td>${esc(w[2]||"")}</td></tr>`).join("")}</table>
<p><small>Hiển thị ${top.length}/${l.words.length} từ. <a href="/#quyen-${n}">Học đầy đủ bài này, có nghe phát âm và luyện tập →</a></small></p></details>`}).join("");
  const body=`<p class="lead">${esc(info.d)} Quyển ${n} gồm <b>${L.length} bài</b> và khoảng <b>${words} từ vựng</b> chữ phồn thể, có pinyin, nghĩa tiếng Việt và giọng đọc Đài Loan (zh-TW). Mức độ: ${esc(info.lv)}.</p>
<a class="cta" href="/#quyen-${n}">Học Quyển ${n} ngay</a>
<h2>Danh sách ${L.length} bài học</h2>${lessons}
<h2>Học gì trong mỗi bài?</h2><p>Mỗi bài có từ vựng kèm phát âm, hội thoại hoặc bài đọc có dịch tiếng Việt, thẻ nhớ, trắc nghiệm, chép chính tả và luyện nhại theo (shadowing). Tiến độ được lưu trên thiết bị của bạn.</p>
<p>Xem thêm: ${books.filter(x=>x!==n).map(x=>`<a href="/hoc/quyen-${x}/">Quyển ${x}</a>`).join(" · ")} · <a href="/hoc/tocfl/">Từ vựng TOCFL A1–B2</a></p>`;
  const ld={"@context":"https://schema.org","@type":"Course",name:`${name} — từ vựng, hội thoại, bài đọc`,description:info.d,provider:{"@type":"Organization",name:"Study Chinese",url:SITE},inLanguage:"vi",educationalLevel:info.lv,numberOfLessons:L.length,
    hasCourseInstance:{"@type":"CourseInstance",courseMode:"online",courseWorkload:"PT30M"},isAccessibleForFree:true};
  write(`hoc/quyen-${n}/index.html`,page({url:`/hoc/quyen-${n}/`,title:`Đương đại Trung văn ${name}: từ vựng & bài học phồn thể | Study Chinese`,desc:`Đương đại Trung văn (當代中文課程) Quyển ${n}: ${L.length} bài, ~${words} từ vựng phồn thể có pinyin, nghĩa tiếng Việt, nghe giọng Đài Loan. Học miễn phí.`,h1:`Đương đại Trung văn ${name}: ${L.length} bài, ~${words} từ vựng`,body,ld,crumbs:[["Trang chủ","/"],["Khóa học","/hoc/"],[`Quyển ${n}`,`/hoc/quyen-${n}/`]]}));
  urls.push({u:`/hoc/quyen-${n}/`,p:"0.8",c:"monthly"});
});

/* ---- TOCFL ---- */
{
  const byL={};D.TF.forEach(w=>{(byL[w.l]=byL[w.l]||[]).push(w)});
  const lv=["A1","A2","B1","B2"].filter(l=>byL[l]);
  const body=`<p class="lead">Danh sách từ vựng TOCFL Band A (A1–A2) và Band B (B1–B2), tổng <b>${D.TF.length.toLocaleString("vi-VN")} từ</b> chữ phồn thể, kèm pinyin, từ loại và nghĩa tiếng Việt. Học bằng danh sách, thẻ nhớ, trắc nghiệm và đề thi thử bấm giờ.</p>
<a class="cta" href="/#tocfl">Học từ vựng TOCFL ngay</a>
${lv.map(l=>`<h2>Cấp ${l} — ${byL[l].length} từ</h2><table><tr><th>Hán tự</th><th>Pinyin</th><th>Từ loại</th><th>Nghĩa</th></tr>${byL[l].slice(0,30).map(w=>`<tr><td class="zh">${esc(w.h)}</td><td class="py">${esc(w.p)}</td><td>${esc(w.pos||"")}</td><td>${esc(w.m)}</td></tr>`).join("")}</table><p><small>Hiển thị 30/${byL[l].length} từ. <a href="/#tocfl">Xem đủ danh sách cấp ${l} →</a></small></p>`).join("")}
<p>Xem thêm: <a href="/hoc/">Các quyển giáo trình 當代中文課程</a></p>`;
  const ld={"@context":"https://schema.org","@type":"Course",name:"Từ vựng TOCFL A1–B2",description:"Từ vựng TOCFL Band A và Band B kèm pinyin và nghĩa tiếng Việt.",provider:{"@type":"Organization",name:"Study Chinese",url:SITE},inLanguage:"vi",isAccessibleForFree:true};
  write("hoc/tocfl/index.html",page({url:"/hoc/tocfl/",title:`Từ vựng TOCFL A1–B2 (${D.TF.length.toLocaleString("vi-VN")} từ phồn thể) có pinyin & nghĩa tiếng Việt | Study Chinese`,desc:`Trọn bộ từ vựng TOCFL Band A và Band B: ${D.TF.length.toLocaleString("vi-VN")} từ chữ phồn thể, pinyin, từ loại, nghĩa tiếng Việt. Học thẻ nhớ, trắc nghiệm và đề thi thử miễn phí.`,h1:"Từ vựng TOCFL A1–B2 chữ phồn thể",body,ld,crumbs:[["Trang chủ","/"],["Khóa học","/hoc/"],["TOCFL","/hoc/tocfl/"]]}));
  urls.push({u:"/hoc/tocfl/",p:"0.8",c:"monthly"});
}

/* ---- trang tổng hợp khóa học ---- */
{
  const cards=books.map(n=>{const L=lessonsOf(n);return `<a class="card" href="/hoc/quyen-${n}/" style="text-decoration:none;color:inherit"><b class="zh">當代中文課程 ${n}</b><br><span style="color:var(--mut)">${BOOKINFO[n].lv} · ${L.length} bài</span><br><small>${esc(BOOKINFO[n].d)}</small></a>`}).join("")+
    `<a class="card" href="/hoc/tocfl/" style="text-decoration:none;color:inherit"><b class="zh">TOCFL 詞彙</b><br><span style="color:var(--mut)">A1–B2 · ${D.TF.length.toLocaleString("vi-VN")} từ</span><br><small>Từ vựng thi chứng chỉ tiếng Hoa Đài Loan.</small></a>`;
  const body=`<p class="lead">Study Chinese giúp người Việt học tiếng Trung phồn thể (chữ Đài Loan) theo giáo trình 當代中文課程 Quyển 1–6 và từ vựng TOCFL. Có pinyin, nghĩa tiếng Việt, giọng đọc zh-TW, thẻ nhớ, trắc nghiệm, chép chính tả và shadowing.</p>
<a class="cta" href="/">Bắt đầu học</a><h2>Chọn khóa học</h2><div class="grid">${cards}</div>`;
  const ld={"@context":"https://schema.org","@type":"WebSite",name:"Study Chinese",url:SITE,inLanguage:["vi","en"],description:"Học tiếng Trung phồn thể cho người Việt: từ vựng, hội thoại, bài đọc, TOCFL."};
  write("hoc/index.html",page({url:"/hoc/",title:"Học tiếng Trung phồn thể: Đương đại Trung văn Quyển 1–6 & TOCFL | Study Chinese",desc:"Học tiếng Trung phồn thể online cho người Việt: giáo trình 當代中文課程 Quyển 1–6, từ vựng TOCFL A1–B2, nghe phát âm Đài Loan, trắc nghiệm, chép chính tả, shadowing.",h1:"Khóa học tiếng Trung phồn thể",body,ld,crumbs:[["Trang chủ","/"],["Khóa học","/hoc/"]]}));
  urls.push({u:"/hoc/",p:"0.9",c:"weekly"});
}

/* ---- sitemap & robots ---- */
write("sitemap.xml",`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(x=>`  <url><loc>${SITE}${x.u}</loc><lastmod>${today}</lastmod><changefreq>${x.c}</changefreq><priority>${x.p}</priority></url>`).join("\n")}\n</urlset>\n`);
write("robots.txt",`User-agent: *\nAllow: /\nDisallow: /audio/\nDisallow: /audio-en/\nDisallow: /backend/\n\nSitemap: ${SITE}/sitemap.xml\n`);
console.log("Trang tĩnh:",urls.length,"địa chỉ + sitemap.xml + robots.txt");
