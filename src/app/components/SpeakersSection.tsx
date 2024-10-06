"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SpeakerCard from "./SpeakerCard";
import Modal from "./Modal";
import SectionWrapper from './SectionWrapper';

interface Speaker {
  name: string;
  title: string;
  twitterHandle: string;
  imageUrl: string;
  description: string;
  stats: string;
}

const speakers: Speaker[] = [
  {
    name: "Larry Lepard",
    title: "",
    twitterHandle: "@LawrencoLepaerd",
    imageUrl: "/images/larry_lepard.png",
    description: "With over 38 years in investment management, Larry has pivoted from traditional venture capital to become a stalwart advocate for gold and Bitcoin. His firm, Equity Management Associates, stands as a beacon for those seeking refuge from inflation through investments in precious metals and bitcoin related investments. Larry's experience spans from the early days of the internet boom to now, where he's a vocal proponent of Bitcoin's role in a sound money future.",
    stats: ""
  },
  {
    name: "Dave Foley",
    title: "",
    twitterHandle: "@DAAF17",
    imageUrl: "/images/dave_foley.jpg",
    description: "An investment partner with Lawrence Lepard at Equity Management Associates, David Foley is deeply involved in strategies focusing on Bitcoin and precious metals. Alongside James Lavish, David co-manages the Bitcoin Opportunity Fund, navigating both public and private sectors of Bitcoin investment. His approach combines a keen understanding of market trends with a strategic investment mindset, pioneering the future of money through Bitcoin.",
    stats: ""
  },
  {
    name: "Luke Broyles",
    title: "",
    twitterHandle: "@luke_broyles",
    imageUrl: "/images/luke_broyels.jpg",
    description: "Luke has carved a niche in the Bitcoin community not just as an enthusiast but as a marketing maestro. His ability to articulate Bitcoin's value proposition in a way that resonates with both newcomers and seasoned investors showcases his marketing acumen. Luke uses his platform to demystify Bitcoin, making it not just a financial asset but a cultural phenomenon, driving adoption through compelling narratives and insights.",
    stats: ""
  },
  {
    name: "James Lavish",
    title: "",
    twitterHandle: "@jameslavish",
    imageUrl: "/images/james_lavish.jpg",
    description: "James Lavish, CFA, isn't your average financial guru; he's a reformed hedge-fund manager, an ex-Yale hockey player, and now, a beacon of financial wisdom in a world where money seems to evaporate faster than ice in a microwave. With over 25 years navigating the shark-infested waters of institutional investing, James has dodged more financial icebergs than the Titanic.",
    stats: ""
  },
  {
    name: "Michelle Weekley",
    title: "",
    twitterHandle: "@michellaweekley",
    imageUrl: "/images/michelle_weekley.jpg",
    description: "Michelle has navigated a life trajectory that's as colorful as it is profound. With a background in computer science, Michelle spent over 15 years diving deep into the world of early-stage tech startups. Her adventures took her across the globe, from living in the UAE to working in China, where she dipped her toes in Foreign Direct Investment. It was there, amidst the global landscape, she encountered firsthand the corruption that eventually steered her towards the liberating world of Bitcoin in 2016.",
    stats: ""
  },
  {
    name: "Fred Kreuger",
    title: "",
    twitterHandle: "@freddotkruegger",
    imageUrl: "/images/fred_krueger.jpg",
    description: "Fred Kreuger's familiarity with the Power Law in Bitcoin's price movements has made him a notable figure among traders and analysts. His understanding of this mathematical principle, which suggests Bitcoin's price follows a predictable pattern over time, has provided traders with a tool to anticipate market trends. Kreuger's insights into Bitcoin's market behavior are sought after for their precision and foresight.",
    stats: ""
  },
  {
    name: "BJ Dichter",
    title: "",
    twitterHandle: "@BJdichter",
    imageUrl: "/images/bj_dichter.jpg",
    description: "BJ Dichter, known for his leadership in the Canadian Truckers Convoy, brings a perspective on freedom and activism to the Bitcoin space. His involvement in one of the most significant protests against government overreach highlights his commitment to individual liberties. BJ sees Bitcoin not just as a financial tool but as a means for economic freedom, aligning with his activism for personal rights.",
    stats: ""
  },
  {
    name: "Texas Slim",
    title: "",
    twitterHandle: "@modernTman",
    imageUrl: "/images/texas_slim.avif",
    description: "Here comes Texas Slim, a man who's as Texan as they come, with a name that sounds like he could've been a character in a spaghetti western, but instead, he's riding the wild plains of the modern food industry. Born and bred in the Lone Star State, Slim has taken the cowboy ethos into the 21st century, lassoing the world of nutrition, agriculture, and blockchain with the finesse of a rodeo champion.",
    stats: ""
  },
  {
    name: "Anders Jensen",
    title: "",
    twitterHandle: "@Anders_",
    imageUrl: "/images/anders_jensen.jpg",
    description: "Anders Jensen has made a name for himself through successfully organizing and hosting Bitcoin events. His events are not just gatherings but platforms for education, networking, and advocacy within the Bitcoin community. Jensen's ability to bring together diverse groups of Bitcoin enthusiasts and professionals has made him a pivotal figure in expanding Bitcoin's reach and understanding.",
    stats: ""
  }
];

const SpeakersSection: React.FC = () => {
const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  return (
    <SectionWrapper id="speakers" title="Speakers">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {speakers.map((speaker, index) => (
          <motion.div
            key={speaker.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}>
            <SpeakerCard
              name={speaker.name}
              title={speaker.title}
              imageUrl={speaker.imageUrl}
              description={speaker.description}
              onLearnMore={() => setSelectedSpeaker(speaker)}/>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selectedSpeaker && (
          <Modal isOpen={!!selectedSpeaker} onClose={() => setSelectedSpeaker(null)}>
            <h2 className="text-3xl font-bold mb-4 text-bitcoin">{selectedSpeaker.name}</h2>
            <p className="text-2xl mb-4 text-gray-300">{selectedSpeaker.twitterHandle}</p>
            <p className="text-gray-400 mb-4">{selectedSpeaker.description}</p>
          </Modal>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default SpeakersSection;