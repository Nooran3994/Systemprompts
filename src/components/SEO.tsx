import React from 'react';
import { Helmet } from 'react-helmet-async';

interface Breadcrumb {
  name: string;
  url: string;
}

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string;
  type?: 'website' | 'article' | 'product';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  breadcrumbs?: Breadcrumb[];
  productName?: string;
  productCategory?: string;
  noIndex?: boolean;
}

const SITE_NAME = 'SystemPrompts.site';
const SITE_URL = 'https://systemprompts.site';
const OG_IMAGE = 'https://systemprompts.site/og-image.svg';
const OG_IMAGE_ALT = 'SystemPrompts.site – Premium AI System Prompts Marketplace';
const TWITTER_HANDLE = '@systemprompts';

export function SEO({
  title = 'SystemPrompts.site — Premium AI System Prompts Marketplace',
  description = 'Download expert-crafted system prompts for ChatGPT, Claude, Gemini, GitHub Copilot, Cursor, Perplexity, Grok, and DeepSeek. Professional prompt engineering templates that transform your AI workflow.',
  image = OG_IMAGE,
  url = SITE_URL,
  keywords = 'AI system prompts, buy system prompts, download AI prompts, ChatGPT prompts, Claude prompts, Gemini prompts, GitHub Copilot prompts, Cursor AI prompts, Perplexity prompts, Grok prompts, DeepSeek prompts, prompt engineering, AI marketplace, premium AI prompts, custom AI prompts, AI assistant prompts, prompt templates, professional prompts, AI productivity, system prompt marketplace',
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'SystemPrompts Team',
  breadcrumbs,
  productName,
  productCategory,
  noIndex = false,
}: SEOProps) {

  // ── Inline SVG favicon ────────────────────────────────────────────────────────
  const faviconSvg = `data:image/svg+xml,${encodeURIComponent(
    `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="6" fill="#007BFF"/>
      <path d="M10.67 9.33C10.67 9.33 13.33 6.67 16 6.67C18.67 6.67 21.33 9.33 21.33 9.33M16 6.67V18.67M16 18.67L10.67 24M16 18.67L21.33 24" stroke="white" stroke-width="2.67" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M24 16V25.33C24 26.8 22.8 28 21.33 28H10.67C9.2 28 8 26.8 8 25.33V16" stroke="white" stroke-width="2.67" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  )}`;

  // ── Pre-compute all JSON-LD strings OUTSIDE JSX ───────────────────────────────
  const organizationJson = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/og-image.svg`,
      width: 1200,
      height: 630,
    },
    description: 'A marketplace for expert-crafted AI system prompts compatible with ChatGPT, Claude, Gemini, GitHub Copilot, Cursor, Perplexity, Grok, and DeepSeek.',
    sameAs: [],
  });

  const websiteJson = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description,
    publisher: { '@id': `${SITE_URL}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/prompts?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'en-US',
  });

  const webPageJson = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': type === 'article' ? 'Article' : type === 'product' ? 'ItemPage' : 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-US',
    ...(publishedTime ? { datePublished: publishedTime } : {}),
    ...(modifiedTime ? { dateModified: modifiedTime } : {}),
    ...(author && type === 'article' ? { author: { '@type': 'Person', name: author } } : {}),
  });

  const breadcrumbJson = (breadcrumbs && breadcrumbs.length > 0)
    ? JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: crumb.url,
        })),
      })
    : null;

  const productJson = (type === 'product' && productName)
    ? JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: productName,
        description,
        image,
        url,
        brand: { '@type': 'Brand', name: SITE_NAME },
        category: productCategory || 'AI System Prompt',
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          seller: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
          url,
        },
      })
    : null;

  const isHomepage = type === 'website' && url === SITE_URL;

  const marketplaceJson = isHomepage
    ? JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'AI System Prompts Collection',
        description: 'Expert-crafted system prompts for ChatGPT, Claude, Gemini, and other AI platforms',
        url: `${SITE_URL}/prompts`,
        numberOfItems: 8,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Python Learning Guardrail System', url: `${SITE_URL}/prompts/python-learning-guardrail-system` },
          { '@type': 'ListItem', position: 2, name: 'Data/Analyst System',              url: `${SITE_URL}/prompts/data-analyst-system` },
          { '@type': 'ListItem', position: 3, name: 'FullStack Security Sentinel',      url: `${SITE_URL}/prompts/fullstack-security-sentinel` },
          { '@type': 'ListItem', position: 4, name: 'TrendPulse Architect',             url: `${SITE_URL}/prompts/trendpulse-architect` },
          { '@type': 'ListItem', position: 5, name: 'DevAlign Coach',                   url: `${SITE_URL}/prompts/devalign-coach` },
          { '@type': 'ListItem', position: 6, name: 'CodeCollab Coach',                 url: `${SITE_URL}/prompts/codecollab-coach` },
          { '@type': 'ListItem', position: 7, name: 'Resume Strategist AI',             url: `${SITE_URL}/prompts/resume-strategist-ai` },
          { '@type': 'ListItem', position: 8, name: 'CV Structure Architect',           url: `${SITE_URL}/prompts/cv-structure-architect` },
        ],
      })
    : null;

  const faqJson = isHomepage
    ? JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What are AI system prompts?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'AI system prompts are specialized instructions placed at the beginning of a conversation with an AI model (like ChatGPT, Claude, or Gemini) to define its behavior, persona, constraints, and response style.',
            },
          },
          {
            '@type': 'Question',
            name: 'Which AI models work with SystemPrompts.site prompts?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Our system prompts are compatible with all major AI platforms including ChatGPT, Claude, Google Gemini, GitHub Copilot, Cursor AI, Perplexity, Grok, and DeepSeek. Each prompt is delivered as a .md file that works universally across any AI model.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I use a system prompt after downloading?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'After downloading your .md file, paste the contents into the system prompt or custom instructions field of your chosen AI platform.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are the system prompts reusable?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! Once you download a system prompt, you own it permanently and can reuse it across any AI model, any project, and any number of sessions. There are no usage limits.',
            },
          },
          {
            '@type': 'Question',
            name: 'What categories of system prompts are available?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'SystemPrompts.site offers prompts across multiple categories: Learning Systems, Agents, Content Creation, and Career Tools. New prompts are added regularly.',
            },
          },
        ],
      })
    : null;

  const softwareAppJson = isHomepage
    ? JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: SITE_NAME,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        url: SITE_URL,
        description: 'A marketplace for downloading professional AI system prompts compatible with ChatGPT, Claude, Gemini, and other leading AI platforms.',
        offers: {
          '@type': 'AggregateOffer',
          lowPrice: '0',
          highPrice: '8',
          priceCurrency: 'USD',
          offerCount: 8,
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '847',
          bestRating: '5',
          worstRating: '1',
        },
      })
    : null;

  const robotsContent = noIndex
    ? 'noindex, nofollow'
    : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';

  return (
    <Helmet>
      {/* ── Primary Meta Tags ─────────────────────────────────────────────── */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="application-name" content={SITE_NAME} />
      <meta name="format-detection" content="telephone=no" />

      {/* ── Indexing directives ───────────────────────────────────────────── */}
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

      {/* ── Canonical ────────────────────────────────────────────────────── */}
      <link rel="canonical" href={url} />

      {/* ── Language ─────────────────────────────────────────────────────── */}
      <meta name="language" content="English" />
      <link rel="alternate" hrefLang="en" href={url} />
      <link rel="alternate" hrefLang="x-default" href={SITE_URL} />

      {/* ── Favicon ──────────────────────────────────────────────────────── */}
      <link rel="icon" href={faviconSvg} type="image/svg+xml" />
      <link rel="apple-touch-icon" href={faviconSvg} />
      <meta name="theme-color" content="#007BFF" />
      <meta name="msapplication-TileColor" content="#007BFF" />

      {/* ── Performance: Preconnect ───────────────────────────────────────── */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="preconnect" href="https://images.unsplash.com" />
      <link rel="dns-prefetch" href="https://payhip.com" />
      <link rel="dns-prefetch" href="https://gemini.google.com" />

      {/* ── Open Graph ───────────────────────────────────────────────────── */}
      <meta property="og:type" content={type === 'article' ? 'article' : type === 'product' ? 'product' : 'website'} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={OG_IMAGE_ALT} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />

      {/* ── Article-specific OG ──────────────────────────────────────────── */}
      {publishedTime ? <meta property="article:published_time" content={publishedTime} /> : null}
      {modifiedTime ? <meta property="article:modified_time" content={modifiedTime} /> : null}
      {(author && type === 'article') ? <meta property="article:author" content={author} /> : null}

      {/* ── Twitter / X Card ─────────────────────────────────────────────── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:creator" content={TWITTER_HANDLE} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={OG_IMAGE_ALT} />

      {/* ── Structured Data: Organization ─────────────────────────────────── */}
      <script type="application/ld+json">{organizationJson}</script>

      {/* ── Structured Data: WebSite ──────────────────────────────────────── */}
      <script type="application/ld+json">{websiteJson}</script>

      {/* ── Structured Data: WebPage / Article / ItemPage ─────────────────── */}
      <script type="application/ld+json">{webPageJson}</script>

      {/* ── Structured Data: BreadcrumbList ──────────────────────────────── */}
      {breadcrumbJson ? <script type="application/ld+json">{breadcrumbJson}</script> : null}

      {/* ── Structured Data: Product ──────────────────────────────────────── */}
      {productJson ? <script type="application/ld+json">{productJson}</script> : null}

      {/* ── Structured Data: ItemList (homepage) ─────────────────────────── */}
      {marketplaceJson ? <script type="application/ld+json">{marketplaceJson}</script> : null}

      {/* ── Structured Data: FAQ (homepage) ──────────────────────────────── */}
      {faqJson ? <script type="application/ld+json">{faqJson}</script> : null}

      {/* ── Structured Data: SoftwareApplication (homepage) ──────────────── */}
      {softwareAppJson ? <script type="application/ld+json">{softwareAppJson}</script> : null}
    </Helmet>
  );
}
