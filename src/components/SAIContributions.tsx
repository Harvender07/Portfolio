import React, { useState } from 'react';
import { GitPullRequest, ExternalLink, FileCode2, CheckCircle2, Search } from 'lucide-react';
import { SAI_REPO_INFO, SAI_PULL_REQUESTS } from '../data/portfolioData';

export const SAIContributions: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPrs = SAI_PULL_REQUESTS.filter(
    (pr) =>
      pr.taskId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pr.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pr.codeModifications.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section
      id="contributions"
      className="py-24 relative overflow-hidden border-t border-slate-900/50 dark:border-slate-900/50 light:border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 dark:text-emerald-400 light:text-emerald-700 text-xs font-mono font-medium">
            <GitPullRequest className="w-3.5 h-3.5" />
            S&AI OPEN-SOURCE CONTRIBUTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            S&AI Pull Requests & Repository Contributions
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
            Verified open-source engineering contributions to{' '}
            <a
              href={SAI_REPO_INFO.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 dark:text-sky-400 light:text-sky-600 font-mono underline hover:text-sky-300"
            >
              {SAI_REPO_INFO.repoName}
            </a>{' '}
            under GitHub handle <code className="text-emerald-400 font-mono">{SAI_REPO_INFO.contributorHandle}</code>.
          </p>
        </div>

        {/* Repository Summary Card */}
        <div className="glass-panel rounded-2xl p-6 sm:p-7 mb-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-sky-500/10 text-sky-400 border border-sky-500/30">
                Repository: {SAI_REPO_INFO.repoName}
              </span>
              <span className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                10 Pull Requests (#83 – #92)
              </span>
              <span className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-slate-800 dark:bg-slate-800 light:bg-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700">
                Tasks: R21-T001 → R21-T010
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
              {SAI_REPO_INFO.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={SAI_REPO_INFO.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 shadow-md shadow-sky-600/20 transition-all"
            >
              <span>View Repository</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={SAI_REPO_INFO.prsFilterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-700 bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-100 border border-slate-700 dark:border-slate-700 light:border-slate-300 hover:border-sky-500/40 hover:text-sky-400 transition-all"
            >
              <GitPullRequest className="w-3.5 h-3.5 text-emerald-400" />
              <span>Verify All PRs on GitHub</span>
            </a>
          </div>
        </div>

        {/* Search / Filter Bar */}
        <div className="max-w-md mx-auto mb-8 relative">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter by Task ID (e.g. R21-T001) or command..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/70 dark:bg-slate-900/70 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 text-xs sm:text-sm text-slate-200 dark:text-slate-200 light:text-slate-800 focus:outline-none focus:border-sky-500 transition-colors"
          />
        </div>

        {/* Pull Requests Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPrs.map((pr) => (
            <div
              key={pr.taskId}
              className="glass-panel rounded-2xl p-6 space-y-4 flex flex-col justify-between hover:border-emerald-500/40 transition-all"
            >
              <div className="space-y-3">
                {/* Top Row: Task ID, PR #, Status */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-sky-500/15 text-sky-400 dark:text-sky-400 light:text-sky-700 border border-sky-500/30">
                      {pr.taskId}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      PR #{pr.prNumber} · {pr.issueRef}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 dark:text-emerald-400 light:text-emerald-700 border border-emerald-500/30">
                    <CheckCircle2 className="w-3 h-3" />
                    {pr.status}
                  </span>
                </div>

                {/* PR Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                  {pr.title}
                </h3>

                {/* Code Modifications */}
                <div className="space-y-1">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-sky-400 font-semibold">
                    Code Modifications:
                  </div>
                  <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                    {pr.codeModifications}
                  </p>
                </div>

                {/* Technical Rationale */}
                <div className="p-3 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 space-y-1">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 dark:text-emerald-400 light:text-emerald-700 font-semibold">
                    Technical Rationale:
                  </div>
                  <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                    {pr.technicalRationale}
                  </p>
                </div>

                {/* Modified Files */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <FileCode2 className="w-3.5 h-3.5 text-slate-500 mr-0.5" />
                  {pr.filesModified.map((file) => (
                    <span
                      key={file}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950/70 dark:bg-slate-950/70 light:bg-slate-100 text-slate-400 dark:text-slate-400 light:text-slate-700 border border-slate-800 dark:border-slate-800 light:border-slate-200"
                    >
                      {file}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct PR Hyperlink */}
              <div className="pt-3 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">
                  S-AI-Projects/write-yourself-a-git
                </span>
                <a
                  href={pr.prUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 dark:text-sky-400 light:text-sky-600 hover:text-sky-300"
                >
                  <span>View Pull Request #{pr.prNumber}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
