import React from "react";
import Image from "next/image";

interface Enhancement {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
}

interface AIEnhancementsProps {
  heading?: string;
  subheading?: string;
  enhancements?: Enhancement[];
}

const AIEnhancements: React.FC<AIEnhancementsProps> = ({
  heading = "How AI Enhances Your Exam Preparation",
  subheading = "Our cutting-edge AI technology personalizes your learning experience and maximizes your exam success through adaptive learning.",
  enhancements = [
    {
      iconSrc: "/icons/ai-smart-study-plans-icon.svg",
      iconAlt: "AI-Powered Smart Study Plans Icon",
      title: "AI-Powered Smart Study Plans",
      description: "Personalized learning paths based on your strengths and weaknesses.",
    },
    {
      iconSrc: "/icons/ai-speaking-writing-icon.svg",
      iconAlt: "AI-Driven Speaking & Writing Evaluation Icon",
      title: "AI-Driven Speaking & Writing Evaluation",
      description: "Instant assessment for language exams like IELTS, TOEFL, and OET.",
    },
    {
      iconSrc: "/icons/adaptive-mock-tests-icon.svg",
      iconAlt: "Adaptive AI Mock Tests Icon",
      title: "Adaptive AI Mock Tests",
      description: "Simulated real-exam conditions with AI-generated difficulty adjustments.",
    },
    {
      iconSrc: "/icons/ai-performance-analytics-icon.svg",
      iconAlt: "AI-Based Performance Analytics Icon",
      title: "AI-Based Performance Analytics",
      description: "Instant feedback on test results, highlighting areas for improvement.",
    },
  ],
}) => {
  return (
    <section className="bg-[#2E5F5C] py-12 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading and Subheading */}
        <h2 className="text-2xl md:text-3xl font-bold text-white uppercase mb-4">
          {heading}
        </h2>
        <p className="text-lg text-white mb-12 max-w-3xl mx-auto">
          {subheading}
        </p>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {enhancements.map((enhancement, index) => (
            <div
              key={index}
              className="flex items-start gap-4 text-left px-2 sm:px-0"
            >
              {/* Icon Image */}
              <div className="flex-shrink-0">
                <Image
                  src={enhancement.iconSrc}
                  alt={enhancement.iconAlt}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {enhancement.title}
                </h3>
                <p className="text-white">{enhancement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIEnhancements;
