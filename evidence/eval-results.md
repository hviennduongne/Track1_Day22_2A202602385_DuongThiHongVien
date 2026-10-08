# Eval Results - hiện trạng và kiểm tra đã chạy

**Dương Thị Hồng Viên - 2A202602385, 08/10/2026.** Tôi tách kết quả kiểm tra financial model khỏi kết quả chất lượng AI. Các phép tính chạy thành công không chứng minh model tự hoàn thành job.

| Phép kiểm tra | Kết quả thực tế | Ý nghĩa |
|---|---|---|
| Prototype Option B | Code có CANNED output, không gọi model/API | Chưa đo hallucination, chất lượng model, autonomy hoặc token thật |
| Financial model baseline | Direct cost $0,0681625; gồm overhead $0,1306625 | Kịch bản 1000 first jobs, 800 completed giả định |
| Containment sensitivity | Đã kiểm tra 50/60/70/80/90/95% và tính độc lập | Đây là thay input kinh tế, không phải các tỷ lệ model đã đạt |
| Stress A/B, batch, overhead2x | Chạy qua artifact-tool, khớp phép tính độc lập | Tác động chính sách HITL/cache/volume lên cost |
| Mở lại file cuối | Baseline, no-cache, half-volume cập nhật đúng | Kiểm tra file giao, không chỉ file export trung gian |
| Invalid inputs | Zero win rate/blank completion làm mẫu trả0 | Không dùng0 đó làm CAC hoặc cost thật; input không hợp lệ |
| PDF | Một trang, đã render và xem | Xác nhận layout, không thay stranger test |
| Live AI quality eval | **Chưa chạy; completed/attempt NA** | Không có API run/quality ground truth, không điền80% thành observed |

Nguồn machine-readable: qa/verification.json, qa/engine-stress.json, qa/reopen-engine-tests.json. Tôi đã giữ nguyên công thức mẫu và chỉ thay input vàng, wrap text và chiều cao cục bộ.

## So ngưỡng với trạng thái eval

Tại giá $0,40 và overhead $50/tháng, ngưỡng containment cho margin sau overhead 60% là **65,33125%**. Containment giả định80% cao hơn ngưỡng14,66875 điểm phần trăm. Containment quan sát **NA**, nên chưa kết luận sản phẩm thực tế vượt ngưỡng. Nếu80% không đạt, tôi phải tính lại theo tỷ lệ và chi phí thật; 60% chỉ cho margin sau overhead56,4458%, thấp hơn mục tiêu.

Kế hoạch quality eval50ca, rubric, owner và deadline22/10/2026 nằm trong eval-plan.md. Live pilot chỉ bắt đầu sau khi có model, quyền nguồn, kiểm soát billing và reviewer. Chưa có kết quả thử nghiệm tương lai trong tài liệu này.
