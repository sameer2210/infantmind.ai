import { useRef } from 'react';
import { FiDatabase } from 'react-icons/fi';

const ResearchTimeline = () => {
  const sectionRef = useRef(null);

  const timelineSteps = [
    {
      month: 'MONTH 1–2',
      title: 'Problem Exploration',
      description: 'Studied baby behavior, parent distress triggers, and clinical pediatric symptoms.',
      badge: 'FOUNDATION',
    },
    {
      month: 'MONTH 3–4',
      title: 'Data Collection Started',
      description: 'Aggregated academic cry datasets & initiated facial expression Landmark analysis.',
      badge: 'DATA AGGREGATION',
    },
    {
      month: 'MONTH 5',
      title: 'Custom Dataset Creation',
      description: 'Manually labeled custom vomit detection dataset & motion gesture anomaly models.',
      badge: 'CUSTOM DATASET',
    },
    {
      month: 'MONTH 6',
      title: 'Model Integration & MVP',
      description: 'Fused rule-based pediatric clinical logic with multimodal AI models. Completed functional MVP.',
      badge: 'MVP COMPLETED',
    },
  ];

  const dataPillars = [
    { title: 'Cry Acoustic Datasets', source: 'Research archives & custom audio recordings' },
    { title: 'Facial Landmark Models', source: 'Expression tracking + manual anomaly labeling' },
    { title: 'Vomit Detection Dataset', source: 'Custom-labeled computer vision dataset' },
    { title: 'Gesture Recognition', source: 'Landmark pose models for infant pain gestures' },
  ];

  return (
    <section id="research" ref={sectionRef} className="relative w-full bg-[#0c0d10] text-white py-12 sm:py-20 md:py-32 px-4 sm:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-20">
        {/* Section Header */}
        <div className="space-y-2 sm:space-y-3">
          <div className="pill-badge border-rose-500/20 bg-rose-500/5 text-rose-400">
            <span>08 / R&D FOUNDATION</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase leading-[0.98] text-white">
            OUR JOURNEY<br />
            <span className="text-slate-400">& RESEARCH FOUNDATION</span>
          </h2>
          <p className="max-w-xl text-slate-400 text-xs sm:text-base leading-relaxed">
            We built a custom dataset where none existed, bridging pediatric symptom research with multi-sensory machine learning.
          </p>
        </div>

        {/* 6-Month Timeline Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {timelineSteps.map((step, idx) => (
            <div key={idx} className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-white/10 space-y-3 sm:space-y-4 relative group hover:border-rose-500/40 transition">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-rose-500">{step.month}</span>
                <span className="font-mono text-[9px] sm:text-[10px] text-slate-400 uppercase border border-white/10 px-2 py-0.5 rounded-full">
                  {step.badge}
                </span>
              </div>
              <h3 className="font-display text-base sm:text-xl font-bold text-white">{step.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Data Sources & Research Pillars */}
        <div className="p-6 sm:p-12 rounded-2xl sm:rounded-3xl bg-[#07080a] border border-white/10 space-y-6 sm:space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 sm:pb-6">
            <div>
              <span className="font-mono text-xs text-rose-400 uppercase tracking-widest block">DATA FOUNDATION</span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white">Multi-Source Clinical Dataset</h3>
            </div>
            <span className="font-mono text-[10px] sm:text-xs text-slate-400 uppercase border border-white/10 px-3 py-1 rounded-full self-start sm:self-auto">
              PROPRIETARY INFANT LABELS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {dataPillars.map((dp, i) => (
              <div key={i} className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5 sm:space-y-2">
                <FiDatabase className="text-rose-400 text-lg sm:text-xl" />
                <h4 className="font-display text-xs sm:text-sm font-bold text-white">{dp.title}</h4>
                <p className="text-[11px] sm:text-xs text-slate-400 font-mono">{dp.source}</p>
              </div>
            ))}
          </div>

          <div className="pt-3 sm:pt-4 text-center font-mono text-[10px] sm:text-xs text-slate-300 uppercase tracking-widest border-t border-white/10">
            &quot;Our system combines research-backed rules with data-driven AI models to create a highly accurate infant understanding platform.&quot;
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchTimeline;
