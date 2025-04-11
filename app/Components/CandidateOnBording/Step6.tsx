'use client';
import Link from 'next/link';
import { useState } from 'react';
import OnboardingCard from './OnboardingCard'; // Import OnboardingCard

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

  const handleInputChange = (e:any) => {
    const { name, value, type } = e.target;
    const checked = e.target.checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="h-full flex items-center justify-center  md:px-6 md:py-12 w-full">
      <OnboardingCard>
        <h2 className="text-xl font-semibold text-gray-900">Reflect on your experience.</h2>
        <p className="text-sm text-gray-600 mt-1">
          Make edits as necessary. We offer expert samples to help guide and inspire you.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Job title</label>
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleInputChange}
                className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#DA6B64]"
                placeholder="Job title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Company name</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#DA6B64]"
                placeholder="Company name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#DA6B64]"
                placeholder="Country"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Start date</label>
              <input
                type="text"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#DA6B64]"
                placeholder="Start date"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">End date</label>
              <input
                type="text"
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
                className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#DA6B64]"
                placeholder="End date"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Description (if any)</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#DA6B64] h-32"
              placeholder="Description (if any)"
            />
          </div>

          <div className="mt-4">
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

          <div className="flex justify-between mt-6">
            <Link href="/CandidateBoarding/Step5">
              <button className="border border-[#FF6F61] text-[#DA6B64] px-6 py-2 rounded-lg text-base hover:bg-[#FFEBE8] transition">
                Back
              </button>
            </Link>
            <Link href="/CandidateBoarding/Step7">
              <button className="bg-[#DA6B64] text-white px-6 py-2 rounded-lg text-base hover:bg-[#c65751] transition">
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
