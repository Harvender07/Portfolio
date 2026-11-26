import React, { useState } from 'react';
import { Project, CertificationItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { SAIContributions } from './components/SAIContributions';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { BeyondTech } from './components/BeyondTech';
import { CTABand } from './components/CTABand';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { CertificateModal } from './components/CertificateModal';
import { ResumeDrawer } from './components/ResumeDrawer';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);
  const [isResumeDrawerOpen, setIsResumeDrawerOpen] = useState<boolean>(false);

  return (
    <div
      className="min-h-screen antialiased"
      style={{
        backgroundColor: 'var(--charcoal)',
        color: 'var(--offwhite)',
      }}
    >
      {/* Floating Navigation Bar */}
      <Navbar onOpenResumeDrawer={() => setIsResumeDrawerOpen(true)} />

      <main>
        {/* Hero Section */}
        <Hero onOpenResumeDrawer={() => setIsResumeDrawerOpen(true)} />

        {/* 01 — About */}
        <About />

        {/* 02 — Expertise & Evidence-Linked Skills */}
        <Skills />

        {/* 03 — S&AI Open-Source Contributions */}
        <SAIContributions />

        {/* 04 — Featured Work / Projects */}
        <Projects onSelectProject={(p) => setSelectedProject(p)} />

        {/* 05 — Education Timeline */}
        <Education />

        {/* 06 — WorldQuant Certifications */}
        <Certifications onSelectCert={(c) => setSelectedCert(c)} />

        {/* 07 — Life Beyond The Screen */}
        <BeyondTech />

        {/* Full-Width CTA Band */}
        <CTABand onOpenResumeDrawer={() => setIsResumeDrawerOpen(true)} />

        {/* 08 — Contact */}
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
