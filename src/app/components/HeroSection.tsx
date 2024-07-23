"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import * as THREE from 'three';

const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });

    const updateSize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    updateSize();

    const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const material = new THREE.MeshBasicMaterial({ color: 0xF7931A, wireframe: true });
    const torus = new THREE.Mesh(geometry, material);

    scene.add(torus);
    camera.position.z = 30;

    const animate = () => {
      requestAnimationFrame(animate);
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.005;
      renderer.render(scene, camera);
    };

    animate();

    window.addEventListener('resize', updateSize);

    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  return (
    <div className="relative w-full h-screen flex items-start justify-center overflow-hidden pt-24 sm:pt-32">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
        <motion.h1 
          className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 text-primary"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to Camp Nakamoto
        </motion.h1>
        <motion.p 
          className="text-xl sm:text-2xl md:text-3xl mb-10 text-gray-800"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Your Bitcoin Weekend Getaway
        </motion.p>
        <motion.button
          className="px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-50 transform transition-all duration-300 ease-in-out"
          whileHover={{ scale: 1.05, boxShadow: "0 0 8px rgb(34 197 94 / 60%)" }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0 }}
          onClick={() => console.log('Buy Tickets button clicked')}
        >
          <a target="_blank" href="https://www.ticketspice.com">
          Buy Tickets
          </a>
        </motion.button>
      </div>
    </div>
  );
};

export default HeroSection;