"use client";
import React from "react";
import HeroSection from "./HeroSection";
import HowItWorksSection from "./HowItWorksSection";
import JobsSection from "./JobsSection";
import InfoSection from "./InfoSection";
import BannerSection from "./BannerSection";
import TestimonialsSection from "./TestimonialsSection";
import BlogSection from "./BlogSection";
import PartnersSection from "./PartnersSection";
import Footer from "./Footer";

function HeroWorked() {
  return (
    <div>
      <HeroSection />
      <HowItWorksSection />
      <JobsSection />
      <InfoSection />
      <BannerSection />
      <TestimonialsSection />
      <BlogSection />
      <PartnersSection />
      <Footer />
    </div>
  );
}

export default HeroWorked;
