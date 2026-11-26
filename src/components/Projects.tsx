import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { useInView } from '../hooks/useInView';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsProps {
  onSelectProject: (p: Project) => void;
}

const categoryColors: Record<string, string> = {
  ai: 'var(--lavender)',
  web: 'var(--cobalt)',
  tools: '#34d399',
  creative: '#fb923c',
};

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [ref, inView] = useInView(0.08);

  const featured = PROJECTS_DATA.filter((p) => p.featured);
  const others = PROJECTS_DATA.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-28 md:py-36 overflow-hidden" ref={ref as React.RefObject<HTMLElement>}>
      <div className="noise-overlay" />
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label mb-4"
        >
          04 — FEATURED WORK
        </motion.p>
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="display-lg text-[var(--offwhite)]"
          >
            Selected<br />
            <span style={{ color: 'var(--cobalt)' }}>Work.</span>
          </motion.h2>
          <motion.a
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            href="https://github.com/Harvender07"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            style={{ padding: '10px 22px', fontSize: '0.85rem' }}
          >
            All Repositories →
          </motion.a>
        </div>

        {/* Featured projects — large alternating layout */}
        <div className="space-y-6 mb-10">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.15 }}
              className="premium-card p-8 group cursor-pointer"
              onClick={() => onSelectProject(project)}
            >
              <div className="flex items-start justify-between gap-6 flex-wrap">
                <div className="flex-1 min-w-0">
                  {/* Category & status */}
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="chip"
                      style={{
                        color: categoryColors[project.category] || 'var(--cobalt)',
                        borderColor: `${categoryColors[project.category] || 'var(--cobalt)'}33`,
                        background: `${categoryColors[project.category] || 'var(--cobalt)'}0D`,
                      }}
                    >
                      {project.categoryLabel}
                    </span>
                    {project.status === 'Active' && (
                      <span className="chip" style={{ color: '#4ade80', borderColor: 'rgba(74,222,128,0.2)', background: 'rgba(74,222,128,0.05)' }}>
                        ● Active
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    className="font-bold text-[var(--offwhite)] group-hover:text-white transition-colors mb-3"
                    style={{ fontFamily: "'Satoshi','Space Grotesk',sans-serif", fontSize: 'clamp(1.3rem,3vw,1.7rem)', letterSpacing: '-0.02em' }}
                  >
                    {project.title}
                  </h3>

                  <p
                    className="text-[var(--grey)] text-sm leading-relaxed mb-5 max-w-2xl"
                    style={{ fontFamily: "'Inter',sans-serif" }}
                  >
                    {project.tagline}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 6).map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 flex-wrap">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-[var(--grey)] hover:text-[var(--offwhite)] transition-colors"
                      style={{ fontFamily: "'Inter',sans-serif" }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      Repository
                    </a>
                    {project.liveUrl && project.liveUrl !== project.githubUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-[var(--grey)] hover:text-[var(--cobalt)] transition-colors"
                        style={{ fontFamily: "'Inter',sans-serif" }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Arrow */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--cobalt)] transition-all duration-300"
                  style={{ background: 'var(--charcoal-3)', border: '1px solid var(--border)' }}
                >
                  <ArrowRight size={18} className="text-[var(--grey)] group-hover:text-white transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Others — 2-col grid */}
        {others.length > 0 && (
          <div className="grid md:grid-cols-2 gap-5">
            {others.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="premium-card p-7 group cursor-pointer"
                onClick={() => onSelectProject(project)}
              >
                <div className="flex items-start justify-between mb-3">
                  <span
                    className="chip"
                    style={{
                      color: categoryColors[project.category] || 'var(--cobalt)',
                      borderColor: `${categoryColors[project.category] || 'var(--cobalt)'}33`,
                      background: `${categoryColors[project.category] || 'var(--cobalt)'}0D`,
                    }}
                  >
                    {project.categoryLabel}
                  </span>
                  <ArrowRight size={16} className="text-[var(--grey)] group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>
                <h3
                  className="font-bold text-[var(--offwhite)] mb-2 group-hover:text-white transition-colors"
                  style={{ fontFamily: "'Satoshi','Space Grotesk',sans-serif", fontSize: '1.15rem', letterSpacing: '-0.02em' }}
                >
                  {project.title}
                </h3>
                <p className="text-[var(--grey)] text-sm leading-relaxed mb-4" style={{ fontFamily: "'Inter',sans-serif" }}>
                  {project.tagline}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
