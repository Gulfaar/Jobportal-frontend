"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaBars, FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import { FiChevronDown, FiChevronLeft, FiChevronRight, FiChevronUp } from "react-icons/fi";
import Cookies from 'js-cookie';
import axios from 'axios';



interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({title, subtitle}) => {
   const [isModalOpen, setIsModalOpen] = useState(false);
    const [isTrainingOpen, setIsTrainingOpen] = useState(false);
    const [isWorkForceOpen, setIsWorkForceOpen] = useState(false);
    const [isContractOpen, setIsContractOpen] = useState(false);
    const [isOutsourcingOpen, setIsOutsourcingOpen] = useState(false); 
    const [isRecruitmentOpen, setIsRecruitmentOpen] = useState(false)


    const token = Cookies.get('jwt');
    

    const Logout = async () => {
      const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.gulfaarjobs.com";
    
      try {
        const response = await axios.post(
          `${API_BASE_URL}/user/logout`,
          {}, // empty body
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        Cookies.remove('jwt')
        return response.data;
      } catch (error: any) {
        console.error("Logout error:", error.response?.data || error.message);
        return { success: false, message: error.response?.data?.message || "Something went wrong" };
      }
    }; 

  const toggleMenu = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <header
      className="relative w-full h-[300px]  md:px-8  bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: 'url("/Heroimage.png")', // Replace with your actual background image
      }}
    >
      {/* Dark overlay to make text more readable over the background */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col  h-full px-8 py-10 md:px-2  md:py-9">
        
        {/* Top Row: Logo on the left, buttons on the right, burger menu on mobile */}
        <div className="flex mt-[-20px] md:mt-[-40px] items-center justify-between">
          {/* Logo - Larger size */}
          <div className="relative  mt-5  md:mt-12 w-[125px] md:w-[188px]">
            <Link href="/" >
            <Image
              src="/secondhead.png" // Replace with your actual logo
              alt="Gulfaar Logo"
              width={260} // Set appropriate width
              height={10} 
              className="object-contain h-auto"
              priority
            />
            </Link>
          </div>

          {/* Right Side: Buttons + Burger */}
          <div className="flex items-center">
            {/* Action Buttons - Smaller size */}
            <div className="hidden w-full justify-end mt-[2px]  md:flex gap-2 md:gap-4">
            
              <Link href="/jobseeker/login">
              <button className="md:px-2 py-2  cursor-pointer rounded-lg text-white text-sm md:text-base">
                Jobseeker
              </button>
              </Link>
              <Link href="/employer/signup">
              <button className="bg-[#2E5F5C] mt-1 md:px-4 cursor-pointer md:h-8 rounded-lg text-white text-sm md:text-base">
                Employer
              </button>
              </Link>
              {token && (
      <Link href="/jobseeker/login">
        <button onClick={Logout} className="cursor-pointer md:px-2 py-2 rounded-lg text-white text-sm md:text-base">
          Logout
        </button>
      </Link>
    )}
              {/* Post Job button - visible only on desktop */}
              {/* <button className="hidden md:block bg-teal-700 text-white text-sm px-3 py-1 rounded-lg hover:bg-teal-800 transition mr-2">
                Post Job
              </button> */}
            </div>

            {/* Burger Menu Button - Visible on mobile only */}
            <div className="flex justify-end mt-[2px] px-4 gap-2 md:hidden lg:hidden">
                    
                    <button
                      className="text-white mt-3 text-2xl"
                      onClick={toggleMenu}
                    >
                      <FaBars />
                    </button>
                  </div>
          </div>
        </div>

        {/* Mobile Menu - Shown when burger is clicked */}
        {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-98 z-50 overflow-y-auto scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent">

          <div className="fixed top-10 left-8 z-50 h-10 w-auto">
            <Image
              src="/blacklogo.png"
              alt="Company Logo"
              width={120}
              height={50}
              priority
              className=" "
            />
          </div>


          {/* Close Button */}
          <button
            className="fixed top-4 right-4 text-gray-400  transition z-50"
            onClick={() => setIsModalOpen(false)}
          >
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          {/* Navigation Links */}
          <div className="flex flex-col mt-5 items-center w-full max-w-md mx-auto py-20 space-y-4 text-lg tracking-wide min-h-screen scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent">
            <Link
              href="/"
              className="w-full  text-2xl text-black rounded-lg px-10 py-4  transition-all duration-300 ease-in-out transform "
              onClick={() => setIsModalOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/jobseeker/joblisting"
              className="w-full text-2xl rounded-lg px-10 py-4 text-black  transition-all duration-300 ease-in-out transform "
              onClick={() => setIsModalOpen(false)}
            >
              Jobs
            </Link>
            {/* <Link
              href=" "
              className="w-full  text-2xl rounded-lg px-10 py-4 text-black  transition-all duration-300 ease-in-out transform "
              onClick={() => setIsModalOpen(false)}
            >
              Blog
            </Link> */}

            {/* Training Dropdown */}
            <div className="w-full">
              <button
                className="w-full  text-2xl rounded-lg px-10 py-4 text-black flex justify-between items-center transition-all duration-300 ease-in-out transform"
                onClick={() => setIsTrainingOpen(!isTrainingOpen)}
              >
                <span>Training</span>
                {isTrainingOpen ? <FiChevronUp /> : <FiChevronDown />}
              </button>
              {isTrainingOpen && (
                <div className="mt-2 pl-5 w-full text-2xl rounded-lg shadow-2xl max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent">
                  <Link
                    href="/developement/skilldevelopement"
                    className="block px-10 py-3 text-black  text-[22px]  rounded-t-md transition-all duration-200 "
                    onClick={() => setIsModalOpen(false)}
                  >
                    Skill Development
                  </Link>
                  <Link
                    href="/Training/PersonalityDevelopment"
                    className="block px-10 py-3 text-black text-[22px]   transition-all duration-200 "
                    onClick={() => setIsModalOpen(false)}
                  >
                    Personality Development
                  </Link>
                  <Link
                    href="/Training/LanguageTraining"
                    className="block px-10 py-3 text-black text-[22px]   transition-all duration-200 "
                    onClick={() => setIsModalOpen(false)}
                  >
                    Language Training
                  </Link>
                  <Link
                    href="/ExamPreprations"
                    className="block px-10 py-3 text-black text-[22px]   transition-all duration-200 "
                    onClick={() => setIsModalOpen(false)}
                  >
                    Exam Preparation
                  </Link>
                </div>
              )}
            </div>

            {/* Workforce Solutions Dropdown */}
            <div className="w-full">
              <button
                className="w-full  text-2xl rounded-lg px-10 py-4 text-black flex justify-between items-center transition-all duration-300 ease-in-out transform "
                onClick={() => setIsWorkForceOpen(!isWorkForceOpen)}
              >
                <span>Work-Force Solutions</span>
                {isWorkForceOpen ? <FiChevronUp /> : <FiChevronDown />}
              </button>
              {isWorkForceOpen && (
                <div className="mt-2 w-full pl-4 rounded-lg shadow-2xl max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent">
                  {/* Recruitment Sub-Dropdown */}
                  <div className="w-full">
                    <button
                      className="w-full px-10  py-3 text-2xl  text-black  flex justify-between items-center  transition-all duration-200 "
                      onClick={() => setIsRecruitmentOpen(!isRecruitmentOpen)}
                    >
                      <span>Recruitment</span>
                      {isRecruitmentOpen ? <FiChevronUp /> : <FiChevronDown />}
                    </button>
                    {isRecruitmentOpen && (
                      <div className="pl-4 max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent">
                        <Link
                          href="/workforcesolutions/TailoredCandidates"
                          className="block px-10 py-3 text-black text-[22px] transition-all duration-200 "
                          onClick={() => setIsModalOpen(false)}
                        >
                          Tailored Candidates
                        </Link>
                        <Link
                          href="/workforcesolutions/DirectPlacement"
                          className="block px-10 py-3  text-black text-[22px]  transition-all duration-200  "
                          onClick={() => setIsModalOpen(false)}
                        >
                          Direct Placement
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Contract Workforce Sub-Dropdown */}
                  <div className="w-full overflow-y-auto scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent">
                    <button
                      className="w-full px-10 py-3  text-black  text-2xl flex justify-between items-center  transition-all duration-200"
                      onClick={() => setIsContractOpen(!isContractOpen)}
                    >
                      <span>Contract Workforce</span>
                      {isContractOpen ? <FiChevronUp /> : <FiChevronDown />}
                    </button>
                    {isContractOpen && (
                      <div className="pl-4 max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent">
                        <Link
                          href="/PayrollManagement"
                          className="block px-10 py-3 text-[22px] text-black hover:bg-gray-700  transition-all duration-200 "
                          onClick={() => setIsModalOpen(false)}
                        >
                          Payroll Management
                        </Link>
                        <Link
                          href="/FlexibleHiring"
                          className="block text-[22px] px-10 py-3 text-black hover:bg-gray-700  transition-all duration-200 "
                          onClick={() => setIsModalOpen(false)}
                        >
                          Flexible Hiring
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Outsourcing Sub-Dropdown */}
                  <div className="w-full">
                    <button
                      className="w-full px-10 py-3  text-black  flex justify-between items-center  transition-all duration-200 text-2xl"
                      onClick={() => setIsOutsourcingOpen(!isOutsourcingOpen)}
                    >
                      <span>Outsourcing</span>
                      {isOutsourcingOpen ? <FiChevronUp /> : <FiChevronDown />}
                    </button>
                    {isOutsourcingOpen && (
                      <div className="pl-4 max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent">
                        <Link
                          href="/OnDemandSkilledProfessionals"
                          className="block px-10 py-3  text-black text-[22px]  transition-all duration-200 "
                          onClick={() => setIsModalOpen(false)}
                        >
                          On-Demand Professionals
                        </Link>
                        <Link
                          href="/TaskSpecifics"
                          className="block px-10 py-3  text-[22px] text-black  transition-all duration-200 "
                          onClick={() => setIsModalOpen(false)}
                        >
                          Task-Specific Experts
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/Partner"
              className="w-full  rounded-lg px-10 py-4 text-2xl text-black  transition-all duration-300 ease-in-out transform "
              onClick={() => setIsModalOpen(false)}
            >
              Partner with us
            </Link>
            <div className="w-full flex flex-col space-y-3 px-10">
              <Link href="/CandidateBoarding" onClick={() => setIsModalOpen(false)}>
                <button className="w-full bg-[#2E5F5C] px-4 py-2 mt-2 rounded-lg text-white text-xl hover:opacity-90 transition">
                  Jobseeker
                </button>
              </Link>
              <Link href="/employer/signup" onClick={() => setIsModalOpen(false)}>
                <button className="w-full bg-[#2E5F5C] px-4 py-2 mt-2 rounded-lg text-white text-xl hover:opacity-90 transition">
                  Employer
                </button>
              </Link>
              {token && (
              <Link href="/jobseeker/login" onClick={Logout}>
                <button className="w-full bg-[#2E5F5C] px-4 py-2 mt-2 rounded-lg text-white text-xl hover:opacity-90 transition">
                  Logout
                </button>
              </Link>
              )}
            </div>
          </div>
        </div>
      )}

        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden md:flex  gap-4  text-white font-[20px] md:mt-[-12px] w-full justify-end  relative  pr-2">
  <Link href="/" className="hover:text-[#dae470]">
    Home
  </Link>
  <Link href="/jobseeker/joblisting" className="hover:text-[#dae470]">
    Jobs
  </Link>

  {/* Training Dropdown */}
  <div
    className="relative group"
    onMouseEnter={() => setIsTrainingOpen(true)}
    onMouseLeave={() => setIsTrainingOpen(false)}
  >
    <Link href="#" className="hover:text-[#dae470]">
      Training
    </Link>

    {isTrainingOpen && (
      <div
        className="absolute left-0 mt-0 w-auto bg-[#2E5F5C] text-white rounded-lg shadow-lg p-2"
        onMouseEnter={() => setIsTrainingOpen(true)}
        onMouseLeave={() => setIsTrainingOpen(false)}
      >
        <Link
          href="/developement/skilldevelopement"
          className="block px-4 py-2 hover:text-[#dae470] hover:bg-[#3e5f5e] rounded"
        >
          Skill Development
        </Link>
        <Link
          href="/Training/PersonalityDevelopment"
          className="px-4 py-2 inline-flex whitespace-nowrap hover:text-[#dae470] hover:bg-[#3e5f5e] rounded"
        >
          Personality Development
        </Link>
        <Link
          href="/Training/LanguageTraining"
          className="block px-4 py-2 hover:text-[#dae470] hover:bg-[#3e5f5e] rounded"
        >
          Language Training
        </Link>
        <Link
          href="/ExamPreprations"
          className="block px-4 py-2 hover:text-[#dae470] hover:bg-[#3e5f5e] rounded"
        >
          Exam Preparation
        </Link>
      </div>
    )}
  </div>

  {/* Work-Force Solutions Dropdown */}
  <div
    className="relative group"
    onMouseEnter={() => setIsWorkForceOpen(true)}
    onMouseLeave={() => setIsWorkForceOpen(false)}
  >
    <Link href="#" className="hover:text-[#dae470]">
      Work-Force Solutions
    </Link>

    {isWorkForceOpen && (
      <div
        className="absolute left-0 w-auto bg-[#2E5F5C] text-white rounded-lg shadow-lg p-2"
        onMouseEnter={() => setIsWorkForceOpen(true)}
        onMouseLeave={() => setIsWorkForceOpen(false)}
      >
        {/* Recruitment */}
        <div
          className="block px-4 py-2 hover:text-[#dae470] hover:bg-[#3e5f5e] rounded relative flex items-center justify-between cursor-pointer"
          onMouseEnter={() => setIsRecruitmentOpen(true)}
          onMouseLeave={() => setIsRecruitmentOpen(false)}
        >
          <span>Recruitment solutions</span>
          {isRecruitmentOpen ? <FiChevronLeft /> : <FiChevronRight />}
          {isRecruitmentOpen && (
            <div className="absolute left-[-195px] mt-[50px] w-48 bg-[#2E5F5C] text-white rounded-lg shadow-lg p-2">
              <Link
                href="/workforcesolutions/TailoredCandidates"
                className="px-3 py-2 inline-flex whitespace-nowrap w-auto hover:text-[#dae470] hover:bg-[#3e5f5e] rounded"
              >
                Tailored candidates
              </Link>
              <Link
                href="/workforcesolutions/DirectPlacement"
                className="block px-4 py-2 hover:text-[#dae470] hover:bg-[#3e5f5e] rounded"
              >
                Direct placement
              </Link>
            </div>
          )}
        </div>

        {/* Contract-based workforce */}
        <div
          className="px-4 py-2 inline-flex whitespace-nowrap w-auto hover:text-[#dae470] hover:bg-[#3e5f5e] rounded relative flex items-center justify-between cursor-pointer"
          onMouseEnter={() => setIsContractOpen(true)}
          onMouseLeave={() => setIsContractOpen(false)}
        >
          <span>Contract based workforce</span>
          {isContractOpen ? <FiChevronLeft /> : <FiChevronRight />}
          {isContractOpen && (
            <div className="absolute left-[-195px] top-0 w-auto bg-[#2E5F5C] text-white rounded-lg shadow-lg p-2">
              <Link
                href="/PayrollManagement"
                className="block px-4 py-2 hover:text-[#dae470] hover:bg-[#3e5f5e] rounded"
              >
                Payroll Management
              </Link>
              <Link
                href="/FlexibleHiring"
                className="block px-4 py-2 hover:text-[#dae470] hover:bg-[#3e5f5e] rounded"
              >
                Flexible Hiring
              </Link>
            </div>
          )}
        </div>

        {/* Outsourcing solutions */}
        <div
          className="px-4 py-2 inline-flex whitespace-nowrap w-full hover:text-[#dae470] hover:bg-[#3e5f5e] rounded relative flex items-center justify-between cursor-pointer"
          onMouseEnter={() => setIsOutsourcingOpen(true)}
          onMouseLeave={() => setIsOutsourcingOpen(false)}
        >
          <span>Outsourcing solutions</span>
          {isOutsourcingOpen ? <FiChevronLeft /> : <FiChevronRight />}
          {isOutsourcingOpen && (
            <div className="absolute left-[-285px] top-[-40px] w-auto bg-[#2E5F5C] text-white rounded-lg shadow-lg p-2">
              <Link
                href="/OnDemandSkilledProfessionals"
                className="block px-4 py-2 hover:text-[#dae470] hover:bg-[#3e5f5e] rounded"
              >
                On-Demand skilled Professionals
              </Link>
              <Link
                href="/TaskSpecifics"
                className="px-4 py-2 inline-flex whitespace-nowrap hover:text-[#dae470] hover:bg-[#3e5f5e] rounded"
              >
                Task Specific Experts
              </Link>
            </div>
          )}
        </div>
      </div>
    )}
  </div>

  <Link href="/Partner" className="hover:text-[#dae470]">
    Partner with us
  </Link>
</div>

        {/* Hero Text: 
            - On mobile: headline is 2 lines 
            - On desktop: headline is 1 line
            - Similarly for subheading
        */}
        <div className="flex flex-col items-center justify-center flex-grow text-center text-white px-4 py-8 md:py-12">
          {/* Headline */}
          <h1 className="tracking-wide mb-5">
            {/* Mobile (2 lines) */}
            <span className="block md:hidden text-[34px]  leading-tight">
              {title}
            </span>
            {/* Desktop (1 line) */}
            <span className="hidden md:inline text-[54px] lg:text-5xl whitespace-nowrap">
              {title}
            </span>
          </h1>

          {/* Subheading */}
          <p className="leading-relaxed max-w-2xl mx-auto">
            {/* Mobile (2 lines) */}
            <span className="block md:hidden text-lg">
              {subtitle}
            </span>
            {/* Desktop (1 line) */}
            <span className="hidden md:inline   justify-center items-center text-[14px] lg:text-2xl">
              {subtitle}
            </span>
          </p>
        </div>
      </div>
    </header>
  )
}

export default Header
