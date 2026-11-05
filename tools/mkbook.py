"""Tạo src/data8.js từ tools/books/v*.txt (nguồn gõ tay từ sách), tự thêm pinyin bằng pypinyin.

Định dạng v<N>.txt:
  @<số bài>|<tiêu đề Hán>|<nghĩa Việt>
  <hán>|<nghĩa Việt>|<loại từ>        ← từ vựng
  #                                    ← từ dòng này là hội thoại / bài đọc
  <người nói>|<câu Hán>|<nghĩa Việt>
Chạy:  python3 tools/mkbook.py
"""
import re,glob,json
from pathlib import Path
from pypinyin import lazy_pinyin,Style
root=Path(__file__).parent.parent
TONE4=set("āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ")
def tone(s):
    for c in s:
        if c in "àèìòùǜ":return 4
        if c in "āēīōūǖ":return 1
        if c in "áéíóúǘ":return 2
        if c in "ǎěǐǒǔǚ":return 3
    return 0
def py(s,sent):
    s=s if sent else s.replace("…","").replace("～","")
    syl=lazy_pinyin(s,style=Style.TONE,errors=lambda c:[c])
    toks=re.findall(r"[^\u4e00-\u9fff]+|[\u4e00-\u9fff]",s)
    assert len(toks)==len(syl),(s,toks,syl)
    for i,ch in enumerate(toks):
        if i+1>=len(toks):break
        nt=tone(syl[i+1])
        if ch=="不" and nt==4:syl[i]="bú"
        if ch=="一" and not (i>0 and toks[i-1] in "第週期十二三四五六七八九零") and nt:
            syl[i]="yí" if nt==4 else "yì"
    out=syl
    r=" ".join(out) if sent else "".join(out)
    r=re.sub(r"\s+([，。？！、：；」）,.?!:;)])",r"\1",r);r=re.sub(r"([「（(])\s+",r"\1",r)
    return r.strip()
books={}
for f in sorted(glob.glob(str(root/"tools/books/v*.txt"))):
    n=int(re.search(r"v(\d)",f).group(1));cur=None;mode="v";ls=[]
    for line in open(f,encoding="utf8").read().split("\n"):
        line=line.strip()
        if not line or line.startswith("//"):continue
        if line[0]=="@":
            p=line[1:].split("|");cur={"n":int(p[0]),"zh":p[1],"vi":p[2],"v":[],"d":[]};ls.append(cur);mode="v";continue
        if line=="#":mode="d";continue
        p=line.split("|")
        if mode=="v":
            if len(p)<2:print("!! thiếu nghĩa",n,cur["n"],line);continue
            cur["v"].append("|".join([p[0],py(p[0],False),p[1],p[2] if len(p)>2 else ""]))
        else:
            if len(p)<3:print("!! dòng hội thoại",n,cur["n"],line);continue
            cur["d"].append("|".join([p[0],p[1],py(p[1],True),p[2]]))
    books[n]=ls
js="// Quyển 2–6 (tự sinh bằng tools/mkbook.py từ tools/books/*.txt)\nconst BOOKS={};\n"
for n,ls in books.items():
    js+=f"BOOKS[{n}]={{lessons:["+",".join("{n:%d,zh:%s,vi:%s,v:`%s`,d:{l:`%s`}}"%(L["n"],json.dumps(L["zh"],ensure_ascii=False),json.dumps(L["vi"],ensure_ascii=False),"\n".join(L["v"]).replace("`","'"),"\n".join(L["d"]).replace("`","'")) for L in ls)+"]};\n"
(root/"src/data8.js").write_text(js,encoding="utf8")
print({n:[(L['n'],len(L['v']),len(L['d'])) for L in ls] for n,ls in books.items()})
