'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const ExperienceSection = () => {
  const experiences = [
    {
      position: 'UI/UX Designer',
      company: 'Oxpyn Technologies',
      location: 'Kochi, Kerala',
      duration: 'Nov-2024 - Current',
      details: [
        'Developed a strong understanding of UI/UX principles',
        'Gained knowledge in user research methodologies',
        'Acquired skills in collaborative design practices',
        'Zoople Technologies is a software training institute in Kochi, Kerala',
        'Acquired skills in collaborative design practices',
      ],
    },
    {
      position: 'UI/UX Designer',
      company: 'Oxpyn Technologies',
      location: 'Kochi, Kerala',
      duration: 'Nov-2024 - Current',
      details: [
        'Developed a strong understanding of UI/UX principles',
        'Gained knowledge in user research methodologies',
        'Acquired skills in collaborative design practices',
        'Zoople Technologies is a software training institute in Kochi, Kerala',
        'Acquired skills in collaborative design practices',
      ],
    },
  ];

  return (
    <div className="min-h-screen flex justify-center items-start  ">
      <div className="w-full max-w-6xl  shadow rounded-xl md:p-8 ">
        {/* Header */}
        <h2 className="text-lg md:text-xl font-semibold text-gray-900">Reflect on your experience.</h2>
        <p className="text-sm text-gray-600 mt-1">
          Make edits as necessary. We offer expert samples to help and inspire you.
        </p>

        {/* Add Experience Button */}
        <div className="flex justify-end mt-4">
          <Link href="/CandidateBoarding/Step6">
            <button className="border border-[#DA6B64] text-[#DA6B64] px-4 py-1.5 rounded hover:bg-red-100 text-sm">
              Add more experience
            </button>
          </Link>
        </div>

        {/* Experience Section */}
        <h3 className="text-[#DA6B64] font-semibold mt-6 text-sm">Experience</h3>
        <div className="mt-4 space-y-4">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border border-[#DA6B64] rounded-lg p-4 w-full relative flex flex-col md:flex-row gap-4"
            >
              <div className="md:w-1/3">
                <p className="font-semibold text-gray-800">{exp.position}</p>
                <p className="text-sm text-gray-600">Company name: {exp.company}</p>
                <p className="text-sm text-gray-600">{exp.location}</p>
                <p className="text-sm text-gray-600">{exp.duration}</p>
              </div>
              <div className="md:w-2/3">
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>

              {/* Desktop Icons */}
              <div className="absolute top-1 right-1 hidden md:flex flex-col items-center gap-1">
                <button className="p-2 text-[#DA6B64] hover:text-[#c95a56]">
                  <FontAwesomeIcon icon={faPen} className="w-4 h-4" />
                </button>
                <button className="p-2 text-[#DA6B64] hover:text-[#c95a56]">
                  <FontAwesomeIcon icon={faTrash} className="w-4 h-4" />
                </button>
              </div>

              {/* Mobile Buttons */}
              <div className="flex justify-end gap-2 mt-2 md:hidden">
                <button className="border border-[#DA6B64] text-[#DA6B64] px-3 py-1 rounded text-sm">
                  Edit
                </button>
                <button className="border border-[#DA6B64] text-[#DA6B64] px-3 py-1 rounded text-sm">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons (unchanged) */}
        <div className="flex flex-col-reverse md:flex-row justify-between mt-6 gap-2">
          <Link href="/CandidateBoarding/Step4">
            <button className="w-full md:w-auto border border-[#FF6F61] text-[#DA6B64] px-6 py-2 rounded-lg text-base hover:bg-[#FFEBE8] transition">
              Back
            </button>
          </Link>
          <Link href="/CandidateBoarding/Step6">
            <button className="w-full md:w-auto bg-[#DA6B64] text-white px-6 py-2 rounded-lg text-base hover:bg-[#c65751] transition">
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
