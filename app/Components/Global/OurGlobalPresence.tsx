"use client";
import * as React from "react";
import HeroSection from "./HeroSection";
import GlobalPresenceInfo from "./GlobalPresenceInfo";
import OperatingRegions from "./OperatingRegions";
import ServiceFeatures from "./ServiceFeatures";
import CallToAction from "./CallToAction";
import Footer from "./Footer";

function OurGlobalPresence() {
  return (
    <div className="flex flex-col items-center bg-white">
      <HeroSection />
      <GlobalPresenceInfo />
      <OperatingRegions />
      <ServiceFeatures />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default OurGlobalPresence;
