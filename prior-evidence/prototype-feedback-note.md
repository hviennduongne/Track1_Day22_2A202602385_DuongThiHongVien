# Prototype Feedback Note
*(Phiên test do Dương Thị Hồng Viên làm facilitator)*

**Facilitator:** Dương Thị Hồng Viên
**Tester / Context:** Mai Tiến Huy (2A202602914). Huy thường học online trên Coursera nhưng ít ghi chép tay vì làm gãy mạch xem video, thỉnh thoảng có dùng Notion AI để tóm tắt script nhưng thấy kết quả hay bị chung chung, thiếu trọng tâm.

---

## 1. Hành vi & Lựa chọn của Tester

| Observation | Note (Ghi hành vi thật, không diễn giải) |
|---|---|
| First action | Huy mở Option C trước, đọc lướt thẻ đầu tiên rồi bấm nút "Giữ". |
| Chỗ dừng, do dự hoặc hiểu sai | Ở Option A, Huy bôi đen đoạn text nhưng khựng lại khoảng 4 giây tìm nút "Hỏi AI" vì nút nằm ở góc dưới, hơi khuất so với vùng bôi đen. |
| Evidence được đọc hay bỏ qua | Ở Option C, Huy hoàn toàn bỏ qua cờ cảnh báo màu vàng ở Phần 4 (dù AI báo là không có dấu vết). Huy bấm "Giữ" liên tục cả 5 phần chỉ trong vòng 10 giây. |
| Cách tester sửa hoặc lấy lại control | Ở Option B, Huy bấm "Chưa hiểu" ở Phần 3. Sau khi AI sinh nháp, Huy bấm ngay vào vùng textarea xóa bớt 2 câu thừa của AI rồi mới bấm Lưu. Ở Option A, Huy dùng nút "Hoàn tác" ngay lập tức khi thấy AI chèn text quá dài. |
| Option được chọn | **Option B** |
| Lý do và trade-off | "Mình chọn B vì nó tiện nhất. C thì AI tự làm hết nhưng mình sợ nó chế bậy, lười đọc lại. A thì mất công gõ tay quá. B bắt mình xác nhận mức hiểu trước nên AI viết ra nháp khá đúng ý mình, mình chỉ việc gọt lại một tí là xong." |
| Evidence chống lại kỳ vọng nhóm | Kỳ vọng nhóm là tester kiểm tra cảnh báo trước khi duyệt; phiếu ghi Huy bấm Giữ liên tục. Quan sát này đi ngược kỳ vọng; nguyên nhân tâm lý là diễn giải, không phải fact. |

---

## 2. Bóc tách 4 lớp phản hồi

### Lớp 1: OBSERVED (Tester đã làm hoặc nói gì?)
- Ở Option C, Huy bấm "Giữ" cả 5 phần trong vòng 10 giây mà không mở Transcript hay đọc nội dung cờ cảnh báo màu vàng ở Phần 4.
- Ở Option B, Huy chủ động sửa lại text do AI viết ở Phần 3 trước khi lưu.
- Trích lời Huy: "C thì AI tự làm hết nhưng mình sợ nó chế bậy, lười đọc lại. A thì mất công gõ tay quá."

### Lớp 2: INTERPRETED (Nhóm nghĩ điều đó có thể có nghĩa gì?)
- Ở phiên Huy, cảnh báo có thể chưa thu hút chú ý hoặc tester ưu tiên tốc độ; chưa xác định nguyên nhân và không suy rộng sang mọi người dùng.
- Việc Huy chọn mức hiểu và sửa nháp ở B có thể phù hợp với mong muốn giảm công gõ nhưng vẫn kiểm soát nội dung. Chưa chứng minh bước khảo sát làm tăng trách nhiệm kiểm tra.

### Lớp 3: DECIDED — NEXT CHANGE (Đề xuất cá nhân sau phiên test)
- Đề xuất cá nhân ban đầu: chọn Option B làm cơ chế cốt lõi và mượn tính năng "Hỏi AI trích đoạn" từ Option A tích hợp vào B để dùng trong trường hợp người dùng chọn "Chưa hiểu" nhưng muốn AI giải thích thêm trước khi tự sửa text nháp.

### Lớp 4: STILL UNPROVEN (Điều gì chưa thể kết luận từ một người?)
- Phiếu cá nhân chỉ ghi lựa chọn B của Huy. Chưa rõ những người có thói quen take-note tỉ mỉ, thích tự viết từ đầu có thấy Option B bị gò bó hay không.



## 3. Ghi chú điều phối

Huy đã trải nghiệm đủ A/B/C; Option C là phương án được mở đầu tiên. Các hành vi và lời nói ở trên thuộc phiên do Dương Thị Hồng Viên trực tiếp điều phối.

Help Needed chưa được ghi thành số đếm riêng; không tự thêm con số vào dữ liệu. Điểm tìm nút Hỏi AI được ghi ở mục do dự. Quyết định chung sau khi tổng hợp ba phiên xem [group-feedback-synthesis.md](group-feedback-synthesis.md); đề xuất cá nhân ở tầng 3 là đầu vào thảo luận của nhóm.
