import React from 'react';
import SectionWrapper from './SectionWrapper';

const ActivitySection: React.FC = () => {
  return (
    <SectionWrapper id="activities" title="Activities">
      <h3>Forge Your Path in Crypto at Camp Nakamoto</h3>
      <h4>Formal Presentations</h4>
      <ul>
          <li>🎤 <strong>Speakers Series</strong>: Engage with the luminaries of the crypto world. Learn, question, and be inspired by industry leaders who've navigated the blockchain before it was cool.</li>
      </ul>
      <h2>Informal Activities</h2>
      <ul>
          <li>🛣️ <strong>Bitcoin Road</strong>: Walk through 'Living CandyLand', but with a twist - it's all about Bitcoins! Solve puzzles, win treats, and maybe even some sats!</li>
          <li>✂️ <strong>Arts & Crafts</strong>: Get hands-on with leather crafting or tie-dyeing. Make something tangible in this digital world. Your wallet's not just for crypto anymore!</li>
          <li>🎤 <strong>Lightning Karaoke Event Night 2</strong>: Belt out crypto-themed tunes or your favorite hits at lightning speed. Will your voice be the next big thing on the blockchain?</li>
          <li>🔥 <strong>Bonfire Event Night 3</strong>: Gather 'round the fire for stories, s'mores, and perhaps a spontaneous debate on the future of currency. The only thing burning here is passion for crypto.</li>
          <li>🍸 <strong>Cocktail Hour Nightly</strong>: Unwind, network, or discuss the day's gains over crafted cocktails. Here, 'mixing' isn't just for drinks but for ideas too.</li>
          <li>💪 <strong>Morning xFit with Larry Lepard</strong>: Start your day with a workout that's as intense as the crypto market. Larry Lepard leads the charge, ensuring your body is as fit as your crypto strategy.</li>
      </ul>
      <p>At <strong>Camp Nakamoto</strong>, every activity is a node in the network of your camp experience, linking you to new friends, skills, and maybe even your next big investment idea. Dive into activities that are as diverse as the blockchain itself!</p>
    </SectionWrapper>
  );
};

export default ActivitySection;