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
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      });
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        scale: 0.97,
        opacity: 0,
        duration: 1.0,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="story" ref={sectionRef} className="relative w-full bg-[#F7F1EE] text-[#252529] py-12 sm:py-20 md:py-32 px-4 sm:px-12 border-t border-[#E7DDD9]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        {/* Left Editorial Text Block */}
        <div ref={textRef} className="lg:col-span-6 space-y-6 sm:space-y-8">
          <div className="pill-badge border-[#D8B9BF] bg-[#F3E9EA] text-[#B66F7D]">
            <span>02 / THE REAL PROBLEM</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase leading-[0.98] text-[#252529]">
            THE 2 AM MOMENT<br />
            <span className="text-[#626268]">EVERY PARENT DREADS</span>
          </h2>

          <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-[#626268] font-normal leading-relaxed">
            <p className="border-l-2 border-[#B66F7D] pl-4 py-1 text-[#252529] font-medium">
              It&apos;s 2 AM. Your baby is crying uncontrollably. You&apos;ve tried everything — feeding, rocking, checking temperature. Nothing works.
            </p>
            <p>
              The core issue isn&apos;t lack of care — <strong className="text-[#252529] font-semibold">it&apos;s lack of understanding</strong>.
            </p>
            <p className="text-[#626268] text-xs sm:text-sm">
              Babies cannot communicate their needs verbally, leaving parents guessing, fatigued, and anxious in high-stress moments.
            </p>
          </div>

          <div className="pt-3 sm:pt-4 grid grid-cols-2 gap-4 border-t border-[#E7DDD9] font-mono text-xs text-[#626268]">
            <div>
              <span className="text-[#B66F7D] font-bold block text-sm sm:text-base mb-0.5">01 / GUESSWORK</span>
              <span>Trial-and-error causes prolonged distress</span>
            </div>
            <div>
              <span className="text-[#B66F7D] font-bold block text-sm sm:text-base mb-0.5">02 / ANXIETY</span>
              <span>Parents lack actionable health clarity</span>
            </div>
          </div>
        </div>

        {/* Right Image Frame */}
        <div ref={imageRef} className="lg:col-span-6">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E7DDD9] bg-[#FFFDFC] shadow-md group">
            <video
              src="/videos/2am story.mp4"
              poster="/img/2am-moment.jpg"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[280px] sm:h-[450px] md:h-[550px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#F7F1EE]/80 via-transparent to-transparent opacity-60" />

            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 glass-card p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-[#E7DDD9] flex items-center justify-between">
              <div>
                <span className="font-mono text-[9px] sm:text-[10px] text-[#626268] uppercase tracking-widest block">INFANT DISTRESS TIME</span>
                <span className="font-display text-xs sm:text-sm font-bold text-[#252529]">02:14 AM • UNRESOLVED CRY</span>
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-[#B66F7D] animate-ping" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story2AM;
