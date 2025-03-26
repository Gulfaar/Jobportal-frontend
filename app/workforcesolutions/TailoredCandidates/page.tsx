import PageHeaders from '@/app/Components/PageHeaders/PageHeaders'
import Image from 'next/image'
import React from 'react'

const TailoredCandidatesPage = () => {
  return (
    <div className=" bg-white w-full m-auto mx-auto px-4 py-8">
      <PageHeaders/>
      
      {/* Hero Section */}
      <div className="flex flex-col m-36 md:flex-row items-center justify-between gap-8 mb-12">
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

      <div className="bg-[#96AEAD] w-full rounded-lg p-16 mb-12 relative">
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
            <p className="text-white text-[30px] leading-[1.1]  font-wide tracking-normal px-4">
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

      {/* Features Section */}
      <div className="flex flex-col m-24 md:flex-row justify-between items-start gap-8 mb-12">
        <div className="flex-1">
          <ul className="space-y-8 mt-16">
            <li className="flex items-start gap-4">
              <Image 
                src='/Polygon 2.png' 
                alt='polygon' 
                height={15} 
                width={15} 
                className="mt-2"
              />
              <p className="text-[28px] leading-[1.2] text-gray-700">
                AI generates performance scores (out of 10)<br/>
                based on aptitude, skills, and personality fit.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <Image 
                src='/Polygon 2.png' 
                alt='polygon' 
                height={15} 
                width={15} 
                className="mt-2"
              />
              <p className="text-[28px] leading-[1.2] text-gray-700">
                Top candidates are automatically shortlisted,<br/>
                reducing manual screening efforts.
              </p>
            </li>
          </ul>
        </div>
        <div className="relative w-[400px] h-[350px] rounded-lg overflow-hidden">
          <Image
            src="/computertailored.png"
            alt="AI Interview Process"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* How We Find & Screen Section */}
      <div className="bg-[#96AEAD] w-full rounded-lg p-14 mb-12">
        <h2 className="text-white text-[48px] font-semibold text-center mb-16">
          How We Find & Screen the Right Talent for You
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-center gap-20">
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
              AI-powered job matching ranks candidates based  <br/>
              on relevance to your criteria.
            </p>
          </div>
        </div>
      </div>

      {/* Who We Recruit Section */}
      <div className="bg-white w-full py-16">
      {/* Section Heading */}
      <h2 className="text-center text-[#EC7777] text-4xl font-semibold mb-12">
        Who We Recruit?
      </h2>

      {/* Content Wrapper */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col-reverse md:flex-row items-start justify-between gap-8">
        
        {/* Left Column: Bullet Points in Two Columns */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 text-lg leading-7">
            
            {/* Column 1 */}
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                {/* Icon placeholder */}
                <Image
                  src="/workertailored.png"
                  alt="icon"
                  width={24}
                  height={24}
                  className="mt-1"
                />
                <span>Engineers, Electricians, mechanics, construction workers</span>
              </li>
              <li className="flex items-start gap-2">
                <Image
                  src="/medicalteamtailored.png"
                  alt="icon"
                  width={24}
                  height={24}
                  className="mt-1"
                />
                <span>Nurses, doctors, caregivers, medical assistants</span>
              </li>
              <li className="flex items-start gap-2">
                <Image
                  src="/logisticstailored.png"
                  alt="icon"
                  width={24}
                  height={24}
                  className="mt-1"
                />
                <span>
                  Logistics &amp; Transportation Drivers, warehouse workers, supply chain managers
                </span>
              </li>
            </ul>

            {/* Column 2 */}
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <Image
                  src="/tailoredicon.png"
                  alt="icon"
                  width={24}
                  height={24}
                  className="mt-1"
                />
                <span>IT experts, financial analysts, HR managers, marketing professionals</span>
              </li>
              <li className="flex items-start gap-2">
                <Image
                  src="/hospitaltailored.png"
                  alt="icon"
                  width={24}
                  height={24}
                  className="mt-1"
                />
                <span>
                  Hospitality &amp; Retail Experts: hotel staff, customer service, retail managers
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Image
                  src="/freelancetailored.png"
                  alt="icon"
                  width={24}
                  height={24}
                  className="mt-1"
                />
                <span>Freelancers, contract staff, and project-based specialists</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Image/Illustration */}
        <div className="w-full md:w-[40%] flex items-center justify-center">
          <div className="relative w-full h-64 md:h-[300px] lg:h-[350px]">
            <Image
              src="/frametailored.png"
              alt="Who We Recruit illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>

      {/* Why Choose Section */}
      <div>
        <h2 className="text-2xl font-semibold text-center mb-8">Why Choose Gulfaar's AI-Powered Recruitment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
            <h3 className="font-semibold mb-2">Faster & Smarter Shortlisting</h3>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
            <h3 className="font-semibold mb-2">Objective & Bias-Free Evaluation</h3>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
            <h3 className="font-semibold mb-2">Industry-Specific Screening</h3>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
            <h3 className="font-semibold mb-2">Pre-Screened & Verified Candidates</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TailoredCandidatesPage
