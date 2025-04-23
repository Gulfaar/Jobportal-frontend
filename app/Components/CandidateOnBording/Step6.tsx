'use client';
import Link from 'next/link';
import { useState } from 'react';
import OnboardingCard from './OnboardingCard';

const AddExperienceForm = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    companyName: '',
    country: '',
    startDate: '',
    endDate: '',
    description: '',
    currentlyWorking: false,
  });

  const handleInputChange = (e: any) => {
    const { name, value, type } = e.target;
    const checked = e.target.checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-8 ">
      <OnboardingCard  >
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">Add more experinece</h2>
        <p className="text-sm sm:text-base text-gray-600 mt-1">
        Make edits as necessary.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">Job title</label>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-[#DA6B64]"
              placeholder="e.g., Software Engineer"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Company name</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                className="mt-1 w-full p-2 border text-black border-gray-300 rounded-md focus:ring-2 focus:ring-[#DA6B64]"
                placeholder="e.g., Google"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="mt-1 w-full p-2 border text-black border-gray-300 rounded-md focus:ring-2 focus:ring-[#DA6B64]"
                placeholder="e.g., United States"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Start date</label>
              <input
                type="text"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                className="mt-1 w-full p-2 border text-black border-gray-300 rounded-md focus:ring-2 focus:ring-[#DA6B64]"
                placeholder="MM/YYYY"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">End date</label>
              <input
                type="text"
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
                className="mt-1 w-full p-2 border text-black border-gray-300 rounded-md focus:ring-2 focus:ring-[#DA6B64]"
                placeholder="MM/YYYY"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description (optional)</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="mt-1 w-full p-2 border text-black border-gray-300 rounded-md focus:ring-2 focus:ring-[#DA6B64] h-28 resize-none"
              placeholder="Brief description of your role"
            />
          </div>

          <div className="mt-2">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="currentlyWorking"
                checked={formData.currentlyWorking}
                onChange={handleInputChange}
                className="form-checkbox h-5 w-5 text-[#DA6B64] border-gray-300 rounded focus:ring-[#DA6B64]"
              />
              <span className="ml-2 text-sm text-gray-700">I’m currently working here</span>
            </label>
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 mt-6">
            <Link href="/CandidateBoarding/Step5">
              <button
                type="button"
                className="w-full sm:w-auto border border-[#FF6F61] text-[#DA6B64] px-6 py-2 rounded-lg text-base hover:bg-[#FFEBE8] transition"
              >
                Back
              </button>
            </Link>
            <Link href="/CandidateBoarding/Step5">
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#DA6B64] text-white px-6 py-2 rounded-lg text-base hover:bg-[#c65751] transition"
              >
                Continue
              </button>
            </Link>
          </div>
        </form>
      </OnboardingCard>
    </div>
  );
};

export default AddExperienceForm;