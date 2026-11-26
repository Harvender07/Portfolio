import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';
import { CertificationItem } from '../types';

interface CertificationsProps {
  onSelectCert: (c: CertificationItem) => void;
}

const tierStyles: Record<string, { color: string; bg: string; border: string; glow: string }> = {
  Gold: { color: '#fbbf24', bg: 'rgba(251,191,36,0.08)', border: 'rgba(251,191,36,0.3)', glow: 'rgba(251,191,36,0.15)' },
  Silver: { color: '#94a3b8', bg: 'rgba(148,163,184,0.08)', border: 'rgba(148,163,184,0.3)', glow: 'rgba(148,163,184,0.1)' },
  Bronze: { color: '#c2763b', bg: 'rgba(194,118,59,0.08)', border: 'rgba(194,118,59,0.3)', glow: 'rgba(194,118,59,0.1)' },
};

export const Certifications: React.FC<CertificationsProps> = ({ onSelectCert }) => {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="certifications" className="relative py-20 overflow-hidden" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label mb-4"
        >
          06 — ACHIEVEMENTS
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="display-lg text-[var(--offwhite)] mb-6"
        >
          WorldQuant<br />
          <span style={{ color: 'var(--cobalt)' }}>Certifications.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[var(--grey)] mb-14"
          style={{ fontFamily: "'Inter',sans-serif", maxWidth: '500px', fontSize: '1rem', lineHeight: 1.7 }}
        >
          Three levels earned in the WorldQuant Challenge® (2026) — authenticated certificates from WorldQuant BRAIN.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {CERTIFICATIONS_DATA.map((cert, i) => {
            const style = tierStyles[cert.tier] || tierStyles.Bronze;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
                className="cert-card"
                onClick={() => onSelectCert(cert)}
                style={{ boxShadow: `0 0 0 1px ${style.border}` }}
              >
                {/* Certificate thumbnail */}
                <div className="relative overflow-hidden" style={{ height: '180px', background: 'var(--charcoal-3)' }}>
                  <img
                    src={cert.fileUrl}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--charcoal-2) 0%, transparent 60%)' }} />
                  {/* Tier badge on image */}
                  <div className="absolute top-3 right-3">
                    <span
                      className="chip font-bold"
                      style={{ color: style.color, borderColor: style.border, background: style.bg, fontSize: '0.7rem' }}
                    >
                      🏆 {cert.tier}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <p className="section-label mb-2" style={{ color: style.color }}>{cert.date}</p>
                  <h3
                    className="font-bold text-[var(--offwhite)] mb-2"
                    style={{ fontFamily: "'Satoshi','Space Grotesk',sans-serif", fontSize: '1rem', letterSpacing: '-0.01em' }}
                  >
                    WorldQuant Challenge®
                  </h3>
                  <p className="text-[var(--grey)] text-xs mb-4" style={{ fontFamily: "'Inter',sans-serif" }}>
                    {cert.issuer}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cert.skillsDemonstrated.slice(0, 2).map((s) => (
                      <span key={s} className="chip" style={{ fontSize: '0.62rem', padding: '2px 8px' }}>{s}</span>
                    ))}
                  </div>
                  <a
                    href={cert.verificationPostUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-medium hover:text-[var(--cobalt)] transition-colors"
                    style={{ color: style.color, fontFamily: "'Inter',sans-serif" }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={11} />
                    Verify on LinkedIn
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
