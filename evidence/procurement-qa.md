# Procurement Q&A - bản dự thảo của tôi

Viên hoàn thiện trước15/10/2026; hiện chưa đủ evidence để approval một vendorproduction.

**Nếu AI viết sai thì sao?** Prototype hiện câu dựng sẵn và cho xemnguồn/sửa/undo. Bản live dự kiến kiểm nguồn/rubric, flag phần không đủ dữ liệu và không tính phí job sai nguồn; học viên xác nhận trước dùng. Chưa có phép đo hallucination. Cần eval-plan và incidentpolicy thực, không chỉ demo.

**Dữ liệu có được dùng train model không?** Prototype hiện không gọiAPI theo codeoption-b.js. Điều đó không chứng minh chính sách của một hệ thống live. Khi chọnvendor, tôi phải ghi endpoint, accounttype, retention/trainingterms chính thức và hợp đồng applicable, rồi xinconsent/đánh giá quyền dùngtranscript. Chưa triểnkhai model nên hiện chưa hứa “zero retention” hoặc “không train” cho production. Chưa có SOC2.

**Nếu dự án ngừng thì dữ liệu ở đâu?** Prototype ghi chú lưu trong phiên theo hồ sơcode; chưa phải kho backup lâu dài. Live cần exportMarkdown/JSON cósourceIDs, danh sách retention và deletion, thông báo ngừngdịchvụ, kiểm thử restore. Các chức năng đó là yêu cầu dự kiến, chưa nói đã có.

| IT/mua hàng hỏi | Tôi cần đưa bằng chứng gì | Hiện tại |
|---|---|---|
| Quyền transcript/PII? | consent,source license,data inventory | Chưa xác minh vớiSME/VLearn. |
| Dữ liệu gửi nơi nào? | dataflow,region,subprocessor list | Chưa chọn deployment/APIproduction. |
| Training/retention? | vendor terms + cấu hình account | Chưa xác minh applicableaccount. |
| Ai truy cập? | roles,access logs,leastprivilege test | Prototype chưa productionauth. |
| Xóa và xuất được? | export/delete testreport + retentiondays | Cần triểnkhai, chưa hứa SLA. |
| Model sai/injection? | holdouteval + failpath + incidentowner | Có plan50case, chưa result. |
| Availability/recovery? | backup/restoreproof,runbook,contacts | Chưa có. |
| Billing dispute? | job definition,ledger,duplicate/refundcases | Có định nghĩa, chưa meter. |
| Vendor shut down? | exit/exportplan + terminationnotice | Có dự thảo, chưa diễn tập. |
| Bằng chứng tiết kiệm? | pilot pairedtime + same-qualityreview | Chưa đo, $800 là assumption. |

Minimum pack tôi cần: dataflowv1 vàvendorterms, rubric+evaloutput, quyềntranscript/consent, access/deletion/exportdemo, incident/exitrunbook, pilotcostreport vàbillingrules. Ghi “chưa có” để người mua nhìn đúng rủi ro; không thêmbadge bảo mật giả.
