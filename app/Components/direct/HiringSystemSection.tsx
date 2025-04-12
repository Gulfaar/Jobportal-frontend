import Image from "next/image";
import React from "react";

const HiringSystemSection: React.FC = () => {
  const sections = [
    {
      title: "Simplified Candidate Communication",
      points: [
        "WhatsApp API Integration – Connect instantly with candidates via automated messages and quick responses.",
        "Mobile App Notifications – Candidates receive instant updates on interview schedules and hiring progress.",
        "Automated SMS & Email Alerts – No delays—our system sends real-time updates, interview reminders, and status notifications.",
        "In-App Messaging – Secure chat between employers and candidates for quick follow-ups and clarifications.",
        "Voice & Video Call Integration – Schedule and conduct live interviews seamlessly.",
      ],
    },
    {
      title: "AI-Powered Candidate Screening",
      points: [
        "Our smart algorithm scans thousands of profiles in seconds, matching skills, experience, and job fit.",
        "AI dynamically adjusts candidate rankings based on job descriptions and requirements.",
      ],
    },
    {
      title: "Seamless Interview Scheduling & Hiring",
      points: [
        "Shortlisted candidates are instantly ready for interviews.",
        "Employers can schedule interviews in one click and finalize hiring decisions faster.",
      ],
    },
    {
      title: "Instant AI Performance Scores & Ranking",
      points: [
        "Our AI scoring system (out of 10) helps prioritize top candidates.",
        "Employers receive a pre-filtered list of the best talent, eliminating manual shortlisting efforts.",
      ],
    },
    {
      title: "AI-Driven Pre-Video Interviews",
      points: [
        "AI generates performance scores (out of 10) and asks industry-specific questions in a structured interview format.",
        "Real-time AI monitoring analyses speech clarity, confidence, and problem-solving skills.",
        "AI evaluates behavioral and psychometric traits, ensuring candidates align with company culture.",
      ],
    },
  ];

  return (
    <section className="bg-[#2E5F5C] px-6 py-16 md:px-16 sm:py-12">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-white text-[32px] sm:text-[36px] md:text-[40px] text-center mb-12 font-normal">
          How Our Modern System Simplifies Hiring
        </h2>

        <div className="grid md:grid-cols-2 gap-14">
          {/* Left Column */}
          <div className="space-y-14">
            {sections.slice(0, 2).map((section, index) => (
              <div key={index} className="space-y-6 max-md:border-b max-md:border-white max-md:pb-6">
                <h3 className="text-white text-2xl sm:text-2xl text-center font-semibold">{section.title}</h3>
                <ul className="space-y-3">
                  {section.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-white text-[16px] sm:text-[17px] leading-relaxed"
                    >
                      <Image
                        src="/langbulleticon.svg"
                        alt="icon"
                        width={16}
                        height={16}
                        className="mt-1 w-4 h-4 sm:w-4 sm:h-4"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-14">
            {sections.slice(2).map((section, index) => (
              <div key={index} className="space-y-6 max-md:border-b max-md:border-white max-md:pb-6">
                <h3 className="text-white text-xl sm:text-2xl text-center font-semibold">{section.title}</h3>
                <ul className="space-y-3">
                  {section.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-white text-[16px] sm:text-[17px] leading-relaxed"
                    >
                      <Image
                        src="/langbulleticon.svg"
                        alt="icon"
                        width={16}
                        height={16}
                        className="mt-1 w-4 h-4 sm:w-4 sm:h-4"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringSystemSection;
