import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Cinematic Hero Entrance Sequence
 * @param {Object} refs - Object containing refs to hero elements
 */
export const animateHeroEntrance = (refs) => {
  const { bgRef, imageRef, badgeRef, titleRef, subtitleRef, ctaRef, selectorRef, scrollRef } = refs;

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  if (bgRef?.current) {
    tl.fromTo(bgRef.current, { opacity: 0 }, { opacity: 1, duration: 1.2 });
  }

  if (imageRef?.current) {
    tl.fromTo(
      imageRef.current,
      { scale: 0.94, opacity: 0, y: 30 },
      { scale: 1, opacity: 1, y: 0, duration: 1.4 },
      '-=0.8'
    );
  }

  if (badgeRef?.current) {
    tl.fromTo(
      badgeRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      '-=1.0'
    );
  }

  if (titleRef?.current) {
    tl.fromTo(
      titleRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.0 },
      '-=0.6'
    );
  }

  if (subtitleRef?.current) {
    tl.fromTo(
      subtitleRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      '-=0.6'
    );
  }

  if (ctaRef?.current) {
    tl.fromTo(
      ctaRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      '-=0.5'
    );
  }

  if (selectorRef?.current) {
    tl.fromTo(
      selectorRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      '-=0.4'
    );
  }

  if (scrollRef?.current) {
    tl.fromTo(
      scrollRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8 },
      '-=0.2'
    );
  }

  return tl;
};

/**
 * Subtle Scroll Parallax for Hero image and content
 */
export const animateHeroParallax = (heroSectionRef, imageRef, contentRef) => {
  if (!heroSectionRef?.current) return;

  const ctx = gsap.context(() => {
    if (imageRef?.current) {
      gsap.to(imageRef.current, {
        scrollTrigger: {
          trigger: heroSectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
        y: 60,
        scale: 1.02,
        ease: 'none',
      });
    }

    if (contentRef?.current) {
      gsap.to(contentRef.current, {
        scrollTrigger: {
          trigger: heroSectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
        y: -30,
        opacity: 0.85,
        ease: 'none',
      });
    }
  }, heroSectionRef);

  return ctx;
};
