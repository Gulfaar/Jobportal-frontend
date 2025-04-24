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
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
        {/* Left side - Three points */}
        <div className="w-full lg:w-[55%] space-y-14">
          {efficiencyPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-6">
              {/* Icon container */}
              <div className="w-[84px] h-[84px] min-w-[84px] bg-[#2E5F5C] rounded-2xl flex items-center justify-center p-5">
                   <Image
                                    src={point.icon} 
                                    alt=""
                                    width={64}
                                    height={64}
                                  />
              </div>
              
              {/* Content */}
              <div className="pt-2">
                <h3 className="text-[#2E5F5C] text-[32px] font-bold mb-3 whitespace-nowrap">
                  {point.title}
                </h3>
                <p className="text-[#2E5F5C]/80 text-[20px] leading-[1.5] max-w-[460px]">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right side - Image */}
        <div className="w-full lg:w-[42%] relative aspect-square">
          <Image 
            src='/oilgascover3.png' 
            alt='Oil and Gas Facility' 
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default Efficiency
