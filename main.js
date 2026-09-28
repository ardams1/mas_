/* ============================================
   MAS — INTERACTIONS & ANIMATIONS
   ============================================ */

// ---- i18n translations ----
const translations = {
  en: {
    nav_services: 'SERVICES',
    nav_why: 'WHY MAS ?',
    nav_insights: 'INSIGHTS',
    nav_contact: 'CONTACT',
    hero_label: 'DIGITAL AGENCY — EST. 2019',
    mod1_title: 'WHY MAS ?',
    mod1_p1: 'Template websites go up fast and cheap, but they all look the same. Under the hood, they\'re packed with hundreds of lines of code you\'ll never use, unnecessary plugins, and files that slow everything down. In short: that site wasn\'t built for you.',
    mod1_p2: 'At <strong>mas</strong>, we write every project from scratch, tailored to you. Not a single unnecessary line of code in your site. Everything is designed for your needs, loads fast, and works exactly the way you want.',
    mod1_p4: 'We don\'t tweak ready-made templates. We build solutions custom-made for your business. The result: a website that\'s faster than your competitors, ranks better on Google, and scales easily as your business grows.',
    mod2_title: 'SERVICES',
    srv_thesis_tag: 'CREATIVE DIGITAL STUDIO',
    srv_thesis_text: '<strong>mas_</strong> is a new-generation social media agency rooted in custom web engineering and bespoke software. We build your digital infrastructure from scratch and orchestrate your social media, video production, and advertising campaigns with single-minded visual coherence.',
    tab_all: '[ 00 / ALL SERVICES ]',
    tab_web: '[ 01 / WEB & SYSTEMS ]',
    tab_social: '[ 02 / SOCIAL & ADS ]',
    tab_prod: '[ 03 / VIDEO & PHOTO ]',
    tab_threed: '[ 04 / 3D & MOTION ]',
    tab_brand: '[ 05 / BRAND IDENTITY ]',
    srv1_disc: 'WEB ARCHITECTURE & SOFTWARE',
    srv1_title: 'Custom Web Design & Bespoke Admin Panel',
    srv1_desc: 'No drag-and-drop templates or bloated plugins. We develop bespoke, lightning-fast, and SEO-engineered web platforms. Crucially, we build a <strong>tailored, clutter-free Admin Panel</strong> with only the buttons your team actually needs.',
    admin_btn_front: 'Frontend Interface',
    admin_btn_admin: 'Custom Admin Panel',
    srv1_t1: 'Custom Web Design',
    srv1_t2: 'UI / UX Design',
    srv1_t3: 'Bespoke Admin Panel',
    srv1_t4: 'Technical SEO Infrastructure',
    srv2_disc: 'GROWTH & PERFORMANCE',
    srv2_title: 'Social Media & Paid Ads Management',
    srv2_desc: 'We don\u2019t burn ad budgets with random posting. Through holistic roadmaps and monthly content calendars, we define your brand\u2019s voice and direct Meta (Instagram/Facebook) & Google Ads budgets toward high-intent customers.',
    srv2_t1: 'Social Media Management',
    srv2_t2: 'Meta & Google Ads',
    srv2_t3: 'Creative Strategy & Planning',
    srv3_disc: 'CREATIVE PRODUCTION',
    srv3_title: 'Video & Photography Production',
    srv3_desc: 'Stock footage and synthetic imagery dilute your brand. Using cinema-grade equipment on location, in-studio, or on-field, we produce high-tempo Reels/TikTok videos and elevated lookbook photography that captivates audiences.',
    srv3_t1: 'Video Production & Reels',
    srv3_t2: 'Commercial Photography',
    srv3_t3: 'Editing & Color Grading',
    srv4_disc: '3D & MOTION DESIGN',
    srv4_title: '3D Visualization & Animation Design',
    srv4_desc: 'Standing out on web platforms and social feeds through high-impact 3D product renders, spatial modeling, and fluid kinetic motion graphics.',
    srv4_t1: '3D Product Modeling',
    srv4_t2: 'Motion Graphics',
    srv4_t3: 'WebGL & Interaction',
    srv4_t4: '3D Social Reels',
    srv5_disc: 'ART DIRECTION',
    srv5_title: 'Brand Identity & Visual Systems',
    srv5_desc: 'Ensuring your website and social channels speak the exact same refined design language. From bespoke logo suites and typography pairing to color hierarchies and social feed guidelines, we build an unmistakable brand presence.',
    srv5_t1: 'Brand Identity Creation',
    srv5_t2: 'Logo & Typography Systems',
    srv5_t3: 'Social Grid Guidelines',
    mod3_title: 'INSIGHTS',
    det1_title: 'Zero Bloat',
    det1_desc: 'Every line of code is written with purpose. No unused CSS, no redundant JavaScript, no third-party overhead.',
    det2_title: 'Total Ownership',
    det2_desc: 'You own every asset, every component, and every line of code. No platform lock-in, no recurring platform fees.',
    det3_title: 'Scalable Architecture',
    det3_desc: 'Component-driven systems built to scale. Add features, pages, and integrations without rewriting your foundation.',
    det4_title: 'Accessibility First',
    det4_desc: 'Semantic markup, ARIA patterns, and keyboard navigation baked in from day one, not bolted on after launch.',
    det5_title: 'SEO by Architecture',
    det5_desc: 'Clean DOM, fast rendering, structured data, and server-side performance ensure search engines love your site.',
    det6_title: 'High-Return Investment',
    det6_desc: 'Unlike disposable templates, ground-up development represents a dedicated upfront investment that eliminates perpetual license fees and costly technical debt.',
    det7_title: 'Considered Development Timeline',
    det7_desc: 'Precision engineering cannot be rushed. Every viewport, interaction, and production asset is deliberately tested, optimized, and refined over dedicated production sprints.',
    det8_title: 'Dedicated Technical Partnership',
    det8_desc: 'We don\u2019t hand off and disappear. For ongoing platform extensions, high-traffic campaigns, and design iterations, we provide dedicated engineering support.',
    contact_label: 'READY TO BUILD?',
    contact_heading: 'LET\u2019S TALK<span class="blink-cursor">_</span>',
    card_hint: 'Click card to flip',
    lanyard_hint: 'DRAG &bull; FLIP',
    footer_copy: '© 2026 mas_. All rights reserved.',
    footer_craft: 'Crafted with precision.'
  },
  tr: {
    nav_services: 'HİZMETLER',
    nav_why: 'NEDEN MAS ?',
    nav_insights: 'DETAYLAR',
    nav_contact: 'İLETİŞİM',
    hero_label: 'DİJİTAL AJANS — 2019\'DAN BERİ',
    mod1_title: 'NEDEN MAS ?',
    mod1_p1: 'Hazır şablonlarla yapılan siteler ucuza ve çabuk çıkar ama hep aynı kalıptan çıkmış gibi durur. Bir de arka tarafta kimsenin kullanmadığı bir sürü eklenti, gereksiz kod ve siteyi ağırlaştıran dosyalar yığılır. Kısacası, o site sizin değil. Herkesin sitesi.',
    mod1_p2: '<strong>mas_</strong> olarak biz işi farklı yapıyoruz. Her projeyi en baştan, tamamen sizin ihtiyaçlarınıza göre kodluyoruz. Gereksiz hiçbir şey yok. Ne fazla kod, ne yavaşlatan eklenti. Sadece sizin işinize yarayan, hızlı ve doğru çalışan bir site.',
    mod1_p3: 'Bugünün dünyasında bir site sadece güzel görünse yetmiyor. Hızlı açılması lazım, telefonda da düzgün çalışması lazım, Google\'da çıkması lazım, herkesin rahatça kullanabilmesi lazım. Bunları sürükle-bırak araçlarıyla yapmaya çalışmak... pek gerçekçi değil.',
    mod1_p4: 'Biz hazır temaları alıp üstünü değiştirmiyoruz. Sizin işinize özel, sıfırdan çözüm üretiyoruz. Sonuçta elinizde rakiplerden hızlı, Google\'da görünür ve işiniz büyüdükçe rahatça büyüyebilen bir site kalıyor.',
    mod2_title: 'HİZMETLER',
    srv_thesis_tag: 'KREATİF DİJİTAL STÜDYO',
    srv_thesis_text: '<strong>mas_</strong>, web tasarım ve özel yazılım odaklı yeni nesil bir sosyal medya ajansıdır. Sitenizi şablonlara boğmadan sıfırdan inşa ediyor; sosyal medyanızı, video prodüksiyonunuzu ve dijital reklamlarınızı aynı seçkin dille yönetiyoruz.',
    tab_all: '[ 00 / HEPSİ ]',
    tab_web: '[ 01 / WEB & SİSTEM ]',
    tab_social: '[ 02 / SOSYAL & REKLAM ]',
    tab_prod: '[ 03 / VİDEO & FOTO ]',
    tab_threed: '[ 04 / 3D & ANİMASYON ]',
    tab_brand: '[ 05 / MARKA KİMLİĞİ ]',
    srv1_disc: 'WEB MİMARİSİ & YAZILIM',
    srv1_title: 'Özel Web Tasarımı & Size Özel Admin Paneli',
    srv1_desc: 'Sürükle-bırak şablonlar veya şişkin eklentiler yok. Sıfırdan, markanıza özel, ultra hızlı ve SEO dostu web siteleri geliştiriyoruz. En önemlisi; sitenizi kimseye bağımlı olmadan kolayca yönetebilmeniz için sadece ihtiyacınız olan özelliklerden oluşan <strong>Size Özel Sade Bir Admin Paneli</strong> kodluyoruz.',
    admin_btn_front: 'Web Arayüzü',
    admin_btn_admin: 'Özel Yönetim Paneli',
    srv1_t1: 'Özel Web Tasarımı',
    srv1_t2: 'UI / UX Tasarım',
    srv1_t3: 'Özel Admin Paneli',
    srv1_t4: 'Teknik SEO Altyapısı',
    srv2_disc: 'BÜYÜME & PERFORMANS',
    srv2_title: 'Sosyal Medya & Reklam Yönetimi',
    srv2_desc: 'Rastgele paylaşımlarla bütçe tüketmiyoruz. Genel planlama ve aylık içerik takvimleriyle markanızın sesini belirliyor; Meta (Instagram/Facebook) ve Google Ads reklamlarınızı doğrudan satışa ve nitelikli kitleye dönüştürüyoruz.',
    srv2_t1: 'Sosyal Medya Yönetimi',
    srv2_t2: 'Meta & Google Reklamları',
    srv2_t3: 'Genel Planlama & Strateji',
    srv3_disc: 'KREATİF PRODÜKSİYON',
    srv3_title: 'Video & Fotoğraf Çekim Hizmeti',
    srv3_desc: 'Stok video veya yapay görseller markanızı sıradanlaştırır. Profesyonel ekipmanlarla mekanınızda, stüdyoda veya sahada; sosyal medyada izleten yüksek tempolu Reels/TikTok videoları ve üst düzey marka fotoğraf çekimleri gerçekleştiriyoruz.',
    srv3_t1: 'Video Çekimi & Reels',
    srv3_t2: 'Fotoğraf Çekimi',
    srv3_t3: 'Kurgu & Renk Tasarımı',
    srv4_disc: '3D & ANİMASYON TASARIMI',
    srv4_title: '3D Modelleme & Animasyon Tasarımı',
    srv4_desc: 'Web sitenizde ve sosyal medya içeriklerinizde fark yaratan 3D ürün modellemeleri, mekanik görselleştirmeler ve akıcı motion grafikler. Sıradan görsellerin ötesine geçen dinamik üç boyutlu deneyimler.',
    srv4_t1: '3D Ürün Modelleme',
    srv4_t2: 'Motion Graphics',
    srv4_t3: 'WebGL & Etkileşim',
    srv4_t4: '3D Reels Animasyon',
    srv5_disc: 'ART DIRECTION',
    srv5_title: 'Marka Kimliği & Görsel Tasarım',
    srv5_desc: 'Web siteniz ile Instagram akışınızın aynı seçkin dille konuşmasını sağlıyoruz. Logo tasarımı, tipografi seçimi, renk hiyerarşisi ve sosyal medya grid rehberleriyle markanızı rakiplerden net bir şekilde ayrıştırıyoruz.',
    srv5_t1: 'Marka Kimliği Oluşturma',
    srv5_t2: 'Logo & Tipografi Sistemi',
    srv5_t3: 'Sosyal Medya Grid Kılavuzu',
    mod3_title: 'DETAYLAR',
    det1_title: 'Gereksiz Kod Yok',
    det1_desc: 'Yazdığımız her satırın bir sebebi var. Kullanılmayan dosya yok, gereksiz eklenti yok, siteyi yavaşlatan hiçbir şey yok.',
    det2_title: 'Her Şey Sizin',
    det2_desc: 'Sitenin tamamı size ait. Tasarımı, kodu, her şeyi. Hiçbir platforma bağımlı kalmazsınız, kimseye lisans veya aylık ödeme yapmazsınız.',
    det3_title: 'Büyümeye Hazır',
    det3_desc: 'Siteyi modüler ve bileşen odaklı kuruyoruz. İleride yeni sayfa veya özellik eklemek istediğinizde temeli bozmadan kolayca büyütülebiliyor.',
    det4_title: 'Herkes İçin Erişilebilirlik',
    det4_desc: 'Erişilebilirlik sonradan eklenen bir yama değil, ilk günden sitenin omurgasıdır. Klavye navigasyonu, ekran okuyucu uyumu ve doğru semantik yapı hazırdır.',
    det5_title: 'Mimari Seviyede SEO',
    det5_desc: 'Temiz DOM ağacı, ultra hızlı ilk tepki süresi ve yapılandırılmış veri şemaları. Arama motorlarının sitenizi zirveye taşıması için teknik altyapı eksiksizdir.',
    det6_title: 'Butik & Kalıcı Yatırım',
    det6_desc: 'Hazır şablonların aksine, sıfırdan mimari geliştirme odaklı bir ilk yatırım gerektirir. Ancak aylık eklenti ve tekrarlanan yenileme maliyetlerini sıfırlayarak uzun vadede kazandırır.',
    det7_title: 'Özenli Geliştirme Takvimi',
    det7_desc: 'Aceleye getirilmiş şablonlar yerine; her ekranı, pikseli ve performans metriğini titizlikle test edip optimize ettiğimiz gerçek bir mühendislik ve prodüksiyon süreci yürütürüz.',
    det8_title: 'Sürekli Teknik İş Ortaklığı',
    det8_desc: 'Sitenizi teslim edip kaybolmuyoruz. İleride ihtiyaç duyacağınız yeni özellikler, periyodik optimizasyonlar ve teknik geliştirmeler için sürekli iş ortağınız olarak yanınızdayız.',
    contact_label: 'PROJENİZİ KONUŞALIM MI?',
    contact_heading: 'BİZE YAZIN<span class="blink-cursor">_</span>',
    card_hint: 'Döndürmek için kartvizite tıkla',
    lanyard_hint: 'ÇEK &bull; DÖNDÜR',
    footer_copy: '© 2026 mas_. Tüm hakları saklıdır.',
    footer_craft: 'Titizlikle üretildi.'
  }
};

let currentLang = 'tr';

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
}

document.addEventListener('DOMContentLoaded', () => {

  // ---- Language switcher ----
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
    });
  });

  // Set initial language to Turkish
  setLanguage('tr');

  // ---- Services Bento Filter Tabs & Direct Jump ----
  const filterTabs = document.querySelectorAll('.filter-tab');
  const bentoCards = document.querySelectorAll('.bento-card');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const target = tab.dataset.filter;

      bentoCards.forEach(card => {
        if (target === 'all' || card.dataset.category === target) {
          card.classList.remove('is-dimmed');
          card.classList.add('is-highlighted');
        } else {
          card.classList.add('is-dimmed');
          card.classList.remove('is-highlighted');
        }
      });

      // Jump directly to the target box or grid
      if (target === 'all') {
        const bentoGrid = document.getElementById('services-bento');
        if (bentoGrid) {
          bentoGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        const targetCard = document.querySelector(`.bento-card[data-category="${target}"]`);
        if (targetCard) {
          targetCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
          targetCard.classList.remove('pulse-focus');
          void targetCard.offsetWidth; // Reflow to restart animation
          targetCard.classList.add('pulse-focus');
        }
      }
    });
  });

  // ---- Admin Panel Mockup Widget Toggle ----
  const viewBtns = document.querySelectorAll('.view-btn');
  const modeFront = document.querySelector('.mode-front');
  const modeAdmin = document.querySelector('.mode-admin');

  viewBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      viewBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const view = btn.dataset.view;
      if (modeFront && modeAdmin) {
        modeFront.classList.toggle('active', view === 'front');
        modeAdmin.classList.toggle('active', view === 'admin');
      }
    });
  });

  // ---- 3D Animation Widget Coordinates Tracking ----
  const threedWidget = document.querySelector('.threed-widget');
  const threedCoords = document.getElementById('threedCoords');
  if (threedWidget && threedCoords) {
    threedWidget.addEventListener('mousemove', (e) => {
      const rect = threedWidget.getBoundingClientRect();
      const x = Math.round(((e.clientX - rect.left) / rect.width) * 180 - 90);
      const y = Math.round(((e.clientY - rect.top) / rect.height) * 180 - 90);
      threedCoords.textContent = `X:${x}° Y:${y}° 60FPS`;
    });
    threedWidget.addEventListener('mouseleave', () => {
      threedCoords.textContent = '60 FPS \u2022 GL_MESH';
    });
  }

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

  // Observe detail cards
  document.querySelectorAll('.detail-card, .advantage-list li').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.05}s`;
    moduleObserver.observe(card);
  });

  // Observe bento cards
  document.querySelectorAll('.bento-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.08}s`;
    moduleObserver.observe(card);
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
