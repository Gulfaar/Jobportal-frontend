'use client';
import { useState } from 'react';
import Image from 'next/image'; // Import Next.js Image component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBold, faItalic, faUnderline, faListUl } from '@fortawesome/free-solid-svg-icons';

const SkillsForm = () => {
  // State to manage selected skills
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  // List of available skills
  const availableSkills = [
    'User Research',
    'Visual Design',
    'Responsive Design',
    'Interaction Design',
    'Usability Testing',
    'Design Thinking',
  ];

  // Toggle skill selection
  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  // Handle form submission (you can customize this)
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log('Selected Skills:', selectedSkills);
    // Add your submission logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F9FA] px-4 py-12 w-full">
      <div className="relative w-full max-w-3xl">
        {/* Stepper Sidebar */}
        <div className="absolute top-0 right-[-80px] flex flex-col items-center space-y-14">
          {[1, 2, 3, 4, 5].map((step, index) => (
            <div
              key={index}
              className={`relative w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                index === 3 ? 'bg-[#DA6B64] text-white' : 'border-[#DA6B64] text-[#DA6B64] bg-[#F5D5D3]'
              } ${
                index < 4
                  ? 'before:content-[""] before:absolute before:top-8 before:left-1/2 before:-translate-x-1/2 before:h-16 before:border-l-2 before:border-dashed before:border-[#DA6B64]'
                  : ''
              }`}
            >
              {step}
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="w-full">
          {/* Profile Header */}
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              {/* Using Next.js Image component for the profile image */}
              <Image
                src="/images/profile.svg" // Replace with your actual image path
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

          {/* Skills Section */}
          <div className="bg-[#D3E2E2] rounded-xl p-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Highlight 6-8 skills that align with the job requirements.
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Pick those that showcase your expertise and demonstrate confidence in your ability to employers!
            </p>

            <div className="flex mt-6 gap-6">
              {/* Skills List with Scrollbar */}
              <div className="w-1/2 bg-[#2E5F5C] rounded-md p-3 shadow-sm">
                <h3 className="text-[#DA6B64] font-semibold text-sm mb-2">Skills</h3>
                <div className="relative bg-white rounded-r-2xl">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none ">
                    <FontAwesomeIcon icon={faSearch} className="text-gray-400 " />
                  </div>
                  <input
                    type="text"
                    placeholder="Search by job title"
                    className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DA6B64] text-black"
                  />
                </div>
                <div className="mt-3 max-h-40 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent space-y-2">
                  {availableSkills.map((skill, index) => (
                    <div
                      key={index}
                      className={`flex items-center px-4 py-2 bg-gray-100 rounded-md ${
                        selectedSkills.includes(skill) ? 'bg-[#F5D5D3]' : 'bg-gray-100'
                      }`}
                    >
                      <button
                        onClick={() => toggleSkill(skill)}
                        className={`w-6 h-6 flex items-center justify-center rounded-full border mr-3 ${
                          selectedSkills.includes(skill)
                            ? 'bg-[#DA6B64] text-white border-[#DA6B64]'
                            : 'border-gray-300 text-gray-500'
                        }`}
                      >
                        {selectedSkills.includes(skill) ? '−' : '+'}
                      </button>
                      <span className="text-sm text-gray-800">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Text Editor Placeholder */}
              <div className="w-1/2 bg-[#2E5F5C] rounded-md p-3 shadow-sm">
                <div className="text-white h-56">
                  <div className="flex gap-2 mb-1">
                    <button className="p-1">
                      <FontAwesomeIcon icon={faBold} />
                    </button>
                    <button className="p-1">
                      <FontAwesomeIcon icon={faItalic} />
                    </button>
                    <button className="p-1">
                      <FontAwesomeIcon icon={faUnderline} />
                    </button>
                    <button className="p-1">
                      <FontAwesomeIcon icon={faListUl} />
                    </button>
                  </div>
                  <div className="h-44 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                    {selectedSkills.length > 0 ? (
                      <ul className="list-disc list-inside text-white">
                        {selectedSkills.map((skill, index) => (
                          <li key={index} className="text-sm">{skill}</li>
                        ))}
                      </ul>
                    ) : (
                      <div className="h-full flex items-center justify-center text-gray-500">
                        <span className="text-xs">Selected skills will appear here...</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-between">
            <button
              type="button"
              className="border border-[#DA6B64] text-[#DA6B64] px-6 py-2 rounded hover:bg-red-100"
            >
              Back
            </button>
            <button
              onClick={handleSubmit}
              className="bg-[#DA6B64] text-white px-6 py-2 rounded hover:bg-[#c95a56]"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsForm;