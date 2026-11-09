/* ============================================================
   HARVENDER SINGH RAWAT — OFFICIAL WIZARDING PORTFOLIO
   app.js — Inspired by HarryPotter.com (Wizarding World)
   Interactive Sorting Hat, Web Audio Engine & Editorial UX
   ============================================================ */

'use strict';

/* ═══════════════════════════════════════════════
   1. WIZARDING AUDIO SYNTHESIZER (Web Audio API)
   ═══════════════════════════════════════════════ */
class WizardAudio {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  _init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  /* Wand flick & swoosh */
  playWandSwoosh() {
    if (!this.enabled) return;
    this._init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const dur = 0.35;
    const buf = this.ctx.createBuffer(1, this.ctx.sampleRate * dur, this.ctx.sampleRate);
    const data = buf.getChannelData(0);

    for (let i = 0; i < data.length; i++) {
      const env = Math.sin((i / data.length) * Math.PI);
      data[i] = (Math.random() * 2 - 1) * Math.pow(env, 2);
    }

    const src = this.ctx.createBufferSource();
    src.buffer = buf;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1200, t);
    filter.frequency.exponentialRampToValueAtTime(3200, t + 0.12);
    filter.frequency.exponentialRampToValueAtTime(500, t + dur);
    filter.Q.value = 3.0;

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.01, t);
    gain.gain.linearRampToValueAtTime(0.25, t + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, t + dur);

    src.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);
    src.start(t);
  }

  /* Spell cast chime */
  playSpellChime() {
    if (!this.enabled) return;
    this._init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const notes = [659.25, 783.99, 987.77, 1318.5]; // E5, G5, B5, E6
    notes.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t + i * 0.06);
      gain.gain.setValueAtTime(0.18, t + i * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.001, t + i * 0.06 + 0.4);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t + i * 0.06);
      osc.stop(t + i * 0.06 + 0.45);
    });
  }

  /* Lumos / Nox activation */
  playLumos() {
    if (!this.enabled) return;
    this._init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(440, t);
    osc.frequency.exponentialRampToValueAtTime(880, t + 0.3);
    gain.gain.setValueAtTime(0.15, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.45);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(t);
    osc.stop(t + 0.5);
  }

  /* Sorting hat fanfare */
  playSortingFanfare() {
    if (!this.enabled) return;
    this._init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const chord = [392, 523.25, 659.25, 783.99]; // G4, C5, E5, G5
    chord.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t + i * 0.08);
      gain.gain.setValueAtTime(0.2, t + i * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, t + i * 0.08 + 0.6);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t + i * 0.08);
      osc.stop(t + i * 0.08 + 0.65);
    });
  }

  /* Owl post flight call */
  playOwlPost() {
    if (!this.enabled) return;
    this._init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    // Two gentle hoot frequencies
    const hoots = [[440, 0], [493.88, 0.16], [440, 0.38]];
    hoots.forEach(([freq, delay]) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t + delay);
      gain.gain.setValueAtTime(0.15, t + delay);
      gain.gain.exponentialRampToValueAtTime(0.001, t + delay + 0.22);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t + delay);
      osc.stop(t + delay + 0.25);
    });
  }
}

/* ═══════════════════════════════════════════════
   2. STARRY NIGHT & EMBER CANVAS
   ═══════════════════════════════════════════════ */
class MagicCanvasEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.stars = [];
    this.motes = [];
    this.mouseX = window.innerWidth / 2;
    this.mouseY = window.innerHeight / 2;

    this._resize();
    this._initObjects();
    this._bindEvents();
    this._render();
  }

  _resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  _initObjects() {
    this.stars = [];
    this.motes = [];

    // Background twinkling stars
    const starCount = Math.floor((this.width * this.height) / 8000);
    for (let i = 0; i < starCount; i++) {
      this.stars.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        r: Math.random() * 1.4 + 0.3,
        alpha: Math.random() * 0.8 + 0.2,
        da: (Math.random() - 0.5) * 0.015,
        gold: Math.random() > 0.4
      });
    }

    // Floating golden embers
    for (let i = 0; i < 35; i++) {
      this.motes.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        r: Math.random() * 2 + 0.6,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -Math.random() * 0.5 - 0.2,
        alpha: Math.random() * 0.7 + 0.3
      });
    }
  }

  _bindEvents() {
    window.addEventListener('resize', () => {
      this._resize();
      this._initObjects();
    });
    window.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });
  }

  _render() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Stars
    for (let i = 0; i < this.stars.length; i++) {
      const s = this.stars[i];
      s.alpha += s.da;
      if (s.alpha <= 0.1 || s.alpha >= 1) s.da *= -1;

      this.ctx.beginPath();
      this.ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      this.ctx.fillStyle = s.gold
        ? `rgba(255, 215, 0, ${s.alpha})`
        : `rgba(240, 244, 255, ${s.alpha * 0.8})`;
      this.ctx.fill();
    }

    // Motes
    for (let i = 0; i < this.motes.length; i++) {
      const m = this.motes[i];
      m.x += m.vx;
      m.y += m.vy;

      if (m.y < -10) {
        m.y = this.height + 10;
        m.x = Math.random() * this.width;
      }
      if (m.x < -10) m.x = this.width + 10;
      if (m.x > this.width + 10) m.x = -10;

      this.ctx.beginPath();
      this.ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(255, 215, 0, ${m.alpha * 0.75})`;
      this.ctx.shadowBlur = 8;
      this.ctx.shadowColor = 'rgba(255, 215, 0, 0.6)';
      this.ctx.fill();
      this.ctx.shadowBlur = 0;
    }

    requestAnimationFrame(() => this._render());
  }
}

/* ═══════════════════════════════════════════════
   3. PROJECT BLUEPRINT DATABASE & INSPECTOR
   ═══════════════════════════════════════════════ */
const PROJECT_BLUEPRINTS = {
  p1: {
    eyebrow: 'MATCH #001 · SYSTEMS & GRAPHICS',
    title: 'C++ Raytracer Engine',
    tags: ['C++17', 'BVH Trees', 'Monte Carlo', 'OpenGL', 'Physics Rendering'],
    desc: 'A physics-accurate raytracer crafted from scratch in modern C++. Simulates realistic global illumination with Monte Carlo path sampling, spatial acceleration with Bounding Volume Hierarchy (BVH) structures, and physical material models.',
    highlights: [
      'Engineered custom BVH spatial partitioning tree, slashing rendering times by ~85%',
      'Physically-based materials: diffuse Lambertian, microfacet metals, and Snell dielectric glass',
      'Multi-threaded tile rendering scheduler maximizing CPU cache locality with SIMD optimizations',
      'Wavefront OBJ mesh loader with smooth vertex normal interpolation and area lights'
    ],
    links: [
      { label: '⚙️ View Repository on GitHub', url: 'https://github.com/harvender-rawat' }
    ]
  },
  p2: {
    eyebrow: 'MATCH #002 · ARTIFICIAL INTELLIGENCE',
    title: 'Python Autonomous AI Agent',
    tags: ['Python 3', 'FastAPI', 'ReAct Loops', 'Vector Memory', 'Tool Calling'],
    desc: 'An autonomous multi-step reasoning AI agent with cognitive ReAct loops, dynamic schema verification, persistent vector memory, and self-healing error recovery.',
    highlights: [
      'Autonomous reasoning loop that plans, calls external APIs, and checks its own outputs',
      'Dynamic tool registry with JSON Schema type validation and sandbox execution',
      'Vector memory retrieval layer for persistent long-term context recall across sessions',
      'Production-ready FastAPI microservice with asynchronous task streaming'
    ],
    links: [
      { label: '⚙️ View Repository on GitHub', url: 'https://github.com/harvender-rawat' }
    ]
  },
  p3: {
    eyebrow: 'MATCH #003 · CINEMA & VFX',
    title: 'Cinematic Showreel & Motion VFX',
    tags: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Color Grading', 'Sound Design'],
    desc: 'An award-caliber portfolio of narrative video productions, broadcast motion graphics, visual effects compositing, and professional Hollywood color grading.',
    highlights: [
      'Node-based color science workflows in DaVinci Resolve matching ACES & Hollywood color gamuts',
      'Procedural 3D motion design, green screen cleanups, and camera tracking in After Effects',
      'Multi-track sonic mastering, spatial EQ balance, and broadcast compliance delivery',
      'Directorial rhythm and pacing tailored for narrative engagement and brand impact'
    ],
    links: [
      { label: '🦉 Inquire for Showreel Reel', url: '#owl-post' }
    ]
  },
  p4: {
    eyebrow: 'MATCH #004 · 3D WEB GRAPHICS',
    title: 'Interactive 3D Web Universe',
    tags: ['Three.js', 'WebGL', 'GLSL Shaders', 'Particle Physics', 'Vanilla JS'],
    desc: 'An in-browser real-time 3D universe featuring GPU particle simulations, custom GLSL vertex/fragment shaders, and responsive spatial camera controls.',
    highlights: [
      'Custom procedural vertex and fragment shaders for atmospheric lighting and magic auras',
      '100,000+ GPU particles rendered fluidly at 60 FPS on both mobile and desktop',
      'Post-processing pipeline with unreal bloom, depth-of-field, and chromatic aberration',
      'Responsive touch, pointer, and orbital gyroscope controls'
    ],
    links: [
      { label: '⚙️ View Repository on GitHub', url: 'https://github.com/harvender-rawat' }
    ]
  }
};

/* ═══════════════════════════════════════════════
   4. SORTING HAT & HOUSE SYSTEM
   ═══════════════════════════════════════════════ */
const HOUSE_DATA = {
  gryffindor: {
    name: 'Gryffindor',
    crest: '🦁',
    points: '450 PTS',
    quote: '"Ah, yes! Daring, nerve, and chivalry set Gryffindors apart! Welcome to the lion\'s den!"'
  },
  slytherin: {
    name: 'Slytherin',
    crest: '🐍',
    points: '430 PTS',
    quote: '"Slytherin will help you on the way to greatness, no doubt about that! Ambition and power!"'
  },
  ravenclaw: {
    name: 'Ravenclaw',
    crest: '🦅',
    points: '445 PTS',
    quote: '"Wit beyond measure is man\'s greatest treasure! Where those of wit and learning will always find their kind."'
  },
  hufflepuff: {
    name: 'Hufflepuff',
    crest: '🦡',
    points: '425 PTS',
    quote: '"Where they are just and loyal, patient Hufflepuffs are true and unafraid of toil!"'
  }
};

/* ═══════════════════════════════════════════════
   5. LIVE MOVING ANIMATED SNITCH CURSOR ENGINE
   ═══════════════════════════════════════════════ */
class LiveMovingCursorEngine {
  constructor(cursorId) {
    this.el = document.getElementById(cursorId);
    if (!this.el) return;

    // Check if device supports fine hover pointer
    const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!hasFinePointer) {
      this.el.style.display = 'none';
      return;
    }

    this.snitch = this.el.querySelector('.cursor-snitch');
    this.trailDot = this.el.querySelector('.cursor-trail');

    this.targetX = window.innerWidth / 2;
    this.targetY = window.innerHeight / 2;
    this.currentX = this.targetX;
    this.currentY = this.targetY;
    this.trailX = this.targetX;
    this.trailY = this.targetY;
    this.tilt = 0;
    this.isVisible = false;

    this._bindEvents();
    this._startLoop();
  }

  _bindEvents() {
    window.addEventListener('mousemove', (e) => {
      this.targetX = e.clientX;
      this.targetY = e.clientY;

      if (!this.isVisible) {
        this.isVisible = true;
        this.el.classList.add('visible');
      }
    }, { passive: true });

    document.addEventListener('mouseenter', () => {
      this.isVisible = true;
      this.el.classList.add('visible');
    });

    document.addEventListener('mouseleave', () => {
      this.isVisible = false;
      this.el.classList.remove('visible');
    });

    // Click burst feedback
    window.addEventListener('mousedown', () => {
      this.el.classList.add('cursor-click');
    });
    window.addEventListener('mouseup', () => {
      this.el.classList.remove('cursor-click');
    });

    // Interactive Hover State Delegation
    const interactiveSelector = 'a, button, [role="button"], input, textarea, select, .editorial-card, .project-feature-card, .house-btn, .vault-badge-card, .channel-link-card, .btn-action-icon, .btn-passport-cta';

    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(interactiveSelector)) {
        this.el.classList.add('cursor-hover');
      }
    });

    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(interactiveSelector)) {
        this.el.classList.remove('cursor-hover');
      }
    });
  }

  _startLoop() {
    const update = () => {
      // Smooth linear interpolation (lerp)
      const dx = this.targetX - this.currentX;
      const dy = this.targetY - this.currentY;

      this.currentX += dx * 0.22;
      this.currentY += dy * 0.22;

      // Trailing dot follows slightly behind
      this.trailX += (this.currentX - this.trailX) * 0.35;
      this.trailY += (this.currentY - this.trailY) * 0.35;

      // Calculate banking tilt based on horizontal velocity
      const targetTilt = Math.max(-25, Math.min(25, dx * 0.65));
      this.tilt += (targetTilt - this.tilt) * 0.15;

      // Apply transform
      this.el.style.transform = `translate3d(${this.currentX}px, ${this.currentY}px, 0)`;

      if (this.snitch) {
        this.snitch.style.transform = `rotate(${this.tilt}deg)`;
      }

      if (this.trailDot) {
        const offsetTrailX = this.trailX - this.currentX;
        const offsetTrailY = this.trailY - this.currentY;
        this.trailDot.style.transform = `translate3d(${offsetTrailX}px, ${offsetTrailY}px, 0)`;
      }

      requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  }
}

/* ═══════════════════════════════════════════════
   6. MAIN APP CONTROLLER
   ═══════════════════════════════════════════════ */
class WizardingPortfolioApp {
  constructor() {
    this.audio = new WizardAudio();
    this.currentHouse = 'gryffindor';

    // Elements
    this.header = document.getElementById('main-header');
    this.mobileToggle = document.getElementById('mobile-toggle');
    this.navLinks = document.getElementById('nav-links');
    this.btnSound = document.getElementById('btn-sound');
    this.soundIcon = document.getElementById('sound-icon');
    this.btnLumos = document.getElementById('btn-lumos');
    this.lumosIcon = document.getElementById('lumos-icon');
    this.toast = document.getElementById('toast');
    this.spellFlash = document.getElementById('spell-flash');
    this.typewriterEl = document.getElementById('role-typewriter');
    this.modal = document.getElementById('project-modal');
    this.modalClose = document.getElementById('modal-close');
    this.dialogueEl = document.getElementById('sorting-dialogue');
    this.passportPoints = document.getElementById('passport-points');

    this._initTypewriter();
    this._initSortingHat();
    this._initModal();
    this._initNavScroll();
    this._initOwlPost();
    this._initCardsInteractivity();
    this._initControls();
  }

  /* Dynamic Typewriter */
  _initTypewriter() {
    if (!this.typewriterEl) return;
    const roles = [
      'C++ Systems & Engines',
      'Autonomous Python AI',
      'Cinematic Video & VFX',
      'Interactive 3D Web',
      'Quidditch Seeker'
    ];

    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    const speed = { type: 65, del: 35, pause: 2000 };

    const typeStep = () => {
      const currentRole = roles[roleIdx];
      if (!isDeleting) {
        charIdx++;
        this.typewriterEl.textContent = currentRole.substring(0, charIdx);
        if (charIdx === currentRole.length) {
          isDeleting = true;
          setTimeout(typeStep, speed.pause);
          return;
        }
      } else {
        charIdx--;
        this.typewriterEl.textContent = currentRole.substring(0, charIdx);
        if (charIdx === 0) {
          isDeleting = false;
          roleIdx = (roleIdx + 1) % roles.length;
        }
      }
      setTimeout(typeStep, isDeleting ? speed.del : speed.type);
    };

    typeStep();
  }

  /* Sorting Hat Experience */
  _initSortingHat() {
    const houseButtons = document.querySelectorAll('.house-btn');
    houseButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const selected = btn.dataset.house;
        if (!HOUSE_DATA[selected]) return;

        this.currentHouse = selected;
        this.audio.playSortingFanfare();
        this._flashSpell();

        // Update body class
        document.body.className = `house-${selected}`;

        // Update active button state
        houseButtons.forEach(b => b.classList.remove('active-house'));
        btn.classList.add('active-house');

        // Update dialogue
        if (this.dialogueEl) {
          this.dialogueEl.textContent = HOUSE_DATA[selected].quote;
        }

        // Update passport
        if (this.passportPoints) {
          this.passportPoints.textContent = HOUSE_DATA[selected].points;
        }

        const passportHouse = document.querySelector('.house-highlight');
        if (passportHouse) {
          passportHouse.textContent = HOUSE_DATA[selected].name;
        }

        this._showToast(`🧙 Sorted into ${HOUSE_DATA[selected].name}! ${HOUSE_DATA[selected].crest}`);
      });
    });
  }

  /* Project Blueprint Inspector Modal */
  _initModal() {
    const inspectBtns = document.querySelectorAll('.btn-card-inspect');
    inspectBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.inspect;
        const data = PROJECT_BLUEPRINTS[id];
        if (!data || !this.modal) return;

        this.audio.playWandSwoosh();

        document.getElementById('modal-eyebrow').textContent = data.eyebrow;
        document.getElementById('modal-title').textContent = data.title;
        document.getElementById('modal-desc').textContent = data.desc;

        const tagsContainer = document.getElementById('modal-tags');
        tagsContainer.innerHTML = data.tags.map(t => `<span class="tag">${t}</span>`).join('');

        const highlightsContainer = document.getElementById('modal-highlights');
        highlightsContainer.innerHTML = `<ul>${data.highlights.map(h => `<li>${h}</li>`).join('')}</ul>`;

        const linksContainer = document.getElementById('modal-links');
        linksContainer.innerHTML = data.links.map(l =>
          `<a href="${l.url}" target="_blank" rel="noopener" class="btn-gold-primary">${l.label}</a>`
        ).join('');

        this.modal.hidden = false;
        document.body.style.overflow = 'hidden';
      });
    });

    if (this.modalClose) {
      this.modalClose.addEventListener('click', () => this._closeModal());
    }
    if (this.modal) {
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) this._closeModal();
      });
    }
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal && !this.modal.hidden) {
        this._closeModal();
      }
    });
  }

  _closeModal() {
    if (this.modal) {
      this.modal.hidden = true;
      document.body.style.overflow = '';
    }
  }

  /* Navigation & Smooth Scroll */
  _initNavScroll() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    // Header scroll background toggle
    window.addEventListener('scroll', () => {
      if (this.header) {
        this.header.classList.toggle('scrolled', window.scrollY > 50);
      }
    });

    // IntersectionObserver for active link update
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(link => {
            const href = link.getAttribute('href').replace('#', '');
            link.classList.toggle('active', href === id);
          });
        }
      });
    }, { threshold: 0.3 });

    sections.forEach(s => observer.observe(s));

    // Mobile menu toggle
    if (this.mobileToggle && this.navLinks) {
      this.mobileToggle.addEventListener('click', () => {
        const isOpen = this.navLinks.classList.toggle('open');
        this.mobileToggle.setAttribute('aria-expanded', isOpen);
      });

      this.navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
          this.navLinks.classList.remove('open');
          this.mobileToggle.setAttribute('aria-expanded', 'false');
        });
      });
    }
  }

  /* Owl Post Form Submission */
  _initOwlPost() {
    const form = document.getElementById('owl-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('#sender-name').value.trim();
      const email = form.querySelector('#sender-email').value.trim();
      const subject = form.querySelector('#letter-subject').value.trim();
      const message = form.querySelector('#letter-message').value.trim();

      if (!name || !email || !message) {
        this._showToast('⚠️ Please inscribe all required fields on the scroll.');
        return;
      }

      const btn = document.getElementById('btn-dispatch');
      const text = document.getElementById('dispatch-btn-text');
      btn.disabled = true;
      text.textContent = 'Enchanting Owl Post...';

      this.audio.playOwlPost();
      this._flashSpell();

      setTimeout(() => {
        this._showToast(`🦉 Owl dispatched to Harvender! Expect a swift reply, ${name}.`);
        text.textContent = 'Owl Dispatched! ✉️';
        form.reset();
        setTimeout(() => {
          btn.disabled = false;
          text.textContent = 'Dispatch Owl Post';
        }, 3000);
      }, 1400);
    });
  }

  /* Interactive Cards & 3D Tilt */
  _initCardsInteractivity() {
    // Masteries spells click
    const masteryCards = document.querySelectorAll('.editorial-card');
    masteryCards.forEach(card => {
      card.addEventListener('click', () => {
        this.audio.playSpellChime();
        this._flashSpell();
        const title = card.querySelector('.card-title')?.textContent || 'Spell';
        this._showToast(`✨ Invoked: ${title}`);
      });
    });

    // 3D Tilt on holo-tilt elements
    const tiltElements = document.querySelectorAll('.holo-tilt');
    tiltElements.forEach(el => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const rx = ((y - cy) / cy) * -6;
        const ry = ((x - cx) / cx) * 6;
        el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = '';
      });
    });
  }

  /* Audio & Lumos Controls */
  _initControls() {
    if (this.btnSound) {
      this.btnSound.addEventListener('click', () => {
        const isOn = this.audio.toggle();
        this.soundIcon.textContent = isOn ? '🔊' : '🔇';
        this._showToast(isOn ? '🔊 Sound effects active' : '🔇 Sound effects muted');
      });
    }

    if (this.btnLumos) {
      this.btnLumos.addEventListener('click', () => {
        const isLumos = document.body.classList.toggle('lumos-active');
        this.lumosIcon.textContent = isLumos ? '🌙' : '✨';
        this.audio.playLumos();
        this._flashSpell();
        this._showToast(isLumos ? '✨ Lumos Maxima!' : '🌙 Nox!');
      });
    }
  }

  _showToast(msg) {
    if (!this.toast) return;
    this.toast.textContent = msg;
    this.toast.classList.add('show');
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => {
      this.toast.classList.remove('show');
    }, 3200);
  }

  _flashSpell() {
    if (!this.spellFlash) return;
    this.spellFlash.classList.add('active');
    setTimeout(() => {
      this.spellFlash.classList.remove('active');
    }, 160);
  }
}

/* ═══════════════════════════════════════════════
   7. DOM READY INITIALIZATION
   ═══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  new MagicCanvasEngine('magic-canvas');
  new LiveMovingCursorEngine('live-cursor');
  window.wizardingPortfolio = new WizardingPortfolioApp();
  console.log('%c⚡ Harvender Singh Rawat — Official Wizarding World Portfolio ⚡', 'color:#ffd700; font-weight:bold; font-size:15px;');
  console.log('%c"Draco Dormiens Nunquam Titillandus"', 'color:#d4af37; font-style:italic;');
});
