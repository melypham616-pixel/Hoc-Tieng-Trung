// Tạo mã kích hoạt Pro cho khách:  node tools/premcode.js email@khach.com m   (m = Pro tháng, y = Pro năm)
const fs=require("fs");
const m=fs.readFileSync(__dirname+"/../src/app.js","utf8").match(/const cyrb53=[\s\S]*?\(h1>>>0\)\};/);
const secret=fs.readFileSync(__dirname+"/../src/gate.js","utf8").match(/PREM_SECRET="([^"]+)"/)[1];
const cyrb53=new Function(m[0]+";return cyrb53")();
const email=(process.argv[2]||"").toLowerCase().trim(),pl=(process.argv[3]||"m").toLowerCase();
if(!email||!"my".includes(pl)){console.log("Dùng: node tools/premcode.js email@khach.com m|y");process.exit(1)}
console.log(email,pl==="y"?"(Pro năm)":"(Pro tháng)","->",pl.toUpperCase()+cyrb53("p|"+secret+"|"+pl+"|"+email).toString(36).toUpperCase().slice(0,7));
