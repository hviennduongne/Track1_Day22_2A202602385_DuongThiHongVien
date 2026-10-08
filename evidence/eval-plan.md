# Eval plan - chưa phải kết quả

Tôi là Dương Thị Hồng Viên, chịu trách nhiệm trước22/10/2026. Prototype hiện cannedtext; test financialmodel không chứng minh chất lượng model.

Tôi sẽ làm50case có lesson/transcript được phép dùng:20bài bình thường có highlight;10ít dấu vết;10mức hiểu tự khai mâu thuẫn/highlight mơ hồ;5thiếu transcript;5input chứa yêu cầu lệch bài/prompt injection. Tách bộ phát triển vàholdout, không sửa prompt theoholdout rồi báo cùng điểm. Không dùng dữ liệu nhạy cảm học viên để tạo bộ mẫu.

Rubric mỗi case: nguồn có thật và trích đúng; ý chính không sai; chỗ chưa hiểu theo tự khai, không đoán năng lực; bài thực hành phù hợp; không thêm kiến thức như thể có trong bài. Chỉcompleted nếu đủcác tiêu chí và giao nháp; córeferencekhông đủ nếu nội dung sai. Khôngnguồn hoặc thấtbại đưa vàofailed, khôngbill. Nếu người dùng sửa sau khi nhận, lưu lý do/tranhchấp để xem lại rubric. Chấm độc lập bằng người với nguồn, AI có thể gợi ý chứ không tự làm groundtruth.

Log dự kiến: jobID,caseID,prompt/modelversion,attemptcount,start/end,status,input/output/cachecreation/cachereadtokens,chi phí,QAminutes,referencecheck,billingID (không lưu PII trực tiếp). JobID dùng kiểm tra duplicate và retry, tách firstjob vàsubcalls.

Tôi sẽ báo completed/firstjobs và các lỗi chất lượng riêng, latencyP50/P95, retrycost,QAminutes vàcost/jobdirect+overhead. Với50case, %chỉ làpilotestimate, không gọi benchmark ngành. Gate proposed80% đúngrubric,0ca sai nguồn nghiêm trọng,fullGM>=60% trên volume thật; so với ngưỡng65,33125% ởbasecase. Nếu fail, chưascale hoặc thu tiềnOutcome. Chưa có tỷ lệ đạt vì chưa chạy modelAPI.
