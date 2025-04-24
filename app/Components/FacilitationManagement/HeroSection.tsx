import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <div className="container mx-24 px-4 py-12 flex items-center justify-between gap-18 ">
      <div className="flex-1 max-w-4xl">
        <h1 className="text-[#2E5F5C] text-[48px] font-bold leading-tight mb-6 whitespace-nowrap">
          Global Solutions, Delivered Locally
        </h1>
        <p className="text-[#2E5F5C] text-[28px]  max-w-4xl">
          Gulfaar delivers smart, scalable solutions in industrial services,
          facility maintenance, and AI-powered support, ensuring
          seamless operations from buildings to offshore platforms.
        </p>
      </div>
      <div className="flex-1">
        <Image 
          src="/FMCover1.png" 
          alt="Facility Management Team" 
          width={500} 
          height={300} 
          className="rounded-lg object-cover"
          priority
        />
      </div>
    </div>
  )
}

export default HeroSection
