import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams, useLocation } from 'react-router';
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

// ─── SEO-friendly URL slug mappings ───────────────────────────────────────────
export const promptSlugMap: Record<string, string> = {
  '1':  'python-learning-guardrail-system',
  '7':  'data-analyst-system',
  '8':  'fullstack-security-sentinel',
  '10': 'trendpulse-architect',
  '11': 'devalign-coach',
  '13': 'codecollab-coach',
  '14': 'resume-strategist-ai',
  '15': 'cv-structure-architect',
  '16': 'grantforge-ai',
  '17': 'outlineforge-blog-architect',
};

export const slugToPromptId: Record<string, string> = Object.fromEntries(
  Object.entries(promptSlugMap).map(([id, slug]) => [slug, id])
);

// ─── All prompt data (single source of truth) ─────────────────────────────────
export const ALL_PROMPTS: PromptCardData[] = [
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
    price: '$3'
  },
  {
    id: '8',
    title: 'FullStack Security Sentinel: The Code Safety & Repair Expert',
    description: 'Expert security auditor and code remediation specialist that analyzes code for 35+ vulnerabilities, generates professional reports, and provides non-breaking fixes.',
    category: 'Agents',
    thumbnail: 'https://images.unsplash.com/photo-1610758758876-0680d8c2247c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGUlMjBzZWN1cml0eSUyMHZ1bG5lcmFiaWxpdHklMjBhdWRpdCUyMHNjcmVlbnxlbnwxfHx8fDE3NzExMDIyMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: '$8'
  },
  {
    id: '10',
    title: 'TrendPulse Architect',
    description: 'Smart AI strategist that validates trends across time, anchors them to your brand identity, and creates data-backed content strategies.',
    category: 'Content Creation',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVuZGluZyUyMGRhdGElMjBhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzM5ODI2NDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    price: '$2'
  },
  {
    id: '11',
    title: 'DevAlign Coach: Team Alignment Mastery',
    description: 'Intelligent collaboration coach specialized for software development teams. Get personalized advice, skill-building exercises, and templates to navigate the interpersonal side of technical work.',
    category: 'Agents',
    thumbnail: 'https://images.unsplash.com/photo-1646579886741-12b59840c63f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMHRlYW0lMjBjb2xsYWJvcmF0aW9uJTIwbWVldGluZyUyMGRldmVsb3BlcnN8ZW58MXx8fHwxNzcyNTUxMzIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: 'Free'
  },
  {
    id: '13',
    title: 'CodeCollab Coach',
    description: 'Expert AI coach that transforms code collaboration into a deliberate practice skill. Master code review comments, feedback delivery, and team communication for career-defining impact.',
    category: 'Learning Systems',
    thumbnail: 'https://images.unsplash.com/photo-1637073849667-91120a924221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXJzJTIwcGFpciUyMHByb2dyYW1taW5nJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NzI3Mjc5ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: 'Free'
  },
  {
    id: '14',
    title: 'Resume Strategist AI',
    description: 'Dedicated AI career strategist that transforms your experience into ATS-optimized, compelling resume content. Get job-specific sections, before/after examples, and ethical, authentic career storytelling.',
    category: 'Career Tools',
    thumbnail: 'https://images.unsplash.com/photo-1653038417332-6db0ff9d4bfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN1bWUlMjB3cml0aW5nJTIwY2FyZWVyJTIwc3RyYXRlZ3klMjBqb2IlMjBhcHBsaWNhdGlvbnxlbnwxfHx8fDE3NzI3Mjk1NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: 'Free'
  },
  {
    id: '15',
    title: 'CV Structure Architect',
    description: 'An expert-level AI structural engineer exclusively for CVs and academic vitae. Transform career data into tailored CV architectures with before/after outlines, ATS-readiness scores, and export-ready templates.',
    category: 'Career Tools',
    thumbnail: 'https://images.unsplash.com/photo-1693045181676-57199422ee66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMENWJTIwcHJvZmVzc2lvbmFsJTIwcmVzdW1lJTIwZG9jdW1lbnQlMjBzdHJ1Y3R1cmV8ZW58MXx8fHwxNzcyNzI5OTUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: 'Free'
  },
  {
    id: '16',
    title: 'GrantForge AI',
    description: 'Expert grant-writing strategist and collaborative AI partner that delivers end-to-end support for persuasive narratives and rigorous budgets. Strategic funding advisor for nonprofits, researchers, and social enterprises.',
    category: 'Career Tools',
    thumbnail: 'https://images.unsplash.com/photo-1763739532737-f24dc5dd1325?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdyaXRpbmclMjBjYXJlZXIlMjBkb2N1bWVudHxlbnwxfHx8fDE3NzI3MzMyMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: 'Free'
  },
  {
    id: '17',
    title: 'OutlineForge: Blog Architect',
    description: 'A precision outlining engine that produces publication-ready blog structures faster than you can brew coffee. Blends storytelling craft, psychological triggers, and SEO intelligence into every outline.',
    category: 'Content Creation',
    thumbnail: 'https://images.unsplash.com/photo-1745151485547-8d428247c1ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9nJTIwd3JpdGluZyUyMGNvbnRlbnQlMjBjcmVhdGlvbiUyMGxhcHRvcHxlbnwxfHx8fDE3NzI3MzQwNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: 'Free'
  }
];

// ─── Download handlers ─────────────────────────────────────────────────────────
export function handleDownloadFn(id: string) {
  const links: Record<string, string> = {
    '1':  'https://payhip.com/b/V5PBw',
    '7':  'https://gemini.google.com/gem/1-RRD545WaOHgM_jmjDaxsAwrbtnIawqG?usp=sharing',
    '8':  'https://gemini.google.com/gem/1eHwVLFyQClOzXaiGj6FJUMe1xCUTWbEe?usp=sharing',
    '10': 'https://gemini.google.com/gem/1v90M2ApTHhxW1Zl3eNyqD_Ljg0hSNMsq?usp=sharing',
    '11': 'https://gemini.google.com/gem/15CoMyxSfxdf-knQzMoFGB8oDnn0wEc6S?usp=sharing',
    '13': 'https://gemini.google.com/gem/1uY6di1Ps7JDt2ZIuJwWfMHc5uPZNQs7T?usp=sharing',
    '14': 'https://gemini.google.com/gem/1QF-TvM3H9Oiwc1UqX_aN3mhesZ4vUDjE?usp=sharing',
    '15': 'https://gemini.google.com/gem/1Zx_w0lsSX2ihaTGqMv_3ZHsol6nsbjo4?usp=sharing',
    '16': 'https://gemini.google.com/gem/1SoIKhGIM3v-RtM0tLYRUM8jF6oyV1-BB?usp=sharing',
    '17': 'https://gemini.google.com/gem/1SoIKhGIM3v-RtM0tLYRUM8jF6oyV1-BB?usp=sharing',
  };
  if (links[id]) window.open(links[id], '_blank');
}

export function handleDownloadInstructionsFn(id: string) {
  const links: Record<string, string> = {
    '7':  'https://payhip.com/b/gurUl',
    '8':  'https://payhip.com/b/IWEe8',
    '10': 'https://payhip.com/b/xgK10',
    '11': 'https://payhip.com/b/5Ou3K',
    '13': 'https://payhip.com/b/sNPQ8',
    '14': 'https://payhip.com/b/GuED4',
    '15': 'https://payhip.com/b/Encrm',
    '16': 'https://payhip.com/b/fPaIl',
    '17': 'https://payhip.com/b/FaPvE',
  };
  if (links[id]) window.open(links[id], '_blank');
}

// ─── Prompt Detail Route ───────────────────────────────────────────────────────
function PromptDetailRoute() {
  const { promptSlug } = useParams<{ promptSlug: string }>();
  const navigate = useNavigate();

  const promptId = promptSlug ? slugToPromptId[promptSlug] : undefined;
  const prompt = ALL_PROMPTS.find(p => p.id === promptId) || null;

  if (!prompt) {
    return (
      <>
        <SEO
          title="Prompt Not Found | SystemPrompts.site"
          description="The AI system prompt you are looking for does not exist or has been moved."
          url={`https://systemprompts.site/prompts/${promptSlug}`}
        />
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center px-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Prompt Not Found
            </h1>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              The system prompt you're looking for doesn't exist or may have been moved.
            </p>
            <button
              onClick={() => navigate('/prompts')}
              className="px-6 py-3 bg-[#007BFF] text-white rounded-xl hover:bg-[#0056b3] transition-colors font-semibold"
            >
              Browse All Prompts
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO
        title={`${prompt.title} — AI System Prompt | SystemPrompts.site`}
        description={`${prompt.description} Download this expert-crafted system prompt for ChatGPT, Claude, Gemini, and other AI models.`}
        url={`https://systemprompts.site/prompts/${promptSlug}`}
        type="product"
        keywords={`${prompt.title}, AI system prompt, ${prompt.category}, ChatGPT prompt, Claude prompt, Gemini prompt, download AI prompt, ${prompt.title.toLowerCase().replace(/\s+/g, ' ')} prompt engineering`}
        breadcrumbs={[
          { name: 'Home', url: 'https://systemprompts.site/' },
          { name: 'Prompts', url: 'https://systemprompts.site/prompts' },
          { name: prompt.title, url: `https://systemprompts.site/prompts/${promptSlug}` },
        ]}
        productName={prompt.title}
        productCategory={prompt.category}
      />
      <div className="pt-16 md:pt-20">
        <DetailPage
          prompt={prompt}
          onBack={() => navigate('/')}
          onDownload={handleDownloadFn}
          onDownloadInstructions={handleDownloadInstructionsFn}
        />
      </div>
    </>
  );
}

// ─── App Content ───────────────────────────────────────────────────────────────
function AppContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const prompts = ALL_PROMPTS;

  const isDetailView = location.pathname.startsWith('/prompts/') &&
    location.pathname.split('/').length > 2;

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewDocs = (id: string) => {
    const slug = promptSlugMap[id] || id;
    navigate(`/prompts/${slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen">
        <Header
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onLogoClick={handleLogoClick}
          prompts={prompts}
          onPromptClick={handleViewDocs}
          isDetailView={isDetailView}
        />

        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                prompts={prompts}
                searchQuery={searchQuery}
                onViewDocs={handleViewDocs}
                onDownload={handleDownloadFn}
                onDownloadInstructions={handleDownloadInstructionsFn}
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
                onDownload={handleDownloadFn}
                onDownloadInstructions={handleDownloadInstructionsFn}
              />
            }
          />
          <Route
            path="/prompts/:promptSlug"
            element={<PromptDetailRoute />}
          />
          <Route
            path="/blog"
            element={<Blog />}
          />
          <Route
            path="/blog/:slug"
            element={<BlogPost />}
          />
        </Routes>

        <Footer onNavigateHome={() => navigate('/')} />
      </div>
    </>
  );
}

// ─── Root App ──────────────────────────────────────────────────────────────────
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