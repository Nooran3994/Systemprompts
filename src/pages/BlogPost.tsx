import React from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { blogPostContent } from './BlogPostContent';

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
  'complete-guide-ai-system-prompts-2026': {
    slug: 'complete-guide-ai-system-prompts-2026',
    title: 'The Complete Guide to AI System Prompts in 2026',
    excerpt: 'Everything you need to know about system prompts for ChatGPT, Claude, Gemini, and other AI platforms. Learn best practices, common mistakes, and advanced techniques.',
    date: '2026-02-16',
    readTime: '8 min read',
    category: 'Guide',
    author: 'SystemPrompts Team',
    keywords: 'AI system prompts, ChatGPT prompts, Claude prompts, prompt engineering guide, AI best practices',
    content: blogPostContent['complete-guide-ai-system-prompts-2026']
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
        title={`${post.title} | SystemPrompts.site Blog`}
        description={post.excerpt}
        url={`https://systemprompts.site/blog/${post.slug}`}
        keywords={post.keywords}
        type="article"
        publishedTime={post.date}
        author={post.author}
        breadcrumbs={[
          { name: 'Home', url: 'https://systemprompts.site/' },
          { name: 'Blog', url: 'https://systemprompts.site/blog' },
          { name: post.title, url: `https://systemprompts.site/blog/${post.slug}` },
        ]}
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