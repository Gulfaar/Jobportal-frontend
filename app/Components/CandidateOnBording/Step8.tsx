'use client';
import { useState } from 'react';
import Image from 'next/image'; // Import Next.js Image component

const AddEducationForm = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    collegeName: '',
    fieldOfStudy: '',
    graduationMonth: '',
    graduationYear: '',
    stillStudying: false,
  });

  // Handle input changes
  const handleInputChange = (e: { target: { name: any; value: any; type: any; checked: any; }; }) => {
    const { name, value, type, checked } = e.target;
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
        <div className="absolute top-0 right-[-80px] flex flex-col items-center space-y-14">
          {[1, 2, 3, 4, 5].map((step, index) => (
            <div
              key={index}
              className={`relative w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                index === 2 ? 'bg-[#DA6B64] text-white' : 'border-[#DA6B64] text-[#DA6B64] bg-[#F5D5D3]'
              } ${
                // Add dashed line for all steps except the last one
                index < 4
                  ? 'before:content-[""] before:absolute before:top-8 before:left-1/2 before:-translate-x-1/2 before:h-16 before:border-l-2 before:border-dashed before:border-[#DA6B64]'
                  : ''
              }`}
            >
              {step}
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="w-full bg-white rounded-xl p-8">
          {/* Profile Header */}
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              {/* Using Next.js Image component for the profile image */}
              <Image
                src="/images/profile.svg" // Replace with your actual image path
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

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* College Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">College name</label>
                <input
                  type="text"
                  name="collegeName"
                  value={formData.collegeName}
                  onChange={handleInputChange}
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DA6B64] text-black"
                  placeholder="College name"
                />
              </div>

              {/* Graduation Month */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Graduation month</label>
                <input
                  type="text"
                  name="graduationMonth"
                  value={formData.graduationMonth}
                  onChange={handleInputChange}
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DA6B64] text-black"
                  placeholder="Graduation month"
                />
              </div>

              {/* Field of Study */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Field of study</label>
                <input
                  type="text"
                  name="fieldOfStudy"
                  value={formData.fieldOfStudy}
                  onChange={handleInputChange}
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DA6B64] text-black"
                  placeholder="Field of study"
                />
              </div>

              {/* Graduation Year */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Graduation year</label>
                <input
                  type="text"
                  name="graduationYear"
                  value={formData.graduationYear}
                  onChange={handleInputChange}
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DA6B64] text-black"
                  placeholder="Graduation year"
                />
              </div>
            </div>

            {/* Checkbox */}
            <div className="mt-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="stillStudying"
                  checked={formData.stillStudying}
                  onChange={handleInputChange}
                  className="form-checkbox h-5 w-5 border-gray-300 rounded focus:ring-[#DA6B64] text-[#DA6B64]"
                />
                <span className="ml-2 text-sm text-gray-700">I’m still studying</span>
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

export default AddEducationForm;