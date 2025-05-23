"use client";

import React from 'react';
import Image from 'next/image';
import icon from "../../../public/images/Task-side.svg"


const WorkforceSolutions = () => {
  return (
    <section className="py-16 px-8 flex justify-center w-full bg-white">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-stretch gap-12">
        
        {/* Text Content */}
        <div className="w-full md:w-[60%] text-left flex flex-col justify-center">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#174A47] mb-2 leading-tight">
          With real-time hiring, automated workforce tracking
          </h1>
          
          {/* Subheading */}
          <h2 className="text-xl md:text-2xl font-semibold text-[#174A47] mb-4">
          We take care of recruitment, background 
          verification, payroll, and compliance
          </h2>
          
          {/* Description */}
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
          At Gulfaar, we provide task-specific experts across various industries, ensuring businesses and 
individuals have access to pre-screened, highly skilled professionals whenever needed. Whether you 
require drivers, construction workers, maintenance technicians, or cleaning specialists, our AIpowered workforce platform connects you with qualified experts instantly.
          </p>
          
          {/* Button with Adjusted Width */}
          {/* <button className="bg-[#174A47] text-white px-4 py-3 rounded-full flex items-center gap-2 hover:bg-[#0F3A37] transition-colors duration-300 w-40">
            Get Started
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button> */}
        </div>

        {/* Image Section */}
        <div className="w-full md:w-[40%] flex justify-end">
          <div className="w-full h-full flex items-center">
          <Image
  src={icon}
  alt="Skill Development Programs"
  width={800} // Set an appropriate width
  height={400} // Set an appropriate height
  className="w-full h-full max-h-[400px] object-cover rounded-lg"
/>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default WorkforceSolutions;