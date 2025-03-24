"use client";
import CallToAction from "@/app/Components/Global/CallToAction";
import GlobalPresenceInfo from "@/app/Components/Global/GlobalPresenceInfo";
import OperatingRegions from "@/app/Components/Global/OperatingRegions";
import ServiceFeatures from "@/app/Components/Global/ServiceFeatures";
import Header from "@/app/Components/Header/Header";
import Footer from "@/app/Components/Home/Footer";

import HeroSection from "@/app/Components/Home/HeroSection";
import * as React from "react";


function OurGlobalPresence() {
  return (
    <div className="flex flex-col items-center bg-white">
       
       <Header title="OUR GLOBAL PRESENCE"
        subtitle="Connecting Talent & Businesses Across the World"
         />
      <GlobalPresenceInfo />
      <OperatingRegions />
      <ServiceFeatures />
      <CallToAction />
      <Footer/>
      
    </div>
  );
}

export default OurGlobalPresence;
