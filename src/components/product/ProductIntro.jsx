import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiCheckCircle } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const ProductIntro = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.intro-text', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="product-intro" ref={containerRef} className="relative w-full bg-[#0c0d10] text-white py-32 px-6 sm:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="pill-badge border-rose-500/20 bg-rose-500/5 text-rose-400">
              <span>01 / PRODUCT PHILOSOPHY</span>
            </div>
            <h2 className="intro-text font-display text-4xl sm:text-6xl font-bold tracking-tight uppercase leading-[0.95] text-white">
              UNDERSTANDING YOUR BABY,<br />
              <span className="text-rose-500">BEYOND MONITORING.</span>
            </h2>
          </div>
          <p className="intro-text max-w-md text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
            Traditional monitors output endless feeds and raw noise alerts. InfantMind combines multi-sensory physical data streams into human-like health clarity.
          </p>
        </div>

        {/* 2-Column Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-card rounded-3xl p-8 border border-white/10 space-y-6">
              <h3 className="font-display text-2xl font-bold text-white">Multimodal Signal Fusion</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                By housing optical vision, acoustic spectrum analysis, and non-contact thermal sensing inside a controlled mosquito net frame, InfantMind removes environmental clutter and captures true infant state signals.
              </p>

              <div className="space-y-3 pt-4 border-t border-white/10 font-mono text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-rose-400 text-base shrink-0" />
                  <span>Optical Pose Landmark Tracking (Behavioral changes)</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-rose-400 text-base shrink-0" />
                  <span>Acoustic Frequency Model (Cry pattern & emotion analysis)</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-rose-400 text-base shrink-0" />
                  <span>Infrared Micro-Thermal Map (Physical comfort & temperature)</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-rose-400 text-base shrink-0" />
                  <span>LLM Context Reasoning (Human explanation synthesis)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#07080a] shadow-2xl group">
              <img
                src="/img/multimodal-ai.jpg"
                alt="InfantMind Multimodal Fusion"
                className="w-full h-[450px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d10] via-transparent to-transparent opacity-70" />
              <div className="absolute top-6 left-6 pill-badge border-white/10 bg-white/5 text-slate-300">
                <span>SIGNAL PIPELINE V1.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductIntro;
