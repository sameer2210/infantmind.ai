import { useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * Dynamic SEO Head component to manage document title, meta tags, and canonical links per route
 */
const SeoHead = ({ title, description, canonicalUrl, ogType = 'website', ogImage = 'https://infantmind.ai/img/hero-net.jpg' }) => {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // 2. Helper to set or update meta tag
    const setMeta = (nameAttr, nameValue, content) => {
      let element = document.querySelector(`meta[${nameAttr}="${nameValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, nameValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 3. Set standard & OpenGraph meta
    setMeta('name', 'description', description);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:image', ogImage);

    // 4. Set Twitter meta
    setMeta('property', 'twitter:title', title);
    setMeta('property', 'twitter:description', description);
    setMeta('property', 'twitter:url', canonicalUrl);
    setMeta('property', 'twitter:image', ogImage);

    // 5. Update Canonical link
    let canonicalElement = document.querySelector('link[rel="canonical"]');
    if (!canonicalElement) {
      canonicalElement = document.createElement('link');
      canonicalElement.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalElement);
    }
    canonicalElement.setAttribute('href', canonicalUrl);
  }, [title, description, canonicalUrl, ogType, ogImage]);

  return null;
};

SeoHead.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  canonicalUrl: PropTypes.string.isRequired,
  ogType: PropTypes.string,
  ogImage: PropTypes.string,
};

export default SeoHead;
