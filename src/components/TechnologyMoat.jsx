import { FiShield, FiCpu, FiLayers, FiLock, FiZap } from 'react-icons/fi';

const TechnologyMoat = () => {
  const pillars = [
    {
      icon: FiCpu,
      title: 'Multimodal AI System',
      badge: 'PROPRIETARY FUSION',
      description: 'Proprietary fusion of vision pose tracking, acoustic cry spectral analysis, and infrared thermal data streams.',
    },
    {
      icon: FiLayers,
      title: 'LLM-Based Reasoning',
      badge: 'PEDIATRIC LAYER',
      description: 'Context-aware interpretation layer that mimics pediatric clinical expertise to deliver human explanations.',
    },
    {
      icon: FiShield,
      title: 'Hybrid Architecture',
      badge: 'HIGH RELIABILITY',
      description: 'Rule-based medical reliability combined with data-driven machine learning scalability for high accuracy.',
    },
  ];

  const constraints = [
    { label: 'PRIVACY-FIRST', text: 'On-device processing & encrypted cloud storage', icon: FiLock },
    { label: 'LOW-POWER', text: 'Passive non-contact sensing inside mosquito net frame', icon: FiZap },
    { label: 'REAL-TIME', text: 'Sub-second cry pattern detection and thermal monitoring', icon: FiCpu },
  ];

  const dataSteps = [
    { step: '01', title: 'Research Phase', desc: 'Start with academic pediatric research & expert clinical rules.' },
    { step: '02', title: 'Consent Collection', desc: 'Gradually build proprietary dataset with parental permission.' },
    { step: '03', title: 'Monopoly Layer', desc: 'World&apos;s largest infant intelligence dataset, securely managed.' },
  ];

  return (
    <section id="moat" className="relative w-full bg-[#FBF8F5] text-[#252529] py-12 sm:py-20 md:py-32 px-4 sm:px-12 border-t border-[#E7DDD9]">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          <div className="space-y-2 sm:space-y-3">
            <div className="pill-badge border-[#E7DDD9] bg-[#F7F1EE] text-[#626268]">
              <span>05 / DEFENSIBILITY</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase leading-[0.98] text-[#252529]">
              TECHNOLOGY MOAT<br />
              <span className="text-[#626268]">& DATA STRATEGY</span>
            </h2>
          </div>
          <p className="max-w-md text-[#626268] text-xs sm:text-base leading-relaxed">
            Our proprietary multimodal architecture creates a long-term defensible barrier that competitors cannot replicate without years of data collection.
          </p>
        </div>

        {/* 3 Technical Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#E7DDD9] hover:border-[#D8B9BF] transition-all duration-300 space-y-4 sm:space-y-6 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#F3E9EA] border border-[#D8B9BF] flex items-center justify-center text-[#B66F7D] text-xl sm:text-2xl group-hover:scale-110 transition-transform">
                    <Icon />
                  </div>
                  <span className="font-mono text-[9px] sm:text-[10px] text-[#626268] tracking-widest uppercase border border-[#E7DDD9] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full">
                    {pillar.badge}
                  </span>
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#252529]">{pillar.title}</h3>
                  <p className="text-[#626268] text-xs sm:text-sm leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Infant Constraints Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#FFFDFC] border border-[#E7DDD9] shadow-sm">
          {constraints.map((c, i) => {
            const Icon = c.icon;
            return (
              <div key={i} className="flex items-start gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 rounded-xl bg-[#F7F1EE] border border-[#E7DDD9] text-[#B66F7D] text-lg sm:text-xl shrink-0">
                  <Icon />
                </div>
                <div>
                  <span className="font-mono text-[10px] sm:text-xs font-bold text-[#B66F7D] tracking-widest uppercase block mb-0.5">
                    {c.label}
                  </span>
                  <p className="text-xs text-[#626268] leading-normal">{c.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Data Strategy Block */}
        <div className="space-y-6 sm:space-y-8 pt-4 sm:pt-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E7DDD9] pb-4 sm:pb-6 gap-3">
            <div>
              <span className="font-mono text-xs text-[#B66F7D] uppercase tracking-widest">DATA STRATEGY</span>
              <h3 className="font-display text-xl sm:text-3xl font-bold text-[#252529]">Our Long-Term Advantage</h3>
            </div>
            <span className="font-mono text-[10px] sm:text-xs text-[#626268] uppercase border border-[#E7DDD9] px-3 py-1 rounded-full self-start sm:self-auto">
              DATASET MONOPOLY LAYER
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {dataSteps.map((s, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-5 sm:p-6 border border-[#E7DDD9] space-y-2 sm:space-y-3">
                <span className="font-mono text-xl sm:text-2xl font-bold text-[#B66F7D]">{s.step}</span>
                <h4 className="font-display text-base sm:text-lg font-bold text-[#252529]">{s.title}</h4>
                <p className="text-[#626268] text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#F7F1EE] border border-[#E7DDD9] text-center">
            <p className="font-mono text-[10px] sm:text-xs text-[#626268] uppercase tracking-widest">
              &quot;This dataset becomes our long-term monopoly layer — impossible for competitors to replicate without years of consented infant data collection.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyMoat;
