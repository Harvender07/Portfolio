import React, { useState, useEffect } from 'react';
import { Theme, Project, CertificationItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Journey } from './components/Journey';
import { BeyondTech } from './components/BeyondTech';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { CertificateModal } from './components/CertificateModal';
import { ResumeDrawer } from './components/ResumeDrawer';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('hsr_portfolio_theme');
    return (saved as Theme) || 'dark';
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);
  const [isResumeDrawerOpen, setIsResumeDrawerOpen] = useState<boolean>(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('hsr_portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen bg-[#030712] dark:bg-[#030712] light:bg-[#f8fafc] text-[#f8fafc] dark:text-[#f8fafc] light:text-[#0f172a] selection:bg-sky-500/30 selection:text-sky-200 transition-colors duration-300">
      
      {/* Sticky Navigation Bar */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenResumeDrawer={() => setIsResumeDrawerOpen(true)}
      />

      <main>
        {/* Hero Section */}
        <Hero onOpenResumeDrawer={() => setIsResumeDrawerOpen(true)} />

        {/* About Me Section */}
        <About />

        {/* Technical Skills Section */}
        <Skills />

        {/* Featured Projects Section */}
        <Projects onSelectProject={(p) => setSelectedProject(p)} />

        {/* Education Timeline */}
        <Education />

        {/* Certifications & Achievements */}
        <Certifications onSelectCert={(c) => setSelectedCert(c)} />

        {/* Professional Journey (Fresher Focused) */}
        <Journey />

        {/* Beyond Technology */}
        <BeyondTech />

        {/* Dedicated Resume Section */}
        <ResumeSection onOpenResumeDrawer={() => setIsResumeDrawerOpen(true)} />

        {/* Recruiter Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <CertificateModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />

      <ResumeDrawer
        isOpen={isResumeDrawerOpen}
        onClose={() => setIsResumeDrawerOpen(false)}
      />

    </div>
  );
};

export default App;
