# Bài tham khảo Day22 - AI Notes

**Dương Thị Hồng Viên - MSSV 2A202602385**

Bài viết dùng ngôi học viên. Các số tài chính lấy từ Excel đã kiểm tra; nhân vật và lời trao đổi ở phần người lạ được xây dựng cho bài tham khảo, không phải dữ liệu phỏng vấn thực tế.

## Tôi bán gì và ai trả tiền?

Tôi chọn AI Notes từ prototype ghi chú cá nhân đã làm trước đó. Sau một bài học, người học chọn mức hiểu của mình và nhận một nháp gồm ý chính, phần chưa hiểu, bài tập tiếp theo và nguồn để kiểm tra. Một job là một nháp cho một người học trong một bài, đủ các phần này và đạt tiêu chí nguồn. Một lượt gọi API không phải một job.

Người dùng là học viên, nhưng người mua tôi muốn thử là chủ SME hoặc trưởng bộ phận đào tạo. Tôi định vị sản phẩm là giảm công chuẩn bị nháp ghi chú cho từng học viên, trả từ ngân sách vận hành đào tạo. Tôi chưa coi việc này là thay cả giảng viên. Nếu khách hiện không mất công chuẩn bị nháp, lập luận về tiết kiệm nhân công của tôi không đứng vững và phải đổi buyer hoặc neo giá.

## Tôi tính chi phí thế nào?

Tôi dùng một tháng có 1.000 job bắt đầu và containment 80%, tức 800 job hoàn thành. Đây là kịch bản để thiết kế giá; prototype hiện dùng nội dung dựng sẵn nên tôi chưa có tỷ lệ model đạt thực tế.

| Thành phần trong tháng | USD | Cách tôi tính |
|---|---:|---|
| API | 22,25 | Haiku 4.5, ba lượt xử lý/job; input mới, cache write/read và output đều có tính |
| Infra | 8,00 | 0,008/job bắt đầu; dự toán server, lưu trữ/log và vector |
| HITL | 22,50 | QA nội bộ 5% × 1.000 job × 3 phút × $9/giờ |
| Retry | 1,78 | 8% chi phí API; retry cùng job không được tính phí khách thêm |
| Overhead | 50,00 | Ngân sách tăng thêm cho eval/R&D và hỗ trợ thử nghiệm |
| Tổng | **104,53** | Chia cho **800 job hoàn thành** |

Cost/Job trực tiếp là **$0,0681625**. Tính thêm overhead trong phạm vi trên là **$0,1306625**. Tôi chọn HITL A: khách kiểm và sửa nháp cuối. Tuy vậy, tôi vẫn trả tiền QA nội bộ. Nếu tôi cam kết giao outcome rồi tự xử lý mọi ca escalate, phải chuyển sang B và tính lại chi phí người.

Tôi kiểm tra các kịch bản containment thấp, cache không hiệu quả, overhead tăng và volume giảm. Điểm tôi cần nhớ là overhead cố định không tự giảm khi ít khách. Cùng containment80%, nếu volume giảm một nửa, biên sau overhead chỉ còn khoảng51,71%.

## Tôi chọn giá và đơn vị thu tiền

Tôi thử **Usage: $0,40/nháp hoàn thành**, giới hạn400 completed job/khách/tháng. Lỗi, nháp trống, trùng jobID và retry không thu thêm. Sửa/undo miễn phí. Tạo lại một job mới cần khách đồng ý trước. Giới hạn ba attempt/job là kiểm soát tôi cần triển khai, chưa phải chức năng có sẵn.

Giá sàn3×direct cost là$0,2044875; nếu dùng cost gồm overhead thì sàn là$0,3919875. Giá$0,40 vượt cả hai, nhưng khoảng đệm so với sàn gồm overhead khá nhỏ.

Tôi giả định400 nháp tiết kiệm20 phút/nháp với công$6/giờ, tương đương$800/tháng. Thu$160 khi dùng đủ400 nháp là lấy20% giá trị này. Giá trần25% giá trị là$0,50/job. Tôi phải đo cả thời gian review; không được lấy thời gian AI chạy nhanh làm toàn bộ thời gian tiết kiệm.

Direct GM tại baseline là82,96%; biên sau overhead67,33%. Để biên sau overhead đạt60%, containment phải ít nhất65,33125%. Nếu containment dưới52,265%, biên này xuống dưới50%. Đây là ngưỡng kinh tế, chưa phải kết quả eval.

Attribution hiện1/10 và Autonomy0/10, nên gợi ý từ ma trận là Seat/Hybrid. Tôi vẫn muốn thử Usage vì tần suất học có thể khác nhau và đơn vị nháp dễ giải thích hơn số token. Đây là quyết định có điều kiện: cần metering, rubric completed và kiểm tra tranh chấp trước thu tiền. Tôi chưa đủ bằng chứng bán Outcome như “học viên hiểu bài”.

Hai đối chiếu tôi dùng là [Notion Custom Agents](https://www.notion.com/help/what-are-notion-credits), $10/1.000 credits trả tháng, và [Otter Pro](https://otter.ai/pricing), $16,99/user/tháng trả tháng; kiểm tra08/10/2026. Chúng giúp xem cách đóng gói ghi chú/automation, nhưng credit hay phút ghi âm không bằng một nháp của tôi.

## Tôi chỉ chọn PLG trong90 ngày

Pain Moment tôi muốn kiểm tra là21:30: học viên vừa học xong, đang ở VLearn và tab ghi chú, cần gom nội dung để làm lab hôm sau. Tôi muốn nháp xuất hiện ngay ở sidebar bài học. Hiện chưa có quyền/API tích hợp; phương án nhập transcript có phép là cách thử ban đầu và cũng là điểm ma sát phải đo.

Ở400job/khách/tháng, ARPU là$160, ACV kịch bản$1.920. CAC budget theo direct GM và12tháng payback là$1.592,82. Quota giả định$75.000/AE/năm cho khoảng39deal/năm, hay0,15625deal/ngày trong250ngày làm việc. Công suất chốt chưa loại Sales-Led.

Nhưng CPO giả định địa phương$1.000 với win20% cho CAC$5.000, bằng3,14×ngân sách. Đối chiếu [ICONIQ State of GTM2026](https://www.iconiq.com/growth/reports/state-of-go-to-market-2026), trang22, CPO SMB trung bình$6.300, giữ cùng win20% cho CAC$31.500, khoảng19,78×ngân sách. Benchmark B2B software quốc tế không đại diện chi phí SME Việt Nam; nó giúp tôi thấy rep-driven motion có thể quá đắt ở mức ARPU này.

Tôi thử PLG nhỏ trước. Nếu khách không tự nhập được nguồn hoặc không quay lại sau lần đầu, chọn PLG chỉ vì CAC trên giấy thấp là sai. Acquisition$200/5paid=$40 mới là mục tiêu, phải cộng công tuyển và onboarding thật khi đo.

## Kế hoạch của tôi

| Giai đoạn | Việc tôi làm | Mốc quyết định |
|---|---|---|
| Tháng1, đến07/11/2026 | Tiếp cận2SME, hỏi buyer/budget; chuẩn bị50ca eval; đo token, retry, QA và thời gian ghi chú; kiểm quyền nguồn | Học quy trình và xác minh giả định, chưa mở rộng |
| Tháng2–3, đến07/01/2027 | Mục tiêu5paid qua PLG; thử onboarding, meter, cap; ghi công acquisition và retention | Job đạt>=80%, biên sau overhead>=60%, CAC/payback tính từ dữ liệu thực |
| Tháng4+, xét08/01/2027 | Cân nhắc10SME trong một ngách gần | Chỉ mở khi qua gate và có bằng chứng quay lại |

Tôi phụ trách các mốc này. Các số khách và deadline là kế hoạch, chưa phải khách đã nhận lời.

Evidence Pack gồm: Eval Results với rubric nguồn/chất lượng và số liệu cost, deadline22/10; Procurement Q&A về quyền transcript, training/retention, sai nguồn, export/delete, deadline15/10; Pilot Report đo paired time, completed/failed, cost, CAC và paid/retention, deadline06/11. Nội dung chi tiết nằm trong thư mục evidence/. Tôi không hứa zero retention, SOC2 hoặc chức năng export/delete production khi chưa có bằng chứng.

## Tôi kiểm One-Pager bằng góc nhìn người chưa biết sản phẩm

Trong tình huống của bài tham khảo, tôi đưa One-Pager cho một bạn ngoài nhóm đọc2phút và không giải thích trước. Sau đó tôi hỏi đúng ba câu.

**Tôi hỏi:** “Bạn hiểu tôi bán gì, cho ai và tính tiền thế nào?”

**Bạn trả lời:** “Bạn bán nháp ghi chú cá nhân sau bài học. Học viên dùng, còn SME đào tạo trả tiền. Giá40cent cho một nháp hoàn thành, tối đa400nháp mỗi tháng. Một người có thể có nhiều nháp, nên không phải40cent cho một học viên.”

**Tôi hỏi:** “Mỗi đơn vị có lãi không, bạn nhìn số nào?”

**Bạn trả lời:** “Trong kịch bản bạn tính thì có. Thu40cent, cost có overhead khoảng13cent, biên khoảng67%. Nhưng nếu AI làm không xong nhiều hoặc volume thấp, kết luận có thể đổi. Tôi không hiểu82,96% với67,33% là hai loại biên gì.”

Tôi ghi đây là **câu hỏi lại thứ nhất**. Tôi giải thích82,96% trừ chi phí trực tiếp, còn67,33% có thêm overhead$50 của kịch bản. Tôi sửa nhãn trên bản tóm tắt thành “Direct GM” và “Biên sau overhead”, không dùng hai con số dưới cùng một tên.

**Tôi hỏi:** “Tôi tìm khách qua đâu và vì sao chọn kênh đó?”

**Bạn trả lời:** “Bạn chọn PLG: khách tự thử rồi tự mua. Vì mức tiền mỗi khách chưa đủ tốt để nuôi cách bán có nhân viên đi chốt. Bạn muốn xuất hiện trong VLearn lúc họ cần ghi chú. Sidebar đó đang chạy chưa?”

Tôi ghi đây là **câu hỏi lại thứ hai**. Tôi trả lời sidebar mới là đề xuất. Bản đầu thử bằng transcript có quyền sử dụng; nếu chuyển qua lại quá nhiều bước thì tôi phải sửa onboarding trước. Tôi bổ sung ngay cạnh điểm nhúng câu “chưa có quyền/API”, tránh để người đọc tưởng đã có hợp tác với VLearn.

Kết luận cho tình huống tham khảo: người đọc trả lời được ba nội dung, có2câu hỏi lại, dưới giới hạn3câu. Tôi vẫn sửa hai chỗ vì chúng có thể khiến khách hiểu quá mức hiện trạng sản phẩm. Tôi không dùng phần trao đổi này làm bằng chứng willingness-to-pay hay kết quả human test của repo.

## AI Log của tôi

Tôi bắt đầu từ định nghĩa job vì nếu chọn “một lần gọi API” thì mọi phép tính giá sau đó dễ lệch giá trị khách nhận. Tôi nhờ AI critique chi phí thiếu, kiểm phép chia và phản biện kênh. Sau đó tôi giữ HITL và retry, tách overhead, sửa mẫu số về completed và viết lại lý do Usage bằng cách diễn đạt của mình.

Trong quá trình xử lý file thực tế, có lỗi cache công thức khi import, một lượt tạo layout chưa chạy và cách so sánh conditional formatting chưa phù hợp. Những lỗi này đã sửa và kiểm tra lại. Bản cuối giữ93công thức mẫu; baseline/sensitivity và các phép mở lại file đã chạy. PDF được render, xem và xác nhận một trang. Tôi không coi các kiểm tra tài chính này là live eval chất lượng AI.

Phần khó nhất với tôi là phân biệt một con số có lý do với một con số đã đo. Tôi giải thích được vì sao chọn80%,20phút hay$6/giờ, nhưng giải thích không làm chúng thành dữ liệu thực tế. Khi dùng benchmark, tôi xem biểu đồ nguồn để tránh nhầm2025 với2026, rồi ghi rõ giới hạn phân khúc.

## Reflection

Nếu làm lại, tôi sẽ đo thời gian người dùng review nháp trước khi tin vào giá trị tiết kiệm20phút. Tôi cũng sẽ kiểm onboarding nhập nguồn trước khi nghĩ đến tăng số khách. Tôi thấy một One-Pager hữu ích phải nói được cả giá trị lẫn điều kiện làm mô hình gãy. Bản nháp tốt không chỉ làm người đọc khen ý tưởng; nó giúp họ hỏi đúng chỗ chưa biết để tôi đi đo tiếp.
