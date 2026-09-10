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
    <section id="market" ref={sectionRef} className="relative w-full bg-[#0c0d10] text-white py-12 sm:py-20 md:py-32 px-4 sm:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-20">
        {/* Section Header */}
        <div className="space-y-2 sm:space-y-3">
          <div className="pill-badge border-rose-500/20 bg-rose-500/5 text-rose-400">
            <span>06 / MARKET & ECONOMICS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase leading-[0.98] text-white">
            MARKET OPPORTUNITY<br />
            <span className="text-slate-400">& BUSINESS MODEL</span>
          </h2>
          <p className="max-w-xl text-slate-400 text-xs sm:text-base leading-relaxed">
            Positioned at the intersection of three megatrends: <strong className="text-white">AI + HealthTech + BabyTech</strong>.
          </p>
        </div>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-all duration-300 space-y-3 sm:space-y-4"
            >
              <span className="font-mono text-[10px] sm:text-xs text-rose-400 uppercase tracking-widest block">{stat.label}</span>
              <div className="font-display text-4xl sm:text-6xl font-bold text-white tracking-tight">{stat.value}</div>
              <p className="text-slate-400 text-xs leading-relaxed">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Business Model Panels */}
        <div className="space-y-6 sm:space-y-8">
          <div className="border-b border-white/10 pb-4 sm:pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">Unit Economics & Monetization Streams</h3>
            <span className="font-mono text-[10px] sm:text-xs text-slate-400 uppercase border border-white/10 px-3 py-1 rounded-full self-start sm:self-auto">
              4 HYBRID REVENUE STREAMS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {models.map((m) => (
              <div key={m.num} className="glass-card rounded-2xl p-5 sm:p-6 border border-white/10 space-y-3 sm:space-y-4 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] sm:text-xs font-bold text-rose-500 block mb-1">STREAM {m.num}</span>
                  <h4 className="font-display text-base sm:text-xl font-bold text-white mb-1.5">{m.title}</h4>
                  <div className="font-mono text-base sm:text-lg font-bold text-rose-400">{m.price}</div>
                  <p className="text-xs text-slate-400 mt-1">{m.detail}</p>
                </div>
                <div className="pt-3 border-t border-white/10 font-mono text-[9px] sm:text-[10px] text-slate-300 uppercase tracking-wider">
                  {m.margin}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Projection */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-12 rounded-2xl sm:rounded-3xl bg-[#07080a] border border-white/10">
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <div className="pill-badge border-rose-500/30 bg-rose-500/10 text-rose-400">
              <span>FINANCIAL TRACTION & PROJECTION</span>
            </div>
            <h3 className="font-display text-2xl sm:text-4xl font-bold text-white">Scaling Revenue Model</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              With MVP completed and AI models operational, InfantMind is positioning for rapid scaling across urban Indian families.
            </p>

            <div className="space-y-2 pt-1 sm:pt-2">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <FiCheckCircle className="text-rose-400" />
                <span>MVP Completed & AI Models Operational</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <FiCheckCircle className="text-rose-400" />
                <span>Next Milestones: Hardware Prototype & Parent Pilots</span>
              </div>
            </div>

            <div className="pt-3 sm:pt-4 border-t border-white/10">
              <p className="font-mono text-xs text-rose-400 uppercase tracking-widest">
                &quot;We are raising to accelerate hardware production and scaling.&quot;
              </p>
            </div>
          </div>

          {/* Revenue Bars Visual */}
          <div className="lg:col-span-6 flex items-end justify-around gap-4 sm:gap-6 h-48 sm:h-64 pt-6 sm:pt-8">
            {projections.map((p, i) => (
              <div key={i} className="flex flex-col items-center gap-2 sm:gap-3 w-1/3">
                <span className="font-mono text-xs font-bold text-white">{p.amount}</span>
                <div className={`w-full bg-gradient-to-t from-rose-500 to-rose-400 rounded-t-xl transition-all duration-700 ${p.height}`} />
                <span className="font-mono text-xs text-slate-400">{p.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketEconomics;
