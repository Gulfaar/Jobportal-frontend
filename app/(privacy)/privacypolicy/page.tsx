"use client";
import Header from "@/app/Components/Header/Header";
import Footer from "@/app/Components/Home/Footer";

import DataSecuritySection from "@/app/Components/privacypolicy/DataSecuritySection";
import DataSharingSection from "@/app/Components/privacypolicy/DataSharingSection";
import InfoCollectionSection from "@/app/Components/privacypolicy/InfoCollectionSection";
import InfoUsageSection from "@/app/Components/privacypolicy/InfoUsageSection";
import RightsCookiesSection from "@/app/Components/privacypolicy/RightsCookiesSection";
import * as React from "react";


const PrivacyPolicy: React.FC = () => {
  return (
    <main className="text-black">
      <link
        href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <Header title="PRIVACY POLICY"
       subtitle="At Gulfaar, we prioritize your privacy and securely"/>
      <InfoCollectionSection />
      <InfoUsageSection />
      <DataSharingSection />
      <DataSecuritySection />
      <RightsCookiesSection />
   
      <Footer />
    </main>
  );
};

export default PrivacyPolicy;
