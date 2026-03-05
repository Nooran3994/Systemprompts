import React from 'react';
import { Search, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router';
import { PromptCardData } from './PromptCard';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onLogoClick: () => void;
  prompts: PromptCardData[];
  onPromptClick: (id: string) => void;
  isDetailView?: boolean;
}

export function Header({ searchQuery, onSearchChange, onLogoClick, prompts, onPromptClick, isDetailView }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [showSearchDropdown, setShowSearchDropdown] = React.useState(false);
  const [showMobileSearchDropdown, setShowMobileSearchDropdown] = React.useState(false);
  const [mobileSearchExpanded, setMobileSearchExpanded] = React.useState(false);
  const searchRef = React.useRef<HTMLDivElement>(null);
  const mobileSearchRef = React.useRef<HTMLDivElement>(null);
  const mobileSearchInputRef = React.useRef<HTMLInputElement>(null);

  const handleLogoClickInternal = () => {
    navigate('/');
    onLogoClick();
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    // If we're on detail view or not on home page, navigate to home first
    if (isDetailView || window.location.pathname !== '/') {
      // Navigate to home page and reset state
      onLogoClick(); // Reset any selected prompt
      navigate('/');
      // Scroll to top instantly, then to the section
      window.scrollTo({ top: 0, behavior: 'instant' });
      // Wait for the page to fully render, then scroll to section
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchDropdown(false);
      }
      if (mobileSearchRef.current && !mobileSearchRef.current.contains(event.target as Node)) {
        setShowMobileSearchDropdown(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Show dropdown when typing
  React.useEffect(() => {
    if (searchQuery.trim().length > 0) {
      setShowSearchDropdown(true);
      setShowMobileSearchDropdown(true);
    } else {
      setShowSearchDropdown(false);
      setShowMobileSearchDropdown(false);
    }
  }, [searchQuery]);

  // Filter prompts based on search query
  const filterPrompts = (query: string) => {
    const lowerQuery = query.toLowerCase().trim();
    if (!lowerQuery) return [];

    return prompts.filter((prompt) => {
      // Search in title
      if (prompt.title.toLowerCase().includes(lowerQuery)) return true;
      
      // Search in description
      if (prompt.description.toLowerCase().includes(lowerQuery)) return true;
      
      // Search in category
      if (prompt.category.toLowerCase().includes(lowerQuery)) return true;
      
      // Search for common keywords
      const keywords = [
        'python', 'javascript', 'react', 'java', 'code', 'programming',
        'learning', 'education', 'tutorial', 'social', 'media', 'marketing',
        'agent', 'ai', 'automation', 'productivity', 'writing', 'content',
        'data', 'analysis', 'research', 'customer', 'service', 'email'
      ];
      
      // Check if query matches any keyword relevant to the prompt
      return keywords.some(keyword => {
        if (lowerQuery.includes(keyword)) {
          // Check if the prompt content relates to this keyword
          const promptContent = `${prompt.title} ${prompt.description} ${prompt.category}`.toLowerCase();
          return promptContent.includes(keyword);
        }
        return false;
      });
    });
  };

  const filteredPrompts = filterPrompts(searchQuery);

  // Get trending/popular prompts (based on availability and pricing)
  const getTrendingPrompts = () => {
    // Prioritize: Free prompts first, then paid prompts
    // IDs: 1 (paid), 7, 8, 10 (free)
    return prompts
      .map(prompt => ({
        ...prompt,
        priority: (prompt.id === '7' || prompt.id === '8' || prompt.id === '10') ? 1 : // Free - highest priority
                  prompt.id === '1' ? 2 : // Paid - lower priority
                  3
      }))
      .sort((a, b) => a.priority - b.priority)
      .slice(0, 4); // Show all 4 available prompts
  };

  const trendingPrompts = getTrendingPrompts();

  const handlePromptSelect = (id: string) => {
    setShowSearchDropdown(false);
    setShowMobileSearchDropdown(false);
    setMobileMenuOpen(false);
    setMobileSearchExpanded(false);
    onSearchChange(''); // Clear search
    onPromptClick(id);
  };

  // Handle mobile search icon click
  const handleMobileSearchClick = () => {
    setMobileSearchExpanded(true);
    // Focus the input after state update
    setTimeout(() => {
      mobileSearchInputRef.current?.focus();
    }, 100);
  };

  // Handle closing mobile search
  const handleCloseMobileSearch = () => {
    setMobileSearchExpanded(false);
    setShowMobileSearchDropdown(false);
    onSearchChange('');
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button 
            onClick={handleLogoClickInternal}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity flex-shrink-0"
            aria-label="Home"
          >
            <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#007BFF]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-6 sm:h-6">
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
              <span className="text-lg sm:text-xl font-bold text-[#343A40]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                SystemPrompts
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#browse" onClick={(e) => handleNavClick(e, 'browse')} className="text-[#343A40] hover:text-[#007BFF] transition-colors">
              Categories
            </a>
            <a href="#why-prompts" onClick={(e) => handleNavClick(e, 'why-prompts')} className="text-[#343A40] hover:text-[#007BFF] transition-colors">
              About
            </a>
            <button 
              onClick={() => {
                navigate('/blog');
                setMobileMenuOpen(false);
              }}
              className="text-[#343A40] hover:text-[#007BFF] transition-colors"
            >
              Blog
            </button>
            <a href="#get-started" onClick={(e) => handleNavClick(e, 'get-started')} className="text-[#343A40] hover:text-[#007BFF] transition-colors">
              Contact
            </a>
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8" ref={searchRef}>
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
              <input
                type="text"
                placeholder="Search for system prompts..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-[#F8F9FA] border border-gray-200 rounded-[88px] focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent transition-all"
                aria-label="Search system prompts"
              />
              
              {/* Search Dropdown */}
              {showSearchDropdown && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl max-h-[500px] overflow-y-auto z-50">
                  {filteredPrompts.length > 0 ? (
                    <div className="p-2">
                      {filteredPrompts.map((prompt) => (
                        <div
                          key={prompt.id}
                          onClick={() => handlePromptSelect(prompt.id)}
                          className="flex items-start gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors group"
                        >
                          {/* Thumbnail */}
                          <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                            <img
                              src={prompt.thumbnail}
                              alt={prompt.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                            />
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-sm text-gray-900 mb-1 line-clamp-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                              {prompt.title}
                            </h4>
                            <p className="text-xs text-gray-600 line-clamp-2 mb-1">
                              {prompt.description}
                            </p>
                            <div className="flex items-center gap-2">
                              <span className="text-xs px-2 py-0.5 bg-[#007BFF]/10 text-[#007BFF] rounded-full">
                                {prompt.category}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-4">
                      {/* Trending Header */}
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-[#343A40] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          🔥 Trending Prompts
                        </h3>
                        <p className="text-sm text-gray-600">Popular system prompts used by our community</p>
                      </div>

                      {/* Trending Prompts */}
                      <div className="space-y-3">
                        {trendingPrompts.map((prompt) => (
                          <div
                            key={prompt.id}
                            onClick={() => handlePromptSelect(prompt.id)}
                            className="flex items-start gap-3 p-3 rounded-lg bg-white border border-gray-200 cursor-pointer hover:border-[#007BFF] hover:shadow-md transition-all group"
                          >
                            {/* Thumbnail */}
                            <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                              <img
                                src={prompt.thumbnail}
                                alt={prompt.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                              />
                            </div>
                            
                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-sm text-gray-900 mb-1 line-clamp-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                {prompt.title}
                              </h4>
                              <p className="text-xs text-gray-600 line-clamp-2 mb-2">
                                {prompt.description}
                              </p>
                              <div className="flex items-center gap-2">
                                <span className="text-xs px-2 py-0.5 bg-[#007BFF]/10 text-[#007BFF] rounded-full">
                                  {prompt.category}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Subscribe Button */}
          <a 
            href="#subscribe"
            onClick={(e) => handleNavClick(e, 'subscribe')}
            className="hidden md:block px-6 py-2 bg-[#007BFF] text-white rounded-[85px] hover:bg-[#0056b3] transition-colors shadow-md hover:shadow-lg transform hover:scale-105 transition-transform"
            aria-label="Subscribe for updates"
          >
            Subscribe
          </a>

          {/* Mobile/Tablet Search Icon */}
          <button
            onClick={handleMobileSearchClick}
            className="lg:hidden flex items-center gap-2 px-3 py-2 text-[#343A40] hover:text-[#007BFF] hover:bg-gray-50 rounded-lg transition-colors"
            aria-label="Search"
          >
            <Search width="20" height="20" />
            <span className="text-sm font-medium">Search</span>
          </button>

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
                onClick={(e) => handleNavClick(e, 'browse')}
                className="text-[#343A40] hover:text-[#007BFF] transition-colors py-2"
              >
                Categories
              </a>
              <a 
                href="#why-prompts" 
                onClick={(e) => handleNavClick(e, 'why-prompts')}
                className="text-[#343A40] hover:text-[#007BFF] transition-colors py-2"
              >
                About
              </a>
              <button 
                onClick={() => {
                  navigate('/blog');
                  setMobileMenuOpen(false);
                }}
                className="text-[#343A40] hover:text-[#007BFF] transition-colors py-2 text-left"
              >
                Blog
              </button>
              <a 
                href="#get-started" 
                onClick={(e) => handleNavClick(e, 'get-started')}
                className="text-[#343A40] hover:text-[#007BFF] transition-colors py-2"
              >
                Contact
              </a>
              <a 
                href="#subscribe"
                onClick={(e) => handleNavClick(e, 'subscribe')}
                className="w-full px-6 py-2 bg-[#007BFF] text-white rounded-lg hover:bg-[#0056b3] transition-colors shadow-md text-left block"
                aria-label="Subscribe for updates"
              >
                Subscribe
              </a>
            </nav>
          </div>
        )}

        {/* Mobile Search Bar */}
        {mobileSearchExpanded && (
          <div className="lg:hidden fixed inset-0 bg-white z-50 animate-fade-in">
            <div className="flex items-center px-4 h-16 border-b border-gray-200">
              {/* Back Button */}
              <button
                onClick={handleCloseMobileSearch}
                className="p-2 text-[#343A40] hover:text-[#007BFF] transition-colors mr-2"
                aria-label="Close search"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
              </button>

              {/* Search Input */}
              <div className="relative flex-1" ref={mobileSearchRef}>
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for system prompts..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-[#F8F9FA] border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent"
                  aria-label="Search system prompts"
                  ref={mobileSearchInputRef}
                  autoFocus
                />
              </div>
            </div>

            {/* Search Results */}
            <div className="overflow-y-auto h-[calc(100vh-64px)]">
              {searchQuery.trim().length > 0 ? (
                filteredPrompts.length > 0 ? (
                  <div className="p-4 space-y-3">
                    {filteredPrompts.map((prompt) => (
                      <div
                        key={prompt.id}
                        onClick={() => handlePromptSelect(prompt.id)}
                        className="flex items-start gap-3 p-3 rounded-lg bg-white border border-gray-200 cursor-pointer hover:border-[#007BFF] hover:shadow-md transition-all group"
                      >
                        {/* Thumbnail */}
                        <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                          <img
                            src={prompt.thumbnail}
                            alt={prompt.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-sm text-gray-900 mb-1 line-clamp-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            {prompt.title}
                          </h4>
                          <p className="text-xs text-gray-600 line-clamp-2 mb-2">
                            {prompt.description}
                          </p>
                          <div className="flex items-center gap-2">
                            <span className="text-xs px-2 py-0.5 bg-[#007BFF]/10 text-[#007BFF] rounded-full">
                              {prompt.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
                    <Search className="w-16 h-16 text-gray-300 mb-4" />
                    <p className="text-lg font-semibold text-gray-700 mb-2">No prompts found for "{searchQuery}"</p>
                    <p className="text-sm text-gray-500">Try searching for keywords like "python", "social media", or "learning"</p>
                  </div>
                )
              ) : (
                <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
                  <Search className="w-16 h-16 text-gray-300 mb-4" />
                  <p className="text-lg font-semibold text-gray-700 mb-2">Search System Prompts</p>
                  <p className="text-sm text-gray-500">Type to search through our collection of AI prompts</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}