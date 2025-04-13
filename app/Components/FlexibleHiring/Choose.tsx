import Image from "next/image";
import { Circle } from 'lucide-react';

const features = [
  {
    title: "Faster Hiring, Smarter Matches",
    description: "AI finds the right candidates instantly",
  },
  {
    title: "Seamless Payroll & Compliance",
    description: "We manage salaries, contracts, and regulations",
  },
  {
    title: "On-Demand Workforce Scaling",
    description: "Scale up or down based on business needs",
  },
  {
    title: "Pre-Screened, Interview-Ready Talent",
    description: "AI-assessed and pre-vetted candidates",
  },
  {
    title: "Effortless Communication",
    description: "Instant candidate contact via WhatsApp, SMS, and mobile notifications",
  },
  {
    title: "Cost-Effective & Hassle-Free",
    description: "Save time and money with contract-based workforce solutions",
  },
];

export default function WhyChooseGulfaar() {
  return (
    <section className="w-full bg-[#2E5F5C] py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl text-white md:text-4xl font-bold mb-10">
          Why Choose Gulfaar's AI-Powered Flexible Hiring?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-3">
            <Circle size={20} className="text-white mt-1" />
            <div>
                <h3 className="font-semibold text-white text-sm">{feature.title}</h3>
                <p className="text-xs text-yellow-300">{feature.description}</p>
                <h3 className="font-semibold text-white text-sm">{feature.title}</h3>
                <p className="text-xs text-white">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}