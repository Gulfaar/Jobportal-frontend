import React from "react";

const JobCard = () => {
  return (
    <article className="w-[90%] sm md:w-full mx-auto ">
      <div className="bg-transparent border border-gray-200 shadow-lg rounded-lg px-6 py-5 pl-2 md:p-6 w-full">
        {/* Company Logo */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ca7ad0b376c734ce05060b2fcef8aa61a10817c?placeholderIfAbsent=true&apiKey=928cdaf2e24e4e0f8ced4d57597d6970"
          alt="Company logo"
          className="w-8 h-8 object-contain"
        />
        
        {/* Job Title */}
        <h3 className="mt-3 text-lg font-semibold text-white">
          Software Tester
        </h3>

        {/* Job Details */}
        <div className="flex gap-3 mt-3 text-gray-800">
          <span className="px-3 py-1 bg-red-50 rounded text-sm font-medium">
            Chennai
          </span>
          <span className="px-3 py-1 bg-red-50 rounded text-sm font-medium">
            Intermediate Level
          </span>
        </div>

        {/* Job Description */}
        <p className="mt-3 text-sm text-slate-50">
          As a Software Tester, you will play a critical role in ensuring the
          quality and reliability of our software applications. You will design
          test cases.
        </p>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-4">
          <button className="px-4 py-2 bg-red-400 hover:bg-red-900 text-white rounded text-sm">
            Apply now
          </button>
          <button className="px-4 py-2 border border-white text-white rounded text-sm">
            Learn more
          </button>
        </div>
      </div>
    </article>
  );
};

export default JobCard;
