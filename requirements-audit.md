# Đối chiếu đầy đủ yêu cầu Day22 - 08/10/2026

**Dương Thị Hồng Viên - MSSV 2A202602385.** Tôi đọc lại ba phần Chuẩn bị, Thực hành, Kiểm tra kết quả và rubric được cung cấp. PASS về tính toán không đồng nghĩa đã có bằng chứng thị trường. Tôi không ghi thời lượng 120 phút như một phiên bấm giờ đã thực hiện.

## Sáu mốc Pass / Fail

| Mốc | Trạng thái hiện tại | Bằng chứng và phần còn thiếu |
|---|---|---|
| 1. Job, buyer và budget | PASS phần định nghĩa; buyer cần xác minh | Một nháp cá nhân/bài học có nội dung và nguồn, loại lỗi/trùng/retry. Buyer giả thuyết là chủ SME hoặc trưởng bộ phận đào tạo. Xem Cost B5 và source ledger. Chưa phỏng vấn buyer về ngân sách. |
| 2. Cost/Job và pricing | PASS mô hình; FAIL phần đối chiếu eval thực tế | Đủ API, Infra, HITL, Retry, Overhead; chia 800 completed. HITL A vẫn có QA nội bộ, escalation của khách không vào COGS. Direct cost $0,0681625; gồm overhead $0,1306625. Giá $0,40 vượt giá sàn gồm overhead $0,3919875. Direct GM 82,959375%, sau overhead 67,334375%. Breakeven GM 60% gồm overhead cần containment 65,33125%; 80% là giả định, chưa có eval để so. |
| 3. Value Metric | PASS lập luận; benchmark có giới hạn | Chấm Attribution 1/10 và Autonomy 0/10 theo hiện trạng. Chọn Usage có điều kiện; không bán Outcome. Hai nguồn giá thật là Notion Custom Agents và Otter. Đây là sản phẩm gần với workflow ghi chú/tóm tắt, không chứng minh cùng buyer hoặc WTP cho AI Notes. |
| 4. Một kênh GTM có số | PASS phép tính và chọn một kênh; FAIL bằng chứng CPO thị trường | Chọn PLG cho 90 ngày. CAC budget $1592,82; ACV $1920; quota giả định cho 0,15625 deal/AE/ngày. CPO $1000 và win rate 20% cho CAC $5000. Đây là sensitivity từ giả định, chưa có benchmark CPO đúng phân khúc hoặc dữ liệu funnel thực. Không dùng nó để khẳng định Sales-Led không thể bán. |
| 5. Pain, plan và Evidence Pack | PASS nội dung kế hoạch | Pain 21:30 + gom ghi chú sau bài học + VLearn là giả thuyết. Sidebar là điểm nhúng đề xuất, chưa có quyền tích hợp. Tháng 1 học với 2 SME, eval 50 ca; tháng 2-3 mục tiêu 5 khách trả phí; Viên phụ trách. Ba tài sản có nội dung, người phụ trách và deadline trong evidence/. Chưa gọi kế hoạch là kết quả pilot. |
| 6. One-Pager và người lạ | PASS file một trang; FAIL kiểm thử người lạ | PDF một trang đã render và xem. Chưa có người ngoài nhóm đọc trong 2 phút, chưa có ba câu trả lời và số câu hỏi lại. Giữ ô kết quả chưa test, số câu hỏi lại để trống. AI critique không thay kiểm thử này. |

## Budget line và Decision Note

**Cách định vị A:** “AI Notes hỗ trợ học viên soạn ghi chú cá nhân sau bài học”; người mua giả thuyết là trưởng đào tạo, tiền từ ngân sách phần mềm học tập, cần chứng minh thêm một công cụ đem lại giá trị.

**Cách định vị B:** “AI Notes giảm công chuẩn bị nháp ghi chú cho từng học viên”; người duyệt giả thuyết là chủ SME/trưởng vận hành, tiền từ ngân sách vận hành đào tạo. Tôi chọn thử B vì mô hình giá trị đang neo vào thời gian chuẩn bị nháp. Tôi chưa chứng minh mức tiết kiệm 20 phút và không nói thay toàn bộ nhân sự. Định vị B không có nghĩa chọn biến thể HITL B: sản phẩm hiện tại vẫn là công cụ nháp, khách kiểm cuối.

**Decision Note - ba câu:** Tôi thử Usage theo nháp hoàn thành vì đơn vị này đếm được và gắn với phần việc khách nhận. Ma trận hiện tại gợi ý Seat/Hybrid, nên tôi chỉ thu theo Usage sau khi có metering và tiêu chí completed, chưa đủ bằng chứng bán Outcome. Tôi lệch gợi ý vì giả thuyết khách học với tần suất khác nhau và muốn trả theo lượng nháp nhận được; nếu pilot cho thấy khách muốn ngân sách cố định hoặc metering gây tranh cãi, tôi sẽ thử Hybrid.

## Checklist cuối và số liệu có thể truy

| Yêu cầu | Kết quả |
|---|---|
| Đủ năm thành phần chi phí, HITL/Retry có lý do | PASS; Cost B15:B59, ledger giải thích A/B |
| Mẫu số là completed | PASS; Cost B9 × B10 = 800 |
| Giá sàn, trần và GM | PASS cho kịch bản; Pricing và Cost B66:B67 |
| Breakeven so với eval | FAIL bằng chứng thực tế; có tính ngưỡng, chưa eval |
| Metric, ba câu và hai benchmark | PASS lập luận; giới hạn comparables nêu ở trên |
| CAC, deal/AE/ngày, CPO, đúng một kênh | PASS tính toán; FAIL benchmark CPO thị trường |
| Pain đủ ba phần, plan, owner, ba tài sản | PASS kế hoạch; chưa triển khai |
| Giá có nguồn và ngày | PASS API/benchmark; FX đã cập nhật nguồn Vietcombank |
| One-Pager truy Excel và test người lạ | PASS các headline tài chính; FAIL human test; các driver diễn giải chi tiết xem ledger |
| Ít nhất hai prompt critique | PASS; critique-log.md có prompt, phản hồi và quyết định |

Giá trị $800/tháng ở Pricing B10 được tính từ giả định 400 job × 20 phút × $6/giờ ÷ 60. Hai driver 20 phút và $6/giờ được ghi ở ledger, chưa là ô numeric riêng trong mẫu. Không gọi đây là thời gian tiết kiệm đã đo. Max 3 lần thử/job là thiết kế pilot, chưa có trong code. Những số ngoài headline có rationale trong ledger hoặc kế hoạch; chưa khẳng định toàn bộ số diễn giải đều đã có ô tính độc lập.

## Việc thực tế tôi làm trong lượt rà soát

Tôi đối chiếu lại yêu cầu, cập nhật FX từ XML chính thức của Vietcombank và chạy lại builder/kiểm tra file. USD bán ra 26.100 VND, nguồn ghi 08/10/2026 22:46:03; chọn giá bán ra vì kịch bản dùng VND mua USD để trả API. Phép tính USD không đổi. Tôi không thực hiện phỏng vấn, live eval, tuyển pilot hoặc test người lạ trong lượt này.

Trước khi tuyên bố đạt toàn bộ: cần kết quả human test; eval chất lượng/containment so với ngưỡng; dữ liệu CPO/funnel đúng buyer; xác nhận budget và thời gian tiết kiệm. Các việc này cần dữ liệu thật. Không tự chấm 100 điểm hoặc ghi PASS sáu trạm.
