"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { FaBars, FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';
import { FiChevronDown, FiChevronLeft, FiChevronRight, FiChevronUp } from "react-icons/fi";


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

    Cookies.remove('jwt');
    return response.data;
  } catch (error: any) {
    console.error("Logout error:", error.response?.data || error.message);
    return { success: false, message: error.response?.data?.message || "Something went wrong" };
  }
};



const HeroSection = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");


  const token = Cookies.get('token');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Navigating with search query:", searchQuery);
      router.push(`/jobseeker/joblisting?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex flex-col items-center overflow-hidden text-white px-12 pt-[30px] md:pt-[150px]"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <NavBar />
      <div className="w-full justify-end hidden md:flex">
        <NavLinks />
      </div>


      <div className="flex flex-col items-center justify-center mt-[-30px] md:mt-0  h-full text-center px-6">
        <div className="px-80 md:px-0">
          <h1 className="text-[30px] md:text-4xl font-bold">Find Your Dream Job Today!</h1>
          <p className="text-xl md:text-lg mt-2">
            Connecting Talent with Opportunity{" "}
            <span className="block md:inline">Your Gateway to Career Success</span>
          </p>
        </div>



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

  const token = Cookies.get('jwt');



  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-10 md:px-10 md:py-7">
      <div className="flex  items-center mt-[-40px]">
        <Image
          src="/blacklogo.png"
          alt="Gulfaar Mobile Logo"
          width={120}
          height={50}
          className="py-10 md:py-0 h-auto block md:hidden filter invert"
        />

        <Image
          src="/secondhead.png"
          alt="Gulfaar Logo"
          width={215}
          height={80}
          className="hidden md:block lg:block  md:mt-14 w-[120px] md:w-[215px] h-auto"
        />
      </div>

      <div className="flex justify-end mt-[-40px] gap-2 md:hidden lg:hidden">

        <button
          className="text-white text-2xl"
          onClick={() => setIsModalOpen(true)}
        >
          <FaBars />
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-98 z-50 overflow-y-auto scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent">

          <div className="fixed top-10 left-8 z-50 h-10 w-auto">
            <Image
              src="/blacklogo.png"
              alt="Company Logo"
              width={120}
              height={50}
              priority
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
            <div className="w-full flex flex-col space-y-3  px-10">
              <Link href="/jobseeker/login" onClick={() => setIsModalOpen(false)}>
                <button className="w-full bg-[#2E5F5C] px-4 py-2 mt-2 rounded-lg text-white text-xl hover:opacity-90 transition">
                  Jobseeker
                </button>
              </Link>
              <Link href="/employer/signup" onClick={() => setIsModalOpen(false)}>
                <button className="w-full bg-[#2E5F5C]  corsou px-4 py-2 mt-2 rounded-lg text-white text-xl hover:opacity-90 transition">
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

      <div className="hidden w-full justify-end mt-[-30px] md:flex gap-2 md:gap-4">
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


        {token && (
          <Link href="/jobseeker/login">
            <button onClick={Logout} className="cursor-pointer md:px-2 py-2 rounded-lg text-white text-sm md:text-base">
              Logout
            </button>
          </Link>
        )}
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
    { name: "INDIA", img: "/india.png" },
    { name: "GERMANY", img: "/germany2.png" },
    { name: "USA", img: "/usa.png" },
    { name: "UAE", img: "/uae.png" },
    { name: "CANADA", img: "/canda.png" },
    { name: "AUSTRALIA", img: "/austraila2.png" },
    { name: "BRAZIL", img: "/brazil.png" },
    { name: "JAPAN", img: "/japan.png" },
    { name: "CHINA", img: "/china.png" },
    { name: "BERLIN", img: "/berlin.png" },
    { name: "MALCOVA", img: "/america1.png" },
    { name: "MALVIS", img: "/usa.png" },
    { name: "SWEEDAN", img: "/america1.png" },
    { name: "QATAR", img: "/qatar.png" },
  ];

  const duplicatedLocations = [...locations, ...locations]; // for infinite scroll effect

  return (
    <div className="relative flex flex-col items-center w-full px-5 py-6 overflow-hidden">
      <div className="w-[950px] overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {duplicatedLocations.map((loc, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center min-w-[90px] md:min-w-[120px] px-2 md:px-4 cursor-pointer"
            >

              <Link
                href={{
                  pathname: "/country/CountryPresence",
                  query: { county: loc.name },
                }}
              >
                <Image
                  src={loc.img}
                  alt={loc.name}
                  width={50}
                  height={50}
                  className="w-10 h-10 md:w-16 md:h-16 hover:scale-110 transition-transform duration-300"
                />
              </Link>
              <p className="text-xs mt-1">{loc.name}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};



export default HeroSection;