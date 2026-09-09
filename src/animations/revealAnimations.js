import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Reusable GSAP text reveal animation
 * @param {Element|string} target - DOM ref or selector
 * @param {Object} options - Custom ScrollTrigger / duration options
 */
export class TextReveal {
  static init(target, options = {}) {
    if (!target) return;
    return gsap.from(target, {
      scrollTrigger: {
        trigger: target,
        start: 'top 80%',
        toggleActions: 'play none none none',
        ...options.scrollTrigger,
      },
      y: 40,
      opacity: 0,
      duration: options.duration || 1,
      ease: options.ease || 'power3.out',
      stagger: options.stagger || 0.1,
      ...options,
    });
  }
}

/**
 * Reusable GSAP image scale and parallax reveal
 * @param {Element|string} target - Image wrapper ref
 */
export class ImageReveal {
  static init(target, options = {}) {
    if (!target) return;
    return gsap.fromTo(
      target,
      { scale: 1.08, opacity: 0 },
      {
        scrollTrigger: {
          trigger: target,
          start: 'top 75%',
          toggleActions: 'play none none none',
          ...options.scrollTrigger,
        },
        scale: 1,
        opacity: 1,
        duration: options.duration || 1.2,
        ease: options.ease || 'power2.out',
        ...options,
      }
    );
  }
}

/**
 * Reusable staggered children reveal
 * @param {Element|string} container - Parent container ref
 * @param {string} childSelector - Class or tag of children
 */
export class StaggerReveal {
  static init(container, childSelector = '.stagger-item', options = {}) {
    if (!container) return;
    const elements = container.querySelectorAll(childSelector);
    if (!elements.length) return;

    return gsap.from(elements, {
      scrollTrigger: {
        trigger: container,
        start: 'top 75%',
        toggleActions: 'play none none none',
        ...options.scrollTrigger,
      },
      y: 30,
      opacity: 0,
      stagger: options.stagger || 0.12,
      duration: options.duration || 0.8,
      ease: options.ease || 'power2.out',
      ...options,
    });
  }
}
