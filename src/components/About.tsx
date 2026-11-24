import React from 'react';
import { Shield, Zap, Cpu, Compass, Users, Sparkles, Globe2, Target } from 'lucide-react';
import { ABOUT_PILLARS, PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield':
        return <Shield className="w-5 h-5 text-sky-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-indigo-400" />;
      case 'Users':
        return <Users className="w-5 h-5 text-rose-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden border-t border-slate-900/50 dark:border-slate-900/50 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
            PROFESSIONAL SUMMARY & CAREER OBJECTIVE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            About Harvender Singh Rawat
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
            First-year B.Tech CSE (Artificial Intelligence & Machine Learning) student at Newton School of Technology, Pune — focused on software development, problem solving, and continuous learning.
          </p>
        </div>

        {/* Narrative & Career Objective Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Narrative Block (7 cols) */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 space-y-5">
            <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 flex items-center gap-2">
              <span className="text-sky-400 font-mono text-base">01.</span>
              Professional Summary
            </h3>
            
            <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed text-base">
              {PERSONAL_INFO.professionalSummary}
            </p>

            {/* Career Objective Box */}
            <div className="p-4 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold">
                <Target className="w-3.5 h-3.5" />
                Career Objective
              </div>
              <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                {PERSONAL_INFO.careerObjective}
              </p>
            </div>

            {/* Quick Stat Pillows */}
            <div className="grid grid-cols-3 gap-3 pt-2 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 text-center">
              <div className="p-3 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                <div className="text-xl sm:text-2xl font-extrabold text-sky-400 font-mono">2026–30</div>
                <div className="text-[11px] text-slate-400 mt-0.5">First Year · NST</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                <div className="text-xl sm:text-2xl font-extrabold text-amber-400 font-mono">3x</div>
                <div className="text-[11px] text-slate-400 mt-0.5">WorldQuant Levels</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                <div className="text-xl sm:text-2xl font-extrabold text-emerald-400 font-mono">2</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Fluent Languages</div>
              </div>
            </div>
          </div>

          {/* Core Strengths & Spoken Languages (5 cols) */}
          <div className="lg:col-span-5 glass-panel rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 flex items-center gap-2">
              <span className="text-sky-400 font-mono text-base">02.</span>
              Core Strengths & Languages
            </h3>

            {/* Core Strengths Tags */}
            <div className="space-y-2.5">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Core Strengths
              </div>
              <div className="flex flex-wrap gap-2">
                {PERSONAL_INFO.coreStrengths.map((strength) => (
                  <span
                    key={strength}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-sky-500/10 dark:bg-sky-500/10 light:bg-sky-50 border border-sky-500/30 text-sky-300 dark:text-sky-300 light:text-sky-700"
                  >
                    {strength}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="space-y-2.5 pt-2 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
              <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-slate-400">
                <Globe2 className="w-3.5 h-3.5 text-sky-400" />
                <span>Languages</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {PERSONAL_INFO.languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="p-3 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex items-center justify-between"
                  >
                    <span className="text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
                      {lang.name}
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400 dark:text-emerald-400 light:text-emerald-700">
                      {lang.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Note */}
            <div className="p-3.5 rounded-xl bg-sky-500/5 border border-sky-500/20 text-xs text-sky-300 dark:text-sky-300 light:text-sky-800 leading-relaxed">
              <strong>Experience Status (Fresher):</strong> Currently building technical knowledge and practical skills through academic learning and independent exploration.
            </div>
          </div>

        </div>

        {/* 5 Core Pillars Cards */}
        <div className="space-y-4">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-500 text-center sm:text-left">
            Core Personal & Professional Attributes:
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {ABOUT_PILLARS.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="glass-panel rounded-xl p-5 space-y-3 flex flex-col justify-between hover:-translate-y-1 transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200">
                      {getIcon(pillar.icon)}
                    </div>
                    <span className="text-[11px] font-mono text-slate-500">0{idx + 1}</span>
                  </div>

                  <div>
                    <h4 className="font-bold text-sm text-slate-100 dark:text-slate-100 light:text-slate-900 leading-snug">
                      {pillar.title}
                    </h4>
                    <span className="text-[11px] font-mono text-sky-400 block mt-0.5">
                      {pillar.subtitle}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
