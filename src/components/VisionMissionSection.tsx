import React from 'react';
import { Zap, Settings, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

export function VisionMissionSection() {
  const features = [
    {
      icon: Zap,
      title: 'The Power of System Prompts',
      description: 'System prompts are the backbone of AI interactions—structured instructions that guide models to perform tasks efficiently and accurately.',
      color: '#FFC107'
    },
    {
      icon: Settings,
      title: 'Key Advantages',
      description: 'Save time with pre-built solutions, boost accuracy with tested prompts, and customize them for any AI tool or workflow you use.',
      color: '#007BFF'
    },
    {
      icon: Rocket,
      title: 'Our Mission',
      description: 'Provide high-quality, tested system prompts to democratize AI development and empower creators, developers, and businesses worldwide.',
      color: '#28A745'
    }
  ];

  return (
    <motion.section 
      id="why-prompts" 
      className="py-16 md:py-24 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="text-[#343A40] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Why System Prompts Matter
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transform your AI applications with expertly crafted system prompts designed for performance and reliability
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="group bg-[#F8F9FA] rounded-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.1 + (index * 0.15),
                  ease: "easeOut"
                }}
              >
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${feature.color}20` }}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.3 + (index * 0.15),
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  <Icon className="w-8 h-8" style={{ color: feature.color }} />
                </motion.div>

                {/* Title */}
                <h3 className="text-[#343A40] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div 
          className="mt-16 text-center bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8 md:p-12"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h3 className="text-[#343A40] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Join Thousands of Developers
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From AI tutors to social media agents, our system prompts power applications across industries. Start building smarter AI solutions today.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}