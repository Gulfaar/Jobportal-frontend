import React from "react";


const CallToAction = () => {
  return (
    <section className="flex flex-col items-center mt-12 max-w-[1307px] px-4 md:px-0">
      <h2 className="text-2xl font-semibold text-teal-800 text-center max-md:mt-10 max-md:max-w-full">
        Gulfaar: Bridging Talent & Opportunities Worldwide!
      </h2>

      <p className="mt-8 text-xl text-center text-black max-w-[768px] max-md:max-w-full">
        With offices, hiring partners, and training centers across the world, we
        ensure businesses get the best talent and job seekers find the right
        opportunities. No matter where you are, Gulfaar connects you to a world
        of possibilities!
      </p>

      <a
        href="#"
        className="flex items-center justify-center gap-5 px-7 py-5 mt-12 text-base text-white bg-teal-800 rounded-xl w-[215px] max-md:w-full max-md:px-5 max-md:mt-10"
        aria-label="Contact with Gulfaar"
      >
        <span className="font-semibold">Contact us</span>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/52c7915de3873c47014d662d56ee9b4eb1a7648f?placeholderIfAbsent=true"
          alt="Contact icon"
          className="object-contain w-[23px]"
        />
      </a>

      <p className="mt-12 text-xl text-black text-center py-4 max-md:mt-10 max-md:max-w-full">
        Looking to hire or work internationally? Contact us today!
      </p>
    </section>
  );
};

export default CallToAction;
