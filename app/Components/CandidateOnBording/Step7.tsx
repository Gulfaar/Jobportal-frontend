'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image'; // Import Next.js Image component
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

  // Placeholder image URL (replace with your actual image path)
 
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F9FA] px-4 py-12 w-full">
      <div className="relative w-full max-w-4xl">
        {/* Stepper Sidebar */}
        <div className="absolute top-0 right-[-60px] flex flex-col items-center space-y-4">
          {[1, 2, 3, 4, 5].map((step, index) => (
            <div
              key={index}
              className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                index === 0 ? 'bg-[#DA6B64] text-white' : 'border-[#DA6B64] text-[#DA6B64] bg-[#F5D5D3]'
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
                src='/images/profile.svg'// Replace with your actual image path
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

          {/* Education Section */}
          <div className="bg-[#F5D5D3] rounded-xl p-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-[#DA6B64] font-semibold text-sm">Education</h3>
              <Link href="/CandidateBoarding/Step8">
              <button className="border border-[#DA6B64] text-[#DA6B64] px-4 py-1.5 rounded hover:bg-red-100 text-sm">
                Add more education
              </button>
              </Link>
            </div>

            {/* Education Entries */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {educationEntries.map((entry, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-md relative border border-[#DA6B64]"
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

          {/* Buttons */}
          <div className="mt-6 flex justify-between">
            <button className="border border-[#DA6B64] text-[#DA6B64] px-6 py-2 rounded hover:bg-red-100">
              Back
            </button>
            <button className="bg-[#DA6B64] text-white px-6 py-2 rounded hover:bg-[#c95a56]">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;