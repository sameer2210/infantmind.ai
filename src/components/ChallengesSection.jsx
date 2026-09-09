import { FiCheckCircle, FiShield, FiLock, FiCpu, FiUsers, FiHardDrive } from 'react-icons/fi';

const ChallengesSection = () => {
  const challenges = [
    {
      num: '01',
      title: 'Data Availability',
      icon: FiHardDrive,
      challenge: 'Infant data is highly limited, sensitive, and fragmented.',
      approach: [
        'Start with research-backed rule system',
        'Gradual consent-based data collection',
        'Privacy-first data pipeline architecture',
      ],
    },
    {
      num: '02',
      title: 'AI Accuracy & Reliability',
      icon: FiCpu,
      challenge: 'High clinical accuracy is required for baby health insights.',
      approach: [
        'Multimodal signals (not single vision/audio input)',
        'Hybrid architecture (rules + ML models)',
        'Continuous model feedback & validation',
      ],
    },
    {
      num: '03',
      title: 'Hardware Integration',
      icon: FiShield,
      challenge: 'Building reliable, non-contact hardware safe for infants.',
      approach: [
        'Controlled mosquito net frame design',
        'Iterative physical prototyping',
        'Safety-first engineering standards',
      ],
    },
    {
      num: '04',
      title: 'Privacy & Trust',
      icon: FiLock,
      challenge: 'Handling highly sensitive infant video and acoustic data.',
      approach: [
        'On-device edge processing where possible',
        'Secure cloud + end-to-end encryption',
        'Parent-controlled data sharing permissions',
      ],
    },
    {
      num: '05',
      title: 'Market Adoption',
      icon: FiUsers,
      challenge: 'Creating a new product category requires deep parental trust.',
      approach: [
        'Target urban upper-middle early adopters',
        'Pediatrician & clinic distribution partners',
        'Strong early pilot validation proof points',
      ],
    },
  ];

  return (
    <section id="challenges" className="relative w-full bg-[#07080a] text-white py-32 px-6 sm:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="pill-badge border-white/10 bg-white/[0.03] text-slate-300">
              <span>09 / EXECUTION ROADMAP</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight uppercase leading-[0.95] text-white">
              KEY CHALLENGES<br />
              <span className="text-slate-400">& OUR APPROACH</span>
            </h2>
          </div>
          <p className="max-w-md text-slate-400 text-sm sm:text-base leading-relaxed">
            We understand the challenges deeply — and we have already designed our system architecture to address them.
          </p>
        </div>

        {/* 5 Challenge Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="glass-card rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xl">
                      <Icon />
                    </div>
                    <span className="font-mono text-xs font-bold text-rose-500">CHALLENGE {item.num}</span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white">{item.title}</h3>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 font-mono text-xs text-slate-400">
                    <span className="text-rose-400 font-bold block mb-1">CHALLENGE:</span>
                    {item.challenge}
                  </div>

                  <div className="space-y-2 pt-2">
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block">OUR APPROACH:</span>
                    {item.approach.map((ap, i) => (
                      <div key={i} className="flex items-start gap-2 font-mono text-xs text-slate-300">
                        <FiCheckCircle className="text-rose-400 text-sm shrink-0 mt-0.5" />
                        <span>{ap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Closing Statement Card */}
          <div className="glass-card rounded-3xl p-8 border border-rose-500/30 bg-gradient-to-br from-rose-500/10 via-transparent to-transparent flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="font-mono text-xs font-bold text-rose-400 uppercase tracking-widest">SUMMARY</span>
              <h3 className="font-display text-2xl font-bold text-white">Execution Focused</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                &quot;These are not risks — they are execution challenges we are actively solving.&quot;
              </p>
            </div>
            <div className="font-mono text-xs text-slate-400 border-t border-white/10 pt-4">
              PATENT PENDING HARDWARE PLATFORM
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
