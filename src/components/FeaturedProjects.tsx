import React, { useState } from 'react';
import { Github, ExternalLink, Info, Sparkles, Zap, ShieldCheck, ShoppingCart, Search } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filterCategories = ['All', 'ASP.NET Core', 'AI/ML', 'FastAPI', 'PostgreSQL', 'SQL Server'];

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesFilter =
      activeFilter === 'All' ||
      project.badges.some((badge) => badge.toLowerCase().includes(activeFilter.toLowerCase())) ||
      (activeFilter === 'AI/ML' && project.iconType === 'ai');

    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.badges.some((b) => b.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

  const getProjectIcon = (type: string) => {
    switch (type) {
      case 'ai':
        return <Sparkles className="w-5 h-5 text-indigo-400" />;
      case 'power':
        return <Zap className="w-5 h-5 text-[#7bd0ff]" />;
      case 'medical':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'ecommerce':
        return <ShoppingCart className="w-5 h-5 text-blue-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">
              SHOWCASE
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Featured Projects
            </h2>
          </div>

          {/* Search & Filter Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search projects or tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-56 pl-10 pr-4 py-2 text-xs font-mono bg-[#171b26] border border-white/10 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {filterCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-3 py-1.5 text-xs font-mono font-medium rounded-lg whitespace-nowrap transition-all duration-200 ${
                    activeFilter === cat
                      ? 'bg-[#2563eb] text-white shadow-md shadow-blue-600/30'
                      : 'bg-[#171b26] text-gray-400 hover:text-gray-200 border border-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid (2 columns on desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-2xl bg-[#171b26]/90 border border-white/10 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Project Image Preview Container */}
                <div
                  onClick={() => onSelectProject(project)}
                  className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900 cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171b26] via-[#171b26]/40 to-transparent" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <span className="px-3 py-1 text-xs font-mono font-medium bg-[#0f131d]/85 text-[#b4c5ff] backdrop-blur-md rounded-lg border border-white/10">
                      {project.badges[0]}
                    </span>
                    {project.badges[1] && (
                      <span className="px-3 py-1 text-xs font-mono font-medium bg-[#0f131d]/85 text-gray-300 backdrop-blur-md rounded-lg border border-white/10">
                        {project.badges[1]}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 space-y-4">
                  {/* Title & Icon */}
                  <div className="flex items-center justify-between">
                    <h3
                      onClick={() => onSelectProject(project)}
                      className="font-heading text-xl font-bold text-white group-hover:text-[#b4c5ff] transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>
                    <div className="p-2 rounded-lg bg-[#212636] border border-white/10">
                      {getProjectIcon(project.iconType)}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-300 font-sans leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="px-6 pb-6 pt-2 flex items-center space-x-3 border-t border-white/5">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-4 py-2.5 text-xs font-mono font-semibold text-gray-300 bg-[#212636] border border-white/10 rounded-xl hover:bg-[#2c3246] hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5 mr-2" />
                  GitHub
                </a>

                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-4 py-2.5 text-xs font-mono font-semibold text-gray-300 bg-[#212636] border border-white/10 rounded-xl hover:bg-[#2c3246] hover:text-white transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 mr-2" />
                  Demo
                </a>

                <button
                  onClick={() => onSelectProject(project)}
                  className="p-2.5 text-gray-300 bg-[#212636] border border-white/10 rounded-xl hover:bg-[#2563eb] hover:text-white transition-colors"
                  title="View Deep Architecture & Metrics"
                >
                  <Info className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 glass-card rounded-2xl bg-[#171b26]/50">
            <p className="text-gray-400 font-mono text-sm">No projects matched your search criteria.</p>
            <button
              onClick={() => {
                setActiveFilter('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-mono bg-[#2563eb] text-white rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
