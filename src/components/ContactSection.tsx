import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Copy, Linkedin, Github, Twitter } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ fullName: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 space-y-2">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="text-base text-gray-300 font-sans">
            Have a project in mind? Let's build something exceptional together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 bg-[#171b26]/80 border border-white/10 space-y-6">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-gray-300 font-sans max-w-md mx-auto">
                    Thank you for reaching out, John. Abdullrahman will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-300">
                      FULL NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-[#0f131d] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-sans"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-300">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-[#0f131d] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-sans"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-300">
                      MESSAGE
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-[#0f131d] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-sans resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-[#2563eb] rounded-xl hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center space-x-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

          {/* Right Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Info Card */}
            <div className="glass-card rounded-2xl p-6 bg-[#171b26]/80 border border-white/10 flex items-start space-x-4">
              <div className="p-3 rounded-xl bg-[#212636] border border-white/10 text-blue-400 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1 overflow-hidden flex-1">
                <div className="text-xs font-mono font-medium text-gray-400">Email</div>
                <div className="text-sm font-mono font-semibold text-white truncate">
                  {PERSONAL_INFO.email}
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center text-xs font-mono text-[#b4c5ff] hover:underline pt-1"
                >
                  <Copy className="w-3 h-3 mr-1" />
                  {copiedEmail ? 'Copied to Clipboard!' : 'Copy Email Address'}
                </button>
              </div>
            </div>

            {/* Location Info Card */}
            <div className="glass-card rounded-2xl p-6 bg-[#171b26]/80 border border-white/10 flex items-start space-x-4">
              <div className="p-3 rounded-xl bg-[#212636] border border-white/10 text-cyan-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-mono font-medium text-gray-400">Location</div>
                <div className="text-sm font-sans font-semibold text-white">
                  {PERSONAL_INFO.location}
                </div>
              </div>
            </div>

            {/* Social Networks Row */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400">
                SOCIAL NETWORKS
              </div>
              <div className="flex items-center space-x-3">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#171b26] border border-white/10 text-gray-300 hover:text-white hover:bg-[#2563eb] transition-all duration-300"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#171b26] border border-white/10 text-gray-300 hover:text-white hover:bg-[#2563eb] transition-all duration-300"
                  title="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href={PERSONAL_INFO.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#171b26] border border-white/10 text-gray-300 hover:text-white hover:bg-[#2563eb] transition-all duration-300"
                  title="X (Twitter) Profile"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
