# Track1_Day22_2A202602385_DuongThiHongVien

**Học viên:** Dương Thị Hồng Viên - **MSSV:** 2A202602385.

Bài Ngày 6 trên VLearn có tên Day22-AI-Product-GTM-Slide. Tôi kế thừa AI Notes: Personal Learning Notes, Option B từ bài Day18-19. Đây là bài monetization/GTM, không nâng cấp prototype thành model live. Hồ sơ cũ và đóng góp của Minh/Viên được giữ nguyên.

## Bài làm

- [Excel model](output/DuongThiHongVien_Day22_model.xlsx): đủ 7 sheet của mẫu, gồm 5 tab làm bài, README và benchmark lịch sử. Nội dung chỉ thay trong ô vàng; giữ 93 công thức. Chỉnh wrap/chiều cao cục bộ để chữ đọc được.
- [Monetization One-Pager](output/DuongThiHongVien_Day22_onepager.pdf): một trang, có số, lý do, ô nguồn, pain, plan và evidence.
- [Đối chiếu đầy đủ yêu cầu và sáu mốc Pass/Fail](requirements-audit.md).
- [AI Log](ai-log.md) và [Reflection](reflection.md): ngôi thứ nhất, có nguồn và giới hạn hoạt động thực tế.
- [Hai lượt critique](critique-log.md): prompt tiếng Anh, phản hồi tiếng Việt, bảng quyết định.
- [Nguồn và giả định](assumptions-and-sources.md): giá API hiện hành, rationale từng input và chi phí chưa đo.
- [Eval plan](evidence/eval-plan.md), [Procurement Q&A](evidence/procurement-qa.md), [Pilot plan](evidence/pilot-plan.md), [Test người lạ](evidence/stranger-test.md).

## Quyết định của tôi

Tôi thử Usage $0,40/bản nháp hoàn thành, loại lỗi/retry/trùng khỏi billing. Cap 400 job/khách/tháng là kế hoạch, không có trong code hiện tại. Buyer SME đào tạo và budget vận hành là giả thuyết cần phỏng vấn. Tôi chọn PLG trong 90 ngày, chưa có quyền tích hợp VLearn và chưa có partner.

Baseline giả định 1000 job bắt đầu,80%completed. Direct cost $0,0681625, gồm overhead $0,1306625; GM trực tiếp82,959375%, biên sauoverhead67,334375%. Ngưỡng GM60% trực tiếp34,08125%, gồmoverhead65,33125%. $160 ARPU chỉ kịch bản dùng đủ400job, không doanhthuđãthu. Không sử dụng kết quả usability cũ làm tỷ lệ model đạt.

## Kiểm tra thực tế

Xem [verification.json](qa/verification.json), [engine-stress.json](qa/engine-stress.json), [reopen-engine-tests.json](qa/reopen-engine-tests.json). Đã kiểm tra số liệu chính, từng dòng sensitivity50-95%, scores20/13/10, A/B, batch, khôngcache, overhead2x, volume1/2, input0/trống. File cuối được mở lại bằng artifact-tool trên copy trong bộ nhớ, không sửa file giao. Không chạy Microsoft Excel desktop. PDF một trang được render và kiểm tra trực quan.

Mẫu có guard trả0 khi denominator không hợp lệ; đây là chi phí/CAC undefined, không phải0 thật. Công thức được giữ theo đề, giới hạn được ghi tronglog. Không có liveeval, khách trảphí hay kết quả người lạ.

## Phần chờ thực hiện và nộp bài

Test người lạ: Viên dự kiến10/10/2026, chưa chạy, số câu hỏi lại đểtrống. Eval22/10, xác minhQ&A15/10, pilotreport06/11 đều là kế hoạch. Không tự đánh giá bài100điểm hoặc tuyênbố đạt rubric đãchấm.

Repo cần nộp tên `Track1_Day22_2A202602385_DuongThiHongVien`. Repo GitHub: https://github.com/hviennduongne/Track1_Day22_2A202602385_DuongThiHongVien. VLearn đã hiển thị bài nộp BN-261008-39238 lúc15:38:09 ngày08/10/2026, đúng linkrepo, Nộp đúng hạn; lượt này chỉ xác nhận trạng thái đã có. Test người lạ vẫn chưa thực hiện. Khi xuất gói nộp, giữhai filemodel/onepager,log,reflection,nguồn,critique,evidence vàQA; không đưa node_modules hoặc template chưa điền làm bài chính.

## Cách tái kiểm tra

Node và Python dùng runtime bundled của Codex. `build_model.mjs` dùng artifact-tool; `finalize.py` giữ nguyên packageOOXML nguồn và lấy các input/cache đã được artifact-tool tính, tạoPDF và kiểm tra; openpyxl chỉ đọc/so sánh, không authorExcel. `verify_model.mjs` kiểm tra copy trong bộ nhớ. `prepare_layout.py` chỉ tạo cấu hình chiều cao, không chỉnhfileExcel.

Lệnh đã chạy trong thư mục repo:

```powershell
& 'C:/Users/ACER/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/python.exe' prepare_layout.py
& 'C:/Users/ACER/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node.exe' build_model.mjs
& 'C:/Users/ACER/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/python.exe' finalize.py
& 'C:/Users/ACER/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node.exe' verify_model.mjs
```

Trong repo Day22 độc lập này, chạy các builder từ thư mục gốc. Cần liên kết node_modules tới runtime bundled có @oai/artifact-tool trước khi chạy Node.




## Bản hoàn thiện
Xem [Channel Evidence](evidence/channel-evidence.md), [truy số One-Pager](evidence/number-traceability.md) và [trạng thái nộp đã xác nhận](submission-status.md). Benchmark CPO ICONIQ2026 đã được bổ sung; file cuối đã tính lại và kiểm tra. Live eval/pilot là kế hoạch đúng trạng thái prototype. Human stranger test cần kết quả thực tế, chưa thay bằng AI critique.

[Eval Results hiện trạng](evidence/eval-results.md) tách kiểm tra mô hình tài chính đã chạy khỏi quality eval chưa chạy.
