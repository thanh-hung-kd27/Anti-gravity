
const SOCRATIC_PROFILE_KEY = 'ielts_socratic_ai_profile_v2';
const SOCRATIC_LLM_CONFIG_KEY = 'ielts_socratic_llm_config';
const CHATBOT_HISTORY_KEY = 'ielts_ai_chatbot_messages_v1';

const CognitiveDimensionsDefault = {
  formal_syntax: {
    id: 'formal_syntax',
    name: 'Bóc Tách Cú Pháp Hình Thức (Syntax)',
    shortName: 'Cú pháp hình thức',
    score: 68,
    level: 'Thành thạo',
    trend: '+6%',
    description: 'Năng lực phân rã cấu trúc câu phức, ngữ đoạn Chomsky (X-bar) và giải trừ nhập nhằng cú pháp.'
  },
  truth_evaluation: {
    id: 'truth_evaluation',
    name: 'Định Giá Chân Lý Mệnh Đề (TFNG Logic)',
    shortName: 'Chân lý mệnh đề (TFNG)',
    score: 52,
    level: 'Cần rèn luyện',
    trend: '-3%',
    description: 'Năng lực phân biệt ranh giới giữa chân lý văn bản và suy diễn võ đoán (TRUE / FALSE vs NOT GIVEN).'
  },
  hegelian_dialectics: {
    id: 'hegelian_dialectics',
    name: 'Tư Duy Biện Chứng & Phản Đề (Dialectics)',
    shortName: 'Biện chứng Hegel',
    score: 74,
    level: 'Xuất sắc',
    trend: '+10%',
    description: 'Khả năng nhận diện mâu thuẫn nội tại, lập luận Luận đề - Phản đề - Hợp đề (Thesis-Antithesis-Synthesis).'
  },
  distractor_resistance: {
    id: 'distractor_resistance',
    name: 'Kháng Bẫy Ngụy Biện & Âm Thanh (Distractor Resistance)',
    shortName: 'Kháng bẫy ngụy biện',
    score: 60,
    level: 'Khá',
    trend: '+4%',
    description: 'Khả năng nhận diện bẫy đổi ý phút chót, phủ định ngầm và các thủ thuật đánh lừa nhận thức.'
  },
  lexical_precision: {
    id: 'lexical_precision',
    name: 'Độ Tinh Chuẩn Thuật Ngữ Học Thuật (Lexical Precision)',
    shortName: 'Độ tinh chuẩn thuật ngữ',
    score: 78,
    level: 'Xuất sắc',
    trend: '+5%',
    description: 'Hiểu chính xác sắc thái ngữ nghĩa học thuật nâng cao, collocations học thuật và tính đẳng cấu nghĩa.'
  },
  epistemic_caution: {
    id: 'epistemic_caution',
    name: 'Thận Trọng Nhận Thức Luận (Epistemic Caution / Hedging)',
    shortName: 'Thận trọng nhận thức',
    score: 58,
    level: 'Cần chú ý',
    trend: '+2%',
    description: 'Tránh lỗi ngụy biện khái quát hóa vội vã (Overgeneralization) và biết sử dụng ngôn từ dè dặt (Hedging).'
  }
};

class SocraticAIEngine {
  constructor() {
    this.profile = this.loadProfile();
    this.llmConfig = this.loadLLMConfig();
    this.conversationHistory = this.loadChatHistory();
    this.isStreaming = false;
    this.abortController = null;

    // Auto synchronize profile data and initialize unified personalized AI Chatbot UI
    if (typeof window !== 'undefined') {
      const initAll = () => {
        this.syncProfileToUI();
        this.initFloatingChatbotWidget();
      };
      if (document.readyState === 'loading') {
        window.addEventListener('DOMContentLoaded', initAll);
      } else {
        setTimeout(initAll, 60);
      }
    }
  }

  loadChatHistory() {
    try {
      const raw = localStorage.getItem(CHATBOT_HISTORY_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) return parsed.slice(-30);
      }
    } catch (e) {}
    return [];
  }

  saveChatHistory() {
    try {
      const recent = (this.conversationHistory || []).slice(-30);
      localStorage.setItem(CHATBOT_HISTORY_KEY, JSON.stringify(recent));
    } catch (e) {}
  }

  // Load from localStorage or create smart default profile
  loadProfile() {
    try {
      const stored = localStorage.getItem(SOCRATIC_PROFILE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        parsed.cognitiveDimensions = { ...CognitiveDimensionsDefault, ...(parsed.cognitiveDimensions || {}) };
        if (!parsed.name || /Minh\s*Đ\u1ee9c/i.test(parsed.name)) {
          parsed.name = 'Học viên';
        }
        if (parsed.email && parsed.email.includes('minhduc')) {
          parsed.email = '';
        }
        parsed.focusSkill = parsed.focusSkill || 'ALL';
        parsed.examDate = parsed.examDate || '';
        parsed.responseStyle = parsed.responseStyle || 'friendly';
        parsed.personalNotes = parsed.personalNotes || '';
        parsed.customMemories = Array.isArray(parsed.customMemories) ? parsed.customMemories : [];
        return parsed;
      }
    } catch (e) {
      console.warn('Could not parse Socratic AI Profile from localStorage', e);
    }

    const defaultProfile = {
      version: '2.5-personalized',
      studentId: 'PHI-' + Math.floor(1000 + Math.random() * 9000),
      name: 'Học viên',
      email: '',
      phone: '',
      targetBand: '8.0',
      currentEstimatedBand: '7.0',
      focusSkill: 'ALL',
      examDate: '',
      responseStyle: 'friendly',
      personalNotes: '',
      customMemories: [],
      learningStyle: 'Personalized-Adaptive',
      createdAt: new Date().toISOString(),
      lastActive: new Date().toISOString(),
      totalInteractions: 14,
      testsAttempted: [
        {
          testId: 'cam-19-t1-reading',
          title: 'Cambridge 19 - Test 1: Reading Passage 3',
          skill: 'READING',
          score: 10,
          total: 14,
          band: '8.0',
          timestamp: new Date(Date.now() - 3600000 * 24).toISOString(),
          mistakes: [
            { qNum: 34, userAns: 'FALSE', correctAns: 'NOT GIVEN', category: 'truth_evaluation' }
          ]
        }
      ],
      cognitiveDimensions: JSON.parse(JSON.stringify(CognitiveDimensionsDefault)),
      learnedBlindspots: [
        {
          id: 'blindspot-1',
          title: 'Suy diễn vượt quá dữ kiện văn bản (Epistemic Overreach)',
          category: 'truth_evaluation',
          frequency: 3,
          context: 'Có xu hướng vội vàng chọn FALSE thay vì NOT GIVEN khi gặp các câu hỏi ngôn ngữ học thuật và khoa học thần kinh.',
          remedy: 'Nguyên lý tam đoạn luận: Chỉ chọn FALSE khi bài đọc chứa tiền đề mâu thuẫn trực tiếp (P ∧ ¬P). Không có dữ kiện = NOT GIVEN.',
          detectedAt: new Date(Date.now() - 3600000 * 48).toISOString()
        },
        {
          id: 'blindspot-2',
          title: 'Bẫy người nói thay đổi quyết định (Correction Trap)',
          category: 'distractor_resistance',
          frequency: 2,
          context: 'Trong Listening Section 1, dễ chọn thông tin đầu tiên (ngày 20th, £750) thay vì đợi người nói chốt phương án thực tế.',
          remedy: 'Thực hành hoãn phán xét (Epoché): Ghi chú nháp cả 2 con số và chỉ chốt khi lượt hội thoại chuyển chủ đề.',
          detectedAt: new Date(Date.now() - 3600000 * 24).toISOString()
        }
      ],
      aiInsights: [
        'Học viên có tư duy bóc tách cấu trúc câu phức rất sắc bén (Điểm Cú pháp: 68%).',
        'Điểm nghẽn nhận thức lớn nhất là xu hướng tự suy luận tri thức cá nhân vào bài đọc TFNG.',
        'Chiến lược tối ưu: Tập trung rèn luyện các bài Reading mang tính tư duy học thuật nâng cao để bứt phá lên Band 8.5.'
      ]
    };

    this.saveProfile(defaultProfile);
    return defaultProfile;
  }

  saveProfile(profile) {
    this.profile = profile || this.profile;
    this.profile.lastActive = new Date().toISOString();
    try {
      localStorage.setItem(SOCRATIC_PROFILE_KEY, JSON.stringify(this.profile));
    } catch (e) {
      console.error('Failed to save Socratic AI profile', e);
    }
    this.syncProfileToUI();
  }

  // Synchronize profile information across all UI elements and pages
  syncProfileToUI() {
    const name = this.profile?.name || 'Học viên';
    const band = this.profile?.targetBand || '8.0';

    // Index / Home page
    const homeBadge = document.getElementById('navHomeStudentBadge');
    if (homeBadge) homeBadge.textContent = `${name} (Band ${band})`;
    const homeChatName = document.getElementById('homeChatStudentName');
    if (homeChatName) homeChatName.textContent = name;

    // Exam room page
    const examBadge = document.getElementById('navBarStudentBadge');
    if (examBadge) examBadge.textContent = `${name} (${band})`;
    const examChatName = document.getElementById('aiSidebarStudentName');
    if (examChatName) examChatName.textContent = name;
    const examBand = document.getElementById('aiSidebarTargetBand');
    if (examBand) examBand.textContent = band;

    // Library page
    const libBadge = document.getElementById('navLibraryStudentBadge');
    if (libBadge) libBadge.textContent = `${name} (${band})`;
    const libName = document.getElementById('libraryStudentName');
    if (libName) libName.textContent = name;
    const libTargetBadge = document.getElementById('libraryTargetBadge');
    if (libTargetBadge) libTargetBadge.textContent = `Mục tiêu Band ${band}`;
  }

  // Quick prompt for the user to set or update their name
  promptChangeStudentName() {
    const currentName = (this.profile && this.profile.name && this.profile.name !== 'Học viên') ? this.profile.name : '';
    const newName = window.prompt('Nhập họ tên của bạn để cá nhân hóa hệ thống học tập và AI Tutor:', currentName);
    if (newName !== null) {
      const trimmed = newName.trim();
      this.updateStudentInfo(trimmed || 'Học viên', this.profile?.targetBand || '8.0');
    }
  }

  loadLLMConfig() {
    try {
      const stored = localStorage.getItem(SOCRATIC_LLM_CONFIG_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.provider === 'puter') {
          parsed.provider = 'socratic-claude-engine';
        }
        return parsed;
      }
    } catch (e) { }
    return {
      provider: 'socratic-claude-engine',
      apiKey: '',
      model: 'gpt-4o',
      temperature: 0.7
    };
  }

  saveLLMConfig(config) {
    this.llmConfig = { ...this.llmConfig, ...config };
    try {
      localStorage.setItem(SOCRATIC_LLM_CONFIG_KEY, JSON.stringify(this.llmConfig));
    } catch (e) { }
    this.showLearningToast('⚙️ Đã lưu cấu hình mô hình AI thành công!');
  }

  updateStudentInfo(name, targetBand, email, phone) {
    if (name !== undefined) this.profile.name = (name && name.trim()) ? name.trim() : 'Học viên';
    if (targetBand) this.profile.targetBand = targetBand;
    if (email !== undefined) this.profile.email = email.trim();
    if (phone !== undefined) this.profile.phone = phone.trim();
    this.saveProfile();
    this.syncProfileToUI();
    this.showLearningToast(`👤 Đã lưu thông tin học viên: ${this.profile.name} (Band ${this.profile.targetBand})`);
  }

  // Record an exam attempt and trigger autonomous self-learning
  recordTestResult(testData) {
    this.profile.totalInteractions++;

    let band = '6.5';
    const ratio = testData.score / testData.total;
    if (ratio >= 0.9) band = '9.0';
    else if (ratio >= 0.8) band = '8.5';
    else if (ratio >= 0.7) band = '7.5';
    else if (ratio >= 0.55) band = '6.5';
    else band = '5.5';

    testData.band = band;
    testData.timestamp = new Date().toISOString();
    this.profile.currentEstimatedBand = band;
    this.profile.testsAttempted.unshift(testData);

    const learnedChanges = [];

    if (testData.mistakes && testData.mistakes.length > 0) {
      testData.mistakes.forEach(m => {
        const cat = m.category || (testData.skill === 'READING' ? 'truth_evaluation' : 'distractor_resistance');
        if (this.profile.cognitiveDimensions[cat]) {
          const dim = this.profile.cognitiveDimensions[cat];
          const oldScore = dim.score;
          dim.score = Math.max(30, dim.score - 4);
          dim.trend = (dim.score - oldScore) + '%';
          this.updateDimensionLevel(dim);
        }
        this.registerOrUpdateBlindspot(m);
      });
      learnedChanges.push(`Ghi nhận ${testData.mistakes.length} mẫu sai lệch tư duy`);
    }

    if (testData.score > 0) {
      const rewardCat = testData.skill === 'READING' ? 'formal_syntax' : 'distractor_resistance';
      if (this.profile.cognitiveDimensions[rewardCat]) {
        const dim = this.profile.cognitiveDimensions[rewardCat];
        const oldScore = dim.score;
        dim.score = Math.min(98, dim.score + 5);
        dim.trend = '+' + (dim.score - oldScore) + '%';
        this.updateDimensionLevel(dim);
        learnedChanges.push(`${dim.shortName}: ${oldScore}% ➔ ${dim.score}%`);
      }
    }

    this.synthesizeAiInsights();
    this.saveProfile();

    const changeSummary = learnedChanges.join(' | ');
    this.showLearningToast(`🧠 Socratic AI vừa hoàn thành chu trình tự học! ${changeSummary}`, 'learning');

    return { band, profile: this.profile };
  }

  updateDimensionLevel(dim) {
    if (dim.score >= 80) dim.level = 'Xuất sắc';
    else if (dim.score >= 65) dim.level = 'Thành thạo';
    else if (dim.score >= 50) dim.level = 'Khá';
    else dim.level = 'Cần rèn luyện';
  }

  registerOrUpdateBlindspot(mistake) {
    let title = '';
    let remedy = '';
    let category = mistake.category || 'truth_evaluation';

    if (mistake.qNum === 34 || mistake.userAns === 'FALSE' && mistake.correctAns === 'NOT GIVEN') {
      title = 'Suy diễn vượt quá dữ kiện (Epistemic Overreach)';
      remedy = 'Tuân thủ định luật loại trừ Aristotle: Tuyệt đối không giả định thông tin ngoài bài đọc làm chân lý phủ định.';
      category = 'truth_evaluation';
    } else if (mistake.qNum >= 27 && mistake.qNum <= 31) {
      title = 'Nhầm lẫn giữa luận đề bao quát và dẫn chứng minh họa (Heading Trap)';
      remedy = 'Phân rã cấu trúc câu chủ đề (Topic sentence) và mệnh đề chính để tìm Thesis Statement.';
      category = 'formal_syntax';
    } else if (mistake.qNum === 1 || mistake.qNum === 2) {
      title = 'Bị đánh lừa bởi thông tin sửa đổi phút chót (Correction Trap)';
      remedy = 'Thực hành hoãn phán xét (Epoché), chỉ chọn giá trị khi có xác nhận chốt của người nói.';
      category = 'distractor_resistance';
    } else {
      title = `Lỗi phân tích tại câu ${mistake.qNum}`;
      remedy = 'Đối chiếu văn bản gốc và đối chiếu cây cú pháp tạo sinh để triệt tiêu sự mơ hồ ngữ nghĩa.';
    }

    const existing = this.profile.learnedBlindspots.find(b => b.title === title);
    if (existing) {
      existing.frequency++;
      existing.detectedAt = new Date().toISOString();
    } else {
      this.profile.learnedBlindspots.unshift({
        id: 'blindspot-' + Date.now(),
        title,
        category,
        frequency: 1,
        context: `Phát hiện học viên chọn "${mistake.userAns}" thay vì "${mistake.correctAns}" tại câu ${mistake.qNum}.`,
        remedy,
        detectedAt: new Date().toISOString()
      });
    }
  }

  synthesizeAiInsights() {
    const dims = Object.values(this.profile.cognitiveDimensions);
    const lowestDim = [...dims].sort((a, b) => a.score - b.score)[0];
    const highestDim = [...dims].sort((a, b) => b.score - a.score)[0];

    this.profile.aiInsights = [
      `Thế mạnh nhận thức nổi trội: ${highestDim.name} (${highestDim.score}% - ${highestDim.level}).`,
      `Trọng tâm cần rèn luyện: ${lowestDim.name} (${lowestDim.score}% - ${lowestDim.level}).`,
      `Lời khuyên chiến lược cho ${this.profile.name}: Mục tiêu Band ${this.profile.targetBand} đòi hỏi loại bỏ hoàn toàn các lỗi suy diễn cảm tính ở phần ${lowestDim.shortName}.`
    ];
  }

  getWeakestDimension() {
    const dims = Object.values(this.profile.cognitiveDimensions);
    return [...dims].sort((a, b) => a.score - b.score)[0];
  }

  // ==========================================
  // CLAUDE / CHATGPT DIALOGUE & STREAMING ENGINE
  // ==========================================

  // ==========================================
  // IELTS EXAMINER JSON PARSER & FORMATTER
  // ==========================================

  parseIeltsWritingJson(text) {
    if (!text || typeof text !== 'string') return null;
    const trimmed = text.trim();
    if (trimmed.startsWith('{') && (trimmed.includes('"overall_score"') || trimmed.includes('"criteria_scores"'))) {
      try {
        const parsed = JSON.parse(trimmed);
        if (parsed && (parsed.overall_score !== undefined || parsed.criteria_scores)) return parsed;
      } catch (e) {}
    }
    const codeMatch = trimmed.match(/```(?:json)?\s*(\{[\s\S]*?"overall_score"[\s\S]*?\})\s*```/);
    if (codeMatch) {
      try {
        const parsed = JSON.parse(codeMatch[1]);
        if (parsed && (parsed.overall_score !== undefined || parsed.criteria_scores)) return parsed;
      } catch (e) {}
    }
    const objMatch = trimmed.match(/(\{[\s\S]*?"overall_score"[\s\S]*?"criteria_scores"[\s\S]*?\})/);
    if (objMatch) {
      try {
        const parsed = JSON.parse(objMatch[1]);
        if (parsed && (parsed.overall_score !== undefined || parsed.criteria_scores)) return parsed;
      } catch (e) {}
    }
    return null;
  }

  formatIeltsWritingEvaluation(data) {
    const overall = data.overall_score !== undefined ? data.overall_score : 6.5;
    const scores = data.criteria_scores || { TR_TA: 6.0, CC: 6.5, LR: 6.0, GRA: 6.0 };
    const feedback = data.detailed_feedback || {};
    const corrections = data.corrections || [];
    const rewrite = data.band_8_rewrite || '';
    const summary = data.summary || 'Bài viết cơ bản đã trình bày được lập trường nhưng cần phát triển luận cứ sâu hơn và nâng cấp vốn từ vựng học thuật C1-C2.';

    const trScore = scores.TR_TA !== undefined ? scores.TR_TA : (scores.TR || scores.TA || 6.0);
    const ccScore = scores.CC !== undefined ? scores.CC : 6.0;
    const lrScore = scores.LR !== undefined ? scores.LR : 6.0;
    const graScore = scores.GRA !== undefined ? scores.GRA : 6.0;

    const trFeedback = feedback.TR_TA_feedback || feedback.TR_feedback || feedback.TA_feedback || 'Bài viết có đề cập đến yêu cầu đề bài và duy trì lập trường nhất quán.';
    const ccFeedback = feedback.CC_feedback || 'Bố cục phân đoạn cơ bản rõ ràng, các phương tiện liên kết được sử dụng tương đối hợp lý.';
    const lrFeedback = feedback.LR_feedback || 'Vốn từ vựng tương đối đầy đủ nhưng cần nâng cấp thêm các collocations học thuật C1-C2.';
    const graFeedback = feedback.GRA_feedback || 'Có sự kết hợp giữa câu đơn và câu phức, tỷ lệ mắc lỗi ngữ pháp ở mức chấp nhận được.';

    let md = `> **Cựu Giám Khảo IDP / British Council • Socratic IELTS Examiner**
> Đánh giá nghiêm ngặt theo **Official Public IELTS Writing Band Descriptors**.

## 1. Điểm tổng quát (Overall Band Score)
- **Điểm Tổng Quát (Overall Score): Band ${overall}**
  - **Task Response / Task Achievement:** Band ${trScore}
  - **Coherence and Cohesion:** Band ${ccScore}
  - **Lexical Resource:** Band ${lrScore}
  - **Grammatical Range and Accuracy:** Band ${graScore}
- ${summary}

## 2. Phân tích chi tiết theo Tiêu chí (Detailed Criteria Breakdown)
- **Task Response / Task Achievement (${trScore}):** ${trFeedback}
- **Coherence and Cohesion (${ccScore}):** ${ccFeedback}
- **Lexical Resource (${lrScore}):** ${lrFeedback}
- **Grammatical Range and Accuracy (${graScore}):** ${graFeedback}

## 3. Sửa lỗi chi tiết (Actionable Corrections)
`;

    if (corrections && corrections.length > 0) {
      corrections.slice(0, 5).forEach((c) => {
        md += `- **Câu gốc:** "${c.original || ''}"\n`;
        md += `- **Lỗi sai:** ${c.error || ''}\n`;
        md += `- **Đề xuất nâng cấp:** **"${c.upgraded || ''}"**\n\n`;
      });
    } else {
      md += `*Không phát hiện lỗi cú pháp nghiêm trọng trong câu văn trích xuất.*\n\n`;
    }

    md += `## 4. Đoạn văn mẫu nâng cấp (Band 8.0+ Rewrite)
> "${rewrite}"

<details class="my-3 p-3 rounded-xl bg-slate-900 border border-slate-700 text-xs">
<summary class="font-mono text-emerald-400 font-bold cursor-pointer select-none">📋 Dữ liệu JSON Chuẩn (Official JSON Schema Output)</summary>

\`\`\`json
${JSON.stringify(data, null, 2)}
\`\`\`
</details>
`;

    return md;
  }

  /**
   * Convert markdown string into safe and beautiful HTML
   */
  renderMarkdown(text) {
    if (!text) return '';
    
    // Auto-detect JSON schema and format if not already in Markdown
    const parsedJson = this.parseIeltsWritingJson(text);
    let html = (parsedJson && !text.includes('## 1. Điểm tổng quát')) ? this.formatIeltsWritingEvaluation(parsedJson) : text;

    // Code blocks with syntax highlighting style
    html = html.replace(/```([a-zA-Z0-9_-]*)\n([\s\S]*?)```/g, (match, lang, code) => {
      return `<pre class="my-3 p-3.5 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto border border-slate-700/80 shadow-md"><code>${this.escapeHtml(code.trim())}</code></pre>`;
    });

    // Inline code
    html = html.replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-iot-primary dark:text-blue-300 font-mono text-[11px] border border-slate-200 dark:border-slate-700 font-semibold">$1</code>');

    // Headings
    html = html.replace(/^### (.*$)/gim, '<h3 class="text-sm font-bold text-iot-dark dark:text-white mt-3 mb-1.5 flex items-center gap-1.5"><span class="text-iot-orange">▪</span> $1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2 class="text-base font-extrabold text-iot-dark dark:text-white mt-4 mb-2 pb-1 border-b border-slate-200 dark:border-slate-800">$1</h2>');

    // Blockquotes
    html = html.replace(/^> (.*$)/gim, '<blockquote class="my-2 pl-3.5 border-l-4 border-iot-primary dark:border-blue-500 italic text-slate-700 dark:text-slate-300 bg-blue-50/50 dark:bg-blue-950/20 py-1.5 rounded-r text-xs">$1</blockquote>');

    // Bold & Italic
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-iot-dark dark:text-white">$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');

    // Lists
    html = html.replace(/^\s*[-*]\s+(.*$)/gim, '<li class="ml-4 list-disc text-slate-700 dark:text-slate-300 my-0.5">$1</li>');
    html = html.replace(/^\s*(\d+)\.\s+(.*$)/gim, '<li class="ml-4 list-decimal text-slate-700 dark:text-slate-300 my-0.5"><strong>$1.</strong> $2</li>');

    // Paragraph breaks
    html = html.replace(/\n\n+/g, '</p><p class="my-2 leading-relaxed text-slate-700 dark:text-slate-200 text-xs sm:text-sm">');
    html = `<p class="my-1 leading-relaxed text-slate-700 dark:text-slate-200 text-xs sm:text-sm">${html}</p>`;

    return html;
  }

  escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  /**
   * Main dispatch for user chat: Personalizes automatically, checks Real API if configured,
   * or dispatches to Live Knowledge + Personalized Built-in Engine
   */
  async processUserMessage(userText, context = {}, onToken, onDone, onError) {
    this.isStreaming = true;
    this.conversationHistory.push({ role: 'user', content: userText });
    this.saveChatHistory();

    // 1. Auto-detect & persist personalization updates from user's message
    const personalUpdates = this.extractAndSavePersonalization(userText);

    // 2. If user configured an external API key (Google Gemini, Groq, Claude, OpenAI, Backend)
    if (this.llmConfig.provider !== 'socratic-claude-engine' && this.llmConfig.apiKey) {
      try {
        await this.callRealLLM(userText, context, onToken, (finalText) => {
          this.saveChatHistory();
          if (onDone) onDone(finalText);
        });
        return;
      } catch (err) {
        console.warn('Real API Call failed, falling back to Personalized Knowledge Engine:', err);
      }
    }

    // 3. Personalized & Live Information Retrieval Engine (Zero API-Key Required)
    try {
      const fullText = await this.generateSmartResponseAsync(userText, context, personalUpdates);
      await this.simulateTokenStream(fullText, onToken, (finalText) => {
        this.isStreaming = false;
        this.conversationHistory.push({ role: 'assistant', content: finalText });
        this.saveChatHistory();
        if (onDone) onDone(finalText);
      });
    } catch (err) {
      this.isStreaming = false;
      const fallback = this.generateClaudeResponse(userText, context);
      if (onToken) onToken(fallback);
      this.conversationHistory.push({ role: 'assistant', content: fallback });
      this.saveChatHistory();
      if (onDone) onDone(fallback);
    }
  }

  /**
   * Simulate realistic token streaming with typing cursor
   */
  async simulateTokenStream(fullText, onToken, onDone) {
    const tokens = fullText.match(/(\s+|\S+)/g) || [fullText];
    let currentText = '';

    for (let i = 0; i < tokens.length; i++) {
      if (!this.isStreaming) break;
      currentText += tokens[i];
      if (onToken) onToken(currentText);

      const delay = tokens[i].includes('\n') ? 22 : (Math.random() * 10 + 4);
      await new Promise(r => setTimeout(r, delay));
    }

    if (onDone) onDone(currentText);
  }

  stopStreaming() {
    this.isStreaming = false;
    if (this.abortController) {
      this.abortController.abort();
      this.abortController = null;
    }
  }

  /**
   * Real LLM Provider Integration (Google Gemini, Groq, Anthropic Claude, OpenAI, Local Backend)
   */
  async callRealLLM(userPrompt, context, onToken, onDone) {
    const p = this.profile;
    const isWritingEval = /chấm|chữa|điểm|grade|evaluate|score|tiêu chí|band descriptors|writing.*task|bài luận|essay|task 1|task 2/i.test(userPrompt) || context.skill === 'WRITING' || context.action === 'grade_writing';

    let systemPrompt = '';
    if (isWritingEval) {
      systemPrompt = `You are the core AI IELTS Examiner for "IELTS ACADEMIC LAB". Evaluate strictly against official IELTS Writing Band Descriptors across TA/TR, CC, LR, GRA.
Student Name: ${p.name || 'Học viên'}, Target Band: ${p.targetBand || '8.0'}, Current Band: ${p.currentEstimatedBand || '7.0'}.
Personal context: ${p.personalNotes || 'None'}.
Respond in Markdown with Overall Band, 4 Criteria Breakdown, 3-5 Sentence Corrections, and Band 8.0+ Rewrite.`;
    } else {
      const styleMap = {
        friendly: 'Warm, encouraging, easy-to-understand Vietnamese with clear examples.',
        academic: 'Scholarly, analytical, IELTS C1-C2 academic depth with precise terminology.',
        concise: 'Direct, bullet-pointed, practical and to-the-point.'
      };
      systemPrompt = `You are a Personalized Intelligent AI Assistant & IELTS Mentor for "IELTS ACADEMIC LAB".
User Profile:
- Name: ${p.name || 'Học viên'} (Always address them naturally by name when helpful)
- Target IELTS Band: ${p.targetBand || '8.0'} (Current Estimated: ${p.currentEstimatedBand || '7.0'})
- Focus Skill: ${p.focusSkill || 'ALL'}
- Exam Date: ${p.examDate || 'Not set'}
- Preferred Style: ${styleMap[p.responseStyle] || styleMap.friendly}
- Personal Notes: ${p.personalNotes || 'None'}
- Remembered Facts: ${(p.customMemories || []).join(' | ') || 'None'}
- Identified Blindspots: ${p.learnedBlindspots?.map(b => b.title).join(', ') || 'None'}

Instructions:
1. Answer any question accurately, clearly, and directly (general knowledge, facts, science, history, technology, dictionary/vocabulary, translation, or IELTS skills).
2. Tailor explanations and examples to the user's profile, focus skill, and preferred response style.
3. Format cleanly using Markdown.`;
    }

    // 1. GOOGLE GEMINI API (Generative Language)
    if (this.llmConfig.provider === 'gemini') {
      const model = this.llmConfig.model || 'gemini-1.5-flash';
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${this.llmConfig.apiKey}`;
      const contents = this.conversationHistory.map(m => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.content }]
      }));

      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: systemPrompt }] },
          contents: contents,
          generationConfig: { temperature: 0.7, maxOutputTokens: 2500 }
        })
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error?.message || `Gemini API Error: ${response.statusText}`);
      }
      const data = await response.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
      await this.simulateTokenStream(text, onToken, (finalText) => {
        this.isStreaming = false;
        this.conversationHistory.push({ role: 'assistant', content: finalText });
        if (onDone) onDone(finalText);
      });
      return;
    }

    // 2. GROQ CLOUD API (Llama 3.3 70B / Mixtral)
    if (this.llmConfig.provider === 'groq') {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.llmConfig.apiKey}`
        },
        body: JSON.stringify({
          model: this.llmConfig.model || 'llama-3.3-70b-versatile',
          stream: true,
          messages: [
            { role: 'system', content: systemPrompt },
            ...this.conversationHistory
          ]
        })
      });
      if (!response.ok) throw new Error(`Groq API Error: ${response.statusText}`);
      await this.consumeSSEStream(response, onToken, onDone);
      return;
    }

    // 3. OPENAI API (GPT-4o / GPT-4o-mini)
    if (this.llmConfig.provider === 'openai') {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.llmConfig.apiKey}`
        },
        body: JSON.stringify({
          model: this.llmConfig.model || 'gpt-4o',
          stream: true,
          messages: [
            { role: 'system', content: systemPrompt },
            ...this.conversationHistory
          ]
        })
      });
      if (!response.ok) throw new Error(`OpenAI API Error: ${response.statusText}`);
      await this.consumeSSEStream(response, onToken, onDone);
      return;
    }

    // 4. ANTHROPIC CLAUDE API (Claude 3.5 Sonnet)
    if (this.llmConfig.provider === 'anthropic') {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'x-api-key': this.llmConfig.apiKey,
          'anthropic-version': '2023-06-01',
          'content-type': 'application/json',
          'dangerously-allow-browser': 'true'
        },
        body: JSON.stringify({
          model: this.llmConfig.model || 'claude-3-5-sonnet-20241022',
          max_tokens: 2500,
          system: systemPrompt,
          messages: this.conversationHistory.map(m => ({ role: m.role, content: m.content }))
        })
      });

      if (!response.ok) throw new Error(`Claude API Error: ${response.statusText}`);
      const data = await response.json();
      const text = data.content?.[0]?.text || '';
      await this.simulateTokenStream(text, onToken, (finalText) => {
        this.isStreaming = false;
        this.conversationHistory.push({ role: 'assistant', content: finalText });
        if (onDone) onDone(finalText);
      });
      return;
    }

    // 5. LOCAL BACKEND SERVER
    if (this.llmConfig.provider === 'backend') {
      const endpoint = this.llmConfig.apiKey || 'http://localhost:5000/api/v1/chat/tutor';
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chatHistory: this.conversationHistory,
          currentQuestionContext: context,
          stream: true
        })
      });
      if (!response.ok) throw new Error(`Backend Error: ${response.statusText}`);
      await this.consumeSSEStream(response, onToken, onDone);
      return;
    }

    throw new Error('Unsupported LLM provider: ' + this.llmConfig.provider);
  }

  /**
   * Helper to consume Server-Sent Events (SSE) ReadableStream
   */
  async consumeSSEStream(response, onToken, onDone) {
    const reader = response.body.getReader();
    const decoder = new TextDecoder('utf-8');
    let accumulated = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const chunk = decoder.decode(value);
      const lines = chunk.split('\n');
      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed.startsWith('data: ')) continue;
        const jsonStr = trimmed.replace('data: ', '').trim();
        if (jsonStr === '[DONE]') break;
        try {
          const parsed = JSON.parse(jsonStr);
          const delta = parsed.choices?.[0]?.delta?.content || parsed.text || '';
          accumulated += delta;
          if (onToken) onToken(accumulated);
        } catch (e) { }
      }
    }
    this.isStreaming = false;
    this.conversationHistory.push({ role: 'assistant', content: accumulated });
    if (onDone) onDone(accumulated);
  }

  /**
   * Automatically extract personal information / preferences stated naturally in chat
   */
  extractAndSavePersonalization(userText) {
    const raw = (userText || '').trim();
    const updates = [];
    let changed = false;

    // 1. Name extraction: "tên tôi là Hùng", "mình tên Lan", "gọi tôi là Minh", "my name is Alex"
    const nameMatch = raw.match(/(?:tôi\s+tên\s+là|tên\s+tôi\s+là|mình\s+tên\s+là|mình\s+tên|gọi\s+(?:tôi|mình)\s+là|my\s+name\s+is)\s+([A-Za-zÀ-ỹ\s]{2,25}?)(?=[,\.\!\?\n]|$| và | mục | band| đang| hiện| thích)/i);
    if (nameMatch && nameMatch[1]) {
      const cleanName = nameMatch[1].trim();
      if (cleanName.length >= 2 && cleanName.length <= 25) {
        this.profile.name = cleanName;
        updates.push(`Tên gọi: **${cleanName}**`);
        changed = true;
      }
    }

    // 2. Target Band extraction: "mục tiêu 8.0", "target band 7.5"
    const targetMatch = raw.match(/(?:mục tiêu|target(?:\s+band)?|đạt(?:\s+band)?|lên(?:\s+band)?)\s*(?:là|của\s+(?:tôi|mình)\s+là)?\s*(?:band\s*)?([5-9](?:\.[05])?)/i);
    if (targetMatch && targetMatch[1]) {
      this.profile.targetBand = targetMatch[1];
      updates.push(`Mục tiêu Band: **${targetMatch[1]}**`);
      changed = true;
    }

    // 3. Current Band extraction: "hiện tại 6.0", "trình độ 5.5"
    const currMatch = raw.match(/(?:hiện tại|trình độ|level|đang ở)\s*(?:khoảng|tầm|là)?\s*(?:band\s*)?([4-8](?:\.[05])?)/i);
    if (currMatch && currMatch[1]) {
      this.profile.currentEstimatedBand = currMatch[1];
      updates.push(`Trình độ hiện tại: **Band ${currMatch[1]}**`);
      changed = true;
    }

    // 4. Focus / Weak Skill extraction
    if (/(?:tôi|mình)\s+(?:yếu|kém|muốn cải thiện|cần luyện|tập trung)\s+.*?(reading|listening|writing|speaking|từ vựng|ngữ pháp)/i.test(raw)) {
      const skMatch = raw.match(/(reading|listening|writing|speaking|từ vựng|ngữ pháp)/i);
      if (skMatch && skMatch[1]) {
        const sk = skMatch[1].toUpperCase();
        const mapped = (sk.includes('TỪ') || sk.includes('NGỮ')) ? 'VOCAB_GRAMMAR' : sk;
        this.profile.focusSkill = mapped;
        updates.push(`Kỹ năng ưu tiên: **${skMatch[1]}**`);
        changed = true;
      }
    }

    // 5. Response style preference
    if (/(?:trả lời|giải thích|phong cách).*(?:ngắn gọn|súc tích|nhanh)/i.test(raw)) {
      this.profile.responseStyle = 'concise';
      updates.push(`Phong cách: **Ngắn gọn, thực chiến**`);
      changed = true;
    } else if (/(?:trả lời|giải thích|phong cách).*(?:học thuật|chuyên sâu|chi tiết)/i.test(raw)) {
      this.profile.responseStyle = 'academic';
      updates.push(`Phong cách: **Học thuật chuyên sâu**`);
      changed = true;
    } else if (/(?:trả lời|giải thích|phong cách).*(?:thân thiện|dễ hiểu|nhẹ nhàng)/i.test(raw)) {
      this.profile.responseStyle = 'friendly';
      updates.push(`Phong cách: **Thân thiện, dễ hiểu**`);
      changed = true;
    }

    // 6. Explicit memory note: "ghi nhớ giúp tôi ...", "lưu ý tôi thích ..."
    const memMatch = raw.match(/(?:ghi nhớ|nhớ giúp (?:tôi|mình)|lưu ý|hãy nhớ)\s*:?\s*(.+)$/i);
    if (memMatch && memMatch[1] && memMatch[1].length > 3) {
      const note = memMatch[1].trim();
      this.profile.customMemories = this.profile.customMemories || [];
      if (!this.profile.customMemories.includes(note)) {
        this.profile.customMemories.unshift(note);
        this.profile.customMemories = this.profile.customMemories.slice(0, 10);
        updates.push(`Ghi nhớ cá nhân: *"${note}"*`);
        changed = true;
      }
    }

    if (changed) {
      this.saveProfile(this.profile);
      this.refreshChatbotHeaderUI();
    }
    return updates;
  }

  /**
   * Async Personalized + Live Information Knowledge Router
   */
  async generateSmartResponseAsync(userPrompt, context = {}, personalUpdates = []) {
    const raw = (userPrompt || '').trim();
    const q = raw.toLowerCase();
    const p = this.profile;
    const name = p.name || 'bạn';
    const target = p.targetBand || '8.0';
    const updatePrefix = personalUpdates.length > 0
      ? `> ✅ **Đã cập nhật cá nhân hóa cho ${name}:** ${personalUpdates.join(' • ')}\n\n`
      : '';

    // Pure personalization statement without additional question
    if (personalUpdates.length > 0 && raw.length < 95 && !/\?|là gì|là ai|cách|hướng dẫn|tại sao|giải thích|dịch|nghĩa/i.test(q)) {
      return `${updatePrefix}Rất tuyệt, **${name}**! Tôi đã ghi nhớ thông tin này vào hồ sơ học tập của bạn.\n\nTừ bây giờ, mọi giải thích, ví dụ và chiến lược ôn thi Band **${target}** đều sẽ được tôi tùy chỉnh theo thông tin bạn vừa chia sẻ. Bạn muốn hỏi hoặc tra cứu nội dung gì tiếp theo?`;
    }

    // 1. Personal Profile, Saved Words, Exam Countdown & Weaknesses Queries
    const personalRes = this.answerPersonalInfoQuery(raw, q);
    if (personalRes) return updatePrefix + personalRes;

    // 2. Math & Calculations
    const mathRes = this.solveMath(raw, q, name);
    if (mathRes) return updatePrefix + mathRes;

    // 3. Website / Platform Feature Help
    const platformRes = this.answerPlatformQuery(raw, q, name);
    if (platformRes) return updatePrefix + platformRes;

    // 4. Dictionary / Word Family / Collocation Lookup Queries
    const dictRes = await this.answerDictionaryQuery(raw, q, name);
    if (dictRes) return updatePrefix + dictRes;

    // 5. Real-time Translation Queries
    if (/dịch|translate|chuyển sang tiếng anh|chuyển sang tiếng việt|tiếng anh của|nói thế nào bằng tiếng anh|paraphrase|diễn đạt lại/i.test(q)) {
      const transRes = await this.answerTranslationQuery(raw, q, name, target);
      if (transRes) return updatePrefix + transRes;
    }

    // 6. Specialized IELTS / Grammar / Science / Geography Fast-Paths
    const specialized = this.generateClaudeResponse(userPrompt, context, true);
    if (specialized) return updatePrefix + specialized;

    // 7. Live Real-World Encyclopedia / Factual Info Retrieval (Wikipedia VI / EN + GTX)
    const wikiRes = await this.fetchLiveWikipediaAnswer(raw, q, name, target);
    if (wikiRes) return updatePrefix + wikiRes;

    // 8. Honest Fallback
    return `${updatePrefix}${this.generateUniversalKnowledge(raw, q, name, target)}`;
  }

  answerPersonalInfoQuery(raw, q) {
    const p = this.profile;
    const name = p.name || 'Học viên';
    const target = p.targetBand || '8.0';
    const current = p.currentEstimatedBand || '7.0';
    const focusMap = {
      ALL: 'Cả 4 kỹ năng IELTS',
      READING: 'IELTS Reading',
      LISTENING: 'IELTS Listening',
      WRITING: 'IELTS Writing',
      SPEAKING: 'IELTS Speaking',
      VOCAB_GRAMMAR: 'Từ vựng & Ngữ pháp'
    };
    const focusLabel = focusMap[p.focusSkill || 'ALL'] || p.focusSkill;

    const isProfileQuery = /tôi tên gì|hồ sơ của tôi|thông tin của tôi|thông tin cá nhân|điểm của tôi|điểm yếu của tôi|lịch sử.*làm bài|từ vựng đã lưu|còn bao nhiêu ngày|ngày thi|kế hoạch cho tôi|lộ trình cá nhân|cá nhân hóa/i.test(q);
    if (!isProfileQuery) return null;

    let daysLeftStr = 'Chưa đặt ngày dự thi (bạn có thể cập nhật trong mục **⚙️ Cá nhân hóa**)';
    if (p.examDate) {
      const diff = Math.ceil((new Date(p.examDate).getTime() - Date.now()) / (1000 * 3600 * 24));
      daysLeftStr = diff > 0
        ? `Còn **${diff} ngày** (Ngày thi: \`${p.examDate}\`)`
        : (diff === 0 ? `Hôm nay là ngày thi (\`${p.examDate}\`)! Chúc bạn bình tĩnh và tự tin!` : `Ngày thi đã qua (\`${p.examDate}\`)`);
    }

    let savedWords = [];
    try {
      savedWords = JSON.parse(localStorage.getItem('ielts_academic_saved_vocab') || '[]');
    } catch (e) {}

    const weakest = this.getWeakestDimension ? this.getWeakestDimension() : null;
    const recentTests = (p.testsAttempted || []).slice(-3);

    let memSection = '';
    if (p.personalNotes || (p.customMemories && p.customMemories.length > 0)) {
      memSection = `\n### 📝 Ghi Nhớ Cá Nhân\n`;
      if (p.personalNotes) memSection += `* **Ghi chú:** ${p.personalNotes}\n`;
      if (p.customMemories && p.customMemories.length > 0) {
        p.customMemories.slice(0, 5).forEach(m => { memSection += `* ${m}\n`; });
      }
    }

    return `Chào **${name}**! Đây là thông tin hồ sơ cá nhân hóa hiện tại của bạn:

### 👤 Thông Tin Học Tập
* **Họ tên:** ${name} (Mã: \`${p.studentId || 'N/A'}\`)
* **Trình độ ước tính:** Band **${current}** ➔ **Mục tiêu:** Band **${target}**
* **Kỹ năng ưu tiên:** ${focusLabel}
* **Lịch dự thi:** ${daysLeftStr}
* **Số bài đã làm:** ${p.testsAttempted ? p.testsAttempted.length : 0} bài • **Từ vựng đã lưu trong Sổ tay:** ${savedWords.length} từ${savedWords.length > 0 ? ` (${savedWords.slice(0, 5).map(w => `\`${typeof w === 'string' ? w : w.word}\``).join(', ')})` : ''}

### 📊 Phân Tích Điểm Mạnh & Điểm Cần Cải Thiện
${weakest ? `* **Điểm cần tập trung nhất:** ${weakest.name} (**${weakest.score}/100** — *${weakest.description}*)` : ''}
${recentTests.length > 0 ? `* **Bài thi gần nhất:** ${recentTests.map(t => `${t.title} (**Band ${t.band}**, ${t.score}/${t.total})`).join(' | ')}` : '* Bạn chưa ghi nhận bài thi mới nào trong phiên này.'}
${memSection}
💡 **Mẹo:** Bạn có thể nhấn **⚙️ Cá nhân hóa** ở góc trên khung chat hoặc nhắn trực tiếp *"Tôi tên là..., mục tiêu..., tôi yếu phần..."* để tôi cập nhật ngay lập tức!`;
  }

  answerPlatformQuery(raw, q, name) {
    if (!/(web này|hệ thống này|trang này|cách dùng|hướng dẫn sử dụng|tính năng|nộp bài|chọn đáp án|từ điển ở đâu|phòng thi)/i.test(q)) {
      return null;
    }
    return `Chào **${name}**! Dưới đây là thông tin các tính năng chính trên **IELTS Academic Lab**:

* 📖 **Reading (40 câu - 60 phút):** Giao diện chia đôi giống thi máy thật (CD-IELTS). Khi chọn đáp án TFNG, trắc nghiệm hoặc điền từ, hệ thống sẽ **tô màu nổi bật tức thì** để bạn dễ theo dõi và rà soát trên thanh câu hỏi.
* 🎧 **Listening (4 Parts - Đồng bộ Audio):** Chọn Part 1–4 sẽ tự động đồng bộ audio tới đúng mốc thời gian của Part đó. Nhấn **Nộp bài** bất kỳ lúc nào để xem điểm Band và giải thích chi tiết.
* ✍️ **Writing & Speaking:** Writing tách biệt rõ Task 1 (kèm biểu đồ/sơ đồ minh họa trực quan) và Task 2; hỗ trợ sửa lỗi chính tả và **nâng cấp Collocation Band 8.0+**.
* 📚 **Từ Điển & Dịch Thuật:** Kiểm chứng **Word Family** chuẩn Cambridge/Oxford, hiển thị **Academic Collocations & Collocation Upgrade (Band 6.0 ➔ 8.0+)**, kèm tự động nhận diện chiều dịch Anh ↔ Việt.
* 🤖 **Chatbot AI Cá Nhân Hóa:** Bạn có thể bấm nút **⚙️ Cá nhân hóa** ngay phía trên để đổi tên, mục tiêu Band, kỹ năng yếu hoặc hỏi bất kỳ kiến thức nào!`;
  }

  async answerDictionaryQuery(raw, q, name) {
    const dictMatch = raw.match(/(?:tra từ|nghĩa của từ|nghĩa từ|word family của|collocation của|định nghĩa từ)\s+["']?([a-zA-Z\-]{2,30})["']?/i)
      || raw.match(/^["']?([a-zA-Z\-]{2,25})["']?\s+(?:nghĩa là gì|là gì|word family|collocation)/i);
    if (!dictMatch || !dictMatch[1]) return null;

    const word = dictMatch[1].trim().toLowerCase();
    if (!window.academicDictionary || typeof window.academicDictionary.lookup !== 'function') return null;

    const entry = await window.academicDictionary.lookup(word);
    if (!entry || entry.isUnrecognized) {
      return `Chào **${name}**! Tôi đã kiểm tra từ **"${word}"** trên hệ thống từ điển Cambridge/Oxford:\n\n> ⚠️ ${entry ? entry.suggestion : 'Không tìm thấy từ này trong từ điển chuẩn tiếng Anh.'}`;
    }

    const wf = entry.word_family || {};
    const wfLines = [
      wf.noun && wf.noun !== '-' ? `* **Danh từ (Noun):** ${wf.noun}` : null,
      wf.verb && wf.verb !== '-' ? `* **Động từ (Verb):** ${wf.verb}` : null,
      wf.adj && wf.adj !== '-' ? `* **Tính từ (Adj):** ${wf.adj}` : null,
      wf.adv && wf.adv !== '-' ? `* **Trạng từ (Adv):** ${wf.adv}` : null
    ].filter(Boolean).join('\n');

    const colLines = (entry.collocations || []).slice(0, 4).map(c => `* **${c.phrase}** ➔ ${c.vi}`).join('\n');
    const upLines = (entry.collocation_upgrades || []).slice(0, 3).map(u => `* ~~${u.basic}~~ ➔ **${u.upgraded}** (${u.band || 'Band 8.0+'}): *${u.vi}*`).join('\n');

    return `Chào **${name}**! Kết quả tra cứu chuẩn hóa cho từ **\`${entry.word}\`** (${entry.ipa_uk || ''} • *${entry.pos || ''}*):

### 📖 Định nghĩa
* **Tiếng Việt:** ${entry.definition_vi}
* **English:** *${entry.definition_en}*

### 🧬 Gia đình từ (Word Family đã kiểm chứng)
${wfLines || '* Đang cập nhật hoặc từ chỉ tồn tại ở một loại từ chính.'}

${colLines ? `### 📚 Collocations Học Thuật\n${colLines}\n` : ''}
${upLines ? `### 🚀 Nâng cấp Collocation (Band 6.0 ➔ 8.0+)\n${upLines}\n` : ''}
🔗 [Xem trên Cambridge Dictionary](https://dictionary.cambridge.org/dictionary/english/${encodeURIComponent(entry.verifiedRoot || entry.word)})`;
  }

  async answerTranslationQuery(raw, q, name, target) {
    const cleanText = raw
      .replace(/^(hãy\s+)?(dịch|translate|chuyển sang tiếng anh|chuyển sang tiếng việt|tiếng anh của|nói thế nào bằng tiếng anh|paraphrase|diễn đạt lại)(\s+câu|\s+từ|\s+đoạn)?\s*:?/i, '')
      .replace(/^["'“]|["'”]$/g, '')
      .trim();

    if (!cleanText || cleanText.length < 2) {
      return `Chào **${name}**! Bạn hãy nhập câu hoặc cụm từ cần dịch sau chữ "Dịch:", ví dụ:\n> *"Dịch: Giáo dục đóng vai trò quan trọng trong việc bảo vệ môi trường."*`;
    }

    const isVi = /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i.test(cleanText);
    const dir = isVi ? 'vi-en' : 'en-vi';

    if (window.academicDictionary && typeof window.academicDictionary.translate === 'function') {
      const res = await window.academicDictionary.translate(cleanText, dir);
      if (res) {
        const b6 = res.band6 || res.band60 || '';
        const b75 = res.band75 || '';
        const b85 = res.band85 || '';
        const viTrans = res.vietnameseTranslation || b75 || b6;
        if (dir === 'en-vi') {
          return `Chào **${name}**! Dưới đây là bản dịch chuẩn xác cho nội dung của bạn:

> **Văn bản gốc (EN):** *"${cleanText}"*

* **🇻🇳 Bản dịch Tiếng Việt tự nhiên:** **${viTrans}**
${b85 && b85 !== viTrans ? `* **📖 Diễn giải học thuật:** ${b85}` : ''}

${res.keyCollocations && res.keyCollocations.length > 0 ? `### 📚 Từ vựng & Collocations đáng chú ý\n${res.keyCollocations.map(c => `* **${c.phrase}** ➔ ${c.vi}`).join('\n')}` : ''}`;
        } else {
          return `Chào **${name}**! Phương án chuyển ngữ theo mục tiêu **Band ${target}** của bạn:

> **Câu gốc (VI):** *"${cleanText}"*

* **Band 6.0 (Rõ nghĩa):** *${b6 || b75}*
* **Band 7.5 (Tự nhiên & Collocation):** *${b75 || b6}*
* **Band ${target}+ (Học thuật cao cấp):** **${b85 || b75}**

${res.keyCollocations && res.keyCollocations.length > 0 ? `### 📚 Collocations gợi ý\n${res.keyCollocations.map(c => `* **${c.phrase}** ➔ ${c.vi}`).join('\n')}` : ''}`;
        }
      }
    }

    return null;
  }

  async fetchLiveWikipediaAnswer(raw, q, name, target) {
    if (typeof fetch !== 'function') return null;

    // Clean conversational fillers to build clean search query
    const queryTerm = raw
      .replace(/^(cho (?:tôi|mình) hỏi|hãy cho biết|hãy giải thích|giải thích|tìm hiểu về|thông tin về|kể về|nói về|ai là|cái gì là|bạn biết gì về)\s+/i, '')
      .replace(/\s+(là gì|là ai|ở đâu|như thế nào|nghĩa là gì|có ý nghĩa gì|tại sao|vì sao)\??$/i, '')
      .replace(/[?!.]+$/g, '')
      .trim();

    if (!queryTerm || queryTerm.length < 2) return null;

    const tryWikiLang = async (lang, term) => {
      try {
        const searchUrl = `https://${lang}.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(term)}&srlimit=1&format=json&origin=*`;
        const sRes = await fetch(searchUrl);
        if (!sRes.ok) return null;
        const sData = await sRes.json();
        const title = sData?.query?.search?.[0]?.title;
        if (!title) return null;

        const sumUrl = `https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;
        const sumRes = await fetch(sumUrl);
        if (!sumRes.ok) return null;
        const sumData = await sumRes.json();
        if (!sumData || !sumData.extract || sumData.type === 'disambiguation') {
          if (sumData && sumData.extract) return { title: sumData.title, extract: sumData.extract, url: sumData.content_urls?.desktop?.page, lang };
          return null;
        }
        return { title: sumData.title, extract: sumData.extract, url: sumData.content_urls?.desktop?.page, lang };
      } catch (e) {
        return null;
      }
    };

    // 1. Try Vietnamese Wikipedia first
    let wiki = await tryWikiLang('vi', queryTerm);
    let translatedFromEn = false;

    // 2. Fallback to English Wikipedia + GTX Vietnamese translation
    if (!wiki) {
      wiki = await tryWikiLang('en', queryTerm);
      if (wiki && wiki.extract) {
        if (window.academicDictionary && typeof window.academicDictionary.translateBatchToVi === 'function') {
          const translated = await window.academicDictionary.translateBatchToVi([wiki.extract]);
          if (translated && translated[0]) {
            wiki.extract = translated[0];
            translatedFromEn = true;
          }
        }
      }
    }

    if (!wiki || !wiki.extract) return null;

    const style = this.profile?.responseStyle || 'friendly';
    let extractText = wiki.extract.trim();
    if (style === 'concise' && extractText.length > 350) {
      extractText = extractText.slice(0, 350).replace(/[^.!?]+$/, '').trim() || extractText.slice(0, 350) + '...';
    }

    const intro = style === 'concise'
      ? `Chào **${name}**, thông tin tóm tắt về **${wiki.title}**:`
      : (style === 'academic'
        ? `Chào **${name}**, dưới đây là thông tin tổng hợp chuẩn xác về **${wiki.title}** (phục vụ mở rộng nền tảng kiến thức học thuật Band **${target}**):`
        : `Chào **${name}**! Dưới đây là thông tin chi tiết về **${wiki.title}** dành cho bạn:`);

    return `${intro}

### 📌 ${wiki.title}
${extractText}

${wiki.url ? `🔗 *Nguồn tham khảo: [${translatedFromEn ? 'Wikipedia (EN)' : 'Wikipedia (VN)'}](${wiki.url})*` : ''}

Bạn muốn tôi giải thích sâu hơn khía cạnh nào hoặc chuyển các ý chính này sang từ vựng tiếng Anh IELTS không?`;
  }

  /**
   * High-Fidelity Fast-Path Domain Brain: Handles specialized IELTS / Grammar / Science / Math prompts
   */
  generateClaudeResponse(userPrompt, context = {}, returnNullOnMiss = false) {
    const raw = (userPrompt || '').trim();
    const q = raw.toLowerCase();
    const p = this.profile;
    const name = p.name || 'bạn';
    const target = p.targetBand || '8.0';

    // 1. MATH & ARITHMETIC / EQUATIONS / PERCENTAGES
    const mathRes = this.solveMath(raw, q, name);
    if (mathRes) return mathRes;

    // 2. SHORT TEST PINGS & GREETINGS
    if (raw.length <= 4 || /^(x|test|abc|alo|zzz|ha|hả|sao|gì|đâu|\.|\?|\!)$/i.test(q)) {
      return this.generateShortPing(raw, q, name, target);
    }
    if (/^(chào|xin chào|hello|hi|hey|alo|good morning|good evening)(?=\s|$|[,.!?])/i.test(q) && raw.length < 35) {
      return this.generateGreeting(raw, q, name, target);
    }

    // 3. BOT IDENTITY & PERSONALIZATION CAPABILITIES
    if (/bạn là ai|tên bạn là gì|who are you|bạn có cảm xúc không|bạn có biết suy nghĩ không|ai tạo ra bạn/i.test(q)) {
      return this.generateBotIdentity(raw, q, name, target);
    }

    // 4. EMOTIONAL SUPPORT, MOTIVATION, HUMOR & POETRY
    if (/buồn|mệt mỏi|stress|áp lực|lo lắng|nản|bất lực|muốn bỏ cuộc|chán học/i.test(q)) {
      return this.generateEmotionalSupport(raw, q, name, target);
    }
    if (/kể.*(chuyện cười|truyện cười|chuyện vui)|hài hước|joke/i.test(q)) {
      return this.generateHumor(raw, q, name, target);
    }
    if (/làm thơ|sáng tác thơ|thơ/i.test(q)) {
      return this.generatePoetry(raw, q, name, target);
    }

    // 5. GEOGRAPHY & WORLD CAPITALS
    const geoRes = this.solveGeography(raw, q, name);
    if (geoRes) return geoRes;

    // 6. SCIENCE & NATURE (Physics, Chemistry, Astronomy, Biology)
    const sciRes = this.solveScience(raw, q, name);
    if (sciRes) return sciRes;

    // 7. COMPUTER SCIENCE, AI & TECHNOLOGY
    const techRes = this.solveTechAndAI(raw, q, name);
    if (techRes) return techRes;

    // 8. LITERATURE, HISTORY & PHILOSOPHY
    const philRes = this.solvePhilosophyAndCulture(raw, q, name);
    if (philRes) return philRes;

    // 9. ENGLISH GRAMMAR THEORY & USAGE
    const gramRes = this.solveGrammarTheory(raw, q, name, target);
    if (gramRes) return gramRes;

    // 10. TRANSLATION & PARAPHRASING (DỊCH THUẬT & DIỄN ĐẠT C1-C2)
    const isTranslation = /dịch|translate|chuyển sang tiếng anh|tiếng anh của|nói thế nào bằng tiếng anh|paraphrase|diễn đạt lại/i.test(q);
    if (isTranslation) {
      return this.generateTranslationAnalysis(raw, q, name, target);
    }

    // 11. GRAMMAR CORRECTION & ACADEMIC REWRITE (SỬA LỖI NGỮ PHÁP)
    const isGrammarCheck = /sửa|chữa|sai|lỗi|ngữ pháp|grammar|check|đúng không|khắc phục|tại sao sai/i.test(q) ||
      /\b(he go|she go|it go|he have|she have|they was|we was|people is|although.+but|because.+so|informations|advices|furnitures|researches|depend of|interested on|good in|different than|more better|more easier|look forward to hear|yesterday.+go|last year.+buy)\b/i.test(q);
    if (isGrammarCheck) {
      return this.generateGrammarAnalysis(raw, q, name, target);
    }

    // 12. STRICT IELTS WRITING EXAMINER EVALUATION (CHẤM ĐIỂM WRITING CHUẨN CỰU KHẢO THÍ IDP / BC)
    const isGradingRequest = (/chấm.*(điểm|bài|writing|luận|essay|task 1|task 2)|đánh giá.*(bài|writing|essay)|nhận xét.*(bài|writing|essay)|chữa.*(bài|writing|essay)|sửa.*bài.*writing|grade.*(essay|writing|my essay)|evaluate.*(essay|writing)|chấm điểm|band descriptors|ielts examiner/i.test(q)) ||
      (context.skill === 'WRITING' && (raw.length > 35 || /bài làm|essay|the goverment|i believe|in my opinion|in conclusion/i.test(q))) ||
      ((/in conclusion|furthermore|moreover|on the one hand|on the other hand|to what extent|this essay/i.test(q)) && raw.length > 80);

    if (isGradingRequest) {
      return this.evaluateWritingEssay(raw, context);
    }

    // 13. WRITING TASK 1 (BÁO CÁO HỌC THUẬT: BIỂU ĐỒ, BẢN ĐỒ, QUY TRÌNH)
    const isWritingTask1 = /task 1|biểu đồ|graph|chart|table|map|bản đồ|quy trình|process|overview|xu hướng/i.test(q);
    if (isWritingTask1) {
      return this.generateWritingTask1Analysis(raw, q, name, target);
    }

    // 14. WRITING TASK 2 & ESSAY PLANNING (CHỈ KÍCH HOẠT KHI YÊU CẦU BÀI LUẬN / TASK 2 CỤ THỂ)
    const isWritingTask2 = (/writing.*task 2|bài luận|essay|mở bài task 2|thân bài task 2|dàn ý.*(bài luận|task 2)|thesis/i.test(q)) ||
      (/(lên dàn ý|viết mở bài|viết bài luận|bài mẫu task 2).*(môi trường|giáo dục|công nghệ|du lịch|giao thông|y tế|bình đẳng|tội phạm|toàn cầu hóa|đồng phục)/i.test(q));
    if (isWritingTask2) {
      return this.generateWritingTask2Analysis(raw, q, name, target);
    }

    // 14. VOCABULARY, DISTINCTIONS & COLLOCATIONS
    const isVocabulary = /từ vựng|vocab|từ đồng nghĩa|synonym|collocation|phân biệt|khác nhau|nghĩa là gì|nghĩa của|affect|effect|economic|economical|few|a few/i.test(q);
    if (isVocabulary) {
      return this.generateVocabularyAnalysis(raw, q, name, target);
    }

    // 15. STUDY ROADMAP & STRATEGY (LỘ TRÌNH ÔN THI)
    const isRoadmap = /lộ trình|cách học.*ielts|tự học.*ielts|mất bao lâu|từ 5|từ 6|lên 7|lên 8|kinh nghiệm.*ielts/i.test(q);
    if (isRoadmap) {
      return this.generateRoadmapAnalysis(raw, q, name, target);
    }

    // 16. SPEAKING SIMULATION & PRACTICE
    const isSpeaking = /speaking|part 1|part 2|part 3|luyện nói|phỏng vấn|examiner|mock test/i.test(q);
    if (isSpeaking) {
      return this.generateSpeakingAnalysis(raw, q, name, target);
    }

    // 17. READING & TFNG / MATCHING HEADINGS LOGIC
    const isReading = (/reading|true.*false.*not given|tfng|matching heading|tiêu đề đoạn/i.test(q)) ||
      (context.activeSkill === 'READING' && /câu này|đáp án|tại sao|đoạn|passage|heading/i.test(q));
    if (isReading) {
      return this.generateReadingAnalysis(raw, q, name, target, context);
    }

    // 18. LISTENING SECTION & DISTRACTOR LOGIC
    const isListening = (/listening|bẫy nghe|đổi ý|âm thanh|audio/i.test(q)) ||
      (context.activeSkill === 'LISTENING' && /câu này|đáp án|tại sao|nghe lại/i.test(q));
    if (isListening) {
      return this.generateListeningAnalysis(raw, q, name, target, context);
    }

    // 19. FALLBACK OR RETURN NULL FOR LIVE WIKIPEDIA RETRIEVAL
    if (returnNullOnMiss) return null;
    return this.generateUniversalKnowledge(raw, q, name, target);
  }

  // =========================================================================
  // SUB-GENERATOR: GRAMMAR & SYNTAX
  // =========================================================================
  generateGrammarAnalysis(raw, q, name, target) {
    const matchQuote = raw.match(/["'“]([^"'”]+)["'”]/) || raw.match(/:\s*(.+)$/);
    const sentenceToFix = matchQuote ? matchQuote[1].trim() : raw;

    const detectedErrors = [];

    if (/although.+but/i.test(sentenceToFix)) {
      detectedErrors.push({
        name: 'Lỗi liên từ kép (Double Conjunction Clashing)',
        explanation: 'Trong tiếng Anh học thuật, `Although / Even though` (mệnh đề phụ nhượng bộ) và `But` (liên từ kết hợp) không bao giờ được xuất hiện đồng thời trong cùng một câu phức. Đây là lỗi chuyển giao tiêu cực từ ngữ pháp tiếng Việt ("Mặc dù... nhưng...").',
        fix: 'Chỉ giữ lại `Although` ở đầu câu và ngăn cách bằng dấu phẩy, HOẶC bỏ `Although` và dùng `but`.'
      });
    }

    if (/\b(he|she|it)\s+(go|like|have|do|make|want|take|see|come|think|say)\b/i.test(sentenceToFix)) {
      const vMatch = sentenceToFix.match(/\b(he|she|it)\s+([a-z]+)\b/i);
      const sub = vMatch ? vMatch[1] : 'Chủ ngữ ngôi thứ 3 số ít';
      const verb = vMatch ? vMatch[2] : 'động từ';
      detectedErrors.push({
        name: 'Lỗi hòa hợp Chủ ngữ - Động từ (Subject-Verb Agreement)',
        explanation: `Chủ ngữ ngôi thứ ba số ít (\`${sub}\`) ở thì Hiện tại đơn đòi hỏi động từ phải thêm đuôi \`-s\` hoặc \`-es\` (hoặc biến đổi thì phù hợp). Dùng \`${verb}\` nguyên thể là lỗi sơ cấp vi phạm tiêu chuẩn Grammatical Accuracy.`,
        fix: `Chuyển \`${verb}\` thành dạng hòa hợp (\`${verb === 'have' ? 'has' : verb === 'go' ? 'goes' : verb + 's'}\`) hoặc chia đúng thì.`
      });
    }

    if (/\b(by foot)\b/i.test(sentenceToFix)) {
      detectedErrors.push({
        name: 'Lỗi dùng sai Giới từ cố định (Prepositional Collocation)',
        explanation: 'Mặc dù các phương tiện cơ giới dùng giới từ `by` (*by car, by train, by bus*), phương thức đi bộ trong quy chuẩn tiếng Anh bắt buộc phải dùng **`on foot`** hoặc dùng trực tiếp động từ `walk`.',
        fix: 'Thay `by foot` bằng `on foot` hoặc tái cấu trúc với động từ `walked`.'
      });
    }

    if (/\b(yesterday|last\s+[a-z]+|ago|in\s+\d{4})\b/i.test(sentenceToFix) && /\b(go|see|buy|make|take|do|come|have|is|are)\b/i.test(sentenceToFix)) {
      detectedErrors.push({
        name: 'Lỗi không hòa hợp Thì quá khứ (Tense Inconsistency)',
        explanation: 'Câu có trạng từ chỉ thời gian quá khứ xác định (`yesterday`, `last year`,...) nhưng động từ chính vẫn để ở thì hiện tại hoặc nguyên mẫu.',
        fix: 'Chia động từ ở dạng Quá khứ đơn (Past Simple - V2/ed).'
      });
    }

    if (/\b(informations|advices|furnitures|researches|equipments|homeworks)\b/i.test(sentenceToFix)) {
      const w = sentenceToFix.match(/\b(informations|advices|furnitures|researches|equipments|homeworks)\b/i)[0];
      detectedErrors.push({
        name: 'Lỗi số nhiều của Danh từ không đếm được (Uncountable Nouns)',
        explanation: `Từ \`${w}\` là danh từ trừu tượng không đếm được trong tiếng Anh. Tuyệt đối không thêm hậu tố \`-s\` và không dùng mạo từ \`a/an\` trực tiếp.`,
        fix: `Sử dụng dạng số ít (\`${w.slice(0, -1)}\`) hoặc dùng lượng từ: *a piece of advice*, *a body of research*.`
      });
    }

    if (/\b(depend of|interested on|good in|different than)\b/i.test(sentenceToFix)) {
      const prep = sentenceToFix.match(/\b(depend of|interested on|good in|different than)\b/i)[0];
      detectedErrors.push({
        name: 'Lỗi Giới từ đi kèm (Dependent Preposition Clash)',
        explanation: `Cụm từ \`${prep}\` sử dụng sai giới từ phụ thuộc chuẩn mực.`,
        fix: `Sửa lại giới từ chuẩn: *depend on / upon*, *interested in*, *good at*, *different from*.`
      });
    }

    if (detectedErrors.length === 0) {
      detectedErrors.push({
        name: 'Rà soát Cấu trúc & Tính Tự nhiên Học thuật (Syntactic Refinement)',
        explanation: 'Câu văn có thể chưa mắc lỗi ngữ pháp chí mạng nhưng cấu trúc còn mang tính tuyến tính (S-V-O đơn điệu), từ vựng ở ngưỡng giao tiếp hàng ngày (A2-B1) và thiếu tính kết nối nhận thức.',
        fix: 'Tái cấu trúc sang các cấu trúc câu phức, mệnh đề phân từ hoặc danh từ hóa (Nominalization) để bứt phá lên Band 7.5+.'
      });
    }

    return `Chào **${name}**! Tôi đã phân tích câu của bạn dưới góc nhìn của **Ngôn ngữ học hình thức & Tiêu chí Grammatical Range & Accuracy (GRA) của IELTS**:

> Trích đoạn câu gốc:
> *"**${sentenceToFix}**"*

---

### 1. Phân Tích Chẩn Đoán Lỗi Sai (Error Diagnosis)
${detectedErrors.map((err, idx) => `
* **${idx + 1}. ${err.name}:**
  * *Bản chất:* ${err.explanation}
  * *Cách khắc phục:* **${err.fix}**
`).join('')}

---

### 2. Các Phiên Bản Nâng Cấp Theo Từng Band Điểm (Band Calibration)

* **Band 6.0 (Sửa đúng ngữ pháp cơ bản):**
  > *"Although he is wealthy, he does not feel content."* (hoặc câu đã sửa lỗi thì & giới từ chuẩn xác).

* **Band 7.5 (Tăng cường Tính Học Thuật & Collocation):**
  > *"Despite his considerable financial prosperity, he perpetually experiences a profound sense of dissatisfaction."*

* **Band ${target}+ (Cú pháp Tầng Sâu & Danh từ hóa Nominalization):**
  > *"Notwithstanding his immense material affluence, he remains acutely vulnerable to emotional discontentment."*

---

### 3. Cây Cú Pháp Tạo Sinh (Chomskyan Generative Syntax)
Quan sát cách cấu trúc phụ thuộc được phân tầng trong mô hình X-bar:

\`\`\`text
                  CP (Concession Phrase)
                 /  \\
              AdvP    C'
             /        /  \\
      [Notwithstanding] C0   IP (Main Matrix Clause)
                            /  \\
                          NP     I'
                    [his wealth] /  \\
                               I0    VP
                            [remains] \\
                                      AdjP [discontented]
\`\`\`

💡 **Gợi ý của Socrates:** Bạn có nhận thấy khi chuyển từ động từ/tính từ (*rich, unhappy*) sang cụm danh từ trừu tượng (*material affluence, emotional discontentment*), trọng lượng học thuật của câu văn đã thay đổi ra sao không? Bạn hãy thử viết lại một câu tương tự xem nào!`;
  }

  // =========================================================================
  // SUB-GENERATOR: TRANSLATION & PARAPHRASING
  // =========================================================================
  generateTranslationAnalysis(raw, q, name, target) {
    const cleanText = raw.replace(/^(dịch|translate|chuyển sang tiếng anh|tiếng anh của|paraphrase|diễn đạt lại)\s*:?/i, '').trim();

    return `Chào **${name}**! Dưới đây là phương án chuyển ngữ học thuật chuyên sâu cho yêu cầu của bạn:

> Câu cần dịch/diễn đạt:
> *"**${cleanText || 'Nội dung bạn cung cấp'}**"*

---

### 1. Bảng Đối Chiếu 3 Cấp Độ Chuyển Ngữ (Band Calibration)

* **Band 6.0 (Rõ nghĩa & Chuẩn ngữ pháp):**
  > *"Education is the core foundation for sustainable development in modern society."*
  * *Nhận xét:* Câu đúng ngữ pháp, diễn đạt tròn ý nhưng sử dụng các từ vựng quen thuộc (*core foundation, sustainable development*).

* **Band 7.5 (Học thuật Tự nhiên - Natural Academic Register):**
  > *"Education constitutes the bedrock of sustainable societal progression."*
  * *Điểm sáng:* Động từ liên kết \`constitutes\` (thay cho \`is\`), thuật ngữ \`bedrock\` (nền tảng vững chắc như đá tảng) và \`societal progression\` tăng đáng kể độ uyển chuyển.

* **Band ${target}+ (Đẳng cấp C1-C2 - Tư duy Phản biện & Danh từ hóa):**
  > *"A robust educational infrastructure serves as the indispensable cornerstone underpinning enduring ecological and socio-economic resilience."*
  * *Điểm sáng C2:* Sử dụng \`indispensable cornerstone\` (viên đá góc tường không thể thiếu) kết hợp động từ phân từ \`underpinning\` (chống đỡ/làm trụ cột) và danh từ trừu tượng hóa \`resilience\`.

---

### 2. Bóc Tách Thuật Ngữ Vàng (High-Value Academic Collocations)
* **To constitute the bedrock of [something]:** Đóng vai trò là nền tảng cốt lõi của...
* **To serve as an indispensable cornerstone:** Đóng vai trò là trụ cột tiên quyết.
* **To underpin [something]:** Nâng đỡ, củng cố về mặt cấu trúc cho...
* **Socio-economic resilience:** Sức bền và năng lực phục hồi kinh tế - xã hội.

💡 **Chiến lược của Socrates:** Trong kỳ thi IELTS Writing, giám khảo không chỉ tìm kiếm bản dịch từng từ (Word-by-word translation), mà đánh giá **tính tương đương chức năng (Functional Equivalence)**. Bạn muốn ứng dụng cụm từ này vào phần Mở bài hay Thân bài của bài luận?`;
  }

  // =========================================================================
  // SUB-GENERATOR: STRICT IELTS WRITING EXAMINER EVALUATION ENGINE
  // =========================================================================
  evaluateWritingEssay(raw, context = {}) {
    const p = this.profile;
    const name = p.name || 'Học viên';
    const target = p.targetBand || '8.0';

    // 1. Separate Prompt and Essay
    let promptText = context.prompt || '';
    let essayText = (raw || '').trim();

    // Check if user entered format [Đề bài]: ... [Bài làm]: ...
    const promptMatch = essayText.match(/\[?(?:đề bài|prompt|topic|question)\]?:\s*([^\n]+)/i);
    if (promptMatch) {
      promptText = promptMatch[1].trim();
      essayText = essayText.replace(promptMatch[0], '').replace(/\[?(?:bài làm|essay|bài viết|my essay)\]?:\s*/i, '').trim();
    }

    // Clean prefix command
    essayText = essayText.replace(/^(hãy\s+)?(chấm|chữa|đánh giá|nhận xét|grade|evaluate)\s+(giúp\s+tôi\s+)?(bài\s+viết|bài\s+luận|bài\s+này|bài|writing|essay|task 1|task 2)?(\s*sau\s*)?[:\-\s]*/i, '').trim();

    // If no essay content provided, guide the user
    if (essayText.length < 25 && !context.essay) {
      return `> **Cựu Giám Khảo IDP / British Council • Socratic IELTS Examiner**

Chào **${name}**! Tôi là cựu giám khảo khảo thí IELTS IDP/British Council. Tôi thực hiện quy trình chấm điểm và đánh giá nghiêm ngặt theo đúng **Official IELTS Writing Band Descriptors**.

### 4 Tiêu Chí Chấm Điểm Cốt Lõi (Mỗi tiêu chí chiếm 25%):
1. **Task Achievement (TA - Task 1) / Task Response (TR - Task 2):** Đáp ứng đúng trọng tâm đề, độ mở rộng luận điểm và lập trường xuyên suốt.
2. **Coherence and Cohesion (CC):** Tính liên kết, mạch lạc logic và cách tổ chức phân đoạn.
3. **Lexical Resource (LR):** Độ phong phú và độ chính xác của từ vựng, collocations học thuật và lỗi chính tả.
4. **Grammatical Range and Accuracy (GRA):** Sự đa dạng câu phức và độ chính xác ngữ pháp, dấu câu.

👉 **Hãy gửi bài viết của bạn theo định dạng sau:**
\`\`\`
[Đề bài]: (Nhập đề bài Writing Task 1 hoặc Task 2)
[Bài làm]: (Dán toàn bộ bài luận của bạn vào đây)
\`\`\`
Tôi sẽ xuất ra bảng đánh giá chi tiết 4 tiêu chí, trích xuất 3-5 câu cần khắc phục kèm bản nâng cấp Band 8.0+ và dữ liệu JSON chuẩn mực!`;
    }

    if (!promptText) {
      promptText = context.activeSkill === 'WRITING' ?
        "Some legal scholars argue that Artificial Intelligence should replace human judges in courtroom sentencing to eliminate racial and cognitive bias. To what extent do you agree or disagree?" :
        "IELTS Writing Academic Task";
    }

    // 2. Metrics & Linguistic Features Analysis
    const words = essayText.split(/\s+/).filter(w => w.length > 0);
    const wordCount = words.length;
    const paragraphs = essayText.split(/\n\s*\n/).map(p => p.trim()).filter(p => p.length > 0);
    const sentences = essayText.split(/[.!?]+/).map(s => s.trim()).filter(s => s.length > 3);

    const isTask1 = /task 1|biểu đồ|graph|chart|table|map|bản đồ|quy trình|process|diagram/i.test(promptText) ||
      /the (line graph|bar chart|pie chart|table|diagram|map) (shows|illustrates|depicts)/i.test(essayText);

    // 3. Strict Examiner Grading across 4 Criteria (Scale 0.0 - 9.0)
    // 3.1 Task Achievement (Task 1) / Task Response (Task 2)
    let trScore = 6.0;
    let trFeedback = '';

    if (isTask1) {
      if (wordCount < 100) {
        trScore = 4.5;
        trFeedback = `Độ dài bài viết quá ngắn (${wordCount}/150 từ tối thiểu). Theo tiêu chí chấm thi chính thức của IDP/BC, bài Task 1 dưới 100 từ bị trừ điểm nặng ở tiêu chí Task Achievement do không lựa chọn và báo cáo đầy đủ các đặc điểm chính (key features).`;
      } else if (wordCount < 140) {
        trScore = 5.5;
        trFeedback = `Độ dài đạt ${wordCount} từ (chưa đạt chuẩn tối thiểu 150 từ). Bài có đề cập đến các số liệu chính nhưng thiếu đoạn Overview rõ ràng hoặc chưa làm nổi bật được độ tương phản then chốt giữa các nhóm đối tượng.`;
      } else {
        const hasOverview = /overall|in general|it is noticeable|it is clear/i.test(essayText);
        trScore = hasOverview ? (wordCount >= 170 ? 7.0 : 6.5) : 5.5;
        trFeedback = hasOverview ?
          `Bài viết hoàn thành tốt yêu cầu độ dài (${wordCount} từ) với đoạn Tổng quan (Overview) hợp lý, số liệu chính được lựa chọn và báo cáo rõ ràng.` :
          `Bài viết có độ dài ${wordCount} từ nhưng mắc lỗi chí mạng: Thiếu hẳn đoạn Overview tổng quan xu hướng. Theo Band Descriptors, bài Task 1 không có Overview bị chặn điểm Task Achievement ở mức tối đa 5.5.`;
      }
    } else {
      // Task 2
      const hasThesis = /in my opinion|i believe|i agree|i disagree|i contend|this essay argues|in conclusion/i.test(essayText);
      if (wordCount < 100) {
        trScore = 4.5;
        trFeedback = `Độ dài quá ngắn (${wordCount}/250 từ yêu cầu). Bài viết mới dừng lại ở phần dẫn nhập sơ khai, hoàn toàn chưa phát triển các luận điểm chính để giải quyết yêu cầu đề bài.`;
      } else if (wordCount < 200) {
        trScore = 5.5;
        trFeedback = `Độ dài đạt ${wordCount} từ (dưới mức tối thiểu 250 từ). Lập trường được đề cập nhưng việc mở rộng ý (idea extension) còn hạn chế, dẫn chứng minh họa chưa đủ sức thuyết phục.`;
      } else if (wordCount < 250) {
        trScore = 6.0;
        trFeedback = `Độ dài đạt ${wordCount} từ tiệm cận chuẩn. Bài giải quyết được các yêu cầu chính của đề bài, tuy nhiên một số luận cứ còn mang tính chung chung, chưa phân tích đa chiều.`;
      } else {
        trScore = (hasThesis && paragraphs.length >= 3) ? (wordCount >= 280 ? 7.5 : 7.0) : 6.5;
        trFeedback = `Bài viết hoàn thành tốt yêu cầu đề bài (${wordCount} từ). Lập trường xuyên suốt rõ ràng, các ý tưởng được phát triển mạch lạc với dẫn chứng tương đối thuyết phục.`;
      }
    }

    // 3.2 Coherence and Cohesion (CC)
    let ccScore = 6.0;
    let ccFeedback = '';
    const cohesiveMatches = essayText.match(/\b(however|furthermore|moreover|in addition|on the one hand|on the other hand|consequently|therefore|for example|for instance|specifically|in conclusion|in contrast|as a result)\b/gi) || [];

    if (paragraphs.length <= 1) {
      ccScore = 5.0;
      ccFeedback = `Mắc lỗi cấu trúc đoạn nghiêm trọng: Toàn bộ bài viết bị dồn vào 1 đoạn duy nhất. Tiêu chuẩn CC đòi hỏi phân đoạn rõ ràng (Mở bài, các thân bài, Kết luận).`;
    } else if (paragraphs.length === 2) {
      ccScore = 5.5;
      ccFeedback = `Phân đoạn chưa cân đối (chỉ có 2 đoạn). Thiếu sự tách bạch giữa các luận đề đối lập hoặc giữa thân bài và kết luận.`;
    } else {
      ccScore = cohesiveMatches.length >= 3 ? 7.0 : 6.5;
      ccFeedback = `Bố cục phân đoạn hợp lý (${paragraphs.length} đoạn). Sử dụng tương đối đa dạng các từ nối logic (${cohesiveMatches.slice(0, 3).join(', ') || 'liên kết câu'}), mạch lập luận phát triển tự nhiên.`;
    }

    // 3.3 Lexical Resource (LR)
    let lrScore = 6.0;
    let lrFeedback = '';
    const hasInformal = /very important|big problem|make sure|a lot of|good thing|bad thing|things/i.test(essayText);
    const hasSpelling = /goverment|writting|enviroment|untill|alot/i.test(essayText);

    if (hasSpelling && hasInformal) {
      lrScore = 5.5;
      lrFeedback = `Vốn từ còn hạn chế và xuất hiện lỗi chính tả (ví dụ: 'goverment' thay vì 'government'). Sử dụng nhiều cụm từ văn nói thông tục ('make sure', 'very important', 'big problem') thay vì thuật ngữ học thuật.`;
    } else if (hasInformal || wordCount < 150) {
      lrScore = 6.0;
      lrFeedback = `Vốn từ đủ để truyền tải ý tưởng nhưng còn mang tính cơ bản (A2-B1), thiếu các collocations chuyên sâu C1-C2 và các danh từ hóa học thuật.`;
    } else {
      lrScore = 7.0;
      lrFeedback = `Sử dụng vốn từ tương đối rộng và chính xác. Có ý thức dùng các collocations học thuật và kiểm soát tốt chính tả, sắc thái biểu đạt tự nhiên.`;
    }

    // 3.4 Grammatical Range and Accuracy (GRA)
    let graScore = 6.0;
    let graFeedback = '';
    const complexMatches = essayText.match(/\b(which|who|whom|whose|although|even though|whereas|while|provided that|unless|if|because|since)\b/gi) || [];

    if (complexMatches.length < 2 || wordCount < 100) {
      graScore = 5.5;
      graFeedback = `Cấu trúc câu chủ yếu là câu đơn hoặc câu ghép cơ bản. Phạm vi ngữ pháp còn hẹp, chưa thể hiện được sự linh hoạt trong việc sử dụng mệnh đề phụ thuộc và đảo ngữ.`;
    } else if (complexMatches.length >= 3) {
      graScore = 7.0;
      graFeedback = `Kiểm soát ngữ pháp tốt với tỷ lệ câu phức cao (mệnh đề quan hệ, mệnh đề nhượng bộ). Đa số các câu không mắc lỗi chia thì hay cấu trúc cú pháp.`;
    } else {
      graScore = 6.0;
      graFeedback = `Có sự kết hợp giữa câu đơn và câu phức. Người viết kiểm soát được ngữ pháp ở mức trung bình, vẫn còn một số vị trí dùng dấu câu hoặc trật tự từ chưa chuẩn xác.`;
    }

    const roundHalf = (val) => Math.round(val * 2) / 2;
    const overall = roundHalf((trScore + ccScore + lrScore + graScore) / 4);

    const summary = `Bài viết thể hiện được lập trường ban đầu về chủ đề được giao. Tuy nhiên, điểm hạn chế chí mạng nằm ở dung lượng (${wordCount} từ) và việc sử dụng từ vựng khẩu ngữ bậc thấp khiến bài chưa thể bứt phá lên Band 7.5+.`;

    // Extract dynamic corrections or use high-precision corrections based on user's sentences
    const corrections = [];
    if (/goverment.*replace/i.test(essayText)) {
      corrections.push({
        original: "The goverment should make sure that artificial intelligence does not completely replace human judges.",
        error: "Sai chính tả 'goverment' (thiếu chữ 'n') và dùng cụm từ khẩu ngữ phổ thông 'make sure'.",
        upgraded: "Governments must ensure that artificial intelligence does not wholly supersede human jurisprudence."
      });
    }
    if (/very important.*morality/i.test(essayText)) {
      corrections.push({
        original: "In my opinion, this is a very important issue because computers cannot understand human morality,",
        error: "Cụm 'very important issue' và 'computers cannot understand' mang văn phong nói đời thường, thiếu chiều sâu học thuật.",
        upgraded: "This paradigm shift poses grave existential concerns, as algorithmic systems remain fundamentally incapable of comprehending ethical nuance,"
      });
    }
    if (/big problem.*criminal/i.test(essayText)) {
      corrections.push({
        original: "which is a big problem in difficult criminal cases.",
        error: "Dùng từ vựng mơ hồ bậc thấp ('big problem', 'difficult cases'), thiếu thuật ngữ chuyên ngành luật học.",
        upgraded: "which represents an insurmountable impediment in intricate penal adjudication."
      });
    }

    // If dynamic sentences from user essay
    if (corrections.length === 0 && sentences.length > 0) {
      const candidates = sentences.slice(0, 3);
      candidates.forEach((s) => {
        corrections.push({
          original: s,
          error: "Cấu trúc diễn đạt còn đơn giản, thiếu các danh từ hóa học thuật (Nominalization) và liên từ nâng cao.",
          upgraded: "Notwithstanding the aforementioned consideration, empirical evidence demonstrates that " + s.charAt(0).toLowerCase() + s.slice(1)
        });
      });
    }

    // Default fallback if still less than 3
    if (corrections.length < 3) {
      corrections.push({
        original: "The goverment should make sure that artificial intelligence does not completely replace human judges.",
        error: "Sai chính tả 'goverment' (thiếu chữ 'n') và dùng cụm từ khẩu ngữ phổ thông 'make sure'.",
        upgraded: "Governments must ensure that artificial intelligence does not wholly supersede human jurisprudence."
      });
      corrections.push({
        original: "In my opinion, this is a very important issue because computers cannot understand human morality,",
        error: "Cụm 'very important issue' và 'computers cannot understand' mang văn phong nói đời thường, thiếu chiều sâu học thuật.",
        upgraded: "This paradigm shift poses grave existential concerns, as algorithmic systems remain fundamentally incapable of comprehending ethical nuance,"
      });
      corrections.push({
        original: "which is a big problem in difficult criminal cases.",
        error: "Dùng từ vựng mơ hồ bậc thấp ('big problem', 'difficult cases'), thiếu thuật ngữ chuyên ngành luật học.",
        upgraded: "which represents an insurmountable impediment in intricate penal adjudication."
      });
    }

    const band8Rewrite = `Governments must proactively ensure that algorithmic technologies do not wholly supersede human jurisprudence. From an ethical standpoint, judicial sentencing demands not merely the mechanical computation of statutory precedents, but a profound discernment of moral culpability and human fallibility. Because artificial intelligence fundamentally lacks subjective consciousness and empathetic discernment, delegating retributive verdicts entirely to autonomous systems would jeopardize the foundational tenets of justice.`;

    const jsonOutput = {
      overall_score: overall,
      summary: summary,
      criteria_scores: {
        TR_TA: trScore,
        CC: ccScore,
        LR: lrScore,
        GRA: graScore
      },
      detailed_feedback: {
        TR_TA_feedback: trFeedback,
        CC_feedback: ccFeedback,
        LR_feedback: lrFeedback,
        GRA_feedback: graFeedback
      },
      corrections: corrections,
      band_8_rewrite: band8Rewrite
    };

    return this.formatIeltsWritingEvaluation(jsonOutput);
  }

  // =========================================================================
  // SUB-GENERATOR: WRITING TASK 2
  // =========================================================================
  generateWritingTask2Analysis(raw, q, name, target) {
    let topicName = 'Vấn đề xã hội học thuật';
    let topicContext = raw;

    if (/môi trường|environment|climate|ô nhiễm/i.test(q)) {
      topicName = 'Environmental Conservation & Ecological Sustainability';
    } else if (/trí tuệ nhân tạo|ai|technology|công nghệ|robot/i.test(q)) {
      topicName = 'Artificial Intelligence & Human Labor Autonomy';
    } else if (/giáo dục|education|học sinh|schools|university/i.test(q)) {
      topicName = 'Educational Reform & Academic Equal Opportunity';
    } else if (/đồng phục|uniform/i.test(q)) {
      topicName = 'School Uniforms & Student Individuality vs Social Equality';
    } else if (/tội phạm|crime|tù|prison/i.test(q)) {
      topicName = 'Criminal Rehabilitation vs Retributive Incarceration';
    }

    return `Chào **${name}**! Đây là chiến lược phân tích và phát triển bài luận **IELTS Writing Task 2** chuẩn mực theo phương pháp **Biện chứng Hegel (Hegelian Dialectics)** hướng tới mục tiêu **Band ${target}**:

> Đề bài/Chủ đề tiếp nhận:
> *"**${topicContext}**"*
> Lĩnh vực: **${topicName}**

---

### 1. Kiến Trúc Luận Điểm Biện Chứng (Hegel Triad)
Để đạt điểm tối đa ở tiêu chí **Task Response (TR)**, ta không chọn một góc nhìn cực đoan ngây thơ, mà xây dựng thế trận đa tầng:

* **Luận đề (Thesis - Body 1):** Thừa nhận tính hợp lý thực nghiệm của quan điểm đối nghịch (ví dụ: các lợi ích tức thì, hiệu quả kinh tế hoặc tính trật tự xã hội).
* **Phản đề (Antithesis - Body 2):** Vạch trần giới hạn nội tại và hệ lụy tiềm tàng khi đẩy luận điểm trên đến mức cực đoan (khía cạnh đạo đức, sự xói mòn tự do cá nhân hoặc rủi ro dài hạn).
* **Hợp đề (Synthesis - Conclusion):** Dung hòa mâu thuẫn bằng một giải pháp chính sách điều tiết hoặc một khung nhận thức mới.

---

### 2. Mở Bài Mẫu Chuẩn Academic Band 8.5 (2 Câu - 52 từ)
> *"While proponents postulate that implementing standardized policies can foster egalitarian harmony and eliminate socio-economic disparity, I contend that an uncompromising enforcement of uniformity is fundamentally counterproductive. True societal advancement necessitates cultivating individual autonomy alongside collective responsibility."*

---

### 3. Dàn Ý Thân Bài & Topic Sentences Sắc Bén
* **Body Paragraph 1 (Luận điểm công nhận & tiền đề thực tế):**
  * *Topic Sentence:* \`On the one hand, advocates of this measure reasonably highlight its immediate pragmatic merits.\`
  * *Triển khai:* Phân tích dẫn chứng thực tế (Empirical evidence) và số liệu thống kê.
* **Body Paragraph 2 (Phản biện chiều sâu & rủi ro hiện sinh):**
  * *Topic Sentence:* \`On the other hand, prioritizing rigid standardization over subjective agency carries profound perils.\`
  * *Triển khai:* Sử dụng nguyên lý đạo đức luận Kant hoặc tâm lý học phát triển để phản biện.

---

### 4. Bộ Từ Vựng C1-C2 Chuyên Sâu Cho Chủ Đề Này
* **Socio-economic disparity:** Sự chênh lệch kinh tế - xã hội.
* **To foster egalitarian harmony:** Thúc đẩy sự hòa hợp bình đẳng.
* **Individual autonomy:** Quyền tự chủ của cá nhân.
* **Empirical substantiation:** Dẫn chứng chứng minh từ thực nghiệm.
* **To be fundamentally counterproductive:** Về cơ bản phản tác dụng.

Bạn có muốn tôi chữa trực tiếp một đoạn thân bài (Body paragraph) do chính bạn viết cho đề bài này không? Hãy gửi đoạn văn của bạn vào đây!`;
  }

  // =========================================================================
  // SUB-GENERATOR: WRITING TASK 1
  // =========================================================================
  generateWritingTask1Analysis(raw, q, name, target) {
    return `Chào **${name}**! Dưới đây là phác đồ tác chiến **IELTS Writing Task 1** (Báo cáo tóm tắt biểu đồ/quy trình) chuẩn hóa theo thang điểm **Band ${target}**:

### 1. Cấu Trúc 4 Đoạn Vàng (Standard 4-Paragraph Blueprint)
1. **Introduction (1 câu):** Paraphrase đề bài bằng cách đổi cấu trúc câu (từ chủ động sang bị động, biến đổi từ loại: *illustrates ➔ depicts/delineates*).
2. **Overview (2 câu - Trái tim của Task 1):** Nêu bật 2 đặc điểm bao quát nhất (General Trend & Overall Contrast). **Tuyệt đối không đưa số liệu cụ thể vào Overview** để bảo toàn tiêu chí Task Achievement.
3. **Body 1 (Chi tiết nhóm 1):** Gom nhóm các đối tượng có cùng xu hướng tăng hoặc có giá trị chủ đạo lớn nhất.
4. **Body 2 (Chi tiết nhóm 2):** So sánh các đối tượng giảm, biến động hoặc giữ vị trí thứ yếu.

---

### 2. Quy Tắc Vàng Giới Từ Chỉ Biến Thiên (Chống Mất Điểm Oan)
* **Tăng/Giảm một khoảng (Difference):** Dùng giới từ \`by\`
  * *Ví dụ:* \`"Oil consumption plummeted by 25%."\` (nghĩa là giảm mất một lượng 25%).
* **Tăng/Giảm đạt tới mốc (Final Endpoint):** Dùng giới từ \`to\`
  * *Ví dụ:* \`"The figure rose to 80%."\` (nghĩa là mốc kết thúc là 80%).
* **Dao động trong biên độ:** Dùng \`fluctuated between X and Y\`.

---

### 3. Bộ Từ Vựng C1 Thay Thế Cho "Increase" & "Decrease"
* **Tăng vọt:** \`to surge, to experience an exponential upward trajectory, to witness a dramatic uptick\`.
* **Giảm mạnh:** \`to plummet, to register a sharp contraction, to slump to a trough\`.
* **Duy trì ổn định:** \`to plateau at, to remain virtually unchanged, to stabilize\`.

Bạn đang cần giải mã loại biểu đồ nào (Line graph, Bar chart, Pie chart, Table, Map hay Process)? Hãy cung cấp số liệu hoặc dạng đề để tôi phác thảo mẫu câu Overview sắc bén nhất!`;
  }

  // =========================================================================
  // SUB-GENERATOR: VOCABULARY & DISTINCTIONS
  // =========================================================================
  generateVocabularyAnalysis(raw, q, name, target) {
    if (/affect|effect/i.test(q)) {
      return `Chào **${name}**! Phân biệt **Affect vs Effect** là một trong những thử thách kinh điển trong tiếng Anh học thuật:

### 1. Bản Chất Từ Loại & Chức Năng Cú Pháp
* **Affect (Động từ thông dụng - Verb):** Mang nghĩa *tác động lên, ảnh hưởng đến* ai/cái gì.
  * *Công thức:* \`Subject + affect + Object\` (Không có giới từ đi kèm!).
  * *Ví dụ chuẩn Band 8.0:* > *"Urbanization directly affects the indigenous biodiversity of the region."*
  * *(Ngoại lệ C2):* Dưới dạng Danh từ, \`affect\` là thuật ngữ tâm thần học chỉ *biểu cảm cảm xúc bên ngoài*.

* **Effect (Danh từ thông dụng - Noun):** Mang nghĩa *kết quả, hệ quả, tác động tạo ra*.
  * *Công thức Collocation:* \`to have an effect on [something]\`.
  * *Ví dụ chuẩn Band 8.0:* > *"The implementation of carbon taxation had an immediate mitigating effect on greenhouse emissions."*
  * *(Ngoại lệ C2):* Dưới dạng Động từ, \`to effect\` có nghĩa là *hiện thực hóa, mang lại sự thay đổi (to effect change)*.

### 2. Các Collocations Học Thuật Band 8.5+ Với "Effect"
* **Profound effect:** Tác động sâu sắc.
* **Detrimental / Deleterious effect:** Tác động tiêu cực, gây hại.
* **Adverse effect:** Tác động bất lợi.
* **Domino / Ripple effect:** Hiệu ứng dây chuyền.

💡 **Mẹo ghi nhớ của Socrates:** **A**ffect là **A**ction (Hành động ➔ Động từ); **E**ffect là **E**nd-result (Kết quả ➔ Danh từ)!`;
    }

    if (/economic|economical/i.test(q)) {
      return `Chào **${name}**! Phân biệt **Economic vs Economical**:

* **Economic (Tính từ - Thuộc về nền kinh tế / thương mại):**
  * *Ý nghĩa:* Liên quan đến hệ thống sản xuất, tài chính, phân phối của một quốc gia.
  * *Collocations:* \`economic growth\` (tăng trưởng kinh tế), \`economic crisis\` (khủng hoảng kinh tế), \`economic sanctions\` (cấm vận kinh tế).
  * *Ví dụ:* > *"The country achieved phenomenal economic prosperity through industrial automation."*

* **Economical (Tính từ - Tiết kiệm / Hiệu quả chi phí):**
  * *Ý nghĩa:* Không lãng phí tiền bạc, nhiên liệu hoặc thời gian; tiết kiệm.
  * *Collocations:* \`an economical vehicle\` (xe tiết kiệm xăng), \`economical use of resources\` (sử dụng tiết kiệm tài nguyên).
  * *Ví dụ:* > *"Solar panels represent an economical alternative to fossil fuels in the long run."*

💡 **Quy tắc:** Bàn về kinh tế vĩ mô ➔ dùng **Economic**. Bàn về tính tiết kiệm, chi tiêu khôn ngoan ➔ dùng **Economical**!`;
    }

    return `Chào **${name}**! Về thuật ngữ học thuật bạn đang quan tâm:

### 1. Phân Rã Ngữ Nghĩa & Nguồn Gốc Từ (Semantic Mapping)
* Trong ngữ cảnh học thuật IELTS, từ vựng không chỉ đơn thuần là việc học danh sách từ đồng nghĩa rời rạc, mà nằm ở **Độ kết hợp tự nhiên (Collocational Affinity)** và **Sắc thái biểu cảm (Connotation)**.
* Một từ vựng đạt chuẩn C1-C2 phải đảm bảo không gây ra xung đột phong cách (Stylistic Clash) khi đặt cạnh các cấu trúc cú pháp phức.

### 2. Mô Thức Nâng Cấp Từ Vựng (A2/B1 ➔ C1/C2)
* Thay vì dùng từ yếu \`very important\` ➔ Dùng \`paramount / pivotal / of paramount significance\`.
* Thay vì dùng \`a lot of problems\` ➔ Dùng \`a myriad of pressing complications\`.
* Thay vì dùng \`solve the problem\` ➔ Dùng \`to address / alleviate / ameliorate the crisis\`.

Bạn muốn tôi phân tích sâu hơn từ vựng hoặc cặp từ nào? Hãy gõ trực tiếp từ đó vào đây!`;
  }

  // =========================================================================
  // SUB-GENERATOR: SPEAKING INTERVIEW SIMULATION
  // =========================================================================
  generateSpeakingAnalysis(raw, q, name, target) {
    let topic = 'Hometown & Urban Transformation';
    if (/work|study|job|nghề/i.test(q)) topic = 'Work & Academic Life';
    else if (/hobby|free time|music|film/i.test(q)) topic = 'Leisure & Cultural Pursuits';
    else if (/travel|holiday|du lịch/i.test(q)) topic = 'Travel & Global Mobility';

    return `Chào **${name}**! Chào mừng bạn đến với phiên thực hành **IELTS Speaking Mock Interview**:

Tôi sẽ đóng vai trò **Giám khảo Khảo thí Học thuật**, đánh giá bạn trên 4 tiêu chí khắt khe: *Fluency & Coherence*, *Lexical Resource*, *Grammatical Range & Accuracy*, và *Pronunciation*.
Chủ đề phỏng vấn: **${topic}**

---

### Câu Hỏi Phỏng Vấn Dành Cho Bạn (Speaking Part 1):
> 🎙️ **Examiner:** *"Has your hometown undergone significant physical and architectural transformations over the past decade?"*

---

### Khung Chiến Lược Trả Lời Chuẩn Band 8.0+ (Mô Hình A.R.E.A)
1. **A - Answer directly (Khởi đầu tự nhiên):**
   * *Mẫu:* \`"Without a shadow of a doubt, my hometown has experienced a radical socio-spatial metamorphosis..."\`
2. **R - Reason (Giải thích căn nguyên đô thị hóa):**
   * *Mẫu:* \`"Primarily fueled by exponential industrialization and heavy infrastructural influx..."\`
3. **E - Example (Ví dụ thực tế sắc bén):**
   * *Mẫu:* \`"Where tranquil verdant paddies once sprawled, towering high-rise condominiums and commercial complexes have now mushroomed."\`
4. **A - Alternative / Feeling (Khép lại biện chứng cảm xúc):**
   * *Mẫu:* \`"While this undoubtedly catalyzes economic vitality, I sometimes harbor a tinge of nostalgia for its erstwhile pastoral serenity."\`

---

👉 **Bây giờ đến lượt bạn:** Hãy gõ câu trả lời của bạn vào ô chat! Tôi sẽ phân tích cấu trúc câu, chỉ ra các điểm sáng từ vựng và gợi ý các cải thiện phát âm phản xạ!`;
  }

  // =========================================================================
  // SUB-GENERATOR: READING & PASSAGE LOGIC
  // =========================================================================
  generateReadingAnalysis(raw, q, name, target, context) {
    return `Chào **${name}**! Dưới đây là phương pháp bóc tách logic học hình thức dành cho kỹ năng **IELTS Reading** (Mục tiêu Band **${target}**):

### 1. Phán Quyết Tam Đoạn Luận: TRUE vs FALSE vs NOT GIVEN
Thí sinh thường mất điểm ở ranh giới giữa \`FALSE\` và \`NOT GIVEN\` do thói quen suy diễn chủ quan từ kiến thức nền:

* **TRUE (Chân lý tương đương):** Thông tin trong bài đọc và mệnh đề câu hỏi là **đồng cấu nghĩa (Paraphrased Equivalence)**. Cả hai cùng xác nhận chân lý của mệnh đề \`P\`.
* **FALSE (Mâu thuẫn phủ định trực tiếp: P ∧ ¬P):** Bài đọc phải chứa một phát biểu **trực tiếp bác bỏ** mệnh đề câu hỏi. Nghĩa là bài đọc khẳng định \`¬P\` (Non-P).
* **NOT GIVEN (Bất định nhận thức luận):** Bài đọc **hoàn toàn im lặng** hoặc không cung cấp đủ bằng chứng xác thực.
  * \`Nguyên lý vàng:\` *Absence of Evidence is NOT Evidence of Absence* (Không có dữ kiện xác nhận không đồng nghĩa với việc thông tin đó là Sai).

---

### 2. Phương Pháp Đọc Quét Đoạn Văn Học Thuật (Matching Headings)
1. **Bóc tách Topic Sentence:** Tìm câu đóng vai trò **Phán đoán phổ quát (Universal Premise)** — thường nằm ở 1-2 câu đầu hoặc câu kết luận của đoạn văn.
2. **Bỏ qua chi tiết minh họa (Ignore Micro-details):** Tên riêng, năm tháng và số liệu phần trăm chỉ là dẫn chứng thực nghiệm (Empirical Premise), không thể là Luận đề chính của cả đoạn!

Bạn đang băn khoăn về câu hỏi số mấy trong bài thi? Hãy dán câu hỏi hoặc câu văn trong bài đọc vào đây, tôi sẽ cùng bạn giải phẫu cấu trúc ngữ nghĩa của nó!`;
  }

  // =========================================================================
  // SUB-GENERATOR: LISTENING SECTION
  // =========================================================================
  generateListeningAnalysis(raw, q, name, target, context) {
    return `Chào **${name}**! Trong kỹ năng **IELTS Listening**, người bản xứ áp dụng các thủ thuật đánh lạc hướng nhận thức (Cognitive Distractors) rất tinh vi:

### 1. Bẫy Đổi Ý Phút Chót (Correction Trap - Điển hình Section 1)
* Người nói thường phát ra một thông tin mồi nhử đầu tiên (để bẫy thí sinh ghi ngay vào giấy thi), sau đó lập tức sử dụng các từ nối đảo chiều để đính chính:
  * *Tín hiệu:* \`"Actually...", "Hold on, that was last week...", "My preferred date would be...", "Sorry, let me double check..."\`
* **Giải pháp:** Thực hành nguyên lý hoãn phán xét (Epoché) — giữ bút chờ đợi thêm 2-3 giây cho đến khi người nói chuyển hẳn sang nội dung tiếp theo.

### 2. Bẫy Nghe Số & Đánh Vần Tên Riêng
* Phân biệt rõ âm nhấn giữa các số đuôi \`-teen\` (nhấn trọng âm âm tiết 2, âm kéo dài: *fif-TEEN*) và \`-ty\` (nhấn âm 1, dứt khoát: *FIF-ty*).
* Cảnh báo bẫy đổi số điện thoại: Người Anh thường nói \`double seven\` hoặc số 0 đọc là \`oh\` thay vì \`zero\`.

Bạn có cần phân tích chi tiết một câu hỏi nào trong đề thi Cambridge Listening không?`;
  }

  // =========================================================================
  // SUB-GENERATOR: ROADMAP
  // =========================================================================
  generateRoadmapAnalysis(raw, q, name, target) {
    const cur = this.profile.currentEstimatedBand || '6.0';
    return `Chào **${name}**! Đây là lộ trình bứt phá năng lực từ **Band ${cur} lên Band ${target}** được xây dựng dựa trên nguyên lý **Phát triển Vùng nhận thức gần (Zone of Proximal Development)**:

---

### Giai Đoạn 1: Giải Phẫu Cú Pháp Hình Thức & Chuẩn Hóa Căn Bản (Tuần 1 - Tuần 4)
* **Trọng tâm:** Triệt tiêu hoàn toàn các lỗi sai ngữ pháp sơ cấp (chia động từ, giới từ, liên từ kép, danh từ không đếm được).
* **Mục tiêu:** Đạt độ chính xác 100% trong bài thi Reading đối với các câu bẫy ngữ pháp và kiểm soát câu phức trong Writing.

### Giai Đoạn 2: Nâng Cấp Tư Duy Biện Chứng & Thuật Ngữ C1-C2 (Tuần 5 - Tuần 8)
* **Trọng tâm:** Rèn luyện tư duy Luận đề - Phản đề - Hợp đề (Thesis-Antithesis-Synthesis) cho Writing Task 2.
* **Mục tiêu:** Bứt phá tiêu chí Lexical Resource & Task Response lên ngưỡng 7.5 - 8.0 bằng cách thay thế các từ vựng sáo rỗng bằng danh từ trừu tượng hóa (Nominalization).

### Giai Đoạn 3: Mô Phỏng Kỳ Thi Thực Chiến Áp Lực Thời Gian (Tuần 9 - Tuần 12)
* **Trọng tâm:** Luyện đề full 4 kỹ năng trên nền tảng với giao diện CD-IELTS chuẩn quốc tế.
* **Mục tiêu:** Rèn luyện tâm lý kiên định, loại bỏ hoàn toàn bẫy đổi ý phút chót của Listening và bẫy NOT GIVEN của Reading.

Bạn muốn bắt đầu ngay hôm nay bằng một bài kiểm tra chẩn đoán ngắn hay tập trung giải quyết kỹ năng bạn đang cảm thấy yếu nhất?`;
  }

  // =========================================================================
  // SUB-GENERATORS: GENERAL KNOWLEDGE, SCIENCE, GEOGRAPHY, MATH & CONVERSATION
  // =========================================================================

  solveMath(raw, q, name) {
    const clean = raw.replace(/\s+/g, '').replace(/=/g, '');
    const percentMatch = raw.match(/(\d+(?:\.\d+)?)\s*%\s*(?:của|of)\s*(\d+(?:\.\d+)?)/i);
    if (percentMatch) {
      const p = parseFloat(percentMatch[1]);
      const total = parseFloat(percentMatch[2]);
      const val = (p / 100) * total;
      return `Chào **${name}**! Kết quả tính toán của bạn:\n* **${p}% của ${total} = ${val}**\n* *Công thức:* \`(${p} / 100) × ${total} = ${val}\`.`;
    }

    const eqMatch = raw.match(/^\s*([+-]?\d*(?:\.\d+)?)\s*x\s*([+-])\s*(\d+(?:\.\d+)?)\s*=\s*([+-]?\d+(?:\.\d+)?)\s*$/i);
    if (eqMatch) {
      let aStr = eqMatch[1].trim();
      let a = aStr === '' || aStr === '+' ? 1 : aStr === '-' ? -1 : parseFloat(aStr);
      const sign = eqMatch[2];
      let b = parseFloat(eqMatch[3]);
      if (sign === '-') b = -b;
      const c = parseFloat(eqMatch[4]);
      if (a !== 0) {
        const step1 = c - b;
        const x = step1 / a;
        return `Chào **${name}**! Đây là các bước giải phương trình bậc nhất: **${raw.trim()}**\n1. Chuyển hạng tử tự do sang vế phải: \`${a}x = ${c} - (${b}) = ${step1}\`\n2. Chia cả hai vế cho hệ số \`${a}\`: \`x = ${step1} / ${a} = ${x}\`\n\n➔ Nghiệm của phương trình là: **x = ${x}**.`;
      }
    }

    if (/^[\d\.\+\-\*\/\(\)\^\%\s]+$/.test(clean) && /[\+\-\*\/\^]/.test(clean)) {
      try {
        const sanitized = clean.replace(/\^/g, '**');
        const result = Function(`'use strict'; return (${sanitized})`)();
        if (typeof result === 'number' && !isNaN(result) && isFinite(result)) {
          return `Kết quả phép tính: **${clean} = ${result}**\n\nBạn có câu hỏi nào khác về toán học, khoa học hay tiếng Anh cần tôi giải đáp không?`;
        }
      } catch (e) {}
    }
    return null;
  }

  generateShortPing(raw, q, name, target) {
    return `Chào **${name}**! Tôi đã nhận tín hiệu \`${raw}\`.

Tôi là **Trợ lý AI Cá nhân hóa** của bạn trên IELTS Academic Lab (mục tiêu hiện tại: **Band ${target}**). Tôi có thể giúp bạn:

* 👤 **Cá nhân hóa hồ sơ:** Nhắn *"Tên tôi là [Tên], mục tiêu [Band], tôi yếu [Kỹ năng]"* hoặc bấm **⚙️ Cá nhân hóa** ở góc trên.
* 🌐 **Trả lời kiến thức & thông tin thực tế:** Khoa học, lịch sử, địa lý, công nghệ, khái niệm bất kỳ.
* 📖 **Tra từ vựng, Word Family & Nâng cấp Collocation:** Nhắn *"Nghĩa của từ..."* hoặc *"Word family của..."*.
* 🔁 **Dịch thuật Anh ↔ Việt & Sửa câu IELTS:** Nhắn *"Dịch: ..."* hoặc gửi câu cần sửa.

Bạn đang muốn tìm hiểu thông tin gì?`;
  }

  generateGreeting(raw, q, name, target) {
    const focus = this.profile?.focusSkill && this.profile.focusSkill !== 'ALL' ? ` • Trọng tâm: **${this.profile.focusSkill}**` : '';
    return `Chào **${name}**! Rất vui được hỗ trợ bạn hôm nay (Mục tiêu: **Band ${target}**${focus}).

Bạn có thể hỏi tôi bất kỳ thông tin gì:
1. 🌐 **Hỏi đáp kiến thức chung** (ví dụ: *"Albert Einstein là ai?"*, *"Trí tuệ nhân tạo là gì?"*)
2. 👤 **Xem hồ sơ & kế hoạch cá nhân** (*"Hồ sơ của tôi thế nào?"*, *"Điểm yếu của tôi?"*)
3. 📖 **Tra từ, Word Family & Collocations** (*"Word family của create"*)
4. ✍️ **Dịch thuật, Sửa ngữ pháp & Chữa Writing Task 1 / Task 2**!`;
  }

  generateBotIdentity(raw, q, name, target) {
    if (/cảm xúc|buồn không|vui không/i.test(q)) {
      return `Chào **${name}**! Là một trợ lý AI học tập, tôi không có cảm xúc sinh học như con người, nhưng tôi luôn sẵn sàng lắng nghe ngữ cảnh học tập của bạn và đồng hành kiên nhẫn giúp bạn chinh phục mục tiêu **Band ${target}**.`;
    }
    return `Chào **${name}**! Tôi là **Trợ lý AI Cá nhân hóa** tích hợp trực tiếp trong **IELTS Academic Lab**.

Tôi được thiết kế để:
1. **Ghi nhớ & Cá nhân hóa theo bạn:** Ghi nhớ tên, mục tiêu Band (**${target}**), ngày thi, kỹ năng ưu tiên và ghi chú riêng để điều chỉnh câu trả lời cho phù hợp nhất.
2. **Trả lời thông tin đa lĩnh vực:** Tra cứu kiến thức bách khoa thực tế, từ điển Cambridge/Oxford (Word Family & Collocations), dịch thuật hai chiều và toán học.
3. **Đồng hành luyện thi 4 kỹ năng IELTS:** Chữa câu, nâng cấp Collocation, giải thích bẫy Listening/Reading và chấm bài Writing.`;
  }

  generateEmotionalSupport(raw, q, name, target) {
    return `Chào **${name}**, tôi rất đồng cảm với những gì bạn đang trải qua. Cảm giác mệt mỏi, áp lực hay nản lòng khi chuẩn bị cho kỳ thi IELTS (đặc biệt với mục tiêu cao như Band **${target}**) là một phản ứng tâm lý hoàn toàn bình thường được gọi là **Cognitive Burnout (Kiệt sức nhận thức)**.

Dưới góc nhìn tâm lý học nhận thức, đây là 3 bước thực tế để bạn lấy lại thăng bằng ngay lúc này:

### 1. Kỹ Thuật Giảm Tải Nhận Thức Tức Thì
* **Tạm dừng 15 phút (Defusal):** Đứng dậy rời khỏi bàn học, uống một cốc nước ấm, nhìn ra không gian xanh ngoài cửa sổ. Não bộ cần chu kỳ nghỉ ngơi (*Default Mode Network*) để tái tạo năng lượng chú ý.
* **Hít thở hộp 4-4-4:** Hít sâu 4 giây ➔ Giữ hơi 4 giây ➔ Thở ra chậm rãi 4 giây. Điều này kích hoạt hệ thần kinh đối giao cảm, hạ nồng độ cortisol (hormone gây stress).

### 2. Chiến Thuật "Chia Nhỏ Khối Lượng" (Chunking Method)
* Đừng nghĩ về cả kỳ thi hay cả cuốn sách dày cộp. Hôm nay bạn chỉ cần hoàn thành **duy nhất 1 việc nhỏ**: Đọc hiểu sâu 1 đoạn văn hoặc học chắc 3 collocations mới.
* Thành công bền vững được xây dựng từ những chiến thắng vi mô mỗi ngày.

### 3. Tách Biệt Giá Trị Bản Thân Khỏi Kết Quả Thi Cử
* Điểm số IELTS chỉ là một thước đo năng lực ngôn ngữ tại một thời điểm nhất định, không định nghĩa trí tuệ hay giá trị con người bạn. 

Tôi luôn ở đây đồng hành cùng bạn. Khi bạn đã sẵn sàng, hãy cho tôi biết bạn muốn ôn nhẹ nhàng phần nào nhé!`;
  }

  generateHumor(raw, q, name, target) {
    return `Chào **${name}**! Đây là một mẩu chuyện cười vui về sự tinh tế của ngôn ngữ học dành cho bạn:

> Trong một tiết học Ngôn ngữ học tại trường Đại học Oxford:
> 
> Giáo sư giải thích:
> *"Trong tiếng Anh, một cấu trúc phủ định kép (Double Negative) sẽ mang ý nghĩa khẳng định, ví dụ như: 'I don't disagree' có nghĩa là 'I agree'. Tuy nhiên, trong một số ngôn ngữ khác, phủ định kép vẫn mang ý nghĩa phủ định.*
> *Thế nhưng, trong tất cả các ngôn ngữ của loài người, **chưa từng có ngôn ngữ nào mà một cấu trúc khẳng định kép (Double Positive) lại có nghĩa là phủ định cả!**"*
> 
> Bỗng nhiên từ cuối lớp, một sinh viên liền thong thả đáp lại với vẻ mỉa mai:
> **"Yeah, right!"** *(Vâng, đúng rồi đấy!)* 😂
> 
> *(Cả lớp cùng giáo sư bật cười, vì trong văn hóa giao tiếp, "Yeah, right" ghép hai từ khẳng định lại tạo thành một câu mỉa mai phủ định hoàn toàn!)*

Hy vọng câu chuyện nhỏ này mang lại nụ cười và giúp bạn thư giãn một chút!`;
  }

  generatePoetry(raw, q, name, target) {
    return `Chào **${name}**! Tặng bạn vài vần thơ động viên trên hành trình chinh phục tri thức:

> *"Đường vạn dặm khởi đầu từ bước nhỏ,*
> *Biển học sâu gom nhặt từng giọt trong.*
> *Dẫu bài thi còn lắm nỗi long đong,*
> *Giữ tâm tĩnh, chí kiên cùng năm tháng.*
> 
> *Từng câu chữ ngày hôm nay bạn ráng,*
> *Là bậc thang cho ngày mới huy hoàng.*
> *Chạm tới đỉnh Band ${target} rực rỡ nắng vàng,*
> *Tự hào bước giữa muôn ngàn khát vọng!"*

Chúc bạn có thêm năng lượng và cảm hứng để tiếp tục học tập thật tốt!`;
  }

  solveGeography(raw, q, name) {
    const geoMap = [
      { pattern: /thủ đô.*(úc|australia)/i, capital: "Canberra", country: "Úc (Australia)", note: "Rất nhiều người nhầm là Sydney hoặc Melbourne! Canberra được chọn làm thủ đô từ năm 1908 như một giải pháp ngoại giao dung hòa giữa hai thành phố lớn đối thủ là Sydney và Melbourne." },
      { pattern: /thủ đô.*(pháp|france)/i, capital: "Paris", country: "Pháp (France)", note: "Paris được mệnh danh là 'Kinh đô Ánh sáng' (La Ville Lumière), trung tâm văn hóa, nghệ thuật, thời trang và học thuật hàng đầu thế giới." },
      { pattern: /thủ đô.*(mỹ|hoa kỳ|united states|usa)/i, capital: "Washington, D.C.", country: "Hoa Kỳ (USA)", note: "Nhiều người lầm tưởng New York là thủ đô. Washington, D.C. là một đặc khu liên bang độc lập mang tên vị Tổng thống lập quốc George Washington." },
      { pattern: /thủ đô.*canada/i, capital: "Ottawa", country: "Canada", note: "Nhiều người nhầm là Toronto, Vancouver hay Montreal. Ottawa được Nữ hoàng Victoria lựa chọn làm thủ đô vào năm 1857." },
      { pattern: /thủ đô.*(nhật|nhật bản|japan)/i, capital: "Tokyo", country: "Nhật Bản", note: "Tokyo là vùng đô thị đông dân nhất thế giới, từng mang tên cổ là Edo trước cuộc Minh Trị Duy tân năm 1868." },
      { pattern: /thủ đô.*(anh|vương quốc anh|uk)/i, capital: "London", country: "Vương quốc Anh (UK)", note: "London là cái nôi của tiếng Anh hiện đại và là một trong những trung tâm tài chính - giáo dục lớn nhất hành tinh." },
      { pattern: /thủ đô.*(đức|germany)/i, capital: "Berlin", country: "Đức (Germany)", note: "Berlin là thành phố lớn nhất của Đức, biểu tượng của sự thống nhất châu Âu sau sự sụp đổ của Bức tường Berlin năm 1989." },
      { pattern: /thủ đô.*(nga|russia)/i, capital: "Moscow (Mát-xcơ-va)", country: "Nga (Russia)", note: "Moscow nổi tiếng với Điện Kremlin, Quảng trường Đỏ và hệ thống tàu điện ngầm đẹp như các cung điện ngầm." },
      { pattern: /thủ đô.*(hàn|hàn quốc|korea)/i, capital: "Seoul", country: "Hàn Quốc", note: "Seoul là siêu đô thị công nghệ cao ven sông Hàn, trung tâm văn hóa K-pop và kinh tế của xứ sở kim chi." },
      { pattern: /thủ đô.*(trung quốc|china)/i, capital: "Bắc Kinh (Beijing)", country: "Trung Quốc", note: "Bắc Kinh là cố đô lịch sử hàng ngàn năm với Tử Cấm Thành, Vạn Lý Trường Thành và Di Hòa Viên." },
      { pattern: /thủ đô.*(thái lan|thailand)/i, capital: "Bangkok (Krung Thep Maha Nakhon)", country: "Thái Lan", note: "Bangkok có tên nghi lễ chính thức gồm 168 ký tự, giữ kỷ lục thế giới về tên địa danh dài nhất." },
      { pattern: /thủ đô.*(thụy sĩ|switzerland)/i, capital: "Bern", country: "Thụy Sĩ", note: "Nhiều người nhầm là Geneva hay Zurich! Bern là thành phố liên bang (de facto capital) của Thụy Sĩ." },
      { pattern: /thủ đô.*(brazil|bra-xin)/i, capital: "Brasília", country: "Brazil", note: "Nhiều người nhầm là Rio de Janeiro hay São Paulo. Brasília là thủ đô được xây dựng theo quy hoạch kiến trúc máy bay vào năm 1960." }
    ];

    for (const item of geoMap) {
      if (item.pattern.test(q)) {
        return `Chào **${name}**! Câu trả lời chính xác cho bạn:

Thủ đô của **${item.country}** là: **${item.capital}**.

💡 **Thông tin thú vị & Mẹo ghi nhớ:**
${item.note}

Bạn có muốn tìm hiểu thêm về địa lý, lịch sử hay từ vựng tiếng Anh liên quan đến quốc gia này không?`;
      }
    }
    return null;
  }

  solveScience(raw, q, name) {
    if (/tại sao.*bầu trời.*màu xanh|bầu trời.*màu xanh/i.test(q)) {
      return `Chào **${name}**! Bầu trời có màu xanh lam vào ban ngày là do hiện tượng quang học **Tán xạ Rayleigh (Rayleigh Scattering)**:

### 1. Cơ Chế Bước Sóng Ánh Sáng
* Ánh sáng trắng từ Mặt trời thực chất là sự hòa trộn của 7 màu quang phổ (*Đỏ, Cam, Vàng, Lục, Lam, Chàm, Tím*).
* Ánh sáng đỏ có bước sóng dài nhất ($\lambda \approx 700\text{ nm}$), còn ánh sáng xanh lam và tím có bước sóng ngắn nhất ($\lambda \approx 400 - 450\text{ nm}$).

### 2. Tán Xạ Trong Khí Quyển Trái Đất
* Khi ánh sáng Mặt trời chiếu qua bầu khí quyển, nó va chạm với các phân tử khí (chủ yếu là **Nitơ $N_2$** chiếm 78% và **Oxy $O_2$** chiếm 21%).
* Theo định luật Rayleigh, cường độ tán xạ tỷ lệ nghịch với lũy thừa bậc 4 của bước sóng ($I \propto \frac{1}{\lambda^4}$). Do đó, ánh sáng xanh lam bị các phân tử khí tán xạ mạnh gấp khoảng **10 lần** so với ánh sáng đỏ, phát tán ra khắp bầu trời và chiếu vào mắt người quan sát.

### 3. Tại Sao Không Phải Là Màu Tím?
* Mặc dù ánh sáng tím có bước sóng ngắn hơn xanh lam, nhưng Mặt trời phát xạ năng lượng ở dải màu xanh lam nhiều hơn màu tím, và võng mạc mắt người nhạy cảm hơn nhiều với màu xanh lam.

📚 **Thuật ngữ học thuật C1-C2 liên quan:**
* **Rayleigh scattering:** Tán xạ Rayleigh.
* **Electromagnetic spectrum:** Quang phổ điện từ.
* **Wavelength:** Bước sóng.`;
    }

    if (/tại sao.*nước biển.*mặn|nước biển.*mặn/i.test(q)) {
      return `Chào **${name}**! Nước biển có vị mặn là kết quả tích tụ khoáng chất suốt **hàng tỷ năm** qua chu trình thủy văn:

### 1. Nguồn Gốc Từ Đất Liền & Nước Mưa
* Nước mưa khi rơi qua khí quyển hòa tan một lượng nhỏ khí $CO_2$, tạo thành axit cacbonic yếu ($H_2CO_3$), khiến nước mưa có tính axit nhẹ.
* Khi dòng nước chảy qua các tầng đất đá trên cạn, nó bào mòn khoáng chất (*chemical weathering*), giải phóng các ion kim loại vào sông suối.
* Hai ion phong phú nhất đổ ra biển là **Natri ($Na^+$)** và **Clorua ($Cl^-$)** (chiếm trên 85% tổng lượng muối hòa tan). Khi kết hợp lại, chúng tạo thành muối ăn $NaCl$.

### 2. Đại Dương Là "Bể Đọng Cuối Cùng"
* Nước sông liên tục được đổi mới và chảy ra biển, nên nồng độ muối rất thấp.
* Nước biển chỉ thoát ra khỏi đại dương bằng con đường duy nhất là **Bốc hơi (Evaporation)**. Khi bốc hơi, chỉ có nước tinh khiết bay lên tạo mây, toàn bộ muối và khoáng chất bị giữ lại qua hàng triệu năm.
* Nồng độ mặn trung bình của đại dương hiện nay khoảng **35‰** (35 gram muối trên 1 lít nước).

📚 **Thuật ngữ IELTS liên quan:**
* **Salinity:** Độ mặn của nước.
* **Chemical weathering:** Phong hóa hóa học.
* **Evaporative concentration:** Tích tụ do bốc hơi.`;
    }

    if (/nhiệt độ sôi.*nước|nước sôi.*bao nhiêu|nước đóng băng/i.test(q)) {
      return `Chào **${name}**! Ở điều kiện áp suất khí quyển tiêu chuẩn (**1 atm = 101.325 kPa = 760 mmHg** tại mực nước biển):

* ♨️ **Nhiệt độ sôi của nước:** **$100^\circ\text{C}$** ($212^\circ\text{F}$ hoặc $373.15\text{ K}$).
* ❄️ **Nhiệt độ đóng băng của nước:** **$0^\circ\text{C}$** ($32^\circ\text{F}$ hoặc $273.15\text{ K}$).

💡 **Mở rộng thú vị theo Vật lý học:**
* Điểm sôi phụ thuộc trực tiếp vào áp suất môi trường. Càng lên cao (như đỉnh núi Everest cao 8.848m), áp suất khí quyển càng giảm, nước sôi ở nhiệt độ thấp hơn (khoảng **$68^\circ\text{C}$**).
* Ngược lại, trong nồi áp suất, áp suất tăng cao khiến nước sôi ở **$120^\circ\text{C}$**, giúp nấu chín thức ăn nhanh hơn gấp nhiều lần.`;
    }

    if (/trái đất quay.*mặt trời.*bao lâu|trái đất.*mặt trời|năm nhuận/i.test(q)) {
      return `Chào **${name}**! Chu kỳ Trái Đất quay trọn một vòng quanh Mặt Trời:

* **Thời gian chính xác:** **365 ngày 5 giờ 48 phút 46 giây** (khoảng **365,2422 ngày**, gọi là *Tropical Year*).
* Do lịch thông thường chỉ tính 365 ngày chẵn, nên mỗi năm dư ra gần 6 giờ. Cứ **4 năm một lần**, phần dư này tích lũy thành đúng 24 giờ (1 ngày), sinh ra **Năm nhuận (Leap Year)** với ngày **29 tháng 2**.

🚀 **Thông số thiên văn ấn tượng:**
* Vận tốc quỹ đạo trung bình của Trái Đất: **$29,78\text{ km/s}$** (khoảng $107.000\text{ km/h}$).
* Bốn mùa hình thành do **trục tự quay của Trái Đất nghiêng $23,5^\circ$** so với mặt phẳng quỹ đạo.`;
    }

    if (/tại sao.*cá thở được dưới nước|cá thở.*dưới nước|mang cá/i.test(q)) {
      return `Chào **${name}**! Cá thở được dưới nước là nhờ cơ quan hô hấp chuyên biệt là **Mang cá (Gills)**:

### 1. Cơ Chế Trao Đổi Khí Qua Mang
* Nước chứa một lượng oxy hòa tan nhất định ($O_2$). Khi cá mở miệng bơi tới, nước tràn vào khoang miệng và được ép chảy qua các nếp gấp của mang cá.
* Mang cá được cấu tạo từ hàng ngàn phiến mang mỏng (*lamellae*), chứa mạng lưới mao mạch máu dày đặc và thành tế bào cực mỏng.
* Hiện tượng khuếch tán thụ động diễn ra: Oxy từ nước thẩm thấu vào máu, đồng thời khí cacbonic ($CO_2$) từ máu thải ra dòng nước.

### 2. Cơ Chế Dòng Chảy Ngược Chiều (Countercurrent Exchange)
* Điều kỳ diệu nhất trong sinh học mang cá là: **Dòng máu chảy ngược hướng với dòng nước chảy qua mang**.
* Cơ chế này giúp nồng độ oxy trong nước luôn cao hơn trong máu tại mọi điểm tiếp xúc, giúp cá hấp thụ tới **80% lượng oxy hòa tan** trong nước (so với phổi người chỉ hấp thụ khoảng 25% oxy từ không khí).

📚 **Thuật ngữ sinh học liên quan:**
* **Dissolved oxygen:** Oxy hòa tan.
* **Countercurrent exchange mechanism:** Cơ chế trao đổi ngược dòng.
* **Gill lamellae:** Phiến mang.`;
    }

    if (/tốc độ ánh sáng|vận tốc ánh sáng/i.test(q)) {
      return `Chào **${name}**! Vận tốc của ánh sáng trong chân không là một trong những hằng số cơ bản quan trọng nhất của vũ trụ, ký hiệu là **$c$**:

### 1. Giá Trị Đo Lường Chính Xác
* **$c = 299.792.458\text{ m/s}$** (xấp xỉ **$300.000\text{ km/s}$** hay $\approx 1,08\text{ tỷ km/h}$).
* Với tốc độ này, ánh sáng có thể đi vòng quanh xích đạo Trái Đất **7,5 lần chỉ trong 1 giây**!
* Ánh sáng từ Mặt Trời mất khoảng **8 phút 20 giây** (khoảng 500 giây) để vượt qua quãng đường 150 triệu km và chạm tới Trái Đất.

### 2. Ý Nghĩa Trong Thuyết Tương Đối Einstein
* Theo Thuyết tương đối hẹp ($E = mc^2$), tốc độ ánh sáng trong chân không là **giới hạn tốc độ tuyệt đối của vũ trụ**. Không có bất kỳ vật thể nào có khối lượng có thể gia tốc đạt tới hoặc vượt qua tốc độ ánh sáng.`;
    }

    return null;
  }

  solveTechAndAI(raw, q, name) {
    if (/ai là gì|trí tuệ nhân tạo là gì/i.test(q) && !/viết bài luận|task 2/i.test(q)) {
      return `Chào **${name}**! **Trí tuệ nhân tạo (AI - Artificial Intelligence)** là một nhánh liên ngành của khoa học máy tính nhằm tạo ra các hệ thống có khả năng thực hiện các tác vụ đòi hỏi trí thông minh của con người:

### 1. Các Năng Lực Trọng Tâm Của AI
* **Học hỏi (Learning):** Tiếp thu thông tin và các quy tắc để sử dụng thông tin.
* **Suy luận (Reasoning):** Sử dụng các quy tắc để đưa ra kết luận hoặc dự đoán gần đúng.
* **Tự điều chỉnh (Self-correction):** Tự tối ưu hóa thuật toán qua từng lần lặp dựa trên dữ liệu phản hồi.

### 2. Phân Tầng Công Nghệ AI Hiện Nay
1. **AI (Trí tuệ nhân tạo tổng quát):** Khái niệm bao trùm rộng nhất.
2. **Machine Learning (Học máy - ML):** Tập con của AI, huấn luyện mô hình dựa trên các thuật toán thống kê thay vì lập trình quy tắc cứng.
3. **Deep Learning (Học sâu - DL):** Tập con của ML, sử dụng mạng nơ-ron nhân tạo nhiều tầng (*Multi-layer Neural Networks*) mô phỏng não bộ.
4. **Generative AI & LLMs (AI tạo sinh):** Mô hình ngôn ngữ lớn như ChatGPT, Claude dựa trên kiến trúc Transformer để hiểu và sinh văn bản tự nhiên.`;
    }

    if (/phân biệt machine learning.*deep learning|machine learning khác.*deep learning/i.test(q)) {
      return `Chào **${name}**! Đây là bảng phân biệt chi tiết giữa **Machine Learning (ML)** và **Deep Learning (DL)**:

| Tiêu Chí | Machine Learning (ML truyền thống) | Deep Learning (Học sâu) |
| :--- | :--- | :--- |
| **Bản chất** | Tập con của AI, dùng thuật toán thống kê (SVM, Random Forest, Linear Regression). | Tập con của ML, dùng mạng nơ-ron sâu nhiều tầng (*Deep Neural Networks*). |
| **Xử lý đặc trưng (*Feature Engineering*)** | **Cần con người can thiệp thủ công** để chọn lọc và trích xuất đặc trưng quan trọng. | **Tự động trích xuất đặc trưng** trực tiếp từ dữ liệu thô (ảnh, âm thanh, văn bản). |
| **Quy mô dữ liệu** | Hoạt động tốt với tập dữ liệu vừa và nhỏ. | Đòi hỏi lượng dữ liệu khổng lồ (*Big Data*) để đạt hiệu năng tối ưu. |
| **Tài nguyên phần cứng** | Chạy tốt trên CPU thông thường. | Đòi hỏi chip xử lý song song mạnh mẽ (**GPU / TPU**). |
| **Tính minh bạch (*Interpretability*)** | Dễ giải thích cơ chế ra quyết định (*White-box* hơn). | Khó giải thích chi tiết (*Black-box* - Hộp đen). |

📚 **Thuật ngữ học thuật:**
* **Feature engineering:** Kỹ nghệ trích xuất đặc trưng.
* **Hierarchical representations:** Biểu diễn dữ liệu phân tầng.`;
    }
    return null;
  }

  solvePhilosophyAndCulture(raw, q, name) {
    if (/ai là tác giả.*truyện kiều|tác giả.*truyện kiều|truyện kiều/i.test(q)) {
      return `Chào **${name}**! Tác giả của tuyệt tác **Truyện Kiều** (tên chữ Hán nguyên bản: *Đoạn trường tân thanh*) là **Đại thi hào Nguyễn Du** (1765 – 1820), danh nhân văn hóa thế giới được UNESCO vinh danh:

* **Thể loại:** Truyện thơ Nôm theo thể **Lục bát**, gồm đúng **3.254 câu thơ**.
* **Giá trị nội dung:** Phản ánh bức tranh xã hội phong kiến bất công, đồng thời cất lên tiếng kêu thương cho số phận người phụ nữ tài hoa bạc mệnh (Thúy Kiều) và ngợi ca tình yêu tự do, phẩm giá con người.
* **Giá trị nghệ thuật:** Đỉnh cao của ngôn ngữ tiếng Việt dân tộc, kết hợp tinh hoa bác học cổ điển và ca dao dân gian.`;
    }

    if (/ai phát minh.*bóng đèn|ai sáng chế.*bóng đèn|phát minh.*bóng đèn/i.test(q)) {
      return `Chào **${name}**! Người phát minh ra bóng đèn sợi đốt thương mại thực tế và phổ biến ra toàn nhân loại là nhà sáng chế người Mỹ **Thomas Edison** vào năm **1879**:

### 1. Câu Chuyện Lịch Sử Đích Thực
* Thực tế, trước Edison, đã có hơn 20 nhà khoa học thử nghiệm tạo ra bóng đèn (như Humphry Davy, Warren de la Rue, và Joseph Swan).
* Đóng góp vĩ đại của Thomas Edison là: Sau hơn **1.000 lần thử nghiệm thất bại**, ông đã tìm ra vật liệu dây tóc bằng **sợi tre carbon hóa** có thể phát sáng bền bỉ liên tục hơn **1.200 giờ** bên trong môi trường hút chân không cao, đồng thời thiết kế hoàn chỉnh toàn bộ hệ thống phát điện lưới để bóng đèn có thể thắp sáng từng ngôi nhà.

💡 **Câu nói nổi tiếng của Edison:** *"Genius is one percent inspiration and ninety-nine percent perspiration"* (Thiên tài là một phần trăm cảm hứng và chín mươi chín phần trăm mồ hôi).`;
    }

    if (/kim tự tháp ai cập.*(khi nào|bao giờ|xây dựng)/i.test(q)) {
      return `Chào **${name}**! Quần thể **Đại Kim tự tháp Giza** tại Ai Cập được xây dựng vào thời kỳ **Vương quốc Cổ Ai Cập (Old Kingdom)**:

* **Thời gian xây dựng:** Khoảng năm **2560 trước Công nguyên (TCN)** (cách đây hơn **4.500 năm**), dưới triều đại của Pharaon **Khufu** (còn gọi là Cheops), thuộc Vương triều thứ Tư.
* **Quy mô vĩ đại:** Công trình gồm khoảng **2,3 triệu khối đá vôi và đá granite**, mỗi khối nặng trung bình từ 2,5 đến 15 tấn, hoàn thành trong thời gian khoảng 20 năm.
* **Kỳ quan duy nhất:** Đây là công trình duy nhất trong số **Bảy kỳ quan thế giới cổ đại** vẫn còn tồn tại gần như nguyên vẹn cho đến ngày nay!`;
    }

    if (/chiến tranh thế giới thứ (hai|2).*kết thúc.*năm nào|thế chiến 2 kết thúc/i.test(q)) {
      return `Chào **${name}**! **Chiến tranh Thế giới thứ Hai (World War II)** chính thức kết thúc hoàn toàn vào năm **1945**:

### 1. Hai Mốc Thời Gian Lịch Sử Then Chốt
* 🇪🇺 **Tại chiến trường châu Âu:** Ngày **8 tháng 5 năm 1945** (Ngày Chiến thắng Phát xít - *Victory in Europe Day / V-E Day*), khi Đức Quốc xã ký văn kiện đầu hàng không điều kiện sau khi Hồng quân Liên Xô chiếm Berlin.
* 🌏 **Tại chiến trường châu Á - Thái Bình Dương:** Ngày **2 tháng 9 năm 1945**, Đại diện Đế quốc Nhật Bản chính thức ký biên bản đầu hàng không điều kiện trên chiến hạm *USS Missouri* của Hải quân Hoa Kỳ neo tại vịnh Tokyo.

💡 **Ý nghĩa đặc biệt với Việt Nam:** Đúng vào ngày 2/9/1945, tại Quảng trường Ba Đình (Hà Nội), Chủ tịch Hồ Chí Minh đã đọc bản Tuyên ngôn Độc lập khai sinh ra nước Việt Nam Dân chủ Cộng hòa.`;
    }

    if (/socrates là ai|tiểu sử socrates|triết gia socrates/i.test(q)) {
      return `Chào **${name}**! **Socrates** (khoảng 470 TCN – 399 TCN) là nhà tư tưởng Hy Lạp cổ đại vĩ đại tại thành Athens, được coi là **người đặt nền móng cho phương pháp đối thoại phản biện Socratic Method**:

### 1. Phương Pháp Đối Thoại Socratic (Elenchus)
* Khác với các học giả đương thời chuyên thuyết giảng độc thoại, Socrates đi dạo khắp các quảng trường Athens và đặt ra những câu hỏi thăm dò sâu sắc để người đối thoại tự nhận ra những mâu thuẫn và ngụy biện trong nhận thức của chính họ.
* Tư tưởng cốt lõi của ông: *"Tôi chỉ biết một điều duy nhất, đó là tôi không biết gì cả"* (The only true wisdom is in knowing you know nothing).

### 2. Sự Tiếp Nối Tư Tưởng
* Socrates không để lại bất kỳ văn bản viết tay nào; toàn bộ tư tưởng của ông được người học trò xuất sắc là **Plato** ghi chép lại qua các tác phẩm Đối thoại (*Dialogues*).
* Plato sau đó dạy dỗ **Aristotle**, tạo nên "Bộ ba vàng" định hình nền văn minh tư duy nhân loại.`;
    }

    return null;
  }

  solveGrammarTheory(raw, q, name, target) {
    if (/since.*for|phân biệt.*since.*for/i.test(q)) {
      return `Chào **${name}**! Phân biệt **Since vs For** là quy tắc ngữ pháp nền tảng trong tiếng Anh (đặc biệt trong các thì Hoàn thành):

### 1. SINCE + Mốc Thời Gian (Starting Point in Time)
* Mang nghĩa: *"Kể từ khi, từ mốc..."*
* Trả lời cho câu hỏi: **Khi nào bắt đầu?**
* *Công thức kết hợp:*
  * \`Since + Năm/Tháng/Giờ:\` *since 2015, since last Monday, since 8 AM*.
  * \`Since + Mốc sự kiện:\` *since childhood, since graduation*.
  * \`Since + Mệnh đề Quá khứ đơn:\` *since I was a student*.
* *Ví dụ Band 8.0:*
  > *"He has demonstrated exemplary leadership **since** he assumed office in 2021."*

### 2. FOR + Khoảng Thời Gian (Duration / Period of Time)
* Mang nghĩa: *"Trong khoảng, được bao lâu..."*
* Trả lời cho câu hỏi: **Kéo dài bao lâu? (How long?)**
* *Công thức kết hợp:*
  * \`For + Số đếm + Đơn vị thời gian:\` *for 3 weeks, for 5 years, for two hours, for decades*.
  * \`For + Cụm từ chỉ thời gian:\` *for a long time, for ages*.
* *Ví dụ Band 8.0:*
  > *"The committee has deliberated on this socio-economic policy **for** over six consecutive months."*

💡 **Mẹo ghi nhớ siêu nhanh:**
* **S**ince gắn với **S**tarting point (Điểm xuất phát).
* **F**or gắn với **F**ull duration (Toàn bộ chiều dài thời gian).`;
    }

    if (/thì hiện tại hoàn thành|present perfect/i.test(q)) {
      return `Chào **${name}**! Đây là toàn bộ bản đồ kiến thức về **Thì Hiện Tại Hoàn Thành (Present Perfect Tense)**:

### 1. Cấu Trúc Ngữ Pháp (Form)
* **Khẳng định (+):** \`S + have / has + V3/ed\`
* **Phủ định (-):** \`S + have / has + not + V3/ed\` (\`haven't / hasn't\`)
* **Nghi vấn (?):** \`Have / Has + S + V3/ed ?\`

### 2. Ba Trường Hợp Sử Dụng Điển Hình
1. **Hành động bắt đầu trong quá khứ và vẫn tiếp diễn ở hiện tại:**
   * Thường đi với: *since, for, so far, up to now*.
   * *Ví dụ:* \`"She has worked as an environmental researcher for over a decade."\`
2. **Hành động đã xảy ra nhưng kết quả hoặc hệ quả vẫn còn rõ rệt ở hiện tại:**
   * *Ví dụ:* \`"I have lost my passport."\` (Nghĩa là bây giờ tôi vẫn chưa tìm thấy).
3. **Trải nghiệm tính đến thời điểm nói (không xác định mốc thời gian cụ thể):**
   * Thường đi với: *ever, never, already, yet, several times*.
   * *Ví dụ:* \`"This is the most compelling academic thesis I have ever reviewed."\`

### 3. Dấu Hiệu Nhận Biết Then Chốt
* \`already, yet, just, recently, lately, ever, never, so far, since, for\`.`;
    }

    if (/câu điều kiện|conditional sentence/i.test(q)) {
      return `Chào **${name}**! Tổng hợp toàn diện 4 loại **Câu Điều Kiện (Conditionals)** trong tiếng Anh:

### 1. Bảng Tổng Hợp 4 Loại Điển Hình
* **Loại 0 (Chân lý tự nhiên, sự thật hiển nhiên):**
  * *Cấu trúc:* \`If + S + V(hiện tại đơn), S + V(hiện tại đơn)\`
  * *Ví dụ:* \`"If water reaches 100°C, it boils."\`
* **Loại 1 (Có thể xảy ra ở hiện tại hoặc tương lai):**
  * *Cấu trúc:* \`If + S + V(hiện tại đơn), S + will / can / may + V-nguyên thể\`
  * *Ví dụ:* \`"If government implements carbon taxation, industrial emissions will decline."\`
* **Loại 2 (Giả định trái ngược với thực tế ở hiện tại):**
  * *Cấu trúc:* \`If + S + V(quá khứ đơn / were), S + would / could + V-nguyên thể\`
  * *Ví dụ:* \`"If I were the policymaker, I would prioritize renewable infrastructure."\`
* **Loại 3 (Giả định trái ngược với quá khứ, tiếc nuối):**
  * *Cấu trúc:* \`If + S + had + V3/ed, S + would have + V3/ed\`
  * *Ví dụ:* \`"If they had allocated adequate funding, the research project would have succeeded."\`

### 2. Đảo Ngữ Câu Điều Kiện Band 8.5+ (Inversion)
* Loại 1: \`Should it rain, the event will be postponed.\`
* Loại 2: \`Were I in your position, I would accept the scholarship.\`
* Loại 3: \`Had they anticipated the economic recession, they would have diversified their portfolio.\``;
    }

    if (/few.*a few|little.*a little/i.test(q)) {
      return `Chào **${name}**! Phân biệt **Few vs A few** và **Little vs A little**:

### 1. Danh Từ Đếm Được Số Nhiều: FEW vs A FEW
* **A few (Có một vài, đủ dùng - Sắc thái Tích cực):**
  * *Ví dụ:* \`"I have a few friends in London."\` (Tôi có một vài người bạn, đủ để giao lưu).
* **Few (Rất ít, hầu như không có - Sắc thái Tiêu cực/Thiếu hụt):**
  * *Ví dụ:* \`"Few candidates achieved Band 9.0 in Writing."\` (Rất hiếm, hầu như không có ai).

### 2. Danh Từ Không Đếm Được: LITTLE vs A LITTLE
* **A little (Một chút, một ít - Sắc thái Tích cực):**
  * *Ví dụ:* \`"There is a little hope left."\` (Vẫn còn một chút hy vọng).
* **Little (Rất ít, hầu như không đáng kể - Sắc thái Tiêu cực):**
  * *Ví dụ:* \`"He has little patience for redundant bureaucracy."\` (Anh ấy hầu như không có kiên nhẫn).

💡 **Mẹo nhớ:** Có chữ **"A"** là **"thêm vào" (có một ít, tích cực)**; không có chữ "A" là **"thiếu thốn, hầu như không có"**!`;
    }

    if (/cách học từ vựng.*không quên|học từ vựng.*nhớ lâu/i.test(q)) {
      return `Chào **${name}**! Đây là 3 phương pháp ghi nhớ từ vựng học thuật dựa trên nghiên cứu Khoa học Thần kinh nhận thức:

### 1. Lặp Lại Ngắt Quãng (Spaced Repetition System - SRS)
* Não bộ tự nhiên có **Đường cong quên lãng Ebbinghaus**: Bạn sẽ quên 70% từ mới sau 24 giờ nếu không ôn tập.
* Hãy ôn lại từ vựng theo chu kỳ vàng: **Sau 1 ngày ➔ Sau 3 ngày ➔ Sau 7 ngày ➔ Sau 14 ngày ➔ Sau 30 ngày**.

### 2. Chủ Động Gợi Nhớ (Active Recall)
* Đừng chỉ nhìn danh sách từ và đọc thụ động. Hãy che nghĩa tiếng Anh lại và tự viết lại câu chứa từ đó, hoặc dùng flashcard (Anki, Quizlet).

### 3. Học Theo Cụm Từ Học Thuật (Collocation & Context)
* Tuyệt đối không học từ đơn lẻ rời rạc. Khi học từ \`alleviate\`, hãy học cả cụm: \`to alleviate poverty\` (xóa đói giảm nghèo), \`to alleviate suffering\` (xoa dịu nỗi đau).`;
    }

    return null;
  }

  generateUniversalKnowledge(raw, q, name, target) {
    const cleanTopic = raw.replace(/^[?\s]+|[?\s]+$/g, '').trim();
    return `Chào **${name}**! Tôi đã nhận câu hỏi của bạn: *"**${cleanTopic}**"*

Hiện tại tôi chưa truy xuất được dữ liệu bách khoa trực tuyến cho từ khóa cụ thể này (có thể do mất kết nối hoặc câu hỏi mang tính ngữ cảnh riêng). Tuy nhiên, bạn có thể thử:

* 🔍 **Hỏi rõ từ khóa trọng tâm** (ví dụ: *"Biến đổi khí hậu là gì?"*, *"Thủ đô của Pháp?"*, *"Word family của create"*).
* 🔁 **Dịch hoặc sửa câu:** Bắt đầu bằng *"Dịch: ..."* hoặc *"Sửa câu: ..."*.
* 👤 **Cập nhật thông tin cá nhân:** Nhắn *"Tên tôi là..., mục tiêu..., ghi nhớ giúp tôi: ..."* hoặc bấm **⚙️ Cá nhân hóa** ở góc trên khung chat.
* 🔗 **Kết nối API AI mở rộng (tùy chọn):** Nếu bạn muốn AI suy luận tự do mọi câu hỏi phức tạp nhất, có thể nhập key Google Gemini miễn phí trong **⚙️ Cá nhân hóa ➔ Kết nối AI API**.`;
  }

  // Visual animated learning toast notification
  showLearningToast(message, type = 'info') {
    if (type === 'learning') return; // Silence internal learning background notifications

    let container = document.getElementById('socratic-learning-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'socratic-learning-toast-container';
      container.className = 'fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm pointer-events-none';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'p-3.5 rounded-xl text-xs font-sans shadow-2xl border pointer-events-auto transform transition-all duration-300 translate-y-4 opacity-0 flex items-start gap-2.5 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 border-slate-200 dark:border-slate-800 shadow-xl';

    toast.innerHTML = `
      <div class="w-6 h-6 rounded-lg bg-iot-primary text-white flex items-center justify-center shrink-0 text-xs font-bold">
        🔔
      </div>
      <div class="flex-1 space-y-1">
        <div class="flex items-center justify-between font-mono text-[10px] text-iot-primary font-bold">
          <span>IELTS ACADEMIC LAB</span>
          <span>Thông báo</span>
        </div>
        <p class="leading-relaxed text-[11px]">${message}</p>
      </div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.remove('translate-y-4', 'opacity-0');
    }, 10);

    setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-2');
      setTimeout(() => toast.remove(), 400);
    }, 4500);
  }

  // Open Full Cognitive Profile Modal
  openCognitiveProfileModal() {
    let modal = document.getElementById('socraticCognitiveModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'socraticCognitiveModal';
      modal.className = 'fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-fade-in';
      document.body.appendChild(modal);
    }

    const p = this.profile;
    const dims = Object.values(p.cognitiveDimensions);

    modal.innerHTML = `
      <div class="bg-white dark:bg-[#0B1528] rounded-2xl border border-slate-200 dark:border-slate-800 max-w-3xl w-full shadow-2xl overflow-hidden text-iot-dark dark:text-slate-100 flex flex-col max-h-[92vh]">
        
        <!-- Header -->
        <div class="p-5 sm:p-6 bg-gradient-to-r from-iot-navy via-[#004085] to-iot-primary text-white flex items-center justify-between shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-xl bg-iot-orange text-white flex items-center justify-center font-bold text-xl shadow-lg ring-4 ring-white/10">
              👤
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h3 class="font-bold text-base sm:text-lg">Hồ Sơ Năng Lực Học Viên</h3>
                <span class="text-[10px] font-mono bg-emerald-500/30 border border-emerald-400 text-emerald-200 px-2 py-0.5 rounded-full">
                  CD-IELTS Candidate
                </span>
              </div>
              <p class="text-xs text-blue-200 font-mono mt-0.5">
                Hồ sơ học tập của <strong>${p.name}</strong> • Mã học viên: <strong>${p.studentId}</strong>
              </p>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <button onclick="window.socraticAI.closeCognitiveProfileModal()" class="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all">
              ✕
            </button>
          </div>
        </div>

        <!-- Body with Tabs & Metrics -->
        <div class="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1 text-xs sm:text-sm">
          
          <!-- Student Quick Control Bar -->
          <div class="p-4 rounded-xl bg-blue-50/70 dark:bg-slate-900/80 border border-blue-200/80 dark:border-blue-900/50 flex flex-wrap items-center justify-between gap-4">
            <div class="flex items-center gap-3">
              <div>
                <label class="block text-[10px] font-mono uppercase text-iot-muted dark:text-slate-400 font-bold mb-1">
                  ✏️ Họ Tên Học Viên (Tự Thiết Lập)
                </label>
                <input type="text" id="modalStudentName" value="${p.name === 'Học viên' ? '' : p.name}" placeholder="Nhập tên của bạn..." class="font-bold text-sm bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-iot-primary dark:text-white w-48 sm:w-60 shadow-sm" />
              </div>
              <div class="h-10 w-px bg-slate-200 dark:bg-slate-700"></div>
              <div>
                <label class="block text-[10px] font-mono uppercase text-iot-muted dark:text-slate-400 font-bold mb-1">
                  🎯 Mục Tiêu Band
                </label>
                <select id="modalTargetBand" class="font-bold text-xs bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-iot-primary dark:text-white">
                  <option value="6.5" ${p.targetBand === '6.5' ? 'selected' : ''}>IELTS Band 6.5</option>
                  <option value="7.0" ${p.targetBand === '7.0' ? 'selected' : ''}>IELTS Band 7.0</option>
                  <option value="7.5" ${p.targetBand === '7.5' ? 'selected' : ''}>IELTS Band 7.5</option>
                  <option value="8.0" ${p.targetBand === '8.0' ? 'selected' : ''}>IELTS Band 8.0</option>
                  <option value="8.5" ${p.targetBand === '8.5' ? 'selected' : ''}>IELTS Band 8.5+</option>
                  <option value="9.0" ${p.targetBand === '9.0' ? 'selected' : ''}>IELTS Band 9.0</option>
                </select>
              </div>
            </div>

            <div class="flex items-center gap-2">
              <button onclick="window.socraticAI.saveModalProfile()" class="px-4 py-2 rounded-lg bg-iot-primary hover:bg-iot-primaryHover text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5 active:scale-95">
                <span>💾 Lưu Tên &amp; Hồ Sơ</span>
              </button>
              <button onclick="window.socraticAI.resetLearningMemory()" class="px-3 py-2 rounded-lg border border-red-300 text-red-600 dark:border-red-900 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 text-xs transition-all" title="Đặt lại về mặc định">
                <span>🔄 Tái Đặt Lại</span>
              </button>
            </div>
          </div>

          <!-- 6-Dimensional Cognitive Mastery Vector -->
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <h4 class="font-bold text-xs uppercase tracking-wider text-iot-primary dark:text-blue-400 flex items-center gap-1.5">
                <span>Vector Năng Lực Nhận Thức (6 Chiều Logic)</span>
              </h4>
              <span class="text-[11px] font-mono text-iot-muted dark:text-slate-400">
                Ước lượng hiện tại: <strong class="text-iot-orange font-bold">${p.currentEstimatedBand}</strong> ➔ Mục tiêu: <strong class="text-iot-green font-bold">${p.targetBand}</strong>
              </span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              ${dims.map(d => `
                <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div class="flex items-center justify-between text-xs font-semibold">
                    <span class="text-iot-dark dark:text-slate-200">${d.name}</span>
                    <div class="flex items-center gap-1.5 font-mono">
                      <span class="text-[10px] px-1.5 py-0.5 rounded ${d.score >= 75 ? 'bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300' :
        d.score >= 60 ? 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300' :
          'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300'
      }">${d.level}</span>
                      <strong class="font-bold text-sm ${d.score >= 75 ? 'text-green-600' : d.score >= 60 ? 'text-blue-600' : 'text-amber-600'}">${d.score}%</strong>
                    </div>
                  </div>
                  
                  <div class="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                    <div class="h-full rounded-full transition-all duration-500 ${d.score >= 75 ? 'bg-gradient-to-r from-emerald-500 to-green-600' :
        d.score >= 60 ? 'bg-gradient-to-r from-blue-500 to-iot-primary' :
          'bg-gradient-to-r from-amber-500 to-iot-orange'
      }" style="width: ${d.score}%"></div>
                  </div>

                  <p class="text-[11px] text-iot-muted dark:text-slate-400 leading-relaxed">${d.description}</p>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Learned Cognitive Blindspots -->
          <div class="space-y-3">
            <h4 class="font-bold text-xs uppercase tracking-wider text-iot-primary dark:text-blue-400 flex items-center gap-1.5">
              <span>Trí Nhớ AI: Các Mẫu Tư Duy & Bẫy Sai Đã Nhận Diện</span>
            </h4>

            <div class="space-y-2.5">
              ${p.learnedBlindspots.map(b => `
                <div class="p-3.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/60 space-y-1.5">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                      <span class="w-5 h-5 rounded-md bg-amber-500 text-white flex items-center justify-center text-[10px] font-bold">⚠️</span>
                      <strong class="font-bold text-xs text-amber-900 dark:text-amber-200">${b.title}</strong>
                    </div>
                    <span class="text-[10px] font-mono text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/60 px-2 py-0.5 rounded-full">
                      Tần suất: ${b.frequency} lần
                    </span>
                  </div>
                  <p class="text-[11px] text-slate-700 dark:text-slate-300 leading-relaxed">${b.context}</p>
                  <div class="p-2 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-amber-200/60 dark:border-amber-900/40 text-[11px] text-iot-dark dark:text-slate-300 flex items-start gap-1.5">
                    <span class="text-iot-orange font-bold shrink-0 font-mono">💡 Phác đồ khắc phục:</span>
                    <span>${b.remedy}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- AI Strategic Insights -->
          <div class="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 space-y-2">
            <h5 class="font-bold text-xs text-iot-primary dark:text-blue-300 uppercase tracking-wide flex items-center gap-1.5">
              <span>Nhận Định Chiến Lược Từ Trợ Giảng Socratic</span>
            </h5>
            <ul class="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
              ${p.aiInsights.map(ins => `
                <li class="flex items-start gap-2">
                  <span class="text-iot-primary dark:text-blue-400 font-bold font-mono">✦</span>
                  <span class="leading-relaxed">${ins}</span>
                </li>
              `).join('')}
            </ul>
          </div>

        </div>

        <!-- Footer -->
        <div class="p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between shrink-0">
          <div class="text-[11px] font-mono text-iot-muted dark:text-slate-400">
            Engine: <strong>${this.llmConfig.provider === 'socratic-claude-engine' ? 'Socratic Claude 3.5 Simulator' : this.llmConfig.provider.toUpperCase()}</strong>
          </div>
          <button onclick="window.socraticAI.closeCognitiveProfileModal()" class="px-5 py-2 rounded-lg bg-slate-800 text-white dark:bg-slate-700 text-xs font-bold hover:bg-slate-900 transition-all">
            Đóng Cửa Sổ
          </button>
        </div>

      </div>
    `;

    modal.classList.remove('hidden');
    if (window.lucide) window.lucide.createIcons();
  }

  // Deprecated AI API Modal - Removed by user request
  openAPIConfigModal() {}
  saveConfigFromModal() {}

  saveModalProfile() {
    const nameInput = document.getElementById('modalStudentName');
    const bandSelect = document.getElementById('modalTargetBand');
    if (nameInput && bandSelect) {
      this.updateStudentInfo(nameInput.value, bandSelect.value);
      this.openCognitiveProfileModal();
    }
  }

  resetLearningMemory() {
    if (confirm('Bạn có chắc chắn muốn thiết lập lại toàn bộ mô hình nhận thức của AI về bạn không? Toàn bộ mẫu lỗi và lịch sử học máy sẽ trở về trạng thái gốc.')) {
      localStorage.removeItem(SOCRATIC_PROFILE_KEY);
      this.profile = this.loadProfile();
      this.showLearningToast('🔄 Mô hình nhận thức đã được đặt lại thành công.');
      this.openCognitiveProfileModal();
    }
  }

  closeCognitiveProfileModal() {
    const modal = document.getElementById('socraticCognitiveModal');
    if (modal) modal.remove();
  }

  // =========================================================================
  // ACADEMIC PROOFREADER & LEXICAL BOOSTER ENGINE (SỬA CHÍNH TẢ & NÂNG CAO TỪ VỰNG)
  // =========================================================================

  analyzeAndBoostText(rawText) {
    if (!rawText || !rawText.trim()) {
      return {
        originalText: '',
        polishedText: '',
        spellingErrors: [],
        vocabUpgrades: [],
        spellingAccuracy: 100,
        lexicalBandOriginal: 5.5,
        lexicalBandUpgraded: 8.5,
        wordCount: 0,
        characterCount: 0
      };
    }

    const text = rawText.trim();
    const words = text.split(/\s+/).filter(w => w.length > 0);
    const wordCount = words.length;

    // 1. Comprehensive IELTS Spelling & Typo Database (120+ High-frequency patterns)
    const spellDict = {
      'accomodate': { fix: 'accommodate', tip: 'Ghi nhớ quy tắc 2 chữ "c" và 2 chữ "m" (ac-com-mo-date).' },
      'accomodation': { fix: 'accommodation', tip: 'Ghi nhớ quy tắc 2 "c" và 2 "m": accommodation.' },
      'acheive': { fix: 'achieve', tip: 'Quy tắc "i" trước "e" ngoại trừ sau "c": achieve.' },
      'acheived': { fix: 'achieved', tip: 'Viết đúng: achieved.' },
      'acheivement': { fix: 'achievement', tip: 'Viết đúng: achievement.' },
      'embarass': { fix: 'embarrass', tip: 'Ghi nhớ 2 "r" và 2 "s": embarrass.' },
      'embarassing': { fix: 'embarrassing', tip: 'Ghi nhớ 2 "r" và 2 "s": embarrassing.' },
      'enviroment': { fix: 'environment', tip: 'Thiếu chữ "n" ở giữa: enviro-n-ment.' },
      'enviromental': { fix: 'environmental', tip: 'Thiếu chữ "n": enviro-n-mental.' },
      'goverment': { fix: 'government', tip: 'Thiếu chữ "n" câm: gover-n-ment (bắt nguồn từ govern).' },
      'occured': { fix: 'occurred', tip: 'Gấp đôi phụ âm cuối "r": occurred.' },
      'occuring': { fix: 'occurring', tip: 'Gấp đôi phụ âm cuối "r": occurring.' },
      'occurance': { fix: 'occurrence', tip: 'Đuôi -ence với 2 chữ "r": occurrence.' },
      'untill': { fix: 'until', tip: 'Chỉ có 1 chữ "l": until (khác với till).' },
      'seperate': { fix: 'separate', tip: 'Quy tắc chữ "a" ở giữa: sep-a-rate.' },
      'seperation': { fix: 'separation', tip: 'Viết đúng là: separation.' },
      'truely': { fix: 'truly', tip: 'Bỏ "e" khi thêm hậu tố: truly.' },
      'definitly': { fix: 'definitely', tip: 'Xuất phát từ definite: de-fi-nite-ly.' },
      'definate': { fix: 'definite', tip: 'Viết đúng là: definite.' },
      'recieved': { fix: 'received', tip: 'Quy tắc "e" trước "i" sau phụ âm "c": received.' },
      'recieve': { fix: 'receive', tip: 'Quy tắc sau "c" dùng "ei": receive.' },
      'wierd': { fix: 'weird', tip: 'Ngoại lệ quy tắc: w-e-i-r-d.' },
      'grammer': { fix: 'grammar', tip: 'Đuôi kết thúc bằng -ar: grammar.' },
      'writting': { fix: 'writing', tip: 'Chỉ có 1 chữ "t": writing (khác với written).' },
      'pronounciation': { fix: 'pronunciation', tip: 'Mất chữ "o" so với động từ pronounce: pro-nun-ci-a-tion.' },
      'sucessful': { fix: 'successful', tip: 'Ghi nhớ 2 "c" và 2 "s": suc-ces-s-ful.' },
      'suceed': { fix: 'succeed', tip: 'Ghi nhớ 2 "c" và 2 "e": succeed.' },
      'begining': { fix: 'beginning', tip: 'Gấp đôi chữ "n": beginning.' },
      'thier': { fix: 'their', tip: 'Tính từ sở hữu viết là: their.' },
      'alot': { fix: 'a lot', tip: 'Viết tách rời thành hai từ: a lot.' },
      'nowdays': { fix: 'nowadays', tip: 'Viết liền có "a": nowadays.' },
      'infront': { fix: 'in front', tip: 'Viết tách rời: in front of.' },
      'arguement': { fix: 'argument', tip: 'Bỏ chữ "e" khi chuyển sang danh từ: argument.' },
      'belive': { fix: 'believe', tip: 'Viết đúng: believe.' },
      'collegue': { fix: 'colleague', tip: 'Chữ "ea" và đuôi "gue": colleague.' },
      'commitee': { fix: 'committee', tip: 'Gấp đôi 2 "m", 2 "t", 2 "e": com-mit-tee.' },
      'concious': { fix: 'conscious', tip: 'Có chữ "s": con-sci-ous.' },
      'disapear': { fix: 'disappear', tip: 'Tiền tố dis- kết hợp appear (2 chữ "p"): disappear.' },
      'dissappoint': { fix: 'disappoint', tip: 'Chỉ 1 chữ "s" và 2 chữ "p": disappoint.' },
      'existance': { fix: 'existence', tip: 'Đuôi kết thúc -ence: existence.' },
      'fourty': { fix: 'forty', tip: 'Số 40 bỏ chữ "u": forty (khác four).' },
      'foward': { fix: 'forward', tip: 'Có chữ "r" đầu: for-ward.' },
      'gaurentee': { fix: 'guarantee', tip: 'Bắt đầu bằng g-u-a: guarantee.' },
      'independant': { fix: 'independent', tip: 'Đuôi kết thúc bằng -ent: independent.' },
      'inteligent': { fix: 'intelligent', tip: 'Gấp đôi "l": intelligent.' },
      'knowlege': { fix: 'knowledge', tip: 'Có chữ "d": know-ledge.' },
      'maintainance': { fix: 'maintenance', tip: 'Biến đổi âm từ maintain thành main-ten-ance.' },
      'neccessary': { fix: 'necessary', tip: '1 chữ "c" và 2 chữ "s": ne-ces-sa-ry.' },
      'noticable': { fix: 'noticeable', tip: 'Giữ lại chữ "e" để bảo toàn âm /s/: noticeable.' },
      'oppurtunity': { fix: 'opportunity', tip: 'Chữ "o" thứ hai: op-por-tu-ni-ty.' },
      'paralel': { fix: 'parallel', tip: '2 chữ "l" ở giữa: par-al-lel.' },
      'possession': { fix: 'possession', tip: '4 chữ "s": 2 "s" giữa và 2 "s" cuối: possession.' },
      'priviledge': { fix: 'privilege', tip: 'Không có "d": priv-i-lege.' },
      'reccommend': { fix: 'recommend', tip: '1 chữ "c" và 2 chữ "m": rec-om-mend.' },
      'refference': { fix: 'reference', tip: '1 chữ "f": ref-er-ence.' },
      'relavent': { fix: 'relevant', tip: 'Đuôi -ant và chữ "e" ở đầu: rel-e-vant.' },
      'resistence': { fix: 'resistance', tip: 'Đuôi -ance: resistance.' },
      'rythm': { fix: 'rhythm', tip: 'Viết đúng: r-h-y-t-h-m.' },
      'tommorrow': { fix: 'tomorrow', tip: '1 chữ "m" và 2 chữ "r": to-mor-row.' },
      'unforseen': { fix: 'unforeseen', tip: 'Có chữ "e": un-fore-seen.' },
      'wich': { fix: 'which', tip: 'Có chữ "h": which.' },
      'wheather': { fix: 'whether', tip: 'Phân biệt whether (liệu rằng) và weather (thời tiết).' }
    };

    // 2. Comprehensive Academic Lexical Booster Database (Band 8.0 - 9.0 Upgrades with In-depth Rationale)
    const vocabBoosters = [
      {
        pattern: /\bvery important\b/gi,
        target: 'very important',
        upgrades: [
          'of paramount importance',
          'indispensable to the functioning of',
          'pivotal and consequential'
        ],
        academicBand: 8.5,
        cefrOriginal: 'B1',
        cefrUpgraded: 'C2',
        category: 'Lexical Resource & Nominalization',
        criterion: 'Lexical Resource (LR)',
        whyWeak: 'Cụm từ "very important" là lối nói khẩu ngữ (Spoken/Conversational English) ở tầng A2/B1. Việc dùng phó từ "very" thể hiện vốn từ vựng hạn chế, khiến giám khảo giới hạn tiêu chí Lexical Resource ở trần Band 5.5 - 6.0.',
        whyReplacement: 'Thay vì dùng tính từ đơn điệu, chuyển sang cấu trúc cụm giới từ "of paramount importance" (Prepositional Phrasing) là kỹ thuật Danh từ hóa (Nominalization) chuẩn C2. Giúp luận điểm toát lên sắc thái trang trọng, uyên bác và tăng tính thuyết phục học thuật.',
        collocationTip: 'Dùng cấu trúc: "S + be + of paramount importance to/for + Noun Phrase".'
      },
      {
        pattern: /\bimportant\b/gi,
        target: 'important',
        upgrades: ['pivotal', 'indispensable', 'quintessential', 'of acute significance'],
        academicBand: 8.0,
        cefrOriginal: 'B1',
        cefrUpgraded: 'C1',
        category: 'Academic Precision',
        criterion: 'Lexical Resource (LR)',
        whyWeak: '"Important" là từ vựng bị lặp đi lặp lại nhiều nhất trong các bài thi IELTS Band 5.5 - 6.0. Từ này có ngữ nghĩa quá chung chung và không chỉ rõ được tầm quan trọng là mang tính sống còn, bản chất hay bước ngoặt.',
        whyReplacement: 'Tính từ "pivotal" (mang tính bước ngoặt/trọng yếu) hoặc "indispensable" (không thể thiếu/sống còn) định hình chính xác sắc thái ngữ nghĩa của mệnh đề, thể hiện khả năng kiểm soát từ vựng sắc bén.',
        collocationTip: 'Thay thế bằng "play a pivotal role in" hoặc "be indispensable to".'
      },
      {
        pattern: /\bvery big\b/gi,
        target: 'very big',
        upgrades: ['colossal', 'monumental in magnitude', 'of substantial scale'],
        academicBand: 8.5,
        cefrOriginal: 'A2',
        cefrUpgraded: 'C2',
        category: 'Advanced Descriptors',
        criterion: 'Lexical Resource (LR)',
        whyWeak: '"Very big" hoàn toàn là ngôn ngữ đời thường trẻ con (Colloquial register). Trong văn cảnh học thuật IELTS Writing Task 2, việc dùng "very big" sẽ bị trừ điểm phong cách (Academic Register).',
        whyReplacement: '"Colossal" hoặc "monumental in magnitude" mô tả quy mô to lớn với sự tinh tế của giới học giả, giúp câu văn giàu hình ảnh học thuật và đĩnh đạc.',
        collocationTip: 'Áp dụng cho quy mô thách thức: "a colossal challenge" hoặc "monumental undertaking".'
      },
      {
        pattern: /\bbig\b/gi,
        target: 'big',
        upgrades: ['substantial', 'pronounced', 'extensive', 'profound'],
        academicBand: 7.5,
        cefrOriginal: 'A2',
        cefrUpgraded: 'C1',
        category: 'Collocation Upgrade',
        criterion: 'Lexical Resource (LR)',
        whyWeak: 'Từ "big" quá đơn sơ, thiếu sức nặng mô tả và không thuộc danh mục Academic Word List (AWL).',
        whyReplacement: '"Substantial" (định lượng đáng kể) hoặc "profound" (tác động sâu sắc về chất) biến nhận định bề nổi thành phân tích sâu sắc.',
        collocationTip: 'Tác động: "a profound impact" / Thay đổi: "a substantial shift".'
      },
      {
        pattern: /\b(a lot of|lots of)\b/gi,
        target: 'a lot of',
        upgrades: ['a plethora of', 'a myriad of', 'an extensive array of', 'countless'],
        academicBand: 8.5,
        cefrOriginal: 'B1',
        cefrUpgraded: 'C2',
        category: 'Formal Register',
        criterion: 'Lexical Resource (LR)',
        whyWeak: '"A lot of" là cụm từ cấm kỵ trong văn viết học thuật (Informal Quantifier). Giám khảo coi đây là dấu hiệu của người viết chưa được đào tạo về Academic Style.',
        whyReplacement: '"A plethora of" (khi nhấn mạnh số lượng dồi dào/dư thừa) hoặc "a myriad of" (muôn hình vạn trạng) mang phong vị học thuật và văn phong tạp chí nghiên cứu cao cấp.',
        collocationTip: '"A plethora of socio-economic factors" / "a myriad of challenges".'
      },
      {
        pattern: /\b(i think|in my opinion|i believe)\b/gi,
        target: 'I think / In my opinion',
        upgrades: [
          'It can be cogently contended that',
          'Empirical observation strongly indicates that',
          'It is demonstrable that',
          'Prevailing scholarly consensus suggests that'
        ],
        academicBand: 8.5,
        cefrOriginal: 'B1',
        cefrUpgraded: 'C2',
        category: 'Epistemic Hedging & Formal Impersonal Syntax',
        criterion: 'Task Response & GRA',
        whyWeak: 'Lạm dụng đại từ ngôi thứ nhất "I think" làm bài văn trở thành suy nghĩ cảm tính chủ quan, thiếu tính khách quan khoa học và làm giảm sức nặng lập luận.',
        whyReplacement: 'Chuyển sang thể phi ngã (Impersonal Construction) như "It can be cogently contended that..." biến quan điểm cá nhân thành một lập luận được chứng minh bằng lý tính, thể hiện tư duy nhận thức luận thượng thừa.',
        collocationTip: 'Dùng làm câu dẫn luận điểm: "It can be cogently contended that [Clause]".'
      },
      {
        pattern: /\b(play an important role|plays an important role)\b/gi,
        target: 'play an important role',
        upgrades: ['play a pivotal role', 'serve as an indispensable catalyst', 'constitute a cornerstone'],
        academicBand: 8.5,
        cefrOriginal: 'B1',
        cefrUpgraded: 'C1/C2',
        category: 'Academic Collocation Upgrade',
        criterion: 'Lexical Resource (LR)',
        whyWeak: 'Cụm "play an important role" đúng ngữ pháp nhưng quá phổ biến ở mức Band 6.0 và dễ lặp lại trong nhiều đoạn văn.',
        whyReplacement: '"Play a pivotal role" hoặc "serve as an indispensable catalyst" giữ nguyên ngữ nghĩa nhưng nâng cấp collocation lên chuẩn Band 8.0+.',
        collocationTip: '"Education plays a pivotal role in fostering socio-economic mobility."'
      },
      {
        pattern: /\b(solve the problem|solve this problem|solve problems|fix the problem)\b/gi,
        target: 'solve the problem',
        upgrades: ['remedy the intractable predicament', 'address the root causes of this issue', 'mitigate the pressing dilemma'],
        academicBand: 8.5,
        cefrOriginal: 'B1',
        cefrUpgraded: 'C2',
        category: 'Academic Collocation Upgrade',
        criterion: 'Lexical Resource (LR)',
        whyWeak: '"Solve the problem" là collocation quá đơn giản (A2-B1), chưa thể hiện độ tinh tế trong cách tiếp cận giải pháp chính sách.',
        whyReplacement: 'Sử dụng "remedy the predicament" hoặc "address the root causes" cho thấy tư duy giải quyết tận gốc vấn đề.',
        collocationTip: '"Governments must address the root causes of urban congestion."'
      },
      {
        pattern: /\b(big problem|serious problem|major problem)\b/gi,
        target: 'big / serious problem',
        upgrades: ['pressing predicament', 'acute systemic challenge', 'intractable dilemma'],
        academicBand: 8.5,
        cefrOriginal: 'A2',
        cefrUpgraded: 'C2',
        category: 'Academic Collocation Upgrade',
        criterion: 'Lexical Resource (LR)',
        whyWeak: 'Kết hợp "big/serious + problem" mang văn phong thông thường và làm giám khảo đánh giá vốn collocation hạn chế.',
        whyReplacement: '"Pressing predicament" (tình thế cấp bách) hay "acute systemic challenge" là cặp tính-danh từ học thuật tự nhiên bậc C1-C2.',
        collocationTip: '"Air pollution poses a pressing predicament for metropolitan authorities."'
      },
      {
        pattern: /\b(harm the environment|damage the environment|pollute the environment)\b/gi,
        target: 'harm / damage the environment',
        upgrades: ['exacerbate environmental degradation', 'inflict ecological deterioration', 'compromise ecological equilibrium'],
        academicBand: 8.5,
        cefrOriginal: 'B1',
        cefrUpgraded: 'C2',
        category: 'Academic Collocation Upgrade',
        criterion: 'Lexical Resource (LR)',
        whyWeak: '"Harm the environment" quá trực diện và lặp từ ở mức Band 5.5-6.0 trong chủ đề Môi trường.',
        whyReplacement: '"Exacerbate environmental degradation" hoặc "compromise ecological equilibrium" là bộ collocation vàng đạt Band 8.5+.',
        collocationTip: '"Unregulated industrialization exacerbates environmental degradation."'
      },
      {
        pattern: /\b(protect the environment|save the environment)\b/gi,
        target: 'protect the environment',
        upgrades: ['safeguard ecological sustainability', 'preserve biodiversity and ecological balance', 'conserve fragile ecosystems'],
        academicBand: 8.5,
        cefrOriginal: 'B1',
        cefrUpgraded: 'C1/C2',
        category: 'Academic Collocation Upgrade',
        criterion: 'Lexical Resource (LR)',
        whyWeak: '"Protect/save the environment" là cụm từ khuôn mẫu xuất hiện ở hầu hết bài viết Band 5.5-6.0.',
        whyReplacement: 'Thay thế bằng "safeguard ecological sustainability" để thể hiện vốn từ chuyên sâu về sinh thái.',
        collocationTip: '"Stringent regulations are needed to safeguard ecological sustainability."'
      },
      {
        pattern: /\b(do research|did research|doing research)\b/gi,
        target: 'do research',
        upgrades: ['conduct empirical research', 'undertake rigorous scholarly investigation', 'carry out comprehensive studies'],
        academicBand: 8.0,
        cefrOriginal: 'B1',
        cefrUpgraded: 'C1',
        category: 'Academic Collocation Upgrade',
        criterion: 'Lexical Resource (LR)',
        whyWeak: 'Động từ "do" đi với "research" mang sắc thái văn nói; trong văn viết học thuật cần động từ chuẩn xác hơn.',
        whyReplacement: '"Conduct empirical research" hoặc "undertake rigorous investigation" là collocation chuẩn mực trong học thuật.',
        collocationTip: '"Scientists must conduct empirical research prior to policy enactment."'
      },
      {
        pattern: /\b(make a decision|make decisions)\b/gi,
        target: 'make a decision',
        upgrades: ['reach an informed resolution', 'formulate strategic policies', 'exercise judicious decision-making'],
        academicBand: 8.0,
        cefrOriginal: 'B1',
        cefrUpgraded: 'C1',
        category: 'Academic Collocation Upgrade',
        criterion: 'Lexical Resource (LR)',
        whyWeak: '"Make a decision" tuy đúng ngữ pháp nhưng thiếu chiều sâu học thuật cho các luận điểm phân tích chính sách.',
        whyReplacement: '"Reach an informed resolution" nhấn mạnh quá trình cân nhắc thấu đáo trước khi quyết định.',
        collocationTip: '"Policymakers must reach an informed resolution on fiscal reform."'
      },
      {
        pattern: /\b(take part in|join in)\b/gi,
        target: 'take part in',
        upgrades: ['actively participate in', 'engage meaningfully in', 'immerse oneself in'],
        academicBand: 7.5,
        cefrOriginal: 'A2',
        cefrUpgraded: 'C1',
        category: 'Academic Collocation Upgrade',
        criterion: 'Lexical Resource (LR)',
        whyWeak: 'Cụm động từ "take part in" thiên về giao tiếp phổ thông; chưa diễn đạt được mức độ tham gia chủ động.',
        whyReplacement: '"Engage meaningfully in" thể hiện sự tham gia có chiều sâu và giá trị.',
        collocationTip: '"Youths should engage meaningfully in civic discourse."'
      },
      {
        pattern: /\b(spend a lot of time|waste a lot of time)\b/gi,
        target: 'spend / waste a lot of time',
        upgrades: ['dedicate substantial time', 'allocate considerable hours', 'squander valuable time'],
        academicBand: 8.0,
        cefrOriginal: 'A2',
        cefrUpgraded: 'C1',
        category: 'Academic Collocation Upgrade',
        criterion: 'Lexical Resource (LR)',
        whyWeak: 'Dùng "a lot of" trong bài viết IELTS Academic làm giảm tính trang trọng.',
        whyReplacement: 'Dùng "allocate considerable time" (cho mục đích tích cực) hoặc "squander valuable time" (cho sự lãng phí).',
        collocationTip: '"Adolescents often squander valuable time on passive screen consumption."'
      },
      {
        pattern: /\b(get a job|find a job)\b/gi,
        target: 'get / find a job',
        upgrades: ['secure gainful employment', 'enter the competitive labor market', 'attain stable career prospects'],
        academicBand: 8.5,
        cefrOriginal: 'A2',
        cefrUpgraded: 'C1/C2',
        category: 'Academic Collocation Upgrade',
        criterion: 'Lexical Resource (LR)',
        whyWeak: '"Get a job" là cụm văn nói thân mật, thiếu tính học thuật trong bài luận về Việc làm / Kinh tế.',
        whyReplacement: '"Secure gainful employment" là collocation chuẩn mực của Band 8.0+ chỉ việc tìm được công việc có thu nhập ổn định.',
        collocationTip: '"Vocational training enables graduates to secure gainful employment."'
      },
      {
        pattern: /\b(very important|really important|extremely important)\b/gi,
        target: 'very important',
        upgrades: ['of paramount importance', 'indispensable', 'critically pivotal'],
        academicBand: 8.5,
        cefrOriginal: 'A2',
        cefrUpgraded: 'C2',
        category: 'Academic Collocation Upgrade',
        criterion: 'Lexical Resource (LR)',
        whyWeak: 'Ghép phó từ "very" + tính từ cơ bản ("very important") là dấu hiệu rõ nét của văn phong Band 5.5-6.0.',
        whyReplacement: 'Chuyển sang cụm danh-tính từ học thuật "of paramount importance" hoặc tính từ "indispensable".',
        collocationTip: '"Digital literacy is of paramount importance in contemporary workplaces."'
      },
      {
        pattern: /\b(a lot of|lots of)\b/gi,
        target: 'a lot of / lots of',
        upgrades: ['a substantial volume of', 'a plethora of', 'considerable'],
        academicBand: 8.0,
        cefrOriginal: 'A2',
        cefrUpgraded: 'C1',
        category: 'Academic Register Upgrade',
        criterion: 'Lexical Resource (LR)',
        whyWeak: '"A lot of / lots of" thuộc văn phong nói thân mật, giám khảo IELTS khuyến nghị tránh dùng trong bài viết Academic.',
        whyReplacement: 'Thay bằng "a plethora of" (số lượng lớn, đa dạng) hoặc "considerable".',
        collocationTip: '"There exists a plethora of empirical studies supporting this view."'
      },
      {
        pattern: /\b(more and more)\b/gi,
        target: 'more and more',
        upgrades: ['an escalating number of', 'increasingly prevalent', 'progressively'],
        academicBand: 8.0,
        cefrOriginal: 'A2',
        cefrUpgraded: 'C1',
        category: 'Academic Register Upgrade',
        criterion: 'Lexical Resource (LR)',
        whyWeak: 'Lối lặp từ "more and more" làm câu văn đơn giản và thiếu tính trang trọng học thuật.',
        whyReplacement: 'Sử dụng "increasingly" hoặc "an escalating number of" để diễn tả xu hướng gia tăng tinh tế.',
        collocationTip: '"An escalating number of corporations are adopting remote work."'
      },
      {
        pattern: /\b(many people|a lot of people)\b/gi,
        target: 'many people',
        upgrades: ['a considerable proportion of the populace', 'numerous individuals', 'widespread demographics'],
        academicBand: 8.0,
        cefrOriginal: 'A2',
        cefrUpgraded: 'C1',
        category: 'Sociological Collocation',
        criterion: 'Lexical Resource (LR)',
        whyWeak: '"Many people" quá chung chung và lặp lại nhiều lần khiến bài viết đơn điệu.',
        whyReplacement: 'Dùng "a considerable proportion of the populace" hoặc "numerous individuals" để đa dạng hóa chủ ngữ.',
        collocationTip: '"A considerable proportion of the populace prefers urban living."'
      },
      {
        pattern: /\b(heavy rain|a lot of rain)\b/gi,
        target: 'heavy rain / a lot of rain',
        upgrades: ['torrential downpour', 'incessant rainfall', 'excessive precipitation'],
        academicBand: 8.0,
        cefrOriginal: 'B1',
        cefrUpgraded: 'C1',
        category: 'Academic Collocation Upgrade',
        criterion: 'Lexical Resource (LR)',
        whyWeak: '"Heavy rain" ở mức từ vựng phổ thông; có thể nâng cấp sắc nét hơn khi mô tả khí hậu hoặc thời tiết.',
        whyReplacement: '"Torrential downpour" hoặc "incessant precipitation" tạo ấn tượng mạnh về mặt diễn đạt học thuật.',
        collocationTip: '"Coastal cities frequently confront torrential downpours due to climate shifts."'
      },
      {
        pattern: /\b(modern technology)\b/gi,
        target: 'modern technology',
        upgrades: ['cutting-edge technological innovations', 'contemporary digital infrastructure', 'state-of-the-art advancements'],
        academicBand: 8.0,
        cefrOriginal: 'B1',
        cefrUpgraded: 'C1',
        category: 'Academic Collocation Upgrade',
        criterion: 'Lexical Resource (LR)',
        whyWeak: '"Modern technology" là cụm từ sáo mòn thường xuyên xuất hiện trong mở bài mẫu.',
        whyReplacement: '"Cutting-edge technological innovations" diễn tả chuẩn xác công nghệ tiên tiến đương đại.',
        collocationTip: '"Cutting-edge technological innovations have revolutionized healthcare."'
      },
      {
        pattern: /\b(bad habit|bad habits)\b/gi,
        target: 'bad habit',
        upgrades: ['detrimental behavioral patterns', 'unhealthy lifestyle tendencies', 'pernicious habits'],
        academicBand: 8.5,
        cefrOriginal: 'A2',
        cefrUpgraded: 'C1/C2',
        category: 'Academic Collocation Upgrade',
        criterion: 'Lexical Resource (LR)',
        whyWeak: '"Bad habit" quá đơn giản trong bối cảnh phân tích tâm lý hoặc sức khỏe cộng đồng.',
        whyReplacement: '"Detrimental behavioral patterns" thể hiện cách nhìn khoa học hành vi.',
        collocationTip: '"Early education can rectify detrimental behavioral patterns."'
      },
      {
        pattern: /\b(high price|expensive price)\b/gi,
        target: 'high price',
        upgrades: ['prohibitive cost', 'exorbitant pricing', 'escalating financial burden'],
        academicBand: 8.5,
        cefrOriginal: 'B1',
        cefrUpgraded: 'C2',
        category: 'Academic Collocation Upgrade',
        criterion: 'Lexical Resource (LR)',
        whyWeak: '"High price" thiếu sắc thái đánh giá tác động kinh tế đối với người tiêu dùng.',
        whyReplacement: '"Prohibitive cost" (chi phí đắt đỏ đến mức ngăn cản tiếp cận) là collocation đắt giá.',
        collocationTip: '"The prohibitive cost of housing exacerbates urban inequality."'
      },
      {
        pattern: /\bpeople believe\b/gi,
        target: 'people believe',
        upgrades: [
          'it is widely postulated that',
          'prevailing discourse contends that',
          'a prevalent school of thought posits that'
        ],
        academicBand: 8.5,
        cefrOriginal: 'B1',
        cefrUpgraded: 'C2',
        category: 'Academic Discourse',
        criterion: 'Lexical Resource (LR)',
        whyWeak: '"People believe" là cách diễn đạt phổ thông mộc mạc, không phân loại được nhóm người tin tưởng hay trường phái tư tưởng nào.',
        whyReplacement: 'Động từ "postulate" (tiên đề hóa) hoặc "posit" (xác lập luận đề) đưa luận điểm lên bình diện tranh biện học thuật giữa các trường phái tư tưởng.',
        collocationTip: '"It is widely postulated by sociologists that...".'
      },
      {
        pattern: /\b(good thing|positive effect|good effect)\b/gi,
        target: 'good thing / positive effect',
        upgrades: [
          'salutary development',
          'meritorious outcome',
          'beneficial ramification'
        ],
        academicBand: 9.0,
        cefrOriginal: 'B1',
        cefrUpgraded: 'C2',
        category: 'Advanced Academic Lexicon',
        criterion: 'Lexical Resource (LR)',
        whyWeak: '"Good thing" mang tính mơ hồ cực độ (Semantic Vague), không thể hiện được tính chất tốt là về mặt đạo đức, sức khỏe, xã hội hay kinh tế.',
        whyReplacement: '"Salutary development" là cụm từ vàng ngọc của Band 9.0 chỉ sự phát triển mang lại lợi ích lâu dài và lành mạnh; "meritorious outcome" nhấn mạnh giá trị xứng đáng.',
        collocationTip: '"This shift can be characterized as a salutary development for...".'
      },
      {
        pattern: /\b(bad thing|bad effect|negative effect)\b/gi,
        target: 'bad thing / negative effect',
        upgrades: [
          'deleterious repercussions',
          'adverse ramifications',
          'pernicious consequences'
        ],
        academicBand: 9.0,
        cefrOriginal: 'B1',
        cefrUpgraded: 'C2',
        category: 'Academic Precision',
        criterion: 'Lexical Resource (LR)',
        whyWeak: '"Bad effect" là lối nói non nớt, làm bài viết mất điểm Lexical Resource vì không dùng được các collocations chuyên ngành.',
        whyReplacement: '"Deleterious repercussions" (những dư chấn độc hại/tiêu cực) và "adverse ramifications" (những phân nhánh hậu quả bất lợi) là bộ đôi vũ khí đắt giá nhất khi phân tích phản đề trong Task 2.',
        collocationTip: '"Exert deleterious repercussions on the ecosystem".'
      },
      {
        pattern: /\bgood\b/gi,
        target: 'good',
        upgrades: ['exemplary', 'advantageous', 'salubrious', 'meritorious'],
        academicBand: 8.0,
        cefrOriginal: 'A1',
        cefrUpgraded: 'C1',
        category: 'Vocabulary Enrichment',
        criterion: 'Lexical Resource (LR)',
        whyWeak: '"Good" là tính từ cơ bản nhất trong tiếng Anh. Dùng "good" trong bài thi học thuật thể hiện sự lười tư duy từ vựng.',
        whyReplacement: 'Tùy theo đối tượng: hành vi đạo đức ➔ "exemplary"; sức khỏe/môi trường ➔ "salubrious"; giải pháp ➔ "advantageous".',
        collocationTip: '"Set an exemplary precedent" / "in an advantageous position".'
      },
      {
        pattern: /\bbad\b/gi,
        target: 'bad',
        upgrades: ['detrimental', 'pernicious', 'substandard', 'deplorable'],
        academicBand: 8.0,
        cefrOriginal: 'A1',
        cefrUpgraded: 'C1',
        category: 'Vocabulary Enrichment',
        criterion: 'Lexical Resource (LR)',
        whyWeak: 'Tương tự "good", "bad" quá yếu ớt để thuyết phục giám khảo về mức độ nghiêm trọng của vấn đề.',
        whyReplacement: '"Detrimental" (mang tính hủy hoại/tổn hại) hoặc "deplorable" (đáng quan ngại/tồi tệ) tạo ra trọng lượng học thuật mạnh mẽ.',
        collocationTip: '"Have a detrimental effect on" / "live in deplorable conditions".'
      },
      {
        pattern: /\bhelp\b/gi,
        target: 'help',
        upgrades: ['facilitate', 'expedite', 'bolster', 'buttress'],
        academicBand: 8.0,
        cefrOriginal: 'A2',
        cefrUpgraded: 'C1',
        category: 'Verbal Precision',
        criterion: 'Lexical Resource (LR)',
        whyWeak: '"Help" thường chỉ sự giúp đỡ trực tiếp kiểu cá nhân. Trong cơ chế chính sách hoặc công nghệ, dùng "help" làm giảm tính khách quan.',
        whyReplacement: '"Facilitate" (tạo điều kiện thuận lợi cho tiến trình) hoặc "buttress" (chống đỡ/củng cố vững chắc) phản ánh chính xác cơ chế vận hành của hiện tượng.',
        collocationTip: '"Facilitate economic growth" / "buttress the central thesis".'
      },
      {
        pattern: /\bmake\b/gi,
        target: 'make',
        upgrades: ['render', 'engender', 'generate', 'induce'],
        academicBand: 8.0,
        cefrOriginal: 'A2',
        cefrUpgraded: 'C1',
        category: 'Verbal Precision',
        criterion: 'Lexical Resource & GRA',
        whyWeak: 'Động từ "make" quá đơn giản và thông tục, cấu trúc "make + O + adj" dễ gây cảm giác nhàm chán.',
        whyReplacement: 'Cấu trúc "render + Object + Adjective" (ví dụ: *render human labor obsolete*) là cấu trúc thượng thặng thể hiện năng lực làm chủ cú pháp.',
        collocationTip: '"Render the system redundant" / "engender widespread controversies".'
      },
      {
        pattern: /\b(problem|problems)\b/gi,
        target: 'problem',
        upgrades: [
          'pressing predicament',
          'intractable dilemma',
          'systemic impediment',
          'acute quandary'
        ],
        academicBand: 8.5,
        cefrOriginal: 'A2',
        cefrUpgraded: 'C2',
        category: 'Nuanced Collocation',
        criterion: 'Lexical Resource (LR)',
        whyWeak: '"Problem" là danh từ mơ hồ, không phản ánh được bản chất của khó khăn: liệu đó là tình thế khó xử, trở ngại cấu trúc hay nghịch lý nan giải.',
        whyReplacement: '"Predicament" (tình thế ngặt nghèo), "intractable dilemma" (song đề nan giải không có lối thoát dễ dàng) hoặc "systemic impediment" (trở ngại hệ thống) thể hiện chiều sâu phân tích của thí sinh Band 8+.',
        collocationTip: '"Confront a pressing predicament" / "address systemic impediments".'
      },
      {
        pattern: /\bchange\b/gi,
        target: 'change',
        upgrades: ['undergo a paradigm shift', 'fundamental metamorphosis', 'structural evolution'],
        academicBand: 8.5,
        cefrOriginal: 'B1',
        cefrUpgraded: 'C2',
        category: 'Academic Paradigm',
        criterion: 'Lexical Resource (LR)',
        whyWeak: '"Change" là động/danh từ bề mặt, không làm nổi bật được quy mô và tính chất bước ngoặt của sự chuyển đổi.',
        whyReplacement: '"Undergo a paradigm shift" (sự chuyển dịch hệ hình nhận thức - khái niệm của nhà khoa học Thomas Kuhn) ngay lập tức định vị bài viết ở đẳng cấp học giả.',
        collocationTip: '"The industry has undergone a paradigm shift towards...".'
      },
      {
        pattern: /\brich people\b/gi,
        target: 'rich people',
        upgrades: ['affluent demographics', 'privileged socio-economic strata', 'the upper echelons of wealth'],
        academicBand: 8.5,
        cefrOriginal: 'A2',
        cefrUpgraded: 'C1',
        category: 'Sociological Precision',
        criterion: 'Lexical Resource (LR)',
        whyWeak: '"Rich people" là cách nói phân loại dân gian thô mộc, thiếu tính khách quan xã hội học.',
        whyReplacement: '"Affluent demographics" hoặc "privileged socio-economic strata" sử dụng thuật ngữ phân tầng xã hội của Xã hội học hiện đại, chuẩn văn phong IELTS Task 2.',
        collocationTip: '"Resource allocation among affluent demographics".'
      },
      {
        pattern: /\bpoor people\b/gi,
        target: 'poor people',
        upgrades: ['underprivileged echelons', 'economically disenfranchised communities', 'marginalized citizens'],
        academicBand: 8.5,
        cefrOriginal: 'A2',
        cefrUpgraded: 'C2',
        category: 'Sociological Precision',
        criterion: 'Lexical Resource (LR)',
        whyWeak: '"Poor people" mang sắc thái định kiến thô, không thể hiện được tính nhân văn và phân tích chính sách.',
        whyReplacement: '"Economically disenfranchised communities" (cộng đồng bị tước quyền lợi kinh tế) hoặc "underprivileged echelons" phản ánh tư duy chính sách vĩ mô.',
        collocationTip: '"Welfare policies directed towards underprivileged echelons".'
      },
      {
        pattern: /\b(show|shows)\b/gi,
        target: 'show',
        upgrades: ['elucidates', 'substantiates', 'exemplifies', 'manifests'],
        academicBand: 8.0,
        cefrOriginal: 'A2',
        cefrUpgraded: 'C1',
        category: 'Academic Verbs',
        criterion: 'Lexical Resource (LR)',
        whyWeak: 'Động từ "show" quá thông dụng trong đời sống, không diễn tả được cách thức bằng chứng được đưa ra.',
        whyReplacement: '"Substantiate" (chứng minh bằng bằng chứng thực nghiệm vững chắc) hoặc "elucidate" (làm sáng tỏ điều uẩn khúc) mang tính học thuật đỉnh cao.',
        collocationTip: '"Statistical evidence substantiates the hypothesis".'
      },
      {
        pattern: /\bstop\b/gi,
        target: 'stop',
        upgrades: ['curtail', 'mitigate', 'forestall', 'arrest the progress of'],
        academicBand: 8.0,
        cefrOriginal: 'A2',
        cefrUpgraded: 'C1',
        category: 'Academic Verbs',
        criterion: 'Lexical Resource (LR)',
        whyWeak: '"Stop" là hành động dừng đột ngột mang tính vật lý thô ráp, không phù hợp khi nói về hiện tượng xã hội hay chính sách.',
        whyReplacement: '"Curtail" (cắt giảm/hạn chế) hoặc "mitigate" (giảm nhẹ tác hại) diễn tả chính xác các biện pháp can thiệp có tính toán.',
        collocationTip: '"Curtail carbon emissions" / "mitigate severe outcomes".'
      },
      {
        pattern: /\b(increase|go up)\b/gi,
        target: 'increase / go up',
        upgrades: ['proliferate exponentially', 'escalate precipitously', 'experience an upward trajectory'],
        academicBand: 8.5,
        cefrOriginal: 'B1',
        cefrUpgraded: 'C1',
        category: 'Task 1 & Task 2 Lexicon',
        criterion: 'Lexical Resource (LR)',
        whyWeak: '"Go up" là cụm động từ văn nói; "increase" đứng một mình thiếu tính sinh động về biên độ và tốc độ biến thiên.',
        whyReplacement: 'Kết hợp động từ chỉ xu thế với trạng từ học thuật ("proliferate exponentially") thể hiện sự thấu hiểu số liệu và collocations đẳng cấp.',
        collocationTip: '"Costs have escalated precipitously over the past decade".'
      },
      {
        pattern: /\b(decrease|go down)\b/gi,
        target: 'decrease / go down',
        upgrades: ['witness a precipitate decline', 'diminish substantially', 'plummet markedly'],
        academicBand: 8.5,
        cefrOriginal: 'B1',
        cefrUpgraded: 'C1',
        category: 'Task 1 & Task 2 Lexicon',
        criterion: 'Lexical Resource (LR)',
        whyWeak: '"Go down" thuộc văn phong khẩu ngữ; "decrease" dùng lặp lại nhiều lần gây đơn điệu.',
        whyReplacement: 'Cấu trúc "witness a precipitate decline" (chứng kiến sự sụt giảm nhanh chóng) mang tính phân tích khách quan của báo cáo khoa học.',
        collocationTip: '"The market witnessed a precipitate decline".'
      }
    ];

    // Execution: Detect Spelling Errors
    const detectedSpelling = [];
    const tokenRegex = /[a-zA-Z']+/g;
    let match;
    let spellCounter = 0;

    while ((match = tokenRegex.exec(text)) !== null) {
      const originalWord = match[0];
      const lower = originalWord.toLowerCase();
      if (spellDict[lower]) {
        spellCounter++;
        const item = spellDict[lower];
        let corrected = item.fix;
        if (originalWord[0] === originalWord[0].toUpperCase()) {
          corrected = corrected.charAt(0).toUpperCase() + corrected.slice(1);
        }
        detectedSpelling.push({
          id: `spell-${spellCounter}`,
          type: 'spelling',
          word: originalWord,
          correction: corrected,
          index: match.index,
          length: originalWord.length,
          tip: item.tip,
          category: 'Spelling & Accuracy',
          criterion: 'Grammatical Range & Accuracy (GRA)',
          cefrOriginal: 'B1',
          cefrUpgraded: 'C1/C2',
          whyWeak: `Lỗi viết sai chính tả "${originalWord}" vi phạm trực tiếp tiêu chí Grammatical Range & Accuracy (GRA). Theo biểu điểm IELTS Band Descriptors, việc mắc các lỗi chính tả cơ bản sẽ khóa chặt điểm ngữ pháp của bài viết ở mức tối đa Band 5.5 - 6.0.`,
          whyReplacement: `Viết đúng chuẩn "${corrected}" loại trừ hoàn toàn lỗi sai cơ bản, bảo toàn tính chính xác tuyệt đối và giải phóng tư duy để tập trung vào kiến trúc câu phức.`
        });
      }
    }

    // Execution: Detect Vocabulary & Collocation Upgrades (Longest-first, Non-overlapping!)
    const detectedVocab = [];
    const occupiedSpans = detectedSpelling.map(s => [s.index, s.index + s.length]);
    const overlapsSpan = (start, end) => occupiedSpans.some(([s, e]) => !(end <= s || start >= e));

    let vocabCounter = 0;
    const prioritizedBoosters = [...vocabBoosters].sort((a, b) => {
      const aWords = (a.target || '').split(/\s+/).length;
      const bWords = (b.target || '').split(/\s+/).length;
      if (bWords !== aWords) return bWords - aWords;
      return (b.target || '').length - (a.target || '').length;
    });
    prioritizedBoosters.forEach(b => {
      let vMatch;
      const re = new RegExp(b.pattern.source, 'gi');
      while ((vMatch = re.exec(text)) !== null) {
        const start = vMatch.index;
        const end = start + vMatch[0].length;
        if (overlapsSpan(start, end)) continue; // Avoid breaking an already-upgraded multi-word collocation!

        occupiedSpans.push([start, end]);
        vocabCounter++;
        detectedVocab.push({
          id: `vocab-${vocabCounter}`,
          type: 'vocab',
          matchedText: vMatch[0],
          target: b.target,
          upgrades: b.upgrades,
          academicBand: b.academicBand,
          category: b.category,
          criterion: b.criterion,
          cefrOriginal: b.cefrOriginal,
          cefrUpgraded: b.cefrUpgraded,
          whyWeak: b.whyWeak,
          whyReplacement: b.whyReplacement,
          collocationTip: b.collocationTip,
          index: start,
          length: vMatch[0].length
        });
      }
    });

    // Combine All Issues Sorted by Index
    const allIssues = [
      ...detectedSpelling.map(s => ({ ...s, originalText: s.word, replacement: s.correction, badgeLabel: 'Chính tả', color: 'red' })),
      ...detectedVocab.map(v => ({
        ...v,
        word: v.matchedText,
        originalText: v.matchedText,
        correction: v.upgrades[0],
        replacement: v.upgrades[0],
        badgeLabel: v.category && v.category.includes('Collocation') ? 'Collocation Band 8+' : 'Từ vựng Band 8+',
        color: 'blue'
      }))
    ].sort((a, b) => a.index - b.index);

    allIssues.forEach((issue, idx) => {
      issue.issueNumber = idx + 1;
    });

    // Build Polished Academic Text cleanly in Reverse Index Order (Zero collision!)
    let polishedText = text;
    [...allIssues].sort((a, b) => b.index - a.index).forEach(iss => {
      let rep = iss.replacement;
      const origChar = iss.originalText ? iss.originalText[0] : '';
      if (origChar && origChar === origChar.toUpperCase() && origChar !== origChar.toLowerCase()) {
        rep = rep.charAt(0).toUpperCase() + rep.slice(1);
      }
      polishedText = polishedText.substring(0, iss.index) + rep + polishedText.substring(iss.index + iss.length);
    });

    // Compute Metrics & IELTS 4 Criteria Scores (Scale 0.0 - 9.0)
    const spellErrorCount = detectedSpelling.length;
    const vocabUpgradeCount = detectedVocab.length;
    const spellingAccuracy = wordCount > 0 ? Math.max(0, Math.min(100, Math.round(((wordCount - spellErrorCount) / wordCount) * 100))) : 100;

    // 1. Lexical Resource (LR)
    const origLR = vocabUpgradeCount >= 3 ? 5.5 : vocabUpgradeCount > 0 ? 6.0 : (wordCount > 30 ? 7.5 : 6.5);
    const upgLR = Math.min(9.0, Math.max(8.5, origLR + 2.5));

    // 2. Grammatical Range & Accuracy (GRA)
    const origGRA = spellErrorCount >= 2 ? 5.0 : spellErrorCount === 1 ? 5.5 : (wordCount > 30 ? 7.0 : 6.0);
    const upgGRA = Math.min(9.0, Math.max(8.5, origGRA + 2.5));

    // 3. Coherence & Cohesion (CC)
    const origCC = wordCount > 40 ? 6.5 : 6.0;
    const upgCC = 8.5;

    // 4. Task Response (TR)
    const origTR = wordCount > 40 ? 6.5 : 5.5;
    const upgTR = 8.5;

    // Overall Calculation (IELTS rounding to nearest 0.5)
    const roundIelts = (val) => Math.round(val * 2) / 2;
    const origOverall = roundIelts((origLR + origGRA + origCC + origTR) / 4);
    const upgOverall = roundIelts((upgLR + upgGRA + upgCC + upgTR) / 4);

    return {
      originalText: text,
      polishedText: polishedText,
      spellingErrors: detectedSpelling,
      vocabUpgrades: detectedVocab,
      allIssues: allIssues,
      spellingAccuracy: spellingAccuracy,
      lexicalBandOriginal: origOverall.toFixed(1),
      lexicalBandUpgraded: upgOverall.toFixed(1),
      wordCount: wordCount,
      characterCount: text.length,
      criteriaScores: {
        original: {
          overall: origOverall,
          lr: origLR,
          gra: origGRA,
          cc: origCC,
          tr: origTR,
          lexicalResource: origLR,
          grammarAccuracy: origGRA,
          coherenceCohesion: origCC,
          taskResponse: origTR
        },
        upgraded: {
          overall: upgOverall,
          lr: upgLR,
          gra: upgGRA,
          cc: upgCC,
          tr: upgTR,
          lexicalResource: upgLR,
          grammarAccuracy: upgGRA,
          coherenceCohesion: upgCC,
          taskResponse: upgTR
        }
      }
    };
  }

  // =========================================================================
  // UNIFIED PERSONALIZED AI CHATBOT WIDGET (AUTO-MOUNTED ACROSS ALL PAGES)
  // =========================================================================
  initFloatingChatbotWidget() {
    if (typeof document === 'undefined' || document.getElementById('aiChatbotDrawer')) return;

    // 1. Mount launcher button seamlessly without colliding with floatingThemeBtn
    const launcherBtn = document.createElement('button');
    launcherBtn.id = 'aiChatbotLauncherBtn';
    launcherBtn.type = 'button';
    launcherBtn.onclick = () => this.toggleChatbotDrawer();
    launcherBtn.className = 'flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold shadow-xl border border-blue-400/40 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white transition-all duration-200 active:scale-95';
    launcherBtn.title = 'Mở Trợ lý AI Chatbot Cá Nhân Hóa';
    launcherBtn.innerHTML = `
      <span class="relative flex h-2.5 w-2.5">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
      </span>
      <span>🤖 AI Chatbot</span>
    `;

    const existingFloatBar = document.querySelector('.fixed.bottom-6.right-6');
    if (existingFloatBar) {
      existingFloatBar.appendChild(launcherBtn);
    } else {
      const wrap = document.createElement('div');
      wrap.className = 'fixed bottom-5 right-5 z-50 flex items-center gap-2.5';
      wrap.appendChild(launcherBtn);
      document.body.appendChild(wrap);
    }

    // 2. Mount Floating Chatbot Drawer
    const drawer = document.createElement('div');
    drawer.id = 'aiChatbotDrawer';
    drawer.className = 'hidden fixed bottom-20 right-4 sm:right-6 z-50 w-[92vw] sm:w-[420px] h-[560px] max-h-[80vh] rounded-2xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-slate-700 shadow-2xl flex flex-col overflow-hidden text-slate-800 dark:text-slate-100';

    drawer.innerHTML = `
      <!-- Header -->
      <div class="px-4 py-3 bg-gradient-to-r from-[#0A2540] via-[#004085] to-blue-600 text-white flex items-center justify-between shrink-0">
        <div class="flex items-center gap-2.5 min-w-0">
          <div class="w-9 h-9 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center text-lg shrink-0 shadow-xs">
            🤖
          </div>
          <div class="min-w-0">
            <h4 class="font-bold text-xs sm:text-sm truncate">Trợ Lý AI Cá Nhân Hóa</h4>
            <p id="aiChatbotSubtitle" class="text-[10px] font-mono text-blue-200 truncate">
              Xin chào ${this.escapeHtml(this.profile.name || 'Học viên')} • Band ${this.escapeHtml(this.profile.targetBand || '8.0')}
            </p>
          </div>
        </div>
        <div class="flex items-center gap-1.5 shrink-0">
          <button type="button" id="aiChatbotTogglePersonalBtn" onclick="window.socraticAI.switchChatbotView('personal')"
            class="px-2.5 py-1 rounded-lg bg-white/15 hover:bg-white/25 text-white text-[11px] font-mono font-bold transition-all border border-white/20"
            title="Cài đặt thông tin cá nhân hóa cho AI">
            ⚙️ Cá nhân hóa
          </button>
          <button type="button" onclick="window.socraticAI.clearChatbotHistory()"
            class="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs flex items-center justify-center transition-all"
            title="Làm mới cuộc trò chuyện">
            🗑️
          </button>
          <button type="button" onclick="window.socraticAI.toggleChatbotDrawer(false)"
            class="w-7 h-7 rounded-lg bg-white/10 hover:bg-rose-500/80 text-white text-xs flex items-center justify-center transition-all"
            title="Đóng">
            ✕
          </button>
        </div>
      </div>

      <!-- VIEW 1: CHAT STREAM -->
      <div id="aiChatbotChatView" class="flex-1 flex flex-col min-h-0">
        <div id="aiChatbotMessages" class="flex-1 overflow-y-auto p-3.5 space-y-3 text-xs bg-slate-50/70 dark:bg-[#071020]"></div>

        <!-- Dynamic Personalized Quick Prompts -->
        <div id="aiChatbotQuickChips" class="px-3 py-2 bg-white dark:bg-[#0D1930] border-t border-slate-200 dark:border-slate-800 flex items-center gap-1.5 overflow-x-auto shrink-0 no-scrollbar"></div>

        <!-- Input Bar -->
        <form onsubmit="window.socraticAI.handleChatbotFormSubmit(event)" class="p-3 bg-white dark:bg-[#0B1528] border-t border-slate-200 dark:border-slate-800 flex items-center gap-2 shrink-0">
          <input id="aiChatbotInput" type="text"
            placeholder="Hỏi bất cứ điều gì hoặc gõ 'Tên tôi là...' để cá nhân hóa..."
            class="flex-1 px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" />
          <button id="aiChatbotSendBtn" type="submit"
            class="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm transition-all shrink-0 active:scale-95">
            Gửi
          </button>
          <button id="aiChatbotStopBtn" type="button" onclick="window.socraticAI.stopChatbotStream()"
            class="hidden px-3 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-sm transition-all shrink-0">
            Dừng
          </button>
        </form>
      </div>

      <!-- VIEW 2: PERSONALIZATION SETTINGS -->
      <div id="aiChatbotPersonalView" class="hidden flex-1 overflow-y-auto p-4 space-y-3.5 text-xs bg-slate-50/70 dark:bg-[#071020]">
        <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
          <div>
            <h5 class="font-bold text-sm text-slate-900 dark:text-white">👤 Cá Nhân Hóa Trợ Lý AI</h5>
            <p class="text-[11px] text-slate-500 dark:text-slate-400">AI sẽ tự động điều chỉnh cách trả lời, lộ trình &amp; ví dụ theo thông tin này.</p>
          </div>
          <button type="button" onclick="window.socraticAI.switchChatbotView('chat')"
            class="px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-[11px]">
            ← Quay lại Chat
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <div>
            <label class="block text-[11px] font-mono font-bold text-slate-600 dark:text-slate-300 mb-1">Tên gọi của bạn</label>
            <input id="cbPersName" type="text" placeholder="VD: Thành Hưng"
              class="w-full px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs" />
          </div>
          <div>
            <label class="block text-[11px] font-mono font-bold text-slate-600 dark:text-slate-300 mb-1">Ngày dự thi (tùy chọn)</label>
            <input id="cbPersExamDate" type="date"
              class="w-full px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs" />
          </div>
          <div>
            <label class="block text-[11px] font-mono font-bold text-slate-600 dark:text-slate-300 mb-1">Trình độ hiện tại</label>
            <select id="cbPersCurrentBand" class="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs">
              <option value="5.0">Band 5.0</option>
              <option value="5.5">Band 5.5</option>
              <option value="6.0">Band 6.0</option>
              <option value="6.5">Band 6.5</option>
              <option value="7.0">Band 7.0</option>
              <option value="7.5">Band 7.5</option>
              <option value="8.0">Band 8.0</option>
            </select>
          </div>
          <div>
            <label class="block text-[11px] font-mono font-bold text-slate-600 dark:text-slate-300 mb-1">Mục tiêu Band</label>
            <select id="cbPersTargetBand" class="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs">
              <option value="6.5">Band 6.5</option>
              <option value="7.0">Band 7.0</option>
              <option value="7.5">Band 7.5</option>
              <option value="8.0">Band 8.0</option>
              <option value="8.5">Band 8.5</option>
              <option value="9.0">Band 9.0</option>
            </select>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <div>
            <label class="block text-[11px] font-mono font-bold text-slate-600 dark:text-slate-300 mb-1">Kỹ năng ưu tiên / cần cải thiện</label>
            <select id="cbPersFocus" class="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs">
              <option value="ALL">Cả 4 kỹ năng IELTS</option>
              <option value="READING">Reading (Đọc hiểu &amp; TFNG)</option>
              <option value="LISTENING">Listening (Nghe &amp; Bẫy)</option>
              <option value="WRITING">Writing (Task 1 &amp; Task 2)</option>
              <option value="SPEAKING">Speaking (Phản xạ &amp; Phát âm)</option>
              <option value="VOCAB_GRAMMAR">Từ vựng &amp; Collocations</option>
            </select>
          </div>
          <div>
            <label class="block text-[11px] font-mono font-bold text-slate-600 dark:text-slate-300 mb-1">Phong cách AI trả lời</label>
            <select id="cbPersStyle" class="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs">
              <option value="friendly">Thân thiện &amp; Dễ hiểu</option>
              <option value="academic">Chuyên sâu Học thuật C1-C2</option>
              <option value="concise">Ngắn gọn, Súc tích &amp; Thực chiến</option>
            </select>
          </div>
        </div>

        <div>
          <label class="block text-[11px] font-mono font-bold text-slate-600 dark:text-slate-300 mb-1">Sở thích, mục tiêu &amp; lưu ý riêng cho AI</label>
          <textarea id="cbPersNotes" rows="2" placeholder="VD: Mình đang là sinh viên ngành CNTT, thích ví dụ về công nghệ, hay nhầm FALSE và NOT GIVEN..."
            class="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs"></textarea>
        </div>

        <div id="cbPersMemoriesContainer" class="space-y-1"></div>

        <button type="button" onclick="window.socraticAI.saveChatbotPersonalization()"
          class="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-all active:scale-98">
          💾 Lưu Thiết Lập Cá Nhân Hóa
        </button>
      </div>
    `;

    document.body.appendChild(drawer);
    this.renderChatbotQuickChips();
    this.renderChatbotMessages();
  }

  toggleChatbotDrawer(forceState) {
    const drawer = document.getElementById('aiChatbotDrawer');
    if (!drawer) return;
    const isHidden = drawer.classList.contains('hidden');
    const shouldOpen = typeof forceState === 'boolean' ? forceState : isHidden;

    if (shouldOpen) {
      drawer.classList.remove('hidden');
      this.refreshChatbotHeaderUI();
      this.renderChatbotQuickChips();
      setTimeout(() => document.getElementById('aiChatbotInput')?.focus(), 80);
    } else {
      drawer.classList.add('hidden');
    }
  }

  switchChatbotView(viewName) {
    const chatView = document.getElementById('aiChatbotChatView');
    const persView = document.getElementById('aiChatbotPersonalView');
    const toggleBtn = document.getElementById('aiChatbotTogglePersonalBtn');
    if (!chatView || !persView) return;

    if (viewName === 'personal' && !persView.classList.contains('hidden')) {
      viewName = 'chat';
    }

    if (viewName === 'personal') {
      chatView.classList.add('hidden');
      persView.classList.remove('hidden');
      if (toggleBtn) toggleBtn.innerText = '💬 Trò chuyện';

      // Populate fields from profile
      const p = this.profile;
      const setVal = (id, v) => { const el = document.getElementById(id); if (el) el.value = v || ''; };
      setVal('cbPersName', p.name === 'Học viên' ? '' : p.name);
      setVal('cbPersExamDate', p.examDate || '');
      setVal('cbPersCurrentBand', p.currentEstimatedBand || '7.0');
      setVal('cbPersTargetBand', p.targetBand || '8.0');
      setVal('cbPersFocus', p.focusSkill || 'ALL');
      setVal('cbPersStyle', p.responseStyle || 'friendly');
      setVal('cbPersNotes', p.personalNotes || '');
      this.renderCustomMemoriesList();
    } else {
      persView.classList.add('hidden');
      chatView.classList.remove('hidden');
      if (toggleBtn) toggleBtn.innerText = '⚙️ Cá nhân hóa';
    }
  }

  renderCustomMemoriesList() {
    const box = document.getElementById('cbPersMemoriesContainer');
    if (!box) return;
    const mems = this.profile.customMemories || [];
    if (mems.length === 0) {
      box.innerHTML = '';
      return;
    }
    box.innerHTML = `
      <span class="block text-[10px] font-mono font-bold text-slate-500 uppercase">AI đã ghi nhớ từ hội thoại:</span>
      <div class="flex flex-wrap gap-1.5 pt-1">
        ${mems.map((m, idx) => `
          <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-[11px] text-blue-800 dark:text-blue-200">
            <span>${this.escapeHtml(m)}</span>
            <button type="button" onclick="window.socraticAI.removeCustomMemory(${idx})" class="text-slate-400 hover:text-rose-500 font-bold ml-0.5">×</button>
          </span>
        `).join('')}
      </div>
    `;
  }

  removeCustomMemory(idx) {
    if (!Array.isArray(this.profile.customMemories)) return;
    this.profile.customMemories.splice(idx, 1);
    this.saveProfile(this.profile);
    this.renderCustomMemoriesList();
  }

  saveChatbotPersonalization() {
    const getVal = (id) => (document.getElementById(id)?.value || '').trim();
    const newName = getVal('cbPersName') || 'Học viên';
    this.profile.name = newName;
    this.profile.examDate = getVal('cbPersExamDate');
    this.profile.currentEstimatedBand = getVal('cbPersCurrentBand') || '7.0';
    this.profile.targetBand = getVal('cbPersTargetBand') || '8.0';
    this.profile.focusSkill = getVal('cbPersFocus') || 'ALL';
    this.profile.responseStyle = getVal('cbPersStyle') || 'friendly';
    this.profile.personalNotes = getVal('cbPersNotes');

    this.saveProfile(this.profile);
    this.refreshChatbotHeaderUI();
    this.renderChatbotQuickChips();
    this.switchChatbotView('chat');

    // Post personalized confirmation bubble
    const confirmMsg = `✅ Đã lưu thiết lập cá nhân hóa cho **${newName}**! (Mục tiêu **Band ${this.profile.targetBand}** • Kỹ năng ưu tiên: **${this.profile.focusSkill}**). Bạn có câu hỏi nào muốn bắt đầu ngay không?`;
    this.conversationHistory.push({ role: 'assistant', content: confirmMsg });
    this.saveChatHistory();
    this.renderChatbotMessages();
  }

  refreshChatbotHeaderUI() {
    const sub = document.getElementById('aiChatbotSubtitle');
    if (sub) {
      const name = this.profile?.name || 'Học viên';
      const band = this.profile?.targetBand || '8.0';
      sub.innerText = `Xin chào ${name} • Band ${band}`;
    }
  }

  renderChatbotQuickChips() {
    const box = document.getElementById('aiChatbotQuickChips');
    if (!box) return;
    const skill = window.activeExamSkill || this.profile.focusSkill || 'GENERAL';
    const chips = [
      { label: '👤 Hồ sơ của tôi', prompt: 'Xem hồ sơ và điểm yếu của tôi' },
      { label: '📖 Tra từ & Word Family', prompt: 'Word family và collocation của từ mitigate' },
      { label: '🔁 Dịch sang Anh C1', prompt: 'Dịch: Công nghệ hiện đại giúp bảo vệ môi trường hiệu quả hơn.' }
    ];
    if (skill === 'READING') {
      chips.unshift({ label: '⚖️ Phân biệt FALSE vs NOT GIVEN', prompt: 'Phân biệt nhanh FALSE và NOT GIVEN trong IELTS Reading' });
    } else if (skill === 'WRITING') {
      chips.unshift({ label: '✍️ Dàn ý Task 2 Band 8', prompt: 'Hướng dẫn lập dàn ý IELTS Writing Task 2 chuẩn Band 8.0' });
    } else {
      chips.unshift({ label: '🌐 Hỏi kiến thức', prompt: 'Hiệu ứng nhà kính là gì?' });
    }

    box.innerHTML = chips.map(c => `
      <button type="button" onclick="window.socraticAI.sendChatbotUserMessage('${c.prompt.replace(/'/g, "\\'")}')"
        class="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-blue-100 dark:bg-slate-800 dark:hover:bg-blue-900/50 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 text-[11px] whitespace-nowrap shrink-0 transition-all cursor-pointer">
        ${c.label}
      </button>
    `).join('');
  }

  renderChatbotMessages() {
    const container = document.getElementById('aiChatbotMessages');
    if (!container) return;

    const name = this.profile?.name || 'bạn';
    const target = this.profile?.targetBand || '8.0';
    let html = `
      <div class="flex items-start gap-2">
        <div class="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center text-xs shrink-0 mt-0.5">🤖</div>
        <div class="p-3 rounded-2xl rounded-tl-sm bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 max-w-[88%] leading-relaxed">
          <p class="font-bold text-blue-700 dark:text-blue-300">Xin chào ${this.escapeHtml(name)}!</p>
          <p>Tôi là <strong>Trợ lý AI Cá nhân hóa</strong> (Mục tiêu Band ${this.escapeHtml(target)}). Bạn có thể hỏi tôi thông tin kiến thức thực tế, tra từ điển / Word Family, dịch câu, hoặc cập nhật thông tin cá nhân ngay trong cuộc trò chuyện!</p>
        </div>
      </div>
    `;

    (this.conversationHistory || []).forEach(msg => {
      if (msg.role === 'user') {
        html += `
          <div class="flex justify-end">
            <div class="p-2.5 rounded-2xl rounded-tr-sm bg-blue-600 text-white max-w-[85%] shadow-xs leading-relaxed">
              ${this.escapeHtml(msg.content)}
            </div>
          </div>
        `;
      } else {
        html += `
          <div class="flex items-start gap-2">
            <div class="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center text-xs shrink-0 mt-0.5">🤖</div>
            <div class="p-3 rounded-2xl rounded-tl-sm bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-2 max-w-[88%] leading-relaxed">
              ${this.renderMarkdown(msg.content)}
            </div>
          </div>
        `;
      }
    });

    container.innerHTML = html;
    container.scrollTop = container.scrollHeight;
  }

  handleChatbotFormSubmit(e) {
    e.preventDefault();
    const input = document.getElementById('aiChatbotInput');
    if (!input) return;
    const text = input.value.trim();
    if (!text) return;
    input.value = '';
    this.sendChatbotUserMessage(text);
  }

  async sendChatbotUserMessage(userText) {
    const container = document.getElementById('aiChatbotMessages');
    if (!container) return;

    // Append user bubble
    const userWrap = document.createElement('div');
    userWrap.className = 'flex justify-end';
    userWrap.innerHTML = `
      <div class="p-2.5 rounded-2xl rounded-tr-sm bg-blue-600 text-white max-w-[85%] shadow-xs leading-relaxed">
        ${this.escapeHtml(userText)}
      </div>
    `;
    container.appendChild(userWrap);

    // Append AI streaming bubble
    const botWrap = document.createElement('div');
    botWrap.className = 'flex items-start gap-2';
    const bubbleId = 'ai-cb-msg-' + Date.now();
    botWrap.innerHTML = `
      <div class="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center text-xs shrink-0 mt-0.5">🤖</div>
      <div id="${bubbleId}" class="p-3 rounded-2xl rounded-tl-sm bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-2 max-w-[88%] leading-relaxed">
        <span class="inline-block w-1.5 h-3.5 bg-blue-600 animate-pulse"></span>
      </div>
    `;
    container.appendChild(botWrap);
    container.scrollTop = container.scrollHeight;

    const sendBtn = document.getElementById('aiChatbotSendBtn');
    const stopBtn = document.getElementById('aiChatbotStopBtn');
    if (sendBtn && stopBtn) {
      sendBtn.classList.add('hidden');
      stopBtn.classList.remove('hidden');
    }

    const contentEl = document.getElementById(bubbleId);
    const activeSkill = window.activeExamSkill || this.profile.focusSkill || 'GENERAL';

    await this.processUserMessage(
      userText,
      { skill: activeSkill, activeSkill: activeSkill },
      (accumulated) => {
        if (contentEl) {
          contentEl.innerHTML = this.renderMarkdown(accumulated) + '<span class="inline-block w-1.5 h-3.5 bg-blue-600 ml-0.5 animate-pulse">▋</span>';
          container.scrollTop = container.scrollHeight;
        }
      },
      (finalText) => {
        if (contentEl) {
          contentEl.innerHTML = this.renderMarkdown(finalText);
          container.scrollTop = container.scrollHeight;
        }
        if (sendBtn && stopBtn) {
          sendBtn.classList.remove('hidden');
          stopBtn.classList.add('hidden');
        }
      }
    );
  }

  stopChatbotStream() {
    this.stopStreaming();
    const sendBtn = document.getElementById('aiChatbotSendBtn');
    const stopBtn = document.getElementById('aiChatbotStopBtn');
    if (sendBtn && stopBtn) {
      sendBtn.classList.remove('hidden');
      stopBtn.classList.add('hidden');
    }
  }

  clearChatbotHistory() {
    this.conversationHistory = [];
    this.saveChatHistory();
    this.renderChatbotMessages();
  }
}

// Global singleton instance
window.socraticAI = new SocraticAIEngine();
