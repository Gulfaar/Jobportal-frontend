import Image from "next/image";
import React from "react";

const CallToActionSectionTailored: React.FC = () => {
  return (
    <section className="relative px-16 py-16 text-black overflow-hidden max-lg:px-10 max-sm:px-6 max-sm:py-12">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#FFF200] opacity-50 z-0"></div>

      {/* Background Image */}
      <Image
        src="/modernhiring.png"
        alt="Modern hiring background"
        fill
        className="absolute inset-0 object-cover z-0"
      />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-[900px] mx-auto text-center">
        <h2 className="mb-8 text-[52px] font-semibold leading-tight max-lg:text-4xl max-sm:text-3xl">
          Modern Hiring for Modern Businesses
        </h2>

        {/* Description Text */}
        <p className="mx-auto mb-8 text-xl max-w-[580px] md:text-justify leading-relaxed text-center max-sm:text-lg max-sm:leading-snug">
        Whether you need permanent hires, project-based specialists, or contract employees,
         Gulfaar  ensures you get the best talent from our AI-screened global database.
        </p>

        {/* CTA Button and Text */}
        <div className="flex justify-center items-center gap-6 max-sm:flex-col max-sm:text-center">
          <p className="text-xl font-medium max-sm:text-lg">
          Find your perfect candidate today 
          </p>
          <button
            className="px-10 py-4 text-xl font-medium text-white bg-teal-800 rounded-[12px] hover:bg-teal-700 transition-colors max-sm:w-full max-sm:py-3"
            aria-label="Contact Gulfaar for direct placement services"
          >
            Contact Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSectionTailored;
