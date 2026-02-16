import React from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';

interface BlogPostData {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  keywords: string;
}

// Sample blog post data - replace with real content when you write articles
const blogPosts: Record<string, BlogPostData> = {
  'complete-guide-ai-system-prompts-2025': {
    slug: 'complete-guide-ai-system-prompts-2025',
    title: 'The Complete Guide to AI System Prompts in 2025',
    excerpt: 'Everything you need to know about system prompts for ChatGPT, Claude, Gemini, and other AI platforms. Learn best practices, common mistakes, and advanced techniques.',
    date: '2025-02-16',
    readTime: '8 min read',
    category: 'Guide',
    author: 'SystemPrompts Team',
    keywords: 'AI system prompts, ChatGPT prompts, Claude prompts, prompt engineering guide, AI best practices',
    content: `
      <h2>What Are AI System Prompts?</h2>
      <p>AI system prompts are instructions that define how an AI assistant should behave, respond, and interact with users. They're the foundation of customizing AI behavior to match your specific needs.</p>

      <h2>Why System Prompts Matter</h2>
      <p>System prompts allow you to:</p>
      <ul>
        <li>Control the AI's personality and tone</li>
        <li>Define specific expertise areas</li>
        <li>Set output formats and structures</li>
        <li>Establish boundaries and guidelines</li>
        <li>Optimize responses for your use case</li>
      </ul>

      <h2>Best Practices for Writing System Prompts</h2>
      <p>Follow these proven strategies to create effective system prompts:</p>
      
      <h3>1. Be Specific and Clear</h3>
      <p>Vague prompts lead to inconsistent results. Instead of "Help me code," use "Act as a senior Python developer specializing in data science. Provide clean, well-documented code following PEP 8 standards."</p>

      <h3>2. Define the Role</h3>
      <p>Give the AI a clear identity: "You are an expert marketing strategist with 15 years of experience in B2B SaaS companies."</p>

      <h3>3. Set Output Format</h3>
      <p>Specify exactly how you want responses structured. For example: "Always provide answers in this format: 1) Summary, 2) Detailed explanation, 3) Examples, 4) Next steps."</p>

      <h3>4. Include Constraints</h3>
      <p>Tell the AI what NOT to do: "Never use jargon without explanation. Avoid overly technical terms. Keep responses under 200 words unless asked for more detail."</p>

      <h2>Platform-Specific Considerations</h2>
      
      <h3>ChatGPT</h3>
      <p>ChatGPT responds well to conversational, detailed prompts. Use natural language and provide context.</p>

      <h3>Claude</h3>
      <p>Claude excels with structured prompts. Use clear sections and explicit instructions.</p>

      <h3>GitHub Copilot</h3>
      <p>Focus on code-specific instructions. Define coding standards, comment styles, and architectural patterns.</p>

      <h3>Cursor AI</h3>
      <p>Cursor benefits from project-wide context. Include information about your codebase structure and conventions.</p>

      <h2>Common Mistakes to Avoid</h2>
      <ul>
        <li>Being too vague or generic</li>
        <li>Overloading with too many instructions</li>
        <li>Not testing and iterating</li>
        <li>Forgetting to update prompts as needs change</li>
        <li>Not documenting what works</li>
      </ul>

      <h2>Advanced Techniques</h2>
      
      <h3>Chain of Thought</h3>
      <p>Ask the AI to show its reasoning: "Before providing an answer, explain your thought process step-by-step."</p>

      <h3>Few-Shot Learning</h3>
      <p>Provide examples of desired outputs to guide the AI's responses.</p>

      <h3>Context Management</h3>
      <p>Structure prompts to maintain relevant context across multiple interactions.</p>

      <h2>Get Started Today</h2>
      <p>Ready to level up your AI interactions? Check out our <a href="/prompts">premium system prompts</a> designed by experts for specific use cases.</p>
    `
  },
  '10-chatgpt-prompts-10x-productivity': {
    slug: '10-chatgpt-prompts-10x-productivity',
    title: '10 ChatGPT System Prompts That Will 10x Your Productivity',
    excerpt: 'Discover the most effective system prompts used by top professionals. Includes real examples and templates you can use immediately.',
    date: '2025-02-15',
    readTime: '6 min read',
    category: 'Tutorial',
    author: 'SystemPrompts Team',
    keywords: 'ChatGPT productivity, AI prompts, productivity hacks, ChatGPT templates, AI automation',
    content: `
      <h2>Coming Soon!</h2>
      <p>This article is currently being written by our team of prompt engineering experts.</p>
      <p>We're crafting 10 battle-tested system prompts that will help you:</p>
      <ul>
        <li>Automate repetitive tasks</li>
        <li>Generate high-quality content faster</li>
        <li>Improve code quality and documentation</li>
        <li>Streamline research and analysis</li>
        <li>Enhance decision-making processes</li>
      </ul>
      <p>Subscribe to our newsletter below to be notified when this article is published!</p>
      <p>In the meantime, check out our <a href="/prompts">available prompts</a> to get started.</p>
    `
  },
  'claude-vs-chatgpt-prompts-comparison': {
    slug: 'claude-vs-chatgpt-prompts-comparison',
    title: 'Claude vs ChatGPT: Which System Prompts Work Best?',
    excerpt: 'A comprehensive comparison of prompt engineering techniques across different AI platforms. Learn which prompts excel on each platform.',
    date: '2025-02-14',
    readTime: '10 min read',
    category: 'Comparison',
    author: 'SystemPrompts Team',
    keywords: 'Claude vs ChatGPT, AI comparison, prompt engineering, best AI platform, AI prompts comparison',
    content: `
      <h2>Coming Soon!</h2>
      <p>This comprehensive comparison guide is currently in development.</p>
      <p>We're testing hundreds of prompts across both platforms to give you data-driven insights on:</p>
      <ul>
        <li>Response quality differences</li>
        <li>Optimal prompt structures for each platform</li>
        <li>Use case recommendations</li>
        <li>Performance benchmarks</li>
        <li>Cost-effectiveness analysis</li>
      </ul>
      <p>Subscribe to stay updated! Browse our <a href="/prompts">current prompts</a> in the meantime.</p>
    `
  },
  'custom-prompts-github-copilot': {
    slug: 'custom-prompts-github-copilot',
    title: 'How to Write Custom Prompts for GitHub Copilot',
    excerpt: 'Step-by-step guide to creating custom system prompts that make GitHub Copilot work better for your coding style and projects.',
    date: '2025-02-13',
    readTime: '7 min read',
    category: 'Development',
    author: 'SystemPrompts Team',
    keywords: 'GitHub Copilot, custom prompts, code AI, developer tools, AI coding assistant',
    content: `
      <h2>Coming Soon!</h2>
      <p>This developer-focused tutorial is being prepared by our engineering team.</p>
      <p>Learn how to:</p>
      <ul>
        <li>Set up custom instructions for GitHub Copilot</li>
        <li>Define coding standards and conventions</li>
        <li>Improve code completion accuracy</li>
        <li>Integrate with your existing workflows</li>
        <li>Optimize for your tech stack</li>
      </ul>
      <p>While you wait, explore our <a href="/prompts/fullstack-security-sentinel">FullStack Security Sentinel</a> for code security best practices.</p>
    `
  },
  'prompt-engineering-best-practices-developers': {
    slug: 'prompt-engineering-best-practices-developers',
    title: 'Prompt Engineering Best Practices: A Developer\'s Guide',
    excerpt: 'Advanced techniques for crafting effective prompts. Covers context management, output formatting, and optimization strategies.',
    date: '2025-02-12',
    readTime: '12 min read',
    category: 'Advanced',
    author: 'SystemPrompts Team',
    keywords: 'prompt engineering, developer guide, AI optimization, advanced prompts, coding best practices',
    content: `
      <h2>Coming Soon!</h2>
      <p>Our most comprehensive guide is currently under development.</p>
      <p>This advanced tutorial will cover:</p>
      <ul>
        <li>Advanced prompt patterns and templates</li>
        <li>Context window optimization</li>
        <li>Multi-turn conversation management</li>
        <li>Error handling and edge cases</li>
        <li>Performance testing and iteration</li>
      </ul>
      <p>Check back soon or subscribe to our newsletter for updates!</p>
    `
  },
  'optimizing-cursor-ai-custom-prompts': {
    slug: 'optimizing-cursor-ai-custom-prompts',
    title: 'Optimizing Cursor AI with Custom System Prompts',
    excerpt: 'Transform your Cursor AI experience with specialized prompts. Learn how to customize AI behavior for maximum coding efficiency.',
    date: '2025-02-11',
    readTime: '5 min read',
    category: 'Tutorial',
    author: 'SystemPrompts Team',
    keywords: 'Cursor AI, custom prompts, AI code editor, developer productivity, AI optimization',
    content: `
      <h2>Coming Soon!</h2>
      <p>This Cursor AI optimization guide is being crafted by our team.</p>
      <p>Discover how to:</p>
      <ul>
        <li>Set up custom rules for Cursor AI</li>
        <li>Define project-specific contexts</li>
        <li>Improve code generation quality</li>
        <li>Speed up your development workflow</li>
        <li>Integrate with your team's standards</li>
      </ul>
      <p>Browse our <a href="/prompts">available prompts</a> while this article is being prepared.</p>
    `
  }
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Get the blog post data
  const post = slug ? blogPosts[slug] : null;

  // If post doesn't exist, show 404
  if (!post) {
    return (
      <div className="min-h-screen bg-background pt-20">
        <SEO 
          title="Article Not Found | SystemPrompts Blog"
          description="The blog post you're looking for doesn't exist."
          url={`https://systemprompts.site/blog/${slug}`}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4 text-[#343A40]">Article Not Found</h1>
          <p className="text-gray-600 mb-8">This blog post doesn't exist yet or has been moved.</p>
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-[#007BFF] font-semibold hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={`${post.title} | SystemPrompts Blog`}
        description={post.excerpt}
        url={`https://systemprompts.site/blog/${post.slug}`}
        keywords={post.keywords}
        type="article"
      />
      
      {/* Back to Blog Link */}
      <div className="bg-white border-b border-gray-200 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-[#007BFF] hover:text-[#0056b3] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Category Badge */}
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#007BFF] text-white rounded-full text-sm font-semibold">
                <Tag className="w-4 h-4" />
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#343A40]">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>By {post.author}</span>
              </div>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-[#343A40]
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                prose-ul:my-6 prose-ul:space-y-2
                prose-li:text-gray-700
                prose-a:text-[#007BFF] prose-a:no-underline hover:prose-a:underline
                prose-strong:text-[#343A40] prose-strong:font-semibold"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* CTA Section */}
            <div className="mt-16 p-8 bg-gradient-to-r from-[#007BFF]/10 to-[#28A745]/10 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#343A40]">
                Ready to Supercharge Your AI Workflow?
              </h3>
              <p className="text-gray-700 mb-6">
                Browse our collection of premium system prompts designed by experts for specific use cases.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/prompts"
                  className="inline-block px-8 py-3 bg-[#007BFF] text-white rounded-lg font-semibold hover:bg-[#0056b3] transition-colors text-center"
                >
                  Browse Prompts
                </Link>
                <Link
                  to="/blog"
                  className="inline-block px-8 py-3 bg-white text-[#007BFF] border-2 border-[#007BFF] rounded-lg font-semibold hover:bg-[#007BFF] hover:text-white transition-colors text-center"
                >
                  Read More Articles
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </article>

      {/* Newsletter CTA */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#343A40]">
            Never Miss an Article
          </h2>
          <p className="text-gray-600 mb-6">
            Get expert prompt engineering tips and AI insights delivered to your inbox weekly
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
