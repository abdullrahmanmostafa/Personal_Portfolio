import React, { useState } from 'react';
import { X, Github, ExternalLink, Terminal, Cpu, Check, Copy } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'apiTester'>('overview');
  const [copiedResponse, setCopiedResponse] = useState(false);
  const [apiTesting, setApiTesting] = useState(false);
  const [testOutput, setTestOutput] = useState<string | null>(null);

  if (!project) return null;

  const handleTestApi = () => {
    setApiTesting(true);
    setTestOutput(null);
    setTimeout(() => {
      setApiTesting(false);
      setTestOutput(project.sampleResponse || '{"status": "ok", "latency": "12ms"}');
    }, 800);
  };

  const handleCopyCode = () => {
    if (project.sampleResponse) {
      navigator.clipboard.writeText(project.sampleResponse);
      setCopiedResponse(true);
      setTimeout(() => setCopiedResponse(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl glass-card rounded-2xl bg-[#171b26] border border-white/15 shadow-2xl overflow-hidden my-8 my-auto max-h-[90vh] flex flex-col">
        
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0f131d]/90">
          <div className="flex items-center space-x-3">
            <span className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
            <span className="font-heading font-bold text-lg text-white">{project.title}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-[#212636] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center space-x-2 px-6 pt-4 border-b border-white/5 bg-[#171b26]">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 text-xs font-mono font-semibold rounded-t-lg transition-colors border-b-2 ${
              activeTab === 'overview'
                ? 'border-blue-500 text-white bg-[#212636]'
                : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            Overview & Key Features
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-4 py-2 text-xs font-mono font-semibold rounded-t-lg transition-colors border-b-2 ${
              activeTab === 'architecture'
                ? 'border-blue-500 text-white bg-[#212636]'
                : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            Architecture & Metrics
          </button>
          {project.sampleEndpoint && (
            <button
              onClick={() => setActiveTab('apiTester')}
              className={`px-4 py-2 text-xs font-mono font-semibold rounded-t-lg transition-colors border-b-2 ${
                activeTab === 'apiTester'
                  ? 'border-blue-500 text-white bg-[#212636]'
                  : 'border-transparent text-gray-400 hover:text-gray-200'
              }`}
            >
              Live API Sandbox
            </button>
          )}
        </div>

        {/* Modal Content Scroll Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Project Image Banner */}
              <div className="relative aspect-[21/9] rounded-xl overflow-hidden bg-slate-900 border border-white/10">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171b26] via-transparent to-transparent" />
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {project.badges.map((badge) => (
                  <span key={badge} className="px-3 py-1 text-xs font-mono bg-blue-600/20 text-[#b4c5ff] border border-blue-500/30 rounded-lg">
                    {badge}
                  </span>
                ))}
              </div>

              {/* Detailed Description */}
              <div className="space-y-2">
                <h4 className="text-sm font-mono font-bold uppercase text-gray-400">System Description</h4>
                <p className="text-sm text-gray-200 font-sans leading-relaxed">{project.longDescription}</p>
              </div>

              {/* Features List */}
              <div className="space-y-3">
                <h4 className="text-sm font-mono font-bold uppercase text-gray-400">Key Engineering Capabilities</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feat, i) => (
                    <li key={i} className="flex items-start text-xs font-sans text-gray-300 bg-[#212636]/60 p-3 rounded-xl border border-white/5">
                      <Check className="w-4 h-4 text-emerald-400 mr-2 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-6">
              {/* Tech Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#212636] border border-white/10 text-center space-y-1">
                    <div className="text-2xl font-heading font-extrabold text-[#b4c5ff]">{m.value}</div>
                    <div className="text-xs font-mono text-gray-400 uppercase">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Architecture Stack Box */}
              <div className="p-5 rounded-xl bg-[#0f131d] border border-white/10 space-y-2">
                <div className="flex items-center text-xs font-mono font-bold text-gray-400 space-x-2">
                  <Cpu className="w-4 h-4 text-blue-400" />
                  <span>SYSTEM ARCHITECTURE STACK</span>
                </div>
                <div className="text-sm font-mono text-[#7bd0ff] bg-[#171b26] p-3 rounded-lg border border-white/5">
                  {project.architecture}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'apiTester' && project.sampleEndpoint && (
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#0f131d] border border-white/10 font-mono text-xs text-gray-300">
                <span className="font-bold text-emerald-400">{project.sampleEndpoint}</span>
                <button
                  onClick={handleTestApi}
                  disabled={apiTesting}
                  className="px-4 py-1.5 text-xs font-mono font-semibold bg-[#2563eb] text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
                >
                  {apiTesting ? 'Testing Endpoint...' : 'Execute Request'}
                </button>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                  <span className="flex items-center">
                    <Terminal className="w-3.5 h-3.5 mr-1.5 text-blue-400" />
                    Response Payload (200 OK)
                  </span>
                  <button onClick={handleCopyCode} className="hover:text-white flex items-center">
                    <Copy className="w-3.5 h-3.5 mr-1" />
                    {copiedResponse ? 'Copied!' : 'Copy Payload'}
                  </button>
                </div>
                <pre className="p-4 rounded-xl bg-[#0a0e18] border border-white/10 font-mono text-xs text-cyan-300 overflow-x-auto leading-relaxed">
                  {testOutput || project.sampleResponse}
                </pre>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#0f131d]/90 flex items-center justify-between">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 text-xs font-mono font-semibold text-gray-300 bg-[#212636] border border-white/10 rounded-xl hover:text-white"
          >
            <Github className="w-3.5 h-3.5 mr-2" />
            Repository
          </a>

          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2 text-xs font-mono font-semibold text-white bg-[#2563eb] rounded-xl hover:bg-blue-600"
          >
            <ExternalLink className="w-3.5 h-3.5 mr-2" />
            Launch Live Demo
          </a>
        </div>

      </div>
    </div>
  );
};
