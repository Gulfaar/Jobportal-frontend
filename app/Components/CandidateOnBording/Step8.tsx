'use client';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import { addEducation } from '@/app/redux/slices/resumeSlice';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const AddEducationForm = () => {
  const [formData, setFormData] = useState({
    collegeName: '',
    fieldOfStudy: '',
    graduationMonth: '',
    graduationYear: '',
    stillStudying: false,
  });

  const dispatch = useDispatch();
  const router = useRouter();

  const resumeData = useSelector((state: RootState) => state.resume.parsedData);
  const name = resumeData?.structured_resume?.name || 'No Name';
  const email = resumeData?.structured_resume?.email || 'No Email';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addEducation(formData));
    router.push('/CandidateBoarding/Step7');
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center sm:py-6">
      <div className="relative w-full max-w-3xl">
        <div className="w-full shadow-md rounded-xl p-6 sm:p-8">
          {/* Profile Header */}
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">Add more Education</h2>
          <p className="text-sm sm:text-base text-gray-600 mt-1">Make Edits as necessary</p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            <div className="flex flex-col sm:flex-row justify-between mt-6 gap-3 sm:gap-0">
              <Link href="/CandidateBoarding/Step7" className="w-full sm:w-auto">
                <button
                  type="button"
                  className="w-full sm:w-auto border border-[#FF6F61] text-[#DA6B64] px-6 py-2 rounded-lg text-base hover:bg-[#FFEBE8] transition"
                >
                  Back
                </button>
              </Link>

              <button
                type="submit"
                className="w-full sm:w-auto bg-[#DA6B64] text-white px-6 py-2 rounded-lg text-base hover:bg-[#c65751] transition"
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
