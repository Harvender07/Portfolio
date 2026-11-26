import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, CheckCheck, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { useInView } from '../hooks/useInView';
import { PERSONAL_INFO } from '../data/portfolioData';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export const Contact: React.FC = () => {
  const [ref, inView] = useInView(0.08);
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email).then(() => {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    try {
      const res = await fetch('https://formsubmit.co/ajax/harvendersinghrawat7336@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject || 'Portfolio Contact',
          message: form.message,
          _subject: `Portfolio Message from ${form.name}`,
        }),
      });
      if (res.ok) {
        setFormStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 overflow-hidden" ref={ref as React.RefObject<HTMLElement>}>
      <div
        style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 50% 60% at 80% 50%, rgba(37,99,235,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label mb-4"
        >
          08 — CONTACT
        </motion.p>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-start">
          {/* Left: headline + info */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="display-lg text-[var(--offwhite)] mb-6"
            >
              Have an<br />Opportunity?<br />
              <span style={{ color: 'var(--cobalt)' }}>Let's Talk.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-[var(--grey)] leading-relaxed mb-10"
              style={{ fontFamily: "'Inter',sans-serif", fontSize: '1.0rem' }}
            >
              Whether you have an internship opportunity, want to collaborate on a project, or just want to connect — my inbox is always open.
            </motion.p>

            {/* Contact cards */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="space-y-4"
            >
              {/* Email */}
              <div className="premium-card p-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.2)' }}>
                    <Mail size={16} style={{ color: 'var(--cobalt)' }} />
                  </div>
                  <div>
                    <p className="section-label mb-0.5">Email</p>
                    <p className="text-[var(--offwhite)] font-medium text-sm truncate" style={{ fontFamily: "'Inter',sans-serif" }}>
                      {PERSONAL_INFO.email}
                    </p>
                  </div>
                </div>
                <button onClick={handleCopyEmail} className="p-2 rounded-lg hover:bg-white/5 transition-colors flex-shrink-0">
                  {copiedEmail ? <CheckCheck size={15} style={{ color: '#4ade80' }} /> : <Copy size={15} className="text-[var(--grey)]" />}
                </button>
              </div>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="premium-card p-5 flex items-center gap-3 hover:border-[rgba(255,255,255,0.18)] transition-all block"
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <GithubIcon className="w-4 h-4 text-[var(--offwhite)]" />
                </div>
                <div>
                  <p className="section-label mb-0.5">GitHub</p>
                  <p className="text-[var(--offwhite)] font-medium text-sm" style={{ fontFamily: "'Inter',sans-serif" }}>Harvender07</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="premium-card p-5 flex items-center gap-3 hover:border-[rgba(255,255,255,0.18)] transition-all block"
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'rgba(10,102,194,0.1)', border: '1px solid rgba(10,102,194,0.3)' }}>
                  <LinkedinIcon className="w-4 h-4 text-[#60a5fa]" />
                </div>
                <div>
                  <p className="section-label mb-0.5">LinkedIn</p>
                  <p className="text-[var(--offwhite)] font-medium text-sm" style={{ fontFamily: "'Inter',sans-serif" }}>harvender-singh-rawat-3407a12a1</p>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {formStatus === 'success' ? (
              <div className="premium-card p-10 text-center">
                <span className="text-5xl mb-6 block">✉️</span>
                <h3 className="font-bold text-[var(--offwhite)] mb-3" style={{ fontFamily: "'Satoshi',sans-serif", fontSize: '1.5rem' }}>
                  Message Sent!
                </h3>
                <p className="text-[var(--grey)]" style={{ fontFamily: "'Inter',sans-serif" }}>
                  Thanks for reaching out. I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="premium-card p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="section-label block mb-2">Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="section-label block mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>
                <div>
                  <label className="section-label block mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="Internship Opportunity / Collaboration / Hello"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="section-label block mb-2">Message</label>
                  <textarea
                    placeholder="Tell me about the opportunity or what you have in mind..."
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="form-input"
                  />
                </div>
                {formStatus === 'error' && (
                  <p className="text-red-400 text-sm" style={{ fontFamily: "'Inter',sans-serif" }}>
                    Something went wrong. Please email me directly at {PERSONAL_INFO.email}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="btn-primary w-full justify-center"
                >
                  {formStatus === 'sending' ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
