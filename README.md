# Học tiếng Trung · 當代中文課程 1

Web tự học tiếng Trung theo giáo trình **A Course in Contemporary Chinese – Vol. 1** (15 bài).
Một file `index.html` duy nhất, không cần cài đặt: mở thẳng bằng Safari hoặc Chrome.

Web chạy tại **https://studychinese.mely.io.vn** (GitHub Pages, nhánh `main`, tên miền cấu hình trong file `CNAME`).

## Có gì trong web
- **Từ vựng**: ~480 từ có pinyin, nghĩa tiếng Việt, giọng đọc, đánh dấu "đã thuộc".
- **Thẻ nhớ**: lật thẻ, nghe phát âm.
- **Ngữ pháp**: 77 điểm, tiêu đề và công thức có pinyin + chú giải nghĩa.
- **Đọc**: 15 hội thoại và các đoạn văn ngắn, bật/tắt pinyin và tiếng Việt, câu hỏi đúng/sai.
- **Bài tập**: chọn nghĩa, chọn Hán tự, nghe chọn từ, điền pinyin, sắp xếp câu.
- **Tập dịch**: ~600 câu Việt ↔ Trung (câu ngắn, câu dài, đoạn văn), chế độ phản xạ.
- Lọc theo từng bài hoặc nhóm bài; tiến độ lưu trong trình duyệt (localStorage).

> Bài 1–10 bám sách bài tập; bài 11–15 soạn theo tên bài nên cần đối chiếu với sách.

## Cấu trúc
```
index.html        file build sẵn, dùng trực tiếp / đưa lên hosting
CNAME             tên miền tùy chỉnh cho GitHub Pages
src/head.html     khung trang + CSS
src/data1.js      dữ liệu bài 1–8
src/data2.js      dữ liệu bài 9–15
src/data3.js      hội thoại
src/app.js        giao diện và logic
build.py          ghép src/ thành index.html
audio/            file âm thanh .m4a (tên file = mã băm của câu)
tools/make-audio.js  thu âm các câu còn thiếu bằng lệnh `say` của macOS
```

## Sửa nội dung
Sửa file trong `src/`, rồi chạy:
```bash
python3 build.py
```
Định dạng dữ liệu mỗi bài (từ vựng `Hán|pinyin|nghĩa`, câu dịch `tiếng Việt|Hán|pinyin`…) có chú thích ở đầu `src/data1.js`.

## Giọng đọc
Mặc định web phát **file âm thanh thu sẵn** trong `audio/` (giọng Meijia và Eddy của macOS, tiếng Quan thoại Đài Loan), nên Chrome, Safari và điện thoại đều nghe được, không phụ thuộc giọng đọc của trình duyệt. Nếu thiếu file cho một câu nào đó, web tự dùng Web Speech API của trình duyệt. Ô chọn giọng ở đầu trang cho phép đổi sang giọng của trình duyệt.

Sau khi sửa nội dung (`src/`), chạy trên Mac để thu thêm các câu mới:
```bash
python3 build.py
node tools/make-audio.js
```
