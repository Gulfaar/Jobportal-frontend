import { FC } from "react";
import Image from "next/image";

const GulfAdvantage: FC = () => {
  return (
    <section className="bg-white py-12 w-full">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">

          {/* Text Column */}
          <div className="md:w-1/2 space-y-6">
            {/* NEW Description Heading */}
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Ace Your Exams, Unlock Global Opportunities with AI-Powered Training!
            </h2>

            {/* NEW Intro Paragraph */}
            <p className="text-gray-800 text-base md:text-lg leading-relaxed">
              At Gulfaar, we understand that securing international career and education opportunities often
              requires clearing standardized tests. Our AI-Powered Exam Preparation Programs are designed to
              help you succeed in language proficiency tests, job qualification exams, and industry-specific
              assessments with expert guidance, structured training, and AI-driven personalized learning.
            </p>

          
            
          </div>

          {/* Image Column */}
          <div className="md:w-1/2 flex justify-end">
            <div className="w-full max-w-[400px]">
              <Image
                src="/images/study-session.svg" // Replace with your actual image URL
                alt="Person working at a desk with a laptop"
                width={400}
                height={240}
                className="rounded-lg object-cover w-full h-auto"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GulfAdvantage;
