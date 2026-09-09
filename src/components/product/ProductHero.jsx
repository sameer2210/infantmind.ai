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
    <section ref={heroRef} className="relative min-h-screen w-full bg-[#07080a] text-white pt-36 pb-20 px-6 sm:px-12 flex flex-col justify-between overflow-hidden">
      {/* Background Radial Glow */}
      <div ref={bgRef} className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Header Block */}
      <div className="max-w-7xl mx-auto w-full z-10 text-center flex flex-col items-center">
        {/* Category Pill */}
        <div ref={badgeRef} className="pill-badge mb-6 border-rose-500/30 bg-rose-500/10 text-rose-400">
          <span className="text-rose-500 text-xs">◆</span>
          <span>HARDWARE + MULTIMODAL AI PLATFORM</span>
          <span className="text-rose-500 text-xs">◆</span>
        </div>

        {/* Product Display Title */}
        <div ref={titleRef} className="space-y-3 max-w-4xl">
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-bold tracking-tight uppercase leading-[0.9]">
            INFANTMIND <span className="text-rose-500">SMART NET</span>
          </h1>
          <p ref={subtitleRef} className="font-mono text-sm sm:text-base text-slate-400 uppercase tracking-widest pt-2">
            The World&apos;s Most Intelligent Infant Understanding Platform
          </p>
        </div>

        {/* CTA Actions */}
        <div ref={ctaRef} className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={onOpenPilot}
            className="px-8 py-4 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-rose-500 hover:text-white transition-all duration-300 shadow-2xl group"
          >
            <span>Join Pilot Cohort</span>
            <FiArrowUpRight className="text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          <a
            href="#product-specs"
            className="px-6 py-3.5 rounded-full border border-white/20 text-white text-xs font-mono uppercase tracking-wider hover:bg-white/10 transition"
          >
            View Specifications
          </a>
        </div>
      </div>

      {/* Hero Visual Showcase */}
      <div className="max-w-6xl mx-auto w-full z-10 mt-12 mb-8">
        <div ref={imageRef} className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0c0d10] shadow-2xl group">
          <img
            src="/img/hero-net.jpg"
            alt="InfantMind Smart Net System"
            className="w-full h-[420px] sm:h-[520px] md:h-[620px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-transparent to-transparent opacity-85" />

          {/* Quick Specifications Pill Bar */}
          <div ref={selectorRef} className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex flex-wrap items-center justify-between gap-4 glass-card p-4 sm:p-6 rounded-2xl border border-white/10">
            <div className="flex flex-wrap gap-4">
              {specPills.map((pill, i) => {
                const Icon = pill.icon;
                return (
                  <div key={i} className="flex items-center gap-2 font-mono text-xs text-slate-300">
                    <Icon className="text-rose-400 text-sm" />
                    <span>{pill.label}</span>
                  </div>
                );
              })}
            </div>
            <span className="font-mono text-[10px] text-rose-400 uppercase tracking-widest border border-rose-500/30 px-3 py-1 rounded-full">
              PATENT PENDING
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div ref={scrollRef} className="z-10 flex flex-col items-center gap-2 pt-2">
        <a href="#product-intro" className="flex items-center gap-2 font-mono text-[11px] text-slate-500 uppercase tracking-widest hover:text-slate-300 transition">
          <span>EXPLORE</span>
          <FiChevronDown className="animate-bounce text-sm text-rose-500" />
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
