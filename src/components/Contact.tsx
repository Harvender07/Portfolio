import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Copy, Check, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) {
      errors.name = 'Full name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Professional email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) {
      errors.subject = 'Subject line is required';
    }
    if (!formData.message.trim()) {
      errors.message = 'Message content is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message should be at least 10 characters';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        _subject: `[Portfolio Recruiter Inquiry] ${formData.subject} — from ${formData.name}`,
        message: formData.message,
        _captcha: 'false',
        _template: 'table'
      };

      const res = await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setSubmitStatus('success');
        setStatusMessage(`Thank you, ${formData.name}! Your message has been sent directly to Harvender's inbox.`);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        triggerMailtoFallback();
      }
    } catch {
      triggerMailtoFallback();
    } finally {
      setIsSubmitting(false);
    }
  };

  const triggerMailtoFallback = () => {
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      '[Portfolio Inquiry] ' + formData.subject
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    )}`;
    window.open(mailtoUrl, '_blank');
    setSubmitStatus('success');
    setStatusMessage('Message prepared in your default email client. Sending directly to Harvender!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden border-t border-slate-900/50 dark:border-slate-900/50 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono font-medium">
            <Mail className="w-3.5 h-3.5" />
            DIRECT COMMUNICATION CHANNEL
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Have an Opportunity or an Interesting Idea? Let's Connect.
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
            I am actively seeking software engineering, AI/ML, and frontend development internship opportunities. Reach out directly via email or the contact form below.
          </p>
        </div>

        {/* Contact Grid: Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-5">
              <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                Contact Channels
              </h3>

              <div className="space-y-3.5">
                
                {/* Email Card */}
                <div className="p-4 rounded-xl bg-slate-900/70 dark:bg-slate-900/70 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 space-y-1.5">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                    Email
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-mono text-sky-400 dark:text-sky-400 light:text-sky-600 hover:underline font-semibold truncate"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="p-1.5 rounded-lg bg-slate-800 dark:bg-slate-800 light:bg-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-sky-400 transition-colors shrink-0 cursor-pointer"
                      title="Copy Email Address"
                    >
                      {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Institution & Location Card */}
                <div className="p-4 rounded-xl bg-slate-900/70 dark:bg-slate-900/70 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 space-y-1">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                    Location & Institution
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>{PERSONAL_INFO.location}</span>
                  </div>
                  <div className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
                    {PERSONAL_INFO.institution} · {PERSONAL_INFO.batch}
                  </div>
                </div>

                {/* Professional Links */}
                <div className="pt-2 space-y-2">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                    Professional Networks
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <a
                      href={PERSONAL_INFO.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-900/50 dark:bg-slate-900/50 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-sky-500/40 hover:text-sky-400 transition-all text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700"
                    >
                      <div className="flex items-center gap-2.5">
                        <GithubIcon className="w-4 h-4" />
                        <span>GitHub (@Harvender07)</span>
                      </div>
                      <span className="text-slate-500 font-mono text-[11px]">View Repos</span>
                    </a>

                    <a
                      href={PERSONAL_INFO.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-900/50 dark:bg-slate-900/50 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-sky-500/40 hover:text-sky-400 transition-all text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700"
                    >
                      <div className="flex items-center gap-2.5">
                        <LinkedinIcon className="w-4 h-4" />
                        <span>LinkedIn Profile</span>
                      </div>
                      <span className="text-slate-500 font-mono text-[11px]">Connect</span>
                    </a>
                  </div>
                </div>

              </div>

              <div className="p-3.5 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-xs text-emerald-400 dark:text-emerald-400 light:text-emerald-700 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                <span>Quick Response: I check my inbox daily and respond promptly to internship opportunities.</span>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6">
              
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                  Send Direct Inquiry
                </h3>
                <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
                  Fill in your details below and your inquiry will be delivered directly to {PERSONAL_INFO.email}.
                </p>
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 dark:text-emerald-400 light:text-emerald-700 text-xs flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <div>
                    <strong className="block font-semibold">Message Dispatched!</strong>
                    {statusMessage}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-300 dark:text-slate-300 light:text-slate-700 font-medium">
                    Full Name <span className="text-sky-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Mercer"
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-950/70 dark:bg-slate-950/70 light:bg-slate-50 border ${
                      formErrors.name ? 'border-rose-500' : 'border-slate-800 dark:border-slate-800 light:border-slate-300'
                    } text-slate-100 dark:text-slate-100 light:text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-sky-500 transition-colors`}
                  />
                  {formErrors.name && (
                    <span className="text-[11px] text-rose-400 font-mono">{formErrors.name}</span>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-300 dark:text-slate-300 light:text-slate-700 font-medium">
                    Professional Email <span className="text-sky-400">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex.mercer@company.com"
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-950/70 dark:bg-slate-950/70 light:bg-slate-50 border ${
                      formErrors.email ? 'border-rose-500' : 'border-slate-800 dark:border-slate-800 light:border-slate-300'
                    } text-slate-100 dark:text-slate-100 light:text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-sky-500 transition-colors`}
                  />
                  {formErrors.email && (
                    <span className="text-[11px] text-rose-400 font-mono">{formErrors.email}</span>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-300 dark:text-slate-300 light:text-slate-700 font-medium">
                    Subject / Topic <span className="text-sky-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Software Engineering Internship Opportunity"
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-950/70 dark:bg-slate-950/70 light:bg-slate-50 border ${
                      formErrors.subject ? 'border-rose-500' : 'border-slate-800 dark:border-slate-800 light:border-slate-300'
                    } text-slate-100 dark:text-slate-100 light:text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-sky-500 transition-colors`}
                  />
                  {formErrors.subject && (
                    <span className="text-[11px] text-rose-400 font-mono">{formErrors.subject}</span>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-300 dark:text-slate-300 light:text-slate-700 font-medium">
                    Message <span className="text-sky-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share role details, team information, or technical queries..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-950/70 dark:bg-slate-950/70 light:bg-slate-50 border ${
                      formErrors.message ? 'border-rose-500' : 'border-slate-800 dark:border-slate-800 light:border-slate-300'
                    } text-slate-100 dark:text-slate-100 light:text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-sky-500 transition-colors resize-none`}
                  />
                  {formErrors.message && (
                    <span className="text-[11px] text-rose-400 font-mono">{formErrors.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-sky-600/25 hover:shadow-sky-500/40 transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Dispatching Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message to Harvender</span>
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
