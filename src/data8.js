// Quyển 2–6 (tự sinh bằng tools/mkbook.py từ tools/books/*.txt)
const BOOKS={};
BOOKS[2]={lessons:[{n:1,zh:"請問，到師大怎麼走？",vi:"Xin hỏi, đến Shida đi thế nào?",v:`走|zǒu|đi (đến)|Vi
路人|lùrén|người đi đường|N
幫忙|bāngmáng|giúp đỡ|V-sep
迷路|mílù|bị lạc đường|Vp-sep
下|xià|tiếp theo, kế tiếp|Det
路口|lùkǒu|ngã tư, giao lộ|N
段|duàn|đoạn (đường)|N
過|guò|đi qua, băng qua|V
第|dì|thứ (số thứ tự)|Det
紅綠燈|hónglǜdēng|đèn giao thông|N
告訴|gàosù|nói cho biết|V
提款機|tíkuǎnjī|máy ATM|N
超商|chāoshāng|cửa hàng tiện lợi|N
應該|yīnggāi|nên, hẳn là|Vaux
郵局|yóujú|bưu điện|N
提|tí|rút (tiền)|V
那邊|nàbiān|bên đó|N
師大|shīdà|Đại học Sư phạm Quốc gia Đài Loan (Shida)|Name
和平東路|hépíngdōnglù|đường Hòa Bình Đông|Name
往前|wǎngqián|về phía trước|Phrase
右轉|yòuzhuǎn|rẽ phải|Phrase
聽起來|tīngqǐlái|nghe có vẻ|Phrase
看見|kànjiàn|nhìn thấy|Vpt
下載|xiàzài|tải xuống|V
地圖|dìtú|bản đồ|N
好用|hǎoyòng|dễ dùng|Vs
著|zhù|đang (trợ từ tiếp diễn)|Ptc
日用品|rìyòngpǐn|đồ dùng hằng ngày|N
經過|jīngguò|đi ngang qua|V
巷子|xiàngzi|ngõ, hẻm|N
餓|è|đói|Vs
一邊|yìbiān|vừa… vừa…|Adv
發現|fāxiàn|phát hiện|Vpt
離|lí|cách|Prep
背包|bēibāo|ba lô|N
正好|zhènghǎo|vừa hay, đúng lúc|Adv
最後|zuìhòu|cuối cùng|Adv
枝|zhī|cây (lượng từ của bút)|M
筆|bǐ|bút|N
本|běn|quyển (lượng từ của sách)|M
本子|běnzi|vở|N
左轉|zuǒzhuǎn|rẽ trái|Phrase
麵店|miàndiàn|tiệm mì|Phrase`,d:{l:`路人|你需要我幫忙嗎？|nǐ xū yào wǒ bāng máng ma？|Bạn cần tôi giúp không?
安同|我好像迷路了。|wǒ hǎo xiàng mí lù le。|Hình như tôi bị lạc đường.
路人|你要去哪裡？|nǐ yào qù nǎ lǐ？|Bạn muốn đi đâu?
安同|請問，到師大怎麼走？|qǐng wèn， dào shī dà zěn me zǒu？|Xin hỏi, đến Shida đi thế nào?
路人|你從這裡往前走，到了下一個路口，右轉——|nǐ cóng zhè lǐ wǎng qián zǒu， dào le xià yí gè lù kǒu， yòu zhuǎn ——|Bạn đi thẳng từ đây, đến ngã tư tiếp theo thì rẽ phải——
安同|右轉就到了嗎？聽起來不遠。|yòu zhuǎn jiù dào le ma？ tīng qǐ lái bù yuǎn。|Rẽ phải là tới ạ? Nghe có vẻ không xa.
路人|還沒到！你右轉以後，是和平東路一段，再往前一直走，過了第二個紅綠燈，就看見師大了。|hái méi dào！ nǐ yòu zhuǎn yǐ hòu， shì hé píng dōng lù yí duàn， zài wǎng qián yì zhí zǒu， guò le dì èr gè hóng lǜ dēng， jiù kàn jiàn shī dà le。|Chưa tới đâu! Sau khi rẽ phải là đường Hòa Bình Đông đoạn 1, cứ đi thẳng tiếp, qua đèn đỏ thứ hai là thấy Shida.
安同|謝謝，我知道了。|xiè xiè， wǒ zhī dào le。|Cảm ơn, tôi hiểu rồi.
路人|你的中文很好。|nǐ de zhōng wén hěn hǎo。|Tiếng Trung của bạn rất giỏi.
安同|謝謝，我還得多學一點。能不能再告訴我，這附近有沒有提款機？|xiè xiè， wǒ hái dé duō xué yì diǎn。 néng bù néng zài gào sù wǒ， zhè fù jìn yǒu méi yǒu tí kuǎn jī？|Cảm ơn, tôi còn phải học thêm. Bạn có thể nói thêm gần đây có máy ATM không?
路人|從這裡往和平東路走，好像沒有銀行，不過大部分的超商裡應該都有。|cóng zhè lǐ wǎng hé píng dōng lù zǒu， hǎo xiàng méi yǒu yín xíng， bú guò dà bù fèn de chāo shāng lǐ yīng gāi dōu yǒu。|Từ đây đi về phía đường Hòa Bình Đông hình như không có ngân hàng, nhưng phần lớn cửa hàng tiện lợi chắc đều có.
安同|你說的「超商」是「7-11」那種便利商店嗎？|nǐ shuō de 「chāo shāng」 shì 「7-11」 nà zhǒng biàn lì shāng diàn ma？|"Siêu thương" bạn nói là cửa hàng tiện lợi kiểu 7-11 phải không?
路人|是的。對了，郵局也可以提錢。|shì de。 duì le， yóu jú yě kě yǐ tí qián。|Đúng vậy. À, bưu điện cũng rút tiền được.
安同|我看見了，那邊有一家便利商店。謝謝，謝謝！|wǒ kàn jiàn le， nà biān yǒu yì jiā biàn lì shāng diàn。 xiè xiè， xiè xiè！|Tôi thấy rồi, bên kia có một cửa hàng tiện lợi. Cảm ơn, cảm ơn!
路人|不客氣。|bú kè qì。|Không có gì.
短文|馬安同下載了新的地圖到手機裡，他找白如玉跟他在師大附近走走，試試地圖好用不好用。|mǎ ān tóng xià zài le xīn de dì tú dào shǒu jī lǐ， tā zhǎo bái rú yù gēn tā zài shī dà fù jìn zǒu zǒu， shì shì dì tú hǎo yòng bù hǎo yòng。|Mã An Đồng tải bản đồ mới vào điện thoại, rủ Bạch Như Ngọc đi dạo quanh Shida cùng để thử bản đồ có dễ dùng không.
短文|他們看著地圖，從學校門口往左轉，過了和平東路就到了師大路。|tā men kàn zhù dì tú， cóng xué xiào mén kǒu wǎng zuǒ zhuǎn， guò le hé píng dōng lù jiù dào le shī dà lù。|Hai người nhìn bản đồ, từ cổng trường rẽ trái, qua đường Hòa Bình Đông là đến đường Shida.
短文|在師大路上，他們看見很多賣小吃的店，也有賣衣服和日用品的商店。|zài shī dà lù shàng， tā men kàn jiàn hěn duō mài xiǎo chī de diàn， yě yǒu mài yī fú hé rì yòng pǐn de shāng diàn。|Trên đường Shida, họ thấy nhiều quán bán đồ ăn vặt, cũng có cửa hàng bán quần áo và đồ dùng hằng ngày.
短文|他們經過兩個小巷子再右轉，這邊的商店比師大路的多。|tā men jīng guò liǎng gè xiǎo xiàng zi zài yòu zhuǎn， zhè biān de shāng diàn bǐ shī dà lù de duō。|Họ đi qua hai con hẻm nhỏ rồi rẽ phải, bên này cửa hàng nhiều hơn đường Shida.
短文|他們逛了半天，白如玉覺得有一點餓，所以他們到一家麵店，點了兩碗牛肉麵。|tā men guàng le bàn tiān， bái rú yù jué dé yǒu yì diǎn è， suǒ yǐ tā men dào yì jiā miàn diàn， diǎn le liǎng wǎn niú ròu miàn。|Dạo nửa ngày, Bạch Như Ngọc thấy hơi đói nên họ vào một tiệm mì, gọi hai tô mì bò.
短文|他們一邊吃麵，一邊看著手機裡的地圖，發現離麵店不遠的巷子裡有一家賣背包的店。|tā men yì biān chī miàn， yì biān kàn zhù shǒu jī lǐ de dì tú， fā xiàn lí miàn diàn bù yuǎn de xiàng zi lǐ yǒu yì jiā mài bēi bāo de diàn。|Vừa ăn mì họ vừa xem bản đồ trong điện thoại, phát hiện trong hẻm không xa tiệm mì có một cửa hàng bán ba lô.
短文|馬安同正好想買一個背包，所以決定吃了麵就到這家店去看看。|mǎ ān tóng zhèng hǎo xiǎng mǎi yí gè bēi bāo， suǒ yǐ jué dìng chī le miàn jiù dào zhè jiā diàn qù kàn kàn。|Mã An Đồng đúng lúc muốn mua một cái ba lô nên quyết định ăn mì xong sẽ đến cửa hàng này xem.
短文|最後，馬安同買了一個背包，白如玉也在附近買了兩枝筆和一本本子。|zuì hòu， mǎ ān tóng mǎi le yí gè bēi bāo， bái rú yù yě zài fù jìn mǎi le liǎng zhī bǐ hé yì běn běn zi。|Cuối cùng, Mã An Đồng mua một cái ba lô, Bạch Như Ngọc cũng mua gần đó hai cây bút và một quyển vở.
短文|馬安同和白如玉都覺得，逛師大附近的店真有意思，吃的東西和日用品也很便宜。|mǎ ān tóng hé bái rú yù dōu jué dé， guàng shī dà fù jìn de diàn zhēn yǒu yì si， chī de dōng xī hé rì yòng pǐn yě hěn pián yi。|Cả hai đều thấy dạo các cửa hàng quanh Shida rất thú vị, đồ ăn và đồ dùng hằng ngày cũng rất rẻ.`}},{n:2,zh:"還是坐捷運吧！",vi:"Đi tàu điện ngầm (MRT) thì hơn!",v:`還是|háishì|nên, tốt hơn là|Adv
早|zǎo|chào buổi sáng|Vs
約|yuē|hẹn, mời (vào lúc cụ thể)|V
對面|duìmiàn|đối diện, phía bên kia|N
直接|zhíjiē|trực tiếp|Adv
不必|búbì|không cần, không nhất thiết|Adv
換|huàn|đổi, chuyển (xe)|V
車站|chēzhàn|bến xe, ga tàu|N
麻煩|máfán|phiền phức|Vs
趕快|gǎnkuài|mau lên, nhanh lên|Adv
走|zǒu|rời đi, đi|V
班次|bāncì|chuyến (xe, tàu, máy bay)|N
禮拜|lǐbài|tuần|N
見|jiàn|gặp|V
電腦展|diànnǎozhǎn|triển lãm máy tính|Name
世貿|shìmào|Trung tâm Thương mại Thế giới|Name
展覽館|zhǎnlǎnguǎn|nhà triển lãm|N
台北101|táiběi101|Taipei 101 (tòa nhà cao nhất Đài Loan)|Name
台北|táiběi|Đài Bắc|Name
2號線|2hàoxiàn|tuyến số 2 (của MRT Đài Bắc)|Phrase
別急|biéjí|đừng vội|Phrase
飛機|fēijī|máy bay|N
轉機|zhuǎnjī|chuyển máy bay|V-sep
機場|jīchǎng|sân bay|N
巴士|bāshì|xe buýt|N
市區|shìqū|nội thành, trung tâm thành phố|N
下|xià|xuống (xe)|V
交通|jiāotōng|giao thông|N
便利|biànlì|tiện lợi|Vs
到處|dàochù|khắp nơi|Adv
路線|lùxiàn|tuyến đường|N
複雜|fùzá|phức tạp|Vs
輕鬆|qīngsōng|nhẹ nhàng, thoải mái|Vs
東部|dōngbù|miền đông|N
海邊|hǎibiān|bờ biển|N
島|dǎo|đảo|N
搭|dā|đi (xe, tàu, máy bay…)|V
船|chuán|thuyền, tàu thủy|N
地|dì|(trợ từ trạng ngữ)|Ptc
美美|měiměi|Mỹ Mỹ (tên một cô gái)|Name
法國|fǎguó|nước Pháp|Name
歐洲|ōuzhōu|châu Âu|Name
悠遊卡|yōuyóukǎ|thẻ EasyCard (thẻ đi tàu xe)|Name
綠島|lǜdǎo|đảo Xanh (Lục Đảo)|Name
東南邊|dōngnánbiān|phía đông nam|Phrase
好好地|hǎohǎodì|một cách tử tế, thỏa thích|Phrase`,d:{l:`如玉|安同，早！你要去哪裡？|ān tóng， zǎo！ nǐ yào qù nǎ lǐ？|An Đồng, chào buổi sáng! Bạn định đi đâu?
安同|早！我約了朋友一起去看電影，你呢？|zǎo！ wǒ yuē le péng yǒu yì qǐ qù kàn diàn yǐng， nǐ ne？|Chào! Tôi hẹn bạn đi xem phim, còn bạn?
如玉|我要去看電腦展。|wǒ yào qù kàn diàn nǎo zhǎn。|Tôi đi xem triển lãm máy tính.
安同|你去哪裡看電腦展？|nǐ qù nǎ lǐ kàn diàn nǎo zhǎn？|Bạn xem triển lãm máy tính ở đâu?
如玉|世貿展覽館，我現在要去對面坐公車。|shì mào zhǎn lǎn guǎn， wǒ xiàn zài yào qù duì miàn zuò gōng chē。|Ở nhà triển lãm Thế Mậu, bây giờ tôi sang đối diện đi xe buýt.
安同|那裡離台北101不遠，妳怎麼不坐捷運呢？|nà lǐ lí tái běi 101 bù yuǎn， nǐ zěn me bú zuò jié yùn ne？|Chỗ đó cách Taipei 101 không xa, sao bạn không đi MRT?
如玉|朋友告訴我公車直接到展覽館，不必換車。|péng yǒu gào sù wǒ gōng chē zhí jiē dào zhǎn lǎn guǎn， bú bì huàn chē。|Bạn tôi nói xe buýt đến thẳng nhà triển lãm, không phải đổi xe.
安同|坐捷運也很方便。妳先坐2號線到台北車站，再換車到展覽館。|zuò jié yùn yě hěn fāng biàn。 nǐ xiān zuò 2 hào xiàn dào tái běi chē zhàn， zài huàn chē dào zhǎn lǎn guǎn。|Đi MRT cũng rất tiện. Bạn đi tuyến 2 đến ga Đài Bắc, rồi đổi tàu đến nhà triển lãm.
如玉|聽起來坐捷運比較麻煩。|tīng qǐ lái zuò jié yùn bǐ jiào má fán。|Nghe có vẻ đi MRT phiền hơn.
安同|一點也不麻煩，捷運比較快，坐公車要花一個多小時。你還是坐捷運吧！|yì diǎn yě bù má fán， jié yùn bǐ jiào kuài， zuò gōng chē yào huā yí gè duō xiǎo shí。 nǐ hái shì zuò jié yùn ba！|Không phiền chút nào, MRT nhanh hơn, đi xe buýt mất hơn một tiếng. Bạn nên đi MRT thì hơn!
如玉|捷運站遠嗎？|jié yùn zhàn yuǎn ma？|Ga MRT có xa không?
安同|捷運站就在前面。|jié yùn zhàn jiù zài qián miàn。|Ga MRT ở ngay phía trước.
如玉|謝謝！我得趕快走了。|xiè xiè！ wǒ dé gǎn kuài zǒu le。|Cảm ơn! Tôi phải đi gấp rồi.
安同|別急，走慢一點。捷運的班次很多。|bié jí， zǒu màn yì diǎn。 jié yùn de bān cì hěn duō。|Đừng vội, đi chậm thôi. MRT có rất nhiều chuyến.
如玉|好，我們下禮拜見。|hǎo， wǒ men xià lǐ bài jiàn。|Vâng, tuần sau gặp nhé.
短文|如玉的朋友美美從法國到台灣來玩兩個禮拜，她先從歐洲坐飛機到越南，再轉機到台灣。|rú yù de péng yǒu měi měi cóng fǎ guó dào tái wān lái wán liǎng gè lǐ bài， tā xiān cóng ōu zhōu zuò fēi jī dào yuè nán， zài zhuǎn jī dào tái wān。|Bạn của Như Ngọc là Mỹ Mỹ từ Pháp đến Đài Loan chơi hai tuần, cô bay từ châu Âu sang Việt Nam rồi quá cảnh đến Đài Loan.
短文|到了機場，美美直接坐巴士到台北。|dào le jī chǎng， měi měi zhí jiē zuò bā shì dào tái běi。|Đến sân bay, Mỹ Mỹ đi thẳng xe buýt vào Đài Bắc.
短文|如玉告訴她，在市區坐捷運是最方便的，所以她下了巴士，就坐捷運到旅館去了。|rú yù gào sù tā， zài shì qū zuò jié yùn shì zuì fāng biàn de， suǒ yǐ tā xià le bā shì， jiù zuò jié yùn dào lǚ guǎn qù le。|Như Ngọc bảo trong nội thành đi MRT là tiện nhất, nên cô xuống xe buýt rồi đi MRT về khách sạn.
短文|美美覺得台北的交通非常便利，到處都有公車、計程車，還有捷運，去哪裡都很方便。|měi měi jué dé tái běi de jiāo tōng fēi cháng biàn lì， dào chù dōu yǒu gōng chē、 jì chéng chē， hái yǒu jié yùn， qù nǎ lǐ dōu hěn fāng biàn。|Mỹ Mỹ thấy giao thông Đài Bắc rất tiện lợi, khắp nơi có xe buýt, taxi và cả MRT, đi đâu cũng tiện.
短文|台北捷運的路線不複雜，車票也不貴，買一張悠遊卡，誰都可以輕輕鬆鬆地去逛逛。|tái běi jié yùn de lù xiàn bú fù zá， chē piào yě bú guì， mǎi yì zhāng yōu yóu kǎ， shuí dōu kě yǐ qīng qīng sōng sōng dì qù guàng guàng。|Tuyến MRT Đài Bắc không phức tạp, vé cũng không đắt, mua một thẻ EasyCard là ai cũng thong thả đi dạo được.
短文|美美住在法國東部，沒有什麼機會到海邊。|měi měi zhù zài fǎ guó dōng bù， méi yǒu shén me jī huì dào hǎi biān。|Mỹ Mỹ sống ở miền đông nước Pháp, hầu như không có dịp ra biển.
短文|聽說台灣附近的小島，風景都很美，所以她決定到綠島去看看。|tīng shuō tái wān fù jìn de xiǎo dǎo， fēng jǐng dōu hěn měi， suǒ yǐ tā jué dìng dào lǜ dǎo qù kàn kàn。|Nghe nói các đảo nhỏ quanh Đài Loan phong cảnh rất đẹp nên cô quyết định đến Lục Đảo xem thử.
短文|綠島在台灣的東南邊，到那裡不太方便。|lǜ dǎo zài tái wān de dōng nán biān， dào nà lǐ bú tài fāng biàn。|Lục Đảo ở phía đông nam Đài Loan, đến đó không tiện lắm.
短文|美美得先坐火車到台東，再搭船或是飛機到綠島。|měi měi dé xiān zuò huǒ chē dào tái dōng， zài dā chuán huò shì fēi jī dào lǜ dǎo。|Mỹ Mỹ phải đi tàu hỏa đến Đài Đông, rồi đi thuyền hoặc máy bay đến Lục Đảo.
短文|她打算第二個星期去綠島，好好地玩一玩。|tā dǎ suàn dì èr gè xīng qī qù lǜ dǎo， hǎo hǎo dì wán yì wán。|Cô định tuần thứ hai sẽ đến Lục Đảo chơi cho thỏa thích.`}},{n:3,zh:"你的中文進步了！",vi:"Tiếng Trung của bạn tiến bộ rồi!",v:`進步|jìnbù|tiến bộ|Vp
早|zǎo|sớm|Vs
考試|kǎoshì|bài thi, kỳ thi|N
準備|zhǔnbèi|chuẩn bị|V
考|kǎo|thi|V
聽寫|tīngxiě|chính tả (nghe viết)|N
容易|róngyì|dễ|Vs
小學|xiǎoxué|tiểu học|N
漢字|hànzì|chữ Hán|N
高中|gāozhōng|trung học phổ thông|N
過|guò|đã từng (trợ từ kinh nghiệm)|Ptc
才|cái|mới, chỉ|Adv
說話|shuōhuà|nói chuyện|V-sep
不夠|búgòu|chưa đủ, không đủ|Adv
流利|liúlì|lưu loát|Vs
雖然|suīrán|tuy, mặc dù|Conj
環境|huánjìng|môi trường, hoàn cảnh|N
同意|tóngyì|đồng ý|Vst
報紙|bàozhǐ|báo, tờ báo|N
麵包|miànbāo|bánh mì|N
演講|yǎnjiǎng|bài diễn thuyết, buổi nói chuyện|N
噢|ō|ồ (à)|Ptc
活動中心|huódòngzhōngxīn|trung tâm sinh hoạt|Phrase
想起來|xiǎngqǐlái|nhớ ra|Phrase
選|xuǎn|chọn|V
作業|zuòyè|bài tập về nhà|N
練習|liànxí|luyện tập|V
半夜|bànyè|nửa đêm, khuya|N
高興|gāoxìng|vui, hài lòng|Vs
平常|píngcháng|bình thường, thường ngày|Adv
爬山|páshān|leo núi|V-sep
認識|rènshí|quen biết|Vpt
聊天|liáotiān|trò chuyện|V-sep
文化|wénhuà|văn hóa|N
廣告|guǎnggào|quảng cáo|N
位|wèi|vị (lượng từ lịch sự cho người)|M
了解|liǎojiě|hiểu rõ|Vst
生活|shēnghuó|cuộc sống|N
陽明山|yángmíngshān|núi Dương Minh|Name
外國人|wàiguórén|người nước ngoài|Phrase
一些|yìxiē|một ít, một số|Phrase`,d:{l:`田中|早，妳今天來得真早。|zǎo， nǐ jīn tiān lái dé zhēn zǎo。|Chào buổi sáng, hôm nay bạn đến sớm thật.
如玉|是啊！我今天是搭捷運來的。|shì a！ wǒ jīn tiān shì dā jié yùn lái de。|Đúng vậy! Hôm nay tôi đi MRT đến.
田中|今天的考試，妳準備了嗎？|jīn tiān de kǎo shì， nǐ zhǔn bèi le ma？|Bài thi hôm nay bạn chuẩn bị chưa?
如玉|準備得差不多了，應該可以考得不錯。你覺得聽寫很容易吧？|zhǔn bèi dé chà bu duō le， yīng gāi kě yǐ kǎo dé bú cuò。 nǐ jué dé tīng xiě hěn róng yì ba？|Chuẩn bị gần xong rồi, chắc sẽ thi khá. Bạn thấy chính tả rất dễ đúng không?
田中|是啊，日本人從小學就開始學寫漢字。|shì a， rì běn rén cóng xiǎo xué jiù kāi shǐ xué xiě hàn zì。|Đúng vậy, người Nhật học viết chữ Hán từ tiểu học.
如玉|我現在也覺得寫字不難，因為我在美國念高中的時候就學過了。|wǒ xiàn zài yě jué dé xiě zì bù nán， yīn wèi wǒ zài měi guó niàn gāo zhōng de shí hòu jiù xué guò le。|Bây giờ tôi cũng thấy viết chữ không khó, vì hồi học cấp ba ở Mỹ tôi đã học rồi.
田中|妳在這個語言中心學了多久了？|nǐ zài zhè gè yǔ yán zhōng xīn xué le duō jiǔ le？|Bạn học ở trung tâm ngôn ngữ này được bao lâu rồi?
如玉|我才學了半年，你呢？|wǒ cái xué le bàn nián， nǐ ne？|Tôi mới học nửa năm, còn bạn?
田中|我來了快一年了，可是我說話，還說得不夠流利。|wǒ lái le kuài yì nián le， kě shì wǒ shuō huà， hái shuō dé bú gòu liú lì。|Tôi đến gần một năm rồi, nhưng nói vẫn chưa đủ lưu loát.
如玉|雖然我只來了半年，但是我知道我的中文進步了。|suī rán wǒ zhǐ lái le bàn nián， dàn shì wǒ zhī dào wǒ de zhōng wén jìn bù le。|Tuy tôi chỉ đến nửa năm, nhưng tôi biết tiếng Trung của mình đã tiến bộ.
田中|我覺得在說中文的環境裡學中文，進步得比較快。|wǒ jué dé zài shuō zhōng wén de huán jìng lǐ xué zhōng wén， jìn bù dé bǐ jiào kuài。|Tôi thấy học tiếng Trung trong môi trường nói tiếng Trung thì tiến bộ nhanh hơn.
如玉|我同意。我希望回國的時候能看中文報紙。|wǒ tóng yì。 wǒ xī wàng huí guó de shí hòu néng kàn zhòng wén bào zhǐ。|Tôi đồng ý. Tôi hy vọng khi về nước có thể đọc báo tiếng Trung.
田中|我想妳一定可以。今天下了課，妳要去哪裡？|wǒ xiǎng nǐ yí dìng kě yǐ。 jīn tiān xià le kè， nǐ yào qù nǎ lǐ？|Tôi nghĩ bạn chắc chắn làm được. Hôm nay tan học bạn đi đâu?
如玉|我要去活動中心跟語言交換的朋友見面。|wǒ yào qù huó dòng zhōng xīn gēn yǔ yán jiāo huàn de péng yǒu jiàn miàn。|Tôi đến trung tâm sinh hoạt gặp bạn trao đổi ngôn ngữ.
田中|妳說的活動中心在哪裡？|nǐ shuō de huó dòng zhōng xīn zài nǎ lǐ？|Trung tâm sinh hoạt bạn nói ở đâu?
如玉|在一樓有麵包店的那棟樓裡面，我們一起去聽過一次演講，記得嗎？|zài yì lóu yǒu miàn bāo diàn de nà dòng lóu lǐ miàn， wǒ men yì qǐ qù tīng guò yí cì yǎn jiǎng， jì dé ma？|Trong tòa nhà có tiệm bánh mì ở tầng một, chúng ta từng cùng đi nghe một buổi diễn thuyết, nhớ không?
田中|噢，我想起來了。|ō， wǒ xiǎng qǐ lái le。|Ồ, tôi nhớ ra rồi.
短文|馬安同到師大來學中文，他選了每天上三個小時的課，下了課要寫作業，還要準備第二天的課。|mǎ ān tóng dào shī dà lái xué zhōng wén， tā xuǎn le měi tiān shàng sān gè xiǎo shí de kè， xià le kè yào xiě zuò yè， hái yào zhǔn bèi dì èr tiān de kè。|Mã An Đồng đến Shida học tiếng Trung, anh chọn học mỗi ngày ba tiếng, tan học còn phải làm bài tập và chuẩn bị bài hôm sau.
短文|馬安同剛開始學寫中國字，覺得真難，所以每天都練習寫字，常常半夜十二點多才睡覺。|mǎ ān tóng gāng kāi shǐ xué xiě zhōng guó zì， jué dé zhēn nán， suǒ yǐ měi tiān dōu liàn xí xiě zì， cháng cháng bàn yè shí èr diǎn duō cái shuì jué。|An Đồng mới bắt đầu học viết chữ Hán, thấy thật khó nên mỗi ngày luyện viết, thường hơn mười hai giờ khuya mới ngủ.
短文|雖然有點累，但是他很高興現在會寫很多字了。|suī rán yǒu diǎn lèi， dàn shì tā hěn gāo xìng xiàn zài huì xiě hěn duō zì le。|Tuy hơi mệt nhưng anh rất vui vì giờ đã viết được nhiều chữ.
短文|週末，馬安同比平常輕鬆多了。他有時候搭捷運去貓空喝茶，有時候坐公車去陽明山爬山。|zhōu mò， mǎ ān tóng bǐ píng cháng qīng sōng duō le。 tā yǒu shí hòu dā jié yùn qù māo kōng hē chá， yǒu shí hòu zuò gōng chē qù yáng míng shān pá shān。|Cuối tuần, An Đồng thoải mái hơn ngày thường nhiều. Có khi anh đi MRT lên Miêu Không uống trà, có khi đi xe buýt lên núi Dương Minh leo núi.
短文|爬山的時候，他認識了很多台灣人。台灣人對外國人很好，常常跟馬安同聊天，告訴他一些台灣的文化。|pá shān de shí hòu， tā rèn shí le hěn duō tái wān rén。 tái wān rén duì wài guó rén hěn hǎo， cháng cháng gēn mǎ ān tóng liáo tiān， gào sù tā yì xiē tái wān de wén huà。|Khi leo núi, anh quen nhiều người Đài Loan. Người Đài Loan rất tốt với người nước ngoài, thường trò chuyện với An Đồng và kể cho anh nghe một số điều về văn hóa Đài Loan.
短文|馬安同有一個語言交換的朋友，他們一有空，就拿著地圖搭捷運去逛逛。|mǎ ān tóng yǒu yí gè yǔ yán jiāo huàn de péng yǒu， tā men yì yǒu kòng， jiù ná zhù dì tú dā jié yùn qù guàng guàng。|An Đồng có một người bạn trao đổi ngôn ngữ, hễ rảnh là hai người cầm bản đồ đi MRT đi dạo.
短文|安同喜歡看捷運上的廣告，要是有沒學過的字，他就會問那位朋友怎麼說。|ān tóng xǐ huān kàn jié yùn shàng de guǎng gào， yào shì yǒu méi xué guò de zì， tā jiù huì wèn nà wèi péng yǒu zěn me shuō。|An Đồng thích xem quảng cáo trên MRT, nếu có chữ chưa học thì hỏi người bạn đó cách nói.
短文|他覺得到處走走，可以了解台灣人的生活，也可以練習練習中文，哪裡都能學中文，真是不錯。|tā jué dé dào chù zǒu zǒu， kě yǐ liǎo jiě tái wān rén de shēng huó， yě kě yǐ liàn xí liàn xí zhōng wén， nǎ lǐ dōu néng xué zhōng wén， zhēn shì bú cuò。|Anh thấy đi đây đó vừa hiểu được cuộc sống người Đài Loan vừa luyện được tiếng Trung, đâu cũng học được tiếng Trung, thật tuyệt.`}},{n:4,zh:"我打工，我教法文",vi:"Tôi làm thêm, tôi dạy tiếng Pháp",v:`高美玲|gāoměilíng|Cao Mỹ Linh (cô gái người Pháp)|Name
打工|dǎgōng|làm thêm|V-sep
主任|zhǔrèn|chủ nhiệm, trưởng bộ phận|N
介紹|jièshào|giới thiệu|V
歲|suì|tuổi|M
語言學|yǔyánxué|ngôn ngữ học|N
經驗|jīngyàn|kinh nghiệm|N
談|tán|nói chuyện, bàn bạc|V
當|dāng|làm (giữ chức vụ)|V
助教|zhùjiào|trợ giảng|N
上午|shàngwǔ|buổi sáng|N
除了|chúle|ngoài… ra|Prep
年級|niánjí|năm học, lớp|N
暑假|shǔjià|kỳ nghỉ hè|N
請教|qǐngjiào|xin chỉ giáo, xin hỏi (lịch sự)|V
貴|guì|quý (của quý vị)|Vs-attr
薪水|xīnshuǐ|tiền lương|N
算|suàn|tính|V
按照|ànzhào|theo, dựa theo|Prep
教授|jiàoshòu|giáo sư|N
鐘點費|zhōngdiǎnfèi|tiền lương theo giờ|N
份|fèn|phần, việc (lượng từ cho công việc)|M
法文|fǎwén|tiếng Pháp|Name
亞洲|yàzhōu|châu Á|Name
西班牙語|xībānyáyǔ|tiếng Tây Ban Nha|Name
英文|yīngwén|tiếng Anh|Name
三年級|sānniánjí|năm thứ ba|Phrase
法律|fǎlǜ|pháp luật|N
夠|gòu|đủ|Vs-pred
履歷表|lǚlìbiǎo|sơ yếu lý lịch, CV|N
面談|miàntán|phỏng vấn, nói chuyện trực tiếp|Vi
華僑|huáqiáo|Hoa kiều|N
辦公室|bàngōngshì|văn phòng|N
談話|tánhuà|nói chuyện|V-sep
情形|qíngxíng|tình hình|N
適合|shìhé|phù hợp|Vst
說明|shuōmíng|giải thích, trình bày|V
然後|ránhòu|sau đó|Adv
月底|yuèdǐ|cuối tháng|N
發|fā|phát (lương)|V
馬上|mǎshàng|ngay lập tức|Adv
答應|dáyīng|đồng ý, nhận lời|V
順利|shùnlì|thuận lợi|Vs
黃|huáng|Hoàng (một họ phổ biến, nghĩa là “vàng”)|Name
沒想到|méixiǎngdào|không ngờ|Phrase`,d:{l:`主任|請坐，妳是高美玲嗎？|qǐng zuò， nǐ shì gāo měi líng ma？|Mời ngồi, bạn là Cao Mỹ Linh phải không?
美玲|是。您好。|shì。 nín hǎo。|Vâng. Chào ông.
主任|請妳先介紹一下自己。|qǐng nǐ xiān jiè shào yí xià zì jǐ。|Mời bạn giới thiệu qua về bản thân.
美玲|我叫高美玲，是法國人，今年二十八歲，現在在師大學中文。我念大學的時候上過亞洲文化和語言學。|wǒ jiào gāo měi líng， shì fǎ guó rén， jīn nián èr shí bā suì， xiàn zài zài shī dà xué zhōng wén。 wǒ niàn dà xué de shí hòu shàng guò yà zhōu wén huà hé yǔ yán xué。|Tôi là Cao Mỹ Linh, người Pháp, năm nay 28 tuổi, hiện đang học tiếng Trung ở Shida. Hồi đại học tôi từng học văn hóa châu Á và ngôn ngữ học.
主任|妳有沒有教法文的經驗？請妳談一談。|nǐ yǒu méi yǒu jiào fǎ wén de jīng yàn？ qǐng nǐ tán yì tán。|Bạn có kinh nghiệm dạy tiếng Pháp không? Mời bạn nói qua.
美玲|有。我當過語言助教，那時候的學生都是外國人。|yǒu。 wǒ dāng guò yǔ yán zhù jiào， nà shí hòu de xué shēng dōu shì wài guó rén。|Có. Tôi từng làm trợ giảng ngôn ngữ, lúc đó học viên đều là người nước ngoài.
主任|妳一個星期能來幾天？|nǐ yí gè xīng qī néng lái jǐ tiān？|Một tuần bạn có thể đến mấy ngày?
美玲|我現在上午學中文，下午兩點以後都可以，但是我希望一個禮拜教三天就好了。|wǒ xiàn zài shàng wǔ xué zhōng wén， xià wǔ liǎng diǎn yǐ hòu dōu kě yǐ， dàn shì wǒ xī wàng yí gè lǐ bài jiào sān tiān jiù hǎo le。|Hiện giờ buổi sáng tôi học tiếng Trung, sau hai giờ chiều là được, nhưng tôi mong mỗi tuần chỉ dạy ba ngày.
主任|妳除了法文、中文，還會什麼語言？|nǐ chú le fǎ wén、 zhōng wén， hái huì shén me yǔ yán？|Ngoài tiếng Pháp và tiếng Trung, bạn còn biết ngôn ngữ nào?
美玲|我還會說西班牙語和英文。|wǒ hái huì shuō xī bān yá yǔ hé yīng wén。|Tôi còn nói được tiếng Tây Ban Nha và tiếng Anh.
主任|妳教過西班牙語嗎？|nǐ jiào guò xī bān yá yǔ ma？|Bạn từng dạy tiếng Tây Ban Nha chưa?
美玲|我大學三年級的暑假，當過西班牙語老師。|wǒ dà xué sān nián jí de shǔ jià， dāng guò xī bān yá yǔ lǎo shī。|Kỳ nghỉ hè năm ba đại học tôi từng làm giáo viên tiếng Tây Ban Nha.
主任|妳的工作經驗聽起來很不錯。|nǐ de gōng zuò jīng yàn tīng qǐ lái hěn bú cuò。|Kinh nghiệm làm việc của bạn nghe rất tốt.
美玲|謝謝您。對了，我想請教一下，貴中心老師的薪水怎麼算？|xiè xiè nín。 duì le， wǒ xiǎng qǐng jiào yí xià， guì zhōng xīn lǎo shī de xīn shuǐ zěn me suàn？|Cảm ơn ông. À, cho tôi hỏi, lương giáo viên của trung tâm tính thế nào?
主任|我們是按照大學教授的鐘點費算的。薪水跟大學老師的一樣。|wǒ men shì àn zhào dà xué jiào shòu de zhōng diǎn fèi suàn de。 xīn shuǐ gēn dà xué lǎo shī de yí yàng。|Chúng tôi tính theo tiền giờ của giáo sư đại học, lương bằng giảng viên đại học.
美玲|我很想試試這份工作。|wǒ hěn xiǎng shì shì zhè fèn gōng zuò。|Tôi rất muốn thử công việc này.
主任|歡迎妳，妳下個月一號就可以來嗎？|huān yíng nǐ， nǐ xià gè yuè yí hào jiù kě yǐ lái ma？|Hoan nghênh bạn, mùng một tháng sau bạn đến được không?
美玲|可以的。謝謝。|kě yǐ de。 xiè xiè。|Được ạ. Cảm ơn.
短文|高美玲來了一年了，按照台灣的法律，她已經可以打工了，所以她的台灣朋友給她介紹了一個在大學語言中心教法文的工作。|gāo měi líng lái le yì nián le， àn zhào tái wān de fǎ lǜ， tā yǐ jīng kě yǐ dǎ gōng le， suǒ yǐ tā de tái wān péng yǒu gěi tā jiè shào le yí gè zài dà xué yǔ yán zhōng xīn jiào fǎ wén de gōng zuò。|Cao Mỹ Linh đến được một năm, theo luật Đài Loan cô đã được làm thêm, nên bạn người Đài Loan giới thiệu cho cô công việc dạy tiếng Pháp ở trung tâm ngôn ngữ của trường đại học.
短文|雖然高美玲覺得自己的經驗還不夠，可是決定去試一試。所以她帶著履歷表到語言中心去跟主任面談。|suī rán gāo měi líng jué dé zì jǐ de jīng yàn hái bú gòu， kě shì jué dìng qù shì yí shì。 suǒ yǐ tā dài zhù lǚ lì biǎo dào yǔ yán zhōng xīn qù gēn zhǔ rèn miàn tán。|Tuy thấy kinh nghiệm của mình chưa đủ, cô vẫn quyết định thử. Cô mang CV đến trung tâm phỏng vấn với chủ nhiệm.
短文|這位主任姓黃，是法國華僑，在台灣住了十幾年，他也在大學工作了十年了。|zhè wèi zhǔ rèn xìng huáng， shì fǎ guó huá qiáo， zài tái wān zhù le shí jǐ nián， tā yě zài dà xué gōng zuò le shí nián le。|Vị chủ nhiệm họ Hoàng, là Hoa kiều ở Pháp, sống ở Đài Loan hơn mười năm và cũng làm ở trường đại học mười năm.
短文|高美玲在辦公室跟他談話的時候，他先問高美玲在法國的工作經驗，再問她在台灣學中文跟生活的情形。|gāo měi líng zài bàn gōng shì gēn tā tán huà de shí hòu， tā xiān wèn gāo měi líng zài fǎ guó de gōng zuò jīng yàn， zài wèn tā zài tái wān xué zhōng wén gēn shēng huó de qíng xíng。|Khi nói chuyện ở văn phòng, ông hỏi kinh nghiệm làm việc ở Pháp của cô trước, rồi hỏi tình hình học tiếng Trung và sinh sống ở Đài Loan.
短文|黃主任覺得高美玲的經驗很適合這份工作。|huáng zhǔ rèn jué dé gāo měi líng de jīng yàn hěn shì hé zhè fèn gōng zuò。|Chủ nhiệm Hoàng thấy kinh nghiệm của Mỹ Linh rất phù hợp với công việc này.
短文|黃主任也給高美玲介紹了上課的書，還跟她說明了工作環境。|huáng zhǔ rèn yě gěi gāo měi líng jiè shào le shàng kè de shū， hái gēn tā shuō míng liǎo gōng zuò huán jìng。|Ông cũng giới thiệu sách giảng dạy và giải thích môi trường làm việc cho cô.
短文|然後，黃主任告訴高美玲，薪水按照工作的時間算，每個月的月底發薪水。高美玲覺得這份工作聽起來很不錯，所以馬上就答應了。|rán hòu， huáng zhǔ rèn gào sù gāo měi líng， xīn shuǐ àn zhào gōng zuò de shí jiān suàn， měi gè yuè de yuè dǐ fā xīn shuǐ。 gāo měi líng jué dé zhè fèn gōng zuò tīng qǐ lái hěn bú cuò， suǒ yǐ mǎ shàng jiù dá yīng le。|Sau đó ông cho biết lương tính theo thời gian làm việc, phát vào cuối mỗi tháng. Mỹ Linh thấy công việc này nghe rất tốt nên nhận lời ngay.
短文|黃主任對她說，下個月一號就開始上班。高美玲沒想到這次的面談這麼順利。|huáng zhǔ rèn duì tā shuō， xià gè yuè yí hào jiù kāi shǐ shàng bān。 gāo měi líng méi xiǎng dào zhè cì de miàn tán zhè me shùn lì。|Ông bảo cô mùng một tháng sau bắt đầu đi làm. Mỹ Linh không ngờ buổi phỏng vấn lại thuận lợi đến vậy.`}},{n:5,zh:"吃喜酒",vi:"Dự tiệc cưới",v:`喜酒|xǐjiǔ|tiệc cưới|N
恭喜|gōngxǐ|chúc mừng|V
新娘|xīnniáng|cô dâu|N
參加|cānjiā|tham dự|V
婚禮|hūnlǐ|lễ cưới|N
西裝|xīzhuāng|com-lê, âu phục|N
正式|zhèngshì|trang trọng, chính thức|Vs
客人|kèrén|khách|N
手|shǒu|tay|N
照相機|zhàoxiàngjī|máy ảnh|N
新郎|xīnláng|chú rể|N
站|zhàn|đứng|Vi
白|bái|trắng|Vs
帥|shuài|đẹp trai|Vs
禮服|lǐfú|lễ phục|N
座位|zuòwèi|chỗ ngồi|N
看起來|kànqǐlái|trông có vẻ|Phrase
結婚|jiéhūn|kết hôn|Vp-sep
日子|rìzi|ngày|N
親戚|qīnqī|họ hàng|N
熱鬧|rènào|náo nhiệt, rộn ràng|Vs
慶祝|qìngzhù|chúc mừng, ăn mừng|V
件|jiàn|bộ, cái (lượng từ cho quần áo, việc)|M
喜事|xǐshì|việc vui (đám cưới…)|N
請客|qǐngkè|mời khách, đãi tiệc|V-sep
紅包|hóngbāo|bao lì xì|N
送|sòng|tặng, tiễn|V
新人|xīnrén|cô dâu chú rể|N
喜宴|xǐyàn|tiệc cưới|N
敬酒|jìngjiǔ|mời rượu, nâng ly|V-sep
大人|dàrén|người lớn|N
小孩|xiǎohái|trẻ con|N
不得了|bùdéle|vô cùng, ghê gớm|Vs
另外|lìngwài|khác, ngoài ra|Det
糖|táng|kẹo|N
離開|líkāi|rời khỏi|Vp
句|jù|câu (lượng từ cho lời nói)|M
祝福|zhùfú|chúc phúc|V
話|huà|lời nói|N
一會兒|yíhuìér|một lát|Phrase
有說有笑|yǒushuōyǒuxiào|vừa nói vừa cười|Phrase
有吃有喝|yǒuchīyǒuhē|có ăn có uống|Phrase
百年好合|bǎiniánhǎohé|trăm năm hạnh phúc|Phrase
早生貴子|zǎoshēngguìzi|sớm sinh quý tử|Phrase`,d:{l:`明華|安同，你們來了。|ān tóng， nǐ men lái le。|An Đồng, các bạn đến rồi.
安同|恭喜！恭喜！明華，這是我常跟你說的高美玲。美玲，他就是新娘的哥哥，李明華。|gōng xǐ！ gōng xǐ！ míng huá， zhè shì wǒ cháng gēn nǐ shuō de gāo měi líng。 měi líng， tā jiù shì xīn niáng dī gē gē， lǐ míng huá。|Chúc mừng! Chúc mừng! Minh Hoa, đây là Cao Mỹ Linh mà tôi hay kể. Mỹ Linh, đây là anh của cô dâu, Lý Minh Hoa.
美玲|李先生，恭喜你們！謝謝你請我們來參加你妹妹的婚禮。|lǐ xiān shēng， gōng xǐ nǐ men！ xiè xiè nǐ qǐng wǒ men lái cān jiā nǐ mèi mèi de hūn lǐ。|Anh Lý, chúc mừng gia đình! Cảm ơn anh mời chúng tôi dự đám cưới của em gái anh.
明華|你太客氣了。安同，你今天穿西裝真好看。|nǐ tài kè qì le。 ān tóng， nǐ jīn tiān chuān xī zhuāng zhēn hǎo kàn。|Bạn khách sáo quá. An Đồng, hôm nay bạn mặc com-lê đẹp thật.
安同|謝謝，參加婚禮應該要穿得很正式。|xiè xiè， cān jiā hūn lǐ yīng gāi yào chuān dé hěn zhèng shì。|Cảm ơn, dự đám cưới thì nên ăn mặc trang trọng.
美玲|客人怎麼都還沒到？|kè rén zěn me dōu hái méi dào？|Sao khách vẫn chưa đến?
明華|現在才六點，婚禮六點半開始，時間還早。|xiàn zài cái liù diǎn， hūn lǐ liù diǎn bàn kāi shǐ， shí jiān hái zǎo。|Mới sáu giờ, đám cưới sáu rưỡi mới bắt đầu, còn sớm.
安同|明華，手裡拿著照相機的那個人是誰？|míng huá， shǒu lǐ ná zhù zhào xiàng jī de nà gè rén shì shuí？|Minh Hoa, người cầm máy ảnh trên tay kia là ai?
明華|他是新郎的弟弟。|tā shì xīn láng de dì di。|Đó là em trai chú rể.
安同|新郎呢？|xīn láng ne？|Còn chú rể đâu?
明華|他在門口站著跟客人說話。|tā zài mén kǒu zhàn zhù gēn kè rén shuō huà。|Anh ấy đang đứng ở cửa nói chuyện với khách.
安同|哪一個？|nǎ yí gè？|Là người nào?
明華|就是穿著白西裝的那個。|jiù shì chuān zhù bái xī zhuāng de nà gè。|Chính là người mặc com-lê trắng đó.
安同|新郎看起來好帥。|xīn láng kàn qǐ lái hǎo shuài。|Chú rể trông đẹp trai quá.
美玲|你看，那邊那位穿著紅色禮服，跟客人說話的太太是誰？|nǐ kàn， nà biān nà wèi chuān zhù hóng sè lǐ fú， gēn kè rén shuō huà de tài tài shì shuí？|Anh xem, bà mặc lễ phục đỏ đang nói chuyện với khách ở bên kia là ai?
明華|那是新郎的媽媽。|nà shì xīn láng de mā mā。|Đó là mẹ chú rể.
美玲|她看起來好高興啊！怎麼沒看見新娘呢？|tā kàn qǐ lái hǎo gāo xìng a！ zěn me méi kàn jiàn xīn niáng ne？|Trông bà vui quá! Sao chưa thấy cô dâu nhỉ?
明華|等一下你們就會看見她了。婚禮要開始了，我帶你們去你們的座位吧！|děng yí xià nǐ men jiù huì kàn jiàn tā le。 hūn lǐ yào kāi shǐ le， wǒ dài nǐ men qù nǐ men de zuò wèi ba！|Lát nữa các bạn sẽ thấy cô ấy. Lễ cưới sắp bắt đầu, tôi đưa các bạn đến chỗ ngồi nhé!
短文|李明華請安同和美玲去參加他妹妹的婚禮，這是安同他們第一次去吃喜酒。|lǐ míng huá qǐng ān tóng hé měi líng qù cān jiā tā mèi mèi de hūn lǐ， zhè shì ān tóng tā men dì yī cì qù chī xǐ jiǔ。|Lý Minh Hoa mời An Đồng và Mỹ Linh dự đám cưới của em gái, đây là lần đầu họ đi ăn tiệc cưới.
短文|李明華告訴他們，在台灣，要結婚的人大部分都會找一個好日子，請親戚、朋友一起吃飯，熱熱鬧鬧地慶祝這件喜事。|lǐ míng huá gào sù tā men， zài tái wān， yào jié hūn de rén dà bù fèn dōu huì zhǎo yí gè hǎo rì zi， qǐng qīn qī、 péng yǒu yì qǐ chī fàn， rè rè nào nào dì qìng zhù zhè jiàn xǐ shì。|Minh Hoa kể ở Đài Loan, phần lớn người sắp cưới chọn một ngày tốt, mời họ hàng bạn bè cùng ăn tiệc, náo nhiệt chúc mừng việc vui này.
短文|請客的那天，新郎、新娘，還有來吃喜酒的客人都穿得漂漂亮亮的。來參加的客人都會準備一個紅包送新人。|qǐng kè de nà tiān， xīn láng、 xīn niáng， hái yǒu lái chī xǐ jiǔ de kè rén dōu chuān dé piāo piāo liàng liàng de。 lái cān jiā de kè rén dōu huì zhǔn bèi yí gè hóng bāo sòng xīn rén。|Hôm đãi tiệc, cô dâu chú rể và khách đều ăn mặc thật đẹp. Khách dự tiệc đều chuẩn bị một bao lì xì tặng đôi tân hôn.
短文|等客人都到了，喜宴就開始了。大家吃了一會兒，有的人忙著到處敬酒，有的人忙著跟朋友聊天，大人有說有笑，小孩有吃有喝，熱鬧得不得了。|děng kè rén dōu dào le， xǐ yàn jiù kāi shǐ le。 dà jiā chī le yí huì ér， yǒu de rén máng zhù dào chù jìng jiǔ， yǒu de rén máng zhù gēn péng yǒu liáo tiān， dà rén yǒu shuō yǒu xiào， xiǎo hái yǒu chī yǒu hē， rè nào dé bù dé le。|Khách đến đủ thì tiệc bắt đầu. Ăn một lát, người thì bận đi khắp nơi mời rượu, người thì bận trò chuyện với bạn, người lớn vừa nói vừa cười, trẻ con có ăn có uống, náo nhiệt vô cùng.
短文|大家吃著吃著，新郎、新娘和他們的父母就來敬酒了。客人也會祝新人百年好合、早生貴子。|dà jiā chī zhù chī zhù， xīn láng、 xīn niáng hé tā men de fù mǔ jiù lái jìng jiǔ le。 kè rén yě huì zhù xīn rén bǎi nián hǎo hé、 zǎo shēng guì zi。|Đang ăn thì cô dâu chú rể và cha mẹ hai bên đến mời rượu. Khách cũng chúc đôi tân hôn trăm năm hạnh phúc, sớm sinh quý tử.
短文|等喜酒吃得差不多了，新娘會換另外一件漂亮的禮服，跟新郎拿著糖在門口送客人離開。|děng xǐ jiǔ chī dé chà bu duō le， xīn niáng huì huàn lìng wài yí jiàn piào liàng de lǐ fú， gēn xīn láng ná zhù táng zài mén kǒu sòng kè rén lí kāi。|Khi tiệc gần xong, cô dâu thay một bộ lễ phục đẹp khác, cùng chú rể cầm kẹo đứng ở cửa tiễn khách.
短文|這個時候很多人會跟新人一起照相，再多說幾句祝福的話。等客人都回去了，喜宴就結束了。|zhè gè shí hòu hěn duō rén huì gēn xīn rén yì qǐ zhào xiàng， zài duō shuō jǐ jù zhù fú de huà。 děng kè rén dōu huí qù le， xǐ yàn jiù jié shù le。|Lúc này nhiều người chụp ảnh cùng đôi tân hôn và nói thêm vài lời chúc phúc. Khi khách ra về hết thì tiệc cưới kết thúc.`}},{n:6,zh:"我打算搬到學校附近",vi:"Tôi định dọn đến gần trường",v:`李東健|lǐdōngjiàn|Lý Đông Kiện (người Seoul)|Name
搬|bān|dọn, chuyển|V
河邊|hébiān|bờ sông|N
公園|gōngyuán|công viên|N
腳踏車|jiǎotàchē|xe đạp|N
正在|zhèngzài|đang|Adv
網站|wǎngzhàn|trang web|N
資料|zīliào|thông tin, tài liệu|N
搬家|bānjiā|dọn nhà|V-sep
近|jìn|gần|Vs
合約|héyuē|hợp đồng|N
到期|dàoqī|đến hạn, hết hạn|Vp
還好|háihǎo|may mà|Adv
光線|guāngxiàn|ánh sáng|N
重要|zhòngyào|quan trọng|Vs
如果|rúguǒ|nếu|Conj
別的|biéde|khác|Det
合適|héshì|thích hợp|Vs
少|shǎo|thiếu|Vpt
可惜|kěxī|đáng tiếc|Vs
放|fàng|để, cất|V
兩邊|liǎngbiān|hai bên|N
願意|yuànyì|sẵn lòng|Vaux
開|kāi|lái (xe)|V
存|cún|lưu, cất giữ|V
隨身碟|suíshēndié|USB|N
什麼樣|shénmeyàng|loại nào, như thế nào|Phrase
慢慢來|mànmànlái|cứ từ từ|Phrase
不急|bùjí|không vội|Phrase
相當|xiāngdāng|khá, tương đối|Adv
自行車|zìxíngchē|xe đạp|N
床|chuáng|giường|N
桌子|zhuōzi|bàn|N
椅子|yǐzi|ghế|N
家具|jiājù|đồ nội thất|N
而且|érqiě|hơn nữa, mà còn|Conj
吵|chǎo|ồn ào|Vs
生活費|shēnghuófèi|chi phí sinh hoạt|N
低|dī|thấp|Vs
留|liú|ở lại, để lại|V
長|zhǎng|dài|Vs
討論|tǎolùn|thảo luận|V
社團|shètuán|câu lạc bộ, hội đoàn|N
活動|huódòng|hoạt động|N
失望|shīwàng|thất vọng|Vs
放心|fàngxīn|yên tâm|Vs-sep
用|yòng|dùng|V
首爾|shǒuěr|Seoul|Name`,d:{l:`美玲|你在做什麼？要不要到河邊的公園去騎騎腳踏車？|nǐ zài zuò shén me？ yào bú yào dào hé biān de gōng yuán qù qí qí jiǎo tà chē？|Bạn đang làm gì thế? Có muốn ra công viên ven sông đạp xe không?
東健|我正在網站上找租房子的資料。|wǒ zhèng zài wǎng zhàn shàng zhǎo zū fáng zi de zī liào。|Tôi đang tìm thông tin thuê nhà trên mạng.
美玲|我聽說你打算搬家？|wǒ tīng shuō nǐ dǎ suàn bān jiā？|Tôi nghe nói bạn định dọn nhà?
東健|是啊，我想搬到離學校近一點的地方。|shì a， wǒ xiǎng bān dào lí xué xiào jìn yì diǎn de dì fāng。|Ừ, tôi muốn dọn đến nơi gần trường hơn.
美玲|可是我記得你三個月以前才搬到這裡的。|kě shì wǒ jì dé nǐ sān gè yuè yǐ qián cái bān dào zhè lǐ de。|Nhưng tôi nhớ bạn mới dọn đến đây ba tháng trước mà.
東健|對，我的合約還沒到期。還好我有一個同學喜歡這個環境，他可以搬到這裡來住。|duì， wǒ de hé yuē hái méi dào qī。 hái hǎo wǒ yǒu yí gè tóng xué xǐ huān zhè gè huán jìng， tā kě yǐ bān dào zhè lǐ lái zhù。|Đúng, hợp đồng của tôi chưa hết hạn. May mà có một bạn học thích khu này, cậu ấy có thể dọn đến ở.
美玲|你想找什麼樣的房子？|nǐ xiǎng zhǎo shén me yàng de fáng zi？|Bạn muốn tìm nhà thế nào?
東健|我先找捷運站附近的房子。還有，環境好、光線好也很重要。|wǒ xiān zhǎo jié yùn zhàn fù jìn de fáng zi。 hái yǒu， huán jìng hǎo、 guāng xiàn hǎo yě hěn zhòng yào。|Tôi tìm nhà gần ga MRT trước. Ngoài ra môi trường tốt, ánh sáng tốt cũng rất quan trọng.
美玲|捷運站附近的房子比較貴吧？|jié yùn zhàn fù jìn de fáng zi bǐ jiào guì ba？|Nhà gần ga MRT chắc đắt hơn nhỉ?
東健|如果太貴，我再找別的地方。捷運站那麼多，我想應該有合適的。|rú guǒ tài guì， wǒ zài zhǎo bié de dì fāng。 jié yùn zhàn nà me duō， wǒ xiǎng yīng gāi yǒu hé shì de。|Nếu đắt quá tôi sẽ tìm chỗ khác. Ga MRT nhiều như vậy, chắc có chỗ thích hợp.
美玲|如果你搬家了，我就少了一個朋友跟我練習中文。好可惜！|rú guǒ nǐ bān jiā le， wǒ jiù shǎo le yí gè péng yǒu gēn wǒ liàn xí zhōng wén。 hǎo kě xī！|Nếu bạn dọn đi, tôi sẽ mất một người bạn luyện tiếng Trung. Tiếc quá!
東健|我會常來啊。我不會把東西都搬到新家，有一些東西，我會送給朋友或是先放在這裡。|wǒ huì cháng lái a。 wǒ bú huì bǎ dōng xī dōu bān dào xīn jiā， yǒu yì xiē dōng xī， wǒ huì sòng gěi péng yǒu huò shì xiān fàng zài zhè lǐ。|Tôi sẽ thường ghé mà. Tôi không dọn hết đồ sang nhà mới, một số đồ tôi sẽ tặng bạn bè hoặc để lại đây trước.
美玲|那麼，你要付兩邊的房租啊？|nà me， nǐ yào fù liǎng biān de fáng zū a？|Vậy bạn phải trả tiền thuê cả hai nơi à?
東健|這裡的房租當然是我同學付，他還願意開車幫我搬家。|zhè lǐ de fáng zū dāng rán shì wǒ tóng xué fù， tā hái yuàn yì kāi chē bāng wǒ bān jiā。|Tiền thuê ở đây tất nhiên bạn học của tôi trả, cậu ấy còn sẵn lòng lái xe giúp tôi chuyển nhà.
美玲|你同學真好！|nǐ tóng xué zhēn hǎo！|Bạn học của bạn tốt thật!
東健|是啊！他是我在台灣最好的朋友。妳再等我一下，我把資料存在隨身碟裡。|shì a！ tā shì wǒ zài tái wān zuì hǎo de péng yǒu。 nǐ zài děng wǒ yí xià， wǒ bǎ zī liào cún zài suí shēn dié lǐ。|Ừ! Cậu ấy là người bạn tốt nhất của tôi ở Đài Loan. Bạn đợi tôi một chút, tôi lưu thông tin vào USB.
美玲|慢慢來，不急！等一會兒我們再去騎腳踏車。|màn màn lái， bù jí！ děng yí huì ér wǒ men zài qù qí jiǎo tà chē。|Cứ từ từ, không vội! Lát nữa chúng ta lại đi đạp xe.
短文|李東健租的房子離師大相當遠，每天騎自行車到學校都得花一個小時左右，他覺得很不方便，所以他最近計畫找房子搬家。|lǐ dōng jiàn zū de fáng zi lí shī dà xiāng dāng yuǎn， měi tiān qí zì xíng chē dào xué xiào dōu dé huā yí gè xiǎo shí zuǒ yòu， tā jué dé hěn bù fāng biàn， suǒ yǐ tā zuì jìn jì huà zhǎo fáng zi bān jiā。|Nhà Lý Đông Kiện thuê cách Shida khá xa, mỗi ngày đạp xe đến trường mất khoảng một tiếng, anh thấy bất tiện nên gần đây dự định tìm nhà dọn đi.
短文|這一天，他在網站上看了很多租房子的資料。|zhè yì tiān， tā zài wǎng zhàn shàng kàn le hěn duō zū fáng zi de zī liào。|Hôm nay anh xem rất nhiều thông tin thuê nhà trên mạng.
短文|李東健最想在捷運站附近租一間套房，有床、桌子和椅子這些家具，而且房間的光線要好，環境也不要太吵。|lǐ dōng jiàn zuì xiǎng zài jié yùn zhàn fù jìn zū yì jiān tào fáng， yǒu chuáng、 zhuō zi hé yǐ zi zhè xiē jiā jù， ér qiě fáng jiān de guāng xiàn yào hǎo， huán jìng yě bú yào tài chǎo。|Đông Kiện muốn nhất là thuê một phòng studio gần ga MRT, có giường, bàn, ghế, ánh sáng phòng phải tốt và môi trường không quá ồn.
短文|可是台灣朋友都說，這種套房房租會比較貴，李東健覺得台北的生活費比首爾低，如果多花一點時間找，一定能找到便宜而且合適的。|kě shì tái wān péng yǒu dōu shuō， zhè zhǒng tào fáng fáng zū huì bǐ jiào guì， lǐ dōng jiàn jué dé tái běi de shēng huó fèi bǐ shǒu ěr dī， rú guǒ duō huā yì diǎn shí jiān zhǎo， yí dìng néng zhǎo dào pián yi ér qiě hé shì de。|Nhưng bạn Đài Loan đều bảo loại phòng này tiền thuê khá đắt; Đông Kiện thấy chi phí sinh hoạt Đài Bắc thấp hơn Seoul, nếu bỏ thêm thời gian tìm chắc chắn sẽ thấy phòng vừa rẻ vừa hợp.
短文|李東健想，如果他搬到學校附近住，除了留在圖書館的時間能長一點，可以念書、寫作業、跟同學討論功課，還可以參加一些學校的社團活動。|lǐ dōng jiàn xiǎng， rú guǒ tā bān dào xué xiào fù jìn zhù， chú le liú zài tú shū guǎn de shí jiān néng zhǎng yì diǎn， kě yǐ niàn shū、 xiě zuò yè、 gēn tóng xué tǎo lùn gōng kè， hái kě yǐ cān jiā yì xiē xué xiào de shè tuán huó dòng。|Anh nghĩ nếu dọn đến gần trường thì có thể ở thư viện lâu hơn để học bài, làm bài, thảo luận với bạn, còn có thể tham gia câu lạc bộ của trường.
短文|不過他的好朋友高美玲有一點失望，她覺得少了一個可以練習中文的朋友。|bú guò tā de hǎo péng yǒu gāo měi líng yǒu yì diǎn shī wàng， tā jué dé shǎo le yí gè kě yǐ liàn xí zhōng wén de péng yǒu。|Nhưng bạn thân Cao Mỹ Linh hơi thất vọng, cô thấy mất đi một người bạn để luyện tiếng Trung.
短文|李東健要高美玲放心，因為他打算把一些不常用的東西先留在這裡，所以還會常來找他們聊天。|lǐ dōng jiàn yào gāo měi líng fàng xīn， yīn wèi tā dǎ suàn bǎ yì xiē bù cháng yòng de dōng xī xiān liú zài zhè lǐ， suǒ yǐ hái huì cháng lái zhǎo tā men liáo tiān。|Đông Kiện bảo Mỹ Linh yên tâm vì anh định để lại đây vài món ít dùng nên vẫn sẽ thường đến trò chuyện với họ.`}},{n:7,zh:"垃圾車來了！",vi:"Xe rác đến rồi!",v:`垃圾|lājī|rác|N
倒|dào|đổ (rác)|V
丟|diū|ném, vứt|V
收|shōu|thu gom|V
以為|yǐwèi|tưởng rằng|Vst
回收|huíshōu|tái chế, thu hồi|V
規定|guīdìng|quy định|N
要不然|yàobùrán|nếu không thì|Conj
皮包|píbāo|túi xách, ví da|N
跑|pǎo|chạy|Vi
追|zhuī|đuổi theo|V
有趣|yǒuqù|thú vị|Vs
不壞|búhuài|không tệ|Vs
天天|tiāntiān|mỗi ngày|Phrase
汽水罐|qìshuǐguàn|lon nước ngọt|Phrase
紙杯|zhǐbēi|ly giấy|Phrase
放下|fàngxià|đặt xuống|Phrase
走出來|zǒuchūlái|đi ra|Phrase
怎麼辦|zěnmebàn|làm sao đây|Phrase
聊|liáo|trò chuyện|V
忽然|hūrán|đột nhiên|Adv
聲音|shēngyīn|âm thanh|N
奇怪|qíguài|kỳ lạ|Vs
袋子|dàizi|túi|N
輛|liàng|chiếc (lượng từ cho xe)|M
一定|yídìng|nhất định, cố định|Vs-attr
地點|dìdiǎn|địa điểm|N
為了|wèile|để, vì|Prep
保護|bǎohù|bảo vệ|V
分類|fēnlèi|phân loại|N
利用|lìyòng|tận dụng, sử dụng|V
紙|zhǐ|giấy|N
瓶子|píngzi|chai, lọ|N
塑膠|sùjiāo|nhựa|N
資源|zīyuán|tài nguyên|N
回收桶|huíshōutǒng|thùng tái chế|N
城市|chéngshì|thành phố|N
聽見|tīngjiàn|nghe thấy|Phrase
開過來|kāiguòlái|lái đến|Phrase
走過去|zǒuguòqù|đi sang|Phrase
丟進去|diūjìnqù|ném vào|Phrase
路上|lùshàng|trên đường|Phrase`,d:{l:`陳太太|東健，要出去啊？|dōng jiàn， yào chū qù a？|Đông Kiện, đi ra ngoài à?
東健|是啊！垃圾車快來了，我得趕快下樓去倒垃圾。|shì a！ lā jī chē kuài lái le， wǒ dé gǎn kuài xià lóu qù dào lā jī。|Vâng! Xe rác sắp đến, tôi phải nhanh xuống lầu đổ rác.
陳太太|丟垃圾？今天是星期三，不收垃圾啊！|diū lā jī？ jīn tiān shì xīng qī sān， bù shōu lā jī a！|Đổ rác? Hôm nay thứ Tư, không thu rác đâu!
東健|真的嗎？我以為天天都收。|zhēn de ma？ wǒ yǐ wèi tiān tiān dōu shōu。|Thật sao? Tôi tưởng ngày nào cũng thu.
陳太太|不是，每個星期三和星期天是不收的。|bú shì， měi gè xīng qī sān hé xīng qī tiān shì bù shōu de。|Không phải, mỗi thứ Tư và Chủ nhật không thu.
東健|那麼，我這些汽水罐和紙杯也不能拿出去回收了嗎？|nà me， wǒ zhè xiē qì shuǐ guàn hé zhǐ bēi yě bù néng ná chū qù huí shōu le ma？|Vậy mấy lon nước ngọt và ly giấy này cũng không đem đi tái chế được ạ?
陳太太|是啊！|shì a！|Đúng vậy!
東健|為什麼在台北倒垃圾這麼麻煩？|wèi shén me zài tái běi dào lā jī zhè me má fán？|Sao đổ rác ở Đài Bắc phiền phức thế?
陳太太|剛開始的時候，台北人也覺得這個規定很麻煩，現在大家都習慣了。|gāng kāi shǐ de shí hòu， tái běi rén yě jué dé zhè gè guī dìng hěn má fán， xiàn zài dà jiā dōu xí guàn le。|Lúc đầu người Đài Bắc cũng thấy quy định này phiền, giờ mọi người quen cả rồi.
東健|更麻煩的是，我一定要在晚上九點把垃圾拿出去，要不然就不能倒了。|gèng má fán de shì， wǒ yí dìng yào zài wǎn shàng jiǔ diǎn bǎ lā jī ná chū qù， yào bù rán jiù bù néng dào le。|Phiền hơn nữa là tôi nhất định phải mang rác ra lúc chín giờ tối, không thì không đổ được.
陳太太|你說的對，有一次，我一回來，垃圾車就來了。我馬上放下皮包，跑出去倒垃圾。|nǐ shuō de duì， yǒu yí cì， wǒ yì huí lái， lā jī chē jiù lái le。 wǒ mǎ shàng fàng xià pí bāo， pǎo chū qù dào lā jī。|Bạn nói đúng, có lần tôi vừa về thì xe rác đến. Tôi vội đặt túi xuống, chạy ra đổ rác.
東健|對啊！我常常看到有人追垃圾車。|duì a！ wǒ cháng cháng kàn dào yǒu rén zhuī lā jī chē。|Đúng vậy! Tôi hay thấy người ta chạy đuổi theo xe rác.
陳太太|晚上，這麼多人從家裡拿著垃圾走出來，一起站著等垃圾車，你不覺得很有趣嗎？|wǎn shàng， zhè me duō rén cóng jiā lǐ ná zhù lā jī zǒu chū lái， yì qǐ zhàn zhù děng lā jī chē， nǐ bù jué dé hěn yǒu qù ma？|Buổi tối, nhiều người xách rác từ nhà đi ra, cùng đứng chờ xe rác, bạn không thấy thú vị sao?
東健|大家常一邊聊天，一邊等，看起來真的很有意思。|dà jiā cháng yì biān liáo tiān， yì biān děng， kàn qǐ lái zhēn de hěn yǒu yì si。|Mọi người thường vừa trò chuyện vừa đợi, trông thật thú vị.
陳太太|雖然倒垃圾有點麻煩，但是好像也不壞。|suī rán dào lā jī yǒu diǎn má fán， dàn shì hǎo xiàng yě bú huài。|Tuy đổ rác hơi phiền nhưng hình như cũng không tệ.
東健|那麼，我這包垃圾怎麼辦？|nà me， wǒ zhè bāo lā jī zěn me bàn？|Vậy bọc rác này của tôi làm sao đây?
陳太太|你拿回家去，明天再倒吧！|nǐ ná huí jiā qù， míng tiān zài dào ba！|Bạn mang về nhà, mai hãy đổ!
短文|馬安同到台灣的第二天，晚上在房間上網，跟父母聊台灣的情形，他忽然聽見外面有音樂的聲音，可是不知道音樂是從哪裡來的，覺得有一點奇怪，所以從窗戶往外看。|mǎ ān tóng dào tái wān de dì èr tiān， wǎn shàng zài fáng jiān shàng wǎng， gēn fù mǔ liáo tái wān de qíng xíng， tā hū rán tīng jiàn wài miàn yǒu yīn lè de shēng yīn， kě shì bù zhī dào yīn lè shì cóng nǎ lǐ lái de， jué dé yǒu yì diǎn qí guài， suǒ yǐ cóng chuāng hù wǎng wài kàn。|Ngày thứ hai đến Đài Loan, tối đó An Đồng lên mạng trong phòng trò chuyện với cha mẹ thì bỗng nghe tiếng nhạc bên ngoài, không biết từ đâu tới, thấy hơi lạ nên nhìn ra cửa sổ.
短文|他看見很多人拿著袋子往路口走，路口已經站了很多人，才知道是垃圾車的音樂。那輛垃圾車一開過來，大家就走過去把手裡的垃圾丟進去。|tā kàn jiàn hěn duō rén ná zhù dài zi wǎng lù kǒu zǒu， lù kǒu yǐ jīng zhàn le hěn duō rén， cái zhī dào shì lā jī chē de yīn lè。 nà liàng lā jī chē yì kāi guò lái， dà jiā jiù zǒu guò qù bǎ shǒu lǐ de lā jī diū jìn qù。|Anh thấy nhiều người xách túi đi về phía ngã tư, ở đó đã đứng đông người, lúc ấy mới biết là nhạc của xe rác. Xe rác vừa đến, mọi người đi tới ném rác trong tay vào xe.
短文|外國人剛到台北，不知道哪裡可以丟垃圾，也不知道什麼時候可以丟垃圾，馬安同問了台灣人才知道，台北的垃圾車只在一定的時間、一定的地點收垃圾。|wài guó rén gāng dào tái běi， bù zhī dào nǎ lǐ kě yǐ diū lā jī， yě bù zhī dào shén me shí hòu kě yǐ diū lā jī， mǎ ān tóng wèn le tái wān rén cái zhī dào， tái běi de lā jī chē zhǐ zài yí dìng de shí jiān、 yí dìng de dì diǎn shōu lā jī。|Người nước ngoài mới đến Đài Bắc không biết đổ rác ở đâu, lúc nào; An Đồng hỏi người Đài Loan mới biết xe rác Đài Bắc chỉ thu vào giờ cố định, địa điểm cố định.
短文|雖然有點麻煩，但是路上沒有垃圾，對台北的環境比較好。|suī rán yǒu diǎn má fán， dàn shì lù shàng méi yǒu lā jī， duì tái běi de huán jìng bǐ jiào hǎo。|Tuy hơi phiền nhưng trên đường không có rác, tốt hơn cho môi trường Đài Bắc.
短文|為了保護環境，大家都應該做垃圾分類，那些可以再利用的紙、瓶子、塑膠杯都要回收，丟進資源回收桶裡。|wèi le bǎo hù huán jìng， dà jiā dōu yīng gāi zuò lā jī fēn lèi， nà xiē kě yǐ zài lì yòng de zhǐ、 píng zi、 sù jiāo bēi dōu yào huí shōu， diū jìn zī yuán huí shōu tǒng lǐ。|Để bảo vệ môi trường, mọi người đều nên phân loại rác, giấy, chai, ly nhựa có thể tái sử dụng đều phải thu hồi, bỏ vào thùng tái chế.
短文|現在大家都知道，一個乾乾淨淨的城市也是一個進步的城市。|xiàn zài dà jiā dōu zhī dào， yí gè qián qián jìng jìng de chéng shì yě shì yí gè jìn bù de chéng shì。|Giờ ai cũng biết một thành phố sạch sẽ cũng là một thành phố tiến bộ.`}},{n:8,zh:"學功夫",vi:"Học võ công (Kungfu)",v:`功夫|gōngfu|công phu, võ thuật|N
叫|jiào|gọi|V
見|jiàn|(trợ từ kết quả: thấy, nghe thấy)|Ptc
推|tuī|đẩy|V
體育館|tǐyùguǎn|nhà thi đấu, phòng tập thể thao|N
太極拳|tàijíquán|Thái cực quyền|N
師父|shīfù|sư phụ, thầy|N
天分|tiānfèn|năng khiếu|N
懂|dǒng|hiểu|Vpt
起來|qǐlái|ngủ dậy, dậy|Vp
動作|dòngzuò|động tác|N
輕|qīng|nhẹ nhàng|Vs
腿|tuǐ|chân (cẳng chân, đùi)|N
了|le|(liǎo) được, nổi (bổ ngữ khả năng)|Ptc
下去|xiàqù|tiếp tục (làm gì)|Ptc
興趣|xìngqù|hứng thú, sở thích|N
借|jiè|mượn|V
有天分|yǒutiānfèn|có năng khiếu|Phrase
學會|xuéhuì|học được, học xong|Phrase
起不來|qǐbùlái|không dậy nổi|Phrase
走不了路|zǒubùliǎolù|không đi nổi|Phrase
好處|hǎochù|lợi ích|N
抱怨|bàoyuàn|phàn nàn|Vi
公尺|gōngchǐ|mét|N
總是|zǒngshì|luôn luôn|Adv
完|wán|xong, hết|Ptc
體力|tǐlì|thể lực|N
整天|zhěngtiān|cả ngày|N
精神|jīngshén|tinh thần, sức sống|N
本來|běnlái|vốn dĩ, lúc đầu|Adv
可能|kěnéng|có thể, có lẽ|Vaux
回|huí|về|V
影響|yǐngxiǎng|ảnh hưởng|V
身體|shēntǐ|cơ thể, sức khỏe|N
練|liàn|luyện tập|V
想起|xiǎngqǐ|nhớ lại, nghĩ đến|Phrase`,d:{l:`東健|安同！安同！|ān tóng！ ān tóng！|An Đồng! An Đồng!
安同|東健！對不起，沒聽見你叫我。|dōng jiàn！ duì bù qǐ， méi tīng jiàn nǐ jiào wǒ。|Đông Kiện! Xin lỗi, tôi không nghe thấy bạn gọi.
東健|音樂那麼吵，你當然聽不見。|yīn lè nà me chǎo， nǐ dāng rán tīng bú jiàn。|Nhạc ồn thế, tất nhiên bạn không nghe thấy.
安同|有什麼事嗎？|yǒu shén me shì ma？|Có chuyện gì không?
東健|沒事，只是一到學校門口，就看見你推著腳踏車走過來。|méi shì， zhǐ shì yí dào xué xiào mén kǒu， jiù kàn jiàn nǐ tuī zhù jiǎo tà chē zǒu guò lái。|Không có gì, chỉ là vừa đến cổng trường thì thấy bạn dắt xe đạp đi tới.
安同|你下午要做什麼？|nǐ xià wǔ yào zuò shén me？|Chiều bạn định làm gì?
東健|我要去體育館運動。對了，你現在還在學太極拳嗎？|wǒ yào qù tǐ yù guǎn yùn dòng。 duì le， nǐ xiàn zài hái zài xué tài jí quán ma？|Tôi đến nhà thể thao tập. À, bạn còn đang học Thái cực quyền không?
安同|是啊！我的師父說我有天分，學得不錯。|shì a！ wǒ de shī fù shuō wǒ yǒu tiān fèn， xué dé bú cuò。|Còn chứ! Sư phụ nói tôi có năng khiếu, học khá tốt.
東健|你師父是台灣人吧？他說中文你聽得懂嗎？|nǐ shī fù shì tái wān rén ba？ tā shuō zhōng wén nǐ tīng dé dǒng ma？|Sư phụ bạn là người Đài Loan nhỉ? Thầy nói tiếng Trung bạn nghe hiểu không?
安同|剛開始我都聽不懂，可是現在沒問題了。|gāng kāi shǐ wǒ dōu tīng bù dǒng， kě shì xiàn zài méi wèn tí le。|Lúc đầu tôi nghe không hiểu gì, nhưng giờ không sao rồi.
東健|太極拳難嗎？你學了多久了？|tài jí quán nán ma？ nǐ xué le duō jiǔ le？|Thái cực quyền có khó không? Bạn học bao lâu rồi?
安同|不太容易，而且要很早起來。我學了三個多月了，才學會了一點。|bú tài róng yì， ér qiě yào hěn zǎo qǐ lái。 wǒ xué le sān gè duō yuè le， cái xué huì le yì diǎn。|Không dễ lắm, lại phải dậy rất sớm. Tôi học hơn ba tháng rồi mà mới học được chút ít.
東健|可是太極拳的動作看起來慢慢的，輕輕的，應該很輕鬆。|kě shì tài jí quán de dòng zuò kàn qǐ lái màn màn de， qīng qīng de， yīng gāi hěn qīng sōng。|Nhưng động tác Thái cực quyền trông chậm rãi, nhẹ nhàng, chắc là thoải mái lắm.
安同|那些動作好像很容易，但是剛開始的時候，我早上常常累得起不來，腿也痛得走不了路。|nà xiē dòng zuò hǎo xiàng hěn róng yì， dàn shì gāng kāi shǐ de shí hòu， wǒ zǎo shàng cháng cháng lèi dé qǐ bù lái， tuǐ yě tòng dé zǒu bù liǎo lù。|Động tác trông có vẻ dễ nhưng lúc đầu tôi sáng nào cũng mệt đến không dậy nổi, chân đau đến đi không nổi.
東健|那你怎麼還學得下去？|nà nǐ zěn me hái xué dé xià qù？|Vậy sao bạn vẫn học tiếp được?
安同|雖然很累，可是這是我的興趣。|suī rán hěn lèi， kě shì zhè shì wǒ de xìng qù。|Tuy mệt nhưng đây là sở thích của tôi.
東健|你下午沒事吧？要不要跟我一起去運動？|nǐ xià wǔ méi shì ba？ yào bú yào gēn wǒ yì qǐ qù yùn dòng？|Chiều bạn rảnh chứ? Có muốn đi tập cùng tôi không?
安同|好啊！我先去圖書館借書，下午再跟你去運動。|hǎo a！ wǒ xiān qù tú shū guǎn jiè shū， xià wǔ zài gēn nǐ qù yùn dòng。|Được chứ! Tôi đến thư viện mượn sách trước, chiều sẽ đi tập với bạn.
短文|今天李東健跟馬安同在體育館運動的時候，安同一直跟他說學太極拳的好處，還問他有沒有興趣，下次練習的時候可以帶他一起去。|jīn tiān lǐ dōng jiàn gēn mǎ ān tóng zài tǐ yù guǎn yùn dòng de shí hòu， ān tóng yì zhí gēn tā shuō xué tài jí quán de hǎo chù， hái wèn tā yǒu méi yǒu xìng qù， xià cì liàn xí de shí hòu kě yǐ dài tā yì qǐ qù。|Hôm nay lúc tập ở nhà thể thao, An Đồng cứ nói với Đông Kiện về lợi ích của Thái cực quyền, còn hỏi anh có hứng thú không, lần tập sau có thể dẫn anh đi cùng.
短文|東健想起安同剛開始學功夫的時候，常跟他抱怨，師父每次練習以前，都要大家先跑一千公尺，安同總是最後一個跑完，有的時候還跑不完。|dōng jiàn xiǎng qǐ ān tóng gāng kāi shǐ xué gōng fu de shí hòu， cháng gēn tā bào yuàn， shī fù měi cì liàn xí yǐ qián， dōu yào dà jiā xiān pǎo yì qiān gōng chǐ， ān tóng zǒng shì zuì hòu yí gè pǎo wán， yǒu de shí hòu hái pǎo bù wán。|Đông Kiện nhớ lúc An Đồng mới học võ hay phàn nàn rằng trước mỗi buổi tập sư phụ bắt mọi người chạy một nghìn mét, An Đồng luôn là người chạy xong cuối cùng, có lúc còn chạy không nổi.
短文|現在，東健發現安同的體力比三個月以前好多了，上了整天的課，安同還是很有精神。|xiàn zài， dōng jiàn fā xiàn ān tóng de tǐ lì bǐ sān gè yuè yǐ qián hǎo duō le， shàng le zhěng tiān de kè， ān tóng hái shì hěn yǒu jīng shén。|Giờ Đông Kiện thấy thể lực của An Đồng tốt hơn ba tháng trước nhiều, học cả ngày mà An Đồng vẫn rất khỏe khoắn.
短文|李東健本來以為學功夫要花很多時間，安同可能沒有時間念書了，但是安同為了多練習，每天一下課，就回宿舍念書、做功課。|lǐ dōng jiàn běn lái yǐ wèi xué gōng fu yào huā hěn duō shí jiān， ān tóng kě néng méi yǒu shí jiān niàn shū le， dàn shì ān tóng wèi le duō liàn xí， měi tiān yí xià kè， jiù huí sù shè niàn shū、 zuò gōng kè。|Đông Kiện vốn tưởng học võ tốn nhiều thời gian, An Đồng có thể không còn thì giờ học, nhưng để luyện nhiều hơn, mỗi ngày vừa tan học anh về ký túc xá học bài, làm bài.
短文|做完了功課，再去練習。雖然練習的時間不少，但是一點都沒影響安同的成績。|zuò wán le gōng kè， zài qù liàn xí。 suī rán liàn xí de shí jiān bù shǎo， dàn shì yì diǎn dōu méi yǐng xiǎng ān tóng de chéng jī。|Làm xong bài thì đi luyện tập. Tuy thời gian luyện không ít nhưng hoàn toàn không ảnh hưởng đến thành tích của An Đồng.
短文|李東健看馬安同學了太極拳以後，身體健康了，功課也進步了，覺得練太極拳的好處真不少，決定明天就跟安同說他也要學太極拳。|lǐ dōng jiàn kàn mǎ ān tóng xué le tài jí quán yǐ hòu， shēn tǐ jiàn kāng le， gōng kè yě jìn bù le， jué dé liàn tài jí quán de hǎo chù zhēn bù shǎo， jué dìng míng tiān jiù gēn ān tóng shuō tā yě yào xué tài jí quán。|Đông Kiện thấy sau khi học Thái cực quyền An Đồng khỏe hơn, bài vở cũng tiến bộ, thấy lợi ích của việc luyện Thái cực quyền không ít nên quyết định mai sẽ nói với An Đồng rằng mình cũng muốn học.`}},{n:9,zh:"那個城市好漂亮",vi:"Thành phố đó đẹp quá",v:`春假|chūnjià|kỳ nghỉ xuân|N
好|hǎo|xong, tốt (trợ từ kết quả: hoàn tất đúng cách)|Ptc
到|dào|được, đạt (trợ từ kết quả: hoàn thành)|Ptc
特色|tèsè|nét đặc sắc|N
夠|gòu|đủ|Vs-pred
顏色|yánsè|màu sắc|N
廟|miào|miếu, chùa|N
像|xiàng|giống|Vst
教堂|jiàotáng|nhà thờ|N
南部|nánbù|miền nam|N
潛水|qiánshuǐ|lặn|V-sep
各|gè|các, mỗi|Det
魚|yú|cá|N
酸|suān|chua|Vs
檸檬|níngméng|chanh|N
味道|wèidào|mùi vị|N
泰國|tàiguó|Thái Lan|Name
比起來|bǐqǐlái|so với|Phrase
極了|jíle|cực kỳ, vô cùng|Phrase
忘不了|wàngbùliǎo|không thể quên|Phrase
鄉下|xiāngxià|nông thôn, miền quê|N
氣氛|qìfēn|bầu không khí|N
鎮|zhèn|thị trấn|N
不同|bùtóng|khác nhau|Vs
現代|xiàndài|hiện đại|N
公寓|gōngyù|chung cư|N
馬路|mǎlù|đường phố|N
寬|kuān|rộng|Vs
汽車|qìchē|ô tô|N
建築|jiànzhù|kiến trúc, công trình xây dựng|N
老|lǎo|cũ, già|Vs
層|céng|tầng|M
北部|běibù|miền bắc|N
熱情|rèqíng|nhiệt tình, hiếu khách|Vs
擠|jǐ|chật chội, đông đúc|Vs
飲料|yǐnliào|đồ uống|N
巴黎|bālí|Paris|Name
高雄市|gāoxióngshì|thành phố Cao Hùng|Name
中南部|zhōngnánbù|miền trung và nam|Phrase
買得起|mǎidéqǐ|mua nổi|Phrase
百貨公司|bǎihuògōngsī|trung tâm bách hóa|Phrase
越來越|yuèláiyuè|càng ngày càng|Phrase`,d:{l:`美玲|我放春假的時候到泰國去玩了一個星期，你呢？|wǒ fàng chūn jià de shí hòu dào tài guó qù wán le yí gè xīng qī， nǐ ne？|Kỳ nghỉ xuân tôi đi Thái Lan chơi một tuần, còn bạn?
東健|我哪裡也沒去，忙著搬家。|wǒ nǎ lǐ yě méi qù， máng zhù bān jiā。|Tôi chẳng đi đâu cả, bận chuyển nhà.
美玲|都搬好了嗎？|dōu bān hǎo le ma？|Chuyển xong hết rồi à?
東健|都搬好了。泰國怎麼樣？|dōu bān hǎo le。 tài guó zěn me yàng？|Xong hết rồi. Thái Lan thế nào?
美玲|我好喜歡，沒想到泰國這麼有特色，玩一個星期也不夠。|wǒ hǎo xǐ huān， méi xiǎng dào tài guó zhè me yǒu tè sè， wán yí gè xīng qī yě bú gòu。|Tôi rất thích, không ngờ Thái Lan đặc sắc thế, chơi một tuần cũng không đủ.
東健|真的啊！有些什麼特色呢？|zhēn de a！ yǒu xiē shén me tè sè ne？|Thật à! Có những nét đặc sắc gì vậy?
美玲|那裡的房子很漂亮，跟法國的比起來，顏色比較多。|nà lǐ de fáng zi hěn piào liàng， gēn fǎ guó de bǐ qǐ lái， yán sè bǐ jiào duō。|Nhà ở đó rất đẹp, so với Pháp thì nhiều màu sắc hơn.
東健|聽說泰國的廟很多。|tīng shuō tài guó de miào hěn duō。|Nghe nói Thái Lan có rất nhiều chùa.
美玲|是。泰國到處都是廟，就像法國有很多教堂一樣。|shì。 tài guó dào chù dōu shì miào， jiù xiàng fǎ guó yǒu hěn duō jiào táng yí yàng。|Đúng. Thái Lan đâu đâu cũng có chùa, giống như Pháp có nhiều nhà thờ.
東健|泰國的海邊怎麼樣？|tài guó de hǎi biān zěn me yàng？|Biển Thái Lan thế nào?
美玲|美極了。我到南部的小島去潛水，藍藍的海水非常乾淨，看得見各種顏色的魚。|měi jí le。 wǒ dào nán bù de xiǎo dǎo qù qián shuǐ， lán lán de hǎi shuǐ fēi cháng qián jìng， kàn dé jiàn gè zhǒng yán sè de yú。|Đẹp tuyệt. Tôi ra đảo nhỏ phía nam lặn biển, nước biển xanh biếc rất sạch, thấy được cá đủ màu.
東健|聽起來好美啊！除了到處去玩，妳一定也吃了很多泰國菜吧？|tīng qǐ lái hǎo měi a！ chú le dào chù qù wán， nǐ yí dìng yě chī le hěn duō tài guó cài ba？|Nghe đẹp quá! Ngoài đi chơi khắp nơi, chắc bạn cũng ăn nhiều món Thái nhỉ?
美玲|當然啊，在那裡吃的泰國菜跟我在法國吃的不一樣。|dāng rán a， zài nà lǐ chī de tài guó cài gēn wǒ zài fǎ guó chī de bù yí yàng。|Tất nhiên rồi, món Thái ăn ở đó khác món tôi ăn ở Pháp.
東健|有什麼不一樣？|yǒu shén me bù yí yàng？|Khác chỗ nào?
美玲|在法國，沒有那麼多酸酸辣辣的菜，但是在泰國，很多菜都放了檸檬，味道比較酸。|zài fǎ guó， méi yǒu nà me duō suān suān là là de cài， dàn shì zài tài guó， hěn duō cài dōu fàng le níng méng， wèi dào bǐ jiào suān。|Ở Pháp không có nhiều món chua cay như vậy, còn ở Thái nhiều món cho chanh nên vị chua hơn.
東健|泰國這麼好玩，妳不想回來吧？|tài guó zhè me hǎo wán， nǐ bù xiǎng huí lái ba？|Thái Lan vui thế, chắc bạn không muốn về nhỉ?
美玲|對啊！這些都是忘不了的經驗。如果不必上課，我一定要多住一個月。|duì a！ zhè xiē dōu shì wàng bù liǎo de jīng yàn。 rú guǒ bú bì shàng kè， wǒ yí dìng yào duō zhù yí gè yuè。|Đúng vậy! Đó đều là trải nghiệm không quên được. Nếu không phải đi học, tôi nhất định ở thêm một tháng.
東健|妳下次去的時候，我可以跟妳一起去嗎？|nǐ xià cì qù de shí hòu， wǒ kě yǐ gēn nǐ yì qǐ qù ma？|Lần sau bạn đi, tôi đi cùng được không?
美玲|好，沒問題。|hǎo， méi wèn tí。|Được, không vấn đề.
短文|高美玲利用放假的時候到處去旅行，她喜歡台北這個大城市，也喜歡中南部鄉下。|gāo měi líng lì yòng fàng jià de shí hòu dào chù qù lǚ xíng， tā xǐ huān tái běi zhè gè dà chéng shì， yě xǐ huān zhōng nán bù xiāng xià。|Cao Mỹ Linh tận dụng kỳ nghỉ đi du lịch khắp nơi, cô thích thành phố lớn Đài Bắc, cũng thích vùng quê miền trung nam.
短文|因為她家在巴黎，已經習慣大城市熱鬧的氣氛，但是她覺得台灣鄉下小鎮也很有意思。|yīn wèi tā jiā zài bā lí， yǐ jīng xí guàn dà chéng shì rè nào de qì fēn， dàn shì tā jué dé tái wān xiāng xià xiǎo zhèn yě hěn yǒu yì si。|Vì nhà cô ở Paris, đã quen không khí náo nhiệt của đô thị lớn, nhưng cô thấy các thị trấn quê Đài Loan cũng rất thú vị.
短文|高美玲發現中南部跟台北有很多不同的地方。台北市區現代的公寓、大樓比較多，馬路寬、汽車多。|gāo měi líng fā xiàn zhōng nán bù gēn tái běi yǒu hěn duō bù tóng de dì fāng。 tái běi shì qū xiàn dài de gōng yù、 dà lóu bǐ jiào duō， mǎ lù kuān、 qì chē duō。|Mỹ Linh nhận ra miền trung nam và Đài Bắc có nhiều điểm khác. Nội thành Đài Bắc có nhiều chung cư, tòa nhà hiện đại, đường rộng, xe nhiều.
短文|中南部除了新建築，也看得見傳統的老房子。她在高雄市看見很多三層樓的房子，朋友告訴她，買得起房子的南部人，比較喜歡這種房子。|zhōng nán bù chú le xīn jiàn zhù， yě kàn dé jiàn chuán tǒng de lǎo fáng zi。 tā zài gāo xióng shì kàn jiàn hěn duō sān céng lóu de fáng zi， péng yǒu gào sù tā， mǎi dé qǐ fáng zi de nán bù rén， bǐ jiào xǐ huān zhè zhǒng fáng zi。|Miền trung nam ngoài công trình mới còn thấy nhà cổ truyền thống. Ở Cao Hùng cô thấy nhiều nhà ba tầng, bạn bảo người miền nam mua nổi nhà thường thích loại này.
短文|台灣不是很大，但是南部的天氣比北部好多了。夏天雖然熱得很，可是冬天不冷，而且不常下雨。|tái wān bú shì hěn dà， dàn shì nán bù de tiān qì bǐ běi bù hǎo duō le。 xià tiān suī rán rè dé hěn， kě shì dōng tiān bù lěng， ér qiě bù cháng xià yǔ。|Đài Loan không lớn nhưng thời tiết miền nam tốt hơn miền bắc nhiều. Mùa hè tuy rất nóng nhưng mùa đông không lạnh, lại ít mưa.
短文|美玲覺得可能天氣好，所以南部人很熱情。|měi líng jué dé kě néng tiān qì hǎo， suǒ yǐ nán bù rén hěn rè qíng。|Mỹ Linh nghĩ có lẽ thời tiết tốt nên người miền nam rất hiếu khách.
短文|台北跟中南部比起來，雖然生活費高，環境比較擠，但是美玲還是喜歡住在台北。|tái běi gēn zhōng nán bù bǐ qǐ lái， suī rán shēng huó fèi gāo， huán jìng bǐ jiào jǐ， dàn shì měi líng hái shì xǐ huān zhù zài tái běi。|So với miền trung nam, Đài Bắc tuy chi phí sinh hoạt cao, môi trường đông đúc hơn nhưng Mỹ Linh vẫn thích sống ở Đài Bắc.
短文|她覺得台北到處都有餐廳、便利商店，百貨公司也很多，什麼時候都吃得到飯，也買得到飲料，所以她越來越喜歡生活方便的台北了。|tā jué dé tái běi dào chù dōu yǒu cān tīng、 biàn lì shāng diàn， bǎi huò gōng sī yě hěn duō， shén me shí hòu dōu chī dé dào fàn， yě mǎi dé dào yǐn liào， suǒ yǐ tā yuè lái yuè xǐ huān shēng huó fāng biàn de tái běi le。|Cô thấy Đài Bắc đâu cũng có nhà hàng, cửa hàng tiện lợi, trung tâm bách hóa cũng nhiều, lúc nào cũng có cơm ăn, nước uống nên cô càng ngày càng thích Đài Bắc tiện nghi.`}},{n:10,zh:"歡迎到我家來包餃子",vi:"Mời đến nhà tôi gói sủi cảo",v:`馬丁|mǎdīng|Martin (người Anh)|Name
包|bāo|gói|V
餃子|jiǎozi|sủi cảo, bánh xếp|N
脫|tuō|cởi (quần áo, giày)|V
鞋|xié|giày|N
關|guān|đóng|V
門|mén|cửa|N
春捲|chūnjuǎn|chả giò, gỏi cuốn|N
泡菜|pàocài|kim chi, rau muối|N
飯廳|fàntīng|phòng ăn|N
下|xià|chứa được, đủ chỗ|Ptc
洗|xǐ|rửa|V
做菜|zuòcài|nấu ăn|V-sep
水餃|shuǐjiǎo|sủi cảo luộc|N
煮|zhǔ|nấu, luộc|V
壞|huài|hỏng|Vp
破|pò|rách, vỡ|Vp
餡兒|xiànér|nhân (bánh)|N
扁|biǎn|dẹt|Vs
材料|cáiliào|nguyên liệu|N
道|dào|món (lượng từ cho món ăn)|M
飽|bǎo|no|Vs
光|guāng|hết sạch|Ptc
鍋子|guōzi|nồi, chảo|N
筷子|kuàizi|đũa|N
碗|wǎn|bát, tô|N
韓國|hánguó|Hàn Quốc|Name
看不出來|kànbùchūlái|không nhìn ra được|Phrase
酸辣湯|suānlàtāng|súp chua cay|Phrase
學期|xuéqī|học kỳ|N
趁|chèn|nhân lúc, tranh thủ|Prep
皮|pí|vỏ, lớp bọc|N
嚐|cháng|nếm|V
大白菜|dàbáicài|cải thảo|N
加|jiā|thêm|V
鹽|yán|muối|N
拌|bàn|trộn|V
辣椒|làjiāo|ớt|N
調味料|diàowèiliào|gia vị|N
裝|zhuāng|đựng, cho vào|V
玻璃|bōlí|thủy tinh|N
壽司|shòusī|sushi|N
像|xiàng|chẳng hạn như, như là|Vst
食物|shíwù|thức ăn|N
做起來|zuòqǐlái|làm thử thì|Phrase`,d:{l:`張老師|歡迎，歡迎，大家請進，不要脫鞋。月美，麻煩妳關門。|huān yíng， huān yíng， dà jiā qǐng jìn， bú yào tuō xié。 yuè měi， má fán nǐ guān mén。|Hoan nghênh, mời mọi người vào, không cần cởi giày. Nguyệt Mỹ, phiền em đóng cửa.
月美|謝謝老師請我們來包餃子，我也帶了我們越南的春捲。|xiè xiè lǎo shī qǐng wǒ men lái bāo jiǎo zi， wǒ yě dài le wǒ men yuè nán de chūn juǎn。|Cảm ơn thầy mời chúng em đến gói sủi cảo, em cũng mang chả giò Việt Nam của chúng em đến.
東健|張老師，這是我做的韓國泡菜。|zhāng lǎo shī， zhè shì wǒ zuò de hán guó pào cài。|Thầy Trương, đây là kim chi Hàn Quốc em làm.
張老師|看不出來你還會做泡菜！馬丁、高美玲，你們也帶東西來了啊？|kàn bù chū lái nǐ hái huì zuò pào cài！ mǎ dīng、 gāo měi líng， nǐ men yě dài dōng xī lái le a？|Nhìn không ra em còn biết làm kim chi! Martin, Cao Mỹ Linh, các em cũng mang đồ đến à?
馬丁|我們剛剛去超市買了水果跟飲料。老師，你們家的飯廳真大。|wǒ men gāng gāng qù chāo shì mǎi le shuǐ guǒ gēn yǐn liào。 lǎo shī， nǐ men jiā de fàn tīng zhēn dà。|Bọn em vừa ra siêu thị mua trái cây và đồ uống. Thầy ơi, phòng ăn nhà thầy rộng thật.
美玲|老師家的飯廳應該坐得下十個人吧？|lǎo shī jiā de fàn tīng yīng gāi zuò dé xià shí gè rén ba？|Phòng ăn nhà thầy chắc ngồi được mười người nhỉ?
張老師|坐得下，所以請你們幾個人一起來吃飯沒問題。|zuò dé xià， suǒ yǐ qǐng nǐ men jǐ gè rén yì qǐ lái chī fàn méi wèn tí。|Ngồi được, nên mời mấy em đến ăn cơm không thành vấn đề.
東健|老師，我們要幫忙準備什麼？|lǎo shī， wǒ men yào bāng máng zhǔn bèi shén me？|Thầy ơi, chúng em cần giúp chuẩn bị gì?
張老師|我把包餃子的東西都準備好了，你們去把手洗一洗，我們就開始包吧！|wǒ bǎ bāo jiǎo zi de dōng xī dōu zhǔn bèi hǎo le， nǐ men qù bǎ shǒu xǐ yì xǐ， wǒ men jiù kāi shǐ bāo ba！|Thầy đã chuẩn bị xong đồ gói sủi cảo, các em đi rửa tay rồi chúng ta bắt đầu gói nhé!
美玲|這是我第一次包餃子，你們包過嗎？|zhè shì wǒ dì yī cì bāo jiǎo zi， nǐ men bāo guò ma？|Đây là lần đầu tôi gói sủi cảo, các bạn đã từng gói chưa?
月美|我跟馬丁以前上過做菜的課，包過水餃，對不對？|wǒ gēn mǎ dīng yǐ qián shàng guò zuò cài de kè， bāo guò shuǐ jiǎo， duì bú duì？|Tôi và Martin trước đây từng học lớp nấu ăn, có gói sủi cảo, đúng không?
馬丁|包過，可是我包的水餃一煮就壞了。|bāo guò， kě shì wǒ bāo de shuǐ jiǎo yì zhǔ jiù huài le。|Từng gói, nhưng sủi cảo tôi gói vừa luộc là hỏng.
張老師|不是壞了，是煮破了。如果你們沒把餃子包好，一煮就破了。|bú shì huài le， shì zhǔ pò le。 rú guǒ nǐ men méi bǎ jiǎo zi bāo hǎo， yì zhǔ jiù pò le。|Không phải hỏng, là luộc bị rách. Nếu các em không gói kỹ thì vừa luộc là rách.
東健|老師，您看我這麼包，對嗎？|lǎo shī， nín kàn wǒ zhè me bāo， duì ma？|Thầy xem em gói thế này có đúng không ạ?
張老師|很好，不過你還可以多放一點餡兒，如果扁扁的，看起來就不像餃子了。|hěn hǎo， bú guò nǐ hái kě yǐ duō fàng yì diǎn xiàn ér， rú guǒ biǎn biǎn de， kàn qǐ lái jiù bú xiàng jiǎo zi le。|Tốt lắm, nhưng em có thể cho thêm ít nhân, nếu dẹt lép trông sẽ không giống sủi cảo.
月美|老師，我們五個人要包多少餃子？|lǎo shī， wǒ men wǔ gè rén yào bāo duō shǎo jiǎo zi？|Thầy ơi, năm người chúng em phải gói bao nhiêu sủi cảo?
張老師|我準備的材料大概可以包一百多個，再做幾道菜，還有一大碗酸辣湯，應該夠了。大家一定都吃得飽。|wǒ zhǔn bèi de cái liào dà gài kě yǐ bāo yì bǎi duō gè， zài zuò jǐ dào cài， hái yǒu yí dà wǎn suān là tāng， yīng gāi gòu le。 dà jiā yí dìng dōu chī dé bǎo。|Nguyên liệu thầy chuẩn bị gói được hơn một trăm cái, thêm vài món và một tô lớn súp chua cay chắc đủ. Chắc chắn ai cũng no.
美玲|馬丁，你來以前不是一直說餓嗎？你能吃幾個餃子？|mǎ dīng， nǐ lái yǐ qián bú shì yì zhí shuō è ma？ nǐ néng chī jǐ gè jiǎo zi？|Martin, trước khi đến bạn chẳng phải cứ kêu đói sao? Bạn ăn được mấy cái sủi cảo?
馬丁|我想我吃得下二十個，要是妳吃不完，我可以幫妳吃。|wǒ xiǎng wǒ chī de xià èr shí gè， yào shì nǐ chī bù wán， wǒ kě yǐ bāng nǐ chī。|Tôi nghĩ tôi ăn nổi hai mươi cái, nếu bạn ăn không hết tôi giúp bạn ăn.
張老師|大家最好能把餃子都吃光。你們包，我去把鍋子洗了，就要準備煮餃子了。|dà jiā zuì hǎo néng bǎ jiǎo zi dōu chī guāng。 nǐ men bāo， wǒ qù bǎ guō zi xǐ le， jiù yào zhǔn bèi zhǔ jiǎo zi le。|Tốt nhất mọi người ăn hết sạch sủi cảo. Các em gói đi, thầy đi rửa nồi rồi chuẩn bị luộc.
月美|老師，我幫您把筷子和碗放在桌上。|lǎo shī， wǒ bāng nín bǎ kuài zi hé wǎn fàng zài zhuō shàng。|Thầy ơi, em giúp thầy đặt đũa và bát lên bàn.
短文|這個學期，馬丁、陳月美、高美玲和李東健都是張老師的學生，他們趁學期結束以前的一個週末，到張老師家包餃子。|zhè gè xué qī， mǎ dīng、 chén yuè měi、 gāo měi líng hé lǐ dōng jiàn dōu shì zhāng lǎo shī de xué shēng， tā men chèn xué qī jié shù yǐ qián de yí gè zhōu mò， dào zhāng lǎo shī jiā bāo jiǎo zi。|Học kỳ này Martin, Trần Nguyệt Mỹ, Cao Mỹ Linh và Lý Đông Kiện đều là học trò của thầy Trương, họ tranh thủ một cuối tuần trước khi hết học kỳ đến nhà thầy gói sủi cảo.
短文|張老師已經把餃子餡兒跟餃子皮都準備好了。到了老師家以後，張老師就教他們怎麼包餃子，怎麼把餃子包得好看，怎麼包不容易煮破。|zhāng lǎo shī yǐ jīng bǎ jiǎo zi xiàn ér gēn jiǎo zi pí dōu zhǔn bèi hǎo le。 dào le lǎo shī jiā yǐ hòu， zhāng lǎo shī jiù jiào tā men zěn me bāo jiǎo zi， zěn me bǎ jiǎo zi bāo dé hǎo kàn， zěn me bāo bù róng yì zhǔ pò。|Thầy đã chuẩn bị sẵn nhân và vỏ. Đến nhà thầy, thầy dạy cách gói, cách gói cho đẹp và cách gói để luộc không dễ rách.
短文|除了包餃子，李東健跟陳月美還帶了自己做的韓國泡菜和越南春捲請大家吃。大家嚐了泡菜都說看不出來李東健會做泡菜。|chú le bāo jiǎo zi， lǐ dōng jiàn gēn chén yuè měi hái dài le zì jǐ zuò de hán guó pào cài hé yuè nán chūn juǎn qǐng dà jiā chī。 dà jiā cháng le pào cài dōu shuō kàn bù chū lái lǐ dōng jiàn huì zuò pào cài。|Ngoài gói sủi cảo, Đông Kiện và Nguyệt Mỹ còn mang kim chi Hàn Quốc và chả giò Việt Nam tự làm mời mọi người. Ai nếm kim chi cũng bảo nhìn không ra Đông Kiện biết làm kim chi.
短文|李東健說他是跟媽媽學的，做起來不太難。先把大白菜洗乾淨，加鹽拌一拌，再放辣椒和調味料，最後裝進玻璃或是塑膠罐裡，放一下就可以吃了。|lǐ dōng jiàn shuō tā shì gēn mā mā xué de， zuò qǐ lái bú tài nán。 xiān bǎ dà bái cài xǐ qián jìng， jiā yán bàn yí bàn， zài fàng là jiāo hé diào wèi liào， zuì hòu zhuāng jìn bō lí huò shì sù jiāo guàn lǐ， fàng yí xià jiù kě yǐ chī le。|Đông Kiện nói anh học từ mẹ, làm không khó lắm. Rửa sạch cải thảo, thêm muối trộn, rồi cho ớt và gia vị, cuối cùng cho vào hũ thủy tinh hoặc nhựa, để một lúc là ăn được.
短文|張老師也說，像中國的餃子、韓國的泡菜，或是越南的春捲、日本的壽司，材料很容易買得到，做起來也不難，都是大家常吃的食物。|zhāng lǎo shī yě shuō， xiàng zhōng guó de jiǎo zi、 hán guó de pào cài， huò shì yuè nán de chūn juǎn、 rì běn de shòu sī， cái liào hěn róng yì mǎi dé dào， zuò qǐ lái yě bù nán， dōu shì dà jiā cháng chī de shí wù。|Thầy Trương cũng nói như sủi cảo Trung Quốc, kim chi Hàn Quốc, chả giò Việt Nam hay sushi Nhật Bản, nguyên liệu dễ mua, làm cũng không khó, đều là món mọi người thường ăn.`}},{n:11,zh:"台灣好玩的地方真多",vi:"Đài Loan có thật nhiều nơi vui chơi",v:`其他|qítā|khác, còn lại|Det
假期|jiàqī|kỳ nghỉ|N
溫泉|wēnquán|suối nước nóng|N
建議|jiànyì|đề nghị, gợi ý|V
票|piào|vé|N
考慮|kǎolǜ|cân nhắc|V
順便|shùnbiàn|tiện thể|Adv
湖|hú|hồ|N
原住民|yuánzhùmín|người bản địa|N
趟|tàng|chuyến, lần (đi)|M
後來|hòulái|sau đó|Adv
注意|zhùyì|chú ý|V
沙灘|shātān|bãi cát|N
錢包|qiánbāo|ví tiền|N
不見|bújiàn|mất, biến mất|Vp
被|bèi|bị, được (câu bị động)|Ptc
偷|tōu|ăn trộm|V
安全|ānquán|an toàn|Vs
值得|zhíde|đáng|Vs
墾丁|kěndīng|Khẩn Đinh (vùng cực nam Đài Loan nổi tiếng với biển)|Name
台中|táizhōng|Đài Trung|Name
日月潭|rìyuètán|hồ Nhật Nguyệt|Name
水上活動|shuǐshànghuódòng|hoạt động trên nước|Phrase
風景區|fēngjǐngqū|khu danh lam thắng cảnh|Phrase
又|yòu|rồi lại, sau đó lại|Adv
遍|biàn|lượt, lần (xem hết từ đầu đến cuối)|M
民宿|mínsù|nhà nghỉ homestay|N
運氣|yùnqì|vận may|N
摩托車|mótuōchē|xe máy|N
熱帶|rèdài|vùng nhiệt đới|N
植物|zhíwù|thực vật|N
所有|suǒyǒu|tất cả|Vs-attr
白天|báitiān|ban ngày|N
躺|tǎng|nằm|Vi
黃昏|huánghūn|hoàng hôn|N
條|tiáo|con đường (lượng từ)|M
街|jiē|phố|N
啤酒|píjiǔ|bia|N
上|shàng|(trợ từ chỉ sự tiếp xúc, ví dụ 愛上)|Ptc
浪漫|làngmàn|lãng mạn|Vs
家鄉|jiāxiāng|quê hương|N
觀光客|guānguāngkè|khách du lịch|Phrase
曬太陽|shàitàiyáng|tắm nắng|Phrase
水上摩托車|shuǐshàngmótuōchē|mô tô nước|Phrase
愛上|àishàng|phải lòng, yêu thích|Phrase`,d:{l:`馬丁|我來台灣以後，沒離開過台北，所以想到其他地方去看看。|wǒ lái tái wān yǐ hòu， méi lí kāi guò tái běi， suǒ yǐ xiǎng dào qí tā dì fāng qù kàn kàn。|Từ khi đến Đài Loan tôi chưa rời Đài Bắc, nên muốn đến những nơi khác xem thử.
如玉|假期快到了，你可以計畫一下啊！|jià qī kuài dào le， nǐ kě yǐ jì huà yí xià a！|Kỳ nghỉ sắp đến rồi, bạn có thể lên kế hoạch đi!
馬丁|你們去過很多地方，可不可以告訴我，哪裡一定要去看看呢？|nǐ men qù guò hěn duō dì fāng， kě bù kě yǐ gào sù wǒ， nǎ lǐ yí dìng yào qù kàn kàn ne？|Các bạn đã đi nhiều nơi, có thể cho tôi biết nơi nào nhất định phải đến không?
美玲|如果你喜歡海邊和游泳，可以到墾丁去，那裡有各種水上活動。|rú guǒ nǐ xǐ huān hǎi biān hé yóu yǒng， kě yǐ dào kěn dīng qù， nà lǐ yǒu gè zhǒng shuǐ shàng huó dòng。|Nếu bạn thích biển và bơi lội thì đến Khẩn Đinh, ở đó có đủ loại hoạt động trên nước.
如玉|上次我朋友來，去綠島玩了三天，她說風景很美，而且海邊有個溫泉，非常特別。|shàng cì wǒ péng yǒu lái， qù lǜ dǎo wán le sān tiān， tā shuō fēng jǐng hěn měi， ér qiě hǎi biān yǒu gè wēn quán， fēi cháng tè bié。|Lần trước bạn tôi đến, đi đảo Xanh chơi ba ngày, cô ấy bảo phong cảnh rất đẹp, ngoài ra bên bờ biển có suối nước nóng, rất đặc biệt.
美玲|綠島我去過兩次。如果時間夠，我建議你去看看。|lǜ dǎo wǒ qù guò liǎng cì。 rú guǒ shí jiān gòu， wǒ jiàn yì nǐ qù kàn kàn。|Tôi đã đến đảo Xanh hai lần. Nếu đủ thời gian tôi đề nghị bạn đến xem.
如玉|夏天去綠島的人很多，船票常常買不到，你可以考慮去墾丁，交通比較方便。|xià tiān qù lǜ dǎo de rén hěn duō， chuán piào cháng cháng mǎi bú dào， nǐ kě yǐ kǎo lǜ qù kěn dīng， jiāo tōng bǐ jiào fāng biàn。|Mùa hè người đi đảo Xanh rất đông, vé tàu thường mua không được, bạn có thể cân nhắc Khẩn Đinh, giao thông tiện hơn.
美玲|墾丁也不錯。你回來的時候，可以順便去台中玩，台中附近也有很多有名的風景區。|kěn dīng yě bú cuò。 nǐ huí lái de shí hòu， kě yǐ shùn biàn qù tái zhōng wán， tái zhōng fù jìn yě yǒu hěn duō yǒu míng de fēng jǐng qū。|Khẩn Đinh cũng không tệ. Khi về bạn có thể tiện đường ghé Đài Trung, gần Đài Trung cũng có nhiều khu danh lam nổi tiếng.
馬丁|噢！我聽說有個地方叫什麼湖？|ō！ wǒ tīng shuō yǒu gè dì fāng jiào shén me hú？|Ồ! Tôi nghe nói có nơi gọi là hồ gì đó?
如玉|你說的是日月潭吧！在台灣中部，離台中不遠。那裡不錯，有山有水，還有原住民的文化。|nǐ shuō de shì rì yuè tán ba！ zài tái wān zhōng bù， lí tái zhōng bù yuǎn。 nà lǐ bú cuò， yǒu shān yǒu shuǐ， hái yǒu yuán zhù mín de wén huà。|Bạn nói là hồ Nhật Nguyệt nhỉ! Ở miền trung Đài Loan, không xa Đài Trung. Chỗ đó tuyệt, có núi có nước, còn có văn hóa người bản địa.
馬丁|我也聽說台中的夜市有各種小吃，比台北多。|wǒ yě tīng shuō tái zhōng de yè shì yǒu gè zhǒng xiǎo chī， bǐ tái běi duō。|Tôi cũng nghe nói chợ đêm Đài Trung có đủ món ăn vặt, nhiều hơn Đài Bắc.
美玲|對，上個月我本來計畫去台中玩一趟，後來因為颱風就沒去。|duì， shàng gè yuè wǒ běn lái jì huà qù tái zhōng wán yí tàng， hòu lái yīn wèi tái fēng jiù méi qù。|Đúng, tháng trước tôi vốn định đi Đài Trung chơi một chuyến, sau đó vì bão nên không đi.
如玉|好可惜，台中很有意思。|hǎo kě xī， tái zhōng hěn yǒu yì si。|Tiếc quá, Đài Trung rất thú vị.
美玲|沒關係，以後一定還有機會。|méi guān xì， yǐ hòu yí dìng hái yǒu jī huì。|Không sao, sau này chắc còn cơ hội.
馬丁|聽了你們的建議，我打算先去墾丁，然後再到台中去玩。|tīng le nǐ men de jiàn yì， wǒ dǎ suàn xiān qù kěn dīng， rán hòu zài dào tái zhōng qù wán。|Nghe đề nghị của các bạn, tôi định đến Khẩn Đinh trước rồi mới đi Đài Trung chơi.
如玉|夏天去玩的人很多，去墾丁一定要先訂好旅館，才不會找不到地方住。|xià tiān qù wán de rén hěn duō， qù kěn dīng yí dìng yào xiān dìng hǎo lǚ guǎn， cái bú huì zhǎo bú dào dì fāng zhù。|Mùa hè người đi chơi đông, đến Khẩn Đinh nhất định phải đặt khách sạn trước, mới không bị không có chỗ ở.
馬丁|還要注意什麼呢？|hái yào zhù yì shén me ne？|Còn cần chú ý gì nữa?
美玲|我上一次去的時候，把錢包和衣服放在沙灘上，沒想到錢包不見了，大概被偷了。|wǒ shàng yí cì qù de shí hòu， bǎ qián bāo hé yī fú fàng zài shā tān shàng， méi xiǎng dào qián bāo bú jiàn le， dà gài bèi tōu le。|Lần trước tôi đi, để ví và quần áo trên bãi cát, không ngờ ví biến mất, chắc bị trộm.
如玉|雖然台灣很安全，但是還是要小心一點啊！|suī rán tái wān hěn ān quán， dàn shì hái shì yào xiǎo xīn yì diǎn a！|Tuy Đài Loan rất an toàn nhưng vẫn phải cẩn thận một chút!
美玲|除了這件事，墾丁真的很值得去。|chú le zhè jiàn shì， kěn dīng zhēn de hěn zhí de qù。|Ngoài chuyện đó, Khẩn Đinh thật sự rất đáng đến.
短文|馬丁利用學期假到台灣中南部去玩了一趟。他先到南部的墾丁去住了三天，然後又到台中玩了兩天，玩得開心極了。|mǎ dīng lì yòng xué qī jiǎ dào tái wān zhōng nán bù qù wán le yí tàng。 tā xiān dào nán bù de kěn dīng qù zhù le sān tiān， rán hòu yòu dào tái zhōng wán le liǎng tiān， wán dé kāi xīn jí le。|Martin tận dụng kỳ nghỉ học kỳ đi chơi miền trung nam Đài Loan một chuyến. Anh ở Khẩn Đinh ba ngày trước, rồi đến Đài Trung chơi hai ngày, vui cực kỳ.
短文|去旅行以前，馬丁把網路上的各種資料都看了一遍。因為夏天觀光客多，很難訂到房間，他就先訂了一家在網路上很多人都說不錯的民宿。|qù lǚ xíng yǐ qián， mǎ dīng bǎ wǎng lù shàng de gè zhǒng zī liào dōu kàn le yí biàn。 yīn wèi xià tiān guān guāng kè duō， hěn nán dìng dào fáng jiān， tā jiù xiān dìng le yì jiā zài wǎng lù shàng hěn duō rén dōu shuō bú cuò de mín sù。|Trước chuyến đi, Martin xem hết một lượt các thông tin trên mạng. Vì mùa hè khách du lịch đông, khó đặt phòng nên anh đặt trước một homestay được nhiều người trên mạng khen.
短文|沒想到民宿就在海邊，風景比網站上的照片更漂亮，他覺得自己的運氣太好了。|méi xiǎng dào mín sù jiù zài hǎi biān， fēng jǐng bǐ wǎng zhàn shàng de zhào piān gèng piào liàng， tā jué dé zì jǐ de yùn qì tài hǎo le。|Không ngờ homestay ngay bên bờ biển, cảnh còn đẹp hơn ảnh trên mạng, anh thấy mình thật may mắn.
短文|馬丁一到墾丁，就租了摩托車到處逛逛。墾丁除了漂亮的海邊，還有很多熱帶植物。他第一天就把所有的地方都逛了一遍。|mǎ dīng yí dào kěn dīng， jiù zū le mó tuō chē dào chù guàng guàng。 kěn dīng chú le piào liàng de hǎi biān， hái yǒu hěn duō rè dài zhí wù。 tā dì yī tiān jiù bǎ suǒ yǒu de dì fāng dōu guàng le yí biàn。|Vừa đến Khẩn Đinh, Martin thuê xe máy đi dạo khắp nơi. Ngoài bờ biển đẹp, Khẩn Đinh còn nhiều thực vật nhiệt đới. Ngày đầu anh đã đi hết một lượt mọi nơi.
短文|第二天白天，馬丁去海邊游泳，累了，就躺在沙灘上曬太陽。因為看見很多人在騎水上摩托車，他也試了試。|dì èr tiān bái tiān， mǎ dīng qù hǎi biān yóu yǒng， lèi le， jiù tǎng zài shā tān shàng shài tài yáng。 yīn wèi kàn jiàn hěn duō rén zài qí shuǐ shàng mó tuō chē， tā yě shì le shì。|Ban ngày hôm sau, Martin ra biển bơi, mệt thì nằm trên bãi cát tắm nắng. Thấy nhiều người chạy mô tô nước, anh cũng thử.
短文|黃昏，馬丁逛到墾丁最熱鬧的那條街，看見賣各國食物的餐廳，他選了一家走進去。|huáng hūn， mǎ dīng guàng dào kěn dīng zuì rè nào de nà tiáo jiē， kàn jiàn mài gè guó shí wù de cān tīng， tā xuǎn le yì jiā zǒu jìn qù。|Chiều tà, Martin đi đến con phố sầm uất nhất Khẩn Đinh, thấy các nhà hàng bán món ăn nhiều nước, anh chọn một quán bước vào.
短文|在餐廳裡，馬丁聽著音樂、喝著啤酒，跟別的觀光客聊聊天，他愛上了這種輕鬆又浪漫的氣氛，好像回到了自己的家鄉。馬丁覺得這一趟旅行真是太值得了。|zài cān tīng lǐ， mǎ dīng tīng zhù yīn lè、 hē zhù pí jiǔ， gēn bié de guān guāng kè liáo liáo tiān， tā ài shàng le zhè zhǒng qīng sōng yòu làng màn de qì fēn， hǎo xiàng huí dào le zì jǐ de jiā xiāng。 mǎ dīng jué dé zhè yí tàng lǚ xíng zhēn shì tài zhí de le。|Trong quán, Martin nghe nhạc, uống bia, trò chuyện với du khách khác, anh yêu bầu không khí thoải mái và lãng mạn này, như trở về quê nhà. Martin thấy chuyến đi thật đáng giá.`}},{n:12,zh:"怎麼吃才健康？",vi:"Ăn thế nào mới khỏe mạnh?",v:`新|xīn|mới (vừa mới)|Adv
開|kāi|mở (cửa hàng)|V
素食|sùshí|đồ ăn chay|N
速食|sùshí|đồ ăn nhanh|N
錯|cuò|sai, nhầm|Vp
肉|ròu|thịt|N
欸|āi|ê (này)|Ptc
讓|ràng|để, khiến|V
吃素|chīsù|ăn chay|V-sep
漢堡|hànbǎo|hamburger|N
變|biàn|trở nên, biến thành|Vp
胖|pàng|mập, béo|Vs
素菜|sùcài|món chay|N
油膩|yóunì|nhiều dầu mỡ, ngấy|Vs
樣|yàng|loại, món|M
好奇|hàoqí|tò mò|Vs
女孩|nǚhái|cô gái|N
青菜|qīngcài|rau xanh|N
瘦|shòu|gầy, ốm|Vs
室友|shìyǒu|bạn cùng phòng|N
豬肉|zhūròu|thịt heo|N
西方|xīfāng|phương Tây|N
完全|wánquán|hoàn toàn|Adv
鹹|xián|mặn|Vs
炸|zhà|chiên rán|V
烤|kǎo|nướng|V
沙拉|shālā|salad|N
麥當勞|màidāngláo|McDonald's|Name
速食店|sùshídiàn|tiệm đồ ăn nhanh|Phrase
只要|zhǐyào|chỉ cần|Conj
討厭|tǎoyàn|ghét|Vst
餐|cān|bữa (ăn)|M
宗教|zōngjiào|tôn giáo|N
關係|guānxì|quan hệ, liên quan|N
薯條|shǔtiáo|khoai tây chiên|N
作法|zuòfǎ|cách làm|N
越|yuè|càng|Adv
簡單|jiǎndān|đơn giản|Vs
蒸|zhēng|hấp|V
有機|yǒujī|hữu cơ|Vs-attr
食品|shípǐn|thực phẩm|N
地球|dìqiú|trái đất|N
汙染|wūrǎn|ô nhiễm|N
嚴重|yánzhòng|nghiêm trọng|Vs
衛生|wèishēng|vệ sinh|N
營養|yíngyǎng|dinh dưỡng|N
什麼的|shénmede|vân vân|Phrase`,d:{l:`月美|我正在等白如玉，我們要去吃飯，你想跟我們一起去嗎？|wǒ zhèng zài děng bái rú yù， wǒ men yào qù chī fàn， nǐ xiǎng gēn wǒ men yì qǐ qù ma？|Tôi đang đợi Bạch Như Ngọc, chúng tôi đi ăn, bạn có muốn đi cùng không?
馬丁|好啊！妳們要去吃什麼？|hǎo a！ nǐ men yào qù chī shén me？|Được chứ! Các bạn đi ăn gì?
月美|我們打算去學校對面一家新開的素食餐廳。|wǒ men dǎ suàn qù xué xiào duì miàn yì jiā xīn kāi de sù shí cān tīng。|Bọn tôi định đến nhà hàng chay mới mở đối diện trường.
馬丁|速食？學校對面有「麥當勞」？我怎麼沒注意到？|sù shí？ xué xiào duì miàn yǒu 「mài dāng láo」？ wǒ zěn me méi zhù yì dào？|Đồ ăn nhanh? Đối diện trường có McDonald's? Sao tôi không để ý nhỉ?
月美|你想錯了，不是麥當勞那種速食店，是不吃肉的素食餐廳。|nǐ xiǎng cuò le， bú shì mài dāng láo nà zhǒng sù shí diàn， shì bù chī ròu de sù shí cān tīng。|Bạn nghĩ sai rồi, không phải tiệm đồ ăn nhanh kiểu McDonald's, mà là nhà hàng chay không ăn thịt.
馬丁|新開的餐廳我都想去嚐一嚐，好，我跟妳們一起去。|xīn kāi de cān tīng wǒ dōu xiǎng qù cháng yì cháng， hǎo， wǒ gēn nǐ men yì qǐ qù。|Nhà hàng mới mở nào tôi cũng muốn nếm thử, được, tôi đi cùng các bạn.
如玉|欸！馬丁，好久不見！月美，對不起，讓妳等了這麼久。|āi！ mǎ dīng， hǎo jiǔ bú jiàn！ yuè měi， duì bù qǐ， ràng nǐ děng le zhè me jiǔ。|Ê! Martin, lâu rồi không gặp! Nguyệt Mỹ, xin lỗi để bạn đợi lâu.
月美|沒關係，我也剛下課。馬丁也跟我們去吃飯。|méi guān xì， wǒ yě gāng xià kè。 mǎ dīng yě gēn wǒ men qù chī fàn。|Không sao, tôi cũng vừa tan học. Martin cũng đi ăn với chúng ta.
如玉|馬丁，你拿了這麼多菜，我沒想到你也喜歡吃素。|mǎ dīng， nǐ ná le zhè me duō cài， wǒ méi xiǎng dào nǐ yě xǐ huān chī sù。|Martin, bạn lấy nhiều món thế, tôi không ngờ bạn cũng thích ăn chay.
馬丁|我是到了台灣以後才覺得吃素不錯，我以前吃漢堡的機會比較多。|wǒ shì dào le tái wān yǐ hòu cái jué dé chī sù bú cuò， wǒ yǐ qián chī hàn bǎo de jī huì bǐ jiào duō。|Đến Đài Loan tôi mới thấy ăn chay cũng hay, trước đây tôi hay ăn hamburger hơn.
如玉|漢堡吃多了對健康不好，而且容易讓你變胖。|hàn bǎo chī duō le duì jiàn kāng bù hǎo， ér qiě róng yì ràng nǐ biàn pàng。|Ăn nhiều hamburger không tốt cho sức khỏe, lại dễ khiến bạn béo.
月美|我在越南就常常吃素。還有，這家餐廳的素菜看起來不油膩，好像每一樣都值得試試。|wǒ zài yuè nán jiù cháng cháng chī sù。 hái yǒu， zhè jiā cān tīng de sù cài kàn qǐ lái bù yóu nì， hǎo xiàng měi yí yàng dōu zhí de shì shì。|Ở Việt Nam tôi cũng hay ăn chay. Ngoài ra món chay nhà hàng này trông không ngấy, hình như món nào cũng đáng thử.
馬丁|我很好奇台灣女孩是不是都喜歡吃青菜？她們看起來個個都很瘦。|wǒ hěn hào qí tái wān nǚ hái shì bú shì dōu xǐ huān chī qīng cài？ tā men kàn qǐ lái gè gè dōu hěn shòu。|Tôi tò mò không biết các cô gái Đài Loan có phải đều thích ăn rau không? Trông ai cũng gầy.
月美|這也不一定，我室友吃素，但是有一點胖。如玉，我記得妳男朋友不吃肉，對不對？|zhè yě bù yí dìng， wǒ shì yǒu chī sù， dàn shì yǒu yì diǎn pàng。 rú yù， wǒ jì dé nǐ nán péng yǒu bù chī ròu， duì bú duì？|Cũng chưa chắc, bạn cùng phòng tôi ăn chay mà vẫn hơi mập. Như Ngọc, tôi nhớ bạn trai bạn không ăn thịt, đúng không?
如玉|對，牛肉、豬肉，他不常吃，他只吃魚。|duì， niú ròu、 zhū ròu， tā bù cháng chī， tā zhǐ chī yú。|Đúng, thịt bò, thịt heo anh ấy ít ăn, chỉ ăn cá.
月美|我聽說西方一些吃素的人跟我們不太一樣，我們是完全不吃肉的。|wǒ tīng shuō xī fāng yì xiē chī sù de rén gēn wǒ men bú tài yí yàng， wǒ men shì wán quán bù chī ròu de。|Tôi nghe nói một số người ăn chay phương Tây khác chúng ta, chúng ta hoàn toàn không ăn thịt.
馬丁|我覺得吃素應該是為了健康。|wǒ jué dé chī sù yīng gāi shì wèi le jiàn kāng。|Tôi thấy ăn chay chắc là vì sức khỏe.
如玉|菜的味道不要太鹹，不要常吃炸的、烤的東西，就比較健康。|cài de wèi dào bú yào tài xián， bú yào cháng chī zhà de、 kǎo de dōng xī， jiù bǐ jiào jiàn kāng。|Món ăn đừng quá mặn, đừng thường ăn đồ chiên, nướng thì sẽ khỏe hơn.
月美|下次有機會，請你們吃我做的越南素食。|xià cì yǒu jī huì， qǐng nǐ men chī wǒ zuò de yuè nán sù shí。|Lần sau có dịp mời các bạn ăn đồ chay Việt Nam tôi nấu.
如玉|我也可以做一些青菜沙拉請大家吃。|wǒ yě kě yǐ zuò yì xiē qīng cài shā lā qǐng dà jiā chī。|Tôi cũng có thể làm salad rau mời mọi người.
馬丁|真的？太好了，我希望多吃素，瘦一點，讓自己更健康。|zhēn de？ tài hǎo le， wǒ xī wàng duō chī sù， shòu yì diǎn， ràng zì jǐ gèng jiàn kāng。|Thật à? Tuyệt quá, tôi muốn ăn chay nhiều hơn, gầy bớt, khỏe hơn.
如玉|快一點吃吧！我跟月美等一下還要準備下午的考試。|kuài yì diǎn chī ba！ wǒ gēn yuè měi děng yí xià hái yào zhǔn bèi xià wǔ de kǎo shì。|Ăn nhanh nào! Lát nữa tôi và Nguyệt Mỹ còn phải chuẩn bị bài thi chiều.
短文|白如玉、馬丁和陳月美一起到一家素食餐廳吃午餐，他們聊起吃素的經驗。|bái rú yù、 mǎ dīng hé chén yuè měi yì qǐ dào yì jiā sù shí cān tīng chī wǔ cān， tā men liáo qǐ chī sù de jīng yàn。|Bạch Như Ngọc, Martin và Trần Nguyệt Mỹ cùng đến một nhà hàng chay ăn trưa, họ trò chuyện về kinh nghiệm ăn chay.
短文|他們注意到只要在學校附近就找得到素食餐廳，他們也覺得很多台灣人都不討厭吃素，但是不一定餐餐都吃素；還有，很多台灣人吃素是因為宗教的關係。|tā men zhù yì dào zhǐ yào zài xué xiào fù jìn jiù zhǎo de dào sù shí cān tīng， tā men yě jué dé hěn duō tái wān rén dōu bù tǎo yàn chī sù， dàn shì bù yí dìng cān cān dōu chī sù； hái yǒu， hěn duō tái wān rén chī sù shì yīn wèi zōng jiào de guān xì。|Họ để ý chỉ cần ở gần trường là tìm được nhà hàng chay, cũng thấy nhiều người Đài Loan không ghét ăn chay nhưng không nhất thiết bữa nào cũng chay; ngoài ra nhiều người ăn chay vì tôn giáo.
短文|白如玉說她吃素跟宗教沒有關係，只是覺得吃太多肉容易變胖。她建議馬丁應該少吃一點漢堡、薯條什麼的，多吃青菜，可以讓身體更健康。|bái rú yù shuō tā chī sù gēn zōng jiào méi yǒu guān xì， zhǐ shì jué dé chī tài duō ròu róng yì biàn pàng。 tā jiàn yì mǎ dīng yīng gāi shǎo chī yì diǎn hàn bǎo、 shǔ tiáo shén me de， duō chī qīng cài， kě yǐ ràng shēn tǐ gèng jiàn kāng。|Như Ngọc nói cô ăn chay không liên quan tôn giáo, chỉ thấy ăn nhiều thịt dễ béo. Cô khuyên Martin nên bớt hamburger, khoai tây chiên…, ăn nhiều rau để khỏe hơn.
短文|陳月美也同意，最好不要常吃炸的、烤的食物，菜的作法越簡單越好，煮的或是蒸的東西，都不太油膩。|chén yuè měi yě tóng yì， zuì hǎo bú yào cháng chī zhà de、 kǎo de shí wù， cài de zuò fǎ yuè jiǎn dān yuè hǎo， zhǔ de huò shì zhēng de dōng xī， dōu bú tài yóu nì。|Nguyệt Mỹ cũng đồng ý, tốt nhất đừng thường ăn đồ chiên, nướng, cách nấu càng đơn giản càng tốt, món luộc hay hấp đều không ngấy.
短文|陳月美還說，在她家附近有一家賣有機食品的店，天天都有很多人去買他們的食品，好像人人都很注意身體健康。|chén yuè měi hái shuō， zài tā jiā fù jìn yǒu yì jiā mài yǒu jī shí pǐn de diàn， tiān tiān dōu yǒu hěn duō rén qù mǎi tā men de shí pǐn， hǎo xiàng rén rén dōu hěn zhù yì shēn tǐ jiàn kāng。|Nguyệt Mỹ còn nói gần nhà cô có cửa hàng thực phẩm hữu cơ, ngày nào cũng nhiều người đến mua, dường như ai cũng chú ý sức khỏe.
短文|他們覺得，這大概是因為地球的環境汙染越來越嚴重，不少人吃了有問題的食物就生病了，所以才慢慢開始注意食品的衛生和營養問題。|tā men jué dé， zhè dà gài shì yīn wèi dì qiú de huán jìng wū rǎn yuè lái yuè yán zhòng， bù shǎo rén chī le yǒu wèn tí de shí wù jiù shēng bìng le， suǒ yǐ cái màn màn kāi shǐ zhù yì shí pǐn de wèi shēng hé yíng yǎng wèn tí。|Họ cho rằng có lẽ vì ô nhiễm môi trường trái đất ngày càng nặng, không ít người ăn thực phẩm có vấn đề rồi sinh bệnh, nên dần dần mới bắt đầu chú ý vệ sinh và dinh dưỡng thực phẩm.
短文|馬丁聽了以後說，他可以趁在台灣的機會，多吃吃素食，讓自己瘦下來。|mǎ dīng tīng le yǐ hòu shuō， tā kě yǐ chèn zài tái wān de jī huì， duō chī chī sù shí， ràng zì jǐ shòu xià lái。|Nghe xong Martin nói anh có thể tranh thủ lúc ở Đài Loan ăn chay nhiều hơn để gầy bớt.`}},{n:13,zh:"我的手機掉了",vi:"Tôi làm rơi điện thoại rồi",v:`林愛麗|línàilì|Lâm Ái Lệ (cô gái người Canada)|Name
掉|diào|rơi, mất|Vp
低頭|dītóu|cúi đầu|V-sep
傳|chuán|gửi (tin nhắn, email)|V
過|guò|(trợ từ hoàn thành hành động)|Ptc
簡訊|jiǎnxùn|tin nhắn SMS|N
功能|gōngnéng|chức năng|N
生氣|shēngqì|tức giận|Vs-sep
叫|jiào|bảo, dặn|V
罵|mà|mắng|V
健身房|jiànshēnfáng|phòng tập gym|N
啦|la|(trợ từ cuối câu: la)|Ptc
查|chá|tra cứu|V
班機|bānjī|chuyến bay|N
訂位|dìngwèi|đặt chỗ|V-sep
電|diàn|điện|N
充電|chōngdiàn|sạc pin|V-sep
糊塗|hútú|lơ đễnh, hồ đồ|Vs
喔|ō|nhé (trợ từ gợi ý)|Ptc
義大利|yìdàlì|nước Ý|Name
拿走|názǒu|lấy đi|Phrase
撿到|jiǎndào|nhặt được|Phrase
留下|liúxià|giữ lại, để lại|Phrase
網路|wǎnglù|mạng internet|N
發生|fāshēng|xảy ra|Vp
事情|shìqíng|sự việc|N
消息|xiāoxī|tin tức|N
透過|tòuguò|thông qua|Prep
世界|shìjiè|thế giới|N
節省|jiéshěng|tiết kiệm|V
起床|qǐchuáng|ngủ dậy|Vp-sep
檢查|jiǎnchá|kiểm tra|V
郵件|yóujiàn|thư điện tử|N
立刻|lìkè|lập tức|Adv
上傳|shàngchuán|tải lên, đăng|V
正常|zhèngcháng|bình thường|Vs
談|tán|bàn bạc, nói về|V
現代人|xiàndàirén|người hiện đại|Phrase
比方說|bǐfāngshuō|ví dụ|Phrase
做到|zuòdào|làm được|Phrase
第一手|dìyīshǒu|trực tiếp, đầu tiên|Phrase
急著|jízhù|vội vàng|Phrase
打招呼|dǎzhāohū|chào hỏi|Phrase
面對面|miànduìmiàn|mặt đối mặt|Phrase`,d:{l:`愛麗|怎麼了？在找什麼？|zěn me le？ zài zhǎo shén me？|Sao vậy? Bạn tìm gì thế?
馬丁|找我的手機，我怎麼找都找不到。|zhǎo wǒ de shǒu jī， wǒ zěn me zhǎo dōu zhǎo bú dào。|Tìm điện thoại của tôi, tìm thế nào cũng không thấy.
愛麗|我早上還看到你在餐廳低頭玩手機，你是不是在餐廳掉的？|wǒ zǎo shàng hái kàn dào nǐ zài cān tīng dī tóu wán shǒu jī， nǐ shì bú shì zài cān tīng diào de？|Sáng nay tôi còn thấy bạn cúi đầu chơi điện thoại ở nhà hàng, có phải bạn đánh rơi ở đó không?
馬丁|不是，我離開餐廳後，還給義大利朋友傳過簡訊。|bú shì， wǒ lí kāi cān tīng hòu， hái gěi yì dà lì péng yǒu chuán guò jiǎn xùn。|Không, sau khi rời nhà hàng tôi còn nhắn tin cho bạn người Ý.
愛麗|是不是被誰拿走了？要是有人撿到了，看見你的手機那麼新，功能又好，就留下自己用了。|shì bú shì bèi shuí ná zǒu le？ yào shì yǒu rén jiǎn dào le， kàn jiàn nǐ de shǒu jī nà me xīn， gōng néng yòu hǎo， jiù liú xià zì jǐ yòng le。|Có phải ai đó lấy mất không? Nếu có người nhặt được, thấy điện thoại bạn mới, chức năng lại tốt, có thể giữ lại dùng luôn.
馬丁|我就怕是這樣，這已經是我掉的第三支手機了。|wǒ jiù pà shì zhè yàng， zhè yǐ jīng shì wǒ diào de dì sān zhī shǒu jī le。|Tôi cũng sợ thế, đây đã là chiếc điện thoại thứ ba tôi làm mất.
愛麗|你的手機是你女朋友送的禮物？這樣會讓她生氣吧！|nǐ de shǒu jī shì nǐ nǚ péng yǒu sòng de lǐ wù？ zhè yàng huì ràng tā shēng qì ba！|Điện thoại là quà bạn gái tặng à? Thế thì cô ấy sẽ giận nhỉ!
馬丁|是啊！她還叫我別再掉手機了。要是被她知道了，一定會罵我的。|shì a！ tā hái jiào wǒ bié zài diào shǒu jī le。 yào shì bèi tā zhī dào le， yí dìng huì mà wǒ de。|Đúng vậy! Cô ấy còn dặn tôi đừng làm mất điện thoại nữa. Nếu bị cô biết, chắc chắn sẽ mắng tôi.
愛麗|你是什麼時候發現手機不見的？|nǐ shì shén me shí hòu fā xiàn shǒu jī bú jiàn de？|Bạn phát hiện mất điện thoại khi nào?
馬丁|我剛剛想上網，才發現不見的。|wǒ gāng gāng xiǎng shàng wǎng， cái fā xiàn bú jiàn de。|Vừa rồi tôi định lên mạng mới phát hiện mất.
愛麗|你傳完簡訊後，還去了什麼地方？|nǐ chuán wán jiǎn xùn hòu， hái qù le shén me dì fāng？|Sau khi nhắn tin xong bạn còn đi đâu nữa?
馬丁|我先去健身房做運動，然後去圖書館做功課。|wǒ xiān qù jiàn shēn fáng zuò yùn dòng， rán hòu qù tú shū guǎn zuò gōng kè。|Tôi đến phòng gym tập trước, rồi đến thư viện làm bài.
愛麗|你去圖書館找過了嗎？|nǐ qù tú shū guǎn zhǎo guò le ma？|Bạn tìm ở thư viện chưa?
馬丁|到處都找過了，還是找不到。怎麼辦？我女朋友不會讓我再買新手機的。|dào chù dōu zhǎo guò le， hái shì zhǎo bú dào。 zěn me bàn？ wǒ nǚ péng yǒu bú huì ràng wǒ zài mǎi xīn shǒu jī de。|Chỗ nào cũng tìm rồi mà vẫn không thấy. Làm sao đây? Bạn gái tôi sẽ không cho tôi mua điện thoại mới nữa.
愛麗|那健身房呢？|nà jiàn shēn fáng ne？|Thế phòng gym thì sao?
馬丁|我在健身房沒用手機。啊！我想起來了！|wǒ zài jiàn shēn fáng méi yòng shǒu jī。 a！ wǒ xiǎng qǐ lái le！|Ở phòng gym tôi không dùng điện thoại. A! Tôi nhớ ra rồi!
愛麗|想起來啦？放在什麼地方了？|xiǎng qǐ lái la？ fàng zài shén me dì fāng le？|Nhớ ra rồi à? Để ở đâu?
馬丁|剛剛我在查回國的班機資料，正要訂位的時候，手機沒電了。所以我去健身房的時候，放在那裡充電。|gāng gāng wǒ zài chá huí guó de bān jī zī liào， zhèng yào dìng wèi de shí hòu， shǒu jī méi diàn le。 suǒ yǐ wǒ qù jiàn shēn fáng de shí hòu， fàng zài nà lǐ chōng diàn。|Vừa rồi tôi tra chuyến bay về nước, đang định đặt chỗ thì điện thoại hết pin. Nên khi đến phòng gym tôi để ở đó sạc.
愛麗|你怎麼這麼糊塗，趕快回去拿吧！|nǐ zěn me zhè me hú tú， gǎn kuài huí qù ná ba！|Sao bạn lơ đễnh thế, mau quay lại lấy đi!
馬丁|那我先走了！妳別告訴我女朋友喔！|nà wǒ xiān zǒu le！ nǐ bié gào sù wǒ nǚ péng yǒu ō！|Vậy tôi đi trước! Bạn đừng nói với bạn gái tôi nhé!
短文|現代人的生活已經離不開網路了，生活裡有很多事，比方說買東西、查資料、下載音樂，只要上網，就能做到。|xiàn dài rén de shēng huó yǐ jīng lí bù kāi wǎng lù le， shēng huó lǐ yǒu hěn duō shì， bǐ fāng shuō mǎi dōng xī、 chá zī liào、 xià zài yīn lè， zhǐ yào shàng wǎng， jiù néng zuò dào。|Cuộc sống người hiện đại đã không thể thiếu internet, nhiều việc như mua đồ, tra thông tin, tải nhạc chỉ cần lên mạng là làm được.
短文|住在不同國家的人，也能天天用網路聊天。要是哪裡發生了事情，這些消息，都能透過網路，馬上傳到世界每一個地方，讓大家知道第一手資料。|zhù zài bù tóng guó jiā de rén， yě néng tiān tiān yòng wǎng lù liáo tiān。 yào shì nǎ lǐ fā shēng liǎo shì qíng， zhè xiē xiāo xī， dōu néng tòu guò wǎng lù， mǎ shàng chuán dào shì jiè měi yí gè dì fāng， ràng dà jiā zhī dào dì yī shǒu zī liào。|Người ở các nước khác nhau cũng có thể trò chuyện mỗi ngày qua mạng. Nếu nơi nào có chuyện, tin tức có thể truyền ngay đến mọi nơi trên thế giới, để ai cũng biết thông tin đầu tiên.
短文|網路替我們節省了時間，還把世界變小了。|wǎng lù tì wǒ men jié shěng le shí jiān， hái bǎ shì jiè biàn xiǎo le。|Internet giúp chúng ta tiết kiệm thời gian, còn khiến thế giới nhỏ lại.
短文|雖然網路讓我們的生活變得更便利，但是也有一些問題。很多人每天早上才起床，就急著上網。|suī rán wǎng lù ràng wǒ men de shēng huó biàn dé gèng biàn lì， dàn shì yě yǒu yì xiē wèn tí。 hěn duō rén měi tiān zǎo shàng cái qǐ chuáng， jiù jí zhù shàng wǎng。|Tuy internet làm cuộc sống tiện lợi hơn nhưng cũng có vài vấn đề. Nhiều người sáng vừa ngủ dậy đã vội lên mạng.
短文|每五分鐘就要檢查一次郵件，一有新消息、新照片就立刻上傳。他們什麼時候都在上網，好像只有睡覺的時候，才離開網路。|měi wǔ fēn zhōng jiù yào jiǎn chá yí cì yóu jiàn， yì yǒu xīn xiāo xī、 xīn zhào piān jiù lì kè shàng chuán。 tā men shén me shí hòu dōu zài shàng wǎng， hǎo xiàng zhǐ yǒu shuì jué de shí hòu， cái lí kāi wǎng lù。|Cứ năm phút lại kiểm tra thư một lần, có tin hay ảnh mới là đăng ngay. Lúc nào họ cũng online, dường như chỉ khi ngủ mới rời mạng.
短文|在網路上花太多時間，讓很多人的生活變得不正常了。|zài wǎng lù shàng huā tài duō shí jiān， ràng hěn duō rén de shēng huó biàn dé bú zhèng cháng le。|Dành quá nhiều thời gian trên mạng khiến cuộc sống nhiều người trở nên không bình thường.
短文|網路太方便了，讓大家已經習慣透過網路跟朋友打招呼、聊天、談事情，但是不想跟人面對面地說話，人跟人的關係好像越來越遠了。|wǎng lù tài fāng biàn le， ràng dà jiā yǐ jīng xí guàn tòu guò wǎng lù gēn péng yǒu dǎ zhāo hū、 liáo tiān、 tán shì qíng， dàn shì bù xiǎng gēn rén miàn duì miàn dì shuō huà， rén gēn rén de guān xì hǎo xiàng yuè lái yuè yuǎn le。|Internet quá tiện, mọi người quen chào hỏi, trò chuyện, bàn việc với bạn qua mạng nhưng không muốn nói chuyện trực tiếp, quan hệ giữa người với người dường như ngày càng xa.
短文|我們應該想一想，怎麼好好地利用網路，才不會影響人跟人的關係。|wǒ men yīng gāi xiǎng yì xiǎng， zěn me hǎo hǎo dì lì yòng wǎng lù， cái bú huì yǐng xiǎng rén gēn rén de guān xì。|Chúng ta nên nghĩ cách sử dụng internet cho tốt để không ảnh hưởng quan hệ giữa người với người.`}},{n:14,zh:"我要開始找工作了",vi:"Tôi sắp bắt đầu đi tìm việc",v:`將來|jiānglái|tương lai|N
徵求|zhēngqiú|tuyển, tìm kiếm|V
教師|jiàoshī|giáo viên|N
認為|rènwèi|cho rằng|Vst
畢業|bìyè|tốt nghiệp|Vp-sep
發展|fāzhǎn|phát triển|V
連|lián|ngay cả, thậm chí|Prep
想法|xiǎngfǎ|suy nghĩ, ý tưởng|N
不但|búdàn|không những|Conj
繼續|jìxù|tiếp tục|Vaux
使用|shǐyòng|sử dụng|V
實現|shíxiàn|thực hiện được, thành hiện thực|Vp
招待|zhāodài|tiếp đãi, chiêu đãi|V
研究所|yánjiūsuǒ|viện nghiên cứu, cao học|N
聚|jù|tụ họp|Vi
香港|xiānggǎng|Hồng Kông|Name
上海|shànghǎi|Thượng Hải|Name
說到|shuōdào|nói đến|Phrase
念完|niànwán|học xong|Phrase
分公司|fēngōngsī|chi nhánh|Phrase
捨不得|shěbùdé|không nỡ, luyến tiếc|Phrase
聚一聚|jùyíjù|tụ họp một chút|Phrase
當時|dāngshí|lúc đó|Adv
聲調|shēngdiào|thanh điệu|N
發音|fāyīn|phát âm|N
準|zhǔn|chuẩn xác|Vs
企業|qǐyè|doanh nghiệp|N
管理|guǎnlǐ|quản lý|N
系|xì|khoa (của trường đại học)|N
經濟|jīngjì|kinh tế|N
幫助|bāngzhù|giúp đỡ|N
有關|yǒuguān|có liên quan|Vst
語法|yǔfǎ|ngữ pháp|N
研究|yánjiū|nghiên cứu|V
教書|jiàoshū|dạy học|V-sep
方法|fāngfǎ|phương pháp|N
目的|mùdì|mục đích|N
國際|guójì|quốc tế|Vs-attr
翻譯|fānyì|biên dịch, phiên dịch|N
外交|wàijiāo|ngoại giao|N
人員|rényuán|nhân viên|N
充實|chōngshí|bồi dưỡng, làm phong phú|V
專業|zhuānyè|chuyên môn|N
能力|nénglì|năng lực|N
加拿大|jiānádà|Canada|Name
企業管理系|qǐyèguǎnlǐxì|khoa quản trị doanh nghiệp (企管系)|Phrase
國際關係|guójìguānxì|quan hệ quốc tế|Phrase`,d:{l:`美玲|如玉，好久不見，跟我們一起坐吧。|rú yù， hǎo jiǔ bú jiàn， gēn wǒ men yì qǐ zuò ba。|Như Ngọc, lâu rồi không gặp, ngồi cùng bọn mình đi.
如玉|好啊！妳們在聊什麼，聊得這麼高興？|hǎo a！ nǐ men zài liáo shén me， liáo dé zhè me gāo xìng？|Được chứ! Các bạn đang nói gì mà vui thế?
美玲|這個學期結束，我就要離開台灣了，正在跟愛麗說我將來的計畫。|zhè gè xué qī jié shù， wǒ jiù yào lí kāi tái wān le， zhèng zài gēn ài lì shuō wǒ jiāng lái de jì huà。|Kết thúc học kỳ này tôi sẽ rời Đài Loan, đang kể với Ái Lệ kế hoạch tương lai của tôi.
如玉|時間過得好快啊！妳已經來了快一年半了。|shí jiān guò dé hǎo kuài a！ nǐ yǐ jīng lái le kuài yì nián bàn le。|Thời gian trôi nhanh quá! Bạn đã đến gần một năm rưỡi rồi.
美玲|對啊！在我回國以前，要開始找工作。|duì a！ zài wǒ huí guó yǐ qián， yào kāi shǐ zhǎo gōng zuò。|Đúng vậy! Trước khi về nước tôi phải bắt đầu tìm việc.
愛麗|妳剛剛說到對一個工作有興趣，是什麼工作呢？|nǐ gāng gāng shuō dào duì yí gè gōng zuò yǒu xìng qù， shì shén me gōng zuò ne？|Vừa rồi bạn nói có hứng thú với một công việc, là việc gì vậy?
美玲|我以前念的高中正在徵求一位教中文的教師，我想試試看。|wǒ yǐ qián niàn de gāo zhōng zhèng zài zhēng qiú yí wèi jiāo zhōng wén de jiào shī， wǒ xiǎng shì shì kàn。|Trường cấp ba trước đây tôi học đang tuyển một giáo viên dạy tiếng Trung, tôi muốn thử.
愛麗|妳的中文學得不錯，我認為妳回去教中文應該沒問題。|nǐ de zhōng wén xué dé bú cuò， wǒ rèn wèi nǐ huí qù jiāo zhōng wén yīng gāi méi wèn tí。|Tiếng Trung của bạn khá tốt, tôi nghĩ bạn về dạy tiếng Trung chắc không vấn đề.
美玲|真的嗎？我也希望這樣。|zhēn de ma？ wǒ yě xī wàng zhè yàng。|Thật à? Tôi cũng hy vọng vậy.
愛麗|如玉，妳也快要離開了，有什麼打算呢？|rú yù， nǐ yě kuài yào lí kāi le， yǒu shén me dǎ suàn ne？|Như Ngọc, bạn cũng sắp đi, có dự định gì?
如玉|我得先回美國把大學念完，等我畢業了，再到香港或是上海找工作。|wǒ dé xiān huí měi guó bǎ dà xué niàn wán， děng wǒ bì yè le， zài dào xiāng gǎng huò shì shàng hǎi zhǎo gōng zuò。|Tôi phải về Mỹ học xong đại học, đợi tốt nghiệp rồi sang Hồng Kông hoặc Thượng Hải tìm việc.
愛麗|妳怎麼會想到上海找工作呢？|nǐ zěn me huì xiǎng dào shàng hǎi zhǎo gōng zuò ne？|Sao bạn lại nghĩ đến chuyện tìm việc ở Thượng Hải?
如玉|我聽幾位朋友說，這幾年上海發展得很快，連外國人都很容易找到工作。如果能找到美國分公司的工作，應該不錯。|wǒ tīng jǐ wèi péng yǒu shuō， zhè jǐ nián shàng hǎi fā zhǎn dé hěn kuài， lián wài guó rén dōu hěn róng yì zhǎo dào gōng zuò。 rú guǒ néng zhǎo dào měi guó fēn gōng sī de gōng zuò， yīng gāi bú cuò。|Tôi nghe vài người bạn nói mấy năm nay Thượng Hải phát triển rất nhanh, ngay cả người nước ngoài cũng dễ tìm việc. Nếu tìm được việc ở chi nhánh công ty Mỹ thì rất tốt.
美玲|這個想法不錯，不但可以繼續使用中文，而且可以了解那裡跟台灣有什麼不同。|zhè gè xiǎng fǎ bú cuò， bú dàn kě yǐ jì xù shǐ yòng zhōng wén， ér qiě kě yǐ liǎo jiě nà lǐ gēn tái wān yǒu shén me bù tóng。|Ý này hay đấy, không những tiếp tục dùng tiếng Trung mà còn hiểu nơi đó khác Đài Loan thế nào.
如玉|真希望我的計畫都能實現。|zhēn xī wàng wǒ de jì huà dōu néng shí xiàn。|Thật mong kế hoạch của tôi đều thành hiện thực.
愛麗|我才認識妳們幾個月，妳們就要回國了，真捨不得妳們。|wǒ cái rèn shí nǐ men jǐ gè yuè， nǐ men jiù yào huí guó le， zhēn shě bù dé nǐ men。|Tôi mới quen các bạn vài tháng mà các bạn sắp về nước, thật luyến tiếc.
美玲|妳可以到法國來找我，我一定會好好招待妳。|nǐ kě yǐ dào fǎ guó lái zhǎo wǒ， wǒ yí dìng huì hǎo hǎo zhāo dài nǐ。|Bạn có thể đến Pháp tìm tôi, tôi nhất định sẽ tiếp đãi bạn thật tốt.
愛麗|太好了！有機會我一定去找妳。|tài hǎo le！ yǒu jī huì wǒ yí dìng qù zhǎo nǐ。|Tuyệt quá! Có dịp tôi nhất định sẽ đến tìm bạn.
美玲|愛麗，妳還要在台灣住多久？|ài lì， nǐ hái yào zài tái wān zhù duō jiǔ？|Ái Lệ, bạn còn ở Đài Loan bao lâu nữa?
愛麗|我覺得還得再學半年中文，然後在這裡念研究所。|wǒ jué dé hái dé zài xué bàn nián zhōng wén， rán hòu zài zhè lǐ niàn yán jiū suǒ。|Tôi thấy phải học tiếng Trung thêm nửa năm rồi học cao học ở đây.
如玉|我們回國以前，大家再聚一聚吧！|wǒ men huí guó yǐ qián， dà jiā zài jù yí jù ba！|Trước khi chúng ta về nước, mọi người họp mặt một buổi nhé!
美玲|這個建議不錯，我們就這麼決定吧！|zhè gè jiàn yì bú cuò， wǒ men jiù zhè me jué dìng ba！|Đề nghị hay, vậy quyết định thế nhé!
短文|白如玉從高中就開始學中文，當時她覺得中文的聲調和漢字都好難，練習了很久，發音才越來越準，字也寫得越來越好。|bái rú yù cóng gāo zhōng jiù kāi shǐ xué zhōng wén， dāng shí tā jué dé zhōng wén de shēng diào hé hàn zì dōu hǎo nán， liàn xí le hěn jiǔ， fā yīn cái yuè lái yuè zhǔn， zì yě xiě dé yuè lái yuè hǎo。|Bạch Như Ngọc bắt đầu học tiếng Trung từ cấp ba, lúc ấy cô thấy thanh điệu và chữ Hán đều rất khó, luyện lâu thì phát âm mới chuẩn dần, chữ cũng viết đẹp dần.
短文|上了大學以後，如玉念了企業管理系。她認為中國經濟發展得很快，懂中文對找工作會有幫助。她打算畢業以後找一個跟中文有關的工作，才不會把中文忘了。|shàng le dà xué yǐ hòu， rú yù niàn le qǐ yè guǎn lǐ xì。 tā rèn wèi zhōng guó jīng jì fā zhǎn dé hěn kuài， dǒng zhōng wén duì zhǎo gōng zuò huì yǒu bāng zhù。 tā dǎ suàn bì yè yǐ hòu zhǎo yí gè gēn zhōng wén yǒu guān de gōng zuò， cái bú huì bǎ zhōng wén wàng le。|Lên đại học Như Ngọc học khoa quản trị doanh nghiệp. Cô cho rằng kinh tế Trung Quốc phát triển nhanh, biết tiếng Trung giúp ích khi tìm việc. Cô định sau tốt nghiệp tìm việc liên quan tiếng Trung để không quên tiếng.
短文|高美玲本來是學語言學的，她對語法特別有興趣，常研究中文跟法文不同的地方。|gāo měi líng běn lái shì xué yǔ yán xué de， tā duì yǔ fǎ tè bié yǒu xìng qù， cháng yán jiū zhōng wén gēn fǎ wén bù tóng de dì fāng。|Cao Mỹ Linh vốn học ngôn ngữ học, đặc biệt hứng thú ngữ pháp, thường nghiên cứu chỗ khác nhau giữa tiếng Trung và tiếng Pháp.
短文|美玲打算學好中文以後，回國教書，把自己學中文的方法和經驗教給學生，這樣學生應該能學得更順利。|měi líng dǎ suàn xué hǎo zhōng wén yǐ hòu， huí guó jiào shū， bǎ zì jǐ xué zhōng wén de fāng fǎ hé jīng yàn jiào gěi xué shēng， zhè yàng xué shēng yīng gāi néng xué dé gèng shùn lì。|Mỹ Linh định học giỏi tiếng Trung rồi về nước dạy học, truyền lại phương pháp và kinh nghiệm học tiếng Trung của mình cho học sinh để họ học thuận lợi hơn.
短文|她在台灣也發現了很多有意思的文化，所以除了教語言，她也希望順便把台灣的文化介紹給學生。|tā zài tái wān yě fā xiàn le hěn duō yǒu yì si de wén huà， suǒ yǐ chú le jiào yǔ yán， tā yě xī wàng shùn biàn bǎ tái wān de wén huà jiè shào gěi xué shēng。|Cô cũng phát hiện nhiều nét văn hóa thú vị ở Đài Loan nên ngoài dạy ngôn ngữ còn muốn tiện thể giới thiệu văn hóa Đài Loan cho học sinh.
短文|林愛麗是加拿大華僑，雖然在家跟父母說中文，可是不太會寫漢字。她到台灣來的目的就是把中文學好。|lín ài lì shì jiā ná dà huá qiáo， suī rán zài jiā gēn fù mǔ shuō zhōng wén， kě shì bú tài huì xiě hàn zì。 tā dào tái wān lái de mù dì jiù shì bǎ zhōng wén xué hǎo。|Lâm Ái Lệ là Hoa kiều Canada, tuy ở nhà nói tiếng Trung với cha mẹ nhưng không rành viết chữ Hán. Mục đích cô đến Đài Loan là học giỏi tiếng Trung.
短文|林愛麗大學念的是國際關係，她還沒決定將來要當翻譯，還是外交人員。為了充實自己的專業能力，她決定留在台灣念研究所。|lín ài lì dà xué niàn de shì guó jì guān xì， tā hái méi jué dìng jiāng lái yào dāng fān yì， hái shì wài jiāo rén yuán。 wèi le chōng shí zì jǐ de zhuān yè néng lì， tā jué dìng liú zài tái wān niàn yán jiū suǒ。|Ái Lệ học quan hệ quốc tế ở đại học, chưa quyết định sau này làm phiên dịch hay nhân viên ngoại giao. Để nâng cao năng lực chuyên môn, cô quyết định ở lại Đài Loan học cao học.`}},{n:15,zh:"過春節",vi:"Đón Tết Nguyên đán",v:`春節|chūnjié|Tết Nguyên đán|N
伯伯|bóbo|bác (cách gọi người đàn ông lớn tuổi)|N
年夜飯|niányèfàn|bữa cơm tất niên|N
打擾|dǎrǎo|làm phiền|V
女兒|nǚér|con gái|N
國外|guówài|nước ngoài|N
圍爐|wéilú|quây quần bên bếp lửa (bữa cơm tất niên)|V-sep
意思|yìsi|ý nghĩa|N
全家|quánjiā|cả nhà|N
孩子|háizi|con cái, trẻ con|N
吉祥|jíxiáng|may mắn, cát tường|Vs
年紀|niánjì|tuổi tác|N
過年|guònián|ăn Tết|Phrase
除夕夜|chúxīyè|đêm giao thừa|Phrase
睡著|shuìzhù|ngủ thiếp đi|Phrase
壓歲錢|yāsuìqián|tiền mừng tuổi|Phrase
恭喜發財|gōngxǐfācái|chúc mừng phát tài|Phrase
好了|hǎole|được rồi|Phrase
節日|jiérì|ngày lễ|N
打掃|dǎsǎo|dọn dẹp, quét dọn|V
另外|lìngwài|ngoài ra|Conj
春聯|chūnlián|câu đối Tết|N
除夕|chúxī|đêm giao thừa|N
年糕|niángāo|bánh tổ (bánh gạo năm mới)|N
橘子|júzi|quýt|N
守歲|shǒusuì|thức đón giao thừa|Vi
說法|shuōfǎ|cách nói, quan niệm|N
晚|wǎn|muộn|Vs
活|huó|sống|Vs
平安|píngān|bình an|Vs
出門|chūmén|ra ngoài|V-sep
拜年|bàinián|chúc Tết|V-sep
又|yòu|lại|Adv
起來|qǐlái|(trợ từ chỉ bắt đầu)|Ptc
華人|huárén|người Hoa|Name
貼上|tiēshàng|dán lên|Phrase
年年有餘|niánniányǒuyú|năm nào cũng dư dả|Phrase
步步高升|bùbùgāoshēng|thăng tiến từng bước|Phrase
大吉大利|dàjídàlì|đại cát đại lợi|Phrase
放鞭炮|fàngbiānpào|đốt pháo|Phrase
大年初一|dàniánchūyī|mùng một Tết|Phrase
大年初五|dàniánchūwǔ|mùng năm Tết|Phrase`,d:{l:`馬丁|陳伯伯、陳伯母，謝謝你們請我來吃年夜飯。她是林愛麗。|chén bó bo、 chén bó mǔ， xiè xiè nǐ men qǐng wǒ lái chī nián yè fàn。 tā shì lín ài lì。|Bác Trần, bác gái, cảm ơn bác mời cháu đến ăn cơm tất niên. Đây là Lâm Ái Lệ.
愛麗|陳伯伯、陳伯母好！不好意思，打擾你們了。|chén bó bo、 chén bó mǔ hǎo！ bù hǎo yì sī， dǎ rǎo nǐ men le。|Cháu chào bác Trần, bác gái! Xin lỗi đã làm phiền bác.
陳先生|過年就是要熱熱鬧鬧的，人越多越有過年的氣氛。|guò nián jiù shì yào rè rè nào nào de， rén yuè duō yuè yǒu guò nián de qì fēn。|Ăn Tết là phải rộn ràng, người càng đông càng có không khí Tết.
陳太太|我們女兒在國外念書，不能回來跟我們一起吃年夜飯，還好你們來陪我們圍爐。|wǒ men nǚ ér zài guó wài niàn shū， bù néng huí lái gēn wǒ men yì qǐ chī nián yè fàn， hái hǎo nǐ men lái péi wǒ men wéi lú。|Con gái chúng tôi học ở nước ngoài, không về ăn cơm tất niên cùng được, may mà các cháu đến quây quần với chúng tôi.
馬丁|「圍爐」是什麼意思？|「wéi lú」 shì shén me yì si？|"Vi lô" nghĩa là gì ạ?
陳先生|「圍爐」就是除夕夜全家一起吃年夜飯。|「wéi lú」 jiù shì chú xī yè quán jiā yì qǐ chī nián yè fàn。|"Vi lô" là cả nhà cùng ăn cơm tất niên đêm giao thừa.
愛麗|我在加拿大的時候，每年過年都跟父母、親戚一起吃年夜飯。吃了飯，一家人就開開心心地聊天，一直聊到半夜。|wǒ zài jiā ná dà de shí hòu， měi nián guò nián dōu gēn fù mǔ、 qīn qī yì qǐ chī nián yè fàn。 chī le fàn， yì jiā rén jiù kāi kāi xīn xīn dì liáo tiān， yì zhí liáo dào bàn yè。|Hồi ở Canada, năm nào ăn Tết cháu cũng ăn cơm tất niên với cha mẹ và họ hàng. Ăn xong cả nhà vui vẻ trò chuyện đến tận nửa đêm.
馬丁|有那麼多事能聊啊！|yǒu nà me duō shì néng liáo a！|Có nhiều chuyện để nói thế sao!
陳太太|很多人在離家很遠的地方工作、念書，不能常跟家人見面。過年大家都回來了，當然有說不完的話。|hěn duō rén zài lí jiā hěn yuǎn de dì fāng gōng zuò、 niàn shū， bù néng cháng gēn jiā rén jiàn miàn。 guò nián dà jiā dōu huí lái le， dāng rán yǒu shuō bù wán de huà。|Nhiều người làm việc, học hành xa nhà, không thường gặp gia đình. Ăn Tết ai cũng về, đương nhiên có chuyện nói không hết.
愛麗|對，現在我在台灣念書，每次我給爸爸、媽媽打電話，都要說好久。|duì， xiàn zài wǒ zài tái wān niàn shū， měi cì wǒ gěi bà bà、 mā mā dǎ diàn huà， dōu yào shuō hǎo jiǔ。|Đúng ạ, giờ cháu học ở Đài Loan, mỗi lần gọi điện cho bố mẹ đều nói rất lâu.
馬丁|那小孩子呢？一定會累得睡著了吧！|nà xiǎo hái zi ne？ yí dìng huì lèi dé shuì zhù le ba！|Vậy trẻ con thì sao? Chắc mệt đến ngủ thiếp đi nhỉ!
陳太太|有那麼多好吃的東西，還等著拿壓歲錢，怎麼睡得著？|yǒu nà me duō hǎo chī de dōng xī， hái děng zhù ná yā suì qián， zěn me shuì dé zhù？|Có nhiều món ngon thế, lại còn chờ nhận tiền mừng tuổi, sao ngủ được?
愛麗|我覺得過年最開心的就是拿紅包了。|wǒ jué dé guò nián zuì kāi xīn de jiù shì ná hóng bāo le。|Cháu thấy vui nhất khi ăn Tết là nhận bao lì xì.
馬丁|我知道，拿紅包以前，得先說「恭喜發財」。|wǒ zhī dào， ná hóng bāo yǐ qián， dé xiān shuō 「gōng xǐ fā cái」。|Cháu biết, trước khi nhận lì xì phải nói "Cung hỉ phát tài".
陳先生|真不錯，這你也學會了。|zhēn bú cuò， zhè nǐ yě xué huì le。|Giỏi lắm, cái này cháu cũng học được rồi.
陳太太|想起以前，我們孩子得一個一個跟爸爸、媽媽說吉祥話，才拿得到壓歲錢。|xiǎng qǐ yǐ qián， wǒ men hái zi dé yí gè yí gè gēn bà bà、 mā mā shuō jí xiáng huà， cái ná dé dào yā suì qián。|Nhớ hồi trước, các con của chúng tôi phải lần lượt nói lời chúc may mắn với bố mẹ mới nhận được tiền mừng tuổi.
陳先生|吃了年夜飯，我們也給你們壓歲錢。|chī le nián yè fàn， wǒ men yě gěi nǐ men yā suì qián。|Ăn cơm tất niên xong chúng tôi cũng mừng tuổi các cháu.
馬丁|我們不是小孩了，也可以拿紅包嗎？|wǒ men bú shì xiǎo hái le， yě kě yǐ ná hóng bāo ma？|Chúng cháu không còn là trẻ con, cũng được nhận lì xì ạ?
陳先生|當然可以！你們的年紀跟我女兒差不多大，就像我們的孩子一樣。|dāng rán kě yǐ！ nǐ men de nián jì gēn wǒ nǚ ér chà bu duō dà， jiù xiàng wǒ men de hái zi yí yàng。|Đương nhiên được! Tuổi các cháu xấp xỉ con gái bác, như con của chúng tôi vậy.
陳太太|好了，菜都準備好了，我們一邊吃，一邊聊吧！|hǎo le， cài dōu zhǔn bèi hǎo le， wǒ men yì biān chī， yì biān liáo ba！|Được rồi, đồ ăn chuẩn bị xong cả, chúng ta vừa ăn vừa trò chuyện nhé!
短文|春節就是中國新年，是華人一年裡最大的一個節日。過年前一個月大家就忙起來了，得把家裡打掃乾淨，也要準備過年的食物，還要給孩子買新衣服。|chūn jié jiù shì zhōng guó xīn nián， shì huá rén yì nián lǐ zuì dà de yí gè jié rì。 guò nián qián yí gè yuè dà jiā jiù máng qǐ lái le， dé bǎ jiā lǐ dǎ sǎo qián jìng， yě yào zhǔn bèi guò nián de shí wù， hái yào gěi hái zi mǎi xīn yī fú。|Xuân tiết là Tết Trung Quốc, ngày lễ lớn nhất trong năm của người Hoa. Từ một tháng trước Tết mọi người đã bận rộn, phải dọn nhà sạch sẽ, chuẩn bị đồ ăn Tết và mua quần áo mới cho trẻ.
短文|另外，每家門口都要貼上春聯，才有過年的氣氛。|lìng wài， měi jiā mén kǒu dōu yào tiē shàng chūn lián， cái yǒu guò nián de qì fēn。|Ngoài ra cửa mỗi nhà đều dán câu đối Tết mới có không khí Tết.
短文|春節前一天是除夕，大部分的人都比平常早回家，因為大家要吃年夜飯。|chūn jié qián yì tiān shì chú xī， dà bù fèn de rén dōu bǐ píng cháng zǎo huí jiā， yīn wèi dà jiā yào chī nián yè fàn。|Một ngày trước Tết là giao thừa, phần lớn mọi người về nhà sớm hơn thường lệ vì phải ăn cơm tất niên.
短文|過年的食物都有特別的意思，吃魚的意思是年年有餘（魚）；吃年糕是步步高（糕）升，希望大家工作、功課一年比一年好；吃橘子是希望新的一年大吉大利。|guò nián de shí wù dōu yǒu tè bié de yì si， chī yú de yì si shì nián nián yǒu yú （yú）； chī nián gāo shì bù bù gāo （gāo） shēng， xī wàng dà jiā gōng zuò、 gōng kè yì nián bǐ yì nián hǎo； chī jú zi shì xī wàng xīn de yì nián dà jí dà lì。|Món ăn Tết đều có ý nghĩa riêng: ăn cá nghĩa là năm nào cũng dư dả; ăn bánh tổ là thăng tiến từng bước, mong công việc, học hành năm sau hơn năm trước; ăn quýt là mong năm mới đại cát đại lợi.
短文|吃了年夜飯，一家人就一起聊聊天、看看電視，等新的一年開始，這叫守歲。|chī le nián yè fàn， yì jiā rén jiù yì qǐ liáo liáo tiān、 kàn kàn diàn shì， děng xīn de yì nián kāi shǐ， zhè jiào shǒu suì。|Ăn cơm tất niên xong cả nhà trò chuyện, xem tivi, chờ năm mới bắt đầu, gọi là thức giao thừa.
短文|傳統的說法是：除夕夜孩子越晚睡，父母就活得越久。父母也會給孩子壓歲錢，希望他們新的一年都能平平安安的。|chuán tǒng de shuō fǎ shì： chú xī yè hái zi yuè wǎn shuì， fù mǔ jiù huó dé yuè jiǔ。 fù mǔ yě huì gěi hái zi yā suì qián， xī wàng tā men xīn de yì nián dōu néng píng píng ān ān de。|Quan niệm truyền thống là đêm giao thừa con cái ngủ càng muộn thì cha mẹ càng sống lâu. Cha mẹ cũng mừng tuổi cho con, mong năm mới bình an.
短文|過了十二點，很多人就到外面放鞭炮，慶祝新年。|guò le shí èr diǎn， hěn duō rén jiù dào wài miàn fàng biān pào， qìng zhù xīn nián。|Qua mười hai giờ nhiều người ra ngoài đốt pháo mừng năm mới.
短文|新年的第一天，也叫大年初一。大家會出門給親戚、朋友拜年，祝他們新年快樂。到了大年初五，大部分的人都得上班，街上又熱鬧起來了。|xīn nián de dì yī tiān， yě jiào dà nián chū yī。 dà jiā huì chū mén gěi qīn qī、 péng yǒu bài nián， zhù tā men xīn nián kuài lè。 dào le dà nián chū wǔ， dà bù fèn de rén dōu dé shàng bān， jiē shàng yòu rè nào qǐ lái le。|Ngày đầu năm mới gọi là mùng một Tết. Mọi người ra ngoài chúc Tết họ hàng bạn bè. Đến mùng năm, phần lớn người phải đi làm, phố xá lại náo nhiệt trở lại.`}}]};
BOOKS[3]={lessons:[{n:1,zh:"開學了",vi:"Khai giảng rồi",v:`安德思|āndésī|An Đức Tư (người Honduras)|Name
羅珊蒂|luóshāndì|La San Đế (người Indonesia)|Name
何雅婷|héyǎtíng|Hà Nhã Đình (người Đài Loan)|Name
開學|kāixué|khai giảng, bắt đầu học kỳ|Vp
班|bān|lớp (tập thể học sinh)|N
新生|xīnshēng|sinh viên mới|N
嚴|yán|nghiêm khắc|Vs
口試|kǒushì|thi vấn đáp|N
筆試|bǐshì|thi viết|N
以外|yǐwài|ngoài ra, ngoại trừ|N
口頭|kǒutóu|bằng lời nói|Vs-attr
報告|bàogào|bài thuyết trình, báo cáo|N
壓力|yālì|áp lực|N
說明|shuōmíng|giải thích, hướng dẫn|N
清楚|qīngchǔ|rõ ràng|Vs
位子|wèizi|chỗ ngồi|N
旁聽|pángtīng|dự thính|V
分|fēn|điểm|N
羨慕|xiànmù|ngưỡng mộ, ghen tị|Vst
休學|xiūxué|bảo lưu, nghỉ học|Vp-sep
用功|yònggōng|chăm chỉ học|Vs
行|xíng|được, ổn|Vs
轉|zhuǎn|chuyển (ngành)|V
原來|yuánlái|vốn dĩ, thì ra|Adv
會計|huìjì|kế toán|N
熱門|rèmén|hot, được ưa chuộng|Vs
熬夜|áoyè|thức khuya|V-sep
當|dāng|trượt (môn)|V
恐怕|kǒngpà|e rằng|Adv
口才|kǒucái|tài ăn nói|N
事|shì|việc|N
遲到|chídào|đến muộn|Vp
差一點|chàyìdiǎn|suýt nữa, gần như|Phrase
這樣下去|zhèyàngxiàqù|cứ thế này mãi|Phrase
沒辦法|méibànfǎ|hết cách|Phrase
獨生女|dúshēngnǚ|con gái một|N
私立|sīlì|tư thục|Vs-attr
理想|lǐxiǎng|lý tưởng|Vs
合|hé|hợp|Vst
痛苦|tòngkǔ|đau khổ|Vs
科系|kēxì|ngành, khoa|N
放棄|fàngqì|từ bỏ|V
不管|bùguǎn|bất kể|Conj
反對|fǎnduì|phản đối|Vst
個性|gèxìng|tính cách|N
活潑|huópō|hoạt bát|Vs
外語|wàiyǔ|ngoại ngữ|N
擔心|dānxīn|lo lắng|Vst
填|tián|điền (biểu mẫu)|V
表|biǎo|biểu mẫu|N
辦|bàn|làm, xử lý|V
手續|shǒuxù|thủ tục|N
申請|shēnqǐng|xin, đăng ký|V
成績單|chéngjīdān|bảng điểm|N
考上|kǎoshàng|thi đỗ|Phrase
推薦信|tuījiànxìn|thư giới thiệu|Phrase`,d:{l:`安德思|羅珊蒂，下課啦！怎麼樣？你們班上有我們上個學期的同學嗎？|luó shān dì， xià kè la！ zěn me yàng？ nǐ men bān shàng yǒu wǒ men shàng gè xué qī de tóng xué ma？|La San Đế, tan học rồi! Thế nào? Lớp bạn có bạn học kỳ trước của chúng ta không?
羅珊蒂|沒有，都沒有。你們班怎麼樣？|méi yǒu， dōu méi yǒu。 nǐ men bān zěn me yàng？|Không, chẳng có ai. Lớp bạn thế nào?
安德思|都是新生，我一個也不認識，而且只有我一個男的。|dōu shì xīn shēng， wǒ yí gè yě bú rèn shí， ér qiě zhǐ yǒu wǒ yí gè nán de。|Toàn sinh viên mới, tôi không quen ai, lại chỉ có mình tôi là nam.
羅珊蒂|老師呢？老師怎麼樣？|lǎo shī ne？ lǎo shī zěn me yàng？|Còn thầy cô thì sao?
安德思|老師很嚴。他說我們這學期除了每一課的口試、筆試以外，還要做兩次口頭報告。我覺得壓力好大。你們班呢？|lǎo shī hěn yán。 tā shuō wǒ men zhè xué qī chú le měi yí kè de kǒu shì、 bǐ shì yǐ wài， hái yào zuò liǎng cì kǒu tóu bào gào。 wǒ jué dé yā lì hǎo dà。 nǐ men bān ne？|Thầy rất nghiêm. Thầy bảo học kỳ này ngoài thi nói, thi viết mỗi bài còn phải thuyết trình hai lần. Tôi thấy áp lực lớn lắm. Còn lớp bạn?
羅珊蒂|老師的說明很清楚，同學也很熱情。我們今天就一起去吃中飯了。|lǎo shī de shuō míng hěn qīng chǔ， tóng xué yě hěn rè qíng。 wǒ men jīn tiān jiù yì qǐ qù chī zhōng fàn le。|Cô giải thích rất rõ, bạn học cũng nhiệt tình. Hôm nay bọn tôi đã cùng đi ăn trưa.
安德思|聽起來不錯。還有位子嗎？有位子的話，我想去旁聽。|tīng qǐ lái bú cuò。 hái yǒu wèi zi ma？ yǒu wèi zi de huà， wǒ xiǎng qù páng tīng。|Nghe hay đấy. Còn chỗ không? Nếu còn tôi muốn đến dự thính.
羅珊蒂|你想換班啊？你不是打算在台灣上大學嗎？老師嚴才學得快，學得好啊。|nǐ xiǎng huàn bān a？ nǐ bú shì dǎ suàn zài tái wān shàng dà xué ma？ lǎo shī yán cái xué dé kuài， xué dé hǎo a。|Bạn muốn đổi lớp à? Chẳng phải bạn định học đại học ở Đài Loan sao? Thầy nghiêm mới học nhanh, học tốt chứ.
安德思|可是我是獎學金學生。要是成績不到80分，拿不到獎學金，就得回國了。|kě shì wǒ shì jiǎng xué jīn xué shēng。 yào shì chéng jī bú dào 80 fēn， ná bú dào jiǎng xué jīn， jiù dé huí guó le。|Nhưng tôi là sinh viên học bổng. Nếu điểm dưới 80 mà không nhận được học bổng thì phải về nước.
羅珊蒂|我真羨慕你有獎學金。不像我休學來台灣，花的都是父母的錢，一定得用功念書才行。|wǒ zhēn xiàn mù nǐ yǒu jiǎng xué jīn。 bú xiàng wǒ xiū xué lái tái wān， huā de dōu shì fù mǔ de qián， yí dìng dé yòng gōng niàn shū cái xíng。|Tôi thật ngưỡng mộ bạn có học bổng. Không như tôi bảo lưu đến Đài Loan, tiêu toàn tiền cha mẹ, nhất định phải chăm học.
安德思|何雅婷，聽說妳轉系了？|hé yǎ tíng， tīng shuō nǐ zhuǎn xì le？|Hà Nhã Đình, nghe nói bạn chuyển khoa rồi?
何雅婷|是啊，這個學期我轉到國際關係系去了。|shì a， zhè gè xué qī wǒ zhuǎn dào guó jì guān xì xì qù le。|Đúng vậy, học kỳ này tôi chuyển sang khoa quan hệ quốc tế.
安德思|妳原來念的會計系不是很熱門嗎？怎麼不念了？|nǐ yuán lái niàn de huì jì xì bú shì hěn rè mén ma？ zěn me bú niàn le？|Khoa kế toán bạn học trước chẳng phải rất hot sao? Sao lại không học nữa?
何雅婷|我念不下去了。我每天熬夜念書，可是還是差一點被當。這樣下去，四年恐怕沒辦法畢業。|wǒ niàn bú xià qù le。 wǒ měi tiān áo yè niàn shū， kě shì hái shì chà yì diǎn bèi dāng。 zhè yàng xià qù， sì nián kǒng pà méi bàn fǎ bì yè。|Tôi học không nổi nữa. Ngày nào cũng thức khuya học mà vẫn suýt trượt. Cứ thế này, bốn năm e không tốt nghiệp được.
羅珊蒂|念國際關係很適合妳。妳的英文那麼流利，口才又好，以後可以當外交人員。|niàn guó jì guān xì hěn shì hé nǐ。 nǐ de yīng wén nà me liú lì， kǒu cái yòu hǎo， yǐ hòu kě yǐ dāng wài jiāo rén yuán。|Học quan hệ quốc tế rất hợp bạn. Tiếng Anh bạn lưu loát, ăn nói lại giỏi, sau này có thể làm nhân viên ngoại giao.
何雅婷|謝謝妳這麼說。我真想多跟你們聊聊。可惜我得走了，我跟教授約好了討論選課的事，不能遲到。再見。|xiè xiè nǐ zhè me shuō。 wǒ zhēn xiǎng duō gēn nǐ men liáo liáo。 kě xī wǒ dé zǒu le， wǒ gēn jiào shòu yuē hǎo le tǎo lùn xuǎn kè de shì， bù néng chí dào。 zài jiàn。|Cảm ơn bạn nói vậy. Tôi thật muốn trò chuyện thêm. Tiếc là tôi phải đi, đã hẹn thầy bàn chuyện chọn môn, không thể muộn. Tạm biệt.
短文|何雅婷是家裡的獨生女。從小父母讓她念私立小學，下了課還去學西班牙文、書法、游泳跟網球。|hé yǎ tíng shì jiā lǐ de dú shēng nǚ。 cóng xiǎo fù mǔ ràng tā niàn sī lì xiǎo xué， xià le kè hái qù xué xī bān yá wén、 shū fǎ、 yóu yǒng gēn wǎng qiú。|Hà Nhã Đình là con gái một trong nhà. Từ nhỏ cha mẹ cho cô học tiểu học tư thục, tan học còn đi học tiếng Tây Ban Nha, thư pháp, bơi lội và quần vợt.
短文|何雅婷也沒讓父母失望，成績一直都很好，還考上了理想的大學，念的是熱門的會計系。|hé yǎ tíng yě méi ràng fù mǔ shī wàng， chéng jī yì zhí dōu hěn hǎo， hái kǎo shàng le lǐ xiǎng de dà xué， niàn de shì rè mén de huì jì xì。|Nhã Đình cũng không làm cha mẹ thất vọng, thành tích luôn tốt, còn thi đỗ trường đại học lý tưởng, học khoa kế toán đang hot.
短文|沒想到才念了一個學期，她就發現跟她的興趣不合，念起來非常痛苦。她想了很久，決定跟媽媽討論轉系的事。|méi xiǎng dào cái niàn le yí gè xué qī， tā jiù fā xiàn gēn tā de xìng qù bù hé， niàn qǐ lái fēi cháng tòng kǔ。 tā xiǎng le hěn jiǔ， jué dìng gēn mā mā tǎo lùn zhuǎn xì de shì。|Không ngờ mới học một học kỳ cô đã nhận ra không hợp sở thích, học rất khổ sở. Cô nghĩ rất lâu rồi quyết định bàn với mẹ chuyện chuyển khoa.
短文|媽媽聽到何雅婷打算轉到國際關係系，非常生氣。她覺得何雅婷好不容易才考上這麼好的科系，怎麼可以說放棄就放棄？|mā mā tīng dào hé yǎ tíng dǎ suàn zhuǎn dào guó jì guān xì xì， fēi cháng shēng qì。 tā jué dé hé yǎ tíng hǎo bù róng yì cái kǎo shàng zhè me hǎo de kē xì， zěn me kě yǐ shuō fàng qì jiù fàng qì？|Mẹ nghe Nhã Đình định chuyển sang khoa quan hệ quốc tế thì rất giận. Bà thấy con khó khăn lắm mới đỗ khoa tốt như vậy, sao có thể nói bỏ là bỏ?
短文|而且，念會計系工作機會比較多。跟興趣比起來，將來的發展當然更重要。如果她真的對別的課有興趣，利用時間去旁聽就好了。不管何雅婷怎麼說，她都反對。|ér qiě， niàn huì jì xì gōng zuò jī huì bǐ jiào duō。 gēn xìng qù bǐ qǐ lái， jiāng lái de fā zhǎn dāng rán gèng zhòng yào。 rú guǒ tā zhēn de duì bié de kè yǒu xìng qù， lì yòng shí jiān qù páng tīng jiù hǎo le。 bù guǎn hé yǎ tíng zěn me shuō， tā dōu fǎn duì。|Hơn nữa học kế toán nhiều cơ hội việc làm hơn. So với sở thích, tương lai đương nhiên quan trọng hơn. Nếu thật sự thích môn khác, tranh thủ đi dự thính là được. Dù Nhã Đình nói thế nào bà cũng phản đối.
短文|不過何雅婷告訴媽媽，她個性活潑，而且外語能力不錯，如果念國際關係，會有更好的成績，請媽媽不必擔心她的將來。|bú guò hé yǎ tíng gào sù mā mā， tā gè xìng huó pō， ér qiě wài yǔ néng lì bú cuò， rú guǒ niàn guó jì guān xì， huì yǒu gèng hǎo de chéng jī， qǐng mā mā bú bì dān xīn tā de jiāng lái。|Nhưng Nhã Đình nói với mẹ rằng cô tính cách hoạt bát, ngoại ngữ khá, nếu học quan hệ quốc tế sẽ đạt kết quả tốt hơn, xin mẹ đừng lo cho tương lai của cô.
短文|這一次就請媽媽讓她自己決定吧。媽媽想了又想，捨不得女兒念得這麼痛苦，最後還是同意了。|zhè yí cì jiù qǐng mā mā ràng tā zì jǐ jué dìng ba。 mā mā xiǎng le yòu xiǎng， shě bù dé nǚ ér niàn dé zhè me tòng kǔ， zuì hòu hái shì tóng yì le。|Lần này xin mẹ để con tự quyết định. Mẹ suy nghĩ mãi, không nỡ thấy con học khổ sở như vậy, cuối cùng vẫn đồng ý.
短文|何雅婷聽了非常高興，她立刻上網填表辦轉系的手續，申請上學期的成績單，然後還請教授幫她寫推薦信。|hé yǎ tíng tīng le fēi cháng gāo xìng， tā lì kè shàng wǎng tián biǎo bàn zhuǎn xì de shǒu xù， shēn qǐng shàng xué qī de chéng jī dān， rán hòu hái qǐng jiào shòu bāng tā xiě tuī jiàn xìn。|Nhã Đình nghe xong rất vui, cô lập tức lên mạng điền đơn làm thủ tục chuyển khoa, xin bảng điểm học kỳ trước, rồi còn nhờ giáo sư viết thư giới thiệu.`}},{n:2,zh:"八折起",vi:"Giảm giá từ 20%",v:`起|qǐ|từ… trở đi (bắt đầu từ)|Vp
外套|wàitào|áo khoác|N
一般|yìbān|nói chung|Adv
商品|shāngpǐn|hàng hóa|N
折扣|zhékòu|chiết khấu, giảm giá|N
省|shěng|tiết kiệm|V
牌子|páizi|nhãn hiệu|N
品質|pǐnzhì|chất lượng|N
選擇|xuǎnzé|lựa chọn|N
樣子|yàngzi|kiểu dáng|N
摸|mō|sờ|V
店員|diànyuán|nhân viên cửa hàng|N
短|duǎn|ngắn|Vs
羊毛|yángmáo|len cừu|N
暖和|nuǎnhuo|ấm áp|Vs
打折|dǎzhé|giảm giá|V-sep
原價|yuánjià|giá gốc|N
刷卡|shuākǎ|quẹt thẻ|V-sep
現金|xiànjīn|tiền mặt|N
麻煩|máfán|phiền (xin nhờ)|V
簽名|qiānmíng|ký tên|V-sep
破洞|pòdòng|bị thủng lỗ|Vp-sep
發票|fāpiào|hóa đơn|N
弄|nòng|làm (động từ chung)|V
退|tuì|trả lại|V
換|huàn|đổi|V
店長|diànzhǎng|cửa hàng trưởng|N
週年慶|zhōuniánqìng|lễ kỷ niệm thành lập (sale)|Phrase
一般來說|yìbānláishuō|nói chung|Phrase
試穿|shìchuān|mặc thử|Phrase
打完折|dǎwánzhé|sau khi giảm giá|Phrase
弄丟|nòngdiū|làm mất|Phrase
購物|gòuwù|mua sắm|Vi
糾紛|jiūfēn|tranh chấp, rắc rối|N
電信|diànxìn|viễn thông|N
門市|ménshì|cửa hàng bán lẻ|N
居留證|jūliúzhèng|thẻ cư trú|N
月租型|yuèzūxíng|gói cước thuê bao tháng|N
帳單|zhàngdān|hóa đơn thanh toán|N
並|bìng|(không) hề, hoàn toàn (không)|Adv
包括|bāokuò|bao gồm|V
解釋|jiěshì|giải thích|N
顧客|gùkè|khách hàng|N
尤其|yóuqí|đặc biệt là|Adv
騙|piàn|lừa|V
頓|dùn|trận, bữa (lượng từ cho hành động)|M
辦法|bànfǎ|cách, biện pháp|N
自動|zìdòng|tự động|Adv
關機|guānjī|tắt máy|Vp-sep
修理|xiūlǐ|sửa chữa|V
繳費|jiǎofèi|đóng phí|V-sep
預付卡|yùfùkǎ|SIM trả trước|Phrase
換成|huànchéng|đổi thành|Phrase
吃到飽|chīdàobǎo|dùng thoải mái không giới hạn|Phrase
嚇一跳|xiàyítiào|giật mình|Phrase
客服中心|kèfúzhōngxīn|trung tâm chăm sóc khách hàng|Phrase`,d:{l:`羅珊蒂|謝謝妳陪我來買外套。沒想到今天人這麼多。|xiè xiè nǐ péi wǒ lái mǎi wài tào。 méi xiǎng dào jīn tiān rén zhè me duō。|Cảm ơn bạn đi cùng tôi mua áo khoác. Không ngờ hôm nay đông người thế.
何雅婷|現在百貨公司週年慶。一般來說，週年慶的時候大部分的商品都會有不錯的折扣。很多人趁這時候來買需要的東西，可以省不少錢。這個牌子品質不錯，選擇也多，我們進去看看吧。|xiàn zài bǎi huò gōng sī zhōu nián qìng。 yì bān lái shuō， zhōu nián qìng de shí hòu dà bù fèn de shāng pǐn dōu huì yǒu bú cuò de zhé kòu。 hěn duō rén chèn zhè shí hòu lái mǎi xū yào de dōng xī， kě yǐ shěng bù shǎo qián。 zhè gè pái zi pǐn zhì bú cuò， xuǎn zé yě duō， wǒ men jìn qù kàn kàn ba。|Giờ trung tâm đang kỷ niệm thành lập. Thường dịp này phần lớn hàng đều giảm giá khá. Nhiều người tranh thủ mua đồ cần, tiết kiệm được nhiều. Nhãn hiệu này chất lượng tốt, nhiều lựa chọn, mình vào xem đi.
何雅婷|妳看，這件黃色的樣子不錯，摸起來也很舒服。妳覺得怎麼樣？|nǐ kàn， zhè jiàn huáng sè de yàng zi bú cuò， mō qǐ lái yě hěn shū fú。 nǐ jué dé zěn me yàng？|Bạn xem, cái màu vàng này kiểu đẹp, sờ cũng êm. Bạn thấy sao?
羅珊蒂|我比較喜歡那件咖啡色的。|wǒ bǐ jiào xǐ huān nà jiàn kā fēi sè de。|Tôi thích cái màu nâu kia hơn.
何雅婷|妳還是兩件都拿去試穿吧。有時候得穿上才知道好看不好看。|nǐ hái shì liǎng jiàn dōu ná qù shì chuān ba。 yǒu shí hòu dé chuān shàng cái zhī dào hǎo kàn bù hǎo kàn。|Bạn cứ lấy cả hai cái thử đi. Có lúc phải mặc lên mới biết đẹp hay không.
店員|小姐，這件外套妳穿起來真漂亮。大小、長短都很合適，顏色也好看，而且是羊毛的，又輕又暖和。|xiǎo jiě， zhè jiàn wài tào nǐ chuān qǐ lái zhēn piào liàng。 dà xiǎo、 zhǎng duǎn dōu hěn hé shì， yán sè yě hǎo kàn， ér qiě shì yáng máo de， yòu qīng yòu nuǎn huo。|Cô ơi, áo này cô mặc đẹp quá. Size, độ dài đều vừa, màu cũng đẹp, lại là len cừu vừa nhẹ vừa ấm.
何雅婷|這件打完折多少錢？|zhè jiàn dǎ wán zhé duō shǎo qián？|Cái này sau khi giảm giá bao nhiêu tiền?
店員|原價3,900，現在九折，打完折3,510，算妳3,500。|yuán jià 3,900， xiàn zài jiǔ zhé， dǎ wán zhé 3,510， suàn nǐ 3,500。|Giá gốc 3.900, hiện giảm 10%, còn 3.510, tính cho cô 3.500.
何雅婷|廣告上不是寫八折嗎？|guǎng gào shàng bú shì xiě bā zhé ma？|Quảng cáo chẳng phải ghi giảm 20% sao?
店員|不好意思，是八折起。那件八折，可是這件打九折。|bù hǎo yì sī， shì bā zhé qǐ。 nà jiàn bā zhé， kě shì zhè jiàn dǎ jiǔ zhé。|Xin lỗi, là giảm từ 20% trở đi. Cái kia giảm 20% nhưng cái này giảm 10%.
何雅婷|羊毛外套3,500，雖然不便宜，可是品質不錯，樣子也好，值得買。|yáng máo wài tào 3,500， suī rán bú biàn yí， kě shì pǐn zhì bú cuò， yàng zi yě hǎo， zhí de mǎi。|Áo len 3.500 tuy không rẻ nhưng chất lượng tốt, kiểu cũng đẹp, đáng mua.
羅珊蒂|好吧。我就買這件。|hǎo ba。 wǒ jiù mǎi zhè jiàn。|Được rồi. Tôi mua cái này.
店員|刷卡還是付現金？今天刷Visa卡，可以再打九五折。|shuā kǎ hái shì fù xiàn jīn？ jīn tiān shuā Visa kǎ， kě yǐ zài dǎ jiǔ wǔ zhé。|Quẹt thẻ hay trả tiền mặt? Hôm nay quẹt thẻ Visa được giảm thêm 5%.
羅珊蒂|那就刷卡。|nà jiù shuā kǎ。|Vậy quẹt thẻ.
店員|請等我一下。麻煩妳在這裡簽名。謝謝。歡迎下次再來。|qǐng děng wǒ yí xià。 má fán nǐ zài zhè lǐ qiān míng。 xiè xiè。 huān yíng xià cì zài lái。|Xin chờ một chút. Phiền cô ký tên ở đây. Cảm ơn. Hoan nghênh lần sau lại đến.
羅珊蒂|我昨天買的這件外套，裡面破了一個洞。我要換一件新的。|wǒ zuó tiān mǎi de zhè jiàn wài tào， lǐ miàn pò le yí gè dòng。 wǒ yào huàn yí jiàn xīn de。|Chiếc áo tôi mua hôm qua bên trong bị thủng một lỗ. Tôi muốn đổi cái mới.
店員|請問妳帶發票來了嗎？|qǐng wèn nǐ dài fā piào lái le ma？|Xin hỏi cô có mang hóa đơn đến không?
羅珊蒂|我弄丟了，找不到。|wǒ nòng diū le， zhǎo bú dào。|Tôi làm mất rồi, không tìm thấy.
店員|那不好意思。按照我們公司的規定，沒有發票不能退換。|nà bù hǎo yì sī。 àn zhào wǒ men gōng sī de guī dìng， méi yǒu fā piào bù néng tuì huàn。|Vậy xin lỗi. Theo quy định công ty, không có hóa đơn không thể đổi trả.
羅珊蒂|我昨天是刷卡買的，你們應該查得到資料。再說，衣服有問題也不是我的錯。|wǒ zuó tiān shì shuā kǎ mǎi de， nǐ men yīng gāi chá dé dào zī liào。 zài shuō， yī fú yǒu wèn tí yě bú shì wǒ de cuò。|Hôm qua tôi quẹt thẻ mua, các bạn chắc tra được dữ liệu. Hơn nữa quần áo có vấn đề cũng không phải lỗi của tôi.
店員|對不起，對不起。請等一下，我去問問店長。|duì bù qǐ， duì bù qǐ。 qǐng děng yí xià， wǒ qù wèn wèn diàn zhǎng。|Xin lỗi, xin lỗi. Xin chờ một lát, tôi đi hỏi cửa hàng trưởng.
短文|安德思上個月在電信公司的門市辦了一支新手機。他剛到台灣的時候，用的是預付卡，所以一拿到居留證就馬上去換成月租型的。|ān dé sī shàng gè yuè zài diàn xìn gōng sī de mén shì bàn le yì zhī xīn shǒu jī。 tā gāng dào tái wān de shí hòu， yòng de shì yù fù kǎ， suǒ yǐ yì ná dào jū liú zhèng jiù mǎ shàng qù huàn chéng yuè zū xíng de。|Tháng trước An Đức Tư làm một số điện thoại mới ở cửa hàng viễn thông. Lúc mới đến Đài Loan anh dùng SIM trả trước nên vừa có thẻ cư trú là đổi ngay sang gói thuê bao tháng.
短文|店員告訴他，一個月只要一千多塊就能吃到飽。安德思高興得不得了，就放心地給親戚朋友打電話。|diàn yuán gào sù tā， yí gè yuè zhǐ yào yì qiān duō kuài jiù néng chī dào bǎo。 ān dé sī gāo xìng dé bù dé le， jiù fàng xīn dì gěi qīn qī péng yǒu dǎ diàn huà。|Nhân viên bảo mỗi tháng chỉ hơn một nghìn đồng là dùng thoải mái. An Đức Tư vui vô cùng, yên tâm gọi điện cho người thân bạn bè.
短文|沒想到前幾天收到帳單，一看要三千多塊，嚇了他一大跳。|méi xiǎng dào qián jǐ tiān shōu dào zhàng dān， yí kàn yào sān qiān duō kuài， xià le tā yí dà tiào。|Không ngờ mấy hôm trước nhận hóa đơn, xem thấy hơn ba nghìn đồng, anh giật nảy mình.
短文|他馬上找何雅婷陪他去問清楚。店員告訴他，按照合約，吃到飽只是網路，並不包括打電話。|tā mǎ shàng zhǎo hé yǎ tíng péi tā qù wèn qīng chǔ。 diàn yuán gào sù tā， àn zhào hé yuē， chī dào bǎo zhǐ shì wǎng lù， bìng bù bāo kuò dǎ diàn huà。|Anh lập tức nhờ Hà Nhã Đình đi cùng hỏi cho rõ. Nhân viên bảo theo hợp đồng, "dùng thoải mái" chỉ là mạng, không bao gồm gọi điện.
短文|何雅婷聽了店員的解釋，非常生氣。外國人怎麼看得懂這麼複雜的中文合約？店員應該把重要的事情跟顧客說清楚，尤其是對外國人的時候。這不是騙人嗎？|hé yǎ tíng tīng le diàn yuán de jiě shì， fēi cháng shēng qì。 wài guó rén zěn me kàn de dǒng zhè me fù zá de zhōng wén hé yuē？ diàn yuán yīng gāi bǎ zhòng yào de shì qíng gēn gù kè shuō qīng chǔ， yóu qí shì duì wài guó rén de shí hòu。 zhè bú shì piàn rén ma？|Nhã Đình nghe nhân viên giải thích thì rất giận. Người nước ngoài sao đọc hiểu hợp đồng tiếng Trung phức tạp như vậy? Nhân viên nên nói rõ những việc quan trọng với khách, nhất là với người nước ngoài. Thế chẳng phải lừa người sao?
短文|何雅婷把店員罵了一頓，可是一點辦法也沒有。|hé yǎ tíng bǎ diàn yuán mà le yí dùn， kě shì yì diǎn bàn fǎ yě méi yǒu。|Nhã Đình mắng nhân viên một trận nhưng chẳng có cách nào.
短文|回家的路上，何雅婷告訴安德思，她在報上看到過不少買手機的糾紛。有人剛買的新手機常常自動關機，修理了幾次都修不好，可是電信公司不願意換新的給他。|huí jiā de lù shàng， hé yǎ tíng gào sù ān dé sī， tā zài bào shàng kàn dào guò bù shǎo mǎi shǒu jī de jiū fēn。 yǒu rén gāng mǎi de xīn shǒu jī cháng cháng zì dòng guān jī， xiū lǐ le jǐ cì dōu xiū bù hǎo， kě shì diàn xìn gōng sī bú yuàn yì huàn xīn de gěi tā。|Trên đường về, Nhã Đình kể với An Đức Tư rằng cô từng đọc nhiều vụ tranh chấp mua điện thoại trên báo. Có người mới mua điện thoại hay tự tắt máy, sửa mấy lần không được mà công ty viễn thông không chịu đổi cái mới.
短文|還有人手機聽不清楚，電信公司也說是因為他們住在山邊，不同意退錢。何雅婷建議安德思給電信公司的客服中心打電話。要是還不行，就只好去繳費了。|hái yǒu rén shǒu jī tīng bù qīng chǔ， diàn xìn gōng sī yě shuō shì yīn wèi tā men zhù zài shān biān， bù tóng yì tuì qián。 hé yǎ tíng jiàn yì ān dé sī gěi diàn xìn gōng sī de kè fú zhōng xīn dǎ diàn huà。 yào shì hái bù xíng， jiù zhǐ hǎo qù jiǎo fèi le。|Lại có người nghe không rõ, công ty bảo do họ ở gần núi nên không đồng ý hoàn tiền. Nhã Đình khuyên An Đức Tư gọi trung tâm chăm sóc khách hàng; nếu vẫn không được thì đành đi đóng phí.`}},{n:3,zh:"外套帶了沒有？",vi:"Bạn mang áo khoác chưa?",v:`陳敏萱|chénmǐnxuān|Trần Mẫn Huyên (người Hà Lan)|Name
高橋健太|gāoqiáojiàntài|Takahashi Kenta (người Nhật)|Name
空氣|kōngqì|không khí|N
影響|yǐngxiǎng|ảnh hưởng|N
穩定|wěndìng|ổn định|Vs
幸虧|xìngkuī|may mà|Adv
躲|duǒ|trốn, ẩn nấp|Vi
度|dù|độ|M
溫度|wēndù|nhiệt độ|N
零下|língxià|dưới không độ|Vs-attr
感覺|gǎnjué|cảm thấy|Vst
實際|shíjì|thực tế|Vs
難怪|nánguài|hèn gì|Adv
季節|jìjié|mùa|N
火鍋|huǒguō|lẩu|N
海鮮|hǎixiān|hải sản|N
新鮮|xīnxiān|tươi|Vs
櫻花|yīnghuā|hoa anh đào|N
變化|biànhuà|biến đổi|N
氣溫|qìwēn|nhiệt độ không khí|N
差|chà|chênh lệch|Vst
幾乎|jǐhū|hầu như|Adv
乾|qián|khô|Vs
發霉|fāméi|bị mốc|Vp-sep
除濕機|chúshījī|máy hút ẩm|N
雨季|yǔjì|mùa mưa|N
涼快|liángkuài|mát mẻ|Vs
潮濕|cháoshī|ẩm ướt|Vs
悶|mèn|oi bức, ngột ngạt|Vs
冷氣|lěngqì|máy lạnh|N
荷蘭|hélán|Hà Lan|Name
出大太陽|chūdàtàiyáng|nắng chói chang|Phrase
颳風|guāfēng|nổi gió|Phrase
受到|shòudào|bị, chịu (ảnh hưởng)|Phrase
受不了|shòubùliǎo|không chịu nổi|Phrase
餓死了|èsǐle|đói chết đi được|Phrase
後母臉|hòumǔliǎn|mặt dì ghẻ (thời tiết thất thường)|Phrase
祖先|zǔxiān|tổ tiên|N
移民|yímín|di dân, nhập cư|Vi
當中|dāngzhōng|trong số, giữa|N
根據|gēnjù|dựa theo|Prep
農曆|nónglì|âm lịch|N
農業|nóngyè|nông nghiệp|N
農人|nóngrén|nông dân|N
難得|nándé|hiếm có|Vs
祭祖|jìzǔ|cúng tổ tiên|Vi
拜|bài|lạy, bái|V
神|shén|thần|N
拜拜|bàibài|cúng bái|Vi
蚊蟲|wénchóng|muỗi và côn trùng|N
戴|dài|đeo, đội|V
香包|xiāngbāo|túi thơm|N
掛|guà|treo|V
瘟疫|wēnyì|dịch bệnh|N
做法|zuòfǎ|cách làm|N
多少|duōshǎo|phần nào, ít nhiều|Adv
作用|zuòyòng|tác dụng|N
迷信|míxìn|mê tín|N
收成|shōuchéng|thu hoạch|N
民族|mínzú|dân tộc|N
月亮|yuèliàng|mặt trăng|N
圓|yuán|tròn|Vs
社會|shèhuì|xã hội|N
團聚|tuánjù|đoàn tụ|Vi
月餅|yuèbǐng|bánh trung thu|N
柚子|yòuzi|bưởi|N
故事|gùshì|câu chuyện|N
溫馨|wēnxīn|ấm áp, thân thương|Vs
端午節|duānwǔjié|Tết Đoan Ngọ|Name
中秋節|zhōngqiūjié|Tết Trung Thu|Name
雄黃酒|xiónghuángjiǔ|rượu hùng hoàng|Name
古時候|gǔshíhòu|ngày xưa|Phrase
趕走|gǎnzǒu|đuổi đi|Phrase
過節|guòjié|ăn lễ, đón lễ|Phrase`,d:{l:`陳敏萱|妳怎麼現在才來？我們等妳等半天了。|nǐ zěn me xiàn zài cái lái？ wǒ men děng nǐ děng bàn tiān le。|Sao bây giờ bạn mới đến? Bọn mình đợi bạn mãi rồi.
羅珊蒂|對不起，我來晚了。我走到半路下起雨來了，只好又回去拿傘。台灣的天氣真奇怪，說變就變。|duì bù qǐ， wǒ lái wǎn le。 wǒ zǒu dào bàn lù xià qǐ yǔ lái le， zhǐ hǎo yòu huí qù ná sǎn。 tái wān de tiān qì zhēn qí guài， shuō biàn jiù biàn。|Xin lỗi, tôi đến muộn. Đi nửa đường thì mưa nên đành quay lại lấy dù. Thời tiết Đài Loan lạ thật, nói đổi là đổi.
陳敏萱|就是啊。昨天還出大太陽，今天就又颳風又下雨。|jiù shì a。 zuó tiān hái chū dà tài yáng， jīn tiān jiù yòu guā fēng yòu xià yǔ。|Đúng vậy. Hôm qua còn nắng chang chang, hôm nay đã gió lại mưa.
高橋健太|台灣是個海島，冬天的時候，受到北方來的冷空氣的影響，天氣很不穩定。|tái wān shì gè hǎi dǎo， dōng tiān de shí hòu， shòu dào běi fāng lái de lěng kōng qì de yǐng xiǎng， tiān qì hěn bù wěn dìng。|Đài Loan là đảo biển, mùa đông chịu ảnh hưởng không khí lạnh từ phương bắc nên thời tiết rất thất thường.
羅珊蒂|幸虧我買了外套，要不然就只好躲在家裡了。|xìng kuī wǒ mǎi le wài tào， yào bù rán jiù zhǐ hǎo duǒ zài jiā lǐ le。|May mà tôi mua áo khoác, không thì đành trốn ở nhà.
陳敏萱|沒那麼嚴重吧，今天還有18度。這樣的溫度在荷蘭只能算是夏天。荷蘭的冬天還常常到零下呢。|méi nà me yán zhòng ba， jīn tiān hái yǒu 18 dù。 zhè yàng de wēn dù zài hé lán zhǐ néng suàn shì xià tiān。 hé lán de dōng tiān hái cháng cháng dào líng xià ne。|Đâu đến nỗi vậy, hôm nay còn 18 độ. Nhiệt độ này ở Hà Lan chỉ tính là mùa hè. Mùa đông Hà Lan còn hay xuống dưới không độ.
高橋健太|今天溫度是不低，不過因為下雨，感覺比實際溫度低得多，難怪羅珊蒂受不了。|jīn tiān wēn dù shì bù dī， bú guò yīn wèi xià yǔ， gǎn jué bǐ shí jì wēn dù dī dé duō， nán guài luó shān dì shòu bù liǎo。|Hôm nay nhiệt độ không thấp nhưng vì mưa nên cảm giác lạnh hơn nhiều so với thực tế, hèn gì La San Đế chịu không nổi.
羅珊蒂|我餓死了，我們趕快點菜吧。天氣這麼冷，吃牛肉最好。你們呢？想吃點什麼？|wǒ è sǐ le， wǒ men gǎn kuài diǎn cài ba。 tiān qì zhè me lěng， chī niú ròu zuì hǎo。 nǐ men ne？ xiǎng chī diǎn shén me？|Tôi đói chết đi được, mình gọi món nhanh đi. Trời lạnh thế này ăn thịt bò là nhất. Các bạn muốn ăn gì?
陳敏萱|我昨天剛吃過烤肉，今天就吃素菜鍋吧。這個季節的大白菜最甜了。|wǒ zuó tiān gāng chī guò kǎo ròu， jīn tiān jiù chī sù cài guō ba。 zhè gè jì jié de dà bái cài zuì tián le。|Hôm qua tôi vừa ăn đồ nướng, hôm nay ăn lẩu rau chay. Cải thảo mùa này ngọt nhất.
高橋健太|聽說這家火鍋店的海鮮很新鮮。我要海鮮。|tīng shuō zhè jiā huǒ guō diàn de hǎi xiān hěn xīn xiān。 wǒ yào hǎi xiān。|Nghe nói hải sản quán lẩu này rất tươi. Tôi chọn hải sản.
羅珊蒂|沒想到台灣的冬天這麼冷，看起來我得讓我男朋友春天的時候再來。|méi xiǎng dào tái wān de dōng tiān zhè me lěng， kàn qǐ lái wǒ dé ràng wǒ nán péng yǒu chūn tiān de shí hòu zài lái。|Không ngờ mùa đông Đài Loan lạnh thế, xem ra phải để bạn trai tôi mùa xuân hãy đến.
高橋健太|春天真的很浪漫，到處都看得到櫻花，可是在台灣有句話說：「春天後母臉」。春天天氣變化比冬天更大，早晚的氣溫也差很多。|chūn tiān zhēn de hěn làng màn， dào chù dōu kàn dé dào yīng huā， kě shì zài tái wān yǒu jù huà shuō：「chūn tiān hòu mǔ liǎn」。 chūn tiān tiān qì biàn huà bǐ dōng tiān gèng dà， zǎo wǎn de qì wēn yě chà hěn duō。|Mùa xuân thật lãng mạn, đâu cũng thấy hoa anh đào, nhưng ở Đài Loan có câu: "Mùa xuân mặt dì ghẻ". Thời tiết xuân biến đổi còn nhiều hơn mùa đông, sáng tối chênh lệch nhiều.
陳敏萱|高橋說的沒錯。我朋友告訴我，去年春天幾乎每天都下雨，衣服總是乾不了。|gāo qiáo shuō de méi cuò。 wǒ péng yǒu gào sù wǒ， qù nián chūn tiān jǐ hū měi tiān dōu xià yǔ， yī fú zǒng shì qián bù liǎo。|Takahashi nói đúng. Bạn tôi kể mùa xuân năm ngoái gần như ngày nào cũng mưa, quần áo mãi không khô.
高橋健太|是啊，衣服、鞋子都發霉了，所以我去年買了除濕機。|shì a， yī fú、 xié zi dōu fā méi le， suǒ yǐ wǒ qù nián mǎi le chú shī jī。|Phải, quần áo giày dép đều mốc nên năm ngoái tôi mua máy hút ẩm.
羅珊蒂|我們那兒雖然也有雨季，可是下過雨以後晚上就涼快了。不像台北這麼潮濕。我六月來的時候，又悶又熱，又沒有冷氣，真受不了。|wǒ men nà ér suī rán yě yǒu yǔ jì， kě shì xià guò yǔ yǐ hòu wǎn shàng jiù liáng kuài le。 bú xiàng tái běi zhè me cháo shī。 wǒ liù yuè lái de shí hòu， yòu mèn yòu rè， yòu méi yǒu lěng qì， zhēn shòu bù liǎo。|Chỗ chúng tôi tuy cũng có mùa mưa nhưng mưa xong buổi tối mát. Không ẩm như Đài Bắc. Tháng sáu tôi đến vừa oi vừa nóng lại không có máy lạnh, thật chịu không nổi.
陳敏萱|我是八月來的。我一來就去海邊曬太陽，朋友都羨慕死了。本來打算六月底回國，但是因為台灣的夏天可以玩很多水上活動，而且吃得到很多熱帶水果，所以我決定晚一點再回去。|wǒ shì bā yuè lái de。 wǒ yì lái jiù qù hǎi biān shài tài yáng， péng yǒu dōu xiàn mù sǐ le。 běn lái dǎ suàn liù yuè dǐ huí guó， dàn shì yīn wèi tái wān de xià tiān kě yǐ wán hěn duō shuǐ shàng huó dòng， ér qiě chī dé dào hěn duō rè dài shuǐ guǒ， suǒ yǐ wǒ jué dìng wǎn yì diǎn zài huí qù。|Tôi đến tháng tám. Vừa đến là ra biển tắm nắng, bạn bè ghen tị chết đi. Vốn định cuối tháng sáu về nước nhưng mùa hè Đài Loan chơi được nhiều hoạt động trên nước, lại có nhiều trái cây nhiệt đới nên tôi quyết định về muộn hơn.
高橋健太|快吃吧。肉煮久了就不好吃了。|kuài chī ba。 ròu zhǔ jiǔ le jiù bù hǎo chī le。|Ăn nhanh đi. Thịt nấu lâu sẽ không ngon.
羅珊蒂|真的很好吃。我男朋友來的時候，我們一定要再來這裡聚一聚。|zhēn de hěn hǎo chī。 wǒ nán péng yǒu lái de shí hòu， wǒ men yí dìng yào zài lái zhè lǐ jù yí jù。|Ngon thật. Khi bạn trai tôi đến, chúng ta nhất định phải họp mặt ở đây lần nữa.
大家|那有什麼問題。|nà yǒu shén me wèn tí。|Có gì đâu mà không được.
短文|在台灣，除了原住民以外，大部分的人的祖先都是從中國移民來的，所以我們的傳統節日都跟中國一樣。一年當中，最重要的三個節日——春節、端午節跟中秋節——都是根據農曆來的。|zài tái wān， chú le yuán zhù mín yǐ wài， dà bù fèn de rén de zǔ xiān dōu shì cóng zhōng guó yí mín lái de， suǒ yǐ wǒ men de chuán tǒng jié rì dōu gēn zhōng guó yí yàng。 yì nián dāng zhōng， zuì zhòng yào de sān gè jié rì —— chūn jié、 duān wǔ jié gēn zhōng qiū jié —— dōu shì gēn jù nóng lì lái de。|Ở Đài Loan, ngoài người bản địa, tổ tiên của đa số đều di cư từ Trung Quốc nên các lễ truyền thống giống Trung Quốc. Ba lễ quan trọng nhất trong năm — Tết, Đoan Ngọ và Trung Thu — đều tính theo âm lịch.
短文|古時候，中國是一個農業國家，農人的生活和節日都跟季節的變化有關係。比方說，新年又叫春節，就是春天的開始。這時候，天氣還很冷，農人利用這段難得的休息時間，跟家人好好地聚聚。|gǔ shí hòu， zhōng guó shì yí gè nóng yè guó jiā， nóng rén de shēng huó hé jié rì dōu gēn jì jié de biàn huà yǒu guān xì。 bǐ fāng shuō， xīn nián yòu jiào chūn jié， jiù shì chūn tiān de kāi shǐ。 zhè shí hòu， tiān qì hái hěn lěng， nóng rén lì yòng zhè duàn nán dé de xiū xī shí jiān， gēn jiā rén hǎo hǎo dì jù jù。|Ngày xưa Trung Quốc là nước nông nghiệp, đời sống và lễ hội của nông dân gắn với sự thay đổi mùa. Ví dụ năm mới còn gọi là Xuân tiết, tức bắt đầu mùa xuân. Lúc đó trời còn lạnh, nông dân tận dụng khoảng nghỉ hiếm có để sum họp gia đình.
短文|除夕這一天，在家除了祭祖，還要拜神。大年初一，全家人到廟裡拜拜，希望新的一年，神能讓他們一家人平安、健康。|chú xī zhè yì tiān， zài jiā chú le jì zǔ， hái yào bài shén。 dà nián chū yī， quán jiā rén dào miào lǐ bài bài， xī wàng xīn de yì nián， shén néng ràng tā men yì jiā rén píng ān、 jiàn kāng。|Ngày giao thừa, ở nhà ngoài cúng tổ tiên còn phải bái thần. Mùng một Tết cả nhà đến chùa cúng bái, mong năm mới thần phù hộ cả nhà bình an, khỏe mạnh.
短文|到了農曆五月，天氣越來越熱，蚊蟲慢慢多起來，人也容易生病。五月五號端午節這一天，古代的人戴香包、喝雄黃酒，還在門上掛一些植物。這些都是為了把瘟疫趕走。|dào le nóng lì wǔ yuè， tiān qì yuè lái yuè rè， wén chóng màn màn duō qǐ lái， rén yě róng yì shēng bìng。 wǔ yuè wǔ hào duān wǔ jié zhè yì tiān， gǔ dài de rén dài xiāng bāo、 hē xióng huáng jiǔ， hái zài mén shàng guà yì xiē zhí wù。 zhè xiē dōu shì wèi le bǎ wēn yì gǎn zǒu。|Đến tháng năm âm lịch trời ngày càng nóng, muỗi và côn trùng dần nhiều, con người dễ sinh bệnh. Ngày mùng năm tháng năm, Tết Đoan Ngọ, người xưa đeo túi thơm, uống rượu hùng hoàng, còn treo vài loại cây trước cửa, tất cả để đuổi dịch bệnh.
短文|在現代，有人還按照傳統的做法過節，他們覺得這麼做多少有一點作用，有的人認為這是一種迷信。|zài xiàn dài， yǒu rén hái àn zhào chuán tǒng de zuò fǎ guò jié， tā men jué dé zhè me zuò duō shǎo yǒu yì diǎn zuò yòng， yǒu de rén rèn wèi zhè shì yì zhǒng mí xìn。|Thời nay có người vẫn đón lễ theo cách truyền thống, họ thấy làm vậy ít nhiều có tác dụng, có người cho đó là mê tín.
短文|秋天是收成的季節，很多民族都有慶祝活動。農曆八月十五日的中秋節就是這樣來的。這一天，月亮又大又圓。|qiū tiān shì shōu chéng de jì jié， hěn duō mín zú dōu yǒu qìng zhù huó dòng。 nóng lì bā yuè shí wǔ rì de zhōng qiū jié jiù shì zhè yàng lái de。 zhè yì tiān， yuè liàng yòu dà yòu yuán。|Mùa thu là mùa thu hoạch, nhiều dân tộc có hoạt động ăn mừng. Tết Trung Thu ngày rằm tháng tám âm lịch ra đời như vậy. Hôm đó trăng vừa to vừa tròn.
短文|雖然現在台灣已經不是農業社會了，但是離開家鄉的人，再遠也要回家團聚。晚餐以後，一家人吃著月餅、柚子，一邊給孩子說月亮的故事，過一個溫馨的節日。|suī rán xiàn zài tái wān yǐ jīng bú shì nóng yè shè huì le， dàn shì lí kāi jiā xiāng de rén， zài yuǎn yě yào huí jiā tuán jù。 wǎn cān yǐ hòu， yì jiā rén chī zhù yuè bǐng、 yòu zi， yì biān gěi hái zi shuō yuè liàng de gù shì， guò yí gè wēn xīn de jié rì。|Tuy Đài Loan nay không còn là xã hội nông nghiệp, người xa quê dù xa mấy cũng về đoàn tụ. Sau bữa tối cả nhà ăn bánh trung thu, bưởi, vừa kể cho con nghe chuyện về mặt trăng, đón một ngày lễ ấm cúng.`}},{n:4,zh:"我愛台灣的人情味",vi:"Tôi yêu nghĩa tình của người Đài Loan",v:`愛|ài|yêu|Vst
人情味|rénqíngwèi|tình người, sự ấm áp|N
放|fàng|thả|V
天燈|tiāndēng|đèn trời|N
願望|yuànwàng|điều ước|N
訊號|xùnhào|tín hiệu, sóng|N
元宵|yuánxiāo|bánh trôi nước (nguyên tiêu)|N
牆|qiáng|tường|N
耐心|nàixīn|kiên nhẫn|N
感動|gǎndòng|cảm động|Vs
擔仔麵|dānzǎimiàn|mì Đạm Tử (đặc sản Đài Nam)|N
招牌|zhāopái|bảng hiệu|N
當地|dāngdì|địa phương|Vs-attr
賺|zhuàn|kiếm (tiền)|V
而|ér|mà, trái lại|Adv
交|jiāo|kết (bạn)|V
理想|lǐxiǎng|lý tưởng|N
剛剛|gānggāng|vừa rồi|Adv
改天|gǎitiān|hôm khác|Adv
無聊|wúliáo|chán|Vs
東區|dōngqū|khu Đông (Đài Bắc)|N
煙火|yānhuǒ|pháo hoa|N
跨年|kuànián|đón năm mới|Vi
種類|zhǒnglèi|chủng loại|N
價錢|jiàqián|giá cả|N
感覺|gǎnjué|cảm giác|N
雞排|jīpái|gà cốm, gà rán phi lê|N
口|kǒu|miếng, ngụm|M
紅茶|hóngchá|hồng trà|N
平溪|píngxī|Bình Khê (thị trấn phía bắc Đài Loan)|Name
元宵節|yuánxiāojié|Tết Nguyên Tiêu|Name
孔廟|kǒngmiào|Văn Miếu|Name
校外教學|xiàowàijiàoxué|tham quan học tập ngoài trường|Phrase
碰到|pèngdào|gặp, tình cờ gặp|Phrase
水煎包|shuǐjiānbāo|bánh bao chiên|Phrase
同事|tóngshì|đồng nghiệp|N
美食|měishí|món ngon|N
上|shàng|lên|V
泡|pào|ngâm (trà, suối nước nóng)|V
錯過|cuòguò|bỏ lỡ|Vpt
營業|yíngyè|kinh doanh, mở cửa|Vi
夜景|yèjǐng|cảnh đêm|N
古老|gǔlǎo|cổ xưa|Vs
古蹟|gǔjī|di tích|N
重視|zhòngshì|coi trọng|Vst
歷史|lìshǐ|lịch sử|N
風俗|fēngsú|phong tục|N
習慣|xíguàn|thói quen|N
道地|dàodì|chính gốc|Vs
粥|zhōu|cháo|N
講究|jiǎngjiū|chú trọng, cầu kỳ|Vst
頓|dùn|bữa (lượng từ)|M
速度|sùdù|tốc độ|N
窄|zhǎi|hẹp|Vs
街道|jiēdào|đường phố|N
蓋|gài|xây|V
待|dài|ở lại|Vi
欣賞|xīnshǎng|thưởng thức|V
美麗|měilì|xinh đẹp|Vs
鈴木|língmù|Suzuki|Name
赤崁樓|chìkànlóu|lầu Xích Khảm|Name
留下來|liúxiàlái|để lại|Phrase
木造|mùzào|làm bằng gỗ|Phrase
非去不可|fēiqùbùkě|nhất định phải đi|Phrase`,d:{l:`陳敏萱|你們昨天去校外教學，玩得怎麼樣？|nǐ men zuó tiān qù xiào wài jiào xué， wán dé zěn me yàng？|Hôm qua các bạn đi tham quan ngoài trường, vui không?
安德思|很不錯。我們去了很多地方。我最喜歡平溪老街，那裡的氣氛讓我想起了家鄉。|hěn bú cuò。 wǒ men qù le hěn duō dì fāng。 wǒ zuì xǐ huān píng xī lǎo jiē， nà lǐ de qì fēn ràng wǒ xiǎng qǐ le jiā xiāng。|Rất tuyệt. Chúng tôi đi nhiều nơi. Tôi thích nhất phố cổ Bình Khê, bầu không khí ở đó khiến tôi nhớ quê nhà.
羅珊蒂|平溪，我元宵節的時候剛去過。我語言交換的朋友帶我去放天燈。他告訴我把願望寫在天燈上，就可以實現。|píng xī， wǒ yuán xiāo jié de shí hòu gāng qù guò。 wǒ yǔ yán jiāo huàn de péng yǒu dài wǒ qù fàng tiān dēng。 tā gào sù wǒ bǎ yuàn wàng xiě zài tiān dēng shàng， jiù kě yǐ shí xiàn。|Bình Khê, Tết Nguyên Tiêu tôi vừa đến. Bạn trao đổi ngôn ngữ dẫn tôi đi thả đèn trời. Cậu ấy bảo viết điều ước lên đèn trời thì sẽ thành hiện thực.
安德思|聽說那天放天燈的人特別多。|tīng shuō nà tiān fàng tiān dēng de rén tè bié duō。|Nghe nói hôm đó người thả đèn trời đặc biệt đông.
羅珊蒂|是啊，後來我找不到我朋友，手機又收不到訊號，還好碰到一位熱心的小姐，她不但帶我回車站，還請我吃了一碗元宵。|shì a， hòu lái wǒ zhǎo bú dào wǒ péng yǒu， shǒu jī yòu shōu bú dào xùn hào， hái hǎo pèng dào yí wèi rè xīn de xiǎo jiě， tā bú dàn dài wǒ huí chē zhàn， hái qǐng wǒ chī le yì wǎn yuán xiāo。|Đúng vậy, sau đó tôi không tìm thấy bạn, điện thoại lại không có sóng, may gặp một cô gái nhiệt tình, không những dẫn tôi về ga còn mời tôi ăn một bát bánh trôi.
高橋健太|對、對、對，台灣人真有人情味。有一次，我去參觀台南孔廟，正在研究牆上的字，有一位老先生過來很有耐心地給我解釋。這件事情讓我非常感動。|duì、 duì、 duì， tái wān rén zhēn yǒu rén qíng wèi。 yǒu yí cì， wǒ qù cān guān tái nán kǒng miào， zhèng zài yán jiū qiáng shàng de zì， yǒu yí wèi lǎo xiān shēng guò lái hěn yǒu nài xīn dì gěi wǒ jiě shì。 zhè jiàn shì qíng ràng wǒ fēi cháng gǎn dòng。|Đúng đúng, người Đài Loan thật giàu tình người. Có lần tôi đến tham quan Văn Miếu Đài Nam, đang xem chữ trên tường thì có một cụ ông đến giải thích rất kiên nhẫn. Chuyện đó khiến tôi rất cảm động.
安德思|我聽說台南有很多有特色的老店，夜市的小吃也很有名。你吃了擔仔麵嗎？|wǒ tīng shuō tái nán yǒu hěn duō yǒu tè sè de lǎo diàn， yè shì de xiǎo chī yě hěn yǒu míng。 nǐ chī le dān zǎi miàn ma？|Nghe nói Đài Nam có nhiều tiệm lâu đời đặc sắc, đồ ăn vặt chợ đêm cũng nổi tiếng. Bạn ăn mì Đạm Tử chưa?
高橋健太|當然吃了。我朋友帶我去吃了好幾樣小吃。那些店都在巷子裡，沒有招牌，只有當地人才知道，可是東西都好吃得不得了。|dāng rán chī le。 wǒ péng yǒu dài wǒ qù chī le hǎo jǐ yàng xiǎo chī。 nà xiē diàn dōu zài xiàng zi lǐ， méi yǒu zhāo pái， zhǐ yǒu dāng dì rén cái zhī dào， kě shì dōng xī dōu hǎo chī dé bù dé le。|Tất nhiên rồi. Bạn tôi dẫn đi ăn mấy món. Các tiệm đó đều trong hẻm, không có bảng hiệu, chỉ dân địa phương mới biết, nhưng món nào cũng ngon cực kỳ.
陳敏萱|台北的巷子裡也有很多有特色的商店。像我們學校附近的巷子裡有一家茶館，你一進去老闆就拿好茶招待你，跟你談茶、談生活。|tái běi de xiàng zi lǐ yě yǒu hěn duō yǒu tè sè de shāng diàn。 xiàng wǒ men xué xiào fù jìn de xiàng zi lǐ yǒu yì jiā chá guǎn， nǐ yí jìn qù lǎo bǎn jiù ná hǎo chá zhāo dài nǐ， gēn nǐ tán chá、 tán shēng huó。|Trong hẻm Đài Bắc cũng có nhiều cửa hàng đặc sắc. Như trong hẻm gần trường chúng ta có một quán trà, bạn vừa vào ông chủ đã mời trà ngon, nói chuyện về trà và cuộc sống.
陳敏萱|老闆說，他開茶館，不是為了賺錢，而是為了讓大家認識茶文化，也交朋友。|lǎo bǎn shuō， tā kāi chá guǎn， bú shì wèi le zhuàn qián， ér shì wèi le ràng dà jiā rèn shí chá wén huà， yě jiāo péng yǒu。|Ông chủ nói ông mở quán trà không phải để kiếm tiền mà để mọi người hiểu văn hóa trà và kết bạn.
高橋健太|台灣有特色的商店很多都不在大街上，你得走進巷子才找得到。|tái wān yǒu tè sè de shāng diàn hěn duō dōu bú zài dà jiē shàng， nǐ dé zǒu jìn xiàng zi cái zhǎo de dào。|Nhiều cửa hàng đặc sắc ở Đài Loan không nằm trên phố lớn, phải đi vào hẻm mới tìm thấy.
羅珊蒂|為什麼？|wèi shén me？|Tại sao?
高橋健太|因為台北的房租太貴了，一些有理想的人只好把店開在巷子裡。|yīn wèi tái běi de fáng zū tài guì le， yì xiē yǒu lǐ xiǎng de rén zhǐ hǎo bǎ diàn kāi zài xiàng zi lǐ。|Vì tiền thuê ở Đài Bắc quá đắt, một số người có lý tưởng đành mở tiệm trong hẻm.
安德思|敏萱剛剛說的那家茶館，我很有興趣。改天我們一起去，怎麼樣？|mǐn xuān gāng gāng shuō de nà jiā chá guǎn， wǒ hěn yǒu xìng qù。 gǎi tiān wǒ men yì qǐ qù， zěn me yàng？|Quán trà Mẫn Huyên vừa nói tôi rất hứng thú. Hôm nào cùng đi nhé?
羅珊蒂|去茶館，太無聊了吧。我還是比較喜歡去熱鬧的地方，尤其是台北101新年放煙火的時候，跟幾十萬人一起看煙火、跨年，以前我從來沒有過這樣的經驗。|qù chá guǎn， tài wú liáo le ba。 wǒ hái shì bǐ jiào xǐ huān qù rè nào de dì fāng， yóu qí shì tái běi 101 xīn nián fàng yān huǒ de shí hòu， gēn jǐ shí wàn rén yì qǐ kàn yān huǒ、 kuà nián， yǐ qián wǒ cóng lái méi yǒu guò zhè yàng de jīng yàn。|Đi quán trà chán chết. Tôi vẫn thích nơi náo nhiệt hơn, nhất là lúc Taipei 101 bắn pháo hoa năm mới, cùng mấy trăm nghìn người xem pháo hoa đón năm, trước đây tôi chưa từng có trải nghiệm như vậy.
高橋健太|我最喜歡逛夜市。那裡的東西種類又多，價錢又便宜。|wǒ zuì xǐ huān guàng yè shì。 nà lǐ de dōng xī zhǒng lèi yòu duō， jià qián yòu pián yi。|Tôi thích nhất dạo chợ đêm. Đồ ở đó nhiều loại, giá lại rẻ.
陳敏萱|我也喜歡夜市的熱鬧，讓我有過節的感覺。在我家鄉，只有過年過節的時候才看得到這麼多人。|wǒ yě xǐ huān yè shì de rè nào， ràng wǒ yǒu guò jié de gǎn jué。 zài wǒ jiā xiāng， zhǐ yǒu guò nián guò jié de shí hòu cái kàn dé dào zhè me duō rén。|Tôi cũng thích sự náo nhiệt của chợ đêm, cho tôi cảm giác như ngày lễ. Ở quê tôi chỉ dịp Tết lễ mới thấy đông người thế.
羅珊蒂|我到夜市一定先找吃的，像臭豆腐、水煎包這些都不錯，不過我最愛的還是炸雞排。一口雞排，一口冰紅茶，真是開心極了。|wǒ dào yè shì yí dìng xiān zhǎo chī de， xiàng chòu dòu fǔ、 shuǐ jiān bāo zhè xiē dōu bú cuò， bú guò wǒ zuì ài de hái shì zhà jī pái。 yì kǒu jī pái， yì kǒu bīng hóng chá， zhēn shì kāi xīn jí le。|Đến chợ đêm tôi nhất định tìm đồ ăn trước, như đậu hũ thối, bánh bao chiên đều ngon, nhưng tôi thích nhất vẫn là gà rán. Một miếng gà, một ngụm trà đá, vui hết sức.
高橋健太|我們這個週末就一起去吧！|wǒ men zhè gè zhōu mò jiù yì qǐ qù ba！|Cuối tuần này chúng ta cùng đi nhé!
短文|鈴木先生是高橋健太在日本的同事。他常聽高橋談到台灣的人情味和美食，所以上個星期他趁放假來台灣旅行。|líng mù xiān shēng shì gāo qiáo jiàn tài zài rì běn de tóng shì。 tā cháng tīng gāo qiáo tán dào tái wān de rén qíng wèi hé měi shí， suǒ yǐ shàng gè xīng qī tā chèn fàng jià lái tái wān lǚ xíng。|Ông Suzuki là đồng nghiệp của Takahashi Kenta ở Nhật. Ông thường nghe Takahashi nói về tình người và món ngon Đài Loan nên tuần trước tranh thủ kỳ nghỉ đến Đài Loan du lịch.
短文|高橋帶他去參觀故宮博物院，上陽明山泡茶、泡溫泉，當然也沒錯過東區，逛了24小時營業的書店，看了101的夜景，也吃了很多台北的美食。|gāo qiáo dài tā qù cān guān gù gōng bó wù yuàn， shàng yáng míng shān pào chá、 pào wēn quán， dāng rán yě méi cuò guò dōng qū， guàng le 24 xiǎo shí yíng yè de shū diàn， kàn le 101 de yè jǐng， yě chī le hěn duō tái běi de měi shí。|Takahashi dẫn ông tham quan Bảo tàng Cố cung, lên núi Dương Minh uống trà, ngâm suối nước nóng, tất nhiên cũng không bỏ lỡ khu Đông, đi dạo hiệu sách mở 24 giờ, ngắm cảnh đêm Taipei 101 và ăn nhiều món ngon Đài Bắc.
短文|健太還帶他在師大附近的巷子裡參觀了一些日本人留下來的木造房子。他覺得台北真是一個有特色的大城市。|jiàn tài hái dài tā zài shī dà fù jìn de xiàng zi lǐ cān guān le yì xiē rì běn rén liú xià lái de mù zào fáng zi。 tā jué dé tái běi zhēn shì yí gè yǒu tè sè de dà chéng shì。|Kenta còn dẫn ông tham quan vài ngôi nhà gỗ người Nhật để lại trong hẻm gần Shida. Ông thấy Đài Bắc đúng là thành phố lớn đặc sắc.
短文|高橋告訴他，台灣還有一個地方非去不可——台南。台南是台灣最古老的城市，有很多古蹟，而且那裡的人特別重視傳統。|gāo qiáo gào sù tā， tái wān hái yǒu yí gè dì fāng fēi qù bù kě —— tái nán。 tái nán shì tái wān zuì gǔ lǎo de chéng shì， yǒu hěn duō gǔ jī， ér qiě nà lǐ de rén tè bié zhòng shì chuán tǒng。|Takahashi bảo ông Đài Loan còn một nơi nhất định phải đến — Đài Nam. Đài Nam là thành phố cổ nhất Đài Loan, có nhiều di tích và người dân đặc biệt coi trọng truyền thống.
短文|要是他對歷史有興趣或是想多了解一些台灣人傳統的風俗習慣，應該去台南走一趟。鈴木聽了，就決定第二天搭高鐵去。|yào shì tā duì lì shǐ yǒu xìng qù huò shì xiǎng duō liǎo jiě yì xiē tái wān rén chuán tǒng de fēng sú xí guàn， yīng gāi qù tái nán zǒu yí tàng。 líng mù tīng le， jiù jué dìng dì èr tiān dā gāo tiě qù。|Nếu ông hứng thú lịch sử hoặc muốn hiểu thêm phong tục tập quán truyền thống của người Đài Loan thì nên đến Đài Nam một chuyến. Suzuki nghe vậy quyết định hôm sau đi tàu cao tốc.
短文|高橋健太也說到，對台南人來說，早餐非常重要。在赤崁樓附近就有很多小店賣台南人常吃的道地美食，所以鈴木一下高鐵就去吃了鹹粥、牛肉湯。|gāo qiáo jiàn tài yě shuō dào， duì tái nán rén lái shuō， zǎo cān fēi cháng zhòng yào。 zài chì kàn lóu fù jìn jiù yǒu hěn duō xiǎo diàn mài tái nán rén cháng chī de dào dì měi shí， suǒ yǐ líng mù yí xià gāo tiě jiù qù chī le xián zhōu、 niú ròu tāng。|Takahashi còn nói với người Đài Nam bữa sáng rất quan trọng. Gần lầu Xích Khảm có nhiều tiệm nhỏ bán món chính gốc người Đài Nam thường ăn nên Suzuki vừa xuống tàu cao tốc đã đi ăn cháo mặn và canh thịt bò.
短文|他沒想到台南人對吃這麼講究，每天花這麼多時間吃一頓早飯。|tā méi xiǎng dào tái nán rén duì chī zhè me jiǎng jiū， měi tiān huā zhè me duō shí jiān chī yí dùn zǎo fàn。|Ông không ngờ người Đài Nam cầu kỳ chuyện ăn uống đến thế, mỗi ngày dành nhiều thời gian cho một bữa sáng.
短文|吃飽了，他在附近逛逛，發現台南人不但走路慢，說話速度也慢多了。窄窄的街道兩邊還留著很多日本人蓋的房子，跟台北真的很不一樣。|chī bǎo le， tā zài fù jìn guàng guàng， fā xiàn tái nán rén bú dàn zǒu lù màn， shuō huà sù dù yě màn duō le。 zhǎi zhǎi de jiē dào liǎng biān hái liú zhù hěn duō rì běn rén gài de fáng zi， gēn tái běi zhēn de hěn bù yí yàng。|Ăn no ông đi dạo quanh đó, nhận ra người Đài Nam không chỉ đi chậm mà nói cũng chậm hơn nhiều. Hai bên đường hẹp vẫn còn nhiều nhà do người Nhật xây, thật khác Đài Bắc.
短文|雖然他在台北玩得很開心，可是在台南才讓他有輕鬆的感覺。他決定在台南多待幾天，好好地欣賞這個美麗的城市。|suī rán tā zài tái běi wán dé hěn kāi xīn， kě shì zài tái nán cái ràng tā yǒu qīng sōng de gǎn jué。 tā jué dìng zài tái nán duō dài jǐ tiān， hǎo hǎo dì xīn shǎng zhè gè měi lì de chéng shì。|Tuy chơi ở Đài Bắc rất vui nhưng chỉ ở Đài Nam ông mới cảm thấy thư thả. Ông quyết định ở Đài Nam thêm vài ngày để thưởng thức thành phố xinh đẹp này.`}},{n:5,zh:"現在流行什麼？",vi:"Bây giờ đang thịnh hành gì?",v:`流行|liúxíng|thịnh hành|Vst
唉|āi|than ôi|Ptc
演唱會|yǎnchànghuì|buổi hòa nhạc|N
塞車|sāichē|kẹt xe, nghẽn mạng|Vs
上線|shàngxiàn|lên mạng, đăng nhập|V-sep
成功|chénggōng|thành công|Vp
倒楣|dàoméi|xui xẻo|Vs
樂團|lètuán|ban nhạc|N
唱|chàng|hát|V
興奮|xìngfèn|phấn khích|Vs
迷|mí|mê, say mê|Vst
歌詞|gēcí|lời bài hát|N
難過|nánguò|buồn|Vs
不如|bùrú|không bằng|Vst
現場|xiànchǎng|hiện trường, tại chỗ|N
跳|tiào|nhảy|Vi
整|zhěng|cả, toàn bộ|Det
震動|zhèndòng|rung chuyển|Vi
漫畫|mànhuà|truyện tranh|N
內容|nèiróng|nội dung|N
色情|sèqíng|khiêu dâm|Vs
放鬆|fàngsōng|thư giãn|Vst
心情|xīnqíng|tâm trạng|N
五月天|wǔyuètiān|Mayday (ban nhạc rock Đài Loan)|Name
算了|suànle|thôi bỏ đi|Phrase
受歡迎|shòuhuānyíng|được ưa chuộng|Phrase
擠滿|jǐmǎn|chật kín|Phrase
租書店|zūshūdiàn|tiệm cho thuê sách|Phrase
平板電腦|píngbǎndiànnǎo|máy tính bảng|Phrase
智慧型手機|zhìhuìxíngshǒujī|điện thoại thông minh|Phrase
殺時間|shāshíjiān|giết thời gian|Phrase
漫畫展|mànhuàzhǎn|triển lãm truyện tranh|Phrase
來不及|láibùjí|không kịp|Phrase
撞衫|zhuàngshān|đụng hàng (mặc giống nhau)|Vs
它|tā|nó|N
塞|sāi|nhét|V
當季|dāngjì|đúng mùa|N
款式|kuǎnshì|kiểu dáng|N
連續劇|liánxùjù|phim truyền hình nhiều tập|N
主角|zhǔjué|vai chính|N
甜美|tiánměi|ngọt ngào, dễ thương|Vs
寄|jì|gửi (qua bưu điện)|V
居然|jūrán|không ngờ, thế mà|Adv
害|hài|làm hại, khiến|V
既然|jìrán|đã… thì|Conj
服裝|fúzhuāng|trang phục|N
媒體|méitǐ|truyền thông|N
方式|fāngshì|phương thức|N
吸引|xīyǐn|thu hút|Vst
避免|bìmiǎn|tránh|V
包包|bāobāo|túi xách|N
商人|shāngrén|thương nhân|N
產品|chǎnpǐn|sản phẩm|N
電子|diànzi|điện tử|N
市場|shìchǎng|thị trường|N
新型|xīnxíng|kiểu mới|Vs-attr
落伍|luòwǔ|lạc hậu|Vs
知音|zhīyīn|tri âm|N
想像|xiǎngxiàng|tưởng tượng|V
喇叭褲|lǎbākù|quần ống loe|N
印象|yìnxiàng|ấn tượng|N
遊戲|yóuxì|trò chơi|N
化妝|huàzhuāng|trang điểm|V-sep
一模一樣|yìmóyíyàng|y hệt|Phrase
淺藍色|qiǎnlánsè|màu xanh nhạt|Phrase
脫掉|tuōdiào|cởi ra|Phrase
小題大作|xiǎotídàzuò|chuyện bé xé ra to|Phrase
推出|tuīchū|tung ra|Phrase`,d:{l:`陳敏萱|你怎麼了？怎麼那麼沒精神？|nǐ zěn me le？ zěn me nà me méi jīng shén？|Bạn sao vậy? Sao trông không có tinh thần thế?
高橋健太|唉！氣死了！昨天我上網買五月天演唱會的票。沒想到網路塞車，我試了兩、三個鐘頭，等我上線成功，票已經賣完了。真倒楣！|āi！ qì sǐ le！ zuó tiān wǒ shàng wǎng mǎi wǔ yuè tiān yǎn chàng huì de piào。 méi xiǎng dào wǎng lù sāi chē， wǒ shì le liǎng、 sān gè zhōng tóu， děng wǒ shàng xiàn chéng gōng， piào yǐ jīng mài wán le。 zhēn dào méi！|Ôi! Tức chết đi được! Hôm qua tôi lên mạng mua vé concert Mayday. Không ngờ mạng nghẽn, tôi thử hai ba tiếng, đến khi vào được thì vé đã bán hết. Xui thật!
陳敏萱|你別生氣了。買不到就算了。為什麼非聽不可？|nǐ bié shēng qì le。 mǎi bú dào jiù suàn le。 wèi shén me fēi tīng bù kě？|Bạn đừng giận nữa. Không mua được thì thôi. Sao nhất định phải nghe?
羅珊蒂|五月天是誰？什麼演唱會啊？|wǔ yuè tiān shì shuí？ shén me yǎn chàng huì a？|Mayday là ai? Concert gì vậy?
高橋健太|妳聽。這就是他們的歌。五月天是華人世界最受歡迎的樂團。下個月他們的演唱會，我當然不能錯過。|nǐ tīng。 zhè jiù shì tā men de gē。 wǔ yuè tiān shì huá rén shì jiè zuì shòu huān yíng de lè tuán。 xià gè yuè tā men de yǎn chàng huì， wǒ dāng rán bù néng cuò guò。|Bạn nghe này. Đây là bài của họ. Mayday là ban nhạc được yêu thích nhất thế giới người Hoa. Concert tháng sau tôi đương nhiên không thể bỏ lỡ.
陳敏萱|我朋友去聽了他們的跨年演唱會。她說，那天體育館擠滿了人，大家都站在椅子上又唱又叫，興奮極了。|wǒ péng yǒu qù tīng le tā men de kuà nián yǎn chàng huì。 tā shuō， nà tiān tǐ yù guǎn jǐ mǎn le rén， dà jiā dōu zhàn zài yǐ zi shàng yòu chàng yòu jiào， xìng fèn jí le。|Bạn tôi đi nghe concert đón năm mới của họ. Cô ấy nói hôm đó nhà thi đấu chật cứng, mọi người đứng trên ghế vừa hát vừa hét, phấn khích cực kỳ.
羅珊蒂|他們很帥嗎？為什麼這麼多人迷他們？|tā men hěn shuài ma？ wèi shén me zhè me duō rén mí tā men？|Họ đẹp trai à? Sao nhiều người mê họ thế?
高橋健太|大家喜歡他們是因為他們的歌詞不但都寫得很美，而且能說出年輕人心裡的話。高興的時候，要聽；難過的時候，更要聽。|dà jiā xǐ huān tā men shì yīn wèi tā men de gē cí bú dàn dōu xiě dé hěn měi， ér qiě néng shuō chū nián qīng rén xīn lǐ de huà。 gāo xìng de shí hòu， yào tīng； nán guò de shí hòu， gèng yào tīng。|Mọi người thích họ vì lời bài hát không chỉ hay mà còn nói được tiếng lòng người trẻ. Lúc vui thì nghe, lúc buồn càng phải nghe.
陳敏萱|演唱會人那麼多，票又不好買，不如在家上網看舒服。|yǎn chàng huì rén nà me duō， piào yòu bù hǎo mǎi， bù rú zài jiā shàng wǎng kàn shū fú。|Concert đông người, vé lại khó mua, chi bằng xem trên mạng ở nhà cho thoải mái.
高橋健太|聽演唱會當然要去現場，大家一起唱，一起跳，整個體育館都在震動。這樣的感覺沒去過的是不能了解的。|tīng yǎn chàng huì dāng rán yào qù xiàn chǎng， dà jiā yì qǐ chàng， yì qǐ tiào， zhěng gè tǐ yù guǎn dōu zài zhèn dòng。 zhè yàng de gǎn jué méi qù guò de shì bù néng liǎo jiě de。|Nghe concert đương nhiên phải đến tận nơi, mọi người cùng hát, cùng nhảy, cả nhà thi đấu rung chuyển. Cảm giác này ai chưa từng đi thì không hiểu được.
陳敏萱|聲音那麼大，吵死了。還是在家好。|shēng yīn nà me dà， chǎo sǐ le。 hái shì zài jiā hǎo。|Âm thanh to thế ồn chết đi được. Vẫn ở nhà hơn.
高橋健太|妳整天在家不會太無聊嗎？|nǐ zhěng tiān zài jiā bú huì tài wú liáo ma？|Bạn ở nhà cả ngày không chán lắm sao?
陳敏萱|怎麼會呢？有那麼多有趣的漫畫，怎麼會覺得無聊呢？|zěn me huì ne？ yǒu nà me duō yǒu qù de màn huà， zěn me huì jué dé wú liáo ne？|Sao lại chán? Có nhiều truyện tranh thú vị thế, sao thấy chán được?
羅珊蒂|我媽媽說租書店的漫畫內容都太色情，不適合我們看。|wǒ mā mā shuō zū shū diàn de màn huà nèi róng dōu tài sè qíng， bú shì hé wǒ men kàn。|Mẹ tôi bảo truyện tranh ở tiệm cho thuê nội dung đều quá khiêu dâm, không hợp để chúng ta đọc.
高橋健太|現在誰去租書店啊？大家都用平板電腦跟智慧型手機上網看了。|xiàn zài shuí qù zū shū diàn a？ dà jiā dōu yòng píng bǎn diàn nǎo gēn zhì huì xíng shǒu jī shàng wǎng kàn le。|Giờ ai còn đến tiệm thuê sách? Mọi người đều dùng máy tính bảng và điện thoại thông minh đọc trên mạng.
羅珊蒂|我媽也說她朋友的孩子因為迷漫畫，花了太多時間，影響了功課，所以她不讓我們看。|wǒ mā yě shuō tā péng yǒu de hái zi yīn wèi mí màn huà， huā le tài duō shí jiān， yǐng xiǎng le gōng kè， suǒ yǐ tā bú ràng wǒ men kàn。|Mẹ tôi cũng nói con của bạn bà vì mê truyện tranh, tốn quá nhiều thời gian, ảnh hưởng bài vở nên bà không cho chúng tôi đọc.
高橋健太|不會啊，好的漫畫也很多啊。看漫畫除了可以放鬆心情，還可以學到很多歷史、文化和傳統。|bú huì a， hǎo de màn huà yě hěn duō a。 kàn màn huà chú le kě yǐ fàng sōng xīn qíng， hái kě yǐ xué dào hěn duō lì shǐ、 wén huà hé chuán tǒng。|Không đâu, truyện hay cũng nhiều mà. Đọc truyện tranh ngoài thư giãn còn học được nhiều lịch sử, văn hóa và truyền thống.
陳敏萱|沒錯。我也是看了漫畫才知道壽司是怎麼做的。|méi cuò。 wǒ yě shì kàn le màn huà cái zhī dào shòu sī shì zěn me zuò de。|Đúng vậy. Tôi cũng nhờ đọc truyện tranh mới biết sushi làm thế nào.
羅珊蒂|看漫畫就是為了殺時間。你們想太多啦。|kàn màn huà jiù shì wèi le shā shí jiān。 nǐ men xiǎng tài duō la。|Đọc truyện tranh chỉ để giết thời gian thôi. Các bạn nghĩ nhiều quá.
陳敏萱|幾點了？這麼晚啦？我跟朋友約了去看漫畫展，他們在捷運站等我，再不走就來不及了。改天再聊吧。|jǐ diǎn le？ zhè me wǎn la？ wǒ gēn péng yǒu yuē le qù kàn màn huà zhǎn， tā men zài jié yùn zhàn děng wǒ， zài bù zǒu jiù lái bù jí le。 gǎi tiān zài liáo ba。|Mấy giờ rồi? Muộn thế sao? Tôi hẹn bạn đi xem triển lãm truyện tranh, họ đợi ở ga MRT, không đi nữa là không kịp. Hôm khác nói chuyện tiếp nhé.
短文|何雅婷昨天晚上去上西班牙文課的時候，發現班上有個同學穿著一件跟她一模一樣的淺藍色外套。何雅婷馬上脫掉外套，把它塞進背包裡。|hé yǎ tíng zuó tiān wǎn shàng qù shàng xī bān yá wén kè de shí hòu， fā xiàn bān shàng yǒu gè tóng xué chuān zhù yí jiàn gēn tā yì mó yí yàng de qiǎn lán sè wài tào。 hé yǎ tíng mǎ shàng tuō diào wài tào， bǎ tā sāi jìn bēi bāo lǐ。|Tối qua khi đi học lớp tiếng Tây Ban Nha, Hà Nhã Đình thấy một bạn trong lớp mặc áo khoác xanh nhạt giống y hệt áo cô. Cô lập tức cởi áo, nhét vào ba lô.
短文|她覺得怎麼會發生這種事情呢？這件外套是當季款式，她看到連續劇裡的女主角穿了這件衣服看起來很甜美，所以才特別請朋友從國外寄來的。沒想到居然撞衫，害她整個晚上心情都很不好。|tā jué dé zěn me huì fā shēng zhè zhǒng shì qíng ne？ zhè jiàn wài tào shì dāng jì kuǎn shì， tā kàn dào lián xù jù lǐ de nǚ zhǔ jué chuān le zhè jiàn yī fú kàn qǐ lái hěn tián měi， suǒ yǐ cái tè bié qǐng péng yǒu cóng guó wài jì lái de。 méi xiǎng dào jū rán zhuàng shān， hài tā zhěng gè wǎn shàng xīn qíng dōu hěn bù hǎo。|Cô nghĩ sao lại xảy ra chuyện này? Áo này là mẫu theo mùa, cô thấy nữ chính phim truyền hình mặc trông rất dễ thương nên nhờ bạn đặc biệt gửi từ nước ngoài về. Không ngờ lại đụng hàng, khiến cả tối cô rất bực.
短文|今天中午下了課以後，何雅婷跟陳敏萱和安德思見面的時候，談到了這件事。陳敏萱覺得不需要為了這種事不高興。既然是最流行的款式，當然會有很多人穿。|jīn tiān zhōng wǔ xià le kè yǐ hòu， hé yǎ tíng gēn chén mǐn xuān hé ān dé sī jiàn miàn de shí hòu， tán dào le zhè jiàn shì。 chén mǐn xuān jué dé bù xū yào wèi le zhè zhǒng shì bù gāo xìng。 jì rán shì zuì liú xíng de kuǎn shì， dāng rán huì yǒu hěn duō rén chuān。|Trưa nay sau giờ học, khi gặp Trần Mẫn Huyên và An Đức Tư, Nhã Đình kể chuyện này. Mẫn Huyên thấy không cần buồn vì chuyện đó. Đã là mẫu thịnh hành nhất thì tất nhiên nhiều người mặc.
短文|服裝公司在各種媒體上用不同的方式做廣告，吸引大家去買，撞衫就很難避免。只要能穿出不同的感覺就好了。|fú zhuāng gōng sī zài gè zhǒng méi tǐ shàng yòng bù tóng de fāng shì zuò guǎng gào， xī yǐn dà jiā qù mǎi， zhuàng shān jiù hěn nán bì miǎn。 zhǐ yào néng chuān chū bù tóng de gǎn jué jiù hǎo le。|Các công ty thời trang quảng cáo trên đủ loại truyền thông bằng nhiều cách để thu hút mọi người mua, nên đụng hàng khó tránh. Chỉ cần mặc ra cảm giác khác là được.
短文|安德思不懂為什麼有人怕撞衫。他認為何雅婷太小題大作了。衣服、包包跟別人一樣有什麼關係。|ān dé sī bù dǒng wèi shén me yǒu rén pà zhuàng shān。 tā rèn wèi hé yǎ tíng tài xiǎo tí dà zuò le。 yī fú、 bāo bāo gēn bié rén yí yàng yǒu shén me guān xì。|An Đức Tư không hiểu sao có người sợ đụng hàng. Anh cho rằng Nhã Đình làm to chuyện. Quần áo, túi xách giống người khác thì có sao.
短文|商人為了賺錢，每年都要推出新的產品，新的款式，像電子產品，如果市場上有了最新型的，自己沒有，就落伍了。如果別人有跟自己一樣的新產品，一定會說個不停，像碰到了知音。既然這樣，女人為什麼怕撞衫呢？|shāng rén wèi le zhuàn qián， měi nián dōu yào tuī chū xīn de chǎn pǐn， xīn de kuǎn shì， xiàng diàn zi chǎn pǐn， rú guǒ shì chǎng shàng yǒu le zuì xīn xíng de， zì jǐ méi yǒu， jiù luò wǔ le。 rú guǒ bié rén yǒu gēn zì jǐ yí yàng de xīn chǎn pǐn， yí dìng huì shuō gè bù tíng， xiàng pèng dào le zhī yīn。 jì rán zhè yàng， nǚ rén wèi shén me pà zhuàng shān ne？|Thương nhân để kiếm tiền mỗi năm đều tung sản phẩm, mẫu mới; như đồ điện tử, thị trường có loại mới nhất mà mình không có thì lạc hậu. Nếu người khác có sản phẩm mới giống mình thì nhất định nói không ngừng như gặp tri âm. Đã vậy sao phụ nữ lại sợ đụng hàng?
短文|何雅婷覺得他說的沒錯，是很難想像如果自己穿著喇叭褲去上課，會給別人什麼印象。再說，如果不懂流行，不看最受歡迎的連續劇，不去最熱門的餐廳，不玩最流行的電腦遊戲，不知道現在流行化什麼樣的妝，大概就沒什麼朋友了。|hé yǎ tíng jué dé tā shuō de méi cuò， shì hěn nán xiǎng xiàng rú guǒ zì jǐ chuān zhù lǎ bā kù qù shàng kè， huì gěi bié rén shén me yìn xiàng。 zài shuō， rú guǒ bù dǒng liú xíng， bú kàn zuì shòu huān yíng de lián xù jù， bú qù zuì rè mén de cān tīng， bù wán zuì liú xíng de diàn nǎo yóu xì， bù zhī dào xiàn zài liú xíng huà shén me yàng de zhuāng， dà gài jiù méi shén me péng yǒu le。|Nhã Đình thấy anh nói đúng, thật khó tưởng tượng nếu mình mặc quần ống loe đi học sẽ gây ấn tượng gì. Hơn nữa nếu không hiểu mốt, không xem phim ăn khách nhất, không đến quán hot nhất, không chơi game thịnh hành nhất, không biết đang chuộng kiểu trang điểm nào thì chắc chẳng có mấy bạn.`}},{n:6,zh:"到鄉下住一晚！",vi:"Về quê ở một đêm!",v:`李文彥|lǐwényàn|Lý Văn Ngạn (người Mỹ gốc Hoa)|Name
表哥|biǎogē|anh họ (con của cô)|N
隨便|suíbiàn|tùy ý, cứ tự nhiên|Adv
種|zhǒng|trồng|V
蔬菜|shūcài|rau củ|N
農夫|nóngfū|nông dân|N
減少|jiǎnshǎo|giảm bớt|V
農藥|nóngyào|thuốc trừ sâu|N
天然|tiānrán|thiên nhiên|Vs-attr
堆肥|duīféi|phân ủ|N
辛苦|xīnkǔ|vất vả|Vs
地位|dìwèi|địa vị|N
收入|shōurù|thu nhập|N
利潤|lìrùn|lợi nhuận|N
屋子|wūzi|căn nhà, gian phòng|N
番茄|fānqié|cà chua|N
品種|pǐnzhǒng|giống, chủng loại|N
氣候|qìhòu|khí hậu|N
長|zhǎng|mọc, lớn lên|Vi
熟|shú|chín|Vp
片|piàn|mảnh, vạt (đất)|M
田|tián|ruộng|N
照顧|zhàogù|chăm sóc|V
敢|gǎn|dám|Vaux
條件|tiáojiàn|điều kiện|N
黑|hēi|tối, đen|Vp
摘下來|zhāixiàlái|hái xuống|Phrase
做不動|zuòbúdòng|làm không nổi|Phrase
基因改造|jīyīngǎizào|biến đổi gen|Phrase
忙得過來|mángdéguòlái|xoay xở kịp|Phrase
開玩笑|kāiwánxiào|nói đùa|Phrase
看天吃飯|kàntiānchīfàn|ăn nhờ ông trời|Phrase
小農|xiǎonóng|tiểu nông, nông dân nhỏ|N
市集|shìjí|chợ phiên|N
食材|shícái|nguyên liệu thực phẩm|N
產地|chǎndì|nơi sản xuất|N
盡量|jǐnliàng|cố gắng hết sức|Adv
友善|yǒushàn|thân thiện|Vs
對待|duìdài|đối xử|V
土地|tǔdì|đất đai|N
信任|xìnrèn|tin tưởng|Vst
寧可|níngkě|thà rằng|Vst
跑|pǎo|chạy (đi đi lại lại)|Vi
支持|zhīchí|ủng hộ|V
文章|wénzhāng|bài viết|N
推銷|tuīxiāo|quảng bá, chào bán|V
其中|qízhōng|trong đó|Det
師傅|shīfù|thợ cả, sư phụ|N
農村|nóngcūn|nông thôn|N
長大|zhǎngdà|lớn lên|Vi
幫助|bāngzhù|giúp đỡ|V
拜訪|bàifǎng|thăm viếng|V
出產|chūchǎn|sản xuất ra|V
由於|yóuyú|do, bởi vì|Conj
許多|xǔduō|nhiều|Det
接近|jiējìn|gần gũi, tiếp cận|Vst
自然|zìrán|tự nhiên|N
變成|biànchéng|biến thành|Vpt
休閒|xiūxián|thư giãn, giải trí|Vs
隨著|suízhù|cùng với, theo sự|Prep
觀光|guānguāng|tham quan du lịch|Vi
消費|xiāofèi|tiêu dùng|Vi
安靜|ānjìng|yên tĩnh|Vs
消失|xiāoshī|biến mất|Vp
出問題|chūwèntí|xảy ra vấn đề|Phrase
一方面|yìfāngmiàn|một mặt|Phrase`,d:{l:`表哥|歡迎、歡迎。大家隨便坐。這是剛摘下來的芒果，大家嚐嚐。|huān yíng、 huān yíng。 dà jiā suí biàn zuò。 zhè shì gāng zhāi xià lái de máng guǒ， dà jiā cháng cháng。|Hoan nghênh, hoan nghênh. Mọi người cứ tự nhiên ngồi. Đây là xoài vừa hái, mời mọi người nếm thử.
李文彥|很好吃吧？我表哥除了芒果以外，還種了很多有機蔬菜。他是現代農夫。|hěn hǎo chī ba？ wǒ biǎo gē chú le máng guǒ yǐ wài， hái zhǒng le hěn duō yǒu jī shū cài。 tā shì xiàn dài nóng fū。|Ngon chứ? Anh họ tôi ngoài xoài còn trồng nhiều rau hữu cơ. Anh là nông dân hiện đại.
安德思|為什麼說他是現代農夫？|wèi shén me shuō tā shì xiàn dài nóng fū？|Sao nói anh ấy là nông dân hiện đại?
李文彥|因為他跟傳統農夫很不一樣。為了減少對環境的污染，他不用農藥，而且只用天然堆肥，大家可以放心地吃。|yīn wèi tā gēn chuán tǒng nóng fū hěn bù yí yàng。 wèi le jiǎn shǎo duì huán jìng de wū rǎn， tā bú yòng nóng yào， ér qiě zhǐ yòng tiān rán duī féi， dà jiā kě yǐ fàng xīn dì chī。|Vì anh rất khác nông dân truyền thống. Để giảm ô nhiễm môi trường, anh không dùng thuốc trừ sâu, chỉ dùng phân ủ tự nhiên, mọi người cứ yên tâm ăn.
安德思|當農夫不是很辛苦嗎？你為什麼要當農夫？|dāng nóng fū bú shì hěn xīn kǔ ma？ nǐ wèi shén me yào dāng nóng fū？|Làm nông chẳng phải rất vất vả sao? Sao anh lại làm nông?
表哥|我本來在大學教書，因為看到父母年紀大了，做不動了，才決定回來幫忙的。|wǒ běn lái zài dà xué jiào shū， yīn wèi kàn dào fù mǔ nián jì dà le， zuò bú dòng le， cái jué dìng huí lái bāng máng de。|Tôi vốn dạy đại học, thấy cha mẹ tuổi cao làm không nổi nữa mới quyết định về giúp.
羅珊蒂|你家人不反對你回來嗎？|nǐ jiā rén bù fǎn duì nǐ huí lái ma？|Gia đình anh không phản đối anh về sao?
表哥|當然反對。農夫在台灣的社會地位不高，工作辛苦不說，收入也不穩定，父母都希望孩子有更好的發展。|dāng rán fǎn duì。 nóng fū zài tái wān de shè huì dì wèi bù gāo， gōng zuò xīn kǔ bù shuō， shōu rù yě bù wěn dìng， fù mǔ dōu xī wàng hái zi yǒu gèng hǎo de fā zhǎn。|Đương nhiên phản đối. Nông dân ở Đài Loan địa vị xã hội không cao, công việc vất vả chưa kể thu nhập cũng không ổn định, cha mẹ đều mong con có tương lai tốt hơn.
羅珊蒂|怎麼會呢？超市的有機蔬菜都貴得不得了。|zěn me huì ne？ chāo shì de yǒu jī shū cài dōu guì dé bù dé le。|Sao lại thế? Rau hữu cơ ở siêu thị đắt kinh khủng.
表哥|賣給超市，農夫的利潤很低，可是自己賣的話，問題更多。|mài gěi chāo shì， nóng fū de lì rùn hěn dī， kě shì zì jǐ mài de huà， wèn tí gèng duō。|Bán cho siêu thị thì lợi nhuận của nông dân rất thấp, còn tự bán thì vấn đề càng nhiều.
表哥|今天不談這個。天氣這麼好，別一直待在屋子裡，我們出去走走吧。|jīn tiān bù tán zhè gè。 tiān qì zhè me hǎo， bié yì zhí dài zài wū zi lǐ， wǒ men chū qù zǒu zǒu ba。|Hôm nay đừng nói chuyện này. Trời đẹp thế, đừng ở mãi trong nhà, chúng ta ra ngoài đi dạo.
安德思|這些番茄真漂亮！|zhè xiē fān qié zhēn piào liàng！|Những quả cà chua này đẹp quá!
表哥|這不是基因改造的，是新品種。今年氣候特別好，再加上沒有颱風，所以青菜水果都長得很好。|zhè bú shì jī yīn gǎi zào de， shì xīn pǐn zhǒng。 jīn nián qì hòu tè bié hǎo， zài jiā shàng méi yǒu tái fēng， suǒ yǐ qīng cài shuǐ guǒ dōu zhǎng dé hěn hǎo。|Đây không phải biến đổi gen mà là giống mới. Năm nay khí hậu đặc biệt tốt, lại không có bão nên rau quả đều lớn rất tốt.
安德思|這些番茄熟了嗎？|zhè xiē fān qié shú le ma？|Cà chua này chín chưa?
表哥|熟了，熟了，摘下來就可以吃了。這些番茄都是有機的，不必洗。|shú le， shú le， zhāi xià lái jiù kě yǐ chī le。 zhè xiē fān qié dōu shì yǒu jī de， bú bì xǐ。|Chín rồi, chín rồi, hái xuống là ăn được. Cà chua này đều hữu cơ, không cần rửa.
安德思|這麼大的一片田，你一個人照顧，忙得過來嗎？|zhè me dà de yí piàn tián， nǐ yí gè rén zhào gù， máng dé guò lái ma？|Một thửa ruộng lớn thế này mình anh chăm, có xoay xở kịp không?
表哥|平常還好，可是收成的時候，很難找到人幫忙。|píng cháng hái hǎo， kě shì shōu chéng de shí hòu， hěn nán zhǎo dào rén bāng máng。|Ngày thường còn ổn, nhưng lúc thu hoạch rất khó tìm người giúp.
李文彥|這幾年，回到鄉下種田的年輕人不是很多嗎？|zhè jǐ nián， huí dào xiāng xià zhǒng tián de nián qīng rén bú shì hěn duō ma？|Mấy năm nay chẳng phải nhiều người trẻ về quê làm ruộng sao?
表哥|忙的時候，大家都一樣，連自己的事都做不完，怎麼有時間幫別人的忙？|máng de shí hòu， dà jiā dōu yí yàng， lián zì jǐ de shì dōu zuò bù wán， zěn me yǒu shí jiān bāng bié rén de máng？|Lúc bận ai cũng vậy, việc mình còn làm không xong, đâu có thời gian giúp người khác?
羅珊蒂|你怎麼不找個太太來幫你？|nǐ zěn me bù zhǎo gè tài tài lái bāng nǐ？|Sao anh không tìm một người vợ giúp?
李文彥|妳這個問題問得真好。我表哥什麼都有，就是少了一個太太。|nǐ zhè gè wèn tí wèn dé zhēn hǎo。 wǒ biǎo gē shén me dōu yǒu， jiù shì shǎo le yí gè tài tài。|Câu hỏi của bạn hay lắm. Anh họ tôi cái gì cũng có, chỉ thiếu một người vợ.
表哥|別開玩笑了。農夫看天吃飯，收入這麼不穩定，怎麼敢結婚？|bié kāi wán xiào le。 nóng fū kàn tiān chī fàn， shōu rù zhè me bù wěn dìng， zěn me gǎn jié hūn？|Đừng đùa. Nông dân ăn nhờ ông trời, thu nhập bất ổn thế sao dám cưới vợ?
羅珊蒂|表哥，你條件這麼好，我給你介紹一個，怎麼樣？|biǎo gē， nǐ tiáo jiàn zhè me hǎo， wǒ gěi nǐ jiè shào yí gè， zěn me yàng？|Anh à, điều kiện anh tốt thế, tôi giới thiệu một người nhé?
表哥|以後再說吧！天黑了，我們快回去吃飯。|yǐ hòu zài shuō ba！ tiān hēi le， wǒ men kuài huí qù chī fàn。|Sau hãy nói! Trời tối rồi, mình mau về ăn cơm.
短文|星期天一大早，何雅婷就陪著媽媽到農夫市集去買菜。最近食品安全出了好幾次問題，何雅婷的媽媽為了家人的健康，開始注意食材的產地，也盡量到有機商店和農夫市集買菜。|xīng qī tiān yí dà zǎo， hé yǎ tíng jiù péi zhù mā mā dào nóng fū shì jí qù mǎi cài。 zuì jìn shí pǐn ān quán chū le hǎo jǐ cì wèn tí， hé yǎ tíng de mā mā wèi le jiā rén de jiàn kāng， kāi shǐ zhù yì shí cái de chǎn dì， yě jǐn liàng dào yǒu jī shāng diàn hé nóng fū shì jí mǎi cài。|Sáng sớm Chủ nhật, Hà Nhã Đình theo mẹ đến chợ nông sản mua thức ăn. Gần đây an toàn thực phẩm xảy ra mấy lần, mẹ Nhã Đình vì sức khỏe gia đình bắt đầu để ý nơi sản xuất nguyên liệu, cố gắng mua ở cửa hàng hữu cơ và chợ nông dân.
短文|雖然這些地方賣的東西種類沒有市場那麼多，價錢也比較高，可是媽媽常跟農夫聊天，了解小農用友善的方式對待土地和環境，很信任他們，所以寧可每個星期跑一趟，多花一點錢，也要支持小農。|suī rán zhè xiē dì fāng mài de dōng xī zhǒng lèi méi yǒu shì chǎng nà me duō， jià qián yě bǐ jiào gāo， kě shì mā mā cháng gēn nóng fū liáo tiān， liǎo jiě xiǎo nóng yòng yǒu shàn de fāng shì duì dài tǔ dì hé huán jìng， hěn xìn rèn tā men， suǒ yǐ níng kě měi gè xīng qī pǎo yí tàng， duō huā yì diǎn qián， yě yào zhī chí xiǎo nóng。|Tuy hàng ở đây không đa dạng như chợ, giá cũng cao hơn, nhưng mẹ hay trò chuyện với nông dân, hiểu tiểu nông đối xử thân thiện với đất đai môi trường nên rất tin họ, thà mỗi tuần đi một chuyến, trả thêm chút tiền cũng muốn ủng hộ tiểu nông.
短文|像何雅婷媽媽這樣關心小農的人越來越多。有人寫文章介紹小農種的蔬菜水果，有人到處幫小農推銷，其中最有名的是一位麵包師傅。|xiàng hé yǎ tíng mā mā zhè yàng guān xīn xiǎo nóng de rén yuè lái yuè duō。 yǒu rén xiě wén zhāng jiè shào xiǎo nóng zhǒng de shū cài shuǐ guǒ， yǒu rén dào chù bāng xiǎo nóng tuī xiāo， qí zhōng zuì yǒu míng de shì yí wèi miàn bāo shī fù。|Người quan tâm tiểu nông như mẹ Nhã Đình ngày càng nhiều. Có người viết bài giới thiệu rau quả tiểu nông trồng, có người đi khắp nơi giúp họ quảng bá, nổi tiếng nhất là một thợ làm bánh mì.
短文|他從小在農村長大，了解農夫的辛苦。為了幫助小農，也為了幫自己的產品找更好的食材，他常常拜訪小農，用他們出產的食材做出受歡迎的麵包。|tā cóng xiǎo zài nóng cūn zhǎng dà， liǎo jiě nóng fū de xīn kǔ。 wèi le bāng zhù xiǎo nóng， yě wèi le bāng zì jǐ de chǎn pǐn zhǎo gèng hǎo de shí cái， tā cháng cháng bài fǎng xiǎo nóng， yòng tā men chū chǎn de shí cái zuò chū shòu huān yíng de miàn bāo。|Ông lớn lên ở nông thôn từ nhỏ, hiểu nỗi vất vả của nông dân. Để giúp tiểu nông và tìm nguyên liệu tốt hơn cho sản phẩm, ông thường đến thăm họ, dùng nguyên liệu họ sản xuất làm ra bánh mì được yêu thích.
短文|由於報紙、網路的介紹，許多住在城市裡的人開始羨慕小農的生活。他們利用放假的時候，帶著孩子到農村去，一方面可以讓孩子在田裡跑跑跳跳，接近自然，一方面自己也可以放鬆心情。到鄉下住一晚變成了現在熱門的休閒活動。|yóu yú bào zhǐ、 wǎng lù de jiè shào， xǔ duō zhù zài chéng shì lǐ de rén kāi shǐ xiàn mù xiǎo nóng de shēng huó。 tā men lì yòng fàng jià de shí hòu， dài zhù hái zi dào nóng cūn qù， yì fāng miàn kě yǐ ràng hái zi zài tián lǐ pǎo pǎo tiào tiào， jiē jìn zì rán， yì fāng miàn zì jǐ yě kě yǐ fàng sōng xīn qíng。 dào xiāng xià zhù yì wǎn biàn chéng le xiàn zài rè mén de xiū xián huó dòng。|Nhờ báo chí, mạng giới thiệu, nhiều người ở thành phố bắt đầu ngưỡng mộ cuộc sống tiểu nông. Họ tranh thủ kỳ nghỉ dẫn con về nông thôn, một mặt cho con chạy nhảy trên ruộng, gần gũi thiên nhiên, mặt khác bản thân thư giãn. Về quê ở một đêm trở thành hoạt động giải trí thịnh hành.
短文|隨著小農越來越受重視，到農村來觀光的人也慢慢地多起來了，連便利商店都來了。以前當地人習慣自己做飯，或是到傳統的小商店和小吃店消費，現在便利商店更方便也更吸引他們。|suí zhù xiǎo nóng yuè lái yuè shòu zhòng shì， dào nóng cūn lái guān guāng de rén yě màn màn dì duō qǐ lái le， lián biàn lì shāng diàn dōu lái le。 yǐ qián dāng dì rén xí guàn zì jǐ zuò fàn， huò shì dào chuán tǒng de xiǎo shāng diàn hé xiǎo chī diàn xiāo fèi， xiàn zài biàn lì shāng diàn gèng fāng biàn yě gèng xī yǐn tā men。|Khi tiểu nông ngày càng được coi trọng, khách du lịch đến nông thôn cũng dần đông, đến cả cửa hàng tiện lợi cũng có mặt. Trước đây người địa phương quen tự nấu ăn hoặc mua ở tiệm nhỏ truyền thống, nay cửa hàng tiện lợi tiện hơn và hấp dẫn họ hơn.
短文|傳統的小店生意受到了影響，原來安靜的農村有了很大的變化。現在農人擔心的是傳統的生活方式會不會消失。|chuán tǒng de xiǎo diàn shēng yì shòu dào le yǐng xiǎng， yuán lái ān jìng de nóng cūn yǒu le hěn dà de biàn huà。 xiàn zài nóng rén dān xīn de shì chuán tǒng de shēng huó fāng shì huì bú huì xiāo shī。|Việc buôn bán của các tiệm nhỏ truyền thống bị ảnh hưởng, nông thôn vốn yên tĩnh đã thay đổi lớn. Giờ nông dân lo lối sống truyền thống có biến mất không.`}},{n:7,zh:"我最親的家「人」",vi:"\"Người nhà\" thân thiết nhất của tôi",v:`親|qīn|thân|Vs
爺爺|yéyé|ông nội|N
鄰居|línjū|hàng xóm|N
狗|gǒu|chó|N
叫|jiào|sủa|Vi
嗯|ń|ừ (đồng ý)|Ptc
奶奶|nǎinǎi|bà nội|N
過世|guòshì|qua đời|Vp
領養|lǐngyǎng|nhận nuôi|V
隻|zhī|con (lượng từ cho động vật)|M
可愛|kěài|đáng yêu|Vs
孤單|gūdān|cô đơn|Vs
牠|tā|nó (chỉ con vật)|N
髒|zāng|bẩn|Vs
洗澡|xǐzǎo|tắm|V-sep
養|yǎng|nuôi|V
亂|luàn|lung tung, bừa bãi|Adv
咬|yǎo|cắn|V
打|dǎ|đánh|V
分手|fēnshǒu|chia tay|Vp
緊張|jǐnzhāng|căng thẳng|Vs
減輕|jiǎnqīng|làm giảm nhẹ|V
送|sòng|đưa đi|V
美容院|měiróngyuàn|tiệm làm đẹp|N
推車|tuīchē|xe đẩy|N
主人|zhǔrén|chủ nhân|N
相處|xiāngchù|chung sống|V
生|shēng|sinh|V
寵物|chǒngwù|thú cưng|N
單身|dānshēn|độc thân|Vs
醫院|yīyuàn|bệnh viện|N
意見|yìjiàn|ý kiến|N
建立|jiànlì|thiết lập, xây dựng|V
散步|sànbù|đi dạo|V-sep
家庭|jiātíng|gia đình|N
真正|zhēnzhèng|thực sự|Vs-attr
幸福|xìngfú|hạnh phúc|N
跌倒|diēdǎo|ngã|Phrase
當成|dāngchéng|coi như|Phrase
忍不住|rěnbúzhù|không nhịn được|Phrase
多元|duōyuán|đa dạng|Vs-attr
阿姨|āyí|dì|N
先生|xiānshēng|chồng|N
下班|xiàbān|tan làm|V-sep
改|gǎi|chấm, sửa (bài)|V
公公|gōnggōng|bố chồng|N
全|quán|hoàn toàn|Adv
靠|kào|dựa vào|V
單親|dānqīn|đơn thân (cha hoặc mẹ)|Vs-attr
貴族|guìzú|quý tộc|N
時代|shídài|thời đại, thời kỳ|N
強|qiáng|mạnh, giỏi|Vs
追|zhuī|theo đuổi (người yêu)|V
自由|zìyóu|tự do|Vs
獨立|dúlì|độc lập|Vs
安排|ānpái|sắp xếp|V
享受|xiǎngshòu|hưởng thụ|V
身邊|shēnbiān|bên cạnh|N
伴|bàn|bạn đồng hành|N
同居|tóngjū|sống chung (như vợ chồng)|Vi
成家|chéngjiā|lập gia đình|Vp
負擔|fùdān|gánh vác|V
養家|yǎngjiā|nuôi gia đình|V-sep
責任|zérèn|trách nhiệm|N
亂|luàn|hỗn loạn|Vs
教養|jiàoyǎng|dạy dỗ|V
接受|jiēshòu|chấp nhận|V
組成|zǔchéng|hình thành, cấu thành|V
道德|dàodé|đạo đức|Vs
因此|yīncǐ|vì vậy|Conj
完整|wánzhěng|đầy đủ, trọn vẹn|Vs
美真|měizhēn|Mỹ Chân (tên nữ)|Name
家華|jiāhuá|Gia Hoa (tên nam)|Name
風雲人物|fēngyúnrénwù|nhân vật nổi bật|Phrase
下決心|xiàjuéxīn|hạ quyết tâm|Phrase`,d:{l:`羅珊蒂|何雅婷，昨天我們去打籃球，妳怎麼沒去？|hé yǎ tíng， zuó tiān wǒ men qù dǎ lán qiú， nǐ zěn me méi qù？|Hà Nhã Đình, hôm qua bọn mình đi chơi bóng rổ, sao bạn không đi?
何雅婷|我媽說我爺爺跌倒，叫我去看他。|wǒ mā shuō wǒ yé yé diē dǎo， jiào wǒ qù kàn tā。|Mẹ tôi bảo ông nội tôi bị ngã, kêu tôi đến thăm ông.
羅珊蒂|妳爺爺還好吧？|nǐ yé yé hái hǎo ba？|Ông bạn không sao chứ?
何雅婷|還好。幸虧鄰居聽見狗一直叫，很快地過來幫忙，所以沒什麼關係。|hái hǎo。 xìng kuī lín jū tīng jiàn gǒu yì zhí jiào， hěn kuài dì guò lái bāng máng， suǒ yǐ méi shén me guān xì。|Cũng ổn. May mà hàng xóm nghe chó cứ sủa, nhanh chóng sang giúp nên không sao.
羅珊蒂|妳爺爺一個人住啊？|nǐ yé yé yí gè rén zhù a？|Ông bạn ở một mình sao?
何雅婷|嗯，奶奶過世以後，爺爺就一個人住。我爸擔心爺爺，所以領養了一隻狗陪他。|ń， nǎi nǎi guò shì yǐ hòu， yé yé jiù yí gè rén zhù。 wǒ bà dān xīn yé yé， suǒ yǐ lǐng yǎng le yì zhī gǒu péi tā。|Ừ, từ khi bà nội mất ông ở một mình. Bố tôi lo cho ông nên nhận nuôi một con chó ở với ông.
羅珊蒂|幸虧有這隻可愛的狗，要不然就太孤單了。|xìng kuī yǒu zhè zhī kě ài de gǒu， yào bù rán jiù tài gū dān le。|May mà có chú chó dễ thương này, không thì cô đơn lắm.
何雅婷|我爺爺很愛牠，把牠當成家人一樣，晚上還讓牠睡在自己的床上。|wǒ yé yé hěn ài tā， bǎ tā dāng chéng jiā rén yí yàng， wǎn shàng hái ràng tā shuì zài zì jǐ de chuáng shàng。|Ông tôi rất yêu nó, coi như người nhà, tối còn cho nó ngủ trên giường mình.
李文彥|什麼？睡在他床上？狗不髒嗎？不怕牠把床弄髒嗎？|shén me？ shuì zài tā chuáng shàng？ gǒu bù zāng ma？ bú pà tā bǎ chuáng nòng zāng ma？|Gì cơ? Ngủ trên giường ông? Chó không bẩn sao? Không sợ nó làm bẩn giường à?
何雅婷|我爺爺常給狗洗澡，牠乾淨得很。|wǒ yé yé cháng gěi gǒu xǐ zǎo， tā qián jìng dé hěn。|Ông tôi hay tắm cho chó, nó sạch lắm.
李文彥|以前我女朋友養了一隻狗，整天亂叫、亂咬東西。有一天，我忍不住打了牠，我女朋友氣得要跟我分手。|yǐ qián wǒ nǚ péng yǒu yǎng le yì zhī gǒu， zhěng tiān luàn jiào、 luàn yǎo dōng xī。 yǒu yì tiān， wǒ rěn bú zhù dǎ le tā， wǒ nǚ péng yǒu qì dé yào gēn wǒ fēn shǒu。|Trước đây bạn gái tôi nuôi một con chó, cả ngày sủa bậy, cắn đồ lung tung. Có hôm tôi không nhịn được đánh nó, bạn gái tức đến đòi chia tay.
羅珊蒂|你怎麼可以打狗？狗是人最好的朋友。很多研究報告都說，人緊張的時候，摸摸狗會減輕壓力。|nǐ zěn me kě yǐ dǎ gǒu？ gǒu shì rén zuì hǎo de péng yǒu。 hěn duō yán jiū bào gào dōu shuō， rén jǐn zhāng de shí hòu， mō mō gǒu huì jiǎn qīng yā lì。|Sao bạn có thể đánh chó? Chó là người bạn tốt nhất của con người. Nhiều báo cáo nghiên cứu nói khi người căng thẳng, vuốt ve chó sẽ giảm áp lực.
李文彥|不過台灣人對狗太好了。不但送狗去美容院，還帶狗去餐廳慶祝生日。現在狗連路都不必走了，坐在推車裡讓主人推著逛街。|bú guò tái wān rén duì gǒu tài hǎo le。 bú dàn sòng gǒu qù měi róng yuàn， hái dài gǒu qù cān tīng qìng zhù shēng rì。 xiàn zài gǒu lián lù dōu bú bì zǒu le， zuò zài tuī chē lǐ ràng zhǔ rén tuī zhù guàng jiē。|Nhưng người Đài Loan đối xử với chó quá tốt. Không những đưa chó đến tiệm làm đẹp, còn dẫn chó đi nhà hàng mừng sinh nhật. Giờ chó không cần đi bộ, ngồi xe đẩy cho chủ đẩy đi dạo phố.
羅珊蒂|對狗好有什麼不對？現代社會大家各忙各的，常常回到家就只有一個人。人跟狗相處的時間有時候比家人還長呢。|duì gǒu hǎo yǒu shén me bú duì？ xiàn dài shè huì dà jiā gè máng gè de， cháng cháng huí dào jiā jiù zhǐ yǒu yí gè rén。 rén gēn gǒu xiāng chù de shí jiān yǒu shí hòu bǐ jiā rén hái zhǎng ne。|Tốt với chó thì có gì sai? Xã hội hiện đại ai cũng bận việc mình, về nhà thường chỉ có một người. Thời gian người ở với chó có khi còn dài hơn với người nhà.
何雅婷|是啊，現在有些人覺得生活壓力太大，養不起孩子，就算結了婚也不生孩子，寧可養寵物。還有很多單身的人，他們一個人住，寵物對他們來說，比家人還親。|shì a， xiàn zài yǒu xiē rén jué dé shēng huó yā lì tài dà， yǎng bù qǐ hái zi， jiù suàn jié le hūn yě bù shēng hái zi， níng kě yǎng chǒng wù。 hái yǒu hěn duō dān shēn de rén， tā men yí gè rén zhù， chǒng wù duì tā men lái shuō， bǐ jiā rén hái qīn。|Đúng vậy, nay có người thấy áp lực sống quá lớn, nuôi không nổi con, dù kết hôn cũng không sinh con, thà nuôi thú cưng. Còn nhiều người độc thân sống một mình, với họ thú cưng còn thân hơn người nhà.
李文彥|不管怎麼說，狗不是人。你生病的時候，牠不能照顧你，給你買晚飯，陪你去醫院。而且，你有問題的時候，也不能問牠的意見。人還是應該建立跟人的關係。|bù guǎn zěn me shuō， gǒu bú shì rén。 nǐ shēng bìng de shí hòu， tā bù néng zhào gù nǐ， gěi nǐ mǎi wǎn fàn， péi nǐ qù yī yuàn。 ér qiě， nǐ yǒu wèn tí de shí hòu， yě bù néng wèn tā de yì jiàn。 rén hái shì yīng gāi jiàn lì gēn rén de guān xì。|Dù nói thế nào, chó không phải người. Khi bạn bệnh nó không chăm sóc bạn, mua cơm tối, đi bệnh viện cùng bạn. Hơn nữa khi bạn có vấn đề cũng không thể hỏi ý kiến nó. Con người vẫn nên xây dựng quan hệ với con người.
羅珊蒂|可是狗可以幫你建立跟別人的關係。|kě shì gǒu kě yǐ bāng nǐ jiàn lì gēn bié rén de guān xì。|Nhưng chó có thể giúp bạn xây dựng quan hệ với người khác.
何雅婷|是啊，我爺爺養狗以後，快樂多了。每天帶著狗去散步，認識了很多朋友。他們有說不完的話，回家以後還上網繼續聊。|shì a， wǒ yé yé yǎng gǒu yǐ hòu， kuài lè duō le。 měi tiān dài zhù gǒu qù sàn bù， rèn shí le hěn duō péng yǒu。 tā men yǒu shuō bù wán de huà， huí jiā yǐ hòu hái shàng wǎng jì xù liáo。|Đúng vậy, từ khi nuôi chó ông tôi vui hơn nhiều. Mỗi ngày dắt chó đi dạo, quen nhiều bạn. Họ có nói không hết chuyện, về nhà còn lên mạng trò chuyện tiếp.
李文彥|妳們說的也對。可是我還是覺得一個人應該有家庭，更應該有孩子，一家人熱熱鬧鬧地一起生活才是真正的幸福。|nǐ men shuō de yě duì。 kě shì wǒ hái shì jué dé yí gè rén yīng gāi yǒu jiā tíng， gèng yīng gāi yǒu hái zi， yì jiā rén rè rè nào nào dì yì qǐ shēng huó cái shì zhēn zhèng de xìng fú。|Các bạn nói cũng đúng. Nhưng tôi vẫn thấy một người nên có gia đình, càng nên có con, cả nhà náo nhiệt sống cùng nhau mới là hạnh phúc thực sự.
短文|李文彥的阿姨一個人帶著孩子住在台北。她的先生因為工作的關係，大部分的時間都在國外。阿姨白天在學校教書，下了班，接了孩子回家，就忙著做飯、陪孩子做功課。|lǐ wén yàn de ā yí yí gè rén dài zhù hái zi zhù zài tái běi。 tā de xiān shēng yīn wèi gōng zuò de guān xì， dà bù fèn de shí jiān dōu zài guó wài。 ā yí bái tiān zài xué xiào jiào shū， xià le bān， jiē le hái zi huí jiā， jiù máng zhù zuò fàn、 péi hái zi zuò gōng kè。|Dì của Lý Văn Ngạn một mình dẫn con sống ở Đài Bắc. Chồng dì vì công việc phần lớn thời gian ở nước ngoài. Ban ngày dì dạy ở trường, tan làm đón con về là bận nấu cơm, kèm con làm bài.
短文|好不容易等孩子睡了，才能開始改學生的作業，準備第二天上課的資料。週末的時候，還要上市場幫公公買一個星期的菜。家裡大大小小的事全靠她一個人。她常說，她雖然不是單親媽媽，可是生活比單親媽媽更辛苦。|hǎo bù róng yì děng hái zi shuì le， cái néng kāi shǐ gǎi xué shēng de zuò yè， zhǔn bèi dì èr tiān shàng kè de zī liào。 zhōu mò de shí hòu， hái yào shàng shì chǎng bāng gōng gōng mǎi yí gè xīng qī de cài。 jiā lǐ dà dà xiǎo xiǎo de shì quán kào tā yí gè rén。 tā cháng shuō， tā suī rán bú shì dān qīn mā mā， kě shì shēng huó bǐ dān qīn mā mā gèng xīn kǔ。|Khó khăn lắm đợi con ngủ mới bắt đầu chấm bài, chuẩn bị tài liệu hôm sau. Cuối tuần còn đi chợ mua thức ăn cả tuần cho bố chồng. Việc lớn nhỏ trong nhà đều dựa vào một mình dì. Dì thường nói tuy không phải mẹ đơn thân nhưng cuộc sống còn vất vả hơn mẹ đơn thân.
短文|阿姨很羨慕她的同學美真。美真是一個單身貴族。大學時代，在學校就是一個風雲人物，不但人長得美，而且能力強，追她的人多得不得了。|ā yí hěn xiàn mù tā de tóng xué měi zhēn。 měi zhēn shì yí gè dān shēn guì zú。 dà xué shí dài， zài xué xiào jiù shì yí gè fēng yún rén wù， bú dàn rén zhǎng dé měi， ér qiě néng lì qiáng， zhuī tā de rén duō dé bù dé le。|Dì rất ngưỡng mộ bạn học Mỹ Chân. Mỹ Chân là một "quý tộc độc thân". Thời đại học cô là nhân vật nổi bật ở trường, không chỉ xinh mà năng lực mạnh, người theo đuổi đông không kể xiết.
短文|可是她一直不想結婚，一來怕結了婚不自由，不能發展自己的興趣，二來，她的經濟獨立，可以把自己的生活安排得很好。雖然大部分的時候她都很享受單身生活，但是一個人旅行的時候，她也常想，要是身邊有個伴也不錯。|kě shì tā yì zhí bù xiǎng jié hūn， yì lái pà jié le hūn bú zì yóu， bù néng fā zhǎn zì jǐ de xìng qù， èr lái， tā de jīng jì dú lì， kě yǐ bǎ zì jǐ de shēng huó ān pái dé hěn hǎo。 suī rán dà bù fèn de shí hòu tā dōu hěn xiǎng shòu dān shēn shēng huó， dàn shì yí gè rén lǚ xíng de shí hòu， tā yě cháng xiǎng， yào shì shēn biān yǒu gè bàn yě bú cuò。|Nhưng cô luôn không muốn kết hôn: một là sợ kết hôn mất tự do, không phát triển được sở thích; hai là cô độc lập kinh tế, tự sắp xếp cuộc sống rất tốt. Tuy phần lớn thời gian cô tận hưởng cuộc sống độc thân, nhưng khi đi du lịch một mình cô cũng hay nghĩ nếu có người bên cạnh cũng không tệ.
短文|美真的朋友家華，也不願意結婚。他雖然跟女朋友已經同居好幾年了，但是一想到成家以後，得負擔起養家的責任，他就下不了決心。|měi zhēn de péng yǒu jiā huá， yě bú yuàn yì jié hūn。 tā suī rán gēn nǚ péng yǒu yǐ jīng tóng jū hǎo jǐ nián le， dàn shì yì xiǎng dào chéng jiā yǐ hòu， dé fù dān qǐ yǎng jiā de zé rèn， tā jiù xià bù liǎo jué xīn。|Bạn của Mỹ Chân là Gia Hoa cũng không muốn kết hôn. Tuy đã sống chung với bạn gái nhiều năm nhưng nghĩ đến việc lập gia đình, phải gánh trách nhiệm nuôi gia đình là anh không hạ nổi quyết tâm.
短文|而且，要是結了婚，就會有生孩子的壓力。現在社會這麼亂，怎麼教養孩子？他想來想去，覺得還是現在的生活比較好。雖然女朋友跟他說過幾次，年紀不小，應該結婚了，他還是沒答應。|ér qiě， yào shì jié le hūn， jiù huì yǒu shēng hái zi de yā lì。 xiàn zài shè huì zhè me luàn， zěn me jiào yǎng hái zi？ tā xiǎng lái xiǎng qù， jué dé hái shì xiàn zài de shēng huó bǐ jiào hǎo。 suī rán nǚ péng yǒu gēn tā shuō guò jǐ cì， nián jì bù xiǎo， yīng gāi jié hūn le， tā hái shì méi dá yīng。|Hơn nữa nếu kết hôn sẽ có áp lực sinh con. Xã hội bây giờ hỗn loạn, dạy con thế nào? Nghĩ đi nghĩ lại anh thấy cuộc sống hiện tại vẫn tốt hơn. Dù bạn gái nhiều lần nói tuổi không nhỏ nên kết hôn, anh vẫn chưa đồng ý.
短文|現在社會慢慢地接受了各種家庭的組成方式。同居不再被認為是不道德的事了，一個人也能是一個「單身家庭」。因此，只要有愛，愛自己、愛家人，就是一個完整的家。|xiàn zài shè huì màn màn dì jiē shòu le gè zhǒng jiā tíng de zǔ chéng fāng shì。 tóng jū bú zài bèi rèn wèi shì bú dào dé de shì le， yí gè rén yě néng shì yí gè 「dān shēn jiā tíng」。 yīn cǐ， zhǐ yào yǒu ài， ài zì jǐ、 ài jiā rén， jiù shì yí gè wán zhěng de jiā。|Xã hội nay dần chấp nhận nhiều hình thức tạo nên gia đình. Sống chung không còn bị coi là thiếu đạo đức, một người cũng là một "gia đình độc thân". Vì vậy chỉ cần có tình yêu, yêu bản thân, yêu người nhà thì đó là một mái ấm trọn vẹn.`}},{n:8,zh:"我想做自己",vi:"Tôi muốn là chính mình",v:`整夜|zhěngyè|suốt đêm|N
開|kāi|bật (đèn, máy)|V
燈|dēng|đèn|N
電玩|diànwán|trò chơi điện tử|N
球賽|qiúsài|trận bóng|N
激動|jīdòng|kích động, phấn khích|Vs
喊|hǎn|la hét|Vi
公職|gōngzhí|công chức, việc nhà nước|N
其實|qíshí|thật ra|Adv
公務員|gōngwùyuán|công chức|N
煩|fán|phiền, bực|Vs
聽話|tīnghuà|nghe lời|Vs-sep
失業率|shīyèlǜ|tỷ lệ thất nghiệp|N
門|mén|môn (lượng từ cho môn học)|M
讀書|dúshū|đọc sách, học|V-sep
學分|xuéfēn|tín chỉ|N
修|xiū|học (môn), tu sửa|V
專心|zhuānxīn|chuyên tâm|Vs
修課|xiūkè|học môn|V-sep
輔系|fǔxì|ngành phụ|N
瘋|fēng|điên|Vp
誇張|kuāzhāng|phóng đại|Vs
舉行|jǔxíng|tổ chức|V
遺憾|yíhàn|đáng tiếc|Vs
兒子|érzi|con trai|N
期望|qīwàng|kỳ vọng|N
狀元|zhuàngyuán|trạng nguyên|N
努力|nǔlì|nỗ lực|Vs
怎麼回事|zěnmehuíshì|chuyện gì vậy|Phrase
大喊大叫|dàhǎndàjiào|la hét ầm ĩ|Phrase
期中考|qīzhōngkǎo|thi giữa kỳ|Phrase
密集班|mìjíbān|lớp cấp tốc|Phrase
畢業展|bìyèzhǎn|triển lãm tốt nghiệp|Phrase
服裝設計|fúzhuāngshèjì|thiết kế thời trang|Phrase
醫學系|yīxuéxì|khoa y|Phrase
行行出狀元|xíngxíngchūzhuàngyuán|nghề nào cũng có trạng nguyên|Phrase
冠軍|guānjūn|quán quân|N
大賽|dàsài|cuộc thi lớn|N
通過|tōngguò|vượt qua, thông qua|Vpt
高級|gāojí|cao cấp|Vs-attr
碩士|shuòshì|thạc sĩ|N
面試|miànshì|phỏng vấn|N
卻|què|nhưng lại|Adv
國中|guózhōng|trung học cơ sở|N
學歷|xuélì|trình độ học vấn|N
拒絕|jùjué|từ chối|V
引起|yǐnqǐ|gây ra|Vpt
彈性|dànxìng|tính linh hoạt|N
改變|gǎibiàn|thay đổi|V
制度|zhìdù|chế độ, quy định|N
基礎|jīchǔ|nền tảng|N
認真|rènzhēn|nghiêm túc|Vs
公平|gōngpíng|công bằng|Vs
出生|chūshēng|sinh ra|Vp
窮|qióng|nghèo|Vs
父親|fùqīn|cha|N
母親|mǔqīn|mẹ|N
學徒|xuétú|học việc|N
吃苦|chīkǔ|chịu khổ|Vs-sep
明白|míngbái|hiểu rõ|Vst
當兵|dāngbīng|đi nghĩa vụ quân sự|V-sep
認字|rènzì|nhận mặt chữ|Vi
烘焙|hōngbèi|nướng bánh|V
學習|xuéxí|học tập|V
技術|jìshù|kỹ thuật|N
藝術|yìshù|nghệ thuật|N
經過|jīngguò|sau khi, trải qua|Prep
終於|zhōngyú|cuối cùng|Adv
億|yì|trăm triệu|N
夢想|mèngxiǎng|ước mơ|N
成為|chéngwèi|trở thành|Vpt
企業家|qǐyèjiā|doanh nhân|N
分店|fēndiàn|chi nhánh|N
原因|yuányīn|nguyên nhân|N
錄取|lùqǔ|tuyển, nhận (hồ sơ)|V
成功|chénggōng|thành công|Vs
鼓勵|gǔlì|khích lệ|V
吳寶春|wúbǎochūn|Ngô Bảo Xuân (thợ làm bánh nổi tiếng Đài Loan)|Name
新加坡|xīnjiāpō|Singapore|Name
日文|rìwén|tiếng Nhật|Name
世界麵包大賽|shìjièmiànbāodàsài|Giải bánh mì thế giới|Phrase
EMBA|EMBA|EMBA (thạc sĩ quản trị kinh doanh điều hành)|Phrase
小時候|xiǎoshíhòu|hồi nhỏ|Phrase`,d:{l:`陳敏萱|早，李文彥。欸？你怎麼看起來不太有精神？怎麼回事？|zǎo， lǐ wén yàn。 āi？ nǐ zěn me kàn qǐ lái bú tài yǒu jīng shén？ zěn me huí shì？|Chào, Lý Văn Ngạn. Ơ? Sao trông bạn không có tinh thần thế? Chuyện gì vậy?
李文彥|別說了。我那個室友，最近不是整夜開著燈打電玩，就是熬夜看球賽，激動的時候，還大喊大叫，害我睡不著覺。|bié shuō le。 wǒ nà gè shì yǒu， zuì jìn bú shì zhěng yè kāi zhù dēng dǎ diàn wán， jiù shì áo yè kàn qiú sài， jī dòng de shí hòu， hái dà hǎn dà jiào， hài wǒ shuì bú zhù jué。|Đừng nhắc nữa. Bạn cùng phòng tôi dạo này không bật đèn chơi game thâu đêm thì thức khuya xem bóng, lúc phấn khích còn la hét, làm tôi không ngủ được.
陳敏萱|他不是在準備公職人員考試嗎？怎麼有時間打電玩？|tā bú shì zài zhǔn bèi gōng zhí rén yuán kǎo shì ma？ zěn me yǒu shí jiān dǎ diàn wán？|Chẳng phải cậu ấy đang ôn thi công chức sao? Sao có thời gian chơi game?
李文彥|其實他對當公務員一點興趣都沒有，是他媽媽叫他去考的。他覺得很煩，所以最近常打電玩。|qí shí tā duì dāng gōng wù yuán yì diǎn xìng qù dōu méi yǒu， shì tā mā mā jiào tā qù kǎo de。 tā jué dé hěn fán， suǒ yǐ zuì jìn cháng dǎ diàn wán。|Thật ra cậu ấy chẳng hứng thú gì với làm công chức, là mẹ bảo đi thi. Cậu thấy phiền nên dạo này hay chơi game.
陳敏萱|既然沒興趣就別去考啊。為什麼要那麼聽話？|jì rán méi xìng qù jiù bié qù kǎo a。 wèi shén me yào nà me tīng huà？|Đã không hứng thú thì đừng thi. Sao phải nghe lời thế?
李文彥|因為他媽媽說，現在大學生的失業率很高。考上公職的話，薪水不錯，工作又穩定。這樣父母才放心。算了，算了，不說這個。妳最近怎麼樣？|yīn wèi tā mā mā shuō， xiàn zài dà xué shēng de shī yè lǜ hěn gāo。 kǎo shàng gōng zhí de huà， xīn shuǐ bú cuò， gōng zuò yòu wěn dìng。 zhè yàng fù mǔ cái fàng xīn。 suàn le， suàn le， bù shuō zhè gè。 nǐ zuì jìn zěn me yàng？|Vì mẹ cậu nói tỷ lệ thất nghiệp của sinh viên hiện nay cao. Thi đỗ công chức thì lương khá, việc lại ổn định, cha mẹ mới yên tâm. Thôi thôi, không nói chuyện này. Dạo này bạn sao rồi?
陳敏萱|快要期中考了，我壓力好大啊！這學期我在大學選了好幾門課，還在語言中心上密集班，每天忙得連睡覺的時間都不夠。|kuài yào qī zhōng kǎo le， wǒ yā lì hǎo dà a！ zhè xué qī wǒ zài dà xué xuǎn le hǎo jǐ mén kè， hái zài yǔ yán zhōng xīn shàng mì jí bān， měi tiān máng dé lián shuì jué de shí jiān dōu bú gòu。|Sắp thi giữa kỳ rồi, áp lực lớn quá! Học kỳ này tôi học mấy môn ở đại học, còn học lớp cấp tốc ở trung tâm ngôn ngữ, mỗi ngày bận đến không đủ thời gian ngủ.
李文彥|這樣一來，妳不是就沒時間參加學校的社團活動了嗎？|zhè yàng yì lái， nǐ bú shì jiù méi shí jiān cān jiā xué xiào de shè tuán huó dòng le ma？|Thế thì bạn chẳng phải không có thời gian tham gia câu lạc bộ trường sao?
陳敏萱|那有什麼關係。我來台灣是來讀書的，不是來玩的。我希望早一點把中文系的學分修完，回國以後專心修輔系的課，這樣明年才能畢業。|nà yǒu shén me guān xì。 wǒ lái tái wān shì lái dú shū de， bú shì lái wán de。 wǒ xī wàng zǎo yì diǎn bǎ zhōng wén xì de xué fēn xiū wán， huí guó yǐ hòu zhuān xīn xiū fǔ xì de kè， zhè yàng míng nián cái néng bì yè。|Có sao đâu. Tôi đến Đài Loan để học, không phải để chơi. Tôi muốn sớm học xong tín chỉ khoa tiếng Trung, về nước chuyên tâm học ngành phụ, như vậy sang năm mới tốt nghiệp được.
李文彥|妳還修輔系啊？為什麼要把自己弄得這麼累？如果我是妳，恐怕早就瘋了。|nǐ hái xiū fǔ xì a？ wèi shén me yào bǎ zì jǐ nòng dé zhè me lèi？ rú guǒ wǒ shì nǐ， kǒng pà zǎo jiù fēng le。|Bạn còn học ngành phụ nữa à? Sao tự làm mình mệt thế? Nếu là tôi chắc điên từ lâu.
陳敏萱|你太誇張了。沒那麼嚴重吧。|nǐ tài kuā zhāng le。 méi nà me yán zhòng ba。|Bạn nói quá rồi. Đâu đến nỗi.
李文彥|妳應該趁著在台灣的時候，到處走走，多了解這裡的文化。|nǐ yīng gāi chèn zhù zài tái wān de shí hòu， dào chù zǒu zǒu， duō liǎo jiě zhè lǐ de wén huà。|Bạn nên tranh thủ lúc ở Đài Loan đi đây đó, hiểu thêm văn hóa nơi này.
陳敏萱|旅行的機會以後還很多。為了將來的發展，現在我應該好好利用時間，充實自己。|lǚ xíng de jī huì yǐ hòu hái hěn duō。 wèi le jiāng lái de fā zhǎn， xiàn zài wǒ yīng gāi hǎo hǎo lì yòng shí jiān， chōng shí zì jǐ。|Sau này còn nhiều cơ hội đi du lịch. Vì tương lai, giờ tôi nên tận dụng thời gian, bồi dưỡng bản thân.
何雅婷|你們都在這裡啊？在聊什麼？|nǐ men dōu zài zhè lǐ a？ zài liáo shén me？|Các bạn đều ở đây à? Đang nói chuyện gì thế?
李文彥|我們在聊畢業以後的計畫。對了，妳男朋友的畢業展什麼時候舉行？|wǒ men zài liáo bì yè yǐ hòu de jì huà。 duì le， nǐ nán péng yǒu de bì yè zhǎn shén me shí hòu jǔ xíng？|Bọn mình nói về kế hoạch sau tốt nghiệp. À, triển lãm tốt nghiệp của bạn trai bạn bao giờ tổ chức?
何雅婷|下個月五號。到時候歡迎大家來看。|xià gè yuè wǔ hào。 dào shí hòu huān yíng dà jiā lái kàn。|Mùng năm tháng sau. Đến lúc đó mời mọi người đến xem.
陳敏萱|他爸媽會去嗎？我聽妳說過，他爸媽很反對他念服裝設計。現在還是這樣嗎？|tā bà mā huì qù ma？ wǒ tīng nǐ shuō guò， tā bà mā hěn fǎn duì tā niàn fú zhuāng shè jì。 xiàn zài hái shì zhè yàng ma？|Bố mẹ anh ấy có đến không? Tôi nghe bạn kể, bố mẹ anh rất phản đối anh học thiết kế thời trang. Giờ vẫn vậy sao?
何雅婷|他父母到現在還覺得很遺憾，兒子沒去念醫學系。他從小功課就很好，父母對他的期望一直很高，念服裝設計讓他們很失望。|tā fù mǔ dào xiàn zài hái jué dé hěn yí hàn， ér zi méi qù niàn yī xué xì。 tā cóng xiǎo gōng kè jiù hěn hǎo， fù mǔ duì tā de qī wàng yì zhí hěn gāo， niàn fú zhuāng shè jì ràng tā men hěn shī wàng。|Cha mẹ anh đến nay vẫn thấy tiếc, con trai không học khoa y. Anh học giỏi từ nhỏ, cha mẹ luôn kỳ vọng cao, học thiết kế thời trang làm họ rất thất vọng.
李文彥|為什麼要失望？行行出狀元。不管做什麼，只要有興趣，願意努力就好了。|wèi shén me yào shī wàng？ xíng xíng chū zhuàng yuán。 bù guǎn zuò shén me， zhǐ yào yǒu xìng qù， yuàn yì nǔ lì jiù hǎo le。|Sao phải thất vọng? Nghề nào cũng có trạng nguyên. Dù làm gì, chỉ cần có hứng thú, chịu nỗ lực là được.
短文|2013年三月，世界麵包大賽冠軍吳寶春通過新加坡大學EMBA（高級管理人員工商管理碩士）研究所的面試，準備從七月起，開始他的學生生活。吳寶春也申請過台灣的EMBA，卻因為只有國中畢業，學歷太低而被拒絕。|2013 nián sān yuè， shì jiè miàn bāo dà sài guān jūn wú bǎo chūn tōng guò xīn jiā pō dà xué EMBA（gāo jí guǎn lǐ rén yuán gōng shāng guǎn lǐ shuò shì） yán jiū suǒ de miàn shì， zhǔn bèi cóng qī yuè qǐ， kāi shǐ tā de xué shēng shēng huó。 wú bǎo chūn yě shēn qǐng guò tái wān de EMBA， què yīn wèi zhǐ yǒu guó zhōng bì yè， xué lì tài dī ér bèi jù jué。|Tháng ba năm 2013, quán quân Giải bánh mì thế giới Ngô Bảo Xuân đã qua vòng phỏng vấn chương trình EMBA của Đại học Singapore, chuẩn bị từ tháng bảy bắt đầu cuộc sống sinh viên. Ông cũng từng nộp đơn EMBA ở Đài Loan nhưng vì chỉ tốt nghiệp trung học cơ sở, học vấn quá thấp nên bị từ chối.
短文|「吳寶春要念研究所」在台灣引起了很多人的討論。有人認為學校太沒有彈性。時代已經改變了，制度也應該隨著改變。但是也有人認為他的基礎不夠，如果讓他念研究所，對認真念書的人不公平。|「wú bǎo chūn yào niàn yán jiū suǒ」 zài tái wān yǐn qǐ le hěn duō rén de tǎo lùn。 yǒu rén rèn wèi xué xiào tài méi yǒu dàn xìng。 shí dài yǐ jīng gǎi biàn le， zhì dù yě yīng gāi suí zhù gǎi biàn。 dàn shì yě yǒu rén rèn wèi tā de jī chǔ bú gòu， rú guǒ ràng tā niàn yán jiū suǒ， duì rèn zhēn niàn shū de rén bù gōng píng。|"Ngô Bảo Xuân sẽ học cao học" gây nhiều bàn luận ở Đài Loan. Có người cho rằng nhà trường thiếu linh hoạt, thời đại đã đổi, chế độ cũng nên thay đổi theo. Nhưng cũng có người cho rằng nền tảng của ông chưa đủ, nếu cho học cao học thì không công bằng với người học nghiêm túc.
短文|吳寶春出生在台灣南部鄉下，他是家裡最小的孩子。他家很窮。父親很早就過世了。母親為了養八個孩子，每天辛苦地工作。吳寶春小時候不了解讀書的重要，不喜歡念書。按照他自己的說法，國中畢業的時候，他認識的字還不到五百個。|wú bǎo chūn chū shēng zài tái wān nán bù xiāng xià， tā shì jiā lǐ zuì xiǎo de hái zi。 tā jiā hěn qióng。 fù qīn hěn zǎo jiù guò shì le。 mǔ qīn wèi le yǎng bā gè hái zi， měi tiān xīn kǔ dì gōng zuò。 wú bǎo chūn xiǎo shí hòu bù liǎo jiě dú shū de zhòng yào， bù xǐ huān niàn shū。 àn zhào tā zì jǐ de shuō fǎ， guó zhōng bì yè de shí hòu， tā rèn shí de zì hái bú dào wǔ bǎi gè。|Ngô Bảo Xuân sinh ra ở vùng quê miền nam Đài Loan, là con út trong nhà. Nhà ông rất nghèo, cha mất sớm. Mẹ để nuôi tám đứa con, ngày nào cũng làm việc vất vả. Hồi nhỏ ông không hiểu tầm quan trọng của học, không thích học. Theo lời ông, lúc tốt nghiệp cấp hai ông biết chưa đến năm trăm chữ.
短文|17歲那一年，他離開家鄉，一個人到台北一家麵包店當學徒。工作的時候因為書念得不多，吃了很多苦。這時候他才明白讀書的重要。當兵的時候，他利用時間看電視認字。|17 suì nà yì nián， tā lí kāi jiā xiāng， yí gè rén dào tái běi yì jiā miàn bāo diàn dāng xué tú。 gōng zuò de shí hòu yīn wèi shū niàn dé bù duō， chī le hěn duō kǔ。 zhè shí hòu tā cái míng bái dú shū de zhòng yào。 dāng bīng de shí hòu， tā lì yòng shí jiān kàn diàn shì rèn zì。|Năm 17 tuổi, ông rời quê, một mình lên Đài Bắc làm học việc ở một tiệm bánh mì. Vì học ít nên khi làm việc ông chịu nhiều khổ cực, lúc ấy mới hiểu tầm quan trọng của việc học. Thời đi lính, ông tận dụng thời gian xem tivi để nhận mặt chữ.
短文|後來他因為想看懂日文烘焙書，去學日文。幾年以後，更因為工作的關係到日本學習，讓他大開眼界，了解到烘焙麵包不但是專業技術，也是一門藝術。|hòu lái tā yīn wèi xiǎng kàn dǒng rì wén hōng bèi shū， qù xué rì wén。 jǐ nián yǐ hòu， gèng yīn wèi gōng zuò de guān xì dào rì běn xué xí， ràng tā dà kāi yǎn jiè， liǎo jiě dào hōng bèi miàn bāo bú dàn shì zhuān yè jì shù， yě shì yì mén yì shù。|Sau đó ông vì muốn đọc hiểu sách làm bánh tiếng Nhật nên đi học tiếng Nhật. Vài năm sau, vì công việc ông sang Nhật học tập, mở mang tầm mắt và hiểu làm bánh mì không chỉ là kỹ thuật chuyên môn mà còn là một nghệ thuật.
短文|吳寶春經過20多年的努力，終於在2010年拿到世界麵包大賽冠軍。回台灣以後，他開了自己的麵包店，一年能做兩億的生意。他的夢想是成為企業家，能在亞洲各國開分店。新加坡大學也因為這個原因錄取了他。|wú bǎo chūn jīng guò 20 duō nián de nǔ lì， zhōng yú zài 2010 nián ná dào shì jiè miàn bāo dà sài guān jūn。 huí tái wān yǐ hòu， tā kāi le zì jǐ de miàn bāo diàn， yì nián néng zuò liǎng yì de shēng yì。 tā de mèng xiǎng shì chéng wèi qǐ yè jiā， néng zài yà zhōu gè guó kāi fēn diàn。 xīn jiā pō dà xué yě yīn wèi zhè gè yuán yīn lù qǔ le tā。|Sau hơn 20 năm nỗ lực, năm 2010 Ngô Bảo Xuân cuối cùng giành quán quân Giải bánh mì thế giới. Về Đài Loan ông mở tiệm riêng, một năm kinh doanh hai trăm triệu. Ước mơ của ông là trở thành doanh nhân, mở chi nhánh ở các nước châu Á. Đại học Singapore cũng vì lý do này mà nhận ông.
短文|吳寶春成功的故事鼓勵了很多人做自己。可是，是不是每個人都能像他在碰到機會以前，做好了百分之百的準備？|wú bǎo chūn chéng gōng de gù shì gǔ lì le hěn duō rén zuò zì jǐ。 kě shì， shì bú shì měi gè rén dōu néng xiàng tā zài pèng dào jī huì yǐ qián， zuò hǎo le bǎi fēn zhī bǎi de zhǔn bèi？|Câu chuyện thành công của Ngô Bảo Xuân đã khích lệ nhiều người sống là chính mình. Nhưng liệu ai cũng như ông, đã chuẩn bị trăm phần trăm trước khi gặp cơ hội?`}},{n:9,zh:"網購時代",vi:"Thời đại mua sắm trực tuyến",v:`訂單|dìngdān|đơn đặt hàng|N
客戶|kèhù|khách hàng|N
方便|fāngbiàn|tạo thuận tiện|V
訂購|dìnggòu|đặt mua|V
成立|chénglì|thành lập|V
假日|jiàrì|ngày nghỉ|N
販賣|fànmài|bán|V
阿嬤|āmā|bà (tiếng Đài)|N
中間商|zhōngjiānshāng|thương lái, trung gian|N
經營|jīngyíng|kinh doanh|V
宅配|zháipèi|giao hàng tận nhà|Vi
下|xià|đặt (đơn)|V
不只|bùzhǐ|không chỉ|Adv
隨時|suíshí|bất cứ lúc nào|Adv
搜尋|sōuxún|tìm kiếm|V
冰箱|bīngxiāng|tủ lạnh|N
吃虧|chīkuī|chịu thiệt|Vs-sep
比價|bǐjià|so sánh giá|V-sep
風險|fēngxiǎn|rủi ro|N
賣家|màijiā|người bán|N
必須|bìxū|phải|Vaux
信用|xìnyòng|uy tín|N
萬一|wànyī|lỡ như|Conj
滿意|mǎnyì|hài lòng|Vst
以內|yǐnèi|trong vòng|N
普遍|pǔbiàn|phổ biến|Vs
選擇|xuǎnzé|chọn lựa|V
網購|wǎnggòu|mua sắm trực tuyến|Phrase
貨比三家|huòbǐsānjiā|so sánh ba tiệm mới không bị thiệt|Phrase
不吃虧|bùchīkuī|không bị thiệt|Phrase
兩成|liǎngchéng|hai phần mười (20%)|Phrase
鳳梨|fènglí|dứa, thơm|N
農產品|nóngchǎnpǐn|nông sản|N
出口|chūkǒu|xuất khẩu|V
曾經|céngjīng|đã từng|Adv
占|zhàn|chiếm|Vst
成本|chéngběn|chi phí|N
價格|jiàgé|giá cả|N
競爭|jìngzhēng|cạnh tranh|Vi
好運|hǎoyùn|vận may|N
內餡|nèixiàn|nhân bánh|N
當做|dāngzuò|coi như|V
喜餅|xǐbǐng|bánh cưới|N
喜愛|xǐài|yêu thích|Vst
茶點|chádiǎn|điểm tâm uống trà|N
商機|shāngjī|cơ hội kinh doanh|N
代表|dàibiǎo|đại diện|V
政府|zhèngfǔ|chính phủ|N
舉辦|jǔbàn|tổ chức|V
產值|chǎnzhí|giá trị sản xuất|N
提高|tígāo|nâng cao|V
知名|zhīmíng|nổi tiếng|Vs
出現|chūxiàn|xuất hiện|Vp
科技|kējì|công nghệ|N
斤|jīn|cân (台斤)|M
叔叔|shūshū|chú|N
口味|kǒuwèi|khẩu vị, hương vị|N
結果|jiéguǒ|kết quả|Adv
購買|gòumǎi|mua|V
改善|gǎishàn|cải thiện|V
並且|bìngqiě|đồng thời, và còn|Conj
行銷|xíngxiāo|tiếp thị|V
團購|tuángòu|mua theo nhóm|V
店面|diànmiàn|mặt bằng cửa hàng|N
全|quán|toàn|Det
閩南語|mǐnnányǔ|tiếng Mân Nam|Name
旺來|wànglái|Vượng Lai (đồng âm với "thơm")|Name
東京|dōngjīng|Tokyo|Name
鳳梨酥|fènglísū|bánh dứa|Phrase
第二位|dìèrwèi|vị trí thứ hai|Phrase
鳳梨農|fènglínóng|nông dân trồng dứa|Phrase`,d:{l:`表哥|你們先喝茶聊天，我上網查一下訂單，把明天要寄給客戶的東西準備好。|nǐ men xiān hē chá liáo tiān， wǒ shàng wǎng chá yí xià dìng dān， bǎ míng tiān yào jì gěi kè hù de dōng xī zhǔn bèi hǎo。|Các bạn uống trà trò chuyện trước, tôi lên mạng xem đơn hàng, chuẩn bị đồ mai gửi khách.
李文彥|你以前不是都拿到農夫市集去賣嗎？怎麼現在上網賣了？|nǐ yǐ qián bú shì dōu ná dào nóng fū shì jí qù mài ma？ zěn me xiàn zài shàng wǎng mài le？|Trước đây anh chẳng phải đem ra chợ nông sản bán sao? Sao giờ bán trên mạng?
表哥|為了方便客戶訂購，我成立了一個網站，可是現在網路上的客戶不太多，收入不穩定，所以假日還是到農夫市集去，讓更多的人認識我們的產品。慢慢地，我希望能只靠網路販賣。|wèi le fāng biàn kè hù dìng gòu， wǒ chéng lì le yí gè wǎng zhàn， kě shì xiàn zài wǎng lù shàng de kè hù bú tài duō， shōu rù bù wěn dìng， suǒ yǐ jià rì hái shì dào nóng fū shì jí qù， ràng gèng duō de rén rèn shí wǒ men de chǎn pǐn。 màn màn dì， wǒ xī wàng néng zhǐ kào wǎng lù fàn mài。|Để khách tiện đặt mua tôi lập một trang web, nhưng khách trên mạng chưa nhiều, thu nhập không ổn định, nên cuối tuần vẫn ra chợ nông sản để nhiều người biết sản phẩm. Dần dần tôi hy vọng chỉ dựa vào bán trên mạng.
羅珊蒂|你的產品種類多嗎？一個網站不是得要有很多不同的產品才可以嗎？|nǐ de chǎn pǐn zhǒng lèi duō ma？ yí gè wǎng zhàn bú shì dé yào yǒu hěn duō bù tóng de chǎn pǐn cái kě yǐ ma？|Sản phẩm của anh nhiều loại không? Một trang web chẳng phải cần nhiều sản phẩm khác nhau sao?
表哥|我認識的一位老阿嬤種了很多蔬菜。以前她只賣給中間商，利潤很低，所以我幫她上網賣。另外，我也找了一些回到鄉下種田的年輕人一起經營網站。|wǒ rèn shí de yí wèi lǎo ā mā zhǒng le hěn duō shū cài。 yǐ qián tā zhǐ mài gěi zhōng jiān shāng， lì rùn hěn dī， suǒ yǐ wǒ bāng tā shàng wǎng mài。 lìng wài， wǒ yě zhǎo le yì xiē huí dào xiāng xià zhǒng tián de nián qīng rén yì qǐ jīng yíng wǎng zhàn。|Tôi quen một bà cụ trồng nhiều rau. Trước đây bà chỉ bán cho thương lái, lợi nhuận rất thấp nên tôi giúp bà bán trên mạng. Ngoài ra tôi còn rủ vài người trẻ về quê làm ruộng cùng điều hành trang web.
羅珊蒂|上網訂的話，多久可以收到？|shàng wǎng dìng de huà， duō jiǔ kě yǐ shōu dào？|Đặt trên mạng thì bao lâu nhận được?
表哥|在台灣宅配很快，一般來說，下訂單24小時後就能收到。客戶能吃到既新鮮又便宜的蔬果。不好意思，我得去忙了，你們繼續聊。|zài tái wān zhái pèi hěn kuài， yì bān lái shuō， xià dìng dān 24 xiǎo shí hòu jiù néng shōu dào。 kè hù néng chī dào jì xīn xiān yòu pián yi de shū guǒ。 bù hǎo yì sī， wǒ dé qù máng le， nǐ men jì xù liáo。|Ở Đài Loan giao hàng tận nhà rất nhanh, thường đặt đơn xong 24 giờ là nhận. Khách ăn được rau quả vừa tươi vừa rẻ. Xin lỗi, tôi phải đi làm việc, các bạn cứ trò chuyện.
安德思|網路真的很方便。一天二十四小時，只要你需要，隨時都可以上網訂購。再說，網路商店的商品種類很多，搜尋一下就能找到你要的東西。|wǎng lù zhēn de hěn fāng biàn。 yì tiān èr shí sì xiǎo shí， zhǐ yào nǐ xū yào， suí shí dōu kě yǐ shàng wǎng dìng gòu。 zài shuō， wǎng lù shāng diàn de shāng pǐn zhǒng lèi hěn duō， sōu xún yí xià jiù néng zhǎo dào nǐ yào de dōng xī。|Mạng thật tiện. 24 giờ mỗi ngày, chỉ cần bạn cần là lúc nào cũng đặt mua được. Hơn nữa hàng ở cửa hàng online rất nhiều loại, tìm một chút là ra thứ bạn cần.
李文彥|我的冰箱就是在網路上買的。我媽常說，「貨比三家不吃虧」。我利用比價網站，很快就找到了，節省了很多跑來跑去的時間。|wǒ de bīng xiāng jiù shì zài wǎng lù shàng mǎi de。 wǒ mā cháng shuō，「huò bǐ sān jiā bù chī kuī」。 wǒ lì yòng bǐ jià wǎng zhàn， hěn kuài jiù zhǎo dào le， jié shěng le hěn duō pǎo lái pǎo qù de shí jiān。|Tủ lạnh của tôi mua trên mạng. Mẹ tôi hay nói "so sánh ba tiệm không bị thiệt". Tôi dùng trang so sánh giá, nhanh chóng tìm được, tiết kiệm nhiều thời gian chạy đi chạy lại.
何雅婷|在網路上買東西也有風險。上次我買了一個皮包，沒想到收到以後，發現跟網站上的照片完全不一樣。更讓人生氣的是，我找不到賣家退貨。|zài wǎng lù shàng mǎi dōng xī yě yǒu fēng xiǎn。 shàng cì wǒ mǎi le yí gè pí bāo， méi xiǎng dào shōu dào yǐ hòu， fā xiàn gēn wǎng zhàn shàng de zhào piān wán quán bù yí yàng。 gèng ràng rén shēng qì de shì， wǒ zhǎo bú dào mài jiā tuì huò。|Mua đồ trên mạng cũng có rủi ro. Lần trước tôi mua một cái túi da, không ngờ nhận được thấy hoàn toàn khác ảnh trên web. Tức hơn nữa là tôi không tìm được người bán để trả hàng.
安德思|是有這樣的問題。所以網購必須找有信用的網站。這樣的話，萬一不滿意，七天以內還可以退換。而且，一般來說，上網買還是可以便宜一、兩成。|shì yǒu zhè yàng de wèn tí。 suǒ yǐ wǎng gòu bì xū zhǎo yǒu xìn yòng de wǎng zhàn。 zhè yàng de huà， wàn yí bù mǎn yì， qī tiān yǐ nèi hái kě yǐ tuì huàn。 ér qiě， yì bān lái shuō， shàng wǎng mǎi hái shì kě yǐ pián yi yī、 liǎng chéng。|Có vấn đề như vậy. Nên mua sắm online phải chọn trang web uy tín. Như vậy lỡ không hài lòng, trong bảy ngày còn đổi trả được. Hơn nữa thường mua trên mạng vẫn rẻ hơn một hai phần mười.
羅珊蒂|看起來上網購物越來越普遍。這兩年大家的購物習慣改變了這麼多。將來我開服裝店，還會有客人嗎？|kàn qǐ lái shàng wǎng gòu wù yuè lái yuè pǔ biàn。 zhè liǎng nián dà jiā de gòu wù xí guàn gǎi biàn le zhè me duō。 jiāng lái wǒ kāi fú zhuāng diàn， hái huì yǒu kè rén ma？|Xem ra mua sắm trực tuyến ngày càng phổ biến. Hai năm nay thói quen mua sắm thay đổi nhiều thế. Sau này tôi mở tiệm quần áo còn có khách không?
何雅婷|別擔心，對很多人來說，買東西的時候，最重要的還是能看到、摸到商品，尤其是服裝，一定要試穿。|bié dān xīn， duì hěn duō rén lái shuō， mǎi dōng xī de shí hòu， zuì zhòng yào de hái shì néng kàn dào、 mō dào shāng pǐn， yóu qí shì fú zhuāng， yí dìng yào shì chuān。|Đừng lo, với nhiều người khi mua đồ quan trọng nhất vẫn là nhìn được, sờ được hàng, nhất là quần áo thì nhất định phải thử.
李文彥|妳說的沒錯，這兩種購物方式各有好處，大家可以按照自己的習慣跟需要選擇適合的購物方式。|nǐ shuō de méi cuò， zhè liǎng zhǒng gòu wù fāng shì gè yǒu hǎo chù， dà jiā kě yǐ àn zhào zì jǐ de xí guàn gēn xū yào xuǎn zé shì hé de gòu wù fāng shì。|Bạn nói đúng, hai cách mua sắm này đều có điểm tốt, mọi người có thể tùy thói quen và nhu cầu chọn cách phù hợp.
羅珊蒂|聽你這麼說，我就放心了。|tīng nǐ zhè me shuō， wǒ jiù fàng xīn le。|Nghe bạn nói vậy tôi yên tâm rồi.
短文|鳳梨是台灣很重要的農產品，對台灣的經濟發展一直有很大的幫助。台灣出口的鳳梨曾經占世界第二位，可惜後來因為成本太高，在價格上沒有辦法跟別的國家競爭，很多農夫因為種的鳳梨賣不出去，生活很辛苦。|fèng lí shì tái wān hěn zhòng yào de nóng chǎn pǐn， duì tái wān de jīng jì fā zhǎn yì zhí yǒu hěn dà de bāng zhù。 tái wān chū kǒu de fèng lí céng jīng zhàn shì jiè dì èr wèi， kě xī hòu lái yīn wèi chéng běn tài gāo， zài jià gé shàng méi yǒu bàn fǎ gēn bié de guó jiā jìng zhēng， hěn duō nóng fū yīn wèi zhǒng de fèng lí mài bù chū qù， shēng huó hěn xīn kǔ。|Dứa là nông sản rất quan trọng của Đài Loan, luôn giúp ích lớn cho phát triển kinh tế. Dứa xuất khẩu của Đài Loan từng đứng thứ hai thế giới, tiếc là sau này chi phí quá cao, không cạnh tranh nổi về giá với nước khác, nhiều nông dân vì dứa bán không được mà sống rất vất vả.
短文|鳳梨在閩南語叫「旺來」，意思是可以給人帶來好運，所以用鳳梨做成內餡的甜點一直很受歡迎，不但拿來當做喜餅，也是大家喜愛的茶點，更是過年過節最好的禮物。|fèng lí zài mǐn nán yǔ jiào 「wàng lái」， yì si shì kě yǐ gěi rén dài lái hǎo yùn， suǒ yǐ yòng fèng lí zuò chéng nèi xiàn de tián diǎn yì zhí hěn shòu huān yíng， bú dàn ná lái dāng zuò xǐ bǐng， yě shì dà jiā xǐ ài de chá diǎn， gèng shì guò nián guò jié zuì hǎo de lǐ wù。|Dứa trong tiếng Mân Nam gọi là "vượng lai", nghĩa là mang lại may mắn nên bánh ngọt nhân dứa luôn được ưa chuộng, không chỉ làm bánh cưới mà còn là món điểm tâm trà yêu thích, càng là quà tốt nhất dịp Tết lễ.
短文|一方面看到了這個商機，一方面希望能讓大家認識最能代表當地文化的傳統美食，台北市政府從2006年起年年舉辦鳳梨酥文化節，成功地讓鳳梨酥的產值從每年19億提高到現在的200多億。|yì fāng miàn kàn dào le zhè gè shāng jī， yì fāng miàn xī wàng néng ràng dà jiā rèn shí zuì néng dài biǎo dāng dì wén huà de chuán tǒng měi shí， tái běi shì zhèng fǔ cóng 2006 nián qǐ nián nián jǔ bàn fèng lí sū wén huà jié， chéng gōng dì ràng fèng lí sū de chǎn zhí cóng měi nián 19 yì tí gāo dào xiàn zài de 200 duō yì。|Một mặt thấy cơ hội kinh doanh này, mặt khác mong mọi người biết món ăn truyền thống tiêu biểu văn hóa địa phương, chính quyền Đài Bắc từ năm 2006 hằng năm tổ chức lễ hội văn hóa bánh dứa, giúp giá trị sản xuất bánh dứa tăng từ 1,9 tỷ mỗi năm lên hơn 20 tỷ hiện nay.
短文|在台灣，早就有很多知名麵包店賣鳳梨酥，但是在2009年出現了第一家只賣鳳梨酥的店。老闆本來經營一家科技公司，因為看見家鄉鄰居和親戚朋友種的鳳梨一斤只能賣一塊半，生活非常不容易。|zài tái wān， zǎo jiù yǒu hěn duō zhī míng miàn bāo diàn mài fèng lí sū， dàn shì zài 2009 nián chū xiàn le dì yī jiā zhǐ mài fèng lí sū de diàn。 lǎo bǎn běn lái jīng yíng yì jiā kē jì gōng sī， yīn wèi kàn jiàn jiā xiāng lín jū hé qīn qī péng yǒu zhǒng de fèng lí yì jīn zhǐ néng mài yí kuài bàn， shēng huó fēi cháng bù róng yì。|Ở Đài Loan từ lâu nhiều tiệm bánh nổi tiếng đã bán bánh dứa, nhưng năm 2009 xuất hiện tiệm đầu tiên chỉ bán bánh dứa. Ông chủ vốn điều hành một công ty công nghệ, thấy dứa của hàng xóm và người thân quê nhà chỉ bán được một đồng rưỡi một cân, đời sống rất khó khăn.
短文|他為了提高家鄉鳳梨農的收入，決定賣鳳梨酥。他找來開麵包店的叔叔，用當地出產的鳳梨研究出新口味，結果大受歡迎。因此，他能用穩定的價格跟鳳梨農購買鳳梨，改善了他們的生活。|tā wèi le tí gāo jiā xiāng fèng lí nóng de shōu rù， jué dìng mài fèng lí sū。 tā zhǎo lái kāi miàn bāo diàn de shū shū， yòng dāng dì chū chǎn de fèng lí yán jiū chū xīn kǒu wèi， jié guǒ dà shòu huān yíng。 yīn cǐ， tā néng yòng wěn dìng de jià gé gēn fèng lí nóng gòu mǎi fèng lí， gǎi shàn le tā men de shēng huó。|Để nâng thu nhập cho nông dân trồng dứa quê mình, ông quyết định bán bánh dứa. Ông nhờ người chú mở tiệm bánh, dùng dứa địa phương nghiên cứu hương vị mới, kết quả rất được ưa chuộng. Nhờ vậy ông mua dứa của nông dân với giá ổn định, cải thiện đời sống họ.
短文|使用當地的食材，講究品質，並且利用現代的行銷方式，透過網路團購，才一年多這家公司的產品就成為台灣最受歡迎的鳳梨酥，而且在東京、上海開了店，跟Prada當了鄰居。一塊小小的鳳梨酥，因為有了網路才能不靠店面，不靠電視廣告，行銷全世界。|shǐ yòng dāng dì de shí cái， jiǎng jiū pǐn zhì， bìng qiě lì yòng xiàn dài de xíng xiāo fāng shì， tòu guò wǎng lù tuán gòu， cái yì nián duō zhè jiā gōng sī de chǎn pǐn jiù chéng wèi tái wān zuì shòu huān yíng de fèng lí sū， ér qiě zài dōng jīng、 shàng hǎi kāi le diàn， gēn Prada dāng le lín jū。 yí kuài xiǎo xiǎo de fèng lí sū， yīn wèi yǒu le wǎng lù cái néng bú kào diàn miàn， bú kào diàn shì guǎng gào， xíng xiāo quán shì jiè。|Dùng nguyên liệu địa phương, chú trọng chất lượng, lại tận dụng cách tiếp thị hiện đại, mua theo nhóm qua mạng, chỉ hơn một năm sản phẩm của công ty trở thành bánh dứa được ưa chuộng nhất Đài Loan, còn mở tiệm ở Tokyo, Thượng Hải, làm hàng xóm của Prada. Một chiếc bánh dứa nhỏ nhờ có mạng mới không cần mặt bằng, không cần quảng cáo tivi mà vẫn bán khắp thế giới.`}},{n:10,zh:"我住院了",vi:"Tôi nhập viện rồi",v:`住院|zhùyuàn|nằm viện|V-sep
臉|liǎn|mặt|N
受傷|shòushāng|bị thương|Vp-sep
撞|zhuàng|đâm, va chạm|V
遵守|zūnshǒu|tuân thủ|V
規則|guīzé|quy tắc|N
報警|bàojǐng|báo cảnh sát|V-sep
急診室|jízhěnshì|phòng cấp cứu|N
傷|shāng|vết thương|N
骨折|gǔzhé|gãy xương|Vp
片子|piānzi|phim (X-quang)|N
開刀|kāidāo|phẫu thuật|V-sep
病人|bìngrén|bệnh nhân|N
情況|qíngkuàng|tình hình|N
緊急|jǐnjí|khẩn cấp|Vs
病床|bìngchuáng|giường bệnh|N
要命|yàomìng|chết người, kinh khủng|Vs
打針|dǎzhēn|tiêm|V-sep
止痛|zhǐtòng|giảm đau|Vi
手術|shǒushù|ca phẫu thuật|N
警察|jǐngchá|cảnh sát|N
危險|wēixiǎn|nguy hiểm|N
至於|zhìyú|còn về|Ptc
部位|bùwèi|bộ phận, vị trí|N
恢復|huīfù|phục hồi|Vp
傷口|shāngkǒu|vết thương|N
哎呀|āiyā|ối chà|Ptc
出車禍|chūchēhuò|bị tai nạn xe|Phrase
趕時間|gǎnshíjiān|vội, gấp thời gian|Phrase
撞倒|zhuàngdào|đâm ngã|Phrase
救護車|jiùhùchē|xe cấp cứu|Phrase
照X光|zhàoXguāng|chụp X-quang|Phrase
動手術|dòngshǒushù|phẫu thuật|Phrase
醫美|yīměi|y học thẩm mỹ|N
合理|hélǐ|hợp lý|Vs
休假|xiūjià|nghỉ phép|V-sep
迷人|mírén|quyến rũ|Vs
職場|zhíchǎng|nơi làm việc|N
競爭力|jìngzhēnglì|sức cạnh tranh|N
調查|diàochá|điều tra, khảo sát|N
整型|zhěngxíng|chỉnh hình, phẫu thuật thẩm mỹ|V-sep
增加|zēngjiā|tăng|V
自信|zìxìn|tự tin|N
外表|wàibiǎo|vẻ bề ngoài|N
普通|pǔtōng|bình thường|Vs
從事|cóngshì|làm (nghề), theo đuổi|V
醫治|yīzhì|chữa trị|V
一向|yíxiàng|xưa nay|Adv
一般|yìbān|phổ biến, thông thường|Vs-attr
主要|zhǔyào|chủ yếu|Vs-attr
待遇|dàiyù|đãi ngộ|N
公立|gōnglì|công lập|Vs-attr
外科|wàikē|ngoại khoa|N
超過|chāoguò|vượt quá|Vpt
倍|bèi|lần (gấp)|M
另|lìng|khác|Det
價值觀|jiàzhíguān|giá trị quan|N
尊敬|zūnjìng|tôn kính|Vst
告|gào|kiện|V
平均|píngjūn|trung bình|Adv
醫療|yīliáo|y tế|N
怪|guài|trách|V
愛林|àilín|Ái Lâm (tên nữ)|Name
微整型|wēizhěngxíng|phẫu thuật thẩm mỹ nhỏ|Phrase
數一數二|shùyíshùèr|hàng đầu|Phrase
人際關係|rénjìguānxì|quan hệ giữa người với người|Phrase
動不動就|dòngbúdòngjiù|hơi một chút là|Phrase
找回|zhǎohuí|tìm lại|Phrase`,d:{l:`羅珊蒂|怎麼回事？你的手怎麼了？臉也受傷了。|zěn me huí shì？ nǐ de shǒu zěn me le？ liǎn yě shòu shāng le。|Chuyện gì vậy? Tay bạn sao thế? Mặt cũng bị thương.
李文彥|我出車禍了。我上個禮拜騎腳踏車來學校的路上被一輛車撞了。|wǒ chū chē huò le。 wǒ shàng gè lǐ bài qí jiǎo tà chē lái xué xiào de lù shàng bèi yí liàng chē zhuàng le。|Tôi bị tai nạn. Tuần trước trên đường đạp xe đến trường tôi bị một chiếc xe đâm.
羅珊蒂|你一定是為了趕時間，不遵守交通規則。|nǐ yí dìng shì wèi le gǎn shí jiān， bù zūn shǒu jiāo tōng guī zé。|Chắc bạn vội nên không tuân thủ luật giao thông.
李文彥|哪裡是我的錯。我過馬路的時候，有一輛右轉車不讓我，把我撞倒了。我躺在地上，痛得起不來。|nǎ lǐ shì wǒ de cuò。 wǒ guò mǎ lù de shí hòu， yǒu yí liàng yòu zhuǎn chē bú ràng wǒ， bǎ wǒ zhuàng dào le。 wǒ tǎng zài dì shàng， tòng dé qǐ bù lái。|Đâu phải lỗi của tôi. Lúc tôi sang đường có chiếc xe rẽ phải không nhường, đâm ngã tôi. Tôi nằm dưới đất đau không dậy nổi.
羅珊蒂|好可怕！當時有沒有人幫你？誰送你去醫院的？|hǎo kě pà！ dāng shí yǒu méi yǒu rén bāng nǐ？ shuí sòng nǐ qù yī yuàn de？|Đáng sợ quá! Lúc đó có ai giúp bạn không? Ai đưa bạn đến bệnh viện?
李文彥|撞到我的人打電話報警。救護車馬上把我送到急診室去了。|zhuàng dào wǒ de rén dǎ diàn huà bào jǐng。 jiù hù chē mǎ shàng bǎ wǒ sòng dào jí zhěn shì qù le。|Người đâm tôi gọi cảnh sát. Xe cấp cứu lập tức đưa tôi đến phòng cấp cứu.
陳敏萱|你的傷嚴重嗎？是不是骨折了？|nǐ de shāng yán zhòng ma？ shì bú shì gǔ zhé le？|Vết thương nặng không? Có phải gãy xương không?
李文彥|是啊，我一進急診室，醫生就讓我去照X光。|shì a， wǒ yí jìn jí zhěn shì， yī shēng jiù ràng wǒ qù zhào X guāng。|Đúng vậy, vừa vào phòng cấp cứu bác sĩ đã cho tôi đi chụp X-quang.
陳敏萱|後來呢？|hòu lái ne？|Sau đó thì sao?
李文彥|醫生看了片子，要我住院開刀。我住院住了五天呢。|yī shēng kàn le piān zi， yào wǒ zhù yuàn kāi dāo。 wǒ zhù yuàn zhù le wǔ tiān ne。|Bác sĩ xem phim, bảo tôi nhập viện phẫu thuật. Tôi nằm viện năm ngày đấy.
羅珊蒂|我聽說大醫院的急診室總是擠滿了病人。如果情況不是那麼緊急的話，有時候要等幾天才等得到病床，真的嗎？|wǒ tīng shuō dà yī yuàn de jí zhěn shì zǒng shì jǐ mǎn le bìng rén。 rú guǒ qíng kuàng bú shì nà me jǐn jí de huà， yǒu shí hòu yào děng jǐ tiān cái děng dé dào bìng chuáng， zhēn de ma？|Tôi nghe nói phòng cấp cứu bệnh viện lớn luôn chật bệnh nhân. Nếu không quá khẩn cấp, đôi khi phải đợi vài ngày mới có giường bệnh, thật không?
李文彥|是啊，我那個時候痛得要命，醫生先給我打止痛針。可是他說還有更緊急的病人，讓我等一等。最快要到第二天才能動手術。|shì a， wǒ nà gè shí hòu tòng dé yào mìng， yī shēng xiān gěi wǒ dǎ zhǐ tòng zhēn。 kě shì tā shuō hái yǒu gèng jǐn jí de bìng rén， ràng wǒ děng yì děng。 zuì kuài yào dào dì èr tiān cái néng dòng shǒu shù。|Đúng vậy, lúc đó tôi đau muốn chết, bác sĩ tiêm thuốc giảm đau cho trước. Nhưng bảo còn bệnh nhân khẩn cấp hơn, bảo tôi đợi. Nhanh nhất cũng phải hôm sau mới mổ được.
陳敏萱|出車禍的事，你家人知道嗎？|chū chē huò de shì， nǐ jiā rén zhī dào ma？|Chuyện tai nạn gia đình bạn biết chưa?
李文彥|警察幫我打電話給我阿姨。她一聽說要開刀，緊張得一直問醫生，有沒有危險，以後動作會不會受到影響。|jǐng chá bāng wǒ dǎ diàn huà gěi wǒ ā yí。 tā yì tīng shuō yào kāi dāo， jǐn zhāng dé yì zhí wèn yī shēng， yǒu méi yǒu wēi xiǎn， yǐ hòu dòng zuò huì bú huì shòu dào yǐng xiǎng。|Cảnh sát gọi điện cho dì tôi. Dì vừa nghe phải mổ thì căng thẳng hỏi bác sĩ mãi, có nguy hiểm không, sau này vận động có bị ảnh hưởng không.
羅珊蒂|醫生怎麼說？|yī shēng zěn me shuō？|Bác sĩ nói sao?
李文彥|醫生說這不算大手術，可是開刀多少會有一些風險。至於動作會不會受到影響，得看受傷的部位。最好的情況大概可以恢復八成到九成。|yī shēng shuō zhè bú suàn dà shǒu shù， kě shì kāi dāo duō shǎo huì yǒu yì xiē fēng xiǎn。 zhì yú dòng zuò huì bú huì shòu dào yǐng xiǎng， dé kàn shòu shāng de bù wèi。 zuì hǎo de qíng kuàng dà gài kě yǐ huī fù bā chéng dào jiǔ chéng。|Bác sĩ nói đây không tính là đại phẫu nhưng mổ ít nhiều có rủi ro. Còn vận động có ảnh hưởng không phải xem vị trí bị thương. Tình huống tốt nhất có thể hồi phục tám đến chín phần.
羅珊蒂|你現在覺得怎麼樣了？|nǐ xiàn zài jué dé zěn me yàng le？|Bây giờ bạn thấy thế nào?
李文彥|我還好，不怎麼痛了。可是很不方便，連穿衣服都要別人幫忙。只好搬到阿姨家去住一段時間。|wǒ hái hǎo， bù zěn me tòng le。 kě shì hěn bù fāng biàn， lián chuān yī fú dōu yào bié rén bāng máng。 zhǐ hǎo bān dào ā yí jiā qù zhù yí duàn shí jiān。|Tôi còn ổn, không đau mấy nữa. Nhưng rất bất tiện, ngay cả mặc quần áo cũng cần người giúp. Đành dọn đến nhà dì ở một thời gian.
陳敏萱|你在阿姨家還習慣嗎？|nǐ zài ā yí jiā hái xí guàn ma？|Bạn ở nhà dì có quen không?
李文彥|我跟阿姨很親，她像媽媽一樣地照顧我，每天都煮魚湯給我喝。你看我現在除了手不太方便以外，不是都很好嗎？|wǒ gēn ā yí hěn qīn， tā xiàng mā mā yí yàng dì zhào gù wǒ， měi tiān dōu zhǔ yú tāng gěi wǒ hē。 nǐ kàn wǒ xiàn zài chú le shǒu bú tài fāng biàn yǐ wài， bú shì dōu hěn hǎo ma？|Tôi thân với dì, dì chăm tôi như mẹ, mỗi ngày nấu canh cá cho tôi uống. Bạn xem ngoài tay hơi bất tiện ra, tôi chẳng phải đều ổn sao?
陳敏萱|喝魚湯？你阿姨為什麼讓你每天喝魚湯？|hē yú tāng？ nǐ ā yí wèi shén me ràng nǐ měi tiān hē yú tāng？|Uống canh cá? Sao dì bạn cho bạn uống canh cá mỗi ngày?
李文彥|阿姨說多喝魚湯，傷口會恢復得比較快。哎呀，我得走了。我得去看醫生。明天見。|ā yí shuō duō hē yú tāng， shāng kǒu huì huī fù dé bǐ jiào kuài。 āi yā， wǒ dé zǒu le。 wǒ dé qù kàn yī shēng。 míng tiān jiàn。|Dì nói uống nhiều canh cá vết thương sẽ lành nhanh hơn. Ối, tôi phải đi rồi. Phải đi khám bác sĩ. Mai gặp.
短文|何雅婷的香港朋友愛林聽說台灣的微整型技術在亞洲是數一數二的，而且價錢又合理，因此她趁休假到台灣來做微整型。有許多像愛林這樣的外國人利用假期來台灣做醫美手術。他們希望假期結束以後，能變得更迷人，在職場上更有競爭力。|hé yǎ tíng de xiāng gǎng péng yǒu ài lín tīng shuō tái wān de wēi zhěng xíng jì shù zài yà zhōu shì shù yí shù èr de， ér qiě jià qián yòu hé lǐ， yīn cǐ tā chèn xiū jià dào tái wān lái zuò wēi zhěng xíng。 yǒu xǔ duō xiàng ài lín zhè yàng de wài guó rén lì yòng jià qī lái tái wān zuò yī měi shǒu shù。 tā men xī wàng jià qī jié shù yǐ hòu， néng biàn dé gèng mí rén， zài zhí chǎng shàng gèng yǒu jìng zhēng lì。|Cô bạn Hồng Kông của Hà Nhã Đình là Ái Lâm nghe nói kỹ thuật thẩm mỹ nhỏ ở Đài Loan thuộc hàng đầu châu Á, giá lại hợp lý nên tranh thủ kỳ nghỉ sang Đài Loan làm. Nhiều người nước ngoài như Ái Lâm tận dụng kỳ nghỉ đến Đài Loan phẫu thuật thẩm mỹ, mong sau kỳ nghỉ quyến rũ hơn, cạnh tranh tốt hơn nơi làm việc.
短文|根據調查，百分之六十一的人認為整型除了可以增加自信，還可以改善職場的人際關係。另外，研究也發現，外表好看的人收入比外表普通的人多百分之十到十五。|gēn jù diào chá， bǎi fēn zhī liù shí yī de rén rèn wèi zhěng xíng chú le kě yǐ zēng jiā zì xìn， hái kě yǐ gǎi shàn zhí chǎng de rén jì guān xì。 lìng wài， yán jiū yě fā xiàn， wài biǎo hǎo kàn de rén shōu rù bǐ wài biǎo pǔ tōng de rén duō bǎi fēn zhī shí dào shí wǔ。|Theo khảo sát, 61% người cho rằng phẫu thuật thẩm mỹ ngoài tăng sự tự tin còn cải thiện quan hệ nơi làm việc. Ngoài ra nghiên cứu cho thấy người ngoại hình đẹp thu nhập cao hơn người bình thường 10 đến 15%.
短文|因為這樣，這幾年醫美成為很大的商機，一年有好幾百億的產值，而且一直在增加。也因此，全台灣44,000多位醫生，其中有12,000多位從事醫美。|yīn wèi zhè yàng， zhè jǐ nián yī měi chéng wèi hěn dà de shāng jī， yì nián yǒu hǎo jǐ bǎi yì de chǎn zhí， ér qiě yì zhí zài zēng jiā。 yě yīn cǐ， quán tái wān 44,000 duō wèi yī shēng， qí zhōng yǒu 12,000 duō wèi cóng shì yī měi。|Vì thế mấy năm nay y học thẩm mỹ thành cơ hội kinh doanh lớn, mỗi năm giá trị sản xuất hàng chục tỷ và vẫn tăng. Vì vậy trong hơn 44.000 bác sĩ toàn Đài Loan có hơn 12.000 người làm thẩm mỹ.
短文|醫生的工作是醫治病人，社會地位一向很高，但是現在為什麼有這麼多的醫生選擇去做一般人認為不需要太多專業技術的微整型？主要原因有兩個：一個是在一般的醫院工作辛苦，待遇又不高，另外一個是社會環境改變了。|yī shēng de gōng zuò shì yī zhì bìng rén， shè huì dì wèi yí xiàng hěn gāo， dàn shì xiàn zài wèi shén me yǒu zhè me duō de yī shēng xuǎn zé qù zuò yì bān rén rèn wèi bù xū yào tài duō zhuān yè jì shù de wēi zhěng xíng？ zhǔ yào yuán yīn yǒu liǎng gè： yí gè shì zài yì bān de yī yuàn gōng zuò xīn kǔ， dài yù yòu bù gāo， lìng wài yí gè shì shè huì huán jìng gǎi biàn le。|Bác sĩ chữa bệnh cho người, địa vị xã hội xưa nay rất cao, nhưng sao nay nhiều bác sĩ chọn làm thẩm mỹ nhỏ vốn bị coi là không cần nhiều kỹ thuật chuyên môn? Lý do chính có hai: một là làm ở bệnh viện thường vất vả mà đãi ngộ không cao, hai là môi trường xã hội đã thay đổi.
短文|就拿公立醫院外科醫生來說，每星期工作時間超過一百個小時，但是薪水只有十萬塊。可是當微整型醫生，每星期只要工作四十五個小時，薪水卻是兩、三倍。|jiù ná gōng lì yī yuàn wài kē yī shēng lái shuō， měi xīng qī gōng zuò shí jiān chāo guò yì bǎi gè xiǎo shí， dàn shì xīn shuǐ zhǐ yǒu shí wàn kuài。 kě shì dāng wēi zhěng xíng yī shēng， měi xīng qī zhǐ yào gōng zuò sì shí wǔ gè xiǎo shí， xīn shuǐ què shì liǎng、 sān bèi。|Lấy bác sĩ ngoại khoa bệnh viện công làm ví dụ, mỗi tuần làm hơn một trăm giờ mà lương chỉ mười vạn. Nhưng làm bác sĩ thẩm mỹ nhỏ mỗi tuần chỉ cần bốn mươi lăm giờ, lương lại gấp hai ba lần.
短文|另一方面是價值觀的問題。以前醫生受人尊敬，可是現在的病人動不動就告醫生；平均每天最少有一位醫生被告；醫療糾紛也給醫生帶來很大的壓力。|lìng yì fāng miàn shì jià zhí guān de wèn tí。 yǐ qián yī shēng shòu rén zūn jìng， kě shì xiàn zài de bìng rén dòng bú dòng jiù gào yī shēng； píng jūn měi tiān zuì shǎo yǒu yí wèi yī shēng bèi gào； yī liáo jiū fēn yě gěi yī shēng dài lái hěn dà de yā lì。|Mặt khác là vấn đề giá trị quan. Trước đây bác sĩ được kính trọng, nay bệnh nhân hơi một chút là kiện bác sĩ; trung bình mỗi ngày ít nhất một bác sĩ bị kiện; tranh chấp y tế cũng tạo áp lực lớn.
短文|很多人擔心，我們的醫療品質會不會因為那麼多外科醫生去從事整型工作而受到影響？可是如果醫生的工作環境和待遇不能改善，我們怎麼能怪他們選擇醫美。再說，醫美也是幫助人找回自信，開始新生活的好方法，不是嗎？|hěn duō rén dān xīn， wǒ men de yī liáo pǐn zhì huì bú huì yīn wèi nà me duō wài kē yī shēng qù cóng shì zhěng xíng gōng zuò ér shòu dào yǐng xiǎng？ kě shì rú guǒ yī shēng de gōng zuò huán jìng hé dài yù bù néng gǎi shàn， wǒ men zěn me néng guài tā men xuǎn zé yī měi。 zài shuō， yī měi yě shì bāng zhù rén zhǎo huí zì xìn， kāi shǐ xīn shēng huó de hǎo fāng fǎ， bú shì ma？|Nhiều người lo chất lượng y tế có bị ảnh hưởng khi nhiều bác sĩ ngoại khoa chuyển sang thẩm mỹ. Nhưng nếu môi trường và đãi ngộ không cải thiện, sao ta trách họ chọn thẩm mỹ? Hơn nữa y học thẩm mỹ cũng giúp người ta tìm lại tự tin, bắt đầu cuộc sống mới, phải không?`}},{n:11,zh:"台灣故事",vi:"Câu chuyện Đài Loan",v:`建|jiàn|xây dựng (văn ngôn)|V
重建|chóngjiàn|xây lại|V
到底|dàodǐ|rốt cuộc|Adv
世紀|shìjì|thế kỷ|N
貿易|màoyì|mậu dịch, buôn bán|N
商業|shāngyè|thương nghiệp|N
利益|lìyì|lợi ích|N
派|pài|phái, cử|V
軍隊|jūnduì|quân đội|N
燒|shāo|đốt|V
城牆|chéngqiáng|tường thành|N
頭髮|tóufà|tóc|N
甚至|shènzhì|thậm chí|Adv
打仗|dǎzhàng|đánh nhau, chiến tranh|V-sep
少數|shǎoshù|thiểu số|N
開墾|kāikěn|khai khẩn|V
將軍|jiāngjūn|tướng quân|N
軍人|jūnrén|quân nhân|N
平原|píngyuán|đồng bằng|N
人口|rénkǒu|dân số|N
血統|xuètǒng|huyết thống|N
嘍|lóu|(trợ từ: vậy thì)|Ptc
孫子|sūnzi|cháu nội|N
領土|lǐngtǔ|lãnh thổ|N
男性|nánxìng|nam giới|N
禁止|jìnzhǐ|cấm|V
娶|qǔ|cưới (vợ)|V
相信|xiāngxìn|tin tưởng|Vst
精彩|jīngcǎi|đặc sắc, tuyệt vời|Vs
紅毛城|hóngmáochéng|Hồng Mao Thành (pháo đài Santo Domingo)|Name
東方|dōngfāng|phương Đông|Name
淡水|dànshuǐ|Đạm Thủy|Name
漢人|hànrén|người Hán|Name
鄭成功|zhèngchénggōng|Trịnh Thành Công (Quốc Tính Gia)|Name
明朝|míngcháo|triều Minh|Name
中南美洲|zhōngnánměizhōu|Trung và Nam Mỹ|Name
清朝|qīngcháo|triều Thanh|Name
大清帝國|dàqīngdìguó|Đại Thanh Đế quốc|Name
輪到|lúndào|đến lượt|Phrase
十七世紀初|shíqīshìjìchū|đầu thế kỷ 17|Phrase
打敗|dǎbài|đánh bại|Phrase
十七世紀末|shíqīshìjìmò|cuối thế kỷ 17|Phrase
餐桌|cānzhuō|bàn ăn|N
中式|zhōngshì|kiểu Trung Hoa|N
套|tào|bộ, set|M
燒餅|shāobǐng|bánh nướng mè|N
油條|yóutiáo|bánh quẩy|N
飯糰|fàntuán|cơm nắm|N
豆漿|dòujiāng|sữa đậu nành|N
內戰|nèizhàn|nội chiến|N
人民|rénmín|nhân dân|N
攤子|tānzi|sạp hàng|N
菜單|càidān|thực đơn|N
蘿蔔|luóbó|củ cải|N
接著|jiēzhù|tiếp theo|Adv
戰爭|zhànzhēng|chiến tranh|N
不斷|búduàn|không ngừng|Vs
遷移|qiānyí|di cư|Vi
多半|duōbàn|phần lớn|Adv
困難|kùnnán|khó khăn|Vs
節儉|jiéjiǎn|tiết kiệm|Vs
主婦|zhǔfù|nội trợ|N
煎|jiān|chiên|V
菜色|càisè|món ăn|N
以及|yǐjí|cũng như|Conj
美味|měiwèi|ngon|Vs
點心|diǎnxīn|điểm tâm, bánh ngọt|N
日式|rìshì|kiểu Nhật|N
飲食|yǐnshí|ăn uống|N
蔣介石|jiǎngjièshí|Tưởng Giới Thạch|Name
國共內戰|guógòngnèizhàn|nội chiến Quốc–Cộng|Name
客家人|kèjiārén|người Khách Gia (Hakka)|Name
閩南人|mǐnnánrén|người Mân Nam|Name
蛋餅|dànbǐng|bánh trứng cuộn|Phrase
打輸|dǎshū|thua trận|Phrase
擺攤子|bǎitānzi|bày sạp hàng|Phrase
蘿蔔糕|luóbógāo|bánh củ cải|Phrase
烹飪課|pēngrènkè|lớp nấu ăn|Phrase
曬乾|shàiqián|phơi khô|Phrase
各種各樣|gèzhǒnggèyàng|đủ loại|Phrase
殖民統治|zhímíntǒngzhì|thống trị thực dân|Phrase
味噌湯|wèicēngtāng|súp miso|Phrase
蘿蔔乾|luóbóqián|củ cải khô|Phrase
進一步|jìnyíbù|tiến thêm một bước|Phrase`,d:{l:`安德思|何雅婷，妳現在有空嗎？能不能幫我看一下這份作業？|hé yǎ tíng， nǐ xiàn zài yǒu kòng ma？ néng bù néng bāng wǒ kàn yí xià zhè fèn zuò yè？|Hà Nhã Đình, bạn có rảnh không? Có thể xem giúp tôi bài tập này không?
何雅婷|什麼作業？紅毛城的故事？你們現在學台灣歷史嗎？|shén me zuò yè？ hóng máo chéng de gù shì？ nǐ men xiàn zài xué tái wān lì shǐ ma？|Bài gì? Câu chuyện Hồng Mao Thành? Giờ các bạn học lịch sử Đài Loan sao?
安德思|是啊。下個星期一輪到我報告紅毛城的歷史。可是我的中文不夠好，有些資料看不懂，想請妳幫忙。|shì a。 xià gè xīng qī yī lún dào wǒ bào gào hóng máo chéng de lì shǐ。 kě shì wǒ de zhōng wén bú gòu hǎo， yǒu xiē zī liào kàn bù dǒng， xiǎng qǐng nǐ bāng máng。|Phải. Thứ Hai tuần sau đến lượt tôi báo cáo lịch sử Hồng Mao Thành. Nhưng tiếng Trung tôi chưa đủ, có tài liệu đọc không hiểu, muốn nhờ bạn giúp.
何雅婷|好啊，有什麼問題？|hǎo a， yǒu shén me wèn tí？|Được, có vấn đề gì?
安德思|網路上說，紅毛城最早是西班牙人建的，後來荷蘭人又重建。到底是怎麼回事？|wǎng lù shàng shuō， hóng máo chéng zuì zǎo shì xī bān yá rén jiàn de， hòu lái hé lán rén yòu chóng jiàn。 dào dǐ shì zěn me huí shì？|Trên mạng nói Hồng Mao Thành ban đầu do người Tây Ban Nha xây, sau đó người Hà Lan xây lại. Rốt cuộc thế nào?
何雅婷|十六世紀，歐洲許多國家到東方從事貿易活動。十七世紀初，荷蘭人先在台灣南部建立城市。過了兩年，西班牙人也到了台灣北部，在淡水建了紅毛城。1642年，為了商業利益，荷蘭派軍隊打敗了西班牙。西班牙人離開台灣以前，把城燒了。所以現在的紅毛城是荷蘭人重建的。|shí liù shì jì， ōu zhōu xǔ duō guó jiā dào dōng fāng cóng shì mào yì huó dòng。 shí qī shì jì chū， hé lán rén xiān zài tái wān nán bù jiàn lì chéng shì。 guò le liǎng nián， xī bān yá rén yě dào le tái wān běi bù， zài dàn shuǐ jiàn le hóng máo chéng。1642 nián， wèi le shāng yè lì yì， hé lán pài jūn duì dǎ bài le xī bān yá。 xī bān yá rén lí kāi tái wān yǐ qián， bǎ chéng shāo le。 suǒ yǐ xiàn zài de hóng máo chéng shì hé lán rén chóng jiàn de。|Thế kỷ 16 nhiều nước châu Âu đến phương Đông buôn bán. Đầu thế kỷ 17 người Hà Lan lập thành ở nam Đài Loan trước. Hai năm sau người Tây Ban Nha cũng đến bắc Đài Loan, xây Hồng Mao Thành ở Đạm Thủy. Năm 1642 vì lợi ích thương mại Hà Lan phái quân đánh bại Tây Ban Nha. Trước khi rời Đài Loan người Tây Ban Nha đốt thành. Nên Hồng Mao Thành hiện nay do người Hà Lan xây lại.
安德思|為什麼叫紅毛城？因為城牆是紅色的嗎？|wèi shén me jiào hóng máo chéng？ yīn wèi chéng qiáng shì hóng sè de ma？|Sao gọi là Hồng Mao Thành? Vì tường thành màu đỏ à?
何雅婷|不是，不是，是因為西方人頭髮顏色的關係。當時的台灣人叫西方人「紅毛」。|bú shì， bú shì， shì yīn wèi xī fāng rén tóu fà yán sè de guān xì。 dāng shí de tái wān rén jiào xī fāng rén 「hóng máo」。|Không, không, là vì màu tóc người phương Tây. Người Đài Loan lúc đó gọi người phương Tây là "tóc đỏ".
安德思|那時候台灣沒有政府嗎？為什麼歐洲人可以自由地來來去去，甚至在台灣打仗？|nà shí hòu tái wān méi yǒu zhèng fǔ ma？ wèi shén me ōu zhōu rén kě yǐ zì yóu dì lái lái qù qù， shèn zhì zài tái wān dǎ zhàng？|Lúc đó Đài Loan không có chính phủ sao? Sao người châu Âu đến đi tự do, thậm chí đánh nhau ở Đài Loan?
何雅婷|那時候台灣不是一個國家，沒有政府。除了少數來開墾跟做生意的漢人以外，都是原住民。|nà shí hòu tái wān bú shì yí gè guó jiā， méi yǒu zhèng fǔ。 chú le shǎo shù lái kāi kěn gēn zuò shēng yì de hàn rén yǐ wài， dōu shì yuán zhù mín。|Lúc đó Đài Loan không phải một quốc gia, không có chính phủ. Ngoài số ít người Hán đến khai khẩn và buôn bán, đều là người bản địa.
安德思|這麼說，台灣應該有很多原住民才對。可是為什麼我的朋友當中一個原住民都沒有？|zhè me shuō， tái wān yīng gāi yǒu hěn duō yuán zhù mín cái duì。 kě shì wèi shén me wǒ de péng yǒu dāng zhōng yí gè yuán zhù mín dōu méi yǒu？|Vậy thì Đài Loan phải có nhiều người bản địa mới đúng. Sao trong bạn tôi chẳng có ai là người bản địa?
何雅婷|這就要從鄭成功說起了。鄭成功是明朝的一位將軍，他在1662年帶著兩萬五千個軍人打敗荷蘭，建立台灣歷史上第一個漢人政府。|zhè jiù yào cóng zhèng chéng gōng shuō qǐ le。 zhèng chéng gōng shì míng cháo de yí wèi jiāng jūn， tā zài 1662 nián dài zhù liǎng wàn wǔ qiān gè jūn rén dǎ bài hé lán， jiàn lì tái wān lì shǐ shàng dì yī gè hàn rén zhèng fǔ。|Chuyện này phải bắt đầu từ Trịnh Thành Công. Ông là một tướng triều Minh, năm 1662 dẫn hai vạn năm nghìn quân đánh bại Hà Lan, lập chính quyền người Hán đầu tiên trong lịch sử Đài Loan.
安德思|鄭成功到台灣就跟西班牙人到中南美洲的情形一樣嗎？|zhèng chéng gōng dào tái wān jiù gēn xī bān yá rén dào zhōng nán měi zhōu de qíng xíng yí yàng ma？|Trịnh Thành Công đến Đài Loan giống như người Tây Ban Nha đến Trung Nam Mỹ sao?
何雅婷|嗯。從那以後，移民到台灣來的漢人越來越多。慢慢地，本來住在平原的原住民有的搬到山上去，更多的人跟漢人結婚了。現在台灣人口當中原住民只占百分之二，差不多有五十幾萬人。|ń。 cóng nà yǐ hòu， yí mín dào tái wān lái de hàn rén yuè lái yuè duō。 màn màn dì， běn lái zhù zài píng yuán de yuán zhù mín yǒu de bān dào shān shàng qù， gèng duō de rén gēn hàn rén jié hūn le。 xiàn zài tái wān rén kǒu dāng zhōng yuán zhù mín zhǐ zhàn bǎi fēn zhī èr， chà bu duō yǒu wǔ shí jǐ wàn rén。|Ừ. Từ đó người Hán di cư đến Đài Loan ngày càng nhiều. Dần dần người bản địa vốn sống ở đồng bằng có người dọn lên núi, nhiều người hơn kết hôn với người Hán. Nay dân số Đài Loan người bản địa chỉ chiếm 2%, khoảng hơn năm trăm nghìn.
安德思|妳的意思是，台灣有很多人都有原住民的血統嘍？|nǐ de yì si shì， tái wān yǒu hěn duō rén dōu yǒu yuán zhù mín de xuè tǒng lóu？|Ý bạn là nhiều người Đài Loan có huyết thống người bản địa à?
何雅婷|是的。十七世紀末，清朝政府打敗了鄭成功的孫子，台灣正式成為大清帝國的領土。但是清朝政府只讓男性來台灣開墾，禁止他們帶家人來。所以漢人男性想結婚只能娶原住民。|shì de。 shí qī shì jì mò， qīng cháo zhèng fǔ dǎ bài le zhèng chéng gōng de sūn zi， tái wān zhèng shì chéng wèi dà qīng dì guó de lǐng tǔ。 dàn shì qīng cháo zhèng fǔ zhǐ ràng nán xìng lái tái wān kāi kěn， jìn zhǐ tā men dài jiā rén lái。 suǒ yǐ hàn rén nán xìng xiǎng jié hūn zhǐ néng qǔ yuán zhù mín。|Đúng vậy. Cuối thế kỷ 17, triều Thanh đánh bại cháu nội Trịnh Thành Công, Đài Loan chính thức thành lãnh thổ Đại Thanh. Nhưng triều Thanh chỉ cho nam giới đến khai khẩn, cấm mang gia đình. Nên đàn ông Hán muốn kết hôn chỉ có thể cưới người bản địa.
安德思|謝謝妳告訴我這麼多跟台灣有關的故事。我相信下個星期我的報告會非常精彩。|xiè xiè nǐ gào sù wǒ zhè me duō gēn tái wān yǒu guān de gù shì。 wǒ xiāng xìn xià gè xīng qī wǒ de bào gào huì fēi cháng jīng cǎi。|Cảm ơn bạn kể nhiều chuyện về Đài Loan. Tôi tin báo cáo tuần sau của tôi sẽ rất đặc sắc.
短文|星期六早上何雅婷帶安德思到一家很有名的中式早餐店去吃早餐。何雅婷點了一套燒餅油條、一份蛋餅、一個飯糰，還有一碗甜豆漿跟一碗鹹豆漿。|xīng qī liù zǎo shàng hé yǎ tíng dài ān dé sī dào yì jiā hěn yǒu míng de zhōng shì zǎo cān diàn qù chī zǎo cān。 hé yǎ tíng diǎn le yí tào shāo bǐng yóu tiáo、 yí fèn dàn bǐng、 yí gè fàn tuán， hái yǒu yì wǎn tián dòu jiāng gēn yì wǎn xián dòu jiāng。|Sáng thứ Bảy Hà Nhã Đình dẫn An Đức Tư đến một tiệm điểm tâm kiểu Trung nổi tiếng. Nhã Đình gọi một phần bánh nướng quẩy, một bánh trứng cuộn, một cơm nắm, cùng một bát sữa đậu nành ngọt và một bát mặn.
短文|何雅婷告訴他，這家早餐店的老闆是1949年的時候跟著蔣介石一起到台灣來的。國共內戰，蔣介石打輸了，就帶著一百多萬的軍隊跟人民到了台灣。那時候有些人為了生活，不得不擺個攤子，賣起家鄉的美食。這家店就是這麼開始的。|hé yǎ tíng gào sù tā， zhè jiā zǎo cān diàn de lǎo bǎn shì 1949 nián de shí hòu gēn zhù jiǎng jiè shí yì qǐ dào tái wān lái de。 guó gòng nèi zhàn， jiǎng jiè shí dǎ shū le， jiù dài zhù yì bǎi duō wàn de jūn duì gēn rén mín dào le tái wān。 nà shí hòu yǒu xiē rén wèi le shēng huó， bù dé bù bǎi gè tān zi， mài qǐ jiā xiāng de měi shí。 zhè jiā diàn jiù shì zhè me kāi shǐ de。|Nhã Đình kể ông chủ tiệm này năm 1949 theo Tưởng Giới Thạch đến Đài Loan. Nội chiến Quốc–Cộng, Tưởng thua nên đưa hơn một triệu quân và dân sang Đài Loan. Lúc đó có người vì mưu sinh đành bày sạp bán món quê nhà. Tiệm này bắt đầu như vậy.
短文|但是安德思看到早餐店的菜單上也有蘿蔔糕。他想起上烹飪課的時候，老師說過蘿蔔糕是客家人過年時一定要吃的。何雅婷告訴他，因為蘿蔔長得快，而且不太需要照顧，秋天收成以後種下的蘿蔔就成了客家人冬天重要的蔬菜。|dàn shì ān dé sī kàn dào zǎo cān diàn de cài dān shàng yě yǒu luó bó gāo。 tā xiǎng qǐ shàng pēng rèn kè de shí hòu， lǎo shī shuō guò luó bó gāo shì kè jiā rén guò nián shí yí dìng yào chī de。 hé yǎ tíng gào sù tā， yīn wèi luó bó zhǎng dé kuài， ér qiě bú tài xū yào zhào gù， qiū tiān shōu chéng yǐ hòu zhǒng xià de luó bó jiù chéng le kè jiā rén dōng tiān zhòng yào de shū cài。|Nhưng An Đức Tư thấy thực đơn cũng có bánh củ cải. Anh nhớ lúc học lớp nấu ăn thầy từng nói bánh củ cải là món người Hakka nhất định ăn dịp Tết. Nhã Đình bảo vì củ cải mọc nhanh, ít cần chăm sóc nên củ cải trồng sau mùa thu hoạch mùa thu trở thành rau quan trọng mùa đông của người Hakka.
短文|何雅婷接著又說，在中國歷史上，客家人因為戰爭不斷而往南方遷移，現在台灣客家人的祖先多半是清朝的時候移民來的。因為來的時間比閩南人晚，只好住在山邊，生活比較困難。節儉的客家主婦就利用曬乾以後的蘿蔔煎蛋、煮湯，做出各種各樣的菜色，以及美味的點心。|hé yǎ tíng jiē zhù yòu shuō， zài zhōng guó lì shǐ shàng， kè jiā rén yīn wèi zhàn zhēng bú duàn ér wǎng nán fāng qiān yí， xiàn zài tái wān kè jiā rén de zǔ xiān duō bàn shì qīng cháo de shí hòu yí mín lái de。 yīn wèi lái de shí jiān bǐ mǐn nán rén wǎn， zhǐ hǎo zhù zài shān biān， shēng huó bǐ jiào kùn nán。 jié jiǎn de kè jiā zhǔ fù jiù lì yòng shài qián yǐ hòu de luó bó jiān dàn、 zhǔ tāng， zuò chū gè zhǒng gè yàng de cài sè， yǐ jí měi wèi de diǎn xīn。|Nhã Đình nói tiếp, trong lịch sử Trung Quốc người Hakka vì chiến tranh liên miên mà di cư xuống phương nam, tổ tiên người Hakka ở Đài Loan phần lớn nhập cư thời Thanh. Vì đến muộn hơn người Mân Nam nên đành ở gần núi, đời sống khó hơn. Các bà nội trợ Hakka tiết kiệm dùng củ cải phơi khô chiên trứng, nấu canh, làm đủ món ăn và bánh ngon.
短文|安德思還發現，這家早餐店賣的飯糰跟他在便利商店買的不一樣。何雅婷覺得安德思買的應該是日式飯糰。日本曾經殖民統治台灣五十年，所以台灣人的飲食習慣受到很深的影響，像壽司、味噌湯都很普遍，到處都吃得到。|ān dé sī hái fā xiàn， zhè jiā zǎo cān diàn mài de fàn tuán gēn tā zài biàn lì shāng diàn mǎi de bù yí yàng。 hé yǎ tíng jué dé ān dé sī mǎi de yīng gāi shì rì shì fàn tuán。 rì běn céng jīng zhí mín tǒng zhì tái wān wǔ shí nián， suǒ yǐ tái wān rén de yǐn shí xí guàn shòu dào hěn shēn de yǐng xiǎng， xiàng shòu sī、 wèi cēng tāng dōu hěn pǔ biàn， dào chù dōu chī dé dào。|An Đức Tư còn nhận ra cơm nắm ở tiệm này khác loại anh mua ở cửa hàng tiện lợi. Nhã Đình nghĩ anh mua là cơm nắm kiểu Nhật. Nhật từng thống trị thực dân Đài Loan năm mươi năm nên thói quen ăn uống của người Đài Loan chịu ảnh hưởng sâu, sushi, súp miso đều phổ biến, đâu cũng ăn được.
短文|不過台灣的味噌湯裡有時候會加一小段油條，飯糰裡也常能見到客家蘿蔔乾。安德思從來沒想到從餐桌上可以看出一個地方的歷史。這頓早餐讓他對台灣有了更進一步的了解。|bú guò tái wān de wèi cēng tāng lǐ yǒu shí hòu huì jiā yì xiǎo duàn yóu tiáo， fàn tuán lǐ yě cháng néng jiàn dào kè jiā luó bó qián。 ān dé sī cóng lái méi xiǎng dào cóng cān zhuō shàng kě yǐ kàn chū yí gè dì fāng de lì shǐ。 zhè dùn zǎo cān ràng tā duì tái wān yǒu le gèng jìn yí bù de liǎo jiě。|Nhưng súp miso Đài Loan đôi khi thêm một đoạn bánh quẩy nhỏ, cơm nắm cũng thường có củ cải khô Hakka. An Đức Tư chưa từng nghĩ từ bàn ăn có thể thấy lịch sử một vùng. Bữa sáng này giúp anh hiểu Đài Loan sâu hơn.`}},{n:12,zh:"我要去投票",vi:"Tôi sẽ đi bỏ phiếu",v:`投票|tóupiào|bỏ phiếu|V-sep
抱歉|bàoqiàn|xin lỗi, áy náy|Vs
表妹|biǎomèi|em họ gái|N
反核|fǎnhé|chống điện hạt nhân|Vs-attr
遊行|yóuxíng|diễu hành, biểu tình|N
政治|zhèngzhì|chính trị|N
熱衷|rèzhōng|nhiệt tình, say mê|Vst
前途|qiántú|tiền đồ, tương lai|N
勸|quàn|khuyên|V
而已|éryǐ|mà thôi|Ptc
民主|mínzhǔ|dân chủ|Vs
表達|biǎodá|bày tỏ|V
公共|gōnggòng|công cộng|Vs-attr
議題|yìtí|vấn đề (nghị sự)|N
核能|hénéng|năng lượng hạt nhân|N
電廠|diànchǎng|nhà máy điện|N
由|yóu|do (ai quyết định)|Prep
專家|zhuānjiā|chuyên gia|N
全面|quánmiàn|toàn diện|Adv
民意|mínyì|ý dân|N
代表|dàibiǎo|đại biểu|N
處理|chùlǐ|xử lý|V
政黨|zhèngdǎng|đảng phái chính trị|N
難道|nándào|chẳng lẽ|Adv
滿|mǎn|đủ (tuổi)|Vpt
憲法|xiànfǎ|hiến pháp|N
投票權|tóupiàoquán|quyền bỏ phiếu|N
選舉|xuǎnjǔ|bầu cử|N
權利|quánlì|quyền lợi|N
表示|biǎoshì|biểu thị|V
反映|fǎnyìng|phản ánh|Vpt
為|wèi|vì, cho|Prep
服務|fúwù|phục vụ|V
職位|zhíwèi|chức vụ|N
任期|rènqī|nhiệm kỳ|N
選民|xuǎnmín|cử tri|N
完美|wánměi|hoàn hảo|Vs
積極|jījí|tích cực|Vs
最佳|zuìjiā|tốt nhất|Vs-attr
推銷員|tuīxiāoyuán|nhân viên tiếp thị|N
有道理|yǒudàolǐ|có lý|Phrase
候選人|hòuxuǎnrén|ứng viên|Phrase
學術界|xuéshùjiè|giới học thuật|N
從政|cóngzhèng|làm chính trị|Vi
政策|zhèngcè|chính sách|N
安定|āndìng|ổn định|Vs
辭|cí|từ chức|Vp
頭腦|tóunǎo|đầu óc|N
改革|gǎigé|cải cách|N
看法|kànfǎ|quan điểm|N
教育|jiàoyù|giáo dục|N
方面|fāngmiàn|phương diện|N
得到|dédào|nhận được|V
連任|liánrèn|tái cử|V
屆|jiè|khóa, nhiệm kỳ|M
支持度|zhīchídù|mức ủng hộ|N
落選|luòxuǎn|thất cử|Vp
得票率|dépiàolǜ|tỷ lệ phiếu|N
預期|yùqī|dự kiến|N
暫時|zànshí|tạm thời|Adv
老家|lǎojiā|quê nhà|N
形象|xíngxiàng|hình ảnh|N
商量|shāngliáng|bàn bạc|V
人脈|rénmài|mối quan hệ|N
弱勢|ruòshì|yếu thế|N
退休|tuìxiū|nghỉ hưu|Vp
事業|shìyè|sự nghiệp|N
捐|juān|quyên góp|V
義務|yìwù|miễn phí, tình nguyện|Adv
經費|jīngfèi|kinh phí|N
競選|jìngxuǎn|tranh cử|V
也許|yěxǔ|có lẽ|Adv
政治界|zhèngzhìjiè|giới chính trị|N
權力|quánlì|quyền lực|N`,d:{l:`何雅婷|真抱歉，今天晚上我不能跟你們去聽演唱會了。|zhēn bào qiàn， jīn tiān wǎn shàng wǒ bù néng gēn nǐ men qù tīng yǎn chàng huì le。|Thật xin lỗi, tối nay tôi không đi nghe concert cùng các bạn được.
高橋健太|不是說好了嗎？怎麼不去了？|bú shì shuō hǎo le ma？ zěn me bú qù le？|Chẳng phải đã hẹn rồi sao? Sao lại không đi?
何雅婷|我表妹從香港回來了。我阿姨叫我過去吃晚飯。|wǒ biǎo mèi cóng xiāng gǎng huí lái le。 wǒ ā yí jiào wǒ guò qù chī wǎn fàn。|Em họ tôi từ Hồng Kông về. Dì tôi bảo tôi qua ăn tối.
陳敏萱|妳表妹不是在香港念書嗎？現在不是假期，她怎麼回來了？|nǐ biǎo mèi bú shì zài xiāng gǎng niàn shū ma？ xiàn zài bú shì jià qī， tā zěn me huí lái le？|Em họ bạn chẳng phải đang học ở Hồng Kông sao? Giờ không phải kỳ nghỉ, sao lại về?
何雅婷|她要參加這個週末的反核遊行。我阿姨擔心她對政治太熱衷，會影響她的前途，讓我過去勸勸她。|tā yào cān jiā zhè gè zhōu mò de fǎn hé yóu xíng。 wǒ ā yí dān xīn tā duì zhèng zhì tài rè zhōng， huì yǐng xiǎng tā de qián tú， ràng wǒ guò qù quàn quàn tā。|Em ấy muốn tham gia diễu hành phản đối điện hạt nhân cuối tuần này. Dì tôi lo em quá hăng hái chuyện chính trị, ảnh hưởng tương lai nên bảo tôi sang khuyên.
陳敏萱|只不過參加遊行而已，妳阿姨想太多了吧。在民主社會，人民參加遊行，直接表達意見是很普遍的。妳表妹關心公共議題是件很好的事啊。|zhǐ bú guò cān jiā yóu xíng ér yǐ， nǐ ā yí xiǎng tài duō le ba。 zài mín zhǔ shè huì， rén mín cān jiā yóu xíng， zhí jiē biǎo dá yì jiàn shì hěn pǔ biàn de。 nǐ biǎo mèi guān xīn gōng gòng yì tí shì jiàn hěn hǎo de shì a。|Chỉ là tham gia diễu hành thôi, dì bạn nghĩ nhiều rồi. Trong xã hội dân chủ, dân tham gia diễu hành, trực tiếp bày tỏ ý kiến rất phổ biến. Em bạn quan tâm vấn đề công cộng là chuyện tốt.
高橋健太|妳的話雖然有道理，可是要不要核能電廠是一個專業的問題，應該由專家來討論、決定。再說，一般人對這個問題沒有辦法全面了解。既然我們選了民意代表，就應該由他們代表人民處理這些問題，不是嗎？|nǐ de huà suī rán yǒu dào lǐ， kě shì yào bú yào hé néng diàn chǎng shì yí gè zhuān yè de wèn tí， yīng gāi yóu zhuān jiā lái tǎo lùn、 jué dìng。 zài shuō， yì bān rén duì zhè gè wèn tí méi yǒu bàn fǎ quán miàn liǎo jiě。 jì rán wǒ men xuǎn le mín yì dài biǎo， jiù yīng gāi yóu tā men dài biǎo rén mín chù lǐ zhè xiē wèn tí， bú shì ma？|Lời bạn tuy có lý, nhưng có cần nhà máy điện hạt nhân hay không là vấn đề chuyên môn, nên do chuyên gia thảo luận quyết định. Hơn nữa người thường không hiểu toàn diện vấn đề này. Đã bầu đại biểu dân thì họ nên thay mặt dân xử lý, phải không?
何雅婷|政治是很複雜的。我覺得民意代表關心的常常不是人民的利益，而是他們自己或是政黨的利益。我怎麼能相信他們呢？|zhèng zhì shì hěn fù zá de。 wǒ jué dé mín yì dài biǎo guān xīn de cháng cháng bú shì rén mín de lì yì， ér shì tā men zì jǐ huò shì zhèng dǎng de lì yì。 wǒ zěn me néng xiāng xìn tā men ne？|Chính trị rất phức tạp. Tôi thấy đại biểu dân thường không quan tâm lợi ích của dân mà là của bản thân hay của đảng. Sao tôi tin họ được?
陳敏萱|難道妳從來不去投票嗎？|nán dào nǐ cóng lái bú qù tóu piào ma？|Lẽ nào bạn chưa từng đi bỏ phiếu?
何雅婷|我今年滿二十歲。按照憲法的規定，有投票權了。不過年底的選舉我不會去投票的。|wǒ jīn nián mǎn èr shí suì。 àn zhào xiàn fǎ de guī dìng， yǒu tóu piào quán le。 bú guò nián dǐ de xuǎn jǔ wǒ bú huì qù tóu piào de。|Năm nay tôi tròn hai mươi tuổi. Theo hiến pháp đã có quyền bỏ phiếu. Nhưng cuối năm tôi sẽ không đi bầu.
高橋健太|我覺得妳應該去投票。如果妳不去，不就放棄了表達意見的權利嗎？|wǒ jué dé nǐ yīng gāi qù tóu piào。 rú guǒ nǐ bú qù， bú jiù fàng qì le biǎo dá yì jiàn de quán lì ma？|Tôi thấy bạn nên đi bỏ phiếu. Nếu bạn không đi chẳng phải từ bỏ quyền bày tỏ ý kiến sao?
何雅婷|不去投票也是表達意見的一種方式。這樣做表示我對所有的候選人都不滿意。|bú qù tóu piào yě shì biǎo dá yì jiàn de yì zhǒng fāng shì。 zhè yàng zuò biǎo shì wǒ duì suǒ yǒu de hòu xuǎn rén dōu bù mǎn yì。|Không đi bỏ phiếu cũng là một cách bày tỏ ý kiến. Làm vậy nghĩa là tôi không hài lòng với tất cả ứng viên.
高橋健太|可是如果大家都像妳一樣，不去投票，投票的結果就不能反映真正的民意，不是嗎？|kě shì rú guǒ dà jiā dōu xiàng nǐ yí yàng， bú qù tóu piào， tóu piào de jié guǒ jiù bù néng fǎn yìng zhēn zhèng de mín yì， bú shì ma？|Nhưng nếu ai cũng như bạn không đi bầu, kết quả sẽ không phản ánh ý dân thật sự, phải không?
陳敏萱|對啊。再說，還是有一些有理想的候選人，願意出來為人民服務。妳應該支持這些又熱心、又有能力的人，讓他們有機會為大家做事。|duì a。 zài shuō， hái shì yǒu yì xiē yǒu lǐ xiǎng de hòu xuǎn rén， yuàn yì chū lái wèi rén mín fú wù。 nǐ yīng gāi zhī chí zhè xiē yòu rè xīn、 yòu yǒu néng lì de rén， ràng tā men yǒu jī huì wèi dà jiā zuò shì。|Đúng vậy. Hơn nữa vẫn có ứng viên có lý tưởng sẵn sàng ra phục vụ dân. Bạn nên ủng hộ những người vừa nhiệt tình vừa có năng lực, cho họ cơ hội làm việc cho mọi người.
高橋健太|民主政治有一個好處，就是每一個職位都有任期。如果選民不滿意當選的人，下次別再選他就好了。|mín zhǔ zhèng zhì yǒu yí gè hǎo chù， jiù shì měi yí gè zhí wèi dōu yǒu rèn qī。 rú guǒ xuǎn mín bù mǎn yì dāng xuǎn de rén， xià cì bié zài xuǎn tā jiù hǎo le。|Chính trị dân chủ có một điểm tốt: mỗi chức vụ đều có nhiệm kỳ. Nếu cử tri không hài lòng người trúng cử, lần sau đừng bầu ông ta nữa.
陳敏萱|雖然民主制度並不完美，但是選民還是應該積極地表達自己的意見，這樣社會才會更好。如果我是妳，我一定會去投票的。|suī rán mín zhǔ zhì dù bìng bù wán měi， dàn shì xuǎn mín hái shì yīng gāi jī jí dì biǎo dá zì jǐ de yì jiàn， zhè yàng shè huì cái huì gèng hǎo。 rú guǒ wǒ shì nǐ， wǒ yí dìng huì qù tóu piào de。|Tuy chế độ dân chủ không hoàn hảo, cử tri vẫn nên tích cực bày tỏ ý kiến, xã hội mới tốt hơn. Nếu là bạn tôi nhất định đi bỏ phiếu.
何雅婷|好吧，我會好好考慮的。謝謝。你們真是民主政治的最佳推銷員。|hǎo ba， wǒ huì hǎo hǎo kǎo lǜ de。 xiè xiè。 nǐ men zhēn shì mín zhǔ zhèng zhì de zuì jiā tuī xiāo yuán。|Được rồi, tôi sẽ cân nhắc kỹ. Cảm ơn. Các bạn thật là nhân viên tiếp thị tốt nhất của nền chính trị dân chủ.
短文|李文彥的叔叔原來是一位知名的大學教授，在學術界有很高的地位。可是他一直想從政。他認為只有好的政策才能為人民帶來幸福、安定的生活。為了理想，他辭掉了工作，參加民意代表選舉。|lǐ wén yàn de shū shū yuán lái shì yí wèi zhī míng de dà xué jiào shòu， zài xué shù jiè yǒu hěn gāo de dì wèi。 kě shì tā yì zhí xiǎng cóng zhèng。 tā rèn wèi zhǐ yǒu hǎo de zhèng cè cái néng wèi rén mín dài lái xìng fú、 ān dìng de shēng huó。 wèi le lǐ xiǎng， tā cí diào le gōng zuò， cān jiā mín yì dài biǎo xuǎn jǔ。|Chú của Lý Văn Ngạn vốn là giáo sư đại học nổi tiếng, có địa vị cao trong giới học thuật. Nhưng ông luôn muốn làm chính trị. Ông cho rằng chỉ có chính sách tốt mới mang lại cuộc sống hạnh phúc, ổn định cho dân. Vì lý tưởng ông từ chức, tham gia tranh cử đại biểu dân.
短文|因為頭腦清楚、口才好，再加上常上電視對許多政治改革的議題提出看法，因此很受選民的歡迎。尤其是他在教育改革跟國民年金方面的努力，讓他得到選民普遍的支持，順利地連任了四屆。|yīn wèi tóu nǎo qīng chǔ、 kǒu cái hǎo， zài jiā shàng cháng shàng diàn shì duì xǔ duō zhèng zhì gǎi gé de yì tí tí chū kàn fǎ， yīn cǐ hěn shòu xuǎn mín de huān yíng。 yóu qí shì tā zài jiào yù gǎi gé gēn guó mín nián jīn fāng miàn de nǔ lì， ràng tā dé dào xuǎn mín pǔ biàn de zhī chí， shùn lì dì lián rèn le sì jiè。|Vì đầu óc minh mẫn, ăn nói giỏi, lại thường lên tivi nêu quan điểm về nhiều vấn đề cải cách chính trị nên rất được cử tri yêu mến. Nhất là nỗ lực về cải cách giáo dục và lương hưu quốc dân giúp ông được cử tri ủng hộ rộng rãi, thuận lợi tái cử bốn khóa.
短文|不過，上一屆的選舉，雖然他的民意支持度在所有的候選人當中一直是最高的，結果卻落選了。他覺得很失望。他本來以為，中間選民會把票投給他，沒想到得票率不如預期。太太看他這麼難過，建議暫時先回鄉下老家休息一陣子，再考慮下一步怎麼走。|bú guò， shàng yí jiè de xuǎn jǔ， suī rán tā de mín yì zhī chí dù zài suǒ yǒu de hòu xuǎn rén dāng zhōng yì zhí shì zuì gāo de， jié guǒ què luò xuǎn le。 tā jué dé hěn shī wàng。 tā běn lái yǐ wèi， zhōng jiān xuǎn mín huì bǎ piào tóu gěi tā， méi xiǎng dào dé piào lǜ bù rú yù qī。 tài tài kàn tā zhè me nán guò， jiàn yì zàn shí xiān huí xiāng xià lǎo jiā xiū xī yí zhèn zi， zài kǎo lǜ xià yí bù zěn me zǒu。|Nhưng kỳ bầu cử trước, tuy mức ủng hộ của ông luôn cao nhất trong các ứng viên, kết quả lại thất cử. Ông rất thất vọng. Ông vốn nghĩ cử tri trung dung sẽ bỏ phiếu cho mình, không ngờ tỷ lệ phiếu không như dự kiến. Vợ thấy ông buồn bèn khuyên tạm về quê nghỉ một thời gian rồi tính bước tiếp theo.
短文|回到老家以後，因為以前從政形象好，家鄉的人大大小小的事都來找叔叔商量，他也盡可能利用自己的人脈和資源幫助了不少弱勢家庭。沒過多久，有一家出版社老闆要退休，可是孩子不願意接他的事業。老闆找到了李文彥的叔叔。|huí dào lǎo jiā yǐ hòu， yīn wèi yǐ qián cóng zhèng xíng xiàng hǎo， jiā xiāng de rén dà dà xiǎo xiǎo de shì dōu lái zhǎo shū shū shāng liáng， tā yě jǐn kě néng lì yòng zì jǐ de rén mài hé zī yuán bāng zhù le bù shǎo ruò shì jiā tíng。 méi guò duō jiǔ， yǒu yì jiā chū bǎn shè lǎo bǎn yào tuì xiū， kě shì hái zi bú yuàn yì jiē tā de shì yè。 lǎo bǎn zhǎo dào le lǐ wén yàn de shū shū。|Về quê, vì trước đây làm chính trị có hình ảnh tốt, người quê việc lớn nhỏ đều đến bàn với chú; ông cũng hết sức dùng quan hệ và nguồn lực giúp nhiều gia đình yếu thế. Không lâu sau, ông chủ một nhà xuất bản sắp nghỉ hưu mà con không muốn nối nghiệp. Ông chủ tìm đến chú của Văn Ngạn.
短文|經過考慮，叔叔答應買下出版社，並且在鄉下開了一家書店。他到處請認識的人捐出二手書、捐錢，甚至請大學生下課以後過來義務教孩子英文。另外，他還在書店裡幫小農賣有機農產品，把賺來的錢當做英文班的經費。|jīng guò kǎo lǜ， shū shū dá yīng mǎi xià chū bǎn shè， bìng qiě zài xiāng xià kāi le yì jiā shū diàn。 tā dào chù qǐng rèn shí de rén juān chū èr shǒu shū、 juān qián， shèn zhì qǐng dà xué shēng xià kè yǐ hòu guò lái yì wù jiào hái zi yīng wén。 lìng wài， tā hái zài shū diàn lǐ bāng xiǎo nóng mài yǒu jī nóng chǎn pǐn， bǎ zhuàn lái de qián dāng zuò yīng wén bān de jīng fèi。|Sau cân nhắc, chú nhận mua nhà xuất bản và mở một hiệu sách ở quê. Ông khắp nơi nhờ người quen quyên sách cũ, quyên tiền, thậm chí mời sinh viên tan học đến dạy tiếng Anh miễn phí cho trẻ. Ngoài ra ông còn bán nông sản hữu cơ giúp tiểu nông trong hiệu sách, dùng tiền lời làm kinh phí lớp tiếng Anh.
短文|日子雖然過得很充實，叔叔也很滿意現在的生活，但是隨著選舉越來越接近，叔叔也開始考慮要不要再出來競選民意代表。也許回到政治界，有了權力，他能為更多人服務。但是也許離開政治、離開城市，他為大家服務的理想更容易實現。誰知道呢？|rì zi suī rán guò dé hěn chōng shí， shū shū yě hěn mǎn yì xiàn zài de shēng huó， dàn shì suí zhù xuǎn jǔ yuè lái yuè jiē jìn， shū shū yě kāi shǐ kǎo lǜ yào bú yào zài chū lái jìng xuǎn mín yì dài biǎo。 yě xǔ huí dào zhèng zhì jiè， yǒu le quán lì， tā néng wèi gèng duō rén fú wù。 dàn shì yě xǔ lí kāi zhèng zhì、 lí kāi chéng shì， tā wèi dà jiā fú wù de lǐ xiǎng gèng róng yì shí xiàn。 shuí zhī dào ne？|Cuộc sống tuy phong phú, chú cũng hài lòng hiện tại, nhưng khi bầu cử gần kề, chú bắt đầu cân nhắc có nên tái tranh cử không. Có lẽ trở lại chính trường có quyền lực thì phục vụ được nhiều người hơn. Nhưng cũng có thể rời chính trị, rời thành phố, lý tưởng phục vụ mọi người dễ thành hiện thực hơn. Ai biết được?`}}]};
BOOKS[4]={lessons:[{n:1,zh:"十七歲還是二十五歲？",vi:"17 tuổi hay 25 tuổi?",v:`小玲|xiǎolíng|Tiểu Linh (nữ)|Name
阿建|ājiàn|A Kiến (nam)|Name
聊天室|liáotiānshì|phòng chat|N
上班族|shàngbānzú|dân văn phòng|N
與其|yǔqí|thay vì|Conj
冷清|lěngqīng|vắng vẻ, lạnh lẽo|Vs
高就|gāojiù|làm ở đâu (cách hỏi lịch sự)|Vi
部門|bùmén|bộ phận, phòng ban|N
厲害|lìhài|giỏi, ghê gớm|Vs
加班|jiābān|làm thêm giờ|V-sep
類|lèi|loại|M
恐怖片|kǒngbùpiàn|phim kinh dị|N
愛情片|àiqíngpiàn|phim tình cảm|N
嚇|xià|dọa, sợ|Vp
哭|kū|khóc|V
上癮|shàngyǐn|nghiện, mê|Vp
刺激|cìjī|kích thích, hồi hộp|Vs
簡直|jiǎnzhí|quả thực, đúng là|Adv
膽子|dǎnzi|gan, lá gan|N
部|bù|bộ (lượng từ cho phim)|M
限制級|xiànzhìjí|phim giới hạn độ tuổi|N
電影院|diànyǐngyuàn|rạp chiếu phim|N
呃|è|ờ… (ngập ngừng, ngượng)|Ptc
建設公司|jiànshègōngsī|công ty xây dựng|Phrase
業務經理|yèwùjīnglǐ|giám đốc kinh doanh|Phrase
室內設計|shìnèishèjì|thiết kế nội thất|Phrase
溫暖|wēnnuǎn|ấm áp|Vs
目前|mùqián|hiện nay|Adv
所|suǒ|ngôi (lượng từ cho trường)|M
就讀|jiùdú|đang theo học|Vi
不至於|búzhìyú|không đến nỗi|Adv
但|dàn|nhưng (trang trọng)|Conj
放學|fàngxué|tan học|Vp
後|hòu|sau (trang trọng)|N
解決|jiějué|giải quyết|V
寂寞|jìmò|cô đơn|Vs
網友|wǎngyǒu|bạn trên mạng|N
陪伴|péibàn|ở bên cạnh, bầu bạn|V
電腦|diànnǎo|máy tính|N
進入|jìnrù|bước vào|V
線上|xiànshàng|trực tuyến|N
感情|gǎnqíng|tình cảm|N
小氣|xiǎoqì|keo kiệt|Vs
時|shí|khi (trang trọng)|N
往往|wǎngwǎng|thường thường|Adv
打氣|dǎqì|cổ vũ|Vi
安慰|ānwèi|an ủi|V
心裡|xīnlǐ|trong lòng|N
大膽|dàdǎn|gan dạ|Vs
紓解|shūjiě|giải tỏa|V
轉換|zhuǎnhuàn|chuyển đổi|V
虛擬|xūnǐ|ảo|Vs-attr
現實|xiànshí|thực tế|Vs
心理|xīnlǐ|tâm lý|N
即使|jíshǐ|dù cho|Conj
責備|zébèi|trách mắng|V
期待|qīdài|kỳ vọng|N
喘|chuǎn|thở dốc|V-sep
自在|zìzài|thoải mái|Vs
交友|jiāoyǒu|kết bạn|Vi
暴力|bàolì|bạo lực|N
點|diǎn|nhấp (chuột)|V
懂得|dǒngde|biết cách|Vst
陷阱|xiànjǐng|cái bẫy|N
明星高中|míngxīnggāozhōng|trường cấp ba danh tiếng|Phrase
早出晚歸|zǎochūwǎnguī|đi sớm về khuya|Phrase
打開|dǎkāi|mở ra|Phrase
喘不過氣|chuǎnbúguòqì|ngộp thở|Phrase
躲進|duǒjìn|trốn vào|Phrase`,d:{l:`阿建|小玲，第一次看到妳。妳是學生還是上班族？|xiǎo líng， dì yī cì kàn dào nǐ。 nǐ shì xué shēng hái shì shàng bān zú？|Tiểu Linh, lần đầu thấy bạn. Bạn là học sinh hay dân văn phòng?
小玲|我是上班族，剛下班回到家。|wǒ shì shàng bān zú， gāng xià bān huí dào jiā。|Mình là dân văn phòng, vừa tan làm về đến nhà.
阿建|剛到家？這麼晚？真辛苦！|gāng dào jiā？ zhè me wǎn？ zhēn xīn kǔ！|Vừa về đến nhà? Muộn thế? Vất vả quá!
小玲|不晚啊，現在才八點半而已。平常我都九點多才下班，有時候甚至工作到十點多。而且我自己一個人住，與其回到冷清的家，不如留在辦公室，還有同事陪我吃飯。|bù wǎn a， xiàn zài cái bā diǎn bàn ér yǐ。 píng cháng wǒ dōu jiǔ diǎn duō cái xià bān， yǒu shí hòu shèn zhì gōng zuò dào shí diǎn duō。 ér qiě wǒ zì jǐ yí gè rén zhù， yǔ qí huí dào lěng qīng de jiā， bù rú liú zài bàn gōng shì， hái yǒu tóng shì péi wǒ chī fàn。|Đâu có muộn, mới tám giờ rưỡi thôi. Thường mình chín giờ mấy mới tan, có khi làm đến hơn mười giờ. Hơn nữa mình sống một mình, thay vì về căn nhà vắng vẻ thà ở văn phòng, còn có đồng nghiệp ăn cơm cùng.
阿建|妳幾歲？單身嗎？沒跟家人住在一起嗎？|nǐ jǐ suì？ dān shēn ma？ méi gēn jiā rén zhù zài yì qǐ ma？|Bạn bao nhiêu tuổi? Độc thân à? Không sống cùng gia đình sao?
小玲|二十五歲，單身。家在台南，大學畢業後來台北工作，自己在外面租房子。你呢？|èr shí wǔ suì， dān shēn。 jiā zài tái nán， dà xué bì yè hòu lái tái běi gōng zuò， zì jǐ zài wài miàn zū fáng zi。 nǐ ne？|Hai mươi lăm tuổi, độc thân. Nhà ở Đài Nam, tốt nghiệp đại học lên Đài Bắc làm việc, tự thuê nhà bên ngoài. Còn bạn?
阿建|我也單身，三十二歲。|wǒ yě dān shēn， sān shí èr suì。|Mình cũng độc thân, ba mươi hai tuổi.
小玲|在哪裡高就？|zài nǎ lǐ gāo jiù？|Bạn làm ở đâu?
阿建|我在建設公司上班，是業務經理。部門裡有二十幾個人。|wǒ zài jiàn shè gōng sī shàng bān， shì yè wù jīng lǐ。 bù mén lǐ yǒu èr shí jǐ gè rén。|Mình làm ở công ty xây dựng, là giám đốc kinh doanh. Phòng có hơn hai mươi người.
小玲|你才三十二歲就已經是業務經理了，真厲害！你的工作能力一定很強。|nǐ cái sān shí èr suì jiù yǐ jīng shì yè wù jīng lǐ le， zhēn lì hài！ nǐ de gōng zuò néng lì yí dìng hěn qiáng。|Bạn mới ba mươi hai đã là giám đốc kinh doanh, giỏi quá! Năng lực làm việc chắc rất mạnh.
阿建|還可以。妳在哪裡工作呢？|hái kě yǐ。 nǐ zài nǎ lǐ gōng zuò ne？|Cũng tạm. Còn bạn làm ở đâu?
小玲|我在一家室內設計公司工作，畢業才兩年，經驗還不夠，所以工作常常做不完，得常加班。|wǒ zài yì jiā shì nèi shè jì gōng sī gōng zuò， bì yè cái liǎng nián， jīng yàn hái bú gòu， suǒ yǐ gōng zuò cháng cháng zuò bù wán， dé cháng jiā bān。|Mình làm ở một công ty thiết kế nội thất, tốt nghiệp mới hai năm, kinh nghiệm chưa đủ nên việc hay làm không xong, phải thường tăng ca.
阿建|妳的興趣是什麼？有空的時候做些什麼？|nǐ de xìng qù shì shén me？ yǒu kòng de shí hòu zuò xiē shén me？|Sở thích của bạn là gì? Lúc rảnh làm gì?
小玲|看書、看電影、吃美食。|kàn shū、 kàn diàn yǐng、 chī měi shí。|Đọc sách, xem phim, ăn ngon.
阿建|妳愛看哪類電影？|nǐ ài kàn nǎ lèi diàn yǐng？|Bạn thích xem loại phim nào?
小玲|我最愛看恐怖片。|wǒ zuì ài kàn kǒng bù piàn。|Mình thích xem phim kinh dị nhất.
阿建|恐怖片！妳敢看恐怖片！我以為女生都只喜歡看浪漫的愛情片。好多女生都因為覺得恐怖片太可怕而被嚇哭了。|kǒng bù piàn！ nǐ gǎn kàn kǒng bù piàn！ wǒ yǐ wèi nǚ shēng dōu zhǐ xǐ huān kàn làng màn de ài qíng piàn。 hǎo duō nǚ shēng dōu yīn wèi jué dé kǒng bù piàn tài kě pà ér bèi xià kū le。|Phim kinh dị! Bạn dám xem phim kinh dị! Mình tưởng con gái chỉ thích phim tình cảm lãng mạn. Nhiều cô vì thấy phim kinh dị quá đáng sợ mà bị dọa khóc.
小玲|並不是所有的女生都喜歡看愛情片，我就不喜歡，愛情片無聊死了！剛開始看恐怖片的時候，我也怕得不得了，但是看著看著就上癮了。現在覺得很刺激呢！|bìng bú shì suǒ yǒu de nǚ shēng dōu xǐ huān kàn ài qíng piàn， wǒ jiù bù xǐ huān， ài qíng piàn wú liáo sǐ le！ gāng kāi shǐ kàn kǒng bù piàn de shí hòu， wǒ yě pà dé bù dé le， dàn shì kàn zhù kàn zhù jiù shàng yǐn le。 xiàn zài jué dé hěn cì jī ne！|Không phải con gái nào cũng thích phim tình cảm, mình thì không, phim tình cảm chán chết! Lúc mới xem phim kinh dị mình cũng sợ lắm, nhưng xem mãi rồi nghiện. Giờ thấy rất hồi hộp!
阿建|別說女生，就是男生也有很多不敢看恐怖片的。|bié shuō nǚ shēng， jiù shì nán shēng yě yǒu hěn duō bù gǎn kàn kǒng bù piàn de。|Đừng nói con gái, con trai cũng có nhiều người không dám xem.
小玲|不敢看恐怖片的男生簡直不是男生！膽子比我還小！|bù gǎn kàn kǒng bù piàn de nán shēng jiǎn zhí bú shì nán shēng！ dǎn zi bǐ wǒ hái xiǎo！|Con trai không dám xem phim kinh dị đúng là không phải con trai! Gan còn nhỏ hơn mình!
阿建|好啦！好啦！別這麼激動，下次我們一起去找部恐怖片看吧！|hǎo la！ hǎo la！ bié zhè me jī dòng， xià cì wǒ men yì qǐ qù zhǎo bù kǒng bù piàn kàn ba！|Thôi nào! Đừng kích động thế, lần sau cùng tìm một bộ phim kinh dị xem nhé!
小玲|好啊！可是有的恐怖片是限制級的，我不能去電影院看。|hǎo a！ kě shì yǒu de kǒng bù piàn shì xiàn zhì jí de， wǒ bù néng qù diàn yǐng yuàn kàn。|Được! Nhưng có phim kinh dị bị giới hạn độ tuổi, mình không thể vào rạp xem.
阿建|為什麼？妳不是二十五歲嗎？|wèi shén me？ nǐ bú shì èr shí wǔ suì ma？|Tại sao? Chẳng phải bạn hai mươi lăm tuổi sao?
小玲|呃……|è ……|Ờ…
短文|十七歲的小玲是家裡的獨生女，目前在一所明星高中就讀。爸爸從事新聞媒體方面的工作，早出晚歸；媽媽的工作不至於那麼忙，但也常需要加班。因此，小玲放學後回到冷清的家，晚餐都是自己解決。|shí qī suì de xiǎo líng shì jiā lǐ de dú shēng nǚ， mù qián zài yì suǒ míng xīng gāo zhōng jiù dú。 bà bà cóng shì xīn wén méi tǐ fāng miàn de gōng zuò， zǎo chū wǎn guī； mā mā de gōng zuò bú zhì yú nà me máng， dàn yě cháng xū yào jiā bān。 yīn cǐ， xiǎo líng fàng xué hòu huí dào lěng qīng de jiā， wǎn cān dōu shì zì jǐ jiě jué。|Tiểu Linh mười bảy tuổi là con gái một, hiện học ở một trường cấp ba danh tiếng. Bố làm trong ngành truyền thông báo chí, đi sớm về khuya; công việc mẹ không đến nỗi bận như vậy nhưng cũng thường phải tăng ca. Vì thế tan học về căn nhà vắng vẻ, Tiểu Linh tự lo bữa tối.
短文|雖然這樣，小玲並不寂寞，因為有許多網友陪伴她。每天小玲一打開電腦，進入聊天室，就有許多網友在線上聊著今天發生的大小事。有人聊著感情的問題，有人抱怨老闆太小氣……。|suī rán zhè yàng， xiǎo líng bìng bú jì mò， yīn wèi yǒu xǔ duō wǎng yǒu péi bàn tā。 měi tiān xiǎo líng yì dǎ kāi diàn nǎo， jìn rù liáo tiān shì， jiù yǒu xǔ duō wǎng yǒu zài xiàn shàng liáo zhù jīn tiān fā shēng de dà xiǎo shì。 yǒu rén liáo zhù gǎn qíng de wèn tí， yǒu rén bào yuàn lǎo bǎn tài xiǎo qì ……。|Dù vậy Tiểu Linh không cô đơn vì có nhiều bạn mạng bên cạnh. Mỗi ngày vừa mở máy vào phòng chat là có nhiều người online trò chuyện chuyện lớn nhỏ hôm nay. Có người nói chuyện tình cảm, có người than ông chủ keo kiệt…
短文|網友們看見小玲上線了，都會熱情地跟她打招呼。在她心情不好時，大家往往會給她加油打氣、安慰她。在小玲心裡，這個聊天室裡住著很多沒見過面的兄弟姐妹。雖然她在學校裡也有好朋友，但在網路上好像更能放心大膽地聊。|wǎng yǒu men kàn jiàn xiǎo líng shàng xiàn le， dōu huì rè qíng dì gēn tā dǎ zhāo hū。 zài tā xīn qíng bù hǎo shí， dà jiā wǎng wǎng huì gěi tā jiā yóu dǎ qì、 ān wèi tā。 zài xiǎo líng xīn lǐ， zhè gè liáo tiān shì lǐ zhù zhù hěn duō méi jiàn guò miàn de xiōng dì jiě mèi。 suī rán tā zài xué xiào lǐ yě yǒu hǎo péng yǒu， dàn zài wǎng lù shàng hǎo xiàng gèng néng fàng xīn dà dǎn dì liáo。|Bạn mạng thấy Tiểu Linh online đều nhiệt tình chào hỏi. Khi cô buồn, mọi người thường cổ vũ, an ủi. Trong lòng cô, phòng chat này có nhiều anh chị em chưa từng gặp mặt. Tuy ở trường cô cũng có bạn thân nhưng trên mạng dường như càng yên tâm nói chuyện thoải mái.
短文|另外，玩線上遊戲也是小玲紓解壓力的方法，讀書讀累了，就玩一下，不但可以轉換心情，有的跟歷史有關的遊戲還可以讓小玲對歷史更了解呢。|lìng wài， wán xiàn shàng yóu xì yě shì xiǎo líng shū jiě yā lì de fāng fǎ， dú shū dú lèi le， jiù wán yí xià， bú dàn kě yǐ zhuǎn huàn xīn qíng， yǒu de gēn lì shǐ yǒu guān de yóu xì hái kě yǐ ràng xiǎo líng duì lì shǐ gèng liǎo jiě ne。|Ngoài ra chơi game online cũng là cách Tiểu Linh giải tỏa áp lực, học mệt thì chơi một lát, không chỉ đổi tâm trạng, có game liên quan lịch sử còn giúp cô hiểu lịch sử hơn.
短文|對小玲來說，網路的虛擬關係比現實生活中的關係簡單多了。在網路世界裡，所有的事情都可以得到安慰和支持，不會有心理負擔，即使做錯了，也不會有人責備；在現實生活中，家人的期待、學校裡的競爭都讓她喘不過氣來。躲進網路世界裡，比較自在。|duì xiǎo líng lái shuō， wǎng lù de xū nǐ guān xì bǐ xiàn shí shēng huó zhōng de guān xì jiǎn dān duō le。 zài wǎng lù shì jiè lǐ， suǒ yǒu de shì qíng dōu kě yǐ dé dào ān wèi hé zhī chí， bú huì yǒu xīn lǐ fù dān， jí shǐ zuò cuò le， yě bú huì yǒu rén zé bèi； zài xiàn shí shēng huó zhōng， jiā rén de qī dài、 xué xiào lǐ de jìng zhēng dōu ràng tā chuǎn bú guò qì lái。 duǒ jìn wǎng lù shì jiè lǐ， bǐ jiào zì zài。|Với Tiểu Linh, quan hệ ảo trên mạng đơn giản hơn nhiều so với quan hệ ngoài đời. Trong thế giới mạng mọi chuyện đều được an ủi, ủng hộ, không có gánh nặng tâm lý, dù làm sai cũng không ai trách; ngoài đời kỳ vọng của gia đình và cạnh tranh ở trường khiến cô ngộp thở. Trốn vào thế giới mạng thoải mái hơn.
短文|雖然小玲常常跟網友聊天，但是小玲只是聊著玩的。她知道網路交友有時候很危險，所以色情、暴力網站她都不會點進去；她也知道懂得保護自己，才不會掉進這種網路陷阱裡。|suī rán xiǎo líng cháng cháng gēn wǎng yǒu liáo tiān， dàn shì xiǎo líng zhǐ shì liáo zhù wán de。 tā zhī dào wǎng lù jiāo yǒu yǒu shí hòu hěn wēi xiǎn， suǒ yǐ sè qíng、 bào lì wǎng zhàn tā dōu bú huì diǎn jìn qù； tā yě zhī dào dǒng de bǎo hù zì jǐ， cái bú huì diào jìn zhè zhǒng wǎng lù xiàn jǐng lǐ。|Tuy Tiểu Linh hay trò chuyện với bạn mạng nhưng chỉ chat cho vui. Cô biết kết bạn trên mạng đôi khi nguy hiểm nên trang web khiêu dâm, bạo lực cô không bao giờ nhấp vào; cô cũng biết biết bảo vệ bản thân mới không rơi vào bẫy mạng.`}},{n:2,zh:"眼睛、耳朵的饗宴",vi:"Bữa tiệc cho mắt và tai",v:`李雲真|lǐyúnzhēn|Lý Vân Chân (nữ)|Name
眼睛|yǎnjīng|mắt|N
耳朵|ěrduǒ|tai|N
饗宴|xiǎngyàn|bữa tiệc, yến tiệc|N
打扮|dǎbàn|trang điểm, ăn diện|V
音樂廳|yīnlètīng|nhà hát hòa nhạc|N
表演|biǎoyǎn|biểu diễn|N
整齊|zhěngqí|chỉnh tề, gọn gàng|Vs
穿著|chuānzhù|cách ăn mặc|N
丟臉|diūliǎn|mất mặt|Vs-sep
短褲|duǎnkù|quần short|N
涼鞋|liángxié|dép xăng-đan|N
擋|dǎng|chặn, ngăn|V
演出者|yǎnchūzhě|người biểu diễn|N
尊重|zūnzhòng|tôn trọng|Vst
社交|shèjiāo|giao tiếp xã hội|N
免得|miǎnde|để khỏi, kẻo|Conj
中場|zhōngchǎng|giờ nghỉ giữa chương trình|N
準時|zhǔnshí|đúng giờ|Vs
禮貌|lǐmào|lịch sự|N
或|huò|hoặc (trang trọng)|Conj
熟|shú|quen thuộc, thân|Vs
提|tí|nhắc đến|V
咳嗽|késòu|ho|Vi
關|guān|tắt|V
哇|wa|ôi chao|Ptc
水準|shuǐzhǔn|trình độ, đẳng cấp|N
手冊|shǒucè|cẩm nang, tập hướng dẫn|N
洗手間|xǐshǒujiān|nhà vệ sinh|N
提醒|tíxǐng|nhắc nhở|V
響|xiǎng|vang lên, kêu|Vp
糟|zāo|tệ, hỏng bét|Vs
噓|xū|suỵt|Ptc
看不成|kànbùchéng|không xem được|Phrase
聯絡感情|liánluògǎnqíng|gắn kết tình cảm|Phrase
擤鼻涕|xǐngbítì|xì mũi|Phrase
場|chǎng|buổi (lượng từ cho buổi diễn)|M
強調|qiángdiào|nhấn mạnh|V
團體|tuántǐ|nhóm, đoàn thể|N
千萬|qiānwàn|nhất định (phải)|Adv
鋼琴|gāngqín|đàn piano|N
小提琴|xiǎotíqín|vi-ô-lông|N
古典|gǔdiǎn|cổ điển|Vs
畫家|huàjiā|họa sĩ|N
畫|huà|vẽ, tranh|V
舞蹈|wǔdǎo|múa|N
文學|wénxué|văn học|N
繪畫|huìhuà|hội họa|N
等|děng|vân vân|Ptc
寺廟|sìmiào|đền chùa|N
表現|biǎoxiàn|biểu hiện|V
之|zhī|của (văn ngôn)|Ptc
劇情|jùqíng|cốt truyện|N
導演|dǎoyǎn|đạo diễn|N
所|suǒ|(trợ từ danh hóa trước động từ)|Ptc
紅|hóng|nổi tiếng|Vs
明星|míngxīng|ngôi sao|N
演技|yǎnjì|diễn xuất|N
得|dé|đạt được|Vpt
獎|jiǎng|giải thưởng|N
廣場|guǎngchǎng|quảng trường|N
仔細|zǎixì|cẩn thận, tỉ mỉ|Adv
留意|liúyì|lưu ý|Vst
處處|chùchù|khắp nơi|Adv
滿足|mǎnzú|thỏa mãn|Vst
豐盛|fēngshèng|thịnh soạn, phong phú|Vs
國家戲劇院|guójiāxìjùyuàn|Nhà hát Quốc gia|Name
雲門舞集|yúnménwǔjí|Vân Môn Vũ Tập (đoàn múa)|Name
國家音樂廳|guójiāyīnlètīng|Nhà hát hòa nhạc Quốc gia|Name
金馬影展|jīnmǎyǐngzhǎn|Liên hoan phim Kim Mã|Name
現代舞|xiàndàiwǔ|múa đương đại|Phrase
無人不知|wúrénbùzhī|ai cũng biết|Phrase
無人不曉|wúrénbùxiǎo|ai cũng hay|Phrase
百聞不如一見|bǎiwénbùrúyíjiàn|trăm nghe không bằng một thấy|Phrase
老街|lǎojiē|phố cổ|Phrase
街頭藝術|jiētóuyìshù|nghệ thuật đường phố|Phrase
裝置藝術|zhuāngzhìyìshù|nghệ thuật sắp đặt|Phrase
填飽|tiánbǎo|làm no bụng|Phrase
口腹之慾|kǒufùzhīyù|thú ăn uống|Phrase`,d:{l:`李雲真|快一點，打扮好了沒有？遲到的話，音樂廳就不讓我們進去，表演恐怕就看不成了。|kuài yì diǎn， dǎ bàn hǎo le méi yǒu？ chí dào de huà， yīn lè tīng jiù bú ràng wǒ men jìn qù， biǎo yǎn kǒng pà jiù kàn bù chéng le。|Nhanh lên, trang điểm xong chưa? Đến muộn thì nhà hát không cho vào, e là không xem được buổi diễn.
白如玉|好了，好了，馬上好。妳不認為我們應該穿得正式一點嗎？萬一別人都穿得很正式怎麼辦？|hǎo le， hǎo le， mǎ shàng hǎo。 nǐ bú rèn wèi wǒ men yīng gāi chuān dé zhèng shì yì diǎn ma？ wàn yì bié rén dōu chuān dé hěn zhèng shì zěn me bàn？|Xong rồi, xong rồi, ngay đây. Bạn không nghĩ chúng ta nên ăn mặc trang trọng hơn sao? Lỡ người khác đều ăn mặc trang trọng thì sao?
李雲真|我想只要穿得整齊就可以了。我第一次去看表演的時候，以為要穿非常正式的服裝，沒想到平常的穿著就可以了。|wǒ xiǎng zhǐ yào chuān dé zhěng qí jiù kě yǐ le。 wǒ dì yī cì qù kàn biǎo yǎn de shí hòu， yǐ wèi yào chuān fēi cháng zhèng shì de fú zhuāng， méi xiǎng dào píng cháng de chuān zhù jiù kě yǐ le。|Mình nghĩ chỉ cần ăn mặc gọn gàng là được. Lần đầu mình đi xem biểu diễn tưởng phải mặc rất trang trọng, không ngờ đồ thường ngày cũng được.
白如玉|這是我第一次去，可不能丟臉。|zhè shì wǒ dì yī cì qù， kě bù néng diū liǎn。|Đây là lần đầu mình đi, không thể mất mặt.
李雲真|聽我朋友說，有一次他穿了短褲和涼鞋，就被擋在門外了。|tīng wǒ péng yǒu shuō， yǒu yí cì tā chuān le duǎn kù hé liáng xié， jiù bèi dǎng zài mén wài le。|Nghe bạn mình nói, có lần anh ấy mặc quần short và dép xăng-đan thì bị chặn ngoài cửa.
白如玉|我同意妳的看法，去看表演時，穿著整齊對演出者也算是一種尊重。每個國家的文化都不太一樣，在我的國家，欣賞藝術表演也算是一種社交活動。|wǒ tóng yì nǐ de kàn fǎ， qù kàn biǎo yǎn shí， chuān zhù zhěng qí duì yǎn chū zhě yě suàn shì yì zhǒng zūn zhòng。 měi gè guó jiā de wén huà dōu bú tài yí yàng， zài wǒ de guó jiā， xīn shǎng yì shù biǎo yǎn yě suàn shì yì zhǒng shè jiāo huó dòng。|Mình đồng ý với bạn, đi xem biểu diễn ăn mặc chỉnh tề cũng là một sự tôn trọng người diễn. Văn hóa mỗi nước không giống nhau, ở nước mình thưởng thức biểu diễn nghệ thuật cũng là một hoạt động xã giao.
李雲真|怎麼說呢？|zěn me shuō ne？|Nói sao nhỉ?
白如玉|我們邊走邊說吧，免得遲到就得等中場休息時間才能進去了。準時也是一種禮貌。|wǒ men biān zǒu biān shuō ba， miǎn de chí dào jiù dé děng zhōng chǎng xiū xī shí jiān cái néng jìn qù le。 zhǔn shí yě shì yì zhǒng lǐ mào。|Chúng ta vừa đi vừa nói, kẻo đến muộn phải đợi giờ nghỉ giữa chừng mới vào được. Đúng giờ cũng là một phép lịch sự.
李雲真|對了，妳剛說的社交活動是什麼意思？|duì le， nǐ gāng shuō de shè jiāo huó dòng shì shén me yì si？|À, hoạt động xã giao bạn vừa nói nghĩa là gì?
白如玉|因為我們沒有夜市，KTV也很少，一般人下班後，晚上能去的地方不多，欣賞藝術活動可以跟朋友或同事聯絡感情。|yīn wèi wǒ men méi yǒu yè shì，KTV yě hěn shǎo， yì bān rén xià bān hòu， wǎn shàng néng qù de dì fāng bù duō， xīn shǎng yì shù huó dòng kě yǐ gēn péng yǒu huò tóng shì lián luò gǎn qíng。|Vì nước mình không có chợ đêm, KTV cũng ít, người bình thường tan làm tối đi được nơi không nhiều, thưởng thức nghệ thuật có thể gắn kết tình cảm với bạn bè hoặc đồng nghiệp.
李雲真|說到聯絡感情，後天我和建國要去看電影，一起去吧？|shuō dào lián luò gǎn qíng， hòu tiān wǒ hé jiàn guó yào qù kàn diàn yǐng， yì qǐ qù ba？|Nhắc đến gắn kết tình cảm, ngày kia mình và Kiến Quốc đi xem phim, cùng đi nhé?
白如玉|妳說的是英文系的林建國嗎？|nǐ shuō de shì yīng wén xì de lín jiàn guó ma？|Bạn nói là Lâm Kiến Quốc khoa tiếng Anh à?
李雲真|就是他，你們很熟嗎？|jiù shì tā， nǐ men hěn shú ma？|Chính anh ấy, hai bạn thân lắm à?
白如玉|唉！別提了，上次我們好幾個人一起去看電影，他又擤鼻涕，又不停地咳嗽，還忘了關手機。|āi！ bié tí le， shàng cì wǒ men hǎo jǐ gè rén yì qǐ qù kàn diàn yǐng， tā yòu xǐng bí tì， yòu bù tíng dì ké sòu， hái wàng le guān shǒu jī。|Ôi! Đừng nhắc nữa, lần trước mấy người bọn mình đi xem phim, anh ta vừa xì mũi, vừa ho không ngừng, còn quên tắt điện thoại.
李雲真|哇！怎麼那麼沒有水準，感冒的話就應該在家休息，看電影時手機應該關機。|wa！ zěn me nà me méi yǒu shuǐ zhǔn， gǎn mào de huà jiù yīng gāi zài jiā xiū xī， kàn diàn yǐng shí shǒu jī yīng gāi guān jī。|Chà! Sao kém ý thức thế, cảm thì nên ở nhà nghỉ, xem phim phải tắt điện thoại.
白如玉|到了！到了！還好還有15分鐘才開始。我先去買一本表演手冊。|dào le！ dào le！ hái hǎo hái yǒu 15 fēn zhōng cái kāi shǐ。 wǒ xiān qù mǎi yì běn biǎo yǎn shǒu cè。|Đến rồi! Đến rồi! May còn 15 phút mới bắt đầu. Mình đi mua tập hướng dẫn chương trình trước.
李雲真|我去一下洗手間，等一下裡面見。|wǒ qù yí xià xǐ shǒu jiān， děng yí xià lǐ miàn jiàn。|Mình đi vệ sinh một chút, lát gặp bên trong.
白如玉|妳的手機關了嗎？|nǐ de shǒu jī guān le ma？|Điện thoại bạn tắt chưa?
李雲真|謝謝妳提醒我，要不然等一下手機響了就糟了。|xiè xiè nǐ tí xǐng wǒ， yào bù rán děng yí xià shǒu jī xiǎng le jiù zāo le。|Cảm ơn bạn nhắc, không thì lát điện thoại reo là hỏng chuyện.
白如玉|噓，表演開始了。|xū， biǎo yǎn kāi shǐ le。|Suỵt, buổi diễn bắt đầu rồi.
短文|今天是白如玉來台灣以後，第一次到「國家戲劇院」看表演，她覺得非常興奮。她跟李雲真約好了，晚上要一起欣賞一場現代舞的表演。|jīn tiān shì bái rú yù lái tái wān yǐ hòu， dì yī cì dào 「guó jiā xì jù yuàn」 kàn biǎo yǎn， tā jué dé fēi cháng xìng fèn。 tā gēn lǐ yún zhēn yuē hǎo le， wǎn shàng yào yì qǐ xīn shǎng yì chǎng xiàn dài wǔ de biǎo yǎn。|Hôm nay là lần đầu Bạch Như Ngọc đến "Nhà hát Quốc gia" xem biểu diễn kể từ khi đến Đài Loan, cô rất phấn khích. Cô hẹn Lý Vân Chân tối nay cùng xem một buổi múa đương đại.
短文|在美國時，白如玉曾經看過一次現代舞的表演。她覺得現代舞很難懂，但是很有意思。另外，李雲真還特別強調，今天晚上表演的團體「雲門舞集」在台灣幾乎無人不知、無人不曉，千萬別錯過了這個難得的好機會。|zài měi guó shí， bái rú yù céng jīng kàn guò yí cì xiàn dài wǔ de biǎo yǎn。 tā jué dé xiàn dài wǔ hěn nán dǒng， dàn shì hěn yǒu yì si。 lìng wài， lǐ yún zhēn hái tè bié qiáng diào， jīn tiān wǎn shàng biǎo yǎn de tuán tǐ 「yún mén wǔ jí」 zài tái wān jǐ hū wú rén bù zhī、 wú rén bù xiǎo， qiān wàn bié cuò guò le zhè gè nán dé de hǎo jī huì。|Ở Mỹ Như Ngọc từng xem một buổi múa đương đại. Cô thấy khó hiểu nhưng rất thú vị. Vân Chân còn nhấn mạnh đoàn "Vân Môn Vũ Tập" diễn tối nay hầu như ai ở Đài Loan cũng biết, nhất định đừng bỏ lỡ cơ hội hiếm có này.
短文|「國家音樂廳」在「國家戲劇院」對面，在那裡可以欣賞到各種音樂。白如玉小時候學過鋼琴和小提琴，特別喜歡古典音樂，她打算下次要請李雲真一起來聽音樂。|「guó jiā yīn lè tīng」 zài 「guó jiā xì jù yuàn」 duì miàn， zài nà lǐ kě yǐ xīn shǎng dào gè zhǒng yīn lè。 bái rú yù xiǎo shí hòu xué guò gāng qín hé xiǎo tí qín， tè bié xǐ huān gǔ diǎn yīn lè， tā dǎ suàn xià cì yào qǐng lǐ yún zhēn yì qǐ lái tīng yīn lè。|"Nhà hát hòa nhạc Quốc gia" đối diện "Nhà hát Quốc gia", ở đó thưởng thức được đủ loại nhạc. Hồi nhỏ Như Ngọc học piano và vi-ô-lông, đặc biệt thích nhạc cổ điển, cô định lần sau mời Vân Chân cùng đến nghe nhạc.
短文|白如玉的父親是畫家，她受到父親的影響也非常喜歡畫畫。除了音樂、舞蹈和繪畫以外，她對文學、建築和電影等藝術都非常有興趣。|bái rú yù de fù qīn shì huà jiā， tā shòu dào fù qīn de yǐng xiǎng yě fēi cháng xǐ huān huà huà。 chú le yīn lè、 wǔ dǎo hé huì huà yǐ wài， tā duì wén xué、 jiàn zhù hé diàn yǐng děng yì shù dōu fēi cháng yǒu xìng qù。|Cha của Như Ngọc là họa sĩ, chịu ảnh hưởng của cha cô cũng rất thích vẽ. Ngoài âm nhạc, múa và hội họa, cô còn rất hứng thú với văn học, kiến trúc, điện ảnh…
短文|記得剛來台灣時，她常去參觀寺廟，她認為寺廟最能表現出傳統建築之美。她還聽她的同學高橋健太提過，台南有不少古蹟，其中最值得欣賞的就是台南的寺廟了。百聞不如一見，下次一定要去看看。|jì dé gāng lái tái wān shí， tā cháng qù cān guān sì miào， tā rèn wèi sì miào zuì néng biǎo xiàn chū chuán tǒng jiàn zhù zhī měi。 tā hái tīng tā de tóng xué gāo qiáo jiàn tài tí guò， tái nán yǒu bù shǎo gǔ jī， qí zhōng zuì zhí de xīn shǎng de jiù shì tái nán de sì miào le。 bǎi wén bù rú yí jiàn， xià cì yí dìng yào qù kàn kàn。|Nhớ lúc mới đến Đài Loan, cô thường đi tham quan đền chùa, cho rằng đền chùa thể hiện rõ nhất vẻ đẹp kiến trúc truyền thống. Cô còn nghe bạn Takahashi Kenta kể Đài Nam có nhiều di tích, đáng chiêm ngưỡng nhất là các đền chùa. Trăm nghe không bằng một thấy, lần sau nhất định phải đến.
短文|由於白如玉的中文進步了不少，除了參觀寺廟以外，她還常去看中文電影。上個週末她看了一部台灣電影，劇情非常特別。她想，導演所要表達的意思是現代人孤單寂寞的感覺吧。男、女主角都是台灣目前最紅的明星，他們的演技不但好，男主角還得了今年金馬影展的最佳男主角獎。|yóu yú bái rú yù de zhōng wén jìn bù le bù shǎo， chú le cān guān sì miào yǐ wài， tā hái cháng qù kàn zhòng wén diàn yǐng。 shàng gè zhōu mò tā kàn le yí bù tái wān diàn yǐng， jù qíng fēi cháng tè bié。 tā xiǎng， dǎo yǎn suǒ yào biǎo dá de yì si shì xiàn dài rén gū dān jì mò de gǎn jué ba。 nán、 nǚ zhǔ jué dōu shì tái wān mù qián zuì hóng de míng xīng， tā men de yǎn jì bú dàn hǎo， nán zhǔ jué hái dé le jīn nián jīn mǎ yǐng zhǎn de zuì jiā nán zhǔ jué jiǎng。|Do tiếng Trung của Như Ngọc tiến bộ nhiều, ngoài tham quan đền chùa cô còn hay xem phim tiếng Trung. Cuối tuần trước cô xem một phim Đài Loan, cốt truyện rất đặc biệt. Cô nghĩ điều đạo diễn muốn nói là cảm giác cô đơn của con người hiện đại. Nam nữ chính đều là ngôi sao nổi nhất Đài Loan hiện nay, diễn xuất xuất sắc, nam chính còn đoạt giải Nam chính xuất sắc nhất Kim Mã năm nay.
短文|白如玉有時逛街經過台北101大樓附近的商業廣場，或週末去淡水老街附近，都看到不少街頭藝術的演出。在我們的生活中仔細留意的話，處處都是藝術，捷運站或公園裡也有不少裝置藝術可以欣賞。|bái rú yù yǒu shí guàng jiē jīng guò tái běi 101 dà lóu fù jìn de shāng yè guǎng chǎng， huò zhōu mò qù dàn shuǐ lǎo jiē fù jìn， dōu kàn dào bù shǎo jiē tóu yì shù de yǎn chū。 zài wǒ men de shēng huó zhōng zǎi xì liú yì de huà， chù chù dōu shì yì shù， jié yùn zhàn huò gōng yuán lǐ yě yǒu bù shǎo zhuāng zhì yì shù kě yǐ xīn shǎng。|Có lúc dạo phố qua quảng trường thương mại gần Taipei 101 hoặc cuối tuần đến gần phố cổ Đạm Thủy, Như Ngọc thấy nhiều màn biểu diễn nghệ thuật đường phố. Nếu để ý kỹ trong đời sống, đâu đâu cũng là nghệ thuật, ga MRT hay công viên cũng có nhiều tác phẩm sắp đặt để chiêm ngưỡng.
短文|如果說食物能填飽我們的肚子，滿足我們的口腹之慾的話，那麼藝術就是眼睛和耳朵最豐盛的饗宴了。|rú guǒ shuō shí wù néng tián bǎo wǒ men de dǔ zi， mǎn zú wǒ men de kǒu fù zhī yù de huà， nà me yì shù jiù shì yǎn jīng hé ěr duǒ zuì fēng shèng de xiǎng yàn le。|Nếu thức ăn lấp đầy bụng, thỏa mãn thú ăn uống của chúng ta thì nghệ thuật là bữa tiệc thịnh soạn nhất cho đôi mắt và đôi tai.`}},{n:3,zh:"雲端科技",vi:"Công nghệ đám mây",v:`李文麗|lǐwénlì|Lý Văn Lệ (nữ)|Name
外婆|wàipó|bà ngoại|N
女裝|nǚzhuāng|quần áo nữ|N
何必|hébì|hà tất|Adv
指|zhǐ|chỉ, có nghĩa là|Vst
划算|huásuàn|đáng giá, có lợi|Vs
身材|shēncái|dáng người|N
模特兒|mótèér|người mẫu|N
不見得|bújiàndé|chưa chắc|Adv
仿冒品|fǎngmàopǐn|hàng nhái|N
瑕疵|xiácī|khuyết điểm, lỗi|N
圖片|túpiàn|hình ảnh|N
落差|luòchà|chênh lệch|N
提供|tígōng|cung cấp|V
資訊|zīxùn|thông tin|N
疑問|yíwèn|nghi vấn|N
嘛|ma|(trợ từ: hiển nhiên là)|Ptc
慣|guàn|quen|Ptc
瀏覽|liúlǎn|duyệt (web)|V
後悔|hòuhuǐ|hối hận|Vs
深夜|shēnyè|đêm khuya|N
任何|rènhé|bất kỳ|Det
駭客|hàikè|hacker|N
盜用|dàoyòng|dùng trộm|V
認證|rènzhèng|chứng nhận, xác thực|V/N
銀髮族|yínfàzú|người cao tuổi|N
從前|cóngqián|trước đây|N
通常|tōngcháng|thông thường|Adv
取貨|qǔhuò|lấy hàng|V-sep
付款|fùkuǎn|thanh toán|V-sep
雲端科技|yúnduānkējì|công nghệ đám mây|Phrase
宅經濟|zháijīngjì|kinh tế ở nhà|Phrase
用不慣|yòngbúguàn|không quen dùng|Phrase
退換|tuìhuàn|trả hoặc đổi hàng|Phrase
信用卡|xìnyòngkǎ|thẻ tín dụng|Phrase
縮短|suōduǎn|rút ngắn|Vpt
人們|rénmen|con người, mọi người|N
距離|jùlí|khoảng cách|N
取代|qǔdài|thay thế|V
信|xìn|thư|N
影集|yǐngjí|phim truyền hình nhiều tập|N
取得|qǔdé|thu được|V
例如|lìrú|ví dụ|Vst
民眾|mínzhòng|dân chúng|N
高速公路|gāosùgōnglù|đường cao tốc|N
前|qián|trước (trang trọng)|N
查詢|cháxún|tra cứu|V
路況|lùkuàng|tình hình giao thông|N
避開|bìkāi|tránh|V
路段|lùduàn|đoạn đường|N
若|ruò|nếu|Conj
運用|yùnyòng|vận dụng|V
病歷|bìnglì|bệnh án|N
例子|lìzi|ví dụ|N
更加|gèngjiā|càng thêm|Adv
原本|yuánběn|vốn dĩ|Adv
忙碌|mánglù|bận rộn|Vs
確實|quèshí|quả thật|Adv
控制|kòngzhì|kiểm soát|V
表弟|biǎodì|em họ trai|N
退步|tuìbù|thụt lùi|Vp
過度|guòdù|quá mức|Adv
與|yǔ|và (trang trọng)|Conj
生理|shēnglǐ|sinh lý|N
盯|dīng|nhìn chằm chằm|V
螢幕|yíngmù|màn hình|N
疲倦|píjuàn|mệt mỏi|Vs
視力|shìlì|thị lực|N
家長|jiāzhǎng|phụ huynh|N
此外|cǐwài|ngoài ra|Conj
戶外|hùwài|ngoài trời|N
人類|rénlèi|nhân loại|N
正面|zhèngmiàn|tích cực|Vs
同時|tóngshí|đồng thời|Adv
負面|fùmiàn|tiêu cực|Vs
沉迷|chénmí|đắm chìm|Vs
無形中|wúxíngzhōng|vô hình trung|Phrase
遠距教學|yuǎnjùjiàoxué|dạy học từ xa|Phrase
大吵大鬧|dàchǎodànào|làm ầm ĩ|Phrase
焦慮不安|jiāolǜbùān|lo âu bất an|Phrase
總而言之|zǒngéryánzhī|nói tóm lại|Phrase`,d:{l:`外婆|喂，文麗，這個週末妳有空嗎？我們去逛百貨公司，買幾件新衣吧！|wèi， wén lì， zhè gè zhōu mò nǐ yǒu kòng ma？ wǒ men qù guàng bǎi huò gōng sī， mǎi jǐ jiàn xīn yī ba！|Alô, Văn Lệ, cuối tuần này cháu rảnh không? Bà cháu mình đi dạo trung tâm bách hóa mua mấy bộ đồ mới nhé!
李文麗|外婆，週末我有事，網路商店就有很多流行女裝，何必去百貨公司呢？|wài pó， zhōu mò wǒ yǒu shì， wǎng lù shāng diàn jiù yǒu hěn duō liú xíng nǚ zhuāng， hé bì qù bǎi huò gōng sī ne？|Bà ơi, cuối tuần cháu có việc, cửa hàng online có nhiều đồ nữ thịnh hành, hà tất đến trung tâm bách hóa?
外婆|在網路商店買東西，很麻煩吧？|zài wǎng lù shāng diàn mǎi dōng xī， hěn má fán ba？|Mua đồ ở cửa hàng online chắc phiền lắm nhỉ?
李文麗|網路購物很簡單，現在是宅經濟時代，不會網路購物就落伍了。|wǎng lù gòu wù hěn jiǎn dān， xiàn zài shì zhái jīng jì shí dài， bú huì wǎng lù gòu wù jiù luò wǔ le。|Mua sắm online rất đơn giản, giờ là thời đại kinh tế ở nhà, không biết mua online là lạc hậu.
外婆|什麼叫「宅經濟」啊？我沒聽過！|shén me jiào 「zhái jīng jì」 a？ wǒ méi tīng guò！|"Kinh tế ở nhà" là gì vậy? Bà chưa nghe bao giờ!
李文麗|外婆，「宅」是指在家裡，「宅經濟」是指在家逛虛擬商店買東西，也就是線上購物。|wài pó，「zhái」 shì zhǐ zài jiā lǐ，「zhái jīng jì」 shì zhǐ zài jiā guàng xū nǐ shāng diàn mǎi dōng xī， yě jiù shì xiàn shàng gòu wù。|Bà ơi, "trạch" nghĩa là ở nhà, "kinh tế ở nhà" là ở nhà dạo cửa hàng ảo mua đồ, tức là mua sắm trực tuyến.
外婆|在家上網買東西會不會比較貴啊？|zài jiā shàng wǎng mǎi dōng xī huì bú huì bǐ jiào guì a？|Ở nhà lên mạng mua đồ có đắt hơn không?
李文麗|網路商店沒有店面，不需要請店員，可以省很多錢，當然比較便宜。|wǎng lù shāng diàn méi yǒu diàn miàn， bù xū yào qǐng diàn yuán， kě yǐ shěng hěn duō qián， dāng rán bǐ jiào pián yi。|Cửa hàng online không có mặt bằng, không cần thuê nhân viên, tiết kiệm nhiều tiền nên đương nhiên rẻ hơn.
外婆|比較便宜的話，那就應該在網路上買才划算，可是我的身材不好，模特兒穿起來好看，我穿，不見得好看。|bǐ jiào pián yi de huà， nà jiù yīng gāi zài wǎng lù shàng mǎi cái huá suàn， kě shì wǒ de shēn cái bù hǎo， mó tè ér chuān qǐ lái hǎo kàn， wǒ chuān， bú jiàn dé hǎo kàn。|Rẻ hơn thì nên mua trên mạng mới có lợi, nhưng dáng bà không đẹp, người mẫu mặc đẹp, bà mặc chưa chắc đẹp.
李文麗|外婆，網路商店裡的款式多得不得了。一定有合適的。|wài pó， wǎng lù shāng diàn lǐ de kuǎn shì duō dé bù dé le。 yí dìng yǒu hé shì de。|Bà ơi, mẫu mã ở cửa hàng online nhiều vô kể. Nhất định có cái hợp.
外婆|會不會買到仿冒品或是有瑕疵的東西呢？聽說網路上有的圖片跟實際的商品落差很大，我怎麼能相信賣家提供的圖片和資訊呢？|huì bú huì mǎi dào fǎng mào pǐn huò shì yǒu xiá cī de dōng xī ne？ tīng shuō wǎng lù shàng yǒu de tú piàn gēn shí jì de shāng pǐn luò chà hěn dà， wǒ zěn me néng xiāng xìn mài jiā tí gōng de tú piàn hé zī xùn ne？|Có mua phải hàng nhái hoặc có lỗi không? Nghe nói ảnh trên mạng có khi khác xa hàng thực, sao bà tin được ảnh và thông tin người bán đưa?
李文麗|要是對商品有疑問的話，可以直接上網問賣家，如果不相信那家網路商店，就不要買他們的東西嘛！|yào shì duì shāng pǐn yǒu yí wèn de huà， kě yǐ zhí jiē shàng wǎng wèn mài jiā， rú guǒ bù xiāng xìn nà jiā wǎng lù shāng diàn， jiù bú yào mǎi tā men de dōng xī ma！|Nếu có thắc mắc về hàng thì hỏi thẳng người bán trên mạng, nếu không tin cửa hàng đó thì đừng mua đồ của họ!
外婆|我這麼老了才開始用電腦，現在還用不慣，我平常只上網瀏覽，從來沒上網買過東西，我怕買了會後悔。|wǒ zhè me lǎo le cái kāi shǐ yòng diàn nǎo， xiàn zài hái yòng bú guàn， wǒ píng cháng zhǐ shàng wǎng liú lǎn， cóng lái méi shàng wǎng mǎi guò dōng xī， wǒ pà mǎi le huì hòu huǐ。|Bà già thế này mới bắt đầu dùng máy tính, giờ vẫn chưa quen, thường chỉ lên mạng xem, chưa từng mua gì, bà sợ mua rồi hối hận.
李文麗|外婆，不滿意可以退換。網路購物很方便，不必出門，不管白天還是深夜，任何時間都可以買。|wài pó， bù mǎn yì kě yǐ tuì huàn。 wǎng lù gòu wù hěn fāng biàn， bú bì chū mén， bù guǎn bái tiān hái shì shēn yè， rèn hé shí jiān dōu kě yǐ mǎi。|Bà ơi, không hài lòng có thể đổi trả. Mua online rất tiện, không cần ra khỏi nhà, bất kể ban ngày hay đêm khuya, lúc nào cũng mua được.
外婆|網路購物真的那麼好嗎？上網用信用卡買東西有沒有風險？會不會被駭客盜用？|wǎng lù gòu wù zhēn de nà me hǎo ma？ shàng wǎng yòng xìn yòng kǎ mǎi dōng xī yǒu méi yǒu fēng xiǎn？ huì bú huì bèi hài kè dào yòng？|Mua online thật sự tốt vậy sao? Lên mạng dùng thẻ tín dụng có rủi ro không? Có bị hacker lấy trộm không?
李文麗|是有風險啊！不過只要選擇經過認證的安全網站，就不會有問題了。|shì yǒu fēng xiǎn a！ bú guò zhǐ yào xuǎn zé jīng guò rèn zhèng de ān quán wǎng zhàn， jiù bú huì yǒu wèn tí le。|Có rủi ro chứ! Nhưng chỉ cần chọn trang web an toàn đã được chứng nhận thì không sao.
外婆|嗯，那我去網路上看看有沒有我喜歡的。|ń， nà wǒ qù wǎng lù shàng kàn kàn yǒu méi yǒu wǒ xǐ huān de。|Ừ, vậy bà lên mạng xem có món nào bà thích không.
李文麗|雲端科技進步了，利用網路購物的人越來越多，現在有很多銀髮族也上網買東西。上次我們去逛百貨公司，花了好多時間，妳累得走不動了。妳不記得了嗎？|yún duān kē jì jìn bù le， lì yòng wǎng lù gòu wù de rén yuè lái yuè duō， xiàn zài yǒu hěn duō yín fà zú yě shàng wǎng mǎi dōng xī。 shàng cì wǒ men qù guàng bǎi huò gōng sī， huā le hǎo duō shí jiān， nǐ lèi dé zǒu bú dòng le。 nǐ bú jì dé le ma？|Công nghệ đám mây tiến bộ, người mua sắm online ngày càng nhiều, giờ nhiều người cao tuổi cũng mua trên mạng. Lần trước đi dạo trung tâm bách hóa tốn nhiều thời gian, bà mệt đến đi không nổi. Bà không nhớ sao?
外婆|是啊！人老了，體力不如從前了，以後就上網買東西好了！噢，還有，在網路商店買東西會不會收不到呢？|shì a！ rén lǎo le， tǐ lì bù rú cóng qián le， yǐ hòu jiù shàng wǎng mǎi dōng xī hǎo le！ ō， hái yǒu， zài wǎng lù shāng diàn mǎi dōng xī huì bú huì shōu bú dào ne？|Phải rồi! Người già, thể lực không bằng trước, sau này lên mạng mua đồ cho xong! À, còn nữa, mua đồ cửa hàng online có không nhận được hàng không?
李文麗|通常有宅配和超商取貨兩種方式。要是怕收不到，就選擇超商取貨再付款的方式。外婆，妳先試試看吧！有問題再問我。|tōng cháng yǒu zhái pèi hé chāo shāng qǔ huò liǎng zhǒng fāng shì。 yào shì pà shōu bú dào， jiù xuǎn zé chāo shāng qǔ huò zài fù kuǎn de fāng shì。 wài pó， nǐ xiān shì shì kàn ba！ yǒu wèn tí zài wèn wǒ。|Thường có hai cách: giao tận nhà và lấy hàng ở cửa hàng tiện lợi. Nếu sợ không nhận được thì chọn lấy hàng ở cửa hàng tiện lợi rồi mới trả tiền. Bà cứ thử trước đi! Có vấn đề thì hỏi cháu.
短文|由於雲端科技的進步，無形中縮短了人們的距離。現代人用電子郵件取代紙筆寫信，也比較少看報紙、電視，直接在網路上看新聞、影集。越來越多人選擇網路購物、玩線上遊戲。任何人都可以把資料存在雲端上，也可以透過網路取得資訊。|yóu yú yún duān kē jì de jìn bù， wú xíng zhōng suō duǎn le rén men de jù lí。 xiàn dài rén yòng diàn zi yóu jiàn qǔ dài zhǐ bǐ xiě xìn， yě bǐ jiào shǎo kàn bào zhǐ、 diàn shì， zhí jiē zài wǎng lù shàng kàn xīn wén、 yǐng jí。 yuè lái yuè duō rén xuǎn zé wǎng lù gòu wù、 wán xiàn shàng yóu xì。 rèn hé rén dōu kě yǐ bǎ zī liào cún zài yún duān shàng， yě kě yǐ tòu guò wǎng lù qǔ dé zī xùn。|Nhờ công nghệ đám mây tiến bộ, khoảng cách giữa người với người vô hình trung rút ngắn. Người hiện đại dùng email thay giấy bút viết thư, cũng ít xem báo, tivi hơn, xem tin tức, phim thẳng trên mạng. Ngày càng nhiều người chọn mua sắm online, chơi game online. Ai cũng có thể lưu dữ liệu lên đám mây và lấy thông tin qua mạng.
短文|例如民眾開車上高速公路前，只要上網查詢路況，就可以避開塞車的路段。若要搭火車，可以利用網路訂票，等公車的時候也可以查詢公車到站時間。除了交通，雲端科技也運用在醫療、教育、商業等方面，像電子病歷、遠距教學、電子發票等等，都是很實際的例子。|lì rú mín zhòng kāi chē shàng gāo sù gōng lù qián， zhǐ yào shàng wǎng chá xún lù kuàng， jiù kě yǐ bì kāi sāi chē de lù duàn。 ruò yào dā huǒ chē， kě yǐ lì yòng wǎng lù dìng piào， děng gōng chē de shí hòu yě kě yǐ chá xún gōng chē dào zhàn shí jiān。 chú le jiāo tōng， yún duān kē jì yě yùn yòng zài yī liáo、 jiào yù、 shāng yè děng fāng miàn， xiàng diàn zi bìng lì、 yuǎn jù jiào xué、 diàn zi fā piào děng děng， dōu shì hěn shí jì de lì zi。|Ví dụ trước khi lái xe lên đường cao tốc, chỉ cần tra tình hình giao thông online là tránh được đoạn kẹt xe. Muốn đi tàu hỏa có thể đặt vé qua mạng, lúc chờ xe buýt cũng tra giờ xe đến. Ngoài giao thông, công nghệ đám mây còn dùng trong y tế, giáo dục, thương mại, như bệnh án điện tử, dạy học từ xa, hóa đơn điện tử… đều là ví dụ thực tế.
短文|雲端科技讓我們的生活更加便利，原本以為它可以幫人們節省很多時間，沒想到它卻讓有些人更忙碌了。網路上的資訊又新又有趣，確實容易讓人上癮，特別是對那些不能控制自己的人。|yún duān kē jì ràng wǒ men de shēng huó gèng jiā biàn lì， yuán běn yǐ wèi tā kě yǐ bāng rén men jié shěng hěn duō shí jiān， méi xiǎng dào tā què ràng yǒu xiē rén gèng máng lù le。 wǎng lù shàng de zī xùn yòu xīn yòu yǒu qù， què shí róng yì ràng rén shàng yǐn， tè bié shì duì nà xiē bù néng kòng zhì zì jǐ de rén。|Công nghệ đám mây làm cuộc sống tiện hơn, vốn tưởng giúp tiết kiệm nhiều thời gian, không ngờ lại khiến một số người bận hơn. Thông tin trên mạng vừa mới vừa thú vị, quả thật dễ gây nghiện, nhất là với người không kiểm soát được bản thân.
短文|像小玲的表弟只想玩線上遊戲，沒興趣念書，功課退步了很多，每天上網玩到半夜，早上起不來，上課常常遲到。父母勸他，他不但不聽，還大吵大鬧，父母只好帶他去看醫生。|xiàng xiǎo líng de biǎo dì zhǐ xiǎng wán xiàn shàng yóu xì， méi xìng qù niàn shū， gōng kè tuì bù le hěn duō， měi tiān shàng wǎng wán dào bàn yè， zǎo shàng qǐ bù lái， shàng kè cháng cháng chí dào。 fù mǔ quàn tā， tā bú dàn bù tīng， hái dà chǎo dà nào， fù mǔ zhǐ hǎo dài tā qù kàn yī shēng。|Như em họ của Tiểu Linh chỉ muốn chơi game online, không hứng thú học, bài vở sa sút nhiều, ngày nào cũng chơi đến nửa đêm, sáng dậy không nổi, đi học hay muộn. Cha mẹ khuyên thì không những không nghe còn làm ầm ĩ, cha mẹ đành dẫn đi khám bác sĩ.
短文|醫生說，過度使用網路會影響生活與健康。對生理、心理都不好。生理上，有的人因為長時間一直盯著螢幕看，眼睛容易疲倦，視力會變差。心理上，如果不能上網，就會覺得焦慮不安。即使知道不應該一直上網，也改不了。|yī shēng shuō， guò dù shǐ yòng wǎng lù huì yǐng xiǎng shēng huó yǔ jiàn kāng。 duì shēng lǐ、 xīn lǐ dōu bù hǎo。 shēng lǐ shàng， yǒu de rén yīn wèi zhǎng shí jiān yì zhí dīng zhù yíng mù kàn， yǎn jīng róng yì pí juàn， shì lì huì biàn chà。 xīn lǐ shàng， rú guǒ bù néng shàng wǎng， jiù huì jué dé jiāo lǜ bù ān。 jí shǐ zhī dào bù yīng gāi yì zhí shàng wǎng， yě gǎi bù liǎo。|Bác sĩ nói dùng mạng quá mức ảnh hưởng đời sống và sức khỏe, không tốt cho cả thể chất lẫn tâm lý. Về thể chất, có người nhìn chằm chằm màn hình lâu nên mắt dễ mệt, thị lực giảm. Về tâm lý, nếu không lên mạng được sẽ lo âu bất an. Dù biết không nên lên mạng mãi cũng không bỏ được.
短文|醫生建議家長多陪伴孩子，讓他減少上網的時間。此外，要鼓勵他多參加戶外活動，這樣他的生活才會正常。|yī shēng jiàn yì jiā zhǎng duō péi bàn hái zi， ràng tā jiǎn shǎo shàng wǎng de shí jiān。 cǐ wài， yào gǔ lì tā duō cān jiā hù wài huó dòng， zhè yàng tā de shēng huó cái huì zhèng cháng。|Bác sĩ khuyên phụ huynh ở bên con nhiều hơn để cậu giảm thời gian lên mạng. Ngoài ra nên khuyến khích tham gia hoạt động ngoài trời, như vậy cuộc sống mới bình thường.
短文|總而言之，雲端科技給人類帶來正面的影響，同時也帶來了負面的影響。我們在享受雲端科技的便利時，要控制自己，不要沉迷在網路世界裡。|zǒng ér yán zhī， yún duān kē jì gěi rén lèi dài lái zhèng miàn de yǐng xiǎng， tóng shí yě dài lái le fù miàn de yǐng xiǎng。 wǒ men zài xiǎng shòu yún duān kē jì de biàn lì shí， yào kòng zhì zì jǐ， bú yào chén mí zài wǎng lù shì jiè lǐ。|Tóm lại, công nghệ đám mây mang đến tác động tích cực cho nhân loại, đồng thời cũng mang tác động tiêu cực. Khi hưởng tiện ích của nó ta phải kiểm soát bản thân, đừng đắm chìm trong thế giới mạng.`}},{n:4,zh:"床該擺哪裡？",vi:"Giường nên đặt ở đâu?",v:`該|gāi|nên|Vaux
擺|bǎi|bày, đặt|V
總算|zǒngsuàn|cuối cùng cũng|Adv
欸|āi|ê, này|Ptc
呀|ya|hả, nhỉ (nghi vấn)|Ptc
衣櫥|yīchú|tủ quần áo|N
梳妝台|shūzhuāngtái|bàn trang điểm|N
位置|wèizhì|vị trí|N
空間|kōngjiān|không gian|N
科學|kēxué|khoa học|N
風水師|fēngshuǐshī|thầy phong thủy|N
在意|zàiyì|để ý, bận tâm|Vs
所謂|suǒwèi|cái gọi là|V
角度|jiǎodù|góc độ|N
改造|gǎizào|cải tạo|V
學問|xuéwèn|học vấn, môn học|N
居住|jūzhù|cư trú|Vi
日常|rìcháng|hằng ngày|Vs-attr
布置|bùzhì|bố trí, trang trí|N/V
凶猛|xiōngměng|hung dữ|Vs
動物|dòngwù|động vật|N
刀|dāo|dao|N
劍|jiàn|kiếm|N
脾氣|píqì|tính khí|N
暴躁|bàozào|nóng nảy|Vs
衝動|chōngdòng|bốc đồng|Vs
鏡子|jìngzi|gương|N
床腳|chuángjiǎo|chân giường|N
光|guāng|chỉ riêng|Adv
擺飾|bǎishì|đồ trang trí|N
老婆|lǎopó|vợ|N
把|bǎ|(lượng từ vật có cán)|M
欺負|qīfù|bắt nạt|V
風水學|fēngshuǐxué|phong thủy học|Name
正對門|zhèngduìmén|đối diện cửa chính|Phrase
譬如說|pìrúshuō|ví dụ|Phrase
一口氣|yìkǒuqì|một hơi|Phrase
死定了|sǐdìngle|chết chắc rồi|Phrase
地理|dìlǐ|địa lý|N
便利性|biànlìxìng|tính tiện lợi|N
周邊|zhōubiān|xung quanh|N
住宅|zhùzhái|nhà ở|N
詞|cí|từ|N
西元|xīyuán|Công nguyên|N
推翻|tuīfān|lật đổ|V
心中|xīnzhōng|trong lòng|N
名言|míngyán|danh ngôn|N
建造|jiànzào|xây dựng|V
塑造|sùzào|nhào nặn, định hình|V
命運|mìngyùn|vận mệnh|N
本身|běnshēn|bản thân|N
地標|dìbiāo|địa danh nổi bật|N
參考|cānkǎo|tham khảo|V
外觀|wàiguān|bề ngoài|N
疊|dié|chồng lên|V
盆子|pénzi|cái chậu|N
斜|xié|nghiêng|Vs
牆面|qiángmiàn|mặt tường|N
聚寶盆|jùbǎopén|chậu tụ bảo|N
角|jiǎo|góc|N
龍|lóng|rồng|N
古|gǔ|cổ|Vs-attr
錢幣|qiánbì|tiền xu|N
屋頂|wūdǐng|mái nhà|N
龜|guī|rùa|N
招財|zhāocái|chiêu tài|Vi
側門|cèmén|cửa hông|N
遮雨棚|zhēyǔpéng|mái che mưa|N
如意|rúyì|như ý (vật cát tường)|N
設計|shèjì|thiết kế|N/V
偶然|ǒurán|ngẫu nhiên|Vs
晉代|jìndài|đời Tấn|Name
郭璞|guōpú|Quách Phác|Name
英國|yīngguó|nước Anh|Name
邱吉爾|qiūjíěr|Churchill|Name
信義路|xìnyìlù|đường Tín Nghĩa|Name
松智路|sōngzhìlù|đường Tùng Trí|Name
一命二運三風水|yímìngèryùnsānfēngshuǐ|nhất mệnh nhì vận tam phong thủy|Phrase
加起來|jiāqǐlái|cộng lại|Phrase
咬錢龜|yǎoqiánguī|rùa ngậm tiền|Phrase
十全十美|shíquánshíměi|thập toàn thập mỹ|Phrase`,d:{l:`林先生|總算把所有的東西都搬過來了，累死了！|zǒng suàn bǎ suǒ yǒu de dōng xī dōu bān guò lái le， lèi sǐ le！|Cuối cùng cũng chuyển hết đồ sang, mệt chết đi được!
林太太|欸！別急著坐下，先把一些大家具擺好吧。|āi！ bié jí zhù zuò xià， xiān bǎ yì xiē dà jiā jù bǎi hǎo ba。|Này! Đừng vội ngồi, bày mấy món đồ nội thất lớn cho xong đã.
林先生|床要放在哪裡呀？衣櫥旁邊好不好？|chuáng yào fàng zài nǎ lǐ ya？ yī chú páng biān hǎo bù hǎo？|Giường đặt ở đâu nhỉ? Cạnh tủ quần áo được không?
林太太|不行！不行！不要放在那裡，放在我的梳妝台旁邊。|bù xíng！ bù xíng！ bú yào fàng zài nà lǐ， fàng zài wǒ de shū zhuāng tái páng biān。|Không được! Đừng đặt ở đó, đặt cạnh bàn trang điểm của em.
林先生|那裡太擠了，進出不方便。|nà lǐ tài jǐ le， jìn chū bù fāng biàn。|Chỗ đó chật quá, ra vào bất tiện.
林太太|那就把衣櫥跟梳妝台換個位置，空間就比較大了。|nà jiù bǎ yī chú gēn shū zhuāng tái huàn gè wèi zhì， kōng jiān jiù bǐ jiào dà le。|Vậy đổi vị trí tủ quần áo và bàn trang điểm, không gian sẽ rộng hơn.
林先生|為什麼不擺在這裡呢？|wèi shén me bù bǎi zài zhè lǐ ne？|Sao không đặt ở đây?
林太太|放在這裡會正對門，不好。|fàng zài zhè lǐ huì zhèng duì mén， bù hǎo。|Đặt ở đây sẽ đối diện thẳng cửa, không tốt.
林先生|什麼正對門，妳太迷信了吧！|shén me zhèng duì mén， nǐ tài mí xìn le ba！|Gì mà đối diện cửa, em mê tín quá!
林太太|這並不是迷信，而是有科學根據的。|zhè bìng bú shì mí xìn， ér shì yǒu kē xué gēn jù de。|Đây không phải mê tín mà có căn cứ khoa học.
林先生|什麼科學根據！還不就是風水師的那些說法。如果太在意那些說法，就什麼事都做不成了。|shén me kē xué gēn jù！ hái bú jiù shì fēng shuǐ shī de nà xiē shuō fǎ。 rú guǒ tài zài yì nà xiē shuō fǎ， jiù shén me shì dōu zuò bù chéng le。|Căn cứ khoa học gì! Chẳng phải mấy lời của thầy phong thủy sao. Nếu để ý quá thì chẳng làm nên việc gì.
林太太|才不是你說的那樣呢！所謂現代風水學，是指站在科學的角度，利用環境、改造環境的一門學問，研究的是人與居住環境的關係。你不懂不要亂說好不好！|cái bú shì nǐ shuō de nà yàng ne！ suǒ wèi xiàn dài fēng shuǐ xué， shì zhǐ zhàn zài kē xué de jiǎo dù， lì yòng huán jìng、 gǎi zào huán jìng de yì mén xué wèn， yán jiū de shì rén yǔ jū zhù huán jìng de guān xì。 nǐ bù dǒng bú yào luàn shuō hǎo bù hǎo！|Không phải như anh nói đâu! Phong thủy học hiện đại là môn học đứng từ góc độ khoa học để tận dụng và cải tạo môi trường, nghiên cứu quan hệ giữa con người và môi trường sống. Anh không hiểu đừng nói bậy!
林先生|好！那妳說風水到底跟我們的日常生活有什麼關係？|hǎo！ nà nǐ shuō fēng shuǐ dào dǐ gēn wǒ men de rì cháng shēng huó yǒu shén me guān xì？|Được! Vậy em nói phong thủy rốt cuộc liên quan gì đến đời sống thường ngày?
林太太|譬如說家裡的布置，如果在牆上掛很凶猛的動物，或是刀、劍這樣的東西，就會讓居住者的脾氣暴躁、容易衝動。又譬如說，鏡子不能正對床腳，這樣起床時容易被自己嚇到。|pì rú shuō jiā lǐ de bù zhì， rú guǒ zài qiáng shàng guà hěn xiōng měng de dòng wù， huò shì dāo、 jiàn zhè yàng de dōng xī， jiù huì ràng jū zhù zhě de pí qì bào zào、 róng yì chōng dòng。 yòu pì rú shuō， jìng zi bù néng zhèng duì chuáng jiǎo， zhè yàng qǐ chuáng shí róng yì bèi zì jǐ xià dào。|Ví dụ cách bài trí trong nhà, nếu treo trên tường động vật hung dữ hay dao, kiếm thì khiến người ở nóng tính, dễ bốc đồng. Lại như gương không được đối thẳng chân giường, như vậy lúc thức dậy dễ tự dọa mình.
林先生|等一下！等一下！妳一口氣說了那麼多，我怎麼聽得清楚？妳是說連牆上掛什麼東西都會對人的個性有影響嗎？|děng yí xià！ děng yí xià！ nǐ yì kǒu qì shuō le nà me duō， wǒ zěn me tīng dé qīng chǔ？ nǐ shì shuō lián qiáng shàng guà shén me dōng xī dōu huì duì rén de gè xìng yǒu yǐng xiǎng ma？|Khoan! Khoan! Em nói một hơi nhiều thế sao anh nghe rõ? Ý em là ngay cả treo gì trên tường cũng ảnh hưởng tính cách người sao?
林太太|對啊！光擺飾就有很多學問，你想了解的話，我以後再慢慢告訴你。|duì a！ guāng bǎi shì jiù yǒu hěn duō xué wèn， nǐ xiǎng liǎo jiě de huà， wǒ yǐ hòu zài màn màn gào sù nǐ。|Đúng vậy! Riêng đồ trang trí đã có nhiều học vấn, anh muốn hiểu thì sau này em từ từ nói.
林先生|我懂了，難怪我老婆脾氣那麼壞。那把劍可別再掛上去了！|wǒ dǒng le， nán guài wǒ lǎo pó pí qì nà me huài。 nà bǎ jiàn kě bié zài guà shàng qù le！|Anh hiểu rồi, hèn gì vợ anh tính khí tệ thế. Thanh kiếm đó đừng treo lên nữa nhé!
林太太|喂！你居然敢欺負我！你死定了！|wèi！ nǐ jū rán gǎn qī fù wǒ！ nǐ sǐ dìng le！|Này! Anh dám bắt nạt em! Anh chết chắc rồi!
林先生|好啦！好啦！開玩笑的。不過我覺得不知道這樣的事情比較好，知道家裡風水有問題，可是卻沒辦法改變，這樣不是住得很不自在嗎？|hǎo la！ hǎo la！ kāi wán xiào de。 bú guò wǒ jué dé bù zhī dào zhè yàng de shì qíng bǐ jiào hǎo， zhī dào jiā lǐ fēng shuǐ yǒu wèn tí， kě shì què méi bàn fǎ gǎi biàn， zhè yàng bú shì zhù dé hěn bú zì zài ma？|Thôi nào! Anh đùa thôi. Nhưng anh thấy không biết những chuyện này thì tốt hơn, biết phong thủy nhà có vấn đề mà không đổi được thì ở chẳng thoải mái sao?
林太太|話是這樣說沒錯，但是如果可以早一點了解，在租房子、買房子的時候就可以多注意這方面的問題，才不會一搬進去就後悔了。你說是不是？|huà shì zhè yàng shuō méi cuò， dàn shì rú guǒ kě yǐ zǎo yì diǎn liǎo jiě， zài zū fáng zi、 mǎi fáng zi de shí hòu jiù kě yǐ duō zhù yì zhè fāng miàn de wèn tí， cái bú huì yì bān jìn qù jiù hòu huǐ le。 nǐ shuō shì bú shì？|Nói thế không sai, nhưng nếu hiểu sớm hơn thì lúc thuê nhà, mua nhà có thể chú ý chuyện này, không đến nỗi vừa dọn vào đã hối hận. Anh nói có đúng không?
短文|一般來說，選一個房子，大概會考慮幾個條件：地理位置、交通的便利性、周邊的環境和價格等。隨著生活水準不斷提高，人們對選擇住宅的考慮條件更多了。不只是上面所提到的幾個，風水的好壞也成為重要的考慮條件了。|yì bān lái shuō， xuǎn yí gè fáng zi， dà gài huì kǎo lǜ jǐ gè tiáo jiàn： dì lǐ wèi zhì、 jiāo tōng de biàn lì xìng、 zhōu biān de huán jìng hé jià gé děng。 suí zhù shēng huó shuǐ zhǔn bú duàn tí gāo， rén men duì xuǎn zé zhù zhái de kǎo lǜ tiáo jiàn gèng duō le。 bù zhǐ shì shàng miàn suǒ tí dào de jǐ gè， fēng shuǐ de hǎo huài yě chéng wèi zhòng yào de kǎo lǜ tiáo jiàn le。|Thường khi chọn nhà người ta cân nhắc vài điều kiện: vị trí địa lý, giao thông tiện lợi, môi trường xung quanh và giá cả. Khi mức sống không ngừng nâng cao, điều kiện cân nhắc khi chọn nhà càng nhiều. Không chỉ mấy điều trên, phong thủy tốt xấu cũng trở thành điều kiện quan trọng.
短文|「風水」這個詞是中國晉代的郭璞（西元276年到324年）第一個提出的，到現在已經有一千七百多年了。相信風水的人認為，如果風水不值得相信，都過了一千七百多年了，怎麼可能不被推翻？中國有句話說：「一命，二運，三風水。」從這裡可以看出風水在中國人心中占了很重要的地位。|「fēng shuǐ」 zhè gè cí shì zhōng guó jìn dài de guō pú （xī yuán 276 nián dào 324 nián） dì yī gè tí chū de， dào xiàn zài yǐ jīng yǒu yì qiān qī bǎi duō nián le。 xiāng xìn fēng shuǐ de rén rèn wèi， rú guǒ fēng shuǐ bù zhí dé xiāng xìn， dōu guò le yì qiān qī bǎi duō nián le， zěn me kě néng bú bèi tuī fān？ zhōng guó yǒu jù huà shuō：「yí mìng， èr yùn， sān fēng shuǐ。」 cóng zhè lǐ kě yǐ kàn chū fēng shuǐ zài zhōng guó rén xīn zhōng zhàn le hěn zhòng yào de dì wèi。|Từ "phong thủy" do Quách Phác thời Tấn (năm 276–324) đưa ra đầu tiên, đến nay hơn 1.700 năm. Người tin phong thủy cho rằng nếu không đáng tin thì hơn 1.700 năm sao chưa bị lật đổ? Người Trung Quốc có câu "nhất mệnh, nhì vận, tam phong thủy", cho thấy phong thủy chiếm vị trí rất quan trọng trong lòng họ.
短文|英國的邱吉爾曾經說過一句名言：「人建造房子，房子塑造我們。」意思是說，房子對人的影響是很大的。從風水學的角度來看，對人的個性、健康、命運有影響的不只是房子本身，房子外面的環境以及房子裡面的布置、擺飾等都是有影響的。|yīng guó de qiū jí ěr céng jīng shuō guò yí jù míng yán：「rén jiàn zào fáng zi， fáng zi sù zào wǒ men。」 yì si shì shuō， fáng zi duì rén de yǐng xiǎng shì hěn dà de。 cóng fēng shuǐ xué de jiǎo dù lái kàn， duì rén de gè xìng、 jiàn kāng、 mìng yùn yǒu yǐng xiǎng de bù zhǐ shì fáng zi běn shēn， fáng zi wài miàn de huán jìng yǐ jí fáng zi lǐ miàn de bù zhì、 bǎi shì děng dōu shì yǒu yǐng xiǎng de。|Churchill của Anh từng có câu danh ngôn: "Con người xây nhà, ngôi nhà định hình chúng ta." Nghĩa là nhà ảnh hưởng rất lớn đến người. Theo góc độ phong thủy học, ảnh hưởng đến tính cách, sức khỏe, vận mệnh không chỉ là ngôi nhà mà cả môi trường bên ngoài, cách bài trí và đồ trang trí bên trong.
短文|拿台北的地標——台北101大樓來說，雖然它是一棟非常現代的建築，可是建築師參考了許多風水的想法。先從外觀看起，它像一個個往上疊的盆子，每八層樓是一個盆子。往外斜的牆面，讓每個盆子看起來都像個聚寶盆，每個「聚寶盆」的四個角都有代表吉祥的龍，加起來就有三十二條飛龍。|ná tái běi de dì biāo —— tái běi 101 dà lóu lái shuō， suī rán tā shì yí dòng fēi cháng xiàn dài de jiàn zhù， kě shì jiàn zhù shī cān kǎo le xǔ duō fēng shuǐ de xiǎng fǎ。 xiān cóng wài guān kàn qǐ， tā xiàng yí gè gè wǎng shàng dié de pén zi， měi bā céng lóu shì yí gè pén zi。 wǎng wài xié de qiáng miàn， ràng měi gè pén zi kàn qǐ lái dōu xiàng gè jù bǎo pén， měi gè 「jù bǎo pén」 de sì gè jiǎo dōu yǒu dài biǎo jí xiáng de lóng， jiā qǐ lái jiù yǒu sān shí èr tiáo fēi lóng。|Lấy địa danh Đài Bắc — tòa Taipei 101 — làm ví dụ, tuy là công trình rất hiện đại nhưng kiến trúc sư đã tham khảo nhiều quan niệm phong thủy. Nhìn từ ngoài, nó như những chiếc chậu xếp chồng lên, cứ tám tầng là một chậu. Mặt tường nghiêng ra ngoài khiến mỗi chậu giống một "chậu tụ bảo", bốn góc mỗi chậu có rồng cát tường, cộng lại có ba mươi hai con rồng bay.
短文|另外，大樓牆上的古錢幣和左邊的屋頂上的咬錢龜都是招財的意思。信義路正門和松智路側門上面的遮雨棚，都有十條魚、十個錢幣和十個如意，意思是十全十美。走進大樓裡面，到處可見代表吉祥的「如意」。|lìng wài， dà lóu qiáng shàng de gǔ qián bì hé zuǒ biān de wū dǐng shàng de yǎo qián guī dōu shì zhāo cái de yì si。 xìn yì lù zhèng mén hé sōng zhì lù cè mén shàng miàn de zhē yǔ péng， dōu yǒu shí tiáo yú、 shí gè qián bì hé shí gè rú yì， yì si shì shí quán shí měi。 zǒu jìn dà lóu lǐ miàn， dào chù kě jiàn dài biǎo jí xiáng de 「rú yì」。|Ngoài ra tiền cổ trên tường tòa nhà và rùa ngậm tiền trên mái bên trái đều có nghĩa chiêu tài. Mái che cửa chính đường Tín Nghĩa và cửa hông đường Tùng Trí đều có mười con cá, mười đồng tiền, mười như ý, nghĩa là thập toàn thập mỹ. Vào trong tòa nhà đâu đâu cũng thấy "như ý" tượng trưng cát tường.
短文|這些設計都不是偶然的，是建築師在參考了中國的風水學以後所設計出來的，下次如果你到台北101大樓去，可以算算裡面一共有多少個「如意」。|zhè xiē shè jì dōu bú shì ǒu rán de， shì jiàn zhù shī zài cān kǎo le zhōng guó de fēng shuǐ xué yǐ hòu suǒ shè jì chū lái de， xià cì rú guǒ nǐ dào tái běi 101 dà lóu qù， kě yǐ suàn suàn lǐ miàn yí gòng yǒu duō shǎo gè 「rú yì」。|Những thiết kế này đều không ngẫu nhiên mà do kiến trúc sư tham khảo phong thủy Trung Quốc rồi thiết kế ra; lần sau nếu bạn đến Taipei 101 có thể đếm xem bên trong tổng cộng có bao nhiêu "như ý".`}},{n:5,zh:"有夢最美",vi:"Có ước mơ là đẹp nhất",v:`排隊|páiduì|xếp hàng|V-sep
校刊|xiàokān|báo trường|N
採訪|cǎifǎng|phỏng vấn (báo chí)|V
校友|xiàoyǒu|cựu sinh viên|N
博士|bóshì|tiến sĩ|N
學位|xuéwèi|học vị|N
考|kǎo|thi|V
司機|sījī|tài xế|N
學士|xuéshì|cử nhân|N
地攤|dìtān|sạp bán hàng vỉa hè|N
現象|xiànxiàng|hiện tượng|N
稀奇|xīqí|hiếm lạ|Vs
搶|qiǎng|cướp|V
批評|pīpíng|phê bình|V
浪費|làngfèi|lãng phí|V
畢竟|bìjìng|rốt cuộc|Adv
貢獻|gòngxiàn|cống hiến|V
的確|dequè|quả thật|Adv
盲目|mángmù|mù quáng|Adv
升學|shēngxué|học lên|Vi
逃避|táobì|trốn tránh|V
就業|jiùyè|có việc làm|N/Vi
延後|yánhòu|hoãn lại|V
靠爸族|kàobàzú|nhóm ăn bám cha (dựa vào quan hệ cha)|N
啃老族|kěnlǎozú|nhóm ăn bám cha mẹ|N
收攤|shōutān|dọn hàng, đóng sạp|V-sep
清潔隊員|qīngjiéduìyuán|nhân viên vệ sinh|Phrase
擺地攤|bǎidìtān|bày bán vỉa hè|Phrase
大多數|dàduōshù|đa số|Phrase
話說回來|huàshuōhuílái|nói đi cũng phải nói lại|Phrase
自食其力|zìshíqílì|tự lực cánh sinh|Phrase
下一期|xiàyìqī|số tiếp theo|Phrase
段|duàn|đoạn (thời gian)|M
物價|wùjià|vật giá|N
上漲|shàngzhǎng|tăng giá|Vp
所得|suǒde|thu nhập|N
漲|zhǎng|tăng|V
勉強|miǎnqiáng|gắng gượng, miễn cưỡng|Vs
根本|gēnběn|căn bản, hoàn toàn|Adv
組織|zǔzhī|tổ chức|N
抗議|kàngyì|phản đối|V
地價|dìjià|giá đất|N
房價|fángjià|giá nhà|N
高漲|gāozhǎng|tăng vọt|Vi
造成|zàochéng|gây ra|V
統計|tǒngjì|thống kê|N
窮忙|qióngmáng|bận rộn nghèo khó|Vs
全球|quánqiú|toàn cầu|N
景氣|jǐngqì|tình hình kinh tế|N
施行|shīxíng|thi hành|V
薪資|xīnzī|lương bổng|N
多年|duōnián|nhiều năm|N
未|wèi|chưa (trang trọng)|Adv
調高|diàogāo|điều chỉnh tăng|V
裁員|cáiyuán|sa thải|Vp-sep
觀察|guānchá|quan sát|V
彩券|cǎiquàn|vé số|N
中獎|zhōngjiǎng|trúng thưởng|V-sep
做夢|zuòmèng|nằm mơ|Vp-sep
發財|fācái|phát tài|V-sep
臉色|liǎnsè|sắc mặt|N
報導|bàodǎo|bản tin, bài báo|N
指出|zhǐchū|chỉ ra|V
創業|chuàngyè|khởi nghiệp|Vi
餐飲業|cānyǐnyè|ngành ăn uống|N
人生|rénshēng|đời người|N
及|jí|và (trang trọng)|Conj
挑戰|tiāozhàn|thách thức|N
培養|péiyǎng|bồi dưỡng|V
實力|shílì|thực lực|N
等待|děngdài|chờ đợi|V
擁有|yōngyǒu|sở hữu|Vst
中國大陸|zhōngguódàlù|Trung Quốc đại lục|Name
存不了|cúnbùliǎo|để dành không nổi|Phrase
無殼蝸牛|wúkéwōniú|ốc sên không vỏ (người không mua nổi nhà)|Phrase
貧富不均|pínfùbùjūn|chênh lệch giàu nghèo|Phrase
苦哈哈|kǔhāhā|khổ sở, chật vật|Phrase
另謀發展|lìngmóufāzhǎn|tìm hướng phát triển khác|Phrase
恨不得|hènbùdé|ước gì được ngay|Phrase
一夜致富|yíyèzhìfù|một đêm giàu to|Phrase
一片天|yípiàntiān|một chân trời riêng|Phrase`,d:{l:`馬安同|雲真，妳也受到連續劇的影響來排隊買雞排嗎？|yún zhēn， nǐ yě shòu dào lián xù jù de yǐng xiǎng lái pái duì mǎi jī pái ma？|Vân Chân, bạn cũng chịu ảnh hưởng phim truyền hình nên đến xếp hàng mua gà rán à?
李雲真|我哪裡有時間看連續劇？我不是來買雞排的，而是為了校刊來採訪老闆的。|wǒ nǎ lǐ yǒu shí jiān kàn lián xù jù？ wǒ bú shì lái mǎi jī pái de， ér shì wèi le xiào kān lái cǎi fǎng lǎo bǎn de。|Mình đâu có thời gian xem phim? Mình không đến mua gà rán mà vì báo trường đến phỏng vấn ông chủ.
馬安同|這個賣雞排的老闆很有名嗎？|zhè gè mài jī pái de lǎo bǎn hěn yǒu míng ma？|Ông chủ bán gà rán này nổi tiếng à?
李雲真|你沒聽說過嗎？他是我們學校的校友，去年剛得到博士學位。|nǐ méi tīng shuō guò ma？ tā shì wǒ men xué xiào de xiào yǒu， qù nián gāng dé dào bó shì xué wèi。|Bạn chưa nghe sao? Ông là cựu sinh viên trường mình, năm ngoái vừa lấy bằng tiến sĩ.
馬安同|我沒聽錯吧？既然有那麼高的學歷，為什麼要在夜市裡賣雞排呢？|wǒ méi tīng cuò ba？ jì rán yǒu nà me gāo de xué lì， wèi shén me yào zài yè shì lǐ mài jī pái ne？|Mình nghe nhầm không? Đã có học vấn cao thế, sao lại bán gà rán ở chợ đêm?
李雲真|現在博士去考清潔隊員、碩士去當司機和學士擺地攤的現象在台灣越來越普遍，已經不稀奇了。|xiàn zài bó shì qù kǎo qīng jié duì yuán、 shuò shì qù dāng sī jī hé xué shì bǎi dì tān de xiàn xiàng zài tái wān yuè lái yuè pǔ biàn， yǐ jīng bù xī qí le。|Hiện nay tiến sĩ đi thi nhân viên vệ sinh, thạc sĩ làm tài xế, cử nhân bày sạp vỉa hè ở Đài Loan ngày càng phổ biến, không còn hiếm lạ.
馬安同|賣雞排並不丟臉，不偷不搶，靠自己賺錢，很好啊！|mài jī pái bìng bù diū liǎn， bù tōu bù qiǎng， kào zì jǐ zhuàn qián， hěn hǎo a！|Bán gà rán không mất mặt, không trộm không cướp, dựa vào bản thân kiếm tiền, tốt mà!
李雲真|我也這麼認為，但也聽到不少負面的看法，批評這種人浪費國家的教育資源。|wǒ yě zhè me rèn wèi， dàn yě tīng dào bù shǎo fù miàn de kàn fǎ， pī píng zhè zhǒng rén làng fèi guó jiā de jiào yù zī yuán。|Mình cũng nghĩ thế, nhưng cũng nghe nhiều ý kiến tiêu cực, chê những người này lãng phí tài nguyên giáo dục quốc gia.
馬安同|這個我可以了解，畢竟念到博士不容易，應該可以為國家貢獻更多才對。|zhè gè wǒ kě yǐ liǎo jiě， bì jìng niàn dào bó shì bù róng yì， yīng gāi kě yǐ wèi guó jiā gòng xiàn gèng duō cái duì。|Điều này mình hiểu, dù sao học đến tiến sĩ không dễ, lẽ ra có thể đóng góp nhiều hơn cho đất nước.
李雲真|這的確是個很嚴重的問題。很多人盲目升學，甚至有些學生因為要逃避就業而延後畢業的時間。|zhè de què shì gè hěn yán zhòng de wèn tí。 hěn duō rén máng mù shēng xué， shèn zhì yǒu xiē xué shēng yīn wèi yào táo bì jiù yè ér yán hòu bì yè de shí jiān。|Đây quả là vấn đề rất nghiêm trọng. Nhiều người học lên mù quáng, thậm chí có sinh viên vì muốn trốn đi làm mà hoãn thời gian tốt nghiệp.
馬安同|在我的國家並沒有這個問題，因為大多數人都念不起大學。|zài wǒ de guó jiā bìng méi yǒu zhè gè wèn tí， yīn wèi dà duō shù rén dōu niàn bù qǐ dà xué。|Ở nước mình không có vấn đề này vì đa số người không đủ tiền học đại học.
李雲真|不過話說回來，能自食其力的人比那些「靠爸族」好多了。|bú guò huà shuō huí lái， néng zì shí qí lì de rén bǐ nà xiē 「kào bà zú」 hǎo duō le。|Nhưng nói đi cũng phải nói lại, người tự lực cánh sinh tốt hơn nhiều so với "nhóm dựa vào bố".
馬安同|所謂「靠爸族」是指靠父母生活嗎？|suǒ wèi 「kào bà zú」 shì zhǐ kào fù mǔ shēng huó ma？|"Nhóm dựa vào bố" nghĩa là sống dựa vào cha mẹ à?
李雲真|大概的意思是：自己沒什麼能力，這些人之所以成功是因為父母的關係。另外還有一種人叫「啃老族」，就是自己沒有能力獨立生活，還住在家裡靠父母的人。|dà gài de yì si shì： zì jǐ méi shén me néng lì， zhè xiē rén zhī suǒ yǐ chéng gōng shì yīn wèi fù mǔ de guān xì。 lìng wài hái yǒu yì zhǒng rén jiào 「kěn lǎo zú」， jiù shì zì jǐ méi yǒu néng lì dú lì shēng huó， hái zhù zài jiā lǐ kào fù mǔ de rén。|Đại ý là bản thân không có năng lực, những người này thành công là nhờ quan hệ của cha mẹ. Còn một loại gọi là "nhóm gặm già", tức không đủ năng lực sống độc lập, vẫn ở nhà dựa cha mẹ.
馬安同|我的國家現在也有不少這種人。我沒有有錢的父母，得趕快去圖書館看書了，畢業後我得靠自己啊！|wǒ de guó jiā xiàn zài yě yǒu bù shǎo zhè zhǒng rén。 wǒ méi yǒu yǒu qián de fù mǔ， dé gǎn kuài qù tú shū guǎn kàn shū le， bì yè hòu wǒ dé kào zì jǐ a！|Nước mình giờ cũng có nhiều người như vậy. Mình không có bố mẹ giàu, phải mau đến thư viện học bài, tốt nghiệp xong phải dựa vào bản thân!
李雲真|我也該去採訪了，免得等一下老闆收攤，我就採訪不成了。|wǒ yě gāi qù cǎi fǎng le， miǎn de děng yí xià lǎo bǎn shōu tān， wǒ jiù cǎi fǎng bù chéng le。|Mình cũng nên đi phỏng vấn rồi, kẻo lát nữa ông chủ dọn hàng thì không phỏng vấn được.
馬安同|那麼，希望妳採訪順利，我等著看下一期的校刊。|nà me， xī wàng nǐ cǎi fǎng shùn lì， wǒ děng zhù kàn xià yì qī de xiào kān。|Vậy chúc bạn phỏng vấn thuận lợi, mình chờ xem số báo trường tới.
李雲真|謝謝，明天見。|xiè xiè， míng tiān jiàn。|Cảm ơn, mai gặp.
馬安同|對了，採訪完了以後，別忘了買一些「博士雞排」吃吃看。|duì le， cǎi fǎng wán le yǐ hòu， bié wàng le mǎi yì xiē 「bó shì jī pái」 chī chī kàn。|À, phỏng vấn xong đừng quên mua "gà rán tiến sĩ" ăn thử nhé.
李雲真|希望我吃了以後，也可以早一點拿到博士學位。|xī wàng wǒ chī le yǐ hòu， yě kě yǐ zǎo yì diǎn ná dào bó shì xué wèi。|Mong ăn xong mình cũng sớm lấy được bằng tiến sĩ.
短文|在台灣生活了一段時間以後，馬安同覺得台灣的物價比他剛來的時候上漲了不少。有越來越多的台灣人抱怨這種低所得、高物價的情況，什麼都漲了，就是薪水沒漲。|zài tái wān shēng huó le yí duàn shí jiān yǐ hòu， mǎ ān tóng jué dé tái wān de wù jià bǐ tā gāng lái de shí hòu shàng zhǎng le bù shǎo。 yǒu yuè lái yuè duō de tái wān rén bào yuàn zhè zhǒng dī suǒ de、 gāo wù jià de qíng kuàng， shén me dōu zhǎng le， jiù shì xīn shuǐ méi zhǎng。|Sống ở Đài Loan một thời gian, Mã An Đồng thấy vật giá tăng nhiều so với lúc mới đến. Ngày càng nhiều người Đài Loan than phiền thu nhập thấp, giá cả cao, cái gì cũng tăng chỉ lương không tăng.
短文|一般大學剛畢業的年輕人，不是找不到工作，就是每個月的薪水只能勉強生活。不少人辛苦工作了很多年，卻根本存不了什麼錢，更別說有能力買房子了。有些人還成立了「無殼蝸牛」組織，抗議台灣地價和房價高漲，造成貧富不均，人民買不起房子。|yì bān dà xué gāng bì yè de nián qīng rén， bú shì zhǎo bú dào gōng zuò， jiù shì měi gè yuè de xīn shuǐ zhǐ néng miǎn qiáng shēng huó。 bù shǎo rén xīn kǔ gōng zuò le hěn duō nián， què gēn běn cún bù liǎo shén me qián， gèng bié shuō yǒu néng lì mǎi fáng zi le。 yǒu xiē rén hái chéng lì le 「wú ké wō niú」 zǔ zhī， kàng yì tái wān dì jià hé fáng jià gāo zhǎng， zào chéng pín fù bù jūn， rén mín mǎi bù qǐ fáng zi。|Người trẻ mới tốt nghiệp đại học không tìm được việc thì lương mỗi tháng chỉ đủ sống gắng gượng. Không ít người làm vất vả nhiều năm mà chẳng để dành được gì, chưa nói đến mua nhà. Có người còn lập tổ chức "ốc sên không vỏ" phản đối giá đất và giá nhà tăng vọt, gây chênh lệch giàu nghèo, dân mua không nổi nhà.
短文|根據台灣政府的統計，每年的失業率大概在百分之三到五左右。雖然跟其他國家比起來，台灣的失業率並不特別高，但人民卻覺得生活苦哈哈的，很多人都是「窮忙族」。|gēn jù tái wān zhèng fǔ de tǒng jì， měi nián de shī yè lǜ dà gài zài bǎi fēn zhī sān dào wǔ zuǒ yòu。 suī rán gēn qí tā guó jiā bǐ qǐ lái， tái wān de shī yè lǜ bìng bú tè bié gāo， dàn rén mín què jué dé shēng huó kǔ hā hā de， hěn duō rén dōu shì 「qióng máng zú」。|Theo thống kê chính phủ Đài Loan, tỷ lệ thất nghiệp mỗi năm khoảng 3 đến 5%. Tuy so với nước khác không đặc biệt cao, người dân vẫn thấy cuộc sống chật vật, nhiều người thuộc "nhóm bận rộn mà nghèo".
短文|這種現象一方面受到全球經濟不景氣的影響，另一方面是因為政府所施行的經濟政策也有問題。大多數人的薪資多年未調高不說，還有不少人被裁員。在台灣找不到工作的，不得不去中國大陸或別的國家另謀發展。|zhè zhǒng xiàn xiàng yì fāng miàn shòu dào quán qiú jīng jì bù jǐng qì de yǐng xiǎng， lìng yì fāng miàn shì yīn wèi zhèng fǔ suǒ shī xíng de jīng jì zhèng cè yě yǒu wèn tí。 dà duō shù rén de xīn zī duō nián wèi diào gāo bù shuō， hái yǒu bù shǎo rén bèi cái yuán。 zài tái wān zhǎo bú dào gōng zuò de， bù dé bú qù zhōng guó dà lù huò bié de guó jiā lìng móu fā zhǎn。|Hiện tượng này một mặt chịu ảnh hưởng kinh tế toàn cầu suy thoái, mặt khác chính sách kinh tế của chính phủ cũng có vấn đề. Lương đa số nhiều năm không tăng chưa nói, còn không ít người bị sa thải. Ai không tìm được việc ở Đài Loan đành sang Trung Quốc đại lục hay nước khác tìm hướng phát triển.
短文|馬安同今年在台灣過年時，他觀察到一些有趣的現象。不少台灣人恨不得能一夜致富，大家喜歡買彩券，希望能中獎，常做發財夢。|mǎ ān tóng jīn nián zài tái wān guò nián shí， tā guān chá dào yì xiē yǒu qù de xiàn xiàng。 bù shǎo tái wān rén hèn bù dé néng yí yè zhì fù， dà jiā xǐ huān mǎi cǎi quàn， xī wàng néng zhōng jiǎng， cháng zuò fā cái mèng。|Năm nay đón Tết ở Đài Loan, Mã An Đồng quan sát thấy vài hiện tượng thú vị. Không ít người Đài Loan ước gì giàu qua một đêm, thích mua vé số, mong trúng thưởng, hay mơ phát tài.
短文|另外還有一個現象就是每個人都想當老闆，不想看別人的臉色，所以在台灣有不少只有三、四個人的小公司。根據新聞報導指出，台灣有八成的年輕人想自己創業，而且大部分都想從事餐飲業。|lìng wài hái yǒu yí gè xiàn xiàng jiù shì měi gè rén dōu xiǎng dāng lǎo bǎn， bù xiǎng kàn bié rén de liǎn sè， suǒ yǐ zài tái wān yǒu bù shǎo zhǐ yǒu sān、 sì gè rén de xiǎo gōng sī。 gēn jù xīn wén bào dǎo zhǐ chū， tái wān yǒu bā chéng de nián qīng rén xiǎng zì jǐ chuàng yè， ér qiě dà bù fèn dōu xiǎng cóng shì cān yǐn yè。|Ngoài ra mỗi người đều muốn làm ông chủ, không muốn nhìn sắc mặt người khác nên Đài Loan có nhiều công ty nhỏ chỉ ba bốn người. Theo báo chí, 80% người trẻ Đài Loan muốn tự khởi nghiệp, phần lớn muốn làm ngành ăn uống.
短文|目前雖然經濟情況差，就業機會少，但是人生因為夢想而美麗，有夢最美。有句話說：「機會是留給準備好的人」，夢想的實現要經過許多努力及挑戰。培養實力，等待機會，相信每一個人都能擁有自己的一片天。|mù qián suī rán jīng jì qíng kuàng chà， jiù yè jī huì shǎo， dàn shì rén shēng yīn wèi mèng xiǎng ér měi lì， yǒu mèng zuì měi。 yǒu jù huà shuō：「jī huì shì liú gěi zhǔn bèi hǎo de rén」， mèng xiǎng de shí xiàn yào jīng guò xǔ duō nǔ lì jí tiāo zhàn。 péi yǎng shí lì， děng dài jī huì， xiāng xìn měi yí gè rén dōu néng yōng yǒu zì jǐ de yí piàn tiān。|Hiện tại tuy kinh tế kém, cơ hội việc làm ít, nhưng đời người đẹp nhờ ước mơ, có ước mơ là đẹp nhất. Có câu "cơ hội dành cho người chuẩn bị sẵn sàng", thực hiện ước mơ cần trải qua nhiều nỗ lực và thử thách. Bồi dưỡng thực lực, chờ cơ hội, tin rằng ai cũng có thể có một chân trời riêng.`}},{n:6,zh:"天搖地動",vi:"Trời rung đất chuyển",v:`高來恩|gāoláiēn|Cao Lai Ân (nam, người Thụy Sĩ)|Name
地震|dìzhèn|động đất|N
搖|yáo|rung lắc|Vp
厲害|lìhài|dữ dội|Vs
經常|jīngcháng|thường xuyên|Adv
倒|dào|đổ, sập|Vp
橋|qiáo|cầu|N
斷|duàn|đứt, gãy|Vp
多|duō|biết bao, thật là|Adv
地區|dìqū|khu vực|N
強烈|qiángliè|mạnh mẽ|Vs
頻率|pínlǜ|tần suất|N
預測|yùcè|dự đoán|V
徵兆|zhēngzhào|điềm báo, dấu hiệu|N
鳥類|niǎolèi|loài chim|N
雞|jī|gà|N
預先|yùxiān|trước, từ trước|Adv
老鼠|lǎoshǔ|chuột|N
貓|māo|mèo|N
馬|mǎ|ngựa|N
證實|zhèngshí|chứng thực|V
應變|yīngbiàn|ứng phó tình huống|Vi
隨手|suíshǒu|tiện tay|Adv
白|bái|uổng công|Adv
嫌|xián|phàn nàn, chê|Vst
事前|shìqián|trước khi xảy ra|Adv
總是|zǒngshì|luôn luôn|Adv
西歐|xīōu|Tây Âu|Name
北歐|běiōu|Bắc Âu|Name
中歐|zhōngōu|Trung Âu|Name
澳洲|àozhōu|châu Úc|Name
南美洲|nánměizhōu|Nam Mỹ|Name
地球科學|dìqiúkēxué|khoa học Trái Đất|Name
菲律賓|fēilǜbīn|Philippines|Name
天搖地動|tiānyáodìdòng|trời rung đất chuyển|Phrase
壓死|yāsǐ|đè chết|Phrase
災情慘重|zāiqíngcǎnzhòng|thiệt hại thảm khốc|Phrase
東半部|dōngbànbù|nửa phía đông|Phrase
地震帶|dìzhèndài|vành đai động đất|Phrase
救生包|jiùshēngbāo|túi sinh tồn|Phrase
有備無患|yǒubèiwúhuàn|có chuẩn bị thì không lo|Phrase
如何|rúhé|như thế nào|Adv
逃生|táoshēng|thoát hiểm|Vi
發達|fādá|phát triển|Vs
天災|tiānzāi|thiên tai|N
災害|zāihài|tai họa|N
程度|chéngdù|mức độ|N
首先|shǒuxiān|trước hết|Adv
其次|qícì|thứ đến|Adv
災難|zāinán|tai nạn, thảm họa|N
緊急|jǐnjí|khẩn cấp|Vs
必需品|bìxūpǐn|đồ cần thiết|N
譬如|pìrú|ví dụ|Vst
手電筒|shǒudiàntǒng|đèn pin|N
餅乾|bǐngqián|bánh quy|N
平時|píngshí|ngày thường|N
狀況|zhuàngkuàng|tình huống|N
慌張|huāngzhāng|hoảng hốt|Vs
停電|tíngdiàn|mất điện|Vp-sep
黑暗|hēiàn|bóng tối|N
方向|fāngxiàng|phương hướng|N
集合|jíhé|tập hợp|Vi
裂縫|lièfèng|vết nứt|N
瓦斯|wǎsī|gas|N
開關|kāiguān|công tắc|N
火災|huǒzāi|hỏa hoạn|N
門框|ménkuāng|khung cửa|N
歪|wāi|vẹo, lệch|Vp
頭部|tóubù|đầu|N
冷靜|lěngjìng|bình tĩnh|Vs
穩|wěn|vững|Vs
櫃子|guìzi|tủ|N
牆壁|qiángbì|tường|N
倒塌|dǎotā|sụp đổ|Vp
電梯|diàntī|thang máy|N
反而|fǎnér|trái lại|Conj
堅固|jiāngù|vững chắc|Vs
柱子|zhùzi|cột|N
碰|pèng|đụng|V
形成|xíngchéng|hình thành|V
三角形|sānjiǎoxíng|hình tam giác|N
保持|bǎochí|giữ|V
平靜|píngjìng|bình tĩnh, yên|Vs
指示|zhǐshì|chỉ thị|N
救援|jiùyuán|cứu viện|Vi
行動|xíngdòng|hành động|N
掉下來|diàoxiàlái|rơi xuống|Phrase
倒下來|dǎoxiàlái|đổ xuống|Phrase
救災人員|jiùzāirényuán|nhân viên cứu hộ|Phrase`,d:{l:`高來恩|昨天晚上七點左右有地震，妳知道嗎？|zuó tiān wǎn shàng qī diǎn zuǒ yòu yǒu dì zhèn， nǐ zhī dào ma？|Tối qua khoảng bảy giờ có động đất, bạn biết không?
李文麗|那時候我正在車上，完全沒感覺到。我是後來看新聞才知道的。|nà shí hòu wǒ zhèng zài chē shàng， wán quán méi gǎn jué dào。 wǒ shì hòu lái kàn xīn wén cái zhī dào de。|Lúc đó mình đang trên xe, hoàn toàn không cảm thấy. Sau xem tin mới biết.
高來恩|我住在二十樓，搖得好厲害。地震怎麼這麼可怕啊！|wǒ zhù zài èr shí lóu， yáo dé hǎo lì hài。 dì zhèn zěn me zhè me kě pà a！|Mình ở tầng hai mươi, rung dữ lắm. Động đất sao đáng sợ thế!
李文麗|不要怕，這裡經常有地震，我們都已經習慣了，昨天的地震不算大。|bú yào pà， zhè lǐ jīng cháng yǒu dì zhèn， wǒ men dōu yǐ jīng xí guàn le， zuó tiān de dì zhèn bú suàn dà。|Đừng sợ, ở đây thường xuyên có động đất, chúng mình quen rồi, trận hôm qua không tính là lớn.
高來恩|聽說有一次台灣發生大地震，很多房子倒了，橋斷了。多恐怖啊！|tīng shuō yǒu yí cì tái wān fā shēng dà dì zhèn， hěn duō fáng zi dào le， qiáo duàn le。 duō kǒng bù a！|Nghe nói có lần Đài Loan xảy ra động đất lớn, nhiều nhà sập, cầu gãy. Kinh khủng quá!
李文麗|那一次的大地震，有很多人受傷了，還有很多人被壓死了。台灣中部災情慘重，台北也有一棟大樓倒了。|nà yí cì de dà dì zhèn， yǒu hěn duō rén shòu shāng le， hái yǒu hěn duō rén bèi yā sǐ le。 tái wān zhōng bù zāi qíng cǎn zhòng， tái běi yě yǒu yí dòng dà lóu dào le。|Trận động đất lớn đó nhiều người bị thương, còn nhiều người bị đè chết. Miền trung Đài Loan thiệt hại thảm khốc, Đài Bắc cũng có một tòa nhà đổ.
高來恩|在我的國家從來沒有發生過地震，對我來說，這是一個很特別的經驗。|zài wǒ de guó jiā cóng lái méi yǒu fā shēng guò dì zhèn， duì wǒ lái shuō， zhè shì yí gè hěn tè bié de jīng yàn。|Ở nước mình chưa từng xảy ra động đất, với mình đây là trải nghiệm rất đặc biệt.
李文麗|西歐、北歐、中歐都沒有地震，澳洲幾乎沒有地震，南美洲東半部也很少。|xī ōu、 běi ōu、 zhōng ōu dōu méi yǒu dì zhèn， ào zhōu jǐ hū méi yǒu dì zhèn， nán měi zhōu dōng bàn bù yě hěn shǎo。|Tây Âu, Bắc Âu, Trung Âu đều không có động đất, châu Úc hầu như không có, nửa đông Nam Mỹ cũng hiếm.
高來恩|哪些地區常發生地震呢？|nǎ xiē dì qū cháng fā shēng dì zhèn ne？|Những khu vực nào hay xảy ra động đất?
李文麗|根據地球科學研究，世界上發生地震的位置大部分都在地震帶上。|gēn jù dì qiú kē xué yán jiū， shì jiè shàng fā shēng dì zhèn de wèi zhì dà bù fèn dōu zài dì zhèn dài shàng。|Theo nghiên cứu khoa học Trái Đất, phần lớn nơi động đất xảy ra trên thế giới nằm trên vành đai động đất.
高來恩|台灣的地震那麼多，台灣一定是在地震帶上。|tái wān de dì zhèn nà me duō， tái wān yí dìng shì zài dì zhèn dài shàng。|Đài Loan nhiều động đất thế, chắc nằm trên vành đai động đất.
李文麗|沒錯，像台灣、日本、菲律賓這些國家都在地震帶上，所以發生強烈地震的頻率相當高。|méi cuò， xiàng tái wān、 rì běn、 fēi lǜ bīn zhè xiē guó jiā dōu zài dì zhèn dài shàng， suǒ yǐ fā shēng qiáng liè dì zhèn de pín lǜ xiāng dāng gāo。|Đúng vậy, Đài Loan, Nhật Bản, Philippines đều nằm trên vành đai động đất nên tần suất động đất mạnh khá cao.
高來恩|現在颱風都可以預測了，地震應該也可以預測吧？|xiàn zài tái fēng dōu kě yǐ yù cè le， dì zhèn yīng gāi yě kě yǐ yù cè ba？|Giờ bão còn dự đoán được, động đất chắc cũng dự đoán được nhỉ?
李文麗|有人說地震快來的時候，動物會出現一些徵兆，在人類還沒有感覺震動前，鳥類已經對地震有感覺了，像雞就可以預先知道。其他像老鼠、貓、狗、馬……等等，也會預先知道，可是因為都沒有經過證實，所以到現在地震還是沒辦法預測。|yǒu rén shuō dì zhèn kuài lái de shí hòu， dòng wù huì chū xiàn yì xiē zhēng zhào， zài rén lèi hái méi yǒu gǎn jué zhèn dòng qián， niǎo lèi yǐ jīng duì dì zhèn yǒu gǎn jué le， xiàng jī jiù kě yǐ yù xiān zhī dào。 qí tā xiàng lǎo shǔ、 māo、 gǒu、 mǎ …… děng děng， yě huì yù xiān zhī dào， kě shì yīn wèi dōu méi yǒu jīng guò zhèng shí， suǒ yǐ dào xiàn zài dì zhèn hái shì méi bàn fǎ yù cè。|Có người nói khi động đất sắp đến động vật xuất hiện dấu hiệu, trước khi người cảm nhận được rung chuyển loài chim đã cảm thấy, như gà biết trước. Chuột, mèo, chó, ngựa… cũng biết trước, nhưng vì chưa được chứng thực nên đến nay vẫn chưa dự đoán được.
高來恩|既然地震是沒辦法預測的，我們應該怎麼辦？|jì rán dì zhèn shì méi bàn fǎ yù cè de， wǒ men yīng gāi zěn me bàn？|Đã không dự đoán được thì chúng ta nên làm sao?
李文麗|我們平常要隨時做好準備，萬一發生地震就知道怎麼應變了。|wǒ men píng cháng yào suí shí zuò hǎo zhǔn bèi， wàn yì fā shēng dì zhèn jiù zhī dào zěn me yīng biàn le。|Ngày thường lúc nào cũng phải chuẩn bị sẵn, lỡ có động đất sẽ biết ứng phó.
高來恩|那麼我們要怎麼做準備呢？|nà me wǒ men yào zěn me zuò zhǔn bèi ne？|Vậy chúng ta chuẩn bị thế nào?
李文麗|家中要準備一個救生包，就放在隨手拿得到的地方。|jiā zhōng yào zhǔn bèi yí gè jiù shēng bāo， jiù fàng zài suí shǒu ná dé dào de dì fāng。|Trong nhà chuẩn bị một túi sinh tồn, để nơi tiện tay lấy được.
高來恩|可是如果大地震沒發生，那我不是白準備了嗎？|kě shì rú guǒ dà dì zhèn méi fā shēng， nà wǒ bú shì bái zhǔn bèi le ma？|Nhưng nếu động đất lớn không xảy ra, chẳng phải mình chuẩn bị uổng công sao?
李文麗|不要嫌麻煩，有備無患，事前準備總是比較好啊！|bú yào xián má fán， yǒu bèi wú huàn， shì qián zhǔn bèi zǒng shì bǐ jiào hǎo a！|Đừng ngại phiền, có chuẩn bị thì không lo, chuẩn bị trước luôn tốt hơn!
短文|大家好！今天我很高興到這裡來跟大家談一談地震發生時如何逃生及應變。雖然現在科技已經很發達了，但是地震還是沒有辦法避免的天災，我們應該隨時做好準備，才可以讓災害減少到最低的程度。|dà jiā hǎo！ jīn tiān wǒ hěn gāo xìng dào zhè lǐ lái gēn dà jiā tán yì tán dì zhèn fā shēng shí rú hé táo shēng jí yīng biàn。 suī rán xiàn zài kē jì yǐ jīng hěn fā dá le， dàn shì dì zhèn hái shì méi yǒu bàn fǎ bì miǎn de tiān zāi， wǒ men yīng gāi suí shí zuò hǎo zhǔn bèi， cái kě yǐ ràng zāi hài jiǎn shǎo dào zuì dī de chéng dù。|Chào mọi người! Hôm nay tôi rất vui được đến đây nói chuyện về cách thoát hiểm và ứng phó khi động đất. Dù khoa học kỹ thuật đã rất phát triển, động đất vẫn là thiên tai không thể tránh, chúng ta nên luôn chuẩn bị sẵn để giảm thiệt hại đến mức thấp nhất.
短文|首先我們在家裡要準備一個救生包，其次要練習如何在災難發生時逃生。救生包裡面應該放一些緊急時的必需品，譬如手電筒、水、餅乾等等。平時要和家人練習怎麼逃生，知道各種狀況發生時應該怎麼辦，這樣萬一發生地震才不會慌張。|shǒu xiān wǒ men zài jiā lǐ yào zhǔn bèi yí gè jiù shēng bāo， qí cì yào liàn xí rú hé zài zāi nán fā shēng shí táo shēng。 jiù shēng bāo lǐ miàn yīng gāi fàng yì xiē jǐn jí shí de bì xū pǐn， pì rú shǒu diàn tǒng、 shuǐ、 bǐng qián děng děng。 píng shí yào hé jiā rén liàn xí zěn me táo shēng， zhī dào gè zhǒng zhuàng kuàng fā shēng shí yīng gāi zěn me bàn， zhè yàng wàn yì fā shēng dì zhèn cái bú huì huāng zhāng。|Trước hết trong nhà cần chuẩn bị túi sinh tồn, tiếp đó là luyện tập thoát hiểm khi có thảm họa. Trong túi nên có đồ cần thiết lúc khẩn cấp như đèn pin, nước, bánh quy… Ngày thường cùng gia đình tập thoát hiểm, biết các tình huống phải làm gì để lỡ có động đất không hoảng.
短文|要是晚上停電，我們得在黑暗中找到逃生的方向，也應該先和家人約好逃生後集合的地點，這是平常可以練習的。另外要檢查房子有沒有裂縫？家裡的擺飾會不會在地震時掉下來？|yào shì wǎn shàng tíng diàn， wǒ men dé zài hēi àn zhōng zhǎo dào táo shēng de fāng xiàng， yě yīng gāi xiān hé jiā rén yuē hǎo táo shēng hòu jí hé de dì diǎn， zhè shì píng cháng kě yǐ liàn xí de。 lìng wài yào jiǎn chá fáng zi yǒu méi yǒu liè fèng？ jiā lǐ de bǎi shì huì bú huì zài dì zhèn shí diào xià lái？|Nếu ban đêm mất điện, ta phải tìm hướng thoát trong bóng tối, cũng nên hẹn trước với gia đình điểm tập trung sau khi thoát, điều này có thể luyện ngày thường. Ngoài ra kiểm tra nhà có vết nứt không? Đồ trang trí có rơi xuống khi động đất không?
短文|當地震發生時，逃生前應該先關瓦斯開關，才不會發生火災；還要把門打開，免得因為門框歪了，打不開門。地震的時候，如果人在房子裡，要趕快找東西保護頭部。逃生時最重要的是冷靜，如果一慌張，就容易錯過逃生的機會。|dāng dì zhèn fā shēng shí， táo shēng qián yīng gāi xiān guān wǎ sī kāi guān， cái bú huì fā shēng huǒ zāi； hái yào bǎ mén dǎ kāi， miǎn de yīn wèi mén kuāng wāi le， dǎ bù kāi mén。 dì zhèn de shí hòu， rú guǒ rén zài fáng zi lǐ， yào gǎn kuài zhǎo dōng xī bǎo hù tóu bù。 táo shēng shí zuì zhòng yào de shì lěng jìng， rú guǒ yì huāng zhāng， jiù róng yì cuò guò táo shēng de jī huì。|Khi động đất xảy ra, trước khi thoát nên tắt công tắc gas để khỏi cháy; còn phải mở cửa kẻo khung cửa vẹo không mở được. Khi động đất nếu đang trong nhà phải mau tìm vật bảo vệ đầu. Khi thoát hiểm quan trọng nhất là bình tĩnh, hoảng loạn dễ bỏ lỡ cơ hội thoát thân.
短文|如果地震非常厲害，大到連站都站不穩，這時候不要急著往外面跑，因為這時可能會有櫃子倒下來，甚至牆壁也會倒塌。急著往外面跑，或是搭電梯下樓，不但不安全，反而更危險。|rú guǒ dì zhèn fēi cháng lì hài， dà dào lián zhàn dōu zhàn bù wěn， zhè shí hòu bú yào jí zhù wǎng wài miàn pǎo， yīn wèi zhè shí kě néng huì yǒu guì zi dǎo xià lái， shèn zhì qiáng bì yě huì dǎo tā。 jí zhù wǎng wài miàn pǎo， huò shì dā diàn tī xià lóu， bú dàn bù ān quán， fǎn ér gèng wēi xiǎn。|Nếu động đất rất mạnh đến mức đứng không vững, lúc này đừng vội chạy ra ngoài vì có thể tủ đổ, thậm chí tường sập. Vội chạy ra hoặc đi thang máy xuống không những không an toàn mà còn nguy hiểm hơn.
短文|一棟房子最堅固的地方就是柱子，所以柱子的旁邊是比較安全的。也有專家建議，可以躲在比較堅固的桌子旁邊，那麼當櫃子或牆壁倒下來的時候會先碰到桌子，形成一個保護自己的三角形空間。|yí dòng fáng zi zuì jiān gù de dì fāng jiù shì zhù zi， suǒ yǐ zhù zi de páng biān shì bǐ jiào ān quán de。 yě yǒu zhuān jiā jiàn yì， kě yǐ duǒ zài bǐ jiào jiān gù de zhuō zi páng biān， nà me dāng guì zi huò qiáng bì dǎo xià lái de shí hòu huì xiān pèng dào zhuō zi， xíng chéng yí gè bǎo hù zì jǐ de sān jiǎo xíng kōng jiān。|Chỗ vững nhất của ngôi nhà là cột nên cạnh cột tương đối an toàn. Cũng có chuyên gia khuyên trốn cạnh chiếc bàn chắc chắn, khi tủ hay tường đổ sẽ chạm bàn trước, tạo thành không gian tam giác bảo vệ mình.
短文|如果地震發生後造成很嚴重的災害，我們要讓自己盡量保持平靜，讓最需要幫助的人先得到照顧，要聽救災人員的指示，這樣災後的救援行動和重建工作才會更順利。|rú guǒ dì zhèn fā shēng hòu zào chéng hěn yán zhòng de zāi hài， wǒ men yào ràng zì jǐ jǐn liàng bǎo chí píng jìng， ràng zuì xū yào bāng zhù de rén xiān dé dào zhào gù， yào tīng jiù zāi rén yuán de zhǐ shì， zhè yàng zāi hòu de jiù yuán xíng dòng hé chóng jiàn gōng zuò cái huì gèng shùn lì。|Nếu sau động đất gây thiệt hại nghiêm trọng, ta nên giữ bình tĩnh, để người cần giúp nhất được chăm sóc trước, nghe chỉ thị của nhân viên cứu hộ để hoạt động cứu viện và tái thiết sau thảm họa thuận lợi hơn.`}},{n:7,zh:"大學生的事",vi:"Chuyện của sinh viên đại học",v:`博文|bówén|Bác Văn (nam, sinh viên năm cuối)|Name
玉珍|yùzhēn|Ngọc Trân (nữ, sinh viên năm hai)|Name
學妹|xuémèi|khóa dưới (nữ)|N
學弟|xuédì|khóa dưới (nam)|N
彈|dàn|đàn, chơi (nhạc cụ)|V
吉他|jítā|guitar|N
交|jiāo|nộp|V
家教|jiājiào|gia sư|N
學長|xuézhǎng|đàn anh|N
還|hái|thế mà, không ngờ|Adv
進度|jìndù|tiến độ|N
落後|luòhòu|tụt hậu, chậm|Vp
完成|wánchéng|hoàn thành|Vpt
一連|yìlián|liên tiếp|Adv
約會|yuēhuì|hẹn hò|V-sep
一生|yìshēng|cả đời|N
時光|shíguāng|thời gian|N
倒流|dàoliú|chảy ngược|Vp
加強|jiāqiáng|tăng cường|V
至少|zhìshǎo|ít nhất|Adv
訓練|xùnliàn|huấn luyện|N/V
外國|wàiguó|nước ngoài|N
爭取|zhēngqǔ|giành lấy|V
實習|shíxí|thực tập|Vi
二分之一|èrfēnzhīyī|một phần hai|Phrase
一下……一下……|yíxiàyíxià|lúc thì… lúc thì…|Phrase
到時候|dàoshíhòu|đến lúc đó|Phrase
談戀愛|tánliànài|yêu đương|Phrase
低空飛過|dīkōngfēiguò|suýt soát đậu|Phrase
有助於|yǒuzhùyú|có ích cho|Phrase
寒暑假|hánshǔjià|kỳ nghỉ đông hè|Phrase
暗戀|ànliàn|thầm yêu|V
目光|mùguāng|ánh mắt|N
移動|yídòng|di chuyển|Vi
於是|yúshì|thế là|Conj
原來|yuánlái|hóa ra|Adv
煩惱|fánnǎo|phiền não|Vs
擔任|dānrèn|đảm nhiệm|V
學生會|xuéshēnghuì|hội sinh viên|N
會長|huìzhǎng|hội trưởng|N
校隊|xiàoduì|đội tuyển trường|N
隊員|duìyuán|thành viên đội|N
高大|gāodà|cao to|Vs
帥氣|shuàiqì|điển trai|Vs
雙|shuāng|đôi|M
開朗|kāilǎng|vui vẻ, cởi mở|Vs
微笑|wēixiào|mỉm cười|Vi
情人節|qíngrénjié|lễ tình nhân|N
親手|qīnshǒu|tự tay|Adv
巧克力|qiǎokèlì|sô-cô-la|N
當天|dāngtiān|hôm đó|N
堆|duī|đống|M
向|xiàng|với, hướng về|Prep
告白|gàobái|tỏ tình|Vi
萬人迷|wànrénmí|người được mọi người mê|N
交往|jiāowǎng|hẹn hò, qua lại|Vi
系花|xìhuā|hoa khôi khoa|N
追|zhuī|theo đuổi|V
情書|qíngshū|thư tình|N
態度|tàidù|thái độ|N
曖昧|àimèi|mập mờ|Vs
甜蜜|tiánmì|ngọt ngào|Vs
溫柔|wēnróu|dịu dàng|Vs
訊息|xùnxī|tin nhắn|N
忌妒|jìdù|ghen tị|Vst
安全感|ānquángǎn|cảm giác an toàn|N
吃醋|chīcù|ghen|Vp-sep
吵架|chǎojià|cãi nhau|V-sep
牽|qiān|nắm, dắt|V
吻|wěn|hôn|V
劈腿|pītuǐ|bắt cá hai tay|Vp-sep
糟糕|zāogāo|chết rồi, hỏng bét|Ptc
何清源|héqīngyuán|Hà Thanh Nguyên|Name
林榮華|línrónghuá|Lâm Vinh Hoa|Name
一見鍾情|yíjiànzhōngqíng|yêu từ cái nhìn đầu tiên|Phrase
一舉一動|yìjǔyídòng|mọi cử chỉ|Phrase
前一天|qiányìtiān|ngày hôm trước|Phrase
已讀不回|yǐdúbùhuí|đã đọc không trả lời|Phrase`,d:{l:`博文|學妹，要不要去社團辦公室？有幾個一年級的學弟要我教他們彈吉他。|xué mèi， yào bú yào qù shè tuán bàn gōng shì？ yǒu jǐ gè yì nián jí de xué dì yào wǒ jiào tā men dàn jí tā。|Em khóa dưới, có muốn đến văn phòng câu lạc bộ không? Có mấy bạn năm nhất nhờ anh dạy đàn guitar.
玉珍|我不能去，我晚上要打工，得趁下午有空時去圖書館寫報告，要不然就交不出來了。明天再去吧！|wǒ bù néng qù， wǒ wǎn shàng yào dǎ gōng， dé chèn xià wǔ yǒu kòng shí qù tú shū guǎn xiě bào gào， yào bù rán jiù jiāo bù chū lái le。 míng tiān zài qù ba！|Em không đi được, tối em phải đi làm thêm, phải tranh thủ chiều rảnh đến thư viện viết báo cáo, không thì nộp không kịp. Mai đi nhé!
博文|可是我明天白天有兩個家教，晚上跟女朋友約好了，根本沒有時間。|kě shì wǒ míng tiān bái tiān yǒu liǎng gè jiā jiào， wǎn shàng gēn nǚ péng yǒu yuē hǎo le， gēn běn méi yǒu shí jiān。|Nhưng ngày mai ban ngày anh có hai buổi gia sư, tối đã hẹn bạn gái, hoàn toàn không có thời gian.
玉珍|學長，你還真忙！欸！對了！你的畢業展做得怎麼樣了？|xué zhǎng， nǐ hái zhēn máng！ āi！ duì le！ nǐ de bì yè zhǎn zuò dé zěn me yàng le？|Anh bận thật! À, đúng rồi! Triển lãm tốt nghiệp của anh làm đến đâu rồi?
博文|唉！進度已經落後了，教授一下說要這樣做，一下說要那樣做，害我改來改去，現在連二分之一都還沒完成。有的地方一連改了三次，教授還是覺得不滿意。|āi！ jìn dù yǐ jīng luò hòu le， jiào shòu yí xià shuō yào zhè yàng zuò， yí xià shuō yào nà yàng zuò， hài wǒ gǎi lái gǎi qù， xiàn zài lián èr fēn zhī yì dōu hái méi wán chéng。 yǒu de dì fāng yì lián gǎi le sān cì， jiào shòu hái shì jué dé bù mǎn yì。|Ôi! Tiến độ đã chậm rồi, thầy lúc bảo làm thế này lúc bảo làm thế kia, khiến anh sửa đi sửa lại, giờ chưa xong nổi một nửa. Có chỗ sửa liên tiếp ba lần thầy vẫn chưa hài lòng.
玉珍|做畢業展真的很痛苦，雖然我兩年後才要做，我想我還是早一點開始準備，免得到時候來不及，畢不了業。|zuò bì yè zhǎn zhēn de hěn tòng kǔ， suī rán wǒ liǎng nián hòu cái yào zuò， wǒ xiǎng wǒ hái shì zǎo yì diǎn kāi shǐ zhǔn bèi， miǎn de dào shí hòu lái bù jí， bì bù liǎo yè。|Làm triển lãm tốt nghiệp thật khổ, tuy hai năm nữa em mới làm, em nghĩ vẫn nên chuẩn bị sớm kẻo đến lúc không kịp, không tốt nghiệp được.
博文|妳這樣想是對的，我現在也有點後悔沒有早一點開始準備，如果二、三年級的時候少約會，少玩一點，多念點書，現在大概會好一點。|nǐ zhè yàng xiǎng shì duì de， wǒ xiàn zài yě yǒu diǎn hòu huǐ méi yǒu zǎo yì diǎn kāi shǐ zhǔn bèi， rú guǒ èr、 sān nián jí de shí hòu shǎo yuē huì， shǎo wán yì diǎn， duō niàn diǎn shū， xiàn zài dà gài huì hǎo yì diǎn。|Em nghĩ vậy là đúng, giờ anh cũng hơi hối hận không chuẩn bị sớm, nếu năm hai năm ba bớt hẹn hò, bớt chơi, học nhiều hơn thì giờ chắc đỡ hơn.
玉珍|可是學長，如果大學四年光念書，沒有參加社團，沒有交男女朋友，那念大學還有什麼意思呢？像學長你，又會念書，又會玩，跟女朋友的感情也很穩定，這才是大學生該做的事啊！不像我，到現在連個男朋友都沒有。|kě shì xué zhǎng， rú guǒ dà xué sì nián guāng niàn shū， méi yǒu cān jiā shè tuán， méi yǒu jiāo nán nǚ péng yǒu， nà niàn dà xué hái yǒu shén me yì si ne？ xiàng xué zhǎng nǐ， yòu huì niàn shū， yòu huì wán， gēn nǚ péng yǒu de gǎn qíng yě hěn wěn dìng， zhè cái shì dà xué shēng gāi zuò de shì a！ bú xiàng wǒ， dào xiàn zài lián gè nán péng yǒu dōu méi yǒu。|Nhưng anh ơi, nếu bốn năm đại học chỉ học, không tham gia câu lạc bộ, không yêu đương thì học đại học còn ý nghĩa gì? Như anh vừa học giỏi vừa chơi giỏi, tình cảm với bạn gái cũng ổn định, đó mới là việc sinh viên nên làm! Không như em, đến giờ chưa có bạn trai.
博文|是啊！我二、三年級的時候也覺得一生就上一次大學，當然要談戀愛、玩個夠。不過如果時光可以倒流，有幾件事我會認真做。|shì a！ wǒ èr、 sān nián jí de shí hòu yě jué dé yì shēng jiù shàng yí cì dà xué， dāng rán yào tán liàn ài、 wán gè gòu。 bú guò rú guǒ shí guāng kě yǐ dào liú， yǒu jǐ jiàn shì wǒ huì rèn zhēn zuò。|Phải! Năm hai năm ba anh cũng nghĩ cả đời chỉ học đại học một lần, đương nhiên phải yêu đương, chơi cho đã. Nhưng nếu thời gian quay ngược, có vài việc anh sẽ làm nghiêm túc.
玉珍|哪幾件事？|nǎ jǐ jiàn shì？|Những việc nào?
博文|例如加強我的語言能力，至少把一種外語學好一點。現在我的英文普普通通，西班牙文考試也都是低空飛過，如果回到二年級，我一定會努力把外語學好。|lì rú jiā qiáng wǒ de yǔ yán néng lì， zhì shǎo bǎ yì zhǒng wài yǔ xué hǎo yì diǎn。 xiàn zài wǒ de yīng wén pǔ pǔ tōng tōng， xī bān yá wén kǎo shì yě dōu shì dī kōng fēi guò， rú guǒ huí dào èr nián jí， wǒ yí dìng huì nǔ lì bǎ wài yǔ xué hǎo。|Ví dụ tăng cường năng lực ngôn ngữ, ít nhất học giỏi hơn một ngoại ngữ. Giờ tiếng Anh anh làng nhàng, thi tiếng Tây Ban Nha cũng đều suýt soát đậu, nếu quay lại năm hai chắc chắn anh sẽ cố học tốt ngoại ngữ.
玉珍|嗯，語言能力的確很重要。|ń， yǔ yán néng lì de què hěn zhòng yào。|Ừm, năng lực ngôn ngữ quả thật rất quan trọng.
博文|另外，我也會積極地申請當交換學生，不管是英文環境還是西文環境，都有助於外語的訓練。|lìng wài， wǒ yě huì jī jí dì shēn qǐng dāng jiāo huàn xué shēng， bù guǎn shì yīng wén huán jìng hái shì xī wén huán jìng， dōu yǒu zhù yú wài yǔ de xùn liàn。|Ngoài ra anh cũng sẽ tích cực xin làm sinh viên trao đổi, dù môi trường tiếng Anh hay tiếng Tây Ban Nha đều có ích cho rèn ngoại ngữ.
玉珍|可是到外國一年，就會晚一年畢業。|kě shì dào wài guó yì nián， jiù huì wǎn yì nián bì yè。|Nhưng ra nước ngoài một năm sẽ tốt nghiệp muộn một năm.
博文|這有什麼關係呢？一年在人的一生中只不過是幾十分之一，為了將來，多花一年也是值得的。|zhè yǒu shén me guān xì ne？ yì nián zài rén de yì shēng zhōng zhǐ bú guò shì jǐ shí fēn zhī yī， wèi le jiāng lái， duō huā yì nián yě shì zhí de de。|Có sao đâu? Một năm trong đời người chỉ là một phần mấy chục, vì tương lai tốn thêm một năm cũng đáng.
玉珍|除了加強語言以外，還有呢？|chú le jiā qiáng yǔ yán yǐ wài， hái yǒu ne？|Ngoài tăng cường ngôn ngữ còn gì nữa?
博文|我會在寒暑假爭取到企業實習的機會。對一個大學生來說，進入職場實習，才能真正知道職場是什麼，也才知道「工作」是什麼。學妹，妳現在才二年級，現在開始還來得及！|wǒ huì zài hán shǔ jià zhēng qǔ dào qǐ yè shí xí de jī huì。 duì yí gè dà xué shēng lái shuō， jìn rù zhí chǎng shí xí， cái néng zhēn zhèng zhī dào zhí chǎng shì shén me， yě cái zhī dào 「gōng zuò」 shì shén me。 xué mèi， nǐ xiàn zài cái èr nián jí， xiàn zài kāi shǐ hái lái dé jí！|Anh sẽ giành cơ hội thực tập doanh nghiệp vào kỳ nghỉ đông hè. Với sinh viên, vào môi trường làm việc thực tập mới biết thực sự nơi làm việc và "công việc" là gì. Em mới năm hai, bắt đầu bây giờ còn kịp!
短文|何雅婷最近注意到同學玉珍上課時不太專心，目光總是跟著男同學何清源移動，於是雅婷下課後找了玉珍一起吃飯。原來玉珍因為暗戀同學何清源而非常煩惱。其實她在開學的第一天，就對何清源一見鍾情了。|hé yǎ tíng zuì jìn zhù yì dào tóng xué yù zhēn shàng kè shí bú tài zhuān xīn， mù guāng zǒng shì gēn zhù nán tóng xué hé qīng yuán yí dòng， yú shì yǎ tíng xià kè hòu zhǎo le yù zhēn yì qǐ chī fàn。 yuán lái yù zhēn yīn wèi àn liàn tóng xué hé qīng yuán ér fēi cháng fán nǎo。 qí shí tā zài kāi xué de dì yī tiān， jiù duì hé qīng yuán yí jiàn zhōng qíng le。|Hà Nhã Đình gần đây để ý bạn Ngọc Trân học không tập trung, ánh mắt luôn dõi theo bạn nam Hà Thanh Nguyên nên sau giờ học rủ Ngọc Trân đi ăn. Hóa ra Ngọc Trân đang rất phiền não vì thầm yêu Thanh Nguyên. Thật ra ngay ngày khai giảng cô đã nhất kiến chung tình với anh.
短文|何清源是學校的風雲人物，不但擔任學生會的會長，還是籃球校隊隊員，長得高大、帥氣。他有一雙迷死人的眼睛，個性開朗、活潑。有他在的地方就笑聲不斷。玉珍總是會忍不住注意清源的一舉一動。連在夢裡清源對她微笑，也會讓她一整天心情都很好。|hé qīng yuán shì xué xiào de fēng yún rén wù， bú dàn dān rèn xué shēng huì de huì zhǎng， hái shì lán qiú xiào duì duì yuán， zhǎng dé gāo dà、 shuài qì。 tā yǒu yì shuāng mí sǐ rén de yǎn jīng， gè xìng kāi lǎng、 huó pō。 yǒu tā zài de dì fāng jiù xiào shēng bú duàn。 yù zhēn zǒng shì huì rěn bú zhù zhù yì qīng yuán de yì jǔ yí dòng。 lián zài mèng lǐ qīng yuán duì tā wēi xiào， yě huì ràng tā yì zhěng tiān xīn qíng dōu hěn hǎo。|Thanh Nguyên là nhân vật nổi bật của trường, không những là hội trưởng hội sinh viên mà còn là thành viên đội bóng rổ trường, cao to điển trai. Anh có đôi mắt mê hoặc, tính cách cởi mở hoạt bát, có anh là có tiếng cười. Ngọc Trân luôn không nhịn được chú ý từng cử chỉ của anh. Ngay cả trong mơ anh mỉm cười với cô cũng khiến cô vui cả ngày.
短文|情人節的前一天，玉珍親手做了巧克力，想送給清源。結果當天看見清源桌上已經放了一大堆的巧克力，於是玉珍就把巧克力收了起來。雅婷建議玉珍去向清源告白，可是玉珍不敢。她覺得像清源這樣的萬人迷，怎麼可能喜歡這麼普通的自己？去告白只是讓自己受傷而已。|qíng rén jié de qián yì tiān， yù zhēn qīn shǒu zuò le qiǎo kè lì， xiǎng sòng gěi qīng yuán。 jié guǒ dāng tiān kàn jiàn qīng yuán zhuō shàng yǐ jīng fàng le yí dà duī de qiǎo kè lì， yú shì yù zhēn jiù bǎ qiǎo kè lì shōu le qǐ lái。 yǎ tíng jiàn yì yù zhēn qù xiàng qīng yuán gào bái， kě shì yù zhēn bù gǎn。 tā jué dé xiàng qīng yuán zhè yàng de wàn rén mí， zěn me kě néng xǐ huān zhè me pǔ tōng de zì jǐ？ qù gào bái zhǐ shì ràng zì jǐ shòu shāng ér yǐ。|Hôm trước lễ tình nhân, Ngọc Trân tự tay làm sô-cô-la định tặng Thanh Nguyên. Kết quả hôm đó thấy trên bàn anh đã có cả đống sô-cô-la nên cô cất đi. Nhã Đình khuyên cô tỏ tình nhưng cô không dám. Cô nghĩ người được mọi người mê như Thanh Nguyên sao có thể thích một mình bình thường như cô? Tỏ tình chỉ khiến mình bị tổn thương.
短文|看到玉珍這樣，雅婷很想幫她，於是，雅婷去找清源的好朋友林榮華。她聽榮華說，清源有一個交往不久的女朋友，那個女生是中文系的系花。幾個月前，清源開始追那個女生，每天打電話、傳簡訊、寫情書給她。|kàn dào yù zhēn zhè yàng， yǎ tíng hěn xiǎng bāng tā， yú shì， yǎ tíng qù zhǎo qīng yuán de hǎo péng yǒu lín róng huá。 tā tīng róng huá shuō， qīng yuán yǒu yí gè jiāo wǎng bù jiǔ de nǚ péng yǒu， nà gè nǚ shēng shì zhōng wén xì de xì huā。 jǐ gè yuè qián， qīng yuán kāi shǐ zhuī nà gè nǚ shēng， měi tiān dǎ diàn huà、 chuán jiǎn xùn、 xiě qíng shū gěi tā。|Thấy Ngọc Trân như vậy Nhã Đình muốn giúp nên đi tìm bạn thân của Thanh Nguyên là Lâm Vinh Hoa. Cô nghe Vinh Hoa nói Thanh Nguyên có bạn gái mới quen không lâu, là hoa khôi khoa Trung văn. Mấy tháng trước Thanh Nguyên bắt đầu theo đuổi cô gái đó, ngày nào cũng gọi điện, nhắn tin, viết thư tình.
短文|剛開始，那個女生的態度很曖昧，讓清源弄不清楚。過了一個多月，那個女生終於答應跟他交往！他開心得不得了。就這樣，清源跟女朋友甜甜蜜蜜地交往了兩、三個月。|gāng kāi shǐ， nà gè nǚ shēng de tài dù hěn ài mèi， ràng qīng yuán nòng bù qīng chǔ。 guò le yí gè duō yuè， nà gè nǚ shēng zhōng yú dá yīng gēn tā jiāo wǎng！ tā kāi xīn dé bù dé le。 jiù zhè yàng， qīng yuán gēn nǚ péng yǒu tián tián mì mì dì jiāo wǎng le liǎng、 sān gè yuè。|Lúc đầu thái độ cô gái rất mập mờ, khiến Thanh Nguyên không hiểu. Hơn một tháng sau cô cuối cùng nhận lời hẹn hò! Anh vui vô cùng. Cứ thế Thanh Nguyên và bạn gái ngọt ngào hẹn hò hai ba tháng.
短文|過了不久，清源發現，約會的時候，女朋友對他的態度沒有原來那麼溫柔了，動不動就生氣，傳給她的訊息也常常已讀不回。有時候清源看見女朋友跟其他男生有說有笑，讓他忌妒死了，很沒有安全感。要是清源為了這樣的事情生氣，女朋友就說他太容易吃醋了。他們吵架往往都是為了這樣的事情。|guò le bù jiǔ， qīng yuán fā xiàn， yuē huì de shí hòu， nǚ péng yǒu duì tā de tài dù méi yǒu yuán lái nà me wēn róu le， dòng bú dòng jiù shēng qì， chuán gěi tā de xùn xī yě cháng cháng yǐ dú bù huí。 yǒu shí hòu qīng yuán kàn jiàn nǚ péng yǒu gēn qí tā nán shēng yǒu shuō yǒu xiào， ràng tā jì dù sǐ le， hěn méi yǒu ān quán gǎn。 yào shì qīng yuán wèi le zhè yàng de shì qíng shēng qì， nǚ péng yǒu jiù shuō tā tài róng yì chī cù le。 tā men chǎo jià wǎng wǎng dōu shì wèi le zhè yàng de shì qíng。|Không lâu sau, Thanh Nguyên nhận ra khi hẹn hò bạn gái không còn dịu dàng như trước, hơi tí là giận, tin nhắn gửi cô cũng thường đã đọc không trả lời. Có lúc thấy bạn gái vui vẻ trò chuyện với nam khác khiến anh ghen chết đi được, rất thiếu cảm giác an toàn. Nếu anh giận vì chuyện đó, bạn gái bảo anh quá dễ ghen. Họ cãi nhau thường vì những chuyện như vậy.
短文|有一次，榮華看見清源的女朋友跟一個男生手牽手散步，還看見那個男的吻了她。榮華想：「難道她劈腿了？糟糕！我該不該告訴清源呢？」聽到這裡，雅婷打算馬上去告訴玉珍，讓玉珍趁這個機會把清源搶過來。|yǒu yí cì， róng huá kàn jiàn qīng yuán de nǚ péng yǒu gēn yí gè nán shēng shǒu qiān shǒu sàn bù， hái kàn jiàn nà gè nán de wěn le tā。 róng huá xiǎng：「nán dào tā pī tuǐ le？ zāo gāo！ wǒ gāi bù gāi gào sù qīng yuán ne？」 tīng dào zhè lǐ， yǎ tíng dǎ suàn mǎ shàng qù gào sù yù zhēn， ràng yù zhēn chèn zhè gè jī huì bǎ qīng yuán qiǎng guò lái。|Có lần Vinh Hoa thấy bạn gái Thanh Nguyên nắm tay một nam sinh đi dạo, còn thấy người đó hôn cô. Vinh Hoa nghĩ: "Chẳng lẽ cô ấy bắt cá hai tay? Chết rồi! Có nên nói với Thanh Nguyên không?" Nghe đến đây Nhã Đình định lập tức nói với Ngọc Trân để cô nhân cơ hội này giành lấy Thanh Nguyên.`}},{n:8,zh:"他們的選擇",vi:"Lựa chọn của họ",v:`王麗華|wánglìhuá|Vương Lệ Hoa (nữ, người Đài Loan)|Name
魯亞|lǔyà|Lỗ Á (nam, người Thổ Nhĩ Kỳ)|Name
論文|lùnwén|luận văn|N
反正|fǎnzhèng|dù sao thì|Adv
不只|bùzhǐ|không chỉ|Adv
哈|hā|ha (tiếng cười)|Ptc
代替|dàitì|thay thế|V
獨自|dúzì|một mình|Adv
難免|nánmiǎn|khó tránh khỏi|Adv
費用|fèiyòng|chi phí|N
觀念|guānniàn|quan niệm|N
代|dài|thế hệ|N
婚姻|hūnyīn|hôn nhân|N
束縛|shùfù|trói buộc|V
追求|zhuīqiú|theo đuổi|V
倒是|dǎoshì|ngược lại thì|Adv
推行|tuīxíng|thúc đẩy, thi hành|V
生育|shēngyù|sinh đẻ|V/N
補助|bǔzhù|trợ cấp|V/N
老人|lǎorén|người già|N
夫婦|fūfù|vợ chồng|N
獨生子|dúshēngzi|con trai một|N
寵|chǒng|chiều chuộng|Vst
職業|zhíyè|nghề nghiệp|N
婦產科|fùchǎnkē|khoa phụ sản|N
失業|shīyè|thất nghiệp|Vp
補習班|bǔxíbān|lớp học thêm|N
不可思議|bùkěsīyì|không thể tưởng tượng|Phrase
有話直說|yǒuhuàzhíshuō|có gì nói nấy|Phrase
娃娃推車|wáwátuīchē|xe đẩy em bé|Phrase
不足為奇|bùzúwèiqí|chẳng có gì lạ|Phrase
遠遠|yuǎnyuǎn|xa xa, vượt xa|Adv
傳宗接代|chuánzōngjiēdài|nối dõi tông đường|Phrase
無拘無束|wújūwúshù|tự do không ràng buộc|Phrase
老一輩|lǎoyíbèi|thế hệ già|Phrase
一胎化政策|yìtāihuàzhèngcè|chính sách một con|Phrase
這下子|zhèxiàzi|lần này, thế là|Phrase
年齡|niánlíng|tuổi tác|N
較|jiào|hơn (trang trọng)|Adv
使|shǐ|khiến, làm cho|Vst
行業|xíngyè|ngành nghề|N
重大|zhòngdà|trọng đại|Vs
幼稚園|yòuzhìyuán|trường mẫu giáo|N
招生|zhāoshēng|tuyển sinh|Vi
減班|jiǎnbān|giảm lớp|Vp-sep
將|jiāng|sắp sẽ|Adv
少子化|shǎozǐhuà|tỷ lệ sinh thấp|N
連鎖|liánsuǒ|chuỗi|Vp
兒童|értóng|trẻ em|N
美語|měiyǔ|tiếng Anh Mỹ|N
倒閉|dàobì|phá sản|Vp
何況|hékuàng|huống chi|Adv
無法|wúfǎ|không thể|Adv
未來|wèilái|tương lai|N
遠景|yuǎnjǐng|viễn cảnh|N
足夠|zúgòu|đủ|Vs
加入|jiārù|gia nhập|V
老化|lǎohuà|già hóa|Vp
針對|zhēnduì|nhắm vào|Prep
項|xiàng|hạng mục|M
措施|cuòshī|biện pháp|N
減稅|jiǎnshuì|giảm thuế|V-sep
延長|yánzhǎng|kéo dài|V
產假|chǎnjiǎ|nghỉ thai sản|N
托育|tuōyù|gửi trẻ|N
胎|tāi|thai (lượng từ)|M
領|lǐng|nhận|V
元|yuán|đồng (tiền)|N
成年|chéngnián|thành niên|Vp
除非|chúfēi|trừ phi|Conj
整體|zhěngtǐ|tổng thể|N
否則|fǒuzé|nếu không thì|Conj
婦女|fùnǚ|phụ nữ|N
意願|yìyuàn|ý muốn|N
祖父母|zǔfùmǔ|ông bà nội|N
孫女|sūnnǚ|cháu gái|N
重|zhòng|nặng|Vs
預算|yùsuàn|ngân sách|N
財政|cáizhèng|tài chính|N
沉重|chénzhòng|nặng nề|Vs
有效|yǒuxiào|hiệu quả|Vs
正|zhèng|đang|Adv
考驗|kǎoyàn|thử thách|V
智慧|zhìhuì|trí tuệ|N
之一|zhīyī|một trong|Phrase
寧缺勿濫|níngquēwùlàn|thà thiếu còn hơn bừa|Phrase
合不來|hébùlái|không hợp nhau|Phrase
生兒育女|shēngéryùnǚ|sinh con đẻ cái|Phrase
獨善其身|dúshànqíshēn|chỉ lo thân mình|Phrase
停滯不前|tíngzhìbùqián|trì trệ không tiến|Phrase`,d:{l:`王麗華|魯亞，來公園散步嗎？|lǔ yà， lái gōng yuán sàn bù ma？|Lỗ Á, đến công viên đi dạo à?
魯亞|麗華，好久不見，我在圖書館坐太久了，出來走一走。|lì huá， hǎo jiǔ bú jiàn， wǒ zài tú shū guǎn zuò tài jiǔ le， chū lái zǒu yì zǒu。|Lệ Hoa, lâu rồi không gặp, mình ngồi thư viện lâu quá nên ra đi dạo một chút.
王麗華|最近在忙什麼？論文寫完了嗎？|zuì jìn zài máng shén me？ lùn wén xiě wán le ma？|Gần đây bận gì? Luận văn viết xong chưa?
魯亞|論文寫得差不多了，妳呢，在忙什麼？|lùn wén xiě dé chà bu duō le， nǐ ne， zài máng shén me？|Luận văn gần xong, còn bạn bận gì?
王麗華|我姐姐上個月生了個兒子，有時候我會去幫她照顧一下孩子。|wǒ jiě jiě shàng gè yuè shēng le gè ér zi， yǒu shí hòu wǒ huì qù bāng tā zhào gù yí xià hái zi。|Chị mình tháng trước sinh con trai, thỉnh thoảng mình đến giúp chăm bé.
魯亞|恭喜恭喜，那麼妳當阿姨嘍。|gōng xǐ gōng xǐ， nà me nǐ dāng ā yí lóu。|Chúc mừng, vậy bạn làm dì rồi.
王麗華|是啊！沒想到我居然這麼快就當阿姨了。|shì a！ méi xiǎng dào wǒ jū rán zhè me kuài jiù dāng ā yí le。|Ừ! Không ngờ mình làm dì nhanh thế.
魯亞|對了，有一件事我一直覺得很不可思議，但是又不好意思問。|duì le， yǒu yí jiàn shì wǒ yì zhí jué dé hěn bù kě sī yì， dàn shì yòu bù hǎo yì sī wèn。|À, có chuyện mình luôn thấy khó tin nhưng ngại hỏi.
王麗華|有話直說吧，反正我們那麼熟了，就算你說錯了，我也不會生氣的。|yǒu huà zhí shuō ba， fǎn zhèng wǒ men nà me shú le， jiù suàn nǐ shuō cuò le， wǒ yě bú huì shēng qì de。|Có gì cứ nói thẳng, dù sao mình thân thế rồi, nếu bạn nói sai mình cũng không giận.
魯亞|我常來公園散步，不只看過一次娃娃推車裡坐著的並不是小孩，而是一隻狗。台灣人瘋了嗎？|wǒ cháng lái gōng yuán sàn bù， bù zhǐ kàn guò yí cì wá wá tuī chē lǐ zuò zhù de bìng bú shì xiǎo hái， ér shì yì zhī gǒu。 tái wān rén fēng le ma？|Mình hay đi dạo công viên, không chỉ một lần thấy trong xe đẩy em bé không phải trẻ con mà là một con chó. Người Đài Loan điên rồi sao?
王麗華|哈！哈！哈！那是因為現在不少台灣人覺得養孩子又花錢又辛苦，結了婚不生小孩的人，就會考慮養寵物代替小孩；至於不婚的人因為獨自一人生活，難免會覺得孤單寂寞，因此就想養寵物陪伴。你常看到狗坐娃娃車的事就不足為奇了。|hā！ hā！ hā！ nà shì yīn wèi xiàn zài bù shǎo tái wān rén jué dé yǎng hái zi yòu huā qián yòu xīn kǔ， jié le hūn bù shēng xiǎo hái de rén， jiù huì kǎo lǜ yǎng chǒng wù dài tì xiǎo hái； zhì yú bù hūn de rén yīn wèi dú zì yì rén shēng huó， nán miǎn huì jué dé gū dān jì mò， yīn cǐ jiù xiǎng yǎng chǒng wù péi bàn。 nǐ cháng kàn dào gǒu zuò wá wá chē de shì jiù bù zú wèi qí le。|Ha ha ha! Vì giờ nhiều người Đài Loan thấy nuôi con vừa tốn tiền vừa vất vả, người cưới rồi không sinh con thì nghĩ đến nuôi thú cưng thay con; còn người không kết hôn sống một mình khó tránh cô đơn nên muốn nuôi thú cưng bầu bạn. Chuyện bạn hay thấy chó ngồi xe đẩy em bé không có gì lạ.
魯亞|養一個孩子所需要的費用當然遠遠超過養一隻狗，但是你們不是有傳宗接代的觀念嗎？|yǎng yí gè hái zi suǒ xū yào de fèi yòng dāng rán yuǎn yuǎn chāo guò yǎng yì zhī gǒu， dàn shì nǐ men bú shì yǒu chuán zōng jiē dài de guān niàn ma？|Chi phí nuôi một đứa trẻ đương nhiên vượt xa nuôi một con chó, nhưng các bạn chẳng phải có quan niệm nối dõi tông đường sao?
王麗華|年輕的一代不願意像父母一樣被婚姻及家庭束縛，更喜歡追求自由，過著無拘無束的生活；老一輩的人倒是還有這種觀念。|nián qīng de yí dài bú yuàn yì xiàng fù mǔ yí yàng bèi hūn yīn jí jiā tíng shù fù， gèng xǐ huān zhuī qiú zì yóu， guò zhù wú jū wú shù de shēng huó； lǎo yí bèi de rén dǎo shì hái yǒu zhè zhǒng guān niàn。|Thế hệ trẻ không muốn như cha mẹ bị hôn nhân và gia đình ràng buộc, thích tìm tự do, sống không câu thúc; thế hệ già thì vẫn còn quan niệm đó.
魯亞|難道政府沒有推行什麼政策來鼓勵生育嗎？|nán dào zhèng fǔ méi yǒu tuī xíng shén me zhèng cè lái gǔ lì shēng yù ma？|Chẳng lẽ chính phủ không có chính sách khuyến khích sinh đẻ?
王麗華|雖然政府提出了一些補助生育的政策，但是一般人還是覺得補助得不夠，所以寧可選擇不生孩子。|suī rán zhèng fǔ tí chū le yì xiē bǔ zhù shēng yù de zhèng cè， dàn shì yì bān rén hái shì jué dé bǔ zhù dé bú gòu， suǒ yǐ níng kě xuǎn zé bù shēng hái zi。|Tuy chính phủ có vài chính sách trợ cấp sinh đẻ, người dân vẫn thấy trợ cấp chưa đủ nên thà chọn không sinh.
魯亞|那麼，台灣以後會不會到處都只看得到老人呢？|nà me， tái wān yǐ hòu huì bú huì dào chù dōu zhǐ kàn dé dào lǎo rén ne？|Vậy sau này Đài Loan có phải đâu cũng chỉ thấy người già?
王麗華|很多夫婦就算願意生孩子，大多數也只生一個，現在很多孩子都是獨生子或獨生女。|hěn duō fū fù jiù suàn yuàn yì shēng hái zi， dà duō shù yě zhǐ shēng yí gè， xiàn zài hěn duō hái zi dōu shì dú shēng zi huò dú shēng nǚ。|Nhiều cặp vợ chồng dù muốn sinh con, đa số cũng chỉ sinh một, nay nhiều trẻ là con một.
魯亞|中國以前施行「一胎化政策」，大部分的家庭也只有一個孩子。|zhōng guó yǐ qián shī xíng 「yì tāi huà zhèng cè」， dà bù fèn de jiā tíng yě zhǐ yǒu yí gè hái zi。|Trung Quốc trước đây thi hành "chính sách một con", đa số gia đình cũng chỉ có một con.
王麗華|是啊，結果很多父母都把孩子寵壞了。孩子少對很多職業的影響也很大，像老師、婦產科醫生等。|shì a， jié guǒ hěn duō fù mǔ dōu bǎ hái zi chǒng huài le。 hái zi shǎo duì hěn duō zhí yè de yǐng xiǎng yě hěn dà， xiàng lǎo shī、 fù chǎn kē yī shēng děng。|Phải, kết quả nhiều cha mẹ chiều hư con. Trẻ ít cũng ảnh hưởng lớn đến nhiều nghề như giáo viên, bác sĩ phụ sản…
魯亞|難怪我的朋友最近失業了。她本來在補習班教英文，可是老闆告訴她，最近學生越來越少，所以不得不結束營業。這下子她得另外再找工作了。|nán guài wǒ de péng yǒu zuì jìn shī yè le。 tā běn lái zài bǔ xí bān jiào yīng wén， kě shì lǎo bǎn gào sù tā， zuì jìn xué shēng yuè lái yuè shǎo， suǒ yǐ bù dé bù jié shù yíng yè。 zhè xià zi tā dé lìng wài zài zhǎo gōng zuò le。|Hèn gì bạn mình gần đây thất nghiệp. Cô vốn dạy tiếng Anh ở lớp học thêm, nhưng ông chủ bảo học sinh ngày càng ít nên buộc phải đóng cửa. Giờ cô phải tìm việc khác.
短文|不知道從什麼時候起，台灣已成為全球生育率最低的國家之一。越來越多的人不結婚，他們覺得寧缺勿濫，只要合不來就分手。結了婚的人動不動就離婚，哪裡會考慮生兒育女這件事呢？另外值得注意的是，學歷越高者，生育的孩子越少，結婚年齡和生育的年齡也較大。|bù zhī dào cóng shén me shí hòu qǐ， tái wān yǐ chéng wèi quán qiú shēng yù lǜ zuì dī de guó jiā zhī yī。 yuè lái yuè duō de rén bù jié hūn， tā men jué dé níng quē wù làn， zhǐ yào hé bù lái jiù fēn shǒu。 jié le hūn de rén dòng bú dòng jiù lí hūn， nǎ lǐ huì kǎo lǜ shēng ér yù nǚ zhè jiàn shì ne？ lìng wài zhí de zhù yì de shì， xué lì yuè gāo zhě， shēng yù de hái zi yuè shǎo， jié hūn nián líng hé shēng yù de nián líng yě jiào dà。|Không rõ từ bao giờ Đài Loan đã trở thành một trong những nước có tỷ lệ sinh thấp nhất thế giới. Ngày càng nhiều người không kết hôn, họ thấy thà thiếu còn hơn bừa, hễ không hợp là chia tay. Người đã cưới hơi tí là ly hôn, đâu còn nghĩ đến sinh con đẻ cái. Đáng chú ý nữa là học vấn càng cao thì càng ít con, tuổi kết hôn và sinh con cũng lớn hơn.
短文|不婚、不生也使不少行業受到重大影響，不少幼稚園及學校都因為招生困難，只好不斷減班。沒想到台灣人這種不婚不生的現象居然也影響到了白如玉。昨天補習班的林老闆告訴她，補習班將營業到這個月底。|bù hūn、 bù shēng yě shǐ bù shǎo xíng yè shòu dào zhòng dà yǐng xiǎng， bù shǎo yòu zhì yuán jí xué xiào dōu yīn wèi zhāo shēng kùn nán， zhǐ hǎo bú duàn jiǎn bān。 méi xiǎng dào tái wān rén zhè zhǒng bù hūn bù shēng de xiàn xiàng jū rán yě yǐng xiǎng dào le bái rú yù。 zuó tiān bǔ xí bān de lín lǎo bǎn gào sù tā， bǔ xí bān jiāng yíng yè dào zhè gè yuè dǐ。|Không kết hôn, không sinh con cũng khiến nhiều ngành chịu ảnh hưởng nặng, nhiều trường mầm non và trường học vì tuyển sinh khó nên đành liên tục giảm lớp. Không ngờ hiện tượng này lại ảnh hưởng đến cả Bạch Như Ngọc. Hôm qua ông chủ Lâm của lớp học thêm bảo lớp chỉ mở đến cuối tháng.
短文|因為「少子化」的關係，這幾年很多連鎖的兒童美語補習班都倒閉了，更何況他這個小補習班呢？除了補習班無法繼續經營下去以外，林老闆更擔心的是台灣的未來。年輕人看不到遠景，只想過著獨善其身的生活。|yīn wèi 「shǎo zǐ huà」 de guān xì， zhè jǐ nián hěn duō lián suǒ de ér tóng měi yǔ bǔ xí bān dōu dào bì le， gèng hé kuàng tā zhè gè xiǎo bǔ xí bān ne？ chú le bǔ xí bān wú fǎ jì xù jīng yíng xià qù yǐ wài， lín lǎo bǎn gèng dān xīn de shì tái wān de wèi lái。 nián qīng rén kàn bú dào yuǎn jǐng， zhǐ xiǎng guò zhù dú shàn qí shēn de shēng huó。|Do "thiếu trẻ em", mấy năm nay nhiều chuỗi lớp tiếng Anh thiếu nhi đã phá sản, huống chi lớp nhỏ của ông. Ngoài lớp không thể tiếp tục, ông lo hơn cho tương lai Đài Loan. Người trẻ không thấy viễn cảnh, chỉ muốn sống lo thân mình.
短文|社會上沒有足夠的年輕人加入，經濟的發展更是停滯不前。人口老化，也給社會帶來很大的負擔。目前政府針對「少子化」提出的辦法，包括多項鼓勵生育的措施。從未婚生子減稅、延長產假、改善托育環境到第三胎每個月可領三千元直到孩子成年等。|shè huì shàng méi yǒu zú gòu de nián qīng rén jiā rù， jīng jì de fā zhǎn gèng shì tíng zhì bù qián。 rén kǒu lǎo huà， yě gěi shè huì dài lái hěn dà de fù dān。 mù qián zhèng fǔ zhēn duì 「shǎo zǐ huà」 tí chū de bàn fǎ， bāo kuò duō xiàng gǔ lì shēng yù de cuò shī。 cóng wèi hūn shēng zi jiǎn shuì、 yán zhǎng chǎn jiǎ、 gǎi shàn tuō yù huán jìng dào dì sān tāi měi gè yuè kě lǐng sān qiān yuán zhí dào hái zi chéng nián děng。|Xã hội thiếu người trẻ gia nhập, kinh tế càng trì trệ. Dân số già hóa cũng mang gánh nặng lớn cho xã hội. Hiện chính phủ nhắm vào "ít con" đưa ra nhiều biện pháp khuyến khích sinh đẻ: từ giảm thuế cho người sinh con ngoài hôn nhân, kéo dài nghỉ thai sản, cải thiện gửi trẻ đến thai thứ ba mỗi tháng nhận ba nghìn đồng cho đến khi con trưởng thành.
短文|要鼓勵生育，給錢並不是一個好辦法，除非政府能針對整體環境來改善，否則婦女還是不會有生育的意願。以前祖父母能幫忙照顧孫子、孫女，但是現代人晚婚、晚生育，同時要照顧老一代和新一代，要負擔的責任更重，因此就更不願意生育了。|yào gǔ lì shēng yù， gěi qián bìng bú shì yí gè hǎo bàn fǎ， chú fēi zhèng fǔ néng zhēn duì zhěng tǐ huán jìng lái gǎi shàn， fǒu zé fù nǚ hái shì bú huì yǒu shēng yù de yì yuàn。 yǐ qián zǔ fù mǔ néng bāng máng zhào gù sūn zi、 sūn nǚ， dàn shì xiàn dài rén wǎn hūn、 wǎn shēng yù， tóng shí yào zhào gù lǎo yí dài hé xīn yí dài， yào fù dān de zé rèn gèng zhòng， yīn cǐ jiù gèng bú yuàn yì shēng yù le。|Muốn khuyến khích sinh đẻ, cho tiền không phải cách hay, trừ phi chính phủ cải thiện toàn bộ môi trường, nếu không phụ nữ vẫn không muốn sinh. Trước đây ông bà giúp trông cháu, nhưng người hiện đại kết hôn, sinh con muộn, vừa phải chăm thế hệ già vừa chăm thế hệ mới, trách nhiệm nặng hơn nên càng không muốn sinh.
短文|政府雖然提出了不少政策，但是實現這些政策的預算常需要幾十億元，對國家財政是另一項沉重的負擔。政府如何有效改善台灣婦女生育的環境，正考驗著政府的智慧。|zhèng fǔ suī rán tí chū le bù shǎo zhèng cè， dàn shì shí xiàn zhè xiē zhèng cè de yù suàn cháng xū yào jǐ shí yì yuán， duì guó jiā cái zhèng shì lìng yí xiàng chén zhòng de fù dān。 zhèng fǔ rú hé yǒu xiào gǎi shàn tái wān fù nǚ shēng yù de huán jìng， zhèng kǎo yàn zhù zhèng fǔ de zhì huì。|Chính phủ tuy đưa ra nhiều chính sách nhưng ngân sách thực hiện thường cần hàng chục tỷ, là gánh nặng lớn khác cho tài chính quốc gia. Làm sao cải thiện hiệu quả môi trường sinh đẻ cho phụ nữ Đài Loan đang thử thách trí tuệ của chính phủ.`}},{n:9,zh:"再談台灣故事",vi:"Bàn thêm về câu chuyện Đài Loan",v:`逐漸|zhújiàn|dần dần|Adv
據點|jùdiǎn|căn cứ, cứ điểm|N
統治|tǒngzhì|cai trị|V
景點|jǐngdiǎn|điểm tham quan|N
繁榮|fánróng|phồn vinh|Vs
港口|gǎngkǒu|cảng|N
據說|jùshuō|nghe nói|V
鹿|lù|hươu nai|N
鹿群|lùqún|bầy nai|N
形狀|xíngzhuàng|hình dạng|N
鹿角|lùjiǎo|sừng nai|N
便|biàn|bèn, liền|Adv
稱|chēng|gọi là|V
動物園|dòngwùyuán|sở thú|N
皮|pí|da|N
殺|shā|giết|V
數量|shùliàng|số lượng|N
風光|fēngguāng|vẻ vang, huy hoàng|N
民宅|mínzhái|nhà dân|N
蚵仔煎|hézǎijiān|trứng chiên hàu|N
哦|ó|ồ (đồng ý)|Ptc
該|gāi|đến lúc nên (trang trọng)|Vaux
興盛|xìngshèng|hưng thịnh|Vs
時期|shíqī|thời kỳ|N
獨木舟|dúmùzhōu|thuyền độc mộc|N
為|wèi|là, coi là|Vst
載運|zàiyùn|chở, vận chuyển|V
改名|gǎimíng|đổi tên|V-sep
相似|xiāngsì|giống nhau|Vs
沒落|méiluò|suy tàn|Vp
依然|yīrán|vẫn|Adv
保留|bǎoliú|giữ lại|V
鹿港|lùgǎng|Lộc Cảng|Name
艋舺|měngxiá|Mãnh Giáp|Name
淡水河|dànshuǐhé|sông Đạm Thủy|Name
萬華|wànhuá|Vạn Hoa|Name
台語|táiyǔ|tiếng Đài (Mân Nam)|Name
日語|rìyǔ|tiếng Nhật|Name
家喻戶曉|jiāyùhùxiǎo|nhà nhà đều biết|Phrase
滿山遍野|mǎnshānbiànyě|khắp núi đồi đồng ruộng|Phrase
古色古香|gǔsègǔxiāng|cổ kính|Phrase
綠豆糕|lǜdòugāo|bánh đậu xanh|Phrase
牛舌餅|niúshébǐng|bánh lưỡi bò|Phrase
垂涎三尺|chuíxiánsānchǐ|thèm nhỏ dãi|Phrase
數目|shùmù|con số|N
大約|dàyuē|khoảng|Adv
佔|zhàn|chiếm|Vst
自從|zìcóng|kể từ|Prep
將近|jiāngjìn|gần|Adv
往來|wǎnglái|qua lại, giao thiệp|N
思念|sīniàn|nhớ nhung|Vst
通信|tōngxìn|thư từ liên lạc|V-sep
毫無|háowú|không hề có|Vst
音訊|yīnxùn|tin tức|N
遠離|yuǎnlí|xa rời|Vst
妻子|qīzǐ|vợ|N
永遠|yǒngyuǎn|mãi mãi|Adv
開放|kāifàng|mở cửa|Vp
探親|tànqīn|thăm thân|Vi
親人|qīnrén|người thân|N
打聽|dǎtīng|dò hỏi|V
不禁|bùjīn|không kìm được|Adv
淚|lèi|nước mắt|N
尚未|shàngwèi|vẫn chưa|Adv
出世|chūshì|ra đời|Vp
童年|tóngnián|tuổi thơ|N
傷心|shāngxīn|đau lòng|Vs
筆|bǐ|khoản (tiền)|M
仍然|réngrán|vẫn|Adv
原諒|yuánliàng|tha thứ|Vst
盡|jǐn|dốc hết|V
究竟|jiūjìng|rốt cuộc|Adv
內心|nèixīn|nội tâm|N
創傷|chuàngshāng|vết thương lòng|N
珍惜|zhēnxī|trân trọng|Vst
精華|jīnghuá|tinh hoa|Vs-attr
逃難|táonán|chạy nạn|Vi
實在|shízài|thật sự|Adv
歲月|suìyuè|năm tháng|N
遭遇|zāoyù|cảnh ngộ|N
老兵|lǎobīng|lão binh|N
老張|lǎozhāng|Lão Trương (cách gọi người họ Trương)|Name
文化大革命|wénhuàdàgémìng|Đại cách mạng văn hóa|Name
落地生根|luòdìshēnggēn|an cư lạc nghiệp, bén rễ|Phrase
身強體壯|shēnqiángtǐzhuàng|thân thể cường tráng|Phrase
離鄉背井|líxiāngbèijǐng|xa quê hương|Phrase
飄洋過海|piāoyángguòhǎi|vượt biển ra khơi|Phrase
朝思暮想|zhāosīmùxiǎng|ngày đêm thương nhớ|Phrase
一輩子|yíbèizi|cả đời|Phrase
恐懼不安|kǒngjùbùān|sợ hãi bất an|Phrase
刻骨銘心|kègǔmíngxīn|khắc cốt ghi tâm|Phrase
把A當做B|bǎAdāngzuòB|coi A là B|Phrase`,d:{l:`高來恩|哇！台北東區好熱鬧啊！|wa！ tái běi dōng qū hǎo rè nào a！|Chà! Khu Đông Đài Bắc náo nhiệt quá!
李文麗|以前這裡可不是熱鬧的地方，一百年前這裡還是鄉下，沒什麼人住。|yǐ qián zhè lǐ kě bú shì rè nào de dì fāng， yì bǎi nián qián zhè lǐ hái shì xiāng xià， méi shén me rén zhù。|Trước đây chỗ này đâu có náo nhiệt, một trăm năm trước còn là miền quê ít người ở.
高來恩|台灣以前最熱鬧的地方在哪裡？|tái wān yǐ qián zuì rè nào de dì fāng zài nǎ lǐ？|Ngày xưa nơi náo nhiệt nhất Đài Loan ở đâu?
李文麗|台灣的政治、經濟中心是從南往北逐漸發展的。以前有三個最熱鬧的地方，一是台南，二是鹿港，三是艋舺。|tái wān de zhèng zhì、 jīng jì zhōng xīn shì cóng nán wǎng běi zhú jiàn fā zhǎn de。 yǐ qián yǒu sān gè zuì rè nào de dì fāng， yí shì tái nán， èr shì lù gǎng， sān shì měng xiá。|Trung tâm chính trị, kinh tế Đài Loan phát triển dần từ nam lên bắc. Xưa có ba nơi náo nhiệt nhất: một là Đài Nam, hai là Lộc Cảng, ba là Mãnh Giáp.
高來恩|我去過台南，我知道差不多四百年前，荷蘭人曾經把台灣當做亞洲的貿易據點。台南有不少古蹟，赤崁樓就是荷蘭人統治台灣時，在台南建造的，那是家喻戶曉的觀光景點。鹿港和艋舺在哪裡？|wǒ qù guò tái nán， wǒ zhī dào chà bu duō sì bǎi nián qián， hé lán rén céng jīng bǎ tái wān dāng zuò yà zhōu de mào yì jù diǎn。 tái nán yǒu bù shǎo gǔ jī， chì kàn lóu jiù shì hé lán rén tǒng zhì tái wān shí， zài tái nán jiàn zào de， nà shì jiā yù hù xiǎo de guān guāng jǐng diǎn。 lù gǎng hé měng xiá zài nǎ lǐ？|Mình từng đến Đài Nam, biết khoảng bốn trăm năm trước người Hà Lan coi Đài Loan là cứ điểm thương mại châu Á. Đài Nam có nhiều di tích, lầu Xích Khảm do người Hà Lan xây khi cai trị, là điểm du lịch ai cũng biết. Lộc Cảng và Mãnh Giáp ở đâu?
李文麗|鹿港是以前台灣中部最繁榮的港口，據說河邊經常有鹿群出現，也有人說是因為港的形狀像鹿角，人們便稱這個地方「鹿港」。|lù gǎng shì yǐ qián tái wān zhōng bù zuì fán róng de gǎng kǒu， jù shuō hé biān jīng cháng yǒu lù qún chū xiàn， yě yǒu rén shuō shì yīn wèi gǎng de xíng zhuàng xiàng lù jiǎo， rén men biàn chēng zhè gè dì fāng 「lù gǎng」。|Lộc Cảng xưa là hải cảng phồn vinh nhất miền trung Đài Loan, nghe nói bên sông thường có bầy nai xuất hiện, cũng có người bảo do hình cảng giống sừng nai nên người ta gọi là "Lộc Cảng".
高來恩|台灣以前有很多鹿嗎？|tái wān yǐ qián yǒu hěn duō lù ma？|Đài Loan xưa có nhiều nai không?
李文麗|以前台灣中部滿山遍野到處可以看到鹿。|yǐ qián tái wān zhōng bù mǎn shān biàn yě dào chù kě yǐ kàn dào lù。|Trước đây miền trung Đài Loan khắp núi đồi đâu cũng thấy nai.
高來恩|為什麼現在在台灣看不到鹿，只有在動物園才看得到？|wèi shén me xiàn zài zài tái wān kàn bú dào lù， zhǐ yǒu zài dòng wù yuán cái kàn dé dào？|Sao giờ ở Đài Loan không thấy nai, chỉ sở thú mới có?
李文麗|聽說後來有人為了賣鹿皮賺錢，不知殺了多少鹿，在這種情形下，鹿的數量就減少了。|tīng shuō hòu lái yǒu rén wèi le mài lù pí zhuàn qián， bù zhī shā le duō shǎo lù， zài zhè zhǒng qíng xíng xià， lù de shù liàng jiù jiǎn shǎo le。|Nghe nói sau đó có người vì bán da nai kiếm tiền mà giết không biết bao nhiêu nai, trong tình hình đó số lượng nai giảm đi.
高來恩|鹿港有什麼值得參觀的景點嗎？|lù gǎng yǒu shén me zhí de cān guān de jǐng diǎn ma？|Lộc Cảng có điểm nào đáng tham quan không?
李文麗|鹿港的風光已經成為歷史，可是留下了許多古蹟，那裡的寺廟和民宅都是古色古香的，非常值得參觀。|lù gǎng de fēng guāng yǐ jīng chéng wèi lì shǐ， kě shì liú xià le xǔ duō gǔ jī， nà lǐ de sì miào hé mín zhái dōu shì gǔ sè gǔ xiāng de， fēi cháng zhí de cān guān。|Vẻ huy hoàng của Lộc Cảng đã thành lịch sử nhưng còn nhiều di tích, đền chùa và nhà dân ở đó đều cổ kính, rất đáng xem.
高來恩|那裡有什麼好吃的東西？|nà lǐ yǒu shén me hǎo chī de dōng xī？|Ở đó có món gì ngon?
李文麗|鹿港有一些傳統點心和小吃，像綠豆糕、牛舌餅和蚵仔煎，都讓人垂涎三尺。|lù gǎng yǒu yì xiē chuán tǒng diǎn xīn hé xiǎo chī， xiàng lǜ dòu gāo、 niú shé bǐng hé hé zǎi jiān， dōu ràng rén chuí xián sān chǐ。|Lộc Cảng có vài món bánh và đồ ăn vặt truyền thống như bánh đậu xanh, bánh lưỡi bò, trứng chiên hàu, đều khiến người ta thèm nhỏ dãi.
高來恩|哦，那麼好吃嗎？我真想嚐嚐看。再來，該介紹一下「艋舺」在哪裡了！|ó， nà me hǎo chī ma？ wǒ zhēn xiǎng cháng cháng kàn。 zài lái， gāi jiè shào yí xià 「měng xiá」 zài nǎ lǐ le！|Ồ, ngon thế sao? Mình rất muốn nếm thử. Tiếp theo đến lúc giới thiệu "Mãnh Giáp" ở đâu rồi!
李文麗|「艋舺」在台灣北部淡水河邊，是台北最早發展的地方，差不多兩百年前是它最興盛的時期，現在叫「萬華」。因為當時淡水河上都是獨木舟，獨木舟是一種小船，原住民稱獨木舟為「艋舺」，大家就把這個地方叫「艋舺」。|「měng xiá」 zài tái wān běi bù dàn shuǐ hé biān， shì tái běi zuì zǎo fā zhǎn de dì fāng， chà bu duō liǎng bǎi nián qián shì tā zuì xìng shèng de shí qī， xiàn zài jiào 「wàn huá」。 yīn wèi dāng shí dàn shuǐ hé shàng dōu shì dú mù zhōu， dú mù zhōu shì yì zhǒng xiǎo chuán， yuán zhù mín chēng dú mù zhōu wèi 「měng xiá」， dà jiā jiù bǎ zhè gè dì fāng jiào 「měng xiá」。|"Mãnh Giáp" nằm bên sông Đạm Thủy phía bắc Đài Loan, là nơi phát triển sớm nhất Đài Bắc, khoảng hai trăm năm trước là thời kỳ hưng thịnh nhất, nay gọi là "Vạn Hoa". Vì lúc đó trên sông toàn thuyền độc mộc, người bản địa gọi thuyền độc mộc là "Mãnh Giáp", mọi người gọi nơi này là Mãnh Giáp.
高來恩|我還是不懂為什麼「艋舺」現在叫「萬華」。|wǒ hái shì bù dǒng wèi shén me 「měng xiá」 xiàn zài jiào 「wàn huá」。|Mình vẫn không hiểu sao "Mãnh Giáp" nay gọi là "Vạn Hoa".
李文麗|以前原住民用獨木舟從淡水河載運農產品來賣，日本人統治台灣的時候，因「艋舺」的台語發音與日語「萬華」(Manka)相似，所以改名「萬華」，現在台語還是叫「艋舺」(Bangkah)。|yǐ qián yuán zhù mín yòng dú mù zhōu cóng dàn shuǐ hé zài yùn nóng chǎn pǐn lái mài， rì běn rén tǒng zhì tái wān de shí hòu， yīn 「měng xiá」 de tái yǔ fā yīn yǔ rì yǔ 「wàn huá」(Manka) xiāng sì， suǒ yǐ gǎi míng 「wàn huá」， xiàn zài tái yǔ hái shì jiào 「měng xiá」(Bangkah)。|Trước đây người bản địa chở nông sản bằng thuyền độc mộc trên sông Đạm Thủy đến bán, thời Nhật cai trị, vì phát âm tiếng Đài của "Mãnh Giáp" giống "Vạn Hoa" (Manka) trong tiếng Nhật nên đổi tên thành "Vạn Hoa", tiếng Đài hiện vẫn gọi là "Mãnh Giáp" (Bangkah).
高來恩|原來是這樣啊！那萬華有什麼可看的地方嗎？|yuán lái shì zhè yàng a！ nà wàn huá yǒu shén me kě kàn de dì fāng ma？|Hóa ra là vậy! Vạn Hoa có chỗ nào đáng xem không?
李文麗|雖然萬華沒落了，卻依然保留了許多古蹟、寺廟、老街，都值得去看看，會讓人覺得好像回到過去。路邊也有很多傳統美食，觀光客都喜歡去那裡。下次我們一起去吧！|suī rán wàn huá méi là le， què yī rán bǎo liú le xǔ duō gǔ jī、 sì miào、 lǎo jiē， dōu zhí de qù kàn kàn， huì ràng rén jué dé hǎo xiàng huí dào guò qù。 lù biān yě yǒu hěn duō chuán tǒng měi shí， guān guāng kè dōu xǐ huān qù nà lǐ。 xià cì wǒ men yì qǐ qù ba！|Tuy Vạn Hoa suy tàn nhưng vẫn giữ nhiều di tích, đền chùa, phố cổ đều đáng xem, khiến ta ngỡ như trở về quá khứ. Ven đường cũng có nhiều món truyền thống, khách du lịch đều thích đến. Lần sau cùng đi nhé!
短文|老張在身強體壯的年紀去當兵，後來離鄉背井，飄洋過海，隨著蔣介石的軍隊來到了台灣，根據台灣的人口資料，1949年從中國大陸到台灣來的人口數目，差不多是一百多萬，大約佔當時台灣人口的百分之十三。自從1949年以後，台灣和中國將近四十年沒有任何往來，因此改變了老張的命運。|lǎo zhāng zài shēn qiáng tǐ zhuàng de nián jì qù dāng bīng， hòu lái lí xiāng bèi jǐng， piāo yáng guò hǎi， suí zhù jiǎng jiè shí de jūn duì lái dào le tái wān， gēn jù tái wān de rén kǒu zī liào，1949 nián cóng zhōng guó dà lù dào tái wān lái de rén kǒu shù mù， chà bu duō shì yì bǎi duō wàn， dà yuē zhàn dāng shí tái wān rén kǒu de bǎi fēn zhī shí sān。 zì cóng 1949 nián yǐ hòu， tái wān hé zhōng guó jiāng jìn sì shí nián méi yǒu rèn hé wǎng lái， yīn cǐ gǎi biàn le lǎo zhāng de mìng yùn。|Lão Trương đi lính khi còn cường tráng, sau đó xa quê vượt biển theo quân Tưởng Giới Thạch đến Đài Loan; theo số liệu dân số, năm 1949 số người từ đại lục sang Đài Loan khoảng hơn một triệu, chiếm khoảng 13% dân số lúc đó. Từ 1949, Đài Loan và Trung Quốc gần bốn mươi năm không qua lại, vì thế thay đổi số phận Lão Trương.
短文|剛來台灣的時候，老張以為過不了幾年就能回去。他雖然思念家人，卻一直無法回老家，連通信也不可以，家人毫無音訊。過了幾年他離開軍隊，靠賣麵過生活。遠離了父母親與妻子，朝思暮想，等待了二十多年還是不能回去，他想大概永遠都回不去了。|gāng lái tái wān de shí hòu， lǎo zhāng yǐ wèi guò bù liǎo jǐ nián jiù néng huí qù。 tā suī rán sī niàn jiā rén， què yì zhí wú fǎ huí lǎo jiā， lián tōng xìn yě bù kě yǐ， jiā rén háo wú yīn xùn。 guò le jǐ nián tā lí kāi jūn duì， kào mài miàn guò shēng huó。 yuǎn lí le fù mǔ qīn yǔ qī zǐ， zhāo sī mù xiǎng， děng dài le èr shí duō nián hái shì bù néng huí qù， tā xiǎng dà gài yǒng yuǎn dōu huí bú qù le。|Lúc mới đến Đài Loan, Lão Trương tưởng vài năm là về được. Tuy nhớ gia đình nhưng không về quê được, ngay cả thư từ cũng không, người nhà bặt tin. Vài năm sau ông rời quân đội, sống nhờ bán mì. Xa cha mẹ và vợ, ngày đêm thương nhớ, chờ hơn hai mươi năm vẫn không về được, ông nghĩ có lẽ vĩnh viễn không về nữa.
短文|他覺得很孤單，經過朋友的介紹，在台灣又娶了一個太太，生了兩個女兒。沒想到來台四十年後政府開放探親，他終於可以回去看親人了。他到處打聽家人的消息，才知道父母親和妻子早已在文化大革命時過世了。當他聽到這個消息，不禁流下淚來。|tā jué dé hěn gū dān， jīng guò péng yǒu de jiè shào， zài tái wān yòu qǔ le yí gè tài tài， shēng le liǎng gè nǚ ér。 méi xiǎng dào lái tái sì shí nián hòu zhèng fǔ kāi fàng tàn qīn， tā zhōng yú kě yǐ huí qù kàn qīn rén le。 tā dào chù dǎ tīng jiā rén de xiāo xī， cái zhī dào fù mǔ qīn hé qī zǐ zǎo yǐ zài wén huà dà gé mìng shí guò shì le。 dāng tā tīng dào zhè gè xiāo xī， bù jīn liú xià lèi lái。|Ông thấy cô đơn, qua bạn giới thiệu lấy thêm vợ ở Đài Loan, sinh hai con gái. Không ngờ bốn mươi năm sau chính phủ cho phép thăm thân, ông cuối cùng được về thăm người thân. Ông khắp nơi hỏi tin gia đình mới biết cha mẹ và vợ đã mất từ thời Cách mạng Văn hóa. Nghe tin, ông không kìm được nước mắt.
短文|他終於回去見到了離開家鄉時尚未出世的兒子。兒子的童年沒有爸爸，靠親戚過日子，吃了很多苦。老張看著第一次見面時已經四十歲的兒子，他的心裡既高興又傷心。雖然老張為兒子買了很多東西，並且留下一筆錢，但是兒子仍然不能原諒父親，他怪父親沒有盡到做父親的責任。|tā zhōng yú huí qù jiàn dào le lí kāi jiā xiāng shí shàng wèi chū shì de ér zi。 ér zi de tóng nián méi yǒu bà bà， kào qīn qī guò rì zi， chī le hěn duō kǔ。 lǎo zhāng kàn zhù dì yī cì jiàn miàn shí yǐ jīng sì shí suì de ér zi， tā de xīn lǐ jì gāo xìng yòu shāng xīn。 suī rán lǎo zhāng wèi ér zi mǎi le hěn duō dōng xī， bìng qiě liú xià yì bǐ qián， dàn shì ér zi réng rán bù néng yuán liàng fù qīn， tā guài fù qīn méi yǒu jǐn dào zuò fù qīn de zé rèn。|Ông cuối cùng gặp người con trai chưa ra đời khi ông rời quê. Tuổi thơ con không có cha, sống nhờ họ hàng, chịu nhiều khổ. Nhìn đứa con đã bốn mươi tuổi lần đầu gặp mặt, lòng ông vừa mừng vừa đau. Tuy ông mua nhiều đồ và để lại một khoản tiền, con vẫn không tha thứ, trách cha không làm tròn trách nhiệm.
短文|這究竟是誰的錯？誰了解他們內心的痛苦和創傷？老張帶著遺憾回台灣了。老張說：「生活在沒有戰爭的時代，要好好珍惜。我這一輩子最精華的時間不是在打仗就是在逃難，吃的苦實在太多。我已習慣這裡的生活，不打算回去了，台灣就是我的家鄉，我算是落地生根了。」|zhè jiū jìng shì shuí de cuò？ shuí liǎo jiě tā men nèi xīn de tòng kǔ hé chuàng shāng？ lǎo zhāng dài zhù yí hàn huí tái wān le。 lǎo zhāng shuō：「shēng huó zài méi yǒu zhàn zhēng de shí dài， yào hǎo hǎo zhēn xī。 wǒ zhè yí bèi zi zuì jīng huá de shí jiān bú shì zài dǎ zhàng jiù shì zài táo nán， chī de kǔ shí zài tài duō。 wǒ yǐ xí guàn zhè lǐ de shēng huó， bù dǎ suàn huí qù le， tái wān jiù shì wǒ de jiā xiāng， wǒ suàn shì luò dì shēng gēn le。」|Rốt cuộc là lỗi của ai? Ai hiểu nỗi đau và vết thương lòng của họ? Lão Trương mang tiếc nuối về Đài Loan. Ông nói: "Sống trong thời không có chiến tranh phải trân trọng. Thời gian đẹp nhất đời tôi hoặc là đánh trận hoặc là chạy nạn, khổ quá nhiều. Tôi đã quen cuộc sống ở đây, không định về nữa, Đài Loan là quê tôi, coi như tôi đã bén rễ."
短文|恐懼不安的歲月過去了，老張在這裡找到了平靜。許多跟老張有一樣遭遇的老兵，都有一段刻骨銘心的故事。|kǒng jù bù ān de suì yuè guò qù le， lǎo zhāng zài zhè lǐ zhǎo dào le píng jìng。 xǔ duō gēn lǎo zhāng yǒu yí yàng zāo yù de lǎo bīng， dōu yǒu yí duàn kè gǔ míng xīn de gù shì。|Những năm tháng sợ hãi bất an đã qua, Lão Trương tìm thấy bình yên nơi đây. Nhiều lão binh cùng cảnh ngộ đều có một câu chuyện khắc cốt ghi tâm.`}},{n:10,zh:"應徵",vi:"Ứng tuyển",v:`何建明|héjiànmíng|Hà Kiến Minh (nam, vừa tốt nghiệp đại học)|Name
應徵|yīngzhēng|ứng tuyển|V
配|pèi|phối, hợp|Vpt
領帶|lǐngdài|cà vạt|N
花|huā|rực rỡ, lòe loẹt|Vs
素色|sùsè|màu trơn|N
剩下|shèngxià|còn lại|Vpt
龍頭|lóngtóu|đầu tàu, dẫn đầu|N
起薪|qǐxīn|lương khởi điểm|N
福利|fúlì|phúc lợi|N
具備|jùbèi|có đủ (điều kiện)|Vst
限制|xiànzhì|hạn chế|N
以上|yǐshàng|trở lên|N
以下|yǐxià|trở xuống|N
相關|xiāngguān|liên quan|Vs-attr
各位|gèwèi|các vị|N
應屆|yīngjiè|năm nay, khóa này|Vs-attr
畢業生|bìyèshēng|sinh viên tốt nghiệp|N
大一|dàyī|sinh viên năm nhất|N
企劃部|qǐhuàbù|phòng kế hoạch|N
營運|yíngyùn|vận hành, kinh doanh|N
知識|zhīshí|kiến thức|N
社長|shèzhǎng|chủ nhiệm câu lạc bộ|N
聯合|liánhé|liên kết, cùng|Adv
音樂會|yīnlèhuì|buổi hòa nhạc|N
節目|jiémù|chương trình|N
好評|hǎopíng|đánh giá tốt|N
企劃|qǐhuà|lên kế hoạch|N/V
領導|lǐngdǎo|lãnh đạo|V
合作|hézuò|hợp tác|Vi
似乎|sìhū|dường như|Adv
關於|guānyú|về|Prep
磨練|móliàn|rèn luyện|N/V
優點|yōudiǎn|ưu điểm|N
上司|shàngsī|cấp trên|N
誇獎|kuājiǎng|khen ngợi|V
週|zhōu|tuần|M
內|nèi|trong vòng|N
以|yǐ|dùng (trang trọng)|Prep
書面|shūmiàn|bằng văn bản|N
通知|tōngzhī|thông báo|N/V
就……而言|jiùéryán|xét về…|Phrase
新鮮人|xīnxiānrén|người mới ra trường|Phrase
面試官|miànshìguān|người phỏng vấn|Phrase
自我介紹|zìwǒjièshào|tự giới thiệu|Phrase
所學有限|suǒxuéyǒuxiàn|kiến thức học được có hạn|Phrase
關|guān|cửa ải, thử thách|N
接觸|jiēchù|tiếp xúc|V
青年|qīngnián|thanh niên|N
貸款|dàikuǎn|vay vốn|N
開店|kāidiàn|mở cửa hàng|V-sep
料|liào|người có khả năng|N
損失|sǔnshī|tổn thất|Vpt
勇氣|yǒngqì|dũng khí|N
員工|yuángōng|nhân viên|N
求職|qiúzhí|tìm việc|Vi
目標|mùbiāo|mục tiêu|N
初步|chūbù|sơ bộ|Vs-attr
技巧|jìqiǎo|kỹ năng, mẹo|N
概念|gàiniàn|khái niệm|N
挑|tiāo|chọn|V
基本|jīběn|cơ bản|Vs
襯衫|chènshān|áo sơ mi|N
過程|guòchéng|quá trình|N
同班|tóngbān|cùng lớp|Phrase
是……的料|shìdeliào|là người có khả năng…|Phrase
接下來|jiēxiàlái|tiếp theo|Phrase
提不起(勇氣)|tíbùqǐ(yǒngqì)|không đủ (dũng khí)|Phrase
養家活口|yǎngjiāhuókǒu|nuôi sống gia đình|Phrase
來自|láizì|đến từ|Phrase
熟讀|shúdú|đọc thuộc|Phrase
考古題|kǎogǔtí|đề thi các năm trước|Phrase
沙盤推演|shāpántuīyǎn|diễn tập mô phỏng|Phrase
深藍色|shēnlánsè|màu xanh đậm|Phrase`,d:{l:`建明|玉珍，幫我看看我的西裝配這條領帶適不適合。|yù zhēn， bāng wǒ kàn kàn wǒ de xī zhuāng pèi zhè tiáo lǐng dài shì bú shì hé。|Ngọc Trân, giúp anh xem bộ com-lê phối với cà vạt này có hợp không.
玉珍|要面試的話，這條領帶太花了，換條素色的吧！哥，看你好像很緊張的樣子。|yào miàn shì de huà， zhè tiáo lǐng dài tài huā le， huàn tiáo sù sè de ba！ gē， kàn nǐ hǎo xiàng hěn jǐn zhāng de yàng zi。|Đi phỏng vấn thì cà vạt này lòe loẹt quá, đổi cái màu trơn đi! Anh, trông anh có vẻ rất căng thẳng.
建明|是很緊張！聽說光是寄履歷表應徵的就有一千多人，有面試機會的剩下兩百多，最後只錄取十幾個，錄取率真低。|shì hěn jǐn zhāng！ tīng shuō guāng shì jì lǚ lì biǎo yīng zhēng de jiù yǒu yì qiān duō rén， yǒu miàn shì jī huì de shèng xià liǎng bǎi duō， zuì hòu zhǐ lù qǔ shí jǐ gè， lù qǔ shuài zhēn dī。|Đúng là rất căng thẳng! Nghe nói riêng gửi hồ sơ ứng tuyển đã hơn một nghìn người, được phỏng vấn còn hơn hai trăm, cuối cùng chỉ nhận mười mấy người, tỷ lệ đỗ thấp thật.
玉珍|當然啊！這家公司是國內餐飲業的龍頭，就社會新鮮人而言，起薪算高的，聽說福利也很不錯，大家當然搶著進去。應徵者需要具備什麼條件呢？|dāng rán a！ zhè jiā gōng sī shì guó nèi cān yǐn yè de lóng tóu， jiù shè huì xīn xiān rén ér yán， qǐ xīn suàn gāo de， tīng shuō fú lì yě hěn bú cuò， dà jiā dāng rán qiǎng zhù jìn qù。 yīng zhēng zhě xū yào jù bèi shén me tiáo jiàn ne？|Đương nhiên! Công ty này đứng đầu ngành ăn uống trong nước, đối với người mới ra trường lương khởi điểm khá cao, nghe nói phúc lợi cũng tốt, ai cũng tranh vào. Ứng viên cần điều kiện gì?
建明|其實沒什麼特別的限制，只要學士學位以上，三十五歲以下，也不一定要相關科系。|qí shí méi shén me tè bié de xiàn zhì， zhǐ yào xué shì xué wèi yǐ shàng， sān shí wǔ suì yǐ xià， yě bù yí dìng yào xiāng guān kē xì。|Thật ra không có hạn chế đặc biệt, chỉ cần có bằng cử nhân trở lên, dưới ba mươi lăm tuổi, cũng không nhất thiết đúng ngành.
玉珍|難怪應徵的人那麼多。哥，加油！|nán guài yīng zhēng de rén nà me duō。 gē， jiā yóu！|Hèn gì nhiều người ứng tuyển. Anh, cố lên!
面試官|何建明，請你先簡單自我介紹一下。|hé jiàn míng， qǐng nǐ xiān jiǎn dān zì wǒ jiè shào yí xià。|Hà Kiến Minh, mời anh tự giới thiệu đơn giản trước.
建明|好的。各位好！我是何建明，臺灣師範大學歷史系畢業，二十三歲，家住台北，家中有父母及妹妹，一共四個人。|hǎo de。 gè wèi hǎo！ wǒ shì hé jiàn míng， tái wān shī fàn dà xué lì shǐ xì bì yè， èr shí sān suì， jiā zhù tái běi， jiā zhōng yǒu fù mǔ jí mèi mèi， yí gòng sì gè rén。|Vâng. Chào các vị! Tôi là Hà Kiến Minh, tốt nghiệp khoa Lịch sử Đại học Sư phạm Đài Loan, 23 tuổi, nhà ở Đài Bắc, trong nhà có cha mẹ và em gái, tổng cộng bốn người.
面試官|你是應屆畢業生，在大學時期有任何工作經驗嗎？|nǐ shì yīng jiè bì yè shēng， zài dà xué shí qī yǒu rèn hé gōng zuò jīng yàn ma？|Anh là sinh viên mới tốt nghiệp, thời đại học có kinh nghiệm làm việc nào không?
建明|有的，我在大學四年中，有不少打工經驗。因為我對餐飲業很有興趣，所以大一在一家小餐廳打工。後來覺得在那裡所學有限，於是就換到一家連鎖咖啡店。大三暑假我申請到一家連鎖餐飲公司的企劃部實習，在那裡學習到了許多營運方面的知識。|yǒu de， wǒ zài dà xué sì nián zhōng， yǒu bù shǎo dǎ gōng jīng yàn。 yīn wèi wǒ duì cān yǐn yè hěn yǒu xìng qù， suǒ yǐ dà yí zài yì jiā xiǎo cān tīng dǎ gōng。 hòu lái jué dé zài nà lǐ suǒ xué yǒu xiàn， yú shì jiù huàn dào yì jiā lián suǒ kā fēi diàn。 dà sān shǔ jià wǒ shēn qǐng dào yì jiā lián suǒ cān yǐn gōng sī de qǐ huà bù shí xí， zài nà lǐ xué xí dào le xǔ duō yíng yùn fāng miàn de zhī shí。|Có, trong bốn năm đại học tôi làm thêm khá nhiều. Vì rất hứng thú ngành ăn uống nên năm nhất làm ở một nhà hàng nhỏ. Sau thấy học được có hạn nên chuyển sang chuỗi quán cà phê. Hè năm ba tôi xin thực tập ở phòng kế hoạch một công ty chuỗi ăn uống, học được nhiều kiến thức về vận hành.
面試官|你的履歷表上說，你曾經當過社團的社長。可以談談那個經驗嗎？|nǐ de lǚ lì biǎo shàng shuō， nǐ céng jīng dāng guò shè tuán de shè zhǎng。 kě yǐ tán tán nà gè jīng yàn ma？|CV của anh nói từng làm chủ nhiệm câu lạc bộ. Anh có thể nói về trải nghiệm đó không?
建明|好的。我在大二的時候當了一年熱門音樂社社長，跟幾所大學聯合舉辦了兩場很大的音樂會，節目精彩，很受好評。這一年中，我學到了企劃活動的方法，也提高了自己的領導能力，更重要的是學習到很多跟人合作、討論的經驗。|hǎo de。 wǒ zài dà èr de shí hòu dāng le yì nián rè mén yīn lè shè shè zhǎng， gēn jǐ suǒ dà xué lián hé jǔ bàn le liǎng chǎng hěn dà de yīn lè huì， jié mù jīng cǎi， hěn shòu hǎo píng。 zhè yì nián zhōng， wǒ xué dào le qǐ huà huó dòng de fāng fǎ， yě tí gāo le zì jǐ de lǐng dǎo néng lì， gèng zhòng yào de shì xué xí dào hěn duō gēn rén hé zuò、 tǎo lùn de jīng yàn。|Vâng. Năm hai tôi làm chủ nhiệm câu lạc bộ nhạc pop một năm, phối hợp với vài trường đại học tổ chức hai buổi hòa nhạc lớn, chương trình đặc sắc, được đánh giá tốt. Năm đó tôi học được cách lập kế hoạch hoạt động, nâng cao khả năng lãnh đạo, quan trọng hơn là học được nhiều kinh nghiệm hợp tác, thảo luận với người khác.
面試官|從你的打工跟實習經驗看起來，你似乎對餐飲業很有興趣。可是你知道，餐飲業非常辛苦嗎？|cóng nǐ de dǎ gōng gēn shí xí jīng yàn kàn qǐ lái， nǐ sì hū duì cān yǐn yè hěn yǒu xìng qù。 kě shì nǐ zhī dào， cān yǐn yè fēi cháng xīn kǔ ma？|Xem kinh nghiệm làm thêm và thực tập, anh dường như rất hứng thú ngành ăn uống. Nhưng anh biết ngành này rất vất vả chứ?
建明|是的，我知道。因為我的學長就是從事餐飲工作，他告訴了我不少關於這方面的事。但是我並沒有因此放棄從事餐飲業的想法，我認為就一個社會新鮮人而言，這個工作是個很好的磨練，讓我更想挑戰這個工作。|shì de， wǒ zhī dào。 yīn wèi wǒ de xué zhǎng jiù shì cóng shì cān yǐn gōng zuò， tā gào sù le wǒ bù shǎo guān yú zhè fāng miàn de shì。 dàn shì wǒ bìng méi yǒu yīn cǐ fàng qì cóng shì cān yǐn yè de xiǎng fǎ， wǒ rèn wèi jiù yí gè shè huì xīn xiān rén ér yán， zhè gè gōng zuò shì gè hěn hǎo de mó liàn， ràng wǒ gèng xiǎng tiāo zhàn zhè gè gōng zuò。|Vâng, tôi biết. Đàn anh của tôi làm ngành này, anh kể cho tôi nhiều chuyện. Nhưng tôi không vì thế bỏ ý định làm ngành ăn uống, tôi nghĩ với người mới ra trường đây là sự rèn luyện tốt, càng khiến tôi muốn thử thách công việc này.
面試官|你覺得你有什麼優點可以讓我們錄取你？|nǐ jué dé nǐ yǒu shén me yōu diǎn kě yǐ ràng wǒ men lù qǔ nǐ？|Anh thấy mình có ưu điểm gì để chúng tôi nhận anh?
建明|就像我在前面提到的，由於我有領導社團的經驗，所以我跟人合作的能力還不錯。另外，我工作認真，打工時上司常誇獎我。錄取我，公司應該不會後悔。|jiù xiàng wǒ zài qián miàn tí dào de， yóu yú wǒ yǒu lǐng dǎo shè tuán de jīng yàn， suǒ yǐ wǒ gēn rén hé zuò de néng lì hái bú cuò。 lìng wài， wǒ gōng zuò rèn zhēn， dǎ gōng shí shàng sī cháng kuā jiǎng wǒ。 lù qǔ wǒ， gōng sī yīng gāi bú huì hòu huǐ。|Như tôi đã nói, do có kinh nghiệm lãnh đạo câu lạc bộ nên khả năng hợp tác với người khác khá tốt. Ngoài ra tôi làm việc nghiêm túc, khi làm thêm cấp trên thường khen. Nhận tôi, công ty chắc không hối hận.
面試官|好的，今天的面試就到這裡，不管錄不錄取，我們都會在一週內以書面通知你。謝謝你來面試。|hǎo de， jīn tiān de miàn shì jiù dào zhè lǐ， bù guǎn lù bú lù qǔ， wǒ men dōu huì zài yì zhōu nèi yǐ shū miàn tōng zhī nǐ。 xiè xiè nǐ lái miàn shì。|Được, buổi phỏng vấn hôm nay đến đây, dù nhận hay không chúng tôi đều thông báo bằng văn bản trong vòng một tuần. Cảm ơn anh đã đến.
建明|謝謝各位給我這個機會！|xiè xiè gè wèi gěi wǒ zhè gè jī huì！|Cảm ơn các vị đã cho tôi cơ hội này!
短文|最近建明的同班同學有的到處找工作；有的已經考上研究所，正在享受輕鬆的暑假；有的申請到國外的研究所，出國以前，得好好練習外語；還有兩個女同學打算自己創業賣衣服，正忙著找店面、找資金、找廠商。|zuì jìn jiàn míng de tóng bān tóng xué yǒu de dào chù zhǎo gōng zuò； yǒu de yǐ jīng kǎo shàng yán jiū suǒ， zhèng zài xiǎng shòu qīng sōng de shǔ jià； yǒu de shēn qǐng dào guó wài de yán jiū suǒ， chū guó yǐ qián， dé hǎo hǎo liàn xí wài yǔ； hái yǒu liǎng gè nǚ tóng xué dǎ suàn zì jǐ chuàng yè mài yī fú， zhèng máng zhù zhǎo diàn miàn、 zhǎo zī jīn、 zhǎo chǎng shāng。|Gần đây bạn cùng lớp Kiến Minh người thì đi tìm việc khắp nơi; người đã đỗ cao học, đang tận hưởng kỳ nghỉ hè nhẹ nhàng; người xin được cao học ở nước ngoài, trước khi đi phải luyện ngoại ngữ; còn hai bạn nữ định khởi nghiệp bán quần áo, bận tìm mặt bằng, vốn và nhà cung cấp.
短文|建明當然也不例外，寄履歷，等通知。這一關似乎比考大學還難。其實因為建明在大學時接觸過一些餐飲業，他也想過，去跟銀行申請青年創業貸款來自己開店，但又擔心自己不是做生意的料。最後如果因為太辛苦而做不下去，恐怕要損失一筆錢。接下來還會有繳不完的貸款。想到這裡就提不起勇氣當老闆，寧可進一個大企業當員工。|jiàn míng dāng rán yě bú lì wài， jì lǚ lì， děng tōng zhī。 zhè yì guān sì hū bǐ kǎo dà xué hái nán。 qí shí yīn wèi jiàn míng zài dà xué shí jiē chù guò yì xiē cān yǐn yè， tā yě xiǎng guò， qù gēn yín xíng shēn qǐng qīng nián chuàng yè dài kuǎn lái zì jǐ kāi diàn， dàn yòu dān xīn zì jǐ bú shì zuò shēng yì de liào。 zuì hòu rú guǒ yīn wèi tài xīn kǔ ér zuò bú xià qù， kǒng pà yào sǔn shī yì bǐ qián。 jiē xià lái hái huì yǒu jiǎo bù wán de dài kuǎn。 xiǎng dào zhè lǐ jiù tí bù qǐ yǒng qì dāng lǎo bǎn， níng kě jìn yí gè dà qǐ yè dāng yuán gōng。|Kiến Minh tất nhiên cũng không ngoại lệ, gửi CV, chờ thông báo. Cửa ải này dường như khó hơn thi đại học. Thật ra vì thời đại học từng tiếp xúc ngành ăn uống, anh cũng nghĩ đến vay vốn thanh niên khởi nghiệp mở quán, nhưng lo mình không có tố chất kinh doanh. Cuối cùng nếu quá vất vả làm không nổi, e mất một khoản tiền, rồi còn khoản vay trả hoài không hết. Nghĩ đến đây anh không đủ can đảm làm ông chủ, thà vào doanh nghiệp lớn làm nhân viên.
短文|為了求職的事，建明也跟父母討論過，建明父母對他的工作倒是沒有特別的意見，只希望他找個能穩定發展的工作，將來可以養家活口就好。幸虧沒有來自父母的壓力，他才能按照自己的興趣找工作。|wèi le qiú zhí de shì， jiàn míng yě gēn fù mǔ tǎo lùn guò， jiàn míng fù mǔ duì tā de gōng zuò dǎo shì méi yǒu tè bié de yì jiàn， zhǐ xī wàng tā zhǎo gè néng wěn dìng fā zhǎn de gōng zuò， jiāng lái kě yǐ yǎng jiā huó kǒu jiù hǎo。 xìng kuī méi yǒu lái zì fù mǔ de yā lì， tā cái néng àn zhào zì jǐ de xìng qù zhǎo gōng zuò。|Chuyện tìm việc, Kiến Minh cũng bàn với cha mẹ, cha mẹ anh không có ý kiến đặc biệt, chỉ mong anh tìm việc phát triển ổn định, sau này nuôi được gia đình là được. May không có áp lực từ cha mẹ, anh mới tìm việc theo sở thích.
短文|上個星期建明接到了一家連鎖餐飲公司的通知，說他已經通過筆試，請他去面試。建明很興奮，因為這正是他的目標。為了準備面試，他上網找那家公司的資料，熟讀關於那家公司的歷史及發展，也對他所應徵的職位有初步的了解。|shàng gè xīng qī jiàn míng jiē dào le yì jiā lián suǒ cān yǐn gōng sī de tōng zhī， shuō tā yǐ jīng tōng guò bǐ shì， qǐng tā qù miàn shì。 jiàn míng hěn xìng fèn， yīn wèi zhè zhèng shì tā de mù biāo。 wèi le zhǔn bèi miàn shì， tā shàng wǎng zhǎo nà jiā gōng sī de zī liào， shú dú guān yú nà jiā gōng sī de lì shǐ jí fā zhǎn， yě duì tā suǒ yīng zhēng de zhí wèi yǒu chū bù de liǎo jiě。|Tuần trước Kiến Minh nhận thông báo của một công ty chuỗi ăn uống, nói anh đã qua vòng thi viết, mời đi phỏng vấn. Anh rất phấn khích vì đây đúng là mục tiêu. Để chuẩn bị, anh tìm thông tin công ty trên mạng, đọc kỹ lịch sử và phát triển của công ty, cũng hiểu sơ bộ vị trí ứng tuyển.
短文|另外還找了一些面試技巧、面試的考古題，甚至還跟同學做了面試沙盤推演。至於他的面試服裝，是妹妹陪著他去買的，畢竟男生對打扮比較沒有概念。妹妹幫他挑了一套最基本的深藍色西裝，配一件白色的襯衫。|lìng wài hái zhǎo le yì xiē miàn shì jì qiǎo、 miàn shì de kǎo gǔ tí， shèn zhì hái gēn tóng xué zuò le miàn shì shā pán tuī yǎn。 zhì yú tā de miàn shì fú zhuāng， shì mèi mèi péi zhù tā qù mǎi de， bì jìng nán shēng duì dǎ bàn bǐ jiào méi yǒu gài niàn。 mèi mèi bāng tā tiāo le yí tào zuì jī běn de shēn lán sè xī zhuāng， pèi yí jiàn bái sè de chèn shān。|Anh còn tìm mẹo phỏng vấn, đề thi cũ, thậm chí diễn tập phỏng vấn cùng bạn. Còn trang phục phỏng vấn là em gái đi mua cùng, dù sao con trai ít có khái niệm ăn mặc. Em gái chọn bộ com-lê xanh đậm cơ bản nhất, phối áo sơ mi trắng.
短文|今天建明到那家公司面試，過程還算順利。面試官對他的印象好像還不錯，如果能順利錄取，那就太好了。|jīn tiān jiàn míng dào nà jiā gōng sī miàn shì， guò chéng hái suàn shùn lì。 miàn shì guān duì tā de yìn xiàng hǎo xiàng hái bú cuò， rú guǒ néng shùn lì lù qǔ， nà jiù tài hǎo le。|Hôm nay Kiến Minh đến công ty phỏng vấn, quá trình khá thuận lợi. Ấn tượng của người phỏng vấn dường như không tệ, nếu được nhận thì tốt quá.`}},{n:11,zh:"文化、種族的大熔爐",vi:"Cái nôi hòa trộn văn hóa và sắc tộc",v:`種族|zhǒngzú|chủng tộc|N
熔爐|rónglú|lò nung, nơi hòa trộn|N
偏偏|piānpiān|cứ nhất định|Adv
肯|kěn|chịu, sẵn lòng|Vaux
母語|mǔyǔ|tiếng mẹ đẻ|N
口音|kǒuyīn|giọng nói|N
適應|shìyīng|thích nghi|V
了不起|liǎobùqǐ|giỏi, phi thường|Vs
交流|jiāoliú|giao lưu|Vi
志工|zhìgōng|tình nguyện viên|N
縣|xiàn|huyện|N
市|shì|thành phố|N
外籍|wàijí|quốc tịch nước ngoài|Vs-attr
配偶|pèiǒu|vợ/chồng|N
焦慮|jiāolǜ|lo âu|Vs
溝通|gōutōng|giao tiếp|N
障礙|zhàngài|trở ngại|N
良好|liánghǎo|tốt đẹp|Vs
以往|yǐwǎng|trước đây|Adv
面對|miànduì|đối mặt|V
衝擊|chōngjī|va chạm, tác động|N
大眾|dàzhòng|đại chúng|N
難以|nányǐ|khó mà|Adv
認同|rèntóng|đồng tình, nhận đồng|V
跨國|kuàguó|xuyên quốc gia|Vs-attr
大量|dàliàng|số lượng lớn|Adv
移入|yírù|di cư vào|V
憂慮|yōulǜ|lo lắng|Vst
降低|jiàngdī|hạ thấp|V
素質|sùzhì|tố chất, chất lượng|N
歧視|qíshì|kỳ thị|Vst
子女|zǐnǚ|con cái|N
資產|zīchǎn|tài sản|N
應|yīng|nên (trang trọng)|Vaux
平等|píngděng|bình đẳng|N
相互|xiānghù|lẫn nhau|Adv
外人|wàirén|người ngoài|N
聯絡|liánluò|liên lạc|V
小明|xiǎomíng|Tiểu Minh (tên thân mật)|Name
家長日|jiāzhǎngrì|ngày gặp phụ huynh|Phrase
氣人|qìrén|chọc tức|Phrase
照說|zhàoshuō|theo lẽ thường|Phrase
在……之餘|zàizhīyú|ngoài lúc…, thời gian rảnh khỏi…|Phrase
本地人|běndìrén|người địa phương|Phrase
自己人|zìjǐrén|người nhà, người mình|Phrase
哪裡哪裡|nǎlǐnǎlǐ|đâu có, không dám|Phrase
漸漸|jiànjiàn|dần dần|Adv
曾|céng|đã từng|Adv
嘗試|chángshì|thử|V/N
結構|jiégòu|cấu trúc|N
產生|chǎnshēng|nảy sinh|Vp
轉變|zhuǎnbiàn|chuyển biến|N
嬰兒|yīngér|trẻ sơ sinh|N
雙親|shuāngqīn|cha mẹ|N
本國|běnguó|nước mình|N
國籍|guójí|quốc tịch|N
大陸籍|dàlùjí|quốc tịch đại lục|N
其|qí|của họ/nó (trang trọng)|Det
比例|bǐlì|tỷ lệ|N
根本|gēnběn|căn bản|Vs
可見|kějiàn|có thể thấy|Conj
現有|xiànyǒu|hiện có|Vs-attr
分配|fēnpèi|phân bổ|N/V
顧慮|gùlǜ|lo ngại|Vst
學童|xuétóng|học sinh nhỏ|N
身心|shēnxīn|thể xác và tinh thần|N
缺乏|quēfá|thiếu|Vst
課業|kèyè|bài vở|N
指導|zhǐdǎo|chỉ đạo, hướng dẫn|N/V
輔導|fǔdǎo|kèm cặp, tư vấn|V
輸|shū|thua|Vp
失去|shīqù|đánh mất|Vp
然而|ránér|tuy nhiên|Conj
觀點|guāndiǎn|quan điểm|N
加速|jiāsù|tăng tốc|V
創下|chuàngxià|lập (kỷ lục)|Vpt
紀錄|jìlù|kỷ lục|N
明顯|míngxiǎn|rõ rệt|Vs
下降|xiàjiàng|giảm xuống|Vp
趨勢|qūshì|xu hướng|N
高齡化|gāolínghuà|già hóa dân số|Vp
世代|shìdài|thế hệ|N
不足|bùzú|không đủ|Vs
持續|chíxù|tiếp tục|Vaux
正視|zhèngshì|nhìn thẳng|V
國語|guóyǔ|tiếng phổ thông|Name
客語|kèyǔ|tiếng Khách Gia|Name
最多數|zuìduōshù|đa số nhất|Phrase
總人數|zǒngrénshù|tổng số người|Phrase
起跑點|qǐpǎodiǎn|vạch xuất phát|Phrase
新生兒|xīnshēngér|trẻ sơ sinh|Phrase
生產力|shēngchǎnlì|năng suất|Phrase
一較長短|yíjiàozhǎngduǎn|so tài cao thấp|Phrase`,d:{l:`張先生|真可惜，補習班就要結束營業了，以後見面的機會就更少了。|zhēn kě xī， bǔ xí bān jiù yào jié shù yíng yè le， yǐ hòu jiàn miàn de jī huì jiù gèng shǎo le。|Tiếc quá, lớp học thêm sắp đóng cửa, sau này cơ hội gặp lại càng ít.
張太太|如玉，以後要是有空的話歡迎常來我們家玩。|rú yù， yǐ hòu yào shì yǒu kòng de huà huān yíng cháng lái wǒ men jiā wán。|Như Ngọc, sau này nếu rảnh hoan nghênh thường đến nhà chúng tôi chơi.
白如玉|謝謝，要是以後小明在英文方面有什麼問題的話，請隨時打電話給我。|xiè xiè， yào shì yǐ hòu xiǎo míng zài yīng wén fāng miàn yǒu shén me wèn tí de huà， qǐng suí shí dǎ diàn huà gěi wǒ。|Cảm ơn, nếu sau này Tiểu Minh có vấn đề gì về tiếng Anh xin cứ gọi cho em.
張太太|小明的英文進步了不少，但他的越南語卻退步了很多。有時候想想真氣人，我叫他跟我說越南話，他偏偏不聽，還是照說中文。|xiǎo míng de yīng wén jìn bù le bù shǎo， dàn tā de yuè nán yǔ què tuì bù le hěn duō。 yǒu shí hòu xiǎng xiǎng zhēn qì rén， wǒ jiào tā gēn wǒ shuō yuè nán huà， tā piān piān bù tīng， hái shì zhào shuō zhōng wén。|Tiếng Anh Tiểu Minh tiến bộ nhiều nhưng tiếng Việt thụt lùi nhiều. Có lúc nghĩ thật tức, tôi bảo nó nói tiếng Việt với tôi, nó cứ không nghe, vẫn nói tiếng Trung.
張先生|小明在台灣難得有機會說越南話，再加上他不肯跟他媽媽練習，慢慢地越南話就退步了。|xiǎo míng zài tái wān nán dé yǒu jī huì shuō yuè nán huà， zài jiā shàng tā bù kěn gēn tā mā mā liàn xí， màn màn dì yuè nán huà jiù tuì bù le。|Tiểu Minh ở Đài Loan hiếm có dịp nói tiếng Việt, lại không chịu luyện với mẹ, dần dần tiếng Việt thụt lùi.
白如玉|小孩子如果能學好自己的「母語」，不但不會影響學習，在許多方面的學習上反而會更好。|xiǎo hái zi rú guǒ néng xué hǎo zì jǐ de 「mǔ yǔ」， bú dàn bú huì yǐng xiǎng xué xí， zài xǔ duō fāng miàn de xué xí shàng fǎn ér huì gèng hǎo。|Trẻ nếu học tốt "tiếng mẹ đẻ" thì không những không ảnh hưởng việc học mà nhiều mặt còn học tốt hơn.
張太太|是啊！就像我小時候在美國，父母跟我們姐弟在家說越南語；到了學校我就跟同學說英文；來台灣念大學後，我才開始學中文的。|shì a！ jiù xiàng wǒ xiǎo shí hòu zài měi guó， fù mǔ gēn wǒ men jiě dì zài jiā shuō yuè nán yǔ； dào le xué xiào wǒ jiù gēn tóng xué shuō yīng wén； lái tái wān niàn dà xué hòu， wǒ cái kāi shǐ xué zhōng wén de。|Đúng vậy! Như hồi nhỏ ở Mỹ, cha mẹ nói tiếng Việt với chị em tôi ở nhà; đến trường tôi nói tiếng Anh với bạn; lên Đài Loan học đại học tôi mới bắt đầu học tiếng Trung.
白如玉|哇！真難得，我以為張太太妳是越南華僑，從小在家就說中文，所以中文說得那麼流利，好像沒有什麼口音。|wa！ zhēn nán dé， wǒ yǐ wèi zhāng tài tài nǐ shì yuè nán huá qiáo， cóng xiǎo zài jiā jiù shuō zhōng wén， suǒ yǐ zhōng wén shuō dé nà me liú lì， hǎo xiàng méi yǒu shén me kǒu yīn。|Chà! Hiếm có thật, em tưởng cô là Hoa kiều Việt Nam, từ nhỏ ở nhà nói tiếng Trung nên nói lưu loát, hầu như không có giọng.
張太太|謝謝妳的誇獎，雖然我在台灣已經住了十多年了，但也花了好長一段時間來適應這裡的語言、文化、生活習慣及價值觀等。|xiè xiè nǐ de kuā jiǎng， suī rán wǒ zài tái wān yǐ jīng zhù le shí duō nián le， dàn yě huā le hǎo zhǎng yí duàn shí jiān lái shì yīng zhè lǐ de yǔ yán、 wén huà、 shēng huó xí guàn jí jià zhí guān děng。|Cảm ơn lời khen, tuy tôi ở Đài Loan hơn mười năm nhưng cũng mất rất lâu để thích nghi ngôn ngữ, văn hóa, thói quen sinh hoạt và giá trị quan ở đây.
白如玉|妳真是了不起，會說那麼多種語言，又能適應那麼多種文化。|nǐ zhēn shì liǎo bù qǐ， huì shuō nà me duō zhǒng yǔ yán， yòu néng shì yīng nà me duō zhǒng wén huà。|Cô thật giỏi, nói được nhiều thứ tiếng, lại thích nghi được nhiều nền văn hóa.
張先生|她在工作之餘也常常去「新移民多元文化交流活動中心」當志工。|tā zài gōng zuò zhī yú yě cháng cháng qù 「xīn yí mín duō yuán wén huà jiāo liú huó dòng zhōng xīn」 dāng zhì gōng。|Ngoài giờ làm cô còn thường đến "Trung tâm hoạt động giao lưu đa văn hóa cho người nhập cư mới" làm tình nguyện.
白如玉|原來有這樣的地方啊！當志工要做些什麼事呢？|yuán lái yǒu zhè yàng de dì fāng a！ dāng zhì gōng yào zuò xiē shén me shì ne？|Hóa ra có nơi như vậy! Làm tình nguyện cần làm gì?
張太太|在台灣每個縣、市都有這樣的活動中心。我能做的就是安慰那些外籍配偶，跟她們聊聊天。因為不少人有很多生活適應上的問題，例如：想家、睡不著、寂寞、焦慮、後悔等情況，再加上語言溝通的障礙，也不容易和台灣本地人建立良好的人際關係。|zài tái wān měi gè xiàn、 shì dōu yǒu zhè yàng de huó dòng zhōng xīn。 wǒ néng zuò de jiù shì ān wèi nà xiē wài jí pèi ǒu， gēn tā men liáo liáo tiān。 yīn wèi bù shǎo rén yǒu hěn duō shēng huó shì yīng shàng de wèn tí， lì rú： xiǎng jiā、 shuì bú zhù、 jì mò、 jiāo lǜ、 hòu huǐ děng qíng kuàng， zài jiā shàng yǔ yán gōu tōng de zhàng ài， yě bù róng yì hé tái wān běn dì rén jiàn lì liáng hǎo de rén jì guān xì。|Ở Đài Loan mỗi huyện thành đều có trung tâm như vậy. Việc tôi làm là an ủi các bà vợ ngoại quốc, trò chuyện với họ. Vì nhiều người gặp vấn đề thích nghi cuộc sống như nhớ nhà, mất ngủ, cô đơn, lo âu, hối hận…, cộng thêm rào cản ngôn ngữ nên khó xây dựng quan hệ tốt với người địa phương.
張先生|台灣以往比較少面對多元文化的衝擊，所以社會大眾難以接受和認同這些跨國婚姻移民。|tái wān yǐ wǎng bǐ jiào shǎo miàn duì duō yuán wén huà de chōng jī， suǒ yǐ shè huì dà zhòng nán yǐ jiē shòu hé rèn tóng zhè xiē kuà guó hūn yīn yí mín。|Trước đây Đài Loan ít đối mặt với va chạm đa văn hóa nên công chúng khó chấp nhận và công nhận những người nhập cư do hôn nhân xuyên quốc gia.
白如玉|是啊，其實美國早期也一樣。另外也曾經因為其他國家的人口大量移入，憂慮會降低人口素質而歧視移民。|shì a， qí shí měi guó zǎo qī yě yí yàng。 lìng wài yě céng jīng yīn wèi qí tā guó jiā de rén kǒu dà liàng yí rù， yōu lǜ huì jiàng dī rén kǒu sù zhì ér qí shì yí mín。|Đúng, thật ra Mỹ thời đầu cũng vậy. Ngoài ra từng có lúc vì dân nước khác nhập cư ồ ạt, lo hạ thấp chất lượng dân số mà kỳ thị người nhập cư.
張先生|這些新移民的家庭和子女，其實可能是台灣發展全球化的重要資產。|zhè xiē xīn yí mín de jiā tíng hé zǐ nǚ， qí shí kě néng shì tái wān fā zhǎn quán qiú huà de zhòng yào zī chǎn。|Gia đình và con cái của những người nhập cư mới thực ra có thể là tài sản quan trọng cho việc toàn cầu hóa của Đài Loan.
張太太|面對不同文化，我們應以平等、尊重、學習的方式來相互了解。|miàn duì bù tóng wén huà， wǒ men yīng yǐ píng děng、 zūn zhòng、 xué xí de fāng shì lái xiāng hù liǎo jiě。|Đối diện văn hóa khác, ta nên hiểu nhau bằng bình đẳng, tôn trọng, học hỏi.
張先生|面對新移民時，如果我們把他們當外人，他們就會成為外人；如果把他們當自己人，他們才會用自己人的態度面對我們。所以態度真的非常重要。|miàn duì xīn yí mín shí， rú guǒ wǒ men bǎ tā men dāng wài rén， tā men jiù huì chéng wèi wài rén； rú guǒ bǎ tā men dāng zì jǐ rén， tā men cái huì yòng zì jǐ rén de tài dù miàn duì wǒ men。 suǒ yǐ tài dù zhēn de fēi cháng zhòng yào。|Khi đối diện người nhập cư mới, nếu ta coi họ là người ngoài họ sẽ thành người ngoài; coi họ là người nhà thì họ mới đối xử với ta như người nhà. Nên thái độ thật rất quan trọng.
白如玉|我非常同意你們的看法。今天真高興有機會跟你們聊了那麼多，也讓我對台灣有了更進一步的了解，真謝謝你們。|wǒ fēi cháng tóng yì nǐ men de kàn fǎ。 jīn tiān zhēn gāo xìng yǒu jī huì gēn nǐ men liáo le nà me duō， yě ràng wǒ duì tái wān yǒu le gèng jìn yí bù de liǎo jiě， zhēn xiè xiè nǐ men。|Em rất đồng ý với quan điểm của hai vị. Hôm nay vui vì có dịp trò chuyện nhiều, cũng giúp em hiểu Đài Loan sâu hơn, thật cảm ơn.
張太太|哪裡，哪裡，也謝謝妳這麼照顧小明，要常跟我們聯絡喔。|nǎ lǐ， nǎ lǐ， yě xiè xiè nǐ zhè me zhào gù xiǎo míng， yào cháng gēn wǒ men lián luò ō。|Đâu có, đâu có, cũng cảm ơn em chăm sóc Tiểu Minh, nhớ thường liên lạc nhé.
短文|白如玉來台灣以後，因為在補習班教英文的關係，而漸漸地和一些學生家長越來越熟。張先生夫婦就是那些家長之一，他們都曾在美國念書，所以對白如玉特別照顧。|bái rú yù lái tái wān yǐ hòu， yīn wèi zài bǔ xí bān jiào yīng wén de guān xì， ér jiàn jiàn dì hé yì xiē xué shēng jiā zhǎng yuè lái yuè shú。 zhāng xiān shēng fū fù jiù shì nà xiē jiā zhǎng zhī yī， tā men dōu céng zài měi guó niàn shū， suǒ yǐ duì bái rú yù tè bié zhào gù。|Từ khi đến Đài Loan, nhờ dạy tiếng Anh ở lớp học thêm, Bạch Như Ngọc dần thân với một số phụ huynh học sinh. Vợ chồng ông Trương là một trong số đó, họ từng học ở Mỹ nên rất quan tâm Như Ngọc.
短文|在台灣，除了學中文和嘗試多了解台灣的文化及社會外，白如玉也想多了解一些台灣這二、三十年來的發展。每次補習班有家長日，白如玉都一定參加，這樣就可多與那些家長談談了。|zài tái wān， chú le xué zhōng wén hé cháng shì duō liǎo jiě tái wān de wén huà jí shè huì wài， bái rú yù yě xiǎng duō liǎo jiě yì xiē tái wān zhè èr、 sān shí nián lái de fā zhǎn。 měi cì bǔ xí bān yǒu jiā zhǎng rì， bái rú yù dōu yí dìng cān jiā， zhè yàng jiù kě duō yǔ nà xiē jiā zhǎng tán tán le。|Ở Đài Loan, ngoài học tiếng Trung và tìm hiểu văn hóa xã hội, Như Ngọc còn muốn hiểu sự phát triển của Đài Loan hai ba chục năm nay. Mỗi lần lớp có ngày gặp phụ huynh cô đều tham gia để trò chuyện nhiều hơn với họ.
短文|白如玉聽台灣朋友提過，台灣的社會結構這些年來產生了很大的轉變，尤其是台灣人口組成的變化。聽說現在每八個嬰兒中，就有一個雙親之一不是本國國籍，其中占最多數的是大陸籍與越南籍。|bái rú yù tīng tái wān péng yǒu tí guò， tái wān de shè huì jié gòu zhè xiē nián lái chǎn shēng le hěn dà de zhuǎn biàn， yóu qí shì tái wān rén kǒu zǔ chéng de biàn huà。 tīng shuō xiàn zài měi bā gè yīng ér zhōng， jiù yǒu yí gè shuāng qīn zhī yì bú shì běn guó guó jí， qí zhōng zhàn zuì duō shù de shì dà lù jí yǔ yuè nán jí。|Như Ngọc nghe bạn Đài Loan nói cấu trúc xã hội mấy năm nay thay đổi lớn, nhất là thành phần dân số. Nghe nói hiện cứ tám em bé thì một em có cha hoặc mẹ không mang quốc tịch nước mình, nhiều nhất là quốc tịch đại lục và Việt Nam.
短文|以後這些兒童及其父母親的總人數將會占台灣人口相當的比例，對社會、經濟與政治發展都將產生影響。所有改變中，改變最多也是最根本的，將是種族與語言的多元化。可見將來所謂的「母語」恐怕就不只是現有的國語、台語、客語與原住民語了。|yǐ hòu zhè xiē ér tóng jí qí fù mǔ qīn de zǒng rén shù jiāng huì zhàn tái wān rén kǒu xiāng dāng de bǐ lì， duì shè huì、 jīng jì yǔ zhèng zhì fā zhǎn dōu jiāng chǎn shēng yǐng xiǎng。 suǒ yǒu gǎi biàn zhōng， gǎi biàn zuì duō yě shì zuì gēn běn de， jiāng shì zhǒng zú yǔ yǔ yán de duō yuán huà。 kě jiàn jiāng lái suǒ wèi de 「mǔ yǔ」 kǒng pà jiù bù zhǐ shì xiàn yǒu de guó yǔ、 tái yǔ、 kè yǔ yǔ yuán zhù mín yǔ le。|Sau này tổng số những trẻ này và cha mẹ chúng sẽ chiếm tỷ lệ đáng kể dân số, ảnh hưởng đến phát triển xã hội, kinh tế, chính trị. Trong mọi thay đổi, thay đổi nhiều và căn bản nhất là sự đa dạng chủng tộc và ngôn ngữ. Có thể thấy "tiếng mẹ đẻ" sau này e không chỉ là tiếng phổ thông, tiếng Đài, tiếng Khách Gia và tiếng bản địa hiện có.
短文|將來教育資源的分配與公平地對待就變得非常重要。學校不但要顧慮到學童的身心發展與適應，對缺乏課業指導的學童，也要積極輔導，不能讓這些學童輸在起跑點上，失去了競爭力，甚至沒有公平的發展機會。然而從正面的觀點來看，這種多種族、多元文化的社會也會加速台灣的全球化。|jiāng lái jiào yù zī yuán de fēn pèi yǔ gōng píng dì duì dài jiù biàn dé fēi cháng zhòng yào。 xué xiào bú dàn yào gù lǜ dào xué tóng de shēn xīn fā zhǎn yǔ shì yīng， duì quē fá kè yè zhǐ dǎo de xué tóng， yě yào jī jí fǔ dǎo， bù néng ràng zhè xiē xué tóng shū zài qǐ pǎo diǎn shàng， shī qù le jìng zhēng lì， shèn zhì méi yǒu gōng píng de fā zhǎn jī huì。 rán ér cóng zhèng miàn de guān diǎn lái kàn， zhè zhǒng duō zhǒng zú、 duō yuán wén huà de shè huì yě huì jiā sù tái wān de quán qiú huà。|Sau này phân bổ tài nguyên giáo dục và đối xử công bằng trở nên rất quan trọng. Nhà trường không chỉ lo phát triển thể chất tinh thần và thích nghi của học sinh mà với học sinh thiếu hướng dẫn bài vở phải tích cực kèm cặp, không để các em thua ngay vạch xuất phát, mất sức cạnh tranh, thậm chí không có cơ hội phát triển công bằng. Tuy nhiên nhìn mặt tích cực, xã hội đa chủng tộc đa văn hóa này cũng thúc đẩy toàn cầu hóa Đài Loan.
短文|另一方面，台灣地區的新生兒，近幾年已創下了歷史新低紀錄。出生率已有明顯的下降趨勢。因為這個趨勢會加速台灣社會的高齡化，對於下一個世代而言，將會是沉重的負擔。將來不但生產力不足，台灣也很難與別的國家一較長短。台灣若要持續發展，就應該正視新移民的家庭問題，並尊重、欣賞多元文化與積極面對其所帶來的衝擊。|lìng yì fāng miàn， tái wān dì qū de xīn shēng ér， jìn jǐ nián yǐ chuàng xià le lì shǐ xīn dī jì lù。 chū shēng lǜ yǐ yǒu míng xiǎn de xià jiàng qū shì。 yīn wèi zhè gè qū shì huì jiā sù tái wān shè huì de gāo líng huà， duì yú xià yí gè shì dài ér yán， jiāng huì shì chén zhòng de fù dān。 jiāng lái bú dàn shēng chǎn lì bù zú， tái wān yě hěn nán yǔ bié de guó jiā yí jiào zhǎng duǎn。 tái wān ruò yào chí xù fā zhǎn， jiù yīng gāi zhèng shì xīn yí mín de jiā tíng wèn tí， bìng zūn zhòng、 xīn shǎng duō yuán wén huà yǔ jī jí miàn duì qí suǒ dài lái de chōng jī。|Mặt khác trẻ sơ sinh ở Đài Loan mấy năm gần đây đã lập kỷ lục thấp nhất lịch sử. Tỷ lệ sinh có xu hướng giảm rõ rệt. Xu hướng này sẽ đẩy nhanh già hóa xã hội, là gánh nặng cho thế hệ sau. Sau này không những năng suất thiếu mà Đài Loan cũng khó so tài với nước khác. Nếu muốn phát triển bền vững, Đài Loan nên nhìn thẳng vấn đề gia đình người nhập cư mới, tôn trọng, trân trọng đa văn hóa và tích cực đối mặt tác động đi kèm.`}},{n:12,zh:"期待美好的未來",vi:"Mong đợi tương lai tươi đẹp",v:`王安康|wángānkāng|Vương An Khang (nam)|Name
張定能|zhāngdìngnéng|Trương Định Năng (nam)|Name
美好|měihǎo|tốt đẹp|Vs
當選|dāngxuǎn|trúng cử|Vpt
無所謂|wúsuǒwèi|không sao, không quan trọng|Vs
敏感|mǐngǎn|nhạy cảm|Vs
化學|huàxué|hóa học|N
添加物|tiānjiāwù|chất phụ gia|N
殘留|cánliú|tồn dư|N
修改|xiūgǎi|sửa đổi|V
法規|fǎguī|pháp quy|N
安養|ānyǎng|chăm sóc người già|N
河川|héchuān|sông ngòi|N
脫離|tuōlí|thoát ly|Vpt
背景|bèijǐng|bối cảnh|N
領域|lǐngyù|lĩnh vực|N
竟然|jìngrán|không ngờ|Adv
總統|zǒngtǒng|tổng thống|N
保障|bǎozhàng|bảo đảm|N/V
特權|tèquán|đặc quyền|N
把持|bǎchí|chi phối, nắm giữ|V
監督|jiāndū|giám sát|V
罷免|bàmiǎn|bãi nhiệm|V
權|quán|quyền|N
廉能|liánnéng|liêm khiết có năng lực|Vs
富足|fùzú|giàu có đầy đủ|Vs
在乎|zàihū|để tâm|Vst
生命|shēngmìng|sinh mạng|N
財產|cáichǎn|tài sản|N
義工|yìgōng|tình nguyện viên|N
選戰|xuǎnzhàn|cuộc chiến tranh cử|N
承諾|chéngnuò|lời hứa|N/V
帶領|dàilǐng|dẫn dắt|V
力量|lìliàng|sức mạnh|N
擺脫|bǎituō|thoát khỏi|V
困境|kùnjìng|hoàn cảnh khó khăn|N
房地產|fángdìchǎn|bất động sản|Phrase
小自……|xiǎozì|nhỏ như…|Phrase
大至……|dàzhì|lớn đến…|Phrase
是否|shìfǒu|có hay không|Phrase
照理說|zhàolǐshuō|theo lý mà nói|Phrase
政治人物|zhèngzhìrénwù|nhân vật chính trị|Phrase
受苦|shòukǔ|chịu khổ|Phrase
富裕|fùyù|giàu có|Vs
貪汙|tānwū|tham nhũng|Vp
腐敗|fǔbài|thối nát|Vs
政爭|zhèngzhēng|tranh chấp chính trị|N
停滯|tíngzhì|đình trệ|Vp
上升|shàngshēng|tăng lên|Vp
信心|xìnxīn|niềm tin|N
遊民|yóumín|người vô gia cư|N
外界|wàijiè|bên ngoài|N
悲慘|bēicǎn|bi thảm|Vs
日子|rìzi|ngày tháng|N
如此|rúcǐ|như vậy|Adv
巨大|jùdà|to lớn|Vs
無能|wúnéng|bất tài|Vs
冷漠|lěngmò|thờ ơ|Vs
學者|xuézhě|học giả|N
階層|jiēcéng|tầng lớp|N
自然|zìrán|tự nhiên mà|Adv
阻止|zǔzhǐ|ngăn cản|V
遙遠|yáoyuǎn|xa xôi|Vs
無論|wúlùn|bất kể|Conj
明明|míngmíng|rõ ràng là|Adv
骯髒|āngzāng|bẩn thỉu|Vs
顧|gù|lo, màng đến|V
自身|zìshēn|bản thân|N
政客|zhèngkè|chính khách|N
縱容|zòngróng|dung túng|V
使得|shǐde|khiến cho|Vst
工廠|gōngchǎng|nhà máy|N
密集|mìjí|dày đặc|Vs
遭受|zāoshòu|chịu đựng|Vst
困苦|kùnkǔ|khốn khổ|Vs
老人年金|lǎorénniánjīn|lương hưu người già|Name
無家可歸|wújiākěguī|không nhà để về|Phrase
以……為……|yǐwèi|lấy… làm…|Phrase
漠不關心|mòbùguānxīn|thờ ơ|Phrase
發言權|fāyánquán|quyền phát ngôn|Phrase
影響力|yǐngxiǎnglì|sức ảnh hưởng|Phrase
官商勾結|guānshānggōujié|quan thương cấu kết|Phrase
貧富懸殊|pínfùxuánshū|chênh lệch giàu nghèo lớn|Phrase
息息相關|xīxīxiāngguān|liên quan mật thiết|Phrase`,d:{l:`王安康|選舉快到了，這次你們要選誰啊？|xuǎn jǔ kuài dào le， zhè cì nǐ men yào xuǎn shuí a？|Bầu cử sắp đến rồi, lần này các bạn chọn ai?
李文麗|選誰都一樣，去投票也沒有用啦！我們能改變什麼？|xuǎn shuí dōu yí yàng， qù tóu piào yě méi yǒu yòng la！ wǒ men néng gǎi biàn shén me？|Chọn ai cũng như nhau, đi bỏ phiếu cũng vô ích! Chúng ta thay đổi được gì?
張定能|誰當選我都無所謂。我們不要談政治，太敏感了，聊聊別的事吧！|shuí dāng xuǎn wǒ dōu wú suǒ wèi。 wǒ men bú yào tán zhèng zhì， tài mǐn gǎn le， liáo liáo bié de shì ba！|Ai trúng cử tôi cũng không quan tâm. Đừng nói chính trị, nhạy cảm quá, nói chuyện khác đi!
王安康|好吧！我們就聊飲食吧！最近有食品安全的問題，麵包、飲料有化學添加物，青菜、水果有農藥殘留。|hǎo ba！ wǒ men jiù liáo yǐn shí ba！ zuì jìn yǒu shí pǐn ān quán de wèn tí， miàn bāo、 yǐn liào yǒu huà xué tiān jiā wù， qīng cài、 shuǐ guǒ yǒu nóng yào cán liú。|Được! Vậy nói chuyện ăn uống đi! Gần đây có vấn đề an toàn thực phẩm, bánh mì, đồ uống có phụ gia hóa học, rau quả tồn dư thuốc trừ sâu.
李文麗|真的啊？我們吃東西可要小心了！政府應該好好管理！|zhēn de a？ wǒ men chī dōng xī kě yào xiǎo xīn le！ zhèng fǔ yīng gāi hǎo hǎo guǎn lǐ！|Thật à? Ăn uống phải cẩn thận rồi! Chính phủ nên quản lý tốt!
王安康|小張，我聽說你想買房子，你買了嗎？|xiǎo zhāng， wǒ tīng shuō nǐ xiǎng mǎi fáng zi， nǐ mǎi le ma？|Tiểu Trương, nghe nói bạn muốn mua nhà, mua chưa?
張定能|我哪裡買得起？政府的土地和房地產政策都有問題，誰知道房價會上漲那麼多啊？政府應該修改法規，建立合理的制度。|wǒ nǎ lǐ mǎi dé qǐ？ zhèng fǔ de tǔ dì hé fáng dì chǎn zhèng cè dōu yǒu wèn tí， shuí zhī dào fáng jià huì shàng zhǎng nà me duō a？ zhèng fǔ yīng gāi xiū gǎi fǎ guī， jiàn lì hé lǐ de zhì dù。|Tôi mua nổi đâu? Chính sách đất đai và bất động sản của chính phủ đều có vấn đề, ai ngờ giá nhà tăng nhiều thế? Chính phủ nên sửa luật, xây chế độ hợp lý.
王安康|嗯！在我們的生活裡，小自一個麵包，大至一棟房子都跟政治有關。|ń！ zài wǒ men de shēng huó lǐ， xiǎo zì yí gè miàn bāo， dà zhì yí dòng fáng zi dōu gēn zhèng zhì yǒu guān。|Ừ! Trong đời sống, nhỏ như một cái bánh mì, lớn như một căn nhà đều liên quan chính trị.
李文麗|是啊，物價、交通、教育、就業、老人安養、核能災害、空氣汙染、河川汙染等問題都脫離不了政治。|shì a， wù jià、 jiāo tōng、 jiào yù、 jiù yè、 lǎo rén ān yǎng、 hé néng zāi hài、 kōng qì wū rǎn、 hé chuān wū rǎn děng wèn tí dōu tuō lí bù liǎo zhèng zhì。|Phải, vật giá, giao thông, giáo dục, việc làm, chăm sóc người già, thảm họa hạt nhân, ô nhiễm không khí, sông ngòi đều không thoát khỏi chính trị.
張定能|你們認為什麼背景或什麼領域的人適合從政？有的國家竟然連電影明星都可以當總統。|nǐ men rèn wèi shén me bèi jǐng huò shén me lǐng yù de rén shì hé cóng zhèng？ yǒu de guó jiā jìng rán lián diàn yǐng míng xīng dōu kě yǐ dāng zǒng tǒng。|Các bạn nghĩ người có nền tảng hay lĩnh vực nào hợp làm chính trị? Có nước thậm chí cả ngôi sao điện ảnh cũng làm tổng thống.
王安康|我覺得候選人是什麼背景或什麼領域沒有關係，得看那個人的能力，還得看他是否真的關心人民。|wǒ jué dé hòu xuǎn rén shì shén me bèi jǐng huò shén me lǐng yù méi yǒu guān xì， dé kàn nà gè rén de néng lì， hái dé kàn tā shì fǒu zhēn de guān xīn rén mín。|Mình thấy ứng viên nền tảng hay lĩnh vực nào không quan trọng, phải xem năng lực và liệu có thật sự quan tâm dân không.
李文麗|目前社會出了很多問題，失業率高，有工作的收入不多、保障少，還一個有能力的人，才能解決大家的問題。|mù qián shè huì chū le hěn duō wèn tí， shī yè lǜ gāo， yǒu gōng zuò de shōu rù bù duō、 bǎo zhàng shǎo， hái yí gè yǒu néng lì de rén， cái néng jiě jué dà jiā de wèn tí。|Xã hội hiện có nhiều vấn đề, thất nghiệp cao, người có việc thu nhập ít, bảo đảm thấp, phải có người có năng lực mới giải quyết được vấn đề của mọi người.
王安康|照理說一個國家要繁榮，經濟利益與政治權力不能由少數特權把持。|zhào lǐ shuō yí gè guó jiā yào fán róng， jīng jì lì yì yǔ zhèng zhì quán lì bù néng yóu shǎo shù tè quán bǎ chí。|Theo lý một quốc gia muốn thịnh vượng thì lợi ích kinh tế và quyền lực chính trị không thể do thiểu số đặc quyền nắm giữ.
李文麗|你的意思是……|nǐ de yì si shì ……|Ý bạn là…
王安康|要有更多人參加社會組織和政治活動，讓人民監督政府，要是民意代表或總統不尊重民意，人民可以罷免他。|yào yǒu gèng duō rén cān jiā shè huì zǔ zhī hé zhèng zhì huó dòng， ràng rén mín jiān dū zhèng fǔ， yào shì mín yì dài biǎo huò zǒng tǒng bù zūn zhòng mín yì， rén mín kě yǐ bà miǎn tā。|Cần nhiều người hơn tham gia tổ chức xã hội và hoạt động chính trị, để dân giám sát chính phủ, nếu đại biểu hay tổng thống không tôn trọng ý dân thì dân có thể bãi nhiệm.
李文麗|嗯！要做到人民有權、政府廉能，國家才會富足安定。|ń！ yào zuò dào rén mín yǒu quán、 zhèng fǔ lián néng， guó jiā cái huì fù zú ān dìng。|Ừ! Phải để dân có quyền, chính phủ liêm năng thì đất nước mới giàu mạnh ổn định.
王安康|選舉的確重要，大家都在乎自己的生命、財產、孩子的教育……。|xuǎn jǔ de què zhòng yào， dà jiā dōu zài hū zì jǐ de shēng mìng、 cái chǎn、 hái zi de jiào yù ……。|Bầu cử quả thật quan trọng, ai cũng quan tâm tính mạng, tài sản, giáo dục con cái…
張定能|可是選舉一次就要花很多競選經費，候選人的錢從哪裡來呢？|kě shì xuǎn jǔ yí cì jiù yào huā hěn duō jìng xuǎn jīng fèi， hòu xuǎn rén de qián cóng nǎ lǐ lái ne？|Nhưng mỗi lần bầu cử tốn nhiều kinh phí tranh cử, tiền ứng viên từ đâu ra?
王安康|候選人不必花什麼錢，透過支持他的義工，也可以打一場跟以前不同的選戰。|hòu xuǎn rén bú bì huā shén me qián， tòu guò zhī chí tā de yì gōng， yě kě yǐ dǎ yì chǎng gēn yǐ qián bù tóng de xuǎn zhàn。|Ứng viên không cần tốn nhiều tiền, nhờ tình nguyện viên ủng hộ cũng có thể đánh một cuộc chiến tranh cử khác trước.
李文麗|我想人民都想找到一個有理想，能實現承諾的政治人物來帶領大家。|wǒ xiǎng rén mín dōu xiǎng zhǎo dào yí gè yǒu lǐ xiǎng， néng shí xiàn chéng nuò de zhèng zhì rén wù lái dài lǐng dà jiā。|Mình nghĩ dân đều muốn tìm một chính trị gia có lý tưởng, thực hiện được lời hứa để dẫn dắt mọi người.
王安康|是啊！我們期待美好的未來，要選一個好的政治領導人，給人民正面的力量，讓受苦的人擺脫困境，相信這個國家會一天比一天好。|shì a！ wǒ men qī dài měi hǎo de wèi lái， yào xuǎn yí gè hǎo de zhèng zhì lǐng dǎo rén， gěi rén mín zhèng miàn de lì liàng， ràng shòu kǔ de rén bǎi tuō kùn jìng， xiāng xìn zhè gè guó jiā huì yì tiān bǐ yì tiān hǎo。|Đúng vậy! Chúng ta mong tương lai tươi đẹp, phải chọn một nhà lãnh đạo tốt, mang lại sức mạnh tích cực cho dân, để người khổ thoát cảnh khó, tin rằng đất nước ngày càng tốt hơn.
短文|有一個曾經富裕過的國家，由於政府貪汙腐敗、政爭不斷，讓這個國家發展停滯，失業率上升，社會大眾對政府失去信心。街上出現許多無家可歸的遊民，他們以街為家，靠垃圾堆中的食物生活，過著外界難以想像的悲慘日子。|yǒu yí gè céng jīng fù yù guò de guó jiā， yóu yú zhèng fǔ tān wū fǔ bài、 zhèng zhēng bú duàn， ràng zhè gè guó jiā fā zhǎn tíng zhì， shī yè lǜ shàng shēng， shè huì dà zhòng duì zhèng fǔ shī qù xìn xīn。 jiē shàng chū xiàn xǔ duō wú jiā kě guī de yóu mín， tā men yǐ jiē wèi jiā， kào lā jī duī zhōng de shí wù shēng huó， guò zhù wài jiè nán yǐ xiǎng xiàng de bēi cǎn rì zi。|Có một quốc gia từng giàu có, do chính phủ tham nhũng thối nát, đấu đá chính trị không ngừng khiến phát triển đình trệ, thất nghiệp tăng, công chúng mất niềm tin vào chính phủ. Trên phố xuất hiện nhiều người vô gia cư lấy phố làm nhà, sống nhờ thức ăn trong đống rác, trải qua cuộc sống bi thảm bên ngoài khó tưởng tượng.
短文|這個國家之所以會有如此巨大的改變，不完全是因為腐敗的政治，也因為人民對政治漠不關心。貪汙、腐敗、無能當然可怕，其實最可怕的是人民對政治冷漠。|zhè gè guó jiā zhī suǒ yǐ huì yǒu rú cǐ jù dà de gǎi biàn， bù wán quán shì yīn wèi fǔ bài de zhèng zhì， yě yīn wèi rén mín duì zhèng zhì mò bù guān xīn。 tān wū、 fǔ bài、 wú néng dāng rán kě pà， qí shí zuì kě pà de shì rén mín duì zhèng zhì lěng mò。|Quốc gia này có thay đổi to lớn như vậy không hoàn toàn vì chính trị thối nát mà còn vì người dân thờ ơ chính trị. Tham nhũng, thối nát, bất tài đương nhiên đáng sợ, nhưng thật ra đáng sợ nhất là dân thờ ơ với chính trị.
短文|為什麼在越不平等的國家，人民對政治越冷漠？許多學者已經告訴我們，在越不平等的社會中，收入高的階層和政治權力高的人，自然擁有比較多的發言權，進一步影響國家的政策。這些有權有錢的人為了自己的利益，往往會利用這樣的影響力，阻止更多公平的政策與制度。|wèi shén me zài yuè bù píng děng de guó jiā， rén mín duì zhèng zhì yuè lěng mò？ xǔ duō xué zhě yǐ jīng gào sù wǒ men， zài yuè bù píng děng de shè huì zhōng， shōu rù gāo de jiē céng hé zhèng zhì quán lì gāo de rén， zì rán yōng yǒu bǐ jiào duō de fā yán quán， jìn yí bù yǐng xiǎng guó jiā de zhèng cè。 zhè xiē yǒu quán yǒu qián de rén wèi le zì jǐ de lì yì， wǎng wǎng huì lì yòng zhè yàng de yǐng xiǎng lì， zǔ zhǐ gèng duō gōng píng de zhèng cè yǔ zhì dù。|Vì sao nước càng bất bình đẳng dân càng thờ ơ chính trị? Nhiều học giả cho biết trong xã hội càng bất bình đẳng, tầng lớp thu nhập cao và người quyền lực chính trị cao tự nhiên có nhiều tiếng nói hơn, từ đó ảnh hưởng chính sách quốc gia. Những người có quyền có tiền này vì lợi ích bản thân thường dùng ảnh hưởng đó để ngăn cản chính sách và chế độ công bằng hơn.
短文|對有些人來說，「政治」離他們很遙遠，他們認為無論誰當選都沒有辦法改變社會的問題，照顧自己和家人的生活比選一個好的候選人更重要。他們明明知道社會裡有很多問題，但是也不想關心，就讓政治繼續骯髒下去，讓只顧自身利益的政客當選。|duì yǒu xiē rén lái shuō，「zhèng zhì」 lí tā men hěn yáo yuǎn， tā men rèn wèi wú lùn shuí dāng xuǎn dōu méi yǒu bàn fǎ gǎi biàn shè huì de wèn tí， zhào gù zì jǐ hé jiā rén de shēng huó bǐ xuǎn yí gè hǎo de hòu xuǎn rén gèng zhòng yào。 tā men míng míng zhī dào shè huì lǐ yǒu hěn duō wèn tí， dàn shì yě bù xiǎng guān xīn， jiù ràng zhèng zhì jì xù āng zāng xià qù， ràng zhǐ gù zì shēn lì yì de zhèng kè dāng xuǎn。|Với một số người "chính trị" rất xa vời, họ cho rằng ai trúng cử cũng không đổi được vấn đề xã hội, lo cho bản thân và gia đình quan trọng hơn chọn ứng viên tốt. Họ rõ ràng biết xã hội có nhiều vấn đề nhưng không muốn quan tâm, cứ để chính trị tiếp tục bẩn, để chính khách chỉ lo lợi ích riêng trúng cử.
短文|人民縱容官商勾結，使得物價上漲、貧富懸殊。大家擔心找不到工作、擔心買不起房子、擔心孩子的教育問題、擔心拿不到老人年金、擔心核能電廠帶來災害、擔心自己的家鄉因工廠密集而遭受汙染。各種問題都無法解決，難道政府辦個活動、放個煙火，人民就忘了這些問題嗎？|rén mín zòng róng guān shāng gōu jié， shǐ de wù jià shàng zhǎng、 pín fù xuán shū。 dà jiā dān xīn zhǎo bú dào gōng zuò、 dān xīn mǎi bù qǐ fáng zi、 dān xīn hái zi de jiào yù wèn tí、 dān xīn ná bú dào lǎo rén nián jīn、 dān xīn hé néng diàn chǎng dài lái zāi hài、 dān xīn zì jǐ de jiā xiāng yīn gōng chǎng mì jí ér zāo shòu wū rǎn。 gè zhǒng wèn tí dōu wú fǎ jiě jué， nán dào zhèng fǔ bàn gè huó dòng、 fàng gè yān huǒ， rén mín jiù wàng le zhè xiē wèn tí ma？|Dân dung túng quan thương cấu kết khiến vật giá tăng, giàu nghèo chênh lệch. Mọi người lo không tìm được việc, không mua nổi nhà, lo giáo dục con, lo không nhận được lương hưu, lo nhà máy điện hạt nhân gây thảm họa, lo quê mình ô nhiễm vì nhà máy dày đặc. Các vấn đề đều không giải quyết, chẳng lẽ chính phủ tổ chức hoạt động, bắn pháo hoa là dân quên những chuyện này?
短文|政治其實就是所有跟我們息息相關的事情，關心政治就是關心自己的未來，決定下一代過怎麼樣的生活。如果不希望我們的國家發展停滯，人民生活困苦，我們怎麼能不關心政治呢？|zhèng zhì qí shí jiù shì suǒ yǒu gēn wǒ men xī xī xiāng guān de shì qíng， guān xīn zhèng zhì jiù shì guān xīn zì jǐ de wèi lái， jué dìng xià yí dài guò zěn me yàng de shēng huó。 rú guǒ bù xī wàng wǒ men de guó jiā fā zhǎn tíng zhì， rén mín shēng huó kùn kǔ， wǒ men zěn me néng bù guān xīn zhèng zhì ne？|Chính trị thật ra là mọi chuyện liên quan mật thiết đến chúng ta, quan tâm chính trị là quan tâm tương lai mình, quyết định thế hệ sau sống thế nào. Nếu không muốn đất nước đình trệ, dân sống khốn khổ thì sao ta có thể không quan tâm chính trị?`}}]};
BOOKS[5]={lessons:[{n:1,zh:"言論自由的界線",vi:"Ranh giới của tự do ngôn luận",v:`言論|yánlùn|ngôn luận|N
界線|jièxiàn|ranh giới|N
臉書|liǎnshū|Facebook|N
則|zé|bài, mục (lượng từ cho tin ngắn)|M
留言|liúyán|bình luận, lời nhắn|N
停止|tíngzhǐ|dừng, ngừng|Vp
決策|juécè|quyết sách|N
無罪|wúzuì|vô tội|Vs
遭|zāo|bị (câu bị động bất lợi)|Ptc
慘|cǎn|thảm|Vs
反應|fǎnyīng|phản ứng|N/V
發表|fābiǎo|đăng, phát biểu|V
司法|sīfǎ|tư pháp|Vs-attr
判決|pànjué|phán quyết|N
無能|wúnéng|bất tài|Vs
幸運|xìngyùn|may mắn|Vs
顧名思義|gùmíngsīyì|nhìn tên là hiểu nghĩa|Idiom
接收|jiēshōu|tiếp nhận|V
來源|láiyuán|nguồn|N
處罰|chùfá|xử phạt|V
包容|bāoróng|bao dung|Vst
不論|búlùn|bất kể|Conj
展現|zhǎnxiàn|thể hiện|V
胡作非為|húzuòfēiwèi|làm bậy làm càn|Idiom
一旦|yídàn|một khi|Conj
工具|gōngjù|công cụ|N
洗腦|xǐnǎo|tẩy não|Vi
權益|quányì|quyền lợi|N
盲點|mángdiǎn|điểm mù|N
立場|lìchǎng|lập trường|N
平衡|pínghéng|cân bằng|N
辯護|biànhù|biện hộ|Vi
無理取鬧|wúlǐqǔnào|vô cớ gây rối|Idiom
指正|zhǐzhèng|chỉ ra chỗ sai|V
一來一往|yìláiyìwǎng|qua lại|Idiom
真理|zhēnlǐ|chân lý|N
越辯越明|yuèbiànyuèmíng|càng tranh luận càng rõ|Idiom
共識|gòngshí|đồng thuận|N
亂象|luànxiàng|tình trạng hỗn loạn|N
攻擊|gōngjī|tấn công|V
自殺|zìshā|tự sát|Vp
過於|guòyú|quá mức|Adv
事實上|shìshíshàng|thực tế|Phrase
仇恨|chóuhèn|thù hận|N
不實|bùshí|sai sự thật|Vs-attr
謠言|yáoyán|tin đồn|N
霸凌|bàlíng|bắt nạt|N/V
負責|fùzé|chịu trách nhiệm|Vs
誤解|wùjiě|hiểu lầm|V
意義|yìyì|ý nghĩa|N
因此|yīncǐ|do đó|Adv
否定|fǒudìng|phủ định|V
價值|jiàzhí|giá trị|N
封住|fēngzhù|bịt lại|V
嘴|zuǐ|miệng, lời nói|N
混亂|hùnluàn|hỗn loạn|Vs
唯一|wéiyī|duy nhất|Vs-attr
濫用|lànyòng|lạm dụng|V
並非|bìngfēi|không phải|Adv
不用|búyòng|không cần|Adv
抓|zhuā|bắt|V
關|guān|nhốt|V
名嘴|míngzuǐ|bình luận viên truyền hình|N
根據|gēnjù|căn cứ|N
隨意|suíyì|tùy tiện|Adv
鄉民|xiāngmín|cư dân mạng|N
匿名|nìmíng|ẩn danh|Vi
正義|zhèngyì|chính nghĩa|N
惡意|èyì|ác ý|Adv/N
情緒|qíngxù|cảm xúc|N
成|chéng|trở thành|Vpt
護身符|hùshēnfú|bùa hộ mệnh|N
傳播|chuánbō|lan truyền|V
驚人|jīngrén|đáng kinh ngạc|Vs
股|gǔ|luồng (lượng từ cho sức mạnh)|M
有心|yǒuxīn|cố ý|Vs
無意|wúyì|vô ý|Vs
威脅|wēixié|đe dọa|N/V
諷刺|fěngcì|châm biếm|V
得|dé|mắc (bệnh)|Vpt
憂鬱症|yōuyùzhèng|trầm cảm|N
閉嘴|bìzuǐ|im miệng|V-sep
回應|huíyīng|phản hồi|V/N
傷害|shānghài|làm tổn thương|V/N
破壞|pòhuài|phá hoại|V
管|guǎn|quản, để ý|V
聰明|cōngmíng|thông minh|Vs
標題|biāotí|tiêu đề|N
懷疑|huáiyí|nghi ngờ|Vst
模糊|móhú|mơ hồ|Vs
擅長|shànzhǎng|giỏi về|Vst
灰色|huīsè|màu xám|N
地帶|dìdài|khu vực|N
法院|fǎyuàn|tòa án|N
確定|quèdìng|xác định|V
個人|gèrén|cá nhân|N
承擔|chéngdān|gánh vác|V
和諧|héxié|hài hòa|Vs
制定|zhìdìng|ban hành|V
嚴格|yángé|nghiêm khắc|Vs
約束|yuēshù|ràng buộc|V`,d:{l:`新聞|聽到颱風假只放半天的消息，許多網友上網表達意見，不到兩個小時，市長的臉書就有超過兩千則的留言，不久，政府決定改為全天停止上班上課。民眾的言論真的影響了政府的決策？|tīng dào tái fēng jiǎ zhǐ fàng bàn tiān de xiāo xī， xǔ duō wǎng yǒu shàng wǎng biǎo dá yì jiàn， bú dào liǎng gè xiǎo shí， shì zhǎng de liǎn shū jiù yǒu chāo guò liǎng qiān zé de liú yán， bù jiǔ， zhèng fǔ jué dìng gǎi wèi quán tiān tíng zhǐ shàng bān shàng kè。 mín zhòng de yán lùn zhēn de yǐng xiǎng le zhèng fǔ de jué cè？|Nghe tin nghỉ bão chỉ nghỉ nửa ngày, nhiều cư dân mạng lên mạng bày tỏ ý kiến, chưa đầy hai tiếng Facebook thị trưởng đã có hơn hai nghìn bình luận, không lâu sau chính quyền quyết định nghỉ làm nghỉ học cả ngày. Lời của dân thật sự ảnh hưởng quyết sách của chính phủ?
文章|言論自由，顧名思義，是指人人都有表達意見和想法的權利，這是民主制度的基礎。每個人都能接收各種來源的訊息，不受檢查及限制，也不必擔心說了什麼以後會被處罰。這樣的社會包容各種不同意見，即使是批評、反對也不例外。|yán lùn zì yóu， gù míng sī yì， shì zhǐ rén rén dōu yǒu biǎo dá yì jiàn hé xiǎng fǎ de quán lì， zhè shì mín zhǔ zhì dù de jī chǔ。 měi gè rén dōu néng jiē shōu gè zhǒng lái yuán de xùn xī， bú shòu jiǎn chá jí xiàn zhì， yě bú bì dān xīn shuō le shén me yǐ hòu huì bèi chù fá。 zhè yàng de shè huì bāo róng gè zhǒng bù tóng yì jiàn， jí shǐ shì pī píng、 fǎn duì yě bú lì wài。|Tự do ngôn luận, đúng như tên, là ai cũng có quyền bày tỏ ý kiến và suy nghĩ, đây là nền tảng của chế độ dân chủ. Ai cũng tiếp nhận thông tin từ nhiều nguồn mà không bị kiểm duyệt hay hạn chế, cũng không phải lo nói gì rồi bị phạt. Xã hội như vậy bao dung mọi ý kiến khác nhau, kể cả phê bình, phản đối cũng không ngoại lệ.
文章|不論是在媒體上發表文章或上街抗議，都展現了言論自由的力量。正因為有言論自由，政府的決策受到人民的監督，無法胡作非為。想想看，一旦政府把發言權當做政治工具，民眾怎麼會不被洗腦？在言論被限制的情況下，還有人敢說真話嗎？人民又怎麼有機會爭取自己的權益？|bú lùn shì zài méi tǐ shàng fā biǎo wén zhāng huò shàng jiē kàng yì， dōu zhǎn xiàn le yán lùn zì yóu de lì liàng。 zhèng yīn wèi yǒu yán lùn zì yóu， zhèng fǔ de jué cè shòu dào rén mín de jiān dū， wú fǎ hú zuò fēi wèi。 xiǎng xiǎng kàn， yí dàn zhèng fǔ bǎ fā yán quán dāng zuò zhèng zhì gōng jù， mín zhòng zěn me huì bú bèi xǐ nǎo？ zài yán lùn bèi xiàn zhì de qíng kuàng xià， hái yǒu rén gǎn shuō zhēn huà ma？ rén mín yòu zěn me yǒu jī huì zhēng qǔ zì jǐ de quán yì？|Dù đăng bài trên truyền thông hay xuống đường phản đối đều thể hiện sức mạnh của tự do ngôn luận. Chính vì có tự do ngôn luận nên quyết sách của chính phủ chịu sự giám sát của dân, không thể làm càn. Thử nghĩ, một khi chính phủ coi quyền phát ngôn là công cụ chính trị, dân sao không bị tẩy não? Khi ngôn luận bị hạn chế còn ai dám nói thật? Dân lấy đâu cơ hội giành quyền lợi?
文章|人都有盲點，所以意見越是多元，不同立場的觀點越能得到平衡；當你受到批評，也有言論權來替自己辯護。如果有理，大家會跟你站在同一邊；若是無理取鬧，為反對而反對，也會有人跳出來批評指正。透過一來一往的討論和批評，真理將越辯越明，社會共識也慢慢形成。只有一種聲音的社會是無法進步的。|rén dōu yǒu máng diǎn， suǒ yǐ yì jiàn yuè shì duō yuán， bù tóng lì chǎng de guān diǎn yuè néng dé dào píng héng； dāng nǐ shòu dào pī píng， yě yǒu yán lùn quán lái tì zì jǐ biàn hù。 rú guǒ yǒu lǐ， dà jiā huì gēn nǐ zhàn zài tóng yì biān； ruò shì wú lǐ qǔ nào， wèi fǎn duì ér fǎn duì， yě huì yǒu rén tiào chū lái pī píng zhǐ zhèng。 tòu guò yì lái yì wǎng de tǎo lùn hé pī píng， zhēn lǐ jiāng yuè biàn yuè míng， shè huì gòng shí yě màn màn xíng chéng。 zhǐ yǒu yì zhǒng shēng yīn de shè huì shì wú fǎ jìn bù de。|Ai cũng có điểm mù nên ý kiến càng đa dạng, quan điểm các lập trường càng được cân bằng; khi bị phê bình bạn cũng có quyền ngôn luận để tự biện hộ. Nếu có lý mọi người đứng về phía bạn; nếu vô cớ gây rối, phản đối chỉ để phản đối cũng sẽ có người lên chỉ ra. Qua thảo luận và phê bình qua lại, chân lý càng tranh luận càng sáng, đồng thuận xã hội dần hình thành. Xã hội chỉ có một tiếng nói thì không thể tiến bộ.
文章|然而，每當提到媒體亂象，或是有人因為受不了網友的言論攻擊而自殺，大家就會開始批評言論過於自由。事實上，法律早就已經禁止發表仇恨性言論及不實謠言，那些仇恨性言論、不實內容所造成的霸凌現象，不是因為言論過於自由，而是因為那些人不懂得為自己的言論負責，誤解「言論自由」的意義。這是教育的問題，不該因此否定言論自由的價值，封住人民的嘴。|rán ér， měi dāng tí dào méi tǐ luàn xiàng， huò shì yǒu rén yīn wèi shòu bù liǎo wǎng yǒu de yán lùn gōng jī ér zì shā， dà jiā jiù huì kāi shǐ pī píng yán lùn guò yú zì yóu。 shì shí shàng， fǎ lǜ zǎo jiù yǐ jīng jìn zhǐ fā biǎo chóu hèn xìng yán lùn jí bù shí yáo yán， nà xiē chóu hèn xìng yán lùn、 bù shí nèi róng suǒ zào chéng de bà líng xiàn xiàng， bú shì yīn wèi yán lùn guò yú zì yóu， ér shì yīn wèi nà xiē rén bù dǒng de wèi zì jǐ de yán lùn fù zé， wù jiě 「yán lùn zì yóu」 de yì yì。 zhè shì jiào yù de wèn tí， bù gāi yīn cǐ fǒu dìng yán lùn zì yóu de jià zhí， fēng zhù rén mín de zuǐ。|Tuy nhiên mỗi khi nhắc loạn tượng truyền thông hoặc có người vì không chịu nổi công kích của cư dân mạng mà tự tử, mọi người bắt đầu chê ngôn luận quá tự do. Thực tế luật pháp từ lâu đã cấm ngôn luận thù hận và tin đồn sai sự thật, hiện tượng bắt nạt do những nội dung đó không phải vì ngôn luận quá tự do mà vì họ không biết chịu trách nhiệm về lời mình, hiểu sai ý nghĩa "tự do ngôn luận". Đó là vấn đề giáo dục, không nên vì thế phủ nhận giá trị của tự do ngôn luận, bịt miệng người dân.
文章|我們應該保護言論自由，因為這是讓有價值的想法，在這個混亂的時代裡，發出聲音的唯一方式。|wǒ men yīng gāi bǎo hù yán lùn zì yóu， yīn wèi zhè shì ràng yǒu jià zhí de xiǎng fǎ， zài zhè gè hùn luàn de shí dài lǐ， fā chū shēng yīn de wéi yì fāng shì。|Chúng ta nên bảo vệ tự do ngôn luận vì đó là cách duy nhất để những ý tưởng có giá trị cất tiếng trong thời đại hỗn loạn này.
評論|在自由民主的社會裡，每個人都可以說出自己想說的話，不用擔心會因為反對政府、批評總統，甚至說錯一個字而被抓去關。可惜，很多人都濫用了這種自由。打開電視，名嘴們不是說著毫無根據的內容，就是隨意批評；網路上，鄉民躲在匿名制度的保護傘下，讓謠言滿天飛，或是自以為正義，惡意批評，引起更多的負面情緒。言論自由簡直成了這些人的護身符，難道他們都不需要為自己所說的話負責嗎？吵個不停，真理就會越辯越明嗎？|zài zì yóu mín zhǔ de shè huì lǐ， měi gè rén dōu kě yǐ shuō chū zì jǐ xiǎng shuō de huà， bú yòng dān xīn huì yīn wèi fǎn duì zhèng fǔ、 pī píng zǒng tǒng， shèn zhì shuō cuò yí gè zì ér bèi zhuā qù guān。 kě xī， hěn duō rén dōu làn yòng le zhè zhǒng zì yóu。 dǎ kāi diàn shì， míng zuǐ men bú shì shuō zhù háo wú gēn jù de nèi róng， jiù shì suí yì pī píng； wǎng lù shàng， xiāng mín duǒ zài nì míng zhì dù de bǎo hù sǎn xià， ràng yáo yán mǎn tiān fēi， huò shì zì yǐ wèi zhèng yì， è yì pī píng， yǐn qǐ gèng duō de fù miàn qíng xù。 yán lùn zì yóu jiǎn zhí chéng le zhè xiē rén de hù shēn fú， nán dào tā men dōu bù xū yào wèi zì jǐ suǒ shuō de huà fù zé ma？ chǎo gè bù tíng， zhēn lǐ jiù huì yuè biàn yuè míng ma？|Trong xã hội tự do dân chủ, ai cũng có thể nói điều mình muốn, không lo bị bắt giam vì phản đối chính phủ, phê bình tổng thống, thậm chí nói sai một chữ. Tiếc là nhiều người đã lạm dụng tự do này. Mở tivi, các bình luận viên không nói nội dung vô căn cứ thì cũng chê bai tùy tiện; trên mạng cư dân mạng nấp dưới chiếc ô ẩn danh để tin đồn bay đầy trời, hoặc tự cho mình chính nghĩa, ác ý phê bình, gây thêm cảm xúc tiêu cực. Tự do ngôn luận gần như thành bùa hộ mệnh của họ, chẳng lẽ họ không cần chịu trách nhiệm về lời mình nói? Cãi mãi thì chân lý có càng tranh luận càng sáng không?
評論|言論自由不能完全沒有限制，網路言論尤其如此。網路匿名方式讓許多人更大膽地表達意見，加上網路傳播速度快，因此影響力更強大、更驚人。然而，這股力量可能在人們有心或無意的情況下，對個人或社會造成威脅。的確，言論自由是每個人的權利，但是我們看到太多自由被濫用的例子。只要立場不同，就攻擊、諷刺，可是不見得每個人都能輕鬆面對這樣的言論。有人因此而得了憂鬱症，甚至自殺；多數人則選擇閉嘴不回應。網路鄉民以「言論自由」之名傷害別人，不正是破壞了言論自由嗎？|yán lùn zì yóu bù néng wán quán méi yǒu xiàn zhì， wǎng lù yán lùn yóu qí rú cǐ。 wǎng lù nì míng fāng shì ràng xǔ duō rén gèng dà dǎn dì biǎo dá yì jiàn， jiā shàng wǎng lù chuán bō sù dù kuài， yīn cǐ yǐng xiǎng lì gèng qiáng dà、 gèng jīng rén。 rán ér， zhè gǔ lì liàng kě néng zài rén men yǒu xīn huò wú yì de qíng kuàng xià， duì gè rén huò shè huì zào chéng wēi xié。 de què， yán lùn zì yóu shì měi gè rén de quán lì， dàn shì wǒ men kàn dào tài duō zì yóu bèi làn yòng de lì zi。 zhǐ yào lì chǎng bù tóng， jiù gōng jī、 fěng cì， kě shì bú jiàn dé měi gè rén dōu néng qīng sōng miàn duì zhè yàng de yán lùn。 yǒu rén yīn cǐ ér dé le yōu yù zhèng， shèn zhì zì shā； duō shù rén zé xuǎn zé bì zuǐ bù huí yīng。 wǎng lù xiāng mín yǐ 「yán lùn zì yóu」 zhī míng shāng hài bié rén， bú zhèng shì pò huài le yán lùn zì yóu ma？|Tự do ngôn luận không thể hoàn toàn không giới hạn, ngôn luận mạng càng như vậy. Ẩn danh trên mạng khiến nhiều người dám nói hơn, cộng tốc độ lan truyền nhanh nên sức ảnh hưởng càng mạnh, càng kinh người. Tuy nhiên sức mạnh này, dù cố ý hay vô ý, có thể đe dọa cá nhân hay xã hội. Quả thật tự do ngôn luận là quyền của mọi người, nhưng ta thấy quá nhiều ví dụ tự do bị lạm dụng. Hễ khác lập trường là công kích, châm biếm, mà không phải ai cũng nhẹ nhàng đối diện. Có người vì thế mắc trầm cảm, thậm chí tự tử; đa số chọn im lặng không phản hồi. Cư dân mạng nhân danh "tự do ngôn luận" làm tổn thương người khác chẳng phải đang phá hoại tự do ngôn luận sao?
評論|除了網路，媒體人更應該管好自己的嘴巴。雖然目前有法律來處罰仇恨和歧視性言論，但事實上，媒體聰明得很，他們在標題加上「？」「懷疑」或是「可能」這種模糊的方式，就是為了避開責任，法律根本處罰不到他們。名嘴們就更不用說了，他們擅長走在灰色地帶，就算被告，等法院判決確定，還不知得等多久，但傷害卻早就已經造成。|chú le wǎng lù， méi tǐ rén gèng yīng gāi guǎn hǎo zì jǐ de zuǐ bā。 suī rán mù qián yǒu fǎ lǜ lái chù fá chóu hèn hé qí shì xìng yán lùn， dàn shì shí shàng， méi tǐ cōng míng dé hěn， tā men zài biāo tí jiā shàng 「？」「huái yí」 huò shì 「kě néng」 zhè zhǒng mó hú de fāng shì， jiù shì wèi le bì kāi zé rèn， fǎ lǜ gēn běn chù fá bú dào tā men。 míng zuǐ men jiù gèng bú yòng shuō le， tā men shàn zhǎng zǒu zài huī sè dì dài， jiù suàn bèi gào， děng fǎ yuàn pàn jué què dìng， hái bù zhī dé děng duō jiǔ， dàn shāng hài què zǎo jiù yǐ jīng zào chéng。|Ngoài mạng, người làm truyền thông càng nên quản miệng mình. Dù hiện có luật phạt ngôn luận thù hận và kỳ thị, nhưng thực tế truyền thông rất khôn, họ thêm "?", "nghi ngờ" hay "có thể" vào tiêu đề kiểu mơ hồ để né trách nhiệm, luật không phạt được họ. Các bình luận viên khỏi nói, họ giỏi đi trong vùng xám, dù bị kiện đợi tòa phán quyết chưa biết đến bao giờ, nhưng tổn thương đã gây ra từ lâu.
評論|為了解決社會亂象，小自個人，大至媒體，在享受言論自由的同時，也必須承擔起相關責任；否則，政府就應該為了民眾安全與社會和諧而制定更嚴格的法律，約束已被濫用的言論自由。|wèi liǎo jiě jué shè huì luàn xiàng， xiǎo zì gè rén， dà zhì méi tǐ， zài xiǎng shòu yán lùn zì yóu de tóng shí， yě bì xū chéng dān qǐ xiāng guān zé rèn； fǒu zé， zhèng fǔ jiù yīng gāi wèi le mín zhòng ān quán yǔ shè huì hé xié ér zhì dìng gèng yán gé de fǎ lǜ， yuē shù yǐ bèi làn yòng de yán lùn zì yóu。|Để giải quyết loạn tượng xã hội, nhỏ từ cá nhân lớn đến truyền thông, khi hưởng tự do ngôn luận cũng phải gánh trách nhiệm liên quan; nếu không chính phủ phải vì an toàn dân chúng và hài hòa xã hội mà ban hành luật nghiêm hơn, ràng buộc tự do ngôn luận đã bị lạm dụng.`}},{n:2,zh:"關於基改食品，我有話要說",vi:"Tôi có điều muốn nói về thực phẩm biến đổi gen",v:`基改|jīgǎi|biến đổi gen (viết tắt)|N
農糧|nóngliáng|nông sản lương thực|N
廣播節目|guǎngbōjiémù|chương trình phát thanh|N
主持人|zhǔchírén|người dẫn chương trình|N
聽眾|tīngzhòng|thính giả|N
播|bō|phát sóng|V
蟲子|chóngzi|côn trùng|N
隔壁|gébì|bên cạnh|N
回答|huídá|trả lời|V
死|sǐ|chết|V
話題|huàtí|chủ đề|N
危害|wēihài|gây hại|V
贊成|zànchéng|tán thành|V
各式各樣|gèshìgèyàng|đủ loại|Phrase
只不過|zhǐbúguò|chỉ là|Adv
種子|zhǒngzi|hạt giống|N
比如說|bǐrúshuō|ví dụ|Phrase
維他命|wéitāmìng|vitamin|N
蔬果|shūguǒ|rau quả|N
抗癌|kàngái|chống ung thư|Vs
過敏|guòmǐn|dị ứng|Vs
花生|huāshēng|đậu phộng|N
科學家|kēxuéjiā|nhà khoa học|N
豐富|fēngfù|phong phú|Vs
享用|xiǎngyòng|thưởng thức|V
達到|dádào|đạt được|Vpt
預防|yùfáng|phòng ngừa|V
疾病|jíbìng|bệnh tật|N
效果|xiàoguǒ|hiệu quả|N
好幾(種)|hǎojǐ(zhǒng)|nhiều (loại)|Phrase
警告|jǐnggào|cảnh báo|N/V
突破|tūpò|vượt qua, đột phá|V
糧食|liángshí|lương thực|N
早晚|zǎowǎn|sớm muộn|Adv
不僅|bùjǐn|không chỉ|Adv
農作物|nóngzuòwù|cây trồng|N
抵抗力|dǐkànglì|sức đề kháng|N
蟲害|chónghài|sâu bệnh|N
產量|chǎnliàng|sản lượng|N
飢荒|jīhuāng|nạn đói|N
含有|hányǒu|chứa|Vst
大豆|dàdòu|đậu nành|N
玉米|yùmǐ|bắp, ngô|N
密不可分|mìbùkěfēn|không thể tách rời|Idiom
生產|shēngchǎn|sản xuất|V
缺少|quēshǎo|thiếu|Vst
依賴|yīlài|dựa vào|V
進口|jìnkǒu|nhập khẩu|V
危機|wēijī|khủng hoảng|N
生物科技|shēngwùkējì|công nghệ sinh học|N
機構|jīgòu|cơ quan, tổ chức|N
證據|zhèngjù|chứng cứ|N
證明|zhèngmíng|chứng minh|V/N
人體|réntǐ|cơ thể người|N
結論|jiélùn|kết luận|N
生長|shēngzhǎng|sinh trưởng|V
除草劑|chúcǎojì|thuốc diệt cỏ|N
物質|wùzhì|vật chất|N
怪物|guàiwù|quái vật|N
原料|yuánliào|nguyên liệu|N
包裝|bāozhuāng|bao bì|N
標示|biāoshì|ghi nhãn|V/N
一切|yíqiè|tất cả|Det`,d:{l:`主持人|聽眾朋友大家好！我是「健康加油站」節目主持人張成方。今天中午我在一家麵店用餐，電視正播著基因改造食品新聞。我聽見老闆說：「基因改造不但可以減少農藥的使用，還能夠殺死蟲子，有什麼不好的？」隔壁桌的客人回答：「蟲子會死，人吃了就不會有問題嗎？」基改食品究竟安不安全，是大家都關心的話題，就像手機、核能一樣，帶給我們方便，卻也可能危害健康。到底該怎麼選擇呢？首先，我們來聽聽贊成的人怎麼說：|tīng zhòng péng yǒu dà jiā hǎo！ wǒ shì 「jiàn kāng jiā yóu zhàn」 jié mù zhǔ chí rén zhāng chéng fāng。 jīn tiān zhōng wǔ wǒ zài yì jiā miàn diàn yòng cān， diàn shì zhèng bō zhù jī yīn gǎi zào shí pǐn xīn wén。 wǒ tīng jiàn lǎo bǎn shuō：「jī yīn gǎi zào bú dàn kě yǐ jiǎn shǎo nóng yào de shǐ yòng， hái néng gòu shā sǐ chóng zi， yǒu shén me bù hǎo de？」 gé bì zhuō de kè rén huí dá：「chóng zi huì sǐ， rén chī le jiù bú huì yǒu wèn tí ma？」 jī gǎi shí pǐn jiū jìng ān bù ān quán， shì dà jiā dōu guān xīn de huà tí， jiù xiàng shǒu jī、 hé néng yí yàng， dài gěi wǒ men fāng biàn， què yě kě néng wēi hài jiàn kāng。 dào dǐ gāi zěn me xuǎn zé ne？ shǒu xiān， wǒ men lái tīng tīng zàn chéng de rén zěn me shuō：|Xin chào quý thính giả! Tôi là Trương Thành Phương, người dẫn chương trình "Trạm tiếp sức sức khỏe". Trưa nay tôi ăn ở một tiệm mì, tivi đang đưa tin thực phẩm biến đổi gen. Tôi nghe ông chủ nói: "Biến đổi gen không những giảm dùng thuốc trừ sâu mà còn diệt được sâu bọ, có gì không tốt?" Khách bàn bên đáp: "Sâu chết thì người ăn không sao à?" Thực phẩm biến đổi gen có an toàn hay không là chủ đề mọi người quan tâm, như điện thoại, năng lượng hạt nhân, mang lại tiện lợi nhưng cũng có thể hại sức khỏe. Rốt cuộc nên chọn thế nào? Trước hết nghe người tán thành nói:
醫師|大家想想看，超市、早餐店、夜市，各式各樣基因改造的食物早就進了我們的肚子裡了。基因改造，簡單地說，只不過是利用科學技術，把更新、更好的基因，加在原來的種子裡而已。比如說含有更多維他命A的蔬果、能抗癌的番茄、不會引起過敏的花生……等等。科學家證實，這些基因改造的食物不但有豐富的營養價值，也讓大家在享用美味的同時，達到預防疾病的效果。|dà jiā xiǎng xiǎng kàn， chāo shì、 zǎo cān diàn、 yè shì， gè shì gè yàng jī yīn gǎi zào de shí wù zǎo jiù jìn le wǒ men de dǔ zi lǐ le。 jī yīn gǎi zào， jiǎn dān dì shuō， zhǐ bú guò shì lì yòng kē xué jì shù， bǎ gēng xīn、 gèng hǎo de jī yīn， jiā zài yuán lái de zhǒng zi lǐ ér yǐ。 bǐ rú shuō hán yǒu gèng duō wéi tā mìng A de shū guǒ、 néng kàng ái de fān qié、 bú huì yǐn qǐ guò mǐn de huā shēng …… děng děng。 kē xué jiā zhèng shí， zhè xiē jī yīn gǎi zào de shí wù bú dàn yǒu fēng fù de yíng yǎng jià zhí， yě ràng dà jiā zài xiǎng yòng měi wèi de tóng shí， dá dào yù fáng jí bìng de xiào guǒ。|Mọi người thử nghĩ xem, siêu thị, quán ăn sáng, chợ đêm, đủ loại thực phẩm biến đổi gen đã vào bụng chúng ta từ lâu. Biến đổi gen nói đơn giản chỉ là dùng kỹ thuật khoa học thêm gen mới, tốt hơn vào hạt giống ban đầu. Ví dụ rau quả chứa nhiều vitamin A, cà chua chống ung thư, đậu phộng không gây dị ứng… Các nhà khoa học xác nhận những thực phẩm này không chỉ giàu giá trị dinh dưỡng mà còn giúp phòng bệnh khi thưởng thức món ngon.
醫師|現代人為了健康，每天都必須吃好幾種蔬菜；但是未來，一餐基改食物就能提供我們一天所需要的營養。既然越改越進步，為什麼還有人要反對呢？|xiàn dài rén wèi le jiàn kāng， měi tiān dōu bì xū chī hǎo jǐ zhǒng shū cài； dàn shì wèi lái， yì cān jī gǎi shí wù jiù néng tí gōng wǒ men yì tiān suǒ xū yào de yíng yǎng。 jì rán yuè gǎi yuè jìn bù， wèi shén me hái yǒu rén yào fǎn duì ne？|Người hiện đại vì sức khỏe mỗi ngày phải ăn vài loại rau; nhưng tương lai một bữa thực phẩm biến đổi gen đủ cung cấp dinh dưỡng cả ngày. Đã càng sửa càng tiến bộ, sao vẫn có người phản đối?
農業研究員|我認為基改食物最大的好處是能夠解決許多問題。專家們已經提出警告，全球人口將在2050年突破百億，加上氣候不正常，糧食不足的問題早晚會發生。基改技術不僅可以減少農藥的使用、降低成本、增加農作物的抵抗力、預防蟲害、減少環境汙染，更重要的是可以提高產量，解決飢荒。|wǒ rèn wèi jī gǎi shí wù zuì dà de hǎo chù shì néng gòu jiě jué xǔ duō wèn tí。 zhuān jiā men yǐ jīng tí chū jǐng gào， quán qiú rén kǒu jiāng zài 2050 nián tū pò bǎi yì， jiā shàng qì hòu bú zhèng cháng， liáng shí bù zú de wèn tí zǎo wǎn huì fā shēng。 jī gǎi jì shù bù jǐn kě yǐ jiǎn shǎo nóng yào de shǐ yòng、 jiàng dī chéng běn、 zēng jiā nóng zuò wù de dǐ kàng lì、 yù fáng chóng hài、 jiǎn shǎo huán jìng wū rǎn， gèng zhòng yào de shì kě yǐ tí gāo chǎn liàng， jiě jué jī huāng。|Tôi cho rằng lợi ích lớn nhất của thực phẩm biến đổi gen là giải quyết nhiều vấn đề. Chuyên gia đã cảnh báo dân số toàn cầu sẽ vượt mười tỷ vào năm 2050, cộng khí hậu bất thường, thiếu lương thực sớm muộn xảy ra. Kỹ thuật này không chỉ giảm dùng thuốc trừ sâu, hạ chi phí, tăng sức đề kháng cây trồng, phòng sâu bệnh, giảm ô nhiễm mà quan trọng hơn là tăng sản lượng, giải quyết nạn đói.
農業研究員|再說，含有基改大豆、玉米的食品早就與我們的生活密不可分。美國是生產基改食物最多的國家，多數人都能接受基改食物，我們何必擔心呢？而且一旦缺少糧食，必須依賴進口，將造成嚴重的經濟危機。基改的影響這麼大，我們都應該支持才對。|zài shuō， hán yǒu jī gǎi dà dòu、 yù mǐ de shí pǐn zǎo jiù yǔ wǒ men de shēng huó mì bù kě fēn。 měi guó shì shēng chǎn jī gǎi shí wù zuì duō de guó jiā， duō shù rén dōu néng jiē shòu jī gǎi shí wù， wǒ men hé bì dān xīn ne？ ér qiě yí dàn quē shǎo liáng shí， bì xū yī lài jìn kǒu， jiāng zào chéng yán zhòng de jīng jì wēi jī。 jī gǎi de yǐng xiǎng zhè me dà， wǒ men dōu yīng gāi zhī chí cái duì。|Hơn nữa thực phẩm chứa đậu nành, bắp biến đổi gen đã gắn bó không tách rời với đời sống ta. Mỹ là nước sản xuất nhiều thực phẩm biến đổi gen nhất, đa số người chấp nhận, ta lo làm gì? Hơn nữa một khi thiếu lương thực phải dựa vào nhập khẩu sẽ gây khủng hoảng kinh tế nghiêm trọng. Ảnh hưởng của biến đổi gen lớn như vậy, chúng ta đều nên ủng hộ mới đúng.
生物科技公司經理|「基改食品有害健康」這種說法毫無科學根據可言。最新的一項報導指出，25年來，超過500個機構研究了大量的基改農產品，直到現在都沒有足夠的證據可以證明基改作物對人體和環境有害。他們的結論是：基改作物與傳統作物一樣安全。|「jī gǎi shí pǐn yǒu hài jiàn kāng」 zhè zhǒng shuō fǎ háo wú kē xué gēn jù kě yán。 zuì xīn de yí xiàng bào dǎo zhǐ chū，25 nián lái， chāo guò 500 gè jī gòu yán jiū le dà liàng de jī gǎi nóng chǎn pǐn， zhí dào xiàn zài dōu méi yǒu zú gòu de zhèng jù kě yǐ zhèng míng jī gǎi zuò wù duì rén tǐ hé huán jìng yǒu hài。 tā men de jié lùn shì： jī gǎi zuò wù yǔ chuán tǒng zuò wù yí yàng ān quán。|Nói "thực phẩm biến đổi gen hại sức khỏe" hoàn toàn không có căn cứ khoa học. Một báo cáo mới nhất cho biết trong 25 năm hơn 500 cơ quan nghiên cứu lượng lớn nông sản biến đổi gen, đến nay vẫn chưa đủ bằng chứng chứng minh cây trồng này hại cơ thể và môi trường. Kết luận của họ: cây trồng biến đổi gen an toàn như truyền thống.
生物科技公司經理|英國有位農業專家也表示，有問題的其實是在農作物生長過程中所使用的農藥，如除草劑等物質，而不是基改科技本身，所以不需要把基改科技當成怪物，自己嚇自己。此外，按照我國的法律，只要食品中含有基改原料，都必須在包裝上清楚標示，消費者不必擔心。總而言之，我們可以自由地選擇，享受科技帶來的一切美好與便利。|yīng guó yǒu wèi nóng yè zhuān jiā yě biǎo shì， yǒu wèn tí de qí shí shì zài nóng zuò wù shēng zhǎng guò chéng zhōng suǒ shǐ yòng de nóng yào， rú chú cǎo jì děng wù zhì， ér bú shì jī gǎi kē jì běn shēn， suǒ yǐ bù xū yào bǎ jī gǎi kē jì dāng chéng guài wù， zì jǐ xià zì jǐ。 cǐ wài， àn zhào wǒ guó de fǎ lǜ， zhǐ yào shí pǐn zhōng hán yǒu jī gǎi yuán liào， dōu bì xū zài bāo zhuāng shàng qīng chǔ biāo shì， xiāo fèi zhě bú bì dān xīn。 zǒng ér yán zhī， wǒ men kě yǐ zì yóu dì xuǎn zé， xiǎng shòu kē jì dài lái de yí qiè měi hǎo yǔ biàn lì。|Một chuyên gia nông nghiệp Anh cũng cho biết thứ có vấn đề thật ra là thuốc trừ sâu, thuốc diệt cỏ dùng trong quá trình cây lớn chứ không phải công nghệ biến đổi gen, nên không cần coi nó là quái vật tự dọa mình. Ngoài ra theo luật nước ta, thực phẩm có nguyên liệu biến đổi gen đều phải ghi rõ trên bao bì, người tiêu dùng không cần lo. Tóm lại ta có thể tự do lựa chọn, hưởng mọi điều tốt đẹp và tiện lợi công nghệ mang lại.`}},{n:3,zh:"整型好不好",vi:"Phẫu thuật thẩm mỹ có tốt không?",v:`風氣|fēngqì|phong khí, trào lưu|N
開放|kāifàng|cởi mở|Vs
意外|yìwài|tai nạn, bất ngờ|N
存在|cúnzài|tồn tại|V
內在|nèizài|nội tại, bên trong|N
特質|tèzhì|đặc tính|N
勝|shèng|hơn, thắng (văn ngôn)|V
醜|chǒu|xấu|Vs
顏值|yánzhí|nhan sắc (giá trị gương mặt)|N
他人|tārén|người khác|N
不盡然|bùjǐnrán|chưa hẳn|Adv
要求|yāoqiú|yêu cầu|V
整出|zhěngchū|chỉnh ra (bằng phẫu thuật)|V
鼻子|bízi|mũi|N
皮膚|pífū|da|N
纖|xiān|thon, mảnh|Vs
腰|yāo|eo|N
豐胸|fēngxiōng|ngực đầy|Vs
高挺|gāotǐng|cao thẳng (mũi)|Vs
水汪汪|shuǐwāngwāng|long lanh nước|Phrase
參賽|cānsài|tham gia thi|Vi
眼光|yǎnguāng|ánh mắt, con mắt|N
矛盾|máodùn|mâu thuẫn|Vs
外貌|wàimào|ngoại hình|N
美滿|měimǎn|mỹ mãn|Vs
職涯|zhíyá|sự nghiệp|N
以貌取人|yǐmàoqǔrén|đánh giá người qua vẻ ngoài|Idiom
不計一切|bújìyíqiè|bất chấp tất cả|Idiom
英俊|yīngjùn|điển trai|Vs
獲得|huòdé|đạt được|Vpt
青睞|qīnglài|ưu ái|N
對象|duìxiàng|đối tượng (hẹn hò)|N
智力|zhìlì|trí lực|N
同樣|tóngyàng|tương tự|Adv
團隊|tuánduì|đội nhóm|N
金錢|jīnqián|tiền bạc|N
投資|tóuzī|đầu tư|V/N
行為|xíngwèi|hành vi|N
儘管|jǐnguǎn|cho dù|Conj
日漸|rìjiàn|ngày càng|Adv
失敗|shībài|thất bại|Vp
胸部|xiōngbù|ngực|N
大小不一|dàxiǎobùyī|to nhỏ không đều|Idiom
變形|biànxíng|biến dạng|Vp
失血|shīxuè|mất máu|Vp-sep
過|guò|quá (mức)|Adv
飽受|bǎoshòu|chịu nhiều|Vpt
後遺症|hòuyízhèng|di chứng|N
副作用|fùzuòyòng|tác dụng phụ|N
多麼|duōme|biết bao|Adv
冒險|màoxiǎn|mạo hiểm|V-sep
如今|rújīn|ngày nay|Adv
捷徑|jiéjìng|đường tắt|N
進而|jìnér|tiến tới|Adv
謹慎|jǐnshèn|cẩn trọng|Vs
看待|kàndài|nhìn nhận|V`,d:{l:`文章|近年來，人們越來越重視外表，整型有年輕化的趨勢，甚至出現了「顏值」這樣的詞。贊成的人認為，整型可以帶來自信、增加機會，完全是與他人無關的個人選擇。然而事實上，整型卻深深地影響著整個社會的價值觀。|jìn nián lái， rén men yuè lái yuè zhòng shì wài biǎo， zhěng xíng yǒu nián qīng huà de qū shì， shèn zhì chū xiàn le 「yán zhí」 zhè yàng de cí。 zàn chéng de rén rèn wèi， zhěng xíng kě yǐ dài lái zì xìn、 zēng jiā jī huì， wán quán shì yǔ tā rén wú guān de gè rén xuǎn zé。 rán ér shì shí shàng， zhěng xíng què shēn shēn dì yǐng xiǎng zhù zhěng gè shè huì de jià zhí guān。|Những năm gần đây người ta ngày càng coi trọng ngoại hình, phẫu thuật thẩm mỹ có xu hướng trẻ hóa, thậm chí xuất hiện từ "nhan giá trị". Người tán thành cho rằng phẫu thuật mang lại tự tin, thêm cơ hội, hoàn toàn là lựa chọn cá nhân không liên quan người khác. Nhưng thực tế nó ảnh hưởng sâu sắc đến giá trị quan của cả xã hội.
文章|整型真能讓人更美、更有自信嗎？並不盡然。許多想要整型的年輕人拿著明星的照片，要求醫生整出一樣的高鼻子、大眼睛，這是媒體洗腦的結果。不少亞洲人認為白皮膚、纖腰、豐胸、長腿、高挺的鼻子、水汪汪的大眼才是美。記得媒體報導了某場的選美比賽，三十四位參賽者幾乎都長得一樣！那是他們原來的樣子嗎？很多人原本就長得不差，只因為在意外界的眼光而不斷整型，這不是和「整型可以帶來自信」相互矛盾嗎？|zhěng xíng zhēn néng ràng rén gèng měi、 gèng yǒu zì xìn ma？ bìng bù jǐn rán。 xǔ duō xiǎng yào zhěng xíng de nián qīng rén ná zhù míng xīng de zhào piān， yāo qiú yī shēng zhěng chū yí yàng de gāo bí zi、 dà yǎn jīng， zhè shì méi tǐ xǐ nǎo de jié guǒ。 bù shǎo yà zhōu rén rèn wèi bái pí fū、 xiān yāo、 fēng xiōng、 zhǎng tuǐ、 gāo tǐng de bí zi、 shuǐ wāng wāng de dà yǎn cái shì měi。 jì dé méi tǐ bào dǎo le mǒu chǎng de xuǎn měi bǐ sài， sān shí sì wèi cān sài zhě jǐ hū dōu zhǎng dé yí yàng！ nà shì tā men yuán lái de yàng zi ma？ hěn duō rén yuán běn jiù zhǎng dé bú chà， zhǐ yīn wèi zài yì wài jiè de yǎn guāng ér bú duàn zhěng xíng， zhè bú shì hé 「zhěng xíng kě yǐ dài lái zì xìn」 xiāng hù máo dùn ma？|Phẫu thuật thật sự giúp người ta đẹp hơn, tự tin hơn sao? Chưa hẳn. Nhiều bạn trẻ cầm ảnh minh tinh yêu cầu bác sĩ chỉnh ra mũi cao mắt to như vậy, đó là kết quả của sự tẩy não truyền thông. Không ít người châu Á cho rằng da trắng, eo thon, ngực đầy, chân dài, mũi thẳng, mắt to long lanh mới là đẹp. Nhớ truyền thông đưa tin một cuộc thi sắc đẹp, 34 thí sinh gần như giống hệt nhau! Đó là dáng vẻ vốn có sao? Nhiều người vốn không xấu, chỉ vì để ý ánh mắt bên ngoài mà liên tục chỉnh sửa, chẳng phải mâu thuẫn với "phẫu thuật mang lại tự tin"?
文章|外貌無法為我們帶來美滿的感情、順利的職涯，只有內在才可以。由於越來越多的人認為現在社會「以貌取人」，因此不計一切要讓自己看起來更英俊、漂亮，好讓自己獲得更多青睞或機會。然而，一項研究指出，男女在選擇對象的時候，友善和智力比外表更重要。同樣地，職場上需要的能力，例如團隊合作、領導能力、溝通能力等，都不是整型能帶來的。把時間和金錢投資在這些內在能力上，才是更重要的。|wài mào wú fǎ wèi wǒ men dài lái měi mǎn de gǎn qíng、 shùn lì de zhí yá， zhǐ yǒu nèi zài cái kě yǐ。 yóu yú yuè lái yuè duō de rén rèn wèi xiàn zài shè huì 「yǐ mào qǔ rén」， yīn cǐ bú jì yí qiè yào ràng zì jǐ kàn qǐ lái gèng yīng jùn、 piào liàng， hǎo ràng zì jǐ huò dé gèng duō qīng lài huò jī huì。 rán ér， yí xiàng yán jiū zhǐ chū， nán nǚ zài xuǎn zé duì xiàng de shí hòu， yǒu shàn hé zhì lì bǐ wài biǎo gèng zhòng yào。 tóng yàng dì， zhí chǎng shàng xū yào de néng lì， lì rú tuán duì hé zuò、 lǐng dǎo néng lì、 gōu tōng néng lì děng， dōu bú shì zhěng xíng néng dài lái de。 bǎ shí jiān hé jīn qián tóu zī zài zhè xiē nèi zài néng lì shàng， cái shì gèng zhòng yào de。|Ngoại hình không mang lại tình cảm mỹ mãn, sự nghiệp thuận lợi, chỉ nội tâm mới làm được. Vì ngày càng nhiều người cho rằng xã hội nay "xem mặt mà bắt hình dong" nên bất chấp tất cả làm mình trông điển trai xinh đẹp hơn để được ưu ái và nhiều cơ hội. Tuy nhiên một nghiên cứu cho thấy khi chọn đối tượng, nam nữ coi trọng sự thân thiện và trí tuệ hơn ngoại hình. Tương tự, năng lực nơi làm việc như hợp tác nhóm, lãnh đạo, giao tiếp đều không phải phẫu thuật mang lại. Đầu tư thời gian, tiền bạc vào các năng lực nội tại này mới quan trọng hơn.
文章|整型畢竟是醫療行為，儘管技術日漸進步，但是媒體仍常報導整型失敗的例子：有的人整型後胸部大小不一、鼻子歪斜、臉部變形，甚至有人在手術中因失血過多而死。更有不少人整型後飽受各種後遺症、副作用之苦。這些問題都證明，無論醫療科技多麼進步，整型手術還是有一定的風險，對生理和心理都會帶來巨大衝擊，並不值得拿自己的生命來冒險。|zhěng xíng bì jìng shì yī liáo xíng wèi， jǐn guǎn jì shù rì jiàn jìn bù， dàn shì méi tǐ réng cháng bào dǎo zhěng xíng shī bài de lì zi： yǒu de rén zhěng xíng hòu xiōng bù dà xiǎo bù yī、 bí zi wāi xié、 liǎn bù biàn xíng， shèn zhì yǒu rén zài shǒu shù zhōng yīn shī xuè guò duō ér sǐ。 gèng yǒu bù shǎo rén zhěng xíng hòu bǎo shòu gè zhǒng hòu yí zhèng、 fù zuò yòng zhī kǔ。 zhè xiē wèn tí dōu zhèng míng， wú lùn yī liáo kē jì duō me jìn bù， zhěng xíng shǒu shù hái shì yǒu yí dìng de fēng xiǎn， duì shēng lǐ hé xīn lǐ dōu huì dài lái jù dà chōng jī， bìng bù zhí dé ná zì jǐ de shēng mìng lái mào xiǎn。|Dù sao phẫu thuật thẩm mỹ là hành vi y tế, tuy kỹ thuật ngày càng tiến bộ nhưng truyền thông vẫn thường đưa tin thất bại: có người sau phẫu thuật ngực to nhỏ không đều, mũi lệch, mặt biến dạng, thậm chí có người chết vì mất máu quá nhiều khi mổ. Nhiều người còn chịu đủ loại di chứng, tác dụng phụ. Những vấn đề này chứng tỏ dù công nghệ y tế tiến bộ thế nào phẫu thuật vẫn có rủi ro nhất định, gây tác động lớn lên thể chất lẫn tinh thần, không đáng đem tính mạng ra mạo hiểm.
文章|整型原來是希望幫助那些遭受意外、影響健康的人重建外觀、恢復身體功能及信心，如今卻成為追求自信和獲得機會的捷徑。雖然這是個人的選擇，但當整型從「需要」變成「想要」，進而形成一股風氣時，我們就不得不更謹慎地看待它所帶來的影響。|zhěng xíng yuán lái shì xī wàng bāng zhù nà xiē zāo shòu yì wài、 yǐng xiǎng jiàn kāng de rén chóng jiàn wài guān、 huī fù shēn tǐ gōng néng jí xìn xīn， rú jīn què chéng wèi zhuī qiú zì xìn hé huò dé jī huì de jié jìng。 suī rán zhè shì gè rén de xuǎn zé， dàn dāng zhěng xíng cóng 「xū yào」 biàn chéng 「xiǎng yào」， jìn ér xíng chéng yì gǔ fēng qì shí， wǒ men jiù bù dé bú gèng jǐn shèn dì kàn dài tā suǒ dài lái de yǐng xiǎng。|Phẫu thuật thẩm mỹ vốn nhằm giúp người gặp tai nạn, ảnh hưởng sức khỏe tái tạo ngoại hình, phục hồi chức năng và sự tự tin, nay lại thành đường tắt tìm tự tin và cơ hội. Dù là lựa chọn cá nhân, khi nó từ "cần" thành "muốn" rồi thành một trào lưu thì ta không thể không cẩn trọng hơn khi nhìn nhận ảnh hưởng của nó.`}},{n:4,zh:"傳統與現代",vi:"Truyền thống và hiện đại",v:`刪減|shānjiǎn|cắt giảm|V
鬥牛|dòuniú|đấu bò|N
街頭|jiētóu|đường phố|N
舉|jǔ|giơ, cử|V
示威|shìwēi|biểu tình|Vi
主張|zhǔzhāng|chủ trương|N/V
保存|bǎocún|bảo tồn|V
廢止|fèizhǐ|bãi bỏ|V
引發|yǐnfā|gây ra|V
正反|zhèngfǎn|tán thành và phản đối|N
兩方|liǎngfāng|hai bên|N
激烈|jīliè|gay gắt|Vs
具有|jùyǒu|có|Vst
祭品|jìpǐn|đồ cúng tế|N
全民|quánmín|toàn dân|N
座|zuò|tòa, ngôi (lượng từ)|M
鬥牛場|dòuniúchǎng|đấu trường bò|N
馬德里|mǎdélǐ|Madrid|Name
至今|zhìjīn|đến nay|Adv
鬥牛士|dòuniúshì|đấu sĩ bò|N
華麗|huálì|lộng lẫy|Vs
服飾|fúshì|trang phục|N
一面|yímiàn|một mặt… (vừa… vừa…)|Adv
披風|pīfēng|áo choàng|N
激怒|jīnù|chọc giận|V
公牛|gōngniú|bò đực|N
優雅|yōuyǎ|tao nhã|Vs
姿勢|zīshì|tư thế|N
結合|jiéhé|kết hợp|N/V
過人|guòrén|hơn người|Vs
熟練|shúliàn|thành thạo|Vs
崇拜|chóngbài|sùng bái|Vst
旺季|wàngjì|mùa cao điểm|N
遊客|yóukè|du khách|N
前往|qiánwǎng|đi đến|V
觀賞|guānshǎng|thưởng thức, xem|V
奔牛節|bēnniújié|lễ hội chạy bò|Name
重頭戲|zhòngtóuxì|tiết mục chính|N
狂奔|kuángbēn|chạy điên cuồng|Vi
歐元|ōuyuán|euro|N
必要|bìyào|cần thiết|N
獨特|dútè|độc đáo|Vs
魅力|mèilì|sức hấp dẫn|N
戲劇|xìjù|kịch|N
無數|wúshù|vô số|Vs-attr
靈感|línggǎn|cảm hứng|N
諾貝爾|nuòbèiěr|Nobel|Name
得主|dézhǔ|người đoạt giải|N
作家|zuòjiā|nhà văn|N
海明威|hǎimíngwēi|Hemingway|Name
觀看|guānkàn|xem|V
小說|xiǎoshuō|tiểu thuyết|N
舉世聞名|jǔshìwénmíng|nổi tiếng thế giới|Idiom
推廣|tuīguǎng|quảng bá|V
遺產|yíchǎn|di sản|N
由來已久|yóuláiyǐjiǔ|có từ lâu đời|Idiom`,d:{l:`文章|鬥牛是西班牙古老的傳統，有千年歷史。最早是把牛當做拜神的祭品，十九世紀時成為西班牙的全民運動。自1743年第一座鬥牛場在馬德里出現至今，西班牙全國鬥牛場已超過400座。|dòu niú shì xī bān yá gǔ lǎo de chuán tǒng， yǒu qiān nián lì shǐ。 zuì zǎo shì bǎ niú dāng zuò bài shén de jì pǐn， shí jiǔ shì jì shí chéng wèi xī bān yá de quán mín yùn dòng。 zì 1743 nián dì yī zuò dòu niú chǎng zài mǎ dé lǐ chū xiàn zhì jīn， xī bān yá quán guó dòu niú chǎng yǐ chāo guò 400 zuò。|Đấu bò là truyền thống cổ xưa của Tây Ban Nha, có lịch sử nghìn năm. Ban đầu bò là đồ cúng thần, thế kỷ 19 trở thành môn thể thao toàn dân. Từ năm 1743 đấu trường bò đầu tiên xuất hiện ở Madrid đến nay, cả nước có hơn 400 đấu trường.
文章|鬥牛士穿著十六世紀華麗的傳統服飾在鬥牛場中表演，一面利用手中的紅色披風激怒公牛，一面隨著音樂以優雅的姿勢避開攻擊，可說是文化與藝術的完美結合。鬥牛士必須具備過人的勇氣、熟練的技術和冒險的精神，也是年輕人崇拜與學習的對象。鬥牛不但代表西班牙的傳統精神，更是重要的歷史文化。|dòu niú shì chuān zhù shí liù shì jì huá lì de chuán tǒng fú shì zài dòu niú chǎng zhōng biǎo yǎn， yí miàn lì yòng shǒu zhōng de hóng sè pī fēng jī nù gōng niú， yí miàn suí zhù yīn lè yǐ yōu yǎ de zī shì bì kāi gōng jī， kě shuō shì wén huà yǔ yì shù de wán měi jié hé。 dòu niú shì bì xū jù bèi guò rén de yǒng qì、 shú liàn de jì shù hé mào xiǎn de jīng shén， yě shì nián qīng rén chóng bài yǔ xué xí de duì xiàng。 dòu niú bú dàn dài biǎo xī bān yá de chuán tǒng jīng shén， gèng shì zhòng yào de lì shǐ wén huà。|Đấu sĩ mặc trang phục lộng lẫy thế kỷ 16 biểu diễn trong đấu trường, một mặt dùng áo choàng đỏ trêu bò, một mặt theo nhạc né đòn bằng tư thế tao nhã, có thể nói là sự kết hợp hoàn hảo giữa văn hóa và nghệ thuật. Đấu sĩ cần dũng khí hơn người, kỹ thuật thành thạo và tinh thần mạo hiểm, cũng là thần tượng giới trẻ. Đấu bò không chỉ đại diện tinh thần truyền thống mà còn là văn hóa lịch sử quan trọng.
文章|旅遊業是西班牙最重要的收入來源，每年3月到9月的鬥牛旺季，總是吸引來自世界各地的遊客前往觀賞，其中奔牛節也是西班牙傳統文化的重頭戲，當地民眾和許多年輕的外國遊客，都在此享受與牛狂奔的刺激，以及西班牙人的熱情。鬥牛的相關活動每年都為西班牙政府帶來2.8億歐元的財政收入，提供20萬人就業機會。一旦廢止，對西班牙來說，將會是一場經濟災難。因此，這項傳統活動絕對有保存的必要。|lǚ yóu yè shì xī bān yá zuì zhòng yào de shōu rù lái yuán， měi nián 3 yuè dào 9 yuè de dòu niú wàng jì， zǒng shì xī yǐn lái zì shì jiè gè dì de yóu kè qián wǎng guān shǎng， qí zhōng bēn niú jié yě shì xī bān yá chuán tǒng wén huà de zhòng tóu xì， dāng dì mín zhòng hé xǔ duō nián qīng de wài guó yóu kè， dōu zài cǐ xiǎng shòu yǔ niú kuáng bēn de cì jī， yǐ jí xī bān yá rén de rè qíng。 dòu niú de xiāng guān huó dòng měi nián dōu wèi xī bān yá zhèng fǔ dài lái 2.8 yì ōu yuán de cái zhèng shōu rù， tí gōng 20 wàn rén jiù yè jī huì。 yí dàn fèi zhǐ， duì xī bān yá lái shuō， jiāng huì shì yì chǎng jīng jì zāi nán。 yīn cǐ， zhè xiàng chuán tǒng huó dòng jué duì yǒu bǎo cún de bì yào。|Du lịch là nguồn thu quan trọng nhất của Tây Ban Nha, mùa cao điểm đấu bò từ tháng 3 đến 9 luôn thu hút du khách khắp thế giới, trong đó lễ hội chạy bò là tiết mục chính của văn hóa truyền thống, dân địa phương và nhiều du khách trẻ nước ngoài đến đây tận hưởng cảm giác chạy cùng bò và sự nhiệt tình của người Tây Ban Nha. Các hoạt động đấu bò mỗi năm mang lại cho chính phủ 280 triệu euro thu ngân sách, tạo việc làm cho 200.000 người. Một khi bãi bỏ sẽ là thảm họa kinh tế. Vì vậy truyền thống này tuyệt đối cần bảo tồn.
文章|鬥牛傳統之所以保留到現在，正是因為它代表了西班牙獨特的文化魅力和民族精神，也為戲劇、音樂、繪畫提供了無數靈感。例如諾貝爾文學獎得主——美國作家海明威在西班牙觀看奔牛節活動後寫了《太陽照常升起》這本小說，使奔牛節成為舉世聞名的節日。2013年，西班牙政府認為鬥牛不但不應該廢止，國家反而有責任保存並繼續推廣，於是將鬥牛列為國家保護的文化遺產，希望大家都能尊重這個由來已久的傳統。|dòu niú chuán tǒng zhī suǒ yǐ bǎo liú dào xiàn zài， zhèng shì yīn wèi tā dài biǎo le xī bān yá dú tè de wén huà mèi lì hé mín zú jīng shén， yě wèi xì jù、 yīn lè、 huì huà tí gōng le wú shù líng gǎn。 lì rú nuò bèi ěr wén xué jiǎng dé zhǔ —— měi guó zuò jiā hǎi míng wēi zài xī bān yá guān kàn bēn niú jié huó dòng hòu xiě le 《 tài yáng zhào cháng shēng qǐ 》 zhè běn xiǎo shuō， shǐ bēn niú jié chéng wèi jǔ shì wén míng de jié rì。2013 nián， xī bān yá zhèng fǔ rèn wèi dòu niú bú dàn bù yīng gāi fèi zhǐ， guó jiā fǎn ér yǒu zé rèn bǎo cún bìng jì xù tuī guǎng， yú shì jiāng dòu niú liè wèi guó jiā bǎo hù de wén huà yí chǎn， xī wàng dà jiā dōu néng zūn zhòng zhè gè yóu lái yǐ jiǔ de chuán tǒng。|Truyền thống đấu bò còn đến nay chính vì nó đại diện sức hấp dẫn văn hóa độc đáo và tinh thần dân tộc Tây Ban Nha, cũng mang lại vô số cảm hứng cho kịch, nhạc, hội họa. Ví dụ nhà văn Mỹ Hemingway, người đoạt giải Nobel Văn học, sau khi xem lễ hội chạy bò ở Tây Ban Nha đã viết tiểu thuyết "Mặt trời vẫn mọc", khiến lễ hội nổi tiếng thế giới. Năm 2013 chính phủ Tây Ban Nha cho rằng đấu bò không những không nên bãi bỏ mà nhà nước còn có trách nhiệm bảo tồn và tiếp tục quảng bá, nên xếp đấu bò vào di sản văn hóa được bảo vệ, mong mọi người tôn trọng truyền thống lâu đời này.`}},{n:5,zh:"代理孕母，帶來幸福？",vi:"Mang thai hộ có mang lại hạnh phúc?",v:`代理孕母|dàilǐyùnmǔ|mẹ mang thai hộ|N
案例|ànlì|vụ việc, trường hợp|N
名|míng|người (lượng từ trang trọng)|M
同志|tóngzhì|người đồng tính|N
心願|xīnyuàn|tâm nguyện|N
自願|zìyuàn|tự nguyện|Vaux
對|duì|đôi, cặp|M
委託|wěituō|ủy thác|V/N
龍鳳胎|lóngfèngtāi|cặp song sinh trai gái|N
遺棄|yíqì|bỏ rơi|V
缺陷|quēxiàn|khuyết tật|N
任|rèn|nhiệm kỳ, đời (vợ/chồng)|M
丈夫|zhàngfū|chồng|N
懷孕|huáiyùn|mang thai|Vp-sep
毛遂自薦|máosuízìjiàn|tự đề cử|Idiom
日新月異|rìxīnyuèyì|ngày đổi tháng khác|Idiom
倫理|lúnlǐ|đạo đức học|N
整合|zhěnghé|tích hợp|V
合法化|héfǎhuà|hợp pháp hóa|Vi
需求|xūqiú|nhu cầu|N
一線希望|yíxiànxīwàng|tia hy vọng|Idiom
惡夢|èmèng|ác mộng|N
看似|kànshì|trông có vẻ|Adv
費盡|fèijǐn|tốn hết|Vst
千辛萬苦|qiānxīnwànkǔ|thiên tân vạn khổ|Idiom
因素|yīnsù|yếu tố|N
皆|jiē|đều (trang trọng)|Adv
承受|chéngshòu|chịu đựng|V
不得已|bùdéyǐ|bất đắc dĩ|Vs
代孕|dàiyùn|mang thai hộ|Vi
婚外情|hūnwàiqíng|ngoại tình|N
破碎|pòsuì|tan vỡ|Vs
悲劇|bēijù|bi kịch|N
雙方|shuāngfāng|hai bên|N
渴望|kěwàng|khao khát|N/Vst
供需|gōngxū|cung cầu|N
利人利己|lìrénlìjǐ|lợi người lợi mình|Idiom
雙贏|shuāngyíng|đôi bên cùng thắng|N
反觀|fǎnguān|nhìn lại|Vst
連續|liánxù|liên tiếp|Adv
排名|páimíng|xếp hạng|Vi
倒數|dàoshù|đếm ngược, từ dưới lên|Adv
始終|shǐzhōng|luôn luôn, từ đầu đến cuối|Adv
忽視|hūshì|coi nhẹ|V
夫妻|fūqī|vợ chồng|N
協助|xiézhù|hỗ trợ|V
長輩|zhǎngbèi|bậc trưởng bối|N
忍受|rěnshòu|chịu đựng|Vst
如願|rúyuàn|như ý nguyện|Vs-sep
自主權|zìzhǔquán|quyền tự quyết|N`,d:{l:`新聞|現代科技日新月異，代理孕母成了熱門話題。在倫理、法律、醫學尚未整合完全的今天，代理孕母合法化對需求者來說，是一線希望？還是一場惡夢？|xiàn dài kē jì rì xīn yuè yì， dài lǐ yùn mǔ chéng le rè mén huà tí。 zài lún lǐ、 fǎ lǜ、 yī xué shàng wèi zhěng hé wán quán de jīn tiān， dài lǐ yùn mǔ hé fǎ huà duì xū qiú zhě lái shuō， shì yí xiàn xī wàng？ hái shì yì chǎng è mèng？|Công nghệ hiện đại thay đổi từng ngày, mang thai hộ thành chủ đề nóng. Hôm nay khi đạo đức, luật pháp, y học chưa hợp nhất, hợp pháp hóa mang thai hộ với người có nhu cầu là tia hy vọng hay một cơn ác mộng?
新聞|英國一名年輕單身男同志一直想擁有自己的孩子，母親為了完成他的心願，自願當代理孕母，成功生下「他們的」兒子，成為英國第一個透過代理孕母生下孩子的單身男子。|yīng guó yì míng nián qīng dān shēn nán tóng zhì yì zhí xiǎng yōng yǒu zì jǐ de hái zi， mǔ qīn wèi le wán chéng tā de xīn yuàn， zì yuàn dāng dài lǐ yùn mǔ， chéng gōng shēng xià 「tā men de」 ér zi， chéng wèi yīng guó dì yī gè tòu guò dài lǐ yùn mǔ shēng xià hái zi de dān shēn nán zi。|Một nam đồng tính độc thân trẻ ở Anh luôn muốn có con, mẹ anh để thực hiện tâm nguyện đã tự nguyện làm mẹ mang thai hộ, sinh thành công đứa con trai "của họ", anh thành người đàn ông độc thân đầu tiên ở Anh có con nhờ mang thai hộ.
新聞|一對澳洲夫婦委託代理孕母生下一對龍鳳胎，卻只帶走女嬰，遺棄了身體有缺陷的男嬰。|yí duì ào zhōu fū fù wěi tuō dài lǐ yùn mǔ shēng xià yí duì lóng fèng tāi， què zhǐ dài zǒu nǚ yīng， yí qì le shēn tǐ yǒu quē xiàn de nán yīng。|Một cặp vợ chồng Úc nhờ mẹ mang thai hộ sinh cặp song sinh trai gái, nhưng chỉ đem bé gái đi, bỏ rơi bé trai bị khuyết tật cơ thể.
新聞|一位已有四名子女的三十七歲美國婦女，想要為第二任丈夫生小孩，因無法再懷孕，她十八歲的女兒毛遂自薦，表示願意擔任代理孕母。但心理醫生表示，女兒若生下孩子，將對所有家人造成嚴重的心理影響。|yí wèi yǐ yǒu sì míng zǐ nǚ de sān shí qī suì měi guó fù nǚ， xiǎng yào wèi dì èr rèn zhàng fū shēng xiǎo hái， yīn wú fǎ zài huái yùn， tā shí bā suì de nǚ ér máo suí zì jiàn， biǎo shì yuàn yì dān rèn dài lǐ yùn mǔ。 dàn xīn lǐ yī shēng biǎo shì， nǚ ér ruò shēng xià hái zi， jiāng duì suǒ yǒu jiā rén zào chéng yán zhòng de xīn lǐ yǐng xiǎng。|Một phụ nữ Mỹ 37 tuổi đã có bốn con muốn sinh con cho chồng thứ hai nhưng không thể mang thai nữa, con gái 18 tuổi tự đề cử làm mẹ mang thai hộ. Nhưng bác sĩ tâm lý nói nếu con gái sinh con sẽ gây ảnh hưởng tâm lý nghiêm trọng cho cả gia đình.
文章|擁有自己的孩子，看似簡單的願望，卻讓許多人費盡千辛萬苦仍無法實現。|yōng yǒu zì jǐ de hái zi， kàn shì jiǎn dān de yuàn wàng， què ràng xǔ duō rén fèi jǐn qiān xīn wàn kǔ réng wú fǎ shí xiàn。|Có con của chính mình, tưởng là điều ước đơn giản nhưng khiến nhiều người dốc hết gian khổ vẫn không thực hiện được.
文章|現代人因為壓力或者身體等因素，不能生育的情形越來越普遍。自七〇年代以來，歐美各國不斷有人請代理孕母代替自己懷孕生子，以實現生育下一代的願望。生兒育女是人類最基本的需求，尤其是東方社會的婦女，如果不能為家庭傳宗接代，通常身心皆承受外界難以想像的壓力。甚至有些婦女因無法懷孕，不得已只好請姊妹、親戚代孕，沒想到孕母卻和先生發生婚外情，結果造成家庭破碎。為了不讓這樣的悲劇發生，合法代孕成了唯一的希望。|xiàn dài rén yīn wèi yā lì huò zhě shēn tǐ děng yīn sù， bù néng shēng yù de qíng xíng yuè lái yuè pǔ biàn。 zì qī líng nián dài yǐ lái， ōu měi gè guó bú duàn yǒu rén qǐng dài lǐ yùn mǔ dài tì zì jǐ huái yùn shēng zi， yǐ shí xiàn shēng yù xià yí dài de yuàn wàng。 shēng ér yù nǚ shì rén lèi zuì jī běn de xū qiú， yóu qí shì dōng fāng shè huì de fù nǚ， rú guǒ bù néng wèi jiā tíng chuán zōng jiē dài， tōng cháng shēn xīn jiē chéng shòu wài jiè nán yǐ xiǎng xiàng de yā lì。 shèn zhì yǒu xiē fù nǚ yīn wú fǎ huái yùn， bù dé yǐ zhǐ hǎo qǐng zǐ mèi、 qīn qī dài yùn， méi xiǎng dào yùn mǔ què hé xiān shēng fā shēng hūn wài qíng， jié guǒ zào chéng jiā tíng pò suì。 wèi le bú ràng zhè yàng de bēi jù fā shēng， hé fǎ dài yùn chéng le wéi yī de xī wàng。|Do áp lực hoặc yếu tố cơ thể, tình trạng không thể sinh đẻ ngày càng phổ biến. Từ thập niên 70, ở các nước Âu Mỹ liên tục có người nhờ mẹ mang thai hộ để thực hiện mong muốn có thế hệ sau. Sinh con đẻ cái là nhu cầu cơ bản nhất của con người, nhất là phụ nữ xã hội phương Đông, nếu không nối dõi cho gia đình thường phải chịu áp lực cả thể xác lẫn tinh thần mà bên ngoài khó tưởng tượng. Thậm chí có phụ nữ vì không thể mang thai đành nhờ chị em, họ hàng, không ngờ người mang thai hộ lại ngoại tình với chồng khiến gia đình tan vỡ. Để bi kịch này không xảy ra, mang thai hộ hợp pháp thành hy vọng duy nhất.
文章|目前全球已有荷蘭等十個以上的國家將代理孕母合法化。透過合法的代孕機構，雙方都能得到應有的保障，滿足了需求者擁有自己孩子的渴望，代孕者也有機會改善生活。這是市場供需的問題，利人利己，正是雙贏的政策。|mù qián quán qiú yǐ yǒu hé lán děng shí gè yǐ shàng de guó jiā jiāng dài lǐ yùn mǔ hé fǎ huà。 tòu guò hé fǎ de dài yùn jī gòu， shuāng fāng dōu néng dé dào yīng yǒu de bǎo zhàng， mǎn zú le xū qiú zhě yōng yǒu zì jǐ hái zi de kě wàng， dài yùn zhě yě yǒu jī huì gǎi shàn shēng huó。 zhè shì shì chǎng gōng xū de wèn tí， lì rén lì jǐ， zhèng shì shuāng yíng de zhèng cè。|Hiện toàn cầu có hơn mười nước như Hà Lan hợp pháp hóa mang thai hộ. Qua cơ quan mang thai hộ hợp pháp, hai bên đều được bảo đảm xứng đáng, thỏa khát khao có con của người cần, người mang thai hộ cũng có cơ hội cải thiện cuộc sống. Đây là vấn đề cung cầu thị trường, lợi người lợi mình, chính là chính sách đôi bên cùng thắng.
文章|反觀台灣，生育率連續多年排名全球倒數第一，政府始終只鼓勵能夠生育的婦女，提供各項補助措施，卻忽視有代孕需求的夫妻，這根本就是一種歧視。若想提高生育率，政府應該立法協助，而非全面禁止。|fǎn guān tái wān， shēng yù lǜ lián xù duō nián pái míng quán qiú dào shù dì yī， zhèng fǔ shǐ zhōng zhǐ gǔ lì néng gòu shēng yù de fù nǚ， tí gōng gè xiàng bǔ zhù cuò shī， què hū shì yǒu dài yùn xū qiú de fū qī， zhè gēn běn jiù shì yì zhǒng qí shì。 ruò xiǎng tí gāo shēng yù lǜ， zhèng fǔ yīng gāi lì fǎ xié zhù， ér fēi quán miàn jìn zhǐ。|Nhìn lại Đài Loan, tỷ lệ sinh nhiều năm liền xếp áp chót thế giới, chính phủ luôn chỉ khuyến khích phụ nữ sinh được, đưa nhiều biện pháp trợ cấp mà coi nhẹ các cặp vợ chồng có nhu cầu mang thai hộ, đó thực chất là một sự kỳ thị. Muốn nâng tỷ lệ sinh, chính phủ nên lập pháp hỗ trợ chứ không cấm hoàn toàn.
文章|在長輩及家人的期待下，許多不孕夫妻為了擁有自己的孩子，努力嘗試各種方法、忍受一般人想像不到的痛苦之後，還是無法如願。孩子對這些家庭深具意義，讓代理孕母合法化，既是尊重夫妻對生育的自主權，也可以避免出國找代孕的可能風險。政府實在應該給不孕者、代孕者多一個選擇的機會。|zài zhǎng bèi jí jiā rén de qī dài xià， xǔ duō bú yùn fū qī wèi le yōng yǒu zì jǐ de hái zi， nǔ lì cháng shì gè zhǒng fāng fǎ、 rěn shòu yì bān rén xiǎng xiàng bú dào de tòng kǔ zhī hòu， hái shì wú fǎ rú yuàn。 hái zi duì zhè xiē jiā tíng shēn jù yì yì， ràng dài lǐ yùn mǔ hé fǎ huà， jì shì zūn zhòng fū qī duì shēng yù de zì zhǔ quán， yě kě yǐ bì miǎn chū guó zhǎo dài yùn de kě néng fēng xiǎn。 zhèng fǔ shí zài yīng gāi gěi bú yùn zhě、 dài yùn zhě duō yí gè xuǎn zé de jī huì。|Dưới kỳ vọng của bề trên và gia đình, nhiều cặp vô sinh để có con thử đủ cách, chịu nỗi đau người thường không tưởng tượng nổi mà vẫn không toại nguyện. Đứa con có ý nghĩa sâu sắc với các gia đình này, hợp pháp hóa mang thai hộ vừa tôn trọng quyền tự quyết sinh đẻ của vợ chồng, vừa tránh rủi ro ra nước ngoài tìm mang thai hộ. Chính phủ thực sự nên cho người vô sinh và người mang thai hộ thêm một cơ hội lựa chọn.`}},{n:6,zh:"死刑的存廢",vi:"Giữ hay bỏ án tử hình",v:`死刑|sǐxíng|án tử hình|N
存廢|cúnfèi|giữ hay bỏ|N
爭議|zhēngyì|tranh cãi|N
僵局|jiāngjú|bế tắc|N
各自|gèzì|mỗi bên|Adv
嚇阻|xiàzǔ|răn đe|V
隔離|gélí|cách ly|V
罪犯|zuìfàn|tội phạm|N
隨機|suíjī|ngẫu nhiên|Adv
殺害|shāhài|sát hại|V
黑心|hēixīn|vô lương tâm|Vs-attr
案件|ànjiàn|vụ án|N
法官|fǎguān|thẩm phán|N
判|pàn|xử, tuyên án|V
有期徒刑|yǒuqītúxíng|tù có thời hạn|Phrase
無期徒刑|wúqītúxíng|tù chung thân|Phrase
死者|sǐzhě|người chết|N
交代|jiāodài|lời giải thích thỏa đáng|N
彌補|míbǔ|bù đắp|V
家屬|jiāshǔ|thân nhân|N
或者|huòzhě|hoặc|Conj
犯人|fànrén|phạm nhân|N
出獄|chūyù|ra tù|Vi
把|bǎ|cây, chiếc (lượng từ vật có cán)|M
尺|chǐ|thước|N
現行|xiànxíng|hiện hành|Vs-attr
假釋|jiǎshì|tạm tha|Vi
永久|yǒngjiǔ|vĩnh viễn|Adv
害怕|hàipà|sợ|Vs
報復|bàofù|trả thù|V/N
納稅|nàshuì|nộp thuế|V-sep
懲罰|chéngfá|trừng phạt|N/V
犯罪|fànzuì|phạm tội|V-sep
罰單|fádān|giấy phạt|N
闖紅燈|chuǎnghóngdēng|vượt đèn đỏ|Phrase
開|kāi|lập, viết (vé phạt)|V
同理|tónglǐ|tương tự|Adv
換句話說|huànjùhuàshuō|nói cách khác|Phrase
維持|wéichí|duy trì|V
相較於|xiāngjiàoyú|so với|Phrase
人權|rénquán|nhân quyền|N
廢除|fèichú|bãi bỏ|V
被害人|bèihàirén|nạn nhân|N
孤兒|gūér|cô nhi|N
不然|bùrán|nếu không thì|Conj
毀|huǐ|phá hủy|V
氣憤|qìfèn|phẫn nộ|Vs
恨|hèn|hận|Vst
報仇|bàochóu|báo thù|V-sep
便宜|piányi|tha nhẹ|Vst
置身事外|zhìshēnshìwài|đứng ngoài cuộc|Idiom
放下|fàngxià|buông bỏ|V
凶手|xiōngshǒu|hung thủ|N
感同身受|gǎntóngshēnshòu|đồng cảm|Idiom
生前|shēngqián|lúc còn sống|N
恐懼|kǒngjù|nỗi sợ|N
心痛|xīntòng|đau lòng|Phrase
天平|tiānpíng|cán cân|N
衡量|héngliáng|cân nhắc|V
坦白|tǎnbái|thẳng thắn|Vs
撫慰|fǔwèi|an ủi|V
剛剛好|gānggānghǎo|vừa đủ|Phrase`,d:{l:`文章|死刑的存廢始終爭議不斷，廢與不廢很難在短時間內突破僵局。不管支持或反對死刑制度，人們都各自有其選擇的理由。|sǐ xíng de cún fèi shǐ zhōng zhēng yì bú duàn， fèi yǔ bú fèi hěn nán zài duǎn shí jiān nèi tū pò jiāng jú。 bù guǎn zhī chí huò fǎn duì sǐ xíng zhì dù， rén men dōu gè zì yǒu qí xuǎn zé de lǐ yóu。|Việc giữ hay bỏ án tử hình luôn tranh cãi không dứt, khó phá thế bế tắc trong thời gian ngắn. Dù ủng hộ hay phản đối chế độ này, ai cũng có lý do lựa chọn riêng.
文章|面對「隨機殺人」「為了領保險金殺害親人」「商人大賣黑心食品」……這類社會案件，如果你是法官會怎麼判呢？有期徒刑、無期徒刑還是死刑？判決的考量是為了給死者一個交代，以彌補家屬的痛苦，或者是為了符合社會大眾的期待，還是不讓犯人有機會出獄傷害別人呢？相信你的心中有著一把尺。|miàn duì 「suí jī shā rén」「wèi le lǐng bǎo xiǎn jīn shā hài qīn rén」「shāng rén dà mài hēi xīn shí pǐn」…… zhè lèi shè huì àn jiàn， rú guǒ nǐ shì fǎ guān huì zěn me pàn ne？ yǒu qī tú xíng、 wú qī tú xíng hái shì sǐ xíng？ pàn jué de kǎo liáng shì wèi le gěi sǐ zhě yí gè jiāo dài， yǐ mí bǔ jiā shǔ de tòng kǔ， huò zhě shì wèi le fú hé shè huì dà zhòng de qī dài， hái shì bú ràng fàn rén yǒu jī huì chū yù shāng hài bié rén ne？ xiāng xìn nǐ de xīn zhōng yǒu zhù yì bǎ chǐ。|Đối diện các vụ án như "giết người ngẫu nhiên", "giết người thân để lấy tiền bảo hiểm", "thương nhân bán thực phẩm bẩn vô lương tâm"…, nếu bạn là thẩm phán sẽ xử thế nào? Tù có thời hạn, chung thân hay tử hình? Phán quyết nhằm cho người chết lời giải thích, bù đắp nỗi đau thân nhân, đáp ứng kỳ vọng xã hội hay không để phạm nhân có cơ hội ra tù hại người? Tin rằng trong lòng bạn có một cây thước.
文章|站在社會大眾的立場，死刑有存在的必要。因為在現行制度下，即使被判無期徒刑的人也有假釋出獄的機會，只有死刑才可以將罪犯永久與社會隔離，被害家屬不用害怕遭到報復，一般大眾也可以安心過日子。若以判無期徒刑取代死刑，政府須付出的金錢數目非常大，甚至得提供醫療及養老，等於用納稅人的錢來養罪犯。|zhàn zài shè huì dà zhòng de lì chǎng， sǐ xíng yǒu cún zài de bì yào。 yīn wèi zài xiàn xíng zhì dù xià， jí shǐ bèi pàn wú qī tú xíng de rén yě yǒu jiǎ shì chū yù de jī huì， zhǐ yǒu sǐ xíng cái kě yǐ jiāng zuì fàn yǒng jiǔ yǔ shè huì gé lí， bèi hài jiā shǔ bú yòng hài pà zāo dào bào fù， yì bān dà zhòng yě kě yǐ ān xīn guò rì zi。 ruò yǐ pàn wú qī tú xíng qǔ dài sǐ xíng， zhèng fǔ xū fù chū de jīn qián shù mù fēi cháng dà， shèn zhì dé tí gōng yī liáo jí yǎng lǎo， děng yú yòng nà shuì rén de qián lái yǎng zuì fàn。|Đứng từ lập trường công chúng, án tử hình cần tồn tại. Vì theo chế độ hiện hành, ngay cả người bị chung thân cũng có cơ hội được tạm tha, chỉ tử hình mới cách ly tội phạm vĩnh viễn khỏi xã hội, thân nhân nạn nhân không sợ bị trả thù, dân chúng yên tâm sống. Nếu dùng chung thân thay tử hình, chính phủ phải chi khoản tiền rất lớn, thậm chí cung cấp y tế và dưỡng lão, tức dùng tiền người nộp thuế nuôi tội phạm.
文章|懲罰可以有效嚇阻犯罪。以交通罰單為例，知道闖紅燈會被開罰單，大部分的人會因此遵守規則。同理，如果知道犯了某些罪可能會被判死刑，多少會擔心嚴重的後果而不敢犯罪。換句話說，死刑仍能有效控制多數人的行為，具有維持社會秩序的價值。|chéng fá kě yǐ yǒu xiào xià zǔ fàn zuì。 yǐ jiāo tōng fá dān wèi lì， zhī dào chuǎng hóng dēng huì bèi kāi fá dān， dà bù fèn de rén huì yīn cǐ zūn shǒu guī zé。 tóng lǐ， rú guǒ zhī dào fàn le mǒu xiē zuì kě néng huì bèi pàn sǐ xíng， duō shǎo huì dān xīn yán zhòng de hòu guǒ ér bù gǎn fàn zuì。 huàn jù huà shuō， sǐ xíng réng néng yǒu xiào kòng zhì duō shù rén de xíng wèi， jù yǒu wéi chí shè huì zhì xù de jià zhí。|Trừng phạt có thể răn đe tội phạm hiệu quả. Lấy giấy phạt giao thông làm ví dụ, biết vượt đèn đỏ bị phạt, phần lớn người sẽ tuân thủ. Tương tự, biết phạm một số tội có thể bị tử hình thì ít nhiều lo hậu quả nghiêm trọng mà không dám phạm. Nói cách khác, tử hình vẫn kiểm soát hiệu quả hành vi đa số, có giá trị duy trì trật tự xã hội.
文章|相較於人權團體重視的是罪犯的生命，反對廢除死刑者看重的則是被害人的生命價值，認為應該給死者一個交代。更何況除非死者是孤兒，不然殺了一個人也等於毀了一個家庭。難怪許多被害人家屬氣憤地表示：「我們如何不恨？幸虧還有政府能為我們報仇，雖說以人道的方式執行死刑也還是太便宜他了！」|xiāng jiào yú rén quán tuán tǐ zhòng shì de shì zuì fàn de shēng mìng， fǎn duì fèi chú sǐ xíng zhě kàn zhòng de zé shì bèi hài rén de shēng mìng jià zhí， rèn wèi yīng gāi gěi sǐ zhě yí gè jiāo dài。 gèng hé kuàng chú fēi sǐ zhě shì gū ér， bù rán shā le yí gè rén yě děng yú huǐ le yí gè jiā tíng。 nán guài xǔ duō bèi hài rén jiā shǔ qì fèn dì biǎo shì：「wǒ men rú hé bú hèn？ xìng kuī hái yǒu zhèng fǔ néng wèi wǒ men bào chóu， suī shuō yǐ rén dào de fāng shì zhí xíng sǐ xíng yě hái shì tài pián yi tā le！」|So với việc các tổ chức nhân quyền coi trọng mạng sống tội phạm, người phản đối bãi bỏ tử hình coi trọng giá trị mạng sống nạn nhân, cho rằng phải cho người chết lời giải thích. Huống chi trừ khi người chết là cô nhi, không thì giết một người cũng như hủy một gia đình. Hèn gì nhiều thân nhân nạn nhân phẫn nộ nói: "Sao chúng tôi không hận? May còn chính phủ báo thù giúp, dù thi hành tử hình nhân đạo vẫn còn quá nhẹ với hắn!"
文章|家屬希望廢死團體不要用「置身事外」的態度跟他們談「放下」、原諒凶手，而是能感同身受地想像一下死者生前的恐懼與家屬一輩子的心痛。若拿出「人權的天平」來衡量，坦白說，以判死來撫慰死者與家屬只是「剛剛好」而已。|jiā shǔ xī wàng fèi sǐ tuán tǐ bú yào yòng 「zhì shēn shì wài」 de tài dù gēn tā men tán 「fàng xià」、 yuán liàng xiōng shǒu， ér shì néng gǎn tóng shēn shòu dì xiǎng xiàng yí xià sǐ zhě shēng qián de kǒng jù yǔ jiā shǔ yí bèi zi de xīn tòng。 ruò ná chū 「rén quán de tiān píng」 lái héng liáng， tǎn bái shuō， yǐ pàn sǐ lái fǔ wèi sǐ zhě yǔ jiā shǔ zhǐ shì 「gāng gāng hǎo」 ér yǐ。|Thân nhân mong các tổ chức bãi bỏ tử hình đừng dùng thái độ "đứng ngoài cuộc" nói với họ chuyện "buông bỏ", tha thứ hung thủ, mà hãy đồng cảm tưởng tượng nỗi sợ của người chết lúc còn sống và nỗi đau cả đời của gia đình. Nếu đem "cán cân nhân quyền" ra cân nhắc, nói thẳng, dùng án tử để an ủi người chết và thân nhân chỉ là "vừa đủ" mà thôi.`}},{n:7,zh:"增富人稅＝減窮人苦？",vi:"Tăng thuế người giàu = giảm khổ cho người nghèo?",v:`傷腦筋|shāngnǎojīn|đau đầu|Idiom
受益|shòuyì|được lợi|Vi
財富|cáifù|của cải|N
思考|sīkǎo|suy nghĩ|V
清晨|qīngchén|sáng sớm|N
同齡|tónglíng|cùng tuổi|Vs
遇上|yùshàng|gặp phải|Vpt
白工|báigōng|làm công không|Phrase
沖走|chōngzǒu|cuốn trôi|Vpt
大半|dàbàn|quá nửa|Phrase
慘重|cǎnzhòng|nặng nề, thảm|Vs
值錢|zhíqián|có giá trị|Vs
村|cūn|làng|N
可憐|kělián|đáng thương|Vs
相依為命|xiāngyīwèimìng|nương tựa nhau mà sống|Idiom
一身病痛|yìshēnbìngtòng|bệnh tật đầy mình|Idiom
懂事|dǒngshì|hiểu chuyện|Vs
主動|zhǔdòng|chủ động|Adv
援助|yuánzhù|viện trợ|V/N
口袋|kǒudài|túi áo, túi tiền|N
吃力|chīlì|vất vả, tốn sức|Vs
家產|jiāchǎn|gia sản|N
一無所有|yìwúsuǒyǒu|trắng tay|Idiom
對於|duìyú|đối với|Prep
累積|lèijī|tích lũy|V
貧戶|pínhù|hộ nghèo|N
袖手旁觀|xiùshǒupángguān|khoanh tay đứng nhìn|Idiom
調整|diàozhěng|điều chỉnh|V/N
創造|chuàngzào|tạo ra|V
津貼|jīntiē|trợ cấp|N
等同|děngtóng|tương đương|Vst
補貼|bǔtiē|trợ giá|V/N
分子|fènzǐ|thành viên|N
舉例|jǔlì|nêu ví dụ|V-sep
工資|gōngzī|tiền lương|N
完善|wánshàn|hoàn thiện|Vs
出手|chūshǒu|ra tay, chi tiêu|Vi
大方|dàfāng|hào phóng|Vs
在於|zàiyú|nằm ở chỗ|Vst
進行|jìnxíng|tiến hành|V
共享|gòngxiǎng|cùng hưởng|V
倘若|tǎngruò|nếu như|Conj
不服|bùfú|không phục|Vs
稅收|shuìshōu|nguồn thu thuế|N
生存|shēngcún|sinh tồn|Vi/N
提心吊膽|tíxīndiàodǎn|thấp thỏm lo sợ|Idiom
警力|jǐnglì|lực lượng cảnh sát|N
治安|zhìān|trị an|N`,d:{l:`故事|紅母雞和她的小雞住在一起，羊、豬、牛是她的鄰居。紅母雞想種小麥，當她請鄰居幫忙時，鄰居卻說：「不行，我們太忙了。」因此她自己種小麥。當小麥長高了，紅母雞請鄰居們來幫忙，鄰居卻也拒絕說：「不行，我們得讀書。」因此她只好自己來。紅母雞要將小麥做成麵粉，再加上奶粉、鹽、蜂蜜做成麵包，當她請鄰居幫忙時，他們卻都說：「不，我們超累的。」紅母雞烤好了香噴噴的麵包，說：「小雞，開動囉！」此時鄰居卻來到門口，羊、豬、牛說：「好餓哦！能給我們一點麵包嗎？」紅母雞心想：「我該分給他們嗎？給他們對我來說公平嗎？」|hóng mǔ jī hé tā de xiǎo jī zhù zài yì qǐ， yáng、 zhū、 niú shì tā de lín jū。 hóng mǔ jī xiǎng zhǒng xiǎo mài， dāng tā qǐng lín jū bāng máng shí， lín jū què shuō：「bù xíng， wǒ men tài máng le。」 yīn cǐ tā zì jǐ zhǒng xiǎo mài。 dāng xiǎo mài zhǎng gāo le， hóng mǔ jī qǐng lín jū men lái bāng máng， lín jū què yě jù jué shuō：「bù xíng， wǒ men dé dú shū。」 yīn cǐ tā zhǐ hǎo zì jǐ lái。 hóng mǔ jī yào jiāng xiǎo mài zuò chéng miàn fěn， zài jiā shàng nǎi fěn、 yán、 fēng mì zuò chéng miàn bāo， dāng tā qǐng lín jū bāng máng shí， tā men què dōu shuō：「bù， wǒ men chāo lèi de。」 hóng mǔ jī kǎo hǎo le xiāng pēn pēn de miàn bāo， shuō：「xiǎo jī， kāi dòng luō！」 cǐ shí lín jū què lái dào mén kǒu， yáng、 zhū、 niú shuō：「hǎo è ó！ néng gěi wǒ men yì diǎn miàn bāo ma？」 hóng mǔ jī xīn xiǎng：「wǒ gāi fēn gěi tā men ma？ gěi tā men duì wǒ lái shuō gōng píng ma？」|Gà mái đỏ sống cùng đàn gà con, dê, heo, bò là hàng xóm. Gà mái muốn trồng lúa mì, nhờ hàng xóm giúp thì họ bảo: "Không được, chúng tôi bận quá." Nên chị tự trồng. Lúa lớn, chị nhờ hàng xóm giúp, họ lại từ chối: "Không được, chúng tôi phải đọc sách." Chị đành tự làm. Chị xay lúa thành bột rồi thêm sữa bột, muối, mật ong làm bánh mì, nhờ giúp thì họ đều nói: "Không, chúng tôi mệt lắm." Gà mái nướng xong bánh mì thơm phức, nói: "Các con, ăn thôi!" Lúc đó hàng xóm đến cửa, dê, heo, bò nói: "Đói quá! Cho chúng tôi chút bánh mì được không?" Gà mái nghĩ: "Có nên chia cho họ không? Cho họ có công bằng với tôi không?"
文章|當政府為了「財政問題」傷腦筋時，有人認為富人應多繳稅來幫助社會，使多數人受益。但也有人認為富人的財富是他們應得的，因此要求他們多繳是不公平的。請問你比較支持哪一種主張？讓我們來思考一下人權與社會責任的關係吧！|dāng zhèng fǔ wèi le 「cái zhèng wèn tí」 shāng nǎo jīn shí， yǒu rén rèn wèi fù rén yīng duō jiǎo shuì lái bāng zhù shè huì， shǐ duō shù rén shòu yì。 dàn yě yǒu rén rèn wèi fù rén de cái fù shì tā men yīng dé de， yīn cǐ yāo qiú tā men duō jiǎo shì bù gōng píng de。 qǐng wèn nǐ bǐ jiào zhī chí nǎ yì zhǒng zhǔ zhāng？ ràng wǒ men lái sī kǎo yí xià rén quán yǔ shè huì zé rèn de guān xì ba！|Khi chính phủ đau đầu vì "vấn đề tài chính", có người cho rằng người giàu nên nộp thêm thuế giúp xã hội để đa số được lợi. Nhưng cũng có người cho của cải người giàu là họ xứng đáng được hưởng nên bắt nộp nhiều là không công bằng. Bạn ủng hộ quan điểm nào? Hãy cùng suy nghĩ mối quan hệ giữa nhân quyền và trách nhiệm xã hội.
文章|清晨，六歲的阿月不像同齡的孩子一樣去上學，而是跟著奶奶到田裡工作。前年，收成前遇上了天災，害得阿月父母做了一整年白工，農田也被沖走一大半，損失慘重。現在，這家人只能靠著一小塊不值錢的田地，種著青菜勉強過日子。同樣地，隔壁村六歲的阿國是個可憐的孤兒，從小與外婆相依為命。他看著一身病痛的外婆每天工作十到十二小時，總是很懂事地主動洗衣、煮飯。阿國希望趕快長大，賺錢改善家裡的經濟，讓外婆不用那麼辛苦。|qīng chén， liù suì de ā yuè bú xiàng tóng líng de hái zi yí yàng qù shàng xué， ér shì gēn zhù nǎi nǎi dào tián lǐ gōng zuò。 qián nián， shōu chéng qián yù shàng le tiān zāi， hài dé ā yuè fù mǔ zuò le yì zhěng nián bái gōng， nóng tián yě bèi chōng zǒu yí dà bàn， sǔn shī cǎn zhòng。 xiàn zài， zhè jiā rén zhǐ néng kào zhù yì xiǎo kuài bù zhí qián de tián dì， zhǒng zhù qīng cài miǎn qiáng guò rì zi。 tóng yàng dì， gé bì cūn liù suì de ā guó shì gè kě lián de gū ér， cóng xiǎo yǔ wài pó xiāng yī wèi mìng。 tā kàn zhù yì shēn bìng tòng de wài pó měi tiān gōng zuò shí dào shí èr xiǎo shí， zǒng shì hěn dǒng shì dì zhǔ dòng xǐ yī、 zhǔ fàn。 ā guó xī wàng gǎn kuài zhǎng dà， zhuàn qián gǎi shàn jiā lǐ de jīng jì， ràng wài pó bú yòng nà me xīn kǔ。|Sáng sớm, A Nguyệt sáu tuổi không đi học như bạn cùng tuổi mà theo bà ra ruộng làm việc. Năm kia trước vụ gặt gặp thiên tai khiến cha mẹ làm công cả năm, ruộng bị cuốn trôi quá nửa, thiệt hại nặng. Nay nhà chỉ dựa vào mảnh ruộng nhỏ vô giá trị trồng rau sống tạm. Tương tự, A Quốc sáu tuổi ở làng bên là cô nhi đáng thương, từ nhỏ nương tựa bà ngoại. Em nhìn bà bệnh tật mỗi ngày làm mười đến mười hai tiếng, luôn hiểu chuyện chủ động giặt đồ, nấu cơm. A Quốc mong lớn nhanh kiếm tiền cải thiện kinh tế để bà bớt vất vả.
文章|很明顯地，這兩個孩子的家庭都需要經濟援助，但是錢都在別人的口袋裡。對他們來說，所謂「公平的起跑點」根本不存在，只因出生時的環境比較差，賺起錢來自然比較吃力。雖然生活在同一片土地上，有些人一生下來就擁有大量的家產，有些人努力一輩子卻一無所有。因此，對於富人累積大量財富，而遊民與貧戶持續增加的現象，政府不能只是袖手旁觀，應該以提高富人納稅比例的方式來縮小貧富差距，調整社會公平性，創造平等的機會。|hěn míng xiǎn dì， zhè liǎng gè hái zi de jiā tíng dōu xū yào jīng jì yuán zhù， dàn shì qián dōu zài bié rén de kǒu dài lǐ。 duì tā men lái shuō， suǒ wèi 「gōng píng de qǐ pǎo diǎn」 gēn běn bù cún zài， zhǐ yīn chū shēng shí de huán jìng bǐ jiào chà， zhuàn qǐ qián lái zì rán bǐ jiào chī lì。 suī rán shēng huó zài tóng yí piàn tǔ dì shàng， yǒu xiē rén yì shēng xià lái jiù yōng yǒu dà liàng de jiā chǎn， yǒu xiē rén nǔ lì yí bèi zi què yì wú suǒ yǒu。 yīn cǐ， duì yú fù rén lèi jī dà liàng cái fù， ér yóu mín yǔ pín hù chí xù zēng jiā de xiàn xiàng， zhèng fǔ bù néng zhǐ shì xiù shǒu páng guān， yīng gāi yǐ tí gāo fù rén nà shuì bǐ lì de fāng shì lái suō xiǎo pín fù chā jù， diào zhěng shè huì gōng píng xìng， chuàng zào píng děng de jī huì。|Rõ ràng gia đình hai đứa trẻ đều cần viện trợ kinh tế nhưng tiền nằm trong túi người khác. Với chúng "vạch xuất phát công bằng" hoàn toàn không tồn tại, chỉ vì sinh ra trong hoàn cảnh kém hơn nên kiếm tiền tự nhiên vất vả hơn. Cùng sống trên một mảnh đất, có người sinh ra đã có gia sản lớn, người cố gắng cả đời vẫn trắng tay. Vì vậy trước hiện tượng người giàu tích lũy của cải khổng lồ còn người vô gia cư và hộ nghèo tăng, chính phủ không thể khoanh tay mà nên tăng tỷ lệ thuế người giàu để thu hẹp chênh lệch, điều chỉnh công bằng xã hội, tạo cơ hội bình đẳng.
文章|也許有人認為，政府要求富人多繳稅，卻為了減輕窮人的負擔而提供許多津貼，等同於拿富人的錢來補貼窮人。但話說回來，人人都是社會的一分子，不能只自私地要求國家為你做了什麼，而是應問自己為國家做了什麼。來舉個北歐國家的例子吧！很多人羨慕北歐的社會福利，那裡的人民，即使是長期生病在家、失業，政府都會提供約75%的基本工資來照顧，更別說對弱勢團體的完善福利政策了。|yě xǔ yǒu rén rèn wèi， zhèng fǔ yāo qiú fù rén duō jiǎo shuì， què wèi le jiǎn qīng qióng rén de fù dān ér tí gōng xǔ duō jīn tiē， děng tóng yú ná fù rén de qián lái bǔ tiē qióng rén。 dàn huà shuō huí lái， rén rén dōu shì shè huì de yí fèn zǐ， bù néng zhǐ zì sī dì yāo qiú guó jiā wèi nǐ zuò le shén me， ér shì yīng wèn zì jǐ wèi guó jiā zuò le shén me。 lái jǔ gè běi ōu guó jiā de lì zi ba！ hěn duō rén xiàn mù běi ōu de shè huì fú lì， nà lǐ de rén mín， jí shǐ shì zhǎng qī shēng bìng zài jiā、 shī yè， zhèng fǔ dōu huì tí gōng yuē 75% de jī běn gōng zī lái zhào gù， gèng bié shuō duì ruò shì tuán tǐ de wán shàn fú lì zhèng cè le。|Có lẽ có người cho rằng chính phủ bắt người giàu nộp nhiều thuế để trợ cấp giảm gánh cho người nghèo, tương đương lấy tiền người giàu bù cho người nghèo. Nhưng nói đi cũng phải nói lại, ai cũng là một thành viên xã hội, không thể ích kỷ chỉ đòi nhà nước làm gì cho mình mà phải hỏi mình làm gì cho đất nước. Lấy ví dụ các nước Bắc Âu: nhiều người ngưỡng mộ phúc lợi Bắc Âu, dân ở đó dù bệnh dài ngày ở nhà hay thất nghiệp, chính phủ vẫn cấp khoảng 75% lương cơ bản, chưa nói chính sách phúc lợi hoàn thiện cho nhóm yếu thế.
文章|國家之所以能出手這麼大方，就在於政府在制定政策時考慮了多數人的利益，把富人存著不用的錢進行「收入再分配」，建立完善的醫療、養老、失業補助的制度，提供人們遇到困難時的保障，讓大家共享更好的社會福利。|guó jiā zhī suǒ yǐ néng chū shǒu zhè me dà fāng， jiù zài yú zhèng fǔ zài zhì dìng zhèng cè shí kǎo lǜ le duō shù rén de lì yì， bǎ fù rén cún zhù bú yòng de qián jìn xíng 「shōu rù zài fēn pèi」， jiàn lì wán shàn de yī liáo、 yǎng lǎo、 shī yè bǔ zhù de zhì dù， tí gōng rén men yù dào kùn nán shí de bǎo zhàng， ràng dà jiā gòng xiǎng gèng hǎo de shè huì fú lì。|Nhà nước chi hào phóng được là vì khi ban hành chính sách đã cân nhắc lợi ích đa số, lấy số tiền người giàu cất không dùng để "tái phân phối thu nhập", xây dựng chế độ y tế, dưỡng lão, trợ cấp thất nghiệp hoàn chỉnh, bảo đảm khi gặp khó khăn để mọi người cùng hưởng phúc lợi tốt hơn.
文章|倘若富人還是不服，其實可以換個角度來看：如果政府不透過稅收照顧窮人，那麼窮人可能為了生存而犯罪，到時每個人走在路上都提心吊膽的，政府也需要花更多預算加派警力以維護治安。從經濟的角度來看，不是更不划算嗎？|tǎng ruò fù rén hái shì bù fú， qí shí kě yǐ huàn gè jiǎo dù lái kàn： rú guǒ zhèng fǔ bú tòu guò shuì shōu zhào gù qióng rén， nà me qióng rén kě néng wèi le shēng cún ér fàn zuì， dào shí měi gè rén zǒu zài lù shàng dōu tí xīn diào dǎn de， zhèng fǔ yě xū yào huā gèng duō yù suàn jiā pài jǐng lì yǐ wéi hù zhì ān。 cóng jīng jì de jiǎo dù lái kàn， bú shì gèng bù huá suàn ma？|Nếu người giàu vẫn không phục, thật ra có thể đổi góc nhìn: nếu chính phủ không dùng thuế chăm lo người nghèo, họ có thể vì sinh tồn mà phạm tội, lúc ấy ai đi trên đường cũng thấp thỏm, chính phủ cũng phải chi thêm ngân sách tăng cảnh sát giữ trị an. Từ góc độ kinh tế chẳng phải càng không có lợi sao?`}},{n:8,zh:"左右為難的難民問題",vi:"Vấn đề người tị nạn: tiến thoái lưỡng nan",v:`左右為難|zuǒyòuwèinán|tiến thoái lưỡng nan|Idiom
難民|nánmín|người tị nạn|N
男童|nántóng|bé trai|N
溺死|nìsǐ|chết đuối|Vp
震驚|zhènjīng|chấn động|Vpt
接連|jiēlián|liên tiếp|Adv
事件|shìjiàn|sự kiện|N
不滿|bùmǎn|bất mãn|Vs
分擔|fēndān|chia sẻ gánh vác|V
化|huà|biến thành|V
轉機|zhuǎnjī|bước ngoặt, cơ hội|N
海面|hǎimiàn|mặt biển|N
難以數計|nányǐshùjì|nhiều không đếm xuể|Idiom
屍體|shītǐ|thi thể|N
怵目驚心|chùmùjīngxīn|rùng rợn|Idiom
冒|mào|mạo hiểm, liều|V
聯合國|liánhéguó|Liên Hợp Quốc|Name
止|zhǐ|đến (văn ngôn)|Ptc
庇護|bìhù|che chở, tị nạn|N
人數|rénshù|số người|N
面臨|miànlín|đối mặt|V
團結|tuánjié|đoàn kết|Vi
召開|zhàokāi|triệu tập|V
高峰會|gāofēnghuì|hội nghị thượng đỉnh|N
領袖|lǐngxiù|lãnh tụ|N
消除|xiāochú|xóa bỏ|V
仇外|chóuwài|bài ngoại|Vs
前|qián|cựu, trước|Prefix
歐巴馬|ōubāmǎ|Obama|Name
會議|huìyì|hội nghị|N
主義|zhǔyì|chủ nghĩa|N
受害者|shòuhàizhě|nạn nhân|N
向來|xiànglái|xưa nay|Adv
單一|dānyī|đơn lẻ|Vs-attr
共同|gòngtóng|cùng nhau|Adv
排外|páiwài|bài ngoại|Vi
融入|róngrù|hòa nhập|V
收容|shōuróng|thu nhận|V
或許|huòxǔ|có lẽ|Adv
勞動力|láodònglì|sức lao động|N
轉化|zhuǎnhuà|chuyển hóa|Vi
里約|lǐyuē|Rio|Name
奧運|àoyùn|Thế vận hội|N
首度|shǒudù|lần đầu|Adv
代表隊|dàibiǎoduì|đội đại diện|N
逃離|táolí|trốn thoát|V
戰火|zhànhuǒ|khói lửa chiến tranh|N
殘障|cánzhàng|khuyết tật|N
忘掉|wàngdiào|quên đi|Vpt
英雄|yīngxióng|anh hùng|N
身分|shēnfèn|thân phận|N
索馬利亞|suǒmǎlìyà|Somalia|Name
之後|zhīhòu|sau đó|N
參選|cānxuǎn|tham gia tranh cử|V
膚色|fūsè|màu da|N
早日|zǎorì|sớm ngày|Adv
扶持|fúchí|nâng đỡ|V`,d:{l:`新聞|一張三歲男童在海邊溺死的照片震驚全球，使大家對難民的問題更加地關心和同情。然而，在接連發生恐怖攻擊事件後，民眾又開始對政府的開放政策表達不滿。如何解決難民危機，正考驗著各國政府的智慧。|yì zhāng sān suì nán tóng zài hǎi biān nì sǐ de zhào piān zhèn jīng quán qiú， shǐ dà jiā duì nán mín de wèn tí gèng jiā dì guān xīn hé tóng qíng。 rán ér， zài jiē lián fā shēng kǒng bù gōng jī shì jiàn hòu， mín zhòng yòu kāi shǐ duì zhèng fǔ de kāi fàng zhèng cè biǎo dá bù mǎn。 rú hé jiě jué nán mín wēi jī， zhèng kǎo yàn zhù gè guó zhèng fǔ de zhì huì。|Bức ảnh bé trai ba tuổi chết đuối bên bờ biển gây chấn động toàn cầu, khiến mọi người quan tâm và đồng cảm hơn với vấn đề người tị nạn. Tuy nhiên sau các vụ khủng bố liên tiếp, dân chúng lại bất mãn với chính sách mở cửa của chính phủ. Làm sao giải quyết khủng hoảng người tị nạn đang thử thách trí tuệ chính phủ các nước.
文章|海面上，難以數計的屍體讓人怵目驚心。因為宗教或戰爭的原因，幾百萬難民冒著生命危險，離鄉背井、飄洋過海，只是為了能到一個安全的地方好好活著。|hǎi miàn shàng， nán yǐ shù jì de shī tǐ ràng rén chù mù jīng xīn。 yīn wèi zōng jiào huò zhàn zhēng de yuán yīn， jǐ bǎi wàn nán mín mào zhù shēng mìng wēi xiǎn， lí xiāng bèi jǐng、 piāo yáng guò hǎi， zhǐ shì wèi le néng dào yí gè ān quán de dì fāng hǎo hǎo huó zhù。|Trên mặt biển vô số thi thể khiến người ta rùng mình. Vì tôn giáo hoặc chiến tranh, hàng triệu người tị nạn liều mạng rời quê hương vượt biển chỉ để đến nơi an toàn sống cho tử tế.
文章|根據聯合國的統計，至2015年底止，全世界有六千多萬難民申請庇護，人數創下歷史新高，人權觀察組織就表示：「全球正面臨一個歷史性的難民危機，目前正是需要各國團結的時候。」2016年9月，聯合國在紐約召開了史上第一次難民高峰會，一百九十三國領袖和代表承諾將保護難民人權、協助難民就業，並消除國人仇外的心理。|gēn jù lián hé guó de tǒng jì， zhì 2015 nián dǐ zhǐ， quán shì jiè yǒu liù qiān duō wàn nán mín shēn qǐng bì hù， rén shù chuàng xià lì shǐ xīn gāo， rén quán guān chá zǔ zhī jiù biǎo shì：「quán qiú zhèng miàn lín yí gè lì shǐ xìng de nán mín wēi jī， mù qián zhèng shì xū yào gè guó tuán jié de shí hòu。」2016 nián 9 yuè， lián hé guó zài niǔ yuē zhào kāi le shǐ shàng dì yī cì nán mín gāo fēng huì， yì bǎi jiǔ shí sān guó lǐng xiù hé dài biǎo chéng nuò jiāng bǎo hù nán mín rén quán、 xié zhù nán mín jiù yè， bìng xiāo chú guó rén chóu wài de xīn lǐ。|Theo thống kê Liên Hợp Quốc, đến cuối 2015 toàn thế giới có hơn sáu mươi triệu người xin tị nạn, lập kỷ lục lịch sử; tổ chức theo dõi nhân quyền nói: "Toàn cầu đang đối mặt khủng hoảng tị nạn mang tính lịch sử, lúc này cần các nước đoàn kết." Tháng 9/2016 LHQ tổ chức tại New York hội nghị thượng đỉnh tị nạn đầu tiên, lãnh đạo và đại diện 193 nước cam kết bảo vệ nhân quyền người tị nạn, hỗ trợ họ có việc làm và xóa bỏ tâm lý bài ngoại.
文章|就如美國前總統歐巴馬在會議中所言：「難民本身不是威脅，而是戰爭及恐怖主義的受害者。」人道與自由向來是西方國家的重要價值，難民問題並非單一國家的責任，只有透過國際社會共同合作與分擔才能解決。人道危機正是各國合作的轉機，仇恨與排外只會使難民更加難以融入社會，帶來更大的傷害。|jiù rú měi guó qián zǒng tǒng ōu bā mǎ zài huì yì zhōng suǒ yán：「nán mín běn shēn bú shì wēi xié， ér shì zhàn zhēng jí kǒng bù zhǔ yì de shòu hài zhě。」 rén dào yǔ zì yóu xiàng lái shì xī fāng guó jiā de zhòng yào jià zhí， nán mín wèn tí bìng fēi dān yì guó jiā de zé rèn， zhǐ yǒu tòu guò guó jì shè huì gòng tóng hé zuò yǔ fēn dān cái néng jiě jué。 rén dào wēi jī zhèng shì gè guó hé zuò de zhuǎn jī， chóu hèn yǔ pái wài zhǐ huì shǐ nán mín gèng jiā nán yǐ róng rù shè huì， dài lái gèng dà de shāng hài。|Như cựu tổng thống Mỹ Obama nói tại hội nghị: "Bản thân người tị nạn không phải mối đe dọa mà là nạn nhân của chiến tranh và chủ nghĩa khủng bố." Nhân đạo và tự do xưa nay là giá trị quan trọng của phương Tây, vấn đề tị nạn không phải trách nhiệm của riêng nước nào, chỉ có cộng đồng quốc tế hợp tác chia sẻ mới giải quyết được. Khủng hoảng nhân đạo chính là bước ngoặt hợp tác, thù hận và bài ngoại chỉ khiến họ khó hòa nhập hơn, gây tổn thương lớn hơn.
文章|短時間收容難民或許會對收容國的財政造成負擔，但從長期來看，只要提供語言與職業訓練，就能使他們自食其力。越早讓難民就業，他們就能越早融入社會。研究指出，貧窮的新移民都想為了安定的生活而努力工作。在歐洲人口老化與勞動力不足的情況下，這正是把難民危機轉化為生產力的大好機會。他們不但能為歐洲各國停滯不前的經濟帶來好處，也對國家稅收有所貢獻。|duǎn shí jiān shōu róng nán mín huò xǔ huì duì shōu róng guó de cái zhèng zào chéng fù dān， dàn cóng zhǎng qī lái kàn， zhǐ yào tí gōng yǔ yán yǔ zhí yè xùn liàn， jiù néng shǐ tā men zì shí qí lì。 yuè zǎo ràng nán mín jiù yè， tā men jiù néng yuè zǎo róng rù shè huì。 yán jiū zhǐ chū， pín qióng de xīn yí mín dōu xiǎng wèi le ān dìng de shēng huó ér nǔ lì gōng zuò。 zài ōu zhōu rén kǒu lǎo huà yǔ láo dòng lì bù zú de qíng kuàng xià， zhè zhèng shì bǎ nán mín wēi jī zhuǎn huà wèi shēng chǎn lì de dà hǎo jī huì。 tā men bú dàn néng wèi ōu zhōu gè guó tíng zhì bù qián de jīng jì dài lái hǎo chù， yě duì guó jiā shuì shōu yǒu suǒ gòng xiàn。|Thu nhận người tị nạn thời gian ngắn có thể gây gánh nặng tài chính cho nước tiếp nhận, nhưng về lâu dài chỉ cần dạy ngôn ngữ và đào tạo nghề, họ có thể tự lập. Càng sớm cho họ việc làm càng sớm hòa nhập. Nghiên cứu cho thấy dân nhập cư mới nghèo đều muốn làm việc chăm chỉ vì cuộc sống ổn định. Khi châu Âu già hóa và thiếu lao động, đây là cơ hội lớn biến khủng hoảng tị nạn thành năng suất. Họ không chỉ mang lợi cho nền kinh tế đình trệ của châu Âu mà còn đóng góp thuế.
文章|2016年的里約奧運，首度出現由難民組成的代表隊。有位因逃離戰火而斷了一條腿的難民，也為參加殘障奧運的游泳比賽而努力，他說：「我要忘掉過去、重新開始生活，有一天，我要以英雄的身分再回到我的國家。」另一位索馬利亞籍女性難民18歲時逃離戰火，靠著自己的努力取得美國哈佛大學碩士，成為聯合國公共衛生專家之後，回到自己的國家參選總統，希望能為國家創造繁榮和幸福。|2016 nián de lǐ yuē ào yùn， shǒu dù chū xiàn yóu nán mín zǔ chéng de dài biǎo duì。 yǒu wèi yīn táo lí zhàn huǒ ér duàn le yì tiáo tuǐ de nán mín， yě wèi cān jiā cán zhàng ào yùn de yóu yǒng bǐ sài ér nǔ lì， tā shuō：「wǒ yào wàng diào guò qù、 chóng xīn kāi shǐ shēng huó， yǒu yì tiān， wǒ yào yǐ yīng xióng de shēn fèn zài huí dào wǒ de guó jiā。」 lìng yí wèi suǒ mǎ lì yà jí nǚ xìng nán mín 18 suì shí táo lí zhàn huǒ， kào zhù zì jǐ de nǔ lì qǔ dé měi guó hā fú dà xué shuò shì， chéng wèi lián hé guó gōng gòng wèi shēng zhuān jiā zhī hòu， huí dào zì jǐ de guó jiā cān xuǎn zǒng tǒng， xī wàng néng wèi guó jiā chuàng zào fán róng hé xìng fú。|Thế vận hội Rio 2016 lần đầu có đội đại diện gồm người tị nạn. Một người mất một chân vì chạy chiến tranh cũng cố gắng thi bơi ở Paralympic, anh nói: "Tôi muốn quên quá khứ, bắt đầu cuộc sống mới, một ngày nào đó tôi sẽ trở về quê hương với tư cách anh hùng." Một phụ nữ tị nạn Somalia khác năm 18 tuổi chạy chiến tranh, nhờ nỗ lực lấy thạc sĩ Harvard, thành chuyên gia y tế công cộng LHQ rồi về nước tranh cử tổng thống, mong tạo thịnh vượng và hạnh phúc cho đất nước.
文章|每個人都是世界的一分子，應該用友善與尊重的態度，不分國籍、種族、膚色與性別，幫助難民早日成為我們的同事和鄰居，重新建立幸福的家庭。希望下一代在讀到這段歷史時，看到的是，我們曾經一起努力扶持那些需要被保護的人們。|měi gè rén dōu shì shì jiè de yí fèn zǐ， yīng gāi yòng yǒu shàn yǔ zūn zhòng de tài dù， bù fēn guó jí、 zhǒng zú、 fū sè yǔ xìng bié， bāng zhù nán mín zǎo rì chéng wèi wǒ men de tóng shì hé lín jū， chóng xīn jiàn lì xìng fú de jiā tíng。 xī wàng xià yí dài zài dú dào zhè duàn lì shǐ shí， kàn dào de shì， wǒ men céng jīng yì qǐ nǔ lì fú chí nà xiē xū yào bèi bǎo hù de rén men。|Mỗi người đều là một phần của thế giới, nên dùng thái độ thân thiện tôn trọng, không phân biệt quốc tịch, chủng tộc, màu da, giới tính, giúp người tị nạn sớm thành đồng nghiệp và hàng xóm, xây lại gia đình hạnh phúc. Mong thế hệ sau khi đọc đoạn lịch sử này sẽ thấy chúng ta từng cùng nỗ lực nâng đỡ những người cần bảo vệ.`}},{n:9,zh:"有核到底可不可？",vi:"Có điện hạt nhân rốt cuộc có nên không?",v:`核電廠|hédiànchǎng|nhà máy điện hạt nhân|N
熱烈|rèliè|sôi nổi|Vs
乃至|nǎizhì|thậm chí|Adv
遠處|yuǎnchù|nơi xa|N
輻射|fúshè|bức xạ|N
外洩|wàixiè|rò rỉ|Vi
爆炸|bàozhà|nổ|Vp
危言聳聽|wēiyánsǒngtīng|nói giật gân|Idiom
致命|zhìmìng|chết người|Vs
退燒|tuìshāo|hạ nhiệt|Vp
行之有年|xíngzhīyǒunián|thực hiện nhiều năm|Idiom
三哩島|sānlīdǎo|đảo Three Mile|Name
烏克蘭|wūkèlán|Ukraine|Name
車諾比|chēnuòbǐ|Chernobyl|Name
福島|fúdǎo|Fukushima|Name
核災|hézāi|thảm họa hạt nhân|N
核電|hédiàn|điện hạt nhân|N
列為|lièwèi|xếp vào|Vst
等級|děngjí|cấp độ|N
位於|wèiyú|nằm ở|Vst
海嘯|hǎixiào|sóng thần|N
洪水|hóngshuǐ|lũ lụt|N
數百萬|shùbǎiwàn|vài triệu|Adv
及時|jíshí|kịp thời|Adv
顆|kē|viên, quả (lượng từ)|M
炸彈|zhàdàn|bom|N
立即|lìjí|lập tức|Adv
令|lìng|khiến|Vs
擔憂|dānyōu|lo lắng|Vs
歐洲癌症護理雜誌|ōuzhōuáizhènghùlǐzázhì|Tạp chí Chăm sóc ung thư châu Âu|Name
數字|shùzì|con số|N
周圍|zhōuwéi|xung quanh|N
罹癌|líái|mắc ung thư|Vp
偏|piān|hơi lệch, thiên về|Adv
青少年|qīngshàonián|thanh thiếu niên|N
細胞|xìbāo|tế bào|N
製造|zhìzào|chế tạo, tạo ra|V
廢料|fèiliào|chất thải|N
可行|kěxíng|khả thi|Vs
偏遠|piānyuǎn|hẻo lánh|Vs
任誰|rènshuí|bất cứ ai|Phrase
因應|yīnyīng|ứng phó|V
再生能源|zàishēngnéngyuán|năng lượng tái tạo|N
妥善|tuǒshàn|thỏa đáng|Adv
頭痛|tóutòng|đau đầu|Vs
無解|wújiě|không có lời giải|Vs
難題|nántí|bài toán khó|N
正確|zhèngquè|đúng đắn|Vs`,d:{l:`文章|「核電廠的存廢」一直是許多國家熱烈討論的社會議題，與經濟、環境，乃至個人生命財產安全息息相關，你我都無法置身事外。|「hé diàn chǎng de cún fèi」 yì zhí shì xǔ duō guó jiā rè liè tǎo lùn de shè huì yì tí， yǔ jīng jì、 huán jìng， nǎi zhì gè rén shēng mìng cái chǎn ān quán xī xī xiāng guān， nǐ wǒ dōu wú fǎ zhì shēn shì wài。|"Giữ hay bỏ nhà máy điện hạt nhân" luôn là vấn đề xã hội được nhiều nước bàn luận sôi nổi, liên quan mật thiết kinh tế, môi trường, thậm chí an toàn tính mạng tài sản mỗi người, bạn và tôi đều không thể đứng ngoài.
文章|你可以想像自己住的城市不遠處有座核電廠嗎？會不會擔心有一天輻射外洩，甚至發生爆炸，來不及逃離呢？這不是危言聳聽，正因核電廠有著致命風險，所以「反核」一直都是不退燒的社會議題。雖然核能發電行之有年，但從美國三哩島、烏克蘭車諾比，到日本福島核災事件，都顯示人類控制核電的能力仍然不足。|nǐ kě yǐ xiǎng xiàng zì jǐ zhù de chéng shì bù yuǎn chù yǒu zuò hé diàn chǎng ma？ huì bú huì dān xīn yǒu yì tiān fú shè wài xiè， shèn zhì fā shēng bào zhà， lái bù jí táo lí ne？ zhè bú shì wēi yán sǒng tīng， zhèng yīn hé diàn chǎng yǒu zhù zhì mìng fēng xiǎn， suǒ yǐ 「fǎn hé」 yì zhí dōu shì bú tuì shāo de shè huì yì tí。 suī rán hé néng fā diàn xíng zhī yǒu nián， dàn cóng měi guó sān lī dǎo、 wū kè lán chē nuò bǐ， dào rì běn fú dǎo hé zāi shì jiàn， dōu xiǎn shì rén lèi kòng zhì hé diàn de néng lì réng rán bù zú。|Bạn có thể tưởng tượng thành phố mình sống không xa có một nhà máy điện hạt nhân không? Có lo một ngày bức xạ rò rỉ, thậm chí nổ, không kịp chạy? Đó không phải nói giật gân, chính vì nhà máy có rủi ro chết người nên "chống hạt nhân" luôn là vấn đề không hạ nhiệt. Tuy điện hạt nhân dùng nhiều năm, từ đảo Three Mile của Mỹ, Chernobyl Ukraine đến thảm họa Fukushima Nhật đều cho thấy khả năng kiểm soát điện hạt nhân của con người vẫn chưa đủ.
文章|以臺灣為例，在這座小島上就有超過三座的核電廠，且皆被列為「全球最危險等級」，人口過度密集是原因之一，加上臺灣位於地震帶上，地震頻率高，核電廠卻離海邊及城市不遠，得同時面對地震、海嘯、洪水等威脅。若發生七級以上的強震，恐怕無法讓數百萬人及時逃離。就像是一顆未爆的炸彈，如何讓人能安心睡覺？|yǐ tái wān wèi lì， zài zhè zuò xiǎo dǎo shàng jiù yǒu chāo guò sān zuò de hé diàn chǎng， qiě jiē bèi liè wèi 「quán qiú zuì wēi xiǎn děng jí」， rén kǒu guò dù mì jí shì yuán yīn zhī yī， jiā shàng tái wān wèi yú dì zhèn dài shàng， dì zhèn pín lǜ gāo， hé diàn chǎng què lí hǎi biān jí chéng shì bù yuǎn， dé tóng shí miàn duì dì zhèn、 hǎi xiào、 hóng shuǐ děng wēi xié。 ruò fā shēng qī jí yǐ shàng de qiáng zhèn， kǒng pà wú fǎ ràng shù bǎi wàn rén jí shí táo lí。 jiù xiàng shì yì kē wèi bào de zhà dàn， rú hé ràng rén néng ān xīn shuì jué？|Lấy Đài Loan làm ví dụ, trên hòn đảo nhỏ này có hơn ba nhà máy, đều bị xếp vào "cấp nguy hiểm nhất thế giới", dân số quá dày là một nguyên nhân, cộng Đài Loan nằm trên vành đai động đất tần suất cao mà nhà máy cách biển và thành phố không xa, phải đối mặt đồng thời động đất, sóng thần, lũ. Nếu xảy ra động đất mạnh trên cấp 7, e rằng hàng triệu người không kịp chạy. Như một quả bom chưa nổ, làm sao yên tâm ngủ?
文章|就算沒有立即危險，輻射的問題也令人擔憂。《歐洲癌症護理雜誌》所提供的數字以及德國的研究資料都顯示核電廠周圍居民罹癌的比例偏高。日本福島核災事件發生後，六年之間，青少年罹癌人數也超過一百五十人。許多例子都證明輻射會讓正常的細胞變成癌細胞，也可以說核能發電廠製造出了讓人容易生病的環境。|jiù suàn méi yǒu lì jí wēi xiǎn， fú shè de wèn tí yě lìng rén dān yōu。《 ōu zhōu ái zhèng hù lǐ zá zhì 》 suǒ tí gōng de shù zì yǐ jí dé guó de yán jiū zī liào dōu xiǎn shì hé diàn chǎng zhōu wéi jū mín lí ái de bǐ lì piān gāo。 rì běn fú dǎo hé zāi shì jiàn fā shēng hòu， liù nián zhī jiān， qīng shào nián lí ái rén shù yě chāo guò yì bǎi wǔ shí rén。 xǔ duō lì zi dōu zhèng míng fú shè huì ràng zhèng cháng de xì bāo biàn chéng ái xì bāo， yě kě yǐ shuō hé néng fā diàn chǎng zhì zào chū le ràng rén róng yì shēng bìng de huán jìng。|Dù không nguy hiểm tức thì, vấn đề bức xạ cũng đáng lo. Số liệu của "Tạp chí Chăm sóc ung thư châu Âu" và nghiên cứu của Đức đều cho thấy tỷ lệ mắc ung thư của cư dân quanh nhà máy khá cao. Sau thảm họa Fukushima, trong sáu năm số thanh thiếu niên mắc ung thư cũng vượt 150. Nhiều ví dụ chứng minh bức xạ biến tế bào bình thường thành tế bào ung thư, cũng có thể nói nhà máy tạo ra môi trường dễ sinh bệnh.
文章|除了看不見的輻射威脅，看得見的核廢料處理更是一大難題。核廢料造成的輻射汙染超過數百年，無論是埋在土裡還是丟到海底，長遠來看都不太可行。更糟糕的是，有些國家選擇犧牲住在偏遠地區的人民，把他們的家園當做核廢料的「垃圾場」，這種做法更是任誰都無法接受。|chú le kàn bú jiàn de fú shè wēi xié， kàn dé jiàn de hé fèi liào chù lǐ gèng shì yí dà nán tí。 hé fèi liào zào chéng de fú shè wū rǎn chāo guò shù bǎi nián， wú lùn shì mái zài tǔ lǐ hái shì diū dào hǎi dǐ， zhǎng yuǎn lái kàn dōu bú tài kě xíng。 gèng zāo gāo de shì， yǒu xiē guó jiā xuǎn zé xī shēng zhù zài piān yuǎn dì qū de rén mín， bǎ tā men de jiā yuán dāng zuò hé fèi liào de 「lā jī chǎng」， zhè zhǒng zuò fǎ gèng shì rèn shuí dōu wú fǎ jiē shòu。|Ngoài mối đe dọa bức xạ vô hình, xử lý chất thải hạt nhân hữu hình càng là bài toán lớn. Ô nhiễm bức xạ do chất thải kéo dài hàng trăm năm, dù chôn dưới đất hay thả đáy biển, về lâu dài đều không khả thi. Tệ hơn, có nước chọn hy sinh dân vùng hẻo lánh, biến quê hương họ thành "bãi rác" chất thải hạt nhân, cách làm này ai cũng không thể chấp nhận.
文章|多年前，許多國家為了因應大量用電需求而蓋了核電廠。當時，再生能源技術不足且設備昂貴，從經濟的角度考量，選擇最低成本的核能發電是可以理解的。然而，核電風險究竟多高？如何妥善控制核輻射？廢料又應如何處理？皆是令人頭痛且仍無解的難題。沒有什麼比安全與健康更重要的了。人們不應該為了害怕電價上漲而選擇生活在危險當中，努力發展再生能源以取代核能發電才是正確的道路。|duō nián qián， xǔ duō guó jiā wèi le yīn yīng dà liàng yòng diàn xū qiú ér gài le hé diàn chǎng。 dāng shí， zài shēng néng yuán jì shù bù zú qiě shè bèi áng guì， cóng jīng jì de jiǎo dù kǎo liáng， xuǎn zé zuì dī chéng běn de hé néng fā diàn shì kě yǐ lǐ jiě de。 rán ér， hé diàn fēng xiǎn jiū jìng duō gāo？ rú hé tuǒ shàn kòng zhì hé fú shè？ fèi liào yòu yīng rú hé chù lǐ？ jiē shì lìng rén tóu tòng qiě réng wú jiě de nán tí。 méi yǒu shén me bǐ ān quán yǔ jiàn kāng gèng zhòng yào de le。 rén men bù yīng gāi wèi le hài pà diàn jià shàng zhǎng ér xuǎn zé shēng huó zài wēi xiǎn dāng zhōng， nǔ lì fā zhǎn zài shēng néng yuán yǐ qǔ dài hé néng fā diàn cái shì zhèng què de dào lù。|Nhiều năm trước, nhiều nước vì ứng phó nhu cầu điện lớn đã xây nhà máy hạt nhân. Lúc đó công nghệ năng lượng tái tạo chưa đủ, thiết bị đắt, xét kinh tế chọn điện hạt nhân chi phí thấp nhất là có thể hiểu. Nhưng rủi ro hạt nhân rốt cuộc cao đến đâu? Kiểm soát bức xạ thế nào? Chất thải xử lý ra sao? Đều là bài toán đau đầu chưa có lời giải. Không gì quan trọng hơn an toàn và sức khỏe. Người ta không nên vì sợ giá điện tăng mà chọn sống trong nguy hiểm, nỗ lực phát triển năng lượng tái tạo thay thế điện hạt nhân mới là con đường đúng.`}},{n:10,zh:"同性婚姻合法化",vi:"Hợp pháp hóa hôn nhân đồng giới",v:`同性|tóngxìng|đồng giới|Vs-attr
主播|zhǔbō|người dẫn bản tin|N
記者|jìzhě|phóng viên|N
連線|liánxiàn|kết nối trực tuyến|Vi
傳達|chuándá|truyền đạt|V
陣線|zhènxiàn|mặt trận, phe|N
發起|fāqǐ|khởi xướng|V
盡快|jǐnkuài|càng nhanh càng tốt|Adv
同性戀|tóngxìngliàn|đồng tính luyến ái|N
異性戀|yìxìngliàn|dị tính luyến ái|N
相同|xiāngtóng|giống nhau|Vs
相愛|xiāngài|yêu nhau|Vs
核心|héxīn|cốt lõi|N
伴侶|bànlǚ|bạn đời|N
無關|wúguān|không liên quan|Vs
打破|dǎpò|phá vỡ|V
平權|píngquán|quyền bình đẳng|N
藉由|jíyóu|thông qua|Prep
節稅|jiéshuì|tiết kiệm thuế|Vi
病危|bìngwēi|bệnh nguy kịch|Vs
簽署|qiānshǔ|ký kết|V
文件|wénjiàn|văn kiện|N
彼此|bǐcǐ|lẫn nhau|N
親密|qīnmì|thân mật|Vs
伙伴|huǒbàn|bạn đồng hành|N
陌生|mòshēng|xa lạ|Vs
性病|xìngbìng|bệnh tình dục|N
偏見|piānjiàn|định kiến|N
身上|shēnshàng|trên người|N
異性|yìxìng|khác giới|Vs-attr
有情人終成眷屬|yǒuqíngrénzhōngchéngjuànshǔ|người có tình cuối cùng nên duyên|Idiom
末日|mòrì|ngày tận thế|N
擴大|kuòdà|mở rộng|V
範圍|fànwéi|phạm vi|N
心聲|xīnshēng|tiếng lòng|N
法案|fǎàn|dự luật|N
鏡頭|jìngtóu|ống kính, cảnh quay|N
聯邦|liánbāng|liên bang|N
彩虹|cǎihóng|cầu vồng|N
旗|qí|cờ|N
時刻|shíkè|thời khắc|N
駐外|zhùwài|đóng ở nước ngoài|Vi
歡慶|huānqìng|mừng vui|V
擠進|jǐjìn|chen vào|Vpt
生物|shēngwù|sinh vật|N
本能|běnnéng|bản năng|N
繁衍|fányǎn|sinh sôi|V
尋找|xúnzhǎo|tìm kiếm|V
交配|jiāopèi|giao phối|Vi
法則|fǎzé|quy luật|N
定義|dìngyì|định nghĩa|N
互補|hùbǔ|bổ sung cho nhau|Vs
組合|zǔhé|tổ hợp|N
全體|quántǐ|toàn thể|N
詞彙|cíhuì|từ vựng|N
稱呼|chēnghū|xưng hô|V
建構|jiàngòu|xây dựng|V
革命|gémìng|cách mạng|N
做為|zuòwèi|làm (cho)|Vst
無視|wúshì|phớt lờ|V
干涉|gānshè|can thiệp|V
邏輯|luójí|logic|N
納入|nàrù|đưa vào|V
第三者|dìsānzhě|người thứ ba|N
原則|yuánzé|nguyên tắc|N
無異|wúyì|không khác gì|Vst
形式|xíngshì|hình thức|N
亂倫|luànlún|loạn luân|N
不倫|bùlún|ngoại tình|N
白宮|báigōng|Nhà Trắng|Name
巴黎鐵塔|bālítiětǎ|tháp Eiffel|Name
打上|dǎshàng|chiếu lên|Vpt
燈光|dēngguāng|ánh đèn|N`,d:{l:`主播|各位觀眾朋友大家好，和平廣場前正在舉辦一場爭取同性婚姻合法化的遊行活動。情況如何，我們現在與現場記者連線。|gè wèi guān zhòng péng yǒu dà jiā hǎo， hé píng guǎng chǎng qián zhèng zài jǔ bàn yì chǎng zhēng qǔ tóng xìng hūn yīn hé fǎ huà de yóu xíng huó dòng。 qíng kuàng rú hé， wǒ men xiàn zài yǔ xiàn chǎng jì zhě lián xiàn。|Chào quý khán giả, trước quảng trường Hòa Bình đang diễn ra cuộc tuần hành đòi hợp pháp hóa hôn nhân đồng giới. Tình hình thế nào, ta nối máy với phóng viên hiện trường.
記者|記者現在所在位置是和平廣場前，現場擠滿了參加活動的民眾，高喊「同志朋友，你們並不孤單！」，希望傳達出他們跟同志站在同一陣線的立場。活動發起人表示，這個活動主要是希望政府能盡快通過同性婚姻法律。|jì zhě xiàn zài suǒ zài wèi zhì shì hé píng guǎng chǎng qián， xiàn chǎng jǐ mǎn le cān jiā huó dòng de mín zhòng， gāo hǎn 「tóng zhì péng yǒu， nǐ men bìng bù gū dān！」， xī wàng chuán dá chū tā men gēn tóng zhì zhàn zài tóng yí zhèn xiàn de lì chǎng。 huó dòng fā qǐ rén biǎo shì， zhè gè huó dòng zhǔ yào shì xī wàng zhèng fǔ néng jǐn kuài tōng guò tóng xìng hūn yīn fǎ lǜ。|Vị trí phóng viên đang đứng là trước quảng trường Hòa Bình, hiện trường chật người tham gia hô "Bạn bè đồng tính, các bạn không cô đơn!", mong truyền đạt lập trường đứng chung chiến tuyến với cộng đồng đồng tính. Người khởi xướng nói hoạt động chủ yếu mong chính phủ sớm thông qua luật hôn nhân đồng giới.
記者|他說：「同性戀不是病，我們生來如此，和異性戀沒有兩樣。我們只是愛上相同性別的人，但這並沒有錯。我們也希望能跟相愛的人組成家庭，和對方分享物質和精神生活。婚姻的核心是愛，是伴侶之間的事，與性別無關。相愛的兩個人結婚是基本人權。過去，不同種族、不同階級的人不能結婚，這些歧視與限制漸漸被打破。同樣地，同性婚姻合法化也是往平權的方向努力。我們希望藉由這個活動讓大家更了解我們，也替自己爭取應有的權利。」|tā shuō：「tóng xìng liàn bú shì bìng， wǒ men shēng lái rú cǐ， hé yì xìng liàn méi yǒu liǎng yàng。 wǒ men zhǐ shì ài shàng xiàng tóng xìng bié de rén， dàn zhè bìng méi yǒu cuò。 wǒ men yě xī wàng néng gēn xiāng ài de rén zǔ chéng jiā tíng， hé duì fāng fēn xiǎng wù zhì hé jīng shén shēng huó。 hūn yīn de hé xīn shì ài， shì bàn lǚ zhī jiān de shì， yǔ xìng bié wú guān。 xiāng ài de liǎng gè rén jié hūn shì jī běn rén quán。 guò qù， bù tóng zhǒng zú、 bù tóng jiē jí de rén bù néng jié hūn， zhè xiē qí shì yǔ xiàn zhì jiàn jiàn bèi dǎ pò。 tóng yàng dì， tóng xìng hūn yīn hé fǎ huà yě shì wǎng píng quán de fāng xiàng nǔ lì。 wǒ men xī wàng jí yóu zhè gè huó dòng ràng dà jiā gèng liǎo jiě wǒ men， yě tì zì jǐ zhēng qǔ yīng yǒu de quán lì。」|Anh nói: "Đồng tính không phải bệnh, chúng tôi sinh ra đã vậy, không khác dị tính. Chúng tôi chỉ yêu người cùng giới, điều đó không sai. Chúng tôi cũng mong lập gia đình với người mình yêu, chia sẻ đời sống vật chất và tinh thần. Cốt lõi hôn nhân là tình yêu, là chuyện giữa bạn đời, không liên quan giới tính. Hai người yêu nhau kết hôn là nhân quyền cơ bản. Trước đây người khác chủng tộc, khác giai cấp không được cưới, những kỳ thị này dần bị phá bỏ. Tương tự, hợp pháp hóa hôn nhân đồng giới cũng là nỗ lực hướng tới bình đẳng. Chúng tôi mong qua hoạt động này mọi người hiểu hơn và giành quyền lợi xứng đáng."
記者|說到法律面，一位參與活動的民眾表示：「即使跟同性伴侶生活了一輩子，得到家人朋友的認同，但在法律上，因為沒有擁有正式的合法關係，無法節稅、共享財產、領養小孩，在對方病危時也無法簽署文件，替他做出最好的決定。儘管彼此是生活中最親密的伙伴，卻是法律上的陌生人，不能像異性戀伴侶一樣享有同樣的權益，這是不公平的。同性婚姻合法化能提供法律基礎，讓同性伴侶在財產、醫療、身分等方面享有應有的保障和權利。」|shuō dào fǎ lǜ miàn， yí wèi cān yǔ huó dòng de mín zhòng biǎo shì：「jí shǐ gēn tóng xìng bàn lǚ shēng huó le yí bèi zi， dé dào jiā rén péng yǒu de rèn tóng， dàn zài fǎ lǜ shàng， yīn wèi méi yǒu yōng yǒu zhèng shì de hé fǎ guān xì， wú fǎ jié shuì、 gòng xiǎng cái chǎn、 lǐng yǎng xiǎo hái， zài duì fāng bìng wēi shí yě wú fǎ qiān shǔ wén jiàn， tì tā zuò chū zuì hǎo de jué dìng。 jǐn guǎn bǐ cǐ shì shēng huó zhōng zuì qīn mì de huǒ bàn， què shì fǎ lǜ shàng de mò shēng rén， bù néng xiàng yì xìng liàn bàn lǚ yí yàng xiǎng yǒu tóng yàng de quán yì， zhè shì bù gōng píng de。 tóng xìng hūn yīn hé fǎ huà néng tí gōng fǎ lǜ jī chǔ， ràng tóng xìng bàn lǚ zài cái chǎn、 yī liáo、 shēn fèn děng fāng miàn xiǎng yǒu yīng yǒu de bǎo zhàng hé quán lì。」|Nói đến mặt pháp lý, một người tham gia nói: "Dù sống cả đời với bạn đời đồng giới, được gia đình bạn bè chấp nhận, nhưng về pháp luật vì không có quan hệ hợp pháp chính thức nên không thể tiết kiệm thuế, chia sẻ tài sản, nhận con nuôi, khi đối phương nguy kịch cũng không thể ký giấy tờ quyết định tốt nhất. Dù là bạn đồng hành thân thiết nhất lại là người xa lạ về pháp luật, không hưởng quyền lợi như cặp dị tính, thật bất công. Hợp pháp hóa tạo cơ sở pháp lý để cặp đồng giới được bảo đảm về tài sản, y tế, thân phận."
記者|性別平權雖已是世界潮流，但目前的社會尚未取得共識。許多人會把同志跟性病、複雜的性關係等負面印象連在一起。對此，發起人說：「這完全是一種偏見。同性戀並不等於隨便的性關係，這些問題同樣也會發生在異性戀者身上。當同性婚姻合法化，同性伴侶間的關係就跟異性伴侶一樣了，在法律的規定下得約束自己的行為，有了法律的保障，同性伴侶間的關係就能更穩定，也更願意承諾與負責。」|xìng bié píng quán suī yǐ shì shì jiè cháo liú， dàn mù qián de shè huì shàng wèi qǔ dé gòng shí。 xǔ duō rén huì bǎ tóng zhì gēn xìng bìng、 fù zá de xìng guān xì děng fù miàn yìn xiàng lián zài yì qǐ。 duì cǐ， fā qǐ rén shuō：「zhè wán quán shì yì zhǒng piān jiàn。 tóng xìng liàn bìng bù děng yú suí biàn de xìng guān xì， zhè xiē wèn tí tóng yàng yě huì fā shēng zài yì xìng liàn zhě shēn shàng。 dāng tóng xìng hūn yīn hé fǎ huà， tóng xìng bàn lǚ jiān de guān xì jiù gēn yì xìng bàn lǚ yí yàng le， zài fǎ lǜ de guī dìng xià dé yuē shù zì jǐ de xíng wèi， yǒu le fǎ lǜ de bǎo zhàng， tóng xìng bàn lǚ jiān de guān xì jiù néng gèng wěn dìng， yě gèng yuàn yì chéng nuò yǔ fù zé。」|Bình đẳng giới tuy là trào lưu thế giới nhưng xã hội hiện chưa đạt đồng thuận. Nhiều người gắn đồng tính với bệnh tình dục, quan hệ phức tạp. Về điều này người khởi xướng nói: "Đó hoàn toàn là định kiến. Đồng tính không đồng nghĩa quan hệ tùy tiện, các vấn đề này cũng xảy ra với dị tính. Khi hợp pháp hóa, quan hệ cặp đồng giới như cặp dị tính, phải tự ràng buộc hành vi theo pháp luật, có luật bảo đảm quan hệ ổn định hơn, sẵn lòng cam kết và chịu trách nhiệm hơn."
記者|一位參加活動的異性戀者也表示：「我們常說有情人終成眷屬。承認同志婚姻不是世界末日，也不會破壞家庭價值。不僅不影響異性婚姻者的生活及權利，反而還擴大了保障範圍，讓更多人能按照自己所喜愛的方式生活。」隨著社會越開放、越多元，遊行者希望政府聽見他們的心聲，讓法案保障更多人。以上是記者在和平廣場前的報導。|yí wèi cān jiā huó dòng de yì xìng liàn zhě yě biǎo shì：「wǒ men cháng shuō yǒu qíng rén zhōng chéng juàn shǔ。 chéng rèn tóng zhì hūn yīn bú shì shì jiè mò rì， yě bú huì pò huài jiā tíng jià zhí。 bù jǐn bù yǐng xiǎng yì xìng hūn yīn zhě de shēng huó jí quán lì， fǎn ér hái kuò dà le bǎo zhàng fàn wéi， ràng gèng duō rén néng àn zhào zì jǐ suǒ xǐ ài de fāng shì shēng huó。」 suí zhù shè huì yuè kāi fàng、 yuè duō yuán， yóu xíng zhě xī wàng zhèng fǔ tīng jiàn tā men de xīn shēng， ràng fǎ àn bǎo zhàng gèng duō rén。 yǐ shàng shì jì zhě zài hé píng guǎng chǎng qián de bào dǎo。|Một người dị tính tham gia cũng nói: "Ta thường nói người có tình cuối cùng nên duyên. Thừa nhận hôn nhân đồng giới không phải ngày tận thế, cũng không phá giá trị gia đình. Không những không ảnh hưởng đời sống và quyền lợi người hôn nhân dị tính mà còn mở rộng phạm vi bảo đảm, để nhiều người sống theo cách mình thích." Khi xã hội ngày càng cởi mở đa dạng, người tuần hành mong chính phủ nghe tiếng lòng họ, để dự luật bảo vệ nhiều người hơn. Trên đây là bản tin của phóng viên trước quảng trường Hòa Bình.
主播|鏡頭轉到國外。美國聯邦最高法院昨天做出判決，宣布同性伴侶結婚的權利應受憲法保障。消息一出，社群媒體紛紛換上彩虹旗慶祝這個歷史性的時刻。儘管如此，社會仍有許多反對的聲音。以下是駐外記者來自法國的報導。|jìng tóu zhuǎn dào guó wài。 měi guó lián bāng zuì gāo fǎ yuàn zuó tiān zuò chū pàn jué， xuān bù tóng xìng bàn lǚ jié hūn de quán lì yīng shòu xiàn fǎ bǎo zhàng。 xiāo xī yì chū， shè qún méi tǐ fēn fēn huàn shàng cǎi hóng qí qìng zhù zhè gè lì shǐ xìng de shí kè。 jǐn guǎn rú cǐ， shè huì réng yǒu xǔ duō fǎn duì de shēng yīn。 yǐ xià shì zhù wài jì zhě lái zì fǎ guó de bào dǎo。|Máy quay chuyển ra nước ngoài. Tòa án Tối cao liên bang Mỹ hôm qua phán quyết quyền kết hôn của cặp đồng giới được hiến pháp bảo vệ. Tin vừa ra, mạng xã hội thi nhau đổi cờ cầu vồng mừng thời khắc lịch sử. Dù vậy xã hội vẫn có nhiều tiếng phản đối. Sau đây là bản tin từ phóng viên thường trú tại Pháp.
記者|當許多人正在歡慶美國聯邦最高法院的判決時，巴黎市中心擠進了數萬民眾反對同性婚姻合法化。我們來聽聽他們怎麼說。|dāng xǔ duō rén zhèng zài huān qìng měi guó lián bāng zuì gāo fǎ yuàn de pàn jué shí， bā lí shì zhōng xīn jǐ jìn le shù wàn mín zhòng fǎn duì tóng xìng hūn yīn hé fǎ huà。 wǒ men lái tīng tīng tā men zěn me shuō。|Khi nhiều người đang mừng phán quyết của Tòa tối cao Mỹ, trung tâm Paris chật hàng chục nghìn người phản đối hợp pháp hóa hôn nhân đồng giới. Hãy nghe họ nói.
民眾一|從生物觀點來看，動物的本能之一就是生存，而繁衍下一代是生存的方式之一。為了繁衍下一代而去尋找異性交配，這是自然法則。同性戀是不自然的，也不是婚姻制度裡預期的對象。因為婚姻的定義中需要一男一女的結合，唯有如此，雙方才能在生理和心理各方面互補，自然地生育下一代。然而，同性伴侶無法擁有自己的孩子，男男、女女的組合違反自然，因此同性戀的婚姻是不可能成立的。|cóng shēng wù guān diǎn lái kàn， dòng wù de běn néng zhī yí jiù shì shēng cún， ér fán yǎn xià yí dài shì shēng cún de fāng shì zhī yī。 wèi le fán yǎn xià yí dài ér qù xún zhǎo yì xìng jiāo pèi， zhè shì zì rán fǎ zé。 tóng xìng liàn shì bú zì rán de， yě bú shì hūn yīn zhì dù lǐ yù qī de duì xiàng。 yīn wèi hūn yīn de dìng yì zhōng xū yào yì nán yì nǚ de jié hé， wéi yǒu rú cǐ， shuāng fāng cái néng zài shēng lǐ hé xīn lǐ gè fāng miàn hù bǔ， zì rán dì shēng yù xià yí dài。 rán ér， tóng xìng bàn lǚ wú fǎ yōng yǒu zì jǐ de hái zi， nán nán、 nǚ nǚ de zǔ hé wéi fǎn zì rán， yīn cǐ tóng xìng liàn de hūn yīn shì bù kě néng chéng lì de。|Nhìn từ sinh học, một trong những bản năng động vật là sinh tồn, mà sinh sôi thế hệ sau là cách sinh tồn. Tìm bạn khác giới giao phối để sinh sôi là quy luật tự nhiên. Đồng tính không tự nhiên, cũng không phải đối tượng dự kiến trong chế độ hôn nhân. Vì định nghĩa hôn nhân cần một nam một nữ kết hợp, chỉ vậy hai bên mới bổ sung nhau về sinh lý và tâm lý, tự nhiên sinh con. Tuy nhiên cặp đồng giới không thể có con riêng, tổ hợp nam nam, nữ nữ trái tự nhiên nên hôn nhân đồng tính không thể thành lập.
民眾二|人類為了穩定社會結構而發展出婚姻制度，因此，婚姻不只是兩個人的自由選擇，更是與社會全體有關的公共議題。同性婚姻合法化將徹底改變婚姻、家庭的定義。我們需要重新解釋這些傳統詞彙，例如什麼是爸爸、媽媽、夫妻？孩子要怎麼稱呼他們？而什麼又是「家」？同性伴侶無法生兒育女，我們如何靠家庭來維持建構社會的基礎？這是一場社會革命，不能只是以「包容」「尊重多元」做為口號，而無視婚姻在人類文化上的意義，要求大眾改變婚姻的基本概念。|rén lèi wèi le wěn dìng shè huì jié gòu ér fā zhǎn chū hūn yīn zhì dù， yīn cǐ， hūn yīn bù zhǐ shì liǎng gè rén de zì yóu xuǎn zé， gèng shì yǔ shè huì quán tǐ yǒu guān de gōng gòng yì tí。 tóng xìng hūn yīn hé fǎ huà jiāng chè dǐ gǎi biàn hūn yīn、 jiā tíng de dìng yì。 wǒ men xū yào chóng xīn jiě shì zhè xiē chuán tǒng cí huì， lì rú shén me shì bà bà、 mā mā、 fū qī？ hái zi yào zěn me chēng hū tā men？ ér shén me yòu shì 「jiā」？ tóng xìng bàn lǚ wú fǎ shēng ér yù nǚ， wǒ men rú hé kào jiā tíng lái wéi chí jiàn gòu shè huì de jī chǔ？ zhè shì yì chǎng shè huì gé mìng， bù néng zhǐ shì yǐ 「bāo róng」「zūn zhòng duō yuán」 zuò wèi kǒu hào， ér wú shì hūn yīn zài rén lèi wén huà shàng de yì yì， yāo qiú dà zhòng gǎi biàn hūn yīn de jī běn gài niàn。|Loài người phát triển chế độ hôn nhân để ổn định cấu trúc xã hội, nên hôn nhân không chỉ là lựa chọn tự do của hai người mà còn là vấn đề công cộng liên quan toàn xã hội. Hợp pháp hóa sẽ thay đổi triệt để định nghĩa hôn nhân và gia đình. Cần giải thích lại các từ truyền thống như bố, mẹ, vợ chồng là gì? Con gọi họ thế nào? Còn "gia đình" là gì? Cặp đồng giới không sinh con, ta dựa vào gia đình duy trì nền tảng xã hội thế nào? Đây là cuộc cách mạng xã hội, không thể chỉ lấy "bao dung", "tôn trọng đa dạng" làm khẩu hiệu mà phớt lờ ý nghĩa hôn nhân trong văn hóa, đòi công chúng thay đổi khái niệm cơ bản về hôn nhân.
民眾三|支持者認為每個人對婚姻都有自主權，有選擇伴侶的自由，法律、政府或任何人都不該干涉或破壞。按照這個邏輯，彼此相愛、願意做出承諾、也願意負擔婚姻責任的兩個人，都應該納入法律保障範圍。那麼為什麼同性戀者可以，相愛的父女、母子、第三者卻不可以呢？自由不能拿來當做同性婚姻合法化的原則，因為法律不可能在同一個原則之下，只保障某些人而不保障其他人。一旦讓同性婚姻合法化，無異間接鼓勵其他形式的伴侶關係，讓亂倫、不倫躲在自由的保護傘下有機可乘。|zhī chí zhě rèn wèi měi gè rén duì hūn yīn dōu yǒu zì zhǔ quán， yǒu xuǎn zé bàn lǚ de zì yóu， fǎ lǜ、 zhèng fǔ huò rèn hé rén dōu bù gāi gān shè huò pò huài。 àn zhào zhè gè luó jí， bǐ cǐ xiāng ài、 yuàn yì zuò chū chéng nuò、 yě yuàn yì fù dān hūn yīn zé rèn de liǎng gè rén， dōu yīng gāi nà rù fǎ lǜ bǎo zhàng fàn wéi。 nà me wèi shén me tóng xìng liàn zhě kě yǐ， xiāng ài de fù nǚ、 mǔ zi、 dì sān zhě què bù kě yǐ ne？ zì yóu bù néng ná lái dāng zuò tóng xìng hūn yīn hé fǎ huà de yuán zé， yīn wèi fǎ lǜ bù kě néng zài tóng yí gè yuán zé zhī xià， zhǐ bǎo zhàng mǒu xiē rén ér bù bǎo zhàng qí tā rén。 yí dàn ràng tóng xìng hūn yīn hé fǎ huà， wú yì jiān jiē gǔ lì qí tā xíng shì de bàn lǚ guān xì， ràng luàn lún、 bù lún duǒ zài zì yóu de bǎo hù sǎn xià yǒu jī kě chéng。|Người ủng hộ cho rằng ai cũng có quyền tự chủ hôn nhân, tự do chọn bạn đời, pháp luật, chính phủ hay ai cũng không nên can thiệp. Theo logic đó, hai người yêu nhau, sẵn sàng cam kết và gánh trách nhiệm hôn nhân đều nên được pháp luật bảo vệ. Vậy sao đồng tính được mà cha con, mẹ con yêu nhau, người thứ ba lại không? Tự do không thể làm nguyên tắc hợp pháp hóa vì luật không thể cùng một nguyên tắc mà chỉ bảo vệ một số người. Một khi hợp pháp hóa hôn nhân đồng giới thì chẳng khác gì gián tiếp khuyến khích các hình thức quan hệ khác, để loạn luân, ngoại tình nấp dưới chiếc ô tự do mà lợi dụng.
記者|當白宮、巴黎鐵塔等世界地標打上彩虹燈光的同時，這些反對的聲音也不容忽視。人類社會將如何發展？有賴各界不斷對話與激辯。記者來自巴黎的報導。鏡頭交還給主播。|dāng bái gōng、 bā lí tiě tǎ děng shì jiè dì biāo dǎ shàng cǎi hóng dēng guāng de tóng shí， zhè xiē fǎn duì de shēng yīn yě bù róng hū shì。 rén lèi shè huì jiāng rú hé fā zhǎn？ yǒu lài gè jiè bú duàn duì huà yǔ jī biàn。 jì zhě lái zì bā lí de bào dǎo。 jìng tóu jiāo hái gěi zhǔ bō。|Khi Nhà Trắng, tháp Eiffel và các địa danh thế giới được chiếu đèn cầu vồng, những tiếng phản đối này cũng không thể bỏ qua. Xã hội loài người sẽ phát triển ra sao? Phụ thuộc vào đối thoại và tranh luận không ngừng của các giới. Phóng viên đưa tin từ Paris. Trả lại ống kính cho người dẫn.`}}]};
