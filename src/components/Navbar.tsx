import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

interface NavbarProps {
  onOpenResumeDrawer: () => void;
}

const links = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Work', href: '#projects' },
  { label: 'Contributions', href: '#contributions' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeDrawer }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > lastScrollY.current && y > 300);
      lastScrollY.current = y;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: scrolled
            ? 'rgba(13,13,15,0.88)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
          transition: 'background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Wordmark */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-baseline gap-1 group"
          >
            <span
              className="font-black tracking-tight text-[var(--offwhite)] group-hover:text-[var(--cobalt)] transition-colors duration-300"
              style={{ fontFamily: "'Satoshi','Space Grotesk',sans-serif", fontSize: '1.1rem', letterSpacing: '-0.03em' }}
            >
              HARVENDER
            </span>
            <sup className="text-[var(--cobalt)] font-bold text-[0.5rem]">®</sup>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                className="section-label text-[var(--grey)] hover:text-[var(--offwhite)] transition-colors duration-200 cursor-pointer"
                style={{ fontFamily: "'Inter',sans-serif" }}
              >
                {l.label}
              </button>
            ))}
            {/* Availability indicator */}
            <span className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)' }}>
              <span className="pulse-dot" />
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.08em', color: '#86efac' }}>OPEN TO INTERNSHIPS</span>
            </span>
          </nav>

          {/* Resume button + hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenResumeDrawer}
              className="hidden sm:flex items-center gap-2 btn-ghost text-sm px-4 py-2"
              style={{ padding: '8px 18px', fontSize: '0.8rem' }}
            >
              <Download size={13} />
              Resume
            </button>
            <button
              className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={20} className="text-[var(--offwhite)]" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex flex-col"
            style={{ background: 'rgba(13,13,15,0.98)', backdropFilter: 'blur(20px)' }}
          >
            <div className="flex items-center justify-between px-6 h-16">
              <span className="font-black text-[var(--offwhite)]" style={{ fontFamily: "'Satoshi','Space Grotesk',sans-serif", letterSpacing: '-0.03em' }}>
                HARVENDER<sup className="text-[var(--cobalt)] font-bold text-[0.5rem]">®</sup>
              </span>
              <button onClick={() => setMenuOpen(false)} className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                <X size={22} className="text-[var(--offwhite)]" />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center flex-1 gap-8">
              {links.map((l, i) => (
                <motion.button
                  key={l.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                  onClick={() => handleNav(l.href)}
                  className="display-md text-[var(--offwhite)] hover:text-[var(--cobalt)] transition-colors cursor-pointer"
                  style={{ fontSize: 'clamp(2rem,8vw,3.5rem)' }}
                >
                  {l.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-2 mt-6"
              >
                <span className="pulse-dot" />
                <span className="section-label" style={{ color: '#86efac' }}>OPEN TO INTERNSHIPS</span>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
