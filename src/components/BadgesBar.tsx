import React from 'react';
import { GraduationCap, Award, Code2, Cpu, Server } from 'lucide-react';
import { CORE_HIGHLIGHTS } from '../data/portfolioData';

export const BadgesBar: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'cs':
        return <GraduationCap className="w-5 h-5 text-[#b4c5ff]" />;
      case 'react':
        return <Award className="w-5 h-5 text-[#7bd0ff]" />;
      case 'dotnet':
        return <Code2 className="w-5 h-5 text-blue-400" />;
      case 'ai':
        return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 'backend':
        return <Server className="w-5 h-5 text-teal-400" />;
      default:
        return <Code2 className="w-5 h-5 text-[#b4c5ff]" />;
    }
  };

  return (
    <section className="py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {CORE_HIGHLIGHTS.map((item) => (
            <div
              key={item.id}
              className="glass-card glass-card-hover rounded-xl p-4 flex items-center space-x-3 bg-[#171b26]/70 border border-white/10"
            >
              <div className="p-2.5 rounded-lg bg-[#212636] border border-white/5 flex items-center justify-center shrink-0">
                {getIcon(item.id)}
              </div>
              <span className="text-xs font-mono font-semibold tracking-wider text-gray-200 uppercase">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
