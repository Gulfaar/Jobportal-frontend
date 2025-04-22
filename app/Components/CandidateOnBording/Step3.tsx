"use client"
import Link from "next/link";
import FeatureCard from "../SkillDevelopement/FeatureCard";
import OnboardingCard from "./OnboardingCard"; 
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

const WelcomeSection = () => {
  const resumeData = useSelector((state: RootState) => state.resume.parsedData);

  const userNameRaw = resumeData?.structured_resume?.name || "Candidate";
  const userName = userNameRaw.replace(/\s+/g, " ").trim();
  const summary = resumeData?.personal_summary?.summary_1 || "We're excited to help you build a powerful and personalized resume experience.";

  return (
    <div className="min-h-screen px-4 py-6 flex justify-center items-center ">
      <OnboardingCard>
        <section className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12">
          
          {/* Profile Image */}
          <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4 md:mb-0">
            <img
              src="/images/profile.svg"
              alt="User Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left w-full">
            <h2 className="text-lg sm:text-xl md:text-3xl font-semibold text-[#2E3A56] mb-2 sm:mb-3">
              Welcome, {userName.split(" ")[0]}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              {summary}
            </p>
          </div>
        </section>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 w-full">
          <Link href="/CandidateBoarding/Step3" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto border border-[#FF6F61] text-[#DA6B64] px-5 py-2 rounded-lg text-sm sm:text-base hover:bg-[#FFEBE8] transition">
              Back
            </button>
          </Link>
          <Link href="/CandidateBoarding/Step5" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-[#DA6B64] text-white px-5 py-2 rounded-lg text-sm sm:text-base hover:bg-[#c65751] transition">
              Continue
            </button>
          </Link>
        </div>
      </OnboardingCard>
    </div>
  );
};

export default WelcomeSection;
