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
      icon: "ti ti-brain",
      title: "AI-Driven Smart Selection",
      description: "Bias-free hiring with real-time data insights",
    },
    {
      icon: "ti ti-messages",
      title: "Instant Communication",
      description: "Connect with candidates anytime, anywhere using WhatsApp, SMS, in-app messaging, and real-time notifications.",
    },
    {
      icon: "ti ti-user-check",
      title: "Interview-Ready Candidates",
      description: "Every candidate is assessed and pre-qualified before reaching you.",
    },
    {
      icon: "ti ti-chart-arrows",
      title: "Effortless & Scalable",
      description: "Whether hiring one or a hundred employees, our AI system delivers efficiently.",
    },
    {
      icon: "ti ti-rocket",
      title: "Faster Hiring, Better Matches",
      description: "Reduce time-to-hire with automated talent matching.",
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
