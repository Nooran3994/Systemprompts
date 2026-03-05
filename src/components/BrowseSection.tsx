import React, { useState, useMemo } from 'react';
import { PromptCard, PromptCardData } from './PromptCard';
import { CategoryBar } from './CategoryBar';
import { ChevronLeft, LayoutGrid, LayoutList } from 'lucide-react';
import Masonry from 'react-responsive-masonry';
import { useNavigate } from 'react-router';

interface BrowseSectionProps {
  prompts: PromptCardData[];
  searchQuery: string;
  onViewDocs: (id: string) => void;
  onDownload: (id: string) => void;
  onDownloadInstructions?: (id: string) => void;
  resetCategoryTrigger?: number;
}

export function BrowseSection({ prompts, searchQuery, onViewDocs, onDownload, onDownloadInstructions, resetCategoryTrigger }: BrowseSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showMasonry, setShowMasonry] = useState(false);
  const [expandedView, setExpandedView] = useState(false);

  // Reset category to 'All' and expand view when Browse Prompts is clicked
  React.useEffect(() => {
    if (resetCategoryTrigger && resetCategoryTrigger > 0) {
      setSelectedCategory('All');
      setExpandedView(true);
    }
  }, [resetCategoryTrigger]);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = ['All', ...Array.from(new Set(prompts.map(p => p.category)))];
    return cats;
  }, [prompts]);

  // Filter prompts based on search and category
  const filteredPrompts = useMemo(() => {
    return prompts.filter(prompt => {
      const matchesSearch = 
        searchQuery === '' ||
        prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = 
        selectedCategory === 'All' || 
        prompt.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [prompts, searchQuery, selectedCategory]);

  // Display limited or all prompts
  const displayedPrompts = expandedView ? filteredPrompts : filteredPrompts.slice(0, 3);

  const handleSeeMore = () => {
    setExpandedView(true);
  };

  const navigate = useNavigate();

  return (
    <section id="browse" className="py-16 bg-[#F8F9FA] min-h-screen">
      {/* Category Filter Bar */}
      <CategoryBar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Header with Layout Toggle */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-[#343A40]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {selectedCategory === 'All' ? 'System Prompts' : selectedCategory}
            </h2>
            <p className="text-gray-600 mt-2">
              {filteredPrompts.length} {filteredPrompts.length === 1 ? 'prompt' : 'prompts'} available
            </p>
          </div>

          {expandedView && (
            <div className="flex gap-2">
              <button
                onClick={() => setShowMasonry(false)}
                className={`p-2 rounded-lg transition-colors ${
                  !showMasonry
                    ? 'bg-[#007BFF] text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
                aria-label="Grid view"
              >
                <LayoutGrid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setShowMasonry(true)}
                className={`p-2 rounded-lg transition-colors ${
                  showMasonry
                    ? 'bg-[#007BFF] text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
                aria-label="Masonry view"
              >
                <LayoutList className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* Cards Grid or Masonry */}
        {!expandedView ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {displayedPrompts.map((prompt) => (
              <PromptCard
                key={prompt.id}
                prompt={prompt}
                onViewDocs={onViewDocs}
                onDownload={onDownload}
                onDownloadInstructions={onDownloadInstructions}
              />
            ))}
          </div>
        ) : showMasonry ? (
          <Masonry columnsCount={3} gutter="24px">
            {displayedPrompts.map((prompt) => (
              <PromptCard
                key={prompt.id}
                prompt={prompt}
                onViewDocs={onViewDocs}
                onDownload={onDownload}
                onDownloadInstructions={onDownloadInstructions}
              />
            ))}
          </Masonry>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {displayedPrompts.map((prompt) => (
              <PromptCard
                key={prompt.id}
                prompt={prompt}
                onViewDocs={onViewDocs}
                onDownload={onDownload}
                onDownloadInstructions={onDownloadInstructions}
              />
            ))}
          </div>
        )}

        {/* See More Button */}
        {!expandedView && filteredPrompts.length > 3 && (
          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/prompts')}
              className="px-8 py-4 bg-[#007BFF] text-white rounded-xl hover:bg-[#0056b3] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
            >
              See More Prompts
            </button>
          </div>
        )}

        {/* No Results */}
        {filteredPrompts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              No prompts found matching your criteria. Try adjusting your search or category filter.
            </p>
          </div>
        )}

        {/* Back to Top - Expanded View */}
        {expandedView && (
          <div className="text-center mt-12">
            <button
              onClick={() => {
                setExpandedView(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center px-6 py-3 bg-white text-[#007BFF] border-2 border-[#007BFF] rounded-lg hover:bg-[#007BFF] hover:text-white transition-all"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Back to Top
            </button>
          </div>
        )}
      </div>
    </section>
  );
}