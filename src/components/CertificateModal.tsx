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

      <div
        className="relative w-full max-w-3xl rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 z-10 max-h-[90vh] overflow-y-auto my-auto"
        style={{
          background: 'var(--charcoal-2)',
          border: '1px solid var(--border-h)',
          color: 'var(--offwhite)',
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between pb-4"
          style={{ borderBottom: '1px solid var(--border)' }}
        >
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-xl border ${cert.badgeColor}`}>
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="section-label text-[#60a5fa] block">
                {cert.issuer}
              </span>
              <h2
                className="font-bold text-[var(--offwhite)]"
                style={{ fontFamily: "'Satoshi','Space Grotesk',sans-serif", fontSize: '1.25rem' }}
              >
                {cert.title}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[var(--grey)] hover:text-[var(--offwhite)] hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Close Certificate Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Original Certificate Image / PDF Display */}
        {!imgError ? (
          <div className="space-y-3">
            <div
              className="rounded-xl overflow-hidden shadow-lg"
              style={{ border: '1px solid var(--border)', background: 'var(--charcoal)' }}
            >
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
                  className="inline-flex items-center gap-1.5 font-semibold text-[var(--grey-light)] hover:text-[var(--cobalt)]"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Full Image</span>
                </a>
                {cert.verificationPostUrl && (
                  <a
                    href={cert.verificationPostUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-semibold text-[#60a5fa] hover:text-white"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Verify on LinkedIn Post</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div
            className="rounded-xl p-6 sm:p-8 text-center space-y-3"
            style={{ background: 'var(--charcoal)', border: '1px dashed var(--border-h)' }}
          >
            <div
              className="inline-flex items-center justify-center w-12 h-12 rounded-xl text-amber-400"
              style={{ background: 'var(--charcoal-3)', border: '1px solid var(--border)' }}
            >
              <FileUp className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[var(--offwhite)]">
              Original Certificate Asset Slot ({cert.tier})
            </h3>
            <p className="text-xs text-[var(--grey)] max-w-md mx-auto">
              Certificate file path: <code className="text-[#60a5fa]">public{cert.fileUrl}</code>
            </p>
          </div>
        )}

        {/* Description & Competencies */}
        <p className="text-xs sm:text-sm text-[var(--grey-light)] leading-relaxed" style={{ fontFamily: "'Inter',sans-serif" }}>
          {cert.description}
        </p>

        <div className="space-y-2.5">
          <h4 className="section-label">Demonstrated Competencies:</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {cert.skillsDemonstrated.map((skill, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 p-2.5 rounded-lg text-xs text-[var(--grey-light)]"
                style={{ background: 'var(--charcoal-3)', border: '1px solid var(--border)' }}
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div
          className="flex items-center justify-between pt-4"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <span className="section-label">
            {cert.credentialNote}
          </span>

          <button
            onClick={onClose}
            className="btn-primary"
            style={{ padding: '9px 20px', fontSize: '0.82rem' }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
