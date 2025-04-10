'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';

const EducationSection = () => {
  const educationEntries = [
    {
      role: 'UI/UX Intern',
      institution: 'Zoople Technologies',
      date: 'November 2024',
    },
    {
      role: 'UI/UX Intern',
      institution: 'Zoople Technologies',
      date: 'November 2024',
    },
    {
      role: 'UI/UX Intern',
      institution: 'Zoople Technologies',
      date: 'November 2024',
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F9FA] px-4 sm:px-6 lg:px-8 py-10">
      <div className="w-full max-w-5xl">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6 gap-4 sm:gap-6">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <Image
              src="/images/profile.svg"
              alt="Profile"
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Amanda Rawles</h2>
            <p className="text-sm text-gray-600">alexarawles@gmail.com</p>
          </div>
        </div>

        {/* Education Card */}
        <div className="bg-white rounded-xl p-6 sm:p-8 shadow">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <h3 className="text-[#DA6B64] font-semibold text-base sm:text-sm">Education</h3>
            <Link href="/CandidateBoarding/Step8">
              <button className="border border-[#DA6B64] text-[#DA6B64] px-4 py-1.5 rounded hover:bg-red-100 text-sm">
                Add more education
              </button>
            </Link>
          </div>

          {/* Education Entries */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {educationEntries.map((entry, index) => (
              <div
                key={index}
                className="bg-white border border-[#DA6B64] rounded-lg p-4 shadow-sm relative"
              >
                <p className="font-semibold text-gray-800">{entry.role}</p>
                <p className="text-sm text-gray-600">{entry.institution}</p>
                <p className="text-sm text-gray-600">{entry.date}</p>
                <button className="absolute top-4 right-4 p-2 text-[#DA6B64] hover:text-[#c95a56]">
                  <FontAwesomeIcon icon={faPen} className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between gap-4">
          <Link href="/CandidateBoarding/Step6" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto border border-[#DA6B64] text-[#DA6B64] px-6 py-2 rounded hover:bg-red-100">
              Back
            </button>
          </Link>
          <Link href="/CandidateBoarding/Step8" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-[#DA6B64] text-white px-6 py-2 rounded hover:bg-[#c95a56]">
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
