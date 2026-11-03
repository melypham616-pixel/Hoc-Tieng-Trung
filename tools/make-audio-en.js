#!/usr/bin/env node
/*
 Tạo file âm thanh audio-en/*.m4a cho mọi từ/câu tiếng Anh trong english5.html, bằng giọng Samantha của macOS (lệnh `say`).
 Trang phát các file này thay cho giọng đọc của trình duyệt, nên máy nào cũng nghe được.

 Chạy (trên Mac):   node tools/make-audio-en.js         → chỉ tạo file còn thiếu
                    node tools/make-audio-en.js --all   → tạo lại toàn bộ
*/
const fs=require("fs"),path=require("path"),os=require("os"),cp=require("child_process"),vm=require("vm");
const root=path.join(__dirname,"..");
const outDir=path.join(root,"audio-en");
const VOICE="Samantha",RATE=150;

const html=fs.readFileSync(path.join(root,"english5.html"),"utf8");
const script=html.slice(html.indexOf("<script>")+8,html.lastIndexOf("</script>"));
const proxy=()=>new Proxy(function(){},{get:(t,k)=>k==="style"?{}:proxy(),set:()=>true,apply:()=>proxy()});
const ctx=vm.createContext({
  document:{querySelector:proxy,querySelectorAll:()=>[],getElementById:()=>null,createElement:proxy,addEventListener(){},body:proxy()},
  window:{},localStorage:{getItem:()=>null,setItem(){}},speechSynthesis:{getVoices:()=>[]},
  SpeechSynthesisUtterance:function(){},Audio:function(){},setTimeout:()=>0,performance:{now:()=>0},console
});
vm.runInContext(script+`
;globalThis.__items=(()=>{
  const m=new Set();
  UNITS.forEach(u=>{u.vocab.forEach(v=>m.add(v[0]));u.patterns.forEach(p=>m.add(p[0]));u.talk.forEach(l=>m.add(l[1]));u.sentences.forEach(x=>{m.add(x);m.add(x+".")})});
  [...READS,...PASS].forEach(r=>r.sents.forEach(x=>m.add(x[0])));
  m.add("Hello, my name is Anna. Nice to meet you.");
  return [...m].map(t=>({t,id:cyrb53("en|"+t).toString(36)}));
})();`,ctx);
const items=ctx.__items;
fs.mkdirSync(outDir,{recursive:true});
const keep=new Set(items.map(it=>it.id+".m4a"));
for(const f of fs.readdirSync(outDir))if(f.endsWith(".m4a")&&!keep.has(f))fs.unlinkSync(path.join(outDir,f));
const all=process.argv.includes("--all");
const todo=items.filter(it=>all||!fs.existsSync(path.join(outDir,it.id+".m4a")));
console.log(`Tổng ${items.length} câu, cần tạo ${todo.length}.`);

const run=(cmd,args,input)=>new Promise((res,rej)=>{
  const p=cp.spawn(cmd,args,{stdio:["pipe","ignore","pipe"]});let err="";
  p.stderr.on("data",d=>err+=d);p.on("error",rej);
  p.on("close",c=>c===0?res():rej(new Error(cmd+" lỗi "+c+": "+err)));
  p.stdin.end(input||"");
});
async function worker(q){
  while(q.length){
    const it=q.shift(),tmp=path.join(os.tmpdir(),"en-"+it.id+".aiff"),out=path.join(outDir,it.id+".m4a");
    try{
      await run("say",["-v",VOICE,"-r",String(RATE),"-o",tmp],it.t);
      await run("afconvert",["-f","m4af","-d","aac","-b","48000",tmp,out]);
    }catch(e){console.error("Lỗi:",it.t,e.message)}
    try{fs.unlinkSync(tmp)}catch(e){}
  }
}
(async()=>{
  const q=[...todo];await Promise.all([1,2,3,4].map(()=>worker(q)));
  console.log("Xong. Số file:",fs.readdirSync(outDir).filter(f=>f.endsWith(".m4a")).length);
})();
