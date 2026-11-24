import React from 'react';
import { Download, FileText, Printer, ShieldCheck } from 'lucide-react';
import { ATS_RESUME_DATA } from '../data/portfolioData';

interface ResumeSectionProps {
  onOpenResumeDrawer: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResumeDrawer }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="py-24 relative overflow-hidden border-t border-slate-900/50 dark:border-slate-900/50 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-3 no-print">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono font-medium">
            <FileText className="w-3.5 h-3.5" />
            RECRUITER & ATS OPTIMIZED RESUME
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Resume
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
            One-page, ATS-friendly summary consistent with portfolio credentials. Download the PDF directly or print a clean single-page copy.
          </p>

          {/* Download CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <a
              href="/resume.pdf"
              download="Harvender_Singh_Rawat_Resume.pdf"
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 shadow-lg shadow-sky-600/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
            </a>

            <button
              onClick={onOpenResumeDrawer}
              className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-700 bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-100 border border-slate-700 dark:border-slate-700 light:border-slate-300 hover:border-sky-500/50 hover:text-sky-400 transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4 text-sky-400" />
              <span>Quick Modal Preview</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-100 border border-slate-700 dark:border-slate-700 light:border-slate-300 hover:border-sky-500/50 hover:text-sky-400 transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print One-Page ATS</span>
            </button>
          </div>
        </div>

        {/* ATS-Friendly 1-Page Resume Preview */}
        <div className="max-w-4xl mx-auto rounded-2xl glass-panel bg-[#0b1329] dark:bg-[#0b1329] light:bg-white border border-sky-500/20 p-6 sm:p-10 shadow-2xl space-y-5 font-sans">
          
          {/* Resume Header */}
          <div className="text-center pb-5 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 space-y-1.5">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900 uppercase">
              {ATS_RESUME_DATA.name}
            </h1>
            <p className="text-xs sm:text-sm font-mono text-sky-400 dark:text-sky-400 light:text-sky-600 font-semibold">
              {ATS_RESUME_DATA.title}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 font-mono pt-1">
              <span>{ATS_RESUME_DATA.contact.location}</span>
              <span>•</span>
              <span>{ATS_RESUME_DATA.contact.email}</span>
              <span>•</span>
              <span>{ATS_RESUME_DATA.contact.github}</span>
              <span>•</span>
              <span>{ATS_RESUME_DATA.contact.linkedin}</span>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 dark:text-sky-400 light:text-sky-600 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
              {ATS_RESUME_DATA.summary}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 dark:text-sky-400 light:text-sky-600 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 pb-1">
              Education
            </h2>
            <div className="space-y-2">
              {ATS_RESUME_DATA.education.map((edu, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="flex flex-wrap items-baseline justify-between text-xs sm:text-sm">
                    <span className="font-bold text-slate-200 dark:text-slate-200 light:text-slate-900">
                      {edu.institution}
                    </span>
                    <span className="text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-500">
                      {edu.timeline}
                    </span>
                  </div>
                  <div className="text-xs text-sky-400 dark:text-sky-400 light:text-sky-600 font-medium">
                    {edu.degree}
                  </div>
                  <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills & Core Strengths */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 dark:text-sky-400 light:text-sky-600 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 pb-1">
              Technical Skills, Strengths & Languages
            </h2>
            <div className="text-xs space-y-1 text-slate-300 dark:text-slate-300 light:text-slate-700">
              <div>
                <strong className="text-slate-200 dark:text-slate-200 light:text-slate-900">Technical Skills:</strong> {ATS_RESUME_DATA.skills.programming}; {ATS_RESUME_DATA.skills.additional}
              </div>
              <div>
                <strong className="text-slate-200 dark:text-slate-200 light:text-slate-900">Core Strengths:</strong> {ATS_RESUME_DATA.strengths}
              </div>
              <div>
                <strong className="text-slate-200 dark:text-slate-200 light:text-slate-900">Languages:</strong> {ATS_RESUME_DATA.languages}
              </div>
              <div>
                <strong className="text-slate-200 dark:text-slate-200 light:text-slate-900">Currently Learning:</strong> {ATS_RESUME_DATA.skills.inProgress}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 dark:text-sky-400 light:text-sky-600 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 pb-1">
              Certifications & Achievements
            </h2>
            <div className="space-y-1.5">
              {ATS_RESUME_DATA.certifications.map((c, idx) => (
                <div key={idx} className="text-xs">
                  <span className="font-bold text-amber-400 dark:text-amber-400 light:text-amber-700">
                    {c.name}
                  </span>
                  <span className="text-slate-400 dark:text-slate-400 light:text-slate-500 ml-2">
                    ({c.issuer})
                  </span>
                  <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-[11px]">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience & Career Objective */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div className="space-y-1">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 dark:text-sky-400 light:text-sky-600 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 pb-1">
                Experience
              </h2>
              <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                {ATS_RESUME_DATA.experience}
              </p>
            </div>
            <div className="space-y-1">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 dark:text-sky-400 light:text-sky-600 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 pb-1">
                Career Objective
              </h2>
              <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                {ATS_RESUME_DATA.careerObjective}
              </p>
            </div>
          </div>

          {/* Upload Placeholder Note */}
          <div className="no-print p-3.5 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-200 dark:text-slate-200 light:text-slate-800">Custom Resume Upload Slot:</strong>{' '}
              Your ATS resume PDF is ready at <code className="text-sky-400">public/resume.pdf</code>. Replace that file anytime with your exported custom PDF and the Download button will serve it automatically.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
