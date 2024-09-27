import React from 'react';
import SectionWrapper from './SectionWrapper';

const DiningSection: React.FC = () => {
  return (
    <SectionWrapper id="dining" title="Dining">
      <h3>Feast Like a Crypto King at Camp Nakamoto</h3>
      <ul>
          <li>🍴 <strong>Central Dining Hall</strong>: Gather at our central dining hall where the community comes together over meals, turning strangers into blockchain buddies.</li>
          <li>🍴 <strong>All Meals Included</strong>: From sunrise to sunset, we've got you covered with breakfast, lunch, and dinner. No need to mine for food here!</li>
          <li>🍴 <strong>Cattleman's Feast</strong>: An epic meal that's the talk of the blockchain. Experience the Cattleman's Feast - where we celebrate our gains with gains on the grill!</li>
      </ul>

      <h3>Weekly Menu Highlights</h3>
      <ul>
          <li className="meal"><strong>Thursday Dinner</strong> - Welcome BBQ: Kick off your crypto-camp journey with a BBQ that's as welcoming as a bull market.</li>
          <li className="meal"><strong>Friday Dinner</strong> - Cookout: Grill and chill under the stars, where the only thing getting roasted more than marshmallows is the concept of centralized banking.</li>
          <li className="meal"><strong>Saturday Dinner</strong> - <strong>Cattleman's Feast</strong>: A feast fit for crypto royalty. Beef up your evening with this legendary spread.</li>
          <li className="meal"><strong>Friday Lunch</strong> - Taco Bar: Build your own tacos, because here, you control the toppings like you control your crypto portfolio.</li>
          <li className="meal"><strong>Saturday Lunch</strong> - Build Your Own Sandwiches: Craft your masterpiece. Your sandwich, your rules, much like your crypto strategy.</li>
          <li className="meal"><strong>Breakfast</strong>: Standard summer camp style breakfast every morning. Because some things, like the need for bacon and eggs, never change in the world of ever-evolving digital currencies.</li>
      </ul>

      <p>At <strong>Camp Nakamoto</strong>, we believe in feeding both your body and your curiosity. Enjoy meals that power you through a day of learning, networking, and crypto-adventures!</p>
    </SectionWrapper>
  );
};

export default DiningSection;