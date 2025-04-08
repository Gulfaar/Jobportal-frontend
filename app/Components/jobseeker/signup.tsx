"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Home } from "lucide-react";
import { registerUser } from "../Services/RegisterService";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";

const EmployerSignupPage: React.FC = () => {

   const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");



      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent default form submission
    
        const result = await registerUser(username ,email, password , confirmPassword );
    
        if (result.success) {
          toast.success("Login Successful! Redirecting...");
          router.push("/"); // Redirect using Next.js router
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
