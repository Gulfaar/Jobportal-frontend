import Image from 'next/image';
import React from 'react';

const OnDemandBenefits = () => {
  const benefits = [
    {
      title: "Companies Looking For Quick Workforce Scaling",
      description: "Fast hiring with no long-term commitments.",
      icon: "/rewarondemand.svg"
    },
    {
      title: "Startups & SMEs Needing Flexible Teams",
      description: "Access top professionals on demand",
      icon: "/ondemandpapericon.svg"
    },
    {
      title: "Businesses Seeking Cost-Effective Talent Solutions",
      description: "Save on recruitment costs & overhead expenses",
      icon: "/ondemandcost.svg"
    },
    {
      title: "Organizations Expanding Operations Globally",
      description: "Get multi-language, AI-driven outsourcing solutions.",
      icon: "/ondemandpapericon.svg"
    },
    {
      title: "Industries Requiring Seasonal Or Project-Based Workforce",
      description: "Hire based on your specific needs & timeframes",
      icon: "/ondemandpapericon.svg"
    }
  ];

  return (
    <section className="px-16 py-20 bg-gradient-to-b from-[#E8F4F3] to-[#F8FAFC] max-md:px-8 max-sm:px-5">
      <div className="max-w-[1400px] mx-auto">
        {/* Main Heading */}
        <h1 className="text-[44px] font-semibold text-[#1E1B4B] text-center mb-16 leading-[1.2] max-md:text-3xl max-sm:text-2xl">
          Who Benefits From Our On-Demand Skilled Professionals ?
        </h1>

        <div className="grid grid-cols-2 gap-x-24 gap-y-12 mb-12 max-md:grid-cols-1">
          {/* First 4 benefits in 2x2 grid */}
          {benefits.slice(0, 4).map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-6 hover:scale-105 transition-all duration-300 cursor-pointer"
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
                <h3 className="text-[24px] font-semibold text-[#1E1B4B] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[17px] text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Last benefit centered */}
        <div className="flex justify-center">
          <div className="flex items-start gap-6 max-w-[600px] hover:scale-105 transition-all duration-300 cursor-pointer max-sm:flex-col max-sm:items-center text-center max-sm:text-left">
            <div className="w-[60px] h-[60px] rounded-full bg-[#2E5F5C] flex items-center justify-center flex-shrink-0">
              <Image
                src="/chatondemand.svg"
                alt=""
                width={35}
                height={35}
                className="object-contain max-sm:w-[28px] max-sm:h-[28px]"
              />
            </div>

            <div className="max-sm:mt-4">
              <h3 className="text-[24px] font-semibold text-[#1E1B4B] mb-2">
                {benefits[4].title}
              </h3>
              <p className="text-[17px] text-gray-600">{benefits[4].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnDemandBenefits;
