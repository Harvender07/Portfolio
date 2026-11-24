import React, { useState } from 'react';
import { ArrowDown, Mail, FileText, MapPin, GraduationCap, Calendar, CheckCircle2, Camera } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResumeDrawer: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeDrawer }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-tech-grid">
      {/* Subtle animated ambient background */}
      <div className="absolute top-1/3 left-1/2 w-[540px] h-[540px] bg-sky-500/10 dark:bg-sky-500/10 light:bg-sky-500/8 rounded-full blur-[120px] pointer-events-none -z-10 animate-subtle-drift" />
      <div className="absolute bottom-10 right-10 w-[340px] h-[340px] bg-blue-600/10 dark:bg-blue-600/10 light:bg-blue-600/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Content (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/10 light:bg-emerald-50 border border-emerald-500/30 text-emerald-400 dark:text-emerald-400 light:text-emerald-700 text-xs font-mono font-medium shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>{PERSONAL_INFO.status}</span>
            </div>

            {/* Candidate Name & Designation */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900">
                HARVENDER SINGH{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
                  RAWAT
                </span>
              </h1>
              <p className="text-sm sm:text-base font-mono text-sky-400 dark:text-sky-400 light:text-sky-600 font-semibold tracking-wide">
                {PERSONAL_INFO.designation}
              </p>
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-200 dark:text-slate-200 light:text-slate-800 leading-snug">
              "{PERSONAL_INFO.headline}"
            </h2>

            {/* Professional Introduction */}
            <p className="text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.bioIntro}
            </p>

            {/* Recruiter 10-Second Telemetry Chips */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 font-medium">
                <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
                Newton School of Technology
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 font-medium">
                <Calendar className="w-3.5 h-3.5 text-sky-400" />
                Batch 2026–2030
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 font-medium">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                {PERSONAL_INFO.location}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-xl shadow-lg shadow-sky-600/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResumeDrawer}
                className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-700 bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-100 hover:bg-slate-700 dark:hover:bg-slate-700 light:hover:bg-slate-200 border border-slate-700 dark:border-slate-700 light:border-slate-300 rounded-xl hover:border-sky-500/50 hover:text-sky-400 hover:-translate-y-0.5 transition-all cursor-pointer shadow-sm"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social & Direct Contact Links */}
            <div className="flex items-center gap-4 pt-2 text-slate-400 dark:text-slate-400 light:text-slate-500">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-500 light:text-slate-400">
                Connect:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-slate-800 dark:border-slate-800 light:border-slate-300 bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 hover:text-sky-400 hover:border-sky-500/40 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-slate-800 dark:border-slate-800 light:border-slate-300 bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 hover:text-sky-400 hover:border-sky-500/40 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2.5 rounded-xl border border-slate-800 dark:border-slate-800 light:border-slate-300 bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 hover:text-sky-400 hover:border-sky-500/40 transition-colors"
                  aria-label="Direct Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Professional Profile Visual & Recruiter Metric Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-sky-500/15 via-blue-600/15 to-cyan-400/15 blur-xl opacity-75"></div>

              <div className="relative rounded-2xl glass-panel p-6 sm:p-8 space-y-6">
                
                {/* Profile Picture / Placeholder */}
                <div className="relative flex flex-col items-center">
                  <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-2xl p-1 bg-gradient-to-br from-sky-500 to-blue-600 shadow-xl shadow-sky-500/10">
                    <div className="w-full h-full rounded-[14px] bg-[#0b1329] dark:bg-[#0b1329] light:bg-slate-100 flex flex-col items-center justify-center text-center border border-sky-400/20 overflow-hidden relative">
                      {!imgError ? (
                        <img
                          src={PERSONAL_INFO.profileImageUrl}
                          alt="Harvender Singh Rawat"
                          onError={() => setImgError(true)}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="p-3 flex flex-col items-center justify-center">
                          <div className="w-14 h-14 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-xl font-mono font-bold text-sky-400 mb-2">
                            HSR
                          </div>
                          <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                            <Camera className="w-3 h-3 text-sky-400" />
                            Profile Photo Slot
                          </span>
                          <span className="text-[9px] font-mono text-slate-500 mt-0.5">
                            public/profile.jpg
                          </span>
                        </div>
                      )}
                      <div className="absolute top-2 right-2 text-sky-400 bg-[#0b1329]/80 rounded-full p-0.5" title="Verified Portfolio Identity">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <div className="text-base font-bold text-slate-200 dark:text-slate-200 light:text-slate-800">
                      Harvender Singh Rawat
                    </div>
                    <div className="text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-500 mt-0.5">
                      B.Tech CS & AI/ML · Batch 2026–2030
                    </div>
                  </div>
                </div>

                {/* Recruiter Quick Snapshot */}
                <div className="space-y-3 pt-2 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                  <div className="text-xs font-mono text-sky-400 uppercase tracking-wider font-semibold">
                    Recruiter Snapshot
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                      <div className="text-slate-500 dark:text-slate-500 light:text-slate-400 text-[10px] uppercase font-mono">Background</div>
                      <div className="font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 mt-0.5">Army Schooling</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                      <div className="text-slate-500 dark:text-slate-500 light:text-slate-400 text-[10px] uppercase font-mono">Honors</div>
                      <div className="font-semibold text-amber-400 mt-0.5">WorldQuant Gold</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                      <div className="text-slate-500 dark:text-slate-500 light:text-slate-400 text-[10px] uppercase font-mono">Goal</div>
                      <div className="font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 mt-0.5">SDE / AI / FE Intern</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                      <div className="text-slate-500 dark:text-slate-500 light:text-slate-400 text-[10px] uppercase font-mono">Location</div>
                      <div className="font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 mt-0.5">Pune, India</div>
                    </div>
                  </div>
                </div>

                {/* Direct Email Link Strip */}
                <div className="pt-2">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 text-sky-400 dark:text-sky-400 light:text-sky-600 text-xs font-mono transition-colors text-center truncate"
                  >
                    <Mail className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{PERSONAL_INFO.email}</span>
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
