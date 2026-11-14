/**
 * IELTS ACADEMIC LAB - SECURE EXAM LOCKDOWN ENGINE
 * Fullscreen Kiosk Lockdown Mode & Anti-Cheat Proctoring for all 4 Skills
 * (Listening, Reading, Writing, Speaking, and Full Mock)
 * Brand: IELTS ACADEMIC LAB (Zero hardcoded names, dynamic student profile)
 */

(function () {
  'use strict';

  // ==========================================
  // 1. LOCKDOWN STATE
  // ==========================================
  let isLockdownActive = false;
  let violationCount = 0;
  const MAX_VIOLATIONS = 3;
  let activeSkill = 'READING';
  let isSubmittingDueToViolations = false;

  function safeRemoveElement(el) {
    if (!el) return;
    if (typeof el.remove === 'function') {
      el.remove();
    } else if (el.parentNode && typeof el.parentNode.removeChild === 'function') {
      el.parentNode.removeChild(el);
    }
  }

  // ==========================================
  // 2. AUDIO WARNING BEEP (WEB AUDIO API)
  // ==========================================
  function playSecurityAlertSound() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const now = ctx.currentTime;
      
      // Two-tone urgent siren
      const tones = [587.33, 440]; // D5, A4
      tones.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, now + idx * 0.15);
        gain.gain.setValueAtTime(0.01, now + idx * 0.15);
        gain.gain.exponentialRampToValueAtTime(0.3, now + idx * 0.15 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.15 + 0.25);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.15);
        osc.stop(now + idx * 0.15 + 0.28);
      });
    } catch (e) {
      console.warn("Security audio error:", e);
    }
  }

  // ==========================================
  // 3. PRE-EXAM LOCKDOWN CONFIRMATION MODAL
  // ==========================================
  function showPreExamLockdownModal(skill) {
    activeSkill = skill || activeSkill;
    const studentName = window.socraticAI && window.socraticAI.profile ? window.socraticAI.profile.name : 'Học viên';
    const studentTarget = window.socraticAI && window.socraticAI.profile ? window.socraticAI.profile.targetBand : '8.0';

    let skillDuration = '60 Phút';
    let skillDesc = '40 Câu hỏi học thuật (Passage 1 – 3)';
    if (activeSkill === 'LISTENING') {
      skillDuration = '30 Phút';
      skillDesc = '40 Câu hỏi bản xứ (Part 1 – 4) • Audio liền mạch';
    } else if (activeSkill === 'WRITING') {
      skillDuration = '60 Phút';
      skillDesc = 'Task 1 & Task 2 • Chấm điểm nghiêm ngặt cựu giám khảo IDP/BC';
    } else if (activeSkill === 'SPEAKING') {
      skillDuration = '11–14 Phút';
      skillDesc = '3 Parts chuẩn IDP/BC (Part 1 Phỏng vấn, Part 2 Cue Card, Part 3 Thảo luận)';
    } else if (activeSkill === 'FULL MOCK') {
      skillDuration = '165 Phút';
      skillDesc = 'Trọn vẹn 4 Kỹ năng (Listening, Reading, Writing, Speaking)';
    }

    let modal = document.getElementById('preExamLockdownModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'preExamLockdownModal';
      modal.className = 'fixed inset-0 z-[9990] bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto';
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div class="relative w-full max-w-xl bg-white dark:bg-[#071326] rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200 font-sans">
        
        <!-- Header Strip -->
        <div class="bg-gradient-to-r from-[#0F1E36] via-[#152A4E] to-[#1C3B6F] text-white p-5 sm:p-6 border-b border-blue-900/60 relative overflow-hidden">
          <div class="flex items-center gap-3 relative z-10">
            <div class="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 shadow-md">
              <i data-lucide="shield-alert" class="w-6 h-6"></i>
            </div>
            <div>
              <span class="text-[10px] font-mono uppercase tracking-widest text-emerald-300 font-bold bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-300/30">
                SECURE CD-IELTS • KIOSK LOCKDOWN
              </span>
              <h2 class="text-base sm:text-lg font-bold text-white mt-1 leading-tight">
                XÁC NHẬN BẮT ĐẦU THI & KHÓA MÀN HÌNH
              </h2>
              <p class="text-xs text-blue-100/80 mt-0.5 font-mono">
                Chuẩn khảo thí quốc tế IDP & British Council
              </p>
            </div>
          </div>
        </div>

        <!-- Body Content -->
        <div class="p-5 sm:p-6 space-y-4 text-xs">
          
          <!-- Candidate & Exam Info Pill -->
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-2.5 font-mono text-[11px]">
            <div>
              <span class="text-slate-400 block text-[10px] uppercase">Thí sinh</span>
              <strong class="text-slate-900 dark:text-white">${studentName}</strong>
            </div>
            <div>
              <span class="text-slate-400 block text-[10px] uppercase">Kỹ năng thi</span>
              <strong class="text-emerald-700 dark:text-emerald-300">${activeSkill} (${skillDuration})</strong>
            </div>
            <div>
              <span class="text-slate-400 block text-[10px] uppercase">Mục tiêu</span>
              <strong class="text-amber-500">Band ${studentTarget}</strong>
            </div>
          </div>

          <!-- Exam Regulations Notice -->
          <div class="space-y-2.5">
            <h4 class="font-bold text-xs uppercase font-mono tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
              <i data-lucide="lock" class="w-4 h-4 text-emerald-600"></i>
              <span>Quy chế thi khóa màn hình độc lập:</span>
            </h4>
            
            <ul class="space-y-2 text-slate-700 dark:text-slate-300 text-[11px] leading-relaxed">
              <li class="flex items-start gap-2">
                <span class="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">1</span>
                <span><strong>Khóa toàn màn hình tự động:</strong> Bài thi sẽ được chuyển sang chế độ toàn màn hình (Fullscreen Kiosk Mode). Bạn không thể mở tab khác hay chuyển cửa sổ.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">2</span>
                <span><strong>Giám sát vi phạm (AI Proctor):</strong> Hệ thống tự động ghi nhận nếu bạn bấm thoát toàn màn hình (Esc), thu nhỏ cửa sổ hoặc chuyển tab. Vi phạm quá <strong>3 lần</strong> sẽ tự động bị đình chỉ và nộp bài.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">3</span>
                <span><strong>Khóa phím tắt gian lận:</strong> Vô hiệu hóa chuột phải, phím kiểm tra mã nguồn (F12, Inspect), và ngăn chặn tải lại trang làm mất dữ liệu.</span>
              </li>
            </ul>
          </div>

          <!-- Start Action Button -->
          <div class="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <a href="index.html" class="w-full sm:w-auto text-center px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono font-bold transition-all">
              Hủy / Quay lại
            </a>

            <button onclick="window.examLockdown.enterLockdownAndStartExam()" class="w-full sm:w-auto flex-1 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-mono font-bold text-xs transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2">
              <i data-lucide="lock" class="w-4 h-4 text-emerald-200"></i>
              <span>BẮT ĐẦU BÀI THI &amp; KHÓA TOÀN MÀN HÌNH</span>
            </button>
          </div>

        </div>

      </div>
    `;

    if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
  }

  // ==========================================
  // 4. ENTER & EXIT LOCKDOWN MODES
  // ==========================================
  function enterLockdownAndStartExam() {
    isLockdownActive = true;
    violationCount = 0;

    // Remove pre-exam modal
    const preModal = document.getElementById('preExamLockdownModal');
    safeRemoveElement(preModal);

    // Request browser Fullscreen
    requestBrowserFullscreen();

    // Set Room Mode to Exam
    if (typeof window.setRoomMode === 'function') {
      window.setRoomMode('exam');
    }

    // Update Header Pill
    updateLockdownHeaderIndicator(true);

    if (window.socraticAI && window.socraticAI.showLearningToast) {
      window.socraticAI.showLearningToast("🔒 Phòng thi đã được khóa toàn màn hình an toàn. Chúc bạn làm bài đạt điểm cao!");
    }
  }

  function requestBrowserFullscreen() {
    const el = document.documentElement;
    const rfs = el.requestFullscreen || el.webkitRequestFullscreen || el.mozRequestFullScreen || el.msRequestFullscreen;
    if (rfs) {
      rfs.call(el).catch(err => {
        console.warn("Fullscreen request error:", err);
      });
    }
  }

  function exitBrowserFullscreen() {
    const efs = document.exitFullscreen || document.webkitExitFullscreen || document.mozCancelFullScreen || document.msExitFullscreen;
    if (efs && (document.fullscreenElement || document.webkitFullscreenElement)) {
      efs.call(document).catch(err => {
        console.warn("Exit fullscreen error:", err);
      });
    }
  }

  function releaseExamLockdown() {
    isLockdownActive = false;
    updateLockdownHeaderIndicator(false);

    // Remove any violation modal
    const violModal = document.getElementById('kioskLockViolationModal');
    safeRemoveElement(violModal);

    // Release exam mode to practice
    if (typeof window.setRoomMode === 'function') {
      window.setRoomMode('practice');
    }
  }

  function toggleExamLockdownFullscreen() {
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
      requestBrowserFullscreen();
    } else {
      if (window.socraticAI && window.socraticAI.showLearningToast) {
        window.socraticAI.showLearningToast("ℹ️ Màn hình đang ở chế độ khóa toàn màn hình an toàn.");
      }
    }
  }

  // ==========================================
  // 5. VIOLATION INTERCEPTOR & LOCK SCREEN
  // ==========================================
  function handleViolationDetected(reason) {
    if (!isLockdownActive || isSubmittingDueToViolations) return;

    violationCount++;
    playSecurityAlertSound();

    let modal = document.getElementById('kioskLockViolationModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'kioskLockViolationModal';
      modal.className = 'fixed inset-0 z-[9999] bg-slate-950/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-6 text-center text-white';
      document.body.appendChild(modal);
    }

    if (violationCount >= MAX_VIOLATIONS) {
      // Disqualify and auto-submit
      isSubmittingDueToViolations = true;
      modal.innerHTML = `
        <div class="w-full max-w-lg bg-red-950/90 border-2 border-red-600 rounded-3xl p-6 sm:p-8 space-y-4 shadow-2xl animate-in zoom-in-95 duration-200">
          <div class="w-16 h-16 rounded-full bg-red-600/30 border-2 border-red-500 text-red-400 flex items-center justify-center mx-auto shadow-lg animate-pulse">
            <i data-lucide="shield-x" class="w-8 h-8"></i>
          </div>
          <h2 class="text-lg sm:text-xl font-bold font-mono text-red-300 uppercase tracking-tight">
            ❌ BẠN ĐÃ VI PHẠM QUÁ 3 LẦN QUY CHẾ KHÓA MÀN HÌNH
          </h2>
          <p class="text-xs text-red-100 leading-relaxed font-sans">
            Hệ thống giám sát khảo thí phát hiện việc rời màn hình thi liên tục. Theo quy chế thi bảo mật CD-IELTS, bài thi của bạn đã bị tự động thu bài và chấm điểm tại thời điểm này.
          </p>
          <div class="p-3 bg-red-900/60 rounded-xl border border-red-700 text-xs font-mono text-red-200">
            Đang tổng hợp kết quả và mở Bảng điểm chính thức...
          </div>
        </div>
      `;
      if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();

      setTimeout(() => {
        releaseExamLockdown();
        if (typeof window.submitExam === 'function') {
          window.submitExam();
        }
      }, 3000);
      return;
    }

    // Normal violation warning & resume button
    modal.innerHTML = `
      <div class="w-full max-w-md bg-slate-900/95 border-2 border-amber-500 rounded-3xl p-6 sm:p-8 space-y-4 shadow-2xl animate-in zoom-in-95 duration-200 font-sans">
        
        <div class="w-16 h-16 rounded-full bg-amber-500/20 border-2 border-amber-500 text-amber-400 flex items-center justify-center mx-auto shadow-lg animate-bounce">
          <i data-lucide="alert-octagon" class="w-8 h-8"></i>
        </div>

        <div class="space-y-1">
          <span class="text-[10px] font-mono uppercase tracking-widest text-amber-300 font-bold bg-amber-500/20 px-2.5 py-0.5 rounded border border-amber-400/40">
            CẢNH BÁO GIÁM SÁT KHẢO THÍ
          </span>
          <h2 class="text-base sm:text-lg font-bold text-white mt-1 leading-snug">
            MÀN HÌNH ĐÃ BỊ TẠM KHÓA!
          </h2>
          <p class="text-xs text-slate-300 leading-relaxed">
            Phát hiện bạn vừa <strong>${reason}</strong>. Để đảm bảo tính trung thực theo quy chế thi CD-IELTS, màn hình thi phải được duy trì liên tục.
          </p>
        </div>

        <!-- Violation Counter -->
        <div class="p-3 rounded-xl bg-amber-950/60 border border-amber-700/80 font-mono text-xs flex items-center justify-between">
          <span class="text-amber-200">Số lần vi phạm an toàn:</span>
          <span class="px-2 py-0.5 rounded bg-amber-500 text-slate-950 font-bold">${violationCount} / ${MAX_VIOLATIONS}</span>
        </div>

        <p class="text-[11px] text-slate-400 font-mono italic">
          (Nếu vi phạm quá 3 lần, bài thi sẽ tự động bị đình chỉ và nộp bài)
        </p>

        <!-- Resume Action Button -->
        <button onclick="window.examLockdown.resumeLockdownFromViolation()" class="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-mono font-bold text-xs transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2">
          <i data-lucide="lock" class="w-4 h-4"></i>
          <span>QUAY LẠI PHÒNG THI &amp; KHÓA LẠI MÀN HÌNH</span>
        </button>

      </div>
    `;

    if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
  }

  function resumeLockdownFromViolation() {
    requestBrowserFullscreen();
    const modal = document.getElementById('kioskLockViolationModal');
    safeRemoveElement(modal);
  }

  // ==========================================
  // 6. HEADER INDICATOR UPDATE
  // ==========================================
  function updateLockdownHeaderIndicator(locked) {
    const pill = document.getElementById('btnToggleFullscreen');
    if (!pill) return;
    if (locked) {
      pill.className = "flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-400/40 text-xs font-mono font-bold transition-all";
      pill.innerHTML = `
        <i data-lucide="shield-check" class="w-3.5 h-3.5 text-emerald-400 animate-pulse"></i>
        <span class="hidden lg:inline">Khóa Màn Hình</span>
      `;
    } else {
      pill.className = "flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-mono transition-all border border-white/15";
      pill.innerHTML = `
        <i data-lucide="maximize" class="w-3.5 h-3.5"></i>
        <span class="hidden lg:inline">Toàn Màn Hình</span>
      `;
    }
    if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
  }

  // ==========================================
  // 7. EVENT LISTENERS & ANTI-CHEAT SHIELDS
  // ==========================================
  function attachSecurityListeners() {
    // 1. Fullscreen change listener
    const handleFsChange = () => {
      const isFs = Boolean(document.fullscreenElement || document.webkitFullscreenElement);
      if (isLockdownActive && !isFs) {
        handleViolationDetected("thoát chế độ toàn màn hình");
      }
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    document.addEventListener('webkitfullscreenchange', handleFsChange);
    document.addEventListener('mozfullscreenchange', handleFsChange);
    document.addEventListener('MSFullscreenChange', handleFsChange);

    // 2. Tab switching & window minimize listener
    document.addEventListener('visibilitychange', () => {
      if (isLockdownActive && document.hidden) {
        handleViolationDetected("chuyển sang tab hoặc ứng dụng khác");
      }
    });

    window.addEventListener('blur', () => {
      if (isLockdownActive && !document.hidden) {
        handleViolationDetected("rời tiêu điểm khỏi cửa sổ phòng thi");
      }
    });

    // 3. Block right-click context menu during exam
    window.addEventListener('contextmenu', (e) => {
      if (isLockdownActive) {
        e.preventDefault();
        if (window.socraticAI && window.socraticAI.showLearningToast) {
          window.socraticAI.showLearningToast("🔒 Thao tác chuột phải đã bị khóa trong chế độ thi CD-IELTS.");
        }
      }
    });

    // 4. Block anti-cheat keyboard shortcuts
    window.addEventListener('keydown', (e) => {
      if (!isLockdownActive) return;

      // F12 or Inspect (Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+Shift+C)
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) ||
        (e.ctrlKey && (e.key === 'U' || e.key === 'u' || e.key === 'S' || e.key === 's'))
      ) {
        e.preventDefault();
        e.stopPropagation();
        if (window.socraticAI && window.socraticAI.showLearningToast) {
          window.socraticAI.showLearningToast("🔒 Phím tắt này bị vô hiệu hóa trong phòng thi bảo mật.");
        }
        return false;
      }
    });

    // 5. Prevent accidental tab closing / reload
    window.addEventListener('beforeunload', (e) => {
      if (isLockdownActive) {
        e.preventDefault();
        e.returnValue = 'Bài thi đang trong chế độ khóa bảo mật. Bạn có chắc chắn muốn rời khỏi?';
        return e.returnValue;
      }
    });
  }

  // ==========================================
  // 8. INITIALIZE LOCKDOWN ON PAGE LOAD
  // ==========================================
  function initExamLockdown() {
    attachSecurityListeners();

    // Check skill parameter from URL or global room state
    const params = new URLSearchParams(window.location.search);
    let skill = (params.get('skill') || (window.activeExamSkill || '')).trim().toUpperCase();
    const title = params.get('title') || '';
    if (!skill) {
      if (title.toLowerCase().includes('reading')) skill = 'READING';
      else if (title.toLowerCase().includes('listening')) skill = 'LISTENING';
      else if (title.toLowerCase().includes('speaking')) skill = 'SPEAKING';
      else if (title.toLowerCase().includes('writing')) skill = 'WRITING';
      else skill = 'READING';
    }
    activeSkill = skill;

    // Show Pre-Exam Lockdown confirmation modal on entrance
    setTimeout(() => {
      showPreExamLockdownModal(skill);
    }, 150);
  }

  // ==========================================
  // 9. EXPORT API TO GLOBAL WINDOW OBJECT
  // ==========================================
  window.examLockdown = {
    init: initExamLockdown,
    showPreExamModal: showPreExamLockdownModal,
    enterLockdownAndStartExam: enterLockdownAndStartExam,
    releaseExamLockdown: releaseExamLockdown,
    resumeLockdownFromViolation: resumeLockdownFromViolation,
    toggleExamLockdownFullscreen: toggleExamLockdownFullscreen,
    isLockdownActive: () => isLockdownActive,
    getViolationCount: () => violationCount
  };

  // Auto initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initExamLockdown);
  } else {
    initExamLockdown();
  }

})();
