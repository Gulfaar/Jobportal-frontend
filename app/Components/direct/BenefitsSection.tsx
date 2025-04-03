import React from "react";
import BenefitCard from "./BenefitCard";

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: "ti ti-filter",
      title: "No More Manual Shortlisting",
      description: "AI instantly screens and ranks candidates for you",
    },
    {
      icon: "ti ti-user-check",
      title: "Interview-Ready Candidates",
      description:
        "Every candidate is assessed and pre-qualified before reaching you.",
    },
  ];

  return (
    <section
      className="px-11 py-12 bg-teal-800 max-md:px-8 max-sm:px-5"
      aria-labelledby="benefits-title"
    >
      <h2
        id="benefits-title"
        className="mb-10 text-5xl font-semibold text-center text-white max-md:text-4xl max-sm:text-3xl"
      >
        Why Choose Gulfaar's AI-Powered Recruitment
      </h2>
      <div className="grid grid-cols-2 gap-10 max-md:grid-cols-1">
        {benefits.map((benefit, index) => (
          <BenefitCard
            key={index}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
