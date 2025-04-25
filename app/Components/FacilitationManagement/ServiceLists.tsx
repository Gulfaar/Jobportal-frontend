"use client"

import Image from 'next/image'
import React, { useState } from 'react'

const ServiceLists = () => {
  const services = [
    {
      title: "Oil Tank Cleaning & Disposal Services",
      description: "Cleaning of crude, product, and storage tanks with degassing and sludge removal.",
      image: "/fmservice1.png",
      video: "https://www.youtube.com/embed/3hJZ4jqS8EQ",
    },
    {
      title: "Asset Integrity Solutions",
      description: "We provide AIM solutions to ensure safe, reliable oil and gas operations.",
      image: "/fmservice2.png",
      video: "https://www.youtube.com/embed/NVmmwEGIZDk",
    },
    {
      title: "Subsea Inspection, Maintenance, Repair, and Installation",
      description: "We offer subsea IMRI services for the oil and gas sector.",
      image: "/fmservice3.png",
      video: "https://www.youtube.com/embed/ChwyuV-12VQ",
    },
    {
      title: "Brownfield and Platform Solutions",
      description: "Comprehensive industrial cleaning solutions for safety standards.",
      image: "/fmservice4.png",
      video: "https://www.youtube.com/embed/IE53VOUcfUQ",
    },
    {
      title: "Fabrication Services",
      description: "Environmentally-friendly waste management and disposal services.",
      image: "/fmservice5.png",
      video: "https://www.youtube.com/embed/w8w_FaMmalA",
    },
    {
      title: "Environmental, Health, and Safety (EHS) Management",
      description: "Specialized equipment available for industrial operations.",
      image: "/fmservice6.png",
      video: "https://www.youtube.com/embed/5I2TlX18VcQ",
    }
  ];

  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-24 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="relative group rounded-[20px] overflow-hidden bg-[#1B4844] h-[420px]">
            {/* Background Image */}
            <Image 
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              priority
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1B4844]/40 via-[#1B4844]/60 to-[#1B4844]/95"></div>

            {/* Play Button */}
            <div className="absolute top-6 right-6 z-10">
              <div 
                className="relative cursor-pointer animate-pulse-scale"
                onClick={() => setActiveVideo(service.video)}
              >
                {/* Clean Button Icon without glow */}
                <div className="relative w-[52px] h-[52px]">
                  <Image 
                    src="/playbutton.png"
                    alt="Play"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <h2 className="text-white text-[32px] font-bold leading-tight mb-4">
                {service.title}
              </h2>
              <p className="text-white/90 text-[16px] leading-relaxed mb-8">
                {service.description}
              </p>
              <div className="flex justify-center w-full">
                <button className="bg-gradient-to-r from-[#2E5F5C] to-[#619390] hover:from-[#28524F] hover:to-[#4E7472] text-white text-[18px] px-8 py-3 rounded-[14px] border-2 border-white/80 transition-all">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setActiveVideo(null)}
        >
          <div className="relative w-full max-w-4xl aspect-video" onClick={e => e.stopPropagation()}>
            <iframe
              className="w-full h-full rounded-xl"
              src={`${activeVideo}?autoplay=1`}
              title="Service Video"
              
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <button 
              className="absolute top-2 right-2 bg-white text-black px-3 py-1 rounded"
              onClick={() => setActiveVideo(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Just keep pulse scale animation */}
      <style jsx>{`
        @keyframes pulse-scale {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }

        .animate-pulse-scale {
          animation: pulse-scale 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default ServiceLists;
