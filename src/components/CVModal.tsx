import React from 'react';
import { X, Download, Mail, MapPin, Globe, CheckCircle, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, TECH_STACK, TIMELINE } from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl glass-card rounded-2xl bg-[#171b26] border border-white/15 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Header Control */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0f131d]">
          <div className="flex items-center space-x-2">
            <span className="font-heading font-bold text-lg text-white">Curriculum Vitae</span>
            <span className="px-2 py-0.5 text-[10px] font-mono bg-blue-600/30 text-[#b4c5ff] rounded">PDF Verified</span>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center px-3 py-1.5 text-xs font-mono bg-[#212636] border border-white/10 text-gray-200 rounded-lg hover:text-white"
            >
              <Download className="w-3.5 h-3.5 mr-1.5" />
              Print / Save PDF
            </button>
            <button onClick={onClose} className="p-1.5 text-gray-400 hover:text-white rounded-lg">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Body */}
        <div className="p-8 overflow-y-auto space-y-8 text-gray-200 bg-[#171b26] font-sans">
          
          {/* Header Block */}
          <div className="border-b border-white/10 pb-6 space-y-3">
            <h1 className="font-heading text-3xl font-extrabold text-white tracking-tight uppercase">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-lg font-heading font-medium text-[#b4c5ff]">
              {PERSONAL_INFO.role}
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-gray-400">
              <span className="flex items-center"><Mail className="w-3.5 h-3.5 mr-1 text-blue-400" />{PERSONAL_INFO.email}</span>
              <span className="flex items-center"><MapPin className="w-3.5 h-3.5 mr-1 text-cyan-400" />{PERSONAL_INFO.location}</span>
              <span className="flex items-center"><Globe className="w-3.5 h-3.5 mr-1 text-teal-400" />Available Globally</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              {PERSONAL_INFO.bio} Experienced in engineering high-throughput microservices, real-time IoT grid telemetry engines, and deep learning computer vision APIs.
            </p>
          </div>

          {/* Core Technical Stack */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
              TECHNICAL COMPETENCIES
            </h2>
            <div className="grid grid-cols-2 gap-4 text-xs font-mono">
              {TECH_STACK.map((cat) => (
                <div key={cat.title} className="p-3 rounded-xl bg-[#0f131d] border border-white/5 space-y-1">
                  <div className="font-bold text-white">{cat.title}:</div>
                  <div className="text-gray-400">{cat.items.join(', ')}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Career & Education Timeline */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
              WORK EXPERIENCE & EDUCATION
            </h2>
            <div className="space-y-4">
              {TIMELINE.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#0f131d] border border-white/5 space-y-1">
                  <div className="flex justify-between items-center text-xs font-mono text-[#b4c5ff]">
                    <span className="font-bold text-white">{item.role} — <span className="text-gray-300">{item.organization}</span></span>
                    <span>{item.period}</span>
                  </div>
                  <p className="text-xs text-gray-400 pt-1 font-sans">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
              CERTIFICATIONS & HIGHLIGHTS
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-gray-300">
              <li className="flex items-center"><CheckCircle className="w-3.5 h-3.5 mr-2 text-emerald-400" /> B.Sc. Computer Science (Menoufia University)</li>
              <li className="flex items-center"><CheckCircle className="w-3.5 h-3.5 mr-2 text-emerald-400" /> React & Next.js Certified Professional</li>
              <li className="flex items-center"><CheckCircle className="w-3.5 h-3.5 mr-2 text-emerald-400" /> ASP.NET Core & Microservices Specialist</li>
              <li className="flex items-center"><CheckCircle className="w-3.5 h-3.5 mr-2 text-emerald-400" /> AI/ML Model Integration Specialist</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};
