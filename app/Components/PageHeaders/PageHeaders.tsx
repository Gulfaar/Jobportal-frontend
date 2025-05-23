"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const PageHeaders: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className="relative w-full h-[400px] md:h-[500px] bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: 'url("/Heroimage.png")', // Replace with your actual background image
      }}
    >
      {/* Dark overlay to make text more readable over the background */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col h-full px-6 py-4">
        
        {/* Top Row: Logo on the left, buttons on the right, burger menu on mobile */}
        <div className="flex items-center justify-between">
          {/* Logo - Larger size */}
          <div className="flex items-center">
            <Image
              src="/gulfaarlogo.png" // Replace with your actual logo
              alt="Gulfaar Logo"
              width={200}
              height={80}
              className="object-contain"
              priority
            />
          </div>

          {/* Right Side: Buttons + Burger */}
          <div className="flex items-center">
            {/* Action Buttons - Smaller size */}
            <div className="flex items-center">
              <span className="text-white text-sm px-3 py-1 font-normal mr-2">
                Jobseeker
              </span>
              <button className="bg-teal-600 text-white text-sm px-3 py-1 rounded-lg hover:bg-teal-700 transition mr-2">
                Employer
              </button>
              {/* Post Job button - visible only on desktop */}
              <button className="hidden md:block bg-teal-700 text-white text-sm px-3 py-1 rounded-lg hover:bg-teal-800 transition mr-2">
                Post Job
              </button>
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
            <button className="bg-teal-700 text-white text-sm px-3 py-1 rounded-lg hover:bg-teal-800 transition w-full mb-4">
              Post Job
            </button>
            <ul className="flex flex-col space-y-4 text-white">
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
                <Link href="#workforce" className="block text-yellow-400 hover:text-yellow-300 transition">
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
        <nav className="hidden md:flex justify-end mt-8">
          <ul className="flex items-center space-x-8 text-white font-medium">
            <li>
              <Link href="#jobs" className="hover:text-gray-200 transition">
                Jobs
              </Link>
            </li>
            <li>
              <Link href="#blog" className="hover:text-gray-200 transition">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#training" className="hover:text-gray-200 transition">
                Training
              </Link>
            </li>
            <li>
              <Link href="#workforce" className="text-yellow-400 hover:text-yellow-300 transition">
                Work-Force Solutions
              </Link>
            </li>
            <li>
              <Link href="#partner" className="hover:text-gray-200 transition">
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
            <span className="block md:hidden text-4xl leading-tight">
              Tailored<br />Candidates
            </span>
            {/* Desktop (1 line) */}
            <span className="hidden md:inline text-5xl lg:text-6xl whitespace-nowrap">
              Tailored Candidates
            </span>
          </h1>

          {/* Subheading */}
          <p className="leading-relaxed max-w-2xl mx-auto">
            {/* Mobile (2 lines) */}
            <span className="block md:hidden text-xl">
              The Right Talent,<br />Screened Smarter
              <br />
              AI-Driven Recruitment
            </span>
            {/* Desktop (1 line) */}
            <span className="hidden md:inline text-2xl lg:text-3xl">
              The Right Talent, Screened Smarter — AI-Driven Recruitment
            </span>
          </p>
        </div>
      </div>
    </header>
  )
}

export default PageHeaders

