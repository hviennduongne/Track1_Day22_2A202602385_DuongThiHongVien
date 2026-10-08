# Track 1 — Day18–19: Prototype Testing Lab

## 1. Thông tin cá nhân & đội ngũ

| Nội dung | Thông tin |
|---|---|
| Họ tên | Dương Thị Hồng Viên |
| MSSV | 2A202602385 |
| Nhóm | Nhóm 2 Người |
| Thành viên | Ninh Quang Minh (2A202602432), Dương Thị Hồng Viên (2A202602385) |
| Case | B — AI Notes: Personal Learning Notes, kế thừa Day17 |

Bài gộp Day18–19; nhóm hai thành viên. Minh phụ trách B/C và hai tester; Viên phụ trách A và một tester. Mỗi tester trải nghiệm cả A/B/C.

## 2. Hypothesis Problem

> Khi vừa học xong một bài online có nhiều framework hoặc nội dung mới, học viên gặp khó khăn trong việc tổng hợp điểm quan trọng và chỗ mình chưa hiểu thành một bản ghi chú dùng được để ôn hoặc làm bài, vì ghi chú thủ công trong lúc học làm gãy mạch (pause, chuyển tab, tua lại) còn bản tóm tắt AI chung chung không phản ánh chỗ họ đã hiểu và chưa hiểu, dẫn đến ghi chú lộn xộn hoặc bị bỏ dở và phải mở lại video tua tìm khi cần.

Evidence Day17 của Minh và Viên được tổng hợp trong [design sheet](three-option-design-sheet.md), tách riêng dữ kiện quan sát và diễn giải để kế thừa đúng bài toán của nhóm.

## 3. Three Solution Options

| Option | Cơ chế & quyền quyết định | Phụ trách | Trải nghiệm |
|---|---|---|---|
| A | Người dùng tự viết; gọi AI khi cần; xem gợi ý rồi chèn/bỏ, sửa hoặc hoàn tác | Viên | [Option A](https://track1day19aitutor.vercel.app/#/a) |
| B | Người dùng xác nhận mức hiểu; AI tạo nháp theo mức hiểu; người dùng sửa và lưu | Minh | [Option B](https://track1day19aitutor.vercel.app/#/b) |
| C | AI tạo sẵn nháp; người dùng kiểm tra nguồn, sửa và Giữ/Bỏ từng phần | Minh | [Option C](https://track1day19aitutor.vercel.app/#/c) |

Cả ba dùng cùng bài Product Discovery Framework, dấu vết và nhiệm vụ tạo ghi chú để làm lab. [Hướng dẫn mở và trạng thái link công khai](prototype-link.md).

## 4. Đóng góp cụ thể của tôi

- Phụ trách Option A trong `prototype/option-a.js`: người dùng tự viết, bôi đen/gõ câu hỏi để gọi AI, xem phản hồi, chèn hoặc đóng, sửa và hoàn tác.
- Nhận khung prototype và dữ liệu chung từ Minh; tích hợp Option A qua script trong `prototype/index.html`, giữ cùng fixture và thành phần giao diện để so sánh công bằng.
- Đóng góp Practice Note Day17 và cơ chế user-led vào phần Evidence Huddle, phân vai, quyền chèn/bỏ/hoàn tác trong Human–AI Decision Table.
- Điều phối phiên A/B/C với Mai Tiến Huy (2A202602914), người ngoài nhóm; ghi phiếu riêng và cung cấp kết quả cho bản tổng hợp ba tester.
- Minh phụ trách khung chung, B/C và hai phiên Vũ/Dũng. Code và tài liệu có AI hỗ trợ; không quy toàn bộ mã sinh bởi AI thành code tự viết.

## 5. Dữ liệu kiểm thử & bài học

[Phiếu cá nhân của Viên](prototype-feedback-note.md): Huy mở C trước và bấm Giữ; ở A dừng khoảng 4 giây tìm Hỏi AI và dùng Hoàn tác; ở B chọn Chưa hiểu tại Phần 3, xóa hai câu trước khi lưu. Huy chọn B, chấp nhận bước xác nhận mức hiểu để giảm công gõ và vẫn sửa được bản nháp.

[Bản tổng hợp nhóm](group-feedback-synthesis.md): Vũ chọn B, Dũng chọn C, Huy chọn B. Hành vi đọc cảnh báo trái nhau: Dũng đọc rồi Bỏ, Vũ/Huy duyệt nhanh. Đây là diễn giải từ ghi chép ba phiên, không chứng minh hiệu quả thị trường.

**Một Next Change chung:** thêm cảnh báo thiếu dấu vết vào bước xác nhận mức hiểu của B, cho phép tiếp tục hoặc đổi lựa chọn. Không coi thiếu dấu vết là bằng chứng người dùng chưa hiểu.

**Still Unproven:** cảnh báo có giúp người dùng cân nhắc hơn không; mức hiểu tự khai có chính xác không; khảo sát có gây mệt ở bài dài không; người dùng có quay lại ôn ghi chú không.

## 6. AI Support Log

[Nhật ký cá nhân](ai-support-log.md) phân biệt phần AI hỗ trợ code/tài liệu, dữ liệu prototype và phản hồi người dùng. Lần hoàn thiện này dùng Codex để đối chiếu hồ sơ, chuyển đúng phiếu Huy, sửa nội dung cá nhân và kiểm tra Option A; không tạo thêm quote hoặc quan sát.

### Đối chiếu yêu cầu trước khi nộp

| Yêu cầu | Nội dung trong bài |
|---|---|
| 6 tệp bắt buộc, README 6 mục | Đủ; đúng tên/MSSV và đóng góp cá nhân Viên |
| Evidence Continuity | Hypothesis đủ 5 thành tố; có evidence Day17, diễn giải và ẩn số |
| Meaningful Options | A/B/C khác cơ chế; có comparison contract và distance checks |
| Human Control | Có kỳ vọng, phân vai, nguồn và quyền sửa/bỏ/hoàn tác/khôi phục |
| Test-ready | Có bộ A/B/C chung bối cảnh, dữ liệu, nhiệm vụ, kết quả và reset |
| Learning, Not Praise | Ba phiên test; phiếu riêng của Viên; pattern, trade-off, một Next Change và Still Unproven |

Kiểm tra kỹ thuật: cú pháp JavaScript, logic A/B/C, sửa/lưu/hoàn tác/khôi phục/reset và annotation đều đạt trong môi trường kiểm tra DOM. Link truy cập được quản lý tại [prototype-link.md](prototype-link.md).
