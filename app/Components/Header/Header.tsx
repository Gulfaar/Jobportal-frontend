"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({title, subtitle}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

    const [isTrainingOpen, setIsTrainingOpen] = useState(false);
    const [isWorkForceOpen, setIsWorkForceOpen] = useState(false);
    const [isContract, setIsContractOpen] = useState(false)
    const [isOutsourcing,setIsOutsourcing] = useState(false)
  
    
  
    const [isRecruitmentOpen, setIsRecruitmentOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
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
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 right-6 bg-black/80 rounded p-4 w-64 z-50">
            {/* Post Job button in mobile menu */}
            {/* <button className="bg-teal-700 text-white text-sm px-3 py-1 rounded-lg hover:bg-teal-800 transition w-full mb-4">
              Post Job
            </button> */}
            <ul className="flex flex-col space-y-4 text-white">
            <li>
                <Link href="/" className="block hover:text-gray-200 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#jobs" className="block hover:text-gray-200 transition">
                  Jobs
                </Link>
              </li>
              <li>
                <Link href="#blog" className="block hover:text-gray-200 transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#training" className="block hover:text-gray-200 transition">
                  Training
                </Link>
              </li>
              <li>
                <Link href="#workforce" className="block  hover:text-yellow-300 transition">
                  Work-Force Solutions
                </Link>
              </li>
              <li>
                <Link href="#partner" className="block hover:text-gray-200 transition">
                  Partner with us
                </Link>
              </li>
            </ul>
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

        {isContract && (
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
        onClick={() => setIsOutsourcing(true)}
        onMouseEnter={() => setIsOutsourcing(true)}
        onMouseLeave={() => setIsOutsourcing(false)}
      >
        Outsourcing solutions

        {isOutsourcing && (
          <div
            className="absolute left-[-290px] top-0 w-auto   bg-[#2E5F5C] text-white rounded-lg shadow-lg p-2"
            
          >
            <Link
              href="/OnDemandSkilledProfessionals"
              className="block px-4 py-2 hover:text-[#dae470] hover:bg-[#3e5f5e] rounded"
              onClick={() => setIsOutsourcing(false)}
            >
              On-Demand skilled Professionals 
            </Link>
            <Link
              href="/TaskSpecifics"
              className=" px-4 py-2 inline-flex whitespace-nowrap hover:text-[#dae470] hover:bg-[#3e5f5e] rounded"
              onClick={() => setIsOutsourcing(false)}
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
