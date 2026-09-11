import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiArrowUpRight, FiChevronDown } from 'react-icons/fi';
import gsap from 'gsap';
import { animateHeroEntrance } from '../animations/heroAnimations';

const Hero = ({ onOpenPilot }) => {
  const [activeTab, setActiveTab] = useState('UNDERSTAND');
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const imageRef = useRef(null);
  const badgeRef = useRef(null);
  const ctaRef = useRef(null);
  const selectorRef = useRef(null);
  const scrollRef = useRef(null);

  const modelTabs = [
    { id: 'UNDERSTAND', label: '01 / UNDERSTAND', text: 'Decodes infant cries into actionable health insights' },
    { id: 'TECHNOLOGY', label: '02 / TECHNOLOGY', text: 'Smart mosquito net embedded with vision, thermal & acoustic sensors' },
    { id: 'AI', label: '03 / MULTIMODAL AI', text: 'LLM reasoning engine with pediatric context awareness' },
    { id: 'SAFETY', label: '04 / SAFETY', text: 'Privacy-first, low-power, edge processing architecture' },
  ];

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

  return (
    <section ref={heroRef} className="relative min-h-0 sm:min-h-screen w-full bg-[#FBF8F5] text-[#252529] pt-28 sm:pt-36 pb-12 sm:pb-20 px-4 sm:px-12 flex flex-col justify-between overflow-hidden">
      {/* Background Radial Glow */}
      <div ref={bgRef} className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#B66F7D]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Hero Header & Title Block */}
      <div className="max-w-7xl mx-auto w-full z-10 text-center flex flex-col items-center">
        {/* Diamond Subtitle Pill */}
        <div ref={badgeRef} className="pill-badge mb-4 sm:mb-6 border-[#E7DDD9] bg-[#F7F1EE]">
          <span className="text-[#B66F7D] text-xs">◆</span>
          <span className="text-[10px] sm:text-xs text-[#626268]">EVERY CRY HAS A MEANING — WE DECODE IT</span>
          <span className="text-[#B66F7D] text-xs">◆</span>
        </div>

        {/* Primary H1 Heading for Homepage SEO */}
        <div ref={titleRef} className="space-y-2 sm:space-y-3 max-w-4xl">
          <h1 className="font-display text-4xl sm:text-7xl md:text-8xl lg:text-[7rem] font-bold tracking-tight uppercase leading-[0.95] text-[#252529]">
            INFANTMIND
          </h1>
          <p ref={subtitleRef} className="font-mono text-xs sm:text-base text-[#626268] uppercase tracking-widest pt-1 sm:pt-2">
            AI-Powered Baby Understanding System
          </p>
        </div>

        {/* Action Button & Sub-text */}
        <div ref={ctaRef} className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <button
            onClick={onOpenPilot}
            className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#B66F7D] text-white font-semibold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-[#9E5C6B] transition-all duration-300 shadow-md group"
          >
            <span>Explore InfantMind</span>
            <FiArrowUpRight className="text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          <span className="text-[11px] sm:text-xs text-[#8C8C91] font-mono">
            Smart Mosquito Net Platform • Patent Pending
          </span>
        </div>
      </div>

      {/* Hero Visual Container */}
      <div className="max-w-6xl mx-auto w-full z-10 mt-8 sm:mt-12 mb-6 sm:mb-8">
        <div ref={imageRef} className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E7DDD9] bg-[#FFFDFC] shadow-lg group">
          <img
            src="/img/hero-net.jpg"
            alt="InfantMind Smart Mosquito Net System"
            loading="eager"
            className="w-full h-[260px] sm:h-[450px] md:h-[600px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FBF8F5]/80 via-transparent to-transparent opacity-80" />

          {/* Active Model Indicator Tag */}
          <div ref={selectorRef} className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 sm:gap-4">
            <div className="glass-card rounded-xl sm:rounded-2xl p-3 sm:p-6 max-w-md border border-[#E7DDD9]">
              <span className="font-mono text-[9px] sm:text-[10px] text-[#B66F7D] uppercase tracking-widest block mb-0.5 sm:mb-1">
                {modelTabs.find(t => t.id === activeTab)?.label}
              </span>
              <p className="text-xs sm:text-sm font-medium text-[#252529]">
                {modelTabs.find(t => t.id === activeTab)?.text}
              </p>
            </div>

            {/* Model Selector Pills */}
            <div className="flex flex-wrap gap-1.5 glass-card p-1 sm:p-1.5 rounded-full border border-[#E7DDD9]">
              {modelTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[9px] sm:text-[10px] font-mono tracking-wider transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-[#B66F7D] text-white font-bold shadow-sm'
                      : 'text-[#626268] hover:text-[#252529] hover:bg-[#F7F1EE]'
                  }`}
                >
                  {tab.id}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Prompt */}
      <div ref={scrollRef} className="z-10 flex flex-col items-center gap-2 pt-2">
        <a href="#story" className="flex items-center gap-2 font-mono text-[10px] sm:text-[11px] text-[#626268] uppercase tracking-widest hover:text-[#252529] transition">
          <span>SCROLL</span>
          <FiChevronDown className="animate-bounce text-sm text-[#B66F7D]" />
          <span>DOWN</span>
        </a>
      </div>
    </section>
  );
};

Hero.propTypes = {
  onOpenPilot: PropTypes.func.isRequired,
};

export default Hero;