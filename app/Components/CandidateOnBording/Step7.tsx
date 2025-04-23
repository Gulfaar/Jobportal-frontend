'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';

const EducationSection = () => {
  const resumeData = useSelector((state: RootState) => state.resume.parsedData);

  const educationEntries = resumeData?.structured_resume?.education || [];
  const name = resumeData?.structured_resume?.name || 'No Name';
  const email = resumeData?.structured_resume?.email || 'No Email';

  return (
    <div className="w-full  flex justify-center p-2 mt-9">
      <div className="w-full max-w-4xl sm:p-8">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-center gap-4 ">
          <div className="w-16 h-16 rounded-full overflow-hidden">
          <img
              src={resumeData?.profile_image_url || "/images/profile.svg"}
              onError={(e) => {
                e.currentTarget.src = "/images/profile.svg";
              }}
              alt="User Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
            <p className="text-sm text-gray-600">{email}</p>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
            <h3 className="text-[#DA6B64] font-semibold text-base">Education</h3>
            <Link href="/CandidateBoarding/Step8">
              <button className="border border-[#DA6B64] text-[#DA6B64] px-4 py-1.5 rounded hover:bg-red-100 text-sm">
                Add more Education
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {educationEntries.map((entry: any, index: number) => (
              <div
                key={index}
                className="border border-[#DA6B64] rounded-lg p-4 shadow-sm relative bg-white"
              >
                <p className="font-semibold text-gray-800">{entry.degree}</p>
                <p className="text-sm text-gray-600">{entry.institution}</p>
                <p className="text-sm text-gray-600">{entry.year}</p>
                <button className="absolute top-4 right-4 text-[#DA6B64] hover:text-[#c95a56]">
                  <FontAwesomeIcon icon={faPen} className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-3 mt-8">
          <Link href="/CandidateBoarding/Step6" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto border border-[#FF6F61] text-[#DA6B64] px-6 py-2 rounded-lg text-base hover:bg-[#FFEBE8] transition">
              Back
            </button>
          </Link>
          <Link href="/CandidateBoarding/Step9" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-[#DA6B64] text-white px-6 py-2 rounded-lg text-base hover:bg-[#c65751] transition">
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
