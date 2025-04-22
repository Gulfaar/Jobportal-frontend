'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBold, faItalic, faUnderline, faListUl } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';

const SkillsForm = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [search, setSearch] = useState('');

  const resumeData = useSelector((state: RootState) => state.resume.parsedData);

  const experienceEntries = resumeData?.structured_resume?.experience || [];
  const name = resumeData?.structured_resume?.name || 'No Name';
  const email = resumeData?.structured_resume?.email || 'No Email';

  const availableSkills = [
    'User Research',
    'Visual Design',
    'Responsive Design',
    'Interaction Design',
    'Usability Testing',
    'Design Thinking',
  ];

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const filteredSkills = availableSkills.filter((skill) =>
    skill.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen md:w-[50%]  w-full flex items-start justify-center rounded-md md:shadow-md px-4 md:px-8 py-6 md:py-8">
      <div className="w-full max-w-5xl ">
        {/* Profile Header */}
        <div className="flex items-center mb-6 ">
          <div className="w-12 h-12 rounded-full overflow-hidden ">
            <Image
              src="/images/profile.svg"
              alt="Profile"
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
            <p className="text-sm text-gray-600">{email}</p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-[#D3E2E2] rounded-xl p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-semibold text-gray-900">
            Highlight 6-8 skills that align with the job requirements.
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Pick those that showcase your expertise and demonstrate confidence in your ability to employers!
          </p>

          <div className="flex flex-col lg:flex-row gap-6 mt-6">
            {/* Skills Selection */}
            <div className="w-full lg:w-1/2 bg-[#2E5F5C] rounded-md p-4 text-white">
              <h3 className="text-[#F5D5D3] font-semibold text-sm mb-2">Skills</h3>
              <div className="relative mb-3">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="absolute top-2.5 left-3 text-white-400"
                />
                <input
                  type="text"
                  placeholder="Search by job title"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 rounded-md text-white bg-transparent outline-none border border-gray-300 focus:ring-2 focus:ring-[#DA6B64]"
                />
              </div>
              <div className="max-h-48 overflow-y-auto space-y-2 scrollbar-thin scrollbar-thumb-gray-400 rounded-md p-2">
                {filteredSkills.map((skill, index) => (
                  <div
                    key={index}
                    className={`flex items-center px-3 py-2 rounded-md ${
                      selectedSkills.includes(skill)
                        ? 'bg-[#F5D5D3] text-black'
                        : 'bg-white text-black'
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
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected Skills Preview */}
            <div className="w-full lg:w-1/2 bg-[#2E5F5C] rounded-md p-4 text-white">
              <div className="flex flex-wrap gap-2 mb-2">
                {[faBold, faItalic, faUnderline, faListUl].map((icon, i) => (
                  <button key={i} className="p-1 hover:text-[#F5D5D3]">
                    <FontAwesomeIcon icon={icon} />
                  </button>
                ))}
              </div>

              <div className="h-44 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 rounded-md text-white p-3">
                {selectedSkills.length > 0 ? (
                  <ul className="list-disc list-inside space-y-1">
                    {selectedSkills.map((skill, index) => (
                      <li key={index} className="text-sm">{skill}</li>
                    ))}
                  </ul>
                ) : (
                  <div className="h-full flex items-center justify-center text-sm text-gray-300">
                    Selected skills will appear here...
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col md:flex-row justify-between mt-6 gap-4">
            <Link href="/CandidateBoarding/Step8" className="w-full md:w-auto">
              <button className="w-full md:w-auto border border-[#FF6F61] text-[#DA6B64] px-6 py-2 rounded-lg text-base hover:bg-[#FFEBE8] transition">
                Back
              </button>
            </Link>
            <Link href="/CandidateBoarding/Step10" className="w-full md:w-auto">
              <button className="w-full md:w-auto bg-[#DA6B64] text-white px-6 py-2 rounded-lg text-base hover:bg-[#c65751] transition">
                Continue
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsForm;
