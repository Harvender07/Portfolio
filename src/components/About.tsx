import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const pillars = [
  { icon: '🎖️', title: 'Army Discipline', desc: 'Raised in an army household — consistency, structure, and grit are part of my foundation.' },
  { icon: '🧠', title: 'Curious Builder', desc: 'I learn best by building. Turning ideas into working code is what drives me forward.' },
  { icon: '🎯', title: 'Problem Solver', desc: 'I enjoy breaking down complex problems into clear, actionable steps and implementing solutions.' },
  { icon: '🚀', title: 'Ambitious Learner', desc: 'First year, but already exploring AI, OS internals, and open-source contribution.' },
];

const infoItems = [
  { label: 'Institution', value: 'Newton School of Technology' },
  { label: 'Program', value: 'B.Tech CS & AI/ML' },
  { label: 'Batch', value: '2026 – 2030 (Year 1)' },
  { label: 'Location', value: 'Pune, Maharashtra, India' },
];

export const About: React.FC = () => {
  const [ref, inView] = useInView(0.15);

  return (
    <section id="about" className="relative py-28 md:py-36 overflow-hidden" ref={ref as React.RefObject<HTMLElement>}>
      <div className="noise-overlay" />
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label mb-4"
        >
          01 — ABOUT
        </motion.p>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="display-lg text-[var(--offwhite)] mb-16"
          style={{ maxWidth: '700px' }}
        >
          More Than<br />
          <span style={{ color: 'var(--cobalt)' }}>Just Code.</span>
        </motion.h2>

        {/* Grid */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-start">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-[var(--grey)] leading-relaxed mb-6" style={{ fontFamily: "'Inter',sans-serif", fontSize: '1.05rem' }}>
              I'm currently pursuing my B.Tech in <span className="text-[var(--offwhite)] font-medium">Computer Science and Artificial Intelligence & Machine Learning</span> at Newton School of Technology.
            </p>
            <p className="text-[var(--grey)] leading-relaxed mb-6" style={{ fontFamily: "'Inter',sans-serif", fontSize: '1.05rem' }}>
              I enjoy exploring technology, experimenting with ideas, and building practical solutions. My journey is driven by curiosity, creativity, and the desire to continuously improve.
            </p>
            <p className="text-[var(--grey)] leading-relaxed mb-10" style={{ fontFamily: "'Inter',sans-serif", fontSize: '1.05rem' }}>
              Coming from an Army background, <span className="text-[var(--offwhite)] font-medium">discipline, adaptability, and consistency</span> are values I carry into everything I do — whether it's debugging a segfault at 2am or committing to a new skill.
            </p>

            {/* Info table */}
            <div className="grid grid-cols-2 gap-4">
              {infoItems.map((item) => (
                <div key={item.label} className="p-4 rounded-xl" style={{ background: 'var(--charcoal-3)', border: '1px solid var(--border)' }}>
                  <p className="section-label mb-1">{item.label}</p>
                  <p className="text-[var(--offwhite)] font-medium text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Pillar cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="premium-card p-6"
              >
                <span className="text-2xl mb-4 block">{p.icon}</span>
                <h3 className="font-bold text-[var(--offwhite)] mb-2" style={{ fontFamily: "'Satoshi','Space Grotesk',sans-serif", fontSize: '1rem' }}>
                  {p.title}
                </h3>
                <p className="text-[var(--grey)] text-sm leading-relaxed" style={{ fontFamily: "'Inter',sans-serif" }}>
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
