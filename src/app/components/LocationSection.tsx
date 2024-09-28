import React from 'react';
import SectionWrapper from './SectionWrapper';

const LocationSection: React.FC = () => {
  return (
    <SectionWrapper id="location" title="Location">
      <h3>Your Crypto Oasis Awaits at Sandy Island</h3>
      <p className="text-lg">Experience the beauty of New Hampshire&apos;s largest lake. Our retreat is located in a serene environment perfect for relaxation and networking.</p> 
      <p>Since 1899, Sandy Island has been the backdrop for extraordinary experiences, spread across 66 wooded acres in the heart of Lake Winnipesaukee, New Hampshire. Whether your family is by blood or by blockchain, Sandy Island is the perfect place for you and yours to grow in spirit, body, and mind amidst nature's splendor.</p>
      <h3>Your Journey to Camp Nakamoto</h3>
      <p className="journey">To reach this secluded haven, <strong>drive to Harilla Landing in Moultonborough, NH</strong>, where the road ends and your adventure begins. From there, hop aboard a ferry for a scenic ride to Sandy Island – your gateway to a world where the digital meets the serene waters of Winnipesaukee.</p>
      <p>At Camp Nakamoto, get ready to disconnect from the digital noise and reconnect with nature, while still diving deep into the world of cryptocurrency. Here, every byte of data and bite of food is served with a view of one of New Hampshire's most beautiful lakes.</p>
    </SectionWrapper>
  );
};

export default LocationSection;