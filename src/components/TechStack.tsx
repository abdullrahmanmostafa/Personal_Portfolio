import React from 'react';
import { Server, Layout, Database, Cloud } from 'lucide-react';
import { TECH_STACK } from '../data/portfolioData';

export const TechStack: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'backend':
        return <Server className="w-5 h-5 text-[#b4c5ff]" />;
      case 'frontend':
        return <Layout className="w-5 h-5 text-[#7bd0ff]" />;
      case 'database':
        return <Database className="w-5 h-5 text-blue-400" />;
      case 'cloud':
        return <Cloud className="w-5 h-5 text-indigo-400" />;
      default:
        return <Server className="w-5 h-5 text-[#b4c5ff]" />;
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">
            CORE COMPETENCIES
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Tech Stack
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_STACK.map((category) => (
            <div
              key={category.title}
              className="glass-card glass-card-hover rounded-2xl p-6 bg-[#171b26]/80 border border-white/10 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Header Icon */}
                <div className="w-10 h-10 rounded-xl bg-[#212636] border border-white/10 flex items-center justify-center shrink-0">
                  {getCategoryIcon(category.iconName)}
                </div>

                {/* Category Title */}
                <h3 className="font-heading text-xl font-semibold text-white">
                  {category.title}
                </h3>

                {/* Tech List */}
                <ul className="space-y-2.5 pt-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] mr-2.5 shrink-0" />
                      <span className="font-sans font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Line Accent */}
              <div className="h-1 w-full bg-gradient-to-r from-blue-600/30 via-cyan-400/20 to-transparent rounded-full" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
