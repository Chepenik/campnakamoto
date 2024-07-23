import React from 'react';
import SectionWrapper from './SectionWrapper';

const HousingSection: React.FC = () => {
  return (
    <SectionWrapper id="housing" title="Housing">
      <p className="text-lg">
        Comfortable accommodations will be provided for all attendees. Choose from cabins, tents, or lodges.
      </p>
    </SectionWrapper>
  );
};

export default HousingSection;