"use client"

import Header from "@/app/Components/Header/Header";
import Footer from "@/app/Components/Home/Footer";
import Image from "next/image";
import React from "react";
import { useState } from 'react';
import { toast } from "react-toastify";

const Joblisting = () => {
    const [salary, setSalary] = useState([5000, 99999]);

    return (
        <main>
            <Header title="Jobs" 
        subtitle="Explore a wide range of job opportunities available" />
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Left Sidebar */}
                    <div className="w-full md:w-1/6 space-y-6 bg-[#EBF5F4] p-6 rounded-lg text-black">
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
                                {['All', 'Last Hour', 'Last 24 Hours', 'Last 7 Days','Last 30 Days'].map((level) => (
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

                    {/* Right Content */}
                    <div className="w-full md:w-3/4">
                        {/* Results Header */}
                        <div className="flex justify-between items-center mb-6">
                            <p className="text-gray-600">Showing 6-6 of 10 results</p>
                            <select className="p-2 border rounded-md">
                                <option>Sort by latest</option>
                                <option>Sort by oldest</option>
                            </select>
                        </div>

                        {/* Job Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6  justify-items-center">
                            {[...Array(9)].map((_, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-md  md:w-full md:h-full p-8 border relative">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Image src="/google.png" alt="Google" width={24} height={24} />
                                        <h3 className="font-semibold">Software Tester</h3>
                                    </div>
                                    <div className="mb-3">
                                        <span className="text-gray-600 text-sm">Chennai</span>
                                        <span className="mx-2 text-gray-400">•</span>
                                        <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">Intermediate Level</span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-4">
                                        As a Software Tester, you will play a critical role in ensuring the quality and reliability of our software applications...
                                    </p>
                                    
                                    <div className="flex md:mt-20    gap-3">
                                        <button onClick={() => toast.success("Applied")} className="flex-1 bg bg-[#2E5F5C] border border-[#2E5F5C] text-white  px-3 py-1.5 rounded text-sm hover:bg-[#2b2d2d] hover:text-white transition-colors">
                                            Apply now
                                        </button>
                                        <button className="flex-1 border border-[#2E5F5C] text-[#2E5F5C] px-3 py-1.5 rounded text-sm hover:bg-[#2E5F5C] hover:text-white transition-colors">
                                            Learn more
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center mt-8 gap-2">
                            {[1, 2, 3].map((page) => (
                                <button
                                    key={page}
                                    className={`w-8 h-8 rounded ${
                                        page === 1 ? 'bg-[#2E5F5C] text-white' : 'border text-gray-600'
                                    }`}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </main>
        
    );
}

export default Joblisting;