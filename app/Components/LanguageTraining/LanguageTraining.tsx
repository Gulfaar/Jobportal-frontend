"use client"

import React, { useState } from 'react'
import Image from 'next/image'

const LanguageTraining = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="w-full sm:px-5">
      {/* Hero Section */}
      <div className="w-full bg-white">
        <div className="container mx-auto px-1 md:px-12 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            {/* Left Content */}
            <div className="w-full md:w-3/2">
            <h1 className="text-2xl md:text-[48px] font-semibold text-black leading-tight text-center md:text-left">
              <span className="block md:inline">Master Languages,</span>
              <span className="block md:inline">Expand Opportunities,</span>
              <span className="block ">Succeed Globally</span>
            </h1>
              <p className="text-lg md:text-[24px] text-gray-700 mt-2 text-center md:text-left">
                {/* Mobile: Centered paragraph */}
                <span className="block ">
                  In today's interconnected world, language is more than just communication it's the key to<br/>
                  unlocking global opportunities.
                </span>
                {/* Desktop: Specific layout with margins */}
                {/* <span className="hidden md:block">
                  <span className="inline-block ml-[150px]">In today's interconnected world, language is more than</span>
                  <br />
                  <span className=" ml-[156px]">just communication it's the key to unlocking global</span>
                  <br />
                  <span className="inline-block ml-[320px]">opportunities.</span>
                </span> */}
              </p>

              {/* <button className="mt-10 bg-[#2E6D65] text-white px-6 py-2 rounded-full hover:bg-[#245a53] transition-colors text-lg font-medium block mx-auto md:mx-0 md:ml-[330px]">
                Enroll Now
              </button> */}
            </div>

            {/* Right Image */}
            <div className="w-full md:w-[600px]">
              <div className="relative w-full aspect-[5/4] rounded-3xl overflow-hidden">
                <Image
                  src="/LANGUAGE.png"
                  alt="Language Training"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Features Section */}
      <div className="w-full bg-[#FFF87F]">
        <div className="container mx-auto px-5 md:px-20 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">
            How AI Enhances Language Training at Gulfaar
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            {/* Left Features List */}
            <div className="w-full md:w-3/5 space-y-8">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-[#2E6D65] flex items-center justify-center flex-shrink-0 relative">
                  
                  <Image src='/speechicon.svg' alt='speechicon' height={8} width={8} className=' object-contain w-8 h-8'/>
                
              </div>
                <div>
                  <h3 className="text-[24px] font-semibold mb-2 text-black ">AI-Powered Speech Recognition</h3>
                  <p className="text-gray-800 text-[20px] ">Real-time analysis of pronunciation, fluency, and accent correction.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-[#2E6D65] flex items-center justify-center flex-shrink-0 relative">
                  
                  <Image src='/roboicon.svg' alt='speechicon' height={8} width={8} className=' object-contain w-8 h-8'/>
                
              </div>
                <div>
                  <h3 className="text-[24px] font-semibold mb-2 text-black ">Personalized AI Learning Paths</h3>
                  <p className="text-gray-800 text-[20px]">AI adapts lessons based on your progress, focusing on areas that need improvement.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-[#2E6D65] flex items-center justify-center flex-shrink-0 relative">
                  
                  <Image src='/messageicon.svg' alt='speechicon' height={8} width={8} className=' object-contain w-8 h-8'/>
                
              </div>
                <div>
                  <h3 className="text-[24px] font-semibold mb-2 text-black ">Live AI Conversation Practice</h3>
                  <p className="text-gray-800 text-[20px]">Engage in AI-driven conversations that simulate real-life scenarios, improving fluency and confidence.</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start gap-4 text-black ">
                <div className="w-16 h-16 rounded-full bg-[#2E6D65] flex items-center justify-center flex-shrink-0 relative">
                  
                    <Image src='/performicon.svg' alt='speechicon' height={8} width={8} className=' object-contain w-8 h-8'/>
                  
                </div>
                <div>
                  <h3 className="text-[24px] font-semibold mb-2 text-black ">Instant Feedback & Performance Analysis</h3>
                  <p className="text-gray-800 text-[20px]">AI evaluates your speaking, listening, and writing skills, providing actionable insights.</p>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="flex items-start gap-4 ">
              <div className="w-16 h-16 rounded-full bg-[#2E6D65] flex items-center justify-center flex-shrink-0 relative">
                  
                  <Image src='/exampreicon.svg' alt='speechicon' height={8} width={8} className=' object-contain w-8 h-8'/>
                
              </div>
                <div>
                  <h3 className="text-[24px] font-semibold mb-2 text-black ">AI-Based Exam Preparation</h3>
                  <p className="text-gray-800 text-[20px]">Targeted practice tests and personalized study plans for language certification exams.</p>
                </div>
              </div>
            </div>

            {/* Right Image Card */}
            <div className="w-full md:w-2/5 text-black mt-26">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden ">
                <div className="absolute inset-0  flex flex-col items-center justify-center text-white p-8 text-center">

                  <Image src='/languagetraining2cover.png' alt='' fill  className=' '/>
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
            <p className="text-lg md:text-xl text-gray-700 ">
              <span>Our comprehensive approach to language learning combines</span><br/>
              <span>AI technology with expert instruction for superior results.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#2E6D65] flex items-center justify-center flex-shrink-0">
                <Image src='/globalicon.svg' alt='speechicon' height={8} width={8} className=' object-contain w-8 h-8'/>
                </div>
                <h3 className="text-xl text-black font-semibold">Global Career Readiness</h3>
              </div>
              <p className="text-gray-700 text-[20px]">
                Increase job prospects in multinational companies with language proficiency aligned with industry standards.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#2E6D65] flex items-center justify-center flex-shrink-0">
                <Image src='/roboicon.svg' alt='speechicon' height={8} width={8} className=' object-contain w-8 h-8'/>
                </div>
                <h3 className="text-xl font-semibold text-black">AI-Powered Learning</h3>
              </div>
              <p className="text-gray-700 text-[20px]">
                Personalized lessons, speech recognition, and instant feedback.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#2E6D65] flex items-center justify-center flex-shrink-0">
                <Image src='/speechicon.svg' alt='speechicon' height={8} width={8} className=' object-contain w-8 h-8'/>
                </div>
                <h3 className="text-xl font-semibold text-black">Fluency & Confidence</h3>
              </div>
              <p className="text-gray-700 text-[20px]">
                Speak, read, and write effectively in a new language.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#2E6D65] flex items-center justify-center flex-shrink-0">
                <Image src='/industryspecificicon.svg' alt='speechicon' height={8} width={8} className=' object-contain w-8 h-8'/>
                </div>
                <h3 className="text-xl font-semibold text-black">Industry-Specific Language Training</h3>
              </div>
              <p className="text-gray-700 text-[20px]">
                Tailored courses for healthcare, IT, hospitality, and other sectors
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#2E6D65] flex items-center justify-center flex-shrink-0">
                <Image src='/certificicon.svg' alt='speechicon' height={8} width={8} className=' object-contain w-8 h-8'/>
                </div>
                <h3 className="text-xl font-semibold text-black">Certification</h3>
              </div>
              <p className="text-gray-700 text-[20px]">
                Speak, read, and write effectively in a new language.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#2E6D65] flex items-center justify-center flex-shrink-0">
                <Image src='/exampreicon.svg' alt='speechicon' height={8} width={8} className=' object-contain w-8 h-8'/>
                </div>
                <h3 className="text-xl font-semibold text-black">Expert Trainers</h3>
              </div>
              <p className="text-gray-700 text-[20px]">
                Speak, read, and write effectively in a new language.
              </p>
            </div>
          </div>
        </div>
      </div>

{/* International Language Training Section */}
<div className="w-full bg-[#F4FAFA] py-20">
  <div className="container mx-auto px-4 md:px-16">
    {/* First row: Heading & 2 cards on the same line on desktop; stacked on mobile */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10 items-start">
      {/* Left Column: Heading */}
   
      <div className="flex flex-col mt-10 md:mt-24">
        <h2 className="text-[28px] md:text-[48px] font-semibold text-black  w-full">
          <span className="">International Language</span>
          <div className="    ">
            <span className="">Training For Global Career</span>
          </div>
          <span className="">&amp; Communication</span>
        </h2>
      </div>


      {/* Right Column: Two Cards in a nested grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* English Card */}
        <div className="bg-[#204E47] rounded-[20px] p-8 text-white">
          <h3 className="text-2xl md:text-[28px] font-medium mb-8">English</h3>
          <div className="space-y-4">
            <div className="bg-white text-[#204E47] rounded-full py-3 px-6 text-center text-[20px]">
              Business English
            </div>
            <div className="bg-white text-[#204E47] rounded-full py-3 px-6 text-center text-[20px]">
              IELTS
            </div>
            <div className="bg-white text-[#204E47] rounded-full py-3 px-6 text-center text-[20px]">
              IELTS
            </div>
            <div className="bg-white text-[#204E47] rounded-full py-3 px-6 text-center text-[20px]">
              IELTS
            </div>
          </div>
        </div>

        {/* Spanish Card */}
        <div className="bg-[#204E47] rounded-[20px] p-8 text-white">
          <h3 className="text-2xl md:text-[28px] font-medium mb-8">Spanish</h3>
          <div className="space-y-4">
            <div className="bg-white text-[#204E47] rounded-full py-3 px-6 text-center text-[20px]">
              DELE Certification
            </div>
            <div className="bg-white text-[#204E47] rounded-full py-3 px-6 text-center text-[20px]">
              Conversational Fluency
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Second row: 4 cards (Arabic, German, Mandarin, French) */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Arabic Card */}
      <div className="bg-[#204E47] rounded-[20px] p-8 text-white">
        <h3 className="text-2xl md:text-[28px] font-medium mb-8">Arabic</h3>
        <div className="space-y-4">
          <div className="bg-white text-[#204E47] rounded-full py-3 px-6 text-center text-[20px]">
            Basics to Advanced
          </div>
          <div className="bg-white text-[#204E47] rounded-full py-3 px-6 text-center text-[20px]">
            Business & Travel Arabic
          </div>
        </div>
      </div>

      {/* German Card */}
      <div className="bg-[#204E47] rounded-[20px] p-8 text-white">
        <h3 className="text-2xl md:text-[28px] font-medium mb-8">German</h3>
        <div className="space-y-4">
          <div className="bg-white text-[#204E47] rounded-full py-3 px-6 text-center text-[20px]">
            A1 to C2 Levels
          </div>
          <div className="bg-white text-[#204E47] rounded-full py-3 px-6 text-center text-[20px]">
            Goethe
          </div>
          <div className="bg-white text-[#204E47] rounded-full py-3 px-6 text-center text-[20px]">
            TELC
          </div>
          <div className="bg-white text-[#204E47] rounded-full py-3 px-6 text-center text-[20px]">
            TestDaF
          </div>
        </div>
      </div>

      {/* Mandarin Card */}
      <div className="bg-[#204E47] rounded-[20px] p-8 text-white">
        <h3 className="text-2xl md:text-[28px] font-medium mb-8">Mandarin</h3>
        <div className="space-y-4">
          <div className="bg-white text-[#204E47] rounded-full py-3 px-6 text-center text-[20px]">
            HSK Exam Preparation
          </div>
          <div className="bg-white text-[#204E47] rounded-full py-3 px-6 text-center text-[20px]">
            Business Mandarin
          </div>
        </div>
      </div>

      {/* French Card */}
      <div className="bg-[#204E47] rounded-[20px] p-8 text-white">
        <h3 className="text-2xl md:text-[28px] font-medium mb-8">French</h3>
        <div className="space-y-4">
          <div className="bg-white text-[#204E47] rounded-full py-3 px-6 text-center text-[20px]">
            DELF/DALF Certification
          </div>
          <div className="bg-white text-[#204E47] rounded-full py-3 px-6 text-center text-[20px]">
            Conversational French
          </div>
        </div>
      </div>
    </div>
  </div>
</div>





      {/* Regional & Work-Specific Language Training Section */}
      <div className="w-full bg-white">
        <div className="container mx-auto px-5 md:px-20 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
              Regional & Work-Specific Language<br />
              Training For Job Placement & Relocation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Hospitality Card */}
            <div className="bg-[#E57373] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-semibold mb-2">
                Hospitality & Customer Service Language
              </h3>
              <p className="text-lg mb-6 opacity-90">
                English, French, Arabic, German
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <Image src='/langbulleticon.svg' alt='nah' height={20} width={20} className="w-5 h-5 rounded-full "/>
                  
                  <span>Handling complaints and requests</span>
                </li>
                <li className="flex items-center gap-2">
                
                <Image src='/langbulleticon.svg' alt='nah' height={20} width={20} className="w-5 h-5 rounded-full "/>

                  <span>Customer interaction vocabulary</span>
                </li>
                <li className="flex items-center gap-2">
                <Image src='/langbulleticon.svg' alt='nah' height={20} width={20} className="w-5 h-5 rounded-full "/>

                  <span>Service industry terminology</span>
                </li>
              </ul>
            </div>

            {/* Healthcare Card */}
            <div className="bg-[#E57373] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-semibold mb-2">
                Healthcare & Medical Language
              </h3>
              <p className="text-lg mb-6 opacity-90">
                German for Nurses, English for Doctors, Medical French
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                <Image src='/langbulleticon.svg' alt='nah' height={20} width={20} className="w-5 h-5 rounded-full "/>

                  <span>Medical terminology and procedures</span>
                </li>
                <li className="flex items-center gap-2">
                <Image src='/langbulleticon.svg' alt='nah' height={20} width={20} className="w-5 h-5 rounded-full "/>

                  <span>Patient communication</span>
                </li>
                <li className="flex items-center gap-2">
                <Image src='/langbulleticon.svg' alt='nah' height={20} width={20} className="w-5 h-5 rounded-full "/>

                  <span>Healthcare documentation</span>
                </li>
              </ul>
            </div>

            {/* Corporate Card */}
            <div className="bg-[#E57373] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-semibold mb-2">
                Corporate & Business Language Skills
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Negotiation, Email Writing, Public Speaking
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                <Image src='/langbulleticon.svg' alt='nah' height={20} width={20} className="w-5 h-5 rounded-full "/>

                  <span>Business negotiation techniques</span>
                </li>
                <li className="flex items-center gap-2">
                <Image src='/langbulleticon.svg' alt='nah' height={20} width={20} className="w-5 h-5 rounded-full "/>

                  <span>Professional correspondence</span>
                </li>
                <li className="flex items-center gap-2">
                <Image src='/langbulleticon.svg' alt='nah' height={20} width={20} className="w-5 h-5 rounded-full "/>

                  <span>Presentation and public speaking</span>
                </li>
              </ul>
            </div>

            {/* Construction Card */}
            <div className="bg-[#E57373] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-semibold mb-2">
                Construction & Labor Industry Language
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Basic Arabic, German, English for Foreign Workers
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                <Image src='/langbulleticon.svg' alt='nah' height={20} width={20} className="w-5 h-5 rounded-full "/>

                  <span>Safety instructions and procedures</span>
                </li>
                <li className="flex items-center gap-2">
                <Image src='/langbulleticon.svg' alt='nah' height={20} width={20} className="w-5 h-5 rounded-full "/>

                  <span>Construction terminology</span>
                </li>
                <li className="flex items-center gap-2">
                <Image src='/langbulleticon.svg' alt='nah' height={20} width={20} className="w-5 h-5 rounded-full "/>

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
              <h3 className="text-2xl font-semibold mb-2 text-black">{item.title}</h3>
              <p className="text-lg md:text-[20px] text-gray-700">{item.desc}</p>
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
      <div className="w-full bg-white">
      <div className="container mx-auto px-5 md:px-20 py-16 md:py-24">
        <div
          className={`flex flex-col md:flex-row gap-8 md:gap-16 transition-all duration-500 ${
            showForm ? "justify-between" : "justify-center"
          }`}
        >
          {/* Left Content - Yellow Box */}
          <div
            className={`w-full md:w-1/2 bg-[#F8E449] rounded-3xl p-12 flex flex-col items-start justify-center transition-all duration-500 transform ${
              showForm ? "md:translate-x-[-50px]" : "md:translate-x-0"
            }`}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
              Invest in Yourself
            </h2>
            <p className="text-xl md:text-2xl text-black mb-8">
              You Will Grow, You Will Succeed. We Promise That
            </p>
            
              <button
                onClick={() => setShowForm(true)}
                className="bg-[#2E6D65] text-white px-8 py-3 rounded-full hover:bg-[#245a53] transition-colors text-lg font-medium flex items-center gap-2"
              >
                Join with us
                <div className="w-8 h-8 bg-white rounded-full">
                  <Image
                    src="/arrowtrainingicon.svg"
                    alt=""
                    height={20}
                    width={20}
                    className="ml-1.5 mt-2"
                  />
                </div>
              </button>
            
          </div>

          {/* Right Content - Contact Form (conditionally rendered) */}
          {showForm && (
            <div className="w-full md:w-1/2 bg-[#2E6D65] rounded-3xl p-12 transition-all duration-500">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-6 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-400"
                  />

                  {/* Contact Number Input */}
                  <input
                    type="tel"
                    placeholder="Contact number"
                    className="w-full px-6 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-400"
                  />
                </div>

                {/* Email Input */}
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full px-6 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-400"
                />

                {/* Enquiry Input */}
                <input
                  type="text"
                  placeholder="Type field of enquiry"
                  className="w-full px-6 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-400"
                />

                {/* Submit Button */}
                <button className="bg-[#E57373] text-white px-12 py-3 rounded-lg hover:bg-[#d46868] transition-colors text-lg font-medium mx-auto block">
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  )
}

export default LanguageTraining
