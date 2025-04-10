"use client";
import React from "react";
import Image from "next/image";

const JobCategoriesSection: React.FC = () => {
  const categories = [
    {
      image: "/engineericon.svg",
      title: "Skilled & Semi-Skilled Workers",
      description: "Engineers, electricians, mechanics, construction workers.",
    },
    {
      image: "/briefcaseicondp.svg",
      title: "Corporate Professionals",
      description: "IT experts, financial analysts, HR managers, marketing professionals.",
    },
    {
      image: "/healthcareicon.svg",
      title: "Healthcare Specialists",
      description: "Nurses, doctors, caregivers, medical assistants.",
    },
    {
      image: "/hospitalityicon.svg",
      title: "Hospitality & Retail Experts",
      description: "Hotel staff, customer service, retail managers.",
    },
    {
      image: "/transporticon.svg",
      title: "Logistics & Transportation",
      description: "Drivers, warehouse workers, supply chain managers.",
    },
    {
      image: "/engineericon.svg",
      title: "On-Demand Workforce",
      description: "Freelancers, contract staff, and project-based specialists.",
    },
  ];

  return (
    <section className="px-16 py-16 max-lg:px-8 max-sm:px-5 max-sm:py-10" aria-labelledby="job-categories-title">
      <h2
        id="job-categories-title"
        className="mb-10 text-5xl font-semibold text-center text-teal-800 max-lg:text-4xl max-sm:text-3xl"
      >
        Who We Help You Hire?
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-2 gap-6 text-black max-lg:grid-cols-1">
        {categories.map((category, index) => (
          <article key={index} className="flex gap-3 items-start max-sm:flex-col max-sm:items-center text-center">
            {/* Image Icon */}
            <div className="flex justify-center items-center bg-teal-800 rounded-xl h-[55px] w-[55px] max-sm:h-[45px] max-sm:w-[45px]">
              <Image
                src={category.image}
                alt={category.title}
                width={35}
                height={35}
                className="object-contain max-sm:w-[28px] max-sm:h-[28px]"
              />
            </div>

            {/* Text Content - Adjusted spacing */}
            <div className="flex flex-col items-start max-sm:items-center text-left max-sm:text-center">
              <h3 className="text-[22px] font-semibold leading-tight max-sm:text-[20px]">{category.title}</h3>
              <p className="text-lg max-sm:text-[16px] text-gray-700">{category.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default JobCategoriesSection;
