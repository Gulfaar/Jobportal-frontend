import React from "react";

const IntroductionSection: React.FC = () => {
  return (
    <section className="flex flex-col gap-10 px-16 py-16 max-md:px-10 max-sm:px-5">
      <p className="flex-1 text-2xl leading-10 text-teal-800 max-md:text-xl max-md:leading-8">
        At Gulfaar, we leverage cutting-edge AI and modern recruitment
        technology to streamline the hiring process. Our advanced AI-powered
        pre-video interviews and automated screening system ensure that you
        receive only the most qualified, pre-vetted candidates for direct
        placement. With minimal effort on your end, our system shortlists,
        evaluates, and ranks candidates, allowing you to focus only on the final
        interviews and hiring decisions. Plus, with our modern communication
        tools, reaching the right candidate has never been easier!
      </p>
      <figure className="flex-1">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/085e0ab6d14ce8ec41706636b27ccf6150e02f3b"
          alt="AI-powered recruitment technology visualization"
          className="w-full h-auto rounded-[12px]"
        />
      </figure>
    </section>
  );
};

export default IntroductionSection;
