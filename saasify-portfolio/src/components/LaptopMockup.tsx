"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FakeUI from "./FakeUI";

const LaptopMockup = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);

  return (
    <div ref={ref} className="relative w-[40rem] h-[25rem] " style={{ perspective: "1000px" }}>
      <motion.div style={{ y }}>
        {/* Laptop Screen */}
        <motion.div
          className="absolute w-full h-[22rem] bg-[#1E293B] rounded-t-lg border-2 border-[#5A79C8] border-opacity-20"
          style={{ transform: "rotateX(20deg) rotateY(0deg) rotateZ(0deg)" }}
        >
          <div className="w-full h-full bg-black rounded-t-md p-4">
            <div className="w-full h-full bg-[#0A0F1F] rounded-sm overflow-hidden">
              <FakeUI />
            </div>
          </div>
        </motion.div>

        {/* Laptop Base */}
        <motion.div
          className="absolute bottom-0 w-full h-[3rem] bg-[#1E293B] rounded-b-lg border-2 border-[#5A79C8] border-opacity-20"
          style={{
            transform: "rotateX(-70deg) rotateY(0deg) rotateZ(0deg) translateY(10rem) translateZ(5rem)",
          }}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default LaptopMockup;
