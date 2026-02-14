import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { DetailPage } from './components/DetailPage';
import { HomePage } from './pages/HomePage';
import { AllPromptsPage } from './pages/AllPromptsPage';
import { PromptCardData } from './components/PromptCard';
import { SEO } from './components/SEO';
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
      thumbnail: 'https://images.unsplash.com/photo-1667372531881-6f975b1c86db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxweXRob24lMjBwcm9ncmFtbWluZyUyMGNvZGV8ZW58MXx8fHwxNzY5MzQyMzgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      price: '$2'
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
      title: 'Data/Analyst System',
      description: 'High-autonomy interrogation engine that transforms raw data into strategic intelligence with visual-first methodology and zero-friction analysis.',
      category: 'Agents',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkJTIwY2hhcnRzJTIwZ3JhcGhzfGVufDF8fHx8MTc3MDk3MDI4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      price: 'Free'
    },
    {
      id: '8',
      title: 'FullStack Security Sentinel: The Code Safety & Repair Expert',
      description: 'Expert security auditor and code remediation specialist that analyzes code for 35+ vulnerabilities, generates professional reports, and provides non-breaking fixes.',
      category: 'Agents',
      thumbnail: 'https://images.unsplash.com/photo-1610758758876-0680d8c2247c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGUlMjBzZWN1cml0eSUyMHZ1bG5lcmFiaWxpdHklMjBhdWRpdCUyMHNjcmVlbnxlbnwxfHx8fDE3NzExMDIyMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      price: '$3'
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

  const handleLogoClick = () => {
    setSelectedPromptId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewDocs = (id: string) => {
    setSelectedPromptId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDownload = (id: string) => {
    // Check if this is the Python Learning Guardrail System
    if (id === '1') {
      // Redirect to Payhip download page
      window.open('https://payhip.com/b/V5PBw', '_blank');
    } else if (id === '7') {
      // Redirect to Gemini Gem for Data/Analyst System
      window.open('https://gemini.google.com/gem/1-RRD545WaOHgM_jmjDaxsAwrbtnIawqG?usp=sharing', '_blank');
    } else if (id === '8') {
      // Redirect to Payhip for FullStack Security Sentinel
      window.open('https://payhip.com/b/WP4Om', '_blank');
    } else {
      // Coming soon message for other prompts
      alert('Coming Soon!\n\nThis prompt will be available for download soon. Stay tuned!');
    }
  };

  const handleBackToHome = () => {
    setSelectedPromptId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedPrompt = prompts.find(p => p.id === selectedPromptId) || null;

  // Detail page view
  if (selectedPromptId) {
    return (
      <HelmetProvider>
        <Router>
          <SEO 
            title={`${selectedPrompt?.title} - SystemPrompts`}
            description={selectedPrompt?.description}
          />
          <Header 
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onLogoClick={handleLogoClick}
            prompts={prompts}
            onPromptClick={handleViewDocs}
            isDetailView={true}
          />
          <div className="pt-16 md:pt-20">
            <DetailPage
              prompt={selectedPrompt}
              onBack={handleBackToHome}
              onDownload={handleDownload}
            />
          </div>
          <Footer onNavigateHome={handleBackToHome} />
        </Router>
      </HelmetProvider>
    );
  }

  // Main routing
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen">
          <SEO />
          <Header 
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onLogoClick={handleLogoClick}
            prompts={prompts}
            onPromptClick={handleViewDocs}
          />
          
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  prompts={prompts}
                  searchQuery={searchQuery}
                  onViewDocs={handleViewDocs}
                  onDownload={handleDownload}
                />
              } 
            />
            <Route 
              path="/prompts" 
              element={
                <AllPromptsPage 
                  prompts={prompts}
                  searchQuery={searchQuery}
                  onViewDocs={handleViewDocs}
                  onDownload={handleDownload}
                />
              } 
            />
          </Routes>

          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;