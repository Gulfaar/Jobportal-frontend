"use client";

import Header from "@/app/Components/Header/Header";
import Footer from "@/app/Components/Home/Footer";
import Image from "next/image";
import React, { useState, useMemo } from "react";
import { toast } from "react-toastify";
import { useSearchParams } from "next/navigation";

const jobs = [
  {
    id: "1",
    logo: "/google.png",
    title: "Software Tester",
    location: "Chennai",
    experience: "Intermediate Level",
    description:
      "As a Software Tester, you will ensure the quality and reliability of our applications.",
  },
  {
    id: "2",
    logo: "/google.png",
    title: "Frontend Developer",
    location: "Bangalore",
    experience: "Entry Level",
    description: "Build engaging UIs using React and modern frameworks.",
  },
  {
    id: "3",
    logo: "/google.png",
    title: "Backend Developer",
    location: "Hyderabad",
    experience: "Senior Level",
    description: "Design and build scalable backend services using Node.js.",
  },
  {
    id: "4",
    logo: "/google.png",
    title: "UI/UX Designer",
    location: "Mumbai",
    experience: "Mid Level",
    description: "Create intuitive and visually appealing user interfaces.",
  },
  {
    id: "5",
    logo: "/google.png",
    title: "Product Manager",
    location: "Remote",
    experience: "Senior Level",
    description:
      "Lead the product roadmap and collaborate with cross-functional teams.",
  },
  {
    id: "6",
    logo: "/google.png",
    title: "DevOps Engineer",
    location: "Pune",
    experience: "Mid Level",
    description: "Maintain CI/CD pipelines and automate infrastructure.",
  },
  {
    id: "7",
    logo: "/google.png",
    title: "Data Analyst",
    location: "Delhi",
    experience: "Entry Level",
    description:
      "Analyze and interpret complex datasets for business decisions.",
  },
  {
    id: "8",
    logo: "/google.png",
    title: "Cybersecurity Analyst",
    location: "Noida",
    experience: "Intermediate Level",
    description:
      "Protect organizational data and infrastructure from threats.",
  },
  {
    id: "9",
    logo: "/google.png",
    title: "Mobile App Developer",
    location: "Kolkata",
    experience: "Mid Level",
    description:
      "Develop responsive mobile applications using Flutter or React Native.",
  },
];

const Joblisting = () => {
  const [salary, setSalary] = useState<[number, number]>([5000, 99999]);
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search")?.toLowerCase().trim() || "";

  const filteredJobs = useMemo(() => {
    if (!searchQuery) return jobs;
    return jobs.filter((job) =>
      job.title.toLowerCase().includes(searchQuery) ||
      job.location.toLowerCase().includes(searchQuery) ||
      job.experience.toLowerCase().includes(searchQuery) ||
      job.description.toLowerCase().includes(searchQuery)
    );
  }, [searchQuery]);

  return (
    <main>
      <Header title="Jobs" subtitle="Explore a wide range of job opportunities available" />

      <div className="container  mx-auto px-4 py-8">
        <div className="flex flex-col  md:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-1/6 space-y-6 hidden md:block bg-[#EBF5F4] p-6 rounded-lg text-black">
            <div>
              <h3 className="font-medium mb-2">Search by Job Title</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Job title or company"
                  className="w-full p-2 border rounded-md pl-8 text-black"
                />
                <svg
                  className="absolute left-2 top-3 w-4 h-4 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
            

            <div>
              <h3 className="font-medium mb-2">Location</h3>
              <select className="w-full p-2 border rounded-md mb-2 text-gray-700">
                <option>Choose country</option>
                <option>India</option>
                <option>UAE</option>
              </select>
              <select className="w-full p-2 border rounded-md text-gray-700">
                <option>Choose city</option>
                <option>Chennai</option>
                <option>Mumbai</option>
              </select>
            </div>

            {/* More Filters */}
            {[
              {
                label: "Category",
                options: ["IT & Technology", "Financial Services", "Telecommunications", "Marketing", "Education"],
              },
              {
                label: "Job Type",
                options: ["Full Time", "Part Time", "Contract", "Freelance"],
              },
              {
                label: "Experience Level",
                options: ["No experience", "Entry level", "Mid level", "Senior level"],
              },
              {
                label: "Date Posted",
                options: ["All", "Last Hour", "Last 24 Hours", "Last 7 Days", "Last 30 Days"],
              },
            ].map(({ label, options }) => (
              <div key={label}>
                <h3 className="font-medium mb-2">{label}</h3>
                <div className="space-y-2">
                  {options.map((option) => (
                    <label key={option} className="flex items-center gap-2 text-black">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}

            {/* Salary Slider */}
            <div>
              <h3 className="font-medium mb-2">Salary</h3>
              <input
                type="range"
                min="5000"
                max="100000"
                className="w-full"
                value={salary[0]}
                onChange={(e) => setSalary([parseInt(e.target.value), salary[1]])}
              />
            </div>

            <button className="w-full bg-[#2E5F5C] text-white py-2 rounded-md hover:bg-[#234847]">
              Show More
            </button>
          </div>


          {/* Job Cards */}
          <div className="w-full md:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Showing {filteredJobs.length} of {jobs.length} results
              </p>
              <select className="p-2 border-black text-black border rounded-md">
                <option>Sort by latest</option>
                <option>Sort by oldest</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <div
                    key={job.id}
                    className="bg-white rounded-lg shadow-md p-8 border relative md:w-full"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <Image src={job.logo} alt={job.title} width={24} height={24} />
                      <h3 className="font-semibold text-black">{job.title}</h3>
                    </div>
                    <div className="mb-3">
                      <span className="text-gray-600 text-sm">{job.location}</span>
                      <span className="mx-2 text-gray-400">•</span>
                      <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">
                        {job.experience}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{job.description}</p>
                    <div className="flex gap-3 md:mt-20">
                      <button
                        onClick={() => toast.success("Applied")}
                        className="flex-1 bg-[#2E5F5C] text-white px-3 py-1.5 rounded text-sm border border-[#2E5F5C] hover:bg-[#2b2d2d]"
                      >
                        Apply now
                      </button>
                      <button className="flex-1 text-[#2E5F5C] px-3 py-1.5 rounded text-sm border border-[#2E5F5C] hover:bg-[#2E5F5C] hover:text-white">
                        Learn more
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center col-span-full text-gray-500">
                  No jobs found matching "{searchQuery}"
                </p>
              )}
            </div>

            {/* Pagination (optional static) */}
            <div className="flex justify-center mt-8 gap-2">
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  className={`w-8 h-8 rounded ${
                    page === 1 ? "bg-[#2E5F5C] text-white" : "border text-gray-600"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Joblisting;