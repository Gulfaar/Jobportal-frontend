import PageHeaders from '@/app/Components/PageHeaders/PageHeaders'
import Image from 'next/image'
import React from 'react'

const TailoredCandidatesPage = () => {
  return (
    <div className="bg-white w-full max-w-[100vw] overflow-x-hidden m-auto px-4 py-8">
      
      
      {/* Mobile Hero Section - visible only on mobile */}
      <div className="md:hidden w-full bg-white border-b border-gray-200 py-6 mb-12">
        <div className="container mx-auto px-4 items-center">
          <p className="text-gray-700 text-[11px] ml-6 leading-normal">
            At Gulfaar, we deliver top talent through AI-powered<br />
            <span className="inline-block ml-6">pre-interviews and smart matching</span>
          </p>
        </div>
      </div>
      
      {/* Desktop Hero Section - hidden on mobile */}
      <div className="hidden md:flex flex-col m-36 md:flex-row items-center justify-between gap-8 mb-12">
        <div className="flex-1">
          <p className="text-gray-400 text-3xl m-20">
            At Gulfaar, we deliver top talent through AI-powered{' '}
            <br />
            <span className="inline-block ml-[120px]">pre-interviews and smart matching</span>
          </p>
        </div>
        <div className="relative w-[240px] h-[240px] md:w-[320px] md:h-[320px]">
          <Image 
            src='/robottailored.png' 
            alt='AI Recruitment Robot' 
            height={240}
            width={240}
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* GULFAAR Intro Section */}
      {/* Desktop version */}
      <div className="hidden md:block bg-[#96AEAD] w-full rounded-lg p-16 mb-12 relative">
        <div className="flex justify-center mb-10">
          <Image
            src="/gulfaarvector.png"
            alt="GULFAAR"
            width={400}
            height={100}
            className="object-contain"
            priority
          />
        </div>
        <div className="flex justify-center">
          <div className="w-[1080px]">
            <p className="text-white text-[30px] leading-[1.1] font-wide tracking-normal px-4">
              At Gulfaar, we don't just provide a database of candidates we deliver the right<br />
              talent through AI powered pre-video interviews and intelligent talent-matching.<br />
              <span style={{ wordSpacing: '5px' }}>
                Our advanced AI screening ensures that every candidate is pre-assessed
              </span><br />
              based on skills, experience, personality, and job-specific aptitude, saving time<br />
              recruiters valuable time while ensuring the best possible hire
            </p>
          </div>
        </div>
      </div>

      {/* Mobile version */}
      <div className=" md:hidden bg-[#96AEAD] w-full rounded-lg p-8 mb-12 relative">
        <div className="flex justify-center mb-6">
          <Image
            src="/gulfaarvector.png"
            alt="GULFAAR"
            width={200}
            height={50}
            className="object-contain"
            priority
          />
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-[300px]">
            <p className="text-white text-[10px] ml-6 leading-[1.8] px-4">
              At Gulfaar, we don't just provide a database of<br />
              candidates we deliver the right talent through <br />
              AI powered pre-video interviews and intelligent<br />
              talent-matching. Our advanced AI screening<br />
              ensures that every candidate is pre-assessed<br />
              based on skills, experience, personality, and<br />
              job-specific aptitude, saving recruiters valuable<br />
              time while ensuring the best possible hire
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full border-t border-b border-gray-200 py-10 mb-12">
        <div className="container mx-auto">
          {/* Desktop layout */}
          <div className="hidden md:flex flex-row justify-between items-center max-w-[1400px] mx-auto">
            <div className="w-[45%] ml-20">
              <ul className="space-y-12">
                <li className="flex items-start gap-6">
                  <div className="mt-2 w-8 h-8 flex-shrink-0">
                    <Image 
                      src='/Polygon.png' 
                      alt='Green Triangle' 
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-[22px] leading-tight text-gray-800 font-normal">
                    AI generates performance scores (out of<br/>
                    10) based on aptitude, skills, and<br/>
                    personality fit.
                  </p>
                </li>
                <li className="flex items-start gap-6">
                  <div className="mt-2 w-8 h-8 flex-shrink-0">
                    <Image 
                      src='/Polygon.png' 
                      alt='Green Triangle' 
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-[22px] leading-tight text-gray-800 font-normal">
                    Top candidates are automatically<br/>
                    shortlisted, reducing manual<br/>
                    screening efforts.
                  </p>
                </li>
              </ul>
            </div>
            <div className="w-[45%] flex justify-end mr-20">
              <div className="relative w-[400px] h-[300px]">
                <Image
                  src="/computertailored.png"
                  alt="Candidate at Computer"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Mobile layout */}
          <div className="md:hidden flex flex-col px-4">
            <ul className="space-y-8">
              <li className="flex items-start gap-3">
                <div className="mt-0.5 w-3 h-3 flex-shrink-0">
                  <Image 
                    src='/Polygon.png' 
                    alt='Green Triangle' 
                    width={12}
                    height={12}
                    className="object-contain"
                  />
                </div>
                <p className="text-[11px] leading-tight text-gray-800 font-normal">
                  AI generates performance scores (out of 10) based<br/>
                  on aptitude, skills, and personality fit.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 w-3 h-3 flex-shrink-0">
                  <Image 
                    src='/Polygon.png' 
                    alt='Green Triangle' 
                    width={12}
                    height={12}
                    className="object-contain"
                  />
                </div>
                <p className="text-[11px] leading-tight text-gray-800 font-normal">
                  Top candidates are automatically shortlisted,<br/>
                  reducing manual screening efforts.
                </p>
              </li>
            </ul>
            <div className="mt-8">
              <div className="relative w-full h-[200px]">
                <Image
                  src="/computertailored.png"
                  alt="Candidate at Computer"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How We Find & Screen Section */}
      <div className="bg-[#96AEAD] w-full rounded-lg p-8 md:p-14 mb-12">
        <h2 className="text-white text-[24px] md:text-[48px] font-semibold text-center mb-8 md:mb-16">
          How We Find & Screen the Right Talent for You
        </h2>
        {/* Desktop layout */}
        <div className="hidden md:flex flex-row justify-between items-center gap-20">
          <div className="relative w-[600px] h-[400px]">
            <Image
              src="/resume-screening.svg"
              alt="Screening Process"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex-1">
            <p className="text-white text-[32px] leading-[1.3] mb-12">
              We analyze your job requirements, preferred skill <br/>
              sets, and industry specific needs.
            </p>
            <p className="text-white text-[32px] leading-[1.2]">
              AI-powered job matching ranks candidates based <br/>
              on relevance to your criteria.
            </p>
          </div>
        </div>
        {/* Mobile layout */}
        <div className="md:hidden flex flex-col space-y-6">
          <p className="text-white text-[11px] leading-tight">
            We analyze your job requirements, preferred<br/>
            skill sets, and industry specific needs.
          </p>
          <p className="text-white text-[11px] leading-tight">
            AI-powered job matching ranks candidates<br/>
            based on relevance to your criteria.
          </p>
        </div>
      </div>

      {/* Who We Recruit Section */}
      <div className="w-full py-8 md:py-16 relative">
        {/* Desktop version - with floating illustration */}
        <div className="hidden md:block absolute right-8 lg:right-20 top-20 w-[35%] max-w-[450px] h-[450px] bg-[#FFF2F2] rounded-lg p-6">
          <div className="relative w-full h-full">
            <Image
              src="/frametailored.png"
              alt="Job search illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Section Heading */}
        <h2 className="text-center text-[#EC7777] text-2xl md:text-5xl font-medium mb-8 md:mb-16">
          Who We Recruit?
        </h2>

        {/* Desktop Content */}
        <div className="hidden md:block max-w-7xl mx-auto px-4">
          <div className="w-[60%]">
            <div className="grid grid-cols-2 gap-x-16 gap-y-10">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 flex-shrink-0">
                  <Image
                    src="/workertailored.png"
                    alt="Engineering icon"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-800 text-lg">
                  Engineers, Electricians, mechanics, construction workers.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 flex-shrink-0">
                  <Image
                    src="/tailoredicon.png"
                    alt="Professional icon"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-800 text-lg">
                  IT experts, financial analysts, HR managers, marketing professionals.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 flex-shrink-0">
                  <Image
                    src="/medicalteamtailored.png"
                    alt="Medical icon"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-800 text-lg">
                  Nurses, doctors, caregivers, medical assistants.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 flex-shrink-0">
                  <Image
                    src="/hospitaltailored.png"
                    alt="Hospitality icon"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-800 text-lg">
                  Hospitality & Retail Experts Hotel staff, customer service, retail managers.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 flex-shrink-0">
                  <Image
                    src="/logisticstailored.png"
                    alt="Logistics icon"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-800 text-lg">
                  Logistics & Transportation Drivers, warehouse workers, supply chain managers.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 flex-shrink-0">
                  <Image
                    src="/freelancetailored.png"
                    alt="Freelance icon"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-800 text-lg">
                  Freelancers, contract staff, and project-based specialists.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Content */}
        <div className="md:hidden px-4">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="mt-1 w-6 h-6 flex-shrink-0">
                <Image
                  src="/workertailored.png"
                  alt="Engineering icon"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-800 text-[11px]">
                Engineers, Electricians, mechanics, construction workers.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 w-6 h-6 flex-shrink-0">
                <Image
                  src="/tailoredicon.png"
                  alt="Professional icon"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-800 text-[11px]">
                IT experts, financial analysts, HR managers, marketing professionals.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 w-6 h-6 flex-shrink-0">
                <Image
                  src="/medicalteamtailored.png"
                  alt="Medical icon"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-800 text-[11px]">
                Nurses, doctors, caregivers, medical assistants.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 w-6 h-6 flex-shrink-0">
                <Image
                  src="/hospitaltailored.png"
                  alt="Hospitality icon"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-800 text-[11px]">
                Hospitality & Retail Experts Hotel staff, customer service, retail managers.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 w-6 h-6 flex-shrink-0">
                <Image
                  src="/logisticstailored.png"
                  alt="Logistics icon"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-800 text-[11px]">
                Logistics & Transportation Drivers, warehouse workers, supply chain managers.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 w-6 h-6 flex-shrink-0">
                <Image
                  src="/freelancetailored.png"
                  alt="Freelance icon"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-800 text-[11px]">
                Freelancers, contract staff, and project-based specialists.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <section className="w-full bg-[#E07171] py-8 md:py-16 px-4 md:px-8">
        {/* Heading */}
        <h2 className="text-white text-xl md:text-5xl font-medium text-center mb-6 md:mb-12">
          Why Choose Gulfaar&apos;s AI-Powered Recruitment
        </h2>

        {/* Desktop Cards Container */}
        <div className="hidden md:grid max-w-6xl mx-auto grid-cols-2 gap-8">
          {/* Desktop Card 1 */}
          <div className="bg-white rounded-xl p-8 flex items-start">
            <div className="w-14 h-14 mr-6 flex-shrink-0">
              <Image 
                src="/clock.png" 
                alt="Clock Icon" 
                width={56}
                height={56}
                className="object-contain"
              />
            </div>
            <h3 className="text-gray-800 text-2xl font-medium pt-2">
              Faster & Smarter Shortlisting
            </h3>
          </div>

          {/* Desktop Card 2 */}
          <div className="bg-white rounded-xl p-8 flex items-start">
            <div className="w-14 h-14 mr-6 flex-shrink-0">
              <Image 
                src="/tailoredmeasure.png" 
                alt="Scale Icon" 
                width={56}
                height={56}
                className="object-contain"
              />
            </div>
            <h3 className="text-gray-800 text-2xl font-medium pt-2">
              Objective & Bias-Free Evaluation
            </h3>
          </div>

          {/* Desktop Card 3 */}
          <div className="bg-white rounded-xl p-8 flex items-start">
            <div className="w-14 h-14 mr-6 flex-shrink-0">
              <Image 
                src="/briefcase.png" 
                alt="Briefcase Icon" 
                width={56}
                height={56}
                className="object-contain"
              />
            </div>
            <h3 className="text-gray-800 text-2xl font-medium pt-2">
              Industry-Specific Screening
            </h3>
          </div>

          {/* Desktop Card 4 */}
          <div className="bg-white rounded-xl p-8 flex items-start">
            <div className="w-14 h-14 mr-6 flex-shrink-0">
              <Image 
                src="/computerworker.png" 
                alt="Verified Icon" 
                width={56}
                height={56}
                className="object-contain"
              />
            </div>
            <h3 className="text-gray-800 text-2xl font-medium pt-2">
              Pre-Screened & Verified Candidates
            </h3>
          </div>
        </div>

        {/* Mobile Cards Container */}
        <div className="md:hidden space-y-3">
          {/* Mobile Card 1 */}
          <div className="bg-white/90 rounded-lg p-4 flex items-center">
            <div className="w-6 h-6 mr-3 flex-shrink-0">
              <Image 
                src="/clock.png" 
                alt="Clock Icon" 
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            <p className="text-gray-800 text-[11px]">
              Faster & Smarter Shortlisting
            </p>
          </div>

          {/* Mobile Card 2 */}
          <div className="bg-white/90 rounded-lg p-4 flex items-center">
            <div className="w-6 h-6 mr-3 flex-shrink-0">
              <Image 
                src="/tailoredmeasure.png" 
                alt="Scale Icon" 
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            <p className="text-gray-800 text-[11px]">
              Objective & Bias-Free Evaluation
            </p>
          </div>

          {/* Mobile Card 3 */}
          <div className="bg-white/90 rounded-lg p-4 flex items-center">
            <div className="w-6 h-6 mr-3 flex-shrink-0">
              <Image 
                src="/briefcase.png" 
                alt="Briefcase Icon" 
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            <p className="text-gray-800 text-[11px]">
              Industry-Specific Screening
            </p>
          </div>

          {/* Mobile Card 4 */}
          <div className="bg-white/90 rounded-lg p-4 flex items-center">
            <div className="w-6 h-6 mr-3 flex-shrink-0">
              <Image 
                src="/computerworker.png" 
                alt="Verified Icon" 
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            <p className="text-gray-800 text-[11px]">
              Pre-Screened & Verified Candidates
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TailoredCandidatesPage
