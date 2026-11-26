import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const pillars = [
  { emoji: '🏀', title: 'Basketball', desc: 'Court game that teaches quick decisions, teamwork, and reading situations in real time.' },
  { emoji: '💪', title: 'Fitness & Discipline', desc: 'Consistent training habits from an army background — physical discipline fuels mental focus.' },
  { emoji: '🎬', title: 'Video Editing & Content', desc: 'Turning raw footage into polished stories. Visual storytelling meets technical execution.' },
  { emoji: '🔭', title: 'Exploring Tech', desc: 'Fascinated by emerging tools, AI products, and digital experiences — always curious what\'s next.' },
];

export const BeyondTech: React.FC = () => {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="beyond" className="relative py-24 overflow-hidden" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label mb-4"
        >
          07 — BEYOND THE SCREEN
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="display-md text-[var(--offwhite)] mb-14"
        >
          Life Beyond<br />
          <span style={{ color: 'var(--lavender)' }}>The Screen.</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="premium-card p-6"
            >
              <span className="text-3xl mb-4 block">{p.emoji}</span>
              <h3
                className="font-bold text-[var(--offwhite)] mb-2"
                style={{ fontFamily: "'Satoshi','Space Grotesk',sans-serif", fontSize: '1rem' }}
              >
                {p.title}
              </h3>
              <p className="text-[var(--grey)] text-sm leading-relaxed" style={{ fontFamily: "'Inter',sans-serif" }}>
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
