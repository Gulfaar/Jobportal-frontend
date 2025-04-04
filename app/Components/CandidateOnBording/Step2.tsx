'use client'
import { useRouter } from "next/router";
import Link from "next/link";

const CandidateOnboardingSteps2 = () => {

  return (
    <section className="flex flex-col md:flex-row items-center justify-center w-[80%] mx-auto py-16 gap-12">
      {/* Left Side: Image */}
      <div className="relative w-[300px] md:w-[400px] flex justify-center">
        {/* Yellow Vector Image - Reduced Size */}
        <img
          src="/images/Vector.svg"
          alt="Yellow Vector"
          className="absolute top-1/2 left-1/2 w-[110%] h-[110%] -translate-x-1/2 -translate-y-1/2 z-0 scale-90"
        />

        {/* Candidate Group Image */}
        <img
          src="/images/candidate-group.svg"
          alt="Candidate Group"
          className="relative z-10 w-full h-full object-cover rounded-3xl"
        />
      </div>

      {/* Right Side: Content */}
      <div className="w-full md:w-1/2">
        <h3 className="text-center md:text-left text-sm font-semibold text-gray-600 uppercase">
          ─ Get Best Employee
        </h3>
        <h2 className="text-center md:text-left text-2xl font-bold text-[#2E5F5C] mt-2">
          Apply Now!
        </h2>
        <h3 className="text-center md:text-left text-xl font-extrabold text-black">
          520+ company searching for you
        </h3>
        <p className="text-gray-600 mt-4 text-center md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sit
          donec lectus suscipit ultricies rhoncus.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col md:flex-row items-center gap-4">
        <Link href="/CandidateBoarding/Step3">
          <button className="flex items-center gap-2 bg-[#2E5F5C] text-white px-6 py-3 rounded-lg shadow-md">
            <span>📂</span> Upload CV
          </button>
          </Link>
          <Link href="/CandidateBoarding/Step6">
            <button className="bg-[#D67268] text-white px-6 py-3 rounded-lg shadow-md">
              Enter Details Manually
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CandidateOnboardingSteps2;
