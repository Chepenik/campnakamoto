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

const SpeakerCard: React.FC<SpeakerCardProps> = ({ name, title, imageUrl, onLearnMore }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <CardContainer
      className="inter-var w-full aspect-[4/5]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardBody className="relative group/card bg-gray-50 dark:bg-gray-900 w-full h-full rounded-xl border-2 border-gray-200 dark:border-gray-700 shadow-xl transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl flex flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-60 z-10"></div>
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
        <div className="relative z-20 flex flex-col h-full justify-between p-6">
          <div>
            <CardItem
              translateZ={50}
              className="text-2xl font-bold text-gray-200 mb-2"
            >
              {name}
            </CardItem>
          </div>
          <div className="relative z-20 flex flex-col h-full justify-between p-6">
          <CardItem
              as="p"
              translateZ={60}
              className="text-orange-500 text-sm"
            >
              {title}
            </CardItem>
          </div>
          <div className="m-4 justify-center">
            <motion.div 
              animate={{ y: isHovered ? 0 : 0.5 }}
              transition={{ duration: 0.3 }}
            >
              <CardItem
                translateZ={20}
                as="button"
                onClick={onLearnMore}
                className=" px-4 mb-4 rounded-xl bg-orange-500 text-white text-sm font-bold hover:bg-white hover:text-orange-500 border-2 border-transparent hover:border-orange-500"
              >
                Learn More
              </CardItem>
            </motion.div>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default SpeakerCard;