import { FiCpu, FiZap, FiLock, FiLayers } from 'react-icons/fi';

const ProductHighlights = () => {
  const highlights = [
    {
      icon: FiCpu,
      title: 'MULTIMODAL AI',
      subtitle: 'Signal Integration',
      desc: 'Fuses optical pose, acoustic cry analysis, and non-contact thermal data.',
    },
    {
      icon: FiZap,
      title: 'REAL-TIME',
      subtitle: 'Sub-Second Detection',
      desc: 'Sub-second pattern recognition and thermal micro-fluctuation tracking.',
    },
    {
      icon: FiLock,
      title: 'PRIVACY-FIRST',
      subtitle: 'On-Device Edge Compute',
      desc: 'Local edge processing with parent-controlled encrypted cloud streams.',
    },
    {
      icon: FiLayers,
      title: 'LLM REASONING',
      subtitle: 'Clinical Logic Layer',
      desc: 'Pediatric context engine translating multi-sensor data into human clarity.',
    },
  ];

  return (
    <section className="relative w-full bg-[#FBF8F5] text-[#252529] py-20 px-6 sm:px-12 border-t border-[#E7DDD9]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <div
                key={i}
                className="glass-card rounded-3xl p-8 border border-[#E7DDD9] bg-[#FFFDFC] hover:border-[#D8B9BF] transition-all duration-300 space-y-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F3E9EA] border border-[#D8B9BF] flex items-center justify-center text-[#B66F7D] text-2xl group-hover:scale-110 transition-transform">
                  <Icon />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#B66F7D] uppercase tracking-widest block mb-1">
                    {h.subtitle}
                  </span>
                  <h3 className="font-display text-xl font-bold text-[#252529] mb-2">{h.title}</h3>
                  <p className="text-[#626268] text-xs leading-relaxed">{h.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;
