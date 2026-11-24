import React from 'react';
import { Award, Eye, ArrowRight, FileCheck2, ExternalLink } from 'lucide-react';
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
            Official WorldQuant BRAIN Certificates of Accomplishment (Gold, Silver, and Bronze). Click any certificate to inspect the full-size image or verify via LinkedIn.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS_DATA.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel rounded-2xl p-5 sm:p-6 space-y-5 flex flex-col justify-between hover:border-amber-500/40 hover:-translate-y-1 transition-all group shadow-sm hover:shadow-xl hover:shadow-amber-500/5 cursor-pointer"
              onClick={() => onSelectCert(cert)}
            >
              <div className="space-y-4">
                
                {/* Header: Badge & Tier */}
                <div className="flex items-center justify-between">
                  <div className={`p-2.5 rounded-xl border ${cert.badgeColor}`}>
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">
                      WorldQuant BRAIN
                    </span>
                    <span className="text-xs font-bold font-mono text-slate-200 dark:text-slate-200 light:text-slate-800">
                      {cert.tier} Level
                    </span>
                  </div>
                </div>

                {/* Actual Certificate Thumbnail Preview */}
                <div className="rounded-xl overflow-hidden border border-slate-800 dark:border-slate-800 light:border-slate-200 bg-slate-950 aspect-[16/9] relative">
                  <img
                    src={cert.fileUrl}
                    alt={cert.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-2.5">
                    <span className="px-2 py-1 rounded-md bg-black/70 text-[10px] font-mono text-white flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      Click to Enlarge
                    </span>
                  </div>
                </div>

                {/* Title & Issuer */}
                <div>
                  <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-amber-400 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="text-xs font-medium text-sky-400 dark:text-sky-400 light:text-sky-600 mt-0.5">
                    {cert.issuer} · <span className="font-mono">{cert.date}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                  {cert.description}
                </p>

              </div>

              {/* View Original & LinkedIn Action */}
              <div className="pt-4 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex items-center justify-between gap-2">
                <span className="text-xs font-semibold text-amber-400 dark:text-amber-400 light:text-amber-600 flex items-center gap-1.5 group-hover:translate-x-0.5 transition-transform">
                  <FileCheck2 className="w-3.5 h-3.5" />
                  <span>Inspect Certificate</span>
                  <ArrowRight className="w-3 h-3" />
                </span>

                {cert.verificationPostUrl && (
                  <a
                    href={cert.verificationPostUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-sky-400 hover:text-sky-300 px-2 py-1 rounded-md bg-sky-500/10 border border-sky-500/20"
                    title="Verify on LinkedIn"
                  >
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
