import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-12 border-t border-slate-900/80 dark:border-slate-900/80 light:border-slate-200 bg-[#02050e] dark:bg-[#02050e] light:bg-slate-50 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Brand & Rights */}
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="font-mono font-bold text-sky-400 text-sm">HSR.</span>
              <span className="font-bold text-slate-200 dark:text-slate-200 light:text-slate-800 text-sm">
                Harvender Singh Rawat
              </span>
            </div>
            <p className="text-slate-500 font-mono text-[11px]">
              Computer Science & AI/ML · Newton School of Technology (Batch 2026–2030)
            </p>
            <p className="text-slate-600 dark:text-slate-600 light:text-slate-400 text-[10px]">
              © {new Date().getFullYear()} Harvender Singh Rawat. Built with React, TypeScript & Tailwind CSS. Deployable on Vercel.
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 dark:bg-slate-900 light:bg-slate-200 text-slate-400 hover:text-sky-400 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 dark:bg-slate-900 light:bg-slate-200 text-slate-400 hover:text-sky-400 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-lg bg-slate-900 dark:bg-slate-900 light:bg-slate-200 text-slate-400 hover:text-sky-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-200 text-slate-400 hover:text-sky-400 hover:bg-slate-800 border border-slate-800 dark:border-slate-800 light:border-slate-300 transition-all cursor-pointer font-mono text-[11px]"
              aria-label="Back to Top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
