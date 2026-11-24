import React from 'react';
import { GraduationCap, Code2, Trophy, BookOpen, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { JOURNEY_MILESTONES } from '../data/portfolioData';

export const Journey: React.FC = () => {
  const getMilestoneIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-sky-400" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-emerald-400" />;
      case 'Trophy':
        return <Trophy className="w-5 h-5 text-amber-400" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-purple-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="journey" className="py-24 relative overflow-hidden border-t border-slate-900/50 dark:border-slate-900/50 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            CURRENT STATUS: SEEKING INTERNSHIP OPPORTUNITIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Professional & Technical Journey
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
            Honest developmental progression: structured academic rigor, independent coding projects, competitive problem-solving milestones, and self-directed technical regimens.
          </p>
        </div>

        {/* Fresher Transparency Banner */}
        <div className="mb-12 max-w-3xl mx-auto p-4 rounded-2xl bg-gradient-to-r from-sky-500/10 via-blue-600/10 to-indigo-500/10 border border-sky-500/30 text-center space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold block">
            UNDERGRADUATE CANDIDATE SUMMARY
          </span>
          <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
            As a fresher entering the engineering workforce, I offer an uncluttered, high-velocity learning curve, military-grade personal discipline, and an eagerness to contribute to core engineering tasks from Day 1.
          </p>
        </div>

        {/* Milestone Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {JOURNEY_MILESTONES.map((milestone, idx) => (
            <div
              key={milestone.title}
              className="glass-panel rounded-2xl p-6 sm:p-7 space-y-4 hover:border-sky-500/40 hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200">
                  {getMilestoneIcon(milestone.iconName)}
                </div>
                <div className="text-right">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    {milestone.tag}
                  </span>
                  <div className="text-[11px] font-mono text-slate-500 mt-1">
                    {milestone.period}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                  {milestone.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1 leading-relaxed">
                  {milestone.description}
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                {milestone.bulletPoints.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
