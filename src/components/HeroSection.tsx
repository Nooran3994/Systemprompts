import React from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onBrowseClick: () => void;
}

export function HeroSection({ onBrowseClick }: HeroSectionProps) {
  return (
    <section className="relative pt-24 md:pt-32 pb-20 md:pb-32 gradient-blue-green overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          {/* Main Heading */}
          <h1 className="text-white mb-6 px-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Empower Your AI with Professional System Prompts
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-white/90 mb-4 max-w-3xl mx-auto px-4">
            Unlock AI Potential with Expert System Prompts
          </p>

          {/* Subheading */}
          <p className="text-base md:text-lg text-white/80 mb-10 max-w-3xl mx-auto px-4">
            Discover, Download, and Deploy Ready-Made Prompts for Learning, Agents, Social Media, and More
          </p>

          {/* CTA Button */}
          <button
            onClick={onBrowseClick}
            className="inline-flex items-center px-8 py-4 bg-white text-[#007BFF] rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
            aria-label="Browse available prompts"
          >
            Browse Prompts
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>

          {/* Down Arrow Animation */}
          <div className="mt-16 animate-bounce-slow">
            <ChevronDown className="w-8 h-8 text-white/60 mx-auto" />
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
