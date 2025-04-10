import React from "react";
import Image from "next/image";

// Define the type for each feature
interface Feature {
  iconSrc: string; // Path to the icon image
  iconAlt: string; // Alt text for the icon image
  title: string;
  description: string;
}

// Define the props for the component (optional, for reusability)
interface FeaturesProps {
  features?: Feature[];
}

const Features: React.FC<FeaturesProps> = ({
  features = [
    {
      iconSrc: "/icons/expert-faculty-icon.svg",
      iconAlt: "Expert Faculty Icon",
      title: "Expert Faculty",
      description: "Learn from certified trainers with in-depth exam knowledge and years of experience.",
    },
    {
      iconSrc: "/icons/ai-powered-learning-icon.svg",
      iconAlt: "AI-Powered Learning Icon",
      title: "AI-Powered Learning",
      description: "Personalized study plans, smart and adaptive testing tailored to your needs.",
    },
    {
      iconSrc: "/icons/structured-curriculum-icon.svg",
      iconAlt: "Structured Curriculum Icon",
      title: "Structured Curriculum",
      description: "Step-by-step guidance to cover all exam sections effectively and efficiently.",
    },
    {
      iconSrc: "/icons/mock-tests-practice-icon.svg",
      iconAlt: "Mock Tests & Practice Icon",
      title: "Mock Tests & Practice",
      description: "AI-generated real-time exam simulations build confidence and improve performance.",
    },
    {
      iconSrc: "/icons/time-management-icon.svg",
      iconAlt: "Time Management Icon",
      title: "Time Management",
      description: "Learn AI-driven techniques to optimize test performance and manage exam time effectively.",
    },
    {
      iconSrc: "/icons/personalized-feedback-icon.svg",
      iconAlt: "Personalized Feedback Icon",
      title: "Personalized Feedback",
      description: "AI-driven insights to strengthen weak areas and track progress throughout your preparation.",
    },
  ],
}) => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Grid of Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-lg group"
            >
              {/* Icon and Title in the Same Row */}
              <div className="flex items-center mb-3">
                <Image
                  src={feature.iconSrc}
                  alt={feature.iconAlt}
                  width={24}
                  height={24}
                  className="mr-3 transition-transform duration-300 group-hover:translate-y-[-2px]"
                />
                <h3 className="text-lg font-semibold text-[#00695C]">{feature.title}</h3>
              </div>
              {/* Description */}
              <p className="text-black">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
