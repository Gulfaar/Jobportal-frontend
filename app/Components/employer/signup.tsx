// pages/employer-signup.tsx

import React from "react";
import Link from "next/link";
import Image from "next/image";

const EmployerSignupPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side (Branding / Message) */}
      <div className="md:w-1/2 bg-teal-800 text-white flex flex-col justify-center items-center p-8 relative">
        {/* Brand or Logo */}
        <div className="mb-16">
          <Image src="/gulfaarlogo.png" alt="logo" height={160} width={160} />
        </div>

        {/* Main Title and Text */}
        <h2 className="text-2xl font-semibold mb-4 uppercase text-center">
          SIGNUP
        </h2>
        <p className="text-sm max-w-xs text-center">
          Create your employer account to connect with top talent and grow your
          business.
        </p>

        {/* Eclipses at the Bottom-Right */}
        <div className="absolute bottom-0 right-0">
          {/* First Eclipse (positioned) */}
          <Image
            src="/Ellipse1.png"
            alt="Eclipse 1"
            width={200}
            height={200}
            className="w-32 md:w-40 h-auto"
          />
          {/* Second Eclipse (overlapping the first) */}
          <Image
            src="/Ellipse2.png"
            alt="Eclipse 2"
            width={200}
            height={200}
            className="absolute bottom-0 right-0 w-32 md:w-40 h-auto mb-36 mr-24"
          />
        </div>
      </div>

      {/* Right Side (Form) */}
      <div className="md:w-1/2 bg-white flex flex-col justify-center p-8">
        <form className="max-w-md w-full mx-auto space-y-4">
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block mb-1 font-medium text-gray-700"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="username"
              className="w-full border border-gray-300 text-black rounded-md p-2 focus:outline-teal-500"
            />
          </div>

          {/* Company Name */}
          <div>
            <label
              htmlFor="company"
              className="block mb-1 font-medium text-gray-700"
            >
              Company Name
            </label>
            <input
              id="company"
              name="company"
              type="text"
              placeholder="company name"
              className="w-full border border-gray-300 text-black rounded-md p-2 focus:outline-teal-500"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block mb-1 font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="example@gmail.com"
              className="w-full border border-gray-300 text-black rounded-md p-2 focus:outline-teal-500"
            />
          </div>

          {/* Phone No */}
          <div>
            <label
              htmlFor="phone"
              className="block mb-1 font-medium text-gray-700"
            >
              Phone No
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+1 123 456 7890"
              className="w-full border border-gray-300  text-black rounded-md p-2 focus:outline-teal-500"
            />
          </div>

          {/* Industry */}
          <div>
            <label
              htmlFor="industry"
              className="block mb-1 font-medium text-gray-700"
            >
              Industry
            </label>
            <input
              id="industry"
              name="industry"
              type="text"
              placeholder="IT / Health / ... "
              className="w-full border border-gray-300 text-black rounded-md p-2 focus:outline-teal-500"
            />
          </div>

          {/* Address */}
          <div>
            <label
              htmlFor="address"
              className="block mb-1 font-medium text-gray-700"
            >
              Address
            </label>
            <input
              id="address"
              name="address"
              type="text"
              placeholder="Location, Building no..."
              className="w-full border border-gray-300  text-black text-blackrounded-md p-2 focus:outline-teal-500"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block mb-1 font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="********"
              className="w-full border border-gray-300 text-black rounded-md p-2 focus:outline-teal-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-1 font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="********"
              className="w-full border border-gray-300 text-black rounded-md p-2 focus:outline-teal-500"
            />
          </div>

          {/* Terms of Service */}
          <div className="flex items-center space-x-2">
            <input
              id="terms"
              type="checkbox"
              className="h-4 w-4 text-teal-600 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I agree to the terms of service.
            </label>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="ml-32 w-[120px] bg-teal-700 text-white px-3 py-2 rounded-md font-medium hover:bg-teal-800 transition-colors"
          >
            SIGN UP
          </button>

          {/* Login Link */}
          <p className="text-sm text-gray-600 mt-2">
            Already have an account?{" "}
            <Link href="/employer/login" className="text-teal-600 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default EmployerSignupPage;