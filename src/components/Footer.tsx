import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer
      className="relative py-12"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Wordmark */}
          <div>
            <p
              className="font-black text-[var(--offwhite)] mb-1"
              style={{ fontFamily: "'Satoshi','Space Grotesk',sans-serif", letterSpacing: '-0.03em', fontSize: '1.1rem' }}
            >
              HARVENDER SINGH RAWAT
            </p>
            <p className="section-label">Designed with curiosity. Built with purpose.</p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-5">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--grey)] hover:text-[var(--offwhite)] transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-[18px] h-[18px]" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--grey)] hover:text-[var(--offwhite)] transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-[18px] h-[18px]" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-[var(--grey)] hover:text-[var(--offwhite)] transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-[var(--grey)] hover:text-[var(--offwhite)] transition-colors"
            style={{ fontFamily: "'Inter',sans-serif", fontSize: '0.82rem', fontWeight: 500 }}
          >
            Back to top
            <ArrowUp size={14} />
          </button>
        </div>

        <div className="mt-8 pt-6 text-center" style={{ borderTop: '1px solid var(--border)' }}>
          <p className="section-label">
            © 2026 Harvender Singh Rawat · Newton School of Technology · Pune, India
          </p>
        </div>
      </div>
    </footer>
  );
};
