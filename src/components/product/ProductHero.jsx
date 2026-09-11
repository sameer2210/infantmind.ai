import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiArrowUpRight, FiChevronDown, FiShield, FiCpu, FiLock, FiZap } from 'react-icons/fi';
import gsap from 'gsap';
import { animateHeroEntrance } from '../../animations/heroAnimations';

const ProductHero = ({ onOpenPilot }) => {
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const imageRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const selectorRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      animateHeroEntrance({
        bgRef,
        imageRef,
        badgeRef,
        titleRef,
        subtitleRef,
        ctaRef,
        selectorRef,
        scrollRef,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const specPills = [
    { icon: FiCpu, label: 'Multimodal AI Fusion' },
    { icon: FiZap, label: 'Real-Time Edge Compute' },
    { icon: FiLock, label: 'Privacy-First Encrypted' },
    { icon: FiShield, label: 'Non-Contact Net Design' },
  ];

  return (
    <section ref={heroRef} className="relative min-h-0 sm:min-h-screen w-full bg-[#FBF8F5] text-[#252529] pt-28 sm:pt-36 pb-12 sm:pb-20 px-4 sm:px-12 flex flex-col justify-between overflow-hidden">
      {/* Background Radial Glow */}
      <div ref={bgRef} className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] bg-[#B66F7D]/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Header Block */}
      <div className="max-w-7xl mx-auto w-full z-10 text-center flex flex-col items-center">
        {/* Category Pill */}
        <div ref={badgeRef} className="pill-badge mb-4 sm:mb-6 border-[#D8B9BF] bg-[#F3E9EA] text-[#B66F7D]">
          <span className="text-[#B66F7D] text-xs">◆</span>
          <span className="text-[10px] sm:text-xs">HARDWARE + MULTIMODAL AI PLATFORM</span>
          <span className="text-[#B66F7D] text-xs">◆</span>
        </div>

        {/* Product Display H1 */}
        <div ref={titleRef} className="space-y-2 sm:space-y-3 max-w-4xl">
          <h1 className="font-display text-4xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-bold tracking-tight uppercase leading-[0.95] text-[#252529]">
            INFANTMIND <span className="text-[#B66F7D]">SMART NET</span>
          </h1>
          <p ref={subtitleRef} className="font-mono text-xs sm:text-base text-[#626268] uppercase tracking-widest pt-1 sm:pt-2">
            The World&apos;s Most Intelligent Infant Understanding Platform
          </p>
        </div>

        {/* CTA Actions */}
        <div ref={ctaRef} className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <button
            onClick={onOpenPilot}
            className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#B66F7D] text-white font-semibold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-[#9E5C6B] transition-all duration-300 shadow-md group"
          >
            <span>Join Pilot Cohort</span>
            <FiArrowUpRight className="text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          <a
            href="#product-specs"
            className="px-6 py-3 sm:py-3.5 rounded-full border border-[#D8B9BF] text-[#9E5C6B] text-xs font-mono uppercase tracking-wider hover:bg-[#F3E9EA] transition"
          >
            View Specifications
          </a>
        </div>
      </div>

      {/* Hero Visual Showcase */}
      <div className="max-w-6xl mx-auto w-full z-10 mt-8 sm:mt-12 mb-6 sm:mb-8">
        <div ref={imageRef} className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E7DDD9] bg-[#FFFDFC] shadow-md group">
          <img
            src="/img/hero-net.jpg"
            alt="InfantMind Smart Mosquito Net System Platform"
            loading="eager"
            className="w-full h-[260px] sm:h-[520px] md:h-[620px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FBF8F5]/80 via-transparent to-transparent opacity-85" />

          {/* Quick Specifications Pill Bar */}
          <div ref={selectorRef} className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 flex flex-wrap items-center justify-between gap-3 sm:gap-4 glass-card p-3 sm:p-6 rounded-xl sm:rounded-2xl border border-[#E7DDD9]">
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {specPills.map((pill, i) => {
                const Icon = pill.icon;
                return (
                  <div key={i} className="flex items-center gap-2 font-mono text-[10px] sm:text-xs text-[#626268]">
                    <Icon className="text-[#B66F7D] text-xs sm:text-sm" />
                    <span>{pill.label}</span>
                  </div>
                );
              })}
            </div>
            <span className="font-mono text-[9px] sm:text-[10px] text-[#B66F7D] uppercase tracking-widest border border-[#D8B9BF] bg-[#F3E9EA] px-2.5 py-0.5 rounded-full">
              PATENT PENDING
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div ref={scrollRef} className="z-10 flex flex-col items-center gap-2 pt-2">
        <a href="#product-intro" className="flex items-center gap-2 font-mono text-[10px] sm:text-[11px] text-[#626268] uppercase tracking-widest hover:text-[#252529] transition">
          <span>EXPLORE</span>
          <FiChevronDown className="animate-bounce text-sm text-[#B66F7D]" />
          <span>FEATURES</span>
        </a>
      </div>
    </section>
  );
};

ProductHero.propTypes = {
  onOpenPilot: PropTypes.func.isRequired,
};

export default ProductHero;
