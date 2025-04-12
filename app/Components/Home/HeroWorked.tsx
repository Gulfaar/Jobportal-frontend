"use client";
import React from "react";
import HeroSection from "./HeroSection";
import HowItWorksSection from "./HowItWorksSection";
import JobsSection from "./JobsSection";

import BannerSection from "./BannerSection";


import PartnersSection from "./PartnersSection";
import Footer from "./Footer";
import dynamic from 'next/dynamic';

const TestimonialsSection = dynamic(() => import('./TestimonialsSection'), {
  ssr: false, // disables server-side rendering
});


// Dynamically import the component that uses lottie-react
const InfoSection = dynamic(() => import("@/app/Components/Home/InfoSection"), {
  ssr: false,
});


function HeroWorked() {
  return (
    <div>
      <HeroSection />
      <HowItWorksSection />
      <JobsSection />
      <InfoSection />
      <BannerSection />
      <TestimonialsSection />
      
      <PartnersSection />
      <Footer />
    </div>
  );
}

export default HeroWorked;
