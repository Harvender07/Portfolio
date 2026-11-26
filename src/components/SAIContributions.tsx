import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GitPullRequest, Search, ChevronDown, ChevronUp } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { SAI_PULL_REQUESTS, SAI_REPO_INFO } from '../data/portfolioData';

export const SAIContributions: React.FC = () => {
  const [ref, inView] = useInView(0.08);
  const [search, setSearch] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = SAI_PULL_REQUESTS.filter(
    (pr) =>
      pr.title.toLowerCase().includes(search.toLowerCase()) ||
      pr.taskId.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="contributions" className="relative py-28 md:py-36 overflow-hidden mesh-bg-2" ref={ref as React.RefObject<HTMLElement>}>
      <div className="noise-overlay" />
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label mb-4"
        >
          03 — S&AI CONTRIBUTIONS
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="display-lg text-[var(--offwhite)] mb-6"
        >
          Open Source<br />
          <span style={{ color: 'var(--cobalt)' }}>Pull Requests.</span>
        </motion.h2>

        {/* Repo info banner */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl mb-10"
          style={{ background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.2)' }}
        >
          <div>
            <p className="section-label text-[#60a5fa] mb-1">Repository</p>
            <a
              href={SAI_REPO_INFO.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[var(--offwhite)] hover:text-[var(--cobalt)] transition-colors flex items-center gap-2"
              style={{ fontFamily: "'Inter',sans-serif" }}
            >
              {SAI_REPO_INFO.repoName}
              <ExternalLink size={14} />
            </a>
          </div>
          <div className="flex gap-6 text-center">
            <div>
              <p className="font-black text-[var(--cobalt)] text-2xl" style={{ fontFamily: "'Satoshi',sans-serif" }}>10</p>
              <p className="section-label">Pull Requests</p>
            </div>
            <div>
              <p className="font-black text-[var(--lavender)] text-2xl" style={{ fontFamily: "'Satoshi',sans-serif" }}>R21</p>
              <p className="section-label">Series</p>
            </div>
          </div>
          <a
            href={SAI_REPO_INFO.prsFilterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            style={{ padding: '10px 20px', fontSize: '0.8rem' }}
          >
            View All PRs →
          </a>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative mb-8 max-w-md"
        >
          <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--grey)]" />
          <input
            type="text"
            placeholder="Search PRs or task IDs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="form-input pl-10"
          />
        </motion.div>

        {/* PR cards */}
        <div className="space-y-3">
          {filtered.map((pr, i) => {
            const isExpanded = expandedId === pr.taskId;
            return (
              <motion.div
                key={pr.taskId}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.05 * i }}
                className="pr-card"
              >
                {/* Header row */}
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => setExpandedId(isExpanded ? null : pr.taskId)}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="flex-shrink-0">
                      <span
                        className="chip chip-cobalt font-mono font-bold"
                        style={{ fontSize: '0.7rem' }}
                      >
                        {pr.taskId}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 min-w-0">
                      <GitPullRequest size={15} style={{ color: '#4ade80', flexShrink: 0 }} />
                      <span
                        className="font-semibold text-[var(--offwhite)] text-sm truncate"
                        style={{ fontFamily: "'Inter',sans-serif" }}
                      >
                        {pr.title}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0 ml-4">
                    <a
                      href={pr.prUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden sm:flex items-center gap-1 text-xs font-medium text-[#60a5fa] hover:text-white transition-colors"
                      style={{ fontFamily: "'Inter',sans-serif" }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      PR #{pr.prNumber}
                      <ExternalLink size={11} />
                    </a>
                    <span className="chip" style={{ color: '#4ade80', borderColor: 'rgba(74,222,128,0.2)', fontSize: '0.65rem' }}>
                      {pr.status}
                    </span>
                    {isExpanded ? (
                      <ChevronUp size={15} className="text-[var(--grey)]" />
                    ) : (
                      <ChevronDown size={15} className="text-[var(--grey)]" />
                    )}
                  </div>
                </div>

                {/* Expanded details */}
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-5 pt-5"
                    style={{ borderTop: '1px solid var(--border)' }}
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="section-label mb-2">Code Modifications</p>
                        <p className="text-[var(--grey)] text-sm leading-relaxed" style={{ fontFamily: "'Inter',sans-serif" }}>
                          {pr.codeModifications}
                        </p>
                      </div>
                      <div>
                        <p className="section-label mb-2">Technical Rationale</p>
                        <p className="text-[var(--grey)] text-sm leading-relaxed" style={{ fontFamily: "'Inter',sans-serif" }}>
                          {pr.technicalRationale}
                        </p>
                      </div>
                    </div>
                    {pr.filesModified && pr.filesModified.length > 0 && (
                      <div className="mt-4">
                        <p className="section-label mb-2">Files Modified</p>
                        <div className="flex flex-wrap gap-2">
                          {pr.filesModified.map((f) => (
                            <span key={f} className="chip font-mono text-[0.65rem]">{f}</span>
                          ))}
                        </div>
                      </div>
                    )}
                    <div className="mt-4">
                      <a
                        href={pr.prUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost"
                        style={{ padding: '8px 18px', fontSize: '0.8rem' }}
                      >
                        View PR #{pr.prNumber} on GitHub →
                      </a>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
