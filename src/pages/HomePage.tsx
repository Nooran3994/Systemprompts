import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeroSection } from '../components/HeroSection';
import { VisionMissionSection } from '../components/VisionMissionSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { BrowseSection } from '../components/BrowseSection';
import { CustomOptimizationSection } from '../components/CustomOptimizationSection';
import { SubscriptionSection } from '../components/SubscriptionSection';
import { PromptCardData } from '../components/PromptCard';

interface HomePageProps {
  prompts: PromptCardData[];
  searchQuery: string;
  onViewDocs: (id: string) => void;
  onDownload: (id: string) => void;
}

export function HomePage({ prompts, searchQuery, onViewDocs, onDownload }: HomePageProps) {
  const navigate = useNavigate();

  const handleBrowseClick = () => {
    navigate('/prompts');
  };

  return (
    <main>
      <HeroSection onBrowseClick={handleBrowseClick} />
      <VisionMissionSection />
      <TestimonialsSection />
      <BrowseSection
        prompts={prompts}
        searchQuery={searchQuery}
        onViewDocs={onViewDocs}
        onDownload={onDownload}
      />
      <CustomOptimizationSection />
      <SubscriptionSection />
    </main>
  );
}
