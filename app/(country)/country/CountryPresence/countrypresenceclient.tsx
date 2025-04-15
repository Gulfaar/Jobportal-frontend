// app/(country)/country/CountryPresence/CountryPresenceClient.tsx
"use client";

import {
  BranchesSection,
  TeamSection,
  IndustriesSection,
  BenefitsSection,
  PresenceHeroSection,
} from "@/app/Components/Country/country";

import Header from "@/app/Components/Header/Header";
import Footer from "@/app/Components/Home/Footer";
import { useSearchParams } from "next/navigation";
import * as React from "react";

const CountryPresenceClient = () => {
  const searchParams = useSearchParams();
  const countryParam = searchParams.get("county")?.toUpperCase() || "INDIA"; // fallback

  return (
    <main className="overflow-hidden bg-white">
      <Header
        title="COUNTRIES"
        subtitle="Register today to unlock exciting job opportunities"
      />
      <PresenceHeroSection countryParam={countryParam} />
      <BranchesSection countryParam={countryParam} />
      {countryParam === "USA" && <TeamSection countryParam={countryParam} />}
      <IndustriesSection />
      <BenefitsSection />
      <Footer />
    </main>
  );
};

export default CountryPresenceClient;
