# Kiểm tra bản nộp cuối theo yêu cầu

Học viên Dương Thị Hồng Viên, 2A202602385. Tôi kiểm tra lại bản đã push, không thay các giả định thành kết quả quan sát.

| Tiêu chí | Đối chiếu cuối |
|---|---|
| Cost/Job Rigor | Đủ 5 thành phần; HITL A/B có giải thích; 800 completed làm mẫu số; retry8% và QA có tiền. Có sensitivity, breakeven direct/full, ngày nguồn API. Containment80% là ước tính được ghi rõ, chưa quality eval. |
| Value Metric | Usage có định nghĩa billing/error/retry, điểm Attribution/Autonomy, lý do lệch gợi ý và hai benchmark có link. Không bán Outcome khi chưa attribution. |
| Channel Evidence | Chọn PLG duy nhất. CAC budget/ACV/deal mỗi AE/ngày đúng. Có CPO giả định địa phương và đối chiếu ICONIQ2026; không đánh đồng với dữ liệu SME Việt Nam. |
| Pain và 90-Day Plan | Giờ + hoạt động + app; bề mặt sidebar cụ thể nhưng chưa được quyền tích hợp. Tháng1 học, tháng2-3 có mục tiêu, KPI/owner/deadline. |
| Evidence Pack | Eval plan/results hiện trạng, Procurement Q&A và Pilot plan có nội dung/giới hạn/deadline. Không tạo kết quả tương lai hoặc chứng nhận bảo mật giả. |
| Hồ sơ nộp | Đúng tên repo và tên hai file, Excel giữ mẫu 5 tab làm bài cùng hai tab hỗ trợ, PDF một trang. AI Log/Reflection ngôi thứ nhất; hai critique và quyết định; số trên PDF có bảng truy về ô. |
| Test người lạ | Chưa có phản hồi thực tế. Ô số câu hỏi lại để trống, trạng thái chưa test. Không thay bằng AI critique. |
| Nộp VLearn | Đã nhìn thấy đúng linkrepo và mãBN-261008-39238, nộp đúng hạn. Không gọi rating5/5 là điểm rubric. |

Đã chạy qa/check_submission.py: 334 kiểm tra về inputs, giữ công thức mẫu, cached results, headline tài chính, PDF và các tài liệu nộp đều PASS. SHA256 hai file cuối ghi trong qa/final-submission-check.json. Đã chạy lại verify_model.mjs trên bản trong bộ nhớ: baseline, no-cache, half-volume đều đúng. Các zero guard có sẵn của mẫu được ghi là input không hợp lệ, không dùng chứng minh chi phí bằng0.

File không thay từ lần render được xem gần nhất; PDF một trang, sheet Channel và Plan không bị cắt nội dung input. Không chạy Microsoft Excel desktop. Không tự chấm điểm rubric hoặc tuyên bố human test thành công.
