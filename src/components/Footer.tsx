import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenCV: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCV }) => {
  return (
    <footer className="border-t border-white/10 py-10 bg-[#0f131d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left branding */}
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <a href="#hero" className="font-heading font-bold text-lg text-white">
            A.MOSTAFA
          </a>
          <span className="hidden sm:inline text-gray-600">|</span>
          <span className="text-xs font-mono text-gray-400">
            © 2026 {PERSONAL_INFO.name}. Built with precision.
          </span>
        </div>

        {/* Right Nav links */}
        <div className="flex items-center space-x-6 text-xs font-mono text-gray-400">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={PERSONAL_INFO.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Twitter
          </a>
          <button
            onClick={onOpenCV}
            className="hover:text-white transition-colors underline"
          >
            Resume
          </button>
        </div>

      </div>
    </footer>
  );
};
