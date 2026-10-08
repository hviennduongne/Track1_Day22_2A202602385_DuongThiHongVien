# AI Support Log — Dương Thị Hồng Viên — Day18–19

## 1. Phạm vi hỗ trợ

- Bộ prototype chung và design sheet do Minh bàn giao có AI hỗ trợ đề xuất cơ chế, lập bảng Human–AI và code khung/B/C.
- Option A có AI hỗ trợ code chọn đoạn, hỏi AI, xem phản hồi, chèn/bỏ, hoàn tác và lưu. Viên phụ trách option này và phiên kiểm thử Huy, Minh hỗ trợ tích hợp.
- Bài Product Discovery Framework, transcript, timestamp và dấu vết trong `data.js` là dữ liệu giả lập phục vụ so sánh, không phải dữ liệu học tập của tester.
- Hồ sơ Day18 trên máy ghi các công cụ Claude Sonnet 4.6, Gemini 3.1 Pro, Cursor và OpenRouter. AI hỗ trợ viết và rà soát code; phần đóng góp của Viên tập trung vào Option A và phiên Huy.
- Lần hoàn thiện ngày 05/10/2026 dùng Codex: đọc yêu cầu và các hồ sơ đã có, chuyển phiếu Huy, cá nhân hóa README, cập nhật trạng thái design sheet, đối chiếu mâu thuẫn và kiểm tra logic prototype.

## 2. Dữ liệu phỏng vấn và kiểm thử

Practice Notes Day17 và ba phiên test là dữ liệu thực tế của nhóm. Viên trực tiếp điều phối Mai Tiến Huy (2A202602914), Minh điều phối Vũ và Dũng. AI hỗ trợ tổ chức tài liệu và đối chiếu yêu cầu, không thay thế công việc phỏng vấn. Ghi chép hành vi và lời nói được giữ theo hồ sơ nhóm đã hoàn thiện.

## 3. Reflection cá nhân — Dương Thị Hồng Viên

Option A cần giữ quyền tạo ghi chú ở người dùng: phản hồi AI phải được xem trước, chỉ chèn khi người dùng quyết định và có Hoàn tác. Phiếu Huy ghi việc dùng Hoàn tác khi nội dung dài, cho thấy điểm phục hồi có ích trong phiên này. Việc Huy dừng để tìm Hỏi AI gợi ý cần xem lại khả năng tìm thấy nút; chưa đủ dữ liệu để kết luận mọi người đều gặp khó khăn.

Khi rà soát với Codex, bản cũ gọi OpenRouter bằng khóa mẫu trong khi hướng dẫn nói không cần API. Bản phục vụ lab được chuyển sang phản hồi dựng sẵn theo nội dung từng phần để chạy local; ghi rõ giới hạn phản hồi và không suy đoán mức hiểu. Đây là sửa đổi do Codex thực hiện trong lần hoàn thiện, không khai là Viên tự tay viết trước đó.

Tài liệu AI hỗ trợ còn ghi tên Minh, trạng thái chưa build và các đề xuất chưa cập nhật. Lần hoàn thiện sửa đúng phần việc của Viên, giữ đề xuất cá nhân tách khỏi một Next Change chung. Không dùng các bản tổng hợp tự động để khẳng định thành công chỉ từ ba tester.

## 4. Rà soát cuối theo đề bài

Codex sửa bảng phân công bị lỗi Markdown, thêm timeline 20 phút và câu hỏi bối cảnh mở, làm rõ giới hạn B/C và sửa thông báo lưu chỉ trong phiên. Code khung được sửa biến `centerScrollPos` chưa khai báo và bỏ hàm `getCenterPane` trùng. Giữ hai phiếu Minh ở `evidence/` với nguồn ghi rõ để đối chiếu ba phiên.

Kiểm tra: cú pháp 5 file JavaScript; link nội bộ; README đủ 6 mục; chạy luồng shell A/B/C, sửa/lưu/khôi phục/reset và annotation trong DOM mô phỏng. Chưa kiểm tra trực quan bản public. Không khai các kiểm tra code là kết quả phỏng vấn hoặc validation.
