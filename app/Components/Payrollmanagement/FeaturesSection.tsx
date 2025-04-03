import React from "react";
import FeatureItem from "./FeatureItem";

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: "End-to-End Payroll Automation",
      description: "No manual calculations, errors, or delays.",
    },
    {
      title: "Regulatory Compliance & Tax Management",
      description:
        "We handle tax deductions, social security, and legal obligations.",
    },
    {
      title: "Scalable & Cost-Effective",
      description:
        "Payroll solutions for any team size, from startups to enterprises",
    },
    {
      title: "Secure & Transparent",
      description:
        "Employees get instant access to salary statements & payslips",
    },
    {
      title: "Flexible Payment Models",
      description: "Weekly, bi-weekly, or monthly payroll options",
    },
    {
      title: "Seamless Communication",
      description:
        "WhatsApp, SMS, and email alerts for salary updates & HR notifications",
    },
  ];

  return (
    <section
      className="px-16 py-12 max-md:p-8"
      aria-labelledby="features-heading"
    >
      <h2
        id="features-heading"
        className="mb-12 text-5xl font-semibold text-center text-indigo-950 max-sm:text-4xl"
      >
        Why Choose Gulfaar's AI-Powered Payroll Management?
      </h2>
      <div className="grid gap-8 grid-cols-[repeat(2,1fr)] max-md:grid-cols-[1fr]">
        {features.map((feature, index) => (
          <FeatureItem
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
