import React from "react";

const CallToActionSection: React.FC = () => {
  return (
    <section className="relative px-16 py-16 bg-yellow-400 bg-opacity-50 max-md:px-10 max-sm:px-5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0035fcd14a910a73fc59f10501fb38bf8af9f73c"
        alt="Modern hiring background"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.5]"
      />
      <div className="relative">
        <h2 className="mb-10 text-5xl font-semibold text-center max-md:text-4xl max-sm:text-3xl">
          Modern Hiring for Modern Businesses
        </h2>
        <p className="mx-auto mb-10 text-xl text-center max-w-[514px]">
          With Gulfaar's AI-powered direct placement system, hiring is faster,
          smarter, and more effective than ever before. Communicating with
          candidates is seamless—whether via WhatsApp, mobile apps, or instant
          alerts, you're always just a click away from your next great hire
        </p>
        <div className="flex flex-col gap-5 items-center">
          <p className="text-xl">Let our technology find your perfect hire</p>
          <button
            className="px-10 py-5 text-2xl font-semibold text-white bg-teal-800 rounded-xl"
            aria-label="Contact Gulfaar for direct placement services"
          >
            Contact Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
