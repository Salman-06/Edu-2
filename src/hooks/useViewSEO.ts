import { useEffect } from 'react';
import { VIEW_SEO_CONFIG, ViewSEOMetadata } from '../utils/seoData';

/**
 * Custom hook to dynamically synchronize title, meta descriptions,
 * Open Graph tags, Twitter cards, canonical link, and JSON-LD structured data
 * for each individual view (Home, About, Services, Gallery, Contact).
 */
export function useViewSEO(viewKey: string) {
  useEffect(() => {
    const config: ViewSEOMetadata = VIEW_SEO_CONFIG[viewKey] || VIEW_SEO_CONFIG.home;

    // 1. Update Document Title
    document.title = config.title;

    // Helper to safely set or create meta tag
    const setMetaTag = (attributeName: string, attributeValue: string, content: string) => {
      let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', config.description);
    setMetaTag('name', 'keywords', config.keywords);

    // 3. Open Graph Tags
    const fullCanonicalUrl = typeof window !== 'undefined'
      ? `${window.location.origin}${window.location.pathname}${config.canonicalPath}`
      : `https://educareacademytrust.org/${config.canonicalPath}`;

    setMetaTag('property', 'og:title', config.title);
    setMetaTag('property', 'og:description', config.description);
    setMetaTag('property', 'og:type', config.ogType);
    setMetaTag('property', 'og:url', fullCanonicalUrl);
    setMetaTag('property', 'og:site_name', 'Edu Care Academy Trust');

    // 4. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', config.title);
    setMetaTag('name', 'twitter:description', config.description);

    // 5. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullCanonicalUrl);

    // 6. JSON-LD Structured Data
    const SCRIPT_ID = 'view-specific-jsonld';
    let scriptElement = document.getElementById(SCRIPT_ID);
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = SCRIPT_ID;
      scriptElement.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(config.jsonLd, null, 2);

    return () => {
      // Cleanup optional on unmount if view changes immediately
    };
  }, [viewKey]);
}
