import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi';

const Navbar = ({ onOpenPilot }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Understanding', href: '#story' },
    { name: 'Technology', href: '#redefining' },
    { name: 'How It Works', href: '#breakthrough' },
    { name: 'Market', href: '#market' },
    { name: 'Research', href: '#research' },
    { name: 'Challenges', href: '#challenges' },
  ];

  return (
    <>
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300">
        <div className={`w-full max-w-6xl nav-capsule rounded-full px-6 py-3.5 flex items-center justify-between transition-all duration-300 ${scrolled ? 'bg-[#0c0d10]/90 border-white/20 shadow-2xl' : 'bg-[#0c0d10]/60 border-white/10'}`}>
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 group-hover:scale-125 transition-transform" />
            <span className="font-display text-lg font-bold tracking-tight text-white">INFANTMIND</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest text-slate-400 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onOpenPilot}
              className="px-5 py-2 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 hover:bg-rose-500 hover:text-white transition-all duration-300 group"
            >
              <span>Explore InfantMind</span>
              <FiArrowUpRight className="text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-1 text-xl focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#07080a] flex flex-col justify-between p-8 pt-28 md:hidden border-b border-white/10">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-2xl font-semibold text-slate-200 hover:text-rose-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-white/10 space-y-4">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenPilot(); }}
              className="w-full py-3.5 rounded-full bg-white text-black font-semibold text-sm flex items-center justify-center gap-2 hover:bg-slate-200 transition"
            >
              <span>Explore InfantMind</span>
              <FiArrowUpRight />
            </button>
            <p className="text-center font-mono text-xs text-slate-500 uppercase tracking-widest">
              AI-POWERED BABY UNDERSTANDING SYSTEM
            </p>
          </div>
        </div>
      )}
    </>
  );
};

Navbar.propTypes = {
  onOpenPilot: PropTypes.func.isRequired,
};

export default Navbar;