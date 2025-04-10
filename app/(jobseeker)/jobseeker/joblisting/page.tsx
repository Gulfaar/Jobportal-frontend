"use client";

import Header from "@/app/Components/Header/Header";
import Footer from "@/app/Components/Home/Footer";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { getAllJobs, searchJobs } from "../../../Components/Services/jobService";
import { Job } from "../../../Components/types/job";
import { useSearchParams } from "next/navigation";

const Joblisting = () => {
    const searchParams = useSearchParams();
    const [jobs, setJobs] = useState<Job[]>([]);
    const [allJobs, setAllJobs] = useState<Job[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [salary, setSalary] = useState([5000, 99999]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const jobsPerPage = 9;

    useEffect(() => {
        const fetchAllJobs = async () => {
            setLoading(true);
            try {
                const response = await getAllJobs();
                console.log("All jobs response:", response);
                setAllJobs(response.data || []);
                setJobs(response.data || []);
            } catch (error) {
                console.error("Error fetching all jobs:", error);
                setError("Failed to load jobs");
            } finally {
                setLoading(false);
            }
        };
        fetchAllJobs();
    }, []);

    useEffect(() => {
        const fetchSearchResults = async () => {
            const searchQuery = searchParams.get("search");
            console.log("Search query from URL:", searchQuery);

            if (searchQuery) {
                setLoading(true);
                try {
                    const response = await searchJobs(searchQuery);
                    console.log("Search API response:", response);
                    setJobs(response.data || []);
                    if (!response.data?.length) {
                        setError(`No jobs found for "${searchQuery}"`);
                    } else {
                        setError(null);
                    }
                } catch (error) {
                    console.error("Error searching jobs:", error);
                    setError("Failed to search jobs");
                    setJobs([]);
                } finally {
                    setLoading(false);
                }
            } else {
                setJobs(allJobs);
                setError(null);
            }
        };

        fetchSearchResults();
    }, [searchParams, allJobs]);

    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
    const totalPages = Math.ceil(jobs.length / jobsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const getLogoUrl = (job: Job) =>
        `${process.env.NEXT_PUBLIC_API_BASE_URL}${job.company?.logo || ""}`;

    return (
        <main>
            <Header title="Jobs" subtitle="Explore a wide range of job opportunities available" />
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Left Sidebar */}
                    <div className="hidden md:block lg:block w-full md:w-1/6 space-y-6 bg-[#EBF5F4] p-4 rounded-lg text-black">
                        {/* Search */}
                        <div>
                            <h3 className="font-medium mb-2">Search by Job Title</h3>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Job title or company"
                                    className="w-full p-2  border rounded-md pl-8 text-black"
                                />
                                <svg className="absolute left-2 top-3 w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>

                        {/* Location */}
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

                        {/* Category */}
                        <div>
                            <h3 className="font-medium mb-2">Category</h3>
                            <div className="space-y-2">
                                {['IT & Technology', 'Financial Services', 'Telecommunications', 'Marketing', 'Education'].map((category) => (
                                    <label key={category} className="flex items-center gap-2 text-black">
                                        <input type="checkbox" className="rounded border-gray-300" />
                                        <span>{category}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Job Type */}
                        <div>
                            <h3 className="font-medium mb-2">Job Type</h3>
                            <div className="space-y-2">
                                {['Full Time', 'Part Time', 'Contract', 'Freelance'].map((type) => (
                                    <label key={type} className="flex items-center gap-2 text-black">
                                        <input type="checkbox" className="rounded border-gray-300" />
                                        <span>{type}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Experience Level */}
                        <div>
                            <h3 className="font-medium mb-2">Experience Level</h3>
                            <div className="space-y-2">
                                {['No experience', 'Entry level', 'Mid level', 'Senior level'].map((level) => (
                                    <label key={level} className="flex items-center gap-2 text-black">
                                        <input type="checkbox" className="rounded border-gray-300" />
                                        <span>{level}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Date Posted */}
                        <div>
                            <h3 className="font-medium mb-2">Date Posted</h3>
                            <div className="space-y-2">
                                {['All', 'Last Hour', 'Last 24 Hours', 'Last 7 Days', 'Last 30 Days'].map((level) => (
                                    <label key={level} className="flex items-center gap-2 text-black">
                                        <input type="checkbox" className="rounded border-gray-300" />
                                        <span>{level}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Salary Range */}
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

                    {/* Job Listings */}
                    <div className="w-full md:w-3/4">
                        <div className="flex justify-between items-center mb-6">
                            <p className="text-gray-600">
                                Showing {indexOfFirstJob + 1}-{Math.min(indexOfLastJob, jobs.length)} of {jobs.length} results
                                {searchParams.get("search") && ` for "${searchParams.get("search")}"`}
                            </p>
                            <select className="p-2 border rounded-md text-black">
                                <option>Sort by latest</option>
                                <option>Sort by oldest</option>
                            </select>
                        </div>

                        {loading ? (
                            <p className="text-white col-span-full text-center">Loading jobs...</p>
                        ) : error ? (
                            <p className="text-white col-span-full text-center">{error}</p>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-7 justify-items-center">
                                {Array.isArray(currentJobs) && currentJobs.length > 0 ? (
                                    currentJobs.map((job) => (
                                        <div key={job._id} className="bg-white rounded-lg shadow-md md:w-full md:h-full p-7 border relative">
                                            <div className="flex items-center gap-3 mb-3">
                                                <Image
                                                    src={getLogoUrl(job)}
                                                    alt="Company logo"
                                                    width={24}
                                                    height={24}
                                                    className="object-contain"
                                                    onError={(e) => console.log("Image failed to load:", (e.target as HTMLImageElement).src)}
                                                />
                                                <h3 className="font-semibold text-black">{job.title}</h3>
                                            </div>
                                            <div className="mb-3">
                                                <span className="text-gray-600 text-sm">{job.location?.city || "Unknown"}</span>
                                                <span className="mx-2 text-gray-400">•</span>
                                                <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">
                                                    {job.proficiencyLevel || "N/A"}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-600 mb-4 line-clamp-3">{job.description}</p>
                                            <div className="flex md:mt-20 gap-3">
                                                <button className="flex-1 bg-[#2E5F5C] border border-[#2E5F5C] text-white px-3 py-1.5 rounded text-sm hover:bg-[#2E5F5C] hover:text-white transition-colors">
                                                    Apply now
                                                </button>
                                                <button className="flex-1 border border-[#2E5F5C] text-[#2E5F5C] px-3 py-1.5 rounded text-sm hover:bg-[#2E5F5C] hover:text-white transition-colors">
                                                    Learn more
                                                </button>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-white col-span-full text-center">
                                        {searchParams.get("search")
                                            ? `No jobs found for "${searchParams.get("search")}"`
                                            : "No jobs found."}
                                    </p>
                                )}
                            </div>
                        )}

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex justify-center mt-10 space-x-2">
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                    <button
                                        key={page}
                                        onClick={() => handlePageChange(page)}
                                        className={`px-4 py-2 border rounded ${currentPage === page
                                                ? "bg-[#2E5F5C] text-white"
                                                : "bg-white text-black border-gray-300"
                                            }`}
                                    >
                                        {page}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
};

export default Joblisting;
