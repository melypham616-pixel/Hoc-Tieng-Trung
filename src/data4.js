
/* ============ TRUYỆN ĐỌC (mỗi bài một truyện ngắn, dùng từ vựng của bài đó) ============
 n: bài   zh: tên truyện   vi: nghĩa tên truyện
 l: "Hán|pinyin|tiếng Việt" — mỗi dòng là một câu để luyện đọc và chấm phát âm */
const STORIES=[
{n:1,zh:"新朋友",vi:"Người bạn mới",l:`小美是臺灣人。|Xiǎo Měi shì Táiwān rén.|Tiểu Mỹ là người Đài Loan.
大衛是美國人。|Dàwèi shì Měiguó rén.|David là người Mỹ.
他們是新朋友。|Tāmen shì xīn péngyou.|Họ là bạn mới của nhau.
小美說：歡迎你來臺灣！|Xiǎo Měi shuō: Huānyíng nǐ lái Táiwān!|Tiểu Mỹ nói: Chào mừng bạn đến Đài Loan!
大衛說：謝謝！我喜歡臺灣。|Dàwèi shuō: Xièxie! Wǒ xǐhuān Táiwān.|David nói: Cảm ơn! Tôi thích Đài Loan.
小美請大衛喝烏龍茶。|Xiǎo Měi qǐng Dàwèi hē wūlóngchá.|Tiểu Mỹ mời David uống trà ô long.
大衛說：烏龍茶很好喝！|Dàwèi shuō: Wūlóngchá hěn hǎohē!|David nói: Trà ô long ngon quá!`},
{n:2,zh:"我的家",vi:"Gia đình tôi",l:`我家有五個人。|Wǒ jiā yǒu wǔ ge rén.|Nhà tôi có năm người.
爸爸、媽媽、哥哥、妹妹和我。|Bàba, māma, gēge, mèimei hé wǒ.|Bố, mẹ, anh trai, em gái và tôi.
爸爸是老師，他喜歡看書。|Bàba shì lǎoshī, tā xǐhuān kàn shū.|Bố là giáo viên, ông thích đọc sách.
媽媽喜歡喝茶。|Māma xǐhuān hē chá.|Mẹ thích uống trà.
妹妹喜歡照相，她有很多漂亮的照片。|Mèimei xǐhuān zhào xiàng, tā yǒu hěn duō piàoliang de zhàopiàn.|Em gái thích chụp ảnh, em có rất nhiều ảnh đẹp.
我家的房子不大，可是很漂亮。|Wǒ jiā de fángzi bú dà, kěshì hěn piàoliang.|Nhà tôi không lớn nhưng rất đẹp.
我愛我的家人。|Wǒ ài wǒ de jiārén.|Tôi yêu người nhà của tôi.`},
{n:3,zh:"快樂的週末",vi:"Một cuối tuần vui vẻ",l:`週末到了，小明很開心。|Zhōumò dào le, Xiǎo Míng hěn kāixīn.|Cuối tuần đến rồi, Tiểu Minh rất vui.
他想去打籃球。|Tā xiǎng qù dǎ lánqiú.|Cậu ấy muốn đi chơi bóng rổ.
小美想去游泳。|Xiǎo Měi xiǎng qù yóuyǒng.|Tiểu Mỹ muốn đi bơi.
他們不知道做什麼。|Tāmen bù zhīdào zuò shénme.|Họ không biết làm gì.
小明說：我們看電影吧！|Xiǎo Míng shuō: Wǒmen kàn diànyǐng ba!|Tiểu Minh nói: Chúng ta xem phim nhé!
小美說：好啊！我們也去吃臺灣菜。|Xiǎo Měi shuō: Hǎo a! Wǒmen yě qù chī Táiwān cài.|Tiểu Mỹ nói: Được thôi! Chúng ta cũng đi ăn món Đài Loan.
他們都覺得這個週末很好玩。|Tāmen dōu juéde zhège zhōumò hěn hǎowán.|Họ đều thấy cuối tuần này rất vui.`},
{n:4,zh:"買早餐",vi:"Mua bữa sáng",l:`今天早上，安同去買早餐。|Jīntiān zǎoshang, Āntóng qù mǎi zǎocān.|Sáng nay, An Đồng đi mua bữa sáng.
他要三個包子和一杯咖啡。|Tā yào sān ge bāozi hé yì bēi kāfēi.|Anh ấy muốn ba cái bánh bao và một ly cà phê.
老闆問：內用還是外帶？|Lǎobǎn wèn: Nèiyòng háishi wàidài?|Ông chủ hỏi: Dùng tại chỗ hay mang đi?
安同說：外帶，謝謝。|Āntóng shuō: Wàidài, xièxie.|An Đồng nói: Mang đi, cảm ơn.
包子一個二十塊，咖啡一杯五十塊。|Bāozi yí ge èrshí kuài, kāfēi yì bēi wǔshí kuài.|Bánh bao 20 tệ một cái, cà phê 50 tệ một ly.
一共一百一十塊。|Yígòng yìbǎi yìshí kuài.|Tổng cộng 110 tệ.
安同覺得不貴，很開心。|Āntóng juéde bú guì, hěn kāixīn.|An Đồng thấy không đắt, rất vui.`},
{n:5,zh:"牛肉麵",vi:"Mì bò",l:`月美的朋友想吃牛肉麵。|Yuèměi de péngyou xiǎng chī niúròu miàn.|Bạn của Nguyệt Mỹ muốn ăn mì bò.
聽說學校旁邊有一家很有名的店。|Tīngshuō xuéxiào pángbiān yǒu yì jiā hěn yǒumíng de diàn.|Nghe nói bên cạnh trường có một quán rất nổi tiếng.
他們一起去吃。|Tāmen yìqǐ qù chī.|Họ cùng đi ăn.
麵很好吃，湯也很好喝。|Miàn hěn hǎochī, tāng yě hěn hǎohē.|Mì rất ngon, nước dùng cũng rất ngon.
可是有一點辣。|Kěshì yǒu yìdiǎn là.|Nhưng hơi cay.
月美不會做牛肉麵。|Yuèměi bú huì zuò niúròu miàn.|Nguyệt Mỹ không biết nấu mì bò.
她想以後自己學。|Tā xiǎng yǐhòu zìjǐ xué.|Cô ấy muốn sau này tự học.`},
{n:6,zh:"我們的學校",vi:"Trường của chúng tôi",l:`我的學校在山上。|Wǒ de xuéxiào zài shānshàng.|Trường của tôi ở trên núi.
學校不大，可是風景很漂亮。|Xuéxiào bú dà, kěshì fēngjǐng hěn piàoliang.|Trường không lớn nhưng phong cảnh rất đẹp.
教室後面是圖書館。|Jiàoshì hòumiàn shì túshūguǎn.|Phía sau lớp học là thư viện.
圖書館旁邊有一家咖啡店。|Túshūguǎn pángbiān yǒu yì jiā kāfēidiàn.|Bên cạnh thư viện có một quán cà phê.
咖啡店前面有游泳池。|Kāfēidiàn qiánmiàn yǒu yóuyǒngchí.|Phía trước quán cà phê có hồ bơi.
我常在圖書館看書。|Wǒ cháng zài túshūguǎn kàn shū.|Tôi thường đọc sách ở thư viện.
下課以後，我們去咖啡店喝茶。|Xià kè yǐhòu, wǒmen qù kāfēidiàn hē chá.|Tan học xong, chúng tôi đến quán cà phê uống trà.`},
{n:7,zh:"忙碌的一天",vi:"Một ngày bận rộn",l:`小王每天六點起床。|Xiǎo Wáng měitiān liù diǎn qǐ chuáng.|Tiểu Vương mỗi ngày sáu giờ thức dậy.
八點他去學校。|Bā diǎn tā qù xuéxiào.|Tám giờ cậu ấy đến trường.
從九點到十二點，他有中文課。|Cóng jiǔ diǎn dào shí'èr diǎn, tā yǒu Zhōngwén kè.|Từ chín giờ đến mười hai giờ, cậu ấy có lớp tiếng Trung.
下午他看書，也去運動。|Xiàwǔ tā kàn shū, yě qù yùndòng.|Buổi chiều cậu ấy đọc sách, cũng đi vận động.
晚上他和朋友一起吃飯。|Wǎnshang tā hé péngyou yìqǐ chī fàn.|Buổi tối cậu ấy cùng bạn đi ăn cơm.
十一點他睡覺。|Shíyī diǎn tā shuì jiào.|Mười một giờ cậu ấy đi ngủ.
他覺得每天都很忙，可是很有意思。|Tā juéde měitiān dōu hěn máng, kěshì hěn yǒu yìsi.|Cậu ấy thấy ngày nào cũng bận, nhưng rất thú vị.`},
{n:8,zh:"去臺南",vi:"Đi Đài Nam",l:`週末，如玉想去臺南玩。|Zhōumò, Rúyù xiǎng qù Táinán wán.|Cuối tuần, Như Ngọc muốn đi Đài Nam chơi.
坐高鐵比較快，可是很貴。|Zuò gāotiě bǐjiào kuài, kěshì hěn guì.|Đi tàu cao tốc nhanh hơn nhưng rất đắt.
坐火車有一點慢，可是比較便宜。|Zuò huǒchē yǒu yìdiǎn màn, kěshì bǐjiào piányí.|Đi tàu hỏa hơi chậm nhưng rẻ hơn.
她和安同決定坐火車去。|Tā hé Āntóng juédìng zuò huǒchē qù.|Cô ấy và An Đồng quyết định đi tàu hỏa.
火車上可以看風景。|Huǒchē shàng kěyǐ kàn fēngjǐng.|Trên tàu có thể ngắm phong cảnh.
他們又吃又玩，真開心！|Tāmen yòu chī yòu wán, zhēn kāixīn!|Họ vừa ăn vừa chơi, thật vui!
回家的時候，他們坐高鐵。|Huí jiā de shíhou, tāmen zuò gāotiě.|Lúc về nhà, họ đi tàu cao tốc.`},
{n:9,zh:"放假去花蓮",vi:"Nghỉ lễ đi Hoa Liên",l:`下個月我們放三天假。|Xià ge yuè wǒmen fàng sān tiān jià.|Tháng sau chúng tôi nghỉ ba ngày.
我打算跟家人去花蓮旅行。|Wǒ dǎsuàn gēn jiārén qù Huālián lǚxíng.|Tôi dự định cùng gia đình đi Hoa Liên du lịch.
聽說那裡的風景非常漂亮。|Tīngshuō nàlǐ de fēngjǐng fēicháng piàoliang.|Nghe nói phong cảnh ở đó vô cùng đẹp.
我們坐火車去，要兩個鐘頭。|Wǒmen zuò huǒchē qù, yào liǎng ge zhōngtóu.|Chúng tôi đi tàu hỏa, mất hai tiếng.
要是天氣好，我們就去看海。|Yàoshi tiānqì hǎo, wǒmen jiù qù kàn hǎi.|Nếu thời tiết đẹp, chúng tôi sẽ đi ngắm biển.
晚上我們去夜市吃小吃。|Wǎnshang wǒmen qù yèshì chī xiǎochī.|Buổi tối chúng tôi đi chợ đêm ăn món ăn vặt.
我很想快一點去。|Wǒ hěn xiǎng kuài yìdiǎn qù.|Tôi rất muốn đi sớm một chút.`},
{n:10,zh:"田中的水果",vi:"Trái cây của Điền Trung",l:`田中是我的日本朋友。|Tiánzhōng shì wǒ de Rìběn péngyou.|Điền Trung là bạn người Nhật của tôi.
他以前不喜歡吃水果。|Tā yǐqián bù xǐhuān chī shuǐguǒ.|Trước đây anh ấy không thích ăn trái cây.
來臺灣以後，他很喜歡吃西瓜和芒果。|Lái Táiwān yǐhòu, tā hěn xǐhuān chī xīguā hé mángguǒ.|Sau khi đến Đài Loan, anh ấy rất thích ăn dưa hấu và xoài.
因為臺灣的水果又香又甜。|Yīnwèi Táiwān de shuǐguǒ yòu xiāng yòu tián.|Vì trái cây Đài Loan vừa thơm vừa ngọt.
所以他每個週末都去買。|Suǒyǐ tā měi ge zhōumò dōu qù mǎi.|Cho nên cuối tuần nào anh ấy cũng đi mua.
同學也給他很多水果。|Tóngxué yě gěi tā hěn duō shuǐguǒ.|Bạn học cũng cho anh ấy rất nhiều trái cây.
他現在比我更喜歡臺灣！|Tā xiànzài bǐ wǒ gèng xǐhuān Táiwān!|Bây giờ anh ấy còn thích Đài Loan hơn cả tôi!`},
{n:11,zh:"租房子",vi:"Thuê nhà",l:`安同想在學校附近租房子。|Āntóng xiǎng zài xuéxiào fùjìn zū fángzi.|An Đồng muốn thuê nhà gần trường.
第一個房間很便宜，可是離學校很遠。|Dì yī ge fángjiān hěn piányí, kěshì lí xuéxiào hěn yuǎn.|Phòng thứ nhất rất rẻ nhưng cách trường rất xa.
第二個房間很近，也很乾淨。|Dì èr ge fángjiān hěn jìn, yě hěn gānjìng.|Phòng thứ hai rất gần, cũng rất sạch.
房租一個月八千塊。|Fángzū yí ge yuè bā qiān kuài.|Tiền thuê nhà một tháng tám nghìn tệ.
房間裡有床、桌子和冷氣。|Fángjiān lǐ yǒu chuáng, zhuōzi hé lěngqì.|Trong phòng có giường, bàn và máy lạnh.
他先問房東，然後再決定。|Tā xiān wèn fángdōng, ránhòu zài juédìng.|Anh ấy hỏi chủ nhà trước, sau đó mới quyết định.
最後他租了第二個房間。|Zuìhòu tā zū le dì èr ge fángjiān.|Cuối cùng anh ấy thuê phòng thứ hai.`},
{n:12,zh:"我的中文",vi:"Tiếng Trung của tôi",l:`我在臺灣學了一年的中文。|Wǒ zài Táiwān xué le yì nián de Zhōngwén.|Tôi đã học tiếng Trung ở Đài Loan một năm.
我從去年九月開始學。|Wǒ cóng qùnián jiǔ yuè kāishǐ xué.|Tôi bắt đầu học từ tháng chín năm ngoái.
每天早上我上課，下午練習兩個小時。|Měitiān zǎoshang wǒ shàng kè, xiàwǔ liànxí liǎng ge xiǎoshí.|Mỗi sáng tôi đi học, buổi chiều luyện tập hai tiếng.
現在我聽得懂老師說的話。|Xiànzài wǒ tīng de dǒng lǎoshī shuō de huà.|Bây giờ tôi nghe hiểu lời thầy giáo nói.
漢字有一點難，可是很有意思。|Hànzì yǒu yìdiǎn nán, kěshì hěn yǒu yìsi.|Chữ Hán hơi khó nhưng rất thú vị.
我的中文進步了，我很開心。|Wǒ de Zhōngwén jìnbù le, wǒ hěn kāixīn.|Tiếng Trung của tôi tiến bộ rồi, tôi rất vui.
我還想再學一年。|Wǒ hái xiǎng zài xué yì nián.|Tôi còn muốn học thêm một năm nữa.`},
{n:13,zh:"生日驚喜",vi:"Bất ngờ sinh nhật",l:`明天是小美的生日。|Míngtiān shì Xiǎo Měi de shēngrì.|Ngày mai là sinh nhật của Tiểu Mỹ.
大明想給她一個驚喜。|Dà Míng xiǎng gěi tā yí ge jīngxǐ.|Đại Minh muốn tạo cho cô ấy một bất ngờ.
他買了一個蛋糕和一個禮物。|Tā mǎi le yí ge dàngāo hé yí ge lǐwù.|Anh ấy mua một chiếc bánh kem và một món quà.
他請同學來他家。|Tā qǐng tóngxué lái tā jiā.|Anh ấy mời bạn học đến nhà.
小美一到，大家就說：生日快樂！|Xiǎo Měi yí dào, dàjiā jiù shuō: Shēngrì kuàilè!|Tiểu Mỹ vừa đến, mọi người liền nói: Chúc mừng sinh nhật!
小美很開心，她今年二十五歲了。|Xiǎo Měi hěn kāixīn, tā jīnnián èrshíwǔ suì le.|Tiểu Mỹ rất vui, năm nay cô ấy hai mươi lăm tuổi.
她說：謝謝你們！這是我最好的生日。|Tā shuō: Xièxie nǐmen! Zhè shì wǒ zuì hǎo de shēngrì.|Cô ấy nói: Cảm ơn các bạn! Đây là sinh nhật tuyệt nhất của tôi.`},
{n:14,zh:"下雨了",vi:"Trời mưa rồi",l:`今天天氣這麼冷！|Jīntiān tiānqì zhème lěng!|Hôm nay trời lạnh thế này!
天氣預報說下午會下雨。|Tiānqì yùbào shuō xiàwǔ huì xià yǔ.|Dự báo thời tiết nói buổi chiều sẽ mưa.
媽媽說：你要穿外套，也要帶雨傘。|Māma shuō: Nǐ yào chuān wàitào, yě yào dài yǔsǎn.|Mẹ nói: Con phải mặc áo khoác, cũng phải mang ô.
小明帶了雨傘去學校。|Xiǎo Míng dài le yǔsǎn qù xuéxiào.|Tiểu Minh mang ô đến trường.
下午真的下雨了。|Xiàwǔ zhēnde xià yǔ le.|Buổi chiều trời thật sự mưa rồi.
同學都沒有帶傘，小明請他們一起走。|Tóngxué dōu méiyǒu dài sǎn, Xiǎo Míng qǐng tāmen yìqǐ zǒu.|Các bạn học đều không mang ô, Tiểu Minh mời họ đi chung.
大家都說：謝謝你，小明！|Dàjiā dōu shuō: Xièxie nǐ, Xiǎo Míng!|Mọi người đều nói: Cảm ơn bạn, Tiểu Minh!`},
{n:15,zh:"生病了",vi:"Bị ốm",l:`昨天天氣冷，安同感冒了。|Zuótiān tiānqì lěng, Āntóng gǎnmào le.|Hôm qua trời lạnh, An Đồng bị cảm.
他頭痛，喉嚨也很痛。|Tā tóu tòng, hóulóng yě hěn tòng.|Anh ấy đau đầu, họng cũng rất đau.
今天他去醫院看醫生。|Jīntiān tā qù yīyuàn kàn yīshēng.|Hôm nay anh ấy đến bệnh viện khám bác sĩ.
醫生說：你要吃藥，也要多休息。|Yīshēng shuō: Nǐ yào chī yào, yě yào duō xiūxí.|Bác sĩ nói: Bạn phải uống thuốc, cũng phải nghỉ ngơi nhiều.
還要多喝水，別吃冰的。|Hái yào duō hē shuǐ, bié chī bīng de.|Còn phải uống nhiều nước, đừng ăn đồ lạnh.
安同回家吃藥，早點睡覺。|Āntóng huí jiā chī yào, zǎodiǎn shuì jiào.|An Đồng về nhà uống thuốc, đi ngủ sớm.
兩天以後，他好多了。|Liǎng tiān yǐhòu, tā hǎo duō le.|Hai ngày sau, anh ấy khỏe hơn nhiều.`}
];
