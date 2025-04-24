"use client"

import Image from 'next/image'
import React from 'react'

const ServiceLists = () => {
  const services = [
    {
      title: "Oil Tank Cleaning & Disposal Services",
      description: "Cleaning of crude, product, and storage tanks with degassing and sludge removal.",
      image: "/fmservice1.png",
    },
    {
      title: "Asset Integrity Solutions",
      description: "We provide AIM solutions to ensure safe, reliable oil and gas operations, with expert inspection and monitoring for onshore and offshore assets.",
      image: "/fmservice2.png",
    },
    {
      title: "Subsea Inspection, Maintenance, Repair, and Installation",
      description: "We offer subsea IMRI services for the oil and gas sector, ensuring safe, efficient operations and extended asset life.",
      image: "/fmservice3.png",
    },
    {
      title: "Industrial Cleaning Services",
      description: "Comprehensive industrial cleaning solutions for maintaining operational efficiency and safety standards.",
      image: "/fmservice4.png",
    },
    {
      title: "Waste Management Solutions",
      description: "Environmental-friendly waste management and disposal services for industrial operations.",
      image: "/fmservice5.png",
    },
    {
      title: "Equipment Rental Services",
      description: "Wide range of specialized equipment available for industrial and marine operations.",
      image: "/fmservice6.png",
    }
  ];

  return (
    <div className="container mx-auto px-24 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="relative group rounded-xl overflow-hidden bg-[#2E5F5C] text-white">
            <div className="relative h-[400px]">
              <Image 
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#2E5F5C]/90"></div>

              {/* Animated Play Button */}
              <div className="absolute top-4 right-4 animate-ping-slow">
                <Image 
                  src="/playbutton.png"
                  alt="Play"
                  width={60}
                  height={60}
                  className="cursor-pointer"
                />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 p-6 w-full">
                <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
                <p className="text-sm mb-6 opacity-90">{service.description}</p>
                <button className="bg-[#2E5F5C] hover:bg-[#234947] text-white px-8 py-2 rounded-lg border border-white transition-all">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Animation CSS */}
      <style jsx>{`
        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.4);
            opacity: 0.7;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-ping-slow {
          animation: ping-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ServiceLists;
