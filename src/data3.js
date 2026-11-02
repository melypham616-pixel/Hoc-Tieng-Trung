
/* ============ HỘI THOẠI THEO BÀI ============
 l: "Tên người|Hán|pinyin|tiếng Việt" (người nói đầu tiên = A, người thứ hai = B)
 q: "câu đúng/sai bằng tiếng Việt|O hoặc X"                                         */
const DIALOGS={
1:{t:"Gặp ở sân bay",l:`小美|你好！歡迎你來臺灣！|Nǐ hǎo! Huānyíng nǐ lái Táiwān!|Xin chào! Chào mừng bạn đến Đài Loan!
大衛|謝謝你來接我。|Xièxie nǐ lái jiē wǒ.|Cảm ơn bạn đến đón tôi.
小美|不客氣。請問，你是美國人嗎？|Bú kèqi. Qǐngwèn, nǐ shì Měiguó rén ma?|Không có gì. Xin hỏi, bạn là người Mỹ à?
大衛|是的，我是美國人。你呢？|Shì de, wǒ shì Měiguó rén. Nǐ ne?|Vâng, tôi là người Mỹ. Còn bạn?
小美|我是臺灣人。我姓林，叫小美。你叫什麼名字？|Wǒ shì Táiwān rén. Wǒ xìng Lín, jiào Xiǎo Měi. Nǐ jiào shénme míngzi?|Tôi là người Đài Loan. Tôi họ Lâm, tên Tiểu Mỹ. Bạn tên là gì?
大衛|我叫大衛。你喜歡喝咖啡嗎？|Wǒ jiào Dàwèi. Nǐ xǐhuān hē kāfēi ma?|Tôi tên David. Bạn có thích uống cà phê không?
小美|我不喜歡喝咖啡，我喜歡喝烏龍茶。你要不要喝茶？|Wǒ bù xǐhuān hē kāfēi, wǒ xǐhuān hē wūlóngchá. Nǐ yào bu yào hē chá?|Tôi không thích cà phê, tôi thích trà ô long. Bạn có muốn uống trà không?
大衛|好，謝謝！烏龍茶很好喝。|Hǎo, xièxie! Wūlóngchá hěn hǎohē.|Được, cảm ơn! Trà ô long rất ngon.`,
q:`Tiểu Mỹ là người Mỹ.|X
David là người Mỹ.|O
Tiểu Mỹ thích uống trà ô long.|O
David không muốn uống trà.|X`},
2:{t:"Xem ảnh gia đình",l:`小美|這是你家人的照片嗎？|Zhè shì nǐ jiārén de zhàopiàn ma?|Đây là ảnh người nhà bạn à?
小明|是的。這是我爸爸，這是我媽媽。|Shì de. Zhè shì wǒ bàba, zhè shì wǒ māma.|Vâng. Đây là bố tôi, đây là mẹ tôi.
小美|他們都很漂亮！你家有幾個人？|Tāmen dōu hěn piàoliang! Nǐ jiā yǒu jǐ ge rén?|Họ đều đẹp quá! Nhà bạn có mấy người?
小明|我家有五個人，我有一個哥哥和一個妹妹。|Wǒ jiā yǒu wǔ ge rén, wǒ yǒu yí ge gēge hé yí ge mèimei.|Nhà tôi có năm người, tôi có một anh trai và một em gái.
小美|你哥哥也喜歡照相嗎？|Nǐ gēge yě xǐhuān zhào xiàng ma?|Anh trai bạn cũng thích chụp ảnh à?
小明|不喜歡，他喜歡看書。我妹妹喜歡照相。|Bù xǐhuān, tā xǐhuān kàn shū. Wǒ mèimei xǐhuān zhào xiàng.|Không, anh ấy thích đọc sách. Em gái tôi thích chụp ảnh.
小美|你家人都喜歡喝茶嗎？|Nǐ jiārén dōu xǐhuān hē chá ma?|Người nhà bạn đều thích uống trà à?
小明|是的，我家有很多茶。|Shì de, wǒ jiā yǒu hěn duō chá.|Đúng vậy, nhà tôi có rất nhiều trà.`,
q:`Nhà Tiểu Minh có năm người.|O
Anh trai Tiểu Minh thích chụp ảnh.|X
Em gái Tiểu Minh thích chụp ảnh.|O
Nhà Tiểu Minh không có trà.|X`},
3:{t:"Hẹn cuối tuần",l:`小美|週末你想做什麼？|Zhōumò nǐ xiǎng zuò shénme?|Cuối tuần bạn muốn làm gì?
大明|我想去打籃球。你呢？|Wǒ xiǎng qù dǎ lánqiú. Nǐ ne?|Tôi muốn đi chơi bóng rổ. Còn bạn?
小美|我喜歡游泳，也喜歡看電影。|Wǒ xǐhuān yóuyǒng, yě xǐhuān kàn diànyǐng.|Tôi thích bơi, cũng thích xem phim.
大明|我們星期六晚上一起看電影吧！|Wǒmen xīngqíliù wǎnshang yìqǐ kàn diànyǐng ba!|Tối thứ Bảy chúng ta cùng xem phim nhé!
小美|好啊！你想看臺灣電影還是日本電影？|Hǎo a! Nǐ xiǎng kàn Táiwān diànyǐng háishi Rìběn diànyǐng?|Được thôi! Bạn muốn xem phim Đài Loan hay phim Nhật?
大明|臺灣電影，我想學中文。|Táiwān diànyǐng, wǒ xiǎng xué Zhōngwén.|Phim Đài Loan, tôi muốn học tiếng Trung.
小美|我們也一起吃臺灣菜，怎麼樣？|Wǒmen yě yìqǐ chī Táiwān cài, zěnmeyàng?|Chúng ta cũng cùng ăn món Đài Loan, được không?
大明|太好了！|Tài hǎo le!|Tuyệt quá!`,
q:`Đại Minh muốn đi chơi bóng rổ.|O
Tiểu Mỹ thích đá bóng.|X
Họ muốn xem phim Đài Loan.|O
Họ hẹn gặp vào sáng thứ Bảy.|X`},
4:{t:"Mua bánh bao và cà phê",l:`老闆|歡迎！請問你要什麼？|Huānyíng! Qǐngwèn nǐ yào shénme?|Chào mừng! Xin hỏi bạn muốn gì?
安同|我要三個包子和兩杯咖啡。|Wǒ yào sān ge bāozi hé liǎng bēi kāfēi.|Tôi muốn ba cái bánh bao và hai ly cà phê.
老闆|咖啡要熱的還是冰的？|Kāfēi yào rè de háishi bīng de?|Cà phê nóng hay đá?
安同|熱的。|Rè de.|Nóng.
老闆|要大的還是小的？|Yào dà de háishi xiǎo de?|Cỡ lớn hay nhỏ?
安同|大的。請問一共多少錢？|Dà de. Qǐngwèn yígòng duōshǎo qián?|Cỡ lớn. Xin hỏi tổng cộng bao nhiêu tiền?
老闆|包子一個二十塊，咖啡一杯五十塊，一共一百六十塊。|Bāozi yí ge èrshí kuài, kāfēi yì bēi wǔshí kuài, yígòng yìbǎi liùshí kuài.|Bánh bao mỗi cái 20 tệ, cà phê mỗi ly 50 tệ, tổng cộng 160 tệ.
安同|好的。我要外帶，請幫我微波包子。|Hǎo de. Wǒ yào wàidài, qǐng bāng wǒ wēibō bāozi.|Được. Tôi mang đi, làm ơn hâm bánh bao giúp tôi.`,
q:`An Đồng mua hai cái bánh bao.|X
Một ly cà phê giá 50 tệ.|O
Tổng cộng 160 tệ.|O
An Đồng ăn tại chỗ.|X`},
5:{t:"Quán mì bò nổi tiếng",l:`月美|你覺得這家的牛肉麵怎麼樣？|Nǐ juéde zhè jiā de niúròu miàn zěnmeyàng?|Bạn thấy mì bò của quán này thế nào?
安同|真好吃！湯也很好喝。|Zhēn hǎochī! Tāng yě hěn hǎohē.|Ngon thật! Nước dùng cũng rất ngon.
月美|聽說這家店很有名。|Tīngshuō zhè jiā diàn hěn yǒumíng.|Nghe nói quán này rất nổi tiếng.
安同|是啊，可是有一點辣。|Shì a, kěshì yǒu yìdiǎn là.|Đúng vậy, nhưng hơi cay.
月美|你會做牛肉麵嗎？|Nǐ huì zuò niúròu miàn ma?|Bạn biết nấu mì bò không?
安同|會，可是我做得不好。|Huì, kěshì wǒ zuò de bù hǎo.|Biết, nhưng tôi nấu không ngon.
月美|明天晚上你到我家來吧，我做晚飯。|Míngtiān wǎnshang nǐ dào wǒ jiā lái ba, wǒ zuò wǎnfàn.|Tối mai bạn đến nhà tôi nhé, tôi nấu bữa tối.
安同|太好了，謝謝你！|Tài hǎo le, xièxie nǐ!|Tuyệt quá, cảm ơn bạn!`,
q:`Mì bò của quán rất ngon.|O
Mì bò hơi cay.|O
An Đồng nấu mì bò rất giỏi.|X
Nguyệt Mỹ mời An Đồng đến nhà ăn tối mai.|O`},
6:{t:"Trường học trên núi",l:`小明|你們學校在哪裡？|Nǐmen xuéxiào zài nǎlǐ?|Trường các bạn ở đâu?
小美|在山上，有一點遠。|Zài shānshàng, yǒu yìdiǎn yuǎn.|Ở trên núi, hơi xa.
小明|學校裡面有什麼？|Xuéxiào lǐmiàn yǒu shénme?|Trong trường có gì?
小美|有教室、圖書館和宿舍。圖書館在教室後面。|Yǒu jiàoshì, túshūguǎn hé sùshè. Túshūguǎn zài jiàoshì hòumiàn.|Có lớp học, thư viện và ký túc xá. Thư viện ở phía sau lớp học.
小明|附近有咖啡店嗎？|Fùjìn yǒu kāfēidiàn ma?|Gần đó có quán cà phê không?
小美|有，咖啡店在游泳池旁邊。|Yǒu, kāfēidiàn zài yóuyǒngchí pángbiān.|Có, quán cà phê ở bên cạnh hồ bơi.
小明|山上的風景漂亮嗎？|Shānshàng de fēngjǐng piàoliang ma?|Phong cảnh trên núi có đẹp không?
小美|很漂亮！週末你來看看吧。|Hěn piàoliang! Zhōumò nǐ lái kànkan ba.|Rất đẹp! Cuối tuần bạn đến xem thử nhé.`,
q:`Trường của Tiểu Mỹ ở trên núi.|O
Thư viện ở phía trước lớp học.|X
Quán cà phê ở bên cạnh hồ bơi.|O
Phong cảnh trên núi không đẹp.|X`},
7:{t:"Hẹn đi KTV",l:`怡君|你明天有空嗎？|Nǐ míngtiān yǒu kòng ma?|Ngày mai bạn rảnh không?
安同|明天早上我有中文課，從八點到十二點。|Míngtiān zǎoshang wǒ yǒu Zhōngwén kè, cóng bā diǎn dào shí'èr diǎn.|Sáng mai tôi có lớp tiếng Trung, từ 8 giờ đến 12 giờ.
怡君|下午呢？|Xiàwǔ ne?|Còn buổi chiều?
安同|下午沒事。你想做什麼？|Xiàwǔ méi shì. Nǐ xiǎng zuò shénme?|Buổi chiều không có việc. Bạn muốn làm gì?
怡君|我們三點去KTV唱歌，好嗎？|Wǒmen sān diǎn qù KTV chàng gē, hǎo ma?|Ba giờ chúng ta đi KTV hát nhé?
安同|沒問題！我們在哪裡見面？|Méi wèntí! Wǒmen zài nǎlǐ jiàn miàn?|Không vấn đề! Chúng ta gặp nhau ở đâu?
怡君|在學校旁邊的咖啡店，兩點五十見。|Zài xuéxiào pángbiān de kāfēidiàn, liǎng diǎn wǔshí jiàn.|Ở quán cà phê cạnh trường, hai giờ năm mươi gặp.
安同|好，明天見！|Hǎo, míngtiān jiàn!|Được, mai gặp!`,
q:`Sáng mai An Đồng có lớp từ 8 giờ đến 12 giờ.|O
Chiều mai An Đồng bận.|X
Họ đi KTV lúc 3 giờ.|O
Họ gặp nhau ở thư viện.|X`},
8:{t:"Đi Đài Nam bằng gì?",l:`如玉|週末你想跟我去臺南玩嗎？|Zhōumò nǐ xiǎng gēn wǒ qù Táinán wán ma?|Cuối tuần bạn muốn cùng tôi đi Đài Nam chơi không?
安同|好啊。我們怎麼去？|Hǎo a. Wǒmen zěnme qù?|Được. Chúng ta đi bằng gì?
如玉|我想坐火車。|Wǒ xiǎng zuò huǒchē.|Tôi muốn đi tàu hỏa.
安同|坐高鐵比較快啊！|Zuò gāotiě bǐjiào kuài a!|Đi tàu cao tốc nhanh hơn mà!
如玉|我知道，但是高鐵太貴了。坐火車比較便宜，也可以看風景。|Wǒ zhīdào, dànshì gāotiě tài guì le. Zuò huǒchē bǐjiào piányí, yě kěyǐ kàn fēngjǐng.|Tôi biết, nhưng tàu cao tốc đắt quá. Đi tàu hỏa rẻ hơn, còn ngắm được phong cảnh.
安同|好，我們坐火車去。車票在哪裡買？|Hǎo, wǒmen zuò huǒchē qù. Chēpiào zài nǎlǐ mǎi?|Được, chúng ta đi tàu hỏa. Vé mua ở đâu?
如玉|便利商店或是火車站都可以。|Biànlì shāngdiàn huòshi huǒchēzhàn dōu kěyǐ.|Cửa hàng tiện lợi hoặc ga tàu đều được.
安同|太好了，謝謝你！|Tài hǎo le, xièxie nǐ!|Tuyệt quá, cảm ơn bạn!`,
q:`Như Ngọc muốn đi tàu cao tốc.|X
Tàu cao tốc nhanh hơn nhưng đắt.|O
Họ quyết định đi tàu hỏa.|O
Vé chỉ mua được ở ga tàu.|X`},
9:{t:"Nghỉ lễ đi đâu chơi?",l:`田中|放假的時候你打算做什麼？|Fàng jià de shíhou nǐ dǎsuàn zuò shénme?|Lúc nghỉ lễ bạn định làm gì?
月美|我打算去花蓮旅行，你呢？|Wǒ dǎsuàn qù Huālián lǚxíng, nǐ ne?|Tôi định đi Hoa Liên du lịch, còn bạn?
田中|我還沒決定。你有什麼建議嗎？|Wǒ hái méi juédìng. Nǐ yǒu shénme jiànyì ma?|Tôi chưa quyết định. Bạn có gợi ý gì không?
月美|貓空不錯，那裡有很多特別的茶館。|Māokōng búcuò, nàlǐ yǒu hěn duō tèbié de cháguǎn.|Miêu Không khá hay, ở đó có nhiều quán trà đặc biệt.
田中|從學校到貓空要多久？|Cóng xuéxiào dào Māokōng yào duōjiǔ?|Từ trường đến Miêu Không mất bao lâu?
月美|大概一個鐘頭。|Dàgài yí ge zhōngtóu.|Khoảng một tiếng.
田中|要是你有空，我們下個星期六一起去吧！|Yàoshi nǐ yǒu kòng, wǒmen xià ge xīngqíliù yìqǐ qù ba!|Nếu bạn rảnh, thứ Bảy tuần sau chúng ta cùng đi nhé!
月美|好啊！|Hǎo a!|Được thôi!`,
q:`Nguyệt Mỹ định đi Hoa Liên.|O
Điền Trung đã quyết định đi đâu.|X
Từ trường đến Miêu Không mất khoảng một tiếng.|O
Họ hẹn đi vào thứ Bảy tuần sau.|O`},
10:{t:"Trái cây Đài Loan",l:`明華|你為什麼笑得這麼開心？|Nǐ wèishénme xiào de zhème kāixīn?|Sao bạn cười vui thế?
小美|因為同學給我很多水果。|Yīnwèi tóngxué gěi wǒ hěn duō shuǐguǒ.|Vì bạn học cho tôi nhiều trái cây.
明華|有什麼水果？|Yǒu shénme shuǐguǒ?|Có những loại trái cây nào?
小美|有西瓜和芒果。他買的西瓜很甜。|Yǒu xīguā hé mángguǒ. Tā mǎi de xīguā hěn tián.|Có dưa hấu và xoài. Dưa hấu anh ấy mua rất ngọt.
明華|你以前喜歡吃芒果嗎？|Nǐ yǐqián xǐhuān chī mángguǒ ma?|Trước đây bạn có thích ăn xoài không?
小美|以前不太喜歡，可是現在喜歡了。臺灣的芒果又香又甜。|Yǐqián bú tài xǐhuān, kěshì xiànzài xǐhuān le. Táiwān de mángguǒ yòu xiāng yòu tián.|Trước đây không thích lắm, nhưng bây giờ thích rồi. Xoài Đài Loan vừa thơm vừa ngọt.
明華|我也想吃，可以給我一個嗎？|Wǒ yě xiǎng chī, kěyǐ gěi wǒ yí ge ma?|Tôi cũng muốn ăn, cho tôi một quả được không?
小美|好啊，請吃！|Hǎo a, qǐng chī!|Được chứ, mời ăn!`,
q:`Tiểu Mỹ vui vì bạn học cho trái cây.|O
Dưa hấu rất chua.|X
Trước đây Tiểu Mỹ rất thích xoài.|X
Tiểu Mỹ mời Minh Hoa ăn xoài.|O`},
11:{t:"Đi xem phòng trọ",l:`安同|你好，我想租房子。|Nǐ hǎo, wǒ xiǎng zū fángzi.|Xin chào, tôi muốn thuê nhà.
房東|好啊，你想租哪裡的？|Hǎo a, nǐ xiǎng zū nǎlǐ de?|Được, bạn muốn thuê ở đâu?
安同|我想租學校附近的。房租一個月多少錢？|Wǒ xiǎng zū xuéxiào fùjìn de. Fángzū yí ge yuè duōshǎo qián?|Tôi muốn thuê gần trường. Tiền thuê một tháng bao nhiêu?
房東|這個房間一個月八千塊。|Zhège fángjiān yí ge yuè bā qiān kuài.|Phòng này một tháng tám nghìn tệ.
安同|房間裡有沒有冷氣？|Fángjiān lǐ yǒu méi yǒu lěngqì?|Trong phòng có máy lạnh không?
房東|有，也有床、桌子和椅子。|Yǒu, yě yǒu chuáng, zhuōzi hé yǐzi.|Có, còn có giường, bàn và ghế.
安同|這裡離捷運站遠不遠？|Zhèlǐ lí jiéyùnzhàn yuǎn bu yuǎn?|Ở đây cách ga tàu điện ngầm có xa không?
房東|很近，很方便。|Hěn jìn, hěn fāngbiàn.|Rất gần, rất thuận tiện.
安同|我先看看房間，再決定，可以嗎？|Wǒ xiān kànkan fángjiān, zài juédìng, kěyǐ ma?|Tôi xem phòng trước rồi quyết định, được không?
房東|沒問題，請進。|Méi wèntí, qǐng jìn.|Không vấn đề, mời vào.`,
q:`Phòng này một tháng 8000 tệ.|O
Phòng không có máy lạnh.|X
Nhà gần ga tàu điện ngầm.|O
An Đồng thuê ngay mà không xem phòng.|X`},
12:{t:"Học tiếng Trung được bao lâu?",l:`老師|你在臺灣學了多久的中文？|Nǐ zài Táiwān xué le duōjiǔ de Zhōngwén?|Bạn học tiếng Trung ở Đài Loan bao lâu rồi?
大衛|我已經學了一年了。|Wǒ yǐjīng xué le yì nián le.|Tôi đã học một năm rồi.
老師|你從什麼時候開始學？|Nǐ cóng shénme shíhou kāishǐ xué?|Bạn bắt đầu học từ khi nào?
大衛|從去年九月開始。|Cóng qùnián jiǔ yuè kāishǐ.|Từ tháng chín năm ngoái.
老師|你聽得懂我說的話嗎？|Nǐ tīng de dǒng wǒ shuō de huà ma?|Bạn nghe hiểu lời tôi nói không?
大衛|聽得懂，可是這個漢字我看不懂。|Tīng de dǒng, kěshì zhège Hànzì wǒ kàn bu dǒng.|Nghe hiểu, nhưng chữ Hán này tôi đọc không hiểu.
老師|沒關係，你每天要多練習。|Méi guānxi, nǐ měitiān yào duō liànxí.|Không sao, mỗi ngày bạn cần luyện tập nhiều.
大衛|我每天練習兩個小時。|Wǒ měitiān liànxí liǎng ge xiǎoshí.|Mỗi ngày tôi luyện tập hai tiếng.
老師|很好，你的中文進步了！|Hěn hǎo, nǐ de Zhōngwén jìnbù le!|Tốt lắm, tiếng Trung của bạn tiến bộ rồi!`,
q:`David đã học tiếng Trung hai năm.|X
David bắt đầu học từ tháng chín năm ngoái.|O
David nghe hiểu lời thầy nói.|O
Mỗi ngày David luyện tập hai tiếng.|O`},
13:{t:"Sinh nhật vui vẻ",l:`小美|明天是你的生日，生日快樂！|Míngtiān shì nǐ de shēngrì, shēngrì kuàilè!|Ngày mai là sinh nhật bạn, chúc mừng sinh nhật!
大明|謝謝！你知道我明天幾歲嗎？|Xièxie! Nǐ zhīdào wǒ míngtiān jǐ suì ma?|Cảm ơn! Bạn có biết mai tôi bao nhiêu tuổi không?
小美|你今年二十五歲，對不對？|Nǐ jīnnián èrshíwǔ suì, duì bu duì?|Năm nay bạn 25 tuổi, đúng không?
大明|對。你的生日是幾月幾號？|Duì. Nǐ de shēngrì shì jǐ yuè jǐ hào?|Đúng. Sinh nhật bạn là ngày mấy tháng mấy?
小美|我的生日是五月二十號。|Wǒ de shēngrì shì wǔ yuè èrshí hào.|Sinh nhật tôi là ngày 20 tháng 5.
大明|明天晚上我請朋友來我家吃蛋糕，你也來吧！|Míngtiān wǎnshang wǒ qǐng péngyou lái wǒ jiā chī dàngāo, nǐ yě lái ba!|Tối mai tôi mời bạn bè đến nhà ăn bánh kem, bạn cũng đến nhé!
小美|好啊！我送你一個禮物。|Hǎo a! Wǒ sòng nǐ yí ge lǐwù.|Được thôi! Tôi tặng bạn một món quà.
大明|謝謝你！|Xièxie nǐ!|Cảm ơn bạn!`,
q:`Năm nay Đại Minh 25 tuổi.|O
Sinh nhật Tiểu Mỹ là ngày 20 tháng 5.|O
Tiệc sinh nhật ở nhà Tiểu Mỹ.|X
Tiểu Mỹ sẽ tặng quà.|O`},
14:{t:"Trời lạnh quá",l:`大明|今天天氣這麼冷！|Jīntiān tiānqì zhème lěng!|Hôm nay trời lạnh thế này!
小美|是啊，今天只有十二度，比昨天冷。|Shì a, jīntiān zhǐyǒu shí'èr dù, bǐ zuótiān lěng.|Đúng vậy, hôm nay chỉ có 12 độ, lạnh hơn hôm qua.
大明|明天呢？|Míngtiān ne?|Còn ngày mai?
小美|天氣預報說明天更冷，可能會下雨。|Tiānqì yùbào shuō míngtiān gèng lěng, kěnéng huì xià yǔ.|Dự báo thời tiết nói ngày mai lạnh hơn, có thể sẽ mưa.
大明|那我們明天還去爬山嗎？|Nà wǒmen míngtiān hái qù pá shān ma?|Vậy ngày mai chúng ta còn đi leo núi không?
小美|要是下雨，我們就不去了。|Yàoshi xià yǔ, wǒmen jiù bú qù le.|Nếu mưa thì chúng ta không đi nữa.
大明|好。你要穿外套，也要帶雨傘。|Hǎo. Nǐ yào chuān wàitào, yě yào dài yǔsǎn.|Được. Bạn phải mặc áo khoác và mang ô nữa.
小美|好，謝謝你！|Hǎo, xièxie nǐ!|Được, cảm ơn bạn!`,
q:`Hôm nay 12 độ.|O
Hôm nay ấm hơn hôm qua.|X
Nếu mai mưa họ vẫn đi leo núi.|X
Dự báo nói ngày mai lạnh hơn.|O`},
15:{t:"Khám bệnh",l:`醫生|你哪裡不舒服？|Nǐ nǎlǐ bù shūfu?|Bạn khó chịu ở đâu?
安同|我頭痛，喉嚨也很痛。|Wǒ tóu tòng, hóulóng yě hěn tòng.|Tôi đau đầu, họng cũng rất đau.
醫生|你發燒嗎？|Nǐ fā shāo ma?|Bạn có sốt không?
安同|有一點發燒，我還咳嗽。|Yǒu yìdiǎn fā shāo, wǒ hái késou.|Hơi sốt, tôi còn ho nữa.
醫生|你感冒了。你要吃藥，也要多休息，多喝水。|Nǐ gǎnmào le. Nǐ yào chī yào, yě yào duō xiūxí, duō hē shuǐ.|Bạn bị cảm rồi. Bạn phải uống thuốc, nghỉ ngơi nhiều và uống nhiều nước.
安同|我可以去上課嗎？|Wǒ kěyǐ qù shàng kè ma?|Tôi đi học được không?
醫生|這兩天別去上課了，在家休息吧。|Zhè liǎng tiān bié qù shàng kè le, zài jiā xiūxí ba.|Hai ngày nay đừng đi học, ở nhà nghỉ ngơi đi.
安同|好，謝謝醫生。|Hǎo, xièxie yīshēng.|Được, cảm ơn bác sĩ.`,
q:`An Đồng đau đầu và đau họng.|O
An Đồng bị đau bụng.|X
Bác sĩ nói An Đồng bị cảm.|O
Bác sĩ bảo An Đồng cứ đi học bình thường.|X`}
};
