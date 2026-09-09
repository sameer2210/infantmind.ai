import { useState } from 'react';
import PropTypes from 'prop-types';
import { FiX, FiCheck, FiArrowRight } from 'react-icons/fi';

const PilotDrawer = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', role: 'Parent', location: '' });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[100] flex justify-end bg-black/80 backdrop-blur-md transition-opacity">
      <div className="relative w-full max-w-lg bg-[#0c0d10] border-l border-white/10 p-8 flex flex-col justify-between overflow-y-auto">
        <div>
          <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
              <span className="font-mono text-xs tracking-widest text-slate-400 uppercase">PILOT PROGRAM ACCESS</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full border border-white/10 hover:bg-white/10 transition text-slate-400 hover:text-white"
            >
              <FiX className="text-xl" />
            </button>
          </div>

          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center mx-auto text-rose-500 text-2xl">
                <FiCheck />
              </div>
              <h3 className="font-display text-2xl font-bold text-white">Application Received</h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm mx-auto">
                Thank you for your interest in InfantMind. Our team will reach out to you shortly regarding pilot availability.
              </p>
              <button
                onClick={() => { setSubmitted(false); onClose(); }}
                className="mt-6 px-6 py-2.5 rounded-full bg-white text-black font-medium text-sm hover:bg-slate-200 transition"
              >
                Close Window
              </button>
            </div>
          ) : (
            <div>
              <div className="mb-6">
                <h2 className="font-display text-3xl font-bold text-white mb-2">Explore InfantMind</h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Join our exclusive early-access cohort and pediatrician network for the world&apos;s first AI-powered baby understanding system.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-mono text-xs text-slate-400 uppercase tracking-wider mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#121316] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-rose-500 transition"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-slate-400 uppercase tracking-wider mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#121316] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-rose-500 transition"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-slate-400 uppercase tracking-wider mb-2">I am a</label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full bg-[#121316] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-rose-500 transition"
                  >
                    <option value="Parent">Parent / Caregiver</option>
                    <option value="Pediatrician">Pediatrician / Healthcare Professional</option>
                    <option value="Investor">Investor / Industry Partner</option>
                    <option value="Researcher">Researcher / Academic</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-xs text-slate-400 uppercase tracking-wider mb-2">City / Location</label>
                  <input
                    type="text"
                    placeholder="e.g. Mumbai, Bengaluru"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-[#121316] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-rose-500 transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-6 py-3.5 rounded-full bg-white text-black font-semibold text-sm flex items-center justify-center gap-2 hover:bg-slate-200 transition group"
                >
                  <span>Submit Application</span>
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          )}
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="font-mono text-xs text-slate-500 uppercase tracking-widest">
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
