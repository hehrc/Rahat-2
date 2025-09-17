import React from "react";

const Services = () => {
  return (
    <div className="py-20 bg-[#0A0F1F] text-[#EEEEEE]">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Our Services
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#1E293B] p-8 rounded-lg border border-[#5A79C8] border-opacity-20">
            <h3 className="text-2xl font-bold text-[#5FB7CF] mb-4">
              Micro-SaaS Development
            </h3>
            <p className="text-[#AEE4ED]">
              We build custom micro-SaaS solutions tailored to your business
              needs.
            </p>
          </div>
          <div className="bg-[#1E293B] p-8 rounded-lg border border-[#5A79C8] border-opacity-20">
            <h3 className="text-2xl font-bold text-[#5FB7CF] mb-4">
              Landing Page Design
            </h3>
            <p className="text-[#AEE4ED]">
              We design and build high-converting landing pages for your
              products or services.
            </p>
          </div>
          <div className="bg-[#1E293B] p-8 rounded-lg border border-[#5A79C8] border-opacity-20">
            <h3 className="text-2xl font-bold text-[#5FB7CF] mb-4">
              Professional Websites
            </h3>
            <p className="text-[#AEE4ED]">
              We create professional, modern, and responsive websites for your
              brand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
