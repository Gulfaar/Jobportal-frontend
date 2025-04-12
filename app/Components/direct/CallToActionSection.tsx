import Image from "next/image";
import React from "react";

const CallToActionSection: React.FC = () => {
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
          With Gulfaar's AI-powered direct placement system, hiring is faster, smarter, and more effective than ever before. 
          Communicating with candidates is seamless—whether via WhatsApp, mobile apps, or instant alerts,  
          you're always just a click away from your next great hire.
        </p>


      </div>
    </section>
  );
};

export default CallToActionSection;
