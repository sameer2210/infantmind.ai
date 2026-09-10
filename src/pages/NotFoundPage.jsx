import PropTypes from 'prop-types';
import { FiArrowLeft } from 'react-icons/fi';
import SeoHead from '../components/SeoHead';

const NotFoundPage = ({ navigate }) => {
  return (
    <div className="w-full min-h-screen bg-[#07080a] text-white flex flex-col justify-between pt-32 pb-16 px-6 sm:px-12 text-center">
      <SeoHead
        title="404 — Page Not Found | InfantMind AI"
        description="The page you are looking for does not exist on InfantMind AI."
        canonicalUrl="https://infantmind.ai/404"
      />

      <div className="max-w-2xl mx-auto my-auto space-y-6">
        <div className="pill-badge border-rose-500/30 bg-rose-500/10 text-rose-400 mx-auto">
          <span>404 ERROR</span>
        </div>

        <h1 className="font-display text-5xl sm:text-7xl font-bold uppercase tracking-tight text-white">
          PAGE NOT <span className="text-rose-500">FOUND</span>
        </h1>

        <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
          The requested page could not be located. Explore the InfantMind AI platform or return to the main product page.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3.5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-rose-500 hover:text-white transition group"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span>Return to Home</span>
          </button>
          <button
            onClick={() => navigate('/products/infantmind')}
            className="px-6 py-3.5 rounded-full border border-white/20 text-white text-xs font-mono uppercase tracking-wider hover:bg-white/10 transition"
          >
            View Smart Net Product
          </button>
        </div>
      </div>

      <div className="font-mono text-xs text-slate-600 uppercase tracking-widest pt-8">
        INFANTMIND AI • 404 NAVIGATION FALLBACK
      </div>
    </div>
  );
};

NotFoundPage.propTypes = {
  navigate: PropTypes.func.isRequired,
};

export default NotFoundPage;
