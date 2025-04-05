'use client';
import { useState } from 'react';

const AddExperienceForm = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    jobTitle: '',
    companyName: '',
    country: '',
    startDate: '',
    endDate: '',
    description: '',
    currentlyWorking: false,
  });

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle form submission (you can customize this)
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add your submission logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F9FA] px-4 py-12 w-full">
      <div className="relative w-full max-w-3xl">
        {/* Stepper Sidebar */}
        {/* <div className="absolute top-0 right-[-60px] flex flex-col items-center space-y-4">
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
        </div> */}

        {/* Main Content */}
        <div className="w-full bg-white rounded-xl p-8">
          {/* Header */}
          <h2 className="text-xl font-semibold text-gray-900">Reflect on your experience.</h2>
          <p className="text-sm text-gray-600 mt-1">
            Make edits as necessary. We offer expert samples to help guide and inspire you.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Job Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Job title</label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DA6B64]"
                  placeholder="Job title"
                />
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Company name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DA6B64]"
                  placeholder="Company name"
                />
              </div>

              {/* Country */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Country</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DA6B64]"
                  placeholder="Country"
                />
              </div>

              {/* Start Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Start date</label>
                <input
                  type="text"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DA6B64]"
                  placeholder="Start date"
                />
              </div>

              {/* End Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700">End date</label>
                <input
                  type="text"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleInputChange}
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DA6B64]"
                  placeholder="End date"
                />
              </div>
            </div>

            {/* Description */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Description (if any)</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DA6B64] h-32"
                placeholder="Description (if any)"
              />
            </div>

            {/* Checkbox */}
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

            {/* Buttons */}
            <div className="mt-6 flex justify-between">
              <button
                type="button"
                className="border border-[#DA6B64] text-[#DA6B64] px-6 py-2 rounded hover:bg-red-100"
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-[#DA6B64] text-white px-6 py-2 rounded hover:bg-[#c95a56]"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddExperienceForm;