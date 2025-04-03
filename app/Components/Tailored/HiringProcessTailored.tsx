"use client";
import Image from "next/image";
import React from "react";

const HiringProcessTailored: React.FC = () => {
  const steps = [
    {
      number: "1",
      title: "Understanding Your Hiring Needs",
      details: [
        "We analyze your job requirements, preferred skill sets, and industry-specific needs.",
        "AI-powered job matching ranks candidates based on relevance to your criteria.",
      ],
    },
    {
      number: "2",
      title: "AI-Powered Pre-Video Interview & Screening",
      details: [
        "AI dynamically asks job-related, psychometric, and aptitude-based questions.",
        "Real-time AI monitoring evaluates verbal responses, tone, facial expressions, and confidence.",
        "AI assesses problem-solving skills, logical reasoning, and behavioral traits.",
      ],
    },
    {
      number: "3",
      title: "Smart Candidate Shortlisting",
      details: [
        "AI generates performance scores (out of 10) based on aptitude, skills, and personality fit.",
        "Top candidates are automatically shortlisted, reducing manual screening efforts.",
      ],
    },
    {
      number: "4",
      title: "Final Candidate Selection",
      details: [
        "Recruiters receive a refined list of pre-screened, top-tier candidates.",
        "Employers can directly schedule interviews or proceed with contract-based hiring.",
      ],
    },
  ];

  return (
    <section className="bg-[#2E5F5C] px-16 py-20 max-md:px-8 max-sm:px-6">
      <h2 className="text-[48px] font-semibold text-center text-white mb-16 max-md:text-4xl max-sm:text-3xl">
        How We Find & Screen the Right Talent for You
      </h2>

      <div className="relative max-w-[1200px] mx-auto ">
        {/* Right Section - Robot Image */}
        <div className="absolute right-0 top-3/5 -translate-y-1/2  h-[600px] w-[500px] max-lg:hidden">
          <Image
            src="/tailoredrobot.png"
            alt="AI Robot"
            fill
            className="object-contain ml-14"
            priority
          />
        </div>

        {/* Left Section - Steps */}
        <div className="relative max-w-[750px]">
          {steps.map((step, index) => (
            <div key={index} className="relative pl-24 pb-16 last:pb-0">
              {/* Timeline Line */}
              {index !== steps.length - 1 && (
                <div className="absolute left-[35px] top-[60px] bottom-0 w-[2px] bg-white opacity-20"></div>
              )}

              {/* Number Circle */}
              <div className="absolute left-0 top-0 flex items-center justify-center w-[70px] h-[70px] rounded-full bg-white">
                <span className="text-[28px] font-medium text-[#2E5F5C]">{step.number}</span>
              </div>

              {/* Step Content */}
              <div className="pt-2">
                <h3 className="text-[24px] font-semibold text-white mb-6">{step.title}</h3>
                <ul className="space-y-4">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-3 whitespace-nowrap">
                      <Image 
                        src="/langbulleticon.svg" 
                        alt="Bullet Icon" 
                        height={10} 
                        width={10} 
                        className="w-4 h-4 flex-shrink-0" 
                      />
                      <p className="text-[20px] text-white/90">{detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HiringProcessTailored;
