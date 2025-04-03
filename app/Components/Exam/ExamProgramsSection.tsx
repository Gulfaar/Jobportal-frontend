"use client";
import * as React from "react";
import ExamCategoryTab from "./ExamCategoryTab";
import ExamCategoryContent from "./ExamCategoryContent";

const ExamProgramsSection = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  const tabs = [
    "Language Proficiency Exams",
    "Job Qualification Exams",
    "Psychometric & Aptitude Tests",
  ];

  const languageExams = [
    "DELEOfficial Spanish Certification",
    "TOEFL(Test of English as a Foreign Language)",
    "OET(Occupational English Test for Healthcare Professionals)",
    "Goethe-ZertifikatA1️ to C2️ Levels",
    "IELTS(International English Language Testing System)",
    "PTE(Pearson Test of English)",
    "DELF/DALFLanguage Proficiency Certification",
    "HSK (Chinese) – Mandarin Language Proficiency Test",
  ];

  const jobExams = [
    "Nursing & Healthcare Licensing Exams – NCLEX (USA), DHA, HAAD, MOH (UAE), OET (UK, Australia)",
    "Engineering & IT Certification Exams – PMP, AWS, Microsoft, Cisco Certifications",
    "Financial & Business Exams – CFA, CPA, ACCA, GMAT",
    "Aviation & Hospitality Industry Tests",
  ];

  const psychometricTests = [
    "AI-Based Psychometric Test – Live Video Call Assessment for Job Fit",
    "AI-Based Aptitude Test – Industry-Specific Job Readiness Evaluation",
    "Logical & Numerical Reasoning Tests – AI-driven analysis to sharpen analytical thinking",
  ];

  const allExams = [languageExams, jobExams, psychometricTests];

  return (
    <section aria-label="Exam Programs section">
      <h2 className="self-center mt-11 text-5xl font-semibold text-black text-center max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Comprehensive Exam Preparation Programs
      </h2>
      <p className="self-center mt-8 text-2xl text-center text-black w-[643px] mx-auto max-md:max-w-full">
        Tailored preparation for a wide range of international exams to help you
        achieve your career goals.
      </p>

      <div className="flex flex-wrap gap-5 justify-between self-center mt-11 w-full text-2xl font-semibold text-center text-white max-w-[1303px] max-md:mt-10 max-md:max-w-full">
        {tabs.map((tab, index) => (
          <ExamCategoryTab
            key={index}
            title={tab}
            isActive={activeTab === index}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </div>

      <div className="z-10 self-center mt-0 w-full max-w-[1303px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {[0, 1, 2].map((index) => (
            <ExamCategoryContent
              key={index}
              items={allExams[index]}
              isVisible={true} // In a real implementation, you might want to show only the active tab
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamProgramsSection;
