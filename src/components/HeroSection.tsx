import React from 'react';

interface HeroSectionProps {
  onBrowseClick: () => void;
}

export function HeroSection({ onBrowseClick }: HeroSectionProps) {
  return (
    <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 gradient-blue-green overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Decorative Element - Star/Burst */}
      <div className="absolute top-20 left-8 md:left-20 w-16 h-16 md:w-24 md:h-24 opacity-80">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 0L52 48H50L48 48L50 0Z" fill="#28A745"/>
          <path d="M50 100L52 52H50L48 52L50 100Z" fill="#28A745"/>
          <path d="M0 50L48 52V50V48L0 50Z" fill="#28A745"/>
          <path d="M100 50L52 52V50V48L100 50Z" fill="#28A745"/>
          <path d="M14.64 14.64L48.59 48.59L50 50L51.41 48.59L14.64 14.64Z" fill="#28A745"/>
          <path d="M85.36 85.36L51.41 51.41L50 50L48.59 51.41L85.36 85.36Z" fill="#28A745"/>
          <path d="M85.36 14.64L51.41 48.59L50 50L48.59 48.59L85.36 14.64Z" fill="#28A745"/>
          <path d="M14.64 85.36L48.59 51.41L50 50L51.41 51.41L14.64 85.36Z" fill="#28A745"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 md:p-12 lg:p-16">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center md:text-left">
              {/* Decorative Small Star */}
              <div className="mb-6 inline-block">
                <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 0L52 48H50L48 48L50 0Z" fill="#FFC107"/>
                  <path d="M50 100L52 52H50L48 52L50 100Z" fill="#FFC107"/>
                  <path d="M0 50L48 52V50V48L0 50Z" fill="#FFC107"/>
                  <path d="M100 50L52 52V50V48L100 50Z" fill="#FFC107"/>
                  <path d="M14.64 14.64L48.59 48.59L50 50L51.41 48.59L14.64 14.64Z" fill="#FFC107"/>
                  <path d="M85.36 85.36L51.41 51.41L50 50L48.59 51.41L85.36 85.36Z" fill="#FFC107"/>
                  <path d="M85.36 14.64L51.41 48.59L50 50L48.59 48.59L85.36 14.64Z" fill="#FFC107"/>
                  <path d="M14.64 85.36L48.59 51.41L50 50L51.41 51.41L14.64 85.36Z" fill="#FFC107"/>
                </svg>
              </div>

              {/* Main Heading */}
              <h1 className="text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Empower Your AI with Professional System Prompts
              </h1>

              {/* Tagline */}
              <p className="text-lg md:text-xl text-white/90 mb-4">
                Unlock AI Potential with Expert System Prompts
              </p>

              {/* Subheading */}
              <p className="text-base md:text-lg text-white/80 mb-10">
                Discover, Download, and Deploy Ready-Made Prompts for Learning, Agents, Social Media, and More
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button
                  onClick={onBrowseClick}
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-[#007BFF] rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                  aria-label="Browse available prompts"
                >
                  Browse Prompts
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Column - Image with Badge */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm p-4">
                <img 
                  src="https://images.unsplash.com/photo-1769069919748-0706d1556c0c?w=800&q=80"
                  alt="Professional working with AI technology"
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16 pt-12 md:pt-16 border-t border-white/20">
            <div className="text-center">
              <p className="text-3xl md:text-4xl mb-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#FFFFFF' }}>5+</p>
              <p className="text-sm md:text-base text-white/80">Categories</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl mb-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#FFFFFF' }}>800+</p>
              <p className="text-sm md:text-base text-white/80">Happy Users</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl mb-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#FFFFFF' }}>50K+</p>
              <p className="text-sm md:text-base text-white/80">Downloads</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}