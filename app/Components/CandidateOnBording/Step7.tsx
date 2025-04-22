'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';

const EducationSection = () => {
  const resumeData = useSelector((state: RootState) => state.resume.parsedData);

  const experienceEntries = resumeData?.structured_resume?.experience || [];
  const name = resumeData?.structured_resume?.name || 'No Name';
  const email = resumeData?.structured_resume?.email || 'No Email';

  return (
    <div className="w-full  flex justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6 sm:p-8">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-center gap-4 ">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <Image
              src="/images/profile.svg"
              alt="Profile"
              width={64}
              height={64}
              className="object-cover w-full h-full"
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
            <h3 className="text-[#DA6B64] font-semibold text-base">Experience</h3>
            <Link href="/CandidateBoarding/Step8">
              <button className="border border-[#DA6B64] text-[#DA6B64] px-4 py-1.5 rounded hover:bg-red-100 text-sm">
                Add more experience
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {experienceEntries.map((entry: any, index: number) => (
              <div
                key={index}
                className="border border-[#DA6B64] rounded-lg p-4 shadow-sm relative bg-white"
              >
                <p className="font-semibold text-gray-800">{entry.role}</p>
                <p className="text-sm text-gray-600">{entry.company}</p>
                <p className="text-sm text-gray-600">{entry.duration}</p>
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
          <Link href="/CandidateBoarding/Step8" className="w-full sm:w-auto">
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
