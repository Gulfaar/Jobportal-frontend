"use client";
import * as React from "react";

const HeroSection = () => {
  return (
    <section
      className="flex relative flex-col pt-4 w-full min-h-[780px] max-md:max-w-full"
      aria-label="Hero section"
    >
      <img
        src="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/71f228ab061e8f7c8a16e4c50d1be12c5ac6f6fc?placeholderIfAbsent=true"
        alt="Background image"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col px-10 w-full font-semibold text-white max-md:px-5 max-md:max-w-full">
        <header className="flex flex-wrap gap-5 justify-between w-full text-base max-md:mr-1.5 max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/ba29a153e3c9b6933fa575fe6b348e94a5e5f190?placeholderIfAbsent=true"
            alt="Gulfaar logo"
            className="object-contain shrink-0 max-w-full aspect-[2.13] w-[213px]"
          />
          <div className="flex gap-5 my-auto">
            <a href="#" className="grow my-auto font-medium">
              Jobseeker
            </a>
            <div className="flex gap-5 items-center capitalize whitespace-nowrap">
              <a
                href="#"
                className="overflow-hidden self-stretch px-6 py-4 my-auto bg-teal-800 rounded-lg w-[117px] max-md:pr-5"
              >
                Employer
              </a>
            </div>
            <a
              href="#"
              className="overflow-hidden gap-2.5 self-stretch px-5 py-4 text-white bg-teal-800 rounded-lg min-h-10"
            >
              Post Job
            </a>
          </div>
        </header>
        <nav
          className="flex flex-wrap gap-5 self-end text-xl text-white"
          aria-label="Main navigation"
        >
          <a href="#" className="text-yellow-400">
            Jobs
          </a>
          <a href="#">Blog</a>
          <a href="#">Training</a>
          <a href="#" className="basis-auto">
            Work-Force Solutions
          </a>
          <a href="#" className="basis-auto">
            Partner with us
          </a>
        </nav>
        <h1 className="self-center mt-16 text-6xl max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          EXAM PREPRATIONS
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
