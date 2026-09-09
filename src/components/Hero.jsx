import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiArrowUpRight, FiChevronDown } from 'react-icons/fi';
import gsap from 'gsap';

const Hero = ({ onOpenPilot }) => {
  const [activeTab, setActiveTab] = useState('UNDERSTAND');
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);

  const modelTabs = [
    { id: 'UNDERSTAND', label: '01 / UNDERSTAND', text: 'Decodes infant cries into actionable health insights' },
    { id: 'TECHNOLOGY', label: '02 / TECHNOLOGY', text: 'Smart mosquito net embedded with vision, thermal & acoustic sensors' },
    { id: 'AI', label: '03 / MULTIMODAL AI', text: 'LLM reasoning engine with pediatric context awareness' },
    { id: 'SAFETY', label: '04 / SAFETY', text: 'Privacy-first, low-power, edge processing architecture' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
      });
      gsap.from(imageRef.current, {
        scale: 0.95,
        opacity: 0,
        duration: 1.4,
        delay: 0.3,
        ease: 'power2.out',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen w-full bg-[#07080a] text-white pt-36 pb-20 px-6 sm:px-12 flex flex-col justify-between overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Hero Header & Title Block */}
      <div className="max-w-7xl mx-auto w-full z-10 text-center flex flex-col items-center">
        {/* Diamond Subtitle Pill */}
        <div className="pill-badge mb-6 border-white/10 bg-white/[0.03]">
          <span className="text-rose-500 text-xs">◆</span>
          <span>EVERY CRY HAS A MEANING — WE DECODE IT</span>
          <span className="text-rose-500 text-xs">◆</span>
        </div>

        {/* Main Display Title */}
        <div ref={titleRef} className="space-y-3 max-w-4xl">
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-bold tracking-tight uppercase leading-[0.9]">
            INFANTMIND
          </h1>
          <p className="font-mono text-sm sm:text-base text-slate-400 uppercase tracking-widest pt-2">
            AI-Powered Baby Understanding System
          </p>
        </div>

        {/* Action Button & Sub-text */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={onOpenPilot}
            className="px-7 py-3.5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-rose-500 hover:text-white transition-all duration-300 shadow-xl group"
          >
            <span>Explore InfantMind</span>
            <FiArrowUpRight className="text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          <span className="text-xs text-slate-500 font-mono">
            Smart Mosquito Net Platform • Patent Pending
          </span>
        </div>
      </div>

      {/* Hero Visual Container */}
      <div className="max-w-6xl mx-auto w-full z-10 mt-12 mb-8">
        <div ref={imageRef} className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0c0d10] shadow-2xl group">
          <img
            src="/img/hero-net.jpg"
            alt="InfantMind Smart Mosquito Net System"
            className="w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-transparent to-transparent opacity-80" />

          {/* Active Model Indicator Tag */}
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div className="glass-card rounded-2xl p-4 sm:p-6 max-w-md border border-white/10">
              <span className="font-mono text-[10px] text-rose-400 uppercase tracking-widest block mb-1">
                {modelTabs.find(t => t.id === activeTab)?.label}
              </span>
              <p className="text-sm font-medium text-slate-200">
                {modelTabs.find(t => t.id === activeTab)?.text}
              </p>
            </div>

            {/* Model Selector Pills (Bottom Right) */}
            <div className="flex flex-wrap gap-2 glass-card p-1.5 rounded-full border border-white/10">
              {modelTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3.5 py-1.5 rounded-full text-[10px] font-mono tracking-wider transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-rose-500 text-white font-bold shadow-lg'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
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
      <div className="z-10 flex flex-col items-center gap-2 pt-4">
        <a href="#story" className="flex items-center gap-2 font-mono text-[11px] text-slate-500 uppercase tracking-widest hover:text-slate-300 transition">
          <span>SCROLL</span>
          <FiChevronDown className="animate-bounce text-sm text-rose-500" />
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