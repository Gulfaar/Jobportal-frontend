"use client";
import React from "react";
import NavLinks from "./NavLinks";

const HeroSection: React.FC = () => {
  return (
    <header className="overflow-hidden relative h-[381px] max-sm:h-[300px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/985d885ed1a3ae0700d76d874280476c607e5fe4"
        className="object-cover size-full"
        alt="Hero background"
      />
      <div className="flex absolute top-0 left-0 flex-col items-center p-5 size-full max-md:p-4">
        <div className="mt-32 text-center">
          <h2 className="mb-2.5 text-2xl text-white max-sm:text-xl">
            Your Team, Managed by Us
          </h2>
          <h1 className="text-6xl font-semibold text-white max-md:text-5xl max-sm:text-4xl">
            Payroll Management
          </h1>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/73edb88de470a5326bb74a32e4439fd997278425"
          className="absolute left-10 h-[100px] top-[17px] w-[213px] max-sm:h-[70px] max-sm:w-[150px]"
          alt="Gulfaar logo"
        />
        <div className="flex absolute gap-5 items-center right-[45px] top-[42px] max-md:top-5 max-md:right-5 max-sm:flex-col max-sm:gap-2.5">
          <button className="text-base text-white" aria-label="Jobseeker">
            Jobseeker
          </button>
          <button
            className="px-5 py-3.5 h-10 text-base font-semibold text-white bg-teal-800 rounded-lg cursor-pointer max-sm:w-full"
            aria-label="Employer"
          >
            Employer
          </button>
          <button
            className="px-5 py-3.5 h-10 text-base font-semibold text-white bg-teal-800 rounded-lg cursor-pointer max-sm:w-full"
            aria-label="Post Job"
          >
            Post Job
          </button>
        </div>
        <NavLinks />
      </div>
    </header>
  );
};

export default HeroSection;
