"use client";

import { useRouter } from "next/navigation";

const CandidateOnboardingSteps1 = () => {


  const router = useRouter();

  const steps = [
    {
      id: 1,
      title: "Sign Up, Optimize Resume & Find Jobs",
      description: [
        "Register, create your profile & upload your resume.",
        "AI enhances your resume for better job visibility.",
        "AI job search matches you with the best roles.",
        "Detects knowledge/tech gaps & suggests upskilling."
      ],
      icon: "/profile1.png",
    },
    {
      id: 2,
      title: "AI Screening & Pre-Interview Process",
      description: [
        "Take AI-driven tests & pre-video interviews.",
        "Get an AI match score for faster shortlisting."
      ],
      icon: "/profile2.png",
    },
    {
      id: 3,
      title: "Get Hired, Track Progress & Grow",
      description: [
        "Receive interview invites via WhatsApp, SMS & email.",
        "Track applications, accept offers & upskill for career growth."
      ],
      icon: "/profile3.png",
    }
  ];

  return (
    <section className="py-16 w-[80%] mx-auto text-center">
      <h2 className="text-[#2E5F5C] text-lg font-semibold mb-8">HERE IS WHAT YOU NEED TO KNOW</h2>
      
      <div className="flex flex-col md:flex-row items-start justify-between gap-12">
        {steps.map((step) => (
          <div key={step.id} className="flex-1 text-left">
            <div className="flex flex-col items-center mb-4">
              <img src={step.icon} alt={`Step ${step.id}`} className="w-12 h-12" />
              <p className="text-gray-400">Step {step.id}</p>
            </div>
            <h3 className="text-[#2E5F5C] font-bold mb-2">{step.title}</h3>
            <ul className="list-disc pl-5 text-gray-600">
              {step.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

  <div className="mt-18 md:mt-10 flex flex-col items-center gap-4">
  <button className="border border-gray-400 px-16 py-4 rounded-lg flex items-center gap-2">
    <span>🌍</span> Select country
  </button>
  <button
    className="bg-[#D67268] text-white px-10 py-3 rounded-lg"
    onClick={() => router.push("/CandidateBoarding/Step2")} // ✅ Navigate to Step2
  >
    Continue
  </button>
</div>
    </section>
  );
};

export default CandidateOnboardingSteps1;
