import React from "react";

const DescriptionSection: React.FC = () => {
  return (
    <section
      className="flex gap-14 items-start px-12 py-12 max-md:flex-col max-md:p-8"
      aria-labelledby="description-heading"
    >
      <p className="flex-1 text-2xl leading-10 text-justify text-teal-800 max-sm:text-xl">
        Managing payroll for contract employees can be complex, time-consuming,
        and full of compliance challenges. At Gulfaar, we simplify the process
        by handling payroll, tax compliance, benefits administration, and
        employee management—allowing you to focus on growing your business while
        we take care of your workforce. With AI-powered automation and real-time
        payment tracking, we ensure that salaries, deductions, and benefits are
        processed seamlessly, on time, every time. Plus, our modern digital
        tools make it easier than ever to track payments, manage employee
        records, and communicate effortlessly
      </p>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e1eb9b4fca6f392d4d4a10f37597b03facabb24"
        className="object-cover h-[510px] w-[530px] max-md:w-full max-md:h-full"
        alt="Payroll management illustration"
      />
    </section>
  );
};

export default DescriptionSection;
