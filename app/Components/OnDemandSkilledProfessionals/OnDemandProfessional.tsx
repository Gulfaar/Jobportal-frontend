import Image from 'next/image';
import React from 'react';

const OnDemandProfessional = () => {
  const benefits = [
    {
      title: "Ready-To-Deploy Experts",
      description: "Pre-vetted professionals available immediately.",
      icon: "/chevronright.svg",
    },
    {
      title: "AI-Driven Smart Hiring",
      description: "Faster candidate selection with precision matching.",
      icon: "/chevronright.svg",
    },
    {
      title: "Multi-Industry Coverage",
      description: "From BPO to IT development, we cover every sector",
      icon: "/chevronright.svg",
    },
    {
      title: "Real-Time Workforce Tracking",
      description: "AI-driven monitoring for better performance insights.",
      icon: "/chevronright.svg",
    },
    {
      title: "Flexible, Cost-Effective, & Scalable",
      description: "Only pay for the resources you need.",
      icon: "/chevronright.svg",
    },
    {
      title: "Seamless Communication",
      description: "WhatsApp, SMS, and mobile notifications for quick updates.",
      icon: "/chevronright.svg",
    }
  ];

  return (
    <section className="px-16 py-20 max-md:px-8 max-sm:px-5">
      <div className="max-w-[1400px] mx-auto">
        {/* Main Heading */}
        <h1 className="text-[44px] font-semibold text-[#1E1B4B] text-center mb-16 leading-[1.2] max-md:text-3xl max-sm:text-2xl">
          Why Gulfaar's AI-Powered On-Demand Professionals ?
        </h1>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 gap-x-24 gap-y-12 max-md:grid-cols-1">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-6 hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              {/* Icon */}
              <div className="w-[60px] h-[60px] rounded-full bg-[#2E5F5C] flex items-center justify-center flex-shrink-0">
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  width={35}
                  height={35}
                  className="object-contain max-sm:w-[28px] max-sm:h-[28px]"
                />
              </div>

              <div>
                <h3 className="text-[22px] font-semibold text-[#2E5F5C] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[17px] text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnDemandProfessional;
