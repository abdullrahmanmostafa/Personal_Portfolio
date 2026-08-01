import React from 'react';
import { PROFICIENCY_SKILLS } from '../data/portfolioData';

export const TechnicalProficiency: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Description Column */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">
              EXPERTISE
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Technical Proficiency
            </h2>
            <p className="text-base text-gray-300 font-sans leading-relaxed">
              Measured through countless hours of architectural design, code reviews, and high-impact project deployments.
            </p>
          </div>

          {/* Right Skill Progress Bars Column */}
          <div className="lg:col-span-7 space-y-6">
            {PROFICIENCY_SKILLS.map((item) => (
              <div key={item.skill} className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono font-semibold tracking-wider text-gray-200">
                  <span>{item.skill}</span>
                  <span className="text-[#b4c5ff] font-bold">{item.percentage}%</span>
                </div>
                
                {/* Progress Track */}
                <div className="h-2.5 w-full bg-[#171b26] rounded-full border border-white/10 overflow-hidden p-0.5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#2563eb] via-[#00a6e0] to-[#b4c5ff] transition-all duration-1000 ease-out shadow-sm shadow-blue-500/50"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
