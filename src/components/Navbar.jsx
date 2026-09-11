import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi';

const Navbar = ({ onOpenPilot, navigate, currentPath }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Section Observer for Active Nav Highlighting
  useEffect(() => {
    if (currentPath === '/products/infantmind') {
      setActiveSection('products');
      return;
    }

    const sectionIds = ['story', 'redefining', 'research', 'market', 'challenges'];
    const handleObserver = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }
      setActiveSection('home');
    };

    window.addEventListener('scroll', handleObserver);
    return () => window.removeEventListener('scroll', handleObserver);
  }, [currentPath]);

  // Lock body scroll and handle Escape key for mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const isProductPage = currentPath === '/products/infantmind';

  const handleNavClick = (e, href, isRoute = false) => {
    e.preventDefault();
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }

    if (isRoute) {
      navigate(href);
    } else {
      if (isProductPage) {
        navigate('/');
        setTimeout(() => {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      } else {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { id: 'story', label: 'Understanding', href: '#story' },
    { id: 'redefining', label: 'Technology', href: '#redefining' },
    { id: 'products', label: 'Products', href: '/products/infantmind', isRoute: true },
    { id: 'research', label: 'Research', href: '#research' },
    { id: 'market', label: 'Market', href: '#market' },
    { id: 'challenges', label: 'Challenges', href: '#challenges' },
  ];

  return (
    <>
      {/* Floating Header Container matching Reference UI */}
      <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-4 sm:px-8 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* LEFT: Standalone Brand Identity */}
          <a
            href="/"
            onClick={(e) => handleNavClick(e, '/', true)}
            className="flex items-center gap-2.5 group shrink-0 cursor-pointer py-2 px-3 rounded-full bg-[#FFFDFC]/90 border border-[#E7DDD9] backdrop-blur-md hover:bg-[#F7F1EE] transition shadow-sm"
            aria-label="InfantMind AI Home"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#B66F7D] group-hover:scale-125 transition-transform" />
            <span className="font-display text-base sm:text-lg font-bold tracking-tight text-[#252529] uppercase">INFANTMIND</span>
          </a>

          {/* CENTER: Floating Capsule Pill (Only Nav Links) */}
          <nav
            aria-label="Main Navigation"
            className={`hidden lg:flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full border transition-all duration-300 ${
              scrolled
                ? 'bg-[#FFFDFC]/95 border-[#E7DDD9] shadow-md backdrop-blur-2xl'
                : 'bg-[#FFFDFC]/80 border-[#E7DDD9] backdrop-blur-xl shadow-sm'
            }`}
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id || (item.isRoute && isProductPage);
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.isRoute)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`text-xs font-mono tracking-wider transition-all duration-200 px-3.5 py-1.5 rounded-full flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#F3E9EA] text-[#B66F7D] font-semibold border border-[#D8B9BF]'
                      : 'text-[#626268] hover:text-[#252529] hover:bg-[#F7F1EE]'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.isRoute && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B66F7D] inline-block" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* RIGHT: Action Group (Spandavidya AI + Primary CTA) */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Secondary Parent Link */}
            <a
              href="https://www.spandavidyaai.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:flex items-center gap-1 px-3 py-1.5 rounded-full font-mono text-[11px] text-[#B66F7D] hover:text-[#9E5C6B] hover:bg-[#F3E9EA] border border-transparent hover:border-[#D8B9BF] transition-all duration-200"
              title="Visit Parent Company: Spandavidya AI"
            >
              <span>Spandavidya AI</span>
              <FiArrowUpRight className="text-xs" />
            </a>

            {/* Primary CTA */}
            <button
              onClick={onOpenPilot}
              className="hidden sm:flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full bg-[#B66F7D] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#9E5C6B] transition-all duration-300 shadow-sm group"
            >
              <span>Explore InfantMind</span>
              <FiArrowUpRight className="text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Mobile / Tablet Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-[#252529] p-2.5 rounded-full bg-[#FFFDFC]/90 border border-[#E7DDD9] backdrop-blur-md hover:bg-[#F7F1EE] transition focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? <FiX className="text-lg" /> : <FiMenu className="text-lg" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile / Tablet Fullscreen Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 z-40 bg-[#FBF8F5]/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 pt-28 lg:hidden border-b border-[#E7DDD9] overflow-y-auto font-sans"
        >
          {/* Header Bar inside Menu */}
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[10px] text-[#B66F7D] uppercase tracking-widest block pb-2 border-b border-[#E7DDD9]">
              NAVIGATION DIRECTORY
            </span>

            <div className="flex flex-col gap-3">
              <a
                href="/"
                onClick={(e) => handleNavClick(e, '/', true)}
                className={`font-display text-2xl font-semibold tracking-tight transition-colors ${
                  !isProductPage ? 'text-[#252529]' : 'text-[#626268] hover:text-[#252529]'
                }`}
              >
                Home
              </a>

              {navItems.map((item) => {
                const isActive = activeSection === item.id || (item.isRoute && isProductPage);
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href, item.isRoute)}
                    className={`font-display text-xl sm:text-2xl tracking-tight transition-colors flex items-center justify-between py-1 ${
                      isActive ? 'text-[#B66F7D] font-bold' : 'text-[#626268] hover:text-[#252529]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.isRoute && (
                      <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-[#F3E9EA] text-[#B66F7D] border border-[#D8B9BF]">
                        PRODUCT PAGE
                      </span>
                    )}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Bottom Action Section inside Mobile Menu */}
          <div className="pt-8 border-t border-[#E7DDD9] space-y-3 mt-8">
            <a
              href="https://www.spandavidyaai.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full border border-[#D8B9BF] bg-[#F3E9EA] text-[#B66F7D] font-mono text-xs font-semibold tracking-wider flex items-center justify-center gap-2 hover:bg-[#B66F7D] hover:text-white transition"
            >
              <span>Spandavidya AI (Parent Company)</span>
              <FiArrowUpRight />
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPilot();
              }}
              className="w-full py-3.5 rounded-full bg-[#B66F7D] text-white font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#9E5C6B] transition-all shadow-md"
            >
              <span>Explore InfantMind</span>
              <FiArrowUpRight />
            </button>

            <p className="text-center font-mono text-[10px] text-[#8C8C91] uppercase tracking-widest pt-2">
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