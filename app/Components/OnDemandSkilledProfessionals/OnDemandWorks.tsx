import React from "react";

const OnDemandWorks = () => {
  const benefits = [
    {
      title: "AI-Driven Pre-Video Screening & Interviews",
      description: [
        "AI conducts real-time interviews, evaluating soft skills & job readiness.",
        "Candidates receive performance scores (out of 10) for better selection.",
      ],
    },
    {
      title: "Real-Time Hiring Dashboard & Workforce Tracking",
      description: [
        "Employers can review, track, and manage on-demand workers seamlessly",
        "AI analyzes productivity, work hours, and project progress",
      ],
    },
    {
      title: "Instant Communication Workforce Management",
      description: [
        "WhatsApp API & SMS Notifications – Immediate updates on hiring status",
        "Mobile App & In-App Messaging – Secure, fast communication with professionals",
      ],
    },
    {
      title: "Flexible Hiring & Payment Models",
      description: [
        "Hourly, daily, weekly, or project-based contracts available",
        "Integrated payroll system for hassle-free salary processing",
      ],
    },
    {
      title: "AI-Powered Talent Matching",
      description: [
        "Our AI system instantly finds & ranks candidates based on skills, experience, and job fit",
        "Pre-vetted professionals are ready to work immediately.",
      ],
    },
  ];

  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-16 py-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-semibold text-[#2E5F5C] leading-snug max-w-[680px] mx-auto text-center">
            How Our On-Demand Outsourcing Works?
          </h1>

          {/* First Card */}
          <div
            className="bg-white rounded-lg p-8 shadow-[0_8px_24px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)] hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <h3 className="text-[24px] font-semibold text-[#1E1B4B] mb-4 text-center">
              {benefits[0].title}
            </h3>
            <div className="space-y-4">
              {benefits[0].description.map((point, index) => (
                <p
                  key={index}
                  className="text-[18px] text-gray-700 leading-relaxed"
                >
                  {point}
                </p>
              ))}
            </div>
          </div>

          {/* Remaining Cards in Grid */}
          {benefits.slice(1).map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-[0_8px_24px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)] hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-[24px] font-semibold text-[#1E1B4B] mb-4 text-center">
                {benefit.title}
              </h3>
              <div className="space-y-4">
                {benefit.description.map((point, pointIndex) => (
                  <p
                    key={pointIndex}
                    className="text-[18px] text-gray-700 leading-relaxed"
                  >
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