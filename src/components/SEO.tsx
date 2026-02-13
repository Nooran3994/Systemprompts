import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export function SEO({ 
  title = 'SystemPrompts - Premium AI System Prompts Marketplace',
  description = 'Discover and download specialized system prompts for ChatGPT, Claude, Gemini, GitHub Copilot, Cursor, Perplexity, Grok, DeepSeek, and other leading AI platforms. Transform your AI interactions with professional prompt engineering.',
  image = 'https://systemprompts.site/og-image.png',
  url = 'https://systemprompts.site'
}: SEOProps) {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      
      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="SystemPrompts" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="SystemPrompts" />
      <meta name="keywords" content="AI prompts, system prompts, ChatGPT prompts, Claude prompts, Gemini prompts, GitHub Copilot, Cursor AI, prompt engineering, AI marketplace, premium prompts" />
      
      {/* Structured Data for Logo */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "SystemPrompts",
          "url": url,
          "logo": `${url}/logo.png`,
          "description": description,
          "sameAs": []
        })}
      </script>
      
      {/* Structured Data for Website */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "SystemPrompts",
          "url": url,
          "description": description,
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${url}/prompts?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
    </Helmet>
  );
}