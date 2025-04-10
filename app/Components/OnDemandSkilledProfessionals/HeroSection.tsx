import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  return (
    <section className="px-16 py-16 max-md:px-8 max-sm:px-5">
      <div className="max-w-[1200px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        
        {/* Left Content */}
        <div className="w-full lg:w-[850px] bg-[#2E5F5C] rounded-3xl text-white p-6">
          <p className="text-[20px] leading-relaxed max-sm:text-[17px]">
            At Gulfaar, we provide on-demand skilled professionals across industries, ensuring 
            businesses can scale operations, reduce hiring costs, and access top-tier expertise 
            without the hassle of long-term commitments. Whether you need BPO agents, IT 
            developers, customer support representatives, or industry-specific specialists, our 
            AI-driven outsourcing platform connects you with pre-vetted, highly skilled 
            professionals instantly. With modern technology, real-time communication tools, 
            and automated workforce management, we make outsourcing seamless, efficient, 
            and hassle-free.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[250px] lg:w-[450px] lg:h-[300px]">
          <Image
            src="/OnDemandCover.png"
            alt="Team Collaboration"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
