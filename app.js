/**
 * HARVENDER SINGH RAWAT | POKÉMON THEME MASTER PORTFOLIO
 * Core JavaScript: Thunderbolt Lightning Engine, Web Audio Synthesizer,
 * Interactive Pikachu Companion, and Pokémon Roster Catcher.
 */

(function () {
  'use strict';

  // --- AUDIO SYNTHESIZER (WEB AUDIO API) ---
  class SoundFX {
    constructor() {
      this.ctx = null;
      this.enabled = true;
    }

    init() {
      if (!this.ctx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioContext();
      }
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    toggle() {
      this.enabled = !this.enabled;
      return this.enabled;
    }

    // Procedural Thunderbolt Zap & Crackle
    playThunderbolt() {
      if (!this.enabled) return;
      this.init();
      const ctx = this.ctx;
      const now = ctx.currentTime;

      // 1. White Noise burst for thunder crackle
      const bufferSize = ctx.sampleRate * 0.35;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1400, now);
      filter.frequency.exponentialRampToValueAtTime(120, now + 0.35);
      filter.Q.setValueAtTime(3, now);

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.5, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);

      noise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(ctx.destination);
      noise.start(now);

      // 2. High voltage electric zap tone (sawtooth slide)
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(80, now + 0.28);

      oscGain.gain.setValueAtTime(0.4, now);
      oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

      osc.connect(oscGain);
      oscGain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.3);
    }

    // 8-Bit Pokéball Click & Catch Chime
    playCatchFanfare() {
      if (!this.enabled) return;
      this.init();
      const ctx = this.ctx;
      const now = ctx.currentTime;

      // Three quick clicks
      [0, 0.1, 0.2].forEach((timeOffset, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(600 + idx * 80, now + timeOffset);
        gain.gain.setValueAtTime(0.15, now + timeOffset);
        gain.gain.exponentialRampToValueAtTime(0.001, now + timeOffset + 0.05);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + timeOffset);
        osc.stop(now + timeOffset + 0.06);
      });

      // Triumphant 8-bit jingle
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      notes.forEach((freq, i) => {
        const noteOsc = ctx.createOscillator();
        const noteGain = ctx.createGain();
        noteOsc.type = 'triangle';
        noteOsc.frequency.setValueAtTime(freq, now + 0.35 + i * 0.08);

        noteGain.gain.setValueAtTime(0.2, now + 0.35 + i * 0.08);
        noteGain.gain.exponentialRampToValueAtTime(0.001, now + 0.45 + i * 0.08);

        noteOsc.connect(noteGain);
        noteGain.connect(ctx.destination);
        noteOsc.start(now + 0.35 + i * 0.08);
        noteOsc.stop(now + 0.5 + i * 0.08);
      });
    }

    // Quick chirp when hovering or minor interaction
    playBeep(freq = 700) {
      if (!this.enabled) return;
      this.init();
      const ctx = this.ctx;
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.09);
    }
  }

  const sfx = new SoundFX();

  // --- PROCEDURAL LIGHTNING CANVAS ENGINE ---
  const canvas = document.getElementById('lightning-canvas');
  const ctx = canvas.getContext('2d');
  const thunderFlash = document.getElementById('thunder-flash');
  let activeBolts = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  class LightningBolt {
    constructor(startX, startY, endX, endY) {
      this.startX = startX;
      this.startY = startY;
      this.endX = endX;
      this.endY = endY;
      this.segments = [];
      this.life = 1.0;
      this.decay = 0.08;
      this.sparks = [];

      this.generateBolt();
      this.generateSparks();
    }

    generateBolt() {
      const dx = this.endX - this.startX;
      const dy = this.endY - this.startY;
      const dist = Math.hypot(dx, dy);
      const steps = Math.max(8, Math.floor(dist / 22));

      let currentX = this.startX;
      let currentY = this.startY;

      for (let i = 1; i <= steps; i++) {
        const progress = i / steps;
        const targetX = this.startX + dx * progress;
        const targetY = this.startY + dy * progress;

        // Jagged displacement perpendicular to main trajectory
        const jitter = (Math.random() - 0.5) * 35 * Math.sin(progress * Math.PI);
        const perpX = -dy / dist;
        const perpY = dx / dist;

        const nextX = i === steps ? this.endX : targetX + perpX * jitter;
        const nextY = i === steps ? this.endY : targetY + perpY * jitter;

        this.segments.push({
          x1: currentX,
          y1: currentY,
          x2: nextX,
          y2: nextY,
          branch: null
        });

        // 30% chance of branching out sub-bolts
        if (Math.random() < 0.3 && i < steps - 2) {
          const branchAngle = Math.atan2(dy, dx) + (Math.random() - 0.5) * 1.2;
          const branchLength = dist * 0.25 * (Math.random() + 0.5);
          const bEndX = currentX + Math.cos(branchAngle) * branchLength;
          const bEndY = currentY + Math.sin(branchAngle) * branchLength;
          this.segments[this.segments.length - 1].branch = {
            startX: currentX,
            startY: currentY,
            endX: bEndX,
            endY: bEndY
          };
        }

        currentX = nextX;
        currentY = nextY;
      }
    }

    generateSparks() {
      const count = 18;
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 8 + 3;
        this.sparks.push({
          x: this.endX,
          y: this.endY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1.0,
          decay: Math.random() * 0.08 + 0.04,
          size: Math.random() * 3 + 2,
          color: Math.random() > 0.4 ? '#ffe600' : '#00e5ff'
        });
      }
    }

    update() {
      this.life -= this.decay;
      for (let s of this.sparks) {
        s.x += s.vx;
        s.y += s.vy;
        s.life -= s.decay;
      }
    }

    draw(ctx) {
      if (this.life <= 0) return;

      ctx.save();
      ctx.globalAlpha = Math.max(0, this.life);

      // 1. Outer Glow (Electric Pikachu Yellow)
      ctx.strokeStyle = '#ffe600';
      ctx.lineWidth = 7;
      ctx.shadowColor = '#ffe600';
      ctx.shadowBlur = 24;
      ctx.beginPath();
      for (let seg of this.segments) {
        ctx.moveTo(seg.x1, seg.y1);
        ctx.lineTo(seg.x2, seg.y2);
        if (seg.branch) {
          ctx.moveTo(seg.branch.startX, seg.branch.startY);
          ctx.lineTo(seg.branch.endX, seg.branch.endY);
        }
      }
      ctx.stroke();

      // 2. Inner Hot Core (Electric Cyan / Pure White)
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2.5;
      ctx.shadowColor = '#00e5ff';
      ctx.shadowBlur = 12;
      ctx.stroke();

      // 3. Draw Impact Sparks
      for (let s of this.sparks) {
        if (s.life > 0) {
          ctx.fillStyle = s.color;
          ctx.shadowColor = s.color;
          ctx.shadowBlur = 8;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size * s.life, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.restore();
    }
  }

  function animateLightning() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = activeBolts.length - 1; i >= 0; i--) {
      const bolt = activeBolts[i];
      bolt.update();
      bolt.draw(ctx);
      if (bolt.life <= 0) {
        activeBolts.splice(i, 1);
      }
    }
    requestAnimationFrame(animateLightning);
  }
  requestAnimationFrame(animateLightning);

  // --- CAST THUNDERBOLT FUNCTION ---
  const pikachuCompanion = document.getElementById('pikachu-companion');

  function getPikachuOrigin() {
    if (pikachuCompanion) {
      const rect = pikachuCompanion.getBoundingClientRect();
      return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height * 0.4
      };
    }
    return { x: window.innerWidth - 60, y: window.innerHeight - 60 };
  }

  function castThunderbolt(targetX, targetY, options = {}) {
    const origin = options.origin || getPikachuOrigin();

    // Trigger audio
    sfx.playThunderbolt();

    // Trigger visual screen flash briefly
    thunderFlash.classList.add('active');
    setTimeout(() => thunderFlash.classList.remove('active'), 80);

    // Make Pikachu animate into attack stance
    if (pikachuCompanion) {
      pikachuCompanion.classList.add('attacking');
      updatePikaBubble('⚡ THUNDERBOLT! ⚡');
      setTimeout(() => {
        pikachuCompanion.classList.remove('attacking');
        resetPikaBubble();
      }, 700);
    }

    // Spawn 2-3 overlapping bolts for thick jagged lightning
    const count = options.intensity || 3;
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        activeBolts.push(new LightningBolt(origin.x, origin.y, targetX, targetY));
      }, i * 40);
    }
  }

  // --- PIKACHU COMPANION QUOTES & BUBBLE ---
  const pikaSpeech = document.getElementById('pika-speech');
  const pikaQuotes = [
    'Pika Pika! Click me or any card! ⚡',
    '⚡ Thunderbolt charged and ready!',
    'Catching new Pokémon with code!',
    'Traveled to Egypt with AIESEC! 🇪🇬',
    'C++, Python & Visuals are elite!',
    'Pikachuuuuuuu! ⚡⚡⚡'
  ];
  let quoteIndex = 0;

  function updatePikaBubble(text) {
    if (pikaSpeech) pikaSpeech.textContent = text;
  }

  function resetPikaBubble() {
    quoteIndex = (quoteIndex + 1) % pikaQuotes.length;
    if (pikaSpeech) pikaSpeech.textContent = pikaQuotes[quoteIndex];
  }

  setInterval(resetPikaBubble, 6000);

  // Clicking Pikachu directly strikes center and triggers sound
  if (pikachuCompanion) {
    pikachuCompanion.addEventListener('click', (e) => {
      e.stopPropagation();
      const origin = getPikachuOrigin();
      const targetX = window.innerWidth / 2 + (Math.random() - 0.5) * 200;
      const targetY = window.innerHeight * 0.4 + (Math.random() - 0.5) * 150;
      castThunderbolt(targetX, targetY, { origin });
      showToast('⚡ PIKACHU USED THUNDERBOLT! CRITICAL HIT!');
    });
  }

  // --- TOAST NOTIFICATIONS ---
  const battleToast = document.getElementById('battle-toast');
  let toastTimer = null;

  function showToast(message, duration = 3000) {
    if (!battleToast) return;
    battleToast.innerHTML = `<i class="fa-solid fa-bolt"></i> <span>${message}</span>`;
    battleToast.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      battleToast.classList.remove('visible');
    }, duration);
  }

  // --- POKÉMON ROSTER & CATCH SYSTEM ---
  // Over 20+ exciting Pokémon that can be summoned and added!
  const POKEMON_CATALOG = [
    { id: 25, name: 'Pikachu', type: 'Electric', role: 'Partner / Electric Lead', hp: 999, atk: 980, sprite: 'pikachu.gif', cry: 'Pika Pika!' },
    { id: 6, name: 'Charizard', type: 'Fire/Flying', role: 'High-Impact Creative Flame', hp: 920, atk: 950, sprite: 'charizard.gif', cry: 'Roaaar!' },
    { id: 448, name: 'Lucario', type: 'Fighting/Steel', role: 'C++ Algorithmic Aura', hp: 890, atk: 960, sprite: 'lucario.gif', cry: 'Aura Sphere!' },
    { id: 94, name: 'Gengar', type: 'Ghost/Poison', role: 'Python Automation Shadow', hp: 860, atk: 940, sprite: 'gengar.gif', cry: 'Kekeke!' },
    { id: 150, name: 'Mewtwo', type: 'Psychic', role: 'Deep Learning / Neural Core', hp: 990, atk: 990, sprite: 'mewtwo.gif', cry: 'Hmph...' },
    { id: 658, name: 'Greninja', type: 'Water/Dark', role: 'Agile Code Sprints & Logic', hp: 880, atk: 930, sprite: 'greninja.gif', cry: 'Nin-nin!' },
    { id: 133, name: 'Eevee', type: 'Normal', role: 'Adaptable Multi-Stack Polyglot', hp: 800, atk: 820, sprite: 'eevee.gif', cry: 'Eev-vee!' },
    { id: 384, name: 'Rayquaza', type: 'Dragon/Flying', role: 'Cloud & Systems Supremacy', hp: 990, atk: 980, sprite: 'rayquaza.gif', cry: 'Screeech!' },
    { id: 143, name: 'Snorlax', type: 'Normal', role: 'Rock-Solid Database Storage', hp: 990, atk: 870, sprite: 'snorlax.gif', cry: 'Zzzzz!' },
    { id: 149, name: 'Dragonite', type: 'Dragon/Flying', role: 'AIESEC Egypt Global Diplomat', hp: 940, atk: 950, sprite: 'dragonite.gif', cry: 'Dra-go!' },
    { id: 26, name: 'Raichu', type: 'Electric', role: 'Volt Overdrive Specialist', hp: 870, atk: 920, sprite: 'raichu.gif', cry: 'Rai-chu!' },
    { id: 445, name: 'Garchomp', type: 'Dragon/Ground', role: 'C++ Low-Latency Pointer Speed', hp: 960, atk: 970, sprite: 'garchomp.gif', cry: 'Gaaarch!' },
    { id: 1, name: 'Bulbasaur', type: 'Grass/Poison', role: 'Seed of Innovation', hp: 790, atk: 800, sprite: 'bulbasaur.gif', cry: 'Bulba!' },
    { id: 7, name: 'Squirtle', type: 'Water', role: 'Fluid Motion Design Flow', hp: 790, atk: 810, sprite: 'squirtle.gif', cry: 'Squirtle!' }
  ];

  // Active party starts with Pikachu, Charizard, Lucario, Gengar, Mewtwo, and Dragonite
  let currentParty = [
    { ...POKEMON_CATALOG[0] }, // Pikachu
    { ...POKEMON_CATALOG[1] }, // Charizard
    { ...POKEMON_CATALOG[2] }, // Lucario
    { ...POKEMON_CATALOG[3] }, // Gengar
    { ...POKEMON_CATALOG[4] }, // Mewtwo
    { ...POKEMON_CATALOG[9] }  // Dragonite (Egypt Diplomat)
  ];

  const partyGrid = document.getElementById('party-roster-grid');
  const partyCountBadge = document.getElementById('party-count-badge');

  function renderPartyRoster() {
    if (!partyGrid) return;
    partyGrid.innerHTML = '';
    currentParty.forEach((poke, index) => {
      const card = document.createElement('div');
      card.className = 'pokemon-party-card holo-tilt zap-target';
      card.dataset.pokeIndex = index;

      // Online Showdown animated sprite CDN with reliable fallback
      const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${poke.id}.gif`;
      const fallbackUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png`;

      card.innerHTML = `
        <span class="party-card-num">#${String(poke.id).padStart(3, '0')}</span>
        <span class="party-card-type">${poke.type}</span>
        <div class="party-sprite-wrapper">
          <img src="${spriteUrl}" alt="${poke.name}" class="party-sprite-img" onerror="this.src='${fallbackUrl}'">
        </div>
        <h4 class="party-pokemon-name">${poke.name}</h4>
        <span class="party-pokemon-role">${poke.role}</span>
        <div class="party-stat-bar-mini">
          <div class="mini-stat-row">
            <span>BATTLE POWER</span>
            <span>${poke.atk}</span>
          </div>
          <div class="mini-stat-track">
            <div class="mini-stat-fill" style="width: ${(poke.atk / 1000) * 100}%;"></div>
          </div>
        </div>
      `;

      // Clicking any Pokémon party card triggers thunderbolt & cry
      card.addEventListener('click', (e) => {
        const rect = card.getBoundingClientRect();
        castThunderbolt(rect.left + rect.width / 2, rect.top + rect.height / 2);
        sfx.playBeep(880);
        showToast(`⚡ ${poke.name.toUpperCase()} roared: "${poke.cry}"`);
      });

      partyGrid.appendChild(card);
    });

    if (partyCountBadge) {
      partyCountBadge.textContent = currentParty.length;
    }
  }

  // Add Pokémon function triggered by Thunderbolt
  function addPokemonToParty(targetElement = null) {
    // Pick a random pokemon from catalog
    const randomIndex = Math.floor(Math.random() * POKEMON_CATALOG.length);
    const chosenPoke = { ...POKEMON_CATALOG[randomIndex] };

    // Get position to target lightning
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;

    if (targetElement) {
      const rect = targetElement.getBoundingClientRect();
      targetX = rect.left + rect.width / 2;
      targetY = rect.top + rect.height / 2;
    } else {
      const addBtn = document.getElementById('add-pokemon-btn');
      if (addBtn) {
        const rect = addBtn.getBoundingClientRect();
        targetX = rect.left + rect.width / 2;
        targetY = rect.top + rect.height / 2;
      }
    }

    // 1. Pikachu strikes with Thunderbolt
    castThunderbolt(targetX, targetY, { intensity: 4 });

    // 2. Play catch fanfare sound
    setTimeout(() => {
      sfx.playCatchFanfare();
    }, 150);

    // 3. Add to party & re-render
    currentParty.unshift(chosenPoke);
    renderPartyRoster();

    // 4. Scroll to or highlight in party section
    showToast(`⚡ THUNDERBOLT! A wild ${chosenPoke.name.toUpperCase()} was caught and added to Harvender's Party!`);
  }

  // Hook Add Pokémon Buttons
  const addPokeBtn = document.getElementById('add-pokemon-btn');
  if (addPokeBtn) {
    addPokeBtn.addEventListener('click', (e) => {
      addPokemonToParty(addPokeBtn);
    });
  }

  const heroAddPokeBtn = document.getElementById('hero-add-pokemon-btn');
  if (heroAddPokeBtn) {
    heroAddPokeBtn.addEventListener('click', (e) => {
      addPokemonToParty(heroAddPokeBtn);
    });
  }

  const summonQuickBtn = document.getElementById('summon-quick-btn');
  if (summonQuickBtn) {
    summonQuickBtn.addEventListener('click', (e) => {
      addPokemonToParty(summonQuickBtn);
    });
  }

  const heroThunderboltBtn = document.getElementById('hero-thunderbolt-btn');
  if (heroThunderboltBtn) {
    heroThunderboltBtn.addEventListener('click', () => {
      const rect = heroThunderboltBtn.getBoundingClientRect();
      castThunderbolt(rect.left + rect.width / 2, rect.top + rect.height / 2);
      showToast('⚡ PIKACHU STRUCK THE STADIUM WITH MAXIMUM VOLTAGE!');
    });
  }

  const cardThunderTrigger = document.getElementById('card-thunder-trigger');
  if (cardThunderTrigger) {
    cardThunderTrigger.addEventListener('click', () => {
      const trainerCard = document.getElementById('trainer-main-card');
      const rect = trainerCard.getBoundingClientRect();
      castThunderbolt(rect.left + rect.width / 2, rect.top + rect.height / 2);
      showToast('⚡ TRAINER ID CARD OVERCHARGED BY PIKACHU!');
    });
  }

  const clearWildBtn = document.getElementById('clear-wild-btn');
  if (clearWildBtn) {
    clearWildBtn.addEventListener('click', () => {
      currentParty = [
        { ...POKEMON_CATALOG[0] },
        { ...POKEMON_CATALOG[1] },
        { ...POKEMON_CATALOG[2] },
        { ...POKEMON_CATALOG[3] },
        { ...POKEMON_CATALOG[4] },
        { ...POKEMON_CATALOG[9] }
      ];
      renderPartyRoster();
      sfx.playBeep(440);
      showToast('Party reset to Harvender\'s Core Starters.');
    });
  }

  // --- GLOBAL CLICK INTERACTION: THUNDERBOLT ON ANY CLICK ---
  // Every time user clicks on interactive elements, zap with Thunderbolt!
  document.addEventListener('click', (e) => {
    // If clicked on a target with .zap-target or button or link
    const target = e.target.closest('.zap-target, .btn, .skill-card, .project-card, .badge-card, .comm-channel');
    if (target) {
      const rect = target.getBoundingClientRect();
      castThunderbolt(rect.left + rect.width / 2, rect.top + rect.height / 2);
    }
  });

  // Double click anywhere on screen summons a Pokémon with thunderbolt!
  document.addEventListener('dblclick', (e) => {
    castThunderbolt(e.clientX, e.clientY);
    addPokemonToParty();
  });

  // --- AUDIO SFX TOGGLE ---
  const sfxToggleBtn = document.getElementById('sfx-toggle-btn');
  if (sfxToggleBtn) {
    sfxToggleBtn.addEventListener('click', () => {
      const isEnabled = sfx.toggle();
      const label = sfxToggleBtn.querySelector('.hud-label');
      const icon = sfxToggleBtn.querySelector('i');
      if (isEnabled) {
        label.textContent = 'SFX: ON';
        icon.className = 'fa-solid fa-volume-high';
        sfx.playBeep(880);
        showToast('🔊 Audio Synthesizer: ON (Pikachu Ready)');
      } else {
        label.textContent = 'SFX: OFF';
        icon.className = 'fa-solid fa-volume-xmark';
        showToast('🔇 Audio Synthesizer: MUTED');
      }
    });
  }

  // --- POKÉDEX MODAL DATA & INSPECTION ---
  const dexModal = document.getElementById('dex-modal');
  const dexModalBody = document.getElementById('dex-modal-body');
  const dexModalTitle = document.getElementById('dex-modal-title');
  const dexModalClose = document.getElementById('dex-modal-close');
  const dexModalZap = document.getElementById('dex-modal-zap');

  const PROJECT_DETAILS = {
    p1: {
      title: 'C++ HIGH-PERFORMANCE RAYTRACER & PHYSICS ENGINE',
      category: 'C++ Systems Architecture',
      overview: 'A multithreaded 3D raytracing and physics simulation sandbox engineered from scratch in modern C++20 with custom vector math, spatial bounding volume hierarchies (BVH), and cache-coherent memory layouts.',
      features: [
        'Multi-threaded tile rendering reaching 120 FPS physics updates',
        'SIMD-friendly custom vector and matrix math libraries',
        'Realistic Lambertian, metallic reflection, and dielectric refraction optics',
        'Zero-overhead memory allocators and low-level pointer safety'
      ],
      tech: ['C++20', 'Multithreading', 'Linear Algebra', 'Memory Management', 'BVH Trees'],
      status: 'OPERATIONAL & HIGH PERFORMANCE'
    },
    p2: {
      title: 'PYTHON AUTONOMOUS INTELLIGENCE & WORKFLOW AGENT',
      category: 'Python AI & Data Automation',
      overview: 'An asynchronous autonomous data aggregation and workflow intelligence engine designed in Python. Extracts unstructured web content, applies natural language processing models, summarizes telemetry, and triggers webhooks in real-time.',
      features: [
        'Asynchronous event-loop scraping engine with proxy rotation and rate limiting',
        'Automated summary pipelines extracting key business and data metrics',
        'RESTful API built with FastAPI with Swagger documentation',
        'High test coverage with automated unit and regression testing'
      ],
      tech: ['Python 3.x', 'FastAPI', 'BeautifulSoup', 'AsyncIO', 'NLP Models', 'Pandas'],
      status: 'DEPLOYED & SCALABLE'
    },
    p3: {
      title: 'CINEMATIC MOTION DESIGN & VFX SHOWREEL',
      category: 'Video & Visual Production',
      overview: 'A master showcase of cinematic short-form and commercial video edits, featuring custom kinetic typography, seamless sound design, 3D object tracking, and color grading tuned to commercial broadcast standards.',
      features: [
        'Precision rhythmic pacing synchronized with multi-layered audio stems',
        'Custom After Effects motion graphics, speed ramps, and 3D camera projections',
        'DaVinci Resolve color grading using LUTs and custom curve mastering',
        'Over 500,000+ collective digital impressions generated for creators'
      ],
      tech: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Photoshop', 'Sound Mastering'],
      status: 'CREATIVE PERFECTION'
    },
    p4: {
      title: 'AIESEC EGYPT CROSS-CULTURAL IMPACT PLATFORM',
      category: 'International Diplomacy & Web Portal',
      overview: 'A digital archival and cultural storytelling hub built to document the AIESEC Global Volunteer exchange in Cairo, Giza, and the Nile valley. Connects youth empowerment initiatives, workshop curricula, and volunteer media.',
      features: [
        'Curated photo & video documentary archive of Giza Pyramids and Cairo youth workshops',
        'Interactive bilingual learning modules bridging English and Egyptian Arabic',
        'Cross-cultural leadership case studies representing 15+ international delegations',
        'Awarded the Pharaoh\'s Solar Badge of Excellence by global coordinators'
      ],
      tech: ['AIESEC Global', 'Digital Storytelling', 'Cross-Cultural Leadership', 'Responsive Web'],
      status: 'GLOBAL MILESTONE'
    }
  };

  function openDexModal(projectId) {
    const data = PROJECT_DETAILS[projectId];
    if (!data || !dexModal) return;

    dexModalTitle.textContent = `POKÉDEX BLUEPRINT: ${data.category}`;
    dexModalBody.innerHTML = `
      <div style="margin-bottom: 16px;">
        <span style="font-family: var(--font-retro); font-size: 0.65rem; color: var(--pika-yellow); display: block; margin-bottom: 6px;">
          ${data.category.toUpperCase()} • ${data.status}
        </span>
        <h3 style="font-family: var(--font-title); font-size: 1.45rem; color: #fff; margin-bottom: 12px;">
          ${data.title}
        </h3>
        <p style="color: #cbd5e1; font-size: 0.95rem; line-height: 1.6; margin-bottom: 18px;">
          ${data.overview}
        </p>
      </div>

      <div style="background: rgba(0,0,0,0.4); padding: 16px; border-radius: var(--radius-sm); border: 1px solid rgba(255,255,255,0.08); margin-bottom: 18px;">
        <h4 style="font-family: var(--font-retro); font-size: 0.65rem; color: var(--thunder-cyan); margin-bottom: 10px;">
          CORE CAPABILITIES & BENCHMARKS:
        </h4>
        <ul style="list-style: none; padding-left: 0;">
          ${data.features.map(f => `<li style="font-size: 0.85rem; color: #e2e8f0; margin-bottom: 8px; display: flex; align-items: flex-start; gap: 8px;"><span style="color: var(--pika-yellow);">⚡</span> <span>${f}</span></li>`).join('')}
        </ul>
      </div>

      <div>
        <h4 style="font-family: var(--font-retro); font-size: 0.65rem; color: var(--text-muted); margin-bottom: 8px;">
          WEAPONRY & TECH STACK:
        </h4>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
          ${data.tech.map(t => `<span style="background: rgba(0,229,255,0.15); border: 1px solid var(--thunder-cyan); color: var(--thunder-cyan); font-size: 0.75rem; font-weight: 700; padding: 4px 10px; border-radius: 4px;">${t}</span>`).join('')}
        </div>
      </div>
    `;

    dexModal.classList.add('open');
    dexModal.setAttribute('aria-hidden', 'false');

    // Strike the opened modal with lightning
    const rect = dexModal.getBoundingClientRect();
    castThunderbolt(rect.left + rect.width / 2, rect.top + rect.height / 2);
  }

  function closeDexModal() {
    if (!dexModal) return;
    dexModal.classList.remove('open');
    dexModal.setAttribute('aria-hidden', 'true');
    sfx.playBeep(440);
  }

  // Hook Project Click Inspection
  document.querySelectorAll('.btn-dex-open, .project-card').forEach(item => {
    item.addEventListener('click', (e) => {
      const btn = e.target.closest('.btn-dex-open') || item.querySelector('.btn-dex-open');
      if (btn && btn.dataset.projectId) {
        openDexModal(btn.dataset.projectId);
      }
    });
  });

  if (dexModalClose) {
    dexModalClose.addEventListener('click', closeDexModal);
  }

  if (dexModalZap) {
    dexModalZap.addEventListener('click', () => {
      const rect = dexModalZap.getBoundingClientRect();
      castThunderbolt(rect.left + rect.width / 2, rect.top + rect.height / 2);
      showToast('⚡ POKÉDEX MODAL OVERLOADED WITH ELECTRICITY!');
    });
  }

  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDexModal();
    if (e.key === 'p' || e.key === 'P') addPokemonToParty();
  });

  // --- DYNAMIC HERO TYPING EFFECT ---
  const typingEl = document.getElementById('typing-text');
  const typingPhrases = [
    'C++ Systems Architect',
    'Python AI & Automation Dev',
    'Cinematic Video & VFX Editor',
    'AIESEC Egypt Global Fellow',
    'Pokédex Code Master'
  ];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    if (!typingEl) return;
    const currentPhrase = typingPhrases[phraseIndex];

    if (isDeleting) {
      typingEl.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingEl.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? 40 : 90;

    if (!isDeleting && charIndex === currentPhrase.length) {
      delay = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % typingPhrases.length;
      delay = 400;
    }

    setTimeout(typeEffect, delay);
  }
  setTimeout(typeEffect, 600);

  // --- MOBILE NAV TOGGLE ---
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
      sfx.playBeep(600);
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('mobile-open'));
    });
  }

  // --- INTERACTIVE CONTACT FORM ---
  const pokeForm = document.getElementById('poke-contact-form');
  if (pokeForm) {
    pokeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById('submit-transmission-btn');
      const rect = submitBtn.getBoundingClientRect();

      // Zap the submit button
      castThunderbolt(rect.left + rect.width / 2, rect.top + rect.height / 2, { intensity: 4 });
      sfx.playCatchFanfare();

      showToast('⚡ TRANSMISSION SENT! Harvender will respond with lightning speed!');
      pokeForm.reset();
    });
  }

  // Initial render of Pokémon Party
  renderPartyRoster();

  // Initial welcome greeting
  console.log('%c⚡ HARVENDER SINGH RAWAT | POKÉMON THEME PORTFOLIO LOADED! ⚡', 'background: #ffe600; color: #000; font-size: 14px; font-weight: bold; padding: 6px 12px; border-radius: 4px;');
})();
