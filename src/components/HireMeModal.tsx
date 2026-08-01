import React, { useState } from 'react';
import { X, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HireMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HireMeModal: React.FC<HireMeModalProps> = ({ isOpen, onClose }) => {
  const [projectType, setProjectType] = useState('Full Stack Web App');
  const [budget, setBudget] = useState('$5k - $10k');
  const [timeline, setTimeline] = useState('1 - 2 Months');
  const [clientEmail, setClientEmail] = useState('');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 3000);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl glass-card rounded-2xl bg-[#171b26] border border-white/15 shadow-2xl overflow-hidden my-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0f131d]/90">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="font-heading font-bold text-lg text-white">Start a Project</span>
          </div>
          <button onClick={onClose} className="p-1.5 text-gray-400 hover:text-white rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {submitted ? (
            <div className="py-10 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white">Inquiry Received!</h3>
              <p className="text-xs text-gray-300">
                Thank you for reaching out. Abdullrahman will respond to <span className="text-[#b4c5ff] font-mono">{clientEmail}</span> within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Project Type */}
              <div className="space-y-1.5">
                <label className="block text-xs font-mono font-bold text-gray-300">PROJECT CATEGORY</label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full px-4 py-2.5 text-xs bg-[#0f131d] border border-white/10 rounded-xl text-white font-mono"
                >
                  <option value="Full Stack Web App">Full Stack Web Application</option>
                  <option value="Backend API & Microservices">Backend API & Microservices</option>
                  <option value="AI / ML Integration">AI / ML Model & Pipeline Integration</option>
                  <option value="Technical Consulting">Technical Consulting / Architecture</option>
                </select>
              </div>

              {/* Budget & Timeline */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono font-bold text-gray-300">ESTIMATED BUDGET</label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-4 py-2.5 text-xs bg-[#0f131d] border border-white/10 rounded-xl text-white font-mono"
                  >
                    <option value="<$5k">&lt; $5,000</option>
                    <option value="$5k - $10k">$5,000 - $10,000</option>
                    <option value="$10k - $25k">$10,000 - $25,000</option>
                    <option value="$25k+">$25,000+</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono font-bold text-gray-300">TIMELINE</label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full px-4 py-2.5 text-xs bg-[#0f131d] border border-white/10 rounded-xl text-white font-mono"
                  >
                    <option value="<2 Weeks">&lt; 2 Weeks</option>
                    <option value="1 - 2 Months">1 - 2 Months</option>
                    <option value="3+ Months">3+ Months</option>
                  </select>
                </div>
              </div>

              {/* Work Email */}
              <div className="space-y-1.5">
                <label className="block text-xs font-mono font-bold text-gray-300">YOUR WORK EMAIL</label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  className="w-full px-4 py-2.5 text-xs bg-[#0f131d] border border-white/10 rounded-xl text-white placeholder-gray-500 font-sans"
                />
              </div>

              {/* Brief details */}
              <div className="space-y-1.5">
                <label className="block text-xs font-mono font-bold text-gray-300">PROJECT BRIEF</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Briefly describe what you're looking to build..."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full px-4 py-2.5 text-xs bg-[#0f131d] border border-white/10 rounded-xl text-white placeholder-gray-500 font-sans resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 text-xs font-mono font-bold text-white bg-[#2563eb] rounded-xl hover:bg-blue-600 transition-colors shadow-lg shadow-blue-600/30"
              >
                {loading ? 'Submitting Proposal...' : 'Submit Inquiry'}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
