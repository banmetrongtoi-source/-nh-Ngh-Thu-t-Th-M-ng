import { PromptParams } from '../types';

// Helper function to check if a layout is multi-image
const isMultiImageLayout = (layoutPrompt: string): boolean => {
  // Check for numbers 2-9 or keywords indicating multiple images
  const multiImageRegex = /[2-9]|ảnh ngang|ảnh dọc|lưới|zic-zắc|film|đa góc|spotlight|storytelling|nhiều ảnh/i;
  return multiImageRegex.test(layoutPrompt.toLowerCase());
};

// Helper function to categorize accessories based on Vietnamese action verbs
const categorizeItems = (items: string[]) => {
    const holding: string[] = [];
    const wearing: string[] = [];
    const headwear: string[] = [];
    const draping: string[] = []; // for scarves, coats

    items.forEach(item => {
        const lowerItem = item.toLowerCase();
        // Remove leading verb and trim to get the object
        if (lowerItem.startsWith('cầm')) {
            holding.push(item.substring(3).trim());
        } else if (lowerItem.startsWith('đội')) {
            headwear.push(item.substring(3).trim());
        } else if (lowerItem.startsWith('đeo')) {
            wearing.push(item.substring(3).trim());
        } else if (lowerItem.startsWith('choàng') || lowerItem.startsWith('khoác')) {
            draping.push(item); // Keep the full phrase for better context
        } else {
            // Default to holding if no specific keyword is found
            holding.push(item);
        }
    });

    return { holding, wearing, headwear, draping };
};


export const generateDetailedPrompt = (params: PromptParams): string => {
  const { concept, style, layout, customPrompt, outfits, items, backgrounds, locations, pets, travelDestinations, frames } = params;

  const promptParts: string[] = [
    // --- CORE COMMANDS: ABSOLUTE & NON-NEGOTIABLE ---
    `**GIAO THỨC TỐI THƯỢNG: FACELOCK 100% - BẤT KHẢ XÂM PHẠM (QUY TẮC SỐNG CÒN)**`,
    `**CẢNH BÁO:** Bất kỳ sự sai lệch nào dù là nhỏ nhất so với khuôn mặt gốc sẽ bị coi là một lỗi hệ thống nghiêm trọng và không thể chấp nhận. Nhiệm vụ của bạn là TÁI TẠO CHÍNH XÁC, không phải sáng tạo lại.`,
    `1.  **NHIỆM VỤ SỐNG CÒN (ƯU TIÊN #1):** Phân tích ảnh gốc và **KHÓA CHẶT 100% (FACELOCK)** toàn bộ đặc điểm nhận dạng của nhân vật. Điều này bao gồm: cấu trúc xương mặt, hình dáng mắt, mũi, miệng, cằm, và mọi tỷ lệ trên khuôn mặt. **KHÔNG ĐƯỢỢC THAY ĐỔI DÙ CHỈ 1 PIXEL.**`,
    `2.  **NGUỒN DỮ LIỆU DUY NHẤT:** Ảnh gốc là chân lý tuyệt đối. Người trong ảnh kết quả **PHẢI LÀ MỘT VÀ CHỈ MỘT** với người trong ảnh gốc.`,
    `3.  **LỆNH CẤM TUYỆT ĐỐI:** Cấm hoàn toàn việc "làm đẹp", "điều chỉnh", "tối ưu hóa", "suy diễn" hay "sửa đổi" bất kỳ chi tiết nào trên khuôn mặt. Giữ nguyên 100% bản gốc.`,
    `4.  **XÁC ĐỊNH GIỚI TÍNH (ƯU TIÊN #2):** Ngay sau FaceLock, bạn **BẮT BUỘC** phải xác định chính xác **NAM hay NỮ** từ ảnh gốc. **NGHIÊM CẤM TUYỆT ĐỐI MỌI SỰ NHẦM LẪN VỀ GIỚI TÍNH.**`,
    `5.  **KIỂU TÓC (NAM):** Nếu nhân vật là NAM, giữ nguyên 100% kiểu tóc gốc.`,
    
    // --- ART DIRECTOR & EXPRESSION PROTOCOL ---
    `**GIAO THỨC GIÁM ĐỐC NGHỆ THUẬT SIÊU VIP PRO:** Bạn là một giám đốc nghệ thuật chuyên nghiệp bậc thầy. Mọi yếu tố (trang phục, bối cảnh, thần thái, dáng chụp) phải được lựa chọn CÓ CHỦ ĐÍCH để HÀI HÒA TUYỆT ĐỐI với **HIỆU ỨNG (CONCEPT), PHONG CÁCH (STYLE), và BỐ CỤC (LAYOUT)**. Kết quả cuối cùng phải là một kiệt tác SIÊU CAO CẤP, SIÊU VIP PRO, SIÊU ĐẲNG CẤP, SIÊU CHÂN THỰC.`,
    `**GIAO THỨC BIỂU CẢM & THẦN THÁI (QUAN TRỌNG):**`,
    `- **Yêu cầu cốt lõi:** Nhân vật phải luôn có **NỤ CƯỜI TƯƠI, TỰ NHIÊN, VÀ RẠNG RỠ**. Thần thái phải toát lên vẻ **TỰ TIN, KIÊU HÃNH, VÀ ĐẲNG CẤP** của một ngôi sao hạng A.`,
    `- **Sự phù hợp:** Biểu cảm và nụ cười phải hoàn toàn phù hợp với bối cảnh chung. Ví dụ: trong cảnh buồn, đó là một nụ cười mỉm, trầm tư và tinh tế; trong cảnh vui, đó là nụ cười hạnh phúc, tỏa nắng. **TUYỆT ĐỐI KHÔNG ĐỂ BIỂU CẢM BỊ "LẠC QUẺ".**`,

    // --- CONTEXT & SCENE ---
    `**Bối cảnh chính:** Một bức ảnh nghệ thuật cao cấp chụp (${customPrompt ? customPrompt : 'nhân vật trong ảnh'}).`,
    `**Yếu tố chủ đạo:** ${concept.promptFragment}.`,
    `**Phong cách nghệ thuật:** ${style.promptFragment}.`,
  ];

  if (concept.id === 'tuyet' && style.id === 'nghethuat') {
    promptParts.push(
      `**YÊU CẦU ĐẶC BIỆT (Tuyết Rơi + Nghệ Thuật):** Đây là yêu cầu tạo ra một kiệt tác. Mọi yếu tố từ trang phục, bối cảnh, trang điểm, phụ kiện phải được kết hợp một cách hoàn hảo, tạo ra một tổng thể nghệ thuật đỉnh cao, sang trọng và đẳng cấp nhất. Mọi chi tiết phải toát lên vẻ đẹp chuyên nghiệp, pro, và cực kỳ ấn tượng.`
    );
  }
  
  promptParts.push(`**Bố cục & Phân cảnh:** ${layout.promptFragment}`);

  if (outfits && outfits.length > 0) {
    promptParts.push(`**Trang phục:** ${outfits.join(', ')}.`);
  } else {
    promptParts.push(
      `**Trang phục (AI tự do sáng tạo):** Người dùng không chọn trang phục cụ thể. Dựa vào toàn bộ bối cảnh, concept, phong cách, cảm xúc và hành động, bạn hãy tự động lựa chọn cho nhân vật một bộ trang phục **SIÊU CAO CẤP, SANG TRỌNG VÀ ĐẲNG CẤP NHẤT**. Trang phục phải hài hòa tuyệt đối với tổng thể để tạo ra một kiệt tác thời trang đỉnh cao.`
    );
  }

  // --- ACCESSORIES & POSING ---
  const { holding, wearing, headwear, draping } = categorizeItems(items);
  const accessoryParts: string[] = [];
  if (headwear.length > 0) accessoryParts.push(`**Phụ kiện trên đầu:** Nhân vật đội ${headwear.join(', ')}.`);
  if (wearing.length > 0) accessoryParts.push(`**Phụ kiện đeo trên người:** Nhân vật đeo ${wearing.join(', ')}.`);
  if (draping.length > 0) accessoryParts.push(`**Phụ kiện khoác/choàng:** Nhân vật ${draping.join(', ')}.`);
  if (holding.length > 0) accessoryParts.push(`**Vật phẩm cầm tay:** Nhân vật cầm ${holding.join(', ')}.`);
  
  if (accessoryParts.length > 0) {
    promptParts.push(
      `**GIAO THỨC PHỤ KIỆN CHÍNH XÁC (SIÊU CẤP VIP PRO):**`,
      `- **PHÂN LOẠI HÀNH ĐỘNG:** Bạn phải hiểu và thực hiện chính xác hành động: "đội" là cho nón/vương miện, "đeo" là cho trang sức/túi xách, "cầm" là cho vật dụng tay. **NGHIÊM CẤM LỖI LOGIC** (ví dụ: không được "cầm" vương miện nếu yêu cầu là "đội").`,
      ...accessoryParts
    );
  }
  
  promptParts.push(
    `**GIAO THỨC TẠO DÁNG BẬC THẦY (SIÊU VIP PRO):**`,
    `Yêu cầu tạo dáng chụp ảnh chuyên nghiệp như một siêu mẫu có 30 năm kinh nghiệm. Dáng chụp phải **SANG TRỌNG, ĐẲNG CẤP, VÀ CUỐN HÚT**, thể hiện sự tự tin tuyệt đối. Mọi đường nét cơ thể, từ ngón tay đến ánh mắt, đều phải hoàn hảo và có chủ đích nghệ thuật.`
  );

  if (isMultiImageLayout(layout.promptFragment)) {
    promptParts.push(
      `**GIAO THỨC BẬC THẦY CHO BỐ CỤC NHIỀU ẢNH (SIÊU QUAN TRỌNG - TUÂN THỦ TUYỆT ĐỐI):**`,
      `1.  **ĐỒNG NHẤT NHÂN VẬT TUYỆT ĐỐI:** Nhân vật trong **TẤT CẢ** các khung hình nhỏ **BẮT BUỘC PHẢI LÀ CÙNG MỘT NGƯỜI**, được FACELOCK 100% từ ảnh gốc. **NGHIÊM CẤM** mỗi ảnh là một người khác nhau hoặc sai lệch so với ảnh gốc.`,
      `2.  **ĐỒNG NHẤT PHONG CÁCH:** Nhân vật phải mặc **CÙNG MỘT BỘ TRANG PHỤC**, đeo/cầm/đội **CÙNG MỘT BỘ PHỤ KIỆN** và có **CÙNG MỘT KIỂU TRANG ĐIỂM/TÓC** trong **TẤT CẢ** các khung hình.`,
      `3.  **SẮP XẾP GÓC CHỤP CHUYÊN NGHIỆP:** Bạn phải hành động như một chuyên gia bậc thầy chụp ảnh 30 năm kinh nghiệm. **TỰ ĐỘNG SẮP XẾP** các bức ảnh theo **NHIỀU GÓC CHỤP KHÁC NHAU** (ví dụ: cận mặt, trung cảnh, toàn cảnh, góc cao, góc thấp, góc nghiêng) để tạo ra một bố cục tổng thể SIÊU ĐẸP, SIÊU CAO CẤP, VÀ SIÊU CHUYÊN NGHIỆP.`,
      `4.  **QUY TẮC PHÒNG CHỐNG LỖI (CẤM TUYỆT ĐỐI):**`,
      `    - **LỖI NHÂN VẬT KÉP:** Mỗi khung hình nhỏ chỉ được chứa **DUY NHẤT MỘT** nhân vật. Cấm tuyệt đối lỗi hai nhân vật xuất hiện trong cùng một khung hình nhỏ.`,
      `    - **LỖI CHỒNG CHÉO ẢNH:** Đảm bảo các khung hình được phân tách rõ ràng, **KHÔNG BỊ CHỒNG CHÉO** hay có các chi tiết từ ảnh này tràn sang ảnh khác. Bố cục phải sạch sẽ và chuyên nghiệp.`
    );
  }
  
  const additionalDetails = [...pets, ...backgrounds, ...locations, ...travelDestinations];
  if (additionalDetails.length > 0) {
      promptParts.push(`**Chi tiết bối cảnh & môi trường:** ${additionalDetails.join(', ')}.`);
  }

  if (frames && frames.length > 0) {
    promptParts.push(`**YÊU CẦU KHUNG VIỀN (BẮT BUỘC):** ${frames.join(', ')}. Khung viền phải tinh tế, không che mất chủ thể.`);
  }
  
  // --- TECHNICAL SPECIFICATIONS ---
  promptParts.push(
    `**Chất lượng hình ảnh TUYỆT ĐỐI (8K Ultra-HD):**`,
    `- **Độ phân giải:** Siêu sắc nét, không nhiễu, không mờ.`,
    `- **Độ chi tiết vi mô (Micro-detail):** Da người phải có kết cấu tự nhiên, siêu chân thực. Tóc phải rõ từng sợi. Mắt phải có hồn và long lanh.`,
    `- **Chân thực:** Kết cấu vật liệu (vải, da, kim loại) phải siêu thực.`
  );
    
  promptParts.push(
    `**Thiết lập máy ảnh & LẤY NÉT CHÂN DUNG (QUAN TRỌNG):**`,
    `- **Máy ảnh:** Mô phỏng máy ảnh full-frame 200MP cao cấp nhất (Phase One).`,
    `- **Ống kính:** Sử dụng ống kính có độ mở lớn như f/1.2 để tạo hiệu ứng xóa phông nghệ thuật (bokeh).`,
    `- **LẤY NÉT CHUẨN XÁC:** Bất kể bố cục, điểm lấy nét chính (primary focus point) **LUÔN LUÔN là khuôn mặt và đôi mắt của nhân vật.** Mọi ảnh trong bố cục đều phải tuân thủ quy tắc này. Khuôn mặt phải siêu sắc nét.`
  );

  promptParts.push(
    `**Thiết lập ánh sáng:** Ánh sáng điện ảnh khuếch tán mềm mại (soft diffused cinematic light). Phải có "catchlight" (đốm sáng phản chiếu) rõ ràng trong mắt nhân vật để tạo chiều sâu và sự sống động.`
  );

  promptParts.push(
    `**XÁC NHẬN LỆNH CUỐI CÙNG (NHẮC LẠI):** Quy tắc tối thượng là **FACELOCK 100%** và **ĐỒNG NHẤT TUYỆT ĐỐI** trên tất cả các khung hình. TUYỆT ĐỐI KHÔNG ĐƯỢC THAY ĐỔI KHUÔN MẶT GỐC. Tuân thủ nghiêm ngặt mọi giao thức để tạo ra một kiệt tác SIÊU CAO CẤP, SIÊU VIP PRO, SIÊU ĐẲNG CẤP.`
  );

  return promptParts.join(' ');
};