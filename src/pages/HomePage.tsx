import React from 'react';
import { useNavigate } from 'react-router';
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
  onDownloadInstructions?: (id: string) => void;
}

export function HomePage({ prompts, searchQuery, onViewDocs, onDownload, onDownloadInstructions }: HomePageProps) {
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
        onDownloadInstructions={onDownloadInstructions}
      />
      <CustomOptimizationSection />
      <SubscriptionSection />
    </main>
  );
}