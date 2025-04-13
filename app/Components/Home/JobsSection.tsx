"use client";
import React from "react";
import Link from "next/link";
import JobCard from "./JobCard";
import companyimg1 from "../../../public/company1.png";
import companyimg2 from "../../../public/company3.png";
import companyimg3 from "../../../public/company4.png";
import companyimg4 from "../../../public/company5.jpg";

const jobsData = [
  {
    id: "12345",
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/7ca7ad0b376c734ce05060b2fcef8aa61a10817c",
    company: "ABC Corp",
    title: "Software Tester",
    location: "Chennai",
    experience: "Intermediate Level",
    description:
      "Ensure quality and reliability of software applications through well-defined test cases.",
  },
  {
    id: "12346",
    logo: companyimg1,
    company: "Techify",
    title: "Frontend Developer",
    location: "Bangalore",
    experience: "Entry Level",
    description:
      "Build responsive UI using React.js and modern CSS frameworks well-defined test cases.",
  },
  {
    id: "12347",
    logo: companyimg2,
    company: "Innova",
    title: "Backend Engineer",
    location: "Hyderabad",
    experience: "Senior Level",
    description:
      "Develop and maintain backend services using Node.js and Express.",
  },
  {
    id: "12348",
    logo: companyimg3,
    company: "SoftSol",
    title: "DevOps Engineer",
    location: "Pune",
    experience: "Mid Level",
    description:
      "Manage CI/CD pipelines and cloud infrastructure deployments and well-defined test cases.",
  },
  {
    id: "12349",
    logo: companyimg4,
    company: "NextGen",
    title: "Product Manager",
    location: "Mumbai",
    experience: "Senior Level",
    description:
      "Define product roadmap and coordinate between design and engineering teams .",
  },
  {
    id: "12350",
    logo: companyimg4,
    company: "CodeWorks",
    title: "UI/UX Designer",
    location: "Remote",
    experience: "Intermediate Level",
    description:
      "Design user interfaces and experiences for mobile and web appsand well-defined test cases.",
  },
];

const JobsSection = () => {
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
          className="flex justify-end hover:text-yellow-200 items-end text-[12px] md:text-2xl w-full font-noraml text-white"
        >
          View all
        </Link>
      </div>

      {/* Job Cards */}
      <div className="flex mt-14 max-md:mt-10 max-md:max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {jobsData.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex gap-4 self-center mt-10 ml-3 max-w-full text-base text-center text-white w-[142px]">
        <button className="px-4 rounded border-solid bg-white border border-gray-300 h-[40px] min-h-[40px] text-teal-800">
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
