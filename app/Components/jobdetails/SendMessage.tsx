import React from 'react';
import { HiOutlineUser, HiOutlineMail } from 'react-icons/hi';
import { BsTelephone, BsChatDots } from 'react-icons/bs';

const SendMessage = () => {
  return (
    <div className="bg-[#EBF5F4]  rounded-lg p-6">
      <h3 className="text-xl font-semibold text-center text-gray-700 mb-6">
        Send Us Message
      </h3>
      <form className="space-y-4">
        {/* Full Name Field */}
        <div className="relative">
          <HiOutlineUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
          <input
            type="text"
            placeholder="Full name"
            className="w-full pl-12 pr-4 py-3 rounded-lg bg-white text-black focus:outline-none border border-gray-200"
          />
        </div>
        
        {/* Email Field */}
        <div className="relative">
          <HiOutlineMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full pl-12 pr-4 py-3 rounded-lg bg-white text-black focus:outline-none border border-gray-200"
          />
        </div>

        {/* Phone Number Field */}
        <div className="relative">
          <BsTelephone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full pl-12 pr-4 py-3 rounded-lg bg-white text-black focus:outline-none border border-gray-200"
          />
        </div>

        {/* Message Field */}
        <div className="relative">
          <BsChatDots className="absolute left-4 top-4 text-gray-400 text-xl" />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full pl-12 pr-4 py-3 rounded-lg bg-white text-black focus:outline-none border border-gray-200"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-teal-700 hover:bg-teal-800 text-white py-3 px-4 rounded-lg font-medium transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default SendMessage;

