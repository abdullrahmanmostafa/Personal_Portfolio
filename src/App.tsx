import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BadgesBar } from './components/BadgesBar';
import { EngineeringSolutions } from './components/EngineeringSolutions';
import { TechStack } from './components/TechStack';
import { FeaturedProjects } from './components/FeaturedProjects';
import { TechnicalProficiency } from './components/TechnicalProficiency';
import { CareerTimeline } from './components/CareerTimeline';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { HireMeModal } from './components/HireMeModal';
import { CVModal } from './components/CVModal';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hireMeOpen, setHireMeOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0f131d] text-[#dfe2f1] font-sans selection:bg-[#2563eb] selection:text-white relative overflow-x-hidden">
      
      {/* Background Accent Gradients */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 blur-[150px] pointer-events-none rounded-full" />

      {/* Main Header */}
      <Header onOpenHireMe={() => setHireMeOpen(true)} />

      {/* Hero Section */}
      <Hero onDownloadCV={() => setCvOpen(true)} />

      {/* Certification & Specialty Badges Row */}
      <BadgesBar />

      {/* Engineering Solutions Impact Section */}
      <EngineeringSolutions />

      {/* Core Competencies Tech Stack */}
      <TechStack />

      {/* Featured Projects Showcase */}
      <FeaturedProjects onSelectProject={(project) => setSelectedProject(project)} />

      {/* Technical Proficiency Expertise */}
      <TechnicalProficiency />

      {/* Career & Education Timeline */}
      <CareerTimeline />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer onOpenCV={() => setCvOpen(true)} />

      {/* Modals */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <HireMeModal isOpen={hireMeOpen} onClose={() => setHireMeOpen(false)} />
      <CVModal isOpen={cvOpen} onClose={() => setCvOpen(false)} />

    </div>
  );
}
