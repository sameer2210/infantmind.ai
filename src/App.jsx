import { useState } from 'react';
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

const App = () => {
  const [pilotOpen, setPilotOpen] = useState(false);

  return (
    <main className="relative min-h-screen w-full bg-[#07080a] text-white selection:bg-rose-500 selection:text-white">
      <Navbar onOpenPilot={() => setPilotOpen(true)} />
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
      <PilotDrawer isOpen={pilotOpen} onClose={() => setPilotOpen(false)} />
    </main>
  );
};

export default App;