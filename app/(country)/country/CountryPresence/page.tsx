"use client";
import { BranchesSection, HeroSection, PresenceSection, TeamSection , IndustriesSection, BenefitsSection } from "@/app/Components/Country/country";
import Header from "@/app/Components/Header/Header";
import Footer from "@/app/Components/Home/Footer";
import * as React from "react";


const ConturyPresence  = () => {

  return(
    <main className="overflow-hidden bg-white">
       <Header title="COUNTRIES"
        subtitle="Register today to unlock exciting job opportunities"/>
       <PresenceSection/>
       <BranchesSection/>
       <TeamSection/>
       <IndustriesSection/>
       <BenefitsSection/>
       <Footer/>


    </main>
  )


}

export default ConturyPresence;




  
   