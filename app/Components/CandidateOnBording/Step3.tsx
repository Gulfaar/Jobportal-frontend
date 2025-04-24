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
          <div className="relative aspect-square w-28 sm:w-36 md:w-56 rounded-full border-4 border-white overflow-hidden shadow-md">
            <img
              src={resumeData?.profile_image_url || "/images/profile.svg"}
              onError={(e) => {
                e.currentTarget.src = "/images/profile.svg";
              }}
              alt="User Profile"
              className="absolute inset-0 w-full h-full object-cover"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {resumeData?.common_jobs?.recommended_jobs?.slice(0, 4).map((jobTitle: any, index: any) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col justify-between transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4">
                  <h4 className="text-xl font-semibold text-[#2E3A56] mb-1 transition-colors duration-300 group-hover:text-[#1f2a3b]">
                    {jobTitle}
                  </h4>
                </div>
                <button

                  className="self-start px-5 py-2 bg-[#2E3A56] text-white rounded-lg hover:bg-[#1f2a3b] transition-colors duration-300"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>




        {/* Courses Section */}
        <div className="mt-10 w-full p-5">
          <h3 className="text-xl font-semibold text-[#2E3A56] mb-6">Courses</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resumeData?.courses?.recommended_courses?.slice(0, 6).map((courseName: any, index: any) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transform transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 bg-[#2E3A56] text-white p-3 rounded-full text-lg font-semibold w-12 h-12 flex items-center justify-center">
                    {courseName[0]}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[#2E3A56] text-lg font-semibold group-hover:text-[#1f2a3b] transition-colors duration-300">
                      {courseName}
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">Recommended just for you</p>
                  </div>
                </div>
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
