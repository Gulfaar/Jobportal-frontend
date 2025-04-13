"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { FaBars, FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { FiChevronDown, FiChevronRight, FiChevronUp } from "react-icons/fi";

const HeroSection = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Navigating with search query:", searchQuery);
      router.push(`/jobseeker/joblisting?search=${encodeURIComponent(searchQuery)}`);
    }
  };
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex flex-col items-center overflow-hidden text-white px-12 pt-[100px] md:pt-[150px]"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <NavBar />
      <div className="w-full justify-end hidden md:flex">
        <NavLinks />
      </div>

      <div className="flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-2xl md:text-4xl font-bold">Find Your Dream Job Today!</h1>
        <p className="text-sm md:text-lg mt-2">
          Connecting Talent with Opportunity{" "}
          <span className="block md:inline">Your Gateway to Career Success</span>
        </p>

        {/* Desktop Search Bar: visible only on md+ */}
        <div className="hidden md:block">
          <DesktopSearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            handleSearch={handleSearch}
          />
        </div>

        {/* Mobile Search Bar: visible only on sm */}
        <MobileSearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
        />

        <JobLocations />

      </div>
    </div>
  );
};

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTrainingOpen, setIsTrainingOpen] = useState(false);
  const [isWorkForceOpen, setIsWorkForceOpen] = useState(false);
  const [isRecruitmentOpen, setIsRecruitmentOpen] = useState(false);
  const [isContractOpen, setIsContractOpen] = useState(false);
  const [isOutsourcingOpen, setIsOutsourcingOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-5 py-10 md:px-10 md:py-7">
      <div className="flex items-center mt-[-30px]">
        <Image
          src="/logomob.png"
          alt="Gulfaar Mobile Logo"
          width={100}
          height={40}
          className="py-10 md:py-0 h-auto block md:hidden"
        />

        <Image
          src="/newlogo.png"
          alt="Gulfaar Logo"
          width={315}
          height={80}
          className="hidden md:block lg:block w-[120px] md:w-[315px] h-auto"
        />
      </div>

      <div className="flex justify-end mt-[-30px] gap-2 md:hidden lg:hidden">
        <Link href="/CandidateBoarding">
          <button className="px-2 py-2 rounded-lg text-white text-sm">Jobseeker</button>
        </Link>
        <Link href="/employer/signup">
          <button className="bg-[#2E5F5C] px-3 py-2 rounded-lg text-white text-sm">
            Employer
          </button>
        </Link>
        <button
          className="text-white text-lg"
          onClick={() => setIsModalOpen(true)}
        >
          <FaBars />
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-98 z-50 overflow-y-auto scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent">

          <div className="fixed top-6 left-4 z-50 h-10 w-auto">
            <Image
              src="/logomob.png"
              alt="Company Logo"
              width={120}
              height={40}
              priority
              className="filter invert"
            />
          </div>


          {/* Close Button */}
          <button
            className="fixed top-4 right-4 text-gray-400  transition z-50"
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
          <div className="flex flex-col items-center w-full max-w-md mx-auto py-20 space-y-4 text-lg tracking-wide min-h-screen scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent">
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
                <div className="mt-2 w-full text-2xl rounded-lg shadow-2xl max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent">
                  <Link
                    href="/developement/skilldevelopement"
                    className="block px-10 py-3 text-black   rounded-t-md transition-all duration-200 "
                    onClick={() => setIsModalOpen(false)}
                  >
                    Skill Development
                  </Link>
                  <Link
                    href="/Training/PersonalityDevelopment"
                    className="block px-10 py-3 text-black   transition-all duration-200 "
                    onClick={() => setIsModalOpen(false)}
                  >
                    Personality Development
                  </Link>
                  <Link
                    href="/Training/LanguageTraining"
                    className="block px-10 py-3 text-black  transition-all duration-200 "
                    onClick={() => setIsModalOpen(false)}
                  >
                    Language Training
                  </Link>
                  <Link
                    href="/ExamPreprations"
                    className="block px-10 py-3 text-black   transition-all duration-200 "
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
                <div className="mt-2 w-full rounded-lg shadow-2xl max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent">
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
                          className="block px-10 py-3 text-black text-2xl transition-all duration-200 "
                          onClick={() => setIsModalOpen(false)}
                        >
                          Tailored Candidates
                        </Link>
                        <Link
                          href="/workforcesolutions/DirectPlacement"
                          className="block px-10 py-3  text-black text-2xl  transition-all duration-200  "
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
                          className="block px-10 py-3 text-2xl text-black hover:bg-gray-700  transition-all duration-200 "
                          onClick={() => setIsModalOpen(false)}
                        >
                          Payroll Management
                        </Link>
                        <Link
                          href="/FlexibleHiring"
                          className="block text-2xl px-10 py-3 text-black hover:bg-gray-700  transition-all duration-200 "
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
                          className="block px-10 py-3  text-black text-2xl  transition-all duration-200 "
                          onClick={() => setIsModalOpen(false)}
                        >
                          On-Demand Professionals
                        </Link>
                        <Link
                          href="/TaskSpecifics"
                          className="block px-10 py-3  text-2xl text-black  transition-all duration-200 "
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
          </div>
        </div>
      )}

      <div className="hidden w-full justify-end mt-[-50px] md:flex gap-2 md:gap-4">
        <Link href="/jobseeker/login">
          <button className="cursor-pointer md:px-2 py-2 rounded-lg text-white text-sm md:text-base">
            Jobseeker
          </button>
        </Link>
        <Link href="/employer/signup">
          <button className="bg-[#2E5F5C] mt-1 md:px-4 md:h-8 rounded-lg text-white text-sm md:text-base">
            Employer
          </button>
        </Link>
      </div>
    </nav>
  );
};
const NavLinks = () => {
  const [isTrainingOpen, setIsTrainingOpen] = useState(false);
  const [isWorkForceOpen, setIsWorkForceOpen] = useState(false);
  const [isRecruitmentOpen, setIsRecruitmentOpen] = useState(false);
  const [isContractOpen, setIsContractOpen] = useState(false);
  const [isOutsourcingOpen, setIsOutsourcingOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isSkillDevelopement, setSkillDevelopement] = useState(false);
  const [isPersonality, setPersonality] = useState(false);

  return (
    <div className="flex gap-4 text-white font-[20px] w-full justify-end md:mt-[-45px] lg:mt-[-35px] relative -top-9">
      <Link href="/" className="hover:text-[#dae470]">
        Home
      </Link>
      <Link href="/jobseeker/joblisting" className="hover:text-[#dae470]">
        Jobs
      </Link>
      {/* <Link href=" " className="hover:text-[#dae470]">
        Blog
      </Link> */}

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
            className="absolute left-0 mt-2 w-auto bg-[#2E5F5C] text-white rounded-lg shadow-lg p-2"
            onMouseEnter={() => setIsTrainingOpen(true)}
            onMouseLeave={() => setIsTrainingOpen(false)}
          >
            {/* Language Training with Nested Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsLanguageOpen(true)}
              onMouseLeave={() => setIsLanguageOpen(false)}
            >
              <Link
                href="/developement/skilldevelopement"
                className="block px-4 py-2 hover:text-[#dae470] hover:bg-[#3e5f5e] rounded"
                onMouseEnter={() => setSkillDevelopement(true)}
                onMouseLeave={() => setSkillDevelopement(false)}
              >
                Skill Development
              </Link>
            </div>

            <Link
              href="/Training/PersonalityDevelopment"
              className="px-4 py-2 inline-flex whitespace-nowrap hover:text-[#dae470] hover:bg-[#3e5f5e] rounded"
              onMouseOver={() => setPersonality(true)}
              onMouseLeave={() => setPersonality(false)}
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
            className="absolute left-0 w-56 bg-[#2E5F5C] text-white rounded-lg shadow-lg p-2"
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
                    className="px-3 py-2 inline-flex whitespace-nowrap w-42 hover:text-[#dae470] hover:bg-[#3e5f5e] rounded"
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
                  className="absolute left-[-290px] top-10 w-auto bg-[#2E5F5C] text-white rounded-lg shadow-lg p-2"
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
                    className="px-4 py-2 inline-flex whitespace-nowrap hover:text-[#dae470] hover:bg-[#3e5f5e] rounded"
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

      <Link href="/Partner" className="hover:text-[#dae470]">
        Partner with us
      </Link>
    </div>
  );
};

/* 
  This is your original search bar, but now we only show it on md+ screens.
  We renamed it to DesktopSearchBar for clarity.
*/
const DesktopSearchBar = ({ searchQuery, setSearchQuery, handleSearch }: {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  handleSearch: (e: React.FormEvent) => void;
}) => {
  return (
    <form onSubmit={handleSearch} className="relative flex md:flex-row bg-white w-[700px] max-w-[900px] md:w- h-auto md:h-[60px] rounded-lg mt-6 shadow-lg text-black items-center p-5 md:p-0">
      <div className="w-full flex items-center mx-2">
        <CiSearch />
        <input
          type="text"
          placeholder="Select for the job"
          className="flex pl-4 pr-4 py-2 w-full outline-none bg-transparent h-full justify-center items-center text-sm md:text-base border border-gray-300 rounded-lg md:rounded-none md:border-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <button type="submit" className="bg-[#2E5F5C] px-6 md:h-full flex items-center justify-center text-white rounded-lg md:rounded-lg whitespace-nowrap text-sm md:text-base w-full md:w-auto mt-2 md:mt-0">
        <CiSearch className="text-white text-lg mr-2" />
        Search Job
      </button>
    </form>
  );
};

/*
  MobileSearchBar: visible only on small screens (block md:hidden).
  Matches the "two-button" style in your provided screenshot.
*/
const MobileSearchBar = ({ searchQuery, setSearchQuery, handleSearch }: {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  handleSearch: (e: React.FormEvent) => void;
}) => {
  return (
    <form onSubmit={handleSearch} className="block md:hidden w-[350px] px-2 mt-6">
      <div className="flex items-center justify-between bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex items-center justify-center text-gray-500 px-4 py-2 w-[200px]">
          <CiSearch className="mr-2 text-lg" />
          <input
            type="text"
            placeholder="Select for the job"
            className="w-full outline-none bg-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button type="submit" className="flex items-center justify-center bg-[#2E5F5C] text-white px-4 py-2 w-1/2">
          <CiSearch className="mr-2 text-lg" />
          Search
        </button>
      </div>
    </form>
  );
};
const JobLocations = () => {
  const locations = [
    { name: "PARIS", img: "/america1.png" },
    { name: "INDIA", img: "/america1.png" },
    { name: "GERMANY", img: "/usa.png" },
    { name: "USA", img: "/usa.png" },
    { name: "UAE", img: "/uae.png" },
    { name: "CANADA", img: "/germany2.png" },
    { name: "AUSTRALIA", img: "/usa.png" },
    { name: "BRAZIL", img: "/america1.png" },
    { name: "JAPAN", img: "/usa.png" },
    { name: "CHINA", img: "/america1.png" },
    { name: "UK", img: "/usa.png" },
    { name: "SPAIN", img: "/america1.png" },
    { name: "PARIS", img: "/america1.png" },
    { name: "INDIA", img: "/america1.png" },
    { name: "GERMANY", img: "/usa.png" },
    { name: "USA", img: "/usa.png" },
    { name: "UAE", img: "/uae.png" },
    { name: "CANADA", img: "/germany2.png" },
    { name: "AUSTRALIA", img: "/usa.png" },
    { name: "BRAZIL", img: "/america1.png" },
    { name: "BERLIN", img: "/usa.png" },
    { name: "MALCOVA", img: "/america1.png" },
    { name: "MALVIS", img: "/usa.png" },
    { name: "SWEEDAN", img: "/america1.png" },
  ];

  const [index, setIndex] = useState(0);
  const itemsPerSlide = 6;
  const totalSlides = Math.ceil(locations.length / itemsPerSlide);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center w-full px-5 py-6 overflow-hidden">
      <div className="relative flex items-center w-full max-w-4xl">
        {/* Left Arrow */}
        <button onClick={prevSlide} className="absolute left-0 z-10 p-2  rounded-full shadow-md">
          <FaArrowLeft size={24} />
        </button>

        {/* Slider Container */}
        <div className="flex overflow-hidden w-full px-10">
          <div
            className="flex transition-transform ease-in-out duration-700 ml-30 md:ml-0  gap-2 md:gap-4"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="flex min-w-full gap-2 md:gap-5 px-3">
                {locations.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((loc) => (
                  <div key={loc.name} className="flex flex-col  px-4 ml-2  md:ml-2 items-center  md:min-w-[100px] overflow-hidden">
                    <Link href="/country/CountryPresence">
                      <Image src={loc.img} alt={loc.name} width={50} height={50} className=" w-10 h-10   md:w-16 md:h-16" />
                    </Link>
                    <p className="text-xs mt-1">{loc.name}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button onClick={nextSlide} className="absolute right-0 z-10 p-2  rounded-full shadow-md">
          <FaArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;