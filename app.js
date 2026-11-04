/* ============================================================
   HARVENDER SINGH RAWAT — QUIDDITCH PORTFOLIO
   app.js — Vanilla JS Quidditch Engine
   ============================================================ */

'use strict';

/* ═══════════════════════════════════════════════
   1. QUIDDITCH AUDIO ENGINE (Web Audio API)
   ═══════════════════════════════════════════════ */
class QuidditchAudio {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this._init();
  }

  _init() {
    try {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
      this.enabled = false;
    }
  }

  _resume() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  _osc(freq, type, gain, duration, startTime) {
    if (!this.ctx || !this.enabled) return;
    this._resume();
    const t = startTime || this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const vol = this.ctx.createGain();
    osc.connect(vol);
    vol.connect(this.ctx.destination);
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);
    vol.gain.setValueAtTime(0, t);
    vol.gain.linearRampToValueAtTime(gain, t + 0.02);
    vol.gain.exponentialRampToValueAtTime(0.0001, t + duration);
    osc.start(t);
    osc.stop(t + duration + 0.05);
  }

  swoosh() {
    if (!this.ctx || !this.enabled) return;
    this._resume();
    const t = this.ctx.currentTime;
    const buf = this.ctx.createBuffer(1, this.ctx.sampleRate * 0.4, this.ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
    }
    const src = this.ctx.createBufferSource();
    src.buffer = buf;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1200, t);
    filter.frequency.exponentialRampToValueAtTime(300, t + 0.4);
    filter.Q.value = 2;
    const vol = this.ctx.createGain();
    vol.gain.setValueAtTime(0.15, t);
    vol.gain.exponentialRampToValueAtTime(0.0001, t + 0.4);
    src.connect(filter);
    filter.connect(vol);
    vol.connect(this.ctx.destination);
    src.start(t);
  }

  snitchCatch() {
    if (!this.ctx || !this.enabled) return;
    this._resume();
    const t = this.ctx.currentTime;
    const freqs = [523, 659, 784, 1047, 1319, 1568];
    freqs.forEach((f, i) => {
      this._osc(f, 'sine', 0.3, 0.3, t + i * 0.08);
    });
  }

  spellCast() {
    if (!this.ctx || !this.enabled) return;
    this._resume();
    const t = this.ctx.currentTime;
    this._osc(220, 'sawtooth', 0.08, 0.5, t);
    this._osc(440, 'sine', 0.12, 0.3, t + 0.1);
    this._osc(880, 'sine', 0.08, 0.2, t + 0.2);
  }

  lumos() {
    if (!this.ctx || !this.enabled) return;
    this._resume();
    const t = this.ctx.currentTime;
    this._osc(880, 'sine', 0.1, 0.4, t);
    this._osc(1760, 'sine', 0.05, 0.3, t + 0.1);
  }

  owlPost() {
    if (!this.ctx || !this.enabled) return;
    this._resume();
    const t = this.ctx.currentTime;
    const pattern = [[400, 0], [500, 0.15], [400, 0.3], [600, 0.5], [400, 0.65]];
    pattern.forEach(([f, delay]) => {
      this._osc(f, 'sine', 0.12, 0.12, t + delay);
    });
  }

  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }
}

/* ═══════════════════════════════════════════════
   2. HOGWARTS PITCH CANVAS (Stars + Particles)
   ═══════════════════════════════════════════════ */
class QuidditchPitchCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.stars = [];
    this.particles = [];
    this.mouseX = window.innerWidth / 2;
    this.mouseY = window.innerHeight / 2;
    this._resize();
    this._initStars();
    this._bindEvents();
    this._loop();
  }

  _resize() {
    if (!this.canvas) return;
    this.canvas.width  = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  _initStars() {
    this.stars = [];
    const count = Math.floor((this.canvas.width * this.canvas.height) / 6000);
    for (let i = 0; i < count; i++) {
      this.stars.push({
        x:    Math.random() * this.canvas.width,
        y:    Math.random() * this.canvas.height,
        r:    Math.random() * 1.5 + 0.3,
        a:    Math.random(),
        da:   (Math.random() - 0.5) * 0.008,
        gold: Math.random() < 0.08,
      });
    }
  }

  _bindEvents() {
    window.addEventListener('resize', () => {
      this._resize();
      this._initStars();
    });
    window.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
      if (Math.random() < 0.25) {
        this._spawnSpark(e.clientX, e.clientY);
      }
    });
  }

  _spawnSpark(x, y) {
    const count = 2 + Math.floor(Math.random() * 3);
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x, y,
        vx: (Math.random() - 0.5) * 2.5,
        vy: (Math.random() - 0.5) * 2.5 - 1,
        alpha: 0.8,
        r: Math.random() * 2 + 1,
        gold: Math.random() < 0.6,
      });
    }
  }

  _drawBackground() {
    const grad = this.ctx.createRadialGradient(
      this.canvas.width * 0.5, this.canvas.height * 0.3, 0,
      this.canvas.width * 0.5, this.canvas.height * 0.5, this.canvas.width * 0.9
    );
    grad.addColorStop(0, '#0a0f1f');
    grad.addColorStop(0.5, '#070914');
    grad.addColorStop(1, '#050810');
    this.ctx.fillStyle = grad;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  _drawStars() {
    this.stars.forEach(s => {
      s.a += s.da;
      if (s.a < 0.1 || s.a > 1) s.da *= -1;
      s.a = Math.max(0.1, Math.min(1, s.a));
      this.ctx.beginPath();
      this.ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      this.ctx.fillStyle = s.gold
        ? `rgba(238,186,48,${s.a * 0.9})`
        : `rgba(255,255,255,${s.a})`;
      this.ctx.fill();
    });
  }

  _drawGoldenDust() {
    const time = Date.now() * 0.001;
    const count = 5;
    for (let i = 0; i < count; i++) {
      const angle = (time * 0.3 + (i * Math.PI * 2) / count);
      const radius = 60 + Math.sin(time + i) * 20;
      const px = this.mouseX + Math.cos(angle) * radius;
      const py = this.mouseY + Math.sin(angle) * radius;
      const grad = this.ctx.createRadialGradient(px, py, 0, px, py, 6);
      grad.addColorStop(0, 'rgba(238,186,48,0.6)');
      grad.addColorStop(1, 'rgba(238,186,48,0)');
      this.ctx.beginPath();
      this.ctx.arc(px, py, 6, 0, Math.PI * 2);
      this.ctx.fillStyle = grad;
      this.ctx.fill();
    }
  }

  _drawParticles() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= 0.025;
      p.vy -= 0.05;
      if (p.alpha <= 0) { this.particles.splice(i, 1); continue; }
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      this.ctx.fillStyle = p.gold
        ? `rgba(238,186,48,${p.alpha})`
        : `rgba(255,255,255,${p.alpha})`;
      this.ctx.fill();
    }
  }

  _loop() {
    this._drawBackground();
    this._drawStars();
    this._drawGoldenDust();
    this._drawParticles();
    requestAnimationFrame(() => this._loop());
  }
}

/* ═══════════════════════════════════════════════
   3. FLYING BROOM FLIGHT CONTROLLER
   ═══════════════════════════════════════════════ */
class FlyingBroomFlightController {
  constructor(audio) {
    this.el = document.getElementById('flying-broom-character');
    this.speechEl = document.getElementById('broom-speech-text');
    this.speedFill = document.getElementById('hud-speed-fill');
    this.speedVal  = document.getElementById('hud-speed-val');
    this.audio = audio;
    this.mouseX = 0;
    this.mouseY = 0;
    this.scrollY = 0;
    this.targetX = 0;
    this.targetY = 0;
    this.currentX = 0;
    this.currentY = 0;
    this.speed = 0;
    this.isDiving = false;

    this.hoopCallouts = {
      hero:         "Seeking glory on the Quidditch pitch! 🏆",
      skills:       "Accio Spellbook! Mastering the arcane arts... ✨",
      projects:     "Match records sealed in dragon-hide parchment! ⚡",
      languages:    "Speaking in tongues — Parseltongue included! 🐍",
      achievements: "Trophy room, straight ahead! 🏆",
      squad:        "Calling all teammates — Accio squad! 🧙",
      contact:      "Owl dispatched. Awaiting your reply... 🦉",
    };

    if (this.el) {
      this._bindEvents();
      this._loop();
    }
  }

  _bindEvents() {
    document.addEventListener('mousemove', (e) => {
      const rect = { w: window.innerWidth, h: window.innerHeight };
      this.targetX = (e.clientX / rect.w - 0.5) * 20;
      this.targetY = (e.clientY / rect.h - 0.5) * -12;
    });

    window.addEventListener('scroll', () => {
      const sy = window.scrollY;
      const delta = Math.abs(sy - this.scrollY);
      this.speed = Math.min(100, delta * 2);
      this.scrollY = sy;

      if (delta > 30 && !this.isDiving) {
        this.isDiving = true;
        this.el.classList.add('dive-mode');
        this.audio.swoosh();
        clearTimeout(this._diveTimer);
        this._diveTimer = setTimeout(() => {
          this.isDiving = false;
          this.el.classList.remove('dive-mode');
        }, 800);
      }
    });
  }

  setSectionCallout(sectionId) {
    if (!this.speechEl) return;
    const msg = this.hoopCallouts[sectionId];
    if (msg) {
      this.speechEl.textContent = msg;
    }
  }

  _updateHUD() {
    if (this.speedFill) {
      this.speedFill.style.width = this.speed + '%';
    }
    if (this.speedVal) {
      const mph = Math.round(this.speed * 1.5);
      this.speedVal.textContent = mph + ' mph';
    }
    this.speed = Math.max(0, this.speed - 2);
  }

  _loop() {
    this.currentX += (this.targetX - this.currentX) * 0.08;
    this.currentY += (this.targetY - this.currentY) * 0.08;
    if (this.el && !this.isDiving) {
      this.el.style.transform = `translate(${this.currentX * 0.5}px, ${this.currentY * 0.5}px) rotate(${this.currentX * 0.3}deg)`;
    }
    this._updateHUD();
    requestAnimationFrame(() => this._loop());
  }
}

/* ═══════════════════════════════════════════════
   4. GOLDEN SNITCH GAME
   ═══════════════════════════════════════════════ */
class GoldenSnitchGame {
  constructor(audio) {
    this.el = document.getElementById('golden-snitch');
    this.gryffScore = document.getElementById('gryffindor-score');
    this.promixityFill = document.getElementById('snitch-prox-fill');
    this.audio = audio;
    this.score = 0;
    this.posX = 20;
    this.posY = 20;
    this.velX = 0.3;
    this.velY = 0.2;
    this.mouseX = 0;
    this.mouseY = 0;
    this.caught = false;
    this.t = 0;

    if (!this.el) return;
    this._bindEvents();
    this._loop();
  }

  _bindEvents() {
    document.addEventListener('mousemove', (e) => {
      this.mouseX = (e.clientX / window.innerWidth) * 100;
      this.mouseY = (e.clientY / window.innerHeight) * 100;
    });

    this.el.addEventListener('click', () => this._catch());
    this.el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') this._catch();
    });
  }

  _catch() {
    if (this.caught) return;
    this.caught = true;
    this.score += 150;
    if (this.gryffScore) this.gryffScore.textContent = this.score;
    this.audio.snitchCatch();
    showToast('⚡ SNITCH CAUGHT! +150 for Gryffindor!');
    flashSpell();

    this.el.style.transform = 'scale(2.5)';
    this.el.style.opacity = '0';
    this.el.style.transition = 'transform 0.5s, opacity 0.5s';

    setTimeout(() => {
      this.caught = false;
      this.posX = Math.random() * 80 + 5;
      this.posY = Math.random() * 60 + 5;
      this.el.style.transform = '';
      this.el.style.opacity = '1';
      this.el.style.transition = '';
      showToast('The Snitch has escaped! 👀');
    }, 2500);
  }

  _flee() {
    const dx = this.mouseX - this.posX;
    const dy = this.mouseY - this.posY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 15) {
      const angle = Math.atan2(dy, dx);
      this.posX -= Math.cos(angle) * 1.5;
      this.posY -= Math.sin(angle) * 1.5;
    }
    if (this.promixityFill) {
      const prox = Math.max(0, 100 - dist * 3);
      this.promixityFill.style.width = prox + '%';
    }
  }

  _loop() {
    if (!this.caught) {
      this.t += 0.015;
      this.posX = 50 + Math.sin(this.t * 1.3) * 35 + Math.sin(this.t * 2.7) * 10;
      this.posY = 30 + Math.cos(this.t * 1.1) * 25 + Math.cos(this.t * 3.3) * 8;
      this.posX = Math.max(5, Math.min(90, this.posX));
      this.posY = Math.max(10, Math.min(85, this.posY));
      this._flee();
      if (this.el) {
        this.el.style.left = this.posX + 'vw';
        this.el.style.top  = this.posY + 'vh';
        this.el.style.position = 'fixed';
      }
    }
    requestAnimationFrame(() => this._loop());
  }
}

/* ═══════════════════════════════════════════════
   5. QUIDDITCH SQUAD ROSTER
   ═══════════════════════════════════════════════ */
class QuidditchSquadRoster {
  constructor() {
    this.container = document.getElementById('squad-roster');
    this.btnSummon = document.getElementById('btn-summon');
    this.btnReset  = document.getElementById('btn-reset-squad');

    this.initialRoster = [
      { name: 'Harry Potter',   position: 'Seeker',  avatar: '⚡' },
      { name: 'Ron Weasley',    position: 'Keeper',  avatar: '🧡' },
      { name: 'Hermione',       position: 'Chaser',  avatar: '📚' },
      { name: 'Fred Weasley',   position: 'Beater',  avatar: '😄' },
      { name: 'George Weasley', position: 'Beater',  avatar: '😄' },
      { name: 'Ginny Weasley',  position: 'Chaser',  avatar: '🔥' },
      { name: 'Oliver Wood',    position: 'Captain', avatar: '🏆' },
    ];

    this.bench = [
      { name: 'Neville Longbottom', position: 'Reserve Chaser', avatar: '🌱' },
      { name: 'Luna Lovegood',      position: 'Reserve Seeker', avatar: '🌙' },
      { name: 'Dean Thomas',        position: 'Reserve Chaser', avatar: '⚽' },
      { name: 'Seamus Finnigan',    position: 'Reserve Beater', avatar: '💥' },
      { name: 'Lee Jordan',         position: 'Commentator',    avatar: '🎙️' },
    ];

    this.currentRoster = [...this.initialRoster];
    this.currentBench  = [...this.bench];

    if (this.container) {
      this._render();
      this._bindEvents();
    }
  }

  _render() {
    if (!this.container) return;
    this.container.innerHTML = this.currentRoster.map(m => `
      <div class="squad-member-card" role="listitem">
        <div class="squad-avatar">${m.avatar}</div>
        <div class="squad-name">${m.name}</div>
        <div class="squad-position">${m.position}</div>
      </div>
    `).join('');
  }

  _bindEvents() {
    if (this.btnSummon) {
      this.btnSummon.addEventListener('click', () => {
        if (this.currentBench.length === 0) {
          showToast('No more players on the bench! 🏟️');
          return;
        }
        const idx = Math.floor(Math.random() * this.currentBench.length);
        const player = this.currentBench.splice(idx, 1)[0];
        this.currentRoster.push(player);
        this._render();
        showToast(`${player.avatar} ${player.name} joins the squad!`);
      });
    }
    if (this.btnReset) {
      this.btnReset.addEventListener('click', () => {
        this.currentRoster = [...this.initialRoster];
        this.currentBench  = [...this.bench];
        this._render();
        showToast('Squad reset to original lineup! 🔄');
      });
    }
  }
}

/* ═══════════════════════════════════════════════
   6. PARCHMENT MODAL INSPECTOR
   ═══════════════════════════════════════════════ */
class ParchmentModalInspector {
  constructor(audio) {
    this.modal     = document.getElementById('parchment-modal');
    this.closeBtn  = document.getElementById('modal-close');
    this.audio     = audio;

    this.projects = {
      p1: {
        eyebrow: '⚡ Match #001 — Systems',
        title:   'C++ Raytracer Engine',
        tags:    ['C++', 'OpenGL', 'BVH', 'Physics', 'Rendering'],
        desc:    'A physics-accurate raytracer built entirely from scratch in modern C++. Implements Whitted-style ray tracing with Monte Carlo global illumination, BVH acceleration structures, and multiple material models (diffuse, metallic, dielectric, emissive).',
        highlights: [
          'BVH acceleration cutting render time by 80% over naive approach',
          'Support for point, area, and directional light sources',
          'Physically-based material system with Fresnel equations',
          'Multi-threaded rendering with SIMD optimisations',
          'OBJ mesh loading and procedural geometry',
        ],
        links: [{ label: '⚙️ GitHub', url: 'https://github.com/harvender-rawat', style: 'primary' }],
      },
      p2: {
        eyebrow: '⚡ Match #002 — AI',
        title:   'Python AI Agent',
        tags:    ['Python', 'LLM', 'FastAPI', 'Tool Calling', 'Automation'],
        desc:    'An autonomous LLM-powered agent with tool-calling, persistent memory, and self-correction capabilities. Processes long documents, answers complex multi-hop queries, and executes multi-step tasks with minimal supervision.',
        highlights: [
          'Implements ReAct (Reasoning + Acting) loop for autonomous decision making',
          'Custom tool registry with dynamic tool registration',
          'Vector-store memory for long-term context retrieval',
          'Self-correction loop that retries on tool failure',
          'FastAPI REST interface for integration with external systems',
        ],
        links: [{ label: '⚙️ GitHub', url: 'https://github.com/harvender-rawat', style: 'primary' }],
      },
      p3: {
        eyebrow: '⚡ Match #003 — Cinema',
        title:   'Cinematic Showreel',
        tags:    ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'VFX', 'Color Grading'],
        desc:    'A curated collection of cinematic edits demonstrating professional video production skills. Covers narrative short films, promotional content, and motion graphics packages — all graded and composited at professional broadcast standard.',
        highlights: [
          'Award-worthy color grading in DaVinci Resolve with node-based workflows',
          'Custom After Effects motion graphics templates with expressions',
          'VFX compositing with green screen keying and 3D camera tracking',
          'Multi-camera live event editing with sync and audio mastering',
          'End-to-end delivery pipeline from raw footage to broadcast-ready master',
        ],
        links: [],
      },
      p4: {
        eyebrow: '⚡ Match #004 — Web',
        title:   '3D Interactive Web Engine',
        tags:    ['Three.js', 'WebGL', 'GLSL', 'JavaScript', 'Particle Systems'],
        desc:    'A real-time 3D scene engine running entirely in the browser. Features a custom GLSL shader pipeline, GPU-accelerated particle systems, physics-based animation, and an interactive scene editor — all built with vanilla Three.js and WebGL.',
        highlights: [
          'Custom GLSL vertex and fragment shaders for procedural effects',
          'GPU particle system handling 100k+ particles at 60fps',
          'Post-processing stack: bloom, DOF, chromatic aberration',
          'Interactive 3D scene editor with orbit controls and object picker',
          'Deferred rendering pipeline for real-time dynamic shadows',
        ],
        links: [{ label: '⚙️ GitHub', url: 'https://github.com/harvender-rawat', style: 'primary' }],
      },
    };

    if (this.modal) this._bindEvents();
  }

  _open(projectId) {
    const data = this.projects[projectId];
    if (!data || !this.modal) return;
    this.audio.spellCast();
    document.getElementById('modal-eyebrow').textContent = data.eyebrow;
    document.getElementById('modal-title').textContent   = data.title;
    document.getElementById('modal-desc').textContent    = data.desc;

    const tagsEl = document.getElementById('modal-tags');
    tagsEl.innerHTML = data.tags.map(t => `<span class="tag">${t}</span>`).join('');

    const hlEl = document.getElementById('modal-highlights');
    hlEl.innerHTML = `<ul>${data.highlights.map(h => `<li>${h}</li>`).join('')}</ul>`;

    const linksEl = document.getElementById('modal-links');
    linksEl.innerHTML = data.links.map(l =>
      `<a href="${l.url}" target="_blank" rel="noopener" class="modal-link modal-link-${l.style}">${l.label}</a>`
    ).join('');

    this.modal.hidden = false;
    document.body.style.overflow = 'hidden';
    this.closeBtn.focus();
  }

  _close() {
    if (!this.modal) return;
    this.modal.hidden = true;
    document.body.style.overflow = '';
  }

  _bindEvents() {
    document.querySelectorAll('.project-parchment-card').forEach(card => {
      card.addEventListener('click', () => this._open(card.dataset.projectId));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this._open(card.dataset.projectId);
        }
      });
    });

    this.closeBtn.addEventListener('click', () => this._close());
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) this._close();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !this.modal.hidden) this._close();
    });
  }
}

/* ═══════════════════════════════════════════════
   7. UTILITY FUNCTIONS
   ═══════════════════════════════════════════════ */
function showToast(msg) {
  const toast = document.getElementById('quidditch-toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 3000);
}

function flashSpell() {
  const el = document.getElementById('spell-flash');
  if (!el) return;
  el.classList.add('active');
  setTimeout(() => el.classList.remove('active'), 200);
}

/* ═══════════════════════════════════════════════
   8. SCROLL OBSERVER — SECTION IN-VIEW + MINIMAP
   ═══════════════════════════════════════════════ */
function setupScrollObserver(broom) {
  const sections = document.querySelectorAll('.flight-section');
  const hoopDots = document.querySelectorAll('.hoop-dot');
  const navLinks = document.querySelectorAll('.nav-link');
  const header   = document.getElementById('main-header');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        const id = entry.target.id;

        hoopDots.forEach(d => d.classList.toggle('active', d.dataset.target === id));
        navLinks.forEach(l => {
          const href = l.getAttribute('href').replace('#', '');
          l.classList.toggle('active', href === id);
        });

        if (broom) broom.setSectionCallout(id);
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(s => observer.observe(s));

  window.addEventListener('scroll', () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 60);
  });
}

/* ═══════════════════════════════════════════════
   9. MINIMAP CLICK NAV
   ═══════════════════════════════════════════════ */
function setupMinimapNav() {
  document.querySelectorAll('.hoop-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      const target = document.getElementById(dot.dataset.target);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

/* ═══════════════════════════════════════════════
   10. HUD CONTROLS (SFX + Lumos)
   ═══════════════════════════════════════════════ */
function setupHudControls(audio) {
  const btnSfx   = document.getElementById('btn-sfx');
  const btnLumos = document.getElementById('btn-lumos');

  if (btnSfx) {
    btnSfx.addEventListener('click', () => {
      const on = audio.toggle();
      btnSfx.querySelector('.btn-icon').textContent = on ? '🔊' : '🔇';
      btnSfx.classList.toggle('active', !on);
      showToast(on ? '🔊 Sound ON' : '🔇 Sound OFF');
    });
  }

  if (btnLumos) {
    btnLumos.addEventListener('click', () => {
      const isLumos = document.body.classList.toggle('lumos-mode');
      btnLumos.querySelector('.btn-icon').textContent = isLumos ? '🌙' : '✨';
      btnLumos.classList.toggle('active', isLumos);
      audio.lumos();
      showToast(isLumos ? '✨ Lumos Maxima!' : '🌙 Nox!');
    });
  }

  document.querySelectorAll('.spell-card').forEach(card => {
    card.addEventListener('click', () => {
      audio.spellCast();
      flashSpell();
    });
  });
}

/* ═══════════════════════════════════════════════
   11. TYPING ANIMATION
   ═══════════════════════════════════════════════ */
function setupTypingAnimation() {
  const el = document.getElementById('typewriter-text');
  if (!el) return;

  const phrases = [
    'C++ Sorcerer',
    'Python Alchemist',
    'Cinematic Auteur',
    '3D Web Architect',
    'Quidditch Seeker',
    'AI Conjurer',
  ];

  let phraseIdx = 0;
  let charIdx   = 0;
  let deleting  = false;
  const speed   = { type: 70, delete: 40, pause: 1800 };

  function tick() {
    const phrase = phrases[phraseIdx];
    if (!deleting) {
      charIdx++;
      el.textContent = phrase.substring(0, charIdx);
      if (charIdx === phrase.length) {
        deleting = true;
        setTimeout(tick, speed.pause);
        return;
      }
    } else {
      charIdx--;
      el.textContent = phrase.substring(0, charIdx);
      if (charIdx === 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
      }
    }
    setTimeout(tick, deleting ? speed.delete : speed.type);
  }

  tick();
}

/* ═══════════════════════════════════════════════
   12. OWL POST FORM
   ═══════════════════════════════════════════════ */
function setupOwlPostForm(audio) {
  const form = document.getElementById('owl-post-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('#contact-name').value.trim();
    const email = form.querySelector('#contact-email').value.trim();
    const message = form.querySelector('#contact-message').value.trim();

    if (!name || !email || !message) {
      showToast('⚠️ Please fill in all required fields!');
      return;
    }

    const btnText = form.querySelector('.btn-owl-text');
    const btnIcon = form.querySelector('.btn-owl-icon');
    btnIcon.textContent = '🕊️';
    btnText.textContent = 'Sending...';
    audio.owlPost();
    flashSpell();

    setTimeout(() => {
      showToast(`🦉 Owl dispatched to ${email}! Rocky will respond soon.`);
      btnIcon.textContent = '✅';
      btnText.textContent = 'Owl Sent!';
      form.reset();
      setTimeout(() => {
        btnIcon.textContent = '🦉';
        btnText.textContent = 'Send Owl';
      }, 3000);
    }, 1600);
  });
}

/* ═══════════════════════════════════════════════
   13. MOBILE MENU
   ═══════════════════════════════════════════════ */
function setupMobileMenu() {
  const btn   = document.getElementById('mobile-menu-btn');
  const links = document.getElementById('nav-links');
  if (!btn || !links) return;

  btn.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });

  links.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ═══════════════════════════════════════════════
   14. DIVE BUTTON
   ═══════════════════════════════════════════════ */
function setupDiveButton(audio) {
  const btn = document.getElementById('btn-dive');
  if (!btn) return;
  btn.addEventListener('click', () => {
    audio.swoosh();
    const target = document.getElementById('skills');
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

/* ═══════════════════════════════════════════════
   15. HOLO TILT 3D EFFECT
   ═══════════════════════════════════════════════ */
function setupHoloTilt() {
  document.querySelectorAll('.holo-tilt').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top  + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width  / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      const tiltX = dy * -8;
      const tiltY = dx *  8;
      card.style.transform = `perspective(600px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* ═══════════════════════════════════════════════
   16. PROGRESS BAR ANIMATION ON SCROLL
   ═══════════════════════════════════════════════ */
function setupProgressBars() {
  const bars = document.querySelectorAll('.spell-power-fill, .lang-fill, .gauge-fill');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.transitionDelay = '0.2s';
      }
    });
  }, { threshold: 0.3 });
  bars.forEach(b => obs.observe(b));
}

/* ═══════════════════════════════════════════════
   17. BOOT — DOM READY
   ═══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  // Core systems
  const audio  = new QuidditchAudio();
  new QuidditchPitchCanvas('quidditch-canvas');

  // Flight controller
  const broom  = new FlyingBroomFlightController(audio);

  // Snitch game
  new GoldenSnitchGame(audio);

  // Squad
  new QuidditchSquadRoster();

  // Project modals
  new ParchmentModalInspector(audio);

  // UI setup
  setupScrollObserver(broom);
  setupMinimapNav();
  setupHudControls(audio);
  setupTypingAnimation();
  setupOwlPostForm(audio);
  setupMobileMenu();
  setupDiveButton(audio);
  setupHoloTilt();
  setupProgressBars();

  // Initial toast
  setTimeout(() => showToast('🏆 Welcome to Rocky\'s Quidditch Pitch! Catch the Snitch! ✨'), 1200);

  // Trigger hero animation immediately
  const heroSection = document.getElementById('hero');
  if (heroSection) {
    setTimeout(() => heroSection.classList.add('in-view'), 300);
  }

  console.log('%c⚡ Quidditch Portfolio — Harvender Singh Rawat ⚡', 'color:#eeba30;font-size:16px;font-weight:bold;');
  console.log('%cGryffindor House | Seeker of Bugs & Opportunities', 'color:#ae0001;');
});
