import React from 'react';
import { TIMELINE } from '../data/portfolioData';

export const CareerTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">
            TIMELINE
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Career & Education
          </h2>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-blue-500/80 via-cyan-400/50 to-transparent sm:-translate-x-1/2" />

          <div className="space-y-12">
            {TIMELINE.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Glowing Node Circle */}
                  <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 z-10 flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-[#0f131d] border-2 border-[#2563eb] flex items-center justify-center shadow-lg shadow-blue-500/50">
                      <div className="w-2 h-2 rounded-full bg-[#b4c5ff] animate-pulse" />
                    </div>
                  </div>

                  {/* Content Card Box */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8 w-full">
                    <div className="glass-card glass-card-hover rounded-2xl p-6 bg-[#171b26]/80 border border-white/10 space-y-3">
                      {/* Period Badge */}
                      <span className="inline-block px-3 py-1 text-xs font-mono font-bold text-[#b4c5ff] bg-[#212636] border border-white/10 rounded-lg">
                        {item.period}
                      </span>

                      {/* Role & Org */}
                      <div>
                        <h3 className="font-heading text-lg font-bold text-white">
                          {item.role}
                        </h3>
                        <p className="text-xs font-mono text-gray-400 pt-0.5">
                          {item.organization}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-gray-300 font-sans leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
