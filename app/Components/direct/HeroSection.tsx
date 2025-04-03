import React from "react";

const HeroSection: React.FC = () => {
  return (
    <header className="relative w-full bg-teal-800 h-[381px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c43fd281c336f211581e04e1c0196458e201d34"
        alt="Hero background showing recruitment and hiring"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-semibold text-center text-white max-md:text-4xl max-sm:px-5 max-sm:text-3xl">
          Direct Placement
        </h1>
        <p className="absolute inset-x-0 bottom-10 text-2xl text-center text-white max-md:text-xl max-sm:px-5 max-sm:text-base">
          Modern Technology, Smarter Hiring – We Shortlist, You Interview
        </p>
      </div>
    </header>
  );
};

export default HeroSection;
