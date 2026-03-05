import React, { useState } from 'react';
import { ArrowLeft, Download, CheckCircle, FileText, Code, Lightbulb, Rocket, BookOpen, FolderTree, GitBranch, Play, Terminal, ChevronDown, ChevronUp, Shield, AlertTriangle, Lock, Search, FileDown, Users, Globe, TrendingUp } from 'lucide-react';
import { PromptCardData } from './PromptCard';
import { DownloadInstructionsButton } from './DownloadInstructionsButton';
import { CodeCollabPage } from './DetailPageCodeCollab';
import pythonRoadmap from 'figma:asset/bec09281486d709b585555bb617316a95cad5032.png';

interface DetailPageProps {
  prompt: PromptCardData | null;
  onBack: () => void;
  onDownload: (id: string) => void;
  onDownloadInstructions?: (id: string) => void;
}

export function DetailPage({ prompt, onBack, onDownload, onDownloadInstructions }: DetailPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!prompt) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Prompt not found</p>
      </div>
    );
  }

  // Show the comprehensive page for Python Learning Guardrail System or Data/Analyst System
  if (prompt.id === '10') {
    // TrendPulse Architect comprehensive page
    return (
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#007BFF] to-[#28A745] text-white py-12 md:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <a
              href="#browse"
              onClick={onBack}
              className="inline-flex items-center text-white/90 hover:text-white mb-6 md:mb-8 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Back to Browse
            </a>

            <div className="text-center max-w-4xl mx-auto">
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                TrendPulse Architect
              </h1>
              <p
                className="text-lg sm:text-xl md:text-2xl text-white/95 mb-3 md:mb-4"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
              >
                Your Smart Guide to Trending Content That Fits Your Brand
              </p>
              <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-6 md:mb-8">
                Spot viral trends before they fade, tailor them perfectly to your brand's voice, and turn them into content that drives engagement—all in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button
                  onClick={() => onDownload(prompt.id)}
                  className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-white text-[#007BFF] rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all text-sm md:text-base"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                >
                  <Rocket className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Access Free System
                </button>
                {onDownloadInstructions && (
                  <DownloadInstructionsButton
                    onClick={() => onDownloadInstructions(prompt.id)}
                    className="sm:w-auto"
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="py-12 md:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#343A40] mb-4"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Unlock the Power of Trends Without the Guesswork
              </h2>
              <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                The AI-powered digital strategist that validates trends across time and anchors them to your unique brand identity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border-l-4 border-[#007BFF]">
                <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-[#28A745] mb-4" />
                <h3
                  className="text-lg md:text-xl font-bold text-[#343A40] mb-3"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Save Time & Reduce Risk
                </h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  Get data-backed insights on what's hot now and what's built to last. Invest in content that pays off instead of chasing fleeting fads.
                </p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border-l-4 border-[#FFC107]">
                <Lightbulb className="w-8 h-8 md:w-10 md:h-10 text-[#FFC107] mb-4" />
                <h3
                  className="text-lg md:text-xl font-bold text-[#343A40] mb-3"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Brand-First Customization
                </h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  Upload your brand guide once, and every suggestion aligns with your tone, audience, and style—making your content stand out authentically.
                </p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border-l-4 border-[#28A745]">
                <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-[#007BFF] mb-4" />
                <h3
                  className="text-lg md:text-xl font-bold text-[#343A40] mb-3"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Proven Results
                </h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  Users report 2x faster content planning and up to 30% higher engagement by focusing on "Gold Opportunities" over risky virals.
                </p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border-l-4 border-[#007BFF]">
                <Rocket className="w-8 h-8 md:w-10 md:h-10 text-[#007BFF] mb-4" />
                <h3
                  className="text-lg md:text-xl font-bold text-[#343A40] mb-3"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  For Marketers & Brands
                </h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  Whether you're in fashion, tech, or wellness, spot gaps competitors miss and dominate your niche with strategic content.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#343A40] mb-4"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Key Benefits That Make a Difference
              </h2>
              <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
                Your strategic partner that combines real-time data with your brand's DNA for smarter, faster decisions.
              </p>
            </div>

            <div className="space-y-8 md:space-y-12">
              {/* Benefit 1 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#007BFF] to-[#28A745] rounded-lg flex items-center justify-center">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3
                    className="text-xl md:text-2xl font-bold text-[#343A40] mb-3"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    1. Spot Trends That Matter
                  </h3>
                  <p className="text-gray-700 mb-3 leading-relaxed">
                    <strong>Value:</strong> Analyze trends across short bursts (72 hours for quick wins) to longer cycles (30 days for evergreen authority), so you know what's worth your effort.
                  </p>
                  <p className="text-gray-700 mb-3 leading-relaxed">
                    <strong>Benefit:</strong> Avoid burnout on flops—label trends as "Viral/High-Risk" or "Gold Opportunity/Sustained" to prioritize high-ROI ideas.
                  </p>
                  <p className="text-gray-600 italic text-sm">
                    Real-World Win: A sustainable fashion brand used it to jump on "zero-waste patterns" (a 7-day sustained trend), resulting in a 25% spike in social shares.
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#FFC107] to-[#28A745] rounded-lg flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3
                    className="text-xl md:text-2xl font-bold text-[#343A40] mb-3"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    2. Make It Yours
                  </h3>
                  <p className="text-gray-700 mb-3 leading-relaxed">
                    <strong>Value:</strong> Grounds every insight in your uploaded brand files (like guides or personas), ensuring suggestions match your voice and audience.
                  </p>
                  <p className="text-gray-700 mb-3 leading-relaxed">
                    <strong>Benefit:</strong> Identify unique gaps—what your competitors ignore that you can own—based on your expertise.
                  </p>
                  <p className="text-gray-600 italic text-sm">
                    Real-World Win: A tech gadget startup spotted a gap in "eco-friendly accessories," creating content that boosted website traffic by 40%.
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#28A745] to-[#007BFF] rounded-lg flex items-center justify-center">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3
                    className="text-xl md:text-2xl font-bold text-[#343A40] mb-3"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    3. Execute with Ease
                  </h3>
                  <p className="text-gray-700 mb-3 leading-relaxed">
                    <strong>Value:</strong> Get ready-to-use plans, like 7-day schedules with platforms, formats, and hashtags, plus refined drafts in your brand's tone.
                  </p>
                  <p className="text-gray-700 mb-3 leading-relaxed">
                    <strong>Benefit:</strong> Go from idea to post in hours, with built-in metrics to track success.
                  </p>
                  <p className="text-gray-600 italic text-sm">
                    Real-World Win: A wellness coach generated a week's worth of Instagram Reels on "mindful tech," leading to 15% more followers in a month.
                  </p>
                </div>
              </div>

              {/* Benefit 4 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#FFC107] to-[#007BFF] rounded-lg flex items-center justify-center">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3
                    className="text-xl md:text-2xl font-bold text-[#343A40] mb-3"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    4. Stay Ahead Proactively
                  </h3>
                  <p className="text-gray-700 mb-3 leading-relaxed">
                    <strong>Value:</strong> Every response ends with tailored "next steps" prompts to keep the momentum going.
                  </p>
                  <p className="text-gray-700 mb-3 leading-relaxed">
                    <strong>Benefit:</strong> No dead ends—get ideas for drafting, deep dives, or distribution without starting from scratch.
                  </p>
                  <p className="text-gray-600 italic text-sm">
                    Real-World Win: Brands using this loop report cutting content creation time by half while staying agile.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="py-12 md:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#343A40] mb-4"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                How It Works: Simple & Effective
              </h2>
              <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
                No tech expertise needed. Get started in minutes.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-[#007BFF] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3
                  className="text-lg font-bold text-[#343A40] mb-2"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Get Started
                </h3>
                <p className="text-gray-700 text-sm">
                  Upload your brand file (PDF, doc, etc.) or describe your niche/voice.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-[#28A745] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3
                  className="text-lg font-bold text-[#343A40] mb-2"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Ask Away
                </h3>
                <p className="text-gray-700 text-sm">
                  Query like "What's trending in sustainable fashion?" or "Build a 7-day plan."
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-[#FFC107] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3
                  className="text-lg font-bold text-[#343A40] mb-2"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Get Insights
                </h3>
                <p className="text-gray-700 text-sm">
                  Receive trend breakdowns, gap ideas, and strategies—all tied to your brand.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-[#6C757D] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3
                  className="text-lg font-bold text-[#343A40] mb-2"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Act & Iterate
                </h3>
                <p className="text-gray-700 text-sm">
                  Use the output directly, then follow the "What's Next?" prompts for more.
                </p>
              </div>
            </div>

            <div className="mt-10 p-6 bg-white border-l-4 border-[#007BFF] rounded-lg shadow-md">
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-[#007BFF]">Pro Tip:</strong> For best results, update your brand file as your strategy evolves—the AI adapts instantly to provide even more relevant insights.
              </p>
            </div>
          </div>
        </div>

        {/* Who It's For */}
        <div className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#343A40] mb-4"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Who It's For
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
              <div className="bg-gradient-to-br from-[#007BFF]/10 to-[#28A745]/10 p-6 rounded-lg">
                <h3
                  className="text-xl font-bold text-[#343A40] mb-3"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Social Media Managers
                </h3>
                <p className="text-gray-700">
                  Stay ahead of trends and create content that resonates with your audience while maintaining brand consistency.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#FFC107]/10 to-[#007BFF]/10 p-6 rounded-lg">
                <h3
                  className="text-xl font-bold text-[#343A40] mb-3"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Content Creators
                </h3>
                <p className="text-gray-700">
                  Transform trend research into actionable content strategies that grow your following and engagement.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#28A745]/10 to-[#007BFF]/10 p-6 rounded-lg">
                <h3
                  className="text-xl font-bold text-[#343A40] mb-3"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Brand Strategists
                </h3>
                <p className="text-gray-700">
                  Discover unique market gaps and position your brand as a thought leader in fast-moving niches.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 md:p-8 rounded-lg">
              <h3
                className="text-xl md:text-2xl font-bold text-[#343A40] mb-6 text-center"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Success Stories
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-gray-700 italic mb-3">
                    "TrendPulse transformed my chaotic trend-hunting into a streamlined strategy. My engagement soared!"
                  </p>
                  <p className="text-[#007BFF] font-semibold">— Sarah, Fashion Marketer</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-gray-700 italic mb-3">
                    "Finally, a tool that gets my brand's voice. Gaps I never saw before are now my secret weapon."
                  </p>
                  <p className="text-[#007BFF] font-semibold">— Mike, Tech Entrepreneur</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#007BFF] to-[#28A745] text-white py-12 md:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Ready to Market Smarter?
            </h2>
            <p className="text-white/90 mb-6 md:mb-8 text-base md:text-lg max-w-2xl mx-auto">
              Transform trends into triumphs with TrendPulse Architect. Deploy on your AI platform and watch your content strategy level up.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-4">
              <button
                onClick={() => onDownload(prompt.id)}
                className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-white text-[#007BFF] rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all text-sm md:text-base"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
              >
                <Download className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Access TrendPulse Architect - Free
              </button>
              {onDownloadInstructions && (
                <DownloadInstructionsButton
                  onClick={() => onDownloadInstructions(prompt.id)}
                  className="sm:w-auto"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (prompt.id === '7') {
    // Data/Analyst System comprehensive page
    return (
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#007BFF] to-[#28A745] text-white py-12 md:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <a
              href="#browse"
              onClick={onBack}
              className="inline-flex items-center text-white/90 hover:text-white mb-6 md:mb-8 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Back to Browse
            </a>

            <div className="text-center max-w-4xl mx-auto">
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Data/Analyst System
              </h1>
              <p
                className="text-lg sm:text-xl md:text-2xl text-white/95 mb-3 md:mb-4"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
              >
                High-Autonomy Interrogation Engine for Strategic Intelligence
              </p>
              <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-6 md:mb-8">
                Transform raw artifacts into immediate strategic intelligence with visual-first methodology. 
                Zero configuration, zero friction — just upload and get insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button
                  onClick={() => onDownload(prompt.id)}
                  className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-white text-[#007BFF] rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all text-sm md:text-base"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                >
                  <Rocket className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Access Free System
                </button>
                {onDownloadInstructions && (
                  <DownloadInstructionsButton
                    onClick={() => onDownloadInstructions(prompt.id)}
                    className="sm:w-auto"
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
          
          {/* System Overview */}
          <section className="mb-12 md:mb-16 lg:mb-20">
            <div className="text-center mb-8 md:mb-12">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#343A40] mb-3 md:mb-4 px-4"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                System Overview
              </h2>
              <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto px-4">
                Unlike traditional analytical tools that require manual configuration, this system 
                utilizes a Visual-First methodology to deliver immediate insights.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-white border border-gray-200 rounded-xl p-4 md:p-6">
                <div className="w-12 h-12 bg-[#007BFF] rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-[#343A40] mb-2 text-base md:text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Visual Dominance
                </h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  Prioritize graphical representation to reveal the "story" of the data immediately with 3-5 high-density charts.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white border border-gray-200 rounded-xl p-4 md:p-6">
                <div className="w-12 h-12 bg-[#28A745] rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-[#343A40] mb-2 text-base md:text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Direct Intelligence
                </h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  BLUF (Bottom Line Up Front) framework for rapid executive decision-making with no fluff.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-white border border-gray-200 rounded-xl p-4 md:p-6">
                <div className="w-12 h-12 bg-[#FFC107] rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-[#343A40] mb-2 text-base md:text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Grounded Clarity
                </h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  Translate complex statistics into plain, professional English without metaphors or jargon.
                </p>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="border-t border-gray-200 mb-12 md:mb-16 lg:mb-20"></div>

          {/* Video Demonstration */}
          <section className="mb-12 md:mb-16 lg:mb-20">
            <div className="text-center mb-8 md:mb-12">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#343A40] mb-3 md:mb-4 px-4"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                See It In Action
              </h2>
              <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto px-4">
                Watch how the Data/Analyst System transforms raw data into strategic insights instantly
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border-4 border-[#007BFF]/20">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  className="w-full h-auto"
                  poster="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=675&fit=crop"
                >
                  <source src="https://i.imgur.com/FZSfUI7.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-center text-sm text-gray-500 mt-4 px-4">
                Live demonstration of the visual-first interrogation workflow
              </p>
            </div>
          </section>

          {/* Divider */}
          <div className="border-t border-gray-200 mb-12 md:mb-16 lg:mb-20"></div>

          {/* The Interrogation Loop */}
          <section className="mb-12 md:mb-16 lg:mb-20">
            <div className="text-center mb-8 md:mb-12">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#343A40] mb-3 md:mb-4 px-4"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                The Interrogation Loop
              </h2>
              <p className="text-gray-600 text-base md:text-lg px-4">
                Automatic workflow upon receiving any artifact (CSV, XLSX, JSON, PDF, or Source Code)
              </p>
            </div>

            <div className="space-y-6">
              {/* Step 1: Integrity Audit */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#007BFF] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    A
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#343A40] mb-3 text-lg md:text-xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Integrity Audit
                    </h3>
                    <p className="text-gray-600 mb-4">Silent diagnostic to assess data reliability:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#28A745] mt-1">▸</span>
                        <span><strong>Health Score:</strong> $[0-100]$ metric based on completeness and consistency</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#28A745] mt-1">▸</span>
                        <span><strong>Anomalies:</strong> Identification of statistical outliers and missing values</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#28A745] mt-1">▸</span>
                        <span><strong>Distribution:</strong> Analysis of data skewness and variance</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 2: Adaptive Visual Gallery */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#28A745] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    B
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#343A40] mb-3 text-lg md:text-xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Adaptive Visual Gallery
                    </h3>
                    <p className="text-gray-600 mb-4">Automatic selection of optimal visualizations:</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="bg-blue-50 rounded-lg p-3">
                        <p className="font-semibold text-sm text-[#007BFF] mb-1">High-Volume/Log Data</p>
                        <p className="text-xs text-gray-600">Heatmaps, Frequency Histograms</p>
                      </div>
                      <div className="bg-green-50 rounded-lg p-3">
                        <p className="font-semibold text-sm text-[#28A745] mb-1">Comparison/Categories</p>
                        <p className="text-xs text-gray-600">Treemaps, Grouped Box Plots</p>
                      </div>
                      <div className="bg-yellow-50 rounded-lg p-3">
                        <p className="font-semibold text-sm text-[#FFC107] mb-1">Trends/Time-Series</p>
                        <p className="text-xs text-gray-600">Area Charts, Regression Plots</p>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-3">
                        <p className="font-semibold text-sm text-[#6F42C1] mb-1">Distribution</p>
                        <p className="text-xs text-gray-600">Violin Plots, Ridge Plots</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Strategic Synthesis */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FFC107] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    C
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#343A40] mb-3 text-lg md:text-xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Strategic Synthesis
                    </h3>
                    <p className="text-gray-600 mb-4">Direct, point-form structure for findings:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#28A745] mt-1">▸</span>
                        <span><strong>BLUF Statement:</strong> Single most impactful discovery</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#28A745] mt-1">▸</span>
                        <span><strong>Key Insights:</strong> Targeted bullets explaining the "So What"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#28A745] mt-1">▸</span>
                        <span><strong>Grounded Explanations:</strong> Real-world facts (e.g., "Retention is down 5%")</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="border-t border-gray-200 mb-12 md:mb-16 lg:mb-20"></div>

          {/* User Interaction Model */}
          <section className="mb-12 md:mb-16 lg:mb-20">
            <div className="text-center mb-8 md:mb-12">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#343A40] mb-3 md:mb-4 px-4"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Interrogation Styles
              </h2>
              <p className="text-gray-600 text-base md:text-lg px-4">
                Choose your analysis approach with one-click tiles
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white border-2 border-[#007BFF] rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#007BFF] rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-[#343A40] text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Visual Audit
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Full interrogation with focus on graphical storytelling
                </p>
              </div>

              <div className="bg-white border-2 border-[#28A745] rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#28A745] rounded-lg flex items-center justify-center">
                    <GitBranch className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-[#343A40] text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Trend Interrogation
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Focus on long-term signals and correlations
                </p>
              </div>

              <div className="bg-white border-2 border-[#FFC107] rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#FFC107] rounded-lg flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-[#343A40] text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Anomaly Detection
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Targeted search for risks and statistical "weirdness"
                </p>
              </div>

              <div className="bg-white border-2 border-[#6F42C1] rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#6F42C1] rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-[#343A40] text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Executive Summary
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Condensed report focusing on bottom line and data health
                </p>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="border-t border-gray-200 mb-12 md:mb-16 lg:mb-20"></div>

          {/* Output Architecture */}
          <section className="mb-12 md:mb-16 lg:mb-20">
            <div className="text-center mb-8 md:mb-12">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#343A40] mb-3 md:mb-4 px-4"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Output Architecture
              </h2>
              <p className="text-gray-600 text-base md:text-lg px-4">
                Standardized, scannable structure for every response
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 md:p-8 overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-[#007BFF]">
                    <th className="pb-3 pr-4 text-[#007BFF] font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>Section</th>
                    <th className="pb-3 text-[#007BFF] font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>Content</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-3 pr-4 font-semibold text-gray-700">Visual Gallery</td>
                    <td className="py-3 text-gray-600">3–5 high-density charts tailored to the data type</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-semibold text-gray-700">The Bottom Line</td>
                    <td className="py-3 text-gray-600">One bold sentence summarizing the primary discovery</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-semibold text-gray-700">Analysis Points</td>
                    <td className="py-3 text-gray-600">3–5 direct, professional bullet points on findings</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-semibold text-gray-700">Health Matrix</td>
                    <td className="py-3 text-gray-600">Markdown table detailing technical audit and metadata</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-semibold text-gray-700">Next Steps</td>
                    <td className="py-3 text-gray-600">Three clickable, high-value prompts for deeper exploration</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Divider */}
          <div className="border-t border-gray-200 mb-12 md:mb-16 lg:mb-20"></div>

          {/* Key Constraints */}
          <section className="mb-12 md:mb-16 lg:mb-20">
            <div className="text-center mb-8 md:mb-12">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#343A40] mb-3 md:mb-4 px-4"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                System Constraints & Privacy
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-4">
                <CheckCircle className="w-6 h-6 text-[#28A745] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-700 mb-1">No Code Display</p>
                  <p className="text-sm text-gray-600">Python logic executed internally for clean interface</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-4">
                <CheckCircle className="w-6 h-6 text-[#28A745] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-700 mb-1">No Metaphors</p>
                  <p className="text-sm text-gray-600">Strictly business/data domain communication</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-4">
                <CheckCircle className="w-6 h-6 text-[#28A745] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-700 mb-1">Data Privacy</p>
                  <p className="text-sm text-gray-600">Silent PII redaction (names, emails, phone numbers)</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-4">
                <CheckCircle className="w-6 h-6 text-[#28A745] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-700 mb-1">Computational Rigor</p>
                  <p className="text-sm text-gray-600">Python interpreter derived results, never estimates</p>
                </div>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="border-t border-gray-200 mb-12 md:mb-16 lg:mb-20"></div>

          {/* Best Practices */}
          <section className="mb-12 md:mb-16 lg:mb-20">
            <div className="text-center mb-8 md:mb-12">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#343A40] mb-3 md:mb-4 px-4"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Best Practices for Users
              </h2>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 md:p-8 border border-gray-200">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#007BFF] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                    1
                  </div>
                  <p className="text-gray-700"><strong>Upload First:</strong> For best experience, upload your file before typing instructions</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#28A745] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                    2
                  </div>
                  <p className="text-gray-700"><strong>Specific Artifacts:</strong> System performs best with structured tabular data or semi-structured logs</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#FFC107] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                    3
                  </div>
                  <p className="text-gray-700"><strong>Clickable Prompts:</strong> Use "Recommended Next Steps" to drill down without re-typing queries</p>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="bg-gradient-to-r from-[#007BFF] to-[#28A745] rounded-xl md:rounded-2xl p-6 md:p-12 text-center text-white">
            <Rocket className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 text-white" />
            <h3
              className="text-2xl md:text-3xl font-bold mb-3 md:mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Ready to Transform Your Data?
            </h3>
            <p className="text-white/90 mb-2 text-base md:text-lg max-w-2xl mx-auto px-4">
              Access the Data/Analyst System now — completely free, no sign-up required.
            </p>
            <p className="text-white/80 mb-6 md:mb-8 text-xs md:text-sm px-4">
              Upload your data and get instant strategic insights with zero friction. 🚀
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button
                onClick={() => onDownload(prompt.id)}
                className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-white text-[#007BFF] rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all text-sm md:text-base"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
              >
                <Rocket className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Access Free System
              </button>
              {onDownloadInstructions && (
                <DownloadInstructionsButton
                  onClick={() => onDownloadInstructions(prompt.id)}
                  className="sm:w-auto"
                />
              )}
            </div>
          </section>
        </div>
      </div>
    );
  } else if (prompt.id === '8') {
    // FullStack Security Sentinel comprehensive page
    return (
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#007BFF] to-[#28A745] text-white py-12 md:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <a
              href="#browse"
              onClick={onBack}
              className="inline-flex items-center text-white/90 hover:text-white mb-6 md:mb-8 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Back to Browse
            </a>

            <div className="text-center max-w-4xl mx-auto">
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                FullStack Security Sentinel
              </h1>
              <p
                className="text-lg sm:text-xl md:text-2xl text-white/95 mb-3 md:mb-4"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
              >
                The Code Safety & Repair Expert
              </p>
              <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-6 md:mb-8">
                AI-powered security auditor that scans code for 35+ vulnerability types, generates professional reports, and provides non-breaking fixes that preserve original functionality.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button
                  onClick={() => onDownload(prompt.id)}
                  className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-white text-[#007BFF] rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all text-sm md:text-base"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                >
                  <Download className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Get Free Access
                </button>
                {onDownloadInstructions && (
                  <DownloadInstructionsButton
                    onClick={() => onDownloadInstructions(prompt.id)}
                    className="sm:w-auto"
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
          
          {/* Core Principles */}
          <section className="mb-12 md:mb-16 lg:mb-20">
            <div className="text-center mb-8 md:mb-12">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#343A40] mb-3 md:mb-4 px-4"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Core Principles
              </h2>
              <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto px-4">
                Professional security auditing that preserves code functionality while eliminating vulnerabilities
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-white border border-gray-200 rounded-xl p-4 md:p-6">
                <div className="w-12 h-12 bg-[#007BFF] rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-[#343A40] mb-2 text-base md:text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Systematic Approach
                </h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  Addresses risks one at a time to avoid overwhelming changes while noting interdependencies.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white border border-gray-200 rounded-xl p-4 md:p-6">
                <div className="w-12 h-12 bg-[#28A745] rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-[#343A40] mb-2 text-base md:text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Assume Good Intent
                </h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  Treats code as functional but potentially insecure—no assumptions of intentional flaws.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-white border border-gray-200 rounded-xl p-4 md:p-6">
                <div className="w-12 h-12 bg-[#FFC107] rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-[#343A40] mb-2 text-base md:text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Professional Output
                </h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  Formal language, markdown formatting, and precise location references (file:line).
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-white border border-gray-200 rounded-xl p-4 md:p-6">
                <div className="w-12 h-12 bg-[#DC3545] rounded-lg flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-[#343A40] mb-2 text-base md:text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Non-Breaking Fixes
                </h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  All fixes preserve original behavior, performance, and workability—security only.
                </p>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="border-t border-gray-200 mb-12 md:mb-16 lg:mb-20"></div>

          {/* Video Demonstration */}
          <section className="mb-12 md:mb-16 lg:mb-20">
            <div className="text-center mb-8 md:mb-12">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#343A40] mb-3 md:mb-4 px-4"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                See It In Action
              </h2>
              <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto px-4">
                Watch how the Security Sentinel analyzes code for vulnerabilities and generates professional security reports
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border-4 border-[#007BFF]/20">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  className="w-full h-auto"
                  poster="https://images.unsplash.com/photo-1610758758876-0680d8c2247c?w=1200&h=675&fit=crop"
                >
                  <source src="https://i.imgur.com/e9W9cgI.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-center text-sm text-gray-500 mt-4 px-4">
                Live demonstration of the security audit workflow and code remediation process
              </p>
            </div>
          </section>

          {/* Divider */}
          <div className="border-t border-gray-200 mb-12 md:mb-16 lg:mb-20"></div>

          {/* Security Risks Scanned */}
          <section className="mb-12 md:mb-16 lg:mb-20">
            <div className="text-center mb-8 md:mb-12">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#343A40] mb-3 md:mb-4 px-4"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                35+ Security Risks Scanned
              </h2>
              <p className="text-gray-600 text-base md:text-lg px-4 max-w-3xl mx-auto">
                Comprehensive scanning for OWASP Top 10 and beyond, with severity ratings and precise location tracking
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-8">
              {/* Critical Risks */}
              <div className="bg-white border-2 border-red-200 rounded-xl p-6 md:p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-red-600 mb-2 text-lg md:text-xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Critical Vulnerabilities
                    </h3>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">●</span>
                    <span>Hardcoded API keys, passwords, and sensitive data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">●</span>
                    <span>SQL injection via unvalidated inputs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">●</span>
                    <span>Missing HTTPS/TLS encryption in production</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">●</span>
                    <span>Weak password hashing (MD5, plain text)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">●</span>
                    <span>Insecure deserialization (pickle, etc.)</span>
                  </li>
                </ul>
              </div>

              {/* High-Priority Risks */}
              <div className="bg-white border-2 border-orange-200 rounded-xl p-6 md:p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-orange-600 mb-2 text-lg md:text-xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      High-Priority Security
                    </h3>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">●</span>
                    <span>XSS (Cross-Site Scripting) vulnerabilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">●</span>
                    <span>CSRF (Cross-Site Request Forgery) tokens missing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">●</span>
                    <span>Unsanitized file uploads allowing execution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">●</span>
                    <span>Exposed debug modes or error logs in production</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">●</span>
                    <span>Missing rate limiting on APIs (DDoS risk)</span>
                  </li>
                </ul>
              </div>

              {/* Medium-Priority Risks */}
              <div className="bg-white border-2 border-yellow-200 rounded-xl p-6 md:p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    <Search className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-yellow-700 mb-2 text-lg md:text-xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Configuration & Access
                    </h3>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">●</span>
                    <span>Weak or default encryption algorithms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">●</span>
                    <span>Insecure session management (cookies)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">●</span>
                    <span>Missing CORS policies in web applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">●</span>
                    <span>Unrestricted file paths in includes/requires</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">●</span>
                    <span>Exposed internal endpoints publicly</span>
                  </li>
                </ul>
              </div>

              {/* Modern Security Risks */}
              <div className="bg-white border-2 border-blue-200 rounded-xl p-6 md:p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    <Code className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-blue-600 mb-2 text-lg md:text-xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Modern Threats
                    </h3>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">●</span>
                    <span>Supply-chain attacks in npm/PyPI dependencies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">●</span>
                    <span>Outdated libraries with known CVEs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">●</span>
                    <span>Prototype pollution in JavaScript objects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">●</span>
                    <span>JWTs stored in localStorage (XSS risk)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">●</span>
                    <span>Missing security headers (helmet.js)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 md:p-8 border border-gray-200">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 text-[#28A745] flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-[#343A40] mb-2 text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Comprehensive Coverage
                  </h4>
                  <p className="text-gray-700 text-sm md:text-base">
                    Scans for all OWASP Top 10 vulnerabilities plus 25+ additional modern security risks. Each finding includes severity rating, evidence, precise file/line location, and step-by-step fix prompts.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="border-t border-gray-200 mb-12 md:mb-16 lg:mb-20"></div>

          {/* Response Structure */}
          <section className="mb-12 md:mb-16 lg:mb-20">
            <div className="text-center mb-8 md:mb-12">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#343A40] mb-3 md:mb-4 px-4"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Structured Response Format
              </h2>
              <p className="text-gray-600 text-base md:text-lg px-4 max-w-3xl mx-auto">
                Every security scan generates professional, actionable reports with precise location tracking
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white border-l-4 border-[#007BFF] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#007BFF] text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-[#343A40] mb-2 text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Initial Scan Report
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      Table summarizing all risks with columns for: Risk Number/Name, Description, Severity (Low/Medium/High/Critical), Evidence (code snippet), Location (file:line:folder)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-[#28A745] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#28A745] text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-[#343A40] mb-2 text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Detailed Explanations
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      One comprehensive analysis per risk including: Error/Issue explanation, potential exploits and impact, ASCII flow diagrams showing the risk in context, precise location references
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-[#FFC107] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#FFC107] text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-[#343A40] mb-2 text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Recommendations Report
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      High-level mitigations with pros/cons analysis, alternative approaches, compliance references (OWASP, GDPR), and prioritization guidance
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-[#6F42C1] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#6F42C1] text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-[#343A40] mb-2 text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Fix Prompts (1-3 per risk)
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      Step-by-step implementation guides focusing on one risk at a time, includes pseudocode/examples, specifies exact locations to modify, emphasizes testing for non-breaking changes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="border-t border-gray-200 mb-12 md:mb-16 lg:mb-20"></div>

          {/* Key Features */}
          <section className="mb-12 md:mb-16 lg:mb-20">
            <div className="text-center mb-8 md:mb-12">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#343A40] mb-3 md:mb-4 px-4"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Key Features
              </h2>
              <p className="text-gray-600 text-base md:text-lg px-4">
                Professional security auditing designed for real-world codebases
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <CheckCircle className="w-6 h-6 text-[#28A745] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-700 mb-1">Visual Aids & Diagrams</p>
                  <p className="text-sm text-gray-600">ASCII art and PlantUML-like syntax for system flows showing vulnerabilities in context</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <CheckCircle className="w-6 h-6 text-[#28A745] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-700 mb-1">Precise Location Tracking</p>
                  <p className="text-sm text-gray-600">Exact file paths, line numbers, and folder references (e.g., src/auth.py:Line 42)</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <CheckCircle className="w-6 h-6 text-[#28A745] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-700 mb-1">Non-Breaking Fixes</p>
                  <p className="text-sm text-gray-600">All solutions preserve original behavior, performance, and functionality—security-only changes</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <CheckCircle className="w-6 h-6 text-[#28A745] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-700 mb-1">OWASP & GDPR Compliant</p>
                  <p className="text-sm text-gray-600">Aligned with industry standards and best practices for ethical security fixes</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <CheckCircle className="w-6 h-6 text-[#28A745] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-700 mb-1">Language Agnostic</p>
                  <p className="text-sm text-gray-600">Works with Python, JavaScript, Java, C#, PHP, Ruby, and more—requests clarification if needed</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <CheckCircle className="w-6 h-6 text-[#28A745] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-700 mb-1">Markdown Formatted Reports</p>
                  <p className="text-sm text-gray-600">Professional reports with tables, code blocks, headings, and structured formatting</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <CheckCircle className="w-6 h-6 text-[#28A745] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-700 mb-1">Severity Ratings</p>
                  <p className="text-sm text-gray-600">Clear Low/Medium/High/Critical classifications for prioritizing remediation efforts</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <CheckCircle className="w-6 h-6 text-[#28A745] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-700 mb-1">Step-by-Step Fix Prompts</p>
                  <p className="text-sm text-gray-600">Detailed implementation guides with pseudocode and examples for each vulnerability</p>
                </div>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="border-t border-gray-200 mb-12 md:mb-16 lg:mb-20"></div>

          {/* What It Accepts */}
          <section className="mb-12 md:mb-16 lg:mb-20">
            <div className="text-center mb-8 md:mb-12">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#343A40] mb-3 md:mb-4 px-4"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                What It Accepts
              </h2>
              <p className="text-gray-600 text-base md:text-lg px-4 max-w-3xl mx-auto">
                Flexible input options for comprehensive security analysis
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 bg-gradient-to-br from-blue-50 to-white border border-gray-200 rounded-lg p-4 md:p-6">
                <Code className="w-8 h-8 text-[#007BFF] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-700 mb-2 text-lg">Code Snippets</p>
                  <p className="text-sm text-gray-600">Paste individual functions, classes, or modules for targeted analysis</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-gradient-to-br from-green-50 to-white border border-gray-200 rounded-lg p-4 md:p-6">
                <FolderTree className="w-8 h-8 text-[#28A745] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-700 mb-2 text-lg">Full Codebase</p>
                  <p className="text-sm text-gray-600">Provide complete file structures with folders, files, and languages specified</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-gradient-to-br from-yellow-50 to-white border border-gray-200 rounded-lg p-4 md:p-6">
                <FileText className="w-8 h-8 text-[#FFC107] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-700 mb-2 text-lg">System Descriptions</p>
                  <p className="text-sm text-gray-600">Textual architecture descriptions for high-level security assessments</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-gradient-to-br from-purple-50 to-white border border-gray-200 rounded-lg p-4 md:p-6">
                <Search className="w-8 h-8 text-[#6F42C1] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-700 mb-2 text-lg">Hypothetical Scenarios</p>
                  <p className="text-sm text-gray-600">Query about specific risks or security patterns for educational purposes</p>
                </div>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="border-t border-gray-200 mb-12 md:mb-16 lg:mb-20"></div>

          {/* Usage Guidelines */}
          <section className="mb-12 md:mb-16 lg:mb-20">
            <div className="text-center mb-8 md:mb-12">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#343A40] mb-3 md:mb-4 px-4"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Usage Guidelines
              </h2>
              <p className="text-gray-600 text-base md:text-lg px-4 max-w-3xl mx-auto">
                Get the most out of your security audits
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 md:p-8 border border-gray-200">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#007BFF] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                    1
                  </div>
                  <p className="text-gray-700"><strong>Provide Context:</strong> Include file names, folder structures, and language/framework details for accurate location referencing</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#28A745] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                    2
                  </div>
                  <p className="text-gray-700"><strong>One Risk at a Time:</strong> Focus on implementing fixes systematically rather than all at once to avoid breaking changes</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#FFC107] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                    3
                  </div>
                  <p className="text-gray-700"><strong>Test After Each Fix:</strong> Always verify that original functionality works after applying security patches</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#DC3545] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                    4
                  </div>
                  <p className="text-gray-700"><strong>Review Recommendations:</strong> Consider pros/cons and alternatives before implementing—one size doesn't fit all</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#6F42C1] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                    5
                  </div>
                  <p className="text-gray-700"><strong>Use for Learning:</strong> Treat reports as educational resources to understand security best practices and improve coding skills</p>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="bg-gradient-to-r from-[#007BFF] to-[#28A745] rounded-xl md:rounded-2xl p-6 md:p-12 text-center text-white">
            <Shield className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 text-white" />
            <h3
              className="text-2xl md:text-3xl font-bold mb-3 md:mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Secure Your Code Today
            </h3>
            <p className="text-white/90 mb-2 text-base md:text-lg max-w-2xl mx-auto px-4">
              Get the FullStack Security Sentinel for free and start scanning for 35+ vulnerability types instantly.
            </p>
            <p className="text-white/80 mb-6 md:mb-8 text-xs md:text-sm px-4">
              Professional security reports with non-breaking fixes that preserve your code's functionality. 🔒
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="https://gemini.google.com/gem/1eHwVLFyQClOzXaiGj6FJUMe1xCUTWbEe?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-white text-[#007BFF] rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all text-sm md:text-base"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
              >
                <Download className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Access for Free
              </a>
              {onDownloadInstructions && (
                <DownloadInstructionsButton
                  onClick={() => onDownloadInstructions(prompt.id)}
                  className="sm:w-auto"
                />
              )}
            </div>
          </section>
        </div>
      </div>
    );
  } else if (prompt.id === '11') {
    // DevAlign Coach comprehensive page
    return (
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#007BFF] to-[#28A745] text-white py-12 md:py-16 lg:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <a
              href="#browse"
              onClick={(e) => {
                e.preventDefault();
                onBack();
              }}
              className="inline-flex items-center gap-2 text-white hover:text-white/90 transition-colors mb-6 md:mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:-translate-x-1" />
              <span className="text-sm md:text-base font-medium">Back to Browse</span>
            </a>

            <div className="text-center max-w-4xl mx-auto">
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                DevAlign Coach: Team Alignment Mastery
              </h1>
              <p
                className="text-lg sm:text-xl md:text-2xl text-white/95 mb-3 md:mb-4"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Intelligent Collaboration Coach for Software Teams
              </p>
              <p className="text-sm sm:text-base md:text-lg text-white/80 mb-6 md:mb-8">
                Specialized in software development contexts with personalized advice, skill-building exercises, and ready-to-use templates
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button
                  onClick={() => onDownload(prompt.id)}
                  className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-white text-[#007BFF] rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all text-sm md:text-base"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                >
                  <Download className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Try Free Now
                </button>
                {onDownloadInstructions && (
                  <DownloadInstructionsButton
                    onClick={() => onDownloadInstructions(prompt.id)}
                    className="sm:w-auto"
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
          {/* What it is */}
          <section className="mb-12 md:mb-16 lg:mb-20">
            <div className="text-center mb-8 md:mb-12">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#343A40] mb-3 md:mb-4 px-4"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                What DevAlign Coach Does
              </h2>
              <p className="text-gray-600 text-base md:text-lg px-4 max-w-3xl mx-auto">
                An intelligent collaboration specialist tailored exclusively for software development teams
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 md:p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-8 h-8 text-[#007BFF] flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-[#343A40] mb-2 text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Personalized Coaching
                    </h4>
                    <p className="text-gray-700 text-sm md:text-base">
                      Get context-aware advice that understands your team size, remote/hybrid setup, tech stack, and specific pain points to deliver actionable guidance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white p-6 md:p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-8 h-8 text-[#28A745] flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-[#343A40] mb-2 text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Ready-to-Use Templates
                    </h4>
                    <p className="text-gray-700 text-sm md:text-base">
                      Access professional agendas, meeting frameworks, and communication templates designed specifically for software teams.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-white p-6 md:p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-8 h-8 text-[#FFC107] flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-[#343A40] mb-2 text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Role-Playing Practice
                    </h4>
                    <p className="text-gray-700 text-sm md:text-base">
                      Build confidence with interactive scenarios for difficult conversations, code reviews, and stakeholder communication.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-white p-6 md:p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-8 h-8 text-[#6F42C1] flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-[#343A40] mb-2 text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Measurement Frameworks
                    </h4>
                    <p className="text-gray-700 text-sm md:text-base">
                      Track team alignment and collaboration health with practical metrics that matter to software delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="border-t border-gray-200 mb-12 md:mb-16 lg:mb-20"></div>

          {/* Who it's for */}
          <section className="mb-12 md:mb-16 lg:mb-20">
            <div className="text-center mb-8 md:mb-12">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#343A40] mb-3 md:mb-4 px-4"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Perfect For
              </h2>
              <p className="text-gray-600 text-base md:text-lg px-4 max-w-3xl mx-auto">
                Anyone who ships software as part of a team
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Software Engineers',
                'Tech Leads',
                'Engineering Managers',
                'Scrum Masters',
                'DevOps Practitioners',
                'Pair Programmers'
              ].map((role, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-gradient-to-r from-[#007BFF]/5 to-[#28A745]/5 p-4 rounded-lg border border-gray-200">
                  <div className="w-8 h-8 bg-[#007BFF] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    ✓
                  </div>
                  <span className="font-medium text-[#343A40]">{role}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Divider */}
          <div className="border-t border-gray-200 mb-12 md:mb-16 lg:mb-20"></div>

          {/* What makes it different */}
          <section className="mb-12 md:mb-16 lg:mb-20">
            <div className="text-center mb-8 md:mb-12">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#343A40] mb-3 md:mb-4 px-4"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                What Makes DevAlign Different
              </h2>
              <p className="text-gray-600 text-base md:text-lg px-4 max-w-3xl mx-auto">
                Deep expertise meets practical, jargon-aware guidance
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white border-l-4 border-[#007BFF] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-[#343A40] mb-2 text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Software-First Approach
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Combines deep expertise in agile methodologies, team psychology, and hands-on software delivery—never generic leadership advice.
                </p>
              </div>

              <div className="bg-white border-l-4 border-[#28A745] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-[#343A40] mb-2 text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Outcome-Focused
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Every recommendation focuses on outcomes that matter: shipping software faster, happier teams, and reduced friction in collaboration.
                </p>
              </div>

              <div className="bg-white border-l-4 border-[#FFC107] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-[#343A40] mb-2 text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Practical & Actionable
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Real templates, scripts, and exercises you can use immediately—not theoretical frameworks that gather dust.
                </p>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="border-t border-gray-200 mb-12 md:mb-16 lg:mb-20"></div>

          {/* How to get the best out of it */}
          <section className="mb-12 md:mb-16 lg:mb-20">
            <div className="text-center mb-8 md:mb-12">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#343A40] mb-3 md:mb-4 px-4"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Usage Guidelines
              </h2>
              <p className="text-gray-600 text-base md:text-lg px-4 max-w-3xl mx-auto">
                Maximize your team's collaboration effectiveness
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 md:p-8 border border-gray-200">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#007BFF] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                    1
                  </div>
                  <p className="text-gray-700"><strong>Provide Rich Context:</strong> Share team size, remote/hybrid setup, tech stack, and specific pain points for targeted advice</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#28A745] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                    2
                  </div>
                  <p className="text-gray-700"><strong>Use Proactively:</strong> Prepare for important meetings, retrospectives, or difficult conversations before they happen</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#FFC107] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                    3
                  </div>
                  <p className="text-gray-700"><strong>Debrief After Events:</strong> Analyze what worked and what didn't to continuously improve team dynamics</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#DC3545] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                    4
                  </div>
                  <p className="text-gray-700"><strong>Reference Previous Conversations:</strong> Build ongoing coaching relationships by referencing past discussions</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#6F42C1] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                    5
                  </div>
                  <p className="text-gray-700"><strong>Experiment & Adapt:</strong> Try starter prompts, then customize them for your unique team culture and challenges</p>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="bg-gradient-to-r from-[#007BFF] to-[#28A745] rounded-xl md:rounded-2xl p-6 md:p-12 text-center text-white">
            <Rocket className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 text-white" />
            <h3
              className="text-2xl md:text-3xl font-bold mb-3 md:mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Start Building Stronger Teams Today
            </h3>
            <p className="text-base md:text-lg text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto">
              Navigate the interpersonal side of technical work with confidence. Ship software faster with happier, more aligned teams.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
              <button
                onClick={() => onDownload(prompt.id)}
                className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-white text-[#007BFF] rounded-lg font-bold transition-all duration-300 hover:shadow-2xl hover:scale-105 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#007BFF]/10 to-[#28A745]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                <Download className="w-4 h-4 md:w-5 md:h-5 relative z-10" />
                <span className="relative z-10 text-sm md:text-base">Try Free Now</span>
              </button>

              {onDownloadInstructions && (
                <DownloadInstructionsButton
                  onClick={() => onDownloadInstructions(prompt.id)}
                  className="w-full sm:w-auto"
                />
              )}
            </div>
          </section>
        </div>
      </div>
    );
  }

  if (prompt.id === '13') {
    // CodeCollab Coach - Clean custom page
    return <CodeCollabPage prompt={prompt} onDownload={onDownload} onDownloadInstructions={onDownloadInstructions} onBack={onBack} />;
  }

  // Comprehensive Python Learning Guardrail System page
  const roadmapStages = [
    {
      title: 'Basics',
      items: ['Syntax', 'Variables/Data Types', 'Conditionals', 'Loops', 'Type Casting', 'Exceptions', 'Functions', 'Lists/Tuples/Sets', 'Dictionaries']
    },
    {
      title: 'Data Structures & Algorithms',
      items: ['Arrays/Linked Lists', 'Heaps/Stacks/Queues', 'Hash Tables', 'Binary Search Trees', 'Recursion', 'Sorting Algorithms']
    },
    {
      title: 'Modules',
      items: ['Built-in Modules', 'Custom Modules']
    },
    {
      title: 'Programming Paradigms',
      items: ['Lambdas', 'Decorators', 'Iterators', 'Regular Expressions', 'Comprehensions', 'Generators', 'Context Managers']
    },
    {
      title: 'Object-Oriented Programming',
      items: ['Classes', 'Inheritance', '@dataclass', 'Encapsulation', 'Polymorphism', 'Abstraction']
    },
    {
      title: 'Concurrency',
      items: ['Multiprocessing', 'Asynchrony', 'GIL (Global Interpreter Lock)', 'Threading']
    },
    {
      title: 'Virtual Environments',
      items: ['Pipenv', 'virtualenv', 'pyenv']
    },
    {
      title: 'Static Typing',
      items: ['typing module', 'mypy', 'pyright', 'pyre', 'Pydantic']
    },
    {
      title: 'Code Formatting',
      items: ['yapf', 'black', 'ruff']
    },
    {
      title: 'Documentation',
      items: ['Sphinx']
    },
    {
      title: 'Testing',
      items: ['tox', 'nose', 'unittest', 'doctest', 'pytest']
    }
  ];

  const systemComponents = [
    {
      name: 'GEMINI.md',
      icon: <Code className="w-6 h-6" />,
      description: 'AI behavior rules, validation logic, and structural guidelines'
    },
    {
      name: 'Python_prompts_guardrail.md',
      icon: <BookOpen className="w-6 h-6" />,
      description: 'Complete curriculum with prompts, concepts, exercises, and evaluations'
    },
    {
      name: 'Python_Learning_Guardrail_Agent.md',
      icon: <Rocket className="w-6 h-6" />,
      description: 'Agent role definitions and scope constraints'
    },
    {
      name: '.gemini/ Directory',
      icon: <FolderTree className="w-6 h-6" />,
      description: 'State persistence with Notes/ and projects/ subdirectories'
    }
  ];

  const faqs = [
    {
      question: 'What makes this different from regular Python tutorials?',
      answer: 'Unlike passive tutorials, this system provides active learning with AI-powered validation, personalized feedback, and deliberate practice exercises. It adapts to your learning style while maintaining rigorous standards.'
    },
    {
      question: 'Do I need prior programming experience?',
      answer: 'No prior experience required! The system starts with fundamentals and progresses systematically. However, having basic computer literacy (file management, text editing) will be helpful.'
    },
    {
      question: 'How long does it take to complete?',
      answer: 'The comprehensive curriculum typically takes 4-6 months when dedicating 10-15 hours per week. The modular structure lets you progress at your own pace while ensuring mastery of each concept.'
    },
    {
      question: 'Which AI platforms does this work with?',
      answer: 'The system is optimized for Claude, ChatGPT, and Gemini. It works with any AI assistant that supports custom instructions and file uploads.'
    },
    {
      question: 'Can I customize the learning path?',
      answer: 'The curriculum follows a fixed structure for optimal learning progression. However, you can theme your projects around personal interests while still meeting the learning objectives for each prompt.'
    }
  ];

  const howItWorksSteps = [
    {
      icon: <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-[#007BFF]" />,
      title: 'Guided Teaching',
      description: 'The AI teaches each concept with clear explanations, examples, and context before practice.'
    },
    {
      icon: <Code className="w-8 h-8 md:w-10 md:h-10 text-[#28A745]" />,
      title: 'Hands-On Practice',
      description: 'Complete coding exercises and mini-projects that reinforce each concept immediately.'
    },
    {
      icon: <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-[#FFC107]" />,
      title: 'Smart Validation',
      description: 'AI validates your code against learning objectives and provides constructive feedback.'
    },
    {
      icon: <Rocket className="w-8 h-8 md:w-10 md:h-10 text-[#007BFF]" />,
      title: 'Progressive Mastery',
      description: 'Only advance when concepts are mastered, building a solid foundation for complex topics.'
    },
    {
      icon: <FolderTree className="w-8 h-8 md:w-10 md:h-10 text-[#28A745]" />,
      title: 'State Tracking',
      description: 'Your progress, notes, and projects are automatically saved and organized.'
    },
    {
      icon: <Lightbulb className="w-8 h-8 md:w-10 md:h-10 text-[#FFC107]" />,
      title: 'Adaptive Learning',
      description: 'The system adjusts explanations based on your questions and understanding level.'
    }
  ];

  const setupSteps = [
    {
      number: 1,
      title: 'Download & Extract',
      description: 'Download the system files and extract them to your preferred location.'
    },
    {
      number: 2,
      title: 'Upload to AI Assistant',
      description: 'Upload all files to your preferred AI assistant (Claude, ChatGPT, or Gemini).'
    },
    {
      number: 3,
      title: 'Set Up Environment',
      description: 'Install Python, VSCode, and create your .gemini/ directory for state persistence.'
    },
    {
      number: 4,
      title: 'Start Learning',
      description: 'Begin with "Let\'s start with Prompt 1" and follow the AI\'s structured guidance.'
    }
  ];

  const bestPractices = [
    'Code along actively - type every example yourself rather than copy-pasting',
    'Review Notes/ regularly to reinforce concepts and track your progress',
    'Complete all exercises before moving to the next prompt',
    'Ask clarifying questions when concepts are unclear',
    'Build real projects/ to apply multiple concepts together',
    'Use the AI\'s validation to understand mistakes and correct misconceptions',
    'Take breaks between prompts to let concepts solidify',
    'Revisit earlier topics when building on foundational concepts'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#007BFF] to-[#28A745] text-white py-12 md:py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <a
            href="#browse"
            onClick={(e) => {
              e.preventDefault();
              onBack();
            }}
            className="inline-flex items-center gap-2 text-white hover:text-white/90 transition-colors mb-6 md:mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm md:text-base font-medium">Back to Browse</span>
          </a>

          <div className="text-center max-w-5xl mx-auto">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white leading-tight"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Comprehensive Python Learning Guardrail System
            </h1>
            <p
              className="text-base sm:text-lg md:text-xl text-white/95 mb-3 md:mb-4"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Master Python from Zero to Production-Ready with AI-Powered Guardrails
            </p>
            <p className="text-sm sm:text-base md:text-lg text-white/85 mb-6 md:mb-8 max-w-4xl mx-auto">
              A complete, structured learning system that combines expert curriculum design with AI validation to ensure you master Python fundamentals through advanced concepts.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
              <button
                onClick={() => onDownload(prompt.id)}
                className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-white text-[#007BFF] rounded-lg font-bold transition-all duration-300 hover:shadow-2xl hover:scale-105 overflow-hidden"
              >
                <Download className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base">Start Learning Free</span>
              </button>

              {onDownloadInstructions && (
                <DownloadInstructionsButton
                  onClick={() => onDownloadInstructions(prompt.id)}
                  className="w-full sm:w-auto"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        {/* Learning Roadmap */}
        <section className="mb-16 md:mb-20">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#343A40] mb-8 md:mb-12 text-center"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Your Python Learning Roadmap
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200">
            <img
              src={pythonRoadmap}
              alt="Python Learning Roadmap"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-12 md:mb-16 lg:mb-20"></div>

        {/* System Components Section */}
        <section className="mb-12 md:mb-16 lg:mb-20">
          <div className="text-center mb-8 md:mb-12">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#343A40] mb-3 md:mb-4 px-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              System Components
            </h2>
            <p className="text-gray-600 text-base md:text-lg px-4">
              Key files and structure powering your learning experience
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
            {systemComponents.map((component, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#007BFF]/10 rounded-lg flex items-center justify-center flex-shrink-0 text-[#007BFF]">
                    {component.icon}
                  </div>
                  <div className="flex-1">
                    <h3
                      className="font-bold text-[#343A40] mb-2 text-base md:text-lg"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {component.name}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                      {component.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-12 md:mb-16 lg:mb-20"></div>

        {/* How It Works Section */}
        <section className="mb-12 md:mb-16 lg:mb-20">
          <div className="text-center mb-8 md:mb-12">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#343A40] mb-3 md:mb-4 px-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              How It Works
            </h2>
            <p className="text-gray-600 text-base md:text-lg px-4">
              A powerful, stateful learning system designed for mastery
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            {howItWorksSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 hover:shadow-lg transition-all"
              >
                <div className="mb-3 md:mb-4">{step.icon}</div>
                <h3
                  className="font-bold text-[#343A40] mb-2 text-base md:text-lg"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {step.title}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Learning Flow */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl md:rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3
              className="font-bold text-[#343A40] mb-6 text-lg md:text-xl text-center"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Learning Flow
            </h3>
            {/* Desktop Flow */}
            <div className="hidden md:flex flex-wrap items-center justify-center gap-4 text-center">
              <div className="flex items-center gap-4">
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <BookOpen className="w-8 h-8 text-[#007BFF] mx-auto mb-2" />
                  <p className="font-semibold text-sm text-[#343A40]">Teach</p>
                </div>
                <div className="text-2xl text-[#28A745]">→</div>
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <Code className="w-8 h-8 text-[#28A745] mx-auto mb-2" />
                  <p className="font-semibold text-sm text-[#343A40]">Practice</p>
                </div>
                <div className="text-2xl text-[#28A745]">→</div>
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <CheckCircle className="w-8 h-8 text-[#FFC107] mx-auto mb-2" />
                  <p className="font-semibold text-sm text-[#343A40]">Validate</p>
                </div>
                <div className="text-2xl text-[#28A745]">→</div>
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <Rocket className="w-8 h-8 text-[#007BFF] mx-auto mb-2" />
                  <p className="font-semibold text-sm text-[#343A40]">Advance</p>
                </div>
              </div>
            </div>
            {/* Mobile Flow - Stacked */}
            <div className="md:hidden flex flex-col items-center gap-3">
              <div className="bg-white rounded-lg p-4 shadow-md w-full max-w-[200px]">
                <BookOpen className="w-8 h-8 text-[#007BFF] mx-auto mb-2" />
                <p className="font-semibold text-sm text-[#343A40] text-center">Teach</p>
              </div>
              <div className="text-2xl text-[#28A745]">↓</div>
              <div className="bg-white rounded-lg p-4 shadow-md w-full max-w-[200px]">
                <Code className="w-8 h-8 text-[#28A745] mx-auto mb-2" />
                <p className="font-semibold text-sm text-[#343A40] text-center">Practice</p>
              </div>
              <div className="text-2xl text-[#28A745]">↓</div>
              <div className="bg-white rounded-lg p-4 shadow-md w-full max-w-[200px]">
                <CheckCircle className="w-8 h-8 text-[#FFC107] mx-auto mb-2" />
                <p className="font-semibold text-sm text-[#343A40] text-center">Validate</p>
              </div>
              <div className="text-2xl text-[#28A745]">↓</div>
              <div className="bg-white rounded-lg p-4 shadow-md w-full max-w-[200px]">
                <Rocket className="w-8 h-8 text-[#007BFF] mx-auto mb-2" />
                <p className="font-semibold text-sm text-[#343A40] text-center">Advance</p>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-12 md:mb-16 lg:mb-20"></div>

        {/* Setup and Usage Section */}
        <section className="mb-12 md:mb-16 lg:mb-20">
          <div className="text-center mb-8 md:mb-12">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#343A40] mb-3 md:mb-4 px-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Setup & Usage
            </h2>
            <p className="text-gray-600 text-base md:text-lg px-4">
              Get started in minutes with these simple steps
            </p>
          </div>

          <div className="space-y-4 md:space-y-6">
            {setupSteps.map((step) => (
              <div
                key={step.number}
                className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#007BFF] text-white rounded-full flex items-center justify-center font-bold text-lg md:text-xl flex-shrink-0">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3
                      className="font-bold text-[#343A40] mb-2 text-base md:text-lg"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {step.description}
                    </p>
                  </div>
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#28A745] flex-shrink-0 mt-1 hidden sm:block" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 md:mt-8 p-4 md:p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-200 flex flex-col sm:flex-row items-start gap-3 md:gap-4">
            <Terminal className="w-6 h-6 text-[#007BFF] flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h4 className="font-bold text-[#343A40] mb-2 text-base md:text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Running Your Code
              </h4>
              <p className="text-gray-700 mb-2 text-sm md:text-base">
                Use the integrated terminal in VSCode to run your Python files:
              </p>
              <code className="bg-white px-3 py-2 rounded border border-gray-300 inline-block text-xs md:text-sm font-mono">
                python main.py
              </code>
              <p className="text-gray-600 text-xs md:text-sm mt-2">\n                Install dependencies as needed using pip throughout your learning journey.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-12 md:mb-16 lg:mb-20"></div>

        {/* Best Practices Section */}
        <section className="mb-12 md:mb-16 lg:mb-20">
          <div className="text-center mb-8 md:mb-12">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#343A40] mb-3 md:mb-4 px-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Best Practices
            </h2>
            <p className="text-gray-600 text-base md:text-lg px-4">
              Maximize your learning effectiveness
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl md:rounded-2xl p-6 md:p-8 border border-gray-200">
            <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
              {bestPractices.map((practice, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#28A745] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Lightbulb className="w-3 h-3 md:w-4 md:h-4" />
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">{practice}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-12 md:mb-16 lg:mb-20"></div>

        {/* FAQ Section */}
        <section className="mb-12 md:mb-16 lg:mb-20">
          <div className="text-center mb-8 md:mb-12">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#343A40] mb-3 md:mb-4 px-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-base md:text-lg px-4">
              Everything you need to know
            </p>
          </div>

          <div className="space-y-3 md:space-y-4 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-4 md:px-6 py-3 md:py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <h3
                    className="font-semibold text-[#343A40] pr-4 text-sm md:text-base"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {faq.question}
                  </h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-4 h-4 md:w-5 md:h-5 text-[#007BFF] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-4 md:px-6 pb-3 md:pb-4 text-gray-600 leading-relaxed border-t border-gray-100 pt-3 md:pt-4 text-sm md:text-base">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-gradient-to-r from-[#007BFF] to-[#28A745] rounded-xl md:rounded-2xl p-6 md:p-12 text-center text-white">
          <Rocket className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 text-white" />
          <h3
            className="text-2xl md:text-3xl font-bold mb-3 md:mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Ready to Master Python?
          </h3>
          <p className="text-white/90 mb-2 text-base md:text-lg max-w-2xl mx-auto px-4">
            Start your structured learning journey today with the Python Learning Guardrail System.
          </p>
          <p className="text-white/80 mb-6 md:mb-8 text-xs md:text-sm px-4">
            Support available through Gemini chat or repository issues. Happy learning! 🚀
          </p>
          <button
            onClick={() => onDownload(prompt.id)}
            className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-white text-[#007BFF] rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all text-sm md:text-base"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
          >
            <Download className="w-4 h-4 md:w-5 md:h-5 mr-2" />
            Download Now • $2
          </button>
        </section>
      </div>
    </div>
  );
}