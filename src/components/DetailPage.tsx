import React, { useState } from 'react';
import { ArrowLeft, Download, CheckCircle, FileText, Code, Lightbulb, Rocket, BookOpen, FolderTree, GitBranch, Play, Terminal, ChevronDown, ChevronUp } from 'lucide-react';
import { PromptCardData } from './PromptCard';
import pythonRoadmap from 'figma:asset/bec09281486d709b585555bb617316a95cad5032.png';

interface DetailPageProps {
  prompt: PromptCardData | null;
  onBack: () => void;
  onDownload: (id: string) => void;
}

export function DetailPage({ prompt, onBack, onDownload }: DetailPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!prompt) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Prompt not found</p>
      </div>
    );
  }

  // Show the comprehensive page only for Python Learning Guardrail System
  if (prompt.id !== '1') {
    // Default view for other prompts
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
                  Download Now • {prompt.price}
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
      items: ['Classes', 'Inheritance', 'Methods', 'Dunder Methods']
    },
    {
      title: 'Package Managers',
      items: ['PyPI', 'Pip', 'Conda', 'Poetry', 'uv', 'Common Packages', 'pyproject.toml']
    },
    {
      title: 'Frameworks',
      items: ['Sync: Pyramid, Dash', 'Async: gevent, aiohttp, Tornado, Sanic', 'Both: FastAPI, Django, Flask']
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

  const howItWorksSteps = [
    {
      title: 'Stateful Progress',
      description: 'Your learning progress is saved in .gemini/ directory. Resume exactly where you left off.',
      icon: <CheckCircle className="w-8 h-8 text-[#28A745]" />
    },
    {
      title: 'Multi-Turn Interactions',
      description: '10-15+ interactions per topic covering sub-concepts, code examples, error handling, and real applications.',
      icon: <GitBranch className="w-8 h-8 text-[#007BFF]" />
    },
    {
      title: 'Validation System',
      description: 'Say "Proceed" to trigger a 5-step mastery check. Must demonstrate understanding before advancing.',
      icon: <CheckCircle className="w-8 h-8 text-[#28A745]" />
    },
    {
      title: 'Evolving Project',
      description: 'Build and enhance main.py throughout the course, applying learned concepts in practice.',
      icon: <Code className="w-8 h-8 text-[#FFC107]" />
    },
    {
      title: 'Focused Learning',
      description: 'AI redirects off-topic questions and defers future topics to maintain structured progression.',
      icon: <Lightbulb className="w-8 h-8 text-[#007BFF]" />
    }
  ];

  const setupSteps = [
    {
      number: 1,
      title: 'Download & Extract',
      description: 'Download the ZIP file from the website link and extract it to your preferred location.'
    },
    {
      number: 2,
      title: 'Install Gemini Extension',
      description: 'In VSCode, search for and install the Gemini extension. Configure it with your API key.'
    },
    {
      number: 3,
      title: 'Initialize the System',
      description: 'Open GEMINI.md and chat: "Initialize Python Learning Guardrail from GEMINI.md". The AI will set everything up.'
    },
    {
      number: 4,
      title: 'Start Learning',
      description: 'Begin the course by selecting your first prompt. Engage with the AI, practice coding, and use "Proceed" to validate.'
    },
    {
      number: 5,
      title: 'Run Your Code',
      description: 'Use the terminal to run "python main.py" and install dependencies as needed throughout your journey.'
    }
  ];

  const bestPractices = [
    'Experiment freely in practice.py before integrating into main.py',
    'Reflect on concepts during chats - ask "why" and "how" questions',
    'Troubleshoot errors within scope before asking the AI for help',
    'Complete validation checks honestly to ensure true mastery',
    'Build incrementally - don\'t skip ahead without solid foundations'
  ];

  const faqs = [
    {
      question: 'Why use VSCode with Gemini?',
      answer: 'The integrated environment allows you to edit code and chat with the AI simultaneously, providing real-time guidance while you code. This creates a seamless learning experience where theory and practice happen side-by-side.'
    },
    {
      question: 'Can I skip prompts if I already know a topic?',
      answer: 'Yes, it\'s possible to skip ahead, though not recommended. The curriculum builds progressively, and each prompt includes validation checks to ensure mastery. Skipping may leave gaps in your knowledge.'
    },
    {
      question: 'Where is my progress saved?',
      answer: 'All progress is saved in the .gemini/ directory, including your notes, completed prompts, and project files. This allows you to resume your learning journey at any time without losing context.'
    },
    {
      question: 'Can I customize the curriculum or projects?',
      answer: 'The curriculum follows a fixed structure for optimal learning progression. However, you can theme your projects around personal interests while still meeting the learning objectives for each prompt.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#007BFF] to-[#28A745] text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <a
            href="#browse"
            onClick={onBack}
            className="inline-flex items-center text-white/90 hover:text-white mb-8 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Browse
          </a>

          <div className="text-center max-w-4xl mx-auto">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Python Learning Guardrail System
            </h1>
            <p
              className="text-xl md:text-2xl text-white/95 mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
            >
              A Structured AI-Powered Platform for Mastering Python from Beginner to Pro
            </p>
            <p className="text-white/90 text-lg leading-relaxed max-w-3xl mx-auto">
              An AI platform guiding users through a comprehensive roadmap with interactive prompts, hands-on projects, 
              and rigorous validation. Powered by GEMINI.md and Python_prompts_guardrail.md for a stateful, 
              personalized learning experience.
            </p>
            <div className="mt-8">
              <button
                onClick={() => onDownload(prompt.id)}
                className="inline-flex items-center px-8 py-4 bg-white text-[#007BFF] rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Now • $2
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Roadmap Overview Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#343A40] mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Comprehensive Learning Roadmap
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Follow a carefully structured path from Python basics to advanced professional concepts, 
              covering everything you need to become a proficient Python developer.
            </p>
          </div>

          {/* Roadmap Image */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-100">
            <video
              src="https://i.imgur.com/vw2DYIH.mp4"
              className="w-full h-auto"
              controls
              loop
              muted
              autoPlay
              playsInline
            />
          </div>

          {/* Roadmap Stages Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roadmapStages.map((stage, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#007BFF] text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <h3
                    className="font-bold text-[#343A40] text-lg"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {stage.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {stage.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="text-[#28A745] mt-1">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-blue-50 border-l-4 border-[#007BFF] rounded-r-lg">
            <p className="text-gray-700">
              <strong className="text-[#007BFF]">Note:</strong> This roadmap aligns with Beginner, Intermediate, 
              and Advanced learning stages, ensuring a smooth progression through Python mastery.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-20"></div>

        {/* System Components Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#343A40] mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              System Components
            </h2>
            <p className="text-gray-600 text-lg">
              Key files and structure powering your learning experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {systemComponents.map((component, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#007BFF]/10 rounded-lg flex items-center justify-center flex-shrink-0 text-[#007BFF]">
                    {component.icon}
                  </div>
                  <div className="flex-1">
                    <h3
                      className="font-bold text-[#343A40] mb-2 text-lg"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {component.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {component.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-20"></div>

        {/* How It Works Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#343A40] mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              How It Works
            </h2>
            <p className="text-gray-600 text-lg">
              A powerful, stateful learning system designed for mastery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {howItWorksSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <div className="mb-4">{step.icon}</div>
                <h3
                  className="font-bold text-[#343A40] mb-2"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Learning Flow */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 border border-gray-200">
            <h3
              className="font-bold text-[#343A40] mb-6 text-xl text-center"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Learning Flow
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-4 text-center">
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
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-20"></div>

        {/* Setup and Usage Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#343A40] mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Setup & Usage
            </h2>
            <p className="text-gray-600 text-lg">
              Get started in minutes with these simple steps
            </p>
          </div>

          <div className="space-y-6">
            {setupSteps.map((step) => (
              <div
                key={step.number}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#007BFF] text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3
                      className="font-bold text-[#343A40] mb-2 text-lg"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <CheckCircle className="w-6 h-6 text-[#28A745] flex-shrink-0 mt-1" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-200 flex items-start gap-4">
            <Terminal className="w-6 h-6 text-[#007BFF] flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-[#343A40] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Running Your Code
              </h4>
              <p className="text-gray-700 mb-2">
                Use the integrated terminal in VSCode to run your Python files:
              </p>
              <code className="bg-white px-3 py-2 rounded border border-gray-300 inline-block text-sm font-mono">
                python main.py
              </code>
              <p className="text-gray-600 text-sm mt-2">
                Install dependencies as needed using pip throughout your learning journey.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-20"></div>

        {/* Best Practices Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#343A40] mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Best Practices
            </h2>
            <p className="text-gray-600 text-lg">
              Maximize your learning effectiveness
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
            <div className="grid md:grid-cols-2 gap-4">
              {bestPractices.map((practice, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#28A745] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Lightbulb className="w-4 h-4" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{practice}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-20"></div>

        {/* FAQ Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#343A40] mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg">
              Everything you need to know
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <h3
                    className="font-semibold text-[#343A40] pr-4"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {faq.question}
                  </h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-[#007BFF] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-gradient-to-r from-[#007BFF] to-[#28A745] rounded-2xl p-8 md:p-12 text-center text-white">
          <Rocket className="w-16 h-16 mx-auto mb-6 text-white" />
          <h3
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Ready to Master Python?
          </h3>
          <p className="text-white/90 mb-2 text-lg max-w-2xl mx-auto">
            Start your structured learning journey today with the Python Learning Guardrail System.
          </p>
          <p className="text-white/80 mb-8 text-sm">
            Support available through Gemini chat or repository issues. Happy learning! 🚀
          </p>
          <button
            onClick={() => onDownload(prompt.id)}
            className="inline-flex items-center px-8 py-4 bg-white text-[#007BFF] rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
          >
            <Download className="w-5 h-5 mr-2" />
            Download Now • $2
          </button>
        </section>
      </div>
    </div>
  );
}