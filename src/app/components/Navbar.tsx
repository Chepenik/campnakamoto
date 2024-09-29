"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { href: "#location", label: "Location" },
    { href: "#speakers", label: "Speakers" },
    { href: "#activities", label: "Activities" },
    { href: "#housing", label: "Housing" },
    { href: "#dining", label: "Dining" },
  ];
  
  return (
    <nav className="nav-wrapper">
      <div className="nav-container">
        <Link href="/" className="site-title">
          Camp Nakamoto
        </Link>
        <ul className="hidden md:flex nav-links">
          {navItems.map((item) => (
            <li className="nav-link" key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <button className="md:hidden focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
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
