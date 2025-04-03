import React from "react";

// Define the type for each exam category
interface ExamCategory {
  title: string;
  exams: { name: string; color?: string }[];
}

// Define the props for the component (optional, for reusability)
interface ExamProgramsProps {
  categories?: ExamCategory[];
}

const ExamPrograms: React.FC<ExamProgramsProps> = ({
  categories = [
    {
      title: "Language Proficiency Exams",
      exams: [
        { name: "DELE (Official Spanish Certification)" },
        { name: "TOEFL (Test of English as a Foreign Language)" },
        { name: "OET (Occupational English Test for Healthcare Professionals)" },
        { name: "Goethe-Zertifikat A1 to C2 Levels" },
        { name: "IELTS (International English Language Testing System)" },
        { name: "PTE (Pearson Test of English)" },
        { name: "DELF/DALF (Language Proficiency Certification)" },
        { name: "HSK (Chinese) – Mandarin Language Proficiency Test" },
      ],
    },
    {
      title: "Job Qualification Exams",
      exams: [
        { name: "Nursing & Healthcare Licensing Exams – NCLEX (USA), DHA, HAAD, MOH (UAE), OET (UK, Australia)" },
        { name: "Engineering & IT Certification Exams – PMP, AWS, Microsoft, Cisco Certifications" },
        { name: "Financial & Business Exams – CFA, CPA, ACCA, GMAT" },
        { name: "Aviation & Hospitality Industry Tests" },
      ],
    },
    {
      title: "Psychometric & Aptitude Tests",
      exams: [
        { name: "AI-Based Psychometric Test – Live Video Call Assessment for Job Fit" },
        { name: "AI-Based Aptitude Test – Industry-Specific Job Readiness Evaluation" },
        { name: "Logical & Numerical Reasoning Tests – AI-driven analysis to sharpen analytical thinking" },
      ],
    },
  ],
}) => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Grid of Exam Categories in Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg ] text-left transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
            >
              {/* Category Title */}
              <div className="bg-[#00695C] text-white text-lg font-bold py-4 px-6 w-full rounded-t-lg">
                {category.title}
              </div>
              <div className="p-6">
                {/* Exam List */}
                <ul className="space-y-3 text-gray-700">
                  {category.exams.map((exam, examIndex) => (
                    <li
                      key={examIndex}
                      className="flex items-start space-x-2"
                    >
                      {/* Custom Bullet Point */}
                      <span className="w-2 h-2 mt-2 bg-[#00695C] rounded-full"></span>
                      {/* Exam Name */}
                      <span className="text-base">{exam.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamPrograms;
