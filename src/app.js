
/* ============ TẠO DỮ LIỆU TỪ CÁC BÀI ============ */
const rows=s=>(s||"").split("\n").map(x=>x.trim()).filter(Boolean);
const VOCAB=[],GRAMMAR=[],TRANS=[],ORDER=[];   // VOCAB:[hán,pinyin,nghĩa,bài]  TRANS:[vi,hán,pinyin,bài]  ORDER:[vi,[từ…],bài]
(()=>{const seen=new Set();
  LESSONS.forEach(L=>{
    rows(L.v).forEach(r=>{const [z,p,v]=r.split("|");if(!seen.has(z)){seen.add(z);VOCAB.push([z,p,v,L.n])}});
    (L.g||[]).forEach(g=>GRAMMAR.push({t:g[0],f:g[1],d:g[2],ex:rows(g[3]).map(r=>r.split("|")),l:L.n}));
    rows(L.s).forEach(r=>{const [vi,zh,py]=r.split("|");TRANS.push([vi,zh,py,L.n])});
    rows(L.o).forEach(r=>{const [vi,t]=r.split("|");ORDER.push([vi,t.split(" "),L.n])});
  });})();
const LES=Object.fromEntries(LESSONS.map(L=>[L.n,L]));
const tLenOf=t=>{const n=t[1].replace(/[^\u4e00-\u9fff]/g,"").length;return n<=5?"short":n<=22?"long":"para"};

/* ---- Sinh thêm câu luyện phản xạ bằng cách đổi từ trong mẫu câu ---- */
(function(){
  const seen=new Set(TRANS.map(t=>t[1]));
  const add=(vi,zh,py,l)=>{if(!seen.has(zh)){seen.add(zh);TRANS.push([vi,zh,py,l])}};
  const cap=s=>s[0].toUpperCase()+s.slice(1);
  const D=["一","二","三","四","五","六","七","八","九"],DP=["yī","èr","sān","sì","wǔ","liù","qī","bā","jiǔ"];
  const nz=n=>n<10?D[n-1]:n===10?"十":n<20?"十"+D[n-11]:D[(n/10|0)-1]+"十"+(n%10?D[n%10-1]:"");
  const np=n=>n<10?DP[n-1]:n===10?"shí":n<20?"shí"+(n===12?"'":"")+DP[n-11]:DP[(n/10|0)-1]+"shí"+(n%10===2?"'":"")+(n%10?DP[n%10-1]:"");
  const VN=["một","hai","ba","bốn","năm","sáu","bảy","tám","chín","mười","mười một","mười hai"];
  const wp=p=>"xīngqí"+(/^[aeiouāáǎàēéěèīíǐìōóǒòūúǔù]/.test(p)?"'":"")+p;
  // Bài 1: quốc tịch, đồ uống
  [["Mỹ","美國","Měiguó"],["Nhật Bản","日本","Rìběn"],["Đài Loan","臺灣","Táiwān"],["Việt Nam","越南","Yuènán"],["Trung Quốc","中國","Zhōngguó"]].forEach(([v,z,p])=>{
    add(`Tôi là người ${v}.`,`我是${z}人。`,`Wǒ shì ${p} rén.`,1);
    add(`Anh ấy không phải người ${v}.`,`他不是${z}人。`,`Tā bú shì ${p} rén.`,1);
    add(`Bạn có phải người ${v} không?`,`你是不是${z}人？`,`Nǐ shì bu shì ${p} rén?`,1);
    add(`Cô ấy là người ${v}, còn bạn?`,`她是${z}人，你呢？`,`Tā shì ${p} rén, nǐ ne?`,1);
  });
  [["trà","茶","chá"],["cà phê","咖啡","kāfēi"],["trà ô long","烏龍茶","wūlóngchá"]].forEach(([v,z,p])=>{
    add(`Bạn có uống ${v} không?`,`你喝不喝${z}？`,`Nǐ hē bu hē ${p}?`,1);
    add(`Tôi rất thích uống ${v}.`,`我很喜歡喝${z}。`,`Wǒ hěn xǐhuān hē ${p}.`,1);
    add(`Tôi không uống ${v}.`,`我不喝${z}。`,`Wǒ bù hē ${p}.`,1);
  });
  // Bài 2: gia đình
  [["bố","爸爸","bàba"],["mẹ","媽媽","māma"],["anh trai","哥哥","gēge"],["chị gái","姐姐","jiějie"],["em trai","弟弟","dìdi"],["em gái","妹妹","mèimei"]].forEach(([v,z,p],i)=>{
    add(`${cap(v)} tôi là giáo viên.`,`我${z}是老師。`,`Wǒ ${p} shì lǎoshī.`,2);
    add(`${cap(v)} tôi rất thích đọc sách.`,`我${z}很喜歡看書。`,`Wǒ ${p} hěn xǐhuān kàn shū.`,2);
    if(i>=2){
      [["một","一","yí"],["hai","兩","liǎng"],["ba","三","sān"]].forEach(([nv,n2,np2])=>add(`Tôi có ${nv} ${v}.`,`我有${n2}個${z}。`,`Wǒ yǒu ${np2} ge ${p}.`,2));
      add(`Tôi không có ${v}.`,`我沒有${z}。`,`Wǒ méiyǒu ${p}.`,2);
    }
  });
  for(let n=2;n<=8;n++)add(`Nhà tôi có ${VN[n-1]} người.`,`我家有${n===2?"兩":nz(n)}個人。`,`Wǒ jiā yǒu ${n===2?"liǎng":np(n)} ge rén.`,2);
  // Bài 3: hoạt động cuối tuần
  [["chơi bóng rổ","打籃球","dǎ lánqiú"],["đánh quần vợt","打網球","dǎ wǎngqiú"],["chơi bóng chày","打棒球","dǎ bàngqiú"],["đá bóng","踢足球","tī zúqiú"],["bơi","游泳","yóuyǒng"],["xem phim","看電影","kàn diànyǐng"],["nghe nhạc","聽音樂","tīng yīnyuè"]].forEach(([v,z,p])=>{
    add(`Cuối tuần tôi thường ${v}.`,`週末我常${z}。`,`Zhōumò wǒ cháng ${p}.`,3);
    add(`Tôi muốn ${v}.`,`我想${z}。`,`Wǒ xiǎng ${p}.`,3);
    add(`Bạn thích ${v} không?`,`你喜歡${z}嗎？`,`Nǐ xǐhuān ${p} ma?`,3);
    add(`Chúng ta ${v} nhé!`,`我們${z}吧！`,`Wǒmen ${p} ba!`,3);
  });
  // Bài 4: mua sắm
  [["bánh bao","包子","bāozi","個","ge","cái"],["cà phê","咖啡","kāfēi","杯","bēi","ly"],["trà ô long","烏龍茶","wūlóngchá","杯","bēi","ly"],["điện thoại","手機","shǒujī","支","zhī","chiếc"]].forEach(([v,z,p,lt,ltp,ltv])=>{
    [["một","一",ltp==="ge"?"yí":"yì"],["hai","兩","liǎng"],["ba","三","sān"]].forEach(([nv,n2,np2])=>add(`Tôi muốn mua ${nv} ${ltv} ${v}.`,`我要買${n2}${lt}${z}。`,`Wǒ yào mǎi ${np2} ${ltp} ${p}.`,4));
    add(`Một ${ltv} ${v} bao nhiêu tiền?`,`一${lt}${z}多少錢？`,`${ltp==="ge"?"Yí":"Yì"} ${ltp} ${p} duōshǎo qián?`,4);
  });
  [["hai mươi","二十","èrshí"],["ba mươi lăm","三十五","sānshíwǔ"],["năm mươi tám","五十八","wǔshíbā"],["một trăm","一百","yìbǎi"],["một trăm năm mươi","一百五十","yìbǎi wǔshí"],["hai trăm","兩百","liǎngbǎi"],["một nghìn","一千","yìqiān"]].forEach(([v,z,p])=>{
    add(`Cái này ${v} tệ.`,`這個${z}塊。`,`Zhège ${p} kuài.`,4);
    add(`Tổng cộng ${v} tệ.`,`一共${z}塊。`,`Yígòng ${p} kuài.`,4);
  });
  // Bài 5: biết làm gì (會), món ăn
  [["nấu cơm","做飯","zuò fàn"],["đánh quần vợt","打網球","dǎ wǎngqiú"],["nói tiếng Trung","說中文","shuō Zhōngwén"],["bơi","游泳","yóuyǒng"],["làm đồ tráng miệng","做甜點","zuò tiándiǎn"]].forEach(([v,z,p])=>{
    add(`Tôi biết ${v}.`,`我會${z}。`,`Wǒ huì ${p}.`,5);
    add(`Tôi không biết ${v}.`,`我不會${z}。`,`Wǒ bú huì ${p}.`,5);
    add(`Bạn biết ${v} không?`,`你會${z}嗎？`,`Nǐ huì ${p} ma?`,5);
  });
  [["mì bò","牛肉麵","niúròu miàn"],["đậu phụ thối","臭豆腐","chòudòufu"],["đồ tráng miệng","甜點","tiándiǎn"]].forEach(([v,z,p])=>{
    add(`${cap(v)} thật ngon!`,`${z}真好吃！`,`${cap(p)} zhēn hǎochī!`,5);
    add(`${cap(v)} hơi cay.`,`${z}有一點辣。`,`${cap(p)} yǒu yìdiǎn là.`,5);
  });
  // Bài 6: vị trí
  [["thư viện","圖書館","túshūguǎn"],["ký túc xá","宿舍","sùshè"],["nhà hàng","餐廳","cāntīng"],["cửa hàng","商店","shāngdiàn"],["quán cà phê","咖啡店","kāfēidiàn"],["hồ bơi","游泳池","yóuyǒngchí"]].forEach(([v,z,p])=>{
    [["phía trước","前面","qiánmiàn"],["phía sau","後面","hòumiàn"],["bên cạnh","旁邊","pángbiān"]].forEach(([r,rz,rp])=>
      add(`${cap(v)} ở ${r} trường học.`,`${z}在學校${rz}。`,`${cap(p)} zài xuéxiào ${rp}.`,6));
    add(`${cap(v)} ở đâu?`,`${z}在哪裡？`,`${cap(p)} zài nǎlǐ?`,6);
    add(`Gần đây có ${v} không?`,`這附近有沒有${z}？`,`Zhè fùjìn yǒu méi yǒu ${p}?`,6);
  });
  // Bài 7: giờ, thứ
  for(let h=1;h<=12;h++){
    const z=h===2?"兩":nz(h),p=h===2?"liǎng":np(h);
    add(`Bây giờ là ${VN[h-1]} giờ.`,`現在${z}點。`,`Xiànzài ${p} diǎn.`,7);
    add(`Bây giờ là ${VN[h-1]} giờ rưỡi.`,`現在${z}點半。`,`Xiànzài ${p} diǎn bàn.`,7);
    add(`Tôi ${VN[h-1]} giờ vào học.`,`我${z}點上課。`,`Wǒ ${p} diǎn shàng kè.`,7);
  }
  [["thứ Hai","一","yī"],["thứ Ba","二","èr"],["thứ Tư","三","sān"],["thứ Năm","四","sì"],["thứ Sáu","五","wǔ"],["thứ Bảy","六","liù"],["Chủ nhật","天","tiān"]].forEach(([v,z,p])=>{
    add(`Hôm nay là ${v}.`,`今天星期${z}。`,`Jīntiān ${wp(p)}.`,7);
    add(`Ngày mai là ${v}.`,`明天星期${z}。`,`Míngtiān ${wp(p)}.`,7);
    add(`${cap(v)} tôi có việc.`,`我星期${z}有事。`,`Wǒ ${wp(p)} yǒu shì.`,7);
  });
  // Bài 8: phương tiện
  const TRN=[["xe buýt","公車","gōngchē"],["tàu cao tốc","高鐵","gāotiě"],["tàu hỏa","火車","huǒchē"],["tàu điện ngầm","捷運","jiéyùn"],["taxi","計程車","jìchéngchē"]];
  TRN.forEach(([v,z,p],ti)=>[["Đài Nam","臺南","Táinán"],["trường học","學校","xuéxiào"],["Cố Cung","故宮","Gùgōng"],["nhà bạn","你家","nǐ jiā"]].forEach(([dv,dz,dp])=>{
    add(`Tôi đi ${v} đến ${dv}.`,`我坐${z}去${dz}。`,`Wǒ zuò ${p} qù ${dp}.`,8);
    if(ti<3)add(`Bạn đi ${v} đến ${dv} à?`,`你坐${z}去${dz}嗎？`,`Nǐ zuò ${p} qù ${dp} ma?`,8);
  }));
  [["Tàu hỏa rẻ hơn tàu cao tốc.","火車比高鐵便宜。","Huǒchē bǐ gāotiě piányí."],["Taxi đắt hơn xe buýt.","計程車比公車貴。","Jìchéngchē bǐ gōngchē guì."],["Tàu điện ngầm nhanh hơn xe buýt.","捷運比公車快。","Jiéyùn bǐ gōngchē kuài."],["Xe buýt chậm hơn tàu điện ngầm.","公車比捷運慢。","Gōngchē bǐ jiéyùn màn."]].forEach(a=>add(a[0],a[1],a[2],8));
  // Bài 9: kế hoạch nghỉ lễ
  [["Hoa Liên","花蓮","Huālián"],["Miêu Không","貓空","Māokōng"],["Đài Nam","臺南","Táinán"],["chợ đêm","夜市","yèshì"]].forEach(([v,z,p])=>{
    add(`Tôi dự định đi ${v} chơi.`,`我打算去${z}玩。`,`Wǒ dǎsuàn qù ${p} wán.`,9);
    add(`Nếu rảnh, tôi sẽ đi ${v}.`,`要是有空，我就去${z}。`,`Yàoshi yǒu kòng, wǒ jiù qù ${p}.`,9);
    add(`Bạn muốn đi ${v} không?`,`你想不想去${z}？`,`Nǐ xiǎng bu xiǎng qù ${p}?`,9);
  });
  for(let n=2;n<=7;n++)add(`Chúng tôi nghỉ ${VN[n-1]} ngày.`,`我們放${n===2?"兩":nz(n)}天的假。`,`Wǒmen fàng ${n===2?"liǎng":np(n)} tiān de jià.`,9);
  // Bài 10: trái cây
  [["dưa hấu","西瓜","xīguā"],["xoài","芒果","mángguǒ"],["chuối","香蕉","xiāngjiāo"],["táo","蘋果","píngguǒ"],["nho","葡萄","pútáo"]].forEach(([v,z,p])=>{
    add(`Tôi thích ăn ${v}.`,`我喜歡吃${z}。`,`Wǒ xǐhuān chī ${p}.`,10);
    add(`${cap(v)} rất ngọt.`,`${z}很甜。`,`${cap(p)} hěn tián.`,10);
    add(`Trước đây tôi không thích ăn ${v}, bây giờ thích rồi.`,`我以前不喜歡吃${z}，現在喜歡了。`,`Wǒ yǐqián bù xǐhuān chī ${p}, xiànzài xǐhuān le.`,10);
    add(`${cap(v)} này bao nhiêu tiền?`,`這個${z}多少錢？`,`Zhège ${p} duōshǎo qián?`,10);
  });
  // Bài 11: thuê nhà
  [["năm nghìn","五千","wǔ qiān"],["tám nghìn","八千","bā qiān"],["một vạn","一萬","yí wàn"]].forEach(([v,z,p])=>add(`Tiền thuê nhà một tháng ${v} tệ.`,`房租一個月${z}塊。`,`Fángzū yí ge yuè ${p} kuài.`,11));
  [["rẻ","便宜","piányí"],["đắt","貴","guì"],["sạch","乾淨","gānjìng"],["yên tĩnh","安靜","ānjìng"],["ồn","吵","chǎo"]].forEach(([v,z,p])=>{
    add(`Căn phòng này rất ${v}.`,`這個房間很${z}。`,`Zhège fángjiān hěn ${p}.`,11);
    add(`Căn phòng này không ${v}.`,`這個房間不${z}。`,`Zhège fángjiān bù ${p}.`,11);
  });
  // Bài 12: thời lượng
  [["một năm","一年","yì nián"],["hai tháng","兩個月","liǎng ge yuè"],["ba tuần","三個星期","sān ge xīngqí"],["bốn ngày","四天","sì tiān"],["năm tiếng","五個小時","wǔ ge xiǎoshí"]].forEach(([v,z,p])=>{
    add(`Tôi đã học tiếng Trung ${v}.`,`我學了${z}的中文。`,`Wǒ xué le ${p} de Zhōngwén.`,12);
    add(`Anh ấy ở Đài Loan ${v} rồi.`,`他在臺灣住了${z}了。`,`Tā zài Táiwān zhù le ${p} le.`,12);
  });
  // Bài 13: sinh nhật, tuổi
  [[1,15],[3,8],[5,20],[7,7],[9,30],[10,15],[12,25],[2,14]].forEach(([m,d])=>
    add(`Sinh nhật tôi là ngày ${d} tháng ${m}.`,`我的生日是${nz(m)}月${nz(d)}號。`,`Wǒ de shēngrì shì ${np(m)} yuè ${np(d)} hào.`,13));
  [18,20,22,25,30].forEach(n=>{
    add(`Tôi ${n} tuổi.`,`我${nz(n)}歲。`,`Wǒ ${np(n)} suì.`,13);
    add(`Anh ấy năm nay ${n} tuổi.`,`他今年${nz(n)}歲。`,`Tā jīnnián ${np(n)} suì.`,13);
  });
  // Bài 14: thời tiết
  [["nóng","熱","rè"],["lạnh","冷","lěng"],["mát","涼","liáng"]].forEach(([v,z,p])=>{
    add(`Hôm nay trời rất ${v}.`,`今天天氣很${z}。`,`Jīntiān tiānqì hěn ${p}.`,14);
    add(`Trời ${v} thế này!`,`天氣這麼${z}！`,`Tiānqì zhème ${p}!`,14);
    add(`Ngày mai trời sẽ ${v}.`,`明天會${z}。`,`Míngtiān huì ${p}.`,14);
    add(`Hôm qua trời không ${v}.`,`昨天天氣不${z}。`,`Zuótiān tiānqì bù ${p}.`,14);
  });
  [["mùa xuân","春天","chūntiān","ấm áp","暖和","nuǎnhuo"],["mùa hè","夏天","xiàtiān","nóng","熱","rè"],["mùa thu","秋天","qiūtiān","mát","涼","liáng"],["mùa đông","冬天","dōngtiān","lạnh","冷","lěng"]].forEach(([v,z,p,av,az,ap])=>{
    add(`${cap(v)} trời ${av}.`,`${z}很${az}。`,`${cap(p)} hěn ${ap}.`,14);
    add(`Tôi thích ${v}.`,`我喜歡${z}。`,`Wǒ xǐhuān ${p}.`,14);
  });
  // Bài 15: sức khỏe
  [["đầu","頭","tóu"],["bụng","肚子","dùzi"],["họng","喉嚨","hóulóng"]].forEach(([v,z,p])=>{
    add(`Tôi đau ${v}.`,`我${z}痛。`,`Wǒ ${p} tòng.`,15);
    add(`Bạn đau ${v} à?`,`你${z}痛嗎？`,`Nǐ ${p} tòng ma?`,15);
  });
  [["cảm","感冒","gǎnmào"],["sốt","發燒","fā shāo"],["ho","咳嗽","késou"]].forEach(([v,z,p])=>{
    add(`Tôi bị ${v} rồi.`,`我${z}了。`,`Wǒ ${p} le.`,15);
    add(`Anh ấy bị ${v} rồi.`,`他${z}了。`,`Tā ${p} le.`,15);
  });
  [["nghỉ ngơi nhiều","多休息","duō xiūxí"],["uống nhiều nước","多喝水","duō hē shuǐ"],["uống thuốc","吃藥","chī yào"],["đi khám bác sĩ","看醫生","kàn yīshēng"],["đi ngủ sớm","早點睡覺","zǎodiǎn shuì jiào"]].forEach(([v,z,p])=>
    add(`Bạn nên ${v}.`,`你應該${z}。`,`Nǐ yīnggāi ${p}.`,15));
})();

/* ============ TIỆN ÍCH / GIỌNG ĐỌC ============ */
window.addEventListener("error",e=>{try{toast("Lỗi trong trang: "+e.message)}catch(x){}});
const $=s=>document.querySelector(s);
const sh=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
const esc=s=>s.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
let voices=[];
const VKEY="tocfl1voice";
const getV=()=>{try{return localStorage.getItem(VKEY)||""}catch(e){return ""}};
function loadVoices(){
  // giữ mọi giọng tiếng Trung (Đài Loan, đại lục, Hồng Kông…) mà máy có
  voices=speechSynthesis.getVoices().filter(v=>/^zh|cmn|yue/i.test(v.lang)||/chinese|mandarin|cantonese|國語|普通话|粵/i.test(v.name));
  const sel=$("#voiceSel");if(!sel)return;
  const cur=getV();
  sel.innerHTML=`<option value="">🎧 Giọng thu sẵn (khuyên dùng)</option>`+voices.map(v=>`<option value="${esc(v.name)}">${esc(v.name)} · ${v.lang}</option>`).join("");
  sel.value=voices.some(v=>v.name===cur)?cur:"";
}
function pick(){
  const cur=getV();
  return voices.find(v=>v.name===cur)||voices.find(v=>v.name==="Meijia")||voices.find(v=>/zh[-_]TW/i.test(v.lang))||voices.find(v=>/zh[-_]CN/i.test(v.lang))||voices[0];
}
if("speechSynthesis" in window){speechSynthesis.onvoiceschanged=loadVoices;loadVoices();}else{$("#voiceSel").innerHTML=`<option value="">🎧 Giọng thu sẵn (khuyên dùng)</option>`}
let sTok=0,keepU=null;
function toast(m){
  let d=$("#toast");
  if(!d){d=document.createElement("div");d.id="toast";d.style.cssText="position:fixed;left:50%;bottom:20px;transform:translateX(-50%);background:#333;color:#fff;padding:10px 16px;border-radius:10px;z-index:9;max-width:90%;font-size:14px";document.body.appendChild(d)}
  d.textContent=m;d.style.display="block";clearTimeout(d._t);d._t=setTimeout(()=>d.style.display="none",6000);
}
// danh sách giọng thử lần lượt: giọng đã chọn → giọng Đài Loan khác → giọng Trung còn lại
function voiceList(){const p=pick();return [p,...voices.filter(v=>v!==p&&/zh[-_]TW/i.test(v.lang)),...voices.filter(v=>v!==p&&!/zh[-_]TW/i.test(v.lang))].filter(Boolean)}
function say(t,o){
  if(!("speechSynthesis" in window)){toast("Trình duyệt này không có giọng đọc tích hợp.");return}
  const list=voiceList(),k=o.k||0,v=list[k],u=new SpeechSynthesisUtterance(t);
  u.lang=v?v.lang:"zh-TW";if(v)u.voice=v;
  u.rate=o.rate||parseFloat($("#rate").value);u.pitch=o.pitch||1;u.volume=1;
  let started=false,failed=false;
  const fallback=why=>{
    if(failed)return;failed=true;
    if(k+1<list.length){speechSynthesis.cancel();setTimeout(()=>say(t,{...o,k:k+1}),120)}
    else toast("Không phát được âm thanh ("+why+"). Kiểm tra âm lượng máy / tab có bị tắt tiếng không, hoặc thử mở web bằng Safari.");
  };
  u.onstart=()=>{started=true};
  u.onend=()=>{started=true;if(o.onend&&!failed)o.onend()};
  u.onerror=e=>{if(e.error==="canceled"||e.error==="interrupted")return;fallback(e.error)};
  keepU=u;                                   // giữ tham chiếu để trình duyệt không thu hồi giữa chừng
  if(speechSynthesis.paused)speechSynthesis.resume();
  speechSynthesis.speak(u);
  setTimeout(()=>{if(!started&&!failed&&keepU===u)fallback("giọng không phản hồi: "+(v?v.name:"mặc định"))},2500);   // giọng bị treo → đổi giọng khác
}
/* ---- Giọng thu sẵn (audio/*.m4a): chạy được trên mọi trình duyệt, kể cả Chrome không có giọng đọc ---- */
const cyrb53=(str,seed=0)=>{let h1=0xdeadbeef^seed,h2=0x41c6ce57^seed;for(let i=0,ch;i<str.length;i++){ch=str.charCodeAt(i);h1=Math.imul(h1^ch,2654435761);h2=Math.imul(h2^ch,1597334677)}
  h1=Math.imul(h1^(h1>>>16),2246822507);h1^=Math.imul(h2^(h2>>>13),3266489909);h2=Math.imul(h2^(h2>>>16),2246822507);h2^=Math.imul(h1^(h1>>>13),3266489909);return 4294967296*(2097151&h2)+(h1>>>0)};
const clipUrl=(t,tag)=>"audio/"+cyrb53((tag||"m")+"|"+t).toString(36)+".m4a";   // tag: m = Meijia, e = Eddy (người nói thứ hai)
const useClips=()=>getV()==="";
let curA=null;
function playClip(t,o){        // o:{tag,rate,onend,onfail}
  const a=new Audio(clipUrl(t,o.tag));curA=a;
  a.playbackRate=Math.max(0.5,o.rate||parseFloat($("#rate").value));
  let done=false;
  const fail=()=>{if(done||curA!==a)return;done=true;if(o.onfail)o.onfail()};
  a.onerror=fail;
  a.onended=()=>{if(done||curA!==a)return;done=true;if(o.onend)o.onend()};
  const p=a.play();
  if(p&&p.catch)p.catch(e=>{if(e&&e.name==="NotAllowedError")toast("Trình duyệt chặn âm thanh, hãy bấm lại nút nghe.");fail()});
}
function speakTTS(t,rate){
  if(!("speechSynthesis" in window)){toast("Trình duyệt này không có giọng đọc tích hợp.");return}
  const busy=speechSynthesis.speaking||speechSynthesis.pending;
  if(busy)speechSynthesis.cancel();const tk=++sTok;
  setTimeout(()=>{if(tk===sTok)say(t,{rate})},busy?120:0);   // chờ một chút sau cancel(): Chrome hay nuốt câu đọc nếu speak() ngay lập tức
}
function speak(t,rate,tag){
  stopSpeak();const tk=++sTok;
  if(useClips()){playClip(t,{tag,rate,onfail:()=>{if(tk===sTok)speakTTS(t,rate)}});return}   // thiếu file thu sẵn → dùng giọng của trình duyệt
  speakTTS(t,rate);
}
const spkBtn=(t,tag)=>`<button class="b spk" title="Nghe" onclick="speak('${t.replace(/'/g,"\\'")}',0,'${tag||"m"}')">🔊</button>`;
const stripTone=s=>s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/ü/g,"u").toLowerCase().replace(/[^a-z]/g,"");
// chấp nhận cả chữ giản thể: đổi giản → phồn trước khi so sánh
const S2T={};("师師学學谢謝对對关關系係吗嗎么麼谁誰里裡们們个個几幾点點号號说說买買卖賣钱錢块塊贵貴面麵会會来來饭飯国國湾灣这這书書习習欢歡两兩现現没沒见見请請时時间間问問题題话話语語华華开開电電听聽认認读讀长長爱愛过過还還样樣乐樂鸡雞个個东東药藥医醫医醫头頭热熱烧燒咳咳车車铁鐵机機场場费費实實进進问問远遠边邊馆館园園术術运運动動视視节節岁歲预預报報风風景景")
.split("").forEach((c,i,a)=>{if(i%2===0)S2T[c]=a[i+1]});
const normZh=s=>[...s.replace(/[\s，。？！、：；,.?!:;]/g,"")].map(c=>S2T[c]||c).join("");

let prog={};try{prog=JSON.parse(localStorage.getItem("tocfl1")||"{}")}catch(e){}
prog.known=prog.known||{};prog.score=prog.score||{right:0,total:0};
const save=()=>{try{localStorage.setItem("tocfl1",JSON.stringify(prog))}catch(e){}updateHero()};
function mark(ok){prog.score.total++;if(ok)prog.score.right++;save()}

/* ============ PHẠM VI BÀI ============ */
const NL=LESSONS.length;
let LESSON=prog.lesson;if(!/^(all|\d+-\d+)$/.test(LESSON||""))LESSON="all";
const inL=n=>{if(LESSON==="all")return true;const [a,b]=LESSON.split("-").map(Number);return n>=a&&n<=b};
const pool=()=>VOCAB.filter(v=>inL(v[3]));
(function buildSelect(){
  const g=[["all",`Tất cả ${NL} bài`],["1-5","Bài 1–5"],["6-10","Bài 6–10"],["11-15","Bài 11–15"]];
  $("#les").innerHTML=g.map(([k,l])=>`<option value="${k}">${l}</option>`).join("")+
    LESSONS.map(L=>`<option value="${L.n}-${L.n}">Bài ${L.n} · ${L.zh.replace(/[？！]/g,"")}</option>`).join("");
  $("#lbar").innerHTML=`<button class="lchip" data-v="all">Tất cả<small>${NL} bài</small></button>`+
    LESSONS.map(L=>`<button class="lchip" data-v="${L.n}-${L.n}" title="${esc(L.vi)}">Bài ${L.n}<small>${L.zh.replace(/[？！]/g,"")}</small></button>`).join("");
  $("#lbar").onclick=e=>{const b=e.target.closest(".lchip");if(b)setLesson(b.dataset.v)};
})();
function setLesson(v){
  LESSON=prog.lesson=v;qMode=null;tIdx=0;$("#les").value=v;syncBar();save();render();
}
function syncBar(){
  document.querySelectorAll(".lchip").forEach(b=>b.classList.toggle("on",b.dataset.v===LESSON));
  const on=document.querySelector(".lchip.on");if(on)on.scrollIntoView({inline:"center",block:"nearest",behavior:"smooth"});
}
function updateHero(){
  const k=Object.keys(prog.known).length,s=prog.score;
  $("#stK").textContent=k;$("#stKbar").style.width=(k/VOCAB.length*100)+"%";
  $("#stS").textContent=s.total?Math.round(s.right/s.total*100)+"%":"–";$("#stSbar").style.width=(s.total?s.right/s.total*100:0)+"%";
  $("#stV").textContent=VOCAB.length;
}

/* ============ ĐIỀU HƯỚNG ============ */
const TABS=[["vocab","📖 Từ vựng"],["flash","🃏 Thẻ nhớ"],["grammar","📐 Ngữ pháp"],["read","💬 Đọc"],["quiz","✍️ Bài tập"],["trans","🔤 Tập dịch"]];
let tab="vocab";
$("#nav").innerHTML=TABS.map(([k,l])=>{const i=l.indexOf(" ");return `<button data-k="${k}"><span class="ic">${l.slice(0,i)}</span><span class="lb">${l.slice(i+1)}</span></button>`}).join("");
$("#nav").onclick=e=>{const b=e.target.closest("button");if(b&&b.dataset.k){tab=b.dataset.k;render();window.scrollTo({top:0})}};
function render(){
  document.querySelectorAll("#nav button").forEach(b=>b.classList.toggle("on",b.dataset.k===tab));
  stopSpeak();
  ({vocab:vocabView,flash:flashView,grammar:grammarView,read:readView,quiz:quizView,trans:transView})[tab]();
}
const lesTag=n=>`Bài ${n} · ${LES[n].zh}`;
const lesHead=n=>`Bài ${n} · ${annotate(LES[n].zh).html}`;

/* ============ TỪ VỰNG ============ */
let vLes="all",vQ="";
function vocabView(){
  const P=pool(),ls=[...new Set(P.map(v=>v[3]))];
  if(vLes!=="all"&&!ls.includes(vLes))vLes="all";
  $("#app").innerHTML=`<div class="chips"><span class="chip ${vLes==="all"?"on":""}" data-t="all">Tất cả</span>${ls.map(n=>`<span class="chip ${n===vLes?"on":""}" data-t="${n}">Bài ${n}</span>`).join("")}</div>
  <input type="search" id="q" placeholder="Tìm Hán tự, pinyin hoặc tiếng Việt…" value="${esc(vQ)}">
  <div class="stat" style="margin:8px 0">Đã thuộc: ${P.filter(v=>prog.known[v[0]]).length}/${P.length} từ trong phạm vi đang chọn</div>
  <div id="vlist"></div>`;
  document.querySelector(".chips").onclick=e=>{const t=e.target.dataset.t;if(t){vLes=t==="all"?"all":+t;vocabView()}};
  $("#q").oninput=e=>{vQ=e.target.value;list()};
  list();
}
function list(){
  const q=vQ.trim().toLowerCase(),sq=stripTone(q);
  const items=pool().filter(v=>(vLes==="all"||v[3]===vLes)&&(!q||v.join(" ").toLowerCase().includes(q)||(sq&&stripTone(v[1]).includes(sq))));
  let html="",last=0;
  items.forEach(v=>{
    if(v[3]!==last){last=v[3];html+=`<div class="lh">${lesHead(last)} <span class="vi">— ${LES[last].vi}</span></div>`}
    html+=`<div class="vl"><div>${spkBtn(v[0])}</div><div><span class="zh">${v[0]}</span> <span class="py">${v[1]}</span><div class="vi">${v[2]}</div></div>
    <label class="stat"><input type="checkbox" ${prog.known[v[0]]?"checked":""} onchange="toggleKnown('${v[0]}',this.checked)"> thuộc</label></div>`;
  });
  $("#vlist").innerHTML=html?`<div class="card">${html}</div>`:"<div class='vi'>Không tìm thấy.</div>";
}
function toggleKnown(z,c){if(c)prog.known[z]=1;else delete prog.known[z];save()}

/* ============ THẺ NHỚ ============ */
let fDeck=[],fi=0,fBack=false,fOnlyNew=false;
function flashView(){fDeck=sh(pool().filter(v=>!fOnlyNew||!prog.known[v[0]]));fi=0;fBack=false;flashDraw()}
function flashDraw(){
  if(!fDeck.length){$("#app").innerHTML=`<div class="card">🎉 Bạn đã thuộc hết! <button class="b" onclick="fOnlyNew=false;flashView()">Ôn lại tất cả</button></div>`;return}
  const v=fDeck[fi];
  $("#app").innerHTML=`<div class="row" style="margin-bottom:10px;justify-content:space-between"><label><input type="checkbox" ${fOnlyNew?"checked":""} onchange="fOnlyNew=this.checked;flashView()"> Chỉ từ chưa thuộc</label><span class="stat">${fi+1}/${fDeck.length} · Bài ${v[3]}</span></div>
  <div class="card flash" onclick="fBack=!fBack;flashDraw()">
   ${fBack?`<div class="zh" style="font-size:36px">${v[0]}</div><div class="py">${v[1]}</div><div style="font-size:22px">${v[2]}</div>`:`<div class="zh">${v[0]}</div><div class="vi">(chạm để lật)</div>`}
  </div>
  <div class="row" style="justify-content:center">
   <button class="b" onclick="speak('${v[0]}')">🔊 Nghe</button>
   <button class="b" onclick="speak('${v[0]}',0.4)">🐢 Chậm</button>
   <button class="b" onclick="fAns(false)">😕 Chưa thuộc</button>
   <button class="b p" onclick="fAns(true)">✅ Đã thuộc</button></div>`;
  if(!fBack)speak(v[0]);
}
function fAns(ok){const v=fDeck[fi];if(ok)prog.known[v[0]]=1;else delete prog.known[v[0]];save();fi=(fi+1)%fDeck.length;fBack=false;flashDraw()}

/* ============ CHÚ THÍCH PINYIN + NGHĨA CHO TIÊU ĐỀ / CÔNG THỨC NGỮ PHÁP ============ */
const EXTRA={"游":["yóu","bơi"],"好":["hǎo","tốt"],"多":["duō","nhiều"],"裡":["lǐ","bên trong"]};   // từ/ký tự ngữ pháp chưa nằm trong danh sách từ vựng
const DICT=(()=>{const d={};VOCAB.forEach(v=>{d[v[0]]=[v[1],v[2]]});Object.assign(d,EXTRA);return d})();
const isHan=c=>/[\u4e00-\u9fff]/.test(c);
function annotate(s){   // → {html: chữ Hán có pinyin phía trên, gloss: [[hán, pinyin, nghĩa]…]}
  let html="",gloss=[],seen=new Set(),i=0;
  while(i<s.length){
    if(!isHan(s[i])){let j=i;while(j<s.length&&!isHan(s[j]))j++;html+=esc(s.slice(i,j));i=j;continue}
    let k=0;
    for(let L=Math.min(6,s.length-i);L>=1;L--){if(DICT[s.slice(i,i+L)]&&[...s.slice(i,i+L)].every(isHan)){k=L;break}}
    if(k){const w=s.slice(i,i+k),[py,vi]=DICT[w];html+=`<ruby>${w}<rt>${py}</rt></ruby>`;if(!seen.has(w)){seen.add(w);gloss.push([w,py,vi])}i+=k}
    else{html+=s[i];i++}
  }
  return {html,gloss};
}
const glossHtml=g=>g.length?`<div class="gloss">${g.map(x=>`<span><b class="zh">${x[0]}</b> <i>${x[1]}</i> = ${x[2]}</span>`).join("")}</div>`:"";

/* ============ NGỮ PHÁP ============ */
function grammarView(){
  let html="",last=0;
  GRAMMAR.forEach((g,i)=>{
    if(!inL(g.l))return;
    if(g.l!==last){last=g.l;html+=`<div class="lh">${lesHead(last)} <span class="vi">— ${LES[last].vi}</span></div>`}
    const T=annotate(g.t),F=annotate(g.f),seen=new Set(),G=[...T.gloss,...F.gloss].filter(x=>!seen.has(x[0])&&seen.add(x[0]));
    html+=`<div class="card"><h3 class="gh">${T.html}</h3><div class="formula">${F.html}</div>${glossHtml(G)}<p style="margin:8px 0 10px">${g.d}</p>
    ${g.ex.map(e=>`<div class="ex"><div class="row"><span class="zh">${e[0]}</span>${spkBtn(e[0])}</div><div class="py">${e[1]}</div><div class="vi">${e[2]}</div></div>`).join("")}</div>`;
  });
  $("#app").innerHTML=html||"<div class='card vi'>Chưa có ngữ pháp cho phạm vi này.</div>";
}

/* ============ ĐỌC — HỘI THOẠI & ĐOẠN VĂN ============ */
let rPy=true,rVi=true,rTok=0,rAns={};
function stopSpeak(){rTok++;sTok++;if(curA){curA.pause();curA=null}if("speechSynthesis" in window&&(speechSynthesis.speaking||speechSynthesis.pending))speechSynthesis.cancel()}
function speakSeq(items){      // đọc lần lượt từng câu; item: {t, tag, pitch}
  stopSpeak();const tok=++rTok;let i=0;
  const next=()=>{
    if(tok!==rTok||i>=items.length)return;
    const it=items[i++],after=()=>setTimeout(next,350);
    if(useClips())playClip(it.t,{tag:it.tag,onend:after,onfail:()=>{if(tok===rTok)say(it.t,{pitch:it.pitch,onend:after})}});
    else say(it.t,{pitch:it.pitch,onend:after});
  };
  setTimeout(()=>{if(tok===rTok)next()},60);
}
function playDialog(n){
  toast("🔊 Đang đọc…");
  const L=rows(DIALOGS[n].l).map(r=>r.split("|")),names=[...new Set(L.map(x=>x[0]))];
  speakSeq(L.map(x=>({t:x[1],tag:names.indexOf(x[0])%2?"e":"m",pitch:names.indexOf(x[0])===0?1.15:0.8})));
}
function playPara(zh){
  toast("🔊 Đang đọc…");speakSeq(zh.split(/(?<=[。！？])/).filter(Boolean).map(t=>({t,pitch:1})))}
function reread(){const y=window.scrollY;readView();window.scrollTo(0,y)}
function rAnswer(k,v,a){if(rAns[k])return;rAns[k]=v;mark(v===a);reread()}
function readView(){
  const ns=LESSONS.map(L=>L.n).filter(inL);
  let html=`<div class="row" style="margin-bottom:10px"><label><input type="checkbox" ${rPy?"checked":""} onchange="rPy=this.checked;reread()"> Hiện pinyin</label><label><input type="checkbox" ${rVi?"checked":""} onchange="rVi=this.checked;reread()"> Hiện tiếng Việt</label><button class="b" onclick="stopSpeak()">⏹ Dừng</button><span class="stat">Mẹo: tắt pinyin và tiếng Việt để tự đọc, rồi bật lên kiểm tra.</span></div>`;
  ns.forEach(n=>{
    const D=DIALOGS[n],L=LES[n];
    html+=`<div class="lh">${lesHead(n)} <span class="vi">— ${L.vi}</span></div>`;
    if(D){
      const lines=rows(D.l).map(r=>r.split("|")),names=[...new Set(lines.map(x=>x[0]))];
      html+=`<div class="card"><div class="row" style="justify-content:space-between;margin-bottom:8px"><h3 style="margin:0">💬 ${D.t}</h3><button class="b p" onclick="playDialog(${n})">▶ Nghe cả đoạn</button></div>`+
      lines.map(x=>`<div class="bub ${names.indexOf(x[0])%2?"r":"l"}"><div class="who">${x[0]}</div><div class="row"><span class="zh" style="font-size:22px">${x[1]}</span>${spkBtn(x[1],names.indexOf(x[0])%2?"e":"m")}</div>${rPy?`<div class="py">${x[2]}</div>`:""}${rVi?`<div class="vi">${x[3]}</div>`:""}</div>`).join("")+
      `<div style="margin-top:12px"><b>Đúng (O) hay sai (X)?</b>${rows(D.q).map((r,i)=>{
        const [s,a]=r.split("|"),k=n+"-"+i,done=rAns[k];
        return `<div class="qq">${s}<div class="row" style="margin-top:4px">${["O","X"].map(v=>`<button class="b ${done&&v===a?"ok":done&&v===done?"bad":""}" onclick="rAnswer('${k}','${v}','${a}')">${v}</button>`).join("")}${done?`<span class="stat">${done===a?"✅ Đúng":"❌ Đáp án: "+a}</span>`:""}</div></div>`}).join("")}</div></div>`;
    }
    TRANS.filter(t=>t[3]===n&&tLenOf(t)==="para").forEach(t=>{
      html+=`<div class="card"><div class="row" style="justify-content:space-between;margin-bottom:8px"><h3 style="margin:0">📄 Đoạn văn ngắn</h3><button class="b p" onclick="playPara('${t[1]}')">▶ Nghe cả đoạn</button></div>
      <div class="zh" style="font-size:22px;line-height:1.7">${t[1]}</div>${rPy?`<div class="py" style="margin-top:6px">${t[2]}</div>`:""}${rVi?`<div class="vi" style="margin-top:6px">${t[0]}</div>`:""}</div>`;
    });
  });
  $("#app").innerHTML=html||"<div class='card vi'>Chưa có bài đọc cho phạm vi này.</div>";
}

/* ============ BÀI TẬP ============ */
let qMode=null,Q=null,qn=0;
function quizView(){
  if(!qMode){
    $("#app").innerHTML=`<div class="stat" style="margin-bottom:10px">Điểm tích lũy: ${prog.score.right}/${prog.score.total}</div>
    <div class="card"><h3>Chọn dạng bài</h3>
    ${[["zh2vi","Đọc Hán tự → chọn nghĩa tiếng Việt"],["vi2zh","Nghĩa tiếng Việt → chọn Hán tự"],["listen","🎧 Nghe → chọn từ đúng"],["fill","Điền pinyin (không cần dấu thanh)"],["order","Sắp xếp từ thành câu"]].map(([k,l])=>`<button class="b opt" onclick="qMode='${k}';qn=0;nextQ()">${l}</button>`).join("")}</div>`;
  }else{qn--;nextQ()}   // đang trong một dạng bài: vẽ lại câu mới (tránh hiện nội dung cũ của tab khác)
}
function nextQ(){
  const m=qMode;qn++;
  if(m==="order"){let OP=ORDER.filter(o=>inL(o[2]));if(!OP.length)OP=ORDER;const [vi,toks]=OP[Math.random()*OP.length|0];Q={vi,toks,pick:[],pool:sh(toks.map((t,i)=>({t,i})))};if(Q.pool.every((x,i)=>x.i===i))Q.pool.reverse();return orderDraw()}
  const P=pool(),w=P[Math.random()*P.length|0];
  const wrong=sh((P.length>=4?P:VOCAB).filter(v=>v!==w)).slice(0,3);const opts=sh([w,...wrong]);
  Q={w,opts};
  const head={zh2vi:`<div class="zh">${w[0]}</div><div class="row">${spkBtn(w[0])}</div>`,vi2zh:`<div class="stat">Chọn Hán tự cho:</div><div class="zh" style="font-size:22px">${w[2]}</div>`,listen:`<div class="stat">Nghe và chọn từ bạn nghe được:</div><div class="row"><button class="b p" onclick="speak('${w[0]}')">🔊 Nghe</button><button class="b" onclick="speak('${w[0]}',0.4)">🐢 Chậm</button></div>`,fill:`<div class="zh">${w[0]}</div><div class="vi">${w[2]}</div><div class="row" style="margin:8px 0">${spkBtn(w[0])}</div>`}[m];
  const body=m==="fill"?`<input type="text" id="fi" placeholder="Gõ pinyin, vd: ni hao" autocomplete="off"><div class="row" style="margin-top:8px"><button class="b p" onclick="chkFill()">Kiểm tra</button></div>`
   :opts.map((o,i)=>`<button class="b opt" onclick="chkMC(${i},this)">${m==="zh2vi"?o[2]:m==="vi2zh"?`<span class="zh" style="font-size:22px">${o[0]}</span> <span class="py">${o[1]}</span>`:`<span class="zh" style="font-size:22px">${o[0]}</span>`}</button>`).join("");
  $("#app").innerHTML=qFrame(`<div class="card">${head}${body}<div id="fb"></div></div>`);
  if(m==="listen")speak(w[0]);
  if(m==="fill"){$("#fi").focus();$("#fi").onkeydown=e=>{if(e.key==="Enter")chkFill()}}
}
const qFrame=h=>`<div class="row" style="justify-content:space-between;margin-bottom:10px"><button class="b" onclick="qMode=null;quizView()">← Đổi dạng bài</button><span class="stat">Câu ${qn} · ${prog.score.right}/${prog.score.total}</span></div>${h}`;
function fb(ok,msg){
  $("#fb").innerHTML=`<div class="fb ${ok?"ok":"bad"}">${ok?"✅ Chính xác!":"❌ Chưa đúng."} ${msg||""}</div><div class="row" style="margin-top:10px"><button class="b p" onclick="nextQ()">Câu tiếp →</button></div>`;
}
function chkMC(i,btn){
  if(document.querySelector(".opt.ok"))return;
  const ok=Q.opts[i]===Q.w;mark(ok);btn.classList.add(ok?"ok":"bad");
  if(!ok)[...document.querySelectorAll(".opt")][Q.opts.indexOf(Q.w)].classList.add("ok");
  speak(Q.w[0]);fb(ok,`${Q.w[0]} (${Q.w[1]}) = ${Q.w[2]}`);
}
function chkFill(){
  if(document.querySelector(".fb"))return;
  const ok=stripTone($("#fi").value)===stripTone(Q.w[1]);mark(ok);fb(ok,`Đáp án: ${Q.w[1]}`);
}
function orderDraw(){
  $("#app").innerHTML=qFrame(`<div class="card"><div class="stat">Sắp xếp thành câu:</div><div style="font-size:20px;margin:6px 0 10px">${Q.vi}</div>
  <div class="ans" id="ans">${Q.pick.map(x=>`<span class="tok" onclick="unpick(${x.i})">${x.t}</span>`).join("")}</div>
  <div>${Q.pool.filter(x=>!Q.pick.includes(x)).map(x=>`<span class="tok" onclick="doPick(${x.i})">${x.t}</span>`).join("")}</div>
  <div class="row" style="margin-top:10px"><button class="b p" onclick="chkOrder()">Kiểm tra</button><button class="b" onclick="Q.pick=[];orderDraw()">Xóa</button></div><div id="fb"></div></div>`);
}
function doPick(i){Q.pick.push(Q.pool.find(x=>x.i===i));orderDraw()}
function unpick(i){Q.pick=Q.pick.filter(x=>x.i!==i);orderDraw()}
function chkOrder(){
  if(Q.pick.length!==Q.toks.length)return;
  const ok=Q.pick.map(x=>x.t).join("")===Q.toks.join("");mark(ok);speak(Q.toks.join(""));
  fb(ok,`Đáp án: ${Q.toks.join("")}`);
}

/* ============ TẬP DỊCH ============ */
let tReflex=false,tStart=0,tStreak=0,tTime=0,tTok=0;
let tDir="vi2zh",tIdx=0,tLen="all",tShuf=sh(TRANS.map((_,i)=>i)),tDone=false;
const curT=()=>{
  let o=tShuf.filter(i=>inL(TRANS[i][3])&&(tLen==="all"||tLenOf(TRANS[i])===tLen));
  if(!o.length)o=tShuf.filter(i=>tLen==="all"||tLenOf(TRANS[i])===tLen);
  return TRANS[o[tIdx%o.length]];
};
function lcsRatio(a,b){
  const m=a.length,n=b.length;if(!m||!n)return 0;
  let prev=new Array(n+1).fill(0);
  for(let i=1;i<=m;i++){const cur=[0];for(let j=1;j<=n;j++)cur[j]=a[i-1]===b[j-1]?prev[j-1]+1:Math.max(prev[j],cur[j-1]);prev=cur}
  return prev[n]/Math.max(m,n);
}
function transView(){
  const t=curT();tDone=false;tStart=Date.now();tTok++;
  const src=tDir==="vi2zh"?t[0]:t[1],L=tLenOf(t);
  const cnt=TRANS.filter(x=>inL(x[3])&&(tLen==="all"||tLenOf(x)===tLen)).length;
  $("#app").innerHTML=`<div class="chips"><span class="chip ${tDir==="vi2zh"?"on":""}" onclick="tDir='vi2zh';transView()">Việt → Trung</span><span class="chip ${tDir==="zh2vi"?"on":""}" onclick="tDir='zh2vi';transView()">Trung → Việt</span>
  <span style="width:12px"></span>${[["all","Tất cả"],["short","Câu ngắn"],["long","Câu dài"],["para","Đoạn văn"]].map(([k,l])=>`<span class="chip ${tLen===k?"on":""}" onclick="tLen='${k}';tIdx=0;transView()">${l}</span>`).join("")}
  <span style="width:12px"></span><span class="chip ${tReflex?"on":""}" title="Đúng thì tự qua câu mới, hiện thời gian trả lời" onclick="tReflex=!tReflex;transView()">⚡ Phản xạ</span></div>
  <div class="card"><div class="stat">Dịch câu sau:</div>
  <div style="font-size:${tDir==="vi2zh"?20:28}px;margin:8px 0" class="${tDir==="zh2vi"?"zh":""}">${src}</div>
  ${tDir==="zh2vi"?`<div class="row" style="margin-bottom:8px">${spkBtn(t[1])}<button class="b" onclick="speak('${t[1]}',0.4)">🐢 Chậm</button></div>`:""}
  <div class="stat" style="margin-bottom:6px">${L==="para"?"Đoạn văn":L==="long"?"Câu dài":"Câu ngắn"} · ${lesTag(t[3])} · ${cnt} câu trong bộ lọc</div>
  <textarea id="ti" rows="${L==="para"?5:L==="long"?2:1}" style="width:100%;padding:10px 12px;border:1px solid var(--line);border-radius:9px;background:var(--card);color:var(--ink);font:inherit;font-size:18px;resize:vertical" placeholder="${tDir==="vi2zh"?"Gõ Hán tự (giản hoặc phồn) hoặc pinyin không dấu…":"Gõ nghĩa tiếng Việt…"}" autocomplete="off" spellcheck="false"></textarea>
  <div class="row" style="margin-top:8px"><button class="b p" onclick="chkTrans()">${tDir==="vi2zh"?"Kiểm tra":"Xem đáp án"}</button><button class="b" onclick="tIdx++;transView()">Câu khác →</button></div>
  <div id="fb"></div></div>`;
  $("#ti").onkeydown=e=>{if(e.key==="Enter"&&!e.shiftKey&&!e.isComposing&&L!=="para"){e.preventDefault();if(tDone&&tDir==="vi2zh"){tIdx++;transView()}else chkTrans()}};
  $("#ti").focus();
}
function chkTrans(){
  const t=curT();const v=$("#ti").value;
  const show=`<div class="ex"><div class="row"><span class="zh">${t[1]}</span>${spkBtn(t[1])}</div><div class="py">${t[2]}</div><div class="vi">${t[0]}</div></div>`;
  if(tDir==="vi2zh"){
    const exact=normZh(v)===normZh(t[1])||(stripTone(v)&&stripTone(v)===stripTone(t[2]));
    const r=exact?1:Math.max(lcsRatio([...normZh(v)],[...normZh(t[1])]),lcsRatio([...stripTone(v)],[...stripTone(t[2])]));
    const ok=exact||(tLenOf(t)!=="short"&&r>=0.9);
    if(!tDone){mark(ok);tDone=true;tStreak=ok?tStreak+1:0;tTime=((Date.now()-tStart)/1000).toFixed(1)}
    const pct=Math.round(r*100);
    $("#fb").innerHTML=`<div class="fb ${ok?"ok":"bad"}">${exact?"✅ Chính xác!":ok?`✅ Gần đúng hoàn toàn (${pct}% giống đáp án mẫu).`:`❌ Giống đáp án mẫu ${pct}%, hãy so sánh:`} <span class="stat">⏱ ${tTime}s · 🔥 chuỗi đúng: ${tStreak}</span></div>${show}<div class="stat" style="margin-top:6px">Nhấn Enter để sang câu tiếp.</div>`;
    if(ok&&tReflex){const tk=tTok;speak(t[1]);setTimeout(()=>{if(tk===tTok){tIdx++;transView()}},1800)}
  }else{
    $("#fb").innerHTML=`${show}<div class="row"><span class="stat">Bạn dịch đúng ý chứ?</span><button class="b" onclick="selfMark(true)">✅ Đúng</button><button class="b" onclick="selfMark(false)">❌ Sai</button></div>`;
    speak(t[1]);
  }
}
function selfMark(ok){mark(ok);tIdx++;transView()}

$("#voiceTest").onclick=()=>speak("你好，歡迎你來臺灣！");
$("#voiceSel").onchange=e=>{try{localStorage.setItem(VKEY,e.target.value)}catch(x){}speak("你好，歡迎你來臺灣！")};
setTimeout(()=>{   // sau khi danh sách giọng đã tải: báo nếu máy/khung này không có giọng tiếng Trung
  if(!("speechSynthesis" in window)||!voices.length){
    const w=document.createElement("div");w.className="card";w.style.cssText="border-color:var(--bad);background:var(--badbg)";
    w.innerHTML="⚠️ Không tìm thấy giọng đọc tiếng Trung ở đây. Nếu bạn đang xem file trong khung xem trước của ứng dụng, hãy <b>mở file index.html trực tiếp bằng Chrome hoặc Safari</b> (nhấp đúp file trong Finder, hoặc chuột phải → Mở bằng).";
    w.style.cssText+=";max-width:868px;margin:12px auto 0;padding:12px 16px";document.body.insertBefore(w,$("main"));
  }
},1500);
$("#les").value=LESSON;syncBar();updateHero();
$("#les").onchange=e=>setLesson(e.target.value);
render();
