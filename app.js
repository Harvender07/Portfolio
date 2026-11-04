/**
 * HARVENDER SINGH RAWAT | QUIDDITCH THEME MASTER PORTFOLIO
 * Core JavaScript: 3D Flight Tunnel Engine, Flying Broomstick Seeker,
 * Procedural Web Audio Synthesizer, Interactive Golden Snitch, and Hogwarts Atmosphere.
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. WEB AUDIO SYNTHESIZER (QUIDDITCH SOUND FX)
  // =========================================================================
  class QuidditchAudio {
    constructor() {
      this.ctx = null;
      this.enabled = true;
      this.lastWhooshTime = 0;
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

    // Procedural aerodynamic broom flight whoosh (modulated by scroll)
    playBroomWhoosh(intensity = 1.0) {
      if (!this.enabled) return;
      const now = Date.now();
      if (now - this.lastWhooshTime < 250) return; // throttle
      this.lastWhooshTime = now;

      this.init();
      const ctx = this.ctx;
      const t = ctx.currentTime;

      // Bandpass noise burst
      const bufferSize = ctx.sampleRate * 0.3;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(450 * intensity, t);
      filter.frequency.exponentialRampToValueAtTime(180, t + 0.3);
      filter.Q.setValueAtTime(2.5, t);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.18 * Math.min(intensity, 1.5), t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.3);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      noise.start(t);
    }

    // Golden Snitch Catch Fanfare (Triumphant magical arpeggio)
    playSnitchCatch() {
      if (!this.enabled) return;
      this.init();
      const ctx = this.ctx;
      const t = ctx.currentTime;

      // Sparkling chime chord: E5, G#5, B5, E6
      const notes = [659.25, 830.61, 987.77, 1318.51, 1661.22];
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, t + idx * 0.08);

        gain.gain.setValueAtTime(0.25, t + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, t + idx * 0.08 + 0.6);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(t + idx * 0.08);
        osc.stop(t + idx * 0.08 + 0.65);
      });
    }

    // Wand Spell Cast (Frequency sweep + glitter)
    playSpellCast() {
      if (!this.enabled) return;
      this.init();
      const ctx = this.ctx;
      const t = ctx.currentTime;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(520, t);
      osc.frequency.exponentialRampToValueAtTime(1400, t + 0.2);

      gain.gain.setValueAtTime(0.2, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.28);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(t);
      osc.stop(t + 0.3);
    }

    // Lumos Light Maxima Chime
    playLumos() {
      if (!this.enabled) return;
      this.init();
      const ctx = this.ctx;
      const t = ctx.currentTime;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, t);
      osc.frequency.exponentialRampToValueAtTime(1760, t + 0.4);

      gain.gain.setValueAtTime(0.3, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.5);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(t);
      osc.stop(t + 0.55);
    }

    // Parchment / Owl Post Dispatch sound
    playOwlPost() {
      if (!this.enabled) return;
      this.init();
      const ctx = this.ctx;
      const t = ctx.currentTime;

      // Soft wing flap & chime
      [0, 0.12].forEach((offset) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, t + offset);
        gain.gain.setValueAtTime(0.12, t + offset);
        gain.gain.exponentialRampToValueAtTime(0.001, t + offset + 0.15);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(t + offset);
        osc.stop(t + offset + 0.16);
      });
    }
  }

  const audio = new QuidditchAudio();

  // =========================================================================
  // 2. CANVAS ENGINE: HOGWARTS NIGHT SKY, STADIUM & MAGICAL PARTICLES
  // =========================================================================
  class QuidditchPitchCanvas {
    constructor(canvasId) {
      this.canvas = document.getElementById(canvasId);
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');
      this.stars = [];
      this.magicDust = [];
      this.sparkSpirals = [];
      this.width = 0;
      this.height = 0;
      this.mouseX = -100;
      this.mouseY = -100;
      this.isScrollingFast = false;

      this.resize();
      this.initStars();
      this.bindEvents();
      this.animate();
    }

    resize() {
      this.width = this.canvas.width = window.innerWidth;
      this.height = this.canvas.height = window.innerHeight;
    }

    initStars() {
      this.stars = [];
      const starCount = Math.floor((this.width * this.height) / 7000);
      for (let i = 0; i < starCount; i++) {
        this.stars.push({
          x: Math.random() * this.width,
          y: Math.random() * this.height,
          radius: Math.random() * 1.6 + 0.4,
          alpha: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.02 + 0.005,
          color: Math.random() > 0.4 ? '#ffd700' : '#ffffff'
        });
      }
    }

    addSpark(x, y, count = 4) {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3 + 1;
        this.magicDust.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: Math.random() * 2.5 + 1,
          alpha: 1,
          decay: Math.random() * 0.03 + 0.015,
          color: Math.random() > 0.5 ? '#ffd700' : '#eeba30'
        });
      }
    }

    bindEvents() {
      window.addEventListener('resize', () => {
        this.resize();
        this.initStars();
      });

      window.addEventListener('mousemove', (e) => {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
        if (Math.random() > 0.6) {
          this.addSpark(this.mouseX, this.mouseY, 1);
        }
      });
    }

    animate() {
      const ctx = this.ctx;
      ctx.clearRect(0, 0, this.width, this.height);

      // Draw distant stars
      for (let s of this.stars) {
        s.alpha += s.speed;
        const currentAlpha = Math.abs(Math.sin(s.alpha));
        ctx.fillStyle = s.color;
        ctx.globalAlpha = currentAlpha * 0.7;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw floating golden magical dust
      if (Math.random() < 0.2 && this.magicDust.length < 100) {
        this.magicDust.push({
          x: Math.random() * this.width,
          y: this.height + 10,
          vx: (Math.random() - 0.5) * 0.8,
          vy: -(Math.random() * 1.5 + 0.5),
          radius: Math.random() * 2 + 1,
          alpha: Math.random() * 0.6 + 0.4,
          decay: Math.random() * 0.005 + 0.002,
          color: '#ffd700'
        });
      }

      for (let i = this.magicDust.length - 1; i >= 0; i--) {
        const p = this.magicDust[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          this.magicDust.splice(i, 1);
          continue;
        }

        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.shadowColor = '#ffd700';
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;

      requestAnimationFrame(() => this.animate());
    }
  }

  // =========================================================================
  // 3. THE FLYING BROOM CHARACTER & 3D SCROLL DIVE CONTROLLER
  // =========================================================================
  class FlyingBroomFlightController {
    constructor() {
      this.broomEl = document.getElementById('flying-broom-character');
      this.speedValEl = document.getElementById('broom-speed-val');
      this.speechEl = document.getElementById('seeker-speech');
      this.speechTextEl = document.getElementById('seeker-speech-text');
      this.altitudeFillEl = document.getElementById('altitude-fill');
      this.hoopSections = document.querySelectorAll('.hoop-section');
      this.hoopDots = document.querySelectorAll('.hoop-dot');

      this.currentSpeed = 85;
      this.targetSpeed = 85;
      this.lastScrollY = window.scrollY;
      this.scrollVelocity = 0;
      this.scrollTimer = null;
      this.activeHoopNum = 1;

      this.hoopCallouts = {
        1: 'Welcome to the Pitch! Hold tight to your broom! ⚡',
        2: 'Entering the Seeker\'s Spellbook: C++, Python & VFX! ✨',
        3: 'Tournament Match Blueprints: Raytracer, AI Agent, Motion Reel! 🏆',
        4: 'Soaring through the Tower of Polyglot Charms! 📜',
        5: 'The Hogwarts Trophy Room! Golden honors await! 👑',
        6: 'Gryffindor First Team Roster assembled on the pitch! 🦁',
        7: 'The Owl Post! Dispatch an enchanted parchment letter! ✉️'
      };

      this.init();
    }

    init() {
      if (!this.broomEl) return;
      this.bindEvents();
      this.updateFlightTelemetry();
    }

    bindEvents() {
      // Mouse Parallax & Dynamic Broom Banking
      window.addEventListener('mousemove', (e) => {
        const normX = (e.clientX / window.innerWidth) * 2 - 1; // -1 to 1
        const normY = (e.clientY / window.innerHeight) * 2 - 1;

        const tiltX = -normY * 12;
        const tiltY = normX * 18;
        const transX = normX * 15;

        if (!this.broomEl.classList.contains('dive-mode')) {
          this.broomEl.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateX(${transX}px)`;
        }
      });

      // Scroll Event: 3D Depth Zoom, Dive acceleration & Hoop tracking
      window.addEventListener('scroll', () => {
        const currentY = window.scrollY;
        const delta = Math.abs(currentY - this.lastScrollY);
        this.scrollVelocity = delta;
        this.lastScrollY = currentY;

        // Accelerate broom into dive mode
        this.targetSpeed = Math.min(85 + delta * 2.5, 175);
        this.broomEl.classList.add('dive-mode');

        // Play aerodynamic whoosh sound
        if (delta > 20) {
          audio.playBroomWhoosh(delta / 25);
        }

        clearTimeout(this.scrollTimer);
        this.scrollTimer = setTimeout(() => {
          this.targetSpeed = 85;
          this.broomEl.classList.remove('dive-mode');
        }, 220);

        this.updateActiveHoop();
        this.updateAltitudeHUD();
      }, { passive: true });

      // Click on broom to boost speed
      this.broomEl.addEventListener('click', () => {
        this.triggerBroomBoost();
      });

      // Hero action buttons
      const diveBtn = document.getElementById('hero-dive-btn');
      if (diveBtn) {
        diveBtn.addEventListener('click', () => {
          const targetSection = document.getElementById('skills');
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
            this.triggerBroomBoost();
          }
        });
      }

      const cardBoostBtn = document.getElementById('card-broom-boost-btn');
      if (cardBoostBtn) {
        cardBoostBtn.addEventListener('click', () => {
          this.triggerBroomBoost();
        });
      }
    }

    triggerBroomBoost() {
      audio.playBroomWhoosh(2.2);
      this.targetSpeed = 195;
      this.broomEl.classList.add('dive-mode');
      this.showSpeech('⚡ FIREBOLT TURBO BOOST ENGAGED! 195 MPH!');

      // Screen flash effect
      const flash = document.getElementById('spell-flash');
      if (flash) {
        flash.classList.add('active');
        setTimeout(() => flash.classList.remove('active'), 250);
      }

      setTimeout(() => {
        this.targetSpeed = 85;
        this.broomEl.classList.remove('dive-mode');
      }, 1000);
    }

    updateFlightTelemetry() {
      // Smooth lerp speed
      this.currentSpeed += (this.targetSpeed - this.currentSpeed) * 0.12;
      if (this.speedValEl) {
        this.speedValEl.textContent = Math.round(this.currentSpeed);
      }

      requestAnimationFrame(() => this.updateFlightTelemetry());
    }

    updateActiveHoop() {
      const scrollPos = window.scrollY + window.innerHeight * 0.4;

      this.hoopSections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const hoopNum = parseInt(section.getAttribute('data-hoop-num') || '1', 10);

        if (scrollPos >= top && scrollPos < top + height) {
          if (this.activeHoopNum !== hoopNum) {
            this.activeHoopNum = hoopNum;
            this.onHoopEnter(hoopNum);
          }
        }
      });
    }

    onHoopEnter(hoopNum) {
      // Update speech text
      if (this.hoopCallouts[hoopNum]) {
        this.showSpeech(this.hoopCallouts[hoopNum]);
      }

      // Update route minimap dots
      this.hoopDots.forEach((dot) => {
        const dotHoop = parseInt(dot.getAttribute('data-hoop') || '0', 10);
        dot.classList.toggle('active', dotHoop === hoopNum);
      });

      // Update main navigation active state
      const navLinks = document.querySelectorAll('.nav-links .nav-link');
      const activeSection = document.querySelector(`.hoop-section[data-hoop-num="${hoopNum}"]`);
      if (activeSection) {
        const activeId = activeSection.id;
        navLinks.forEach((link) => {
          const href = link.getAttribute('href');
          link.classList.toggle('active', href === `#${activeId}`);
        });
      }
    }

    showSpeech(text) {
      if (!this.speechTextEl) return;
      this.speechTextEl.textContent = text;
      if (this.speechEl) {
        this.speechEl.style.opacity = '1';
        this.speechEl.style.transform = 'translateY(-6px)';
        clearTimeout(this._speechTimeout);
        this._speechTimeout = setTimeout(() => {
          this.speechEl.style.transform = 'translateY(0)';
        }, 1500);
      }
    }

    updateAltitudeHUD() {
      if (!this.altitudeFillEl) return;
      const totalDoc = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalDoc > 0 ? (window.scrollY / totalDoc) * 100 : 0;
      this.altitudeFillEl.style.height = `${Math.min(Math.max(progress, 5), 100)}%`;
    }
  }

  // =========================================================================
  // 4. INTERACTIVE GOLDEN SNITCH (CHASE & CATCH GAME)
  // =========================================================================
  class GoldenSnitchGame {
    constructor() {
      this.snitchEl = document.getElementById('golden-snitch');
      this.scoreEl = document.getElementById('gryffindor-score');
      this.toastEl = document.getElementById('quidditch-toast');
      this.score = 150;
      this.posX = window.innerWidth * 0.6;
      this.posY = 220;
      this.targetX = this.posX;
      this.targetY = this.posY;
      this.time = 0;
      this.isCaught = false;

      this.init();
    }

    init() {
      if (!this.snitchEl) return;
      this.bindEvents();
      this.flyLoop();
    }

    bindEvents() {
      // Click Snitch to catch
      this.snitchEl.addEventListener('click', (e) => {
        e.stopPropagation();
        this.catchSnitch();
      });

      // Chase button in hero
      const heroChaseBtn = document.getElementById('hero-catch-snitch-btn');
      if (heroChaseBtn) {
        heroChaseBtn.addEventListener('click', () => {
          this.catchSnitch();
        });
      }

      // Snitch playfully flees when mouse gets very close
      window.addEventListener('mousemove', (e) => {
        if (this.isCaught) return;
        const dx = e.clientX - this.posX;
        const dy = e.clientY - this.posY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 80) {
          // Dash away
          this.targetX -= (dx / dist) * 120;
          this.targetY -= (dy / dist) * 120;
          this.clampBounds();
        }
      });
    }

    flyLoop() {
      if (!this.isCaught) {
        this.time += 0.035;
        // Natural figure-eight Lissajous flutter
        this.targetX += Math.cos(this.time * 0.8) * 4;
        this.targetY += Math.sin(this.time * 1.6) * 3;

        // Smooth glide toward target
        this.posX += (this.targetX - this.posX) * 0.08;
        this.posY += (this.targetY - this.posY) * 0.08;

        this.clampBounds();
        this.snitchEl.style.transform = `translate3d(${this.posX}px, ${this.posY}px, 0)`;
      }

      requestAnimationFrame(() => this.flyLoop());
    }

    clampBounds() {
      const pad = 60;
      const maxX = window.innerWidth - pad;
      const maxY = window.innerHeight - pad;

      if (this.targetX < pad) this.targetX = pad + 40;
      if (this.targetX > maxX) this.targetX = maxX - 40;
      if (this.targetY < 80) this.targetY = 120;
      if (this.targetY > maxY) this.targetY = maxY - 40;
    }

    catchSnitch() {
      if (this.isCaught) return;
      this.isCaught = true;

      // Play triumphant fanfare
      audio.playSnitchCatch();

      // Update score
      this.score += 150;
      if (this.scoreEl) {
        this.scoreEl.textContent = this.score;
        this.scoreEl.style.color = '#ffd700';
        this.scoreEl.style.transform = 'scale(1.4)';
        setTimeout(() => {
          this.scoreEl.style.transform = 'scale(1)';
        }, 400);
      }

      // Show popup on snitch
      const popup = document.getElementById('snitch-popup');
      if (popup) {
        popup.classList.add('pop');
      }

      // Show toast
      this.showToast('🏆 GOLDEN SNITCH CAUGHT! 150 POINTS TO GRYFFINDOR!');

      // Seeker cheer
      const seekerVoice = document.getElementById('seeker-speech-text');
      if (seekerVoice) {
        seekerVoice.textContent = '⚡ What a catch! 150 points for Gryffindor!';
      }

      // Respawn after victory lap
      setTimeout(() => {
        if (popup) popup.classList.remove('pop');
        this.targetX = Math.random() * (window.innerWidth - 200) + 100;
        this.targetY = Math.random() * (window.innerHeight - 300) + 120;
        this.isCaught = false;
      }, 1600);
    }

    showToast(msg) {
      if (!this.toastEl) return;
      this.toastEl.innerHTML = `<i class="fa-solid fa-trophy"></i> <span>${msg}</span>`;
      this.toastEl.classList.add('show');
      setTimeout(() => {
        this.toastEl.classList.remove('show');
      }, 3500);
    }
  }

  // =========================================================================
  // 5. QUIDDITCH SQUAD ROSTER (INTERACTIVE PLAYER SUMMONS)
  // =========================================================================
  class QuidditchSquadRoster {
    constructor() {
      this.gridEl = document.getElementById('squad-roster-grid');
      this.badgeCountEl = document.getElementById('squad-count-badge');
      this.summonBtn = document.getElementById('summon-player-btn');
      this.resetBtn = document.getElementById('reset-squad-btn');

      this.initialPlayers = [
        { name: 'Harvender S. Rawat', role: 'Seeker (Captain)', broom: 'Nimbus 2000 Pro', img: 'assets/images/quidditch_seeker_avatar.jpg', crest: '⚡' },
        { name: 'Oliver Wood', role: 'Keeper', broom: 'Cleansweep Seven', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80', crest: '🛡️' },
        { name: 'Angelina Johnson', role: 'Chaser', broom: 'Nimbus 2001', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80', crest: '🔥' },
        { name: 'Fred Weasley', role: 'Beater', broom: 'Cleansweep Five', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80', crest: '💥' },
        { name: 'George Weasley', role: 'Beater', broom: 'Cleansweep Five', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80', crest: '💥' },
        { name: 'Alicia Spinnet', role: 'Chaser', broom: 'Comet 260', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80', crest: '🎯' },
        { name: 'Katie Bell', role: 'Chaser', broom: 'Silver Arrow', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80', crest: '⚡' }
      ];

      this.summonPool = [
        { name: 'Harry Potter', role: 'Seeker Reserve', broom: 'Firebolt Supreme', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80', crest: '⚡' },
        { name: 'Ginny Weasley', role: 'Chaser Specialist', broom: 'Cleansweep Eleven', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80', crest: '🦁' },
        { name: 'Hermione Granger', role: 'Tactical Arithmancer', broom: 'Enchanted Comet', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80', crest: '📚' },
        { name: 'Ron Weasley', role: 'Keeper Reserve', broom: 'Cleansweep Eleven', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80', crest: '👑' }
      ];

      this.currentSquad = [...this.initialPlayers];
      this.init();
    }

    init() {
      this.render();
      if (this.summonBtn) {
        this.summonBtn.addEventListener('click', () => this.summonPlayer());
      }
      if (this.resetBtn) {
        this.resetBtn.addEventListener('click', () => {
          this.currentSquad = [...this.initialPlayers];
          this.render();
          audio.playSpellCast();
        });
      }
    }

    render() {
      if (!this.gridEl) return;
      this.gridEl.innerHTML = '';

      this.currentSquad.forEach((player) => {
        const card = document.createElement('div');
        card.className = 'squad-player-card holo-tilt';
        card.innerHTML = `
          <div class="player-avatar-circle">
            <img src="${player.img}" alt="${player.name}" loading="lazy">
          </div>
          <h4 class="player-name">${player.name}</h4>
          <span class="player-role">${player.crest} ${player.role}</span>
          <span class="player-broom"><i class="fa-solid fa-broom"></i> ${player.broom}</span>
        `;
        this.gridEl.appendChild(card);
      });

      if (this.badgeCountEl) {
        this.badgeCountEl.textContent = this.currentSquad.length;
      }
    }

    summonPlayer() {
      if (this.summonPool.length === 0) {
        this.currentSquad.push({
          name: `Hogwarts Prodigy #${this.currentSquad.length + 1}`,
          role: 'Flying Chaser',
          broom: 'Nimbus 2000 Pro',
          img: 'assets/images/quidditch_seeker_avatar.jpg',
          crest: '✨'
        });
      } else {
        const next = this.summonPool.shift();
        this.currentSquad.push(next);
      }

      audio.playSpellCast();
      this.render();

      // Trigger screen spell flash
      const flash = document.getElementById('spell-flash');
      if (flash) {
        flash.classList.add('active');
        setTimeout(() => flash.classList.remove('active'), 200);
      }
    }
  }

  // =========================================================================
  // 6. PARCHMENT MODAL INSPECTOR (MATCHES & PROJECTS ARCHIVE)
  // =========================================================================
  class ParchmentModalInspector {
    constructor() {
      this.modalEl = document.getElementById('parchment-modal');
      this.titleEl = document.getElementById('parchment-modal-title');
      this.bodyEl = document.getElementById('parchment-modal-body');
      this.closeBtn = document.getElementById('modal-close-btn');
      this.castBtn = document.getElementById('modal-cast-btn');

      this.projectsData = {
        p1: {
          title: 'C++ High-Performance Raytracer & Physics Sandbox',
          type: 'C++ Core Systems & Memory Architecture',
          tags: ['C++20', 'BVH Trees', 'Linear Algebra', 'Multithreading'],
          desc: 'A custom, low-level multi-threaded rendering and physical simulation engine engineered in modern C++20. Features bounding volume hierarchy (BVH) spatial acceleration, specular/diffuse Monte Carlo path tracing, custom memory pools, and SIMD mathematical optimization. Built for peak frame rates and computational purity.'
        },
        p2: {
          title: 'Python Autonomous Intelligence & Workflow Agent',
          type: 'Intelligent AI Automation & Scraping',
          tags: ['Python 3.x', 'FastAPI', 'AsyncIO', 'NLP', 'BeautifulSoup'],
          desc: 'An autonomous pipeline capable of ingesting high volumes of unstructured web data, conducting semantic classification and contextual summarization, and triggering automated REST webhooks. Utilizes asynchronous task queues and resilient error recovery patterns.'
        },
        p3: {
          title: 'Cinematic Motion Showcase & VFX Showreel',
          type: 'Visual Storytelling & Sound Design',
          tags: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Sound Design'],
          desc: 'A master collection of high-energy commercial edits, kinetic typography, dynamic speed ramps, and seamless Foley sound design. Crafted with surgical frame timing to maximize audience engagement and emotional resonance across digital media.'
        },
        p4: {
          title: 'Interactive 3D Web Engine & Procedural Audio Sandbox',
          type: 'Graphics Programming & Web Engineering',
          tags: ['Canvas 2D', 'WebGL', 'Web Audio API', 'JavaScript ES6+'],
          desc: 'A GPU-accelerated web graphics, particle dynamics, and audio synthesis interactive sandbox. Features real-time 3D perspective projections, dynamic lighting physics, and silky 60fps animations.'
        }
      };

      this.init();
    }

    init() {
      if (!this.modalEl) return;

      // Bind blueprint buttons
      document.querySelectorAll('.btn-inspect-parchment').forEach((btn) => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const pId = btn.getAttribute('data-project-id');
          this.open(pId);
        });
      });

      // Bind close buttons
      if (this.closeBtn) {
        this.closeBtn.addEventListener('click', () => this.close());
      }
      this.modalEl.addEventListener('click', (e) => {
        if (e.target === this.modalEl || e.target.classList.contains('modal-backdrop')) {
          this.close();
        }
      });

      // Modal Cast Lumos
      if (this.castBtn) {
        this.castBtn.addEventListener('click', () => {
          audio.playSpellCast();
          this.bodyEl.style.boxShadow = 'inset 0 0 30px rgba(255, 215, 0, 0.4)';
          setTimeout(() => {
            this.bodyEl.style.boxShadow = 'none';
          }, 800);
        });
      }
    }

    open(projectId) {
      const data = this.projectsData[projectId];
      if (!data) return;

      audio.playSpellCast();
      this.titleEl.textContent = `HOGWARTS REGISTRY • ${data.type.toUpperCase()}`;
      this.bodyEl.innerHTML = `
        <h3>${data.title}</h3>
        <p><strong>Discipline:</strong> ${data.type}</p>
        <p>${data.desc}</p>
        <div class="project-tags" style="margin-top: 16px;">
          ${data.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      `;

      this.modalEl.classList.add('active');
      this.modalEl.setAttribute('aria-hidden', 'false');
    }

    close() {
      this.modalEl.classList.remove('active');
      this.modalEl.setAttribute('aria-hidden', 'true');
    }
  }

  // =========================================================================
  // 7. LUMOS MAXIMA & AUDIO HUD CONTROLS
  // =========================================================================
  function setupHudControls() {
    // SFX Toggle
    const sfxBtn = document.getElementById('sfx-toggle-btn');
    if (sfxBtn) {
      sfxBtn.addEventListener('click', () => {
        const state = audio.toggle();
        const icon = sfxBtn.querySelector('i');
        const label = sfxBtn.querySelector('.hud-label');
        if (state) {
          icon.className = 'fa-solid fa-volume-high';
          label.textContent = 'SFX: ON';
          audio.playSpellCast();
        } else {
          icon.className = 'fa-solid fa-volume-xmark';
          label.textContent = 'SFX: OFF';
        }
      });
    }

    // Lumos Spell Button
    const lumosBtn = document.getElementById('lumos-spell-btn');
    if (lumosBtn) {
      lumosBtn.addEventListener('click', () => {
        document.body.classList.toggle('lumos-active');
        audio.playLumos();

        const flash = document.getElementById('spell-flash');
        if (flash) {
          flash.classList.add('active');
          setTimeout(() => flash.classList.remove('active'), 350);
        }

        const isLumos = document.body.classList.contains('lumos-active');
        lumosBtn.querySelector('.hud-label').textContent = isLumos ? 'NOX' : 'LUMOS';
      });
    }

    // Spell Cast on cards
    document.querySelectorAll('.btn-cast-spell').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        audio.playSpellCast();
        const card = btn.closest('.spell-card');
        if (card) {
          card.style.transform = 'scale(1.04) translateY(-10px)';
          setTimeout(() => card.style.transform = '', 350);
        }
      });
    });
  }

  // =========================================================================
  // 8. OWL POST CONTACT FORM (INTERACTIVE DISPATCH)
  // =========================================================================
  function setupOwlPostForm() {
    const form = document.getElementById('quidditch-contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      audio.playOwlPost();

      const btn = document.getElementById('submit-letter-btn');
      const origText = btn.innerHTML;
      btn.innerHTML = '<i class="fa-solid fa-feather"></i> DISPATCHING OWL...';
      btn.disabled = true;

      setTimeout(() => {
        btn.innerHTML = '<i class="fa-solid fa-check"></i> OWL DISPATCHED!';
        form.reset();

        const toast = document.getElementById('quidditch-toast');
        if (toast) {
          toast.innerHTML = '<i class="fa-solid fa-envelope-circle-check"></i> <span>Owl dispatched to Harvender! Expect a swift reply!</span>';
          toast.classList.add('show');
          setTimeout(() => toast.classList.remove('show'), 4000);
        }

        setTimeout(() => {
          btn.innerHTML = origText;
          btn.disabled = false;
        }, 2500);
      }, 900);
    });
  }

  // =========================================================================
  // 9. TYPING ANIMATION (HERO VOCATION)
  // =========================================================================
  function setupTypingAnimation() {
    const typingEl = document.getElementById('typing-text');
    if (!typingEl) return;

    const phrases = [
      'C++ & Python Sorcerer • High-Performance Code',
      'Cinematic Motion Video Editor & VFX Visualist',
      'Interactive 3D Web & Graphics Architect',
      'Gryffindor Quidditch Seeker • Always Chasing the Snitch'
    ];

    let phraseIdx = 0;
    let charIdx = 0;
    let isDeleting = false;

    function typeLoop() {
      const current = phrases[phraseIdx];
      if (isDeleting) {
        typingEl.textContent = current.substring(0, charIdx - 1);
        charIdx--;
      } else {
        typingEl.textContent = current.substring(0, charIdx + 1);
        charIdx++;
      }

      let speed = isDeleting ? 30 : 60;

      if (!isDeleting && charIdx === current.length) {
        speed = 2200; // Pause at full phrase
        isDeleting = true;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        speed = 400;
      }

      setTimeout(typeLoop, speed);
    }

    typeLoop();
  }

  // =========================================================================
  // 10. MOBILE MENU TOGGLE
  // =========================================================================
  function setupMobileMenu() {
    const toggle = document.getElementById('mobile-menu-toggle');
    const links = document.querySelector('.nav-links');
    if (toggle && links) {
      toggle.addEventListener('click', () => {
        const isOpen = links.style.display === 'flex';
        links.style.display = isOpen ? 'none' : 'flex';
        if (!isOpen) {
          links.style.flexDirection = 'column';
          links.style.position = 'absolute';
          links.style.top = '72px';
          links.style.left = '0';
          links.style.width = '100%';
          links.style.background = 'rgba(7, 9, 20, 0.98)';
          links.style.padding = '20px';
          links.style.borderBottom = '1px solid #eeba30';
        }
      });
    }
  }

  // =========================================================================
  // DOM READY INITIALIZER
  // =========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    new QuidditchPitchCanvas('quidditch-canvas');
    new FlyingBroomFlightController();
    new GoldenSnitchGame();
    new QuidditchSquadRoster();
    new ParchmentModalInspector();
    setupHudControls();
    setupOwlPostForm();
    setupTypingAnimation();
    setupMobileMenu();
  });

})();
