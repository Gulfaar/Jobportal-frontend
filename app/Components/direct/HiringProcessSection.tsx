import Image from "next/image";
import React from "react";

const HiringProcessSection: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Understanding Your Hiring Needs",
      points: [
        "We analyze your job requirements, preferred skill sets, and industry-specific needs",
        "AI-powered job matching ranks candidates based on relevance to your criteria",
      ],
    },
    {
      number: 2,
      title: "AI-Powered Pre-Video Interview & Screening",
      points: [
        "AI dynamically asks job-related, psychometric, and aptitude-based questions.",
        "Real-time AI monitoring evaluates verbal responses, tone, facial expressions, and confidence.",
        "AI assesses problem-solving skills, logical reasoning, and behavioral traits",
      ],
    },
    {
      number: 3,
      title: "Smart Candidate Shortlisting",
      points: [
        "AI generates performance scores (out of 10) based on aptitude, skills, and personality fit.",
        "Top candidates are automatically shortlisted, reducing manual screening efforts.",
      ],
    },
    {
      number: 4,
      title: "Final Candidate Selection",
      points: [
        "Recruiters receive a refined list of pre-screened, top-tier candidates.",
        "Employers can directly schedule interviews or proceed with contract-based hiring.",
      ],
    },
  ];

  return (
    <section className="relative px-16 py-20 bg-[#2E5F5C] text-white overflow-hidden max-lg:px-10 max-sm:px-6">
      <h2 className="text-[42px] font-medium text-center mb-20 max-lg:text-4xl max-sm:text-3xl max-sm:mb-12">
        How We Find & Screen the Right Talent for You
      </h2>

      {/* Timeline Container */}
      <div className="relative max-w-[1200px] mx-auto">
        {/* AI Robot Image */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[600px] w-[500px] max-lg:hidden">
          <Image
            src="/ai-robot.png"
            alt="AI Robot Assistant"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Timeline Steps */}
        <div className="relative max-w-[650px]">
          {steps.map((step, index) => (
            <div key={index} className="relative pl-24 pb-16 last:pb-0">
              {/* Timeline Line */}
              {index !== steps.length - 1 && (
                <div className="absolute left-[35px] top-[60px] bottom-0 w-[2px] bg-white opacity-20"></div>
              )}
              
              {/* Step Number Circle */}
              <div className="absolute left-0 top-0 flex items-center justify-center w-[70px] h-[70px] rounded-full bg-white">
                <span className="text-[28px] font-medium text-[#2E5F5C]">{step.number}</span>
              </div>

              {/* Step Content */}
              <div className="pt-2">
                <h3 className="text-[24px] font-medium mb-6">{step.title}</h3>
                <ul className="space-y-4">
                  {step.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3">
                      <span className="mt-[11px] w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></span>
                      <p className="text-[17px] leading-relaxed text-white/90">{point}</p>
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

export default HiringProcessSection; 