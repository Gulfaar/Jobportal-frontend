'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ResumeBuilderStep = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="flex items-center w-full max-w-[900px]">
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Profile Section */}
          <div className="flex items-center mb-6 bg-white p-4 rounded-xl shadow-md w-[40%]">
            <Image
              src="/images/profile.svg"
              alt="User Profile"
              width={60}
              height={60}
              className="rounded-full mr-4 object-cover"
            />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Amanda Rawles</h2>
              <p className="text-sm text-gray-500">alcsrawles@gmail.com</p>
            </div>
          </div>

          {/* Nested Flex Container for Content and Sidebar */}
          <div className="flex flex-1 w-full">
            {/* Main Content Div */}
            <div className="bg-[#3F615F] rounded-lg p-4 overflow-y-auto flex-1 max-w-[600px] max-h-[400px] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
              <div className="space-y-4">
                {/* Activities Section */}
                <div className="bg-white p-5 rounded-xl shadow-md border border-gray-300">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-base font-semibold text-gray-800">Activities</h3>
                    <svg
                      className="w-5 h-5 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Demonstrate that you are a well-rounded individual by showcasing the ability to balance various aspects of your life.
                  </p>
                </div>

                {/* Awards Section */}
                <div className="bg-white p-5 rounded-xl shadow-md border border-gray-300">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-base font-semibold text-gray-800">Awards, Accomplishments, and Honors</h3>
                    <svg
                      className="w-5 h-5 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Did you earn awards, surpass targets, secure a leadership role, or receive any form of recognition?
                  </p>
                </div>

                {/* Certifications Section */}
                <div className="bg-white p-5 rounded-xl shadow-md border border-gray-300">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-base font-semibold text-gray-800">Certifications and Licenses</h3>
                    <svg
                      className="w-5 h-5 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Enhance your resume with impressive credentials that demonstrate your expertise in your field.
                  </p>
                </div>
              </div>
            </div>

            {/* Step Sidebar */}
            <div className="flex flex-col items-center justify-center space-y-4 ml-6">
              {[1, 2, 3, 4, 5, 6].map((step) => (
                <div
                  key={step}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold transition-all duration-300 ${
                    step === 6
                      ? "bg-[#FF6F61] text-white"
                      : "border-2 border-[#FF6F61] text-[#FF6F61] bg-transparent"
                  }`}
                >
                  {step}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6 w-full">
            <button className="px-4 py-2 border border-red-400 text-red-400 rounded-lg hover:bg-red-50">
              Back
            </button>
            <Link href="/CandidateBoarding/Step12">
            <button className="px-4 py-2 bg-red-400 text-white rounded-lg hover:bg-red-500">
              Continue
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilderStep;