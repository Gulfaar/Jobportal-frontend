import React from "react";

const CTASection: React.FC = () => {
  return (
    <section className="relative h-[502px]" aria-labelledby="cta-heading">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f20c84bd79e966794b0936ef43a0719a7ab6c110"
        className="object-cover opacity-50 size-full"
        alt="CTA background"
      />
      <div className="absolute top-0 left-0 bg-yellow-400 bg-opacity-50 size-full" />
      <div className="absolute top-2/4 left-2/4 text-center -translate-x-2/4 -translate-y-2/4 max-w-[1231px] w-[90%] max-md:w-[95%]">
        <h2
          id="cta-heading"
          className="mb-5 text-5xl font-semibold text-black max-sm:text-4xl"
        >
          Simplify Payroll, Empower Your Business!
        </h2>
        <p className="mb-8 text-xl text-black">
          <span>
            Let us handle payroll, so you can focus on what matters most –
          </span>
          <a href="#" className="font-semibold text-teal-800 underline">
            Contact us today!
          </a>
        </p>
        <p className="text-xl leading-10 text-black">
          With Gulfaar's AI-powered payroll management, you get error-free,
          compliant, and hassle-free salary processing—all while ensuring your
          employees stay satisfied and your business stays compliant.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
