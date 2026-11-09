/* ============================================================
   HARVENDER SINGH RAWAT — 3D MAGICAL BOOK PORTFOLIO
   app.js — 3D Physics Engine, Organic Page Flips & Audio
   ============================================================ */

'use strict';

/* ═══════════════════════════════════════════════
   1. REALISTIC AUDIO SYNTHESIZER (Web Audio API)
   ═══════════════════════════════════════════════ */
class BookAudio {
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

  /* Multi-stage organic parchment page turn */
  playPageTurn() {
    if (!this.enabled) return;
    this._init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const sampleRate = this.ctx.sampleRate;
    const dur = 0.42;

    // 1. Friction burst: Initial parchment lift & slide rustle
    const buf = this.ctx.createBuffer(1, sampleRate * dur, sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      const progress = i / data.length;
      const envelope = Math.sin(progress * Math.PI);
      data[i] = (Math.random() * 2 - 1) * Math.pow(envelope, 1.6);
    }
    const src = this.ctx.createBufferSource();
    src.buffer = buf;

    // Resonant bandpass filter sweeps through air resistance
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(800, t);
    filter.frequency.exponentialRampToValueAtTime(3200, t + 0.16);
    filter.frequency.exponentialRampToValueAtTime(600, t + dur);
    filter.Q.setValueAtTime(2.4, t);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(0.28, t + 0.06);
    gain.gain.exponentialRampToValueAtTime(0.001, t + dur);

    src.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);
    src.start(t);

    // 2. Heavy 180gsm parchment drop / settle double-slap
    const slapOsc = this.ctx.createOscillator();
    const slapGain = this.ctx.createGain();
    slapOsc.type = 'triangle';
    slapOsc.frequency.setValueAtTime(160, t + 0.18);
    slapOsc.frequency.exponentialRampToValueAtTime(40, t + 0.38);

    slapGain.gain.setValueAtTime(0, t + 0.18);
    slapGain.gain.linearRampToValueAtTime(0.18, t + 0.22);
    slapGain.gain.exponentialRampToValueAtTime(0.001, t + 0.4);

    slapOsc.connect(slapGain);
    slapGain.connect(this.ctx.destination);
    slapOsc.start(t + 0.18);
    slapOsc.stop(t + 0.42);
  }

  /* Book opening creak and flutter */
  playBookOpen() {
    if (!this.enabled) return;
    this._init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    // Low resonant leather creak
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(110, t);
    osc.frequency.exponentialRampToValueAtTime(45, t + 0.45);
    gain.gain.setValueAtTime(0.15, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.5);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(400, t);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(t);
    osc.stop(t + 0.52);

    setTimeout(() => this.playPageTurn(), 140);
  }

  /* Book closing heavy thud */
  playBookClose() {
    if (!this.enabled) return;
    this._init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(140, t);
    osc.frequency.exponentialRampToValueAtTime(32, t + 0.38);
    gain.gain.setValueAtTime(0.4, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.42);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(t);
    osc.stop(t + 0.45);
  }

  /* Golden Snitch catch fanfare */
  playSnitchCatch() {
    if (!this.enabled) return;
    this._init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const freqs = [523.25, 659.25, 783.99, 1046.5, 1318.5]; // C5, E5, G5, C6, E6
    freqs.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t + i * 0.07);
      gain.gain.setValueAtTime(0.2, t + i * 0.07);
      gain.gain.exponentialRampToValueAtTime(0.001, t + i * 0.07 + 0.45);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t + i * 0.07);
      osc.stop(t + i * 0.07 + 0.5);
    });
  }

  /* Feather quill scratch when typing in scroll */
  playQuillScratch() {
    if (!this.enabled) return;
    this._init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const dur = 0.06;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(1800 + Math.random() * 800, t);
    osc.frequency.exponentialRampToValueAtTime(800 + Math.random() * 400, t + dur);

    gain.gain.setValueAtTime(0.04, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + dur);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(t);
    osc.stop(t + dur + 0.01);
  }

  /* Spell incantation chime */
  playSpellChime() {
    if (!this.enabled) return;
    this._init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, t);
    osc.frequency.exponentialRampToValueAtTime(1760, t + 0.25);
    gain.gain.setValueAtTime(0.18, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.4);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(t);
    osc.stop(t + 0.42);
  }
}

/* ═══════════════════════════════════════════════
   2. AMBIENT PARTICLES (GOLDEN DUST CANVAS)
   ═══════════════════════════════════════════════ */
class AmbientDustEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.numParticles = 45;
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this._resize();
    this._initParticles();
    this._bindEvents();
    this._animate();
  }

  _resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  _initParticles() {
    this.particles = [];
    for (let i = 0; i < this.numParticles; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        radius: Math.random() * 1.8 + 0.4,
        alpha: Math.random() * 0.7 + 0.2,
        speedX: (Math.random() - 0.5) * 0.35,
        speedY: -Math.random() * 0.45 - 0.1, // Drifting gently upwards
        gold: Math.random() > 0.3
      });
    }
  }

  _bindEvents() {
    window.addEventListener('resize', () => {
      this._resize();
      this._initParticles();
    });
  }

  _animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.y < -10) {
        p.y = this.height + 10;
        p.x = Math.random() * this.width;
      }
      if (p.x < -10) p.x = this.width + 10;
      if (p.x > this.width + 10) p.x = -10;

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = p.gold
        ? `rgba(255, 215, 0, ${p.alpha * 0.85})`
        : `rgba(255, 240, 200, ${p.alpha * 0.6})`;
      this.ctx.shadowBlur = 6;
      this.ctx.shadowColor = 'rgba(255, 215, 0, 0.5)';
      this.ctx.fill();
      this.ctx.shadowBlur = 0;
    }

    requestAnimationFrame(() => this._animate());
  }
}

/* ═══════════════════════════════════════════════
   3. PORTFOLIO PAGES DATA (6 SPREADS / 12 PAGES)
   ═══════════════════════════════════════════════ */
const PORTFOLIO_SPREADS = [
  /* ——— SPREAD 0: FRONTISPIECE & TABLE OF CONTENTS ——— */
  {
    left: `
      <div class="page-header">
        <span class="page-chapter">Frontispiece</span>
        <span class="page-folio">Folio I</span>
      </div>
      <div class="frontispiece-hero">
        <div class="avatar-frame">
          <img src="assets/images/quidditch_seeker_avatar.jpg" alt="Harvender Singh Rawat — Gryffindor Seeker" />
        </div>
        <h1 class="hero-p-name">Harvender Singh Rawat</h1>
        <div class="hero-p-subtitle">C++ Systems · Python AI · Video · Web</div>
        <div class="hero-badges-row">
          <span class="hero-badge-pill">🦁 Gryffindor Seeker</span>
          <span class="hero-badge-pill">📍 India · Open to Remote</span>
        </div>
        <p class="hero-p-bio">
          Welcome to my grimoire. As a passionate developer and creator, I weave together
          high-performance C++ systems, autonomous Python intelligence, cinematic video storytelling,
          and interactive 3D web applications.
        </p>
      </div>
    `,
    right: `
      <div class="page-header">
        <span class="page-chapter">Index</span>
        <span class="page-folio">Folio II</span>
      </div>
      <h2 class="page-title">Table of Contents</h2>
      <p style="font-size:0.85rem; color:var(--ink-secondary); margin-bottom:1rem;">
        Click any chapter to turn directly to its folio:
      </p>
      <div class="toc-list">
        <a href="#spread-1" class="toc-item" data-spread="1">
          <span class="toc-title">I. The Seeker's Journey & Ethos</span>
          <span class="toc-dots"></span>
          <span class="toc-num">Folio III</span>
        </a>
        <a href="#spread-1" class="toc-item" data-spread="1">
          <span class="toc-title">II. Mastered Spells (Core Skills)</span>
          <span class="toc-dots"></span>
          <span class="toc-num">Folio IV</span>
        </a>
        <a href="#spread-2" class="toc-item" data-spread="2">
          <span class="toc-title">III. C++ Raytracer & Physics</span>
          <span class="toc-dots"></span>
          <span class="toc-num">Folio V</span>
        </a>
        <a href="#spread-2" class="toc-item" data-spread="2">
          <span class="toc-title">IV. Python Autonomous AI Agent</span>
          <span class="toc-dots"></span>
          <span class="toc-num">Folio VI</span>
        </a>
        <a href="#spread-3" class="toc-item" data-spread="3">
          <span class="toc-title">V. Cinematic Showreel & 3D Web</span>
          <span class="toc-dots"></span>
          <span class="toc-num">Folio VII</span>
        </a>
        <a href="#spread-4" class="toc-item" data-spread="4">
          <span class="toc-title">VI. Tongues, Dialects & Trophies</span>
          <span class="toc-dots"></span>
          <span class="toc-num">Folio IX</span>
        </a>
        <a href="#spread-5" class="toc-item" data-spread="5">
          <span class="toc-title">VII. Owl Post & Transmissions</span>
          <span class="toc-dots"></span>
          <span class="toc-num">Folio XI</span>
        </a>
      </div>
      <div style="margin-top:auto; font-size:0.75rem; color:var(--ink-muted); text-align:center;">
        ⚡ Tip: Scroll with mouse wheel or drag bottom corner to turn pages.
      </div>
    `
  },

  /* ——— SPREAD 1: ABOUT & MASTERED SPELLS (SKILLS) ——— */
  {
    left: `
      <div class="page-header">
        <span class="page-chapter">Chapter I</span>
        <span class="page-folio">Folio III</span>
      </div>
      <h2 class="page-title">The Seeker's Ethos</h2>
      <div style="display:flex; flex-direction:column; gap:0.9rem; font-size:0.88rem; line-height:1.6; color:var(--ink-secondary);">
        <p>
          In Quidditch, a Seeker’s role demands laser focus, relentless agility, and an instinct for spotting
          the tiniest golden glimmer in the vast expanse of the pitch. That exact mindset drives my work in software.
        </p>
        <div style="background:rgba(212,175,55,0.12); border-left:3px solid var(--gold); padding:0.6rem 0.8rem; border-radius:0 6px 6px 0;">
          <strong style="color:var(--crimson-dark);">Core Philosophy:</strong>
          <span style="font-size:0.83rem;">
            Whether optimizing a low-level graphics pipeline or orchestrating multi-agent LLM reasoning loops,
            performance and elegance must coexist seamlessly.
          </span>
        </div>
        <p>
          With a strong academic and practical foundation across systems programming and modern machine learning,
          I construct applications that are robust under pressure and delightful to experience.
        </p>
        <div style="display:flex; gap:0.6rem; margin-top:0.3rem;">
          <div style="flex:1; background:rgba(255,255,255,0.6); padding:0.5rem; border-radius:6px; border:1px solid var(--parchment-border); text-align:center;">
            <div style="font-family:var(--font-heading); font-size:1.1rem; color:var(--crimson); font-weight:700;">100%</div>
            <div style="font-size:0.72rem; color:var(--ink-muted);">Dedication</div>
          </div>
          <div style="flex:1; background:rgba(255,255,255,0.6); padding:0.5rem; border-radius:6px; border:1px solid var(--parchment-border); text-align:center;">
            <div style="font-family:var(--font-heading); font-size:1.1rem; color:var(--crimson); font-weight:700;">4+</div>
            <div style="font-size:0.72rem; color:var(--ink-muted);">Core Disciplines</div>
          </div>
          <div style="flex:1; background:rgba(255,255,255,0.6); padding:0.5rem; border-radius:6px; border:1px solid var(--parchment-border); text-align:center;">
            <div style="font-family:var(--font-heading); font-size:1.1rem; color:var(--crimson); font-weight:700;">Global</div>
            <div style="font-size:0.72rem; color:var(--ink-muted);">Remote Ready</div>
          </div>
        </div>
      </div>
    `,
    right: `
      <div class="page-header">
        <span class="page-chapter">Chapter II</span>
        <span class="page-folio">Folio IV</span>
      </div>
      <h2 class="page-title">Mastered Spells</h2>
      <div class="spells-grid">
        <div class="spell-item" data-spell="cpp" title="Click to test spell!">
          <div class="spell-header">
            <div class="spell-title-wrap">
              <span class="spell-icon">⚙️</span>
              <span class="spell-name">C++ Systems & Engines</span>
            </div>
            <span class="spell-power">91 / 100</span>
          </div>
          <div class="spell-desc">Modern C++, memory management, physics simulation, OpenGL shaders, BVH tree acceleration.</div>
          <div class="spell-bar"><div class="spell-bar-fill" style="width:91%;"></div></div>
        </div>

        <div class="spell-item" data-spell="python" title="Click to test spell!">
          <div class="spell-header">
            <div class="spell-title-wrap">
              <span class="spell-icon">🐍</span>
              <span class="spell-name">Python AI & Automation</span>
            </div>
            <span class="spell-power">88 / 100</span>
          </div>
          <div class="spell-desc">LLM agents, ReAct loops, tool execution, FastAPI, autonomous workflow pipelines, ML models.</div>
          <div class="spell-bar"><div class="spell-bar-fill" style="width:88%;"></div></div>
        </div>

        <div class="spell-item" data-spell="video" title="Click to test spell!">
          <div class="spell-header">
            <div class="spell-title-wrap">
              <span class="spell-icon">🎬</span>
              <span class="spell-name">Cinematic Video & VFX</span>
            </div>
            <span class="spell-power">94 / 100</span>
          </div>
          <div class="spell-desc">Premiere Pro, After Effects, DaVinci Resolve node-based color grading, audio mastering, storytelling.</div>
          <div class="spell-bar"><div class="spell-bar-fill" style="width:94%;"></div></div>
        </div>

        <div class="spell-item" data-spell="web" title="Click to test spell!">
          <div class="spell-header">
            <div class="spell-title-wrap">
              <span class="spell-icon">🌐</span>
              <span class="spell-name">Interactive 3D Web</span>
            </div>
            <span class="spell-power">85 / 100</span>
          </div>
          <div class="spell-desc">Three.js, WebGL, GLSL custom shaders, 100k GPU particle systems, Canvas API, responsive UI.</div>
          <div class="spell-bar"><div class="spell-bar-fill" style="width:85%;"></div></div>
        </div>
      </div>
    `
  },

  /* ——— SPREAD 2: MATCH #001 & MATCH #002 ——— */
  {
    left: `
      <div class="page-header">
        <span class="page-chapter">Match #001</span>
        <span class="page-folio">Folio V</span>
      </div>
      <div class="project-deep-card">
        <span class="project-badge-top">⚡ Systems & Rendering</span>
        <h3 class="project-headline">C++ Raytracer Engine</h3>
        <div class="project-tags-row">
          <span class="project-tag">C++17</span>
          <span class="project-tag">BVH Acceleration</span>
          <span class="project-tag">Monte Carlo</span>
          <span class="project-tag">OpenGL</span>
        </div>
        <p class="project-summary">
          A physics-accurate raytracer crafted from scratch in C++. Simulates realistic light transportation,
          depth-of-field, global illumination, and complex material reflections and refractions.
        </p>
        <div class="project-highlights-box">
          <h4>Enchanted Capabilities</h4>
          <ul>
            <li>Bounding Volume Hierarchy (BVH) structures speeding rendering by ~85%</li>
            <li>Diffuse, metallic conductor, and dielectric glass refraction models</li>
            <li>Multi-threaded tile rendering with SIMD optimization</li>
            <li>Wavefront OBJ mesh loader with normal interpolation</li>
          </ul>
        </div>
        <div class="project-actions-row">
          <a href="https://github.com/harvender-rawat" target="_blank" rel="noopener" class="btn-ink-primary">
            <span>⚙️</span> View Source Blueprint
          </a>
        </div>
      </div>
    `,
    right: `
      <div class="page-header">
        <span class="page-chapter">Match #002</span>
        <span class="page-folio">Folio VI</span>
      </div>
      <div class="project-deep-card">
        <span class="project-badge-top">🤖 Artificial Intelligence</span>
        <h3 class="project-headline">Python Autonomous AI Agent</h3>
        <div class="project-tags-row">
          <span class="project-tag">Python 3</span>
          <span class="project-tag">FastAPI</span>
          <span class="project-tag">ReAct Loop</span>
          <span class="project-tag">Vector Memory</span>
        </div>
        <p class="project-summary">
          An autonomous multi-step reasoning agent capable of dynamic tool invocation, self-healing retries,
          and deep document synthesis using modern LLMs.
        </p>
        <div class="project-highlights-box">
          <h4>Enchanted Capabilities</h4>
          <ul>
            <li>Dynamic schema inspection and automated tool calling</li>
            <li>Persistent vector memory for long-context recall across sessions</li>
            <li>Self-healing verification loop that remedies errors during execution</li>
            <li>Clean REST API endpoints for seamless integration into production</li>
          </ul>
        </div>
        <div class="project-actions-row">
          <a href="https://github.com/harvender-rawat" target="_blank" rel="noopener" class="btn-ink-primary">
            <span>⚙️</span> View Source Blueprint
          </a>
        </div>
      </div>
    `
  },

  /* ——— SPREAD 3: MATCH #003 & MATCH #004 ——— */
  {
    left: `
      <div class="page-header">
        <span class="page-chapter">Match #003</span>
        <span class="page-folio">Folio VII</span>
      </div>
      <div class="project-deep-card">
        <span class="project-badge-top">🎬 Visual Storytelling</span>
        <h3 class="project-headline">Cinematic Showreel & VFX</h3>
        <div class="project-tags-row">
          <span class="project-tag">Premiere Pro</span>
          <span class="project-tag">After Effects</span>
          <span class="project-tag">DaVinci Resolve</span>
          <span class="project-tag">Sound Design</span>
        </div>
        <p class="project-summary">
          A showcase of high-end cinematic edits, rhythmic pacing, and visual effects compositing.
          Combines expressive color science with compelling narrative arcs.
        </p>
        <div class="project-highlights-box">
          <h4>Enchanted Capabilities</h4>
          <ul>
            <li>Node-based color grading in DaVinci Resolve matching Hollywood gamut standards</li>
            <li>Procedural 3D motion graphics and camera tracking in After Effects</li>
            <li>Multi-track sonic mastering, dialogue cleaning, and sound spatialization</li>
            <li>Optimized delivery pipelines across broadcast and digital formats</li>
          </ul>
        </div>
        <div class="project-actions-row">
          <span style="font-family:var(--font-code); font-size:0.75rem; color:var(--crimson);">
            ⚡ Available upon inquiry via Owl Post
          </span>
        </div>
      </div>
    `,
    right: `
      <div class="page-header">
        <span class="page-chapter">Match #004</span>
        <span class="page-folio">Folio VIII</span>
      </div>
      <div class="project-deep-card">
        <span class="project-badge-top">🌐 3D Web Graphics</span>
        <h3 class="project-headline">Interactive 3D Web Engine</h3>
        <div class="project-tags-row">
          <span class="project-tag">Three.js</span>
          <span class="project-tag">WebGL</span>
          <span class="project-tag">GLSL Shaders</span>
          <span class="project-tag">Particle Systems</span>
        </div>
        <p class="project-summary">
          In-browser real-time 3D universe featuring GPU particle simulations, custom GLSL vertex/fragment
          shaders, and responsive spatial camera controls.
        </p>
        <div class="project-highlights-box">
          <h4>Enchanted Capabilities</h4>
          <ul>
            <li>100,000+ GPU particles rendered fluidly at 60 FPS</li>
            <li>Custom procedural shaders for realistic magic and water caustics</li>
            <li>Deferred lighting pass with dynamic point lights and soft shadows</li>
            <li>Fully responsive touch, pointer, and gyro controls for mobile</li>
          </ul>
        </div>
        <div class="project-actions-row">
          <a href="https://github.com/harvender-rawat" target="_blank" rel="noopener" class="btn-ink-primary">
            <span>⚙️</span> View Source Blueprint
          </a>
        </div>
      </div>
    `
  },

  /* ——— SPREAD 4: LANGUAGES & TROPHY ROOM ——— */
  {
    left: `
      <div class="page-header">
        <span class="page-chapter">Chapter V</span>
        <span class="page-folio">Folio IX</span>
      </div>
      <h2 class="page-title">Tongues & Dialects</h2>
      <div class="lang-columns">
        <div>
          <div class="lang-section-title"><span>🌍</span> Spoken Tongues</div>
          <div class="lang-list">
            <div class="lang-row">
              <span class="lang-name">English</span>
              <div class="lang-track"><div class="lang-fill" style="width:95%;"></div></div>
              <span class="lang-status">Fluent</span>
            </div>
            <div class="lang-row">
              <span class="lang-name">Hindi</span>
              <div class="lang-track"><div class="lang-fill" style="width:100%;"></div></div>
              <span class="lang-status">Native</span>
            </div>
            <div class="lang-row">
              <span class="lang-name">Punjabi</span>
              <div class="lang-track"><div class="lang-fill" style="width:85%;"></div></div>
              <span class="lang-status">Proficient</span>
            </div>
          </div>
        </div>

        <div>
          <div class="lang-section-title"><span>💻</span> Code Runes</div>
          <div class="lang-list">
            <div class="lang-row">
              <span class="lang-name">C / C++</span>
              <div class="lang-track"><div class="lang-fill" style="width:91%;"></div></div>
              <span class="lang-status">Expert</span>
            </div>
            <div class="lang-row">
              <span class="lang-name">Python</span>
              <div class="lang-track"><div class="lang-fill" style="width:88%;"></div></div>
              <span class="lang-status">Expert</span>
            </div>
            <div class="lang-row">
              <span class="lang-name">JavaScript</span>
              <div class="lang-track"><div class="lang-fill" style="width:84%;"></div></div>
              <span class="lang-status">Advanced</span>
            </div>
            <div class="lang-row">
              <span class="lang-name">GLSL / Shaders</span>
              <div class="lang-track"><div class="lang-fill" style="width:78%;"></div></div>
              <span class="lang-status">Skilled</span>
            </div>
          </div>
        </div>
      </div>
    `,
    right: `
      <div class="page-header">
        <span class="page-chapter">Chapter VI</span>
        <span class="page-folio">Folio X</span>
      </div>
      <h2 class="page-title">Trophy Room & Honors</h2>
      <div class="trophies-grid">
        <div class="trophy-card">
          <div class="trophy-icon">🏆</div>
          <div class="trophy-title">Quidditch Cup</div>
          <div class="trophy-desc">Delivered championship-caliber software engineering from concept to production.</div>
        </div>
        <div class="trophy-card">
          <div class="trophy-icon">✨</div>
          <div class="trophy-title">Snitch Seeker</div>
          <div class="trophy-desc">Consistently catches the most intricate edge-case bugs and complex algorithmic challenges.</div>
        </div>
        <div class="trophy-card">
          <div class="trophy-icon">🧹</div>
          <div class="trophy-title">Nimbus Systems</div>
          <div class="trophy-desc">Engineered memory-safe high-speed computational pipelines in modern C++.</div>
        </div>
        <div class="trophy-card">
          <div class="trophy-icon">🎬</div>
          <div class="trophy-title">Order of the Pixel</div>
          <div class="trophy-desc">Mastered cinematic storytelling, visual pacing, and professional color grading.</div>
        </div>
        <div class="trophy-card">
          <div class="trophy-icon">🧪</div>
          <div class="trophy-title">AI Alchemist</div>
          <div class="trophy-desc">Brewed autonomous LLM agents that turn unstructured data into intelligence.</div>
        </div>
        <div class="trophy-card">
          <div class="trophy-icon">🐛</div>
          <div class="trophy-title">Dark Arts Debugger</div>
          <div class="trophy-desc">Exorcised memory leaks, race conditions, and segmentation faults with surgical poise.</div>
        </div>
      </div>
    `
  },

  /* ——— SPREAD 5: OWL POST & TRANSMISSIONS ——— */
  {
    left: `
      <div class="page-header">
        <span class="page-chapter">Chapter VII</span>
        <span class="page-folio">Folio XI</span>
      </div>
      <h2 class="page-title">Dispatch an Owl</h2>
      <p style="font-size:0.83rem; color:var(--ink-secondary); margin-bottom:0.7rem;">
        Have a quest, a project, or an opportunity? Inscribe your scroll and release an owl:
      </p>
      <form id="book-owl-form" class="owl-form-wrap">
        <div class="form-field">
          <label for="owl-sender">Your Name</label>
          <input type="text" id="owl-sender" required placeholder="e.g. Albus Dumbledore" />
        </div>
        <div class="form-field">
          <label for="owl-address">Your Owl Address (Email)</label>
          <input type="email" id="owl-address" required placeholder="e.g. albus@hogwarts.edu" />
        </div>
        <div class="form-field">
          <label for="owl-message">Scroll Message</label>
          <textarea id="owl-message" required placeholder="Write your proposition, project idea, or invitation..."></textarea>
        </div>
        <button type="submit" class="btn-dispatch-owl" id="btn-dispatch">
          <span>🦉</span>
          <span id="dispatch-label">Release Owl Post</span>
        </button>
      </form>
    `,
    right: `
      <div class="page-header">
        <span class="page-chapter">Transmissions</span>
        <span class="page-folio">Folio XII</span>
      </div>
      <h2 class="page-title">Coordinates & Links</h2>
      <div class="transmissions-wrap">
        <a href="mailto:harvendersinghrawat@gmail.com" class="contact-item-card">
          <span class="cic-icon">✉️</span>
          <div class="cic-details">
            <span class="cic-label">Direct Owl Post</span>
            <span class="cic-value">harvendersinghrawat@gmail.com</span>
          </div>
        </a>

        <a href="https://github.com/harvender-rawat" target="_blank" rel="noopener" class="contact-item-card">
          <span class="cic-icon">⚙️</span>
          <div class="cic-details">
            <span class="cic-label">Code Repository</span>
            <span class="cic-value">github.com/harvender-rawat</span>
          </div>
        </a>

        <a href="https://linkedin.com/in/harvendersinghrawat" target="_blank" rel="noopener" class="contact-item-card">
          <span class="cic-icon">🔗</span>
          <div class="cic-details">
            <span class="cic-label">Professional Network</span>
            <span class="cic-value">linkedin.com/in/harvendersinghrawat</span>
          </div>
        </a>

        <div class="contact-item-card" style="cursor:default;">
          <span class="cic-icon">📍</span>
          <div class="cic-details">
            <span class="cic-label">Location Base</span>
            <span class="cic-value">India · Available Worldwide (Remote)</span>
          </div>
        </div>
      </div>

      <div class="parchment-seal-box">
        <div class="quote-text">
          "Words are, in my not-so-humble opinion, our most inexhaustible source of magic."
        </div>
        <div class="seal-signature">⚡ Harvender Singh Rawat</div>
      </div>
    `
  }
];

/* ═══════════════════════════════════════════════
   4. BOOK CONTROLLER ENGINE (3D PARALLAX & FLIP)
   ═══════════════════════════════════════════════ */
class BookController {
  constructor() {
    this.audio = new BookAudio();
    this.isOpen = false;
    this.currentSpread = 0;
    this.totalSpreads = PORTFOLIO_SPREADS.length;
    this.isFlipping = false;
    this.wheelThrottleTimer = null;
    this.snitchScore = 0;

    // 3D Parallax properties
    this.mouseX = window.innerWidth / 2;
    this.mouseY = window.innerHeight / 2;
    this.targetTiltX = 0;
    this.targetTiltY = 0;
    this.currentTiltX = 0;
    this.currentTiltY = 0;

    // DOM Elements
    this.stateClosed   = document.getElementById('state-closed');
    this.stateOpen     = document.getElementById('state-open');
    this.bookClosedBtn = document.getElementById('book-closed');
    this.btnCloseBook  = document.getElementById('btn-close-book');
    this.btnSound      = document.getElementById('btn-sound-toggle');
    this.soundIcon     = document.getElementById('sound-icon');
    this.btnToc        = document.getElementById('btn-toc-toggle');
    this.pageLeft      = document.getElementById('page-left');
    this.pageRight     = document.getElementById('page-right');
    this.pageFlipper   = document.getElementById('page-flipper');
    this.pfFront       = document.getElementById('pf-front');
    this.pfBack        = document.getElementById('pf-back');
    this.leftShadow    = document.getElementById('left-shadow-overlay');
    this.rightShadow   = document.getElementById('right-shadow-overlay');
    this.btnPrev       = document.getElementById('btn-prev');
    this.btnNext       = document.getElementById('btn-next');
    this.pageCounter   = document.getElementById('page-counter');
    this.toast         = document.getElementById('toast');
    this.spellFlash    = document.getElementById('spell-flash');
    this.bookContainer = document.getElementById('book-container-3d');
    this.bookSpread    = document.getElementById('book-spread');
    this.curlBR        = document.getElementById('corner-curl-br');
    this.curlBL        = document.getElementById('corner-curl-bl');
    this.ribbon        = document.getElementById('book-ribbon');
    this.snitch        = document.getElementById('snitch-companion');
    this.snitchPopup   = document.getElementById('snitch-score-popup');

    this._bindEvents();
    this._startParallaxLoop();
  }

  _bindEvents() {
    // Open Book
    if (this.bookClosedBtn) {
      this.bookClosedBtn.addEventListener('click', () => this.openBook());
      this.bookClosedBtn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.openBook();
        }
      });
    }

    // Close Book
    if (this.btnCloseBook) {
      this.btnCloseBook.addEventListener('click', () => this.closeBook());
    }

    // Sound Toggle
    if (this.btnSound) {
      this.btnSound.addEventListener('click', () => {
        const isSoundOn = this.audio.toggle();
        this.soundIcon.textContent = isSoundOn ? '🔊' : '🔇';
        this._showToast(isSoundOn ? '🔊 Sound effects active' : '🔇 Sound effects muted');
      });
    }

    // Table of Contents Quick Jump
    if (this.btnToc) {
      this.btnToc.addEventListener('click', () => {
        if (this.currentSpread !== 0) {
          this.turnToSpread(0, 'backward');
        }
      });
    }

    // Ribbon click jumps to TOC
    if (this.ribbon) {
      this.ribbon.addEventListener('click', (e) => {
        e.stopPropagation();
        this.audio.playSpellChime();
        this.turnToSpread(0, this.currentSpread > 0 ? 'backward' : 'forward');
        this._showToast('Bookmark: Turned to Table of Contents');
      });
    }

    // Navigation buttons
    if (this.btnPrev) {
      this.btnPrev.addEventListener('click', () => this.prevPage());
    }
    if (this.btnNext) {
      this.btnNext.addEventListener('click', () => this.nextPage());
    }

    // Interactive Dog-Ear Corner Curls
    if (this.curlBR) {
      this.curlBR.addEventListener('click', (e) => {
        e.stopPropagation();
        this.nextPage();
      });
    }
    if (this.curlBL) {
      this.curlBL.addEventListener('click', (e) => {
        e.stopPropagation();
        this.prevPage();
      });
    }

    // Interactive Golden Snitch Companion
    if (this.snitch) {
      this.snitch.addEventListener('click', (e) => {
        e.stopPropagation();
        this.snitchScore += 150;
        this.audio.playSnitchCatch();
        this._flashSpell();

        if (this.snitchPopup) {
          this.snitchPopup.textContent = `+150 (Total: ${this.snitchScore})`;
          this.snitchPopup.classList.add('pop');
          setTimeout(() => this.snitchPopup.classList.remove('pop'), 1200);
        }

        this._showToast(`⚡ Golden Snitch Caught! +150 to Gryffindor!`);
      });
    }

    // Mouse Parallax tracking
    window.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      // Calculate subtle tilt angle
      this.targetTiltY = (e.clientX - centerX) * 0.011; // deg
      this.targetTiltX = -(e.clientY - centerY) * 0.011; // deg
    });

    // Scroll Wheel Page Turn with clean debouncing
    window.addEventListener('wheel', (e) => {
      if (!this.isOpen || this.isFlipping) return;
      if (this.wheelThrottleTimer) return;

      if (e.deltaY > 20) {
        this.nextPage();
        this._throttleWheel();
      } else if (e.deltaY < -20) {
        this.prevPage();
        this._throttleWheel();
      }
    }, { passive: true });

    // Keyboard Navigation
    window.addEventListener('keydown', (e) => {
      if (!this.isOpen) return;
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        this.nextPage();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        this.prevPage();
      } else if (e.key === 'Escape') {
        this.closeBook();
      }
    });

    // Touch Swipe Navigation
    let touchStartX = 0;
    let touchStartY = 0;
    if (this.bookSpread) {
      this.bookSpread.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }, { passive: true });

      this.bookSpread.addEventListener('touchend', (e) => {
        if (!this.isOpen || this.isFlipping) return;
        const dx = e.changedTouches[0].clientX - touchStartX;
        const dy = e.changedTouches[0].clientY - touchStartY;
        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 35) {
          if (dx < 0) this.nextPage();
          else this.prevPage();
        }
      }, { passive: true });
    }
  }

  _startParallaxLoop() {
    const updateParallax = () => {
      if (this.isOpen && this.bookContainer) {
        // Linear interpolation for smooth lag
        this.currentTiltX += (this.targetTiltX - this.currentTiltX) * 0.08;
        this.currentTiltY += (this.targetTiltY - this.currentTiltY) * 0.08;

        this.bookContainer.style.transform = `rotateX(${this.currentTiltX}deg) rotateY(${this.currentTiltY}deg)`;
      }
      requestAnimationFrame(updateParallax);
    };
    requestAnimationFrame(updateParallax);
  }

  _throttleWheel() {
    this.wheelThrottleTimer = setTimeout(() => {
      this.wheelThrottleTimer = null;
    }, 450);
  }

  openBook() {
    if (this.isOpen) return;
    this.isOpen = true;
    this.audio.playBookOpen();
    this._flashSpell();

    this.stateClosed.hidden = true;
    this.stateOpen.hidden = false;

    this.renderSpread(0);
    this._showToast('⚡ Grimoire opened! Scroll or tap corners to turn pages.');
  }

  closeBook() {
    if (!this.isOpen) return;
    this.isOpen = false;
    this.audio.playBookClose();

    this.stateOpen.hidden = true;
    this.stateClosed.hidden = false;
    this._showToast('Grimoire sealed.');
  }

  nextPage() {
    if (this.currentSpread >= this.totalSpreads - 1 || this.isFlipping) return;
    this.turnToSpread(this.currentSpread + 1, 'forward');
  }

  prevPage() {
    if (this.currentSpread <= 0 || this.isFlipping) return;
    this.turnToSpread(this.currentSpread - 1, 'backward');
  }

  turnToSpread(targetIndex, direction = 'forward') {
    if (targetIndex < 0 || targetIndex >= this.totalSpreads || this.isFlipping) return;
    this.isFlipping = true;

    // Play tactile paper sound
    this.audio.playPageTurn();

    const oldSpread = PORTFOLIO_SPREADS[this.currentSpread];
    const newSpread = PORTFOLIO_SPREADS[targetIndex];

    if (direction === 'forward') {
      // Setup turning faces
      this.pfFront.innerHTML = oldSpread.right;
      this.pfBack.innerHTML  = newSpread.left;

      // Trigger dynamic cast shadow on left stack
      if (this.leftShadow) this.leftShadow.style.opacity = '1';

      this.pageFlipper.className = 'page-flipper flip-forward';

      // Halfway through arc: swap the base content
      setTimeout(() => {
        this.pageLeft.innerHTML = newSpread.left;
        this.pageRight.innerHTML = newSpread.right;
        if (this.leftShadow) this.leftShadow.style.opacity = '0';
      }, 360);

      // Animation complete
      setTimeout(() => {
        this.pageFlipper.className = 'page-flipper';
        this.currentSpread = targetIndex;
        this.updateControls();
        this._attachDynamicListeners();
        this.isFlipping = false;
      }, 720);

    } else {
      // Backward turning
      this.pfFront.innerHTML = oldSpread.left;
      this.pfBack.innerHTML  = newSpread.right;

      // Trigger dynamic cast shadow on right stack
      if (this.rightShadow) this.rightShadow.style.opacity = '1';

      this.pageFlipper.className = 'page-flipper flip-backward';

      setTimeout(() => {
        this.pageLeft.innerHTML = newSpread.left;
        this.pageRight.innerHTML = newSpread.right;
        if (this.rightShadow) this.rightShadow.style.opacity = '0';
      }, 360);

      setTimeout(() => {
        this.pageFlipper.className = 'page-flipper';
        this.currentSpread = targetIndex;
        this.updateControls();
        this._attachDynamicListeners();
        this.isFlipping = false;
      }, 720);
    }
  }

  renderSpread(index) {
    this.currentSpread = index;
    const spread = PORTFOLIO_SPREADS[index];
    this.pageLeft.innerHTML  = spread.left;
    this.pageRight.innerHTML = spread.right;
    this.updateControls();
    this._attachDynamicListeners();
  }

  updateControls() {
    // Update counter
    const leftPageNum  = this.currentSpread * 2 + 1;
    const rightPageNum = this.currentSpread * 2 + 2;
    const totalPages   = this.totalSpreads * 2;
    this.pageCounter.textContent = `Pages ${leftPageNum}–${rightPageNum} of ${totalPages}`;

    // Update buttons
    this.btnPrev.disabled = (this.currentSpread === 0);
    this.btnNext.disabled = (this.currentSpread === this.totalSpreads - 1);

    // Update corner curls visibility
    if (this.curlBL) this.curlBL.style.display = (this.currentSpread === 0) ? 'none' : 'block';
    if (this.curlBR) this.curlBR.style.display = (this.currentSpread === this.totalSpreads - 1) ? 'none' : 'block';
  }

  _attachDynamicListeners() {
    // TOC Links click
    const tocLinks = document.querySelectorAll('.toc-item');
    tocLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const spreadIndex = parseInt(link.getAttribute('data-spread'), 10);
        if (!isNaN(spreadIndex) && spreadIndex !== this.currentSpread) {
          const dir = spreadIndex > this.currentSpread ? 'forward' : 'backward';
          this.turnToSpread(spreadIndex, dir);
        }
      });
    });

    // Spell items click test
    const spells = document.querySelectorAll('.spell-item');
    spells.forEach(spell => {
      spell.addEventListener('click', () => {
        this.audio.playSpellChime();
        this._flashSpell();
        const name = spell.querySelector('.spell-name')?.textContent || 'Spell';
        this._showToast(`✨ Invoked: ${name}`);
      });
    });

    // Quill scratch sound when typing in inputs
    const inputs = document.querySelectorAll('#book-owl-form input, #book-owl-form textarea');
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        this.audio.playQuillScratch();
      });
    });

    // Owl Post Form Submit
    const form = document.getElementById('book-owl-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const sender = document.getElementById('owl-sender').value.trim();
        const address = document.getElementById('owl-address').value.trim();
        const message = document.getElementById('owl-message').value.trim();

        if (!sender || !address || !message) {
          this._showToast('⚠️ Please inscribe all fields on the scroll.');
          return;
        }

        const btn = document.getElementById('btn-dispatch');
        const label = document.getElementById('dispatch-label');
        btn.disabled = true;
        label.textContent = 'Enchanting Owl...';

        this.audio.playSnitchCatch();
        this._flashSpell();

        setTimeout(() => {
          this._showToast(`🦉 Owl dispatched successfully from ${sender}!`);
          label.textContent = 'Owl Dispatched! ✉️';
          form.reset();
          setTimeout(() => {
            btn.disabled = false;
            label.textContent = 'Release Owl Post';
          }, 3000);
        }, 1200);
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
    }, 180);
  }
}

/* ═══════════════════════════════════════════════
   5. DOM INITIALIZATION
   ═══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  new AmbientDustEngine('ambient-canvas');
  window.portfolioBook = new BookController();
  console.log('%c⚡ Harvender Singh Rawat — Realistic 3D Grimoire Loaded ⚡', 'color:#d4af37; font-weight:bold; font-size:14px;');
});
