import PropTypes from 'prop-types';
import { FiArrowUpRight } from 'react-icons/fi';

const Footer = ({ onOpenPilot }) => {
  return (
    <footer className="w-full bg-[#07080a] text-white border-t border-white/10 pt-20 pb-12 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Top Brand Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 border-b border-white/10 pb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-rose-500" />
              <span className="font-display text-3xl font-bold tracking-tight text-white">INFANTMIND</span>
            </div>
            <p className="font-mono text-xs text-slate-400 uppercase tracking-widest">
              AI-Powered Baby Understanding System
            </p>
          </div>

          <button
            onClick={onOpenPilot}
            className="px-6 py-3 rounded-full border border-white/20 text-white text-xs font-mono uppercase tracking-wider flex items-center gap-2 hover:bg-white hover:text-black transition"
          >
            <span>JOIN PILOT COHORT</span>
            <FiArrowUpRight />
          </button>
        </div>

        {/* 4 Column Directory Links with 1px borders */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 font-mono text-xs text-slate-400">
          <div className="space-y-4 md:border-r border-white/10 md:pr-8">
            <span className="text-white font-bold tracking-widest block uppercase">PLATFORM</span>
            <ul className="space-y-2.5">
              <li><a href="#story" className="hover:text-rose-400 transition">2 AM Story</a></li>
              <li><a href="#redefining" className="hover:text-rose-400 transition">Redefining Care</a></li>
              <li><a href="#breakthrough" className="hover:text-rose-400 transition">System Architecture</a></li>
              <li><a href="#moat" className="hover:text-rose-400 transition">Technology Moat</a></li>
            </ul>
          </div>

          <div className="space-y-4 md:border-r border-white/10 md:px-8">
            <span className="text-white font-bold tracking-widest block uppercase">BUSINESS</span>
            <ul className="space-y-2.5">
              <li><a href="#market" className="hover:text-rose-400 transition">Market Opportunity</a></li>
              <li><a href="#market" className="hover:text-rose-400 transition">Unit Economics</a></li>
              <li><a href="#validation" className="hover:text-rose-400 transition">Competitor Matrix</a></li>
              <li><a href="#validation" className="hover:text-rose-400 transition">Buyer Segments</a></li>
            </ul>
          </div>

          <div className="space-y-4 md:border-r border-white/10 md:px-8">
            <span className="text-white font-bold tracking-widest block uppercase">RESEARCH</span>
            <ul className="space-y-2.5">
              <li><a href="#research" className="hover:text-rose-400 transition">R&D Journey</a></li>
              <li><a href="#research" className="hover:text-rose-400 transition">Dataset Foundation</a></li>
              <li><a href="#challenges" className="hover:text-rose-400 transition">Execution Challenges</a></li>
              <li><a href="#challenges" className="hover:text-rose-400 transition">Privacy Architecture</a></li>
            </ul>
          </div>

          <div className="space-y-4 md:pl-8">
            <span className="text-white font-bold tracking-widest block uppercase">DOCUMENTATION</span>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-1 hover:text-white transition cursor-pointer">
                <span>Executive PDF</span>
                <FiArrowUpRight className="text-rose-500" />
              </li>
              <li className="flex items-center gap-1 hover:text-white transition cursor-pointer">
                <span>Pediatric Rules</span>
                <FiArrowUpRight className="text-rose-500" />
              </li>
              <li className="flex items-center gap-1 hover:text-white transition cursor-pointer">
                <span>Patent Specs</span>
                <FiArrowUpRight className="text-rose-500" />
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500">
          <div>© 2026 InfantMind AI Inc. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 transition cursor-pointer">PRIVACY POLICY</span>
            <span className="hover:text-slate-400 transition cursor-pointer">TERMS OF SERVICE</span>
            <span className="hover:text-slate-400 transition cursor-pointer">PATENT PENDING</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  onOpenPilot: PropTypes.func.isRequired,
};

export default Footer;