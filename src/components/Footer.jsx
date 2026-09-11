import PropTypes from 'prop-types';
import { FiArrowUpRight } from 'react-icons/fi';

const Footer = ({ onOpenPilot }) => {
  return (
    <footer className="w-full bg-[#F7F1EE] text-[#252529] border-t border-[#E7DDD9] pt-12 sm:pt-16 pb-8 sm:pb-12 px-4 sm:px-8 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Main 4-Column Directory Layout matching Reference UI */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-[#E7DDD9]">
          
          {/* Column 1 */}
          <div className="p-6 sm:p-8 lg:border-r border-[#E7DDD9] space-y-8 sm:space-y-10">
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-xs sm:text-sm font-semibold text-[#252529] tracking-widest uppercase font-mono">Platform & Hardware</h4>
              <ul className="space-y-2 sm:space-y-2.5 text-xs text-[#626268]">
                <li><a href="#breakthrough" className="hover:text-[#252529] transition">Smart Mosquito Net</a></li>
                <li><a href="#breakthrough" className="hover:text-[#252529] transition">Optical Vision Sensor</a></li>
                <li><a href="#breakthrough" className="hover:text-[#252529] transition">Acoustic Mic Array</a></li>
                <li><a href="#breakthrough" className="hover:text-[#252529] transition">Thermal Sensor Matrix</a></li>
                <li><a href="#moat" className="hover:text-[#252529] transition">Edge AI Processing Unit</a></li>
              </ul>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-xs sm:text-sm font-semibold text-[#252529] tracking-widest uppercase font-mono">Contact Us</h4>
              <ul className="space-y-2 sm:space-y-2.5 text-xs text-[#626268]">
                <li>
                  <button onClick={onOpenPilot} className="hover:text-[#252529] transition text-left flex items-center gap-1">
                    <span>Join Pilot Cohort</span>
                    <FiArrowUpRight className="text-[#B66F7D] text-xs" />
                  </button>
                </li>
                <li>
                  <a
                    href="/doc/Baby%20System.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#B66F7D] transition text-left flex items-center gap-1 font-medium text-[#252529]"
                  >
                    <span>More Information (PDF)</span>
                    <FiArrowUpRight className="text-[#B66F7D] text-xs" />
                  </a>
                </li>
                <li><a href="#challenges" className="hover:text-[#252529] transition">Technical Support</a></li>
                <li><a href="#market" className="hover:text-[#252529] transition">Partnerships & Sales</a></li>
              </ul>
            </div>
          </div>

          {/* Column 2 */}
          <div className="p-6 sm:p-8 lg:border-r border-[#E7DDD9] space-y-8 sm:space-y-10">
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-xs sm:text-sm font-semibold text-[#252529] tracking-widest uppercase font-mono">Multimodal AI</h4>
              <ul className="space-y-2 sm:space-y-2.5 text-xs text-[#626268]">
                <li><a href="#breakthrough" className="hover:text-[#252529] transition">Acoustic Cry Decoding</a></li>
                <li><a href="#breakthrough" className="hover:text-[#252529] transition">Thermal Respiration Tracking</a></li>
                <li><a href="#breakthrough" className="hover:text-[#252529] transition">Visual Micro-Movement</a></li>
                <li><a href="#breakthrough" className="hover:text-[#252529] transition">LLM Reasoning Engine</a></li>
              </ul>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-xs sm:text-sm font-semibold text-[#252529] tracking-widest uppercase font-mono">About Us</h4>
              <ul className="space-y-2 sm:space-y-2.5 text-xs text-[#626268]">
                <li><a href="#story" className="hover:text-[#252529] transition">Our Story (The 2 AM Moment)</a></li>
                <li>
                  <a
                    href="https://www.spandavidyaai.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#9E5C6B] transition inline-flex items-center gap-1.5 text-[#B66F7D] font-medium font-mono"
                  >
                    <span>Spandavidya AI (Parent Co)</span>
                    <FiArrowUpRight className="text-xs" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3 */}
          <div className="p-6 sm:p-8 lg:border-r border-[#E7DDD9] space-y-8 sm:space-y-10">
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-xs sm:text-sm font-semibold text-[#252529] tracking-widest uppercase font-mono">Data & Research</h4>
              <ul className="space-y-2 sm:space-y-2.5 text-xs text-[#626268]">
                <li><a href="#research" className="hover:text-[#252529] transition">R&D Journey</a></li>
                <li><a href="#research" className="hover:text-[#252529] transition">Pediatric Rule Engine</a></li>
                <li><a href="#research" className="hover:text-[#252529] transition">Annotated Cry Dataset</a></li>
                <li><a href="#challenges" className="hover:text-[#252529] transition">Privacy Architecture</a></li>
              </ul>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-xs sm:text-sm font-semibold text-[#252529] tracking-widest uppercase font-mono">Resources</h4>
              <ul className="space-y-2 sm:space-y-2.5 text-xs text-[#626268]">
                <li><a href="/products/infantmind" className="hover:text-[#252529] transition">Product Specification</a></li>
                <li>
                  <a
                    href="/doc/Baby%20System.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#9E5C6B] transition inline-flex items-center gap-1.5 text-[#B66F7D] font-medium font-mono"
                  >
                    <span>More Information & PDF</span>
                    <FiArrowUpRight className="text-xs" />
                  </a>
                </li>
                <li><a href="#validation" className="hover:text-[#252529] transition">Market Validation</a></li>
              </ul>
            </div>
          </div>

          {/* Column 4 */}
          <div className="p-6 sm:p-8 space-y-8 sm:space-y-10">
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-xs sm:text-sm font-semibold text-[#252529] tracking-widest uppercase font-mono">Market & Business</h4>
              <ul className="space-y-2 sm:space-y-2.5 text-xs text-[#626268]">
                <li><a href="#market" className="hover:text-[#252529] transition">Market Opportunity</a></li>
                <li><a href="#market" className="hover:text-[#252529] transition">Unit Economics</a></li>
                <li><a href="#validation" className="hover:text-[#252529] transition">Competitor Comparison</a></li>
                <li><a href="#validation" className="hover:text-[#252529] transition">Target Customer Segments</a></li>
              </ul>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-xs sm:text-sm font-semibold text-[#252529] tracking-widest uppercase font-mono">Legal & IP</h4>
              <ul className="space-y-2 sm:space-y-2.5 text-xs text-[#626268]">
                <li><span className="hover:text-[#252529] transition cursor-pointer">Patent Pending Notice</span></li>
                <li><span className="hover:text-[#252529] transition cursor-pointer">Privacy & Data Ethics</span></li>
                <li><span className="hover:text-[#252529] transition cursor-pointer">Terms & Conditions</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Brand & Social Media Link Cards Row (Matching Reference) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-[#E7DDD9]">
          
          {/* Brand Logo Card */}
          <div className="p-5 sm:p-8 lg:border-r border-[#E7DDD9] flex items-center justify-between group">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#F3E9EA] border border-[#D8B9BF] flex items-center justify-center">
                <span className="w-2.5 h-2.5 rounded-full bg-[#B66F7D] animate-pulse" />
              </div>
              <div>
                <span className="font-display text-lg font-bold tracking-tight text-[#252529] block leading-none">INFANTMIND</span>
                <a
                  href="https://www.spandavidyaai.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[9px] text-[#B66F7D] hover:underline uppercase tracking-widest block pt-0.5"
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
            className="p-5 sm:p-8 lg:border-r border-[#E7DDD9] flex items-center justify-between group hover:bg-[#FFFDFC] transition-colors"
          >
            <span className="font-mono text-sm font-medium text-[#626268] group-hover:text-[#252529] transition-colors">Linkedin</span>
            <span className="text-[#626268] group-hover:text-[#B66F7D] group-hover:translate-x-1 transition-all text-base">→</span>
          </a>

          {/* Social / Action Card 2: Youtube */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 sm:p-8 lg:border-r border-[#E7DDD9] flex items-center justify-between group hover:bg-[#FFFDFC] transition-colors"
          >
            <span className="font-mono text-sm font-medium text-[#626268] group-hover:text-[#252529] transition-colors">Youtube</span>
            <span className="text-[#626268] group-hover:text-[#B66F7D] group-hover:translate-x-1 transition-all text-base">→</span>
          </a>

          {/* Social / Action Card 3: Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 sm:p-8 flex items-center justify-between group hover:bg-[#FFFDFC] transition-colors"
          >
            <span className="font-mono text-sm font-medium text-[#626268] group-hover:text-[#252529] transition-colors">Instagram</span>
            <span className="text-[#626268] group-hover:text-[#B66F7D] group-hover:translate-x-1 transition-all text-base">→</span>
          </a>
        </div>

        {/* Bottom Baseline Bar (Matching Reference) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-6 text-[#8C8C91] font-mono text-[10px] sm:text-xs">
          <div className="px-6 sm:px-8 py-1.5">
            © All rights reserved 2026.
          </div>
          <div className="px-6 sm:px-8 py-1.5">
            InfantMind AI Platform
          </div>
          <div className="px-6 sm:px-8 py-1.5">
            <a href="https://www.spandavidyaai.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#252529] transition">
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