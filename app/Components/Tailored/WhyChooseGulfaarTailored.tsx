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
        <h2 className="text-[36px] font-semibold mb-10 max-md:text-[32px]">
          Why Choose Gulfaar’s AI-Powered Recruitment
        </h2>

        <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              
                 <Image src="/langbulleticon.svg" alt="Bullet Icon" height={10}  width={10} className="w-4 h-4 mt-1 rounded-full"  />
              

              {/* Text Content */}
              <div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-lg opacity-90">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseGulfaarTailored;
