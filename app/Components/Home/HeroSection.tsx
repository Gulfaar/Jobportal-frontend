"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { FaBars, FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

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
      <div className="w-full flex justify-end hidden md:flex">
        <NavLinks />
      </div>

      <div className="flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-2xl md:text-4xl font-bold">Find Your Dream Job Today!</h1>
        <p className="text-sm md:text-lg mt-2">
          Connecting Talent with Opportunity:{" "}
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

  return (
    <nav className="absolute  top-0 left-0 w-full flex justify-between items-center  px-10  py-7">
      <div className="flex  mt-[-30px] items-center">
        <img
          src="./newlogo.png"
          alt="Gulfaar Logo"
          className="w-[120px] md:w-[315px]  h-auto"
        />
      </div>
      <div className="flex  items-center gap-2 md:hidden lg:hidden">
       <Link href={'/CandidateBoarding'}> <button className="px-2 py-2   rounded-lg text-white text-sm">Jobseeker</button></Link>
        <button className="bg-[#2E5F5C] px-3 py-2 rounded-lg text-white text-sm">
          Employer
        </button>
        <button className="text-white text-lg" onClick={() => setIsModalOpen(true)}>
          <FaBars />
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-10  bg-black bg-opacity-50 flex justify-end">
          <div className="bg-white w-64 h-full  px-2 flex flex-col text-black shadow-lg">
            {/* Close Button */}
            <button
              className="self-end text-2xl mb-4"
              onClick={() => setIsModalOpen(false)}
            >
  
              <FaTimes />
            </button>

            {/* Navigation Links */}
            <ul className="font-[20px] flex flex-col gap-4">
              <li>
                <a href="#" className="text-gray-900 hover:text-blue-700">
                  Jobs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-900 hover:text-blue-700">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-900 hover:text-blue-700">
                  Training
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-900 hover:text-blue-700">
                  Work-Force Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-900 hover:text-blue-700">
                  Partner with us
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}

      <div className="hidden w-full justify-end mt-[-50px] md:flex gap-2 md:gap-4">
        <Link href={'/CandidateBoarding'}>
        <button className="cursor-pointer md:px-2 py-2  rounded-lg text-white text-sm md:text-base">
          Jobseeker
        </button>
        </Link>
        <button className="bg-[#2E5F5C] mt-1 md:px-4  md:h-8 rounded-lg text-white text-sm md:text-base">
          Employer
        </button>
        {/* <button className="bg-[#2E5F5C] px-3 md:px-4 py-2 rounded-lg text-white text-sm md:text-base">
          Post Job
        </button> */}
      </div>
    </nav>
  );
};

const NavLinks = () => {

  const [isTrainingOpen, setIsTrainingOpen] = useState(false);
  const [isWorkForceOpen, setIsWorkForceOpen] = useState(false);
  const [isContract, setIsContractOpen] = useState(false)
  const [isOutsourcing,setIsOutsourcing] = useState(false)

  

  const [isRecruitmentOpen, setIsRecruitmentOpen] = useState(false)

  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isSkillDevelopement, setSkillDevelopement] = useState(false)
  const [isPersonality,setPersonality] = useState(false)
  const [Language,setLanguage] = useState(false)
  const [Exam,setExam] = useState(false)



  return (
    <div className="flex gap-4 text-white font-[20px] w-full justify-end md:mt-[-45px] lg:mt-[-35px] relative -top-9">
    <Link href="/" className="hover:text-[#dae470]">
      Home
    </Link>
    <Link href="/jobseeker/joblisting" className="hover:text-[#dae470]">
      Jobs
    </Link>
    <Link href="/blogs/Bloglisting" className="hover:text-[#dae470]">
      Blog
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
          className="absolute left-0 mt-2 w-[48] bg-[#2E5F5C] text-white rounded-lg shadow-lg p-2"
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
            className=" px-4 py-2 inline-flex whitespace-nowrap  hover:text-[#dae470] hover:bg-[#3e5f5e] rounded"
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
            href="/exam"
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
        <button type="submit" className="flex items-center justify-center bg-white text-[#2E5F5C] px-4 py-2 w-1/2">
          <CiSearch className="mr-2 text-lg" />
          Search Job
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
            className="flex transition-transform ease-in-out duration-700 gap-4"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="flex min-w-full md:gap-5 px-3">
                {locations.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((loc) => (
                  <div key={loc.name} className="flex flex-col  px-5 md:ml-2 items-center min-w-[80px] md:min-w-[100px]">
                    <Link href="/country/CountryPresence">
                      <Image src={loc.img} alt={loc.name} width={50} height={50} className="w-full h-full md:w-16 md:h-16" />
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