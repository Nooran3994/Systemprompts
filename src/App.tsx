import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { DetailPage } from './components/DetailPage';
import { HomePage } from './pages/HomePage';
import { AllPromptsPage } from './pages/AllPromptsPage';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import { PromptCardData } from './components/PromptCard';
import { SEO } from './components/SEO';
import { ScrollToTop } from './components/ScrollToTop';
import pythonRoadmap from 'figma:asset/bec09281486d709b585555bb617316a95cad5032.png';

function AppContent() {
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
      price: 'Free'
    },
    {
      id: '10',
      title: 'TrendPulse Architect',
      description: 'Smart AI strategist that validates trends across time, anchors them to your brand identity, and creates data-backed content strategies.',
      category: 'Content Creation',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVuZGluZyUyMGRhdGElMjBhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzM5ODI2NDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      price: 'Free'
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
    if (id === '1') {
      // Redirect to Payhip for Python Learning Guardrail System
      window.open('https://payhip.com/b/V5PBw', '_blank');
    } else if (id === '7') {
      // Redirect to Gemini Gem for Data/Analyst System
      window.open('https://gemini.google.com/gem/1-RRD545WaOHgM_jmjDaxsAwrbtnIawqG?usp=sharing', '_blank');
    } else if (id === '8') {
      // Redirect to Gemini Gem for FullStack Security Sentinel
      window.open('https://gemini.google.com/gem/1eHwVLFyQClOzXaiGj6FJUMe1xCUTWbEe?usp=sharing', '_blank');
    } else if (id === '10') {
      // Redirect to Gemini Gem for TrendPulse Architect
      window.open('https://gemini.google.com/gem/1v90M2ApTHhxW1Zl3eNyqD_Ljg0hSNMsq?usp=sharing', '_blank');
    }
  };

  const handleDownloadInstructions = (id: string) => {
    // Handler for downloading instruction files
    alert('Download Instructions\n\nYou will receive .md instruction files that can be used with any AI model (ChatGPT, Claude, Grok, etc.).\n\nComing Soon!');
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
            onDownloadInstructions={handleDownloadInstructions}
          />
        </div>
        <Footer onNavigateHome={handleBackToHome} />
      </>
    );
  }

  // Main routing
  return (
    <>
      <ScrollToTop />
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
                onDownloadInstructions={handleDownloadInstructions}
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
                onDownloadInstructions={handleDownloadInstructions}
              />
            } 
          />
          <Route 
            path="/blog" 
            element={
              <Blog />
            } 
          />
          <Route 
            path="/blog/:slug" 
            element={
              <BlogPost />
            } 
          />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;