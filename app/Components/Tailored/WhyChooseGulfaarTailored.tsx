"use client";

import Image from "next/image";
import React from "react";

const WhyChooseGulfaarTailored: React.FC = () => {
  const features = [
    {
      title: "Faster & Smarter Shortlisting",
      description: "Reduce hiring time with AI-driven automated pre-screening.",
    },
    {
      title: "Objective & Bias-Free Evaluation",
      description: "AI ensures fair assessments based on skills and aptitude.",
    },
    {
      title: "Industry-Specific Screening",
      description: "AI tailors questions & evaluations to each job category.",
    },
    {
      title: "Pre-Screened & Verified Candidates",
      description: "Every shortlisted candidate is assessed and ready for immediate hiring.",
    },
    {
      title: "Flexible Hiring Models",
      description: "Direct placement, contract-based hiring, short-term & project-based hiring options available.",
    },
  ];

  return (
    <section className="bg-[#2E5D55] px-10 py-16 text-white max-md:px-6">
      <div className="max-w-[1100px] mx-auto text-center">
        <h2 className="text-[36px] font-semibold mb-12 max-md:text-[32px]">
          Why Choose Gulfaar's AI-Powered Recruitment
        </h2>

        {/* First 4 items in 2x2 Grid */}
        <div className="grid grid-cols-2 gap-x-16 gap-y-10 mb-10 max-lg:grid-cols-1">
          {features.slice(0, 4).map((feature, index) => (
            <div key={index} className="flex items-start gap-3 text-left max-md:flex-col max-md:items-center max-md:text-center">
              {/* Bullet Icon */}
              <div className="flex-shrink-0">
                <Image src="/langbulleticon.svg" alt="Bullet Icon" height={18} width={18} className="w-5 h-5 mt-[5px] max-md:mt-0" />
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-[22px] font-semibold leading-tight max-md:text-[20px]">{feature.title}</h3>
                <p className="text-lg opacity-90 max-md:text-[18px]">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Last item centered */}
        <div className="flex justify-center ml-15">
          <div className="flex items-start gap-3 text-left max-w-[500px] max-md:flex-col max-md:items-center max-md:text-center">
            {/* Bullet Icon */}
            <div className="flex-shrink-0">
              <Image src="/langbulleticon.svg" alt="Bullet Icon" height={18} width={18} className="w-5 h-5 mt-[5px] max-md:mt-0" />
            </div>

            {/* Text Content */}
            <div className=" ">
              <h3 className="text-[22px]  font-semibold leading-tight max-md:text-[20px]">{features[4].title}</h3>
              <p className="text-lg opacity-90 max-md:text-[18px]">{features[4].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseGulfaarTailored;
