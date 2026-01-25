import React from 'react';
import { Search, X } from 'lucide-react';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onLogoClick: () => void;
}

export function Header({ searchQuery, onSearchChange, onLogoClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button 
            onClick={onLogoClick}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity mr-4 md:mr-8"
            aria-label="Home"
          >
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
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-[#343A40]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                SystemPrompts
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#browse" className="text-[#343A40] hover:text-[#007BFF] transition-colors">
              Categories
            </a>
            <a href="#why-prompts" className="text-[#343A40] hover:text-[#007BFF] transition-colors">
              About
            </a>
            <a href="#get-started" className="text-[#343A40] hover:text-[#007BFF] transition-colors">
              Contact
            </a>
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for system prompts..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-[#F8F9FA] border border-gray-200 rounded-[88px] focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent transition-all"
                aria-label="Search system prompts"
              />
            </div>
          </div>

          {/* Subscribe Button */}
          <a 
            href="#subscribe"
            className="hidden md:block px-6 py-2 bg-[#007BFF] text-white rounded-[85px] hover:bg-[#0056b3] transition-colors shadow-md hover:shadow-lg transform hover:scale-105 transition-transform"
            aria-label="Subscribe for updates"
          >
            Subscribe
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-[#343A40]" 
            aria-label="Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X width="24" height="24" />
            ) : (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-fade-in">
            <nav className="flex flex-col space-y-3">
              <a 
                href="#browse" 
                className="text-[#343A40] hover:text-[#007BFF] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Categories
              </a>
              <a 
                href="#why-prompts" 
                className="text-[#343A40] hover:text-[#007BFF] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#get-started" 
                className="text-[#343A40] hover:text-[#007BFF] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <a 
                href="#subscribe"
                className="w-full px-6 py-2 bg-[#007BFF] text-white rounded-lg hover:bg-[#0056b3] transition-colors shadow-md text-left block"
                aria-label="Subscribe for updates"
                onClick={() => setMobileMenuOpen(false)}
              >
                Subscribe
              </a>
            </nav>
          </div>
        )}

        {/* Mobile Search Bar */}
        <div className="lg:hidden pb-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for system prompts..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[#F8F9FA] border border-gray-200 rounded-[86px] focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent"
              aria-label="Search system prompts"
            />
          </div>
        </div>
      </div>
    </header>
  );
}