import { FC } from "react";
import Image from "next/image";

const GulfAdvantage: FC = () => {
  return (
<section className="w-full bg-white py-12 md:py-20">
  <div className="max-w-[1294px] px-4 md:px-6 mx-auto">
    <div className="flex flex-col-reverse md:flex-row items-center gap-10">

      {/* Text Column */}
      <div className="w-full md:w-[60%] flex flex-col justify-center">
        <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-semibold text-gray-900 leading-tight">
          Ace Your Exams, Unlock Global Opportunities with AI-Powered Training!
        </h2>

        <p className="mt-6 text-base sm:text-lg text-gray-800 leading-relaxed">
          At Gulfaar, we understand that securing international career and education opportunities often
          requires clearing standardized tests. Our AI-Powered Exam Preparation Programs are designed to
          help you succeed in language proficiency tests, job qualification exams, and industry-specific
          assessments with expert guidance, structured training, and AI-driven personalized learning.
        </p>
      </div>

      {/* Image Column */}
      <div className="w-full md:w-[40%] flex items-center justify-center">
        <div className="w-full max-w-[400px]">
          <Image
            src="/images/study-session.svg"
            alt="Person working at a desk with a laptop"
            width={400}
            height={240}
            className="rounded-3xl object-cover w-full h-auto"
          />
        </div>
      </div>
      
    </div>
  </div>
</section>

  );
};

export default GulfAdvantage;
