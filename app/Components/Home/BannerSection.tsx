import React from "react";

const BannerSection = () => {
  return (
    <section className="overflow-hidden px-6 py-6 self-center max-w-6xl mx-auto bg-black rounded-2xl">
    <div className="flex items-center max-md:flex-col">
      <div className="w-[45%] max-md:w-full">
        <div className="flex flex-col my-auto">
          <h2 className="text-3xl font-bold text-white max-md:text-2xl">
            Create A Better <br />
            Future For Yourself
          </h2>
          <p className="mt-4 text-sm text-white">
            At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. 
            Blandit a massa elementum id scelerisque rhoncus...
          </p>
          <a
            href="#search-job"
            className=" px-4 py-2 w-fit mt-4 text-sm font-semibold text-white rounded-lg bg-slate-800"
          >
            Search Job
          </a>
        </div>
      </div>
      <div className="w-[55%] max-md:w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a580e1e64e1a44571655e835ff0ea59ed17df212?placeholderIfAbsent=true&apiKey=928cdaf2e24e4e0f8ced4d57597d6970"
          alt="Blurred professionals"
          className="object-cover rounded-2xl w-full"
        />
      </div>
    </div>
  </section>
  );
};

export default BannerSection;
