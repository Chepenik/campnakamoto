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
    ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.8)']
  );
  const textColor = useTransform(
    scrollY,
    [0, 100],
    ['rgb(255, 130, 37)', 'rgb(255, 130, 37)']
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
    <nav className="nav-wrapper">
      <div className="nav-container">
        <Link href="/" className="site-title">
          Camp Nakamoto
        </Link>
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li className="nav-link" key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <button className="md:hidden focus:outline-none"onClick={toggleMenu} aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      {isOpen && (<ul className="md:hidden nav-mobile">
        {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={toggleMenu}>
                {item.label}
              </Link>
            </li>
        ))}
      </ul>)}
    </nav>
  );
};

export default Navbar;
