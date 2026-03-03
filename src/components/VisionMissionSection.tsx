import React from 'react';
import { Zap, Settings, Rocket, Download } from 'lucide-react';
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

        {/* Download vs Free Access Section */}
        <motion.div 
          className="mt-12 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-xl p-8 md:p-12 border border-indigo-100"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#007BFF] to-[#28A745] mb-4">
              <Download className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-[#343A40] mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Free Access vs. Download Instructions
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Experience our systems for free on Gemini, or download the instructions for complete ownership and flexibility
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Free Access */}
            <div className="bg-white rounded-lg p-6 border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-[#28A745]" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Free Access on Gemini
                </h4>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#28A745] mt-1">✓</span>
                  <span>Try systems instantly without payment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#28A745] mt-1">✓</span>
                  <span>Pre-configured for optimal performance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">⚠</span>
                  <span>Instructions may be updated over time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">⚠</span>
                  <span>Limited to Gemini platform only</span>
                </li>
              </ul>
            </div>

            {/* Download Instructions */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border-2 border-[#007BFF]">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Download className="w-5 h-5 text-[#007BFF]" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Download Instructions
                </h4>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#007BFF] mt-1 font-bold">✓</span>
                  <span className="font-medium">Full ownership of .md instruction files</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007BFF] mt-1 font-bold">✓</span>
                  <span className="font-medium">Use with ANY AI model (ChatGPT, Claude, Grok, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007BFF] mt-1 font-bold">✓</span>
                  <span className="font-medium">Deploy in custom projects & workflows</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007BFF] mt-1 font-bold">✓</span>
                  <span className="font-medium">Stable version that won't change</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007BFF] mt-1 font-bold">✓</span>
                  <span className="font-medium">Access to updated versions as they release</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-indigo-200">
                <p className="text-sm text-gray-600 text-center">
                  💎 Perfect for developers building production systems
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-700 font-medium text-lg">
              Get exact results across all major AI platforms. Download once, deploy everywhere.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}