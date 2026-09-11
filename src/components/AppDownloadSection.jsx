import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiCpu, FiHeart, FiSmartphone } from 'react-icons/fi';
import { FaApple, FaGooglePlay } from 'react-icons/fa6';

gsap.registerPlugin(ScrollTrigger);

// Production download URLs (set when published on App Store / Google Play)
const APP_STORE_URL = null;
const GOOGLE_PLAY_URL = null;

const AppDownloadSection = () => {
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
        y: 25,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      });

      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        scale: 0.96,
        y: 30,
        opacity: 0,
        duration: 1.0,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: FiCpu,
      title: 'AI-Powered Insights',
      desc: "Understand meaningful patterns from your baby's signals.",
    },
    {
      icon: FiHeart,
      title: 'Personalized Care',
      desc: "Keep your baby's information and insights organized in one place.",
    },
    {
      icon: FiSmartphone,
      title: 'Stay Connected',
      desc: 'Access your InfantMind experience wherever you are.',
    },
  ];

  return (
    <section
      id="mobile-app"
      ref={sectionRef}
      className="relative w-full bg-[#F7F1EE] text-[#252529] py-12 sm:py-20 md:py-32 px-4 sm:px-12 border-t border-[#E7DDD9]"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Left Column: Editorial & Features & Download Actions */}
        <div ref={textRef} className="lg:col-span-7 space-y-6 sm:space-y-8">
          <div className="pill-badge border-[#D8B9BF] bg-[#F3E9EA] text-[#B66F7D]">
            <span>INFANTMIND MOBILE APP</span>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase leading-[0.98] text-[#252529]">
              Your baby&apos;s world,<br />
              <span className="text-[#B66F7D]">in your hands.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#626268] font-normal leading-relaxed max-w-xl">
              Stay connected to your baby&apos;s care with the InfantMind app. Explore AI-powered insights, understand patterns, and keep important information close wherever you are.
            </p>
          </div>

          {/* 3 Feature Points */}
          <div className="space-y-3.5 sm:space-y-4 pt-1 sm:pt-2">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-start gap-3.5 sm:gap-4 group">
                  <div className="p-2.5 rounded-xl bg-[#F3E9EA] border border-[#D8B9BF] text-[#B66F7D] text-lg shrink-0 mt-0.5 group-hover:bg-[#B66F7D] group-hover:text-[#FFFDFC] transition-colors duration-300">
                    <Icon />
                  </div>
                  <div>
                    <h3 className="font-display text-sm sm:text-base font-bold text-[#252529]">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#626268] leading-relaxed">
                      &quot;{item.desc}&quot;
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Download CTAs */}
          <div className="pt-3 sm:pt-5 space-y-3 border-t border-[#E7DDD9]">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 max-w-md sm:max-w-none">
              {/* App Store Action */}
              {APP_STORE_URL ? (
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-[#252529] text-[#FFFDFC] hover:bg-[#38383E] transition-all duration-300 shadow-sm group font-medium text-sm border border-transparent"
                  aria-label="Download InfantMind on the App Store"
                >
                  <FaApple className="text-xl text-[#FFFDFC] group-hover:scale-105 transition-transform" />
                  <div className="text-left leading-tight">
                    <span className="block text-[10px] text-[#A1A1A6] uppercase tracking-wider font-mono">Download on the</span>
                    <span className="block text-sm font-semibold tracking-tight">App Store</span>
                  </div>
                </a>
              ) : (
                <div
                  className="inline-flex items-center justify-between sm:justify-center gap-3.5 px-5 py-3.5 rounded-xl bg-[#FFFDFC] border border-[#E7DDD9] text-[#252529] shadow-xs select-none opacity-95 transition-all duration-300 min-h-[52px]"
                  role="button"
                  aria-disabled="true"
                  tabIndex={0}
                >
                  <div className="flex items-center gap-3">
                    <FaApple className="text-xl text-[#252529]" />
                    <div className="text-left leading-tight">
                      <span className="block text-[10px] text-[#626268] uppercase tracking-wider font-mono">iOS App</span>
                      <span className="block text-sm font-semibold text-[#252529]">Download on App Store</span>
                    </div>
                  </div>
                  <span className="pill-badge border-[#D8B9BF] bg-[#F3E9EA] text-[#B66F7D] text-[10px] font-mono py-0.5 px-2 font-semibold shrink-0">
                    COMING SOON
                  </span>
                </div>
              )}

              {/* Google Play Action */}
              {GOOGLE_PLAY_URL ? (
                <a
                  href={GOOGLE_PLAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-[#252529] text-[#FFFDFC] hover:bg-[#38383E] transition-all duration-300 shadow-sm group font-medium text-sm border border-transparent"
                  aria-label="Get InfantMind on Google Play"
                >
                  <FaGooglePlay className="text-lg text-[#FFFDFC] group-hover:scale-105 transition-transform" />
                  <div className="text-left leading-tight">
                    <span className="block text-[10px] text-[#A1A1A6] uppercase tracking-wider font-mono">GET IT ON</span>
                    <span className="block text-sm font-semibold tracking-tight">Google Play</span>
                  </div>
                </a>
              ) : (
                <div
                  className="inline-flex items-center justify-between sm:justify-center gap-3.5 px-5 py-3.5 rounded-xl bg-[#FFFDFC] border border-[#E7DDD9] text-[#252529] shadow-xs select-none opacity-95 transition-all duration-300 min-h-[52px]"
                  role="button"
                  aria-disabled="true"
                  tabIndex={0}
                >
                  <div className="flex items-center gap-3">
                    <FaGooglePlay className="text-lg text-[#252529]" />
                    <div className="text-left leading-tight">
                      <span className="block text-[10px] text-[#626268] uppercase tracking-wider font-mono">Android App</span>
                      <span className="block text-sm font-semibold text-[#252529]">Get it on Google Play</span>
                    </div>
                  </div>
                  <span className="pill-badge border-[#D8B9BF] bg-[#F3E9EA] text-[#B66F7D] text-[10px] font-mono py-0.5 px-2 font-semibold shrink-0">
                    COMING SOON
                  </span>
                </div>
              )}
            </div>

            <p className="font-mono text-[11px] sm:text-xs text-[#8C8C91] tracking-wide pt-1">
              Available wherever your InfantMind experience goes.
            </p>
          </div>
        </div>

        {/* Right Column: App Screenshot Showcase */}
        <div ref={imageRef} className="lg:col-span-5 flex justify-center items-center">
          <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none rounded-3xl p-6 sm:p-10 bg-gradient-to-b from-[#FFFDFC] via-[#FBF8F5] to-[#F3E9EA]/60 border border-[#E7DDD9] shadow-xl shadow-[#252529]/5 flex flex-col items-center justify-center overflow-hidden group">
            {/* Soft Warm Radial Glow Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-[#B66F7D]/10 blur-3xl pointer-events-none" />
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[#D8B9BF]/25 blur-2xl pointer-events-none" />

            {/* App Screenshot Presentation */}
            <div className="relative z-10 w-full flex justify-center items-center py-2">
              <img
                src="/img/babyapp.png"
                alt="InfantMind mobile app interface displaying real-time AI baby understanding insights"
                loading="lazy"
                decoding="async"
                className="w-auto h-auto max-w-[70%] sm:max-w-[65%] lg:max-w-[75%] max-h-[460px] sm:max-h-[540px] object-contain drop-shadow-xl group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
            </div>

            {/* Product Ecosystem Tag */}
            <div className="relative z-10 mt-4 px-4 py-2 rounded-full border border-[#E7DDD9] bg-[#FFFDFC]/90 text-center shadow-xs">
              <span className="font-mono text-[10px] sm:text-xs font-semibold text-[#626268] tracking-wider uppercase">
                SMART CRADLE • AI SYSTEM • MOBILE APP
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
