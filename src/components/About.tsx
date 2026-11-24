import React from 'react';
import { Shield, Zap, Cpu, Compass, Users, Sparkles } from 'lucide-react';
import { ABOUT_PILLARS } from '../data/portfolioData';

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
            PROFESSIONAL PHILOSOPHY & BACKGROUND
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            About Harvender Singh Rawat
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
            Computer Science & AI/ML undergraduate committed to engineering discipline, technical adaptability, and practical problem solving.
          </p>
        </div>

        {/* Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Narrative Block (7 cols) */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 space-y-5">
            <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 flex items-center gap-2">
              <span className="text-sky-400 font-mono text-base">01.</span>
              Foundational Journey & Career Direction
            </h3>
            
            <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed text-base">
              I am currently pursuing my B.Tech in Computer Science and Artificial Intelligence & Machine Learning at <span className="text-sky-400 font-medium">Newton School of Technology</span> (Batch 2026–2030). I am developing a strong foundational understanding in programming, software engineering paradigms, and emerging intelligent technologies.
            </p>

            <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed text-base">
              I believe in learning through experimentation, building projects, and solving real-world problems. Rather than passive study, I approach computer science by implementing code, benchmarking data structures, analyzing error traces, and evaluating system behavior.
            </p>

            <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed text-base">
              My immediate career goal is to secure competitive software engineering and AI/ML internships where I can contribute actively to production teams while continuously absorbing technical mentorship from experienced senior engineers.
            </p>

            {/* Quick Stat Pillows */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 text-center">
              <div className="p-3 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                <div className="text-xl sm:text-2xl font-extrabold text-sky-400 font-mono">2026–30</div>
                <div className="text-[11px] text-slate-400 mt-0.5">B.Tech NST</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                <div className="text-xl sm:text-2xl font-extrabold text-amber-400 font-mono">3x</div>
                <div className="text-[11px] text-slate-400 mt-0.5">WorldQuant Awards</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                <div className="text-xl sm:text-2xl font-extrabold text-emerald-400 font-mono">100%</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Army Discipline</div>
              </div>
            </div>
          </div>

          {/* Core Recruiter Value Proposition (5 cols) */}
          <div className="lg:col-span-5 glass-panel rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 flex items-center gap-2">
              <span className="text-sky-400 font-mono text-base">02.</span>
              What I Bring to an Engineering Team
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-sky-500/10 border border-sky-500/30 shrink-0 mt-0.5">
                  <Shield className="w-4 h-4 text-sky-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
                    High Personal Accountability
                  </h4>
                  <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-0.5">
                    No excuses, clear communication on milestones, and consistent follow-through on every assigned task.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 shrink-0 mt-0.5">
                  <Zap className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
                    Velocity in Unfamiliar Tech Stacks
                  </h4>
                  <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-0.5">
                    Comfortable reading official technical documentation, debugging unexpected errors, and bootstrapping solutions quickly.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/30 shrink-0 mt-0.5">
                  <Cpu className="w-4 h-4 text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
                    First-Principles Problem Solving
                  </h4>
                  <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-0.5">
                    Breaking requirements down into measurable logic, time-complexity constraints, and clean modular files.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-sky-500/5 border border-sky-500/20 text-xs text-sky-300 dark:text-sky-300 light:text-sky-800">
              💡 <strong>Recruiter Note:</strong> I do not overstate my technical experience. I present my foundational skills transparently and focus on rapid learnability and discipline.
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
