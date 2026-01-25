import React from 'react';
import { ArrowLeft, Download, CheckCircle, FileText } from 'lucide-react';
import { PromptCardData } from './PromptCard';

interface DetailPageProps {
  prompt: PromptCardData | null;
  onBack: () => void;
  onDownload: (id: string) => void;
}

export function DetailPage({ prompt, onBack, onDownload }: DetailPageProps) {
  if (!prompt) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Prompt not found</p>
      </div>
    );
  }

  const features = [
    'Comprehensive system instructions',
    'Pre-validated and tested prompts',
    'Easy integration with any AI model',
    'Regular updates and improvements',
    'Full documentation included',
    'Commercial usage license'
  ];

  const files = [
    { name: 'system-prompt.txt', size: '4.2 KB', description: 'Main system prompt file' },
    { name: 'configuration.json', size: '1.8 KB', description: 'Configuration settings' },
    { name: 'README.md', size: '8.5 KB', description: 'Complete documentation' },
    { name: 'examples.txt', size: '6.1 KB', description: 'Usage examples' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#007BFF] to-[#28A745] text-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <a
            href="#browse"
            onClick={onBack}
            className="inline-flex items-center text-white/90 hover:text-white mb-8 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Browse
          </a>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left - Info */}
            <div>
              <div
                className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-4"
              >
                {prompt.category}
              </div>
              <h1
                className="text-white mb-6"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {prompt.title}
              </h1>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                {prompt.description}
              </p>
              <button
                onClick={() => onDownload(prompt.id)}
                className="inline-flex items-center px-8 py-4 bg-white text-[#007BFF] rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Now {prompt.price && `• ${prompt.price}`}
              </button>
            </div>

            {/* Right - Image */}
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                src={prompt.thumbnail}
                alt={prompt.title}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Features */}
        <section className="mb-16">
          <h2
            className="text-[#343A40] mb-8"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            What's Included
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#28A745] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Usage Documentation */}
        <section className="mb-16">
          <h2
            className="text-[#343A40] mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Usage & Documentation
          </h2>
          <div className="bg-[#F8F9FA] rounded-xl p-8">
            <h3
              className="text-[#343A40] mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '20px' }}
            >
              How to Use
            </h3>
            <ol className="space-y-4 text-gray-700">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-[#007BFF] text-white rounded-full flex items-center justify-center font-semibold">
                  1
                </span>
                <div>
                  <strong>Download the package:</strong> After purchase, you'll receive a secure download link 
                  containing all files.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-[#007BFF] text-white rounded-full flex items-center justify-center font-semibold">
                  2
                </span>
                <div>
                  <strong>Review the documentation:</strong> Read the README.md file for complete setup 
                  instructions and best practices.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-[#007BFF] text-white rounded-full flex items-center justify-center font-semibold">
                  3
                </span>
                <div>
                  <strong>Integrate with your AI:</strong> Copy the system prompt into your AI application's 
                  configuration or API calls.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-[#007BFF] text-white rounded-full flex items-center justify-center font-semibold">
                  4
                </span>
                <div>
                  <strong>Customize as needed:</strong> Adjust parameters and settings based on your 
                  specific requirements.
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* Files List */}
        <section className="mb-16">
          <h2
            className="text-[#343A40] mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Included Files
          </h2>
          <div className="space-y-3">
            {files.map((file, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-[#007BFF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-[#007BFF]" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-[#343A40]">{file.name}</h4>
                  <p className="text-sm text-gray-600">{file.description}</p>
                </div>
                <div className="text-sm text-gray-500">{file.size}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 md:p-12 text-center">
          <h3
            className="text-[#343A40] mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Ready to Get Started?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Download this system prompt and start building better AI applications today.
          </p>
          <button
            onClick={() => onDownload(prompt.id)}
            className="inline-flex items-center px-8 py-4 bg-[#007BFF] text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
          >
            <Download className="w-5 h-5 mr-2" />
            Download Now {prompt.price && `• ${prompt.price}`}
          </button>
        </section>
      </div>
    </div>
  );
}