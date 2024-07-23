import React from 'react';
import SectionWrapper from './SectionWrapper';

const ActivitySection: React.FC = () => {
  return (
    <SectionWrapper id="activities" title="Activities">
      <p className="text-lg">
        Join a variety of exciting activities including hiking, boating, and coding workshops.
      </p>
    </SectionWrapper>
  );
};

export default ActivitySection;