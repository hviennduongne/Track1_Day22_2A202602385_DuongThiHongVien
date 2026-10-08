# Nguồn và giả định - AI Notes, Ngày 6 / Day22

Dương Thị Hồng Viên - 2A202602385. Ngày kiểm tra nguồn: 08/10/2026. Mô hình bằng USD. Đây là kế hoạch thương mại cho prototype, không phải kết quả bán hàng. Các số không đến từ nguồn giá bên dưới đều là giả định của bài thực hành.

## Nguồn đã đọc

| Nguồn | Dùng ở đâu | Nội dung đã kiểm tra |
|---|---|---|
| [Claude pricing](https://platform.claude.com/docs/en/about-claude/pricing) | Cost B15:B18 | Haiku4.5 list/1Mtoken: input1, output5, write5phút1,25, read0,10 USD. Chọn kịch bản này để tính, chưa thử chất lượng model. |
| [Claude prompt caching](https://platform.claude.com/docs/en/build-with-claude/prompt-caching) | Cost B19:B22/B30 | Haiku4.5 tối thiểu4096token; TTL mặc định5phút. Cache cần cùng prefix và đọc trong TTL. Batch discount50% riêng API, không chọn cho realtime. |
| [Notion credits](https://www.notion.com/help/what-are-notion-credits) | Metric A26:D26 | Custom Agents add-on10USD/1000credits trả tháng,13USD/1000trả năm. Credits không bằng một note; không quy đổi trực tiếp. |
| [Otter pricing](https://otter.ai/pricing) | Metric A27:D27 | Pro16,99USD/user/tháng trả tháng,8,33 trả năm, quota1200phút recording. Không dùng giảm50% dành thẻIndia. |
| [Mem pricing](https://get.mem.ai/pricing) | Chỉ trong critique | Có sản phẩm thật nhưng giá hiện hành chưa xác minh đủ: UNKNOWN, không đưa vào hai benchmark Excel. |
| [Lab VLearn](https://vlearn.dev/course/k04-l34-p2-t1/reader?day=D12&part=lab-ff5b3a59-s06-doc) | Yêu cầu nộp/rubric | Đã đọc6phần. Ngày6 có tên slideDay22; không đổi thànhDay12 theo mãURL. |
| [Template Drive](https://drive.google.com/drive/folders/1lAN_fxwtTr1fOHm1SoPR7OH3F0Z8D5Ya) | templates/model.xlsx,onepager.docx | Mẫu gốc được giữ nguyên. TitleDAY28 trong Excel là nội dung có sẵn, không sửa ô ngoài phạm vi. |
| ../README.md, ../prototype/option-b.js, ../group-feedback-synthesis.md | Hiện trạng sản phẩm | OptionB canned text, không gọi model; Huy/Vũ chọnB, Dũng chọnC theo hồ sơ cũ. Đây là usability, không phải WTP, chất lượngLLM hay containment. Không chạy lại phỏng vấn trong lần này. |

Giá và thông tin trong tab6_Benchmarks của mẫu là bảng lịch sử, có thể lỗi thời. Chỉ ô vàngB3 cập nhật ngày/đường dẫn ledger. Không sử dụng các dòng lịch sử không được kiểm tra làm báo giá hiện hành. FX cập nhật từ XML chính thức Vietcombank: USD bán ra 26.100 VND, nguồn ghi 08/10/2026 22:46:03. Chọn bán ra vì dự kiến mua USD để thanh toán API. [Nguồn XML](https://portal.vietcombank.com.vn/Usercontrols/TVPortal.TyGia/pXML.aspx).

## Định nghĩa job và phạm vi

Một job là một nháp cá nhân cho một học viên/một bài học, có ý chính, chỗ chưa hiểu, bài tập tiếp theo và nguồn hợp lệ. Completed cần rubric chất lượng nguồn, không chỉ JSON hợp lệ. Metering và xác nhận completed chưa triển khai trong prototype. Lỗi, trống, trùngjobID và retry cùngjob không tính tiền. Sửa/undo miễn phí; tạo lại cần xác nhận lượt tính phí mới. Không bán điểm số hay kiến thức đã học được.

B9 là số job được bắt đầu lần đầu; retry cùngjob không tăng mẫu số này, chi phí thêm ởB46. Mỗi lần xử lý giả định có3lượtLLM nội bộ: dựng nháp, kiểm nguồn, sửa. Prefix lesson5000token giữ nguyên; phần mức hiểu táchfresh. Phải đo usage thật để biết chi phí có khớp. Biến thểA khách tự kiểm/sửa; QA của bên cung cấp vẫn trả tiền. Biến thểB trong sensitivity chỉ đối chiếu chi phí theo đúng mẫu: manual escalation thêm tiền nhưng mẫu số vẫn làjobAIcompleted. Nếu bán managed-service tính cả job người hoàn thành, cần một mô hình mẫu số khác trước quyết định.

## Các input chi phí

| Ô 1_Cost_Job | Giá trị | Lý do/phạm vi |
|---|---|---|
| B5/B6 | job nháp, A | Prototype giúp viết nháp, không giao dịch vụ thay giảng viên. |
| B9/B10 | 1000/80% | Kịch bản2SME x500job bắt đầu,800completed tổng.80% là mục tiêu/ước tính; chưa eval. |
| B15:B18 | 1/5/1,25/0,10 | Giá list chính thức nêu trên, không promo. |
| B19:B22 | 3/5000/1000/800 | Giả định pipeline; có prefix đủcache nhưng cachehit chưa đo. Không padding chỉ để tiết kiệm. |
| B30 | 0 | Người dùng đang chờ nháp; chưa có số đo latency/SLA. |
| B34:B37/B42 | 0 | Text-only, chưa làm STT/TTS/telephony. Transcript được cung cấp có phép; không coi transcription là miễn phí nếu thêm về sau. |
| B41 | 0,008/firstjob | Ngân sách variable: embedding/vector0,002; storage/log/egress0,003; server0,003. Allocation có dự phòng retry hạ tầng; chưa hóa đơn, chưa chứng minh hosting tối thiểu. |
| B46 | 8% | Ước tính chưa đo, trong5-10% gợi ýlab. PhầnLLM cần thêm ngân sách retry; không phải8% trong dữ liệu đã test. |
| B50:B53 | $9/h;5%;3phút;6phút | QA50ca/tháng mất150phút=$22,50. Mức công và sốphút đều giả định.6phút dùng cho sensitivityB, baselineA không cộng escalation của khách. |
| B59 | $50/tháng | Chi phí tăng thêm thử nghiệm: R&D/eval định kỳ30 + hỗ trợ/vận hành20. Không gồm lương toàn đội, chi phí phát triển ban đầu hay toàn bộ startup. Không tuyên bố lợi nhuận ròng công ty. |
| B68 | 26100 VND/USD | Vietcombank USD bán ra ngày 08/10/2026, timestamp nguồn 22:46:03. Các quyết định kinh tế trong bài tính USD. |

Phí thanh toán chưa có provider/báo giá, thuế chưa có cấu trúc pháp nhân; không tính vào COGS theo một giá tự bịa. QA có sensitivity3%doanhthu cho phí giả định: full margin64,3344% thay67,3344%. Nếu thương mại hóa phải cộng actualpaymentfee, support ngoài dự toán và trả phí hạ tầng tối thiểu. Chi phí gồm overhead trong bài nghĩa là gồm overhead50USD nêu trên, không phải fully loaded mọi chi phí công ty.

## Pricing và buyer

| Ô 2_Pricing | Giá trị | Giả định và quyết định |
|---|---|---|
| B6 | 3 | Hệ số an toàn theo bài; directfloor0,2044875. Fullfloor=3*CostB67=0,3919875, giá0,40 cũng vượt. |
| B10/B11 | $800/400job | 50học viên x8bài/tháng; tiết kiệm20phút/job x$6/h x400=$800. Không suy từ15-20phút tìm lạivideo trong note cũ thành thời gian nhân viên tạo nháp đã đo. Buyer và workflow đào tạoSME mới là giả thuyết. |
| B14 | $1000/tháng | Salaryequivalent minh họa, chưa khảo sát lương; không coi thay cả người. Neo quyết định theo25%giá trị B13=$0,50/job. |
| B19 | $0,40/job | Captures20%giá trị giả định, Usage chưa triển khai billing. Cap400/tháng, pay-as-you-go không minimum. Vì vậy$160 là doanhthu khi dùngđủcap, khôngsubscription bảo đảm. |
| B32 | 60% | Mục tiêu theo bài. B33=34,08125% chỉ trực tiếp; thêmoverhead ngưỡng65,33125%. |

Không đánh đồng chi phí/nháp hoàn thành với lượt gọiAPI. Direct54,53/800=0,0681625; gồmoverhead104,53/800=0,1306625. GMdirect82,959375%; contributionmargin sauoverhead67,334375%. Modelgãy fullGM<50% nếu completion<52,265% hoặc overhead>105,47USD ở80%completion/1000attempt. Khi không có completed, cost/job undefined dù mẫu trả0.

## Metric và channel

Attribution B5:B9=0/0/0/0/1: mới có định nghĩa tính phí bằng lời, chưa log/eval/khách đồngý. AutonomyB13:B17=0toàn bộ: currentcanned không phải agent. Threshold7/10 là quyước bài. Tôi chọnUsage cólýdo thị trường trongB31:B34, không khẳngđịnh vượt gợiý bằng chứng đã đo.

| Ô 4_Channel_Fit | Giá trị | Lý do |
|---|---|---|
| B5/B7 | $160/SMB | Full400job/customer; chưa có paid.2customer/1000attempt làbasecase, không forecast đã bán. |
| B13/B14 | $75000/250ngày | Quota hoạch định=5xAEfullyloaded$15000/năm (giả định địa phương, chưa benchmark lương). ACV1920=>39,0625deal/năm,0,15625/day; công suất không loạiSales. |
| B20/B21 | $1000/20% | CPO=50giờ/opportunity x$15 +250materials/travel. CPO vàwinrate chỉ kịch bản conservative, không lấy làm benchmark thịtrường. CAC5000,3,13908xCACbudget1592,82. |
| B28:D33 | PLG20/Sales13/Partner10 tổng | Đánh giá chủ quan6tiêu chí; PLG chỉ2 điểm tiếp cận integration vì chưa cóquyền. Không phải kết quả khảo sát buyer. |
| B38:B42 | PLG; no partner | Thử tự dùng/tự mua trong90ngày. Chưa quyền nhúngVLearn, không ngầm chọnPartner hay gọiVLearn đối tác. |

CACbudget=ARPU*directGM*12tháng theo mẫu. Trừoverhead trước khi tính thì budget=$1292,82; gapSales=3,867x, không tốt hơn. PLG giả định chi acquisition200/5paid=$40, không CACobserved. CPO giảm50giờ xuống10giờ =>400/20%=CAC2000, vẫn>1592,82; nếuCPO<318,564 thìSales mới qua affordability ởwin20%. Không kết luậnSales vĩnhviễn khôngkhảthi. Không córetention nên chưa tínhLTV:CAC.

Tất cả số khách, giờpain21:30, ngàydeadline,50evalcases,2tuầnpilot,goals80%/60% vàcap đều là kế hoạch củaViên, gắn ô5_90Day_Plan. Chi tiết bảngmetric-score-rationale, plan và evidence nằm trongREADME/evidence. Không giả định Minh đã nhận phân côngmới. Không cóhumanstrangertest trong lần này.


## Bổ sung nguồn Channel Evidence
Đã đọc và xem trang22 báo cáo gốc ICONIQ State of GTM 2026: CPO SMB average $6300, năm2026, khảo sát GTM executives N=143 toàn mẫu. URL và phạm vi trong evidence/channel-evidence.md. Không dùng $5200 của2025 làm2026. Channel B42 ghi benchmark, CPO1000 tạiB20 vẫn là giả định địa phương để giữ phép đối chiếu. Plan B14 ghi20phút/$6h; Plan C15 ghi3attempt. Xem evidence/number-traceability.md cho toàn bộ số One-Pager.
