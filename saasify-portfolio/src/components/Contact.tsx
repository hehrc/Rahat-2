import React from "react";

const Contact = () => {
  return (
    <div className="py-20 bg-[#0A0F1F] text-[#EEEEEE]">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#EEEEEE] mb-4">
            Let&apos;s build something great together
          </h2>
          <p className="text-lg md:text-xl text-[#AEE4ED] mb-8">
            Have a project in mind? Let&apos;s talk about it.
          </p>
          <button className="bg-[#5FB7CF] hover:bg-opacity-80 text-white font-semibold py-4 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            Book a Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
