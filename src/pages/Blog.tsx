import React from 'react';
import { Link } from 'react-router';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
}

// Sample blog posts - replace with real content when you start writing
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Complete Guide to AI System Prompts in 2026',
    excerpt: 'Everything you need to know about system prompts for ChatGPT, Claude, Gemini, and other AI platforms. Learn best practices, common mistakes, and advanced techniques.',
    date: '2026-02-16',
    readTime: '8 min read',
    category: 'Guide',
    slug: 'complete-guide-ai-system-prompts-2026'
  },
  {
    id: '2',
    title: '10 ChatGPT System Prompts That Will 10x Your Productivity',
    excerpt: 'Discover the most effective system prompts used by top professionals. Includes real examples and templates you can use immediately.',
    date: '2025-02-15',
    readTime: '6 min read',
    category: 'Tutorial',
    slug: '10-chatgpt-prompts-10x-productivity'
  },
  {
    id: '3',
    title: 'Claude vs ChatGPT: Which System Prompts Work Best?',
    excerpt: 'A comprehensive comparison of prompt engineering techniques across different AI platforms. Learn which prompts excel on each platform.',
    date: '2025-02-14',
    readTime: '10 min read',
    category: 'Comparison',
    slug: 'claude-vs-chatgpt-prompts-comparison'
  },
  {
    id: '4',
    title: 'How to Write Custom Prompts for GitHub Copilot',
    excerpt: 'Step-by-step guide to creating custom system prompts that make GitHub Copilot work better for your coding style and projects.',
    date: '2025-02-13',
    readTime: '7 min read',
    category: 'Development',
    slug: 'custom-prompts-github-copilot'
  },
  {
    id: '5',
    title: 'Prompt Engineering Best Practices: A Developer\'s Guide',
    excerpt: 'Advanced techniques for crafting effective prompts. Covers context management, output formatting, and optimization strategies.',
    date: '2025-02-12',
    readTime: '12 min read',
    category: 'Advanced',
    slug: 'prompt-engineering-best-practices-developers'
  },
  {
    id: '6',
    title: 'Optimizing Cursor AI with Custom System Prompts',
    excerpt: 'Transform your Cursor AI experience with specialized prompts. Learn how to customize AI behavior for maximum coding efficiency.',
    date: '2025-02-11',
    readTime: '5 min read',
    category: 'Tutorial',
    slug: 'optimizing-cursor-ai-custom-prompts'
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Blog - AI Prompt Engineering Tips & Guides | SystemPrompts"
        description="Learn prompt engineering best practices, AI tips, and system prompt optimization techniques for ChatGPT, Claude, Gemini, GitHub Copilot, and Cursor AI."
        url="https://systemprompts.site/blog"
        keywords="AI blog, prompt engineering tips, ChatGPT tutorials, AI guides, system prompt best practices, prompt optimization"
      />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-[#007BFF] to-[#28A745] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI Prompts Blog
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Expert guides, tutorials, and best practices for prompt engineering
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Category Badge */}
                <div className="bg-[#007BFF] text-white px-4 py-2">
                  <span className="text-sm font-semibold">{post.category}</span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-3 text-[#343A40] hover:text-[#007BFF] transition-colors">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Read More Link */}
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-[#007BFF] font-semibold hover:gap-3 transition-all"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Coming Soon Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-[#007BFF]/10 to-[#28A745]/10 rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-[#343A40]">
                More Content Coming Soon! 🚀
              </h3>
              <p className="text-gray-600">
                We're working on comprehensive guides and tutorials to help you master prompt engineering. 
                Subscribe to our newsletter below to get notified when new articles are published.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#343A40]">
            Never Miss a Post
          </h2>
          <p className="text-gray-600 mb-6">
            Get expert prompt engineering tips delivered to your inbox weekly
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#007BFF]"
              required
            />
            <button
              type="submit"
              className="bg-[#007BFF] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0056b3] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}