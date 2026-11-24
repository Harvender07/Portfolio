import React from 'react';
import { X, ExternalLink, AlertCircle, CheckCircle2, Layers, Image as ImageIcon } from 'lucide-react';
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

      <div className="relative w-full max-w-3xl rounded-2xl glass-panel bg-[#0b1329] dark:bg-[#0b1329] light:bg-white border border-sky-500/20 shadow-2xl p-6 sm:p-8 space-y-6 z-10 max-h-[90vh] overflow-y-auto my-auto">
        
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800 dark:border-slate-800 light:border-slate-200">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-sky-500/10 text-sky-400 border border-sky-500/30">
              {project.categoryLabel}
            </div>
            <h2 className="text-2xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
              {project.title}
            </h2>
            <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600">
              {project.tagline}
            </p>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 dark:hover:bg-slate-800/60 light:hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close Project Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Editable Placeholder Notice */}
        {project.isPlaceholder && (
          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 dark:text-amber-200 light:text-amber-900 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong>Editable Placeholder Slot:</strong> This slot is reserved for an upcoming project in <strong>{project.categoryLabel}</strong>. Update <code className="text-sky-400">src/data/portfolioData.ts</code> when the repository, screenshots, and live deployment are finalized.
            </div>
          </div>
        )}

        {/* Screenshot / Preview Area */}
        <div className="rounded-xl overflow-hidden border border-dashed border-slate-700 dark:border-slate-700 light:border-slate-300 bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-100 h-48 flex flex-col items-center justify-center text-center p-4">
          {project.screenshotUrl ? (
            <img src={project.screenshotUrl} alt={project.title} className="w-full h-full object-cover" />
          ) : (
            <>
              <ImageIcon className="w-8 h-8 text-slate-500 mb-2" />
              <span className="text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-600">
                Screenshot / UI Preview Slot
              </span>
              <span className="text-[11px] font-mono text-slate-500 mt-1">
                {project.screenshotPlaceholderNote}
              </span>
            </>
          )}
        </div>

        {/* Overview & Problem Solved */}
        <div className="space-y-4">
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-1">
              Problem Being Solved
            </h3>
            <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-1">
              Project Overview
            </h3>
            <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
              {project.overview}
            </p>
          </div>
        </div>

        {/* Technologies */}
        <div>
          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">
            Technologies Used
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-900 dark:bg-slate-900 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-sky-400 dark:text-sky-400 light:text-sky-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div>
          <h3 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-2">
            Planned / Implemented Features
          </h3>
          <ul className="space-y-2">
            {project.keyFeatures.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture Notes */}
        <div>
          <h3 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-2">
            Configuration & Slot Notes
          </h3>
          <div className="p-4 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 space-y-2">
            {project.architectureHighlights.map((hl, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
                <Layers className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                <span>{hl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800 dark:border-slate-800 light:border-slate-200">
          <div className="text-xs font-mono text-slate-500">
            Status: <span className="text-amber-400">{project.status}</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-200 hover:bg-slate-700 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Profile</span>
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
