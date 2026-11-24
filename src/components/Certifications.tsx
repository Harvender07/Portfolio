import React from 'react';
import { Award, Eye, ArrowRight, FileCheck2 } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';
import { CertificationItem } from '../types';

interface CertificationsProps {
  onSelectCert: (cert: CertificationItem) => void;
}

export const Certifications: React.FC<CertificationsProps> = ({ onSelectCert }) => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden border-t border-slate-900/50 dark:border-slate-900/50 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-medium">
            <Award className="w-3.5 h-3.5" />
            VERIFIED ACHIEVEMENTS & CERTIFICATES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Certifications & Achievements
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
            Competitive quantitative problem-solving recognition from the WorldQuant Challenge. Click any achievement card to view or open the original certificate document.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS_DATA.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel rounded-2xl p-6 sm:p-7 space-y-5 flex flex-col justify-between hover:border-amber-500/40 hover:-translate-y-1 transition-all group shadow-sm hover:shadow-xl hover:shadow-amber-500/5 cursor-pointer"
              onClick={() => onSelectCert(cert)}
            >
              <div className="space-y-4">
                
                {/* Header: Badge & Tier */}
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-2xl border ${cert.badgeColor}`}>
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">
                      Award Tier
                    </span>
                    <span className="text-xs font-bold font-mono text-slate-200 dark:text-slate-200 light:text-slate-800">
                      {cert.tier} Certificate
                    </span>
                  </div>
                </div>

                {/* Title & Issuer */}
                <div>
                  <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-amber-400 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="text-xs font-medium text-sky-400 dark:text-sky-400 light:text-sky-600 mt-1">
                    {cert.issuer}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                  {cert.description}
                </p>

                {/* Demonstrated Competencies */}
                <div className="space-y-1.5 pt-2 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                    Skills Demonstrated:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsDemonstrated.slice(0, 2).map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-800 dark:border-slate-800 light:border-slate-200"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skillsDemonstrated.length > 2 && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20">
                        +{cert.skillsDemonstrated.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

              </div>

              {/* View Original Action */}
              <div className="pt-4 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex items-center justify-between">
                <span className="text-xs font-semibold text-amber-400 dark:text-amber-400 light:text-amber-600 flex items-center gap-1.5 group-hover:translate-x-0.5 transition-transform">
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Original Certificate</span>
                  <ArrowRight className="w-3 h-3" />
                </span>

                <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                  <FileCheck2 className="w-3.5 h-3.5 text-sky-400" />
                  {cert.tier}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
