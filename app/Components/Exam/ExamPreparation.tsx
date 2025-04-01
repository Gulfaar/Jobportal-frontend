"use client";
import * as React from "react";
import HeroSection from "./HeroSection";
import AdvantageSection from "./AdvantageSection";
import FeaturesGrid from "./FeaturesGrid";
import AIEnhancementSection from "./AIEnhancementSection";
import ExamProgramsSection from "./ExamProgramsSection";
import Footer from "./Footer";

function ExamPreparation() {
  return (
    <div className="flex flex-col bg-white">
      <HeroSection />
      <AdvantageSection />
      <FeaturesGrid />
      <AIEnhancementSection />
      <ExamProgramsSection />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/0f3bf0ba91f553108502aa0eb171d0e785597a3d?placeholderIfAbsent=true"
        alt="Exam preparation visual"
        className="object-contain mt-12 w-full aspect-[2.66] max-md:mt-10 max-md:max-w-full"
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/0a71777a7a1610c6bc53932c1fb531b9ff530536?placeholderIfAbsent=true"
        alt="Exam preparation resources"
        className="object-contain w-full aspect-[2.35] max-md:max-w-full"
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/f1e9b881e8b773b3a78e8dcd2e5a83630562727d?placeholderIfAbsent=true"
        alt="Exam preparation success stories"
        className="object-contain w-full aspect-[2.31] max-md:max-w-full"
      />
      <Footer />
    </div>
  );
}

export default ExamPreparation;
