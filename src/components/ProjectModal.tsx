import React from 'react';
import { X, ExternalLink, CheckCircle2, Layers, UserCheck } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div
        className="relative w-full max-w-3xl rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 z-10 max-h-[90vh] overflow-y-auto my-auto"
        style={{
          background: 'var(--charcoal-2)',
          border: '1px solid var(--border-h)',
          color: 'var(--offwhite)',
        }}
      >
        {/* Header */}
        <div
          className="flex items-start justify-between gap-4 pb-5"
          style={{ borderBottom: '1px solid var(--border)' }}
        >
          <div className="space-y-2">
            <span className="chip chip-cobalt">{project.categoryLabel}</span>
            <h2
              className="font-bold text-[var(--offwhite)]"
              style={{
                fontFamily: "'Satoshi','Space Grotesk',sans-serif",
                fontSize: 'clamp(1.35rem, 3vw, 1.75rem)',
                letterSpacing: '-0.02em',
              }}
            >
              {project.title}
            </h2>
            <p className="text-sm text-[var(--grey)]" style={{ fontFamily: "'Inter',sans-serif" }}>
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[var(--grey)] hover:text-[var(--offwhite)] hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Close Project Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Overview, Problem Statement, Solution Architecture */}
        <div className="space-y-5">
          <div>
            <h3 className="section-label text-[#60a5fa] mb-1.5">Problem Statement</h3>
            <p className="text-sm text-[var(--grey-light)] leading-relaxed" style={{ fontFamily: "'Inter',sans-serif" }}>
              {project.problem}
            </p>
          </div>

          <div>
            <h3 className="section-label text-[#60a5fa] mb-1.5">Solution Architecture</h3>
            <p className="text-sm text-[var(--grey-light)] leading-relaxed" style={{ fontFamily: "'Inter',sans-serif" }}>
              {project.solutionArchitecture}
            </p>
          </div>

          <div
            className="p-4 rounded-xl flex items-start gap-3"
            style={{ background: 'var(--charcoal-3)', border: '1px solid var(--border)' }}
          >
            <UserCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-[var(--grey-light)]" style={{ fontFamily: "'Inter',sans-serif" }}>
              <strong className="section-label text-[var(--offwhite)] block mb-1">
                Individual Contribution
              </strong>
              {project.individualContribution}
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <h3 className="section-label mb-2.5">Tech Stack Used</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="chip chip-cobalt">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div>
          <h3 className="section-label text-[#60a5fa] mb-2.5">Implemented Capabilities</h3>
          <ul className="space-y-2">
            {project.keyFeatures.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--grey-light)]"
                style={{ fontFamily: "'Inter',sans-serif" }}
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture Notes */}
        <div>
          <h3 className="section-label text-[#60a5fa] mb-2.5">Architecture & Repository Structure</h3>
          <div
            className="p-4 rounded-xl space-y-2"
            style={{ background: 'var(--charcoal)', border: '1px solid var(--border)' }}
          >
            {project.architectureHighlights.map((hl, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 text-xs text-[var(--grey)]"
                style={{ fontFamily: "'Inter',sans-serif" }}
              >
                <Layers className="w-3.5 h-3.5 text-[#60a5fa] shrink-0 mt-0.5" />
                <span>{hl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div
          className="flex flex-wrap items-center justify-between gap-3 pt-4"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <div className="section-label">
            Status: <span className="text-emerald-400">{project.status}</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: '10px 20px', fontSize: '0.82rem' }}
            >
              <GithubIcon className="w-4 h-4" />
              <span>Repository & Docs</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="btn-ghost"
              style={{ padding: '9px 20px', fontSize: '0.82rem' }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
