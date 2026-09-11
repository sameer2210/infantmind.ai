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
    <section id="product-intro" ref={containerRef} className="relative w-full bg-[#F7F1EE] text-[#252529] py-32 px-6 sm:px-12 border-t border-[#E7DDD9]">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="pill-badge border-[#D8B9BF] bg-[#F3E9EA] text-[#B66F7D]">
              <span>01 / PRODUCT PHILOSOPHY</span>
            </div>
            <h2 className="intro-text font-display text-4xl sm:text-6xl font-bold tracking-tight uppercase leading-[0.95] text-[#252529]">
              UNDERSTANDING YOUR BABY,<br />
              <span className="text-[#B66F7D]">BEYOND MONITORING.</span>
            </h2>
          </div>
          <p className="intro-text max-w-md text-[#626268] text-sm sm:text-base leading-relaxed font-normal">
            Traditional monitors output endless feeds and raw noise alerts. InfantMind combines multi-sensory physical data streams into human-like health clarity.
          </p>
        </div>

        {/* 2-Column Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-card rounded-3xl p-8 border border-[#E7DDD9] bg-[#FFFDFC] space-y-6">
              <h3 className="font-display text-2xl font-bold text-[#252529]">Multimodal Signal Fusion</h3>
              <p className="text-[#626268] text-sm leading-relaxed">
                By housing optical vision, acoustic spectrum analysis, and non-contact thermal sensing inside a controlled mosquito net frame, InfantMind removes environmental clutter and captures true infant state signals.
              </p>

              <div className="space-y-3 pt-4 border-t border-[#E7DDD9] font-mono text-xs text-[#626268]">
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-[#B66F7D] text-base shrink-0" />
                  <span>Optical Pose Landmark Tracking (Behavioral changes)</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-[#B66F7D] text-base shrink-0" />
                  <span>Acoustic Frequency Model (Cry pattern & emotion analysis)</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-[#B66F7D] text-base shrink-0" />
                  <span>Infrared Micro-Thermal Map (Physical comfort & temperature)</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-[#B66F7D] text-base shrink-0" />
                  <span>LLM Context Reasoning (Human explanation synthesis)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-[#E7DDD9] bg-[#FFFDFC] shadow-md group">
              <img
                src="/img/multimodal-ai.jpg"
                alt="InfantMind Multimodal Fusion"
                className="w-full h-[450px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F7F1EE]/80 via-transparent to-transparent opacity-70" />
              <div className="absolute top-6 left-6 pill-badge border-[#E7DDD9] bg-[#F7F1EE] text-[#626268]">
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
