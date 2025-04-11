import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BsBriefcase, BsCash, BsClock, BsGeoAlt } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";

import JobOverview from "@/app/Components/jobdetails/JobOverview";
import RelatedJobs from "@/app/Components/jobdetails/RelatedJobs";
import SendMessage from "@/app/Components/jobdetails/SendMessage";
import Header from "@/app/Components/Header/Header";
import Footer from "@/app/Components/Home/Footer";
import { Job } from "@/app/Components/types/job";

// Server-side data fetching function
async function fetchJob(uuid: string): Promise<Job> {
  if (!uuid || typeof uuid !== "string") {
    console.error(`Invalid UUID format: ${uuid}`);
    throw new Error("Invalid job ID");
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/job/jobs/${uuid}`, {
    cache: "no-store",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    console.error(`Failed to fetch job with uuid ${uuid}: ${res.status} ${res.statusText}`);
    throw new Error("Failed to fetch job");
  }

  const response = await res.json();
  if (!response.success || !response.data) {
    throw new Error("Job not found");
  }

  return response.data;
}

export default async function JobDetailsPage({ params }: { params: { uuid: string } }) {
  let job: Job;
  try {
    job = await fetchJob(params.uuid);
  } catch (error) {
    console.error("Error in JobDetailsPage:", error);
    notFound();
    return null;
  }

  const logoUrl = job.company?.logo
    ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${job.company.logo}`
    : "/default-logo.png";

  return (
    <>
      <Header title="JOB DETAILS" subtitle="Explore a wide range of job opportunities available" />
      <div className="bg-gray-50 px-4 md:px-8 py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            {/* LEFT COLUMN */}
            <div className="w-full md:w-2/3 flex flex-col gap-6">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <div className="mb-4">
                  <span className="text-sm text-gray-500 bg-green-50 border border-green-300 rounded px-2 py-1">
                    Posted{" "}
                    {Math.floor((Date.now() - new Date(job.postDate).getTime()) / (1000 * 60 * 60 * 24))}{" "}
                    days ago
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-4 items-center">
                    <Image
                      src={logoUrl}
                      alt={`${job.company?.name || "Company"} logo`}
                      width={48}
                      height={48}
                      className="rounded-full object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/default-logo.png";
                      }}
                    />
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-800">{job.title}</h3>
                      <p className="text-sm text-gray-600">{job.company?.name || "Unknown"}</p>
                    </div>
                  </div>

                  <button className="block md:hidden bg-teal-600 text-white px-4 py-2 rounded-md text-sm hover:bg-teal-700 transition-colors">
                    Apply
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mt-4 md:flex md:gap-6">
                  <div className="flex items-center gap-2">
                    <BsBriefcase className="text-teal-600 w-5 h-5" />
                    <span>{job.category || "N/A"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BsClock className="text-teal-600 w-5 h-5" />
                    <span>{job.type || "N/A"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BsCash className="text-teal-600 w-5 h-5" />
                    <span>
                      ${job.salaryRange?.min?.toLocaleString() || "N/A"} - $
                      {job.salaryRange?.max?.toLocaleString() || "N/A"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BsGeoAlt className="text-teal-600 w-5 h-5" />
                    <span>
                      {job.location?.city || "Unknown"}, {job.location?.country || "Unknown"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Job Description</h2>
                <p className="text-sm text-gray-700 leading-relaxed">{job.description || "No description available."}</p>

                <h3 className="text-lg font-medium text-gray-800 mt-6 mb-4">Key Responsibilities</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  {job.keyResponsibilities?.length ? (
                    job.keyResponsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Image
                          src="/tick.png"
                          alt="tick"
                          height={16}
                          width={16}
                          className="mt-1 flex-shrink-0"
                        />
                        <span>{responsibility}</span>
                      </li>
                    ))
                  ) : (
                    <li>No responsibilities listed.</li>
                  )}
                </ul>

                <h3 className="text-lg font-medium text-gray-800 mt-6 mb-4">Professional Skills</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  {job.professionalSkills?.length ? (
                    job.professionalSkills.map((skill, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Image
                          src="/tick.png"
                          alt="tick"
                          height={16}
                          width={16}
                          className="mt-1 flex-shrink-0"
                        />
                        <span>{skill}</span>
                      </li>
                    ))
                  ) : (
                    <li>No skills listed.</li>
                  )}
                </ul>
              </div>

              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {job.tags?.length ? (
                    job.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-teal-100 text-teal-600 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))
                  ) : (
                    <span className="text-sm text-gray-600">No tags available.</span>
                  )}
                </div>
              </div>

              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Share this Job</h3>
                <div className="flex items-center gap-4">
                  <Link
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                      window.location.href
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-800"
                  >
                    <FaLinkedin className="text-2xl" />
                  </Link>
                </div>
              </div>

              <div className="p-4">
                <RelatedJobs />
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="hidden md:flex md:w-1/3 flex-col gap-6">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <button className="w-full bg-teal-600 text-white py-3 px-6 rounded-md font-medium hover:bg-teal-700 transition-colors mb-4">
                  Apply Job
                </button>
                <JobOverview />
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <SendMessage />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}