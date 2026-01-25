import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface FooterProps {
  onNavigateHome?: () => void;
}

export function Footer({ onNavigateHome }: FooterProps = {}) {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    // Reset detail view if callback is provided
    if (onNavigateHome) {
      onNavigateHome();
    }
    
    // Check if we're already on the home page
    if (window.location.pathname === '/') {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page first, then scroll
      navigate('/');
      // Wait longer for the page to fully render
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  };

  return (
    <footer className="bg-[#343A40] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#007BFF]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M8 6C8 6 10 4 12 4C14 4 16 6 16 6M12 4V12M12 12L8 16M12 12L16 16" 
                    stroke="white" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  <path 
                    d="M18 10V18C18 19.1 17.1 20 16 20H8C6.9 20 6 19.1 6 18V10" 
                    stroke="white" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                SystemPrompts
              </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Professional system prompts for AI applications. Empowering developers, creators, and businesses 
              to build better AI solutions.
            </p>
            <p className="text-sm text-gray-400">
              Unlock AI Potential with Expert System Prompts
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#browse" onClick={(e) => handleNavClick(e, 'browse')} className="text-gray-300 hover:text-[#007BFF] transition-colors">
                  Categories
                </a>
              </li>
              <li>
                <a href="#why-prompts" onClick={(e) => handleNavClick(e, 'why-prompts')} className="text-gray-300 hover:text-[#007BFF] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#get-started" onClick={(e) => handleNavClick(e, 'get-started')} className="text-gray-300 hover:text-[#007BFF] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#privacy" className="text-gray-300 hover:text-[#007BFF] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-gray-300 hover:text-[#007BFF] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#licenses" className="text-gray-300 hover:text-[#007BFF] transition-colors">
                  Licenses
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} SystemPrompts.com. All Rights Reserved.
          </p>

          <div className="flex gap-4">
            <a
              href="#twitter"
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#007BFF] transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#github"
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#007BFF] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#linkedin"
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#007BFF] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#email"
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#007BFF] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}