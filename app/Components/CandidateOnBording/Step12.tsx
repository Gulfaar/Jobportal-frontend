"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBold,
  faItalic,
  faUnderline,
  faListUl,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const PositionForm = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false); // Track client-side mount

  // Ensure component is mounted on client to avoid hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const availableSkills = [
    "UI Designer",
    "Senior Designer",
    "Junior Designer",
    "Graphics Designer",
    "UI/UX Designer",
    "Design Thinking",
  ];

  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  // Only render icons if mounted to prevent SSR issues
  if (!isMounted) return null;

  return (
    <div className="min-h-screen md:w-[52%] flex items-center justify-center  px-4 py-12 w-[120]">
      <div className="w-full max-w-5xl">
        {/* Profile Header */}
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <Image
              src="/images/profile.svg"
              alt="Profile"
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold text-gray-900">Amanda Rawles</h2>
            <p className="text-sm text-gray-600">alexarawles@gmail.com</p>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-[#D3E2E2] rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-semibold text-gray-900">
            Select industries you wish to apply
          </h2>
          <p className="text-sm text-gray-600 mt-2">Pick from the list by selecting the job title</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Skills List */}
            <div className="bg-[#2E5F5C] rounded-md p-4 shadow-sm">
              <div className="relative mb-3">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="absolute top-3 left-3 text-white"
                  size="sm" // Explicitly set size
                />
                <input
                  type="text"
                  placeholder="Search by job title"
                  className="w-full p-2 pl-10 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#DA6B64] text-white"
                />
              </div>

              <div className="max-h-48 overflow-y-auto space-y-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                {availableSkills.map((skill, index) => (
                  <div
                    key={index}
                    className={`flex items-center px-4 py-2 rounded-md transition ${
                      selectedSkills.includes(skill)
                        ? "bg-[#F5D5D3]"
                        : "bg-white hover:bg-gray-100"
                    }`}
                  >
                    <button
                      onClick={() => toggleSkill(skill)}
                      className={`w-6 h-6 flex items-center justify-center rounded-full border mr-3 text-sm ${
                        selectedSkills.includes(skill)
                          ? "bg-[#DA6B64] text-white border-[#DA6B64]"
                          : "border-gray-300 text-gray-500"
                      }`}
                    >
                      {selectedSkills.includes(skill) ? "−" : "+"}
                    </button>
                    <span className="text-sm text-gray-800">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected Skills Display */}
            <div className="bg-[#2E5F5C] rounded-md p-4 shadow-sm text-white">
              <div className="flex gap-2 mb-2">
                <FontAwesomeIcon
                  icon={faBold}
                  className="cursor-pointer hover:text-[#DA6B64]"
                  size="sm" // Explicitly set size
                />
                <FontAwesomeIcon
                  icon={faItalic}
                  className="cursor-pointer hover:text-[#DA6B64]"
                  size="sm" // Explicitly set size
                />
                <FontAwesomeIcon
                  icon={faUnderline}
                  className="cursor-pointer hover:text-[#DA6B64]"
                  size="sm" // Explicitly set size
                />
                <FontAwesomeIcon
                  icon={faListUl}
                  className="cursor-pointer hover:text-[#DA6B64]"
                  size="sm" // Explicitly set size
                />
              </div>
              <div className="h-44 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent bg-[#2E5F5C] rounded-md p-2">
                {selectedSkills.length > 0 ? (
                  <ul className="list-disc list-inside text-sm">
                    {selectedSkills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                ) : (
                  <div className="flex items-center justify-center h-full text-xs text-gray-300">
                    Selected skills will appear here...
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between mt-6">
        <Link href="/CandidateBoarding/Step10">
          <button className="border border-[#FF6F61] text-[#DA6B64] px-6 py-2 rounded-lg text-base hover:bg-[#FFEBE8] transition">
            Back
          </button>
        </Link>
        <Link href="/CandidateBoarding/Step14">
          <button className="bg-[#DA6B64] text-white px-6 py-2 rounded-lg text-base hover:bg-[#c65751] transition">
            Continue
          </button>
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default PositionForm;