import Link from "next/link";
import FeatureCard from "../SkillDevelopement/FeatureCard";

const WelcomeSection = () => {
  return (
    <section className="py-16 w-full mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 bg-[#F5FAFA] rounded-lg p-6 md:p-8">
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
          You are currently an UI/UX Designer with experience gained through an internship at Zople Technologies. 
          Your skills in wireframing, prototyping, and proficiency in Figma highlight your strong foundation in UI/UX principles. 
          We will tailor your resume-building experience to emphasize your background in collaborative design practices 
          and your passion for creating intuitive user experiences.
        </p>
      </div>
    </section>
  );
};

export default WelcomeSection;
