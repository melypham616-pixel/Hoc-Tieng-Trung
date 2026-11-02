#!/usr/bin/env node
/*
 Tạo file âm thanh audio/*.m4a cho mọi câu tiếng Trung trong web, bằng giọng có sẵn của macOS (lệnh `say`).
 Web phát các file này thay cho giọng đọc của trình duyệt, nên Chrome, Safari, điện thoại… đều nghe được.

 Chạy (trên Mac):   node tools/make-audio.js        → chỉ tạo file còn thiếu
                    node tools/make-audio.js --all  → tạo lại toàn bộ
 Sau khi sửa nội dung: python3 build.py rồi chạy lại lệnh trên để thu thêm câu mới.
*/
const fs=require("fs"),path=require("path"),os=require("os"),cp=require("child_process"),vm=require("vm");
const root=path.join(__dirname,"..");
const outDir=path.join(root,"audio");
const VOICES={m:"Meijia",e:"Eddy (Chinese (Taiwan))"};   // m: giọng chính, e: người nói thứ hai trong hội thoại
const RATE=150;                                         // từ/phút, chậm hơn mặc định cho người học

const html=fs.readFileSync(path.join(root,"index.html"),"utf8");
const script=html.slice(html.indexOf("<script>")+8,html.lastIndexOf("</script>"));
const proxy=()=>new Proxy(function(){},{get:(t,k)=>k==="style"?{}:k==="value"?"all":proxy(),set:()=>true,apply:()=>proxy()});
const ctx=vm.createContext({
  document:{querySelector:proxy,querySelectorAll:()=>[],createElement:proxy,addEventListener(){},body:proxy()},
  window:{addEventListener(){}},localStorage:{getItem:()=>null,setItem(){}},
  speechSynthesis:{getVoices:()=>[]},SpeechSynthesisUtterance:function(){},Audio:function(){},setTimeout:()=>0,clearTimeout(){},console
});
vm.runInContext(script+`
;globalThis.__items=(()=>{
  const m=new Map();const add=(tag,t)=>{const k=tag+"|"+t;if(!m.has(k))m.set(k,{tag,t,id:cyrb53(k).toString(36)})};
  VOCAB.forEach(v=>add("m",v[0]));
  GRAMMAR.forEach(g=>g.ex.forEach(e=>add("m",e[0])));
  TRANS.forEach(t=>{add("m",t[1]);if(tLenOf(t)==="para")t[1].split(/(?<=[。！？])/).filter(Boolean).forEach(s=>add("m",s))});
  ORDER.forEach(o=>add("m",o[1].join("")));
  Object.values(DIALOGS).forEach(D=>{const L=rows(D.l).map(r=>r.split("|")),names=[...new Set(L.map(x=>x[0]))];L.forEach(x=>add(names.indexOf(x[0])%2?"e":"m",x[1]))});
  add("m","你好，歡迎你來臺灣！");
  return [...m.values()];
})();`,ctx);
const items=ctx.__items;
fs.mkdirSync(outDir,{recursive:true});
const all=process.argv.includes("--all");
const todo=items.filter(it=>all||!fs.existsSync(path.join(outDir,it.id+".m4a")));
console.log(`Tổng ${items.length} câu, cần tạo ${todo.length}.`);

const run=(cmd,args,input)=>new Promise((res,rej)=>{
  const p=cp.spawn(cmd,args,{stdio:["pipe","ignore","pipe"]});let err="";
  p.stderr.on("data",d=>err+=d);p.on("error",rej);
  p.on("close",c=>c===0?res():rej(new Error(cmd+" lỗi "+c+": "+err)));
  p.stdin.end(input||"");
});
let done=0;
async function worker(q){
  while(q.length){
    const it=q.shift(),tmp=path.join(os.tmpdir(),"clip-"+it.id+".aiff"),out=path.join(outDir,it.id+".m4a");
    try{
      await run("say",["-v",VOICES[it.tag],"-r",String(RATE),"-o",tmp],it.t);
      await run("afconvert",["-f","m4af","-d","aac","-b","48000",tmp,out]);
    }catch(e){console.error("Lỗi:",it.t,e.message)}
    try{fs.unlinkSync(tmp)}catch(e){}
    if(++done%100===0)console.log(`  ${done}/${todo.length}`);
  }
}
(async()=>{
  const q=[...todo];await Promise.all([1,2,3,4].map(()=>worker(q)));
  console.log("Xong. Số file:",fs.readdirSync(outDir).filter(f=>f.endsWith(".m4a")).length);
})();
