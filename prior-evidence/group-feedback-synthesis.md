# Group Feedback Synthesis — Day18–19

**Nhóm:** Nhóm 2 Người — Ninh Quang Minh, Dương Thị Hồng Viên.
**Ba tester ngoài nhóm:** Trần Phạm Thái Vũ, Nguyễn Anh Dũng (Minh điều phối); Mai Tiến Huy — 2A202602914 (Viên điều phối).

Tổng hợp từ hai phiếu Minh bàn giao và phiếu Huy trong hồ sơ Day18 của Viên. Mỗi tester thử cả A/B/C. Phiếu Viên: [Huy](prototype-feedback-note.md). Bản sao hai phiếu Minh để đối chiếu: [Vũ](evidence/feedback-minh-tester1.md), [Dũng](evidence/feedback-minh-tester2.md). Hai phiên Vũ/Dũng do Minh điều phối; phiên Huy do Viên điều phối.

## 1. Đối chiếu hành vi

| Nội dung | Vũ | Dũng | Huy | Pattern / đối lập |
|---|---|---|---|---|
| First Action | Mở C vì chữ Tự động | Mở A, đọc thẻ transcript | Mở C, đọc lướt thẻ đầu, bấm Giữ | Điểm bắt đầu khác nhau |
| Major Breakdown | A: chọn một chữ rồi mới chọn cả câu | B: chọn Đã nắm hàng loạt, không hài lòng với nháp | A: dừng khoảng 4 giây tìm Hỏi AI | A khó tìm/cung cấp đầu vào; B vẫn có thể bị trả lời qua loa |
| Evidence | C: bỏ qua cảnh báo, Giữ cả 5 phần | C: đọc cảnh báo rồi Bỏ phần đó | C: phiếu ghi Giữ 5 phần trong 10 giây, không mở Transcript | Dũng kiểm tra; Vũ/Huy duyệt nhanh. Không suy ra động cơ chỉ từ click |
| Control Taken | B: sửa text trước lưu | C: Bỏ phần cảnh báo; A: chèn AI | B: xóa hai câu; A: Hoàn tác | Công cụ sửa/bỏ/hoàn tác được sử dụng |
| Selected Option | B | C | B | Hai chọn B, một chọn C; không suy rộng thống kê |
| Key Trade-off | Thêm bước mức hiểu để có nháp sát ý | Chấp nhận nháp dài để giảm gõ, dễ Bỏ | Chấp nhận xác nhận mức hiểu và sửa nháp | Cùng muốn giảm công gõ; mức kiểm soát mong muốn khác nhau |


## 2. Diễn giải

Việc Vũ/Huy duyệt nhanh có thể phản ánh xu hướng bỏ qua cảnh báo; chưa chứng minh họ “tin tưởng mù quáng”. Dũng lại đọc và Bỏ, nên C không thất bại với mọi tester. B được hai người chọn nhưng Dũng trả lời qua loa, cho thấy hỏi mức hiểu không bảo đảm mức hiểu được khai chính xác.

## 3. Đúng một Next Change chung

**Thêm cảnh báo thiếu dấu vết vào bước xác nhận mức hiểu của Option B:** khi người dùng chọn Đã nắm ở phần không có dấu vết, hiển thị “Phần này chưa có dấu vết học tập; bạn có thể giữ mức hiểu đã chọn hoặc đổi lại”, cho phép tiếp tục hoặc đổi mức hiểu. Không tự hạ mức hiểu và không coi thiếu dấu vết là mâu thuẫn chứng minh người dùng không hiểu.

Đây là phiên bản làm rõ đề xuất cảnh báo trong bản tổng hợp Minh bàn giao. Căn cứ: Dũng chọn Đã nắm hàng loạt ở B; Vũ/Huy duyệt nhanh ở C; Dũng có phản ứng với cảnh báo C. Cần test lại để biết cảnh báo mới có tác dụng hay chỉ thêm bước. Đề xuất cá nhân tích hợp Hỏi AI vào B trong phiếu Huy được giữ làm ý tưởng, không thêm thành Next Change thứ hai.

## 4. Still Unproven

- Cảnh báo mới có giảm trả lời qua loa hay làm người dùng mệt hơn?
- Mức hiểu tự khai có phản ánh khả năng thực sự áp dụng kiến thức?
- Bài dài 20 phần có gây mệt vì khảo sát?
- Người dùng có quay lại đọc ghi chú sau một tuần?

Ba phiên cung cấp bài học tương tác, chưa đủ xác nhận hiệu quả học tập hoặc nhu cầu thị trường.
