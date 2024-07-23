"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(0, 0, 0, 0.8)']
  );
  const textColor = useTransform(
    scrollY,
    [0, 100],
    ['rgb(0, 0, 0)', 'rgb(255, 255, 255)']
  );

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { href: "#activities", label: "Activities" },
    { href: "#location", label: "Location" },
    { href: "#housing", label: "Housing" },
    { href: "#speakers", label: "Speakers" },
    { href: "#perks", label: "Perks" },
  ];

  return (
    <motion.nav 
      style={{ backgroundColor }}
      className="fixed w-full z-50 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <motion.div style={{ color: textColor }}>
          <Link href="/" className="text-2xl font-bold">
            Camp Nakamoto
          </Link>
        </motion.div>
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <motion.div key={item.href} style={{ color: textColor }}>
              <Link 
                href={item.href} 
                className="text-lg hover:text-gray-600 transition duration-300"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>
        <motion.button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          style={{ color: textColor }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </motion.button>
      </div>
      {isOpen && (
        <motion.div 
          className="md:hidden bg-white bg-opacity-90"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2 px-4 text-sm text-black hover:bg-gray-200"
              onClick={toggleMenu}
            >
              {item.label}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;