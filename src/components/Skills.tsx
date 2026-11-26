import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { SKILLS_DATA } from '../data/portfolioData';

const expertiseCards = [
  {
    index: '01',
    title: 'Software Development',
    color: 'var(--cobalt)',
    desc: 'Programming fundamentals in C++ and Python, logical problem-solving, CLI tool development, and Git internals through open-source contributions.',
    skills: ['C++', 'Python', 'Git & GitHub', 'Automated Testing'],
    icon: '⚙️',
  },
  {
    index: '02',
    title: 'Artificial Intelligence',
    color: 'var(--lavender)',
    desc: 'Exploring AI/ML fundamentals, intelligent systems architecture, and transformer attention mechanisms through interactive visualizations.',
    skills: ['AI/ML Fundamentals', 'Attention Mechanisms', 'WorldQuant BRAIN'],
    icon: '🧠',
  },
  {
    index: '03',
    title: 'Web Technologies',
    color: '#34d399',
    desc: 'Semantic HTML5, interactive canvas visualizations, React with TypeScript, Tailwind CSS, and modern component-based UI architecture.',
    skills: ['HTML & Canvas', 'React + TypeScript', 'Tailwind CSS', 'Vite'],
    icon: '🌐',
  },
  {
    index: '04',
    title: 'Creative Technology',
    color: '#fb923c',
    desc: 'AI-assisted rapid prototyping (vibe coding), video editing, MS Office, and digital content creation combining technical and creative skill.',
    skills: ['Vibe Coding', 'AI Prototyping', 'Video Editing', 'MS Office'],
    icon: '✨',
  },
];

const categories = ['All', 'programming', 'frameworks', 'tools'];

export const Skills: React.FC = () => {
  const [ref, inView] = useInView(0.1);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = SKILLS_DATA.filter(
    (s) => activeCategory === 'All' || s.category === activeCategory
  );

  return (
    <section id="expertise" className="relative py-28 md:py-36 overflow-hidden" ref={ref as React.RefObject<HTMLElement>}>
      <div
        style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(37,99,235,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label mb-4"
        >
          02 — EXPERTISE
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="display-lg text-[var(--offwhite)] mb-6"
        >
          What I Work<br />
          <span style={{ color: 'var(--cobalt)' }}>With.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[var(--grey)] mb-16"
          style={{ fontFamily: "'Inter',sans-serif", maxWidth: '500px', fontSize: '1.0rem', lineHeight: 1.7 }}
        >
          First-year undergrad. All skills are verified with real code — not self-assessed percentages.
        </motion.p>

        {/* Expertise 4 large cards */}
        <div className="grid md:grid-cols-2 gap-5 mb-24">
          {expertiseCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="expertise-card premium-card p-8 group cursor-default"
            >
              <div className="flex items-start justify-between mb-6">
                <div
                  className="expertise-index"
                  style={{ color: card.color }}
                >
                  {card.index}
                </div>
                <span className="text-3xl">{card.icon}</span>
              </div>
              <h3
                className="font-bold text-[var(--offwhite)] mb-3 group-hover:text-white transition-colors"
                style={{ fontFamily: "'Satoshi','Space Grotesk',sans-serif", fontSize: '1.4rem', letterSpacing: '-0.02em' }}
              >
                {card.title}
              </h3>
              <p
                className="text-[var(--grey)] mb-6 leading-relaxed text-sm"
                style={{ fontFamily: "'Inter',sans-serif" }}
              >
                {card.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {card.skills.map((s) => (
                  <span key={s} className="chip" style={{ borderColor: `${card.color}22`, color: card.color }}>
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Evidence-linked skills table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-[var(--offwhite)]" style={{ fontFamily: "'Satoshi','Space Grotesk',sans-serif", fontSize: '1.3rem' }}>
                Evidence-Linked Skills
              </h3>
              <p className="text-[var(--grey)] text-sm mt-1" style={{ fontFamily: "'Inter',sans-serif" }}>
                Every skill links to real code or PRs.
              </p>
            </div>
            {/* Filter */}
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="section-label px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer"
                  style={{
                    border: '1px solid',
                    borderColor: activeCategory === cat ? 'var(--cobalt)' : 'var(--border)',
                    color: activeCategory === cat ? '#60a5fa' : 'var(--grey)',
                    background: activeCategory === cat ? 'rgba(37,99,235,0.1)' : 'transparent',
                  }}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.05 * i, duration: 0.4 }}
                className="premium-card p-5"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-[var(--offwhite)] text-sm" style={{ fontFamily: "'Inter',sans-serif" }}>
                    {skill.name}
                  </h4>
                  <span
                    className="chip"
                    style={{
                      fontSize: '0.6rem',
                      padding: '2px 8px',
                      borderColor: skill.proficiency.includes('Applied') ? 'rgba(37,99,235,0.3)' : 'var(--border)',
                      color: skill.proficiency.includes('Applied') ? '#60a5fa' : 'var(--grey)',
                      background: skill.proficiency.includes('Applied') ? 'rgba(37,99,235,0.08)' : 'transparent',
                    }}
                  >
                    {skill.proficiency.includes('Applied') ? 'Applied' : 'Foundational'}
                  </span>
                </div>
                <p className="text-[var(--grey)] text-xs leading-relaxed mb-3" style={{ fontFamily: "'Inter',sans-serif" }}>
                  {skill.description}
                </p>
                {skill.evidenceUrl && (
                  <a
                    href={skill.evidenceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-medium hover:text-[var(--cobalt)] transition-colors"
                    style={{ color: '#60a5fa', fontFamily: "'Inter',sans-serif" }}
                  >
                    <ExternalLink size={11} />
                    {skill.evidenceLabel}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
