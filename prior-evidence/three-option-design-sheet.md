# Three-Option Design Sheet — Day 18

**Tên nhóm:** Nhóm 2 Người
**Case:** Case B — AI Notes: Personal Learning Notes (kế thừa Day17; bài gộp Day18–19)
**Thành viên:** Ninh Quang Minh (2A202602432), Dương Thị Hồng Viên (2A202602385)

Bản cập nhật trong repo Viên theo phân công đã xác nhận: Viên dựng A và test Huy; Minh dựng B/C và test Vũ/Dũng. Khi đồng bộ, hai repo dùng cùng bản tài liệu chung này.

| Option | Người phụ trách | Trạng thái |
|---|---|---|
| A | Dương Thị Hồng Viên | Đã build — `prototype/option-a.js` |
| B | Ninh Quang Minh | Đã build — `prototype/option-b.js` |
| C | Ninh Quang Minh | Đã build — `prototype/option-c.js` |

---

## Chặng 1 — Tổng hợp evidence

### 1.1 Evidence huddle

Nguồn Practice Note 1: `Track1_Day17_2A202602432_NinhQuangMinh/interview/notes.md` (nguồn Day17 do Minh bàn giao) (P01, phỏng vấn luyện tập do Ninh Quang Minh thực hiện). Nội dung cột "User đã thực sự làm/nói" được **chép nguyên văn** từ note, không viết lại.

| Practice Note | User đã thực sự làm/nói gì? | Điều nhóm đang diễn giải |
|---|---|---|
| 1 (P01 — Ninh Quang Minh) | - "Mở VLearn trên một tab, mở Notion trên tab khác."<br>- "Xem video, khi gặp điểm quan trọng thì pause video, chuyển sang Notion ghi lại."<br>- "Mỗi lần pause để ghi chú xong, quay lại video thì mất vài giây nhớ lại đang nghe đến đâu. Có lúc phải tua lại 10-15 giây."<br>- "Sau khi xem xong video, định tổ chức lại ghi chú cho gọn nhưng 'lúc đó mệt rồi, để mai rồi dọn' — và chưa quay lại dọn."<br>- "Ngày hôm sau cần nhớ lại một framework trong bài, tìm trong ghi chú không ra vì ghi chú không có heading rõ ràng. Phải mở lại video tua tìm, mất thêm khoảng 15-20 phút."<br>- "Có thử copy nội dung bài (phần text trên slide) paste vào ChatGPT nhờ tóm tắt, nhưng 'nó tóm tắt chung chung quá, không giống cái mình cần vì nó đâu biết mình hiểu chỗ nào rồi và chỗ nào chưa.'"<br>- "P01 nói có một số bài dễ, nghe qua là hiểu, không cần ghi." | - Ghi chú thủ công trong lúc học làm gãy mạch học (pause, chuyển tab, tua lại).<br>- Bước "dọn" ghi chú sau bài học bị bỏ, nên ghi chú khó dùng khi cần.<br>- Tóm tắt AI chung chung không thay được ghi chú vì không phản ánh mức hiểu của từng người — **đây là diễn giải của người phỏng vấn trên một câu nói của một người**.<br>- Pain chỉ xuất hiện với bài nhiều nội dung mới/khó, không phải mọi bài. |
| 2 (Dương Thị Hồng Viên) | Tìm từ khóa trong Docs → đọc ví dụ → xem slide → hỏi bạn về câu đã viết → sửa và làm tiếp. Khó áp dụng ví dụ sang bối cảnh mới, tốn khoảng 10 phút. | Người dùng tìm được ghi chú nhưng còn khó áp dụng kiến thức vào bài mới; có thể cần đối chiếu ví dụ và phản hồi khi sửa bài. |


**Thảo luận nhanh:** đối chiếu hai Practice Notes Day17 của Minh và Viên; giữ tách biệt dữ kiện quan sát và diễn giải.

| Câu hỏi | Trả lời hiện tại |
|---|---|
| Situation/behavior/workaround xuất hiện nhiều hơn một lần? | Cả hai đều quay lại nội dung học để tiếp tục công việc: P01 tua video khi ghi chú khó tra cứu; người dùng trong note Viên xem slide/ví dụ và hỏi bạn khi khó áp dụng. Rào cản cụ thể khác nhau, chưa đủ kết luận cùng một nguyên nhân. |
| Evidence mâu thuẫn hoặc bất ngờ? | (1) Không phải bài nào cũng cần ghi chú. (2) P01 đã thử AI (ChatGPT) nhưng không dùng được kết quả — tức "có AI tóm tắt" chưa đủ. |
| Điều gì vẫn chỉ là suy đoán? | Việc học viên khác cũng gặp barrier này; việc học viên sẽ tự đánh giá mức hiểu nếu được hỏi; việc ghi chú cá nhân hóa giúp ôn tốt hơn. |
| Hypothesis đủ cụ thể để xuất phát? | Có: tập trung ghi chú dùng lại để ôn/làm bài; P01 hỗ trợ trực tiếp, note Viên cho thấy khó khăn ở bước áp dụng — xem 1.2. |

### 1.2 Hypothesis Problem

Viết lại Problem Hypothesis Day 17 theo đúng khung `Khi [situation], [user] gặp khó khăn trong việc [job] vì [barrier], dẫn đến [consequence]`. Thay đổi so với Day 17: bổ sung barrier thứ hai ("tóm tắt AI không phản ánh mức hiểu") vì đây là workaround ngoài dự kiến ghi nhận ở P01.

> **Khi** vừa học xong một bài online có nhiều framework hoặc nội dung mới, **học viên** gặp khó khăn trong việc **tổng hợp điểm quan trọng và chỗ mình chưa hiểu thành một bản ghi chú dùng được để ôn hoặc làm bài**, **vì** ghi chú thủ công trong lúc học làm gãy mạch (pause, chuyển tab, tua lại) còn bản tóm tắt AI chung chung không phản ánh chỗ họ đã hiểu và chưa hiểu, **dẫn đến** ghi chú lộn xộn hoặc bị bỏ dở và phải mở lại video tua tìm khi cần.

| Thành phần | Nội dung |
|---|---|
| User | Học viên học online (video + slide) |
| Situation | Vừa học xong một bài có nhiều framework / nội dung mới |
| Job | Tổng hợp điểm quan trọng và chỗ chưa hiểu thành ghi chú dùng được |
| Barrier | Ghi thủ công làm gãy mạch; tóm tắt AI chung chung không theo mức hiểu cá nhân |
| Consequence | Ghi chú lộn xộn/bỏ dở; phải mở lại video tua tìm |

**Evidence ban đầu hỗ trợ giả thuyết:** P01 (Day 17): bài 20–30 phút mất khoảng 1 tiếng để vừa xem vừa ghi; ghi chú "bullet point lung tung, mấy cái screenshot xen giữa text"; hôm sau tìm framework không ra, mở lại video mất thêm khoảng 15–20 phút; đã thử ChatGPT và nhận xét "nó tóm tắt chung chung quá, không giống cái mình cần".

**Điều vẫn chưa được chứng minh:**
- Hai note thể hiện nhu cầu dùng lại nội dung học, nhưng chưa chứng minh rào cản giống nhau ở mọi học viên.
- Barrier "tóm tắt AI không theo mức hiểu" dựa trên **một câu nói** của P01.
- Học viên có sẵn sàng tự đánh giá mức hiểu sau bài học không.
- Học viên có thực sự quay lại dùng ghi chú để ôn không.
- Pain chỉ xảy ra với bài khó — chưa biết tần suất.

**GATE 1 tự kiểm:** đủ 5 thành tố; có hành vi Day17 từ P01 và note Viên; nêu rõ ẩn số về cá nhân hóa và dùng lại ghi chú.

---

## Chặng 2 — Chọn ba Solution Options

### 2.1 Mở lại Solution Parking Lot (Day 17)

| # | Hướng (nguyên văn Day 17) | AI / Không AI | Dùng cho |
|---|---|---|---|
| 1 | AI tự động tạo ghi chú có cấu trúc từ nội dung bài kết hợp dấu vết học tập | AI | Option C |
| 2 | Template ghi chú có sẵn cho từng loại bài, học viên chỉ cần điền vào | Không AI | Option A (khung theo phần bài) |
| 3 | Tính năng highlight + bookmark trên nền tảng, export ra markdown hoặc PDF | Không AI | Option A (dấu vết được xếp sẵn) |
| 4 | Chatbot ôn tập hỏi-đáp sau bài học để consolidate kiến thức | AI | Option B (biến thể: AI hỏi mức hiểu trước khi viết) |
| 5 | Nhóm học tập chia sẻ và bổ sung ghi chú cho nhau qua shared document | Không AI | Không dùng hôm nay (đổi sang user khác/situation khác) |

Không bổ sung hướng mới: pool hiện có đã có hướng user-led (#2, #3), co-create (#4) và AI-led (#1).

**Prompt Day 16 (Cursor teardown):** Nguyên lý adapt cho Option C là *chuyển vai trò user sang phê duyệt thay đổi do AI đề xuất, từng khối một* (Cursor Composer, memo Day 16 §1). Không copy feature; chỉ lấy nguyên lý "AI làm, user duyệt có nguồn đối chiếu".

### 2.2 Những thứ phải giữ nguyên (Comparison Contract)

| Thành phần | Quyết định chung cho A/B/C |
|---|---|
| Target user | Học viên học online (video + slide) cần dùng lại nội dung bài để ôn hoặc làm bài |
| Situation | Vừa học xong bài "Product Discovery Framework" (5 phần, 27:30). Trong lúc học đã để lại 4 dấu vết: 1 highlight, 2 "Chưa hiểu", 1 ghi chú ngắn |
| Task | "Ngày mai bạn làm lab về nội dung bài này. Hãy tạo bản ghi chú bạn sẽ dùng khi làm lab." |
| Desired outcome | Có bản ghi chú theo từng phần của bài, có điểm quan trọng và chỗ chưa hiểu được xử lý, user chấp nhận dùng — không cần mở lại video |
| Content/data fixture | `prototype/data.js`: nội dung bài, transcript rút gọn, 4 dấu vết. **Synthetic, do AI soạn** |

### 2.3 Những thứ được phép khác

| Thành phần | Option A — User viết, AI trả lời khi được hỏi | Option B — AI hỏi mức hiểu, rồi cùng viết | Option C — AI viết, user duyệt |
|---|---|---|---|
| Solution mechanism | Khung ghi chú theo phần bài, dấu vết của user được xếp sẵn vào từng phần. User tự viết. Nút "Hỏi AI" theo từng phần | AI hỏi user tự đánh giá mức hiểu từng phần, rồi tạo bản nháp: viết kỹ phần chưa nắm, viết gọn phần đã nắm | AI tự tạo toàn bộ bản ghi chú từ transcript + dấu vết, chia khối, kèm nguồn và cờ "không chắc" |
| User làm gì? | Viết nội dung; quyết định có hỏi AI và có chèn câu trả lời không | Trả lời/sửa mức hiểu 5 phần; chỉnh bản nháp; đổi mức hiểu từng phần nếu thấy chưa đúng | Đọc, Giữ / Sửa / Bỏ từng khối; kiểm tra nguồn |
| AI làm gì? | Không sinh nội dung trừ khi user hỏi; khi hỏi thì trả lời dựa trên transcript phần đó | Gợi ý sẵn mức hiểu cho phần có dấu "Chưa hiểu"; sinh nháp theo mức hiểu user chọn | Sinh toàn bộ nháp dựng sẵn; cho mở transcript theo phần; cảnh báo khi thiếu dấu vết để cá nhân hóa |
| Trigger | User bấm "Hỏi AI" | Kết thúc bài, AI hỏi trước (user có thể bỏ qua) | Kết thúc bài, AI tự chạy |
| Trade-off chính | Kiểm soát cao, đúng ý user; tốn công nhất, gần với cách ghi tay hiện tại | Cá nhân hóa theo mức hiểu; thêm một bước trả lời, và phụ thuộc vào việc user tự đánh giá đúng | Nhanh nhất; dễ "chung chung" như ChatGPT trong P01, có rủi ro sai mà user không duyệt kỹ |

### 2.4 Distance check

- **A khác B vì:** ở A user là người tạo nội dung và AI chỉ phản hồi khi được gọi; ở B AI là người tạo nội dung, nhưng chỉ sau khi hỏi và lấy mức hiểu của user làm đầu vào.
- **B khác C vì:** B hỏi user trước khi tạo (AI Ask), nên đầu vào cá nhân hóa đến từ lời user; C tạo ngay (AI Act) chỉ từ transcript và dấu vết, cá nhân hóa đến từ việc user duyệt sau.
- **A khác C vì:** A user viết và AI không chủ động; C AI viết toàn bộ và user chỉ duyệt — hai đầu đối lập về ai tạo nội dung và ai giữ quyết định ở từng câu.

Spectrum: **A** (user tạo) → **B** (cùng tạo, AI hỏi trước) → **C** (AI tạo, user duyệt).

**GATE 2 tự kiểm:** cùng user, situation, task, outcome, fixture ✔ · khác nhau ở cách chia việc user–AI và thời điểm AI hành động ✔.

---

## Chặng 3 — Human–AI Design pass

Critical interaction: **bước tạo bản ghi chú ngay sau khi học xong bài.**

### 3.1 Human–AI Decision Table

| Human–AI decision | Option A | Option B (đã build) | Option C |
|---|---|---|---|
| User làm gì? AI làm gì? | User viết ghi chú trong khung theo phần; AI trả lời khi user hỏi về một phần | User tự đánh giá mức hiểu 5 phần và sửa nháp; AI đề xuất mức hiểu cho phần có dấu "Chưa hiểu" và viết nháp theo mức hiểu | User duyệt từng khối; AI viết toàn bộ, gắn nguồn và cờ không chắc |
| AI Act / Ask / Don't Act? Vì sao? | **Don't Act** (trừ khi được hỏi). Vì ghi chú là tài liệu cá nhân; P01 không dùng được bản AI viết chung | **Ask** trước khi viết. Vì AI không biết user hiểu đến đâu (barrier từ P01); hỏi trực tiếp rẻ hơn đoán | **Act**, user review. Vì giảm công sức tối đa; chấp nhận rủi ro sai, đổi lại bằng nguồn + duyệt từng khối |
| User hiểu capability/limit bằng gì? | Dòng mô tả đầu màn hình: AI không tự viết, chỉ trả lời khi bấm "Hỏi AI", câu trả lời dựa trên transcript phần đó | Dòng mô tả đầu màn hình: AI sẽ viết kỹ phần bạn chọn "Chưa hiểu", viết gọn phần "Đã nắm"; AI chỉ dựa trên nội dung bài và câu trả lời của bạn | Dòng mô tả: AI đã tạo từ transcript + 4 dấu vết; khối có cờ ⚠ là chỗ AI không chắc |
| Evidence/uncertainty thể hiện thế nào? | Câu trả lời mẫu có timestamp và nút mở transcript phần đó; nội dung chèn được gắn nhãn `[AI:]`; nhãn phản hồi mẫu nhắc không trả lời mọi câu hỏi | Mức hiểu được AI đoán sẵn có nhãn "AI đoán từ dấu 'Chưa hiểu' lúc mm:ss — đổi nếu sai"; mỗi phần nháp có nút Transcript để xem trích đoạn và timestamp; phần dựa trên dấu vết được ghi rõ | Mỗi khối có nút Transcript kèm timestamp; thiếu dấu vết có cảnh báo tóm tắt chung; câu hỏi trong dấu vết có nhãn giải thích. Đây là giới hạn cá nhân hóa, không phải xác suất đúng |
| User kiểm soát và recovery thế nào? | Toàn quyền sửa/xóa; chèn hay bỏ câu trả lời AI; xóa dòng `[AI]` bất kỳ lúc nào | Đổi mức hiểu trước và sau khi tạo nháp; mỗi phần sửa trực tiếp; đổi mức hiểu sẽ viết lại phần đó và có **Hoàn tác**; quay lại bước hỏi; bỏ qua câu hỏi; về bối cảnh chung | Giữ / Sửa / Bỏ từng khối; chọn Giữ lại để khôi phục khối bị bỏ; cảnh báo khi lưu mà còn khối chưa duyệt; về bối cảnh chung |

**Nếu AI sai, user mất gì?**
- A: AI chỉ sai trong câu trả lời được hỏi; user thấy trước khi chèn → dễ phát hiện, ít hậu quả.
- B: AI có thể đoán sai mức hiểu (dấu "Chưa hiểu" ≠ chưa hiểu cả phần) → phần đó bị viết quá dài/quá ngắn; user thấy ngay ở nhãn "AI đoán" và ở độ dài phần nháp → dễ phát hiện. Nội dung giải thích sai → cần đối chiếu chip nguồn.
- C: AI có thể viết sai chi tiết (ví dụ số liệu nghe không rõ) → khó phát hiện nếu user không đọc nguồn; giảm bằng cờ ⚠.

### 3.2 Feedback and data check

| Câu hỏi | Option A | Option B | Option C |
|---|---|---|---|
| Feedback ảnh hưởng phiên hiện tại / lần sau / không ghi nhớ? | Chỉ phiên hiện tại | Mức hiểu user chọn chỉ dùng cho bản nháp phiên hiện tại; prototype **không ghi nhớ** sang lần sau | Chỉ phiên hiện tại |
| Dữ liệu dùng & cách rút quyền | Transcript bài + dấu vết user | Transcript bài + dấu vết user + mức hiểu tự đánh giá. User có thể bỏ qua câu hỏi (không cung cấp mức hiểu) | Transcript bài + dấu vết user |

Ghi chú: prototype chỉ giữ dữ liệu trong bộ nhớ trình duyệt; tải lại trang là xóa hết.

**GATE 3 tự kiểm:** mỗi option có user/AI làm gì ✔ · agency theo hậu quả khi sai ✔ · có đường kiểm soát/recovery ✔.

---

## Chặng 4 — Prototype annotation (đặt ngoài frame)

Annotation hiện trong prototype **chỉ khi mở với `?facilitator=1`**; tester mở link thường sẽ không thấy.

```
OPTION A (Dương Thị Hồng Viên — có code)
We expect the tester to: tự viết/sắp xếp ghi chú theo phần, chỉ hỏi AI ở chỗ muốn
Watch for: có bấm "Hỏi AI" không, ở phần nào; có chèn/xóa dòng [AI] không; chỗ dừng lâu
Do not explain: AI chỉ hoạt động khi được hỏi
```

```
OPTION B  (Ninh Quang Minh — đã build)
We expect the tester to: xem/sửa mức hiểu AI đoán sẵn, trả lời các phần còn lại, tạo nháp, chỉnh nháp rồi lưu
Watch for: có đọc và đổi mức hiểu AI đoán sẵn không; có nhận ra phần "Chưa hiểu" được viết kỹ hơn không;
           có đổi mức hiểu ở bước nháp / dùng Hoàn tác không; có mở trích đoạn nguồn không
Do not explain: vì sao 2 phần được chọn sẵn; mỗi mức hiểu tạo ra nội dung khác nhau thế nào
```

```
OPTION C (Ninh Quang Minh — có code)
We expect the tester to: duyệt từng khối, phát hiện khối ⚠ và sửa/bỏ
Watch for: có mở nguồn không; có đọc cờ ⚠ không; có lưu khi còn khối chưa duyệt không; có đổi Bỏ thành Giữ để khôi phục không
Do not explain: khối nào có cờ ⚠ hoặc chi tiết nào sai
```

---

## Chặng 5 — Chuẩn bị test

### 5.1 Relevant context (≤ 2 phút)

> "Bạn kể lại lần gần đây gặp khó khăn khi ghi chú hoặc tổng hợp một bài online để dùng lại nhé?"

Nếu tester chưa từng có context này: vẫn test để tìm interaction breakdown, nhưng không đưa ra value claim.

### 5.2 Outcome task (dùng cùng một câu cho A/B/C)

> "Bạn vừa học xong bài 'Product Discovery Framework' trên màn hình này. Ngày mai bạn cần dùng kiến thức bài này để làm lab. Trong tình huống này, hãy dùng từng phương án để có một bản ghi chú bạn sẽ mang theo khi làm lab."

Rà câu dẫn dắt: task không nhắc tên nút, không nhắc AI, không nói phương án nào tốt hơn.

### 5.3 Observation focus (7 hành vi)

1. First action
2. Hesitation (ghi điểm dừng trên 3 giây)
3. Evidence read/ignored (chip nguồn, nhãn "AI đoán", cờ ⚠)
4. Misunderstanding (kỳ vọng thao tác khác kết quả thực tế)
5. Help Needed (đếm lần hỏi người điều phối)
6. Correction / recovery
7. Option được chọn và trade-off

### 5.4 Luật facilitation & câu cứu hộ (tóm lược từ đề)

1. Tester tự điều khiển prototype. 2. Dùng cùng một task cho A/B/C. 3. Không narrate hoặc giải thích icon. 4. Không lấp im lặng. 5. Không hỏi "Bạn có thích không?". 6. Khi tester hỏi cách hoạt động, hỏi lại: "Theo bạn, nó nên hoạt động như thế nào?"

- "Bạn cứ nói to suy nghĩ của mình nhé."
- "Bạn sẽ làm gì tiếp theo?"
- "Theo bạn, nó nên hoạt động như thế nào?"

**Opening:** "Chúng mình đang thử ba cách thiết kế, không kiểm tra bạn. Không có câu trả lời đúng hoặc sai. Bạn hãy tự thao tác và nói to điều mình đang nghĩ; mình sẽ cố gắng không hướng dẫn."

**Compare:**
- "Trong tình huống này, bạn chọn A, B hay C? Vì sao?"
- "Bạn muốn tự làm phần nào và giao cho AI phần nào?"
- "Điều gì ở phương án đã chọn khiến bạn chưa thoải mái?"

**Thứ tự A/B/C:** đề xuất xoay vòng thứ tự giữa 3 tester (ví dụ A→B→C, B→C→A, C→A→B) để giảm ảnh hưởng của thứ tự. Ghi thứ tự thực tế vào từng phiếu; phiếu Huy ghi nhận C được mở đầu tiên.

## Đối chiếu với bản build hiện tại

- A dùng phản hồi dựng sẵn theo phần bài, không gọi API thật. Câu trả lời chỉ là minh họa, không hiểu mọi câu hỏi. Người dùng giữ quyền chèn, bỏ và hoàn tác.
- B có sửa trực tiếp, đổi mức hiểu và Hoàn tác khi viết lại. Chưa trả lời thì dùng mặc định “Hơi mơ hồ”, có thông báo; không tuyên bố tất cả câu trả lời bị bắt buộc.
- Reset xóa thay đổi; về bối cảnh chỉ đổi màn hình, giữ dữ liệu trong phiên.

### Timeline điều phối 20 phút

| Phút | Hoạt động |
|---|---|
| 0–2 | Mở đầu và một câu hỏi bối cảnh |
| 2–14 | Cùng nhiệm vụ, đủ A/B/C, khoảng 4 phút mỗi option |
| 14–18 | So sánh lựa chọn, phân vai mong muốn và trade-off |
| 18–20 | Chốt phiếu cá nhân và bóc tách bốn tầng tư duy |

Người dùng không đúng bối cảnh vẫn có thể giúp phát hiện lỗi tương tác; không dùng để khẳng định giá trị thị trường. Thứ tự xoay vòng là cách tổ chức cho lần tiếp theo, không ghi hồi tố như dữ kiện của các phiên đã qua.

C yêu cầu duyệt từng khối trước khi lưu; chọn Giữ lại để khôi phục khối đã Bỏ.
