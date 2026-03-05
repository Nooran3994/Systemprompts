import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { PromptCard, PromptCardData } from '../components/PromptCard';
import { CategoryBar } from '../components/CategoryBar';
import { LayoutGrid, LayoutList, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';
import Masonry from 'react-responsive-masonry';
import { SEO } from '../components/SEO';

interface AllPromptsPageProps {
  prompts: PromptCardData[];
  searchQuery: string;
  onViewDocs: (id: string) => void;
  onDownload: (id: string) => void;
  onDownloadInstructions?: (id: string) => void;
}

export function AllPromptsPage({ prompts, searchQuery, onViewDocs, onDownload, onDownloadInstructions }: AllPromptsPageProps) {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showMasonry, setShowMasonry] = useState(false);

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

  return (
    <div className="min-h-screen bg-[#F8F9FA] pt-24 pb-16">
      <SEO
        title="Browse AI System Prompts — ChatGPT, Claude & Gemini | SystemPrompts.site"
        description="Browse and download 8+ expert-crafted AI system prompts for ChatGPT, Claude, Gemini, Cursor, GitHub Copilot and more. Categories: Learning Systems, Agents, Career Tools, Content Creation."
        url="https://systemprompts.site/prompts"
        keywords="browse AI prompts, download system prompts, ChatGPT system prompts, Claude prompts library, Gemini prompts, AI prompt marketplace, learning system prompts, AI agent prompts, career AI prompts, code review prompts, resume AI prompt, data analysis prompt"
        breadcrumbs={[
          { name: 'Home', url: 'https://systemprompts.site/' },
          { name: 'Browse Prompts', url: 'https://systemprompts.site/prompts' },
        ]}
      />
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-[#007BFF] hover:text-[#0056b3] transition-colors"
          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>
      </div>

      {/* Page Header */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 
          className="text-[#343A40] mb-2" 
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          System Prompts
        </h1>
        <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
          Browse our complete collection of expert-crafted AI system prompts
        </p>
      </motion.div>

      {/* Category Filter Bar */}
      <CategoryBar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Header with Count and Layout Toggle */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl text-[#343A40]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
              {selectedCategory === 'All' ? 'All Prompts' : selectedCategory}
            </h2>
            <p className="text-gray-600 mt-1">
              {filteredPrompts.length} {filteredPrompts.length === 1 ? 'prompt' : 'prompts'} available
            </p>
          </div>

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
        </div>

        {/* Cards Grid or Masonry */}
        {showMasonry ? (
          <Masonry columnsCount={3} gutter="24px">
            {filteredPrompts.map((prompt) => (
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
            {filteredPrompts.map((prompt) => (
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

        {/* No Results */}
        {filteredPrompts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              No prompts found matching your criteria. Try adjusting your search or category filter.
            </p>
          </div>
        )}

        {/* Back to Top */}
        <div className="text-center mt-12">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center px-6 py-3 bg-[#007BFF] text-white rounded-lg hover:bg-[#0056b3] transition-all shadow-md hover:shadow-lg"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
          >
            Back to Top
          </button>
        </div>
      </div>
    </div>
  );
}