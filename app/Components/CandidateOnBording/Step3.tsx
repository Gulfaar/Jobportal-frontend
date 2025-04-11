"use client"
import Link from "next/link";
import FeatureCard from "../SkillDevelopement/FeatureCard";
import OnboardingCard from "./OnboardingCard"; // Import the reusable card
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";


const WelcomeSection = () => {

  const resumeData = useSelector((state: RootState) => state.resume.parsedData);

  console.log(resumeData, "Resume Data from Redux Store");
  

  const userNameRaw = resumeData?.structured_resume?.name ||  "Candidate";
  const userName = userNameRaw.replace(/\s+/g, " ").trim();
  const summary = resumeData?.personal_summary?.summary_1 || "We're excited to help you build a powerful and personalized resume experience.";


  return (
    <div className="min-h-screen  flex justify-center items-center ">
      <OnboardingCard> {/* Wrap everything inside OnboardingCard */}
        <section className="flex flex-col  md:flex-row items-center md:items-start gap-4 md:gap-12">
          {/* Profile Image */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4 md:mb-0">
            <img
              src="/images/profile.svg"
              alt="User Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left w-full">
            <h2 className="text-lg sm:text-xl md:text-3xl font-semibold text-[#2E3A56] mb-2 sm:mb-4">
            Welcome, {userName.split(" ")[0]}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700">
            {summary}
            </p>
            
          </div>
          
        </section>
        <div className="flex justify-between mt-6">
            <Link href="/CandidateBoarding/Step3">
              <button className="border border-[#FF6F61] text-[#DA6B64] px-6 py-2 rounded-lg text-base hover:bg-[#FFEBE8] transition">
                Back
              </button>
            </Link>
            <Link href="/CandidateBoarding/Step5">
              <button className="bg-[#DA6B64] text-white px-6 py-2 rounded-lg text-base hover:bg-[#c65751] transition">
                Continue
              </button>
            </Link>
          </div>
      </OnboardingCard>
    </div>
  );
};

export default WelcomeSection;
