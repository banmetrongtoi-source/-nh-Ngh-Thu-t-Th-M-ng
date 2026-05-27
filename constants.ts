import React from 'react';
import {
  SnowIcon, RainIcon, CherryBlossomIcon, FogIcon, CloudIcon, LeafIcon, HeartIcon, SparklesIcon, FireworksIcon, BubbleIcon, FlowerIcon, PaperFlowerIcon,
  LayoutSingleIcon, LayoutFilmStripIcon, LayoutGridIcon, LayoutDynamicIcon, LayoutPortraitFocusIcon, LayoutStoryIcon, LayoutCompareIcon, LayoutTrioIcon, LayoutAngleIcon, LayoutCollageIcon,
  LayoutZigZagIcon, LayoutLShapedIcon, LayoutArcIcon, LayoutDiamondIcon,
} from './components/IconComponents';
import { Concept, Style, LayoutGroup, AspectRatio, ConceptGroup } from './types';

const WINTER_PREAMBLE = " Yêu cầu bố cục: 2 khung hình (trên: cận mặt cảm xúc, dưới: toàn/trung cảnh). Tone: Cold–Warm cinematic. Tuyết rơi nhẹ.";
const MULTILAYER_PREAMBLE = " Yêu cầu bố cục 3 lớp ảnh: Lớp 1: Cận mặt (close-up) thể hiện cảm xúc. Lớp 2: Bán thân (medium shot) thể hiện hành động. Lớp 3: Toàn thân (full shot) trong bối cảnh. Tone: cinematic. Tuyết rơi.";

// 1. CONCEPTS
export const CONCEPT_GROUPS: ConceptGroup[] = [
  {
    title: "Hiệu ứng thời tiết & Tự nhiên",
    concepts: [
      { id: 'tuyet', name: 'Tuyết Rơi', promptFragment: 'khung cảnh tuyết rơi lãng mạn, những bông tuyết trắng xóa nhẹ nhàng bay trong gió', icon: SnowIcon },
      { id: 'mua', name: 'Mưa Rơi', promptFragment: 'dưới một cơn mưa bất chợt, những hạt mưa lấp lánh như pha lê', icon: RainIcon },
      { id: 'hoaanhdao', name: 'Hoa Anh Đào', promptFragment: 'hàng ngàn cánh hoa anh đào bay trong gió, tạo nên một khung cảnh thơ mộng', icon: CherryBlossomIcon },
      { id: 'hoaroi', name: 'Hoa Rơi', promptFragment: 'một cơn mưa hoa lãng mạn với nhiều loại hoa khác nhau như hoa hồng, hoa cúc, hoa oải hương đang rơi xung quanh', icon: FlowerIcon },
      { id: 'hoagiay', name: 'Hoa Giấy Rơi', promptFragment: 'khung cảnh lãng mạn với những bông hoa giấy nhiều màu sắc rơi nhẹ nhàng như một cơn mưa hoa', icon: PaperFlowerIcon },
      { id: 'suongmu', name: 'Sương Mù', promptFragment: 'trong làn sương mù huyền ảo buổi sớm, mọi thứ trở nên mờ ảo và bí ẩn', icon: FogIcon },
      { id: 'may', name: 'Mây Trôi', promptFragment: 'nằm trên một đám mây bồng bềnh, trôi lơ lửng giữa bầu trời xanh ngắt', icon: CloudIcon },
      { id: 'la', name: 'Lá Rơi', promptFragment: 'con đường ngập tràn lá vàng rơi của mùa thu, tạo nên một thảm lá đầy màu sắc', icon: LeafIcon },
      { id: 'tim', name: 'Trái Tim Bay', promptFragment: 'hàng trăm trái tim 3D nhỏ màu hồng và đỏ bay xung quanh một cách diệu kỳ', icon: HeartIcon },
      { id: 'kimtuyen', name: 'Kim Tuyến', promptFragment: 'một cơn mưa kim tuyến vàng và bạc lấp lánh đang rơi xuống, tạo hiệu ứng ma thuật', icon: SparklesIcon },
      { id: 'phaohoa', name: 'Pháo Hoa', promptFragment: 'dưới bầu trời đêm rực rỡ pháo hoa, ánh sáng nhiều màu sắc chiếu rọi', icon: FireworksIcon },
      { id: 'bongbong', name: 'Bong Bóng', promptFragment: 'giữa một không gian đầy bong bóng xà phòng trong suốt, phản chiếu ánh sáng cầu vồng', icon: BubbleIcon },
    ]
  },
  {
    title: "❄️ Cảm Xúc Mùa Đông",
    concepts: [
        { id: 'c_wm', name: 'Ký Ức Mùa Đông', promptFragment: `Concept "Ký Ức Mùa Đông".
- **Hành động & Bối cảnh:** Đứng trầm mặc giữa rừng tuyết cổ thụ, ánh mắt nhìn xa xăm, một tay khẽ chạm vào thân cây phủ tuyết.
- **Trang phục:** Áo khoác dạ cashmere dáng dài màu beige của Max Mara, bên trong là váy len cổ lọ màu trắng ngà. Boots da cao cổ màu nâu socola.
- **Phụ kiện:** Khăn choàng lụa mỏng màu kem, găng tay da.
- **Kiểu tóc:** Tóc búi thấp lỏng tay, vài lọn tóc mai mềm mại rơi xuống.
- **Makeup:** Lớp nền trong veo, má ửng hồng tự nhiên, môi màu nude đất trầm ấm.
- **Thần thái:** Trầm tư, hoài niệm, thanh lịch.` + WINTER_PREAMBLE, icon: SnowIcon },
      { id: 'c_eos', name: 'Tiếng Vọng Của Tuyết', promptFragment: `Concept "Tiếng Vọng Của Tuyết".
- **Hành động & Bối cảnh:** Quay lưng bước đi chậm rãi vào màn sương tuyết, đầu hơi ngoảnh lại, ánh mắt lạc lõng, kiếm tìm.
- **Trang phục:** Váy lụa organza màu xanh băng giá, khoác ngoài áo choàng lông vũ trắng muốt dáng cape.
- **Phụ kiện:** Hoa tai kim cương hình bông tuyết.
- **Kiểu tóc:** Tóc tết đuôi cá lệch vai, đính những hạt ngọc trai nhỏ.
- **Makeup:** Mắt khói màu xám bạc, highlighter bắt sáng, môi màu mận chín.
- **Thần thái:** Cô độc, bí ẩn, ma mị và quyến rũ.` + WINTER_PREAMBLE, icon: SnowIcon },
      { id: 'c_tfs', name: 'Bông Tuyết Đầu Mùa', promptFragment: `Concept "Bông Tuyết Đầu Mùa".
- **Hành động & Bối cảnh:** Ngước mặt lên trời, mỉm cười rạng rỡ, đưa tay trần ra hứng những bông tuyết đầu mùa.
- **Trang phục:** Áo len oversized màu kem dệt kim, mặc cùng chân váy xếp ly. Đi boots UGG cổ ngắn.
- **Phụ kiện:** Mũ beret len màu đỏ rượu, khăn choàng cổ caro.
- **Kiểu tóc:** Tóc xõa tự nhiên, uốn sóng nhẹ.
- **Makeup:** Trong veo như sương, má ửng hồng đào, môi căng mọng màu dâu tây.
- **Thần thái:** Trong sáng, hạnh phúc, ngây thơ.` + WINTER_PREAMBLE, icon: SnowIcon },
      { id: 'c_bol', name: 'Hơi Thở Của Ánh Sáng', promptFragment: `Concept "Hơi Thở Của Ánh Sáng".
- **Hành động & Bối cảnh:** Đi giữa một luồng sáng vàng ấm áp xuyên qua rừng tuyết, mỉm cười nhẹ nhàng, mắt nhắm hờ cảm nhận.
- **Trang phục:** Váy maxi len màu trắng sữa, dệt họa tiết nổi. Khoác hờ áo cardigan lông xù.
- **Phụ kiện:** Dây chuyền vàng mảnh có mặt trời nhỏ.
- **Kiểu tóc:** Tóc dài uốn lọn to bồng bềnh.
- **Makeup:** Tông cam ấm, nhấn vào đôi mắt lấp lánh nhũ vàng, môi son bóng màu cam đào.
- **Thần thái:** Ấm áp, yên bình, tinh khôi.` + WINTER_PREAMBLE, icon: SnowIcon },
      { id: 'c_ft', name: 'Thời Gian Ngưng Đọng', promptFragment: `Concept "Thời Gian Ngưng Đọng".
- **Hành động & Bối cảnh:** Đứng yên bất động giữa không gian trắng xóa, mắt nhắm lại, tuyết phủ nhẹ lên tóc và vai áo.
- **Trang phục:** Một chiếc đầm Haute Couture màu bạc của Dior, thiết kế bất đối xứng, chất liệu cứng tạo khối.
- **Phụ kiện:** Không có, để tập trung vào sự tĩnh lặng.
- **Kiểu tóc:** Tóc được vuốt gel ướt át, ép sát vào đầu một cách nghệ thuật.
- **Makeup:** Làn da được phủ một lớp nhũ bạc mịn như sương giá, môi màu nude lạnh.
- **Thần thái:** Tĩnh lặng, thoát tục, như một bức tượng điêu khắc.` + WINTER_PREAMBLE, icon: SnowIcon },
      { id: 'c_awt', name: 'Dòng Suy Tư Mùa Đông', promptFragment: `Concept "Dòng Suy Tư Mùa Đông".
- **Hành động & Bối cảnh:** Ngồi trên một chiếc ghế gỗ ngoài trời, tay cầm một cuốn sổ da cũ và cây bút máy, ánh mắt trầm tư.
- **Trang phục:** Bộ suit vải tweed kiểu Anh, mặc cùng áo sơ mi cổ cao.
- **Phụ kiện:** Kính gọng tròn, đồng hồ đeo tay cổ điển.
- **Kiểu tóc:** Tóc búi gọn gàng kiểu tri thức.
- **Makeup:** Tự nhiên, nhấn vào hàng lông mày được chải chuốt cẩn thận.
- **Thần thái:** Trí thức, sâu sắc, cổ điển.` + WINTER_PREAMBLE, icon: SnowIcon },
      { id: 'c_s', name: 'Tĩnh Lặng', promptFragment: `Concept "Tĩnh Lặng".
- **Hành động & Bối cảnh:** Đứng giữa một cánh đồng tuyết phẳng lặng không một dấu chân, nhìn thẳng vào ống kính.
- **Trang phục:** Trang phục tối giản màu đen tuyền, áo cổ lọ và quần ống rộng, tạo sự tương phản mạnh.
- **Phụ kiện:** Một chiếc nhẫn bạc đơn giản.
- **Kiểu tóc:** Tóc bob ngắn, cắt bằng, sắc sảo.
- **Makeup:** Mắt kẻ eyeliner sắc nét, môi đỏ đậm.
- **Thần thái:** Mạnh mẽ, tĩnh tại, đầy nội lực.` + WINTER_PREAMBLE, icon: SnowIcon },
      { id: 'c_wc', name: 'Lời Thì Thầm Của Băng Giá', promptFragment: `Concept "Lời Thì Thầm Của Băng Giá".
- **Hành động & Bối cảnh:** Nghiêng đầu, hé môi như đang thì thầm với cơn gió lạnh, tóc bay nhẹ.
- **Trang phục:** Áo hai dây lụa mỏng manh màu bạc, khoác hờ áo blazer oversized.
- **Phụ kiện:** Khuyên tai dài, mảnh.
- **Kiểu tóc:** Tóc được sấy rối một cách tự nhiên.
- **Makeup:** Làn da căng bóng, môi được tô son bóng không màu.
- **Thần thái:** Gợi cảm, mong manh, bí ẩn.` + WINTER_PREAMBLE, icon: SnowIcon },
      { id: 'c_ws', name: 'Đơn Độc Giữa Miền Trắng', promptFragment: `Concept "Đơn Độc Giữa Miền Trắng".
- **Hành động & Bối cảnh:** Đứng một mình trên đỉnh đồi tuyết, mắt hướng về phía chân trời xa xăm.
- **Trang phục:** Áo choàng len trắng khổng lồ, trùm kín người.
- **Phụ kiện:** Chỉ có đôi boots đi tuyết chuyên dụng.
- **Kiểu tóc:** Tóc được giấu trong mũ áo choàng.
- **Makeup:** Để mặt mộc, chỉ có đôi môi hơi khô nẻ vì lạnh.
- **Thần thái:** Đơn độc, mạnh mẽ, hòa mình với thiên nhiên.` + WINTER_PREAMBLE, icon: SnowIcon },
      { id: 'c_sp', name: 'Bài Thơ Câm Lặng', promptFragment: `Concept "Bài Thơ Câm Lặng".
- **Hành động & Bối cảnh:** Bước đi nhẹ nhàng không dấu vết trên tuyết, tuyết rơi quanh người, ánh mắt sâu thẳm.
- **Trang phục:** Áo dài Việt Nam bằng lụa aisen Mỹ A màu đen, huyền bí.
- **Phụ kiện:** Trâm cài tóc bằng ngọc trai.
- **Kiểu tóc:** Tóc dài đen tuyền buông xõa.
- **Makeup:** Nền nã, nhấn vào đôi môi tô son lòng trong.
- **Thần thái:** Dịu dàng, sâu lắng, đậm chất thơ.` + WINTER_PREAMBLE, icon: SnowIcon },
    ]
  },
  {
    title: "☕ Nhiệt Ấm Trong Lạnh Giá",
    concepts: [
        { id: 'c_wb', name: 'Hơi Thở Ấm Nồng', promptFragment: `Concept "Hơi Thở Ấm Nồng".
- **Hành động & Bối cảnh:** Cận cảnh gương mặt ửng hồng, phà hơi thở ấm áp tạo thành làn khói trong không khí lạnh, tay cầm tách trà nóng.
- **Trang phục:** Áo len cổ lọ màu gừng ấm, chất len xù.
- **Phụ kiện:** Tách trà gốm sứ thủ công.
- **Kiểu tóc:** Tóc buộc nửa đầu, phần mái uốn nhẹ.
- **Makeup:** Má hồng say rượu, môi màu cam cháy.
- **Thần thái:** Ấm áp, gần gũi, dễ chịu.` + WINTER_PREAMBLE, icon: SnowIcon },
      { id: 'c_utl', name: 'Dưới Ánh Đèn Vàng', promptFragment: `Concept "Dưới Ánh Đèn Vàng".
- **Hành động & Bối cảnh:** Đứng dưới một ngọn đèn đường cổ điển trong đêm tuyết rơi, ánh sáng vàng ấm áp chiếu lên gương mặt.
- **Trang phục:** Áo khoác trench coat màu mật ong, thắt đai gọn gàng.
- **Phụ kiện:** Một chiếc ô màu đen.
- **Kiểu tóc:** Tóc uốn sóng kiểu retro.
- **Makeup:** Môi đỏ cổ điển, mắt kẻ viền mảnh.
- **Thần thái:** Cổ điển, lãng mạn, như trong một bộ phim xưa.` + WINTER_PREAMBLE, icon: SnowIcon },
      { id: 'c_acow', name: 'Tách Trà Mùa Đông', promptFragment: `Concept "Tách Trà Mùa Đông".
- **Hành động & Bối cảnh:** Gương mặt mơ màng, hai tay ôm một ly chocolate nóng hổi, nhìn ra ngoài cửa sổ tuyết rơi.
- **Trang phục:** Bộ pijama lụa cao cấp, khoác ngoài áo choàng len dệt kim.
- **Phụ kiện:** Chiếc ly sứ có họa tiết Noel.
- **Kiểu tóc:** Tóc búi củ tỏi messy.
- **Makeup:** Tự nhiên như vừa ngủ dậy, chỉ có chút son dưỡng.
- **Thần thái:** Thư giãn, bình yên, tận hưởng.` + WINTER_PREAMBLE, icon: SnowIcon },
      { id: 'c_bos', name: 'Gò Má Ửng Hồng', promptFragment: `Concept "Gò Má Ửng Hồng".
- **Hành động & Bối cảnh:** Cười khúc khích, hai tay áp lên gò má đỏ hồng vì lạnh.
- **Trang phục:** Áo phao màu hồng pastel, mũ len có quả bông.
- **Phụ kiện:** Găng tay len cùng màu.
- **Kiểu tóc:** Tóc tết hai bên.
- **Makeup:** Nhấn đậm vào má hồng, tàn nhang giả.
- **Thần thái:** Dễ thương, tinh nghịch, trẻ trung.` + WINTER_PREAMBLE, icon: SnowIcon },
      { id: 'c_wg', name: 'Ánh Lửa Mùa Đông', promptFragment: `Concept "Ánh Lửa Mùa Đông".
- **Hành động & Bối cảnh:** Ngồi bên đống lửa trại, ánh lửa bập bùng phản chiếu lên gương mặt và đôi mắt.
- **Trang phục:** Áo khoác da cừu, quần jeans và boots hiking.
- **Phụ kiện:** Cầm một que marshmallow đang nướng.
- **Kiểu tóc:** Tóc xõa tự nhiên, hơi rối.
- **Makeup:** Da rám nắng khỏe khoắn, môi màu cam đất.
- **Thần thái:** Phiêu lưu, ấm cúng, tự do.` + WINTER_PREAMBLE, icon: SnowIcon },
      { id: 'c_gs', name: 'Tuyết Nắng Vàng', promptFragment: `Concept "Tuyết Nắng Vàng".
- **Hành động & Bối cảnh:** Đứng giữa nền tuyết xanh trong giờ vàng (golden hour), ánh nắng hoàng hôn nhuộm vàng cả không gian.
- **Trang phục:** Váy dạ hội sequin màu vàng gold lấp lánh.
- **Phụ kiện:** Vòng cổ kim cương statement.
- **Kiểu tóc:** Tóc búi cao kiểu Hollywood.
- **Makeup:** Mắt nhũ vàng, môi son đỏ cam.
- **Thần thái:** Sang trọng, rực rỡ, quyến rũ.` + WINTER_PREAMBLE, icon: SnowIcon },
      { id: 'c_tlw', name: 'Hơi Ấm Cuối Cùng', promptFragment: `Concept "Hơi Ấm Cuối Cùng".
- **Hành động & Bối cảnh:** Đứng trong một căn nhà gỗ, nhìn qua ô cửa sổ phủ tuyết, tay cầm một ngọn nến.
- **Trang phục:** Váy ngủ lụa màu kem.
- **Phụ kiện:** Ngọn nến trong một chân nến cổ.
- **Kiểu tóc:** Tóc xõa mềm mại.
- **Makeup:** Tự nhiên, ánh nến làm nổi bật sự ấm áp của làn da.
- **Thần thái:** Mong manh, hoài niệm, chờ đợi.` + WINTER_PREAMBLE, icon: SnowIcon },
      { id: 'c_eiw', name: 'Đốm Lửa Tàn Giữa Miền Trắng', promptFragment: `Concept "Đốm Lửa Tàn Giữa Miền Trắng".
- **Hành động & Bối cảnh:** Biểu cảm ấm áp, rạng rỡ tỏa ra giữa nền tuyết trắng lạnh lẽo.
- **Trang phục:** Một chiếc váy dạ hội màu đỏ rực của Valentino.
- **Phụ kiện:** Son môi đỏ cùng tông.
- **Kiểu tóc:** Tóc đen nhánh, cắt ngắn cá tính.
- **Makeup:** Làn da trắng sứ, môi đỏ mọng.
- **Thần thái:** Nổi bật, đầy sức sống, là trung tâm của sự chú ý.` + WINTER_PREAMBLE, icon: SnowIcon },
      { id: 'c_st', name: 'Cái Chạm Nhẹ Nhàng', promptFragment: `Concept "Cái Chạm Nhẹ Nhàng".
- **Hành động & Bối cảnh:** Đưa tay trần vuốt nhẹ lên một cành cây phủ đầy tuyết, ánh mắt dịu dàng.
- **Trang phục:** Áo len angora màu trắng, mềm mại như mây.
- **Phụ kiện:** Nhẫn bạc trơn.
- **Kiểu tóc:** Tóc để tự nhiên.
- **Makeup:** Trong veo, nhấn vào hàng mi dài cong vút.
- **Thần thái:** Dịu dàng, tinh tế, yêu thiên nhiên.` + WINTER_PREAMBLE, icon: SnowIcon },
      { id: 'c_sh', name: 'Tuyết Rơi Và Nhịp Đập Con Tim', promptFragment: `Concept "Tuyết Rơi Và Nhịp Đập Con Tim".
- **Hành động & Bối cảnh:** Nụ cười mỉm, một tay ôm chặt áo khoác trước ngực như cảm nhận nhịp tim.
- **Trang phục:** Áo khoác phao dáng dài, bên trong là áo hoodie.
- **Phụ kiện:** Tai nghe headphone.
- **Kiểu tóc:** Tóc buộc đuôi ngựa cao.
- **Makeup:** Trẻ trung, năng động.
- **Thần thái:** Hồi hộp, hạnh phúc, đang yêu.` + WINTER_PREAMBLE, icon: SnowIcon },
    ]
  },
  {
    title: "💌 Ký Ức & Lãng Mạn",
    concepts: [
        { id: 'c_tlu', name: 'Bức Thư Chưa Gửi', promptFragment: `Concept "Bức Thư Chưa Gửi".
- **Hành động & Bối cảnh:** Ánh mắt tiếc nuối, tay cầm một phong thư cũ, đứng ở một sân ga tuyết.
- **Trang phục:** Bộ đồ vintage, áo măng tô và mũ cloche.
- **Phụ kiện:** Vali da cổ điển.
- **Kiểu tóc:** Tóc uốn sóng kiểu thập niên 20.
- **Makeup:** Môi màu rượu chát, mắt hơi buồn.
- **Thần thái:** Hoài cổ, tiếc nuối, lãng mạn buồn.` + WINTER_PREAMBLE, icon: SnowIcon },
      { id: 'c_gw', name: 'Tạm Biệt Mùa Đông', promptFragment: `Concept "Tạm Biệt Mùa Đông".
- **Hành động & Bối cảnh:** Nụ cười nhẹ, quay lưng đi về phía ánh nắng cuối đông, bóng lưng đổ dài trên tuyết.
- **Trang phục:** Váy hoa nhí, khoác ngoài áo len mỏng.
- **Phụ kiện:** Một giỏ hoa nhỏ.
- **Kiểu tóc:** Tóc tết vương miện.
- **Makeup:** Tươi tắn, rạng rỡ.
- **Thần thái:** Lạc quan, hy vọng, khởi đầu mới.` + WINTER_PREAMBLE, icon: SnowIcon },
      { id: 'c_ms', name: 'Tuyết Rơi Nửa Đêm', promptFragment: `Concept "Tuyết Rơi Nửa Đêm".
- **Hành động & Bối cảnh:** Bước đi một mình trên con phố vắng lúc nửa đêm, ánh đèn neon của cửa hiệu phản chiếu qua đôi mắt.
- **Trang phục:** Áo khoác da biker, quần skinny jeans và bốt cao gót.
- **Phụ kiện:** Khuyên tai vòng lớn, clutch bạc.
- **Kiểu tóc:** Tóc nhuộm màu cá tính.
- **Makeup:** Mắt khói đậm, môi màu nude.
- **Thần thái:** Lạnh lùng, cá tính, một chút nổi loạn.` + WINTER_PREAMBLE, icon: SnowIcon },
      { id: 'c_wv', name: 'Tiếng Nói Mùa Đông', promptFragment: `Concept "Tiếng Nói Mùa Đông".
- **Hành động & Bối cảnh:** Đứng giữa rừng, nhắm mắt, nghiêng đầu như đang lắng nghe tiếng gió rít qua kẽ lá.
- **Trang phục:** Trang phục phong cách bohemian, váy maxi nhiều lớp, áo khoác tua rua.
- **Phụ kiện:** Vòng cổ dreamcatcher, nhiều nhẫn bạc.
- **Kiểu tóc:** Tóc tết lỏng, cài vài chiếc lông vũ.
- **Makeup:** Tự nhiên, có thể vẽ vài biểu tượng nhỏ trên má.
- **Thần thái:** Phóng khoáng, tâm linh, hòa hợp với tự nhiên.` + WINTER_PREAMBLE, icon: SnowIcon },
      { id: 'c_tdwm', name: 'Ngày Ta Gặp Gỡ', promptFragment: `Concept "Ngày Ta Gặp Gỡ".
- **Hành động & Bối cảnh:** Ánh mắt dịu dàng, tay đưa ra như muốn chạm vào một bóng hình vô hình trong không khí.
- **Trang phục:** Váy trắng tinh khôi.
- **Phụ kiện:** Không có.
- **Kiểu tóc:** Tóc xõa tự nhiên.
- **Makeup:** Trong veo, ngây thơ.
- **Thần thái:** Dịu dàng, tinh khiết, đầy mộng mơ.` + WINTER_PREAMBLE, icon: SnowIcon },
      { id: 'c_sc', name: 'Lời Tỏ Tình Dưới Tuyết', promptFragment: `Concept "Lời Tỏ Tình Dưới Tuyết".
- **Hành động & Bối cảnh:** Cận mắt rực sáng hạnh phúc, hai tay ôm một bó hoa hồng đỏ thắm giữa trời tuyết.
- **Trang phục:** Váy len màu đỏ, khoác ngoài áo choàng trắng.
- **Phụ kiện:** Bó hoa hồng nhung.
- **Kiểu tóc:** Tóc uốn lọn xoăn to.
- **Makeup:** Rạng rỡ, môi đỏ, má hồng.
- **Thần thái:** Hạnh phúc vỡ òa, lãng mạn.` + WINTER_PREAMBLE, icon: SnowIcon },
      { id: 'c_moca', name: 'Giai Điệu Lạnh Giá', promptFragment: `Concept "Giai Điệu Lạnh Giá".
- **Hành động & Bối cảnh:** Đeo tai nghe, mắt nhắm, biểu cảm phiêu theo điệu nhạc giữa trời tuyết.
- **Trang phục:** Phong cách street style, áo hoodie, quần jogger, giày sneaker.
- **Phụ kiện:** Tai nghe headphone sành điệu.
- **Kiểu tóc:** Tóc buộc cao.
- **Makeup:** Cá tính, có thể là môi thâm.
- **Thần thái:** Cool ngầu, tách biệt, chìm đắm trong thế giới riêng.` + WINTER_PREAMBLE, icon: SnowIcon },
      { id: 'c_wp', name: 'Lời Hứa Mùa Đông', promptFragment: `Concept "Lời Hứa Mùa Đông".
- **Hành động & Bối cảnh:** Mắt nhìn xa, tay giơ lên, trên ngón áp út là một chiếc nhẫn lấp lánh.
- **Trang phục:** Váy dạ hội màu xanh sapphire.
- **Phụ kiện:** Chiếc nhẫn kim cương là điểm nhấn.
- **Kiểu tóc:** Tóc búi cao sang trọng.
- **Makeup:** Tinh tế, sang trọng.
- **Thần thái:** Hạnh phúc, tin tưởng, viên mãn.` + WINTER_PREAMBLE, icon: SnowIcon },
      { id: 'c_itss', name: 'Trong Sự Tĩnh Lặng Của Tuyết', promptFragment: `Concept "Trong Sự Tĩnh Lặng Của Tuyết".
- **Hành động & Bối cảnh:** Ánh mắt buồn, ngồi một mình trên chiếc ghế dài trong công viên đã phủ đầy tuyết.
- **Trang phục:** Áo khoác đen, dáng rộng, trông cô đơn.
- **Phụ kiện:** Khăn choàng che nửa khuôn mặt.
- **Kiểu tóc:** Tóc rối.
- **Makeup:** Nhợt nhạt, như không trang điểm.
- **Thần thái:** Buồn bã, cô đơn, lạc lõng.` + WINTER_PREAMBLE, icon: SnowIcon },
      { id: 'c_liw', name: 'Lạc Giữa Mùa Đông', promptFragment: `Concept "Lạc Giữa Mùa Đông".
- **Hành động & Bối cảnh:** Mắt nhìn ngơ ngác, đứng giữa một ngã ba đường trong rừng tuyết mờ sương.
- **Trang phục:** Váy babydoll trắng, trông mong manh.
- **Phụ kiện:** Cầm một chú gấu bông cũ.
- **Kiểu tóc:** Tóc xõa dài, hơi rối.
- **Makeup:** Mắt to tròn, ngây thơ.
- **Thần thái:** Lạc lõng, bối rối, cần được che chở.` + WINTER_PREAMBLE, icon: SnowIcon },
    ]
  },
  {
    title: "🌌 Nghệ Thuật & Siêu Thực",
    concepts: [
        { id: 'c_dow', name: 'Giấc Mơ Trắng', promptFragment: `Concept "Giấc Mơ Trắng".
- **Hành động & Bối cảnh:** Biểu cảm mơ màng, cơ thể như đang trôi nổi, không trọng lực giữa không gian trắng xóa.
- **Trang phục:** Váy lụa dài, mỏng, bay trong gió.
- **Phụ kiện:** Không có.
- **Kiểu tóc:** Tóc bay tự do.
- **Makeup:** "No-makeup" makeup, da căng bóng như thủy tinh.
- **Thần thái:** Siêu thực, thoát tục, như một giấc mơ.` + WINTER_PREAMBLE, icon: SnowIcon },
      { id: 'c_sm', name: 'Chuyển Động Trong Tuyết', promptFragment: `Concept "Chuyển Động Trong Tuyết".
- **Hành động & Bối cảnh:** Xoay người, tà áo bay lên tạo thành một vòng tròn đẹp mắt.
- **Trang phục:** Một chiếc váy xòe rộng, chất liệu nhẹ.
- **Phụ kiện:** Dây lưng để nhấn vào vòng eo.
- **Kiểu tóc:** Tóc búi cao để lộ cổ.
- **Makeup:** Tươi tắn, rạng rỡ.
- **Thần thái:** Tự do, yêu đời, tràn đầy năng lượng.` + WINTER_PREAMBLE, icon: SnowIcon },
      { id: 'c_hoi', name: 'Chân Trời Băng Giá', promptFragment: `Concept "Chân Trời Băng Giá".
- **Hành động & Bối cảnh:** Bước chậm rãi về phía đường chân trời trên một mặt hồ đóng băng.
- **Trang phục:** Trang phục avant-garde, có thể làm từ vật liệu phản quang.
- **Phụ kiện:** Kính mắt độc đáo.
- **Kiểu tóc:** Tóc màu bạch kim.
- **Makeup:** Có các yếu tố tương lai, metallic.
- **Thần thái:** Lạnh lùng, mạnh mẽ, tiên phong.` + WINTER_PREAMBLE, icon: SnowIcon },
      { id: 'c_fl', name: 'Ánh Sáng Vụn Vỡ', promptFragment: `Concept "Ánh Sáng Vụn Vỡ".
- **Hành động & Bối cảnh:** Ánh sáng rọi từ trên xuống như một spotlight, tuyết bay quanh mặt, tay đưa lên che mắt.
- **Trang phục:** Váy hai dây đính sequin bạc.
- **Phụ kiện:** Vòng tay kim cương.
- **Kiểu tóc:** Tóc ướt.
- **Makeup:** Làn da bóng, highlight mạnh.
- **Thần thái:** Kịch tính, quyến rũ, như một ngôi sao.` + WINTER_PREAMBLE, icon: SnowIcon },
      { id: 'c_ew', name: 'Mùa Đông Siêu Thực', promptFragment: `Concept "Mùa Đông Siêu Thực".
- **Hành động & Bối cảnh:** Đứng trong sương mờ, màu sắc toàn cảnh pha giữa lam và tím huyền ảo.
- **Trang phục:** Váy voan nhiều lớp, nhuộm màu gradient.
- **Phụ kiện:** Trang sức bằng đá mặt trăng (moonstone).
- **Kiểu tóc:** Tóc đính những ngôi sao nhỏ lấp lánh.
- **Makeup:** Mắt màu tím khói, môi ombre.
- **Thần thái:** Thần tiên, kỳ ảo, thoát tục.` + WINTER_PREAMBLE, icon: SnowIcon },
      { id: 'c_ss', name: 'Bản Giao Hưởng Dịu Êm', promptFragment: `Concept "Bản Giao Hưởng Dịu Êm".
- **Hành động & Bối cảnh:** Đứng yên, để tuyết nhẹ nhàng hòa vào mái tóc, ánh sáng mềm mại như một bản nhạc.
- **Trang phục:** Váy len cashmere màu hồng phấn.
- **Phụ kiện:** Khuyên tai ngọc trai.
- **Kiểu tóc:** Tóc uốn sóng nước.
- **Makeup:** Tông hồng pastel.
- **Thần thái:** Dịu dàng, nữ tính, tinh khôi.` + WINTER_PREAMBLE, icon: SnowIcon },
      { id: 'c_cb', name: 'Đóa Hoa Nở Trong Băng Giá', promptFragment: `Concept "Đóa Hoa Nở Trong Băng Giá".
- **Hành động & Bối cảnh:** Ánh mắt dịu dàng, tay cầm một cành hoa hồng duy nhất đã bị phủ tuyết.
- **Trang phục:** Váy dạ hội có họa tiết thêu hoa.
- **Phụ kiện:** Cành hoa hồng.
- **Kiểu tóc:** Tóc tết vương miện.
- **Makeup:** Tự nhiên, nhấn vào đôi môi đỏ như hoa.
- **Thần thái:** Mong manh nhưng kiên cường.` + WINTER_PREAMBLE, icon: SnowIcon },
      { id: 'c_tws', name: 'Sự Tĩnh Lặng Trắng', promptFragment: `Concept "Sự Tĩnh Lặng Trắng".
- **Hành động & Bối cảnh:** Đứng giữa một không gian trắng vô tận (có thể là một cánh đồng muối phủ tuyết), gương mặt nhẹ nhõm.
- **Trang phục:** Toàn bộ trang phục màu trắng, từ đầu đến chân.
- **Phụ kiện:** Không có.
- **Kiểu tóc:** Tóc trắng.
- **Makeup:** "Glass skin", môi nude.
- **Thần thái:** Thanh tẩy, yên bình, thuần khiết.` + WINTER_PREAMBLE, icon: SnowIcon },
      { id: 'c_fm', name: 'Giai Điệu Băng Giá', promptFragment: `Concept "Giai Điệu Băng Giá".
- **Hành động & Bối cảnh:** Ngồi giữa nền tuyết, tay đặt lên một cây đàn piano trong suốt làm từ băng.
- **Trang phục:** Váy dạ hội màu xanh băng, đính pha lê.
- **Phụ kiện:** Đàn piano băng.
- **Kiểu tóc:** Tóc búi cao, cài trâm băng.
- **Makeup:** Mắt xanh băng, môi nhũ bạc.
- **Thần thái:** Lạnh lùng, cao quý, như một nữ hoàng băng giá.` + WINTER_PREAMBLE, icon: SnowIcon },
      { id: 'c_sd', name: 'Cõi Mộng Tuyết Trắng', promptFragment: `Concept "Cõi Mộng Tuyết Trắng".
- **Hành động & Bối cảnh:** Cảm giác như đang mơ, ánh sáng trắng tan hòa, có thể có các yếu tố siêu thực như tuyết bay ngược.
- **Trang phục:** Váy làm từ chất liệu phát sáng nhẹ.
- **Phụ kiện:** Không rõ ràng, hòa vào giấc mơ.
- **Kiểu tóc:** Tóc bay bồng bềnh.
- **Makeup:** Nhũ lấp lánh trên mặt.
- **Thần thái:** Mơ màng, siêu thực, không có thật.` + WINTER_PREAMBLE, icon: SnowIcon },
    ]
  },
  {
    title: "🕯️ Thơ & Nội Tâm",
    concepts: [
        { id: 'c_eoy', name: 'Vang Vọng Bóng Hình Anh', promptFragment: `Concept "Vang Vọng Bóng Hình Anh".
- **Hành động & Bối cảnh:** Quay lưng lại, nhưng có một bóng hình mờ ảo của người khác đứng đối diện. Ánh mắt tìm kiếm.
- **Trang phục:** Cặp đôi mặc đồ giống nhau, hoặc có sự liên kết về màu sắc.
- **Phụ kiện:** Một vật kỷ niệm chung.
- **Kiểu tóc:** Giống nhau hoặc bổ sung cho nhau.
- **Makeup:** Buồn, hoài niệm.
- **Thần thái:** Nhớ nhung, tìm kiếm, day dứt.` + WINTER_PREAMBLE, icon: SnowIcon },
      { id: 'c_we', name: 'Mùa Đông Vọng Lại', promptFragment: `Concept "Mùa Đông Vọng Lại".
- **Hành động & Bối cảnh:** Đứng ở một nơi quen thuộc trong quá khứ, cảm xúc vọng về trong tuyết.
- **Trang phục:** Trang phục đã từng mặc trong một kỷ niệm.
- **Phụ kiện:** Một món quà cũ.
- **Kiểu tóc:** Kiểu tóc của ngày xưa.
- **Makeup:** Trưởng thành hơn nhưng ánh mắt vẫn hoài niệm.
- **Thần thái:** Hoài niệm, có chút tiếc nuối.` + WINTER_PREAMBLE, icon: SnowIcon },
      { id: 'c_tsh', name: 'Trái Tim Tĩnh Lặng', promptFragment: `Concept "Trái Tim Tĩnh Lặng".
- **Hành động & Bối cảnh:** Đứng yên giữa cơn bão tuyết, nhưng gương mặt lại hoàn toàn bình thản, ánh mắt trầm.
- **Trang phục:** Đơn giản, màu trung tính.
- **Phụ kiện:** Không có.
- **Kiểu tóc:** Gọn gàng.
- **Makeup:** Tự nhiên.
- **Thần thái:** Bình thản trước sóng gió, nội tâm mạnh mẽ.` + WINTER_PREAMBLE, icon: SnowIcon },
      { id: 'c_wsps', name: 'Khi Tuyết Cất Lời', promptFragment: `Concept "Khi Tuyết Cất Lời".
- **Hành động & Bối cảnh:** Đưa tay ra hứng tuyết, chăm chú nhìn vào bông tuyết trên tay như đang lắng nghe một câu chuyện.
- **Trang phục:** Áo choàng có mũ rộng.
- **Phụ kiện:** Không có.
- **Kiểu tóc:** Mái tóc phủ đầy tuyết.
- **Makeup:** Mắt mở to, trong veo.
- **Thần thái:** Lắng nghe, thấu cảm, kết nối với thiên nhiên.` + WINTER_PREAMBLE, icon: SnowIcon },
      { id: 'c_sl', name: 'Bức Thư Tuyết', promptFragment: `Concept "Bức Thư Tuyết".
- **Hành động & Bối cảnh:** Dùng ngón tay viết một chữ cái lên một bề mặt phủ tuyết, mắt nhìn xuống.
- **Trang phục:** Găng tay len hở ngón.
- **Phụ kiện:** Không có.
- **Kiểu tóc:** Tóc mái che hờ mắt.
- **Makeup:** Buồn, tập trung.
- **Thần thái:** Gửi gắm tâm sự, bí mật.` + WINTER_PREAMBLE, icon: SnowIcon },
      { id: 'c_lic', name: 'Ánh Sáng Trong Băng Giá', promptFragment: `Concept "Ánh Sáng Trong Băng Giá".
- **Hành động & Bối cảnh:** Đứng trong một khung cảnh tuyết xanh lạnh lẽo, nhưng có một vệt nắng vàng ấm áp chiếu riêng lên nhân vật.
- **Trang phục:** Váy màu vàng tươi.
- **Phụ kiện:** Không có.
- **Kiểu tóc:** Tóc xõa.
- **Makeup:** Rạng rỡ, tươi tắn.
- **Thần thái:** Hy vọng, là điểm sáng duy nhất.` + WINTER_PREAMBLE, icon: SnowIcon },
      { id: 'c_wsl', name: 'Ánh Tuyết Thì Thầm', promptFragment: `Concept "Ánh Tuyết Thì Thầm".
- **Hành động & Bối cảnh:** Ánh trăng phản chiếu lên tuyết, tạo ra một nguồn sáng bạc huyền ảo, chiếu lên đôi môi.
- **Trang phục:** Váy ngủ lụa màu bạc.
- **Phụ kiện:** Không có.
- **Kiểu tóc:** Tóc xõa dài.
- **Makeup:** Da phủ sương, môi bóng.
- **Thần thái:** Mộng mị, bí ẩn, quyến rũ.` + WINTER_PREAMBLE, icon: SnowIcon },
      { id: 'c_tdbu', name: 'Khoảng Cách Đôi Ta', promptFragment: `Concept "Khoảng Cách Đôi Ta".
- **Hành động & Bối cảnh:** Hai người đứng cách xa nhau trong một cánh đồng tuyết, một người đi xa dần và mờ đi.
- **Trang phục:** Cùng một tông màu nhưng khác kiểu.
- **Phụ kiện:** Không có.
- **Kiểu tóc:** Tóc bay trong gió.
- **Makeup:** Cận cảnh người ở lại có ánh mắt buồn bã.
- **Thần thái:** Chia ly, khoảng cách, buồn.` + WINTER_PREAMBLE, icon: SnowIcon },
      { id: 'c_wsol', name: 'An Nhiên Tự Tại', promptFragment: `Concept "An Nhiên Tự Tại".
- **Hành động & Bối cảnh:** Ngồi thiền hoặc đọc sách một mình trong một căn nhà kính giữa trời tuyết, ánh nhìn yên bình.
- **Trang phục:** Quần áo vải lanh, màu sắc tự nhiên.
- **Phụ kiện:** Một tách trà, một cuốn sách.
- **Kiểu tóc:** Tóc búi tự nhiên.
- **Makeup:** Mặt mộc.
- **Thần thái:** An nhiên, tự tại, bình yên trong tâm hồn.` + WINTER_PREAMBLE, icon: SnowIcon },
      { id: 'c_piw', name: 'Áng Thơ Trắng', promptFragment: `Concept "Áng Thơ Trắng".
- **Hành động & Bối cảnh:** Mắt mơ màng, tuyết rơi, dáng người chìm trong một luồng sáng trắng nhẹ nhàng, siêu thực.
- **Trang phục:** Váy voan trắng, mỏng, nhiều lớp.
- **Phụ kiện:** Không có.
- **Kiểu tóc:** Tóc dài, thẳng, màu bạch kim.
- **Makeup:** Trong suốt, như không có.
- **Thần thái:** Thuần khiết, thơ mộng, như một nàng thơ.` + WINTER_PREAMBLE, icon: SnowIcon },
    ]
  },
  {
    title: "🎬 20 Kiệt Tác Đa Lớp (Mới)",
    concepts: [
      { id: 'c_wsnow', name: 'Tuyết Thì Thầm', promptFragment: `Concept "Tuyết Thì Thầm".
- **Lớp 1 (Cận):** Ánh mắt nhìn xa xăm, một vài bông tuyết vương trên mi.
- **Lớp 2 (Bán thân):** Dang rộng vòng tay như muốn ôm trọn cả trời tuyết.
- **Lớp 3 (Toàn thân):** Dáng người nhỏ bé bước đi trên một cánh đồng tuyết trắng vô tận.
- **Trang phục:** Váy lụa satin màu trắng ngà, khoác ngoài áo choàng lông cừu Mông Cổ dáng dài.
- **Phụ kiện:** Khuyên tai ngọc trai baroque.
- **Kiểu tóc:** Tóc tết vương miện cầu kỳ, vài lọn tóc buông lơi.
- **Makeup:** Lớp nền căng bóng như sương, mắt khói nhẹ màu nâu lạnh.
- **Thần thái:** Tinh khôi, mong manh, thoát tục.` + MULTILAYER_PREAMBLE, icon: SnowIcon },
      { id: 'c_wsonata', name: 'Bản Tình Ca Mùa Đông', promptFragment: `Concept "Bản Tình Ca Mùa Đông".
- **Lớp 1 (Cận):** Môi khẽ mỉm cười, ánh mắt chứa chan tình cảm.
- **Lớp 2 (Bán thân):** Tay nâng niu một cây đàn violin cổ hoặc đeo tai nghe sành điệu.
- **Lớp 3 (Toàn thân):** Dáng đứng tựa vào một cây cầu gỗ, phía sau là hoàng hôn tuyết rực rỡ.
- **Trang phục:** Váy dạ hội nhung màu đỏ rượu của nhà mốt Oscar de la Renta, boots da cao cổ.
- **Phụ kiện:** Găng tay da dài, vòng cổ choker kim cương.
- **Kiểu tóc:** Tóc uốn sóng retro Hollywood.
- **Makeup:** Môi đỏ mận, mắt kẻ viền sắc sảo.
- **Thần thái:** Lãng mạn, cổ điển, đầy chất nghệ sĩ.` + MULTILAYER_PREAMBLE, icon: SnowIcon },
      { id: 'c_bosilence', name: 'Hơi Thở Tĩnh Lặng', promptFragment: `Concept "Hơi Thở Tĩnh Lặng".
- **Lớp 1 (Cận):** Làn hơi thở ấm áp tan vào không khí lạnh giá, tạo thành một làn khói mờ ảo.
- **Lớp 2 (Bán thân):** Tay kéo cao cổ áo khoác, ánh mắt trầm tư.
- **Lớp 3 (Toàn thân):** Đứng một mình giữa rừng thông phủ tuyết, sương mù bao quanh.
- **Trang phục:** Áo khoác dạ màu rêu sẫm của Burberry, khăn choàng len cashmere màu than.
- **Phụ kiện:** Đồng hồ đeo tay mặt da cổ điển.
- **Kiểu tóc:** Tóc búi cao gọn gàng, để lộ vầng trán thanh tú.
- **Makeup:** Tự nhiên, nhấn vào đôi gò má ửng hồng vì lạnh.
- **Thần thái:** Tĩnh lặng, sâu sắc, hòa mình với thiên nhiên.` + MULTILAYER_PREAMBLE, icon: SnowIcon },
      { id: 'c_tfsnow', name: 'Tuyết Đầu Mùa', promptFragment: `Concept "Tuyết Đầu Mùa".
- **Lớp 1 (Cận):** Ánh mắt ngỡ ngàng và vui sướng, một bông tuyết đầu tiên vừa rơi trên chóp mũi.
- **Lớp 2 (Bán thân):** Ngửa lòng bàn tay để hứng những bông tuyết đang rơi.
- **Lớp 3 (Toàn thân):** Dáng người nhỏ bé đi xa dần, để lại một hàng dấu chân duy nhất trên nền tuyết trắng tinh.
- **Trang phục:** Áo len dệt kim oversized màu be, mũ beret len đỏ.
- **Phụ kiện:** Găng tay hở ngón.
- **Kiểu tóc:** Tóc ngắn pixie cá tính hoặc tóc bob uốn cụp.
- **Makeup:** Trong veo, tàn nhang giả, má hồng đào.
- **Thần thái:** Ngây thơ, hạnh phúc, tràn đầy hy vọng.` + MULTILAYER_PREAMBLE, icon: SnowIcon },
      { id: 'c_acowinter', name: 'Tách Trà Mùa Đông', promptFragment: `Concept "Tách Trà Mùa Đông".
- **Lớp 1 (Cận):** Mắt nhắm hờ, hít hà hương thơm ấm áp từ tách trà/cà phê.
- **Lớp 2 (Bán thân):** Hai tay ôm lấy chiếc cốc gốm sứ, những bông tuyết bám nhẹ bên ngoài cửa sổ.
- **Lớp 3 (Toàn thân):** Ngồi thoải mái trên bệ cửa sổ rộng, chân co lên, bên ngoài là tuyết rơi dày đặc.
- **Trang phục:** Bộ đồ ngủ lụa, khoác ngoài áo choàng len dệt kim dày sụ.
- **Phụ kiện:** Một cuốn sách bìa cứng.
- **Kiểu tóc:** Tóc búi củ tỏi messy.
- **Makeup:** Mặt mộc, chỉ có chút son dưỡng môi.
- **Thần thái:** Ấm cúng, bình yên, tận hưởng khoảnh khắc.` + MULTILAYER_PREAMBLE, icon: SnowIcon },
      { id: 'c_tlu_ml', name: 'Thư Chưa Gửi', promptFragment: `Concept "Thư Chưa Gửi".
- **Lớp 1 (Cận):** Ánh mắt buồn, một giọt lệ chực rơi.
- **Lớp 2 (Bán thân):** Tay siết chặt một phong thư đã ố vàng.
- **Lớp 3 (Toàn thân):** Dáng quay lưng, đứng một mình ở sân ga vắng vẻ, tuyết bay lấp đầy không gian.
- **Trang phục:** Áo măng tô vintage, mũ cloche che nửa mặt.
- **Phụ kiện:** Vali da cũ kỹ.
- **Kiểu tóc:** Tóc uốn sóng kiểu thập niên 20.
- **Makeup:** Môi màu rượu chát, mắt khói nhẹ.
- **Thần thái:** Hoài cổ, tiếc nuối, cô đơn.` + MULTILAYER_PREAMBLE, icon: SnowIcon },
      { id: 'c_spoem', name: 'Bài Thơ Câm', promptFragment: `Concept "Bài Thơ Câm".
- **Lớp 1 (Cận):** Gương mặt trầm tư, ánh mắt nhìn vào khoảng không.
- **Lớp 2 (Bán thân):** Tay cầm một cây bút máy, lơ đãng trên một trang sổ trắng.
- **Lớp 3 (Toàn thân):** Ngồi trên một chiếc ghế băng đơn độc giữa công viên phủ tuyết, ánh sáng trắng dịu nhẹ.
- **Trang phục:** Bộ suit vải tweed, áo cổ lọ màu đen.
- **Phụ kiện:** Kính gọng tròn.
- **Kiểu tóc:** Tóc búi thấp gọn gàng.
- **Makeup:** Tự nhiên, thanh lịch.
- **Thần thái:** Trí thức, sâu lắng, đậm chất thơ.` + MULTILAYER_PREAMBLE, icon: SnowIcon },
      { id: 'c_wpromise', name: 'Lời Hứa Trắng', promptFragment: `Concept "Lời Hứa Trắng".
- **Lớp 1 (Cận):** Ánh mắt dịu dàng, ngập tràn hạnh phúc.
- **Lớp 2 (Bán thân):** Bàn tay đeo một chiếc nhẫn kim cương tinh xảo, khẽ đặt lên trái tim.
- **Lớp 3 (Toàn thân):** Dáng người khuất dần trong một con đường mòn tuyết rơi, như bước vào một tương lai tươi sáng.
- **Trang phục:** Váy dạ hội màu xanh băng giá của Zuhair Murad.
- **Phụ kiện:** Chiếc nhẫn là trung tâm, có thể thêm hoa tai kim cương nhỏ.
- **Kiểu tóc:** Tóc búi cao lộng lẫy.
- **Makeup:** Sang trọng, tinh tế, nhấn vào đôi môi căng mọng.
- **Thần thái:** Viên mãn, tin tưởng, hạnh phúc.` + MULTILAYER_PREAMBLE, icon: SnowIcon },
      { id: 'c_wglow', name: 'Ráng Chiều Mùa Đông', promptFragment: `Concept "Ráng Chiều Mùa Đông".
- **Lớp 1 (Cận):** Ánh nắng vàng hoàng hôn ấm áp phản chiếu lên một bên gò má.
- **Lớp 2 (Bán thân):** Tay giơ lên che ánh nắng, tạo ra những vệt sáng đẹp mắt.
- **Lớp 3 (Toàn thân):** Dáng đi ngược nắng qua cánh đồng tuyết, tạo nên một silhouette rực rỡ.
- **Trang phục:** Váy len dệt kim màu cam cháy, áo khoác da cừu.
- **Phụ kiện:** Mũ len rộng vành.
- **Kiểu tóc:** Tóc xõa dài, bay trong gió.
- **Makeup:** Tông màu đồng ấm, highlight vàng gold.
- **Thần thái:** Ấm áp, tự do, phiêu lãng.` + MULTILAYER_PREAMBLE, icon: SnowIcon },
      { id: 'c_ftime', name: 'Thời Gian Đóng Băng', promptFragment: `Concept "Thời Gian Đóng Băng".
- **Lớp 1 (Cận):** Những bông tuyết tinh thể đọng trên hàng mi dài cong vút.
- **Lớp 2 (Bán thân):** Đầu ngón tay trần vươn ra chạm vào một bông tuyết đang rơi.
- **Lớp 3 (Toàn thân):** Dáng đứng bất động giữa khung cảnh trắng tinh, như một pho tượng hoàn mỹ.
- **Trang phục:** Váy haute couture màu bạc của Iris van Herpen với cấu trúc 3D độc đáo.
- **Phụ kiện:** Không có, để tối đa hóa sự tĩnh lặng.
- **Kiểu tóc:** Tóc vuốt ướt, ép sát đầu.
- **Makeup:** Làn da phủ sương giá, môi màu nude lạnh.
- **Thần thái:** Tĩnh tại, siêu thực, nghệ thuật.` + MULTILAYER_PREAMBLE, icon: SnowIcon },
       { id: 'c_aheart', name: 'Trái Tim Cực Quang', promptFragment: `Concept "Trái Tim Cực Quang".
- **Lớp 1 (Cận):** Ánh mắt ngước lên, phản chiếu dải ánh sáng cực quang màu xanh tím kỳ ảo.
- **Lớp 2 (Bán thân):** Hai tay giơ lên trời như đang đón nhận nguồn năng lượng từ vũ trụ.
- **Lớp 3 (Toàn thân):** Dáng đứng trên một ngọn đồi tuyết, dưới bầu trời đêm rực rỡ cực quang.
- **Trang phục:** Bộ jumpsuit da màu đen, ôm sát, tương lai.
- **Phụ kiện:** Trang sức bạc có thiết kế hình học.
- **Kiểu tóc:** Tóc tết cornrow cá tính.
- **Makeup:** Mắt kẻ eyeliner đậm, có các chi tiết ánh kim.
- **Thần thái:** Kỳ ảo, mạnh mẽ, kết nối với vũ trụ.` + MULTILAYER_PREAMBLE, icon: SnowIcon },
      { id: 'c_dowhite', name: 'Giấc Mơ Trắng', promptFragment: `Concept "Giấc Mơ Trắng".
- **Lớp 1 (Cận):** Mắt mơ màng, biểu cảm như đang ở giữa thực và mơ.
- **Lớp 2 (Bán thân):** Hai tay dang rộng, những bông tuyết bay ngược từ dưới lên quanh người.
- **Lớp 3 (Toàn thân):** Dáng người như đang trôi nổi trong một làn sương mù trắng xóa, mộng ảo.
- **Trang phục:** Váy voan trắng nhiều lớp, mỏng manh như sương khói.
- **Phụ kiện:** Không có.
- **Kiểu tóc:** Tóc dài buông xõa tự do.
- **Makeup:** "Glass skin" căng bóng, môi nude.
- **Thần thái:** Mộng mị, siêu thực, thoát tục.` + MULTILAYER_PREAMBLE, icon: SnowIcon },
      { id: 'c_lwarmth', name: 'Hơi Ấm Cuối Cùng', promptFragment: `Concept "Hơi Ấm Cuối Cùng".
- **Lớp 1 (Cận):** Ánh lửa từ ngọn nến phản chiếu trong đôi mắt đượm buồn.
- **Lớp 2 (Bán thân):** Hai tay che chắn cho một chiếc đèn lồng nhỏ trước gió tuyết.
- **Lớp 3 (Toàn thân):** Đứng trước ô cửa sổ lớn của một căn nhà gỗ, bên ngoài là bão tuyết.
- **Trang phục:** Váy ngủ lụa màu kem, khoác hờ áo cardigan.
- **Phụ kiện:** Chiếc đèn lồng bão cổ điển.
- **Kiểu tóc:** Tóc xõa tự nhiên, hơi rối.
- **Makeup:** Tự nhiên, ánh nến tạo khối cho gương mặt.
- **Thần thái:** Mong manh, hoài niệm, chờ đợi.` + MULTILAYER_PREAMBLE, icon: SnowIcon },
      { id: 'c_fmelody', name: 'Giai Điệu Băng Giá', promptFragment: `Concept "Giai Điệu Băng Giá".
- **Lớp 1 (Cận):** Mắt nhắm, đầu nghiêng nhẹ, phiêu theo điệu nhạc.
- **Lớp 2 (Bán thân):** Tay chạm vào chiếc headphone sành điệu, tuyết đọng trên tóc.
- **Lớp 3 (Toàn thân):** Dáng bước đi nhẹ nhàng theo nhịp, trên con đường phủ tuyết vắng lặng.
- **Trang phục:** Phong cách street style cao cấp, áo khoác phao metalic, quần jogger da.
- **Phụ kiện:** Headphone của Bang & Olufsen.
- **Kiểu tóc:** Tóc buộc đuôi ngựa cao.
- **Makeup:** Môi thâm, mắt kẻ cá tính.
- **Thần thái:** Cool ngầu, tách biệt, chìm trong thế giới riêng.` + MULTILAYER_PREAMBLE, icon: SnowIcon },
      { id: 'c_sbof', name: 'Tuyết Dưới Chân Ta', promptFragment: `Concept "Tuyết Dưới Chân Ta".
- **Lớp 1 (Cận):** Ánh mắt nhìn xuống, nở một nụ cười kín đáo.
- **Lớp 2 (Bán thân):** Bàn tay đang nắm chặt tay một người khác (không thấy mặt).
- **Lớp 3 (Toàn thân):** Hai bóng người song song đi bên nhau giữa con đường tuyết trắng.
- **Trang phục:** Cặp đôi mặc áo khoác đôi màu trung tính, sang trọng.
- **Phụ kiện:** Khăn choàng đôi.
- **Kiểu tóc:** Gọn gàng, thanh lịch.
- **Makeup:** Tươi tắn, rạng rỡ.
- **Thần thái:** Hạnh phúc, bình yên, đồng hành.` + MULTILAYER_PREAMBLE, icon: SnowIcon },
      { id: 'c_bls', name: 'Giữa Ánh Sáng và Tuyết', promptFragment: `Concept "Giữa Ánh Sáng và Tuyết".
- **Lớp 1 (Cận):** Ánh nắng xiên qua, tạo thành một vệt sáng ấn tượng trên gương mặt.
- **Lớp 2 (Bán thân):** Tay đưa lên che hờ ánh nắng, tuyết vẫn rơi xung quanh.
- **Lớp 3 (Toàn thân):** Dáng đứng giữa ranh giới của bóng râm và ánh sáng trong một khu rừng tuyết.
- **Trang phục:** Váy hai dây sequin, khoác ngoài áo blazer oversized.
- **Phụ kiện:** Kính râm sành điệu.
- **Kiểu tóc:** Tóc vuốt ướt.
- **Makeup:** Làn da căng bóng, highlight bắt sáng mạnh.
- **Thần thái:** Tương phản, mạnh mẽ, đầy kịch tính.` + MULTILAYER_PREAMBLE, icon: SnowIcon },
      { id: 'c_wsolitude', name: 'Đơn Côi Miền Trắng', promptFragment: `Concept "Đơn Côi Miền Trắng".
- **Lớp 1 (Cận):** Gương mặt bình thản, ánh mắt yên bình nhìn vào ống kính.
- **Lớp 2 (Bán thân):** Tay cầm một chiếc ô đen, tạo sự tương phản mạnh mẽ.
- **Lớp 3 (Toàn thân):** Dáng người nhỏ bé đứng một mình giữa một cánh đồng tuyết trắng mênh mông.
- **Trang phục:** Toàn bộ trang phục màu đen, tối giản của Jil Sander.
- **Phụ kiện:** Chiếc ô đen.
- **Kiểu tóc:** Tóc bob ngắn, thẳng.
- **Makeup:** Môi đỏ đậm, da trắng sứ.
- **Thần thái:** Đơn độc nhưng không cô đơn, mạnh mẽ và tự tại.` + MULTILAYER_PREAMBLE, icon: SnowIcon },
      { id: 'c_gsnowlight', name: 'Tuyết Nắng Vàng', promptFragment: `Concept "Tuyết Nắng Vàng".
- **Lớp 1 (Cận):** Ánh mắt ấm áp, nụ cười rạng rỡ.
- **Lớp 2 (Bán thân):** Lòng bàn tay nâng niu một bông tuyết, được ánh hoàng hôn chiếu vào hóa thành màu vàng.
- **Lớp 3 (Toàn thân):** Dáng đi trong ánh hoàng hôn vàng rực pha lẫn với tuyết trắng.
- **Trang phục:** Váy dạ hội sequin màu vàng gold của Versace.
- **Phụ kiện:** Trang sức kim cương vàng.
- **Kiểu tóc:** Tóc búi cao kiểu vũ công ballet.
- **Makeup:** Mắt nhũ vàng đồng, môi cam đất.
- **Thần thái:** Rực rỡ, sang trọng, là nữ hoàng của buổi tiệc.` + MULTILAYER_PREAMBLE, icon: SnowIcon },
      { id: 'c_ssymphony', name: 'Bản Giao Hưởng Mềm Mại', promptFragment: `Concept "Bản Giao Hưởng Mềm Mại".
- **Lớp 1 (Cận):** Mắt nhắm, biểu cảm đắm chìm, như đang lắng nghe một bản nhạc vô hình.
- **Lớp 2 (Bán thân):** Những ngón tay di chuyển mềm mại trong không khí như đang chỉ huy một dàn nhạc.
- **Lớp 3 (Toàn thân):** Đứng giữa một khung cảnh ánh sáng mờ ảo, huyền hoặc như trong mơ.
- **Trang phục:** Váy lụa organza màu hồng phấn, có những chi tiết bèo nhún mềm mại.
- **Phụ kiện:** Khuyên tai ngọc trai.
- **Kiểu tóc:** Tóc uốn sóng nước nhẹ nhàng.
- **Makeup:** Tông hồng pastel trong veo.
- **Thần thái:** Dịu dàng, mơ mộng, thanh thoát.` + MULTILAYER_PREAMBLE, icon: SnowIcon },
      { id: 'c_pwhite', name: 'Áng Thơ Trắng', promptFragment: `Concept "Áng Thơ Trắng".
- **Lớp 1 (Cận):** Mắt nhìn xuống, môi mím nhẹ, vẻ đẹp trong sáng.
- **Lớp 2 (Bán thân):** Tay cầm một bông tuyết đang tan chảy trên đầu ngón tay.
- **Lớp 3 (Toàn thân):** Dáng người như đang hòa tan vào khung cảnh trắng xóa, mềm mại và đầy chất thơ.
- **Trang phục:** Váy voan trắng, mỏng, nhiều lớp, bay bổng.
- **Phụ kiện:** Không có, tập trung vào sự tinh khiết.
- **Kiểu tóc:** Tóc dài, thẳng, màu bạch kim.
- **Makeup:** "No-makeup" makeup, trong suốt.
- **Thần thái:** Thuần khiết, thơ mộng, như một nàng thơ bước ra từ trang sách.` + MULTILAYER_PREAMBLE, icon: SnowIcon },
    ]
  }
];


// 2. STYLES
export const STYLES: Style[] = [
    { id: 'dienanh', name: 'Điện ảnh', promptFragment: 'phong cách điện ảnh, màu sắc đậm, ánh sáng dramatíc, tỉ lệ khung hình 21:9' },
    { id: 'nghethuat', name: 'Nghệ thuật', promptFragment: 'như một tác phẩm nghệ thuật kỹ thuật số, các đường nét tinh xảo, màu sắc siêu thực' },
    { id: 'sangchanh', name: 'Sang chảnh', promptFragment: 'thần thái sang chảnh, trang phục hàng hiệu, bối cảnh xa hoa, đẳng cấp' },
    { id: 'caocap', name: 'Cao cấp', promptFragment: 'phong cách high-fashion, tạp chí Vogue, biểu cảm sắc lạnh, bố cục tối giản' },
    { id: 'thanthien', name: 'Thần tiên', promptFragment: 'như trong một câu chuyện cổ tích, ánh sáng huyền ảo, màu sắc mộng mơ, có các yếu tố kỳ ảo' },
    { id: 'anime', name: 'Anime/Makoto Shinkai', promptFragment: 'phong cách anime của Makoto Shinkai, ánh sáng rực rỡ, chi tiết tinh xảo, màu xanh đặc trưng' },
    { id: 'tranhson dầu', name: 'Tranh Sơn dầu', promptFragment: 'với những nét cọ dày và kết cấu của một bức tranh sơn dầu cổ điển' },
    { id: 'nhiepanhden trang', name: 'Nhiếp ảnh Đen trắng', promptFragment: 'nhiếp ảnh đen trắng nghệ thuật, độ tương phản cao, tập trung vào hình khối và cảm xúc' },
    { id: 'vintage', name: 'Vintage', promptFragment: 'phong cách vintage, màu phim cũ, hoài niệm, trang phục thập niên 80' },
    { id: 'cyberpunk', name: 'Cyberpunk', promptFragment: 'phong cách cyberpunk, ánh sáng neon, thành phố tương lai, công nghệ cao' },
    { id: 'langman', name: 'Lãng mạn', promptFragment: 'không khí lãng mạn, màu sắc pastel nhẹ nhàng, ánh sáng mềm mại' },
    { id: 'hanquoc', name: 'Nàng thơ Hàn Quốc', promptFragment: 'phong cách nàng thơ Hàn Quốc, trong trẻo, da căng bóng, màu ảnh trong veo' },
    { id: 'trungquoc', name: 'Cổ trang Trung Quốc', promptFragment: 'phong cách cổ trang kiếm hiệp, trang phục lụa bay phấp phới, bối cảnh núi non hùng vĩ' },
    { id: 'kinhdi', name: 'Kinh dị', promptFragment: 'phong cách kinh dị, tông màu lạnh, tối, biểu cảm ám ảnh, không khí rùng rợn' },
    { id: 'tuoisang', name: 'Tươi sáng', promptFragment: 'phong cách tươi sáng, rực rỡ, nhiều năng lượng, màu sắc sống động' },
    { id: 'amap', name: 'Ấm áp', promptFragment: 'phong cách ấm áp, tông màu cam vàng, ánh nắng chiều, cảm giác gemütlichkeit' },
    { id: 'doisong', name: 'Đời thường', promptFragment: 'khoảnh khắc đời thường, tự nhiên, không sắp đặt, như một bức ảnh chụp lén' },
    { id: 'thugian', name: 'Thư giãn', promptFragment: 'cảm giác thư giãn, yên bình, bối cảnh thiên nhiên tĩnh lặng' },
    { id: 'maoquai', name: 'Màu sắc sặc sỡ', promptFragment: 'sử dụng các khối màu sắc sặc sỡ, tương phản mạnh, phong cách pop-art' },
    { id: 'toigian', name: 'Tối giản', promptFragment: 'phong cách tối giản, bố cục sạch sẽ, ít chi tiết, tập trung vào chủ thể' },
];


// 3. LAYOUT OPTIONS
export const LAYOUT_OPTIONS: LayoutGroup[] = [
  {
    title: "📸 BỐ CỤC ẢNH",
    layouts: [
      { id: 'single', name: 'Một ảnh đơn', promptFragment: 'một bức ảnh đơn, tập trung vào chủ thể. Bố cục chỉ có một khung hình duy nhất.', icon: LayoutSingleIcon },
      { id: 'h2', name: '2 ảnh ngang', promptFragment: 'bố cục 2 ảnh ngang song song, đối xứng trái/phải (classic style).', icon: LayoutDynamicIcon },
      { id: 'h3', name: '3 ảnh ngang', promptFragment: 'bố cục 3 ảnh ngang đều nhau, kiểu tạp chí hoặc lookbook thời trang.', icon: LayoutStoryIcon },
      { id: 'h4', name: '4 ảnh ngang', promptFragment: 'bố cục 4 ảnh ngang, dùng cho concept “biến đổi cảm xúc” hoặc 4 outfit khác nhau.', icon: LayoutTrioIcon },
      { id: 'v2', name: '2 ảnh dọc', promptFragment: 'bố cục 2 ảnh dọc song song, phù hợp chân dung fashion hoặc couple.', icon: LayoutCompareIcon },
      { id: 'v3', name: '3 ảnh dọc', promptFragment: 'bố cục 3 ảnh dọc, layout kiểu Instagram reels hoặc beauty shot.', icon: LayoutFilmStripIcon },
      { id: 'zz3', name: 'Zic-zắc 3 ảnh', promptFragment: 'bố cục 3 ảnh zic-zắc (trái – phải – trái), kể chuyện theo dòng thời gian.', icon: LayoutZigZagIcon },
      { id: 'zz4', name: 'Zic-zắc 4 ảnh', promptFragment: 'bố cục 4 ảnh zic-zắc, kiểu cinematic motion (di chuyển, xoay người, bước đi).', icon: LayoutZigZagIcon },
      { id: 'grid4', name: 'Lưới 2x2', promptFragment: 'bố cục lưới 2x2 (4 ảnh vuông), cân đối, đơn giản, dễ làm poster.', icon: LayoutGridIcon },
      { id: 'grid9', name: 'Lưới 3x3', promptFragment: 'bố cục lưới 3x3 (9 ảnh vuông nhỏ), tạo cảm giác bộ sưu tập mini.', icon: LayoutGridIcon },
      { id: 'spotlight', name: 'Spotlight', promptFragment: 'bố cục 1 ảnh lớn trung tâm + 4 ảnh nhỏ viền xung quanh (spotlight style).', icon: LayoutAngleIcon },
      { id: 'storytelling', name: 'Storytelling', promptFragment: 'bố cục 1 ảnh chính + 3 ảnh phụ góc (storytelling), kiểu “trước – trong – sau”.', icon: LayoutPortraitFocusIcon },
      { id: 'filmstrip_h', name: 'Film Strip Ngang', promptFragment: 'bố cục 3 ảnh dạng film strip ngang, giống khung phim điện ảnh.', icon: LayoutStoryIcon },
      { id: 'filmstrip_v', name: 'Film Strip Dọc', promptFragment: 'bố cục 4 ảnh dạng khung phim dọc (film reel), thích hợp cho vertical story.', icon: LayoutFilmStripIcon },
      { id: 'angles', name: 'Đa góc máy', promptFragment: 'bố cục 3 ảnh chia theo góc máy (close-up – medium – full shot) để thể hiện cảm xúc.', icon: LayoutTrioIcon },
      { id: 'lshape', name: 'Chữ L', promptFragment: 'bố cục 3 ảnh dạng hình chữ L, bất đối xứng lạ mắt.', icon: LayoutLShapedIcon },
      { id: 'diagonal', name: 'Chéo 45°', promptFragment: 'bố cục 3 ảnh chéo 45° (zic zắc nhẹ), tạo chuyển động.', icon: LayoutZigZagIcon },
      { id: 'arc', name: 'Vòng cung', promptFragment: 'bố cục 5 ảnh hình vòng cung, thể hiện sự biến đổi theo thời gian/ngày.', icon: LayoutArcIcon },
      { id: 'clock', name: 'Đồng hồ', promptFragment: 'bố cục 6 ảnh ghép dạng đồng hồ (circle layout), kể story 6 bước.', icon: LayoutCollageIcon },
      { id: 'universe', name: 'Vũ trụ nhân vật', promptFragment: 'bố cục ảnh chính giữa lớn + 6 ảnh nhỏ xung quanh.', icon: LayoutCollageIcon },
    ]
  },
  {
    title: "💎 BỐ CỤC KIM CƯƠNG",
    layouts: [
      { id: 'd_center', name: 'Kim cương trung tâm', promptFragment: 'bố cục 1 ảnh trung tâm hình kim cương + 4 ảnh viền quanh (trên – dưới – trái – phải).', icon: LayoutDiamondIcon },
      { id: 'd_path', name: 'Dải kim cương', promptFragment: 'bố cục 5 ảnh kim cương nối đỉnh, tạo dải đường chéo như viên đá.', icon: LayoutDiamondIcon },
      { id: 'd_v3', name: '3 kim cương dọc', promptFragment: 'bố cục 3 ảnh kim cương xếp hàng dọc, dành cho layout vertical 9:16 TikTok.', icon: LayoutDiamondIcon },
      { id: 'd_focus', name: 'Focus kim cương', promptFragment: 'bố cục 1 ảnh lớn kim cương ở giữa + 2 ảnh nhỏ nghiêng góc 45° hai bên.', icon: LayoutDiamondIcon },
      { id: 'd_frame', name: 'Khung kim cương', promptFragment: 'bố cục 4 ảnh nhỏ xếp thành khung kim cương bao quanh 1 ảnh chính giữa tròn hoặc vuông.', icon: LayoutDiamondIcon },
      { id: 'd_zigzag', name: 'Zic-zắc kim cương', promptFragment: 'bố cục 3 ảnh kim cương zic-zắc chéo (↙ ↗ ↙), hợp với style fashion chuyển động.', icon: LayoutZigZagIcon },
      { id: 'd_rotate', name: 'Kim cương xoay', promptFragment: 'bố cục các ảnh xếp dạng kim cương xoay vòng 45°, tâm giữa là khuôn mặt.', icon: LayoutDiamondIcon },
      { id: 'd_multi', name: 'Kim cương đa lớp', promptFragment: 'bố cục ảnh trung tâm lớn, 4 ảnh nhỏ ở góc 45° tạo viền kim cương đa lớp (multi-layer diamond).', icon: LayoutDiamondIcon },
      { id: 'd_double', name: 'Kim cương kép', promptFragment: 'bố cục 6 ảnh tạo khung kim cương kép (2 lớp, trong nhỏ – ngoài lớn).', icon: LayoutDiamondIcon },
      { id: 'd_mosaic', name: 'Khảm kim cương', promptFragment: 'bố cục ảnh ghép kim cương đan xen, như khảm đá quý, hiệu ứng nổi bật cực mạnh.', icon: LayoutDiamondIcon },
    ]
  }
];


// 4. OUTFITS - Trang phục cao cấp
const OUTFITS_FOR_WOMEN_LIST: string[] = [
  "Váy dạ hội Haute Couture xuyên thấu đính hàng ngàn viên kim cương, dáng đuôi cá lộng lẫy.",
  "Đầm cocktail lụa satin màu đỏ ruby, cúp ngực táo bạo và xẻ tà cao đến đùi.",
  "Bộ jumpsuit sequin bạc ôm sát cơ thể, khoét lưng sâu, đi kèm áo choàng lông vũ trắng muốt.",
  "Váy bodycon bằng da bóng màu đen có khóa kéo vàng chạy dọc thân, tôn vinh mọi đường cong.",
  "Đầm dạ hội công chúa làm từ vải tuyn nhiều lớp màu pastel, trang trí hoa 3D và ngọc trai.",
  "Bộ cánh 'Nữ thần Hy Lạp' với váy lụa trắng xếp ly, thắt lưng vàng kim và trang sức rắn quấn tay.",
  "Váy mini-dress Balmain đính cúc vàng đặc trưng, chất liệu vải tweed sang trọng.",
  "Bộ đồ nội y ren cao cấp của La Perla, khoác ngoài là áo choàng lụa mỏng manh.",
  "Trang phục 'Nữ hoàng Ai Cập' với đầm vàng kim, phụ kiện đầu hình rắn hổ mang và trang điểm mắt đậm.",
  "Váy dạ hội nhung đen xẻ ngực sâu, đeo găng tay opera và chuỗi vòng cổ kim cương.",
  "Bộ suit nữ quyền lực màu trắng của Alexander McQueen, cắt may sắc sảo, không mặc nội y.",
  "Đầm hai dây bằng lụa mỏng màu sâm panh, thiết kế tối giản nhưng cực kỳ gợi cảm.",
  "Áo corset da kết hợp chân váy voan bồng bềnh, phong cách gothic-chic.",
  "Váy cut-out táo bạo ở eo và hông, chất liệu thun kim tuyến co giãn.",
  "Bộ bikini đính đá quý, khoác ngoài áo lưới mỏng, đi dạo trên du thuyền sang trọng.",
  "Trang phục 'Thiên thần sa ngã' với đôi cánh lông vũ đen khổng lồ và váy da bó sát.",
  "Áo dài cách tân bằng gấm, phần trên là yếm, khoe trọn bờ vai trần và lưng ong.",
  "Váy cưới hoàng gia của Elie Saab, đính kết thủ công hàng triệu viên pha lê.",
  "Bộ trang phục 'nữ điệp viên' với áo liền quần da, thắt lưng đựng vũ khí và bốt cao gót.",
  "Đầm dạ hội hở lưng hoàn toàn, được cố định bằng những sợi dây chuyền vàng mảnh.",
  "Trang phục nữ chiến binh 'Valkyrie' với áo giáp kim loại cách điệu và váy da xẻ tà.",
  "Váy cocktail tua rua theo phong cách thập niên 20s, lấp lánh và quyến rũ khi chuyển động.",
  "Áo crop-top siêu ngắn kết hợp quần cạp trễ, khoe cơ bụng săn chắc.",
  "Bộ Hanbok cách tân của Hàn Quốc, chất liệu organza mỏng nhìn xuyên thấu.",
  "Váy làm từ những cánh hoa tươi thật, được kết lại một cách nghệ thuật.",
];

const OUTFITS_FOR_MEN_LIST: string[] = [
  "Bộ suit may đo bespoke từ vải Scabal cao cấp màu xanh navy, ve áo lụa, cài áo bằng ngọc lục bảo.",
  "Áo khoác tuxedo nhung đen, mặc cùng sơ mi trắng cổ diềm và nơ bướm lụa thủ công.",
  "Bộ vest gile 3 mảnh kẻ sọc, phong cách 'Peaky Blinders', đi kèm đồng hồ quả quýt vàng.",
  "Trang phục hoàng gia Ả Rập với áo choàng bisht thêu chỉ vàng, đội khăn Keffiyeh lụa.",
  "Áo khoác da biker của Saint Laurent, kết hợp quần jeans rách và bốt Chelsea da lộn.",
  "Bộ suit Tom Ford màu mận chín, mặc 'không áo sơ mi', khoe hình thể nam tính.",
  "Áo sơ mi lụa Versace họa tiết baroque đặc trưng, mở ba cúc đầu, đeo dây chuyền vàng.",
  "Trang phục 'Vị thần La Mã' với áo choàng toga trắng và vòng nguyệt quế vàng.",
  "Bộ suit toàn màu trắng, phong cách 'The Great Gatsby', lịch lãm và cổ điển.",
  "Áo khoác dáng dài cashmere của Zegna, mặc cùng áo len cổ lọ và quần tây.",
  "Trang phục 'mafia Ý' với suit kẻ sọc, mũ fedora và một điếu xì gà trên tay.",
  "Bộ giáp Samurai cách điệu, làm từ sợi carbon và da, vừa hiện đại vừa truyền thống.",
  "Áo măng tô da dài đến mắt cá chân, phong cách 'The Matrix', thần thái bí ẩn.",
  "Quần da bó sát kết hợp áo lưới, phong cách rockstar gợi cảm.",
  "Trang phục 'tổng tài bá đạo' với suit đen, sơ mi đen và cà vạt đen.",
  "Bộ pijama lụa cao cấp, đi dép lê của Gucci, thần thái giàu có và thư giãn.",
  "Trang phục 'đấu sĩ' với khố da, giáp tay và cơ bắp cuồn cuộn.",
  "Áo choàng hoàng đế thêu rồng phượng, quyền lực và uy nghiêm.",
  "Bộ suit không tay, khoe trọn bắp tay rắn chắc.",
  "Trang phục 'chàng thơ' với áo sơ mi trắng phanh ngực, quần lụa ống rộng.",
  "Bộ suit lụa màu ngọc trai, mặc cùng áo sơ mi cổ bèo nhún, phong thái thi sĩ lãng tử.",
  "Áo choàng gấm thêu họa tiết phượng hoàng, bên trong là trang phục võ hiệp cổ trang màu đen tuyền.",
  "Bộ trang phục hoàng tử Disney cách điệu, với áo doublet nhung xanh hoàng gia và quần bó trắng.",
  "Áo khoác da cừu Mông Cổ, thần thái du mục hoang dã giữa thảo nguyên tuyết.",
  "Trang phục 'Bá tước Dracula' với áo choàng nhung đen lót lụa đỏ, và áo sơ mi diềm xếp.",
  "Bộ vest vải tweed Anh quốc, đội mũ beret, tay cầm tẩu thuốc, thần thái thám tử Sherlock Holmes.",
  "Áo măng tô dài màu be của Burberry, bên trong là áo len cổ lọ, phong cách lãng tử Paris.",
  "Trang phục của một vị thần Hy Lạp (Apollo) với áo choàng toga trắng và đàn lia vàng.",
  "Bộ suit smoking trắng của James Bond, nơ đen, cầm ly Martini, thần thái lịch lãm, bí ẩn.",
  "Trang phục phi công cổ điển với áo khoác da bomber, kính phi công và khăn choàng lụa trắng.",
  "Bộ Hanbok của vương gia Hàn Quốc, màu xanh ngọc bích, thêu họa tiết rồng uy nghiêm.",
  "Trang phục của một nhạc trưởng vĩ đại, với áo đuôi tôm đen và cây đũa chỉ huy trong tay.",
  "Áo giáp hiệp sĩ bạc sáng loáng, chạm khắc tinh xảo, tay cầm một thanh gươm báu.",
  "Bộ đồ của một nhà thám hiểm sa mạc, với áo sơ mi safari, quần kaki và mũ rộng vành bụi bặm.",
  "Áo sơ mi lụa hoa văn Paisley, phanh ngực, phong cách nghệ sĩ lãng mạn thập niên 70.",
  "Trang phục của một vị vua Ai Cập (Pharaoh) với mũ Nemes, trang sức vàng và quyền trượng uy quyền.",
  "Bộ suit nhung màu xanh lá cây đậm, phong cách quý tộc châu Âu thế kỷ 18.",
  "Áo choàng của một pháp sư quyền năng, thêu các biểu tượng chiêm tinh, tay cầm quả cầu pha lê.",
  "Trang phục Steampunk với áo gile da, kính một mắt (monocle) và các chi tiết bánh răng đồng tinh xảo.",
  "Bộ Kimono Samurai trang trọng, với hakama và thanh katana bên hông, thần thái uy nghiêm.",
];

const OUTFITS_UNISEX: string[] = [
  "Trang phục phi giới tính avant-garde làm từ kim loại lỏng và sợi quang học, phát sáng theo nhịp thở.",
  "Bộ kimono cách tân bằng lụa và da, in họa tiết rồng phượng bằng mực phát quang.",
  "Trang phục Cyberpunk với áo khoác tích hợp đèn LED, quần da công nghệ cao và kính thực tế ảo.",
  "Bộ cánh tương lai làm từ vật liệu phản quang, thay đổi màu sắc theo góc nhìn.",
  "Trang phục Haute Couture của Iris van Herpen, tạo khối 3D in từ nhựa sinh học."
];

export const OUTFITS_WOMEN: string[] = [...OUTFITS_FOR_WOMEN_LIST, ...OUTFITS_UNISEX];
export const OUTFITS_MEN: string[] = [...OUTFITS_FOR_MEN_LIST, ...OUTFITS_UNISEX];


// 5. ASPECT RATIOS
export const ASPECT_RATIOS: AspectRatio[] = [
    { id: 'square', name: '1:1', value: '1:1'},
    { id: 'portrait', name: '3:4', value: '3:4'},
    { id: 'portrait_tall', name: '9:16', value: '9:16'},
    { id: 'landscape', name: '16:9', value: '16:9'},
]

// 6. IMAGE COUNTS
export const IMAGE_COUNTS: number[] = [1, 2, 3, 4];

// 7. PROMPT SUGGESTIONS (SAMPLE)
export const PROMPT_SUGGESTIONS = {
  tuyet: [
    "Ánh mắt dịu giữa tuyết, tay hứng bông tuyết, bước chậm giữa rừng trắng.",
    "Ngước nhìn trời tuyết, tay cầm dù đen, đi qua con phố yên tĩnh.",
    "Hơi thở tan trong sương lạnh, tay ôm áo khoác, dáng lẻ loi trên cầu gỗ.",
    "Cận mặt nhìn xuống, tay nắm tờ thư, bóng lưng giữa cánh đồng tuyết.",
    "Mắt khẽ nhắm, tay chạm phím piano giữa trời tuyết, dáng xa mờ trong hơi sương.",
    "Ánh mắt chạm nhau trong tuyết, tay chạm nhẹ, một người quay đi xa.",
    "Cận môi hé mở, tay giữ khăn, bước trong con hẻm tuyết phủ.",
    "Ánh nhìn hoài niệm, tay chạm tuyết đầu mùa, dáng đi dưới đèn đường vàng.",
    "Cận mặt dịu dàng, tay đeo nhẫn, bóng dáng xa dần trong cơn tuyết nhẹ.",
    "Mắt sáng trong tuyết rơi, tay mở dù trắng, đi giữa luồng ánh vàng ấm.",
    "Cận mặt trong ánh đèn vàng, tay chạm tuyết, dáng đi qua phố đêm.",
    "Ánh mắt phản cực quang, tay giơ lên ánh sáng, bước giữa tuyết phát sáng.",
    "Mắt nhìn trời sao, tay nắm tuyết, đi xa trên đồi trắng.",
    "Nụ cười nhẹ bên tách cà phê, tay đặt ly, nhìn qua cửa sổ tuyết.",
    "Ánh mắt chờ đợi, tay nắm vali, dáng xa mờ trong sân ga tuyết.",
    "Cận mặt vàng ấm, tay nắm áo khoác, đi dưới đèn đơn lẻ.",
    "Tay viết thư, mực lem trong lạnh, bóng dáng ngồi trên ghế gỗ phủ tuyết.",
    "Ánh nhìn qua ô kính mờ, tay đặt lên kính, dáng xa trong sương.",
    "Cận mặt tĩnh lặng, tay đón gió, đi giữa rừng tuyết lặng im.",
    "Gương mặt nửa sáng nửa tối, tay dang nhẹ, dáng đi qua ngõ nhỏ đầy tuyết.",
    "Ánh mắt lạc giữa không gian trắng xóa, tay giữ áo khoác, bóng đơn độc.",
    "Tuyết rơi pha ánh vàng, tay đưa về phía sáng, dáng nhỏ dần.",
    "Cận mắt buồn, tay cầm ảnh, bóng đi giữa tuyết.",
    "Tuyết mờ phủ nửa khuôn mặt, tay vuốt tóc, dáng đứng nghiêng giữa sương.",
    "Giọt tuyết dừng trên tóc, tay giơ lên, dáng giữa đồng tuyết bất động.",
    "Ánh sáng xiên qua, tay che mặt, dáng nghiêng thơ mộng.",
    "Cận mắt, tay cầm dù, dáng đi một mình giữa phố cũ.",
    "Mắt khẽ nhắm trong ánh sáng mờ, tay dang ra đón tuyết.",
    "Mắt nhìn qua kính mờ, tay đặt nhẹ, dáng xa khuất.",
    "Cận mắt xúc động, tay chạm bức tường tuyết, bước đi vào màn trắng.",
    "Ánh mắt gặp lại, tay dang nhẹ, dáng đi lại gần trong tuyết.",
    "Mưa tuyết rơi, tay cầm ô, ánh sáng pha sương.",
    "Cận mặt ánh ấm, tay hướng xa, dáng nhỏ giữa tuyết.",
    "Nhìn về con phố cũ, tay chạm tường, đi xa giữa gió lạnh.",
    "Mắt nhìn hoàng hôn tuyết, tay buông nhẹ, dáng khuất sau ánh đỏ.",
    "Cận mặt trầm tư, tay giữ phong thư, dáng quay lưng đi xa.",
    "Mắt nhìn xuống, tay nắm tay ai đó, hai dáng song song.",
    "Cận tay run, ánh nhìn ấm, bước cùng nhau trong tuyết.",
    "Mắt nhìn xa, tay cầm đèn lồng, dáng đi khỏi vùng sáng.",
    "Cận môi mỉm cười, tay vẫy chào, dáng nhỏ dần trong bão tuyết.",
    "Cận mắt mơ, tay chạm ánh sáng, dáng giữa sương mờ.",
    "Ánh mắt trong sương, tay mở lối, dáng đi qua cầu gỗ phủ tuyết.",
    "Cận mắt suy tư, tay cầm bút, dáng ngồi bên hồ tuyết.",
    "Cận mặt với tai nghe, tay nhắm mắt cảm nhạc, tuyết rơi quanh.",
    "Ánh sáng xuyên qua tuyết rơi, tay dang ra, dáng đứng giữa luồng sáng.",
    "Mắt lặng, tay buông thả, tuyết bay quanh tóc.",
    "Ánh nhìn xa, tay chống gậy, dáng đi giữa tuyết mênh mông.",
    "Cận mắt rực sáng, tay tạo hình nhạc, dáng hòa trong ánh sáng tuyết.",
    "Tay cầm cọ vẽ, mắt nhìn xa, đứng giữa khung cảnh trắng xóa.",
    "Ánh mắt chan chứa, tay đặt lên tim, dáng quay đi trong khung trời tuyết trắng."
  ],
  mua: ["Dưới cơn mưa đêm trên con phố vắng, cô gái mặc áo trench coat thanh lịch, cầm một chiếc ô trong suốt. Ánh đèn đường lấp lánh trên vũng nước, thần thái cô có chút suy tư, lãng mạn. Mái tóc uốn sóng nhẹ, môi son màu rượu vang.", "Ngồi một mình trong quán cafe cổ, cô mặc chiếc váy len màu kem, tay cầm một cuốn sách. Biểu cảm trầm ngâm, đôi mắt dõi theo những giọt mưa lăn dài trên cửa kính. Makeup tông nude, tóc tết lỏng.", "Trong chiếc áo mưa màu vàng chanh và đôi ủng cao su, cô gái nhảy múa, vui đùa dưới cơn mưa rào mùa hạ. Tóc ướt sũng nhưng nụ cười rạng rỡ, thần thái tinh nghịch, yêu đời.", "Chân dung cận mặt đầy cảm xúc. Một giọt nước mắt hòa cùng giọt mưa lăn dài trên gò má. Đôi mắt buồn, long lanh nhìn lên bầu trời xám xịt. Lớp makeup tối giản, nhấn vào đôi mắt ướt át.", "Hành động che đầu bằng một chiếc lá sen lớn, cô gái mặc áo bà ba, đi chân trần trên đường làng sau cơn mưa. Thần thái mộc mạc, gần gũi, nụ cười hiền hậu."],
  hoaanhdao: ["Mặc bộ kimono truyền thống màu hồng phấn, tóc búi cao cài trâm hoa tinh xảo. Thần thái dịu dàng, e ấp, cô đứng dưới một gốc cây anh đào cổ thụ, tay nhẹ nhàng chạm vào một cành hoa. Makeup trong veo, má ửng hồng đào.", "Trong chiếc váy trắng tinh khôi, mái tóc dài bay trong gió, cô gái tung những cánh hoa anh đào lên trời. Nụ cười hạnh phúc, thần thái tự do, như một nàng tiên giữa vườn hoa. Môi son hồng cam tươi tắn.", "Ngồi trên một chiếc xích đu gỗ, cô mặc bộ trang phục vintage, tay cầm một cuốn sách. Biểu cảm trầm tư, ánh mắt mơ màng nhìn những cánh hoa rơi. Tóc tết vương miện, makeup tông nâu cam.", "Chân dung beauty cận mặt, gương mặt được trang điểm với tông hồng đào trong veo. Vài cánh hoa anh đào được đính tinh tế lên gò má và mái tóc. Đôi mắt long lanh, to tròn.", "Mặc áo dài Việt Nam màu trắng, cô đi dạo trong một công viên đầy hoa anh đào. Phong thái trang nhã, thanh lịch, mái tóc đen dài buông xõa tự nhiên. Nụ cười nhẹ nhàng, thần thái cao quý."],
  hoaroi: ["Như một nàng thơ, cô gái mặc váy maxi voan trắng, đội vòng hoa dại trên đầu. Thần thái tự do, cô nhắm mắt và xoay một vòng giữa cơn mưa hoa hồng lãng mạn. Mái tóc dài uốn sóng, makeup tự nhiên.", "Nằm trên thảm cỏ xanh, xung quanh là những cánh hoa cúc họa mi trắng muốt. Cô mặc chiếc váy babydoll màu vàng nhạt, biểu cảm bình yên, đôi mắt trong veo nhìn lên bầu trời. Tóc tết hai bên.", "Bước xuống từ một cầu thang được rải đầy hoa mẫu đơn, cô mặc một chiếc váy dạ hội lộng lẫy. Thần thái sang trọng, quý phái, như một nữ hoàng. Tóc búi cao, trang điểm sắc sảo.", "Chân dung cận mặt đầy nghệ thuật. Gương mặt được trang điểm với những cánh hoa nhỏ li ti đính trên da. Mái tóc tết cầu kỳ, được trang trí bằng hoa tươi. Ánh mắt bí ẩn.", "Đứng trong một khu rừng huyền bí, cơn mưa hoa tử đằng tím biếc đang rơi xung quanh. Cô mặc trang phục tối màu, thần thái ma mị, quyến rũ. Môi son màu mận chín."],
  hoagiay: ["Trong căn phòng ngập tràn hoa giấy handmade đủ màu sắc, cô gái mặc chiếc váy bồng bềnh màu pastel. Thần thái ngọt ngào, dễ thương, cô ngồi giữa những bông hoa và mỉm cười rạng rỡ. Tóc buộc nửa đầu, kẹp nơ.", "Hành động thổi những bông hoa giấy nhỏ từ lòng bàn tay. Biểu cảm tinh nghịch, vui tươi. Cô mặc áo thun và quần yếm jean, trang điểm nhẹ nhàng, tàn nhang giả.", "Tạo dáng nghệ thuật giữa một bối cảnh toàn hoa giấy khổng lồ. Cô mặc một bộ trang phục avant-garde làm hoàn toàn từ giấy. Thần thái high-fashion, biểu cảm sắc lạnh.", "Chân dung cận mặt với mái tóc bob ngắn màu hồng khói. Gương mặt được trang điểm lấp lánh, tay cầm một bông hoa giấy tinh xảo che một bên mắt. Thần thái cá tính, hiện đại.", "Với biểu cảm tập trung và khéo léo, cô gái đang treo những chuỗi hoa giấy lên một cái cây trong khu vườn. Trang phục bohemian, tóc tết xương cá, thần thái yêu đời."],
  suongmu: ["Trong chiếc áo choàng có mũ trùm đầu, cô gái bước đi một mình trên con đường mòn xuyên qua khu rừng sương mù buổi sáng. Thần thái bí ẩn, cô độc. Không thấy rõ mặt, chỉ có bóng dáng.", "Đứng trên đỉnh núi, phía dưới là biển sương mù bao phủ. Cô mặc một chiếc váy dài màu trắng, mái tóc bay trong gió. Biểu cảm trầm mặc, phóng tầm mắt ra xa.", "Như một tiên nữ lạc trong cõi mộng, cô mặc chiếc váy lụa mỏng manh, đứng bên một hồ nước phẳng lặng. Sương mù giăng kín mặt hồ, thần thái thoát tục, mái tóc buông xõa.", "Chân dung cận mặt, vài giọt sương tinh khôi đọng trên hàng mi cong vút. Ánh mắt trong veo, có chút ngơ ngác. Làn da căng bóng, makeup tự nhiên như không.", "Chèo thuyền độc mộc trên sông vào buổi sớm, xung quanh là sương mù giăng kín mặt nước. Thần thái tĩnh lặng, an nhiên. Cô mặc trang phục giản dị, tóc búi cao gọn gàng."],
  may: ["Mặc chiếc váy trắng bồng bềnh như mây, tóc uốn xoăn nhẹ, cô gái ngồi trên một đám mây xốp mịn giữa trời xanh. Thần thái mơ màng, như đang trong một giấc mơ. Makeup tông đào, má ửng hồng.", "Dang rộng hai tay như đang bay lượn giữa những tầng mây lúc hoàng hôn. Biểu cảm tự do, hạnh phúc. Trang phục thoải mái, năng động. Ánh hoàng hôn chiếu rọi lên mái tóc.", "Đứng trên một ban công nhìn ra thành phố trên mây. Cô mặc trang phục phi hành gia cách điệu, mái tóc màu bạc. Thần thái tương lai, mạnh mẽ. Makeup kim loại, sắc sảo.", "Chân dung cận mặt, cô gái đang thổi một đám mây nhỏ trên tay. Gương mặt ngây thơ, trong sáng, trang điểm tông màu pastel. Đôi mắt to tròn, lấp lánh.", "Hành động câu cá từ trên một đám mây, nhưng thay vì cá, cô lại câu được những ngôi sao lấp lánh. Trang phục cổ tích, thần thái kỳ ảo, nụ cười tinh nghịch."],
  la: ["Trong chiếc áo len cổ lọ màu cam đất và quần culottes, cô gái tung lá vàng mùa thu lên trời và cười tươi. Thần thái ấm áp, vui vẻ. Mái tóc ngắn ngang vai, makeup tông cam đất.", "Ngồi trên ghế dài trong công viên, cô mặc áo khoác dáng dài, chăm chú đọc sách. Xung quanh là con đường trải đầy lá phong đỏ. Biểu cảm suy tư, tri thức. Tóc búi gọn.", "Chân dung một nữ thần rừng mùa thu. Cô mặc một chiếc váy làm từ lá cây thật, mái tóc được kết từ những cành khô. Thần thái quyền lực, huyền bí. Makeup tông màu đất, nhấn vào đôi mắt.", "Hành động thu thập những chiếc lá đẹp nhất để ép vào sổ tay. Cô mặc trang phục giản dị, ngồi trên thảm cỏ. Biểu cảm chăm chú, say mê. Kính gọng tròn, tóc tết đuôi sam.", "Cận cảnh đôi chân đi bốt da cao cổ đang bước đi trên thảm lá khô xào xạc. Phía xa là bóng dáng cô gái đang đi về phía trước. Bố cục mang tính kể chuyện."],
  tim: ["Trước sự ngạc nhiên và hạnh phúc, hàng trăm trái tim 3D màu hồng và đỏ bay xung quanh cô gái. Cô mặc chiếc váy hồng xòe, thần thái đáng yêu. Mái tóc buộc đuôi ngựa cao, makeup ngọt ngào.", "Mặc trang phục hiện đại, cá tính, cô đang dùng tay bắt lấy một trái tim neon đang phát sáng trong không gian tối. Thần thái cool ngầu, bí ẩn. Tóc nhuộm màu nổi bật, khuyên tai cá tính.", "Chân dung beauty cận mặt, gương mặt được trang điểm lấp lánh với hình trái tim nhỏ gần mắt. Mái tóc nhuộm highlight hồng. Biểu cảm tinh nghịch, ngọt ngào, đang nháy mắt.", "Hành động thả một quả bóng bay hình trái tim khổng lồ lên bầu trời. Cô mặc trang phục đơn giản, đứng trên một cánh đồng. Ánh mắt dõi theo quả bóng đầy hy vọng.", "Cận cảnh đôi tay đang chắp lại thành hình trái tim, qua đó lấy nét vào nụ cười rạng rỡ của cô ấy. Lớp sơn móng tay màu đỏ, có hình trái tim nhỏ."],
  kimtuyen: ["Đứng dưới một cơn mưa kim tuyến vàng rơi, cô gái mặc một chiếc váy dạ hội sequin lấp lánh. Thần thái quyến rũ, sang trọng, như một ngôi sao. Tóc búi cao, môi son đỏ đậm.", "Nhảy múa một cách tự do trong căn phòng đầy kim tuyến và ánh đèn disco. Cô mặc trang phục tiệc tùng sành điệu. Thần thái vui vẻ, tràn đầy năng lượng. Tóc xù hippie.", "Hành động thổi một nắm kim tuyến từ lòng bàn tay về phía ống kính. Nụ cười rạng rỡ, ánh mắt lấp lánh. Trang phục đơn giản để làm nổi bật kim tuyến. Makeup glowy.", "Chân dung beauty cận mặt, gương mặt được trang điểm theo phong cách 'galaxy' với kim tuyến và nhũ bạc trên gò má và bầu mắt. Đôi mắt nhắm hờ, biểu cảm mơ màng.", "Nửa gương mặt được che bởi một chiếc mặt nạ hóa trang đính kim tuyến cầu kỳ. Thần thái bí ẩn, mê hoặc. Đôi mắt sắc sảo nhìn thẳng vào ống kính."],
  phaohoa: ["Đứng trên cầu, cô gái mặc áo dài truyền thống, tóc dài buông xõa. Thần thái dịu dàng, cô ngắm nhìn màn pháo hoa rực rỡ đêm giao thừa. Ánh sáng pháo hoa chiếu rọi lên gương mặt.", "Mặc váy dạ hội lộng lẫy, cô đứng trên sân thượng một tòa nhà chọc trời, nâng ly rượu vang chúc mừng. Phía sau là bầu trời đêm rực rỡ pháo hoa. Thần thái sang trọng, thành đạt.", "Chân dung cận mặt với biểu cảm kinh ngạc và vui sướng. Đôi mắt mở to, trong veo, phản chiếu những chùm pháo hoa nhiều màu sắc. Nụ cười hạnh phúc không thể che giấu.", "Cặp đôi đang trao nhau nụ hôn ngọt ngào dưới trời pháo hoa. Ánh sáng lãng mạn chiếu rọi lên hai người. Khoảnh khắc đầy tình yêu và hạnh phúc.", "Tay cầm một cây pháo bông đang cháy, những tia lửa nhỏ phản chiếu trong đôi mắt long lanh của cô gái. Biểu cảm hạnh phúc, nụ cười ấm áp. Trang phục len mùa đông."],
  bongbong: ["Trong công viên ngập nắng, cô gái mặc yếm jean và áo thun trắng, đang thổi những quả bong bóng xà phòng. Thần thái ngây thơ, trong sáng. Mái tóc tết hai bên, má có tàn nhang giả.", "Ngồi thư giãn trong một bồn tắm đầy bọt và bong bóng xà phòng. Biểu cảm vui vẻ, thoải mái. Tóc quấn khăn tắm, vai trần gợi cảm.", "Đứng giữa một căn phòng được trang trí bằng hàng trăm quả bóng bay màu pastel. Cô mặc một chiếc váy công chúa, biểu cảm như đang lạc vào một giấc mơ. Tóc uốn xoăn bồng bềnh.", "Chân dung nghệ thuật cận mặt. Một quả bong bóng xà phòng lớn trong suốt che gần hết gương mặt, tạo hiệu ứng khúc xạ độc đáo. Ánh mắt nhìn xuyên qua quả bong bóng.", "Tạo dáng high-fashion với một chiếc váy avant-garde làm từ chất liệu trong suốt giống bong bóng. Thần thái sắc lạnh, chuyên nghiệp. Bối cảnh tối giản để làm nổi bật trang phục."]
};

export const HANDHELD_ITEMS = [
  // I. NHÓM PHONG CÁCH QUÝ PHÁI – SANG TRỌNG
  "đội một chiếc vương miện hoa hậu quyền lực",
  "cầm một hộp trang sức pha lê lấp lánh",
  "khoác một chiếc túi xách da cao cấp (kiểu Hermès)",
  "cầm một thỏi son đỏ quyến rũ",
  "đeo một cặp kính mát thời trang sang chảnh",
  "choàng một chiếc khăn lông/cashmere thanh lịch",
  "đeo một đôi bao tay da/len sang trọng",
  "khoác hờ một chiếc áo khoác dày cao cổ",
  "đeo một chiếc đồng hồ kim loại sáng bóng",
  "đeo một chuỗi ngọc trai/vòng tay vàng trắng tinh tế",

  // II. NHÓM LÃNG MẠN – NGHỆ THUẬT – THƠ MỘNG
  "cầm một chiếc dù trong suốt lãng mạn",
  "cầm một đóa hoa hồng đỏ/trắng",
  "cầm một bông hoa hướng dương rực rỡ",
  "cầm một đóa hoa sen tinh khôi",
  "cầm một bó hoa baby trắng nhẹ nhàng",
  "ôm một bó hoa pastel thơ mộng",
  "cầm một chùm bóng bay nhiều màu vui tươi",
  "cầm một cây kẹo mút cầu vồng ngọt ngào",
  "cầm một tách trà/ly cappuccino ấm áp",
  "cầm một cuốn sách cũ bìa da tri thức",

  // III. NHÓM DOANH NHÂN – GIÀU CÓ – THÀNH CÔNG
  "cầm một xấp tiền đô la/euro",
  "cầm một thỏi vàng/đồng vàng sáng chói",
  "cầm một chiếc cặp da công sở cao cấp",
  "cầm một chiếc thẻ đen/thẻ platinum VIP",
  "dùng một chiếc laptop MacBook/tablet hiện đại",
  "cầm một tập hồ sơ/hợp đồng bằng da",
  "cầm một chiếc điện thoại cao cấp (Vertu/iPhone Pro)",
  "cầm một cây bút máy Montblanc/Parker",
  "cầm một chiếc gương cầm tay nhỏ tinh xảo",
  "cầm một ly rượu vang pha lê quý phái",

  // IV. NHÓM MÙA ĐÔNG – TUYẾT – TONE LẠNH CỔ ĐIỂN
  "cầm một cây nến nhỏ/đèn dầu ấm áp",
  "cầm một chiếc ô trắng/bạc phản sáng",
  "choàng một chiếc khăn choàng trắng tuyết",
  "ôm một chú gấu bông trắng mềm mại",
  "cầm một chiếc gương băng phản sáng xanh huyền ảo",
  "cầm một bông tuyết pha lê nhân tạo",
  "cầm một cành cây phủ tuyết trắng",
  "cầm một chiếc đồng hồ cổ/pocket watch",
  "cầm một hộp quà trắng buộc ruy băng",
  "đeo một đôi găng tay lông trắng thanh lịch",

  // V. NHÓM VĂN HÓA – CỔ ĐIỂN – BẢN SẮC VIỆT & Á ĐÔNG
  "đội một chiếc nón lá Việt Nam",
  "cầm một cây quạt giấy/quạt gỗ cổ điển",
  "cầm một chiếc đèn lồng đỏ/trắng",
  "cầm một chiếc chuông gió Nhật (furin)",
  "dùng một bộ ấm trà gốm Nhật/bình trà đất nung",
  "cầm một cuộn thư pháp/giấy viết tay",
  "cầm một chiếc gương cổ khung vàng",
  "cầm một cây quạt lụa/quạt cổ trang",
  "cầm một cành trúc/cành đào nhỏ",
  "cầm một chú chim bồ câu trắng"
];


export const BACKGROUNDS = [
    "trên một đỉnh núi hùng vĩ lúc bình minh", "trong một khu rừng tre xanh mướt", "giữa một cánh đồng hoa oải hương bất tận", "trên một bãi biển nhiệt đới với cát trắng và biển xanh", "trong một con hẻm nhỏ ở Hội An với đèn lồng rực rỡ", "trên sân thượng một tòa nhà chọc trời ở New York", "trong một thư viện cổ kính với hàng ngàn cuốn sách", "tại một ga tàu hơi nước cổ điển", "giữa một khu chợ đêm nhộn nhịp ở Thái Lan", "trong một cung điện hoàng gia tráng lệ", "bên cạnh một hồ nước pha lê trong xanh", "trên một cây cầu treo lơ lửng giữa thung lũng", "trong một ngôi đền cổ ở Kyoto, Nhật Bản", "giữa một sa mạc cát mênh mông lúc hoàng hôn", "trong một khu vườn hoàng gia kiểu Pháp", "trên một con phố ngập tràn ánh đèn neon ở Tokyo", "bên trong một nhà kính thực vật khổng lồ", "giữa một lễ hội carnival rực rỡ sắc màu", "trên một du thuyền sang trọng giữa đại dương", "trong một phòng trà đạo truyền thống của Nhật", "dưới một bầu trời đầy sao và dải ngân hà", "trong một hang động băng tuyết kỳ ảo", "trên một con đường làng quê yên bình", "tại một quảng trường ở Châu Âu cổ kính", "bên trong một viện bảo tàng nghệ thuật hiện đại", "giữa một cánh đồng lúa chín vàng ươm", "trên một vách đá nhìn ra biển cả", "trong một ngôi nhà gỗ ấm cúng giữa rừng", "tại một lễ hội đèn trời ở Chiang Mai", "bên một dòng sông băng ở Iceland", "trong một khu phố cổ với kiến trúc độc đáo", "giữa một vườn quốc gia hoang dã", "trên một con thuyền gondola ở Venice", "trong một lâu đài cổ tích ở Đức", "tại một quán cafe vỉa hè ở Paris", "dưới một cây cầu cổ kính", "trong một khu vui chơi giải trí đầy màu sắc", "giữa một cánh đồng hoa hướng dương", "trên một con tàu vũ trụ nhìn ra Trái Đất", "trong một phòng thí nghiệm khoa học tương lai", "tại một buổi hòa nhạc rock sôi động", "bên một ngọn hải đăng sừng sững", "trong một khu rừng nhiệt đới rậm rạp", "trên một con đường mòn đi bộ xuyên rừng", "tại một trường đua ngựa", "bên trong một nhà hát opera lộng lẫy", "giữa một cánh đồng chè xanh bát ngát", "trên một hòn đảo hoang vắng", "trong một khu ổ chuột cyberpunk", "tại một tu viện trên núi cao"
];

export const LOCATIONS = [
    "Vịnh Hạ Long, Việt Nam", "Santorini, Hy Lạp", "Kyoto, Nhật Bản", "Paris, Pháp", "Rome, Ý", "Bora Bora, French Polynesia", "New York City, Mỹ", "Machu Picchu, Peru", "Maldives", "Venice, Ý", "Prague, Cộng hòa Séc", "London, Anh", "Bagan, Myanmar", "Great Barrier Reef, Úc", "Cairo, Ai Cập", "Cappadocia, Thổ Nhĩ Kỳ", "Banff National Park, Canada", "Iceland", "Rio de Janeiro, Brazil", "Petra, Jordan", "Thác Iguazu, Argentina/Brazil", "Angkor Wat, Campuchia", "Vạn Lý Trường Thành, Trung Quốc", "Serengeti National Park, Tanzania", "New Zealand", "Amsterdam, Hà Lan", "Barcelona, Tây Ban Nha", "Dubai, UAE", "Moscow, Nga", "Havana, Cuba", "Lisbon, Bồ Đào Nha", "Seoul, Hàn Quốc", "Bangkok, Thái Lan", "Singapore", "Sydney, Úc", "Edinburgh, Scotland", "Vienna, Áo", "Budapest, Hungary", "Jaipur, Ấn Độ", "Marrakech, Morocco", "Cánh đồng muối Salar de Uyuni, Bolivia", "Quần đảo Galapagos, Ecuador", "Thác Victoria, Zambia/Zimbabwe", "Rừng Amazon", "Antarctica", "Hồ Louise, Canada", "Thung lũng Monument, Mỹ", "Florence, Ý", "Dubrovnik, Croatia", "Zermatt, Thụy Sĩ"
];

export const PETS = [
  "bên cạnh một con gà trống Đông Tảo trưởng thành oai vệ",
  "cùng một con vịt trời trưởng thành sặc sỡ",
  "với một con ngỗng trắng khổng lồ, kiêu hãnh",
  "dắt một chú chó Ngao Tây Tạng trưởng thành dũng mãnh",
  "bên cạnh một con mèo Maine Coon to lớn, sang trọng",
  "cùng một con hổ Siberia trưởng thành, uy nghi",
  "vuốt ve một con báo đốm trưởng thành, cơ bắp",
  "đứng cạnh một con hươu sừng tấm trưởng thành cao lớn",
  "cùng một con voi châu Phi trưởng thành khổng lồ",
  "cưỡi một con ngựa chiến Shire to lớn, oai vệ",
  "bên cạnh một con rùa Galápagos khổng lồ, cổ xưa",
  "cùng một con khỉ đột lưng bạc trưởng thành, quyền lực",
  "dắt một con lạc đà hai bướu trưởng thành, to lớn",
  "bên cạnh một con thỏ Flemish khổng lồ hiền lành",
  "đứng cùng một con đà điểu châu Phi trưởng thành cao lớn",
  "với một con đại bàng Harpy trưởng thành, oai phong đậu trên tay",
  "bơi cùng một con cá mập trắng trưởng thành khổng lồ",
  "vui đùa cùng một đàn cá heo trưởng thành thông minh",
  "ngồi cạnh một con chuột lang nước Capybara trưởng thành, thân thiện",
  "giữa một đàn cừu núi sừng lớn dũng mãnh",
  "bên cạnh một con lợn rừng trưởng thành, hoang dã",
  "ôm một chú gấu trúc khổng lồ trưởng thành",
  "cho một con sóc khổng lồ Ấn Độ nhiều màu sắc ăn hạt",
  "cùng một con cáo tuyết Bắc Cực trưởng thành, thanh lịch",
  "bên cạnh một con sư tử đực trưởng thành với bờm oai vệ",
  "với một con vẹt Hyacinth Macaw trưởng thành, to lớn và sặc sỡ",
  "đi cùng một đoàn chim cánh cụt Hoàng đế trưởng thành, trang nghiêm",
  "cùng một chú gấu Koala trưởng thành to lớn",
  "chơi đùa với một con Kangaroo đỏ trưởng thành, cao lớn",
  "bên cạnh hồ cá Koi Nhật Bản trưởng thành, kích thước lớn",
  "cùng một đôi thiên nga đen trưởng thành, kiêu hãnh trên hồ",
  "với một chú chim công trống trưởng thành đang xòe đuôi lộng lẫy",
  "cưỡi một con kỳ lân trưởng thành, uy nghi, có cánh",
  "sát cánh cùng một con rồng phương Tây khổng lồ, uy mãnh",
  "với một con phượng hoàng lửa trưởng thành, rực rỡ",
  "dắt một chú chó Great Dane trưởng thành, cao lớn và thanh lịch",
  "vuốt ve một con mèo Savannah trưởng thành, hoang dã",
  "cưỡi một con ngựa lùn Pony trưởng thành, vạm vỡ",
  "bên cạnh một con bò tót Tây Ban Nha dũng mãnh",
  "chơi với một con hải tượng trưởng thành to lớn",
  "ngồi cạnh một con gấu trắng Bắc Cực trưởng thành khổng lồ",
  "trên một vách đá cùng một con dê núi sừng dài, trưởng thành",
  "bơi cùng một đàn cá đuối Manta khổng lồ",
  "giữa một đàn sứa Nomura khổng lồ, phát sáng huyền ảo",
  "với hàng trăm con bướm cánh chim khổng lồ bay quanh",
  "bên cạnh một con trăn Anaconda trưởng thành, to lớn",
  "với một con chim hồng hạc trưởng thành, duyên dáng",
  "dắt một con lạc đà Alpaca trưởng thành, lông xù",
  "cùng một con sói xám Bắc Mỹ trưởng thành, uy nghiêm",
  "chơi đùa cùng một con gấu nâu Kodiak khổng lồ"
];

export const TRAVEL_DESTINATIONS = [
  {
    country: "Pháp",
    locations: ["Khách sạn Ritz Paris", "Cung điện Versailles (Tour riêng)", "Du thuyền trên sông Seine", "Bảo tàng Louvre (Tham quan sau giờ làm việc)", "Trải nghiệm mua sắm tại đại lộ Champs-Élysées", "Thưởng thức ẩm thực tại nhà hàng 3 sao Michelin L'Arpège", "Khu nghỉ dưỡng Cheval Blanc St-Tropez", "Lâu đài Chenonceau ở Thung lũng Loire", "Trượt tuyết tại Courchevel 1850", "Thành phố cổ Saint-Paul-de-Vence", "Vườn nho ở Bordeaux (Tour thử rượu vang cao cấp)", "Khách sạn Hôtel du Cap-Eden-Roc, Antibes", "Đảo Corsica hoang dã", "Lễ hội phim Cannes", "Thành phố ánh sáng Lyon", "Cung điện của các Giáo hoàng ở Avignon", "Vùng Provence và những cánh đồng oải hương", "Trải nghiệm khinh khí cầu trên Thung lũng Loire", "Bảo tàng D'Orsay", "Nhà hát Opera Garnier", "Vùng rượu vang Burgundy", "Mont Saint-Michel", "Khu phố Le Marais, Paris", "Vườn Luxembourg", "Thưởng thức bánh macaron tại Ladurée", "Chợ hoa Cours Saleya, Nice", "Vách đá Étretat", "Khu nghỉ dưỡng Four Seasons Grand-Hôtel du Cap-Ferrat", "Đường đua Monaco Grand Prix", "Bảo tàng Picasso", "Làng Giverny và khu vườn của Monet", "Thành phố Strasbourg", "Dãy núi Alps của Pháp", "Hẻm núi Verdon", "Bãi biển Pampelonne, St. Tropez", "Lâu đài Chambord", "Nhà thờ Đức Bà Paris", "Đồi Montmartre và Vương cung thánh đường Sacré-Cœur", "Đi dạo ở Saint-Germain-des-Prés", "Thành phố cảng Marseille", "Cầu Pont du Gard", "Khu trượt tuyết Chamonix", "Bảo tàng Rodin", "Thưởng thức sô-cô-la tại La Maison du Chocolat", "Thành phố Biarritz", "Đảo Ré", "Khu nghỉ dưỡng Aman Le Mélézin, Courchevel", "Nhà hàng Le Cinq, Paris", "Đi bộ trên Promenade des Anglais, Nice", "Khám phá vùng Alsace"]
  },
  {
    country: "Ý",
    locations: ["Khách sạn Belmond Hotel Caruso, Bờ biển Amalfi", "Đấu trường La Mã (Tour VIP)", "Đi thuyền Gondola riêng ở Venice", "Tháp nghiêng Pisa", "Thưởng thức ẩm thực tại Osteria Francescana (3 sao Michelin)", "Lái siêu xe Ferrari qua vùng Tuscany", "Đảo Capri và hang Blue Grotto", "Khu nghỉ dưỡng Grand Hotel Tremezzo, Hồ Como", "Thành Vatican và Nhà nguyện Sistine (Tour riêng)", "Bộ sưu tập nghệ thuật Uffizi, Florence", "Thành phố cổ Pompeii", "Nhà thờ Florence (Duomo)", "Khu Cinque Terre đầy màu sắc", "Trưởng thức rượu vang ở vùng Chianti", "Mua sắm tại quận thời trang Milan", "Khách sạn Il San Pietro di Positano", "Trượt tuyết ở dãy Dolomites", "Thành phố Siena và quảng trường Piazza del Campo", "Khám phá vùng Puglia", "Đảo Sicily và núi lửa Etna", "Verona và ban công của Juliet", "Khách sạn Four Seasons, Florence", "Hồ Garda", "Bologna - thủ đô ẩm thực của Ý", "Thành phố cảng Genoa", "Khu khảo cổ Thung lũng các ngôi đền, Agrigento", "Đảo Sardinia và Costa Smeralda", "Khách sạn Aman Venice", "Khu nghỉ dưỡng Rosewood Castiglion del Bosco, Tuscany", "Thành phố Naples lịch sử", "Suối nước nóng Saturnia", "Thành phố Turin", "Đảo Ischia", "Dinh thự Villa d'Este, Tivoli", "Thành phố Matera", "Vùng Umbria", "Nhà hát La Scala, Milan", "Quảng trường St. Mark, Venice", "Ponte Vecchio, Florence", "Đài phun nước Trevi, Rome", "Pantheon, Rome", "Ẩm thực đường phố Palermo", "Thành phố Perugia", "Dãy núi Apennine", "Lễ hội Carnival Venice", "Đảo Elba", "Khu nghỉ dưỡng Lefay Resort & SPA Lago di Garda", "Khám phá vùng Calabria", "Thành phố Trieste", "Trường đua Monza"]
  },
  {
    country: "Nhật Bản",
    locations: ["Khách sạn Aman Tokyo", "Trải nghiệm Ryokan (nhà trọ truyền thống) cao cấp ở Hakone", "Ăn tối tại nhà hàng Sukiyabashi Jiro (3 sao Michelin)", "Ngắm hoa anh đào ở Công viên Ueno, Tokyo", "Đền Kinkaku-ji (Chùa Vàng), Kyoto", "Khu phố Gion, Kyoto và xem Geisha biểu diễn", "Tàu cao tốc Shinkansen (vé hạng nhất)", "Trượt tuyết ở Niseko, Hokkaido", "Đảo nghệ thuật Naoshima", "Đền Fushimi Inari-taisha, Kyoto", "Công viên quốc gia Shiretoko, Hokkaido", "Tắm Onsen riêng tại một khu nghỉ dưỡng sang trọng", "Khách sạn Park Hyatt Tokyo", "Cung điện Hoàng gia Tokyo", "Đền Meiji, Tokyo", "Khu rừng tre Arashiyama, Kyoto", "Lâu đài Himeji", "Công viên Nara và những chú hươu thân thiện", "Thành phố Osaka và khu Dotonbori", "Đảo Okinawa và những bãi biển tuyệt đẹp", "Tham dự một buổi trà đạo truyền thống", "Núi Phú Sĩ (trải nghiệm leo núi hoặc ngắm cảnh từ xa)", "Bảo tàng Ghibli, Mitaka", "Thành phố Sapporo và Lễ hội tuyết", "Khu nghỉ dưỡng Hoshinoya Kyoto", "Thành phố cổ Takayama", "Công viên khỉ Jigokudani", "Thành phố Hiroshima và Công viên Tưởng niệm Hòa bình", "Đảo Miyajima và cổng Torii nổi", "Thành phố Kanazawa", "Trải nghiệm xem đấu vật Sumo", "Thung lũng Kiso", "Mua sắm ở Ginza, Tokyo", "Khu phố điện tử Akihabara, Tokyo", "Đền Todai-ji, Nara", "Vườn Kenrokuen, Kanazawa", "Khu nghỉ dưỡng Gora Kadan, Hakone", "Thành phố Fukuoka", "Đảo Yakushima", "Trải nghiệm mặc Kimono/Yukata", "Thành phố Kobe và thịt bò Kobe", "Lâu đài Matsumoto", "Bảo tàng nghệ thuật số teamLab Borderless", "Thành phố Yokohama", "Chợ cá Tsukiji, Tokyo", "Khu trượt tuyết Hakuba", "Đền Itsukushima", "Thành phố Nagoya", "Thưởng thức rượu Sake tại một nhà máy truyền thống", "Khu nghỉ dưỡng The Ritz-Carlton, Kyoto"]
  },
  {
    country: "Hoa Kỳ",
    locations: ["Tượng Nữ thần Tự do và Đảo Ellis, New York", "Công viên Trung tâm (Central Park), New York", "Quảng trường Thời đại (Times Square), New York", "Cầu Cổng Vàng (Golden Gate Bridge), San Francisco", "Grand Canyon, Arizona (Tour trực thăng)", "Công viên quốc gia Yellowstone", "Las Vegas Strip và các khách sạn-casino sang trọng", "Hollywood Walk of Fame, Los Angeles", "Công viên quốc gia Yosemite, California", "Bãi biển Waikiki, Hawaii", "Thành phố New Orleans và khu phố Pháp", "Thủ đô Washington D.C. và các di tích quốc gia", "Công viên quốc gia Zion, Utah", "Thành phố Chicago và kiến trúc độc đáo", "Miami và bãi biển South Beach", "Dãy núi Rocky, Colorado", "Thành phố Boston lịch sử", "Công viên giải trí Walt Disney World, Florida", "Seattle và Space Needle", "Vùng sản xuất rượu vang Napa Valley, California", "Khách sạn The Beverly Hills Hotel, Los Angeles", "Khu nghỉ dưỡng Amangiri, Utah", "Thành phố San Diego", "Vườn quốc gia Glacier, Montana", "Đường cao tốc Pacific Coast Highway", "Thành phố Philadelphia", "Khu nghỉ dưỡng Four Seasons Resort Maui tại Wailea, Hawaii", "Aspen, Colorado - khu trượt tuyết cao cấp", "Thành phố Austin, Texas", "Khu vực Florida Keys", "Thành phố Charleston, South Carolina", "Khu nghỉ dưỡng The Breakers, Palm Beach, Florida", "Công viên quốc gia Arches, Utah", "Thành phố Portland, Oregon", "Khu vực Big Sur, California", "Khu nghỉ dưỡng Post Ranch Inn, Big Sur", "Thành phố Savannah, Georgia", "Công viên quốc gia Denali, Alaska", "Hồ Tahoe", "Thành phố Nashville, Tennessee", "Xem một vở kịch Broadway ở New York", "Khách sạn The Plaza, New York", "Thành phố Santa Fe, New Mexico", "Công viên quốc gia Grand Teton, Wyoming", "Khu vực Hamptons, New York", "Thành phố Salt Lake City, Utah", "Đảo Nantucket, Massachusetts", "Khám phá hẻm núi Antelope, Arizona", "Thành phố Denver, Colorado", "Bảo tàng nghệ thuật Metropolitan, New York"]
  },
  {
    country: "Các Tiểu vương quốc Ả Rập Thống nhất (UAE)",
    locations: ["Tòa nhà Burj Khalifa, Dubai", "Khách sạn 7 sao Burj Al Arab, Dubai", "Quần đảo Cây Cọ (Palm Jumeirah), Dubai", "Trung tâm mua sắm The Dubai Mall và thủy cung", "Sa mạc Safari (Tour xe Land Cruiser và ăn tối sang trọng)", "Thánh đường Hồi giáo Sheikh Zayed, Abu Dhabi", "Công viên giải trí Ferrari World, Abu Dhabi", "Bảo tàng Louvre Abu Dhabi", "Khu nghỉ dưỡng Atlantis, The Palm, Dubai", "Cung điện Emirates, Abu Dhabi", "Chợ vàng (Gold Souk) và Chợ gia vị (Spice Souk), Dubai", "Khu nghỉ dưỡng sa mạc Al Maha, a Luxury Collection Desert Resort & Spa", "Đài phun nước Dubai", "Khu trượt tuyết trong nhà Ski Dubai", "Bến du thuyền Dubai Marina", "Vườn hoa Dubai Miracle Garden", "Khu phố cổ Al Fahidi, Dubai", "Khu nghỉ dưỡng One&Only The Palm, Dubai", "Công viên nước Wild Wadi", "Đảo Yas, Abu Dhabi", "Khách sạn Armani Hotel Dubai", "Thành phố Al Ain", "Công viên giải trí IMG Worlds of Adventure", "Khung tranh Dubai Frame", "Trải nghiệm bay thủy phi cơ ngắm cảnh Dubai", "Khu nghỉ dưỡng Anantara Qasr al Sarab Desert Resort", "Bãi biển Jumeirah", "Thưởng thức ẩm thực tại nhà hàng At.mosphere trên tầng 122 Burj Khalifa", "Đua xe trên đường đua Yas Marina, Abu Dhabi", "Đảo Saadiyat, Abu Dhabi", "Khu nghỉ dưỡng Zaya Nurai Island", "Chợ Madinat Jumeirah", "Thành phố Sharjah", "Global Village, Dubai", "Đi du thuyền sang trọng ở Dubai Marina", "Khu nghỉ dưỡng Bulgari Resort Dubai", "Tháp Etihad, Abu Dhabi", "Khu bảo tồn động vật hoang dã Sir Bani Yas Island", "Khu nghỉ dưỡng Jumeirah Al Naseem", "Câu lạc bộ bãi biển Nikki Beach Dubai", "Bảo tàng Tương lai (Museum of the Future)", "Thưởng thức trà chiều tại Skyview Bar, Burj Al Arab", "Sân golf Emirates Golf Club", "Công viên giải trí Warner Bros. World Abu Dhabi", "Đi bộ trên phố City Walk, Dubai", "Khu nghỉ dưỡng The Ritz-Carlton Ras Al Khaimah, Al Wadi Desert", "Vườn thú Al Ain", "Xem đua lạc đà", "Tham quan chợ lạc đà Al Ain", "Khu nghỉ dưỡng Waldorf Astoria Dubai Palm Jumeirah"]
  },
  {
    country: "Maldives",
    locations: ["Khu nghỉ dưỡng Cheval Blanc Randheli", "Khu nghỉ dưỡng Four Seasons Landaa Giraavaru", "Nhà hàng dưới biển Ithaa", "Khu nghỉ dưỡng W Maldives", "Biệt thự trên mặt nước (Overwater Villa) với hồ bơi riêng", "Lặn biển với cá mập voi và cá đuối Manta", "Khu nghỉ dưỡng The St. Regis Maldives Vommuli Resort", "Trải nghiệm spa dưới nước tại Huvafen Fushi", "Khu nghỉ dưỡng One&Only Reethi Rah", "Đi thủy phi cơ ngắm san hô từ trên cao", "Bãi biển phát sáng ở đảo Vaadhoo", "Khu nghỉ dưỡng Conrad Maldives Rangali Island", "Ăn tối trên một bãi cát riêng (Sandbank Dining)", "Du thuyền sang trọng khám phá các đảo san hô", "Khu nghỉ dưỡng Velaa Private Island", "Câu cá lúc hoàng hôn", "Lướt sóng ở các rạn san hô", "Khu nghỉ dưỡng Gili Lankanfushi", "Biệt thự The Muraka (phòng ngủ dưới biển)", "Khu nghỉ dưỡng Joali Maldives", "Khu nghỉ dưỡng Soneva Jani và cầu trượt nước từ biệt thự xuống biển", "Khu nghỉ dưỡng Park Hyatt Maldives Hadahaa", "Khám phá thủ đô Malé", "Spa tại The Ritz-Carlton Maldives, Fari Islands", "Khu nghỉ dưỡng Waldorf Astoria Maldives Ithaafushi", "Khu nghỉ dưỡng Anantara Kihavah Maldives Villas", "Chèo thuyền kayak đáy kính", "Khu nghỉ dưỡng Six Senses Laamu", "Xem phim ngoài trời trên bãi biển", "Khu nghỉ dưỡng Patina Maldives, Fari Islands", "Tham quan một hòn đảo địa phương", "Học nấu các món ăn Maldives", "Khu nghỉ dưỡng Niyama Private Islands", "Câu lạc bộ dưới nước Subsix", "Khu nghỉ dưỡng Baros Maldives", "Khu nghỉ dưỡng Amilla Maldives Resort and Residences", "Khu nghỉ dưỡng The Nautilus Maldives", "Khu nghỉ dưỡng Kudadoo Maldives Private Island (All-inclusive)", "Lặn với ống thở trong khu bảo tồn biển", "Khu nghỉ dưỡng LUX* South Ari Atoll", "Thưởng thức cocktail ngắm hoàng hôn", "Yoga và thiền định trên biển", "Khu nghỉ dưỡng The Westin Maldives Miriandhoo Resort", "Đài quan sát dưới nước tại Anantara Kihavah", "Khu nghỉ dưỡng Ozen Life Maadhoo", "Chèo ván đứng (SUP) trên làn nước trong xanh", "Khu nghỉ dưỡng Hurawalhi Maldives và nhà hàng 5.8 Undersea", "Khu nghỉ dưỡng Milaidhoo Island Maldives", "Tham gia các hoạt động bảo tồn biển", "Khu nghỉ dưỡng Baglioni Resort Maldives"]
  },
  {
    country: "Thụy Sĩ",
    locations: ["Đỉnh núi Matterhorn, Zermatt", "Khu nghỉ dưỡng Badrutt's Palace Hotel, St. Moritz", "Đi tàu景观 Glacier Express", "Hồ Geneva và đài phun nước Jet d'Eau", "Thành phố cổ Lucerne và Cầu Chapel", "Khu nghỉ dưỡng trượt tuyết Zermatt", "Thị trấn Interlaken", "Đỉnh núi Jungfraujoch - Top of Europe", "Thành phố Zurich và hồ Zurich", "Lâu đài Chillon", "Thác Rhine", "Khu nghỉ dưỡng The Dolder Grand, Zurich", "Thành phố Bern - Di sản UNESCO", "Hồ Lucerne", "Khu nghỉ dưỡng Gstaad Palace", "Thị trấn Grindelwald", "Thưởng thức sô-cô-la tại nhà máy Lindt Home of Chocolate", "Đi bộ đường dài ở dãy Alps", "Thành phố Lausanne và Bảo tàng Olympic", "Hồ Brienz", "Khu nghỉ dưỡng Victoria Jungfrau Grand Hotel & Spa, Interlaken", "Đỉnh núi Pilatus", "Thành phố St. Gallen và thư viện Abbey", "Vườn quốc gia Thụy Sĩ", "Thị trấn Montreux", "Đi tàu GoldenPass Line", "Hồ Lugano", "Khu nghỉ dưỡng Beau-Rivage Palace, Lausanne", "Thung lũng Lauterbrunnen", "Thưởng thức lẩu phô mai (cheese fondue) truyền thống", "Thành phố Basel và các bảo tàng nghệ thuật", "Đỉnh Titlis", "Hồ Thun", "Khu nghỉ dưỡng Kulm Hotel St. Moritz", "Tham quan nhà máy sản xuất đồng hồ cao cấp (Patek Philippe, Rolex)", "Thành phố Appenzell", "Hồ Oeschinen", "Khu nghỉ dưỡng Bürgenstock Resort, Lake Lucerne", "Thị trấn Stein am Rhein", "Đi cáp treo lên đỉnh Schilthorn (Piz Gloria)", "Hồ Blausee", "Khu nghỉ dưỡng Grand Hotel Kronenhof, Pontresina", "Đi bộ trên cầu treo Charles Kuonen", "Thành phố Fribourg", "Vùng sản xuất rượu vang Lavaux", "Hẻm núi Aare", "Khu nghỉ dưỡng The Chedi Andermatt", "Cung điện băng (Ice Palace) ở Jungfraujoch", "Tham quan trụ sở Liên Hợp Quốc tại Geneva", "Đi bộ qua cầu Trift"]
  },
  {
    country: "Việt Nam",
    locations: ["Vịnh Hạ Long (Du thuyền 5 sao Paradise)", "Khu nghỉ dưỡng Six Senses Ninh Vân Bay, Nha Trang", "Phố cổ Hội An - Di sản UNESCO", "Khu nghỉ dưỡng InterContinental Danang Sun Peninsula Resort", "Ruộng bậc thang Sapa", "Khu nghỉ dưỡng Amanoi, Vĩnh Hy", "Quần thể di tích Cố đô Huế", "Địa đạo Củ Chi, TP. Hồ Chí Minh", "Đảo Phú Quốc và JW Marriott Phu Quoc Emerald Bay Resort & Spa", "Hang Sơn Đoòng (Tour thám hiểm độc quyền)", "Thành phố Đà Lạt mộng mơ", "Đồng bằng sông Cửu Long (Tour thuyền riêng)", "Khu nghỉ dưỡng Four Seasons The Nam Hai, Hội An", "Thủ đô Hà Nội và khu phố cổ", "Bãi biển Mỹ Khê, Đà Nẵng", "Lăng Chủ tịch Hồ Chí Minh", "Nhà hát Lớn Hà Nội", "Thánh địa Mỹ Sơn", "Khu nghỉ dưỡng Banyan Tree Lăng Cô", "Mũi Né và đồi cát", "Đảo Côn Đảo và Six Senses Con Dao", "Vườn quốc gia Phong Nha - Kẻ Bàng", "Thành phố Hồ Chí Minh sôi động và Dinh Độc Lập", "Khu nghỉ dưỡng The Reverie Saigon", "Chợ Bến Thành, TP. Hồ Chí Minh", "Hồ Hoàn Kiếm và Đền Ngọc Sơn, Hà Nội", "Cao nguyên đá Đồng Văn, Hà Giang", "Thác Bản Giốc", "Vịnh Lan Hạ", "Khu nghỉ dưỡng Zannier Hotels Bãi San Hô, Phú Yên", "Cầu Vàng, Bà Nà Hills, Đà Nẵng", "Thành phố biển Nha Trang", "Đảo Lý Sơn", "Vườn quốc gia Cúc Phương", "Khu du lịch Tràng An, Ninh Bình", "Thành phố Vũng Tàu", "Đảo Bình Ba", "Khu nghỉ dưỡng Anantara Quy Nhon Villas", "Thưởng thức ẩm thực đường phố Hà Nội và TP.HCM", "Xem múa rối nước", "Mặc áo dài truyền thống và chụp ảnh", "Hồ Ba Bể", "Khu nghỉ dưỡng Topas Ecolodge, Sapa", "Làng cổ Đường Lâm", "Chợ nổi Cái Răng, Cần Thơ", "Thành nhà Hồ", "Khu nghỉ dưỡng Azerai Cần Thơ", "Đi xe máy trên đèo Hải Vân", "Chùa Thiên Mụ, Huế", "Khu nghỉ dưỡng Regent Phu Quoc"]
  },
  {
    country: "Thái Lan",
    locations: ["Cung điện Hoàng gia, Bangkok", "Chùa Phật Ngọc (Wat Phra Kaew), Bangkok", "Khu nghỉ dưỡng Six Senses Yao Noi, Vịnh Phang Nga", "Đảo Phi Phi", "Thành phố cổ Ayutthaya", "Khu nghỉ dưỡng Amanpuri, Phuket", "Chợ nổi Damnoen Saduak", "Thành phố Chiang Mai và các ngôi đền cổ", "Khu nghỉ dưỡng Four Seasons Tented Camp Golden Triangle", "Đảo Koh Samui và các khu nghỉ dưỡng sang trọng", "Trại cứu trợ voi Elephant Nature Park, Chiang Mai", "Bãi biển Railay, Krabi", "Khu nghỉ dưỡng Soneva Kiri, Koh Kood", "Thưởng thức ẩm thực đường phố Bangkok", "Xem một trận đấu Muay Thái", "Thành phố Pattaya", "Đảo Similan (Lặn biển)", "Khu nghỉ dưỡng The Siam Hotel, Bangkok", "Chợ cuối tuần Chatuchak, Bangkok", "Thành phố Chiang Rai và Chùa Trắng (Wat Rong Khun)", "Khu nghỉ dưỡng Rosewood Phuket", "Vịnh Maya", "Vườn quốc gia Khao Sok", "Đảo Koh Lanta", "Khu nghỉ dưỡng Mandarin Oriental, Bangkok", "Thị trấn Pai", "Đảo Koh Tao (Thiên đường lặn biển)", "Khu nghỉ dưỡng Banyan Tree Samui", "Sông Chao Phraya, Bangkok (Du thuyền ăn tối)", "Lễ hội té nước Songkran", "Lễ hội đèn trời Yi Peng, Chiang Mai", "Khu nghỉ dưỡng Pimalai Resort & Spa, Koh Lanta", "Thành phố Phuket cổ", "Đảo James Bond", "Khu nghỉ dưỡng Keemala, Phuket", "Cầu sông Kwai", "Thành phố Hua Hin", "Khu nghỉ dưỡng Chiva-Som International Health Resort, Hua Hin", "Vườn quốc gia Erawan", "Đảo Koh Phangan và Full Moon Party", "Khu nghỉ dưỡng Rayavadee, Krabi", "Thưởng thức cocktail tại một sky bar ở Bangkok ( Sirocco, Vertigo)", "Trang trại hoa lan và bướm", "Cung điện Mùa hè Bang Pa-In", "Chợ đường sắt Maeklong", "Khu nghỉ dưỡng The Ritz-Carlton, Koh Samui", "Đảo Koh Chang", "Thành phố Sukhothai", "Khu nghỉ dưỡng Anantara Golden Triangle Elephant Camp & Resort", "Trải nghiệm massage Thái truyền thống"]
  },
  {
    country: "Tây Ban Nha",
    locations: ["Nhà thờ Sagrada Familia, Barcelona", "Cung điện Alhambra, Granada", "Bảo tàng Prado, Madrid", "Thành phố Ibiza và các câu lạc bộ sang trọng", "Bãi biển La Concha, San Sebastián", "Cung điện Hoàng gia Madrid", "Công viên Güell, Barcelona", "Thành phố Seville và điệu nhảy Flamenco", "Nhà thờ Hồi giáo-Nhà thờ chính tòa Córdoba", "Thành phố cổ Toledo", "Bảo tàng Guggenheim, Bilbao", "Thành phố Valencia và Ciudad de las Artes y las Ciencias", "Đảo Majorca", "Khu nghỉ dưỡng Marbella Club Hotel, Costa del Sol", "Khu phố Gothic, Barcelona", "Ăn tối tại nhà hàng El Celler de Can Roca (3 sao Michelin)", "Đảo Tenerife", "Con đường hành hương Santiago de Compostela", "Thành phố Salamanca", "Khu nghỉ dưỡng Hotel Arts Barcelona", "Chạy đua với bò tót ở Pamplona (Lễ hội San Fermín)", "Thành phố Zaragoza", "Khu nghỉ dưỡng W Barcelona", "Dãy núi Picos de Europa", "Thành phố Ronda và cây cầu Puente Nuevo", "Lễ hội La Tomatina", "Đảo Lanzarote", "Khu nghỉ dưỡng Mandarin Oriental Ritz, Madrid", "Bảo tàng Picasso, Málaga", "Thành phố Segovia và cống dẫn nước La Mã", "Đảo Formentera", "Khu nghỉ dưỡng Six Senses Ibiza", "Bảo tàng Reina Sofía, Madrid", "Thành phố Girona", "Đảo Gran Canaria", "Khu nghỉ dưỡng Finca Cortesin, Andalusia", "Sân vận động Santiago Bernabéu (Real Madrid)", "Thưởng thức rượu vang ở vùng La Rioja", "Thành phố Cádiz", "Khu nghỉ dưỡng Hotel Maria Cristina, a Luxury Collection Hotel, San Sebastián", "Bờ biển Costa Brava", "Vườn quốc gia Teide, Tenerife", "Xem một trận đấu bò tót (tùy thuộc vào quan điểm cá nhân)", "Thành phố Córdoba", "Khu nghỉ dưỡng Nobu Hotel Ibiza Bay", "Chợ La Boqueria, Barcelona", "Công viên Retiro, Madrid", "Thành phố Alicante", "Nhà hát La Mã ở Mérida", "Khu nghỉ dưỡng Puente Romano Beach Resort, Marbella"]
  },
  {
    country: "Úc",
    locations: ["Nhà hát Opera Sydney", "Cầu cảng Sydney", "Rạn san hô Great Barrier Reef (Lặn biển hoặc tour trực thăng)", "Đá Uluru (Ayers Rock)", "Thành phố Melbourne và những con hẻm nghệ thuật", "Đường Great Ocean Road", "Đảo Whitsunday và Bãi biển Whitehaven", "Công viên quốc gia Daintree Rainforest", "Thành phố Perth và Đảo Rottnest (với những chú quokka)", "Đảo Kangaroo", "Vườn quốc gia Blue Mountains", "Thành phố Gold Coast và các công viên giải trí", "Khu nghỉ dưỡng qualia, Đảo Hamilton", "Vùng rượu vang Barossa Valley", "Đảo Tasmania hoang dã", "Thành phố Cairns", "Công viên quốc gia Kakadu", "Bãi biển Bondi, Sydney", "Thành phố Brisbane", "Sa mạc Pinnacles", "Khu nghỉ dưỡng Longitude 131°, Uluru", "Thành phố Adelaide", "Thủ đô Canberra", "Vùng Margaret River", "Lướt sóng ở Byron Bay", "Khu nghỉ dưỡng Emirates One&Only Wolgan Valley", "Công viên quốc gia Freycinet, Tasmania", "Thành phố Darwin", "Vùng Kimberley", "Gặp gỡ gấu túi Koala và Kangaroo tại khu bảo tồn", "Khu nghỉ dưỡng Saffire Freycinet, Tasmania", "Đảo Lord Howe", "Thành phố Hobart, Tasmania", "Bảo tàng MONA, Hobart", "Cá voi di cư ở Vịnh Hervey", "Khu nghỉ dưỡng The Louise, Barossa Valley", "Bơi cùng cá mập voi ở rạn san hô Ningaloo", "Thành phố Broome và bãi biển Cable", "Đi tàu The Ghan xuyên lục địa", "Khu nghỉ dưỡng Southern Ocean Lodge, Đảo Kangaroo (đang xây dựng lại)", "Thành phố Noosa", "Dãy núi Flinders", "Thung lũng Hunter", "Trải nghiệm khinh khí cầu trên Thung lũng Yarra", "Khu nghỉ dưỡng El Questro, Kimberley", "Thành phố Fremantle", "Đảo Fraser", "Công viên quốc gia Karijini", "Thành phố Port Douglas", "Khu nghỉ dưỡng Park Hyatt Sydney"]
  },
  {
    country: "Vương quốc Anh",
    locations: ["Tháp London", "Cung điện Buckingham, London", "Vòng quay London Eye", "Bảo tàng Anh (British Museum), London", "Stonehenge", "Thành phố Edinburgh và Lâu đài Edinburgh, Scotland", "Hồ Loch Ness, Scotland", "Thành phố cổ Bath và nhà tắm La Mã", "Đại học Oxford và Cambridge", "Vùng Cotswolds và những ngôi làng cổ kính", "Thành phố Liverpool (quê hương của The Beatles)", "Tháp Big Ben và Tòa nhà Quốc hội, London", "Vùng Lake District", "Lâu đài Windsor", "Thành phố Manchester", "Bờ biển Jurassic", "Dự án Eden, Cornwall", "Cao nguyên Scotland (Scottish Highlands)", "Thành phố York và nhà thờ York Minster", "Xem một vở nhạc kịch ở West End, London", "Khách sạn The Ritz London", "Khách sạn The Savoy, London", "Cầu Tháp (Tower Bridge), London", "Thành phố Cardiff, Wales", "Vườn quốc gia Snowdonia, Wales", "Thành phố Glasgow, Scotland", "Lâu đài Warwick", "Thành phố Bristol", "Nhà thờ Canterbury", "Đảo Skye, Scotland", "Khách sạn Claridge's, London", "Mua sắm tại Harrods, London", "Lâu đài Alnwick (Lâu đài Hogwarts)", "Thành phố Brighton", "Vườn Kew Gardens, London", "Khách sạn Gleneagles, Scotland", "Con đường Giant's Causeway, Bắc Ireland", "Thành phố Belfast, Bắc Ireland", "Lâu đài Dover", "Thành phố Stratford-upon-Avon (quê hương của Shakespeare)", "Khách sạn The Balmoral, Edinburgh", "Cung điện Hampton Court", "Quần đảo Scilly", "Thành phố Newcastle upon Tyne", "Bảo tàng Tate Modern, London", "Vườn quốc gia Peak District", "Khách sạn Chewton Glen, Hampshire", "Thành phố Nottingham và huyền thoại Robin Hood", "Xem một trận đấu quần vợt tại Wimbledon", "Khách sạn Brown's Hotel, a Rocco Forte Hotel, London"]
  },
  {
    country: "Hy Lạp",
    locations: ["Đảo Santorini và cảnh hoàng hôn ở Oia", "Thành cổ Acropolis, Athens", "Đảo Mykonos và cuộc sống về đêm sôi động", "Bãi biển Navagio (Bãi biển Tàu đắm), Zakynthos", "Tu viện Meteora", "Đảo Crete và Cung điện Knossos", "Thành phố cổ Rhodes", "Delphi cổ đại", "Khu nghỉ dưỡng Canaves Oia Suites, Santorini", "Đảo Corfu", "Hẻm núi Samaria, Crete", "Khu nghỉ dưỡng Santa Marina, a Luxury Collection Resort, Mykonos", "Thành phố Thessaloniki", "Olympia cổ đại", "Đảo Naxos", "Khu nghỉ dưỡng Amanzoe, Porto Heli", "Đảo Paros", "Hang động Melissani, Kefalonia", "Đảo Milos và bãi biển Sarakiniko", "Thưởng thức ẩm thực Hy Lạp tại một taverna truyền thống", "Khu nghỉ dưỡng Blue Palace, a Luxury Collection Resort and Spa, Crete", "Nhà hát Epidaurus", "Đảo Hydra", "Đảo Skiathos", "Khu nghỉ dưỡng Mystique, a Luxury Collection Hotel, Santorini", "Núi Olympus", "Đảo Ios", "Khu nghỉ dưỡng Bill & Coo Suites and Lounge, Mykonos", "Bán đảo Halkidiki", "Thành phố Nafplio", "Khu nghỉ dưỡng Costa Navarino, Peloponnese", "Đảo Kos", "Kênh đào Corinth", "Đảo Lefkada", "Khu nghỉ dưỡng Daios Cove Luxury Resort & Villas, Crete", "Thành phố Ioannina", "Bán đảo Pelion", "Đảo Folegandros", "Khu nghỉ dưỡng Grace Hotel, Auberge Resorts Collection, Santorini", "Thành cổ Mycenae", "Đảo Sifnos", "Khu nghỉ dưỡng The Romanos, a Luxury Collection Resort, Costa Navarino", "Đảo Amorgos", "Hồ Plastira", "Đảo Paxos", "Khu nghỉ dưỡng Katikies Santorini", "Thành phố Kavala", "Bán đảo Mani", "Đảo Symi", "Khu nghỉ dưỡng Eagles Palace, Halkidiki"]
  },
  {
    country: "New Zealand",
    locations: ["Vịnh hẹp Milford Sound", "Thành phố Queenstown - thủ đô phiêu lưu", "Công viên quốc gia Fiordland", "Hang động đom đóm Waitomo", "Sông băng Franz Josef và Fox", "Công viên quốc gia Abel Tasman", "Hồ Tekapo và nhà thờ Good Shepherd", "Vùng Rotorua và các hoạt động địa nhiệt", "Khu nghỉ dưỡng Huka Lodge, Taupo", "Vùng Marlborough và tour thử rượu vang Sauvignon Blanc", "Thành phố Auckland và Tháp Sky", "Vịnh Đảo (Bay of Islands)", "Công viên quốc gia Tongariro và con đường Tongariro Alpine Crossing", "Thành phố Wellington", "Bán đảo Coromandel và Bãi biển Nước nóng", "Khu nghỉ dưỡng Eichardt's Private Hotel, Queenstown", "Xem cá voi ở Kaikoura", "Núi Cook / Aoraki", "Thành phố Christchurch", "Phim trường Hobbiton", "Khu nghỉ dưỡng The Farm at Cape Kidnappers, Hawke's Bay", "Bán đảo Banks và Akaroa", "Thành phố Dunedin và kiến trúc Scotland", "Hồ Wanaka và cây Wanaka Tree", "Khu nghỉ dưỡng Matakauri Lodge, Queenstown", "Công viên quốc gia Mount Aspiring", "Bãi biển Ninety Mile", "Mũi Reinga", "Khu nghỉ dưỡng Blanket Bay, Glenorchy", "Chèo thuyền kayak trên biển", "Thành phố Nelson", "Khu nghỉ dưỡng Wharekauhau Country Estate", "Công viên quốc gia Paparoa và Pancake Rocks", "Hẻm núi Hokitika", "Đi tàu TranzAlpine", "Khu nghỉ dưỡng Annandale", "Thành phố Napier và kiến trúc Art Deco", "Bán đảo Otago", "Khu nghỉ dưỡng Eagles Nest, Bay of Islands", "Thác Huka", "Hồ Taupo", "Công viên quốcg gia Westland Tai Poutini", "Nhảy Bungee ở cầu Kawarau", "Khu nghỉ dưỡng Split Apple Retreat, Abel Tasman", "Thành phố Hamilton", "Cầu vòm Cathedral Cove", "Khu nghỉ dưỡng Helena Bay Lodge", "Thành phố Invercargill", "Đảo Stewart", "Khu nghỉ dưỡng Minaret Station Alpine Lodge"]
  },
  {
    country: "Canada",
    locations: ["Thác Niagara", "Vườn quốc gia Banff và Hồ Louise", "Thành phố Vancouver", "Thành phố Toronto và Tháp CN", "Thành phố Quebec cổ kính", "Thành phố Montreal", "Vườn quốc gia Jasper", "Thủ đô Ottawa", "Đảo Vancouver và thành phố Victoria", "Khu nghỉ dưỡng Fairmont Chateau Lake Louise", "Xem Cực quang ở Yukon hoặc Northwest Territories", "Đường Cabot Trail, Nova Scotia", "Vịnh Fundy", "Khu trượt tuyết Whistler", "Khu nghỉ dưỡng Fairmont Banff Springs", "Thành phố Calgary và lễ hội Calgary Stampede", "Hồ Moraine", "Đảo Prince Edward", "Thành phố Halifax", "Vườn quốc gia Gros Morne, Newfoundland", "Khu nghỉ dưỡng Fogo Island Inn, Newfoundland", "Đi tàu Rocky Mountaineer", "Thành phố Winnipeg", "Khu bảo tồn gấu Bắc Cực ở Churchill, Manitoba", "Khu nghỉ dưỡng Post Hotel & Spa, Lake Louise", "Kênh đào Rideau, Ottawa", "Thành phố Edmonton", "Hồ Okanagan", "Khu nghỉ dưỡng Four Seasons Resort and Residences Whistler", "Thành phố St. John's, Newfoundland", "Vườn Butchart, Victoria", "Đường Icefields Parkway", "Khu nghỉ dưỡng Sonora Resort, British Columbia", "Hồ Abraham và bong bóng băng", "Khu vực Thousand Islands, Ontario", "Khu nghỉ dưỡng Manoir Hovey, Quebec", "Thành phố Saskatoon", "Vườn quốc gia Waterton Lakes", "Khu nghỉ dưỡng Clayoquot Wilderness Lodge, British Columbia", "Thành phố Regina", "Xem cá voi ở Quebec hoặc British Columbia", "Khu nghỉ dưỡng The Wickaninnish Inn, Tofino", "Hồ Superior", "Thị trấn Niagara-on-the-Lake", "Khu nghỉ dưỡng Nimmo Bay Wilderness Resort", "Thành phố Kelowna", "Dãy núi Laurentian, Quebec", "Vườn quốc gia Cape Breton Highlands", "Thị trấn Banff", "Khu nghỉ dưỡng The Ritz-Carlton, Toronto"]
  },
  {
    country: "Mexico",
    locations: ["Di tích Chichen Itza của người Maya", "Thành phố biển Cancún và các khu nghỉ dưỡng all-inclusive", "Tulum và các di tích bên bờ biển", "Thành phố Cabo San Lucas", "Thủ đô Mexico City lịch sử", "Thành phố San Miguel de Allende", "Playa del Carmen", "Đảo Cozumel (Lặn biển)", "Khu nghỉ dưỡng Rosewood Mayakoba, Riviera Maya", "Kim tự tháp Teotihuacan", "Thành phố Oaxaca và ẩm thực đặc sắc", "Khu nghỉ dưỡng One&Only Palmilla, Los Cabos", "Các hang động Cenote ở bán đảo Yucatán", "Thành phố Puerto Vallarta", "Khu nghỉ dưỡng Waldorf Astoria Los Cabos Pedregal", "Thành phố Guanajuato", "Hẻm núi Copper", "Đảo Isla Mujeres", "Khu nghỉ dưỡng Grand Velas Riviera Maya", "Xem cá voi xám ở Baja California", "Thành phố Guadalajara", "Di tích Palenque của người Maya", "Khu nghỉ dưỡng Las Ventanas al Paraíso, A Rosewood Resort", "Thành phố Mérida", "Khu dự trữ sinh quyển bướm vua Monarch", "Khu nghỉ dưỡng Nizuc Resort & Spa, Cancún", "Thành phố Puebla", "Khu nghỉ dưỡng Hotel Esencia, Tulum", "Thành phố San Cristóbal de las Casas", "Bãi biển Zipolite", "Khu nghỉ dưỡng The St. Regis Punta Mita Resort", "Thành phố Taxco", "Thác Hierve el Agua", "Khu nghỉ dưỡng Four Seasons Resort Punta Mita", "Thành phố Morelia", "Khu nghỉ dưỡng Chablé Yucatán", "Bãi biển Hidden Beach, Quần đảo Marietas", "Thành phố Acapulco", "Khu nghỉ dưỡng Viceroy Riviera Maya", "Thị trấn Sayulita", "Khu nghỉ dưỡng Zadún, a Ritz-Carlton Reserve", "Thành phố Zacatecas", "Khu bảo tồn biển Cabo Pulmo", "Khu nghỉ dưỡng Banyan Tree Mayakoba", "Thành phố Campeche", "Khu nghỉ dưỡng Esperanza, Auberge Resorts Collection", "Đảo Holbox", "Thành phố Querétaro", "Khu nghỉ dưỡng Montage Los Cabos", "Thành phố La Paz"]
  },
  {
    country: "Brazil",
    locations: ["Tượng Chúa Cứu Thế, Rio de Janeiro", "Thác Iguazu", "Bãi biển Copacabana và Ipanema, Rio de Janeiro", "Rừng nhiệt đới Amazon (Lodge sang trọng)", "Thành phố Salvador và khu phố cổ Pelourinho", "Quần đảo Fernando de Noronha", "Vùng đất ngập nước Pantanal", "Lễ hội Carnival ở Rio de Janeiro", "Núi Sugarloaf, Rio de Janeiro", "Thành phố São Paulo", "Khu nghỉ dưỡng Belmond Hotel das Cataratas, Thác Iguazu", "Công viên quốc gia Lençóis Maranhenses", "Thị trấn Paraty", "Bãi biển Jericoacoara", "Khu nghỉ dưỡng UXUA Casa Hotel & Spa, Trancoso", "Thành phố Ouro Preto", "Sông Amazon", "Khu nghỉ dưỡng Ponta dos Ganchos Exclusive Resort", "Thành phố Manaus và nhà hát Amazon", "Thị trấn Bonito", "Khu nghỉ dưỡng Fasano Rio de Janeiro", "Thành phố Florianópolis", "Vườn quốc gia Chapada Diamantina", "Khu nghỉ dưỡng Txai Resort Itacaré", "Thành phố Brasília", "Thành phố Recife", "Khu nghỉ dưỡng Kenoa Exclusive Beach Spa & Resort", "Thành phố Olinda", "Đảo Ilha Grande", "Khu nghỉ dưỡng Belmond Copacabana Palace", "Thành phố Curitiba", "Khu nghỉ dưỡng Tivoli Ecoresort Praia do Forte", "Thị trấn Tiradentes", "Bãi biển Praia do Sancho", "Khu nghỉ dưỡng Anavilhanas Jungle Lodge, Amazon", "Thành phố Fortaleza", "Khu nghỉ dưỡng Carmel Charme Resort", "Thị trấn Pipa", "Đường cao tốc Serra do Rio do Rastro", "Khu nghỉ dưỡng Botanique Hotel & Spa, Campos do Jordão", "Thành phố Natal", "Khu nghỉ dưỡng Nannai Resort & Spa", "Thị trấn Gramado", "Vườn quốc gia Itatiaia", "Khu nghỉ dưỡng Fasano São Paulo", "Thành phố Belo Horizonte", "Khu nghỉ dưỡng Insólito Boutique Hotel & Spa, Búzios", "Thị trấn Trancoso", "Vườn bách thảo Rio de Janeiro", "Khu nghỉ dưỡng Mirante do Gavião Amazon Lodge"]
  },
  {
    country: "Nam Phi",
    locations: ["Công viên quốc gia Kruger (Safari sang trọng)", "Thành phố Cape Town và Núi Bàn", "Khu bảo tồn Sabi Sand Game Reserve", "Đảo Robben", "Vùng Cape Winelands (Stellenbosch & Franschhoek)", "Con đường Garden Route", "Hẻm núi sông Blyde", "Mũi Hảo Vọng", "Khu nghỉ dưỡng Singita Boulders Lodge", "Bãi biển Boulders và chim cánh cụt", "Dãy núi Drakensberg", "Thành phố Johannesburg và Bảo tàng Apartheid", "Khu nghỉ dưỡng Royal Malewane", "Xem cá voi ở Hermanus", "Khu vực Bo-Kaap đầy màu sắc, Cape Town", "Khu nghỉ dưỡng The Silo Hotel, Cape Town", "Công viên quốc gia Tsitsikamma", "Khu nghỉ dưỡng Ellerman House, Cape Town", "Thị trấn Oudtshoorn và các trang trại đà điểu", "Khu nghỉ dưỡng Londolozi Private Game Reserve", "Vịnh Hout và Đảo Duiker", "Khu nghỉ dưỡng La Residence, Franschhoek", "Hang động Cango", "Khu nghỉ dưỡng Ulusaba Private Game Reserve", "Bờ biển hoang dã (Wild Coast)", "Khu nghỉ dưỡng One&Only Cape Town", "Công viên quốc gia Addo Elephant", "Khu nghỉ dưỡng Lion Sands Ivory Lodge", "Thủ đô Pretoria", "Khu nghỉ dưỡng Delaire Graff Estate, Stellenbosch", "Lặn với cá mập trắng (lồng)", "Khu nghỉ dưỡng Phinda Private Game Reserve", "Thành phố Durban", "Khu nghỉ dưỡng The Oyster Box, Durban", "Vùng đất ngập nước iSimangaliso", "Khu nghỉ dưỡng Tswalu Kalahari Reserve", "Chợ Greenmarket Square, Cape Town", "Khu nghỉ dưỡng Cape Grace, Cape Town", "Vườn bách thảo quốc gia Kirstenbosch", "Khu nghỉ dưỡng Madikwe Safari Lodge", "Thị trấn Knysna", "Khu nghỉ dưỡng Belmond Mount Nelson Hotel, Cape Town", "Khu bảo tồn thiên nhiên De Hoop", "Khu nghỉ dưỡng Morukuru Family Madikwe", "Thị trấn Plettenberg Bay", "Khu nghỉ dưỡng &Beyond Ngala Safari Lodge", "Đi tàu The Blue Train hoặc Rovos Rail", "Khu nghỉ dưỡng Tintswalo Atlantic", "Công viên quốc gia Golden Gate Highlands", "Khu nghỉ dưỡng Mateya Safari Lodge"]
  },
  {
    country: "Đức",
    locations: ["Cổng Brandenburg, Berlin", "Lâu đài Neuschwanstein, Bavaria", "Nhà thờ Cologne", "Thành phố Berlin và Bức tường Berlin", "Thành phố Munich và lễ hội Oktoberfest", "Khu rừng Đen (Black Forest)", "Thành phố Hamburg và khu Speicherstadt", "Con đường lãng mạn (Romantic Road)", "Thành phố Dresden và nhà thờ Frauenkirche", "Thung lũng Rhine và các lâu đài", "Khu nghỉ dưỡng Brenners Park-Hotel & Spa, Baden-Baden", "Thành phố Frankfurt", "Thành phố Heidelberg và lâu đài Heidelberg", "Đảo Mainau", "Khu nghỉ dưỡng Hotel Adlon Kempinski, Berlin", "Hồ Königssee", "Thành phố Nuremberg", "Dãy núi Alps của Bavaria", "Đảo Rügen", "Khu nghỉ dưỡng Schloss Elmau, Bavarian Alps", "Thành phố Leipzig", "Cung điện Sanssouci, Potsdam", "Thành phố Rothenburg ob der Tauber", "Khu nghỉ dưỡng The Charles Hotel, a Rocco Forte Hotel, Munich", "Hồ Constance", "Thành phố Stuttgart và Bảo tàng Mercedes-Benz & Porsche", "Đường cao tốc Autobahn (trải nghiệm không giới hạn tốc độ)", "Khu nghỉ dưỡng Althoff Seehotel Überfahrt, Lake Tegernsee", "Thành phố Bremen", "Mỏ than Zollverein, Essen (Di sản UNESCO)", "Khu nghỉ dưỡng Fairmont Hotel Vier Jahreszeiten, Hamburg", "Thành phố Lübeck", "Vườn quốc gia Saxon Switzerland", "Khu nghỉ dưỡng Mandarin Oriental, Munich", "Thành phố Würzburg", "Cung điện Charlottenburg, Berlin", "Khu nghỉ dưỡng Severin*s Resort & Spa, Sylt", "Thành phố Freiburg", "Núi Zugspitze", "Khu nghỉ dưỡng Hotel Vier Jahreszeiten Kempinski, Munich", "Thành phố Düsseldorf", "Thành phố Trier và các di tích La Mã", "Khu nghỉ dưỡng Ritz-Carlton, Wolfsburg", "Thị trấn Quedlinburg", "Chợ Giáng sinh ở Nuremberg hoặc Dresden", "Khu nghỉ dưỡng Sofitel Munich Bayerpost", "Thành phố Hannover", "Đảo Sylt", "Khu nghỉ dưỡng Hotel de Rome, a Rocco Forte Hotel, Berlin", "Thành phố Regensburg"]
  },
  {
    country: "Singapore",
    locations: ["Khu nghỉ dưỡng Marina Bay Sands và hồ bơi vô cực", "Vườn bên vịnh (Gardens by the Bay)", "Đảo Sentosa", "Sân bay Changi và thác nước Jewel", "Vườn bách thảo Singapore (Di sản UNESCO)", "Tượng Merlion", "Khu phố Clarke Quay và Boat Quay", "Khu nghỉ dưỡng Raffles Singapore (và thưởng thức cocktail Singapore Sling)", "Khu phố Tàu (Chinatown)", "Khu Tiểu Ấn (Little India)", "Vườn thú Singapore và Night Safari", "Đường Orchard (Thiên đường mua sắm)", "Khu nghỉ dưỡng The Fullerton Bay Hotel Singapore", "Bảo tàng Khoa học Nghệ thuật (ArtScience Museum)", "Khu nghỉ dưỡng Capella Singapore", "Universal Studios Singapore", "Công viên Hải dương S.E.A. Aquarium", "Đài quan sát Sands SkyPark", "Khu nghỉ dưỡng The Ritz-Carlton, Millenia Singapore", "Chợ Lau Pa Sat", "Khu phố Kampong Glam và nhà thờ Hồi giáo Sultan", "Cầu Helix", "Khu nghỉ dưỡng Mandarin Oriental, Singapore", "Trung tâm ẩm thực Maxwell Food Centre", "Bảo tàng Quốc gia Singapore", "Khu nghỉ dưỡng The St. Regis Singapore", "Đi bộ trên cầu Henderson Waves", "Khu bảo tồn đất ngập nước Sungei Buloh", "Khu nghỉ dưỡng W Singapore - Sentosa Cove", "Vòng quay Singapore Flyer", "Triển lãm National Gallery Singapore", "Khu nghỉ dưỡng Four Seasons Hotel Singapore", "Thưởng thức cua sốt ớt (Chilli Crab)", "Đảo Pulau Ubin", "Khu nghỉ dưỡng Shangri-La Hotel, Singapore", "Công viên Fort Canning", "Đền Sri Mariamman", "Khu nghỉ dưỡng Sofitel Singapore Sentosa Resort & Spa", "Công viên MacRitchie Reservoir và cầu treo TreeTop Walk", "Bảo tàng Peranakan", "Khu nghỉ dưỡng JW Marriott Hotel Singapore South Beach", "Chợ Tiong Bahru", "Thưởng thức ẩm thực tại một nhà hàng sao Michelin", "Khu nghỉ dưỡng The Westin Singapore", "Đền Buddha Tooth Relic", "Công viên Haw Par Villa", "Khu nghỉ dưỡng Parkroyal Collection Pickering", "Bảo tàng Văn minh châu Á", "Khu nghỉ dưỡng Andaz Singapore", "Clarke Quay Central"]
  }
];

// PREMIUM FRAMES
export const PREMIUM_FRAMES: string[] = [
  "Thêm một khung viền vàng hoàng gia, chạm khắc hoa văn baroque tinh xảo.",
  "Thêm một khung bạc tối giản, phong cách Scandinavian hiện đại.",
  "Thêm một viền kim cương lấp lánh bao quanh ảnh.",
  "Thêm một khung gỗ sồi cổ điển, có vân gỗ tự nhiên.",
  "Thêm một viền đèn neon màu xanh cyberpunk phát sáng.",
  "Thêm một khung ảnh được kết từ những bông hoa hồng đỏ tươi.",
  "Thêm một viền ngọc trai trắng sang trọng, xếp thành chuỗi.",
  "Thêm một khung ảnh phong cách gothic, màu đen với họa tiết dây leo bí ẩn.",
  "Thêm một viền lá vàng mỏng, tạo hiệu ứng dát vàng nghệ thuật.",
  "Thêm một khung ảnh pha lê trong suốt, có hiệu ứng khúc xạ ánh sáng.",
  "Thêm một viền tre/trúc, mang lại cảm giác mộc mạc, gần gũi thiên nhiên.",
  "Thêm một khung ảnh công nghệ cao, hiển thị thông tin kỹ thuật số.",
  "Thêm một viền dải lụa mềm mại, bay phấp phới.",
  "Thêm một khung ảnh làm từ vỏ sò và san hô, phong cách biển cả.",
  "Thêm một viền lửa rực cháy, tạo hiệu ứng ấn tượng.",
  "Thêm một khung ảnh băng giá, có những tinh thể tuyết đọng lại.",
  "Thêm một viền trang trí bằng những nốt nhạc vàng kim.",
  "Thêm một khung ảnh film strip (dải phim) cổ điển.",
  "Thêm một viền mây bồng bềnh, tạo cảm giác thần tiên.",
  "Thêm một khung ảnh khảm trai, lấp lánh màu sắc cầu vồng."
];