import React from 'react';

const OnDemandWorks = () => {
  const benefits = [
    {
      title: "AI-Driven Pre-Video Screening & Interviews",
      description: [
        "AI conducts real-time interviews, evaluating soft skills & job readiness.",
        "Candidates receive performance scores (out of 10) for better selection."
      ]
    },
    {
      title: "Real-Time Hiring Dashboard & Workforce Tracking",
      description: [
        "Employers can review, track, and manage on-demand workers seamlessly",
        "AI analyzes productivity, work hours, and project progress"
      ]
    },
    {
      title: "Instant Communication & Workforce Management",
      description: [
        "WhatsApp API & SMS Notifications – Immediate updates on hiring status",
        "Mobile App & In-App Messaging – Secure, fast communication with professionals"
      ]
    },
    {
      title: "Flexible Hiring & Payment Models",
      description: [
        "Hourly, daily, weekly, or project-based contracts available",
        "Integrated payroll system for hassle-free salary processing"
      ]
    },
    {
      title: "AI-Powered Talent Matching",
      description: [
        "Our AI system instantly finds & ranks candidates based on skills, experience, and job fit",
        "Pre-vetted professionals are ready to work immediately."
      ]
    }
  ];

  return (
    <section className="px-16 py-20 max-md:px-8 max-sm:px-5">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-x-24 gap-y-16">
          {/* Main Heading */}
          <h1 className="text-[52px] font-semibold text-[#2E5F5C] leading-[1.1] max-md:text-4xl max-sm:text-3xl">
            How Our On-Demand<br />
            Outsourcing Works ?
          </h1>

          {/* First Card */}
          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <h3 className="text-[24px] font-semibold text-[#1E1B4B] mb-4 text-center">
              {benefits[0].title}
            </h3>
            <div className="space-y-4">
              {benefits[0].description.map((point, index) => (
                <p key={index} className="text-[18px] text-gray-700 leading-relaxed">
                  {point}
                </p>
              ))}
            </div>
          </div>

          {/* Remaining Cards in Grid */}
          {benefits.slice(1).map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-[24px] font-semibold text-[#1E1B4B] mb-4 text-center">
                {benefit.title}
              </h3>
              <div className="space-y-4">
                {benefit.description.map((point, pointIndex) => (
                  <p key={pointIndex} className="text-[18px] text-gray-700 leading-relaxed">
                    {point}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnDemandWorks;
