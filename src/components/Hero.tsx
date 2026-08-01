import React from 'react';
import { ArrowRight, Download, Sparkles, Server, Cpu, Code } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onDownloadCV: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDownloadCV }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-[#171b26]/90 border border-white/10 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-gray-300 tracking-wide">
                {PERSONAL_INFO.status}
              </span>
            </div>

            {/* Name & Title */}
            <div className="space-y-2">
              <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase leading-none">
                {PERSONAL_INFO.firstName} <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b4c5ff] via-[#7bd0ff] to-blue-400">
                  {PERSONAL_INFO.lastName}
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-heading font-medium text-gray-300 pt-2">
                {PERSONAL_INFO.role}
              </h2>
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {PERSONAL_INFO.badges.map((badge, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-mono bg-[#171b26] border border-white/10 text-gray-300 rounded-md flex items-center space-x-1.5"
                >
                  {idx === 0 && <Server className="w-3 h-3 text-[#b4c5ff]" />}
                  {idx === 1 && <Cpu className="w-3 h-3 text-[#7bd0ff]" />}
                  {idx === 2 && <Code className="w-3 h-3 text-blue-400" />}
                  <span>{badge}</span>
                </span>
              ))}
            </div>

            {/* Paragraph Bio */}
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed font-sans">
              {PERSONAL_INFO.bio}
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-[#2563eb] rounded-xl hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Projects</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>

              <button
                onClick={onDownloadCV}
                id="download-cv-btn"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-gray-200 bg-[#171b26] border border-white/15 rounded-xl hover:bg-[#212636] hover:text-white hover:border-white/25 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Download className="mr-2 w-4 h-4 text-gray-400" />
                <span>Download CV</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Portrait Visual */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-md">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 rounded-3xl opacity-30 blur-xl group-hover:opacity-50 transition duration-1000" />
              
              {/* Image Container Card */}
              <div className="relative glass-card rounded-2xl p-3 overflow-hidden border border-white/15 bg-[#171b26]/80">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-900">
                  <img
                    src={PERSONAL_INFO.profileImage}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105 filter brightness-95 contrast-105"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f131d] via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Micro Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#0f131d]/90 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">Full Stack & AI Engineer</div>
                        <div className="text-[10px] text-gray-400 font-mono">Modern Architectures</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-mono font-bold text-[#b4c5ff]">3+ YRS</div>
                      <div className="text-[10px] text-gray-400">EXP</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
