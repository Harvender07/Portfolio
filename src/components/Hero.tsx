import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResumeDrawer: () => void;
}

const floatingTags = [
  { text: 'C++', x: '72%', y: '22%', delay: 0 },
  { text: 'Python', x: '78%', y: '54%', delay: 0.2 },
  { text: 'AI/ML', x: '68%', y: '72%', delay: 0.4 },
  { text: 'HTML', x: '65%', y: '38%', delay: 0.6 },
  { text: 'WorldQuant', x: '70%', y: '84%', delay: 0.8 },
];

export const Hero: React.FC<HeroProps> = ({ onOpenResumeDrawer }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      });
    };
    const el = containerRef.current;
    el?.addEventListener('mousemove', handleMove);
    return () => el?.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden mesh-bg"
      style={{ paddingTop: '80px' }}
    >
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Animated blobs */}
      <div
        className="blob-1 absolute rounded-full pointer-events-none"
        style={{
          width: 'clamp(300px, 40vw, 600px)',
          height: 'clamp(300px, 40vw, 600px)',
          top: '-10%', left: '-5%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
          transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -15}px)`,
          transition: 'transform 0.6s ease',
        }}
      />
      <div
        className="blob-2 absolute rounded-full pointer-events-none"
        style={{
          width: 'clamp(200px, 30vw, 450px)',
          height: 'clamp(200px, 30vw, 450px)',
          bottom: '5%', right: '10%',
          background: 'radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
          transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 12}px)`,
          transition: 'transform 0.6s ease',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center min-h-[calc(100vh-80px)] py-12">
          
          {/* Left: Text */}
          <div className="relative z-10 max-w-3xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="pulse-dot" />
              <span className="section-label" style={{ color: '#86efac' }}>OPEN TO INTERNSHIP OPPORTUNITIES</span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="display-xl text-[var(--offwhite)] mb-6"
            >
              Curious Mind.<br />
              <span style={{ color: 'var(--cobalt)' }}>Building</span><br />
              What's Next.
            </motion.h1>

            {/* Descriptor chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {['SOFTWARE DEVELOPMENT', 'AI/ML', 'WEB TECHNOLOGIES'].map((t) => (
                <span key={t} className="section-label px-3 py-1 rounded-full" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                  {t}
                </span>
              ))}
            </motion.div>

            {/* Supporting text */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-[var(--grey)] leading-relaxed mb-10"
              style={{ fontFamily: "'Inter',sans-serif", fontSize: 'clamp(1rem,2vw,1.15rem)', maxWidth: '520px' }}
            >
              I'm Harvender Singh Rawat — a Computer Science and AI/ML undergraduate at Newton School of Technology, exploring software engineering, intelligent systems, and digital experiences.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <button
                className="btn-primary"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore My Work
                <ArrowDown size={15} />
              </button>
              <button className="btn-ghost" onClick={onOpenResumeDrawer}>
                Download Resume
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center gap-4"
            >
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[var(--grey)] hover:text-[var(--offwhite)] transition-colors duration-200"
                style={{ fontFamily: "'Inter',sans-serif", fontSize: '0.82rem', fontWeight: 500 }}
              >
                <GithubIcon className="w-4 h-4" />
                GitHub
              </a>
              <span style={{ width: 1, height: 16, background: 'var(--border-h)' }} />
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[var(--grey)] hover:text-[var(--offwhite)] transition-colors duration-200"
                style={{ fontFamily: "'Inter',sans-serif", fontSize: '0.82rem', fontWeight: 500 }}
              >
                <LinkedinIcon className="w-4 h-4" />
                LinkedIn
              </a>
              <span style={{ width: 1, height: 16, background: 'var(--border-h)' }} />
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2 text-[var(--grey)] hover:text-[var(--offwhite)] transition-colors duration-200"
                style={{ fontFamily: "'Inter',sans-serif", fontSize: '0.82rem', fontWeight: 500 }}
              >
                <Mail size={16} />
                Email
              </a>
            </motion.div>
          </div>

          {/* Right: Portrait + floating tags */}
          <div className="hidden lg:flex relative items-center justify-center">
            {/* Profile image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
              style={{
                transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)`,
                transition: 'transform 0.5s ease',
              }}
            >
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{
                  width: 'clamp(240px, 24vw, 340px)',
                  height: 'clamp(300px, 30vw, 420px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: 'var(--charcoal-3)',
                }}
              >
                <img
                  src="/profile.jpg"
                  alt="Harvender Singh Rawat"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Show monogram fallback
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector('.monogram-fallback')) {
                      const div = document.createElement('div');
                      div.className = 'monogram-fallback';
                      div.style.cssText = 'position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-family:Satoshi,Space Grotesk,sans-serif;font-size:5rem;font-weight:900;color:rgba(37,99,235,0.3);letter-spacing:-0.04em;';
                      div.textContent = 'HSR';
                      parent.appendChild(div);
                    }
                  }}
                />
                {/* Gradient overlay at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0"
                  style={{ height: '40%', background: 'linear-gradient(to top, var(--charcoal) 0%, transparent 100%)' }}
                />
              </div>

              {/* Location label */}
              <div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 chip whitespace-nowrap"
                style={{ background: 'var(--charcoal-2)' }}
              >
                📍 Pune, India
              </div>
            </motion.div>

            {/* Floating tech tags */}
            {floatingTags.map((tag, i) => (
              <motion.div
                key={tag.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + tag.delay, duration: 0.4 }}
                className="absolute chip chip-cobalt"
                style={{
                  left: tag.x,
                  top: tag.y,
                  transform: 'translate(-50%, -50%)',
                  animationDelay: `${i * 0.4}s`,
                }}
              >
                {tag.text}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="section-label">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} className="text-[var(--grey)]" />
        </motion.div>
      </motion.div>
    </section>
  );
};
