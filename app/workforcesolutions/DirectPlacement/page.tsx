"use client";

import BenefitsSection from "@/app/Components/direct/BenefitsSection";
import CallToActionSection from "@/app/Components/direct/CallToActionSection";
import HiringSystemSection from "@/app/Components/direct/HiringSystemSection";
import IntroductionSection from "@/app/Components/direct/IntroductionSection";
import JobCategoriesSection from "@/app/Components/direct/JobCategoriesSection";
import Header from "@/app/Components/Header/Header";
import Footer from "@/app/Components/Home/Footer";
import React from "react";



const DirectPlacement: React.FC = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <main className="flex flex-col bg-white min-h-screen">
      <Header title="Direct Placement" subtitle="Modern Technology, Smarter Hiring We Shortlist,You Interview"/>
        {/* <HeroSection /> */}
        <IntroductionSection />
        <HiringSystemSection />
        <JobCategoriesSection />
        <BenefitsSection />
        <CallToActionSection />
        <Footer />
      </main>
    </>
  );
};

export default DirectPlacement;
