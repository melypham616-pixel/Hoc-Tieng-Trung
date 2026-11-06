
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

STORIES.sort((a,b)=>a.n-b.n);   // xếp truyện theo bài (giữ nguyên thứ tự trong cùng bài)
const skey=(si,li)=>STORIES[si].zh+"|"+li;   // lưu điểm theo tên truyện để thêm truyện mới không làm lệch điểm cũ
/* ============ ĐO LƯỜNG (GA4): chỉ đếm lượt dùng và điểm số, không gửi âm thanh hay lời nói ============ */
const track=(name,params)=>{try{if(typeof gtag==='function')gtag('event',name,params||{})}catch(e){}};
/* ============ TIỆN ÍCH / GIỌNG ĐỌC ============ */
window.addEventListener("error",e=>{try{toast("Lỗi trong trang: "+e.message)}catch(x){}});
const $=s=>document.querySelector(s);
const sh=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
const esc=s=>s.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
let voices=[];
function loadVoices(){voices=speechSynthesis.getVoices().filter(v=>/^zh|cmn|yue/i.test(v.lang))}
// giọng duy nhất là Meijia; chỉ khi trình duyệt không có Meijia mới dùng giọng zh-TW khác làm dự phòng
function pick(){return voices.find(v=>v.name==="Meijia")||voices.find(v=>/zh[-_]TW/i.test(v.lang))||voices[0]}
if("speechSynthesis" in window){speechSynthesis.onvoiceschanged=loadVoices;loadVoices();}
let sTok=0,keepU=null;
function toast(m){
  let d=$("#toast");
  if(!d){d=document.createElement("div");d.id="toast";d.style.cssText="position:fixed;left:50%;bottom:20px;transform:translateX(-50%);background:#333;color:#fff;padding:10px 16px;border-radius:10px;z-index:9;max-width:90%;font-size:14px";document.body.appendChild(d)}
  d.textContent=m;d.style.display="block";clearTimeout(d._t);d._t=setTimeout(()=>d.style.display="none",6000);
}
function voiceList(){return [pick()].filter(Boolean)}
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
const clipUrl=(t,tag)=>"audio/"+cyrb53((tag||"m")+"|"+t).toString(36)+".m4a";   // giọng duy nhất: Meijia
const useClips=()=>true;   // chỉ dùng một giọng: Meijia (file thu sẵn)
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
function mark(ok){dayAdd("q");logHist("q",ok);prog.score.total++;if(ok)prog.score.right++;save()}

/* ============ PHẠM VI BÀI ============ */
const NL=LESSONS.length;
let LESSON=prog.lesson;if(!/^(all|\d+-\d+)$/.test(LESSON||""))LESSON="all";
const inL=n=>{if(!lesFree("1",n))return false;if(LESSON==="all")return true;const [a,b]=LESSON.split("-").map(Number);return n>=a&&n<=b};
const pool=()=>VOCAB.filter(v=>inL(v[3]));
(function buildSelect(){
  const g=[["all",`Tất cả ${NL} bài`],["1-5","Bài 1–5"],["6-10","Bài 6–10"],["11-15","Bài 11–15"]];
  $("#les").innerHTML=g.map(([k,l])=>`<option value="${k}">${l}</option>`).join("")+
    LESSONS.map(L=>`<option value="${L.n}-${L.n}">Bài ${L.n} · ${L.zh.replace(/[？！]/g,"")}</option>`).join("");
  $("#lbar").innerHTML=`<button class="lchip" data-v="all">Tất cả<small>${NL} bài</small></button>`+
    LESSONS.map(L=>`<button class="lchip" data-v="${L.n}-${L.n}" title="${esc(L.vi)}">Bài ${L.n}${lockIc(lesFree("1",L.n))}<small>${L.zh.replace(/[？！]/g,"")}</small></button>`).join("");
  $("#lbar").onclick=e=>{const b=e.target.closest(".lchip");if(b)setLesson(b.dataset.v)};
})();
function setLesson(v){
  if(!isPro()){const a=v==="all"?1:+v.split("-")[0];if(a>FREE.lessons["1"]){showLock("lesson");return}}
  LESSON=prog.lesson=v;qMode=null;tIdx=0;track('select_lesson',{lesson:v});$("#les").value=v;syncBar();save();render();
}
function syncBar(){
  document.querySelectorAll(".lchip").forEach(b=>b.classList.toggle("on",b.dataset.v===LESSON));
  const on=document.querySelector(".lchip.on");if(on)on.scrollIntoView({inline:"center",block:"nearest",behavior:"smooth"});
}
function updateHero(){
  try{lessonBar()}catch(e){}
  const k=Object.keys(prog.known).length,s=prog.score;
  $("#stK").textContent=k;$("#stKbar").style.width=(k/VOCAB.length*100)+"%";
  $("#stS").textContent=s.total?Math.round(s.right/s.total*100)+"%":"–";$("#stSbar").style.width=(s.total?s.right/s.total*100:0)+"%";
  $("#stV").textContent=VOCAB.length;
}

/* ============ ĐIỀU HƯỚNG ============ */
const TABS=[["vocab","📖 Từ vựng"],["flash","🃏 Thẻ nhớ"],["grammar","📐 Ngữ pháp"],["read","💬 Đọc"],["story","📚 Truyện"],["qa","🎙 Vấn đáp"],["quiz","✍️ Bài tập"],["trans","🔤 Tập dịch"]];
let tab="vocab";
$("#nav").innerHTML=TABS.map(([k,l])=>{const i=l.indexOf(" ");return `<button data-k="${k}"><span class="ic">${l.slice(0,i)}</span><span class="lb">${l.slice(i+1)}</span></button>`}).join("");
$("#nav").onclick=e=>{const b=e.target.closest("button");if(b&&b.dataset.k){tab=b.dataset.k;render();window.scrollTo({top:0})}};
function render(){
  const isH=bk==="H"||bk==="P";document.querySelector(".hero").style.display=isH?"none":"";$("main").className=isH?"home":"";
  uiSync();
  if(isH){stopSpeak();stopRec();clearInterval(qaTimer);qaSess=null;$("#lbar").style.display="none";$("#nav").style.display="none";if(bk==="P")pageView();else{track('home_view');homeView()}return}
  document.querySelectorAll("#nav button").forEach(b=>b.classList.toggle("on",b.dataset.k===tab));
  stopSpeak();stopRec();clearInterval(qaTimer);qaSess=null;
  const b1=bk==="1";$("#lbar").style.display=b1?"":"none";$("#nav").style.display=b1?"":"none";$("#les").closest(".sp").style.display=b1?"":"none";
  document.querySelector(".stats").style.display=b1?"":"none";
  $("#hS").textContent=bk==="T"?"Từ vựng TOCFL Band A + B · 4.844 từ · thẻ nhớ, trắc nghiệm, nghe đọc":b1?"Học tiếng Trung · 15 bài · từ vựng, ngữ pháp, hội thoại, tập dịch":`Học tiếng Trung · ${BOOKS[bk]?BOOKS[bk].lessons.length+" bài":"đang cập nhật"} · từ vựng, hội thoại, thẻ nhớ, trắc nghiệm`;
  $("#hT").textContent=bk==="T"?"TOCFL 詞彙 A1–B2":"當代中文課程 "+bk;
  if(!b1){track('book_view',{book:bk});tocflView();return}
  track('tab_view',{tab});
  ({vocab:vocabView,flash:flashView,grammar:grammarView,read:readView,story:storyView,qa:qaView,quiz:quizView,trans:transView})[tab]();
}
function setBook(n){bk=n;if(n!=="H")prog.book=prog.last=n;tfLv=tfKeys()[0]||tfLv;tfSet=0;tfDeck=[];tfQz=null;tfNew=false;tfMode=tfMode==="dlg"&&n==="T"?"list":tfMode;save();render();window.scrollTo({top:0})}
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
    html+=`<div class="vl"><div>${spkBtn(v[0])}</div><div><span class="zh tap" onclick="speak('${v[0]}')">${v[0]}</span> <span class="py">${v[1]}</span><div class="vi">${v[2]}</div></div>
    <label class="stat"><input type="checkbox" ${prog.known[v[0]]?"checked":""} onchange="toggleKnown('${v[0]}',this.checked)"> thuộc</label></div>`;
  });
  $("#vlist").innerHTML=html?`<div class="card">${html}</div>`:"<div class='vi'>Không tìm thấy.</div>";
}
function toggleKnown(z,c){if(c)prog.known[z]=1;else delete prog.known[z];save()}

/* ============ THẺ NHỚ ============ */
let fDeck=[],fi=0,fBack=false,fOnlyNew=false;
function flashView(){fDeck=sh(pool().filter(v=>!fOnlyNew||!prog.known[v[0]]));fi=0;fBack=false;flashDraw()}
function flashDraw(){
  if(capped("f")){$("#app").innerHTML=lockCard("flash");return}
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
function fAns(ok){dayAdd("f");logHist("f",ok);const v=fDeck[fi];if(ok)prog.known[v[0]]=1;else delete prog.known[v[0]];save();fi=(fi+1)%fDeck.length;fBack=false;flashDraw()}


/* ============ TOCFL (Band A + Band B) ============ */
const TF=rows(TOCFL_DATA).map((r,i)=>{const p=r.split("|");return{i,h:p[0],p:p[1],m:p[2],pos:p[3],l:p[4],s:p[0].replace(/[()（）]/g,"").split("/")[0].trim(),k:p[0]+"|"+p[1]}});
prog.tk=prog.tk||{};
const TFL=["A1","A2","B1","B2"],TF_SET=25,TF_NAME={A1:"Sơ cấp 1",A2:"Sơ cấp 2",B1:"Trung cấp 1",B2:"Trung cấp 2"};
const BOOK_IDS=["1","2","3","4","5","6","T"],BOOK_TOTAL={2:15,3:12,4:12,5:10,6:10};   // số bài của từng quyển trong sách; quyển nào chưa đủ bài thì báo "đang cập nhật"
const BKW={};Object.keys(BOOKS).forEach(n=>{BKW[n]=BOOKS[n].lessons.flatMap(L=>rows(L.v).map(r=>{const p=r.split("|");return{h:p[0],p:p[1],m:p[2],pos:p[3]||"",l:"Bài "+L.n,s:p[0].replace(/[()（）]/g,"").split("/")[0].trim(),k:n+":"+p[0]+"|"+p[1]}}))});
let bk="H";if(!BOOK_IDS.includes(prog.last))prog.last=BOOK_IDS.includes(prog.book)?prog.book:"1";
const tfSrc=()=>bk==="T"?TF:(BKW[bk]||[]);
const tfKeys=()=>bk==="T"?TFL:[...new Set(tfSrc().map(x=>x.l))];
const tfByL=l=>tfSrc().filter(x=>x.l===l);
let tfLv=TFL.includes(prog.tfLv)?prog.tfLv:"A1",tfDlgPy=true,tfDlgVi=true,tfSet=0,tfMode="list",tfQ="",tfNew=false,tfLim=100;
let tfDeck=[],tfi=0,tfBack=false,tfQm="h2m",tfQz=null,tfStreak=0,tfDone=false;
const tfSets=()=>tfByL(tfLv).length>60?Math.ceil(tfByL(tfLv).length/TF_SET):0;
function tfScope(){   // các từ trong cấp + bộ đang chọn
  let a=tfByL(tfLv);if(tfSet>0&&tfSets())a=a.slice((tfSet-1)*TF_SET,tfSet*TF_SET);
  return tfNew?a.filter(x=>!prog.tk[x.k]):a;
}
const tfKnownN=a=>a.filter(x=>prog.tk[x.k]).length;
function tocflView(){
  const keys=tfKeys();
  if(!keys.length){$("#app").innerHTML=`<div class="card">📚 <b>Quyển ${bk}</b> đang được cập nhật, sẽ có sớm. Bạn có thể học Quyển 1 hoặc TOCFL trong lúc chờ.</div>`;return}
  if(!keys.includes(tfLv)){tfLv=keys[0];tfSet=0}
  const L=tfByL(tfLv),ns=tfSets(),isT=bk==="T";
  const setOpts=ns?`<option value="0">Cả ${isT?"cấp":""} ${tfLv} (${L.length} từ)</option>`+Array.from({length:ns},(_,j)=>{const a=L.slice(j*TF_SET,(j+1)*TF_SET);return `<option value="${j+1}"${tfSet===j+1?" selected":""}>Bộ ${j+1} · ${a[0].s}…${a[a.length-1].s} · ${tfKnownN(a)}/${a.length}</option>`}).join(""):"";
  const intro=isT?`<b>🎯 TOCFL</b> — từ vựng thi chứng chỉ tiếng Hoa (Đài Loan): <b>Band A</b> (A1–A2, ${tfByL("A1").length+tfByL("A2").length} từ) và <b>Band B</b> (B1–B2, ${tfByL("B1").length+tfByL("B2").length} từ). Chọn cấp → chọn bộ ${TF_SET} từ → học bằng danh sách, thẻ nhớ hoặc trắc nghiệm.`
    :`<b>📘 Quyển ${bk}</b> — ${BOOKS[bk].lessons.length}${BOOK_TOTAL[bk]&&BOOK_TOTAL[bk]>BOOKS[bk].lessons.length?"/"+BOOK_TOTAL[bk]:""} bài, ${tfSrc().length} từ vựng${BOOK_TOTAL[bk]&&BOOK_TOTAL[bk]>BOOKS[bk].lessons.length?" (các bài còn lại đang được cập nhật)":""}. Chọn bài, rồi học từ vựng, thẻ nhớ, trắc nghiệm hoặc đọc hội thoại.`;
  const modes=[["list","📋 Từ vựng"],["flash","🃏 Thẻ nhớ"],["quiz","✍️ Trắc nghiệm"]];if(!isT)modes.push(["dlg","💬 Hội thoại"]);
  if(tfMode==="dlg"&&isT)tfMode="list";
  $("#app").innerHTML=`
  <div class="card tf-intro">${intro}</div>
  <div class="chips">${keys.map(l=>{const a=tfByL(l);return `<span class="chip ${l===tfLv?"on":""}" onclick="tfPickLv('${l}')">${l}${lockIc(!tfLocked(l))}<small class="tf-n"> ${tfKnownN(a)}/${a.length}</small></span>`}).join("")}</div>
  ${tfMode==="dlg"?"":`<div class="row tf-bar">${ns?`<select id="tfSet" onchange="tfSet=+this.value;tfLim=100;tfDeck=[];tfQz=null;tocflView()">${setOpts}</select>`:""}
   <label class="stat"><input type="checkbox" ${tfNew?"checked":""} onchange="tfNew=this.checked;tfDeck=[];tfQz=null;tocflView()"> chỉ từ chưa thuộc</label></div>`}
  <div class="seg">${modes.map(([k,l])=>`<button class="${tfMode===k?"on":""}" onclick="tfMode='${k}';tfDeck=[];tfQz=null;tocflView()">${l}</button>`).join("")}</div>
  <div id="tfbody"></div>`;
  if(tfLocked(tfLv)){$("#tfbody").innerHTML=lockCard("lesson");return}
  ({list:tfListView,flash:tfFlashView,quiz:tfQuizView,dlg:tfDlgView})[tfMode]();
}
function tfDlgView(){
  const L=BOOKS[bk].lessons.find(x=>"Bài "+x.n===tfLv),D=L&&L.d;
  if(!D){$("#tfbody").innerHTML=`<div class="card">Bài này chưa có hội thoại.</div>`;return}
  const lines=rows(D.l).map(r=>r.split("|")),names=[...new Set(lines.map(x=>x[0]))];
  $("#tfbody").innerHTML=`<div class="lh">Bài ${L.n} · ${L.zh} <span class="vi">— ${esc(L.vi||"")}</span></div>
  <div class="row" style="margin-bottom:10px"><label><input type="checkbox" ${tfDlgPy?"checked":""} onchange="tfDlgPy=this.checked;tfDlgView()"> Hiện pinyin</label><label><input type="checkbox" ${tfDlgVi?"checked":""} onchange="tfDlgVi=this.checked;tfDlgView()"> Hiện tiếng Việt</label><button class="b p" onclick="tfPlayDlg()">▶ Nghe cả đoạn</button><button class="b" onclick="stopSpeak()">⏹ Dừng</button></div>
  <div class="card">${lines.map(x=>`<div class="bub ${names.indexOf(x[0])%2?"r":"l"}"><div class="who">${x[0]}</div><div class="row"><span class="zh tap" style="font-size:22px" onclick="speak('${x[1]}')">${x[1]}</span>${spkBtn(x[1],"m")}</div>${tfDlgPy?`<div class="py">${x[2]||""}</div>`:""}${tfDlgVi?`<div class="vi">${x[3]||""}</div>`:""}</div>`).join("")}</div>`;
}
function tfPlayDlg(){const L=BOOKS[bk].lessons.find(x=>"Bài "+x.n===tfLv);toast("🔊 Đang đọc…");speakSeq(rows(L.d.l).map(r=>({t:r.split("|")[1],tag:"m",pitch:1})))}
function tfPickLv(l){tfLv=l;if(bk==='T')prog.tfLv=l;tfSet=0;tfLim=100;tfDeck=[];tfQz=null;save();track('tocfl_level',{book:bk,level:l});tocflView()}
const tfRow=(x,showLv)=>`<div class="vl"><div>${spkBtn(x.s)}</div><div><span class="zh tap" onclick="speak('${x.s}')">${x.h}</span> <span class="py">${x.p}</span> <span class="pos">${x.pos}</span>${showLv?` <span class="lv lv-${x.l}">${x.l}</span>`:""}<div class="vi">${esc(x.m)}</div></div>
  <label class="stat"><input type="checkbox" ${prog.tk[x.k]?"checked":""} onchange="tfKnown('${x.k.replace(/'/g,"\\'")}',this.checked)"> thuộc</label></div>`;
function tfKnown(k,c){if(c)prog.tk[k]=1;else delete prog.tk[k];save()}
function tfListView(){
  $("#tfbody").innerHTML=`<input type="search" id="tfq" placeholder="${bk==='T'?'Tìm trong cả 4 cấp':'Tìm trong quyển này'}: Hán tự, pinyin hoặc tiếng Việt…" value="${esc(tfQ)}"><div id="tflist" style="margin-top:8px"></div>`;
  $("#tfq").oninput=e=>{tfQ=e.target.value;tfLim=100;tfDraw()};
  tfDraw();
}
function tfDraw(){
  const q=tfQ.trim().toLowerCase(),sq=stripTone(q);
  const items=q?tfSrc().filter(x=>x.h.includes(q)||x.m.toLowerCase().includes(q)||(sq&&stripTone(x.p).includes(sq))):tfScope();
  const shown=items.slice(0,tfLim);
  $("#tflist").innerHTML=(q?`<div class="stat" style="margin:6px 0">Tìm thấy ${items.length} từ</div>`:`<div class="stat" style="margin:6px 0">${items.length} từ · đã thuộc ${tfKnownN(items)}</div>`)+
    (shown.length?`<div class="card">${shown.map(x=>tfRow(x,!!q&&bk==='T')).join("")}</div>`:"<div class='vi'>Không có từ nào.</div>")+
    (items.length>tfLim?`<div style="text-align:center;margin:12px"><button class="b" onclick="tfLim+=200;tfDraw()">Hiện thêm (${items.length-tfLim} từ nữa)</button></div>`:"");
}
function tfFlashView(){
  if(capped("f")){$("#tfbody").innerHTML=lockCard("flash");return}
  if(!tfDeck.length){tfDeck=sh(tfScope());tfi=0;tfBack=false}
  if(!tfDeck.length){$("#tfbody").innerHTML=`<div class="card">🎉 Bạn đã thuộc hết phần này! Bỏ chọn “chỉ từ chưa thuộc” để ôn lại.</div>`;return}
  const x=tfDeck[tfi];
  $("#tfbody").innerHTML=`<div class="stat" style="text-align:right;margin-bottom:6px">${tfi+1}/${tfDeck.length} · ${x.l}</div>
  <div class="card flash" onclick="tfBack=!tfBack;tfFlashView()">
   ${tfBack?`<div class="zh" style="font-size:40px">${x.h}</div><div class="py">${x.p} <span class="pos">${x.pos}</span></div><div style="font-size:22px">${esc(x.m)}</div>`:`<div class="zh">${x.h}</div><div class="vi">(chạm để lật)</div>`}
  </div>
  <div class="row" style="justify-content:center">
   <button class="b" onclick="speak('${x.s}')">🔊 Nghe</button>
   <button class="b" onclick="tfAns(false)">😕 Chưa thuộc</button>
   <button class="b p" onclick="tfAns(true)">✅ Đã thuộc</button></div>`;
  if(!tfBack)speak(x.s);
}
function tfAns(ok){dayAdd("f");logHist("f",ok);const x=tfDeck[tfi];if(ok)prog.tk[x.k]=1;else delete prog.tk[x.k];save();tfi=(tfi+1)%tfDeck.length;tfBack=false;tfFlashView()}
function tfQuizView(){
  if(capped("q")){$("#tfbody").innerHTML=lockCard("quiz");return}
  const sc=tfScope();
  if(sc.length<4){$("#tfbody").innerHTML=`<div class="card">Cần ít nhất 4 từ để làm trắc nghiệm. Hãy chọn phạm vi rộng hơn.</div>`;return}
  const x=sc[Math.random()*sc.length|0],pool=tfByL(tfLv),wrong=[];
  while(wrong.length<3){const y=pool[Math.random()*pool.length|0];if(y.m!==x.m&&!wrong.some(w=>w.m===y.m))wrong.push(y)}
  tfQz={x,opts:sh([x,...wrong]),done:false};
  const modes=[["h2m","Nhìn chữ → nghĩa"],["a2m","Nghe → nghĩa"],["m2h","Nghĩa → chữ"]];
  const q=tfQm==="h2m"?`<div class="zh" style="font-size:54px;text-align:center">${x.h}</div><div class="py" style="text-align:center">${x.p}</div>`
    :tfQm==="a2m"?`<div style="text-align:center"><button class="b p" onclick="speak('${x.s}')">🔊 Nghe lại</button></div>`
    :`<div style="text-align:center;font-size:22px;margin:6px 0">${esc(x.m)}</div>`;
  $("#tfbody").innerHTML=`<div class="chips">${modes.map(([k,l])=>`<span class="chip ${tfQm===k?"on":""}" onclick="tfQmPick('${k}')">${l}${lockIc(isPro()||k==="h2m")}</span>`).join("")}</div>
  <div class="card">${q}<div id="tfopts" style="margin-top:12px">${tfQz.opts.map((o,i)=>`<button class="b opt" onclick="tfCheck(${i},this)">${tfQm==="m2h"?`<span class="zh" style="font-size:24px">${o.h}</span> <span class="py">${o.p}</span>`:esc(o.m)}</button>`).join("")}</div>
  <div id="tffb"></div><div class="stat" style="margin-top:8px">Chuỗi đúng liên tiếp: ${tfStreak}</div></div>`;
  if(tfQm==="a2m")speak(x.s);
}
function tfQmPick(k){if(!isPro()&&k!=="h2m"){showLock("mode");return}tfQm=k;tfQz=null;tfQuizView()}
function tfCheck(i,btn){
  if(tfQz.done)return;tfQz.done=true;const x=tfQz.x,ok=tfQz.opts[i]===x;mark(ok);
  btn.classList.add(ok?"ok":"bad");
  if(ok){prog.tk[x.k]=1;tfStreak++}else{delete prog.tk[x.k];tfStreak=0;[...document.querySelectorAll("#tfopts .opt")][tfQz.opts.indexOf(x)].classList.add("ok")}
  save();
  $("#tffb").innerHTML=`<div class="vi" style="margin:10px 0"><b class="zh">${x.h}</b> <span class="py">${x.p}</span> — ${esc(x.m)}</div><button class="b p" onclick="tfQuizView()">Câu tiếp ➜</button>`;
  if(tfQm!=="a2m")speak(x.s);
  track('tocfl_quiz',{level:x.l,correct:ok?1:0});
}

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
    if(k){const w=s.slice(i,i+k),[py,vi]=DICT[w];html+=`<ruby class="tap" onclick="speak('${w}')">${w}<rt>${py}</rt></ruby>`;if(!seen.has(w)){seen.add(w);gloss.push([w,py,vi])}i+=k}
    else{html+=s[i];i++}
  }
  return {html,gloss};
}
const glossHtml=g=>g.length?`<div class="gloss">${g.map(x=>`<span class="tap" onclick="speak('${x[0]}')"><b class="zh">${x[0]}</b> <i>${x[1]}</i> = ${x[2]} 🔊</span>`).join("")}</div>`:"";

/* ============ NGỮ PHÁP ============ */
function grammarView(){
  let html="",last=0;
  GRAMMAR.forEach((g,i)=>{
    if(!inL(g.l))return;
    if(g.l!==last){last=g.l;html+=`<div class="lh">${lesHead(last)} <span class="vi">— ${LES[last].vi}</span></div>`}
    const T=annotate(g.t),F=annotate(g.f),seen=new Set(),G=[...T.gloss,...F.gloss].filter(x=>!seen.has(x[0])&&seen.add(x[0]));
    html+=`<div class="card"><h3 class="gh">${T.html}</h3><div class="formula">${F.html}</div>${glossHtml(G)}<p style="margin:8px 0 10px">${g.d}</p>
    ${g.ex.map(e=>`<div class="ex"><div class="row"><span class="zh tap" onclick="speak('${e[0]}')">${e[0]}</span>${spkBtn(e[0])}</div><div class="py">${e[1]}</div><div class="vi">${e[2]}</div></div>`).join("")}</div>`;
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
  speakSeq(L.map(x=>({t:x[1],tag:"m",pitch:1})));
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
      lines.map(x=>`<div class="bub ${names.indexOf(x[0])%2?"r":"l"}"><div class="who">${x[0]}</div><div class="row"><span class="zh tap" style="font-size:22px" onclick="speak('${x[1]}')">${x[1]}</span>${spkBtn(x[1],"m")}</div>${rPy?`<div class="py">${x[2]}</div>`:""}${rVi?`<div class="vi">${x[3]}</div>`:""}</div>`).join("")+
      `<div style="margin-top:12px"><b>Đúng (O) hay sai (X)?</b>${rows(D.q).map((r,i)=>{
        const [s,a]=r.split("|"),k=n+"-"+i,done=rAns[k];
        return `<div class="qq">${s}<div class="row" style="margin-top:4px">${["O","X"].map(v=>`<button class="b ${done&&v===a?"ok":done&&v===done?"bad":""}" onclick="rAnswer('${k}','${v}','${a}')">${v}</button>`).join("")}${done?`<span class="stat">${done===a?"✅ Đúng":"❌ Đáp án: "+a}</span>`:""}</div></div>`}).join("")}</div></div>`;
    }
    TRANS.filter(t=>t[3]===n&&tLenOf(t)==="para").forEach(t=>{
      html+=`<div class="card"><div class="row" style="justify-content:space-between;margin-bottom:8px"><h3 style="margin:0">📄 Đoạn văn ngắn</h3><button class="b p" onclick="playPara('${t[1]}')">▶ Nghe cả đoạn</button></div>
      <div class="zh" style="font-size:22px;line-height:1.7">${t[1].split(/(?<=[。！？])/).filter(Boolean).map(s=>`<span class="tap" onclick="speak('${s}')">${s}</span>`).join("")}</div>${rPy?`<div class="py" style="margin-top:6px">${t[2]}</div>`:""}${rVi?`<div class="vi" style="margin-top:6px">${t[0]}</div>`:""}</div>`;
    });
  });
  $("#app").innerHTML=html||"<div class='card vi'>Chưa có bài đọc cho phạm vi này.</div>";
}

/* ============ TRUYỆN ĐỌC + CHẤM PHÁT ÂM ============ */
const SRC=window.SpeechRecognition||window.webkitSpeechRecognition;   // nhận dạng giọng nói của trình duyệt (Chrome, Safari)
let rec=null,recKey="";
const idleMics=()=>document.querySelectorAll(".mic").forEach(b=>{b.classList.remove("rec");b.textContent=b.dataset.label||"🎤 Đọc thử"});
function stopRec(){            // hủy hẳn (đổi tab, bấm câu khác): không chấm
  const S=rec;rec=null;recKey="";
  if(S){S.done=true;S.userStop=true;clearTimeout(S.timer);clearInterval(S.tick);try{S.r.abort()}catch(e){}}
  idleMics();
}
const NAMES=/小美|大衛|大明|小明|安同|如玉|月美|美月|田中|小王|怡君|開文/g;   // tên riêng: bộ nhận dạng hay viết khác chữ nên không chấm
// Tách câu thành các từ theo từ điển của web (từ dài nhất trước); chữ lạ tách từng chữ
function segmentWords(s){
  const cs=[...s].filter(isHan),raw=cs.join(""),out=[];let i=0;
  const names=[];let mm;NAMES.lastIndex=0;while((mm=NAMES.exec(raw)))names.push([mm.index,mm[0].length]);
  while(i<cs.length){
    const nm=names.find(x=>x[0]===i);if(nm){out.push(raw.slice(i,i+nm[1]));i+=nm[1];continue}   // tên riêng là một từ
    let k=1;for(let L=Math.min(6,cs.length-i);L>=2;L--){if(DICT[cs.slice(i,i+L).join("")]){k=L;break}}
    out.push(cs.slice(i,i+k).join(""));i+=k;
  }
  return out;
}
const DIGH="零一二三四五六七八九";
function numHan(n){   // 0–9999 → chữ Hán (110 → 一百一十)
  if(n<10)return DIGH[n];
  if(n<100){const t=n/10|0,u=n%10;return(t>1?DIGH[t]:"")+"十"+(u?DIGH[u]:"")}
  let s="",r=n,started=false,zero=false;
  for(const [v,u] of [[1000,"千"],[100,"百"]]){const q=r/v|0;if(q){if(zero)s+="零";s+=DIGH[q]+u;started=true;zero=false}else if(started)zero=true;r%=v}
  if(r){if(zero||(started&&r<10))s+="零";if(r<10)s+=DIGH[r];else{const t=r/10|0,u=r%10;s+=DIGH[t]+"十"+(u?DIGH[u]:"")}}
  return s;
}
const digHan=s=>s.replace(/\d+/g,m=>+m<=9999?numHan(+m):[...m].map(d=>DIGH[+d]).join(""));
const EQV={"兩":"二","她":"他","牠":"他","妳":"你","裏":"裡","台":"臺"};   // các chữ nghe giống nhau, không tính là sai
const normHan=s=>[...digHan(s)].map(c=>S2T[c]||c).filter(isHan).map(c=>EQV[c]||c);
// So chữ Hán nhận dạng được với văn bản mẫu bằng LCS; tên riêng không chấm. Dùng được cho một câu hoặc cả truyện.
function alignHits(target,heard){
  const raw=[...target].filter(isHan).join(""),T=normHan(target),H=normHan(heard);
  const skip=new Array(T.length).fill(false);let mm;NAMES.lastIndex=0;
  while((mm=NAMES.exec(raw)))for(let k=0;k<mm[0].length;k++)skip[mm.index+k]=true;
  const idx=T.map((_,i)=>i).filter(i=>!skip[i]),T2=idx.map(i=>T[i]),n=T2.length,m=H.length;
  const dp=Array.from({length:n+1},()=>new Array(m+1).fill(0));
  for(let i=1;i<=n;i++)for(let j=1;j<=m;j++)dp[i][j]=T2[i-1]===H[j-1]?dp[i-1][j-1]+1:Math.max(dp[i-1][j],dp[i][j-1]);
  const hit=T.map((_,i)=>skip[i]);let i=n,j=m,ok=0;
  while(i>0&&j>0){if(T2[i-1]===H[j-1]){hit[idx[i-1]]=true;ok++;i--;j--}else if(dp[i-1][j]>=dp[i][j-1])i--;else j--}
  return{T,H,skip,hit,n,ok,score:n?ok/n:1};
}
function wordMarks(sentence,A,offset){   // đánh dấu từng từ của một câu nằm ở vị trí offset trong văn bản mẫu
  let pos=offset;
  return segmentWords(sentence).map(w=>{
    const len=[...w].length,ok=A.hit.slice(pos,pos+len).every(Boolean),name=A.skip.slice(pos,pos+len).every(Boolean);pos+=len;
    const d=DICT[w];return{w,ok,name,py:d?d[0]:"",vi:d?d[1]:""};
  });
}
function sentScore(A,offset,len){let n=0,ok=0;for(let k=offset;k<offset+len;k++)if(!A.skip[k]){n++;if(A.hit[k])ok++}return n?ok/n:1}
function compareRead(target,heard){
  const A=alignHits(target,heard);
  return{score:A.score,marks:wordMarks(target,A,0),heard:A.H.join("")};
}
function bestAlt(target,alts){   // trình duyệt đưa vài phương án nghe; lấy phương án gần câu mẫu nhất
  const T=normHan(target);let best=alts[0]||"",bs=-1;
  alts.forEach(t=>{const H=normHan(t),pool=[...T];let s=0;H.forEach(c=>{const i=pool.indexOf(c);if(i>=0){s++;pool.splice(i,1)}});if(s>bs){bs=s;best=t}});
  return best;
}
function storyBest(si,li){return (prog.say||{})[skey(si,li)]||0}
const chipsHtml=marks=>`<div class="words">${marks.map(m=>`<span class="w ${m.name?"name":m.ok?"ok":"bad"} tap" onclick="speak('${m.w}')">${m.w}<small>${m.name?"tên riêng":m.py}</small></span>`).join("")}</div>`;
const needHtml=marks=>{const bad=marks.filter(m=>!m.ok&&!m.name);return bad.length?`<div class="stat">Cần luyện: ${bad.map(m=>`<b class="zh">${m.w}</b> ${m.py}${m.vi?" ("+m.vi+")":""}`).join(" · ")}</div>`:""};
function showReadResult(si,li,r,heardRaw){
  const pct=Math.round(r.score*100),box=$("#fb-"+si+"-"+li);if(!box)return;track('story_sentence',{score:pct,lesson:STORIES[si].n});
  prog.say=prog.say||{};if(pct/100>(prog.say[skey(si,li)]||0)){prog.say[skey(si,li)]=pct/100;save()}
  const msg=pct>=90?"🎉 Tuyệt vời! Phát âm rất chuẩn.":pct>=70?"👍 Khá tốt. Luyện lại các từ màu đỏ nhé.":"💪 Chưa chuẩn lắm. Bấm vào từ đỏ để nghe mẫu rồi đọc chậm hơn.";
  box.innerHTML=`<div class="rr ${pct>=70?"good":"low"}"><div><b>${pct}%</b> ${msg}</div>${chipsHtml(r.marks)}${needHtml(r.marks)}
   <div class="stat">Máy nghe được: <span class="zh">${r.heard||"(không rõ)"}</span></div>${heardRaw!=null?diffBlock(heardRaw,rows(STORIES[si].l)[li].split("|")[0]):""}</div>`;
  const bd=$("#bd-"+si+"-"+li);if(bd)bd.textContent=Math.round(storyBest(si,li)*100)+"%";
  const av=$("#avg-"+si);if(av)av.textContent=storyAvg(si);
}
function storyAvg(si){const n=rows(STORIES[si].l).length;let s=0,c=0;for(let li=0;li<n;li++){const b=storyBest(si,li);if(b){s+=b;c++}}return c?"Điểm đọc từng câu: "+Math.round(s/c*100)+"% ("+c+"/"+n+" câu)":""}
const fullBadge=si=>{const f=(prog.full||{})[STORIES[si].zh];return f?`Đọc liền: ${f.p}% · trôi chảy ${f.f}%`:""};

// ---- Ghi âm và nhận dạng: dùng chung cho một câu và cho cả truyện ----
function finishRec(){          // bấm "Dừng và chấm"
  const S=rec;if(!S||S.done)return;
  S.userStop=true;clearTimeout(S.timer);clearInterval(S.tick);
  try{S.r.stop()}catch(e){}
  setTimeout(()=>{if(!S.done&&S.r.onend)S.r.onend()},2500);   // phòng khi trình duyệt không báo kết thúc
}
// key: "si-li" hoặc "si-all"; quiet: số ms im lặng thì tự chấm; maxMs: thời gian tối đa; onResult(text, info)
function recordTarget(key,target,o,onResult){
  const btn=$("#mic-"+key),box=$("#fb-"+key);
  if(rec&&recKey===key){finishRec();return}                       // bấm lần nữa = dừng và chấm
  if(!SRC){toast("Trình duyệt này chưa hỗ trợ nhận dạng giọng nói. Hãy dùng Chrome hoặc Safari (Mac, iPhone).");return}
  stopSpeak();stopRec();
  const S={prefix:"",cur:"",userStop:false,done:false,fatal:false,r:null,timer:0,tick:0,startAt:Date.now(),lastAt:0,stamps:[],listenAt:0,confs:[],curConf:{}};
  rec=S;recKey=key;
  const live=()=>{box.innerHTML=`<div class="stat">🎙 Hãy đọc to${o.whole?" cả truyện, liền một mạch":" cả câu"}. <b>Đọc xong bấm nút đỏ “Dừng và chấm”, hoặc chờ khoảng ${Math.round(o.quiet/1000)} giây, web sẽ tự chấm.</b></div><div class="stat">Máy đang nghe: <span class="zh">${esc(S.prefix+S.cur)||"…"}</span></div>`};
  const finalize=()=>{
    if(S.done)return;S.done=true;clearTimeout(S.timer);clearInterval(S.tick);
    if(rec===S){rec=null;recKey=""}idleMics();
    if(S.fatal)return;
    const text=(S.prefix+S.cur).trim();
    if(!text){if(o.onEmpty)o.onEmpty();else box.innerHTML=`<div class="rr low">Chưa nghe thấy giọng bạn. Bấm 🎤 và đọc to hơn nhé.</div>`;return}
    S.confs.push(...Object.values(S.curConf));S.curConf={};
    const st=S.stamps;let pauses=0,longest=0;
    for(let i=1;i<st.length;i++){const g=st[i]-st[i-1];if(g>2000)pauses++;if(g>longest)longest=g}
    onResult(text,{pauses,longest,dur:st.length>1?st[st.length-1]-st[0]:0,first:st[0]||0,listenAt:S.listenAt,conf:S.confs.length?S.confs.reduce((x,y)=>x+y,0)/S.confs.length:null});
  };
  const start=()=>{
    const r=new SRC();S.r=r;
    r.lang="zh-TW";r.continuous=true;r.interimResults=true;r.maxAlternatives=3;
    r.onstart=()=>{if(!S.listenAt)S.listenAt=Date.now();idleMics();btn.classList.add("rec");btn.textContent="⏹ Dừng và chấm";live()};
    r.onresult=e=>{
      const cur=[...e.results].map(x=>bestAlt(target,[...x].map(y=>y.transcript))).join("");
      [...e.results].forEach((x,i)=>{if(x.isFinal&&x[0].confidence>0)S.curConf[i]=x[0].confidence});
      if(cur!==S.cur){S.stamps.push(Date.now());S.lastAt=Date.now()}
      S.cur=cur;live();
    };
    r.onerror=e=>{
      if(e.error==="no-speech"||e.error==="aborted")return;       // im lặng lâu: bỏ qua, bật lại nghe tiếp
      S.fatal=true;
      const m={"not-allowed":"Bạn chưa cho phép dùng micro. Bấm biểu tượng khóa ở thanh địa chỉ, cho phép Micro rồi thử lại.","service-not-allowed":"Trình duyệt không cho dùng nhận dạng giọng nói ở đây.","audio-capture":"Không tìm thấy micro.","network":"Cần có mạng: Chrome gửi âm thanh lên Google để nhận dạng."}[e.error];
      box.innerHTML=`<div class="rr low">${m||"Lỗi nhận dạng giọng nói ("+e.error+")."}</div>`;
    };
    r.onend=()=>{
      if(S.done)return;
      S.confs.push(...Object.values(S.curConf));S.curConf={};
      S.prefix+=S.cur;S.cur="";
      if(S.userStop||S.fatal){finalize();return}
      try{start()}catch(x){finalize()}                            // trình duyệt tự ngắt khi bạn ngừng nói một lúc → bật lại, tiếp tục nghe cho đến khi bạn bấm dừng
    };
    try{r.start()}catch(e){toast("Không bật được micro: "+e.message);S.fatal=true;finalize()}
  };
  start();
  S.tick=setInterval(()=>{
    if(S.done||S.userStop)return;
    const said=(S.prefix+S.cur).trim();
    if(said&&S.lastAt&&Date.now()-S.lastAt>o.quiet)finishRec();          // đã đọc xong, im lặng đủ lâu → tự chấm
    else if(!said&&Date.now()-S.startAt>o.idle)finishRec();               // quá lâu không nghe gì → dừng
  },500);
  S.timer=setTimeout(()=>{if(!S.done)finishRec()},o.max);
}
function readAloud(si,li){      // luyện từng câu
  const target=rows(STORIES[si].l)[li].split("|")[0];
  recordTarget(si+"-"+li,target,{quiet:4000,idle:15000,max:120000},text=>showReadResult(si,li,compareRead(target,text),text));
}

// ---- Ghép cả truyện: đọc liền một mạch, chấm từng câu + độ trôi chảy ----
function fluencyOf(info,okChars,minDur=3000){
  if(info.dur<minDur||!okChars)return null;
  const cpm=Math.round(okChars/(info.dur/60000));
  const speed=Math.min(100,cpm);                                    // từ 100 chữ/phút trở lên là đủ nhanh cho người học
  const penalty=Math.min(50,info.pauses*8)+(info.longest>4000?Math.min(20,Math.round((info.longest-4000)/500)):0);
  return{cpm,score:Math.max(0,Math.min(100,Math.round(speed-penalty)))};
}
function readWhole(si){
  const ls=rows(STORIES[si].l).map(r=>r.split("|")[0]),target=ls.join("");
  recordTarget(si+"-all",target,{whole:true,quiet:7000,idle:20000,max:300000},(text,info)=>{
    const A=alignHits(target,text),box=$("#fb-"+si+"-all");let off=0;
    const per=ls.map(s=>{const len=[...s].filter(isHan).length,r={s,score:sentScore(A,off,len),marks:wordMarks(s,A,off)};off+=len;return r});
    const pct=Math.round(A.score*100),fl=fluencyOf(info,A.ok),flu=fl?fl.score:null;track('story_whole',{pronunciation:pct,fluency:flu,lesson:STORIES[si].n});
    prog.full=prog.full||{};const old=prog.full[STORIES[si].zh];
    if(!old||pct>old.p){prog.full[STORIES[si].zh]={p:pct,f:flu==null?(old?old.f:0):flu};save()}
    const bd=$("#full-"+si);if(bd)bd.textContent=fullBadge(si);
    const msgP=pct>=90?"Phát âm rất chuẩn.":pct>=70?"Phát âm khá tốt, luyện lại vài chỗ đỏ.":"Cần luyện thêm phát âm từng câu rồi ghép lại.";
    const msgF=flu==null?"Đọc thêm một chút để đo độ trôi chảy.":flu>=80?"Đọc khá trôi chảy.":flu>=50?"Hơi ngập ngừng, thử đọc liền mạch hơn.":"Còn ngắt quãng nhiều, hãy luyện từng câu rồi ghép lại.";
    box.innerHTML=`<div class="rr ${pct>=70?"good":"low"}">
      <div class="big"><b>${pct}%</b> phát âm${flu==null?"":` · <b>${flu}%</b> trôi chảy`}</div>
      <div>${msgP} ${msgF}</div>
      <div class="stat">⏱ ${(info.dur/1000).toFixed(0)} giây${fl?` · khoảng ${fl.cpm} chữ/phút (đọc thoải mái: 100–200)`:""} · ${info.pauses} lần ngập ngừng trên 2 giây${info.longest>2000?`, lâu nhất ${(info.longest/1000).toFixed(1)} giây`:""}</div>
      <div class="stat" style="margin-top:8px"><b>Từng câu:</b></div>
      ${per.map((p,i)=>`<div class="sres"><div class="row"><b class="${p.score>=0.7?"okc":"badc"}">${Math.round(p.score*100)}%</b><span class="zh tap" style="font-size:18px" onclick="speak('${p.s}')">${p.s}</span></div>${chipsHtml(p.marks)}</div>`).join("")}
      <div class="stat">Máy nghe được: <span class="zh">${A.H.join("")||"(không rõ)"}</span></div>
      <div class="stat">Điểm trôi chảy dựa vào tốc độ và số lần dừng lâu giữa các lần nhận dạng, chỉ mang tính tham khảo.</div></div>`;
  });
}
function playStory(si){toast("🔊 Đang đọc…");speakSeq(rows(STORIES[si].l).map(r=>({t:r.split("|")[0],tag:"m",pitch:1})))}
function restory(){const y=window.scrollY;storyView();window.scrollTo(0,y)}
function storyView(){
  let html=`<div class="row" style="margin-bottom:10px"><label><input type="checkbox" ${rPy?"checked":""} onchange="rPy=this.checked;restory()"> Hiện pinyin</label><label><input type="checkbox" ${rVi?"checked":""} onchange="rVi=this.checked;restory()"> Hiện tiếng Việt</label><button class="b" onclick="stopSpeak();stopRec()">⏹ Dừng</button></div>
  <div class="card tip">🎤 <b>Cách luyện 2 bước:</b><br><b>Bước 1 · từng câu:</b> bấm 🔊 nghe mẫu, rồi bấm <b>🎤 Đọc thử</b> và đọc to. Web đánh dấu từ nào đọc chưa chuẩn (<span class="w bad" style="font-size:15px;padding:1px 8px">đỏ</span>).<br><b>Bước 2 · ghép cả truyện:</b> kéo xuống cuối truyện, bấm <b>🎤 Đọc liền cả truyện</b> và đọc một mạch từ đầu đến cuối. Web chấm phát âm từng câu và đo <b>độ trôi chảy</b> (tốc độ, số lần ngập ngừng). Chấm điểm dựa trên bộ nhận dạng giọng nói của trình duyệt nên chỉ mang tính tham khảo.${SRC?"":" <b>Trình duyệt này chưa hỗ trợ chấm phát âm, hãy mở bằng Chrome hoặc Safari.</b>"}</div>`;
  let lastL=0;
  STORIES.forEach((S,si)=>{
    if(!inL(S.n))return;
    const ls=rows(S.l).map(r=>r.split("|"));
    if(S.n!==lastL){lastL=S.n;html+=`<div class="lh">${lesHead(S.n)} <span class="vi">— ${LES[S.n].vi}</span></div>`}
    html+=`<div class="card"><div class="row" style="justify-content:space-between;margin-bottom:6px"><h3 style="margin:0">📖 <span class="gh">${annotate(S.zh).html}</span> <span class="vi">· ${S.vi}</span></h3><button class="b p" onclick="playStory(${si})">▶ Nghe cả truyện</button></div>
    <div class="stat" id="avg-${si}" style="margin-bottom:4px">${storyAvg(si)}</div><div class="stat"><b>Bước 1 · Luyện từng câu</b></div>`+
    ls.map((x,li)=>`<div class="sl"><div class="row"><span class="zh tap" style="font-size:24px" onclick="speak('${x[0]}')">${x[0]}</span></div>${rPy?`<div class="py">${x[1]}</div>`:""}${rVi?`<div class="vi">${x[2]}</div>`:""}
     <div class="row" style="margin-top:6px">${spkBtn(x[0])}<button class="b mic" id="mic-${si}-${li}" onclick="readAloud(${si},${li})">🎤 Đọc thử</button><span class="badge" id="bd-${si}-${li}">${storyBest(si,li)?Math.round(storyBest(si,li)*100)+"%":""}</span></div><div id="fb-${si}-${li}"></div></div>`).join("")+
    `<div class="whole"><div class="row" style="justify-content:space-between"><b>🧩 Bước 2 · Ghép cả truyện, đọc liền một mạch</b><span class="badge" id="full-${si}">${fullBadge(si)}</span></div>
     <div class="zh whole-text">${ls.map(x=>`<span class="tap" onclick="speak('${x[0]}')">${x[0]}</span>`).join("")}</div>
     ${rPy?`<div class="py">${ls.map(x=>x[1]).join(" ")}</div>`:""}${rVi?`<div class="vi" style="margin-top:4px">${ls.map(x=>x[2]).join(" ")}</div>`:""}
     <div class="row" style="margin-top:10px"><button class="b p" onclick="playStory(${si})">▶ Nghe mẫu cả truyện</button><button class="b mic" data-label="🎤 Đọc liền cả truyện" id="mic-${si}-all" onclick="readWhole(${si})">🎤 Đọc liền cả truyện</button></div><div id="fb-${si}-all"></div></div></div>`;
  });
  $("#app").innerHTML=html;
}

/* ============ SỬA CÂU: sửa lỗi ngữ pháp thường gặp + dựng lại câu theo ý người nói ============ */
const cleanHan=s=>[...digHan(s)].map(c=>S2T[c]||c).filter(isHan).join("");
const PR="(?:我們|你們|他們|我|你|他|她)";
const ADJS="好吃|好喝|好看|好玩|漂亮|便宜|乾淨|貴|冷|熱|忙|累|難|近|遠|甜|辣|快|慢|大|小|高|矮|涼|暖和";
const TIMEW="今天|明天|昨天|現在|晚上|早上|下午|中午|每天|週末";
const FIXES=[
  {re:/(.)\1+/g,test:m=>"我你他是有在也都很不".includes(m[1]),rep:"$1",tip:"Bạn đang lặp từ (nói lắp), chỉ cần nói một lần."},
  {re:/(叫|姓)的/g,rep:"$1",tip:"Không dùng 的 sau 叫/姓: 我叫大明."},
  {re:/二(個|杯|碗|張|支|條|件|雙|本|家|次)/g,rep:"兩$1",tip:"Trước lượng từ dùng 兩 (hai), không dùng 二: 兩個, 兩杯…"},
  {re:/不有/g,rep:"沒有",tip:"Phủ định của 有 là 沒有, không nói 不有."},
  {re:/沒是/g,rep:"不是",tip:"Phủ định của 是 là 不是, không nói 沒是."},
  {re:/是也/g,rep:"也是",tip:"也 (cũng) đứng trước động từ: 我也是學生."},
  {re:/是都/g,rep:"都是",tip:"都 (đều) đứng trước động từ: 我們都是學生."},
  {re:new RegExp("^("+PR+")(越南人|美國人|日本人|臺灣人|中國人|學生|老師|同學|醫生)$"),rep:"$1是$2",tip:"Danh từ chỉ quốc tịch/nghề nghiệp làm vị ngữ cần 是: 我是學生."},
  {re:new RegExp("是很(?=" +ADJS+ ")","g"),rep:"很",tip:"Tính từ làm vị ngữ không dùng 是: 我很忙 (không nói 我是很忙)."},
  {re:new RegExp("比(.{1,6}?)很("+ADJS+")"),rep:"比$1$2",tip:"Trong câu so sánh 比 không dùng 很: 高鐵比火車快."},
  {re:/^(.{1,6})有(前面|後面|旁邊|上面|下面|裡面|外面)$/,rep:"$1在$2",tip:"Chỉ vị trí của một vật dùng 在: 圖書館在教室後面."},
  {re:/^(.{1,6})到(.{1,6})很(近|遠)$/,rep:"$1離$2很$3",tip:"Khoảng cách giữa hai nơi dùng 離: 我家離學校很近."},
  {re:new RegExp("^("+PR+")(.{2,8}?)((?:"+TIMEW+")(?:[一二三四五六七八九十兩]+點(?:半|[一二三四五六七八九十]+分)?)?)$"),test:m=>/[去吃看喝做買上學玩打游睡起坐騎]/.test(m[2]),rep:"$1$3$2",tip:"Từ chỉ thời gian đứng trước động từ: 我明天去學校."},
  {re:new RegExp("^("+PR+")(吃飯|看書|工作|上課|睡覺|喝茶|學中文|做飯|看電影|運動|吃晚飯|吃早飯)在(家|學校|圖書館|咖啡店|公司|宿舍|這裡|那裡)$"),rep:"$1在$3$2",tip:"在 + địa điểm đứng trước động từ: 我在家吃飯."},
  {re:/(兩|三|四|五|六|七|八|九)(哥哥|姐姐|弟弟|妹妹|朋友|學生|老師|同學|人)/g,rep:"$1個$2",tip:"Giữa số và danh từ cần lượng từ 個: 兩個哥哥, 四個人."},
  {re:/一(哥哥|姐姐|弟弟|妹妹|朋友|學生|老師|同學)/g,rep:"一個$1",tip:"Giữa số và danh từ cần lượng từ 個: 一個哥哥."},
  {re:/是([一二三四五六七八九十兩]+)歲/,rep:"$1歲",tip:"Nói tuổi không dùng 是: 我二十五歲."},
  {re:/^(我|他|她)(會)?說(中文|越南話|英文)(很|不)(好|錯|流利)$/,rep:"$1$3說得$4$5",tip:"Đánh giá mức độ của hành động dùng V得: 我中文說得很好."},
  {re:/(.+?)還是(.+)/,rep:"$1",tip:"還是 chỉ dùng khi HỎI lựa chọn. Khi trả lời, hãy chọn một đáp án."},
  {re:/嗎$/,rep:"",tip:"Câu trả lời không cần 嗎 (嗎 dùng khi đặt câu hỏi)."}
];
function grammarFix(text){
  let t=cleanHan(text);const tips=[];
  FIXES.forEach(f=>{
    const re=new RegExp(f.re.source,f.re.flags),m=t.match(new RegExp(f.re.source,f.re.flags.replace("g","")));
    if(!m||(f.test&&!f.test(m)))return;
    const n=t.replace(re,f.rep);if(n!==t){tips.push(f.tip);t=n}
  });
  // thiếu 很 trước tính từ ở cuối câu: 今天冷 → 今天很冷
  const m=t.match(new RegExp("^(.+?)("+ADJS+")$"));
  if(m&&!/(很|太|真|不|最|更|非常|比較|有點|又|覺得|比|得|一點)$/.test(m[1])&&!/(比|沒有)/.test(m[1])){t=m[1]+"很"+m[2];tips.push("Tính từ làm vị ngữ thường cần 很 phía trước: 今天很冷.")}
  return{text:t,tips};
}
// So sánh hai chuỗi chữ Hán theo từng chữ: a = bạn nói (chữ thừa gạch đỏ), b = câu đúng (chữ thêm/sửa tô xanh)
function diffHtml(a,b){
  const A=[...a],B=[...b],n=A.length,m=B.length;
  const dp=Array.from({length:n+1},()=>new Array(m+1).fill(0));
  for(let i=1;i<=n;i++)for(let j=1;j<=m;j++)dp[i][j]=A[i-1]===B[j-1]?dp[i-1][j-1]+1:Math.max(dp[i-1][j],dp[i][j-1]);
  const ra=[],rb=[];let i=n,j=m;
  while(i>0||j>0){
    if(i>0&&j>0&&A[i-1]===B[j-1]){ra.push(esc(A[i-1]));rb.push(esc(B[j-1]));i--;j--}
    else if(j>0&&(i===0||dp[i][j-1]>=dp[i-1][j])){rb.push(`<span class="ins">${esc(B[j-1])}</span>`);j--}
    else{ra.push(`<span class="del">${esc(A[i-1])}</span>`);i--}
  }
  return{a:ra.reverse().join(""),b:rb.reverse().join("")};
}
// Khối "Bạn nói / Đúng là" dùng khi đọc theo một câu mẫu cố định
function diffBlock(heard,target){
  const H=cleanHan(heard),T=cleanHan(target);
  if(!H||H===T)return"";
  const d=diffHtml(H,T);
  return `<div class="fix"><div class="stat"><b>✏️ So với câu đúng</b></div><div>Bạn nói: <span class="zh">${d.a}</span></div><div>Đúng là: <span class="zh">${d.b}</span></div><div class="py">${annotate(T).html}</span></div></div>`;
}
// Khối sửa câu cho vấn đáp: chỉ sửa lỗi ngữ pháp, trên chính lời người nói (không dùng câu mẫu)
function fixBlock(Q,text,E){
  const g=grammarFix(text),heard=cleanHan(text),corrected=g.text;
  if(!g.tips.length)return `<div class="fix ok"><b>✅ Câu của bạn đúng ngữ pháp.</b> Chỉ cần đúng ngữ pháp và phát âm là tốt, không cần giống câu mẫu.</div>`;
  const d=diffHtml(heard,corrected);
  return `<div class="fix"><div class="stat"><b>✏️ Sửa lại câu của bạn</b></div>
   <div>Bạn nói: <span class="zh">${d.a}</span></div>
   <div>Sửa thành: <span class="zh tap" onclick="speak('${corrected}')">${d.b}。</span> ${spkBtn(corrected)}</div>
   <div class="py" id="fix-py">${annotate(corrected).html}</div>
   <ul class="tips">${g.tips.map(n=>`<li>${n}</li>`).join("")}</ul>
   <div class="row" style="margin-top:6px"><button class="b mic" data-label="🎤 Đọc lại câu đã sửa" id="mic-qa3" onclick="qaFixRead('${corrected}')">🎤 Đọc lại câu đã sửa</button></div><div id="fb-qa3"></div></div>`;
}
function qaFixRead(target){
  recordTarget("qa3",target,{quiet:4000,idle:15000,max:60000},text=>{
    const r=compareRead(target,text),pct=Math.round(r.score*100);
    $("#fb-qa3").innerHTML=`<div class="rr ${pct>=70?"good":"low"}"><div><b>${pct}%</b> ${pct>=90?"🎉 Đọc rất chuẩn.":pct>=70?"👍 Khá tốt.":"💪 Bấm từ đỏ để nghe mẫu rồi đọc lại."}</div>${chipsHtml(r.marks)}${needHtml(r.marks)}${diffBlock(text,target)}</div>`;
  });
}

/* ============ VẤN ĐÁP PHẢN XẠ: web hỏi bằng giọng nói, bạn trả lời ngay ============ */
const QA=rows(QA_DATA).map(r=>{const p=r.split("|");return{n:+p[0],q:p[1],qpy:p[2],qvi:p[3],a:p[4],apy:p[5],avi:p[6],keys:p[7].split(";").map(g=>g.split("/"))}});
let qaHide=true,qaAuto=true,qaCur=null,qaSess=null,qaTimer=0,qaLast=null,qaSeen=[];
const QA_LEN=10,QA_WAIT=9;       // 10 câu mỗi phiên; 9 giây để bắt đầu trả lời
function qaPick(){
  let pool=QA.filter(q=>inL(q.n));if(!pool.length)pool=QA;
  let fresh=pool.filter(q=>!qaSeen.includes(q.q));
  if(!fresh.length){qaSeen=[];fresh=pool.filter(q=>q.q!==(qaLast&&qaLast.q));if(!fresh.length)fresh=pool}
  const q=fresh[Math.random()*fresh.length|0];qaSeen.push(q.q);return q;
}
function qaView(){
  clearInterval(qaTimer);
  const t=prog.qa||{done:0,sum:0};
  $("#app").innerHTML=`<div class="card tip">🎙 <b>Vấn đáp phản xạ:</b> web <b>hỏi bằng giọng nói</b> (tiếng Trung), bạn <b>trả lời ngay</b> bằng tiếng Trung. Web tự bật micro sau khi hỏi xong và tính <b>thời gian phản xạ</b>. Bạn <b>không cần nói giống câu mẫu</b>: chỉ cần câu <b>đúng ngữ pháp</b> và <b>phát âm rõ</b>. Sau mỗi câu, web chấm <b>ngữ pháp</b>, <b>phản xạ</b>, <b>độ rõ phát âm</b> và <b>độ trôi chảy</b>; nếu có lỗi ngữ pháp, web <b>sửa ngay trên câu bạn vừa nói</b>. Câu mẫu chỉ để tham khảo. Câu hỏi lấy theo bài đang chọn ở ô “Phạm vi”.${SRC?"":" <b>Trình duyệt này chưa hỗ trợ nhận dạng giọng nói, hãy mở bằng Chrome hoặc Safari.</b>"}</div>
  <div class="card"><div class="row"><label><input type="checkbox" ${qaHide?"checked":""} onchange="qaHide=this.checked"> Chỉ nghe, ẩn chữ câu hỏi (luyện nghe)</label><label><input type="checkbox" ${qaAuto?"checked":""} onchange="qaAuto=this.checked"> Tự bật micro sau khi hỏi</label></div>
  <div class="row" style="margin-top:12px"><button class="b p" onclick="qaStart(${QA_LEN})">▶ Bắt đầu phiên ${QA_LEN} câu</button><button class="b" onclick="qaStart(1)">🔀 Hỏi 1 câu ngẫu nhiên</button></div>
  <div class="stat" style="margin-top:10px">Có ${QA.filter(q=>inL(q.n)).length} câu hỏi trong phạm vi đang chọn.${t.done?` Bạn đã trả lời ${t.done} câu, điểm trung bình ${Math.round(t.sum/t.done)}%.`:""}</div></div><div id="qa-stage"></div>`;
}
function qaStart(n){qaSess={n,i:0,res:[]};track('qa_start',{questions:n});qaAsk()}
function qaAsk(){
  stopSpeak();stopRec();clearInterval(qaTimer);
  qaCur=qaPick();qaLast=qaCur;const Q=qaCur,k=qaSess?qaSess.i+1:1,N=qaSess?qaSess.n:1;
  const stage=$("#qa-stage");if(!stage)return;
  stage.innerHTML=`<div class="card"><div class="stat">Câu ${k}/${N} · ${lesTag(Q.n)}</div>
   <div id="qa-q" class="qa-q">${qaHide?"🔊 Nghe kỹ câu hỏi…":`<span class="zh tap" onclick="speak('${Q.q}')">${Q.q}</span>`}</div>
   <div id="qa-hint">${qaHide?"":`${rPy?`<div class="py">${Q.qpy}</div>`:""}${rVi?`<div class="vi">${Q.qvi}</div>`:""}`}</div>
   <div class="row" style="margin-top:10px"><button class="b" onclick="qaReplay()">🔊 Nghe lại câu hỏi</button><button class="b" onclick="qaShowQ()">👁 Hiện chữ</button>
   <button class="b mic" data-label="🎤 Trả lời" id="mic-qa" onclick="qaAnswer(false)">🎤 Trả lời</button><button class="b" onclick="qaSkip()">⏭ Bỏ qua</button></div>
   <div id="qa-timer" class="stat" style="margin-top:8px"></div><div id="fb-qa"></div></div>`;
  qaPlayQuestion(()=>{if(qaAuto&&SRC)qaAnswer(true)});
}
function qaPlayQuestion(after){
  const Q=qaCur;
  playClip(Q.q,{tag:"m",onend:()=>{if(qaCur===Q&&after)after()},onfail:()=>{if(qaCur===Q)say(Q.q,{onend:()=>{if(qaCur===Q&&after)after()}})}});
}
function qaReplay(){stopRec();clearInterval(qaTimer);$("#qa-timer").textContent="";$("#fb-qa").innerHTML="";qaPlayQuestion(null)}
function qaShowQ(){const Q=qaCur;if(!Q)return;$("#qa-q").innerHTML=`<span class="zh tap" onclick="speak('${Q.q}')">${Q.q}</span>`;$("#qa-hint").innerHTML=`<div class="py">${Q.qpy}</div><div class="vi">${Q.qvi}</div>`}
function qaSkip(){stopRec();clearInterval(qaTimer);qaRecord(null);qaNextStep()}
function qaAnswer(auto){
  const Q=qaCur;if(!Q)return;
  if(!SRC){toast("Trình duyệt này chưa hỗ trợ nhận dạng giọng nói. Hãy dùng Chrome hoặc Safari.");return}
  clearInterval(qaTimer);
  const timerEl=$("#qa-timer");
  recordTarget("qa","",{quiet:2500,idle:QA_WAIT*1000,max:40000,qa:true,
    onEmpty:()=>{clearInterval(qaTimer);timerEl.textContent="";qaResult(null,null)}},
   (text,info)=>{clearInterval(qaTimer);timerEl.textContent="";qaResult(text,info)});
  qaTimer=setInterval(()=>{                       // đếm ngược 9 giây để bắt đầu nói
    const S=rec;if(!S||recKey!=="qa"||!S.listenAt){return}
    if(S.stamps.length){timerEl.textContent="🎙 Đang nghe câu trả lời… (im lặng khoảng 2 giây thì web tự chấm)";return}
    const left=Math.max(0,QA_WAIT-(Date.now()-S.listenAt)/1000);
    timerEl.innerHTML=`⏱ Trả lời ngay! Còn <b>${left.toFixed(0)}</b> giây`;
  },300);
}
function evalAnswer(Q,text,info){
  const H=normHan(text).join(""),G=grammarFix(text);
  const matched=Q.keys.map(g=>g.some(k=>H.includes(normHan(k).join(""))));
  const gm=matched.filter(Boolean).length/Q.keys.length;
  const grammar=H.length<2?50:Math.max(40,100-25*G.tips.length);          // mỗi lỗi ngữ pháp trừ 25 điểm
  const clarity=info.conf!=null?Math.round(info.conf*100):null;
  const lat=info.first&&info.listenAt?Math.max(0,(info.first-info.listenAt)/1000):null;
  const reflex=lat==null?null:lat<=2?100:Math.max(0,Math.round(100-(lat-2)/6*100));
  const fl=fluencyOf(info,H.length,1500);
  const parts=[grammar,clarity,reflex,fl?fl.score:null].filter(x=>x!=null);   // đúng ngữ pháp và phát âm là đủ; ý câu trả lời không bị trừ điểm
  return{H,matched,gm,grammar,errs:G.tips.length,clarity,lat,reflex,fl,overall:Math.round(parts.reduce((x,y)=>x+y,0)/parts.length)};
}
function qaRecord(E){
  if(!qaSess)return;
  qaSess.res.push(E?{q:qaCur.q,overall:E.overall,content:E.grammar,lat:E.lat,gm:E.gm}:{q:qaCur.q,overall:0,content:0,lat:null,gm:0,skip:true});
  prog.qa=prog.qa||{done:0,sum:0};prog.qa.done++;prog.qa.sum+=E?E.overall:0;save();
}
function qaResult(text,info){
  const Q=qaCur,box=$("#fb-qa");if(!Q||!box)return;
  const E=text?evalAnswer(Q,text,info):null;
  qaRecord(E);track('qa_answer',{answered:!!E,overall:E?E.overall:0,grammar:E?E.grammar:0,grammar_errors:E?E.errs:0,reflex_seconds:E&&E.lat!=null?+E.lat.toFixed(1):null,lesson:Q.n});
  const sample=`<details class="qa-sample"><summary class="stat"><b>Xem câu trả lời mẫu (chỉ để tham khảo)</b></summary><div class="row"><span class="zh tap" style="font-size:22px" onclick="speak('${Q.a}')">${Q.a}</span>${spkBtn(Q.a)}</div><div class="py">${Q.apy}</div><div class="vi">${Q.avi}</div>
    <div class="row" style="margin-top:8px"><button class="b mic" data-label="🎤 Đọc theo câu mẫu" id="mic-qa2" onclick="qaShadow()">🎤 Đọc theo câu mẫu</button></div><div id="fb-qa2"></div></details>`;
  const last=qaSess&&qaSess.i+1>=qaSess.n;
  const nextBtn=`<div class="row" style="margin-top:12px"><button class="b p" onclick="qaNextStep()">${last?"🏁 Xem tổng kết":"Câu tiếp ▶"}</button></div>`;
  if(!E){box.innerHTML=`<div class="rr low"><div class="big">⏱ Chưa kịp trả lời</div><div>Hãy thử nói bất kỳ câu nào bằng tiếng Trung ngay khi nghe hỏi, dù chưa hoàn hảo. Phản xạ nhanh quan trọng hơn câu hoàn chỉnh.</div>${sample}${nextBtn}</div>`;return}
  const tips=[];
  tips.push(E.errs?`Ngữ pháp: có ${E.errs} lỗi, xem phần sửa bên dưới.`:"✅ Ngữ pháp đúng.");
  if(E.gm<1)tips.push("Ghi chú: câu trả lời hơi khác ý câu hỏi, nhưng ngữ pháp và phát âm đúng thì vẫn được điểm (không trừ điểm vì khác câu mẫu).");
  if(E.lat!=null)tips.push(E.lat<=2?`⚡ Phản xạ rất nhanh (${E.lat.toFixed(1)} giây).`:E.lat<=4?`👍 Phản xạ ổn (${E.lat.toFixed(1)} giây), cố gắng dưới 2 giây.`:`🐢 Phản xạ hơi chậm (${E.lat.toFixed(1)} giây). Hãy nói ngay một từ khóa trước, ví dụ “我…”.`);
  if(E.clarity!=null&&E.clarity<75)tips.push("Máy nghe chưa rõ: hãy nói chậm hơn, rõ thanh điệu và ở nơi yên tĩnh.");
  if(E.fl&&E.fl.score<50)tips.push("Còn ngắt quãng nhiều, thử nói liền mạch hơn.");
  box.innerHTML=`<div class="rr ${E.overall>=70?"good":"low"}"><div class="big"><b>${E.overall}%</b> tổng điểm</div>
   <div class="scoregrid"><div class="sc"><b>${E.grammar}%</b>Ngữ pháp</div><div class="sc"><b>${E.reflex==null?"—":E.reflex+"%"}</b>Phản xạ${E.lat==null?"":` (${E.lat.toFixed(1)}s)`}</div><div class="sc"><b>${E.clarity==null?"—":E.clarity+"%"}</b>Độ rõ phát âm</div><div class="sc"><b>${E.fl?E.fl.score+"%":"—"}</b>Trôi chảy</div></div>
   <ul class="tips">${tips.map(t=>`<li>${t}</li>`).join("")}</ul>
   <div class="stat">Máy nghe được: <span class="zh">${annotate(text).html}</span></div>${fixBlock(Q,text,E)}${sample}${nextBtn}</div>`;
}
function qaShadow(){
  const Q=qaCur;if(!Q)return;
  recordTarget("qa2",Q.a,{quiet:4000,idle:15000,max:60000},text=>{
    const r=compareRead(Q.a,text),pct=Math.round(r.score*100);
    $("#fb-qa2").innerHTML=`<div class="rr ${pct>=70?"good":"low"}"><div><b>${pct}%</b> ${pct>=90?"🎉 Đọc theo rất chuẩn.":pct>=70?"👍 Khá tốt.":"💪 Bấm từ đỏ để nghe mẫu rồi đọc lại."}</div>${chipsHtml(r.marks)}${needHtml(r.marks)}<div class="stat">Máy nghe được: <span class="zh">${r.heard||"(không rõ)"}</span></div>${diffBlock(text,Q.a)}</div>`;
  });
}
function qaNextStep(){
  stopRec();clearInterval(qaTimer);
  if(!qaSess){return}
  qaSess.i++;
  if(qaSess.i>=qaSess.n){qaSummary();return}
  qaAsk();
}
function qaSummary(){
  const R=qaSess.res,n=R.length,avg=R.reduce((a,b)=>a+b.overall,0)/n;
  const lats=R.filter(x=>x.lat!=null).map(x=>x.lat),al=lats.length?lats.reduce((a,b)=>a+b,0)/lats.length:null;
  const fast=lats.filter(x=>x<=2).length,weak=R.filter(x=>x.overall<70);
  const byQ=Object.fromEntries(QA.map(q=>[q.q,q]));
  $("#qa-stage").innerHTML=`<div class="card"><h3>🏁 Tổng kết phiên ${n} câu</h3>
   <div class="scoregrid"><div class="sc"><b>${Math.round(avg)}%</b>Điểm trung bình</div><div class="sc"><b>${al==null?"—":al.toFixed(1)+"s"}</b>Phản xạ trung bình</div><div class="sc"><b>${fast}/${n}</b>Câu trả lời dưới 2 giây</div><div class="sc"><b>${R.filter(x=>!x.skip).length}/${n}</b>Câu đã trả lời</div></div>
   <p>${avg>=80?"🎉 Rất tốt! Bạn trả lời nhanh và đúng ý.":avg>=60?"👍 Khá ổn. Luyện thêm để phản xạ nhanh hơn.":"💪 Cần luyện thêm. Hãy xem lại câu mẫu và thử lần nữa."}</p>
   ${weak.length?`<div class="stat"><b>Nên luyện lại các câu này:</b></div>`+weak.map(x=>{const Q=byQ[x.q];return `<div class="sres"><div class="row"><span class="zh tap" style="font-size:20px" onclick="speak('${Q.q}')">${Q.q}</span></div><div class="vi">${Q.qvi}</div><div class="py">Mẫu: ${Q.a} — ${Q.apy}</div></div>`}).join(""):""}
   <div class="row" style="margin-top:12px"><button class="b p" onclick="qaStart(${QA_LEN})">🔁 Phiên mới</button><button class="b" onclick="qaView()">Về màn hình đầu</button></div></div>`;
  track('qa_complete',{questions:n,avg_score:Math.round(avg),avg_reflex_seconds:al==null?null:+al.toFixed(1)});qaSess=null;
}

/* ============ BÀI TẬP ============ */
let qMode=null,Q=null,qn=0;
function quizView(){
  if(!qMode){
    $("#app").innerHTML=`<div class="stat" style="margin-bottom:10px">Điểm tích lũy: ${prog.score.right}/${prog.score.total}</div>
    <div class="card"><h3>Chọn dạng bài</h3>
    ${[["zh2vi","Đọc Hán tự → chọn nghĩa tiếng Việt"],["vi2zh","Nghĩa tiếng Việt → chọn Hán tự"],["listen","🎧 Nghe → chọn từ đúng"],["fill","Điền pinyin (không cần dấu thanh)"],["order","Sắp xếp từ thành câu"]].map(([k,l])=>`<button class="b opt" onclick="pickQ('${k}')">${l}${lockIc(isPro()||k==="zh2vi"||k==="vi2zh")}</button>`).join("")}</div>`;
  }else{qn--;nextQ()}   // đang trong một dạng bài: vẽ lại câu mới (tránh hiện nội dung cũ của tab khác)
}
function pickQ(k){if(!isPro()&&["listen","fill","order"].includes(k)){showLock("mode");return}qMode=k;qn=0;nextQ()}
function nextQ(){
  if(capped("q")){$("#app").innerHTML=lockCard("quiz");return}
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
  const show=`<div class="ex"><div class="row"><span class="zh tap" onclick="speak('${t[1]}')">${t[1]}</span>${spkBtn(t[1])}</div><div class="py">${t[2]}</div><div class="vi">${t[0]}</div></div>`;
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
setTimeout(()=>{   // sau khi danh sách giọng đã tải: báo nếu máy/khung này không có giọng tiếng Trung
  if(!("speechSynthesis" in window)||!voices.length){
    const w=document.createElement("div");w.className="card";w.style.cssText="border-color:var(--bad);background:var(--badbg)";
    w.innerHTML="⚠️ Không tìm thấy giọng đọc tiếng Trung ở đây. Nếu bạn đang xem file trong khung xem trước của ứng dụng, hãy <b>mở file index.html trực tiếp bằng Chrome hoặc Safari</b> (nhấp đúp file trong Finder, hoặc chuột phải → Mở bằng).";
    w.style.cssText+=";max-width:868px;margin:12px auto 0;padding:12px 16px";document.body.insertBefore(w,$("main"));
  }
},1500);
$("#les").value=LESSON;syncBar();updateHero();
$("#les").onchange=e=>setLesson(e.target.value);
(function(){const r=document.documentElement;try{const t=localStorage.getItem("theme");if(t)r.dataset.theme=t}catch(e){}
$("#thm").onclick=()=>{const dark=r.dataset.theme?r.dataset.theme==="dark":matchMedia("(prefers-color-scheme:dark)").matches;r.dataset.theme=dark?"light":"dark";try{localStorage.setItem("theme",r.dataset.theme)}catch(e){}}})();
buildNav();
headerInit();
sbInit();
footerView();
render();
