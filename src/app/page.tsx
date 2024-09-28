import React from 'react';
import HeroSection from './components/HeroSection';
import SpeakersSection from './components/SpeakersSection';
import ActivitySection from './components/ActivitySection';
import LocationSection from './components/LocationSection';
import DiningSection from './components/DiningSection';
import HousingSection from './components/HousingSection';

const Home: React.FC = () => {
  return (
    <div>
        <HeroSection />
        <LocationSection />
        <SpeakersSection />
        <ActivitySection />
        <HousingSection />
        <DiningSection />
    </div>
  );
}

export default Home;