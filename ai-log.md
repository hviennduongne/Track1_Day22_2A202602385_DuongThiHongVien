# AI Log - Ngày 6 / Day22

**Học viên: Dương Thị Hồng Viên**  
**MSSV: 2A202602385**  
**Ngày làm bài: 08/10/2026**

## Lúc đọc đề

Ban đầu tôi nghĩ bài này chủ yếu là chọn một mức giá cho AI Notes. Đọc kỹ hơn, tôi thấy phải giải thích được người nào trả tiền, tiền lấy từ ngân sách nào và vì sao chọn cách thu đó. Vì vậy tôi xem lại slide, sáu phần hướng dẫn và prototype Option B trước khi điền Excel.

Option B hiện dùng câu trả lời dựng sẵn, chưa gọi model. Tôi giữ sản phẩm này để làm bài, nhưng không lấy phản hồi của ba người thử trước đây làm tỷ lệ AI viết đúng hoặc bằng chứng khách sẽ trả tiền. Tôi dùng AI để giải thích thêm các khái niệm chưa chắc, nhất là Cost/Job, HITL và Attribution.

## Chốt một job trước khi tính tiền

Tôi chọn một nháp ghi chú cá nhân cho một học viên trong một bài học là một job. Nháp cần có ý chính, phần chưa hiểu, việc thực hành tiếp theo và nguồn hợp lệ. Tôi ghi luôn các trường hợp không tính phí: lỗi, nháp trống, trùng jobID và retry của cùng job. Tôi thấy cách này dễ giải thích với khách hơn việc thu theo số lần gọi API.

Buyer tôi muốn thử là chủ SME hoặc trưởng đào tạo. Tôi chọn hướng giảm công chuẩn bị nháp từ ngân sách vận hành, nhưng chưa có phỏng vấn người ký ngân sách. Nếu họ không có công việc này hoặc không thấy cần nháp cá nhân, tôi phải sửa giả thuyết buyer chứ không chỉ đổi câu quảng cáo.

## Điền chi phí và nhờ AI kiểm lại

Tôi dùng mẫu có sẵn và nhờ AI hỗ trợ điền các ô input, kiểm công thức và xuất file. Tôi chọn Haiku 4.5 để tính một kịch bản chi phí. Giá API được kiểm tra từ nguồn chính thức ngày 08/10/2026; việc chọn model ở đây chưa có nghĩa model đó đã qua eval chất lượng.

Tôi đặt 1.000 job bắt đầu, containment 80%, retry 8%. Với HITL A, khách tự kiểm và sửa nháp cuối, nhưng bên cung cấp vẫn có QA nội bộ: 5% số job, ba phút mỗi ca, công $9/giờ. Infra $0,008/job và overhead $50/tháng là dự toán thử nghiệm, chưa có hóa đơn.

Điểm tôi phải để ý là mẫu số. Tôi dùng 800 job hoàn thành, không dùng 1.000 job đã thử. Kết quả là cost trực tiếp $0,0681625/job; cộng overhead là $0,1306625/job. Chi phí của những lần làm không xong vẫn nằm trong tổng tiền phải trả.

Tôi dùng hai prompt trong đề là **Cost/Job Stress Test** và **Value Metric Challenger** để nhờ AI phản biện. Nội dung và các quyết định giữ, sửa hoặc không nhận gợi ý được ghi ở critique-log.md. Tôi nhận gợi ý tính thêm ngưỡng containment sau overhead. Tôi có thử batch nhưng không chọn cho trải nghiệm người học đang chờ nháp. Tôi cũng chưa đổi ngay sang model rẻ nhất vì chưa biết chất lượng có đủ không.

## Chọn giá và xem mô hình gãy ở đâu

Tôi thử giá $0,40/nháp hoàn thành, cap 400 job/khách/tháng. Tôi giả định mỗi nháp tiết kiệm 20 phút với công $6/giờ. Các số này giúp thiết kế kịch bản giá, nhưng vẫn cần đo thời gian khách review và sửa nháp.

Giá sàn ba lần cost gồm overhead là $0,3919875, nên giá $0,40 chỉ cao hơn một chút. Direct GM khoảng 82,96%; biên sau overhead khoảng 67,33%. Tôi không gộp hai con số này dưới cùng một nhãn vì dễ làm người đọc hiểu nhầm.

Để biên sau overhead đạt 60%, containment cần ít nhất 65,33125%. Mức 80% trong bài vẫn là ước tính. Khi giảm volume một nửa mà overhead giữ nguyên, biên chỉ còn khoảng 51,71%. Tôi thấy đây là lý do phải đo mức dùng thật; $160/tháng chỉ có khi khách dùng đủ 400 job, không phải doanh thu được bảo đảm.

## Quyết định về metric và kênh

Tôi chấm Attribution 1/10 và Autonomy 0/10 theo hiện trạng, thay vì cho điểm theo tính năng định làm. Ma trận gợi ý Seat/Hybrid. Tôi vẫn muốn thử Usage vì tần suất học khác nhau, nhưng phải có bộ đếm và tiêu chí completed trước khi thu tiền. Tôi không bán Outcome kiểu “học viên hiểu bài” khi chưa đo được kết quả đó.

Tôi chọn một kênh PLG cho 90 ngày. Tôi nhờ AI kiểm phép tính CAC và số deal mỗi AE cần chốt. Quota giả định vẫn cho số deal/ngày khả thi, nhưng CAC $5.000 ở kịch bản CPO $1.000 vượt ngân sách $1.592,82. Như vậy vấn đề nằm ở chi phí acquisition trong kịch bản, không phải kết luận nhân viên không thể chốt đủ deal.

Tôi bổ sung nguồn ICONIQ 2026 và xem biểu đồ gốc trang 22. CPO SMB năm 2026 là $6.300; $5.200 là của năm 2025. Tôi ghi rõ đây là dữ liệu B2B software quốc tế, không dùng nó làm chi phí thật của SME Việt Nam.

Pain Moment tôi chọn để kiểm tra là 21:30, học xong đang gom ghi chú trên VLearn để làm lab hôm sau. Sidebar là điểm nhúng đề xuất, chưa có quyền tích hợp. Tôi để việc xác minh nguồn và thử onboarding vào tháng đầu, trước khi đặt mục tiêu mở rộng.

## Những lỗi tôi ghi lại khi làm file

Trong quá trình tạo và kiểm tra file có ba lỗi đáng nhớ. Tôi dùng AI hỗ trợ tìm nguyên nhân và sửa, rồi xem kết quả kiểm tra lại.

- Lần so sánh conditional formatting đầu tiên báo không khớp vì script so sánh đối tượng chưa đúng. Đổi sang đối chiếu XML thì xác nhận quy tắc gốc vẫn còn.
- Preview bị cắt chữ ở Decision Note. Phần tạo layout chưa thực thi vòng lặp nên chưa có chiều cao dòng cần dùng. Sau khi sửa, tôi kiểm lại chữ trong các ô đã điền.
- Một số công thức ở sensitivity và tổng điểm kênh còn giữ kết quả cũ sau import. Nạp lại biểu thức công thức gốc và tính lại đã xử lý được. Tôi bổ sung kiểm tra từng dòng, không chỉ xem ô tổng Cost/Job.

Tôi giữ cấu trúc và 93 công thức của mẫu. Nội dung được nhập vào ô vàng; phần trình bày chỉ chỉnh wrap và chiều cao các dòng liên quan. Tôi không dùng Antigravity.

## Kiểm tra cuối

Các kiểm tra đã chạy gồm baseline, containment sensitivity, HITL A/B, batch, overhead tăng đôi, no-cache và volume giảm một nửa. File cuối được mở lại bằng công cụ spreadsheet trên bản trong bộ nhớ. Tôi chưa chạy Microsoft Excel desktop.

Khi thử win rate bằng 0 hoặc completion trống, mẫu có thể trả kết quả 0. Tôi ghi đây là input không hợp lệ, không hiểu thành chi phí thật bằng 0. Việc công thức không báo lỗi chưa đủ để kết luận một kết quả có ý nghĩa kinh tế.

PDF được render và xem, vẫn một trang, có tên và MSSV, không bị cắt phần cuối. Lượt kiểm tra hồ sơ cuối có 334 mục đối chiếu input, công thức, số tài chính, PDF và các tài liệu đều đạt. Log chi tiết nằm trong qa/. Các kiểm tra này xác nhận file và phép tính, không chứng minh containment thực tế đạt 80%.

Tôi cập nhật tỷ giá kế hoạch 26.000 thành giá USD bán ra 26.100 VND từ XML Vietcombank. Khi mở VLearn để kiểm tra trạng thái, trang đã hiển thị đúng link repo và mã BN-261008-39238, nộp đúng hạn. Tôi chỉ xác nhận trạng thái có sẵn, không ghi mình đã bấm nộp trong lượt kiểm tra đó.

## Phần tôi còn cần kiểm chứng

Tôi đã chuẩn bị eval 50 ca, Procurement Q&A và kế hoạch pilot hai SME, có nội dung và deadline. Quality eval, thời gian tiết kiệm, khách trả tiền và retention vẫn chưa có dữ liệu thực tế.

Bài tham khảo hoàn chỉnh có phần trao đổi người lạ được xây dựng để thấy cách hỏi, ghi phản hồi và sửa One-Pager. Tôi giữ phần đó trong bài tham khảo, không dùng thay kết quả human test của hồ sơ kiểm tra. Với người đọc thật, tôi sẽ ghi lại ba câu trả lời và số câu họ hỏi lại trước khi đánh dấu đạt.

Sau bài này, tôi thấy AI giúp nhất ở chỗ kiểm đơn vị, thử kịch bản và chỉ ra chỗ lập luận chưa chắc. Tôi vẫn phải hiểu vì sao giữ một giả định và biết số nào cần đi đo. Bảng có margin đẹp chưa đủ; tôi cần giải thích được lúc nào chi phí tăng và vì sao khách chịu trả tiền.
