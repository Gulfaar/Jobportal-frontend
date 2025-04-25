'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';

const EducationSection = () => {
  const resumeData = useSelector((state: RootState) => state.resume.parsedData);

  const educationEntries = resumeData?.structured_resume?.education || [];
  const name = resumeData?.structured_resume?.name || 'No Name';
  const email = resumeData?.structured_resume?.email || 'No Email';

  return (
    <div className="w-full flex justify-center px-2  ">
      <div className="w-full max-w-5xl space-y-6">
        
        {/* Profile Card */}
        <div className="bg-white rounded-lg shadow p-4 flex items-center gap-4">
          <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-300">
            <img
              src={resumeData?.profile_image_url || '/images/profile.svg'}
              onError={(e) => {
                e.currentTarget.src = '/images/profile.svg';
              }}
              alt="User Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
            <p className="text-sm text-gray-600">{email}</p>
          </div>
        </div>

        {/* Education Section */}
        <div className="bg-[#DA6B64]/30 rounded-lg p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h3 className="text-lg font-bold text-black">Education</h3>
            <Link href="/CandidateBoarding/Step8">
              <button className="border border-[#DA6B64] text-[#DA6B64] px-4 py-2 rounded-md hover:bg-[#DA6B64]/10 text-sm">
                Add more Education
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {educationEntries.map((entry: any, index: number) => (
              <div
                key={index}
                className="bg-white rounded-md shadow-md p-6 relative"
              >
                <p className="font-medium text-gray-800">{entry.degree}</p>
                <p className="text-sm text-gray-600">{entry.institution}</p>
                <p className="text-sm text-gray-600">{entry.year}</p>
                <button className="absolute bottom-4 right-4 text-[#DA6B64] hover:text-[#c95a56]">
                  <FontAwesomeIcon icon={faPen} className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 w-full p-5">
          <Link href="/CandidateBoarding/Step9" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto border border-[#FF6F61] text-[#DA6B64] px-5 py-2 rounded-lg text-sm sm:text-base hover:bg-[#FFEBE8] transition">
              Back
            </button>
          </Link>
          <Link href="/CandidateBoarding/Step9" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-[#DA6B64] text-white px-5 py-2 rounded-lg text-sm sm:text-base hover:bg-[#c65751] transition">
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
