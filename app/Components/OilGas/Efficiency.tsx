"use client"

import React from 'react'
import Image from 'next/image'

const Efficiency = () => {
  const efficiencyPoints = [
    {
      title: "Enhancing Operational Efficiency",
      description: "Streamlined tank cleaning boosts productivity and minimizes downtime across oil facilities.",
      icon: "/efficiencyicon1.svg"
    },
    {
      title: "Supporting Environmental Compliance",
      description: "Eco-friendly disposal methods align with Saudi Arabia's Vision 2030 sustainability goals.",
      icon: "/efficiencyicon2.svg"
    },
    {
      title: "Ensuring Asset Longevity",
      description: "Regular maintenance through cleaning extends the life of critical oil infrastructure.",
      icon: "/efficiencyicon3.svg"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-16 max-w-7xl">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-16">
        {/* Left side - Three points */}
        <div className="w-full lg:w-[55%] space-y-8 md:space-y-14">
          {efficiencyPoints.map((point, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
              {/* Icon container */}
              <div className="w-[72px] h-[72px] md:w-[84px] md:h-[84px] min-w-[72px] md:min-w-[84px] bg-[#2E5F5C] rounded-2xl flex items-center justify-center p-4 md:p-5">
                <Image
                  src={point.icon} 
                  alt=""
                  width={64}
                  height={64}
                  className="w-10 h-10 md:w-12 md:h-12"
                />
              </div>
              
              {/* Content */}
              <div className="pt-2 text-center sm:text-left">
                <h3 className="text-[#2E5F5C] text-[24px] md:text-[32px] font-bold mb-2 md:mb-3 whitespace-normal sm:whitespace-nowrap">
                  {point.title}
                </h3>
                <p className="text-[#2E5F5C]/80 text-[16px] md:text-[20px] leading-[1.5] max-w-[460px]">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right side - Image */}
        <div className="w-full sm:w-[80%] lg:w-[42%] relative aspect-square mt-8 lg:mt-0">
          <Image 
            src='/efficiencycover2.png' 
            alt='Oil and Gas Facility' 
            fill
            className="object-cover lg:ml-5"
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default Efficiency
