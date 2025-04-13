import React from "react";
import Image from "next/image";

const IntroductionSection: React.FC = () => {
  return (

        <div className="w-full bg-white">
          <div className="max-w-[1400px] mx-auto px-16 py-20 max-md:px-8 max-sm:px-5">
            <div className="flex items-center justify-between gap-24 max-lg:flex-col max-lg:gap-16">
              {/* Text Content */}
              <div className="flex-1 w-full">
                <h1 className="text-[#2E5F5C] text-[42px] font-semibold leading-[1.2] mb-4 max-md:text-3xl max-sm:text-2xl">
                <span className=" text-3xl">Smarter Screening. Better Hiring.</span>
                  <span className="block text-[#2E5F5C] mt-2">
                  Effortless Hiring, Exceptional Talent
                  </span>
                </h1>
    
                <h2 className="text-[#2E5F5C] text-[28px] font-medium mb-8 max-md:text-2xl max-sm:text-xl">
                Hire smarter with AI-driven interviews, screening, and shortlisting—faster and easier.
                </h2>
    
                <p className="text-[18px] text-gray-700 leading-[1.8] mb-10 max-w-[650px]">
                At Gulfaar, we leverage cutting-edge AI and modern recruitment
              technology to streamline the hiring process. Our advanced AI-powered
              pre-video interviews and automated screening system ensure that you
              receive only the most qualified, pre-vetted candidates for direct
              placement. With minimal effort on your end, our system shortlists,
              evaluates, and ranks candidates, allowing you to focus only on the final
              interviews and hiring decisions. Plus, with our modern communication
              tools, reaching the right candidate has never been easier!
    
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
                    src="/dpcover.png"
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
