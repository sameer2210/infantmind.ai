import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiX, FiCheck, FiArrowRight } from 'react-icons/fi';

const PilotDrawer = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', role: 'Parent', location: '' });

  // Escape key press handler & body scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="drawer-title"
      className="fixed inset-0 z-[100] flex justify-end bg-[#252529]/40 backdrop-blur-md transition-opacity"
    >
      <div className="relative w-full max-w-lg bg-[#FFFDFC] border-l border-[#E7DDD9] p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-screen shadow-2xl">
        <div>
          <div className="flex items-center justify-between border-b border-[#E7DDD9] pb-6 mb-6">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#B66F7D] animate-pulse" />
              <span className="font-mono text-xs tracking-widest text-[#626268] uppercase">PILOT PROGRAM ACCESS</span>
            </div>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-full border border-[#E7DDD9] hover:bg-[#F7F1EE] transition text-[#626268] hover:text-[#252529]"
            >
              <FiX className="text-xl" />
            </button>
          </div>

          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#F3E9EA] border border-[#D8B9BF] flex items-center justify-center mx-auto text-[#B66F7D] text-2xl">
                <FiCheck />
              </div>
              <h3 className="font-display text-2xl font-bold text-[#252529]">Application Received</h3>
              <p className="text-[#626268] text-sm leading-relaxed max-w-sm mx-auto">
                Thank you for your interest in InfantMind. Our team will reach out to you shortly regarding pilot availability.
              </p>
              <button
                onClick={() => { setSubmitted(false); onClose(); }}
                className="mt-6 px-6 py-2.5 rounded-full bg-[#B66F7D] text-white font-medium text-sm hover:bg-[#9E5C6B] transition shadow-sm"
              >
                Close Window
              </button>
            </div>
          ) : (
            <div>
              <div className="mb-6">
                <h2 id="drawer-title" className="font-display text-2xl sm:text-3xl font-bold text-[#252529] mb-2">Explore InfantMind</h2>
                <p className="text-[#626268] text-xs sm:text-sm leading-relaxed">
                  Join our exclusive early-access cohort and pediatrician network for the world&apos;s first AI-powered baby understanding system.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="pilot-name" className="block font-mono text-xs text-[#626268] uppercase tracking-wider mb-2">Full Name</label>
                  <input
                    id="pilot-name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#FFFDFC] border border-[#E7DDD9] rounded-xl px-4 py-3 text-sm text-[#252529] placeholder-[#8C8C91] focus:outline-none focus:border-[#B66F7D] focus:ring-1 focus:ring-[#EADBDD] transition"
                  />
                </div>

                <div>
                  <label htmlFor="pilot-email" className="block font-mono text-xs text-[#626268] uppercase tracking-wider mb-2">Email Address</label>
                  <input
                    id="pilot-email"
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#FFFDFC] border border-[#E7DDD9] rounded-xl px-4 py-3 text-sm text-[#252529] placeholder-[#8C8C91] focus:outline-none focus:border-[#B66F7D] focus:ring-1 focus:ring-[#EADBDD] transition"
                  />
                </div>

                <div>
                  <label htmlFor="pilot-role" className="block font-mono text-xs text-[#626268] uppercase tracking-wider mb-2">I am a</label>
                  <select
                    id="pilot-role"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full bg-[#FFFDFC] border border-[#E7DDD9] rounded-xl px-4 py-3 text-sm text-[#252529] focus:outline-none focus:border-[#B66F7D] focus:ring-1 focus:ring-[#EADBDD] transition"
                  >
                    <option value="Parent">Parent / Caregiver</option>
                    <option value="Pediatrician">Pediatrician / Healthcare Professional</option>
                    <option value="Investor">Investor / Industry Partner</option>
                    <option value="Researcher">Researcher / Academic</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="pilot-location" className="block font-mono text-xs text-[#626268] uppercase tracking-wider mb-2">City / Location</label>
                  <input
                    id="pilot-location"
                    type="text"
                    placeholder="e.g. Mumbai, Bengaluru"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-[#FFFDFC] border border-[#E7DDD9] rounded-xl px-4 py-3 text-sm text-[#252529] placeholder-[#8C8C91] focus:outline-none focus:border-[#B66F7D] focus:ring-1 focus:ring-[#EADBDD] transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-6 py-3.5 rounded-full bg-[#B66F7D] text-white font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#9E5C6B] transition shadow-md group"
                >
                  <span>Submit Application</span>
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          )}
        </div>

        <div className="pt-6 border-t border-[#E7DDD9] text-center">
          <p className="font-mono text-[10px] text-[#8C8C91] uppercase tracking-widest">
            Privacy-First Architecture • Encrypted Data Layer
          </p>
        </div>
      </div>
    </div>
  );
};

PilotDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PilotDrawer;
