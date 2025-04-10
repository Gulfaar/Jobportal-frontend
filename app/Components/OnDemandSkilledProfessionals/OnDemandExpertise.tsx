import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const OnDemandExpertise = () => {
  return (
    <section className="relative h-[500px] max-sm:h-auto">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full max-sm:h-full">
        <Image 
          src="/ondemandexpertisecover.jpg" 
          alt="background" 
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center max-sm:py-14">
        <div className="w-full px-16 max-md:px-8 max-sm:px-5">
          <div className="max-w-[1250px] mx-auto text-center">
            {/* Heading */}
            <h1 className="text-[48px] font-semibold text-[#1E1B4B] mb-6 leading-[1.2] max-md:text-4xl max-sm:text-3xl max-sm:whitespace-normal">
              Empower Your Business With On-Demand Expertise!
            </h1>

            {/* Contact Link */}
            <div className="mb-8 text-xl text-black max-sm:text-base">
              Need skilled professionals on demand?{' '}
              <Link 
                href="/ContactUs" 
                className="text-[#2E5F5C] font-medium hover:underline"
              >
                Contact us today!
              </Link>
            </div>

            {/* Description */}
            <p className="text-[18px] text-gray-700 leading-relaxed max-sm:text-[16px]">
              With Gulfaar's AI-powered on-demand skilled professionals, you get instant access to top-tier talent across industries. Whether you need remote teams, customer service agents, IT specialists, or project-based experts, our outsourcing solutions provide the perfect balance of efficiency, affordability, and quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnDemandExpertise;
