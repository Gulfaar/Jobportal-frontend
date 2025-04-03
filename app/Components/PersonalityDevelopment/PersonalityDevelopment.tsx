"use client"

import Image from 'next/image';
import React, { useState } from 'react';

type TabKey = 'communication' | 'career' | 'confident' | 'personal' | 'leadership';

const PersonalityDevelopment = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('communication'); // Default active tab

  // Tab content data
  const tabContents: Record<TabKey, string[]> = {
    communication: [
      "Mastering Verbal & Non-Verbal Communication",
      "Overcoming Stage Fear & Public Speaking Techniques",
      "Effective Presentation & Storytelling Skills",
      "Business Communication & Workplace Etiquette"
    ],
    career: [
      "Building Self-Confidence & Positive Thinking",
      "Overcoming Fear, Anxiety & Social Hesitations",
      "Stress Management & Emotional Resilience",
      "Goal Setting & Time Management"
    ],
    confident: [
      "Building Self-Confidence & Positive Thinking",
      "Overcoming Fear, Anxiety & Social Hesitations",
      "Stress Management & Emotional Resilience",
      "Goal Setting & Time Management"
    ],
    personal: [
      "Personal Brand Development",
      "Online Presence Management",
      "Professional Image Building",
      "Networking Skills Enhancement"
    ],
    leadership: [
      "Leadership Style Development",
      "Team Management Skills",
      "Decision Making & Problem Solving",
      "Strategic Thinking & Planning"
    ]
  };

  return (
    <div >

      {/* Existing "Why Personality Development Matters?" Section */}
      <section className="py-16">
        <h2 className="text-[48px] font-semibold text-[#2E5F5C] text-center mb-12">
          Why Personality Development Matters ?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
          {/* Card 1 */}
          <div className="bg-[#204E47] p-6 rounded-lg">
            <div className="flex items-start gap-3">
              <Image
                src="/personalityspeakericon.svg"
                alt="Microphone icon"
                width={24}
                height={24}
                className="mt-1"
              />
              <div>
                <h3 className="text-white text-[24px] font-semibold mb-2">Enhances Communication</h3>
                <p className="text-white text-[20px]">Learn to articulate your thoughts effectively</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#204E47] p-6 rounded-lg">
            <div className="flex items-start gap-3">
              <Image
                src="/personalityspeakericon.svg"
                alt="Microphone icon"
                width={24}
                height={24}
                className="mt-1"
              />
              <div>
                <h3 className="text-white text-[24px] font-semiboldmb-2">Improves EQ</h3>
                <p className="text-white text-[20px]">Build better relationships and handle challenges</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#204E47] p-6 rounded-lg">
            <div className="flex items-start gap-3">
              <Image
                src="/personalityspeakericon.svg"
                alt="Microphone icon"
                width={24}
                height={24}
                className="mt-1"
              />
              <div>
                <h3 className="text-white text-[24px] font-semibold mb-2">Develops Leadership</h3>
                <p className="text-white text-[20px]">Stand out as a leader in your industry</p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#204E47] p-6 rounded-lg">
            <div className="flex items-start gap-3">
              <Image
                src="/personalityspeakericon.svg"
                alt="Microphone icon"
                width={24}
                height={24}
                className="mt-1"
              />
              <div>
                <h3 className="text-white text-[24px] font-semibold mb-2">Refines Etiquette</h3>
                <p className="text-white text-[20px]">Master workplace ethics and behavior</p>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-[#204E47] p-6 rounded-lg">
            <div className="flex items-start gap-3">
              <Image
                src="/personalityspeakericon.svg"
                alt="Microphone icon"
                width={24}
                height={24}
                className="mt-1"
              />
              <div>
                <h3 className="text-white text-[24px] font-semibold mb-2">AI-Powered Learning</h3>
                <p className="text-white text-[20px]">Personalized training and instant feedback</p>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-[#204E47] p-6 rounded-lg">
            <div className="flex items-start gap-3">
              <Image
                src="/personalityspeakericon.svg"
                alt="Microphone icon"
                width={24}
                height={24}
                className="mt-1"
              />
              <div>
                <h3 className="text-white text-[24px] font-semibold mb-2">Boosts Confidence</h3>
                <p className="text-white text-[20px]">Overcome self-doubt and develop a strong, positive presence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Enhancement Section */}
      <section className="bg-[#204E47] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* First Row: Heading + First Card */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 mb-8">
              {/* Main Heading */}
              <div className="lg:w-1/2">
                <h2 className="text-[48px] font-semibold text-white leading-tight">
                  How AI Enhances Personality Development at Gulfaar?
                </h2>
              </div>

              {/* First Card */}
              <div className="lg:w-1/2">
                <div className="bg-white rounded-[20px] p-8 h-full">
                  <h3 className="text-[24px] font-semibold text-[#204E47] mb-4">
                    Real-Time Speech Analysis
                  </h3>
                  <p className="text-[#204E47] text-[16px] leading-relaxed">
                    AI evaluates your tone, clarity, and confidence, offering instant suggestions for improvement.
                  </p>
                </div>
              </div>
            </div>

            {/* Second Row: Three Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 2 */}
              <div className="bg-white rounded-[20px] p-8">
                <h3 className="text-[24px] font-semibold text-[#204E47] mb-4">
                  AI-Based Personal Coaching
                </h3>
                <p className="text-[#204E47] text-[16px] leading-relaxed">
                  Practice presentations with AI feedback to refine your storytelling skills.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-[20px] p-8">
                <h3 className="text-[24px] font-semibold text-[#204E47] mb-4">
                  Behavioral Assessment
                </h3>
                <p className="text-[#204E47] text-[16px] leading-relaxed">
                  AI analyzes responses in mock scenarios to enhance leadership and problem-solving skills.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-[20px] p-8">
                <h3 className="text-[24px] font-semibold text-[#204E47] mb-4">
                  Personalized Roadmap
                </h3>
                <p className="text-[#204E47] text-[16px] leading-relaxed">
                  Our AI-powered platform provides customized learning experiences, adapting to your strengths and weaknesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Personality Development Programs Section */}
      <section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row items-start justify-between max-w-6xl mx-auto">
      {/* Left Side - Heading */}
      <div className="w-full md:w-2/3 mt-16 md:mt-36">
        <h2 className="text-3xl md:text-[48px] font-semibold text-[#204E47]">
          <span className="ml-2  md:ml-22">Our Personality</span>
          <br />
          <span>Development Programs</span>
        </h2>
      </div>

      {/* Right Side - Tabs and Content */}
      <div className="w-full md:w-3/5 mt-8 md:mt-0">
        <div className="flex flex-col md:flex-row">
          {/* Left Column - Tabs */}
          <div className="w-full md:w-[250px] flex flex-col">
            <button 
              onClick={() => setActiveTab('communication')}
              className={`w-full text-left px-4 md:px-6 py-2 md:py-4 rounded-l-xl whitespace-nowrap ${
                activeTab === 'communication'
                  ? 'bg-white text-[#204E47] border-6 border-[#204E47]'
                  : 'bg-[#204E47] text-white'
              }`}
            >
              <span className="font-semibold text-sm md:text-[20px]">
                Communication &<br />Public Speaking
              </span>
            </button>

            <button 
              onClick={() => setActiveTab('career')}
              className={`w-full text-left px-4 md:px-6 py-2 md:py-4 mt-2 md:mt-3 rounded-l-xl whitespace-nowrap ${
                activeTab === 'career'
                  ? 'bg-white text-[#204E47] border-6 border-[#204E47]'
                  : 'bg-[#204E47] text-white'
              }`}
            >
              <span className="font-semibold text-sm md:text-[20px]">
                Career Readiness
              </span>
            </button>

            <button 
              onClick={() => setActiveTab('confident')}
              className={`w-full text-left px-4 md:px-6 py-2 md:py-4 mt-2 md:mt-3 rounded-l-xl whitespace-nowrap ${
                activeTab === 'confident'
                  ? 'bg-white text-[#204E47] border-6 border-[#204E47]'
                  : 'bg-[#204E47] text-white'
              }`}
            >
              <span className="font-semibold text-sm md:text-[20px]">
                Confident & Self-<br />Growth
              </span>
            </button>

            <button 
              onClick={() => setActiveTab('personal')}
              className={`w-full text-left px-4 md:px-6 py-2 md:py-4 mt-2 md:mt-3 rounded-l-xl whitespace-nowrap ${
                activeTab === 'personal'
                  ? 'bg-white text-[#204E47] border-6 border-[#204E47]'
                  : 'bg-[#204E47] text-white'
              }`}
            >
              <span className="font-semibold text-sm md:text-[20px]">
                Personal Branding
              </span>
            </button>

            <button 
              onClick={() => setActiveTab('leadership')}
              className={`w-full text-left px-4 md:px-6 py-2 md:py-4 mt-2 md:mt-3 rounded-l-xl whitespace-nowrap ${
                activeTab === 'leadership'
                  ? 'bg-white text-[#204E47] border-6 border-[#204E47]'
                  : 'bg-[#204E47] text-white'
              }`}
            >
              <span className="font-semibold text-sm md:text-[20px]">
                Leadership Excellence
              </span>
            </button>
          </div>

          {/* Right Column - Content */}
          <div className="flex-1 border-6  border-l-[6px] md:border-l-0 border-[#204E47] rounded-r-xl p-4 md:p-8 mt-6 md:mt-0">
            <div className="mt-4 md:mt-10">
              {tabContents[activeTab].map((content: string, index: number) => (
                <div key={index} className="flex items-start gap-2 md:gap-4 mt-4 md:mt-10 mb-2 last:mb-0">
                  <Image
                    src="/langbulleticongreen.svg"
                    alt="bullet"
                    width={14}
                    height={14}
                    className="mt-1"
                  />
                  <p className="text-[#204E47] text-[13px] md:text-[15px]">
                    {content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      

      {/* How It Works Section */}
      <section className="bg-[#FAF278] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-[48px] font-semibold text-[#204E47] text-center mb-16">
            How It Works?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#204E47] text-white flex items-center justify-center text-xl font-medium mb-6">
                1
              </div>
              <h3 className="text-[#204E47] text-xl font-semibold mb-3">
                Enroll in a Program
              </h3>
              <p className="text-[#204E47] text-[15px]">
                Select a course that fits your growth needs
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#204E47] text-white flex items-center justify-center text-xl font-medium mb-6">
                2
              </div>
              <h3 className="text-[#204E47] text-xl font-semibold mb-3">
                Learn with AI & Experts
              </h3>
              <p className="text-[#204E47] text-[15px]">
                Get trained by professionals and AI modules
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#204E47] text-white flex items-center justify-center text-xl font-medium mb-6">
                3
              </div>
              <h3 className="text-[#204E47] text-xl font-semibold mb-3">
                AI Assessment
              </h3>
              <p className="text-[#204E47] text-[15px]">
                Receive real-time feedback on your progress
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#204E47] text-white flex items-center justify-center text-xl font-medium mb-6">
                4
              </div>
              <h3 className="text-[#204E47] text-xl font-semibold mb-3">
                Practical Sessions
              </h3>
              <p className="text-[#204E47] text-[15px]">
                Participate in interactive exercises
              </p>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#204E47] text-white flex items-center justify-center text-xl font-medium mb-6">
                5
              </div>
              <h3 className="text-[#204E47] text-xl font-semibold mb-3">
                Certification
              </h3>
              <p className="text-[#204E47] text-[15px]">
                Gain credentials and ongoing mentorship
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersonalityDevelopment;