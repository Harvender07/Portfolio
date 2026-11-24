import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2, BookOpen } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden border-t border-slate-900/50 dark:border-slate-900/50 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
            ACADEMIC FOUNDATIONS & MILESTONES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Education Timeline
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
            Structured academic trajectory combining modern computer science and AI/ML coursework at Newton School of Technology with rigorous pre-university discipline.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 md:before:-ml-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-sky-500/50 before:via-slate-800 before:to-transparent">
          
          {EDUCATION_DATA.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={item.institution}
                className={`relative flex items-center md:justify-between ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Center Node on Timeline */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0b1329] dark:bg-[#0b1329] light:bg-white border-2 border-sky-400 flex items-center justify-center z-10 shadow-lg shadow-sky-500/20">
                  <GraduationCap className="w-4 h-4 text-sky-400" />
                </div>

                {/* Content Card (Half Width on Desktop) */}
                <div className="ml-12 md:ml-0 md:w-[45%] w-full">
                  <div className="glass-panel rounded-2xl p-6 sm:p-7 space-y-4 hover:border-sky-500/40 hover:-translate-y-1 transition-all">
                    
                    {/* Top Row: Degree & Status */}
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-mono text-sky-400 font-semibold tracking-wide">
                          {item.timeline}
                        </span>
                        {item.score && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                            <Award className="w-3.5 h-3.5" />
                            {item.score}
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 leading-snug">
                        {item.degree}
                      </h3>
                      
                      <div className="text-sm font-semibold text-sky-400 dark:text-sky-400 light:text-sky-600">
                        {item.institution}
                      </div>

                      <div className="text-xs font-mono text-slate-500 flex items-center gap-3 pt-0.5">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          {item.location}
                        </span>
                        <span className="text-emerald-400">
                          {item.status}
                        </span>
                      </div>
                    </div>

                    {/* Academic Highlights */}
                    <div className="space-y-2 pt-2 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                      {item.highlights.map((hl, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>

                    {/* Focus Areas Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {item.focusAreas.map((area) => (
                        <span
                          key={area}
                          className="px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-100 text-slate-400 dark:text-slate-400 light:text-slate-700 border border-slate-800 dark:border-slate-800 light:border-slate-200"
                        >
                          {area}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
