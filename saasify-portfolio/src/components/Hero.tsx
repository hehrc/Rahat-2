"use client";
import React from "react";
import { motion } from "framer-motion";
import LaptopMockup from "./LaptopMockup";
import ParticlesBackground from "./ParticlesBackground";

const Hero = () => {
  return (
    <div className="relative bg-[#0A0F1F] text-[#EEEEEE]">
      <ParticlesBackground />
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="min-h-screen flex flex-col items-center justify-center text-center py-20">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            We Craft Micro-SaaS & Landing Pages That Convert Like Magic
          </motion.h1>
          <motion.p
            className="max-w-3xl mx-auto text-lg md:text-xl text-[#AEE4ED] mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Pixel-perfect design. Ultra-smooth animations. Fully responsive
            experiences.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="bg-[#5FB7CF] hover:bg-opacity-80 text-white font-semibold py-4 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto">
              Get Your Website
            </button>
            <button className="bg-transparent hover:bg-[#5A79C8] hover:bg-opacity-20 text-[#EEEEEE] font-semibold py-4 px-8 rounded-full border border-[#5A79C8] transition duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto">
              Book a Free Consultation
            </button>
          </motion.div>
          <LaptopMockup />
        </div>
      </div>
    </div>
  );
};

export default Hero;
