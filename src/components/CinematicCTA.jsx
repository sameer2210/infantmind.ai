import PropTypes from 'prop-types';
import { FiArrowUpRight } from 'react-icons/fi';

const CinematicCTA = ({ onOpenPilot }) => {
  return (
    <section className="relative w-full bg-[#07080a] text-white py-32 px-6 sm:px-12 border-t border-white/10 overflow-hidden">
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 glass-card rounded-3xl p-12 sm:p-20 border border-white/10 text-center space-y-8 bg-gradient-to-b from-[#0c0d10] to-[#07080a]">
        {/* Subtitle Pill */}
        <div className="pill-badge border-rose-500/20 bg-rose-500/5 text-rose-400 mx-auto">
          <span>◆ THE FUTURE OF BABY CARE ◆</span>
        </div>

        {/* Large Display Headline */}
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight uppercase leading-[0.95] max-w-4xl mx-auto text-white">
          UNDERSTANDING BEGINS<br />
          <span className="text-rose-500">WITH LISTENING.</span>
        </h2>

        <p className="max-w-xl mx-auto text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
          Join us in building the next generation of infant health intelligence. Decoding distress signals into actionable clarity for parents worldwide.
        </p>

        {/* Action Button */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenPilot}
            className="px-8 py-4 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-rose-500 hover:text-white transition-all duration-300 shadow-2xl group"
          >
            <span>Explore InfantMind</span>
            <FiArrowUpRight className="text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

CinematicCTA.propTypes = {
  onOpenPilot: PropTypes.func.isRequired,
};

export default CinematicCTA;
