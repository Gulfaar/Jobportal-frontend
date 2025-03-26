import React from "react";

const FeatureCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <article className="flex flex-wrap gap-10 p-8 mt-8 w-full text-black rounded-xl border border-white border-solid max-w-[1161px] shadow-[0px_0px_8px_rgba(0,0,0,0.25)] max-md:px-5 max-md:max-w-full">
      <h3 className="grow shrink text-xl font-semibold w-[253px]">{title}</h3>
      <p className="grow shrink text-lg leading-none w-[511px] max-md:max-w-full">
        {description}
      </p>
    </article>
  );
};

const ServiceFeatures = () => {
  const features = [
    {
      title: "AI-Powered Recruitment Solutions",
      description:
        "Intelligent hiring & talent-matching in multiple countries.",
    },
    {
      title: "Cross-Border Workforce Management",
      description: "Seamless hiring, payroll, and compliance solutions.",
    },
    {
      title: "Industry-Specific Expertise",
      description:
        "Covering healthcare, IT, construction, finance, logistics, and more.",
    },
    {
      title: "Global Network of Employers & Job Seekers",
      description: "Thousands of professionals placed in international jobs.",
    },
    {
      title: "Training & Language Support for Relocation",
      description: "Helping candidates prepare for global careers.",
    },
  ];

  return (
    <section className="flex flex-col items-center w-full max-w-[1307px]">
      {/* First card has different margin-top */}
      <article className="flex flex-wrap gap-10 p-8 mt-12 w-full text-black rounded-xl border border-white border-solid max-w-[1161px] shadow-[0px_0px_8px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <h3 className="grow shrink text-xl font-semibold w-[253px]">
          {features[0].title}
        </h3>
        <p className="grow shrink text-lg leading-none w-[511px] max-md:max-w-full">
          {features[0].description}
        </p>
      </article>

      {/* Render the rest of the features */}
      {features.slice(1).map((feature, index) => (
        <FeatureCard
          key={index}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </section>
  );
};

export default ServiceFeatures;
