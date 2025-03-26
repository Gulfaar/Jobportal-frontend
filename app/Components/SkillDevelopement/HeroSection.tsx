"use client";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <header className="flex relative flex-col items-center px-10 pb-16 w-full font-semibold min-h-[381px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/5f425889a6d47f1d2898ce9b2ea84975c7191e94?placeholderIfAbsent=true"
        className="object-cover absolute inset-0 size-full"
        alt="Hero background"
        aria-hidden="true"
      />
      <nav className="flex relative flex-wrap gap-5 justify-between items-start self-stretch w-full max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/ba29a153e3c9b6933fa575fe6b348e94a5e5f190?placeholderIfAbsent=true"
          className="object-contain shrink-0 self-start max-w-full aspect-[2.13] w-[213px]"
          alt="Gulfaar logo"
        />
        <div className="flex flex-wrap gap-6 items-end self-end mt-6">
          <a href="#jobs" className="mt-16 text-xl text-white max-md:mt-10">
            Jobs
          </a>
          <a href="#blog" className="mt-16 text-xl text-white max-md:mt-10">
            Blog
          </a>
          <div className="flex flex-col self-stretch max-md:max-w-full">
            <div className="flex gap-5 self-end max-w-full text-base text-white w-[346px] max-md:mr-2">
              <div className="grow my-auto font-medium">Jobseeker</div>
              <div className="flex gap-5 items-center capitalize whitespace-nowrap">
                <button
                  className="overflow-hidden self-stretch px-6 py-4 my-auto bg-teal-800 rounded-lg w-[117px] max-md:pr-5"
                  aria-label="Employer"
                >
                  Employer
                </button>
              </div>
              <button
                className="overflow-hidden gap-2.5 self-stretch px-5 py-4 text-white bg-teal-800 rounded-lg min-h-10"
                aria-label="Post Job"
              >
                Post Job
              </button>
            </div>
            <div className="flex flex-wrap gap-8 mt-8 text-xl text-white">
              <a href="#training">Training</a>
              <a href="#workforce-solutions" className="grow shrink w-[183px]">
                Work-Force Solutions
              </a>
              <a href="#partner" className="grow shrink w-[123px]">
                Partner with us
              </a>
            </div>
          </div>
        </div>
      </nav>
      <h1 className="relative mt-20 text-6xl text-center text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        SKILL DEVELOPMENT
      </h1>
      <p className="relative mt-12 text-2xl text-center text-white max-md:mt-10 max-md:max-w-full">
        Explore a wide range of job opportunities available
      </p>
    </header>
  );
};

export default HeroSection;
