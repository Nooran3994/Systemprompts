import React from 'react';
import { motion } from 'framer-motion';

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
        <div className="py-6 md:py-8">
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
            {/* Left Column - Text Content */}
            <motion.div 
              className="text-center md:text-left"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Main Heading */}
              <h1 className="text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', lineHeight: '1.2' }}>
                Expert System Prompts for Your AI
              </h1>

              {/* Subheading */}
              <p className="text-base md:text-lg text-white/85 mb-6">
                Ready-made prompts for Learning, Agents, Social Media & More
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start mb-6">
                <motion.button
                  onClick={onBrowseClick}
                  className="inline-flex items-center justify-center px-7 py-3 bg-white text-[#007BFF] rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                  aria-label="Browse available prompts"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Browse Prompts
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>

              {/* Quick Stats - Inline */}
              <div className="flex gap-6 justify-center md:justify-start text-white/90">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#FFC107] rounded-full"></div>
                  <span className="text-sm font-medium">5+ Categories</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#28A745] rounded-full"></div>
                  <span className="text-sm font-medium">800+ Users</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Interactive Image Card */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Hero Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1629787155650-9ce3697dcb38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3klMjB3b3Jrc3BhY2UlMjBjb2RpbmclMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzcwODQwMDE5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="AI Technology"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}