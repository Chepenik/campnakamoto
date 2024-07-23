"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

interface SpeakerCardProps {
  name: string;
  title: string;
  imageUrl: string;
  description: string;
  onLearnMore: () => void;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ name, title, imageUrl, description, onLearnMore }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <CardContainer
      className="inter-var w-full aspect-[4/5]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardBody className="relative group/card bg-gray-50 dark:bg-gray-900 w-full h-full rounded-xl p-6 border-2 border-gray-200 dark:border-gray-700 shadow-xl transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl flex flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-60 z-10"></div>
        <CardItem
          translateZ={50}
          className="text-2xl font-bold text-white z-20"
        >
          {name}
        </CardItem>
        <CardItem
          as="p"
          translateZ={60}
          className="text-gray-200 text-sm z-20"
        >
          {title}
        </CardItem>
        <CardItem
          translateZ={100}
          className="w-full h-full absolute inset-0"
        >
          <Image
            src={imageUrl}
            layout="fill"
            objectFit="cover"
            className="rounded-xl transition-all duration-300 ease-out group-hover/card:scale-110"
            alt={name}
          />
        </CardItem>
        <CardItem
          as="p"
          translateZ={60}
          className="text-white text-sm mt-2 z-20 line-clamp-2"
        >
          {description}
        </CardItem>
        <motion.div 
          className="mt-4 z-20"
          animate={{ y: isHovered ? -5 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <CardItem
            translateZ={20}
            as="button"
            onClick={onLearnMore}
            className="w-full px-4 py-2 rounded-xl bg-white text-gray-900 text-sm font-bold transition-all duration-300 ease-out hover:bg-opacity-90"
          >
            Learn More
          </CardItem>
        </motion.div>
      </CardBody>
    </CardContainer>
  );
};

export default SpeakerCard;