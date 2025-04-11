"use client";
import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
import Link from "next/link";
import { getAllJobs } from "../Services/jobService";
import { Job } from "../types/job";

const JobsSection = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await getAllJobs(currentPage, jobsPerPage);
        console.log("Fetched jobs response:", response);
        if (response.success) {
          setJobs(response.data);
          setTotalPages(Math.ceil(response.total / jobsPerPage));
        } else {
          console.error("Failed to fetch jobs:", response.message);
          setJobs([]);
        }
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
        setJobs([]);
      }
    };

    fetchJobs();
  }, [currentPage]);

  // Pagination logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="flex flex-col px-5 md:px-18 bg-[#2E5F5C] pt-16 pb-9 mt-16 w-full h-full max-md:max-w-full">
      <h2 className="self-start text-5xl font-semibold text-center text-white max-md:text-4xl">
        Recent Jobs
      </h2>
      <div className="flex justify-between items-start w-full px-1 mt-9 font-normal text-[12px] md:text-2xl max-md:max-w-full">
        <p className="text-white md:inline-flex md:whitespace-nowrap max-md:max-w-full">
          Explore the latest job opportunities across various industries
        </p>
        <Link
          href="/jobseeker/joblisting"
          className="flex justify-end items-end text-[12px] md:text-2xl w-full font-normal text-white"
        >
          View all
        </Link>
      </div>

      <div className="mt-14 max-md:mt-10 max-md:max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {Array.isArray(currentJobs) && currentJobs.length > 0 ? (
            currentJobs.map((job) => <JobCard key={job._id} job={job} />)
          ) : (
            <p className="text-white">No jobs found.</p>
          )}
        </div>
      </div>

      <div className="flex gap-4 self-center mt-10 ml-3 max-w-full text-base text-center text-black w-[142px]">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-4 rounded border-solid bg-white border border-gray-300 h-[40px] min-h-[40px] ${
              page === currentPage ? "text-teal-800" : "text-black"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </section>
  );
};

export default JobsSection;