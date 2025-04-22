"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import OnboardingCard from "./OnboardingCard"; // Import OnboardingCard
import { RootState } from "@/app/redux/store";
import { useSelector } from "react-redux";

// Define the Country type based on REST Countries API response
interface Country {
  cca2: string;
  name: {
    common: string;
  };
}

export default function ProfileForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    lastName: "",
    city: "",
    country: "UAE", // Default value
    pincode: "",
    phone: "",
    email: "",
  });
  const [countries, setCountries] = useState<Country[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Fetch countries from REST Countries API
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data: Country[] = await response.json();
        // Sort countries alphabetically by common name
        const sortedCountries = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sortedCountries);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "country") setError(null); // Clear error when country is selected
  };

  // Handle Continue button click
  const handleContinue = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!formData.country) {
      e.preventDefault(); // Prevent navigation
      setError("Please select a country");
      return;
    }
    setError(null); // Clear error if valid
  };
  const resumeData = useSelector((state: RootState) => state.resume.parsedData);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <OnboardingCard>
        {/* Header Section */}
        <div className="mb-6">
          <div className="bg-[#f6fafa] rounded-xl shadow-sm px-4 py-5">
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
                  <img
                    src={resumeData?.profile_image_url || "/images/profile.svg"}
                    onError={(e) => {
                      e.currentTarget.src = "/images/profile.svg";
                    }}
                    alt="User Profile"
                    className="w-full h-full object-cover"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Location Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
              <input
                type="text"
                name="city"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
              <select
                name="country"
                className={`w-full px-3 py-2 border rounded-md bg-white text-black ${error ? "border-red-500" : "border-gray-300"
                  }`}
                value={formData.country}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select country
                </option>
                {countries.map((country) => (
                  <option key={country.cca2} value={country.name.common} className="py-2 text-black">
                    {country.name.common}
                  </option>
                ))}
              </select>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Pincode</label>
              <input
                type="text"
                name="pincode"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.pincode}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Contact Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            <Link href="/CandidateBoarding/Step3">
              <button className="border border-[#FF6F61] text-[#DA6B64] px-6 py-2 rounded-lg text-base hover:bg-[#FFEBE8] transition">
                Back
              </button>
            </Link>
            <Link href="/CandidateBoarding/Step5" onClick={handleContinue}>
              <button className="bg-[#DA6B64] text-white px-6 py-2 rounded-lg text-base hover:bg-[#c65751] transition">
                Continue
              </button>
            </Link>
          </div>
        </form>
      </OnboardingCard>
    </div>
  );
}