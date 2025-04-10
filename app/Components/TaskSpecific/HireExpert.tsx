"use client";

import React from "react";
import illustration from "../../../public/illustration.svg"

const HireExperts = () => {
    return (
      <section className="bg-gradient-to-b from-[#ECF4F3] to-white py-16 px-6 flex justify-center w-full">
        <div className="max-w-6xl w-full flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold text-[#0B1C3F] mb-2">Hire The Right Experts, Instantly!</h2>
          <p className="text-gray-500 mb-12">Need skilled professionals on demand? Contact us today!</p>
  
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full">
            {/* Left Content Box */}
            <div className="bg-white p-8 rounded-2xl shadow-md text-center md:text-left max-w-xl">
              <p className="text-gray-700 leading-relaxed">
                With Gulfaar’s AI-powered task-specific workforce solutions, you get highly skilled, on-demand professionals whenever and wherever you need them. Whether it's construction, maintenance, driving, or cleaning services, we provide instant access to a ready-to-work, fully verified workforce.
              </p>
            </div>
  
            {/* Right Image */}
            <div className="max-w-sm">
              <img src={illustration} alt="Illustration" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default HireExperts;
  