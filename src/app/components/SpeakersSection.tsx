"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SpeakerCard from "./SpeakerCard";
import Modal from "./Modal";

interface Speaker {
  name: string;
  title: string;
  imageUrl: string;
  description: string;
  stats: string;
}

const speakers: Speaker[] = [
  {
    name: "Satoshi Nakamoto",
    title: "Creator of Bitcoin",
    imageUrl: "https://i.nostr.build/AdWdB2uy3E3FVFGS.png",
    description: "The mysterious and pseudonymous creator of Bitcoin.",
    stats: "Satoshi Nakamoto is the name used by the presumed pseudonymous person or persons who developed bitcoin, authored the bitcoin white paper, and created and deployed bitcoin's original reference implementation."
  },
  {
    name: "Andreas Antonopoulos",
    title: "Bitcoin Advocate",
    imageUrl: "https://i.nostr.build/gFPYOgJhWf6JkzPr.png",
    description: "One of the most well-known Bitcoin advocates and educators.",
    stats: "Andreas M. Antonopoulos is a Greek-British bitcoin advocate, tech entrepreneur, and author. He is a host on the Let's Talk Bitcoin podcast and a teaching fellow for the M.Sc. Digital Currencies at the University of Nicosia."
  },
  {
    name: "Adam Back",
    title: "CEO of Blockstream",
    imageUrl: "https://i.nostr.build/1eEAJrd6TBxOdcQK.png",
    description: "Inventor of Hashcash and CEO of Blockstream.",
    stats: "Adam Back is a British cryptographer and cypherpunk. He invented hashcash, a proof-of-work system used in bitcoin mining, and is the CEO of Blockstream, a blockchain technology company."
  },
];

const SpeakersSection: React.FC = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  return (
    <section id="speakers" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-5xl font-bold mb-12 text-bitcoin text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Speakers
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SpeakerCard
                name={speaker.name}
                title={speaker.title}
                imageUrl={speaker.imageUrl}
                description={speaker.description}
                onLearnMore={() => setSelectedSpeaker(speaker)}
              />
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedSpeaker && (
          <Modal isOpen={!!selectedSpeaker} onClose={() => setSelectedSpeaker(null)}>
            <h2 className="text-3xl font-bold mb-4 text-bitcoin">{selectedSpeaker.name}</h2>
            <p className="text-2xl mb-4 text-gray-300">{selectedSpeaker.title}</p>
            <p className="text-gray-400 mb-4">{selectedSpeaker.stats}</p>
          </Modal>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SpeakersSection;