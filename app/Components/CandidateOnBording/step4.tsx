'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProfileForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    lastName: '',
    city: '',
    country: 'UAE',
    pincode: '',
    phone: '',
    email: ''
  });

  return (
    <div className="min-h-screen bg-gray-50 p-4 flex justify-center items-center">
      <div className="w-full max-w-6xl bg-[#f6fafa] rounded-lg shadow-md p-4 sm:p-6 lg:p-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="bg-white rounded-xl shadow-sm px-4 sm:px-6 py-5">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-y-4">
              {/* Welcome Text */}
              <p className="text-sm text-gray-500 font-medium">
                Welcome, <span className="text-gray-800">Amanda</span>
              </p>
              {/* Date */}
              <p className="text-sm text-gray-400">Tue, 07 June 2022</p>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-4">
              {/* Profile Image */}
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16">
                  <Image
                    src="/images/profile.svg"
                    alt="Profile"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-base font-medium text-gray-800">
                    Amanda Rawles
                  </h2>
                  <p className="text-sm text-gray-500">alexarawles@gmail.com</p>
                </div>
              </div>
              {/* Change Photo Button */}
              <button className="text-sm text-emerald-600 hover:text-emerald-700 border border-emerald-600 px-4 py-1.5 rounded-md">
                Change photo
              </button>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <form className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
              />
            </div>
          </div>

          {/* Location Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-black"
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
              >
                <option className='text-black' value="UAE">UAE</option>
                <option className='text-black' value="USA">USA</option>
                <option className='text-black' value="UK">UK</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Pincode</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.pincode}
                onChange={(e) =>
                  setFormData({ ...formData, pincode: e.target.value })
                }
              />
            </div>
          </div>

          {/* Contact Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4">
            <Link href="/CandidateBoarding/Step3" className="w-full sm:w-auto">
              <button
                type="button"
                className="w-full sm:w-auto text-[#DA6B64] hover:text-rose-700 border border-[#DA6B64] px-4 py-2 rounded-md"
              >
                Back
              </button>
            </Link>

            <Link href="/CandidateBoarding/Step5" className="w-full sm:w-auto">
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#DA6B64] text-white px-6 py-2 rounded-md hover:bg-[#c55750]"
              >
                Continue
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
