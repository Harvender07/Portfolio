import React from 'react';
import { X, Download, Printer, FileText } from 'lucide-react';
import { ATS_RESUME_DATA } from '../data/portfolioData';

interface ResumeDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeDrawer: React.FC<ResumeDrawerProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto no-print">
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-4xl rounded-2xl glass-panel bg-[#0b1329] dark:bg-[#0b1329] light:bg-white border border-sky-500/25 shadow-2xl p-6 sm:p-8 space-y-6 z-10 max-h-[92vh] overflow-y-auto my-auto text-left">
        
        {/* Header & Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800 dark:border-slate-800 light:border-slate-200">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-sky-400 font-semibold uppercase">
                ATS-Compliant Document
              </span>
              <h2 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                Harvender Singh Rawat · Resume Preview
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              download="Harvender_Singh_Rawat_Resume.pdf"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 bg-slate-800 dark:bg-slate-800 light:bg-slate-100 hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close Resume Drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ATS Document Layout */}
        <div className="rounded-xl p-6 sm:p-8 bg-slate-950/90 dark:bg-slate-950/90 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 space-y-5 text-slate-200 dark:text-slate-200 light:text-slate-800 font-sans">
          
          <div className="text-center pb-4 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 space-y-1">
            <h1 className="text-2xl font-extrabold uppercase tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900">
              {ATS_RESUME_DATA.name}
            </h1>
            <div className="text-xs font-mono text-sky-400 font-semibold">
              {ATS_RESUME_DATA.title}
            </div>
            <div className="text-xs text-slate-400 font-mono pt-1 flex flex-wrap items-center justify-center gap-3">
              <span>{ATS_RESUME_DATA.contact.location}</span>
              <span>•</span>
              <span>{ATS_RESUME_DATA.contact.email}</span>
              <span>•</span>
              <span>{ATS_RESUME_DATA.contact.github}</span>
              <span>•</span>
              <span>{ATS_RESUME_DATA.contact.linkedin}</span>
            </div>
          </div>

          <div className="space-y-1">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 border-b border-slate-800/80 pb-0.5">
              Professional Summary
            </h3>
            <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
              {ATS_RESUME_DATA.summary}
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 border-b border-slate-800/80 pb-0.5">
              Education
            </h3>
            <div className="space-y-2 text-xs">
              {ATS_RESUME_DATA.education.map((edu, idx) => (
                <div key={idx}>
                  <div className="flex justify-between font-bold">
                    <span>{edu.institution}</span>
                    <span className="font-mono text-slate-400 text-[11px]">{edu.timeline}</span>
                  </div>
                  <div className="text-sky-400 font-medium">{edu.degree}</div>
                  <div className="text-slate-400 text-[11px]">{edu.details}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-1.5">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 border-b border-slate-800/80 pb-0.5">
              Technical Skills, Core Strengths & Languages
            </h3>
            <div className="text-xs space-y-1 text-slate-300 dark:text-slate-300 light:text-slate-700">
              <div><strong>Technical Skills:</strong> {ATS_RESUME_DATA.skills.programming}; {ATS_RESUME_DATA.skills.additional}</div>
              <div><strong>Core Strengths:</strong> {ATS_RESUME_DATA.strengths}</div>
              <div><strong>Languages:</strong> {ATS_RESUME_DATA.languages}</div>
              <div><strong>Currently Learning:</strong> {ATS_RESUME_DATA.skills.inProgress}</div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 border-b border-slate-800/80 pb-0.5">
              Certifications & Achievements
            </h3>
            <div className="space-y-1.5 text-xs">
              {ATS_RESUME_DATA.certifications.map((c, idx) => (
                <div key={idx}>
                  <span className="font-bold text-amber-400">{c.name}</span>
                  <span className="text-slate-400 ml-2">({c.issuer})</span>
                  <p className="text-[11px] text-slate-400">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 text-xs">
            <div className="space-y-1">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 border-b border-slate-800/80 pb-0.5">
                Experience
              </h3>
              <p className="text-slate-300 dark:text-slate-300 light:text-slate-700">{ATS_RESUME_DATA.experience}</p>
            </div>
            <div className="space-y-1">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 border-b border-slate-800/80 pb-0.5">
                Career Objective
              </h3>
              <p className="text-slate-300 dark:text-slate-300 light:text-slate-700">{ATS_RESUME_DATA.careerObjective}</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
