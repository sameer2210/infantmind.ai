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
    <section id="challenges" className="relative w-full bg-[#FBF8F5] text-[#252529] py-12 sm:py-20 md:py-32 px-4 sm:px-12 border-t border-[#E7DDD9]">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          <div className="space-y-2 sm:space-y-3">
            <div className="pill-badge border-[#E7DDD9] bg-[#F7F1EE] text-[#626268]">
              <span>09 / EXECUTION ROADMAP</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase leading-[0.98] text-[#252529]">
              KEY CHALLENGES<br />
              <span className="text-[#626268]">& OUR APPROACH</span>
            </h2>
          </div>
          <p className="max-w-md text-[#626268] text-xs sm:text-base leading-relaxed">
            We understand the challenges deeply — and we have already designed our system architecture to address them.
          </p>
        </div>

        {/* 5 Challenge Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {challenges.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#E7DDD9] hover:border-[#D8B9BF] transition-all duration-300 space-y-4 sm:space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-[#F3E9EA] border border-[#D8B9BF] text-[#B66F7D] text-lg sm:text-xl">
                      <Icon />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#B66F7D]">CHALLENGE {item.num}</span>
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#252529]">{item.title}</h3>

                  <div className="p-3 sm:p-3.5 rounded-xl bg-[#F7F1EE] border border-[#E7DDD9] font-mono text-[11px] sm:text-xs text-[#626268]">
                    <span className="text-[#B38A62] font-bold block mb-0.5 sm:mb-1">CHALLENGE:</span>
                    {item.challenge}
                  </div>

                  <div className="space-y-1.5 sm:space-y-2 pt-1 sm:pt-2">
                    <span className="font-mono text-[9px] sm:text-[10px] text-[#8C8C91] uppercase tracking-widest block">OUR APPROACH:</span>
                    {item.approach.map((ap, i) => (
                      <div key={i} className="flex items-start gap-2 font-mono text-[11px] sm:text-xs text-[#626268]">
                        <FiCheckCircle className="text-[#B66F7D] text-sm shrink-0 mt-0.5" />
                        <span>{ap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Closing Statement Card */}
          <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#D8B9BF] bg-[#F3E9EA] flex flex-col justify-between space-y-4 sm:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <span className="font-mono text-xs font-bold text-[#B66F7D] uppercase tracking-widest">SUMMARY</span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#252529]">Execution Focused</h3>
              <p className="text-[#626268] text-xs sm:text-sm leading-relaxed">
                &quot;These are not risks — they are execution challenges we are actively solving.&quot;
              </p>
            </div>
            <div className="font-mono text-[10px] sm:text-xs text-[#8C8C91] border-t border-[#D8B9BF] pt-3 sm:pt-4">
              PATENT PENDING HARDWARE PLATFORM
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
