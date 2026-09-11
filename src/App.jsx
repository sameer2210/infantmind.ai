import { useState, useEffect } from 'react';
import { useRoute } from './hooks/useRoute';
import SeoHead from './components/SeoHead';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story2AM from './components/Story2AM';
import RedefiningCare from './components/RedefiningCare';
import BreakthroughTabs from './components/BreakthroughTabs';
import TechnologyMoat from './components/TechnologyMoat';
import MarketEconomics from './components/MarketEconomics';
import ValidationCustomers from './components/ValidationCustomers';
import ResearchTimeline from './components/ResearchTimeline';
import ChallengesSection from './components/ChallengesSection';
import CinematicCTA from './components/CinematicCTA';
import Footer from './components/Footer';
import PilotDrawer from './components/PilotDrawer';
import InfantMindProductPage from './pages/InfantMindProductPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  const { currentPath, navigate } = useRoute();
  const [pilotOpen, setPilotOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPath]);

  const isHome = currentPath === '/' || currentPath === '' || currentPath.startsWith('/#');
  const isProductPage = currentPath === '/products/infantmind' || currentPath === '/products/infantmind/';

  return (
    <main className="relative min-h-screen w-full bg-[#FBF8F5] text-[#252529] selection:bg-[#B66F7D] selection:text-[#FFFDFC]">
      <Navbar
        onOpenPilot={() => setPilotOpen(true)}
        navigate={navigate}
        currentPath={currentPath}
      />

      {isProductPage ? (
        <InfantMindProductPage onOpenPilot={() => setPilotOpen(true)} />
      ) : isHome ? (
        <>
          {/* Homepage Unique SEO Metadata */}
          <SeoHead
            title="InfantMind AI — AI-Powered Baby Understanding Platform"
            description="Every cry has a meaning — we decode it. InfantMind combines video, acoustic, and thermal sensors in a smart mosquito net to provide actionable baby insights."
            canonicalUrl="https://infantmind.ai/"
            ogType="website"
            ogImage="https://infantmind.ai/img/hero-net.jpg"
          />

          <Hero onOpenPilot={() => setPilotOpen(true)} />
          <Story2AM />
          <RedefiningCare />
          <BreakthroughTabs />
          <TechnologyMoat />
          <MarketEconomics />
          <ValidationCustomers />
          <ResearchTimeline />
          <ChallengesSection />
          <CinematicCTA onOpenPilot={() => setPilotOpen(true)} />
          <Footer onOpenPilot={() => setPilotOpen(true)} />
        </>
      ) : (
        <NotFoundPage navigate={navigate} />
      )}

      <PilotDrawer isOpen={pilotOpen} onClose={() => setPilotOpen(false)} />
    </main>
  );
};

export default App;