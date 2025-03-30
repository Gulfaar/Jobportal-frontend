"use client";
import React from "react";
import HeroSection from "./HeroSection";
import DescriptionSection from "./DescriptionSection";
import HowItWorksSection from "./HowItWorksSection";
import BenefitsSection from "./BenefitsSection";
import FeaturesSection from "./FeaturesSection";
import CTASection from "./CTASection";
import FooterSection from "./FooterSection";

const PayrollManagement: React.FC = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;600;700&family=Poppins:wght@400;600&family=DM+Sans:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <HeroSection />
      <DescriptionSection />
      <HowItWorksSection />
      <BenefitsSection />
      <FeaturesSection />
      <CTASection />
      <FooterSection />
    </>
  );
};

export default PayrollManagement;
