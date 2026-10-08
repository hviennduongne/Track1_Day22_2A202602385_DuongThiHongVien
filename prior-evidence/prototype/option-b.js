/*
 * OPTION B — "AI hỏi mức hiểu trước, rồi cùng viết" (người build: Ninh Quang Minh)
 * Critical interaction:
 *   Bước 1 (#/b)       : AI hỏi user nắm từng phần tới đâu (AI đoán sẵn cho phần có dấu "Chưa hiểu", user sửa được)
 *   Bước 2 (#/b/draft) : AI tạo nháp theo mức hiểu; user sửa trực tiếp, đổi mức hiểu từng phần (có Hoàn tác)
 *   Kết quả (#/b/done) : màn kết quả dùng chung trong app.js
 * AI output là CANNED TEXT (soạn sẵn, có AI hỗ trợ soạn — xem ai-support-log.md). Không gọi model/API.
 */
(function () {
  const { F, esc, sectionById, tracesOf, traceChip, transcriptBox } = window.App;

  const LEVELS = [
    { id: "ok", label: "Đã nắm" },
    { id: "unsure", label: "Hơi mơ hồ" },
    { id: "no", label: "Chưa hiểu" }
  ];
  const levelLabel = (id) => (LEVELS.find((l) => l.id === id) || {}).label;

  /* Canned AI output cho từng phần: short (Đã nắm), long (Hơi mơ hồ), long + example (Chưa hiểu),
     answer = trả lời câu hỏi "Chưa hiểu" của user trong phần đó (nếu có). */
  const CANNED = {
    s1: {
      short: "Discovery = trả lời “có nên build không” trước khi build. Chạy song song với Delivery (build cho đúng).",
      long: "Discovery là phần việc giảm rủi ro trước khi tốn công build: kiểm tra vấn đề có thật và giải pháp có đáng làm không. Delivery là build cho đúng. Hai việc chạy song song suốt vòng đời sản phẩm, không phải làm Discovery một lần rồi thôi.\nLý do cần: phần lớn sản phẩm thất bại vì build thứ không ai cần, không phải vì code dở.",
      example: "Trước khi build tính năng ghi chú tự động, nhóm phỏng vấn học viên xem họ có thực sự quay lại đọc ghi chú không."
    },
    s2: {
      short: "2 hình thoi: Vấn đề (Discover → Define), rồi Giải pháp (Develop → Deliver). Mỗi hình thoi: mở rộng rồi thu hẹp.",
      long: "Double Diamond gồm hai hình thoi nối tiếp:\n• Hình thoi 1 — vấn đề: mở rộng để tìm hiểu (Discover), rồi thu hẹp để chốt vấn đề (Define).\n• Hình thoi 2 — giải pháp: mở rộng nhiều hướng (Develop), rồi thu hẹp để chọn và đưa ra (Deliver).\nLỗi hay gặp: nhảy sang hình thoi 2 khi chưa chốt vấn đề.",
      example: "Phỏng vấn người dùng và viết problem statement thuộc hình thoi 1; phác nhiều phương án và làm prototype thuộc hình thoi 2."
    },
    s3: {
      short: "Cây 4 tầng: Outcome → Opportunity (nhu cầu/nỗi đau của khách) → Solution (thứ mình build) → Thử nghiệm giả định.",
      long: "Opportunity Solution Tree có 4 tầng:\n• Outcome: kết quả muốn đạt (trên cùng).\n• Opportunity: nhu cầu, nỗi đau, mong muốn của khách hàng.\n• Solution: thứ đội sản phẩm build để giải một opportunity.\n• Thử nghiệm: kiểm tra giả định của từng solution.\nĐọc từ trên xuống để không nhảy thẳng vào tính năng.",
      example: "Opportunity: “Học xong vài hôm là quên nội dung chính.” Solution có thể là: ghi chú tự động sau bài học, hoặc quiz nhắc lại sau 2 ngày.",
      answer: "Opportunity nằm ở phía khách hàng (nhu cầu, nỗi đau, mong muốn — vẫn đúng dù chưa có sản phẩm). Solution nằm ở phía đội sản phẩm (thứ mình build để giải opportunity đó). Một opportunity có thể có nhiều solution."
    },
    s4: {
      short: "4 rủi ro: Value (muốn không?), Usability (dùng được không?), Feasibility (build được không?), Viability (doanh nghiệp sống được không?). Test trước giả định quan trọng nhưng ít bằng chứng.",
      long: "Mỗi solution dựa trên nhiều giả định, chia 4 loại rủi ro:\n• Value: khách có muốn không.\n• Usability: khách có dùng được không.\n• Feasibility: đội có build được không.\n• Viability: doanh nghiệp có sống được với nó không.\nSắp giả định theo 2 trục: mức quan trọng × mức đã có bằng chứng. Ưu tiên test giả định quan trọng nhất mà ít bằng chứng nhất.",
      example: "“Học viên sẽ đọc lại ghi chú” là giả định Value; “Học viên biết cách sửa ghi chú” là giả định Usability."
    },
    s5: {
      short: "Fake-door test: đặt nút cho tính năng chưa có để đo hành vi thật. Chọn thử nghiệm rẻ nhất mà vẫn trả lời được giả định quan trọng nhất.",
      long: "Case: app học ngoại ngữ muốn biết người dùng có thật sự muốn luyện nói với AI không (giả định Value). Họ dùng fake-door test: thêm nút “Luyện nói”, ai bấm thì thấy thông báo “Sắp ra mắt”. Số lượt bấm cho biết mức quan tâm thật mà chưa cần build tính năng.\nNguyên tắc: chọn thử nghiệm rẻ nhất mà vẫn trả lời được giả định quan trọng nhất.",
      example: "Muốn biết học viên có cần ghi chú tự động không: thêm nút “Tạo ghi chú” ở cuối bài, đếm số người bấm trước khi build.",
      answer: "Vì phỏng vấn chỉ thu được lời nói — người ta dễ nói “có, mình sẽ dùng”. Fake-door đo hành vi thật (có bấm hay không), với chi phí thấp vì chưa cần build tính năng."
    }
  };

  /* Ghép bản nháp một phần theo mức hiểu. Dấu vết của user được giữ nguyên lời. */
  function compose(sid, level) {
    const c = CANNED[sid];
    const lines = [];
    tracesOf(sid).forEach((tr) => {
      if (tr.type === "unclear") {
        lines.push(`❓ Bạn hỏi (${tr.t}): “${tr.text}”`);
        if (level !== "ok" && c.answer) lines.push(`→ ${c.answer}`);
      } else if (tr.type === "highlight") {
        lines.push(`🖍 Bạn đã highlight (${tr.t}): “${tr.text}”`);
      } else {
        lines.push(`📝 Ghi chú của bạn (${tr.t}): ${tr.text}`);
      }
    });
    if (lines.length) lines.push("");
    if (level === "ok") lines.push(c.short);
    else if (level === "unsure") lines.push(c.long);
    else lines.push(c.long, "", `Ví dụ: ${c.example}`);
    return lines.join("\n");
  }

  function initState() {
    const levels = {}, guessed = {};
    F.traces.filter((t) => t.type === "unclear").forEach((t) => { levels[t.sectionId] = "no"; guessed[t.sectionId] = t.t; });
    return { levels, guessed, defaulted: {}, texts: {}, genLevel: {}, edited: {}, undo: {}, notice: {}, openSrc: {}, drafted: false };
  }

  function segmented(sid, current, ctx) {
    return `<div class="seg" role="group">${LEVELS.map((l) =>
      `<button class="seg-btn ${current === l.id ? "active" : ""}" data-action="set-level" data-sid="${sid}" data-level="${l.id}" data-ctx="${ctx}">${l.label}</button>`
    ).join("")}</div>`;
  }

  /* ---------- Bước 1: AI hỏi ---------- */
  
  
  function renderAsk(st) {
    const secs = F.lesson.sections;
    const unanswered = secs.filter((s) => !st.levels[s.id]).length;
    const rows = secs.map((s) => {
      const trs = tracesOf(s.id);
      let tag = "";
      if (st.guessed[s.id]) tag = `<div class="ai-guess"><i class="fa-solid fa-robot"></i> AI đoán từ dấu vết "Chưa hiểu" lúc ${st.guessed[s.id]} của bạn — đổi nếu sai</div>`;
      return `<div class="q-row">
        <div class="q-head"><strong>Phần ${s.no} — ${esc(s.title)}</strong></div>
        ${trs.length ? `<div class="q-traces">${trs.map(traceChip).join("")}</div>` : ""}
        ${segmented(s.id, st.levels[s.id], "ask")}
        ${tag}
      </div>`;
    }).join("");

    return `
      <div class="vl-panel-header">
        <div class="vl-panel-title"><i class="fa-solid fa-wand-magic-sparkles"></i> AI Notes (Phương án B)</div>
        <button class="btn btn-icon" data-action="home"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <div class="vl-panel-body">
        <div class="stepbar">Bước 1/2 — Khảo sát mức độ hiểu</div>
        <div class="expect">
          <strong>AI sẽ làm gì:</strong> Trước khi viết ghi chú, AI cần biết bạn đã nắm phần nào. AI sẽ viết kỹ phần bạn chưa nắm và viết gọn phần bạn đã nắm. Đây là bản nháp từ bài mẫu và mức hiểu bạn chọn; AI không kiểm tra được bạn đã hiểu thực sự hay chưa.
        </div>
        <div>${rows}</div>
      </div>
      <div class="vl-panel-footer" style="flex-direction:column; align-items:stretch; gap:12px;">
        <span class="muted small" style="text-align:center">${unanswered ? `Còn ${unanswered} phần chưa trả lời — AI sẽ viết ở mức "Hơi mơ hồ".` : "Đã trả lời đủ 5 phần."}</span>
        <button class="btn primary" data-action="make-draft" style="width:100%"><i class="fa-solid fa-pen-nib"></i> AI Tạo bản nháp</button>
      </div>`;
  }

  function renderDraft(st) {
    if (!st.drafted) return renderAsk(st);
    const cards = F.lesson.sections.map((s) => {
      const text = st.texts[s.id] || "";
      const rows = Math.max(3, text.split("\n").reduce((n, l) => n + Math.ceil((l.length || 1) / 50), 0));
      const status = [`Mức: ${levelLabel(st.genLevel[s.id])}`];
      if (st.defaulted[s.id]) status.push("Mặc định");
      if (st.edited[s.id]) status.push("Đã sửa");
      return `<div class="draft-card" style="margin-bottom:16px;">
        <div class="q-head" style="font-weight:600">Phần ${s.no} — ${esc(s.title)}</div>
        <div class="level-line"><span class="muted small">Chỉnh lại mức độ hiểu:</span> ${segmented(s.id, st.levels[s.id], "draft")}</div>
        ${st.notice[s.id] ? `<div class="notice"><i class="fa-solid fa-bolt"></i> AI vừa viết lại theo mức mới. <button class="link" data-action="undo" data-sid="${s.id}" style="margin-left:auto; font-weight:600;">Hoàn tác</button></div>` : ""}
        <textarea style="background-color: #f4fbff; border: 1px solid #c2e0ff;" data-field="text" data-sid="${s.id}" rows="${rows}">${esc(text)}</textarea>
        <div class="draft-meta">
          <span class="chip" style="font-size:0.75rem; border:none; background:#f1f3f4; padding:2px 8px">${status.join(" · ")}</span>
          <button class="link small" data-action="toggle-src" data-sid="${s.id}"><i class="fa-solid fa-code-branch"></i> Transcript ${st.openSrc[s.id] ? "–" : "+"}</button>
        </div>
        ${st.openSrc[s.id] ? transcriptBox(s) : ""}
      </div>`;
    }).join("");

    return `
      <div class="vl-panel-header">
        <div class="vl-panel-title"><i class="fa-solid fa-wand-magic-sparkles"></i> AI Notes (Phương án B)</div>
        <button class="btn btn-icon" data-action="home"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <div class="vl-panel-body" style="background:#f8f9fa;">
        <div class="stepbar">Bước 2/2 — Bản nháp ghi chú</div>
        <div class="expect" style="background:#fff">
          Đây là bản nháp AI viết theo mức hiểu bạn chọn. Đổi mức hiểu ở một phần để AI viết lại phần đó. Bạn có thể sửa trực tiếp văn bản.
        </div>
        <div>${cards}</div>
      </div>
      <div class="vl-panel-footer">
        <button class="btn" data-action="back-ask"><i class="fa-solid fa-arrow-left"></i> Quay lại</button>
        <button class="btn primary" data-action="save" style="flex:1"><i class="fa-solid fa-floppy-disk"></i> Lưu ghi chú</button>
      </div>`;
  }
window.App.registerOption({
    id: "b",
    editStep: "draft",
    initState,
    render(step, st) { return step === "draft" ? renderDraft(st) : renderAsk(st); },

    handle(action, d, st) {
      const sid = d.sid;
      switch (action) {
        case "set-level": {
          if (d.ctx === "ask") {
            st.levels[sid] = d.level; delete st.guessed[sid]; delete st.defaulted[sid];
            return;
          }
          if (st.levels[sid] === d.level) return false;
          st.undo[sid] = { text: st.texts[sid], level: st.levels[sid], genLevel: st.genLevel[sid], edited: st.edited[sid], guessed: st.guessed[sid], defaulted: st.defaulted[sid] };
          st.levels[sid] = d.level; delete st.guessed[sid]; delete st.defaulted[sid];
          st.texts[sid] = compose(sid, d.level); st.genLevel[sid] = d.level; st.edited[sid] = false;
          st.notice[sid] = true;
          return;
        }
        case "undo": {
          const u = st.undo[sid]; if (!u) return;
          st.texts[sid] = u.text; st.levels[sid] = u.level; st.genLevel[sid] = u.genLevel; st.edited[sid] = u.edited;
          if (u.guessed) st.guessed[sid] = u.guessed;
          if (u.defaulted) st.defaulted[sid] = u.defaulted;
          delete st.undo[sid]; delete st.notice[sid];
          return;
        }
        case "make-draft": {
          F.lesson.sections.forEach((s) => {
            if (!st.levels[s.id]) { st.levels[s.id] = "unsure"; st.defaulted[s.id] = true; }
            const lvl = st.levels[s.id];
            if (!st.drafted || st.genLevel[s.id] !== lvl) {
              st.texts[s.id] = compose(s.id, lvl); st.genLevel[s.id] = lvl; st.edited[s.id] = false;
            }
          });
          st.undo = {}; st.notice = {}; st.drafted = true;
          window.App.go("#/b/draft");
          return false;
        }
        case "toggle-src": st.openSrc[sid] = !st.openSrc[sid]; return;
        case "back-ask": window.App.go("#/b"); return false;
        case "save": window.App.go("#/b/done"); return false;
        default: return false;
      }
    },

    input(d, value, st) {
      if (d.field === "text") { st.texts[d.sid] = value; st.edited[d.sid] = true; }
    },

    finalNote(st) {
      return F.lesson.sections.map((s) => ({ sectionId: s.id, text: st.texts[s.id] || "" }));
    },

    annotation(step) {
      if (step === "draft") return {
        expect: "Đọc nháp, sửa trực tiếp hoặc đổi mức hiểu ở phần thấy chưa đúng, rồi lưu.",
        watch: "Có nhận ra phần “Chưa hiểu” được viết kỹ hơn không; có đổi mức hiểu ở bước này / dùng Hoàn tác không; có mở Nguồn không; có quay lại bước 1 không.",
        dontExplain: "Đổi mức hiểu sẽ viết lại phần đó; nút Nguồn dùng để làm gì."
      };
      if (step === "done") return {
        expect: "Đọc bản đã lưu, quyết định xong hay quay lại sửa.",
        watch: "Có bấm “Sửa lại” không; nhận xét về độ dài / độ phù hợp của từng phần.",
        dontExplain: "—"
      };
      return {
        expect: "Đọc dòng mô tả, xem/sửa 2 mức hiểu AI đoán sẵn, trả lời các phần còn lại, tạo nháp.",
        watch: "Có đọc nhãn “AI đoán” không; có đổi mức đoán sẵn không; do dự ở phần nào; có bỏ trống phần nào không.",
        dontExplain: "Vì sao 2 phần được chọn sẵn; mỗi mức hiểu tạo ra nội dung khác nhau thế nào."
      };
    }
  });
})();
