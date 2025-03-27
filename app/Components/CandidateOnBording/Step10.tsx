'use client';
import React, { useState } from "react";
import Image from "next/image";
import { FaPlusCircle, FaMinusCircle, FaBold, FaItalic, FaUnderline } from "react-icons/fa";

interface Summary {
  id: number;
  text: string;
}

const summaries: Summary[] = [
  {
    id: 1,
    text: "As a detail-oriented UI/UX designer, I bring a user-first approach to every project, ensuring designs are not only visually stunning but also intuitive and easy to use. With expertise in conducting user research, I create designs that resonate with people and solve real-world problems.",
  },
  {
    id: 2,
    text: "With expertise in conducting user research, I create designs that resonate with people and solve real-world problems, ensuring a seamless user experience.",
  },
  {
    id: 3,
    text: "coming in conducting user research, I create designs that resonate with people and solve real-world problems, ensuring a seamless user experience.",
  },
];

const PersonalSummary = () => {
  const [selectedSummary, setSelectedSummary] = useState<string | null>(null);

  const handleToggle = (text: string) => {
    setSelectedSummary(selectedSummary === text ? null : text);
  };

  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="flex items-center">
        {/* Main Content Area */}
        <div className="w-full max-w-[900px]">
          {/* Profile Section */}
          <div className="flex items-center mb-4">
            <Image
              src="/images/profile.svg"
              alt="User Profile"
              width={48}
              height={48}
              className="rounded-full mr-4 object-cover"
            />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Amanda Rawles</h2>
              <p className="text-sm text-gray-500">alexrawles@gmail.com</p>
            </div>
          </div>

          {/* Main Content Div */}
          <div className="bg-white rounded-lg shadow-lg w-full p-6">
            <div className="flex space-x-6">
              {/* Left Side - Search & List */}
              <div className="w-1/3 bg-[#D9E6E5] rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">PERSONAL SUMMARY</h3>
                <input
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-400 text-sm bg-white"
                  placeholder="Search by job title, industry or keyword"
                />
                <div className="mt-4 max-h-64 overflow-y-auto">
                  {summaries.map((summary) => (
                    <button
                      key={summary.id}
                      onClick={() => handleToggle(summary.text)}
                      className="flex items-start justify-between w-full bg-[#2E5E5A] text-white rounded-lg p-2 mb-2"
                    >
                      <span className="text-sm line-clamp-3 flex-1">{summary.text}</span>
                      {selectedSummary === summary.text ? (
                        <FaMinusCircle className="w-6 h-6 text-white cursor-pointer flex-shrink-0 ml-2" />
                      ) : (
                        <FaPlusCircle className="w-6 h-6 text-white cursor-pointer flex-shrink-0 ml-2" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Side - Selected Summary */}
              <div className="w-2/3 bg-[#2E5E5A] rounded-lg p-4 text-white min-h-[300px] relative">
                {/* Icons at the top-right */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <FaBold className="w-4 h-4 text-white cursor-pointer" />
                  <FaItalic className="w-4 h-4 text-white cursor-pointer" />
                  <FaUnderline className="w-4 h-4 text-white cursor-pointer" />
                </div>

                {/* Selected Summary Content */}
                <div className="mt-8">
                  {selectedSummary ? (
                    <p className="text-sm">{selectedSummary}</p>
                  ) : (
                    <p className="text-gray-300">No summary selected yet.</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6 w-full">
            <button className="px-4 py-2 border border-[#FF6F61] text-[#FF6F61] rounded-lg hover:bg-red-50">
              Back
            </button>
            <button className="px-4 py-2 bg-[#FF6F61] text-white rounded-lg hover:bg-red-500">
              Continue
            </button>
          </div>
        </div>

        {/* Step Sidebar */}
        <div className="flex flex-col items-center space-y-4 ml-2">
          {[1, 2, 3, 4, 5].map((step) => (
            <div
              key={step}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step === 1 ? "bg-[#FF6F61] text-white" : "border-2 border-[#FF6F61] text-[#FF6F61]"
              }`}
            >
              {step}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalSummary;