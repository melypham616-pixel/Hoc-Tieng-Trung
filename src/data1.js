/* ============ DỮ LIỆU 15 BÀI — 當代中文課程 1 ============
 v: từ vựng  "Hán|pinyin|nghĩa"
 g: ngữ pháp [tiêu đề, công thức, giải thích, ví dụ "Hán|pinyin|nghĩa"]
 s: câu dịch / đoạn văn "tiếng Việt|Hán|pinyin"
 o: sắp xếp câu "tiếng Việt|từ từ từ"
*/
const LESSONS=[
{n:1,zh:"歡迎你來臺灣！",vi:"Chào mừng bạn đến Đài Loan",
v:`歡迎|huānyíng|chào mừng
來|lái|đến
臺灣|Táiwān|Đài Loan
你|nǐ|bạn
你好|nǐ hǎo|xin chào
您|nín|ngài (kính trọng)
您好|nín hǎo|chào ngài
我|wǒ|tôi
他|tā|anh ấy
她|tā|cô ấy
你們|nǐmen|các bạn
我們|wǒmen|chúng tôi
他們|tāmen|họ
朋友|péngyou|bạn bè
同學|tóngxué|bạn học
請|qǐng|xin mời, làm ơn
請進|qǐng jìn|mời vào
請問|qǐngwèn|xin hỏi
謝謝|xièxie|cảm ơn
不客氣|bú kèqi|không có gì
客氣|kèqi|khách sáo
再見|zàijiàn|tạm biệt
是|shì|là
不|bù|không
不是|bú shì|không phải
嗎|ma|(trợ từ nghi vấn)
呢|ne|còn… thì sao?
也|yě|cũng
很|hěn|rất
姓|xìng|họ
叫|jiào|tên là, gọi
什麼|shénme|cái gì
先生|xiānsheng|ông, ngài
小姐|xiǎojiě|cô
哪|nǎ|nào
國|guó|nước
人|rén|người
哪國人|nǎ guó rén|người nước nào
美國|Měiguó|Mỹ
日本|Rìběn|Nhật Bản
越南|Yuènán|Việt Nam
中國|Zhōngguó|Trung Quốc
這|zhè|đây, này
喝|hē|uống
茶|chá|trà
烏龍茶|wūlóngchá|trà ô long
咖啡|kāfēi|cà phê
好喝|hǎohē|ngon (đồ uống)
喜歡|xǐhuān|thích
要|yào|muốn, cần
接|jiē|đón`,
g:[
["是 (shì) và 不是 — “A là B”","A + 是 + B   |   A + 不是 + B","Nối hai danh từ. Phủ định dùng 不; 不 đọc thành bú trước âm thanh 4 (不是 = bú shì).",`我是美國人。|Wǒ shì Měiguó rén.|Tôi là người Mỹ.
他不是日本人。|Tā bú shì Rìběn rén.|Anh ấy không phải người Nhật.
這是王先生。|Zhè shì Wáng xiānsheng.|Đây là ông Vương.`],
["Câu hỏi 嗎 và 呢","Câu trần thuật + 嗎？   |   A，B呢？","嗎 biến câu thành câu hỏi có/không. 呢 dùng để hỏi lại: “còn… thì sao?”.",`你是臺灣人嗎？|Nǐ shì Táiwān rén ma?|Bạn là người Đài Loan à?
我喝茶，你呢？|Wǒ hē chá, nǐ ne?|Tôi uống trà, còn bạn?
我們喜歡喝咖啡，你們呢？|Wǒmen xǐhuān hē kāfēi, nǐmen ne?|Chúng tôi thích uống cà phê, còn các bạn?`],
["Câu hỏi chính-phản (A-not-A)","V + 不 + V？   |   是不是 / 喝不喝 / 要不要","Lặp động từ với 不 ở giữa để hỏi có/không, thay cho 嗎. Trả lời bằng động từ hoặc 不 + động từ.",`你是不是臺灣人？|Nǐ shì bu shì Táiwān rén?|Bạn có phải người Đài Loan không?
你喝不喝茶？|Nǐ hē bu hē chá?|Bạn có uống trà không?
你要不要喝咖啡？|Nǐ yào bu yào hē kāfēi?|Bạn có muốn uống cà phê không?`],
["Từ để hỏi: 什麼, 哪國人","Vị trí từ để hỏi = vị trí của câu trả lời","Không đảo từ để hỏi lên đầu câu và không dùng thêm 嗎.",`他姓什麼？|Tā xìng shénme?|Anh ấy họ gì?
你是哪國人？|Nǐ shì nǎ guó rén?|Bạn là người nước nào?
這是什麼？|Zhè shì shénme?|Đây là cái gì?`],
["很 + tính từ / 喜歡","S + 很 + Adj   |   S + 很 + 喜歡 + …","Tính từ làm vị ngữ thường cần 很 phía trước (nghĩa “rất” khá nhẹ).",`烏龍茶很好喝。|Wūlóngchá hěn hǎohē.|Trà ô long rất ngon.
我很喜歡喝咖啡。|Wǒ hěn xǐhuān hē kāfēi.|Tôi rất thích uống cà phê.
我們很喜歡臺灣。|Wǒmen hěn xǐhuān Táiwān.|Chúng tôi rất thích Đài Loan.`]
],
s:`Chào mừng bạn đến Đài Loan!|歡迎你來臺灣！|Huānyíng nǐ lái Táiwān!
Cảm ơn bạn đến đón chúng tôi.|謝謝你來接我們。|Xièxie nǐ lái jiē wǒmen.
Không có gì.|不客氣。|Bú kèqi.
Xin mời uống trà.|請喝茶。|Qǐng hē chá.
Bạn có uống trà không?|你要不要喝茶？|Nǐ yào bu yào hē chá?
Không, cảm ơn.|不要，謝謝。|Bú yào, xièxie.
Xin hỏi, bạn có phải người Nhật không?|請問你是不是日本人？|Qǐngwèn nǐ shì bu shì Rìběn rén?
Tôi không phải, còn bạn?|我不是，你呢？|Wǒ bú shì, nǐ ne?
Anh ấy họ gì?|他姓什麼？|Tā xìng shénme?
Anh ấy họ Lý.|他姓李。|Tā xìng Lǐ.
Cô ấy họ Vương, tên là Mỹ Nguyệt.|她姓王，叫美月。|Tā xìng Wáng, jiào Měiyuè.
Đây là ông Trần.|這是陳先生。|Zhè shì Chén xiānsheng.
Ông Trần là người Mỹ à?|陳先生是美國人嗎？|Chén xiānsheng shì Měiguó rén ma?
Trà ô long rất ngon.|烏龍茶很好喝。|Wūlóngchá hěn hǎohē.
Tôi rất thích uống cà phê.|我很喜歡喝咖啡。|Wǒ hěn xǐhuān hē kāfēi.
Chúng tôi thích uống cà phê, còn các bạn?|我們喜歡喝咖啡，你們呢？|Wǒmen xǐhuān hē kāfēi, nǐmen ne?
Tôi họ Lâm, tên là Tiểu Mỹ. Tôi là người Nhật. Tôi rất thích uống trà. Anh ấy họ Trần, tên là Đại Minh. Anh ấy là người Đài Loan, anh ấy thích uống cà phê. Chúng tôi đều thích Đài Loan.|我姓林，叫小美。我是日本人。我很喜歡喝茶。他姓陳，叫大明。他是臺灣人，他喜歡喝咖啡。我們都喜歡臺灣。|Wǒ xìng Lín, jiào Xiǎo Měi. Wǒ shì Rìběn rén. Wǒ hěn xǐhuān hē chá. Tā xìng Chén, jiào Dà Míng. Tā shì Táiwān rén, tā xǐhuān hē kāfēi. Wǒmen dōu xǐhuān Táiwān.`,
o:`Tôi là người Mỹ.|我 是 美國 人
Trà ô long rất ngon.|烏龍茶 很 好喝
Bạn có uống trà không?|你 要 不 要 喝 茶`},

{n:2,zh:"我的家人",vi:"Gia đình tôi",
v:`家人|jiārén|người nhà
家|jiā|nhà, gia đình
爸爸|bàba|bố
媽媽|māma|mẹ
哥哥|gēge|anh trai
姐姐|jiějie|chị gái
弟弟|dìdi|em trai
妹妹|mèimei|em gái
兄弟姐妹|xiōngdì jiěmèi|anh chị em
伯母|bómǔ|bác gái (mẹ của bạn)
老師|lǎoshī|giáo viên
有|yǒu|có
沒有|méiyǒu|không có
幾|jǐ|mấy
個|ge|cái, người (lượng từ)
張|zhāng|tấm, tờ (lượng từ)
兩|liǎng|hai (trước lượng từ)
一|yī|một
二|èr|hai
三|sān|ba
四|sì|bốn
五|wǔ|năm
六|liù|sáu
七|qī|bảy
八|bā|tám
九|jiǔ|chín
十|shí|mười
很多|hěn duō|rất nhiều
都|dōu|đều
的|de|của
誰|shéi|ai
看書|kàn shū|đọc sách
書|shū|sách
漂亮|piàoliang|xinh đẹp
好看|hǎokàn|đẹp, dễ nhìn
照片|zhàopiàn|ảnh
照相|zhào xiàng|chụp ảnh
房子|fángzi|ngôi nhà
進|jìn|vào`,
g:[
["有 (yǒu) và 沒有 — có / không có","A + 有 + B   |   A + 沒有 + B","Phủ định của 有 là 沒有, KHÔNG dùng 不有.",`我有兩個哥哥。|Wǒ yǒu liǎng ge gēge.|Tôi có hai anh trai.
我家沒有茶。|Wǒ jiā méiyǒu chá.|Nhà tôi không có trà.
你有沒有兄弟姐妹？|Nǐ yǒu méi yǒu xiōngdì jiěmèi?|Bạn có anh chị em không?`],
["Lượng từ 個, 張 và số 兩","Số + lượng từ + danh từ   (2 → 兩 trước lượng từ)","Đếm người/vật bắt buộc có lượng từ. 個 dùng cho người và nhiều vật; 張 dùng cho vật dẹt như ảnh, giấy.",`兩個姐姐|liǎng ge jiějie|hai chị gái
三張照片|sān zhāng zhàopiàn|ba tấm ảnh
六個人|liù ge rén|sáu người`],
["的 (de) — sở hữu","N1 + 的 + N2","的 nối người sở hữu với vật. Khi quan hệ thân thiết (gia đình) thường bỏ 的: 我媽媽.",`這是我的房子。|Zhè shì wǒ de fángzi.|Đây là nhà của tôi.
王老師的家很漂亮。|Wáng lǎoshī de jiā hěn piàoliang.|Nhà của thầy Vương rất đẹp.
這是你家人的照片嗎？|Zhè shì nǐ jiārén de zhàopiàn ma?|Đây là ảnh người nhà bạn à?`],
["都 (dōu) — đều","S + 都 + V   (都 đứng sau chủ ngữ, trước động từ)","Dùng khi chủ ngữ số nhiều. 都不 = đều không.",`我們都是老師。|Wǒmen dōu shì lǎoshī.|Chúng tôi đều là giáo viên.
他們都喜歡看書。|Tāmen dōu xǐhuān kàn shū.|Họ đều thích đọc sách.
我家人都不喜歡照相。|Wǒ jiārén dōu bù xǐhuān zhào xiàng.|Người nhà tôi đều không thích chụp ảnh.`],
["幾 (jǐ) — hỏi số lượng nhỏ","幾 + lượng từ + danh từ？","Dùng khi đoán số lượng không lớn (dưới 10).",`你家有幾個人？|Nǐ jiā yǒu jǐ ge rén?|Nhà bạn có mấy người?
你有幾張照片？|Nǐ yǒu jǐ zhāng zhàopiàn?|Bạn có mấy tấm ảnh?
你有幾個姐姐？|Nǐ yǒu jǐ ge jiějie?|Bạn có mấy chị gái?`]
],
s:`Nhà bạn có mấy người?|你家有幾個人？|Nǐ jiā yǒu jǐ ge rén?
Nhà tôi có sáu người.|我家有六個人。|Wǒ jiā yǒu liù ge rén.
Bạn có anh chị em không?|你有沒有兄弟姐妹？|Nǐ yǒu méi yǒu xiōngdì jiěmèi?
Tôi không có anh chị em.|我沒有兄弟姐妹。|Wǒ méiyǒu xiōngdì jiěmèi.
Anh ấy có hai người anh trai.|他有兩個哥哥。|Tā yǒu liǎng ge gēge.
Đây là ảnh người nhà bạn à?|這是你家人的照片嗎？|Zhè shì nǐ jiārén de zhàopiàn ma?
Đúng vậy, họ đều rất xinh đẹp.|是的，他們都很漂亮。|Shì de, tāmen dōu hěn piàoliang.
Ngôi nhà này rất đẹp.|這個房子很漂亮。|Zhège fángzi hěn piàoliang.
Đây có phải sách của bạn không?|這是不是你的書？|Zhè shì bu shì nǐ de shū?
Nhà tôi không có trà.|我家沒有茶。|Wǒ jiā méiyǒu chá.
Người nhà bạn đều không thích đọc sách.|你家人都不喜歡看書。|Nǐ jiārén dōu bù xǐhuān kàn shū.
Bố mẹ tôi đều thích uống trà.|我爸爸媽媽都喜歡喝茶。|Wǒ bàba māma dōu xǐhuān hē chá.
Em gái tôi thích chụp ảnh.|我妹妹喜歡照相。|Wǒ mèimei xǐhuān zhào xiàng.
Chào bác gái, mời vào!|伯母您好，請進！|Bómǔ nín hǎo, qǐng jìn!
Chị gái tôi là giáo viên.|我姐姐是老師。|Wǒ jiějie shì lǎoshī.
Chào các bạn, tôi họ Trần. Nhà tôi có năm người: bố, mẹ, anh trai, em gái và tôi. Bố mẹ tôi đều thích uống trà và đọc sách. Em gái tôi thích chụp ảnh, nhà tôi có rất nhiều ảnh đẹp.|你們好，我姓陳。我家有五個人，爸爸、媽媽、哥哥、妹妹和我。我爸爸媽媽都喜歡喝茶、看書。我妹妹喜歡照相，我家有很多很漂亮的照片。|Nǐmen hǎo, wǒ xìng Chén. Wǒ jiā yǒu wǔ ge rén, bàba, māma, gēge, mèimei hé wǒ. Wǒ bàba māma dōu xǐhuān hē chá, kàn shū. Wǒ mèimei xǐhuān zhào xiàng, wǒ jiā yǒu hěn duō hěn piàoliang de zhàopiàn.`,
o:`Nhà tôi có sáu người.|我 家 有 六 個 人
Anh ấy có hai người anh trai.|他 有 兩 個 哥哥
Ngôi nhà của bạn rất đẹp.|你 的 房子 很 漂亮`},

{n:3,zh:"週末做什麼？",vi:"Cuối tuần làm gì?",
v:`週末|zhōumò|cuối tuần
做|zuò|làm
常|cháng|thường
常常|chángcháng|thường xuyên
運動|yùndòng|vận động, thể thao
打|dǎ|đánh, chơi (bóng)
籃球|lánqiú|bóng rổ
棒球|bàngqiú|bóng chày
網球|wǎngqiú|quần vợt
足球|zúqiú|bóng đá
踢|tī|đá
游泳|yóuyǒng|bơi
電影|diànyǐng|phim
看電影|kàn diànyǐng|xem phim
聽|tīng|nghe
音樂|yīnyuè|âm nhạc
學|xué|học
中文|Zhōngwén|tiếng Trung
菜|cài|món ăn
臺灣菜|Táiwān cài|món Đài Loan
越南菜|Yuènán cài|món Việt Nam
日本菜|Rìběn cài|món Nhật
吃|chī|ăn
想|xiǎng|muốn, nghĩ
去|qù|đi
今天|jīntiān|hôm nay
明天|míngtiān|ngày mai
晚上|wǎnshang|buổi tối
好啊|hǎo a|được thôi
好玩|hǎowán|vui
覺得|juéde|cảm thấy
怎麼樣|zěnmeyàng|thế nào
吧|ba|nhé, đi
還是|háishi|hay là
一起|yìqǐ|cùng nhau
和|hé|và`,
g:[
["想 / 要 + động từ — muốn làm gì","S + 想 + V   |   S + 要 + V","想 = muốn, định (nhẹ nhàng); 要 = muốn, cần (mạnh hơn). Phủ định: 不想, 不要.",`週末我想去游泳。|Zhōumò wǒ xiǎng qù yóuyǒng.|Cuối tuần tôi muốn đi bơi.
他想學中文。|Tā xiǎng xué Zhōngwén.|Anh ấy muốn học tiếng Trung.
我們想吃越南菜。|Wǒmen xiǎng chī Yuènán cài.|Chúng tôi muốn ăn món Việt.`],
["Động từ đi với môn thể thao: 打, 踢, 游","打 + bóng (tay/vợt)   |   踢 + bóng (chân)","Bóng rổ/bóng chày/quần vợt dùng 打; bóng đá dùng 踢; 游泳 tự nó là động từ.",`我常打籃球。|Wǒ cháng dǎ lánqiú.|Tôi thường chơi bóng rổ.
他常去打網球。|Tā cháng qù dǎ wǎngqiú.|Anh ấy thường đi đánh quần vợt.
她很喜歡踢足球。|Tā hěn xǐhuān tī zúqiú.|Cô ấy rất thích đá bóng.`],
["吧 (ba) — đề nghị, gợi ý","Câu + 吧！","Đặt cuối câu để rủ rê hoặc đề nghị: “… nhé / … đi”.",`我們吃臺灣菜吧！|Wǒmen chī Táiwān cài ba!|Chúng ta ăn món Đài Loan nhé!
我們看臺灣電影吧！|Wǒmen kàn Táiwān diànyǐng ba!|Chúng ta xem phim Đài Loan đi!
好，我們走吧。|Hǎo, wǒmen zǒu ba.|Được, chúng ta đi thôi.`],
["還是 (háishi) — hay là (câu hỏi lựa chọn)","A 還是 B？","Dùng trong câu hỏi, đưa ra hai lựa chọn. Câu trần thuật dùng 或者.",`今天晚上你想看書還是看電影？|Jīntiān wǎnshang nǐ xiǎng kàn shū háishi kàn diànyǐng?|Tối nay bạn muốn đọc sách hay xem phim?
你想今天還是明天去？|Nǐ xiǎng jīntiān háishi míngtiān qù?|Bạn muốn đi hôm nay hay ngày mai?
你喝茶還是喝咖啡？|Nǐ hē chá háishi hē kāfēi?|Bạn uống trà hay cà phê?`],
["覺得 và 怎麼樣","S + 覺得 + câu   |   … ，怎麼樣？","覺得 = cảm thấy, nghĩ rằng. 怎麼樣 dùng để hỏi ý kiến hoặc đánh giá.",`你覺得打棒球好玩嗎？|Nǐ juéde dǎ bàngqiú hǎowán ma?|Bạn thấy chơi bóng chày vui không?
我覺得很好玩。|Wǒ juéde hěn hǎowán.|Tôi thấy rất vui.
我們明天去打籃球，怎麼樣？|Wǒmen míngtiān qù dǎ lánqiú, zěnmeyàng?|Ngày mai chúng ta đi chơi bóng rổ, được không?`],
["也 và 都 với tân ngữ ghép","S + 也 + V   |   N1、N2，S + 都 + V","也 = cũng; 都 = đều. Khi liệt kê hai thứ rồi tóm lại dùng 都.",`我常聽音樂，也常運動。|Wǒ cháng tīng yīnyuè, yě cháng yùndòng.|Tôi thường nghe nhạc, cũng thường vận động.
越南菜、日本菜，我都想吃。|Yuènán cài, Rìběn cài, wǒ dōu xiǎng chī.|Món Việt, món Nhật tôi đều muốn ăn.
他們都想學中文。|Tāmen dōu xiǎng xué Zhōngwén.|Họ đều muốn học tiếng Trung.`]
],
s:`Cuối tuần bạn thường làm gì?|週末你常做什麼？|Zhōumò nǐ cháng zuò shénme?
Cuối tuần tôi muốn đi bơi.|週末我想去游泳。|Zhōumò wǒ xiǎng qù yóuyǒng.
Anh ấy thường đi đánh quần vợt.|他常去打網球。|Tā cháng qù dǎ wǎngqiú.
Bạn thích làm gì?|你喜歡做什麼？|Nǐ xǐhuān zuò shénme?
Tôi thích đọc sách.|我喜歡看書。|Wǒ xǐhuān kàn shū.
Bạn thấy chơi bóng chày vui không?|你覺得打棒球好玩嗎？|Nǐ juéde dǎ bàngqiú hǎowán ma?
Tôi thấy rất vui.|我覺得很好玩。|Wǒ juéde hěn hǎowán.
Chúng ta ăn món Đài Loan nhé!|我們吃臺灣菜吧！|Wǒmen chī Táiwān cài ba!
Tối nay bạn muốn đọc sách hay xem phim?|今天晚上你想看書還是看電影？|Jīntiān wǎnshang nǐ xiǎng kàn shū háishi kàn diànyǐng?
Món Việt, món Nhật tôi đều muốn ăn.|越南菜、日本菜，我都想吃。|Yuènán cài, Rìběn cài, wǒ dōu xiǎng chī.
Ngày mai chúng ta đi chơi bóng rổ, được không?|我們明天去打籃球，怎麼樣？|Wǒmen míngtiān qù dǎ lánqiú, zěnmeyàng?
Được thôi, tôi cũng muốn đi.|好啊，我也想去。|Hǎo a, wǒ yě xiǎng qù.
Bố tôi thích thể thao và chụp ảnh.|我爸爸喜歡運動和照相。|Wǒ bàba xǐhuān yùndòng hé zhào xiàng.
Tôi thường nghe nhạc, cũng thường vận động.|我常聽音樂，也常運動。|Wǒ cháng tīng yīnyuè, yě cháng yùndòng.
Họ đều muốn học tiếng Trung.|他們都想學中文。|Tāmen dōu xiǎng xué Zhōngwén.
Nhà tôi có bốn người. Bố thích thể thao, cuối tuần thường đi đánh quần vợt. Mẹ thích nghe nhạc. Em gái thích xem phim, cũng thích bơi. Còn tôi? Tôi thích đá bóng, cuối tuần thường cùng bạn đi đá.|我家有四個人。爸爸喜歡運動，週末常去打網球。媽媽喜歡聽音樂。妹妹喜歡看電影，也喜歡游泳。我呢？我喜歡踢足球，週末常和朋友一起去踢。|Wǒ jiā yǒu sì ge rén. Bàba xǐhuān yùndòng, zhōumò cháng qù dǎ wǎngqiú. Māma xǐhuān tīng yīnyuè. Mèimei xǐhuān kàn diànyǐng, yě xǐhuān yóuyǒng. Wǒ ne? Wǒ xǐhuān tī zúqiú, zhōumò cháng hé péngyou yìqǐ qù tī.`,
o:`Cuối tuần tôi muốn đi bơi.|週末 我 想 去 游泳
Chúng ta ăn món Đài Loan nhé.|我們 吃 臺灣菜 吧
Tối nay bạn muốn đọc sách hay xem phim?|今天 晚上 你 想 看書 還是 看 電影`},

{n:4,zh:"請問，一共多少錢？",vi:"Xin hỏi, tổng cộng bao nhiêu tiền?",
v:`一共|yígòng|tổng cộng
多少|duōshǎo|bao nhiêu
錢|qián|tiền
塊|kuài|tệ (đồng)
元|yuán|nguyên
百|bǎi|trăm
千|qiān|nghìn
萬|wàn|vạn (mười nghìn)
杯|bēi|ly, cốc
支|zhī|chiếc (điện thoại, bút)
包子|bāozi|bánh bao
手機|shǒujī|điện thoại di động
新|xīn|mới
舊|jiù|cũ
貴|guì|đắt
便宜|piányí|rẻ
太|tài|quá
了|le|(trợ từ ngữ khí)
大|dà|to, lớn
小|xiǎo|nhỏ
熱|rè|nóng
冰|bīng|đá, lạnh
能|néng|có thể
幫|bāng|giúp
微波|wēibō|lò vi sóng
內用|nèiyòng|dùng tại chỗ
外帶|wàidài|mang đi
上網|shàng wǎng|lên mạng
賣|mài|bán
買|mǎi|mua
種|zhǒng|loại
這種|zhè zhǒng|loại này
老闆|lǎobǎn|ông chủ
早上|zǎoshang|buổi sáng
說|shuō|nói`,
g:[
["Lượng từ 杯, 個, 支","Số + lượng từ + danh từ","杯 cho đồ uống đựng trong ly; 個 cho bánh bao, quả bóng…; 支 cho điện thoại, bút.",`一杯咖啡|yì bēi kāfēi|một ly cà phê
三個包子|sān ge bāozi|ba cái bánh bao
一支手機|yì zhī shǒujī|một chiếc điện thoại`],
["Hỏi giá: 多少錢 / 一共多少錢","… 多少錢？   |   一共 + số + 塊","Giá nói bằng 塊 (khẩu ngữ) hoặc 元 (văn viết). 100 = 一百, 1.000 = 一千, 10.000 = 一萬.",`一杯咖啡多少錢？|Yì bēi kāfēi duōshǎo qián?|Một ly cà phê bao nhiêu tiền?
一共三百五十塊。|Yígòng sānbǎi wǔshí kuài.|Tổng cộng 350 tệ.
這支手機一萬多塊。|Zhè zhī shǒujī yí wàn duō kuài.|Chiếc điện thoại này hơn một vạn tệ.`],
["太…了 (quá…)","太 + Adj + 了","Diễn tả mức độ quá cao (thường là chê): đắt quá, cũ quá. Cũng dùng khen: 太好了!",`太貴了！|Tài guì le!|Đắt quá!
這支手機太舊了。|Zhè zhī shǒujī tài jiù le.|Chiếc điện thoại này cũ quá.
太好了！|Tài hǎo le!|Tuyệt quá!`],
["能 / 能不能 — có thể","S + 能 + V   |   S + 能不能 + V？","能 nói về khả năng, chức năng hoặc được phép làm gì.",`這支手機能上網。|Zhè zhī shǒujī néng shàng wǎng.|Chiếc điện thoại này lên mạng được.
這種手機能不能照相？|Zhè zhǒng shǒujī néng bu néng zhào xiàng?|Loại điện thoại này chụp ảnh được không?
請問，能不能幫我微波？|Qǐngwèn, néng bu néng bāng wǒ wēibō?|Xin hỏi, có thể hâm giúp tôi không?`],
["請幫我… / 內用還是外帶","請 + 幫我 + V   |   內用還是外帶？","請幫我 = làm ơn giúp tôi. Khi mua đồ ăn thường hỏi: dùng tại chỗ hay mang đi.",`請幫我微波。|Qǐng bāng wǒ wēibō.|Làm ơn hâm giúp tôi.
你要內用還是外帶？|Nǐ yào nèiyòng háishi wàidài?|Bạn dùng tại chỗ hay mang đi?
我要外帶。|Wǒ yào wàidài.|Tôi muốn mang đi.`]
],
s:`Xin hỏi, tổng cộng bao nhiêu tiền?|請問，一共多少錢？|Qǐngwèn, yígòng duōshǎo qián?
Một ly cà phê và ba cái bánh bao tổng cộng bao nhiêu?|一杯咖啡、三個包子，一共多少錢？|Yì bēi kāfēi, sān ge bāozi, yígòng duōshǎo qián?
Một cái bánh bao hai mươi tệ.|一個包子二十塊。|Yí ge bāozi èrshí kuài.
Tôi muốn hai ly cà phê nóng.|我要兩杯熱咖啡。|Wǒ yào liǎng bēi rè kāfēi.
Bạn dùng tại chỗ hay mang đi?|你要內用還是外帶？|Nǐ yào nèiyòng háishi wàidài?
Mang đi.|外帶。|Wàidài.
Làm ơn hâm nóng giúp tôi.|請幫我微波。|Qǐng bāng wǒ wēibō.
Chiếc điện thoại này lên mạng được không?|這支手機能不能上網？|Zhè zhī shǒujī néng bu néng shàng wǎng?
Chiếc điện thoại này cũ quá rồi.|這支手機太舊了。|Zhè zhī shǒujī tài jiù le.
Tôi muốn mua một chiếc điện thoại mới.|我想買一支新手機。|Wǒ xiǎng mǎi yì zhī xīn shǒujī.
Chiếc điện thoại này hơn một vạn tệ, đắt quá!|這支手機一萬多塊，太貴了！|Zhè zhī shǒujī yí wàn duō kuài, tài guì le!
Loại điện thoại này vừa chụp ảnh được vừa lên mạng được.|這種手機能照相也能上網。|Zhè zhǒng shǒujī néng zhào xiàng yě néng shàng wǎng.
Bạn thích điện thoại mới hay cũ?|你喜歡新手機還是舊手機？|Nǐ xǐhuān xīn shǒujī háishi jiù shǒujī?
Tôi muốn mua một quả bóng rổ, một quả bao nhiêu tiền?|我想買一個籃球，一個多少錢？|Wǒ xiǎng mǎi yí ge lánqiú, yí ge duōshǎo qián?
Đắt quá, rẻ một chút được không?|太貴了，可以便宜一點嗎？|Tài guì le, kěyǐ piányí yìdiǎn ma?
Sáng mai tôi muốn mua năm cái bánh bao, hai ly cà phê nóng và một ly trà ô long lớn. Ông chủ nói tổng cộng một trăm sáu mươi tệ. Tôi muốn mang đi.|明天早上我想買五個包子、兩杯熱咖啡和一杯大的烏龍茶。老闆說一共一百六十塊。我要外帶。|Míngtiān zǎoshang wǒ xiǎng mǎi wǔ ge bāozi, liǎng bēi rè kāfēi hé yì bēi dà de wūlóngchá. Lǎobǎn shuō yígòng yìbǎi liùshí kuài. Wǒ yào wàidài.`,
o:`Tổng cộng bao nhiêu tiền?|一共 多少 錢
Chiếc điện thoại này cũ quá rồi.|這 支 手機 太 舊 了
Tôi muốn hai ly cà phê.|我 要 兩 杯 咖啡`},

{n:5,zh:"牛肉麵真好吃",vi:"Mì bò thật ngon",
v:`牛肉麵|niúròu miàn|mì bò
麵|miàn|mì
牛肉|niúròu|thịt bò
湯|tāng|canh, nước dùng
碗|wǎn|bát
好吃|hǎochī|ngon (đồ ăn)
有名|yǒumíng|nổi tiếng
辣|là|cay
有一點|yǒu yìdiǎn|hơi
一點|yìdiǎn|một chút
不錯|búcuò|không tệ, khá tốt
臭豆腐|chòudòufu|đậu phụ thối
小吃|xiǎochī|món ăn vặt
餐廳|cāntīng|nhà hàng
會|huì|biết, có thể
做飯|zuò fàn|nấu cơm
自己|zìjǐ|tự mình
聽說|tīngshuō|nghe nói
甜點|tiándiǎn|đồ tráng miệng
晚飯|wǎnfàn|bữa tối
一定|yídìng|nhất định
點|diǎn|gọi (món)
找|zhǎo|tìm
到|dào|đến
真|zhēn|thật
可是|kěshì|nhưng
教|jiāo|dạy
得|de|(trợ từ bổ ngữ trạng thái)
這麼|zhème|như thế này`,
g:[
["會 (huì) — biết (làm được nhờ học)","S + 會 + V   |   S + 不會 + V","會 dùng cho kỹ năng học được: biết nấu ăn, biết nói tiếng Trung, biết đánh bóng.",`你會做飯嗎？|Nǐ huì zuò fàn ma?|Bạn biết nấu cơm không?
我會打網球，可是不會打籃球。|Wǒ huì dǎ wǎngqiú, kěshì bú huì dǎ lánqiú.|Tôi biết đánh quần vợt nhưng không biết chơi bóng rổ.
他會做甜點。|Tā huì zuò tiándiǎn.|Anh ấy biết làm đồ tráng miệng.`],
["V 得 + adj — đánh giá hành động","S + V + 得 + 怎麼樣 / 很好 / 不好","Nếu có tân ngữ, lặp động từ: 做飯做得好 / 足球踢得不錯.",`他足球踢得不錯。|Tā zúqiú tī de búcuò.|Anh ấy đá bóng khá giỏi.
你媽媽做飯做得怎麼樣？|Nǐ māma zuò fàn zuò de zěnmeyàng?|Mẹ bạn nấu ăn thế nào?
我做得不好。|Wǒ zuò de bù hǎo.|Tôi làm không tốt.`],
["有一點 + adj — hơi…","S + 有一點 + Adj","Thường dùng với nghĩa không hoàn toàn tích cực: hơi cay, hơi đắt, hơi xa.",`牛肉麵有一點辣。|Niúròu miàn yǒu yìdiǎn là.|Mì bò hơi cay.
這家餐廳的菜有一點貴。|Zhè jiā cāntīng de cài yǒu yìdiǎn guì.|Món ở nhà hàng này hơi đắt.
臭豆腐很好吃，可是有一點辣。|Chòudòufu hěn hǎochī, kěshì yǒu yìdiǎn là.|Đậu phụ thối rất ngon nhưng hơi cay.`],
["到 + nơi chốn + 來 / 去","S + 到 + nơi + 來 / 去","來 khi người nói ở nơi đó (hoặc hướng về người nói); 去 khi đi nơi khác.",`歡迎你到我家來。|Huānyíng nǐ dào wǒ jiā lái.|Chào mừng bạn đến nhà tôi.
他到我家來。|Tā dào wǒ jiā lái.|Anh ấy đến nhà tôi.
我到那家餐廳去。|Wǒ dào nà jiā cāntīng qù.|Tôi đến nhà hàng kia.`],
["聽說 / 真 / 這麼","聽說 + câu   |   真 + Adj   |   這麼 + Adj","聽說 = nghe nói; 真 = thật là (nhấn mạnh cảm thán); 這麼 = như thế này.",`聽說那家餐廳很有名。|Tīngshuō nà jiā cāntīng hěn yǒumíng.|Nghe nói nhà hàng đó rất nổi tiếng.
牛肉麵真好吃！|Niúròu miàn zhēn hǎochī!|Mì bò ngon thật!
這麼好喝，我也想喝。|Zhème hǎohē, wǒ yě xiǎng hē.|Ngon thế này, tôi cũng muốn uống.`]
],
s:`Mì bò thật ngon!|牛肉麵真好吃！|Niúròu miàn zhēn hǎochī!
Bạn muốn gọi bát lớn hay bát nhỏ?|你要點大碗還是小碗？|Nǐ yào diǎn dà wǎn háishi xiǎo wǎn?
Tôi muốn một bát nhỏ.|我要一小碗。|Wǒ yào yì xiǎo wǎn.
Tôi thấy mì bò rất ngon.|我覺得牛肉麵很好吃。|Wǒ juéde niúròu miàn hěn hǎochī.
Nghe nói quán đó rất nổi tiếng.|聽說那家店很有名。|Tīngshuō nà jiā diàn hěn yǒumíng.
Món ăn của nhà hàng đó hơi cay.|那家餐廳的菜有一點辣。|Nà jiā cāntīng de cài yǒu yìdiǎn là.
Bạn biết nấu cơm không?|你會做飯嗎？|Nǐ huì zuò fàn ma?
Biết, nhưng tôi nấu không ngon.|會，可是我做得不好。|Huì, kěshì wǒ zuò de bù hǎo.
Mẹ bạn nấu ăn thế nào?|你媽媽做飯做得怎麼樣？|Nǐ māma zuò fàn zuò de zěnmeyàng?
Nghe nói bạn đá bóng khá giỏi, dạy tôi được không?|聽說你足球踢得不錯，可以教我嗎？|Tīngshuō nǐ zúqiú tī de búcuò, kěyǐ jiāo wǒ ma?
Chào mừng bạn đến nhà tôi.|歡迎你到我家來。|Huānyíng nǐ dào wǒ jiā lái.
Tôi thích tự nấu mì bò.|我喜歡自己做牛肉麵。|Wǒ xǐhuān zìjǐ zuò niúròu miàn.
Nước dùng ngon, mì cũng ngon.|湯好喝，麵也好吃。|Tāng hǎohē, miàn yě hǎochī.
Rất nhiều người đều nói Đài Loan có nhiều món ăn vặt nổi tiếng.|很多人都說臺灣有不少有名的小吃。|Hěn duō rén dōu shuō Táiwān yǒu bù shǎo yǒumíng de xiǎochī.
Tối nay tôi muốn mời bạn đến nhà ăn tối. Tôi biết nấu cơm nhưng nấu không ngon lắm. Nghe nói quán mì bò bên cạnh trường rất nổi tiếng, mì ngon, nước dùng cũng ngon, chỉ hơi cay một chút. Ngày mai chúng ta cùng đi ăn nhé!|今天晚上我想請你到我家吃晚飯。我會做飯，可是做得不太好。聽說學校旁邊那家牛肉麵很有名，麵好吃，湯也好喝，只是有一點辣。明天我們一起去吃吧！|Jīntiān wǎnshang wǒ xiǎng qǐng nǐ dào wǒ jiā chī wǎnfàn. Wǒ huì zuò fàn, kěshì zuò de bú tài hǎo. Tīngshuō xuéxiào pángbiān nà jiā niúròu miàn hěn yǒumíng, miàn hǎochī, tāng yě hǎohē, zhǐshì yǒu yìdiǎn là. Míngtiān wǒmen yìqǐ qù chī ba!`,
o:`Mì bò thật ngon.|牛肉麵 真 好吃
Bạn biết nấu cơm không?|你 會 做飯 嗎
Nghe nói quán đó rất nổi tiếng.|聽說 那 家 店 很 有名`},

{n:6,zh:"他們學校在山上",vi:"Trường của họ ở trên núi",
v:`學校|xuéxiào|trường học
山|shān|núi
山上|shānshàng|trên núi
海|hǎi|biển
在|zài|ở
前面|qiánmiàn|phía trước
後面|hòumiàn|phía sau
旁邊|pángbiān|bên cạnh
外面|wàimiàn|bên ngoài
裡面|lǐmiàn|bên trong
上面|shàngmiàn|bên trên
下面|xiàmiàn|bên dưới
樓下|lóuxià|tầng dưới
一樓|yī lóu|tầng một
圖書館|túshūguǎn|thư viện
宿舍|sùshè|ký túc xá
商店|shāngdiàn|cửa hàng
咖啡店|kāfēidiàn|quán cà phê
游泳池|yóuyǒngchí|hồ bơi
大樓|dàlóu|tòa nhà
教室|jiàoshì|lớp học
遠|yuǎn|xa
近|jìn|gần
附近|fùjìn|gần đây
風景|fēngjǐng|phong cảnh
住|zhù|ở, sống
看看|kànkan|xem thử
哪裡|nǎlǐ|ở đâu
這裡|zhèlǐ|ở đây
那裡|nàlǐ|ở đó`,
g:[
["在 (zài) — ở: A + 在 + nơi chốn","Người/vật + 在 + nơi chốn   |   不在","Cho biết vị trí của một người hay vật đã xác định.",`圖書館在教室後面。|Túshūguǎn zài jiàoshì hòumiàn.|Thư viện ở phía sau lớp học.
他不在宿舍裡。|Tā bú zài sùshè lǐ.|Anh ấy không ở trong ký túc xá.
你在哪裡？|Nǐ zài nǎlǐ?|Bạn đang ở đâu?`],
["有 — có: nơi chốn + 有 + N","Nơi chốn + 有 + N (chưa xác định)","Dùng để nói ở nơi đó CÓ gì (vật/người chưa xác định).",`教室外面有兩個學生。|Jiàoshì wàimiàn yǒu liǎng ge xuésheng.|Bên ngoài lớp học có hai học sinh.
學校後面有很多商店。|Xuéxiào hòumiàn yǒu hěn duō shāngdiàn.|Phía sau trường có nhiều cửa hàng.
我家附近有海。|Wǒ jiā fùjìn yǒu hǎi.|Gần nhà tôi có biển.`],
["是 — là: nơi chốn + 是 + N","Nơi chốn + 是 + N (xác định, đầy đủ)","Khác 有: 是 cho biết nơi đó CHÍNH LÀ cái gì, thường chỉ có một.",`圖書館旁邊是學生宿舍。|Túshūguǎn pángbiān shì xuésheng sùshè.|Bên cạnh thư viện là ký túc xá.
游泳池旁邊是咖啡店。|Yóuyǒngchí pángbiān shì kāfēidiàn.|Bên cạnh hồ bơi là quán cà phê.
前面的那個人是我朋友。|Qiánmiàn de nàge rén shì wǒ péngyou.|Người phía trước kia là bạn tôi.`],
["Từ chỉ phương vị","N + 前面 / 後面 / 旁邊 / 上面 / 下面 / 裡面 / 外面","Đứng sau danh từ để chỉ vị trí tương đối. Có thể thêm 的: 學校的後面.",`咖啡店在圖書館的一樓。|Kāfēidiàn zài túshūguǎn de yī lóu.|Quán cà phê ở tầng một thư viện.
山上的風景很漂亮。|Shānshàng de fēngjǐng hěn piàoliang.|Phong cảnh trên núi rất đẹp.
她家前面有海。|Tā jiā qiánmiàn yǒu hǎi.|Phía trước nhà cô ấy có biển.`],
["遠 / 近 và 有一點遠","S + 遠不遠？   |   S + 有一點遠","Hỏi và trả lời về khoảng cách: 遠 = xa, 近 = gần.",`你們學校遠不遠？|Nǐmen xuéxiào yuǎn bu yuǎn?|Trường các bạn có xa không?
有一點遠。|Yǒu yìdiǎn yuǎn.|Hơi xa một chút.
圖書館不太遠。|Túshūguǎn bú tài yuǎn.|Thư viện không xa lắm.`]
],
s:`Trường của họ ở trên núi.|他們學校在山上。|Tāmen xuéxiào zài shānshàng.
Phong cảnh trên núi rất đẹp.|山上的風景很漂亮。|Shānshàng de fēngjǐng hěn piàoliang.
Thư viện ở phía sau lớp học.|圖書館在教室後面。|Túshūguǎn zài jiàoshì hòumiàn.
Bên cạnh thư viện là ký túc xá.|圖書館旁邊是學生宿舍。|Túshūguǎn pángbiān shì xuésheng sùshè.
Bên cạnh ký túc xá có hai cửa hàng nhỏ.|宿舍旁邊有兩家小商店。|Sùshè pángbiān yǒu liǎng jiā xiǎo shāngdiàn.
Bên cạnh hồ bơi là quán cà phê.|游泳池旁邊是咖啡店。|Yóuyǒngchí pángbiān shì kāfēidiàn.
Quán cà phê ở tầng một của thư viện.|咖啡店在圖書館的一樓。|Kāfēidiàn zài túshūguǎn de yī lóu.
Bên ngoài lớp học có hai học sinh.|教室外面有兩個學生。|Jiàoshì wàimiàn yǒu liǎng ge xuésheng.
Gần nhà tôi có biển.|我家附近有海。|Wǒ jiā fùjìn yǒu hǎi.
Trường của các bạn có xa không?|你們學校遠不遠？|Nǐmen xuéxiào yuǎn bu yuǎn?
Hơi xa một chút.|有一點遠。|Yǒu yìdiǎn yuǎn.
Người phía trước kia có phải bạn của bạn không?|前面的那個人是不是你朋友？|Qiánmiàn de nàge rén shì bu shì nǐ péngyou?
Gần nhà bạn có nhà hàng nào khá không?|你家附近有沒有不錯的餐廳？|Nǐ jiā fùjìn yǒu méi yǒu búcuò de cāntīng?
Tôi đến trường của họ tìm bạn.|我去他們學校找朋友。|Wǒ qù tāmen xuéxiào zhǎo péngyou.
Trường của tôi ở trên núi, phong cảnh rất đẹp. Trong trường có ba tòa nhà. Tòa này là lớp học, phía sau lớp học là thư viện. Bên cạnh thư viện có một quán cà phê, phía trước quán có nhà hàng. Tôi thường ăn cơm và đọc sách ở đó.|我的學校在山上，風景很漂亮。學校裡有三棟大樓。這棟大樓是教室，教室後面是圖書館。圖書館旁邊有一家咖啡店，咖啡店前面有餐廳。我常常在那裡吃飯、看書。|Wǒ de xuéxiào zài shānshàng, fēngjǐng hěn piàoliang. Xuéxiào lǐ yǒu sān dòng dàlóu. Zhè dòng dàlóu shì jiàoshì, jiàoshì hòumiàn shì túshūguǎn. Túshūguǎn pángbiān yǒu yì jiā kāfēidiàn, kāfēidiàn qiánmiàn yǒu cāntīng. Wǒ chángcháng zài nàlǐ chī fàn, kàn shū.`,
o:`Trường của họ ở trên núi.|他們 學校 在 山上
Thư viện ở phía sau lớp học.|圖書館 在 教室 後面
Bên ngoài lớp học có hai học sinh.|教室 外面 有 兩 個 學生`},

{n:7,zh:"早上九點去KTV",vi:"9 giờ sáng đi KTV",
v:`點|diǎn|giờ
分|fēn|phút
半|bàn|rưỡi
刻|kè|15 phút
現在|xiànzài|bây giờ
幾點|jǐ diǎn|mấy giờ
什麼時候|shénme shíhou|khi nào
時候|shíhou|lúc, khi
中午|zhōngwǔ|buổi trưa
下午|xiàwǔ|buổi chiều
昨天|zuótiān|hôm qua
後天|hòutiān|ngày kia
每天|měitiān|mỗi ngày
每|měi|mỗi
從|cóng|từ
有空|yǒu kòng|rảnh
有事|yǒu shì|có việc
忙|máng|bận
最近|zuìjìn|gần đây
見面|jiàn miàn|gặp mặt
上課|shàng kè|vào học
下課|xià kè|tan học
開始|kāishǐ|bắt đầu
結束|jiéshù|kết thúc
比賽|bǐsài|trận đấu
剛|gāng|vừa mới
唱歌|chàng gē|hát
書法|shūfǎ|thư pháp
寫|xiě|viết
為什麼|wèishénme|tại sao
因為|yīnwèi|bởi vì
沒問題|méi wèntí|không vấn đề
下次|xiàcì|lần sau
等一下|děng yíxià|đợi một chút
KTV|KTV|KTV (karaoke)`,
g:[
["Nói giờ: 點, 分, 半, 刻","Số + 點 (+ số + 分)   |   … 點半","2 giờ nói 兩點. “Rưỡi” = 半. Hỏi: 現在幾點？",`現在三點半。|Xiànzài sān diǎn bàn.|Bây giờ là ba giờ rưỡi.
比賽四點五十結束。|Bǐsài sì diǎn wǔshí jiéshù.|Trận đấu 4 giờ 50 kết thúc.
我們的中文課八點十分開始。|Wǒmen de Zhōngwén kè bā diǎn shí fēn kāishǐ.|Lớp tiếng Trung của chúng tôi 8 giờ 10 bắt đầu.`],
["Thời gian đứng TRƯỚC động từ","S + (thời gian) + (nơi chốn) + V","Từ chỉ thời gian đứng sau chủ ngữ (hoặc đầu câu), luôn trước động từ.",`我早上九點去KTV。|Wǒ zǎoshang jiǔ diǎn qù KTV.|Chín giờ sáng tôi đi KTV.
你什麼時候有空？|Nǐ shénme shíhou yǒu kòng?|Khi nào bạn rảnh?
我們明天下午三點在咖啡店見面。|Wǒmen míngtiān xiàwǔ sān diǎn zài kāfēidiàn jiàn miàn.|Chiều mai 3 giờ chúng ta gặp ở quán cà phê.`],
["從…到… — từ… đến…","從 + thời điểm/nơi + 到 + thời điểm/nơi","Dùng cho khoảng thời gian hoặc khoảng cách.",`比賽從四點到六點。|Bǐsài cóng sì diǎn dào liù diǎn.|Trận đấu từ 4 giờ đến 6 giờ.
他後天從早上到晚上都沒空。|Tā hòutiān cóng zǎoshang dào wǎnshang dōu méi kòng.|Ngày kia anh ấy từ sáng đến tối đều không rảnh.
從我家到學校|Cóng wǒ jiā dào xuéxiào|từ nhà tôi đến trường`],
["每 … 都 — mỗi… đều…","每 + (lượng từ) + N + 都 + V","每天 = mỗi ngày; 每個人 = mỗi người. Luôn đi với 都.",`你每天都要上網嗎？|Nǐ měitiān dōu yào shàng wǎng ma?|Mỗi ngày bạn đều phải lên mạng à?
每個人都想去。|Měi ge rén dōu xiǎng qù.|Mỗi người đều muốn đi.
我每天晚上都去運動。|Wǒ měitiān wǎnshang dōu qù yùndòng.|Tối nào tôi cũng đi vận động.`],
["為什麼 — tại sao; 因為 — bởi vì","為什麼 + câu？   |   因為 + lý do","Từ để hỏi vẫn đặt ở vị trí trong câu; trả lời bằng 因為.",`你哥哥為什麼現在吃晚飯？|Nǐ gēge wèishénme xiànzài chī wǎnfàn?|Tại sao anh trai bạn bây giờ mới ăn tối?
因為他今天晚上太忙了。|Yīnwèi tā jīntiān wǎnshang tài máng le.|Vì tối nay anh ấy quá bận.
你為什麼不來？|Nǐ wèishénme bù lái?|Tại sao bạn không đến?`]
],
s:`Bây giờ là mấy giờ?|現在幾點？|Xiànzài jǐ diǎn?
Bây giờ là ba giờ rưỡi.|現在三點半。|Xiànzài sān diǎn bàn.
Sáng chín giờ chúng ta đi KTV nhé?|我們早上九點去KTV，好嗎？|Wǒmen zǎoshang jiǔ diǎn qù KTV, hǎo ma?
Khi nào bạn rảnh?|你什麼時候有空？|Nǐ shénme shíhou yǒu kòng?
Ngày kia từ sáng đến tối tôi đều không rảnh.|後天從早上到晚上我都沒空。|Hòutiān cóng zǎoshang dào wǎnshang wǒ dōu méi kòng.
Trận đấu mấy giờ kết thúc?|比賽幾點結束？|Bǐsài jǐ diǎn jiéshù?
Bốn giờ năm mươi.|四點五十。|Sì diǎn wǔshí.
Lớp tiếng Trung của chúng tôi mỗi ngày tám giờ mười phút bắt đầu.|我們的中文課每天八點十分開始。|Wǒmen de Zhōngwén kè měitiān bā diǎn shí fēn kāishǐ.
Hôm qua tôi và bạn vừa mới bắt đầu học thư pháp.|昨天我和朋友剛開始學書法。|Zuótiān wǒ hé péngyou gāng kāishǐ xué shūfǎ.
Tại sao anh trai bạn bây giờ mới ăn tối?|你哥哥為什麼現在吃晚飯？|Nǐ gēge wèishénme xiànzài chī wǎnfàn?
Vì tối nay anh ấy quá bận.|因為他今天晚上太忙了。|Yīnwèi tā jīntiān wǎnshang tài máng le.
Bây giờ bạn có việc không?|你現在有事嗎？|Nǐ xiànzài yǒu shì ma?
Tối nay tôi có việc, lần sau nhé.|我晚上有事，下次吧。|Wǒ wǎnshang yǒu shì, xiàcì ba.
Không vấn đề!|沒問題！|Méi wèntí!
Chiều mai ba giờ chúng ta gặp nhau ở quán cà phê.|我們明天下午三點在咖啡店見面。|Wǒmen míngtiān xiàwǔ sān diǎn zài kāfēidiàn jiàn miàn.
Gần đây tôi rất bận. Mỗi ngày tám giờ sáng tôi vào học, mười hai giờ tan học. Buổi chiều tôi đọc sách đến bốn giờ, sau đó đi bơi. Buổi tối tôi nghe nhạc. Thứ Bảy tôi rảnh, bạn có muốn cùng đi KTV hát không?|最近我很忙。每天早上八點上課，十二點下課。下午我看書到四點，然後去游泳。晚上我聽音樂。星期六我有空，你要不要一起去KTV唱歌？|Zuìjìn wǒ hěn máng. Měitiān zǎoshang bā diǎn shàng kè, shí'èr diǎn xià kè. Xiàwǔ wǒ kàn shū dào sì diǎn, ránhòu qù yóuyǒng. Wǎnshang wǒ tīng yīnyuè. Xīngqíliù wǒ yǒu kòng, nǐ yào bu yào yìqǐ qù KTV chàng gē?`,
o:`Bây giờ là ba giờ rưỡi.|現在 三 點 半
Khi nào bạn rảnh?|你 什麼 時候 有 空
Tối nay tôi có việc.|我 晚上 有 事`},

{n:8,zh:"坐火車去臺南",vi:"Đi tàu hỏa đến Đài Nam",
v:`坐|zuò|ngồi, đi (phương tiện)
騎|qí|cưỡi, đi (xe máy/xe đạp)
載|zài|chở
火車|huǒchē|tàu hỏa
高鐵|gāotiě|tàu cao tốc
公車|gōngchē|xe buýt
捷運|jiéyùn|tàu điện ngầm (MRT)
機車|jīchē|xe máy
計程車|jìchéngchē|taxi
車票|chēpiào|vé tàu xe
票|piào|vé
車站|chēzhàn|nhà ga, trạm
臺南|Táinán|Đài Nam
故宮|Gùgōng|Cố Cung
博物院|bówùyuàn|viện bảo tàng
便利商店|biànlì shāngdiàn|cửa hàng tiện lợi
慢|màn|chậm
快|kuài|nhanh
舒服|shūfu|thoải mái
比|bǐ|so với
比較|bǐjiào|tương đối, hơn
又|yòu|vừa… vừa…
差不多|chàbuduō|gần như, xấp xỉ
知道|zhīdào|biết
但是|dànshì|nhưng
跟|gēn|cùng, với
古代|gǔdài|cổ đại
東西|dōngxi|đồ vật
網路|wǎnglù|mạng
怎麼|zěnme|như thế nào`,
g:[
["坐 / 騎 + phương tiện + 去; 怎麼去","S + 坐 / 騎 + phương tiện + 去 + nơi   |   怎麼 + 去？","坐 dùng cho phương tiện ngồi (tàu, xe buýt, taxi); 騎 dùng cho xe hai bánh. 怎麼 hỏi cách thức.",`我坐高鐵去臺南。|Wǒ zuò gāotiě qù Táinán.|Tôi đi tàu cao tốc đến Đài Nam.
他騎機車去學校。|Tā qí jīchē qù xuéxiào.|Anh ấy đi xe máy đến trường.
你怎麼去故宮？|Nǐ zěnme qù Gùgōng?|Bạn đi Cố Cung bằng cách nào?`],
["比 (bǐ) — so sánh hơn","A + 比 + B + Adj","So sánh hai đối tượng. KHÔNG dùng 很 trước tính từ trong câu 比.",`高鐵比火車快。|Gāotiě bǐ huǒchē kuài.|Tàu cao tốc nhanh hơn tàu hỏa.
我的手機比你的貴。|Wǒ de shǒujī bǐ nǐ de guì.|Điện thoại của tôi đắt hơn của bạn.
這個電影比那個好看。|Zhège diànyǐng bǐ nàge hǎokàn.|Phim này hay hơn phim kia.`],
["比較 và 又…又…","S + 比較 + Adj   |   S + 又 + Adj1 + 又 + Adj2","比較 = tương đối, hơn (không nêu đối tượng so sánh). 又…又… = vừa… vừa…",`坐高鐵比較快。|Zuò gāotiě bǐjiào kuài.|Đi tàu cao tốc nhanh hơn.
這家店又好吃又便宜。|Zhè jiā diàn yòu hǎochī yòu piányí.|Quán này vừa ngon vừa rẻ.
坐計程車又快又舒服。|Zuò jìchéngchē yòu kuài yòu shūfu.|Đi taxi vừa nhanh vừa thoải mái.`],
["跟 (gēn) — cùng với","S + 跟 + người + (一起) + V","Chỉ người cùng làm hành động. Phủ định đặt 不 trước 跟.",`我想跟朋友去看電影。|Wǒ xiǎng gēn péngyou qù kàn diànyǐng.|Tôi muốn cùng bạn đi xem phim.
他不跟我去，他跟同學去。|Tā bù gēn wǒ qù, tā gēn tóngxué qù.|Anh ấy không đi với tôi, anh ấy đi với bạn học.
我常跟家人去吃飯。|Wǒ cháng gēn jiārén qù chī fàn.|Tôi thường cùng gia đình đi ăn.`],
["可是 / 但是 — nhưng","Câu 1，可是 / 但是 + câu 2","Nối hai vế đối lập. 但是 trang trọng hơn một chút.",`坐高鐵比較快，但是太貴了。|Zuò gāotiě bǐjiào kuài, dànshì tài guì le.|Đi tàu cao tốc nhanh hơn, nhưng đắt quá.
我想去，可是沒有空。|Wǒ xiǎng qù, kěshì méiyǒu kòng.|Tôi muốn đi nhưng không rảnh.
我知道，可是我不想去。|Wǒ zhīdào, kěshì wǒ bù xiǎng qù.|Tôi biết, nhưng tôi không muốn đi.`]
],
s:`Tôi muốn đi tàu hỏa đến Đài Nam.|我想坐火車去臺南。|Wǒ xiǎng zuò huǒchē qù Táinán.
Ngày mai tôi đến nhà bạn bằng cách nào?|明天我怎麼去你家？|Míngtiān wǒ zěnme qù nǐ jiā?
Tôi đi xe máy chở bạn.|我騎機車載你。|Wǒ qí jīchē zài nǐ.
Tàu cao tốc nhanh hơn tàu hỏa.|高鐵比火車快。|Gāotiě bǐ huǒchē kuài.
Đi tàu hỏa hơi chậm.|坐火車有一點慢。|Zuò huǒchē yǒu yìdiǎn màn.
Đi taxi vừa nhanh vừa thoải mái.|坐計程車又快又舒服。|Zuò jìchéngchē yòu kuài yòu shūfu.
Vé tàu cao tốc có đắt không?|高鐵車票貴嗎？|Gāotiě chēpiào guì ma?
Bạn biết mua vé tàu cao tốc ở đâu không?|你知道在哪裡買高鐵票嗎？|Nǐ zhīdào zài nǎlǐ mǎi gāotiě piào ma?
Ở cửa hàng tiện lợi hoặc ga tàu cao tốc.|便利商店或是高鐵站。|Biànlì shāngdiàn huòshi gāotiězhàn.
Bạn có thể mua vé trên mạng.|你可以在網路上買票。|Nǐ kěyǐ zài wǎnglù shàng mǎi piào.
Đi tàu cao tốc nhanh hơn, nhưng đắt quá.|坐高鐵比較快，但是太貴了。|Zuò gāotiě bǐjiào kuài, dànshì tài guì le.
Điện thoại của bạn có đắt hơn của tôi không?|你的手機比我的貴嗎？|Nǐ de shǒujī bǐ wǒ de guì ma?
Cố Cung không có tàu điện ngầm, phải đi xe buýt.|故宮沒有捷運，要坐公車。|Gùgōng méiyǒu jiéyùn, yào zuò gōngchē.
Tôi muốn cùng bạn đi xem phim.|我想跟朋友去看電影。|Wǒ xiǎng gēn péngyou qù kàn diànyǐng.
Cuối tuần này tôi muốn cùng bạn đi Đài Nam chơi. Đi tàu cao tốc nhanh hơn nhưng vé rất đắt. Đi tàu hỏa hơi chậm nhưng rẻ hơn, còn có thể ngắm phong cảnh. Chúng tôi quyết định đi tàu hỏa.|這個週末我想跟朋友去臺南玩。坐高鐵比較快，但是車票很貴。坐火車有一點慢，可是比較便宜，也可以看風景。我們決定坐火車去。|Zhège zhōumò wǒ xiǎng gēn péngyou qù Táinán wán. Zuò gāotiě bǐjiào kuài, dànshì chēpiào hěn guì. Zuò huǒchē yǒu yìdiǎn màn, kěshì bǐjiào piányí, yě kěyǐ kàn fēngjǐng. Wǒmen juédìng zuò huǒchē qù.`,
o:`Tôi muốn đi tàu hỏa đến Đài Nam.|我 想 坐 火車 去 臺南
Tàu cao tốc nhanh hơn tàu hỏa.|高鐵 比 火車 快
Tôi đi xe máy chở bạn.|我 騎 機車 載 你`}
];
