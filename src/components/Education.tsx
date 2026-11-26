import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="education" className="relative py-28 md:py-36 overflow-hidden mesh-bg-2" ref={ref as React.RefObject<HTMLElement>}>
      <div className="noise-overlay" />
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label mb-4"
        >
          05 — EDUCATION
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="display-lg text-[var(--offwhite)] mb-16"
        >
          Academic<br />
          <span style={{ color: 'var(--cobalt)' }}>Background.</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative pl-8 space-y-10">
          {/* Vertical line */}
          <div className="timeline-line" />

          {EDUCATION_DATA.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="relative"
            >
              {/* Dot */}
              <div
                className="absolute -left-[29px] top-6 w-3 h-3 rounded-full border-2"
                style={{
                  borderColor: i === 0 ? 'var(--cobalt)' : 'var(--border-h)',
                  background: i === 0 ? 'var(--cobalt)' : 'var(--charcoal)',
                  boxShadow: i === 0 ? '0 0 12px rgba(37,99,235,0.5)' : 'none',
                }}
              />

              <div className="premium-card p-7">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className="chip"
                        style={{
                          borderColor: i === 0 ? 'rgba(37,99,235,0.3)' : 'var(--border)',
                          color: i === 0 ? '#60a5fa' : 'var(--grey)',
                          background: i === 0 ? 'rgba(37,99,235,0.08)' : 'transparent',
                        }}
                      >
                        {edu.timeline}
                      </span>
                      {i === 0 && (
                        <span className="chip" style={{ color: '#4ade80', borderColor: 'rgba(74,222,128,0.2)', background: 'rgba(74,222,128,0.05)' }}>
                          ● Current
                        </span>
                      )}
                      {edu.score && (
                        <span className="chip chip-lavender">{edu.score}</span>
                      )}
                    </div>
                    <h3
                      className="font-bold text-[var(--offwhite)]"
                      style={{ fontFamily: "'Satoshi','Space Grotesk',sans-serif", fontSize: '1.25rem', letterSpacing: '-0.02em' }}
                    >
                      {edu.institution}
                    </h3>
                    <p className="text-[var(--grey)] text-sm mt-1" style={{ fontFamily: "'Inter',sans-serif" }}>
                      {edu.degree}
                    </p>
                    {edu.location && (
                      <p className="section-label mt-1">📍 {edu.location}</p>
                    )}
                  </div>
                </div>

                {edu.highlights && edu.highlights.length > 0 && (
                  <ul className="space-y-1.5 mb-4">
                    {edu.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-[var(--grey)]" style={{ fontFamily: "'Inter',sans-serif" }}>
                        <span className="text-[var(--cobalt)] mt-1 flex-shrink-0">→</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                )}

                {edu.focusAreas && edu.focusAreas.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {edu.focusAreas.map((f) => (
                      <span key={f} className="chip">{f}</span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
