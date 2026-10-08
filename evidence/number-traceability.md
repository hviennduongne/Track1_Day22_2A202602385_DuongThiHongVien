# Truy số One-Pager về Excel

Cost = `1_Cost_Job`, Pricing = `2_Pricing`, Metric = `3_Value_Metric`, Channel = `4_Channel_Fit`, Plan = `5_90Day_Plan`. Công thức dưới đây giải thích số làm tròn trên một trang; không phải ô tính mới thay công thức mẫu.

| Số hoặc nhóm số trên PDF | Ô nguồn hoặc phép tính |
|---|---|
| Attribution 1/10, Autonomy 0/10 | Metric B10/B18, cộng 5 câu với mức tối đa 2 điểm/câu |
| $0,40; 400 completed; 3 attempt, 2 retry | Pricing B19/B11; Plan C15 ghi kiểm soát đề xuất |
| Direct cost $0,06816; floor 3x $0,20449 | Cost B66, Pricing B5/B6/B7 |
| Direct GM 82,96% | Pricing B21 |
| Cost gồm overhead $0,13066; margin 67,33% | Cost B67; `1-Cost!B67/Pricing!B19` |
| Containment 80%; direct ngưỡng GM60% 34,08% | Cost B10, Pricing B32/B33 |
| Ngưỡng gồm overhead 65,33% | `(Cost!B65/Cost!B9)/(Pricing!B19*(1-Pricing!B32))` |
| $800, 20 phút, $6/giờ, 400; thu20% giá trị | Pricing B10/B11; driver 20/$6 ghi Plan B14; `Pricing!B19/(Pricing!B10/Pricing!B11)` |
| Trần25% $0,50, salary $1000 | Pricing B12:B14 |
| Gãy margin50% khi completion52,265% | `(Cost!B65/Cost!B9)/(Pricing!B19*0.5)`; 50% là ngưỡng kiểm tra nêu trong lab |
| Overhead2x; margin51,71% | `1-((Cost!B62+Cost!B63+2*Cost!B64)/(Cost!B9*Cost!B10))/Pricing!B19` |
| Notion $10/1000credits; Otter $16,99/user/tháng | Metric C26/C27, URL D26/D27; ngày kiểm tra trong hai ô |
| ARPU160; ACV1920; 12 tháng; CAC1592,82 | Channel B5/B8/B9/B10; ARPU kịch bản đủ400job |
| Quota75000; 0,15625deal/ngày | Channel B13/B14/B16 |
| CPO1000, win20%, CAC5000, gap3,14x | Channel B20:B23 |
| CPO benchmark6300, CAC31500, gap19,78x | Channel B42 ghi nguồn benchmark; `/Channel!B21`, rồi `/Channel!B9` |
| 21:30, giờ pain | Plan B5, giả thuyết chứ không phải giờ người dùng đã quan sát |
| Acquisition200/5paid=40 | Plan C16; chưa cộng công thực tế, chưa quan sát |
| Volume một nửa, full margin51,71% | `(Cost!B9/2)` attempt với containment giữ nguyên; overhead giữ50. Trong kịch bản này bằng overhead2x per job |
| Tháng1, 2-3, 4+; 2/5/10 SME; 50 ca | Plan B12:D18 |
| Gate80%, GM60% | Plan C17/D17, Cost B10/Pricing B32; là mục tiêu |
| Eval22/10, Q&A15/10, pilot06/11, 2 SME, 2 tuần | Plan B23:D25; deadlines, chưa result |
| Stranger10/10, 2 phút, tối đa3 câu hỏi lại | Plan B29:B32; hai giới hạn do đề bài quy định, chưa kết quả |

Các input thương mại vẫn cần đo. Truy được nguồn của một giả định không biến giả định thành số thực tế. Chi phí phần USD đã tính cả chi phí job thất bại trong numerator; số completed dùng làm denominator.
