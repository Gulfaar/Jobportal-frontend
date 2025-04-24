'use client';

import Image from 'next/image';
import React from 'react';

export default function InfrastructureSection() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-12 bg-white font-fightree">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

        {/* Left Text Section */}
        <div>
          {/* Responsive Heading */}
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] text-[#285F5B] font-bold leading-tight sm:leading-snug md:leading-[1.3] mb-6">
            Where&nbsp;&nbsp;Infrastructure&nbsp;&nbsp;Meets <br className="hidden sm:block" />
            Intelligence Global Solutions,<br className="hidden sm:block" />
            Delivered Locally
          </h2>

          {/* Responsive Paragraph */}
          <p className="text-[#315A5A] text-[16px] sm:text-[18px] md:text-[20px] leading-[1.7] whitespace-pre-line font-normal">
            At Gulfaar, we don’t just manage operations we empower{" "}
            progress. Our Facilitation Management Division blends over a{" "}
            decade of hands-on experience in industrial services,facility{" "}
            maintenance,AI-powered support,and workforce{" "}
            management,delivering safe,compliant,and scalable{" "}
            solutions across the globe.{"\n\n"}
            We operate at the intersection of technology,training,and{" "}
            execution helping oil refineries run smoother,skyscrapers{" "}
            shine brighter, and clients communicate faster.From a single{" "}
            building to an entire offshore platform,Gulfaar ensures{" "}
            everything works so you can focus on growth.
          </p>
        </div>

        {/* Responsive Image */}
        <div className="w-full max-w-[500px] sm:max-w-[600px] mx-auto lg:mx-0 ">
          <Image
            src="/images/infrastructure.jpg"
            alt="Infrastructure"
            width={500}
            height={300}
            className="rounded-xl w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
