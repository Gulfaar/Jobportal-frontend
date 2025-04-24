"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Home } from "lucide-react";
import { registerUser } from "../Services/jobseekeer/RegisterService";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";

const EmployerSignupPage: React.FC = () => {

   const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const BaseApi = process.env.NEXT_PUBLIC_API_BASE_URL;


    const googleAuth = () => {
      window.open(`${BaseApi}/auth/google`,);
    }



      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent default form submission
    
        const result = await registerUser(username ,email, password , confirmPassword );
    
        if (result.success) {
          toast.success("Login Successful! Redirecting...");
          router.push("/CandidateBoarding"); // Redirect using Next.js router
        } else {
          toast.error(result.message || "Login failed. Please try again.");
        }
      };

  return (
    <div className="h-screen flex flex-col md:flex-row overflow-hidden relative font-sans">
      {/* Left Section */}
      <div className="md:w-1/2 bg-teal-800 text-white flex flex-col justify-center items-center p-10 relative ">
        {/* Home icon */}
        <Link href="/" className="absolute top-4 left-4 text-white hover:text-teal-300 transition">
          <Home size={26} />
        </Link>

        {/* Logo */}
        <div className="mb-6 mt-4">
          <Image src="/gulfaarlogo.png" alt="Gulfaar Logo" width={250} height={100} />
        </div>

        {/* Title & Text */}
        <h2 className="text-3xl font-light uppercase text-center mb-3">SIGNUP</h2>
        <p className="text-lg text-center max-w-sm leading-relaxed">
          Create your account to <br />
          start your journey with us
        </p>

        {/* Hand icon */}
        <div className="mt-5">
          <Image src="/hand.png" alt="Click icon" width={20} height={20} />
        </div>

        {/* Background Circles */}
        <div className="absolute bottom-0 right-0">
          <Image
            src="/Ellipse1.png"
            alt="circle"
            width={200}
            height={200}
            className="w-40 h-auto hidden md:block"
          />
          <Image
            src="/Ellipse2.png"
            alt="circle overlay"
            width={200}
            height={200}
            className="absolute bottom-0 right-0 w-40 h-auto mb-36 mr-24 hidden md:block"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 bg-white flex flex-col justify-center p-10 relative">
        <form className="max-w-2xl w-full mx-auto space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Username */}
            <div>
              <label htmlFor="username" className="text-sm font-medium text-gray-700 block mb-1">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border-b text-black border-gray-400 focus:outline-none text-sm py-2"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="text-sm font-medium text-gray-700 block mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-b text-black border-gray-400 focus:outline-none text-sm py-2"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="text-sm font-medium text-gray-700 block mb-1">
                password
              </label>
              <input
                type="password"
                id="password"
                placeholder="********"
                value={password}
               onChange={(e) => setPassword(e.target.value)}
                className="w-full border-b text-black border-gray-400 focus:outline-none text-sm py-2"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirm-password" className="text-sm font-medium text-gray-700 block mb-1">
                confirm password
              </label>
              <input
                type="password"
                id="confirm-password"
                placeholder="********"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full border-b text-black border-gray-400 focus:outline-none text-sm py-2"
              />
            </div>
          </div>

        {/* Terms + Signup Button */}
            <div className="flex justify-between items-center mt-4">
            <div className="flex items-center space-x-2">
                <input
                id="terms"
                type="checkbox"
                className="h-4 w-4 border-gray-300 text-black rounded focus:ring-teal-600"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the terms of service.
                </label>
            </div>

            <button
                type="submit"
                className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-2 rounded-md text-sm font-semibold shadow"
            >
                SIGN UP
            </button>
            </div>


<div className="flex items-center justify-center mt-4">
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
</div>
        

          {/* Login link */}
          <p className="text-sm text-gray-600 text-center ">
            Already have an account?{" "}
            <Link href="/employer/login" className="text-teal-600 hover:underline">
              Login
            </Link>
          </p>
        </form>

        {/* Paper Plane Graphic */}
        <div className="absolute bottom-0 right-0 pr-6 pb-4 hidden md:block">
          <Image src="/letter_send.svg" alt="Paper Plane" width={200} height={200} />
        </div>
      </div>
    </div>
  );
};

export default EmployerSignupPage;
