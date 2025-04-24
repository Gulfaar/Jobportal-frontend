"use client"

import Image from 'next/image'
import React from 'react'

const OurProjects = () => {
  const projects = Array.from({ length: 47 }, (_, i) => ({
    image: `/fmprojects/fmprojects-${String(i + 1).padStart(3, '0')}.png`,
  }))

  // Duplicate for seamless looping
  const marqueeProjects = [...projects, ...projects]

  return (
    <div className="px-16 py-16 bg-white">
      <h1 className="text-[#2E5F5C] text-5xl font-semibold mb-12">Our Projects</h1>

      <div className="overflow-hidden w-full">
        <div className="flex gap-6 items-center animate-marquee">
          {marqueeProjects.map((project, index) => (
            <div
              key={index}
              className="min-w-[300px] flex-shrink-0 transform transition-all duration-300"
            >
              <div className="bg-gray-200 rounded-[24px] p-[12px]">
                <div className="relative w-full h-[280px] rounded-[16px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`Project ${(index % projects.length) + 1}`}
                    fill
                    className="object-cover"
                    priority={index < 8}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default OurProjects
