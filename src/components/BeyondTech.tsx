import React from 'react';
import { Activity, Video, Sparkles, TrendingUp, Heart } from 'lucide-react';
import { PERSONALITY_PILLARS } from '../data/portfolioData';

export const BeyondTech: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return <Activity className="w-5 h-5 text-orange-400" />;
      case 'Video':
        return <Video className="w-5 h-5 text-rose-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-sky-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      default:
        return <Heart className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="beyond" className="py-24 relative overflow-hidden border-t border-slate-900/50 dark:border-slate-900/50 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono font-medium">
            <Heart className="w-3.5 h-3.5" />
            WELL-ROUNDED CHARACTER & ENERGIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Beyond Technology
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
            Athletic discipline, digital creativity, and daily habits that shape my work ethic and mental clarity in engineering.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PERSONALITY_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="glass-panel rounded-2xl p-6 space-y-4 flex flex-col justify-between hover:-translate-y-1 transition-all"
            >
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200 inline-block">
                  {getIcon(pillar.iconName)}
                </div>

                <div>
                  <h3 className="font-bold text-base text-slate-100 dark:text-slate-100 light:text-slate-900">
                    {pillar.title}
                  </h3>
                  <span className="text-[11px] font-mono text-sky-400 block mt-0.5">
                    {pillar.category}
                  </span>
                </div>

                <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Engineering Takeaway */}
              <div className="pt-3 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-0.5">
                  Engineering Takeaway:
                </span>
                <p className="text-xs font-medium text-slate-300 dark:text-slate-300 light:text-slate-700">
                  {pillar.takeaway}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
