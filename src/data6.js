
/* ============ VẤN ĐÁP (hỏi ngẫu nhiên, trả lời bằng giọng nói) ============
 mỗi dòng: bài | câu hỏi | pinyin | nghĩa | câu trả lời mẫu | pinyin | nghĩa | ý cần có
 "ý cần có": các nhóm cách nhau bằng ;  trong mỗi nhóm các từ thay thế cách nhau bằng /
 (câu trả lời đúng khi nói được ít nhất một từ trong mỗi nhóm) */
const QA_DATA=`1|你叫什麼名字？|Nǐ jiào shénme míngzi?|Bạn tên là gì?|我叫小明。|Wǒ jiào Xiǎo Míng.|Tôi tên là Tiểu Minh.|叫/姓
1|你是哪國人？|Nǐ shì nǎ guó rén?|Bạn là người nước nào?|我是越南人。|Wǒ shì Yuènán rén.|Tôi là người Việt Nam.|是;人
1|你喜歡喝茶還是咖啡？|Nǐ xǐhuān hē chá háishi kāfēi?|Bạn thích uống trà hay cà phê?|我喜歡喝茶。|Wǒ xǐhuān hē chá.|Tôi thích uống trà.|喜歡;茶/咖啡
1|你是學生嗎？|Nǐ shì xuésheng ma?|Bạn là học sinh à?|是的，我是學生。|Shì de, wǒ shì xuésheng.|Vâng, tôi là học sinh.|是/不是;學生/老師
2|你家有幾個人？|Nǐ jiā yǒu jǐ ge rén?|Nhà bạn có mấy người?|我家有四個人。|Wǒ jiā yǒu sì ge rén.|Nhà tôi có bốn người.|有;個
2|你有兄弟姐妹嗎？|Nǐ yǒu xiōngdì jiěmèi ma?|Bạn có anh chị em không?|我有一個哥哥和一個妹妹。|Wǒ yǒu yí ge gēge hé yí ge mèimei.|Tôi có một anh trai và một em gái.|有/沒有;哥哥/姐姐/弟弟/妹妹/兄弟姐妹
2|你爸爸是老師嗎？|Nǐ bàba shì lǎoshī ma?|Bố bạn là giáo viên à?|我爸爸是老師。|Wǒ bàba shì lǎoshī.|Bố tôi là giáo viên.|爸爸;是
2|你媽媽喜歡做什麼？|Nǐ māma xǐhuān zuò shénme?|Mẹ bạn thích làm gì?|我媽媽喜歡看書。|Wǒ māma xǐhuān kàn shū.|Mẹ tôi thích đọc sách.|媽媽;喜歡
3|週末你常做什麼？|Zhōumò nǐ cháng zuò shénme?|Cuối tuần bạn thường làm gì?|週末我常去打籃球。|Zhōumò wǒ cháng qù dǎ lánqiú.|Cuối tuần tôi thường đi chơi bóng rổ.|常;打/踢/看/游泳/聽/吃
3|你喜歡運動嗎？|Nǐ xǐhuān yùndòng ma?|Bạn có thích thể thao không?|我喜歡運動，我常游泳。|Wǒ xǐhuān yùndòng, wǒ cháng yóuyǒng.|Tôi thích thể thao, tôi hay bơi.|喜歡
3|今天晚上你想看電影還是看書？|Jīntiān wǎnshang nǐ xiǎng kàn diànyǐng háishi kàn shū?|Tối nay bạn muốn xem phim hay đọc sách?|我想看電影。|Wǒ xiǎng kàn diànyǐng.|Tôi muốn xem phim.|想;電影/書
3|你覺得打網球好玩嗎？|Nǐ juéde dǎ wǎngqiú hǎowán ma?|Bạn thấy chơi quần vợt vui không?|我覺得很好玩。|Wǒ juéde hěn hǎowán.|Tôi thấy rất vui.|覺得;好玩
4|你想喝什麼？|Nǐ xiǎng hē shénme?|Bạn muốn uống gì?|我要一杯咖啡。|Wǒ yào yì bēi kāfēi.|Tôi muốn một ly cà phê.|要/想;杯
4|你的手機貴不貴？|Nǐ de shǒujī guì bu guì?|Điện thoại của bạn có đắt không?|我的手機不貴。|Wǒ de shǒujī bú guì.|Điện thoại của tôi không đắt.|手機;貴
4|你要內用還是外帶？|Nǐ yào nèiyòng háishi wàidài?|Bạn dùng tại chỗ hay mang đi?|我要外帶。|Wǒ yào wàidài.|Tôi mang đi.|外帶/內用
4|你喜歡熱的還是冰的？|Nǐ xǐhuān rè de háishi bīng de?|Bạn thích nóng hay đá?|我喜歡冰的。|Wǒ xǐhuān bīng de.|Tôi thích đá.|熱/冰
5|你會做飯嗎？|Nǐ huì zuò fàn ma?|Bạn biết nấu cơm không?|我會做飯，可是做得不太好。|Wǒ huì zuò fàn, kěshì zuò de bú tài hǎo.|Tôi biết nấu cơm nhưng nấu không giỏi lắm.|會/不會;做
5|你喜歡吃辣的嗎？|Nǐ xǐhuān chī là de ma?|Bạn có thích ăn cay không?|我不太喜歡吃辣的。|Wǒ bú tài xǐhuān chī là de.|Tôi không thích ăn cay lắm.|辣
5|你覺得牛肉麵好吃嗎？|Nǐ juéde niúròu miàn hǎochī ma?|Bạn thấy mì bò ngon không?|我覺得牛肉麵很好吃。|Wǒ juéde niúròu miàn hěn hǎochī.|Tôi thấy mì bò rất ngon.|牛肉麵;好吃
5|你常在哪裡吃晚飯？|Nǐ cháng zài nǎlǐ chī wǎnfàn?|Bạn thường ăn tối ở đâu?|我常在家吃晚飯。|Wǒ cháng zài jiā chī wǎnfàn.|Tôi thường ăn tối ở nhà.|在;吃/飯
6|你的學校在哪裡？|Nǐ de xuéxiào zài nǎlǐ?|Trường của bạn ở đâu?|我的學校在山上。|Wǒ de xuéxiào zài shānshàng.|Trường của tôi ở trên núi.|在
6|你家附近有什麼？|Nǐ jiā fùjìn yǒu shénme?|Gần nhà bạn có gì?|我家附近有一家咖啡店。|Wǒ jiā fùjìn yǒu yì jiā kāfēidiàn.|Gần nhà tôi có một quán cà phê.|有;附近
6|你家離學校遠不遠？|Nǐ jiā lí xuéxiào yuǎn bu yuǎn?|Nhà bạn có xa trường không?|我家離學校很近。|Wǒ jiā lí xuéxiào hěn jìn.|Nhà tôi cách trường rất gần.|離;遠/近
6|圖書館在哪裡？|Túshūguǎn zài nǎlǐ?|Thư viện ở đâu?|圖書館在教室後面。|Túshūguǎn zài jiàoshì hòumiàn.|Thư viện ở phía sau lớp học.|在;前面/後面/旁邊/上面/下面/裡面/外面
7|現在幾點？|Xiànzài jǐ diǎn?|Bây giờ là mấy giờ?|現在三點半。|Xiànzài sān diǎn bàn.|Bây giờ là ba giờ rưỡi.|點
7|你每天幾點起床？|Nǐ měitiān jǐ diǎn qǐ chuáng?|Mỗi ngày bạn mấy giờ thức dậy?|我每天七點起床。|Wǒ měitiān qī diǎn qǐ chuáng.|Mỗi ngày tôi bảy giờ thức dậy.|點;起床
7|你幾點上課？|Nǐ jǐ diǎn shàng kè?|Bạn mấy giờ vào học?|我八點上課。|Wǒ bā diǎn shàng kè.|Tôi tám giờ vào học.|點;上課
7|你什麼時候有空？|Nǐ shénme shíhou yǒu kòng?|Khi nào bạn rảnh?|我星期六有空。|Wǒ xīngqíliù yǒu kòng.|Thứ Bảy tôi rảnh.|有空;星期/週末/下午/晚上/明天/今天
8|你怎麼去學校？|Nǐ zěnme qù xuéxiào?|Bạn đến trường bằng gì?|我坐公車去學校。|Wǒ zuò gōngchē qù xuéxiào.|Tôi đi xe buýt đến trường.|坐/騎/走;學校
8|你喜歡坐火車還是坐高鐵？|Nǐ xǐhuān zuò huǒchē háishi zuò gāotiě?|Bạn thích đi tàu hỏa hay tàu cao tốc?|我喜歡坐火車，因為比較便宜。|Wǒ xǐhuān zuò huǒchē, yīnwèi bǐjiào piányí.|Tôi thích đi tàu hỏa vì rẻ hơn.|坐;火車/高鐵
8|高鐵比火車快嗎？|Gāotiě bǐ huǒchē kuài ma?|Tàu cao tốc nhanh hơn tàu hỏa phải không?|高鐵比火車快。|Gāotiě bǐ huǒchē kuài.|Tàu cao tốc nhanh hơn tàu hỏa.|比;快/貴/便宜/慢
8|你想跟誰去玩？|Nǐ xiǎng gēn shéi qù wán?|Bạn muốn đi chơi với ai?|我想跟朋友去玩。|Wǒ xiǎng gēn péngyou qù wán.|Tôi muốn đi chơi với bạn bè.|跟;去/玩
9|放假的時候你打算做什麼？|Fàng jià de shíhou nǐ dǎsuàn zuò shénme?|Lúc nghỉ lễ bạn định làm gì?|我打算去旅行。|Wǒ dǎsuàn qù lǚxíng.|Tôi định đi du lịch.|打算
9|你想去哪裡玩？|Nǐ xiǎng qù nǎlǐ wán?|Bạn muốn đi đâu chơi?|我想去花蓮玩。|Wǒ xiǎng qù Huālián wán.|Tôi muốn đi Hoa Liên chơi.|去;玩
9|你想學中文學多久？|Nǐ xiǎng xué Zhōngwén xué duōjiǔ?|Bạn muốn học tiếng Trung bao lâu?|我想學一年。|Wǒ xiǎng xué yì nián.|Tôi muốn học một năm.|學;年/個月/天/星期
9|要是你有空，你會做什麼？|Yàoshi nǐ yǒu kòng, nǐ huì zuò shénme?|Nếu rảnh bạn sẽ làm gì?|要是我有空，我就看電影。|Yàoshi wǒ yǒu kòng, wǒ jiù kàn diànyǐng.|Nếu rảnh, tôi sẽ xem phim.|要是;就
10|你喜歡吃什麼水果？|Nǐ xǐhuān chī shénme shuǐguǒ?|Bạn thích ăn trái cây gì?|我喜歡吃西瓜。|Wǒ xǐhuān chī xīguā.|Tôi thích ăn dưa hấu.|喜歡;西瓜/芒果/香蕉/蘋果/葡萄/水果
10|你以前喜歡吃水果嗎？|Nǐ yǐqián xǐhuān chī shuǐguǒ ma?|Trước đây bạn có thích ăn trái cây không?|我以前不喜歡，現在喜歡了。|Wǒ yǐqián bù xǐhuān, xiànzài xǐhuān le.|Trước đây tôi không thích, bây giờ thích rồi.|以前;現在/了
10|你今天穿什麼顏色的衣服？|Nǐ jīntiān chuān shénme yánsè de yīfu?|Hôm nay bạn mặc quần áo màu gì?|我今天穿藍色的衣服。|Wǒ jīntiān chuān lánsè de yīfu.|Hôm nay tôi mặc quần áo màu xanh dương.|穿;色
10|臺灣的水果怎麼樣？|Táiwān de shuǐguǒ zěnmeyàng?|Trái cây Đài Loan thế nào?|臺灣的水果很甜，很好吃。|Táiwān de shuǐguǒ hěn tián, hěn hǎochī.|Trái cây Đài Loan rất ngọt, rất ngon.|水果;甜/好吃/香
11|你住在哪裡？|Nǐ zhù zài nǎlǐ?|Bạn sống ở đâu?|我住在學校附近。|Wǒ zhù zài xuéxiào fùjìn.|Tôi sống gần trường.|住;在
11|你的房間大不大？|Nǐ de fángjiān dà bu dà?|Phòng của bạn có lớn không?|我的房間不大，可是很乾淨。|Wǒ de fángjiān bú dà, kěshì hěn gānjìng.|Phòng của tôi không lớn nhưng rất sạch.|房間;大
11|你家離捷運站遠不遠？|Nǐ jiā lí jiéyùnzhàn yuǎn bu yuǎn?|Nhà bạn có xa ga tàu điện ngầm không?|我家離捷運站很近。|Wǒ jiā lí jiéyùnzhàn hěn jìn.|Nhà tôi cách ga tàu điện ngầm rất gần.|離;近/遠
11|房租一個月多少錢？|Fángzū yí ge yuè duōshǎo qián?|Tiền thuê nhà một tháng bao nhiêu?|一個月八千塊。|Yí ge yuè bā qiān kuài.|Một tháng tám nghìn tệ.|月;塊
12|你學了多久的中文？|Nǐ xué le duōjiǔ de Zhōngwén?|Bạn đã học tiếng Trung bao lâu rồi?|我學了一年的中文。|Wǒ xué le yì nián de Zhōngwén.|Tôi đã học tiếng Trung một năm.|學;年/個月/天/星期
12|你從什麼時候開始學中文？|Nǐ cóng shénme shíhou kāishǐ xué Zhōngwén?|Bạn bắt đầu học tiếng Trung từ khi nào?|我從去年開始學中文。|Wǒ cóng qùnián kāishǐ xué Zhōngwén.|Tôi bắt đầu học tiếng Trung từ năm ngoái.|從;開始
12|你聽得懂老師說的話嗎？|Nǐ tīng de dǒng lǎoshī shuō de huà ma?|Bạn nghe hiểu lời thầy giáo nói không?|我聽得懂。|Wǒ tīng de dǒng.|Tôi nghe hiểu.|聽/看;懂
12|你覺得漢字難不難？|Nǐ juéde Hànzì nán bu nán?|Bạn thấy chữ Hán có khó không?|我覺得漢字有一點難。|Wǒ juéde Hànzì yǒu yìdiǎn nán.|Tôi thấy chữ Hán hơi khó.|覺得;難/容易
13|你的生日是幾月幾號？|Nǐ de shēngrì shì jǐ yuè jǐ hào?|Sinh nhật của bạn là ngày mấy tháng mấy?|我的生日是五月二十號。|Wǒ de shēngrì shì wǔ yuè èrshí hào.|Sinh nhật tôi là ngày 20 tháng 5.|月;號
13|你今年幾歲？|Nǐ jīnnián jǐ suì?|Năm nay bạn mấy tuổi?|我今年二十五歲。|Wǒ jīnnián èrshíwǔ suì.|Năm nay tôi hai mươi lăm tuổi.|今年;歲
13|你想送朋友什麼生日禮物？|Nǐ xiǎng sòng péngyou shénme shēngrì lǐwù?|Bạn muốn tặng bạn quà sinh nhật gì?|我想送他一個蛋糕。|Wǒ xiǎng sòng tā yí ge dàngāo.|Tôi muốn tặng bạn ấy một chiếc bánh kem.|送;禮物/蛋糕/花/卡片
13|你怎麼過生日？|Nǐ zěnme guò shēngrì?|Bạn tổ chức sinh nhật thế nào?|我和朋友一起吃蛋糕。|Wǒ hé péngyou yìqǐ chī dàngāo.|Tôi cùng bạn bè ăn bánh kem.|一起/和;吃/玩/唱
14|今天天氣怎麼樣？|Jīntiān tiānqì zěnmeyàng?|Hôm nay thời tiết thế nào?|今天很冷。|Jīntiān hěn lěng.|Hôm nay rất lạnh.|冷/熱/涼/暖和/雨/晴/陰
14|你最喜歡春天、夏天、秋天還是冬天？|Nǐ zuì xǐhuān chūntiān, xiàtiān, qiūtiān háishi dōngtiān?|Bạn thích mùa xuân, hạ, thu hay đông nhất?|我最喜歡秋天。|Wǒ zuì xǐhuān qiūtiān.|Tôi thích mùa thu nhất.|喜歡;春天/夏天/秋天/冬天
14|明天會下雨嗎？|Míngtiān huì xià yǔ ma?|Ngày mai trời có mưa không?|明天會下雨。|Míngtiān huì xià yǔ.|Ngày mai trời sẽ mưa.|會;雨
14|天氣冷的時候，你穿什麼？|Tiānqì lěng de shíhou, nǐ chuān shénme?|Khi trời lạnh, bạn mặc gì?|我穿外套。|Wǒ chuān wàitào.|Tôi mặc áo khoác.|穿
15|你哪裡不舒服？|Nǐ nǎlǐ bù shūfu?|Bạn khó chịu ở đâu?|我頭痛，也有一點發燒。|Wǒ tóu tòng, yě yǒu yìdiǎn fā shāo.|Tôi đau đầu, còn hơi sốt.|痛/發燒/咳嗽/不舒服
15|感冒了，應該做什麼？|Gǎnmào le, yīnggāi zuò shénme?|Bị cảm thì nên làm gì?|我應該多休息，多喝水。|Wǒ yīnggāi duō xiūxí, duō hē shuǐ.|Tôi nên nghỉ ngơi nhiều, uống nhiều nước.|應該;休息/喝水/吃藥/看醫生
15|你常運動嗎？|Nǐ cháng yùndòng ma?|Bạn có thường vận động không?|我常運動。|Wǒ cháng yùndòng.|Tôi thường vận động.|運動
15|你每天幾點睡覺？|Nǐ měitiān jǐ diǎn shuì jiào?|Mỗi ngày bạn mấy giờ đi ngủ?|我每天十一點睡覺。|Wǒ měitiān shíyī diǎn shuì jiào.|Mỗi ngày tôi mười một giờ đi ngủ.|睡覺;點`;
