# AI Log - Ngày 6 / Day22

**Dương Thị Hồng Viên - MSSV 2A202602385**

Tôi làm phần pricing và GTM cho AI Notes đã có ở Day18-19. Nhật ký này được Codex hỗ trợ viết từ tài liệu, code và kết quả chạy trong lần làm bài hiện tại. Những đoạn dùng “tôi” thể hiện cách tôi giải thích bài làm; không có nghĩa tôi đã tự tay gõ toàn bộ code. Các phỏng vấn cũ được kế thừa theo hồ sơ, không được thực hiện lại hôm nay.

## Tôi bắt đầu từ đâu

Tôi đọc slide PDF 29 trang và cả sáu phần hướng dẫn lab trên VLearn. Tôi lấy đúng mẫu Excel và One-Pager từ thư mục Drive trong đề. Tôi không tạo một bảng mới chỉ có con số tổng, vì bài này cần nhìn được từng thành phần chi phí và liên kết sang giá, CAC.

Khi xem lại Option B, tôi thấy code ghi rõ phản hồi là canned text. Bản nháp hiện có cho tôi hình dung workflow, nhưng chưa cho tôi chi phí API hay tỷ lệ model viết đúng. Hồ sơ cũ có ba người thử A/B/C, hai người chọn B. Tôi chỉ dùng điều đó làm lý do kế thừa B; tôi không biến ba phiên này thành bằng chứng khách SME sẽ trả tiền.

## Tôi xác định thứ định bán

Tôi chọn một bản nháp cá nhân cho một học viên và một bài học làm đơn vị. Nháp phải có ý chính, chỗ chưa hiểu, việc thực hành và nguồn hợp lệ. Tôi thấy cần viết cả điều không tính tiền: lỗi, nháp trống, trùng job và retry. Nếu chỉ đếm lần bấm nút thì khách có thể bị tính phí dù chưa nhận được gì dùng được.

Buyer tôi muốn thử là trưởng đào tạo hoặc chủ SME. Đây là giả thuyết mới, chưa có phỏng vấn người ký ngân sách. Tôi ghi hai cách định vị: bán công cụ phần mềm, hoặc giảm công chuẩn bị nháp từ ngân sách vận hành. Tôi tạm chọn cách thứ hai, nhưng không nói AI thay cả giảng viên. Pilot phải kiểm tra xem công việc chuẩn bị nháp này có thật trong SME hay không.

Tôi chấm Attribution 1/10 và Autonomy 0/10 theo hiện trạng. Điểm thấp làm tôi hơi khó giải thích lựa chọn Usage, nhưng hợp lý hơn việc cho điểm cao theo chức năng chưa làm. Model gợi ý Seat/Hybrid; tôi vẫn thử Usage vì số người học giống nhau chưa chắc số bài học giống nhau. Tôi ghi rõ cần có eval và metering trước bán, không gọi đây là Outcome học tập.

## Tôi tính chi phí và giá

AI hỗ trợ tôi đọc đơn vị giá trên trang chính thức của Claude, Notion và Otter. Tôi dùng Haiku 4.5 làm kịch bản chi phí, không nói đây là model đã chạy tốt nhất. Input, output và cache là giá list kiểm tra ngày 08/10/2026. Tôi cũng đọc điều kiện cache: Haiku 4.5 cần ít nhất 4096 token. Prefix 5000 token trong bảng là giả định, chưa có cache hit thật.

Tôi điền 1000 job bắt đầu, completion giả định 80%, retry 8% và QA nội bộ 5% số job, 3 phút mỗi ca với công 9 USD/giờ. Tôi chọn A vì người học tự sửa nháp, nhưng vẫn giữ QA của bên cung cấp. Infra 0,008 USD/lượt và overhead 50 USD/tháng đều là ngân sách thử nghiệm, chưa có hóa đơn. Tỷ giá 26000 chỉ để quy hoạch; tôi không lấy nó làm tỷ giá ngân hàng đã xác minh.

Kết quả tính và đối chiếu đã chạy: chi phí trực tiếp 54,53/800 = 0,0681625 USD/job; gồm overhead là 104,53/800 = 0,1306625. Giá 0,40 cho biên trực tiếp 82,959375%, sau overhead 67,334375%. Tôi neo vào tiết kiệm giả định 20 phút/job, công 6 USD/giờ và 400 job/khách/tháng; chưa đo được số phút này.

Tôi đã nhờ AI phản biện theo hai prompt tiếng Anh ở mục 4.7: Cost/Job Stress Test và Value Metric Challenger. Prompt, phản hồi tiếng Việt và quyết định accept/partial/reject nằm trong `critique-log.md`. Điểm tôi nhận là cần ghi cả ngưỡng containment sau overhead: 65,33125%, thay vì chỉ dùng 34,08125% trực tiếp ở ô B33. Tôi nhận một phần gợi ý batch: tính thử tiết kiệm nhưng không chọn cho trải nghiệm đang chờ nháp. Tôi không nhận ý đổi ngay sang model rẻ nhất vì chưa eval chất lượng.

## Tôi chọn kênh và sửa cách hiểu doanh thu

Tôi chốt PLG cho 90 ngày đầu. Quota AE giả định vẫn cho số deal/ngày khả thi, nên tôi không viết “Sales không thể làm vì quá nhiều deal”. Vấn đề trong kịch bản của tôi là CAC: CPO 1000 chia win rate 20% thành 5000, trong khi ngân sách CAC chỉ 1592,82 USD. CPO, công AE và win rate chưa được đo ở thị trường của tôi.

AI chỉ ra 160 USD/tháng là khi khách dùng đủ 400 lượt, không phải doanh thu chắc chắn của Usage. Tôi bổ sung trường hợp dùng ít: provider còn 500 attempt và 400 completed, overhead vẫn 50. Full cost tăng lên 0,1931625/job, margin còn 51,709375%. Tôi thấy đây là chỗ phải hỏi buyer và đo retention, không chỉ chỉnh giá cho bảng hiện màu xanh.

Pain tôi ghi là 21:30, học xong đang gom ghi chú để làm lab ngày sau trong VLearn. Giờ này là tình huống học tập giả định, không phải quan sát mới của khách. Sidebar VLearn là điểm nhúng đề xuất; hiện chưa có API hoặc quyền tích hợp. Tôi để việc xác minh đó trong tháng đầu, có phương án nhập transcript được phép và đo việc phải chuyển tab.

## Các thao tác và lỗi thực tế trong lần làm này

Codex trực tiếp tạo builder, điền các ô vàng bằng công cụ spreadsheet, xuất PDF và chạy kiểm tra. Bài cũ Day19 được giữ nguyên. Lúc kiểm tra lần đầu, phép so sánh đối tượng conditional formatting thất bại do cách so sánh của script; chuyển sang đối chiếu XML đã xác nhận quy tắc gốc còn nguyên.

Ảnh preview cho thấy Decision Note bị cắt chữ. Script tính layout ban đầu tạo dữ liệu rỗng do dùng generator chưa được thực thi. Sau khi sửa vòng lặp và tăng chiều cao đúng các dòng có nội dung, chữ đã hiển thị. Tôi giữ màu, cấu trúc và công thức của mẫu; chỉ thêm wrap cho chữ ô vàng và chỉnh chiều cao dòng liên quan.

Một lỗi đáng chú ý hơn xuất hiện khi xem bảng sensitivity và điểm kênh: một số công thức sao chép còn giữ kết quả cũ của mẫu dù các chỉ số chính đã đổi. Codex nạp lại biểu thức công thức gốc để buộc tính lại, giữ nguyên nội dung 93 công thức trong file cuối. Tôi bổ sung kiểm tra cả sáu dòng sensitivity và cả ba tổng điểm kênh, thay vì chỉ nhìn cost/job ở ô tổng.

Không có thao tác chạy model live, tuyển khách, phỏng vấn mới, thu tiền, triển khai tích hợp hay nộp VLearn trong lần này. Tôi không ghi các việc đó như đã làm.

## Tôi đã kiểm tra những gì

Các log máy nằm trong thư mục `qa/`. Tôi chạy baseline, đổi completion 50/60/70/80/90%, đối chiếu A/B, batch, overhead gấp đôi. Tôi mở lại file cuối bằng engine spreadsheet trên bản nhớ riêng để thử không-cache, lượng sử dụng giảm một nửa, win rate 0 và completion trống. Phép tính độc lập kiểm tra từng dòng sensitivity, tổng điểm PLG 20 / Sales 13 / Partner 10, giá sàn, GM và CAC.

Input không hợp lệ cho thấy một giới hạn có sẵn của mẫu: không có job hoàn thành thì cost/job trả 0, win rate 0 thì CAC cũng trả 0 và có thể hiện “khả thi”. Tôi không hiểu các số 0 này là chi phí thật; tôi ghi kết quả kinh tế là chưa xác định và giữ công thức xám theo đề. File cuối giữ 7 sheet, 93 công thức, validation và conditional formatting. Nội dung ngoài ô vàng không đổi; các thay đổi chiều cao/wrap được ghi riêng. Công cụ đã scan không thấy lỗi công thức trong baseline hợp lệ. Đây là kiểm tra bằng artifact-tool, không phải Microsoft Excel desktop.

PDF có một trang, trích được tên/MSSV và đã render để xem chữ tiếng Việt, bảng và phần cuối không bị cắt. Tôi kiểm tra ảnh các sheet; hình thức của mẫu vẫn khá rộng vì ô Decision Note hẹp, nhưng nội dung nhập đã đọc được. Không có kiểm thử này nào chứng minh model viết đúng 80%.

## Phần còn thiếu của tôi

Tôi đã viết kế hoạch eval 50 ca, Q&A mua hàng, pilot hai SME và phiếu test người lạ có người phụ trách/deadline. Đây là tài liệu chuẩn bị, chưa phải kết quả. Phiên nhóm khác đọc One-Pager hai phút chưa diễn ra, nên tôi không tự tích “Được” hoặc ghi số câu hỏi lại bằng 0. Sau khi có người đọc thật, tôi sẽ ghi nguyên ý họ trả lời, sửa chỗ hiểu sai và cập nhật workbook.
## Rà soát sau khi nhận toàn bộ yêu cầu
Tôi kiểm lại sáu mốc và ghi riêng requirements-audit.md. Tôi cập nhật tỷ giá từ XML Vietcombank, thay 26.000 bằng giá USD bán ra 26.100 VND. Các kết quả USD không đổi. Live eval, benchmark CPO đúng buyer và test người lạ chưa có kết quả thực tế nên tôi giữ trạng thái chưa đạt.

## Hoàn thiện bản nộp
Tôi tìm được nguồn CPO gốc ICONIQ2026 và xem biểu đồ trang22 để phân biệt2025 với2026. SMB2026 là6300USD/opportunity. Tôi giữ kịch bản địa phương1000USD là giả định và thêm so sánh benchmark, không lấy dữ liệu quốc tế làm chi phí thật của mình. Tôi bổ sung driver tiết kiệm và retry control vào ô input text để truy lại số trên PDF. Tôi chạy lại model và xem PDF vẫn một trang. Khi mở mục nộp VLearn, trang đã có mãBN-261008-39238 và đúng linkrepo; tôi chỉ xác nhận, không tự nhận đã bấm nộp trong lượt này. Test người lạ chưa có kết quả.
