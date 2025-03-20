// pages/login.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side (Branding / Message) */}
      <div className="md:w-1/2 bg-teal-800 text-white flex flex-col justify-center items-center p-8 relative">
        {/* Logo */}
        <div className="absolute top-8 left-8">
          <Image src="/gulfaarlogo.png" alt="logo" width={120} height={40} />
        </div>

        {/* Main Title */}
        <h1 className="text-3xl font-bold mb-2 uppercase">LOGIN</h1>
        <p className="text-lg font-semibold">WELCOME BACK</p>

        {/* Optional: Decorative element (e.g., plane icon) */}
        
        <div className="absolute bottom-4 right-4">
          <Image src="/gulfaarlogo.png" alt="plane icon" width={40} height={40} />
        </div>

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
          {/* Email Field */}
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
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-teal-500"
            />
          </div>

          {/* Password Field */}
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
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-teal-500"
            />
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 text-teal-600 border-gray-300 rounded mr-1"
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
            type="submit"
            className="w-full bg-teal-700 text-white py-2 rounded-md font-medium hover:bg-teal-800 transition-colors"
          >
            LOGIN
          </button>

          {/* OR - Login with Google */}
          <div className="flex items-center justify-center mt-4">
            <span className="text-gray-600">OR</span>
          </div>
          <button
            type="button"
            className="w-full border border-gray-300 flex items-center justify-center gap-2 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <Image
              src="/Google_Icon.png"
              alt="Google Logo"
              width={20}
              height={20}
            />
            Login with Google
          </button>

          {/* Sign Up Link */}
          <p className="text-sm text-gray-600 mt-4 text-center">
            Don’t have an account?{" "}
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
