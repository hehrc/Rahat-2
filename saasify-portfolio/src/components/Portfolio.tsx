"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const portfolioItems = [
  {
    title: "Project Alpha",
    description: "A micro-SaaS for a niche market, built with Next.js and Supabase.",
    imageUrl: "https://fpoimg.com/600x400?text=Project%20Alpha&bg_color=1E293B&text_color=EEEEEE",
  },
  {
    title: "Project Beta",
    description: "A high-converting landing page for a new mobile app.",
    imageUrl: "https://fpoimg.com/600x400?text=Project%20Beta&bg_color=1E293B&text_color=EEEEEE",
  },
  {
    title: "Project Gamma",
    description: "A professional website for a creative agency.",
    imageUrl: "https://fpoimg.com/600x400?text=Project%20Gamma&bg_color=1E293B&text_color=EEEEEE",
  },
];

const Portfolio = () => {
  return (
    <div className="py-20 bg-[#0A0F1F] text-[#EEEEEE]">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Our Portfolio
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#1E293B] rounded-lg overflow-hidden border border-[#5A79C8] border-opacity-20"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-48">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  unoptimized={true}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#5FB7CF] mb-2">{item.title}</h3>
                <p className="text-[#AEE4ED]">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
