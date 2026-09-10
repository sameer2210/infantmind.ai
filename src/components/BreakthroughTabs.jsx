import { useState } from 'react';
import { FiCpu, FiCheck } from 'react-icons/fi';

const BreakthroughTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const stages = [
    {
      num: '01',
      title: 'Hardware Platform',
      tagline: 'Smart Mosquito Net Integration',
      description: 'Camera, directional microphone array, and non-contact thermal sensor embedded seamlessly into the mosquito net frame.',
      image: '/img/hardware-platform.jpg',
      specs: [
        '12MP High-sensitivity optical camera',
        'Multi-mic directional acoustic array',
        'Infrared non-contact thermal sensor',
        'Controlled mosquito net environment',
      ],
      output: 'Raw Sensor Stream Synced',
    },
    {
      num: '02',
      title: 'Multimodal AI',
      tagline: 'Real-time Signal Fusion',
      description: 'Video tracking, acoustic cry spectrum, and thermal data streams fused together for comprehensive multi-sensory analysis.',
      image: '/img/multimodal-ai.jpg',
      specs: [
        'Behavioral pose landmark tracking',
        'Acoustic emotion & cry pattern model',
        'Continuous thermal micro-fluctuation map',
        'Synchronized multi-signal data pipeline',
      ],
      output: 'Multimodal Feature Vector',
    },
    {
      num: '03',
      title: 'LLM Reasoning Engine',
      tagline: 'Context-Aware Clinical Logic',
      description: 'Human-like explanation engine that combines research-backed pediatric rules with data-driven AI models.',
      image: '/img/hero-net.jpg',
      specs: [
        'Pediatric symptom mapping rules',
        'Confidence level calculation layer',
        'Hybrid rule-based + ML engine',
        'Context-aware condition synthesis',
      ],
      output: 'Reasoning Engine Evaluated',
    },
    {
      num: '04',
      title: 'Parent Output',
      tagline: 'Human-Understandable Insight',
      description: '&quot;Your baby may have ear pain&quot; — actionable, empathetic clarity for parents instead of confusing raw charts.',
      image: '/img/parent-insight.jpg',
      specs: [
        'Actionable health insights',
        'Clear confidence score display',
        'Guideline recommendations',
        'Direct pediatrician export option',
      ],
      output: '"Your baby may have ear pain"',
    },
  ];

  return (
    <section id="breakthrough" className="relative w-full bg-[#0c0d10] text-white py-12 sm:py-20 md:py-32 px-4 sm:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-16">
        {/* Section Header */}
        <div className="space-y-2 sm:space-y-3">
          <div className="pill-badge border-rose-500/20 bg-rose-500/5 text-rose-400">
            <span>04 / SYSTEM ARCHITECTURE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase leading-[0.98] text-white">
            OUR BREAKTHROUGH:<br />
            <span className="text-slate-400">AI INSIDE A SMART MOSQUITO NET</span>
          </h2>
          <p className="max-w-2xl text-slate-400 text-xs sm:text-base leading-relaxed">
            The world&apos;s first 4-stage pipeline that transforms raw environmental and physiological signals into meaningful infant insights.
          </p>
        </div>

        {/* Interactive Tab Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Vertical Feature Selector Tabs */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-2.5 sm:space-y-3">
            {stages.map((stage, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={stage.num}
                  onClick={() => setActiveTab(idx)}
                  className={`relative text-left p-4 sm:p-6 rounded-xl sm:rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? 'bg-[#121316] border-rose-500/50 shadow-xl'
                      : 'bg-[#07080a]/50 border-white/5 hover:border-white/20 hover:bg-[#121316]/50'
                  }`}
                >
                  {/* Left Active Line */}
                  {isActive && <div className="tab-indicator rounded-full" />}

                  <div className="flex items-center justify-between mb-1 sm:mb-2">
                    <span className={`font-mono text-[10px] sm:text-xs font-bold tracking-widest ${isActive ? 'text-rose-400' : 'text-slate-500'}`}>
                      STAGE {stage.num}
                    </span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />}
                  </div>

                  <h3 className="font-display text-base sm:text-xl font-bold text-white tracking-wide">{stage.title}</h3>
                  <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 font-mono">{stage.tagline}</p>
                </button>
              );
            })}
          </div>

          {/* Right Dynamic Viewport */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative flex-1 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-[#07080a] shadow-2xl flex flex-col justify-between p-5 sm:p-8">
              {/* Active Image Background */}
              <div className="relative w-full h-[220px] sm:h-[320px] rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-6 border border-white/10">
                <img
                  src={stages[activeTab].image}
                  alt={stages[activeTab].title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center transition-all duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-transparent to-transparent opacity-80" />

                {/* Output Badge */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 glass-card px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FiCpu className="text-rose-400 text-sm sm:text-base" />
                    <span className="font-mono text-[10px] sm:text-xs text-slate-300">OUTPUT:</span>
                  </div>
                  <span className="font-display text-xs sm:text-sm font-bold text-white text-right">
                    {stages[activeTab].output}
                  </span>
                </div>
              </div>

              {/* Active Content Description & Specs */}
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="font-display text-lg sm:text-2xl font-bold text-white mb-1.5">
                    {stages[activeTab].title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {stages[activeTab].description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-3 sm:pt-4 border-t border-white/10">
                  {stages[activeTab].specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 font-mono text-[11px] sm:text-xs text-slate-400">
                      <FiCheck className="text-rose-400 text-sm shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreakthroughTabs;
