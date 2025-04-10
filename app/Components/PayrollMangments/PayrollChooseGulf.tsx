import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // For the right arrow icon

const WhyChooseGulfar: React.FC = () => {
  const features = [
    {
      title: 'End-To-End Payroll Automation',
      description: 'No manual calculations, errors, or delays.',
    },
    {
      title: 'Regulatory Compliance & Tax Management',
      description: 'We handle tax deductions, social security, and legal obligations.',
    },
    {
      title: 'Scalable & Cost-Effective',
      description: 'Payroll solutions for any team size, from startups to enterprises.',
    },
    {
      title: 'Secure & Transparent',
      description: 'Employees get instant access to salary statements & payslips.',
    },
    {
      title: 'Flexible Payment Models',
      description: 'Weekly, bi-weekly, or monthly payroll options.',
    },
    {
      title: 'Seamless Communication',
      description: 'WhatsApp, SMS, and email alerts for salary updates & HR notifications.',
    },
  ];

  return (
    <div className=" py-10 px-6 md:px-12 font-figtree">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-semibold text-[#141E46] mb-8 leading-tight text-center md:text-left">
        Why Choose Gulfar’s AI-Powered Payroll Management?
      </h1>

      {/* 2x2 Grid of Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-4">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-[#2E5F5C] rounded-full flex items-center justify-center">
                <FaArrowRight className="text-white w-5 h-5" />
              </div>
            </div>
            {/* Text */}
            <div>
              <h2 className="text-xl font-semibold text-black mb-2">
                {feature.title}
              </h2>
              <p className="text-gray-600 font-regular">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseGulfar;