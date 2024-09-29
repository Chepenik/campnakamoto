import React from 'react';
import SectionWrapper from './SectionWrapper';

const ActivitySection: React.FC = () => {
  return (
    <SectionWrapper id="activities" title="Activities">
      <h3>Forge Your Path at Camp Nakamoto</h3>
      <h4>Formal Presentations</h4>
      <ul>
          <li><i>🎤</i><strong>Speakers Series</strong>: Engage with the luminaries of the bitcoin community. Learn, question, and be inspired by industry leaders who&apos;ve navigated the blockchain before it was cool.</li>
      </ul>
      <h3>Informal Activities</h3>
      <ul>
          <li><i>🛣</i><strong>Bitcoin Road</strong>: Walk through &apos;Living CandyLand&apos;, but with a twist - it&apos;s all about Bitcoins! Get to hyperbitcoinization first!, win treats, and maybe even some sats!</li>
          <li><i>✂️</i><strong>Arts & Crafts</strong>: Get hands-on with leather crafting or tie-dyeing. Make something tangible in this digital world. Your wallet&apos;s not just for storing sats anymore!</li>
          <li><i>🎤</i><strong>Lightning Karaoke Event Night</strong>: Belt out bitcion-themed tunes or your favorite hits at lightning speed. Will your voice be the next big thing on the inscribed on the blockchain?</li>
          <li><i>🔥</i><strong>Bonfire Event Night</strong>: Gather &apos;round the fire for stories, s&apos;mores, and perhaps a spontaneous debate on the future of currency. The only thing burning here is passion for Satoshi&apos;s gift.</li>
          <li><i>🍸</i><strong>Cocktail Hour Nightly</strong>: Unwind, network, or discuss the day&apos;s gains over crafted cocktails. Here, &apos;mixing&apos; isn&apos;t just for drinks but for ideas too.</li>
          <li><i>💪</i><strong>Morning Cross-Fit with Larry Lepard</strong>: Start your day with a workout that&apos;s as intense as the bitcoin&apos;s market moves. Larry Lepard leads the charge, ensuring your body is as fit as your hodling strategy.</li>
      </ul>
      <p>At <strong>Camp Nakamoto</strong>, every activity is a node in the network of your camp experience, linking you to new friends, skills, and maybe even your next big investment idea. Dive into activities that are as diverse as the bitcoin&apos;s blockchain itself!</p>
    </SectionWrapper>
  );
};

export default ActivitySection;