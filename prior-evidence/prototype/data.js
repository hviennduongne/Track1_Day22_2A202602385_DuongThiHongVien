/*
 * COMMON CONTEXT / CONTENT FIXTURE — dùng chung cho Option A, B, C.
 * Nội dung bài học, transcript và dấu vết là SYNTHETIC (do AI soạn, đã khai báo trong ai-support-log.md).
 * Không phải dữ liệu từ người dùng thật.
 */
window.FIXTURE = {
  platform: "VLearn · bản mô phỏng",
  lesson: {
    title: "Product Discovery Framework",
    duration: "27:30",
    sections: [
      {
        id: "s1", no: 1, title: "Vì sao cần Product Discovery", start: "00:00", end: "04:30",
        slide: "Discovery: có nên build không? · Delivery: build cho đúng",
        transcript: [
          { t: "00:40", text: "Phần lớn sản phẩm thất bại không phải vì code dở, mà vì build thứ không ai cần." },
          { t: "01:55", text: "Discovery là quá trình trả lời câu hỏi: có nên build cái này không, trước khi tốn tiền build." },
          { t: "03:10", text: "Discovery và Delivery chạy song song, không phải làm xong một giai đoạn rồi bỏ." }
        ]
      },
      {
        id: "s2", no: 2, title: "Double Diamond", start: "04:30", end: "10:15",
        slide: "Discover → Define | Develop → Deliver",
        transcript: [
          { t: "05:02", text: "Double Diamond có hai hình thoi: hình thứ nhất về vấn đề, hình thứ hai về giải pháp." },
          { t: "06:12", text: "Diamond thứ nhất: hiểu đúng vấn đề. Diamond thứ hai: tìm đúng giải pháp." },
          { t: "07:30", text: "Mỗi hình thoi có hai pha: mở rộng (diverge) rồi thu hẹp (converge)." },
          { t: "09:05", text: "Lỗi hay gặp là nhảy thẳng sang hình thoi thứ hai khi chưa chốt vấn đề." }
        ]
      },
      {
        id: "s3", no: 3, title: "Opportunity Solution Tree", start: "10:15", end: "16:40",
        slide: "Outcome → Opportunity → Solution → Assumption test",
        transcript: [
          { t: "10:40", text: "Opportunity Solution Tree bắt đầu từ một outcome mong muốn ở trên cùng." },
          { t: "11:30", text: "Dưới outcome là các opportunity: nhu cầu, nỗi đau hoặc mong muốn của khách hàng." },
          { t: "12:05", text: "Opportunity không phải là tính năng. Solution mới là thứ mình build để giải một opportunity." },
          { t: "14:20", text: "Dưới mỗi solution là các thử nghiệm để kiểm tra giả định." }
        ]
      },
      {
        id: "s4", no: 4, title: "Assumption Mapping: 4 loại rủi ro", start: "16:40", end: "22:10",
        slide: "Value · Usability · Feasibility · Viability",
        transcript: [
          { t: "17:05", text: "Mỗi solution dựa trên nhiều giả định. Ta chia chúng thành bốn loại rủi ro." },
          { t: "18:40", text: "Value: khách có muốn không. Usability: họ có dùng được không. Feasibility: mình có build được không. Viability: doanh nghiệp có sống được với nó không." },
          { t: "20:15", text: "Sắp giả định theo hai trục: mức quan trọng và mức đã có bằng chứng." },
          { t: "21:30", text: "Ưu tiên test giả định quan trọng nhất nhưng ít bằng chứng nhất." }
        ]
      },
      {
        id: "s5", no: 5, title: "Case study: thử nghiệm giả định nhanh", start: "22:10", end: "27:30",
        slide: "Fake-door test · Chọn thử nghiệm rẻ nhất vẫn trả lời được câu hỏi",
        transcript: [
          { t: "22:30", text: "Case: một app học ngoại ngữ muốn thêm tính năng luyện nói với AI." },
          { t: "22:58", text: "Họ chạy fake-door test: thêm nút \"Luyện nói\" vào app, ai bấm thì thấy thông báo \"Sắp ra mắt\"." },
          { t: "24:30", text: "Họ chọn fake-door thay vì phỏng vấn vì muốn đo hành vi thật, không phải lời nói." },
          { t: "26:10", text: "Bài học: chọn thử nghiệm rẻ nhất mà vẫn trả lời được giả định quan trọng nhất." }
        ]
      }
    ]
  },

  /* Dấu vết học viên để lại trong lúc học (giống nhau cho cả A/B/C). */
  traces: [
    { id: "t1", type: "highlight", sectionId: "s2", t: "06:12", text: "Diamond thứ nhất: hiểu đúng vấn đề. Diamond thứ hai: tìm đúng giải pháp." },
    { id: "t2", type: "unclear", sectionId: "s3", t: "12:05", text: "Opportunity khác Solution ở chỗ nào?" },
    { id: "t3", type: "note", sectionId: "s4", t: "18:40", text: "4 loại rủi ro – cần nhớ cho lab" },
    { id: "t4", type: "unclear", sectionId: "s5", t: "24:30", text: "Vì sao chọn fake-door test thay vì phỏng vấn?" }
  ],

  traceTypes: {
    highlight: { icon: "🖍", label: "Highlight" },
    unclear: { icon: "❓", label: "Chưa hiểu" },
    note: { icon: "📝", label: "Ghi chú" }
  },

  task: "Ngày mai bạn làm lab về nội dung bài này. Hãy tạo bản ghi chú bạn sẽ dùng khi làm lab.",

  /* Trạng thái 3 option. built=false: chưa có prototype (thành viên khác sẽ thêm file option-x.js). */
  optionSlots: [
    { id: "a", label: "Phương án A" },
    { id: "b", label: "Phương án B" },
    { id: "c", label: "Phương án C" }
  ],

  homeAnnotation: {
    expect: "Đọc nhiệm vụ và dấu vết, mở phương án theo thứ tự facilitator đưa.",
    watch: "Có mở 'Xem nội dung bài' không; có đọc danh sách dấu vết không.",
    dontExplain: "Khác biệt giữa A/B/C; phương án nào dùng AI thế nào."
  }
};
