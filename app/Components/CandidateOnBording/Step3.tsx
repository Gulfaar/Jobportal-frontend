import Link from "next/link";
import FeatureCard from "../SkillDevelopement/FeatureCard";
import OnboardingCard from "./OnboardingCard"; // Import the reusable card

const WelcomeSection = () => {
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
              Welcome, Amanda
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700">
              You are currently a UI/UX Designer with experience gained through an internship at Zople Technologies.
              Your skills in wireframing, prototyping, and proficiency in Figma highlight your strong foundation in UI/UX principles.
              We will tailor your resume-building experience to emphasize your background in collaborative design practices
              and your passion for creating intuitive user experiences.
            </p>
            
          </div>
          
        </section>
        <div className="flex flex-col sm:flex-row  mt-10 md:mt-20 md:px-10 justify-between items-center gap-4 mb-8">
  
  <Link href="/CandidateBoarding/Step2">
    <button className="text-[#D67268] border hover:bg-[#653737] px-6 py-2 rounded-lg shadow-md transition-all duration-200 text-base sm:text-lg w-full sm:w-auto">
      Back
    </button>
  </Link>

  <div className="flex-1"></div> {/* Pushes the continue button to the end */}

  <Link href="/CandidateBoarding/Step4">
    <button className="bg-[#D67268] hover:bg-[#653737] text-white px-6 py-2 rounded-lg shadow-md transition-all duration-200 text-base sm:text-lg w-full sm:w-auto">
      Continue
    </button>
  </Link>

</div>
      </OnboardingCard>
    </div>
  );
};

export default WelcomeSection;
