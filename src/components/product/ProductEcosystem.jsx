import { FiArrowUpRight, FiCheckCircle } from 'react-icons/fi';

const ProductEcosystem = () => {
  const ecosystemItems = [
    {
      title: 'Smart Mosquito Net Device',
      status: 'HARDWARE PLATFORM',
      badge: 'COMMERCIAL MVP',
      desc: 'Patent-pending smart mosquito net frame housing camera, acoustic array, and thermal sensors.',
    },
    {
      title: 'Multimodal AI Reasoning',
      status: 'CORE ENGINE',
      badge: 'OPERATIONAL',
      desc: 'Real-time signal fusion engine that decodes infant cry patterns and thermal data.',
    },
    {
      title: 'Parent Experience App',
      status: 'MOBILE INTERFACE',
      badge: 'ACTIVE COHORT',
      desc: 'Human-understandable health notification app ("Your baby may have ear pain").',
    },
    {
      title: 'Doctor B2B Platform',
      status: 'PEDIATRIC CLINIC LAYER',
      badge: 'FUTURE EXPANSION',
      desc: 'B2B platform offering continuous infant history tracking & diagnostic support tools.',
    },
    {
      title: 'Data Intelligence Monopoly',
      status: 'LICENSING LAYER',
      badge: 'FUTURE EXPANSION',
      desc: "World's largest infant intelligence dataset for predictive health insights.",
    },
  ];

  return (
    <section className="relative w-full bg-[#F7F1EE] text-[#252529] py-32 px-6 sm:px-12 border-t border-[#E7DDD9]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="pill-badge border-[#D8B9BF] bg-[#F3E9EA] text-[#B66F7D]">
              <span>05 / ECOSYSTEM & EXPANSION</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight uppercase leading-[0.95] text-[#252529]">
              INFANTMIND <span className="text-[#B66F7D]">ECOSYSTEM</span>
            </h2>
          </div>
          <p className="max-w-md text-[#626268] text-sm sm:text-base leading-relaxed">
            A modular product ecosystem designed to grow from consumer hardware to clinical pediatrician platforms.
          </p>
        </div>

        {/* Ecosystem Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ecosystemItems.map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-8 border border-[#E7DDD9] bg-[#FFFDFC] hover:border-[#D8B9BF] transition-all duration-300 space-y-6 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#B66F7D] uppercase tracking-widest border border-[#D8B9BF] bg-[#F3E9EA] px-2.5 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                  <FiArrowUpRight className="text-[#626268] group-hover:text-[#B66F7D] transition" />
                </div>

                <span className="font-mono text-xs text-[#626268] uppercase block">{item.status}</span>
                <h3 className="font-display text-2xl font-bold text-[#252529]">{item.title}</h3>
                <p className="text-[#626268] text-xs leading-relaxed">{item.desc}</p>
              </div>

              <div className="pt-4 border-t border-[#E7DDD9] flex items-center gap-2 font-mono text-[10px] text-[#626268]">
                <FiCheckCircle className="text-[#B66F7D]" />
                <span>PDF SOURCE SUPPORTED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductEcosystem;
