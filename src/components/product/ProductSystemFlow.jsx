import { useState } from 'react';
import { FiCheckCircle, FiCpu, FiHardDrive, FiActivity, FiMessageSquare } from 'react-icons/fi';

const ProductSystemFlow = () => {
  const [activeStep, setActiveStep] = useState(0);

  const pipeline = [
    {
      step: '01',
      title: 'Baby Under Smart Net',
      icon: FiHardDrive,
      desc: 'Infant rests safely inside the controlled mosquito net environment.',
      output: 'Controlled Physical Space',
      image: '/img/hero-net.jpg',
    },
    {
      step: '02',
      title: 'Multi-Sensor Capture',
      icon: FiActivity,
      desc: 'Integrated 12MP camera, directional mic array, and thermal sensor capture signals.',
      output: 'Optical + Acoustic + Thermal Data',
      image: '/img/hardware-platform.jpg',
    },
    {
      step: '03',
      title: 'Multimodal AI Fusion',
      icon: FiCpu,
      desc: 'Pose landmarks, cry frequency spectrum, and thermal maps are fused in real-time.',
      output: 'Synchronized Feature Vector',
      image: '/img/multimodal-ai.jpg',
    },
    {
      step: '04',
      title: 'LLM Reasoning Engine',
      icon: FiMessageSquare,
      desc: 'Hybrid rule-based pediatric clinical logic synthesizes context & calculates confidence.',
      output: 'Contextual Health Reasoning',
      image: '/img/hero-net.jpg',
    },
    {
      step: '05',
      title: 'Actionable Parent Insight',
      icon: FiCheckCircle,
      desc: '"Your baby may have ear pain" — clear, empathetic notification on parent app.',
      output: '"Your baby may have ear pain"',
      image: '/img/parent-insight.jpg',
    },
  ];

  return (
    <section className="relative w-full bg-[#0c0d10] text-white py-32 px-6 sm:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-3 text-center max-w-3xl mx-auto">
          <div className="pill-badge border-rose-500/20 bg-rose-500/5 text-rose-400 mx-auto">
            <span>03 / END-TO-END PIPELINE</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight uppercase leading-[0.95] text-white">
            HOW INFANTMIND <span className="text-rose-500">DECODES DISTRESS</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            From physical sensors inside the smart net frame to actionable health insights delivered to parents.
          </p>
        </div>

        {/* Step Selector Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 max-w-5xl mx-auto">
          {pipeline.map((item, i) => {
            const isActive = activeStep === i;
            return (
              <button
                key={item.step}
                onClick={() => setActiveStep(i)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 ${
                  isActive
                    ? 'bg-rose-500/10 border-rose-500 text-white shadow-lg'
                    : 'bg-[#07080a] border-white/10 text-slate-400 hover:border-white/20'
                }`}
              >
                <span className={`font-mono text-xs font-bold block mb-1 ${isActive ? 'text-rose-400' : 'text-slate-500'}`}>
                  STEP {item.step}
                </span>
                <span className="font-display text-xs font-bold truncate block">{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detail Frame */}
        <div className="max-w-5xl mx-auto glass-card rounded-3xl p-8 sm:p-12 border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#07080a]">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm font-bold text-rose-500 border border-rose-500/30 px-3 py-1 rounded-full">
                STAGE {pipeline[activeStep].step}
              </span>
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
            </div>

            <h3 className="font-display text-3xl font-bold text-white">{pipeline[activeStep].title}</h3>
            <p className="text-slate-300 text-sm leading-relaxed">{pipeline[activeStep].desc}</p>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 font-mono text-xs text-rose-400">
              <span className="text-slate-400 block mb-1 uppercase tracking-widest text-[10px]">PIPELINE OUTPUT:</span>
              <span className="font-bold text-sm text-white">{pipeline[activeStep].output}</span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 h-[280px]">
              <img
                src={pipeline[activeStep].image}
                alt={pipeline[activeStep].title}
                className="w-full h-full object-cover object-center transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSystemFlow;
