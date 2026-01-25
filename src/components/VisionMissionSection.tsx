import React from 'react';
import { Zap, Settings, Rocket } from 'lucide-react';

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
    <section id="why-prompts" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[#343A40] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Why System Prompts Matter
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transform your AI applications with expertly crafted system prompts designed for performance and reliability
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-[#F8F9FA] rounded-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  <Icon className="w-8 h-8" style={{ color: feature.color }} />
                </div>

                {/* Title */}
                <h3 className="text-[#343A40] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8 md:p-12">
          <h3 className="text-[#343A40] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Join Thousands of Developers
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From AI tutors to social media agents, our system prompts power applications across industries. Start building smarter AI solutions today.
          </p>
        </div>
      </div>
    </section>
  );
}