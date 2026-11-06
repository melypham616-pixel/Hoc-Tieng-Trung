
/* ============ GÓI FREE / PRO (khóa mềm phía trình duyệt) ============ */
const FREE={lessons:{"1":5,"2":2,"3":2,"4":2,"5":2,"6":2},tfLv:["A1"],quiz:15,flash:15};   // số bài miễn phí mỗi quyển; số câu quiz / thẻ nhớ mỗi ngày
const PREM_SECRET="htt-doi-secret-nay";   // ĐỔI chuỗi này (dùng chung với tools/premcode.js) trước khi bán
const premCode=(e,pl)=>pl.toUpperCase()+cyrb53("p|"+PREM_SECRET+"|"+pl+"|"+e.toLowerCase().trim()).toString(36).toUpperCase().slice(0,7);
function premInfo(){const p=prog.prem;if(!p||!p.email||!p.code)return null;const pl=p.code[0].toLowerCase();return (pl==="m"||pl==="y")&&p.code===premCode(p.email,pl)?pl:null}
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
function lockCard(k){const m=LOCKMSG[k]||LOCKMSG.pro;return `<div class="card lock"><div style="font-size:40px">🔒</div><h3>${m[0]}</h3><p>${m[1]}</p><p><button class="btn-l p" onclick="goPlans()">Xem gói Pro</button></p><details><summary>Tôi đã có mã kích hoạt</summary>${premForm()}</details></div>`}
function showLock(k){const d=document.createElement("div");d.className="modal";d.onclick=e=>{if(e.target===d)d.remove()};d.innerHTML=`<div class="mbox" style="text-align:center"><button class="ibtn mx" onclick="this.closest('.modal').remove()">✕</button>${lockCard(k).replace('class="card lock"','')}</div>`;document.body.appendChild(d);track('lock_view',{k})}
function premActivate(ev){
  ev.preventDefault();const f=ev.target,em=f.email.value.trim(),cd=f.code.value.trim().toUpperCase(),msg=f.querySelector(".su-msg");
  const pl=cd[0]&&cd[0].toLowerCase();
  if((pl==="m"||pl==="y")&&cd===premCode(em,pl)){prog.prem={email:em,code:cd};save();track('premium_activate',{plan:pl});msg.style.color="var(--ok)";msg.textContent="✅ Đã kích hoạt gói Pro "+(pl==="y"?"năm":"tháng")+" trên thiết bị này!";setTimeout(()=>location.reload(),900)}
  else{msg.style.color="var(--bad)";msg.textContent="Email hoặc mã chưa đúng. Kiểm tra lại mã bạn nhận được nhé."}
}
const premForm=()=>`<form onsubmit="premActivate(event)" class="fb-form" style="max-width:420px;text-align:left"><label>Email đã dùng khi mua<input type="email" name="email" required value="${(prog.prem&&prog.prem.email)||""}"></label><label>Mã kích hoạt<input type="text" name="code" required placeholder="VD: M7K2M9XQ" style="text-transform:uppercase"></label><button class="btn-l p">Kích hoạt</button><div class="su-msg"></div></form>`;
