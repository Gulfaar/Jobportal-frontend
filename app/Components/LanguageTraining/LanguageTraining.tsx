"use client"

import React, { useState } from 'react'
import Image from 'next/image'

const LanguageTraining = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="w-full sm:px-5">
      {/* Hero Section */}
      
      <section className="w-full max-w-[1294px] px-4 sm:px-6 md:px-6 mx-auto py-8 sm:py-10 md:py-16">
  <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10">
    
    {/* LEFT: TEXT CONTENT */}
    <div className="w-full md:w-[63%] order-1 md:order-none">
      {/* Heading */}
      <h2 className="text-xl sm:text-2xl md:text-[32px] lg:text-[36px] font-semibold text-teal-800 leading-tight">
        Unlock Your Career Potential with
      </h2>
      
      <p className="mt-2 sm:mt-3 text-xl sm:text-[26px] md:text-[36px] font-bold text-teal-800 leading-snug">
        Master Languages, Expand Opportunities, Succeed Globally
      </p>

      {/* Subheading */}
      <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-700">
        Transform Your Career with Industry-Leading Skill Development
      </p>

      {/* Description */}
      <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-black font-normal leading-relaxed">
        In today's interconnected world, language is more than just communication —<br className="hidden sm:block" />
        it's the key to unlocking global opportunities.
      </p>

      {/* CTA Button */}
      <button
        className="flex items-center gap-2 px-6 py-3 mt-6 sm:mt-8 text-xs sm:text-sm md:text-base font-medium text-white uppercase bg-teal-800 rounded-full tracking-wide hover:bg-teal-700 transition"
        aria-label="Get Started"
      >
        Get Started
        <img
          src="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/6307c969f4753633a930c857def46cbf555e5466?placeholderIfAbsent=true"
          className="w-4 h-4 object-contain"
          alt="Arrow icon"
        />
      </button>
    </div>

    {/* RIGHT: IMAGE (comes 2nd in mobile) */}
    <div className="w-full md:w-[37%] mt-6 sm:mt-0">
      <img
        src="/LANGUAGE.png"
        alt="Career development illustration"
        className="w-full object-cover rounded-3xl aspect-[4/3] sm:aspect-auto"
      />
    </div>
  </div>
</section>






      {/* AI Features Section */}
      <div className="w-full bg-[#f8f059ef] relative">
        {/* Background Image Container */}
        <div className="absolute inset-0 w-full h-full">
        <Image 
            src='/Rectanglelanguage.png' 
            alt='AI Enhancement Background' 
            fill
            className="object-cover opacity-40"
            priority
          />
          <Image 
            src='/LanguageTrainingcover2.png' 
            alt='AI Enhancement Background' 
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-5 md:px-20 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">
            How AI Enhances Language Training at Gulfaar
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            {/* Left Features List */}
            <div className="w-full md:w-3/5 space-y-8">
              {/* Feature 1 */}
              <div className="flex items-start gap-4 bg-white/80 backdrop-blur-sm rounded-xl p-6">
                <div className="w-16 h-16 rounded-full bg-[#2E6D65] flex items-center justify-center flex-shrink-0 relative">
                  <Image src='/speechicon.svg' alt='speechicon' height={8} width={8} className='object-contain w-8 h-8'/>
                </div>
                <div>
                  <h3 className="text-[18px] md:text-[24px] font-semibold mb-2 text-black">AI-Powered Speech Recognition</h3>   
                  <div className='flex  w-full'>
                  <p className="text-gray-800 text-left text-[20px]">Real-time analysis of pronunciation, fluency, and accent correction.</p>
                  </div>
                </div>
                
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4 bg-white/80 backdrop-blur-sm rounded-xl p-6">
                <div className="w-16 h-16 rounded-full bg-[#2E6D65] flex items-center justify-center flex-shrink-0 relative">
                  <Image src='/roboicon.svg' alt='speechicon' height={8} width={8} className='object-contain w-8 h-8'/>
                </div>
                <div>
                  <h3 className="text-[18px] md:text-[24px] font-semibold mb-2 text-black">Personalized AI Learning Paths</h3>
                  <p className="text-gray-800 text-[20px]">AI adapts lessons based on your progress, focusing on areas that need improvement.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex justify-start items-start gap-4 bg-white/80 backdrop-blur-sm rounded-xl p-6">
                <div className="w-16 h-16 rounded-full bg-[#2E6D65] flex items-center justify-center flex-shrink-0 relative">
                  <Image src='/messageicon.svg' alt='speechicon' height={8} width={8} className='object-contain w-8 h-8'/>
                </div>
                <div>
                  <h3 className="text-[18px] md:text-[24px] font-semibold mb-2 text-black">Live AI Conversation Practice</h3>
                  <p className="text-gray-800 text-[20px]">Engage in AI-driven conversations that simulate real-life scenarios, improving fluency and confidence.</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start gap-4 bg-white/80 backdrop-blur-sm rounded-xl p-6">
                <div className="w-16 h-16 rounded-full bg-[#2E6D65] flex items-center justify-center flex-shrink-0 relative">
                  <Image src='/performicon.svg' alt='speechicon' height={8} width={8} className='object-contain w-8 h-8'/>
                </div>
                <div>
                  <h3 className="text-[18px] md:text-[24px] font-semibold mb-2 text-black">Instant Feedback & Performance Analysis</h3>
                  <p className="text-gray-800 text-[20px]">AI evaluates your speaking, listening, and writing skills, providing actionable insights.</p>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="flex items-start gap-4 bg-white/80 backdrop-blur-sm rounded-xl p-6">
                <div className="w-16 h-16 rounded-full bg-[#2E6D65] flex items-center justify-center flex-shrink-0 relative">
                  <Image src='/exampreicon.svg' alt='speechicon' height={8} width={8} className='object-contain w-8 h-8'/>
                </div>
                <div>
                  <h3 className="text-[18px] md:text-[24px] font-semibold mb-2 text-black">AI-Based Exam Preparation</h3>
                  <p className="text-gray-800 text-[20px]">Targeted practice tests and personalized study plans for language certification exams.</p>
                </div>
              </div>
            </div>

            {/* Right Image Card */}
            <div className="w-full md:w-2/5 text-black mt-26">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center">
                  <Image src='/languagetraining2cover.png' alt='' fill className='object-cover'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Gulfaar Section */}
      <div className="w-full bg-white">
      <div className="container mx-auto px-5 md:px-20 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Why Choose Gulfaar for Language Training?
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            <span>Our comprehensive approach to language learning combines</span>
            <br />
            <span>AI technology with expert instruction for superior results.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div
            className="bg-white p-6 rounded-xl shadow-lg max-sm:shadow-[0_8px_24px_rgba(0,0,0,0.25)] max-sm:hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)] hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#2E6D65] flex items-center justify-center flex-shrink-0">
                <Image
                  src="/globalicon.svg"
                  alt="Global career icon"
                  height={8}
                  width={8}
                  className="object-contain w-8 h-8"
                />
              </div>
              <h3 className="text-xl text-black font-semibold">
                Global Career Readiness
              </h3>
            </div>
            <p className="text-gray-700 text-[20px]">
              Increase job prospects in multinational companies with language
              proficiency aligned with industry standards.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="bg-white p-6 rounded-xl shadow-lg max-sm:shadow-[0_8px_24px_rgba(0,0,0,0.25)] max-sm:hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)] hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#2E6D65] flex items-center justify-center flex-shrink-0">
                <Image
                  src="/roboicon.svg"
                  alt="AI learning icon"
                  height={8}
                  width={8}
                  className="object-contain w-8 h-8"
                />
              </div>
              <h3 className="text-xl font-semibold text-black">
                AI-Powered Learning
              </h3>
            </div>
            <p className="text-gray-700 text-[20px]">
              Personalized lessons, speech recognition, and instant feedback.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="bg-white p-6 rounded-xl shadow-lg max-sm:shadow-[0_8px_24px_rgba(0,0,0,0.25)] max-sm:hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)] hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#2E6D65] flex items-center justify-center flex-shrink-0">
                <Image
                  src="/speechicon.svg"
                  alt="Fluency icon"
                  height={8}
                  width={8}
                  className="object-contain w-8 h-8"
                />
              </div>
              <h3 className="text-xl font-semibold text-black">
                Fluency & Confidence
              </h3>
            </div>
            <p className="text-gray-700 text-[20px]">
              Speak, read, and write effectively in a new language.
            </p>
          </div>

          {/* Card 4 */}
          <div
            className="bg-white p-6 rounded-xl shadow-lg max-sm:shadow-[0_8px_24px_rgba(0,0,0,0.25)] max-sm:hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)] hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#2E6D65] flex items-center justify-center flex-shrink-0">
                <Image
                  src="/industryspecificicon.svg"
                  alt="Industry training icon"
                  height={8}
                  width={8}
                  className="object-contain w-8 h-8"
                />
              </div>
              <h3 className="text-xl font-semibold text-black">
                Industry-Specific Language Training
              </h3>
            </div>
            <p className="text-gray-700 text-[20px]">
              Tailored courses for healthcare, IT, hospitality, and other sectors
            </p>
          </div>

          {/* Card 5 */}
          <div
            className="bg-white p-6 rounded-xl shadow-lg max-sm:shadow-[0_8px_24px_rgba(0,0,0,0.25)] max-sm:hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)] hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#2E6D65] flex items-center justify-center flex-shrink-0">
                <Image
                  src="/certificicon.svg"
                  alt="Certification icon"
                  height={8}
                  width={8}
                  className="object-contain w-8 h-8"
                />
              </div>
              <h3 className="text-xl font-semibold text-black">Certification</h3>
            </div>
            <p className="text-gray-700 text-[20px]">
              Speak, read, and write effectively in a new language.
            </p>
          </div>

          {/* Card 6 */}
          <div
            className="bg-white p-6 rounded-xl shadow-lg max-sm:shadow-[0_8px_24px_rgba(0,0,0,0.25)] max-sm:hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)] hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#2E6D65] flex items-center justify-center flex-shrink-0">
                <Image
                  src="/exampreicon.svg"
                  alt="Expert trainers icon"
                  height={8}
                  width={8}
                  className="object-contain w-8 h-8"
                />
              </div>
              <h3 className="text-xl font-semibold text-black">
                Expert Trainers
              </h3>
            </div>
            <p className="text-gray-700 text-[20px]">
              Speak, read, and write effectively in a new language.
            </p>
          </div>
        </div>
      </div>
    </div>

{/* International Language Training Section */}
<div className="w-full bg-[#F4FAFA] py-12 md:py-20">
      <div className="container mx-auto px-6 md:px-16">
        {/* First row: Heading & 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 items-start">
          {/* Left Column: Heading */}
          <div className="flex flex-col mt-8 md:mt-16">
            <h2 className="text-[28px] md:text-[48px] font-semibold text-black relative pb-6 md:pb-8">
              International Language Training For Global Career & Communication
              
            </h2>
          </div>

          {/* Right Column: Two Cards in a nested grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {/* English Card */}
            <div className="bg-[#204E47] rounded-[20px] p-6 md:p-8 text-white">
              <h3 className="text-xl md:text-[28px] font-medium mb-6 md:mb-8 text-center">
                English
              </h3>
              <div className="space-y-3">
                <div className="bg-white text-[#204E47] rounded-full py-2 px-4 text-center text-base md:text-[20px]">
                  Business English
                </div>
                <div className="bg-white text-[#204E47] rounded-full py-2 px-4 text-center text-base md:text-[20px]">
                  IELTS Preparation
                </div>
                <div className="bg-white text-[#204E47] rounded-full py-2 px-4 text-center text-base md:text-[20px]">
                  TOEFL Preparation
                </div>
                <div className="bg-white text-[#204E47] rounded-full py-2 px-4 text-center text-base md:text-[20px]">
                  Conversational English
                </div>
              </div>
            </div>

            {/* Spanish Card */}
            <div className="bg-[#204E47] rounded-[20px] p-6 md:p-8 text-white">
              <h3 className="text-xl md:text-[28px] font-medium mb-6 md:mb-8 text-center">
                Spanish
              </h3>
              <div className="space-y-3">
                <div className="bg-white text-[#204E47] rounded-full py-2 px-4 text-center text-base md:text-[20px]">
                  DELE Certification
                </div>
                <div className="bg-white text-[#204E47] rounded-full py-2 px-4 text-center text-base md:text-[20px]">
                  Conversational Fluency
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second row: 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Arabic Card */}
          <div className="bg-[#204E47] rounded-[20px] p-6 md:p-8 text-white">
            <h3 className="text-xl md:text-[28px] font-medium mb-6 md:mb-8 text-center">
              Arabic
            </h3>
            <div className="space-y-3">
              <div className="bg-white text-[#204E47] rounded-full py-2 px-4 text-center text-base md:text-[20px]">
                Basics to Advanced
              </div>
              <div className="bg-white text-[#204E47] rounded-full py-2 px-4 text-center text-base md:text-[20px]">
                Business & Travel Arabic
              </div>
            </div>
          </div>

          {/* German Card */}
          <div className="bg-[#204E47] rounded-[20px] p-6 md:p-8 text-white">
            <h3 className="text-xl md:text-[28px] font-medium mb-6 md:mb-8 text-center">
              German
            </h3>
            <div className="space-y-3">
              <div className="bg-white text-[#204E47] rounded-full py-2 px-4 text-center text-base md:text-[20px]">
                A1 to C2 Levels
              </div>
              <div className="bg-white text-[#204E47] rounded-full py-2 px-4 text-center text-base md:text-[20px]">
                Goethe Certification
              </div>
              <div className="bg-white text-[#204E47] rounded-full py-2 px-4 text-center text-base md:text-[20px]">
                TELC Certification
              </div>
              <div className="bg-white text-[#204E47] rounded-full py-2 px-4 text-center text-base md:text-[20px]">
                TestDaF Preparation
              </div>
            </div>
          </div>

          {/* Mandarin Card */}
          <div className="bg-[#204E47] rounded-[20px] p-6 md:p-8 text-white">
            <h3 className="text-xl md:text-[28px] font-medium mb-6 md:mb-8 text-center">
              Mandarin
            </h3>
            <div className="space-y-3">
              <div className="bg-white text-[#204E47] rounded-full py-2 px-4 text-center text-base md:text-[20px]">
                HSK Exam Preparation
              </div>
              <div className="bg-white text-[#204E47] rounded-full py-2 px-4 text-center text-base md:text-[20px]">
                Business Mandarin
              </div>
            </div>
          </div>

          {/* French Card */}
          <div className="bg-[#204E47] rounded-[20px] p-6 md:p-8 text-white">
            <h3 className="text-xl md:text-[28px] font-medium mb-6 md:mb-8 text-center">
              French
            </h3>
            <div className="space-y-3">
              <div className="bg-white text-[#204E47] rounded-full py-2 px-4 text-center text-base md:text-[20px]">
                DELF/DALF Certification
              </div>
              <div className="bg-white text-[#204E47] rounded-full py-2 px-4 text-center text-base md:text-[20px]">
                Conversational French
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>





      {/* Regional & Work-Specific Language Training Section */}
      <div className="w-full">
      <div className="container mx-auto px-6 md:px-20 py-12 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
            Regional & Work-Specific Language
            <br />
            Training For Job Placement & Relocation
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-6">
          {/* Hospitality Card */}
          <div className="bg-[#E57373] rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-[28px] font-semibold mb-4 max-sm:text-xl">
              Hospitality & Customer Service Language
            </h3>
            <p className="text-lg max-sm:text-base max-sm:font-medium mb-6 opacity-90 max-sm:text-center">
              English, French, Arabic, German
            </p>
            <ul className="space-y-4 text-left">
              <li className="flex items-center gap-2">
                <Image
                  src="/langbulleticon.svg"
                  alt="Bullet icon"
                  height={20}
                  width={20}
                  className="w-5 h-5 rounded-full"
                />
                <span>Handling complaints and requests</span>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/langbulleticon.svg"
                  alt="Bullet icon"
                  height={20}
                  width={20}
                  className="w-5 h-5 rounded-full"
                />
                <span>Customer interaction vocabulary</span>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/langbulleticon.svg"
                  alt="Bullet icon"
                  height={20}
                  width={20}
                  className="w-5 h-5 rounded-full"
                />
                <span>Service industry terminology</span>
              </li>
            </ul>
          </div>

          {/* Healthcare Card */}
          <div className="bg-[#E57373] rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-[28px] font-semibold mb-4 max-sm:text-xl">
              Healthcare & Medical Language
            </h3>
            <p className="text-lg max-sm:text-base max-sm:font-medium mb-6 opacity-90 max-sm:text-center">
              German for Nurses, English for Doctors, Medical French
            </p>
            <ul className="space-y-4 text-left">
              <li className="flex items-center gap-2">
                <Image
                  src="/langbulleticon.svg"
                  alt="Bullet icon"
                  height={20}
                  width={20}
                  className="w-5 h-5 rounded-full"
                />
                <span>Medical terminology and procedures</span>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/langbulleticon.svg"
                  alt="Bullet icon"
                  height={20}
                  width={20}
                  className="w-5 h-5 rounded-full"
                />
                <span>Patient communication</span>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/langbulleticon.svg"
                  alt="Bullet icon"
                  height={20}
                  width={20}
                  className="w-5 h-5 rounded-full"
                />
                <span>Healthcare documentation</span>
              </li>
            </ul>
          </div>

          {/* Corporate Card */}
          <div className="bg-[#E57373] rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-[28px] font-semibold mb-4 max-sm:text-xl">
              Corporate & Business Language Skills
            </h3>
            <p className="text-lg max-sm:text-base max-sm:font-medium mb-6 opacity-90 max-sm:text-center">
              Negotiation, Email Writing, Public Speaking
            </p>
            <ul className="space-y-4 text-left">
              <li className="flex items-center gap-2">
                <Image
                  src="/langbulleticon.svg"
                  alt="Bullet icon"
                  height={20}
                  width={20}
                  className="w-5 h-5 rounded-full"
                />
                <span>Business negotiation techniques</span>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/langbulleticon.svg"
                  alt="Bullet icon"
                  height={20}
                  width={20}
                  className="w-5 h-5 rounded-full"
                />
                <span>Professional correspondence</span>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/langbulleticon.svg"
                  alt="Bullet icon"
                  height={20}
                  width={20}
                  className="w-5 h-5 rounded-full"
                />
                <span>Presentation and public speaking</span>
              </li>
            </ul>
          </div>

          {/* Construction Card */}
          <div className="bg-[#E57373] rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-[28px] font-semibold mb-4 max-sm:text-xl">
              Construction & Labor Industry Language
            </h3>
            <p className="text-lg max-sm:text-base max-sm:font-medium mb-6 opacity-90 max-sm:text-center">
              Basic Arabic, German, English for Foreign Workers
            </p>
            <ul className="space-y-4 text-left">
              <li className="flex items-center gap-2">
                <Image
                  src="/langbulleticon.svg"
                  alt="Bullet icon"
                  height={20}
                  width={20}
                  className="w-5 h-5 rounded-full"
                />
                <span>Safety instructions and procedures</span>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/langbulleticon.svg"
                  alt="Bullet icon"
                  height={20}
                  width={20}
                  className="w-5 h-5 rounded-full"
                />
                <span>Construction terminology</span>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/langbulleticon.svg"
                  alt="Bullet icon"
                  height={20}
                  width={20}
                  className="w-5 h-5 rounded-full"
                />
                <span>Basic workplace communication</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

 {/* How It Works Section */}
<div className="w-full bg-[#FFF87F]">
  <div className="container mx-auto px-5 md:px-10 lg:px-20 py-16 md:py-24">
    {/* Section Title */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
        How It Works
      </h2>
      <p className="text-lg md:text-[24px] text-gray-800 max-w-3xl mx-auto">
        Our simple 5-step process guides you from enrollment to<br/>
        language mastery and career advancement.
      </p>
    </div>

    {/* Steps Container: 2 columns on desktop, 1 column on mobile */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto text-left">
      {/* Step 1 */}
      <div className="flex items-start gap-6">
        <div className="w-14 h-14 rounded-full bg-[#2E6D65] flex items-center justify-center flex-shrink-0">
          <span className="text-2xl font-bold text-white">1</span>
        </div>
        {/* Constrain text width here */}
        <div className="max-w-md">
          <h3 className="text-xl md:text-2xl font-semibold mb-3 text-black">
            Choose Your Language
          </h3>
          <p className="text-gray-800 text-base md:text-lg">
            Select from our wide range of language programs based on your 
            career goals and interests.
          </p>
        </div>
      </div>

      {/* Step 2 */}
      <div className="flex items-start gap-6">
        <div className="w-14 h-14 rounded-full bg-[#2E6D65] flex items-center justify-center flex-shrink-0">
          <span className="text-2xl font-bold text-white">2</span>
        </div>
        <div className="max-w-md">
          <h3 className="text-xl md:text-2xl font-semibold mb-3 text-black">
            Learn with AI & Experts
          </h3>
          <p className="text-gray-800 text-base md:text-lg">
            Certified trainers and AI-driven modules guide you through 
            structured lessons tailored to your level.
          </p>
        </div>
      </div>

      {/* Step 3 */}
      <div className="flex items-start gap-6">
        <div className="w-14 h-14 rounded-full bg-[#2E6D65] flex items-center justify-center flex-shrink-0">
          <span className="text-2xl font-bold text-white">3</span>
        </div>
        <div className="max-w-md">
          <h3 className="text-xl md:text-2xl font-semibold mb-3 text-black">
            AI-Based Speech & Writing Practice
          </h3>
          <p className="text-gray-800 text-base md:text-lg">
            Get real-time feedback on pronunciation, grammar, 
            and fluency through our advanced AI system.
          </p>
        </div>
      </div>

      {/* Step 4 */}
      <div className="flex items-start gap-6">
        <div className="w-14 h-14 rounded-full bg-[#2E6D65] flex items-center justify-center flex-shrink-0">
          <span className="text-2xl font-bold text-white">4</span>
        </div>
        <div className="max-w-md">
          <h3 className="text-xl md:text-2xl font-semibold mb-3 text-black">
            Mock Tests & Certification Prep
          </h3>
          <p className="text-gray-800 text-base md:text-lg">
            AI-powered practice sessions to prepare you for 
            language proficiency exams and certifications.
          </p>
        </div>
      </div>

      {/* Step 5: Full-width row (spans 2 columns) */}
      <div className="flex items-start gap-6 md:col-span-2 max-w-2xl mx-auto">
        <div className="w-14 h-14 rounded-full bg-[#2E6D65] flex items-center justify-center flex-shrink-0">
          <span className="text-2xl font-bold text-white">5</span>
        </div>
        <div className="max-w-md">
          <h3 className="text-xl md:text-2xl font-semibold mb-3 text-black">
            Job Assistance & Relocation Support
          </h3>
          <p className="text-gray-800 text-base md:text-lg">
            Use your new language skills to enhance career opportunities 
            globally with our placement support.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Who Should Enroll Section */}
      <div className="w-full bg-gray-50">
  <div className="container mx-auto px-5 md:px-20 py-16 md:py-24">
    <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
      {/* Left Content */}
      <div className="w-full md:w-3/5 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-bold text-black mb-8 md:mb-12">
          Who Should Enroll?
        </h2>

        <div className="space-y-6 md:space-y-8">
        {[
  { title: "Job Seekers", desc: "Looking to work abroad or in multinational companies." },
  { title: "Students", desc: "Preparing for study or career opportunities in foreign countries." },
  { title: "Business Professionals", desc: "Needing corporate communication skills for international business." },
  { title: "Entrepreneurs", desc: "Expanding into international markets and building global networks." },
  { title: "Travelers & Expatriates", desc: "Looking to adapt to a new country and culture through language." }
].map((item, index) => (
  <div key={index}>
    <h3 className="text-xl sm:text-2xl font-semibold text-black mb-1">{item.title}</h3>
    <p className="text-base sm:text-lg md:text-[18px] text-gray-700">
      {item.desc}
    </p>
    {/* Centered Underline in Mobile View */}
    <div className="block md:hidden flex justify-center">
      <div className="w-24 h-0.5 bg-black mt-2 mb-4 rounded-full" />
    </div>
  </div>
))}

          
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-5/12">
        <div className="relative w-full aspect-[4/3] md:aspect-square rounded-2xl overflow-hidden bg-[#1a1a2e]">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
          <Image
            src="/languagecover3.png"
            alt="Programming Code Background"
            fill
            className="object-cover opacity-70"
          />
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Invest in Yourself Section */}
      
    </div>
  )
}

export default LanguageTraining
