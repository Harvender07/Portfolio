import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

export const CTABand: React.FC<{ onOpenResumeDrawer: () => void }> = ({ onOpenResumeDrawer }) => {
  const [ref, inView] = useInView(0.15);

  return (
    <section className="cta-band py-24 md:py-32" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label mb-6"
        >
          OPEN FOR COLLABORATION
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="display-lg text-[var(--offwhite)] mb-6"
        >
          Let's Build Something<br />
          <span style={{ color: 'var(--cobalt)' }}>That Matters.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-[var(--grey)] mb-8 mx-auto"
          style={{ fontFamily: "'Inter',sans-serif", maxWidth: '500px', fontSize: '1.05rem', lineHeight: 1.7 }}
        >
          First-year CS & AI/ML undergrad seeking internship opportunities. Passionate, disciplined, and ready to contribute.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-wrap gap-3 justify-center mb-10"
        >
          {['Software Development', 'AI/ML', 'Frontend Engineering'].map((tag) => (
            <span key={tag} className="chip chip-cobalt">{tag}</span>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <button
            className="btn-primary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Connect →
          </button>
          <button className="btn-ghost" onClick={onOpenResumeDrawer}>
            View Resume
          </button>
        </motion.div>
      </div>
    </section>
  );
};
