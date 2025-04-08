// pages/login.tsx
"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { loginUser } from "../Services/AuthService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const LoginPage: React.FC = () => {

  const navigate = useNavigate();
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async (e: React.FormEvent) => {
  
    const result = await loginUser(email, password);

    if (result.success) {
      toast.success("Login Successful! Redirecting...");
      navigate("/dashboard");
    } else {
      toast.error(result.message || "Login failed. Please try again.");
    }
  };




  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white">
      {/* Left Side (Branding / Message) */}
      <div className="w-full lg:w-1/2 bg-teal-800 text-white flex flex-col justify-center items-center p-4 sm:p-6 lg:p-8 relative min-h-[45vh] sm:min-h-[50vh] lg:min-h-screen">
        {/* Logo */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <Image 
            src="/gulfaarlogo.png" 
            alt="logo" 
            height={160} 
            width={160} 
            className="w-28 sm:w-32 lg:w-40 h-auto"
          />
        </div>

        {/* Main Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 uppercase text-center">LOGIN</h1>
        <p className="text-base sm:text-lg lg:text-xl font-semibold text-center">WELCOME BACK</p>

        {/* Optional: Decorative element (e.g., plane icon) */}
        <div className="absolute bottom-4 right-4 hidden sm:block">
          <Image 
            src="/gulfaarlogo.png" 
            alt="plane icon" 
            width={40} 
            height={40} 
            className="w-8 sm:w-10 lg:w-12"
          />
        </div>

        {/* Eclipses at the Bottom-Right */}
        <div className="absolute bottom-0 right-0 hidden sm:block">
          {/* First Eclipse (positioned) */}
          <Image
            src="/Ellipse1.png"
            alt="Eclipse 1"
            width={200}
            height={200}
            className="w-24 sm:w-32 lg:w-40 h-auto"
          />
          {/* Second Eclipse (overlapping the first) */}
          <Image
            src="/Ellipse2.png"
            alt="Eclipse 2"
            width={200}
            height={200}
            className="absolute bottom-0 right-0 w-24 sm:w-32 lg:w-40 h-auto mb-24 sm:mb-32 lg:mb-36 mr-16 sm:mr-20 lg:mr-24"
          />
        </div>
      </div>

      {/* Right Side (Form) */}
      <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center p-4 sm:p-6 lg:p-8 min-h-[55vh] sm:min-h-[50vh] lg:min-h-screen">
        <form className="max-w-md w-full mx-auto space-y-4 sm:space-y-5 px-4 sm:px-6">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block mb-1.5 font-medium text-gray-700 text-sm sm:text-base"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 text-black rounded-md p-2.5 text-sm sm:text-base focus:outline-teal-500"
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block mb-1.5 font-medium text-gray-700 text-sm sm:text-base"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 text-black rounded-md p-2.5 text-sm sm:text-base focus:outline-teal-500"
            />
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 text-teal-600 border-gray-300 rounded mr-2"
              />
              <label htmlFor="remember" className="cursor-pointer">
                Remember me?
              </label>
            </div>
            <Link href="/forgot-password" className="hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
          type="button"
            onClick={handleSubmit}
            className="w-full bg-teal-700 text-white py-2.5 sm:py-3 rounded-md font-medium hover:bg-teal-800 transition-colors text-sm sm:text-base"
          >
            LOGIN
          </button>

          {/* OR - Login with Google */}
          <div className="flex items-center justify-center my-4 sm:my-5">
            <span className="text-gray-600 text-sm sm:text-base px-4">OR</span>
          </div>
          <button
            type="button"
            className="w-full border border-gray-300 flex items-center justify-center gap-3 py-2.5 sm:py-3 rounded-md text-gray-700 hover:bg-gray-100 transition-colors text-sm sm:text-base"
          >
            <Image
              src="/Google_Icon.png"
              alt="Google Logo"
              width={32}
              height={32}
              className="w-6 h-6 sm:w-7 sm:h-7"
            />
            Login with Google
          </button>

          {/* Sign Up Link */}
          <p className="text-xs sm:text-sm text-gray-600 mt-4 sm:mt-5 text-center">
            Don't have an account?{" "}
            <Link href="/employer/signup" className="text-teal-600 hover:underline">
              SIGN UP
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

