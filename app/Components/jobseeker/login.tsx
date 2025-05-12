"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { loginUser } from "../Services/jobseekeer/AuthService";
import { useRouter } from "next/navigation"; // Use Next.js router
import { toast } from "react-toastify";
import Cookies from 'js-cookie';
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaGoogle } from 'react-icons/fa';
import { Circle } from 'lucide-react';

import "react-toastify/dist/ReactToastify.css";

const LoginPage: React.FC = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const BaseApi = process.env.NEXT_PUBLIC_API_BASE_URL;




  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    const result = await loginUser(email, password);
    console.log(result.data._id, 'Backend');


    if (result.success) {
      Cookies.set('jwt', result.token, {
        expires: 1,
        path: '/',
        sameSite: 'Strict'
      });
      toast.success("Login Successful! Redirecting...");

      router.push("/CandidateBoarding");
    } else {
      toast.error(result.message || "Login failed. Please try again.");
    }
  };

  const googleAuth = () => {
    window.open(`${BaseApi}/auth/google`,);
  }

  const linkedinAuth = () => {
    window.open(`${BaseApi}/auth/linkedin`,);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-8">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 px-3 gap-8">
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
              {/* <button
                type="button"
                onClick={linkedinAuth}
                className="text-[#2e6b66] cursor-pointer text-2xl md:text-3xl hover:text-[#255a58] focus:outline-none"
              >
                <FaLinkedinIn />
              </button> */}
              <button onClick={googleAuth} className="relative flex items-center justify-center px-6 py-2 border border-gray-300 rounded-md shadow-md bg-white hover:bg-gray-100 transition duration-200 cursor-pointer">
                <div className="absolute inset-0"></div>
                <div className="flex items-center space-x-4">
                  <div className="w-5 h-5">
                    <svg className="w-full h-full" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                      <path fill="none" d="M0 0h48v48H0z"></path>
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Sign in with Google</span>
                </div>
                <span className="sr-only">Sign in with Google</span>
              </button>


              {/* <a href="#" className="text-[#2e6b66] text-2xl md:text-3xl hover:text-[#255a58]">
                <FaFacebookF />
              </a> */}
            </div>
          </div>
        </div>

        {/* Register Section */}
        <div className="bg-[#D6655A]     text-white p-4 md:p-6 lg:p-8 rounded-2xl shadow-md flex flex-col justify-center items-center   mt-0 md:mt-0  md:ml-14 ">
          <div className="  ">
            <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-4 md:mb-6 text-center">Register</h3>
            <ul className="space-y-2 md:space-y-4 text-sm md:text-base text-white/90">
              <li className="flex items-start gap-2">
                <Circle className="w-3 md:w-3 lg:w-5 h-3 md:h-3 lg:h-3 mt-1 text-white" />
                <span className="text-sm md:text-base">
                  Create a free account then upload or  manually enter  your  CV.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Circle className="w-3 md:w-4 lg:w-5 h-3 md:h-4 lg:h-3 mt-1 text-white" />
                <span className="text-sm md:text-base">
                  Let our AI-powered platform highlight your strengths and boost your visibility to employers.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Circle className="w-3 md:w-4 lg:w-5 h-3 md:h-4 lg:h-3 mt-1 text-white" />
                <span className="text-sm md:text-base">
                  Add your skills, experience, and preferred job sectors to get matched faster.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Circle className="w-3 md:w-4 lg:w-5 h-3 md:h-4 lg:h-3 mt-1 text-white" />
                <span className="text-sm md:text-base">
                  Our AI finds the best job opportunities based on your profile, no endless searching.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Circle className="w-3 md:w-4 lg:w-5 h-3 md:h-4 lg:h-3 mt-1 text-white" />
                <span className="text-sm md:text-base">
                  Apply for verified positions across 22+ countries with trusted employers.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Circle className="w-3 md:w-4 lg:w-5 h-3 md:h-4 lg:h-3 mt-1 text-white" />
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