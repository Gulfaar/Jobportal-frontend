"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { FaBars, FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex flex-col items-center text-white px-6 pt-[100px] md:pt-[150px]"
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

  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center bg-transparent px-4 md:px-6 py-4">
      <div className="flex items-center">
        <img
          src="./logo.png"
          alt="Gulfaar Logo"
          className="w-[120px] md:w-[213px] h-auto"
        />
      </div>
      <div className="flex items-center gap-2 md:hidden lg:hidden">
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

      <div className="hidden md:flex gap-2 md:gap-4">
        <button className="px-3 md:px-4 py-2 rounded-lg text-white text-sm md:text-base">
          Jobseeker
        </button>
        <button className="bg-[#2E5F5C] px-3 md:px-4 py-2 rounded-lg text-white text-sm md:text-base">
          Employer
        </button>
        <button className="bg-[#2E5F5C] px-3 md:px-4 py-2 rounded-lg text-white text-sm md:text-base">
          Post Job
        </button>
      </div>
    </nav>
  );
};

const NavLinks = () => {
  return (
    <div className="flex gap-4 text-white font-[20px] w-full justify-end  relative -top-3 ">
      <Link href="/jobseeker/joblisting" className="hover:text-[#dae470]">
        Jobs
      </Link>
      <Link href="/blogs/BlogPost" className="hover:text-[#dae470]">
        Blog
      </Link>
      <Link href="#" className="hover:text-[#dae470]">
        Training
      </Link>
      <Link href="#" className="hover:text-[#dae470]">
        Work-Force Solutions
      </Link>
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
    <div className="relative flex flex-col md:flex-row bg-white w-[300px] md:w-full max-w-[400px] md:max-w-full h-auto md:h-[60px] rounded-lg mt-6 shadow-lg text-black items-center p-2 md:p-0">
      <div className="w-full flex items-center justify-between mx-2">
      <CiSearch/>
      
      <input
        type="text"
        placeholder="Select for the job"
        className="pl-4 pr-4 py-2 w-full outline-none bg-transparent h-full text-sm md:text-base border border-gray-300 rounded-lg md:rounded-none md:border-none"
      />
      </div>
      <div className="hidden md:block h-[70%] w-[1px] bg-gray-300 mx-2"></div>
      <div className="w-full flex items-center justify-between">
        <CiLocationOn/>
      <input
        type="text"
        placeholder="Country"
        className="pl-4 pr-4 py-2 w-full outline-none bg-transparent h-full text-sm md:text-base border border-gray-300 rounded-lg md:rounded-none md:border-none md:mt-0"
        
      />
      </div>
      
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

  const scrollRefWeb = useRef<HTMLDivElement | null>(null);
  const scrollRefMobile = useRef<HTMLDivElement | null>(null);

  const scrollLeft = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -150, behavior: "smooth" });
    }
  };

  const scrollRight = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 150, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Web Version (md and above) */}
      <div className="hidden md:flex gap-4 mt-6 p-4 justify-center items-center w-full">
        <button onClick={() => scrollLeft(scrollRefWeb)} className="text-white">
          <FaArrowLeft />
        </button>
        <div
          ref={scrollRefWeb}
          className="flex overflow-x-auto scroll-smooth gap-3 p-4 items-center w-full max-w-[90%] md:w-[80%] no-scrollbar"
          style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
        >
          {locations.map((loc, index) => (
            <div
              key={index}
              className="flex flex-col items-center min-w-[100px] md:min-w-[120px] overflow-x-hidden"
            >
              <Image
                src={loc.img}
                alt={loc.name}
                width={50}
                height={50}
                className="md:w-[50px] md:h-[50px]"
              />
              <p className="mt-2 text-xs md:text-base">{loc.name}</p>
            </div>
          ))}
        </div>
        <button onClick={() => scrollRight(scrollRefWeb)} className="text-white">
          <FaArrowRight />
        </button>
      </div>

      {/* Mobile Version (sm only) */}
      <div className="flex md:hidden items-center justify-between w-full px-4 py-3 bg-opacity-75 relative">
        <button onClick={() => scrollLeft(scrollRefMobile)} className="text-white">
          <FaArrowLeft />
        </button>
        <div
        
          ref={scrollRefMobile}
          className="flex gap-3 items-center overflow-x-auto no-scrollbar"
          style={{
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
            maxWidth: "80%",
          }}
        >
          {locations.slice(0, 4).map((loc, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center">
                <Image src={loc.img} alt={loc.name} width={40} height={40} />
              </div>
              <p className="text-xs mt-1">{loc.name}</p>
            </div>
          ))}
        </div>
        <button onClick={() => scrollRight(scrollRefMobile)} className="text-white">
          <FaArrowRight />
        </button>
      </div>
    </>
  );
};





export default HeroSection;


