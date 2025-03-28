"use client";
import React from "react";
import JobCard from "./JobCard";
import Link from "next/link";

const JobsSection = () => {
  return (
    <section className="flex flex-col px-5 md:px-18 bg-[#2E5F5C] pt-16 pb-9 mt-16    w-full h-full  max-md:max-w-full">
      <h2 className="self-start text-5xl font-semibold text-center text-white max-md:text-4xl">
        Recent Jobs
      </h2>
      <div className="flex justify-between items-start w-full px-1   mt-9 font-normal text-[12px]   md:text-2xl  max-md:max-w-full">
        <p className="text-white md:inline-flex  md:whitespace-nowrap max-md:max-w-full">
          Explore the latest job opportunities across various industries
        </p>
        <Link  href="/jobseeker/joblisting" className="flex justify-end items-end text-[12px] md:text-2xl w-full font-noraml text-white">
          View all
        </Link>
      </div>

      <div className="flex mt-14 max-md:mt-10 max-md:max-w-full">
      {/* Use Grid Layout for 3 Columns */}
      <div className="  grid grid-cols-1 md:grid-cols-2  gap-5">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <JobCard key={index} />
        ))}
      </div>
    </div>

      

      <div className="flex gap-4 self-center mt-10 ml-3 max-w-full text-base text-center text-white w-[152px]">
        <button className=" px-4 rounded border-solid bg-white border border-gray-300 h-[40px] min-h-[40px] text-teal-800">
          1
        </button>
        <button className="self-stretch py-2 px-4 whitespace-nowrap rounded border border-white border-solid min-h-10">
          2
        </button>
        <button className="self-stretch py-2 px-4 whitespace-nowrap rounded border border-white border-solid min-h-10">
          3
        </button>
      </div>
    </section>
  );
};

export default JobsSection;
