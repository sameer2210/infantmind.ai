import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi';

const Navbar = ({ onOpenPilot, navigate, currentPath }) => {
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

  const isProductPage = currentPath === '/products/infantmind';

  const handleNavClick = (e, href, isRoute = false) => {
    e.preventDefault();
    if (isRoute) {
      navigate(href);
    } else {
      if (isProductPage) {
        // If on product page, go home first then scroll
        navigate('/');
        setTimeout(() => {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300">
        <div className={`w-full max-w-6xl nav-capsule rounded-full px-6 py-3.5 flex items-center justify-between transition-all duration-300 ${scrolled ? 'bg-[#0c0d10]/95 border-white/20 shadow-2xl backdrop-blur-2xl' : 'bg-[#0c0d10]/70 border-white/10'}`}>
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => handleNavClick(e, '/', true)}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 group-hover:scale-125 transition-transform" />
            <span className="font-display text-lg font-bold tracking-tight text-white">INFANTMIND</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            <a
              href="#story"
              onClick={(e) => handleNavClick(e, '#story')}
              className="text-xs uppercase tracking-widest text-slate-400 hover:text-white transition-colors duration-200"
            >
              Understanding
            </a>
            <a
              href="#redefining"
              onClick={(e) => handleNavClick(e, '#redefining')}
              className="text-xs uppercase tracking-widest text-slate-400 hover:text-white transition-colors duration-200"
            >
              Technology
            </a>

            {/* REAL PRODUCTS ROUTE LINK */}
            <a
              href="/products/infantmind"
              onClick={(e) => handleNavClick(e, '/products/infantmind', true)}
              className={`text-xs uppercase tracking-widest transition-colors duration-200 flex items-center gap-1 font-bold ${
                isProductPage ? 'text-rose-400 border-b-2 border-rose-500 pb-0.5' : 'text-slate-300 hover:text-white'
              }`}
            >
              <span>Products</span>
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 inline-block" />
            </a>

            <a
              href="#research"
              onClick={(e) => handleNavClick(e, '#research')}
              className="text-xs uppercase tracking-widest text-slate-400 hover:text-white transition-colors duration-200"
            >
              Research
            </a>
            <a
              href="#market"
              onClick={(e) => handleNavClick(e, '#market')}
              className="text-xs uppercase tracking-widest text-slate-400 hover:text-white transition-colors duration-200"
            >
              Market
            </a>
            <a
              href="#challenges"
              onClick={(e) => handleNavClick(e, '#challenges')}
              className="text-xs uppercase tracking-widest text-slate-400 hover:text-white transition-colors duration-200"
            >
              Challenges
            </a>
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onOpenPilot}
              className="px-5 py-2 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 hover:bg-rose-500 hover:text-white transition-all duration-300 group shadow-md"
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
            <a
              href="/"
              onClick={(e) => { setMobileMenuOpen(false); handleNavClick(e, '/', true); }}
              className="font-display text-2xl font-semibold text-slate-200 hover:text-rose-500 transition-colors"
            >
              Home
            </a>
            <a
              href="/products/infantmind"
              onClick={(e) => { setMobileMenuOpen(false); handleNavClick(e, '/products/infantmind', true); }}
              className="font-display text-2xl font-bold text-rose-400 hover:text-rose-300 transition-colors flex items-center justify-between"
            >
              <span>Products (Smart Net)</span>
              <FiArrowUpRight />
            </a>
            <a
              href="#story"
              onClick={(e) => { setMobileMenuOpen(false); handleNavClick(e, '#story'); }}
              className="font-display text-xl font-medium text-slate-300 hover:text-rose-500 transition-colors"
            >
              Understanding
            </a>
            <a
              href="#redefining"
              onClick={(e) => { setMobileMenuOpen(false); handleNavClick(e, '#redefining'); }}
              className="font-display text-xl font-medium text-slate-300 hover:text-rose-500 transition-colors"
            >
              Technology
            </a>
            <a
              href="#market"
              onClick={(e) => { setMobileMenuOpen(false); handleNavClick(e, '#market'); }}
              className="font-display text-xl font-medium text-slate-300 hover:text-rose-500 transition-colors"
            >
              Market & Business
            </a>
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
  navigate: PropTypes.func.isRequired,
  currentPath: PropTypes.string.isRequired,
};

export default Navbar;