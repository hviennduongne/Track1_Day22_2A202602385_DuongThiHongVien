# Hai lượt phản biện AI trong lần làm bài này

Ngày 08/10/2026. Công cụ phản biện: Codex trong hội thoại hiện tại, không gọi một API/model riêng. Prompt tiếng Anh từ §4.7 của lab; phần số liệu được bổ sung bằng mô hình tôi đang làm. Đây là phản biện AI, không phải ý kiến khách hàng. Tôi dùng lời của mình trong Decision Note và log quyết định bên dưới.

## Lượt 1 - §4.7.1 Cost/Job Stress Test

### Prompt đã thực hiện

```text
Act as a ruthless CFO and a skeptical infrastructure engineer. Review the Cost/Job model for an AI product below. Do NOT rewrite my numbers. Perform a stress test:
1. MISSING COST CATEGORIES
List every cost category I have omitted or underestimated for THIS specific product type. Focus especially on:
- Retry and timeout costs
- Human-in-the-loop cost, and WHO actually bears it
- Observability, logging, eval running costs
- Egress, storage, vector DB growth over time
For each, estimate a realistic value at my stated volume.
2. DENOMINATOR CHECK
Am I dividing by jobs ATTEMPTED or jobs COMPLETED? Recalculate Cost/Job using completed jobs only. State the difference as a percentage.
3. TOKEN MATH AUDIT
Recompute my LLM cost per job from the token counts and list prices I provided. Flag any arithmetic error. Tell me how much prompt caching and batch pricing would save, and whether batch is viable for my latency requirement.
4. PRICE VOLATILITY
Which of the prices I used are promotional or likely to change within 6 months? Recompute Cost/Job at list price.
5. BREAKEVEN SENSITIVITY
Solve for the minimum success/containment rate required to hit 60% gross margin at my proposed price. Show the algebra. Then show Cost/Job and gross margin at success rates of 50%, 60%, 70%, 80%, 90%.
6. THE ONE NUMBER THAT KILLS ME
Identify the single input that, if wrong by 2x, breaks the model. Be direct and highly critical. Use my numbers, show your arithmetic. Do not be encouraging. Find the problems before my investors do.

AI Notes, text only, prototype uses canned responses, no live model eval.
1000 attempts/month, estimated completion 80%; Variant A: customer edits failed drafts, provider pays internal QA.
Haiku 4.5 list USD/1M: input1 output5 cache-write1.25 cache-read0.10.
3 sequential turns: 5000 identical cached prefix tokens,1000 fresh,800 output each; five-minute cache; batch disabled for interactive use.
Infra0.008/attempt; retry8% of LLM; QA5% of attempts,3minutes,$9/hour.
Overhead50/month. Escalation counterfactual6minutes at9/hour. Price0.40/completed draft.
Customer estimated400 delivered drafts/month; 2 customers at full allowance support the provider volume.
```

### Phản hồi AI bằng tiếng Việt

1. Mô hình có đủ năm nhóm nhưng số liệu vận hành chưa đo. Infra 0,008 USD/lượt chỉ là ngân sách: embedding/vector 0,002; storage/log/egress 0,003; server 0,003. Cần kiểm tra hóa đơn tối thiểu và tăng trưởng lưu trữ; chưa có bằng chứng mức này khả thi. QA tốn 22,50 USD/tháng, không được bỏ vì chọn A. Overhead 50 USD gồm R&D/eval định kỳ 30 và hỗ trợ/vận hành 20; không phải tổng chi phí nhân sự làm một startup. Đây là phạm vi chi phí tăng thêm của thử nghiệm nhỏ. Phí thanh toán và thuế chưa có nhà cung cấp cụ thể: dùng sensitivity phí 3% doanh thu trong QA, không khẳng định đó là báo giá.
2. Tổng trực tiếp 54,53 USD/800 = 0,0681625 USD/job; đầy đủ 104,53/800 = 0,1306625. Chia nhầm 1000 sẽ ra 0,05453 và 0,10453: thấp hơn kết quả đúng 20%; kết quả đúng cao hơn cách chia sai 25%.
3. Cache write 0,00625 + read 0,001 + fresh 0,003 + output 0,012 = 0,02225 USD/attempt. Không cache 0,03, giảm 25,8333%. Prefix 5000 vượt tối thiểu4096 của Haiku4.5, nhưng chỉ tiết kiệm nếu cùng prefix và đọc cache trong TTL; các số cache usage phải đo sau. Không được lấy ví dụ3000token trong slide làm bằng chứng cache được. Batch giảm riêng LLM50%, không giảm QA/infra; không chọn vì cần tương tác ngay, không có SLA đã đo.
4. Dùng giá list đã kiểm tra, không promo. Không thể dự đoán giá sáu tháng. Giá rẻ hơn của model khác không bảo đảm chất lượng ghi chú; cần eval trước đổi model. Giá API giữ nguyên nên baseline không đổi.
5. Gọi r là completion, v+q=0,05453. Direct cost =0,05453/r. GM>=60% khi 0,05453/r <=0,4*(1-0,6), tức r>=34,08125%. Thêm overhead50/1000attempt thì (0,05453+0,05)/r <=0,16, tức r>=65,33125%. Với 50/60/70/80/90%, direct cost lần lượt0,10906/0,0908833/0,0779/0,0681625/0,0605889; direct GM72,735/77,2792/80,525/82,9594/84,8528%. Full cost0,20906/0,1742167/0,1493286/0,1306625/0,1161444; full GM47,735/56,4458/62,6679/67,3344/70,9639%. Ô B33 của template chỉ là ngưỡng trực tiếp, không được gọi là ngưỡng sống còn đầy đủ.
6. Completion từ80% xuống40% làm full GM còn34,66875%, dưới50%. 80% chưa có eval nên đây là rủi ro chính. Với các driver khác giữ nguyên, full GM<50% khi r<52,265%; dưới60% khi r<65,33125%. Overhead tăng gấp đôi làm full GM51,7094%, dưới mục tiêu60% nhưng chưa dưới50%. Tại completion80%, full GM<50% khi overhead>105,47 USD/tháng. Lượng sử dụng cũng quan trọng: nếu chỉ500attempt với overhead50, kết quả full cost giống overhead tăng đôi. Không được coi 160 USD là doanh thu bảo đảm của gói pay-as-you-go.

### Quyết định của tôi

| Ý kiến | Tôi quyết định | Cách áp dụng |
|---|---|---|
| QA và retry phải khác0 | Accept | QA5%,3phút và retry8% đều là giả định có dòng chi phí riêng. |
| B33 chưa gồm overhead | Accept | One-Pager ghi cả34,08% và65,33%, không dùng chung nhãn. |
| Cache phải đủ4096token và đúngTTL | Accept | Dùng5000token làm kịch bản, kiểm tra không-cache; không khai đã có cachehit thật. |
| Batch rẻ hơn | Partial | Chạy sensitivity nhưng giữ batch0 cho trải nghiệm tương tác. |
| Đổi model rẻ nhất | Reject | Chưa eval chất lượng. Haiku4.5 chỉ là model giả định cho bài toán chi phí. |
| Phí thanh toán chưa có | Partial | Kiểm tra thêm3% doanh thu; chưa sửa công thức xám để thêm loại phí mới. Ghi phạm vi và rủi ro ngoài model. |
| ARPU và volume chưa chứng minh | Accept | Ghi160USD là full-utilization scenario; thêm test500attempt/ARPU80. |

## Lượt 2 - §4.7.2 Value Metric Challenger

### Prompt đã thực hiện

```text
My AI product:
- What it does: produce personalized lesson draft notes from authorized transcript, highlights and self-reported understanding.
- Definition of one job: one delivered learner/lesson draft with main ideas, unclear points,next practice and valid source references; failed,empty,duplicate and retry attempts are excluded; edits and undo are free.
- Target buyer: training lead or owner of a Vietnamese SME; end user is a learner. Buyer and willingness to pay are untested hypotheses.
- Whose budget it comes from: operations/headcount for first-pass note preparation, not replacement of an entire teacher.
- Autonomy today: canned prototype requires user confirmation and editing, no live agent and no escalation router.
- Attribution today: no model quality eval, billing job logs or customer agreement; historical usability sessions are not learning-outcome evidence. Score1/10 attribution,0/10 autonomy.
- Cost/Job: direct0.0681625,including overhead0.1306625 USD at80% estimated completion. Proposed price0.40 USD per delivered draft with400 monthly job cap; pay-as-you-go, not a guaranteed160 monthly subscription.
Task:
1. Recommend a value metric (Seat / Usage / Outcome / Hybrid) and explain the reasoning against the Attribution x Autonomy framework.
2. ATTACK my own preferred choice, which is Usage. Give me the three hardest questions a skeptical buyer or investor would ask about it. Include the refund/dispute scenario if I chose Outcome.
3. Name 3 REAL products that charge for a similar job. For each, state their value metric and current published price, and give the URL. If you are not confident a price is current, say so explicitly rather than guessing.
4. Describe the exact customer behaviour that would make my chosen metric lose money, and how a hybrid structure would cap that downside. Be specific about numbers. Flag any figure you are unsure about.
```

### Phản hồi AI bằng tiếng Việt

Framework hiện tại nghiêng Seat/Hybrid vì con người còn kiểm soát từng nháp và chưa có attribution. Usage có thể thử như đơn vị đầu ra kỹ thuật, nhưng chưa được gọi là kết quả học tập. Khách không nên trả phí cho output sai nguồn chỉ vì JSON hợp lệ; định nghĩa completed cần rubric nguồn, tính đầy đủ và ghi log tranh chấp. Ba câu khó: (1) ai xác nhận nháp có giá trị nếu người học vẫn phải viết lại? (2) hai lượt generate trùng một bài có tính hai lần và ai đồng ý? (3) khách dùng50lượt thay vì400 thì economics và retention ra sao? Nếu bán Outcome, điểm thi do nhiều yếu tố, hoàn tiền sẽ tranh chấp; hiện không đủ bằng chứng bán loại đó.

Benchmark đối chiếu ngày08/10/2026: Notion Custom Agents dùng credits trong workspace, mua thêm10USD/1000credits khi thanh toán tháng;13USD/1000khi năm, không phải0,01USD/ghi chú (https://www.notion.com/help/what-are-notion-credits). Otter Pro16,99USD/user/tháng, hoặc8,33USD/user/tháng khi trả năm, quota1200phút recording; không lấy promoIndia50% làm list (https://otter.ai/pricing). Mem có sản phẩm ghi chúAI thật (https://get.mem.ai/pricing), nhưng giá hiện hành không trích được chắc chắn trong lần đọc này: UNKNOWN, không đưa vào hai benchmark bắt buộc. Những sản phẩm này là workflow tương tự, không cùng exact job; giá không chứng minh buyer SME sẽ mua AI Notes.

Usage mất tiền nếu các lượt thử thất bại vẫn tốn API hoặc user regenerate miễn phí vô hạn. Với400job đã trả160USD nhưng10000attempt, giữ các driver bình quân sẽ chi trực tiếp545,30USD, chưa overhead; không có lời. Cap400completed chưa đủ, phải cap attempt và retry/job, ví dụ tối đa3attempt/job cho pilot, timeout/circuit-breaker và theo dõi actual cost. Tại1000attempt với chỉ400completed, full cost0,261325USD/job, margin34,66875%; tổng doanh thu160 - tổngcost104,53 =55,47USD, margin34,66875%. Hybrid có minimum để cover overhead và usage cho vượtquota sẽ bớt rủi ro, nhưng số minimum cần khảo sát buyer, không bịa một mức đã được chấp nhận. Seat cũng không miễn rủi ro token nếu không giới hạn sử dụng.

### Quyết định của tôi

| Ý kiến | Quyết định | Lý do/cách sửa |
|---|---|---|
| Framework gợi ý Seat/Hybrid | Partial | Tôi giữ Usage như giả thuyết thử nhỏ vì cùng số học viên nhưng tần suất học khác; ghi rõ lệch gợi ý, chưa triển khai metering. |
| Không bán Outcome học tập | Accept | Chỉ bán nháp có nguồn, không hứa tăng điểm hay thay giảng viên. |
| Cap chỉ completed chưa đủ | Accept | Pilot-plan bổ sung max3attempt/job, cap chi phí và consent cho regeneration. Đây là kiểm soát đề xuất, chưa có trong code. |
| Benchmark không cùng exactjob | Accept | Ghi khác biệt và đơn vị; không lấy phút/credit đổi trực tiếp thành giá note. |
| Đưa Mem giá phỏng đoán | Reject | UNKNOWN; chỉ dùng Notion/Otter có nguồn hiện hành trong Excel. |
| Chọn Hybrid ngay để cứu economics | Partial | Ghi phương án đổi nếu volume thấp; chưa coi mức minimum nào được khách chấp thuận. |

Tôi kiểm tra lại phản hồi bằng công thức trước khi đưa vào bài. Đoạn tính lãi cuối cùng dùng doanh thu 160 trừ chi phí 104,53 bằng 55,47 USD; các tình huống này đều là sensitivity của giả định, không phải kết quả pilot.
