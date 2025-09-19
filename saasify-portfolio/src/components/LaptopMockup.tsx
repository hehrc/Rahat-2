"use client";
import React from "react";
import FakeUI from "./FakeUI";

const LaptopMockup = () => {
  return (
    <div className="relative w-[40rem] h-[25rem]">
      {/* Laptop Screen */}
      <div className="absolute w-full h-[22rem] bg-[#1E293B] rounded-t-lg border-2 border-[#5A79C8] border-opacity-20">
        <div className="w-full h-full bg-black rounded-t-md p-4">
          <div className="w-full h-full bg-[#0A0F1F] rounded-sm overflow-hidden">
            <FakeUI />
          </div>
        </div>
      </div>

      {/* Laptop Base */}
      <div
        className="absolute bottom-0 w-full h-[3rem] bg-[#1E293B] rounded-b-lg border-2 border-[#5A79C8] border-opacity-20"
        style={{
          transform: "rotateX(-70deg) rotateY(0deg) rotateZ(0deg) translateY(10rem) translateZ(5rem)",
        }}
      ></div>
    </div>
  );
};

export default LaptopMockup;
