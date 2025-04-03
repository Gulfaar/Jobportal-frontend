"use client";
import Header from "@/app/Components/Header/Header";
import Footer from "@/app/Components/Home/Footer";
import BenefitsSection from "@/app/Components/Payrollmanagement/BenefitsSection";
import CTASection from "@/app/Components/Payrollmanagement/CTASection";
import DescriptionSection from "@/app/Components/Payrollmanagement/DescriptionSection";
import FeaturesSection from "@/app/Components/Payrollmanagement/FeaturesSection";
import HowItWorksSection from "@/app/Components/Payrollmanagement/HowItWorksSection";
import React from "react";



const PayrollManagement: React.FC = () => {
  return (
    <>
      <Header title="Payroll Management"
        subtitle="Your Team, Managed by Us"/>
      <DescriptionSection />
      <HowItWorksSection />
      <BenefitsSection />
      <FeaturesSection/>
      <CTASection />
      <Footer/>
    </>
  );
};

export default PayrollManagement;
