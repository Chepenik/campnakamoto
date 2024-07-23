import React from 'react';
import SectionWrapper from './SectionWrapper';

const PerksSection: React.FC = () => {
  return (
    <SectionWrapper id="perks" title="Perks">
      <p className="text-lg">
        Enjoy workshops, free food, and exclusive networking opportunities with fellow Bitcoin enthusiasts.
      </p>
    </SectionWrapper>
  );
};

export default PerksSection;