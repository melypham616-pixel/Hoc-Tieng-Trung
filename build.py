"""Ghép src/head.html + src/data*.js + src/app.js thành index.html (một file duy nhất, mở thẳng bằng trình duyệt).

Chạy:  python3 build.py
"""
from pathlib import Path

root = Path(__file__).parent
src = root / "src"
head = (src / "head.html").read_text(encoding="utf8")
body = "".join((src / f).read_text(encoding="utf8") for f in ["data1.js", "data2.js", "data3.js", "data4.js", "app.js"])
(root / "index.html").write_text(head + "<script>\n" + body + "</script>\n</body>\n</html>\n", encoding="utf8")
print("Đã tạo index.html")
