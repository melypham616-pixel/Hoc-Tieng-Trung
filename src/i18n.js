
/* ============ ĐA NGÔN NGỮ (VI / EN) — dịch phần giao diện, nội dung học giữ nguyên ============ */
let LANG="vi";try{LANG=localStorage.getItem("lang")==="en"?"en":"vi"}catch(e){}
const EN={
/* điều hướng & đầu trang */
"Tổng quan":"Dashboard","Khóa học":"Courses","Từ vựng":"Vocabulary","Luyện tập":"Practice","Hồ sơ":"Profile","Đăng nhập":"Log in","Gửi link đăng nhập":"Send login link","Tài khoản":"Account","Đăng xuất":"Log out","Đăng nhập để dùng và mua gói Pro.":"Log in to use and buy Pro.","Nâng cấp":"Upgrade","Học Tiếng Trung":"Study Chinese",
"Đổi giao diện sáng/tối":"Toggle light/dark theme","Đổi giao diện":"Toggle theme","Ngôn ngữ":"Language",
"Tốc độ":"Speed","Giọng":"Voice","Nghe thử":"Test voice","🔊 Nghe thử":"🔊 Test voice","Phạm vi":"Scope",
/* thanh bài học */
"Tiến độ bài học":"Lesson progress","← Bài trước":"← Previous","Bài trước":"Previous","Bài sau →":"Next →","Bài sau":"Next","☆ Lưu bài":"☆ Save","⭐ Đã lưu":"⭐ Saved","Tất cả":"All",
"Thẻ nhớ":"Flashcards","Ngữ pháp":"Grammar","Đọc":"Reading","Truyện":"Stories","Vấn đáp":"Speaking Q&A","Bài tập":"Exercises","Tập dịch":"Translation","Trắc nghiệm":"Quiz","Hội thoại":"Dialogues","Chưa thuộc":"Not learned yet","Đã thuộc":"Learned",
/* trang chủ */
"Học tiếng Trung phồn thể cho người Việt":"Learn Traditional Chinese","Học tiếng Trung phồn thể,":"Learn Traditional Chinese,","đều đặn mỗi ngày":"a little every day",
"Từ vựng, hội thoại, bài đọc và luyện nghe theo giáo trình 當代中文課程 Quyển 1–6 và TOCFL — có pinyin, giải thích tiếng Việt và giọng đọc Đài Loan.":"Vocabulary, dialogues, readings and listening practice based on the Contemporary Chinese textbook, Books 1–6, and TOCFL — with pinyin, Vietnamese explanations and a Taiwan Mandarin voice.",
"Bắt đầu học":"Start learning","Xem khóa học":"View courses","Chữ phồn thể & zh-TW":"Traditional characters & zh-TW","Miễn phí học cơ bản":"Free basic learning","Tiến độ lưu trên thiết bị":"Progress saved on your device",
"🔊 Nghe phát âm":"🔊 Listen","🔄 Từ khác":"🔄 Another word","Vì sao học ở đây?":"Why learn here?",
"Chữ phồn thể, giọng Đài Loan":"Traditional characters, Taiwan voice","Toàn bộ nội dung viết bằng chữ phồn thể, âm thanh thu sẵn bằng giọng Meijia (zh-TW).":"All content is in Traditional characters, with pre-recorded audio in the Meijia (zh-TW) voice.",
"Giải thích bằng tiếng Việt":"Vietnamese explanations","Mỗi từ, mỗi câu đều có pinyin và nghĩa tiếng Việt; có thể ẩn đi để tự kiểm tra.":"Every word and sentence has pinyin and a Vietnamese meaning; hide them to test yourself. (Meanings are in Vietnamese.)",
"Nhìn thấy tiến bộ của mình":"See your progress","Từ đã thuộc, chuỗi ngày học và kết quả luyện tập được lưu ngay trên thiết bị của bạn.":"Learned words, study streak and practice results are saved right on your device.",
"Khóa học nổi bật":"Featured course","Bắt đầu từ Quyển 1 nếu bạn mới học, hoặc chọn quyển phù hợp với trình độ.":"Start with Book 1 if you are new, or choose the book that matches your level.","Giáo trình chính":"Main textbook",
"Tất cả khóa học":"All courses","Tiếp tục học":"Continue learning","Bắt đầu Quyển 1":"Start Book 1","Bạn muốn luyện gì hôm nay?":"What would you like to practice today?",
"Từ vựng":"Vocabulary","Học thẻ, đánh dấu từ khó, nghe phát âm":"Study cards, mark hard words, hear pronunciation","Công thức và ví dụ cho 15 bài Quyển 1":"Patterns and examples for the 15 lessons of Book 1",
"Hội thoại & bài đọc":"Dialogues & readings","Nghe từng câu, bật/tắt pinyin và dịch":"Listen sentence by sentence, toggle pinyin and translation","Luyện nghe":"Listening","Chép chính tả và shadowing có chấm điểm":"Dictation and scored shadowing",
"Từ vựng A1–B2 và đề thi thử":"A1–B2 vocabulary and mock exams","Trắc nghiệm, điền pinyin, sắp xếp câu":"Multiple choice, pinyin fill-in, sentence ordering",
"Cách học":"How it works","Chọn bài":"Choose a lesson","Vào Khóa học, chọn quyển và bài phù hợp trình độ của bạn.":"Open Courses and pick the book and lesson that fit your level.",
"Học và nghe":"Learn and listen","Xem từ vựng, nghe phát âm, đọc hội thoại; lưu lại những từ khó.":"Study words, hear pronunciation, read dialogues; save the hard ones.",
"Luyện tập và ôn lại":"Practice and review","Làm bài tập, xem lỗi sai và ôn lại các từ cần nhớ.":"Do exercises, see your mistakes and review the words to remember.",
"Nội dung nổi bật":"Featured content","Chép chính tả":"Dictation","Nghe câu rồi gõ lại chữ Hán, chấm từng chữ.":"Listen to a sentence and type the characters; scored character by character.","Shadowing video":"Shadowing videos","Xem video bản xứ và nhại theo từng câu.":"Watch native videos and repeat after them.",
"Đề thi thử TOCFL":"TOCFL mock exam","Bài trắc nghiệm bấm giờ cấp A1–B2.":"Timed multiple-choice test, levels A1–B2.",
"Quyển giáo trình":"Textbooks","Bài học":"Lessons","Từ vựng giáo trình":"Textbook words","Từ TOCFL":"TOCFL words",
"Nhận thông báo bài học mới":"Get notified about new lessons","Để lại email để nhận tin khi có thêm bài và tính năng. Không spam, bạn có thể hủy bất cứ lúc nào.":"Leave your email to hear about new lessons and features. No spam; unsubscribe any time.","Đăng ký":"Subscribe",
"Sẵn sàng bắt đầu?":"Ready to start?","Mỗi ngày một chút, chữ phồn thể sẽ quen dần.":"A little every day and Traditional characters will start to feel familiar.","Xem giới thiệu":"About this site",
/* dashboard */
"Chào buổi sáng,":"Good morning,","Chào buổi chiều,":"Good afternoon,","Chào buổi tối,":"Good evening,","bạn":"there","Bắt đầu":"Start","Tiếp tục":"Continue","Tiếp tục →":"Continue →","Bắt đầu →":"Start →",
"Chào hỏi và giới thiệu bản thân — bài đầu tiên của người mới.":"Greetings and introductions — the first lesson for beginners.","Việc hôm nay":"Today's tasks","Gợi ý":"Suggestion","Xong":"Done",
"Học 5 từ mới":"Learn 5 new words","Làm 10 câu trắc nghiệm":"Do 10 quiz questions","Chép chính tả 5 câu":"Dictate 5 sentences","8 phút":"8 min","6 phút":"6 min","5 phút":"5 min",
"Tiến độ theo kỹ năng":"Progress by skill","Trắc nghiệm":"Quiz","Chép chính tả":"Dictation","Shadowing":"Shadowing","Thi thử TOCFL":"TOCFL mock exam","Chưa làm":"Not started","Chưa thi":"Not taken",
"Khóa học đang học":"Courses in progress","Từ đã thuộc":"Words learned","Hoàn thành":"Completed","Hoạt động":"Activity","ngày học liên tiếp":"day streak","Mục tiêu hôm nay":"Today's goal",
"Mỗi câu hỏi, thẻ nhớ hay từ đánh dấu đều được tính.":"Every question, flashcard or marked word counts.","🎉 Bạn đã hoàn thành mục tiêu hôm nay!":"🎉 You reached today's goal!","Từ vựng hôm nay":"Today's words","Bài hoàn thành":"Completed lessons",
"Chưa có khóa học nào đang học":"No courses in progress","Học vài từ trong một quyển để theo dõi tiến độ tại đây.":"Learn a few words in a book to track progress here.","Chưa có từ để gợi ý":"No suggested words yet","Bắt đầu một bài học để nhận gợi ý mỗi ngày.":"Start a lesson to get daily suggestions.",
"Chưa có bài nào":"No lessons yet","Thuộc 80% từ vựng của một bài để tính hoàn thành.":"Learn 80% of a lesson's words to complete it.",
/* khóa học */
"Chọn một khóa học để bắt đầu hoặc tiếp tục. Mức độ là ước lượng theo nội dung từng quyển.":"Choose a course to start or continue. Levels are estimates based on each book's content.",
"Giáo trình":"Textbook","Từ vựng thi chứng chỉ":"Certificate vocabulary","Sơ cấp":"Beginner","Trung cấp":"Intermediate","Trung – Cao cấp":"Upper-intermediate","Cao cấp":"Advanced","Hoàn thành":"Completed","Band A (A1–A2) và Band B (B1–B2)":"Band A (A1–A2) and Band B (B1–B2)","4 cấp độ":"4 levels",
/* từ vựng (học thẻ) */
"Nguồn":"Source","Bài / cấp":"Lesson / level","⭐ Đã lưu":"⭐ Saved","Từ khó":"Hard words","Công cụ từ vựng":"Vocabulary tools","🧩 214 bộ thủ":"🧩 214 radicals","🔤 Pinyin":"🔤 Pinyin","📏 Lượng từ":"📏 Measure words","🗂️ Theo chủ đề":"🗂️ By topic","💬 Mẫu câu":"💬 Sentence bank","🔎 Tra từ":"🔎 Lookup",
"🔊 Nghe":"🔊 Listen","🐢 Chậm":"🐢 Slow","Ví dụ":"Example","Chưa có câu ví dụ cho từ này.":"No example sentence for this word.","😕 Chưa thuộc":"😕 Not yet","✅ Đã thuộc":"✅ I know it","← Trước":"← Prev","Sau →":"Next →","Ẩn pinyin":"Hide pinyin","Ẩn nghĩa":"Hide meaning",
"Chạm để hiện pinyin":"Tap to show pinyin","Chạm để hiện nghĩa":"Tap to show meaning","Chưa có từ nào ở đây":"No words here","Không có từ phù hợp":"No matching words","Xem tất cả từ":"See all words","Nghe phát âm":"Listen","Lưu từ":"Save word","Bỏ lưu":"Unsave","✓ Đã thuộc":"✓ Learned",
"Bấm ☆ trên thẻ từ để lưu những từ cần ôn.":"Tap ☆ on a card to save words for review.","Những từ bạn đánh dấu “Chưa thuộc” sẽ xuất hiện ở đây.":"Words you mark “Not yet” will appear here.","Thử đổi bài hoặc bộ lọc khác. Một số bài thuộc gói Pro.":"Try another lesson or filter. Some lessons are Pro.",
/* luyện tập */
"Mỗi câu trả lời đều có phản hồi ngay: đúng/sai, đáp án và gợi ý.":"Every answer gets instant feedback: right/wrong, the answer and a hint.","Gợi ý hôm nay":"Today's suggestion","Mở →":"Open →","Bài tập Quyển 1":"Book 1 exercises",
"Chọn nghĩa đúng cho chữ Hán":"Pick the right meaning for the character","Nghe và chọn":"Listen and choose","Nghe âm thanh rồi chọn từ đúng":"Listen, then pick the correct word","Điền pinyin":"Fill in pinyin","Gõ pinyin của từ (không cần dấu)":"Type the word's pinyin (tone marks optional)",
"Sắp xếp câu":"Sentence ordering","Ghép các từ thành câu đúng":"Arrange words into a correct sentence","Dịch câu":"Translate","Dịch Việt → Trung và tự chấm":"Translate Vietnamese → Chinese and self-check","Lật thẻ, đánh dấu thuộc / chưa thuộc":"Flip cards, mark learned / not yet",
"Trắc nghiệm TOCFL":"TOCFL quiz","Từ vựng theo cấp A1–B2":"Vocabulary by level A1–B2","Luyện nghe và nói":"Listening and speaking","Nghe và nhại theo, có chấm điểm":"Listen and repeat, with scoring","Video bản xứ theo từng cấp":"Native videos by level",
"Vấn đáp":"Q&A","Trả lời bằng giọng nói (Quyển 1)":"Answer by voice (Book 1)","Bấm giờ, chấm điểm tự động":"Timed, auto-scored","Ôn tập SRS":"SRS review","Nhắc từ theo lịch ngắt quãng (Pro)":"Spaced-repetition reminders (Pro)","Luyện thứ tự nét":"Stroke order","Xem nét và tự viết chữ":"Watch strokes and write characters",
"Chọn dạng bài":"Choose an exercise type","Điểm tích lũy:":"Total score:","Đọc Hán tự → chọn nghĩa tiếng Việt":"Read the character → choose the Vietnamese meaning","Nghĩa tiếng Việt → chọn Hán tự":"Vietnamese meaning → choose the character","Điền pinyin (không cần dấu thanh)":"Fill in pinyin (tone marks optional)","Sắp xếp từ thành câu":"Arrange words into a sentence",
/* hồ sơ */
"Dữ liệu học được lưu trên trình duyệt của thiết bị này. Chưa có đăng nhập tài khoản.":"Your study data is saved in this device's browser. There is no account login yet.","Tên hiển thị":"Display name","Bạn muốn được gọi là gì?":"What should we call you?","Gói hiện tại":"Current plan",
"từ đã thuộc":"words learned","bài hoàn thành":"lessons completed","ngày liên tiếp":"day streak","đúng":"correct","chưa làm bài":"no quizzes yet","Từ đã thuộc theo khóa học":"Words learned by course","Kết quả trắc nghiệm 7 ngày":"Quiz results, last 7 days",
"Chiều cao cột = tỉ lệ đúng trong ngày.":"Bar height = share of correct answers that day.","Chưa có kết quả":"No results yet","Làm vài câu trắc nghiệm để xem biểu đồ tại đây.":"Answer a few quiz questions to see the chart here.","Đến Luyện tập":"Go to Practice",
"Chưa có bài hoàn thành":"No completed lessons","Đánh dấu thuộc từ 80% từ vựng của một bài để tính hoàn thành.":"Mark 80% of a lesson's words as learned to complete it.","Danh sách trống":"Your list is empty","Từ bạn đánh dấu “Chưa thuộc” hoặc lưu ⭐ sẽ xuất hiện ở đây.":"Words you mark “Not yet” or save with ⭐ will appear here.",
"Công cụ học tập":"Study tools","📈 Theo dõi chi tiết (Pro)":"📈 Detailed tracking (Pro)","🗺️ Lộ trình (Pro năm)":"🗺️ Study path (Yearly Pro)","📚 Tài liệu (Pro năm)":"📚 Materials (Yearly Pro)","Gói học":"Plans","Nhập mã kích hoạt":"Enter activation code","✅ Gói Pro đã kích hoạt":"✅ Pro plan activated","Xóa dữ liệu học trên thiết bị này":"Delete study data on this device",
"Từ cần ôn lại":"Words to review","Bài đã hoàn thành":"Completed lessons",
/* gói & thanh toán */
"Học cơ bản luôn miễn phí. Gói Pro mở thêm bài học, luyện tập không giới hạn và công cụ theo dõi.":"Basic learning is always free. Pro unlocks more lessons, unlimited practice and tracking tools.",
"Dành cho người mới bắt đầu":"For beginners","Một số bài học miễn phí":"Some free lessons","Từ vựng và phát âm":"Vocabulary and pronunciation","Quiz cơ bản":"Basic quizzes","Học đều mỗi ngày, mở khóa toàn bộ":"Learn daily, unlock everything","Mở khóa toàn bộ bài học":"Unlock all lessons","Flashcards không giới hạn":"Unlimited flashcards","Ôn tập thông minh (SRS)":"Smart review (SRS)","Theo dõi tiến độ":"Progress tracking","Bài kiểm tra nâng cao":"Advanced tests",
"Tiết kiệm so với trả theo tháng":"Save compared with monthly","Toàn bộ quyền lợi Pro":"All Pro benefits","Tài liệu học tập bổ sung (Anki, bản in)":"Extra study materials (Anki, printable)","Lộ trình học theo mục tiêu":"Goal-based study path","/tháng":"/month","/năm":"/year","Pro tháng":"Pro Monthly","Pro năm":"Pro Yearly","Đề xuất":"Recommended","Học ngay":"Learn now",
"Tính năng":"Feature","Từ vựng, phát âm, bài học cơ bản":"Vocabulary, pronunciation, basic lessons","Số bài học":"Number of lessons","Một số bài":"Some lessons","Toàn bộ":"All","Thẻ nhớ":"Flashcards","15 thẻ/ngày":"15 cards/day","Không giới hạn":"Unlimited","15 câu/ngày, dạng cơ bản":"15 questions/day, basic types","Không giới hạn, mọi dạng":"Unlimited, all types",
"Ôn tập ngắt quãng (SRS)":"Spaced repetition (SRS)","Theo dõi tiến độ chi tiết và lịch sử":"Detailed tracking and history","Cấp A1":"Level A1","Tài liệu bổ sung, lộ trình theo mục tiêu":"Extra materials, goal-based path","Pro năm":"Yearly Pro","Đã mua? Nhập mã kích hoạt":"Already purchased? Enter activation code","✅ Gói Pro đã kích hoạt trên thiết bị này":"✅ Pro plan activated on this device",
"Email đã dùng khi mua":"Email used for purchase","Mã kích hoạt":"Activation code","Email hoặc mã chưa đúng. Kiểm tra lại mã bạn nhận được nhé.":"Email or code is incorrect. Please check the code you received.",
"🇻🇳 Việt Nam":"🇻🇳 Vietnam","💳 Thẻ Visa & Quốc tế":"💳 Card & International","Ngân hàng:":"Bank:","Số tài khoản:":"Account number:","Chủ tài khoản:":"Account holder:","Số tiền:":"Amount:","Nội dung:":"Transfer note:","Đóng":"Close",
"Bài học này thuộc gói Pro":"This lesson is part of Pro","Dạng bài này thuộc gói Pro":"This exercise type is part of Pro","Tính năng này thuộc gói Pro":"This feature is part of Pro","Tính năng này thuộc gói Pro năm":"This feature is part of Yearly Pro","Bạn đã dùng hết lượt quiz miễn phí hôm nay":"You've used today's free quiz questions","Bạn đã dùng hết lượt thẻ nhớ miễn phí hôm nay":"You've used today's free flashcards","Xem gói Pro":"See Pro plans","Tôi đã có mã kích hoạt":"I have an activation code","Nâng cấp Pro để dùng.":"Upgrade to Pro to use this.",
/* Dictation Arena */
"Chép chính tả":"Dictation","✍️ Chép chính tả":"✍️ Dictation","🗣️ Shadowing":"🗣️ Shadowing","🎬 Video":"🎬 Video","LUYỆN NGHE VÀ GÕ CHÍNH TẢ":"LISTENING AND DICTATION","LUYỆN NGHE VÀ NHẠI THEO":"LISTEN AND REPEAT","LUYỆN NGHE VÀ NHẠI THEO VIDEO":"SHADOW NATIVE VIDEOS",
"Nghe câu bằng giọng Meijia rồi gõ lại chữ Hán — rèn phản xạ nghe, nhận mặt chữ phồn thể và pinyin.":"Listen to a sentence in the Meijia voice and type the characters — train your ear and recognise Traditional characters and pinyin.",
"Shadowing: nghe rồi nhại lại ngay để luyện nhịp, ngữ điệu và thanh điệu; hệ thống chấm độ giống từng từ.":"Shadowing: listen, then repeat right away to train rhythm, intonation and tones; each word is scored.",
"bài":"lessons","đã làm":"done","đang làm":"in progress","chưa làm":"not started","Miễn phí":"Free","🔒 Pro":"🔒 Pro","← Danh sách bài":"← Lesson list","← Danh sách video":"← Video list","Làm lại":"Retry","Chọn bài khác":"Choose another lesson","Câu tiếp →":"Next →","Bỏ qua":"Skip","Kiểm tra":"Check","💡 Gợi ý":"💡 Hint","🐢 Chậm":"🐢 Slow","🎤 Nhại lại":"🎤 Repeat","🔊 Nghe đáp án":"🔊 Hear the answer",
"✅ Chính xác!":"✅ Correct!","❌ Chưa đúng hoàn toàn.":"❌ Not quite right.","Gõ câu bạn nghe được bằng chữ Hán…":"Type what you hear in characters…","ẩn chữ (chỉ nghe)":"hide text (listen only)","Mọi độ dài":"Any length","Ngắn (≤ 8 chữ)":"Short (≤ 8 chars)","Vừa (9–16 chữ)":"Medium (9–16 chars)","Dài (> 16 chữ)":"Long (> 16 chars)",
"Hai danh sách phát từ sơ cấp (HSK 1–2) đến trung cấp (HSK 3–4).":"Two playlists from beginner (HSK 1–2) to intermediate (HSK 3–4).","Xem video có người bản xứ nói, rồi nhại theo từng câu. Hai danh sách phát từ sơ cấp (HSK 1–2) đến trung cấp (HSK 3–4).":"Watch videos of native speakers, then repeat sentence by sentence. Two playlists from beginner (HSK 1–2) to intermediate (HSK 3–4).","Shadowing Video":"Shadowing Video",
"Chưa xem":"Not watched","✓ Đã xem":"✓ Watched","▶ Mở trên YouTube":"▶ Open on YouTube","Video tiếp →":"Next video →","Cách shadowing với video:":"How to shadow with a video:","Xem video có người bản xứ nói, rồi nhại theo từng câu.":"Watch a native speaker, then repeat sentence by sentence.",
/* chân trang */
"Nền tảng tự học tiếng Trung phồn thể: giáo trình 當代中文課程 Quyển 1–6 và từ vựng TOCFL, có pinyin, nghĩa tiếng Việt và giọng đọc Đài Loan.":"A self-study platform for Traditional Chinese: the Contemporary Chinese textbook, Books 1–6, and TOCFL vocabulary, with pinyin, Vietnamese meanings and a Taiwan Mandarin voice.",
"Lộ trình học":"Learning path","Giáo trình 當代中文 1–6":"Contemporary Chinese 1–6","Từ vựng TOCFL A1–B2 Mới":"TOCFL A1–B2 vocabulary (New)","Luyện thi / Đề thi thử":"Test prep / Mock exams","Từ vựng theo chủ đề":"Vocabulary by topic","Mẫu câu giao tiếp":"Sentence bank","Bảng giá gói học Pro":"Pro plan pricing",
"Công cụ":"Tools","214 Bộ thủ":"214 Radicals","Chép chính tả":"Dictation","Shadowing (nhại theo)":"Shadowing","Luyện thứ tự nét":"Stroke order","Lượng từ":"Measure words","Ôn tập SRS ngắt quãng":"SRS review","Theo dõi tiến độ":"Progress tracking","Lộ trình theo mục tiêu":"Goal-based path","Tài liệu bổ sung":"Extra materials","Công cụ tra từ & dịch câu":"Lookup & sentence tool","Lộ trình Pinyin":"Pinyin guide","Luyện phát âm":"Pronunciation","Đọc hiểu":"Reading",
"Chính sách":"Policies","Quy chế hoạt động nền tảng":"Platform rules","Thông tin chủ quản nền tảng":"Operator information","Chính sách bảo mật dữ liệu":"Privacy policy","Quyền và nghĩa vụ các bên":"Rights and obligations","Tiếp nhận & Giải quyết khiếu nại":"Complaints","Chính sách về giá & Điều kiện":"Pricing & conditions","Chính sách thanh toán":"Payment policy","Phương thức cung cấp dịch vụ":"How services are provided","Đổi trả, chấm dứt & Hoàn tiền":"Returns, termination & refunds","Danh mục chính sách nền tảng":"All policies",
"Liên hệ":"Contact","Gửi phản ánh / Khiếu nại trực tuyến →":"Send feedback / complaint →","Yêu cầu xóa dữ liệu học":"Request data deletion","Cách học hiệu quả":"Study tips","Phản hồi qua email trong 1–3 ngày làm việc.":"We reply by email within 1–3 business days.",
"Trang học tập phi chính thức, không liên kết với nhà xuất bản giáo trình hay đơn vị tổ chức TOCFL.":"An unofficial study site, not affiliated with the textbook publisher or the TOCFL organisers.","加油！Mỗi ngày một chút 💪":"加油！A little every day 💪",
/* công cụ khác */
"Trang chủ":"Home","← Trang chủ":"← Home","Tìm trong quyển này: Hán tự, pinyin hoặc tiếng Việt…":"Search this book: characters, pinyin or Vietnamese…","Chỉ từ chưa thuộc":"Unlearned words only","thuộc":"learned","chỉ từ chưa thuộc":"unlearned only",
"Danh sách phát":"Playlist","Nhận thông báo":"Notifications","Đang gửi…":"Sending…","Gửi chưa được, bạn thử lại sau nhé.":"Couldn't send. Please try again later.","Email chưa đúng định dạng.":"Invalid email format.","✅ Cảm ơn bạn! Mình sẽ gửi thông tin bài học mới qua email này.":"✅ Thank you! We'll send news about new lessons to this email.",
"Pay by Visa / Mastercard or PayPal in USD":"Pay by Visa / Mastercard or PayPal in USD",
"Nghe câu rồi gõ lại chữ Hán":"Listen to a sentence and type the characters","(chạm để lật)":"(tap to flip)","Nghe → chọn từ đúng":"Listen → choose the word","Việt → Trung":"Vietnamese → Chinese","Trung → Việt":"Chinese → Vietnamese","Câu ngắn":"Short","Câu dài":"Long","Đoạn văn":"Paragraph","⚡ Phản xạ":"⚡ Reflex","Phản xạ":"Reflex","Dịch câu sau:":"Translate this sentence:","Câu khác →":"Another →","Tra từ & phân tích câu":"Lookup & sentence analysis","Chép chính tả & Shadowing":"Dictation & Shadowing","trả lời đúng":"correct answers","MB Bank (Ngân hàng Quân đội)":"MB Bank (Military Commercial Joint Stock Bank)","Tất cả 15 bài":"All 15 lessons",
"Tìm trong quyển này: Hán tự, pinyin hoặc tiếng Việt…":"Search this book: characters, pinyin or Vietnamese…","Chọn nghĩa đúng":"Choose the correct meaning","Câu tiếp →":"Next →",
"Đã lưu tên":"Name saved","⭐ Đã lưu từ vào danh sách cần ôn":"⭐ Word saved for review","Đã bỏ lưu từ":"Word unsaved","⭐ Đã lưu bài học":"⭐ Lesson saved","Đã bỏ lưu bài học":"Lesson unsaved","✅ Đã thuộc":"✅ Learned"
};
/* mẫu có số: áp dụng sau khi không khớp nguyên cụm */
const EN_RE=[
 [/^Gói Free mở một số bài đầu mỗi quyển.*$/u,"The Free plan unlocks the first few lessons of each book (Book 1: 5 lessons, Books 2–6: 2 lessons, TOCFL: level A1). Pro unlocks every lesson."],
 [/^© (\d+) Học Tiếng Trung · .*$/u,"© $1 Study Chinese · An unofficial study site, not affiliated with the textbook publisher or the TOCFL organisers."],
 [/^Tiếp tục · /u,"Continue · "],[/^Từ hôm nay · /u,"Word of the day · "],[/^Đã thuộc: (\d+)\/(\d+) từ trong phạm vi đang chọn/u,"Learned: $1/$2 words in the selected range"],[/^Điểm tích lũy:/u,"Total score:"],
 [/Ôn (\d+) từ bạn đánh dấu chưa thuộc/u,"Review the $1 words you marked not yet"],[/Ôn (\d+) từ đến hạn \(SRS\)/u,"Review $1 due words (SRS)"],[/Ôn (\d+) từ chưa thuộc/u,"Review $1 words not yet learned"],
 [/^Bài đã hoàn thành \((\d+)\)/u,"Completed lessons ($1)"],[/^Từ cần ôn lại \((\d+)\)/u,"Words to review ($1)"],[/^Bài hoàn thành \((\d+)\)/u,"Completed lessons ($1)"],
 [/sentences đúng/u,"sentences correct"],[/^đúng \(/u,"correct ("],[/ sentences trong bộ lọc/u," sentences in this filter"],
 [/Pro tháng/gu,"Pro Monthly"],[/Pro năm/gu,"Pro Yearly"],[/\/tháng/gu,"/month"],[/\/năm/gu,"/year"],[/([\d.]+)đ/gu,"$1 VND"],
 [/\bQuyển (\d)(?!\d)/gu,"Book $1"],[/\bBài (\d+)/gu,"Lesson $1"],[/\bCấp ([ABC]\d)/gu,"Level $1"],[/\bcấp ([ABC]\d)/gu,"level $1"],
 [/([\d.,]+) từ đã thuộc/gu,"$1 words learned"],[/([\d.,]+) từ(?![\p{L}])/gu,"$1 words"],[/([\d.,]+) bài(?![\p{L}])/gu,"$1 lessons"],[/([\d.,]+) câu(?![\p{L}])/gu,"$1 sentences"],[/([\d.,]+) nét(?![\p{L}])/gu,"$1 strokes"],[/([\d.,]+) bộ(?![\p{L}])/gu,"$1 radicals"],[/([\d.,]+) video(?![\p{L}])/gu,"$1 videos"],[/([\d.,]+) phút(?![\p{L}])/gu,"$1 min"],[/([\d.,]+) lượt(?![\p{L}])/gu,"$1 turns"],
 [/Mục tiêu (\d+)/u,"Goal $1"],[/^Từ (\d+)\/(\d+)/u,"Word $1/$2"],[/^Câu (\d+)\/(\d+)/u,"Sentence $1/$2"],[/Đúng (\d+)\/(\d+)/u,"Correct $1/$2"],[/Đạt (\d+)\/(\d+)/u,"Passed $1/$2"],[/Đã thuộc (\d+)\/(\d+) từ trong khóa này\./u,"$1/$2 words learned in this course."],
 [/sentences đúng/u,"sentences correct"],[/sentences trong bộ lọc/u,"sentences in this filter"],[/Đã thuộc ([\d\/]+) words trong khóa này\./u,"$1 words learned in this course."],
 [/^Đang ôn: (\d+) từ$/u,"In review: $1 words"],[/^Đến hạn: (\d+)$/u,"Due: $1"],[/Hoàn thành ([\d/]+)/u,"Completed $1"],[/Đang làm ([\d/]+)/u,"In progress $1"]
];
const _orig=new WeakMap();let _busy=false;
function trCore(core){
  if(EN[core]!==undefined)return EN[core];
  let t=core,ch=false;for(const [re,rep] of EN_RE){const n=t.replace(re,rep);if(n!==t){t=n;ch=true}}
  return ch?t:core;
}
function trText(s){
  const m=s.match(/^(\s*)([\s\S]*?)(\s*)$/),core=m[2];if(!core)return s;
  let r=trCore(core);
  if(r===core){
    const mm=core.match(/^((?:\p{Extended_Pictographic}\uFE0F?)\s*)?([\s\S]*?)(\s*🔒)?$/u);
    if(mm&&(mm[1]||mm[3])&&mm[2]){const inner=trCore(mm[2]);if(inner!==mm[2])r=(mm[1]||"")+inner+(mm[3]||"")}
  }
  return r===core?s:m[1]+r+m[3];
}
function trAttrs(el){
  for(const a of ["placeholder","title","aria-label"]){
    if(!el.hasAttribute||!el.hasAttribute(a))continue;const v=el.getAttribute(a),k="__o_"+a;
    if(LANG==="en"){const t=trText(v);if(t!==v){if(el[k]===undefined)el[k]=v;el.setAttribute(a,t)}}
    else if(el[k]!==undefined){el.setAttribute(a,el[k]);delete el[k]}
  }
}
function trWalk(root){
  _busy=true;
  try{
    const tw=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:n=>{const p=n.parentElement;return !p||/SCRIPT|STYLE|TEXTAREA/.test(p.tagName)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}});
    let n;while(n=tw.nextNode()){
      const rec=_orig.get(n),cur=n.nodeValue;
      if(LANG==="en"){
        if(rec&&cur===rec.t)continue;
        const t=trText(cur);if(t!==cur){_orig.set(n,{o:cur,t});n.nodeValue=t}else if(rec)_orig.delete(n);
      }else if(rec){if(cur===rec.t)n.nodeValue=rec.o;_orig.delete(n)}
    }
    if(root.querySelectorAll)root.querySelectorAll("[placeholder],[title],[aria-label]").forEach(trAttrs);if(root.nodeType===1)trAttrs(root);
  }finally{_busy=false}
}
let _trT=0;
function trSchedule(){if(_trT)return;_trT=requestAnimationFrame(()=>{_trT=0;trWalk(document.body);document.title=LANG==="en"?"Study Chinese — Traditional Chinese for Vietnamese learners":"Học Tiếng Trung 當代中文課程"})}
function setLang(l){
  LANG=l==="en"?"en":"vi";try{localStorage.setItem("lang",LANG)}catch(e){}
  document.documentElement.lang=LANG;langUI();trWalk(document.body);document.title=LANG==="en"?"Study Chinese — Traditional Chinese for Vietnamese learners":"Học Tiếng Trung 當代中文課程";track('lang',{l:LANG});
}
function langUI(){
  const f=$("#lgflag"),c=$("#lgcode");if(f)f.textContent=LANG==="en"?"🇬🇧":"🇻🇳";if(c)c.textContent=LANG==="en"?"EN":"VI";
  if(typeof uiAuth==="function")uiAuth();
}
function headerInit(){
  const btn=$("#lgbtn"),menu=$("#lgmenu");
  btn.onclick=e=>{e.stopPropagation();const o=menu.hidden;menu.hidden=!o;btn.setAttribute("aria-expanded",String(o))};
  menu.onclick=e=>{const b=e.target.closest("button");if(b){setLang(b.dataset.l);menu.hidden=true;btn.setAttribute("aria-expanded","false")}};
  document.addEventListener("click",()=>{menu.hidden=true;btn.setAttribute("aria-expanded","false")});
  $("#hAct").onclick=()=>showLogin();$("#hUser").onclick=showAccount;$("#hUp").onclick=()=>goPage("plans");
  new MutationObserver(()=>{if(!_busy&&LANG==="en")trSchedule()}).observe(document.body,{childList:true,subtree:true,characterData:true});
  document.documentElement.lang=LANG;langUI();if(LANG==="en")trSchedule();
}
