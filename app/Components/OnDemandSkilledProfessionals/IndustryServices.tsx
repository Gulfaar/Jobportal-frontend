"use client";

import React from "react";
import Image from "next/image";

const IndustryServices = () => {
  const services = [
    {
      title: "Call Center & BPO Solutions",
      points: [
        "24/7 customer service representatives & virtual assistants.",
        "Multilingual call center agents for global business operations.",
        "AI-powered chatbot integration & live support management.",
      ],
      icon: "/ondemandphoneicon.svg",
    },
    {
      title: "Hospitality & Customer Service",
      points: [
        "On-demand hospitality staff, front-desk executives, and concierge professionals.",
        "Retail customer service experts for seasonal or long-term support.",
      ],
      icon: "/ondemandpapericon.svg",
    },
    {
      title: "IT Development & Software Solutions",
      points: [
        "On-demand software engineers, AI developers, cloud experts, and cybersecurity specialists.",
        "Custom app & web development teams for businesses of all sizes.",
        "DevOps, QA testing, and database management support.",
      ],
      icon: "/ondemandpapericon.svg",
    },
    {
      title: "Logistics & Warehousing Workforce",
      points: [
        "Warehouse managers, drivers, and delivery associates.",
        "Logistics coordinators & supply chain analysts for real-time fleet management.",
      ],
      icon: "/ondemandpapericon.svg",
    },
    {
      title: "Technical & Engineering Expertise",
      points: [
        "Mechanical, electrical, and civil engineers for contract-based projects.",
        "IT network specialists & system administrators.",
        "Remote technical support teams for industrial needs.",
      ],
      icon: "/ondemandpapericon.svg",
    },
  ];

  return (
    <section className="px-4 py-12 bg-gradient-to-b from-[#E8F4F3] to-[#F8FAFC] sm:px-8 md:px-16">
      <div className="max-w-[1400px] mx-auto">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-semibold text-[#1E1B4B] leading-tight sm:text-4xl md:text-5xl">
            <span className="block">INDUSTRIES AND SERVICES</span>
            <span className="block mt-2">WE COVER</span>
          </h1>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-16 md:gap-y-16">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col gap-4">
              {/* Icon and Title Row */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#2E5F5C] flex items-center justify-center flex-shrink-0 sm:w-14 sm:h-14">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={28}
                    height={28}
                    className="object-contain sm:w-9 sm:h-9"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#1E1B4B] sm:text-2xl">
                  {service.title}
                </h3>
              </div>
              {/* Points */}
              <div className="space-y-3">
                {service.points.map((point, pointIndex) => (
                  <p
                    key={pointIndex}
                    className="text-base text-black leading-relaxed sm:text-lg"
                  >
                    {point}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryServices;