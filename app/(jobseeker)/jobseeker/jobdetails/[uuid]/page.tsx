// app/jobseeker/jobdetails/[uuid]/page.tsx
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BsBriefcase, BsCash, BsClock, BsGeoAlt } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

import JobOverview from "@/app/Components/jobdetails/JobOverview";
import RelatedJobs from "@/app/Components/jobdetails/RelatedJobs";
import SendMessage from "@/app/Components/jobdetails/SendMessage";
import Header from "@/app/Components/Header/Header";
import Footer from "@/app/Components/Home/Footer";
import DynamicImage from "../DynamicImage";
import { Job } from "../../../../Components/types/job";
import Image from "next/image";

// Ensures fresh server-side data
export const dynamic = "force-dynamic";

// Server-side data fetching function
async function fetchJob(uuid: string): Promise<Job> {
  if (!uuid || typeof uuid !== "string" || uuid.includes(".png")) {
    console.error(`Invalid UUID format: ${uuid}`);
    throw new Error("Invalid job ID");
  }

  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  try {
    const res = await fetch(`${baseUrl}/job/jobs/${uuid}`, {
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch job with uuid ${uuid}: ${res.status}`);
    }

    const data = await res.json();

    if (!data || !data.job) {
      throw new Error("Job not found in response");
    }

    return data.job;
  } catch (err) {
    console.error("Error fetching job:", err);
    throw err;
  }
}

export default async function JobDetailsPage({ params }: { params: { uuid: string } }) {
  const uuid = params.uuid;
  let job: Job;

  try {
    job = await fetchJob(uuid);
  } catch (error) {
    notFound();
  }

  const logoUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}${job.company.logo}`;

  return (
    <>
      <Header title="JOB DETAILS" subtitle="Explore a wide range of job opportunities available" />
      <div className="bg-gray-50 px-3 md:px-15 py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-2 md:px-4">
          <div className="flex flex-col md:flex-row gap-6 mb-6 md:mb-8">
            {/* LEFT COLUMN */}
            <div className="w-full md:w-2/3 flex flex-col gap-6">
              <div className="p-2 md:p-4">
                <div className="mb-2">
                  <span className="text-xs md:text-sm text-gray-500 bg-green-50 border border-green-300 rounded p-1">
                    {Math.floor((Date.now() - new Date(job.postDate).getTime()) / (1000 * 60))} min ago
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-4 items-center">
                    <DynamicImage
                      src={logoUrl}
                      alt={`${job.company.name} logo`}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-sm md:text-lg font-semibold text-gray-800">
                        {job.title}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600">
                        {job.company.name}
                      </p>
                    </div>
                  </div>

                  <button className="block md:hidden bg-teal-600 text-white px-4 py-2 rounded-md text-sm hover:bg-teal-700 transition-colors">
                    Apply
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mt-4 md:flex md:flex-nowrap md:items-center md:gap-6">
                  <div className="flex items-center gap-1">
                    <BsBriefcase className="text-teal-600 w-4 h-4 flex-shrink-0" />
                    <span>{job.category}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BsClock className="text-teal-600 w-4 h-4 flex-shrink-0" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BsCash className="text-teal-600 w-4 h-4 flex-shrink-0" />
                    <span>${job.salaryRange.min} - ${job.salaryRange.max}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BsGeoAlt className="text-teal-600 w-4 h-4 flex-shrink-0" />
                    <span>{`${job.location.city}, ${job.location.country}`}</span>
                  </div>
                </div>
              </div>

              <div className="p-2 md:p-4 mx-4 md:mx-0">
                <h2 className="text-sm md:text-xl font-semibold text-gray-800 mb-4">
                  Job Description
                </h2>
                <p className="text-xs md:text-sm lg:text-base text-gray-700 leading-relaxed mb-4">
                  {job.description}
                </p>

                <h3 className="text-sm md:text-xl font-medium text-gray-800 mt-6 mb-4">
                  Key Responsibilities
                </h3>
                <ul className="space-y-4 text-xs md:text-sm lg:text-base text-gray-700">
                  {job.keyResponsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Image
                        src="/tick.png"
                        alt="tick"
                        height={16}
                        width={16}
                        className="mt-1"
                        priority
                      />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-2 md:p-4">
                <h3 className="text-sm md:text-lg font-medium text-gray-800 mb-2">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-teal-100 text-teal-600 px-3 py-1 rounded-full text-xs md:text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-2 md:p-4">
                <h3 className="text-sm md:text-lg font-medium text-gray-800 mb-2">
                  Share this Job
                </h3>
                <div className="flex items-center gap-4">
                  <Link
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-800"
                  >
                    <FaLinkedin className="text-xl md:text-2xl" />
                  </Link>
                </div>
              </div>

              <div className="p-2 md:p-4">
                <RelatedJobs />
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="hidden md:flex md:w-1/3 flex-col gap-6">
              <div className="p-2 h-fit">
                <button className="w-full bg-teal-600 text-white py-3 px-6 rounded-md font-medium hover:bg-teal-700 transition-colors mb-4 mt-12">
                  Apply Job
                </button>
                <JobOverview />
              </div>
              <div className="p-2 md:p-4 h-fit">
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
