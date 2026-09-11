/**
 * Appfinity Technologies — Production Interaction Script (v3 Advanced UI/UX)
 * Single-Page Smooth Scroll, Viewport Reading Progress, Capsule Header Elevation,
 * Quick Command Palette (Ctrl+K), Web Audio Synthesizer, Flagship Mockup Screen Modes,
 * Interactive Telemetry, 7-Step Delivery System, Clean Architecture Kotlin Code Viewer,
 * 7-Phase Process Timeline, Gamefinity 8x8 Mini-Blast Engine with Particle Bursts,
 * Tech Stack Filter, Prompt Helper Chips, Inline Form Validation, Email Copy Toast.
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Core Element Selections ---
  const scrollProgressBar = document.getElementById('scrollProgressBar');
  const headerWrapper = document.querySelector('.header-wrapper');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-drawer-link');
  const sections = document.querySelectorAll('section[id], header[id]');
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const mobileClose = document.querySelector('.mobile-drawer-close');
  const mobileOverlay = document.querySelector('.mobile-nav-overlay');
  const backToTopBtn = document.querySelector('.back-to-top-btn');

  // Theme & Material You Elements
  const btnThemeToggle = document.getElementById('btnThemeToggle');
  const btnMobileThemeToggle = document.getElementById('btnMobileThemeToggle');
  const paletteDots = document.querySelectorAll('.palette-dot');
  
  // Hero Phone Elements
  const phoneClockDisplay = document.getElementById('phoneClockDisplay');
  const heroTelemetryCard = document.getElementById('heroTelemetryCard');
  const heroFpsVal = document.getElementById('heroFpsVal');
  const heroChartBars = document.getElementById('heroChartBars');
  const phoneModeTabs = document.querySelectorAll('.phone-mode-tab');
  const phoneComposeDemo = document.getElementById('phoneComposeDemo');
  const phoneArchFlow = document.getElementById('phoneArchFlow');
  const composeSlider = document.getElementById('composeSliderDemo');
  const composeSliderVal = document.getElementById('composeSliderVal');
  const recompTicker = document.getElementById('recompTicker');
  const heroPhoneFrame = document.getElementById('heroPhoneFrame');
  const phoneScreenGlare = document.getElementById('phoneScreenGlare');
  
  // Delivery Pipeline Elements
  const deliveryNodes = document.querySelectorAll('.p-node');
  const deliveryMilestoneBox = document.getElementById('deliveryMilestoneBox');
  
  // Architecture & Kotlin IDE Elements
  const archLayerItems = document.querySelectorAll('.arch-layer-item');
  const archDetailPanel = document.getElementById('archDetailPanel');
  const archKotlinViewer = document.getElementById("archKotlinViewer");
  const kotlinFilename = document.getElementById('kotlinFilename');
  const kotlinLayerBadge = document.getElementById('kotlinLayerBadge');
  const kotlinCodeDisplay = document.getElementById('kotlinCodeDisplay');
  const kotlinLineNumbers = document.getElementById('kotlinLineNumbers');
  const kotlinTabs = document.querySelectorAll('.kt-file-tab');
  const btnCopyKotlinCode = document.getElementById('btnCopyKotlinCode');
  const copyCodeLabel = document.getElementById('copyCodeLabel');
  const btnVerifySpecs = document.getElementById('btnVerifySpecs');
  
  // Process Timeline Elements
  const timelineCards = document.querySelectorAll('.timeline-node-card');
  const processDetailCard = document.getElementById('processDetailCard');
  
  // Featured Project & Game Engine Elements
  const screenTabs = document.querySelectorAll('.screen-tab-btn');
  const gamePhoneScreens = document.querySelectorAll('.game-screen-content');
  const gameBoardGrid = document.getElementById('gameBoardGrid');
  const gameCells = document.querySelectorAll('.g-cell');
  const btnTriggerBlast = document.getElementById('btnTriggerBlast');
  const liveScoreVal = document.getElementById('liveScoreVal');
  const liveComboVal = document.getElementById('liveComboVal');
  const gamePhoneDevice = document.querySelector('.game-phone-device');
  const btnAudioToggle = document.getElementById('btnAudioToggle');
  const audioToggleIcon = document.getElementById('audioToggleIcon');
  const audioToggleLabel = document.getElementById('audioToggleLabel');
  const gamePieceDock = document.getElementById('gamePieceDock');
  const gamePieces = document.querySelectorAll('.game-piece-preview.selectable');
  const btnShuffleDock = document.getElementById('btnShuffleDock');
  const btnResetBoard = document.getElementById('btnResetBoard');

  // Estimator Elements
  const estPlatformBtns = document.querySelectorAll('#estPlatformList .est-opt-btn');
  const estScopeBtns = document.querySelectorAll('#estScopeList .est-opt-btn');
  const estCapsBtns = document.querySelectorAll('#estCapsList .est-opt-btn');
  const estResultWeeks = document.getElementById('estResultWeeks');
  const estResultBudget = document.getElementById('estResultBudget');
  const estResultArch = document.getElementById('estResultArch');
  const btnApplyEstimator = document.getElementById('btnApplyEstimator');

  // Testimonials Elements
  const testiTrack = document.getElementById('testimonialsTrack');
  const btnTestiPrev = document.getElementById('btnTestiPrev');
  const btnTestiNext = document.getElementById('btnTestiNext');
  const testiDots = document.querySelectorAll('#testiDots .testi-dot');

  // FAQ Elements
  const faqItems = document.querySelectorAll('#faqAccordion .faq-item');
  
  // Stack Filters & Intake Elements
  const techFilters = document.querySelectorAll('.tech-filter-btn');
  const techBadges = document.querySelectorAll('.tech-badge');
  const scopeChips = document.querySelectorAll('.chip-option');
  const projectTypeInput = document.getElementById('projectType');
  const scopeEstimateTag = document.getElementById('scopeEstimateTag');
  const contactForm = document.getElementById('projectContactForm');
  const formSuccessBox = document.getElementById('formSuccessBox');
  const charCounter = document.getElementById('charCounter');
  const projectDetails = document.getElementById('projectDetails');
  const formPromptChips = document.getElementById("formPromptChips");
  const promptChips = document.querySelectorAll('.prompt-chip');
  
  // Email Copy & Footer Elements
  const btnCopyEmail = document.getElementById('btnCopyEmail');
  const copyBtnLabel = document.getElementById('copyBtnLabel');
  const currentYearElem = document.getElementById('currentYear');
  
  // Command Palette Elements
  const btnOpenCommandPalette = document.getElementById('btnOpenCommandPalette');
  const commandPaletteModal = document.getElementById('commandPaletteModal');
  const cmdSearchInput = document.getElementById('cmdSearchInput');
  const cmdItems = document.querySelectorAll('.cmd-item');
  const cmdKbdLabel = document.getElementById('cmdKbdLabel');

  /* --------------------------------------------------------------------------
     1. Web Audio API Synthesizer (Zero-Dependency Tactile Sound FX)
     -------------------------------------------------------------------------- */
  let audioCtx = null;
  let isAudioEnabled = false;

  const initAudio = () => {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  };

  const playTone = (freq, type = 'sine', duration = 0.1, gainVal = 0.08) => {
    if (!isAudioEnabled || !audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gainNode.gain.setValueAtTime(gainVal, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
      osc.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      console.warn('Audio tone synthesis error:', e);
    }
  };

  const playTapSound = () => {
    initAudio();
    playTone(520, 'triangle', 0.07, 0.06);
  };

  const playBlastSound = () => {
    initAudio();
    [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
      setTimeout(() => playTone(freq, 'sine', 0.16, 0.09), idx * 60);
    });
  };

  const playCopySound = () => {
    initAudio();
    [587.33, 880.00].forEach((freq, idx) => {
      setTimeout(() => playTone(freq, 'sine', 0.12, 0.07), idx * 70);
    });
  };

  const toggleAudioFX = () => {
    initAudio();
    isAudioEnabled = !isAudioEnabled;
    if (btnAudioToggle) {
      if (isAudioEnabled) {
        btnAudioToggle.classList.add('active');
        if (audioToggleIcon) audioToggleIcon.textContent = '🔊';
        if (audioToggleLabel) audioToggleLabel.textContent = 'Audio On';
        showToastSnackbar('Tactile sound effects enabled');
        playBlastSound();
      } else {
        btnAudioToggle.classList.remove('active');
        if (audioToggleIcon) audioToggleIcon.textContent = '🔇';
        if (audioToggleLabel) audioToggleLabel.textContent = 'Audio';
        showToastSnackbar('Sound effects muted');
      }
    }
  };

  btnAudioToggle?.addEventListener('click', toggleAudioFX);

  /* --------------------------------------------------------------------------
     Theme & Material You Palette Engine
     -------------------------------------------------------------------------- */
  const THEME_KEY = 'appfinity_theme_mode';
  const PALETTE_KEY = 'appfinity_palette_choice';

  const applyTheme = (theme) => {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem(THEME_KEY, theme);
  };

  const applyPalette = (palette) => {
    ['theme-emerald', 'theme-cyan', 'theme-purple', 'theme-amber'].forEach(cls => {
      document.body.classList.remove(cls);
    });
    if (palette && palette !== 'emerald') {
      document.body.classList.add(`theme-${palette}`);
    }
    paletteDots.forEach(dot => {
      if (dot.getAttribute('data-theme') === palette) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
    localStorage.setItem(PALETTE_KEY, palette);
  };

  // Initial Theme Detection
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme) {
    applyTheme(savedTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyTheme('dark');
  }

  const savedPalette = localStorage.getItem(PALETTE_KEY) || 'emerald';
  applyPalette(savedPalette);

  const toggleTheme = () => {
    const isDark = document.body.classList.contains('dark-mode');
    const newTheme = isDark ? 'light' : 'dark';
    applyTheme(newTheme);
    playTapSound();
    showToastSnackbar(newTheme === 'dark' ? 'Switched to Android OLED Dark Theme' : 'Switched to Light Theme');
  };

  btnThemeToggle?.addEventListener('click', toggleTheme);
  btnMobileThemeToggle?.addEventListener('click', toggleTheme);

  paletteDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const palette = dot.getAttribute('data-theme');
      if (palette) {
        applyPalette(palette);
        playTapSound();
        showToastSnackbar(`Material You palette: ${palette.charAt(0).toUpperCase() + palette.slice(1)}`);
      }
    });
  });

  // Global 'T' shortcut for Theme Toggle
  document.addEventListener('keydown', (e) => {
    if ((e.key === 't' || e.key === 'T') && !e.ctrlKey && !e.metaKey && !e.altKey) {
      const active = document.activeElement;
      const isInput = active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA' || active.isContentEditable);
      if (!isInput && !commandPaletteModal?.classList.contains('open')) {
        toggleTheme();
      }
    }
  });

  // OS-Aware Keyboard Shortcut Label
  const isMac = (navigator.platform || navigator.userAgent || '').toUpperCase().includes('MAC');
  if (cmdKbdLabel) {
    cmdKbdLabel.textContent = isMac ? '⌘K' : 'Ctrl K';
  }

  /* --------------------------------------------------------------------------
     Material Design Radial Ink Ripple Engine
     -------------------------------------------------------------------------- */
  const rippleTargets = document.querySelectorAll(
    '.btn, .btn-hero-primary, .btn-hero-secondary, .btn-nav-cta, .chip-option, .prompt-chip, .p-node, .timeline-node-card, .est-opt-btn, .btn-game-action, .btn-mini-blast, .service-arrow-link'
  );

  rippleTargets.forEach(el => {
    el.classList.add('ripple-container');
    el.addEventListener('pointerdown', (e) => {
      const rect = el.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'material-ripple';
      const size = Math.max(rect.width, rect.height) * 2;
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      el.appendChild(ripple);
      setTimeout(() => { ripple.remove(); }, 600);
    });
  });

  /* --------------------------------------------------------------------------
     Hero Flagship Phone 3D Tilt & Specular Glare
     -------------------------------------------------------------------------- */
  const heroVisualWrap = document.querySelector('.hero-visual-wrap');
  if (heroVisualWrap && heroPhoneFrame) {
    heroVisualWrap.addEventListener('pointermove', (e) => {
      const rect = heroVisualWrap.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      const tiltX = -y * 14;
      const tiltY = x * 14;

      heroPhoneFrame.style.transform = `rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg)`;
      
      if (phoneScreenGlare) {
        phoneScreenGlare.style.opacity = '0.85';
        phoneScreenGlare.style.transform = `translateX(${(-x * 30).toFixed(1)}px) translateY(${(-y * 30).toFixed(1)}px)`;
      }
    });

    heroVisualWrap.addEventListener('pointerleave', () => {
      heroPhoneFrame.style.transform = 'rotateX(0deg) rotateY(0deg)';
      if (phoneScreenGlare) {
        phoneScreenGlare.style.opacity = '0.5';
        phoneScreenGlare.style.transform = 'none';
      }
    });
  }

  /* --------------------------------------------------------------------------
     2. Spotlight Radial Cursor Glow Effect on Interactive Cards
     -------------------------------------------------------------------------- */
  const cardsToSpotlight = document.querySelectorAll('.service-card-editorial, .why-editorial-item, .showcase-card, .arch-diagram-card, .contact-form-card, .direct-email-card');
  cardsToSpotlight.forEach(card => card.classList.add('spotlight-card'));

  document.addEventListener('pointermove', (e) => {
    cardsToSpotlight.forEach(card => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', x + 'px');
      card.style.setProperty('--mouse-y', y + 'px');
    });
  });

  /* --------------------------------------------------------------------------
     3. Viewport Reading Progress Bar & Header Elevation
     -------------------------------------------------------------------------- */
  const handleScrollEffects = () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    if (scrollProgressBar && docHeight > 0) {
      const progressPercent = Math.min(100, Math.max(0, (scrollY / docHeight) * 100));
      scrollProgressBar.style.width = progressPercent + '%';
    }

    if (scrollY > 20) {
      headerWrapper?.classList.add('scrolled');
    } else {
      headerWrapper?.classList.remove('scrolled');
    }

    if (scrollY > 400) {
      backToTopBtn?.classList.add('visible');
    } else {
      backToTopBtn?.classList.remove('visible');
    }
  };

  window.addEventListener('scroll', handleScrollEffects, { passive: true });
  handleScrollEffects();

  /* --------------------------------------------------------------------------
     4. Smooth Anchor Navigation with Sticky Capsule Offset (84px)
     -------------------------------------------------------------------------- */
  const smoothScrollToTarget = (targetId) => {
    if (!targetId || targetId === '#') return;
    const targetElem = document.querySelector(targetId);
    if (targetElem) {
      closeMobileMenu();
      closeCommandPalette();

      const navHeight = 84;
      const elementPosition = targetElem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      if (history.pushState) {
        history.pushState(null, null, targetId);
      }
    }
  };

  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#') && targetId.length > 1) {
        e.preventDefault();
        smoothScrollToTarget(targetId);
      }
    });
  });

  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* --------------------------------------------------------------------------
     5. Scrollspy — IntersectionObserver for Active Nav Highlighting
     -------------------------------------------------------------------------- */
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -55% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const currentId = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          const href = link.getAttribute('href');
          if (href === '#' + currentId || 
             (currentId === 'work' && href === '#projects') || 
             (currentId === 'projects' && href === '#work')) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => observer.observe(sec));

  /* --------------------------------------------------------------------------
     6. Mobile Navigation Drawer
     -------------------------------------------------------------------------- */
  const openMobileMenu = () => {
    mobileOverlay?.classList.add('open');
    mobileToggle?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeMobileMenu = () => {
    mobileOverlay?.classList.remove('open');
    mobileToggle?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  mobileToggle?.addEventListener('click', openMobileMenu);
  mobileClose?.addEventListener('click', closeMobileMenu);

  mobileOverlay?.addEventListener('click', (e) => {
    if (e.target === mobileOverlay) closeMobileMenu();
  });

  /* --------------------------------------------------------------------------
     7. Quick Command Palette (Ctrl+K / ⌘K)
     -------------------------------------------------------------------------- */
  const openCommandPalette = () => {
    if (!commandPaletteModal) return;
    commandPaletteModal.classList.add('open');
    commandPaletteModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (cmdSearchInput) {
      cmdSearchInput.value = '';
      filterCmdItems('');
      cmdSearchInput.focus();
    }
  };

  const closeCommandPalette = () => {
    if (!commandPaletteModal) return;
    commandPaletteModal.classList.remove('open');
    commandPaletteModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  btnOpenCommandPalette?.addEventListener('click', openCommandPalette);

  commandPaletteModal?.addEventListener('click', (e) => {
    if (e.target === commandPaletteModal) {
      closeCommandPalette();
    }
  });

  // Global Keyboard Shortcuts (Cmd+K / Ctrl+K & ESC)
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (commandPaletteModal?.classList.contains('open')) {
        closeCommandPalette();
      } else {
        openCommandPalette();
      }
    } else if (e.key === 'Escape') {
      if (commandPaletteModal?.classList.contains('open')) {
        closeCommandPalette();
      }
      if (mobileOverlay?.classList.contains('open')) {
        closeMobileMenu();
      }
    }
  });

  // Command Palette Live Filter & Keyboard Arrow Navigation
  const filterCmdItems = (query) => {
    const q = query.toLowerCase().trim();
    let firstMatch = null;

    cmdItems.forEach(item => {
      const title = item.querySelector('.cmd-item-title')?.textContent.toLowerCase() || '';
      const sub = item.querySelector('.cmd-item-sub')?.textContent.toLowerCase() || '';
      const badge = item.querySelector('.cmd-item-badge')?.textContent.toLowerCase() || '';

      if (!q || title.includes(q) || sub.includes(q) || badge.includes(q)) {
        item.style.display = 'flex';
        if (!firstMatch) firstMatch = item;
      } else {
        item.style.display = 'none';
        item.classList.remove('active');
      }
    });

    cmdItems.forEach(item => item.classList.remove('active'));
    if (firstMatch) firstMatch.classList.add('active');
  };

  cmdSearchInput?.addEventListener('input', (e) => {
    filterCmdItems(e.target.value);
  });

  cmdSearchInput?.addEventListener('keydown', (e) => {
    const visibleItems = Array.from(cmdItems).filter(item => item.style.display !== 'none');
    if (!visibleItems.length) return;

    let currentIndex = visibleItems.findIndex(item => item.classList.contains('active'));

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (currentIndex + 1) % visibleItems.length;
      visibleItems.forEach(i => i.classList.remove('active'));
      visibleItems[nextIndex].classList.add('active');
      visibleItems[nextIndex].scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
      visibleItems.forEach(i => i.classList.remove('active'));
      visibleItems[prevIndex].classList.add('active');
      visibleItems[prevIndex].scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const activeItem = visibleItems[currentIndex] || visibleItems[0];
      if (activeItem) executeCmdItem(activeItem);
    }
  });

  const executeCmdItem = (item) => {
    const action = item.getAttribute('data-action');
    const target = item.getAttribute('data-target');

    if (action === 'navigate' && target) {
      smoothScrollToTarget(target);
    } else if (action === 'toggle-theme') {
      toggleTheme();
      closeCommandPalette();
    } else if (action === 'copy-email') {
      copyEmailToClipboard();
      closeCommandPalette();
    } else if (action === 'playstore') {
      window.open('https://play.google.com/store/apps/details?id=com.appfinity.gamefinity', '_blank', 'noopener,noreferrer');
      closeCommandPalette();
    } else if (action === 'trigger-blast') {
      smoothScrollToTarget('#work');
      setTimeout(triggerLineClearAnimation, 500);
      closeCommandPalette();
    } else if (action === 'reset-game') {
      smoothScrollToTarget('#work');
      setTimeout(resetGameBoard, 450);
      closeCommandPalette();
    } else if (action === 'toggle-audio') {
      toggleAudioFX();
      closeCommandPalette();
    }
  };

  cmdItems.forEach(item => {
    item.addEventListener('click', () => executeCmdItem(item));
  });

  /* --------------------------------------------------------------------------
     8. Realtime Flagship Android Device Clock
     -------------------------------------------------------------------------- */
  const updateDeviceClock = () => {
    if (!phoneClockDisplay) return;
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    phoneClockDisplay.textContent = hours + ':' + minutes;
  };

  updateDeviceClock();
  setInterval(updateDeviceClock, 1000);

  /* --------------------------------------------------------------------------
     9. Hero Phone Screen Mode Switcher (Telemetry vs Compose UI vs Data Flow)
     -------------------------------------------------------------------------- */
  phoneModeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      phoneModeTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const mode = tab.getAttribute('data-phone-mode');
      const vitalsCard = heroTelemetryCard;
      const specGrid = document.querySelector('.app-spec-grid');

      if (mode === 'vitals') {
        if (vitalsCard) vitalsCard.style.display = 'block';
        if (specGrid) specGrid.style.display = 'grid';
        if (phoneComposeDemo) phoneComposeDemo.style.display = 'none';
        if (phoneArchFlow) phoneArchFlow.style.display = 'none';
      } else if (mode === 'compose') {
        if (vitalsCard) vitalsCard.style.display = 'none';
        if (specGrid) specGrid.style.display = 'none';
        if (phoneComposeDemo) {
          phoneComposeDemo.style.display = 'block';
          phoneComposeDemo.classList.add('detail-fade-in');
        }
        if (phoneArchFlow) phoneArchFlow.style.display = 'none';
      } else if (mode === 'arch') {
        if (vitalsCard) vitalsCard.style.display = 'none';
        if (specGrid) specGrid.style.display = 'none';
        if (phoneComposeDemo) phoneComposeDemo.style.display = 'none';
        if (phoneArchFlow) {
          phoneArchFlow.style.display = 'block';
          phoneArchFlow.classList.add('detail-fade-in');
        }
      }
    });
  });

  // Compose Slider Interactive Listener with Live Recomposition Ticker
  let recompCount = 0;
  composeSlider?.addEventListener('input', (e) => {
    const val = e.target.value;
    if (composeSliderVal) composeSliderVal.textContent = val + ' Hz';
    recompCount += Math.floor(Math.random() * 3) + 1;
    if (recompTicker) {
      recompTicker.textContent = `Render: ${val} FPS (${recompCount} recomps)`;
      recompTicker.style.color = val > 90 ? '#34D399' : '#FBBF24';
    }
  });

  const composeSwitchDemo = document.getElementById('composeSwitchDemo');
  composeSwitchDemo?.addEventListener('change', (e) => {
    playTapSound();
    if (recompTicker) {
      recompTicker.textContent = e.target.checked ? 'Coroutines: Flow Active' : 'Coroutines: Suspended';
    }
  });

  /* --------------------------------------------------------------------------
     10. Hero Telemetry Card Micro-Interaction
     -------------------------------------------------------------------------- */
  if (heroTelemetryCard) {
    const frameTimes = ['4.8', '5.2', '4.5', '5.8', '4.2', '6.0'];
    let frameIndex = 0;

    heroTelemetryCard.addEventListener('click', () => {
      frameIndex = (frameIndex + 1) % frameTimes.length;
      if (heroFpsVal) {
        heroFpsVal.innerHTML = frameTimes[frameIndex] + '<span class="app-metrics-unit">ms</span>';
      }

      heroTelemetryCard.classList.add('pulsing');
      playTapSound();
      setTimeout(() => heroTelemetryCard.classList.remove('pulsing'), 300);

      if (heroChartBars) {
        const bars = heroChartBars.querySelectorAll('.bar');
        bars.forEach((bar, idx) => {
          const randomHeight = Math.floor(Math.random() * 55) + 35;
          bar.style.height = randomHeight + '%';
          if (idx === bars.length - 1) {
            bar.classList.add('active');
          } else {
            bar.classList.remove('active');
          }
        });
      }
    });
  }

  /* --------------------------------------------------------------------------
     11. Interactive 7-Step Delivery System (#about)
     -------------------------------------------------------------------------- */
  const deliveryData = {
    '1': {
      milestone: 'ACTIVE MILESTONE: IDEA',
      text: 'Comprehensive requirements discovery, technical feasibility evaluation, multi-module Gradle boundary definition, and Android SDK target compatibility matrix.'
    },
    '2': {
      milestone: 'ACTIVE MILESTONE: PLAN',
      text: 'Clean Architecture blueprint, Kotlin Coroutines StateFlow modeling, Room DB schema design, REST/gRPC contracts, and offline-first synchronization strategy.'
    },
    '3': {
      milestone: 'ACTIVE MILESTONE: DESIGN',
      text: 'Material Design 3 system, dynamic Monet theming, ergonomic touch targets, micro-interaction specifications, and interactive 120 FPS Figma flows.'
    },
    '4': {
      milestone: 'ACTIVE MILESTONE: DEVELOP',
      text: 'Clean Kotlin code with MVI architecture, declarative Jetpack Compose UI, Room DB local caching, Coroutines pipelines, and weekly demo APK builds.'
    },
    '5': {
      milestone: 'ACTIVE MILESTONE: TEST',
      text: 'Robolectric unit test suites, Compose UI automated testing, memory leak profiling via LeakCanary, and physical testing across a matrix of diverse Android chipsets.'
    },
    '6': {
      milestone: 'ACTIVE MILESTONE: LAUNCH',
      text: 'Google Play Console production signing, Play App Bundles (.aab) with dynamic feature delivery, store listing A/B optimization, and staged percentage rollout.'
    },
    '7': {
      milestone: 'ACTIVE MILESTONE: IMPROVE',
      text: 'Continuous Android Vitals telemetry monitoring, crash-free user rate tracking (>99.9%), ANR diagnostics, and bi-weekly release cycles.'
    }
  };

  deliveryNodes.forEach(node => {
    const activateDeliveryStep = () => {
      deliveryNodes.forEach(n => n.classList.remove('active'));
      node.classList.add('active');

      const step = node.getAttribute('data-delivery-step');
      const data = deliveryData[step];

      playTapSound();

      if (deliveryMilestoneBox && data) {
        deliveryMilestoneBox.classList.remove('detail-fade-in');
        void deliveryMilestoneBox.offsetWidth;
        deliveryMilestoneBox.innerHTML = `
          <div class="milestone-pill">${data.milestone}</div>
          <div class="milestone-text">${data.text}</div>
        `;
        deliveryMilestoneBox.classList.add('detail-fade-in');
      }
    };

    node.addEventListener('click', activateDeliveryStep);
    node.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        activateDeliveryStep();
      }
    });
  });

  /* --------------------------------------------------------------------------
     12. Clean Architecture Layer & Kotlin IDE Spec Viewer (#engineering)
     -------------------------------------------------------------------------- */
  const archData = {
    'ui': {
      tag: 'LAYER SPECIFICATION: UI LAYER',
      tech: 'Jetpack Compose + Material Design 3',
      body: 'Declarative UI architecture with immutable state inputs, unidirectional event hoisting, sub-millisecond gesture tracking, and native 120 FPS rendering consistency without WebView overhead.'
    },
    'state': {
      tag: 'LAYER SPECIFICATION: STATE LAYER',
      tech: 'ViewModel + Kotlin StateFlow (MVI Pattern)',
      body: 'Single Source of Truth state containers using Kotlin Coroutines StateFlow. Handles configuration changes, background process death recovery, and asynchronous UI events with complete lifecycle awareness.'
    },
    'domain': {
      tag: 'LAYER SPECIFICATION: DOMAIN LAYER',
      tech: 'Pure Kotlin Business UseCases',
      body: 'Zero-dependency pure Kotlin business logic executing isolated UseCases. Enforces enterprise business rules, input sanitization, data transformations, and multiplatform-ready portability.'
    },
    'data': {
      tag: 'LAYER SPECIFICATION: DATA LAYER',
      tech: 'Repository Pattern & Offline Caching',
      body: 'Single source of truth orchestration mediating between Room SQLite local database and remote APIs with network-bound resource caching and background sync.'
    },
    'sources': {
      tag: 'LAYER SPECIFICATION: DATA SOURCES',
      tech: 'Room SQLite DB + Retrofit HTTP Clients',
      body: 'Low-level I/O integrations including type-safe Retrofit HTTP clients, Firebase Cloud Messaging, Room SQLite database migrations, and DataStore preferences.'
    }
  };

  const kotlinFilesData = {
    'ui': {
      file: 'GameScreen.kt',
      badge: 'Jetpack Compose UI',
      lines: 17,
      raw: `// UI Layer — Jetpack Compose & Material Design 3
@Composable
fun GameScreen(
    viewModel: GameViewModel = hiltViewModel()
) {
    val uiState by viewModel.uiState.collectAsStateWithLifecycle()

    Scaffold(
        topBar = { GameTopBar(score = uiState.score, combo = uiState.combo) },
        containerColor = MaterialTheme.colorScheme.surface
    ) { padding ->
        GameBoardGrid(
            grid = uiState.grid,
            modifier = Modifier.padding(padding),
            onCellClick = { row, col -> viewModel.onCellTapped(row, col) }
        )
    }
}`,
      html: `<span class="kt-cmt">// UI Layer — Jetpack Compose &amp; Material Design 3</span>
<span class="kt-ann">@Composable</span>
<span class="kt-kw">fun</span> <span class="kt-fn">GameScreen</span>(
    viewModel: <span class="kt-type">GameViewModel</span> = <span class="kt-fn">hiltViewModel</span>()
) {
    <span class="kt-kw">val</span> uiState <span class="kt-kw">by</span> viewModel.uiState.<span class="kt-fn">collectAsStateWithLifecycle</span>()

    <span class="kt-fn">Scaffold</span>(
        topBar = { <span class="kt-fn">GameTopBar</span>(score = uiState.score, combo = uiState.combo) },
        containerColor = MaterialTheme.colorScheme.surface
    ) { padding ->
        <span class="kt-fn">GameBoardGrid</span>(
            grid = uiState.grid,
            modifier = Modifier.<span class="kt-fn">padding</span>(padding),
            onCellClick = { row, col -> viewModel.<span class="kt-fn">onCellTapped</span>(row, col) }
        )
    }
}`
    },
    'state': {
      file: 'GameViewModel.kt',
      badge: 'MVI StateFlow',
      lines: 15,
      raw: `// State Layer — MVI ViewModel & StateFlow
@HiltViewModel
class GameViewModel @Inject constructor(
    private val clearLinesUseCase: ClearLinesUseCase
) : ViewModel() {

    private val _uiState = MutableStateFlow(GameState())
    val uiState: StateFlow<GameState> = _uiState.asStateFlow()

    fun onCellTapped(row: Int, col: Int) = viewModelScope.launch {
        val updatedGrid = _uiState.value.grid.placeTile(row, col)
        val result = clearLinesUseCase(updatedGrid)
        _uiState.update { it.copy(grid = result.grid, score = it.score + result.points) }
    }
}`,
      html: `<span class="kt-cmt">// State Layer — MVI ViewModel &amp; StateFlow</span>
<span class="kt-ann">@HiltViewModel</span>
<span class="kt-kw">class</span> <span class="kt-type">GameViewModel</span> <span class="kt-ann">@Inject</span> <span class="kt-kw">constructor</span>(
    <span class="kt-kw">private val</span> clearLinesUseCase: <span class="kt-type">ClearLinesUseCase</span>
) : <span class="kt-type">ViewModel</span>() {

    <span class="kt-kw">private val</span> _uiState = <span class="kt-type">MutableStateFlow</span>(<span class="kt-type">GameState</span>())
    <span class="kt-kw">val</span> uiState: <span class="kt-type">StateFlow</span>&lt;<span class="kt-type">GameState</span>&gt; = _uiState.<span class="kt-fn">asStateFlow</span>()

    <span class="kt-kw">fun</span> <span class="kt-fn">onCellTapped</span>(row: <span class="kt-type">Int</span>, col: <span class="kt-type">Int</span>) = viewModelScope.<span class="kt-fn">launch</span> {
        <span class="kt-kw">val</span> updatedGrid = _uiState.value.grid.<span class="kt-fn">placeTile</span>(row, col)
        <span class="kt-kw">val</span> result = <span class="kt-fn">clearLinesUseCase</span>(updatedGrid)
        _uiState.<span class="kt-fn">update</span> { it.<span class="kt-fn">copy</span>(grid = result.grid, score = it.score + result.points) }
    }
}`
    },
    'domain': {
      file: 'ClearLinesUseCase.kt',
      badge: 'Pure Kotlin UseCase',
      lines: 14,
      raw: `// Domain Layer — Pure Kotlin Business Logic
class ClearLinesUseCase @Inject constructor(
    private val gameRepository: GameRepository,
    @IoDispatcher private val dispatcher: CoroutineDispatcher
) {
    suspend operator fun invoke(grid: GridMatrix): ClearResult = withContext(dispatcher) {
        val lines = grid.findCompletedLines()
        if (lines.isEmpty()) return@withContext ClearResult(grid, 0)
        val newGrid = grid.clearLines(lines)
        val points = calculateCombo(lines.size)
        gameRepository.recordScore(points)
        ClearResult(newGrid, points)
    }
}`,
      html: `<span class="kt-cmt">// Domain Layer — Pure Kotlin Business Logic</span>
<span class="kt-kw">class</span> <span class="kt-type">ClearLinesUseCase</span> <span class="kt-ann">@Inject</span> <span class="kt-kw">constructor</span>(
    <span class="kt-kw">private val</span> gameRepository: <span class="kt-type">GameRepository</span>,
    <span class="kt-ann">@IoDispatcher</span> <span class="kt-kw">private val</span> dispatcher: <span class="kt-type">CoroutineDispatcher</span>
) {
    <span class="kt-kw">suspend operator fun</span> <span class="kt-fn">invoke</span>(grid: <span class="kt-type">GridMatrix</span>): <span class="kt-type">ClearResult</span> = <span class="kt-fn">withContext</span>(dispatcher) {
        <span class="kt-kw">val</span> lines = grid.<span class="kt-fn">findCompletedLines</span>()
        <span class="kt-kw">if</span> (lines.<span class="kt-fn">isEmpty</span>()) <span class="kt-kw">return@withContext</span> <span class="kt-type">ClearResult</span>(grid, <span class="kt-num">0</span>)
        <span class="kt-kw">val</span> newGrid = grid.<span class="kt-fn">clearLines</span>(lines)
        <span class="kt-kw">val</span> points = <span class="kt-fn">calculateCombo</span>(lines.size)
        gameRepository.<span class="kt-fn">recordScore</span>(points)
        <span class="kt-type">ClearResult</span>(newGrid, points)
    }
}`
    },
    'data': {
      file: 'GameRepositoryImpl.kt',
      badge: 'Room DB Offline Cache',
      lines: 13,
      raw: `// Data Layer — Repository Pattern & Local Cache
class GameRepositoryImpl @Inject constructor(
    private val gameDao: GameDao,
    private val api: GamefinityApiService
) : GameRepository {

    override fun observeHighScore(): Flow<Int> = gameDao.getHighScoreFlow()

    override suspend fun recordScore(points: Int) {
        gameDao.insertScore(ScoreEntity(points = points, timestamp = System.currentTimeMillis()))
        runCatching { api.syncLeaderboard(points) } // Offline-first sync
    }
}`,
      html: `<span class="kt-cmt">// Data Layer — Repository Pattern &amp; Local Cache</span>
<span class="kt-kw">class</span> <span class="kt-type">GameRepositoryImpl</span> <span class="kt-ann">@Inject</span> <span class="kt-kw">constructor</span>(
    <span class="kt-kw">private val</span> gameDao: <span class="kt-type">GameDao</span>,
    <span class="kt-kw">private val</span> api: <span class="kt-type">GamefinityApiService</span>
) : <span class="kt-type">GameRepository</span> {

    <span class="kt-kw">override fun</span> <span class="kt-fn">observeHighScore</span>(): <span class="kt-type">Flow</span>&lt;<span class="kt-type">Int</span>&gt; = gameDao.<span class="kt-fn">getHighScoreFlow</span>()

    <span class="kt-kw">override suspend fun</span> <span class="kt-fn">recordScore</span>(points: <span class="kt-type">Int</span>) {
        gameDao.<span class="kt-fn">insertScore</span>(<span class="kt-type">ScoreEntity</span>(points = points, timestamp = System.<span class="kt-fn">currentTimeMillis</span>()))
        <span class="kt-fn">runCatching</span> { api.<span class="kt-fn">syncLeaderboard</span>(points) } <span class="kt-cmt">// Offline-first sync</span>
    }
}`
    },
    'gradle': {
      file: 'build.gradle.kts',
      badge: 'Modular KTS Build',
      lines: 15,
      raw: `// Multi-Module Gradle Kotlin DSL Build Configuration
plugins {
    alias(libs.plugins.android.application)
    alias(libs.plugins.kotlin.android)
    alias(libs.plugins.kotlin.compose)
    alias(libs.plugins.hilt.android)
}

android {
    namespace = "com.appfinity.gamefinity"
    compileSdk = 35

    defaultConfig {
        minSdk = 26
        targetSdk = 35
        versionCode = 24
        versionName = "2.4.0"
    }
}`,
      html: `<span class="kt-cmt">// Multi-Module Gradle Kotlin DSL Build Configuration</span>
plugins {
    <span class="kt-fn">alias</span>(libs.plugins.android.application)
    <span class="kt-fn">alias</span>(libs.plugins.kotlin.android)
    <span class="kt-fn">alias</span>(libs.plugins.kotlin.compose)
    <span class="kt-fn">alias</span>(libs.plugins.hilt.android)
}

android {
    namespace = <span class="kt-str">"com.appfinity.gamefinity"</span>
    compileSdk = <span class="kt-num">35</span>

    defaultConfig {
        minSdk = <span class="kt-num">26</span>
        targetSdk = <span class="kt-num">35</span>
        versionCode = <span class="kt-num">24</span>
        versionName = <span class="kt-str">"2.4.0"</span>
    }
}`
    }
  };

  let currentKotlinKey = 'ui';

  const setKotlinFile = (key) => {
    currentKotlinKey = key;
    const item = kotlinFilesData[key];
    if (!item) return;

    kotlinTabs.forEach(tab => {
      if (tab.getAttribute('data-tab') === key) tab.classList.add('active');
      else tab.classList.remove('active');
    });

    if (kotlinFilename) kotlinFilename.textContent = item.file;
    if (kotlinLayerBadge) kotlinLayerBadge.textContent = item.badge;
    if (kotlinCodeDisplay) kotlinCodeDisplay.innerHTML = item.html;

    if (kotlinLineNumbers) {
      let linesStr = '';
      for (let i = 1; i <= item.lines; i++) {
        linesStr += i + (i < item.lines ? '<br>' : '');
      }
      kotlinLineNumbers.innerHTML = linesStr;
    }
  };

  kotlinTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const key = tab.getAttribute('data-tab');
      playTapSound();
      setKotlinFile(key);
    });
  });

  archLayerItems.forEach(item => {
    const activateArchLayer = () => {
      archLayerItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      const layer = item.getAttribute('data-arch-layer');
      const data = archData[layer];

      playTapSound();

      if (archDetailPanel && data) {
        archDetailPanel.classList.remove('detail-fade-in');
        void archDetailPanel.offsetWidth;
        archDetailPanel.innerHTML = `
          <div class="arch-detail-header">
            <span class="arch-detail-tag">${data.tag}</span>
            <span class="arch-detail-tech">${data.tech}</span>
          </div>
          <p class="arch-detail-body">${data.body}</p>
        `;
        archDetailPanel.classList.add('detail-fade-in');
      }

      // Sync IDE file if mapping exists
      const fileKey = layer === 'sources' ? 'data' : layer;
      if (kotlinFilesData[fileKey]) {
        setKotlinFile(fileKey);
      }
    };

    item.addEventListener('click', activateArchLayer);
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        activateArchLayer();
      }
    });
  });

  // Verify Specs Button Simulation
  btnVerifySpecs?.addEventListener('click', () => {
    playTapSound();
    btnVerifySpecs.disabled = true;
    const origHtml = btnVerifySpecs.innerHTML;
    btnVerifySpecs.innerHTML = '<span>⏳ Compiling K2...</span>';

    setTimeout(() => {
      playBlastSound();
      btnVerifySpecs.innerHTML = '<span>✓ 42/42 Tests Passed</span>';
      showToastSnackbar('Robolectric & Android Vitals audit passed: 100% stable');
      setTimeout(() => {
        btnVerifySpecs.innerHTML = origHtml;
        btnVerifySpecs.disabled = false;
      }, 2500);
    }, 600);
  });

  // Copy Kotlin Snippet Button (Clean Plain Text)
  btnCopyKotlinCode?.addEventListener('click', async () => {
    const activeItem = kotlinFilesData[currentKotlinKey];
    const code = activeItem?.raw || '';
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      playCopySound();
      if (copyCodeLabel) {
        const orig = copyCodeLabel.textContent;
        copyCodeLabel.textContent = 'Copied Snippet! ✓';
        setTimeout(() => { copyCodeLabel.textContent = orig; }, 2000);
      }
      showToastSnackbar(`Copied ${activeItem.file} to clipboard`);
    } catch (e) {
      console.warn('Clipboard copy error:', e);
    }
  });

  /* --------------------------------------------------------------------------
     13. Interactive 7-Step Process Timeline (#process)
     -------------------------------------------------------------------------- */
  const processData = {
    '1': {
      badge: 'PHASE 01 DELIVERABLES',
      title: 'Discover & Technical Feasibility',
      desc: 'We define clear project scope, evaluate native Android hardware APIs, outline Gradle module boundaries, and establish target SDK compatibility matrices before writing production code.',
      tags: ['✓ Scope Document', '✓ SDK Target Matrix', '✓ Feasibility Audit']
    },
    '2': {
      badge: 'PHASE 02 DELIVERABLES',
      title: 'Plan & System Architecture',
      desc: 'Defining Clean Architecture module boundaries, Kotlin Coroutines dispatchers, Room DB schema migrations, and RESTful API contract specifications.',
      tags: ['✓ Architecture Blueprint', '✓ Database Schema', '✓ API Contracts']
    },
    '3': {
      badge: 'PHASE 03 DELIVERABLES',
      title: 'Design & Material 3 UI System',
      desc: 'Designing atomic UI components adhering strictly to Google Material Design 3 guidelines, dynamic color theming, and responsive layout guidelines for phones and tablets.',
      tags: ['✓ Material 3 Tokens', '✓ Interactive Prototypes', '✓ Accessibility Spec']
    },
    '4': {
      badge: 'PHASE 04 DELIVERABLES',
      title: 'Develop & Native Kotlin Engineering',
      desc: 'Writing modular Kotlin 2.0 code with Jetpack Compose screens, MVI unidirectional data flow, dependency injection (Hilt), and reactive Coroutines.',
      tags: ['✓ Clean Kotlin Code', '✓ Jetpack Compose UI', '✓ Weekly Demo Builds']
    },
    '5': {
      badge: 'PHASE 05 DELIVERABLES',
      title: 'Test & Physical Device Verification',
      desc: 'Automated unit tests, Compose UI testing, memory leak profiling with LeakCanary, and physical testing across a matrix of diverse Android chipsets.',
      tags: ['✓ Automated Test Suites', '✓ Zero Memory Leaks', '✓ Device Matrix Pass']
    },
    '6': {
      badge: 'PHASE 06 DELIVERABLES',
      title: 'Launch & Google Play Deployment',
      desc: 'Generating signed Android App Bundles (.aab), configuring Google Play Store assets, setting up Play Console tracks, and executing staged percentage rollouts.',
      tags: ['✓ Play Store Production', '✓ Signed App Bundle', '✓ Staged Rollout']
    },
    '7': {
      badge: 'PHASE 07 DELIVERABLES',
      title: 'Improve & Android Vitals Optimization',
      desc: 'Monitoring Android Vitals for ANR rates, crash frequency, warm startup times, and releasing continuous performance and feature updates.',
      tags: ['✓ Android Vitals Monitoring', '✓ Crash-Free >99.9%', '✓ Sprint Enhancements']
    }
  };

  timelineCards.forEach(card => {
    const activateProcessStep = () => {
      timelineCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      const step = card.getAttribute('data-step');
      const data = processData[step];

      playTapSound();

      if (processDetailCard && data) {
        processDetailCard.classList.remove('detail-fade-in');
        void processDetailCard.offsetWidth;
        const tagsHtml = data.tags.map(t => `<span class="p-tag">${t}</span>`).join(' ');
        processDetailCard.innerHTML = `
          <div class="p-detail-badge">${data.badge}</div>
          <h3 class="p-detail-title">${data.title}</h3>
          <p class="p-detail-desc">${data.desc}</p>
          <div class="p-detail-tags">${tagsHtml}</div>
        `;
        processDetailCard.classList.add('detail-fade-in');
      }
    };

    card.addEventListener('click', activateProcessStep);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        activateProcessStep();
      }
    });
  });

  /* --------------------------------------------------------------------------
     14. Featured Project Screen Switcher (Gamefinity Universe)
     -------------------------------------------------------------------------- */
  screenTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetScreen = tab.getAttribute('data-screen');

      screenTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      playTapSound();

      gamePhoneScreens.forEach(screen => {
        if (screen.getAttribute('data-screen-content') === targetScreen) {
          screen.style.display = 'flex';
          screen.classList.add('detail-fade-in');
        } else {
          screen.style.display = 'none';
        }
      });
    });
  });

  /* --------------------------------------------------------------------------
     15. Interactive Game Engine with Synthesized Sound & Floating Particle Bursts
     -------------------------------------------------------------------------- */
  let currentScore = 24850;
  let currentCombo = 4;

  const spawnFloatingScore = (text, x, y, isCombo = false) => {
    if (!gameBoardGrid) return;
    const particle = document.createElement('div');
    particle.className = isCombo ? 'score-float-particle combo' : 'score-float-particle';
    particle.textContent = text;
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';

    gameBoardGrid.appendChild(particle);
    setTimeout(() => { particle.remove(); }, 850);
  };

  // --- Playable Block Puzzle Engine ---
  let selectedShape = null; // 'square' | 'v-bar' | 'h-bar'

  const SHAPE_DEFINITIONS = {
    'square': {
      offsets: [[0, 0], [0, 1], [1, 0], [1, 1]],
      colorClass: 'filled-cyan',
      name: '2x2 Square'
    },
    'v-bar': {
      offsets: [[0, 0], [1, 0], [2, 0]],
      colorClass: 'filled-orange',
      name: '1x3 Vertical Bar'
    },
    'h-bar': {
      offsets: [[0, 0], [0, 1], [0, 2]],
      colorClass: 'filled-purple',
      name: '3x1 Horizontal Bar'
    }
  };

  const isCellFilled = (cell) => {
    return cell.classList.contains('filled-green') ||
           cell.classList.contains('filled-cyan') ||
           cell.classList.contains('filled-orange') ||
           cell.classList.contains('filled-purple');
  };

  const clearGhostPreviews = () => {
    gameCells.forEach(c => {
      c.classList.remove('ghost-valid', 'ghost-invalid');
    });
  };

  // Dock piece selection
  gamePieces.forEach(piece => {
    piece.addEventListener('click', () => {
      const shapeType = piece.getAttribute('data-shape');
      if (selectedShape === shapeType) {
        selectedShape = null;
        piece.classList.remove('selected');
        clearGhostPreviews();
      } else {
        gamePieces.forEach(p => p.classList.remove('selected'));
        piece.classList.add('selected');
        selectedShape = shapeType;
        playTapSound();
      }
    });
  });

  const getShapeCells = (centerIndex, shapeType) => {
    if (!SHAPE_DEFINITIONS[shapeType]) return [];
    const r = Math.floor(centerIndex / 8);
    const c = centerIndex % 8;
    const offsets = SHAPE_DEFINITIONS[shapeType].offsets;
    const targetCells = [];

    for (const [dr, dc] of offsets) {
      const tr = r + dr;
      const tc = c + dc;
      if (tr < 0 || tr >= 8 || tc < 0 || tc >= 8) {
        return null; // Out of bounds
      }
      const targetIndex = tr * 8 + tc;
      const targetCell = gameCells[targetIndex];
      if (!targetCell || isCellFilled(targetCell)) {
        return null; // Already occupied
      }
      targetCells.push(targetCell);
    }
    return targetCells;
  };

  // Hover ghost placement preview
  gameCells.forEach((cell, index) => {
    cell.addEventListener('mouseenter', () => {
      if (!selectedShape) return;
      clearGhostPreviews();
      const cells = getShapeCells(index, selectedShape);
      if (cells) {
        cells.forEach(c => c.classList.add('ghost-valid'));
      } else {
        cell.classList.add('ghost-invalid');
      }
    });

    cell.addEventListener('mouseleave', clearGhostPreviews);

    cell.addEventListener('click', () => {
      if (selectedShape) {
        const cells = getShapeCells(index, selectedShape);
        if (cells) {
          const colorClass = SHAPE_DEFINITIONS[selectedShape].colorClass;
          cells.forEach(c => {
            c.className = `g-cell ${colorClass}`;
            c.style.transform = 'scale(1.2)';
            setTimeout(() => { c.style.transform = ''; }, 200);
          });

          currentScore += 350;
          if (liveScoreVal) liveScoreVal.textContent = currentScore.toLocaleString();
          playTapSound();

          // Reset piece selection
          selectedShape = null;
          gamePieces.forEach(p => p.classList.remove('selected'));
          clearGhostPreviews();

          // Check for line clears
          checkAndClearLines();
        } else {
          // Shake cell on invalid placement
          cell.style.animation = 'inputShake 0.25s ease';
          setTimeout(() => { cell.style.animation = ''; }, 260);
        }
      } else {
        // Direct tap on empty cell
        if (!isCellFilled(cell)) {
          cell.classList.add('filled-green');
          cell.style.transform = 'scale(1.25)';
          currentScore += 150;
          if (liveScoreVal) liveScoreVal.textContent = currentScore.toLocaleString();
          playTapSound();

          if (gameBoardGrid) {
            const gridRect = gameBoardGrid.getBoundingClientRect();
            const cellRect = cell.getBoundingClientRect();
            const posX = (cellRect.left - gridRect.left) + cellRect.width / 2;
            const posY = (cellRect.top - gridRect.top) + cellRect.height / 2;
            spawnFloatingScore('+150', posX, posY, false);
          }

          setTimeout(() => { cell.style.transform = ''; }, 220);
          checkAndClearLines();
        }
      }
    });
  });

  // Check and clear completed lines (rows & cols)
  const checkAndClearLines = () => {
    const fullRows = [];
    const fullCols = [];

    // Check rows
    for (let r = 0; r < 8; r++) {
      let isFull = true;
      for (let c = 0; c < 8; c++) {
        const cell = gameCells[r * 8 + c];
        if (!isCellFilled(cell)) {
          isFull = false;
          break;
        }
      }
      if (isFull) fullRows.push(r);
    }

    // Check columns
    for (let c = 0; c < 8; c++) {
      let isFull = true;
      for (let r = 0; r < 8; r++) {
        const cell = gameCells[r * 8 + c];
        if (!isCellFilled(cell)) {
          isFull = false;
          break;
        }
      }
      if (isFull) fullCols.push(c);
    }

    const totalLines = fullRows.length + fullCols.length;
    if (totalLines > 0) {
      currentCombo += totalLines;
      const points = totalLines * 1200 * currentCombo;
      currentScore += points;

      if (liveScoreVal) liveScoreVal.textContent = currentScore.toLocaleString();
      if (liveComboVal) liveComboVal.textContent = 'x' + currentCombo;

      playBlastSound();

      if (gamePhoneDevice) {
        gamePhoneDevice.classList.add('shake-screen');
        setTimeout(() => gamePhoneDevice.classList.remove('shake-screen'), 350);
      }

      const cellsToClear = new Set();
      fullRows.forEach(r => {
        for (let c = 0; c < 8; c++) cellsToClear.add(gameCells[r * 8 + c]);
      });
      fullCols.forEach(c => {
        for (let r = 0; r < 8; r++) cellsToClear.add(gameCells[r * 8 + c]);
      });

      cellsToClear.forEach(c => {
        c.classList.add('blast-pulse');
      });

      if (gameBoardGrid) {
        const rect = gameBoardGrid.getBoundingClientRect();
        spawnFloatingScore(`+${points.toLocaleString()} (${totalLines} LINES!)`, rect.width / 2, rect.height / 2, true);
      }

      setTimeout(() => {
        cellsToClear.forEach(c => {
          c.className = 'g-cell';
          c.style.transform = '';
          c.style.filter = '';
        });
      }, 350);
    }
  };

  const triggerLineClearAnimation = () => {
    // Fill row 6 then trigger clear
    for (let c = 0; c < 8; c++) {
      gameCells[5 * 8 + c].className = 'g-cell filled-green';
    }
    checkAndClearLines();
  };

  btnTriggerBlast?.addEventListener('click', triggerLineClearAnimation);

  // Shuffle Pieces Button
  btnShuffleDock?.addEventListener('click', () => {
    playTapSound();
    selectedShape = null;
    clearGhostPreviews();
    gamePieces.forEach(p => {
      p.classList.remove('selected');
      p.style.transform = 'scale(0.85)';
      setTimeout(() => { p.style.transform = ''; }, 200);
    });
    showToastSnackbar('Dock shapes refreshed');
  });

  // Reset Board Grid Button
  const initialGridPattern = [
    [1, 1], [1, 2], [1, 5], [1, 6],
    [2, 1], [2, 2], [2, 6],
    [3, 0], [3, 1],
    [4, 0], [4, 1], [4, 3], [4, 4], [4, 5],
    [5, 4], [5, 5],
    [6, 0], [6, 1], [6, 2], [6, 3], [6, 4], [6, 5], [6, 6], [6, 7],
    [7, 2], [7, 3],
    [8, 1], [8, 2], [8, 3], [8, 6], [8, 7]
  ];

  function resetGameBoard() {
    playTapSound();
    selectedShape = null;
    clearGhostPreviews();
    gameCells.forEach(c => { c.className = 'g-cell'; });

    // Restore initial visual pattern
    const greenIndices = [1, 2, 9, 10, 27, 28, 29, 40, 41, 42, 43, 44, 45, 46, 47];
    const cyanIndices = [5, 6, 14, 57, 58, 59];
    const orangeIndices = [16, 17, 24, 25, 50, 51];
    const purpleIndices = [36, 37, 62, 63];

    greenIndices.forEach(i => gameCells[i] && (gameCells[i].className = 'g-cell filled-green'));
    cyanIndices.forEach(i => gameCells[i] && (gameCells[i].className = 'g-cell filled-cyan'));
    orangeIndices.forEach(i => gameCells[i] && (gameCells[i].className = 'g-cell filled-orange'));
    purpleIndices.forEach(i => gameCells[i] && (gameCells[i].className = 'g-cell filled-purple'));

    currentScore = 24850;
    currentCombo = 4;
    if (liveScoreVal) liveScoreVal.textContent = '24,850';
    if (liveComboVal) liveComboVal.textContent = 'x4';

    showToastSnackbar('Game board reset to initial challenge');
  }

  btnResetBoard?.addEventListener('click', resetGameBoard);

  /* --------------------------------------------------------------------------
     16. Technology Stack Category Filters
     -------------------------------------------------------------------------- */
  techFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-category');

      techFilters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      playTapSound();

      techBadges.forEach(badge => {
        const badgeCat = badge.getAttribute('data-category');
        if (cat === 'all' || badgeCat === cat) {
          badge.classList.remove('dimmed');
        } else {
          badge.classList.add('dimmed');
        }
      });
    });
  });

  /* --------------------------------------------------------------------------
     17. Contact Scope Chips & Dynamic Timeline Estimator
     -------------------------------------------------------------------------- */
  scopeChips.forEach(chip => {
    chip.addEventListener('click', () => {
      scopeChips.forEach(c => c.classList.remove('selected'));
      chip.classList.add('selected');
      
      const scopeVal = chip.getAttribute('data-value');
      const estimateText = chip.getAttribute('data-estimate');

      playTapSound();

      if (projectTypeInput && scopeVal) projectTypeInput.value = scopeVal;
      if (scopeEstimateTag && estimateText) scopeEstimateTag.textContent = estimateText;
    });
  });

  /* --------------------------------------------------------------------------
     18. Contact Form Prompt Chips & Character Counter
     -------------------------------------------------------------------------- */
  promptChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const appendText = chip.getAttribute('data-append');
      if (projectDetails && appendText) {
        if (projectDetails.value.trim().length > 0) {
          projectDetails.value += '\n' + appendText;
        } else {
          projectDetails.value = appendText;
        }
        playTapSound();
        updateCharCount();
        projectDetails.focus();
      }
    });
  });

  const updateCharCount = () => {
    if (!charCounter || !projectDetails) return;
    const len = projectDetails.value.length;
    charCounter.textContent = len + ' / 500';
    if (len > 450) {
      charCounter.style.color = '#EF4444';
    } else {
      charCounter.style.color = '';
    }
  };

  projectDetails?.addEventListener('input', updateCharCount);

  /* --------------------------------------------------------------------------
     19. Direct Email Copy with Toast Snackbar Feedback
     -------------------------------------------------------------------------- */
  const emailToCopy = 'appfinitytechnologies@gmail.com';

  const showToastSnackbar = (message) => {
    let snackbar = document.getElementById('floatingToastSnackbar');
    if (!snackbar) {
      snackbar = document.createElement('div');
      snackbar.id = 'floatingToastSnackbar';
      snackbar.className = 'floating-toast-snackbar';
      snackbar.innerHTML = `
        <div class="floating-toast-icon">✓</div>
        <span class="floating-toast-text"></span>
      `;
      document.body.appendChild(snackbar);
    }

    const textElem = snackbar.querySelector('.floating-toast-text');
    if (textElem) textElem.textContent = message;

    snackbar.classList.add('active');
    setTimeout(() => { snackbar.classList.remove('active'); }, 2600);
  };

  const copyEmailToClipboard = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(emailToCopy);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = emailToCopy;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }

      playCopySound();

      if (copyBtnLabel) {
        const originalLabel = copyBtnLabel.textContent;
        copyBtnLabel.textContent = 'Copied to Clipboard! ✓';
        if (btnCopyEmail) {
          btnCopyEmail.style.borderColor = 'var(--accent-green)';
          btnCopyEmail.style.color = 'var(--accent-green-text)';
        }
        
        showToastSnackbar('Copied to clipboard: ' + emailToCopy);

        setTimeout(() => {
          copyBtnLabel.textContent = originalLabel;
          if (btnCopyEmail) {
            btnCopyEmail.style.borderColor = '';
            btnCopyEmail.style.color = '';
          }
        }, 2400);
      }
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  btnCopyEmail?.addEventListener('click', copyEmailToClipboard);

  /* --------------------------------------------------------------------------
     20. Contact Form Submission (Pure Inline Validation & Feedback)
     -------------------------------------------------------------------------- */
  if (contactForm) {
    const nameInput = document.getElementById('userName');
    const emailInput = document.getElementById('userEmail');
    const detailsInput = document.getElementById('projectDetails');

    const validateEmail = (email) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    [nameInput, emailInput, detailsInput].forEach(field => {
      field?.addEventListener('input', () => {
        field.classList.remove('is-invalid');
      });
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let hasError = false;

      if (nameInput && !nameInput.value.trim()) {
        nameInput.classList.add('is-invalid');
        hasError = true;
      }

      if (emailInput && (!emailInput.value.trim() || !validateEmail(emailInput.value.trim()))) {
        emailInput.classList.add('is-invalid');
        hasError = true;
      }

      if (detailsInput && !detailsInput.value.trim()) {
        detailsInput.classList.add('is-invalid');
        hasError = true;
      }

      if (hasError) {
        const firstError = contactForm.querySelector('.is-invalid');
        firstError?.focus();
        return;
      }

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      if (!submitBtn) return;
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="spinner" style="width:16px;height:16px;animation:spin 0.8s linear infinite;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
        </svg>
        <span>Transmitting Request...</span>
      `;

      setTimeout(() => {
        contactForm.reset();
        updateCharCount();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        
        scopeChips.forEach((c, idx) => {
          if (idx === 0) c.classList.add('selected');
          else c.classList.remove('selected');
        });
        if (projectTypeInput) projectTypeInput.value = 'new-app';
        if (scopeEstimateTag) scopeEstimateTag.textContent = 'Est: ~6–8 Weeks to Play Store';

        playBlastSound();

        if (formSuccessBox) {
          formSuccessBox.classList.add('show');
          formSuccessBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 650);
    });
  }

  /* --------------------------------------------------------------------------
     17. Interactive Project Architecture, Timeline & Cost Estimator
     -------------------------------------------------------------------------- */
  const calculateEstimator = () => {
    // 1. Selected platforms
    let activePlatforms = [];
    let platformWeeksAdd = 0;
    let platformCostAdd = 0;

    estPlatformBtns.forEach(btn => {
      if (btn.classList.contains('active')) {
        const factor = btn.getAttribute('data-factor');
        const title = btn.getAttribute('data-title') || btn.querySelector('.est-opt-label')?.textContent?.trim() || factor;
        activePlatforms.push(title);
        if (factor === 'tablet') {
          platformWeeksAdd += 1.5;
          platformCostAdd += 5000;
        } else if (factor === 'wear') {
          platformWeeksAdd += 2;
          platformCostAdd += 8000;
        }
      }
    });

    // 2. Selected scope
    let selectedScopeBtn = null;
    estScopeBtns.forEach(btn => {
      if (btn.classList.contains('active')) selectedScopeBtn = btn;
    });
    if (!selectedScopeBtn && estScopeBtns.length) {
      selectedScopeBtn = estScopeBtns[0];
      selectedScopeBtn.classList.add('active');
    }

    const scopeType = selectedScopeBtn?.getAttribute('data-scope') || 'greenfield';
    let baseMinWeeks = 6;
    let baseMaxWeeks = 8;
    let baseMinCost = 25000;
    let baseMaxCost = 50000;
    let baseArch = ':core:designsystem, :core:database, :feature:main';

    if (scopeType === 'migration') {
      baseMinWeeks = 3;
      baseMaxWeeks = 5;
      baseMinCost = 15000;
      baseMaxCost = 30000;
      baseArch = ':core:compose-m3, :feature:refactored';
    } else if (scopeType === 'vitals') {
      baseMinWeeks = 2;
      baseMaxWeeks = 3;
      baseMinCost = 10000;
      baseMaxCost = 20000;
      baseArch = ':benchmark, :baseline-profile, R8';
    }

    // 3. Selected capabilities
    let activeCaps = [];
    let capsCostAdd = 0;
    let capModules = [];

    estCapsBtns.forEach(btn => {
      if (btn.classList.contains('active')) {
        const cap = btn.getAttribute('data-cap');
        const title = btn.getAttribute('data-title') || btn.querySelector('.est-opt-label')?.textContent?.trim() || cap;
        activeCaps.push(title);
        if (cap === 'room') {
          capsCostAdd += 3000;
          capModules.push(':core:data-room');
        } else if (cap === 'keystore') {
          capsCostAdd += 4000;
          capModules.push(':core:security-keystore');
        } else if (cap === 'cloud') {
          capsCostAdd += 4000;
          capModules.push(':core:network-fcm');
        }
      }
    });

    const totalMinWeeks = Math.round(baseMinWeeks + platformWeeksAdd);
    const totalMaxWeeks = Math.round(baseMaxWeeks + platformWeeksAdd);
    const totalMinCost = baseMinCost + platformCostAdd + capsCostAdd;
    const totalMaxCost = baseMaxCost + platformCostAdd + capsCostAdd;

    const allArchModules = [baseArch, ...capModules].join(', ');

    if (estResultWeeks) {
      estResultWeeks.textContent = `~${totalMinWeeks}–${totalMaxWeeks} Weeks`;
    }
    if (estResultBudget) {
      estResultBudget.textContent = `$${totalMinCost.toLocaleString()} – $${totalMaxCost.toLocaleString()}`;
    }
    if (estResultArch) {
      estResultArch.textContent = allArchModules;
    }

    return {
      platforms: activePlatforms,
      scopeTitle: selectedScopeBtn?.querySelector('.est-opt-label')?.textContent?.trim() || scopeType,
      weeks: `~${totalMinWeeks}–${totalMaxWeeks} Weeks`,
      budget: `$${totalMinCost.toLocaleString()} – $${totalMaxCost.toLocaleString()}`,
      caps: activeCaps,
      arch: allArchModules
    };
  };

  // Platform multi-selection (minimum 1)
  estPlatformBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isCurrentlyActive = btn.classList.contains('active');
      const activeCount = Array.from(estPlatformBtns).filter(b => b.classList.contains('active')).length;
      if (isCurrentlyActive && activeCount <= 1) {
        showToastSnackbar('At least one platform target must remain selected');
        return;
      }
      btn.classList.toggle('active');
      playTapSound();
      calculateEstimator();
    });
  });

  // Scope selection (single select)
  estScopeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      estScopeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      playTapSound();
      calculateEstimator();
    });
  });

  // Capabilities multi-selection
  estCapsBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      playTapSound();
      calculateEstimator();
    });
  });

  // Apply Scope to Brief button
  btnApplyEstimator?.addEventListener('click', () => {
    const estData = calculateEstimator();
    if (!estData) return;

    const formattedBrief = [
      `[Estimated Project Scope & Architecture Brief]`,
      `• Target Platforms: ${estData.platforms.join(', ')}`,
      `• Scope & Cadence: ${estData.scopeTitle} (${estData.weeks})`,
      `• Native Modules: ${estData.caps.length ? estData.caps.join(', ') : 'Standard M3 Compose'}`,
      `• Target Architecture: ${estData.arch}`,
      `• Estimated Investment Tier: ${estData.budget}`,
      ``,
      `Project Description & Specific Requirements: `
    ].join('\n');

    if (projectDetails) {
      projectDetails.value = formattedBrief;
      updateCharCount();
      projectDetails.focus();
      projectDetails.classList.add('pulse-highlight');
      setTimeout(() => projectDetails.classList.remove('pulse-highlight'), 1200);
    }

    smoothScrollToTarget('#projectContactForm');
    playCopySound();
    showToastSnackbar('Estimator specs applied to project intake brief!');
  });

  /* --------------------------------------------------------------------------
     18. Client Testimonials Carousel
     -------------------------------------------------------------------------- */
  const testiCards = document.querySelectorAll('.testi-card');
  let currentTestiIndex = 0;

  const updateTestimonialsCarousel = (idx) => {
    if (!testiTrack || !testiCards.length) return;
    const isMobile = window.innerWidth <= 992;
    const maxIdx = isMobile ? testiCards.length - 1 : Math.max(0, testiCards.length - 2);
    currentTestiIndex = Math.max(0, Math.min(idx, maxIdx));

    const cardWidth = testiCards[0].offsetWidth;
    const gap = 24;
    const offset = currentTestiIndex * (cardWidth + gap);
    testiTrack.style.transform = `translateX(-${offset}px)`;

    testiDots.forEach((dot, dIdx) => {
      dot.classList.toggle('active', dIdx === currentTestiIndex);
    });
  };

  btnTestiNext?.addEventListener('click', () => {
    playTapSound();
    const isMobile = window.innerWidth <= 992;
    const maxIdx = isMobile ? testiCards.length - 1 : Math.max(0, testiCards.length - 2);
    const nextIdx = currentTestiIndex >= maxIdx ? 0 : currentTestiIndex + 1;
    updateTestimonialsCarousel(nextIdx);
  });

  btnTestiPrev?.addEventListener('click', () => {
    playTapSound();
    const isMobile = window.innerWidth <= 992;
    const maxIdx = isMobile ? testiCards.length - 1 : Math.max(0, testiCards.length - 2);
    const prevIdx = currentTestiIndex <= 0 ? maxIdx : currentTestiIndex - 1;
    updateTestimonialsCarousel(prevIdx);
  });

  testiDots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-index') || '0', 10);
      playTapSound();
      updateTestimonialsCarousel(idx);
    });
  });

  // Auto-Cycle Carousel every 6.5s, pausing on hover
  let testiInterval = setInterval(() => {
    const isMobile = window.innerWidth <= 992;
    const maxIdx = isMobile ? testiCards.length - 1 : Math.max(0, testiCards.length - 2);
    const nextIdx = currentTestiIndex >= maxIdx ? 0 : currentTestiIndex + 1;
    updateTestimonialsCarousel(nextIdx);
  }, 6500);

  const testiWrap = document.querySelector('.testimonials-carousel-wrap');
  testiWrap?.addEventListener('mouseenter', () => clearInterval(testiInterval));
  testiWrap?.addEventListener('mouseleave', () => {
    clearInterval(testiInterval);
    testiInterval = setInterval(() => {
      const isMobile = window.innerWidth <= 992;
      const maxIdx = isMobile ? testiCards.length - 1 : Math.max(0, testiCards.length - 2);
      const nextIdx = currentTestiIndex >= maxIdx ? 0 : currentTestiIndex + 1;
      updateTestimonialsCarousel(nextIdx);
    }, 6500);
  });

  // Responsive resize handler
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      updateTestimonialsCarousel(currentTestiIndex);
    }, 150);
  }, { passive: true });

  /* --------------------------------------------------------------------------
     19. Accessible FAQ Accordions
     -------------------------------------------------------------------------- */
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    trigger?.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      playTapSound();

      // Collapse siblings for clear single-accordion UX
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.faq-trigger')?.setAttribute('aria-expanded', 'false');
        }
      });

      if (!isActive) {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
      } else {
        item.classList.remove('active');
        trigger.setAttribute('aria-expanded', 'false');
      }
    });
  });

  /* --------------------------------------------------------------------------
     20. Dynamic Current Year in Footer
     -------------------------------------------------------------------------- */
  if (currentYearElem) {
    currentYearElem.textContent = new Date().getFullYear();
  }
});

// CSS Keyframe for JS spinner
const dynamicStyle = document.createElement('style');
dynamicStyle.textContent = `
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;
document.head.appendChild(dynamicStyle);
