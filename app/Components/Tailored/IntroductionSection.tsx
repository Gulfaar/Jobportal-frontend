import React from "react";
import Image from "next/image";
import Link from "next/link";

const IntroductionSection: React.FC = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-16 py-14 max-md:px-8 max-sm:px-5">
        <div className="flex items-center justify-between gap-24 max-lg:flex-col max-lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 w-full">
            <h1 className="text-[#2E5F5C] text-[42px] font-semibold leading-[1.2] mb-4 max-md:text-3xl max-sm:text-2xl">
            <span className="text-2xl md:text-3xl">Gulfaar uses AI-powered video interviews to match you with pre-assessed, job-ready talent</span>
              {/* <span className="block text-[#2E5F5C]  text-2xl mt-2">
              
              </span> */}
            </h1>

            <h2 className="text-[#2E5F5C] text-[28px] font-medium mb-8 max-md:text-2xl max-sm:text-xl">
            Hire faster with smarter, data-driven screening.
            </h2>

            <p className="text-[18px] text-gray-700 leading-[1.8] mb-10 max-w-[650px]">
            At Gulfaar, we don't just provide a database of candidates—we deliver the right 
            talent through AI powered pre-video interviews and intelligent talent-matching. 
            Our advanced AI screening ensures  that every candidate is pre-assessed based on skills,
            experience, personality, and job-specific  aptitude, saving recruiters valuable time while
             ensuring the best possible hire

            </p>

            {/* <button
                className="flex gap-3 px-8 py-4 mt-12 text-sm leading-tight text-center text-white uppercase bg-teal-800 rounded-[50px] tracking-[3px] max-md:px-5 max-md:mt-10"
                aria-label="Get Started"
              >
                <span className="grow my-auto">Get Started</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/6307c969f4753633a930c857def46cbf555e5466?placeholderIfAbsent=true"
                  className="object-contain shrink-0 w-3.5 aspect-[0.87]"
                  alt="Arrow icon"
                />
              </button> */}
          </div>

          {/* Image Section */}
          <div className="flex-1 w-full">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/tailoredcover.png"
                alt="Skill Development"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionSection;
