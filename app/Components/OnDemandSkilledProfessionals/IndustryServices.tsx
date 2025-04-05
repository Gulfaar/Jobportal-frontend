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
    <section className="px-16 py-20 bg-gradient-to-b from-[#E8F4F3] to-[#F8FAFC] max-md:px-8 max-sm:px-5">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 gap-x-24 gap-y-16 max-lg:grid-cols-1">
          {/* Responsive Heading */}
          <div className="col-span-2 max-lg:col-span-1">
            <h1 className="text-[52px] font-semibold text-[#1E1B4B] leading-[1.1] max-md:text-4xl max-sm:text-3xl text-center max-sm:whitespace-normal">
              <span className="block">INDUSTRIES AND SERVICES</span>
              <span className="block mt-2">WE COVER</span>
            </h1>
          </div>

          {/* Top Services */}
          <div className="grid grid-cols-1 gap-y-16 row-span-3">
            {services.slice(0, 3).map((service, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row gap-6 items-start"
              >
                <div className="w-[60px] h-[60px] rounded-full bg-[#2E5F5C] flex items-center justify-center flex-shrink-0">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={35}
                    height={35}
                    className="object-contain max-sm:w-[28px] max-sm:h-[28px]"
                  />
                </div>
                <div>
                  <h3 className="text-[24px] font-semibold text-[#1E1B4B] mb-4">
                    {service.title}
                  </h3>
                  <div className="space-y-3">
                    {service.points.map((point, pointIndex) => (
                      <p
                        key={pointIndex}
                        className="text-[20px] text-black leading-relaxed max-sm:text-[17px]"
                      >
                        {point}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Services */}
          <div className="grid grid-cols-1 gap-y-16">
            {services.slice(3).map((service, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row gap-6 items-start"
              >
                <div className="w-[60px] h-[60px] rounded-full bg-[#2E5F5C] flex items-center justify-center flex-shrink-0">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={35}
                    height={35}
                    className="object-contain max-sm:w-[28px] max-sm:h-[28px]"
                  />
                </div>
                <div>
                  <h3 className="text-[24px] font-semibold text-[#1E1B4B] mb-4">
                    {service.title}
                  </h3>
                  <div className="space-y-3">
                    {service.points.map((point, pointIndex) => (
                      <p
                        key={pointIndex}
                        className="text-[20px] text-black leading-relaxed max-sm:text-[17px]"
                      >
                        {point}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryServices;
