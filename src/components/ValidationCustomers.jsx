import { useState } from 'react';
import { FiX } from 'react-icons/fi';

const ValidationCustomers = () => {
  const [activeTab, setActiveTab] = useState('VALIDATION');

  const competitors = [
    { company: 'Nanit', focus: 'Smart camera (tracks sleep)', metrics: '$100M+ Rev, $75M+ Raised', gap: 'No behavioral understanding or reasoning' },
    { company: 'Owlet', focus: 'Wearable sock (pulse & O2)', metrics: '$50M+ Rev (Public)', gap: 'Only physiological signals, no emotion model' },
    { company: 'Hatch', focus: 'Smart sleep & sound device', metrics: '$100M+ Rev', gap: 'Focus on sleep ambient noise, not health' },
    { company: 'Cubo Ai', focus: 'AI camera (face alerts)', metrics: 'Global presence', gap: 'Event detection only, no explanation layer' },
  ];

  const segments = [
    { title: 'UPPER MIDDLE CLASS', percent: '50%', label: 'CORE MARKET', desc: 'Can afford ₹10–15K devices. Tech-friendly parents with high concern for child health.' },
    { title: 'UPPER CLASS / AFFLUENT', percent: '25%', label: 'EARLY ADOPTERS', desc: 'Early adopters of premium technology. High willingness to pay for safety & peace of mind.' },
    { title: 'MIDDLE CLASS', percent: '20%', label: 'MASS SCALE', desc: 'Price sensitive. Will adopt once brand trust and common awareness are established.' },
    { title: 'LOWER INCOME', percent: '5%', label: 'FUTURE PHASE', desc: 'Future potential via Lite versions (₹5–7K) and hospital/insurance partnerships.' },
  ];

  return (
    <section id="validation" className="relative w-full bg-[#FBF8F5] text-[#252529] py-12 sm:py-20 md:py-32 px-4 sm:px-12 border-t border-[#E7DDD9]">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          <div className="space-y-2 sm:space-y-3">
            <div className="pill-badge border-[#E7DDD9] bg-[#F7F1EE] text-[#626268]">
              <span>07 / STRATEGIC POSITIONING</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase leading-[0.98] text-[#252529]">
              MARKET VALIDATION<br />
              <span className="text-[#626268]">& TARGET SEGMENTS</span>
            </h2>
          </div>

          {/* Selector Switch Tabs */}
          <div className="flex gap-2 p-1.5 rounded-full glass-card border border-[#E7DDD9] self-start md:self-auto">
            <button
              onClick={() => setActiveTab('VALIDATION')}
              className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-mono tracking-wider transition ${
                activeTab === 'VALIDATION' ? 'bg-[#B66F7D] text-white font-bold shadow-sm' : 'text-[#626268] hover:text-[#252529]'
              }`}
            >
              COMPETITOR MATRIX
            </button>
            <button
              onClick={() => setActiveTab('SEGMENTS')}
              className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-mono tracking-wider transition ${
                activeTab === 'SEGMENTS' ? 'bg-[#B66F7D] text-white font-bold shadow-sm' : 'text-[#626268] hover:text-[#252529]'
              }`}
            >
              BUYER SEGMENTS
            </button>
          </div>
        </div>

        {activeTab === 'VALIDATION' ? (
          <div className="space-y-8 sm:space-y-12">
            {/* Desktop Competitor Matrix Table (Hidden on Mobile) */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-[#E7DDD9] font-mono text-xs text-[#626268] uppercase tracking-widest bg-[#F7F1EE]">
                    <th className="py-4 px-6">Company</th>
                    <th className="py-4 px-6">What They Do</th>
                    <th className="py-4 px-6">Revenue / Raised</th>
                    <th className="py-4 px-6">The Understanding Gap</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7DDD9] font-sans text-sm bg-[#FFFDFC]">
                  {competitors.map((c, i) => (
                    <tr key={i} className="hover:bg-[#F7F1EE]/50 transition">
                      <td className="py-4 px-6 font-display font-bold text-[#252529] text-base">{c.company}</td>
                      <td className="py-4 px-6 text-[#626268]">{c.focus}</td>
                      <td className="py-4 px-6 font-mono text-xs text-[#9E5C6B] font-semibold">{c.metrics}</td>
                      <td className="py-4 px-6 text-[#626268] flex items-center gap-2">
                        <FiX className="text-[#A96767] shrink-0 text-base" />
                        <span>{c.gap}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Stacked Competitor Cards (Visible on Mobile Only) */}
            <div className="block sm:hidden space-y-4">
              {competitors.map((c, i) => (
                <div key={i} className="glass-card rounded-2xl p-5 border border-[#E7DDD9] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-lg font-bold text-[#252529]">{c.company}</span>
                    <span className="font-mono text-[10px] text-[#9E5C6B] border border-[#D8B9BF] bg-[#F3E9EA] px-2 py-0.5 rounded-full">
                      {c.metrics}
                    </span>
                  </div>
                  <p className="text-xs text-[#626268]">{c.focus}</p>
                  <div className="pt-2 border-t border-[#E7DDD9] flex items-center gap-2 text-xs text-[#626268]">
                    <FiX className="text-[#A96767] shrink-0" />
                    <span>GAP: {c.gap}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Others vs InfantMind Contrast Banner */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#FFFDFC] border border-[#E7DDD9] shadow-sm">
              <div className="space-y-3 p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-[#F7F1EE] border border-[#E7DDD9]">
                <span className="font-mono text-xs text-[#626268] uppercase tracking-widest block">EXISTING MONITORS ❌</span>
                <ul className="space-y-2 text-xs text-[#626268] font-mono">
                  <li>• Camera feed without context</li>
                  <li>• Audio alerts without explanation</li>
                  <li>• Wearables without emotional model</li>
                  <li>• Notifications only</li>
                </ul>
              </div>

              <div className="space-y-3 p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-[#F3E9EA] border border-[#D8B9BF]">
                <span className="font-mono text-xs text-[#B66F7D] uppercase tracking-widest block">INFANTMIND APPROACH ✅</span>
                <ul className="space-y-2 text-xs text-[#252529] font-mono font-medium">
                  <li>• Multimodal AI (Vision + Audio + Thermal)</li>
                  <li>• Controlled mosquito net environment</li>
                  <li>• Behavior + emotion understanding</li>
                  <li>• Explanation: &quot;Why is my baby crying?&quot;</li>
                </ul>
              </div>
            </div>

            <div className="text-center font-mono text-[10px] sm:text-xs text-[#626268] uppercase tracking-widest">
              &quot;We are not competing with these companies — we are building the next layer on top of this industry.&quot;
            </div>
          </div>
        ) : (
          <div className="space-y-8 sm:space-y-12">
            {/* Customer Segments Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {segments.map((s, idx) => (
                <div key={idx} className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-[#E7DDD9] space-y-3 sm:space-y-4 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[9px] sm:text-[10px] text-[#B66F7D] uppercase tracking-widest border border-[#D8B9BF] bg-[#F3E9EA] px-2.5 py-0.5 rounded-full inline-block mb-2 sm:mb-3">
                      {s.label}
                    </span>
                    <h4 className="font-display text-base sm:text-lg font-bold text-[#252529] mb-1">{s.title}</h4>
                    <div className="font-display text-3xl sm:text-4xl font-bold text-[#B66F7D] mb-1.5">{s.percent}</div>
                    <p className="text-xs text-[#626268] leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Future Expansion Roadmap */}
            <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#F7F1EE] border border-[#E7DDD9] space-y-4 sm:space-y-6">
              <span className="font-mono text-xs text-[#626268] uppercase tracking-widest block">FUTURE MARKET EXPANSION</span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 font-mono text-xs text-[#626268]">
                <div className="p-4 rounded-xl bg-[#FFFDFC] border border-[#E7DDD9] space-y-1">
                  <span className="text-[#B66F7D] font-bold block">01 / LITE VERSION</span>
                  <span>Cheaper ₹5–7K device to capture broader mass market</span>
                </div>
                <div className="p-4 rounded-xl bg-[#FFFDFC] border border-[#E7DDD9] space-y-1">
                  <span className="text-[#B66F7D] font-bold block">02 / HOSPITALS</span>
                  <span>Clinical provider partnerships & maternity ward deployment</span>
                </div>
                <div className="p-4 rounded-xl bg-[#FFFDFC] border border-[#E7DDD9] space-y-1">
                  <span className="text-[#B66F7D] font-bold block">03 / INSURANCE</span>
                  <span>Health insurance plan integration & preventative care</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ValidationCustomers;
