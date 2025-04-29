import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <div className="container mx-4 md:mx-24 px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-18 md:mr-2">
      <div className="flex-1 max-w-4xl">
        <h1 className="text-[#2E5F5C] text-[32px] md:text-[48px] font-bold leading-tight mb-6 whitespace-normal md:whitespace-nowrap">
          Global Solutions, Delivered Locally
        </h1>
        <p className="text-[#2E5F5C] text-[20px] md:text-[28px] max-w-4xl">
          Gulfaar delivers smart, scalable solutions in industrial services,
          facility maintenance, and AI-powered support, ensuring
          seamless operations from buildings to offshore platforms.
        </p>
      </div>
      <div className="flex-1 md:w-auto mt-8 md:mt-0 mr-6 md:mr-0">
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
