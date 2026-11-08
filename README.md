# Viện Cú Pháp Hình Thức & Tiếng Anh Triết Học (IELTS Syntax & Logos Institute)
## Hệ Thống Đa Trang (Multi-Page EdTech Web Architecture)

Hệ thống ứng dụng web đa trang chuẩn mực EdTech (mô phỏng trải nghiệm học thuật và bảng màu của nền tảng thi thử `ieltsonlinetests.com`), được tách bạch thành các trang riêng biệt với điều hướng URL thực tế.

---

### 1. Cấu Trúc Các Trang Trong Hệ Thống

| Trang | Tệp Tin | Chức Năng Chính | Liên Kết Trực Tiếp |
| :--- | :--- | :--- | :--- |
| **1. Course Landing Page** | `index.html` | Trang chủ giới thiệu khóa học, Canvas Cú pháp Chomsky, 3 Module triết học, Hồ sơ Giảng viên, Form đăng ký và Banner truy cập Thư viện Đề thi. | [index.html](file:///C:/Users/HungXCalc/.gemini/antigravity/scratch/philosophical-english-landing/index.html) |
| **2. Exam Library Dashboard** | `library.html` | Thư viện 32 bộ đề thi thực chiến đầy đủ 4 kỹ năng (*Listening, Reading, Writing, Speaking, Full Mock*), tìm kiếm thời gian thực, lọc theo Series, sắp xếp (Mới nhất, Lượt thi, Độ khó) và phân trang 9 đề/trang. | [library.html](file:///C:/Users/HungXCalc/.gemini/antigravity/scratch/philosophical-english-landing/library.html) |
| **3. Interactive Exam Room** | `exam-room.html` | Phòng thi trực tuyến chia đôi màn hình (70% Môi trường thi vs 30% Trợ giảng Socratic AI). Hỗ trợ Chế độ Luyện tập (AI mở) và Chế độ Thi thật (Khóa AI). Tự động nhận diện `?skill=` từ URL. | [exam-room.html](file:///C:/Users/HungXCalc/.gemini/antigravity/scratch/philosophical-english-landing/exam-room.html) |
| **4. Socratic AI Cognitive Engine** | `ai-engine.js` | Hệ thống AI Tự Học & Cá Nhân Hóa độc bản cho từng người truy cập. Lưu trữ vết tư duy, vector nhận thức 6 chiều, tự điều chỉnh trọng số sau mỗi bài thi và hiển thị Modal Phân Tích Nhận Thức. | [ai-engine.js](file:///C:/Users/HungXCalc/.gemini/antigravity/scratch/philosophical-english-landing/ai-engine.js) |
| **5. Backend Database Schema** | `exam-schema.json` | Cấu trúc dữ liệu JSON chuẩn mực cho Backend/Database lưu trữ toàn bộ đề thi 4 kỹ năng kèm metadata logic, câu hỏi Socrates và schema hồ sơ nhận thức học tập. | [exam-schema.json](file:///C:/Users/HungXCalc/.gemini/antigravity/scratch/philosophical-english-landing/exam-schema.json) |

---

### 2. Hệ Thống Socratic AI Tự Học & Cá Nhân Hóa (Cognitive Self-Learning Engine)

Được thiết kế để **tự học hỏi và thích ứng độc bản** với từng học viên truy cập:

1. **Bộ Hồ Sơ Nhận Thức Độc Bản (Persistent Cognitive Profile)**:
   - Đồng bộ xuyên suốt qua `localStorage` (`ielts_socratic_ai_profile_v2`).
   - Quản lý thông tin học viên (Tên, Mục tiêu Band điểm, Mã học viên, Phong cách học tập).
   - Tương tác đồng bộ trên cả 3 trang: `index.html` (form xét tuyển), `library.html` (thư viện đề đề xuất riêng), và `exam-room.html` (phòng thi).

2. **Vector Năng Lực Nhận Thức 6 Chiều (0 - 100%)**:
   - `formal_syntax`: Bóc tách cú pháp hình thức Chomsky (X-bar, mệnh đề lồng).
   - `truth_evaluation`: Định giá chân lý logic mệnh đề (TRUE / FALSE vs NOT GIVEN).
   - `hegelian_dialectics`: Tư duy biện chứng Luận đề - Phản đề - Hợp đề.
   - `distractor_resistance`: Kháng bẫy ngụy biện & bẫy âm thanh đổi ý phút chót.
   - `lexical_precision`: Độ tinh chuẩn thuật ngữ & trường nghĩa học thuật.
   - `epistemic_caution`: Thận trọng nhận thức luận (Hedging, tránh khái quát hóa võ đoán).

3. **Thuật Toán Tự Học Theo Thời Gian Thực (Autonomous Machine Learning Loop)**:
   - Khi học viên chấm bài Reading hoặc Listening trong phòng thi, AI lập tức phân loại mẫu lỗi sai và tự động cập nhật lại trọng số các chiều nhận thức.
   - Nếu mắc lỗi suy diễn ở câu 34 ➔ AI ghi nhận mẫu *"Suy diễn vượt quá dữ kiện (Epistemic Overreach)"* và cảnh báo trong các lần trò chuyện tiếp theo.
   - Nếu trả lời đúng ➔ AI nâng điểm thành thạo và gửi thông báo Toast hoạt họa sinh động.

4. **Trợ Giảng AI Phản Hồi Như Claude / ChatGPT (Streaming Dialogue Engine)**:
   - **Hiệu ứng gõ chữ thời gian thực (Token Streaming):** Từng từ được sinh mượt mà kèm con trỏ `▋` và trạng thái *"Đang tư duy logic..."*.
   - **Định dạng Markdown xuất sắc:** Tự động định dạng tiêu đề, danh sách, trích dẫn triết học và khối code phân tích cú pháp `[CP [IP ...]]`.
   - **Tương tác linh hoạt mọi chủ đề:** Trả lời tự nhiên, sâu sắc về mọi câu hỏi Reading (NOT GIVEN vs FALSE, Passage 3), Listening (bẫy âm thanh), Writing (mở bài Band 8.5, phản đề Hegel), Ngữ pháp Chomsky hoặc câu hỏi mở.
   - **Tích hợp API kép:** Mặc định chạy bộ não tri thức Socratic Claude tích hợp sẵn (không cần API Key). Đồng thời hỗ trợ gắn API Key trực tiếp của **Anthropic Claude 3.5 Sonnet** hoặc **OpenAI ChatGPT (GPT-4o)** trong cài đặt.
   - **Hộp thoại Claude trực tiếp trên Trang chủ:** Nút bóng nổi ở góc phải [index.html](file:///C:/Users/HungXCalc/.gemini/antigravity/scratch/philosophical-english-landing/index.html) cho phép trò chuyện trực tiếp với AI mà không cần rời trang.

---

### 2. Các Tính Năng Phòng Thi Hoàn Thiện Vừa Nâng Cấp

#### 🎧 Kỹ Năng Listening: Trình Phát Audio Chuẩn Cambridge
- **Âm thanh thực tế**: Tích hợp chuông Web Audio API (*C5-E5-G5-C6 harmonic chime*) và giọng đọc bản ngữ qua Web Speech API.
- **Thanh điều khiển chuyên nghiệp**: Nút Play/Pause, tua lùi 10s, tua tới 10s, thanh trượt thời gian (scrubber) mượt mà, điều chỉnh tốc độ đọc (*0.8x, 1.0x, 1.2x*), thanh âm lượng và nút test tai nghe.
- **Transcript tương tác**: Lời thoại song ngữ được tô màu trực tiếp theo thời gian thực (karaoke sync). Nhấp vào bất kỳ câu nào để tua nhanh tới câu đó.
- **Hệ thống câu hỏi Section 1**: Questions 1–4 điền từ (Form completion) và Questions 5–6 trắc nghiệm (Multiple choice).

#### 📖 Kỹ Năng Reading: Đề Thi Hoàn Chỉnh 14 Câu (Passage 3)
- **Văn bản học thuật chuẩn Cambridge 19**: Độ dài 860 từ chia làm 7 đoạn (*Paragraphs A–G*) về chủ đề *"Linguistic Relativity, Cognitive Architecture, and the Limits of Thought"*.
- **Công cụ hỗ trợ thí sinh**: Bút highlight màu vàng/xanh trực tiếp trên văn bản, nút xóa highlight, và nút phóng to/thu nhỏ cỡ chữ (*A- / A+*).
- **Đầy đủ 3 dạng câu hỏi chuẩn IELTS (14 câu)**:
  - **Questions 27–31**: Matching Headings (Chọn tiêu đề cho đoạn B–F từ danh sách i–viii).
  - **Questions 32–35**: True / False / Not Given (Phân biệt rạch ròi giữa mâu thuẫn logic `P ∧ ¬P` và không có thông tin).
  - **Questions 36–40**: Summary Completion with Word Bank (Điền cụm từ A–H vào bài tóm tắt).
- **Bảng câu hỏi phía dưới (Palette Ribbon)**: Đầy đủ 14 nút `[27]...[40]` đổi màu xanh khi đã làm, tự động cuộn đến câu hỏi khi nhấp.
- **Chấm điểm & Chữa bài tự động**: Chấm điểm tức thời trên thang 14 câu, quy đổi Band điểm, highlight đúng/sai và chuyển báo cáo cho Socratic AI phân tích lỗi ngụy biện.

---

### 3. Luồng Điều Hướng Liên Kết Giữa Các Trang (Navigation Flow)

```
[ index.html (Course Landing Page) ]
       │
       ▼ (Bấm "Thư Viện Đề Thi" hoặc "Khám Phá Thư Viện")
[ library.html (Exam Library Dashboard) ]
       │
       ▼ (Bấm "Bắt đầu luyện tập" trên từng Card bài thi)
[ exam-room.html?skill=...&title=... (Interactive Exam Room) ]
       │
       ▼ (Bấm "Quay Lại Thư Viện")
[ library.html (Exam Library Dashboard) ]
       │
       ▼ (Bấm "Về Trang Chủ Khóa Học")
[ index.html (Course Landing Page) ]
```

---

### 4. Hướng Dẫn Trải Nghiệm Nhanh

- **Không cần cài đặt Node hay Web Server**: Bạn chỉ cần **click đúp trực tiếp** vào bất kỳ tệp HTML nào ([index.html](file:///C:/Users/HungXCalc/.gemini/antigravity/scratch/philosophical-english-landing/index.html), [library.html](file:///C:/Users/HungXCalc/.gemini/antigravity/scratch/philosophical-english-landing/library.html) hoặc [exam-room.html](file:///C:/Users/HungXCalc/.gemini/antigravity/scratch/philosophical-english-landing/exam-room.html)) để mở trên trình duyệt (Chrome, Edge, Firefox, Brave,...).
- **Chế độ Sáng / Tối (Light & Dark Mode)**: Đồng bộ xuyên suốt toàn bộ các trang thông qua `localStorage` (`iot-theme`).
- **Phông chữ học thuật chuẩn mực**: Tối ưu 100% tiếng Việt có dấu với phông chữ `Inter` (sans-serif) và `Roboto Mono` cho các chỉ số học thuật.
