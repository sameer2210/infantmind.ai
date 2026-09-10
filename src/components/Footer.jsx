import PropTypes from 'prop-types';
import { FiArrowUpRight } from 'react-icons/fi';

const Footer = ({ onOpenPilot }) => {
  return (
    <footer className="w-full bg-[#07080a] text-white border-t border-white/10 pt-12 sm:pt-16 pb-8 sm:pb-12 px-4 sm:px-8 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Main 4-Column Directory Layout matching Reference UI */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-white/10">
          
          {/* Column 1 */}
          <div className="p-6 sm:p-8 lg:border-r border-white/10 space-y-8 sm:space-y-10">
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-xs sm:text-sm font-semibold text-white tracking-widest uppercase font-mono">Platform & Hardware</h4>
              <ul className="space-y-2 sm:space-y-2.5 text-xs text-slate-400">
                <li><a href="#breakthrough" className="hover:text-white transition">Smart Mosquito Net</a></li>
                <li><a href="#breakthrough" className="hover:text-white transition">Optical Vision Sensor</a></li>
                <li><a href="#breakthrough" className="hover:text-white transition">Acoustic Mic Array</a></li>
                <li><a href="#breakthrough" className="hover:text-white transition">Thermal Sensor Matrix</a></li>
                <li><a href="#moat" className="hover:text-white transition">Edge AI Processing Unit</a></li>
              </ul>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-xs sm:text-sm font-semibold text-white tracking-widest uppercase font-mono">Contact Us</h4>
              <ul className="space-y-2 sm:space-y-2.5 text-xs text-slate-400">
                <li>
                  <button onClick={onOpenPilot} className="hover:text-white transition text-left flex items-center gap-1">
                    <span>Join Pilot Cohort</span>
                    <FiArrowUpRight className="text-rose-500 text-xs" />
                  </button>
                </li>
                <li><a href="#challenges" className="hover:text-white transition">Technical Support</a></li>
                <li><a href="#market" className="hover:text-white transition">Partnerships & Sales</a></li>
              </ul>
            </div>
          </div>

          {/* Column 2 */}
          <div className="p-6 sm:p-8 lg:border-r border-white/10 space-y-8 sm:space-y-10">
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-xs sm:text-sm font-semibold text-white tracking-widest uppercase font-mono">Multimodal AI</h4>
              <ul className="space-y-2 sm:space-y-2.5 text-xs text-slate-400">
                <li><a href="#breakthrough" className="hover:text-white transition">Acoustic Cry Decoding</a></li>
                <li><a href="#breakthrough" className="hover:text-white transition">Thermal Respiration Tracking</a></li>
                <li><a href="#breakthrough" className="hover:text-white transition">Visual Micro-Movement</a></li>
                <li><a href="#breakthrough" className="hover:text-white transition">LLM Reasoning Engine</a></li>
              </ul>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-xs sm:text-sm font-semibold text-white tracking-widest uppercase font-mono">About Us</h4>
              <ul className="space-y-2 sm:space-y-2.5 text-xs text-slate-400">
                <li><a href="#story" className="hover:text-white transition">Our Story (The 2 AM Moment)</a></li>
                <li>
                  <a
                    href="https://www.spandavidyaai.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-rose-300 transition inline-flex items-center gap-1.5 text-rose-400 font-medium font-mono"
                  >
                    <span>Spandavidya AI (Parent Co)</span>
                    <FiArrowUpRight className="text-xs" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3 */}
          <div className="p-6 sm:p-8 lg:border-r border-white/10 space-y-8 sm:space-y-10">
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-xs sm:text-sm font-semibold text-white tracking-widest uppercase font-mono">Data & Research</h4>
              <ul className="space-y-2 sm:space-y-2.5 text-xs text-slate-400">
                <li><a href="#research" className="hover:text-white transition">R&D Journey</a></li>
                <li><a href="#research" className="hover:text-white transition">Pediatric Rule Engine</a></li>
                <li><a href="#research" className="hover:text-white transition">Annotated Cry Dataset</a></li>
                <li><a href="#challenges" className="hover:text-white transition">Privacy Architecture</a></li>
              </ul>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-xs sm:text-sm font-semibold text-white tracking-widest uppercase font-mono">Resources</h4>
              <ul className="space-y-2 sm:space-y-2.5 text-xs text-slate-400">
                <li><a href="/products/infantmind" className="hover:text-white transition">Product Specification</a></li>
                <li><a href="#validation" className="hover:text-white transition">Market Validation</a></li>
              </ul>
            </div>
          </div>

          {/* Column 4 */}
          <div className="p-6 sm:p-8 space-y-8 sm:space-y-10">
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-xs sm:text-sm font-semibold text-white tracking-widest uppercase font-mono">Market & Business</h4>
              <ul className="space-y-2 sm:space-y-2.5 text-xs text-slate-400">
                <li><a href="#market" className="hover:text-white transition">Market Opportunity</a></li>
                <li><a href="#market" className="hover:text-white transition">Unit Economics</a></li>
                <li><a href="#validation" className="hover:text-white transition">Competitor Comparison</a></li>
                <li><a href="#validation" className="hover:text-white transition">Target Customer Segments</a></li>
              </ul>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-xs sm:text-sm font-semibold text-white tracking-widest uppercase font-mono">Legal & IP</h4>
              <ul className="space-y-2 sm:space-y-2.5 text-xs text-slate-400">
                <li><span className="hover:text-white transition cursor-pointer">Patent Pending Notice</span></li>
                <li><span className="hover:text-white transition cursor-pointer">Privacy & Data Ethics</span></li>
                <li><span className="hover:text-white transition cursor-pointer">Terms & Conditions</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Brand & Social Media Link Cards Row (Matching Reference) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-white/10">
          
          {/* Brand Logo Card */}
          <div className="p-5 sm:p-8 lg:border-r border-white/10 flex items-center justify-between group">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-rose-500/20 border border-rose-500/40 flex items-center justify-center">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
              </div>
              <div>
                <span className="font-display text-lg font-bold tracking-tight text-white block leading-none">INFANTMIND</span>
                <a
                  href="https://www.spandavidyaai.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[9px] text-rose-400 hover:underline uppercase tracking-widest block pt-0.5"
                >
                  BY SPANDAVIDYA AI
                </a>
              </div>
            </div>
          </div>

          {/* Social / Action Card 1: Linkedin */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 sm:p-8 lg:border-r border-white/10 flex items-center justify-between group hover:bg-white/[0.03] transition-colors"
          >
            <span className="font-mono text-sm font-medium text-slate-200 group-hover:text-white transition-colors">Linkedin</span>
            <span className="text-slate-400 group-hover:text-rose-400 group-hover:translate-x-1 transition-all text-base">→</span>
          </a>

          {/* Social / Action Card 2: Youtube */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 sm:p-8 lg:border-r border-white/10 flex items-center justify-between group hover:bg-white/[0.03] transition-colors"
          >
            <span className="font-mono text-sm font-medium text-slate-200 group-hover:text-white transition-colors">Youtube</span>
            <span className="text-slate-400 group-hover:text-rose-400 group-hover:translate-x-1 transition-all text-base">→</span>
          </a>

          {/* Social / Action Card 3: Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 sm:p-8 flex items-center justify-between group hover:bg-white/[0.03] transition-colors"
          >
            <span className="font-mono text-sm font-medium text-slate-200 group-hover:text-white transition-colors">Instagram</span>
            <span className="text-slate-400 group-hover:text-rose-400 group-hover:translate-x-1 transition-all text-base">→</span>
          </a>
        </div>

        {/* Bottom Baseline Bar (Matching Reference) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-6 text-slate-500 font-mono text-[10px] sm:text-xs">
          <div className="px-6 sm:px-8 py-1.5">
            © All rights reserved 2026.
          </div>
          <div className="px-6 sm:px-8 py-1.5">
            InfantMind AI Platform
          </div>
          <div className="px-6 sm:px-8 py-1.5">
            <a href="https://www.spandavidyaai.com/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition">
              Spandavidya AI Inc.
            </a>
          </div>
          <div className="px-6 sm:px-8 py-1.5 lg:text-right">
            Customer Support & Compliance
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