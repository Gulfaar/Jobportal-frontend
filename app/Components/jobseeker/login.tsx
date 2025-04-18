"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { loginUser } from "../Services/jobseekeer/AuthService";
import { useRouter } from "next/navigation"; // Use Next.js router
import { toast } from "react-toastify";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { Circle } from 'lucide-react';
import "react-toastify/dist/ReactToastify.css";

const LoginPage: React.FC = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    const result = await loginUser(email, password);

    if (result.success) {
      toast.success("Login Successful! Redirecting...");
      router.push("/CandidateBoarding"); // Redirect using Next.js router
    } else {
      toast.error(result.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-8">
    <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Login Section */}
      <div className="flex items-center justify-center bg-white px-4">
        <div className="w-full max-w-sm">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2e6b66] mb-6">Log in</h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="E-mail address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2e6b66] shadow-sm text-base md:text-lg text-gray-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2e6b66] shadow-sm text-base md:text-lg text-gray-500"
            />

            <div className="flex justify-end">
              <a href="#" className="text-sm md:text-base text-[#2e6b66] hover:underline">Forget password</a>
            </div>

            <button
              type="submit"
              className="w-full bg-[#2e6b66] text-white font-semibold py-3 rounded-2xl hover:bg-[#255a58] transition text-base md:text-lg"
            >
              Submit
            </button>
          </form>

          <div className="text-center mt-6 text-sm md:text-base text-black font-semibold">
            Or login with
          </div>

          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-[#2e6b66] text-2xl md:text-3xl hover:text-[#255a58]">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-[#2e6b66] text-2xl md:text-3xl hover:text-[#255a58]">
              <FaInstagram />
            </a>
            <a href="#" className="text-[#2e6b66] text-2xl md:text-3xl hover:text-[#255a58]">
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      {/* Register Section */}
      <div className="bg-[#D6655A] ml-10  text-white p-4 md:p-6 lg:p-8 rounded-2xl shadow-md flex flex-col md:justify-between  mt-0 md:mt-0  md:ml-14 w-[72%]">
        <div className=" ">
          <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-4 md:mb-6 text-center">Register</h3>
          <ul className="space-y-2 md:space-y-4 text-sm md:text-base text-white/90">
  <li className="flex items-start gap-2">
    <Circle className="w-3 md:w-4 lg:w-5 h-3 md:h-4 lg:h-5 mt-1 text-white" />
    <span className="text-sm md:text-base">
      Let our AI-powered platform highlight your strengths and boost your visibility to employers.
    </span>
  </li>
  <li className="flex items-start gap-2">
    <Circle className="w-3 md:w-4 lg:w-5 h-3 md:h-4 lg:h-5 mt-1 text-white" />
    <span className="text-sm md:text-base">
      Let our AI-powered platform highlight your strengths and boost your visibility to employers.
    </span>
  </li>
  <li className="flex items-start gap-2">
    <Circle className="w-3 md:w-4 lg:w-5 h-3 md:h-4 lg:h-5 mt-1 text-white" />
    <span className="text-sm md:text-base">
      Add your skills, experience, and preferred job sectors to get matched faster.
    </span>
  </li>
  <li className="flex items-start gap-2">
    <Circle className="w-3 md:w-4 lg:w-5 h-3 md:h-4 lg:h-5 mt-1 text-white" />
    <span className="text-sm md:text-base">
      Our AI finds the best job opportunities based on your profile — no endless searching.
    </span>
  </li>
  <li className="flex items-start gap-2">
    <Circle className="w-3 md:w-4 lg:w-5 h-3 md:h-4 lg:h-5 mt-1 text-white" />
    <span className="text-sm md:text-base">
      Apply for verified positions across 22+ countries with trusted employers.
    </span>
  </li>
  <li className="flex items-start gap-2">
    <Circle className="w-3 md:w-4 lg:w-5 h-3 md:h-4 lg:h-5 mt-1 text-white" />
    <span className="text-sm md:text-base">
      Get certified, interview-ready, and deployed with end-to-end career assistance from Gulfaar.
    </span>
  </li>
</ul>

        </div>

        <div className="mt-4 md:mt-6 text-center">
          <Link href={'/jobseeker/signup'}>
          <button className="bg-[#2E5F5C] text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-[#244a47] transition text-sm md:text-base">
            Create free account
          </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
  );
};

export default LoginPage;
