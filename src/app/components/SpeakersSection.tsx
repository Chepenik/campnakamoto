"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

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
    imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=3270&ixlib=rb-4.0.3",
    description: "The mysterious and pseudonymous creator of Bitcoin.",
    stats: "Satoshi Nakamoto is the name used by the presumed pseudonymous person or persons who developed bitcoin, authored the bitcoin white paper, and created and deployed bitcoin's original reference implementation."
  },
  {
    name: "Andreas Antonopoulos",
    title: "Bitcoin Advocate",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=2970&ixlib=rb-4.0.3",
    description: "One of the most well-known Bitcoin advocates and educators.",
    stats: "Andreas M. Antonopoulos is a Greek-British bitcoin advocate, tech entrepreneur, and author. He is a host on the Let's Talk Bitcoin podcast and a teaching fellow for the M.Sc. Digital Currencies at the University of Nicosia."
  },
  {
    name: "Adam Back",
    title: "CEO of Blockstream",
    imageUrl: "https://images.unsplash.com/photo-1609554496796-c345a5335ceb?auto=format&fit=crop&q=80&w=3270&ixlib=rb-4.0.3",
    description: "Inventor of Hashcash and CEO of Blockstream.",
    stats: "Adam Back is a British cryptographer and cypherpunk. He invented hashcash, a proof-of-work system used in bitcoin mining, and is the CEO of Blockstream, a blockchain technology company."
  },
];

const SpeakersSection: React.FC = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  return (
    <section id="speakers" className="py-20 bg-gray-900">
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
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-800 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-2xl font-bold text-bitcoin"
                  >
                    {speaker.name}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-bitcoin text-sm max-w-sm mt-2"
                  >
                    {speaker.title}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={speaker.imageUrl}
                      height={200}
                      width={200}
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={speaker.name}
                    />
                  </CardItem>
                  <CardItem
                    translateZ="50"
                    className="text-white text-sm mt-4"
                  >
                    {speaker.description}
                  </CardItem>
                  <div className="flex justify-end items-center mt-4">
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-bitcoin text-white text-sm font-bold"
                      onClick={() => setSelectedSpeaker(speaker)}
                    >
                      Learn More
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
      </div>
      {selectedSpeaker && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setSelectedSpeaker(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gray-800 rounded-lg p-8 max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-bold mb-4 text-bitcoin">{selectedSpeaker.name}</h2>
            <p className="text-xl mb-4 text-gray-300">{selectedSpeaker.title}</p>
            <p className="text-gray-400 mb-4">{selectedSpeaker.stats}</p>
            <button
              onClick={() => setSelectedSpeaker(null)}
              className="px-4 py-2 bg-bitcoin text-white rounded-lg hover:bg-bitcoin-dark transition duration-300"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default SpeakersSection;