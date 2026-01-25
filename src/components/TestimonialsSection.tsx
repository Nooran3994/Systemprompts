import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'AI Developer',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      quote: 'This learning system prompt transformed my AI tutor app! The structured approach saved me weeks of development time.',
      rating: 5
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      role: 'Startup Founder',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      quote: 'The agent prompts are incredibly well-designed. They helped us build a customer service bot that actually understands context.',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Watson',
      role: 'Content Strategist',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      quote: 'SystemPrompts.com is a game-changer for social media automation. The quality and documentation are outstanding!',
      rating: 5
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Machine Learning Engineer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      quote: 'Finally, a marketplace for professional-grade system prompts. The customization options are exactly what we needed.',
      rating: 5
    }
  ];

  return (
    <motion.section 
      className="py-16 md:py-24 bg-[#E5E7EB]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-[#343A40] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join thousands of developers and businesses building better AI solutions
          </p>
        </motion.div>

        {/* Testimonials Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto">
          {/* Card 1 - Sarah Chen - Large left card */}
          <motion.div
            className="md:col-span-5 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            style={{ minHeight: '320px' }}
            initial={{ opacity: 0, x: -40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute top-6 left-6 text-6xl text-[#007BFF] opacity-20 leading-none" style={{ fontFamily: 'Georgia, serif' }}>
              "
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              <p className="text-gray-700 italic leading-relaxed mb-6 mt-8">
                "{testimonials[0].quote}"
              </p>
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[0].rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-[#FFC107]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <div className="flex items-center mt-auto">
                <img
                  src={testimonials[0].avatar}
                  alt={testimonials[0].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-gray-100"
                />
                <div className="ml-4">
                  <h4
                    className="text-[#343A40] font-semibold mb-1"
                    style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px' }}
                  >
                    {testimonials[0].name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonials[0].role}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Marcus Rodriguez - Top right card */}
          <motion.div
            className="md:col-span-7 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            style={{ minHeight: '240px' }}
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-start gap-6">
              <img
                src={testimonials[1].avatar}
                alt={testimonials[1].name}
                className="w-20 h-20 rounded-full object-cover border-2 border-gray-100 flex-shrink-0"
              />
              <div className="flex-1">
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonials[1].rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-[#FFC107]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic leading-relaxed mb-4">
                  "{testimonials[1].quote}"
                </p>
                <div>
                  <h4
                    className="text-[#343A40] font-semibold mb-1"
                    style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px' }}
                  >
                    {testimonials[1].name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonials[1].role}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3 - Emily Watson - Bottom right card */}
          <motion.div
            className="md:col-span-7 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            style={{ minHeight: '260px' }}
            initial={{ opacity: 0, y: 40, rotate: -1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute top-6 right-6 text-6xl text-[#FFC107] opacity-10 leading-none" style={{ fontFamily: 'Georgia, serif' }}>
              "
            </div>
            
            <div className="relative z-10">
              <p className="text-gray-700 italic leading-relaxed mb-6">
                "{testimonials[2].quote}"
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={testimonials[2].avatar}
                    alt={testimonials[2].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-gray-100"
                  />
                  <div className="ml-4">
                    <h4
                      className="text-[#343A40] font-semibold mb-1"
                      style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px' }}
                    >
                      {testimonials[2].name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonials[2].role}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4 - David Kim - Bottom left card */}
          <motion.div
            className="md:col-span-5 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            style={{ minHeight: '280px' }}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-center flex flex-col items-center h-full">
              <img
                src={testimonials[3].avatar}
                alt={testimonials[3].name}
                className="w-20 h-20 rounded-full object-cover border-2 border-gray-100 mb-4"
              />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[3].rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-[#FFC107]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 italic leading-relaxed mb-4">
                "{testimonials[3].quote}"
              </p>

              <div className="mt-auto">
                <h4
                  className="text-[#343A40] font-semibold mb-1"
                  style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px' }}
                >
                  {testimonials[3].name}
                </h4>
                <p className="text-sm text-gray-600">{testimonials[3].role}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}