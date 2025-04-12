"use client"
// pages/job-details.tsx

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsBriefcase, BsCash, BsClock, BsGeoAlt } from "react-icons/bs";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

import JobOverview from "@/app/Components/jobdetails/JobOverview";
import RelatedJobs from "@/app/Components/jobdetails/RelatedJobs";
import SendMessage from "@/app/Components/jobdetails/SendMessage";
import Header from "@/app/Components/Header/Header";
import Footer from "@/app/Components/Home/Footer";
import { toast } from "react-toastify";

const JobDetailsPage: React.FC = () => {
  return (

    <main>
    <Header title="Job details" subtitle="Explore more for jobs"/>
    <div className="bg-gray-50 py-6 md:py-8">
      
      <div className="max-w-7xl mx-auto px-2 md:px-4">
        {/* Main Layout */}
        <div className="flex flex-col md:flex-row gap-6 mb-6 md:mb-8">
          {/* LEFT COLUMN */}
          <div className="w-full md:w-2/3 flex flex-col gap-6">
            {/* SECTION 1: Time Posted, Title/Company + Mobile Apply, Icons */}
            <div className="p-2 md:p-4">
              {/* Posted Time */}
              <div className="mb-2">
                <span className="text-xs md:text-sm text-gray-500 bg-green-50 border border-green-300 rounded p-1">
                  26 min ago
                </span>
              </div>

              {/* Row 1: Logo + Title/Company + (Mobile-only) Apply Button */}
              <div className="flex items-center justify-between">
                {/* Logo + Title/Company */}
                <div className="flex gap-4 items-center">
                  <Image
                    src="/samplecompanylogo.jpg"
                    alt="samplecompanylogo"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-sm md:text-lg font-semibold text-gray-800">
                      Corporate Tactics Facilitator
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600">
                      Cormier, Turner and Flatley Inc
                    </p>
                  </div>
                </div>

                {/* Mobile-only Apply Button */}
                <button onClick={() => toast.success("Applied")} className="block md:hidden bg-teal-600 text-white px-4 py-2 rounded-md text-sm hover:bg-teal-700 transition-colors">
                  Apply
                </button>
              </div>

              {/* Row 2: Icons (2 cols on mobile, single row on desktop) */}
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mt-4 md:flex md:flex-nowrap md:items-center md:gap-6">
                <div className="flex items-center gap-1">
                  <BsBriefcase className="text-teal-600 w-4 h-4 flex-shrink-0" />
                  <span>Commerce</span>
                </div>
                <div className="flex items-center gap-1">
                  <BsClock className="text-teal-600 w-4 h-4 flex-shrink-0" />
                  <span>Full Time</span>
                </div>
                <div className="flex items-center gap-1">
                  <BsCash className="text-teal-600 w-4 h-4 flex-shrink-0" />
                  <span>$30000 - $40000</span>
                </div>
                <div className="flex items-center gap-1">
                  <BsGeoAlt className="text-teal-600 w-4 h-4 flex-shrink-0" />
                  <span>New York, USA</span>
                </div>
              </div>
            </div>

            {/* SECTION 2: Job Description & Key Responsibilities */}
            <div className="p-2 md:p-4 mx-4 md:mx-0">
              <h2 className="text-sm md:text-xl font-semibold text-gray-800 mb-4">
                Job Description
              </h2>
              <p className="text-xs md:text-sm lg:text-base text-gray-700 leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                feugiat justo sem, at blandit magna rutrum et. Nullam non
                fringilla mauris, vel aliquam velit. Cras dignissim sagittis
                nisl, in bibendum mauris convallis et.
              </p>
              <p className="text-xs md:text-sm lg:text-base text-gray-700 leading-relaxed mb-4">
                Phasellus venenatis turpis in nunc tincidunt, at suscipit orci
                molestie. Aliquam erat volutpat. Integer dapibus id diam eu
                dapibus. Aliquam placerat, velit quis ultricies tristique, elit
                turpis luctus urna, at mollis ante risus ac mauris.
              </p>

              <h3 className="text-sm md:text-xl font-medium text-gray-800 mt-6 mb-4">
                Key Responsibilities
              </h3>
              <ul className="space-y-4 text-xs md:text-sm lg:text-base text-gray-700">
                <li className="flex items-start gap-3">
                  <Image
                    src="/tick.png"
                    alt="tick"
                    height={16}
                    width={16}
                    className="mt-1"
                  />
                  <span>
                    Manage corporate client relationships and solutions with
                    effective communication and strategic planning.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Image
                    src="/tick.png"
                    alt="tick"
                    height={16}
                    width={16}
                    className="mt-1"
                  />
                  <span>
                    Coordinate with internal teams for project execution and
                    ensure timely delivery of milestones.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Image
                    src="/tick.png"
                    alt="tick"
                    height={16}
                    width={16}
                    className="mt-1"
                  />
                  <span>
                    Prepare and deliver presentations to stakeholders with
                    analysis and actionable insights.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Image
                    src="/tick.png"
                    alt="tick"
                    height={16}
                    width={16}
                    className="mt-1"
                  />
                  <span>
                    Conduct market research to identify growth opportunities.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 3: Tags */}
            <div className="p-2 md:p-4">
              <h3 className="text-sm md:text-lg font-medium text-gray-800 mb-2">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="inline-block bg-teal-100 text-teal-600 px-3 py-1 rounded-full text-xs md:text-sm">
                  Remote
                </span>
                <span className="inline-block bg-teal-100 text-teal-600 px-3 py-1 rounded-full text-xs md:text-sm">
                  Management
                </span>
                <span className="inline-block bg-teal-100 text-teal-600 px-3 py-1 rounded-full text-xs md:text-sm">
                  Leadership
                </span>
              </div>
            </div>

            {/* SECTION 4: Share this Job */}
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

            {/* SECTION 5: Related Jobs */}
            <div className="p-2 md:p-4">
              <RelatedJobs />
            </div>
          </div>

          {/* RIGHT COLUMN (desktop-only) */}
          <div className="hidden md:flex md:w-1/3 flex-col gap-6">
            <div className="p-2 h-fit">
              {/* Desktop Apply Button */}
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
    <Footer/>
    </main>
  );
};

export default JobDetailsPage;


