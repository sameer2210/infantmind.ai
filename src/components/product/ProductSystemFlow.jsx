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
    <section className="relative w-full bg-[#F7F1EE] text-[#252529] py-32 px-6 sm:px-12 border-t border-[#E7DDD9]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-3 text-center max-w-3xl mx-auto">
          <div className="pill-badge border-[#D8B9BF] bg-[#F3E9EA] text-[#B66F7D] mx-auto">
            <span>03 / END-TO-END PIPELINE</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight uppercase leading-[0.95] text-[#252529]">
            HOW INFANTMIND <span className="text-[#B66F7D]">DECODES DISTRESS</span>
          </h2>
          <p className="text-[#626268] text-sm sm:text-base leading-relaxed">
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
                    ? 'bg-[#F3E9EA] border-[#B66F7D] text-[#252529] shadow-sm'
                    : 'bg-[#FFFDFC] border-[#E7DDD9] text-[#626268] hover:border-[#D8B9BF]'
                }`}
              >
                <span className={`font-mono text-xs font-bold block mb-1 ${isActive ? 'text-[#B66F7D]' : 'text-[#8C8C91]'}`}>
                  STEP {item.step}
                </span>
                <span className="font-display text-xs font-bold truncate block">{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detail Frame */}
        <div className="max-w-5xl mx-auto glass-card rounded-3xl p-8 sm:p-12 border border-[#E7DDD9] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FFFDFC] shadow-md">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm font-bold text-[#B66F7D] border border-[#D8B9BF] bg-[#F3E9EA] px-3 py-1 rounded-full">
                STAGE {pipeline[activeStep].step}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#B66F7D] animate-ping" />
            </div>

            <h3 className="font-display text-3xl font-bold text-[#252529]">{pipeline[activeStep].title}</h3>
            <p className="text-[#626268] text-sm leading-relaxed">{pipeline[activeStep].desc}</p>

            <div className="p-4 rounded-2xl bg-[#F7F1EE] border border-[#E7DDD9] font-mono text-xs text-[#B66F7D]">
              <span className="text-[#626268] block mb-1 uppercase tracking-widest text-[10px]">PIPELINE OUTPUT:</span>
              <span className="font-bold text-sm text-[#252529]">{pipeline[activeStep].output}</span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#E7DDD9] h-[280px]">
              <img
                src={pipeline[activeStep].image}
                alt={pipeline[activeStep].title}
                className="w-full h-full object-cover object-center transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FFFDFC]/80 via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSystemFlow;
