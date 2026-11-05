// TOCFL Band A (A1–A2) + Band B (B1–B2): hán|pinyin|nghĩa|loại từ|cấp
const TOCFL_DATA=`
啊|ā|a, à, á|P|A1
愛|ài|yêu, thích|VS|A1
安靜|ānjìng|yên tĩnh|VS|A1
吧|ba|nhé, hả?|P|A1
八|bā|tám|Det|A1
把|bǎ|trợ từ xử lý, cái ( dao, dù…)|Prep|A1
爸爸|bàba|cha|N|A1
百|bǎi|trăm|Det|A1
百貨公司|bǎihuògōngsī|Công ty bách hóa, TTTM|N|A1
白色|báisè|màu trắng|N|A1
班|bān|Chuyến ( xe, máy bay )|M|A1
班|bān|lớp|N|A1
搬|bān|dời|VA|A1
半|bàn|nửa,rưỡi|Det|A1
幫|bāng|giúp|VA|A1
辦公室|bàngōngshì|văn phòng|N|A1
棒球|bàngqiú|bóng chày|N|A1
包子|bāozi|bánh bao|N|A1
報紙|bàozhǐ|báo|N|A1
杯|bēi|ly|M|A1
被|bèi|bị, được|Prep|A1
北邊|běi biān|hướng Bắc|N|A1
杯子|bēizi|cái ly|N|A1
本|běn|cuốn|M|A1
本子|běnzi|tập|N|A1
比|bǐ|so sánh|Prep|A1
筆|bǐ|bút, viết|N|A1
別的|biéde|cái khác|Det|A1
比較|bǐjiào|khá là, …hơn|Adv|A1
比賽|bǐsài|trận đấu|N|A1
比賽|bǐsài|thi đấu|VA|A1
不客氣|búkèqì|đừng khách sáo||A1
不|bù|đừng|Adv|A1
不好意思|bùhǎoyìsi|ngại||A1
才|cái|mới ( sớm )|Adv|A1
菜|cài|món ăn, rau|N|A1
參加|cānjiā|tham gia|VA|A1
餐廳|cāntīng|nhà hàng|N|A1
茶|chá|trà|N|A1
長|cháng|dài|VS|A1
常常|chángcháng|thường|Adv|A1
唱歌|chànggē|ca hát|VA|A1
吵|chǎo|ồn, làm ồn|VS|A1
車(子)|chē(zi)|xe|N|A1
車站|chēzhàn|trạm xe|N|A1
成績|chéngjī|thành tích|N|A1
吃|chī|ăn|VA|A1
吃飽|chībǎo|ăn no|VS|A1
吃飯|chīfàn|ăn cơm|VA|A1
穿|chuān|mặc|VA|A1
船|chuán|thuyền|N|A1
窗|chuāng|cửa sổ|N|A1
床|chuáng|giường|N|A1
廚房|chúfáng|nhà bếp|N|A1
出國|chūguó|đi nước ngoài|VA|A1
出來|chūlái|ra|VA|A1
出去|chūqù|đi ra|VA|A1
春天|chūntiān|mùa xuân|N|A1
次|cì|lần|M|A1
從|cóng|từ|Prep|A1
錯|cuò|sai, nhầm|VS|A1
打|dǎ|đánh|VA|A1
打電話|dǎdiànhuà|gọi điện thoại|VA|A1
打開|dǎkāi|mở ra|VA|A1
大|dà|lớn|VS|A1
大家|dàjiā|mọi người|N|A1
大樓|dàlóu|nhà lầu|N|A1
大樓|dàngāo|bánh kem|N|A1
當然|dāngrán|đương nhiên|Adv|A1
到|dào|đến, tới|VA|A1
大學|dàxué|đại học|N|A1
的|de|trợ từ sở hữu, nhấn mạnh|P|A1
得|de|trợ từ bổ ngữ trình độ|P|A1
等|děng|chờ, đợi|VA|A1
第|dì|thứ tự|Det|A1
點(鐘)|diǎn(zhōng)|giờ (lượng từ chỉ giờ)|M|A1
電話|diànhuà|điện thoại|N|A1
電腦|diànnǎo|máy vi tính|N|A1
電視(機)|diànshì(jī)|Tivi|N|A1
電影|diànyǐng|phim|N|A1
電影院|diànyǐngyuàn|rạp chiếu phim|N|A1
弟弟|dìdi|em trai|N|A1
地方|dìfāng|nơi|N|A1
地上|dìshàng|dưới đất, trên mặt đất|N|A1
地圖|dìtú|bản đồ|N|A1
東邊|dōngbiān|hướng Đông|N|A1
冬天|dōngtiān|mùa đông|N|A1
東西|dōngxī|đồ|N|A1
懂|dǒng|hiểu|VS|A1
都|dōu|đều|Adv|A1
對|duì|đúng, đối với|VS|A1
對不起|duìbùqǐ|xin lỗi||A1
對面|duìmiàn|đối diện|N|A1
多|duō|nhiều lên|Adv|A1
多|duō|nhiều|VS|A1
多少|duōshǎo|bao nhiêu|Adv|A1
肚子|dùzǐ|bụng|N|A1
餓|è|đói|VS|A1
二|èr|hai|Det|A1
兒子|érzi|con trai ( của ai )|N|A1
飯|fàn|cơm, bữa ăn|N|A1
放|fàng|để, đặt|VA|A1
方便|fāngbiàn|tiện lợi|VS|A1
房間|fángjiān|phòng|N|A1
房子|fángzi|nhà|N|A1
非常|fēicháng|vô cùng|Adv|A1
飛機|fēijī|máy bay|N|A1
機場|jīchǎng|sân bay|N|A1
分鐘|fēnzhōng|phút|M|A1
封|fēng|bức ( thư )|M|A1
風|fēng|gió|N|A1
風景|fēngjǐng|phong cảnh|N|A1
附近|fùjìn|gần đây, ở gần|N|A1
乾淨|gānjìng|sạch sẽ|VS|A1
感冒|gǎnmào|cảm|VS|A1
高|gāo|cao|VS|A1
高興|gāoxìng|vui|VS|A1
告訴|gàosù|nói cho biết|VA|A1
個|gè|lượng từ: cái, người…|M|A1
哥哥|gēge|anh trai|N|A1
給|gěi|cho|VA|A1
跟|gēn|cùng, và|Conj|A1
更|gèng|còn…hơn nữa|Adv|A1
公共汽車|gōnggòng qìchē|xe buýt|N|A1
功課|gōngkè|bài tập về nhà, học hành|N|A1
公司|gōngsī|công ty|N|A1
公寓|gōngyù|chung cư|N|A1
公園|gōngyuán|công viên|N|A1
工作|gōngzuò|công việc|N|A1
狗|gǒu|chó|N|A1
關|guān|đóng|VA|A1
貴|guì|mắc tiền|VS|A1
過|guò|…qua|P|A1
過|guò|đi qua|VA|A1
國家|guójiā|nước, đất nước|N|A1
孩子|háizi|con, trẻ|N|A1
海邊|hǎibiān|bãi biển|N|A1
還是|háishì|hay là|Conj|A1
寒假|hánjià|nghỉ đông|N|A1
好|hǎo|rất|Adv|A1
好|hǎo|tốt|VS|A1
好吃|hǎochī|ăn ngon|VS|A1
好像|hǎoxiàng|hình như|Adv|A1
好玩|hǎowán|chơi vui|VS|A1
號|hào|số, ngày|M|A1
號碼|hàomǎ|số|N|A1
喝|hē|uống|VA|A1
和|hé|và|Conj|A1
很|hěn|rất|Adv|A1
紅色|hóngsè|màu đỏ|N|A1
後面|hòumiàn|phía sau|N|A1
花(兒)|huā(er)|bông hoa|N|A1
畫|huà|tranh|N|A1
畫畫|huà huà|vẽ tranh|VA|A1
壞|huài|xấu, hư|VS|A1
換|huàn|đổi|VA|A1
黃色|huángsè|màu vàng|N|A1
歡迎|huānyíng|hoan nghênh|VS|A1
華語/華文|huáyǔ / huáwén|tiếng Hoa|N|A1
回家|huíjiā|về nhà|VA|A1
回來|huílái|quay lại|VA|A1
回去|huíqù|đi về|VA|A1
會|huì|biết, sẽ|VS|A1
活動|huódòng|hoạt động, chương trình|N|A1
火車|huǒchē|xe lửa|N|A1
幾|jǐ|mấy, vài|Det|A1
寄|jì|gửi|VA|A1
加|jiā|thêm, cộng|VA|A1
家|jiā|nhà, gia đình|N|A1
家人|jiārén|người nhà|N|A1
間|jiān|căn ( phòng )|M|A1
件|jiàn|chiếc ( áo )|M|A1
健康|jiànkāng|khỏe mạnh|VS|A1
見面|jiànmiàn|gặp mặt|VA|A1
腳|jiǎo|chân|N|A1
腳踏車|jiǎotàchē|xe đạp|N|A1
叫|jiào|tên là, được gọi là|VA|A1
教室|jiàoshì|phòng học|N|A1
記得|jìdé|nhớ|VS|A1
接|jiē|đón|VA|A1
結束|jiéshù|kết thúc|VS|A1
介紹|jièshào|giới thiệu|VA|A1
今年|jīnnián|năm nay|N|A1
今天|jīntiān|hôm nay|N|A1
近|jìn|gần|VS|A1
進步|jìnbù|tiến bộ|VS|A1
進來|jìnlái|đi vào|VA|A1
進去|jìnqù|đi vô|VA|A1
九|jiǔ|chín|Det|A1
久|jiǔ|lâu|VS|A1
酒|jiǔ|rượu|N|A1
就|jiù|thì|Adv|A1
舊|jiù|cũ|VS|A1
覺得|juédé|cảm thấy|VS|A1
咖啡|kāfēi|cà phê|N|A1
開|kāi|lái, mở|VA|A1
開車|kāichē|lái xe|VA|A1
開始|kāishǐ|bắt đầu|VS|A1
看|kàn|xem|VA|A1
考試|kǎoshì|kì thi|N|A1
考試|kǎoshì|thi|VA|A1
卡片|kǎpiàn|thiệp|N|A1
可樂|kělè|coca|N|A1
可能|kěnéng|có thể, có lẽ|Adv|A1
可是|kěshì|nhưng|Conj|A1
可以|kěyǐ|có thể, được|Adv|A1
課|kè|bài, khóa học|N|A1
客廳|kètīng|phòng khách|N|A1
褲子|kùzi|quần|N|A1
快|kuài|mau|Adv|A1
快|kuài|nhanh|VS|A1
塊|kuài|đồng, cục, viên, miếng|M|A1
快樂|kuàilè|vui vẻ|VS|A1
來|lái|đến|VA|A1
籃球|lánqiú|bóng rổ|N|A1
老師|lǎoshī|giáo viên|N|A1
了|le|…rồi|P|A1
了|le|đã…|P|A1
累|lèi|mệt|VS|A1
冷|lěng|lạnh|VS|A1
冷氣(機)|lěngqì(jī)|máy lạnh|N|A1
離|lí|cách|VA|A1
離開|líkāi|rời xa|VA|A1
裡面|lǐmiàn|bên trong|N|A1
兩|liǎng|hai|Det|A1
六|liù|sáu|Det|A1
樓|lóu|lầu|M|A1
樓上|lóushàng|trên lầu|N|A1
樓下|lóuxià|dưới lầu|N|A1
路|lù|đường, lộ|N|A1
路口|lùkǒu|giao lộ|N|A1
旅行|lǚxíng|du lịch|VA|A1
綠色|lǜsè|màu xanh lá|N|A1
嗎|ma|trợ từ nghi vấn|P|A1
媽媽|māma|mẹ|N|A1
買|mǎi|mua|VA|A1
賣|mài|bán|VA|A1
忙|máng|bận|VS|A1
貓|māo|mèo|N|A1
毛|máo|lông|M|A1
每|měi|mỗi|Det|A1
美國|měiguó|nước Mỹ|N|A1
沒|méi|đã không, không có|Adv|A1
沒(有)|méi(yǒu)|không, không có|P|A1
沒關係|méiguānxì|không sao|VS|A1
沒問題|méiwèntí|không vấn đề|VS|A1
妹妹|mèimei|em gái|N|A1
門|mén|cửa|N|A1
門口|ménkǒu|ngoài cửa|N|A1
面|miàn|mì|N|A1
麵包|miànbāo|bánh mì|N|A1
明年|míngnián|năm tới|N|A1
明天|míngtiān|ngày mai|N|A1
名字|míngzì|tên|N|A1
拿|ná|lấy|VA|A1
哪裡/兒|nǎlǐ/er|đâu|N|A1
那裡/兒|nàlǐ/er|chỗ đó|N|A1
那些|nàxiē|những thứ đó|Det|A1
難|nán|khó|VS|A1
南(邊)|nán(biān)|phía nam|N|A1
男孩|nánhái|con trai, cậu bé|N|A1
男生|nánshēng|con trai|N|A1
呢|ne|trợ từ ngữ khí: thì sao? Nè?|P|A1
能|néng|có thể|Adv|A1
你|nǐ|bạn|N|A1
你們|nǐmen|các bạn|N|A1
年|nián|năm|N|A1
您|nín|ngài, ông, bà, anh, chị|N|A1
牛奶|niúnǎi|sữa bò|N|A1
女兒|nǚér|con gái ( của ai )|N|A1
女孩|nǚhái|con gái, cô bé|N|A1
女生|nǚshēng|con gái|N|A1
跑步|pǎobù|chạy bộ|VA|A1
朋友|péngyǒu|bạn bè|N|A1
便宜|piányi|rẻ tiền|VS|A1
票|piào|vé|N|A1
漂亮|piāoliàng|xinh đẹp|VS|A1
皮包|píbāo|túi xách|N|A1
瓶|píng|chai|M|A1
七|qī|7|Det|A1
騎|qí|chạy xe 2 bánh|VA|A1
千|qiān|ngàn|Det|A1
錢|qián|tiền|N|A1
前面|qiánmiàn|phía trước|N|A1
錢包|qiánbāo|ví tiền|N|A1
起床|qǐchuáng|thức dậy|VA|A1
請|qǐng|mời, xin|VA|A1
請問|qǐngwèn|xin hỏi||A1
球|qiú|bóng,banh|N|A1
秋天|qiūtiān|mùa thu|N|A1
去|qù|đi|VA|A1
去年|qùnián|năm ngoái|N|A1
熱|rè|nóng|VS|A1
熱狗|règǒu|hotdog|N|A1
熱鬧|rènào|náo nhiệt|VS|A1
人|rén|người|N|A1
認識|rènshi|quen biết, nhận ra|VS|A1
日本|rìběn|Nhật bản|N|A1
容易|róngyì|dễ|VS|A1
肉|ròu|thịt|N|A1
三|sān|3|Det|A1
傘|sǎn|dù|N|A1
山|shān|núi|N|A1
上|shàng|lên, trên|VA|A1
上面|shàng miàn|phía trên|N|A1
上班|shàngbān|vào làm, đi làm|VA|A1
商店|shāngdiàn|cửa hàng|N|A1
上課|shàngkè|lên lớp|VA|A1
上網|shàngwǎng|lên mạng|VA|A1
上午|shàngwǔ|buổi sáng|N|A1
少|shǎo|ít|VS|A1
誰|shéi|ai|N|A1
生病|shēngbìng|bị bệnh|VS|A1
生日|shēngrì|sinh nhật|N|A1
身體|shēntǐ|cơ thể, sức khỏe|N|A1
什麼|shénme|gì, cái gì|Det|A1
十|shí|10|Det|A1
時候|shíhòu|lúc, khi|N|A1
時間|shíjiān|thời gian|N|A1
時鐘|shízhōng|đồng hồ|N|A1
是|shì|là, phải|VA|A1
收到|shōudào|nhận được|VA|A1
手|shǒu|tay|N|A1
手機|shǒujī|điện thoại di động|N|A1
書|shū|sách|N|A1
書包|shūbāo|cặp đựng sách|N|A1
舒服|shūfú|dễ chịu|VS|A1
暑假|shǔjià|nghỉ hè|N|A1
樹|shù|cây|N|A1
雙|shuāng|đôi( giày, tay )|M|A1
水|shuǐ|nước|N|A1
水果|shuǐguǒ|trái cây|N|A1
睡覺|shuìjiào|ngủ|VA|A1
說|shuō|nói|VA|A1
說話|shuōhuà|nói chuyện|VA|A1
四|sì|4|Det|A1
宿舍|sùshè|ký túc xá|N|A1
歲|suì|tuổi|M|A1
算|suàn|tính|VA|A1
送|sòng|tặng, đưa tiễn|VA|A1
所以|suǒyǐ|cho nên|Conj|A1
他/她|tā/tā|anh ấy, cô ấy|N|A1
他們/她們|tāmen/tāmen|bọn họ|N|A1
太|tài|quá|Adv|A1
太太|tàitài|bà, vợ|N|A1
糖|táng|kẹo, đường|N|A1
特別|tèbié|đặc biệt|VS|A1
踢|tī|đá|VA|A1
天|tiān|ngày|M|A1
天|tiān|ngày, trời|N|A1
天氣|tiānqì|thời tiết|N|A1
跳舞|tiàowǔ|nhảy múa|VA|A1
聽|tīng|nghe|VA|A1
痛|tòng|đau|VS|A1
同學|tóngxué|bạn học|N|A1
頭|tóu|đầu|N|A1
圖片|túpiàn|hình|N|A1
圖書館|túshūguǎn|thư viện|N|A1
外面|wàimiàn|bên ngoài|N|A1
完|wán|hết, xong|VS|A1
玩(兒)|wán(er)|chơi|VA|A1
碗|wǎn|cái chén, cái tô|N|A1
碗|wǎn|chén, tô|M|A1
晚安|wǎnān|ngủ ngon|VS|A1
晚餐/晚飯|wǎncān/wǎnfàn|cơm tối|N|A1
晚上|wǎnshàng|buổi tối|N|A1
往|wǎng|về phía, hướng về|Prep|A1
網球|wǎngqiú|tennis|N|A1
網站|wǎngzhàn|website, trang web|N|A1
忘|wàng|quên|VS|A1
喂|wéi|alo|VS|A1
位|wèi|Vị (anh, chị, ông, bà)|M|A1
為什麼|wèishénme|tại sao|Adv|A1
問|wèn|hỏi|VA|A1
問題|wèntí|vấn đề, câu hỏi|N|A1
我|wǒ|tôi|N|A1
我們|wǒmen|chúng ta, chúng tôi|N|A1
五|wǔ|5|Det|A1
午餐/午飯|wǔcān/wǔfàn|cơm trưa|N|A1
洗|xǐ|rửa, tắm|VA|A1
下|xià|xuống|VA|A1
西邊|xībiān|phía tây|N|A1
下麵|xiàmiàn|phía dưới|N|A1
下班|xiàbān|tan ca|VA|A1
下課|xiàkè|tan học|VS|A1
夏天|xiàtiān|mùa hè|N|A1
下午|xiàwǔ|buổi chiều|N|A1
下雨|xiàyǔ|trời mưa|VA|A1
先|xiān|trước|Adv|A1
先生|xiānshēng|ông, anh, mr|N|A1
現在|xiànzài|bây giờ|N|A1
想|xiǎng|nghĩ, nhớ|VA|A1
像|xiàng|giống|VA|A1
小|xiǎo|nhỏ|VS|A1
小孩|xiǎohái|con, con nít|N|A1
小姐|xiǎojiě|cô, miss|N|A1
小時|xiǎoshí|giờ, tiếng đồng hồ|N|A1
小心|xiǎoxīn|cẩn thận|VS|A1
鞋子|xiézi|giày|N|A1
寫|xiě|viết|VA|A1
寫字|xiězì|viết chữ|VA|A1
謝謝|xièxie|cảm ơn|VS|A1
喜歡|xǐhuān|thích|VS|A1
洗手間|xǐshǒujiān|nhà vệ sinh|N|A1
洗衣機|xǐyījī|máy giặt|N|A1
洗澡|xǐzǎo|tắm|VA|A1
新|xīn|mới|VS|A1
新年|xīnnián|năm mới|N|A1
信|xìn|thư|N|A1
信封|xìnfēng|bìa thư|N|A1
星期|xīngqí|tuần|N|A1
星期日|xīngqítiān xīngqírì|chủ nhật|N|A1
行|xíng|ok, được|VS|A1
姓|xìng|họ|VA|A1
休息|xiūxí|nghỉ ngơi|VA|A1
學|xué|học|VA|A1
學生|xuéshēng|học sinh|N|A1
學校|xuéxiào|trường học|N|A1
眼睛|yǎnjīng|mắt|N|A1
要|yào|muốn, cần, phải, sẽ|VA|A1
藥|yào|thuốc|N|A1
也|yě|cũng|Adv|A1
一|yī|1|Det|A1
醫生|yīshēng|bác sỹ|N|A1
一點兒|yìdiǎnr|một ít|Det|A1
一定|yídìng|nhất định|Adv|A1
衣服|yīfú|quần áo|N|A1
醫院|yīyuàn|bệnh viện|N|A1
一共|yígòng|tổng cộng|Adv|A1
以後|yǐhòu|sau này, sau khi|N|A1
已經|yǐjīng|đã|Adv|A1
以前|yǐqián|trước đây, trước khi|N|A1
椅子|yǐzi|ghế|N|A1
一起|yìqǐ|cùng nhau|Adv|A1
一些|yìxiē|một vài|Det|A1
一樣|yíyàng|giống nhau|VS|A1
一直|yìzhí|cứ, hoài, mãi|Adv|A1
意思|yìsī|ý nghĩa|N|A1
銀行|yínháng|ngân hàng|N|A1
因為|yīnwèi|bởi vì|Conj|A1
音樂|yīnyuè|âm nhạc|N|A1
英國|yīngguó|Anh Quốc|N|A1
英文|yīngwén|tiếng Anh|N|A1
郵局|yóujú|bưu điện|N|A1
郵票|yóupiào|tem thư|N|A1
游泳|yóuyǒng|bơi|VA|A1
游泳池|yóuyǒngchí|hồ bơi|N|A1
有|yǒu|có|VA|A1
有點(兒)|yǒudiǎn(er)|hơi hơi|Adv|A1
有空|yǒukòng|rảnh|VS|A1
有時候|yǒushíhòu|có khi, có lúc|Adv|A1
有意思|yǒuyìsī|thú vị|VS|A1
又|yòu|lại, nữa|Adv|A1
右邊)|yòubiān|bên phải|N|A1
用|yòng|dùng, xài|VA|A1
魚|yú|cá|N|A1
元|yuán|đồng ( đơn vị tiền TQ )|M|A1
遠|yuǎn|xa|VS|A1
月|yuè|tháng|N|A1
運動|yùndòng|vận động, thể thao|N|A1
運動|yùndòng|vận động, tập thể dục|VA|A1
雨天|yǔtiān|ngày mưa|N|A1
再|zài|thêm, tiếp|Adv|A1
在|zài|đang|Adv|A1
在|zài|ở, lúc|Prep|A1
再見|zàijiàn|tạm biệt|VA|A1
早|zǎo|sớm|VS|A1
早餐|zǎocān|cơm sáng|N|A1
早上|zǎoshàng|buổi sáng|N|A1
怎麼|zěnme|sao?|Adv|A1
怎麼辦|zěnme bàn|làm sao? Tính sao?||A1
怎麼了|zěnme le|bị sao rồi?||A1
怎麼樣|zěnmeyàng|như thế nào?||A1
站|zhàn|trạm, bến|N|A1
站|zhàn|đứng|VA|A1
張|zhāng|tờ, tấm|M|A1
找|zhǎo|tìm|VA|A1
找到|zhǎodào|tìm được|VA|A1
照片|zhàopiàn|hình chụp|N|A1
照相|zhàoxiàng|chụp hình|VA|A1
照相機|zhàoxiàngjī|máy ảnh|N|A1
這裡/兒|zhèlǐ/er|chỗ này|N|A1
這些|zhèxiē|những thứ này|Det|A1
紙|zhǐ|giấy|N|A1
枝|zhī|cây ( viết )|M|A1
只|zhī|con ( chó, mèo )|M|A1
知道|zhīdào|biết|VS|A1
中國|zhōngguó|Trung Quốc|N|A1
中文|zhōngwén|tiếng Trung|N|A1
中午|zhōngwǔ|buổi trưa|N|A1
重要|zhòngyào|quan trọng|VS|A1
週末|zhōumò|cuối tuần|N|A1
住|zhù|sống, ở|VA|A1
桌子|zhuōzi|cái bàn|N|A1
自己|zìjǐ|tự mình|N|A1
姊姊/姐姐|jiějie|chị gái|N|A1
走|zǒu|đi|VA|A1
走路|zǒulù|đi bộ|VA|A1
足球|zúqiú|bóng đá|N|A1
最|zuì|nhất|Adv|A1
最近|zuìjìn|dạo này,gần nhất|Adv|A1
昨天|zuótiān|hôm qua|N|A1
左(邊)|zuǒbiān|bên trái|N|A1
坐|zuò|ngồi|VA|A1
做|zuò|làm|VA|A1
做飯|zuòfàn|làm cơm|VA|A1
做完|zuòwán|làm xong|VA|A1
阿姨|āyí|dì|N|A2
矮|ǎi|thấp|VS|A2
安全|ānquán|an toàn|VS|A2
白|bái|trắng|VS|A2
辦法|bànfǎ|biện pháp, cách|N|A2
棒|bàng|giỏi, tuyệt|VS|A2
幫忙|bāngmáng|giúp đỡ|VA|A2
包|bāo|gói, bao|M|A2
抱|bào|ôm, bòng|VA|A2
必須|bìxū|cần phải|Adv|A2
邊(兒)|biān(er)|bên, cạnh|N|A2
遍|biàn|lần, bận|M|A2
表|biǎo|đồng hồ|N|A2
別|bié|đừng|Adv|A2
別人|biérén|người khác|N|A2
餅乾|bǐnggān|bánh quy|N|A2
冰箱|bīngxiāng|tủ lạnh|N|A2
病|bìng|bệnh|N|A2
病人|bìngrén|người bệnh|N|A2
不錯|búcuò|khá, không tệ|VS|A2
不但|búdàn|không những|Conj|A2
不一定|bùyídìng|không nhất định|Adv|A2
不用|búyòng|không cần|Adv|A2
擦|cā|lau, chùi|VA|A2
猜|cāi|đoán|VA|A2
才|cái|mới, vừa mới|Adv|A2
菜單|càidān|menu, thực đơn|N|A2
餐桌|cānzhuō|bàn ăn|N|A2
草|cǎo|cỏ|N|A2
草地|cǎodì|bãi cỏ|N|A2
叉(子)|chā(zi)|cái nĩa|N|A2
超級市場|chāojí shìchǎng|siêu thị|N|A2
城市|chéngshì|thành phố|N|A2
襯衫|chènshān|áo sơ mi|N|A2
遲到|chídào|đến muộn|VS|A2
窗戶|chuānghù|cửa sổ|N|A2
吹|chuī|thổi|VA|A2
聰明|cōngmíng|thông minh|VS|A2
從前|cóngqián|hồi trước|N|A2
帶|dài|mang, dắt|VA|A2
戴|dài|đeo, đội|VA|A2
袋子|dàizi|túi, bọc|N|A2
蛋|dàn|trứng|N|A2
但是|dànshì|nhưng mà|Conj|A2
刀(子)|dāo(zi)|con dao|N|A2
倒|dào|rót, đổ|VA|A2
打掃|dǎsǎo|quét|VA|A2
打算|dǎsuàn|dự tính, định|VA|A2
大聲|dàshēng|lớn tiếng|VS|A2
大衣|dàyī|áo choàng|N|A2
德國|déguó|nước Đức|N|A2
低|dī|thấp|VS|A2
店|diàn|tiệm, quán|N|A2
電燈|diàndēng|đèn điện|N|A2
點(兒)|diǎn (er)|ít, tý|M|A2
點(兒)|diǎn (er)|chấm|N|A2
點菜|diǎncài|chọn món|VA|A2
點心|diǎnxīn|điểm tâm|N|A2
掉|diào|rớt|VS|A2
動|dòng|động|VA|A2
動物|dòngwù|động vật|N|A2
動物園|dòngwùyuán|sở thú|N|A2
讀|dú|đọc, học ở trường|VA|A2
讀書|dúshū|học, đọc sách|VA|A2
短|duǎn|ngắn|VS|A2
朵|duǒ|đóa ( hoa, mây )|M|A2
耳朵|ěrduō|lỗ tai|N|A2
法國|fǎguó|nước Pháp|N|A2
飯店|fàndiàn|khách sạn, nhà hàng|N|A2
方法|fāngfǎ|phương pháp|N|A2
放假|fàngjià|được nghỉ|VS|A2
放下|fàngxià|bỏ xuống|VA|A2
發生|fāshēng|xảy ra, phát sinh|VS|A2
發現|fāxiàn|phát hiện|VA|A2
飛|fēi|bay|VA|A2
父親|fùqīn|cha|N|A2
服務生|fúwùshēng|phục vụ viên|N|A2
幹|gān|khô|VS|A2
剛剛|gānggāng|mới vừa|Adv|A2
給|gěi|cho|Prep|A2
跟|gēn|cùng với|Prep|A2
恭喜|gōngxǐ|chúc mừng|VS|A2
工作|gōngzuò|làm việc|VA|A2
夠|gòu|đủ|VS|A2
掛|guà|treo|VA|A2
乖|guāi|ngoan|VS|A2
關上|guānshàng|đóng lại|VA|A2
果汁|guǒzhī|nước trái cây|N|A2
過來|guòlái|qua đây|VA|A2
過年|guònián|ăn tết|VA|A2
過去|guòqù|quá khứ|N|A2
過去|guòqù|đi qua ( bên kia )|VA|A2
故事|gùshì|câu chuyện|N|A2
還|hái|vẫn, còn|Adv|A2
海|hǎi|biển|N|A2
害怕|hàipà|e sợ|VS|A2
漢堡|hànbǎo|hamburger|N|A2
韓國|hánguó|Hàn Quốc|N|A2
漢語|hànyǔ|tiếng Hán|N|A2
漢字|hànzì|chữ Hán|N|A2
好看|hǎokàn|xinh đẹp|VS|A2
河|hé|sông|N|A2
盒子|hézi|cái hộp|N|A2
黑|hēi|đen|VS|A2
黑色|hēisè|màu đen|N|A2
紅|hóng|đỏ|VS|A2
紅包|hóngbāo|bao lì xì|N|A2
紅茶|hóngchá|hồng trà|N|A2
紅綠燈|hónglǜdēng|đèn xanh đỏ|N|A2
後來|hòulái|về sau|N|A2
護士|hùshì|y tá|N|A2
畫家|huàjiā|họa sỹ|N|A2
黃|huáng|vàng|VS|A2
花園|huāyuán|vườn hoa|N|A2
滑雪|huáxuě|trượt tuyết|VA|A2
會|huì|sẽ|Adv|A2
回答|huídá|trả lời|VA|A2
活|huó|sống|VS|A2
或|huò|hoặc|Conj|A2
或是|huòshì|hoặc là|Conj|A2
機會|jīhuì|cơ hội|N|A2
記|jì|ghi chép, nhớ|VA|A2
計程車|jìchéngchē|taxi|N|A2
計畫|jìhuà|kế hoạch|N|A2
計畫|jìhuà|dự định, lặp kế hoạch|VA|A2
家庭|jiātíng|gia đình|N|A2
簡單|jiǎndān|đơn giản|VS|A2
件|jiàn|cái ( áo, quần, việc, quà )|M|A2
講話|jiǎnghuà|nói chuyện|VA|A2
教|jiāo|dạy|VA|A2
交|jiāo|giao, nộp|VA|A2
餃子|jiǎozi|há cảo|N|A2
結婚|jiéhūn|kết hôn|VA|A2
節目|jiémù|tiết mục|N|A2
解決|jiějué|giải quyết|VA|A2
借|jiè|mượn, cho mượn|VA|A2
斤|jīn|cân ( 500gr )|M|A2
經過|jīngguò|trãi qua|VA|A2
員警|jǐngchá|cảnh sát|N|A2
緊張|jǐnzhāng|căng thẳng|VS|A2
就要|jiùyào|sắp sửa|Adv|A2
決定|juédìng|quyết định|VA|A2
句子|jùzi|câu|N|A2
開始|kāishǐ|bắt đầu|VA|A2
開水|kāishuǐ|nước chín|N|A2
開心|kāixīn|vui vẻ|VS|A2
開學|kāixué|vào học|VS|A2
看到|kàndào|nhìn được|VA|A2
看見|kànjiàn|nhìn thấy|VA|A2
烤|kǎo|nướng, quay|VA|A2
棵|kē|cây ( thông, táo, lê )|M|A2
科學|kēxué|khoa học|N|A2
渴|kě|khát|VS|A2
可愛|kěài|dễ thương|VS|A2
課本|kèběn|sách giáo khoa|N|A2
客氣|kèqì|khách sáo|VS|A2
客人|kèrén|khách|N|A2
課文|kèwén|bài học|N|A2
空氣|kōngqì|không khí|N|A2
口|kǒu|miệng, ngụm|M|A2
哭|kū|khóc|VA|A2
苦|kǔ|khổ|VS|A2
塊|kuài|đồng, miếng, cục|M|A2
筷子|kuàizi|đũa|N|A2
拉|lā|kéo|VA|A2
藍|lán|xanh lam|VS|A2
藍色|lánsè|màu xanh lam|N|A2
老|lǎo|già, cũ|VS|A2
老人|lǎorén|người già|N|A2
裡|lǐ|trong, bên trong|N|A2
裡邊|lǐbiān|bên trong|N|A2
禮物|lǐwù|quà|N|A2
臉|liǎn|mặt|N|A2
練習|liànxí|luyện tập|VA|A2
涼|liáng|lạnh, nguội|VS|A2
涼快|liángkuài|mát mẻ|VS|A2
亮|liàng|sáng|VS|A2
輛|liàng|chiếc ( xe )|M|A2
聊天|liáotiān|trò chuyện|VA|A2
零|líng|0, lẻ|Det|A2
留|liú|lưu, để lại, ở lại|VA|A2
樓|lóu|lầu, tầng lầu|N|A2
旅遊|lǚyóu|du lịch|VA|A2
綠|lǜ|xanh lục|VS|A2
亂|luàn|loạn, bậy|VS|A2
路上|lùshàng|trên đường|N|A2
麻煩|máfán|phiền phức|N|A2
麻煩|máfán|làm phiền|VS|A2
馬|mǎ|ngựa|N|A2
馬上|mǎshàng|lặp tức|Adv|A2
慢|màn|chậm|VS|A2
毛衣|máoyī|áo len|N|A2
帽子|màozi|nón|N|A2
美|měi|đẹp|VS|A2
美麗|měilì|xinh đẹp|VS|A2
摩托車|mótuōchē|xe máy|N|A2
木頭|mùtóu|gỗ|N|A2
哪|nǎ|nào|Det|A2
那邊|nàbiān|bên đó|N|A2
那麼|nàme|vậy, như vậy|Adv|A2
奶奶|nǎinai|bà nội|N|A2
難過|nánguò|buồn|VA|A2
年紀|niánjì|tuổi tác|N|A2
年輕|niánqīng|trẻ tuổi|VS|A2
念|niàn|đọc, học|VA|A2
小鳥|xiǎo niǎo|chim|N|A2
努力|nǔlì|nổ lực, cố gắng|VS|A2
暖和|nuǎnhuo|ấm áp|VS|A2
爬|pá|leo, trèo|VA|A2
爬山|páshān|leo núi|VA|A2
怕|pà|sợ|VS|A2
拍|pāi|chụp hình, vỗ|VA|A2
盤|pán|dĩa, đĩa, mâm|M|A2
盤子|pánzi|cái dĩa|N|A2
旁邊|pángbiān|bênh cạnh|N|A2
胖|pàng|mập|VS|A2
跑|pǎo|chạy|VA|A2
片|piàn|miếng, lát, mãnh|M|A2
蘋果|píngguǒ|táo|N|A2
瓶子|píngzi|cái chai,cái bình|N|A2
破|pò|bễ, vỡ|VS|A2
奇怪|qíguài|kì cục|VS|A2
汽水|qìshuǐ|nước có ga|N|A2
起|qǐ|dậy, lên|VA|A2
起來|qǐlái|dậy, mọc|VA|A2
汽車|qìchē|xe hơi|N|A2
鉛筆|qiānbǐ|bút chì, viết chì|N|A2
前天|qiántiān|hôm kia|N|A2
牆|qiáng|tường|N|A2
橋|qiáo|cầu|N|A2
巧克力|qiǎokèlì|sô cô la|N|A2
親|qīn|hôn, ruột thịt|VA|A2
輕|qīng|nhẹ|VS|A2
清楚|qīngchǔ|rõ ràng|VS|A2
晴天|qíngtiān|trời nắng|N|A2
請客|qǐngkè|mời khách, khao, bao|VA|A2
慶祝|qìngzhù|chúc mừng, ăn mừng|VA|A2
全部|quánbù|toàn bộ|Det|A2
裙子|qúnzi|cái váy, đầm|N|A2
然後|ránhòu|sau đó|Adv|A2
讓|ràng|để, nhường, kêu, bảo|Prep|A2
認為|rènwéi|cho rằng|VA|A2
認真|rènzhēn|nghiêm túc|VS|A2
日|rì|ngày|N|A2
日子|rìzi|ngày ( lễ )|N|A2
如果|rúguǒ|nếu|Conj|A2
森林|sēnlín|rừng rậm|N|A2
沙發|shāfā|ghế salon|N|A2
上來|shànglái|lên đây|VA|A2
上去|shàngqù|đi lên đó|VA|A2
上學|shàngxué|đi học ở trường|VA|A2
生活|shēnghuó|cuộc sống|N|A2
生活|shēnghuó|sinh sống|VA|A2
生氣|shēngqì|giận|VS|A2
聲音|shēngyīn|âm thanh|N|A2
事|shì|việc|N|A2
試|shì|thử|VA|A2
市場|shìchǎng|chợ|N|A2
世界|shìjiè|thế giới|N|A2
事情|shìqíng|sự việc|N|A2
石頭|shítóu|đá|N|A2
食物|shíwù|thức ăn|N|A2
手套|shǒutào|găng tay|N|A2
瘦|shòu|ốm|VS|A2
書桌|shūzhuō|bàn đọc sách|N|A2
數|shǔ|đếm|VA|A2
刷牙|shuāyá|đánh răng|VA|A2
睡|shuì|ngủ|VA|A2
酸|suān|chua|VS|A2
雖然|suīrán|tuy|Conj|A2
隨便|suíbiàn|tùy, tùy tiện|VS|A2
所有|suǒyǒu|tất cả|Det|A2
談|tán|trò chuyện|VA|A2
湯|tāng|canh|N|A2
湯匙|tāngchí|muỗng canh|N|A2
討厭|tǎoyàn|ghét, thấy ghét|VS|A2
套|tào|bộ ( tem, quần áo )|M|A2
疼|téng|đau, nhức|VS|A2
天天|tiāntiān|ngày ngày|Adv|A2
甜|tián|ngọt|VS|A2
條|tiáo|con (cá, rắn), cái (quần, váy)|M|A2
跳|tiào|nhảy|VA|A2
聽見|tīngjiàn|nghe thấy|VA|A2
聽說|tīngshuō|nghe nói|VA|A2
停|tíng|dừng|VS|A2
停車|tíngchē|dừng xe|VA|A2
通知|tōngzhī|thông báo|N|A2
偷|tōu|trộm|VA|A2
頭髮|tóufǎ|tóc|N|A2
推|tuī|đẩy|VA|A2
腿|tuǐ|chân, đùi|N|A2
外套|wàitào|áo khoác|N|A2
危險|wéixiǎn|nguy hiểm|VS|A2
味道|wèidào|mùi vị|N|A2
無聊|wúliáo|chán, buồn chán|VS|A2
西瓜|xīguā|dưa hấu|N|A2
希望|xīwàng|hi vọng|VS|A2
習慣|xíguàn|thói quen, quen|N|A2
需要|xūyào|cần thiết|VS|A2
許多|xǔduō|rất nhiều|Det|A2
下來|xiàlái|xuống đây|VA|A2
下去|xiàqù|đi xuống|VA|A2
下雪|xiàxuě|trời tuyết|VA|A2
香|xiāng|thơm|VS|A2
鄉下|xiāngxià|dưới quê|N|A2
相信|xiāngxìn|tin tưởng|VS|A2
箱子|xiāngzi|vali|N|A2
向|xiàng|hướng về|Prep|A2
消息|xiāoxí|tin tức|N|A2
小說|xiǎoshuō|tiểu thuyết|N|A2
小偷|xiǎotōu|kẻ trộm|N|A2
小學|xiǎoxué|tiểu học|N|A2
笑|xiào|cười|VA|A2
笑話|xiàohuà|chuyện cười|N|A2
校長|xiàozhǎng|hiệu trưởng|N|A2
心|xīn|tim|N|A2
辛苦|xīnkǔ|cực khổ|VS|A2
新聞|xīnwén|tin tức, thời sự|N|A2
星星|xīngxīng|ngôi sao|N|A2
興趣|xìngqù|sở thích, hứng thú|N|A2
學習|xuéxí|học tập|VA|A2
雪|xuě|tuyết|N|A2
牙刷|yáshuā|bàn chải đánh răng|N|A2
顏色|yánsè|màu sắc|N|A2
眼鏡|yǎnjìng|mắt kính|N|A2
鑰匙|yàoshí|chìa khóa|N|A2
要是|yàoshì|nếu như|Conj|A2
羊|yáng|con dê|N|A2
樣子|yàngzi|kiểu dáng, dáng vẻ|N|A2
也許|yěxǔ|có lẻ|Adv|A2
爺爺|yéye|ông nội|N|A2
一半|yíbàn|1 nửa|Det|A2
一邊|yìbiān|vừa…vừa…|Adv|A2
一會兒|yíhuìér|một hồi, tý nữa|N|A2
飲料|yǐnliào|thức uống|N|A2
陰天|yīntiān|trời âm u|N|A2
應該|yīnggāi|nên|Adv|A2
永遠|yǒngyuǎn|mãi mãi|Adv|A2
有趣|yǒuqù|thú vị|VS|A2
有用|yǒuyòng|hữu dụng|VS|A2
又|yòu|vừa…vừa…|Conj|A2
雨|yǔ|mưa|N|A2
圓|yuán|tròn|VS|A2
原來|yuánlái|hóa ra, thì ra|Adv|A2
院子|yuànzi|sân|N|A2
願意|yuànyì|chịu|VS|A2
約|yuē|hẹn|VA|A2
越來越|yuèláiyuè|ngày càng|Adv|A2
月亮|yuèliàng|mặt trăng|N|A2
語法|yǔfǎ|ngữ pháp|N|A2
語言|yǔyán|ngôn ngữ|N|A2
雲|yún|mây|N|A2
髒|zāng|dơ, bẩn|VS|A2
炸雞|zhájī|gà rán|N|A2
張|zhāng|tấm, tờ, miếng|M|A2
著急|zhāojí|sốt ruột|VS|A2
著|zhe|vẫn đang, có|P|A2
這邊|zhèbiān|bên này|N|A2
這麼|zhème|như vậy|Adv|A2
真|zhēn|thật là|Adv|A2
真|zhēn|thật|VS|A2
正在|zhèngzài|đang|Adv|A2
枝|zhī|cây ( bút )|M|A2
只|zhī|con ( chó, mèo )|M|A2
只|zhǐ|chỉ|Adv|A2
只好|zhǐhǎo|chỉ đành, đành phải|Adv|A2
中間|zhōngjiān|ở giữa|N|A2
鐘頭|zhōngtóu|tiếng đồng hồ|N|A2
中心|zhōngxīn|trung tâm|N|A2
種|zhǒng|loại|M|A2
種|zhòng|trồng|VA|A2
豬|zhū|heo|N|A2
煮|zhǔ|nấu|VA|A2
祝|zhù|chúc|VA|A2
裝|zhuāng|đựng, lắp ( máy )|VA|A2
準備|zhǔnbèi|chuẩn bị|VA|A2
注意|zhùyì|chú ý|VS|A2
字|zì|chữ|N|A2
總是|zǒngshì|luôn, cứ luôn|Adv|A2
租|zū|thuê|VA|A2
嘴巴|zuǐbā|cái miệng|N|A2
做菜|zuòcài|làm đồ ăn|VA|A2
作業|zuòyè|bài tập về nhà|N|A2
阿姨|āyí|Dì, cô|N|B1
哎|āi|Chao ôi, ơ kìa|Ptc|B1
唉|āi|Hừ (thán từ, tỏ ý ái ngại/thở dài)|Ptc|B1
愛|ài|Yêu|N|B1
愛情|àiqíng|Tình yêu|N|B1
愛惜|àixí|Yêu quý, quý trọng|Vst|B1
愛心|àixīn|Tình yêu/ biểu tượng trái tim|N|B1
安定|āndìng|ổn định, yên ổn|Vs|B1
安排|ānpái|Sự sắp xếp|N|B1
安排|ānpái|Sắp đặt, sắp xếp|V|B1
安心|ānxīn|Rắp tâm, mưu tính|Vs|B1
按|àn|Theo, dựa vào…|Prep|B1
按照|ànzhào|Dựa theo, căn cứ theo…|Prep|B1
巴士|bāshì|Xe buýt|N|B1
把|bǎ|Cán, quai, tay cầm, cuống|M|B1
把握|bǎwò|Cầm, nắm, nắm bắt|V|B1
白|bái|Trắng|Vs|B1
白(白)|bái(bái)|Vô ích|Adv|B1
白菜|báicài|Cải trắng|N|B1
白天|báitian|Ban ngày|N|B1
擺|bǎi|Xếp đặt, bày biện|V|B1
百貨公司|bǎihuògōngsī|Công ty bách hóa|N|B1
班機|bānjī|Chuyến bay|N|B1
搬家|bānjiā|-sep Dọn nhà, chuyển nhà|V|B1
辦|bàn|Xử lý, lo liệu|V|B1
辦理|bànlǐ|Giải quyết, thực hiện|V|B1
半天|bàntiān|Nửa ngày|N|B1
半夜|bànyè|Nửa đêm|N|B1
幫助|bāngzhù|Giúp đỡ|V|B1
榜樣|bǎngyàng|Tấm gương|N|B1
棒|bàng|Tốt, giỏi|Vs|B1
包|bāo|Bao lại, gói lại|V|B1
包含|bāohán|Bao hàm, hàm chứa|Vst|B1
寶貝|bǎobèi|Bảo bối, cục cưng|N|B1
寶貴|bǎoguì|Quý giá, quý báu|Vs|B1
保護|bǎohù|Bảo vệ, giữ gìn|V|B1
保守|bǎoshǒu|Tuân theo, tuân thủ|Vs|B1
保養|bǎoyǎng|Bảo dưỡng, chăm sóc|V|B1
保證/証|bǎozhèng|Vật chứng, vật đảm bảo|N|B1
保證/証|bǎozhèng|Cam đoan, bảo đảm|V|B1
抱|bào|Bế, bồng, ôm|V|B1
抱怨|bàoyuàn|Oán hận, oán trách|V|B1
報名|bàomíng|-sep Đăng ký, ghi danh|V|B1
背包|bēibāo|Ba lô, túi đeo vai|N|B1
北方|běifāng|Phương Bắc|N|B1
被動|bèidòng|Bị động|Vs|B1
背後|bèihòu|Phía sau|N|B1
背景|bèijǐng|Phông nền, cảnh|N|B1
輩子|bèizi|Cuộc đời|N|B1
本|běn|Gốc, thân|Det|B1
本人|běnrén|Bản thân, tự mình|N|B1
本子|běnzi|Cuốn vở|N|B1
笨|bèn|Ngốc nghếch|Vs|B1
逼|bī|Dồn ép|V|B1
筆|bǐ|Bút|M|B1
比|bǐ|So sánh, so với|V|B1
比如(說)|bǐrú(shuō)|Ví dụ như|Prep|B1
畢竟|bìjìng|Rốt cuộc, suy cho cùng|Adv|B1
避免|bìmiǎn|Tránh, phòng ngừa|V|B1
必要|bìyào|Cần thiết|Vs|B1
鞭炮|biānpào|Pháo, bánh pháo|N|B1
變|biàn|Thay đổi|Vp|B1
變成|biànchéng|Biến thành, trở thành|Vpt|B1
變更|biàngēng|Thay đổi, biến đổi|V|B1
變化|biànhuà|Sự thay đổi|N|B1
變化|biànhuà|Biến hóa|Vs|B1
便條|biàntiáo|Giấy ghi chú|N|B1
標準|biāozhǔn|Chuẩn mực|N|B1
標準|biāozhǔn|Tiêu chuẩn|Vs|B1
表|biǎo|Bề ngoài, mặt ngoài|N|B1
表達|biǎodá|Bày tỏ|V|B1
表面|biǎomiàn|Mặt ngoài, phía ngoài|N|B1
表示|biǎoshì|Biểu thị, tỏ ý|V|B1
表現|biǎoxiàn|Biểu hiện|N|B1
表現|biǎoxiàn|Thể hiện, tỏ ra|V|B1
表演|biǎoyǎn|Biểu diễn|V|B1
別的|biéde|Cái khác|Det|B1
冰|bīng|Đá, băng|N|B1
冰塊/冰塊兒|bīngkuài/bīngkuàir|Viên đá, khối đá|N|B1
餅|bǐng|Bánh|N|B1
病|bìng|Bệnh, ốm đau|Vp|B1
伯伯|bóbo|Bác trai|N|B1
博士|bóshì|Tiến sĩ|N|B1
播|bò|Truyền bá|V|B1
不必|bùbì|Không cần, khỏi phải|Vaux|B1
不斷|bùduàn|Không ngừng|Adv|B1
不斷|bùduàn|Liên tục, liên tiếp|Vs|B1
不過|bùguò|Vừa mới|Adv|B1
不過|bùguò|Nhưng|Conj|B1
不見(了)|bùjiàn(le)|Không gặp, không thấy nữa|Vp|B1
不論|bùlùn|Cho dù, bất luận|Conj|B1
不幸|bùxìng|Bất hạnh|Vs|B1
不用說|bùyòngshuō|Không cần nói|Conj|B1
不得不|bùdébù|Không thể không|Adv|B1
不得了|bùdéliǎo|Cực kỳ|Vs|B1
不管|bùguǎn|Cho dù, bất kể|Conj|B1
不滿|bùmǎn|Không vừa lòng|Vs|B1
不如|bùrú|conj Không bằng||B1
不少|bùshǎo|Không ít|Det|B1
不少|bùshǎo|Nhiều|Vs|B1
不足|bùzú|Không đủ|Vs|B1
部|bù|Bộ phận, phòng ban|M|B1
部分/份|bùfen|Một phần|Det|B1
部分/份|bùfen|Bộ phận|N|B1
部門|bùmén|Ngành, bộ môn|N|B1
布|bù|Vài bố|N|B1
布/佈置|bùzhì|Sắp xếp, xếp đặt|V|B1
擦|cā|Chà, cọ xát|V|B1
猜|cāi|Đoán, phỏng đoán|V|B1
材料|cáiliào|Vật liệu, tư liệu|N|B1
採用|cǎiyòng|Áp dụng|V|B1
餐|cān|Bữa ăn|M|B1
餐桌|cānzhuō|Bàn ăn|N|B1
參考|cānkǎo|Tham khảo|V|B1
草地|cǎodì|Bãi cỏ, đồng cỏ|N|B1
草原|cǎoyuán|Thảo nguyên|N|B1
層|céng|Tầng lớp|M|B1
曾|céng|Từng|Adv|B1
曾經|céngjīng|Đã từng|Adv|B1
差別|chābié|Khác biệt, chênh lệch|N|B1
差異|chāyì|Khác nhau|N|B1
查|chá|tra, kiểm tra|V|B1
差(一)點/ 差(一)點兒|chà(yī)diǎn/ chà(yī)diǎn|Kém 1 chút|Adv|B1
產品|chǎnpǐn|Sản phẩm|N|B1
產生|chǎnshēng|Sản sinh, xuất hiện|Vpt|B1
常|cháng|Thường, thông thường|Adv|B1
嘗/嚐試|chángshì|Nếm, thử|V|B1
場|chǎng|Sân|M|B1
超過|chāoguò|Vượt lên, vượt qua|Vpt|B1
超級|chāojí|-attr siêu, cực kì|Vs|B1
炒|chǎo|Xào|V|B1
吵|chǎo|ồn ào, ầm ĩ|V|B1
吵架|chǎojià|-sep Cãi nhau|V|B1
車禍|chēhuò|Tai nạn xe cộ|N|B1
趁|chèn|Nhân (lúc)|Prep|B1
成|chéng|Hoàn thành|Vpt|B1
成果|chéngguǒ|Kết quả, thành quả|N|B1
成就|chéngjiù|Thành tựu|N|B1
成熟|chéngshóu|Trưởng thành|Vs|B1
成長|chéngzhǎng|Lớn, trưởng thành|Vs|B1
程度|chéngdù|Trình độ, mức độ|N|B1
承認|chéngrèn|Thừa nhận|V|B1
誠實|chéngshí|Thành thật|Vs|B1
吃喝玩樂|chīhēwánlè|Sống phóng túng|Vi|B1
尺|chǐ|thước (đơn vị đo)|M|B1
充實|chōngshí|Phong phú, đầy đủ|Vs|B1
重新|chóngxīn|Lại lần nữa, lại từ đầu|Adv|B1
蟲(子)|chóng(zi)|Con sâu, sâu bọ|N|B1
抽|chōu|Rút ra|V|B1
醜|chǒu|Xấu|Vs|B1
臭|chòu|Hôi|Vs|B1
初|chū|Đầu tiên, thứ nhất|N|B1
出版|chūbǎn|Xuất bản|V|B1
出差|chūchāi|-sep Đi công tác|V|B1
出門|chūmén|-sep Đi ra ngoài|V|B1
出租|chūzū|Cho thuê|V|B1
除了|chúle|Ngoài ra|Prep|B1
除夕|chúxì|Giao thừa|N|B1
廚師|chúshī|Đầu bếp|N|B1
處理|chǔlǐ|Giải quyết (vấn đề)|V|B1
傳統|chuántǒng|Truyền thống|Vs|B1
串|chuàn|Xuyên suốt|M|B1
創造|chuàngzào|Sáng tạo, tạo ra|V|B1
吹|chuī|Thổi|V|B1
春節|chūnjié|Tết âm lịch|N|B1
詞|cí|Lời, từ|N|B1
此|cǐ|Này, cái này|Det|B1
刺激|cìjī|Sự thúc đẩy|N|B1
刺激|cìjī|Kích thích, kích động|Vs|B1
從不|cóngbù|Không bao giờ|Adv|B1
從來|cónglái|Từ trước đến nay|Adv|B1
從小|cóngxiǎo|Từ nhỏ|Adv|B1
醋|cù|Giấm|N|B1
存|cún|Tồn tại|V|B1
存在|cúnzài|Tồn tại, có thật|Vi|B1
寸|cùn|Tấc|M|B1
錯|cuò|Sai|N|B1
錯誤|cuòwù|Sai lầm, lệch lạc|N|B1
挫折|cuòzhé|Ngăn trở, chèn ép|N|B1
答應|dāyìng|Đồng ý|V|B1
達成|dáchéng|Đạt đến|Vpt|B1
打工|dǎgōng|-sep Làm thuê|V|B1
打架|dǎjià|-sep Đánh nhau|V|B1
打聽|dǎtīng|Nghe ngóng|V|B1
打仗|dǎzhàng|-sep Đánh trận|V|B1
打折|dǎzhé|-sep Giảm giá|V|B1
大大|dàdà|Rất, cực kỳ|Adv|B1
大多數|dàduōshù|Đại đa số|Det|B1
大方|dàfāng|Rộng rãi, phóng khoáng|Vs|B1
大概|dàgài|Đại khái, sơ lược|Adv|B1
大會|dàhuì|Đại hội, hội nghị|N|B1
大陸|dàlù|Đại lục|N|B1
大門|dàmén|Cổng chính|N|B1
大小|dàxiǎo|Lớn nhỏ|N|B1
大約|dàyuē|Khoảng chừng|Adv|B1
袋|dài|Bao, gói|M|B1
代表|dàibiǎo|Đại biểu|N|B1
代表|dàibiǎo|Đại diện|V|B1
代替|dàitì|Thay thế|V|B1
帶來|dàilái|Đem đến, mang lại|V|B1
帶領|dàilǐng|Dẫn dắt|V|B1
單純|dānchún|Đơn thuần|Vs|B1
單身|dānshēn|Độc thân|Vs|B1
擔任|dānrèn|Đảm nhiệm|V|B1
但|dàn|Nhưng|Conj|B1
淡|dàn|Nhạt|Vs|B1
當|dāng|Xác đáng, thích hợp|Vst|B1
當場|dāngchǎng|Tại chỗ|Adv|B1
當地|dāngdì|Bản địa|N|B1
當面|dāngmiàn|Trước mặt|Adv|B1
當年|dāngnián|Năm đó|N|B1
當天|dàngtiān|Ngày hôm đó|N|B1
當中|dāngzhōng|Trong khi|N|B1
當作|dàngzuò|Coi như, xem như|Vst|B1
當做|dàngzuò|Cho rằng, coi như là|Vst|B1
倒|dǎo|Đảo ngược|V|B1
島|dǎo|Đảo|N|B1
導演|dǎoyǎn|Đạo diễn|N|B1
到|dào|Đến|Conj|B1
到|dào|Chu đáo, đầy đủ|Prep|B1
到處|dàochù|Khắp nơi|Adv|B1
到底|dàodǐ|Đến cuối cùng|Adv|B1
到底|dàodǐ|-pred Rốt cuộc, suy cho cùng|Vs|B1
道德|dàodé|Đạo đức|N|B1
道教|dàojiào|Đạo giáo|N|B1
道理|dàolǐ|Đạo lý, quy luật|N|B1
道歉|dàoqiàn|-sep Xin thứ lỗi|V|B1
倒|dào|Trái lại|Adv|B1
倒是|dàoshì|Ngược lại|Adv|B1
得|dé|Được, có được|Vaux|B1
得到|dédào|Đạt được|Vpt|B1
得意|déyì|Đắc ý|Vs|B1
得很|dehěn|Rất nhiều||B1
的話|dehuà|Nếu||B1
得|děi|Phải|Vpt|B1
燈光|dēngguāng|Ánh đèn|N|B1
等|děng|Đợi|V|B1
等/等等|děng/děngděng|Vân vân|Ptc|B1
等待|děngdài|Chờ đợi|V|B1
低|dī|Thấp|Vs|B1
敵人|dírén|Quân địch|N|B1
底|dǐ|Của|N|B1
底下|dǐxia|Phía dưới|N|B1
抵達|dǐdá|Đến nơi|V|B1
地|dì|Một cách|Ptc|B1
地板|dìbǎn|Sàn nhà, nền nhà|N|B1
地帶|dìdài|Miền, vùng|N|B1
地點|dìdiǎn|Địa điểm|N|B1
地理|dìlǐ|Địa lý|N|B1
地區|dìqū|Khu vực|N|B1
地攤|dìtān|Hàng rong, vỉa hè|N|B1
地位|dìwèi|Vị trí|N|B1
地下|dìxià|Ngầm, trong lòng đất|N|B1
地形|dìxíng|Địa hình|N|B1
點|diǎn|Giọt, hạt, chấm|M|B1
點|diǎn|Điểm|N|B1
點|diǎn|Ít, chút ít|V|B1
點/點兒|diǎn/diǎnr|Một chút||B1
電|diàn|Điện|N|B1
電車|diànchē|Tàu điện, xe điện|N|B1
電池|diànchí|Pin, bình điện, ắc-quy|N|B1
電燈|diàndēng|Đèn điện|N|B1
店員|diànyuán|Nhân viên cửa hàng|N|B1
調查|diàochá|Điều tra|V|B1
訂|dìng|Lập, ký kết|V|B1
丟|diū|Mất, thất lạc|Vpt|B1
東北|dōngběi|Đông bắc|N|B1
東方|dōngfāng|Phương Đông|N|B1
東南|dōngnán|Đông nam|N|B1
懂事|dǒngshì|Hiểu việc|Vs|B1
逗|dòu|Đùa, giỡn|V|B1
豆漿|dòujiāng|Sữa đậu nành|N|B1
都市|dūshì|Đô thị|N|B1
毒品|dúpǐn|Chất độc hại|N|B1
獨特|dútè|Đặc biệt|Vs|B1
讀者|dúzhě|Độc giả, người đọc|N|B1
段|duàn|Đoạn, quãng, khúc|M|B1
堆|duī|Chồng chất|M|B1
對|duì|Đối với|M|B1
對|duì|Hướng về|Prep|B1
對|duì|Đối chiếu|V|B1
對方|duìfāng|Đối phương|N|B1
對話|duìhuà|Đối thoại|N|B1
對了|duìle|Đúng rồi||B1
對象|duìxiàng|Đối tượng|N|B1
多多少少|duōduoshǎoshǎo|Hoặc nhiều hoặc ít|Adv|B1
多麼|duōme|Bao nhiêu, biết bao|Adv|B1
朵|duǒ|Đóa, đám|M|B1
頓|dùn|Đống|M|B1
嗯|en|ừm|Ptc|B1
而|ér|Và|Conj|B1
兒童|értóng|Nhi đồng|N|B1
發|fā|phát ra|V|B1
發表|fābiǎo|Phát biểu|V|B1
發財|fācái|-sep Phát tài|Vp|B1
發出|fāchū|Phát sinh|Vpt|B1
發達|fādá|Phát đạt|Vs|B1
發揮|fāhuī|Phát huy|V|B1
發覺|fājué|Phát giác|Vpt|B1
發明|fāmíng|Phát minh|N|B1
發明|fāmíng|Sáng chế|Vpt|B1
發脾氣|fāpíqi|Nổi nóng|Vi|B1
發票|fāpiào|Hóa đơn|N|B1
法律|fǎlǜ|Pháp luật|N|B1
翻|fān|Lật, đổ|V|B1
翻譯|fānyì|Phiên dịch|V|B1
煩惱|fánnǎo|Phiền não|Vs|B1
反而|fǎnér|Ngược lại|Conj|B1
反應|fǎnyìng|Phản ứng|N|B1
犯|fàn|Phạm (pháp)|Vst|B1
範圍|fànwéi|Phạm vi|N|B1
方面|fāngmiàn|Phương diện|N|B1
方式|fāngshì|Phương thức, cách thức|N|B1
房東|fángdōng|Chủ cho thuê nhà|N|B1
房客|fángkè|Khách thuê nhà|N|B1
房屋|fángwū|Nhà, tòa nhà|N|B1
訪問|fǎngwèn|Phỏng vấn|V|B1
放心|fàngxīn|-sep Yên tâm|Vs|B1
非|fēi|Không phải|Adv|B1
非|fēi|Sai, trái|Vst|B1
飛|fēi|Bay|Vi|B1
費用|fèiyòng|Chi phí|N|B1
分開|fēnkāi|Xa nhau, tách biệt|Vp|B1
份|fèn|Tách ra|M|B1
封|fēng|Phong tước|M|B1
豐富|fēngfù|Phong phú|Vs|B1
風格|fēnggé|Phong cách|N|B1
風俗|fēngsú|Phong tục|N|B1
佛教|fójiào|Phật giáo|N|B1
否則|fǒuzé|Nếu không, bằng không thì|Conj|B1
夫婦|fūfù|Vợ chồng|N|B1
符合|fúhé|Phù hợp|Vst|B1
福利|fúlì|Lợi ích|N|B1
服裝|fúzhuāng|Trang phục|N|B1
腐敗|fǔbài|Hủ bại, mục nát|Vs|B1
付出|fùchū|Trả giá|Vpt|B1
負擔|fùdān|Gánh nặng|N|B1
負擔|fùdān|Gánh vác, đảm nhiệm|V|B1
負責|fùzé|Chịu trách nhiệm|Vs|B1
複習|fùxí|Ôn tập|V|B1
該|gāi|Nên|Vaux|B1
改|gǎi|Thay đổi|V|B1
改變|gǎibiàn|Biến động, biến đổi|N|B1
改變|gǎibiàn|Cải biên, sửa đổi|V|B1
改進|gǎijìn|Cải tiến|V|B1
改善|gǎishàn|Cải thiện|V|B1
改天|gǎitiān|Ngày khác, hôm khác|Adv|B1
蓋|gài|Nắp, vung|V|B1
概念|gàiniàn|Khái niệm|N|B1
敢|gǎn|Dám|Vaux|B1
趕|gǎn|Đuổi theo, gấp, vội vàng|V|B1
趕快|gǎnkuài|Khẩn trương, vội vã|Adv|B1
趕上|gǎnshàng|Đuổi kịp|Vpt|B1
感動|gǎndòng|Cảm động, xúc động|Vs|B1
感想|gǎnxiǎng|Cảm tưởng, cảm nghĩ|N|B1
感興趣|gǎnxìngqù|Có hứng thú với|Vs|B1
剛|gāng|Chỉ vừa, vừa mới|Adv|B1
高速|gāosù|-attr Cao tốc, cực nhanh|Vs|B1
高中|gāozhōng|Cấp 3, trung học phổ thông|N|B1
搞|gǎo|Làm, tạo ra|V|B1
歌曲|gēqǔ|Ca khúc, bài hát|N|B1
歌星|gēxīng|Ngôi sao ca nhạc|N|B1
隔壁|gébì|Sát vách, bên cạnh|N|B1
革命|gémìng|Cách mạng|Vi|B1
個人|gèrén|Cá nhân|N|B1
個子/個兒|gèzi/gèr|Vóc dáng, vóc người|N|B1
各式各樣|gèshìgèyàng|-attr Đủ kiểu đủ loại|Vs|B1
各位|gèwèi|Các vị, mọi người|N|B1
個|ge|Cái|Ptc|B1
給|gěi|Cho, cung cấp|Prep|B1
跟|gēn|Với, cùng với|Prep|B1
跟|gēn|Đi theo|V|B1
根|gēn|Cuống, gốc|M|B1
根|gēn|Rễ, rễ cây|N|B1
根據|gēnjù|Căn cứ vào, dựa vào|Prep|B1
更加|gèngjiā|Hơn nữa, thêm|Adv|B1
公尺|gōngchǐ|Mét (đơn vị chiều dài)|M|B1
公分|gōngfēn|Cen-ti-mét|M|B1
公共|gōnggòng|-attr Công cộng|Vs|B1
公克|gōngkè|Gram|M|B1
公路|gōnglù|Đường cái, quốc lộ|N|B1
功夫|gōngfu|Bản lĩnh, công sức|N|B1
功能|gōngnéng|Công năng, tác dụng|N|B1
工具|gōngjù|Công cụ|N|B1
工業|gōngyè|Công nghiệp|N|B1
工作|gōngzuò|Công việc|Vi|B1
恭喜|gōngxǐ|Chúc mừng|V|B1
共|gòng|Chung, cùng nhau|Adv|B1
共同|gòngtóng|-attr Cộng đồng, chung|Vs|B1
貢獻|gòngxiàn|Cống hiến, sự đóng góp|N|B1
貢獻|gòngxiàn|Cống hiến|V|B1
溝通|gōutōng|Trao đổi, giao tiếp|V|B1
夠|gòu|Đủ, đầy đủ|Adv|B1
購買|gòumǎi|Mua, mua sắm|V|B1
姑娘|gūniáng|Cô gái|N|B1
古|gǔ|-attr Cổ, cổ xưa|Vs|B1
古代|gǔdài|Cổ đại|N|B1
古蹟|gǔjī|Cổ tích|N|B1
古老|gǔlǎo|Cổ kính, cũ xưa|Vs|B1
顧|gù|Ngoảnh lại nhìn|V|B1
故意|gùyì|Cố ý, cố tình|Vs|B1
刮|guā|Cạo|V|B1
乖|guāi|Ngoan ngoãn|Vs|B1
怪|guài|Kỳ quái|V|B1
怪|guài|Cực kỳ, vô cùng|Vs|B1
關|guān|Đóng lại, khép lại|Vp|B1
觀察|guānchá|Quan sát, xem xét|V|B1
觀點|guāndiǎn|Quan điểm|N|B1
觀念|guānniàn|Quan niệm|N|B1
觀眾|guānzhòng|Quần chúng|N|B1
管|guǎn|Quản lý, cai quản|V|B1
罐|guàn|Hộp, vại, lọ|M|B1
廣播|guǎngbò|Chương trình phát thanh|N|B1
廣播|guǎngbò|Phát thanh|Vi|B1
廣場|guǎngchǎng|Quảng trường|N|B1
廣告|guǎnggào|Quảng cáo|N|B1
逛|guàng|Đi dạo, đi bách bộ|V|B1
逛街|guàngjiē|-sep Tản bộ, dạo phố|V|B1
規矩|guījǔ|Quy tắc|N|B1
規模|guīmó|Quy mô|N|B1
鬼|guǐ|Ma quỷ|N|B1
貴姓|guìxìng|Quý danh, tên họ||B1
櫃子|guìzi|Cái tủ|N|B1
國內|guónèi|Quốc nội, trong nước|N|B1
國外|guówài|Nước ngoài|N|B1
國王|guówáng|Quốc vương, vua|N|B1
國語|guóyǔ|Quốc ngữ|N|B1
過去|guòqù|Đã qua, quá khứ|N|B1
過日子|guòrìzi|Sống, sinh hoạt|Vi|B1
嗨|hāi|Haizz (thở dài)|Ptc|B1
還好|háihǎo|Khá tốt, tàm tạm|Adv|B1
還是|háishì|Vẫn còn|Adv|B1
還要|háiyào|Cần phải|Adv|B1
海報|hǎibào|Áp phích|N|B1
海灘|hǎitān|Bãi biển|N|B1
海洋|hǎiyáng|Hải dương, biển cả|N|B1
害|hài|Hại, có hại|V|B1
害怕|hàipà|Sợ hãi|Vs|B1
行|háng|Hàng lối, ngành nghề|M|B1
航空|hángkōng|Hàng không|N|B1
好|hào|thích, hay (hào)|Vs|B1
好處|hǎochù|Có lợi, có ích|N|B1
好好/好好兒|hǎohǎo/hǎohǎor|Tốt lành, cẩn thận|Adv|B1
好幾|hǎojǐ|Nhiều, mấy|Det|B1
好了|hǎole|Được rồi, OK|Ptc|B1
好些|hǎoxiē|Nhiều, rất nhiều|Det|B1
和|hé|Và|Prep|B1
盒|hé|Hộp|M|B1
合|hé|hợp, cùng|Adv|B1
合唱|héchàng|Hợp xướng, đồng ca|V|B1
合作|hézuò|Hợp tác|Vs|B1
黑|hēi|Đen, đen tối|Vs|B1
恨|hèn|Hận, thù hận|Vst|B1
恨不得|hènbude|Mong muốn, khao khát|Vst|B1
紅|hóng|Đỏ|Vs|B1
紅包|hóngbāo|Tiền lì xì|N|B1
紅豆|hóngdòu|Đậu đỏ|N|B1
厚|hòu|Dày|Vs|B1
後|hòu|Sau|Det|B1
後|hòu|Phía sau|N|B1
忽然|hūrán|Bỗng nhiên, đột nhiên|Adv|B1
糊塗|hútú|Hồ đồ|Vs|B1
互相|hùxiāng|Lẫn nhau, với nhau|Adv|B1
花|huā|Tiêu (tiền/thời gian)|V|B1
花心|huāxīn|Lăng nhăng|Vs|B1
滑雪|huáxuě|-sep Trượt tuyết|V|B1
畫家|huàjiā|Họa sĩ|N|B1
話說回來|huàshuōhuílái|Quay lại chủ đề chính…||B1
話題|huàtí|Đề tài, chủ đề|N|B1
化妝品|huàzhuāngpǐn|Đồ trang điểm|N|B1
壞處|huàichù|Chỗ hỏng, điều có hại|N|B1
還|huán|Hoán đổi|V|B1
環保|huánbǎo|Bảo vệ môi trường|N|B1
黃|huáng|Vàng|Vs|B1
回|huí|Lần|M|B1
回答|huídá|Trả lời, đáp lại|N|B1
回想|huíxiǎng|Hồi tưởng, nhớ lại|V|B1
會|huì|hội, cuộc họp|N|B1
會場|huìchǎng|Hội trường|N|B1
會話|huìhuà|Hội họa|N|B1
會議|huìyì|Hội nghị|N|B1
婚禮|hūnlǐ|Hôn lễ, đám cưới|N|B1
婚姻|hūnyīn|Hôn nhân|N|B1
混亂|hùnluàn|Hỗn loạn, lẫn lộn|Vs|B1
活|huó|-attr Sống, sinh sống|Vs|B1
活動|huódòng|Hoạt động|Vi|B1
或許|huòxǔ|Có thể, có lẽ là|Adv|B1
基本|jīběn|Căn bản, cơ bản|N|B1
基本|jīběn|Chủ yếu|Vs|B1
基礎|jīchǔ|Nền móng, cơ sở|N|B1
基督教|jīdūjiào|Cơ đốc giáo|N|B1
激動|jīdòng|Xúc động|Vs|B1
激烈|jīliè|Quyết liệt, dữ dội|Vs|B1
積極|jījí|Tích cực, hăng hái|Vs|B1
機器|jīqì|Cơ khí, máy móc|N|B1
及|jí|Đạt đến|Conj|B1
急|jí|Gấp, vội|Vs|B1
極|jí|Đỉnh điểm|Adv|B1
極了|jíle|Vô cùng, cực kỳ||B1
擠|jǐ|Chen chúc|V|B1
擠|jǐ|Dồn lại|Vs|B1
既|jì|Đã, phàm đã…|Conj|B1
記|jì|Nhớ, ghi chép lại|Vst|B1
記錄|jìlù|Biên bản|N|B1
記錄|jìlù|Ghi chép lại|V|B1
記憶|jìyì|Hồi tưởng, ký ức|N|B1
季節|jìjié|Mùa, mùa vụ|N|B1
紀念|jìniàn|Đồ kỷ niệm|N|B1
紀念|jìniàn|Tưởng niệm|Vst|B1
技巧|jìqiǎo|Kỹ xảo|N|B1
繼續|jìxù|Tiếp tục|V|B1
加|jiā|Cộng, tăng thêm|V|B1
加強|jiāqiáng|Tăng cường|V|B1
加入|jiārù|Thêm vào, tham gia vào|Vpt|B1
加上|jiāshàng|Cộng vào, thêm vào đó|V|B1
加油|jiāyóu|Cố lên!|Vi|B1
家|jiā|Nhà, gia đình|M|B1
家鄉|jiāxiāng|Quê nhà, quê hương|N|B1
家長|jiāzhǎng|Phụ huynh|N|B1
假|jiǎ|Giả, không thật|Vs|B1
假如|jiǎrú|Giá như, nếu như|Conj|B1
假裝|jiǎzhuāng|Giả vờ|V|B1
架|jià|Cái giá, khung|M|B1
假日|jiàrì|Ngày nghỉ|N|B1
價值|jiàzhí|Giá trị (hàng hóa)|N|B1
肩膀|jiānbǎng|Bờ vài|N|B1
堅持|jiānchí|Kiên trì|Vs|B1
堅強|jiānqiáng|Kiên cường|Vs|B1
減|jiǎn|Giảm, trừ bớt|Vst|B1
減輕|jiǎnqīng|Giảm nhẹ|Vpt|B1
減少|jiǎnshǎo|Giảm thiểu|Vpt|B1
簡直|jiǎnzhí|Quả thật là|Adv|B1
見|jiàn|Trông thấy|Vpt|B1
建立|jiànlì|Xây dựng|V|B1
建設|jiànshè|Kiến thiết|N|B1
建設|jiànshè|Xây dựng, lập nên|V|B1
建議|jiànyì|Đề nghị, đề xuất|N|B1
建議|jiànyì|Đưa ra lời khuyên|V|B1
將來|jiānglái|Tương lai, sau này|N|B1
講價|jiǎngjià|Mặc cả, trả giá|Vi|B1
講究|jiǎngjiu|Chú trọng, chú ý|Vs|B1
獎學金|jiǎngxuéjīn|Học bổng|N|B1
降低|jiàngdī|Hạ thấp|Vpt|B1
醬油|jiàngyóu|Nước tương, xì dầu|N|B1
交|jiāo|Giao nộp|V|B1
交流|jiāoliú|Giao lưu, trao đổi|Vi|B1
交友|jiāoyǒu|Kết bạn|Vi|B1
驕傲|jiāoào|Kiêu ngạo, kiêu căng|Vs|B1
郊區|jiāoqū|Vùng ngoại ô|N|B1
角度|jiǎodù|Góc độ, quan điểm|N|B1
角色|jiǎo/juésè|Nhân vật, kiểu người|N|B1
叫|jiào|Kêu, gọi|V|B1
叫|jiào|Hô hoán|Vst|B1
較|jiào|So sánh|Adv|B1
教|jiào|Dạy dỗ|Vst|B1
教材|jiàocái|Tài liệu giảng dạy|N|B1
教導|jiàodǎo|Chỉ bảo, dạy bảo|V|B1
教法|jiàofǎ|Phương pháp giảng dạy|N|B1
教練|jiàoliàn|Huấn luyện viên|N|B1
教授|jiàoshòu|Truyền thụ|N|B1
教訓|jiàoxun|Giáo huấn, dạy dỗ|N|B1
教育|jiàoyù|Giáo dục, đào tạo|N|B1
教育|jiàoyù|Chỉ dẫn, dạy|V|B1
接觸|jiēchù|Tiếp xúc|V|B1
接受|jiēshòu|Tiếp thu|V|B1
接著|jiēzhe|Tiếp theo|Adv|B1
結|jié|Kết, đan thành|V|B1
結果|jiéguǒ|Kết quả|Conj|B1
結局|jiéjú|Kết cục|N|B1
節|jié|Mấu, khớp|M|B1
節日|jiérì|Ngày lễ, ngày hội|N|B1
解決|jiějué|Giải quyết|V|B1
解釋|jiěshì|Giải thích|V|B1
姊妹|jiěmèi|Chị em|N|B1
斤|jīn|Cân (=1/2kg)|M|B1
金(子)|jīn(zi)|Vàng|N|B1
緊|jǐn|Căng, kéo căng|Vs|B1
僅|jǐn|Vẻn vẹn, chỉ|Adv|B1
儘管|jǐnguǎn|Mặc dù, cho dù|Conj|B1
盡|jìn|Hết sức, cố|Vst|B1
進|jìn|Tiến vào|V|B1
進行|jìnxíng|Tiến hành|V|B1
進一步|jìnyíbù|Tiến lên 1 bước|Adv|B1
經|jīng|Trải qua|V|B1
經費|jīngfèi|Kinh phí|N|B1
經過|jīngguò|Quá trình|N|B1
經過|jīngguò|Trải qua, đi qua|Vst|B1
經驗|jīngyàn|Kinh nghiệm|Vpt|B1
精神|jīngshén|Tinh thần|N|B1
驚訝|jīngyà|Kinh ngạc|Vs|B1
酒吧|jiǔbā|Quán bar|N|B1
救|jiù|Cứu giúp|V|B1
舅舅|jiùjiu|Cậu (em của mẹ)|N|B1
舅媽|jiùmā|Mợ (vợ của cậu)|N|B1
就|jiù|Thì|Prep|B1
就是|jiùshì|Nhất định|Conj|B1
就算|jiùsuàn|Cho dù|Conj|B1
就要|jiùyào|Sẽ, sẽ đến|Adv|B1
居住|jūzhù|Cư trú, sống, ở|Vi|B1
橘子|júzi|Cây quýt, quả quýt|N|B1
舉|jǔ|Giương, nâng lên|V|B1
舉辦|jǔbàn|Tổ chức, cử hành|V|B1
舉手|jǔshǒu|-sep Giơ tay|V|B1
舉行|jǔxíng|Tiến hành, tổ chức|V|B1
句|jù|Câu|M|B1
聚|jù|Tụ tập|Vi|B1
劇本|jùběn|kịch bản|N|B1
劇情|jùqíng|Tình tiết vở kịch|N|B1
拒絕|jùjué|Từ chối, cự tuyệt|V|B1
距離|jùlí|Khoảng cách, cự ly|N|B1
具有|jùyǒu|Có, vốn có|Vst|B1
絕對|juéduì|Tuyệt đối|Adv|B1
軍隊|jūnduì|Quân đội|N|B1
軍人|jūnrén|Quân nhân|N|B1
卡車|kǎchē|Xe tải|N|B1
開放|kāifàng|Mở bỏ phong tỏa|V|B1
開花|kāihuā|-sep Nở hoa|Vp|B1
開朗|kāilǎng|Thoáng mát|Vs|B1
開始|kāishǐ|Bắt đầu|N|B1
開玩笑|kāiwánxiào|-sep Đùa, giỡn|V|B1
看不起|kànbuqǐ|Khinh thường, xem thường|Vst|B1
看法|kànfǎ|Cách nhìn, quan điểm|N|B1
看起來|kànqǐlái|Xem ra, coi như|Adv|B1
考|kǎo|Thi, hỏi, đố|V|B1
棵|kē|Cây, ngọn|M|B1
刻|kè|Khắc, mười lăm phút|M|B1
科|kē|Môn học, môn, khoa|M|B1
科技|kējì|Khoa học kĩ thuật|N|B1
科學|kēxué|Khoa học, ngành học|Vs|B1
可|kě|quả là, thật là (nhấn mạnh)|Adv|B1
可|kě|có thể, được|Vaux|B1
可靠|kěkào|Đáng tin|Vs|B1
可樂|kělè|Cô-ca|N|B1
可惡|kěwù|Đáng ghét, đáng giận|Vs|B1
可惜|kěxí|Đáng tiếc|Vs|B1
可以|kěyǐ|Có thể|Vaux|B1
渴望|kěwàng|Khát vọng, khát khao|Vst|B1
克|kè|Khắc, khắc chế|M|B1
克服|kèfú|Khắc phục|Vpt|B1
課程|kèchéng|Chương trình học|N|B1
課堂|kètáng|Tại lớp, trong lớp|N|B1
課文|kèwén|Bài khóa, bài văn|N|B1
客滿|kèmǎn|Không còn chỗ trống|Vp|B1
刻|kè|Khắc|V|B1
肯|kěn|Đồng ý, tán thành|Vaux|B1
肯定|kěndìng|Khẳng định|Vs|B1
空|kōng|Trống không|Vs|B1
空間|kōngjiān|Không gian|N|B1
空軍|kōngjūn|Không quân|N|B1
恐怕|kǒngpà|E rằng, sợ rằng|Adv|B1
空|kòng|Trống rỗng|Vs|B1
口|kǒu|Miệng|N|B1
口袋|kǒudài|Túi áo, túi, bao|N|B1
口味|kǒuwèi|Khẩu vị, hương vị|N|B1
誇張|kuāzhāng|Khoa trương|Vs|B1
快|kuài|Nhanh|Adv|B1
快要|kuàiyào|Sắp, suýt|Adv|B1
寬|kuān|Rộng, bao quát|Vs|B1
況且|kuàngqiě|Vả lại|Conj|B1
困難|kùnnán|Khó khăn, trở ngại|N|B1
困難|kùnnán|Gặp trắc trở, khó khăn|Vs|B1
擴大|kuòdà|Mở rộng, tăng thêm|V|B1
拉肚子|lādùzi|-sep Bị đau bụng, tiêu chảy|V|B1
啦|la|Đấy, nhé|Ptc|B1
來|lái|Đến|Adv|B1
來|lái|Xảy đến, xảy ra|Ptc|B1
來不及|láibùjí|Không kịp|Vs|B1
來得及|láidejí|Kịp, còn kịp|Vs|B1
藍|lán|Lam, xanh lam|Vs|B1
浪漫|làngmàn|Lãng mạn|Vs|B1
老公|lǎogōng|Chồng|N|B1
老虎|lǎohǔ|Con hổ|N|B1
老婆|lǎopo|Vợ|N|B1
老實|lǎoshi|Trung thành, trung thực|Vs|B1
老是|lǎoshì|Luôn luôn|Adv|B1
樂|lè|Âm nhạc|Vs|B1
樂觀|lèguān|Lạc quan, vui vẻ|Vs|B1
樂趣|lèqù|Niềm vui, hứng thú|N|B1
垃圾|lèsè|Rác, rác thải|N|B1
淚|lèi|Nước mắt, lệ|N|B1
類|lèi|Chủng loại|M|B1
冷淡|lěngdàn|Vắng lặng, lạnh nhạt|Vs|B1
離|lí|Xa rời, xa cách|Prep|B1
離婚|líhūn|-sep Li dị, li hôn|Vp|B1
里|lǐ|dặm|M|B1
裡邊|lǐbiān|Bên trong|N|B1
理解|lǐjiě|Hiểu, tìm hiểu|Vst|B1
理論|lǐlùn|Lý luận, lý thuyết|N|B1
理想|lǐxiǎng|Lý tưởng|N|B1
理想|lǐxiǎng|Ước vọng, hy vọng|Vs|B1
裏面|lǐmiàn|Bên trong|N|B1
禮堂|lǐtáng|Lễ đường|N|B1
力|lì|Lực, sức lực|N|B1
力量|lìlìang|Lực lượng, sức mạnh|N|B1
厲害|lìhai|Lợi hại, gay gắt, dữ dội|Vs|B1
立刻|lìkè|Ngay lập tức|Adv|B1
例如|lìrú|Ví dụ|Prep|B1
例子|lìzi|Thí dụ|N|B1
利益|lìyì|Lợi ích, quyền lợi|N|B1
利用|lìyòng|Sử dụng, dùng, lợi dụng|V|B1
連|lián|Ngay cả…|Conj|B1
連|lián|Gắn bó, nối liền|Vst|B1
連/聯絡|liánluò|Liên lạc, liên hệ|V|B1
連續劇|liánxùjù|Phim bộ, phim nhiều tập|N|B1
練|liàn|Luyện tập|V|B1
戀愛|liànài|Yêu đương|Vp|B1
涼|liáng|Để nguội|Vs|B1
良好|liánghǎo|Tốt đẹp|Vs|B1
亮|liàng|Phát sáng|Vs|B1
聊|liáo|Nói chuyện phiếm|V|B1
了不起|liǎobuqǐ|Giỏi lắm, khá lắm|Vs|B1
靈魂|línghún|Linh hồn|N|B1
零錢|língqián|Tiền lẻ|N|B1
零用錢|língyòngqián|Tiền tiêu vặt|N|B1
領|lǐng|Dẫn dắt|V|B1
領導|lǐngdǎo|Lãnh đạo|V|B1
領域|lǐngyù|Lĩnh vực|N|B1
令|lìng|Ra lệnh|Vst|B1
流|liú|Chảy, đổ, di chuyển|V|B1
流汗|liúhàn|-sep Đổ mồ hôi|V|B1
流血|liúxiě|-sep Đổ máu|V|B1
留學|liúxué|Du học|Vi|B1
留學生|liúxuéshēng|Du học sinh|N|B1
龍|lóng|Con rồng|N|B1
錄|lù|Ghi chép, thu (băng)|V|B1
錄取|lùqǔ|Tuyển chọn, nhận vào|V|B1
錄音|lùyīn|-sep Thu âm, ghi âm|V|B1
露營|lùyíng|-sep Đóng quân dã ngoại|V|B1
亂|luàn|Loạn, rối, lộn xộn|Vs|B1
輪胎|lúntāi|Lốp xe|N|B1
旅客|lǚkè|Lữ khách, hành khách|N|B1
綠|lǜ|Trở nên xanh|Vs|B1
律師|lǜshī|Luật sư|N|B1
麻煩|máfan|Phiền phức, phiền toái|Vs|B1
馬桶|mǎtǒng|Cái bô (có nắp)|N|B1
碼頭|mǎtou|Bến đò, bến sông|N|B1
螞蟻|mǎyǐ|Con kiến|N|B1
罵|mà|Chửi, mắng|V|B1
嘛|ma|Đi, mà|Ptc|B1
滿|mǎn|Đầy, chật|Det|B1
滿|mǎn|Thỏa mãn|Vs|B1
滿足|mǎnzú|Làm thỏa mãn, hài lòng|Vs|B1
慢慢|mànmàn|Chậm rãi||B1
慢跑|mànpǎo|Chạy bộ|Vi|B1
慢用|mànyòng|Ăn từ từ, thưởng thức món ăn|Vi|B1
毛|máo|Lông|N|B1
毛病|máobìng|Khuyết điểm, thói xấu|N|B1
貿易|màoyì|Thương mại, buôn bán|N|B1
沒|méi|Chưa|Ptc|B1
沒|méi|Chìm, lặn|Vp|B1
沒什麼|méishénme|Không sao, không việc gì|Vs|B1
沒想到|méixiǎngdào|Không ngờ rằng||B1
玫瑰|méigui|Hoa hồng|N|B1
每|měi|Mỗi|Adv|B1
美好|měihǎo|Tốt đẹp|Vs|B1
門|mén|Cửa, cánh cửa|M|B1
夢|mèng|Mơ, giấc mơ|N|B1
迷路|mílù|-sep Lạc đường|Vp|B1
迷人|mírén|Mê hoặc lòng người|Vs|B1
米飯|mǐfàn|Cơm|N|B1
米粉|mǐfěn|Bột gạo, bún|N|B1
秘/祕密|mìmì|Bí mật|N|B1
密切|mìqiè|Mật thiết|Vs|B1
免費|miǎnfèi|Miễn phí|Vs|B1
面|miàn|Mặt|M|B1
面|miàn|Trước mặt, đối diện|N|B1
面積|miànjī|Diện tích|N|B1
面前|miànqián|Phía trước, trước mặt|N|B1
麵條|miàntiáo|Mì sợi|N|B1
描寫|miáoxiě|Miêu tả|V|B1
秒|miǎo|Giây|M|B1
廟|miào|Miếu, đền thờ|N|B1
民國|mínguó|Dân quốc|N|B1
民族|mínzú|Dân tộc|N|B1
名|míng|Tên gọi|M|B1
名詞|míngcí|Danh từ|N|B1
明白|míngbái|Hiểu|Vpt|B1
明顯|míngxiǎn|Rõ ràng, nổi bật|Vs|B1
明星|míngxīng|Ngôi sao|N|B1
命|mìng|Sinh mệnh, mạng|N|B1
摸|mō|Mơ hồ|V|B1
摩托車/機車|mótuōchē/jīchē|Xe gắn máy, xe mô-tô|N|B1
陌生|mòshēng|Xa lạ, không quen|Vs|B1
某|mǒu|Nào đó|Det|B1
木|mù|Mộc, cây gỗ|N|B1
目的|mùdì|Mục đích|N|B1
目前|mùqián|Hiện nay, trước mắt|N|B1
拿手|náshǒu|Sở trường|Vs|B1
哪些|nǎxiē|Cái nào, người nào|Det|B1
那|nà|Kia, đó|Conj|B1
那麼|nàme|Như vậy, như thế|Conj|B1
那樣|nàyàng|Như thế|Adv|B1
那樣|nàyàng|như vậy|Vs|B1
哪|na|trợ từ ngữ khí|Ptc|B1
奶|nǎi|Sữa|N|B1
奶茶|nǎichá|Trà sữa|N|B1
耐心|nàixīn|Sự kiên nhẫn|N|B1
南方|nánfāng|Phương Nam|N|B1
難怪|nánguài|Thảo nào, hèn chi|Adv|B1
難看|nánkàn|Xấu xí, khó coi|Vs|B1
腦|nǎo|Não|N|B1
腦子|nǎozi|Não bộ|N|B1
鬧鐘|nàozhōng|Đồng hồ báo thức|N|B1
內|nèi|Trong, phía trong|N|B1
內容|nèiróng|Nội dung|N|B1
能|néng|Năng lực, có thể|Vaux|B1
能夠|nénggòu|Có khả năng|Vaux|B1
能力|nénglì|Năng lực, khả năng|N|B1
年|nián|Năm|N|B1
年代|niándài|Thời đại, thời kỳ|N|B1
年齡|niánlíng|Tuổi tác|N|B1
年年|niánnián|Hằng năm, mỗi năm|Adv|B1
念書|niànshū|-sep Học bài, đọc sách|V|B1
農業|nóngyè|Nông nghiệp|N|B1
女士|nǚshì|Bà, phu nhân, quý cô|N|B1
喔|ō|ờ|Ptc|B1
哦|ó|Ngâm thơ|Ptc|B1
噢|yǔ|ờ|Ptc|B1
拍|pāi|Đập, vỗ, phủi|V|B1
排|pái|Xếp, sắp xếp|V|B1
牌子|páizi|Thẻ, bảng, biển hiệu|N|B1
盼望|pànwàng|Trông mong, mong mỏi|Vst|B1
旁|páng|Bên cạnh|N|B1
陪|péi|ở cùng với|V|B1
培養|péiyǎng|Nuôi dưỡng, bồi dưỡng|V|B1
配|pèi|Kết đôi|V|B1
配合|pèihé|Kết hợp, phối hợp|V|B1
碰|pèng|Đụng, chạm, vấp phải|V|B1
碰到|pèngdào|Đi qua, đụng phải|Vpt|B1
碰上|pèngshàng|Gặp gỡ, đụng trúng|Vpt|B1
批評|pīpíng|Phê bình|V|B1
皮|pí|Vỏ, da|N|B1
皮帶|pídài|Dây thắt lưng|N|B1
皮膚|pífū|Da dẻ|N|B1
皮鞋|píxié|Giày da|N|B1
篇|piān|Bài, trang vở|M|B1
騙子|piànzi|Tên lừa đảo|N|B1
品質|pǐnzhí|Phẩm chất|N|B1
坪|píng|Bình địa, bãi|M|B1
平|píng|Bằng phẳng, san bằng|Vs|B1
平安|píngān|Bình an|Vs|B1
平等|píngděng|Bình đẳng|Vs|B1
平時|píngshí|Bình thường|N|B1
平原|píngyuán|Đồng bằng, bình nguyên|N|B1
瓶子|píngzi|Bình, chai|N|B1
破|pò|Vỡ, thủng|Vp|B1
破壞|pòhuài|Phá hoại, làm hỏng|V|B1
葡萄|pútao|Trái nho|N|B1
普遍|pǔbiàn|Phổ biến|Vs|B1
欺負|qīfù|Bắt nạt, ăn hiếp|V|B1
其次|qícì|Lần sau, lần tiếp theo|Conj|B1
其實|qíshí|Thực ra|Adv|B1
其中|qízhōng|Trong đó|Det|B1
期|qí|kỳ, giai đoạn|M|B1
期間|qíjiān|Dịp, thời kì, thời gian|N|B1
起|qǐ|Rời khỏi, nảy lên|N|B1
起|qǐ|Nhổ, nhấc, lôi lên|V|B1
起來|qǐlái|Ngồi dậy, đứng dậy|Ptc|B1
氣|qì|Không khí, hơi thở|N|B1
氣|qì|Bực bội, nổi cáu|Vst|B1
氣溫|qìwēn|Nhiệt độ không khí|N|B1
汽水|qìshuǐ|Nước có ga|N|B1
企業|qìyè|Xí nghiệp|N|B1
簽名|qiānmíng|-sep Ký tên|V|B1
簽證|qiānzhèng|Thị thực, visa|N|B1
謙虛|qiānxū|Khiêm tốn, khiêm nhường|Vs|B1
前|qián|Trước|Det|B1
前|qián|Phía trước|N|B1
前年|qiánnián|Năm trước, năm kia|N|B1
淺|qiǎn|Róc rách (tiếng nước chảy)|Vs|B1
強盜|qiángdào|Bọn giặc, bọn cướp|N|B1
強調|qiángdiào|Cường điệu, nhấn mạnh|V|B1
搶|qiǎng|Va, đập|V|B1
親|qīn|Thông gia, sui gia|V|B1
親切|qīnqiè|Thân mật, thân thiết|Vs|B1
親手|qīnshǒu|Tự tay, chính tay|Adv|B1
親眼|qīnyǎn|Tận mắt, chính mắt|Adv|B1
親自|qīnzì|Tự mình, đích thân|Adv|B1
清|qīng|-pred Trong suốt, trong veo|Vs|B1
青年|qīngnián|Tuổi trẻ, thanh niên|N|B1
青少年|qīngshàonián|Vị thành niên, thiếu niên|N|B1
輕鬆|qīngsōng|Nhẹ nhàng, nhẹ nhõm|Vs|B1
晴|qíng|-pred Trời quang|Vs|B1
情|qíng|Tình cảm|N|B1
情人|qíngrén|Tình nhân, người yêu|N|B1
情況|qíngkuàng|Tình huống|N|B1
情形|qíngxíng|Tình hình|N|B1
請教|qǐngjiào|Thỉnh giáo, xin chỉ bảo|V|B1
請求|qǐngqiú|Thỉnh cầu, đề nghị|V|B1
窮|qióng|Nghèo nàn|Vs|B1
求|qiú|Thỉnh cầu, yêu cầu|V|B1
球|qiú|Hình cầu|N|B1
球場|qiúchǎng|Sân bóng|N|B1
球賽|qiúsài|Cuộc thi đấu bóng|N|B1
球員|qiúyuán|Cầu thủ|N|B1
取代|qǔdài|Lật đổ, thay thế địa vị|V|B1
去|qù|Rời bỏ, mất đi|Adv|B1
去|qù|Năm ngoái, mùa trước|Ptc|B1
去世|qùshì|Qua đời, mất|Vp|B1
全|quán|Đầy đủ, toàn bộ|Det|B1
全球|quánqiú|Toàn cầu, toàn thế giới|N|B1
全身|quánshēn|Toàn thân|N|B1
缺點|quēdiǎn|Khuyết điểm|N|B1
卻|què|Mà lại|Adv|B1
確定|quèdìng|Xác định|Vs|B1
確認|quèrèn|Xác nhận|V|B1
讓|ràng|Nhường|V|B1
熱狗|règǒu|Bánh hotdog|N|B1
熱水|rèshuǐ|Nước nóng|N|B1
人家|rénjiā|Nhà, hộ, gia đình|N|B1
人間|rénjiān|Nhân gian, trần gian|N|B1
人口|rénkǒu|Nhân khẩu, dân số|N|B1
人類|rénlèi|Loài người, nhân loại|N|B1
人們|rénmen|Mọi người|N|B1
人民|rénmín|Nhân dân|N|B1
人人|rénrén|Người người, mọi người|N|B1
人數|rénshù|Số người|N|B1
人物|rénwù|Nhân vật|N|B1
忍|rěn|Nhẫn nhịn, chịu đựng|Vs|B1
忍耐|rěnnài|Nhẫn nại|Vst|B1
認|rèn|Nhận thức, thừa nhận|V|B1
認得|rènde|Nhận ra, biết được|Vst|B1
任務|rènwù|Nhiệm vụ|N|B1
扔|rēng|Ném, vứt bỏ|Vpt|B1
仍|réng|Dựa vào, chiếu theo, dựa theo|Adv|B1
仍然|réngrán|Vẫn cứ, tiếp tục|Adv|B1
日出|rìchū|Bình minh|Vi|B1
日記|rìjì|Nhật ký|N|B1
日子|rìzi|Ngày, thời kỳ|N|B1
如|rú|Theo như, giống như|Conj|B1
如此|rúcǐ|Như vậy, như thế|Vs|B1
如下|rúxià|Như sau, như dưới đây|Vs|B1
如意|rúyì|Như ý, vừa ý|Vs|B1
弱|ruò|Yếu đuối, yếu sức|Vs|B1
傘|sǎn|Cái ô, dù|N|B1
殺|shā|Giết|V|B1
晒|shài|Phơi nắng, sưởi nắng|V|B1
山區|shānqū|Vùng núi, miền núi|N|B1
傷害|shānghài|Làm tổn thương|V|B1
商品|shāngpǐn|Hàng hóa|N|B1
商人|shāngrén|Thương nhân|N|B1
商業|shāngyè|Thương mại|N|B1
上|shàng|ở trên, bên trên|Det|B1
上|shàng|Trên, trước|N|B1
上當|shàngdàng|Bị lừa, mắc lừa|Vp|B1
上帝|shàngdì|Thượng đế|N|B1
上街|shàngjiē|Đi ra ngoài đường|Vi|B1
上衣|shàngyī|Mặc quần áo|N|B1
燒|shāo|Đốt, thiêu|V|B1
少|shǎo|Ít, thiếu, mất|Adv|B1
蛇|shé|Uốn khúc|N|B1
設備|shèbèi|Thiết bị|N|B1
設計|shèjì|Bản thiết kế|N|B1
設計|shèjì|Thiết kế|V|B1
深|shēn|Sâu, độ sâu|Vs|B1
深入|shēnrù|Thâm nhập, đi sâu vào|Vs|B1
身邊|shēnbiān|Bên cạnh|N|B1
身高|shēngāo|Chiều cao|N|B1
身上|shēnshàng|Trên người|N|B1
甚至|shènzhì|Thậm chí, đến nỗi|Adv|B1
升|shēng|Thăng lên, lên chức|V|B1
聲|shēng|Thanh, âm thanh|M|B1
聲調|shēngdiào|Thanh điệu, âm điệu|N|B1
生|shēng|Sinh đẻ, sinh trưởng|V|B1
生產|shēngchǎn|Sản xuất|V|B1
生動|shēngdòng|Sinh động, sống động|Vs|B1
生活|shēnghuó|Cuộc sống|Vi|B1
生命|shēngmìng|Sinh mệnh, tính mạng|N|B1
生意|shēngyì|Buôn bán, làm ăn|N|B1
生字|shēngzì|Từ mới|N|B1
省|shěng|Tự kiểm điểm bản thân|Vst|B1
省錢|shěngqián|-sep Tiết kiệm tiền|Vs|B1
剩|shèng|Thừa lại, còn lại|Vst|B1
剩下|shèngxia|Thừa, còn lại|Vpt|B1
濕|shī|ẩm|Vs|B1
失戀|shīliàn|Thất tình|Vp|B1
失去|shīqù|Mất|Vpt|B1
獅子|shīzi|Sư tử|N|B1
十分|shífēn|Rất, hết sức, vô cùng|Adv|B1
石頭|shítou|Đá|N|B1
石油|shíyóu|Dầu mỏ, dầu thô|N|B1
時|shí|Thời gian|N|B1
時代|shídài|Thời đại|N|B1
時刻|shíkè|Thời khắc|N|B1
實話|shíhuà|Lời nói thật|N|B1
實際|shíjì|Thực tế|Vs|B1
實力|shílì|Thực lực, sức mạnh|N|B1
實行|shíxíng|Thực hiện, thi hành|V|B1
實在|shízài|Chắc chắn, cẩn thận|Vs|B1
使得|shǐde|Làm cho, khiến cho|Vst|B1
使用|shǐyòng|Sử dụng, dùng|V|B1
事實|shìshí|Sự thật|N|B1
事業|shìyè|Sự nghiệp|N|B1
適應|shìyìng|Thích ứng|Vst|B1
市長|shìzhǎng|Thị trưởng|N|B1
收穫|shōuhuò|Gặt hái, thu hoạch|N|B1
收音機|shōuyīnjī|Máy thu thanh|N|B1
熟|shóu / shú|Quen thuộc, thành thạo|Vs|B1
首|shǒu|Đầu, đứng đầu|M|B1
手套|shǒutào|Găng tay, bao tay|N|B1
手續|shǒuxù|Thủ tục|N|B1
受得了|shòudeliao|Có thể chịu được|Vst|B1
書包|shūbāo|Túi sách, cặp sách|N|B1
書架|shūjià|Giá sách|N|B1
蔬菜|shūcài|Rau, rau cải|N|B1
舒適|shūshì|Dễ chịu, thoải mái|Vs|B1
叔叔|shúshu|Chú|N|B1
熟悉|shoúxī|Hiểu rõ, quen thuộc|Vst|B1
數|shǔ|Đếm|V|B1
數字|shùzì|Chữ số, con số|N|B1
樹木|shùmù|Cây cối|N|B1
刷牙|shuāyá|-sep Đánh răng|V|B1
帥|shuài|Đẹp trai|Vs|B1
雙|shuāng|-attr Đôi, gấp đôi|Vs|B1
水餃|shuǐjiǎo|Bánh sủi cảo|N|B1
水平|shuǐpíng|Trình độ|N|B1
水準|shuǐzhǔn|Mực nước|N|B1
睡著|shuìzháo|Ngủ|Vp|B1
順便|shùnbiàn|Thuận tiện, tiện thể|Adv|B1
順利|shùnlì|Thuận lợi, suôn sẻ|Vs|B1
說法|shuōfǎ|Cách nói|N|B1
說明|shuōmíng|Lời thuyết minh|N|B1
說明|shuōmíng|Giải thích rõ, nói rõ|V|B1
說起來|shuōqilai|Nói về, nói đến…|Adv|B1
思考|sīkǎo|Suy xét, suy nghĩ|V|B1
思想|sīxiǎng|Tư tưởng, ý nghĩ|N|B1
似乎|sìhū|Hình như, dường như|Adv|B1
寺廟|sìmiào|Chùa miếu|N|B1
速度|sùdù|Tốc độ|N|B1
算了|suànle|Để nó trôi qua đi, quên nó đi|Vs|B1
隨便|suíbiàn|Tùy thích, tùy ý|Vs|B1
隨時|suíshí|Bất cứ lúc nào|Adv|B1
所|suǒ|Chỗ, nơi, chốn|Ptc|B1
所|suǒ|Ngôi, nhà, gian|M|B1
所謂|suǒwèi|-attr Cái gọi là, điều mà họ gọi là|Vs|B1
它|tā|Nó, cái đó, điều đó|N|B1
它們|tāmen|Chúng nó|N|B1
台|tái|Cái đài, bục, sân khấu|M|B1
抬|tái|Đưa lên, ngẩng, ngước|V|B1
颱風|táifēng|Bão|N|B1
態度|tàidù|Thái độ|N|B1
談話|tánhuà|-sep Nói chuyện, trò chuyện|V|B1
堂|táng|Phòng khách, nhà chính|M|B1
堂|táng|Phòng|N|B1
討厭|tǎoyàn|Ghét|Vst|B1
套|tào|Bộ, căn|M|B1
特地|tèdì|Chuyên biệt, đặc biệt|Adv|B1
特色|tèsè|Đặc sắc|N|B1
特殊|tèshū|Đặc thù, đặc biệt|Vs|B1
提|tí|Xách, nhấc, nâng lên, nếu ra|V|B1
提到|tídào|Đề cập đến|Vpt|B1
提高|tígāo|Đề cao, nâng cao|V|B1
提供|tígōng|Cung cấp|V|B1
題材|tícái|Đề tài|N|B1
題目|tímù|Đề mục, đầu đề|N|B1
體會|tǐhuì|Hiểu, lĩnh hội|Vst|B1
體力|tǐlì|Thể lực, sức khỏe|N|B1
體貼|tǐtiē|Săn sóc, quan tâm|Vst|B1
體重|tǐzhòng|Thể trọng, trọng lượng|N|B1
替|tì|Thay thế|Prep|B1
天堂|tiāntáng|Thiên đường|N|B1
天天|tiāntiān|Mỗi ngày, hàng ngày|Adv|B1
天下|tiānxià|Thiên hạ|N|B1
田|tián|Ruộng, đồng|N|B1
填|tián|Điền vào, ghi vào|V|B1
甜點|tiándiǎn|Món điểm tâm ngọt|N|B1
條件|tiáojiàn|Điều kiện|N|B1
挑戰|tiǎozhàn|Thử thách, thách đấu|V|B1
貼|tiē|Dán, kề, sát|V|B1
鐵|tiě|Sắt|N|B1
鐵路|tiělù|Đường sắt, đường ray|N|B1
聽見|tīngjiàn|Nghe thấy|Vpt|B1
聽力|tīnglì|Khả năng nghe|N|B1
聽起來|tīngqǐlái|Nghe như là…|Adv|B1
聽眾|tīngzhòng|Người nghe, thính giả|N|B1
挺|tǐng|Khá là|Adv|B1
通|tōng|-pred Thông|Vs|B1
通過|tōngguò|Thông qua|Vpt|B1
同|tóng|Giống nhau|Det|B1
同|tóng|Cùng nhau|Prep|B1
同情|tóngqíng|Đồng tình|Vst|B1
同時|tóngshí|Đồng thời, cùng lúc|N|B1
同樣|tóngyàng|Giống nhau, như nhau|Adv|B1
同樣|tóngyàng|-attr Đồng dạng|Vs|B1
痛苦|tòngkǔ|Đau khổ|Vs|B1
投|tóu|Ném, quăng, bỏ vào|V|B1
投資|tóuzī|Đầu tư|V|B1
頭|tóu|Đầu|Det|B1
頭痛|tóutòng|Đau đầu, nhức đầu|Vs|B1
圖|tú|Bức vẽ, bức tranh|N|B1
突然|túrán|Đột nhiên, bỗng nhiên|Adv|B1
土|tǔ|Đất đai|N|B1
土地|tǔdì|Ruộng đất, đất đai|N|B1
兔子|tùzi|Con thỏ|N|B1
團體|tuántǐ|Tập thể|N|B1
團圓|tuányuán|Đoàn viên, sum họp|Vs|B1
推|tuī|Đẩy|V|B1
推薦|tuījiàn|Tiến cử, đề xuất, giới thiệu|V|B1
推銷|tuīxiāo|Đẩy mạnh tiêu thụ|V|B1
退步|tuìbù|Nhượng bộ, lùi bước|Vp|B1
退休|tuìxiū|Về hưu, nghỉ hưu|Vp|B1
脫|tuō|Rụng, tróc, cởi ra|V|B1
娃娃|wáwa|Em bé, búp bê|N|B1
外邊|wàibiān|Bên ngoài|N|B1
外公|wàigōng|Ông ngoại|N|B1
外婆|wàipó|Bà ngoại|N|B1
外文|wàiwén|Ngoại văn, chữ nước ngoài|N|B1
外語|wàiyǔ|Ngoại ngữ|N|B1
完成|wánchéng|Hoàn thành|Vpt|B1
完全|wánquán|Đầy đủ, trọn vẹn|Adv|B1
玩具|wánjù|Đồ chơi|N|B1
晚|wǎn|Tối, muộn, trễ|Vs|B1
萬一|wànyī|Nhỡ đâu, ngộ nhỡ|Adv|B1
網|wǎng|Lưới|N|B1
網路|wǎnglù|Mạng lưới|N|B1
往往|wǎngwǎng|Thường thường|Adv|B1
忘記|wàngjì|Quên, không nhớ|Vpt|B1
維持|wéichí|Duy trì|V|B1
微笑|wéixiào|Mỉm cười|Vi|B1
為主|wéizhǔ|Chủ yếu dựa vào|Vs|B1
偉大|wěidà|Vĩ đại, lớn lao|Vs|B1
為|wèi|Thành, biến thành|Prep|B1
未來|wèilái|Tương lai|N|B1
位置|wèizhì|Vị trí|N|B1
位子|wèizi|Chỗ ngồi|N|B1
溫柔|wēnróu|Dịu dàng|Vs|B1
文件|wénjiàn|Văn kiện, tài liệu|N|B1
文學|wénxué|Văn học|N|B1
文字|wénzì|Chữ viết|N|B1
聞|wén|Nghe thấy|V|B1
穩定|wěndìng|ổn định|Vs|B1
問好|wènhǎo|Chào hỏi, gửi lời hỏi thăm|Vi|B1
問候|wènhòu|Chào hỏi, gửi lời hỏi thăm|V|B1
握手|wòshǒu|-sep Bắt tay, cầm tay|V|B1
屋子|wūzi|Gian nhà, gian phòng|N|B1
無|wú|-attr Không có|Vs|B1
無法|wúfǎ|Vô phương, không còn cách nào|Adv|B1
無論如何|wúlùnrúhé|Bất kể như thế nào|Conj|B1
無窮|wúqióng|Vô cùng, vô hạn|Vs|B1
無所謂|wúsuǒwèi|Không sao cả, không quan trọng|Vs|B1
誤會|wùhuì|Sự hiểu lầm|N|B1
物價|wùjià|Vật giá, giá cả|N|B1
西北|xīběi|Tây bắc|N|B1
西餐|xīcān|Món Tây|N|B1
西方|xīfāng|Phương Tây|N|B1
西南|xīnán|Tây Nam|N|B1
吸毒|xīdú|-sep Hút (chích) ma túy|V|B1
吸收|xīshōu|Hấp thu|V|B1
吸引|xīyǐn|Hấp dẫn, thu hút|Vst|B1
犧牲|xīshēng|Hi sinh|Vpt|B1
希望|xīwàng|Hi vọng, mong muốn|N|B1
喜愛|xǐài|Yêu thích, quý mến|Vst|B1
細|xì|Nhỏ, mảnh|Vs|B1
細心|xìxīn|Cẩn thận, tỉ mỉ|Vs|B1
戲|xì|Trò chơi|N|B1
戲劇|xìjù|Kịch, hí kịch|N|B1
系統|xìtǒng|Hệ thống|N|B1
下|xià|Dưới|Det|B1
下|xià|Lần, cái|M|B1
下|xià|dưới, lần|N|B1
下|xià|Hạ xuống|V|B1
下來|xiàlai|Xuống|Ptc|B1
嚇|xià|-pred Dọa dẫm|Vs|B1
嚇一跳|xiàyítiào|Giật mình, sợ hãi|Vp|B1
線|xiàn|Sợi, đường|N|B1
現代|xiàndài|Hiện đại|N|B1
現實|xiànshí|Hiện thực, thực tại|N|B1
現實|xiànshí|Hiện thực|Vs|B1
現象|xiànxiàng|Hiện tạng|N|B1
限制|xiànzhì|Hạn chế, giới hạn|N|B1
相當|xiāngdāng|Tương đương, ngang nhau|Adv|B1
相對|xiāngduì|-attr Trái ngược, đối lập nhau|Vs|B1
相反|xiāngfǎn|Tương phản, trái ngược|Vs|B1
相關|xiāngguān|Liên quan|Vs|B1
相同|xiāngtóng|Tương đồng, giống nhau|Vs|B1
箱子|xiāngzi|Hòm, rương|N|B1
香水|xiāngshuǐ|Nước hoa, dầu thơm|N|B1
詳細|xiángxì|Kỹ càng tỉ mỉ|Vs|B1
響|xiǎng|Vang lên, kêu|Vp|B1
想到|xiǎngdào|Nghĩ đến, nghĩ về|Vpt|B1
想法|xiǎngfǎ|Ý nghĩ, nhận xét|N|B1
想像|xiǎngxiàng|Trí tưởng tượng|N|B1
想像|xiǎngxiàng|Tưởng tượng, nghĩ ra|Vst|B1
項|xiàng|Hạng mục|M|B1
相機|xiàngjī|Máy chụp hình|N|B1
相聲|xiàngshēng|tướng thanh (tấu nói)|N|B1
小吃|xiǎochī|Món ăn vặt|N|B1
小朋友|xiǎopéngyǒu|Trẻ em, bạn nhỏ|N|B1
小組|xiǎozǔ|Tổ, nhóm nhỏ|N|B1
效果|xiàoguǒ|Hiệu quả|N|B1
笑話|xiàohuà|Truyện cười|N|B1
孝順|xiàoshùn|Hiếu thảo|Vs|B1
孝順|xiàoshùn|Một ít, một vài|Vst|B1
協助|xiézhù|Giúp đỡ, trợ giúp|V|B1
血|xiě|Máu, ruột thịt|N|B1
謝|xiè|Cảm ơn|V|B1
心得|xīndé|Tâm đắc|N|B1
心理|xīnlǐ|Tâm lý|N|B1
心意|xīnyì|Tâm ý, tấm lòng|N|B1
欣賞|xīnshǎng|Thưởng thức|Vst|B1
新生|xīnshēng|Mới ra đời|N|B1
信|xìn|Tin tưởng|Vst|B1
信箱|xìnxiāng|Thùng thư, hòm thư|N|B1
信心|xìnxīn|Lòng tin, tự tin|N|B1
興奮|xīngfèn|Phấn khởi, hăng hái|Vs|B1
行|xíng|Đi|Vs|B1
行動|xíngdòng|Hành vi, cử động|N|B1
行為|xíngwéi|Hành vi|N|B1
形容|xíngróng|Hình dung, miêu tả|V|B1
醒|xǐng|Tỉnh, tỉnh ngộ|Vp|B1
醒來|xǐnglái|Đánh thức|Vp|B1
姓|xìng|Họ|N|B1
性別|xìngbié|Giới tính|N|B1
性格|xìnggé|Tính cách|N|B1
幸好|xìnghǎo|May mắn, may mà|Adv|B1
幸虧|xìngkuī|May mà|Adv|B1
幸運|xìngyùn|Vận may|Vs|B1
兇|xiōng|Hung ác|Vs|B1
兄弟|xiōngdì|Người anh em|N|B1
熊貓|xióngmāo|Gấu trúc|N|B1
修|xiū|Sửa|V|B1
修改|xiūgǎi|Sửa chữa|V|B1
修理|xiūlǐ|Cắt sửa|V|B1
需求|xūqiú|Nhu cầu|N|B1
需要|xūyào|Yêu cầu|N|B1
選|xuǎn|Chọn, lựa chọn|V|B1
選舉|xuǎnjǔ|Tuyển cử|N|B1
選擇|xuǎnzé|Sự lựa chọn|N|B1
選擇|xuǎnzé|Tuyển chọn|V|B1
學會|xuéhuì|Học cách|Vpt|B1
學問|xuéwèn|Học vấn|N|B1
尋找|xúnzhǎo|Tìm kiếm|V|B1
訓練|xùnliàn|Huấn luyện, tập luyện|V|B1
呀|yā|A, à, nhé|Ptc|B1
鴨(子)|yā(zi)|Con vịt|N|B1
押金|yājīn|Tiền thế chấp, tiền cọc|N|B1
牙|yá|Răng, ngà voi|N|B1
牙齒|yáchǐ|Răng|N|B1
煙火|yānhuǒ|Pháo hoa|N|B1
研究|yánjiù|Nghiên cứu|N|B1
研究|yánjiù|Tìm tòi học hỏi|V|B1
嚴重|yánzhòng|Nghiêm trọng|Vs|B1
演|yǎn|Diễn|V|B1
演出|yǎnchū|Diễn xuất|V|B1
演講|yǎnjiǎng|Diễn thuyết|Vi|B1
演員|yǎnyuán|Diễn viên|N|B1
眼光|yǎnguāng|Ánh mắt|N|B1
眼淚|yǎnlèi|Nước mắt|N|B1
陽光|yángguāng|Ánh nắng|N|B1
養|yǎng|Nuôi dưỡng|V|B1
樣|yàng|Hình dáng, kiểu|M|B1
樣樣|yàngyàng|Tất cả các loại|Det|B1
邀請|yāoqǐng|Mời|V|B1
要求|yāoqiú|Nguyện vọng|N|B1
要求|yāoqiú|Yêu cầu|V|B1
咬|yǎo|Cắn, kẹp chặt|V|B1
要|yào|Cần|Vst|B1
要不然|yàobùrán|Nếu không|Conj|B1
要不是|yàobúshì|Nếu nó không phải|Conj|B1
要緊|yàojǐn|Quan trọng, gấp rút|Vs|B1
野餐|yěcān|Bữa cơm dã ngoại|Vi|B1
也好|yěhǎo|Cũng tốt||B1
頁|yè|Tờ, trang (giấy)|M|B1
夜裡/裏|yèli/li|Ban đêm|N|B1
夜市|yèshì|Chợ đêm|N|B1
一下子/ 一下子兒|yīxiàzi/ yīxiàzir|Trong chốc lát|N|B1
衣櫃|yīguì|Tủ quần áo|N|B1
依靠|yīkào|Nhờ vào, dựa vào|V|B1
一塊/一塊兒|yīkuài/yíkuàir|Một khối|Adv|B1
一切|yīqiè|Tất cả, mọi thứ|Det|B1
一向|yīxiàng|Gần đây, thời gian qua|Adv|B1
一樣|yīyàng|Như nhau, giống nhau|N|B1
已|yǐ|Đã|Adv|B1
以|yǐ|Để, nhằm|Prep|B1
以後|yǐhòu|Về sau, sau đó|N|B1
以來|yǐlái|Trước nay|N|B1
以免|yǐmiǎn|Để tránh khỏi|Conj|B1
以內|yǐnèi|Trong vòng|N|B1
以前|yǐqián|Trước đây|N|B1
以上|yǐshàng|Trở lên|N|B1
以外|yǐwài|Ngoài ra|N|B1
以為|yǐwéi|Cho rằng, cho là|V|B1
以下|yǐxià|Trở xuống|N|B1
一般來說|yìbānláishuō|Nói chung||B1
一點/一點兒|yìdiǎn/yìdiǎnr|Một chút|Adv|B1
一方面|yìfāngmiàn|Một mặt thì…|Conj|B1
一連|yìlián|Liên tiếp, không ngừng|Adv|B1
一生|yìshēng|Suốt đời, cả đời|N|B1
一時|yìshí|Một lúc, nhất thời|N|B1
一同|yìtóng|Cùng, chung|Adv|B1
意見|yìjiàn|Ý kiến|N|B1
意外|yìwài|Bất ngờ, không ngờ|N|B1
意義|yìyì|Ý nghĩa|N|B1
陰|yīn|Âm|Vs|B1
因此|yīncǐ|Vì vậy, do đó|Conj|B1
音響|yīnxiǎng|Âm thanh, giọng|N|B1
引起|yǐnqǐ|Gây nên, dẫn tới|V|B1
應|yīng|Trả lời, đáp lời|Vaux|B1
應該|yīnggāi|Nên|Vaux|B1
英俊|yīngjùn|Tài năng xuất chúng|Vs|B1
營養|yíngyǎng|Chất dinh dưỡng|N|B1
影片|yǐngpiàn|Phim nhựa|N|B1
擁有|yǒngyǒu|Có, hàm chứa|Vst|B1
用|yòng|Dùng, sử dụng|Prep|B1
用法|yòngfǎ|Cách dùng|N|B1
用功|yònggōng|Cố gắng, chăm chỉ|Vs|B1
用品|yòngpǐn|Đồ dùng, vật dụng|N|B1
優點|yōudiǎn|Ưu điểm|N|B1
優秀|yōuxiù|Ưu tú|Vs|B1
幽默|yōumò|Hài hước|Vs|B1
郵票|yóupiào|Tem|N|B1
尤其|yóuqí|Nhất là, đặc biệt là…|Adv|B1
遊客|yóukè|Du khách|N|B1
游泳池|yóuyǒngchí|Hồ bơi, bể bơi|N|B1
由於|yóuyú|Bởi vì|Conj|B1
有(一)點/ 有(一)點兒|yǒu(yì)diǎn/ yǒu(yì)di|Hơi hơi, một chút|Adv|B1
有的|yǒude|Có|Det|B1
有名|yǒumíng|Nổi tiếng|Vs|B1
有錢|yǒuqián|Có tiền|Vs|B1
有效|yǒuxiào|Có hiệu quả|Vs|B1
有意思|yǒuyìsi|Thú vị|Vs|B1
友誼|yǒuyì|Hữu nghị|N|B1
於是|yúshì|Thế là|Conj|B1
與|yǔ|Với|Conj|B1
與|yǔ|và, với|Prep|B1
玉|yù|Ngọc, ngọc thạch|N|B1
玉米|yùmi|Cây ngô, bắp|N|B1
預備|yùbèi|Dự bị|V|B1
預習|yùxí|Ôn trước, chuẩn bị bài|V|B1
遇到|yùdào|Gặp phải|Vpt|B1
圓|yuán|Hình tròn|N|B1
員工|yuángōng|Công nhân, viên chức|N|B1
原諒|yuánliàng|Tha thứ, thứ lỗi|Vst|B1
原因|yuányīn|Nguyên nhân|N|B1
願望|yuànwàng|Nguyện vọng|N|B1
院子|yuànzi|Sân trong|N|B1
約|yuē|Cân|Adv|B1
約會|yuēhuì|Hẹn hò|N|B1
約會|yuēhuì|Hẹn gặp|Vi|B1
越|yuè|Vượt qua|Adv|B1
月餅|yuèbǐng|Bánh trung thu|N|B1
閱讀|yuèdú|Xem, đọc|V|B1
樂團|yuètuán|Dàn nhạc, ban nhạc|N|B1
運氣|yùnqì|Vận may|N|B1
在|zài|Tồn tại, sống, ở|Vst|B1
在意|zàiyì|Để ý|Vst|B1
在於|zàiyú|ở chỗ|Vst|B1
早|zǎo|Sớm|Adv|B1
早日|zǎorì|Trước kia|Adv|B1
早晚|zǎowǎn|Sớm tối|N|B1
造成|zàochéng|Tạo thành|Vpt|B1
噪音|zàoyīn|Tạp âm|N|B1
責任|zérèn|Trách nhiệm|N|B1
增加|zēngjiā|Tăng thêm|Vpt|B1
炸|zhà/zhá|Chiên, rán|V|B1
摘|zhāi|Hái, bẻ, ngắt|V|B1
站|zhàn|Trạm|N|B1
暫時|zhànshí|Tạm thời|Adv|B1
戰爭|zhànzhēng|Chiến tranh|N|B1
長|zhǎng|Lớn|Vs|B1
長大|zhǎngdà|Cao lớn|Vp|B1
掌握|zhǎngwò|Nắm bắt|V|B1
障礙|zhàngài|Trở ngại, chướng ngại vật|N|B1
招待|zhāodài|Tiếp đãi|V|B1
招牌|zhāopái|Bảng hiệu|N|B1
找錢|zhǎoqián|-sep Trả lại tiền thừa|V|B1
照|zhào|Theo như|Prep|B1
照|zhào|Chiếu rọi|V|B1
哲學|zhéxué|Triết học|N|B1
這裏|zhèlǐ|ở đây, nơi đây|N|B1
這下子|zhèxiàzi|Lúc này|N|B1
這樣|zhèyàng|Như thế này|Vs|B1
這樣子|zhèyàngzi|Như thế|Adv|B1
這樣子|zhèyàngzi|Như thế này|Vs|B1
真的|zhēnde|Có thật không?|Adv|B1
真理|zhēnlǐ|Chân lý|N|B1
真實|zhēnshí|Chân thực|Vs|B1
真是|zhēnshì|Thật là!|Adv|B1
真心|zhēnxīn|Thật lòng|Vs|B1
真正|zhēnzhèng|Chân chính|Adv|B1
真正|zhēnzhèng|-attr Xác thực|Vs|B1
珍貴|zhēnguì|Quý giá|Vs|B1
整|zhěng|Trọn, cả|Det|B1
整理|zhěnglǐ|Thu xếp, thu dọn|V|B1
整齊|zhěngqí|Ngăn nắp, ngay ngắn|Vs|B1
正|zhèng|Chính|Adv|B1
正常|zhèngcháng|Bình thường|Vs|B1
正確|zhèngquè|Chính xác|Vs|B1
正式|zhèngshì|Chính thức|Vs|B1
證明|zhèngmíng|Chứng minh|V|B1
證書|zhèngshū|Giấy chứng nhận, chứng chỉ|N|B1
支|zhī|Chống, đỡ|M|B1
知|zhī|Biết|Vst|B1
知識|zhīshì|Tri thức|N|B1
之後|zhīhòu|Sau khi|N|B1
之間|zhījiān|Giữa|N|B1
之前|zhīqián|Trước khi|N|B1
直|zhí|Thẳng đứng, dọc|Vs|B1
直到|zhídào|Đến tận khi|Prep|B1
值得|zhíde|Xứng đáng|Vst|B1
殖民地|zhímíndì|Thuộc địa|N|B1
植物|zhíwù|Thực vật|N|B1
職員|zhíyuán|Nhân viên chức|N|B1
指|zhǐ|Chỉ trỏ|V|B1
只是|zhǐshì|Chỉ là|Conj|B1
只要|zhǐyào|Chỉ cần, miễn là|Conj|B1
只有|zhǐyǒu|Chỉ có|Adv|B1
制度|zhìdù|Chế độ|N|B1
智慧|zhìhuì|Trí tuệ|N|B1
至少|zhìshǎo|Chí ít, ít nhất|Adv|B1
至於|zhìyú|Đến nỗi|Prep|B1
中|zhōng|Trung tâm|N|B1
中部|zhōngbù|Phần giữa|N|B1
中餐|zhōngcān|Món ăn Trung Quốc|N|B1
終於|zhōngyú|Cuối cùng|Adv|B1
鐘|zhōng|Đồng hồ, cái chuông|N|B1
種|zhòng|Tập trung|V|B1
重點|zhòngdiǎn|Trọng điểm|N|B1
重視|zhòngshì|Coi trọng|Vst|B1
周圍|zhōuwéi|Xung quanh, chu vi|N|B1
主動|zhǔdòng|Chủ động|Vs|B1
主婦|zhǔfù|Bà chủ|N|B1
主管|zhǔguǎn|Chủ quản|N|B1
主人|zhǔrén|Chủ nhân, chủ sở hữu|N|B1
主任|zhǔrèn|Chủ nhiệm|N|B1
主題|zhǔtí|Chủ đề|N|B1
主要|zhǔyào|Chủ yếu, chính|Adv|B1
主要|zhǔyào|-attr Chủ yếu|Vs|B1
主意|zhǔyì|Chủ ý, biện pháp|N|B1
祝|zhù|Chúc|V|B1
祝福|zhùfú|Lời chúc|N|B1
祝福|zhùfú|Chúc phúc|V|B1
助|zhù|Giúp đỡ, giúp|V|B1
助理|zhùlǐ|Trợ lí, giúp việc|N|B1
著名|zhùmíng|Nổi danh|Vs|B1
抓|zhuā|Cầm nắm, bắt|V|B1
專心|zhuānxīn|Chuyên tâm, chăm chú|Vs|B1
專業|zhuānyè|-attr Chuyên nghiệp|Vs|B1
狀態|zhuàngtài|Trạng thái|N|B1
追求|zhuīqiú|Theo đuổi|V|B1
準時|zhǔnshí|Đúng giờ|Vs|B1
著|zhuó|Đang|V|B1
資料|zīliào|Tư liệu, tài liệu|N|B1
資源|zīyuán|Nguồn tài nguyên|N|B1
仔細|zǐxì|Tỉ mỉ|Vs|B1
自從|zìcóng|Từ khi, từ lúc|Prep|B1
自動|zìdòng|Tự động|Vs|B1
自然|zìrán|Tự nhiên|Vs|B1
自殺|zìshā|Tự tử|Vi|B1
自信|zìxìn|Tự tin|N|B1
自由|zìyóu|Sự tự do|N|B1
自由|zìyóu|Tự do|Vs|B1
自在|zìzài|An nhàn, thanh thản|Vs|B1
宗教|zōngjiào|Tôn giáo, đạo|N|B1
總而言之|zǒngéryánzhī|Tóm lại|Conj|B1
總算|zǒngsuàn|Cuối cùng cũng…|Adv|B1
總統|zǒngtǒng|Tổng thống|N|B1
總之|zǒngzhī|Nói chung, tóm lại|Conj|B1
走走|zǒuzou|Đi dạo, tản bộ|Vi|B1
組|zǔ|Tổ, nhóm|M|B1
祖父|zǔfù|Ông nội|N|B1
祖母|zǔmǔ|Bà nội|N|B1
祖先|zǔxiān|Tổ tiên|N|B1
嘴|zuǐ|Miệng|N|B1
醉|zuì|Say, say rượu|Vp|B1
最初|zuìchū|Ban đầu|N|B1
最多|zuìduō|Nhiều nhất|Adv|B1
最好|zuìhǎo|Tốt nhất|Adv|B1
最後|zuìhòu|Cuối cùng|N|B1
最佳|zuìjiā|-attr Tốt nhất|Vs|B1
尊敬|zūnjìng|Tôn kính|Vst|B1
作|zuò|Làm|V|B1
作品|zuòpǐn|Tác phẩm|N|B1
作者|zuòzhě|Tác giả|N|B1
座|zuò|Chỗ ngồi|M|B1
做/作法|zuòfǎ|Cách làm, phương pháp|N|B1
做夢|zuòmèng|-sep Nằm mơ|V|B1
做人|zuòrén|Làm người|Vi|B1
做事|zuòshì|Làm việc|Vi|B1
豆腐|dòufu|đậu phụ|N|B1
木頭|mùtou|gỗ, mảnh gỗ|N|B1
哎呀|āiyā|ơ kìa, ái chà, trời ơi|Ptc|B2
哎喲|āiyāo|chao ôi|Ptc|B2
愛好|àihào|sở thích|N|B2
愛好|àihào|thích, yêu thích|Vst|B2
愛護|àihù|bảo vệ, giữ gìn|Vst|B2
愛人|àirén|vợ, chồng, người yêu|N|B2
安慰|ānwèi|an ủi|V|B2
安裝|ānzhuāng|lắp đặt, lắp ráp|V|B2
按|àn|nhấn, bấm, đè|V|B2
按時|ànshí|đúng hạn|Adv|B2
暗|àn|tối, tối tăm|Vs|B2
暗中|ànzhōng|trong bóng tối|Adv|B2
骯髒|āngzhāng|dơ bẩn|Vs|B2
熬|áo|luộc, nấu, sắc (thuốc)|V|B2
拔|bá|nhổ, rút|V|B2
把|bǎ|cán, quai, tay cầm|M|B2
把握|bǎwò|cầm, nắm, nắm bắt|N|B2
罷工|bàgōng|bãi công, đình công|Vi|B2
罷了|bàle|mà thôi, thôi|Ptc|B2
擺脫|bǎituō|thoát khỏi|V|B2
敗|bài|thua, bại trận|Vp|B2
拜|bài|lạy, vái|V|B2
拜拜|bàibai|cúi chào|Vi|B2
拜訪|bàifǎng|thăm viếng, thăm hỏi|V|B2
拜年|bàinián|-sep đi chúc tết|V|B2
拜託|bàituō|nhờ vả|V|B2
般|bān|loại, kiểu, cách, hạng||B2
班|bān|lớp, ca, buổi làm|M|B2
班長|bānzhǎng|lớp trưởng|N|B2
搬運|bānyùn|vận chuyển, vận tải|V|B2
拌|bàn|trộn, trộn lẫn|V|B2
半路|bànlù|nửa đường, giữa đường|N|B2
半數|bànshù|một nửa|Det|B2
辦公|bàngōng|làm việc|Vi|B2
辦事|bànshì|làm việc|Vi|B2
扮演|bànyǎn|đóng vai, sắm vai|V|B2
傍晚|bāngwǎn|chạng vạng, chập tối|N|B2
磅|bàng|pound (đơn vị cân Anh)|M|B2
棒|bàng|gậy, thỏi|M|B2
棒子|bàngzi|cây gậy|N|B2
包裹|bāoguǒ|gói, kiện hàng|N|B2
包括|bāokuò|bao gồm|Vst|B2
包裝|bāozhuāng|bao bì|N|B2
包裝|bāozhuāng|đóng gói|V|B2
保|bǎo|giữ, gìn giữ|V|B2
保持|bǎochí|duy trì, giữ nguyên|V|B2
保存|bǎocún|bảo tồn|V|B2
保留|bǎoliú|bảo lưu, giữ nguyên|V|B2
保衛|bǎowèi|bảo vệ, che chở|V|B2
保障|bǎozhàng|vật bảo đảm, đồ bảo hộ|N|B2
保障|bǎozhàng|bảo đảm, bảo hộ|V|B2
寶寶|bǎobao|cục cưng, bé cưng|N|B2
抱|bào|bế, bồng, ôm|Vst|B2
報|bào|báo cho biết|V|B2
報仇|bàochóu|-sep báo thù, trả thù|V|B2
報答|bàodá|báo đáp, đền đáp|Vpt|B2
報導|bàodǎo|báo cáo tin tức|V|B2
報到|bàodào|báo cáo có mặt|Vi|B2
報警|bàojǐng|-sep báo nguy, báo cảnh sát|V|B2
報社|bàoshè|toà soạn, tòa báo|N|B2
暴力|bàolì|bạo lực, vũ lực|N|B2
暴躁|bàozào|nóng nảy, hấp tấp|Vs|B2
爆炸|bàozhà|nổ, làm nổ tung|Vp|B2
悲劇|bēijù|bi kịch|N|B2
悲痛|bēitòng|bi thương, đau buồn|Vs|B2
倍|bèi|lần, gấp bội|N|B2
備|bèi|chuẩn bị, phòng bị|V|B2
背面|bèimiàn|mặt trái, mặt sau lưng|N|B2
奔|bēn|chạy|Vi|B2
奔跑|bēnpǎo|chạy nhanh|Vi|B2
本來|běnlái|-attr vốn có, lúc đầu|Vs|B2
本領|běnlǐng|bản lĩnh, năng lực|N|B2
本身|běnshēn|bản thân|N|B2
本土|běntǔ|quê hương, mảnh đất này|N|B2
笨重|bènzhòng|cồng kềnh, to lớn|Vs|B2
比|bǐ|so sánh, so đo|V|B2
比方|bǐfāng|ví, so bì|N|B2
比方(說)|bǐfāng(shūo)|so sánh với|Vst|B2
比較|bǐjiào|so sánh|N|B2
比較|bǐjiào|tương đối, khá|V|B2
比例|bǐlì|tỉ lệ|N|B2
彼此|bǐcǐ|lẫn nhau|N|B2
筆記|bǐjì|ghi chép|N|B2
筆試|bǐshì|cuộc thi viết|N|B2
筆試|bǐshì|thi viết|Vi|B2
閉|bì|đóng, khép, bịt|Vi|B2
必須|bìxū|-attr phải, nhất định|Vs|B2
必要|bìyào|cần thiết, thiết yếu|N|B2
編|biān|bện, đan, thắt|V|B2
扁|biǎn|dẹt, bẹp|Vs|B2
便|biàn|tiện lợi, thuận tiện|Adv|B2
便利|biànlì|tiện lợi|Vs|B2
變動|biàndòng|biến động, thay đổi|N|B2
變動|biàndòng|thay đổi, biến đổi|Vp|B2
標題|biāotí|đầu đề, tiêu đề|N|B2
標誌|biāozhì|ký hiệu|N|B2
表格|biǎogé|bảng, bảng hiệu|N|B2
表情|biǎoqíng|biểu cảm|N|B2
表揚|biǎoyáng|khen, biểu dương|V|B2
冰|bīng|băng, nước đá|Vs|B2
丙|bǐng|Bính (thứ ba)|N|B2
並|bìng|hợp lại, nhập lại|Adv|B2
並|bìng|song song, cùng lúc đó|Conj|B2
並且|bìngqiě|đồng thời, và|Conj|B2
病毒|bìngdú|siêu vi trùng, virus|N|B2
病房|bìngfáng|phòng bệnh|N|B2
撥|bō|đẩy, gẩy|V|B2
菠菜|bōcài|rau chân vịt|N|B2
波動|bōdòng|chập chờn, không ổn định|Vi|B2
玻璃|bōli|thủy tinh|N|B2
薄|bó|mỏng manh|Vs|B2
薄弱|bóruò|bạc nhược, yếu kém|Vs|B2
伯父|bófù|bác trai|N|B2
伯母|bómǔ|bác gái|N|B2
捕|bǔ|bắt, vồ, tóm|V|B2
補|bǔ|tu bổ, sửa chữa|V|B2
補償|bǔcháng|bồi thường, đền bù|V|B2
補充|bǔchōng|bổ sung|V|B2
補課|bǔkè|-sep học bù, dạy bù|V|B2
補習|bǔxí|-sep bổ túc|V|B2
補助|bǔzhù|trợ cấp|N|B2
補助|bǔzhù|giúp đỡ|V|B2
步|bù|bước chân|M|B2
不大|bùdà|vừa phải|Adv|B2
不安|bùān|bất an, bất ổn|Vs|B2
不成|bùchéng|-pred không được phép|Vs|B2
不當|bùdàng|không thích đáng|Vs|B2
不到|bùdào|không đến, không xuất hiện|Vst|B2
不得已|bùdéyǐ|bất đắc dĩ|Vs|B2
不敢當|bùgǎndāng|không dám|Vs|B2
不顧|bùgù|không quan tâm|Vst|B2
不過|bùguò|cực kỳ, hết mức|Adv|B2
不見得|bùjiànde|chưa chắc|Adv|B2
不僅|bùjǐn|không chỉ|Conj|B2
不良|bùliáng|không tốt|Vs|B2
不平|bùpíng|không công bằng|Vs|B2
不然|bùrán|chi bằng|Conj|B2
不如|bùrú|không bằng, kém hơn|Vst|B2
不許|bùxǔ|không được phép|Adv|B2
不宜|bùyí|không thích hợp|Vs|B2
不由得|bùyóude|đành phải|Adv|B2
不止|bùzhǐ|-pred không dứt, không ngớt|Vs|B2
部隊|bùduì|bộ đội|N|B2
部長|bùzhǎng|bộ trưởng|N|B2
布/佈告|bùgào|bản thông báo|N|B2
布/佈告欄|bùgàolán|bảng thông báo|N|B2
財產|cáichǎn|tài sản|N|B2
財富|cáifù|của cải|N|B2
才能|cáinéng|tài năng|N|B2
裁判|cáipàn|phán xử, xét xử|N|B2
裁員|cáiyuán|giảm biên chế|Vpt|B2
踩|cǎi|giẫm, đạp|V|B2
採|cǎi|hái, ngắt|V|B2
採購|cǎigòu|chọn mua, mua sắm|V|B2
彩色|cǎisè|-attr màu sắc|Vs|B2
參與|cānyù|tham dự|V|B2
蠶|cán|tằm|N|B2
慚愧|cánkuì|xấu hổ, hổ thẹn|Vs|B2
慘|cǎn|bi thảm|Vs|B2
倉庫|cāngkù|kho, nhà kho|N|B2
藏|cáng|giấu, trốn|V|B2
操心|cāoxīn|bận tâm, lo nghĩ|Vs|B2
操作|cāozuò|thao tác|V|B2
冊|cè|sổ, quyển|M|B2
策略|cèlüè|sách lược|N|B2
測量|cèliáng|đo lường|V|B2
測試|cèshì|kiểm tra|V|B2
測驗|cèyàn|kiểm tra, sát hạch|N|B2
測驗|cèyàn|kiểm nghiệm, đo lường|V|B2
差|chā|so le|N|B2
差錯|chācuò|sai lầm, nhầm lẫn|N|B2
差距|chājù|chênh lệch, khoảng cách|N|B2
插|chā|cắm vào, chọc vào|V|B2
插花|chāhuā|cắm hoa, bó hoa|Vi|B2
插圖|chātú|tranh minh họa|N|B2
茶館/茶館兒|cháguǎn/cháguǎnr|quán trà|N|B2
茶會|cháhuì|tiệc trà|N|B2
茶葉|cháyè|lá trà|N|B2
拆|chāi|mở ra, dỡ ra|V|B2
產|chǎn|đẻ, sinh sản|V|B2
產量|chǎnliàng|sản lượng|N|B2
產業|chǎnyè|sản nghiệp|N|B2
嘗/嚐試|chángshì|thử nghiệm|N|B2
常識|chángshì|thường thức|N|B2
長處|chángchù|sở trường|N|B2
長度|chángdù|độ dài|N|B2
長方形|chángfāngxíng|hình chữ nhật|N|B2
長久|chángjiǔ|lâu dài|Vs|B2
長途|chángtú|-attr đường dài|Vs|B2
場|chǎng|sân phơi|M|B2
場地|chǎngdì|sân bãi|N|B2
場合|chǎnghé|trường hợp, nơi|N|B2
場所|chǎngsuǒ|nơi chốn|N|B2
廠商|chǎngshāng|nhà máy|N|B2
抄|chāo|sao chép|V|B2
鈔票|chāopiào|tiền giấy, giấy bạc|N|B2
超出|chāochū|vượt qua, vượt khỏi|Vpt|B2
超人|chāorén|siêu nhân|N|B2
超越|chāoyuè|vượt quá, hơn hẳn|V|B2
超重|chāozhòng|siêu trọng, quá tải|Vp|B2
朝|cháo|triều, triều đại|Prep|B2
潮流|cháoliú|thủy triều, trào lưu|N|B2
潮溼/濕|cháoshī|ẩm ướt|Vs|B2
吵鬧|chǎonào|tranh cãi ầm ĩ|Vi|B2
車票|chēpiào|vé xe|N|B2
扯|chě|kéo, lôi, căng|V|B2
澈底|chèdǐ|triệt để, đến cùng|Vs|B2
沉|chén|chìm, rơi xuống|Vp|B2
陳列|chénliè|trưng bày, triển lãm|V|B2
稱|chēng|gọi, gọi là|V|B2
撐|chēng|chống, chống đỡ|V|B2
成|chéng|phần mười|M|B2
成|chéng|hoàn thành|Vpt|B2
成本|chéngběn|giá thành|N|B2
成分/份|chéngfèn|thành phần|N|B2
成交|chéngjiāo|thống nhất mua bán|Vp|B2
成立|chénglì|thành lập, lập|Vpt|B2
成天|chéngtiān|suốt ngày, cả ngày|Adv|B2
成為|chéngwéi|trở thành. biến thành|Vpt|B2
成語|chéngyǔ|thành ngữ|N|B2
乘|chéng|đáp, đi|V|B2
乘客|chéngkè|hành khách|N|B2
誠懇|chéngkěn|thành khẩn, chân thành|Vs|B2
誠意|chéngyì|thành ý, lòng thành|N|B2
呈現|chéngxiàn|lộ ra, phơi bày ra|Vpt|B2
程序|chéngxù|trình tự|N|B2
吃虧|chīkuī|chịu thiệt|Vs|B2
遲|chí|chậm, trể|Vp|B2
遲早|chízǎo|không sớm thì muộn|Adv|B2
尺寸|chǐcùn|kích cỡ, kích thước|N|B2
翅膀|chìbǎng|cánh (chim, côn trùng)|N|B2
沖|chōng|xông lên|V|B2
充分/份|chōngfèn|đầy đủ, trọn vẹn|Vs|B2
充滿|chōngmǎn|lấp đầy|Vpt|B2
充足|chōngzú|đầy đủ|Vs|B2
重|chóng|nặng|Adv|B2
崇拜|chóngbài|tôn thờ, sùng bái|Vst|B2
崇高|chónggāo|cao thượng, cao quý|Vs|B2
抽屜|chōuti|ngắn kéo, két|N|B2
愁|chóu|ưu sầu, lo âu|Vs|B2
出|chū|ra, xuất, đến|Vst|B2
出產|chūchǎn|xuất bản|Vst|B2
出境|chūjìng|xuất cảnh|Vp|B2
出口|chūkǒu|mở miệng, nói|V|B2
出色|chūsè|xuất sắc|Vs|B2
出身|chūshēn|xuất thân|Vpt|B2
出事|chūshì|-sep xảy ra sự cố|Vp|B2
出售|chūshòu|bán ra|V|B2
出席|chūxí|dự họp, tham dự hội nghị|V|B2
出院|chūyuàn|ra viện, xuất viện|Vi|B2
初|chū|đầu, thứ nhất|Adv|B2
初步|chūbù|bước đầu|Adv|B2
初步|chūbù|-attr mở đầu, khởi đầu|Vs|B2
初級|chūjí|sơ cấp, sơ bộ|Vs|B2
除|chú|ngoại lệ, không kể|Prep|B2
除|chú|trừ, loại ra|V|B2
除|chú|chia, phép chia|Vst|B2
除非|chúfēi|trừ phi|Conj|B2
儲存|chúcún|dự trữ, để dành|V|B2
儲蓄|chúxù|để dành, dành dụm|Vi|B2
處|chǔ|nơi, chốn|M|B2
處罰|chǔfá|xử phạt|V|B2
處|chù|sống chung, xử lý|V|B2
處處|chùchù|khắp nơi|Adv|B2
傳|chuán|truyện ký|V|B2
傳播|chuánbò|truyền bá|V|B2
傳達|chuándá|truyền đạt|V|B2
傳單|chuándān|truyền đơn|N|B2
傳染|chuánrǎn|truyền nhiễm|V|B2
傳說|chuánshuō|truyền thuyết|N|B2
傳說|chuánshuō|truyền lại, thuật lại|V|B2
傳送|chuánsòng|chuyên chở|V|B2
傳統|chuántǒng|truyền thống|N|B2
傳真|chuánzhēn|fax|V|B2
窗口|chuāngkǒu|cửa bán vé, cửa chắn|N|B2
床|chuáng|giường|M|B2
床單|chuángdān|khăn trải giường|N|B2
幢|chuáng|căn, tòa, ngôi (nhà)|M|B2
闖|chuǎng|xông, xông xáo|V|B2
創作|chuàngzuò|sáng tác, soạn thảo|N|B2
春季|chūnjì|mùa xuân|N|B2
春假|chūnjià|nghỉ xuân, nghỉ tết|N|B2
純|chún|thuần chủng|Vs|B2
磁帶|cídài|băng từ, băng nhạc|N|B2
詞典|cídiǎn|từ điển|N|B2
詞彙|cíhuì|từ ngữ, từ vựng|N|B2
辭職|cízhí|từ chức|Vi|B2
此外|cǐwài|ngoài ra|Conj|B2
刺|cì|xoẹt (từ tượng thanh)|V|B2
刺激|cìjī|kích thích, kích động|V|B2
次數|cìshù|số lần|N|B2
從|cóng|thong dong|Adv|B2
從此|cóngcǐ|từ đó|Adv|B2
從沒|cóngméi|chưa bao giờ|Adv|B2
從事|cóngshì|tham gia, dấn thân vào|Vst|B2
湊|còu|gom góp, thu thập|V|B2
粗|cū|thô, nhám|Vs|B2
粗心|cūxīn|sơ ý, bất cẩn|Vs|B2
促進|cùjìn|xúc tiến, đẩy mạnh|V|B2
催|cuī|hối thúc, thúc giục|V|B2
存款|cúnkuǎn|tiền tiết kiệm|N|B2
搓|cuō|xoa, xoắn, vặn|V|B2
錯過|cuòguò|lỡ mất|Vpt|B2
錯字|cuòzì|chữ sai, lỗi in|N|B2
措施|cuòshī|biện pháp|N|B2
答|dá|trả lời, đáp|V|B2
答案|dáàn|đáp án, câu trả lời|N|B2
達到|dádào|đạt được, đạt đến|Vpt|B2
打|dǎ|tá, lố|M|B2
打扮|dǎbàn|trang điểm|Vi|B2
打包|dǎbāo|đóng gói, mở gói|V|B2
打斷|dǎduàn|cắt ngang, ngắt lời|Vpt|B2
打擾|dǎrǎo|quấy rối, làm phiền|V|B2
打算|dǎsuàn|dự định|N|B2
打招呼|dǎzhāohū|-sep chào hỏi|V|B2
打針|dǎzhēn|-sep chích, tiêm|V|B2
打字|dǎzì|-sep đánh chữ|V|B2
大半|dàbàn|hơn nửa, quá nửa|Det|B2
大便|dàbiàn|đi đại tiện|N|B2
大膽|dàdǎn|dũng cảm|Vs|B2
大地|dàdì|mặt đất, đất đai|N|B2
大都|dàdōu|phần lớn, đa số|Adv|B2
大哥|dàgē|anh cả|N|B2
大哥大|dàgēdà|điện thoại di động|N|B2
大街|dàjiē|đường phố|N|B2
大力|dàlì|ra sức, dốc sức|Adv|B2
大量|dàliàng|nhiều, lớn|Det|B2
大腦|dànǎo|đại não|N|B2
大清早|dàqīngzǎo|sáng sớm|N|B2
大嫂|dàsǎo|chị dâu cả|N|B2
大腿|dàtuǐ|bắp đùi|N|B2
大型|dàxíng|-attr cỡ lớn|Vs|B2
大意|dàyì|không chú ý, sơ ý|Vs|B2
大有|dàyǒu|được mùa, bội thu|Vst|B2
大致|dàzhì|khoảng chừng, đại khái|Adv|B2
大眾|dàzhòng|quần chúng, dân chúng|N|B2
大自然|dàzìrán|thiên nhiên|N|B2
待會/待會兒|dāihuì /dāihuìr|trong chốc lát, sau này|Adv|B2
待|dài|dừng lại, nán lại|V|B2
代|dài|thời đại|N|B2
代|dài|thay thế, dùm|V|B2
代表|dàibiǎo|đại diện|Vs|B2
代溝|dàigōu|sự khác biệt|N|B2
代價|dàijià|tiền mua, giá tiền|N|B2
代理|dàilǐ|thay mặt|V|B2
帶動|dàidòng|kéo theo, lôi kéo|V|B2
帶路|dàilù|dẫn đường|Vi|B2
帶子|dàizi|thắt lưng|N|B2
大夫|dàifu|bác sĩ|N|B2
貸款|dàikuǎn|khoản vay|N|B2
貸款|dàikuǎn|-sep cho vay|V|B2
待遇|dàiyù|đối xử|N|B2
單|dān|đơn|Adv|B2
單調|dāndiào|đơn điệu|Vs|B2
單位|dānwèi|đơn vị|N|B2
單子|dānzi|tờ khai, tờ đơn|N|B2
擔保|dānbǎo|đảm bảo|V|B2
耽誤|dānwù|làm chậm trễ, để lỡ|V|B2
膽量|dǎnliàng|sự gan dạ|N|B2
膽小|dǎnxiǎo|nhát gan|Vs|B2
蛋白質|dànbáizhí|chất đạm, protein|N|B2
誕生|dànshēng|sinh ra, ra đời|Vp|B2
當初|dāngchū|lúc đầu, hồi đó|N|B2
當時|dāngshí|lúc đó, khi đó|N|B2
當選|dāngxuǎn|trúng cử|Vpt|B2
當中|dāngzhōng|ở giữa, chính giữa|N|B2
擋|dǎng|sắp đặt, thu dọn|V|B2
檔案|dǎngàn|hồ sơ, tài liệu|N|B2
當|dàng|coi như, cho rằng|Vst|B2
倒楣|dǎoméi|gặp xui xẻo|Vs|B2
導演|dǎoyǎn|đạo diễn|V|B2
導遊|dǎoyóu|hướng dẫn du lịch|N|B2
倒|dào|ngược, đảo ngược lại|V|B2
道|dào|đường|M|B2
道路|dàolù|con đường|N|B2
到達|dàodá|đến, tới|Vpt|B2
得分|défēn|-sep được điểm, đạt điểm|Vs|B2
得獎|déjiǎng|-sep đạt giải|V|B2
得了|déle|được rồi||B2
得罪|dézuì|đắc tội|Vpt|B2
登|dēng|trèo, leo lên|V|B2
登記|dēngjì|đăng ký|Vp|B2
登山|dēngshān|-sep leo núi|V|B2
等不及|děngbují|không đợi được|Vi|B2
等到|děngdào|đợi đến lúc|Prep|B2
等級|děngjí|đẳng cấp, bậc|N|B2
等於|děngyú|bằng với|Vst|B2
凳子|dèngzi|ghế, băng ghế|N|B2
滴|dī|giọt|M|B2
低潮|dīcháo|thời kỳ thấp, thấp điểm|N|B2
的確|díquè|đích thực, quả thực là|Adv|B2
抵|dǐ|chống đỡ|V|B2
抵抗|dǐkàng|đề kháng, chống cự|V|B2
遞|dì|truyền đạt|V|B2
地面|dìmiàn|mặt đất|N|B2
地毯|dìtǎn|thảm trải sàn|N|B2
地下|dìxià|-attr ngầm, trong long đất|Vs|B2
地震|dìzhèn|động đất|Vp|B2
典禮|diǎnlǐ|lễ lớn|N|B2
典型|diǎnxíng|điển hình|Vs|B2
點燃|diǎnrán|châm, đốt|V|B2
點頭|diǎntóu|-sep gật đầu|V|B2
墊|diàn|kê, lót, chèn, đệm|V|B2
電報|diànbào|bức điện báo|N|B2
電動|diàndòng|-attr chạy bằng điện|Vs|B2
電扇|diànshàn|quạt điện|N|B2
電視台|diànshìtái|đài truyền hình|N|B2
電台|diàntái|đài phát thanh|N|B2
電線|diànxiàn|dây điện|N|B2
電子|diànzǐ|điện tử|N|B2
雕刻|diāokè|điêu khắc|N|B2
雕刻|diāokè|chạm trổ|V|B2
吊|diào|treo, buộc, kéo lên|V|B2
釣|diào|câu lên|V|B2
跌|dié|ngã, té, rơi xuống|Vp|B2
跌倒|diédǎo|ngã, té nhào|Vp|B2
丁|dīng|tưng tưng ( từ tượng thanh)|N|B2
盯|dīng|nhìn chằm chằm|V|B2
頂|dǐng|đỉnh, chóp|M|B2
訂婚|dìnghūn|-sep đính hôn|V|B2
訂位|dìngwèi|-sep đặt chỗ|V|B2
定期|dìngqí|định kỳ|Adv|B2
定期|dìngqí|-attr định ngày|Vs|B2
丟臉|diūliǎn|-sep mất mặt, xấu hổ|Vs|B2
丟人|diūrén|mất thể diện, bẽ mặt|Vs|B2
冬季|dōngjì|mùa đông|N|B2
懂得|dǒngde|hiểu, biết|Vst|B2
洞|dòng|động, hang động|N|B2
凍|dòng|đông lại, đóng băng|Vs|B2
棟|dòng|xà ngang|M|B2
動不動|dòngbudòng|động 1 chút, hở 1 chút là...|Adv|B2
動詞|dòngcí|động từ|N|B2
動人|dòngrén|làm cho cảm động|Vs|B2
動身|dòngshēn|khởi hành, xuất phát|Vi|B2
動手|dòngshǒu|bắt tay vào làm|Vi|B2
動作|dòngzuò|động tác|N|B2
鬥爭|dòuzhēng|đấu tranh|Vi|B2
毒|dú|độc, chất độc|N|B2
毒|dú|có hại|Vs|B2
獨立|dúlì|độc lập|Vs|B2
獨自|dúzì|một mình, tự mình|Adv|B2
賭|dǔ|đánh bạc|V|B2
度|dù|đo lường|V|B2
度過|dùguò|trải qua|V|B2
端|duān|bưng, mang, đem|V|B2
斷|duàn|cắt đứt, đoạn tuyệt|Vp|B2
鍛鍊|duànliàn|rèn luyện|V|B2
堆|duī|chồng chất, tích tụ|V|B2
隊|duì|hàng ngũ, đội ngũ|M|B2
隊員|duìyuán|đội viên|N|B2
對岸|duìàn|bờ đối diện|N|B2
對策|duìcè|đối sách|N|B2
對待|duìdài|đối đãi, đối xử|V|B2
對付|duìfù|đối phó|V|B2
對抗|duìkàng|đối kháng|V|B2
對立|duìlì|đối lập|Vs|B2
對於|duìyú|đối với, về...|Prep|B2
蹲|dūn|ngồi xổm|Vi|B2
頓|dùn|bữa (ăn)|M|B2
噸|dùn|tấn|M|B2
多半/多半兒|duōbàn/duōbànr|hơn phân nửa|Det|B2
多多|duōduō|rất nhiều|Adv|B2
多少|duōshǎo|nhiều ít, hơi hơi|Adv|B2
多數|duōshù|đa số, số nhiều|Det|B2
多謝|duōxiè|cảm ơn|Vst|B2
奪|duó|cướp đoạt|V|B2
躲|duǒ|trốn tránh|Vi|B2
鵝|é|ngỗng|N|B2
惡劣|èliè|ác liệt|Vs|B2
而已|éryǐ|mà thôi, thế thôi|Ptc|B2
發|fā|phát, gởi|Vp|B2
發動|fādòng|phát động, bắt đầu|V|B2
發抖|fādǒu|run rẩy|Vi|B2
發起|fāqǐ|đề nghị, đề xuất|Vp|B2
發射|fāshè|bắn, phát ra, phóng|V|B2
發行|fāxíng|phát hành|V|B2
發言|fāyán|-sep phát ngôn, phát biểu|V|B2
發揚|fāyáng|phát huy|V|B2
發音|fāyīn|phát âm|Vi|B2
發展|fāzhǎn|phát triển|V|B2
罰|fá|phạt, xử phạt|V|B2
法子|fázi|phương pháp, cách thức|N|B2
法院|fǎyuàn|tòa án|N|B2
髮型|fǎxíng|kiểu tóc|N|B2
番|fān|gấp đôi|M|B2
翻|fān|lật, đổ|V|B2
煩|fán|phiền muộn|Vs|B2
煩惱|fánnǎo|phiền não|N|B2
繁忙|fánmáng|bận rộn|Vs|B2
繁榮|fánróng|phồn vinh|Vs|B2
繁殖|fánzhí|sinh sôi nảy nở|V|B2
反|fǎn|ngược, trái|V|B2
反|fǎn|phản|Vst|B2
反對|fǎnduì|phản đối|Vst|B2
反覆|fǎnfù|lặp đi lặp lại|Adv|B2
反抗|fǎnkàng|phản kháng|V|B2
反面|fǎnmiàn|mặt trái, phản diện|N|B2
反問|fǎnwèn|hỏi lại|V|B2
反映|fǎnyìng|phản ứng|V|B2
反應|fǎnyìng|phản ứng|Vi|B2
反正|fǎnzhèng|cho dù, dù sao|Adv|B2
返回|fǎnhuí|phản hồi|V|B2
犯錯|fàncuò|-sep phạm sai lầm|V|B2
犯法|fànfǎ|-sep phạm pháp|V|B2
犯人|fànrén|phạm nhân, tội phạm|N|B2
犯罪|fànzuì|-sep phạm tội|V|B2
方|fāng|-attr vuông|Vs|B2
方案|fāngàn|kế hoạch|N|B2
防|fáng|phòng ngừa|V|B2
防守|fángshǒu|phòng thủ|V|B2
防止|fángzhǐ|phòng ngừa|V|B2
放大|fàngdà|phóng đại|V|B2
放棄|fàngqì|vứt bỏ, từ bỏ|V|B2
放手|fàngshǒu|buông tay|Vi|B2
放學|fàngxué|-sep tan học, nghỉ học|Vp|B2
非法|fēifǎ|-attr phi pháp, không hợp pháp|Vs|B2
肥|féi|béo, mập|Vs|B2
肥胖|féipàng|béo phì|Vs|B2
肥皂|féizào|xà phòng|N|B2
肺|fèi|phổi|N|B2
費|fèi|phí, chi phí|Vst|B2
廢話|fèihuà|lời vô ích|N|B2
廢氣|fèiqì|khí thải|N|B2
廢水|fèishuǐ|nước thải|N|B2
廢物|fèiwù|đồ bỏ đi, phế phẩm|N|B2
分別|fēnbié|phân biệt, lần lượt|Adv|B2
分別|fēnbié|ly biệt|N|B2
分別|fēnbié|chia nhau, phân công nhau|V|B2
分布/佈|fēnbù|phân bố|Vs|B2
分工|fēngōng|phân công|Vi|B2
分明|fēnmíng|-pred rõ ràng, phân minh|Vs|B2
分配|fēnpèi|phân phối|V|B2
分散|fēnsàn|phân tán, phân ly|Vs|B2
分手|fēnshǒu|chia tay|Vp|B2
分數|fēnshù|điểm số|N|B2
分析|fēnxī|phân tích|N|B2
紛紛|fēnfēn|sôi nổi, ào ào|Adv|B2
吩咐|fēnfù|dặn dò|V|B2
粉筆|fěnbǐ|phấn viết bảng|N|B2
份/份兒|fèn/fènr|phần, địa vị|N|B2
奮鬥|fèndòu|phấn đấu, cố gắng|Vi|B2
憤怒|fènnù|phẫn nộ, căm phẫn|Vs|B2
封|fēng|phong tước|V|B2
封建|fēngjiàn|-attr phong kiến|Vs|B2
蜂蜜|fēngmì|mật ong|N|B2
風氣|fēngqì|bầu không khí|N|B2
風趣|fēngqù|dí dỏm, thú vị|Vs|B2
風險|fēngxiǎn|nguy hiểm, mạo hiểm|N|B2
瘋|fēng|điên|Vp|B2
瘋狂|fēngkuáng|điên cuồng|Vs|B2
瘋子|fēngzi|người điên|N|B2
逢|féng|gặp mặt|Vst|B2
縫|féng|may, khâu|V|B2
諷刺|fèngcì|châm biếm, mỉa mai|V|B2
否定|fǒudìng|phủ định|V|B2
否認|fǒurèn|phủ nhận|V|B2
夫妻|fūqī|vợ chồng|N|B2
夫人|fūrén|phu nhân, vợ|N|B2
幅|fú|khổ (vải)|M|B2
扶|fú|đỡ, vịn, dìu|V|B2
服|fú|uống (thuốc), phục tùng|V|B2
服|fú|phục, khâm phục|Vst|B2
浮|fú|nổi, nở, phù|Vi|B2
符號|fúhào|ký hiệu, dấu hiệu|N|B2
付|fù|bộ, đôi, khuôn|M|B2
赴|fù|đi đến, di dự|V|B2
副|fù|phó, phụ|M|B2
輔導|fǔdǎo|phụ đạo|V|B2
富|fù|-attr giàu có|Vs|B2
富裕|fùyù|dồi dào, sung túc|Vs|B2
附加|fùjiā|phụ thêm, kèm theo|Vpt|B2
婦女|fùnǚ|phụ nữ|N|B2
複雜|fùzá|phức tạp|Vs|B2
複製|fùzhì|phục chế, làm lại|V|B2
該|gāi|sửa đổi|Det|B2
改革|gǎigé|cải cách|V|B2
改造|gǎizào|cải tạo, sửa đổi|V|B2
改正|gǎizhèng|cải chính, đính chính|V|B2
蓋(子)|gài(zi)|nắp, vung|N|B2
肝|gān|lá gan|N|B2
乾杯|gānbēi|cạn ly|Vi|B2
乾脆|gāncuì|thẳng thắn, dứt khoát|Vs|B2
趕|gǎn|đuổi, đuổi theo, xua đuổi|Vs|B2
趕緊|gǎnjǐn|vội vàng, khẩn trương|Adv|B2
感到|gǎndào|cảm thấy|Vpt|B2
感恩|gǎnēn|cảm ơn|Vs|B2
感激|gǎnjī|cảm kích|Vst|B2
感情|gǎnqíng|tình cảm|N|B2
感染|gǎnrǎn|lây nhiễm|Vpt|B2
感受|gǎnshòu|cảm nhận|N|B2
感受|gǎnshòu|tiếp thu|Vst|B2
幹|gàn|liên can, liên quan|V|B2
幹部|gànbù|cán bộ|N|B2
幹嘛|gànma|làm gì?|Adv|B2
幹什麼|gànshénme|làm sao, tại sao||B2
鋼|gāng|thép|N|B2
鋼筆|gāngbǐ|bút máy|N|B2
剛好|gānghǎo|vừa vặn, vừa khít|Vs|B2
港幣|gǎngbì|đô la Hồng Kông|N|B2
港口|gǎngkǒu|bến tàu, bến cảng|N|B2
高潮|gāocháo|triều cường, cao trào|N|B2
高大|gāodà|cao lớn|Vs|B2
高度|gāodù|cao độ, độ cao|N|B2
高度|gāodù|-attr rất cao|Vs|B2
高峰|gāofēng|đỉnh núi, đỉnh cao|N|B2
高貴|gāoguì|cao quý|Vs|B2
高級|gāojí|cao cấp|Vs|B2
高明|gāomíng|cao siêu, thông minh|Vs|B2
高手|gāoshǒu|cao thủ|N|B2
高原|gāoyuán|cao nguyên|N|B2
告|gào|nói với|V|B2
告辭|gàocí|cáo từ, tạm biệt|Vi|B2
割|gē|cắt, gặt|V|B2
擱|gē|chịu đựng|V|B2
歌劇|gējù|ca kịch|N|B2
隔|gé|ngăn cách|Vst|B2
革命|gémìng|cách mạng|N|B2
各|gè|các, tất cả|Adv|B2
各行各業|gèhánggèyè|các ngành nghề|N|B2
個別|gèbié|-attr riêng lẻ, riêng biệt|Vs|B2
個性|gèxìng|cá tính|N|B2
根本|gēnběn|từ trước đến giờ, vốn dĩ|Adv|B2
根本|gēnběn|căn bản, gốc rễ, cội nguồn|N|B2
根據|gēnjù|căn cứ vào|N|B2
供|gōng|cúng, dâng|V|B2
工程|gōngchéng|công trình|N|B2
工夫|gōngfu|người làm thuê|N|B2
工會|gōnghuì|công đoàn|N|B2
工錢|gōngqián|tiền công, tiền lương|N|B2
工資|gōngzī|tiền lương|N|B2
公布/佈|gōngbù|công bố|V|B2
公公|gōnggōng|bố chồng|N|B2
公開|gōngkāi|công khai|Vs|B2
公立|gōnglì|-attr công lập|Vs|B2
公平|gōngpíng|công bằng|Vs|B2
公式|gōngshì|công thức|N|B2
公用|gōngyòng|-attr công cộng, dùng chung|Vs|B2
公元|gōngyuán|công nguyên|N|B2
供應|gōngyìng|cung ứng, cung cấp|V|B2
共|gòng|tổng cộng|Adv|B2
共同|gòngtóng|chung, cùng|Adv|B2
構成|gòuchéng|cấu thành, tạo thành|V|B2
構造|gòuzào|cấu tạo, cấu trúc|N|B2
孤單|gūdān|cô đơn, lẻ loi|Vs|B2
估計|gūjì|đánh giá, dự tính|V|B2
姑姑|gūgu|bác, cô (chị em gái của bố)|N|B2
姑丈|gūzhàng|dượng (chồng của cô)|N|B2
古典|gǔdiǎn|điển tích, cổ điển|Vs|B2
鼓|gǔ|cái trống|N|B2
鼓勵|gǔlì|sự khuyến khích|N|B2
鼓勵|gǔlì|khích lệ, cổ vũ|V|B2
鼓舞|gǔwǔ|cổ vũ|V|B2
鼓掌|gǔzhǎng|vỗ tay|Vi|B2
骨頭|gútou|xương cốt|N|B2
固定|gùdìng|cố định|Vs|B2
顧問|gùwèn|cố vấn|N|B2
故鄉|gùxiāng|cố hương, quê nhà|N|B2
瓜|guā|dưa, dưa chuột|N|B2
瓜子|guāzǐ|hạt dưa|N|B2
掛號信|guàhàoxìn|thư đã đăng kí|N|B2
怪|guài|kỳ quái|Adv|B2
官方|guānfāng|nhà nước|N|B2
官員|guānyuán|quan chức|N|B2
關|guān|cửa ải|M|B2
關鍵|guānjiàn|then chốt, mấu chốt|N|B2
關上|guānshàng|đóng lại, khép, tắt|V|B2
關於|guānyú|về, liên quan đến|Prep|B2
觀光|guānguāng|tham quan|Vi|B2
管道|guǎndào|đường ống, ống dẫn|N|B2
管制|guǎnzhì|quản chế, kiểm soát|V|B2
慣|guàn|quen, thói quen|Vp|B2
慣例|guànlì|lệ thường, thông lệ|N|B2
冠軍|guànjūn|quán quân|N|B2
罐頭|guàntou|vò, lọ, vại, hũ|N|B2
罐子|guànzi|vò, hũ (bằng sành sứ)|N|B2
光|guāng|ánh sáng, cảnh vật|Adv|B2
光|guāng|có lợi, có ích|Vp|B2
光亮|guāngliàng|sáng ngời|Vs|B2
光臨|guānglín|đến dự|V|B2
光明|guāngmíng|sáng rực, sáng chói|Vs|B2
光榮|guāngróng|quang vinh, vẻ vang|Vs|B2
光是|guāngshì|duy nhất, chỉ|Adv|B2
光線|guāngxiàn|tia sáng|N|B2
廣|guǎng|rộng rãi|Vs|B2
廣大|guǎngdà|rộng lớn|Vs|B2
廣泛|guǎngfàn|phổ biến|Vs|B2
廣告|guǎnggào|bát ngát, mênh mông|Vi|B2
廣闊|guǎngkuò|rộng lớn|Vs|B2
規定|guīdìng|nội quy|N|B2
規定|guīdìng|quy định|V|B2
規畫/劃|guīhuà|kế hoạch|N|B2
規畫/劃|guīhuà|lập kế hoạch|V|B2
規律|guīlǜ|quy luật|N|B2
規則|guīzé|quy tắc|N|B2
跪|guì|quỳ gối|Vi|B2
櫃臺/台|guìtái|quầy hàng|N|B2
貴族|guìzú|quý tộc|N|B2
滾|gǔn|cút đi|Vi|B2
鍋(子)|guō(zi)|cái nồi|N|B2
國會|guóhuì|quốc hội|N|B2
國籍|guójí|quốc tịch|N|B2
國際|guójì|quốc tế|N|B2
國立|guólì|-attr quốc lập, công lập|Vs|B2
國旗|guóqí|quốc kỳ|N|B2
國小|guóxiǎo|tiểu học|N|B2
國中|guózhōng|trung học cơ sở|N|B2
裹|guǒ|quấn, bọc|V|B2
果然|guǒrán|quả nhiên, đúng là|Adv|B2
過|guò|qua, trải qua|Adv|B2
過程|guòchéng|quá trình|N|B2
過度|guòdù|quá mức|Vs|B2
過渡|guòdù|chuyển tiếp sang|Vi|B2
過節|guòjié|-sep ăn tết, chơi lễ|V|B2
過濾|guòlǜ|lọc (bột, nước)|V|B2
過期|guòqí|quá hạn|Vp|B2
過世|guòshì|mất, qua đời|Vp|B2
還不如|háibùrú|chi bằng...|Conj|B2
還有|háiyǒu|vẫn còn|Conj|B2
海關|hǎiguān|hải quan|N|B2
海軍|hǎijūn|hải quân|N|B2
海外|hǎiwài|hải ngoại, nước ngoài|N|B2
海峽|hǎixiá|eo biển|N|B2
海鮮|hǎixiān|hải sản|N|B2
害處|hàichù|điều có hại|N|B2
含|hán|ngậm, chứa|V|B2
含|hán|kín đáo|Vst|B2
含量|hánliàng|hàm lượng|N|B2
寒冷|hánlěng|lạnh lẽo|Vs|B2
喊|hǎn|la hét|V|B2
汗|hàn|mồ hôi|N|B2
行業|hángyè|ngành nghề|N|B2
毫無|háowú|không hề|Vst|B2
好|hǎo|tốt lành|Adv|B2
好|hǎo|hòa hợp|Conj|B2
好在|hǎozài|may mà|Adv|B2
耗|hào|tiêu hao, hao tốn|Vst|B2
好客|hàokè|hiếu khách|Vs|B2
好奇|hàoqí|hiếu kỳ|Vs|B2
號召|hàozhào|kêu gọi|V|B2
合|hé|đấu|Vi|B2
合|hé|cái đấu (để đong lương thực)|Vs|B2
合不來|hébulái|không hợp nhau|Vs|B2
合成|héchéng|hợp thành|Vst|B2
合得來|hédelái|hợp nhau, hòa hợp|Vs|B2
合法|héfǎ|hợp pháp|Vs|B2
合格|hégé|hợp lệ|Vp|B2
合乎|héhū|phù hợp|Vst|B2
合理|hélǐ|hợp lý|Vs|B2
合適|héshì|thích hợp|Vs|B2
合算|hésuàn|có lợi|Vs|B2
和好|héhǎo|hòa thuận|Vp|B2
和平|hépíng|hòa bình|Vs|B2
和氣|héqì|ôn hòa, nhã nhặn|Vs|B2
何必|hébì|hà tất, hà cớ|Adv|B2
何況|hékuàng|huống hồ, vả lại|Conj|B2
河流|héliú|sông ngòi|N|B2
嘿|hēi|tối|Ptc|B2
黑暗|hēiàn|tối tăm, đen tối|Vs|B2
黑夜|hēiyè|đêm khuya|N|B2
痕跡|hénjī|dấu vết|N|B2
恨|hèn|thù hận|N|B2
橫|héng|-attr ngang, hoành, vắt ngang|Vs|B2
喉嚨|hóulong|yết hầu, cổ họng|N|B2
猴子|hóuzi|con khỉ|N|B2
後代|hòudài|đời sau|N|B2
後方|hòufāng|hậu phương|N|B2
後果|hòuguǒ|hậu quả|N|B2
後悔|hòuhuǐ|hối hận|Vs|B2
後年|hòunián|năm sau nữa|N|B2
後頭|hòutou|phía sau, mặt sau|N|B2
後退|hòutuì|lùi về sau|Vi|B2
後院|hòuyuàn|sân sau|N|B2
呼|hū|huýt sáo|V|B2
呼吸|hūxī|hít thở|Vi|B2
忽略|hūlüè|không chú ý, sơ hở|Vst|B2
忽視|hūshì|xem nhẹ, lơ là|Vst|B2
蝴蝶|húdié|bươm bướm|N|B2
鬍子|húzi|râu, ria|N|B2
戶|hù|hộ, nhà|M|B2
戶外|hùwài|ngoài trời|N|B2
互助|hùzhù|hỗ trợ, giúp đỡ lẫn nhau|Vi|B2
花草|huācǎo|hoa cỏ|N|B2
花費|huāfèi|chi phí|N|B2
花費|huāfèi|tiêu xài|V|B2
花盆|huāpén|chậu hoa|N|B2
花瓶|huāpíng|bình hoa|N|B2
花色|huāsè|màu sắc và hoa văn|N|B2
花生|huāshēng|đậu phộng|N|B2
划|huá|trơn, nhẵn|V|B2
滑|huá|trơn bóng|Vp|B2
滑|huá|gian xảo, lừa dối|Vs|B2
華僑|huáqiáo|Hoa Kiều|N|B2
華人|huárén|người Hoa|N|B2
化|huà|tiêu, xài|Vst|B2
化|huà|tiêu tốn|Vp|B2
化學|huàxué|hóa học|N|B2
化妝|huàzhuāng|trang điểm|Vi|B2
化裝|huàzhuāng|hóa trang|Vi|B2
懷念|huáiniàn|hoài niệm, nhớ nhung|Vst|B2
懷孕|huáiyùn|mang thai|Vi|B2
壞蛋|huàidàn|đồ tồi, khốn nạn|N|B2
歡呼|huānhū|hạnh phúc|Vi|B2
歡樂|huānlè|vui mừng, vui vẻ|Vs|B2
歡喜|huānxǐ|vui sướng, thích thú|Vs|B2
緩和|huǎnhé|xoa dịu|V|B2
緩慢|huǎnmàn|từ tốn, chậm chạp|Vs|B2
幻想|huànxiǎng|ảo tưởng|N|B2
幻想|huànxiǎng|tưởng tượng|Vi|B2
慌|huāng|hoảng sợ|Vs|B2
皇帝|huángdì|hoàng đế|N|B2
黃豆|huángdòu|đậu tương, đậu nành|N|B2
黃昏|huánghūn|hoàng hôn|N|B2
灰|huī|-attr tro, than|Vs|B2
灰色|huīsè|màu xám|N|B2
灰心|huīxīn|nản lòng|Vs|B2
揮|huī|khua, vung, múa|V|B2
回|huí|quanh co, trở về|V|B2
回電|huídiàn|-sep gửi điện trả lời|V|B2
回教/ 伊斯蘭教|huíjiào / yīsīlánjià|đạo Hồi|N|B2
回收|huíshōu|thu hồi|V|B2
回頭|huítóu|-sep quay đầu, ngoảnh lại|V|B2
回信|huíxìn|-sep hồi âm|V|B2
回憶|huíyì|hồi tưởng, nhớ lại|Vst|B2
匯款|huìkuǎn|-sep gửi tiền, chuyển tiền|V|B2
會員|huìyuán|hội viên|N|B2
昏倒|hūndǎo|ngất xỉu|Vp|B2
昏迷|hūnmí|hôn mê|Vp|B2
混|hùn|trộn lẫn|V|B2
混合|hùnhé|hỗn hợp|V|B2
活該|huógāi|đáng đời|Vs|B2
活力|huólì|sinh lực, sức sống|N|B2
活潑|huópō|hoạt bát|Vs|B2
活躍|huóyuè|sinh động|Vs|B2
火柴|huǒchái|diêm quẹt|N|B2
火腿|huǒtuǐ|chân giò hun khói|N|B2
火災|huǒzāi|hỏa hoạn|N|B2
禍|huò|họa, tai nạn|N|B2
或多或少|huòduōhuòshǎo|dù ít dù nhiều|Adv|B2
或者|huòzhě|có lẽ, hoặc là|Conj|B2
貨物|huòwù|hàng hóa|N|B2
獲得|huòdé|thu được, giành được|Vpt|B2
肌肉|jīròu|cơ bắp|N|B2
基本上|jīběnshàng|chủ yếu, cốt yếu|Adv|B2
基金|jījīn|quỹ, ngân sách|N|B2
幾乎|jīhū|hầu như, gần như|Adv|B2
機構|jīgòu|cơ cấu, cơ quan|N|B2
機關|jīguān|bộ phận|N|B2
機票|jīpiào|vé máy bay|N|B2
機械|jīxiè|máy móc|N|B2
及格|jígé|đạt tiêu chuẩn|Vp|B2
及時|jíshí|đúng lúc, kịp thời|Adv|B2
即將|jíjiāng|sắp, sẽ|Adv|B2
即使|jíshǐ|cho dù|Conj|B2
極其|jíqí|cực kỳ|Adv|B2
級|jí|cấp bậc|M|B2
集|jí|tập|M|B2
集|jí|tập hợp, tụ tập|V|B2
集合|jíhé|thu thập, tập hợp|Vi|B2
集郵|jíyóu|sưu tập tem|Vi|B2
集中|jízhōng|tập trung|V|B2
集中|jízhōng|tập hợp|Vs|B2
疾病|jíbìng|bệnh tật|N|B2
急忙|jímáng|vội vã|Adv|B2
寂寞|jímò|cô quạnh, cô đơn|Vs|B2
既然|jìrán|nếu đã...|Conj|B2
技術|jìshù|kỹ thuật|N|B2
計算|jìsuàn|tính toán|V|B2
計較|jìjiào|so bì, tị nạnh|Vs|B2
記性|jìxìng|trí nhớ|N|B2
記憶|jìyì|nhớ lại, ký ức|Vi|B2
記載|jìzài|ghi chép|V|B2
記住|jìzhù|ghi nhớ|Vpt|B2
加班|jiābān|-sep tăng ca, làm thêm giờ|V|B2
加工|jiāgōng|-sep gia công|V|B2
加上|jiāshàng|công, thêm vào|Conj|B2
加速|jiāsù|tăng tốc|V|B2
加以|jiāyǐ|tiến hành|Adv|B2
家事|jiāshì|việc nhà, chuyện nhà|N|B2
夾|jiá|kép, đôi|V|B2
甲|jiǎ|/M giáp/ hạng, bậc|N|B2
嫁|jià|lấy chồng, xuất giá|V|B2
駕駛|jiàshǐ|điều khiển|N|B2
駕駛|jiàshǐ|lái, bẻ lái|V|B2
價值|jiàzhí|giá trị (hàng hóa)|Vst|B2
尖|jiān|nhọn, nhạy, thính|Vs|B2
尖銳|jiānruì|sắc bén|Vs|B2
肩|jiān|vai, bả vai|N|B2
兼|jiān|gấp đôi|V|B2
間|jiān|giữa, ở giữa|N|B2
堅定|jiāndìng|kiên định, không dao động|Vs|B2
堅決|jiānjué|kiên quyết|Vs|B2
監視|jiānshì|giám thị, theo dõi|V|B2
監獄|jiānyù|nhà tù, nhà giam|N|B2
揀|jiǎn|lựa chọn, lựa|V|B2
撿|jiǎn|nhặt lấy, lượm|V|B2
剪刀|jiǎndāo|cây kéo|N|B2
檢驗|jiǎnyàn|kiểm tra, kiểm nghiệm|V|B2
建|jiàn|xây dựng. thiết lập|V|B2
建國|jiànguó|kiến quốc, lấp quốc|Vi|B2
建築|jiànzhú|kiến trúc|N|B2
建築|jiànzhú|xây dựng, gầy dựng|V|B2
箭|jiàn|mũi tên|N|B2
漸漸|jiànjiàn|dần dần|Adv|B2
間接|jiànjiē|-attr gián tiếp|Vs|B2
鍵盤|jiànpán|bàn phím|N|B2
健全|jiànquán|khỏe mạnh, vững vàng|Vs|B2
江|jiāng|sông|N|B2
將|jiāng|mang, xách, dìu|Adv|B2
將要|jiāngyào|sắp sửa, sẽ|Adv|B2
獎金|jiǎngjīn|tiền thưởng|N|B2
獎品|jiǎngpǐn|phần thưởng|N|B2
降|jiàng|đầu hàng|Vp|B2
降價|jiàngjià|-sep giảm giá|Vp|B2
澆|jiāo|tưới, đổ|V|B2
交代|jiāodai|bàn giao|V|B2
交換|jiāohuàn|trao đổi|V|B2
交際|jiāojì|giao tiếp|Vi|B2
交往|jiāowǎng|quan hệ qua lại|Vi|B2
交易|jiāoyì|giao dịch|N|B2
交易|jiāoyì|mua bán|Vi|B2
郊外|jiāowài|ngoại ô|N|B2
角|jiǎo|sừng/ góc, góc tư|N|B2
角落|jiǎoluò|góc, xó|N|B2
繳|jiǎo|giao nộp|V|B2
腳步|jiǎobù|bước chân|N|B2
較|jiào|so sánh, so đo|Prep|B2
叫喊|jiàohǎn|la hét, kêu la|V|B2
教會|jiàohuì|giáo hội|N|B2
教授|jiàoshòu|giảng dạy, truyền thụ|V|B2
教學|jiàoxué|dạy học|Vi|B2
教訓|jiàoxun|dạy bảo, giáo huấn|V|B2
接|jiē|tiếp cận, tiếp xúc|Vst|B2
接待|jiēdài|tiếp đãi, chiêu đãi|V|B2
接到|jiēdào|để nhận|Vpt|B2
接見|jiējiàn|tiếp kiến, gặp gỡ|V|B2
接近|jiējìn|tiếp cận|V|B2
接近|jiējìn|gần kề|Vs|B2
街道|jiēdào|đường phố|N|B2
街頭|jiētóu|đầu phố|N|B2
階段|jiēduàn|giai đoạn, bước|N|B2
節|jié|mấu chốt, khớp|M|B2
節省|jiéshěng|tiết kiệm, dành dụm|Vst|B2
節約|jiéyuē|tiết kiệm|Vst|B2
結|jié|kết, đan, bện|N|B2
結構|jiégòu|kết cấu, cấu hình|N|B2
結果|jiéguǒ|kết quả|N|B2
結果|jiéguǒ|-sep kết trải, ra quả|Vp|B2
結合|jiéhé|kết hợp|Vpt|B2
結論|jiélùn|kết luận|N|B2
結算|jiésuàn|kết toán, quyết đoán|Vi|B2
結帳|jiézhàng|thanh toán|Vi|B2
截止|jiézhǐ|hết hạn|Vp|B2
解|jiě|tách ra|V|B2
解除|jiěchú|xua tan, giải trừ|V|B2
解答|jiědá|giải đáp|V|B2
屆|jiè|lúc, lần|M|B2
界線|jièxiàn|giới tuyến, ranh giới|N|B2
戒指|jièzhǐ|chiếc nhẫn|N|B2
今後|jīnhòu|từ nay về sau|N|B2
金額|jīné|kim ngạch, số tiền|N|B2
金融|jīnróng|tài chính|N|B2
金屬|jīnshǔ|kim loại|N|B2
儘管|jǐnguǎn|cứ việc, vẫn cứ|Adv|B2
儘量|jǐnliàng|có hết sức, ra sức|Adv|B2
緊急|jǐnjí|khẩn cấp|Vs|B2
僅僅|jǐnjǐn|vẻn vẻn, chỉ, mới|Adv|B2
近|jìn|gần, cận kề|Vst|B2
近來|jìnlái|gần đây, dạo này|Adv|B2
近視|jìnshì|cận thị|Vs|B2
盡力|jìnlì|tận lực, hết sức|Vs|B2
進入|jìnrù|vào, tiến vào|V|B2
進口|jìnkǒu|nhập khẩu|V|B2
禁止|jìnzhǐ|cấm đoán|V|B2
浸|jìn|ngâm, dầm|V|B2
精彩|jīngcǎi|ưu việt, xuất sắc|Vs|B2
精力|jīnglì|tinh thần và thể lực|N|B2
精細|jīngxì|tinh tế|Vs|B2
經濟|jīngjì|kinh tế|N|B2
經歷|jīnglì|trải nghiệm|N|B2
經歷|jīnglì|từng trải, trải qua|Vst|B2
經營|jīngyíng|kinh doanh|V|B2
京劇|jīngjù|kinh kịch|N|B2
驚人|jīngrén|làm kinh ngạc|Vs|B2
警告|jǐnggào|cảnh cáo|N|B2
警告|jǐnggào|nhắc nhở, cảnh cáo|V|B2
景色|jǐngsè|cảnh sắc, phong cảnh|N|B2
靜|jìng|yên tĩnh, tĩnh|Vs|B2
鏡(子)|jìng(zi)|gương, kính|N|B2
敬愛|jìngài|kính yêu|Vst|B2
敬酒|jìngjiǔ|-sep mời rượu, kính rượu|V|B2
敬禮|jìnglǐ|-sep cúi chào|V|B2
淨化|jìnghuà|làm sạch, tinh chế|Vpt|B2
竟然|jìngrán|mà, vậy mà|Adv|B2
競爭|jìngzhēng|cạnh tranh|Vi|B2
糾正|jiūzhèng|uốn nắn, sửa chữa|V|B2
酒會|jiǔhuì|tiệc rượu|N|B2
就|jiù|thì, sẽ|Adv|B2
就是|jiùshì|nhất định, cứ|Adv|B2
就是說|jiùshìshuō|đó là, chính là|Conj|B2
就業|jiùyè|vào nghề, đi làm|Vi|B2
救火|jiùhuǒ|cứu hỏa, chữa cháy|Vi|B2
究竟|jiùjìng|kết quả, thành quả|Adv|B2
居民|jūmín|cư dân|N|B2
居然|jūrán|lại có thể|Adv|B2
局|jú|cảnh, cục, cuộc|M|B2
鞠躬|júgōng|cúi chào, khom|Vi|B2
巨大|jùdà|to lớn, vĩ đại|Vs|B2
具|jù|cái|M|B2
具|jù|vốn có|Vst|B2
具備|jùbèi|có đủ, có sẵn|Vst|B2
具體|jùtǐ|cụ thể|Vs|B2
俱樂部|jùlèbù|câu lạc bộ|N|B2
聚集|jùjí|tập hợp, tụ họp|Vi|B2
距離|jùlí|cách, khoảng cách|Prep|B2
劇場|jùchǎng|rạp, nhà hát|N|B2
劇烈|jùliè|kịch liệt|Vs|B2
劇院|jùyuàn|rạp, nhà hát|N|B2
據說|jùshuō|nghe nói|Conj|B2
捐|juān|vứt bỏ, bỏ đi|V|B2
捐款|juānkuǎn|quyên tiền|N|B2
捐款|juānkuǎn|-sep tặng, cúng, hiến|V|B2
卷|juǎn|quyển, cuốn|M|B2
捲|juǎn|cuốn, cuộn|V|B2
決/絕|jué|quyết định|Adv|B2
決心|juéxīn|lòng quyết tâm|N|B2
決心|juéxīn|quyết tâm|Vp|B2
絕不|juébù|tuyệt đối không|Adv|B2
絕大部分|juédàbùfèn|đa số áp đảo|Det|B2
絕對|juéduì|-attr tuyệt đối|Vs|B2
覺悟|juéwù|giác ngộ, tỉnh ngộ|Vp|B2
軍|jūn|quân,quân đội|N|B2
軍事|jūnshì|quân sự|N|B2
卡|kǎ|tờ, phiếu|M|B2
卡|kǎ|kẹt lại|Vi|B2
卡通|kǎtōng|phim hoạt hình|N|B2
開|kāi|mở ra|Vp|B2
開除|kāichú|khai trừ, đuổi ra|V|B2
開刀|kāidāo|-sep khai đao, chặt|V|B2
開發|kāifā|chi trả, thanh toán|V|B2
開戶|kāihù|-sep mở tài khoản|V|B2
開課|kāikè|-sep nhập học, khai giảng|V|B2
開明|kāimíng|khai sáng, văn minh|Vs|B2
開設|kāishè|mở lớp, bố trí|V|B2
開拓|kāituò|khai phá|V|B2
開演|kāiyǎn|bắt đầu diễn|Vp|B2
看家|kānjiā|giữ nhà, coi nhà|Vi|B2
砍|kǎn|chặt, chẻ|V|B2
看|kàn|chăm sóc, trông giữ|Vst|B2
看得起|kàndeqǐ|tôn trọng, nể mặt|Vst|B2
看看|kànkan|xem qua, kiểm tra||B2
看來|kànlái|hình như|Adv|B2
看樣子|kànyàngzi|xem ra|Adv|B2
抗議|kàngyì|kháng nghị|V|B2
考察|kǎochá|khảo sát|V|B2
考卷|kǎojuàn|bài thi|N|B2
考慮|kǎolǜ|suy xét|V|B2
考取|kǎoqǔ|thi đậu|Vpt|B2
靠|kào|dựa vào|Prep|B2
靠近|kàojìn|kề, kế, dựa sát|V|B2
科目|kēmù|môn học|N|B2
顆|kē|hạt, viên|M|B2
可是|kěshì|thế nhưng|Adv|B2
可喜|kěxǐ|đáng mừng|Vs|B2
可笑|kěxiào|buồn cười, nực cười|Vs|B2
客房|kèfáng|phòng trọ|N|B2
客觀|kèguān|khách quan|Vs|B2
客戶|kèhù|khách thuê nhà|N|B2
課外|kèwài|-attr ngoại khóa|Vs|B2
空|kōng|trống không|Adv|B2
空前|kōngqián|-attr không gian|Vs|B2
空中|kōngzhōng|trong không trung|N|B2
恐怖|kǒngbù|khủng bố|Vs|B2
空/空兒|kòng/kòngr|thời gian rảnh|N|B2
控制|kòngzhì|khống chế|V|B2
口|kǒu|miệng|M|B2
口才|kǒucái|tài ăn nói|N|B2
口號|kǒuhào|khẩu hiệu|N|B2
口紅|kǒuhóng|thỏi son|N|B2
口氣|kǒuqì|khẩu khí|N|B2
口試|kǒushì|cuộc thi vấn đáp|N|B2
口試|kǒushì|thi vấn đáp|Vi|B2
口水|kǒushuǐ|nước bọt|N|B2
口音|kǒuyīn|khẩu âm, giọng nói|N|B2
口語|kǒuyǔ|khẩu ngữ|N|B2
扣|kòu|cài, móc|V|B2
誇獎|kuājiǎng|khen ngợi|V|B2
跨|kuà|sải bước|V|B2
會計|kuàijì|kế toán viên|N|B2
寬度|kuāndù|độ rộng|N|B2
喇叭|lǎba|kèn đồng, còi|N|B2
蠟燭|làzhú|cây nến, đèn cầy|N|B2
辣椒|làjiāo|ớt, quả ớt|N|B2
來|lái|đến, tới|N|B2
來回|láihuí|đi về, khứ hồi|V|B2
來臨|láilín|đến, tới, đi tới|Vp|B2
來往|láiwǎng|qua lại, vãng lai|Vi|B2
來信|láixìn|gởi thư|N|B2
來源|láiyuán|nguồn gốc|N|B2
來自|láizì|đến từ|Vpt|B2
籃子|lánzi|làn xách, giỏ|N|B2
懶|lǎn|lười nhác|Vs|B2
懶得|lǎnde|lười, chẳng muốn...|Vaux|B2
爛|làn|nát, nhừ, nhão|Vs|B2
濫用|lànyòng|lạm dụng|V|B2
狼|láng|con sói|N|B2
浪|làng|sóng, làn sóng|N|B2
浪費|làngfèi|lãng phí|Vs|B2
撈|lāo|kiếm, moi, vét|V|B2
牢|láo|chuồng, nhà tù, ngục|Vs|B2
牢騷|láosāo|kêu ca, oán than|N|B2
勞動|láodòng|lao động|V|B2
勞工|láogōng|công nhân|N|B2
勞力|láolì|sức lao động|N|B2
嘮叨|láodao|lải nhải|Vi|B2
老|lǎo|già, lão|Adv|B2
老百姓|lǎobǎixìng|nhân dân|N|B2
老闆娘/ 老板娘|lǎobǎnniáng|bà chủ|N|B2
老大|lǎodà|lão đại, đại ca|N|B2
老家|lǎojiā|quê nhà, nguyên quán|N|B2
老實說|lǎoshíshuō|nói thật lòng thì...||B2
老太太|lǎotàitai|bà, quý bà|N|B2
樂意|lèyì|cam tâm tình nguyện|Vs|B2
類似|lèisì|tương tự, giống|Vs|B2
冷靜|lěngjìng|vắng vẻ, yên tĩnh|Vs|B2
冷飲|lěngyǐn|đồ uống lạnh|N|B2
梨(子)|lí(zi)|cây lê|N|B2
理|lǐ|quản lý, sắp xếp|V|B2
理|lǐ|để ý|Vst|B2
理由|lǐyóu|lý do|N|B2
裡/裏頭|lǐtou|bên trong|N|B2
禮|lǐ|lễ nghi|N|B2
禮品|lǐpǐn|quà tặng, lễ vật|N|B2
力氣|lìqi|sức lực|N|B2
立|lì|đứng, dựng|V|B2
立場|lìchǎng|lập trường|N|B2
立即|lìjí|lập tức, ngay|Adv|B2
利|lì|sắc bén|Vs|B2
利潤|lìrùn|lợi nhuận, lãi|N|B2
利息|lìxí|lợi tức, lãi|N|B2
例外|lìwài|ngoại lệ|Vs|B2
粒|lì|hạt, viên|M|B2
聯合|liánhé|đoàn kết, kết hợp|V|B2
聯合國|liánhéguó|liên hiệp quốc|N|B2
連|lián|gắn bó, nối liền|Adv|B2
連接|liánjiē|liên tiếp|Vst|B2
連忙|liánmáng|vội vã|Adv|B2
連續|liánxù|-attr liên tục|Vs|B2
臉色|liǎnsè|sắc mặt|N|B2
量|liáng|đong, đo|V|B2
糧食|liángshí|lương thực|N|B2
倆|liǎng|ngón, trò (nói về thủ đoạn)|N|B2
亮|liàng|phát sáng|V|B2
諒解|liàngjiě|thông cảm|Vst|B2
了|liǎo|hiểu|Vst|B2
列|liè|xếp vào, liệt vào|M|B2
裂|liè|hở, phanh ra|Vp|B2
淋|lín|xối, dội, dầm|V|B2
臨|lín|gần, đối diện|Vst|B2
臨時|línshí|đến lúc|N|B2
凌晨|língchén|rạng sáng|N|B2
靈活|línghuó|linh hoạt|Vs|B2
零件|língjiàn|linh kiện|N|B2
零售|língshòu|bán lẻ|V|B2
零下|língxià|-attr dưới 0, âm|Vs|B2
領帶|lǐngdài|cà-vạt|N|B2
領導|lǐngdǎo|lãnh đạo|N|B2
領土|lǐngtǔ|lãnh thổ|N|B2
領先|lǐngxiān|vượt lên đầu, dẫn đầu|Vpt|B2
領袖|lǐngxiù|lãnh tụ|N|B2
另|lìng|ngoài, khác|Det|B2
另外|lìngwài|ngoài ra|Conj|B2
另外|lìngwài|việc khác|Det|B2
溜|liū|xào, lăn|Vi|B2
流動|liúdòng|chảy, lưu động|Vi|B2
流利|liúlì|lưu loát|Vs|B2
留念|liúniàn|lưu niệm|Vs|B2
嘍|lóu|trợ từ ngữ khí|Ptc|B2
摟|lǒu|ôm|V|B2
露|lù|để trần, để lộ ra|V|B2
路燈|lùdēng|đèn đường|N|B2
路線|lùxiàn|tuyến đường|N|B2
陸軍|lùjūn|lục quân, bộ binh|N|B2
陸續|lùxù|lần lượt|Adv|B2
錄用|lùyòng|tuyển dụng|V|B2
輪船|lúnchuán|tàu thủy|N|B2
輪流|lúnliú|luân phiên|Adv|B2
輪子|lúnzi|bánh xe|N|B2
論|lùn|luận|V|B2
論文|lùnwén|luận văn|N|B2
落|luò|rơi, rụng|Vi|B2
落後|luòhòu|rớt lại phía sau|Vpt|B2
落實|luòshí|làm cho chắc chắn|V|B2
落伍|luòwǔ|lạc đơn vị|Vs|B2
旅行社|lǚxíngshè|công ty du lịch|N|B2
綠豆|lǜdòu|đậu xanh|N|B2
略|lüè|bỏ bớt, lược bớt|Vs|B2
麻|má|chập choạng, mờ tối|Vs|B2
麻雀|máquè|chim sẻ, mạt chược|N|B2
馬虎|mǎhu|qua loa, đại khái|Vs|B2
埋|mái|oán trách|V|B2
買單|mǎidān|-sep thanh toán|V|B2
買賣|mǎimài|mua bán|V|B2
饅頭|mántou|bánh bao|N|B2
滿/蠻|mǎn/mán|đầy, chật|Adv|B2
漫畫|mànhuà|tranh hoạt hình|N|B2
忙碌|mánglù|bận rộn|Vs|B2
盲目|mángmù|mù quáng|Vs|B2
矛盾|máodùn|mâu thuẫn|Vs|B2
毛巾|máojīn|khăn mặt|N|B2
冒|mào|bốc lên, tỏa ra|V|B2
煤|méi|than đá|N|B2
梅花|méihuā|hoa mai|N|B2
美觀|měiguān|đẹp, mỹ quan|Vs|B2
美妙|měimiào|tuyệt vời, mỹ miều|Vs|B2
魅力|mèilì|sức quyến rũ|N|B2
門|mén|cửa, ngõ|M|B2
門票|ménpiào|vé vào cửa|N|B2
門診|ménzhěn|khám bệnh|Vi|B2
猛|měng|dũng mãnh|Vs|B2
夢到|mèngdào|mơ thấy|Vpt|B2
夢想|mèngxiǎng|mộng tưởng|N|B2
夢想|mèngxiǎng|khát khao, mơ ước|V|B2
迷|mí|say đắm|Vst|B2
迷糊|míhu|bối rối|Vs|B2
迷失|míshī|mất phương hướng|Vp|B2
迷信|míxìn|mê tín|N|B2
迷信|míxìn|sùng bái|Vs|B2
密|mì|dày, chặt chẽ|Vs|B2
蜜蜂|mìfēng|mật ong|N|B2
秘/祕書|mìshū|thư ký|N|B2
棉|mián|bong vải|N|B2
棉被|miánbèi|chăn bông|N|B2
棉花|miánhua|cây bông vải|N|B2
免得|miǎnde|tránh khỏi, đỡ phải|Vaux|B2
勉強|miǎnqiǎng|miễn cưỡng|Vs|B2
面|miàn|mặt|M|B2
面對|miànduì|đối mặt|V|B2
面臨|miànlín|đứng trước, gặp phải|Vst|B2
面貌|miànmào|diện mạo|N|B2
面子|miànzi|bề mặt|N|B2
麵粉|miànfěn|bột mì|N|B2
妙|miào|đẹp, tuyệt diệu|Vs|B2
滅亡|mièwáng|diệt vong|Vp|B2
民間|mínjiān|dân gian|N|B2
民謠|mínyáo|ca dao|N|B2
民眾|mínzhòng|dân chúng|N|B2
民主|mínzhǔ|dân chủ|N|B2
名|míng|tên gọi|Vst|B2
名稱|míngchēng|tên, tên gọi|N|B2
名單|míngdān|danh sách|N|B2
名牌|míngpái|nhãn hiệu nổi tiếng|N|B2
名片|míngpiàn|danh thiếp|N|B2
明白|míngbái|rõ ràng|Vs|B2
明亮|míngliàng|sáng sủa|Vs|B2
明明|míngmíng|rõ ràng, rành rành|Adv|B2
明確|míngquè|đúng đắn|Vs|B2
命|mìng|sinh mệnh, tính mạng|V|B2
命令|mìnglìng|mệnh lệnh|N|B2
命令|mìnglìng|ra lệnh|V|B2
命運|mìngyùn|số phận|N|B2
磨|mó|xay|V|B2
模仿|mófǎng|mô phỏng, bắt chước theo|V|B2
模糊|móhú|mơ hồ|Vs|B2
模型|móxíng|mô hình|N|B2
模樣|móyàng|dáng dấp|N|B2
抹|mǒ|lau chùi|V|B2
目標|mùbiāo|mục tiêu|N|B2
目的地|mùdìdì|đích đến, nơi đến|N|B2
目錄|mùlù|mục lục|N|B2
哪怕|nǎpà|cho dù|Conj|B2
奶粉|nǎifěn|sữa bột|N|B2
耐心|nàixīn|kiên trì|Adv|B2
耐用|nàiyòng|bền|Vs|B2
難道|nándào|lẽ nào, chẳng lẽ|Adv|B2
難得|nándé|khó có được|Vs|B2
難受|nánshòu|khó chịu|Vs|B2
難以|nányǐ|khó mà|Adv|B2
男性|nánxìng|nam giới|N|B2
腦袋|nǎodai|đầu, ý thức|N|B2
腦筋|nǎojīn|suy nghĩ, đầu óc|N|B2
鬧|nào|ồn ào|V|B2
鬧區|nàoqū|trung tâm thành phố|N|B2
內部|nèibù|nội bộ|N|B2
內地|nèidì|đất liền|N|B2
內行|nèiháng|trong nghề, thành thạo|Vs|B2
內科|nèikē|nội khoa|N|B2
能幹|nénggàn|tài giỏi|Vs|B2
能源|néngyuán|nguồn năng lượng|N|B2
泥|ní|bùn|N|B2
泥土|nítǔ|thổ nhưỡng|N|B2
黏/粘|nián|dính|V|B2
黏/粘|nián|dính, sánh|Vs|B2
尿|niào|nước tiểu|N|B2
尿|niào|đi tiểu|Vi|B2
捏|niē|nhón, nhặt|V|B2
寧可|níngkě|thà rằng, thà|Vaux|B2
寧願|níngyuàn|tình nguyện|Vaux|B2
鈕扣|niǔkòu|cúc áo|N|B2
農場|nóngchǎng|nông trường|N|B2
農產品|nóngchǎnpǐn|nông sản|N|B2
農村|nóngcūn|nông thôn|N|B2
農民/農夫|nóngmín/nóngfū|nông dân|N|B2
農藥|nóngyào|thuốc trừ sâu|N|B2
濃|nóng|đặc, đậm|Vs|B2
濃厚|nónghòu|dày đặc|Vs|B2
暖|nuǎn|ấm áp|Vs|B2
暖和|nuǎnhuo|ấm, sưởi ấm|Vs|B2
暖氣|nuǎnqì|lò sưởi, hơi ấm|N|B2
女性|nǚxìng|nữ giới|N|B2
偶然|ǒurán|ngẫu nhiên, tình cờ|Vs|B2
排|pái|hàng|M|B2
排|pái|xếp, sắp xếp|V|B2
排斥|páichì|bài xích|V|B2
排列|páiliè|xếp đặt|V|B2
排球|páiqiú|bóng chuyền|N|B2
派|pài|phái, bè cánh|V|B2
攀|pān|leo, trèo|V|B2
盤|pán|khay, mâm|M|B2
判斷|pànduàn|phán đoán|V|B2
泡|pào|ngâm|V|B2
炮|pào|xào, nướng, rang|N|B2
砲|pào|pháo, đại bác|N|B2
賠|péi|bồi thường, đền|V|B2
賠償|péicháng|đền bù|V|B2
陪同|péitóng|cùng đi|V|B2
佩服|pèifu|bái phục, khâm phục|Vst|B2
噴|pēn|phun ra|V|B2
盆|pén|chậu, bồn|M|B2
膨脹|péngzhàng|giãn nở, bành trướng|Vp|B2
捧|pěng|nâng, bê, bưng|V|B2
碰見|pèngjiàn|tình cờ gặp|Vpt|B2
匹|pī|sánh được, xứng với|M|B2
批|pī|tập, xấp|M|B2
批|pī|phát, đánh|V|B2
批判|pīpàn|phê bình, phê phán|V|B2
皮|pí|da, vỏ|Vs|B2
披|pī|khoác, choàng|V|B2
疲倦|píjuàn|mệt mỏi rã rời|Vs|B2
疲勞|píláo|mệt nhoài|Vs|B2
脾氣|píqi|tính tình, tính cách|N|B2
屁股|pìgu|mông đít|N|B2
篇|piān|bài, phần, trang|M|B2
偏/偏偏|piān/piānpiān|lại, cứ, cố ý|Adv|B2
偏食|piānshí|kén ăn|Vs|B2
偏向|piānxiàng|khuynh hướng|Vst|B2
騙|piàn|lừa gạt|V|B2
片面|piànmiàn|-attr phiến diện|Vs|B2
片子|piànzi|tấm, miếng, danh thiếp|N|B2
飄|piāo|tung bay|Vi|B2
拼命|pīnmìng|liều mạng|Vs|B2
貧窮|pínqióng|bần cùng, nghèo túng|Vs|B2
品德|pǐndé|đức tính|N|B2
聘請|pìnqǐng|mời đảm nhiệm chức vụ|V|B2
憑|píng|dựa, tựa|Prep|B2
平常|píngcháng|thường ngày|Vs|B2
平衡|pínghéng|cân bằng|Vst|B2
平靜|píngjìng|yên bình|Vs|B2
平均|píngjūn|trung bình|Vs|B2
婆婆|pópo|mẹ chồng|N|B2
頗|pǒ|tương đối|Adv|B2
破爛|pòlàn|rách nát, tả tơi|Vs|B2
破裂|pòliè|vỡ, rạn nứt|Vp|B2
迫切|pòqiè|cấp bách|Vs|B2
撲|pū|bổ nhào|V|B2
撲滅|pūmiè|dập tắt|V|B2
鋪|pū|trải, lót|V|B2
普及|pǔjí|phổ cập|Vs|B2
普通|pǔtōng|phổ thông|Vs|B2
普通話|pǔtōnghuà|tiếng phổ thông|N|B2
瀑布|pùbù|thác nước|N|B2
欺騙|qīpiàn|lừa dối|V|B2
妻子|qīzǐ|vợ|N|B2
期|qí|một năm tròn, một tháng tròn|N|B2
期限|qíxiàn|kỳ hạn|N|B2
其|qí|của nó, bọn nó|N|B2
其餘|qíyú|còn lại|Det|B2
棋|qí|đánh cờ, chơi cờ|N|B2
齊|qí|làm cho đều nhau|Vs|B2
齊全|qíquán|đầy đủ|Vs|B2
旗袍|qípáo|sườn xám|N|B2
旗子|qízi|lá cờ|N|B2
歧視|qíshì|kỳ thị|Vst|B2
起|qǐ|cái, vụ|M|B2
起|qǐ|dậy, rời khỏi|V|B2
起初|qǐchū|lúc đầu, mới đầu|Adv|B2
起火|qǐhuǒ|nấu cơm, thổi cơm|Vp|B2
企圖|qìtú|ý đồ, mưu đồ|N|B2
企圖|qìtú|mưu tính|Vaux|B2
汽油|qìyóu|xăng|N|B2
器材|qìcái|dụng cụ|N|B2
器官|qìguān|bộ máy, cơ quan|N|B2
氣氛|qìfēn|bầu không khí|N|B2
氣憤|qìfèn|tức giận, căm giận|Vs|B2
氣候|qìhòu|khí hậu|N|B2
氣味|qìwèi|mùi|N|B2
氣息|qìxí|hơi thở|N|B2
氣象|qìxiàng|khí tượng|N|B2
千萬|qiānwàn|nhất định, tuyệt đối|Adv|B2
牽|qiān|dắt|V|B2
遷|qiān|di chuyển, dời|V|B2
簽|qiān|khâu, may lược|V|B2
簽訂|qiāndìng|ký kết|V|B2
簽約|qiānyuē|-sep ký hợp đồng|V|B2
簽字|qiānzì|-sep ký tên|V|B2
前方|qiánfāng|phía trước|N|B2
前進|qiánjìn|tiến lên|V|B2
前頭|qiántou|trước mặt|N|B2
前途|qiántú|tiền đồ|N|B2
前往|qiánwǎng|tiến về phía trước|V|B2
前院|qiányuàn|trước sân|N|B2
欠|qiàn|ngáp|V|B2
歉意|qiànyì|áy náy|N|B2
槍|qiāng|cây giáo|N|B2
強|qiáng|kiên cường|Vs|B2
強大|qiángdà|lớn mạnh|Vs|B2
強度|qiángdù|cường độ|N|B2
強烈|qiángliè|mãnh liệt|Vs|B2
強人|qiángrén|tên cướp|N|B2
牆壁|qiángbì|tường, bức tường|N|B2
強迫|qiǎngpò|ép buộc|V|B2
搶救|qiǎngjiù|cấp cứu|V|B2
敲|qiāo|gõ, khua|V|B2
瞧|qiáo|nhìn|V|B2
巧|qiǎo|nhanh nhẹn, khéo léo|Vs|B2
巧妙|qiǎomiào|tài tình, khéo léo|Vs|B2
悄悄|qiǎoqiǎo|lặng lẽ|Adv|B2
切|qiē|thân thiết, gần gũi|V|B2
且|qiě|mà còn|Conj|B2
親愛|qīnài|-attr thân ái|Vs|B2
親口|qīnkǒu|chính miệng|Adv|B2
親戚|qīnqī|thân thích|N|B2
親人|qīnrén|người thân|N|B2
侵害|qīnhài|xâm hại|V|B2
侵入|qīnrù|xâm nhập|V|B2
勤勞|qínláo|cần cù|Vs|B2
寢室|qǐnshì|phòng ngủ|N|B2
青|qīng|xanh, màu xanh|Vs|B2
清|qīng|trong suốt|V|B2
清晨|qīngchén|sáng sớm|N|B2
清除|qīngchú|loại bỏ|V|B2
清楚|qīngchǔ|rõ ràng|Vs|B2
清淡|qīngdàn|nhẹ, loãng, nhạt|Vs|B2
清晰|qīngxī|rõ rệt|Vs|B2
清醒|qīngxǐng|tỉnh táo|Vs|B2
輕傷|qīngshāng|bị thương nhẹ|N|B2
輕視|qīngshì|khinh thường|Vst|B2
傾向|qīngxiàng|nghiêng về|Vst|B2
情書|qíngshū|thư tình|N|B2
情緒|qíngxù|hứng thú|N|B2
秋季|qiūjì|mùa thu|N|B2
求婚|qiúhūn|-sep cầu hôn|V|B2
球隊|qiúduì|đội bóng|N|B2
球鞋|qiúxié|giày đá bóng|N|B2
曲折|qūzhé|quanh co|Vs|B2
區別|qūbié|điểm khác biệt|N|B2
區別|qūbié|phân biệt|V|B2
區域|qūyù|khu vực, vùng|N|B2
取|qǔ|lấy, đạt được|V|B2
取得|qǔdé|giành được|Vpt|B2
取笑|qǔxiào|pha trò|V|B2
取消|qǔxiāo|thủ tiêu|V|B2
娶|qǔ|lấy vợ|V|B2
去|qù|rời đi|V|B2
圈|quān|chuồng|M|B2
全家|quánjiā|cả nhà|N|B2
全面|quánmiàn|toàn diện|Adv|B2
全面|quánmiàn|-attr mọi mặt|Vs|B2
全體|quántǐ|toàn thể|N|B2
拳頭|quántou|nắm đấm, nắm tay|N|B2
權利|quánlì|quyền lợi|N|B2
勸|quàn|khuyên nhủ|V|B2
缺|quē|thiếu|Vst|B2
缺乏|quēfá|thiếu hụt|Vst|B2
缺少|quēshǎo|thiếu|Vst|B2
缺席|quēxí|vắng họp, nghỉ học|Vs|B2
確實|quèshí|đích thực|Vs|B2
群|qún|bầy, đàn|M|B2
群眾|qúnzhòng|quần chúng|N|B2
然而|ránér|nhưng mà|Conj|B2
燃料|ránliào|nguyên liệu, chất đốt|N|B2
燃燒|ránshāo|bùng cháy|V|B2
染|rǎn|nhuộm|V|B2
讓|ràng|nhường|V|B2
讓步|ràngbù|nhường bước|Vi|B2
繞|rào|quấn, buộc|V|B2
惹|rě|dẫn đến|V|B2
惹|rě|trêu chọc|Vst|B2
熱愛|rèài|yêu, tha thiết|Vst|B2
熱烈|rèliè|nhiệt liệt|Vs|B2
熱門|rèmén|hấp dẫn, lôi cuốn|Vs|B2
熱情|rèqíng|sự niềm nở|N|B2
熱情|rèqíng|nhiệt tình|Vs|B2
熱心|rèxīn|sốt sắng|Vs|B2
人才|réncái|nhân tài|N|B2
人格|réngé|tính cách|N|B2
人工|réngōng|nhân công|N|B2
人力|rénlì|nhân lực|N|B2
兒|rénqíngwèi/rénqín|cảm xúc của con người|N|B2
人權|rénquán|nhân quyền|N|B2
人生|rénshēng|đời người|N|B2
人事|rénshì|việc của con người|N|B2
人體|réntǐ|nhân thể, thân thể|N|B2
人心|rénxīn|lòng người|N|B2
人行道|rénxíngdào|đường dành cho người đi bộ|N|B2
人員|rényuán|nhân viên|N|B2
忍不住|rěnbùzhù|không thể chịu đựng|Vs|B2
忍受|rěnshòu|nén chịu|Vst|B2
忍心|rěnxīn|nhẫn tâm|Vs|B2
任|rèn|bổ nhiệm|Vst|B2
任性|rènxìng|tùy hứng|Vs|B2
日常|rìcháng|-attr hàng ngày|Vs|B2
日後|rìhòu|sau này|N|B2
日用品|rìyòngpǐn|vật dụng hàng ngày|N|B2
容|róng|dung nạp|Vst|B2
融化|rónghuà|tan, hòa tan|Vp|B2
榮幸|róngxìng|vinh hạnh|Vs|B2
如|rú|như, giống như|Vst|B2
如果說|rúguǒshuō|nếu nói|Conj|B2
如何|rúhé|như thế nào, ra sao|Adv|B2
如何|rúhé|làm sao, làm thế nào|Vs|B2
如今|rújīn|giờ đây, đến nay|N|B2
如同|rútóng|dường như|Vst|B2
入|rù|đi vào|V|B2
入境|rùjìng|nhập cảnh|V|B2
入口|rùkǒu|nhập khẩu|N|B2
入學|rùxué|nhập học|Vp|B2
軟|ruǎn|mềm mại|Vs|B2
塞|sāi|nhét, đút|V|B2
賽跑|sàipǎo|thi chạy|Vi|B2
三角形|sānjiǎoxíng|hình tam giác|N|B2
散|sàn|lỏng lẻo, rời rạc|V|B2
散|sàn|không tập trung|Vp|B2
喪失|sàngshī|mất mát|Vpt|B2
艘|sāo|chiếc, con|M|B2
掃|sǎo|quét, loại bỏ|V|B2
色彩|sècǎi|màu sắc|N|B2
色情|sèqíng|tình dục|N|B2
沙|shā|sàng|N|B2
沙漠|shāmò|sa mạc|N|B2
沙灘|shātān|bãi cát|N|B2
沙子|shāzi|hạt cát|N|B2
殺價|shājià|-sep ép giá|V|B2
傻|shǎ|dốt, ngốc|Vs|B2
曬太陽|shàitàiyáng|tắm nắng|Vi|B2
山地|shāndì|vùng núi|N|B2
閃|shǎn|lánh, trốn|Vi|B2
閃|shǎn|chớp, chợt xuất hiện|Vp|B2
善於|shànyú|có sở trường về...|Vst|B2
扇子|shànzi|cái quạt|N|B2
傷|shāng|tổn thất|N|B2
傷|shāng|làm tổn hại|Vs|B2
傷腦筋|shāngnǎojīn|hao tổn tâm trí|Vs|B2
商標|shāngbiāo|nhãn hiệu|N|B2
商場|shāngchǎng|thương trường|N|B2
商量|shāngliang|thương lượng|V|B2
上|shàng|ở trên|V|B2
上級|shàngjí|cấp trên|N|B2
上升|shàngshēng|lên cao, tăng lên|Vi|B2
上市|shàngshì|đưa ra thị trường|Vp|B2
上述|shàngshù|kể trên, nói trên|N|B2
上台/臺|shàngtái|-sep lên sân khấu|V|B2
上頭|shàngtou|búi tóc|N|B2
上下|shàngxià|trên dưới|N|B2
上游|shàngyóu|thượng nguồn|N|B2
稍|shāo|sơ qua|Adv|B2
稍微|shāowéi|hơi, một chút|Adv|B2
少數|shǎoshù|thiểu số|Det|B2
少年|shàonián|thiếu niên|N|B2
少女|shàonǚ|thiếu nữ|N|B2
舌頭|shétou|lưỡi|N|B2
捨不得|shěbùde|không nỡ|Vst|B2
捨得|shěde|cam lòng|Vst|B2
射|shè|bắn, sút|V|B2
社會|shèhuì|xã hội|N|B2
社交|shèjiāo|giao tiếp xã hội|N|B2
社團|shètuán|đoàn thể|N|B2
設立|shèlì|thành lập|V|B2
設置|shèzhì|thiết lập|V|B2
攝影|shèyǐng|chụp ảnh|Vi|B2
申請|shēnqǐng|xin|V|B2
伸|shēn|duỗi, dang|V|B2
伸手|shēnshǒu|chìa tay|Vi|B2
身材|shēncái|vóc người|N|B2
身分|shēnfèn|tư cách, thân phận|N|B2
身分證|shēnfènzhèng|chứng minh nhân dân|N|B2
深刻|shēnkè|sâu sắc|Vs|B2
深淺|shēnqiǎn|mức độ|N|B2
深夜|shēnyè|đêm khuya|N|B2
神|shén|thần linh|N|B2
神話|shénhuà|thần thoại|N|B2
神經|shénjīng|thần kinh|N|B2
神秘|shénmì|thần bí|Vs|B2
神奇|shénqí|thần kỳ|Vs|B2
神氣|shénqì|thần sắc|Vs|B2
神聖|shénshèng|thần thánh, thiêng liêng|Vs|B2
神仙|shénxiān|thần tiên|N|B2
審查|shěnchá|thẩm tra|V|B2
慎重|shènzhòng|thận trọng|Vs|B2
升|shēng|lên cao, thăng|Vp|B2
升高|shēnggāo|nâng cao|Vp|B2
升級|shēngjí|thăng chức|Vp|B2
升學|shēngxué|học lên|Vi|B2
生|shēng|-attr sinh đẻ|Vs|B2
生存|shēngcún|sinh tồn|Vs|B2
生肖|shēngxiào|cầm tinh|N|B2
生長|shēngzhǎng|sinh trưởng, lớn lên|Vs|B2
聲|shēng|âm thanh|M|B2
繩(子)|shéng(zi)|dây thừng|N|B2
省|shěng|tự kiểm điểm bản thân|Vs|B2
省得|shěngde|tránh khỏi|Vaux|B2
勝|shèng|thắng|Vp|B2
勝利|shènglì|thắng lợi|Vp|B2
失敗|shībài|thất bại|Vs|B2
失掉|shīdiào|lỡ mất|Vpt|B2
失眠|shīmián|mất ngủ|Vp|B2
失望|shīwàng|thất vọng|Vs|B2
失業|shīyè|thất nghiệp|Vp|B2
溼|shī|ẩm ướt|Vs|B2
詩|shī|thơ ca|N|B2
詩人|shīrén|nhà thơ|N|B2
師父|shīfu|sư phụ|N|B2
師傅|shīfù|thầy dạy, sư phụ|N|B2
師母|shīmǔ|sư mẫu (vợ của thầy)|N|B2
施工|shīgōng|thi công|Vi|B2
時常|shícháng|thường thường|Adv|B2
時機|shíjī|thời cơ|N|B2
時期|shíqí|thời kỳ|N|B2
時時|shíshí|luôn luôn|Adv|B2
食品|shípǐn|thực phẩm|N|B2
實用|shíyòng|thực dụng|Vs|B2
實在|shízài|chắc chắn|Adv|B2
實施|shíshī|thực thi|V|B2
實現|shíxiàn|thực hiện|V|B2
實驗|shíyàn|thí nghiệm|N|B2
實驗|shíyàn|thực nghiệm|Vi|B2
使|shǐ|sai khiến|V|B2
始終|shǐzhōng|từ đầu đến cuối|Adv|B2
示威|shìwēi|thị uy, uy lực|Vi|B2
式樣|shìyàng|kiểu dáng|N|B2
世|shì|đời, thế hệ|N|B2
世紀|shìjì|thế kỷ|N|B2
市立|shìlì|-attr thành phố|Vs|B2
市民|shìmín|dân thành phố|N|B2
市區|shìqū|khu vực thành thị|N|B2
視|shì|nhìn, đối xử|Prep|B2
視野|shìyě|tầm nhìn|N|B2
適當|shìdàng|thỏa đáng|Vs|B2
適合|shìhé|phù hợp|Vst|B2
適用|shìyòng|thích hợp dùng|Vst|B2
是非|shìfēi|phải trải, đúng sai|N|B2
是否|shìfǒu|phải chăng|Adv|B2
事件|shìjiàn|sự kiện|N|B2
事實上|shìshíshàng|trên thực tế|Adv|B2
事物|shìwù|sự vật|N|B2
事先|shìxiān|trước khi xảy ra|Adv|B2
勢力|shìlì|thế lực|N|B2
試驗|shìyàn|thử nghiệm|V|B2
收據|shōujù|biên lai, biên nhận|N|B2
收看|shōukàn|thưởng thức|V|B2
收入|shōurù|thu nhập|N|B2
收拾|shōushí|chỉnh đốn|V|B2
手電筒|shǒudiàntǒng|đèn pin|N|B2
手段|shǒuduàn|thủ đoạn|N|B2
手工|shǒugōng|thủ công|N|B2
手術|shǒushù|phẫu thuật|N|B2
首|shǒu|đầu, đứng đầu|Det|B2
首都|shǒudū|thủ đô|N|B2
首先|shǒuxiān|đầu tiên|Adv|B2
受|shòu|chịu đựng|Prep|B2
受|shòu|nhận, được|Vst|B2
受不了|shòubuliǎo|chịu không nổi|Vst|B2
受到|shòudào|nhận được|Vpt|B2
售|shòu|thi hành, thực hiện|V|B2
壽命|shòumìng|tuổi thọ|N|B2
疏忽|shūhū|lơ là, qua quýt|Vp|B2
書房|shūfáng|phòng sách|N|B2
書籍|shūjí|sách vở|N|B2
輸出|shūchū|xuất cảng, xuất khẩu|V|B2
輸入|shūrù|nhập cảng, nhập khẩu|V|B2
熟練|shúliàn|thuần thục|Vs|B2
熟人|shúrén|người quen|N|B2
屬|shǔ|loài, loại|Vst|B2
屬於|shǔyú|thuộc về|Vst|B2
暑期|shǔqí|kỳ nghỉ hè|N|B2
束|shù|buộc, cột|M|B2
數|shù|nhiều lần|N|B2
數量|shùliàng|số lượng|N|B2
數目|shùmù|con số|N|B2
樹林|shùlín|rừng cây|N|B2
刷|shuā|quẹt (thẻ)|V|B2
刷(子)|shuā(zi)|bàn chải|N|B2
刷卡|shuākǎ|-sep quẹt thẻ|V|B2
耍|shuǎ|giở trò|V|B2
摔|shuāi|ngã, té|V|B2
衰退|shuāituì|suy yếu|Vp|B2
甩|shuǎi|vung, vẩy|V|B2
率領|shuàilǐng|dẫn đầu|V|B2
雙|shuāng|đôi, kép|M|B2
雙胞胎|shuāngbāotāi|thai song sinh|N|B2
雙方|shuāngfāng|hai bên, đôi bên|N|B2
水分|shuǐfèn|hàm lượng nước|N|B2
水災|shuǐzāi|lũ lụt|N|B2
稅|shuì|thuế|N|B2
說服|shuìfú|thuyết phục|V|B2
順|shùn|thuận, xuôi|Prep|B2
順|shùn|lần lượt|Vs|B2
順手|shùnshǒu|thuận tay, tiện tay|Vs|B2
順序|shùnxù|trật tự, thứ tự|N|B2
說不定|shuōbudìng|không nói chắc|Adv|B2
碩士|shuòshì|thạc sĩ|N|B2
絲|sī|tơ tằm, sợi|N|B2
撕|sī|xé, kéo|V|B2
私立|sīlì|-attr tư nhân|Vs|B2
私人|sīrén|tư nhân, cá nhân|N|B2
思索|sīsuǒ|suy nghĩ tìm tòi|V|B2
死|sǐ|chết|Adv|B2
死亡|sǐwáng|tử vong|Vp|B2
四處|sìchù|khắp nơi|Adv|B2
四處|sìchù|xung quanh|N|B2
四方|sìfāng|khắp nơi|N|B2
四季|sìjì|bốn mùa|N|B2
四周/週|sìzhōu|chu vi, xung quanh|N|B2
飼養|sìyǎng|chăn nuôi|V|B2
鬆|sōng|cây thông|Vs|B2
送行|sòngxíng|tiễn đưa|Vi|B2
俗|sú|phong tục|Vs|B2
俗話|súhuà|tục ngữ|N|B2
俗話說|súhuàshuō|tục ngữ có câu...||B2
算|suàn|tính toán|V|B2
算起來|suànqilai|làm tròn, tính toán|Adv|B2
算是|suànshì|rốt cuộc, xem như là|Vst|B2
算帳|suànzhàng|-sep tính sổ, đòi công bằng|V|B2
隨|suí|theo, đi theo|Vst|B2
隨手|suíshǒu|thuận tay, tiện tay|Adv|B2
隨意|suíyì|tùy ý|Vs|B2
隨著|suízhe|cùng với|Prep|B2
碎|suì|vỡ, bể|Vp|B2
歲數|suìshu|số tuổi|N|B2
孫女|sūnnǚ|cháu gái|N|B2
孫子|sūnzi|cháu trai|N|B2
損失|sǔnshī|tổn thất|N|B2
損失|sǔnshī|thiệt hại|Vpt|B2
縮|suō|co, rút lại|V|B2
縮短|suōduǎn|rút ngắn|V|B2
縮水|suōshuǐ|ngâm nước|Vp|B2
鎖|suǒ|cái khóa|N|B2
鎖|suǒ|khóa lại|V|B2
塌|tā|đổ sụp|Vp|B2
踏|tà|giẫm, đạp|V|B2
抬頭|táitóu|-sep ngẩng đầu|V|B2
太空|tàikōng|vũ trụ|N|B2
攤子|tānzi|sạp, quầy (hàng)|N|B2
彈|tán|đánh, gảy (đàn)|V|B2
談判|tánpàn|đàm phán|Vi|B2
毯子|tǎnzi|tấm thảm|N|B2
探|tàn|thăm dò|V|B2
探親|tànqīn|-sep thăm người thân|V|B2
探討|tàntǎo|nghiên cứu thảo luận|V|B2
趟|tàng|lần, chuyến|M|B2
燙|tàng|phỏng, bỏng|V|B2
燙|tàng|là, ủi|Vs|B2
掏|tāo|móc, đào|V|B2
逃|táo|trốn chạy|Vi|B2
逃避|táobì|trốn tránh|V|B2
逃走|táozǒu|chạy trốn|Vp|B2
陶瓷|táocí|gốm sứ|N|B2
淘氣|táoqì|tinh nghịch|Vs|B2
桃子|táozi|quả đào|N|B2
討|tǎo|thỉnh cầu, xin|V|B2
套|tào|bộ|M|B2
套|tào|trùm ngoài, bọc ngoài|V|B2
特別|tèbié|đặc biệt|Adv|B2
特點|tèdiǎn|đặc điểm|N|B2
提|tí|đề cập, nói đến|V|B2
提起|tíqǐ|nhắc nhở|V|B2
提前|tíqián|trước thời hạn|Vp|B2
提醒|tíxǐng|nhắc nhở|V|B2
提早|tízǎo|sớm hơn, trước thời hạn|Vp|B2
題|tí|đề mục|M|B2
體溫|tǐwēn|nhiệt độ cơ thể|N|B2
體驗|tǐyàn|trải nghiệm|V|B2
天才|tiāncái|thiên tài|N|B2
天空|tiānkōng|bầu trời|N|B2
天然|tiānrán|thiên nhiên|Vs|B2
天文|tiānwén|thiên văn|N|B2
天真|tiānzhēn|ngây thơ|Vs|B2
天主教|tiānzhǔjiào|đạo Thiên Chúa|N|B2
田野|tiányě|đồng ruộng|N|B2
挑|tiāo|khều, khêu|V|B2
挑選|tiāoxuǎn|chọn lựa|V|B2
條|tiáo|cành, nhánh|M|B2
條約|tiáoyuē|điều ước|N|B2
調|tiáo|điều động, phân phối|V|B2
調整|tiáozhěng|điều chỉnh|V|B2
跳高|tiàogāo|nhảy cao|Vi|B2
跳遠|tiàoyuǎn|nhảy xa|Vi|B2
貼心|tiēxīn|thân mật|Vs|B2
停止|tíngzhǐ|đình chỉ|Vpt|B2
挺|tǐng|thẳng, ngay thẳng|V|B2
挺|tǐng|ưỡn, ngửa ra|Vs|B2
通|tōng|hồi, trận|M|B2
通|tōng|thông|Vs|B2
通常|tōngcháng|thông thường|Adv|B2
通過|tōngguò|thông qua|V|B2
通信|tōngxìn|-sep thư từ qua lại|V|B2
通訊|tōngxùn|thông tin|N|B2
同|tóng|giống nhau|Adv|B2
同|tóng|cùng nhau|Vs|B2
同胞|tóngbāo|anh chị em ruột|N|B2
同志|tóngzhì|đồng chí|N|B2
銅|tóng|đồng (kim loại)|N|B2
桶|tǒng|thùng|M|B2
統計|tǒngjì|thống kê|V|B2
統一|tǒngyī|thống nhất|Vs|B2
統治|tǒngzhì|thống trị|V|B2
痛快|tòngkuai|vui vẻ|Vs|B2
偷/偷偷|tōu/tōutōu|vụng trộm, lén lút|Adv|B2
頭|tóu|đầu|M|B2
頭腦|tóunǎo|đầu óc, tư duy|N|B2
投票|tóupiào|-sep bỏ phiếu|V|B2
投入|tóurù|đi vào|V|B2
投降|tóuxiáng|đầu hàng|Vi|B2
投資|tóuzī|đầu tư|N|B2
透|tòu|thẩm thấu, thấm qua|Vs|B2
透過|tòuguò|qua|Prep|B2
禿|tū|trọc, trụi|Vs|B2
突出|túchū|xông ra, nhô ra|Vs|B2
突破|túpò|sự đột phá|N|B2
突破|túpò|đột phá|V|B2
途徑|tújìng|con đường, đường lối|N|B2
圖書|túshū|con dấu, con mộc|N|B2
圖章|túzhāng|dấu ấn, dấu mộc|N|B2
吐|tǔ|nhổ, nhả|V|B2
團|tuán|hình tròn|M|B2
團結|tuánjié|đoàn kết|Vs|B2
推動|tuīdòng|thúc đẩy|V|B2
推翻|tuīfān|lật đổ|V|B2
推廣|tuīguǎng|mở rộng|V|B2
退|tuì|lui, lùi|Vpt|B2
退出|tuìchū|rút khỏi|Vpt|B2
退回|tuìhuí|trả lại|Vpt|B2
吞|tūn|nuốt, ngốn|V|B2
拖|tuō|kéo, dắt|V|B2
拖鞋|tuōxié|dép lê|N|B2
托兒所|tuōérsuǒ|nhà trẻ|N|B2
脫離|tuōlí|thoát ly|V|B2
妥當|tuǒdang|thỏa đáng|Vs|B2
妥善|tuǒshàn|ổn thỏa|Vs|B2
妥協|tuǒxié|thỏa hiệp|Vi|B2
哇|wā|oa oa, oe oe (từ tượng thanh)|Ptc|B2
挖|wā|đào, khoét|V|B2
歪|wāi|nghiêng, lệch|Vs|B2
外部|wàibù|phần ngoài, vẻ ngoài|N|B2
外出|wàichū|đi chơi|Vi|B2
外地|wàidì|nơi khác, vùng khác|N|B2
外觀|wàiguān|bề ngoài|N|B2
外行|wàiháng|không chuyên môn, ngoài nghề|Vs|B2
外匯|wàihuì|ngoại hối|N|B2
外交|wàijiāo|ngoại giao|N|B2
外界|wàijiè|bên ngoài|N|B2
外科|wàikē|ngoại khoa|N|B2
外頭|wàitou|bề ngoài|N|B2
彎|wān|cong, ngoằn ngoèo|Vs|B2
彎腰|wānyāo|-sep cúi gập người|V|B2
完畢|wánbì|hoàn tất|Vp|B2
完善|wánshàn|hoàn thiện|Vs|B2
完整|wánzhěng|toàn vẹn|Vs|B2
玩笑|wánxiào|vui đùa|N|B2
晚輩|wǎnbèi|thế hệ sau, hậu bối|N|B2
往|wǎng|hướng về|V|B2
望|wàng|trông, nhìn (xa)|V|B2
威脅|wēixié|sự uy hiếp|N|B2
威脅|wēixié|uy hiếp|V|B2
圍|wéi|vây, bao vây|V|B2
違反|wéifǎn|trái với|Vst|B2
維護|wéihù|giữ gìn, bảo vệ|V|B2
維他命|wéitāmìng|vitamin|N|B2
危機|wéijī|nguy cơ|N|B2
為難|wéinán|khó xử|Vs|B2
唯一|wéiyī|-attr duy nhất|Vs|B2
尾巴|wěiba|cái đuôi|N|B2
委屈|wěiqū|tủi thân|Vs|B2
委託|wěituō|ủy thác|V|B2
委員|wěiyuán|ủy viên|N|B2
未|wèi|vị, chưa, không|Adv|B2
未婚|wèihūn|chưa cưới|Vs|B2
位於|wèiyú|nằm ở|Vst|B2
味/味兒|wèi/wèir|vị|N|B2
味精|wèijīng|bột ngọt|N|B2
為何|wèihé|vì sao|Adv|B2
衛生|wèishēng|vệ sinh|Vs|B2
衛生紙|wèishēngzhǐ|giấy vệ sinh|N|B2
衛星|wèixīng|vệ tinh nhân tạo|N|B2
慰問|wèiwèn|thăm hỏi|V|B2
溫和|wēnhé|ôn hòa|Vs|B2
文法|wénfǎ|ngữ pháp, văn phạm|N|B2
文具|wénjù|văn phòng phẩm|N|B2
文憑|wénpíng|văn bằng|N|B2
文物|wénwù|di vật văn hóa|N|B2
文藝|wényì|văn nghệ|N|B2
蚊子|wénzi|con muỗi|N|B2
吻|wěn|mõm (động vật)|N|B2
吻|wěn|hôn|V|B2
穩|wěn|ổn định, vững|Vs|B2
握|wò|nắm, bắt, cầm|V|B2
臥房|wòfáng|phòng ngủ|N|B2
汙/污染|wūrǎn|ô nhiễm|V|B2
無可奈何|wúkěnàihé|không biết làm thế nào|Vs|B2
無論|wúlùn|bất kể, bất luận|Conj|B2
無情|wúqíng|vô tình|Vs|B2
無數|wúshù|vô số|Det|B2
無限|wúxiàn|vô hạn|Vs|B2
無意|wúyì|vô ý|Vs|B2
武器|wǔqì|vũ khí|N|B2
武術|wǔshù|võ thuật|N|B2
舞|wǔ|vũ, khiêu vũ|N|B2
舞蹈|wǔdào|điệu múa, vũ đạo|N|B2
舞台/臺|wǔtái|sân khấu|N|B2
舞廳|wǔtīng|phòng nhảy|N|B2
勿|wù|chớ, đừng, không nên|Adv|B2
物理|wùlǐ|vật lý|N|B2
物質|wùzhí|vật chất|N|B2
誤|wù|lầm, sai|Adv|B2
誤|wù|lỡ tay|Vst|B2
誤點|wùdiǎn|trễ giờ|Vp|B2
誤會|wùhuì|hiểu lầm|Vst|B2
霧|wù|sương mù|N|B2
西裝|xīzhuāng|âu phục|N|B2
吸|xī|hút, hít|V|B2
吸取|xīqǔ|rút ra, hấp thụ|V|B2
吸食|xīshí|hút, húp|V|B2
吸菸|xīyān|-sep hút thuốc|V|B2
媳婦|xífù|con dâu|N|B2
喜酒|xǐjiǔ|rượu cưới|N|B2
喜劇|xǐjù|hài kịch|N|B2
系列|xìliè|hàng loạt|N|B2
細胞|xìbāo|tế bào|N|B2
細節|xìjié|tình tiết, chi tiết|N|B2
細菌|xìjùn|vi trùng|N|B2
細小|xìxiǎo|nhỏ bé|Vs|B2
瞎|xiā|mù lòa|Vp|B2
蝦(子)|xiā(zi)|con cóc|N|B2
蝦米|xiāmi|tôm nhỏ, tép|N|B2
下巴|xiàba|cằm, hàm|N|B2
下降|xiàjiàng|hạ thấp|Vp|B2
下來|xiàlái|xuống|N|B2
下棋|xiàqí|-sep chơi cờ, đánh cờ|V|B2
下去|xiàqu|xuống phía dưới|Ptc|B2
下午茶|xiàwǔchá|trà chiều|N|B2
下游|xiàyóu|hạ lưu|N|B2
夏季|xiàjì|mùa hè|N|B2
先進|xiānjìn|tiên tiến|Vs|B2
鮮|xiān|ít, hiếm|Vs|B2
鮮花|xiānhuā|hoa tươi|N|B2
鮮奶|xiānnǎi|sữa tươi|N|B2
鮮血|xiānxiě|máu tươi|N|B2
閒|xián|nhàn, rỗi|Vs|B2
嫌|xián|nghi ngờ|Vst|B2
顯得|xiǎnde|lộ ra|Vs|B2
顯然|xiǎnrán|hiển nhiên|Adv|B2
顯示|xiǎnshì|biểu thị, tỏ ra|V|B2
顯著|xiǎnzhù|hiển thị|Vs|B2
現|xiàn|hiện nay|Adv|B2
現場|xiànchǎng|hiện trường|N|B2
現成|xiànchéng|-attr sẵn có|Vs|B2
現金|xiànjīn|tiền mặt|N|B2
羨慕|xiànmù|hâm mộ|Vst|B2
限制|xiànzhì|hạn chế|V|B2
相|xiāng|cùng nhau, lẫn nhau|Adv|B2
相處|xiāngchǔ|sống chung với nhau|Vi|B2
相當|xiāngdāng|tương đương|Vs|B2
相互|xiānghù|lẫn nhau|Adv|B2
相親相愛|xiāngqīnxiāngài|tương thân tương ái|Vs|B2
相似|xiāngsì|tương tự|Vs|B2
箱|xiāng|rương, hòm|M|B2
香腸|xiāngcháng|lạp xưởng|N|B2
鄉村|xiāngcūn|nông thôn|N|B2
想不到|xiǎngbudào|không ngờ tới||B2
想念|xiǎngniàn|tưởng niệm, nhớ nhung|Vst|B2
享受|xiǎngshòu|hưởng thụ, tận hưởng|Vst|B2
享有|xiǎngyǒu|được hưởng (quyền lợi…)|Vst|B2
響應|xiǎngyìng|hưởng ứng|V|B2
象|xiàng|con voi|N|B2
相片/相片兒|xiàngpiàn/xiàngpi|ảnh chụp (người)|N|B2
相親|xiàngqīn|-sep gặp mặt, xem mắt|V|B2
巷(子)|xiàng(zi)|ngõ, hẻm|N|B2
向來|xiànglái|từ trước đến nay|Adv|B2
項目|xiàngmù|hạng mục|N|B2
消|xiāo|biến mất|Vp|B2
消除|xiāochú|trừ khử|V|B2
消費|xiāofèi|chi phí|N|B2
消費|xiāofèi|tiêu dùng|V|B2
消化|xiāohuà|tiêu hóa|V|B2
消極|xiāojí|tiêu cực|Vs|B2
消滅|xiāomiè|tiêu diệt|Vpt|B2
消失|xiāoshī|tan biến|Vp|B2
消/宵夜|xiāoyè|đồ ăn khuya|N|B2
銷路|xiāolù|nguồn tiêu thụ|N|B2
銷售|xiāoshòu|tiêu thụ|V|B2
小便|xiǎobiàn|tiểu tiện|Vi|B2
小費|xiǎofèi|tiền boa, tiền tip|N|B2
小麥|xiǎomài|lúa mì|N|B2
小氣|xiǎoqì|keo kiệt|Vs|B2
小腿|xiǎotuǐ|cẳng chân|N|B2
小子|xiǎozi|người trẻ tuổi|N|B2
曉得|xiǎode|biết, hiểu|Vst|B2
校車|xiàochē|xe buýt đưa đón của trường|N|B2
校友|xiàoyǒu|bạn cùng trường|N|B2
效率|xiàolǜ|hiệu suất|N|B2
笑容|xiàoróng|nụ cười|N|B2
歇|xiē|nghỉ ngơi|Vi|B2
斜|xié|nghiêng|Vs|B2
血管|xiěguǎn|mạch máu|N|B2
血型|xiěxíng|nhóm máu|N|B2
血液|xiěyè|thành phần chính|N|B2
心靈|xīnlíng|thông minh, sáng dạ|N|B2
心目中|xīnmùzhōng|trong tâm trí|N|B2
心聲|xīnshēng|tiếng lòng|N|B2
心跳|xīntiào|nhịp tim đập|N|B2
心臟|xīnzàng|trái tim|N|B2
新郎|xīnláng|chú rể|N|B2
新娘|xīnniáng|cô dâu|N|B2
新式|xīnshì|-attr kiểu mới|Vs|B2
新興|xīnxīng|-attr mới mẻ|Vs|B2
薪水|xīnshuǐ|tiền lương|N|B2
信號|xìnhào|tin hiệu|N|B2
信任|xìnrèn|tín nhiệm|Vst|B2
信仰|xìnyǎng|tín ngưỡng|N|B2
信仰|xìnyǎng|tin tưởng và ngưỡng mộ|Vst|B2
信用|xìnyòng|chữ tín, tín dụng|N|B2
星光|xīngguāng|ánh sao|N|B2
行程|xíngchéng|lộ trình|N|B2
行動|xíngdòng|hành vi, cử động|Vi|B2
行人|xíngrén|người đi đường|N|B2
形成|xíngchéng|hình thành|Vpt|B2
形式|xíngshì|hình thức|N|B2
形象|xíngxiàng|hình tượng|N|B2
形狀|xíngzhuàng|hình dạng|N|B2
性質|xìngzhí|tính chất|N|B2
雄偉|xióngwěi|hùng vĩ, to lớn|Vs|B2
休假|xiūjià|-sep nghỉ phép|V|B2
休閒|xiūxián|nhàn rỗi|Vi|B2
修正|xiūzhèng|đính chính|V|B2
需|xū|nhu cầu, cần|Vst|B2
須知|xūzhī|điều cần biết|N|B2
許|xǔ|tán dương, ca ngợi|V|B2
許願|xǔyuàn|-sep cầu nguyện|V|B2
宣布/佈|xuānbù|tuyên bố|V|B2
宣傳|xuānchuán|tuyên truyền|N|B2
懸|xuán|treo, công bố|V|B2
選手|xuǎnshǒu|tuyển thủ|N|B2
靴(子)|xuē(zi)|chiếc ủng|N|B2
學會|xuéhuì|học cách|N|B2
學歷|xuélì|học vấn|N|B2
學術|xuéshù|học thuật|N|B2
學位|xuéwèi|học vị|N|B2
學業|xuéyè|bài tập|N|B2
學者|xuézhě|học giả|N|B2
雪花|xuěhuā|hoa tuyết|N|B2
削減|xuèjiǎn|cắt giảm|V|B2
尋|xún|tìm kiếm|V|B2
循環|xúnhuán|tuần hoàn|Vi|B2
迅速|xùnsù|cấp tốc|Vs|B2
壓|yā|ép, đè|V|B2
壓力|yālì|áp lực|N|B2
壓迫|yāpò|áp bức|V|B2
牙膏|yágāo|kem đánh răng|N|B2
煙/菸|yān|khói|N|B2
沿|yán|xuôi theo|Prep|B2
嚴|yán|chặt chẽ, nghiêm|Vs|B2
嚴格|yángé|nghiêm khắc|Vs|B2
嚴肅|yánsù|nghiêm túc|Vs|B2
鹽巴|yánbā|muối ăn|N|B2
延長|yáncháng|kéo dài|V|B2
癌症|áizhèng|ung thư|N|B2
演唱|yǎnchàng|biểu diễn|V|B2
演奏|yǎnzòu|biểu diễn (nhạc cụ)|V|B2
掩蓋|yǎngài|che đậy|V|B2
宴會|yànhuì|tiệc|N|B2
厭惡|yànwù|chán ghét|Vs|B2
癢|yǎng|ngứa|Vs|B2
氧氣|yǎngqì|khí ô-xy|N|B2
樣品|yàngpǐn|hàng mẫu|N|B2
喲|yāo|nhé, nha|Ptc|B2
腰|yāo|lưng, eo|N|B2
搖|yáo|đong đưa, rung|V|B2
搖擺|yáobǎi|lúc lắc, lắc lư|V|B2
搖頭|yáotóu|-sep lắc đầu|V|B2
要不|yàobù|nếu không thì...|Conj|B2
要好|yàohǎo|thân nhau, có quan hệ tốt|Vs|B2
要命|yàomìng|chết người, nguy hiểm|Vs|B2
藥方|yàofāng|phương thuốc|N|B2
藥水|yàoshuǐ|thuốc nước|N|B2
藥物|yàowù|thuốc|N|B2
野|yě|ngoài đồng,vườn|Vs|B2
野獸|yěshòu|dã thú, muông thú|N|B2
野心|yěxīn|dã tâm|N|B2
夜景|yèjǐng|cảnh đêm|N|B2
夜晚|yèwǎn|ban đêm|N|B2
業務|yèwù|nghiệp vụ|N|B2
業餘|yèyú|-attr rảnh rỗi|Vs|B2
葉子|yèzi|lá cây|N|B2
一一|yīyī|từng cái một|Adv|B2
衣裳|yīshang|quần áo|N|B2
依據|yījù|căn cứ theo|N|B2
依然|yīrán|như cũ|Adv|B2
醫|yī|y khoa|V|B2
醫師|yīshī|y sĩ, thầy thuốc|N|B2
醫學|yīxué|y học|N|B2
一帶|yīdài|vùng, khu vực|N|B2
一旦|yīdàn|một ngày, một khi|Conj|B2
一大早|yīdàzǎo|sáng sớm|N|B2
一面|yīmiàn|một mặt|Adv|B2
一再|yīzài|nhiều lần, năm lần bảy lượt|Adv|B2
一致|yīzhì|nhất trí|Vs|B2
移|yí|di chuyển|V|B2
移動|yídòng|di động|V|B2
移民|yímín|di dân|Vp|B2
疑問|yíwèn|nghi vấn, nghi ngờ|N|B2
儀器|yíqì|máy móc|N|B2
儀式|yíshì|nghi thức|N|B2
乙|yǐ|ất|N|B2
已婚|yǐhūn|đã có gia đình, đã kết hôn|Vs|B2
以|yǐ|dùng, lấy, theo|Conj|B2
以便|yǐbiàn|để, nhằm|Conj|B2
以及|yǐjí|và, cùng|Conj|B2
以往|yǐwǎng|ngày xưa|N|B2
一般而言|yībānéryán|nói chung|Conj|B2
一口氣|yīkǒuqì|một hơi thở|Adv|B2
一旁|yīpáng|bên cạnh|N|B2
一齊|yīqí|đồng thời|Adv|B2
一天到晚|yītiāndàowǎn|suốt ngày, từ sáng đến tối|Adv|B2
易|yì|dễ dàng|Vs|B2
意識|yìshì|ý thức|N|B2
意外|yìwài|bất ngờ, không ngờ|Vs|B2
意願|yìyuàn|nguyện vọng|N|B2
意志|yìzhì|ý chí|N|B2
億|yì|một trăm triệu|N|B2
義務|yìwù|nghĩa vụ|N|B2
議會|yìhuì|nghị viện, quốc hội|N|B2
因而|yīnér|cho nên, bởi thế|Conj|B2
因素|yīnsù|nhân tố|N|B2
銀|yín|bạc|N|B2
引發|yǐnfā|gợi ra|V|B2
飲|yǐn|uống|V|B2
飲食|yǐnshí|đồ ăn thức uống|N|B2
印|yìn|con dấu|V|B2
印刷|yìnshuā|in ấn|Vi|B2
印象|yìnxiàng|ấn tượng|N|B2
印章|yìnzhāng|con dấu|N|B2
應當|yīngdāng|nên, cần phải|Adv|B2
嬰兒|yīngér|trẻ sơ sinh|N|B2
英雄|yīngxióng|anh hùng|N|B2
贏得|yíngdé|giành được|Vpt|B2
迎接|yíngjiē|nghênh đón|V|B2
營養|yíngyǎng|dinh dưỡng|Vs|B2
營業|yíngyè|kinh doanh|Vi|B2
影本|yǐngběn|bản sao|N|B2
影印|yǐngyìn|in chụp, photocopy|V|B2
影子|yǐngzi|bóng dáng|N|B2
硬|yìng|cứng rắn|Vs|B2
應付|yìngfù|ứng phó|V|B2
應邀|yìngyāo|nhận lời mời|Vi|B2
應用|yìngyòng|ứng dụng|V|B2
擁抱|yǒngbào|ôm|V|B2
擁護|yǒnghù|ủng hộ, tán thành|V|B2
擁擠|yǒngjǐ|chen chúc|Vs|B2
勇氣|yǒngqì|dũng khí|N|B2
用不著|yòngbùzháo|không cần|Adv|B2
用處|yòngchu|tác dụng|N|B2
用得著|yòngdezháo|có thể sử dụng|Vs|B2
用具|yòngjù|dụng cụ|N|B2
用力|yònglì|-sep cố sức, gắng sức|Vs|B2
用心|yòngxīn|-sep chăm chỉ, để tâm|Vs|B2
憂鬱|yōuyù|buồn thương|Vs|B2
優惠|yōuhuì|ưu đãi|Vs|B2
優良|yōuliáng|tốt đẹp|Vs|B2
優美|yōuměi|tươi đẹp|Vs|B2
優越|yōuyuè|ưu việt|Vs|B2
由|yóu|nguyên do, do|Prep|B2
油|yóu|dầu, mỡ|Vs|B2
油膩|yóunì|chứa nhiều dầu mỡ, ngấy|Vs|B2
游|yóu|bơi lội|Vi|B2
郵差|yóuchāi|người đưa thư|N|B2
郵件|yóujiàn|bưu kiện|N|B2
遊戲|yóuxì|trò chơi|N|B2
遊戲|yóuxì|chơi trò chơi|Vi|B2
遊行|yóuxíng|du hành|Vi|B2
猶豫|yóuyù|do dự|Vs|B2
友好|yǒuhǎo|hữu nghị|Vs|B2
有關|yǒuguān|có liên quan|Prep|B2
有關|yǒuguān|đề cập đến|Vs|B2
有力|yǒulì|mạnh mẽ|Vs|B2
有利|yǒulì|có lợi, có ích|Vs|B2
有些|yǒuxiē|có một số|Adv|B2
有些|yǒuxiē|có phần|Det|B2
娛樂|yúlè|tiêu khiển, giải trí|N|B2
語調|yǔdiào|ngữ điệu|N|B2
語氣|yǔqì|ngữ khí, giọng điệu|N|B2
語音|yǔyīn|ngữ âm|N|B2
與其|yǔqí|so với, thay vì|Conj|B2
遇|yù|gặp mặt|Vst|B2
遇見|yùjiàn|gặp phải|Vpt|B2
預報|yùbào|dự báo|N|B2
預定|yùdìng|dự định|V|B2
預訂|yùdìng|đặt trước|V|B2
預計|yùjì|dự tính|Vaux|B2
預算|yùsuàn|dự toán|N|B2
預先|yùxiān|trước, sẵn|Adv|B2
冤枉|yuānwǎng|bị oan, làm oan|Vs|B2
冤枉|yuānwǎng|xử oan|Vst|B2
元旦|yuándàn|nguyên đán|N|B2
原來|yuánlái|-attr lúc đầu|Vs|B2
原理|yuánlǐ|nguyên lý|N|B2
原料|yuánliào|nguyên liệu|N|B2
原始|yuánshǐ|đầu tiên, nguyên thủy|Vs|B2
原先|yuánxiān|trước kia,ban đầu|Adv|B2
原則|yuánzé|nguyên tắc|N|B2
原則上|yuánzéshàng|về nguyên tắc|Adv|B2
原子筆|yuánzǐbǐ|bút bi|N|B2
圓滿|yuánmǎn|toàn vẹn|Vs|B2
圓形|yuánxíng|tròn|N|B2
緣故|yuángù|duyên cớ, nguyên do|N|B2
遠大|yuǎndà|rộng lớn|Vs|B2
願|yuàn|mong ước|Vst|B2
月分|yuèfèn|tháng|N|B2
月光|yuèguāng|ánh trăng|N|B2
月球|yuèqiú|mặt trăng|N|B2
暈|yūn|choáng váng|Vs|B2
允許|yǔnxǔ|cho phép|V|B2
運輸|yùnshū|vận tải, vận chuyển|V|B2
運送|yùnsòng|chuyên chở|V|B2
運用|yùnyòng|vận dụng|V|B2
運轉|yùnzhuǎn|quay quanh, xoay quanh|Vi|B2
砸|zá|đánh, đập|V|B2
雜|zá|tạp, lặt vặt, linh tinh|Vs|B2
災害|zāihài|tai họa, thiên tai|N|B2
災難|zāinàn|tai nạn|N|B2
在乎|zàihū|lưu ý, để ý|Vst|B2
再度|zàidù|lại lần nữa|Adv|B2
再說|zàishuō|vả lại, hơn nữa|Conj|B2
載|zài|chở|V|B2
咱們|zánmen|chúng ta|N|B2
贊成|zànchéng|tán thành|Vst|B2
贊同|zàntóng|đồng ý|Vst|B2
讚美|zànměi|ca ngợi, ca tụng|V|B2
葬禮|zànglǐ|lễ tang|N|B2
糟|zāo|mục nát, hỏng việc|Vs|B2
糟糕|zāogāo|hỏng bét, kinh khủng|Vs|B2
遭到|zāodào|đau khổ|Vpt|B2
遭受|zāoshòu|gặp, bị, chịu|Vst|B2
遭遇|zāoyù|cảnh ngộ|N|B2
早晨|zǎochén|sáng sớm|N|B2
早點|zǎodiǎn|điểm tâm sáng|Adv|B2
早晚|zǎowǎn|sớm tối, sớm muộn thì...|Adv|B2
早已|zǎoyǐ|sớm đã, từ lâu đã|Adv|B2
造|zào|làm ra, tạo ra|V|B2
造句|zàojù|-sep đặt câu|V|B2
則|zé|phép tắc|Adv|B2
則|zé|điều, mục|M|B2
怎|zěn|sao, thế nào|Adv|B2
增長|zēngzhǎng|tăng trưởng|Vst|B2
贈品|zèngpǐn|quà tặng|N|B2
贈送|zèngsòng|biếu, tặng|V|B2
窄|zhǎi|hẹp, chật|Vs|B2
展出|zhǎnchū|hiển thị|V|B2
展開|zhǎnkāi|triển khai|V|B2
展覽|zhǎnlǎn|buổi triển lãm|N|B2
展覽|zhǎnlǎn|triển lãm|V|B2
展示|zhǎnshì|bày ra, phơi ra|V|B2
占/佔|zhàn|xem bói|V|B2
占/佔|zhàn|chiếm (%)|Vst|B2
占/佔有|zhànyǒu|chiếm giữ|Vst|B2
站住|zhànzhù|dừng lại, đứng lại|Vi|B2
戰場|zhànchǎng|chiến trường|N|B2
張|zhāng|mở ra, giương ra|V|B2
章|zhāng|chương, mục|M|B2
長|zhǎng|lớn, nhiều tuổi|Vst|B2
長輩|zhǎngbèi|đàn anh, trưởng bối|N|B2
漲|zhǎng|tăng lên cao|Vp|B2
漲價|zhǎngjià|-sep tăng giá|Vp|B2
掌聲|zhǎngshēng|tiếng vỗ tay|N|B2
帳單|zhàngdān|hóa đoan|N|B2
丈夫|zhàngfū|chồng|N|B2
招呼|zhāohu|chào hỏi|V|B2
招手|zhāoshǒu|-sep vẫy tay|V|B2
照|zhào|chiếu, soi, rọi|Adv|B2
照常|zhàocháng|như thường lệ|Vs|B2
召開|zhàokāi|mời dự họp|V|B2
折|zhé|bẻ gãy|V|B2
折合|zhéhé|tương đương|Vst|B2
折扣|zhékòu|chiếu khấu, giảm giá|N|B2
折磨|zhémó|dằn vặt, dày vò|V|B2
者|zhě|người, kẻ|N|B2
針|zhēn|cây kim|N|B2
針對|zhēnduì|nhằm vào, chĩa vào|Prep|B2
偵探|zhēntàn|trinh thám|N|B2
珍惜|zhēnxí|trân quý|Vst|B2
珍珠|zhēnzhū|trân châu|N|B2
真心|zhēnxīn|thật lòng, thành thật|N|B2
枕頭|zhěntou|cái gối|N|B2
陣|zhèn|trận|M|B2
陣子|zhènzi|trận, hồi, cơn|N|B2
震動|zhèndòng|rung động|Vi|B2
爭|zhēng|tranh giành|V|B2
爭論|zhēnglùn|tranh luận|V|B2
爭取|zhēngqǔ|tranh thủ|V|B2
睜|zhēng|mở to (mắt)|V|B2
徵求|zhēngqiú|trưng cầu|V|B2
正月|zhēngyuè|tháng giêng|N|B2
整|zhěng|trọn, cả, chẵn|N|B2
整|zhěng|chỉnh đốn|Vs|B2
整潔|zhěngjié|ngăn nắp, gọn gàng|Vs|B2
整數|zhěngshù|số nguyên|N|B2
正|zhèng|tháng 1|Vs|B2
正方形|zhèngfāngxíng|hình vuông|N|B2
正規|zhèngguī|-attr chính quy|Vs|B2
正好|zhènghǎo|vừa vặn, đúng lúc|Adv|B2
正好|zhènghǎo|được dịp|Vs|B2
正經|zhèngjing|đoan trang|Vs|B2
正面|zhèngmiàn|mặt chính|N|B2
政策|zhèngcè|chính sách|N|B2
政黨|zhèngdǎng|chính đảng|N|B2
政府|zhèngfǔ|chính phủ|N|B2
證件|zhèngjiàn|giấy chứng nhận|N|B2
證據|zhèngjù|chứng cứ|N|B2
證明|zhèngmíng|chứng nhận|N|B2
證實|zhèngshí|chứng thực|Vpt|B2
症狀|zhèngzhuàng|bệnh trạng|N|B2
之|zhī|hướng, tới|N|B2
之|zhī|này, đó|Ptc|B2
之間|zhījiān|giữa|N|B2
之類|zhīlèi|vân vân|N|B2
支|zhī|chống, đỡ|M|B2
支持|zhīchí|ủng hộ|V|B2
支出|zhīchū|chi tiêu|Vpt|B2
支票|zhīpiào|chi phiếu|N|B2
支援|zhīyuán|chi viện|V|B2
直|zhí|thẳng đứng|Adv|B2
直接|zhíjiē|trực tiếp|Vs|B2
直線|zhíxiàn|đường thẳng, trực tiếp|Adv|B2
值|zhí|giá trị|Vst|B2
擲|zhí|ném, quang|V|B2
職位|zhíwèi|chức vị|N|B2
執行|zhíxíng|chấp hành, thực thi|V|B2
止|zhǐ|dừng lại|Vs|B2
只|zhǐ|chỉ có|M|B2
只是|zhǐshì|chỉ là, chẳng qua là, nhưng|Adv|B2
指|zhǐ|chỉ điểm, chỉ ra|V|B2
指出|zhǐchū|chỉ ra|Vpt|B2
指導|zhǐdǎo|chỉ đạo, hướng dẫn|V|B2
指定|zhǐdìng|chỉ định|V|B2
指示|zhǐshì|chỉ thị|N|B2
指責|zhǐzé|chỉ trích|V|B2
紙張|zhǐzhāng|giấy|N|B2
治|zhì|sắp đặt, sửa sang|V|B2
至|zhì|đến nỗi|V|B2
制定|zhìdìng|lập ra, đặt ra quy định|V|B2
制止|zhìzhǐ|ngăn cấm|V|B2
志氣|zhìqì|chí khí|N|B2
志願|zhìyuàn|chí hướng và nguyện vọng|N|B2
秩序|zhìxù|trật tự|N|B2
製造|zhìzào|chế tạo|V|B2
製作|zhìzuò|chế ra, làm ra|V|B2
中|zhōng|-attr trúng, bị, mắc phải|Vs|B2
中級|zhōngjí|trung cấp|N|B2
中年|zhōngnián|trung niên|N|B2
中途|zhōngtú|nửa đường, giữa đường|N|B2
中央|zhōngyāng|trung ương|N|B2
中藥|zhōngyào|thuốc Đông|N|B2
腫|zhǒng|sưng, phù|Vs|B2
種類|zhǒnglèi|chủng loại|N|B2
種子|zhǒngzǐ|hạt giống|N|B2
種族|zhǒngzú|chủng tộc|N|B2
中|zhòng|trúng|Vp|B2
中毒|zhòngdú|-sep trúng độc|Vp|B2
重|zhòng|nặng|Vst|B2
重大|zhòngdà|trọng đại, to lớn|Vs|B2
重量|zhòngliàng|trong lượng|N|B2
重傷|zhòngshāng|trọng thương|N|B2
重傷|zhòngshāng|bị thương nặng|Vs|B2
重心|zhòngxīn|trọng tâm|N|B2
州|zhōu|châu|N|B2
周/週|zhōu|tuần|M|B2
周到|zhōudào|chu đáo|Vs|B2
粥|zhōu|cháo|N|B2
竹(子)|zhú(zi)|cây trúc, tre|N|B2
逐漸|zhújiàn|dần dần|Adv|B2
主辦|zhǔbàn|người chịu trách nhiệm|V|B2
主持|zhǔchí|chủ trì|V|B2
主觀|zhǔguān|chủ quan|Vs|B2
主角|zhǔjiǎo/jué|vai chính, nhân vật chính|N|B2
主席|zhǔxí|chủ tịch|N|B2
主張|zhǔzhāng|chủ trương|N|B2
主張|zhǔzhāng|cho rằng|V|B2
祝賀|zhùhè|chúc mừng|V|B2
住院|zhùyuàn|-sep nằm viện|V|B2
住宅|zhùzhái|nơi ở, chỗ ở|N|B2
住址|zhùzhǐ|chỗ ở|N|B2
注射|zhùshè|tiêm, chích|V|B2
註冊|zhùcè|-sep đăng ký|V|B2
專家|zhuānjiā|chuyên gia|N|B2
專利|zhuānlì|độc quyền|N|B2
專門|zhuānmén|chuyên biệt|Vs|B2
專人|zhuānrén|chuyên gia|N|B2
專業|zhuānyè|chuyên nghiệp|N|B2
轉|zhuǎn|chuyển|V|B2
轉變|zhuǎnbiàn|chuyển biến|Vpt|B2
轉播|zhuǎnbò|tiếp sóng (phát thanh)|V|B2
轉達|zhuǎndá|truyền đạt|V|B2
轉告|zhuǎngào|chuyển lời|V|B2
轉機|zhuǎnjī|có thể xoay chuyển|Vi|B2
轉身|zhuǎnshēn|quay người lại|Vi|B2
轉向|zhuǎnxiàng|mất phương hướng|V|B2
轉|zhuàn|chuyển|Vp|B2
賺|zhuàn|kiếm (tiền)|V|B2
裝飾|zhuāngshì|trang sức|V|B2
壯|zhuàng|cường tráng|Vs|B2
撞|zhuàng|đụng, va chạm|V|B2
狀況|zhuàngkuàng|tình trạng|N|B2
追|zhuī|truy đuổi|V|B2
准|zhǔn|cho phép|V|B2
准考證/証|zhǔnkǎozhèng|thẻ dự thi|N|B2
準|zhǔn|chuẩn, chuẩn mực|Vs|B2
準確|zhǔnquè|chính xác|Vs|B2
捉|zhuō|cầm, nắm, bắt|V|B2
桌|zhuō|bàn, mâm|M|B2
資本|zīběn|tư bản|N|B2
資格|zīgé|tư cách|N|B2
資金|zījīn|tiền vốn, quỹ|N|B2
資訊|zīxùn|thông tin|N|B2
紫|zǐ|-attr màu tím|Vs|B2
子女|zǐnǚ|con cái|N|B2
字幕|zìmù|phụ đề|N|B2
字母|zìmǔ|chữ cái|N|B2
自來水|zìláishuǐ|nước máy|N|B2
自然|zìrán|tự nhiên|N|B2
自私|zìsī|ích kỷ|Vs|B2
自我|zìwǒ|tự mình, bản thân|N|B2
自信|zìxìn|tự tin|Vs|B2
自願|zìyuàn|tự nguyện|Vs|B2
自主|zìzhǔ|tự chủ|Vs|B2
總|zǒng|tổng|Adv|B2
總共|zǒnggòng|tổng cộng|Adv|B2
總理|zǒnglǐ|thủ tướng|N|B2
綜合|zònghé|tổng hợp|V|B2
綜合|zònghé|-attr tổng hợp|Vs|B2
走道|zǒudào|vỉa hè, hành lang|N|B2
走私|zǒusī|buôn lậu|V|B2
足|zú|chân, giò|Vs|B2
足以|zúyǐ|đủ để|Vaux|B2
組|zǔ|tổ chức|V|B2
組織|zǔzhī|tổ chức, hệ thống|N|B2
阻礙|zǔài|ngăn cản|V|B2
阻止|zǔzhǐ|cản trở|V|B2
祖國|zǔguó|tổ quốc|N|B2
鑽|zuān|dùi, khoan|V|B2
鑽石|zuànshí|kim cương|N|B2
罪|zuì|tội|N|B2
最少|zuìshǎo|ít nhất, tối thiểu|Adv|B2
遵守|zūnshǒu|tuân thủ|Vst|B2
尊重|zūnzhòng|tôn trọng|Vst|B2
左右|zuǒyòu|trái và phải, hai bên|N|B2
左右|zuǒyòu|khoảng|V|B2
作|zuò|làm, sáng tác|V|B2
作家|zuòjiā|tác giả|N|B2
作為|zuòwéi|hành động|Vst|B2
作文|zuòwén|bài văn|N|B2
作文|zuòwén|làm văn, viết văn|Vi|B2
作用|zuòyòng|ảnh hưởng, tác dụng|N|B2
做|zuò|làm ra, chế tạo ra|V|B2
做客|zuòkè|làm khách|Vi|B2
老板娘|lǎobǎnniáng|bà chủ|N|B2
`;
