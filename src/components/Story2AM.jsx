import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Story2AM = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        scale: 0.95,
        opacity: 0,
        duration: 1.2,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="story" ref={sectionRef} className="relative w-full bg-[#0c0d10] text-white py-32 px-6 sm:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Editorial Text Block */}
        <div ref={textRef} className="lg:col-span-6 space-y-8">
          <div className="pill-badge border-rose-500/20 bg-rose-500/5 text-rose-400">
            <span>02 / THE REAL PROBLEM</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight uppercase leading-[0.95] text-white">
            THE 2 AM MOMENT<br />
            <span className="text-slate-400">EVERY PARENT DREADS</span>
          </h2>

          <div className="space-y-6 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            <p className="border-l-2 border-rose-500 pl-4 py-1 text-white font-medium">
              It&apos;s 2 AM. Your baby is crying uncontrollably. You&apos;ve tried everything — feeding, rocking, checking temperature. Nothing works.
            </p>
            <p>
              The core issue isn&apos;t lack of care — <strong className="text-white font-semibold">it&apos;s lack of understanding</strong>.
            </p>
            <p className="text-slate-400 text-sm sm:text-base">
              Babies cannot communicate their needs verbally, leaving parents guessing, fatigued, and anxious in high-stress moments.
            </p>
          </div>

          <div className="pt-4 grid grid-cols-2 gap-4 border-t border-white/10 font-mono text-xs text-slate-400">
            <div>
              <span className="text-rose-400 font-bold block text-base mb-1">01 / GUESSWORK</span>
              <span>Trial-and-error causes prolonged distress</span>
            </div>
            <div>
              <span className="text-rose-400 font-bold block text-base mb-1">02 / ANXIETY</span>
              <span>Parents lack actionable health clarity</span>
            </div>
          </div>
        </div>

        {/* Right Large Image Frame */}
        <div ref={imageRef} className="lg:col-span-6">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#121316] shadow-2xl group">
            <img
              src="/img/2am-moment.jpg"
              alt="The 2 AM Moment Parent & Baby"
              className="w-full h-[450px] sm:h-[550px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d10] via-transparent to-transparent opacity-60" />

            <div className="absolute bottom-6 left-6 right-6 glass-card p-4 rounded-2xl border border-white/10 flex items-center justify-between">
              <div>
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block">INFANT DISTRESS TIME</span>
                <span className="font-display text-sm font-bold text-white">02:14 AM • UNRESOLVED CRY</span>
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story2AM;
