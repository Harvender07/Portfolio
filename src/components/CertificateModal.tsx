import React, { useState, useEffect } from 'react';
import { X, Award, CheckCircle2, FileUp, ExternalLink, ShieldCheck } from 'lucide-react';
import { CertificationItem } from '../types';

interface CertificateModalProps {
  cert: CertificationItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ cert, onClose }) => {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgError(false);
  }, [cert]);

  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-3xl rounded-2xl glass-panel bg-[#0b1329] dark:bg-[#0b1329] light:bg-white border border-sky-500/25 shadow-2xl p-6 sm:p-8 space-y-6 z-10 max-h-[90vh] overflow-y-auto my-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 dark:border-slate-800 light:border-slate-200">
          <div className="flex items-center gap-2.5">
            <div className={`p-2 rounded-xl border ${cert.badgeColor}`}>
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase text-sky-400 font-semibold">
                {cert.issuer}
              </span>
              <h2 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                {cert.title}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 dark:hover:bg-slate-800/60 light:hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close Certificate Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Original Certificate Image / PDF Display */}
        {!imgError ? (
          <div className="space-y-3">
            <div className="rounded-xl overflow-hidden border border-slate-700 bg-slate-950 shadow-lg">
              {cert.fileType === 'image' ? (
                <img
                  src={cert.fileUrl}
                  alt={cert.title}
                  onError={() => setImgError(true)}
                  className="w-full max-h-[460px] object-contain mx-auto"
                />
              ) : (
                <iframe
                  src={cert.fileUrl}
                  title={cert.title}
                  className="w-full h-[460px] bg-white"
                />
              )}
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
              <span className="text-emerald-400 flex items-center gap-1.5 font-mono">
                <ShieldCheck className="w-4 h-4" />
                Authentic WorldQuant BRAIN Certificate
              </span>
              <div className="flex items-center gap-4">
                <a
                  href={cert.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-sky-400"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Full Image</span>
                </a>
                {cert.verificationPostUrl && (
                  <a
                    href={cert.verificationPostUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-semibold text-sky-400 hover:text-sky-300"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Verify on LinkedIn Post</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-xl p-6 sm:p-8 bg-slate-950/70 dark:bg-slate-950/70 light:bg-slate-50 border border-dashed border-slate-700 dark:border-slate-700 light:border-slate-300 text-center space-y-3">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-700 dark:border-slate-700 light:border-slate-200 text-amber-400">
              <FileUp className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-200 dark:text-slate-200 light:text-slate-900">
              Original Certificate Asset Slot ({cert.tier})
            </h3>
            <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-md mx-auto">
              Certificate file path: <code className="text-sky-400">public{cert.fileUrl}</code>
            </p>
          </div>
        )}

        {/* Description & Competencies */}
        <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
          {cert.description}
        </p>

        <div className="space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
            Demonstrated Competencies:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {cert.skillsDemonstrated.map((skill, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-800 dark:border-slate-800 light:border-slate-200">
          <span className="text-[11px] font-mono text-slate-500">
            {cert.credentialNote}
          </span>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
