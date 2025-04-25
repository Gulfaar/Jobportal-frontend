"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCountry } from "@/app/redux/slices/resumeSlice";
import { RootState } from "@/app/redux/store";

// Define the Country type
interface Country {
  cca2: string;
  name: {
    common: string;
  };
}

// Static array of countries
const countriesList: Country[] = [
  { cca2: "AE", name: { common: "United Arab Emirates" } },
  { cca2: "US", name: { common: "United States" } },
  { cca2: "GB", name: { common: "United Kingdom" } },
  { cca2: "CA", name: { common: "Canada" } },
  { cca2: "AU", name: { common: "Australia" } },
  { cca2: "IN", name: { common: "India" } },
  { cca2: "FR", name: { common: "France" } },
  { cca2: "DE", name: { common: "Germany" } },
  { cca2: "IT", name: { common: "Italy" } },
  { cca2: "JP", name: { common: "Japan" } },
  { cca2: "CN", name: { common: "China" } },
  { cca2: "BR", name: { common: "Brazil" } },
  { cca2: "ZA", name: { common: "South Africa" } },
  { cca2: "MX", name: { common: "Mexico" } },
  { cca2: "RU", name: { common: "Russia" } },
  { cca2: "ES", name: { common: "Spain" } },
  { cca2: "NL", name: { common: "Netherlands" } },
  { cca2: "SE", name: { common: "Sweden" } },
  { cca2: "CH", name: { common: "Switzerland" } },
  { cca2: "SG", name: { common: "Singapore" } },
  // Add more countries as needed (e.g., up to 200+ if required)
];

const CandidateOnboardingSteps1 = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const selectedCountry = useSelector(
    (state: RootState) => state.resume.selectedCountry
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("Selected country from Redux:", selectedCountry);
  }, [selectedCountry]); // Log the selected country to ensure it's updating

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const country = e.target.value;
    dispatch(setSelectedCountry(country));
    setError(null); // Clear error when the user selects a country
  };

  const handleContinue = () => {
    if (!selectedCountry) {
      setError("Please select a country");
      return;
    }
    setError(null);
    router.push("/CandidateBoarding/Step2");
  };

  // Define the Step type for the steps array
  interface Step {
    id: number;
    title: string;
    description: string[];
    icon: string;
  }

  const steps: Step[] = [
    {
      id: 1,
      title: "Sign Up, Optimize Resume & Find Jobs",
      description: [
        "Register, create your profile & upload your resume.",
        "AI enhances your resume for better job visibility.",
        "AI job search matches you with the best roles.",
        "Detects knowledge/tech gaps & suggests upskilling.",
      ],
      icon: "/profile1.png",
    },
    {
      id: 2,
      title: "AI Screening & Pre-Interview Process",
      description: [
        "Take AI-driven tests & pre-video interviews.",
        "Get an AI match score for faster shortlisting.",
      ],
      icon: "/profile2.png",
    },
    {
      id: 3,
      title: "Get Hired, Track Progress & Grow",
      description: [
        "Receive interview invites via WhatsApp, SMS & email.",
        "Track applications, accept offers & upskill for career growth.",
      ],
      icon: "/profile3.png",
    },
  ];

  return (
    <section className="py-16 w-[80%] mx-auto text-center">
      <h2 className="text-[#2E5F5C] text-lg font-semibold mb-8">
        HERE IS WHAT YOU NEED TO KNOW
      </h2>

      <div className="flex flex-col md:flex-row items-start justify-between gap-12">
        {steps.map((step) => (
          <div key={step.id} className="flex-1 text-left">
            <div className="flex flex-col items-center mb-4">
              <img
                src={step.icon}
                alt={`Step ${step.id}`}
                className="w-12 h-12"
              />
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
        <div className="relative w-[250px]">
          <select
            value={selectedCountry || ""}
            onChange={handleCountryChange}
            className={`text-black w-full px-10 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black pr-8 ${
              error ? "" : "border-gray-300"
            }`}
          >
            <option value="" disabled>
              Select country
            </option>
            {countriesList.map((country) => (
              <option
                key={country.cca2}
                value={country.name.common}
                className="py-2 text-black"
              >
                {country.name.common}
              </option>
            ))}
          </select>
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#2E5F5C]">
            🌍
          </span>
        </div>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <button
          className="bg-[#D67268] text-white px-10 py-3 rounded-lg"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </section>
  );
};

export default CandidateOnboardingSteps1;
