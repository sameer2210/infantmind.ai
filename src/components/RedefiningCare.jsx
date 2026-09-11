import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiVideo, FiMic, FiActivity, FiXCircle, FiCheckCircle } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const RedefiningCare = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.comparison-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const solutions = [
    {
      title: 'CAMERAS',
      icon: FiVideo,
      text: 'Provide visual information without context or interpretation.',
      limitation: 'Only raw video feeds',
    },
    {
      title: 'AUDIO MONITORS',
      icon: FiMic,
      text: 'Capture sound but cannot explain why the baby is crying.',
      limitation: 'No acoustic reasoning',
    },
    {
      title: 'WEARABLES',
      icon: FiActivity,
      text: 'Measure limited signals but lack holistic behavioral understanding.',
      limitation: 'Invasive skin sensors',
    },
  ];

  return (
    <section id="redefining" ref={sectionRef} className="relative w-full bg-[#FBF8F5] text-[#252529] py-12 sm:py-20 md:py-32 px-4 sm:px-12 border-t border-[#E7DDD9]">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-16">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          <div className="space-y-2 sm:space-y-3">
            <div className="pill-badge border-[#E7DDD9] bg-[#F7F1EE] text-[#626268]">
              <span>03 / MARKET GAPS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase leading-[0.98] text-[#252529]">
              REDEFINING<br />
              <span className="text-[#626268]">BABY CARE</span>
            </h2>
          </div>
          <p className="max-w-md text-[#626268] text-xs sm:text-base font-normal leading-relaxed">
            Current solutions offer partial fragments of data, but fail to explain what your infant is actually experiencing.
          </p>
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Visual Frame */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E7DDD9] bg-[#FFFDFC] shadow-md group">
              <img
                src="/img/multimodal-ai.jpg"
                alt="Multimodal AI fusing optical video, cry acoustics, and thermal readings"
                loading="lazy"
                decoding="async"
                className="w-full h-[260px] sm:h-[400px] md:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FBF8F5]/80 via-transparent to-transparent opacity-70" />

              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 pill-badge border-[#D8B9BF] bg-[#F3E9EA] text-[#B66F7D]">
                <span>SIGNAL FUSION ARCHITECTURE</span>
              </div>
            </div>
          </div>

          {/* Right Comparison Feature Cards */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-4">
            {solutions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="comparison-card glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-[#E7DDD9] hover:border-[#D8B9BF] transition-all duration-300 flex items-start gap-4 sm:gap-5"
                >
                  <div className="p-2.5 sm:p-3 rounded-xl bg-[#F7F1EE] border border-[#E7DDD9] text-[#B66F7D] text-lg sm:text-xl shrink-0">
                    <Icon />
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-base sm:text-lg font-bold text-[#252529] tracking-wide">{item.title}</h3>
                      <span className="inline-flex items-center gap-1 font-mono text-[9px] sm:text-[10px] text-[#A96767] uppercase">
                        <FiXCircle /> {item.limitation}
                      </span>
                    </div>
                    <p className="text-[#626268] text-xs sm:text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              );
            })}

            {/* Dominant InfantMind Statement Banner */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#F3E9EA] border border-[#D8B9BF] space-y-2 mt-4 sm:mt-6">
              <div className="flex items-center gap-2 font-mono text-xs text-[#B66F7D] uppercase tracking-widest">
                <FiCheckCircle className="text-[#B66F7D] text-base" />
                <span>THE INFANTMIND DIFFERENCE</span>
              </div>
              <h4 className="font-display text-lg sm:text-2xl font-bold text-[#252529] leading-snug">
                &quot;No existing product answers the critical question: <span className="text-[#B66F7D]">Why is my baby crying?</span>&quot;
              </h4>
              <p className="font-mono text-xs sm:text-sm uppercase text-[#626268] font-bold tracking-wider pt-1">
                OTHERS MONITOR. WE UNDERSTAND.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RedefiningCare;
