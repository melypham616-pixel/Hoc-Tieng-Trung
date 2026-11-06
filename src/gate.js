
/* ============ GÓI FREE / PRO (khóa mềm phía trình duyệt) ============ */
const FREE={lessons:{"1":5,"2":2,"3":2,"4":2,"5":2,"6":2},tfLv:["A1"],quiz:15,flash:15};   // số bài miễn phí mỗi quyển; số câu quiz / thẻ nhớ mỗi ngày
let SUB=null;   // gói đang dùng, đọc từ server (bảng subscriptions) sau khi đăng nhập
function premInfo(){return SUB&&SUB.expires_at&&new Date(SUB.expires_at)>new Date()?SUB.plan:null}
const isPro=()=>!!premInfo(),isYear=()=>premInfo()==="y";
function dayCnt(k){const d=new Date().toISOString().slice(0,10);if(!prog.day||prog.day.d!==d)prog.day={d,q:0,f:0};return prog.day[k]}
function dayAdd(k){dayCnt(k);prog.day[k]++}
const capped=k=>!isPro()&&dayCnt(k)>=FREE[k==="q"?"quiz":"flash"];
const lesFree=(b,n)=>isPro()||n<=(FREE.lessons[b]||0);
const lockIc=ok=>ok?"":" 🔒";
function tfLocked(l){if(isPro())return false;if(bk==="T")return !FREE.tfLv.includes(l);return +String(l).replace(/\D/g,"")>(FREE.lessons[bk]||0)}
function logHist(ty,ok){prog.hist=prog.hist||[];prog.hist.push({t:Date.now(),y:ty,b:bk,o:ok?1:0});if(prog.hist.length>600)prog.hist.splice(0,prog.hist.length-600)}
const LOCKMSG={lesson:["Bài học này thuộc gói Pro",`Gói Free mở một số bài đầu mỗi quyển (Quyển 1: ${FREE.lessons["1"]} bài, Quyển 2–6: ${FREE.lessons["2"]} bài, TOCFL: cấp A1). Pro mở toàn bộ bài học.`],
 quiz:["Bạn đã dùng hết lượt quiz miễn phí hôm nay",`Gói Free có ${FREE.quiz} câu quiz mỗi ngày. Pro làm không giới hạn và dùng được mọi dạng bài kiểm tra nâng cao.`],
 flash:["Bạn đã dùng hết lượt thẻ nhớ miễn phí hôm nay",`Gói Free có ${FREE.flash} thẻ mỗi ngày. Pro dùng flashcards không giới hạn.`],
 mode:["Dạng bài này thuộc gói Pro","Gói Free có dạng bài cơ bản (nhìn chữ chọn nghĩa). Pro mở thêm nghe, điền pinyin, sắp xếp câu và các dạng nâng cao."],
 pro:["Tính năng này thuộc gói Pro","Nâng cấp Pro để dùng."],year:["Tính năng này thuộc gói Pro năm","Gói Pro năm có thêm tài liệu học tập bổ sung và lộ trình học theo mục tiêu."]};
function lockCard(k){const m=LOCKMSG[k]||LOCKMSG.pro;return `<div class="card lock"><div style="font-size:40px">🔒</div><h3>${m[0]}</h3><p>${m[1]}</p><p><button class="btn-l p" onclick="goPlans()">Xem gói Pro</button></p>${premForm()}</div>`}
function showLock(k){const d=document.createElement("div");d.className="modal";d.onclick=e=>{if(e.target===d)d.remove()};d.innerHTML=`<div class="mbox" style="text-align:center"><button class="ibtn mx" onclick="this.closest('.modal').remove()">✕</button>${lockCard(k).replace('class="card lock"','')}</div>`;document.body.appendChild(d);track('lock_view',{k})}
const premForm=()=>typeof signedIn==="function"&&signedIn()?"":`<p style="margin:10px 0"><button class="btn-l p" onclick="showLogin()">Đăng nhập</button></p>`;
