"use client";
import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { toast } from "react-toastify";

interface Job {
  id: string;
  logo: string | StaticImageData;
  company: string;
  title: string;
  location: string;
  experience: string;
  description: string;
}

const JobCard = ({ job }: { job: Job }) => {
  return (
    <article className="w-[90%] md:w-full mx-auto">
      <div className="bg-transparent border border-gray-200 shadow-lg rounded-lg px-8 py-5 md:p-6 w-full">
        {/* Company Logo */}
        <div className="w-8 h-8">
          {typeof job.logo === "string" ? (
            <img
              src={job.logo}
              alt={`${job.company} logo`}
              className="w-full h-full object-contain"
            />
          ) : (
            <Image
              src={job.logo}
              alt={`${job.company} logo`}
              width={32}
              height={32}
              className="object-contain"
            />
          )}
        </div>

        {/* Job Title */}
        <h3 className="mt-3 text-lg font-semibold text-white">
          {job.title}
        </h3>

        {/* Job Details */}
        <div className="flex gap-3 mt-3 text-gray-800">
          <span className="px-3 py-1 bg-red-50 rounded text-sm font-medium">
            {job.location}
          </span>
          <span className="px-3 py-1 bg-red-50 rounded text-sm font-medium">
            {job.experience}
          </span>
        </div>

        {/* Job Description */}
        <p className="mt-3 text-sm text-slate-50">{job.description}</p>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-4">
         
            <button onClick={() => toast.success("Applied")} className="px-4 py-2 bg-red-400 hover:bg-red-900 text-white rounded text-sm">
              Apply now
           </button>
          
          <Link href={'/jobseeker/joblisting'}>
          <button className="px-4 py-2 border border-white text-white hover:text-amber-200 cursor-pointer rounded text-sm">
            Learn more
          </button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default JobCard;
