"use client"

import Image from 'next/image';
import React from 'react';

const Benefits = () => {
  const benefits = [
    {
      title: "Increased Asset Life and Performance",
      description: "Brownfield modifications and platform upgrades extend the operational lifespan of offshore assets, maximizing return on investment.",
      icon: "/oilgasbenefits1.svg"
    },
    {
      title: "Enhanced Operational Efficiency",
      description: "Our advanced offshore installation engineering reduces downtime and improves the efficiency of new and existing platforms.",
      icon: "/oilgasbenefits2.svg"
    },
    {
      title: "Compliance and Safety",
      description: "Services are executed in accordance with Saudi Aramco’s standards and international regulations (API, DNV, ISO) to ensure safety and regulatory compliance.",
      icon: "/oilgasbenefits3.svg"
    },
    {
      title: "Minimized Production Disruption",
      description: "	Expert planning and execution of platform modifications ensure seamless integration with ongoing production, reducing operational impact.",
      icon: "/oilgasbenefits4.svg"
    },
    {
      title: "Support for Offshore Expansion",
      description: "Enables the expansion of offshore oil production in the Arabian Gulf and Red Sea, supporting Saudi Arabia’s offshore development initiatives.",
      icon: "/oilgasbenefits5.svg"
    },
    {
      title: "Cost Optimization",
      description: "Modifications and platform upgrades are delivered with cost-effective strategies that minimize project expenses while enhancing output and reliability.",
      icon: "/oilgasbenefits6.svg"
    }
  ];

  return (
    <div className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src='/benefitsbg.png' 
          alt='' 
          fill 
          className="object-cover " 
          priority 
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-16 max-w-7xl z-10">
        {/* Header */}
        <h2 className="text-center text-[#2E5F5C] text-[28px] sm:text-[36px] md:text-[48px] font-semibold mb-8 md:mb-12 leading-tight max-w-4xl mx-auto px-4">
          Key Benefits of Our Brownfield and Platform Solutions
        </h2>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[40px] shadow-lg overflow-hidden relative min-h-[310px] p-8 max-w-[360px] mx-auto w-full group"
            >
              {/* Teal Corner */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[80px] border-l-[80px] border-t-[#2E5F5C] border-l-transparent transition-all duration-300 ease-in-out group-hover:border-t-[88px] group-hover:border-l-[88px]" />

              {/* Card Content */}
              <div className="flex flex-col items-center text-center h-full pt-2">
                {/* Icon */}
                <div className="w-16 h-16 mb-8 transition-transform duration-300 ease-in-out group-hover:scale-110">
                  <Image
                    src={benefit.icon} 
                    alt=""
                    width={64}
                    height={64}
                  />
                </div>

                {/* Title */}
                <h3 className="text-[#2E5F5C] text-[24px] font-semibold mb-6 leading-tight">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-[#2E5F5C]/70 text-[20px] leading-[1.5] mt-auto">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Benefits;
