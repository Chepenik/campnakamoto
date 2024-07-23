import React from 'react';
import HeroSection from './components/HeroSection';
import { TracingBeam } from './components/TracingBeam';
import SpeakersSection from './components/SpeakersSection';
import ActivitySection from './components/ActivitySection';
import LocationSection from './components/LocationSection';
import HousingSection from './components/HousingSection';
import PerksSection from './components/PerksSection';

const Home: React.FC = () => {
  return (
    <div className="bg-background text-accent">
      <TracingBeam>
        <HeroSection />
        <ActivitySection />
        <LocationSection />
        <HousingSection />
        <SpeakersSection />
        <PerksSection />
      </TracingBeam>
    </div>
  );
}

export default Home;