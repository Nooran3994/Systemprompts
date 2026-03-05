import React from 'react';
import { useNavigate } from 'react-router';
import { HeroSection } from '../components/HeroSection';
import { VisionMissionSection } from '../components/VisionMissionSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { BrowseSection } from '../components/BrowseSection';
import { CustomOptimizationSection } from '../components/CustomOptimizationSection';
import { SubscriptionSection } from '../components/SubscriptionSection';
import { PromptCardData } from '../components/PromptCard';
import { SEO } from '../components/SEO';

interface HomePageProps {
  prompts: PromptCardData[];
  searchQuery: string;
  onViewDocs: (id: string) => void;
  onDownload: (id: string) => void;
  onDownloadInstructions?: (id: string) => void;
}

export function HomePage({ prompts, searchQuery, onViewDocs, onDownload, onDownloadInstructions }: HomePageProps) {
  const navigate = useNavigate();

  const handleBrowseClick = () => {
    navigate('/prompts');
  };

  return (
    <main>
      <SEO
        title="SystemPrompts.site — Download Expert AI System Prompts for ChatGPT, Claude & Gemini"
        description="The #1 marketplace for professional AI system prompts. Download expert-crafted prompts for ChatGPT, Claude, Gemini, GitHub Copilot, Cursor & more. Start free — upgrade anytime."
        url="https://systemprompts.site/"
        keywords="buy AI system prompts, download ChatGPT prompts, Claude system prompt templates, Gemini prompts, AI prompt marketplace, free AI prompts, professional system prompts, prompt engineering templates, AI productivity tools, best AI prompts 2026"
      />
      <HeroSection onBrowseClick={handleBrowseClick} />
      <VisionMissionSection />
      <TestimonialsSection />
      <BrowseSection
        prompts={prompts}
        searchQuery={searchQuery}
        onViewDocs={onViewDocs}
        onDownload={onDownload}
        onDownloadInstructions={onDownloadInstructions}
      />
      <CustomOptimizationSection />
      <SubscriptionSection />
    </main>
  );
}