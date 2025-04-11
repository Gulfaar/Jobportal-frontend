"use client";
import React from "react";
import BenefitCard from "./BenefitCard";

const BenefitsSection: React.FC = () => {
  const topCard = {
    icon: `<svg id="128:693" layer-name="Icon" width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="..." fill="#fff"/></svg>`,
    title: "Corporates & Enterprises",
    description: "Hassle-free payroll for contract workers & remote teams",
  };

  const bottomCards = [
    {
      icon: "ti ti-building",
      title: "Staffing & Recruitment Agencies",
      description: "Efficient payroll processing for high-volume hiring.",
    },
    {
      icon: "ti ti-rocket",
      title: "SMEs & Startups",
      description: "Scalable payroll solutions to manage growing teams",
    },
    {
      icon: `<svg id="128:714" layer-name="Icon" width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="..." fill="#fff"/></svg>`,
      title: "Industries with Seasonal Workforce",
      description: "Flexible payroll management for short-term projects.",
    },
    {
      icon: "ti ti-world", // Replaced ﮹ with a placeholder; update with correct icon
      title: "International Businesses",
      description: "Simplified multi-currency, cross-border payroll solutions.",
    },
  ];

  return (
    <section
      className="px-4 sm:px-8 md:px-12 lg:px-20 py-8 sm:py-12 bg-teal-800 text-white"
      aria-labelledby="benefits-heading"
    >
      {/* First Row: Heading + Paragraph (left), Single Card (right) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {/* Left: Heading + Paragraph */}
        <div className="md:col-span-2">
          <h2
            id="benefits-heading"
            className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-left"
          >
            Who Benefits From Our Payroll Management Services?
          </h2>
          <p className="mb-8 text-base sm:text-lg lg:text-xl text-left max-w-2xl">
            Hassle-free payroll for contract workers & remote teams. Efficient
            payroll processing for high-volume hiring. Scalable payroll solutions
            to manage growing teams.
          </p>
        </div>

        {/* Right: Single Top Card */}
        <div className="md:col-span-1 flex justify-center md:justify-end">
          <BenefitCard
            icon={topCard.icon}
            title={topCard.title}
            description={topCard.description}
          />
        </div>
      </div>

      {/* Second Row: Four Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 lg:mt-12">
        {bottomCards.map((benefit, index) => (
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