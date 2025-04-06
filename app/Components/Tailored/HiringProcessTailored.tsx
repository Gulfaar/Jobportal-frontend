"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HiringProcessTailored: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const robotRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    if (!sectionRef.current || !robotRef.current) return;

    const animation = gsap.fromTo(robotRef.current, 
      {
        y: -300, // Increased upward position (more negative value)
      },
      {
        y: 400, // Keep the same lower position
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          markers: false,
        },
      }
    );

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#2E5F5C] px-16 py-20 max-md:px-8 max-sm:px-6 overflow-hidden relative"
    >
      <h2 className="text-[48px] font-semibold text-center text-white mb-16 max-md:text-4xl max-sm:text-3xl">
        How We Find & Screen the Right Talent for You
      </h2>

      <div className="relative max-w-[1200px] mx-auto min-h-[1000px]">
        {/* Robot Image with scroll animation */}
        <div
          ref={robotRef}
          className="absolute right-0 top-1/2 -translate-y-1/2 h-[600px] w-[500px] z-10 hidden lg:block"
        >
          <Image
            src="/tailoredrobot.png"
            alt="AI Robot"
            fill
            className="object-contain ml-14"
            priority
          />
        </div>

        {/* Left Steps */}
        <div className="relative max-w-[750px] z-20">
          {steps.map((step, index) => (
            <div key={index} className="relative pl-24 pb-16 last:pb-0">
              {index !== steps.length - 1 && (
                <div className="absolute left-[35px] top-[60px] bottom-0 w-[2px] bg-white opacity-20"></div>
              )}
              <div className="absolute left-0 top-0 flex items-center justify-center w-[70px] h-[70px] rounded-full bg-white">
                <span className="text-[28px] font-medium text-[#2E5F5C]">{step.number}</span>
              </div>
              <div className="pt-2">
                <h3 className="text-[24px] font-semibold text-white mb-6">{step.title}</h3>
                <ul className="space-y-4">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-3">
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
