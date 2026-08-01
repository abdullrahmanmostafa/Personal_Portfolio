import React from 'react';
import { CORE_SOLUTIONS } from '../data/portfolioData';

export const EngineeringSolutions: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative glass-card rounded-2xl md:rounded-3xl p-8 sm:p-12 md:p-16 border border-white/10 bg-[#171b26]/60 backdrop-blur-xl overflow-hidden">
          
          {/* Subtle Ambient Background Gradient */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="max-w-3xl mx-auto text-center space-y-8 relative z-10">
            {/* Heading */}
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              {CORE_SOLUTIONS.heading}
            </h2>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans">
              {CORE_SOLUTIONS.subheading}
            </p>

            {/* Key Performance Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-6 border-t border-white/10">
              {CORE_SOLUTIONS.metrics.map((metric, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-[#dfe2f1] to-[#b4c5ff]">
                    {metric.value}
                  </div>
                  <div className="text-xs sm:text-sm font-mono text-gray-400 uppercase tracking-wider">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
