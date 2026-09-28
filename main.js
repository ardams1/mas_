/* ============================================
   MAS — INTERACTIONS & ANIMATIONS
   ============================================ */

// ---- i18n translations ----
const translations = {
  en: {
    nav_services: 'SERVICES',
    nav_why: 'WHY MAS?',
    nav_process: 'PROCESS',
    nav_insights: 'INSIGHTS',
    nav_contact: 'CONTACT',
    hero_label: 'DIGITAL AGENCY — EST. 2019',
    hero_scroll: 'SCROLL TO EXPLORE',
    mod1_title: 'MODERN WEB VS. TEMPLATES',
    mod1_p1: 'Template websites go up fast and cheap, but they all look the same. Under the hood, they\'re packed with hundreds of lines of code you\'ll never use, unnecessary plugins, and files that slow everything down. In short: that site wasn\'t built for you.',
    mod1_p2: 'At <strong>mas</strong>, we write every project from scratch, tailored to you. Not a single unnecessary line of code in your site. Everything is designed for your needs, loads fast, and works exactly the way you want.',
    mod1_p3: 'A good website today doesn\'t just look nice. It needs to load fast, work smoothly on phones, rank high on Google, and be accessible to everyone. Drag-and-drop tools simply can\'t deliver that.',
    mod1_p4: 'We don\'t tweak ready-made templates. We build solutions custom-made for your business. The result: a website that\'s faster than your competitors, ranks better on Google, and scales easily as your business grows.',
    mod2_title: 'DEEP DIVE: PERFORMANCE',
    mod2_m1: 'Lighthouse<br/>Performance',
    mod2_m2: 'First Input<br/>Delay',
    mod2_m3: 'Largest Contentful<br/>Paint',
    mod2_m4: 'Cumulative<br/>Layout Shift',
    mod2_note: 'Every project is benchmarked against Core Web Vitals. We don\u2019t launch until every metric is green.',
    mod3_title: 'ADVANTAGES',
    adv1_title: 'Zero Bloat',
    adv1_desc: 'Every line of code is written with purpose. No unused CSS, no redundant JavaScript, no third-party overhead.',
    adv2_title: 'Total Ownership',
    adv2_desc: 'You own every asset, every component, every pixel. No vendor lock-in, no recurring platform fees.',
    adv3_title: 'Scalable Architecture',
    adv3_desc: 'Component-driven systems built to grow. Add features, pages, and integrations without rewriting your foundation.',
    adv4_title: 'Accessibility First',
    adv4_desc: 'Semantic markup, ARIA patterns, and keyboard navigation baked in from day one. Not bolted on after launch.',
    adv5_title: 'SEO by Architecture',
    adv5_desc: 'Clean DOM, fast rendering, structured data, and server-side rendering ensure search engines love your site.',
    mod4_title: 'DISADVANTAGES',
    dis1_title: 'Higher Initial Investment',
    dis1_desc: 'Custom development requires more upfront time and budget than off-the-shelf templates.',
    dis2_title: 'Longer Development Cycle',
    dis2_desc: 'Precision engineering takes weeks, not days. Every detail is considered, tested, and refined.',
    dis3_title: 'Requires Technical Partnership',
    dis3_desc: 'Ongoing updates and feature additions need skilled developers. We provide long-term support plans to bridge this.',
    anat_title: 'ANATOMY OF A WEB PAGE',
    anat_perf_title: 'PERFORMANCE',
    anat_perf_desc: 'Sub-second load times through code splitting, lazy loading, edge caching, and optimised critical rendering paths.',
    anat_ux_title: 'UX / UI',
    anat_ux_desc: 'Research-driven interfaces with micro-interactions, motion design, and pixel-perfect implementation across every breakpoint.',
    anat_resp_title: 'RESPONSIVE',
    anat_resp_desc: 'Fluid grids, container queries, and adaptive layouts that feel native on every screen, from 320px to ultrawide.',
    anat_seo_title: 'SEO / ACCESSIBILITY',
    anat_seo_desc: 'Structured data, semantic markup, WCAG 2.1 AA compliance, and performance-driven indexing strategies.',
    term_tab_template: '[ 01 / TEMPLATE BLOAT ]',
    term_tab_custom: '[ 02 / mas_ CUSTOM CODE ]',
    term_status_template: 'STATUS: BLOATED / 4.2s / 86 REQS',
    term_status_custom: 'STATUS: ENGINEERED / 50ms / 3 REQS',
    term_note_template: '3.4 MB page weight. 82 unused stylesheets & blocking tracking scripts.',
    term_note_custom: 'Zero unused bytes. 100/100 Lighthouse Performance. Pure semantic HTML5.',
    contact_label: 'READY TO BUILD?',
    contact_heading: 'LET\u2019S TALK<span class="blink-cursor">_</span>',
    card_hint: 'Click card to flip',
    lanyard_hint: 'DRAG &bull; FLIP',
    footer_copy: '© 2026 mas_. All rights reserved.',
    footer_craft: 'Crafted with precision.'
  },
  tr: {
    nav_services: 'HİZMETLER',
    nav_why: 'NEDEN MAS?',
    nav_process: 'SÜREÇ',
    nav_insights: 'DETAYLAR',
    nav_contact: 'İLETİŞİM',
    hero_label: 'DİJİTAL AJANS — 2019\'DAN BERİ',
    hero_scroll: 'AŞAĞI KAYDIR',
    mod1_title: 'MODERN WEB VS. ŞABLONLAR',
    mod1_p1: 'Hazır şablonlarla yapılan siteler ucuza ve çabuk çıkar ama hep aynı kalıptan çıkmış gibi durur. Bir de arka tarafta kimsenin kullanmadığı bir sürü eklenti, gereksiz kod ve siteyi ağırlaştıran dosyalar yığılır. Kısacası, o site sizin değil. Herkesin sitesi.',
    mod1_p2: '<strong>mas_</strong> olarak biz işi farklı yapıyoruz. Her projeyi en baştan, tamamen sizin ihtiyaçlarınıza göre kodluyoruz. Gereksiz hiçbir şey yok. Ne fazla kod, ne yavaşlatan eklenti. Sadece sizin işinize yarayan, hızlı ve doğru çalışan bir site.',
    mod1_p3: 'Bugünün dünyasında bir site sadece güzel görünse yetmiyor. Hızlı açılması lazım, telefonda da düzgün çalışması lazım, Google\'da çıkması lazım, herkesin rahatça kullanabilmesi lazım. Bunları sürükle-bırak araçlarıyla yapmaya çalışmak... pek gerçekçi değil.',
    mod1_p4: 'Biz hazır temaları alıp üstünü değiştirmiyoruz. Sizin işinize özel, sıfırdan çözüm üretiyoruz. Sonuçta elinizde rakiplerden hızlı, Google\'da görünür ve işiniz büyüdükçe rahatça büyüyebilen bir site kalıyor.',
    mod2_title: 'YAKINDAN BAKALIM: PERFORMANS',
    mod2_m1: 'Lighthouse<br/>Performans',
    mod2_m2: 'İlk Tepki<br/>Süresi',
    mod2_m3: 'Sayfa Açılış<br/>Hızı',
    mod2_m4: 'Görsel<br/>Kayma Oranı',
    mod2_note: 'Her projemizi Google\'ın performans kriterlerine göre test ediyoruz. Tüm sonuçlar yeşil olmadan siteyi yayına almıyoruz.',
    mod3_title: 'AVANTAJLAR',
    adv1_title: 'Gereksiz Kod Yok',
    adv1_desc: 'Yazdığımız her satırın bir sebebi var. Kullanılmayan dosya yok, gereksiz eklenti yok, siteyi yavaşlatan hiçbir şey yok.',
    adv2_title: 'Her Şey Sizin',
    adv2_desc: 'Sitenin tamamı size ait. Tasarımı, kodu, her şeyi. Hiçbir platforma bağımlı kalmazsınız, kimseye aylık ödeme yapmazsınız.',
    adv3_title: 'Büyümeye Hazır',
    adv3_desc: 'Siteyi parça parça, modüler kuruyoruz. İleride yeni sayfa veya özellik eklemek istediğinizde temeli bozmadan kolayca eklenebiliyor.',
    adv4_title: 'Herkes Kullanabilsin',
    adv4_desc: 'Erişilebilirlik sonradan eklenen bir şey değil, daha ilk günden sitenin yapısına dahil. Klavyeyle gezinme, ekran okuyucu desteği, doğru HTML yapısı hep hazır.',
    adv5_title: 'Google Sizi Sevsin',
    adv5_desc: 'Temiz kod, hızlı yüklenme, doğru yapılandırılmış veri. Arama motorlarının sitenizi bulup üst sıralara çıkarması için ne gerekiyorsa altyapıda var.',
    mod4_title: 'DEZAVANTAJLAR',
    dis1_title: 'Başlangıçta Daha Pahalı',
    dis1_desc: 'Özel geliştirme, hazır şablona göre başta daha fazla bütçe ister. Ama uzun vadede çok daha avantajlı çıkıyor.',
    dis2_title: 'Biraz Daha Zaman Alır',
    dis2_desc: 'Kaliteli iş aceleye gelmez. Her detayı düşünüyor, test ediyor, ince ayar yapıyoruz. Bu yüzden birkaç gün değil birkaç hafta sürüyor.',
    dis3_title: 'Teknik Destek Gerekebilir',
    dis3_desc: 'İleride yapılacak güncellemeler ve eklemeler için teknik bilgi lazım. Ama merak etmeyin, biz uzun vadeli destek paketleriyle bu işi sizin için kolay hale getiriyoruz.',
    anat_title: 'BİR WEB SAYFASININ ANATOMİSİ',
    anat_perf_title: 'PERFORMANS',
    anat_perf_desc: 'Sayfalarınız bir saniyenin altında açılır. Bunu akıllı kod bölme, gecikmeli yükleme ve önbellekleme ile sağlıyoruz.',
    anat_ux_title: 'UX / UI',
    anat_ux_desc: 'Araştırmaya dayalı arayüzler, akıcı geçişler ve her ekran boyutuna kusursuz uyan tasarımlar.',
    anat_resp_title: 'DUYARLI',
    anat_resp_desc: 'Siteniz telefonda da tablette de büyük ekranda da aynı kalitede görünür. Esnek yapısı sayesinde her cihaza doğal uyum sağlar.',
    anat_seo_title: 'SEO / ERİŞİLEBİLİRLİK',
    anat_seo_desc: 'Doğru HTML yapısı, yapılandırılmış veri ve hız odaklı altyapı ile arama motorlarında en iyi yerde olursunuz.',
    term_tab_template: '[ 01 / ŞABLON YÜKÜ ]',
    term_tab_custom: '[ 02 / mas_ ÖZEL KOD ]',
    term_status_template: 'DURUM: YAVAŞ / 4.2sn / 86 İSTEK',
    term_status_custom: 'DURUM: OPTİMİZE / 50ms / 3 İSTEK',
    term_note_template: '3.4 MB sayfa boyutu. 82 kullanılmayan dosya ve engelleyici script.',
    term_note_custom: 'Sıfır gereksiz kod. 100/100 Lighthouse puanı. Saf semantik HTML5.',
    contact_label: 'PROJENİZİ KONUŞALIM MI?',
    contact_heading: 'BİZE YAZIN<span class="blink-cursor">_</span>',
    card_hint: 'Döndürmek için kartvizite tıkla',
    lanyard_hint: 'ÇEK &bull; DÖNDÜR',
    footer_copy: '© 2026 mas_. Tüm hakları saklıdır.',
    footer_craft: 'Titizlikle üretildi.'
  }
};

let currentLang = 'tr';
let currentTerminalMode = 'custom';

const terminalSnippets = {
  template: `<!-- ❌ WordPress / Elementor / Wix Template Bloat -->
<div class="elementor-widget-wrap elementor-element-9a8f7b">
  <div class="vc_row wpb_row vc_row-fluid vc_custom_1629">
    <script src="/wp-includes/js/jquery/jquery-migrate.min.js"></script>
    <link rel="stylesheet" href="plugins/revslider/rs6.css">
    <link rel="stylesheet" href="plugins/elementor/assets/css/frontend.min.css">
    <!-- +82 unused stylesheets & blocking tracking scripts -->
  </div>
</div>
<!-- 4.2s load time. 86 HTTP requests. 3.4 MB total page weight. -->`,
  custom: `<!-- ✔ mas_ Engineered Architecture -->
<header class="site-header glass-minimal">
  <nav class="main-nav" aria-label="Primary Navigation">
    <a href="#services" class="nav-link">SERVICES</a>
    <a href="#why-mas" class="nav-link">PERFORMANCE</a>
  </nav>
</header>
<!-- 50ms load time. 3 HTTP requests. 14 KB total page weight. -->`
};

function updateTerminalDisplay() {
  const codeContent = document.getElementById('terminal-code-content');
  const statusText = document.getElementById('terminal-status-text');
  const dot = document.getElementById('terminal-dot');
  const note = document.getElementById('terminal-note');
  const dict = translations[currentLang];

  if (!codeContent || !statusText || !dot || !note || !dict) return;

  // Set code content
  codeContent.textContent = terminalSnippets[currentTerminalMode] || terminalSnippets.custom;

  // Set status text and dot state
  if (currentTerminalMode === 'template') {
    statusText.innerHTML = dict.term_status_template;
    dot.className = 'status-dot template';
    note.innerHTML = dict.term_note_template;
  } else {
    statusText.innerHTML = dict.term_status_custom;
    dot.className = 'status-dot custom';
    note.innerHTML = dict.term_note_custom;
  }

  // Update tabs active state
  document.querySelectorAll('.terminal-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.mode === currentTerminalMode);
  });
}

function setLanguage(lang) {
  currentLang = lang;
  const dict = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // Update active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update html lang attribute
  document.documentElement.lang = lang === 'tr' ? 'tr' : 'en';

  // Keep terminal updated in active language
  updateTerminalDisplay();
}

document.addEventListener('DOMContentLoaded', () => {

  // ---- Language switcher ----
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
    });
  });

  // ---- Interactive Code Terminal ----
  document.querySelectorAll('.terminal-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      currentTerminalMode = tab.dataset.mode;
      updateTerminalDisplay();
    });
  });
  // Set initial language to Turkish
  setLanguage('tr');
  updateTerminalDisplay();

  // ---- Scroll-based header hide/show ----
  const header = document.getElementById('site-header');
  let lastScroll = 0;
  const SCROLL_THRESHOLD = 10;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > lastScroll && currentScroll > 100) {
      header.classList.add('is-hidden');
    } else if (currentScroll < lastScroll - SCROLL_THRESHOLD) {
      header.classList.remove('is-hidden');
    }
    lastScroll = currentScroll;
  }, { passive: true });

  // ---- Mobile menu toggle ----
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');

  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !expanded);
    mainNav.classList.toggle('is-open');
  });

  // Close mobile menu on nav click
  mainNav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      mainNav.classList.remove('is-open');
    });
  });

  // ---- Intersection Observer: reveal modules ----
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.1
  };

  const moduleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        moduleObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe modules
  document.querySelectorAll('.module').forEach(mod => {
    moduleObserver.observe(mod);
  });

  // Observe advantage list items
  document.querySelectorAll('.advantage-list li').forEach((li, i) => {
    li.style.transitionDelay = `${i * 0.08}s`;
    moduleObserver.observe(li);
  });

  // Observe anatomy cards
  document.querySelectorAll('.anatomy-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.1}s`;
    moduleObserver.observe(card);
  });

  // ---- Animated counter for performance numbers ----
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-count]').forEach(el => {
    counterObserver.observe(el);
  });

  function animateCounter(el) {
    const target = parseFloat(el.dataset.count);
    const isDecimal = el.dataset.decimal === 'true';
    const duration = 1200;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4); // ease-out quart
      const current = target * eased;

      if (isDecimal) {
        el.textContent = current.toFixed(1);
      } else {
        el.textContent = Math.round(current);
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  // ---- Meter fill animation ----
  const meterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        const pct = fill.dataset.fill;
        fill.style.width = pct + '%';
        meterObserver.unobserve(fill);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.meter-fill').forEach(el => {
    meterObserver.observe(el);
  });

  // ---- Active nav link on scroll ----
  const sections = document.querySelectorAll('[id]');
  const navLinks = document.querySelectorAll('[data-nav]');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  }, {
    rootMargin: '-30% 0px -70% 0px',
    threshold: 0
  });

  sections.forEach(section => {
    if (section.id) navObserver.observe(section);
  });

  // ---- Smooth scroll for nav links (fallback) ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;
      e.preventDefault();
      try {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } catch (err) {}
    });
  });

  // ============================================
  // INTERACTIVE 3D LANYARD BADGE (REALISTIC PHYSICS)
  // ============================================
  const lanyardSwing = document.getElementById('lanyardSwing');
  const lanyardOrigin = document.getElementById('lanyardOrigin');
  const lanyardCard = document.getElementById('lanyardCard');
  const lanyardCardInner = document.getElementById('lanyardCardInner');
  const lanyardWrapper = document.getElementById('lanyardWrapper');

  if (lanyardSwing && lanyardOrigin && lanyardCard && lanyardCardInner) {
    // ── State ──
    let angle = 0;               // Current swing angle (degrees, NOT radians)
    let angularVel = 0;          // Angular velocity (degrees/frame)
    let yOffset = -350;          // Start high above for gentle drop
    let yVel = 0;                // Vertical velocity
    let isDropSettled = false;
    let isDragging = false;
    let hasMoved = false;
    let dragStartX = 0;
    let dragBaseAngle = 0;       // Angle at the moment drag began
    let lastDragX = 0;           // For flick velocity on release
    let lastDragTime = 0;
    let flickVel = 0;            // degrees/ms for release

    const MAX_ANGLE = 35;        // Hard limit (degrees)

    // ── Scroll sway dynamics ──
    let lastScrollY = window.scrollY || window.pageYOffset || 0;
    let scrollIntensity = 0;     // Builds up as user scrolls, decays when idle
    let scrollPhase = 0;         // Wave phase for continuous gentle sway
    let scrollDir = 1;           // Direction multiplier based on scroll up/down

    // ── Flip card ──
    const toggleFlip = () => lanyardCardInner.classList.toggle('flipped');

    lanyardCard.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleFlip(); }
    });

    // Block browser ghost-image dragging
    lanyardCard.addEventListener('dragstart', (e) => e.preventDefault());
    lanyardSwing.addEventListener('dragstart', (e) => e.preventDefault());

    // ── Helper: get X position from any event ──
    function getX(e) {
      if (e.touches && e.touches.length > 0) return e.touches[0].clientX;
      if (e.changedTouches && e.changedTouches.length > 0) return e.changedTouches[0].clientX;
      return e.clientX;
    }

    // ── DRAG START ──
    function onDragStart(e) {
      // For mouse events, only accept left button
      if (e.type === 'mousedown' && e.button !== 0) return;
      e.preventDefault();
      e.stopPropagation();

      isDragging = true;
      hasMoved = false;
      dragStartX = getX(e);
      dragBaseAngle = angle;
      lastDragX = dragStartX;
      lastDragTime = performance.now();
      flickVel = 0;

      // Kill any existing momentum & active scroll sway
      angularVel = 0;
      yVel = 0;
      yOffset = 0;
      isDropSettled = true;
      scrollIntensity = 0;

      lanyardSwing.classList.add('is-dragging');

      // Global listeners on document for tracking outside element
      document.addEventListener('mousemove', onDragMove, { capture: true, passive: false });
      document.addEventListener('mouseup', onDragEnd, { capture: true });
      document.addEventListener('touchmove', onDragMove, { capture: true, passive: false });
      document.addEventListener('touchend', onDragEnd, { capture: true });
      document.addEventListener('touchcancel', onDragEnd, { capture: true });
    }

    // ── DRAG MOVE ──
    function onDragMove(e) {
      if (!isDragging) return;
      e.preventDefault();

      const cx = getX(e);
      const dx = cx - dragStartX;

      if (Math.abs(dx) > 3) hasMoved = true;

      // Track velocity for flick release
      const now = performance.now();
      const dt = Math.max(now - lastDragTime, 1);
      flickVel = (cx - lastDragX) / dt; // px/ms, positive = rightward
      lastDragX = cx;
      lastDragTime = now;

      // Direct mapping: 1px mouse movement ≈ 0.175 degrees
      // CSS rotate(+) with transform-origin top = bottom swings LEFT visually
      // So we NEGATE: drag RIGHT → negative angle → bottom swings RIGHT
      const targetAngle = dragBaseAngle + dx * -0.175;
      angle = Math.max(-MAX_ANGLE, Math.min(MAX_ANGLE, targetAngle));
    }

    // ── DRAG END ──
    function onDragEnd(e) {
      if (!isDragging) return;
      isDragging = false;

      lanyardSwing.classList.remove('is-dragging');

      document.removeEventListener('mousemove', onDragMove, { capture: true });
      document.removeEventListener('mouseup', onDragEnd, { capture: true });
      document.removeEventListener('touchmove', onDragMove, { capture: true });
      document.removeEventListener('touchend', onDragEnd, { capture: true });
      document.removeEventListener('touchcancel', onDragEnd, { capture: true });

      if (!hasMoved) {
        toggleFlip();
      } else {
        // Convert flick velocity (px/ms) to angular velocity (deg/frame @60fps ≈ 16.67ms)
        // Negate to match inverted rotation direction
        const flickDegPerFrame = flickVel * 16.67 * -0.15;
        angularVel = Math.max(-4, Math.min(4, flickDegPerFrame));
      }
    }

    // ── Attach drag listeners to the ENTIRE swing element (strap + hardware + card) ──
    lanyardSwing.addEventListener('mousedown', onDragStart);
    lanyardSwing.addEventListener('touchstart', onDragStart, { passive: false });

    // ── Sync lanyard with header hide/show on scroll ──
    if (lanyardWrapper) {
      // Watch header for is-hidden class changes
      const headerEl = document.getElementById('site-header');
      if (headerEl) {
        const syncLanyardWithHeader = () => {
          if (headerEl.classList.contains('is-hidden')) {
            lanyardWrapper.classList.add('is-hidden');
          } else {
            lanyardWrapper.classList.remove('is-hidden');
          }
        };

        // Use MutationObserver to react to header class changes
        const headerObserver = new MutationObserver(syncLanyardWithHeader);
        headerObserver.observe(headerEl, { attributes: true, attributeFilter: ['class'] });
      }
    }

    // ── Passive wheel listener for responsive wheel ticks ──
    window.addEventListener('wheel', (e) => {
      if (isDropSettled && !isDragging && Math.abs(e.deltaY) > 1) {
        scrollDir = e.deltaY > 0 ? 1 : -1;
        const add = Math.min(Math.abs(e.deltaY) * 0.02, 1.0);
        scrollIntensity = Math.min(scrollIntensity + add, 2.5);
      }
    }, { passive: true });

    // ── PHYSICS LOOP (60fps) ──
    function stepPhysics() {
      // 0. SCROLL REACTION (subtle, elegant sway while scrolling)
      const currentScrollY = window.scrollY || window.pageYOffset || 0;
      const scrollDelta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      if (isDropSettled && !isDragging) {
        if (Math.abs(scrollDelta) > 0.5) {
          scrollDir = scrollDelta > 0 ? 1 : -1;
          const add = Math.min(Math.abs(scrollDelta) * 0.08, 1.5);
          scrollIntensity = Math.min(scrollIntensity + add, 2.5);
        }
      }

      // 1. INITIAL DROP — gentle spring easing into resting position
      if (!isDropSettled) {
        const springK = 0.015;
        const springDamping = 0.93;

        yVel += (-yOffset) * springK;
        yVel *= springDamping;
        yOffset += yVel;

        // Gentle pendulum sway during drop
        if (Math.abs(yOffset) > 30) {
          angle = 8 * Math.sin(performance.now() * 0.002) * Math.min(1, Math.abs(yOffset) / 200);
        }

        if (Math.abs(yOffset) < 0.3 && Math.abs(yVel) < 0.3) {
          yOffset = 0;
          yVel = 0;
          isDropSettled = true;
          angularVel = 0.5; // Small residual swing after landing
        }
      }

      // 2. PENDULUM PHYSICS — gravity + damping + subtle scroll sway (in DEGREES)
      if (!isDragging && isDropSettled) {
        if (Math.abs(angularVel) > 0.003 || Math.abs(angle) > 0.04 || scrollIntensity > 0.01) {
          // Gravity pulls back toward 0: torque proportional to sin(angle)
          const gravityTorque = -0.22 * Math.sin(angle * Math.PI / 180);

          let scrollForce = 0;
          if (scrollIntensity > 0.02) {
            scrollPhase += 0.09 * scrollDir;
            // Very gentle organic sway (capped amplitude ~3.1 degrees max)
            scrollForce = Math.sin(scrollPhase) * Math.min(scrollIntensity, 2.5) * 0.007;
            scrollIntensity *= 0.95;
          } else {
            scrollIntensity = 0;
          }

          angularVel = (angularVel + gravityTorque + scrollForce) * 0.945;
          angle += angularVel;

          // Hard wall bounce
          if (angle > MAX_ANGLE) {
            angle = MAX_ANGLE;
            angularVel = -Math.abs(angularVel) * 0.3;
          } else if (angle < -MAX_ANGLE) {
            angle = -MAX_ANGLE;
            angularVel = Math.abs(angularVel) * 0.3;
          }
        } else {
          angle = 0;
          angularVel = 0;
          scrollIntensity = 0;
        }
      }

      // 3. RENDER
      lanyardSwing.style.transform = `translate3d(0, ${yOffset.toFixed(1)}px, 0) rotate(${angle.toFixed(2)}deg)`;

      requestAnimationFrame(stepPhysics);
    }

    // Start physics after brief delay for page load
    setTimeout(() => requestAnimationFrame(stepPhysics), 250);
  }

  // ============================================
  // SOURCE CODE & DEVTOOLS PROTECTION
  // ============================================
  // 1. Disable right-click context menu
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  });

  // 2. Block inspection shortcuts: F12, Ctrl+Shift+I/J/C, Ctrl+U, Ctrl+S
  document.addEventListener('keydown', (e) => {
    // F12
    if (e.key === 'F12' || e.keyCode === 123) {
      e.preventDefault();
      return false;
    }

    const isCtrlOrCmd = e.ctrlKey || e.metaKey;
    const isShiftOrAlt = e.shiftKey || e.altKey;

    // Ctrl+Shift+I (DevTools), Ctrl+Shift+J (Console), Ctrl+Shift+C (Inspect)
    // Mac: Cmd+Option+I, Cmd+Option+J, Cmd+Option+C
    if (isCtrlOrCmd && isShiftOrAlt && ['i', 'I', 'j', 'J', 'c', 'C'].includes(e.key)) {
      e.preventDefault();
      return false;
    }

    // Ctrl+U (View Page Source), Ctrl+S (Save Page)
    if (isCtrlOrCmd && ['u', 'U', 's', 'S'].includes(e.key)) {
      e.preventDefault();
      return false;
    }
  });

});
