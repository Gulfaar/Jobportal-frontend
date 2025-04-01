import * as React from "react";
import FeatureCard from "./FeatureCard";

const FeaturesGrid = () => {
  const firstRowFeatures = [
    {
      title: "Expert Faculty",
      description:
        "Learn from certified trainers with in-depth exam knowledge and years of experience.",
    },
    {
      title: "AI-Powered Learning",
      description:
        "Personalized study plans, smart assessments, and adaptive testing tailored to your needs.",
    },
    {
      title: "Structured Curriculum",
      description:
        "Step-by-step guidance to cover all exam sections effectively and efficiently.",
    },
  ];

  const secondRowFeatures = [
    {
      title: "Mock Tests & Practice",
      description:
        "AI-generated real-time exam simulations to build confidence and improve performance.",
    },
    {
      title: "Time Management",
      description:
        "Learn AI-driven techniques to optimize test performance and manage exam time effectively.",
    },
    {
      title: "Personalized Feedback",
      description:
        "AI-driven insights to strengthen weak areas and track progress throughout your preparation.",
    },
  ];

  return (
    <section aria-label="Features section">
      <div className="self-center mt-11 w-full max-w-[1340px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {firstRowFeatures.map((feature, index) => (
            <div key={index} className="w-[33%] max-md:ml-0 max-md:w-full">
              <FeatureCard
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="self-center mt-10 ml-3.5 w-full max-w-[1350px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {secondRowFeatures.map((feature, index) => (
            <div key={index} className="w-[33%] max-md:ml-0 max-md:w-full">
              <FeatureCard
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
