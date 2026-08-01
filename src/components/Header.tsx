import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onOpenHireMe: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenHireMe }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'projects', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0f131d]/90 backdrop-blur-md border-b border-white/10 py-4 shadow-xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="group flex items-center space-x-2 text-white font-heading font-bold text-xl tracking-wider"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#dfe2f1] to-[#b4c5ff]">
            A.MOSTAFA
          </span>
          <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#b4c5ff] ${
                  isActive ? 'text-[#b4c5ff] font-semibold' : 'text-gray-300'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Hire Me CTA Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onOpenHireMe}
            id="hire-me-btn"
            className="group relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-[#2563eb] rounded-full overflow-hidden shadow-lg shadow-blue-600/30 transition-all duration-300 hover:bg-blue-600 hover:shadow-blue-500/50 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Hire Me</span>
            <ArrowUpRight className="ml-1.5 w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#171b26] border-b border-white/10 px-6 py-6 space-y-4 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-gray-200 hover:text-[#b4c5ff]"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenHireMe();
            }}
            className="w-full mt-4 flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-[#2563eb] rounded-full shadow-lg"
          >
            Hire Me
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
};
