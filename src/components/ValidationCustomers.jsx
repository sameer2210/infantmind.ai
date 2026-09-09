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
    <section id="validation" className="relative w-full bg-[#07080a] text-white py-32 px-6 sm:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="pill-badge border-white/10 bg-white/[0.03] text-slate-300">
              <span>07 / STRATEGIC POSITIONING</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight uppercase leading-[0.95] text-white">
              MARKET VALIDATION<br />
              <span className="text-slate-400">& TARGET SEGMENTS</span>
            </h2>
          </div>

          {/* Selector Switch Tabs */}
          <div className="flex gap-2 p-1.5 rounded-full glass-card border border-white/10 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('VALIDATION')}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition ${
                activeTab === 'VALIDATION' ? 'bg-rose-500 text-white font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              COMPETITOR MATRIX
            </button>
            <button
              onClick={() => setActiveTab('SEGMENTS')}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition ${
                activeTab === 'SEGMENTS' ? 'bg-rose-500 text-white font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              BUYER SEGMENTS
            </button>
          </div>
        </div>

        {activeTab === 'VALIDATION' ? (
          <div className="space-y-12">
            {/* Competitor Matrix Grid */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-white/10 font-mono text-xs text-slate-400 uppercase tracking-widest">
                    <th className="py-4 px-6">Company</th>
                    <th className="py-4 px-6">What They Do</th>
                    <th className="py-4 px-6">Revenue / Raised</th>
                    <th className="py-4 px-6">The Understanding Gap</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-sans text-sm">
                  {competitors.map((c, i) => (
                    <tr key={i} className="hover:bg-white/[0.02] transition">
                      <td className="py-4 px-6 font-display font-bold text-white text-base">{c.company}</td>
                      <td className="py-4 px-6 text-slate-300">{c.focus}</td>
                      <td className="py-4 px-6 font-mono text-xs text-rose-400">{c.metrics}</td>
                      <td className="py-4 px-6 text-slate-400 flex items-center gap-2">
                        <FiX className="text-rose-500 shrink-0 text-base" />
                        <span>{c.gap}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Others vs InfantMind Contrast Banner */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 rounded-3xl bg-[#0c0d10] border border-white/10">
              <div className="space-y-3 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                <span className="font-mono text-xs text-slate-400 uppercase tracking-widest block">EXISTING MONITORS ❌</span>
                <ul className="space-y-2 text-xs text-slate-400 font-mono">
                  <li>• Camera feed without context</li>
                  <li>• Audio alerts without explanation</li>
                  <li>• Wearables without emotional model</li>
                  <li>• Notifications only</li>
                </ul>
              </div>

              <div className="space-y-3 p-6 rounded-2xl bg-rose-500/10 border border-rose-500/30">
                <span className="font-mono text-xs text-rose-400 uppercase tracking-widest block">INFANTMIND APPROACH ✅</span>
                <ul className="space-y-2 text-xs text-slate-200 font-mono font-medium">
                  <li>• Multimodal AI (Vision + Audio + Thermal)</li>
                  <li>• Controlled mosquito net environment</li>
                  <li>• Behavior + emotion understanding</li>
                  <li>• Explanation: &quot;Why is my baby crying?&quot;</li>
                </ul>
              </div>
            </div>

            <div className="text-center font-mono text-xs text-slate-400 uppercase tracking-widest">
              &quot;We are not competing with these companies — we are building the next layer on top of this industry.&quot;
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            {/* Customer Segments Bar Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {segments.map((s, idx) => (
                <div key={idx} className="glass-card rounded-3xl p-6 border border-white/10 space-y-4 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[10px] text-rose-400 uppercase tracking-widest border border-rose-500/30 px-2.5 py-0.5 rounded-full inline-block mb-3">
                      {s.label}
                    </span>
                    <h4 className="font-display text-lg font-bold text-white mb-1">{s.title}</h4>
                    <div className="font-display text-4xl font-bold text-rose-500 mb-2">{s.percent}</div>
                    <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Future Expansion Roadmap Tiles */}
            <div className="p-8 rounded-3xl bg-[#0c0d10] border border-white/10 space-y-6">
              <span className="font-mono text-xs text-slate-400 uppercase tracking-widest block">FUTURE MARKET EXPANSION</span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs text-slate-300">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1">
                  <span className="text-rose-400 font-bold block">01 / LITE VERSION</span>
                  <span>Cheaper ₹5–7K device to capture broader mass market</span>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1">
                  <span className="text-rose-400 font-bold block">02 / HOSPITALS</span>
                  <span>Clinical provider partnerships & maternity ward deployment</span>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1">
                  <span className="text-rose-400 font-bold block">03 / INSURANCE</span>
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
