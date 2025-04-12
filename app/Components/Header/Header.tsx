"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiChevronDown, FiChevronRight, FiChevronUp } from "react-icons/fi";

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

  const toggleMenu = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <header
      className="relative w-full h-[300px] md:h-[300px] bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: 'url("/Heroimage.png")', // Replace with your actual background image
      }}
    >
      {/* Dark overlay to make text more readable over the background */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col  h-full px-10 py-7">
        
        {/* Top Row: Logo on the left, buttons on the right, burger menu on mobile */}
        <div className="flex md:mt-[-30px] items-center justify-between">
          {/* Logo - Larger size */}
          <div className="relative w-[120px] md:w-[248px]">
            <Image
              src="/newlogo.png" // Replace with your actual logo
              alt="Gulfaar Logo"
              width={260} // Set appropriate width
              height={10} 
              className="object-contain h-auto"
              priority
            />
          </div>

          {/* Right Side: Buttons + Burger */}
          <div className="flex items-center">
            {/* Action Buttons - Smaller size */}
            <div className="hidden w-full justify-end mt-[-20px] md:flex gap-2 md:gap-4">
            
              <span className="md:px-2 py-2  rounded-lg text-white text-sm md:text-base">
                Jobseeker
              </span>
              <Link href="/employer/signup">
              <button className="bg-[#2E5F5C] mt-1 md:px-4  md:h-8 rounded-lg text-white text-sm md:text-base">
                Employer
              </button>
              </Link>
              {/* Post Job button - visible only on desktop */}
              {/* <button className="hidden md:block bg-teal-700 text-white text-sm px-3 py-1 rounded-lg hover:bg-teal-800 transition mr-2">
                Post Job
              </button> */}
            </div>

            {/* Burger Menu Button - Visible on mobile only */}
            <button
              className="ml-4 md:hidden text-white"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div className="w-8 h-6 flex flex-col justify-between">
                <div className="w-full h-1 bg-white rounded"></div>
                <div className="w-full h-1 bg-white rounded"></div>
                <div className="w-full h-1 bg-white rounded"></div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Shown when burger is clicked */}
        {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-98 z-50 overflow-y-auto">
          {/* Close Button */}
          <button
            className="fixed top-4 right-4 text-gray-400 hover:text-[#f0c14b] transition z-50"
            onClick={() => setIsModalOpen(false)}
          >
            <svg
              className="w-8 h-8"
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
          <div className="flex flex-col items-center w-full max-w-md mx-auto py-20 space-y-4 text-lg tracking-wide min-h-screen">
            <Link
              href="/"
              className="w-full bg-[#2E5F5C] rounded-lg px-6 py-4 text- hover:text-[#f0c14b] transition-all duration-300 ease-in-out transform hover:bg-gray-700"
              onClick={() => setIsModalOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/jobseeker/joblisting"
              className="w-full bg-[#2E5F5C] rounded-lg px-6 py-4 text-white hover:text-[#f0c14b] transition-all duration-300 ease-in-out transform hover:bg-gray-700"
              onClick={() => setIsModalOpen(false)}
            >
              Jobs
            </Link>
            <Link
              href="/blogs/Bloglisting"
              className="w-full bg-[#2E5F5C] rounded-lg px-6 py-4 text-white hover:text-[#f0c14b] transition-all duration-300 ease-in-out transform hover:bg-gray-700"
              onClick={() => setIsModalOpen(false)}
            >
              Blog
            </Link>

            {/* Training Dropdown */}
            <div className="w-full">
              <button
                className="w-full bg-[#2E5F5C] rounded-lg px-6 py-4 text-white hover:text-[#f0c14b] flex justify-between items-center transition-all duration-300 ease-in-out transform hover:bg-gray-700"
                onClick={() => setIsTrainingOpen(!isTrainingOpen)}
              >
                <span>Training</span>
                {isTrainingOpen ? <FiChevronUp /> : <FiChevronDown />}
              </button>
              {isTrainingOpen && (
                <div className="mt-2 w-full bg-[#2E5F5C] rounded-lg shadow-2xl max-h-60 overflow-y-auto animate-fadeIn">
                  <Link
                    href="/developement/skilldevelopement"
                    className="block px-6 py-3 text-gray-200 hover:bg-gray-700 hover:text-[#f0c14b] rounded-t-md transition-all duration-200 border-b border-gray-700"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Skill Development
                  </Link>
                  <Link
                    href="/Training/PersonalityDevelopment"
                    className="block px-6 py-3 text-gray-200 hover:bg-gray-700 hover:text-[#f0c14b] transition-all duration-200 border-b border-gray-700"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Personality Development
                  </Link>
                  <Link
                    href="/Training/LanguageTraining"
                    className="block px-6 py-3 text-gray-200 hover:bg-gray-700 hover:text-[#f0c14b] transition-all duration-200 border-b border-gray-700"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Language Training
                  </Link>
                  <Link
                    href="/ExamPreprations"
                    className="block px-6 py-3 text-gray-200 hover:bg-gray-700 hover:text-[#f0c14b] transition-all duration-200 border-b border-gray-700"
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
                className="w-full bg-[#2E5F5C] rounded-lg px-6 py-4 text-white hover:text-[#f0c14b] flex justify-between items-center transition-all duration-300 ease-in-out transform hover:bg-gray-700"
                onClick={() => setIsWorkForceOpen(!isWorkForceOpen)}
              >
                <span>Work-Force Solutions</span>
                {isWorkForceOpen ? <FiChevronUp /> : <FiChevronDown />}
              </button>
              {isWorkForceOpen && (
                <div className="mt-2 w-full bg-[#2E5F5C] rounded-lg shadow-2xl max-h-60 overflow-y-auto animate-fadeIn">
                  {/* Recruitment Sub-Dropdown */}
                  <div className="w-full">
                    <button
                      className="w-full px-6 py-3 text-gray-100 font-semibold flex justify-between items-center hover:text-[#f0c14b] transition-all duration-200 border-b border-gray-700"
                      onClick={() => setIsRecruitmentOpen(!isRecruitmentOpen)}
                    >
                      <span>Recruitment</span>
                      {isRecruitmentOpen ? <FiChevronUp /> : <FiChevronDown />}
                    </button>
                    {isRecruitmentOpen && (
                      <div className="pl-4">
                        <Link
                          href="/workforcesolutions/TailoredCandidates"
                          className="block px-6 py-3 text-gray-200 hover:bg-gray-700 hover:text-[#f0c14b] transition-all duration-200 border-b border-gray-700"
                          onClick={() => setIsModalOpen(false)}
                        >
                          Tailored Candidates
                        </Link>
                        <Link
                          href="/ExamPreprations"
                          className="block px-6 py-3 text-gray-200 hover:bg-gray-700 hover:text-[#f0c14b] transition-all duration-200 border-b border-gray-700"
                          onClick={() => setIsModalOpen(false)}
                        >
                          Direct Placement
                        </Link>
                       
                      </div>
                    )}
                  </div>

                  {/* Contract Workforce Sub-Dropdown */}
                  <div className="w-full">
                    <button
                      className="w-full px-6 py-3 text-gray-100 font-semibold flex justify-between items-center hover:text-[#f0c14b] transition-all duration-200 border-b border-gray-700"
                      onClick={() => setIsContractOpen(!isContractOpen)}
                    >
                      <span>Contract Workforce</span>
                      {isContractOpen ? <FiChevronUp /> : <FiChevronDown />}
                    </button>
                    {isContractOpen && (
                      <div className="pl-4">
                        <Link
                          href="/PayrollManagement"
                          className="block px-6 py-3 text-gray-200 hover:bg-gray-700 hover:text-[#f0c14b] transition-all duration-200 border-b border-gray-700"
                          onClick={() => setIsModalOpen(false)}
                        >
                          Payroll Management
                        </Link>
                        <Link
                          href="/FlexibleHiring"
                          className="block px-6 py-3 text-gray-200 hover:bg-gray-700 hover:text-[#f0c14b] transition-all duration-200 border-b border-gray-700"
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
                      className="w-full px-6 py-3 text-gray-100 font-semibold flex justify-between items-center hover:text-[#f0c14b] transition-all duration-200 border-b border-gray-700"
                      onClick={() => setIsOutsourcingOpen(!isOutsourcingOpen)}
                    >
                      <span>Outsourcing</span>
                      {isOutsourcingOpen ? <FiChevronUp /> : <FiChevronDown />}
                    </button>
                    {isOutsourcingOpen && (
                      <div className="pl-4">
                        <Link
                          href="/OnDemandSkilledProfessionals"
                          className="block px-6 py-3 text-gray-200 hover:bg-gray-700 hover:text-[#f0c14b] transition-all duration-200 border-b border-gray-700"
                          onClick={() => setIsModalOpen(false)}
                        >
                          On-Demand Professionals
                        </Link>
                        <Link
                          href="/TaskSpecifics"
                          className="block px-6 py-3 text-gray-200 hover:bg-gray-700 hover:text-[#f0c14b] transition-all duration-200 border-b border-gray-700"
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
              className="w-full bg-[#2E5F5C] rounded-lg px-6 py-4 text-white hover:text-[#f0c14b] transition-all duration-300 ease-in-out transform hover:bg-gray-700"
              onClick={() => setIsModalOpen(false)}
            >
              Partner with us
            </Link>
          </div>
        </div>
      )}

        {/* Desktop Navigation - Hidden on mobile */}
        <nav className="hidden md:px-2 md:flex justify-end md:mt-[-35px]">
          <ul className="flex items-center space-x-4 text-white font-medium">
          <li>
                <Link href="/" className="block hover:text-gray-200 transition">
                  Home
                </Link>
              </li>
            <li>
              <Link href="#jobs" className="hover:text-gray-200 transition">
                Jobs
              </Link>
            </li>
            <li>
              <Link href="/blogs/Bloglisting" className="hover:text-gray-200 transition">
                Blog
              </Link>
            </li>
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
          className="absolute left-0 mt-2 w-[48] bg-[#2E5F5C] text-white rounded-lg shadow-lg p-2"
          onMouseEnter={() => setIsTrainingOpen(true)}
          onMouseLeave={() => setIsTrainingOpen(false)}
        >
          {/* Language Training with Nested Dropdown */}
          <div
            className="relative"
            
          >
            <Link
              href="/developement/skilldevelopement"
              className="block px-4 py-2 hover:text-[#dae470] hover:bg-[#3e5f5e] rounded"
              
            >
              Skill Development
            </Link>
          </div>

          <Link
            href="/Training/PersonalityDevelopment"
            className=" px-4 py-2 inline-flex whitespace-nowrap  hover:text-[#dae470] hover:bg-[#3e5f5e] rounded"
         
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
      className="absolute left-0  w-56 bg-[#2E5F5C] text-white rounded-lg shadow-lg p-2"
      onMouseEnter={() => setIsWorkForceOpen(true)}
      onMouseLeave={() => setIsWorkForceOpen(false)}
     
    >
      <Link
        href=""
        className="block px-4 py-2 hover:text-[#dae470] hover:bg-[#3e5f5e] rounded relative"
        onClick={() => setIsRecruitmentOpen(true)}
        onMouseEnter={() => setIsRecruitmentOpen(true)}
        onMouseLeave={() => setIsRecruitmentOpen(false)}
       
      >
        Recruitment solutions
        {isRecruitmentOpen && (
          <div
            className="absolute left-[-202px] mt-[-40px] w-48 bg-[#2E5F5C] text-white rounded-lg shadow-lg p-2"
          >
            <Link
              href="/workforcesolutions/TailoredCandidates"
              className=" px-3 py-2 inline-flex whitespace-nowrap w-42 hover:text-[#dae470] hover:bg-[#3e5f5e] rounded"
            >
              Tailored candidates
            </Link>
            <Link
              href="/workforcesolutions/DirectPlacement"
              className=" inline-flex whitespace-nowrap px-4 py-2 hover:text-[#dae470] hover:bg-[#3e5f5e] rounded"
            >
              Direct placement
            </Link>
          </div>
        )}
      </Link>

      <Link
        href=" "
        className="px-4 py-2 inline-flex whitespace-nowrap w-full hover:text-[#dae470] hover:bg-[#3e5f5e] rounded"
        onClick={() => setIsContractOpen(true)}
        onMouseEnter={() => setIsContractOpen(true)}
        onMouseLeave={() => setIsContractOpen(false)}
        
      >
        Contract-based workforce

        {isContractOpen && (
          <div
            className="absolute left-[-195px] top-0 w-48 bg-[#2E5F5C] text-white rounded-lg shadow-lg p-2"
           
          >
            <Link
              href="/PayrollManagement"
              className="block px-4 py-2 hover:text-[#dae470] hover:bg-[#3e5f5e] rounded"
              onClick={() => setIsContractOpen(false)}
            >
              Payroll Management
            </Link>
            <Link
              href="/FlexibleHiring"
              className="block px-4 py-2 hover:text-[#dae470] hover:bg-[#3e5f5e] rounded"
              onClick={() => setIsContractOpen(false)}
            >
              Flexible Hiring
            </Link>
          </div>
        )}
      </Link>
      <Link
        href=" "
        className="px-4 py-2 inline-flex whitespace-nowrap w-full hover:text-[#dae470] hover:bg-[#3e5f5e] rounded"
        onClick={() => setIsOutsourcingOpen(true)}
        onMouseEnter={() => setIsOutsourcingOpen(true)}
        onMouseLeave={() => setIsOutsourcingOpen(false)}
      >
        Outsourcing solutions

        {isOutsourcingOpen && (
          <div
            className="absolute left-[-290px] top-0 w-auto   bg-[#2E5F5C] text-white rounded-lg shadow-lg p-2"
            
          >
            <Link
              href="/OnDemandSkilledProfessionals"
              className="block px-4 py-2 hover:text-[#dae470] hover:bg-[#3e5f5e] rounded"
              onClick={() => setIsOutsourcingOpen(false)}
            >
              On-Demand skilled Professionals 
            </Link>
            <Link
              href="/TaskSpecifics"
              className=" px-4 py-2 inline-flex whitespace-nowrap hover:text-[#dae470] hover:bg-[#3e5f5e] rounded"
              onClick={() => setIsOutsourcingOpen(false)}
            >
             Task Specific Experts
            </Link>
          </div>
        )}

      </Link>
    </div>
  )}
</div>
            <li>
              <Link href="/Partner" className="hover:text-gray-200 transition">
                Partner with us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Hero Text: 
            - On mobile: headline is 2 lines 
            - On desktop: headline is 1 line
            - Similarly for subheading
        */}
        <div className="flex flex-col items-center justify-center flex-grow text-center text-white px-4 py-8 md:py-12">
          {/* Headline */}
          <h1 className="font-bold uppercase tracking-wide mb-5">
            {/* Mobile (2 lines) */}
            <span className="block md:hidden text-3xl leading-tight">
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
