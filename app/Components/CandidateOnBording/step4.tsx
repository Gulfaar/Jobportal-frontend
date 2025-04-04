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
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center items-center">
      <div className="flex max-w-4xl w-full bg-white rounded-lg shadow-md p-8 relative">
        {/* Left Section - Form */}
        <div className="w-3/4">
          {/* Header Card */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
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
                <h2 className="text-lg font-medium">Amanda Rawles</h2>
                <p className="text-gray-500 text-sm">alicerawles@gmail.com</p>
              </div>
              <button className="ml-auto text-sm text-emerald-600 hover:text-emerald-700">
                Change photo
              </button>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Country
                </label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
                  value={formData.country}
                  onChange={(e) => setFormData({...formData, country: e.target.value})}
                >
                  <option value="UAE">UAE</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pincode
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  value={formData.pincode}
                  onChange={(e) => setFormData({...formData, pincode: e.target.value})}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone number
                </label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="flex justify-between pt-4">
              <button
                type="button"
                className="px-4 py-2 text-rose-600 hover:text-rose-700"
              >
                Back
              </button>
              <Link href="/CandidateBoarding/Step5">
              <button
                type="submit"
                className="px-6 py-2 bg-rose-500 text-white rounded-md hover:bg-rose-600"
              >
                Continue
              </button>
              </Link>
            </div>
          </form>
        </div>

        {/* Right Section - Progress Steps */}
        <div className="w-1/4 flex flex-col items-center justify-center space-y-4">
          {[1, 2, 3, 4, 5, 6].map((step, index) => (
            <div key={index} className={`w-10 h-10 flex items-center justify-center rounded-full border border-[#D67268] text-[#D67268] ${step === 1 ? 'bg-[#D67268] text-white' : 'bg-white'}`}>
              {step}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
