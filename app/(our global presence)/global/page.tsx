"use client";
import CallToAction from "@/app/Components/Global/CallToAction";
import GlobalPresenceInfo from "@/app/Components/Global/GlobalPresenceInfo";
import WhereWeOperate from "@/app/Components/Global/OperatingRegions";
import TrustedPartner from "@/app/Components/Global/ServiceFeatures";
import Header from "@/app/Components/Header/Header";
import Footer from "@/app/Components/Home/Footer";
import * as React from "react";


function OurGlobalPresence() {
  return (
    <div className="flex flex-col items-center bg-white">
       
       <Header title="OUR GLOBAL PRESENCE"
        subtitle="Connecting Talent & Businesses Across the World"
         />
      <GlobalPresenceInfo />
      <WhereWeOperate />
      <TrustedPartner />
      <CallToAction />
      <Footer/>
      
    </div>
  );
}

export default OurGlobalPresence;
