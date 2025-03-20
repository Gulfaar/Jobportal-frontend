import React from "react";
import WorkStep from "./WorkStep";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d7f3fcddd9c092ac3217dd15d649a5399205fe1b?placeholderIfAbsent=true&apiKey=928cdaf2e24e4e0f8ced4d57597d6970",
      title: "Sign Up & Optimize Resume",
      description:
        "Register, create your profile & upload your resume. AI enhances your resume for better job visibility.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5e8a4d9e9d87fc5675b39584544ed24901445e32?placeholderIfAbsent=true&apiKey=928cdaf2e24e4e0f8ced4d57597d6970",
      title: "Find Jobs & Identify Skill Gaps",
      description:
        "AI job search matches you with the best roles. Detects knowledge/tech gaps & suggests upskilling.",
      highlighted: true,
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8a9ae577ffd2aeca1ce09b07dc5407e9f7c8e603?placeholderIfAbsent=true&apiKey=928cdaf2e24e4e0f8ced4d57597d6970",
      title: "AI Screening & Pre-Interview",
      description:
        "Take AI-driven tests & pre-video interviews. Get an AI match score for faster shortlisting.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/875438be9bee2af59cf6e70b25e79e10cfe6c381?placeholderIfAbsent=true&apiKey=928cdaf2e24e4e0f8ced4d57597d6970",
      title: "Get Hired & Grow",
      description:
        "Receive interview invites via WhatsApp, SMS, email & notification. Track applications, accept offers & upskill.",
    },
  ];

  return (
    <section className="mt-16 ml-7 max-md:mt-10 max-md:max-w-full">
      <h2 className="self-center text-5xl font-semibold leading-none text-center text-zinc-900 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        HOW GULFAAR WORK
      </h2>
      <div className="self-center mt-20 ml-6 w-full max-w-[1320px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {steps.map((step, index) => (
            <WorkStep
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              highlighted={step.highlighted}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
