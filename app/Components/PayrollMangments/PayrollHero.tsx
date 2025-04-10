import React from 'react';
import Image from 'next/image';

const PayrollBanner: React.FC = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center font-figtree">
      {/* Background Image */}
      <Image
        src="/images/payroll.svg" // Replace with your actual image path
        alt="Payroll Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
        priority
      />

      {/* Yellow Overlay with reduced opacity */}
      <div className="absolute inset-0 bg-[#FFF200] opacity-40 z-10"></div>

      {/* Content Container */}
      <div className="relative z-20 text-center px-6 max-w-4xl">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight mb-6">
          Simplify Payroll, Empower Your Business!
        </h1>

        {/* Subheading */}
        <p className="text-2xl md:text-3xl font-medium text-gray-900 mb-8">
          Let us handle payroll, so you can focus on what matters most—{' '}
          <a href="#" className="text-blue-700 underline hover:text-blue-800 transition-colors">
            Contact us today!
          </a>
        </p>

        {/* Description */}
        <div className=" bg-opacity-80 backdrop-blur-sm p-6 rounded-lg max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
            With Gulfaar's AI-powered payroll management, you get error-free, compliant, 
            and hassle-free salary processing—all while ensuring your employees stay 
            satisfied and your business stays compliant.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PayrollBanner;