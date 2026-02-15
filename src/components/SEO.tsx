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
  // Inline SVG favicon as data URI - bypasses static file serving issues
  const faviconSvg = `data:image/svg+xml,${encodeURIComponent(
    `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="6" fill="#007BFF"/>
      <path d="M10.67 9.33C10.67 9.33 13.33 6.67 16 6.67C18.67 6.67 21.33 9.33 21.33 9.33M16 6.67V18.67M16 18.67L10.67 24M16 18.67L21.33 24" stroke="white" stroke-width="2.67" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M24 16V25.33C24 26.8 22.8 28 21.33 28H10.67C9.2 28 8 26.8 8 25.33V16" stroke="white" stroke-width="2.67" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  )}`;

  // Inline ICO as data URI for older browser support
  const faviconIco = 'data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwABP8cAAT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0ABf8dAAX/HQAF/x0ABf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEdAAX/HQAF/x0ABf8dAAX/HQAF/x0ABf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEdAAX/HQAF/x0ABf8dAAX/HQAF/x0ABf8dAAX/HQAF/x0ABf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEdAAX/HQAF/x0ABf8dAAX/HQAF/x0ABf8dAAX/HQAF/x0ABf8dAAX/HgAG/wAAAAAAAAAAAAAAAAAAAAAAAAAAHgAG/x0ABf8dAAX/HQAF/x0ABf8dAAX/HQAF/x0ABf8dAAX/HQAF/x0ABf8dAAX/HgAG/wAAAAAAAAAAAAAAAB4ABv8dAAX/HQAF/x0ABf8dAAX/HQAF/x0ABf8dAAX/HQAF/x0ABf8dAAX/HQAF/x0ABf8dAAX/HgAG/wAAAAAAAAAAHgAG/x0ABf8dAAX/HQAF/x0ABf8dAAX/HQAF/x0ABf8dAAX/HQAF/x0ABf8dAAX/HQAF/x0ABf8dAAX/AAAAAAAAAAAAAAAAAAAAAB0ABf8dAAX/HQAF/x0ABf8dAAX/HQAF/x0ABf8dAAX/HQAF/x0ABf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEdAAX/HQAF/x0ABf8dAAX/HQAF/x0ABf8dAAX/HQAF/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0ABf8dAAX/HQAF/x0ABf8dAAX/HQAF/x0ABf8dAAX/HQAF/x0ABf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEdAAX/HQAF/x0ABf8dAAX/HQAF/x0ABf8dAAX/HQAF/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0ABf8dAAX/HQAF/x0ABf8dAAX/HQAF/x0ABf8dAAX/HQAF/x0ABf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEdAAX/HQAF/x0ABf8dAAX/HQAF/x0ABf8dAAX/HQAF/wAAAAAAAAAAAAAAAAAAAAAAAAAAHgAG/x0ABf8dAAX/HQAF/x0ABf8dAAX/HQAF/x0ABf8dAAX/HQAF/x0ABf8dAAX/HQAF/x4ABv8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEdAAX/HQAF/x0ABf8dAAX/HQAF/x0ABf8dAAX/HQAF/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHQAF/x0ABf8dAAX/HQAF/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      
      {/* Favicon - Inline data URIs for guaranteed display across all browsers */}
      <link rel="icon" href={faviconIco} sizes="any" />
      <link rel="icon" href={faviconSvg} type="image/svg+xml" />
      <link rel="apple-touch-icon" href={faviconSvg} />
      <meta name="theme-color" content="#007BFF" />
      
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