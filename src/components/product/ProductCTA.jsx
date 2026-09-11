import PropTypes from 'prop-types';
import { FiArrowUpRight } from 'react-icons/fi';

const ProductCTA = ({ onOpenPilot }) => {
  return (
    <section className="relative w-full bg-[#FBF8F5] text-[#252529] py-32 px-6 sm:px-12 border-t border-[#E7DDD9] overflow-hidden">
      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#B66F7D]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 glass-card rounded-3xl p-12 sm:p-20 border border-[#E7DDD9] text-center space-y-8 bg-[#FFFDFC] shadow-md">
        <div className="pill-badge border-[#D8B9BF] bg-[#F3E9EA] text-[#B66F7D] mx-auto">
          <span>◆ PILOT COHORT OPEN ◆</span>
        </div>

        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight uppercase leading-[0.95] max-w-4xl mx-auto text-[#252529]">
          READY TO START YOUR<br />
          <span className="text-[#B66F7D]">INFANTMIND JOURNEY?</span>
        </h2>

        <p className="max-w-xl mx-auto text-[#626268] text-sm sm:text-base leading-relaxed font-normal">
          Explore the world&apos;s first AI-powered baby understanding system. Join our early-access pilot cohort today.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenPilot}
            className="px-8 py-4 rounded-full bg-[#B66F7D] text-white font-semibold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-[#9E5C6B] transition-all duration-300 shadow-md group"
          >
            <span>Join Pilot Cohort</span>
            <FiArrowUpRight className="text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

ProductCTA.propTypes = {
  onOpenPilot: PropTypes.func.isRequired,
};

export default ProductCTA;
