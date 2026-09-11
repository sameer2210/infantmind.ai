import { useRef } from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const MarketEconomics = () => {
  const sectionRef = useRef(null);

  const stats = [
    { value: '$100B+', label: 'GLOBAL BABY CARE MARKET', sub: 'Massive addressable market with growing tech adoption' },
    { value: '2.5M', label: 'ANNUAL BIRTHS (INDIA)', sub: 'Target 1% market capture = 25,000 active users' },
    { value: '10X', label: 'AI HEALTHCARE GROWTH', sub: 'Rapid adoption of AI reasoning in pediatric care' },
  ];

  const models = [
    {
      num: '01',
      title: 'Hardware Sale',
      price: '₹10,000–₹15,000',
      detail: 'Manufacturing: ₹3,000–₹4,000',
      margin: '60%+ Gross Margin',
    },
    {
      num: '02',
      title: 'Monthly Subscription',
      price: '₹299–₹499/mo',
      detail: 'Annual ARPU: ₹3,600–₹6,000',
      margin: 'Recurring High-Margin SaaS',
    },
    {
      num: '03',
      title: 'Doctor Platform',
      price: 'B2B Offering',
      detail: 'Continuous baby history tracking',
      margin: 'Diagnostic Support Tools',
    },
    {
      num: '04',
      title: 'Data Intelligence',
      price: 'Licensing Layer',
      detail: 'Predictive health insights',
      margin: 'Global Expansion Potential',
    },
  ];

  const projections = [
    { year: 'Year 1', amount: '₹5 Cr', height: 'h-12 sm:h-16' },
    { year: 'Year 3', amount: '₹50 Cr', height: 'h-24 sm:h-36' },
    { year: 'Year 5', amount: '₹300+ Cr', height: 'h-36 sm:h-56' },
  ];

  return (
    <section id="market" ref={sectionRef} className="relative w-full bg-[#F7F1EE] text-[#252529] py-12 sm:py-20 md:py-32 px-4 sm:px-12 border-t border-[#E7DDD9]">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-20">
        {/* Section Header */}
        <div className="space-y-2 sm:space-y-3">
          <div className="pill-badge border-[#D8B9BF] bg-[#F3E9EA] text-[#B66F7D]">
            <span>06 / MARKET & ECONOMICS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase leading-[0.98] text-[#252529]">
            MARKET OPPORTUNITY<br />
            <span className="text-[#626268]">& BUSINESS MODEL</span>
          </h2>
          <p className="max-w-xl text-[#626268] text-xs sm:text-base leading-relaxed">
            Positioned at the intersection of three megatrends: <strong className="text-[#252529]">AI + HealthTech + BabyTech</strong>.
          </p>
        </div>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#E7DDD9] hover:border-[#D8B9BF] transition-all duration-300 space-y-3 sm:space-y-4"
            >
              <span className="font-mono text-[10px] sm:text-xs text-[#B66F7D] uppercase tracking-widest block">{stat.label}</span>
              <div className="font-display text-4xl sm:text-6xl font-bold text-[#B66F7D] tracking-tight">{stat.value}</div>
              <p className="text-[#626268] text-xs leading-relaxed">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Business Model Panels */}
        <div className="space-y-6 sm:space-y-8">
          <div className="border-b border-[#E7DDD9] pb-4 sm:pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#252529]">Unit Economics & Monetization Streams</h3>
            <span className="font-mono text-[10px] sm:text-xs text-[#626268] uppercase border border-[#E7DDD9] px-3 py-1 rounded-full self-start sm:self-auto">
              4 HYBRID REVENUE STREAMS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {models.map((m) => (
              <div key={m.num} className="glass-card rounded-2xl p-5 sm:p-6 border border-[#E7DDD9] space-y-3 sm:space-y-4 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] sm:text-xs font-bold text-[#B66F7D] block mb-1">STREAM {m.num}</span>
                  <h4 className="font-display text-base sm:text-xl font-bold text-[#252529] mb-1.5">{m.title}</h4>
                  <div className="font-mono text-base sm:text-lg font-bold text-[#9E5C6B]">{m.price}</div>
                  <p className="text-xs text-[#626268] mt-1">{m.detail}</p>
                </div>
                <div className="pt-3 border-t border-[#E7DDD9] font-mono text-[9px] sm:text-[10px] text-[#626268] uppercase tracking-wider">
                  {m.margin}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Projection */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-12 rounded-2xl sm:rounded-3xl bg-[#FFFDFC] border border-[#E7DDD9] shadow-sm">
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <div className="pill-badge border-[#D8B9BF] bg-[#F3E9EA] text-[#B66F7D]">
              <span>FINANCIAL TRACTION & PROJECTION</span>
            </div>
            <h3 className="font-display text-2xl sm:text-4xl font-bold text-[#252529]">Scaling Revenue Model</h3>
            <p className="text-[#626268] text-xs sm:text-sm leading-relaxed">
              With MVP completed and AI models operational, InfantMind is positioning for rapid scaling across urban Indian families.
            </p>

            <div className="space-y-2 pt-1 sm:pt-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#626268]">
                <FiCheckCircle className="text-[#B66F7D]" />
                <span>MVP Completed & AI Models Operational</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#626268]">
                <FiCheckCircle className="text-[#B66F7D]" />
                <span>Next Milestones: Hardware Prototype & Parent Pilots</span>
              </div>
            </div>

            <div className="pt-3 sm:pt-4 border-t border-[#E7DDD9]">
              <p className="font-mono text-xs text-[#B66F7D] uppercase tracking-widest">
                &quot;We are raising to accelerate hardware production and scaling.&quot;
              </p>
            </div>
          </div>

          {/* Revenue Bars Visual */}
          <div className="lg:col-span-6 flex items-end justify-around gap-4 sm:gap-6 h-48 sm:h-64 pt-6 sm:pt-8">
            {projections.map((p, i) => (
              <div key={i} className="flex flex-col items-center gap-2 sm:gap-3 w-1/3">
                <span className="font-mono text-xs font-bold text-[#252529]">{p.amount}</span>
                <div className={`w-full bg-[#B66F7D] rounded-t-xl transition-all duration-700 ${p.height}`} />
                <span className="font-mono text-xs text-[#626268]">{p.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketEconomics;
