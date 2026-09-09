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
          start: 'top 70%',
        },
        y: 30,
        opacity: 0,
        stagger: 0.15,
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
    <section id="redefining" ref={sectionRef} className="relative w-full bg-[#07080a] text-white py-32 px-6 sm:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="pill-badge border-white/10 bg-white/[0.03] text-slate-300">
              <span>03 / MARKET GAPS</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight uppercase leading-[0.95] text-white">
              REDEFINING<br />
              <span className="text-slate-400">BABY CARE</span>
            </h2>
          </div>
          <p className="max-w-md text-slate-400 text-sm sm:text-base font-normal leading-relaxed">
            Current solutions offer partial fragments of data, but fail to explain what your infant is actually experiencing.
          </p>
        </div>

        {/* 2-Column Split: Left Visual Frame, Right Stacked Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual Frame */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0c0d10] shadow-2xl group">
              <img
                src="/img/multimodal-ai.jpg"
                alt="Multimodal Sensor Signal Fusion"
                className="w-full h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-transparent to-transparent opacity-70" />

              <div className="absolute top-6 left-6 pill-badge border-rose-500/30 bg-rose-500/10 text-rose-400">
                <span>SIGNAL FUSION ARCHITECTURE</span>
              </div>
            </div>
          </div>

          {/* Right Comparison Feature Cards */}
          <div className="lg:col-span-6 space-y-4">
            {solutions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="comparison-card glass-card rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 flex items-start gap-5"
                >
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-rose-400 text-xl shrink-0">
                    <Icon />
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-lg font-bold text-white tracking-wide">{item.title}</h3>
                      <span className="inline-flex items-center gap-1 font-mono text-[10px] text-rose-400/80 uppercase">
                        <FiXCircle /> {item.limitation}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              );
            })}

            {/* Dominant InfantMind Statement Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-rose-500/20 via-rose-500/10 to-transparent border border-rose-500/30 space-y-2 mt-6">
              <div className="flex items-center gap-2 font-mono text-xs text-rose-400 uppercase tracking-widest">
                <FiCheckCircle className="text-rose-400 text-base" />
                <span>THE INFANTMIND DIFFERENCE</span>
              </div>
              <h4 className="font-display text-xl sm:text-2xl font-bold text-white leading-snug">
                &quot;No existing product answers the critical question: <span className="text-rose-400">Why is my baby crying?</span>&quot;
              </h4>
              <p className="font-mono text-sm uppercase text-slate-300 font-bold tracking-wider pt-2">
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
