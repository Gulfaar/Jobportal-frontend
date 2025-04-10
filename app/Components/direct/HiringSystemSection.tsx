import Image from "next/image";
import React from "react";

const HiringSystemSection: React.FC = () => {
  return (
    <section className="bg-[#2E5F5C] px-16 py-16 max-md:px-8 max-sm:px-5 max-sm:py-10">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-white text-[40px] text-center mb-14 font-normal max-md:text-[32px] max-sm:text-[28px]">
          How Our Modern System Simplifies Hiring
        </h2>

        <div className="grid grid-cols-2 gap-16 max-md:grid-cols-1 max-md:gap-10">
          {/* Left Column */}
          <div className="space-y-8 max-md:text-center">
            <div className="space-y-4">
              <h3 className="text-white text-2xl text-center mb-6">Simplified Candidate Communication</h3>
              <ul className="space-y-4">
                {[
                  "WhatsApp API Integration – Connect instantly with candidates via automated messages and quick responses.",
                  "Mobile App Notifications – Candidates receive instant updates on interview schedules and hiring progress.",
                  "Automated SMS & Email Alerts – No delays—our system sends real-time updates, interview reminders, and status notifications.",
                  "In-App Messaging – Secure chat between employers and candidates for quick follow-ups and clarifications.",
                  "Voice & Video Call Integration – Schedule and conduct live interviews seamlessly.",
                ].map((text, index) => (
                  <li key={index} className="flex gap-2 text-white max-md:justify-center">
                    <Image src="/langbulleticon.svg" alt="icon" height={10} width={10} className="w-4 h-4 mt-1 max-sm:w-3 max-sm:h-3" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-white text-2xl text-center mb-6">AI-Powered Candidate Screening</h3>
              <ul className="space-y-4">
                {[
                  "Our smart algorithm scans thousands of profiles in seconds, matching skills, experience, and job fit.",
                  "AI dynamically adjusts candidate rankings based on job descriptions and requirements.",
                ].map((text, index) => (
                  <li key={index} className="flex gap-2 text-white max-md:justify-center">
                    <Image src="/langbulleticon.svg" alt="icon" height={10} width={10} className="w-4 h-4 mt-1 max-sm:w-3 max-sm:h-3" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8 max-md:text-center">
            <div className="space-y-4">
              <h3 className="text-white text-2xl text-center mb-6">Seamless Interview Scheduling & Hiring</h3>
              <ul className="space-y-4">
                {[
                  "Shortlisted candidates are instantly ready for interviews.",
                  "Employers can schedule interviews in one click and finalize hiring decisions faster.",
                ].map((text, index) => (
                  <li key={index} className="flex gap-2 text-white max-md:justify-center">
                    <Image src="/langbulleticon.svg" alt="icon" height={10} width={10} className="w-4 h-4 mt-1 max-sm:w-3 max-sm:h-3" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-white text-2xl text-center mb-6">Instant AI Performance Scores & Ranking</h3>
              <ul className="space-y-4">
                {[
                  "Our AI scoring system (out of 10) helps prioritize top candidates.",
                  "Employers receive a pre-filtered list of the best talent, eliminating manual shortlisting efforts.",
                ].map((text, index) => (
                  <li key={index} className="flex gap-2 text-white max-md:justify-center">
                    <Image src="/langbulleticon.svg" alt="icon" height={10} width={10} className="w-4 h-4 mt-1 max-sm:w-3 max-sm:h-3" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-white text-2xl text-center mb-6">AI-Driven Pre-Video Interviews</h3>
              <ul className="space-y-4">
                {[
                  "AI generates performance scores (out of 10) and asks industry-specific questions in a structured interview format.",
                  "Real-time AI monitoring analyses speech clarity, confidence, and problem-solving skills.",
                  "AI evaluates behavioral and psychometric traits, ensuring candidates align with company culture.",
                ].map((text, index) => (
                  <li key={index} className="flex gap-2 text-white max-md:justify-center">
                    <Image src="/langbulleticon.svg" alt="icon" height={10} width={10} className="w-4 h-4 mt-1 max-sm:w-3 max-sm:h-3" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringSystemSection;
