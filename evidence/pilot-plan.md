# Pilot plan - dự kiến, chưa tuyển/chạy

Viên phụ trách. Tôi dự kiến tuyển2SME đào tạo có người kýngân sách thực,23/10-06/11/2026 (2tuần). Chưa có danh sách đơn vị nhận lời. Cóthể đổi deadline sau khi cóngười thamgia, ghi lýdo chứ không lùi âmthầm.

Trongpilot tôi sẽ hỏi buyer họ đã trả ai làmnháp, côngviệc nào lặplại, và ngân sách nào thực sự có. Nếu họ không làmnháp cho họcviên, giảthuyếtheadcountbudget khôngđứng; quay lại prosumer/software vàtínhlạiARPU. Không lấy phản hồiHuy/Vũ/Dũng thay lời buyer.

Tôi lấy bài tươngđương, đo phút ghichú thủcông vàphút dùngAI+review, chấm cùngrubric. Thu sốjobđạt,attempt/token/retry/cachehit,QAphút,storage/hóađơn,sessionquaylại, willingness-to-pay bằng quyết định trảphí cụthể (không fakepayment). 20phút/$6h đang làassumption, được thaybằng đo thật khi có.

Kiểm soát đề xuất:400completedjob/tháng/customer,thôngbáođơngiá0,40; mỗijob tốiđa3 lần xử lý pipeline tổngcộng (bao gồm2retry),giớihạn ngân sáchAPI vàtimeout,circuitbreaker.3lượtLLM trong mộtpipeline khác3lầnretrypipeline. Retry/duplicatecùngjobID khôngbill; edit/undo khôngbill; regenerationbill chỉsauconsent vàIDmới. Capcompleted không cho phép infiniteattempt. Những controls này chưa có trongprototype, pilotlive chỉbắtđầu sau khi triểnkhai/kiểmtra.

Reporttemplate: sốcustomerthực/số được mời; sốsession; firstjob/completed/failed; quality/nguồnsai; rawtimepaired;costdirect/full;actualCAC gồm công tuyển/onboarding; paid/retention; kháchđồngýđịnhnghĩajob vàdispute. Nếu thiếu thì ghiNA,không0.

Month1đến07/11/2026 học với2SME; Month2-3đến07/01/2027 thử5paid quaPLG; Month4xét08/01/2027 mục tiêu10SME. Gate80%completed đúngrubric,fullGM>=60%,đoCAC/payback vàretention trước mởngách. CAC$40 dự kiến200/5paid chưa tínhcông founder: phải đưa công onboarding thật vàoCAC, không báoCACthấp chỉvì bỏ công.
