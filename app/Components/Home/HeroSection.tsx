"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { FaBars, FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

const HeroSection = () => {
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
          <DesktopSearchBar />
        </div>

        {/* Mobile Search Bar: visible only on sm */}
        <MobileSearchBar />

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
        <button className="px-3 py-2 rounded-lg text-white text-sm">Jobseeker</button>
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
        <button className="px-3 md:px-4 py-2 rounded-lg text-white text-sm md:text-base">
          Jobseeker
        </button>
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

  return (
    <div className="flex gap-4  text-white font-[20px] w-full justify-end  md:mt-[-45px]   lg:mt-[-35px] relative -top-9 ">
       <Link href="/" className="hover:text-[#dae470]">
        Home
      </Link>
      <Link href="/jobseeker/joblisting" className="hover:text-[#dae470]">
        Jobs
      </Link>
      <Link href="/blogs/Bloglisting" className="hover:text-[#dae470]">
        Blog
      </Link>
      <div
        className="relative group"
        onMouseOver={() => setIsTrainingOpen(true)}
        onMouseLeave={() => setIsTrainingOpen(false)}
      >
      <Link href="#" className="hover:text-[#dae470]" onMouseOver={() => setIsTrainingOpen(true)} onMouseLeave={()=> setIsTrainingOpen(false)}>
        Training
      </Link>

      {isTrainingOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-gray-800 text-white rounded-lg shadow-lg p-2">
            <Link href="/training/courses" className="block px-4 py-2 hover:bg-gray-700 rounded">
             Language Training
            </Link>
            <Link href="/training/workshops" className="block px-4 py-2 hover:bg-gray-700 rounded">
              Exam Prepration
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
          <div className="absolute left-0 mt-2 w-56 bg-gray-800 text-white rounded-lg shadow-lg p-2">
            <Link href="/workforce/recruitment" className="block px-4 py-2 hover:bg-gray-700 rounded">
              Tailored Candidates
            </Link>
            <Link href="/workforce/consulting" className="block px-4 py-2 hover:bg-gray-700 rounded">
              Direct Placement
            </Link>
          </div>
        )}
        </div>

      <Link href="#" className="hover:text-[#dae470]">
        Partner with us
      </Link>
    </div>
  );
};

/* 
  This is your original search bar, but now we only show it on md+ screens.
  We renamed it to DesktopSearchBar for clarity.
*/
const DesktopSearchBar = () => {
  return (
    <div className="relative flex md:flex-row bg-white w-[700px]  max-w-[900px] md:w- h-auto md:h-[60px] rounded-lg mt-6 shadow-lg text-black items-center p-5 md:p-0">
      <div className="w-full flex  items-center mx-2">
      <CiSearch/>
      
      <input
        type="text"
        placeholder="Select for the job"
        className="flex pl-4 pr-4 py-2 w-full outline-none  bg-transparent h-full justify-center items-center text-sm md:text-base border border-gray-300 rounded-lg md:rounded-none md:border-none"
      />
      </div>
      {/* <div className="hidden md:block h-[70%] w-[1px] bg-gray-300 mx-2"></div> */}
      {/* <div className="w-full flex items-center justify-between">
        <CiLocationOn/>
      <input
        type="text"
        placeholder="Country"
        className="pl-4 pr-4 py-2 w-full outline-none bg-transparent h-full text-sm md:text-base border border-gray-300 rounded-lg md:rounded-none md:border-none md:mt-0"
        
      />
      </div> */}
      
      <button className="bg-[#2E5F5C] px-6 md:h-full flex items-center justify-center text-white rounded-lg md:rounded-lg whitespace-nowrap text-sm md:text-base w-full md:w-auto mt-2 md:mt-0">
        <CiSearch className="text-white text-lg mr-2" />
        Search Job
      </button>
    </div>
  );
};

/*
  MobileSearchBar: visible only on small screens (block md:hidden).
  Matches the "two-button" style in your provided screenshot.
*/
const MobileSearchBar = () => {
  return (
    <div className="block md:hidden w-[350px] px-2 mt-6">
      <div className="flex items-center justify-between bg-white rounded-lg shadow-md overflow-hidden">
        {/* Left "Select for the job" button */}
        <button className="flex items-center justify-center text-gray-500 px-4 py-2 w-[200px]">
          <CiSearch className="mr-2 text-lg" />
          Select for the job
        </button>
        

        {/* Right "Search Job" button */}
        <button className="flex items-center justify-center bg-white text-[#2E5F5C] px-4 py-2 w-1/2">
          <CiSearch className="mr-2 text-lg" />
          Search Job
        </button>
      </div>
    </div>
  );
};

const JobLocations = () => {
  const locations = [
    { name: "PARIS", img: "/america1.png" },
    { name: "INDIA", img: "/america1.png" },
    { name: "GERMANY", img: "/usa.png" },
    { name: "USA", img: "/usa.png" },
    { name: "UAE", img: "/uae.png" },
  ];

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (scrollRef.current instanceof HTMLElement) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current instanceof HTMLElement) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const autoScroll = () => {
      if (scrollRef.current) {
        let direction = -1;
        const interval = setInterval(() => {
          if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: direction * 2, behavior: "smooth" });
            if (scrollRef.current.scrollLeft <= 0) {
              scrollRef.current.scrollLeft = scrollRef.current.scrollWidth / 2;
            }
          }
        }, 50);
        return interval;
      }
    };

    const interval = autoScroll();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center w-full px-5 py-6 overflow-hidden">
      <div className="relative w-full flex justify-center px-5  items-center mt-4">
          {/* <button onClick={scrollLeft} className="text-white z-20 absolute left-2">
            <FaArrowLeft />
          </button> */}
        <div
          ref={scrollRef}
          className="flex  overflow-hidden whitespace-nowrap no-scrollbar w-full max-w-[80%]"
          style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
        >
          {[...locations, ...locations].map((loc, index) => (
            <div key={index} className="flex flex-col items-center min-w-[120px] overflow-hidden">
              <Link href={"/country/CountryPresence"}>
                <Image src={loc.img} alt={loc.name} width={50} height={50} className="w-12 h-12 md:w-16 md:h-16" />
              </Link>
              <p className="text-xs mt-1">{loc.name}</p>
            </div>
          ))}
        </div>
        {/* <button onClick={scrollRight} className="text-white z-10 absolute right-2">
          <FaArrowRight />
        </button> */}
      </div>

      <style>
        {`
          @keyframes infiniteScroll {
            from { transform: translateX(0%); }
            to { transform: translateX(50%); }
          }
          .animate-infinite {
            display: flex;
            animation: infiniteScroll 20s linear infinite;
          }
        `}
      </style>
    </div>
  );
};







export default HeroSection;


