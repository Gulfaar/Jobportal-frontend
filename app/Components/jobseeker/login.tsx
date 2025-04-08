"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { loginUser } from "../Services/AuthService";
import { useRouter } from "next/navigation"; // Use Next.js router
import { toast } from "react-toastify";
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
      router.push("/dashboard"); // Redirect using Next.js router
    } else {
      toast.error(result.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white">
      {/* Left Side (Branding / Message) */}
      <div className="w-full lg:w-1/2 bg-teal-800 text-white flex flex-col justify-center items-center p-4 sm:p-6 lg:p-8 relative min-h-[45vh] sm:min-h-[50vh] lg:min-h-screen">
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <Image src="/gulfaarlogo.png" alt="logo" height={160} width={160} className="w-28 sm:w-32 lg:w-40 h-auto" />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 uppercase text-center">LOGIN</h1>
        <p className="text-base sm:text-lg lg:text-xl font-semibold text-center">WELCOME BACK</p>
      </div>

      {/* Right Side (Form) */}
      <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center p-4 sm:p-6 lg:p-8 min-h-[55vh] sm:min-h-[50vh] lg:min-h-screen">
        <form className="max-w-md w-full mx-auto space-y-4 sm:space-y-5 px-4 sm:px-6" onSubmit={handleSubmit}>
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block mb-1.5 font-medium text-gray-700 text-sm sm:text-base">Email</label>
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
            <label htmlFor="password" className="block mb-1.5 font-medium text-gray-700 text-sm sm:text-base">Password</label>
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

          {/* Login Button */}
          <button type="submit" className="w-full bg-teal-700 text-white py-2.5 sm:py-3 rounded-md font-medium hover:bg-teal-800 transition-colors text-sm sm:text-base">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
