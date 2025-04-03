"use client";
import React from "react";
import BenefitCard from "./BenefitCard";

const BenefitsSection: React.FC = () => {
  // Single card for the top-right
  const topCard = {
    icon: `<svg id="128:693" layer-name="Icon" width="35" height="36" ...> ... </svg>`,
    title: "Corporates & Enterprises",
    description: "Hassle-free payroll for contract workers & remote teams",
  };

  // Four cards for the bottom row
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
      icon: `<svg id="128:714" layer-name="Icon" width="35" height="36" ...> ... </svg>`,
      title: "Industries with Seasonal Workforce",
      description: "Flexible payroll management for short-term projects.",
    },
    {
      icon: "﮹",
      title: "International Businesses",
      description: "Simplified multi-currency, cross-border payroll solutions.",
    },
  ];

  return (
    <section
      className="px-20 py-12 text-white bg-teal-800 max-md:p-8"
      aria-labelledby="benefits-heading"
    >
      {/* 
        First row: heading & paragraph on the left (col-span-2),
        single card on the right (col-span-1).
        On smaller screens, everything stacks into 1 column.
      */}
      <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-1">
        {/* Left side: heading + paragraph */}
        <div className="col-span-2">
          <h2
            id="benefits-heading"
            className="mb-5 text-5xl font-semibold text-left max-sm:text-4xl"
          >
            Who Benefits From Our Payroll Management Services?
          </h2>
          <p className="mb-12 text-xl text-left">
            Hassle-free payroll for contract workers &amp; remote teams.
            Efficient payroll processing for high-volume hiring. Scalable
            payroll solutions to manage growing teams.
          </p>
        </div>

        {/* Right side: single top card */}
        <div className="flex items-start justify-end max-sm:grid-cols-1">
          <BenefitCard
            icon={topCard.icon}
            title={topCard.title}
            description={topCard.description}
          />
        </div>
      </div>

      {/* 
        Second row: 4 cards in a responsive grid. 
        On large screens: 4 columns
        On medium screens: 2 columns
        On small screens: 1 column
      */}
      <div className="grid grid-cols-4 gap-6 mt-12 max-lg:grid-cols-2 max-sm:grid-cols-1">
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
