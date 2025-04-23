"use client"
import Link from "next/link";
import OnboardingCard from "./OnboardingCard";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

const WelcomeSection = () => {
  const resumeData = useSelector((state: RootState) => state.resume.parsedData);

  const userNameRaw = resumeData?.structured_resume?.name || "Candidate";
  const userName = userNameRaw.replace(/\s+/g, " ").trim();
  const summary =
    resumeData?.personal_summary?.summary_1 ||
    "We're excited to help you build a powerful and personalized resume experience.";
  


  
  const renderCard = (title: string, description: string) => (
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow hover:shadow-md transition">
      <h4 className="text-md font-semibold text-gray-800 mb-1">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col items-center py-5 ">
      <OnboardingCard>
        {/* Profile Section */}
        <section className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 p-4">
          <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white mb-4 md:mb-0">
            <img
              src={resumeData?.profile_image_url || "/images/profile.svg"}
              onError={(e) => {
                e.currentTarget.src = "/images/profile.svg";
              }}
              alt="User Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center md:text-left w-full">
            <h2 className="text-lg sm:text-xl md:text-3xl font-semibold text-[#2E3A56] mb-2 sm:mb-3">
              Welcome, {userName.split(" ")[0]}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              {summary}
            </p>
          </div>
        </section>



{/* Jobs Section */}
<div className="mt-10 w-full p-5">
  <h3 className="text-xl font-semibold text-[#2E3A56] mb-4">Jobs</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {resumeData?.common_jobs?.recommended_jobs?.slice(0, 4).map((jobTitle:any, index:any) => (
      <div key={index} className="bg-white p-4 rounded shadow">
        <p className="text-[#2E3A56] font-medium">{jobTitle}</p>
      </div>
    ))}
  </div>
</div>

  {/* Courses Section */}
<div className="mt-10 w-full p-5">
  <h3 className="text-xl font-semibold text-[#2E3A56] mb-4">Courses</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {resumeData?.courses?.recommended_courses?.slice(0, 4).map((courseName:any, index:any) => (
      <div key={index} className="bg-white p-4 rounded shadow">
        <p className="text-[#2E3A56] font-medium">{courseName}</p>
      </div>
    ))}
  </div>
</div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 w-full p-5">
          <Link href="/CandidateBoarding/Step2" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto border border-[#FF6F61] text-[#DA6B64] px-5 py-2 rounded-lg text-sm sm:text-base hover:bg-[#FFEBE8] transition">
              Back
            </button>
          </Link>
          <Link href="/CandidateBoarding/Step4" className="w-full sm:w-auto">
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
