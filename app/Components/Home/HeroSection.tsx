"use client";
import React from "react";
import CountrySelector from "./CountrySelector";
import LocationBadge from "./LocationBadge";

const HeroSection = () => {
  return (
    <section className="flex relative flex-col items-center px-10 pb-36 w-full min-h-[709px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/30eb1b8bf4d7d9b2661d8bd57a37d46f3ba378d8?placeholderIfAbsent=true&apiKey=928cdaf2e24e4e0f8ced4d57597d6970"
        alt="Hero background"
        className="object-cover absolute inset-0 size-full"
      />
      <nav className="flex relative flex-wrap gap-5 justify-between items-start self-stretch font-semibold max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f480e8246011371479ef5bc784f974e672ce211?placeholderIfAbsent=true&apiKey=928cdaf2e24e4e0f8ced4d57597d6970"
          alt="Gulfaar logo"
          className="object-contain shrink-0 self-start max-w-full aspect-[2.13] w-[213px]"
        />
        <div className="flex flex-col self-end mt-6 max-md:max-w-full">
          <div className="flex gap-5 self-end max-w-full text-base text-white w-[346px] max-md:mr-1">
            <div className="grow my-auto font-medium">Jobseeker</div>
            <div className="flex gap-5 items-center capitalize whitespace-nowrap">
              <button className="overflow-hidden self-stretch px-6 py-4 my-auto bg-teal-800 rounded-lg w-[117px] max-md:pr-5">
                Employer
              </button>
            </div>
            <button className="overflow-hidden gap-2.5 self-stretch px-5 py-4 text-white bg-teal-800 rounded-lg min-h-10">
              Post Job
            </button>
          </div>
          <div className="flex gap-6 mt-8 text-xl text-white">
            <a href="#jobs" className="text-yellow-400">
              Jobs
            </a>
            <a href="#blog">Blog</a>
            <a href="#training">Training</a>
            <a href="#workforce" className="grow shrink w-[190px]">
              Work-Force Solutions
            </a>
            <a href="#partners" className="grow shrink w-[130px]">
              Partner with us
            </a>
          </div>
        </div>
      </nav>
      <div className="flex relative flex-col items-start mt-14 max-w-full text-center w-[904px] max-md:mt-10">
        <h1 className="text-7xl font-bold leading-none text-white max-md:max-w-full max-md:text-4xl">
          Find Your Dream Job Today!
        </h1>
        <p className="mt-3 text-xl font-medium text-white max-md:max-w-full">
          Connecting Talent with Opportunity: Your Gateway to Career Success
        </p>
      </div>
      <div className="flex relative flex-wrap mt-10 ml-3.5 max-w-full text-base font-medium w-[851px]">
        <div className="flex flex-wrap flex-auto gap-10 py-4 pr-9 pl-20 text-gray-400 bg-white rounded-2xl max-md:px-5 max-md:mr-0 max-md:max-w-full">
          <div className="my-auto">Select for the job</div>
          <div className="flex gap-9 whitespace-nowrap">
            <div className="shrink-0 w-px border border-gray-400 border-solid h-[50px]" />
            <CountrySelector />
          </div>
        </div>
        <div className="text-white">
          <button
            className="px-16 py-9 bg-teal-800 rounded-none max-md:px-5"
            aria-label="Search for jobs"
          >
            Search Job
          </button>
        </div>
      </div>
      <div className="flex relative flex-wrap gap-5 justify-between items-start mt-10 mb-0 ml-3.5 w-full max-w-[1089px] max-md:mb-2.5 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b173a13110d0e84f7b5e40a8c729091e8e5eed2e?placeholderIfAbsent=true&apiKey=928cdaf2e24e4e0f8ced4d57597d6970"
          alt="Left arrow"
          className="object-contain shrink-0 mt-6 aspect-[17/14] fill-white w-[34px]"
        />
        <LocationBadge
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/e163e990a0c4f4d78beff9baa923d544440fd66b?placeholderIfAbsent=true&apiKey=928cdaf2e24e4e0f8ced4d57597d6970"
          location="PARIS"
        />
        <LocationBadge
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/e163e990a0c4f4d78beff9baa923d544440fd66b?placeholderIfAbsent=true&apiKey=928cdaf2e24e4e0f8ced4d57597d6970"
          location="PARIS"
        />
        <LocationBadge
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a6673903b00d10af634e3d5e519941ed514abbce?placeholderIfAbsent=true&apiKey=928cdaf2e24e4e0f8ced4d57597d6970"
          location="UAE"
        />
        <LocationBadge
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/9d7eca2bda6d7420aa92c8ccec4b55887b0126bd?placeholderIfAbsent=true&apiKey=928cdaf2e24e4e0f8ced4d57597d6970"
          location="INDIA"
          iconBg={true}
        />
        <LocationBadge
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/df31277f6fc0914069047dfa16c6db294f126ef8?placeholderIfAbsent=true&apiKey=928cdaf2e24e4e0f8ced4d57597d6970"
          location="AMERICA"
          iconBg={true}
        />
        <LocationBadge
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/0a12a5c6887f269120ef82a3ee2a5a1ef41654e7?placeholderIfAbsent=true&apiKey=928cdaf2e24e4e0f8ced4d57597d6970"
          location="GERMANY"
          iconBg={true}
        />
        <LocationBadge
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/b33655dc9afd80a31397d7ec5b881c1fa25e6547?placeholderIfAbsent=true&apiKey=928cdaf2e24e4e0f8ced4d57597d6970"
          location="AMERICA"
          iconBg={true}
        />
        <LocationBadge
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/b33655dc9afd80a31397d7ec5b881c1fa25e6547?placeholderIfAbsent=true&apiKey=928cdaf2e24e4e0f8ced4d57597d6970"
          location="AMERICA"
          iconBg={true}
        />
        <LocationBadge
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/9d9071e097f5fb1629972471fb50474a64683de2?placeholderIfAbsent=true&apiKey=928cdaf2e24e4e0f8ced4d57597d6970"
          location="INDIA"
          iconBg={true}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/677cdf396a83e862af9c19b48796623e42ce7a81?placeholderIfAbsent=true&apiKey=928cdaf2e24e4e0f8ced4d57597d6970"
          alt="Right arrow"
          className="object-contain shrink-0 mt-4 aspect-[17/14] fill-white w-[34px]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
