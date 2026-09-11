import PropTypes from 'prop-types';
import { FiArrowUpRight } from 'react-icons/fi';

const CinematicCTA = ({ onOpenPilot }) => {
  return (
    <section className="relative w-full bg-[#FBF8F5] text-[#252529] py-16 sm:py-24 md:py-32 px-4 sm:px-12 border-t border-[#E7DDD9] overflow-hidden">
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] sm:w-[700px] h-[450px] sm:h-[700px] bg-[#B66F7D]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 glass-card rounded-2xl sm:rounded-3xl p-8 sm:p-16 md:p-20 border border-[#E7DDD9] text-center space-y-6 sm:space-y-8 bg-[#FFFDFC] shadow-md">
        {/* Subtitle Pill */}
        <div className="pill-badge border-[#D8B9BF] bg-[#F3E9EA] text-[#B66F7D] mx-auto">
          <span>◆ THE FUTURE OF BABY CARE ◆</span>
        </div>

        {/* Large Display Headline */}
        <h2 className="font-display text-3xl sm:text-6xl md:text-7xl font-bold tracking-tight uppercase leading-[0.98] max-w-4xl mx-auto text-[#252529]">
          UNDERSTANDING BEGINS<br />
          <span className="text-[#B66F7D]">WITH LISTENING.</span>
        </h2>

        <p className="max-w-xl mx-auto text-[#626268] text-xs sm:text-base leading-relaxed font-normal">
          Join us in building the next generation of infant health intelligence. Decoding distress signals into actionable clarity for parents worldwide.
        </p>

        {/* Action Button */}
        <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenPilot}
            className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#B66F7D] text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#9E5C6B] transition-all duration-300 shadow-md group"
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
