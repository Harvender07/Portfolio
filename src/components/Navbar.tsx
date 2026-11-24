import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, FileText, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  onOpenResumeDrawer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme, onOpenResumeDrawer }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#030712]/85 dark:bg-[#030712]/85 light:bg-[#ffffff]/90 backdrop-blur-md border-b border-sky-500/10 dark:border-sky-500/10 light:border-slate-200 shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Monogram */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-3 group cursor-pointer shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500/20 to-blue-600/30 dark:from-sky-500/20 dark:to-blue-600/30 light:from-sky-600 light:to-blue-700 border border-sky-500/40 dark:border-sky-500/40 light:border-sky-600 flex items-center justify-center font-mono font-bold text-sky-400 dark:text-sky-400 light:text-white group-hover:border-sky-400 group-hover:scale-105 transition-all shadow-sm shadow-sky-500/20">
              HSR
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight whitespace-nowrap text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-sky-400 transition-colors">
                Harvender Rawat
              </span>
              <span className="text-[11px] font-mono whitespace-nowrap text-sky-400/90 dark:text-sky-400/90 light:text-sky-600 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                CS & AI/ML @ NST
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-2.5 py-1.5 text-xs xl:text-sm font-medium whitespace-nowrap text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-sky-400 dark:hover:text-sky-400 light:hover:text-sky-600 hover:bg-sky-500/5 rounded-lg transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs & Theme Toggle */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Dark / Light Theme"
              className="p-2 rounded-xl border border-slate-800 dark:border-slate-800 light:border-slate-300 bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 text-slate-400 hover:text-sky-400 dark:hover:text-sky-400 light:hover:text-sky-600 transition-colors cursor-pointer"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-sky-600" />}
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResumeDrawer}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold whitespace-nowrap text-slate-200 dark:text-slate-200 light:text-slate-700 bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-200/80 border border-slate-700 dark:border-slate-700 light:border-slate-300 rounded-xl hover:border-sky-500/50 hover:text-sky-400 transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-sky-400" />
              <span>Resume</span>
            </button>

            {/* Quick Contact CTA */}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold whitespace-nowrap text-white bg-sky-600 hover:bg-sky-500 rounded-xl shadow-md shadow-sky-600/20 hover:shadow-sky-500/30 transition-all cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Let's Connect</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-lg border border-slate-800 dark:border-slate-800 light:border-slate-300 bg-slate-900/60 text-slate-300"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-sky-600" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-slate-800 dark:border-slate-800 light:border-slate-300 bg-slate-900/60 text-slate-300 hover:text-sky-400"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-sky-500/15 bg-[#030712]/95 dark:bg-[#030712]/95 light:bg-white/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="pb-3 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 flex items-center justify-between">
            <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Open to Internship Opportunities
            </span>
            <button
              onClick={onOpenResumeDrawer}
              className="flex items-center gap-1 text-xs font-semibold text-sky-400 bg-sky-500/10 border border-sky-500/30 px-2.5 py-1 rounded-md"
            >
              <FileText className="w-3 h-3" />
              Resume
            </button>
          </div>
          <div className="grid grid-cols-2 gap-1 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-sky-400 rounded-lg hover:bg-sky-500/5 transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-xl shadow-md transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Contact Harvender</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
