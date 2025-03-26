import React from "react";

const GlobalPresenceInfo = () => {
  return (
    <section className="mt-12 w-full max-w-[1307px] px-10 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[58%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-16 w-full font-semibold text-neutral-800 max-md:mt-10 max-md:max-w-full">
            <h2 className="self-center text-2xl tracking-tight">
              OUR GLOBAL PRESENCE
            </h2>
            <p className="mt-12 text-xl tracking-tight leading-8 max-md:mt-10 max-md:max-w-full">
              At Gulfaar, we take pride in our expansive global footprint,
              ensuring businesses and job seekers worldwide have access to the
              best recruitment, workforce solutions, and skill development
              programs. With a strong presence across multiple continents, we
              connect top-tier talent with leading employers, providing
              efficient, AI-powered hiring and workforce management solutions.
              <br />
              <br />
              From manpower consultancy and skill training to contract-based
              hiring and outsourcing solutions, our reach spans diverse
              industries, cultures, and economies, making us a trusted global
              partner for businesses and professionals alike.
            </p>
            <a
              href="#"
              className="flex gap-1.5 self-start px-2.5 py-2 mt-11 text-sm text-white bg-blue-400 rounded-md max-md:mt-10"
              aria-label="Get Started with Gulfaar services"
            >
              <span className="grow my-auto">Get Started</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/dacb45a7cef109c7cd75886be40697032ac16cd6?placeholderIfAbsent=true"
                alt="Arrow right"
                className="object-contain shrink-0 w-4 aspect-[1.14]"
              />
            </a>
          </div>
        </div>
        <div className="ml-5 w-[42%] max-md:ml-0 max-md:w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/6b660d79027313e861fa93ebfc29d1f6e8e6e40a?placeholderIfAbsent=true"
            alt="Global presence illustration"
            className="object-contain w-full rounded-md aspect-[1.27] max-md:mt-7 max-md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default GlobalPresenceInfo;
