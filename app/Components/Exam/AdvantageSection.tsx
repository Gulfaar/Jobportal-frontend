import * as React from "react";

const AdvantageSection = () => {
  return (
    <section
      className="relative px-20 py-12 w-full bg-yellow-400 bg-opacity-50 max-md:px-5 max-md:mt-10 max-md:max-w-full"
      aria-label="The Gulfaar Advantage section"
    >
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-6/12 max-md:ml-0 max-md:w-full">
          <div className="relative self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <h2 className="mr-11 ml-12 text-5xl font-semibold text-teal-800 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
              The Gulfaar Advantage
            </h2>
            <p className="mt-12 text-2xl text-center text-black max-md:mt-10 max-md:max-w-full">
              Our unique approach combines expert guidance with AI technology to
              deliver personalized exam preparation.
            </p>
          </div>
        </div>
        <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/2d8efeb1b90ac731411632ed47167a08a6988e1b?placeholderIfAbsent=true"
            alt="Students preparing for exams with AI assistance"
            className="object-contain grow w-full rounded-xl aspect-[1.69] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;
