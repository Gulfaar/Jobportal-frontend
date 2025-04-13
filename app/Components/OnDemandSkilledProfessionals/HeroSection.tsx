import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  return (
    <section className="w-full max-w-[1294px] px-4 md:px-6 mx-auto py-10 md:py-10">
  <div className="flex flex-col-reverse md:flex-row items-center gap-10">
    
    {/* Text Section */}
    <div className="w-full md:w-[63%]">
      <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px]  font-semibold text-teal-800 leading-tight mb-8">
      Gulfaar delivers on-demand access to <br></br> skilled professionals
      </h2>
      
      

      <p className="mt-6 text-base sm:text-lg text-gray-700">
      Transform Your Career with Industry-Leading Skill Development
      </p>

      <p className="mt-6 text-base sm:text-lg text-neutral-900 leading-relaxed">
      At Gulfaar, we provide on-demand skilled professionals across industries, ensuring 
            businesses can scale operations, reduce hiring costs, and access top-tier expertise 
            without the hassle of long-term commitments. Whether you need BPO agents, IT 
            developers, customer support representatives, or industry-specific specialists, our 
            AI-driven outsourcing platform connects you with pre-vetted, highly skilled 
            professionals instantly. With modern technology, real-time communication tools, 
            and automated workforce management, we make outsourcing seamless, efficient, 
            and hassle-free.
      </p>

      {/* <button
        className="flex items-center gap-2 px-6 py-3 mt-8 text-sm sm:text-base font-medium text-white uppercase bg-teal-800 rounded-full tracking-wide hover:bg-teal-700 transition"
        aria-label="Get Started"
      >
        Get Started
        <img
          src="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/6307c969f4753633a930c857def46cbf555e5466?placeholderIfAbsent=true"
          className="w-4 h-4 object-contain"
          alt="Arrow icon"
        />
      </button> */}
    </div>

    {/* Image Section */}
    <div className="w-full md:w-[37%]">
  <Image
    src="/OnDemandCover.png"
    alt="Career development illustration"
    width={600} // Set appropriate width and height for layout
    height={600}
    className="w-full object-cover rounded-3xl"
  />
</div>
  </div>
</section>
  );
};

export default HeroSection;
