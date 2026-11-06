// Tạo mã kích hoạt Premium cho một email:  node tools/premcode.js email@khach.com
const fs=require("fs");
const src=fs.readFileSync(__dirname+"/../src/app.js","utf8");
const m=src.match(/const cyrb53=[\s\S]*?\(h1>>>0\)\};/);
const secret=fs.readFileSync(__dirname+"/../src/tools.js","utf8").match(/PREM_SECRET="([^"]+)"/)[1];
const cyrb53=new Function(m[0]+";return cyrb53")();
const email=(process.argv[2]||"").toLowerCase().trim();
if(!email){console.log("Dùng: node tools/premcode.js email@khach.com");process.exit(1)}
console.log(email,"->",cyrb53("p|"+secret+"|"+email).toString(36).toUpperCase().slice(0,8));
