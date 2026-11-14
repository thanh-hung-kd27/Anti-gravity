/**
 * IELTS ACADEMIC LAB - AUTHENTIC 3-PART CD-IELTS SPEAKING ENGINE
 * Format: 11 – 14 Minutes Total Duration
 * - Part 1 (4 – 5 Phút): Introduction & Interview (Familiar personal & daily topics)
 * - Part 2 (3 – 4 Phút): Individual Long Turn (Cue Card + 1 min prep scratchpad + 2 min speech + follow-ups)
 * - Part 3 (4 – 5 Phút): Two-way Discussion (In-depth, abstract & analytical discussion)
 * - Scoring: Official 4 Criteria (FC, LR, GRA, P) & IDP/British Council Scorecard
 * Brand: IELTS ACADEMIC LAB (Zero hardcoded names, dynamic student profile)
 */

(function () {
  'use strict';

  // ==========================================
  // 1. DATA: AUTHENTIC IELTS SPEAKING TESTS (PARTS 1, 2, 3)
  // ==========================================
  const SPEAKING_TESTS = {
    'cam19-spk-t1': {
      id: 'cam19-spk-t1',
      title: 'Cambridge 19 - Test 1: Speaking Interview (Technology, Daily Routines & Cognitive Evolution)',
      totalDurationMinutes: 14,
      examinerName: 'Dr. Margaret Vance (Senior IELTS Examiner)',
      
      // ------------------------------------------------------------------
      // PART 1: INTRODUCTION & INTERVIEW (4 - 5 MINUTES)
      // ------------------------------------------------------------------
      part1: {
        title: 'Part 1: Introduction & Familiar Topics',
        durationText: '4 – 5 Phút',
        introText: 'Good afternoon. My name is Dr. Margaret Vance. Can you tell me your full name, please? Thank you. In this first part, I would like to ask you some questions about yourself and some familiar topics.',
        topics: [
          {
            topicTitle: 'Topic A: Work / Study & Hometown',
            questions: [
              {
                id: 'p1_q1',
                text: 'Are you currently working or are you a student? What do you find most intellectually rewarding about it?',
                hint: 'Trả lời trực diện, mở rộng lý do và cảm xúc cá nhân (2-3 câu).',
                sample8: 'Currently, I am pursuing my academic career, specializing in cognitive linguistics. What I find particularly fulfilling is deciphering how syntax shapes human logic and problem-solving capabilities on a daily basis.',
                collocations: ['pursue an academic career', 'intellectually fulfilling', 'problem-solving capabilities']
              },
              {
                id: 'p1_q2',
                text: 'Can you tell me about the place where you grew up? What kind of neighborhood is it?',
                hint: 'Mô tả không gian sống, điểm nổi bật và bầu không khí (atmosphere).',
                sample8: 'I was brought up in a bustling urban district that offers a striking juxtaposition of traditional local street markets and cutting-edge architectural developments. It possesses a vibrant community spirit.',
                collocations: ['brought up in', 'striking juxtaposition', 'vibrant community spirit']
              },
              {
                id: 'p1_q3',
                text: 'Has your hometown undergone significant changes since your childhood?',
                hint: 'Sử dụng thì hiện tại hoàn thành (Present Perfect) để so sánh quá khứ và hiện tại.',
                sample8: 'Without a doubt, it has transformed remarkably. The expansion of high-speed mass transit infrastructure has dramatically enhanced connectivity, though it has inevitably led to heightened commercialization.',
                collocations: ['transformed remarkably', 'mass transit infrastructure', 'dramatically enhanced connectivity']
              }
            ]
          },
          {
            topicTitle: 'Topic B: Daily Routines & Digital Life',
            questions: [
              {
                id: 'p1_q4',
                text: 'Do you maintain a consistent morning routine, or does it vary day by day?',
                hint: 'Dùng các trạng từ chỉ tần suất và từ nối chỉ trật tự thời gian.',
                sample8: 'I adhere to a relatively disciplined morning ritual. I typically dedicate the initial thirty minutes to mindful reflection and reviewing my intellectual objectives before engaging with any digital screens.',
                collocations: ['adhere to a disciplined ritual', 'mindful reflection', 'intellectual objectives']
              },
              {
                id: 'p1_q5',
                text: 'Which digital device do you rely on most heavily throughout your day?',
                hint: 'Nêu rõ thiết bị, công năng thiết thực và mức độ phụ thuộc tích cực.',
                sample8: 'Unquestionably my laptop, which acts as the epicentre of my research and analytical writing. Its multi-tasking capabilities make it virtually indispensable for my academic workflow.',
                collocations: ['rely on heavily', 'epicentre of research', 'virtually indispensable']
              },
              {
                id: 'p1_q6',
                text: 'Do you prefer physical paper books and notebooks, or do you do everything digitally?',
                hint: 'So sánh tương quan giữa trải nghiệm xúc giác (tactile) và sự tiện lợi kỹ thuật số.',
                sample8: 'While digital tools offer unparalleled convenience and searchability, I still retain a deep affinity for tactile paper notebooks when brainstorming complex concepts, as it minimizes digital distractions.',
                collocations: ['unparalleled convenience', 'deep affinity for', 'tactile experience']
              }
            ]
          },
          {
            topicTitle: 'Topic C: Leisure & Decompression',
            questions: [
              {
                id: 'p1_q7',
                text: 'How do you usually decompress and unwind after an intense period of cognitive strain?',
                hint: 'Giải thích hoạt động giúp hồi phục năng lượng tinh thần.',
                sample8: 'I tend to immerse myself in instrumental classical music or take contemplative walks in nature. Disconnecting from algorithmic notifications allows my neural system to rejuvenate effectively.',
                collocations: ['decompress and unwind', 'contemplative walks', 'rejuvenate effectively']
              },
              {
                id: 'p1_q8',
                text: 'Do you prefer spending your downtime in solitude or surrounded by a large group of people?',
                hint: 'Thể hiện góc nhìn cân bằng giữa nhu cầu nội tâm và tương tác xã hội.',
                sample8: 'I definitely lean towards solitude for introspective recharge, although I equally cherish meaningful, dialectical conversations with a tight-knit circle of close friends on weekends.',
                collocations: ['lean towards solitude', 'introspective recharge', 'tight-knit circle of friends']
              }
            ]
          }
        ]
      },

      // ------------------------------------------------------------------
      // PART 2: INDIVIDUAL LONG TURN / CUE CARD (3 - 4 MINUTES)
      // ------------------------------------------------------------------
      part2: {
        title: 'Part 2: Individual Long Turn (Cue Card)',
        durationText: '3 – 4 Phút tổng cộng',
        cueCard: {
          topic: 'Describe a digital tool, application, or piece of technology that has fundamentally transformed your productivity or lifestyle.',
          bulletPoints: [
            'What the tool or technology is and how you first discovered it',
            'When and why you began integrating it into your daily schedule',
            'What specific features or functionalities you utilize most frequently',
            'And explain how this tool has fundamentally altered your efficiency, habits, or cognitive mindset.'
          ],
          prepTimeSeconds: 60,
          speakTimeSeconds: 120,
          scratchpadGuidance: 'Ý tưởng gợi ý nháp (1 phút): Định danh công cụ ➔ Lý do bắt đầu dùng ➔ 2-3 tính năng cốt lõi ➔ Tác động sâu sắc đến tư duy/thói quen ➔ Đánh giá tương lai.'
        },
        roundingQuestions: [
          {
            id: 'p2_followup_1',
            text: 'Do other people in your social or professional circle utilize this tool as extensively as you do?',
            hint: 'Trả lời súc tích trong 1-2 câu để kết thúc Part 2.',
            sample8: 'Yes, virtually all my colleagues and study peers have adopted it, making collaborative brainstorming seamless.'
          },
          {
            id: 'p2_followup_2',
            text: 'Would it be disruptive for you if you had to manage without it for an entire month?',
            hint: 'Trả lời nhanh, nhấn mạnh khả năng thích nghi.',
            sample8: 'It would certainly cause temporary friction, but it would also serve as a refreshing digital detox.'
          }
        ]
      },

      // ------------------------------------------------------------------
      // PART 3: TWO-WAY DISCUSSION (4 - 5 MINUTES)
      // ------------------------------------------------------------------
      part3: {
        title: 'Part 3: Two-way Abstract & Analytical Discussion',
        durationText: '4 – 5 Phút',
        theme: 'Technological Determinism, Automation & Human Cognitive Evolution',
        introText: 'We have been talking about a digital tool that influences your routine. Now, in Part 3, I would like to discuss some broader, more abstract issues related to this topic.',
        questions: [
          {
            id: 'p3_q1',
            topicLabel: 'Technology & Interpersonal Communication',
            text: 'To what extent has pervasive digital communication eroded the depth of authentic interpersonal relationships among younger generations?',
            hint: 'Phân tích cả hai mặt: Mở rộng kết nối địa lý (breadth) vs Giảm sút tính thấu cảm chiều sâu (depth).',
            sample8: 'While hyper-connectivity has undoubtedly democratized cross-border communication, it has simultaneously proliferated superficial interactions. When non-verbal cues and physical presence are filtered out, spontaneous empathy is frequently compromised.',
            collocations: ['hyper-connectivity', 'proliferated superficial interactions', 'spontaneous empathy']
          },
          {
            id: 'p3_q2',
            topicLabel: 'Cognitive Offloading & Critical Thinking',
            text: 'Some cognitive scientists express concern that automated algorithms encourage "cognitive offloading," diminishing our critical analytical faculties. How valid is this apprehension?',
            hint: 'Liên hệ với lý thuyết trí tuệ mở rộng (Extended Mind) và sự phụ thuộc nhận thức.',
            sample8: 'The concern is profoundly legitimate. When humans routinely delegate memory retrieval and analytical deduction to algorithmic predictive models, neural plasticity can lead to atrophy in independent problem-solving skills.',
            collocations: ['cognitive offloading', 'profoundly legitimate', 'neural plasticity', 'algorithmic predictive models']
          },
          {
            id: 'p3_q3',
            topicLabel: 'The Future Role of Educators vs AI',
            text: 'Do you foresee artificial intelligence completely superseding human educators in university and school lecture halls in the foreseeable future?',
            hint: 'Lập luận biện chứng: AI cung cấp dữ liệu & thích ứng cá nhân hóa, nhưng con người đóng vai trò cố vấn đạo đức và truyền cảm hứng.',
            sample8: 'I consider a complete obsolescence of human mentors highly improbable. While AI possesses immense pedagogical efficiency in disseminating empirical knowledge, it utterly lacks moral judgment, emotional resonance, and the Socratic capability to nurture character.',
            collocations: ['complete obsolescence', 'pedagogical efficiency', 'emotional resonance', 'moral judgment']
          },
          {
            id: 'p3_q4',
            topicLabel: 'Ethics, Privacy & Digital Sovereignty',
            text: 'What measures should international governance bodies establish to ensure that rapid technological advancements do not infringe upon individual privacy and mental autonomy?',
            hint: 'Bàn về khung pháp lý, tính minh bạch thuật toán và quyền tự chủ dữ liệu của công dân.',
            sample8: 'Regulatory institutions must implement stringent accountability frameworks that demand algorithmic transparency and penalize unauthorized biometric tracking, thereby safeguarding individual cognitive sovereignty.',
            collocations: ['stringent accountability frameworks', 'algorithmic transparency', 'cognitive sovereignty']
          }
        ]
      }
    }
  };

  // Map aliases from library
  SPEAKING_TESTS['spk-cam19-t1'] = SPEAKING_TESTS['cam19-spk-t1'];
  SPEAKING_TESTS['spk-cam19-t2'] = SPEAKING_TESTS['cam19-spk-t1'];
  SPEAKING_TESTS['spk-forecast-q4'] = SPEAKING_TESTS['cam19-spk-t1'];
  SPEAKING_TESTS['spk-forecast-ai'] = SPEAKING_TESTS['cam19-spk-t1'];
  SPEAKING_TESTS['spk-philo-tao'] = SPEAKING_TESTS['cam19-spk-t1'];

  // ==========================================
  // 2. RUNTIME STATE MANAGEMENT
  // ==========================================
  let currentTestId = 'cam19-spk-t1';
  let currentSpeakingPart = 1; // 1, 2, or 3
  let currentPart1TopicIdx = 0;
  let currentPart1QuestionIdx = 0;
  let currentPart3QuestionIdx = 0;

  // Answers & transcripts recorded by candidate
  const candidateTranscripts = {
    part1: {}, // { [qId]: text }
    part2_prepNotes: '',
    part2_speech: '',
    part2_followups: {},
    part3: {}  // { [qId]: text }
  };

  // Timers & Media States
  let prepCountdownInterval = null;
  let prepSecondsRemaining = 60;
  let speechCountdownInterval = null;
  let speechSecondsRemaining = 120;
  let isSpeechRecording = false;
  let speechRecognizer = null;
  let isSpeechRecognitionActive = false;

  // ==========================================
  // 3. EXAMINER TEXT-TO-SPEECH (TTS)
  // ==========================================
  function speakExaminerPrompt(text, onComplete) {
    if (!('speechSynthesis' in window)) {
      if (typeof onComplete === 'function') onComplete();
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-GB';
    utterance.rate = 0.95;
    utterance.pitch = 1.0;

    // Pick best British or native English voice if available
    const voices = window.speechSynthesis.getVoices();
    const ukVoice = voices.find(v => v.lang.includes('en-GB') || v.name.includes('British') || v.name.includes('UK'));
    if (ukVoice) utterance.voice = ukVoice;

    // Visual wave animation
    const waveEl = document.getElementById('examinerSpeechWave');
    if (waveEl && waveEl.classList) waveEl.classList.remove('hidden');

    utterance.onend = () => {
      if (waveEl && waveEl.classList) waveEl.classList.add('hidden');
      if (typeof onComplete === 'function') onComplete();
    };

    utterance.onerror = () => {
      if (waveEl && waveEl.classList) waveEl.classList.add('hidden');
      if (typeof onComplete === 'function') onComplete();
    };

    window.speechSynthesis.speak(utterance);
  }

  function stopExaminerSpeech() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    const waveEl = document.getElementById('examinerSpeechWave');
    if (waveEl && waveEl.classList) waveEl.classList.add('hidden');
  }

  // ==========================================
  // 4. SPEECH RECOGNITION (STT) & MICROPHONE (GEMINI-GRADE AI STT)
  // ==========================================
  let activeSpeechRecognizer = null;
  let activeRecordingFieldId = null;
  let currentSpeechLanguage = (typeof localStorage !== 'undefined' && localStorage.getItem('ielts_speaking_lang')) || 'en-US';
  let audioContext = null;
  let audioStream = null;
  let audioAnalyser = null;
  let visualizerAnimFrame = null;
  let startingFieldValue = '';

  function setSpeakingLanguage(lang) {
    currentSpeechLanguage = lang;
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('ielts_speaking_lang', lang);
    }

    updateLangSwitcherUI();

    // If currently recording, restart recognizer seamlessly with the new language
    if (isSpeechRecording && activeRecordingFieldId) {
      const targetId = activeRecordingFieldId;
      stopSpeakingRecording();
      setTimeout(() => {
        toggleSpeakingRecording(targetId);
      }, 150);
    }

    if (window.socraticAI && window.socraticAI.showLearningToast) {
      window.socraticAI.showLearningToast(
        lang === 'vi-VN'
          ? "🇻🇳 Đã chuyển sang chế độ Tiếng Việt (Thu âm chuẩn xác có dấu như Gemini)."
          : "🇬🇧 Đã chuyển sang chế độ Tiếng Anh (Chuẩn phát âm bản xứ khảo thí IELTS)."
      );
    }
  }

  function updateLangSwitcherUI() {
    ['en-US', 'vi-VN'].forEach(l => {
      const isEn = l === 'en-US';
      const btns = document.querySelectorAll(isEn ? '.btn-lang-en' : '.btn-lang-vi');
      btns.forEach(b => {
        if (currentSpeechLanguage === l) {
          b.className = "btn-lang-" + (isEn ? 'en' : 'vi') + " px-2.5 py-1 rounded-lg font-bold font-mono text-[11px] transition-all bg-purple-600 text-white shadow-sm ring-1 ring-purple-400";
        } else {
          b.className = "btn-lang-" + (isEn ? 'en' : 'vi') + " px-2.5 py-1 rounded-lg font-bold font-mono text-[11px] transition-all bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700";
        }
      });
    });
  }

  function getMicControlsForField(fieldId) {
    if (fieldId === 'p2SpeechTranscriptInput') {
      return {
        btn: document.getElementById('p2MicRecordBtn'),
        statusText: document.getElementById('p2MicStatusText'),
        visualizer: document.getElementById('p2MicVisualizer'),
        field: document.getElementById('p2SpeechTranscriptInput'),
        defaultColorClass: 'bg-red-600 hover:bg-red-700'
      };
    }
    if (fieldId === 'p3UserAnswerInput') {
      return {
        btn: document.getElementById('p3MicRecordBtn'),
        statusText: document.getElementById('p3MicStatusText'),
        visualizer: document.getElementById('p3MicVisualizer'),
        field: document.getElementById('p3UserAnswerInput'),
        defaultColorClass: 'bg-indigo-600 hover:bg-indigo-700'
      };
    }
    return {
      btn: document.getElementById('micRecordBtn'),
      statusText: document.getElementById('micStatusText'),
      visualizer: document.getElementById('p1MicVisualizer'),
      field: document.getElementById('p1UserAnswerInput'),
      defaultColorClass: 'bg-red-600 hover:bg-red-700'
    };
  }

  function formatSpeechTranscript(text) {
    if (!text) return '';
    let formatted = text.trim();
    // Capitalize first character
    formatted = formatted.charAt(0).toUpperCase() + formatted.slice(1);
    // Capitalize after sentence terminators (. ! ?)
    formatted = formatted.replace(/([.!?]\s+)([a-zà-ỹ])/g, (_, p1, p2) => p1 + p2.toUpperCase());
    // Capitalize standalone English " i "
    formatted = formatted.replace(/\b(i)\b/g, 'I');
    return formatted;
  }

  async function startAudioVisualizer(controls) {
    try {
      const AudioCtx = window.AudioContext || window.webkitSpeechRecognition;
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) return;

      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!audioContext && AudioContextClass) {
        audioContext = new AudioContextClass();
      }
      if (audioContext && audioContext.state === 'suspended') {
        await audioContext.resume();
      }

      // Studio quality audio constraints like Gemini
      audioStream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
          channelCount: 1,
          sampleRate: 48000
        }
      });

      if (audioContext) {
        const source = audioContext.createMediaStreamSource(audioStream);
        audioAnalyser = audioContext.createAnalyser();
        audioAnalyser.fftSize = 64;
        source.connect(audioAnalyser);

        if (controls && controls.visualizer) {
          controls.visualizer.classList.remove('hidden');
        }

        const dataArray = new Uint8Array(audioAnalyser.frequencyBinCount);

        function updateVisualizer() {
          if (!isSpeechRecording || !audioAnalyser) return;
          audioAnalyser.getByteFrequencyData(dataArray);

          let sum = 0;
          for (let i = 0; i < dataArray.length; i++) {
            sum += dataArray[i];
          }
          const avg = sum / dataArray.length;
          const norm = Math.min(1.0, Math.max(0.12, avg / 70));

          const bars = document.querySelectorAll('.sound-bar');
          bars.forEach((bar, idx) => {
            const factor = (idx % 2 === 0 ? 0.85 : 1.25) * (idx === 2 || idx === 3 ? 1.4 : 1.0);
            const height = Math.max(8, Math.min(46, norm * 42 * factor));
            bar.style.height = `${height}px`;
          });

          visualizerAnimFrame = requestAnimationFrame(updateVisualizer);
        }

        updateVisualizer();
      }
    } catch (e) {
      console.warn("Studio audio visualizer notice:", e);
    }
  }

  function stopAudioVisualizer() {
    if (visualizerAnimFrame) {
      cancelAnimationFrame(visualizerAnimFrame);
      visualizerAnimFrame = null;
    }
    if (audioStream) {
      try {
        audioStream.getTracks().forEach(t => t.stop());
      } catch (e) {}
      audioStream = null;
    }
    const visualizers = document.querySelectorAll('.mic-audio-visualizer');
    visualizers.forEach(v => v.classList.add('hidden'));
    const bars = document.querySelectorAll('.sound-bar');
    bars.forEach(b => { b.style.height = '8px'; });
  }

  function updateFieldWordCount(fieldId, text) {
    const wordCount = (text || '').trim().split(/\s+/).filter(Boolean).length;
    const badge = document.getElementById(fieldId + '_wordCount');
    if (badge) {
      badge.innerText = `${wordCount} từ`;
      if (wordCount > 0) {
        badge.className = "px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 transition-all";
      } else {
        badge.className = "px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-100 dark:bg-slate-800 text-slate-500 border border-slate-200 dark:border-slate-700 transition-all";
      }
    }
    updateHeaderTotalWordCount();
  }

  function updateHeaderTotalWordCount() {
    const p1Words = Object.values(candidateTranscripts.part1 || {}).join(' ').trim().split(/\s+/).filter(Boolean).length;
    const p2SpeechText = (candidateTranscripts.part2_speech || '').trim();
    const p2NotesText = (candidateTranscripts.part2_prepNotes || '').trim();
    const p2Words = (p2SpeechText + (p2NotesText && !p2SpeechText ? ' ' + p2NotesText : '')).trim().split(/\s+/).filter(Boolean).length;
    const p3Words = Object.values(candidateTranscripts.part3 || {}).join(' ').trim().split(/\s+/).filter(Boolean).length;
    const total = p1Words + p2Words + p3Words;

    const el = document.getElementById('headerWordCountNum');
    if (el) el.innerText = total;
  }

  function saveCurrentFieldToTranscripts(fieldId, value) {
    const test = SPEAKING_TESTS[currentTestId] || SPEAKING_TESTS['cam19-spk-t1'];
    if (fieldId === 'p1UserAnswerInput') {
      const currentTopic = test.part1 && test.part1.topics ? test.part1.topics[currentPart1TopicIdx] : null;
      const currentQ = currentTopic && currentTopic.questions ? currentTopic.questions[currentPart1QuestionIdx] : null;
      if (currentQ && currentQ.id) {
        candidateTranscripts.part1[currentQ.id] = value;
      }
    } else if (fieldId === 'p2PrepNotesInput') {
      candidateTranscripts.part2_prepNotes = value;
    } else if (fieldId === 'p2SpeechTranscriptInput') {
      candidateTranscripts.part2_speech = value;
    } else if (fieldId === 'p3UserAnswerInput') {
      const currentQ3 = test.part3 && test.part3.questions ? test.part3.questions[currentPart3QuestionIdx] : null;
      if (currentQ3 && currentQ3.id) {
        candidateTranscripts.part3[currentQ3.id] = value;
      }
    }
    updateFieldWordCount(fieldId, value);
  }

  function stopSpeakingRecording() {
    isSpeechRecording = false;
    stopAudioVisualizer();

    if (activeSpeechRecognizer) {
      try {
        activeSpeechRecognizer.onend = null;
        activeSpeechRecognizer.stop();
      } catch (e) {}
      activeSpeechRecognizer = null;
    }

    if (activeRecordingFieldId) {
      const controls = getMicControlsForField(activeRecordingFieldId);
      if (controls.btn) {
        controls.btn.className = `w-14 h-14 sm:w-16 sm:h-16 rounded-full ${controls.defaultColorClass} text-white flex items-center justify-center mx-auto shadow-lg active:scale-95 transition-all`;
        controls.btn.innerHTML = `<i data-lucide="mic" class="w-6 h-6 sm:w-7 sm:h-7"></i>`;
      }
      if (controls.statusText) {
        const langName = currentSpeechLanguage === 'vi-VN' ? 'Tiếng Việt' : 'Tiếng Anh';
        controls.statusText.innerText = `Đã tạm dừng thu âm [${langName}]. Bấm lại microphone để tiếp tục nói, hoặc gõ/sửa trực tiếp văn bản.`;
        controls.statusText.className = "text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-2";
      }
      const field = document.getElementById(activeRecordingFieldId);
      if (field) {
        saveCurrentFieldToTranscripts(activeRecordingFieldId, field.value);
      }
      activeRecordingFieldId = null;
    }

    if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
  }

  function toggleSpeakingRecording(targetFieldId) {
    if (isSpeechRecording) {
      stopSpeakingRecording();
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const controls = getMicControlsForField(targetFieldId);
    const inputField = document.getElementById(targetFieldId);

    activeRecordingFieldId = targetFieldId;
    startingFieldValue = inputField ? inputField.value.trim() : '';

    if (!SpeechRecognition) {
      if (controls.statusText) {
        controls.statusText.innerText = "🎙️ Trình duyệt chưa hỗ trợ Web Speech API trực tiếp. Bạn hãy gõ câu trả lời trực tiếp vào ô văn bản bên dưới, hệ thống vẫn lưu và chấm điểm 4 tiêu chí đầy đủ!";
        controls.statusText.className = "text-[11px] font-mono text-amber-600 dark:text-amber-400 font-bold mt-2";
      }
      if (window.socraticAI && window.socraticAI.showLearningToast) {
        window.socraticAI.showLearningToast("🎙️ Trình duyệt chưa hỗ trợ Web Speech API. Bạn hãy gõ câu trả lời vào ô soạn thảo để chấm điểm.");
      }
      if (inputField) inputField.focus();
      return;
    }

    try {
      // Start studio-quality visualizer
      startAudioVisualizer(controls);

      const recognizer = new SpeechRecognition();
      recognizer.continuous = true;
      recognizer.interimResults = true;
      // Use chosen language: 'vi-VN' for Vietnamese, 'en-US' for English
      recognizer.lang = currentSpeechLanguage || 'en-US';

      recognizer.onstart = () => {
        isSpeechRecording = true;
        const isVi = currentSpeechLanguage === 'vi-VN';
        if (controls.btn) {
          controls.btn.className = "w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center mx-auto shadow-xl ring-4 ring-emerald-400/40 animate-pulse transition-all";
          controls.btn.innerHTML = `<i data-lucide="square" class="w-6 h-6"></i>`;
        }
        if (controls.statusText) {
          controls.statusText.innerHTML = `
            <span>🎙️ Đang lắng nghe <strong>${isVi ? '🇻🇳 Tiếng Việt' : '🇬🇧 Tiếng Anh'}</strong>... Hãy nói rõ ràng vào micro!</span>
            <span class="block text-[10px] text-slate-400 mt-0.5">
              ${isVi ? 'Đang nhận diện tiếng Việt có dấu.' : 'Đang nhận diện tiếng Anh chuẩn IELTS.'}
              <button type="button" onclick="window.setSpeakingLanguage('${isVi ? 'en-US' : 'vi-VN'}')" class="text-purple-500 hover:underline font-bold ml-1">
                ${isVi ? 'Đổi sang Tiếng Anh ➔' : 'Đổi sang Tiếng Việt ➔'}
              </button>
            </span>
          `;
          controls.statusText.className = "text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold mt-2 animate-pulse";
        }
        if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
      };

      recognizer.onresult = (event) => {
        let finalSession = '';
        let interimSession = '';
        for (let i = 0; i < event.results.length; ++i) {
          const item = event.results[i];
          if (item.isFinal) {
            finalSession += item[0].transcript + ' ';
          } else {
            interimSession += item[0].transcript;
          }
        }
        const cleanBase = startingFieldValue ? startingFieldValue.trim() + ' ' : '';
        const rawSpoken = (cleanBase + finalSession + interimSession).trim();
        const formatted = formatSpeechTranscript(rawSpoken);

        if (inputField) {
          inputField.value = formatted;
          saveCurrentFieldToTranscripts(targetFieldId, formatted);
        }
      };

      recognizer.onerror = (event) => {
        console.warn("Speech recognition error:", event.error);
        if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
          if (controls.statusText) {
            controls.statusText.innerText = "❌ Microphone bị chặn hoặc chưa cấp quyền. Vui lòng bấm vào biểu tượng Micro/Khóa trên thanh URL và chọn Cho phép (Allow) Microphone, hoặc gõ trực tiếp câu trả lời vào ô soạn thảo.";
            controls.statusText.className = "text-[11px] font-mono text-rose-600 dark:text-rose-400 font-bold mt-2";
          }
          if (window.socraticAI && window.socraticAI.showLearningToast) {
            window.socraticAI.showLearningToast("⚠️ Microphone chưa được cấp quyền. Vui lòng cấp quyền micro trên trình duyệt hoặc gõ trực tiếp câu trả lời.");
          }
          stopSpeakingRecording();
        } else if (event.error === 'no-speech') {
          // Keep listening
        } else if (event.error === 'network') {
          if (controls.statusText) {
            controls.statusText.innerText = "⚠️ Lỗi kết nối dịch vụ Speech API. Bạn có thể gõ trực tiếp câu trả lời vào ô văn bản.";
            controls.statusText.className = "text-[11px] font-mono text-amber-600 dark:text-amber-400 font-bold mt-2";
          }
        }
      };

      recognizer.onend = () => {
        if (isSpeechRecording && activeRecordingFieldId === targetFieldId) {
          try {
            recognizer.start();
          } catch (e) {
            console.warn("Restart recognizer notice:", e);
          }
        }
      };

      activeSpeechRecognizer = recognizer;
      recognizer.start();
    } catch (e) {
      console.warn("Speech recognition init failure:", e);
      if (controls.statusText) {
        controls.statusText.innerText = "⚠️ Không thể bật microphone: " + (e.message || 'Lỗi không xác định') + ". Bạn có thể gõ trực tiếp câu trả lời.";
        controls.statusText.className = "text-[11px] font-mono text-rose-600 dark:text-rose-400 mt-2";
      }
      stopSpeakingRecording();
    }

    if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
  }

  // ==========================================
  // 5. MAIN RENDER FUNCTION: SPEAKING ENVIRONMENT
  // ==========================================
  function renderSpeakingTestEnvironment(testId) {
    currentTestId = testId || currentTestId;
    const test = SPEAKING_TESTS[currentTestId] || SPEAKING_TESTS['cam19-spk-t1'];
    const viewport = document.getElementById('testViewport');
    const chatBox = document.getElementById('aiChatBox');
    if (!viewport) return;

    viewport.innerHTML = `
      <div class="flex flex-col h-full space-y-4 font-sans select-text">

        <!-- Top Navigation Bar: 3 Authentic Parts -->
        <div class="p-3 bg-white dark:bg-[#111C44] rounded-2xl border border-iot-border dark:border-slate-800 shadow-sm flex flex-wrap items-center justify-between gap-3 shrink-0">
          
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-purple-500 animate-pulse"></span>
            <span class="text-xs font-bold font-mono text-purple-700 dark:text-purple-300 uppercase tracking-wider">
              OFFICIAL IELTS SPEAKING • 11–14 PHÚT
            </span>
          </div>

          <!-- 3 Parts Segmented Switcher -->
          <div class="inline-flex rounded-xl p-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono">
            <button onclick="window.switchSpeakingPart(1)" id="spkTabBtn-1"
              class="px-3 py-1.5 rounded-lg font-bold transition-all ${currentSpeakingPart === 1 ? 'bg-purple-600 text-white shadow-sm' : 'text-slate-600 dark:text-slate-300 hover:text-purple-600'} flex items-center gap-1.5">
              <span>Part 1: Làm quen (4–5p)</span>
            </button>
            <button onclick="window.switchSpeakingPart(2)" id="spkTabBtn-2"
              class="px-3 py-1.5 rounded-lg font-semibold transition-all ${currentSpeakingPart === 2 ? 'bg-purple-600 text-white shadow-sm' : 'text-slate-600 dark:text-slate-300 hover:text-purple-600'} flex items-center gap-1.5">
              <span>Part 2: Cue Card (3–4p)</span>
            </button>
            <button onclick="window.switchSpeakingPart(3)" id="spkTabBtn-3"
              class="px-3 py-1.5 rounded-lg font-semibold transition-all ${currentSpeakingPart === 3 ? 'bg-purple-600 text-white shadow-sm' : 'text-slate-600 dark:text-slate-300 hover:text-purple-600'} flex items-center gap-1.5">
              <span>Part 3: Thảo luận (4–5p)</span>
            </button>
          </div>

          <!-- Word Counter & End Test & Submit -->
          <div class="flex items-center gap-2">
            <div id="headerSpeakingWordCount" class="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-50 dark:bg-purple-950/80 border border-purple-200 dark:border-purple-800 text-xs font-mono font-bold text-purple-700 dark:text-purple-300">
              <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-500"></i>
              <span>Tổng ghi nhận: <strong id="headerWordCountNum">0</strong> từ</span>
            </div>

            <button onclick="window.submitSpeakingExam()"
              class="px-3.5 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-mono text-xs font-bold shadow-md transition-all flex items-center gap-1.5 active:scale-95">
              <i data-lucide="award" class="w-3.5 h-3.5 text-amber-300"></i>
              <span>Chấm Điểm 4 Tiêu Chí</span>
            </button>
          </div>
        </div>

        <!-- Examiner Header Banner -->
        <div class="p-3.5 rounded-2xl bg-gradient-to-r from-purple-900 via-indigo-900 to-[#121c44] text-white flex items-center justify-between shadow-md shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-purple-500/20 border-2 border-purple-400 flex items-center justify-center font-bold text-sm text-purple-200">
              🎙️
            </div>
            <div>
              <div class="flex items-center gap-2">
                <span class="text-xs font-bold">${test.examinerName}</span>
                <span class="text-[9px] bg-purple-400/20 text-purple-200 px-1.5 py-0.2 rounded font-mono border border-purple-400/30">IDP/BC Examiner Voice</span>
              </div>
              <p class="text-[11px] text-purple-200/80 font-mono">
                Chuẩn khảo thí trực tiếp 1:1 • Phát âm bản xứ • Phỏng vấn đa tầng
              </p>
            </div>
          </div>

          <!-- Sound Wave Animation Indicator -->
          <div id="examinerSpeechWave" class="hidden flex items-center gap-1">
            <span class="w-1 h-3 bg-purple-300 animate-pulse"></span>
            <span class="w-1 h-5 bg-purple-200 animate-pulse"></span>
            <span class="w-1 h-4 bg-purple-300 animate-pulse"></span>
            <span class="w-1 h-6 bg-purple-100 animate-pulse"></span>
            <span class="w-1 h-2 bg-purple-300 animate-pulse"></span>
            <span class="text-[10px] text-purple-200 ml-1 font-mono">Giám khảo đang nói...</span>
          </div>
        </div>

        <!-- Dynamic Part Workspace Container -->
        <div id="speakingPartWorkspace" class="flex-1 overflow-y-auto space-y-4 pr-1">
          <!-- Rendered dynamically by switchSpeakingPart -->
        </div>

      </div>
    `;

    // Render default Part
    switchSpeakingPart(currentSpeakingPart);
    updateHeaderTotalWordCount();

    // Sync Socratic Chatbox
    if (chatBox) {
      chatBox.innerHTML = `
        <div class="p-3.5 rounded-xl bg-white dark:bg-[#111C44] border border-iot-border dark:border-slate-700 shadow-sm text-xs space-y-3 font-sans">
          <div class="flex items-center gap-2 text-purple-600 font-bold font-mono">
            <i data-lucide="mic" class="w-4 h-4"></i>
            <span>SOCRATIC SPEAKING EXAMINER:</span>
          </div>
          <p class="text-iot-dark dark:text-slate-200 leading-relaxed text-xs">
            Chào mừng bạn đến với phòng thi <strong>IELTS Speaking chuẩn quốc tế (11 – 14 phút)</strong> gồm 3 phần thi chính:
          </p>
          <div class="space-y-1.5 text-[11px] text-slate-700 dark:text-slate-300">
            <div class="p-2 rounded bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-900">
              <strong>Part 1 (4–5p):</strong> Giám khảo hỏi các chủ đề quen thuộc (Bản thân, thói quen, công nghệ).
            </div>
            <div class="p-2 rounded bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-900">
              <strong>Part 2 (3–4p):</strong> Nhận Cue Card, có <strong>1 phút nháp ý tưởng</strong> và <strong>2 phút trình bày</strong>.
            </div>
            <div class="p-2 rounded bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-900">
              <strong>Part 3 (4–5p):</strong> Thảo luận chuyên sâu 2 chiều mang tính trừu tượng và triết học nhận thức.
            </div>
          </div>
          <p class="text-[11px] text-iot-muted dark:text-slate-400 italic">
            💡 Bạn có thể bật microphone để nói trực tiếp, hoặc chỉnh sửa văn bản bài nói trong ô ghi chép trước khi nộp chấm điểm.
          </p>
        </div>
      `;
    }

    if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
  }

  // ==========================================
  // 6. SWITCH SPEAKING PART (PARTS 1, 2, 3)
  // ==========================================
  function switchSpeakingPart(partNum) {
    harvestCurrentInputValues();
    stopSpeakingRecording();
    currentSpeakingPart = partNum;
    stopExaminerSpeech();

    // Update Tab Styles
    for (let i = 1; i <= 3; i++) {
      const tab = document.getElementById(`spkTabBtn-${i}`);
      if (tab) {
        if (i === partNum) {
          tab.className = "px-3 py-1.5 rounded-lg font-bold transition-all bg-purple-600 text-white shadow-sm flex items-center gap-1.5";
        } else {
          tab.className = "px-3 py-1.5 rounded-lg font-semibold transition-all text-slate-600 dark:text-slate-300 hover:text-purple-600 flex items-center gap-1.5";
        }
      }
    }

    const container = document.getElementById('speakingPartWorkspace');
    if (!container) return;

    if (partNum === 1) {
      renderPart1View(container);
    } else if (partNum === 2) {
      renderPart2View(container);
    } else if (partNum === 3) {
      renderPart3View(container);
    }

    if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
  }

  // ------------------------------------------------------------------
  // RENDER PART 1: INTRODUCTION & FAMILIAR TOPICS
  // ------------------------------------------------------------------
  function renderPart1View(container) {
    const test = SPEAKING_TESTS[currentTestId] || SPEAKING_TESTS['cam19-spk-t1'];
    const p1 = test.part1;
    const currentTopic = p1.topics[currentPart1TopicIdx] || p1.topics[0];
    const currentQ = currentTopic.questions[currentPart1QuestionIdx] || currentTopic.questions[0];
    const totalQCount = p1.topics.reduce((acc, t) => acc + t.questions.length, 0);

    const savedAns = candidateTranscripts.part1[currentQ.id] || '';

    container.innerHTML = `
      <div class="space-y-4">

        <!-- Part Header & Topic Pills -->
        <div class="flex flex-wrap items-center justify-between gap-2 p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
          <div>
            <span class="text-xs font-bold text-purple-700 dark:text-purple-300 font-mono uppercase tracking-wide">
              PART 1: INTERVIEW &amp; FAMILIAR TOPICS (4 – 5 PHÚT)
            </span>
            <div class="text-[11px] text-slate-500 dark:text-slate-400 font-mono mt-0.5">
              Chủ đề hiện tại: <strong>${currentTopic.topicTitle}</strong>
            </div>
          </div>

          <!-- Topic Switcher Buttons -->
          <div class="flex items-center gap-1.5">
            ${p1.topics.map((t, idx) => `
              <button onclick="window.switchPart1Topic(${idx})"
                class="px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold transition-all ${idx === currentPart1TopicIdx ? 'bg-purple-600 text-white' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'}">
                Chủ đề ${String.fromCharCode(65 + idx)}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Question Card -->
        <div class="p-6 bg-white dark:bg-slate-900 rounded-2xl border-2 border-purple-200 dark:border-purple-900/60 shadow-sm space-y-4 relative">
          
          <div class="flex items-start justify-between gap-3">
            <span class="px-2.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 font-mono font-bold text-[10px] uppercase">
              Câu hỏi ${currentPart1QuestionIdx + 1} / ${currentTopic.questions.length}
            </span>

            <button onclick="window.speakCurrentExaminerQuestion('${encodeURIComponent(currentQ.text)}')"
              class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-50 dark:bg-purple-950/60 hover:bg-purple-100 dark:hover:bg-purple-900 text-purple-700 dark:text-purple-300 text-xs font-mono font-bold transition-all border border-purple-200 dark:border-purple-800"
              title="Giám khảo đọc to câu hỏi">
              <i data-lucide="volume-2" class="w-4 h-4 text-purple-600"></i>
              <span>Nghe Giám Khảo Đọc</span>
            </button>
          </div>

          <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
            "${currentQ.text}"
          </h3>

          <div class="p-3 bg-purple-50/70 dark:bg-purple-950/30 rounded-xl border border-purple-100 dark:border-purple-900/50 text-xs text-slate-700 dark:text-slate-300">
            💡 <strong>Gợi ý phản xạ (Examiner Hint):</strong> ${currentQ.hint}
          </div>

          <!-- Answer & Recording Interface -->
          <div class="space-y-3 pt-2">
            <div class="flex items-center justify-between text-xs">
              <span class="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <i data-lucide="mic" class="w-4 h-4 text-purple-600"></i>
                <span>Ghi âm hoặc ghi chép câu trả lời của bạn:</span>
              </span>
              <div class="flex items-center gap-2">
                <span class="text-[11px] font-mono text-slate-400">Đã ghi nhận:</span>
                <span id="p1UserAnswerInput_wordCount" class="px-2 py-0.5 rounded text-[10px] font-mono font-bold ${savedAns.trim().split(/\s+/).filter(Boolean).length > 0 ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 border border-slate-200 dark:border-slate-700'}">
                  ${savedAns.trim().split(/\s+/).filter(Boolean).length} từ
                </span>
                <span class="text-[11px] font-mono text-slate-400">| Tối ưu: 25 – 45 giây</span>
              </div>
            </div>

            <!-- Language Selector Pills (Gemini AI STT) -->
            <div class="flex items-center justify-center gap-1.5 font-mono text-xs pt-1">
              <span class="text-slate-400 text-[10px] uppercase font-bold">Ngôn ngữ:</span>
              <button type="button" onclick="window.setSpeakingLanguage('en-US')"
                class="btn-lang-en px-2.5 py-1 rounded-lg font-bold font-mono text-[11px] transition-all ${currentSpeechLanguage === 'en-US' ? 'bg-purple-600 text-white shadow-sm ring-1 ring-purple-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'}">
                🇬🇧 Tiếng Anh (IELTS)
              </button>
              <button type="button" onclick="window.setSpeakingLanguage('vi-VN')"
                class="btn-lang-vi px-2.5 py-1 rounded-lg font-bold font-mono text-[11px] transition-all ${currentSpeechLanguage === 'vi-VN' ? 'bg-purple-600 text-white shadow-sm ring-1 ring-purple-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'}">
                🇻🇳 Tiếng Việt
              </button>
            </div>

            <!-- Big Mic Record Action & Gemini Audio Waveform Visualizer -->
            <div class="text-center py-2 space-y-2">
              <div id="p1MicVisualizer" class="mic-audio-visualizer hidden flex items-center justify-center gap-1.5 py-1 h-12">
                <span class="w-1.5 h-3 bg-purple-500 rounded-full transition-all duration-75 sound-bar"></span>
                <span class="w-1.5 h-5 bg-indigo-500 rounded-full transition-all duration-75 sound-bar"></span>
                <span class="w-1.5 h-8 bg-purple-600 rounded-full transition-all duration-75 sound-bar"></span>
                <span class="w-1.5 h-10 bg-pink-500 rounded-full transition-all duration-75 sound-bar"></span>
                <span class="w-1.5 h-7 bg-indigo-500 rounded-full transition-all duration-75 sound-bar"></span>
                <span class="w-1.5 h-4 bg-purple-500 rounded-full transition-all duration-75 sound-bar"></span>
              </div>

              <button id="micRecordBtn" onclick="window.toggleSpeakingRecording('p1UserAnswerInput')"
                class="w-16 h-16 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center mx-auto shadow-lg active:scale-95 transition-all"
                title="Bấm để bật microphone trả lời">
                <i data-lucide="mic" class="w-7 h-7"></i>
              </button>
              <p id="micStatusText" class="text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-2">
                Bấm microphone để nói (Chuẩn âm Gemini: Tiếng Anh &amp; Tiếng Việt)
              </p>
            </div>

            <!-- Editable Transcript Box -->
            <textarea id="p1UserAnswerInput" rows="3" oninput="window.savePart1Response('${currentQ.id}', this.value)"
              placeholder="Nội dung câu trả lời của bạn sẽ xuất hiện tại đây khi bạn nói, hoặc bạn có thể gõ trực tiếp để kiểm tra ngữ pháp &amp; từ vựng..."
              class="w-full p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 font-sans leading-relaxed text-slate-900 dark:text-white shadow-inner">${savedAns}</textarea>

            <!-- Band 8.5+ Sample Upgrade Accordion -->
            <div class="p-3 bg-amber-50/70 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-900/50 space-y-2">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-amber-800 dark:text-amber-300 font-mono flex items-center gap-1.5">
                  <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
                  <span>Câu trả lời mẫu Band 8.5+ &amp; Collocations:</span>
                </span>
                <span class="text-[10px] font-mono uppercase text-amber-600 dark:text-amber-400">IDP Model Answer</span>
              </div>
              <p class="text-xs text-slate-700 dark:text-slate-300 italic leading-relaxed">
                "${currentQ.sample8}"
              </p>
              <div class="flex flex-wrap gap-1.5 pt-1">
                ${currentQ.collocations.map(c => `
                  <span class="text-[10px] font-mono bg-white dark:bg-slate-800 border border-amber-300 dark:border-amber-700 text-amber-800 dark:text-amber-200 px-2 py-0.5 rounded font-bold">
                    ${c}
                  </span>
                `).join('')}
              </div>
            </div>

          </div>

          <!-- Question Pagination Controls -->
          <div class="flex items-center justify-between pt-3 border-t border-slate-200 dark:border-slate-800">
            <button onclick="window.prevPart1Question()"
              class="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-mono font-bold hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center gap-1.5"
              ${currentPart1QuestionIdx === 0 ? 'disabled style="opacity:0.4; cursor:not-allowed;"' : ''}>
              <i data-lucide="chevron-left" class="w-4 h-4"></i>
              <span>Câu Trước</span>
            </button>

            <div class="flex items-center gap-1">
              ${currentTopic.questions.map((_, qIdx) => `
                <button onclick="window.jumpToPart1Question(${qIdx})"
                  class="w-6 h-6 rounded-md text-[10px] font-mono font-bold transition-all ${qIdx === currentPart1QuestionIdx ? 'bg-purple-600 text-white shadow-sm' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'}">
                  ${qIdx + 1}
                </button>
              `).join('')}
            </div>

            <button onclick="window.nextPart1Question()"
              class="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-mono font-bold shadow-md flex items-center gap-1.5">
              <span>${currentPart1QuestionIdx === currentTopic.questions.length - 1 ? 'Chuyển Part 2 ➔' : 'Câu Tiếp Theo'}</span>
              <i data-lucide="chevron-right" class="w-4 h-4"></i>
            </button>
          </div>

        </div>

      </div>
    `;

    // Auto speak question gently on navigation
    speakExaminerPrompt(currentQ.text);
  }

  // ------------------------------------------------------------------
  // RENDER PART 2: CUE CARD, 1-MIN PREP & 2-MIN SPEECH
  // ------------------------------------------------------------------
  function renderPart2View(container) {
    const test = SPEAKING_TESTS[currentTestId] || SPEAKING_TESTS['cam19-spk-t1'];
    const p2 = test.part2;
    const card = p2.cueCard;

    const savedNotes = candidateTranscripts.part2_prepNotes || '';
    const savedSpeech = candidateTranscripts.part2_speech || '';

    container.innerHTML = `
      <div class="space-y-4">

        <!-- Part 2 Header -->
        <div class="flex flex-wrap items-center justify-between gap-2 p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
          <div>
            <span class="text-xs font-bold text-purple-700 dark:text-purple-300 font-mono uppercase tracking-wide">
              PART 2: INDIVIDUAL LONG TURN • CUE CARD (3 – 4 PHÚT TỔNG CỘNG)
            </span>
            <div class="text-[11px] text-slate-500 dark:text-slate-400 font-mono mt-0.5">
              Quy chuẩn: 1 phút chuẩn bị (viết nháp) • Tối đa 2 phút trình bày liên tục
            </div>
          </div>

          <div class="flex items-center gap-2">
            <button onclick="window.speakExaminerPrompt('${encodeURIComponent(card.topic)}')"
              class="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-purple-50 dark:bg-purple-950/60 hover:bg-purple-100 text-purple-700 dark:text-purple-300 text-xs font-mono font-bold transition-all border border-purple-200 dark:border-purple-800">
              <i data-lucide="volume-2" class="w-4 h-4"></i>
              <span>Nghe Đọc Đề</span>
            </button>
          </div>
        </div>

        <!-- Authentic IELTS Candidate Task Card (Cue Card) -->
        <div class="bg-gradient-to-br from-amber-50 to-orange-50/40 dark:from-[#1b1933] dark:to-[#141829] rounded-2xl border-2 border-amber-300 dark:border-amber-700/60 p-6 shadow-md space-y-4">
          
          <div class="flex items-center justify-between border-b border-amber-200 dark:border-amber-800/60 pb-3">
            <span class="text-[11px] font-mono font-bold uppercase tracking-widest text-amber-800 dark:text-amber-300 bg-amber-200/60 dark:bg-amber-900/50 px-2.5 py-0.5 rounded">
              CANDIDATE TASK CARD
            </span>
            <span class="text-xs font-mono text-amber-700 dark:text-amber-300 font-bold">
              IDP / British Council Official
            </span>
          </div>

          <div>
            <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
              ${card.topic}
            </h3>
            <p class="text-xs text-slate-600 dark:text-slate-300 font-medium mt-1">
              You will have to talk about this topic for one to two minutes. You have one minute to think about what you are going to say. You can make some notes to help you if you wish.
            </p>
          </div>

          <div class="p-4 bg-white/90 dark:bg-slate-900/90 rounded-xl border border-amber-200 dark:border-amber-800/40 space-y-2">
            <span class="text-xs font-bold text-slate-800 dark:text-slate-200 font-mono">You should say:</span>
            <ul class="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 font-medium">
              ${card.bulletPoints.map(bp => `
                <li class="flex items-start gap-2">
                  <span class="text-amber-600 font-bold">•</span>
                  <span>${bp}</span>
                </li>
              `).join('')}
            </ul>
          </div>

        </div>

        <!-- 2-COLUMN WORKSPACE: 1-MIN PREP NOTEBOOK (LEFT) vs 2-MIN SPEECH (RIGHT) -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          
          <!-- Column 1: 1-Minute Prep Countdown & Digital Scratchpad -->
          <div class="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3 flex flex-col justify-between">
            <div class="space-y-2">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 font-mono">
                  <i data-lucide="edit-3" class="w-4 h-4 text-amber-500"></i>
                  <span>1 Phút Chuẩn Bị (Nháp ý tưởng)</span>
                </span>
                
                <!-- Countdown Pill -->
                <div class="flex items-center gap-1 font-mono text-xs px-2.5 py-1 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-bold border border-amber-300 dark:border-amber-800">
                  <i data-lucide="timer" class="w-3.5 h-3.5"></i>
                  <span id="p2PrepTimerDisplay">01:00</span>
                </div>
              </div>

              <!-- Action buttons for Prep -->
              <div class="flex items-center gap-2">
                <button id="btnStartPrepTimer" onclick="window.startPart2PrepTimer()"
                  class="flex-1 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold font-mono text-xs transition-all flex items-center justify-center gap-1">
                  <i data-lucide="play" class="w-3.5 h-3.5"></i>
                  <span>Bắt đầu đếm 1 phút</span>
                </button>
                <button onclick="window.skipPrepAndStartSpeaking()"
                  class="px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-mono text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                  title="Bỏ qua 1 phút để vào nói ngay">
                  Bỏ qua ➔
                </button>
              </div>

              <!-- Scratchpad Textarea -->
              <textarea id="p2PrepNotesInput" rows="6" oninput="window.savePart2Notes(this.value)"
                placeholder="Gõ nháp nhanh các ý chính, từ khóa Band 8.0+ hoặc dàn bài trong 1 phút chuẩn bị... (VD: indispensable asset, cognitive offloading, profound impact)"
                class="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-amber-500 leading-relaxed text-slate-900 dark:text-white shadow-inner">${savedNotes}</textarea>
            </div>

            <p class="text-[10px] text-slate-400 font-mono italic">
              💡 ${card.scratchpadGuidance}
            </p>
          </div>

          <!-- Column 2: 2-Minute Speech Recording & Live Pacing -->
          <div class="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3 flex flex-col justify-between">
            <div class="space-y-2">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 font-mono">
                  <i data-lucide="mic" class="w-4 h-4 text-purple-600"></i>
                  <span>2 Phút Trình Bày Liên Tục</span>
                </span>

                <div class="flex items-center gap-2">
                  <span class="text-[10px] font-mono text-slate-400">Đã ghi:</span>
                  <span id="p2SpeechTranscriptInput_wordCount" class="px-2 py-0.5 rounded text-[10px] font-mono font-bold ${savedSpeech.trim().split(/\s+/).filter(Boolean).length > 0 ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 border border-slate-200 dark:border-slate-700'}">
                    ${savedSpeech.trim().split(/\s+/).filter(Boolean).length} từ
                  </span>
                  <!-- Speech Timer Pill -->
                  <div class="flex items-center gap-1 font-mono text-xs px-2.5 py-1 rounded-lg bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 font-bold border border-purple-300 dark:border-purple-800">
                    <i data-lucide="clock" class="w-3.5 h-3.5"></i>
                    <span id="p2SpeechTimerDisplay">02:00</span>
                  </div>
                </div>
              </div>

              <!-- Pacing Guide Bar -->
              <div class="p-2 rounded-lg bg-purple-50 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/40 text-[10px] font-mono text-purple-800 dark:text-purple-300 flex items-center justify-between">
                <span>0-30s: Mở đầu &amp; bối cảnh</span>
                <span>30-90s: Tính năng &amp; thói quen</span>
                <span>90-120s: Tác động &amp; suy ngẫm</span>
              </div>

              <!-- Language Selector Pills (Gemini AI STT) -->
              <div class="flex items-center justify-center gap-1.5 font-mono text-xs pt-1">
                <span class="text-slate-400 text-[10px] uppercase font-bold">Ngôn ngữ:</span>
                <button type="button" onclick="window.setSpeakingLanguage('en-US')"
                  class="btn-lang-en px-2.5 py-1 rounded-lg font-bold font-mono text-[11px] transition-all ${currentSpeechLanguage === 'en-US' ? 'bg-purple-600 text-white shadow-sm ring-1 ring-purple-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'}">
                  🇬🇧 Tiếng Anh (IELTS)
                </button>
                <button type="button" onclick="window.setSpeakingLanguage('vi-VN')"
                  class="btn-lang-vi px-2.5 py-1 rounded-lg font-bold font-mono text-[11px] transition-all ${currentSpeechLanguage === 'vi-VN' ? 'bg-purple-600 text-white shadow-sm ring-1 ring-purple-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'}">
                  🇻🇳 Tiếng Việt
                </button>
              </div>

              <!-- Mic Record Button & Gemini Audio Waveform Visualizer -->
              <div class="text-center py-2 space-y-2">
                <div id="p2MicVisualizer" class="mic-audio-visualizer hidden flex items-center justify-center gap-1.5 py-1 h-12">
                  <span class="w-1.5 h-3 bg-purple-500 rounded-full transition-all duration-75 sound-bar"></span>
                  <span class="w-1.5 h-5 bg-indigo-500 rounded-full transition-all duration-75 sound-bar"></span>
                  <span class="w-1.5 h-8 bg-purple-600 rounded-full transition-all duration-75 sound-bar"></span>
                  <span class="w-1.5 h-10 bg-pink-500 rounded-full transition-all duration-75 sound-bar"></span>
                  <span class="w-1.5 h-7 bg-indigo-500 rounded-full transition-all duration-75 sound-bar"></span>
                  <span class="w-1.5 h-4 bg-purple-500 rounded-full transition-all duration-75 sound-bar"></span>
                </div>

                <button id="p2MicRecordBtn" onclick="window.togglePart2SpeechRecording()"
                  class="w-14 h-14 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center mx-auto shadow-lg active:scale-95 transition-all">
                  <i data-lucide="mic" class="w-6 h-6"></i>
                </button>
                <p id="p2MicStatusText" class="text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-1.5">
                  Bấm microphone để bắt đầu bài nói 2 phút (Chuẩn âm Gemini: Tiếng Anh &amp; Tiếng Việt)
                </p>
              </div>

              <!-- Speech Transcript Textarea -->
              <textarea id="p2SpeechTranscriptInput" rows="5" oninput="window.savePart2Speech(this.value)"
                placeholder="Bản ghi âm giọng nói bài thuyết trình 2 phút của bạn sẽ hiển thị tại đây, hoặc bạn có thể chỉnh sửa/nhập trực tiếp..."
                class="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 font-sans leading-relaxed text-slate-900 dark:text-white shadow-inner">${savedSpeech}</textarea>
            </div>

            <!-- Follow-up Rounding Questions Strip -->
            <div class="pt-2 border-t border-slate-200 dark:border-slate-800 space-y-1.5">
              <span class="text-[11px] font-bold text-slate-700 dark:text-slate-300 font-mono">
                Câu hỏi ngắn kết thúc Part 2 (Follow-up):
              </span>
              <div class="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                ${p2.roundingQuestions.map((rq, idx) => `
                  <div class="p-2 rounded bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center justify-between gap-2">
                    <span class="text-[11px]"><strong>${idx + 1}.</strong> "${rq.text}"</span>
                    <button onclick="window.speakExaminerPrompt('${encodeURIComponent(rq.text)}')" class="shrink-0 p-1 text-purple-600 hover:text-purple-700">
                      <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
                    </button>
                  </div>
                `).join('')}
              </div>
            </div>

          </div>

        </div>

        <!-- Bottom Navigation Button to Part 3 -->
        <div class="flex items-center justify-between pt-3 border-t border-slate-200 dark:border-slate-800">
          <button onclick="window.switchSpeakingPart(1)"
            class="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-mono font-bold hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
            <i data-lucide="chevron-left" class="w-4 h-4"></i>
            <span>Quay lại Part 1</span>
          </button>

          <button onclick="window.switchSpeakingPart(3)"
            class="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-mono font-bold shadow-md flex items-center gap-1.5 active:scale-95">
            <span>Tiếp Tục Part 3 (Thảo luận 2 chiều) ➔</span>
            <i data-lucide="chevron-right" class="w-4 h-4"></i>
          </button>
        </div>

      </div>
    `;

    // Speak Cue Card Intro
    speakExaminerPrompt(card.topic);
  }

  // ------------------------------------------------------------------
  // RENDER PART 3: TWO-WAY SOCRATIC DISCUSSION
  // ------------------------------------------------------------------
  function renderPart3View(container) {
    const test = SPEAKING_TESTS[currentTestId] || SPEAKING_TESTS['cam19-spk-t1'];
    const p3 = test.part3;
    const currentQ = p3.questions[currentPart3QuestionIdx] || p3.questions[0];
    const savedAns = candidateTranscripts.part3[currentQ.id] || '';

    container.innerHTML = `
      <div class="space-y-4">

        <!-- Part 3 Header -->
        <div class="flex flex-wrap items-center justify-between gap-2 p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
          <div>
            <span class="text-xs font-bold text-purple-700 dark:text-purple-300 font-mono uppercase tracking-wide">
              PART 3: TWO-WAY DISCUSSION (4 – 5 PHÚT)
            </span>
            <div class="text-[11px] text-slate-500 dark:text-slate-400 font-mono mt-0.5">
              Chủ đề thảo luận trừu tượng: <strong>${p3.theme}</strong>
            </div>
          </div>

          <!-- Question Switcher Pills -->
          <div class="flex items-center gap-1">
            ${p3.questions.map((_, idx) => `
              <button onclick="window.jumpToPart3Question(${idx})"
                class="w-7 h-7 rounded-lg text-xs font-mono font-bold transition-all ${idx === currentPart3QuestionIdx ? 'bg-purple-600 text-white shadow-sm' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'}">
                Q${idx + 1}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Question & Socratic Debate Card -->
        <div class="p-6 bg-white dark:bg-slate-900 rounded-2xl border-2 border-indigo-200 dark:border-indigo-900/60 shadow-sm space-y-4">
          
          <div class="flex items-center justify-between">
            <span class="px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-mono font-bold text-[10px] uppercase">
              ${currentQ.topicLabel} • Câu hỏi ${currentPart3QuestionIdx + 1}/${p3.questions.length}
            </span>

            <button onclick="window.speakCurrentExaminerQuestion('${encodeURIComponent(currentQ.text)}')"
              class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 text-indigo-700 dark:text-indigo-300 text-xs font-mono font-bold transition-all border border-indigo-200 dark:border-indigo-800">
              <i data-lucide="volume-2" class="w-4 h-4 text-indigo-600"></i>
              <span>Nghe Giám Khảo Đọc</span>
            </button>
          </div>

          <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
            "${currentQ.text}"
          </h3>

          <div class="p-3 bg-indigo-50/70 dark:bg-indigo-950/30 rounded-xl border border-indigo-100 dark:border-indigo-900/50 text-xs text-slate-700 dark:text-slate-300">
            🎯 <strong>Khung tư duy biện chứng (Socratic Guidance):</strong> ${currentQ.hint}
          </div>

          <!-- Answer & Recording Interface -->
          <div class="space-y-3 pt-2">
            <div class="flex items-center justify-between text-xs">
              <span class="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <i data-lucide="mic" class="w-4 h-4 text-indigo-600"></i>
                <span>Ghi âm hoặc ghi chép câu trả lời lập luận của bạn:</span>
              </span>
              <div class="flex items-center gap-2">
                <span class="text-[11px] font-mono text-slate-400">Đã ghi nhận:</span>
                <span id="p3UserAnswerInput_wordCount" class="px-2 py-0.5 rounded text-[10px] font-mono font-bold ${savedAns.trim().split(/\s+/).filter(Boolean).length > 0 ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 border border-slate-200 dark:border-slate-700'}">
                  ${savedAns.trim().split(/\s+/).filter(Boolean).length} từ
                </span>
                <span class="text-[11px] font-mono text-slate-400">| 40 – 60 giây</span>
              </div>
            </div>

            <!-- Mic Record Action -->
            <div class="text-center py-2 space-y-2">
              <!-- Language Selector Pills (Gemini AI STT) -->
              <div class="flex items-center justify-center gap-1.5 font-mono text-xs pt-1">
                <span class="text-slate-400 text-[10px] uppercase font-bold">Ngôn ngữ:</span>
                <button type="button" onclick="window.setSpeakingLanguage('en-US')"
                  class="btn-lang-en px-2.5 py-1 rounded-lg font-bold font-mono text-[11px] transition-all ${currentSpeechLanguage === 'en-US' ? 'bg-purple-600 text-white shadow-sm ring-1 ring-purple-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'}">
                  🇬🇧 Tiếng Anh (IELTS)
                </button>
                <button type="button" onclick="window.setSpeakingLanguage('vi-VN')"
                  class="btn-lang-vi px-2.5 py-1 rounded-lg font-bold font-mono text-[11px] transition-all ${currentSpeechLanguage === 'vi-VN' ? 'bg-purple-600 text-white shadow-sm ring-1 ring-purple-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'}">
                  🇻🇳 Tiếng Việt
                </button>
              </div>

              <!-- Gemini Audio Waveform Visualizer -->
              <div id="p3MicVisualizer" class="mic-audio-visualizer hidden flex items-center justify-center gap-1.5 py-1 h-12">
                <span class="w-1.5 h-3 bg-indigo-500 rounded-full transition-all duration-75 sound-bar"></span>
                <span class="w-1.5 h-5 bg-purple-500 rounded-full transition-all duration-75 sound-bar"></span>
                <span class="w-1.5 h-8 bg-indigo-600 rounded-full transition-all duration-75 sound-bar"></span>
                <span class="w-1.5 h-10 bg-violet-500 rounded-full transition-all duration-75 sound-bar"></span>
                <span class="w-1.5 h-7 bg-purple-500 rounded-full transition-all duration-75 sound-bar"></span>
                <span class="w-1.5 h-4 bg-indigo-500 rounded-full transition-all duration-75 sound-bar"></span>
              </div>

              <button id="p3MicRecordBtn" onclick="window.toggleSpeakingRecording('p3UserAnswerInput')"
                class="w-16 h-16 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center mx-auto shadow-lg active:scale-95 transition-all"
                title="Bấm để nói câu trả lời">
                <i data-lucide="mic" class="w-7 h-7"></i>
              </button>
              <p id="p3MicStatusText" class="text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-2">
                Bấm microphone để nói bài phản biện Part 3 (Chuẩn âm Gemini: Tiếng Anh &amp; Tiếng Việt)
              </p>
            </div>

            <!-- Transcript textarea -->
            <textarea id="p3UserAnswerInput" rows="4" oninput="window.savePart3Response('${currentQ.id}', this.value)"
              placeholder="Nội dung bài nói Part 3 của bạn... Hãy vận dụng các liên từ chỉ sự tương phản (whereas, nevertheless, conversely) và cấu trúc câu phức để đạt Band 8.0+!"
              class="w-full p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 font-sans leading-relaxed text-slate-900 dark:text-white shadow-inner">${savedAns}</textarea>

            <!-- Band 8.5+ Model Debate Answer -->
            <div class="p-3 bg-amber-50/70 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-900/50 space-y-2">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-amber-800 dark:text-amber-300 font-mono flex items-center gap-1.5">
                  <i data-lucide="award" class="w-3.5 h-3.5"></i>
                  <span>Bài phản biện mẫu Band 8.5+ &amp; Cấu trúc triết học:</span>
                </span>
                <span class="text-[10px] font-mono uppercase text-amber-600 dark:text-amber-400">Examiner Standard</span>
              </div>
              <p class="text-xs text-slate-700 dark:text-slate-300 italic leading-relaxed">
                "${currentQ.sample8}"
              </p>
              <div class="flex flex-wrap gap-1.5 pt-1">
                ${currentQ.collocations.map(c => `
                  <span class="text-[10px] font-mono bg-white dark:bg-slate-800 border border-amber-300 dark:border-amber-700 text-amber-800 dark:text-amber-200 px-2 py-0.5 rounded font-bold">
                    ${c}
                  </span>
                `).join('')}
              </div>
            </div>

          </div>

          <!-- Bottom Navigation Controls -->
          <div class="flex items-center justify-between pt-3 border-t border-slate-200 dark:border-slate-800">
            <button onclick="window.prevPart3Question()"
              class="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-mono font-bold hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center gap-1.5"
              ${currentPart3QuestionIdx === 0 ? 'disabled style="opacity:0.4; cursor:not-allowed;"' : ''}>
              <i data-lucide="chevron-left" class="w-4 h-4"></i>
              <span>Câu Trước</span>
            </button>

            <button onclick="window.nextPart3Question()"
              class="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-mono font-bold shadow-md flex items-center gap-1.5 active:scale-95">
              <span>${currentPart3QuestionIdx === p3.questions.length - 1 ? 'Hoàn Thành &amp; Chấm Điểm ➔' : 'Câu Tiếp Theo'}</span>
              <i data-lucide="chevron-right" class="w-4 h-4"></i>
            </button>
          </div>

        </div>

      </div>
    `;

    // Speak question
    speakExaminerPrompt(currentQ.text);
  }

  // ==========================================
  // 7. PART NAVIGATION & STATE HELPERS
  // ==========================================
  function switchPart1Topic(topicIdx) {
    harvestCurrentInputValues();
    stopSpeakingRecording();
    currentPart1TopicIdx = topicIdx;
    currentPart1QuestionIdx = 0;
    const container = document.getElementById('speakingPartWorkspace');
    if (container) renderPart1View(container);
  }

  function nextPart1Question() {
    harvestCurrentInputValues();
    stopSpeakingRecording();
    const test = SPEAKING_TESTS[currentTestId] || SPEAKING_TESTS['cam19-spk-t1'];
    const currentTopic = test.part1.topics[currentPart1TopicIdx];
    if (currentPart1QuestionIdx < currentTopic.questions.length - 1) {
      currentPart1QuestionIdx++;
      const container = document.getElementById('speakingPartWorkspace');
      if (container) renderPart1View(container);
    } else {
      // Transition to next topic or Part 2
      if (currentPart1TopicIdx < test.part1.topics.length - 1) {
        currentPart1TopicIdx++;
        currentPart1QuestionIdx = 0;
        const container = document.getElementById('speakingPartWorkspace');
        if (container) renderPart1View(container);
      } else {
        switchSpeakingPart(2);
      }
    }
  }

  function prevPart1Question() {
    harvestCurrentInputValues();
    stopSpeakingRecording();
    if (currentPart1QuestionIdx > 0) {
      currentPart1QuestionIdx--;
      const container = document.getElementById('speakingPartWorkspace');
      if (container) renderPart1View(container);
    }
  }

  function jumpToPart1Question(qIdx) {
    harvestCurrentInputValues();
    stopSpeakingRecording();
    currentPart1QuestionIdx = qIdx;
    const container = document.getElementById('speakingPartWorkspace');
    if (container) renderPart1View(container);
  }

  function savePart1Response(qId, val) {
    candidateTranscripts.part1[qId] = val;
    updateFieldWordCount('p1UserAnswerInput', val);
  }

  // PART 2 PREP & SPEECH TIMERS
  function startPart2PrepTimer() {
    if (prepCountdownInterval) clearInterval(prepCountdownInterval);
    prepSecondsRemaining = 60;

    const display = document.getElementById('p2PrepTimerDisplay');
    const btn = document.getElementById('btnStartPrepTimer');
    if (btn) btn.innerHTML = `<span>Đang đếm 1 phút chuẩn bị...</span>`;

    prepCountdownInterval = setInterval(() => {
      prepSecondsRemaining--;
      const m = Math.floor(prepSecondsRemaining / 60);
      const s = prepSecondsRemaining % 60;
      if (display) display.innerText = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;

      if (prepSecondsRemaining <= 0) {
        clearInterval(prepCountdownInterval);
        if (display) display.innerText = "00:00 - Hết giờ nháp!";
        if (window.socraticAI && window.socraticAI.showLearningToast) {
          window.socraticAI.showLearningToast("⏰ Đã hết 1 phút chuẩn bị! Bắt đầu 2 phút nói của bạn ngay bây giờ.");
        }
        skipPrepAndStartSpeaking();
      }
    }, 1000);
  }

  function skipPrepAndStartSpeaking() {
    if (prepCountdownInterval) clearInterval(prepCountdownInterval);
    togglePart2SpeechRecording();
  }

  function togglePart2SpeechRecording() {
    toggleSpeakingRecording('p2SpeechTranscriptInput');
    startPart2SpeechTimer();
  }

  function startPart2SpeechTimer() {
    if (speechCountdownInterval) return; // already running
    speechSecondsRemaining = 120;
    const display = document.getElementById('p2SpeechTimerDisplay');

    speechCountdownInterval = setInterval(() => {
      speechSecondsRemaining--;
      const m = Math.floor(speechSecondsRemaining / 60);
      const s = speechSecondsRemaining % 60;
      if (display) display.innerText = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;

      if (speechSecondsRemaining <= 0) {
        clearInterval(speechCountdownInterval);
        if (display) display.innerText = "00:00 - Đủ thời lượng!";
        if (isSpeechRecording) toggleSpeakingRecording('p2SpeechTranscriptInput');
        if (window.socraticAI && window.socraticAI.showLearningToast) {
          window.socraticAI.showLearningToast("✅ Đã hoàn thành 2 phút thuyết trình Part 2!");
        }
      }
    }, 1000);
  }

  function savePart2Notes(val) {
    candidateTranscripts.part2_prepNotes = val;
    updateHeaderTotalWordCount();
  }

  function savePart2Speech(val) {
    candidateTranscripts.part2_speech = val;
    updateFieldWordCount('p2SpeechTranscriptInput', val);
  }

  // PART 3 NAVIGATION
  function nextPart3Question() {
    harvestCurrentInputValues();
    stopSpeakingRecording();
    const test = SPEAKING_TESTS[currentTestId] || SPEAKING_TESTS['cam19-spk-t1'];
    if (currentPart3QuestionIdx < test.part3.questions.length - 1) {
      currentPart3QuestionIdx++;
      const container = document.getElementById('speakingPartWorkspace');
      if (container) renderPart3View(container);
    } else {
      submitSpeakingExam();
    }
  }

  function prevPart3Question() {
    harvestCurrentInputValues();
    stopSpeakingRecording();
    if (currentPart3QuestionIdx > 0) {
      currentPart3QuestionIdx--;
      const container = document.getElementById('speakingPartWorkspace');
      if (container) renderPart3View(container);
    }
  }

  function jumpToPart3Question(qIdx) {
    harvestCurrentInputValues();
    stopSpeakingRecording();
    currentPart3QuestionIdx = qIdx;
    const container = document.getElementById('speakingPartWorkspace');
    if (container) renderPart3View(container);
  }

  function savePart3Response(qId, val) {
    candidateTranscripts.part3[qId] = val;
    updateFieldWordCount('p3UserAnswerInput', val);
  }

  function speakCurrentExaminerQuestion(encodedText) {
    const text = decodeURIComponent(encodedText);
    speakExaminerPrompt(text);
  }

  // ==========================================
  // 8. SCORING ENGINE ACROSS 4 OFFICIAL CRITERIA
  // ==========================================
  function harvestCurrentInputValues() {
    const test = SPEAKING_TESTS[currentTestId] || SPEAKING_TESTS['cam19-spk-t1'];

    // 1. Part 1 current input
    const p1Input = document.getElementById('p1UserAnswerInput');
    if (p1Input) {
      const currentTopic = test.part1 && test.part1.topics ? test.part1.topics[currentPart1TopicIdx] : null;
      const currentQ = currentTopic && currentTopic.questions ? currentTopic.questions[currentPart1QuestionIdx] : null;
      if (currentQ && currentQ.id) {
        candidateTranscripts.part1[currentQ.id] = p1Input.value;
      }
    }

    // 2. Part 2 inputs
    const p2Notes = document.getElementById('p2PrepNotesInput');
    if (p2Notes) {
      candidateTranscripts.part2_prepNotes = p2Notes.value;
    }
    const p2Speech = document.getElementById('p2SpeechTranscriptInput');
    if (p2Speech) {
      candidateTranscripts.part2_speech = p2Speech.value;
    }

    // 3. Part 3 current input
    const p3Input = document.getElementById('p3UserAnswerInput');
    if (p3Input) {
      const currentQ3 = test.part3 && test.part3.questions ? test.part3.questions[currentPart3QuestionIdx] : null;
      if (currentQ3 && currentQ3.id) {
        candidateTranscripts.part3[currentQ3.id] = p3Input.value;
      }
    }

    updateHeaderTotalWordCount();
  }

  function showZeroWordsWarningModal() {
    let modal = document.getElementById('zeroWordsWarningModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'zeroWordsWarningModal';
      modal.className = 'fixed inset-0 z-[10000] bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 font-sans animate-in fade-in duration-200';
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div class="relative w-full max-w-md bg-white dark:bg-[#0c1527] rounded-3xl shadow-2xl border-2 border-amber-500/60 p-6 space-y-5 text-center">
        <div class="w-16 h-16 rounded-2xl bg-amber-500/20 text-amber-500 flex items-center justify-center mx-auto text-3xl shadow-inner border border-amber-400/30">
          ⚠️
        </div>
        
        <div class="space-y-2">
          <span class="text-[11px] font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 font-bold bg-amber-100 dark:bg-amber-950/80 px-2.5 py-0.5 rounded border border-amber-300 dark:border-amber-800">
            CHƯA GHI NHẬN CÂU TRẢ LỜI
          </span>
          <h3 class="text-lg font-bold text-slate-900 dark:text-white leading-snug">
            Bạn chưa thực hiện bài thi Speaking!
          </h3>
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Hệ thống ghi nhận <strong class="text-rose-600 font-mono">0 từ</strong> (bạn chưa bật microphone để ghi âm và chưa nhập nội dung trả lời cho Part 1, Part 2 hay Part 3).
          </p>
          <div class="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-left text-xs text-rose-800 dark:text-rose-200 font-mono space-y-1">
            <div>• Quy chuẩn IELTS: <strong>0 từ = Band 0.0</strong></div>
            <div>• Tình trạng: <strong>Did not attempt / No assessable language</strong></div>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row items-center gap-2.5 font-mono pt-1">
          <button onclick="window.closeZeroWordsWarningModal()"
            class="w-full sm:flex-1 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5 active:scale-95">
            <i data-lucide="mic" class="w-4 h-4"></i>
            <span>🎙️ Quay Lại Để Trả Lời</span>
          </button>
          <button onclick="window.confirmZeroWordsSubmit()"
            class="w-full sm:w-auto px-4 py-3 rounded-xl border border-rose-300 dark:border-rose-800 text-rose-600 dark:text-rose-400 font-bold text-xs hover:bg-rose-50 dark:hover:bg-rose-950/50 transition-all">
            Vẫn Nộp (Band 0.0)
          </button>
        </div>
      </div>
    `;

    if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
  }

  function safeRemoveElement(el) {
    if (!el) return;
    if (typeof el.remove === 'function') {
      el.remove();
    } else if (el.parentNode && typeof el.parentNode.removeChild === 'function') {
      el.parentNode.removeChild(el);
    }
  }

  function closeZeroWordsWarningModal() {
    const modal = document.getElementById('zeroWordsWarningModal');
    safeRemoveElement(modal);
  }

  function confirmZeroWordsSubmit() {
    closeZeroWordsWarningModal();
    submitSpeakingExam(true);
  }

  function evaluateSpeakingPerformance(transcripts, testId) {
    const test = SPEAKING_TESTS[testId] || SPEAKING_TESTS['cam19-spk-t1'];

    // Word counts
    const p1Text = Object.values(transcripts.part1 || {}).join(' ').trim();
    const p2SpeechText = (transcripts.part2_speech || '').trim();
    const p2NotesText = (transcripts.part2_prepNotes || '').trim();
    const p2Text = (p2SpeechText + (p2NotesText && !p2SpeechText ? ' ' + p2NotesText : '')).trim();
    const p3Text = Object.values(transcripts.part3 || {}).join(' ').trim();

    const p1Words = p1Text.split(/\s+/).filter(Boolean).length;
    const p2Words = p2Text.split(/\s+/).filter(Boolean).length;
    const p3Words = p3Text.split(/\s+/).filter(Boolean).length;
    const totalWords = p1Words + p2Words + p3Words;

    const fullTranscript = (p1Text + ' ' + p2Text + ' ' + p3Text).toLowerCase();

    // Check used collocations from question bank
    const expectedCollocations = [];
    if (test.part1 && test.part1.topics) {
      test.part1.topics.forEach(t => (t.questions || []).forEach(q => (q.collocations || []).forEach(c => expectedCollocations.push(c))));
    }
    if (test.part2 && test.part2.followUpQuestions) {
      test.part2.followUpQuestions.forEach(q => (q.collocations || []).forEach(c => expectedCollocations.push(c)));
    }
    if (test.part3 && test.part3.questions) {
      test.part3.questions.forEach(q => (q.collocations || []).forEach(c => expectedCollocations.push(c)));
    }

    const matchedCollocations = expectedCollocations.filter(c => fullTranscript.includes(c.toLowerCase()));
    const uniqueMatched = Array.from(new Set(matchedCollocations));

    // Advanced connectors check
    const advancedConnectors = [
      'furthermore', 'moreover', 'nevertheless', 'conversely', 'consequently',
      'subsequently', 'on the contrary', 'in contrast', 'without a doubt',
      'simultaneously', 'predominantly', 'notwithstanding'
    ];
    const matchedConnectors = advancedConnectors.filter(c => fullTranscript.includes(c));

    let fc = 0.0;
    let lr = 0.0;
    let gra = 0.0;
    let p = 0.0;
    let feedback = {};
    let fatalFlaw = '';
    let overall = '0.0';
    let bandTier = 'Chưa thực hiện / No Assessable Language';

    if (totalWords === 0) {
      fc = 0.0;
      lr = 0.0;
      gra = 0.0;
      p = 0.0;
      overall = '0.0';
      bandTier = 'Chưa thực hiện / No Assessable Language';
      feedback = {
        FC: "Thí sinh không phát ngôn hoặc không ghi âm câu trả lời nào (No assessable language produced). Không thể đánh giá độ trôi chảy và mạch lạc.",
        LR: "Chưa ghi nhận vốn từ vựng để thẩm định (Zero lexical resource detected).",
        GRA: "Không có cấu trúc câu hoặc ngữ pháp để khảo thí.",
        P: "Không có bản ghi âm phát âm để thẩm định ngữ điệu, trọng âm và nhịp điệu."
      };
      fatalFlaw = "⚠️ Bạn chưa thực hiện trả lời bất kỳ câu hỏi nào trong cả 3 phần thi. Trong kỳ thi IELTS thật, điều này tương đương với Band 0.0 (Did not attempt the test). Hãy bấm 'Luyện Lại Bài Speaking Này' và bật microphone hoặc gõ trực tiếp câu trả lời.";
    } else if (totalWords < 25) {
      fc = 1.5; lr = 2.0; gra = 1.5; p = 2.0;
      overall = '1.5';
      bandTier = 'Non-User (Band 1.0 – 2.0)';
      feedback = {
        FC: "Chỉ phát ngôn được vài từ đơn lẻ ngắt quãng, không thể duy trì câu hoàn chỉnh hoặc hội thoại tối thiểu.",
        LR: "Vốn từ cực kỳ hạn chế, chỉ sử dụng một vài từ vựng cơ bản rời rạc, chưa tạo thành cấu trúc cụm từ.",
        GRA: "Không sử dụng được mẫu câu cơ bản nào ngoài các từ ngữ độc lập.",
        P: "Phát âm chưa đủ dữ liệu để đánh giá tính chuẩn xác của các phụ âm cuối và trọng âm."
      };
      fatalFlaw = "Cần luyện tập xây dựng câu hoàn chỉnh có đầy đủ Chủ ngữ - Vị ngữ và kéo dài câu trả lời tối thiểu 2-3 câu cho mỗi lượt hỏi.";
    } else if (totalWords < 70) {
      fc = 3.5; lr = 3.5; gra = 3.0; p = 3.5;
      overall = '3.5';
      bandTier = 'Extremely Limited User';
      feedback = {
        FC: "Câu trả lời quá ngắn, thường xuyên ngắt quãng dài và phụ thuộc nhiều vào câu hỏi của giám khảo.",
        LR: "Vốn từ rất hạn hẹp, thường xuyên lặp lại các từ cơ bản (good, like, nice), chưa có từ nối hay collocations.",
        GRA: "Thường xuyên mắc lỗi ngữ pháp cơ bản (thiếu động từ to be, chia sai thì, mất âm đuôi -s/es/ed).",
        P: "Phát âm ở mức nghe hiểu hạn chế, chưa có ngữ điệu và trọng âm câu."
      };
      fatalFlaw = "Cần mở rộng ý bằng cách thêm lý do (Because...) và ví dụ thực tế (For instance...) để câu trả lời không bị dừng đột ngột.";
    } else if (totalWords < 140) {
      fc = 4.5; lr = 4.5; gra = 4.0; p = 4.5;
      overall = '4.5';
      bandTier = 'Limited User';
      feedback = {
        FC: "Có thể truyền đạt ý cơ bản nhưng bài nói bị ngắt quãng, thiếu liên kết mượt mà giữa các ý.",
        LR: "Vốn từ đủ cho chủ đề quen thuộc ở mức sơ cấp (A2/B1), chưa sử dụng được các collocations học thuật.",
        GRA: "Sử dụng câu đơn giản tương đối chính xác nhưng mắc lỗi ngay khi cố thử câu phức hoặc mệnh đề phụ.",
        P: "Phát âm nhìn chung có thể hiểu được ở các từ cơ bản, nhưng thiếu ngữ điệu biểu cảm và nhịp điệu chunking."
      };
      fatalFlaw = "Tập trung bổ sung từ nối chuyển ý (However, In addition, To be specific) và kéo dài bài nói Part 2 ít nhất 1 phút 30 giây.";
    } else if (totalWords < 230) {
      fc = 5.5; lr = 5.5; gra = 5.0; p = 5.5;
      overall = '5.5';
      bandTier = 'Modest User';
      feedback = {
        FC: "Duy trì được nhịp độ nói tương đối ở Part 1, nhưng bắt đầu ngập ngừng rõ rệt khi phát triển ý phức tạp trong Part 2 và Part 3.",
        LR: "Vốn từ ở mức trung cấp (B1-B2), bắt đầu xuất hiện một vài từ đồng nghĩa nhưng đôi khi dùng sai ngữ cảnh hoặc gượng gạo.",
        GRA: "Cố gắng sử dụng câu ghép và câu phức, nhưng vẫn còn lỗi chia thì và mạo từ (a/an/the) chưa chuẩn xác.",
        P: "Phát âm rõ ràng đa số từ thông dụng, nhưng trọng âm từ đa âm tiết và ngữ điệu kết thúc câu chưa tự nhiên."
      };
      fatalFlaw = "Cần trau dồi các collocations mang tính chuyên sâu theo chủ đề và cấu trúc điều kiện để nâng bậc ngữ pháp.";
    } else if (totalWords < 350) {
      fc = 6.5; lr = 6.5; gra = 6.0; p = 6.5;
      overall = '6.5';
      bandTier = 'Competent User';
      feedback = {
        FC: "Tốc độ nói tương đối ổn định, đã có khả năng nói câu dài và liên kết ý khá tốt, đôi khi còn ngập ngừng để tìm từ.",
        LR: "Vốn từ vựng tương đối đa dạng (B2), có nỗ lực sử dụng collocations và thành ngữ, tuy đôi chỗ chưa hoàn toàn tự nhiên.",
        GRA: "Phối hợp khá tốt giữa câu đơn và câu phức. Vẫn còn vài lỗi ngữ pháp nhỏ nhưng không gây cản trở người nghe hiểu thông điệp.",
        P: "Phát âm tương đối chuẩn xác, hiểu rõ cách ngắt cụm nghĩa (chunking), ngữ điệu tự nhiên trong phần lớn câu trả lời."
      };
      fatalFlaw = "Để bứt phá lên Band 7.5+, hãy sử dụng các liên từ tương phản chỉ sự suy luận tinh tế (whereas, nevertheless, conversely) và từ vựng mang tính học thuật cao.";
    } else if (totalWords < 480) {
      fc = uniqueMatched.length >= 2 ? 7.5 : 7.0;
      lr = uniqueMatched.length >= 2 ? 7.5 : 7.0;
      gra = 7.0;
      p = 7.5;
      overall = ((fc + lr + gra + p) / 4 >= 7.25 ? 7.5 : 7.0).toFixed(1);
      bandTier = 'Good User';
      feedback = {
        FC: "Nói lưu loát, tự nhiên, ít ngập ngừng, sử dụng linh hoạt các discourse markers (without a doubt, simultaneously, unquestionably).",
        LR: "Vốn từ phong phú (C1), sử dụng chính xác các cụm từ collocations chuyên sâu" + (uniqueMatched.length ? ` (như: ${uniqueMatched.slice(0, 3).join(', ')})` : '') + ".",
        GRA: "Linh hoạt kết hợp câu phức, mệnh đề quan hệ và các cấu trúc điều kiện. Kiểm soát tốt sự hòa hợp giữa các thì.",
        P: "Ngữ điệu tự nhiên, phân bổ trọng âm từ và nhịp điệu ngắt cụm rành mạch, chuẩn xác."
      };
      fatalFlaw = "Cần kéo dài bài nói Part 2 chạm mốc 1 phút 50 giây để phô diễn trọn vẹn vốn từ vựng miêu tả chi tiết trước khi giám khảo ra tín hiệu dừng.";
    } else {
      // 480+ words
      fc = 8.5;
      lr = 8.5;
      gra = 8.0;
      p = 8.5;
      overall = '8.5';
      bandTier = 'Expert User';
      feedback = {
        FC: "Nói hoàn toàn lưu loát, độ mạch lạc cao, phản xạ sắc bén, phát triển luận điểm sâu sắc và chặt chẽ xuyên suốt cả 3 phần thi.",
        LR: "Vốn từ học thuật đỉnh cao (C1-C2), sử dụng nhuần nhuyễn các collocations triết học và thành ngữ tự nhiên" + (uniqueMatched.length ? ` (như: ${uniqueMatched.slice(0, 4).join(', ')})` : '') + ".",
        GRA: "Kiểm soát cấu trúc ngữ pháp phức tạp với độ chính xác gần như tuyệt đối, đa dạng về mệnh đề phụ và đảo ngữ.",
        P: "Phát âm chuẩn xác, ngữ điệu tinh tế theo cảm xúc và nhịp điệu bản xứ mượt mà."
      };
      fatalFlaw = "Bạn đã đạt phong độ đỉnh cao của một Expert User (Band 8.5). Hãy duy trì phản xạ tự nhiên này trong ngày thi chính thức!";
    }

    return {
      testId: testId,
      overallScore: `Band ${overall}`,
      bandTier: bandTier,
      criteriaScores: {
        FC: fc.toFixed(1),
        LR: lr.toFixed(1),
        GRA: gra.toFixed(1),
        P: p.toFixed(1)
      },
      wordCounts: { p1: p1Words, p2: p2Words, p3: p3Words, total: totalWords },
      matchedCollocations: uniqueMatched,
      matchedConnectors: matchedConnectors,
      detailedFeedback: feedback,
      fatalFlaw: fatalFlaw
    };
  }

  function submitSpeakingExam(forceSubmit = false) {
    harvestCurrentInputValues();
    stopSpeakingRecording();
    stopExaminerSpeech();

    // Check word counts
    const p1Words = Object.values(candidateTranscripts.part1 || {}).join(' ').trim().split(/\s+/).filter(Boolean).length;
    const p2SpeechText = (candidateTranscripts.part2_speech || '').trim();
    const p2NotesText = (candidateTranscripts.part2_prepNotes || '').trim();
    const p2Words = (p2SpeechText + (p2NotesText && !p2SpeechText ? ' ' + p2NotesText : '')).trim().split(/\s+/).filter(Boolean).length;
    const p3Words = Object.values(candidateTranscripts.part3 || {}).join(' ').trim().split(/\s+/).filter(Boolean).length;
    const totalWords = p1Words + p2Words + p3Words;

    // Zero-word confirmation prevention
    if (totalWords === 0 && !forceSubmit) {
      showZeroWordsWarningModal();
      return;
    }

    // Release exam lockdown mode if active
    if (window.examLockdown && typeof window.examLockdown.releaseExamLockdown === 'function') {
      window.examLockdown.releaseExamLockdown();
    }

    const speakingResults = evaluateSpeakingPerformance(candidateTranscripts, currentTestId);

    // Render summary in Socratic chatbox
    renderSpeakingReportInChat(speakingResults);

    // Open Official Scorecard Modal
    openOfficialSpeakingScorecardModal(speakingResults);
  }

  function renderSpeakingReportInChat(results) {
    const chatContainer = document.getElementById('aiChatBox');
    if (!chatContainer) return;

    const isZero = results.overallScore === 'Band 0.0';

    chatContainer.innerHTML = `
      <div class="p-3.5 rounded-xl bg-white dark:bg-[#111C44] border ${isZero ? 'border-rose-300 dark:border-rose-800' : 'border-iot-border dark:border-slate-700'} shadow-sm text-xs space-y-3 font-sans">
        <div class="flex items-center gap-2 ${isZero ? 'text-rose-600' : 'text-purple-600'} font-bold font-mono">
          <i data-lucide="${isZero ? 'alert-triangle' : 'award'}" class="w-4 h-4 ${isZero ? 'text-rose-500' : 'text-amber-500'}"></i>
          <span>BÁO CÁO SOCRATIC AI: SPEAKING TEST REPORT</span>
        </div>

        <div class="p-2.5 rounded-lg ${isZero ? 'bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800' : 'bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800'} text-xs">
          Kết quả tổng quát bài thi Speaking 3 Parts:
          <div class="font-mono font-bold text-base ${isZero ? 'text-rose-700 dark:text-rose-300' : 'text-purple-800 dark:text-purple-200'} mt-1 flex items-center justify-between">
            <span>${results.overallScore}</span>
            <span class="text-xs px-2 py-0.5 rounded font-bold ${isZero ? 'bg-rose-200 dark:bg-rose-900 text-rose-800 dark:text-rose-200' : 'bg-purple-200 dark:bg-purple-900 text-purple-800 dark:text-purple-200'}">
              ${results.bandTier}
            </span>
          </div>
          <div class="text-[11px] text-iot-muted mt-1.5 font-mono grid grid-cols-2 gap-1 border-t ${isZero ? 'border-rose-200/60 dark:border-rose-800/60' : 'border-purple-200/60 dark:border-purple-800/60'} pt-1.5">
            <span>FC (Trôi chảy): ${results.criteriaScores.FC}</span>
            <span>LR (Từ vựng): ${results.criteriaScores.LR}</span>
            <span>GRA (Ngữ pháp): ${results.criteriaScores.GRA}</span>
            <span>P (Phát âm): ${results.criteriaScores.P}</span>
          </div>
        </div>

        <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
          ${isZero ? '⚠️ Bài thi được ghi nhận 0 từ phát ngôn (chưa ghi âm hoặc chưa nhập văn bản). Hãy bật microphone để luyện nói và nhận điểm phân tích thật.' : 'Đã mở Bảng điểm chính thức IDP/BC. Bấm <strong>"Xem Bảng Điểm Chi Tiết"</strong> để nghiên cứu các cụm từ Band 8.5+ và nhận xét của cựu giám khảo.'}
        </p>
      </div>
    `;

    if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
  }

  // ==========================================
  // 9. PROFESSIONAL CD-IELTS OFFICIAL SPEAKING SCORECARD MODAL
  // ==========================================
  function openOfficialSpeakingScorecardModal(results) {
    const studentName = window.socraticAI && window.socraticAI.profile ? window.socraticAI.profile.name : 'Học viên';
    const studentTarget = window.socraticAI && window.socraticAI.profile ? window.socraticAI.profile.targetBand : '8.0';

    let modal = document.getElementById('officialSpeakingScorecardModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'officialSpeakingScorecardModal';
      modal.className = 'fixed inset-0 z-[9999] bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto';
      document.body.appendChild(modal);
    }

    const overallNum = parseFloat(results.overallScore.replace('Band ', ''));
    let cardGradient = 'from-purple-600 to-indigo-700';
    let cardBadgeBg = 'bg-white/20 text-white';

    if (overallNum === 0) {
      cardGradient = 'from-slate-800 via-rose-950 to-red-900 border-2 border-rose-500/60';
      cardBadgeBg = 'bg-rose-500/30 text-rose-200 border border-rose-400/30';
    } else if (overallNum < 4.0) {
      cardGradient = 'from-amber-800 to-rose-900';
      cardBadgeBg = 'bg-amber-500/30 text-amber-100';
    } else if (overallNum < 6.0) {
      cardGradient = 'from-blue-700 to-indigo-800';
      cardBadgeBg = 'bg-blue-500/30 text-blue-100';
    } else if (overallNum < 7.5) {
      cardGradient = 'from-purple-600 to-indigo-700';
      cardBadgeBg = 'bg-white/20 text-white';
    } else {
      cardGradient = 'from-emerald-600 to-teal-700';
      cardBadgeBg = 'bg-white/25 text-white';
    }

    const criteriaBadge = (scoreStr) => {
      const s = parseFloat(scoreStr);
      if (s === 0) return 'bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-800';
      if (s < 5.0) return 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300';
      if (s < 7.0) return 'bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300';
      return 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300';
    };

    modal.innerHTML = `
      <div class="relative w-full max-w-3xl bg-white dark:bg-[#071326] rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200 font-sans">
        
        <!-- Header Strip -->
        <div class="bg-gradient-to-r ${overallNum === 0 ? 'from-rose-950 via-slate-900 to-slate-950' : 'from-purple-950 via-indigo-950 to-slate-900'} text-white p-5 sm:p-6 border-b ${overallNum === 0 ? 'border-rose-800/40' : 'border-purple-800/40'} relative overflow-hidden">
          <div class="flex items-center justify-between relative z-10">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-2xl ${overallNum === 0 ? 'bg-rose-500/20 border border-rose-400/40 text-rose-300' : 'bg-purple-500/20 border border-purple-400/40 text-purple-300'} flex items-center justify-center shadow-md">
                <i data-lucide="${overallNum === 0 ? 'alert-octagon' : 'mic'}" class="w-6 h-6"></i>
              </div>
              <div>
                <span class="text-[10px] font-mono uppercase tracking-widest ${overallNum === 0 ? 'text-rose-300 bg-rose-500/20 border border-rose-300/30' : 'text-purple-300 bg-purple-500/20 border border-purple-300/30'} px-2 py-0.5 rounded font-bold">
                  CD-IELTS OFFICIAL TEST REPORT FORM
                </span>
                <h2 class="text-lg sm:text-xl font-bold text-white mt-1 leading-tight">
                  BẢNG ĐIỂM KHẢO THÍ SPEAKING 3 PARTS (IDP / BC)
                </h2>
                <p class="text-xs ${overallNum === 0 ? 'text-rose-200/80' : 'text-purple-200/80'} mt-0.5 font-mono">
                  Phỏng vấn trực tiếp 1:1 • Cambridge 19 Test 1 Speaking
                </p>
              </div>
            </div>

            <button onclick="window.closeOfficialSpeakingScorecardModal()"
              class="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all text-sm">
              ✕
            </button>
          </div>
        </div>

        <!-- Body Content -->
        <div class="p-5 sm:p-6 space-y-5 text-xs max-h-[75vh] overflow-y-auto">
          
          <!-- Candidate Pill & Overall Band Score Banner -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 col-span-1 md:col-span-2 flex flex-col justify-between">
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-[11px]">
                <div>
                  <span class="text-slate-400 block text-[10px] uppercase">Thí sinh</span>
                  <strong class="text-slate-900 dark:text-white">${studentName}</strong>
                </div>
                <div>
                  <span class="text-slate-400 block text-[10px] uppercase">Mục tiêu</span>
                  <strong class="text-amber-500">Band ${studentTarget}</strong>
                </div>
                <div>
                  <span class="text-slate-400 block text-[10px] uppercase">Thời lượng thi</span>
                  <strong class="text-purple-600 dark:text-purple-300">11 – 14 Phút</strong>
                </div>
              </div>

              <div class="pt-3 mt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono">
                <span class="text-slate-500">Tổng số từ ghi nhận:</span>
                <span class="font-bold ${overallNum === 0 ? 'text-rose-600 dark:text-rose-400' : 'text-slate-800 dark:text-slate-200'}">
                  ${results.wordCounts.total} từ (P1: ${results.wordCounts.p1} • P2: ${results.wordCounts.p2} • P3: ${results.wordCounts.p3})
                </span>
              </div>
            </div>

            <!-- Overall Band Card -->
            <div class="p-4 rounded-2xl bg-gradient-to-br ${cardGradient} text-white flex flex-col items-center justify-center text-center shadow-lg">
              <span class="text-[10px] font-mono uppercase tracking-widest text-slate-200 font-bold">OVERALL BAND</span>
              <div class="text-3xl sm:text-4xl font-extrabold font-mono my-1 tracking-tight">
                ${results.overallScore.replace('Band ', '')}
              </div>
              <span class="text-[10px] ${cardBadgeBg} px-2 py-0.5 rounded-full font-mono font-bold">
                ${results.bandTier}
              </span>
            </div>

          </div>

          <!-- 4 Official Criteria Breakdown Grid -->
          <div class="space-y-2.5">
            <h4 class="font-bold text-xs uppercase font-mono tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
              <i data-lucide="layers" class="w-4 h-4 text-purple-600"></i>
              <span>Phân Tích Chi Tiết Theo 4 Tiêu Chí Chấm Điểm IDP / BC:</span>
            </h4>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans">
              
              <!-- 1. FC -->
              <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
                <div class="flex items-center justify-between">
                  <span class="font-bold text-slate-800 dark:text-slate-200 text-xs">Fluency &amp; Coherence (Độ trôi chảy)</span>
                  <span class="px-2 py-0.5 rounded font-bold font-mono text-xs ${criteriaBadge(results.criteriaScores.FC)}">Band ${results.criteriaScores.FC}</span>
                </div>
                <p class="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  ${results.detailedFeedback.FC}
                </p>
              </div>

              <!-- 2. LR -->
              <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
                <div class="flex items-center justify-between">
                  <span class="font-bold text-slate-800 dark:text-slate-200 text-xs">Lexical Resource (Vốn từ vựng)</span>
                  <span class="px-2 py-0.5 rounded font-bold font-mono text-xs ${criteriaBadge(results.criteriaScores.LR)}">Band ${results.criteriaScores.LR}</span>
                </div>
                <p class="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  ${results.detailedFeedback.LR}
                </p>
              </div>

              <!-- 3. GRA -->
              <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
                <div class="flex items-center justify-between">
                  <span class="font-bold text-slate-800 dark:text-slate-200 text-xs">Grammatical Range &amp; Accuracy</span>
                  <span class="px-2 py-0.5 rounded font-bold font-mono text-xs ${criteriaBadge(results.criteriaScores.GRA)}">Band ${results.criteriaScores.GRA}</span>
                </div>
                <p class="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  ${results.detailedFeedback.GRA}
                </p>
              </div>

              <!-- 4. P -->
              <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
                <div class="flex items-center justify-between">
                  <span class="font-bold text-slate-800 dark:text-slate-200 text-xs">Pronunciation (Phát âm &amp; Ngữ điệu)</span>
                  <span class="px-2 py-0.5 rounded font-bold font-mono text-xs ${criteriaBadge(results.criteriaScores.P)}">Band ${results.criteriaScores.P}</span>
                </div>
                <p class="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  ${results.detailedFeedback.P}
                </p>
              </div>

            </div>
          </div>

          <!-- Matched Collocations Used (If any) -->
          ${results.matchedCollocations && results.matchedCollocations.length > 0 ? `
            <div class="p-3.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-900 text-xs space-y-2">
              <span class="font-bold text-purple-900 dark:text-purple-300 flex items-center gap-1.5 font-mono">
                <i data-lucide="sparkles" class="w-4 h-4 text-purple-600"></i>
                <span>Collocations Học Thuật Ghi Nhận Trong Bài Nói (${results.matchedCollocations.length}):</span>
              </span>
              <div class="flex flex-wrap gap-1.5">
                ${results.matchedCollocations.map(col => `
                  <span class="px-2 py-0.5 rounded bg-white dark:bg-slate-800 border border-purple-300 dark:border-purple-700 text-purple-700 dark:text-purple-300 font-mono font-bold text-[11px]">
                    ✓ ${col}
                  </span>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Examiner Fatal Flaw Advice -->
          <div class="p-3.5 rounded-xl ${overallNum === 0 ? 'bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900' : 'bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900'} text-xs space-y-1">
            <span class="font-bold ${overallNum === 0 ? 'text-rose-800 dark:text-rose-300' : 'text-amber-800 dark:text-amber-300'} flex items-center gap-1.5 font-mono">
              <i data-lucide="${overallNum === 0 ? 'alert-triangle' : 'alert-circle'}" class="w-4 h-4 ${overallNum === 0 ? 'text-rose-600' : 'text-amber-600'}"></i>
              <span>${overallNum === 0 ? 'Nhận Định Khảo Thí Quy Chuẩn IELTS:' : 'Khuyến nghị của Giám khảo để chạm mốc Band 8.5+:'}</span>
            </span>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
              ${results.fatalFlaw}
            </p>
          </div>

          <!-- Actions -->
          <div class="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 font-mono">
            <button onclick="window.closeOfficialSpeakingScorecardModal()"
              class="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold transition-all">
              Đóng Bảng Điểm
            </button>

            <button onclick="window.restartSpeakingTest()"
              class="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition-all shadow-md flex items-center gap-1.5 active:scale-95">
              <i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i>
              <span>Luyện Lại Bài Speaking Này</span>
            </button>
          </div>

        </div>

      </div>
    `;

    if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
  }

  function closeOfficialSpeakingScorecardModal() {
    const modal = document.getElementById('officialSpeakingScorecardModal');
    safeRemoveElement(modal);
  }

  function restartSpeakingTest() {
    closeOfficialSpeakingScorecardModal();
    closeZeroWordsWarningModal();
    // Clear transcript cache
    candidateTranscripts.part1 = {};
    candidateTranscripts.part2_prepNotes = '';
    candidateTranscripts.part2_speech = '';
    candidateTranscripts.part2_followups = {};
    candidateTranscripts.part3 = {};

    currentSpeakingPart = 1;
    currentPart1TopicIdx = 0;
    currentPart1QuestionIdx = 0;
    currentPart3QuestionIdx = 0;

    renderSpeakingTestEnvironment(currentTestId);
  }

  // ==========================================
  // 10. EXPORTS TO GLOBAL WINDOW OBJECT
  // ==========================================
  if (typeof window !== 'undefined') {
    window.SPEAKING_TESTS = SPEAKING_TESTS;
    window.renderSpeakingTestEnvironment = renderSpeakingTestEnvironment;
    window.switchSpeakingPart = switchSpeakingPart;
    window.switchPart1Topic = switchPart1Topic;
    window.nextPart1Question = nextPart1Question;
    window.prevPart1Question = prevPart1Question;
    window.jumpToPart1Question = jumpToPart1Question;
    window.savePart1Response = savePart1Response;
    window.startPart2PrepTimer = startPart2PrepTimer;
    window.skipPrepAndStartSpeaking = skipPrepAndStartSpeaking;
    window.togglePart2SpeechRecording = togglePart2SpeechRecording;
    window.savePart2Notes = savePart2Notes;
    window.savePart2Speech = savePart2Speech;
    window.nextPart3Question = nextPart3Question;
    window.prevPart3Question = prevPart3Question;
    window.jumpToPart3Question = jumpToPart3Question;
    window.savePart3Response = savePart3Response;
    window.speakExaminerPrompt = speakExaminerPrompt;
    window.speakCurrentExaminerQuestion = speakCurrentExaminerQuestion;
    window.stopExaminerSpeech = stopExaminerSpeech;
    window.stopSpeakingRecording = stopSpeakingRecording;
    window.toggleSpeakingRecording = toggleSpeakingRecording;
    window.setSpeakingLanguage = setSpeakingLanguage;
    window.updateLangSwitcherUI = updateLangSwitcherUI;
    window.updateFieldWordCount = updateFieldWordCount;
    window.updateHeaderTotalWordCount = updateHeaderTotalWordCount;
    window.harvestCurrentInputValues = harvestCurrentInputValues;
    window.evaluateSpeakingPerformance = evaluateSpeakingPerformance;
    window.showZeroWordsWarningModal = showZeroWordsWarningModal;
    window.closeZeroWordsWarningModal = closeZeroWordsWarningModal;
    window.confirmZeroWordsSubmit = confirmZeroWordsSubmit;
    window.submitSpeakingExam = submitSpeakingExam;
    window.openOfficialSpeakingScorecardModal = openOfficialSpeakingScorecardModal;
    window.closeOfficialSpeakingScorecardModal = closeOfficialSpeakingScorecardModal;
    window.restartSpeakingTest = restartSpeakingTest;
  }

})();
