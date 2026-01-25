import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { VisionMissionSection } from './components/VisionMissionSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BrowseSection } from './components/BrowseSection';
import { CustomOptimizationSection } from './components/CustomOptimizationSection';
import { SubscriptionSection } from './components/SubscriptionSection';
import { Footer } from './components/Footer';
import { DetailPage } from './components/DetailPage';
import { PromptCardData } from './components/PromptCard';
import pythonRoadmap from 'figma:asset/bec09281486d709b585555bb617316a95cad5032.png';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPromptId, setSelectedPromptId] = useState<string | null>(null);

  // Sample prompts data
  const prompts: PromptCardData[] = [
    {
      id: '1',
      title: 'Python Learning Guardrail System',
      description: 'A stateful AI engine for guided Python mastery, following a comprehensive roadmap with prompts, validations, and project integration.',
      category: 'Learning Systems',
      thumbnail: pythonRoadmap,
      price: '$29'
    },
    {
      id: '2',
      title: 'Customer Service Agent',
      description: 'An intelligent agent system for handling customer inquiries with empathy, context awareness, and escalation protocols.',
      category: 'Agents',
      thumbnail: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop',
      price: '$39'
    },
    {
      id: '3',
      title: 'Social Media Content Generator',
      description: 'Automated content creation system for social platforms with brand voice consistency, hashtag optimization, and engagement strategies.',
      category: 'Social Media Systems',
      thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      price: '$24'
    },
    {
      id: '4',
      title: 'Code Review Assistant',
      description: 'AI-powered code reviewer that provides constructive feedback, identifies bugs, and suggests best practices across multiple languages.',
      category: 'Productivity',
      thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
      price: '$34'
    },
    {
      id: '5',
      title: 'Research Paper Analyzer',
      description: 'Advanced system for analyzing academic papers, extracting key insights, and generating comprehensive summaries.',
      category: 'Productivity',
      thumbnail: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=800&h=600&fit=crop',
      price: '$44'
    },
    {
      id: '6',
      title: 'Creative Writing Coach',
      description: 'Interactive writing assistant that helps develop stories, characters, and plots with professional creative writing techniques.',
      category: 'Content Creation',
      thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop',
      price: '$27'
    },
    {
      id: '7',
      title: 'Data Analysis Agent',
      description: 'Intelligent system for analyzing datasets, generating visualizations, and providing actionable insights from complex data.',
      category: 'Agents',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      price: '$49'
    },
    {
      id: '8',
      title: 'Language Tutor System',
      description: 'Comprehensive language learning system with conversational practice, grammar explanations, and cultural context.',
      category: 'Learning Systems',
      thumbnail: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&h=600&fit=crop',
      price: '$32'
    },
    {
      id: '9',
      title: 'Email Marketing Assistant',
      description: 'AI system for crafting compelling email campaigns with A/B testing suggestions and conversion optimization.',
      category: 'Social Media Systems',
      thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
      price: '$36'
    }
  ];

  const handleBrowseClick = () => {
    const categoriesSection = document.getElementById('categories');
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = () => {
    setSelectedPromptId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewDocs = (id: string) => {
    setSelectedPromptId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDownload = (id: string) => {
    // Placeholder for download functionality
    alert(`Download initiated for prompt ID: ${id}\n\nIn a production environment, this would provide a secure download link.`);
  };

  const handleBackToHome = () => {
    setSelectedPromptId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedPrompt = prompts.find(p => p.id === selectedPromptId) || null;

  // Detail page view
  if (selectedPromptId) {
    return (
      <>
        <Header 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onLogoClick={handleLogoClick}
        />
        <div className="pt-16 md:pt-20">
          <DetailPage
            prompt={selectedPrompt}
            onBack={handleBackToHome}
            onDownload={handleDownload}
          />
        </div>
        <Footer />
      </>
    );
  }

  // Landing page view
  return (
    <div className="min-h-screen">
      <Header 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onLogoClick={handleLogoClick}
      />
      
      <main>
        <HeroSection onBrowseClick={handleBrowseClick} />
        <VisionMissionSection />
        <TestimonialsSection />
        <BrowseSection
          prompts={prompts}
          searchQuery={searchQuery}
          onViewDocs={handleViewDocs}
          onDownload={handleDownload}
        />
        <CustomOptimizationSection />
        <SubscriptionSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
