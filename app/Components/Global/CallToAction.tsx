import React from "react";

const CallToAction = () => {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/images/call-bg.png')` }}
    >
      {/* Overlay with 50% yellow */}
      <div className="w-full h-full bg-[rgba(255,242,0,0.5)]">
        <div className="flex flex-col items-center justify-center text-center px-4 py-20 sm:py-24 md:py-32 text-black">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug whitespace-normal lg:whitespace-nowrap max-w-full">
  Gulfaar: Bridging Talent & Opportunities Worldwide
</h1>

<p className="mt-8 sm:mt-10 lg:mt-12 text-center text-black font-medium text-sm sm:text-base md:text-lg max-w-[450px] mx-auto leading-relaxed">
        With offices, hiring partners, and training centers across the world, we ensure
        businesses get the best talent and job seekers find the right opportunities. No matter
        where you are, Gulfaar connects you to a world of possibilities!
      </p>

          {/* Bottom section: text + button */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <p className="text-base font-medium">Looking to hire or work internationally?</p>
            <button className="px-6 py-3 bg-teal-800 text-white rounded-md hover:bg-teal-700 transition">
              Contact Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
