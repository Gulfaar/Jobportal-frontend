import React from "react";

const JobCard = () => {
  return (
    <article className="w-[33%] max-md:ml-0 max-md:w-full">
      <div className="items-start px-8 py-8 text-7xl rounded border border-gray-200 border-solid shadow bg-transparent mx-auto w-full max-md:px-5 max-md:mt-10">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ca7ad0b376c734ce05060b2fcef8aa61a10817c?placeholderIfAbsent=true&apiKey=928cdaf2e24e4e0f8ced4d57597d6970"
          alt="Company logo"
          className="object-contain aspect-[0.94] w-[30px]"
        />
        <h3 className="mt-5 text-2xl font-medium leading-none text-white">
          Software Tester
        </h3>
        <div className="flex gap-3.5 self-stretch mt-6 leading-none text-gray-800">
          <span className="px-4 py-2 whitespace-nowrap bg-red-50 rounded">
            Chennai
          </span>
          <span className="px-4 py-2 whitespace-nowrap bg-red-50 rounded">
            Intermediate Level
          </span>
        </div>
        <p className="self-stretch mt-2.5 leading-8 text-slate-50 max-md:mr-2.5">
          As a Software Tester, you will play a critical role in ensuring the
          quality and reliability of our software applications. You will design
          test case
        </p>
        <div className="flex gap-5 justify-between mt-5 max-w-full text-sm leading-none text-center w-[229px]">
          <button className="px-4 py-2.5 bg-red-400 rounded text-white">
            Apply now
          </button>
          <button className="px-4 py-2.5 text-white rounded border border-white border-solid">
            Learn more
          </button>
        </div>
      </div>
    </article>
  );
};

export default JobCard;
