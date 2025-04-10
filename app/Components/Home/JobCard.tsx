// components/JobCard.tsx
"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Job } from "../types/job";
import Image from "next/image";

const JobCard = ({ job }: { job: Job }) => {
  const router = useRouter();

  const applyNow = () => {
    console.log("Apply now clicked for job:", job._id); // Debug the ID
    router.push(`/jobseeker/jobdetails/${job._id}`); // Ensure _id is used
  };

  const logoUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}${job.company?.logo || ""}`;
  return (
    <article className="w-[90%] md:w-full mx-auto">
      <div className="bg-transparent border border-gray-200 shadow-lg rounded-lg px-8 py-5 md:p-6 w-full">
        <Image
          src={logoUrl}
          alt="Company logo"
          width={50}
          height={50}
          className="object-contain"
        />

        <h3 className="mt-3 text-lg font-semibold text-white">
          {job.title}
        </h3>

        <div className="flex gap-3 mt-3 text-gray-800">
          <span className="px-3 py-1 bg-red-50 rounded text-sm font-medium">
            {job.location?.city || "Unknown Location"}
          </span>
          <span className="px-3 py-1 bg-red-50 rounded text-sm font-medium">
            {job.proficiencyLevel || "Experience not specified"}
          </span>
        </div>

        <p className="mt-3 text-sm text-slate-50 line-clamp-3">
          {job.description}
        </p>

        <div className="flex gap-4 mt-4">
          <button
            onClick={applyNow}
            className="px-4 py-2 bg-red-400 hover:bg-red-900 text-white rounded text-sm"
          >
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